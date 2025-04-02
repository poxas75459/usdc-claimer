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
    "nXSA7zstRi8fTUP85VsUbX3nVRcSybDNPthoqAVUQqHThwRufyeBmAmk2YUJ3porzAt1Z9Dq1GyZW71rWduLcuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vYWy755v9m9YHrtydva8seNb5cDGKyXQ78ZWVZomSjzFDzP8uBc1aJHNBagns9jtBhLxjEtpv2uSHCUwcQ9QSgF",
  "key1": "4dZYs5pwUxmJ2HeRLYBDK44qevmo5DsSdLnvwAinPQSzgkJSvhJs8hFsXMtHzkZgb4nrGHy2ev54EEv24CHprpT",
  "key2": "65BHJdnS3YGu7U1xFdvWdpacE45V1aH2RqAB2EmpXSudJ9FsvxPinU6y1RUHSUKwcVeG3nxgUjB5YbdcYLyFnfaM",
  "key3": "4DsZosPUpLe2533AV7QNLzvvGonf93jME6vhzYkJd3HExLWhcPA9muJkomyVvy2JnkfbbpiABdDYYYWwkBsXvyG4",
  "key4": "3DvHh5vL43GKkwp3GPMX7KoGidntsTDwbu1TEkLfoverCnz8E2ADu47fTbHbC1fR3BANksLVjkpdPRfDzxaymd8J",
  "key5": "3zq2fonz1D3SyDZDxQU2mvRphZsSqeQuSLf3fxmpjQCr8TWSXeHKyswYyeWKTM5b9kjWHtNhhGxg36T941JuCxS6",
  "key6": "5nzpdLTLBaDJ8HRL4r4viQbRg7WxKoe8syMkJrjcha7CaDqUz8so81YNGY6dn7XzY41dCHjZKHbKtScrr9Hf6Cy6",
  "key7": "4dxgvz23ofVQHWV45epfZjZLmaZptt5XgDELDc6z5VvRbogevWrrVetiiSjALte4RW8iAd8SchYLK3kJ9jxLdLoP",
  "key8": "28r75X19b7MpcAJw42zp6mEPw7LaH5r9uXQ3QNj7vu4BB5kTr9Vh9toYrxugFC2iRNh7mXdVFAicFnHpjg5uJYhk",
  "key9": "5kpU5TgUyVSLWVCytgoDiaQTfWkzVNmuGGFr5MvNEMc1foVw1nuW8U8MLCNKCLxB5WK4ABC3sVjYCUv5zyM41zDA",
  "key10": "HErAS6SMoU6TY1hXAbtD9j49sTcKSGJZ53wWeEKmnZWit5XRG88QWNLjXb9cX2aW9uUZX2b82xRa6k6kJdAZePn",
  "key11": "25qvEYEQeQFpnW3GtG4jRpM5Wa42EMFqF2aMKmCoNaKGVJ5tFHceocjCz9HqaJEZPu21T3vJfDCWvtRurtS4z1do",
  "key12": "4CEMKRJ9YiSte72MXuYBcWgWNGKGjhVLJCdT6wqXFXEM4NLes2dHndZoB84y6LsUkeJLfQ4J8To7yJpHUK9RwMib",
  "key13": "4h8yJNtGaAPT9ZiceB3Jn6Njznd2d3G3Wp3n3vcKedJrDtRHd5ShBHPQrcgTXb4ghuMdtgFav6iydfZnjiqcdK9G",
  "key14": "2mtpk6J46FAC8CzDsdnuuNmiN6aZPzgWXX2ex5uYuCskUtLRzosHkbuoEjHCfbLvC4G2fMW5vRGLbLbxhUc7HLAv",
  "key15": "4GkG19S9nDM2dsePc1c2AAkBa9n8VTeWYD7KcKsZtWjvXKAEFEpKjNBwhdceSbxzDkL9RoUNkCJvnFKJJPTbgXJT",
  "key16": "3AopF9zxKMKC5EyPb6xTWtL2JMnqUEQxqRnS6L1hJud6nBiepRU1trF3EVZkrSm2rPxYxwV9ydbbZoTHJPMPgNvn",
  "key17": "4HSnzgo5vDtiEbK2VDutuPUwMxq1uNFXzxrefmNNwH5KzESB577pvZRaCnEghR2NGRRoQ8Rk3a8bfBic6jeGf4ss",
  "key18": "4uceyjiGtTRxPFnzkMjiq2zUGjUD6h69bcmgAz38SxuSydYbbn54MEWneXUXPR4gjwqxsaTicYZd4ZwRSnrCv64G",
  "key19": "5XReLBnDCGqqX2W9wfysri118XymQU8tzgCNVhMD5qbor4bhra3X4Cq73fB5uEVenX54Z9f6nyDBsmJVCaEAooPB",
  "key20": "39ZpHnNg1MtiyoJAqNJaTMXrL2qTPrh42YUd1oauVK44CWtv5zyQ5s458GauBhLLctQVHkv3ENnPF6nWBScNVPxj",
  "key21": "37XzqKStzT2FsFQmuXTewHUbBvsLSiuDw86Gz1VwRMMeprcydhmeGAFgLiMVxDsF1Z76Js78utwZBvkNbzEbzBSY",
  "key22": "h9d4Tut12aaWNPDNjaqfcVnf7tdv1LPBYeCMYrbxe4wq68hXSLrECUzQg9QiEjt1VxBbdjEo9uF97mmj9yJajTj",
  "key23": "2J91sjiJrYQpBo4yppA2PtUELNPWiKvTAJkPYXox417PWiS8UVN3joKyiPDLYseuxC1oWCK1cRBw3Eua7Y6JFYo9",
  "key24": "27GgYBTSkyeiy55fWmQeRhizzv8vpqXyYXKZXZmUqwfToxsnLRSwDBdUihnJL94xLT5JDTCUTaaF365BSGStKMva",
  "key25": "2smvS1SznbNPLvQXZzy1dPLSTY9neGuunpsr1JQmPchgYeWq55WPnA8CD53vGcDac17iunpCC3P6TBoaWbiGRhx5",
  "key26": "519YRFE5DZyMse2RLrgG4jM1qg3Uh1hYaLFYon4uz3frDcy2UzG1wFRW8Fh1vx9qjSKX5bMePWEvCepFLri1raLA",
  "key27": "26ViKFBVCpg9QZvxvSX9W2Vr6XuebRUqMyqhu4ivr4mJPxCx4Sj9XN2VttWxdkTPqu31sdDuWf235CmGZmbttjxG",
  "key28": "5vNZGnWeZpoQU5eS8GfQPPZd3Y229915ye3JatUoNgWnShzyciCQKt7ZF7eQWQ6ov5BHn9pGN1oSiJUx8fs9a5Vb",
  "key29": "Vq1yHiLCfxWtVKvFUJud91iM4k4r83T7RbTtoh8R3NfJruRM6naobEQa9daKniFfLZnkew1wCAdNCFGt1hg3Uzn",
  "key30": "4o92n9JXycVLL1jvDT5bbdHWBWbZsvPsHuYP6QvB524krEv3jcaP36fsRTbdXvTT2NXGGQsSFmmK5WamkxkWfPCm",
  "key31": "3WuR5veMdQZgUCMcgzRMyXasbc6Qnz2dsgznwX7qbev34FtLRZaqv3E1GuhoqMJDJMMqU54FpjDSvBgwveGUcyGA",
  "key32": "3Vj7CjeDgk3WfDbvrduPJLqvrLfmfb6kyBeXNDoKdV7jpwMxSPq4t39WFWzF2NaeFVnVLETtSrpk7LaMp14Zjvaf",
  "key33": "4469DpbyLiSfS3FkPzVmxee9ST8sJejZi2uDjpxuMVuuntxkyzVsfoPHr4q3hJLVS1pDhqfA91Uwr8Rm686DeXxZ",
  "key34": "459Dhy6igKyCvJ8SavB73b5Fv8uXajjD3NhHyAEYYeAkVqofjLyafaWbRiWWwatoDP6pZDTZuJJgcAFDNiGmP1Cx",
  "key35": "3QjwGRVNTUWhcLC1BNvoRePUcAChYii8CezqufA2y5AHoa7Hon6pXdL4YqtYgyyMgwCUNXEpa68fkVa1DxqfZ8zL",
  "key36": "5mU1MDX8MDRNum77DEPg6kj3WcdbPBdraRGcMSzKm8q8yEtdq6MyAEWM2EmBGBR85yoq94v2nYasBPk8YUBHqR1A",
  "key37": "2dhLJY1mo8VtXh1rbEc1hGwPFH1zxtP844MKGJ3QjXHW3ctyhFSjzbxpJYY8FngCQmSuSnEMJ67C3hoVAjV5RV6E"
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
