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
    "5pHbuwFNt8mFtr2WzBAonBCTukt6BVQoLw2h5PMXXe3xDJiFXC6hN2hN8KiaBkFPUPDjkY3nGJjERq5qGhDfZuXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezUnQnrZyLWvzp2BeZjVrLkxKgW2XfUqHRxUnkmaFgkwRgELG6ezRJ9wRvUat3Xw1urCxFb4gkKSbBQ4ctycoDR",
  "key1": "5RgRRkv5qjtyjcdjtiS3pWaNsYiNXFpEkuSn7DCHvExq5dUd4dgtb19wXuqGdELYytqZBVTBgFw6HAJDzvqMEQao",
  "key2": "3q8AQnMCzzWgQoLeXRcuz2FW95zwaQEew5DgkCmejZDrftNm4yNgSeLx3eF7CZNTCtayBy69ktZhjBbbRCNiBKdC",
  "key3": "32A7xkpKEz1N4R2Qo9zhnzVxCmy7ZGunayiL1zbEfqc5WPya6zdohkV72xQW4n6vA98aT7WRu9mLdu5nREDZfUkC",
  "key4": "4DD45Ph9MpJv49FeTSdWrrqMhGds6j6N2SPERQGMsDsqQrMYPpX1jXC8GhGDzeEPgL73L6GVrFZqaR6GSvferSab",
  "key5": "2d1vYYxiSnGnFdW8WBjR4WuvkqzABjWJVLbUKVeNt7mXS9fFu3e7VeSc7cPywkKZD8YT96TKdM8SYmKHQrMuiw33",
  "key6": "4HdSB4Zqj3PivBCFXAHGZG5sVkWQ7WRkkjJpToGfx3ifxHy7xfm5QAwn24VAyBirABVaMkpSLCBUTpnWDW4KCYvX",
  "key7": "soAYNjTYYkWvwyFqPNQTTGZxbWK5iwybJzBzux3qSUiXr589epU2TEFuAWXqLArBdHsUH9hcwWwxNRxr77bzhFf",
  "key8": "28AvwFbewxgCo8NDnEy6vEJC5XMULg2ZfhvaVGMwKkq7TKnkMdxX7YE2VYsS3fxpG7SHtSSJRY9BTPfyWdewKX5Y",
  "key9": "3n7E1L1ThtdAqrshV8EWv3ZcARDc8jGB1eNnerPoogzu71kCyGg55oydYiVVqcxmeV86UoyxtVCT7Ai72DTQBUpv",
  "key10": "4oiCFDAUK4w73uVkgkYfBSXcGRcrkfJH8bkMT92h6r5A3DepZDcPZJX7cedQm4koYN9LxEkgFU9rh1FSR919hSWC",
  "key11": "oBid9dCjguGDSDtJSpCpydHsu93GcjApgG8EcFZwa6Mc2qpGAyVRru4AKHfas5YRsjjVKqN2MgjKJudJ8yQ568m",
  "key12": "3XCjAQ9agciZAasvod875eCVrk7USH5v2yAqjxuEL15vNyWUs4QA2SRFuhVz5qxDYvhNwYY4JRQJhGnLk7wKSNm",
  "key13": "3dVPM4fngTspgQHparQ3vKzBDBH53QWPq9QwebuRALNromow6g3rNpz5NReFMB4GC359SaqFF4LMEGAjH56K73AZ",
  "key14": "KnqxK7X2HXiJEBw1nbue4AXztQMJFxCRG6NTNeHP9u3AiRcupwjhBmrGonNBLhSYKXu5FtqESMNQijxV5tER8Jb",
  "key15": "3yLC3cXFCDR1WpRwrZsP7HgUqNY9smDHXavBotLg4N8T6bh8AurWKDAQBHwTNeG1eXEhGhumLnvtSZy4GtrBmBP5",
  "key16": "3NuZ3KFVUqQWecVzkTshmPkp5qEK99124E2HANtCqoRtL4VpMsuAD9Tv7HeDUWjecuojMaXYtV5DNagPuMyqXGKu",
  "key17": "4EvSeXfuG3sBEUs9FpPmBFUa4GAHFtA3e478V4qbbgD5Z5RXuyYmg3yom7xYet7wZvGW57btxRPrwNje2FGB1VmC",
  "key18": "3Av3C2HZqegQgJPT5BaxyMryuxgxsDA43Ug2WcArcy3epgs3AaT7XrfHEqREuo4Eq2ZZWmgVczpgkqU4L4URqWE4",
  "key19": "4FFEwbQgfXzLzt6MafWagBWqHYeMHB4TY2fM6u4WBoy7Eoy1wKAB9hCaEBvVUWoxXogvK2QbRV1mp6uqU1GLLV1r",
  "key20": "2QNfajJVhkpuvr2aLGErWg51mciumfxD3Kkybs1aeEVrY5JyGWwjGdKth6tkonm2kLYNGZ71sr7V6QTPnedNYTQC",
  "key21": "4htKFqCyXrTNV3kavmftLjs1JGVA2mqFbo8XQ3HfYQUyZ71srmEdH62CbZhafwG1DDftGcvAXPV8bPmsLBpFHccv",
  "key22": "5nA6DApuTx2SVGyBrBirgZYmgGC6NJY1koHUtkxefxEzKz2DYu85vs8ZbDGmuj7U9CHM8DYRB2EMUtSxna2YbbNC",
  "key23": "3MgqDTTLTT3nW13pfuUMGofB9kSRuSqkeSmMbrRkj7WeSucnHZwtkTFSrhQr9LqToKqTKNZb1MXQACsGwF97g8fQ",
  "key24": "678zx2mLeaSjXzC9UEcEkNec4tHXTTBWG6ocfHJEy6zotQic8N1EPk1JWdpojUYkAQw7m2vCerEb7ArXGyfJyWVw",
  "key25": "2B4pyv2JQM7iFELXNv8gY6mVEQ9bSeNkhudvFKStbeFgsh8YqMsMCSyFj8prysrjoJGXa2sn5QYPRK9c7LQhYHyh",
  "key26": "YBcoNjAtXEVQTBrWzn4JUh9vyuDe2d7F5uVAcCYqH4feBNStShccq7qgxVF6SpcEpvErfeWvf1RUWs1K4EXsDYV",
  "key27": "32rP1f7bhjWCmXSWDQFi5izPQqWvkQitb3ucrLns8T5XKU7v7St7zg7ZuG28bL5M1eHhJhe9tSks8eyiTvn6t3DL",
  "key28": "5EamSdmqxpX8sGZgJzbyEPdQ2zjfkGxn2rXLi8BKCwLnfZWvmJYFKArBETNzkwQt7P69TKunzQs3y6MFJv7gUnyT",
  "key29": "4DgBKrWBJCb9Hka1hQCcSHo2J18M79jFEZFoSyj755uaCJXnjixtbyhJd7eLwgvFr9uNPSbtuxNv21ifmX4XUevQ",
  "key30": "5KAWsSVwquzFeYEEvJ858zFbMscHzGt1cQeuHVuMzyVHPcJvJfzoHQPfzj9kKcvfzLezhxA96k3re7wUAU46huaC",
  "key31": "2aCG3MyZdjJcm5axqVNNMNWYCM1ij46LH1hMShwbyHZ4J15Q5sKVQKMptqSWtgfu5m47j5eq7tZDZ4a1hJyG9Nrn",
  "key32": "p21b5CihgCCPSUGUZSTfUSwzHBXWEhfm1xHt6a4BoFsfggKwr3QdmYSQ6Gc7hVRJGxuHsXXLAHERbH1P3JZdkLW",
  "key33": "3sVTg11jsSbCrHKTCnSzZ1QRYSDL4j44xNxxBNyf9thKDQFDVtYTvnw9pT9jRcjo8LnAzkLgigp99frgYhKJjjnH",
  "key34": "NbViVPv9t5QzD8fh8F1RD1BvreetEZZnYZJjFm7TkshD46k2ZLZ7zrLYbweuWwDHzSGvfwGe3e6iWowCW2sBasQ",
  "key35": "4EhfQmTyFqyaqi3uwb26veY29ajVQEe75uPVrKLBbvVNECnsZg6a28PaYWKbbydSR5edn81nG2biaG6jqN3cVCxA",
  "key36": "5fWdj38kNhxcVnBNSYWgxqNJiWDMndKzVdyNNHKjDtQpehhMNf1WBLiLfD8EVYkXD1vn5z2bwwb5m3DFEruhvzVv",
  "key37": "2KPi1WqCTgGydJjuTd2Q8a1Ucfy6BxDc1fBtyL38hy3qB2VQTHPZkVPduik7As26UcKFbBciizAcUp1bkbWHCfvW",
  "key38": "3x2W73HzKVCBzzBkePSCVEfMSJJ4ncsj92NBBbVv9vvotJzj6dsgdmNCMP1K6czVpCaUnJ5bZmmmDRCsgyyJR2v6",
  "key39": "5M5PDcyiQ6Gtp4Q6HHGffXUykruD3Lg9RQ95GB57t2nd2ktswBw7gG5qoSEDspEJsRY3wq7kPKu5cm1paZAhExS",
  "key40": "4EN1kbhK4QCqogBMyMj2TrxPqdaB941LgxVpnbKy4T8r9xeu17cRXY8QujpW8F9FXTPBKA8xdqaHGXy4HbVCMi36",
  "key41": "45iKYnKsszTDvYXxftv4yuPGkYnLm3LZrpFWXPrpxiqpw4SJjmdtTCnY6MwqGPfpttz7VvDJPFTKgvt8zUdCBgss",
  "key42": "4xfTkiRS9idg7vpgi2ZWU7VKDMaRxFQDziXp4iaagkYEata6gh23EQn7NggWzksy6d6EiyVsDrboWPzPSeHUP61S",
  "key43": "SmQFfYn4BmD81ZCHKh6q4qvFJtgmNPVwz2nUpD5hDAzovGNpft2SZQdfWyQomFXdS5mzXWeeFizmvpRoiNiyHvi",
  "key44": "3yvCguBmLkHak7fTAUZjwCCvRqRLsuR5VF9iy636jJb4DdAyYGSdjFpQj1j3ktU7CnTcPEZM7vGbQpVBBmdD4g2e",
  "key45": "5k9ywKWjhpfKXEYysfwEck57gxHPrqWMWjEk7bVSbDVH1GFhErb6yqE9E7umwdpNSTHPYkFH6cBFb4oNgYyQNWCP",
  "key46": "2wR5fWyejFj2QMGcvN9sS7ArjBP8wX7LAE32MNLuF8hb6qAZJvGFBppFtCwj3DS24iMdBrww2bpwESws9sj9XsQz"
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
