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
    "3uaPptQXFgaMboBoNNTJvBY1jgSLT1KrBXSHRhp3JsGR32y16M5TaEquJJfnxYx5ajhRWacnHFQTM2KNG51E4d2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DawxJr6bfBj3QQWC9AJ3wBnCVvMA8LsxYRbPrACaYhgEgctcpAWjZAQcLY6xLXGtuSAq8RDpcDEyfvLhd175VHE",
  "key1": "3pKFZ6ZNVC8tbQ4piLKqqBpfRXxPvQ53cpxvzaXkBud4AZrcP6CdtzgwtmKduRLsKoUHgqyGjCRK8xqGdSv5K7LR",
  "key2": "3Mf5cLGvYVewtqXwqmLazrx82kLebcmwBELrAPMMZHUx3iCwSqrJ4eK4jF3V4QuvZS29zuF7XPS6PGQKub6VKToh",
  "key3": "53GNZsn8pCpWJzpvpiMUZtsczdssE71RgWYPt3nkacgDQTq3We81SD2ucHrJ8HtfMKnX4J8ofQdfRqETyZzcx3iu",
  "key4": "5Um5wucdxqgQ3uJ3TdNC7TcP34UnHhULgC5LP22d62HbKUugMSfgnWmRD1ZGLbFNtDnuFzGriBMgGqiVFFmt83uY",
  "key5": "5jbuoLJbpV2wVvrwUZsqaArFvCFhr4cdGwDbxFVKSyr8jKwLwgvvz6LbWGZBvsr5CaTnE5CuX53CGhsWJ2jeUrTr",
  "key6": "2FGPHCahddawpsKsfNZTDGUYMawxFCask4teyU9R6GJdnwg6G9PM1xz3yMh2M1RBTD7LhugrvrbpbmyAAXvY3HcG",
  "key7": "4f9HhZ8Wjc255SMZpfDUC7C48vyqnUfmbXbhgvhWQ4ntykYH3q3FSMwfJYAo8S92gqaiJwJZBYJw69HqxcmtdxBo",
  "key8": "2kuwKybafAU7xihLAy2xLbAVdRPC7hPu2WPseAqXoDXUYumQaHwEqgAAJ2uyRc7uMUDb9oyCB5n2p7gzvVjFHF6Q",
  "key9": "2k8KxhKEixmYoLUsvvA9gvmzLP6Y73Dbz6vU7fNyWMHwqCVMPyfwGwyHkyz5iVpGRR3x2KgqwaUG5B3SP9yVveCL",
  "key10": "3CWu7btyhsVXWFpWVy3YWEYWxXhJz87SsbXeA5GhvzgiBmPGSv4fMc4zpcWUgmfkULYX15Q1U1VAbHbk66YT5fvz",
  "key11": "4w6yDfEReeUqeTiW1vKaooQoaWkw7FDcsW3oJ9CXaFiBWahQeAQpmPRJS8gHJPDum4BNyBPGgCY3yy4FJqHHRbPn",
  "key12": "xoBxuG8jyCXj61DEdxahoBesgC4bYKitxWQZY5Du2paVrpGf3bA9tn7eebrhZKT5HtNVtLox89Z5cTg2NcXmvqE",
  "key13": "2Bixh6RYAWg36KJNDbhrZXagT1dipnXfDDi2MhJs2Ti1dgDKAtXC59hBAz1j4v1s3G2kjRQa8tLCkG4341gwJmoo",
  "key14": "4xgseir17hPWj8Hej436355YjzGNXLSwWsp997jT9NeZCWfDth4thgmVv8d3bC9i56ZiV5TVvnvooU65358dopGs",
  "key15": "224jzNwDLJn69NFxE3ED9Uhrc3JBvaW437FkkVcwUizPHdFxmxWy3D3CnmCn2YKzU2okG1pQHwLU4maHPhB4jwNb",
  "key16": "dK91jdWMSsQaaoV4FmHbVXGpYNhwH5rjUcHNkorcVMtkjvHJTurGpZuoSHEougHkNJCgr5LW3yHWBQV9fZyzvHo",
  "key17": "4HEpwz3i74Lo8YQpst4Z3FFBLmXz5TT2762ajmHeBGhNcNCsEkpMgTbj3JZxn7B528azmd3vu5PwNAtr2vv1kHtQ",
  "key18": "cPZMe4kt3vLDp144KBT86FJ7PZDssTbLwTNvrr7kQrgiaU914tYMyGGPLxe1frMwWquK2Lcqn2XCsit42C59RUm",
  "key19": "3tMreaDWfv6GpTMCDAcVqSb62WDakYuQJsCtGpdq76fDWukD7YGV1b4MJkcRuXFPGARmoJu8rPZy87d1SLDV8VvV",
  "key20": "2JJ8VR91r1GKW8zp7kS8ZJMMT8CsoRPehE9gXDSjcUvDx8tB8yGnHQ7wzWKkCc598cHNcaSqXkXYDUc6tWeNa9gZ",
  "key21": "2FpCKYV2G9FkwGE27kRv5kDGZoVoh7RKubzTvoF57rxKZwf4qma2zm9cTJ2SqWUAj7tkumz6AVJR724nyzF32p6K",
  "key22": "2ijEzyqXWE6tsahG99V4EHetLEQHYAbZzC54vMcS2iaYfCxBtDFN5VWV3mFenNJmiS4ECqTPei77dTEhRR6eeCX4",
  "key23": "47f6z4FxUXMiWQjjS719x9hSA5LUJpSR7MnwUhSCdYLCueDHhN6rMKAxx3dS72T2atgXY6dRpAMkaeUS68T28PPr",
  "key24": "2o9CsnsaYQqByy9hK6qQAW4PKQMV5Vo1pWJS7k2ib3TpgobdLBs5hzzesxnReWFqCaSAE8Qifa4nU3FwMkkzWRR4",
  "key25": "3wPnMU8FnkgbCdyVt5NKesHTZkej9ASgvmoNSTXygqC9ReoPHeKrQVfaCjVJ11MqYY95wUR8wwFGyLK4qFJTK2r9",
  "key26": "3P13hgFMCdFiYm3nNewrV7dmdiCydKu6RMb2T4wmouQbQz5RR49F2cUoUFVzac7ccM8VUb2h77N76j5bcLVGwJH7",
  "key27": "64T8R2ureYoRAdXTr3PkBSubPkSbFAyxGCkYrEVMviWhdQaoqavrpYqpt6XsbEpNaPSvC2XN3jptj3CsBFv4bBf7",
  "key28": "3PjcdTJDdvAfuV81XBnSXLwREz9mJ7pcvLQCyPfvBtsHQ9qpDZUHKVaUTTHuiJYUuWASkVF5PuCzS6ymC6s4VCBd",
  "key29": "3t4y4MhuE8qzhkbmcawYh8bVCDZshG9CzFrxyPm18t11HAowmvpz3NseJgj7RZ8PSRzuKkwFhQSESVdutBziTwu8",
  "key30": "5UjTfDoUfLgzvW7roHzXjsvDDqwGyMZQmZkHdrUDjzeLCJSERpxvJCSYtCicLeh6g6M5UaQddY187SsHaFjmiwJh",
  "key31": "2iBkUQrDxegxKWdNmAt28Q9D9ND9y9MNYky5ZxiRPbYtRWHBxc4ws8nfj1FNdtEAxtiBzAn6V3ZF7mWs2zzutHqF",
  "key32": "2dhGGkeNp3DXmzSbq58BeeFPZXUtLb9w54495XsSKgjNDBiqKxrprzh52kw1D5ZkHpbcYEgvsNfZd6vp4kmkF3ED",
  "key33": "55KdRpnF4HM79BGrMsa43eXokJ34AP9enTfw8LrgYktigS3CfoBSwf71dk1zYPofZ1L2pY9vyBKXXUp6xZEXm7JB",
  "key34": "5zbCfoXiGChZW8epKR3fsNjN5F3AKCLHPCuvTdJcecM6hRnTR1t13Njbq9HEKRkDHxeBGWq6RtWTbt9BgmYDpzkx",
  "key35": "4VAm5BcDoUeryyxZPv8kkRz9JrXpRnhqSMW89KdZx4raBLHMJG5kLQM9g1vaKDCirAP1QvhmTHoYQUcq7eWn6RLk",
  "key36": "5vLEaxHDXTxD8Ve8XjHFAJW8ScoXUKGDWkJEEhCW6sNoYNEZTQpMKmmVEJQztw3UacgKPtffuJzo6BXVpL84rDgn",
  "key37": "3YKz1itFiNnD8nCR6tPLuUjsXVzped5o2baj6zKbskDPCAqpDMuAMadKSt1UVnx3HwWkVJBbteHoJyY29eH3zSCG",
  "key38": "pyV7JFK6MASmxbDFQ6BRLyEPGdKf6Cm8fdhGRPZfeJkGvGqvWj6yNAVohKnLwWhLfYd5Hy6mYjUq8tRAK2pGH8r",
  "key39": "5daR3mWZM8nHoLzEjfjb2LodsjLRUvTEv6DEqeKuwdC6vhyXnRA7nsmXFBY59g3xDFnLkh6hDoy3S6Y3si31UmWd",
  "key40": "Kc8wGXrFJbb2dVTq9dNejZ59tDZsqRJsR5kCLRcZFzhXaYfPeGDUSAwMbXnezGheYsUiLaB8o9oYMtKxsPYtGL6",
  "key41": "58Kouz4J6uFykJSA4uVgAGuxA5ZZvcYspMA8TQ433cXfQic2UEwi585utfW68LkvGKRpDVqkTnLGQ41zhYpaSnKM",
  "key42": "5RqCuUyxsGX8PrXGkzhc7WJFBvq9MkR2uwU1KHpBSqyNixPs4NiAo9Cy3nQtXT6FoYXwt4KfVGn6qadRfFJ7vjmr",
  "key43": "4vjpQD4QyyveFp9BT7V74irXGAacQnXbVy35324KMGKQR66m2U5vQh7g5Tb8Qo6MDChWTgWz9Pefe6miYfia8tcc",
  "key44": "2R3JJekqLVNsxWmbW3CzUzgHZohj2EvkwuhRySA7sLXb9QX7Nbwk7ZTfLKydDUjczjybMhLfgqYSiM9y5XF7X73X",
  "key45": "5BmHtfHFwVG4Tjp51b5jc3owbPKExdgPSxGB1KNqbA3FjVn1d7YBC6A6iimvJ68mrP5uBzT6f1ahiY28qNNLQ6JY"
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
