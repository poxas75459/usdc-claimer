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
    "44CYsw1aieN423eDpEAT76Smt8iYPpGGYZfVrTYZJif5czbVcVfejMr5yVrxi5WZfpG7ZUnmd2gLiGnvSaMGUFNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxSQZ5i553aedNhAmCg4zuAPsSFMqGahnQTU78p3hjLQPHDjZi2VnK6DmcbYnqrmRmka1VU8AEpwhxbseyhkP5y",
  "key1": "5cnnLeeY7WV4uLdzyYUdKrsssdp5E3WuNyaqweLb8doqKVXTFw979cZvYhumgcFF2oT8GpBXSgB8fwypaU3ok2r9",
  "key2": "34PVN6UagFYoEYBW1trE4F6SK6bHFdQ3sXhDC8qroYF5fMCxayiq7MwFe3F7nBPUJykZL5hdEvnbv5pP2UFiihRY",
  "key3": "5tv6WCtK7TD12SDX4Zky6kSsKYBf9EmGKsPSe3iDDczX58W8iL5CQDvoGP4uA94kNqjgHHxQwQCFsyUpjiiTxWhb",
  "key4": "4bcP59x5PtbFztukqixXuse6Y3D4kEu7rusyRiqxdb79LcYwszsbfMZZpnLzuP85oeVs5JZGC4Ak3zMyqpfVuwjF",
  "key5": "58ZNWprG61EvfX22jji5sVmzNVG8eVe8zgfPMfog1eDuSgPRDWBxjDWmwdHSgx6K3wWyLyAdQsDRQLgRNcSTDH4E",
  "key6": "5t2Mh2if36BNohai6gUsVrDaK9Pw2Scu71g4kCBQx8Bu5YUTXyznuKaiVcdffmJS58uJCpEmnxCReoNt3iD8MSqk",
  "key7": "5xL6go3Dxczkq6QtDKCudEBm6fLiCZ2DSoxGrdxhue4tp5ZHKKchRViruDCrAUnXJjGmFrA3Asb3aBY3MHjtxLe7",
  "key8": "5CpGEQcSUqkjQ5QziHQ2SupjvHXtRacx8Y6zWRXj8nPFHtEhB7AokApaSW3cgykRX5S2FeTV1a7J1TpQhP69irBQ",
  "key9": "oHqcVUJ9g5g7n588cusjr7TtTjzyVXykxRFQfUFic2A3U7zCCfCKxi5MASUVc4Me4PWJT4Fp2SrLPkEoq5eStU7",
  "key10": "3HusmDYbnzK7H4Z5tSmKRDUZ8jnH5mCDrGiqqeNLmRhQriBMqo5kQLT7W7PWSagXEFwA3tAVfvBFdaVS1dANsizg",
  "key11": "5eG9MstjHDgbmVmbvTRURyyTyUNJicGnK16oupHdmJ7bTpc9fNT4m7c53mAUiMKASWoqvfkmboCLPqThCKakHbyk",
  "key12": "3CwYsfZh5Df6JLh3qZR6gskjHpMiygsBz4ynUV2wngBHFc25hAmRmSVqAzbRZdRHQkjn2DaKwP7GyZcpBnh4oBwU",
  "key13": "5CmnMkdnYnwyaJ5BDTSGg5vCmNA4RwXtHcDTEYR67drncjibKifsNYQ8W36y2Lx6no8eHQmHFNUfNmi4zqSHFMG3",
  "key14": "ZJ56L67DCYmSw5yeWJe4dHHFSvkXAyJXLhJxVeC2r4Wj61NC2pAB9cSCqTSGtdNgRYQF6LkFKnN2gUuTpMeEtUZ",
  "key15": "ppLMv4vbAxnCtwxfFCgaE56fPcQzAiVUoy6Szb7mWdpevak91VSQnoBTttC4siX7PhzDp67BGL2ZsFB5YWoaVom",
  "key16": "32N65s9DfGBWGFzPMTKPK6Esn1u3wEfm3yHdPJR91aLXzyiBaJK92CAdWRqKcBPHQLjcaytRN39oLoLwZVMcDBSw",
  "key17": "48S1DeSktmeTrS6AtGczncWr3pAgRPcA4mEogSKBsDrALzag7T6r8FhzEuxfwjZhyXci57hECdMVN5nVCtjMAtMT",
  "key18": "4xMLWqARkniYxN6ZAKaXwcwuCC2t2Yt6r4m3eFHtwxRVBS9gF7J5xtnNxBkFUaerFPeJvXibRyBTPjeiPqKSWbSo",
  "key19": "Ht7v65yqCQHaToJqsGezP8inPPN4zAKB8eVtVZEJsrZ64sXTSHJrK9fiQzPgWeaKbrRY4XtWkTjsBoStps8yg3v",
  "key20": "29edbJSRSHSYrbf1ZCCZe7ZJmxkVKdrRMpfpnH89R9evSFcgoC3pTx5tucPKQZxtMujqvxi4FgLCsJqzc2r9c7x3",
  "key21": "5N7RvmZte2TeaS4ehjdhcGQQq2bc7nYo98EpVHzNHr9DPTjtHYbdXTsqjeuBE5w9fGYms1hufYxsJozfXvQifDHj",
  "key22": "4JrHqvR38rn5xgawRrpcyixvN1ALztX9iNvGEM6tcVGfDs4oyznyFKxkDkjkkhDiopHJ4rGk8XMvqoeumQRhsRNc",
  "key23": "28Qy6ZWPDps4D8h5FUBfkmFS6RWuAcGcgz8dxRsveFKEuZeMbwk8sQC4BkBjnSvR8fLMgoKdumequ3Tr4ZrS21LP",
  "key24": "necsSw3bkJ3DxPHkJxgDszf3gcLoBvncnz5fn7LyGHe6fTMjt8HTggWMpoF6MSczTcV11Dy9Yizo2JPCH3WEaqL"
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
