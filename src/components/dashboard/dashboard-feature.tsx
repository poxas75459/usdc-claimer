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
    "npatLiNPbEsVrc9mZ2mkaMNuV4b6ZzGPpevL2iPTh7eMeYBCJczxfFqA5vCYsCKUPyZtARpmnU3eajXfF7Eam9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCT8UNZt9HmSdn85CVyWiyaQnNy1cDsjuuLQTaTFvpp5qwLf4MUdJ8yGHeq65AyMtwXCvMqnoR7dXdRULrUqogx",
  "key1": "ykpXk4jNncqCTJtFGVNFc1WSQzV2UimEjgdAYM2cnoTD4uskghz3GtE2hKL4qonBZCSxAJ7G9poDJVxsChT1K3w",
  "key2": "3N4ENQNY6M4RkqbYXMbV94TM48HW9aQJvpGN1Dft4nKd2ystB43shhmjJBRNmp9ARVfXDABh3CkE7cSNX8XKGKop",
  "key3": "4xHP14E2KcXx4GGFuJ5gRGabV9KYZH7nTxxuQukHk4L4oLTUyuX6LC5oYKqrePBVLNmPbGNf7uMK9PQr3xv9Cuzu",
  "key4": "5Qv7Q6V9uUXskRWwghgfDSHXCoqY8zUW8xJodC45etFWsi6dvTxFvEwctViNWmfSFvAE3tVH3guvQNw2R2LV98QA",
  "key5": "2fZEhH1ezaXULgk5VbEY7q68rCLdiV4pGzF1A4HfipPBjQ5SB2z8kRc9eYyxoJUSJ2DVbxVdF6MJsq9YwLh4ymJn",
  "key6": "68oAjKfWJMPbLdn7x11CHEFE2VwJ4973mtHbQZE4wERsEEaimCvh6DH5jkCSrE8unrwPehFmQZwRi9iC74qVg2D",
  "key7": "SdAKQZ8832qFyaa4gugZ2pbxmeWD1pdJtiMTkBjTqyMxe6xwCtFp9KxDPgBQDRXG2nDqtZbqzf5Y7FPMEa4UzFg",
  "key8": "XZhaXNgFMQ2zKUJFWxdeargEzGK7VvxoRA45fxSHXjoRCrx4Fsrc3y2bdPf5qNovJRgTkzedpj2KWEv29tQhmRu",
  "key9": "2J6GU3iExVTzCNgWmmAMDfVz5F37dpAGJJtaH1DLkuGjY41wC98G4Rn4momVKwhTZyu7e17MCdyPeGDmKNGng1oo",
  "key10": "3NmC9ysS7onrEJgCYMeAhZvkzHXWswe4FDxP5auwF3biCSGCxj6fLeFzZHyKaWpYZp48zFu12s8YwdfCEYvxpoX6",
  "key11": "2sfXMEBqVvXsKcLenh2jhsKGkXmoL6EZJGCuouKS9YakrGoVW6UgeA2t9JWWbQQDtEV3s4gMpMhxqcXpe5edP93C",
  "key12": "2JsYCxK59ZnwyxXaXLyQgS3UNvvtygZRrNx6tzTzh5QySXBCqtcvnaw4RbYbHnzdRVfB4ma3i7AyjtYpgCdugE58",
  "key13": "4SJK3Asb17C8EBo7LqffBvH91YHhGveDBxoWFNTtJUsqRkRZ9qwcNWdDJbbhPPkeSuDypu19kWh8znePnmbDJJeo",
  "key14": "5cnM3S1U6FZmjQsMP1VXjef45wALh1UHvLJxrgDKsehPSgSBZaSpDKHFfJzHhmcSoA8tokHaHTe5uBKzVceLPWQy",
  "key15": "41ncHusNu7hQXUWmL5nNJpcqbE67mAQ6gTtX5hqYd673tWU8MjmQom7x5mJG3pFQbP2gCsufccfNdft486GJXtTg",
  "key16": "35kYhnMEZjQnEfZSMuyWtjtJgtezdTrRkSf5VGzwN3iPjfyBeUDY5sFgMmhgyMJnrq5Aiupwpte1wRdfRxspRmE5",
  "key17": "5AYRpNDbHpQdtijhgVv869SuU5YEJNd4moLnVoejDQhxwDZeqLKWgyRas4MS8mJgLHHLvmAJYFDy3paHs6MiVWnx",
  "key18": "2CkJCVPMgCpLXsNKATFcy9tPsNwB9mGxC4YxJptXGLUUbqwHSPeh7iJr47tLmZPKkgn2LBkkxETQrJnFvPdGW9i5",
  "key19": "55oVpXrPpM5QTTB3gxdgb1RigM2Gz6Dxsej22hyA7vr2SLkuQpw4BtCpM3hrfaxyDuYEyfiktDC6GcyHQpfPNQQh",
  "key20": "3LqdnLaWNWgsFA2bZswXiqVh1CPqtZzL7aHaCPXpFib6PMNxujbKij9u7JpSjy2MnMEETE1Wtf3Hr1R6fiFqSWPR",
  "key21": "3NsjAyHQQPKdGaknQTx6p6rPzd1DNkw7idN2DonHchrPqurJv1hJdMaNPdbNHThhymFkUjfCv1dkSmC6YY4o1m1m",
  "key22": "59gScDeU5xhQGikRTyP4V47bLhFRA9ysbPB6EQcvyexgLSm6o5XocZf5KWNDTSxbhUUHX1bbjqT1fWo98cwK3pY",
  "key23": "3dEah3LvFEHbZDHvyWwTRBcxRAuXB2wVmSecjaCs5J1tSaBUgQpHQJYnMdXecMw3k4GqENaEvVmdLFK82FrmoGAe",
  "key24": "41AZXqJyPEDetmPtNWRJ5m7KyWsg5Y5mMKfENisErnzJihS23LemK3HjHT87rwNZfbWNL5YWF3oD9WWDUhJa2ywL",
  "key25": "5NvgpJy59ee2EBqBnRvDT2RkDjKz79tYeg5MG8Pohium8HLp4h3bbrkHrnpiZq2qt3PiEJm1EEuNNJ9fJgVv1n7d",
  "key26": "2Eox55SoEMDhra5ddaP8W1N5xQbrotedxDTKbk2BuqVW5j1aUkJapChWVbqDTykoWU3HyPCpAR6qUD8Nhj1DnRus",
  "key27": "2w9TvRzNUuzdaosiKMQz9ESHuR8kgJhN3roCe5Y2fNUusyu7W6fb4tEFAAc2k3BwebnfHJ9ZfwESyuM5iT8WLq9p",
  "key28": "65K1FZ45uEmMEthPEwLJthKPEJXC899HmWqKn1BwneUVtUQ12BCBzBoE9f6i53JKTRTycVD9UogqSJmD5oUGfz1L",
  "key29": "54FbNH4UgDQRvcFVohuMFygKXmRAw8rmzLZXCEjLf1nRWgu4Z3eBqgWGpN8oQv8rG5Lp3F2k6F9vaRcV9WRvLenj",
  "key30": "56w7toj12PFfzwj3Zvsxhnv6qSj8fLf3RaPdFQuCf83XLBeBZnGFTtWqcx3BECyzRpitZiZDR6mG62qTVcL69WuK",
  "key31": "5jANhvdkSnavV6tfq2S7jbUeFSN5WtspgZNvbd11LYe8cxVc5fV88UPahQxi1yFfzWYo98vdBz3aWYpVRH7cmhU9",
  "key32": "LHKqyGbnSTrQtmQJwA8zuJeTfjXygNFkDawwFM845QD2gVLpKVisHNyC4stvDyprmSvtehH1yGX9CkiTF8anuEU",
  "key33": "2YKsEnbvjLKvHNaDjTXx6Mnzf6SUWhngcfB3t59JUhEFaSPLCdH8JGYvFtbUbQLB1JjpgrgFnKUqEd3Xobm94iRq",
  "key34": "3Rv8FjZ2ybg2XJuw6spA7HfCzqCtpwSrCDYr7XfimMbkRY7TfiW4GuCX3PXQNRgxbbsRee8LDTmRKvkfTZ8vr2L",
  "key35": "LthDxD4QtdnaMKu7VZef7By7EU1XYqpte57oNUBtc8LL9TpWJDAet7ET9QTtGXD4TnbfdTQojY9ATipjVgsEjmu",
  "key36": "3WfHcMVVeSCkmwP1bqpEW7KCafGTgxHKhvx8hevVDTn4kiH9caeZkBn5wDLwtsTH8jjHttsgEXMHkAG3tgDq1Em2",
  "key37": "4NuCPZ8vC86oUwCi8FNRqt5hrQGWeKz9kQiWqKVcugaq8h6pEHUxNt6ZyZkp1ts1Ew3vKuYCSBU8aBh46fQpGR1b",
  "key38": "3gQrugqepRpJsERVpLpm6QhWYRtrPPQojHsZFLvNdjKqpEy37SZ6TssqQhfz8s6aY6FdZ56V5diba6Z6wYLKa4iY",
  "key39": "4XMUow9B2KLxMPFWTYK59YcpBM4o3orXuyrYpGsKFH7q6QVSk9EaUGAnGy8e8NgmoYXwVHs4PnSPEfSiaSEYuAPf",
  "key40": "4hajeokKni754edhUv4U8kr1a4ZFqrJPCTsDPT4fDAaheSaaXUpJQaJiJHbAh5fmCWWJjt6heXDxHKKvi13Q6hex",
  "key41": "2M4XD2cpydkG4p8FScvCJC7jULuFgZniAp1cheZLv58VUhmEtc53ptyzQVXFpHcV1qNF6Rr4TTL2exV4QT4k11DY",
  "key42": "2xy7x54oWRjPnK5RVb35mxkgoF5M1945hpXG1v2Va7cQm7moM4QwbseDjLPxe2QSz4GcpSVgrC3pRQoRdCDrorK5",
  "key43": "5AStvoCTYsazGaYrCFQEcBqY5wNBSpqZxtFLEiS1a1HDZoXSb77kMb28F9TKDEt3tAH8qccdFhPKgL1dZRSe2CEQ",
  "key44": "4UvKQQdgGgcFcJoY2s5kLqiNrPHNWfkwYjsLmoK1oD598gYooT4xGNFZKAWZnzBGjEv2hyrFGBxL5oPtCPRATTbr"
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
