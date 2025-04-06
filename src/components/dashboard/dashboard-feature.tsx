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
    "2MAtnuhP6oH8h32wYNuFnEYWjnHGxcEKQSvDxuBDK8ocEogog4fRN1yWEzGa2yd3tD1akopiaALKYSkc7kbHZ6oz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDVsa7k8So1AoBQxtehkbqjiyawLWmkB3YuT2EZptmb7SKBavrSBA18WiYqhcyEQzvtZyY4GeHeCSxCTv8gnk5u",
  "key1": "UfQdQGkJmXUJjxJMnx6LNxvBngQritjB7ZCDLpUHSqWo6m9N2qmnLJ9e6dPymmhroFGGAcSapYzybNgijzCddXd",
  "key2": "qVUtPaNJePEeTgXkL9W9rYWVRtthZLZTmd1BG5Qkue36AHkoMtCEgXJENoYWTYQ3nDbtT4hD5kPHWjGZPd4Lqzw",
  "key3": "2P8nxcHuBxeKKmsSWgCdf9b1G9HGW2fUHvQPk5w5ugSpuqnsfE6Z73dNrvMXCLAFNrztaeRk73a5SKH7aZT3kpQy",
  "key4": "4vJQjJ1qXUbEZysohS4KLDduMo32hVZAJ7G2UifdTsrs4WNwKfatDEx5mefsqgDNVnC19atgzSVBYZu1AsenDbYJ",
  "key5": "Jhutn6H8nuBZjkEDuffyUh1oz24ej9VMVWms3Kqqs12TjowU7wW6WeamVrHv34NZABueFKaoKejUeHY8xLfDfaT",
  "key6": "4FeKLTDRrRrNYS5nyhnGi9mBFUTRH18YRJaSbtP3TA3YiAw7Bpq1i51HxPkfsawBiN3XwfauV6nrCuuTvV1y4XPb",
  "key7": "4jHzLXLa2S8XWyPipe2fkRB63aQJaTdvCx9LBk2mCrdZ6ZtYDrLhGFuetvsPN4DK7BuVaqTsvgCWdpT4PjFv1nNh",
  "key8": "4WC933S3g33hk75zwdCktiwm63pdQvr5e1HuBvgNk1Uuis4j3HYTTfjD1BxiaJnYG7zance8qRjfgQktKxHAZwvn",
  "key9": "61LhFjr1U3y2bs8WWAk3fnCjcZEf7sbp8Tsyjx84Y33GaTZBajqXWghfTNZ7sa4vHdEsdDr48qYHjCHMxW5uKTJN",
  "key10": "2J7af7S5jfCYtXg1VHacAWtdV6ETWddK6kqaomFLkuU4TwmTZh1k3Vruq99wRabnbajvXTvG3QsdNYqnwFr9EUH3",
  "key11": "2h5xRteJdroCy7VNwUVing5i1kPXLTYSqTdSzzWq3kqLw8Wc3E28CaaW1DUSekiAYVXSZNWCy9dBvjgGsoinCnVu",
  "key12": "5HEU2QPYTK7nd7vZ7gkqrUgDbim32c3xTY2DtPH7Ad3Xs8fkWmxa8hfTPktqDecHBfHgUN4fFs4r1wNYFqcRsWfL",
  "key13": "5SjzRjRNY7Z4JFVFXB4knCHgnsovv4PV9rVxruDx647bV1kvUoPYyyUBZYypwayLeQAVmnUCK6DN7gCeJqsgWzpA",
  "key14": "3zBzj2VfULrDfeKtXx7dWcVeGw2kq119hiZuwuE2kLHDVY1oy74KienbeLm3qHPWbhcJQk5oavBf9bjGwNXVaSAA",
  "key15": "4RRjXX22JjgQNeJNABmNZ1Mi15stGgddwEfEkU4PrBShowjSTqCKAozkL3zQWf6w2fKuRdGhrD7ictaNBzjhAV2M",
  "key16": "3nKQ7W63Bg1QNNMK73ZFmFxdC8HYg1pNGRSBt5siQauBagQeeHx2kDchAfkmkKYZeo4ceq1harWUhYf4vBcFaw1C",
  "key17": "3JGMFkSsVNaQCoG3YusjaZVjRzm9NVJwH3XCPgjYu58E25WA8Sto2uFKcVP7Ht7N8u3nbkL11HMXocscZpsdB1fQ",
  "key18": "5k37RqgAAPmHxexB979D6qZhM1MvCW64P4XVtxwTRxoq6G4ZZAEGw5ejTRH5WDG7rio4dtRZrTLr6Nwj5M7gJrvh",
  "key19": "43Cgphabb5eu46F2qKHKXQzgegDRmfRSeydQtSQQdMpbMLPUKx1ujr1ruW1jyb43BCJjsQPQcvhpcJoAqPVALr9j",
  "key20": "3HZEdTZzqsTd54XEUf8yjrFtuwh8kTt8D4KrafSPrWeHDfomWHQFScRN3MWVRYXfeyf1vAiLGYVm3yihqisyWz4G",
  "key21": "63u1fAQXqx9ds37MSG6jbQw4ifrA4rSngjNZGXKwyuX3x3Z53AHaakyh3d5furyFFZeaPgGzAqEqtSJ8QHGyenHD",
  "key22": "4fgdFH73f9xCDDm6epKe8EFcNzDNet9yQ4fCGtLQo9n1mTAazowGAhQxHtBzHReTpeE2aaUdTRCsXrD4vAuiDtVn",
  "key23": "4J8P7uxqWYQW91iaahXfZuHMbBmXeAsPQ7amXPfaJKK2xoSQyMfL1dHhmyqixXnSUtGNkDThvTF9YZvL1SqH9yrH",
  "key24": "3DSzq2HZVDHMCbJUtSCA75XZsQZ5hXpPPwUkq7oZj6nzVbG88Ncj2aGRYE7XfZKsDpKFRViJQfA7eZGy6MCxPzWY",
  "key25": "2Bba59GubEVpcQP5nirhJYmECkPaRYKHUo28vzxwBVGzy7noQ6ZpfBzbDoh93v9CA8a5VGx3q6BQYzAuwxYnjVjg",
  "key26": "2f77y3L8aD9R7SEnfa1QbZp9rn5v1qkpuAqiKvz6hp9ZnWy95wXeBepnG6Sspnc3ZqzzEFkL2JYyd3DkJKs7o9Jp",
  "key27": "64uPEf3B64uqXdUTaPsgrQRJnKtN1s1EHCd1JWJqFsv5nJuWaUe6Co1A5cET9EQyDwnsMh8U2kxVGKomiKfcJVfx",
  "key28": "HuDcgdWtiPQqsZNacLHJfzgjf6jQ4iHuxyjqYCWT8Mc4SfSrax8BwjfJSANPjsjw4bpYNz7XeXs4hyBYC2u9xno",
  "key29": "37QHjfdYuhfXq4RrrHdvPep2mqjdeYHcsnHcSAn6F2ZS3FPhTVhiyKstghWC5cHCfzsuSaRfHovkLRu99CeoH9V6",
  "key30": "1sAppsJ7ZCzwYw1DuUkdB6W6exzE4qDxuNQjW9xbAYFntGQAXH9qRgy3aUJruSKQ7xgVpMJmidVxcDEzGjxwZcm",
  "key31": "3wbZxfNwTMbvYHKSLkVDDhcv91VvpeE1D8vDg5mcAAkaeKRAmYguXjjX2D9Mu5NYJWo7cCPw8vMy8hoeKCTGRcHC",
  "key32": "ci25mPUzsfFwgGy9gT2AMgj9hXEYHsowGLure2CZogafTgEAaLrbqTPtyJDyftAJd6uwChg1b69gkN8NLvf4aNW",
  "key33": "2L2cQtkSQaUMVjk3B7svfap4ij3nzWBy4k3mBTscjQA8yXWTShhBLji9MB1Hmu4nJRuA8mmLcRgG4FM4Jty65BCN",
  "key34": "4s1BDGFaq16uLEc6kgP6cEHMhgThyE9oxUFXrKeSWeZ52Nb6zk7WGsXmDQpH1eE3DXWtPBCmUNJQ3BLDokmr2Lfh",
  "key35": "5jJHmuS91b8Uihx7m8KWsABNxqogsFwTAstKDgLypfwUNzNzPHkcy6Tnq8UbfeoNjbEns2Fs7sVGnmuZwEB9tcn8",
  "key36": "Dbn1nmsUB7eeUmWuv2FZHLdywu83Hrob4YZjFnLZHyrmBXn7L3L4ThmSoMxmyrjMeDSi6XLQMsJhu7ZKgC6THJA",
  "key37": "3XEWU2n4ogWCPKQakYy2Yz9Tiqimu9j4wrM11vFhByLM3ZWjLrx7wXgTLQhninb8iVuLkWAXitWCQRwaVbofirXP",
  "key38": "3pYm643yymi99G6fEiP3N6iP6LkZjJC2cfsHBSrco3qbXV3VXBq4ZFmpNHiuF2BM8UwwZWe95XQKuVXkAFzLeTnf"
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
