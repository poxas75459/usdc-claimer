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
    "5rrHsetxZN31452NxH74gSgY6JteREsfFMLa96eyzX2oRbXrhrUEra6XSmnWGy87Ns7ZyzcoHC1ZzMHVE9nmoMqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfwzUdKXcyESkQZtZwncP56Na43yS4HbJyhh97srjxyJpQ3jsqNtgFj5wa98Pe8WWpLB3vCqmqCUJ5m6xnf4JJA",
  "key1": "2xT57pJ3sAmJ3y1niATvCKQF3ZULpVygFuvcgZbjyoXQNUmLo3bgDhLgqJ2kq3BXBqREVWoXfCuiULUJ4jeJfBTx",
  "key2": "26MmqHE8KXrLdUBLJqxXbg72Rp1ysDaUhPWv2rjcF5VtANEBRnz8Xf7wUR7AqEgHGm6sRv7YgC2dkZZrryDVfKTE",
  "key3": "5YuvJCuFjbHKUU6tMs5bg1M7Lc3ZC978SK84h6NuRqvqeKDDknbMrAGBSQFrHHr9chdYa9viBsK33gF1KWqVctDs",
  "key4": "2CUwsutdJRZmJWGPsNsrbdv2kRzDqHHxbzh2XByTtnEdDTGHKVYm8r3nCW8LoaKpHrycUzDMHeKnUr8hbueLt3B7",
  "key5": "4QmHsUGUDFeS8b3S8n8H5rPVFZGHvtfvDz6dwH2dd1DyQ3RHimkkHBtF9QhxjTvYohXmL3j9njHpgZwxqU758MzD",
  "key6": "2L3atM8z3KwdMATEnUiYGxKWuCUKpNXPMW3aHzU78pUXQY2PTkPNKCrpKHTGqzn5TiGwduMvhZwDaGa5VZjnH9r1",
  "key7": "4fjJVdf21MNMZHhASMiBK2CCkhRyR2RWSgTzgt8UKFCZcUcQdFBj56qQajg3aSMjqVK3gBPXZGSXGPFUKffu8MFJ",
  "key8": "3P2QiBfaruYexAdNFkTkW7HUC7HRxo5Mt7vNrAfzxw6ksERuURQAq9FqMJdf6PB9CdVxsqPDnxpHiRbGtmnDnLq3",
  "key9": "657C6CFse1FSWyAiVzjrDvrdDoi8ct37X27pyPqhTBe5T1VWd9aYSa4e8tReaCxEVNPsacALNk9fzbraKDpw7dDU",
  "key10": "5dvuF3aTcxpERsjQ9JGb42FqSLk4D2vwCMNbdKrpVJ8fqmD2Wc7iUX9472doN9QvTboV4ubYANWc6vgrgTRVsMm2",
  "key11": "5aLbKfNVBRLBBNhKJRwTUsP3H5g1gf1yveqd4WJH8DVXLJwh7BfmPCPczx5ATE6uDzaFtaYoJAXyLkoJqXrMAZ27",
  "key12": "4QjoJ4nQ4jQxLyy17htp3z4HLpRkgcK9eSpzy4mg1sUdCaeSrCrDaNJPQh5ZmdrmKsRh6H8mA3G29oDac9nLicmy",
  "key13": "42MFcLi9gohdJsFcDQjTLRWcFSv3GUW7uKZKvgA8o36YNt8aqbRDgZMfYgzsXk8oErM3XUsyRNxJq4m7qqUqzQMm",
  "key14": "4RzC2Fz8ub9Mb2dSpa2bdCoUE2awrxjua86C2oEsumfCuxgP4ZCEsNDUzt81FhLuHn18Hhd1S8AXLGqWXsM2UYHc",
  "key15": "3qgsUTPVh9DgxpL1WBjcuaWwi4ho8amUMuhXUENANDPiUtyKprtWv3JftBt8ghh5sKk9S5fAmBAdw6CUTRdCzR88",
  "key16": "5Zy6mUvi3h17GVwEqE1YZxNa2G4LtynYodo6CaPKB1D9ozvHiGz4uKmcwbPdH7xhYar7ihfBxonZ1ykdRsa5LZhg",
  "key17": "4tzwPFtSZjs6F5KzeHL7BfERox3K58gJCxJMDRoHcG4TUXJqaFaPKrAUfrN3jxA6wq8hc77gSy7EgREk93uPDBUz",
  "key18": "4WCzVnvmMLHPcqYn1hZYqBpzSqJt2nYh1sVcnxpRTqHDc1VSqezaTPhUn6hiZURpBEtTT5qqc7oStsV37571m7RU",
  "key19": "61MCs7FLAXAZ5cZ3Mxgwq8JpwGAnA5sYexDZgU41wAvfisap4pJzj84gKUcNJR6PcbcFYn2TzY9SQbDfeokNGWFu",
  "key20": "5cT3pqk8GjjcSBo96H7HiYw66bcqNXEuTPQS4WdQw4E92csbUrRNCoWh7wxnbUQb9ouEvw7fymSr6yfMKZffVmUJ",
  "key21": "3gPAmX5X9HzfCNmCJmswWHZg1Tbofyiojw3zPfK5CH6bY72VxqMy2ht9QjeMtbMcVgKZC2nENf1AjpGEx4ydm87D",
  "key22": "4BMtzJdVNLuxY7k8M2jhAkBmksb2yDi3E2VhYvNyDGCh9vFsZGF9oEV4Jx62QZwivYB1bVcb1BwsHKDGTxMq5VLk",
  "key23": "4ztkGXrGibeAeKmuXRWesUSHfaqUoudkX8QLCdZeAEmRKxpCtP15TmszhbdaqyoDt641PqQhsGqKRQ3kLpn6ZyWq",
  "key24": "zeGsoZhfJGpVjSes7qTGKjGydYnzon76yqoFc7UXSrnu28L8eFMDuk6CwF3YDTM2yoA3WJsAxFGex7MbuZ1i8YF",
  "key25": "4qUKYXvSyJrCurRQySbUF5qwumsHF7NDyuf8ZCvUW1Ri7rLz1d8P5vYq1DazaRUyWpjZWHACjV58oi1wZMyvZ3Mv",
  "key26": "CN6QrQocAGLg5ri6LdityghGNVf9tdLBeqJUmMUptSHrvK8uG5zsQpphiDVoowDvG129JyDV9tQ65jgncyrVFaG",
  "key27": "3ShdGdkJt86NcaFvt9vWLGtbaS1tQCpkRcwdjc6pzVkZL8Zpy3wKb78gy6refb8meh5rpkvYXmB1r4iQpa3FK523",
  "key28": "3cyRccJprswJBjikV3cPXccNSt7FH5FXJz1p7gYdkAiyxp8akQ9uxLVZMx9fuztxCU2Hyta3x3mmyvoEbSqv6GrH",
  "key29": "3gNE3qqNbY9j8BB9UHTcY6tXbwUSmysMLYFeDSVZwv4CwKviXUHSQy1YDZN3vDCKBUrfgD2BpgkbZvv4vf88NGZG",
  "key30": "58Z3J96ykF3XWg374WBKyLWT3fY3a6G15uHJnTqgaNzq71AK3zSaVeNJ5yyY4iBHuxTdURKwrsdRXnt3u9uiR6aT",
  "key31": "E1eDMijzL6wPwS9WA5myKgig9KBZAvLTT6fepnKewugJqTvLPpxQrezWGJZztwhbQCzNxBYrKUhpB4HxLyf7vHH",
  "key32": "wp2iiGzRFNcALLdokmWSKxHNZLmTkf55ePMETgbkSPszXR1CTSXGudNhQ7uoTKKC2yyihNBzoEV1zfUBTex3vWZ",
  "key33": "3mBSoPsxnyywkpeU3jjWchjf6ziiEAE3NrC78G4gvr9ngDiQkQBrdMjTcgg3byKh4YpTRkDoXPLXKE9azBuShj9n",
  "key34": "5Cypr97haKMieq6NjVosas5BwCw2sVFg8NrmrTyPji44f7Ehhrfs182QraDHKLujCqm46izDu2mUUk1mo2ZDNP1d",
  "key35": "N23zY8jt9oeh7E6PCQ3E1KQw1HLkKsK2F16yJchraoLcXQkFcqj96wnGJWWyb6Ao95csbCqZxekA4w4KRX8ot14",
  "key36": "3zoEAbwXkKUSw7uYChAc7HNt3NBBzMcX55KTWMqHHxF5VFYAy1ih8HQ8V4L1NxhX1UTEcYnvPvYAVn9p62D1NcVo"
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
