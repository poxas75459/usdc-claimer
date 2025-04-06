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
    "4zjcxC1Gmd3HqfMJM9t8yDJxjsKMYCormX7fYKAxTGvGwTC1ySVwNvUFBUdWhPQWa9r8Kh611SA1hwtVXUPSDFQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22yDTAjX2AAikE9Z7SeDK4sSoLngpuBfLmFwpPNySVRiKWisDPxER2Z1UU98rnsxQA1wYYhu4dpYX47EQB2RyRNM",
  "key1": "49gaRN7LV55RAja2nd99nQGHPHNGEuyda7WZbEw2KhgV1vnDJATygy6Q3Rb3hSBr7Zpn4Q82ap362ymHaTxzBP8v",
  "key2": "5s3Mix71asTiAz2uLVGsptWEFSsVS1u65FWbUAWvB23EDZFCb2sTPZ8tFKPo8UmjnYA82LY7p9DTMhMb42wuLwY1",
  "key3": "71hRhAF6nMunoFUFGdDCHe4AKLVNACVjtxg94Ted6izvwzQpUvEcMrtPnwe4pNBjhN5ue9c9TwBy6qwofJNwah8",
  "key4": "3g2i6Qqx56QSzPMGUhN2KPr237vRfmVVDDQq9EcH3ciyvsLmy1kLQ4sUrkEyPLgGrXSE2Tx6aRwbLHApLoq6B98c",
  "key5": "5VmQnExaJSAaWUhmFWawNdDvoyey5pEPeDHXN3xnfcC1sYxCBWQ4bH4VcsuVjXZVcSpykWjMy3SPhVg5zW3XTYzh",
  "key6": "3UC5vaJGPz32E1WTtUTLo5oxR8Cgs2o2aEXGxZE5bdNe58yWizBKnAexjutHYeBJ1Xq8NNh8F3vZtdMAzVoyaRAw",
  "key7": "3qyPWyFi64MCUJve2fZkdijGSgRZ79rkhfNArahV4SfMwLDGdVXBcmxpekpbGnqFcodtpq7kZ4oDEcL1XT5NVGRA",
  "key8": "336Bse9gDVjfWcRRZ6KHhYwwEDFueaDQsBxLGF7kxMheHcF1s3UjdtpYm5hduoaRjpo18kPVKWUWvY13fZTC4UdD",
  "key9": "LXVay38PsT3Juxa9iyeGAHCa8DhLFvX6R72prEYnPeoMXWHf1pKXN7LjhcRmqHgpCurioKihPbRPmeHXHW3KZi9",
  "key10": "4zZuibyFT6LLSg3rQK4wDUfNwfudZUtS93wc9wELSny4bx9TL5n65TY8iEi7hYkDicEZJFmLTiCUaJrwMTZKqMaG",
  "key11": "4sAUFd1qUmJ5uPGPxwieJh8Y6DqEzBJXfiG5i3yZQdZZP9qutPjyBA3hZtFJU7Ad31PXQGNagwxo6JWxVid7bEUQ",
  "key12": "BHNPy8J1uRoDotEgPUgkSDwXwxB54fh1EeXySMwKbNQiyLpyfm6L78onQsyvZUktGb6kYkHtRUbGjKuqnBMaTiJ",
  "key13": "2bCTAtBDDNwSAEDCKXWrnMJWqxcGrtG36tMEEuu59tbF3pN4Zkc99cnmCq76wtpFSaJ6cV92EKbtY3T18PrqFJfu",
  "key14": "32gG2xLsTKaeAe4ToDzhEJfHNvfuBLBCGzMs5HDd2919Nj4wcxF5mxFFxFGsnBuG2JtXVvyhbcQnrjLAqAgrSVNa",
  "key15": "1LqomeDdgUXGs8tUZ7up2FnZFAjtSNjSr2e8WeRrh72HsS69EtquC21dph6K2CKjCUMB2iAEr3Cy38aQkPG386C",
  "key16": "VkavW1h1rVwabz9TMQp5caRXhEyUv4La4rcezMfFcwHvPkNdk1wWbT17eWr7ou8MUCt6JPpiV9LKkQK4eZTfDw6",
  "key17": "4H3kCen8WKoMoBpiyCgiqdmKbH2MWoeEv2nqSqrbuA6VXe6tTxqSKig7VsfYmaRz7m1Vh3Zd2pSNSN29Qjmqt31b",
  "key18": "49KuLeY3R4yzLHBnq1MgBWEAHa3frvMM5mbZRPW2ajYH5QRsBQfidL3LeYxdzxVVF3axdJSBF44TGEN64Fd9rQMA",
  "key19": "4jKswd3sTXvWhrck5WLQCofxRaehsL92kGe8WuMz51PnoxkFXw6uBxJHTHVQN5aeeG27sUhB6b4UWh7zYkAa4Trm",
  "key20": "67e5B2veftN1Wv3nTdwDd7VLJco47TVzscukx2tEY5akZWAvMfsh1SuYULT3eQqsaCNjpjQPRB7QHK7YCkQRXR9w",
  "key21": "2V6qU2xau2hYWCJbVdujWcf4TamawCJPyfU9J2Cp57jKcv2xLtzHCLq1bhPp65WuvxCuZaxpx2x9m1EW1QKYTbHb",
  "key22": "2XfMp64nQJN9g4XVi6RUAwqiuwcr4ooLhCUKC3Cv3wwhRM5xJXeJ2SVZKt1k4Ty3vJ4FjQc7WjPgwSaKm3ScCMwc",
  "key23": "33MJhd2P3XSTfgda8CgsCcx9sXBW99gyRpDYaoxeAHscmwVCapuyZsBimP1QW4NBhh5PuLz9tc66B8E6VkoKKgo7",
  "key24": "bPndU3rVjw2DJPB79QXshqQAZGRGvUyhWv4eRst7VWqRGtDf2RqjM5J6rkYjCie9qucPYVZ4kmBVAo9v18rCjPJ",
  "key25": "EmY7MvUgAQyKoB3DKNxv9EexiXH4Y38UGLkJsYxERT4wK6kVrLmij76GfwSkXYv3h44CXnWQNS1h4mEUBoyhRf3",
  "key26": "3oZFSUoEzQGuUgepTizAiDwtiV5h8KwgM2BKxB9MAezBbUh9TunPAiRGHpeyCXwGp5pj7SQRH1FrYZ5iHWyRNyyN",
  "key27": "3vwugmCVKrWtACTYBn5gFqABUS8VmfixcZtTbWfNzL1o2Tupx2FeUifP9eaYxbqmqHAn87JeYLZsqQGv8yQXRoTU",
  "key28": "66Q3TPUcF9pMwES1w2viBFdzuay7MX8bjzJvhCTBZtkSqzVmQancV5qTaYELXSX3uP7frLYzhxhWWTaTxT7xUXLk",
  "key29": "4D22oZ2xY4EkxTJ8rXHqeWWjkuYY2snYWpzDZ7egvtqr2qnvLDGUeRAxF3ucgACSxKtBfUz27oBB3mXq2ejDy2WH",
  "key30": "zk1TofJKRptVqeANfy5VDUf92L5C6hTKwd5yNKxh7ZT4TgsaCUMFjDLMfxjbs1ETh3GZ1v1DVpvPBgFJmNysJXZ",
  "key31": "6QzZFoJSZJcPGDrMuZdk8jmtvuDT1WZ74dEXZ81ipN6pQrvpbP28crsGPqNXW6JjF8ZWkUFUWFWEGX7iMxqgiFy"
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
