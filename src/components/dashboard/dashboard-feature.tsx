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
    "3p3t7zgSahJCGS3j8AJNV1wMhrgs4v9xxUJshFH823hcWYzXdcn5R8uqYDHxe52drW3s34VhVeEDT1PPmdUz7FbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahZrJkuDWQcaNVZvgtGJYJR8YtFPUC4APco47kwmgtvcYJXKmNXT6ER14NLrNj1JzqjvSyZUFKKpDatb8qUD2vz",
  "key1": "mpEVsqDvyj3eRc8Ctpm9mk1msKPNT9jsKyiZk3LkfvKKWihe19C4wbrTrPCRyfpfrQxoZxCcyHbF7azBGTdq1Mn",
  "key2": "3E929SgkYQAWkjsNAszV1StV6Q4rktNuRTpiThyKVMMTjax359VKzHPooyN9fjDfRkN8HBDZdWsz3v5XyhWYZBmZ",
  "key3": "5N7Gzq4dDMdQuvoimXJqS5dFhy9uAMt5H8MwJKNjGMGi6e7dpjj5WvEnorbaQpnPevaVTxkAxStY87YPoM4b96au",
  "key4": "5aondzB9m3B3zKLZJe7YpNvKbRMhuLtQPGq9Ur7eHLPZWPn6ojuZpGBRNRmbL6fiMmABFRLk3UHcje3r6EM2qJJ2",
  "key5": "Y6Q4vmztxWwx9H4BcdcosxwTqZZPbJUdy1ivmkHG4nntSwepC7GtMU463RSb52unnxGFt9wHerEvn9YR9mx85Aq",
  "key6": "nnEgKA3FuG5URmNJS6bTpTXcqEbZY3ZsXcban2RvzqkLfGAWjRu155k1uBE5b138Jb9woLNsxXvQFAE5KRTtPme",
  "key7": "293sca1aRHWXHoxE8gMxfqHBigSxtSNMtqSUJvQ1GKq4he2xXA7n8CqbuP26aXNpRVjtMShuB6BkcdggVgk7FGeY",
  "key8": "2BJZMfTiJqTNYACZzb598NcSqL5BQRKsdZb3MNBG4N1sDoznVwoQ6brWVGV5bmLuiX85zgPKUZHs9187qfo4cZdJ",
  "key9": "A3fJEVRbTTSTQ1uYjsZnMQUP3k13Cw8b1hPr6ABtQiGyQYVN6EPUC91UkfFKovt91Acnag6cnAS4DHPPdJsjwXT",
  "key10": "5qqdJsYUEXSqDuRxYMjaLPqaqu96muLWcswxvF3iKFnEHZhVv8h5JbXSLUHEZLqLdvhF3kY3fW3jVVzZWt4hwcB9",
  "key11": "4BZPkqGByQMdDzgggyoF3GygeRby11YEsMAsL3hHbHKkuK2cVKqp2GrYfhFVsnCxgMWSJUEjAbkr7EMyAHQLjWSp",
  "key12": "3z1wrhbzAeKndzwPEguf7CCybJ1F6Fj7Fbb4HexHR7Fq4gPeVj7A4et1QsgtW7siiBctz5Qg8dsz6dBFQASYoiZb",
  "key13": "2uNf5U94xkFjC7GYGTD7AWoaeNrt76YeBipDAKCXcDiXaDQxcboo4WUbp4GsgtjUfA5uYr946djXQHpxDXsY5upX",
  "key14": "67dfqChCGdtzj5JV6GdtDKoRAjqS98EeWJStLNvfKS9phddzoNAhK8ok7GmrQRugTYKss9bRkGEJS14sZUVNYyxu",
  "key15": "5W5oRgnDFdaJPx7ymxiGtRQhT1fqFEBqSrmsMnyu1Kom6vHKKRGVeLJPQ7jFY8F27wQCFp6NonpXAjFxiXukm11c",
  "key16": "5o6KCTCZi11ykj66o9pV88pMYw5ePLvzfwRzeLNXFwDxWsgJfz7cbA1gA3NfhE55JPzWvf7YmUn3TfZVGKRAzzKf",
  "key17": "i1QyrDeBwZZd5LV7ptyGcYzm1faYagtdp7vvy3zJz7CF7gQ4cTkcUZGAGaPLr5rThp9UcZhDBzeMzQE5eaQjYRG",
  "key18": "qcAAG6BeMQnrj8d48DsQ9spkd4F453Z5N1PR8faGZTrPqrXE8EwDwmWRJ53HTow2ST6yFZdfdducy1VTUb17qMF",
  "key19": "54ghFXjBXCZRWcZ6i5oNgjy1QD7gDa6dp5U1WW6MzoYDBwsUpSfmGGvUx9S8czicUNcSALiZEzVnG6nuCJDzpH2T",
  "key20": "5xV5wj7Nn2MVefg88ru7cg5t4iVg72moRFY117nkVvmkTjYadaPiar5sNC2DnxmMhpZjttM2DeX8X7aFmXa6gDSC",
  "key21": "2Vv83fb7rosV2TKv5D3Arqaa753xHnCXVnjSjY1cEqQshQwjeVacLLA2fgpXPJWGDKyCzo1sGMby8re82vtWaYoe",
  "key22": "4vDKdpSkBU47Zh58DeiKg9zj9se9R8dkbYUs21Dgncni4nRo2MqVrZ8P6pw3eay37A2uVrZQBD2VVrcBR8z5McsG",
  "key23": "5A4ixGnfP5w7LcXZhz2QzeBx3xWLYXY5Ve1mracf6w3gbdqJY15srApuowAVypFeixJtsgiNuLb1dQVkiDGcr3rF",
  "key24": "3ZQj3PKRv2rSvsri7UXHPrg1zK54SbZi48Ww4sgNvJdpWcz5bUwwziezvfn1jyR2iKe7zPVUM6bPuNx36ncJHWBd",
  "key25": "eHAkHdHqoP9w7BfcHJp9eEuGPj8dRodXtDd5ydEKdwf8juHGnaXHkLj3GFBZqXjUT2JHCzgcZkQnNe1GhBYoteL",
  "key26": "wuqwGaDqj6teqXpuKgN3sLRpXi8oqcTfgxoMzLEaSAUW9k4o6nnuCi8aioEB896qSm4hfAU4NmrCp7xmAZyFrzj",
  "key27": "5GDcWo4mvJbEkt9uqjpnQuVKpMmmTnv4eNiJp8z6S4gWqvMWigsKpUMcQNGsuJ2JmsfazVc4mfFiHAe3jWHbeXJE",
  "key28": "63mk9RfrhPrsynRjxp7dFT65ZDGU1yPioHMb748zttNYJLrAvp2vVXwMJUvZaoSxQhT7qYnwCDjG5bt3SPZs1MMG",
  "key29": "4QLUaw4LzFHDwmDG5nXkqdQbLvhhnyxVeKe8dJiRdBhBJqpdABmtfUmWhn5uiMU4zUcWRSmXczBMepr5cbBpXt4U",
  "key30": "4oy5yzh5mmvv4vpCXDqAEreBduzXM7FMRnyzd7cKyPbVYnPdZUbyBHk5Tvu4NrYSWsF3uATrPUFsh7xtkFpJEiMD",
  "key31": "67KfpQtGQm3Am33DzgpASfRFt4JJuWpdYfx2pS6Z2N2BijkhJWqqxY5RiHeuf5b1HCADr9rw899PuTGZgEvfvZVs",
  "key32": "2Yn2VzP36Kykh6qJegs5s7mNbcXTueHXofj1bxdXMeJX6RoyNxXGCU4ogW18j2xcTNzmomrS2YkUrw5nuaGD9Hd7"
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
