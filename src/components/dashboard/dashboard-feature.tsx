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
    "52oCFCD16uxx8fQ7Bo77XcexEjnk2GbFNuFpuNLUybTLytr8ZeBko6WPwP643o1J9QAuRKCwQmxuRZoCTwVtW6Jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQj5c5WeE1F45vS1GtTCWq6wc3wqoBWVsRPVGzNx2TWyrtWC8ZzJjsogSaM1KnSyufmSrWHkpYHmADGeXZU8Moa",
  "key1": "4XSK6H7QTcobNwx2UrGLRdQmThSmSUDZN6yDGvPAgibqTH5vJG2Rh9fBpUnWrC8sE9MwC2g9DV9AsBA7DL8HVjxw",
  "key2": "qEAeFzoG81aatxZgCJ23KCBSCVxGYrdNtCpeYSQp3b2UL92TyjsvujovB3BMRzonDhzYwTDVsiXz4v6G8pTMFyk",
  "key3": "2BhttKHBgy6ApMtm2M97a7L5P5F8AfbjhivXDyULTbzDNR6vF7Mi5ozx45rVitwBJ5FT7cMHumGVK9AoPkJonACy",
  "key4": "4sQ4Ar9UgosRH9ePW4H1GUWGSra96P2GM4eT3SygT17CNA24joUUVCaMgKhL9WExnJ8jzTxnVffbMxjQKR3ghuQe",
  "key5": "kNTNcjaUfL3g1ThvrPe8duaPV1qrtyZnw1rhYdRzTvA7ooUpKcFcEnFrb99EatA1PwV7YxpkP1f3tdWYTfR7unf",
  "key6": "2jSsXUZrdrqQbe4kcVfH8s85ZV8C53JPVz5EQru4pHaTAdY5yqFGmcfc3FLkX2GQsU76jsLfmDZSX8nxWkiGKwTF",
  "key7": "3qMmDGkRUNdoxxYrAj5keXKTjBdXJpgqyVxqow4Yr5p13qEnVmL1Tv7qDiDnmeYM2Tw4uce1sQS6KUoMaKwhgarX",
  "key8": "53g7eTGcHh99zbLZUPoKXfHfwHiYSHJWednvqA9vVDwFgxE5yJuRD1Aupfg4Y88WXbWCRNRc9xVGmA6UuKadxJyg",
  "key9": "647rUefsbb9BBhE9m8p3oyxPzLjHBTR4HHNMaAAvnDeDXwCgVQrXB6E7QfzWsFXTH64DMZzoHYyWcvUjYSuBCmpr",
  "key10": "w9CbDYPYotcTyTpAGW6qjxCEeMpiEDZCT2TDZaH9LQsqBvX9sycj4otKeZCf7aeQGsnRtLE7WeD7PFuKLd3p1za",
  "key11": "39NRhBc6nsdooBvguTf4WBZH4KCUEawoezMb2JW9MVLvas2NpmuqgjMdosWjCDv3cNFQqqAQCSSdoztvjmJhCakE",
  "key12": "6wUJY2P5ddBZSvXse11xUhY9RcoxvBZWoXbpF6PCV1o9A4HmZR5rAVdTdEHo6S8a4tHSgMkrpKyLwUemxUAJSzW",
  "key13": "3A736fsvq6optmwqgMzipSq3UtD3Tpdx1YvoJRtyaknk9LtuYYk7j3UFyeosDGnwRmptcS9uS6aAPtPo2JAMThbf",
  "key14": "2BvZXxAU4vKt8CJ8v56ewkTuHEuJuiGPYKmy5qo6N8LvXoQ83BBQwybdUKF7vKpbaLQSc4dSFbTCNzwwF5Qimjt7",
  "key15": "4eWxz1WLn5mUbW2KGtAxP4vYroZifDWrgAdSupSWnHLACWPADG7TadcKuJPKAyaqm4sSW2WSPYCgsU7snDrBDfdn",
  "key16": "47EG14ut5TLktWFKG2Ev8612pL1BmgpZLZqegHok4TqmHpMsSKPeusQW9pJho2r4qQ4uSqCGBtwHqTAGasMVRgxT",
  "key17": "UKi9NQdx8axqttMVWGUdVzBS4MjS6xLjfniJvoYwtVYAYsajF55y1FPud4uhhmhRm8MzthvpfdDX7U5bGH1ehds",
  "key18": "2hvAvELmivBe7jXsKLDhPYdgR9YXgbdSvnsVVaVwiQTneriVPqMu56so6nMRFesgWtKjXAgP5rQqUTtYCniq6uRn",
  "key19": "VdbPa6n4isb12GU5m3f1s9XdB9PF5iHfyZwC1kF78wVcN6vwDZ26Aty8wmye86E1PWjrkFpEPfjBrrUVoauUSmv",
  "key20": "3fu4CLRov8vGgi8YK1wbjWhSoYPHG2EijNx2LFent7vT14ksUWpcNgb4SzMuqZEe2umUZFDMPXASfheiQJi66zSL",
  "key21": "5P6BeNjgfj1n39A1W33XM595trkJjYnWTfzPahyHkvypQMGmfkwE46cAp2z6JDwi127J91ghb4MHqz4SndjHJsp7",
  "key22": "49VcEbT5s8afq6pHzBr6y5RZhAMLdCthsbj7zZfoBMBxh6uPuyVArdPNx2HBnRqdRLSRoWCEjRUMb94vJB2zmtFS",
  "key23": "4XZm3pcTbKkjSvDf5sFsvK4pdpVPuZALdbDWwhphubPHKd46x8vbhQBDLZWXVqV5FL6ty2fW5uLDykdyzhSQUUNJ",
  "key24": "za5DmkDWmadhRZF9QcymixS74od1DtchBoUThKps85rfKY4AsFdX9R5p95ADhd4Et7P4DSYpT5Rr3xBjPNfAbfb",
  "key25": "2VJFvJKbGimF4BGMy2fGdzeiY4ntFWaRNcZqBKV3ww8j9tVDx24u7i9VS8znAaoxuxXsUySDDooHhT1mScwWU7Le",
  "key26": "2VPKjCZfbYLerkwWMEtGQfNHHRZusanRM2V7iPMAimBgAbDF3GS12esoz4nMb5bJzF5HGFR1GsDvLb5RzdgwHLJV",
  "key27": "4tFYSxTj4mdk5vVyLHFSDqfpK55JVp2bY6KWoT95jLDgaN7JGCB5LmNFomGvMAjwshQakDbGF1hWv1CSfR6GyaLG",
  "key28": "3MfuxtzifoAZXqdnb8hhdGSLKyQc3WQBvrswcMWxhW7SzpeJQkdoD8KK8iQLtRcWbdJWyHc2gpXRKgfcLgGMeaPL",
  "key29": "5vUtHyDvrxAHSgVkpPJeriuKLjdhTNdx6oos2s8uREysc2ALuCuvD3C3ecH81wSd25Jiff6fAWdaS78ti55mqLGk",
  "key30": "GUtk77uw5c1ffU8kot7GiAEWoWVkh9kFGDpf48norH3VpJDkjvL1CNpM9HdX4Ec3DGVs89eq2exzeJd4Y91FTdd",
  "key31": "3QyRJkp4p7pqaMeshE8WfR1gLqA5NhSuEsPzGU5UmJhCHZyNpqFYhpAfLRGa5S81ffiyaTm8FaDHKMZFKW479Yd9"
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
