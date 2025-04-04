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
    "RgR7qxcAsVPUSspCHyY5d5Ppct25Dt3VzuYd4VRKppw2gnbKFuRnALD2gv8q8xAiLAoRsN5t9Y1XDwbTUi7HqQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBoXxVZiTnhsJpepweSpFmDDeZgXCWm9kQ9wF8FQ8ycampNNPf9PAnKTpwJsZvY2qCmXay6zvww5XBZe2rh65Cj",
  "key1": "2UGCCJH5snVvHi9CtbbdeU5hDrF95GJwByGiw1Go8ehof6btuX6QFbmfBAFv57mXE5cNQJoKfDqqHn8E5dtXyuCw",
  "key2": "XAgSRo7mGbNiUTV4W62N1ut9SjFMG8L4CKdgbhVayoUMr7aVQjynQu1Zr2dWrY9o1Ke9avaPqzvDHQwiihtTkxT",
  "key3": "22RJoLVRcWUyUdka6EQHAZUaSqAkQUoysbDSMJtKuZrfEnZH6CnryzA1HP1VpUb4MboEDFoAhX8sEp2aKLAB3Rup",
  "key4": "4cNrMAhcAG2Qbsg8kd5ZompxS47juBxE5ceCQs1wULCqTCc53ktq8Ca4tB7DfpYLgShYbjR2cQavvGYqKRKa1Pt5",
  "key5": "5eqUvL9mMxWUphu1CcVDgiTPgmJWeSB4SrMwmRswFoSbfqtivFK9q7ELwtofeP9c3CKJTwY8RAAQvXxgLri23LsT",
  "key6": "2JTepdUFMAVYH5xZyJnZ86hjjb6d7F64wbvhJxHZ71ioK8AKyN92tq4NrViMKGoTqfsbcFpS6gYeFBsHwMNgYhLW",
  "key7": "5svp4PXV72qK22AEhxBWubYTrDjAX5ipftE79xDpypcApEwoGMdqma3kxtHt9AzVvcTPXbzaCzqZrKDfPG5pfDnp",
  "key8": "3cvskxyUmuUXPpev5Veei6t8Hijais5mM12XE38C2WBTcenWTpMXotS5Fp5rmSBWbeqnL9jbwmPHvsqQGcfPHvgf",
  "key9": "5imWKjJCBQNFQUpRKKjqTncoM7TkM9gRuorYSVwhqhGFQtBymLL8JzoormwtKE7jCc4BVBGptFXzbR94yKYPxrQT",
  "key10": "63iNdRXZ42YrjBmFzLpsTUjEnNVh5CcNo6BZWsqq5MDqTADP8ttPiRTuywpvUNKBfvzpiNzWXmeMAd5At9JwPXZk",
  "key11": "4dFzpsywA873cSf1om82PLfxKPuJw1LeXxVS4BEgoqATXLBVtkqKQ3C92UAEJuJVNbNaUjaFtoNkRUjZd1g1JWwV",
  "key12": "5ugP7ZNvnWLAvadCfRWWf8msnAQpJPSJ8XZ6EugD6WUVcngeMG2CzZNCdnZEEkJpp1ECDFtmV1KYSHqvk13H6KFF",
  "key13": "bWVCaJXojdXSq3osrsZFGk43mJQU4STNVKpmFFdik9DynPznBAcMp5p3yf6xDouL99Dbe6VNwozJ1ZSBda5uwBs",
  "key14": "3Bpu9FHrBEpFY1wCasYEUC2ZtsbPCA26kqtsibdkFRkLhAsJAkWzSxwuhrB4DghCE4G3qSk1sMtmUnFRbwgMWhgc",
  "key15": "UeY4bQbuakw2fyWVcXVRnTW5L4hw2cBximFLyaq5VWYjrbFAD3rXHqdf8GMEDsK6gEap5SjuLmJz5VPdwrcQeZP",
  "key16": "g8Lreeie3M3X1xFSydLHkxsGYMVYLMqAjNLgog5kWZzPWi68kzczjt1r86U2S7gTyt9yw1R9pFLa784Kjmt4NZU",
  "key17": "4NkpoyoiMyviGBjWSWBN2jgN2PwKmEd5jcJ1Ro6iQbFz2tPvYpfJVt2QcXyrP1ev7s19ar4EJuvjq3TjCxVtGjZ9",
  "key18": "2pGaWgpHoMEkHnufSBVWhAN7QTM9WRh5bRK7i9cgubX23ap7JHXugp6se2gzzKLDZwkvVhwz9CpkVtCu6eZgbXAt",
  "key19": "66KUMyVrR8YMwko68q9t76rA8oU4pZohdU7L1nTvD6HpWjk27SPirM7XYxNnZ5pH8unHwjoEYQUF9Hh2aQFvFMT2",
  "key20": "2pmjhP5M8DGgMFPggdJc5sCanLTAf3Wg6HCNYDHCyk63gkLNdm74XzP6wvonCB1BGHdTR5GANfeJcXbmhjK8Tzro",
  "key21": "4uePbjCHnv5xyJoTEEeijrEA1ngtL1H2tNVTMk6fRsyu9iGxCba2ge58eWd4DfhJPU2cWvoxzhhjTGgQ6gi7A8Pr",
  "key22": "5pFBTF1fpwhztPoPVqA3s7WVWLoSxZferwzXjRrAgCFtd8Y8fHvzW9YDe3DTF1y5cWAiAPu8iyBJEjaNoQh6VbMN",
  "key23": "4w8UyDK5wLRVoXv12smagPKSt7zKbEhzZJNgAxXjQniK5eJxn2N1UPP4tLGQ2SeLbsiSF9EboGrzqU8mbZLK8qV2",
  "key24": "4SWBSrLhdofhXNmNpxzzd6Dz8g8xcbXkhvNL6WGEYxNih7D5FdcStSgNzCuz9zFsseFcYA3GHrvZ6hV5xt8bGNPE",
  "key25": "3HxtYj3wpMuwxSYjpqby4QSjb814XZUbFQkf73aoqukmDUoAG46ja6BawkqiNrzVxUqVQ5xvmWbJDUBAJMcbue7a",
  "key26": "5nHBxhwuzjdNPtYvAUPSHaCkdvo5at4z8FG16uM7JXsq7KrxEjffVUTaVnox2hCxoTYT1ihzNAsq5WBzvzxXjR4t",
  "key27": "2ZwPKyq9XYXK29X9uf7cZ5DoiPWBi5hEuBrdfCVcsb6Jgg276xC3xpT1hfoofsij9RF2bAjbB2xbxFXDda5zne1E",
  "key28": "2p9P9tym5PTpgtCrkcusrBdNHb53Ms6Lpw63dgFdksrShRDU5mKmaWbSdUgX8xVVa75SYxfyb2EbiqaR6S8hp2jN",
  "key29": "3D9nmoew5Ar13YW71rNdC2iPK4Lg9BmMziCjdfqHL4dnF6cXQPW1Vbvs3N3DhixfbVRvj9kJpADWB2ZMhJtJdwoR",
  "key30": "2tUWfrU4RmyuPGWZkYK3pv5dEnvWxM2SvwTnHxXgQuu4CFSjcd8f8gN6LDz32FUYMzg7K4DVzGs1DWt19oDuL3mB"
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
