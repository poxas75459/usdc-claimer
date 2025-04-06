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
    "2726jz428sxPsuGx3w3B16VSo7nciHDuQ8DmTQb1RmkjXdHASCBMsbXdwN9ACnQDgoYd3r6jq9NhhZrcuJsqdwMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cq1DgRWvt4QHrCyF5F28sJUe8cmUQBKtS6VEh5CVEdhWF9zi2DJNUMCtaUomfq15qTRexLLyGytg2uLpAeUvo6T",
  "key1": "4e8XLeqo2FZ1Adox4sZSje1KfyMWy4k3BdDcCuncdAtj2HCNj4L14gbuEcpTQKfii5J4zRQeaSZCfZvcgXHYaPjb",
  "key2": "3q7DnyayQdxJc34gFTvGk5Vuneihi3zMvfT59noZizhZiq3dYit97ttBshNtrNAsqmpdx8H7x7yweUKk7aceNNRB",
  "key3": "5FQn9hxRx4JsPf2hc1ibX2vGCUYk7qUannawm3DPbpgRjEPmKdm1RCQfee6VsMhMbCZYVNhYV4t7An39oPCigCub",
  "key4": "3mzPzy7wYLp6FkoLFABB3wm2VXfbuyurWT6mqnzvMN9yyXZDbAw4ZDBVqN6cjHXrHgr1qFi7vNFAiu9KYW7iUR18",
  "key5": "sUck5p7mTG52uxavDiwMxRGYu8VKxxMXKd7s4UrRLHcCEFWCK4yxMBjbm2fpVQtDx7hpvF5UG5bxwqkagnxqpAq",
  "key6": "qQf9o19eqxniHYzaDdoSjLrpUoQJR5oaYQUjrbCiw5zWV9cPqAu4NnJ22VzsFvupnZQNpTBFHkckJJbhBFR48YR",
  "key7": "mjj1dWSqMRCCFErGQRD1fgA2j6SPZMiJ24CoymrpNJZXFLgCWxkCgtTSL59xYy7ZbiDLG5owiuuZ5rW2udvs8hS",
  "key8": "23jxkpPMCbxRBX92SQqRFm1C2kTAzeD7d7MSjejqs8Fqe5yNbYbZcM2USyv45e5UptjxDeL6o73TZuzuuhphBJjj",
  "key9": "5KKmd41Ecfn77kFcNJ9AQFvb6ZyKBgvdtz44fe13w6ebFeu3oGKE9nALZRfTzNZ3s7VbkmwwzKxsLQrSu9En8gms",
  "key10": "4qdef7C8ws5oaTQ1PiXw5cgpDVovjz8X1jtpzz9CS4WoitsUhUuD1fLT3YkyufXuqPiTUG5E2CYRfqJGpCyZyHMr",
  "key11": "5eqgm914XMZFwBhjPPQrcoERVhstVU8TWCWF3Z6Eyq6Nj6hjAmMWQuusitXZf3FwQVEnXbT5hR1CnjDmRt83SKaP",
  "key12": "3aaoooZBoc8rcpYSUuPqp4GtYbnqCCiJ2LazzP61UaVg2nArhgpkgeVCgwmBbuJYyNNEV8wnGCmNpeK1nUx5M4an",
  "key13": "32A6yx14TpCoqxnTw4EHiE3qiaRCC5RCbL9sxVykm8oySR8PFzozYLV7xuGV2d14rvftbk1oHxGBrxdgYdpWP7cb",
  "key14": "5xy64nBryaJnhQBKwetbFJ5Y9TcSTBCfkR4ou3ugXpEfN5rz3PYVqYiFUqVw9aikcxQD3vdboZqSHPwGBP5NEUZv",
  "key15": "TodYPCXqQQsvz9dXpZNNPME3rKT2qBfG9b9B2Hsw4JeAQ68fPU9zFNnrk61WsJtz2ZWXcqc5yS3xTy8CYpo5r8A",
  "key16": "4MkfuQRatE9LCiFpZC5BwDe77XXXmggYd8DcQod5E2RadAqXpYufqpYpLd2Ro57NFiyWuc6xcbM4bq1LNN6CoWYP",
  "key17": "2JZrzbsxMFFT5waZAPWqTWfnZzAgJeq6vgN7jrZpjkLVqCg2FKs6zoLw6imTP9zTyFVftFW4fRoWKWD1P2i7u4au",
  "key18": "2j8FmZz8JY4QywvHXDMAhqJkZxdRdpywZ22H3iZuKw9bvPc4ANXwJg66sYjzf1BUbtKVWHC2v7UrdA8V3No4Fz3U",
  "key19": "HbW9RUsbjHiaYRkpajzMtpHEquPb7Vu63oqEQgR6YD1dinz5wZisjE1wDrv9ht54Wzxzf6UneT7r4D6H7cd5fwX",
  "key20": "3rA7Vu2dfeHwQCJWi5xc68g8piY3hWtbcHCegszg2oVr9SjVjDLkUUTr5vDpc2aGYrxv4Pm8wA7BG1FU1nVj9siZ",
  "key21": "626pUMEzvf53BdRKD1V16NRFMXyCegS54w6yBRKR7vdXA8r8Z3CDkbi1m7fCtNbKKaQr3N1Y8kbgKc2bdesmAvN",
  "key22": "3JFTbYchxpY68HkNW4uz6ZEEagdyJPMtm7HVYpqBXbpWGaqq6NCsRsgLDhPhN5MTgsY3yugUwxDnxWS9gE4JrBR5",
  "key23": "2Ln1E3SoR4JVakYXsFgL4RBJcbLMc3TAGv3V1g18UnTNjAJjmCrFPMoUaHadPtCwVYEosryy35NcSXKwiBENzfuB",
  "key24": "5gp5ofoWdrpHaeXjw8Qatz61kyAhjuKNheDkBysidz5YP3qNsaNgj6ALf17HvthrpfyHy2hZHBUAAzzVqkhk8nef",
  "key25": "3WTi3nEFUEo18nadQ4aHuToYSFpBcRYAqpKqjUzFjMc7HCkG2FxT87JAFShQLoZupnmZvh3FdizYYdskfdSxXLbs",
  "key26": "41WUQsH3NuTFLoNSJEYsr2gs6jmQ3vSxZZyurzrHX6AeYpw5UdBSMJXh77cdMaTDKw9ShHzKuJpa5j4KdYbnZJ9W",
  "key27": "2daxViVsEH78anuhLAaFwa3xAnoqEtX8JVbqJNDegW8fsUmxW68Yzvx4kkqzW4QWtsyJ1h6aYDgCeEFxGpn8z2az",
  "key28": "dmcaq8Zm7bePPwsz9EK776cpUkrFeUB3NqD4nuJNKgS7JEgeNQhYPd7s6NMohqskuWsWbUmGQuvFqFa9ZhtxWXi",
  "key29": "PDq8Upwxh4oUuSXycaRkGEXVEnvejAGPQJ27c6JYc5FB2WdHosGz18nzcZbSwgJJRDf4yjLWxfTrE7isknCceiN",
  "key30": "aK8rZebVAc9UV4MfXAn58aPyJp2qg7jeKZn2f5yRPRN5Zw8U9WQcUrTQpLi9NP5xLE8jDBAfxaLK5hmmpN4xoRP",
  "key31": "2Mg3qNzu564S9CDYwn9HigEjq3SWvt4PLqFJYmhyKSmb4mdZez4GNebSE774vUvyVKzM2R89sMC4fLm6CzDKX9kc",
  "key32": "55zS4ws9waqyVJbN6pxTdYiCg9gq2Pkk6pAPTtxVBSJHraUiHzrVdYV6gL4Ybjquf2arUAaRYT3D43HC3P9TxPdz",
  "key33": "2cypnyaknWu9X5QHU8vSnzk15hpEjmqd3NkNE3jTCstprtgacApUgPUrzEHzceJojaLjLAgTmsCA58rGHeSTGr5k",
  "key34": "5xDMr4vEmDPPwnc2paQZMSQApiUpwUrgETpKgtKDSx86bi5TJkPupesnKU25n7RD7KuMU2AvxYQiRCTeXMbMcVrX",
  "key35": "5ZzZ1tZzBc4DmEE35UPHNhTVrkGGGnU3rP6ERKfo6yLAw2xTW5sFE28eA5rXMPiqhMqaTrejDf1QYgLtkxU6aiN5",
  "key36": "56CRT8e7oZWVwvwziWkZJ8ivZ2bgNhd6upc4Gz8eB9Psf9qtTsG1oqZYNJYzfJmYn9N1eMcd29UWfwET8qi8uwcp",
  "key37": "266tGeLvD1mSdBN7q99UpJ3CCtRzdUxtPWyb1jTbhydcw1agLEQxU7GYoihb2YnfwpjuML58ZrAwxjpVi2kEiVS5",
  "key38": "4DrLbzxfRMmRWLQvhErSowuxAaSmRxu4ea4ra9FLXe4k1Ss3aejbbZd5QMQh7qGHVpv76oZv1ce7nKsKqmDdgyww",
  "key39": "4CFJ4Ny1d8htqDE8AGSm8WutJjuxkn6qiwa14KiNG6uc3omaPx1qWup7D4qiNaZuvJYFfoAgbtf3GgWP8BLka5dq",
  "key40": "2xFS7xrp8Nd2zd9zobn3Cy4kQQ915TS7oHs7vm89ofobf7oATkEht7JJu1DasP9meMBRvD5siB872A9fCPr3oAEe",
  "key41": "5iLGVVL6M2oXWsCvCVZrhMkGm9WGM68BBx8wSpYdTLFBpyUZPoN1c7BjyrGp7uiYxPVt7JgxubbxQCCJU5MmVVC",
  "key42": "UFA1zRZ66wQ8gYdJXGR5wSvB2X9weGMEeaPhAYKsXBE8nZzWHgAr4uiTAbvE766ryhbu6YAQinup9EAKhPUoztw",
  "key43": "2aNEwHaAECmA8ZrMbdcqAH4KwGsVZbSpaCtQ3MFu4V6EgGGYMg1T9R67KPvbtvbSNN4uzMRbURsggsUh7hAwbZpU",
  "key44": "5p72XDcjbwHYnAPdBuqCtWmxwCEYJkH9XoqGvcgpwXtH9QjasKk92JExSA8f4YyXjSWiYYV7g2w9NCESKw9mzHPN",
  "key45": "kjAgCak5cyJ2Xuj7HUgUBUodK6ekcHxLDWaLFfh3r8h1eJ1Q43PmrNLg4D3LwrNCnnjgKecwckgxFEsqd7y6fGG",
  "key46": "4TrSMHZ4MocNoJKiQo5Ue7yH8zZzEef7zLMXFhjvknKLWK7VCeyrSmPhAVi3hrjpmbqJ2o8nrL1BECr5eCRfhzC1",
  "key47": "FR6dtz7PUmddNq6miNMC8ZnBKeQSnH4tgCrFTsaeGU4zKtmfm4tkXv4GrMtxD8Cd9833hpxD8JAzJ6449Wgrtkr",
  "key48": "2qno8cGGxxrccpP3j61juSPbt17oRPBC7q2jNArreQdsMJ6nz7hdLuJJS1n6Pv9XmRM2AhNAbM9CGqaypbX1YBXC",
  "key49": "4tDmqsteS5LAJPtDQPTFLrLgMr6bJvjyqsEYinnrmVGLPx95caJ1GNmqABj7R5L1iLyoXkF6Fg3oewfgyCeDbRHs"
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
