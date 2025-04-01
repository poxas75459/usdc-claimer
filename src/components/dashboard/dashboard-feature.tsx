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
    "2naUfn8ZTJLccvs73kvxgWB1zGZUYA2SAPy54PAkrLSuNUocgMJntMULhQeUGMnmjUz5Exbr1TgV8xQg954F2QJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7gs9gZxwqw5djuR8pkBFnV4URJ2XMSD1Bvn3XAivbYe2U4LuTjD8x4iHonqP5GaWfs6QqUW3qzkwUPXabKEvDH",
  "key1": "4BecTNAexnYdK29QPcz3nNsNKHcVupszjrhwipbymU8FmHzydUWrzDchQCbVuChTPFmcScSKBHGbjbcMupzgdh5h",
  "key2": "xCZxx554cy1MDfRFSJQA22YHRTbKMKQRkbP5hKwHVkYSB3r47c4V9NvN8QqutpocNnM68EW1aN8BweXshAp9PYJ",
  "key3": "it1cB53iRcEhjPVeb26sti3YnuWZuXcqe1SpuCzHmEoRvdCCMETCT536gD4ssvarNZ6C5J8CZQNzZoTN9VDn3jo",
  "key4": "2zFftJzZURWnjh9t6g79ibxdKY2XWrhdfMzGJLgCjbhwuVoU8atbkuuY1FHxHVEQ377TCCHGAhURGXdJ644y3ieY",
  "key5": "2KjrpNUBTegFJCR98iQJj7AiY4vMRRqABBGCEu86jRgfEYXhtuyUoUpMkRVbhAiZQUWZCJMyZtV5vhY2zuKf24k7",
  "key6": "4JtQN7JiGqCeQT1qMRxWGkA6rfg4amfUt8M4kzixtNGTLcTV8b2SAhYmZuE1xEzqUsYKiAHuEvMZskBgSnV2P5H2",
  "key7": "47xUAB34pafRS8ZNVZ1cUnn2UPEXSPT49CE6UkFiTxGBvGxhc3dzq7ZwW8QBeFU7vqW3nHF5C1DwvETZPNAQUBE",
  "key8": "3o43YerL63qGfssQJ3utRikrwUsz2ST6WvA1UwGdPzAoCN5B4neab3goB48nZqbii7odD2cuQfBR9D5V9V7nPF17",
  "key9": "27nGrbAAGMcCMsyw4HaJVw9ukEXVoTGRxS8Pw6q49xdZBSkSGZDh946f7FQV2aDPJpDVXLAQF2BdbtSsby1K314P",
  "key10": "5ZNXx8Q5Zpz6ryo6a59zLiizEGLQ5hLN9XFnmtLMcTZ2p2ZN4MMevdqStmrLtET1u7njxs7SAVKASMxXcFzyhZHF",
  "key11": "3NDHYHoXgDQHPJf9co3AAEAJ2T54AMJRzrMx4cAK51vzmaQofn1axoHWAxQvW8JsYNzs5MzLDAAuLwYFWM89rhnv",
  "key12": "5M98EGyExAzPvmsgAxPKKqTXCZa5r2xKVJKQ5J6An9ey1cTRAYqfqgyeHbUVgSFmDVMm5Gj1GRB7PMMD2rcxpksg",
  "key13": "2oevQrMXUrNTTuesrAtWcnyXjbU7Vn3xiWdS6N1XNMMJghZ3op6gQV8mHEnLbpjFJdTqiqMvigMpmzHU6dxoe7RW",
  "key14": "6739TybuwRazkDK1MwiDaxdqvZAv8jzWQbdTJZ3E9fEbD18fQ7KJC7Q6Y4S7CSxv9xEP1bCcgkVPHskt3Uurftf7",
  "key15": "4ep4QbcXFh5WAwuazbtoBS47e9meynJsJziyxtRfRTvC3VajBiduWyzqwWka5QJNCJGbATg92AbTsZXG3CuJs1q2",
  "key16": "4G6JktZfUTDQgxWrhoX5sdq21paEhvaeGYKkBReg7RNsqrXzvqP4FdVvWcp9m2hnAGmCgpgk1bFfA6EBTJzKmYsc",
  "key17": "3L1UnUPkwEKiLkCtpFEFn2CQLsbBHn6zJV4qGR2rdsnkVDZ4M5Z9z29Q135NgJAydSXFYLpeHYqAyVYip1E8dz8Q",
  "key18": "4Rn3iARz3vWWzgtgn6rP7PCtf4UBeCwuHfP5oqHqU2KKMERoKnJTTS3HZknEf8AAbbf3FHwRrYTSrzaYMAEinb6c",
  "key19": "4aAdvyUEc5rLGRrs8cCKYm1ZXzK974CqJMbriGXBS96nNyF9rcBXM2UD9vkiGNT3X3Jfvv349CiR3upeBJuTC4tv",
  "key20": "2sE7qtrv1v63Tbg8kdHFZxLx2sAsYzXh6Z6kVGNnRvv74AxzqS9tCj2rELHMu353HdXXL9XDaSe6GSRqBxFuXqKZ",
  "key21": "5YyLMJ5mCMnsv7wqdxhEeob9UgPsqgW835vjHJ5ekQF7QVGMgKdxqGB2uZW56gn1VGsrjVj5fC6SekU2DHBmMjn2",
  "key22": "5q9E2CDY3CD4ePu6yvFajd37B67jumMNkN8xvxKgR7QLnKbDJLBG2CDi6RPh8bseriaNSHJLTHTtm88rQw1ub8Bh",
  "key23": "5ckZMZAqu48gBRdMEfrbhCUuA5qkBu2Ndfa8XqVHpsUrfCBtQKVaegP4sb8kAtCQDVciNiDGc9cjzjCygKTvXzQd",
  "key24": "5YZMXx6gbjYcyUJ964bo5o5HsvuDDbiGPxhr5L5oFkvJGELW6C7U73FSsLfSH7Dunx59UyATDqZihd4tP7sy9GFw",
  "key25": "3TFBjEHEweEKDg1jpyodE1UV2ZPfe2NXEMuHaXZVwQv8kRx5rZsuuu64bU7KDjRPLKi12cNHrNqNCHZwfkGQfuub",
  "key26": "4cYHrnadP5tjTy1Vq1regVAYgG6ejsrNGfr7B94Hg8DtmZk7LzPmJtQ29ipkHyKgP8YYocL9uAsyt6J4ux5aQhDa",
  "key27": "3F6AmF5SV9fG5wxZf8mJhmeKyLbHDWVDFrXH6jZ7x7ue9baar5FjxxxaaKmHL3eSbWWkEofD4uAwmVTnyVRLMbSG",
  "key28": "4TkDw9yphsY8kK4kuCAod9jk8EWsbsFfSkiZUqCTk9RRgBWcT2W1BzZf5sCKUnL83iQfkURJwS4v6bfna4MEYPz5",
  "key29": "45CVNpScvtRNP5BQsDwD4fA6uFxVbiJCnwfc2qzPAphmtQHR32SSXWr9uiWVGvHY2co39SNkk5BV7V23zgWZF59U",
  "key30": "2SoD8qivW41wwqXQwJA5Xb7ZrbBofZSJji8knrHD5yQMXuvyAfSPzgAi2Yw89CUriLfmbB63UdxA1HhxNENf2Usp",
  "key31": "5AAnV4sxJVqCWTRQmiDkasRY4Zxxn7xqUJ4oSXsu3jYcDtKr8L9JCVmjpvBN7NJtGkswq77goLRtZfB1pgqdficN",
  "key32": "3e1c6hkCs4DKLXMsfQ6bPrcYg2rLsnVsH8eSk4U7iV8L7Bgf4mjMDZVKZYg1hshNEctEXtbnEpXf5RDhacX5eYW9"
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
