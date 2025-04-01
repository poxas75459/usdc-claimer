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
    "9TCnVJ7P3SsmHsvYAKeUieBYzTiX15RjCaL6Z3zTyxjafJbAsxhKmbmkoc1hrP4L3E92tk87WzonkgDr1nrUA22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtxLTL1yq4CFpTvGmeUkhihjUsjHP14LL4kJ4zD9sYhGBceqQusurQJt7CxW4yLHxaX6cQASXg1czBiKAoFGsM7",
  "key1": "EF35xZYwE91MCQpKKVhnwYbTFqQozGRus1P5YQCU9rNe78gJcuHNBigWBiQ8yowATTftLimjzmym7HY8dRJDkKt",
  "key2": "4aPDGoRiTGucw6HfZThDkYTM3snK8M1WzzpSy4DE3zcC6xrqCdX1fdRtxzTfedKmRCwoPz1fEg3UnhmeK9AvATtJ",
  "key3": "48NHuub5fq5y51fX2nbFUBPysj6EYdYpj7wKVMBhB5zB5MUhyTxuMXbrVqMLXLgZ8MusNrPXnwUxgwKi5bC2ePxe",
  "key4": "2b9V8MdU4fLqwxKyWmwpCcmdaHTD3Zq1cE84kLEG4fp8CC7vdB1qgKJWK3pDVTxxBvTVCScVJt9L1F7v3ssBrH1d",
  "key5": "49e9evFQaPaV27Y2ESkQDzp27Ew36Qha4HqCpSCkKxUxtbwGXSt9vvwggbqirK1dyEhE4HtLi9LsVg1Z5qRYSFY5",
  "key6": "4vLSZ26KZ4VybXtXQHvUQDtQp56vJEGb2Sk2WyvYgfv6yyPiZk9KKyPNMANGkyQAW8SKsUr5153rhrQrofCe5a4P",
  "key7": "5rEHezDYA57iQc7yxKp6Ww6e6LD1msERjCoNLkUyzEM9xkCLku5ekZmyoeAC4vMgTqVwwddMeSeMrWbSUpBJ1iR5",
  "key8": "3Bsm9TwaWmJj4zE6N1YkzpwGwLxNU8WHJ4imEktSc8sD8ZJ3JhAUDMFgVTsb83RkxoWPtMxLTQwNBK21aGjGKNjP",
  "key9": "24Q2tWKDfSzFefiuAFkyKmji2SdVrrMmKW7rKcE3UWbgo6dBiA2oHB4xxVUAxvVPUv4Hi7HMVL9LynY8TWwK6KX4",
  "key10": "53CtksTGiZqcVC6ahmXKDZb9Xby2dE7YS7Hi3H6f1yh9Ct95ckDW2TFUvP5ARB6ji8uF9qi8vt7brLAHXDKUPmc7",
  "key11": "5GpQer6jFaEfYHdj5PSqU6pMwDzuoD7mYttYtVvLg46sFHCvuNNZLmpYaKNJoxruZzUmj2GvMi2NLuKwLeY6x97P",
  "key12": "HyrKMMghZXymzVLyrDcS6SimaSGQQRaB9QFaMLhdBnKkxyLUb1fRcNf3BNRGpt4i4BsqqGTGJz7wdkoJydwhB3Q",
  "key13": "5yAS1WycjEUULno8mPfXmYndxqrkcBd25xKycqYK6hAzq6RGejNCcyAvra3aX5PKWd4KyBb1rbf4hCtdibNar4jK",
  "key14": "4MHTkNsu3CqkG8g79wogosz9FJL8mGeVyhwxSsfrebVbDfvYXdauTkL9bDJ9cgbDdr2BhVMnEXNxEF8ePN4xBXV8",
  "key15": "37n15hwTLXAQbRBZh7QB8Q3Z4MFskpiYsTBmdvzPZR7C39hg7RdwVDT5QQ3ADAoSrPR66spTW1QCDjy6WhnuWd5W",
  "key16": "32Nf32oNNGN8idM3VNRr2nsgSvEy5jsgB32rgYpnD3Eq3N9zFTuUn8CLK1ji1sc1RBmCvXnQe6EhhfdVHpZdLrUP",
  "key17": "2ZvZ32PiDdrK1E7jHi8j7Y7cLszz7ynPfg89aYxSrbXhfSm6NfQbDFtNvCYMGL6Rd1Ny4Z3KCH6SYsudNqEwVsZF",
  "key18": "61Y5C79nF8dMi6GqgdiuzwjEjhJo8ZJ1J4Uwr2QgPk5fkjitcY7Cf1ppzuZ6RHr5p3mVRZYJdVi6hsMWyGt1uoup",
  "key19": "5xxhsCAXYhsSN5oxYMUSibqdZ7s4hLrjhGVBNwnudvKVN3tH8fTTmiHN7CrhyvmcemMNeXgogZBR11qS5zfEm7nu",
  "key20": "4JV2ZRegBhi8vLCkAFfzWCK9kxNeTyGGVCtWLPeBHyvoWYe89wDDz4oGThzZL6KeBvoG5So8rAAeN66NujRLksfr",
  "key21": "5ADrjSCMoNy7mntoMnmEysnV6qSAijpnPTUgSkRsgmhkVVhzQpc6ZdPQknh5KtnKknbVfNxmyU2SVLvjMPxMHYhF",
  "key22": "4n6a4gqtTz79RWdsJwEdK4b8f18QcLo8RdDYdogokxJUmxhsbrpTtENrzcbCtGAvJE7hEWRo9rLb5BNfz1Y8e3oS",
  "key23": "516Bo9bXxg7HTWQ6Y4FpineUyhN43bDEc2RrGC8tw7QrzrjtWqx5NDkTFxZfeguGzkpBY5c9AFwDVAi27dovfhbZ",
  "key24": "oNbHSJ6EWTzeLRrfJLp5wTLcCrPfkUeHBxytzwSrLHcF9wtSJgbaDs6vbjeQ9RJKxpcVvYNW8k9eLYSdLMJDaen",
  "key25": "66ThDeguKBgRdfGiYoWgaf3PwM5RTzxKCkZhQgMzKxZwJvTiPMDMbmEr1guRXAX6aYqiSQeGAL5j9s8h5ek6bbJd",
  "key26": "3QRzjoHxTFaddV5PewaY5Tf2MnWLRec5CUyTYGcGH9iPMra6ZMRSt5mA78TbuvWZTmNoiZRgCiLK7Hi2vaRinsdR",
  "key27": "5yvT991MPZCoRp3R93adtbLThZmf8MdC1dSgtBZURGJK4gNNqjx8z88WfayTg7uLpYsS8uRGVoSww6wHxRJ3JPJS",
  "key28": "451iEzd9FBmiejQdW6AZYpdPm1vjKArMSgX7jnMpb1YK88WQnSSPbiGm6ZPJAYY8WzsZBHBdfq9UxMq1FqJ491fc",
  "key29": "3M18bKZpGdhRAsVTaHRtriEXDruToViexwrAYss3rFiMuQDxBRyszywY7GWyaQCnzhXX3hfPadZWWHsybd7oPRSc",
  "key30": "5z9sDunMr5dnJs5u5ukifeaULY2nY8tMVSAwj2roeEovTScAX7EwAK2DXdNpmJnqYJmLbTnFvoHk6fCnYZ5eZQjc",
  "key31": "3HASxDyg1p9YMsgJXKrqckwr6n7rqq9PbNxmS1iF5GGvKLMUMy29qhNfrWaLm8wXbDoHBdM7sVLm9rKq4NPTEDE",
  "key32": "5sRTfeyyAidZA6aVT1bt2boovqh1D76c5w2WM3aGPDFFUc37vixM1chJuh3Q4VpMwJN7ysdkJsUJKFep4efhXFWr",
  "key33": "4cfSXnnUdwVCL5KiCgwoF5uRHXnSyc9inyvPXimHBYsgLNkPb7zVMkaXtCUXJAGiw1hjcgUxD4kvj5GYZ4BczPqL",
  "key34": "3Z2rQTR5U1mBxcEWT7NRhfebimGMcGupGkGjGRhL6oCoQsskgmxo7EsTwzcYUaNWyRaxRQFvLt69kT2nNK2Df1yn",
  "key35": "4H59YVVa63U9mL8gX4myLgxWq72UcXCbqiJt4chWgzRyGircgFyF41psd9UBqCiY4XRskJVeCppvJVzeozcnKvS5",
  "key36": "34SffVk8YFjM64KLjfNkfp9CzN7YgHDRyhp2Nvd74MJy6KfWSEziSNNRnneZt3g9yMDzibCADdhvPm7FFdjXbz8",
  "key37": "353azMGGo95WEUydY7UFifVTtFt5ALfniovTHZsBgEAf76S2aU5htAPmGkfjvzpfHmfjNdMASroFH2XWbYSriaUS",
  "key38": "43EdAf5SD4ZheckpKsKB5Xk1sYA4hpEfNwzTDQeD2NAevFLShAKxKgKhTv4gmrT9J91MPjtEQzvfrzJtRYZNpTPA"
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
