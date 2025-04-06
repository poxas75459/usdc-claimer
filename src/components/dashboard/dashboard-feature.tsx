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
    "3RWhxF9MNHUxk1LubGxGAgEDzJvfEexChTfDecaU6jPdUhMFWpj8qwpxUw6WYhProcWh5xcKMQGX4wZL8Vpg8TeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WizYxMRdJK3A44gN8JE1qaYBGPPmWE7yM7SWu2rVqV7v6oWYpC7Uw8ZwQ7NtyP1dEuP711gveT8y6JYziamKoQq",
  "key1": "4RhzbBwcNewd3qbc5qxmPT2pFkWmFwyPEKHdQN9WviPKYUgezUcndsSDkkFygzsDqpxBxmMwioGAdH2uxAf9ytjF",
  "key2": "n3URu7A5vHV61c5dnJP2oNBmu6FqvdrHHVUu4SDBtReg7Zzqtqes4iMKFo4fUsoyWgawpsKYYExQv5VkWaTxR4j",
  "key3": "WwjVLqaBLm5NmoHoakP6XNAN5rXhD5RPUXTmjHtMQXLeLjibqXewWZkLEcVfvjEFoFBKEdWeEfaxJsbvgAdPbyj",
  "key4": "3LWVdtSV3D4jQZ69buqj8bXkmyWbYjUJFUN8LVAek5NteMECvMbJByk7NC3sFrdRV5gFqSHAxmG4kWmtggxP5qB8",
  "key5": "4u9hBdTPRmWi7u7jwzWM6U9sHjdaTBoaTUZUQmwUFcRnsuXh9oWtvGxQDRLWWS1BGzeGrL2QW4D7i5WC2y9xbKkj",
  "key6": "5mZ6fa22PbRZ6kdVe8xZBAa237qp3KYpB26rnLK57vQxHPTzLcx4iaHM2h5JRvQ2mTYbaRWHNzvTjAp4RjsRmMSq",
  "key7": "2Hdb7UUkLCmjBUVXM5Cq6RUGUn4nT7jWJVDtHrtWo694khH62Xf7Cx2ELDnNP2bbvaDqpXRpQFRbbcABBud2aMTG",
  "key8": "35wC2CYSoevzB4R5dkAne9R537kerJvJ3okTRGkccKrAXAxVCjZbPbUEGnJcaS6y8xVZXBTYS6EvYFrE2CtoiiH1",
  "key9": "2pdxnunZyhWM3HtYvzwdTyXkXmtymj54CRhTMj6UhUct4NrqNVXhVbFR9SJZ7FC5S9nzyU1s71XDAaphUmiYhuwa",
  "key10": "2ozBh3zyrBagjugGpquSM6gKpXUbN39637SAxhR1cH5katRa5VkzNa6ssLuoJPfMP9ZuWKd8BQTBvKPGPhauF8qy",
  "key11": "3F2KmSEixiH1YtmcpfUKhZTBDz99bbkVovLM5YdT59TNraunSniCcnntf5WnGS9aHSxVbiJLH2e5Y31vTGHAiSV4",
  "key12": "6d4Z1G1RfYZ7P9DRCemW6vdPumD366WrdRjHECAM4avytQTGqdsjS4GBXx1UBHVC4TSVY4tD1fvpgJNQEnrhpow",
  "key13": "3YAQDF816NQrm6u5AFP1Cd3pWT6QaSuFxNJEWnH6fds4pV5Vcd5h8eFdLPz6VbV1fA8KMXEguKQrERa1gnApYszf",
  "key14": "2z9RpYB8hMNjYhmEzSjbR19FhydhBhBf6tsAbQkWjSbqZgwSPzDvvCE6XEmcwPToyNoBoxCb4tMD6pXZfuxRjDwd",
  "key15": "4xFkBHD1odvit3VBa8LbaR8XSSSY7UKZoV4nnQrDxWxym8XWJAjiYAeZaTxbGw7fENNuhZwT72KKasYcrcrB9TPB",
  "key16": "4pbcz4Z2WyqW2X5TcmmeqauSeLKh3oWxNsazcXasgqbCngrRot9hF5hQ9tRVFtmDaYPQXJWgCp13GHjBP8s2GYMf",
  "key17": "8jDMpcGoxg8LBXq3Rms6ToHLLUoevc8qhTykVypbos1WT7tNShAjngzM8f3MaD2KUeZu9TkSbkMosa2TUkLTtW5",
  "key18": "2CBo9x8LcbnxK7MmAERjEVe2PFvQsvwTGpQkYnrm24woLMAp6xHs5BZxvohdbfgQXodrYzAMLZP62W8xtHzSJmnn",
  "key19": "uuPxUUjxvSY5M7qqoLyTZYFwrYV2gtaygk8S2hpmL3RZ8wusTL29gn1y5eQYRyWu1GBV3X79KQAKVo14T5SHwer",
  "key20": "51cmH4y2fezMP2DaqnKdcHf61t4M6Kqts6qWJ77roDJnCf7NMAkanLhr8AmAYsWeNRSiKzygG2AqS6FDFZFjaSBg",
  "key21": "3gPCgvnoJXP5yGFfEj5bRoB37HTpXroSfxZbY1SSDz3uj7uc79KxvnXmyUwcs3yTBz7mx5hgg44YFEQaN4szLzEB",
  "key22": "5rNnYzhDg6yrUPowZppumAEGX4zcvY9gN1F1x9BCn5MHUD8qSEvHnoFdHuy4bpztujzE4rbkeyaxQYDUzuS2MQNP",
  "key23": "3NZoruEeDRyVWpV15znUS9sfRxtSXky1eQ3UMpUcn4MnKRLxDvsALdyg3syASVjE6zLVjfVGc6TfNf68SmjDceHk",
  "key24": "3AUZtfJAjd4gtwCunne3jWBQtWhCxxhVUdLPJYAx2Su4LiQ72VMdSU6thUvVDFSnPb9NP1xLDGoyoHNk2YXqGrAj",
  "key25": "h1eU2X175m8KUc6zSyFBn5FguqiiU7ntLP3zDWe5Rz6ySSKnw2CaHU7rTFisHoeTV4cWxku9CCpDAGgoQPjncCt",
  "key26": "5KTy2zvCH62pxnqPY3iE3KdBSMNdLSgt8g8QQC5rnJqTAdSAJXim1a7D24wiWk1dQRarLjenQL91H2ZRc8XW5bUa",
  "key27": "52beZwqVGFyCLCUpFnUEfo2ZNquomoSgJGJwyccrsjyrb6MvHqLY9T4g5ACn44wKi8guvqyWAznf3mTQK5KARms4",
  "key28": "2stYUopqEWDmkghLki9iSEXmC3hfNsxSxoUG4qsW6PdtKnGDqGrciqNeCDfgFHPoyrh9DMYd5acVqMpSYEbPoF34",
  "key29": "a6Q3FqNc3erf4eN1YduxK82fgy19P1EPgdVrpKBoTkQNw1Sz8Es9FHJYw1A2WG95sgmAAWb2FAvAzdyyTnBdsTn",
  "key30": "2WaN2FCXkUwKkNqm4TWGUSfTHTTGxGYA4tXocCctvmeaQTA5QBSaXDx75dZLaqEoi8guJ8dF9fHu8U3swG5582Lh",
  "key31": "3WV1E6uHtY4RTTPRRJ3d7gp7bqiMN1k956EH3LtUyrXgeyggNaSyE2ukNc9Hy71kcjyHUTBnbwBtBXiyzXBTVTh4",
  "key32": "3NWRAMCaBvVJPcDALfRP8Pw45MaZoeKQjMLWnjSxHfL9QvnXWnioa6aEJYv5CxNp46iMEB8dFQW6ZTdon5WygACi",
  "key33": "4ibYdsXcBJsyVtE5qpp8A4csrF1QCmsn4oZtuCKwSViNvvAh57sNbPoXw74koiZho3RWfZBAJmHnxJAB3UPbEeVk",
  "key34": "mVTYcsdve3soTxHLkuaMQL4p42BzeTQ211HPu3XgkGwj1U1kUtViBcqruY3s5eCXvq6hbghLpaenrUbNhevJS7u",
  "key35": "BYkuceTkLQ8mQEJyhLcpJwqch86mNBLwFvQDrRzvPhkfCQGH6hM7oBoTQ1HX7yfUYsGusAMK38Fxj8LYusCZJRq"
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
