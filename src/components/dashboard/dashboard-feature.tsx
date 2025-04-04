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
    "2nd3xjrFwA3F64NYU3qDiYDFdtbKyb8SipB41Zo7bG6skRMLjbA4RKDBNasYpD9p37SemNz7ZeGEm9LPsqBhWoLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srSD586okgS4a5W7RuiDCd4A4ot2jNyyab9sKL2xkJktv5tWuVthV3jyHuemoU8cbifw5B3xrY9xzQs9DR9DTbK",
  "key1": "2KfSiBfYiAGvtxctLgSjssuAJb71YksWYjNhP18R6WrCLHrDptGLFNqHG19mMDzDpPmvvkCPLb4bgiKai9LW8PgF",
  "key2": "2zvks4eYjmkMLDg4UaqG1M34pMFDWkfaVCRpDUd4HqrEgEs2LaDT1TwBteMJASvNDSNVUMUqL4z1cmdEhL8bcMKW",
  "key3": "4Rtyj44Kn7SUH679sppmnXd3Fvch63xGqw1PMcsuQHCFmHKPv9hssYbvEv7iiC9Bk5BeMDKigK9Jf6Lw6Xkrqawe",
  "key4": "28TvnwrrTJiwqUdSguKKksTvjb7HQgWbmVnH4sjhrxzqtwQHiC45kUeAVBgKz22vLCfhoL96GXzf8fyFio2UUdo7",
  "key5": "42iwG6i3vUd2TtJVJg9xfbictqvvnbxXeY8SpJhfjyXMNafAZWytiukMvUir6zHK3cRW3fuiiD3WdbW2P8PRQW9s",
  "key6": "xWAyjm9XKE85V1g4JM9g9Lg7NasVGKdUNuQAPhkEXyBaDzJWn5HKciYsF6Z6hgyytR7AARPWCDT4kyJsDCkus7G",
  "key7": "4LXoLTpPHbMLyod4XX5Xs76ZmhmMQqDUsKfhZJoWRRjXK74KHPzwZDS5pw5zCEXw9dT4QX3Pe4ZZqb9fTYWgq3x3",
  "key8": "5qWAjtWpULDRBSmbmmdNL9zJZeHtDnhKKUjZAUM3myGepyQLKLjjCBrfpNAFPCW3dpfW5MQzA4R2hoC97yKYFdsW",
  "key9": "3K9VS1vYgnhNxdRj4ZhmUYcpvcWprG6cMucgbmLoGAQDoN7Mkznze4RaLWidrWjYQFGpUAkgqE4f25q8pvtYRvGt",
  "key10": "5Wgo2fK1go2Ne5EHhepa5HzEVrndUy2uePUBZTqtEP5pt9LRBmgnwnjgoMYvuJWPHmd2zY5UuZnV6Xp8ZzfADyM",
  "key11": "5mNU4cUoDFjPpPL2sMFwvkaJfRHyxmqAqRDfrefMNaLrreydtDYV2WzAocxSrEon7eNshawT28avkURLEKopNjHX",
  "key12": "4GoAKhi9hCQKXNnUxbTyLG3fmeHXyG8jmCyJAHwekZ5EdaTBpBFaKH6XinWfUFQZrk7GrQWD9NoLRbbq3bcxGMdL",
  "key13": "yfwmnGrKpjsessYNpyQ9gRVthYN7owSV4kmZDQHEXj6TcCevysYHPU16aPdVGF734wMqWDYQ5qwTAWu6Z3nPo1r",
  "key14": "4fR9gaTLzyjPnK83mYNaZ2rA57H5HDpZ3nGXFNSpPGXVcHtS6o8BUyEg5BmuacBZCgMxfyZNrvSK12QFQGEft3Tv",
  "key15": "3hQm9TmM9ZFS4NK2ceFvitNJBC9ZUsGK8564VkGzc7USHqzg5cJtedUvdHCt7g8Lmo6YcpmrSK183LFpzxtxfpjq",
  "key16": "2qduj3ryc1imjkf7AWEGGJZoNgyw3dUG7fcyY7vVpCo1qj6XQY5bpRhUKGZ8mA3LLGpLfW4vExAEywR41A6RZnsz",
  "key17": "2WZfWPM2hc8XvdP7ZoWLotMjXKqgZp8aKWEJ8pjmtEvJcH4TMgMEExV1rYasxBhCoxJnz5Wj8LVHdvfSrZUnwaL1",
  "key18": "2Qw6U9sAhtDeyfd1afrVDAmkt672gm3cDzsSo3vSgNKD1GKnAGXaWZ8CoL4vrNuzmffPBGxTo6To8mQABJernrho",
  "key19": "2yGVo5CsRJcSvjvtgsUa4HbBLeNV6awAcybsXQWt4e9WKLTJ9WpGoAw95RZBLtqjCvH1hJwJNtzApYb5HrRo7j9Y",
  "key20": "UmWJaDnQNu8XitwK75QeYqArHUnvZJ3jbS3ygkSxFrouwZZDXYUFbYcQP9PrDRg7bxAmNbL75uqad6f8JbsAeQr",
  "key21": "cVLqG7zfz7t7XyPhahx2AJ43e5MnVvPFxEE1t5hGBtRpSVkpGgGpC38AoJzYhBcgjgmPDRxGPDAdTC9eqaNPP4X",
  "key22": "2u5ZMBHQ6Z6s99VEKxqtifoi7cn78CxioYFTooB1JBfDSJZXzYjSE6AaqToLCATgmfbgZAwDe4MSCPP9rqCv6Ewk",
  "key23": "3xB7oPonhES7PP3C3fWWCPApfpgMuyXDg8W9941i3YrqN4kcdPMh1k4JGLdvR8i6kryfA3kENKczHH36BwbpCP8T",
  "key24": "4r2tZ9QqQrCny9WBS43cSwUmfjapiPsxU9CyHXzqxEdiTd73fgM1yVtSgbQMbkn3jyxLn3pUx9KXaJFnNasUmyyN",
  "key25": "235LqA8A2XEirhMR8DobXxeshWxPibCEwAzjpEA4SNjzw55SagUzzVBNE4K8EUV8by6UgN12URxDQ88WvvPsPR7N",
  "key26": "5mouZ8obp3DajfYBdZGY25VCDMe68ojVaqNnix9Md99WWos5temxXg8Kq6u8PAkDS6tsbziALBh2Tt2Agozhsj5z",
  "key27": "4wsJMa3iUU7QN9HuLiPkEgNRdqs5CxgL2HULbi3gLMnXWWyQjsPKZJAHK5jQtmfR3it5yojoiPiFDHQwB5sLC8E6",
  "key28": "5wcT6oENY4mHHtoJo9748GaW2KMBy3kAnxtoEe1QY6GLPB37dFR5JakQ12ckHAESTK4dksATty9DerbvuDLaxj88",
  "key29": "2dvcGunwNzpQgeXP7S5fLet1MVYnVyhbqrMuqJYhFpPonPKmKFTmxB9Baqa38sifwySuTNPFAE9s5tAqyKNx1rdj",
  "key30": "5P6srPZafGiqWbQ8suuQPywA5gEEKovvQyhNCTbdhb1B5LKLExwU9MohtKvDfw5cxDVw8N9nj2DGqZkWXnyzdqrc",
  "key31": "5G4M2kgwCF123YKhk7PxezQsJZxsmyvjf4tU4XKChPYgJAeDKGoHtBT7YTpNYYBegSqTM63jZMWXRQDErapnQ5Q4",
  "key32": "aPnoVE26hgQLXdNtgpf8qQM95tR7sPVi4YF6m1U5y3cDCCyPz3994Jz1KTGF6Z1heLtwb3fvXfpzyZszHuCchFH",
  "key33": "4DLeZVx3ofRYFBhYcd7W4p4CAzJq3Q8WLmq9AQqAb22R7pQjLuBTuoLrCYPhZa5qQfJe6R9SZTvAvv8fCodH9XiR",
  "key34": "3KEGkGDdJfiXKJFiZRgnLMm694JASBSTawELMAukd97NKFggzCxER3pMRg2fgNnVb68hVXq3qkHbYNqFcThjufM",
  "key35": "634grDFEVJxpbJKqHQAda1TqxAaAji8mA7EEVNX2CJ1Mgi3mn2R9u8QAj2x9vqMdinaK4TDWbdsbcUhNNkVXEtWD",
  "key36": "2tnhXpGqTgJWqQ2jwtiKP8g87ctz7deqtKVoSgazJMx4Lojazgb6hgbaK4FnopDKgAhBZH1EDySBLwFmb7Z7sWB3",
  "key37": "4kVQmW95MEUfXRsWwB7gXKmptNzmWnRbPzyha4J9FRVnt6CsQFMaMwB8pLuxXq8ejNKdaGZketfgDWAGmj7rCa6t",
  "key38": "3ufdo6MAxyf362M76yEjjyaTKyb1PkK8grbqSNz4DmNwn5KJv8QMCZdTihic7R2HsyRwG5UvD5G6RNJzQCe9PCun",
  "key39": "2EWRMb9rHJN7KsYr158URZJTM5A1VQhne214hd7FEcDPwY2sdybY5QfqfQzfzMhqmp2X5gzdJGypiZVjE8Ho6Ci",
  "key40": "58gPb5qtLNdA2hWUBJpnr91PKJR3gGQtLNqX4vB61rYXqavvpKNjihRKvm7SHTwvczfvS6VjARD3X6VpEWdCpMr1",
  "key41": "5QwUeSfVRZMSvveoZdCBqSFYkjufQhREqBwosnyDcjf2dt1ibr8G9YgEjiXSP5p9yn4p9U7iVLcBButR3favxMFE",
  "key42": "32E1y6B8kXQpYAoLqEodfub12gZtUTfTAfUrmMHBZ6Fr8tMvapH2fGX2dgy4aNyUTXgnzqvJTJHv9TrRgSsJycLy",
  "key43": "CG1gxQXjBaxW8AsfUUUFbGA8KLNAmH4gb1dGgSR1JAXfb4ZLGRhzuVpbUp1Qzw2SD9z7owpsDEKEmJpRarf5XKa",
  "key44": "2YUEmpmtbyTz6Ek8XAcoGer4LWfTwunHtVNo1eJEo2U9gmRLUYFJQaP6FJigvyd5TGWJ1qB2x1ySd76Dm3KNZjS3",
  "key45": "31S8jomUHaoFM6H7PFxNkqvGKAcaGeeWfkT3fTF81HVrmXj11KV7SD3SrisgGHQmCQFiBoQHS2HW2YKd89vytyqD",
  "key46": "5oPxLZ1pieZqEKwYPvdBqGzmSpLLFqaFpZ2puz6hZjiCg1MvVirBwdkx4QxKz6AsQzAn9i4RLvv8pXwZqscod2k7",
  "key47": "N2xB8xettV6Fxv3CHnrnYymna8m7qD8PWitjZt6HdrVtb1PdENavEfrKYCy589pjfcKNKbWtStmjDMS2GUaQGSb"
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
