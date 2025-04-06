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
    "55hgWNaNebvgcKqyRjaU5K6rEuJYEM8AZgpGUiUy4sFnRqkEZfG7cpBKeo5DK2FigpBrk85Yr8rppXJmPLNe6Htq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TBjURe8qDTheWbRxRpz3m5ydD14CBrhosrMnbu9Snh4a5SE27rkGFsrHm7ukKjU5oP5qvdRHxC9FL9BEfPzbbFm",
  "key1": "4arHQdWWQUUuQpkntBaEZMh58i24LPzi1NCZY7LTQ53dkC1f1BuUrFrhDNWNztTCyp3EiQQAmMesAx8nio46PaTt",
  "key2": "4JLvtsW9ivfN3yhfxUbEiq2TxNLi67n5ntP18dgX9sXjuo4MysJwpXeWHk7tYxC9JyPJSEdDb31em8sbnAXSyoMc",
  "key3": "5Rnm2Y7XW4vKGWNAHdesf3nSPpngwpJuBXzUebdJvTEvTSbtrnfQMSnbFvyuAcjwXuhYoM5zknyj1bvPWegSt6Qz",
  "key4": "3TgpZmwKrwFbMQR2KfVFPBx36CqvByH5cwiTYDbgUD2Sb7kUR68GMxUaj8gNkUHyK2HaZYjGBpzrbLuh7sHXba6M",
  "key5": "3F28rp3Zr5Q8hpM9tR8SbsnLY1tjYn9X8h6SkUSJZr4cSQgFiHgsm1TWyjcTgT5TWZjU6dvoRZ1GKZmMP1ZRgJj4",
  "key6": "4b82WrgW8rkvx3AsGxKvByN9AAoqYy1ignBvNkLzBjtSNpRLa16GncKkZBFtgNXwTPtG2iZPeZ1jbdtvvZVK8qx2",
  "key7": "34YAiDexbLk2jXct2Wwj5YQGmPnZFycYA9LdG3rqeT8nZyLbLcLPeeCkGPcEfKiu5oqKuzVM22dkgeV28VopQjLy",
  "key8": "5vS5qMLKDaC4EqjcgV9q1BXyyEiz6qitRLNGGQRnkcLjQHuMYPHnYKH6ASwnkAmW7BH1nFgQxwCksud43DGHv7Dn",
  "key9": "2u6teUGv1brjfbNDD4i1a89zPeroa6EzKfoJueeZZpvw5HwHjFU7iyiUKGc8ZEVh2jmEbM8j5UuC5iiakQbxAR2",
  "key10": "64oGdZ4rSgQLSox96D5Mi6CVtMRa9TMPhEbCR2u8UjLNpQXBkz5rbya5x222hFfKVnoGsMdergwd5crqhG3QTwco",
  "key11": "4RJC39gSr26z2jXwG9NP9WZi77tLT5QAFDiACnfS8M1p14voVtR51DjFJPm5CJrU8dNrWP33vJDakMqR2pSzoisb",
  "key12": "5sz9dtHqrX8UWxHBBwUhTQxP7PDoutydDULo3qpQ2R8dij4y3z7MF2CCuRyzyZwjSZLECQFkJohynvt2LWijtiFP",
  "key13": "4qaX9J5gqBarpjzZuos6cXKuMAp67446YZAG3PfkNxsNoRCHKGvAGEB1c4Ed3ieLNdZPSeQNc27kpxqpkfiBp4BM",
  "key14": "45YgBKXtSs3HtfpoM4MaPHZARRj3SmzfbtXi9DEiY7mWavpfEXz9gtBY91oF31TsrwZSQKqo9tyhWAQqNYecmyiB",
  "key15": "3pbjhA9NYe9rK4Aq6ZNVGQJ4nWNRYRPFdTg2UThezmGfiEBSdyhBGxR8oCN2rH5MfCBHDSuRWT2gRVikNXBJJgrk",
  "key16": "2t3dNagQ6Sfh7zLEYRpMYnsgFUv1dpTPmUDxBaS8g5qv2LKqHL85n4g2Rz4eJdahSGmaTMFVaQpj4nG5Pw5pHqfs",
  "key17": "28qsCwRKnD6na5R3QZdRemDHZYeNGvu8VyQrtyGEkbqzQJJMa6hy1j27YfUtczfJ4WWFLYeGf7DiiCdN7iA33EUJ",
  "key18": "4nsmHQRqds1cnJkajPqbaBhWCcu8t67E2631w3CPYwopDkdEutoVXBU68KJ491YzTbjgZVfa8sMGk5r6VUWKNS6t",
  "key19": "4Fcp4qp9iTm2spsKteTX9gEqA7ec9tHgcDyiiQBpg1EG2N3mZLim8tJCB784g6EVjkopn4Jvd2nhkeJKV4CjGuc6",
  "key20": "BqcjNDHo3aXKfaQ3G9QaXNFrWzE9ydaCKd1jccCB99dpvgCmR8StH7VYgn84BG5oEvhYP1hZJgEG13sexsj1HS1",
  "key21": "4HUWa39SX724DvkNAo4SiN2Ah2X4YktjSKRSgfk7KB3SQ57j1k9SKiRLaEAANbuiLzBFaQAurrFY7Arnr6RgNX4K",
  "key22": "3Mc6o9wtYDiCJJKGcSGQ1DwXBVGK7W9hCQuEqVhJq8eTgRf5bDvT6o4HKxDHWM9gia6w46gco7PUnHNbccdCr1go",
  "key23": "3rVaA5TEwFnues78v9aAeAKQ9yrLqXuixb3poUMzXJbJNyUjgXuPAqhJxFCgkRtCjeW1s1YEDGoVLwkxVKpLJC5f",
  "key24": "394JAbMFZLMH4am2NpqioBBgyfd555uBYTWzrHTah6in22HYDUeS9Cxh2BxvXkNSdnGoNN8zHyCfs3Sp7LzBs1AL",
  "key25": "wd7264VU79dcErtzwTJQAnokfc86CsPyvaXoqPxoHimns4EGBy5shUNun6VmnhndtKNAPn1Zi29E7tZsENt2dwA",
  "key26": "4QP9z76vEZVVRWz2V9rVmsokMqgY5Uudu9xLPjDXfkgfmx94hWLBymzPz6YJKGgkBBGhfYvTUpQfvuvbayeqjfv5",
  "key27": "q5fVrwMvAu5YHpHXYNQ367uyAb6QNazWRaz41kB3fS5wkkprnbNEFcjdYQAViAxxL3ionsBXeqYq937W8uJ4XeC",
  "key28": "5DKTZZ2Y5c9T2UZaGNDHNZFaRApt2uxMcmEqCuxEEanFJNc1NuGpp7yWYdRMTRkjvdiDSYsq7UAAQBgXD9aAbQ8r",
  "key29": "2JytDy8VhBSxDYNjp2f36E2Zk3zhaehHuBJfBsKFUFQ4cZWHso2R7KrFYFveBeTqnEDTnKn8QW5LzSBrswCohHQT",
  "key30": "4Sdt6g9ozNk4rbEYKxSuVgPdwkPTNFxNW5zfBtt94SU8qKdKZU8YNNiK5BWFM7Z8qAZWsjSbin9fXDSEmoSeKdUS",
  "key31": "wfUURKZodpg2qdC6TmhWS2davTGh8os6BErLMKXbPJV53VokdMq1YoWq8FS6LPG9ANjmbRTJ8Z5VhAEafZuPtzU"
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
