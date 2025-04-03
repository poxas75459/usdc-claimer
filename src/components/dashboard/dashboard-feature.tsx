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
    "3EVrn9cD9WaJiURbT6NNS3XLJ1bBncCaFeL8ZWGQyYSUf46e14p7rr62Ti72yXkMp2rrjKsHTJ9grtYYAWQG2Bqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46c8XPPqmiATsfSyvcKBa99241w6eRD7zJYxmeWbCcgGL8XbyTCMHGRR53qzrtGW3AK2NZics9V3uFrMMdgCXTYr",
  "key1": "fpaQiKQpog9aHX8rqNCiVzZUW48BQ4fHZ3yt9dsdF8vDh3Zhr21yfrTHxEUiw5azKtz1Y5Arwn18acaqYkeiy74",
  "key2": "wS1qtGFxMsXP5RVDqzM1bS9d7hdpXBDqyctqaHZG5yEyjDSuAD2LSiv5HSm8YBdUsf1c6TcbrkyWDGxkF2sXtiX",
  "key3": "As4M7BN8AXRUrXU7HDL23stv5sZnSyWoZatoq1ZkWDazm3Z38nNna6MJAs8j6jk1xgPmpmTwBQmYzaHvT4vLf6X",
  "key4": "E4URDTgXDZeEiJ3fXE98DZ2Fx7AfUc8SB1pya7nx2LyM7vNFmR9G2P1Q8w3xDugSPTeftDfZMWGXMzb3ZGYfdKA",
  "key5": "2ju6mpJ27JjntAnXMdTkPXzw5BtG1umDnyFmb84MpmcQkZnYiGdcqkmXB8RgCbgM6GEiDh6wyS6t1me3e3Tx89ea",
  "key6": "5qY5RbKv9ZyFwnfFsKnzrxta9WwsCxpcWvRicX9UXQbC4G6MhQTteAKjj5FKtWe6s5kfhtFa9xWbCTT3H4TrAVsc",
  "key7": "3Qmm3CZnkKGjR7d1QysdL49Q2KJB3YQsdaRwjS2YrcDQvDr1DVaNwkteB4pN4BdHA8b4ZGvgqcxo4ZPzNPPaeD4r",
  "key8": "kRJZmJYrdXNy8Pmjuy2C2PWsnfBPTLtdmyhMoUMb1rhX3SAfKTXXYLHjhdma8uFMWVFFh9434U1R7KwLS3yKMRi",
  "key9": "UzzenhzLbFA9enayQraXme41AoDgTkqus66oyikza4KPHzr69rsts4G9Fw3Jnfad3PPCXiDDsAp29u1RXyDvXbg",
  "key10": "5rcQoPgj9YTanXf4J22rjyKvGxKSEjevvh7mbRkhsnSRwa3tEAVzVfj1Snv3UQPmpfRG4nGTvxYxyetmFNhoFb5A",
  "key11": "5k67Hymmsj1Qhag4VjFvedtphVf6qzCyuv1XsLZ1Bd6o1bbkUo9FfGhpssDAwypJAGxPniNVhKmYr76N8fm8dxJC",
  "key12": "4G5k9iWDvpi1SgcWERGtMFKaU2QoaK8PZvW5R6fzUuTiJtqZcqaj4S4MpMmcAHixAtyT3fy7nCJW25jqzr24o9HT",
  "key13": "46LiCFZ8QXj3x56vadcMwpPus2xr82nJwRcfdCSjWw8mGqYFce4X71xJA3HGw6T3tLdKz5G5mwEfh6WEiyaPUTAL",
  "key14": "45kmXChXF9XygaAKELtvDfGjZESA656Eup6dEt21UxP4WrZRCqPuwYVWYmPsUp3ApNdZFqNco5h94XCg1zkmxLoh",
  "key15": "5UCVpNjzrCLZ3xsRxkinLSW3Rq9AhS6pD2aymDoJEtZiCEJ1tVnLBupNzRhyDxnJwd7eCW1bPdKzKRCU3WMXBzHj",
  "key16": "2vgERozEYYexUjtuReu1YJayHRqtzUhgwQRN41xW8JKR4X69TybLzghCtJ3iQCWAeM7sRTEpzxX6fRCaoct1G5fe",
  "key17": "5V9azVESw29w6Nc2oEQzGjUvDV9WKFW9TL5QUCmbby5DJVKfjc6aMFhAyKXaETVw77fm5dW7c8dzUu9DGqF28J46",
  "key18": "ACKMoCFtdVmy49a9cut7xGjeK5bDFbeAncx9uMjSA7tnTC22NDV4zuvWvUg4YqootMwjY9VLnsyrjpjfaDPXiZ3",
  "key19": "2NrTsquag3TEKwZo7LTaVdKK34brmmZH8frEDPiRhhY35XD6z2RpFkj2VewoBHpFkEgiiNskE9JbJmnuvjsfKVD1",
  "key20": "2JS5EbvxdSyg4imL83PxNNZyYzWSRkxBkB1KJ3N6eLvBqvVbz8tAwV2AVfbXqanrVUZ96XiUHQjh1uBset1HK126",
  "key21": "27iDqGUxDTUii1M2atUNR7NLKnDe9mRdSKrfJXqZ1KDh28xc1S4cqMXxE88gCkmxsx9e6RsCkd4c3FHiD3FsVUSA",
  "key22": "KKd5Eeqn9nEpCu96BX2HAiod5LroHBC6tG9KKfYfbmrD2YLCzw9XxpEMBRnpQSmX1wEQaLuCqMo9fdJMN49BSaW",
  "key23": "2ozz3KCJHFWkA8EVTk3PQCZFxs1G2As2ZusRoYYRHPc7FQ1DRijGQrGBWdDg7FDXroYKGsu2SaRw8tnZoyCZUbmP",
  "key24": "5JysprZJenfb6JobJSCkSkNg5xgCqLjUkuHyLhTYo7wnU1Vu9cZX3Dnfu6ikoCTdL9WSWySTVwRNgvDn9xx9oeuQ",
  "key25": "wWomdD8CSe61FGD1LyHjQAkVbZ6PBz5WgNy3gc6JVNNaMD4FFswfYgn6dQw4NMTnrVUoXhcV9DrRqh4vxvyw6vY",
  "key26": "4ZmPytaBnfpVvbqVNQmsZcsgQ5V8bz66w1Asncggk1dwWXXWCVKDBKn2khiG7LF7bR9yeMxxWjxkWg1ehuw9w5Mv",
  "key27": "4SynWuvkHSZMokhJmF3txbgh9tvwnVRE7qbvG3JodZbbEYegisNfdTXmKfzVd1W4yG6qRHK9xQ23VwQE4fbxTJfG",
  "key28": "2dKAcRzKVR6J7VeGQNfzm2rN545zVdZXwUhU7AKevdRjjAs7XKLwN9sVt8ArH7Prh4nGtyTRppk267WmqEe16Spz",
  "key29": "2vEVGFch6y6msFeqPtEUd2vgovme159ewj1pb3GM6y79mJuuRX1VSvdqw2yjV6i7fGjpkqXdtmXTjzc9rZSzThUr",
  "key30": "4bJKqMNnWZsh9czmc3FB7ZL1tyeXVCW6mxNVnQTbt165gpDtNmpNMvEmUMxxvJkmtXC49ebi18r3yg1xaqzaXgWM",
  "key31": "3znKg8cD9gEz8pndoE1Lhz3NqoNWoXRfUSteD5yaBXqPSib1nv8QX8JpwHAetiuiHUbtFVL44xgsJtktVfEyLoZN",
  "key32": "4h5EwVR4tTggUXXaGFpdnVG5TyB97GvHqennW9PLhWv2mBQ8t2TisqzoBpVpmVLdAv2U57d36sn7Me8oqPPiiKz9",
  "key33": "45MYZeRYn5Yd3AcKpKbm7BQ72jhpnSyLHhCrhkBDaiKxRWBBWXf4C2tMour3z8Q3wv5fusbhmZvpD35PfZehuJAy",
  "key34": "4cLDcsXjysYU2bUEyRne4fw5Tzczc2MxEoTTTzXEXyJkh3shqGvWoBm9AD99V35hwfxdfMZNeW3Dp8wJfQwQK8eL",
  "key35": "5ix5qgKbRwMNDk4AMJUFfutfZ48wRPRZ3wVEDnkXHGtMC3b5GJwoWiHN6s8Ze1ewmkmA1mMGruo9drNUXNGmLwXL"
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
