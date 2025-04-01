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
    "5vWiyzLHhuTmPV3wfkwJgmxTD3zktcBmaC9FZGSgQuSv7e8rMyGbySzZbdDUnjantfBQ9vUxy6mQyjC4XzC1EPJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSR424jh414NjCXgW6dRbvPqZjKM8pDLNw4kwQsAKgEXSVDVRM6HtpjzitA8gsbaKzthj9YdPv6h7FM6uf5ZmNv",
  "key1": "4XvUAf5XvdwQ8m8F5V8chpPHAb8XTupbjAyFjSzLXJN2fwSuvUGfWXnNhoPHmmgM745A6syFJ8WuLgFTLWgqKxP3",
  "key2": "grcx4N4xPmkXVw3RFeZcdQRp83DBk4eHjov4o8tXtfdibeajVgDws1vZRaA4YaB3bPZcPiW9cuwosmUr8pyz9Gn",
  "key3": "4mjodXp8aj7i3u1zDn6kzvUpK45UAzFcmyWWgz6tBRJ85i5GKaSZLVXEgTHS1k4L9V3qYgjfZrAA2HTMeJHehTed",
  "key4": "66UUQCbGLZsxhay3EMgp5nkYN55Sgs37uux2uWyNuFTftSZXB9HaR6qKtEKnkpw3wDZ3VsCzAse2hgCCmnfhofmc",
  "key5": "4LGEbS7oSAtcwBiSPzJAdUpYDdTu22qMPghpRvJuafMHZscGeSPaX4QnaMQz2pcXEj3Y67ZrWPFhEzmpyT6wWH7q",
  "key6": "5oEWmbxDoTd9NvdZhNNqaz56xUTuGg4HHKxb7CaAm6fyL5gcc7bney6mk9JCiMSpH5SAwek7kGjfyvfkYPmBxeBK",
  "key7": "4ymmw9UuKCsMkB7syz8L3QmAymqoVKsu9hkEvMdreonrS4sjtbDpNz29JJka3vCBgmbvUgBXUHkP8conwLRSGty8",
  "key8": "bXmY6t38csvvyQofSFp2b5GLRCyQ7vqvuPr3ogGwCfYs8uVFLPgXPmCsgV4fSRGiTG9URsPcLj6pQh5Rky5LN9L",
  "key9": "47bBMnFkT3oFNkF1UCW7o9MvxFsVE8uh8QMnpE4i1XaLbdcULfFyamZS2aWNZEKfTg77Zi51zjBTmRTkRRUBjVYC",
  "key10": "3jwjJiv2nAMLdSTtSDwXitMXUWeuuECer7ewp8A4psn37Szu2nMmZ5pqLbjGurZhdGpc2RjfkMsv7JCD6ibJSmR7",
  "key11": "4K7kAeLqmS2sAXTriY7RUKo3BAJ9CX22jB5qZ9anxukJWFqJY9h6vtxjhnbNjLYWkCC9rhAZ4YcEz9DggQG5DsmB",
  "key12": "48h1Nod5eup5WtDGL4ttiDkW2EJCCnxAtcmKEeJ8111waVvXfdQxXUpxAdFgaGQBBWKm1aj3ZugubzaSF8qpqc5V",
  "key13": "62w81gQ3xyhRTaubSoLFGMJYZRHKZ6Fxnj9Z3mLcn7xyAKziKei4dY2qq6tT4yFo7wzb8BDLU8rqHUDyMPaPYy4q",
  "key14": "61Byzt4aWuvTBKR1HBA8QjZdaFfKY1VePjwQjBWHvgE7bi71ujDwt44gruzrRm2H4mRzE8kbaypQR7HNYEtwhypG",
  "key15": "4x6h8KntT5o5wYRkCmsEu4uUuz3zoXpgXinyHQhk9grfgXbZBRk3Dii3SGR8kyuCRiMjusNeSwe2tzgxoURanaAp",
  "key16": "4rEj15cui5cEDxjzAT7WPy6yYV1jrF8h5chox6Vcy1KdRMmAfkQDtTANFcz4keyMghuncAme7odAuq27TFALm2P6",
  "key17": "44C5DXw6a3SiP4bs3CnHJntKX2FcnSqLj7iEai2q5aUYaDcJr7wQ1YTi44ssZf58K2vxxyk3kqqQJ39WHAYP2ZUR",
  "key18": "3kd9KwLSbZA9ioejHVsgTMDgDs1w5e7GT4pjG5kgHxPhz4yfeLAYs6YruEuZzqMXwhgXHtBa7ciekNMC1s2pbUWV",
  "key19": "3eQyyZYjJuBFpVGW1GqCGe1q6D81DfRf596DiLkLKt57zkxyAE8vqCRKwAQzvYW45xKJdgtRKwnromqqMWnWZpQB",
  "key20": "575UZSYYWSaxTzWZG4ixChRq3AUrtGbFVwWzrmXTY6sqkzHzadNLNmPF7XcQGLfkT75gPVPRJS6V9CzDtrB92mA5",
  "key21": "29XAsAocJLJYnR3E9SGdFe7U5b5Lyvs4oV8CGRngA7kyFFk5ykRbm4YFXDcSxknFBnRXv3khseZGuRJNa9Q7cQ7c",
  "key22": "2o8kVNdZMfjWBZ3Kf2qLsLfnHVJHjZ1FwGG7WZ8RZvn4CM3daajF16PSccENgLiTfvmxUJU5977R5Gj6CY52A6p5",
  "key23": "2Dd1VVatqQxTXrYKpdAPu5N1hw3wLGeapc1g6JvQ1xNT34qAuf2SjsxzYpdzWh2XHPYLb1NTZXiwMtSeij2cEeun",
  "key24": "5hVS5QDMcJ6RRndz4Jbf3WTc59LjSVTP7JfKgDhsUemdArWYD8owMGffQ64w761ie145NXiaM5bGxtVh1K3y7RtB",
  "key25": "5iMNgRb6Bqw9yAPqPG3CZdHKchJ1AruCmh5DyydXgNU5yhjVRugPSmuhpvMMwZRSXtXZ5dAuHtGg1VcffVriqXUT"
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
