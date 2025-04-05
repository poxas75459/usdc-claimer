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
    "gmmL2UBmNMd68Fv3gtQ6nFL4Vx9Xcv3WVqGUg8cDzuc839quSgRcNS7wcYLByoCvKEdiR29Td3ug1K1jWGdfWqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZeW6rP4NYSfcToLQi3BVNgALc2aBxyDNbhCb4TnhXdCyG5SKoeM42LpVbZ2Quhs8bMEH4BjY5tZuB8Z7XXBu1Q",
  "key1": "2SBVg3hRXY8GEJVbjpPUcwVYFzQeEwXbYPyJtXNu6ZRHEcM1U6jX2UFQEN9U5sucDUSUQi17K86ZTXwahZ4MCuAo",
  "key2": "4L4tukGYq6ErD8i22mFLuhiMsig6GTiG5piXxzq6wFFCzETG2Dtn9byJboeskh9A8cUgA6ZhWHgaP3uzJXV9Asmh",
  "key3": "4VTi8ACn4i4czoYvK7BkswLVvkAiYJfszfCWMbMiB9EvT49YR6M8ngsioTGRU7DpEFF8vDNVSYHFk4AZVPyx8Bpk",
  "key4": "4D2qDUwKQbyFgrQwXkNKxmeK2NUf38wFfRxfwdKZ7boAgBxMGfMZx2FWFWFcdhmb256SDbq1jU3Lysmu1PErEEMo",
  "key5": "36JQVbxdmXHLNCHrYxcJx65VpdPsFzVSSRyiDa25Xr8rHYX4y83k9bUdrmwejtUobRTSaD1SzFFVGveAcvRSeobR",
  "key6": "95WRtEr8aqFb5iRc7oweXJqnA7rVL8252VvFeafoUQea4yTN6FHGiLFSdS7x8PQHu8ESzJvZsCnHo93esyMW6fL",
  "key7": "3qcYdryBY18UBZSN2YeYZEzh2d21jyKmw9RjnPNY4pCgdq4oXGAD7zNkSbpmrUhu2Jq5RN67hGbUdA2BxExaS9m6",
  "key8": "3UijbqpuRSd1der14LqSC4VCm5MAZHVQ5E7UoMFvKFGjkMVDwgu7g5Mpk9JkVuv5nLGtsbyDvTGcvBVMsUvcjErg",
  "key9": "3m5nee43d75PAknLrSxuLF9dtpuXW7g8Ck8ZMdDndd2MKCLpkaSHwV6woJHiNE52xsBfjFgR7VPL9SoDhS6kMa81",
  "key10": "4Hq85szi7wEofBuGHKVayfNDiYoLBUbSYttDvj63ry5vDoykKWimGvLVNnTkHxnKfATg3MJfB8NQpNLq1ZDg924Y",
  "key11": "wujd5ZKhJWtV6o8w8BPqFHz1CxU3rLCNYk3a4jLQno6LKzp3Yh6XfmhYXBoVLEJBBUR7rKh3fEEHrN5EWJnfG1s",
  "key12": "AfsXC5gv87Uvbu2rW5zFJub1JZPDZpAVu5538b1sHyapbzXmguDwb3xJD5ttjRooHwGD99TymNdSFHcACLXAQ9q",
  "key13": "5rVstSMFUEWHfCSHaoAqZBS9GQjRDmRtygLSGP8xGa1dqV1MEkoWg38axFxEHCSuMd5yhG2CTe65ZPfrnXs1JK4j",
  "key14": "WWL8twscQQBpcvtn89UR2SRYgKAVhqNYhDS6MDv7hozbDNmkqnYa5Pjg8CAfmjCSXzQcTUegFMPj4RtWytbGXh2",
  "key15": "5sCAhMoen9CTcJZ285msAmopT4yCWKSNmvKQnUSuvDxdh9iMPJ8dpmTdZeyXnEaMBXKjgZUobfTSkXp3WGNURRqn",
  "key16": "3USttSLb7ZF581pgn746LoyCKeDwNB6sRLg6EPSAo6keGQKon4sKYEvTsK53UVXp59cFtWpbDYwgehXEFJUx2BeV",
  "key17": "3NJ5BwibfR1aRnNNkiDCT19rSQU8GLp66tgcY3YJV2x96MQNmxdyU8nD1AredzAWRGLswZ4ANJGziBWCbwhXVF9y",
  "key18": "55bQ1J1vgpdaMobTU9wJhYvycN45GuYh79VPQkJsjSN6TFKssBsrTGebVZ8JfcTL6sCd3tPSZ9arHPxEHb362JfP",
  "key19": "m6hXMMF2p2VQj6BmoyG6iapcyXgorE35eLqrz2JLzixQ4JHCQWgRXXXdWb6Tzy6higyzAEyhSD6L1ay4iqPDCRd",
  "key20": "ompbkxQhmFfHfdVGuj7A5nm1a7EWffXSXrrQfmwNPUCBmqqfY3FQ83hN3PtSVkBdNvVqq7etne6UKr5mNmBRx4L",
  "key21": "2B9PsYsfGUsW6QGexiz7xybUKGJDuTSi2MPF6TdVYmpMeTq2UG6VGVC1jVDoF3Ah5TD5NBiNvt8ij271si329o17",
  "key22": "4aJXwKNMxRKhdg2efAoLq5NeMWYuYz5K9SV3MotmryHBJxCQtdy61RP5JaGfcpcC2TJ4vGTvKcA9irRZ5TdvrTx7",
  "key23": "595VdbPByzRQ24bYE7yPpG67Fnghmj32rV37XPSez8pSF48VPFB2waWyZYNcpUyc4pUZ7uwusLw7KQJrLBzkqCAr",
  "key24": "3ggqtzPt9y1Dt5uFFPYck7FxyRrhB7vRJqVtb5wUsgspGWeTFMpRdfDodiRZcamPTNzU7233xtVh8617cFCNDvby",
  "key25": "HKW7sMvuobZNDDtUnJtF3UkNTyyuiHxNCdaqVuRnbv1YffQhmsM8q97Aq9GbZaHUEDKpJF5eNm7BKDw4WQB4Vsz",
  "key26": "3P1zht6w4JPsnmr5tvDzaqfx1f2DhZZs5bJKDt6L6JPp4JhaMynXoJ5eZcMwFPBxvMEP4qAAnmaVaEAWGGVXUoFp",
  "key27": "3wBaHuvZRsB7UHhnUDWCSmm4aP8m2X4w5KoMiYuD7Jd2XWv7MpNA7t3xxDwUxer3ZKz7UXNVybJHA9yNVAwfNmkz",
  "key28": "3eRHVkRL8uj3mU6XgxWaLL25J2X7pv2X1tYgCsYoM46AVhEDUMUDwJYN4isNSQvCQZnX7pwgpUYTUbQEvUQJWYbu",
  "key29": "5LNmBveFDrcDySDTEqWvAYXvKYbjFzrdyRy4E1e2HVZZFKoJroj9MmQx5MjLN2gpiPfqdpVFbJLe5YPS4aSDzm1D",
  "key30": "5dekUxGsiF8w2Hp2KBbL3ssyHHUV8LQAFmEoSsWAQgvYo3Xk2bChjEUzgiW5jMh6FCTk9r3zoo4qaxjVpdEMoo7H",
  "key31": "q2vcxMNifSM6dhmeiBa8fM8UT2uhXRqocCa22acgwZ447wgLaQRTCoZZv8RWzhmUQcxNqJgcT4b8iMa2f5bJguK",
  "key32": "2ee1j5NsySEXuLF1GHWGpgBBKDBhC1biUYfdFhCSqGsMxUvV38t9tQQ8xM5w45StbKXsGtHsNHwixENfugwJomp4"
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
