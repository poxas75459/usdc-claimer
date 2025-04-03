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
    "5oWaap5HY4cYrhN1zcYPdfCS2TuhY5AD72VfnC9xy8nzDLFuq2PxwUZmmphwsQULN9BpkdszVPgpbA3VdvqpJ731"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YwWK6tS8C4FPxNk8rC4kTCwZ6b3zYLrneuE1DzJaP1P4VMnqts8BhsEfBBRypA4S1bNFR2z3HMDSEbv7TwMuGJ6",
  "key1": "VJRg2QW674vrWfLdNtsRg1uzCRuYCx6rY1jGNj8tLLa3SUYZS5wsUrudT6WP5findncataCACT12qzu2LmubjbJ",
  "key2": "4Kt7S1CnxKqAFPCyUHUEv9xZuZr7fKvhmrTQMVW2xnHUP9WYBQG3YJnGsGDNLsDY1z1uEfLSQiFekQNq4dDab1ey",
  "key3": "khMj96ogzvXEf8wKWbXttEZfRrxDYFJGNo1GEVeZsTT5rtFE4YLCnr87BeT9N8JCpKGMWTGvSDKXA3dwFpUpykQ",
  "key4": "5pBBmjmoPtnCVLKw899JuiYTcpzhfGMBzQ8i87symfLauAjiKhn6C5Pim8Jq1ucrvGnYpyh6QRVstXqmBi2xnUFi",
  "key5": "4f1ieck9xJ3GHSjx2UbxMJFRXUpYUGsBYZdy4afccm3Xfqd6fDxNWg9Z5fKNGbnh7WFwPEj7w1xT4uhpop33o7wm",
  "key6": "49uTRdnxFW6ahn4rb9Zc3Enhob9t6cjGfjeWmqcDvU617QsnqGMgHkBWbWEBhMc2v1qGMQCXqTMoNBPs1WBGSxsb",
  "key7": "34uHka7ecJivHzzzrPbhRLJ2TgsZuomVHyDSWoCdiQJwm82qn8H5uC4kDSmeLwPkaXwQ1C6TDKadhM1EBLaeKnYP",
  "key8": "3xK7ENmLwVjemxvc14imYRBeDuh9YUMzPXByNtj9v96XagfPb7sZURdNEUZYtay63fkcbon97jJXpRWNCAaMyxqd",
  "key9": "4NDXgDbmFXAffAXfYGV2nRZxPrWuKKVLdmJqMj7wRfKZAWKqHR2poEdEyL8B2SAPm1t9mgA5p2qiV68CXZFk8kwR",
  "key10": "5dp5pB4kXtxTan2k8ht93jpitgHNmL4gHw6aFAohprYFetZz27fB4RjDejeVvMC1LEeywMbUL6XV1DrHyyd8z6Nw",
  "key11": "g39VVMTVqbJfDRhqy1628AJ83AKgZvwkSDr7khYj3Kp6s45qk2YCkrexFWgULCKdESFtq1GyFoa7L37ELM6VUJb",
  "key12": "2238wdbGoLeTrfLA94tYrTbX3VaHEperijUdhue3NEyCyo1w1qegSPR1WZ3LZdzHggKRsS4HcomkYdiYazW3Ym81",
  "key13": "5fkxibHTmBDtaRTumK1MDuGFjUtVT3fPGMqtCcA7WyTVchrUEEGVGrNJgoAA4urVv1iKHTHiUgi6vVzKLzDmzm4n",
  "key14": "5wGfuoLxEkYvTkygeTkxSFV3mLstSnni4jp6BEKmmmMujnsnx4i9TpMzieYSagLTjvczw1tUC9VumytiAFTEHQN1",
  "key15": "2ALSGHkQKbvmwxXMdKKeMnxR7wc6CUWeSEq56CLdYEuNsCuidAd21dQjpConxXRGcxpUqWs8CY478jA3cDAsXbDk",
  "key16": "5D9Wfa8HaEZV5ZGEfgveQmnJuFrPBANY8e5g6FmDY4t2KUWEQg8ieyhfALjmBSF5M8jbmLQz3af1AwM8KL5gGuxd",
  "key17": "6KXxbDWturF8Et7UMgWzSt38xu8uoMScnyeQs8Qc9NCofvy6KyyeMzP7dFdChuGwjTirt3GDJ9MzQXyRJBoqtHd",
  "key18": "3vt1ayGua7sqQhmNetirA1hevbMU1n8GnpCwbx9AUJkNQw7sZ8TNzz8qJBdkkk4nyhijDHdreBmGBNgptn9PL8aF",
  "key19": "5jT1AAkj7HNbzb8D3KUk2jiaLDza5GCjjJUwvYmryyZ3fmb2UH48cjuN9PTjcXMsCJAoUMJazLea7xaMT9qn8Xcf",
  "key20": "3FqzifWBwEob1yaGuo8Gh2JifHi62kA4APAbmiccfyEvXiWeGdEMmbToNHKUVFnHkpJ2AZR9qJUWJ8mdnu1fxBKS",
  "key21": "Z13BEsF7RkY5JRo91f5JNhUbwKiMHUYM2nqagEd6DbFjf9KiYEquZVgCfiHjRdjnexV1Th1NiTRV2SbYCps9Qyd",
  "key22": "5uFuy7JfoU39DDe6Vuq521okBBdRRCLpQwC9mfVDq8uWD7kJXMCtAHYYDLdMJYoHdvhcqyKFe3jJ62injeijMNok",
  "key23": "21kPqpmqLW6pYT3VLtqL6yNJHgn9XEqN5QmRZxa8wPFRuHCRXB8aSSDrFuNAJq4uUEJrBR7za8Hz84x6dBJs2iJE",
  "key24": "kTgPD8SYpKzNZBLe1p4UWcSNZxJ4RPwVxsfDYPuZbtxpKacwVoq8XfehY61GifiM6ob5zLTssPrZ3vo5F11aev5",
  "key25": "4PauAjMELw6b9Gq8mZ4PdSmx3z5pwjHkptA9qwQ5DcxYNRNk4uuD6W4bv9LkKaiK7Vf1587atXYH86tGeqpW6BTL",
  "key26": "31pKhuzzXhvpqCC7UAMm2mn6N91s1uAbEinf616D8vNDpd54FvUR5vXhpQTw1VL7bGs9pkeEGiKqJk2ne8JKPqhN",
  "key27": "2p2ucnRGKhqUpvp3KFuRxqQePe86UeesqZayzUr859hy1nuPKhP46WhbizmLPme9F24GoQcVSwKjrPqfBR2zCH7f",
  "key28": "4nvEstR5z18iSQ4825MefCdDKR7ZqZCFhEBJBfJr6H735cyTUXSwuqxczkBWdgcnyEqL6WtPKGxG46b8GwnGj3dW",
  "key29": "diJUNzWZKnEg6HZgZNkF3SqbEtPjedtvnnuTNUUZcQwH2rKxjd1436eKiPWFn6RFP4qyW5wRBZCkLCi5gQ7f51N",
  "key30": "5TyffbzA1yAdE2t63a4qtfJ72DXBxYiCuDyMPfceTuTPzxBQBpJ3rT7Ee1Ne5wPXtpvW73cK5mtDhyYyaD3PM38T",
  "key31": "38xnTWN1Xt39gZkm6mqDP1S2Amn83sun5nzPFmoB74p7Y6cRK2jGVo1tuyibd76CLgXiuz3DbqPY4Vs1wGAUaXr9"
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
