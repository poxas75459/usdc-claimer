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
    "4dLvYTAoMNCwN8tzMzjokPTgWzrFfxYnZ3o2SpUtNvck5TGJ1Jxd7pkYiwVG4WdR8wD4f8sqNrbFF8fRvZ7Xu26u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aeunHd1K3m8ugChSgdkHp4ueTcXkWmm3kvtbN35bPpd5DsMxuT3JKLEbepqtMF3qBzzmpcVGeTEa1aBLHJETuwj",
  "key1": "44MQCCfNoe44N3aeYVag3TnmYdGcfxAmcMBsebBRFSwnyZzdsixUuqFAjRPHjbgGFKZKNwCpBUSJx6rd3ReTKhbV",
  "key2": "DbYsdoNTM9evp3vagrxeFBHXzrrEQ8pJ7p5ogxn3H7vBodAqndiwyHmp1r2FSgSWGfdHz16zFdn2G7qJNUSEVXp",
  "key3": "4pQpcneLVnbUDtvHmPh7ZdhSD5X6EiD7XYiGjASSrXYyrevwX3hdpQtCWBjwzVEoeXs21QVgohZTotcTH31zuSKr",
  "key4": "66AfKo8kTNWbBGGVPqyzeZwcfwCTPbjnRJYNZoEZ2HbvnFCNYxC8wTPCkf9wVyFU79WH8onGQUYJ44fonkcqzikM",
  "key5": "4ZXV4YSG8kNGPSADmxyScUK82HJH5BGiFjtPMpf8QCRKg7amzYHC5TkNqxNJTpSTyT4cuxf9uxLhqP2A36tEE2gw",
  "key6": "4YzzM9CyNaEbrj6NWTJQbkVuPzLzypsARvti2Qo9wgzTHeoczpZBkE5379UK2a9VgJrDogCLfkuH8GGyLYFzYQtj",
  "key7": "2vbUJ2Bce4vkMt39QBeXduxZUV5Lxgz6JnHZKP2D6w17DVmHPDwkyeWY4RSWc1oncaNY8UwXg1SPLH5VH3dDVJwh",
  "key8": "5kv62i63y8Wo7kewq8HCba3Wjmer1ja2yYvYPTpumNws9WPc5ghA188zgmR58XzepimEUoyD983KnBwePWxGCSkk",
  "key9": "4KCbatgucJfaVqJJWkZ6iyvKfiwZnNnjvAmokx411yzsBA4KJxr3rKqWvjPzG2W6e1ovksoT142Lz6srJLNiRV6z",
  "key10": "558ZV55tqYjuriE7G4cAsiURDNtfLKcUfWtCK7Pbe5wJaoRktFDrTszTTjTJM9HMvsfxih5eiaNys1DCmjmW3vaR",
  "key11": "2aTimU3LnPgSHwdKb6yJxJqWfzdNskZyvzxoVxptUV6KcDJn6EzWdAfLxHkJZc4c9onhr3wkBBrpV1eEDRBJuQ3b",
  "key12": "3kyWor5rvzC85PaLTUenfYRtTJ59wfSm1mTY82cRveFrFq9QUqeqjNkuHMgPbhFFYGfxF8Qrg4869DyyJDHvMt8P",
  "key13": "3cvdAop5HRMN7xYaEebiD8p6nHcLKw1btJ5ve6fPBi7aAbenxEzpmeupAyEuy8x9nSDoELznSqseZxrdb7oShArz",
  "key14": "5GkNWP5gfynFKiKeZyEPSxR647DiA47tDA4RJKm1VTsWYryU1jhU67eBPbVmdFmGQmXBUqFCns8N2JPikabbP5n4",
  "key15": "Wjyx6StbnZQyCSBA3MbMvHXCNy2e36MuzoELiEM8gnbBKdseJ99FBeXfpFp8DSVvdsASytRBTsqdfXA5ZgerqJ2",
  "key16": "VkhgG6cqKuT3Y4zv6iv26yENPRHWH3wANXooub8RbBDLHiHsicj7KjXtT7XBAyBSMTyPLFrY5En23u5ZH1DZ5X5",
  "key17": "2wUHVBL4SGHfi8Q373GRbXs187pgpEhJynRx1vvKT9RJvao4bZj1bhMS5LosXJru7emZ9cn2TA2gMw7TXW41Cci7",
  "key18": "48BtwiY9eyyTqD2USAH6DcrgUpPWCsTnZSx1k4hbxCMbCEniadPiCe5bMjdesrY4bKF1hbAvSt5XxsPQ3mqkQM63",
  "key19": "4QJSfxbZTb2uLkN21arL3H7XQAUxnWbsBmEvzsZYPMm9yJTKC4b93cGrdfWxp8iMN87UgUwvScUWkaPKtQQGguzd",
  "key20": "66yTarwAQV5vPWHUfuVyLrh7SB7g34iehqt53ecxLb9jbwGzgU7hgX2BQsNnHhEPFcfsmVJkcXZ7Aft5FTbqqMoD",
  "key21": "48nwrN55Vnr7bNjGpgoHDoftZkSXe8YjXcdhT85cUSN29wTenaxrWc7wzE3VgeEstVRNMFMd4imzmBT5bmRWn7Zc",
  "key22": "3y6R6hUudeRcJJq2dfhnKqPzRiiHMZCAJh4wgMxBTDUZHxiiGUsrTy5GrVMzF5TC6Vg36C1YbjGqxtRVuMm9CibH",
  "key23": "4wNSD9J2jnpeVctvTRAhW7jWCVZmK5eTCg1FxwFhNKXWUs5eR72tZHKNjUzkesce1ULPqf7cJVGhhegC2LpRFcwz",
  "key24": "4zFdp7cJGan9y865UmJRvXhLtnj2EthxikbcLEt9UauvfKMkz1eWkn11yG2UmniEJpzmRMRdcqpb4pvrAv6iJUaQ",
  "key25": "5GgKQbJacshMAJAKYkjrYW6cFwSn2e8V42cPPPcLJUMQiN1WXnJpv8MBu8chgFVS9o1UtNFoT819BMZ1yVbaS6Rw",
  "key26": "5kSDR7bspNXQonYRGvZDum9bXVYwNVUKBdkLfHrLHn4MZr8t8SjeP3DJRom8LvokMqHfqEYzv6kpUVyu6YsSXDNC",
  "key27": "2gTqEjR8ZofPedRYEjn2W5Jp5eBM3gNuFsqrbXDbTEJ56Djk5XdGg5rcbrMoxkZg6TKdjqFDYHojSvJa8QsYjoa7",
  "key28": "5PPCF2weztQHyNKTeaoNEx4c8PT9jBoHXynfyniSFDA8cUb6DJ6RnhinysPCATCmj4DWzeuFYgMfQVaR6i2jCNbo",
  "key29": "3BDYhAr3BrYaCMqH4eYkCbqeGTvx6W3nomKvR3RsNDxak3oD5rRv8sYzj1TynFmr4vxw4kbBEo193hrEaVrKrnRd",
  "key30": "3xnmiX5xA6uSiie4iFtJG7Jih6R9rXa77scan5uapSyiY9hPDmPs5ZirZhoo9y1aBCdrwT12qoz8ccvaf2DAfdSF",
  "key31": "XvZqzAtB77VNBsdChkuay1nr5wSJKR9qR5ccseU5cwGxajwDLYLiNnXpGkBuhcPQbY6M9Ap9bPnXonUw6o3YsmV",
  "key32": "66gNbfXRxVGnQzQKdq81vmCXzutMKGx5rCsQFagqPEigod1QvKCAvuvqc9NerZpPniWydCMhfuc7eswiGMx4tSYk",
  "key33": "4ss44vfewyM3vPg3TWRnaiyhey42yvEmNqggqAdNh9D8g735jxaR1UaoySV3ke2UPpFxV2moGF5tHxNB8qYcsV9x",
  "key34": "75aN9W9C12EUULKWndUDPEMZpV6DNAGMfeuDNUoctoB9ajJhmYKXdqJ7MEVnq4PkcRevMfgKzhLEQBXpEQrAdCC",
  "key35": "4kG2JgSbydkBc5a6NUDDVCNueYYoRPPp3JrFcjAWgvKH8UgcPFu5BwaTRoNM7kjUVWAtQ3fBY72Ec9L2BvZonERx",
  "key36": "51zzE699pLDw9wqQ5rsdqPTMaTyAJuUAXNz3fmHShuzLdyiLnq6apt45GSscGHwWvJhLM3jUrJJCwir9r4LCZ7dF",
  "key37": "5DoF2rMjMrNSCVPuy621TpqR5C6LNZPKLTUwfTj3TVRcJRehxPzpHDecrpZiztq7p3AckVFhMUu3Yktuttf2ETsn",
  "key38": "LTFrFKTsYggx7k5wGGfb4YkPE9ZioebhDrYJY25jMbCuwGPG1ZAk4rwyDjfHmf6UKmzYMSWf11xA9aqs6htNVwq"
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
