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
    "5ejtKqk1uC9eAieqPp4gqgACeS7dmi5ocFWcN9beLQGZxk73zjpHYDxivKeZ81fZZkzrUwyhuDAHirofTKbttxbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9oYSpH5RQRnc6D6xs5gULuAAKyaKg4PYxiB8CcbjVAKPH1dFB15N99y5bAY58vY2R9PM9LeCbdgxvCnYS1sXTp",
  "key1": "5SY5mvUfoDt2G4ysSxDY5ieWnjnv1An3MexyZpqrmwj3hw9bNjra2fhnk2HQEGF5JPHMjbdkWM5dW7DeimFRtYtC",
  "key2": "rB89iFiU3kqZJvNx5pibDE7Yc7C31C2GUwkQxS6aeds5oqNjCwkwZFZfBQX7Q4LC1BUvMxh1jSUu9ALY7qdV8sX",
  "key3": "3PLJ6RoNZcgW9nBuqZ22KuxP2muAZLuEFtqhdHQazxFNztyUesbsuHk9yA2LaM7MHxY19KyawNnuBzoqbicy1eHQ",
  "key4": "23nEqveXuJWXWtVMaW7vtht4h8LX8sQW2q6rMUvQSA2eRQQDz39PDyxbbFW3Ce7RQUrFDy49vXCbsQLNXpFfFTVe",
  "key5": "AzBm9tS3sAKyQvAF9JBDV869ETkqFbWvCagG5rChp1piTWwtZkor2a2kNbNe3c8BoYgwCZBLnuMJhRjgdfvsFaa",
  "key6": "35YPjrwBZPmCeqsqKFM2hXEtLE4Q8DXbbMGtzfCRzBhdpiAwuoemCBcVtNNEV35Tv2BYVmfcmCSSCLkkmU7EiB18",
  "key7": "3sdRpFRCcrKZvgbmmY4rSExWrn5UQiGo8CcP7P5eSxCgx14W8zFCR7HkPY7GKVfZvNZEFw8FEwBtkmyzb34nYdYo",
  "key8": "4WevdZXgTPPgQbwqw3WGAYMXC2UXcahZgZwJ4JmbnFcM4Tex4oUpgCc2TqvSfQPNgDrjmYRgW1sA4GFzHoh1NeUa",
  "key9": "2q1g2uXE46xfuF5QaskDEJDJtQVjKA64HfAHeDvTXYM1RPLCZ2AKoUqPZdLsZ3oJggVbXNNei7hVAFzEHiV2eYpA",
  "key10": "uaY5qdWo3faNKatzAQ1rmLQs3K5badwJ9nn54AsCwaQWjopfebGo7hHZSjEcX72m8nKJecNH1i6WMwTsCSs7yYQ",
  "key11": "3qKxXd3gvmqdRomEUDgzHfwNTCQKJy8LK73surijn783dRpiDbHCymUCLneWtE5mxKrg6AYTuRrcwJkVDm5CBbAU",
  "key12": "YwFTzqddHMPSiBABmf1PoVi5cQDBXzJLrCc9QC2kZwvDRzVYD5EhCXZSJpErpHLNMfB22ne3PqxVsERiwzFUQ1h",
  "key13": "4tkKoYxdyrhXQ8UpdrydA952YKJFqxRobvqVsFkag4EMtpxg3XoN2cWtYpuYgTz6dysaPLhFgCE5EXZkPJZeWEfV",
  "key14": "3MrkkJ82U1BHNFtRTvw8xCs4p2dTEYxRDCn1j8dSmD2UnKRYACXzvCY4c3KWaSspqsvJMsFPT1S9Fb4X2QPg3zt1",
  "key15": "39E5E2oqsxkKa79i7dS7MKoS2xq5Tn3BQANKM1CiZGhjeYLL27kqyeeuS46KFCzQtSWdRpc284MFFFFLwcvLdqqx",
  "key16": "61XPZexHJreQ2aykaz7eDQcHLVpdwqe5t4o9mWxcg5NLDUKVzAUz1CtuKKHAGW945LrorUmiQy78Po2kuxtSUESU",
  "key17": "pxZURQGAa5X2K64prjnjLw92VQ4K3VXr5QxNrrcfwmXxoKyUbsaeGniu4GdfDVwXxf3rVccmRT3g8jQx5dctPkm",
  "key18": "2X1mp3kKmBbj9aPqd1YdSKzYHgBMPLdFWeudSC8FVvVFqhqbFKwtrLxDiQiw9h5rhWn5NdQiTCHkrhrsgH6sXgQq",
  "key19": "4y5oZxAyRGfBjG2sD7s4MTEyCFXwfFUKxxkGNsiiQtrFYnKAbmSs4GWK3ZE2oxaUJiMtz1mgpysegpJDVASa88BQ",
  "key20": "4jRAWHdTiJLSgZbVXHRLXWgASvjFvDYBHCU5uw8nWErB5BPixKEobcwqT8bBDrZJdZtnFrJEqiMv3VKKmNT3aN1h",
  "key21": "27VuRMUG7nBppYeFfAiUrWmNrBfF5zhBsfEFgeSBo3SbExXaJKkU7PkFaVDaqLx2pZcVRLmc9FJaRtAXPCVdDiT9",
  "key22": "5DoybtxNhcSVwUwQw6RYqchfhv3bwpRn7goEvVC99hEKG6UymjezrvhJmQj7ayHwRB4fnaEDj53yHFRouoTUe8SD",
  "key23": "9js1rA6xoM92anVRvrQxLprxXW3Byrj2FU6X35zVYL2tRCog8bwWwfuJF27nyxV78ueSmNR1bCL2dQ4J9DCvuBw",
  "key24": "4VoR1dgCficwW7u8QJobP5dXkLGhYMTW62Dfe9JwLFYBTjkjhbwRuDNVWHxXAqfJJWQpoZruvxrWXEuoW3nY8pRe",
  "key25": "2YfD376KK5FroavEZ7Fobbmer3uE6v2QgSDyARLbzi1gs2H3Nw9PH5Hfy82GRUnwE7agPnBt5qPSqsvuhGWWEUgS",
  "key26": "3fVZTKKxMagkr7mzdavPagMnArnx4dWJ9JwseNLbvQ7zG6cLcwGUDLk6YLnSriRDmCsGHojHpyxC2BrLTjzHqsjx",
  "key27": "5WtSTuMX5RZ2FJ5cpSddMKZD54cJjU5xn37fMTbe8sis2eZSjUGH9pwfYT1GwpdRWbf15hLddVFwupvfcuU8pnus",
  "key28": "2oLRGwYRxR5ZXZG2PUpcWomkSjDpC5Cn1tRX5SMtqmsLQPsFTxWadsS6VbiCjwW3hpkSjojmoFJ1GedCSNsYnCxj",
  "key29": "2W5awMTFK5KUvejhFdGMBns8F1Jo2e136rbN3uFihQJSbH3f25XKzMrdgNWxmNeHyxtNXmhkn5osxRNsKSotTYTM",
  "key30": "3rEryeG6LesthWuJ9txpDCp175Y2oU6px1dmorNo2E3ApMFscJxdaapYAHdw8BcnMKJQVWkoLoTNNADPfeZoCW2J",
  "key31": "2zNxUM7n5QRZptZe3wFGPCESrWvi3UnLkGusYNjpaxxVfJGNyoswT1CoanJdLZYF43uLjurtmAL7JaSn8kXgx2kt",
  "key32": "3d3D4q8LmHcNnwmmiBozfZGXoqCAZT26S1JMBa57vmbZaSqVdAfBKDsTGPLbRw1qCuX3cih6jAeJB4WwhzDb99Dc",
  "key33": "5MDphpxuFg9rMc9ExTQVeWSxdFAAZX8Qzz6frYh7DdUrK8Vq8DSvgWtVnwBkyfdTJ4HhjMxwYWP9yN4bp7eAAqJs",
  "key34": "e1ByjDhv5K88ymEnMCsPmdCDn9WKAG2tHGta2C4nDwUYVBjvojQCGD2FcHXeCEhdekeZHsEhLrXdm4pm3kvqtRM",
  "key35": "5wyV6gXBCZGRf3jerfkYa7fDBW1YmBo72ZyXBTp5NufqqMVCUypDeVomvP9ursLGrFVRkoobBtACzC4vuP2FnDfi",
  "key36": "TuK9WUfTs7GPMEPkmh9g4q2XPPKnRU4fCg2QNdbX6Lj4MzAmCTjeVoypnkffM9umkAjZpzZQRhnpCSRfWHzz3XA",
  "key37": "2MsfJEfd27XeC6tF282BpkDeGVD795C8UXuviL1Cy5dHTdRWaf8tQav3frGmVC9bfh2nWr6MMPz4Hf3WBFMbYbPu",
  "key38": "3oSojANeWrGRqmL7kn2SL9NqwFNakAVUavmkwLHH8mo2zfYYMC95SoY9Q8fsg3RqiSnwV5WiecTnhj7GrEFwbjBw",
  "key39": "5qSLMZHe93nPbqM6xnkWnVLDk35vQwiKdXyz6GTBCDwudMRsNoCUkPShKQCAjYD2PbzNXQmB72DYntJysrAAJ5NY",
  "key40": "4aWTNRkN2z7BbRUyGr6UbvtsVCC46aV43zM7cg1Tr4Aid9kEgbwuiHv14neDZJSUMHeduzUgtGYSQKkPBSPqka74",
  "key41": "2oe2JynUcVRZdcd3YhaLdYXeYqLXrPBkZR3R62tKYZ8aDnxaug94QJKcsoMjtd7oyVwE36JRo8eaMqktESwq4dXH",
  "key42": "4dPCWc4ATGaipRTi3GbfZimRY24d6DuByamx9pC2rNxrhCyrUELiwXSZQLCREkgM2nqvsviBP1uTfDyKQmthjZ6",
  "key43": "2Q5JFy33VTqhbWGeATSVDYUXxUsw9Ak7quJv8ScvjHBCArwKMfFWmo6avFPMeeLrekgyUBfyd7PyDsPPHVPKrRAz",
  "key44": "2PAqYYsnGcZPk9nuhuQAvnAvppwaphmj9kdmZJKderaXrE3DUPPnfCNPL5uiZXm4VjRhRZwFV9G2kLdp4VNKZ99N",
  "key45": "2j2ZwPq5gBhVnuja5KGUW8VCsfHLzShd8eT1eggDiUvD6fnWNSVSkVHWtQBvWpvzgnYxUGRMS5k186yTk1BF4fy9",
  "key46": "3uUrH6BW3gshVxoPSho3Q8mAFQ3RcYyojyDws8kWpDCCgNyQK51XEESRwkMNpwtAc7i5Pvs18pr5GD3pYQx2qDky"
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
