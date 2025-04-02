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
    "TL6Pj3W54CC5wk3bho3coBS3iCM6M4SmHxDrDyXPFF7f4jouT9WoWd1qJGNNdv8kRQi7EqzSiGdAZCN9eBAYnt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igDP6jLaFYWiPL8nPMraoYK2ujSCikiwzJ3tgfrD2bxnUFTT18JA3eyjUwVcRVX3sagXCYzfqjvMmcKgjvkmE4B",
  "key1": "5nJq25oywyAu1F8UUAsRU772eH3fT9QJeK89yiE4FB3o7kYvVSjXFpmWMPgbzxnEeQ4t198q4TG9LHdDgkAExiWG",
  "key2": "5sBd2TLQMrQqzkjqwxZq159kXSDJtory5WJv4HYU6SL3xSo8EuADA23pDa8ieifRxBz499qrVTSxf6Ry5QSDEjTo",
  "key3": "3fUnd2aKtDXbQfxKnaQQTUaoNTTkth9VuHUY9d47Y5z7eiW9JjKAAQgYUs77htne6kAi5VbU5zAcqqkFhgqGzf9J",
  "key4": "3Ponh6hoaMrKTjS8mSCxouXkoLNnsvpEJZzehqyRqPhEFTAJA5aZbqLGveFA5roguqBPGdAXkByj5QtHH2zJ29YB",
  "key5": "4gyLsNx2mXinoAj8caEbS4ArCC8u2Aj5JCRXKePhXRvaiY3x6o46NJ6xuHxkdGHXNWL4YHgxARjoeGV4ZAVYf69a",
  "key6": "538kSDaPujdyS96ovYY14YAN1g7HWH2BzMJ8paKD17QrGh7knLBPeXtbLrz7rGUd8iBTDzFMEoUPRP7y7vNHhzmf",
  "key7": "3SDw79bJ8B6Jj9CPNkxDWiweNhwagAuQoS9FV5ySAMBg55fqxpjkhdkPsWYcaFQxSXGsmwNQBNoWbaxjsiGSD8hL",
  "key8": "2n978r3bQZGy3Y1CkwUi7mE8za45LwtHC1HSzYePB7g7diwW6WSnkoSYegX8kCEQiULwb1wyFz5Rm1esjPEGZ2Bw",
  "key9": "4BVngiJ3P73XFiP25hogkBRcSUsDNjqp5RGGPU2sgofkDcn9xeK4ohGML3afQ5Exj7VAmq8ouvpTiTGwLAw63hwg",
  "key10": "5Ta63HKAvtDoctQrAkYYPV7g3J27Pf9ZXzZHHy8J4PFXhZPkw9fezQYoVSdfvYNmiRiqNCBUU7bQpadNZZ8UY73K",
  "key11": "4M5HsZSEBh58igUaWUHcj58uXVyeDJPgN7SX9BajYEk1KKNotM51mpoZstWMCszwu2EizDJcCdRWe3YR7KfGNpSc",
  "key12": "5GXWXpqPnKwWXrLjCuhtC4TBZzHSULfJKcRvegU1GF9DKUeeYuTR4oJNs3EwfLQkcruUgeeNgUGp9rPTVHcAvTrC",
  "key13": "L9zk2RvithNeSYXRZoL3Pw7u888PBxBKDauvQfNdJEZ5VJy6Ncm37QR8WBYVHjtAmExFRzBikfbyDVWksHq7mp4",
  "key14": "29DSLgK13zuEMEcPT6mLynTjTFH9qLwxnaB63Gbvak5ywNfCEQBmoVt3VJqjnZqWDXAPBofjXm4m7Z5GQWJY39mT",
  "key15": "2kpAPZ81UB2X5mzEm5QYpNYWs3hvPxrdtxqAFFTzkCHnzDdRUrBwJFfNTQ3hGkZUkX14RMWCVkeQKgJ9fZnWSpXq",
  "key16": "665jSGbBUuH48A7ewxEdrVF9A6V39x5JS6A34WF4NeiwhfWf4vqh36pQdRbs9ZAdR32yNVqiqMedUvJs2BZMuMnm",
  "key17": "2soggkbGhpXtBXHkuJSfVgoCrgfC6poyPWiNFJJyi6EC9HY8dsZXqea49dZACrd8maiWbd6Bhnn4PnujewQLXXns",
  "key18": "2YWY9LGhgNxWnmQQPbCgCF3yBoLriXVGdJuXY7hU9F1iYsgFhizn7rcNW3WwvnZA77H3VbknekUzLYDdbaJ9woak",
  "key19": "3SFc3v2Frc5T3ec88NGWPv6PZDBdVud8FPWvk2phomdQ4RHHEh22sqqCLxiXBdJM8PhaGdtgrUwhqdffkPe8UMN5",
  "key20": "kDmRqtGds95zTivnJbRdctLs61999mKZpxmuYvJ2QAnjZu5U3xyU5C6p4bTWuZ1zPfEQ34kBA74CdVps14AbE8K",
  "key21": "29cFJdUn9nwnQGxpxZMNQUF7m2Lrtj8sLuEidDywZH3Cd87wYqKruk4hzqn7mvwSfWsGzbQUJvEXksCMrtd4qNh7",
  "key22": "V7mswnmLjbLXaMxaijS6nQjGEEvF6SKC9126u57GYHNwLRkpmcmam3fH7D7a6MZRwbA7co4g4F59HyMxjUWpgTF",
  "key23": "5cuM6JVq6ediKPxA5dp9EBBY2fwkcLmwQiCoRFq4PncwaCJ6jrfrHtP7apUhG5CdcZ5mRMYSEpssnvoXuet9cRse",
  "key24": "5WV97S7gDbDaRdZGgG1vnJTKX58FwM9A8FJXfMLEDUJFTkgN3zhee1QsbqrMZGty6iJJxd6YDJfcRSrLaPtxBQLj",
  "key25": "2UzGcaUidQeFkbk5Kmcx9TP8SwcvW8XxociwyDnDbJcdnjG1QQWtL2LJYzF6N1MUU1QDEuZYVF6PSdKrsgYEV7aU",
  "key26": "3BTb9dtnWkGFSHp2BC4e2y2EzCLnyiLaiJUtWvTGF7TGGKNSEuzLPVRQF1zTPSJjgkMbKqg4y2SUYD2dEF7CeYMe",
  "key27": "2PEGg2SZovtgJvg6f8irzo62AKorbdPw9aUGR2yiSeN9bPLTgk4oDhnbkrVZjWaNPy9jcBys46W3ARAmZBfCRGx1",
  "key28": "3d9XqYPEzDzgzzXWUgF7YaC5o1ju97goFQGRNyxNX624daTufRG3ndecBNuDKTbMHE5CsjRLij8sUQfpR2J7tKxQ",
  "key29": "4Eg5zXy9NgzfVKc9MKogQu4mP1UReYXgUQ9qud6z8heusMkGa23i7bqp5Bxx63mETwbZj9GHLLPLwvBQJ2ohrK68",
  "key30": "4KPckCyLAxVPTisGe8eanAR7rDdygaTaXopYZaN8XZ78WG2CcsGuNxg3hpTPcAWq9VDzQV1d4CNDUR1sGCBJgaG7",
  "key31": "2NjbYDyL5nYCAEBzbxphENU1vyZgiZpe2jEiZLiFBSPdZezUuEZBqebmb74UesNrNWERjfiTeMBhkFBRTzgkYZtd",
  "key32": "4xAaiYVwsZKxs2XZBWUrep7Nv1oKPamwtw26BnTxhvpYZ3CRovXXE23Z9KjtiEpmwLuqFS3k9CWE622N6CyXNSqw",
  "key33": "5HUFhq8um1YEVPp2LAE6J8e56BsZykPyuadmh3GSumhYYdtGrF7sJwbXMbtP3u9i3Ro9NEExiX8boSWDg57WA63V",
  "key34": "22ujetZNaPfmMLagTaRuQEet1aLksWeSTdhzhXs5pVudEwtX7CWaFyPW44sLE8D7iDunmcLYRc9K84XziZEeAsDG",
  "key35": "3qdQ3gHJoiQv5iN4LR4bgSya2bTP8KDZyMBHCUA5TtzFq8CJbJChq3jpF1RnfqSVgw1DQUpfrnABSQV46Sf3vRbi",
  "key36": "9p1v2LGfh2Q3gb7yX5aN8BFwSmAgHnLJYrvK2KV9KK5cwU6TNV7GHamvFrQe8Jw7Yvc8gc7aCZd6CzKZxkh8vxV"
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
