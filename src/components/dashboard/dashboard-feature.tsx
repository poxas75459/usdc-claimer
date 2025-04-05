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
    "5Fd416WrqdCeUczbhELMcFnizUSoNRBWLq7879vSuV9WRVKBVcMtnWJzaWKVbA3Z5YKpajDbTTTAepEW6woGJBpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x3UMvigaz8hbK5dVXwvMP58Pfrzs7G3WjY47k7EPrfvg6krig9krziWwMQcHj4h3FGc4Voc5dmAaYayzj3zm72g",
  "key1": "4B5irsknShXhctY5Uv2CgVxNrbcQvD2rKP3aStB3URT6iUR9XPJtxRLyEaLxnj7eG9pt1dcXJmzduNQmHPyCEgwA",
  "key2": "998Qft75DFszCdJRroBFiV18TiwzCSNBHw83MkzsVUE9i6dBL9jsxRFxkqydZktDU8pgRmjtBmABjnUrdLBZsHy",
  "key3": "5VyHT5YyRDswjF6byr7kMaEUyxQ224gyT1Ejg1Yrnqj2kt9TLBXLHA73D8Ppsr2Aj9cjW19yk8G28rFDCM8aVvi2",
  "key4": "2F4cZvM2JkFCv2ZKPMRhiimv9o1fNjW5ZmP2TcuTH9DEi5WQJYQwDsSFDP2VghpdoRYFRusBnfXvPagKwb7M6DQf",
  "key5": "65G2EBhCwLjZyFojXy2iFcjnWfULB4rYt2WtW6jVNGyfhfz7ysJjv8QbZMpusJiRxa3J4DP1eja2PBt1CGZTF9cg",
  "key6": "4eM6KRe8BDy8sK4v3BbHNa1waExMHTQYuh3TMhnsXbp1PJDBxoM3Exzyd1pN4z76nhco9CzYGuLREFJcLs11uMXa",
  "key7": "29XtRxtqgqehwVpySwGMBEFf3ceNBt6PGWMQLvJKG3H7pnT3bWwin7Lyk7yFwVWEsEb2WhbyZWKUvgopnE8JXiE6",
  "key8": "2BLPwSEDCBjDt9hsVErsAR77qJBJ1EsKCLsCJcteKKYgZxd3rugpJkYvgGEv7KYWHpoyYk94ftmiGzqTZ1bCSVnA",
  "key9": "46JmTS4mKuiU5buo38aXP7wVxKMd5KWvrSZusDuLMAxBheth2BY8LDHVL5Q6dpCH8zpseb816qNVDAr337XhfdQ3",
  "key10": "5pYqrGLnsBeSTJrCWEhHxifGn8bFzbSamx3SJMGw9yqUMvyJawKX6AfpTpXDyDbbTxfSS9xdiHcJ1wHyV3QNtG9H",
  "key11": "5DqiKz3aFdwLWftX5rdsZTUZZTiCCoN2PzTQKLj9fRkJvYhL3UjQFa3e4xJcLswsVTUdDfnEQhpMRLCKzvuXhmuf",
  "key12": "4d6oDk7LsKswHp2VmtQDVbJ9HvhecDSsxxBQroMXiWF3WEA27YcasELKg5Qdde4vyY3Qkw93mE9yP8zpkq3pv1U3",
  "key13": "iwrdxYcZWc5NArw5DpbkK8YjNvgNRTTLwRuzwrJnvAzz7bmmxyYrbjTdHfa9bCW3CGxd7itxHUyFLE9j8fG4WR6",
  "key14": "2n1WVpXiCG4KqEu7sNkrCd8kAskZmwQaP3FN4QB82x3NctAXzrTHnZMWrZRHoyxyR1Nsaep8MeUJ8T2Jpm3WuKhc",
  "key15": "5AELYHy4bC1WqW4HXcntZ3N4XTTg7B3prGgAoQTwfwjTBXc298gTJRRT5UfT1ETcSF17NwVjzctbcGxiHLi4pRyN",
  "key16": "DbXpmiKcqj5yur1ZYpwKhqxj1ipsqGzPNtwn2mJ1AhpKUgGNGknDUnGWRHd8Z77uwCBUV4Ph3d69dt4u531Lqyn",
  "key17": "2ojXTCXY57QirFnv2hYq6SeeUbJPQGm55T38z4UVEHXYhNueRB29BjsmhNiYtjWdTy3CBmaXMqKLfwVT1U6d3S48",
  "key18": "5RxqCUNeC1vkrWSSwLiCyMxpB3WufuEAaYTXug7t3WWQSqWtGS2EHyw17o36UqshDy5Zxrrhk9UVQUuSRsXtUjzq",
  "key19": "4UKmst4P4Bfm9gaj3Jd3FAVZU6NwrifZjqfF2AcWK5r4tRkV2pS3M5AkenEhudZ1uBmMwx3M3u8uGGWRjnUMWsik",
  "key20": "V4rpzw3xP7ejE9dixYGkmsbVrYVSPPuzFzufmwwrpXTaAxHLC5UuzPAXE5y3WTe3bb3DVwWLULTGJKRozMnkjrS",
  "key21": "A3v6zrqjWNEpJV7opLGLpTk4NUUSvik9D6zu9LAQqVdc7X8DtoLqh83rJvryw9phRFzvvNXPwDrZCv2byysQrrY",
  "key22": "5RgdyF82zyADzKa49DMX386nD1EPQmhC5wakcMgCxVS7gshjHWUDNdsbhZ5av8hyRsUbTVnzPR5uHQp7xmFENk3x",
  "key23": "YbpFzjAaqRsq4Z7HWDRu8FCTkE9pxZfo9otkyXLNfs6tqEqyxZzSQuf4ftsLZD5mkPeA65BgwLmxudJB2FW4M6Q",
  "key24": "3zfTfiePUdpbNiE5Hf8pbJemrqS8CoVSF7jMnZXsmo6Q84Ak2BYxYN4zVrwme6YMan4Wf42JSebqfE3KWDKpjGJh",
  "key25": "kZ8NdQP9rZqe8jfR5SBXQoXns22vyL8a8UvLphnfqkmiikBvGqVHrrv787oty8BZto24HdAPwNqGFnGa4Eoo9Dt",
  "key26": "52XFmeu8Xbpjn1cTea1wtkJxivHJvWP5zPnrtDkYe6wWLEtfLcwZLZw6CmCA3iZ3gMD5dHGw5EMcM5dDuy9uCiz2",
  "key27": "5L9YV96ZmGF14wqWYKx9S1VqPHkxyXZcqzvfytRBzLJogVJvUrsXTnb8WsCkFsHBR5F1Ee4kkejrFAML84kN5Aop",
  "key28": "4jS5YDuhykDhceTUProqvrTQ8RES9igfrSPdRxpdR788DYg881x1KD8LLc3dZw8nRqD95JxkPic5dPafeccsGhXp",
  "key29": "5vxyHezE9VoDt33jc25HWWWJZBkxeFa4oUstFD3UA1CjKgsHLYzhbbX1agMnBbJzCBr4pGgteFLqFgA6sTsy1yux",
  "key30": "5yhV38ADZM5Ux8Cqu7onSdwyddk9YRYf7sBZvkWJBMUfydLkFX9cvwxetNmMovMcaNjVjKjmv12hb5eoPTP2xpKd",
  "key31": "ijfbSAsYCHpm9eCCezD3cnezdfbAztvdzmb5tc7H2APE5Cf54zoJxEbNwDFBjDy1h9XT2BoednY2o5aW4LHyxAz",
  "key32": "2TNoLWKtwdssXZ3v4SxLspuafdWL6k2xPgmpWjUBjkYNgZR2ym27GUSr7kWQNRaHqCaTWMMVryTF8HXr1EvNKT8J",
  "key33": "2We3x8TSHHi1vXC6WSckRtFs3nUmBCU8UwQif6sJ51yhyFRshLsGuKj1VkCrmByEUqEMRNnLmZyGaSmCRDqH6nW4",
  "key34": "4eYVu5eGJiFy9i3As4291aE3dkxmSnRYBi32Myk3Ai2CSnEfHHkhP7Gu83cNf3r32zvvJW5rhjn2ojnh2tnYSuox",
  "key35": "38niRqiRBbnQwWLxH1wrudCpKhKQzvDYaCTL6twSSLkWCFh7AjpniFQUdegGQFEnWjyUQ9qe8FZ7bvDjkeVUjBvx",
  "key36": "3bPSkMAR4CLqXHE8KnEdHjPfUp6jnmEQyGK97jd8Ao1rKMu9LawWZsjhiobzjuuJHvgd2bbMK6jW5ko2chRhsNJj",
  "key37": "cgZL7afWd3f3tQ5m5yQ7SFUrsJo9xz2ehW2Jk6DMujEJvDNFNAvDjKky7ptXZBrtBJeiPMdTHCzKWDdkycNZX5H",
  "key38": "sCGhpVL2MJdQJ4cKCb45Fei9dCZbJLRBajsvkCeGkyXoeDiGMZ6gK5f5LAYwb3WHZzJQoV3Kyciydq2NCjgZ6dr",
  "key39": "9nLJjivtxJsKsYSiGQUSQR8vzdzrGzXMQ4Jcs3Gv63rEMzWYWxNDzSX2zebrKX4cD2YekQtHYnyHpCoLX1YygoE",
  "key40": "5umsJD8uukCnEVUXRZ2CwKkkk3jaP5fyK2HvRr7dXnszgovAz5rEv66bKWCU9Lcc9fVGK78hpoz7cwHYqNHGgPHL"
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
