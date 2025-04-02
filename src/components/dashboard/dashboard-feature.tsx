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
    "3vxffRJ67GvHGGD4hHfP7b7yR8k9SNmtLsdBrzCJ8TeH3x2oMEp44K44LFeM74ciexCKhWATNQzDLwsHgEwuo6vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BgBdBPoQQJpmPqch9AkKYwRVeNLUeGwbzcVvDRJY5PXsoDKuzDS6yAvvDjJCaew7GnwPyTvdZnxUqwazb5pXwZi",
  "key1": "36Rbp6SriwLRkHYacFS7q11E6cdm3wpPuk8eeP6JLvnXMgsqUbYZetpSp1tL4wDLpYfqQMXEZBdaVFf8aYGB2oKB",
  "key2": "3DYBkPr7Hi23FmoncQDi2xz4K1ATsXnHVoV1y3SdqvyDmE8QhXKqJz1LwctUAsn4Da45RqBgRp1Kqb5gZy5eXyV6",
  "key3": "4EdqSCKd3usJWz77yQDwfXjhk8KMr6TjjJjBKHRknFzPhrjX7zNxjQrqmddmUN7WuRzfeDDAmVanBBZsAV2wmMkm",
  "key4": "2GHjJniEqXvd6poxpSSFPAAv6f41GVDaiBM3mHndLXincQZuizBNCiGo3gZLSFLSCMC32t7DDQVoFBggWVDjSwEn",
  "key5": "4qN43b9zhsy5BPczZ3Yk179jkQ4mUTfqKB96BGypuhCUdDynTsXsJ3fUJXnxTmF6fojsJSa8mq8Me38H7AC8ijdt",
  "key6": "SniWhfFZLYSmhhKyRFVnDZcZgwFgmDxCD691PR19mnyAjsVKF6a4uVybRjaGTqjJWQeZFJsj7zbxryaYzcBnVhb",
  "key7": "3oA44bjmf7diwnMB63CkAQYT6XKfj3HPBExrdhWF3U6Gtm3G32gr4DM6nkN52SbfJ8JdfCVpGZLdtJUkuoegibmn",
  "key8": "anGzKZtLygXwy8bTVaYwEzQUkJn56YNABMTpeWVcJbmPWK7gGDL95Fvb7E7RCQ872TteWNLpeE6Br3TKzK2kVNK",
  "key9": "5FAF7x5ji2vUUf5smAV6C66BPG7s657e4qNkzuEYwkQdWmvVFmXkie9ARymb4Cwq1PP4b68fupphUSRSS5bQ97Wt",
  "key10": "316T5QGfu29WpPW6ko3orZ4iAenj8LyXPMQ6WDwGSzPSTwXV8DznC3PMsoeKzXm9RuhpjdFNKuU95qKgKKneWswB",
  "key11": "3QhhzC49CEquZ67webwsnToSz4v5QdnC2mRqZeRD3QsJbws5oP54E8vDGAq1EvHvYSVArWBVjn1CCMfRM7CVyBZn",
  "key12": "3pEv5eHD35ySsj31siY392pCqSJp9dYF8ck5VWG45cnH2fJvcyVVxD9Hmymw99p7ZjZdzEtpAyQVxKvck5k8pMVv",
  "key13": "56HvWTkztvmoTJpkLx4xjJ8oTWtrmdUZPiTAyLk5QzKnNvtuvXQRkW6Mr9x2WW8jcGmeT3ZbsbNSiYxRfFXMqvmB",
  "key14": "2WtiJiMeyQeHGLFcZD6a6mQVpFwNhy3epx5VygdbpNYwDudmf4RdgdYgktyyjjz2Z4ggq5xAthb6o1DQkcPJUWhm",
  "key15": "4KLZZz3EruGuQsvFTCHNvL3ojVKLy2aa5m4pNzsG5oCZn2Ae6F2aj3Q3zNBNPtjnDsQMCDQoXZ1AVSFn6aM5D6uM",
  "key16": "32nN5W8k4GjjzbPdpBH25jRsPE4jG3YztWHYYNQuz3Rswrx9bEGZssTJzQH4ndJPprYo3KonUTFBFCv5M1hxFVnK",
  "key17": "mpTW5XyHdNFnNiZmcifpYd2SqtZuehwePEMXCWaQYTrkLhfDBY87Boiv4GN4H6RGaVnXEX14jQtnctujLMPJYP5",
  "key18": "3toHjygUFZJbgxpwdrgLz2xohhqAxP4qjqNgy3PPk4e1D2dVYXzuHPQXZGN5Ysk5W5dVcoUiDJNMniEyYv3Zg4K2",
  "key19": "5uEZwQg4c85pCMM3NeX91CATzaPttiTvHbVdsUKpBmjyiaqUoH1D6AoRsTpSqZYo4chtktuy1waLJgqP1biM9wTL",
  "key20": "2kFX3h3VC2814rqhDJowNJEJfUEnkEGZ3CDAV7XpqdcA5r97qmCjdR52iJeet7ogF1TYGGfshCwn5STGBV1RGQXj",
  "key21": "5cUXDRhZSyLrJfwBQoBDPvXmNKkaZeySCZHrN5gF5J6Ua2wtgU24QkVTsds2G3Ypw2Duj1mz1EE1e3A1HUpyqVB1",
  "key22": "St9biaGETCxAxpzsyQir2gTGZtKzPphUgJqcRoG4t1eXkibECxGiDcQqm6oRxH2E4eiMsYmSQaS8eBTpj2no7y3",
  "key23": "n4Ezt31jTeEJd1zT83D4Nt93sK3Dkr1yuhDLMGWDvQfW4zcDFPp9McdkX5U1qWArSTBYsxa3Sx68KtqYL5dFh6v",
  "key24": "5T1ExS96eoPBGSZp49852HgZkWQN4S1G7sfsp5TVp2qbJx6YRRrgkJMYbRyoCby1t7njDr5yw4aAZcVQ7oc76BKF",
  "key25": "4XzGPVKzLrTRNruyrp9AHoHCPXqkTSRZKG8F4KJDCAxzXU4C3coeFQBncpGawJnvP25HHXGCbWY1upQsb48s3MV5",
  "key26": "qc7s6ayZUrLG6hEoYQMweNFDNuE7aRkwD94VwMcvd27TkViMAXkpX3emRYa5HN7NH7KrKYABG1UxPe4btvteyAZ",
  "key27": "2pExyyyVb3rePLPNQNSZUJ7DsouRuqmmPqY5TSrSWQc8FmP749wbyPguedo9pkeNjkZFiXQnhmFjMBu6KFgZejYg",
  "key28": "5MSLHD5Xy7bJXvpAHdSGWaZvnLRHUQweZ6woQDP3WtLBCEZorjBnbtYiiDmGBy7dSc7cWQQt4YqomqWA3piKxrpj",
  "key29": "2NyBA34nYUMGnciRvj57d8i2mkS6dQQoM6KbWm6ny29gsCGhowtfMUWpyUAya6jt637PyJ8pzGPTudpFS3N8jKQb",
  "key30": "5xp6u1KXh6cL6KRbysPQ45YCo9A3UnDRAAvrDAJiuQv48eiWGYprPG9T6p5Tf4Gkgf2z9as4XVAKVBX2au6UC6g1",
  "key31": "QYUTM5JtNhnU8GZ8gF2cWwwm2rit1xzurzWZCkZWjbMpDgpuEeZ5CzmcVp4KNsYJMnWPsSKkDYTo9iWgYhz1voZ"
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
