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
    "5YfEmGnLEo5ZW3pfeBSc9rJEQm96NmNegq6zTtEGUq22mi2QFHvSg4wT2mLwm6TpR7TrBjiFtbGWSDurp3bJ7LAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNNFLuegZUmh4494N8FcEJzLDFBJ1Vd2DtAumo9H3owoSjFKNcU2AjyRKDMysXAMdAweyp9fPY6e4Mqfc7SkYuR",
  "key1": "5TnRpwaxwwDHdxf6ymin7SRQPAQJtb45HPi4SUXu2N3UUrXMRAUdi6utM9CSUDcovM7amep2ixUS29mUNCgixXvc",
  "key2": "5yWvgYA4RATSFzmb5ZDxfUbcsh2jqgb5fVmwpFtsWnmJKVkX1VsMMXyDGhTdUcZ5fQzUazsuRhWhjNT7JMD1SVcr",
  "key3": "2XYgE7Sj17vEKh2M5pumcMGKmG9XdwyjX3mCjCjDLJ8JqxGM5WhZbFoYzsZdiX5wiiJDP86ZktVi8p45Lz1NupqU",
  "key4": "q492XvdysoXXirXATvA5oZ2o6kiJtXMiGqqKYgdx69YwcW2CrmSyRb9WizNCrsBncSkNxoRtcX58MUm3Fnz5mcr",
  "key5": "nU3PfgMCQS3ocktbTJ798P2XpwHuvv3X1qhZdmDZkdw1KmoHTwq7B17Tyt7DxVKuzQ8hAC5PuZYceoq6mgFPcHM",
  "key6": "46dQiharyxd4Mwmdrha1JM95MwYjEsXcWzzd7Jn5dDGvqJzocssPSqyXcpeFAXNKEPwEuRWm3jR8vwy9CYtYMcZH",
  "key7": "4SezsNzCCgTPw7b2vv5AeQMK6qZ4UtWmrtevxeYpFnbQBYEf2wTX7cJjo2JpiVVMDRsBGJLZKynBXt7NcuR9EYhH",
  "key8": "5fenjqtxB9Vbjx38jqyAfgrVtfakmcH665exV9uZoAG8BbRb2DaviiG18hNqbLj9BZRE3oWXXcQiGaMYbgqvoyTU",
  "key9": "5wjvvDivBCCRMvTcUBXgbwMqNQqxnEaBGaY9RTL4etSstPB2x7H6ZPTcGkyUTsxwdzA8YkpU2bJX3T4DMAYioov6",
  "key10": "34vVa1roDguZhmQ27Tm7iTt7CDiWSd5j7dJpp8iDAkTk5gRMF6FTcrG3YtxYQFg473rQzhzX2WbyCECZ7LR7XYsm",
  "key11": "2AjoEY4b6bRCQDAmBwF23SMcWuyxwiyrfLnu5sCqSC9rh4AufqKzVK592X6vH2SgArVCrzEcKFwiFm81hPxKCEne",
  "key12": "51VvmZkTAEqXqw55PqL2RfgcUrS9NbQ9xgH5KQXhJHMPkHV2tAFGMQXrt5DrMfHuG6d58NSXDsF2KRnYQKFAp8D6",
  "key13": "3uDupXm444QCsdsxbN2dfUDbXdytj1MvMXLwy5aBbT42ihtL5tfxZNFRrLh8799Yh1i1VeSND1XzFFo1fKHN2hWq",
  "key14": "4FM8vbWhwwpZyUvrYdBy6fpa1ejmXQkjHUd7bCmTYs1vVKQnJwEt6yuGibsr1Ea5VhfLpX7S3LaPXVepfTHrAMqR",
  "key15": "5rv3LtnCCufjhP5BEyhiZ5zrpDUZyoRfiyEyULS3ZqaxncJKYD179t2EK2LKJhtgDXS4yP3EQd8aXiBW2zqXedrY",
  "key16": "48hFzUjZW5AkYu5HZQRaptADFnGV3MBWpcpcZZvVSPZqsJTjxVaNhvurdVcsYBjpGa95kgbcRMdmf7KZu2NAeakC",
  "key17": "5GA4JXbNkFoY7iHi1fCrv2DFxm4uvHUNKWTskKzkBybgwWnfMvBvHr1VGW1MvcsSQtmmJp8dsAWSpnLFmZnb5oq7",
  "key18": "2NUCWHMH56coHHJbeVegTLYGEK6BCuRvpmJ79ZzXfZsMxbyH7KktfrbRPfzAnWhhoR2SPXBhaMmLVfhUDRyRNHBZ",
  "key19": "2JMP4FPMn6zDc8dDiDdWX7sBoewb646aK4Ag4mNx64ZMJMkBy4hfMVFuLycvxRNTPFvyJSHqN38rVYtyXxTrXber",
  "key20": "2Lm52QaCcZSdjf6fbHWcDtQDAsFVrYq7xqJLYQdL7e7A8jEQPnQo55ivL6MaJCRoFQfs6pxw9yvmNNZ78pDr3sXJ",
  "key21": "3ToiSBPR9yvsPmM9RHikq2u5432vnS23PmJah938m7zPnqeUggF9GH389UkVwKZZReVR6C9AxiN5L36h5Rj5vw9r",
  "key22": "2msZkKFVacrcZnjfmiE6kztUMAmjtj1bTnz5AyFMtzFXderRpSJYDoaqcYwmaoRKZEwHCfd6emEC1JctMiQbsVRQ",
  "key23": "kDqu3WbiDFkAc8Lw4pyw3epRKWPhnzsTTFxPECkaXrrTGjXzP9DShJZX4qze7AjgrbBFsMxgeuWh9i2Pf8qLZJQ",
  "key24": "hRjrPdDyG29jY3SSrBfUqZL2aUNUDEyJjTYAQogzhDExD6jUm1YunuqhgWXRgSPkymXwqabnncwURygdMQ4C5Kf",
  "key25": "5vRCdc64B8e7onLUNGGwAPL4Lkz6BMoeb8EUagN9Mb2xdnfrHjHnvwfJaLTSEe6pRUSi8KLDKXTTyTuhrCbUV2Cy",
  "key26": "MUBmGs7MxER6N79WTcfBzXbMBYgE3ZJbHEF8ybfmmGRKK6ygk8Br3Lp8H8BNVLrTVo76qsK6MW2xs8GLH8Ziykf",
  "key27": "2oBifnJRAcw6mrcVKndKU7RvLg93u1gUb3JXEWHjwfrSiV3U7RzVpgDiB2ciDKmrTcdvaQ4HeteZ13VQVuYJZwAM",
  "key28": "JMT2kovTMSqPeExTxNrhfYGS7UmXpNkauWMHww2RtunmNUKEeZGPVhnJdBWKURMe1X85rA3XJYM2Dd6oKqDCmLB",
  "key29": "3ZTQxLY8q3LfHgayyZJ8sqJmnMXj7NUBCn7mvXSynNhKpUkMStF9imaZWFmHuAfgXaMydXX8dcYTh3aMBLf8mEEM",
  "key30": "4Suu5NreFegRafgBALxdHVNJ7nTAXgy4vvRVFk5N6GNDkjMSMGCLnvFAnCdQKQogY7kbj8LkgeH8VzGhNhpqST2k",
  "key31": "3HL79bF6UqR3jea64ATi3drXPKQt8nvRDQnmrHX9T3wdWB7mvWAKUWSnVKs3f86GBVoEQxGVkk93GvjU6se9r76t",
  "key32": "25gL9Laspoeo2QfjLurwyDAHXipc8D5Pa2u8oztAuCvFmM7hApftj9sUcosshrwpRRrtA3ZbaVBTQQG2feNYM7Tv"
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
