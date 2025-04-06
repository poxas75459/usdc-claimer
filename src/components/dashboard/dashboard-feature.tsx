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
    "3UsPsHnY3CVcBjb1geNq2JALyWC1qDPrYCLPrcZ9WmRKDddhQmrcxBwsYFk9XPWTqRg5VLQ4b2nWmbgyueeXqxJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43sF9i7jCkLqfqkzfPnW7zkbzKoYJMeD8q24Kftp25zPFL7ZXF6LgmapS5aCUUokiX9RtbvBTcfSdBEA9r5auxyD",
  "key1": "9WnCLbNQDSwQDbXCqYvDkAXfZxmjX5q5CHM4jn7cs7yafLdzjDijQFNHTJxS6UK2rHBeyFFcY214ZCNXYgbXMiH",
  "key2": "3v4TViJ8N1rkDxgNNdeMGAD7XRjBpqnswQBktQkNQiwAjuZf8YDQRFqbAjiizDJ84MBDBTXDa7PohMP7MrcZy4us",
  "key3": "4Ngo4a3Chp22GcLidVsUk8wCsxYXhJErkFQ6Y5YDqs5ZA7QuFrixfZ2Lp2U48XEnHXChpjNo5VdcHW1MSHHiiZ21",
  "key4": "318BWrBkWHVhkAeZX7KQW6kH2tP62HjZ9j2guj8X41ZjW35AUi4hpSnpu72XPdKXwqZfHFuiMzSae33W5Nq4hrk5",
  "key5": "5n557kdft8xJ8nmNjaWbS2dkrWHdQGQuJQDNJfRXuok3Q2mSSQDaQs8Czyz4zgAmnxP6pZcj3LTDM6t6wV3cuyuo",
  "key6": "F1J4wJESezqVV62kvfAPprpEdrQN7zuRoHzzrRNL6aDCfQFDuosPrzGVX8NS8tZReFiKeqbjTGcEnCQbxkmsroa",
  "key7": "44t3Nd2ZWYTxMtWTphMprWMLtb5NEDYBfjWTmzhRQty9WyEGFoaFsY8eFYbsTzU46ye2P6Rtj5CqgF54ysUA93Du",
  "key8": "3iTJF8pciFjbw2R22EnLaPcYv8m4zdK29cKqryxEzYbXfD5RkLK58WpEXgy9nKRAFKpyW9h3jnKe7gzzQbMFeywG",
  "key9": "4SRP3nbzoHvF1pBkiX47gxrGTJ56xHYYxKF4ueLAFrquctLHjV16yexoLAf5rRLzAnxqaewa11XYZRU42LaqFgJs",
  "key10": "4tzejdTKYfQhiv3y7yhgckFPr9gUimgveiK15RSoA4zEfBenMT3v3dhYoQ38CyTUcvyc6m1eyTPqsbRvyyEfBFSs",
  "key11": "4mGfqUoipRLknG5eDJKnQiM1UDKTQomnpAYhGUvmwWgjBZeBz7VvxPoJQZJa44KVA3a5U8RsMfTpxhf8PGHn1zuR",
  "key12": "2ipjorKBJS3MLmLn7RMpa9TMX78TyDwFiyPAkLdUx42FGZnPwuunszkC6J4hLQCzmhponef2Wp3yidHLdT2JCByD",
  "key13": "2B1nkzqZ5mMKcRykn58VGGbeDB3LiuipJQ8aRy4hAUZyjdaCDSeWCVFFGdoRfiP6d2PgcNic59ckUz5p46HBNjUt",
  "key14": "4fhwxR5GM9DUG6Ng6jAoXc4DtwqeEasRRat5fLuNJCakwbtefTFJDKQwxYBrEHPp5UdFkeVFZPVUv3TtDjeVinUY",
  "key15": "667hpYr4Gt1yEjN31poSPBE8hqPpUkfxbNpAJSCuxqPZt4ySMw9r711xeftwr3YLreX5VVbwJAjX1NSME26wACf5",
  "key16": "34Wqc71448mzX9D1yPujnhvD8DAFBeoPSszcKWK8eK4gHaA6VFJH2n1B5znhmqB19wxSfPERGdimTT3WriT5w7rP",
  "key17": "2Drm39gZJADKBsUn6WPvXpEekqjWtpcS5goDjXJPCSrNb6Wr1A4vs1i3cWECpPQTTakKctSsYvZoFwZufr8P7XmG",
  "key18": "5YgJJKnCRuqmdKz2wzN9MRwiJAh75oDJSr5ebP8r1E1TnUKXBfZ3FoX83ZBA5Rqvo4X8v1TpbpkMdQc4YbJTqjjS",
  "key19": "uyphHZ2f7yo2j51FYs1iQw7MccMvu76nXNvCQBDYAEu3M2zVQYEgZRdb2fB8Bn5PKe6P1vNEK11z6bVvoDk5TM9",
  "key20": "5e2bwyQVFeShh8u47kQ5zhuS28qb1jT3rjMcAE57tJ6SzfAv86EFKysmcWu4ZACaKDw7D2mRtqFWmqJrKYZhotn7",
  "key21": "wbKUaVsTVZ6h8N3mZJLTBXBYXjy7myh7TAduQ5HYoV8veADrXwhuehWVPHd9vpdfmd1Xy728H9z8un4kohMPAun",
  "key22": "5XioJ6LovDQUWx5nn7KvnVRgKpsnVRE7TyEz6YLk7TAwyYrYGhi7Jst5KCjyivzyYp5Qy6cwbgwzakLtWCtRUVYg",
  "key23": "5k9tzssEfE7XvGHUgYkBHS4MwhMSSvDSi3ZcZaXAAgxyqxLkHj9fsE61S7QyPnAdz3HXsVZspiyu27BrCgoRjYLq",
  "key24": "384J4ScC4vVfqYW8UBPXAanU53nPF8KLyXC8A9ZyfbmNbeMnwAv7p3ntLrshu9tqt3xRDAU8LFdsZzMrto1UJCaS",
  "key25": "43zAqfDnv5hffZSBJMGNMG3RdLWk7konUcPM9pGJoYCkgt37pcVWja4BwwaUeJcsvG7KQBZSYAGgAVKrENMwzinH",
  "key26": "36x1S7GjtVnmCURq12ddD7kBtyzr1bwtGBFwPwC98P2E4NNt8gZKMurZzbWKU14Mco4nPhdExieSedgaG6D9ASnf",
  "key27": "5oWFFeyyRawQwyRbvSLLRpxGySZX9UzjBiCHtVzdakw3XSD4zX7J4prUcfBUABATqzHzMP7GCZTeW8eiEXX86Fir",
  "key28": "3X8rBZNBTg7Z141pEuvMBRW5mJQfAQxVRNuzn6GB93MFwwcyAnDxD6APnYPKkBNdkpLzBYi7qreVV2eXCbEYUZKP"
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
