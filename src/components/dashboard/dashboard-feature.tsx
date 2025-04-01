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
    "4gDevVYWQv169rZ759GoJL2cpQRFyV78QcM5B2doREs4jvdWJALXYERtt5qhDuAXscZbdFVSTFAVBtEB3xxXwWiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iLpA4EGrhxuZ6GFsz6zewZm1HhG5GP7BYYtFPwbox49rdkWbwRsTUn2Yp8caTeNaoUJrscQz3imw5RzVYq76Zyy",
  "key1": "28L3mEP74YwtZHPXacmFTVoAzwrCzLr7U8A2RMC4tPWaDFUbwEw1aXaUvh6ZcFHdtKoYtG4k3dmWEubRheE6xL72",
  "key2": "3Mc4zPCsUCNN84S7hvsSYaucGbTcsPhqcQnvrMuoLEwvxFpNRLf4m1XNf8QWH3AwRQBg91AYbgtBoQJofvSWHzsL",
  "key3": "2j6ZRN3uj2Dt9peLQPFscu5QhQeZSfQTG38Kn4QihGMrFubPX7iUb4VyHQmmrRZUiLWXJ3kUtpJpX8UjZoPcy4PK",
  "key4": "BP7WmVvRQQ1syY6QsGGqtCVvvJJxLikpNJGjdQVktUiV9ECW1pZW2JTNiXrRdaAQdXNnHd8b2ojAHWZtVSzYUMn",
  "key5": "5iTfg3HMokhK7NuMPWHygUBbtJ82vziSVLcYVYNrVGW1PjShhEd8HjYB6tq4PMJNQ9CJz239tG4rJ6zjHpKHq595",
  "key6": "2bNVrEF7S9RvHKF1hAf6kgPgqNkWuDJfuzGrip9zhKLmkRsBUSceKCjLjzFRp1hDpEWA4xnmAkhH8tZ3i45HQ7x5",
  "key7": "DSJLKef4MAhrdsKwaxyny1pLe9mQVefw9j3ReRWxQnAsA8cekaV9FNFhDB1G1daYqKgLvuugnikNLQGr6EypZRd",
  "key8": "3UCXEsipr58YCC7XzemhCpESpQHuri7YLvWPYTMaF1cGFgSuWBHYwVh7GdmNte3tmL9vMubXnBcF6ZmuAmGtnVi1",
  "key9": "52FuexU5wDFZFokForEqQ4czeEU7vt41kVchxxnXpNjcZfk7rQQrF3bHqDHH8dNjJA953kqWTmZLB8Cit8FfmJgP",
  "key10": "2yWeFdBYTg8mVSuJm3e9gBzHX9xVpfyb81ztuEShaiKHexMjAH7YLMdHQYsDDhnhbrnPicUTeHAYUkaJ2gmawbFP",
  "key11": "3gjVamMzXMwR4XUaCHygN5dHcyxsRxmjbZgMUnLBT7aYnAn43cDjWckNv8NfaDWNHaaEw1AoNPz4HdPECGuFQMRB",
  "key12": "5Wvu1FvhuKZ7FSLNFWhC1LmTrPQgdfWDxghNABgV5bnFHDEjCM53mtwdE5CehU6ccLY2po8EmUwWZwEbCRgMPAZy",
  "key13": "5jTNDNKgneqKTtLBp2ApwUHM42vR2FT6ewGKmavtf2sCaFLwgCCgBc6vxxvxuDxBJiGsATU9HTJVnFhhzNWoJ4HW",
  "key14": "3wuktrahpxSPVzixN6deWLStBUT8t7M1hybB8nUHCtMqsVfuavvubBirDdD2VrmyDUTzo57FKaNtLjp9D3JfMdwQ",
  "key15": "3vrAgPbDTy4P18QqaZqQvFjxt9HYyUSZ8PGAPy42j1mmUxYxsKs6CB1oJAPkpqLRS26khejTt3r354s73XyjdRuM",
  "key16": "43BjkCgkU6nWff2gGRYqJegBqa7NJZ9HGZXiGX9b7S5mWTix1dQgwdA9NBwys5e566J1PrHxLQdRrKTF7QzjumYp",
  "key17": "3QWxFNVxuK3i2xDHY3nxWCCnw7BndQRwUzRqwCfJ3hyHU1fK1JkeSaXQ9xc9SgykiyxxDWaN4Uxi6yJpDchg99jE",
  "key18": "5FMUYPhbci6hgH6Bru6PqHFtURc3uEZdPmrn122FvTsmEpRCpyXzTt7aQVKNDizjeEvSX3nLFEB7kw9RwLUPziZV",
  "key19": "4MY4FffBgevTjeZWapAXDfz6zr91RFNPwSS6XHANmsgDmrSLLPKLs8Ao8s2ZbebC23yFr1As2yKupPtQQSr2963A",
  "key20": "62PS9QevTMpgWQnQTqR4qS6Vc7NiGp5Q4YkkYn8fBwQeEn6QygTdHNWtk1M2UhAJUWzYbgRmUBzENDXhKMz3o2Gg",
  "key21": "538V4XKQBK4dwqzQk15ALNn4dJDyHxw2LQQhY7dqDeTMTUCoXBBJGXxXfZEXyDA3zMQTFsFEpqRRdfwzC6HNxrzc",
  "key22": "4AnTZ4toNCjHXHNFTdeJkCo1bTTxwmyJ23yrhtqW8TaqXMwdN4pTK3sbSxNVY74qfaZzhj3cP6E5nrhiMqKE4HAd",
  "key23": "4Pr78kZKSY6DJ7eisWwU6QvconvzGxYUY1CoTumvR9RC7fGnaZj8fMdqBVZrApi1F8FqWzTVmCgZC2NZNFdEFtze",
  "key24": "Ge8d8dd82WCpUBkKrq8K5A9xGzNtpSaM8B7pQpEBipvSp9BQpSgcCZFVR5NGLJTJMAJggjT6GTogqMP4FMNRa46",
  "key25": "3QLLPzPeaRn4AMwzCMh4jDaNGzsARiFa53NBv4t7Cj1YCdNekYn9Aj1zZq143CocV6GZtURXEPYLG13B9bWLxuCC",
  "key26": "3SyAaEPGvWMV7fy2oG1vfSfqexrzKzJ6a1ALB5kmv8CHmNiB1uYMUT6FBzBV6siHfzawFMQ4oQm6tiiLFuKkfZds",
  "key27": "3CkKJtojsDjEqaiYK6npb8bpg8raRDDHki8YGk1VFgQ7SQ7zQH5U3EPtyVsEge12jLVGVreUnQGqLQWwn8Hb2LST",
  "key28": "3NkX6B98J3GVCBquSH9ZnM6WY9GvspQzQNgyRPy2uV96mEXRjXY5DiN7Px9caz1SZUcTxTYSPm21jZp4LFpfXAs"
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
