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
    "2V3HMZKsCCFnKt1fHri2rkjY1Lr9gffj3LZcFsqF2PdrdN1GGovQ3Pkxjbdk8zymouaLoKhChSJwTaUNs2EFUet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25F2jbxba44PWJqTBxWihqHVxn4qVW8oEnZRWpYQN73TTtb8yJb5KeGcJGMRUpddGK28W457x2uyGfhmDrbfUXCB",
  "key1": "5rXWTjoFzRVKnPWU2JUE1rXLRRcm12TkXGz2zfq8AUaQ4Fe312BTWjYV2u75UQkV8TVWgVBnFA8hdTemp6PJhFMB",
  "key2": "4SZ3WdgXzye3j43qsFRFvWniB7t29XPdLu5WYkW2stjxiub4PNVUSZDJE62NyVyXcysqNkTWkULTWqYkvCzg6igF",
  "key3": "94EgThLScXM1LNkxnqr9n3BCbVhSnesB3u9fAvAiRxeo6AF9qobErpdEhw9Ujnfopd6shdK4sx9a4wezup24vnx",
  "key4": "2T3V3FXa1424xgq87RvgtsmdDYWHdKPgcKfe8mwGfNF7s3qhWtPiJc3ScSFdcuznZSSLcNJpGPBhfTqcf7UgaSZv",
  "key5": "3TfBGsYstWMj4gLtoGj7Mf1gq8DuSHgLsFdgQik65rvifebZWLPeb7MJMyHqTbC34Sx7xyQUA5d66ayHGaBHbgCa",
  "key6": "4SiLDAJWVeGTtW343ftesNKiYCAYtEWCH8EPW7jg3jExW28EqLmN9MjB1sJiWePa7wZAfVpzugnFcKCqoCUMAxwQ",
  "key7": "5vv6NiYkpHTnDDtYH8JUhhPMckGvzg7jqwp7z8csSCMquQtV6T8qfMMobzRBQe4y2H4GkE3sPMc5djtLvhWAagDi",
  "key8": "3qqe8UKhA616mWgrz3TXGc17vwyLYyXebyBmdiD2TgLctie9aoNha4ZzX4XQSthj3wji3xmidpAxrzpwJR6qQJ67",
  "key9": "5LVA3P3FqwgXhck98oxtStfmK5L5Fd3hhk9FttxaTB6XARacrkC4bv8mXHrgLbECECg65GM1uniL3gyATLp3z1dK",
  "key10": "4NTU9xRU6qcSbDR87xGMb6UzrB8q23J2qHKZCp7E6cv4hFLJRA1ti5GXKxAVkKA48wY6vaKEXyMHiMvtzAp5Kgf1",
  "key11": "2tcUbVvdhxqghPFky5hsGQHAsNhMYxVADKzVymfRCDuBX1P66Xg49FG1E5Yk3boFBJr7wPawrKnBn2VMmSFJurFR",
  "key12": "2jyVauaGvrqwLt6c4DQdwM6VprAvWRUwW8B2qKpq4YVZabNsnHYMT1XHXj28K8eyHr7URLopMgvSf5z9mxwDrz6Q",
  "key13": "5ChTD3mnkKZk3ChP2GHjPegQMN3iGHUEFdU4UXajc7ptywsA2ybaSmyMsE3sBiX9NpVZLuwBDKSzD3LyM7DBfs1W",
  "key14": "3wVfdow2xPCTmkWtzP2LCmrjYYqrC6VWpbBAM2hw3D6nyfPhbYvSLB27f77KCSGMKDexRzhWJTZSVeiT5P54YYn8",
  "key15": "56zeiMzmyLTXnqm8M2SYwrYiW9DqdoG5PrmhXn74TZLq61fM3eLmrBXYBxyqvtLcShEH6pcdvikA6SMRhmj2y4aq",
  "key16": "Vtmhgb6DJj1gY8cm7J6SSZKn1G8H5kHgXb1xpzd9eBnZ6kPapWowiQKbn73gpasSrdH5yEdMiweKc4KPaB73x4n",
  "key17": "M26xPMUzYsRbYEe5uADShYWSrhELfnjTxjkQcnZBNrP4XfWZ4SrKFNx8Cjo3i69sqBX2cuqRPxmXdJMWYWq9MEU",
  "key18": "53b1zL6BTjHvpL9hPNQAyF69HFPW8aMiUsV8JmCygk3wTKtk5r1WZz1xqUgeyyN34CNmxnSYH9mBBkvurcfvBEma",
  "key19": "5HEntcYacGRmvpQCWVQ7pXQxyCCAtmXy6aqaozJ63a4eMFxx2eadJiRT8wmveBQMhE5astWqV5Meo56St1tTdaTQ",
  "key20": "44QQWNvJrGC2PtVnpYXTWrj5oVAX6c75cbLDVSMsMKEeK2qhvYJfWAmkKL16onjagDDfEqXzw3oa73CZMDX7iJTW",
  "key21": "2ykzAWcCz9o8WfWuL8aMR4qcqUncw1XpmKLdZMn5JjkJE53NPuqQ92YRiVoCLTkdJTyqEiLv8LjZKZGUdHKBAqat",
  "key22": "3W4Pix2p1Cv2ZQdhVL66eqHh7goQLefswuSYd8YhmBT5Thy36NPNsfrbsRyNFebSAZxrqgeH8ZvVMtVyWJF9ypTH",
  "key23": "5MMoXhRXfGXgt3yvJv6dzz26DeDoJEsdXWCDPsKJT8i5STdRLi3aobb69sGLCMyxT7Ap9BCtS93Ybxe3Q7boGk7A",
  "key24": "2R7NztciMWRLoxWce6CFinFq3mtCdUUQeUy79chtfwEFoxo1cNpecfamHDWBs23YmbDvqzWk3ENErijEZyRWf4Y2",
  "key25": "2618hQMB82mfMymipJuB4Z2FRHjLNx7hizeMgRnrUFcRA9ZEH788Ucx8EfvT5bhwLWKh3WcVWnzsWUbhFVXTm4pP",
  "key26": "5q1bmbj1Q8zFaSRVNyRJC7cXNCgN3krjwF8AZEKw1p3AqK84EZx2PvdPpRxHgZcGBfN8qzsfFChN39HNycCpZME5",
  "key27": "PAXpRrqNkBGuhtn3LprPDHLu69eFxtBjRZDwW85EPiQxdiHP8ovfYFHQqFqNoFhbKXoTMnrU8sj25YpBZ6wW7Gc",
  "key28": "sdfYeAnJK2hNWCNL1E7QnWycsdeFHCDUTjKStaSsd5HvLWGhmitsEQfyHpEagmRc4VvMzuYNhswBeHk79VCYg3P"
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
