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
    "2X6MmCEDpJFGr2aLrRcNJ8xT6hUiWRGo6t4NLRUSnPu2x1AvJzsC3xdhAuLB3iaAfyo73uF4MnAPvUHKYdf9Spnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPty9gTq8yjbDQfAwPW49XTc9APSXJyowv1hgtnyHDgte2XpHGrPKaUYHo9McYZKb4X8tn5GAzXiFFpisHWPN3J",
  "key1": "3HGryZDaRz6ubzn5A1VhPYZTqrLdf8SYw4ZXpCSSEvkAtvo8kxhyRpLVxBCyLi6Xmw8N8CULid8bUspd8H2m2dxd",
  "key2": "39zYN4xJRizAjy1pjBWTECiHikznhz1sxwyJxSM8KYaXFRQGehQJFSDpfaEw793D7BJG4QpMPqC3C1EdK95U8Kcd",
  "key3": "kD7MLXUrWEa1ghZzCMyCzKnRN8G5pWpFQ3n6tZpCwG2NfiTBmyi9PFgFZB3F4s7zhYLxpQtmEmfYfAttDE3PADc",
  "key4": "5VxzGi2qVCytmbyP4qDQ4uxVLCPSaMuUoRRhdSDn25g61x6BbZDYyrF9z6nx3NNKr5jxk233NTSo264pZhe6dDJk",
  "key5": "5nftC4MCfUYjbCGmcSKrAVc1RWdtz5tQp6xxPhKxmis8BDbgXM6fVJm85HRXDUwMfQxnKFrJ8aXFdtdAKViNPKgA",
  "key6": "2n88ZUmTNdh9prkpDye2TEZ5iZiJQUuu11BfJ7FjtC63kVaYciuGGpVgmmboCD1RJMCAtnkSyg8WDCtHe8UEtxtz",
  "key7": "5huJnENKYjzJnGsVR4TV89NAdQarVowKKnn6snDvvvyNkEq2BzTVP12UqGuky3DkRPhrAZ8tqFibWUcCJv8F8FK6",
  "key8": "4LSMQ68Lm6NAe4Kp1TBGX2cCfhGr3kvYZye28psj2mLd4F8grKbK4NYW3qBYDdBZgSq5KkJnmnyZzZAHhEnYhNHA",
  "key9": "2NHrGnJaEW4RZiBUmytcbfjeH37rEutBtNujouKsPA7VXmBAdqMv8UuAXzUyb9TYark4Hd5c4hDz8ucmUDbp2Lj",
  "key10": "4mPfFQ3vF9b2TEKvCyk7hSQfFKTqG4MFVif2Hj2RbEua3AMtiwwzNJwfS2kChFCWgfsxEUzXhevjaCY3dDafWpYe",
  "key11": "2b4oSfQjvjZZavrAubLodZKy7R5j3wKw4m5VDnuhanXnsBxKF8p4jgiHgX3ZWmZ7PcNqeCBgpoxhrktNRc5L6gHf",
  "key12": "PXGUrV14Pik2u81B7GpqjRvudzCyyBzRYhGVjGG25pFnCQXHobo684iNxVZa9Ar2VHGmDVwfpit1asoFCz3nouh",
  "key13": "YNbECSayqvGYAhF4UEx9g9pgb2xHuutVsjjMK74992N6pzm7YG8g3JRD85DZ7AZp15vprhSnhKPGro1r6NyKzgT",
  "key14": "58kqAxUcGSDkeFk3dDm2ZxK2VDAY14uArYVtZYWka4ui3J5QBufUGcVzFGYJQcsp3SKSwn1FBYaLfhTwMxnUvfun",
  "key15": "5RG7MS98hebHv7cHg5yfkYKAmeiEknHf4drEuChKdCGf9FyATadrX7ANiq67h89bHpEvoK9S9LTT1wBnqoaEzf9b",
  "key16": "5mLnc4UXm9KSYksdwrfPZD1mMkY1KBMpKshPoUihq16AxeRJnzJNrjVu3DGeidDks5NebWnscnYUtuSAwg53Ge7a",
  "key17": "2N3AYgNYQqz5vFetDKawsRTP4h9i2oKcxwAJFZQSXBmKPkW6JYDRooeBdFgwRMieMw48UenSVScGVY27bj5fNQGp",
  "key18": "cpuYUeSMKByMWD3MEteReqJexk4EKtXAvuhJ3bhgSXBeAcVLUXB5cB3Vd3cdLVUtJfyji7Qdqv4djRtCg8M1byB",
  "key19": "4TAjD8pURKXehGhT5qftqxY99FFgmGnTCGbSdZM9tS269VTG3WrdpfwsvV482GuxEMr4mgnYzjLJs71HDPTxmyB",
  "key20": "2pcdwLpDW49RrroqncgC8HXZXYGF763HkBooqP2FCHeAXoUBj1moHNpEXmDGKNr1juMY3ASAQ16XxC1CH7m6kbEo",
  "key21": "2EtDdjpQjhoWU497YPGjHLYD3S9S7noioJpwppZ9FRk2ohccVpQZhV8cnwDk2Hg6R47hJ45iHq5X6DSdKCNKSP3D",
  "key22": "2ZUKKvrzg66HpABqDfFurHc6RwLgs4AMdtrYtkeDRqE1vqhNXQTQAF9i5T8Jd8VVrvtGDWzGm7Ua7HBFLXoMQibH",
  "key23": "36bCJgZz9m9tEnvqa4JTyRy7P4iL2oHosdoN2wJ6BGucBMFtP9AcJZb1GJ9iDsofgBo59yxECNS8dxaFsRLSQ4Ba",
  "key24": "5kG2XsA2Aqbyrb3eoxvhcWZDPeW55WmxdKfGUNpwEmoyWgEZMdQtYffiTWXz1KwWoUs7tChhw6J31bhKV8fZRo6d",
  "key25": "4sUL6rJtaBd71GHgr8238JGSG3ArbtM5U8tzKXCpw5iYbyrmoJWwDLc3Er2NBso23NRtu5S3c3ce5Uc8mUU9iQ2z",
  "key26": "4NPULWv2c6CgSfMFzKL7hGh4MCdFTkYuMyiqM6V6VmUi5zpdhQRikKzKofSBmyctzAtumpgfMDJwG1Fe5P4kW66U",
  "key27": "2vrjB4ci6w8G7DTB7dPiJUTFnicRHjDedKSGviTe9YPfuV8oCGzd5c8KneKQ9gBn68J6DDuG7XFToSp15QpVq3qE",
  "key28": "2t5NXzJdDdvotDEg1kvvNzrt2LgAvpj1eouzazthXVsonW6PCQmYHYGsqSzC1Dn8SP7YA9xc1Qd2QJcjaKwoQRh9",
  "key29": "Wkfrmh8JHp1RroHYQCFfxxDF5kxqLcqwjDtfascWCKUoo7g5hEtgrA2hZAsm2V65Fi2N6k9EuqSSWKn5FLkdcVP",
  "key30": "2bWQLmNsFjruzjad7HjHjUvfAFEo8159kQMJgeYFGoin9KaE17th3oD4oUrRaNjb8KCDsR1iYSJkrX7BmV8jSgU3",
  "key31": "AXF15qBdfFxktjyBK7jKkx3z4N5iniLsJ3c5xTGKRB6beDQhyV5evyZTPdoKgtaKVFzpSttuhrkYLhcWcr9j1d6",
  "key32": "XTkS1PzdQMrEb1r8hChVuYwGWvbX5BmP8By7GeCnJFEEvNsm96Rpq7KjBLaCWv1fEDEX2suEuoVXfHub4CyhkGu",
  "key33": "4ksN4ne5DVPN2rNkoDCsm3VeURMaKQRwpmNtgx3ZjZtTY6uEqRkFxGed8LHVhqGexiSofz7MprEXBKuPisCd7CUj",
  "key34": "2J5JT6K8Cz4o91JXAscxo5c95ULDfBoWhMPEd1m1p2nauLEvJJnXHxVsA9NZTP8L4SVAstgRmnNmeLPHKtkcNEMP",
  "key35": "8jcPE1cSfUyBDjVjJaFDe7y4SHF7UsmYhFVvP7gNM1R4yA8Vd5TQ7phnmNpDpXe4yve3dsgM23XUW2wt6RQM7NP",
  "key36": "b3aqkyfbTcV4dWTWzEiekjAqMeJJ2ACJJoeAdXUZXMGAdeUd6g5f8LrdkWKWw9Sk6a8HeD2yG3PsR3Cew118cLk",
  "key37": "2PRBiAajZ6SvNJbTSyzpcPf6BuPas4tc6QDyvY9Ud7Wk3YWKXyB5uJNaMy8AGXm5HPPk7K1HKRswpzEXZsb41BAZ",
  "key38": "2wN5FsAAQJRQcNcnCwTc7ypA4K3qHvfrjYBuoCA4v1ERUjDRnw2qYxhk6wWZ522GFTD1wiWgfVXSGGmyx36C5kUC",
  "key39": "3bT5b4pa69KkzgAHDEiaADcagii8acA1r2duMwbPenc3PJQmopZK5WQqsai53w8A5n1ZnSkLdobQGUEgyJwhh3Rw",
  "key40": "4QHSBk7SS3baYrhLKEfNJsxsHk8vUStN5yDUBBkhNULbz44fdZ61Vy6ETqtTMguAHk8he85zE4Bv2i35RBnvWfS1",
  "key41": "3faGDLFyrZLjB6z6qPRQH2DvT85PkumCt6fLKTufR41hSZtLi8rxpcL9BRtXHeeE9w4y9Rqd56Rz17heRPasQwVR",
  "key42": "3GGWmrEXemTLkwwJU9hSuWVS9UMKZpYiefDJLgM9ntNn7eh8tbgGAdScTM31rL2sKJPWNpEPbhq5RBtTpkBfUibm",
  "key43": "3RwEiAmHZEkdwvzW6EsVwN8zDeauncBUXPYG87A9hWcxvakh3WmCN1vjP3qrnAF1shKZs5J2sbhsnaRdA14NxocP",
  "key44": "3Tsz4a5cJjL2V3Z33srPU8K5kz5nVLxM3Sw15aVFj6GdDxVXCxfoS1ehCe6dXmb9iyFjgwfZzdndrUVXokq8GVng"
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
