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
    "3kLeb8N4DWEvz1Nf4G3HVDArpoxhaHiebNj5MkL5cPmUxGhrTpcoNoKACX3aapQz9tfAwLPQYdcW2SvvZx5qqajU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tYwbavGfCbGzVU9YGpM45mJe75gtwE9jBVQhW5W57uyZGVocfHEHi8P2feej4o5mpy3S7crqCJhLae1V6QoT5Xe",
  "key1": "5gqaBQhff6HksX9QTgxWY8u7wCTaqMG4fncU2Zy6W7JF7jWMuk5yJ6h9ic2VKiiAHjx8ymG598CZTizqjxgq93nQ",
  "key2": "2hZ7MS1UUTeuiN9CktLYc3CiwLQXGnkAZnErkkKzdgoFeFqsxac5rcNNswhiuoRhMcMtHeiTnMXjHfzjCmSvEYVS",
  "key3": "47JK26ZyQbi5JNCCubTpbUmh74GaLc1BN53tz4SmoCg7M2GxV8Ger6QQx3Hi9ZTm83PmpWqaBne6BjE1YS2apA5u",
  "key4": "3VDpym2WzcqEfLGtA8dxfVbPxgZGxvkzm5ddjSbibUYiqYUwRbk3RzaXDYNTFNg7MrJMmDARVjGiF8L1p1HjSJtQ",
  "key5": "2KezVGrMHcSh8hxTpanoZfns2QQaEhexAx6GV7YLQksPATNodvDWFs5kKzSvEwVKax4kr6wpGnMjeVjCAReeruAE",
  "key6": "5yQh952DouRUp5XcFvRRJNiU57CekVPPnX61skqM22qcAFEU8FHDrPpiEjru8zTGE3j9pJ61TX5AdC59LRubNqot",
  "key7": "DwomUgnwVN8dpdZdBGqhNdpGvJA6ZdjoSgjD2667TYNYVPEh2MnycBkoUb9MNYZQX23cMVmvZpYDLzQM81avMDn",
  "key8": "5aJQbTwPWSxbNYZuFUjcA1nvNNu4M5mWnGQKYS1FVX4XbnS7bqr8Jjf7oCs6Bda3o4jGveRzhC316pxmqLs1AbKS",
  "key9": "5DdNA4scSkHVpexpyNqkXzjaDp6oo1FwDedaSGYGuwV94d5PP6m9CWH8k3e6hpoG68nPZcGCdbt5HTv8yFTsG3gn",
  "key10": "33GCS12B9j5qwWVVRFbaasLGJWdsEohkR1borGBL9T8Pn8xkM1k1dzcUi5JTAY4f4JBtF1JxqBaTz88zUavQ3KHy",
  "key11": "3zUGNusThARex6LQNgtLng2x2ysREHUwC6aHoiphqGk3Lssu6qWPS9TnX4pvgz1i26iugMXxhtn6w33FWQ94gjc3",
  "key12": "64CjSGrDp4cpHvwpKDpoRHHuz9nyQeJGE4XeWN8uF3VU7XMZJX6uGd2VpS3psGuvG9xSzrZxgqriF4k2RQPDJb6m",
  "key13": "5jwLdfKfbnDwefp6Vne1g8YNMLVDiw54zGe9pEJy92yxao5sYbzCdkN8udwcZp7Dm5qmhLchGsYpA2pyTxwMFXRv",
  "key14": "3KGakKeNipUB5oFStUP7RAAu8G1GjXJ9J4MXpXn7fZuQmhWy81vmmS8aDferhk4UR5CGaGwvHEAB73afT8MsY9tW",
  "key15": "2oKB1Sx1Lu9tzPhXc6MD11yUP2zT5eTaoCTJzf1DteaYZXGMMiXKXxtHPEJVBLNXEyTopShuyEPZBSqK84Vo3MfM",
  "key16": "4nSZVKWAA8DHFyMczzm5PwEqY88q6sjfyPvrtFHBT5cg1FQWiFziEGX7tfUyK96RhNfuNmjAM98VmyXASDNQWH7e",
  "key17": "8ZDt18YyPVtAbYgwnHkxMdXMWTyR9gtCKPvkRxPedYarMPtytnU8Hc4nsEd1S1uhyMu3fxWDuDe8BuojC8YVJr8",
  "key18": "iEPwkvfzsMTQLrc2ddoU5mAkomy5QvoP7BxrYUUP3C5Sf1o8YNZE7fjT4iMApCZdses6YmEDnZqyvof3djZPxJk",
  "key19": "4L6MUn38uHzPRcVq2JJmopDRcJvWVXTzJYz1QHWneu9dTbMSqvksWU1UrkxWpdxcPuBvcioj6e6Nhy9bG7B8C3cQ",
  "key20": "CxTHR9VktLLydK4Ny5wGDngRo6XLxWx6NbnSXZNmKCW1mrGs4zZo8Jv2PvsXYF6Bt3fHvsHXmhv1TQUW6VqSZp9",
  "key21": "5BkyPDxoEp6FuirJhf58XohBdHXY3QDMvm1odYSePE99Ko3hTsXZbH4m9pBZmfdzjywXHaYtiTaJvZg9uFK261VY",
  "key22": "3V9PJndp7ybk2gF8YcttzYytmZxoXFtwx65kLx3S2JQS7Rquqyyj9eXDWUhi3tNFJ2E1Twu7QFFdFCPU9AJgtqYs",
  "key23": "o9sM9UgDWiA5FqVkmiWL7Lp4vUWmswvuxjsPariHQBCCyXfTeSexGmSGgPU6tnC8JdQeMYLkkDxP5MvKSoXjmb4",
  "key24": "32cKgVgY6vTArHk5WjNjvy375B6nUoXuVLx1kwqsc1dNaVmMF1xdtcSQow2mBjA8kusUP7adAwPGsCy38f5aP6Ch",
  "key25": "4UmazYHZUBeQ4wKmy7Y5myPgDkiMigo6jkdCMmEMX39Q2NjM5WnB57tY6Ps4t7ELFrMwWvVhcobxCvye43JLt7Q3",
  "key26": "2U8X5chayvq4fkygtWstFZDcuRLStcyRxns5weibDessYHLTRqtFWN9EjatZRPF6KcJYAmFqzz2g42h5B6PCFUaz",
  "key27": "3sESgmYqtJJLJ4MvbzRRMCsXAXNQR96U5opauKEvy9U7MpzyhkHLv87adriSG1xAk8nCmGDshVWynkscNkG3ibjW",
  "key28": "5qzv5Fs4RLxQsTAxTTfkaViNvfDU8oDGCaLSUn36KfuG6XXM4hLmf9egbsG13W2sW5Cei1MbzjVSPtFTP1NxFqSC",
  "key29": "bRqVaLEcDQWTdoREdQRb4PBe4nc4C6kbAo7gytCygw6tH4aDiz8TG8YaunZdLZzgs3CWSsGgmWoaBsydPyDXZBg",
  "key30": "ckzmU9b4svjfy9kbggFMVqdbzcut5cyxkfiMzeeGr2s5Pjq49TSCTskfT8T76CwC26iFqKJMPgoEeDp7Kuw6ah4",
  "key31": "5DPxPpmefMv5yZVqe8dqUSi1eJx651onbRpMEskUNqcosFPpotyLEej8bVwDmmTD7p27Ztw2WF3J48XH1WpsxD3q",
  "key32": "2brNQ8ZxPUuNiR4S77sQChS5P76HyEeBm6zntZso7paBWqZ9R24SPEeNMRtm8v4RqAEg32yzxXav52TtZJwiYPoN",
  "key33": "3vSFn3kyJpLTLvXpXD6MeRbSg5e3qxXi5TSSJLkHV9tW7LEBVDw8v99tEwDH7NFdLefpUKXDdHXw5rN6ApJcA5Cm",
  "key34": "2ee86GyJaPocJSUETqYSEsm4QZXefnKiJRNdXg8Uw6uf9uso1SurVcwndrETNdpir9fbG9i4wJGoCaLHD4rjWcLy",
  "key35": "2Eqtf3rC9NZdgwDTHELXQnfS1Kesm2xgfWDWEvadZof66ox73LsJ7YWCgdvFTnFX1xmhFevWgtFN8PcJ3qyZxXzL",
  "key36": "4RU3H5k2Z58CYRfWypzRHGQ6UjHqkZwGsdbxfqVDRjkisZf7yb6ikhoDvTVoecx44G5GmCkySC3gPNUC6BMNPBs1",
  "key37": "HnT2FXAVBERJ4YFiktojTn1EhbNsUZ2yvvgp9DQwLYrq25iMRzfjkxowYkLeQgp5paV8NFZ1Fc4Dp7vjGEocp1Q",
  "key38": "2DYu1yVo37fNgBZ7VFWCyzHEtXXsXpzXfioic21gPABJS48onSdUnubGGARjNX9kD4KrT3oYjUqHpDLCgCu24ZSY"
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
