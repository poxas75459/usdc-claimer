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
    "56gA8fP6DJ79jFPDRgz5AYk77aVUzaETjxvxynsd8MTbDcUcBbhcRCT5N41Tqgv3GsJTL4tvQYKT6Eya7cuJehcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjyGbDAzXAwFn2YsBSj1WpAveMnFt8nyJej3FjQL9v6iqy69QV4sCHoxZ6ovNkxDJJZfeqX3srpCKf1sKYPBRGS",
  "key1": "3fJHaZfgAHW3yzj8ZLTyVESvmZArvG2gUdYhGvCUQxt3VoQ9Bjp5VEEtd4u5rrnS5RF34PvKxcfJy6YUKiGTL56j",
  "key2": "288sdHjyucwwZ9FcXyjK4KzVLZWRvayzZ6BiYfZv8yebzvFotfTthwCYRacxQ3mpNqWbRMxcxPKRCRKEuvVfowCH",
  "key3": "2vGdBTXv3EDbcNy6Ebzwerm9saBzZ8Ezav7w9MFK5jTBiq4o68vp6Zsv6GA4r6Lnd8vxy2Tf7hYJfGMk1C2yYaU5",
  "key4": "EqGQPp3wWx7jWAkGPeCprjKiQs85iy1hHRJNKv6ooD7mhgGrnqAjxBfXiZUPkh1XsVSsbcNz7pCoqRHw8nR2tC8",
  "key5": "32aCregBnfrp3a8Czndd4Dwhyms763Bq85ud1Vo7fCzuwQKMWqmiCrbZPnJ5hoJAq9WiNze8tEKG5uXVx7igC1QH",
  "key6": "B91ezsyqnoTPhCDKNm3s63CtxQFexiYqjYHrNdg9jpTZTPZ8ErJAihh57rjbN3MECh9iiLiraYL7DTDvojgkEUQ",
  "key7": "5cxgzprUBUoYiTsKqjJgt6cLMrXoN6cNqvZpi8yK63s3EtcGkGNK1id5d9XwDMbjY61PHGLuDJh5mYHP7qVSq7ZN",
  "key8": "2JEnhFsuxFjewhk35MeSXyCrLekCuLTp8H7Jw68hkW35F9HVcbAse2kuoJUP88n8e6jR9jh9nJcNcdZPzjGmDq5Q",
  "key9": "3mVrdcKQphgYRhokXUcfmRLdRWFrGSu7bXMbMsAUZx1739x1tRGieUH2LZQbaUqBjN877jxi13bZ9BW7F4uLEiE6",
  "key10": "29mPdy9HR6JqTxQibc7YYV54Jtn1SDTLHtDNzZkrptGTkwBz7oTVheG5GNF2XC659MLYa8UV9CAiRtXjLG5G7joo",
  "key11": "2jAaoZfFGxP6GQAVuFmUS7Dh1GfWJVvshpWq34Hzvjqd4oJuExUEX1okr9Vkk6MM4budAtSDm5EmRWvzkPFE1qh3",
  "key12": "5hg9ieeaCUWH3Re6Dxn5chLWhkkVnok2CK5uXhXxsvDMg1xCrFrpYxqKb1PZKk3FA6PPW9yry5c5tJbUXDVjGE88",
  "key13": "37MCn78LW3wFUuECXh64jNNiFEw3ivNUAAUYv3CGD4ssJMr3mGwVSp7z92oY6xzbnQcsAQxkWVwRX8idkFr9rSj1",
  "key14": "2XKuTFv1s522oSh6ppjXifvhy2dWAjTJd6RGZMK2nU1XvVSRPvtLotU7h3jQPCLnHgUYfAuDwwHa7PKTDyuJeqx",
  "key15": "8RVocWva3ZvMr8cb1zsnfrMaKkEdptZK1JWyWtAPGJmj385ArLB7NbphkLYwVqrLS8gFZn1dFPJ51aX88ecaooQ",
  "key16": "5sGfEojhE6i5KdJjzd6w6pbgevSgr2qmkRXKLGKmScKQzG9tmHA4ANfAT38evJj9EBVHeQVa2kzAA4f7f56UDJFa",
  "key17": "5de4TXdN33ied8FoMMaV4QTMrEeQtvKehRonbfvWBoPSZ72BQXNh7fb1TG15YddPvSwaAB2CNHiUcPZiYhTvhSnz",
  "key18": "2d6KxkUY2UD9NMD7NkQHTyL9wZuiLrJeqqwgCQf1CbJK9f7hHicjPuSxt5cphpNfMDcCBsqiXYSJumEHWLRw6JGK",
  "key19": "59Wk6eCzV59krLp22atfTmraNMs2fw4vwTnqWsSsbTAbYk6NZ5sebj6TBbnmEeWHDRfkEnc2sY8CYEi4Vma2sQRh",
  "key20": "46szaZhmoxQucDD7h3hjKgJC7mJYfVmX8DeZ9LtyhkE4zBvVSHCPdZmWmL28C65nvnGjq931GNkiuU82EaxWdtXX",
  "key21": "5ekubNhvxLt5cDyX7pzuZQAh5ho4vH4q1QpxDgp9Cz6QqzGmXXxUDibedVnGPSofbQNziiwN6v6ZekT2q1b2Xu9H",
  "key22": "4WQj1aayDqCpvE6sF3MrNAnsq2bx2gciHr7tBiLDhwS493EMRkvFR3A8Fy43BMWGzBXKaoU4uLdoaTZ5DioG789F",
  "key23": "2Yg7V7cMmXSyT2atgT73TUCt5FKTCofH6zgP63Mz5F7VMcLHYGuewhAfbZtS2Jfe86a8nazrMG8z21TpC55U6o89",
  "key24": "3PLkGJH4LuWUogDPmypWp6qqiAFTPWcd1sbKMRBJcE9tp5RoXpGBX2u5rasW9oQ59wscu6rcSrwyFyKB3eQnw6YP",
  "key25": "5wHhz6ce3N2oXZA6KyX3mVTkTvd74gvMW3xEHHUZXZtk9ELQTSLNqmT95ETbzxrXx1HD277fN57dYPpKC3MdodeB",
  "key26": "3E4YY6cFhb3z8NfDtsrawqb9ovKH4WBMmm8JQUymjuAYopT9PZfgSLDWgqmGkEtYizr9kqTzYmDcU7PUMQwhDVU7",
  "key27": "5zQPaW1ZYQFYg8WdKV7YrLZN3y9D8pXyGpMwRHXTuxXLJVMyxroCW3WqxDAQeYMRa7ma9Nvwr8pvLoZeFrponxat",
  "key28": "RdHm5rDrwZAEB8kYVfUHoCtfdwx7xuUjrnQThVVcZzWrCB7NN6wn31YG9hwwWpzDEXbpvzbeJ8TPZPJJtQBtF3e"
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
