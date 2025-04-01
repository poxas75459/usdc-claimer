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
    "2xeP3NVf2q61xS4X5R7uuLtQwLR1o1eRnDpkuWTd2UwiqVnidJUU9Nb6b4wj8Wiz5VaQCjdxf1Fk7DdSoQw5DZGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DQxA421DP7aY4VgpEja3tsUzKCyDvGi38oo268aADRdCUYBetQuWcqAdwb3AGbYxcyriuATrL1AFWkz59CHLToX",
  "key1": "31U1tqUN3rB3kJ4GUyJuqB3ZAPVUX1QB3WP2kLaF7ZnimHE1dYupN7cCM4uVs3qcCrUveLru6e8AmotC4TMByGxH",
  "key2": "2p18EQcZZGQDubDhR65NF4UgbrKAieBS3d6y9tHeN58ivVnKPqpZ7bx6bx9ryLJQnQJB3SX2KFYcAHWACaXe7qcC",
  "key3": "WTZx1ZHaDNCbK1tnZ9gcnYPToGSQccmKXXyWyo6xGSEVApVUSZhdrPJhcffTM5k3CsFH1gpgryMr8Xyz8szScDg",
  "key4": "2HygEF3rDvp7CSFgqvWrDXD4xMVzP8FjcqQQRjZY6Psc6U573e8aXbXdvoomu546Ks9qrgtmBKcg5Ras18DU7xN8",
  "key5": "4doKiMdvWE1mNs1wRhpJAfXp3bRMfjWgiidBCbwNdjBQ4m8xYRFF2BMApmdyA43Y7sfiMjvNSy3BrNSL6JvWeMC9",
  "key6": "E1KruWwp6Tipb2wmHPuBU35okKUojtPHs94BPhaEs5Rk44sXQmefS8KwWXkwPLeUx8yRpEYXwnrMSNTV5esdNMt",
  "key7": "Qg53oamS57npxzwnWZtYSKzw43sxFAn4LXQSBr3KV6FPB3eqRW6U5hJUdCC8vSCP9eqeRYPKoye6Gk1jLUMWTfo",
  "key8": "4NKPHSgXppSdGR3boFL88Y4CKqydtWtcfCWv94wTNTr6RQt2pZP6riZDruAJFUMfAuxuppZhoa9ngrAC9r5MhoV1",
  "key9": "2p5D8J7AgHhytrByPhKw1yYjWXP9eJYzS2c76gj74t4re4jdcWJDktsMQrQc9mXrMo6ZtTvdNGAEr7Euaudh3nk4",
  "key10": "3UEXqciMGBLyCTL2E5jrvKmXMvJLaY6YdZpDeUD9WowfSKF8emSr723q6Q61iVPvRViFZizg4JVS61zAZqeCThLr",
  "key11": "ymS1QyRK6nhBpQ5gMT5rDeRNfCu43G6KqrjsskACjDyZpscju7fFWE3qUUA4cXTaea3zov3mwJ2eNnKKHXNefk6",
  "key12": "35tV3TE332L4b44dSDEGhSSrFzejHmC5a4SkE1WfnePYo3MY3qnYQCmCi8Boi4zCvUKS9Xfk6qP2ab4CSYx4XP2J",
  "key13": "257CRpnNGL9hjj4ppVb8Fc8DDoF2vipgEzQa7UkBC1SdVwipa3MDpJnJBVDMrGc1DSwY7DwE8VX5bdygXsaYPnMf",
  "key14": "dy2iWXpAu4ViVaxCshvHTzmP5drShGkU9DFc8No3XYbQLc3SRNQcRQ9rh1WvGveuj7FFMhaYL1SkbQFnZnkBhv9",
  "key15": "2uAQAQf2c2cZnS6dveqCC8C8sgbkVMx3DqQSxLbU6CrZNTNkYnKg5RuteQiLfhtCNneNPdRZhGdEw5rWTKba2TzJ",
  "key16": "4n2EjkhjMUDN9VbyPmVbNNoPZAFTAnaj3q4QBhiwA7xsN524ndoJnuAp8uqBE5RfqToSDezTj37MUoGGBJczw7oZ",
  "key17": "41u6ioo11H7N3S5XBe3SoYk43te2uHH9eJArEE53NmujSwVchNf4A6br9mD5xFLze42pttV9ByvGWrjFzzEBrJpT",
  "key18": "5L3rdiHqU3tVHHjrsRDSoTYZ3dNYSrYGtJNZGUWcRnsZLymQ9bTqjvgAUZM5tuKPMh2BcCX3AkAbcc9B6Sd2uAYz",
  "key19": "5bXnoYczUm5GWpXchCPcrjAE3TB5dbAoQwYVXnrteDvKoswZH7pX6f3nHQfobkTxwLnFEBhAhkZBzwQKctcGRiJu",
  "key20": "3oM8BitfkvAhthcKNK66hBRU4EhXgGcmxMd1Y9srWjHHM14zaUjHRpkxrreXmjAJMjdRVbFr8tdNECgAFAPfwLXr",
  "key21": "2UcjxSuUoeqFtLLASPSa2CM9uGM3Nv9eFQmgQaP1DkYX1pdS7rcLtTpqLUaf4vGthYdAcGxBQb56QLxmPtgMqbDj",
  "key22": "4guoueS9VytyeABQYss6xZTxL7i8kD7AzVx1AvhhJUobGwmzJXnTFzCsGBzkJvi6TXMimga3ADpUmcX6x4Naxzwo",
  "key23": "3WSP4AsgKdmXAMdtJxUauppGbFNH95sGCNhcX4NqiZeoNKdEVrVkQmRJs2QCd41df4BHo339qwq5i9ZLNAbs6DX1",
  "key24": "3VsZwFacnPAVgdDbu6KqFWWY7uXhHueWgWg1JbgSxVdGh5RRpkd6iKTMvRqh5hFKVXeBipSvCQqQE7TDFFLFsTW7",
  "key25": "5eFQ4abUs7FQg1Ro8FCd7dwEtaUuACxFfWwh27oVLBnUfC5JHuQjHPP5H6KaCvprFSmmbv6Tsy7FvFoqTcqeqtqV",
  "key26": "2KkaDSiRBcD2344uEWXNBhnntXFfo6NT1C1CWyB5nDhcLwSEfkDntjScadCqZtk2tXeuzzcS8KRDNr6pmCWpRB6x",
  "key27": "4JJ6WN7SG3w6cwSbvKHkxnUxFFy5i9dysEG17SfX3Fzhap81FuZjmWjCE3N54ow9bqCDTGHviZrKmgh7p1o6naZM",
  "key28": "5Y9v7w9xoVgueSHymtcp1xYLak3tGRTNrWHGuWkJ71FrNCZS4jaFVTtTTyyEwogEw7q9SzagrwY6TTKBRfXyeNwA",
  "key29": "4QQvuFTBxRMPAUTbivqdySptb8uREuNfQHocnhbwddPTz8pXC61Zaxh2vFTyEFfGQNALRN8P1NLGBDfV4zRtYBB",
  "key30": "3FHuiRvHe7Tt5ZUKv1ECYeToFJEiKVBpwFeLzHEKZooCcfwcLymLdZw4yfJqCGKC5trpcZjzzi5jCpBMvbGod8WF",
  "key31": "57wiEtwwSY99nf8m18Bva57QH4CVrjD6mHNam4ExRjpw8uTRU5rgoSphUmueRuLBcbi4PReiaoV9tfb15hUzV5kZ",
  "key32": "4RrcHU96U5UFudJNgmoU5mdE4k5Y3VLLR4yG6LmQqLvkP97uGqRWmDjBret1dhcEKBGqqtxb6ycQi9VwSowzUJkM",
  "key33": "2i27A1ZV5oEfaocBgLHaQVx8znp52yEGZnFvKH8PhkmwokLKVTCz3jAtcxMXxjAur93gtiec3ZMfpGWNxpdPBBnQ",
  "key34": "51Mm39namRCHuahwLgPCs6sprhreWmQmEuBCSFCKQGKVoarXLgXRCnVtyjfdAhTpN6itWHzcZ1RmnMMa1jXGt49s",
  "key35": "5pLjMnZr3Feun9hQHWpr7HkGRcdsQDkuyLy64fCzaBaU4YYNnHYEbF9UrXgqEUQNbkKyL7GZkJPd9fh4p9sEJbqB",
  "key36": "4oVEQ7cz9zDhPPKs3ncDmfsovmufTy3aBhkg11WUmb9VcD7aurhYj9zTLRBj3k6VnZjk4fxAommrFKiXkqcztry5",
  "key37": "4M2DZg1vzZ2QWeLaGKJHt2sz2ETJrGLi8zRoP1GyfceebQ5pYwbSJUgc4LLLT5uwKvFCvj9BsBQFYwjdZGCucBws",
  "key38": "4yuHquTNfE9hhgzDQPaMwGCkT5jukW2qg4X8kTyy1SyPZBNJwWpdy8nWsc5rmMfSor2pP6hC5TuTAy3NVYdqTzaz",
  "key39": "3E3R616JFJHwzYGSoZkhvQapzC6kE3xufRNREBcp8NbjPtYE27U9c34vjxUPfesebUhiKtT8BAJR1aHp5TmDU9GX",
  "key40": "2Umv4GH8jxgovfRVrLMz9eEu3WoToLwnopGmqfV6aU57MCffVthumq8syqUAGAZ5krwC54TRFDdToi59Q1xtYnc",
  "key41": "2rg5bQoGeu4JES9arVUjiocY5aud3Z1bFb5kgSUXi9qtrWony4U5XHiMVvqTLoxy4WQK8UnRFTV5eh3tThik7gt2",
  "key42": "5PNbZ5AUn8gd9puq2aug5kCeemJWBacVqKQJxq8zB3CT2tpHuZJFkK6P7xa9p79yXf6Kx7XPw22o1UH4vdcUEqzJ",
  "key43": "fbBbDdtAK6TdNXZkjjArcDtwaoVn3urgm727pcxuUTRbpJ5wro4ibMP7k47gWg5VaUAjmJJgiYAtjtGFJ6rBp5K",
  "key44": "4JSzU8HoMtvfN2HY9JrVcLt1AHVt4bnvWwirpr8hWqyamuLHT4t3VGDVzPVhVvHqAiEBrKHXoJVNotibhMJYUPtd",
  "key45": "N4vperSgxE2BuW4hWfQc6jWBs3GhzZniYsyismTU89fKeje66LdSQK5UojgnJGax31EXUMg8ADeQRR9zg2Sm9jc"
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
