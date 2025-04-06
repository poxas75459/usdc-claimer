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
    "54h5ZwARGDJcmqfNe2kbdYQThY3kWeuTRDi92EMwcidTFMs4Bbt9CEv2iFTkWEhXWjnSfzzUBjrjaj2dioRvYkjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFG5sodMvZpWzXUQfapBCXGoBJp88NHiKHfz5NEqRDHpJ8ep18zsodiMjFgddxtVtAjTKVBsik9Ej6SrpFfjBC",
  "key1": "4XxsAjjUiwDZSALbpr8Mi3Ais4rRnSyDPLt9WQK6XhcZ2B6QiiCx6nKWnf3W3skRu5w6DvtcsLCgLfX2UK2rY8M4",
  "key2": "25DF7jUqpQyBPraodR6AAzRdSVciMUPWPNhc7fQzBSxAy4sTfbPGqUsyiR2VVmKFaNtZe3gwU6euDioDvDJbWTcF",
  "key3": "29RQhCrAzZtP8iYKCPbzbLaXT2GUb2Ba7fU6u7PUPmyVvKYL6ncKayYg4YsrLCLxrDctgPuPk6tjkkYjzH86XYgn",
  "key4": "4uzpmWdzF2Pzki81QcciJ4rSQUV5vX2hSZBMCuGAWhFthgebeftwk74D7PBy9Umz1mFRw1ky6dRf5mVd3u6DZDdz",
  "key5": "2HRUjV4inC5Ztsx9vKhCThKrchqWM2bnjt3iLEBh3TA2eJqrAeBGU8i4ggAZeHE4sFTrhpVWAcdcrYGERyZNtsnT",
  "key6": "5UNvQ85DzBVS8zRQqshPR17JBk7PGjZTzCLQbKS6n39qZWzZ8v5TcMrubfQS2gLkvfUzgJoNLXUyCshtvGPYyH8e",
  "key7": "5zv8yFcoATLZLdAa5AcBJXyBxKhTNugzsJFx3vPzWK1iMYQuLXDYArJ3i2PgisFHTXES2R53h2EUrq8jfemhkGda",
  "key8": "4owdRkC1P81SxNR6JY6zbPbbX5bzVmo5wGt6Z8ab5M9EtDs6W5yR3E3oGpq7t3JLS5ZcsseDMgPcgdQqkhKGVPGS",
  "key9": "2NiPLjgBgF4jGXHdrk3WvQxAB2qWxTWtxfUKgks8hTyGKGCUb2NhumqSo7FXQN7TFZn4BNG47PNNCzU3zFMvBqpe",
  "key10": "5hsw35GZZU9AS3qTChBHWNnASKNQFLE9k16ZYFgsFeGuBcptcr1U4P39s1YXsQZWPZzJNVUXqm5bi6jXjLK3kJLb",
  "key11": "5cPrYPgx3jtmhYq6E3n8ogpXX4pqZFu9oSWYQ8v2cKcLUmT56esmhw26N2TPdUBmPmHUBc6nkW3kd4i31zrWirhv",
  "key12": "wGyeL1xwWG1oJg17EU5LHvTqDT85eNJL1BRUuov6uuqqkoWzX83wQUA4DzavUbWj8TqjM4BuZt653BCaMxoCGTk",
  "key13": "3q53dR7jk1ikX4SDetAkmVuApS7Jh7bnyX8iioa6kafaLpqnUN7EYToWu7u1gqJPo6r7E9ZmVZ3HnF7tuFmHxt2F",
  "key14": "iMAB78zyPTn9N9wvjxZ5ZUwsT2mw5XybZ5aPnfP2qG7sYTovnJYBUjpprkiRsKTTqREuiMSsgwuE2SkQnyXrkx9",
  "key15": "2h1KHW7B4sdRf7g79Brf1PpK4JA8TKTH7dT6ycCRSgMGMtxmCN1ukdPneqQ9GPWnP8ZZJwqrjV3jDXH4QNyf49tE",
  "key16": "3rfxbc2og62HE34Ec7aXZAMH2gyQZG1ggt8AuzKm5PgqmEPfj75XRbFWrmDspncqNB5y95ai9ch9CH95yksfNLn9",
  "key17": "erW18MymGpmb49znRUC3xrU4ayvhmG6EaFtAh2FrT6zF7fP13s6MBCDMwtpqEVo4nBRKEyBb7Kv1Lde6e9kwNjY",
  "key18": "2MLdKpTJQUms13ZixYP4tMCVg8MVLf5drYJATXxiih6oQTymXgSZVxPHMSVjdncX3Vqo6WPQg7rzGKFXW6MdWTMk",
  "key19": "41qUizCByuLLno3XYzUD7aYauRnjx7LamLiRQUSfMsNsuWrUkJL3NxxEEAzutW7eN1JaGr2HX8N9fML66DyK9hCJ",
  "key20": "5DSNyC9rgfTBjPZGr9J8XxsEFxHbViAYWioEowUn9v7eMVuzM4uF324b7g2TtrMgE5zZkticAePVrqLzWQYpz3jY",
  "key21": "3G9oaYZxs3wb1SmVnDuoWKUifEBU6pXur4LS9f8ocD96UY35rsGt276M7zpfEAwyXBU6tuxZjX2hWVrAa6GN1eJd",
  "key22": "2Z3mSGRHEufyF4BpPSg6dJMtBerTxcZtmrtpbJtwBxpVqvBR5bT3mGRfMVzDeiX4keVCC4iDaWSWnYLPzz8fjARi",
  "key23": "2LwbA2VehgL1GiZQCzaP3g2fjoNCgEQUrbsBJn3k6748TJVkbtgEZdVeta1WUmp8oGYADHeCxGe4krNY5AbEZCVa",
  "key24": "5fQw9bLJQ71VzwxBsJKkj3ELwtBKSnFaWRYPTpuKVG64sKBo7WH4NEXYG8k68cvSGVbfyXgq9rJhJKXGy2qLSgXZ",
  "key25": "2Rc5vafxnNuTQCLE1GAyremiz3ZGEgshbhhUsPJmjDe9HQATzxXZo8iiHdGaeZmHYtmA9c2J1HopY8jGrWEF4Z5C",
  "key26": "2EBKSCwAZA1pDjGyCkZGQNKGzGPhATicKvWUhdHrBnUn3uX3CRguReAsLCyQXpr1ty797BFYgvcb855XfSwXSMYv",
  "key27": "349vVFmBJmHHA5WRL5szaYuYPvFC3FG9juFRpErCAqhaiEuM9mPAfMrhGZmP7JDtDesCRe8s48RVLoB5Bmcv8vAX",
  "key28": "5Nrnq9WzQzvwtxydMuy7aag3XQo4Hcq3z92NpzFyNYwx3Zo8qkaXT2CcZ1k4NFfWN5vH3Kja4RTc9APwvLxbnhsS",
  "key29": "3PqK5dM7mpPffXbDjPn7FD2JTmUu4gFyKXd2XxSwUrmqbCfAFiUuL4mgdGefCH9LBdN6ESDqh2LwsGE3gCDDSwND",
  "key30": "4fs4t3bAeNjjHyHh4Nu4v41qmX7ZBhxiaBWWuwa1aDGCpib2GDKQD8VA3wdijoThWEVWHsQs4YAp4AUyPRcroWfb",
  "key31": "49UjTdcRx37zov7CnMifbs741MzLiUxBFrEtBqZADYe9egkXKFBc4Jf2pCi6gcMH5qU8PvjbHdYK9MSFcqmt91P8",
  "key32": "4sHU7eYecfES6Y8ofkkKXd8HUvFtrWHhYKLZzfkPgA2EXSM7PEETrxHZhJAwEQ7pd4kzGt34WnVCAv3TkowkkEGj",
  "key33": "4SN5AgYjP7xwrKMfw1PcihDVtbdZXukwiVtcyzaM2x3C2P7xp5mQrWVUTVwjJPPu3nJXcNU9ot4yWWZ5bMRdZwEq",
  "key34": "3RSH9sbsQRYZTGxNbC8KHsGBMbAgVvwxwA8GJFE2BXwW7KTdLAthBTu7u9UBovECf8iN7LL5umxXGz25GcFrkKwE",
  "key35": "5WC22PVQKN9xqVbQrEw75Keqyu4redC3oh6V11us4rqTPL3HRCZb6CpH8XL69q3astG4MWbJEiDRPhLqV1xL3JtG",
  "key36": "5ufBN1bVLgFZS9DFQhorMFF7qmbmSMKYMj5nYibGFxt43iJwidLFTgTzNFwruN2JN4cT9kuNAWxoVTX8rBoAdpMx",
  "key37": "45sLx7xoRZSGbbzDqvPvxiDMipqvLA1JhxMrMC85YCKsFan2zMsTgAyJtC8rzEDHyvAGS7CwA1daGijHpDyNn2Zk",
  "key38": "5cKRYqqDJBEqkGutVJjQYQodKErMDUzbY6QPyGLQ6svTkezPHNs4AcpGkk5keRkUj8Ca5EyFzhtyPpjvGKNsMPMm",
  "key39": "5LfzhZapj6LtcYBGiyAxjscus4rVSTzittXRtivu6hL7Za6w5Veguuo1HAqNJbzwSSwxwCTDHPXZwT9mEL75dmzJ",
  "key40": "3C9RchV61qt4fca7dhrrTwA7BPRSnzqaAx7gAkZr5zfWBWgMJdwZKs1m82RiKM1S5WD4tab4SfAeBYVodBUe7KSV",
  "key41": "3xa5oqzad7nvtzmprUkVj4sqEeaAEUJdB9t22bnuwXj3zxPCjbWRvkMdLSywMQgxAaGEePaH6iwe8DiAFaATyuTU",
  "key42": "51R96y8wyupSBD75rdyNWFTkkJCt9F47mPToWiFW1JshTZ7naE9ttCySWpqd9WSAPB9FWT5ue6pnwfwcb3ggqPFi",
  "key43": "4VfdmwUWP49dha8CGS23Hdm2NBEMA4QDJKMMhzyzDT8WKUyT3TAsP7itaBJbB6GPwY4ir1rBUTk72aami6773uWp"
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
