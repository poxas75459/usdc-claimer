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
    "2n21QRP2i8GQvT5337THEqqtcPmCewvyEkD4C8RGvjVCscb8JseAQVMyv8UEGbjAZWunu6iAECT3v2BxmpRx6wFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMVFsRtnajk4ZtNiZbkaUtvFvGZL8u9Z4AEYP2hxUhGnuY4m4QAmsfffi6VVYTmiEuKsUqUgjvryKFEej5toVBH",
  "key1": "4kBqco59bvd2X2WwWocPtmRbG9jzPreYcJ8bkKz4VCVxdvKWiK8bL4o6LZoNjeXzjVH73dy2WEiDNQrsNqgzNgUg",
  "key2": "5Anpp1eCdyGB9qXswGWUSEX8xsAVoKBLRc5y1WSntYftNfiTWgrHZD2SHe7CSCnDdV3RXM22hT1ALfyLgbHLoZsC",
  "key3": "32ijrDg6uJ2qNS48VXQHMuEdPDDxavMj1f9k5CfVHgJyzxD3JQgeNbxX1Ny3fDqEiSD9Md8tiQc82vEum3wu2Tb2",
  "key4": "FX2h3aXwb66MTfsPNBSwoSY4fgpQwcwUHQZGmwBL84vzJmStakaT9KkewkxS3zZJKkc86tvukLFWtUXv4iHGcWT",
  "key5": "27eS8efxwpEoXxMFei4tKvduRodUjQsQBPvzvDZh5D7CjRs7bceazEiHD65fdvNe1cJDipstMUktekMv5VdyaM5C",
  "key6": "2uXoS6ccVZ2c1ieKtcqk746kVQR8zaiosCwrCPfHsN3sB3qj2Brd5aSPw2ej2Z1U3QqaAw53iidrejbMrrtGTnPP",
  "key7": "2Vz2trKaqHzUjjkRGnU6iPfWjnyxa9DotjET2no3emkj2jiM7xsXkoGH7ShocdB4svYzoScUSJwAwV33kXJTigHy",
  "key8": "PmZaVHFqAHxq7PaL58wVXwMjNV9v21dnv4EVnd1oQ4CNTUbt9SiZPPfjqteHqjqK1ykc2eKcbKHk3XkiyJi8q6t",
  "key9": "KhVvoFGJHAxPQF2hfCgJpkBvE1mxx5FtmQX7VEecFKJMsFJB37fznq7GSkhy6cjjvwRxdHdhb6geQP32bsK61qL",
  "key10": "3pxztDhnZZH3v44vHKyMguWRtB6sKxynpsfjbZkt38ocefS56gEF68MqcvYWLryKhJxF4whXDRxDvNoSChKPg4Ee",
  "key11": "2EVdNtKztHKoL2Dwnchr6EqgqQVfCtPcS7DDae3oh2eoViX9FWPRAUXUbFkUVdjxsHaay7uatgPdjgNjYuUxyiPr",
  "key12": "5JW5WGhpdqj2GHu8PzruceqqGHsEWFrU39S86RACUyYCBDrNkQiEC5ChFRS3ig1Hu8GHnRPqktLMbecdwY9omDrN",
  "key13": "2dqEU823ZkyetM7xfJRsgnDVRRq2TEMwqA7WHFAKfANF1tCVAFvnEs4KPg9RbRyQiW3ohZtgkuMXDn83Ric6HAo",
  "key14": "4AnuqxjSY2gjyaxFxWuatTdPYXcom39dutZRcUDok3KyH5B5cgLrTtUsRXCLkGPv1k18xgWEHbQT4Yph4KsFM4kX",
  "key15": "3u8QxmEFoE5QH5A18XSo1jhPaUH3L8XQp93sFdNMAbzzJr4TQfdxw3bQiDSg3YrEeS1ttbtaccU5Z7xRZ6CjM3xi",
  "key16": "5ZxG1ZmXSMysrTi58rBsUyV7SyPXFPcJTRYc45bGJVfqPGs6m7BbKNxmnYJotbCvYGP2xDi9FrHjgZVC13kL9Q61",
  "key17": "3RD3LqMvX7KUyu1bRBR1AmoUBvSyk51CpRrADF2necjA6T3mCZqv5rxz9rkGx7fGT6LeCuEeAWMpCt8H4K1VQZAn",
  "key18": "DjEWs3rDhuF4snNzFJ4GvoSDcUXmHHHCyJGwkg3XFcQz2DLzn1x5i1MfCvUrfZhRon5ySrDTL7KYoGStfxHzcFG",
  "key19": "2UqUhjY4hScx6k2NEs2Lq3SCbTnVRE8HL2fefed363GcBcBBoixhMp1VnWCwHy9tq5Tbuzz5SogJL1zjt9JVNHQ7",
  "key20": "45nRQtr6C9o3PWcR1q2RfAggwhb8vL5wEEtJ87n4FNCKjeujKTGhQhaGEFDkwbJryc6bwY2PCMPvk6QhUZkyigaS",
  "key21": "37uZXk2Wm1eh2RvYEUC4eSucdanV8n9iZrUvcY1xHcd3a1mL2UU4ZoV8jx2b9cMytfby6p2XdxYH9eWYXQpT41am",
  "key22": "5niq5uBseaRKdLhrtHTgqJKDbk68uL389wMWhxCV4MVD5xrPqmy6q4ofeztFH4C1WRD1KLEJAYB4gx8FrAn3vuf",
  "key23": "4VmdeRbextLpxYfg2EhSk5iNNZ5rca9tEHp87331b9n4AmPNChSGE6dd1AQgjTshj87PQc6FavHRCAzmPEztkSTf",
  "key24": "4cNiu8YwKciV2gSRFSKSyb4E5pFRS8vBt3gFCZYeNCoTjkJE9RtkPGcRFfZwiYNWGLTTu6MBFqQjkqV9Ur9X2gQ",
  "key25": "41VHWtjjigvP5YiAPexEeFZ33kgssTF8fWnDmuPpgB4rtAa261bcfE72UQg3VvsPzWdoTL8RvhrtNQBv27UYT4hd",
  "key26": "2zSksSM35bQYp22t7wyJgUjHxw8sTWVLYnyR1ZYXbYdu25L3Hy1Nv3faYzzumTTN6DtmVqiGW9AZPspruE61uvim",
  "key27": "4Xn7m4ymi7HCSu481YZbkyCyp1N9izLyfkJ75n6aPr637FdvKAJp3aRGMmYBwwVPMecN7EY8xyZ9G8PqNbFdED8j",
  "key28": "5Jt1m4TEkwznidSKpi8VQLGM3jfHmNEhtxHp6VxnL8rnCgDtjgrjnW7HXYMCM5g18WShLyhNWY5xHk188jJHzjRB",
  "key29": "3XAhUFwTEGioBByW81jE6LiisZ4KAvCX6koyCXkwJhWW1cu5giVHgPRd9W77cGHNrtFYZAduzcTuqin8qEKWVyo",
  "key30": "5iRBGx6G28QAa69NoLQBYRMfoax2YtRD9nkocMXXxpXnmJdh5pQARCnGgHzncK3pQrsTnUcgjumtJFN4hHXgybtz",
  "key31": "4YnYUqa83PKEyUGfCPgSSKTycjAnq6cbdyq4PqkuiHSEe8NMUmYeEDY4LKoiATMfszyQLbipCG6FkAoaTMe5af8Z",
  "key32": "3g7C7qbRBR312wY3YDXjdN4UCKbRtfs9Qjx2gXMsKnbGRMs4XRdauWPhjrWbfZqtHSoAS4zRoDqGbC5rAPMTxipy",
  "key33": "3h4GWWTFZNaHWkMy6rfUasN8bucJafFAEMcViJ9kbPJCYUtFQMFJ1DVdSm6smV2MiNPUbHLj6WUNev2UoiE7fKS",
  "key34": "3Vt4iQaRkDnpczdReMj284211cpDdHdbSCYiPSHXswWf5xD1wfFcLopsmPaReaGNEcunJN7HQmpRxBv1BQdqg5Dj",
  "key35": "PQf7oymsq27MjfP4jHVeajGjai1yeBiFTettF5SB7N2GdDZszFMQfcsHjkAcyUSp4PtUV3QFCdrUUskFxH1bXJa",
  "key36": "5NacXpyi7LB2KRLC5N62gTh9gr9E1Ddipy9KF2CHTD7bDa4qqFd1gySkX7qJhpGShJkh9xWnXbPNmSeYfGAtuk5M",
  "key37": "4tPnzGGeKfodyoTQCNP4KaPsFyJNg5C828GQsEDhN9W5b78ePb7yicJPBTc5h6nj2SoMtgHBXoEMmtVe6u6ejkBe",
  "key38": "zBKgkX54MuPpmzP9Jwekzn4cH39qsBv78SLQNGV9cAMnW6qpfN2oJWttH5swdyQDRxtFfv4Vw6cK8QmTb4QSR1w"
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
