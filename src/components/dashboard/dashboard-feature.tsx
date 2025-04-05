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
    "5xiqAcr3sMCSB1tV3De2aZQzGCC6c6jY97Kq2gBNzrCndFJvsZBjyUaBoUuqdCBnVsaHhXuKaqaqtdDUCnAjLhW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nmn81nXUjTbNkVCGZVhuMMv3VaNQVuSshgMTwWAiqwH6dXGwewjq27QbxrDPq3DFV9aWfezUhNVXLxWzDfEdie2",
  "key1": "5CBq3GdppWfRNaWq3m5yyPs16ekymJ37iQpqYuErfbXaTMSYCLPSNB1m65GU1gP356zRRxnuGRQ8AZqPSghRtzCP",
  "key2": "5sF2DsaRx6Bp43hFHUFtRr68Zjbk1QgezS5S5y7ughuhYbYsvPgM3uubMqPwTwC5vTA1pdDL9jKeAZWqjCWmFDM5",
  "key3": "29e2wVHoePZg5HmYfTVBNeBhaJRyq28oGpepxzsuWD2eYUeuziWi1Com8NJTYhSa1VzkLZandwX6hdq6xZXzXUyR",
  "key4": "2QAYBoT1AJvKyjuqLDsR31rRJei5USVQDtPWbXvXSvYgu24m4XMNLBNxakZwYNNmUzsgRYmKdNRn9hkuvHyX4y9c",
  "key5": "4KgqfFMN6XQnVoS43sdBkCFpJP9xLagBf6dqpvPcUJPq3nc56tNa5zQSRtsgqYfCjrdunCwmoij8DYcLJMiWGAJy",
  "key6": "5iWe3UxGzsf9a65TC2mcdPcaEK14e2dtWXrPDFyJzxzCii4iSdEpnjLChBXEroz4aHY7cxDZ5JS4VxgPLaJ6Ca5w",
  "key7": "5SfpWdNyrsM7HVZZU8RnYhf7CPbuV8oj2r6k11w1aLHf7wCjdTaGyqMRP6uN9uVKhjTj39bVF9fZBz2rad4ampck",
  "key8": "5kQyrfTDpMtARsruSP4oso35t3WjLjtyfVMP9C1MKvxjuH9yNjRp68ZazsEcxqszaq8anwqUkhuJdBHeg2XEHY7W",
  "key9": "5FcPHXFcGC7QvU97r4QMG2Jf3hvCQAwEapRHtX85VG3HZs1o6xCXtdn45CT93WSmgQrryarEDYHB3b9dMAP9kZPp",
  "key10": "62zFBZd9Q8pXJ3j6gSuvjWqcTAZEpHXVCgqFfDHLY36JZF4MtRSKxAkEoDPowuJeE8zgAhJQ5EQwPBjy3yeMYGSF",
  "key11": "51xQUy6qja1zZd6nhbezvhuSdABnqBZfNaHxns9J1jKRHgJP13PMbVASwRWjRdxoG2TxYNcgPABqpQA9kay71nzT",
  "key12": "5iVrKxFbLeJ6s7gZaZfZJyeG4MRioDjxw22i71XC78o2HGGPXX95BRrp6wsMZLENVN22et3D9C94wPcL3AEHxVZi",
  "key13": "89Acr95hkiYL1K5SFuiB7TUKJsAFjKZHADPiBFzyTCn6yBQq52UNRJPdS2t8jPVC5bGcmF5etmkbcxQyFFL1PWd",
  "key14": "2SMLor3F3Fk8poFRgGtEj5rmw56wT7kUZUu5msaeLo47YmBq5mxXJ2eM344Bn8izVkPqkjVZ7kouAb1skEx7pBsc",
  "key15": "2p4rNBSKSyry3juJJnmzF1mF22PC8aZbLji3d8zGHd5BnQXZ5yaEm88sp77bJJSBsijacFAXcGVkeyC9SGnUW7p6",
  "key16": "5vXWSKfDsLwmdECpQrUEn5C1vg9DCPnf8YFNdXq6rF19F4xoYtxGoAGdmWbKTD4Zoy6B6EfZZ99GbqPv62sTFhUd",
  "key17": "4XioYqMpikWR8jqdegQ1HhqjHJRqTqQcS8jFocQwL96L9TBcyT1UFQccqKXyuNbAp6h6ditYHkVzqTNNCLzEzV6y",
  "key18": "4PpHyqMbNKGQUKWhduFzBRDaGRF64EezuZF24DpyTRek6HKqmqrvY8f9Gh9KRN4TAinQj1RAXb4szoB6fCXnon1z",
  "key19": "2jKAtabywDmwdgsA99rsuDetuoWMxdBS42avxhCoVsWVFRX3XYQDLeRK1eQQHz16yKwupApsK52zoW3tA1ouq7S9",
  "key20": "2hoHo2Ye6kLmkhyk6gwTADrnadsSN9tqzvse3BHhDo53cRTzeoHJThA8McLZjX4hjaF1US6eZsq61PGMFecdoRP6",
  "key21": "24wD3sq2xFj2WXRzCpuehXbsdQNBMpZQpuSBCXBV1LccskkKhWMXtdRvefaErZC5SGVv3eKQ13pJo4aKd5KweMj7",
  "key22": "dFAqenF2J921kSVGahJNVoghHNsxhjqkqJB2AFrU7uS8wCpCrAGkw7jmqFavDmyXqy35SgBJtBAjz8L6kpudRA9",
  "key23": "4icepohYttKtHJovWkQxGyGBBmkhXXTrcGn9QQdaeqHCY7vNHnGnzgbb7Z35n1QCo5bit1pwKAScxeLvbH2jrAEk",
  "key24": "2iafNQkeCu4nNkwjnv4NmHLZ2w2FqDrJRvoP2o6eSADujqr16EqRnJe2DorMpcyLqniNJN8XG185RDGMvtjoYgCX",
  "key25": "5U7EjkiAXMwJp14JBhAZHQRbKWvQ7A7PrPDf1fepQ3zjHKzqwVy7nY55xVhVMiieqdehuRDoHZUvM6etNvxBMsc6",
  "key26": "47Ls7jEurWwKYHjaHuVGwNSUJDXkdKZ2soG8zEHk5SCCr9CdgJuXxHGUWGPJMNRSphc6jySmRTKv48y1SRrBZ8zo",
  "key27": "3BDwdM6k3RP9Fg1bVruxCtTo5gGE4PEjV6xyBAeceb5fLLjHA8SCjtnntbZj6kVHcbUggvgd4xzdtmmfptSVdySS",
  "key28": "2qUrTN4XPL6srUnAFz3KkR5s2N39H8DjyTNca9osdnH53ubsusz3GwbjpE8VKcQwZJbrF6TwsqpmawXDc8vFUGAb"
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
