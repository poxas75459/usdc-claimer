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
    "2ARnx5ar6gstvAEzvTtxSF7nTkJfH6ntZ23NV3f9i7NMJarRked32Ka8HvRWjb44t9GuXYtGxzYmgcFyWM1WRtoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sJRc2WzyV28YrqizFoDtp73NxQB7LUBxKnRgDu3T5EqiMeYDkKvNa8KSUsJWzRMSuFTzqg1SuRf5iw9nTv5hLep",
  "key1": "2hqvWFCxxkrY64wnEYArXG1T4ey9NEyeV8Mz6nEwTR3gpNnsRc8Geb8buwaQWpenTncWHtT9BxHjZShRG8zjPKCb",
  "key2": "ZUuPsjT7QV8Ex2RxnER7npTuyQBueHDvzNaNpYuatJtGRpGpRjtF18BoqtWv3gUZqYcy2qg3ucjTSnkoCfdgYWX",
  "key3": "4j5qfLwoyUfArUL12DPNsW9jqmskkMzs1hXMabFFDhkRPvGGySZdTGFRQcghh5m7vYenL3E9Mv4N5dRJHvWLiEKH",
  "key4": "36GGbDcpkvModFHtqUCfoHmk5YTvcUx5mfmfjXU9FiopKPS146w3fef2KdQQHjEFptpB2guBqbKUoKuJhHtpiQJL",
  "key5": "3rLGxxcmFdm3wDAPm6fuWSbfA4765QEM94PiW2ezeqVrhUadFFXJqv24k5pAzUy52CMP4641cT7SDzcUW4cYSgfP",
  "key6": "44QeQyc3xVfFtdVrDiWSTPJwNaRtEpxL1pxEpHjh34quGjQohsTVjMpUUxMRQann2aTwL2TVgbVnzF3PcWiZQC1v",
  "key7": "AwGJLNsxZAwTeGfaa5cLU1xnAfuPR6LMkTSwAvqKUKBTHcpiUJqkVwyfrZBESr24jG9xxt4SUGz6HeARWyhpJK5",
  "key8": "VgWeHnr38kH6Pp5MhfcMgQ7naBMDxFmMpgqDNtShTcPBkcfnw9wBx4pRBKdMNA6B4z5yHd5dDZUjhesMAt2oZVr",
  "key9": "5LwhXgwqcgFkFiULy1NJhH68xhB9ttwY5SaXVb15aJxCTJxwYfxWoFjF3rPUshzr1nhiqcSnKKQ9NdnjGeWFMNuw",
  "key10": "eUDe8umiswzhaip6SrbaBSLemsDK1oq8zoaYFtYR2t1f9Skme4nBrWon4ZFyQvW65CwGRCMCdbDAfBHQ8YkFsFy",
  "key11": "2wrujeCkTuuqHHkuwJnQGmMZiQChnxkhRwvokb5AELyK43royDydKAKUBv75kiK3d1FkVQEQcgXf5FkjTMdBtBF6",
  "key12": "5qp7eZVU77Pynyz9D8fX7YHV9YamLVNTU9yD2MvFtKpnQD3tp8R6v7MEY9ftQDWCkb5PLnwKdXkq5rVJPUNy4ECz",
  "key13": "3wPMDFBRhbWQWXHpa7NGThQuKDfQ4Pvc4w7RorEiDKg5k9yE7ERnu2NcYRC6URjFrL6WXFGhxAs44L3ME3HCnhb6",
  "key14": "5XVYbdy9xMqcqBNBC7UoqA1SDjcvxvtGg7pN6oJRy7A1duWurgfggRDYjjDCMt5rMcsFwLp3tr8EZADPVhSnRY24",
  "key15": "44EafcL45EQdWdLHg5aqySP55uMoQZckKtxmzPEeZ2L8NCJU9yWoAZQtoCW7gsTSBanFt79PoY6A6sgAeGDs1DFi",
  "key16": "48pvqabFVh3JeRJXkXgGaa5v5FhJpwXm4q29igHTc937SB9crDvwzTktRAm24FkaXfiafGuHRjPFvoqCQ9JGBcLV",
  "key17": "55httQJX8zgM8B4PSDq8dFGTfKcVpuqrmFTsFMP9N2EWuk46d2S2uQdR3bU95booAv9gnynHrxuLhVfGjZVxscXU",
  "key18": "2PzUQjKN69pHPUAzsUQLDkMTbXcLphNypUs1XFiUfE9ovbNwNEn8GUfBpk7kxTC7ejYPoahMcHuMmHDXGTfcQnFQ",
  "key19": "3wqGsRXg5nMS5bFiLZPAtzPHPaFeye8md3YoDbDTBuUm18Mu4iCaNK4AyVMmkSw4MVYGkLxetBaGEar9uL1EZfCo",
  "key20": "4AG1pHzUAf4zijNrWhVT1JM97SfbXdkpSnEFj2VYxiTzQgx1vHDLnwNWrffbdmnaR36EZQ7PTDfS9PvdcRow2Zos",
  "key21": "5qEnAbjdgosQsz72Cdiae3sry1qzXZysvFjeUk8jtp2M1VnsGsTCYz2UGryNy7LYW53MdVmdctNc2CvNPuQ29hRT",
  "key22": "4VCBscVk5aedfrfq5ohWiSkR55zBCR6V27kVtgMopeimMLJTzPSVL7LbF8BDDAzAyddd4VqZnCBqY8GCHsvQMctM",
  "key23": "3iHJbRcG57CQHcAetW9Skj5mj8nXHU3cTVXKPrvnGv8pGknGZPiUTNd2Waxqykd9k8sAbJXTPiPnXyXNdR9zLnAG",
  "key24": "3bosPNXfyYQfnfkA2YNiYRfpQW99bm3UYnhSHrcFcaNtDxCyWJqk5ci2ouqUNFm1T6zDub8YZYtuoYys7gU3FUhN",
  "key25": "623SY3sAY4rgmuc8kAcwSknMNC97SCvXPxbzgKSbThtiMuR1HAiaBwKFaTUqVJurWqyEKyLGhGRYccZrE937txVM",
  "key26": "49JpwdxTsrcH1tahJqoPKdP7FGmgnC6DWjh8XuzUGPCrMQjwTb14B6HsSVqbQRDGk25jbh2CMs6yJGAWy3ovSCrc",
  "key27": "2y1pyCiExeyFozS1WMjzWUVAd7Rxm6ioYJggNGC2S6bAF4gB5vXvZiSDxWS9MqNh7WshjuYoi4sj5sgA1YjN9U4y",
  "key28": "NLH4FFoXD9s2ePbRr32jtBWd3y9TNq4CBNkiJ35atkJ32syE5mEPEpKrG83LcgquCvsJGw7nz7NheBzM4RvFzdm",
  "key29": "3n5GvWTCcMnSGe11FFw9YG5qwKDwpBNdCkpbWnVDzYPAM2QVFMmi9NFKhf3HsFP3kkKdeP34VmstSVPucCdtrdGV",
  "key30": "5XPKi8DY8fENFvjKV1gagWMpDZpQwmNLWdA1cvKNCAzYuBM8BioPELoUUTsW6EzpBUiSdTvQs4mxZo4VLrNCt9pF",
  "key31": "4yDwTEiK84N4mhzziTVZxm45wrRQwqafKLUHqP4A1xior5FS4d1n1n1R7ujWD8N1nJAk6wZ1WFYc4XJ62JouAvGk",
  "key32": "5F9t5iYRmSb8hMqe5pnbewE8dhKtJC6m8SKU2Haujdw37cnvYCCnSdwuiaH9T7DKdzyqBum5D2LCzRkWPa4R8LXL",
  "key33": "4UQM9UvLcXoesDMUypS46xZ8iPven5udtiPgXoAQUVbEPg2qBSuzQ3mo4EWhRLiR6R4keJqqWYt83aMANVhtKaNS",
  "key34": "LuXLTP8mr2J2VfMc2vRFwx2RDocuBgUfdWXmVdTHJqK87NuJuHNvrS4B6JguNnRtJFmYdUuQFQcnmUtNNAMPBk4",
  "key35": "kqbFojb9sRk9AkSS7u7KeT3ZfNX7LsLTyUFZLgHZ931doTaM4rmTQVY5a8vjKvZvFxFdLRKPfTCpA9yaAcEPUHw",
  "key36": "DNLdyk1dAmR99UPw2ApLv4ZuyzENFi2Ec3uBxfq447WJw9jRBnxhn3dSwiuRGfAqyRz162tckSMHTLPkd9xApBH",
  "key37": "3xAWiqAcT1wT9otRuX6MEVFNBTUxg1KejfYp7pn9RMLagFVb51S7qUFrkSp2JBTdAk5AANogGFPph7ELfnwSiJcG",
  "key38": "4R5u33rqYgMftvMzFKV6DUAfGqdEKZnbmrsZ9gW41umPTqiyZ4ofbvnfzsr6RgoFV35BhoQ9haRmj5qWbRjcU4sZ",
  "key39": "329BVfApwvsf2xhP1oRP7G58MhGs9aPaStY7dBKCRgNyihKrtQ3ZpR9z4kLMnsgS3cxeuJQRJc266Bmqt1bKdV8m",
  "key40": "5FBBwWKzuoeiMZUwQJwqPJ84iFQk769RSBnaMrJw8UxgcaedYwxNPe9NPzJeptmsfTq6m1Sa9X6HEjg7iSSva3z5",
  "key41": "kYTopDE1TwtEQhALHAzQ82cLU9AGssicyTsJcE7DAfi7iz4RfhSDLup5f7Nvm6jntZX1mFerB127DHXFEoBBCK5",
  "key42": "2sFSnfb1KaBFcXYnosTqrCvfBLJNENUUc7iznHnt46wtNjkTLYaAsMATeVpV2QtVxVEPwCxo4pRD3Cdp2UrzM3Pf",
  "key43": "2XPgfMaY5SqMdsM7CYMcTeHdNgHJvUbdkoTRosXSce49vEkWtdKe1WfWiAPkX22KNe5RPQWHBjSVmk9nBKBR1Tps",
  "key44": "4hj1VYJBpB7AkC8oh7YsGdCJD7m93wskX8SivqTX6T1nNvK3sMxSXM7LbuHRX4HPE5ttEMTZ8gyuAFXPHK164fBr"
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
