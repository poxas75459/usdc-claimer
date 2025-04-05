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
    "5rmTbpLizt9j2ngGnxUUC6UGRkDrEsmWYh713BzitJoYj5b7e4wL4ybs6PJfG3ntewdpErQXbxdNe5Bqu1vWZzjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dBBsxhQpogMbB3pMum6WbXbDHvwyKvk642UGtMHYhpjHCoSvxFmHpooXp4By5ceu6BFAMGdxiNSCcvUGnRh5Rbp",
  "key1": "52PzMP1rU63XhS76a21jTiYucRhivHaFdVFZkGsg1uZmqfwvX5z5FwcQh7wXMUmvGk125n7zQkvbMFQDJhSZZo77",
  "key2": "2TKokrLaB1yU4T3BtRBz31qrxyeSSqas9u8PWmdXY8bvyhiPjnCW8arD19NRqJNZPcP4ofbR4vt5ygEFDFoCRRJx",
  "key3": "3gq2yjmm22H5MbHcC8yUud2tdoum5gtE27HjKebNMXzSHgdQL7HVqX4Q1trHbK1hTeu5yv5X9RG3sFEcsSHFkUX4",
  "key4": "DLer7dBDoBE3db7AFhkTMz4hXBCdXAmYuC4sHGmqSnVNxDX6Tebc6RPBAVcBzUN6chaCWhYSF4YtDwsiEoy3cNK",
  "key5": "3qokRDtvuNBRqjCdAD2tUJMAVKAFzo96xwWvxt1LZCcz6TkctLoJyiqkHU83ouY4p811c2Q5jHJT4HS6AsFDSmKa",
  "key6": "5uAsmCB6xfgaPdEkvsfSgmNFVsGCEY5ihvgaUC1kBko47xhDCxrHKHhu4CFzZ36kAxo5LoVdPoyTCL2VdN6eKFB",
  "key7": "4dvCkdWqkqLvVeypb9i4xP26gAjiyUUnHhQ4ZXJs2oDEYBeEjex1aXR7C7hp87sXyWMbxAKw6XeNGfafzESyTm9D",
  "key8": "5kGHhmHjwkmP3GnJz5qaSfKja9om3MuREEuJc2rHzkvKhuYtDyRghqYsqqeZsv7cLLWc4cRayrJT8BgHLR1EgBRZ",
  "key9": "2QV6kzitSG8pQLvU9zrwmGc3nSRrbvxUyg27T6yQXFevVs95QMmMp2qt9vBNdUQd6JyaB8vTEjKzSb2oSQ1ksKuJ",
  "key10": "2KMKJE6zxcpqzECccjCh729a4KPxdzKKaXo48mFfLowfKBAmsE671232pWVdUt5ZptPthxzmEKxSnnGVoBu4CvTo",
  "key11": "2o2SF2wAkCtHHQeCK4eJrnp4AEGVWdzPvEJ3HwVrLQLLzCNRuNBApmVk3PYNtWdenSKqZPi5s8KPpjmPSzB1f7Ch",
  "key12": "4DKFcr4X2i3ZzGFUkrzR5WyiFKQKQEQajBbRr8Y2n29a5TXy4PWBTMyGnFKM2F4VuawP9A11zYfY1AcKqwt3e9ih",
  "key13": "NmjP4u3guQFz2FGzoWTWTRby2RfGmLhSiWE6hPwZg2noycdueQMsMzDxkdmcKRSJZCFq2y5YBZXcEWExQcKLFyq",
  "key14": "4SWESTbso5vjorup4vHjXN8eNz6wqnDLD75eFLRLqWKoBxHV2R7X5CKwHEkmQPjGPsokEHRRSwDHY9nqWH4fDVNM",
  "key15": "4rLEPszukGmHxUZRgew38M6a26d3Dy96ZoayuMxquhZvNtFx2Zj2qqUVCwYEYBZBy3akyfhtLvLtN1PLp2Bju2hx",
  "key16": "2RtDPHhXfbksEYj9cSeQ4iD3P1WVUB1MvhgGyZRmiguck4WW2iudG5CPbRMeJAKQskV3jG7dv5rmTPRWrh1mnQkK",
  "key17": "5kxMHyY6yN2ynBswuUzvFq8ZBWbKhVJkD9rZkPiNqmCXp7htLJg47vHkGSLuMS5tzCdTfoeCwUwGo6vqYuczxaU5",
  "key18": "7po1CyDq5vCA9AjA4s4nLD7uYg34hJEEEoz2pw5gBr4gqvQLxSf1YZQk9xdRpnVTw5ednLBEG67JxHXFyPT5tNq",
  "key19": "21YH12hhpiBuFzMFi61ZyEhrBR1soM11voknPvWTiZBWmfUKL7A1CDNPmbs99AXJEY7AzuLBLwxkjGrbsT5vuaUz",
  "key20": "GJcp14FtR4VYECp8GyUyTLzEZ9MbzLjjaVsjXViDS2pNhzJjssofeG1aEdP959KhjwJKu8WunYEsuMdRnQ825mH",
  "key21": "2tq1NVNAMvVDDVWEVhqSP4KReL6Bva9SCMeQMP3PXym8XSHKCGAyA7um2Y1MvcyaVqgLVkYvFQj6KCTWqohiocvL",
  "key22": "4gzCmshy923t27Nk7wCSpnKPs7fszYDziL5uSvrsnnQy79XxRgz8nCnGRaJavcH22TRd1T4XjRE1M9GcqE68Mw2M",
  "key23": "3W8Z2ewEvdW5Gt3tJZM3XQJ1A5RTPbyQeajxUwkZHED8zhYjHh6sNdJB7o7HBXFy57FvtjV4WiKnskrmTbibaFmK",
  "key24": "2DYQ6RJnNVjabrJXWZGTGyGoDs8AJkQmLzkZGsTbs2Z96NdyaSr4TQFJmUydQyGkCYQ7gNxLZAeo2WN3rMnHmY18",
  "key25": "2STZ3fEu4SAwLeyTBVquL7mMtWdiS9vkkBoNHd61qHbcRckMZTm36ALs9foQ5SdA1coGK7JEvGh251jS6hEi7yBU",
  "key26": "4WzVWM5yW7vGpjcpnzWmiC49ee7uKE3zduAe9b8cYAWE4YQk8DoHVLq5Td76Rd3UCLMtsEH6HdXHvJbp289HLSz6",
  "key27": "CeD3n9b8xDoBhGg4jJPTCtaX1CPWTYbYzTDULMB3D6o713eSrjHgnP9sHBUsqfykYj11pBgfkkwEuFbG2i2HRoH",
  "key28": "5qm8K5PB3Jz6pGz71CVKe9Y8tJJfQEuAodUSA3p6E6Tv9E9wkzgMYbpbLJUYZSb1Mmd6r6pnHueN6Mm1MEpBi7uY",
  "key29": "3nZWQh1C6NyVaZeLj2pynxoFtHmHFaCfXcDhW56k1iKqUEyzpQHdTuzvH7dTwL9royM6tjWVAA734EKje8LKcybx",
  "key30": "24j9eAMgHQzsutLE5m954bhhQtPDi81ZfUwg6dsRoLXtdCTRuNpCqyvpCfteX7ri7UQDCsqYmWZG22bTcqzJvijb",
  "key31": "2CTFLYV7kQ7GzbHewWC19Tw5fPG8EB3aKAuJZWafhTBvdQvzhhc8aUcjs8jP18fWDonaJie1smzVWaJU8RUK7A4p",
  "key32": "5Vnk4VdKE4WMf6Tc6NwZTzoxQLB8Xd6S3EKcFZn294WzBunh35MyvrkPEEWFzqRnUNGS19Y2hpM7x4dK3GNpgdm6",
  "key33": "3ByeYAb8CfAbWTpnpts1rUwaekw9A5dqdLaunovyv3tVAMQbhmL18vNMU8CVi3fEYU1vJNAz47MYzP7gUa2qnr1h",
  "key34": "Fud3ahnuahEvpC1wL3ENzN2ru4nbD4DzZwtaapXNT7BWkHMKsyBpQCBuRWK4PFxJg7P89YL1YuzAuVvtQ7b69Jn",
  "key35": "326ArNRDW77k961pSL16kDQR2J3yg9sKuzdZ3B4aNsnkeiy9MDyX6QiFQ4zxKjxeZNDZPfWtveEwkzBLozzE529s",
  "key36": "3gGtQXNCHhHmLwjoGe6pp36ehSRVTc3ip69gJ7KLnkdfG42jgMJN6s4SK7XwkmXTt6WRTf3WvnWLn7J3M6qyrqfN",
  "key37": "5aiZywwVFFDhJTrQg9VJchXXBPZdcKwDMfYFzyU7L3M3ZNwApQYRyxXtEeejAMqSAanPWs7Dnm8HegKiQNXJXgaa",
  "key38": "2kytBj8K1EcyUPux8vLdhY5zsjrQLNErxP2ge2JjeEqZGfGWFmbuetzshnMtc4hHBqZWuNaXZkQddPANp1WBu4Bm",
  "key39": "5a9c39S82dAapncyQimD95Lg2aMU2zaBXk67k63M5mpgudCSFtFzByHuwqegovo6gqPuwvRRtwbyX3MBxKTkf9mK",
  "key40": "4WZUv3743KsSVAmvcdiCJsq75j87qQchxPEEXx55Rjw9KM3PKv6et5tpqF4kdQ3TUWdKqrWAZScamVzUe2C2JWx3",
  "key41": "4xZgWGVRRkSy8Xib12WdzR6fSd6DJfMLQE6mfjBxka6tqDCEZGsUUFX4gHJLmDTKVmhNtiBrhcnP3vbF1JA6RyGB",
  "key42": "5Ycg7kDpCkyb41JUxwoZnJN1NmUNaEwpux85Qu2qdphKS7w6a4rMkjLDrGwVsSdWPSpKaa9BWn9XGtQA6v8bLD6H",
  "key43": "2CBRU4Acou4x4RGaSVDWJQCkPPU4mgxdG5bnnJ11rqWKaj3kNpaYnWVxKM955F5W9vTYkQSoWhqs6K1CxRzcLWCi",
  "key44": "3wZArnxsBF5VfQcqmaqV1Md6tQ3XXBZMT5MEvbbLtY6rSmoZ2NGNBw5KMu8KCdqrnpq8LbQvEF87Ep4gSbM26Hzz"
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
