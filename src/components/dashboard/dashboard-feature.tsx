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
    "22HNumLR4EeD4KvScifX2MxpdsPGUAD3XmZEE9LeFH6pVrceitj5gqJCGuM6t2middxEkTAXWPndFztSB9R4PC3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1D73nMvwGpQ5aa2kgnkgBvpmokhKpKMBxpKsq4UsBALJxVoStsGedgLWdqZuQMF3VRWiPkf7sNkJ9eizhLn4sW",
  "key1": "3yftdovEZeq1fNUHHXRmvjXvBAKsVAiy5uU2u9LeKJYu4hbmDLQrAAg48Sudbcn2tugDueJPKHMGBZHSkXF7yQyr",
  "key2": "WM8WQDNUq5Jxqn2g2dja7NLQA1tmMYYDq4xeQMBhSeZkv9CeBukNS1rhJ5aDUnrPMRG57StMwpzTUAkbwebRgRg",
  "key3": "4VssRtzQkkpnva6gTw2JLtzHCzsg6dqgLGYQF5H5uLoRaz4AThwY9zH72AJyY6pFQEZxgyre5TFhoS8khdJ4ksHJ",
  "key4": "2Tx8n7SG7uuL9ejDfm89CGD8JowUuNjsxCwzbiBpTzxvYSAB2nB9tpkppxAqJurEj1ahvQB8wZPpiGe21HcXo7kN",
  "key5": "3Qap3tjUaKgJxNEHMjP89gu2Rpk6t1wDPESdLssHfc9M7JZLg51MKANuEj7XSX9da3JRd5Nyi9C9M5gK2nUPDZvZ",
  "key6": "42FJ2JJFAwZtQYBYZ1nBWmEfvomJAQx3UQSxmLSNpegqXWZCHi1EguWbRKnmB71drd4vyxNK2StzVAFbwT8ffGV4",
  "key7": "41cKkoJ8WoLitUB7kXHiNepZb7BNqza8CmSapNDLNAcuh4nNEfeDBvjHXuCfjZjRvAbfB5ZUKFvNW7P7gsoB2MU2",
  "key8": "3vqjijhy5RffXfJPwxny6wvBKMmHg3wmv3DWm7cPwWzo8wUsLJGDtvFRGEGyNrTsd6FJ5GhuiwNuhEv1TYmVM8ZG",
  "key9": "2KJ4677HakCrkxYtvrNb8XHGNg5PZjohMS8JBQYuNxpXsyRywWphdFrhQFm6S9EeYUsRD585TRi1hmDajiUkYKmu",
  "key10": "5FP5XrLngKR9bmB9fVdafyM3UhxQfWnwXTQkUYyGvujPNPdfBJMknTmYXUDUMqyZ1oPdmY1uVFmNNSDHbTDVis7d",
  "key11": "5oD3o349xzmdVyGPkBcgSZLfqm83MCPmj3aTUHN2cMqN5WH9HvoyU5yL7cBcBXJWRMxg8r6Q1bzby9nV7UqNzY5W",
  "key12": "4v4YXmw2HyAnamtPhz1DjkkBx3yaYA6AyUw1HkikrjY3YkWpRLSU6RGfq4LyJqgFwsyaMzwZVNqCGGEpfN2TWNXV",
  "key13": "3oFvbn5jV3YUjKNAmJyb7aDud3bbS2B4SMYuSjbD4Z398coCc4xGJCTbdNLgqMhN7XhNat47pJLtigXdRY3i1Te6",
  "key14": "5GQopoJ2VbGALQEzA6KA5y4Vt1hodPMmz6xACN6EsGvsKxBG7mUo1YWdrWugv5FUVdvFsX6p2sTMVd9B62yy9AMW",
  "key15": "43NCmdUi9y1KCKmx5sug3T9b2PNBFYwDCUs6Qh8ggAUx2667Xn5244cqquscZ35hrToHJ755CWMcbZawR493c6Dh",
  "key16": "3vp4JYppe6N83wTM7yU9g1DUgoMcem2EsTLzVyUtha96DbowYNossov2tq3Yb1qeCguvuNHU2BUUvfHkLDVZouKh",
  "key17": "2XRGDjnskbX7d7BoDB8UKLKcbustfztDYiaUrZxTK7jkobPdEVcwQreBnwGsVqCPZwfwSnkHSjwp2Fk2qQVAaoVW",
  "key18": "4ErLnBAhtuWc3o8qLsseUbCoiuJPTDvX3inyMmhpNFeZvXVQYjL22fR7RYY3QZ4fC5z5uvUkU2tgvr52jtsUEK6c",
  "key19": "29qzAtrouxsCiH7wPE7zcJzUFisBuvKxqmuJYyz4vngkBTLLzEvnm2wQ5xY3ckU7pT6nr2Y57RPHFALT3hDTaas3",
  "key20": "HctnsFxxnR2tRaTZd1nQg6Zy25FjaH7WAJGtFRjnLq38kYUnsnYBAbDEtk4gWka5FcUgEQZvdqrs8LjjzCCvZW1",
  "key21": "nsUE99zHzjbahDaAyytAyVMYdyUbemzihtuMALqPrX68L4J7d2CeTZE1fdtQRsPpMqY9G4Fic5W4CQgPESwnQRE",
  "key22": "5CdA78v9SkjwdoVxC97rmucFT9aWtCKvCn4MWZcvtxt7CVRf9HW791hK5zkh53rKsvLbjLe4PJwLQd9gLZCnU7ps",
  "key23": "3hdmEKVNxeCbb31NBN7NaM7iaeEwPPSFT1ovFo2gNpyFFNCXQoqDVqKvU3B5aobwh9Fwt2Dn4QFkvhj7e7NavQFj",
  "key24": "675cG94HFannC2gkvt2netU364hkUW1g72aFjiuYvCRiaAWJzh89MhukpQLk6dQkazur5HLsYXQaM9nyTpuN63aU",
  "key25": "4gcb2MBLgqhrqeyicQQ66BAexpVeqjLKaFBEp8FhVHfuDV9f32K7bYussVsZaGR2Ers7HZacNuxZGsVf8PTjW1jK"
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
