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
    "2JjNe7CfxhdR1n8XPnw4F3e5KnCadDxyyw6yniZzfx9pULGp1DRbbJaff2rri5axwhsdRngA1su4SZuW3pnRQGFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQyRvdJcU4GNt1J3non7hjDvb1Jz445ycXnyUK1vmcBJNBFtoeRQJjkgUAZxxzHGuRAFM1wi6kfshufrrHt8D8A",
  "key1": "2N5zXF3z9AYvhP4GiUrzvXCRP3mS7BXvtTaDRWCRrXbq3L9hhjczHf6aQ3eXdXcDaoAxrsX6d9SmCfHfefM52yPw",
  "key2": "3NYgmtpdW8YucpLsp7s6rLGHNeP9g6Bqv2vjTKtT1h1VYwRRkgFWDY6bEYr7y9A2NZocFM3uv2mXUy1ArEdqfiqi",
  "key3": "4ADrAFrd6MXa4XhJzZ5yuZesfHV3t2erLtHMQYDG4VBycpJtGFpiqfGjux4xDfKwkLAF9jn4hMadnkLo8jKRVDZk",
  "key4": "5X7VUNoqwCe56THmVPLYdfjnyrTGZBHF5BHDah3xsEki3j5MKpjSsM9oB1iCgNLjXL8p9bnyi3TnV7Cn9LukoG7P",
  "key5": "sPHvpTGspowvswT1E1RYUJowFH8KjZyQ2ik7khfr598JFbrz5uKd6hiB3z5oUosWZeRTEmw5UisxirWzkBnqKSJ",
  "key6": "5huuZUmfKDPMabojoHNicioQpoCW9gWF57BiGfnxt74iHWsUcebyxTihDE2niy96772JPfCwDfdiCtDzTvQJJWT6",
  "key7": "5GUwZT6ZKeWW2N8rs7n8tToVJuKC4nwntJ65MU9dSH9whZcx3FcUAiegP2yiFTEN8YmBvbkm9Dd2B8xcXjWX37Jm",
  "key8": "K9gu3znPwNmnDuiymwAosRiPNerkJjpzRemdn8LXyFdgjPFP9ZbCWhsbszbtcrpnbAotmDjCEcAbTh49ba7NPCx",
  "key9": "3mpU6x9pn1dsViYxy4wqRgUKf2ofJpZhgCCAEv1HSTHXQgWQs6WrcuJew63KDPQBtAqx2mYRVYiC5cHDCxjH1bX7",
  "key10": "4AZC2jky8bwSfNGTrnioGEWSqPniJzG9teQTNMtB8VtsJnVZyaa4yusut31CNXB7MkvVQfNyko16hAqgFDw3EKCw",
  "key11": "3U7JcNXPLQxqDsQm4iXgubP2EYtqKUGgZRtjsgfLRKiP1RyEgCJ8yjZyohkyw3MEsnAnwaiZV4ndtiWLHWcunumU",
  "key12": "32f5FiCJayRBmyFFMtr6WwhVqEACy9JyLECCkKLxKKQ4NnsfgU6HhYYjV9YfY1c9oB4DUGxq4QQEjkxjLQ399SYc",
  "key13": "5J8gUR9mJGCkf1aJ1MXPvCrfYYQA2rh3drdkpegJ6KcqvPxRAoNYi1LZmemYqZ8NNXvpaQ6B1NHiKq4zvqB6pwar",
  "key14": "2zfBwtxanuLvQ9LnYvAh9sGAwWuDWoUfXW758ZxBGE116Q6pNTnN9PHLsdTr9jPF5nGJpiWYJ2s6nziEumQ1whZZ",
  "key15": "2wF95uPS8jTKfcgdjsz6GhR3uUCdfKqs3o8UafL1peDmh5mfSpKa14dyntVHf4rm6Qchd7qGSNrhChQMdYY8TV4k",
  "key16": "4kixHfZeQcm7xsrFmPbeL7CnnDfi4hWZSxF4VrB3ZtacpHpkroJ2yBpiEMzHZqVoJBR1S9YLLYTgJ7f42Z8R1rVq",
  "key17": "3E9x4b8eLKywLQ1MTzXmWZrqd3JzWdyXioGu7W3bYdQgR2RtbxRWhAbUnuupMPCUZAdiFb88eWAKkdyppAmXZ4Xj",
  "key18": "2RUc9VspLvc3f7tgxji92nsMDHddP5mdzGzVJg4FurgktWA5Szu3g1AU92qwjdc9zgrZn7q7ktMeFVPddsfhA2pk",
  "key19": "3bKn4KQyNya71CNBy7gFUw6X9YPVgojn7J8uC1VRJvHqcnWHUPEQxiiqStYN1p3WsrYwsp65JwCAP248sJDisvRB",
  "key20": "2L3ipqfppbXzwNjgCErTdveHkUgfh12U7pWtX5eSVpNEzVYwsjZAgLDLniNgDp9H3i6F51eDZiBNEkZ92SYSQk6n",
  "key21": "3gAtr7WpA2RtFg6bJi4DANrcj5CAQFy4wy1LiU4vVZwS94gn3TBuL8GaeUFXPDG5ipiCQU7eJ1KrLYP6JXukg7ez",
  "key22": "3EkuBYHN8tgCd699nPBCgkSHhpwSE5vnarEK9xRYpBSpw3ooudt6DmxkXrMn1q8dDSqt5Xuvahu9iVk1rWaPrVCu",
  "key23": "pv59fcLJfTPZbZZqRhxyHeyVmRowKiNEfuLrAH67vgN5UMFFSWxDJc7PAfCy8F6twzDg8APYWrWUfWiZpj2bujB",
  "key24": "5CUZTgVG4GjWujYKETwiudLuHFLU3DEy7Nm39tSta54cx5mjsfT9zxq5mRKdYZgaoRFuyZWtfJFcstP6oWYNnQjx",
  "key25": "5UbUMGWcVenv7fmsEhmDAnXoBWQUYcQcZWYRr9cdpxRM4nj44AngGFhyXXaURN1KY58d5tesxkcSyDk1ETNNiAUt",
  "key26": "WxdCZQyuCf8vaZV7irCqFWxoUjyG5tYfMTo1Zn7Qz4Y2TvxoCXfHu9eHXic1AXrjKJiStfcwpStqy49HEmu6tjM",
  "key27": "1Q8ApVimUJkpx75fUF1gBn2LnmMDdLjcAH2PZFgfB956xhnpeRzdaNq2XW4om8ZYv4SF7kPHgxPQrfy23ngSNSE",
  "key28": "5W1PagPquYGGcdQZP9Gs4TF2UzEiW64aysErkzeigLdMkqZYs8xvri58kDrfwxa8R6ZSNsi4WS8hu5bNXuZzW9sW",
  "key29": "4Ag7X4kdH7sZb4YhxRtBq4npv1LspzPFa8DbevsGyBHZNaP1bzxgkX4h3cXWhf9sGENFQFEghoFCAPEj79f7kfp5",
  "key30": "57iA7T2QzMNZyDefzc4FiDaQwxAGWUnyLLMu3KT2TSXpXHV1eBf7QQmH1ZWEpRQgnLkZbu1Wb53tZ215jizz6mMd",
  "key31": "5eVzfNxwMAwWYHgmTfhUHhB5FA1GZTJatijWQAR2B1NXMTEuyrtNfq4HrzysScRnmGsJLLjHLKTSof9uW75fkChc",
  "key32": "2pFfyt1yxU6jkzW8JAXB4AYi72ku7uTm5H3621GnHxirpiY2rDNWy5QwRDqAxEGdRrksU8xXfdH2KP1UjV83ugN",
  "key33": "4Lh7F4n8cmBQybiJQ7y8j1GpYtY91VTzXhUmoWw46sBuhGyfQvLaRWBKCZPb5J447kbQNBgJ9jp698k38CsJ4rqQ",
  "key34": "2dRYzDLR57Ez6AXGkeFYXVo6B4mYHrbzHjACf86ocDyByNnyv6cy9L1b9EU124Yb2iYsQnyEceUHDJFrbMJBPtPL",
  "key35": "4g9HgYQ6h8Hw7Xd9oMjK7UbEakCdPpZMiGZGz61nqJFPBQWr3B1vJjVbAVjCr961L1PKcHe5MtEoDWuocYSSZUHd",
  "key36": "3kDqguvGAuV4GxjM5Y56kXEfbPxN1eWKRDFegCFvGNMWePx19DBD8K28yDZFMnTxvksphWpPRxgsA1BXmMcLNvwQ",
  "key37": "2DnKtfRizAPim7KtcZtCxkiMw1NdzKwoqKpoFNJMLxaVDAFx56T7WMQ4RfnqNEBvpa2s2rLLGEVvhw7hgQar8Nyg",
  "key38": "3SgGBSBQ2pDxfHkDsze175qnYKvvLQoRNq7soZ6znFsq7P7nv1VLHBpAzphTgdDr36Akgb1U4qGc8MxgvHejkygj",
  "key39": "TES46MWxog6zUSoTVm4E48s2BfVqqWtnQXJTG92ni9icK5cpYf6y1YgCYvTNga38iDGUufiRRQVspNbJ8xZwVP7",
  "key40": "an4AL3XA7xAwMsJ9sCKcsp8DmGv3T8b4nfdhkuvjBHmNwCYtiWzH8CsrVPKPmPcojyqXyeKfEjpEaKPXRJ5iFJ1",
  "key41": "3Wn4sZgwFDb1MxBiDtjH8LAePUAwHzpgwQAd7Xa3psqNaaMLLU3pW9U6M6Evkzu1xxbmdGoF5QxP4JbxUZV39gM6",
  "key42": "5unD6rBQtRS1FCHAcYQYeKkdqR9MMFqM1zxhrAko7brG4aG1FP4DzFtsid8ifZ2Nf9j6oMZcYR1tNZvR8x6qCEnK",
  "key43": "2QnUAJiHUebCCVFeBfQJrEcEgFJ7ugi8VRKKAeLG6Xd7YHsaNaytbKz7ojm3zZP5RDAJgJYfsvhPeoJDu6KKomHv",
  "key44": "5XXvxfBpmGVvpmRabK1Fki8CUbjyPzPA4keSgLvCKaQidqgGdHU16FhDeYR24XSA1Q6FibutdSzxcnvtWSVPU3gp"
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
