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
    "4QXAH2vafzwZoRCFt1CmJMakaWkoYccSiZUfi45XftN2zxG1rpAsrtCrrkHMBpREK3zhyVjbWiUdujuGCZvsifoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUZ74YWoE3hwGQkEeZe3yUQU7BYc6hyZjrxiVrs95cCFbxXVhB4yqM1FHtvjJDbo6H6HdeyD5TRRnFFPH13G4AB",
  "key1": "5TEDsGbCv9pKAargW6gfPGVh87UskqKgGjg7u8KgY2jgNq4rDhX9nwnifNytGeuKkz98f8aT3yqcHuczKBHVaY6t",
  "key2": "4p7oQ8sK313Nxig9FCs57Mfz5DbVMM3rTTfNtnaSxLAr5jQ9vYP4Ao9vLSafY6gNCVVPFiv2rGhXRMxfLqr4g6ko",
  "key3": "3NcuLkFgcfLi1nrVo1niZhzbKEbDLRgzYGN8qKtFTmVXxjhSUcFDYdjZK47cJYETGayKvaLpUrF528dufP1WHuKc",
  "key4": "5Ek9SbnS6JeRW7g1aZLq1eqMbGKCrKNMP7RVEgcoB5F1Jb87P23j8Drh3txsddpydMRURa5pLtwFg7y7zpFzf4Ru",
  "key5": "2oRSqB3j1xLqQiteuBgEgLEuQ43KQQHRZsN8uzTnkQPFiuwkypDbKwABnAUF1JuyJcT1ZkQXHSPnmE5oxvyxyZSy",
  "key6": "37gdDMMAkBcXsLmU3fALBT8PohxPoDj4FukeNeD2uKmrmpx4f2ZBcinUt88NwqDTDsroXfNYnUxHzUzU2Kbpx2bq",
  "key7": "2LnvLTn5Zzta86cAbE9qn5B1JbgciWeE1qawMBpS2uxkPo7gsYxQZEjCKKKHJ5ZpqSSWms4oSbAB3gSFWvGukFKg",
  "key8": "3U8NzUVbpp61FNuw8RQXGpCLep9AH6PswvxR2vQRFi69v7NkfdivMvNZoRFXME1rvSt5sP1r5XabZ7hBGLxr1xH4",
  "key9": "5zBiqUvRfjXMb9DcRnZNT1oatLiZwt8ueqjCZR8ipPoVmsRo58CGgwcxYXgT6Lqi6hkyacAcuDxgsBje5TXwkmFB",
  "key10": "LnEeMqzkN2psZ1diNMALTjc4YaEcyExBjJHFLPwqAmtjupBXXvfVfxqtnEtEPazDd9GB85BGHFRgihehSxnKsu9",
  "key11": "2MXqLLpzeZCnxphcd8FmZDmBtgXKydpMACQUU8f4P1aAP8MzPJvgru2ozNoKqbWtx2LjwTcPJEvMHo7k9GtnH2HC",
  "key12": "3SsXzCgpTSAXYEmbU6GCnzaZEoq2YZdiinzPnRnyJxSycv2iQbWybjZB2XLC5ynyDXsEuxMoxH77ymMrWHX3oFaa",
  "key13": "TEgBtgbjyw1dr9JydvV8hFzxU1yCfA5mzLNz8xDvtVjuyfKiwCLZtsMhb1LQR9aQ42989Bpcfkn1jcVXQLspVwC",
  "key14": "3ePowxMBx865B57nSoGfKPKCM39HTCT4Z6ihsaHVuU3yFNtmtz1Fzmq7usEYLH6XRQCuh2xDvDr39pdB1VszmAAF",
  "key15": "5CSzaJbwcVF8QwbekJxuudxNYBrY44siRmwrFsx3bLxqTHCcwudGeWebAvmAxLAxvA1ijRzRPhBCZTvA6WkXUmQb",
  "key16": "6522uHPJz2z8t5me3haX9EQqfvuTo7MKERWfsqWaH4vTtqs2u89LTLqhnMLcYyZvPKGv3v4xkx3mjK1aKMWdhQLM",
  "key17": "3jYuFoRbyZA7VsX3XV4L6UfcvRMh2ty6QMP2TqMJq1eRhYan9jUcS9hiaMGP1Pv27oCSMVzfosCnXHEWkmtEBWkZ",
  "key18": "4UjwsNmasj6NJJBE1Pt36sVYYstjESJ552uEqc7AZpfECAqxWefn7qN929Wn3d9vwHbryVWJmDpYyLRKsmaVCKd",
  "key19": "5e1H1xS2JiZzoFHLo5Qqg45Ed2net5om3WFGuvfRpcj6VAcCBNv7gqGezvBmvAZo5FwNW9uhUx1NPfLyB5z3GpmT",
  "key20": "4hfsfUdxbQU6WyKaaqNM6ycEpy5krJzysaVN6VRT2ZoCLwKkoYpCzSnjsSCxW3Aqg63mpXnn3UYYo4QEawxqdVG2",
  "key21": "2Rg6Ryo3RNkF2Ah3EPujLnKUSWMSNFfCtgFBJ9Yf5bVj6bxj6GtTfPjJRifkX5vWBAArXYytufuVS3KdqtRfaRCy",
  "key22": "5K717A1w4pWddGX3CTW585DwUMeRAopkPK4fW5SjgvsJ7xz6tYYE3mfXhiERkVVMNzQWQAzX1HXs8X2fzixzcbxd",
  "key23": "4KHUfV3QqTR14btX2WSQ9Pn9LwsJRZ22EmVHHRNBJZUKj1ZkMPE844uXh7GwJMmNfnKZKf6B6iqDKQfNf7fn6LYa",
  "key24": "5zHkZwgvgkyWniMRiJeUxZv5deUME3G17eEGynedarxA94rmtcaMxtHyZyLjLZn88o88nyab7PQCToqchz7bWG6e",
  "key25": "4dBHEwmKEjwMntwcYN2JEFCXbZfPNy8KFpXqajpLFTZ4or4rcx51KPFe6Z1Zk8mhhdx2ZEh7FwpGQJcbVnjYdDz5",
  "key26": "hrmU9P4YJjQohxRAS1qDA1UwBwEJ6fXCtn4MaRiHU5uzMUya9A6uwQn3YQX9aMLXbR779LkrMxeq6pUdZH8SFHR"
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
