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
    "51y85qaKkj1cmdLZxbVFQQqYf3gMzfffbKsqqFn76KYHBUQdLVAJjuPAEVX29M5YTUfXdm9TBq6mpbfqWhLc6pib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRy8r9xRNrhHDyQt3K1GHCjTCaJN3vNDueMBfbh2M29tLHLQQ5tLNZKBja8p8FYyNWbuhVkEx7vHYtCcLDHyea5",
  "key1": "D1gKRMDHgZHC4Hp7EXgFdLsiGKFjJwJ4ciUFwScYEyNKTgw7syiYUUnJvm55sZRMDhhMX54r6doyfSd71ksc5ke",
  "key2": "2gwiU7erVhJEuBBLFy7tx1jDXKVpuQSkUzmP1ks8KQjrZeQRc73K4ssmN62mnRGSsNWbybQ7kTa7scW7kkE9XcH9",
  "key3": "36bj4VhvS9rtmzTL9AjXgMt18iRDyoRXttRihy8hDX4CBbAL4AXxvhFPkkyeRDMFJvStHofPn7Q1VzaXqC5FgQGb",
  "key4": "2Tr1vDP1L4G9f24fDqm2wcsuovi2LZemDMGi461AZrXrgvQfq8KZPBG9s7jXSpxB4L4NkBH7RZbWMkaCJpFQq65d",
  "key5": "4SAhjnxWcJLgfZW9xixSo2jvwzFwrmw11wPUmeD2RsRXpkjqJL2xeUnBFVXoouU7euk16tAYi5ewGHEcxX7GKFcN",
  "key6": "2BAMZqXuCA8iXRpB956RHpUmfTRyGAUDNARrLfhwAqHjQXmqi8YT8x9nhJa7MQiQ1688rKSyBgDcKdXBbn51S5Hy",
  "key7": "4x9PppkxtGZKypDxFba6Eqbdx7pvUVrZTBSjy4JUnouR3sbn2KeoRqZ3QT23Q4osjef2wWFuFa7yvovpc4CYB2em",
  "key8": "3WVtzh4SR5dCnFxP6aefpQZrLeqrwQbFt4Xs6hLRgNegbTiAQRfEXvCg8n2Qgbw7cWJeZ5oZeyAdDLXcUFUACerU",
  "key9": "55jxfJdUZ1Nhnu99cVpMugzysA4G5JFWiuQV1tZ4B4ikb3g8RT4F94CghoPmT4A7sD81u2XfykfzR3YWEAuEw957",
  "key10": "4bdWCRog1SWJkVYW15nFBkfw3gttAVbFzfkNYWiMhCCnqnpdQ1gzmmVjehoi954MGbop53hPtqFm5CZsJBpm5eUV",
  "key11": "42Bnz2fkL2tZ4kdXBciGJ6ZNwCHAtdfkr9X5qLjtYk36G7juLBPSVpXnGwCm75x8BcsBDGN4D1jK2jM8QJHhiJ1T",
  "key12": "i53pSHCrEjHUFWxWSkPpg3ZWKaFmGN3m9T5Wbv5KpGRw31rvjGtfN9McWs4H5VF5UYmVdBhkZAH9S2QLC6PzeHj",
  "key13": "2JzU1rooLoa1BSyxe8vLAemXMjdhNR8h2yVUAtCPQgFnXceW8b1zCmKFz4eRgZN1BA88QVtvSn5FKHJP3Hy1u122",
  "key14": "4TxsxdWJ7naBguiZ63Sy9H5JYFAXCDa99ykuCaVNV9EbYHP2zCgtAZ1xNfdfaMD3hj4dQGi75LDdK5TkWFiu8fjR",
  "key15": "o7TSFE4pUdRmGMKExQJvL4pdWp7qGs5sSN1gKxXoQQJ5rNqQ6V6kjjXDNGktfAUzG5hH4jt9jMMWD3xb8Y6zhPJ",
  "key16": "586516PyFJqc2v124Q5UPhMQ1kj4CxGZ27gbvLTMGLneQc7VaATJMSVahb2TGE5rp71MEq8RP9gKBe2xW4bGh2zV",
  "key17": "4qaTPufiN9J9EDh6q7stAUs6sHC79NuQ1AekHvbPTPLFhGsqPzoM3FkAdewWm1mJtkHKVTq1kP9veY3S9v3z9fPU",
  "key18": "3HpNgXcd3zt24PLUaQscsb6ZHMbikcyJrkXjbEWVpAVLZLMWoFLsjCU5CeF8TzPnkBypM8jaTVYWasZ9tfNrbcQn",
  "key19": "3trpDQUjWYVknV5CQd9fCNv1x8ACahsH8WiUw9VJaDSvXo39gZcogAvoP35xGrBtz3WFne6S3uDWtBYr9NboQbWq",
  "key20": "gMKVmsYMn7NwvT1zCr3H3keZu3uKKocSp18qGRgWhau8zB25tZ7TM5AiMHn5TZugV8dguMrBKCmTGqLK7y7hivx",
  "key21": "PVFtKrRknBYBMw1GXU7hBfem4DWq1w8MvkTLdmcMVMvBPn35SCfGEfd5vxgAnvMjxSGmDL1pzedB4FP9UZ7sxeN",
  "key22": "5y2FtxzpqNTWtH48qb8wd4w5aYHKKTDReAwsDudMPBH5qZwXdgF31B8W4WxkH32X3VXEkf6tUP1PmHLwhBd4n186",
  "key23": "25YiVnpC2cxKnh5kbPGQjAnFx7fsaDkRzhTGKS1aJejDxTkNc65EhYcxUEzTEDZy98ybgJcLff4AvmvNPYQgWgEF",
  "key24": "2MNsM8pn4GuP5ZAwVHUgHcVb2aoB582UEuLoc8czZPHE3LhZWNs1uXxUZE12Z3vr8WgEZoJ1fexxh23evbuc8QKf",
  "key25": "5mvds9FAGWxrVpzz6KAmUHmuNq7eg1gQLrp5HfTi3sJj7M57YJBj7tPEVGKVHakNfUaGZxgGBwuV2NqyAfEAc4uQ",
  "key26": "4UTQhSkuNGVefJoS3SXinqsLFF2qg41EE1kMeVAPrkxxyaz1RutkaTDaWChLCaohHXSGXAHoXfFcUW1CF1ZBnf9B",
  "key27": "4L2a1DkdWnjBZv7k4Jieunth6EoK27ZCcNbm4nM3Y6r3WFdNuBRNmwEucL2mz5TMvTwun75GB7Es8at1RiksMxoR",
  "key28": "d5JR9JaMZfW3h4e2riGMHxFrAEiswhkGnCcLRkKUYwdgWw8CeVbnPryeBw5tS5SrDmGFDwvxHYAYy5NTU4YXet5",
  "key29": "sjC3zAMtfFrekVu6E51UohXiGkkvgm555gmXfsUyTKKTyEnCwKxQqqXqg5zxpdm3anH15WiUhtcm93s1bzQDkh1",
  "key30": "3MWL6NK5eGehjwJrc7jxXj9vk11ZAQ5hHQJUsBf5sWYV5Da847X9j1LmVvjpCk5hsaHZuNMPgiFuGyEk4z3fQGYp",
  "key31": "9YxbgHZ9yPtsjDuCrk5SGuV1ojENramUVypeeoREG4WZaED2YZ8r5DPNwAAEcyqLm7avSx3tXYiKVBtzn33eaNi",
  "key32": "3p8Xxhbb6k6rEBwxPKU5sVXxdXcgYrgm5nHs6YsvB4hBV1X9ibgJrFQBS28J6SXQzLopsUGG79c2ddLTE3x1MKDw",
  "key33": "x2oCprU2UPVE9W884pFVRsRLwAmRgrzDrcYiw4WXeDB1B4WdNPVp3mXigiASibjYa97uwrXrmDNzN5Ay9m3UCBm",
  "key34": "2Xjj6iw3Cx221mhkxuDRKR7DVZmD5HUBVAnRQetpqfDFC9boesmth2qPUp9WxACCPtmkdKE7tpSBy8gyB9z4uHEs",
  "key35": "422f5rgTsZbCybwiLx6hoSJT2GNemoEEdMvbCWZnKHerPgxwKXGCkrAMYGUucc9UgKu6gejfAFscNYsEWufngedq",
  "key36": "5a3QKwNAqwkx2bEk1FEKtWRr86zzutQXpe8JAXicjqmznzwp7exnMkXmfiGfgsS2onGZizkanRDqPqW7cgDKWVex",
  "key37": "AoErySKbubtvCefDqMct1ZJFRZzKbJN1i1tAXpc2oGcbx6DfFdjGJdLGzca1Z6MX1vqJRVFwKyxd5SSmEgeEVZc",
  "key38": "4C8UYX9gDZWFhj5dwxG7HN8kaBGo5N71qnxo91dkwAkdWyu1Pm2aNWYwPvaHZPBL7trrsUG7BcVvKcCV9dXd66Zc",
  "key39": "3UXyYag1iomzLmVdEiJLNF3pv7yXJxQfSRqYdNA3bK1g6H3XsnUMS8qdWaXiJKtAG5XUDoVYTeaixUH4EZAQVAKM",
  "key40": "4nMujMi2F4XCs9BkTk9ZeLA1c1vPvYtmiZtBAbkfdKbRveS4ApXg6RtAH5WoK6ZXoRdmKPBJCjNBh3UZJbCvY2qj",
  "key41": "5Zom7Jm7L5xNaMqjTMYGAF4a48E9FiHRSuMQ6AEZetX8WMgya78Ua7o82e2X1wvKFCCHQqPeSRmZdSeWYmSQYw6r",
  "key42": "215NfZo5Wr71jukCuxb6EWiqvhnjcCQTEy8RxwoLYFSJv3xdidhX387fCqPvp6DWeMfpFsovjLpiGNWrytiBsrMd",
  "key43": "66QfF9AbRGEGPu83Ap6cEzPCpdGZ91uDZjNjFdNV8oYe1Dsr7jhL2soEFb9VyLUdSyYJnWpCHK1NdeJRbuwAyMR9",
  "key44": "2UakoRB7D7yP1mm5igbhDSjV7FN8msmyrfSEwBWgS1PARnD2R3VhvGBx331HHbBeWwtaZBiKnNnVqFJuoatzsmxf"
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
