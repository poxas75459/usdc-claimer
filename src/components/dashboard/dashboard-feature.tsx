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
    "3mCDTPRo6HCA7rH6c9N1gqMYFqn4qjQQiN1B9xLhskJ2x2X5aALjEpivbyUmac5NKG3nNVi8pGEct7c2EP5F217x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aw3S63rckAn9LU17Jo6RPZPVC5iaMVE99ohHUsMaE1nJzzLegMuHovnUvppmdvMij3WVG63LYh7oqwRJgp4x8hy",
  "key1": "48XoSbshWrrBPmugMZe6PjJf4zmiW2xE3SXMTtp58Ws5PizKn2e5Dij8Fpns4pb6KD7BRmJZYTZe8vnW5Y3DLiU8",
  "key2": "4sDViFtEESZ8TpQtDC6sU5jv2nGkiR5wmoTbqAjZz4xJoVGWUH4fZ3b5T4SUSox8xfY4FtPX2ahULdKnSZtyXjUU",
  "key3": "2YN89F1Rrdxa9P6jNEnw9cgDngyrk3gBevK5BGi7QXZcnvRJAiE9Ezc1VbCuQiVpKStHxHCWkZiaE6iMp9GFdcv",
  "key4": "5wv56zGSxXafvm4GVMELutUJifrPaLpihA1paUVEv6vfufRqnZuTGZ7dBmFBeNfy5EvVa7249yEgBw9LEXSwgSWR",
  "key5": "3naeaQUJrU7ZCArcKCyQAShwyZq2KYSHyUqa4brBiRk2C2jRs1cKjC1xUZy4JFaSUUUVevmGZFwiPyoj247WfTmp",
  "key6": "67o21ya6USfnTunG1jiCGcutUxvnyZubKs8pGvQMjbUmtfaQ9sFJ5aUZAJBtPbWh7FaQSGvZTDp4GmJR2v9bVYHv",
  "key7": "QxqgSnaabTXLufN3V6qeaJffytGP9HfDCuYKtFxJfxqutSz8GddMauDmgNLJL5XdnepupgcZ4tmArX7wLUQz9ZY",
  "key8": "26byba7wiYyNg1XrCmjq5FT331gNxajMzsboUCmnBiUpwYH3rb54BZuKK3ELHFHEBvjEmxru38ZvTUzvUZfqE7Ke",
  "key9": "DyGJU5MhxQyRxYYeLsjGpXfG8Df4CbmKoqinuXJbhuVu2LkuBjd3EbzZ4z1qp4yEV2tAqjjJR2NKVQCcQgEzdkv",
  "key10": "2SKRjSeTdKS93Rqw4Fcw123aiKMNZh7MfLEnevpGunMyfkM5Zdo7yknrLGan4H5r9dKnZ9uREmPK6yQ4TTjEceUb",
  "key11": "5k5R9B9kUW5bjWLtjYTZaByHMC9LLGkx6x3dsYbAWmRoitikNBkTWqa4NWSAar5HQs3dV8UHQQTAphkBL1SWJNWj",
  "key12": "5kcCcQX7WrwwoAii2Jm7nZRgAbfb1Mb3GNxahADp1EFxa8534RPKPPBjgbRaeTdeyaDXmuvcSqe2cJRQnVoPCAd3",
  "key13": "5m8G6hEvq54AjKVFb5hTrS8h2UVZm179SeLAeAddgcLBvMndzHQuDQf1JCWXxr7dYjYfKzKVwxUGyjxwVq9nTMKv",
  "key14": "4TizKtHWyDRcHdFkmqzoUGGG2nof7aYinquYw7j5FVUaw9sw1FLiCQt5iEH44HTpkSK6n97FmWBdrJ3XUNm4kgkE",
  "key15": "2numoYBnZ3viqJreTJcA5Zmn3ijqQLnUo2QVut4VjCz9BtUcwghjCooSVLbBjPEJL1HP3ZvzJKzFMkzGinhaoC49",
  "key16": "QhVXRSJrzhiZaSXXDREmbSb5oaiBB927zYdd5QKHHrMuUy7ccDAD9ZXDcazJPLNcx49dhypeP4Xnw5xe6EaQhNd",
  "key17": "6MrqxnnYvoXicrnm4ix3cjmm1and5ev292cyMWcnM5qJ9pdGKEr3Ans4KoaGtYh2xgurNYJHNR6FUU2Dj95Usaq",
  "key18": "4JnokSbT71sPBXPBMG41wgswL8jfz66YdrqdHcEFFbhSm2Z6FfJkRMWtrCShmuNZ2bafQWkS4ZaLCxVTFfwoYuCY",
  "key19": "h44TJFcbVP2i7MnsNoLoQ62gk2KbiQPre8EqYJZfmissJ64G9FrTiXiRJepAMKp2NQUasfGCsCp8bVqmu3WtQin",
  "key20": "5oVcdnBCkzUPev4TT2XrxkYQpyAtf1UTWbxd3TLTBpw24NfzB1mxKoXbvEoJVd44esV4hx9Qs1ddx2G36ZffEZk7",
  "key21": "56KiavJ5N5pktgSxNfG5RX5mnrKiPDFoKE32QqMQvkLQiDB9cxijJY7B2v2JsQsuRb7VNGS6wuVMiuZNy674LiPf",
  "key22": "4dxayThXtnVEwKcFp8GGxTzhUFkaDi2TuARUUih4kAfKGXo8tenFvbnczwxmceVNPD2192hgG4uvCgfDa62ftZ8w",
  "key23": "24pLfp5GtpEwcJvF33hU1nWEFN8bd5zd4SUKSNgSDR4wrjxxtGsfC4jk38roQUx5EzWTZiFnF51zg6RhAL2zHCQx",
  "key24": "2iYYX4fKfGjJt4W3ZnYk4nRtEQPEpebnvNgfU7DTTNFkh1J15jBCSFBP87ZgbQEWYDcPwJx3yF7AUUQ2JyLqhX7w",
  "key25": "62SywHnMEPRzqB7Yj2XiNQBF19Wjw4A4Q9ARW1TYiBJbRkGDea3HKPoStKHihsX8cctmnLKdsvoQQt3PWvTVcWku",
  "key26": "xLsP5fYREEcHGUhgLwPABYtr7AeFATfdmz7AjxPCocUhTpCbVk8ZHDDbspfPMEYERSP9vdBZ2VAfeCK4ciNu9ok",
  "key27": "4uMBg1EdDfYBLh8HD8nGZPN82nxkGdaxpTbGetEQJ5fcz3onriHih3RmicuAVHewALBYXFfC7Z54b7gjeAHZBgrv",
  "key28": "PyZeEEottAs6khY1QLW9iotKtFXg4p2wLVzd7hCJv8wBP77d6hE9DrowTBQ1QPci19TFSzxAUj7huNyoqGpf1s3",
  "key29": "2BjBWiiTLEjr5C5sgyH92KzaHJjhgDx84rG2mCe86h8i7Wxb2SJxkoUraZXpUmuzBxXeTkSwoZDLepQA3j5hk2ye"
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
