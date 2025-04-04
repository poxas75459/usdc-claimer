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
    "3djCrerfZG5JxrJuP4kFwSgngC21s8zqVUrsL9EC9us9Zi9JujPTXvjwwgsxRvohLoje271gShQYiugHHVBh9gks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmVr3Z1fxk6TKYi4YqHA8yQfsh27M2xCrm2D8n7YKpKLdd8QJrnKoJKpB45A7QyanhJRvrRydKY9Xb4jtiWBaX7",
  "key1": "2EAKRKfEJ3bvcwH19FztgUzsaFUgCNraxq8QTHz6qFyUjfErW1QZmSbJ8Z3aVKLjtAF7tHPSSCZFxD1fSF8Rx7fG",
  "key2": "2X333uLWxRfx9ZmKoURaAs97BzWAoRcNr5XiyEicpDrFs4U3cxWr1UG6Nk7ASQNVZX3sSUkkvgHZGjyt4Mrs8FsY",
  "key3": "4YBd35TU7Zo4dfbmmwbGm7EM9juEvRpmhcmkniEGkqBzv8q9hZ28uX4CS5r3zvr2oi1BCHJjQsfBuzPFSiRHAQtg",
  "key4": "JVa81fUKJwRPtVyAYzZLNXykVqhTnnQL8zwtc5NuZMuGktDwnQayZXEe2LBmpktUc991ZpbUDdzAK2rcUHnSqHd",
  "key5": "24sQVJYfpgrNGFTgMSoLnwFkC8dRtVzxv1ssPDZJvnAPBKZwyZDMHrzTquCcXLcBy4xe1w4e2xYtnbnzbfR7mHKq",
  "key6": "5YuQRG4GH4XaABTFZqPNQMgvVtazHQHWXsYNeBDD3t6wpvcySqqm6pTJWdS1FrgELfJ2ds6y8J49HxNoPdXc76K3",
  "key7": "3fKBssmwzrWdULwggeHj1ZF9GuMd8grdfg4FmTKDax4ukmiMDdJxN4VViP9eMbJxd7um6mzR9v3az5mGy7U1FAJk",
  "key8": "2zwaXFK6mYQkmvc5MFPAw9uwZimS9sts8esTbso3MfKyiTVdtNUAiowPAj3FTZPVX1QQFj8EP423ufuPubkzkyYw",
  "key9": "33qUHt2uAeQaGQQVB4Yjdy2k47WcSS1CBnDFKppDZ3VwCqhLuPH3wmvWQ3x82uEmzC2Yed29Adkg6efqkSHf4b86",
  "key10": "4Z91xZiZLVpG5pMi25Fz71cwKrqSQdXa6hExr4rpMN6cnMfZ5w76DsYPppd1XpSMBrK4suVAZrQejxskKkjpRwfU",
  "key11": "3nsCW4wbGLKn1vLdofL3ZfEEdEF7RcFfbVzZCtYYFQ7ZTQkC4XuiGhE3izGLcSAySmVnmdQRmpQpkKjB1LiYL4Ba",
  "key12": "2UrUMB8n533gNpY92LJkggyph2N9n6eF6wc5VChPvXLjWRWiYpDZvHLcuNmgygHrQis6GmYHBj9YkQNvdy5FyLHi",
  "key13": "3QqYHLtmrBJn3Vnr4k7tAwVQ7TkRHcWAX1H3KiV8fYQsJ3TSgPWbtX7JHcTaSteeAonwW8o8VhLGbE8UGeHHZezk",
  "key14": "2GBcXCTowYVNB6KYMri5G6Gmzn3CZQNVNQFkX1bihZoSptiMy1TUxijaony3VNRukrtXnDAWJ4ZqEzkeMzTrrytb",
  "key15": "4zrg6F7vRpKvQ8eKqTs9ZwxnPqqVBzp9NBfYBEp5icuUejmopqPGSjzQ6xitFsTYwaa5y3fokZ5JaAWhyf9eEjnr",
  "key16": "2PQQdPGABTjJMZ9vpNQxi4cax6dkHUVSP3kbbwhEuYtTAQv2qxyRcQACjmxcsPCq2aAjdnvdk5N6VdkQjjvFtXkw",
  "key17": "xLG5yzUaZj4U6RNSxPzEKprknoLQy8UMCh8SB3PTSiY47qTAJyT7wi8Y9hVZxoBdJfyjLJADGwUZrdjy1TJhUpR",
  "key18": "31Zku5D1DYBTetyZGs5Gx3eHgyympGPS2TvN9taXx1dEC5UM9vLBwHk1eUzxQCduvXimzcoYYRE9bmjC82b7FER",
  "key19": "Fn9LAVGLk1oosbTTB1cYfAmfrHTWqKLzY4aTvzVw7FeGv91Fm5AvPcP5No5eXrSfEYu2vpqxmDfRBd54W2DCuqS",
  "key20": "5dCmRTpHf4XU4P4fWt9Ph9Zmp1UrWkrfLz4KRMrcpyUaHsnU8RbH5jFdmGgY43STM3me8YHLKkG61tfh1UVd1Bh2",
  "key21": "1rnn4hEs5Xf19bsetcBQd7LSesv9CRYGCncnwzsv4K3Wu29DPPzeUMKQFFYZxfvbrxWstrMDwssLfRUE7Mx1ayz",
  "key22": "5rHwcpu6Dkf1jRnt6waEEPc94pRY1DNKbeCq8edwGtAkaGWAuwVxv9HPbq9PLt6TLy4SJFeirc76TfX68EiQUrbn",
  "key23": "2mdeesrdCsVzdUdpaPwFJMyavbmstt9G2q9tjb1EqY4qvXUm7yf6wdCRNF74dVmsskext5dethbn69WPg85p3tkZ",
  "key24": "4ia6JmLMp8KMLfTWtCVBpumxEejM2REH5hk9AAp4j54xjySWnJLtYevi3JZHAo4FQDJgjRHDAWew7VKSfH2PR7CM",
  "key25": "3K33QEBDtXjigc7HLKyUau3BvPpztNhbbZHCky1geXBTnZtgB5L5EoLgQT7JEJhDLYnoyaEo4i3w7WDK1mLFYdZX",
  "key26": "5UQm8BR782uftXiG7ueFNXvk5jiP3uLwhkh5mY3yKoJ4n9mNv59XKq7fR7WgNWVFjN843KbVr5c5Q6CCJ5DR5jie",
  "key27": "3pY2FKa9BzCPAJw6m7yobo9nxc6cqSGf3pnhVQfznSJW3quwKUjGNtFtJHnmuBTzVyvvG7rHmQv7sWkzg9bAgz1D",
  "key28": "N4PhGY8JvAxZLYWtrWQtoLeZFtS8Leh5WRN7zSQr76as4eoVoa9rPqKgXrTQveeTGTawbqNEGXxbMsRUG4TDJgz",
  "key29": "4QyC9v5TcWCjmX3gnAavvK3E7Ff43tFK8QHACKVTjFCEFcb7QtXpLij879kVwsTXi5EVzhpSN5r3Kq52C1CNjYrb",
  "key30": "4EtRDQxE5wUA3PoSAvkub1kuhz87NmwPs3mr6FsAi5cqTfwhAe3wB8ciCHnSe3mRJQVTDNnFByQyxazVzSP3sZZz",
  "key31": "2FGEPTiRzqhRn9rQoc3SiVRiSbyoncvWPAJGRMEWz1ZRXAwvVZrHgmZtrb9YzyBKBq4DWEFAnjGJb1pzbdsSyGau",
  "key32": "4T8391Zv4HoqYuTXmpvTundfGLx8FNHNfiKbf7iYrGXoZAKTsaeafdHzCNssy8QMFrKuTNFwZ2udF1hvRt3pwrJ9",
  "key33": "5BYxkKcaowXePaGf5aWZV3auxTX42dMCC2vdAq5aUE8LuVs5qv8GQ7XjEecASDnsNNcWQ8vbHYrnq8orD9S1wytt",
  "key34": "2fE6nUSfPCBZNxof49ZvDuaGf2BR1hg5VF23ApGeDw3gtuHJEHF88cnVFCVgDrG3uJSAxzA8WeRTg7gaQjYvEJt7",
  "key35": "2Uj5orxEgV1X83KCR9c37dUmyNZpfaUDCpxehmWzithtN2nrCn1eVdS3t1hHmozUwxPANxQQe2fAPwc5fSqcbaNW",
  "key36": "4cySeL7HW42h5RKCV5iLuWBxKTkHq2ijAEdX1aMdzrDx927jzjXCQdbKjdfdtLSWjBfSWtjUe4cciTyFL4iwmGcK",
  "key37": "3JWgBnpM6HXb9pPQ11Pjo4Zi85AGrA1Yf2AWZxQUcBHiP6CgtwZyNWs2U2x5iAMW9xNKLWpL6LxkaFkwaMrnsHPa",
  "key38": "2ddsSQVAzXBQsBwgMkie1SuMgUrRdugdWdLxE5W3844WmifUnjVCxrHR5uaNZ1QohoSVSoUQuBQT8KJqdc2AjxN7",
  "key39": "5jty8xj9Td1FGXAUy94HGGCmomWbb4q3FGfDgXTvHTfnw1yz4hzsp4gxiM743yT5Wf2y3Z2EAFutMztYHVjGv9M5",
  "key40": "4zeC4AFzVdyzMQ33r6j1r8dUevPbU4BKSHkaGoobK6WpxL3QYujt1jCcfHFhyLNox6T6pqRaaR4aPpnQJEaCenHT",
  "key41": "8LnVbY6RMhX1pa5vuyN6Dfa2rFk2649HtdiwMJvx7enkzbeD7XazEZRkQbS4xc9Uo2o8wcSiX5G5UxqYU7W94Fb",
  "key42": "VRqPMThCkhu4hi3X4XLWfxU6ngb7epNxvVqu6skXNWYZFxdNBB6MXN4DfTKEngDQ4zu7RbnVtvUN6Nrqa5Ds8J1",
  "key43": "kBSaPHDz86Lypi6XZKi2U2odjs9n4zNVXqreWCLLo86U3uB1edNYdYA93xhpwJPsa6tHHDvF7xHay4yCAuNcxnY"
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
