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
    "3FiSiAzfPnNJ7cyGrkSAiXBUk84CH9sgstTtLF7LoCPCG2zkKw1jGc3qFhwcALuK4DPEuHUhVVyyL4B7mxoJcuXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaqfLdpV4jweVbappdbuCzWGjqms3mVqoMMvvisTh4bsoJpesADMuUxBTL5kqkPcbjJVs2uTK6tLKn1sS1NHMEw",
  "key1": "3cPJXfjGAwFTgYcfitVUqMjS3CGwpKdJ8ZzNH6EkCNBqvdMMdvMes1X7a99hKnzcL8XmYXWY3eNL6rjRijxfJE1e",
  "key2": "3YYswGBRsWG3LoT5eBoEQxQsTLKc1FeoxfFEepG2rjcBXUH7gQJbDtRB8f6nXR4WRzwrMiuWaSurTqXB3G14pVqK",
  "key3": "3w4pbhAVeiSJzmxj2BF8VcmRepm4XfgkYGwUNt7DHkgX7SG74yZDfj4MegBqJtj5mfZGUt2R4BKvXt3gr2VRdBZC",
  "key4": "52Z5Ez1UqfomwpdnRNkW7cNrn8ARuThXUth9sazTDPyTpJaYY2989Bmb1hdMnohCs7i6Rc5g91fcTvvnyVBQCYQW",
  "key5": "4S24wPyh1xNipkxGb3SsRShewA2TiCT9wZSs4dHtam7zBsokgXH6uayFoUCwstMrRjYMJpEiP6WoszWM6SHqZEw2",
  "key6": "ceSEmBijcUT8XfUw6m4qN37MoEEcYj2cYq9c5zazrm8jdfKDj45yGTxe5CVTV2S7Yq1u6b1m1XpL2CSJtmdedXR",
  "key7": "4kxbYQA9bGvnsQfzptKobz1caxygPDPV9MxahAnYqWNozvkvyKDvbwLrJVpLzmV7ZiLQUN76KzH9K6wfSGP1L6cv",
  "key8": "4mr29bSBnpcY4sp4sKrd9iSCxECnvUW7ViaSa8a23YtFK4UPdcvqP1y4PNMKQVZCwLXEQdx3rBT8vqJhqJiB3GXm",
  "key9": "3BC7T1U2gMMFPzdPsdJDd6e1VwLTp2wS68VodhN6nuifXfHhiQ54WhyC6fXck4QinL5eyczuLDVA3xC7q7wnwPMb",
  "key10": "29ebnk8Ei9Rr28ScbfczqYmWZfXUvPffpRLmYomXhS21axUiq5gEPox7CCxWfwT1n1RkvzgRYMSy5xpvKWnXGWfF",
  "key11": "4N7LoqWJfQ1W6gNGFvWanGDse1DcxXyu45i6asokP7bNgtNLAZbbMQy25d62DRra9vc8F1kjgbqqpVGce8KMokzF",
  "key12": "F13B2FXCJzBnGjYtPSUhAuVrfHYL1YgR7F92QxfcE1z73N2cyu2Es1z31gHcqZwQKXoxBTPdzjDyTyWbyq8YSYJ",
  "key13": "2SNeWqeuwQYRdVG4hhNKoHM6KMRW9JM12y9RE2cfjxrsLXhYgYqLDFrLXxHC67hAEYo7W4xkDQBm27TbF1aRyczR",
  "key14": "rNkoBfP6kiWzJ3Bah37X2aScH1yvTLSiCrpf7PatHrJa8LhGDZ2GzfeeXXgtf2gDC7bKzpMWHT2ey7sfDY8upXR",
  "key15": "2vuNuAxkVaMbJAXzF1BoN2jy5BVy4jJeQBqgQGgw8SBX3nYbWnaKFz4hjYKAFXrw3WYVSp3kqTHZMHArx7hG1dD6",
  "key16": "58aXxSY28Nev7d2zX47PkAcZZcSqFv1g2x3bzcwz1EKpbadVfx7xKhwUTeoMDJTwHoRwScdVsQHF5gJrGZfR364E",
  "key17": "246vffcUyrmEWw17LYQk5pg9REXUaF8E2qDtp7Lpeow9BhSBNXqy5ebzaPrB6tPJkGiriWRJmRSkMeEDkXPUrLux",
  "key18": "5Xzrg1EQPc8BjqHZntDRnpZccgGAEA9HamRtvcAf7HxCvtViLR3RRig3rLT469BhmE3CXEFYfz2Nnc8GofpMy2Zh",
  "key19": "5C6QJwgSoU51B5uFoA1ioP8aRgp6qyAodxZuwxMJ9fjkMGsWb5aXU8JKR5WNSw6A1rd9hY9W4MZozYRX5tZD92Zw",
  "key20": "3DpiXRcqr2JAwK5cR2XqvWXWs8f9L9BDWHyUDzeXQe4xxM9PfJh6RokRtw9KUmDHgNhVNKPoe6uRsCmTNW3pVC32",
  "key21": "4KSDD4McL7d4SXkBrWSDVtgTfFkSfcnxJ1nHb7X59jGrAZLRcBmbpMqerCWHAuSs1VY9UCoDyfRTAHckLhVTkvnJ",
  "key22": "3KtSzeGZwG2AdtjnSWyuRCypcQmZuQ44ke71YfYE6esdvM1e7kayW1wRaxhyuXctYZpGsCh4bLh55RTANXpDT344",
  "key23": "4X6aEhW2hQhrDXZ26t5RKEk1gEAkWJMdgxYKr3bXPkjsPRqzLYhavz5avYkEbG8duMmhGStW3iA7CfutTHm7fCwm",
  "key24": "45FkSZHTN4Wnt8gWTWBCHW5aZnoNfV9CF2TyjPgCcuxQr1ipzVYeq6SrpGYrDNNZ5jSfQvfzSSPtb7KTumLUsEPu",
  "key25": "hUShXuakVPhzFoDhoGh9YrdYbU4gPry3xJvh4xALmN6uUcEjVX4jApQ2Kt823MMnVFe5WKkZXbMCtqMxnrxVUxW",
  "key26": "5ZXfHxGH5cFxhmHxtEva9T9ypm9yKUywDmYEXv9GDaMRTJkjLrc1TsveTyjTvkQRBAHyokUTnTVsK2YwjSqNmwrA",
  "key27": "3xX8AvcLambbQUfDAVvDXza6YGeDuj4KkP3qkUueTZXfepEDWqVHZkwaX4fScJtpXDwXnEzPcgjBANcqov5UXdeQ",
  "key28": "34D5N38pD4jMpvshE4LqmrP1jQuD8pRjGgGKCHEuMMV3CT9Ji5kUK84VgFRcK7eUmtr25VZQc5bweJ38qAgaFPvX",
  "key29": "5CLUpMHtbwVpXChzk4vPP8fyFEZLKhVeoFvqtWmZeEF6YWKvxygSBPjeCY1Zk4jr2mJg1mwWowLV8geBdtFU5Fi3",
  "key30": "34gevtfZcorH6CiAX7yf7D9JU8fbtw4yMNSU69NJjF8Dzsoj2zfAu5BT2hn47amjcui6DUpAwcBYQG7Gv5H7bq7E",
  "key31": "Jvwj89VcDw52Jsxd1kFcYAh9rGyhieeaVNVt81fNtA14vF2d3wCuM9Ppgdm8jXgV6QLvFcGHHYn9rYFDaDMoXva",
  "key32": "V2T5JBDPjkEXBHnC4MtAUbWJS6Ewma5TCXLeEU9QTwuL8bjBPiUSMJn2VF8WXoMBPi4ojHKzfzCcQmeyr9878Vp",
  "key33": "2zowFN6SnT2V5K9zcP6jznotKz4srf3p3wFxN2mGqw4qo75zopurzLvTcWPq3CxghZBZtbkiyostrEeMyqRZwzrZ",
  "key34": "2fv2CFymwDPo9wEPj13tt4dMeiTn5xGNwknCWmykzvy5zWtL4cBHNkfWe8h88LePVuEVzSeSfYFnYcZkSvnNAY3W",
  "key35": "5cBRYH4gisDm8yeZe1AaJUBtkM4GxSBQ6VMXwwo41pdfX2KKbVdZugzVRysBDrWW1Q6ufUPvkAPVugweMZAQBJBx",
  "key36": "395QBcbiw7bS6GVnYqcoUwyRyq6Qy35QLywSkXserR5oc1447iiMkrSTNKqGSZ65yRQiAdSjapbBe3QdJMSWBUyk"
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
