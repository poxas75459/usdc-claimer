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
    "4rKizPvxeJ9xZmW1wrmLKham5oi7ZVGHy4mVo2GNJBvoC9mAbPnxYFdQYVSePi4sywoZLA2h98EP9SBFpBqXTwv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGUGcTCUBpbWEdeBh9bsAKb2NqLAzV7dvbt5FtmhHdnGStWvYWdVb2obdu5iY841hPbeKqtQ3xKVZJZS7QyXFuY",
  "key1": "2rAeTEXuujuzUxnAsytRoVbvMLEWDzAAhZdReu1LRS9BQrWz7YVty9jzFyTRjuDzaFWKNGbGnwdFYvRxBLG7ME6Q",
  "key2": "51wXb5DrzsvP8nb5CsU7GHCJNKeFo6gbcXLDJWMsxMGnZrfCePVx8hUm4HN3CkSU6tzq1333f5NeeaqbZbTfxbE4",
  "key3": "4BhV6oSFgStARh2S64seZxGzP8eottKvWC2ks5UgCaNy2sjc3sW4qusMoT4VcyytPqrqiqp5ickpdQyDYzsHkps4",
  "key4": "3qLJu4avgj7NyquQqbmRBQrA8QpuoMzH27FLy3uDSPdc87HgVWprTceMNpvx2FVM2wdym5pcn5S4N6MdZX8ZNiPx",
  "key5": "4khKiDvzFWKFpznMU9gJfhPDDjDK8yJPHsLdHxLzY2tsZ6Jumsd6gBYvgQQmC4vVAhudUTCLvD6wYWgFHZiMyBK1",
  "key6": "5om8dq9ne83d9eWjPt5ZBVvp5by9d1MVji4xkL29SDQtsgdPMaLqamLYS79CRRRB2kMUvva9b9d8Bt4cUvkcpe1v",
  "key7": "3oSYUGht1o6Tc6LENqEd6FL2XRKMcittNtaZNb841zAg3mc7UxCd5bjk96xKvgaDcq6xW2bRf6vRLP7xPXDQbFnr",
  "key8": "4xQAL2R4m6SuZTRbrScQMiovDBc3rmASGH8YxfLdXicd4Zcmmc5XqtBNmck6sFJq2nDXP1KzPSHdNcNbamUZq8F1",
  "key9": "4hXfbyt5w8DghJr1hHTPCXTi7CsKawTmcDBuz11DNMpKNMjM38JSZsQg6eUsEeAnybejHueT4usKWGjD3tGi8eZV",
  "key10": "EdJN2BdkHTHuGYTLhaL3zUmxhzXGhvh6gBX1wur8QdpofvUifmqtx1tZx2cKmwTBPFpwDRAwkSeBfkkZQibr3zR",
  "key11": "5ztDPFZnGYtu3ZSoGTqExsm2LYxw1atAx5kqJ77Xk9CyjZVmibHUhxEYNE8W2ReQNi8V6Lp6nCoMPGNJKsqtZQ29",
  "key12": "2bvxyu7G2JeNRPqnBjnwPwSWq9YLG33D9vp3HjgZueUHeN7rBEUTUxt2FTjdvw5AND7Rt4XPVJM3egazgDEMiGEr",
  "key13": "4gWoL4ebm1sibHicmr4VB8Favc1PHKFkgJspznZsbZXwMLfBfvf54NYyuE4TE3Jhi6RfqTEWgQfRTC73iCtmB2KB",
  "key14": "RqYKGDiyf3TNsqu8pLqFq4ZEGZbchEvkqY5HY757jEzb1eKG9ujiYcKLYXM5HQz5iAizx6MJgdpdpUCqruPU6R9",
  "key15": "F7Dwv8bs99w5SbKzQgGEwDbYfGpsiNqJRrxW8s4f6uoEqMgYBofNn4k3fCGy9eKHZaS9aDtCnVjaSi41dKYJfsT",
  "key16": "2JGb4MrR9YKuVcV3kUFxs9DUC2J8ZbHMqHahduT9JNU6WwJpxooJtio2U21iEb65PuNXZ1YpcU5nUKCsYdBcwEEr",
  "key17": "4uMVCiUReH9GRVqGFaLpJmHnd1nKg7Ta7P5CGDsMbHVWUV6BsLaxRXSBHawhhX6AgZHM18LFuFub773vAYwg9Pwb",
  "key18": "4MvAdUkMYHKmLqozdthQnYkjCmYaifYsdQu7gKNhitLbphNtREjxit167F1ZpHoQ95ekzFHbo9XpE4Uv2UiokxU1",
  "key19": "5NLX2usVFDpcmomrMU7osAMJ4SkA6XZNuBGhzNFBmfwdDn5rSan71WamkeaYryWLu5gKuwRBaQnV3KCnukbXQRoG",
  "key20": "4JUpHm9ZP59kaqgpL9iuSRAfbbQRDVEMau2XRx5vL8UUw63KaABKPXVyzCNAQ1RpkfcCVqkwpGD5FDKognm3bkTS",
  "key21": "5XtV3JN1mFt71YpEcGUYp4m9XEK61YTwiRFW9CXJgzx2xo8ZccdtjmCf3fYEhvspK88wEw4CT82RKvnaJ9LRJdXL",
  "key22": "3drxFhXBF5LMUqftWGUvpQWPZDSUBYt4ko3uWKZZSvyqqn6KpmjGsU27GT3Kroz3nVPPkkHjJgSrXcwgKiAYfGMS",
  "key23": "3mGgZnkV5dDwUsmYKKbc39ezMoYJPKEGVmdN2938nCCEUfa2V8HD7XZa8b66vQs3Xa3NtJ6ZnTh4EcA6J9VA5Jf2",
  "key24": "3EcL5ZxGRTduNCZNUETdEdsY4Jm578qsD1Jp4gv795jHLWTbF1CK58bwJpisPfpNiRCrfPATwbQj9RxbDRDC2F5G",
  "key25": "URrT7zaohB8XrzpBGEgKeRfm4mZpBtBVwWPzf6zuvper2axcNW9mKz54jgxnEfbgekQjg4KepSRzgGsiQS5oc3F",
  "key26": "2uCWKQuSSoVBpYjUNR4mMAstwfakGR8AnWSrqvakZXVWdjBrNtXqSu8FcXwdT8osjjrTF7eRfNEQNr641TUdeKY2",
  "key27": "2wWqPCx6FTJM8So2ZczyoYgjPUvYyxmnS98izbrCD79W5ESQqnhdh6KUZRRvoPUwtnKACeJWGKQNKQjFpVioiomd",
  "key28": "57tRSiP1hmHbm1eSA92DTomBgyJy8vy8bG2ym3K7mjmSbxYqosk2BQnf7bW8sdNSK2eJK4uNb2WAjmazF5ur6Q4S",
  "key29": "4DY3zSD2pP3yVqhxcj6fSBjsVRk1fmigkuD45Pe1za6hbMcLEehnUiAgYbFfM8kfcCsDRugE1mhc2VxyqWC9i8ms",
  "key30": "44so8dTHxJMrSrHnq7Ac3UAoZLgk8VrcDqXuDRpwmxRzz4CUvXveMGmuhA36PZJE8ueLKBdWkSCDUsoeaQEQ5sq3",
  "key31": "2dXAeyPkuzG8EjrdrK4AWTirtAW4FhQnM3nJMD1yHt5XtVMZ5Lu3WsAZ8KTrAa4gXGCL9rHaipAbWHMeRbQWmdWQ",
  "key32": "5WVpHGD4v1C26mWrPrJXAJ4nHuMaG3T7hHiD4tWu559cBjzc9PRRHgcWLh6jcEBFFt3HucfGt4BzYEW2tV3PpxMp",
  "key33": "h4kc7tMykgmDYKbQ6xqmfPoH2u3dmPZaYDFNeXjj3W5yYQRHmeKuiZEV41463BjrSPYnWZuoK8GVpTChnkvaEju",
  "key34": "2oT6mHAxS42PziCCATBRmZAUf9JPepXZeE4zHW499qimXgsJQJEhnKQHwyzJc1yeX9T5ukc4cgR4DdL5PonNJyTY",
  "key35": "2RJCxxcxZ7LMhpKP9Qw8gj6zxhAUULi9ok41suQG87ECb5DsqQSNu26VkptjtPLDQsT367ym47kqLXss3RbZbSY5",
  "key36": "2UiN885EqqV7kMQZhepjoFceooZTTwq7oeFVL2pQk6MbmSnxpdg3EuSVEqJqHPVREGPCWAhG5f2NdHwmXbNnQo2e",
  "key37": "5KFV8FGh9jdR4XMG1nfjqRSrgSPNE6wn7xqPXczsyzCq3XteeLpFTKm4VJ1atbdXPZtP2fEkdcz9QJbRCBiMm9aj",
  "key38": "3weXmJeCX2EWLoSNWLWnHVUY6Vmg3bzjGdcYhKK37cSYBAMhtiRCQVcLAUCd5PkA5jFHoHDo3nHjgkPXzRiWP9Yt",
  "key39": "5cyErqmoxUxgxVLyb2v11eJrPEkTeE79A7t9CKFvNZ1aEbpwXLUctNdEMT3omWo3oFi6p4xWYJgFbBmfthhNu89S",
  "key40": "34qKX8FFyA1Sq4wsCbScwFf84AW619bXeNBEwj1Rx2R5yCSX8QXds1ssrCeGwEFy3xnwBt9V5Nwv8BYMGmbdZzyW",
  "key41": "J9nnR3G4LTn6T81w5ZEWCwRK3hmqBGqjAafhHVXPx5odUE1c1hJT2DrBUTFF1CpdnRtEKxKB2HUjZ7i1LFYRwCj",
  "key42": "2WjywcR2vLJ2RrJLhSsDVZG2mEKePbiQHNmQdzoAkToeLp2tn3Qv8TGu745MuDX6KKZ77q4cL1NnwB2V6xS6XVLb",
  "key43": "5MFU3NF5bAv7tUTEZKE7nAuW4BXoCqCkW4VuJS2V6saKfauGikh5qWbLUmQCueSmmhCSNjJa5X2KH1QBvf9dVfm",
  "key44": "dCR2Lzn1UxvprkyJwBdiasr4kiBeMn1mA26rfnRs8v42pgiJocZoG5HAjS3YnMMQFHxKGnA1LrpCti3F8cG7Ddc",
  "key45": "2HMAtoeXFSkhiUp5KoRjXBvTtYbjNRVkUgwMjye7n8SHWmvUySNe8Jinz62Sd3N6aGiVkTXYAYY7XQwnnwa8BXxh",
  "key46": "4TFrQySZ7aHVBAgFXTyLYrfoN1GRYzTokZFNJPthDySXJuxNqy6PgK6fkifCcatLUE1tjNZ2VvApkNo6hvxLohbG"
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
