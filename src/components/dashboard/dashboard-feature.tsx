/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5mWaMKGjHu58UAMN69PPEC4MmxCpwhsuLRRHEbN1PJQ49LS6bYuEHHrW9nYESLGX83UjuB3iqx4iDC5EsjiFceh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NzJuADsxc8FXStzvDib8NwyojwnYTPBD5TN9kQZAoC6d123zPiMfjpxdTWJGa3Xcbqg7e3GxFKUEoXFR1Sc55WR",
  "key1": "5N89sM8F3oNjUCcwYiVXWTSEFkySi9vdHfmvHoEsCVJEQLsb581bPT5VopDVYxrGGwYyVdPBPJG6Z3ni3ybUAVXV",
  "key2": "4pme8ZhSrcSuVXFmDT4cwncp7Ys4QRuKQpL2M5pULhxRtAg5tnUxYTg2eZQL8QqkNXG1hTizcbpdtWg5LCnsEsDP",
  "key3": "S4ATbr6hNbwWf25ghCYdSeiXYQy97MhvEoVkMP5CySJD1k2RECNvgWxPeXBT3xxKE1BJKMjemgDMCDVCXxzoC3i",
  "key4": "QBmNPM61UK6k3F2yy5GT2G8pFjEhFTPs9BAUigYBE6jKbZFeWCDXvFGHSftmYNNBVWwZzXoEvy6x7y8a4FShWGV",
  "key5": "3pi6quvCTZrJKujGzKzBRG3xiQ2irPTdBeaYg4mTcjTteu3hBftisnJ2fiM77MweGJG8hahT1UEfQLSH1qT61uvH",
  "key6": "3TbXsQFCFdJTSSG1r9RoRrkA7wuHNkMEYFWyMdgK3fkFK8jYPZmZYfomEQKzvweDGiXKDebKr2kix4sXBh1UZzZy",
  "key7": "4LeVA5RWcjYGmFsVMvYG68CG6YbZQCG68tsY7PGivvqUUu378F1StcNq52Nh5VqbavSftyZCY5NH4ggTTgitAisp",
  "key8": "24vZJ4DzEbMUAgzQfBk9h3ywcQESNiZNzoiBgFozWN4dUDBYjVKaQ6xQknt2785B1vxeqLmJJSokfLeKFuS1LzUr",
  "key9": "LR4vNtYecxvdEZc3xZopMv8BG3qrVJhPTsiH3mQZNMpRUW9Hdzu6qLheHKLfsy18U8J5oQTWyS5dnu1mPVaMdQr",
  "key10": "5a5h2ggRxvFgTehbEFZMwsmdGX6ZcchhmjKBwyzJ9WvVGaWspqjCQnm86GaoNHbPzBaBJs8Enxv6GwDsvzJcJmPv",
  "key11": "2pYec5HAn5GUF4ysUCiaMscyKH3ouEsbd6RsskYpXigFpjRxqh8nbxHsNXyMyaTnZSf1p68wRJPpzcidyK6nPztv",
  "key12": "3nJKoDePMyxkUQomCRCEeM1KerJUGRoB6r3LdnYqoQnvKaLW2mYeJ3a4wghbvNEg24s9f9LYa8dvkb7BWbEZVsbb",
  "key13": "27LLFkgVPp84kQZgGDpDaWGn5DGGdmjFmhvxZNNphNrRpb967WAwew99haNHuoEwmsuoGyj7ieWvgdwYoyLFeCDZ",
  "key14": "4GFUVNP4DTGErLMi3shhUbg1tueoV17pkFMqD5XkB3Xp7kBC7NVUQP23fApRga7pruv7akuX1dKMA5g85asciX9k",
  "key15": "3GRwGtd5enH25Hosjn5Xwy49SzvDwm7hoy2qAsiC5FiSX5goaAMPg6hpYRizBr93BkmerAxEEC5KusPgVT88Fkcm",
  "key16": "5X31Fn7s38oyqbUZD8Gr9eoY3n8opfUnS1cGq9pUHVECztgent2pDHvvyUhg5ghFmbtq5HjHzwa1EBRFYQXHw3CB",
  "key17": "36sBwwj5yGTB4ds5BAZdgSwyvAxaGoAMTva2KiyiUqzzCDWSYSMdh2WwRwSSRrvwaR2yzeFedgx2CAKbmekL2U18",
  "key18": "5xMCqHj3PUA58fJstspxn7CED8WCkBr4JQLcTBVeEombgZTc47tq2cSbqqpBDyrnFHjsaQqBZwZdkMc3r6b3Htih",
  "key19": "3oJ184QTZicVAktaxgt41K1YJAuyUW6cbwcniRGPURXfYsiWPMznvb5E4a4HYBvZ8xkR5hBWYKWj5evuQGdKy2Gf",
  "key20": "4f87DBNUuHLr2HB8F6T7eScgRMBrMFDhqnCzRUj6qT6ysgoTxbR6k34oUdYCe7XB9C5RFBTAnYDY9gXcR1ezHHK8",
  "key21": "33S5bzuph4ZojCfF8GKtxhFxhsrV3h8QiV4Jmdv7LcUeMZPEMu61zujwv7ZjJpm6MX1t9DQW4ieCW2tWLZus2Cf1",
  "key22": "3kLuDunSSSWTwgU7jYzkmfrk1ZTMMivFSkBMYMRa2a9WtercmtQrhzKvvExMpUf3J475QbDNkRuJyNMnZhA1NnuL",
  "key23": "5e1jZAkvhqxD32eoLpx7rsuRqPEPRCjx8rkL7WmUdvpxS7ejqien4QJ21Qv3H4depJ9fy2DKcyUpJ5pJbbaU49Uw",
  "key24": "3K3LHGd6Ry1koEBFZfjzrawH4ncHpp7D2XDjSFb8UTNRnbpbyuJHoyLcM8QiZvGHgGChTCzubqdhrdMqCc3PyGod",
  "key25": "SNPE4EyW6gZqyC55yoVyt8qD17ExHJ9bRKfBQxK8sKdPh7mNH1UY5FkhT9SHr9kArYXqPjHkj7nfLMeCFwtt6CA",
  "key26": "4p4gVYHgDQBpCiZqbyVhRFbKttubL71KbHn2ZquJdmDVL5bQDNyu55hXUm1H5oWAK3Y6T3qhCrJaC8EEjic9RGYH",
  "key27": "3x1SP3bvD9V2EvXhEUBtoaZARpA2XPNU2vmK88zvgb9BYrBRN9zAZB4ctHHsmYpK45UVVurvxKRrvQUxJLyKWhbA",
  "key28": "3JQsM7x9h4XVZG81N5Hdw4iMmvdieAbVd3UGMvgymigndNKFgnk4Yry5no8qD8LTrkokFMWooTvR5HDLoHTANagC",
  "key29": "3TERiirNfZb535aP8Hu7pdrzgXHvenhMeuTwqmNxGtP34NxPeMMf26v7nRzUxWD1JrGyHe2yYKvVoN1TjaNK55u9",
  "key30": "7gYrzbs5c7aZWi1UBf4AEoRJMHP26HSXhbZDV5qzJgj4r8KZbq4Lu23qdqbhw3e5ptmYWQuw92vX2V1dUkiAVxs",
  "key31": "43vwKoHPQt5FGoNVcB1f6wPPnyKpgBVQqWTeHAdf4yJfTY8h5CDuTcettZ2wXP34Hv11q1G2DxygtowaFW6bYvM3",
  "key32": "5wA4Tb9ERTd1piFCEM4TEf9DajLT6eyWAXLpHaoExK23qLdng8QMYgwYXeCTsDiUVXX3aLh6WgqFakAEYk3s8mBP",
  "key33": "YobUdg2723c4Q839jtrJCWoNF25okxG5iQVDU1PT8YFxm87sxL5tB1sbYZxWJWjQUYKTgJEuU9fBzPsb5evAPty",
  "key34": "udmfWAwNAhQpqP2eK9F8FU2w7UsPTrewqJovRbicGgBNhNXExbjfL3jAAyfNLQE9JG4FUgwxradwMRNAr9Wi9bo"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
