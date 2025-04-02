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
    "2jSqzq12crMDKoVZ2spFHvwvpgSw4i3ZNFaSBJXejpESbEAFPw2R1QDk5A1aww13whSXFcrNtuvb6E5NgTw5K3iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EwZw13ypJCzG6WJYSrnFYp8C6wvSYd7y58EKqCwauFPPYCEK283PUQLZYov3KiNvG1c9b1hEFfLjP4G5sf6Va5Y",
  "key1": "5tQ54UqjAygSf1ynwxhhUW7dgbwBWTPkQXe61eXBwUunvMzHvGtZtmrno3v6Sy4rfEqBs7n2NHwmdZgKoDnUYPd8",
  "key2": "5tsKbGLDmyn9MDz2TyX2CcmPg5rZroRD68J8cgqceasfVttSLFBtrJVwbzLp6D1Pvx52LdwUvc1WihokgGZET66J",
  "key3": "2zDaavLYUWXKT7StRWPD6we5jzth7dNuQSSCcgUgohugBxuGyd1MBPN94ydSVdSf1HSvq2m38tDGAdqWuDACioJd",
  "key4": "2uiUHHDbNY4fn3ng36HdAa3JXyGsDjnAYEn3ZqmHi41Uepfv3fPVFZkmA4wzAcm9JbWRm9grngxEn2WEttz5VZhc",
  "key5": "32cxdXstNtEpZRZgAs12smbrAjpFP66QxA5hCAYCgAqVYho9zq1xv9NWdtbyCSNxJTqCxwNNnq59L6bpD8iDRmqi",
  "key6": "2kATUwhWg5GtxmtiasxdwRKwpsgwM4pgq3AMBQeH9bG3zuvgreU8WeznJDVE2WsHD7bWEKDsm9Qxytw5VE2wisZc",
  "key7": "4Hn5tXR8bzWF9KPQgudZmPt4eFn3Qsc36i5Fik4P4m8ZoX7q65F9QJwFKG1We2S4DeWPV4AroTdsLwawW8giR8iT",
  "key8": "61ShLSAvnTwmG9xckRGRKZEaQcMVEvbhPgEL7ZjduX1QrWVAg5et4jyKbeLr5xPJcT1KqZd8avRGzLHq7niJq4RS",
  "key9": "2bPbmv8FaPzukncYcZDp8V6vHFyfZMZRD4b1YAH5np7F26fGJLHynaLxDx24XYhPzP4J6bjjRsiTx3rNmPxBpTzd",
  "key10": "jJPTFszewjKacfZs2ngYJthmhV6C2r6Hk7SoQNwjryVSzg7eLr1zBNqskdY2T9mUF9sLkub2TrzHR1qzk6Djqe5",
  "key11": "3YkoUmGaB9SQCYcqZh3v3UAZMMyzTEREjPxEvyB7xB4NkZmCF9Vgu5bo1tyXrbUKyNdm9MRdQGLDQfiUJd8JkgYq",
  "key12": "453zfq3AAGS97cuJZSGRhdMHceKy5SoLcq6Pb4hLTFNNk7dKPrnHsDaHAshhDGJvgyMjbzxicNhHdp238gDTFddM",
  "key13": "2M4u7Fi1XnSDpkC8xiwKJAu9Jk5y6va4S6f7ZGpR2HgvXxnoFGzh8jZyzSdHjeVKCGK3HFG3Xxo8dAG434PouMyX",
  "key14": "35Ekc6ZiC2DT3YxRLdZy4KJjiwEuvego1b5z7nTf4GQWWTzvcC7v4cX26kACoWKrRT4oiV7wKonZ1mVuKmiCUrSo",
  "key15": "4j6bhV26HVpUEfEUE9fpQLE8mLB6Rny8MYQXYRCFLi8253WnP5EJsjp4e2NFxTCphvPD4ZVWYw5hEWVMTRXvtBkH",
  "key16": "5rkAW13MCjzDf555fw4nhZKRpnBHGa2DLAMdoQGd4KomJcVgrLjkvXenYUZkxR311RcEWuByL4pTFU9TMLpu9Dmh",
  "key17": "4F1T4HDb8B7sepGZcgM28zkjKzgcmhcN5WcohEhMDmxQwBv5UCwC1Wu71YkgVvzNs3p5jrDpVBm99pQC17SoMCHn",
  "key18": "4sLkQL6kfguaFhCGnfqXzfcCWhQvhTcjgu1btpsc72WVUnCEhZ7Jv39F5hHEpyhCjeBT3kARKStKWSdydeKJnXYp",
  "key19": "5UqJqaCH1tBWgeEEEqFD1rtpvaSUYgeBrnfg2arjYmWPSkAX9Lo42kKZRo97GadUco5AyA1tJdkFLhJVp7FwhdW6",
  "key20": "5Dswb2x5HuHoCncmrWo49B8tQ7nHrFC28nbQ5RUZ95oxrhtLSesDkGp4WPyiJZTrdJJKbpJqzBKRMTat8imeBJhT",
  "key21": "3A4qDeXUAxCQLdBHC6aw9ceREJBYR43ginKttvf4Y5w2LCPd2yBFEbRtqFWrFEicDYc6XNRNtbw57XVySUiJ4cUD",
  "key22": "3ZFVvk9r9G91ASiCz4bA6YC2ZKtKcCqM7a1b4RxrfZMo1W8padPMBiWNmesAKXC1mVBbr51sRdUnLToQBHSskH9h",
  "key23": "6umoTCE5fpVCqmHHbswCBgg82Hy3sofd1xSvoQQLsspAaY2rXRvwqxh2pLh8wC85MnWxHQLSAj2oVTeCuayaSe9",
  "key24": "3KQftZZN1UKBCUXGvPohyaokEmuopipxP958QCWHen5xaGzW1ts5qXVPCag6q2rZGdjbJeEJ2PvH9Na4qT2WmLL5"
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
