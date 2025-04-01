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
    "wwLNHpuo6ZLmdvjNx1Pb1HuAnRi4PEZpmtQPo9RpLh2ZLaWVgwuxicyJsEZmhVQyq6JkAmkZPwmDdBhKLzihJJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zuR6Na9Ha1vstC1VEzEmgFn9PDHPiF5t22qeTtkr5aK8zysrc4NsAum4Vmx4KDXk5mV5PdCe1to4RAjEjG1nY4T",
  "key1": "3suCMP4tERzzUkMnXskX7xGwKYJsT84T3rjfs7is3yxTrFGC1X47C2h1p9t8o3sii3XJFykcZb9pJSn3Atf2g2ir",
  "key2": "3M6168kVrb6f386tqWVFonctn3mPzkFB42JTgPNbbVMvyunX4rVPdFw6yWdccdAq8wJt5EKotr2ebeMphJwU2Qyc",
  "key3": "4PHw33Jv1rTaUBJSWpCxTmUrrn9zwSniriVskmawBXRGttojxgadjwQj3JPgwty4wNEKrwtfT416eJC28Gcty38N",
  "key4": "2tseg83eyBi62uKB7r5RputfoF1RdT965V5ShmPExAnjp63U5EqkBm6vaFv4pZ2TaeKhoMW1BiueYzhpDchKpGPY",
  "key5": "7jfzZq6nFLAawdusGamBggDMhYtkNrB4GNmArR8QfezsDajYqcGGAHAbCMsbBeUD59ncFRfrn7NheaP4BWCUUM5",
  "key6": "2MCD7a7VwUKkcHzSmB186AqfnwbP2rVDFkpnNpoxcTkEoqt8gugNem8HdihEb956vvwdDjd9K2KtZfWBdatQXWxg",
  "key7": "2RtE6q8GXToGBAGRENLTK673UGqBxjoQa3JguvHDaWzYhh9QgqLV69CPeLKzezFAxuafxMmZxyHr1urPA1yfk4WY",
  "key8": "a97LaNso255EaHoZtqSdCefMVeXBi1meFDwUVzk7hqZonh9aenyufWmPWLtk5U7sSkEXhhpaXmyvrKitPPFV9gx",
  "key9": "3mhSAXuEE9AwKgaTKDCNHcww8ehqwC9qcZeZzfj7EStgE9X7k1dVJYY5frkiY562HoZhrKhc5kanfKE3cDT3h7H4",
  "key10": "2YkL7TdLjDiHeyXceFozBee1d3Ztm2YKkXq6esMp4Ut1xVQXoqDQxfaqLxWe9Xhm4qLxAQUEEzvoNQFFVakwZnTj",
  "key11": "4JGmTrqWrzK9tWZTzkgFoyckzqj8xMWh7sj2rdEv3yuFnPbqQskRcX6YDoQ6Q7HgqXBSD4vAKtMGdEyyU3sx9LGg",
  "key12": "2ZrazkW4tzFipfdGGKYsvbxz7ujoeUa7yeXQiqyJesLbdzgCFmrJR5jgCsiXzrrd9PibwYwhtoTAYNsfGFKbbj6i",
  "key13": "ePcPH7n7iQp8eujuu8AvRWQRGUmakkeGMJjAbBj7GbZi56NPNuXZ8JQ4B8WnX7wBiWoXgj7XLcESmj4k2M3jL58",
  "key14": "2CQwuDioM5trKPFoLfsVajp1Kb9ddfmvXhJcALyearDY1eWYQrjgnSvcf7CLd1CGg3o6b2btgm2eByK8vAPo7y7L",
  "key15": "23YRqsAuwWWvroQqzme7YkgwnsMHg7DoiJH3874Xr9XedeDE1jcJU7gCg43pgHBs1G2neLkUhiffXP3BNC2tTNH4",
  "key16": "4RmZ3PMk6AQvNDcjnoK79d7ugQeCktGedt3r8htK9rZH5LQFXb2k1WXR54C7dFubSZMsijyNrNPQMm21bXLoW9qD",
  "key17": "444H24t2dedevS5fH8XTmVXpQfDYmVPcLXHLpurQeeBAQbBhL43jaYjEaouaLsVeNJbkAwpQAioS9j9uSN7FMNV",
  "key18": "3rYdofCR4maJgXPDgWwfPFjcPt6652gMARygeuLzCtRAp41pBkCZmnbhhpsTTf1ZAWhmcMffWfFyU5SHAsf21mYu",
  "key19": "wuAV4UJEqtkLRLPYG25uWNXAMmkk6pWgxAZYWerS8Li9ekhjBPuVm8MjbXpfvTC4LM6cCDjo6wtU3y8zu7GCchx",
  "key20": "3MnJRG2Xk3X1FP4BbL74KddYKvVTeys3yraXRhVFp5YBbgeLUhWLgTv87cdhgAkgbfDiFFgsFgztXda995zE6MNY",
  "key21": "3Ee3bEzH8y8Mwbp31qzy5rUu6QVXqdpZdRzUjB3jCmYEevZKNTicqjsXXG42hEihaksJEZkfmcfMJTdxtgtAWmVf",
  "key22": "FjwnjNd6mwCEWhpSq9k994ff6LYAcaLD66z2SxJqojbrHZ8dFQDY5wEqvnjjGmHxy84gRRHohpiHWM8Y9cWw6yF",
  "key23": "4fWDEYh5LxHF7xsh6XVd7GPw8TS4Mhq2o6gdfpuAp9EJwJ7HJ3siAKMfNT14HdtWLh4dWg33vQf5XCg31DKzJeJX",
  "key24": "4gEDEoLakfCytXJSujRdyntWVGGceyfLdJu8FYTyUBwwKEXbDBojdMUyC1i8KN78NViRxsjq8izEKdLsWkMaLt3A",
  "key25": "KByb2YdmZLg2EisHPzKitiSbnNvMJMxXiopfQssnUGe66A6Ds9z1Agwgg27cCuAprbvfKaMnK9Eo2K5YiUcbPeh",
  "key26": "5a1j7DRCLevGjWR5hPAKruspxwszxibWZVEtt1j37pcv9XrVRzQCZz85YS4Y5UwfSehM7SqrZBLVJnUm6miQRD5Q",
  "key27": "3PXFzv2eGwawJboyHK7PLSMVgZ2MrPfb7NrKLtdRoqZp1dYsmiE4vy4Bwun7XQdEkLbqci3pkwpovoG5tomc55x4",
  "key28": "onTdefyFvjUzuZdxXeXnYAegg7UgzJf2oV8hLrSnb9oGs6t6VMhFZwGHKT2A7yjew1WEY6t1shS7qJcidDRwH5U",
  "key29": "53WUaHHZoJFtxNW372hjUwuP5Sq2rf9bTtrLg5Nn846QiRaxaK7tnR4qtjSWmskFmBb2Re4uqHtt1NV3FBLRixaU",
  "key30": "baEsK4NgFPvyPZouKST2f8c4Jjrie9LnJqXgzJvPzN9qucjP19RqhmERjcY1hFynWFLB6JXFjgCisFxMry4WWkc",
  "key31": "55a4ZV3V55r25BJtnbvdHxpvZUAQQTP2MwKqcPbCdXSsXUmr5mymWsv4VmphPnUvuwgKYhXLkAAvWp8EcWuCB8K3",
  "key32": "66Y14SkH8kCoMNyn2HFcKvUS9Zk6GVuh3eDHKw7gHtQEPat8i4s5sGewRjgXLQwjtjmbp63Epo9XtWTbgWt5kT2c",
  "key33": "4HXNftc1cdeXjPvTzajVsevBDvYKhbomTarU53epDW8XvwAJDY4STp8UGL8yW9Sus1fp3o8hd4U9eLkUc3UBDAd7",
  "key34": "5duhETmcM6S4AU8axbzrrwDUmFPy9ZG7XdEBq86YdWNHe8yK2SV7izBjsNZVgxeF7miWywvMbdLxU7RAFtiAX8pz",
  "key35": "5P9cqKKcY6hg2ocJ4SMrHbFPZ5U7d5coCzeNDhdMHCfhEqrRMPzNAkbsDBgxpaYjxyyvw1m1BAnfB1ZmDN6YBPip",
  "key36": "MFXC3vMchM3NX9j75txWTRbVQnHQMS3waJR7Cv8e7eS8A33BmkkPQcsCk7yUcx4Xt33sT1srRsfhEXdXGtw1f1H",
  "key37": "3jXVXKdPUbpcfPz3f2D7vT6PPJNuWzirX9FZa7pivfAPKJfxSkqEKKrWAvFo9cHR7wCthtYmuQz1Et4jF8rGcCVn",
  "key38": "2gYWPfnqzGnFwdFtTfHEt4FoRUkxiJVUm2TxsY6bEv1FQP6MQHyyuYurKHxSXFR3PDEEFdnwBEoKbb4GVUwpEMk5"
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
