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
    "3b1ym2LvL9s9CGqZdgvPSS8DV9JdLwrkVqvvZ7Am7uWN2cAQzTdVQnsrfxfnnHenjvNk2HS8y9CNCNRSnsh99Xmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pi6fvaqi4n9jb9e2NtiYGFWQemYrnq6rQDoz2Hhu32d7WYDWmdxRtsKBG97xTAUcAvK2yYdbzBP5uGd4HBdjQqz",
  "key1": "4EgN6U6tcM1wC6bqDsiJtrvENFg7E4YRjVvWxFYSbqgmxUVjDcKG7wMsPspV58Ygm1hsmvTGbcmX4tZkyBoynhU6",
  "key2": "bS3mB95dBNPSUeNUXgSiX61YYHR8ruNzHECGu5k6s5mdj2rQoqu8ktFHw5JoPnE3rRobH1xGQBMa4jBYwcCXgpr",
  "key3": "FtZiTcRowLadaoSW4XaBiBSTiFNqGPYsFVdqonufjjmgp5n2h7dyzuK4y2geiy4N7YJWL6NWJzqad23Xdb54qj4",
  "key4": "1qoFb8PoRzgQdF98G9X82HoJnyaA1FfmDrTgDGMp1Yz5huiSLs6etn2gpWYzmRGXekFZpGn6fUkagM9entTJid4",
  "key5": "5ouXH39y8FYgDeNTz7MWoodpYUDD9ijLNy7uA9H9Sk7iMZk97z2Mu8DLuzBYH3PdS27JMknfwcPTFa6KaKDRk2B4",
  "key6": "2bNgrfBQP5RJhofXvsmN1envdVKbAB1t8RokcNgVeyZXzieF12SXRjJ1dJVKRefcx3o5CfZ4yGwt3CzMQ6aJxCt7",
  "key7": "5y4uGFodWVyMyxZiXzfXBAsCjiFMm7RYL7oqvckyi99biX24DjT3B424UaCZA1kGp6LiALNCBMj7GB7ywhaTWNGC",
  "key8": "3PdR8idAaTm5hmBvAjm6CnLdVwFc4xJzr5uhfkjcDcLMwUbtTXrEDGVtXm8ADWCAqBKcgfrHyM5EpHd1vFuPhX2b",
  "key9": "21QhYyVywczubxZYiGKAvKde193LtxokahFKGMSgb16M5ou4D26qS4EAK1bqRGqQEhgoAnaPxHARJhu1EyFZFJ4a",
  "key10": "3LYe14WwLobokFTDmMGDekANH8PGvJdXXJH8yPrrjF4RqdJmumdUXkMGPkrSDk14ipoyaSPWJm9AwbqJwVsFGVQu",
  "key11": "JnpNCgjFhy4kvrDt89bFG8gSxYK1qepEWjxQVZuSgj2ZWwhkAk48teCZ9zdNtUMKPvLEHxAre5H2KtaX85ZBVwW",
  "key12": "3dnevsa2Gyqe7PNcKT5SDfXYL5BvNujeBbmUfmYCmsATyC11cWg2oqeh2oqWWhs9pv7EZg9C8CT6zwxEmPueLQFy",
  "key13": "Gzv6tv2h6gzjsya1bFCXfB6V7u6pr9iqaeY7KGhrrSL6UUXW1wicgYJ51wzfRJLc6WARUUfCeLerwWYjWC56X4k",
  "key14": "3qFmR1P7hWGK5tFZBqZx9GSv946T5c4YwpKPCqUdwTuESfKhY5bmpwu6PohmqJN3qotac3ZM4bzVhHkce65jZMwJ",
  "key15": "2FT7yeyWYJCZaaEFAqkHNxq4rT1hZyWX4Zji75hBQiu3fX6FtbYRBjqp4dN1NWNpC7w7Lb4D2EZpQRkxzCqkJdoA",
  "key16": "5nAeSgqxKjcWPD6bdFjwq9V379a9a9YJYfkm2fu6PuKEiRd5ESVYZkSBy6DeGuUe8CYc3pHuEu76wfhGdtXZCz68",
  "key17": "3sFZT2EgmwQb1GdnDEZP7WzM7ZeGdeZ28eFSt1oqNoH13yjBBEDqJg8dFTvVT2rFCZyuqqozJb3Bkuk6jST241kC",
  "key18": "3T5dEnu3BfcY3Dd1s2Pw5KB7UCeWUyf67ReER5acxgs7WSmpafYxr3Fdjyxiesq8tcF4i5Em7VLvxRm6CBQzLPoc",
  "key19": "J4fZcAujk1tUNRZ9sA1DUz7izFUyjrGityZhTbgYZL6suEbNX7wXoBKRJZ44EwDR4FwCu4Po9wY2p7QdM3T1LsP",
  "key20": "2JLCr7jbmJhxXW7ariUZdTMCP1LcoNXjKgdfXuJ3ZCwxzdC7hUMsrRAHBrjPt12za3E2NQxBZfWkSq1hhesWp8C7",
  "key21": "677rjXfSmxJgwYCk1exkD2SS4RnvnG5zKmowpP6B2stigGGB2td7YZ4xVhh3wiXwePq3JyeyRizDpgDkifXrr5Lm",
  "key22": "6DqZhaG5akWRYxDUTdYjw55mR86h27wcE2ML8YNhzG4MUQa4CcchFPBbxvsJ9Rx7hKFsKoAuDUqgcu57AG8vGeo",
  "key23": "2LphiHdSw2huFWQ8NyzFVrhqjQ3R8Z7szLRriT5DH3cnffBwqjUodAuHTaob1V3DkzN3maWqUjJ5bQLudL8rEtXA",
  "key24": "3CAADbiQHYxF2SQc1yEgMpGE7dczkDqGhfUvwoJtimBzM2Muse5eSKpRY9jjraSzQhUmo6PsWuvX9Gv8mDE4PVAC",
  "key25": "s1GR1cCYaDAEsmBDCB7hfTsV4s5PbygXuXDJL6k4qihGTc1nMumYoJPaYazx3a8tKhrpGz7vuo7Mk66egCzdqe9",
  "key26": "4GTtFsHgbKT8PrWSnMWnyrcH116yLb8Age9Ee63KYbNRRJpZd5NvZwdZJ9e5nf7bfxDpxoj1ccWUAmqnjX4cj31o",
  "key27": "5x5cnufep5Mb72c3XGDnBGqcDbcqi7ecdxT7dTPSeaPNuQdpZkrSy7ivk7rpgaWKShPzWoHL9bVWLbgtTu41wPhQ",
  "key28": "2SCniDCMss2MFwFpX2Dzkx6Cr9pZbNEj8ZPDvv9cPoGoctrXUHwF7FK51PKYd1AfpHee1wxoz2vrAVpd1As1pB68",
  "key29": "5JBpATeDXm9bsJ7cnLx7zU7ghQMhhnZPp3y7omQ5WZM8cJJXgYnz3EQrELBu8CyhkUf8Gq3eDWn6nmMfVFdusoqG",
  "key30": "3fKiXaUiWnS21UkHcJW7QMZkvcWNed8GaJL9Q7Lt753k7GafWzZh48a11cw4LiewUF1BmMkcojpxAxUSm6GvuCiD",
  "key31": "4dvoiYULrLzxjn6xwnCYh1o16vRQknJrwSs5Gf48hqsd5Rk4KbGYMnCpqJtV3ueSEsebvtCBA8zxQd237BbGfJuH",
  "key32": "DtYAmYFoovUbviAKTejttHscNR8uxrNGPY5ziqznkwgNt2SFMRJ2bRhxcdHPxemwTAYrbMBFU9qph76wbBQWbSZ",
  "key33": "kNPb4RZYhiHfinMiWb5ZCiRXgJPcB1H6bB5DANyNJGGUmMHysvRnbJE5b71NLGbXh9e22X5botX7k3B53vhRG6a",
  "key34": "5EJqV7rE3xNbCYPHU2Ht8djzr84bFa9UFUriryNNr5SDmLA9aEMa3jypevq5sSVwsbJbh4hq4H4FJm3URZx5Ucoi",
  "key35": "3gmfSH92yiarxTyjVPhjGEEx4t6n5ua9gEDfBHaXBABp3yAwfmmLdEE85J1hY7wJ9xnJYHD7yAR7tNDs6PvXvnQD",
  "key36": "VGyAqqSnYGeHJzKz7N2vxCppj1a26ZVtu7yqZWDXmKo36xbRZWgp7MvezCXg41dnL2AUtEtAnJyzxjR797VfYRN",
  "key37": "4aoettdTCgUw2Aa84TyQ21dHd1K2m5zFZ73188SiFUdCj6ksA8bC7CCEsYSUvsxSdNVQxoDE3xcMX6ZjyNn9YiQ1",
  "key38": "4Y3t7iC2VD3pio9327vbJ51FpQ1c2RR4Et4yAWdKWDLxFFzMqPRDjmLgYU5BtoV47BqUSTVPvMTSX67DG6nM3uUH",
  "key39": "2mGGAGrHbEqzxe2omDbb68Z2D8CfCHTvzeRwJBYs5rDYq8XRfnZdexycZzuTmFGaicn3hsPtWjYwCYVpR6a3faCr",
  "key40": "5X652B5a6WwUqbVBEeH2dzpwKx39pw3ncwsfdJrn1FqvM1EGfukU9WR7toFgRzrzEr36DE6Q3dxqBZHrvsSyo5Tm",
  "key41": "37g1KpGkoMTwaZJVeYXazDLuC2GwmCqzqZTPiApjDBhrtXF5U5Q6hqfMUNNu4me55n6LPE951hSTsxphdMgU4arS",
  "key42": "3VPJLFQzNY9qjvzFM59L8vURKWQguNk1JqxJgJhCUdKcVwKbFzgynenCHdRqLctt66yEa69vvzKTt3wbF8iwszu9",
  "key43": "4ZtpUu7aQRnjYnzLqTHXr84irvyNarQ4BEY8vMvy7KqqBFYRQgH9ZJhRtz37mVSATYKaUBfGk3bw9gm64iZGJ3jv",
  "key44": "tohibisRkLUg3Ni9TCRXLjdjFFEyt2zsTyFinQurWU9JSrz3Jkti4EuEQuMRERkcd6dLiaF5f2EdzFwWPiT7iTm"
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
