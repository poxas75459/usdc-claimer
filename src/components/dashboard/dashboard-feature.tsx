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
    "61S2mUL2vwPx9JNqh9F2XR8h5CwggX4S3Rv3fvaMqiAczi33KzmX5fbVPuZ6ngUES7BtGShTXpyGKmEyBreGv6QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbFgoDt7udANqaJx8zcYMe5SopkJbanbuD3uErV94F5Nmhq5jC1XytYhLB5TCBUGxTstZPte1CK4JZrDmLf2JNf",
  "key1": "4fkkdQQzxLyTcDDbBkmrUTYj4QWpo3nP5MCRANrDZA9bF2NGMyKbKVAxuEsKWj3rn3Yed5NPAqVyed2oERjsKQfT",
  "key2": "2bQRv3WKempfphPqJd5gPHUL8D1R75P5rZoDeXGPkKXgWagPzAs2yDL5cTxum9iw2VkCbXUaEJcLGDKB4wZpbNKZ",
  "key3": "4ZNnFsF8gN7N8vzQRbAFbow44w79sUiaHukAupqeRvF7S1dcwksXmjeQ9PBa6JopVHFKsDN3s1RWeRHo5WHj6akp",
  "key4": "2p1W8RWRGfhqCCntBsrLsJqQTkqo2X95BbHQG2Z546VdPvzguFFUCSoVoue6eZ9tmQH9AKFwf3BqJRqtejPGoK2t",
  "key5": "2u64cJeWYCPsQmw4rvTDZqgBtrdb7xP5dKxdmTt1xxfxg27xHtxLop9gBqzBW6skvvFpaahqBPfFwMP3oazYY2S9",
  "key6": "7xoFkuYo47KXscj73v5sb1ggDKs6wwcPJXoV9L8RaGkF1P2feDdxZErUwhQ5RjJdqxqbzd1gqh29vJ3qzgqtrXA",
  "key7": "3wyy9ZhrTg8HKXomxqxW8deKwmpR9kWUWg7L76w9izAaJHwY2L9vDetgsbug2nTUsL35q2SdJuHbrz298w1cXuMX",
  "key8": "4G5mq8CNScReQ9mjAKvVVh5PhHsVHPAhqyM5G5SE4AB5Q5qkAcyBnKn7sVpaVyB5E2c7U8W6xgHYh1n4VNocfDn3",
  "key9": "2vuGbJmbGKUyy26K4a4EzBJF2KqTsUs5RfXohzboAQ8d4z3m1TTFHJDZM2mM4WpAGPntM8mzsPLLgL4APcmHPxtn",
  "key10": "2Bk3tVcdUivZsxnr4Gtr4kcg4r2Nnzmh9smeA1KYJHQGg6chQH8pKTPJBaVRRoxK533LwcYDpHSTDUyyLasnX7Nf",
  "key11": "66am7oVFqiXUSyqfMFJjU3KXwGs6NDaRPMD9v3SMXNEk4xT23xhVCgpyBan1uPyEWNHA87MKpyFDDP14Rdd3SEC3",
  "key12": "3Bsb3Aeju2uSiYQR53tcrFBuKnHoJ6SdqE9evLTdgvpUdNX7vU55jvpd1aCvw7YLCYPuAAKjE4pGeuwfo4VnKQbK",
  "key13": "3it5E8HcrUNCETQ58UbUvwU9z9gMc3hLnYfDvhnJwupzUbN8PFbidytSS8Go4h3kGcwoH1BkiKbXWXd9JJETJeyJ",
  "key14": "2CT2vCQ87qkhdD9LQLMopDM88GhtedX5gUpDeUz5GmNzjgXp3pzHSKvZQjMMg3cLUUxT7zRLUauPiiUQcVRpWzzS",
  "key15": "3P84FP8hBTS2TYrSJJsqJ3Q5XviXSoLoaunBowTVwGtPtkFdwtMvM78DLkFH5GzGLNAcBe6QeGU29f4yL9XgvWuq",
  "key16": "2vsdpCmoL5hwGHow5PGMuX1gvp48eoRYz7NsmznZfAQq8bvFMBWXS5L8PtZFeXzbb6T45pmFdk4ncFnLqfEow7k7",
  "key17": "51LBJqb6JU8X6923haPDwQWW46TutPn7aekPbgJVgADQq1ys2SZ11Ev1HeMg8XMR6sBFMC7oqnegnGSXbP9z1euJ",
  "key18": "2HhUuiBgioHbyVLkYhcT1vpCHoQNGkLDRRGxzJmUcWbp1Hd6i5BvrH95pdeSUUj4joJt78tqRdSW7Ny2zthWQQW3",
  "key19": "L7EhBfLmDRu9HnRnJ5sRVbv8Dfrna1i4yFRTNmgdpZ1fTCrs6ThufkoeWbtQNvWm2Z9vn3vxEWWwiTCXpbHxXco",
  "key20": "5YbVH2pbwPa41AoemWrtPKXJMKbZ256hTAxGpMEL1et3wwZpsfjn3ywuVsyR6N4Z5C48fucnSsnfiX3G8ry9fP6W",
  "key21": "PL6FNdvePm61LsdMyuJ8Uw4jYSoCNJ3T2bNKB8CfonNZmPDiKPhfsNL437vbi2eswuh6swbt4t1b5DPaW3mMYVn",
  "key22": "4wiVsbV3YQXqp5rKaYazPriA3nyFs6iztjphfsyPXgVgjnLonvMqjtgf9jrvEDrjuU5r1hVukANAYAEc2DiYB9y4",
  "key23": "4bTAWLQM9cNbekSafMj6CaqkWWk1VxFfnDJUvdYkDsfmdBwfJaBLY6msyzi46YNrx9cC8e8hMj2RxtEmVN9bqzQH",
  "key24": "58juRJAKGvoNrkSgDiv6eoQxY28GgF5PyfrB8VH4ZvqM8Z7szFSugsd7ikSMxrhrMX1DRkr96n3Xrswq1mfvrHzK",
  "key25": "4FDbynC9y4Q7E9jMvUu9gSGtBNy7ioPgHDcKL2rRBgAzmTjPBCume7kCZwhidXMhg67vkEzZLxrp4scBwQyR2L3",
  "key26": "4L624BcJy54PGPeutdyjLgmYY6bREapWYu7ejwRSrM3wijwjpSKD2paFBgcYkSt9G3ne44BLzapFmEVDzzruu4it"
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
