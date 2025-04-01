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
    "5b5pvCQHsNwCZDc4H3hMiPF2e98tLn7Ra7c5u1EPHf2NmdV5umWQamci91VzHPRZxhD2EQCSr25BDFdcGU4jMrzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNix2vq71Lxc9SmLSzXPwy8y3HG9frZpxD44d4freVLVRW3wGHi2vSCsCPYp9N89fyYiDS6UE8V8RfgcK5xvf4n",
  "key1": "5Gpi4EWzatC2JodgBxsarXZcg9pKZLNBNSQdkGwuPDwFhYXfet5YS5X6kLgq4m6XF5hh6BXtNEihLWrNsP7fXQSH",
  "key2": "2n5a5JUuebSKAL4DGgVCMTfsfCJZtvj2Gs737cmDVGd8pEMGFWJTzJ3iychkc88Sx6y18wQLEgmGbbMGjgWbrGGV",
  "key3": "5jjL2qeLRBBGHCPZ632sHRigtDxNNRXjYn7tnAjXUNqgYEhWcXjGgDGYmzwCbiCG3wkpGkSoeoP1Uk7mTu5KPshW",
  "key4": "2SS1DDtR5A1oiKBFgq42mGHVYm6MwnaiRsesYaUxjWf8SaAbRWNAJNsYZpP6qdfECCkY8U6B5SJtrNpF3o6cXgDC",
  "key5": "4oPbK9rPPmf9KRWgr9EWNLTmnqaQGU4HgmTrmuDe8h8Jg8xnB8AB6va4UP2PW4yLf5TQ8hhFrKHLX5gNncauiovg",
  "key6": "2GFzki6nk5bCfz9fyTuUxNbyyAZJZRS8aLtEDg5o7SZAkc2f2UnDXQsKj6saN5d1XfifUQfmg3Jc9i7qC7veSVjS",
  "key7": "3uT3wUpPxGJjmqNBZ5GoS2QYSh4Hgkm7ceFqgkhpYRRLESC1cUFkKTuXaFvnBkg8i68PUKZwCGqbZ3xz34svLJfC",
  "key8": "EHZa4XKg53MymbLgEyd2yxEWsrSZgu23Ut3crZNCZvCBXqB3tB1Q7Av9K2BSgnEZL3c7R1UrfXUzoFDP1CUNhVw",
  "key9": "5SafpB9b4yaBYrMM3T2Fig9mB4wwYGUP44pqhsLBf54kkH2sn6hMh6TgXdzRo7Z9d7Xj3u75ACFjPm7dbdcVRTeE",
  "key10": "43CV8NTQt42fFwNmLkUQhDiG5PchPUwPMRVgi5vQooaofTYfC4J5MzZbBScbcqnf6rkPWXvUxNRee86JxawrvzAX",
  "key11": "3QvG7UX7pizZEYnCAVTgYQBcUTczvXq4q8bUh6zghxeU4JcaMBGqmiP7byjG7KaU9dmHEw13uVVZgvZX3D6TKAVA",
  "key12": "5uzJEvcZjc1mRzdxQjGcsiBpzb4PfQktJXTtZUQrGvsiM6px83oBDEkqtMT2mh2G4vk5FCd332v3JCrPrqaihL4b",
  "key13": "23Ddtpn8LqcYXtJM2VUSy6Ued6r6AK7JzpwsDkwkM3wjyLf9qunBWx9oMCqqx7STkCiszvutsCAKvjepeZosbVZK",
  "key14": "85NxiHovEdBzP88mpCwgLFb8iN1u1BtW8qCWWowDRPXdkUHTuz5hqRPrdxtYYjtyg4Ho3z4GJiV6MwA2KCRZ9uQ",
  "key15": "26MnForVUDxQ9oxytVrnm61AHftBk4WugstoCNyJw5KezS4J5NXzGvB7EntJ6MD5FMMhzcVd5CLgfyhkZ5oEC7RZ",
  "key16": "iFVaZ5Ny1zf8VXCax1M7AUeG1vppJpr19ytm1tE1QGvCeK7qkVdiX8gqnhm29upVrH1a6vuykqdAzHsF2VSyB6G",
  "key17": "4ZKEX2a75Sxw7RQEADocDYU7GYernFmPQAoD92dCNspVPu4PjxoaFgd4mJR54kxiepCXySSzA6sJw6gmfGViFnqV",
  "key18": "2LGpb1oKqPrZBr1MbEoZVdZBp86hNAR2iT6XJiYRG6M2RBU6ezicPEtNuBGVARTs6Rk9q9m5fLf6YzLXtR5LpR1W",
  "key19": "27nWFBpfMG9U4zRwY17E24CkojUsRpoS2Ho3u8BbAJV7brNRAH1AGMTCSAtJjAqP7bCe6Dcy9MdxAFrekPrSfjXM",
  "key20": "4qFwt9SN497xfpZYPNzeHJi9Ub89gZVmHa9gGKBdzHNTRTSbmZKW5Mr1ni2yKfbiquudTTfjQqLoNtg4uPm4u8M5",
  "key21": "54ZrP597MYSZpiFxQW2fjwYApvWt25J4u5wvbTiR27Tr7JQD55FpfzqeBVMt5Ekbv9Lw1s6DWgUCDniNfdJQsCgo",
  "key22": "8naAMzAzDtdBeFiQ3fCjz7aBsxyddfi2ZQRUK1TsdSSadA231gEMn2hjcz4yMRkHpuWoZs9fPF363qMMAWf7572",
  "key23": "4L6655pm1xyP9vK3j5tqsknxzAvgyaY22r1b6HSXhGNB9D1qFKZHtmzhoQWiDJAy5nFeRZQoSNi2ty8PoKvyRyEo",
  "key24": "3W2PNHf8RoTSsaCJrUJu38Mi2PiC48HFFo99JRpsh7LzXFMSzMUBn8Vb8Gck1xeVcaGQjCJqahnFquaeofymemtZ",
  "key25": "mU5hHrkq5Fk8YRLiyUXmNvJaehubYC1W81buuDTj7V1eBaPnzQcTmSicGoFBP2kEbJe3EJ8GN2WdSwkxvuiueZq",
  "key26": "5osqHisi5URcYuirEs1PcVeV8woX8TaVzLse2ca7XBKnxu8CCgDdVFDiEvxP9k5yLtpywvwEGmBMXkiMoZoVYRQv",
  "key27": "2r74w11XuzxCreGk48ezSahqPeBwU1rVa5Vkg3jVhfeaqaZEUXNZx4y64xStZhf7VD3kLMMEua7Uwqh7Kg1nBTTC",
  "key28": "3XNTrM4bQTvr2SEQJzKmHC1uC65pUsMxw8wXLBJnLUKe8QyDRnQtFkSZKuexcACHCom4oTFJuohwtkoV8xTnQGnY",
  "key29": "5HZXzzJajP2mYfGLBzcSUUzsAUbqvZ1CXeTBsE7zNy1eSb7SNcsyX3QDyFsttDphSk8Ni8vSCps7psZmohqrHp4P",
  "key30": "5FoAf5yXrWkBTkAKtK8W8f3Z3fUnvWZGtqj7irL9u48X7wtQatrSm4FqGip66qgu2327teQ5jLgbfqFsHW5xpFHp",
  "key31": "52aK47cHskZbzS4TkKK5XtQJBjjrE6Kg7hXFWoyiUoCEaee7dMKdc3DirWH661YXoymFudZ52ThRUPYwwyvzHQUL",
  "key32": "2THnGHEgQPNqAtfWrEAbqBHm3kqiRngfBawz5ajUdgbZDouG2Qrj63J6Toaxk3Diik2uDWY3W6Ehro2B3DYLvvXP",
  "key33": "4AvRWHnfag9zjq3PHSDrUE7kNurL1Abv986H8fznEiVoxqetADJW3JGNhEZ5HiYbX8pfPBoDpuB985E4zNriQQ1R",
  "key34": "5eFX6PX3n7zU2jMZporFHawfUcU1zobtsjdeMH7cibUzHF8hfw7kdutMPjhWQADEK9CsizTwQztdhAkQg83ntUtz",
  "key35": "5UG9DfSkzg4okG7auxLjH3GbGYgZJxHZvVRLSwgovAQTYAEFcNfwRwNb6LdZMbTmWvftVpkr8BQkFQjRNRRagbeP",
  "key36": "4aK5Cc3BDcdEe6F5u4kbd2ojrSLGFV6Bgvm4aGf72GZHff83NEPVjL1RdT1rHBE8dbWudxY3n8ScmGr5md9TSTV4",
  "key37": "fDxFSSiQx158pTgiFeePqBQWWKmjaMF3GNtVUw1Mjeixz7zFjdgN5BjyUtHsNm7GRhnvmayxu5cHWexFyXoc5a7",
  "key38": "383ZkciWmQiUruk1xdjxqwPRs8ntGRSZs8YVzoeQqstNWRvgy8Nvx6ci7VdAtcJC5mu8ULiWChpfTztpS9Acb8Nq",
  "key39": "3CUvehanKg8foS1unZhG7WrsBPngLjQ6F8hZCkjgQdHNA2UEqih8oc74qxTkVv6peTvzY7omGtj6ENw1icQa7KK",
  "key40": "2RASiJDWLfQFPjjL6rg1XbVkmtEoBtUM5KmTkdgVXscTBgVSZ9C9Wht3VhrZv1zromaeH6PS4jLs1noTERFVaTEM",
  "key41": "3DDFgwgCnz6MPhLqjDi31sARngRfntBgHGCEvc1YQywUAPfsnpukZ7DFbStN5ae2AuPdhqocnnepMD5xBUdZFZXD",
  "key42": "4JhoevZniD6usSx82TTyND8bhhUqQukUn71PK24ZiVQEhsWmURj6A1tQX1KspKek9uKKbncf9STXpc2LWPbyNs8X"
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
