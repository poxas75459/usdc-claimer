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
    "4zB1KeJCj6y2QDMPKHNv4hgFUVGCwEsQzUrAs7wZUcD7HR4AnJQZv6hbKnq4p9AVz5ZZXkqkZmY4zXaAp1Jghp84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTfhmZ546on9Q95fKn8ka83nbrxWR2ozbfgAFVhK6QKUfXK8UJgiNcaqQrWbUJ6QLnEhdX45qZBDCAynuS7tHnn",
  "key1": "2E9P5qgqG1JwxP4Bc2FPxnhb3RnutkAjR7NbBB4tpd3xuMvNeYG8LHmNDfFFs1yRtVRN81YfNAbc87uwwBYeNzyj",
  "key2": "4m1ZN4nRAWMG8pdJSdmkqc4fZJp3yr43WAfKveohqPCxzV8EWP1bh4hhRDpzckHzT9KquRzS3UenijNRJDxLNWvW",
  "key3": "2Yc6i5Rp1H2f1oAqvEXEeoyCnqotFMYaP738zJqSKKg7nkwjnvZLRqeKkcBqJ1U73bGzFb8jAF32q93uqhXSHPD4",
  "key4": "5ZQBdHMVUeT2GL2sbsh9upH5kXhb35QnnjAFEviCkTzNB3zGkAdaTnqTUxaqsoiU45hxEbs9xvpStQYgGAVubmoa",
  "key5": "2m8YqiDwhS76hTEioEqnmw3tUB34X4aFP47Qmn5BnZm8Epbmepvf3m4JKTQ5gyJZcnpLZJLkgbQi4FqmQekM9XcY",
  "key6": "fpcYLwVziRwck3G12JKyzwzkWnSkanWcDLNmGT3abG3G4Yuwn9CrWu1N6dv9E59iB62qTSg2eC5rAEuEV8spNDY",
  "key7": "iqVmk4KncG1aCEKfQq4CUekvH322KQvEGDYk5u5P4YabhvMxm1rWembMxFKoXcTsft1hLRWcUqLdMnu3FoeZ62q",
  "key8": "4TfrcFfbndN2m7uzpGMD6HZcAcB1WBToX2Ewnp6kXBidiAaexxvnFjNuqfEugbAznaSuuEG1JHb3Y6gX5QczRvTM",
  "key9": "4HauW5uM2ii2428HFTBuv3tMbviw7QYB86nibtP8voQ1pYsyd4ycEEszGyCRxGY8T5BpXTmYPBTyHJXCPTRqiyg5",
  "key10": "2PxmhtpjdQyAtWHFgwgGT63PZEvdnjHRq3dXNLQkdeGSfe42aeiayxfVAuRG443qNbFBw3mqThyqjmFUsTjQRw4m",
  "key11": "5mnsqZz3qpawjJ5nEPX2RGRSXgggtiRXbRreN5mrrB8sXWjaz3RYZ8BXSuDoH7EzffDeEHmtZtNjRPNcdDVrCtog",
  "key12": "5L68JgwzGENz6tQus4gBAvSJBzAPikdeu83NzME7bnmQzzBqWcAv7NQf3RuACuQF4AdDpezH4oXYcQp25VuokZaV",
  "key13": "5VjtwS285cy3G4dvjaWrtKHLW9NCrHMsk8fvmEEPceqdpHz7e6gz4Q2xcNgctotGfTfZnvHhQua7Mhb7tRWMKg2u",
  "key14": "FqyFQWR2pqSGyzPQ4S1ZfgjPxHGDb1nUDWWRbAFhFFpTRqEiSqGR7CTur5yEGn1fGKXEisy5S8hHkUhYRytEt74",
  "key15": "4oCypWe8SNtVANqLkBJ4qMrHdrKbTKyAFD9WJo1zmPZRYcDghe9NbvhP6ZwceUqDAZfmDLFEewCWBrCykwNSHQBX",
  "key16": "3hnGSshB1GpH1riBg4foPXKHatfrKeosKndvqkQDZnkXymGqaUN9TTCfgCNfawrwBMbDP4AgQZcUFz6zrWTNDQ2Q",
  "key17": "bxQF6xnskSWfcGjerQxTDp9rqv2WyrtKo8i4FnZ1m9kaAYSsBJmQ8FXMS14AYAtJVkAAKvmtrx4opGJ3aQZ93AR",
  "key18": "q9HcYTpbmgQPducm9wCZiFpiiyFoPW8A4z8tDrDy4E1hdwgFA6PkcmZDKB5agSmbwgXpPxkyvxCEeGHKZ94UaMJ",
  "key19": "2pniDQJ84EEtjRv5pYqLvY7kep1u2Mptb9MhGodc34pNXVhSeNZm1QpKvAHw4vrvYiRQ8pid5p1KsHjmfad68Ps1",
  "key20": "5keSAWcXFaVm6qgxsiK6w9ZvH1MZhfkr89KLYtK4FwqDjQtfmb9qBFGzM5iKEJBpcvtr1gmgjPAhyfZZ9ztrXjKS",
  "key21": "49neqCKGuqSDff3E2VLdX6tPfkgsAhdVHyBDF8QovfbhEscEzV2uaH44tHgM1DWfxXLV4qdZYF8zxnwiiLR13KCk",
  "key22": "442Va3Wb5s9BUsk7WZQRZzFqkwYrr7wCoFF9Q4Bu8tUADQW8QzotMUY87wVT4Gm13unyxcJaPL39ud8btAWt6qUb",
  "key23": "QNXjvNgG8U1soXQoa4b5tiHpfjX9mzNHmNY437xw4evpkhPm8CLyfmvQj8bK2HEaVAWkq7JjFFRdRmfq1yToxZ1",
  "key24": "2jb3Fb5CWy9hLGGEq1wZxE6bni9kv8AYhGspA3dTE6qN83dE1G3A1UbkwPQv4mHTdXaC2cncUS65QsyucsTuirjm",
  "key25": "aPdbHxN77TpozDoPoKBM7pz7vd9wBTakpMCudmhRqmUeoMnSnz2Sjg6EvGVJZea5hoKNtDjfV6pQN12kY2zZy7V",
  "key26": "hHw5nHu6wWkVxeLiUw8H2ZiDePVcTCDbPGtfV6txk9gUDtD18id6y1hh7Nmzg7PmGhjAubTTjogNkhG4iCV4RYP",
  "key27": "5xpMZBtBHdnFWUSnuGJiSTdGRZsH1LKoe6Lz9KwYq8VL5QssdLPCFwQR6bNRok3LSD3nSKe98CEhSMCszWJeyN2T",
  "key28": "22cTH1j2fwxdhfmFxPSTn5AMJczyXGW42FEbAcqWFZT4TzDsLab4wAAcbVoWhwcEbYmwFfQjGQGugmNBeXZB7zXR",
  "key29": "26VE7XgMQyfZvtRifyouA7qKTYNTiyvtMcLcLEzxZwgeqcVaFV9FhFCZ39MvoyUkKohUkNYod16xiSXHWSu7y2Vc",
  "key30": "5gFaQ2h93epFXVhG1KFyTZ5WVPGt6GdbWzYGZgdjaPLWo88u3cit46iqavURy9KBEjHhLFg7WVDu58MnMWE7hTa3",
  "key31": "2Kibf3bLMCqEUconaVhyXMdfY6cJkCK29ptC7yzK3KLtXXiq8sA6VKskPyHyJ9C5hpGYwg7QVdfuzkidHCC4vYLk",
  "key32": "3vk4eXJKzZzJ8cELjXSCwh5GhQw5bSyRmZMv6UP7cXzPSdcbAwM9pB1CsWs4ng7HetxcoyHuSmmzXaLxTZ5QAUbp",
  "key33": "47XUFQWsDvRmj6FeU8FMdFaJnLmGN6Mmm6fLJbwbihQcQiZ8SbgwRs16qAxvMXbpirm1JVdYwJBsLLoEXsLyyaes"
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
