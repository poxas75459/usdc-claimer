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
    "4ggjWc8wJScahAaEjZX1rnEyt1JJdUyvAaJMCFvw4vhZfBWd7QLLdrz9wN8kY9Yg6WmaDr9jHRx6q7S4TD2M3JG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Scn58sMDuB5HKS3ygUpVMufSoV7CixGBx7QgHXX6Ja4vUXyzZRjnVBCBzc7w9Rwt9dAKNni8vy2PGNQMWdGJGrU",
  "key1": "294Z8CgmpmSAqUn64KiMmmWyKHmjwZjY4m5CrXP5henA99LywoTnxxuSumhASDEoW74yJJcuhc6qCFjkbm5bKbdZ",
  "key2": "5QK7Ny45pLsBhkDZWR6PoMDb5L3FikfnLsYMuKhfMfHApvnzuVWjAY2FAtWgTz1C5Lsa4oBVCwpqaaK2QuciagrJ",
  "key3": "5EctF4hGQm4sduBWPYLWoMZ9jGFfiL6eM41JsK3ySvXeyvBv23L78R4CQgWRckcXscvtXDR5xing1nNj5AyKMNCP",
  "key4": "Ci1DdkBGNDNdKPGCkM8XvKrEu3B6Ny1tmTJzAJzgDLoBqeFCEafC9UiW2Tr3tNtPHVibXdy4qEcriGmt99cS3Ad",
  "key5": "4pyAkSv2u6zD9nZ4C5pnL3ESNL4AurKrHgqzp8WBcSFHdhtzPyEcZN7BWiNL2Y8fyoHhB48uRgXBkwaBtuaiD8HA",
  "key6": "59bdr8S3kNDDzFo75VQqANJEHLy19Z1poVERSVyPJtwMxj8DeFiqqAi3TMN5Fnvmkwmm62r12rbM5SDZdDAkCokE",
  "key7": "2ZNkbkZbNpFsyptTQGwmdpGvqQP7CtUn6sgmQ5wfmvYGzonDNwKrhi5Cyz6Yt9mvxEefDN2D9TPZaUvwNhbtSj5C",
  "key8": "4N2jrGP9YgcuoN5nEn3S6yBGn5SGFPGwr9ciKB7WLjXi6qgWsEgmA3ppFD3JNf11KGiD2NQ4Xao41nAjudAczohk",
  "key9": "2PcRdstFg31wU32WMK5Dk76R8ZNEcFckk38SeUVeSWBk4oSoDHB2syk6YXkq8PGuZCwjVbgeZkhwZQKoAgQZhyQi",
  "key10": "3FwCvtxZj97XZnrrzVBN12zQiei6C26VcYJNxhghZHx1ptAtti13oBHdTzDAirgyncxHJTWqrqnNZ8yo6vSA5kgP",
  "key11": "2VNqPrQjGGWznUEUpYWV8p6qNor22CfooXwbVPP2UPqzZKyPLTdE3bDRcEXa5i7EEgdJkUA39NMRcLSGKeZjd6B7",
  "key12": "rw2kUZguzpNxVg49psTZN3DV8fJ32Xg6uPFPnmNCeXHbea1xajvuXn3NJgSDRxhPwRQziA6NqixJUrTHF5U7D2n",
  "key13": "4pLfKLhtgyuosqpvXjbqFqZ46vn1VhYNtmpreJKApafW8hpcfpvwZRV3YH3vBorioH8XsuA2heTXmVhQG21XAaGy",
  "key14": "5itZZDKbcjJ9vZBaHKCM8C3rvPdjDF3JPuvRyKiimjZtPMvKmmU32R1ZqcgcKczZXdMM2ufPXXgJQqRh9AkNm2ui",
  "key15": "52SxqnQtpvgugsipezi7dAv4KHRbcep9b6Y986YFZnnex4D3JA4j46QpsffhXoFJm6ZUcLzNaWwTeLH6N21NxPQW",
  "key16": "6TDkuUp4iQk489RkLPxbmyyyjiw64GLZKSCCqXk1efNs2fxvLasEH5Az1V2F3hZS6nsKi4fJsGw6XxHjfYh5kgV",
  "key17": "3F1BBy92zUDPutFJkVZSCjzXveZxa8xVNujAKTiYx3nbkzkhyXjnMATsaaf9587GDGiSUiXTwE8Fw99uEhaZkJxe",
  "key18": "jdnRBAsABmgDDJT7Z3btUFuBzQeFt9YyDoraAk2z7eWqPNznddoF1WgYVtGrw6yiJ6j3putaR8wSqUL9XJrKAm9",
  "key19": "ACoanLf91uMPQFUFjLuwrkte4BpGrTHt8uoQdv8XMLYZsXyzW8wKCd5cKz7yfiz7WgigXKGhcXqK2Jj6r8Erm7S",
  "key20": "mWt8i8Yjwp3pZHeU7YnXNK8spSrLagXuoFYSUZeqAMqGJiSCnSdGNRLX1ymZpqgAYE9FVn1k8LMU4dkz48Bxinx",
  "key21": "3dM5UuA32Pu2crJushc6nV8B3varAeNhKZpFrMicgryx2Ub2taRSceVpkQioTypVfrXxEttF3bs5ozBgJLbQidP9",
  "key22": "4eWLJTdxgD6Jby2j6eCGMGKNDBqqN6QdkQToM7mA13bkqJFvURJyZ6pTeNhLKEhjbX9NyGts6ALUSBt9MnyPAEbV",
  "key23": "36idYYsZzpt46JQZUG467i8Edr2wTLiF7csa3jSeu7xvyM9hxs9oeVvUGACoN59yEKUaNZP5eTEjTjpKAZseRw9q",
  "key24": "4XV4khhBjyE23Hkx3udWqivG5PTuZ3WWRkUiY6NZHGFD3Q6EuZjLcyVFFUJvxZQdNJMJEiTSqEcbS3y2Sa4ehVjG",
  "key25": "5TMZaLGb9nuTApbQjSH8mm2Y52v8Mzv1cpu9Bf1Pr3uTAH47A157RbUDp3ZqR921s9XiQCRJTCTJxtTuDFsZkmsf",
  "key26": "5zjXhC6vp9mWXY5eB9AxFRCyQdG56CyB9a9VL9QRsa189ymuEfugnfe7zafUjFAS7wYed4tL56EUFpSPL9BxE67P",
  "key27": "319YwKk3gPWXEGXwwCnU9DdVHucR5J5JdWHx1wkqWvsuiz5EjvBvm5w42S2K8U93A73qabZcXRVe9SSSDHd1PAsW",
  "key28": "5TC8AFHJ9mDRvYWxZMRtzkTMAcXF22HEd9mN8nETMap41czMwBMsf5NZv3DBrn67oRdzucQf5xDpNcFRysVsfaJw",
  "key29": "5Zs2ZPjf6LJuMeksjVHC1v2K7SoSUFGv97khtQLuardpFt6cTu64BpNaB8APmj5jodCMCEWMX46edC5vEooDGrcD",
  "key30": "4ZYzbznGQGoEmAoP6w2Dv6mn8By4mmE5GTM7eHXJGH5buFW1SWB4SeKNJxK7Ktn7un5Pfd6hhHLv4am5ptWKD4L1",
  "key31": "5YWM1xqMfFxivbKFhr65sVEDMb5XG8C2pQUSTdMdQshU9WKyBb9YUAUxWh5f4XauSHsWVLb51Y8S84GsMw2rfsv3",
  "key32": "3U4GghPrXTSsAX1TXTXpnCa1GjFWW3BHknX4vb6yCrTWjZYVxm1nfFD2T8igD23nWoiyJnA98DLKapDGyHfZQLhZ",
  "key33": "4GmcSV3qQPTDepBMyVeGqGxmfD6oE1QJX9XmkT5FG7JPSY2uqaamftSicj6yBsBCuZvqKTLj5cbsPNPQyR93SqiT",
  "key34": "563oQV2KghiccVaU245siS7Qg3Bw1gXY2QZF2XtSQcAD1aAKbgbAMSmg4Vmik93b1rgvhvishgXzknymHfnxDnFx",
  "key35": "fkArTY4s5xGdeFBSj69pVHbvAM27hnNTqtwbXf8i81qeBnTMm2VCVoC3bDAXUoLneLteCYm4C4gTNiBy1P7z4sL",
  "key36": "2gY5JLcpLyrTRu8t94RHVuNfaVzuWq4j9NAu2HfAvqKpk3ahUSjQ7cXmzeDLz2EidyTTGJANBLYN1tTQfHN87LYs",
  "key37": "5LqSBpWTZ3CKWzmXBjAY65RVF9X2xTC2J62gJ6j6kytVGKnm4sngRxsEcniwMYuSjrsk7JSeYqVgyk3Y3KdpFsW5",
  "key38": "4qy7w8r5WyaeXzxQT7cqJJKLs2b159RFeTaL7FqjXcj84eHJfWYw2ViVFgE3PaNydPbFC5JAU1NRLBk5qTzFCVat",
  "key39": "31pCQzsUAVCt3QWBGcGw2zM8DePu2E1fsFiuHRHk9AQhdWJ8j62kCMLYC4p9CywzZ9AJtGviuPSBJqKoGLbcKZ4E",
  "key40": "4PRjGBhVocKLyeBSjoXDx16DbGL3LkEsThavdi2NgvaHRnb6LffyGKQn9koWqN1T1NWoRRZkhAeomdEK4igrSUx6",
  "key41": "2TQSAzy9TPNZ4i7pkNHvneUxnZS1HqJhzwktF4F12WfLQjFjRF7L7EMyZtHPTh5xXffUaDk2yP5hTMxtWHGGMq5T"
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
