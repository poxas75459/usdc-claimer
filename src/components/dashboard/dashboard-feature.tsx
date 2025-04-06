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
    "5LGJckRc84qoEYQG4CPfg4ayw39tiuBPDSccJWhodkHjvUSTXLaYJJtvAkhJsvAhHx18PSJGJQ1XWFFsxzvzsQW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxetcuFPCtHpEUjJ1Ybe2fyV6JApRsUjEWYCNTFKzzDFgxieC5t1skTgMUiQn2qdDeVmhd71vnSonn6uphoQreT",
  "key1": "i7ZUuRQ1wFMGstSf9VRF5pBVe8gFPwdhZPyiuytj2sDKCN1Ff3iKH7LXdkLbUh3nUNG4WwVYK68QfvE3VwgfdeY",
  "key2": "5UcKNBrcoFuPhJaw4B4Zheiw7XCxTU1TCtvfUqrntAMNyhbx8dYkede27vxNySdF2B3ojA3aJ9uKfKipvtrLAFxc",
  "key3": "3nT5EtzXhz1PEUGfCYCSkYBw1ECpAUpwStMeGSrnRF6DjCdDf2sqybDWtSfNUT3Jc86gfkBA1LE3xKJ2JThM9pqC",
  "key4": "E6xAwtd3eFUPwkTAM5xZ2LGQMUWWLeephG41qXqL1Vm2DSN1FbJBCsQEPwCUYG9yfdesGyBdjmnSLhhqXpQxuL2",
  "key5": "3r53TW3jpqgAZxjwwoJBLx8YwG5owumCTmBzqp7K2jxSMpP3fEu9j4NfWezyfXkENN6eWwDouZY7TazbJV34YacL",
  "key6": "5qp1b3i2oeAK4Zwa2iLgJN5mTtmVkGFXXpYNbvZbKV4zW136Y6bUtWCvGuZ1xsLec7zFBMbECkU8sAm4KbbYQimB",
  "key7": "26fQ2n1JK8N9GqU7bWKKd8cJzw9fw25DZR4f7J3yyeqdcZBKWHdhX3sLFKwtkBLSVGruKj1cWrScL7C5bFeJAHyr",
  "key8": "2Px3qJCHi681uu2bGYYd59d3LUCCFDGeezxRFicu3JNnV7JY4K7xid74kiiaj1mMqhejRu7tUq8AVgaqTPZStN5N",
  "key9": "6433LARj9xbaefwLRztcuw1ULmrzfmXer1cLzfBFh1zZ4vJLjLjYVwtSym48iML2DVpuAqCTFCDtG2WeE6EkNdLq",
  "key10": "5uNM6NnriTkTsnJyTaF5yGM5GiJcqqeLRh9bx5GErkfTxiNcs7rKtuk581rsNf9LAqSPbUfJqgWYhAh7DaTUvZn6",
  "key11": "4ynMpmNX2sb4Lk5k5dNJueHijuQykTJVBiiBqgEaeR7S8jHCAKZPKzGx1tZHmpmXfKi2GCXAuedewxNyqf7aHpKT",
  "key12": "5NtrLVcxgUQFMhW9S4RjP2g9DknvXfNLYGrx86sVKdPztbhfeygMxBykMNgq5ajKGuaBKoGTbVCf7cHAm2cDhpq8",
  "key13": "5RpTSWDV3Z6j8rxLMLAakCGL8zaf6VTTKHXCyAVpChTEYPsU9oAyWCobZHMbjoxTS8LFFUNLspsb6jt9dYCsRJan",
  "key14": "3ugQCjLfqidkttJ8s2zeT1x3KKwCyufvgeyapHuaa5LSQumRKdR5emhx5sxopt8gRzUcp1toUVEdUSKTwGW4BDmt",
  "key15": "5U4Z2xytQNxs2wSbjUnPH2TqbAUS6CCihiuz8EDGX93bgmauZwuJMgGQyEkFpdnYRUWhem1urcm5KLXoXebCfFTc",
  "key16": "5TZE1Mnm91ZGE41qLv2W6yYyFG23DSfitx15fmAyvQBW5ezscUF72VtWEvUbL3Dwo8gRNmzb8unYEG5YHRCb9gHq",
  "key17": "66T7kEhd6nD4QWTYK3SbaRQBtAwof4pGWBqpbzqTiW3P2meUnbUoKcEqHz4vnE9X62GnEohnvxTPe8onF6Jt1PNM",
  "key18": "4BbbUpZKPN3XrgnJJ9i7TsmB7BLVXo8o4Wo1RwQfCTUBBage41MpZnkxGrwNy1eUVcHyBydoLnbGKNH7MnUeJNvW",
  "key19": "2pVnCtkfY9dz6emGaMcah6ykZAdxFq5WAV9zqiivtzTB4czTgmomv66mSYsieZretjUPzXdeDpWBtFifc8RnydvT",
  "key20": "6VYBinP2AaXMyvnjV3NHANgJYykJgrRPnYWcVehXoxLt4PiSHotQqTqsm3YFHDeMY2B4FeWFK8YxVZq8TKLGcwc",
  "key21": "3Q6VNCbAFYYCQMM6HQQZH8sSr75Ne3AXxAoShsZukG43Kva4d9SZgrB1iApdEcradTbjA3qmwqcxjby8jAWkS6ht",
  "key22": "5wZqFwXJFwyEe6YgdH2yXZ6joDCUqzziJJhxNEPD4ZqYQrjGNyVb6vaNQjWix1aonjaQfuHDrVuzRK6TeVXJoYj3",
  "key23": "3reNukTDkLAxWLX23Pn9iAZ77y8hDpR9XUcm4Tm3BQ8QjaYx3S5JNeHwSCXUpvhFHEqAtthH1wAAkp8SScKVTvGL",
  "key24": "oCHy9YczmET71sJT7iiv4hWVLnHFVcQTn3iDcG4MNYQFyxjXDgbNqXPBV6VPDooz8Crrx3ZpQFozVdbUnqzDUTg",
  "key25": "3x3RSjDKRetH41udmr8vimtijBg88kj87ECCd6PTHs9Qcr2RPnW9r3TWxZLG5PwL4T3RquoVyuHWVY13sMT8WEi9",
  "key26": "4JPKttLmwMbh5rG26Y6P3CtaiqeQv9sXZ2QJPRm4cZ6ytYTmkfnA7bsD36kh4dfrpAsJ5NZxeSK1qiTJvKPws71Q",
  "key27": "RNZVEWJAurELGr6LPe3KkZ11eKu5ksh3SaNHh386WrbKDLNuoUQUcRWwpahVdzeJBfVt9TpZpFoU1ztv5nf9LMy",
  "key28": "4otrcbFsF6uKYk7AesHuV4wbL6k4K1DyVSRBC1DX7PkdtGuadWXMW6qWbwQPE7Z7onEN2zXbY5zLsv9rDmnUKAxi",
  "key29": "g5rEE9QTnCqaqwhm9ab56rYSsHV9x6JixZaQ7NFebgjNFG8CpCWN4CQwPPsmnPResowfF5NXavycqv8VGomssgF",
  "key30": "yz8HoQMjDinbcXQVPFsr11DKY2KGfzDQru47kDWMQ7JKJbVfW4d1suuWzwPDLo5FUdqjuzwg2ifAJLTTztJSba2",
  "key31": "5vPuHHLwAhnhSe1DYZwxrfFK5yHDT3KaCfE91fKqv71ECem5EcGKugv19ZUFcnGuSNEZsa8URuYuhJrR9VotnaKB",
  "key32": "3y56cBCaqvwrxtVvGtg37ajeNU2wpwX9ZDo6ic2UKKXvWoyiBQguMUu4g4qCy9cVy6wffdc3MQinWwSJDS6Zq6gF",
  "key33": "2MMi3YwBm9swFoi2zQpAnZwmfjS556XW4ZxiFbP3dtyuBykDd172PdDcuvE4MyAZiD78Vkn2a5VJQg2NJrsB14Cr",
  "key34": "2hRXRXpJAasFwjmLqkbhr4W3Seuhd8fATvqCk8aELvUF5q75oEkUt4G7nWEXKJsHnWvxUnx7buL8rwSz3vNGChii",
  "key35": "628GrMfqmW3aiLsi1emxuAXYEsxibYaofCe1Tk1BSRUttHGnuezDQQ8eGT1L8GboH4fus2V1VywG3Y7C2kHdo2xC",
  "key36": "3Jd4gjUAEtrEV6qvT5ux1mH1R7B4Vno5EuEAkoeaVma4uotiscHjjSuvXjQXZBMHLTL3woipxZNXwv4r51o5i26v",
  "key37": "4D21J6rLgY5RXB1awGAAo3W81zDgcXwPYCDFrqE6LDjBWFPQwvfJBWAP74p6wzZTnrS7xwn1m5fA8MGRzCtEirKc",
  "key38": "2Qf5p8sV8d9BdMTimLUP1fZbXneU6uyN44S1zMq6ScNA5Q3oyBpk27NznRh2z74Pd4XyyFumj83mQFCehAAXu8Ud",
  "key39": "2N88NvPRpUu5XH4owAf5QQKSP2K4yb8UsGch43YDhBWoWKcVyez7mt7dyhmJ8kch67Rae8C5Js2hfTLpLJitELKE"
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
