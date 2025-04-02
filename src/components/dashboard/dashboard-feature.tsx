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
    "2PmGGd2gxXxwJMGB1r3XHDUUPMutLkhwXtYoGyX7eDHuusGwGwoqtHSswxQpLGKgwduYVRnWkbjwpNDTnnsLaFuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4DxYcrJ17hyNNmQutY4Zh3MHpE2y9nRozfDaCU4tVd1EXmsNGnJY676qstgCE99QxLJBt8vYXseYevZahukJLQ",
  "key1": "ZZeKrnoqpKxRtrxwjzh9MJbU4HfkrZ6scchQX727D8AhPkQvBDS49Zp8XATXWBUzKgZpRfP7KyxoiaTXtiQ7A6h",
  "key2": "ZXWHYQ7EZvKV9zsrqKFy7PrFf7WN7mVmA1AKXb4ZXzgHQfC3VZdjdykTdAN64k222g6fA5LtM2nVvoV98TuEBMA",
  "key3": "3EWesLhs82qdcFjFDXXqAcV5u1GNEGized469s9ZGtJCF5WdeS4jzBGDiN3ZvrQvdfmTBmGhpomYis6SpWH3KqDG",
  "key4": "5m3k3nxSEPZzY5P4TM39HTjufBd6fNYsdKuwb3z8h7GxyGSsCMGftChmK3Y7DzRx5a876bGM3gCXBfMkh51t44Gi",
  "key5": "3PuKqgQghbAAYaS93DNc4rwftGSnbkbEqyob94wLmWRTvx27mpCYB7Q5VJYzNRSTABD5AbJYmTxPJRGAVjbdAa7M",
  "key6": "3hVU7TMHbFzkmDk9GpDXf9ftx4qZFiHit1pFQ5ihBwcZYMhYwxygwLtfhZKfSL2PbEPUnrVqagDSPYnQkgEXkrac",
  "key7": "5EPKRGfwGmXGUpmL6kCfKaecamC2NKwgQt119NDKZkcyyaZ6m7FLy43nUL7j7BSarkL8b7JsKvoqaSxdaHovoG7",
  "key8": "q3L9HUK3mYR2QzoRut5t6G5afBWrcAy8615yPWRnSE2MSjW3VKvifdY4rVHxipc3YG7GjqSh8WgJwQVpBhdnwxE",
  "key9": "5KH3es48jkzJBW5sH5WdbYZw5Tz5LscJ894KbGKbMXJpcVuCq4EtQcfAQ4bcNTa48PyrpnpZWjGRNvpd8pGSmfWr",
  "key10": "4UVapdkqQs6o1KM9hV5b5pG4KGVUUi7zECMk1z2XqWqEVy8KZHUUvqnoT4hQCWCCLe9URNGKQP61qPNib1DJdwND",
  "key11": "5QLmMwKCoaoyDvtMZTCcZk6Bx548E5rzDFtUe3qkA5wqH4S43NUfzBLsYrzbTp7iNxCVtQzgoxMo7VwTpkrtMNpk",
  "key12": "5WUr2emA8fs2MYzDnDRXpVo5m8R9VFk9mvZYRqbpndZJc8K5sRjUaLi1KJ7BQLRyQDdDUc44aLfbxVJ4qmPfLNpP",
  "key13": "5BxtEYNcfhFUjJgLQLy1biizdYBt7DwDtV3KDPiB6HwsDa2vvgcL2copGCVLSADidyv5ok7xFp3NLWNHoDGoQNrS",
  "key14": "2wa1CU18a9NKogZxmhomftE6NsCWKKJMxC6QErXFYqGQD81m4Qn829KZAYgYVnt6GNz2APyw1ktF8DHogv7fd2q1",
  "key15": "64RPs41oBHBP2gqsTUChxJpJoZio847zmoVhHjDV7AZn5dTU39i9MS7KW8bzRzfZPJPzvV9aEr7kN5XnEqHnGKmv",
  "key16": "4rPBUt3E5bwDuXYUea74joUgSW1Xv9apZ5VoevFCeK7htQjJpjdT4Bme4ERgisv4d5u99zKkrttohREPzuygA84D",
  "key17": "2JQfnJiRVCE819P4PTDabjSUnjBNPV3ofioKggqoX3XAT5UWJHHyY4q5AqjzVHNzJytzEMiEfRo6xj4i5Lag9dPq",
  "key18": "54kr6Bh6JikvuqFfzNhasuFUsHVdUcH3TagfmHD5EG7vVETfwEUkSsyqFbN3MXFBz8fzyyiYgtsWzKZM5x374T7G",
  "key19": "3Fa4EmEkddamaBu2XxtTZ7LfD6dQEUFTvPNgQPM1A7YLHGGC2vRZ2W88kEEbKmgetGyYW7HqXrDwzBtWVSnZJnXi",
  "key20": "4pAXTQStn4xKwwWm69CxeWrViuuvSZaH2LVxf8grpvTLijQuVRYNxy1aQsE8fMC5E7yjun67kSncAKxq2qv9ct2b",
  "key21": "5VPa7qGhwTojdh7c66on14F2ha8cuXLxTUioWpyub98X9mt4mufnda5kmFMs1AvjiK4XdKGsMXH8xmTtUtevaEAp",
  "key22": "3w7ZT259wv6D41ZtuMxL7FTYW7tD3utHDMjsXiFjE9QXvSz4VdWRzmjeeB8BPU7ioxTH5DsNquj572N6mmS2ZoaT",
  "key23": "5kaG14YMKgiCckPmEQv6rXFUTs7dFgA4N7qhXoWHLwViLvZmfbaTrFYUuGv8KSXCfFsKV1LyisG7sqiHgow7M9D8",
  "key24": "5bXxTxJmUqZQGSWdebFwaZFPHNyCV9ZMre6rvUKfQFUtjzK7681ER1UbyE1i8XikqvQeqNLWSJnuPjAaPrheHURk",
  "key25": "NeHiEUgjYRWistvg5VGGfDpukqvedhRtTCwP9AgS3MaDaeaQuRMQAwb4ssDok8xsTC5HxkkbAvnCSMCzuNWZQcL",
  "key26": "3RyRjqY1AfNASfGSwC6YKm61jwQynWTGKtboaqLQ7e1JTzXkCKDjhihLpUYUAasjcYX2qaw9u34qUmQNKTaU2nxM",
  "key27": "3G7sEa4U5wLDdm4fADaZfRzHa7jaFyuujuK98QTiSLRBRE96cV9PuE9mnaGzEgEEbLyg2EQC7Pn1LRYZsWUV9TRz",
  "key28": "F3ro8JCoNjGnoXdgLWVexsLBpdaexxLDru1biDHXNsLZw5QQzkZrWKJArBz9NUHoJk3JNoxaYEfb54b9ZTncGDU",
  "key29": "ry9hfras3d3khttkgozDt87BsEc2A8LCTEPz5sNvQy4dpcHMJjjCtz8VB2wyhH4FEdCbufxJpVFrEKuT5VFSyt7",
  "key30": "2m2xzvnAZFpCRFkHV3Wdd2gdMS4WSXSpjS27YDGqWBdZoZteUM3iBM883XckbxXzUFJKT3J1eQfcj6LXpGbBRhJs",
  "key31": "3qLK7A2oRwzYJvx4pmkxa9RLHixYGxwBcq6ca5djbYVeN4JGxd9Noj11FgvXowNedSHJdRaWk1UovLD8mB5RK1xy",
  "key32": "Ltdbzys2X2RZxiQgEghc2Ffry9fWNWvemkU2EBKPYG9kHaErfduTzvTxm4jh8qTuJcUktq4EFTispcx47xeJ7R4",
  "key33": "4ayPg4E3oF7MqKQjTbdgQ6Vh6Ja1m6KPxDCnM1QGw513gdZxf4AUP7pvrtz59GFNscxwhsMHUhLjb5VzJSmRzqwK",
  "key34": "5swJwmnb5F7TDEY4RfsPSczGkuLNWhvPMLqPvXD7tpgQRGvMWk3Dggy5VwmcYM9mesY6nYtMuxRchtg3RwksZWEM",
  "key35": "638oxwqBKBWXG1QT3ToWNMzLpJKSvsYGKpfWWmcrHB421bEoy3C8r7YVziyqCtsChX4L4HvjTXfiw7nUZuYJUCGP"
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
