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
    "57JigadjvBHccyXrMjATbyyPWj7L2hzAk8jxsVhT1jXZSmgAsjwvSg5euGKAaMuRLB2xW6QziTEQ4Xn7HV7mnBtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmCwBCK9EAKFqAXqhgwMnBauutPMyq2mMFGDpLz3UFPyaMofND23mryZbv8Pc9faL6Nx6N77ub7zzGat8TByR9N",
  "key1": "2TtqF6asUfHKvTQjb3G9aLx7nB4Yywn2VRJbodfSjLEBoC8CBn2anrezR3x6NZxApQc3M4yKqycggpBPX2ZXXkBV",
  "key2": "5X3vxx9g7ACvXkvbaTUjVFMhuF1Lgt2FFgncC2Zau8C8FMcmh4rij7SKtrwAFx9jBPDFSitSahtm139YVf9bhDzw",
  "key3": "4MJK9R1ZcP9CJDa31VBcRr3XK8Zh2vtUTBJ1Ff7qDvrkACVCZUiuFUHa3WuDwGDtS2vJvSJ1iiwQBSrAj2rDN4ee",
  "key4": "LKUMWNNpAno2f5uyAsdYmdeYC4VVnt3xp4xHURsDvcdDxyHvLK71APAdbj3oLqQsXfNBs7BFmpEG4KR1VdRuXNb",
  "key5": "5mXTzQMNe61pRL9QrSbofXx5exXAp6x9kWL6rbTjorMZq9s4NZP3HNs4Ck5LJEiC65XYVNdY2LMfJnDsizmzcGFc",
  "key6": "k5suEtyYRkby8V6Cv1Uuhgqto62VPM8Gqccfryh2QvDanAh6GsZMQGHYifrTSWoEsyGkXhJHhs5RYo9VAszx636",
  "key7": "4ZRZErdgmHDM3jJoX6jYF6Xo8y5XExgHCbApEY6rruoSHDphw6chVa9sP7oaNvGDX5N72y62K9JoDes6dR49Uc2m",
  "key8": "3jn6a4V7kyW4hvLrAHo1aAq2c5ENrLXLnitQBb6tiEDE4ciLseRrFoP2nnxD8ysLbYYXBqLq3xiYpz9W2fxRV4WT",
  "key9": "3mMD1kuTYJVGU3os6q4abmUVCdp5mX7yXSjR5qNyYrv8wReWi6CWN6Uoat4pKT1SGvczCAmr1HnhW7HgPvKsTcvJ",
  "key10": "3Kq2eNWBQoSpSyhPEkFZKjToxMtcY88aUBVpPQxuC9ThrQE9LmsBdcafApakFtGuDixe7nZF6rqmi5wd8iSS7Xpv",
  "key11": "Z4bUjCUGrywXZAstwNU2pfeBb3Soub3jk8dfYzALTSB2jbgRADxK2B3SEuLMoG72ESDNUs3cgKRmdwp7bTQWvvY",
  "key12": "3ZahLjiokjcM7PLCpBhUvnGRsFs7ULap2r4sdtwn156z87gCjn6ekXemuZBYoQawHqUD7oycYAT5nYtfQzNeDGWS",
  "key13": "58eE2NxoCHuvqWykAikjKbgTdq31d6ZZUNrCWZXMEwanGCoxA7go4ra36Np6oTkJpxLXhHxbrN62Lvjz3xJtoJJd",
  "key14": "2bhUvXq8JfPw4j8JjPXQ8LbkyrJLDJmTr4N3kbbs1qpZbvSPjpEMKUxQFRcdwWuGyLqfYz7weAYAiQDVvbHnrYAC",
  "key15": "32vvSQhUbAgHsWeA6QEJsfK1Krg4ngqacstpKrxn2ebJExWuyjXr7KSc5MfXHk8C5q1UzWMCy6hXF9Mis8uDTdg7",
  "key16": "2p5wJqhVG1CCspeShsHd1qfPwF6DBXKEXayHP2a5pRHrQDTLQHejBvexAF1w7jPCujkXHs48QVG37HvWAr4RmZ8n",
  "key17": "21SBFLCc6GfAttMRKwDXtTtJZRcMqPL3ZhEdkbbQesrKz4RtFJDBE8krw57DDxjYsxeG2vhD9MiaQ7o4RXMZEC2k",
  "key18": "5w2eWZ6dcKHrukqNmchLAnjwHjD3wkhdQA6s2ZVrAqUJ1Erucwe3PX5ewfszieo5wvWJitmorBXJ4VesSP5cxUeX",
  "key19": "2YDd7LQ3ACqpbvjwz1cx7vSzvJ8ufvQ2pfiCAZ5rhTXJ5Ct5PDStV5k4NQoPZEMpmCAkC9YPwppxBrGuVxjmTx5F",
  "key20": "4tnBpRz3Z1TuJSL9L2k8YZyzExZ1kdBXAHyiV6iiPmKYuxaTPgHJa7MnxwwUagv9nbZfvqsFCALsxbbhGUCPAYma",
  "key21": "5PNt9CEZdPNuyrBrXcXEgbARWegAmZd5Fv7oHcTqDmq3mXy5HMktADDHse2htKwG2V6r1TmDHmehxQfwGDdHEY3F",
  "key22": "2DDKWWQ3w3B8c2LK46dzuJzGGubPraTA9Da7m8t4yCHFXHpKiJr1UHui4rxjog3mxL5PerqyKJRnLAN23zoqjumQ",
  "key23": "3JLvB19ig3Ch7FLF4zJTM33xKUF7NqjDB2mUy76XBx4RrFgxXaNQ4kQhcmKusPkoZY5BeuW6Tes5TiKMpaqnBKaJ",
  "key24": "aW3a27muvRkqpFBhMA7mQyNxbUqK57dfEAqFgdUG9aLpybE7cBiGM8m4xnkkkhrmtvHtgWRZ5S9SNBYxjuCpJh8",
  "key25": "TLryoHEB6kndmZBGFsdd2YNS98nqoqzDfbZ5zQeyVjRVAUy55YajANysrcsndF4p2aoYCvoEXXJ4vQ7nNJGsdbm",
  "key26": "3obKpMoZKKocSxsBLNFTs1dBijgthTWK9PxqwJmf8ydJakGvxXG15H9PrqjjBs2s9xyjZAFKQMzMSUgtutD3UnBj",
  "key27": "4DYr3SCPZr4a4PskkPvQyfKJEDcFrJXWpqAVBUQqjcjL7vZBmbiZZnrkPdzL7ADCWFbHk6s2dWgeBDVEt1RJnX7T",
  "key28": "ph7M4mRPy6KjwWJqsfkqAsGs647Qzs2MCM5SyRdaCNwvNHinVoDuZmVbjUtWZvm1dJc7SiaEtQhzDRUQNoFmeoG",
  "key29": "37RWkhwStQC6GNjLCx1G6PYksS5ZqstZW4mTCLPgyDfuX53J8KKKdzJTQBDGiyRhRsZv5N1kAF6sjmQYsUeEjSmS",
  "key30": "UvaUKh1K4ew35e8cezyMgWwSyWmj1LtSdUWyRAq8TTKRW4vRKRFbpq7F9rJqMj9WFwyxWWicJGfEvv7pige8CCX",
  "key31": "2wrvzraCkGNdWHUc3d8ghfLKeNrBaJeFbyg6LD8X7HuH6vHEqN9H3zowuGYgkKqecUzgm5qcTfiwGcYhxUhrXhwP",
  "key32": "3VhxCvCUNYLxSK4pr9QUWicx1RzwYYRxw7uvgNRY6tcNgjGDHV8kAYNX3ARY2PhPwPzhvACYWE8rUp5VXkUTAnQF",
  "key33": "2WjpXC7N7xzTLx1un8cpC3GTEC859qbF2MWuweTpB767YpqMahMT5VsDNtT4EFEMzuHs2cg9dks6tbHqRtoUUqQ9",
  "key34": "5FUrFMS1Hy5pCsbW8YFj8fr65vqK7FasXxzHvtRGvzhBWSxc9W41zsakYvEW1ywkhkad7myKMErTcPKaDxBK251",
  "key35": "664UE4FC43eLAvdnQAgGcnfXWM12rxFJQaiQ5dEdcpXZUAAoDaEuqPXLGfGRN3t5Nq574KuR1ocSrnCXMRqb9z2s",
  "key36": "48SYjS2yiSfcXY1q8zAuS1fpWwWhwPYecEHi5HBDKdeqM6pRcbEvYXkfvuVoJ4wSFN9qY1uXvTDGq4mYLY8MhKwz",
  "key37": "4Ta5Rbb5QfkGkyay2tzVi5WNEUaZaQgYeUVrtPb1vUvmL7PJiZGvFNgVcz7KAVTPGSQEyJoU7x8RhQCHeTrogRW8",
  "key38": "5wTHpNsAPkRQSMU4d464qkX9XVhnZAkKMBfvurx8nhChMmQ9VY2b561amtNmV4JFGDPC2gqm6XfzJDV7zLbTAomd",
  "key39": "3pjCu6oXAmVimXwnQCDx9fyKoqZV3QfLn2F5WcMVSXbihdV71YqAYWz3Nn3mst5cqzUcgjmDbax6jY9sXG7Wc1ba",
  "key40": "3PWW4gRMuUyNW3PpNMTLX8qnfjb6aJGYCeBfuVFhMifZhVTzvY3UW3urJs54uNK6tMG8oCJMLRwiDSHk5cFqpZyk"
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
