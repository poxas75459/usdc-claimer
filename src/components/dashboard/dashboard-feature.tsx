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
    "4hMDD1YprpX1sGVz4XtwL6J4EoRXWdxi28bDVe1CbRjYCEfE6NFsfnzz5PqN3XWH6nU4fHaSUpWcYrwYDgEQxvhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vM9X4gxUMTrq85GAoAwgEwo4wtPnhPgQhRDEXMdrmGwNczYYK5pkeKptgXA18nqM82dxBZVqPtuRrSvdJaD3ELa",
  "key1": "4Xd2LoXpFVfcLg522AADM7Lj7SsXLc2iZEQg3HXUXKnXBBNnA2JnX9yLyrVAYY3YpGpUGjZixbboK4kz9R59xk68",
  "key2": "4NAS1TXUqUtrckUMtaPEncorufRugc9w323hC5PSgCb1DZ6NckR4t5NT4LnDr4XFaWXVNFEvf71Dh6LPqtLkSed9",
  "key3": "47ev8wtGSz2o7S3PbbkH5N2zA4nD3hGN7rUCanrT3qzpmx39HJ526wAS4Ehot3SG1mfAqfy5oBgeXFowNCMRztpE",
  "key4": "27Z8jMzLcRHcXEiTwgsFRiNjKFBnJEgbGscEGAuDPa2kUjANPokn9zLqJMYLGV82vhgAFHjTWraDusARDGu54BLY",
  "key5": "2EobhzzxkC65sRAdsSR4fcEkwPPqiwanUixateVo84UpeFPZoECRcvm396pyBEVCHChFMyTanComFRNt2t8tFLHs",
  "key6": "3F1vnd63HXzfdSidhrFqPF46JprJoXYTRp3MKnt6eaY4DqHasx3aZAJccPktBwUMbEn9wn4n4VveCxmuPz52Mpn2",
  "key7": "33pYet5PtWc3sVuTHnGfSnLYnSofgb5c8ACtXfeSic2F76tA4oiyjDsnE6v9eWtFCKLNf4e5yDgpZTSmuFaPw6m8",
  "key8": "5QjTzQ2wqhUpQiMkdCPmZ9kZYBs2d1j59b8fcYuvSkPvBNvoTKBSgeHstj7YsxKjc7JYyTniDLenM3tSMWJhQMDB",
  "key9": "C8oPxLhZaTv7y6c8utXi4MXLu6G72aZUWsWTNW3Xyswtf7q1HktS13p3ouR9vBBVMVjheeSEAq8d7FimHHZzM51",
  "key10": "2J6vvMMwnSpptFwWCiG2N9BXPV54syp9fEMF2Y5y6ymj42shJVTvbWpUoSmhPxS5S82bZ45dNCPuxZCih8snpPy",
  "key11": "216cxhaUKvBN4PK9myv6M6ynKHvkwdRxfTSmzL8NYToSbpQBtdX2h63T1YRxJCMnR4wBNiQH8KzWyLMG1s5MaLvD",
  "key12": "q2napFj6jJGCxDQf2CwLeSC3DEhq81jjF4rgqzkW4GwiWcYod68uNtYXvb98Vv2xRFtnmMeovQPNkcWfkse1U5n",
  "key13": "6JB6Ah3MMWNHqCAUyLzLzmvzaVD9sXBTf7VLpH5xcLZVVbwFd9szR9PJurM46oDSzYowz6uRCG64z26uCSjWde2",
  "key14": "3hQ1BFjxoFTQt6AtqY5Tc13HtiNXazSMCK8BjZ7HheJ3nLPw38T2omJ7rXJoHUFmzviKANJsw6n8EpbaDQRs64gY",
  "key15": "2htWzTGzpFT7TLR7b4NeWRwyAVziW3C5Ua6QhuopTY3r4ckAfF2ENjEuEoch4hobodU9SFFrnjaw7a91rftzaLLC",
  "key16": "3LQWyK6Fdx8AQJ8gNBM3K25L5R7HLYydvEoeMobKjif62BBwziEVjEEMVP1mcQVjtpd2knckvnMp5XFUFAvyZazm",
  "key17": "2SM3snJ8PxLqsE1nn6W3Po27bhXbDYoDC4uK2XorWkcQvq5X2HDMSAJVuoy8WVkt9fc1GhjWXYRAeuU75XEBp5Go",
  "key18": "4dc5qUsdtQXoMrGfyQKFs2CbddtCCZ9PPcYuGJo9j5GhsDedKKM4VUPBC8Xg6R4sWUrqcxuvcdEmVdbyYYPmm1Ri",
  "key19": "2SQqpLnjmDbGENZP35Pwpz1DBd7jug8LgDX5cTiSbH1HXpvB7NzTFpjmddSSRgoekzn3wFnTUP4gFQur2SRpMHSW",
  "key20": "pFs2uohL1izmbsdwtJMnKQiCmUEKh1cDjfpdpBzapFZJmcN5ywZ9eJTRrnC5eWUHR8d2u89SePsS87cAGm1mLwC",
  "key21": "2zBYb1VrpGQ8ahxbasYmUnfboRP4vK7nVfASAXmSMopHUL8Crbed6fqeVstNuv8tgmiVeHSTFDuKMh3RnQjcskNE",
  "key22": "4c21tMUjhLsE1uinTAx3GEdcws9MZYT58k1sz2he66XLSv3E3xcHb33LZc3fsBNUy2WqCjwPcVAxfSj8VKy65zSh",
  "key23": "3TuGKLAzohFbjiU1yqv64jWqVY2mbMhvr3TarfRFpQzNhKfbRbT1bchoh5Db3N7mMj5i2j8hZP4qYYtXFW1vo7TL",
  "key24": "3pX2uuKc9H6di8Awnp2UANg5ttnj1uUctuhDJenRZcUobNEHUVEXc3A8fAcQCAmcdwZwrEkNwYmL3h3hsg9CFh3E",
  "key25": "2HLKcqM3ZYyBKoaF6A1T9XLehZqZoa8dTaSZtACnWvcbVKaCMDxUN43aBLbirZcDZCbU6gJawpfcLTBHgLK9de2H",
  "key26": "gGnXQhmY5szxmLvD9UQJ23UU1TytsThAr48PQ2gkFqdDMYKJ2SdCavNew1NMAxRRAimf9NfQKxfvYHUmyLFy5Cy",
  "key27": "21g4KrUETvNbJ5YxHUDuz7YQDY3xgyNjx9Q2VxdDzYQ8ouqESrUxwHBoyXM12WAX1VYU62jCouasMPjAb5zQZWrq",
  "key28": "fHfRQBVvKbq87f4C4xuknLpEHWeU5RYLC5BEzuPdk7oBkPwKmJEPBejpdtChLNzcanPrT5BjQbR65Eamve88Q6d"
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
