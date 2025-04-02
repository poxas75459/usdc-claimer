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
    "2FhDCTW6oYeks1C1BocZc4hoCHNHAs1CgqXpk3kHHgrtN8Tc94u9aeqmfwV3RgVxqdEJ2BmyuMJLsjXTqW3E49W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7S5Pj1TVszHPFZAdTr8tQ8uQwGJsteJy6meQJebxqVyUb43sUo7xW8wWww2KLzmqwvitMMniYvUsu2YYYSaA5b",
  "key1": "66ZQT5DaeckjXDonunzkySMrUY7TfkddXFuUxG5FUSzJuPRhAfUTgd6BMWv7Pxbr5eY7NWYzDANgEvBeT3KRANXP",
  "key2": "tLKj9qaK4TtM4Rtbp5z2VgTVA7sCWJ1rhkHJwBW96Zk1sRsJrpHTPa6vt6FtYiBZwYkniKQVNN422u9CAda9xF4",
  "key3": "3dmAA3XF2DnyyPgVVYwFw76ahAJPUxxeN7K2YjpsybPpPFEngZqq6GM1H1sKqP5CBzWQZWNg7qD4SNBuuPXfeaQZ",
  "key4": "38JDLVvrYKL5PE9VJqmfLhDGfokpRNiFWJTPPDGVPSEucpMd6MrnMTRLM1w8Cc2AHPh77Uf726ctANBPiR7hEDTJ",
  "key5": "5CUAm9qFERvzRKiaktSPCw4aeu88EgDvRjTAjrRK65t5xzfdmpJgCgSonyW8upsNyid3152vinBZXpQfJK7audEw",
  "key6": "5R218cz2QdodN9Qfvjch3ymUuJ7caAGDu8p4ZxjSjXM6XjXpdPiN41DDJS8onbFdCrSNF96spWUuJXE1x1Abuo1Q",
  "key7": "V2CJmMLQ7Ept4YxaMK7x1ENYGLxbLSuHZw3kXGJdPHx3PyL3YZgnDKH7HKAEgvNDubJ5zb8dsSVnSYMsTHrwsqa",
  "key8": "5MhXZ99XC7TCztcNEquDiyL6rzPGLjRYVBjVXQRuR22BoyBrGYC6N9DhiQcPTJu5geqHcpbtAmHCiXzjhcTguE5p",
  "key9": "5wmocXuVm4Z8sNpTWfbRRJY2UkrBGFeyzvRDFJgf3k6om3fJvdDarHH86VaD12wwU5CqKebKw9QCaS8vyPnPHvoi",
  "key10": "6y8Tc4QNHXB3ujdBKepPkF2L8vckVjpiHMpKc3bVGMMcsvK4pRUKySFwbmZakFkA6Q7Qx2SwfGnST4N7NwwqTzi",
  "key11": "5NGFcCVTh1x8DBiuUanNH6YdEsvXmqdoAcqnjo3hKbMcyvstaLcxGqWEuu6Dj9He2PdEugW7i57yWUSwnopaouEV",
  "key12": "yzhGFm8n8wcnv9K65VfqYSqe4hS7yXqPVQQ1grKCsa8SFnyw35RTzCymxE78jcJ3tQRfUTHiu9dCvZjoxi1c3pi",
  "key13": "26bPgN5edRJ6aLfqmWovxcXoDgHnRehtJYpTwcySgbCtVew5CP7MdoNKvE7cQeAkhavxoBdpAAskPFs66UHPD4g3",
  "key14": "46secfn6r8dV8mJbq5593YMYt9NN7y16dGucPSWRGiJeBsYj7MyHkpgiXXBhZq2LbvGGPqFD9Phb9wLRsiGUCndB",
  "key15": "58xq6Jycty5Qg84NrseM5dzj8DyxVZWVe55rh3xift6PuBM1ikfW23ZWBSGRLhxiWMyJnhLkyTWQQnZnu2iQCJTo",
  "key16": "4wbqksXNBQLQ8VSwLQBzbFGA4zcfg1RdJgMg7n6bcwCQvu1Q7htmvFUq5bAUfEwqf9XpyhoAemgqbH6RXmMD4aFz",
  "key17": "5zdvURkvGeM7uaKfCd7JkQWd3K4t4r8wgb19SvLacYXPAFqzU1p7ph1e2MCeyBwxaiCR7ZYbtnqNREdvTNRLvTVw",
  "key18": "53owm4BBVnkYyBWa4asX4WQXDdnZLkksey136CvGABCVJ36JfELaNzaG73VQ21sVUm2R2TWJ57o9fqzqfLGuVVx6",
  "key19": "3pn5hUhkeFWZ9RUtKxbYtYnqyR2xAMMyY3PaiUgRTX4pzqnnKXocuQ57ZSXzKpwwkDyMYFkJBVQV98BcGVNGijEA",
  "key20": "4gkt1McrPanhNukZ8DYk5uqtwCKSr8tm5MjxH76atMA5yHtz1B2i6s9VV18HRc9XANsXkNoRkQuH5SWHLGzp5nsZ",
  "key21": "udDSKqkHS3UGPucPp84PXCTbiZJYgKQjMxBtHZMwL2WR9emurnLsdCdANTNYuajQ9BPHxhTg6D1a2cAT5AGo2Hr",
  "key22": "9oFtfnEHmwrq3wSdZy68ueXHMJqaEzQasUAQBmsNU8EDVvvGEBRWGecpwUHfq1dPs7zE8kKeJPV2AoSfWGaytEu",
  "key23": "5PNNYSE52Lg1fUvW7UWAZcjTTfRRYumyCnMByMC6U2wshZDckNenGfiqc8VMCPMXk2AotKkpKdQqVLYcMM8iMnfw",
  "key24": "5JSFd4JiuxpihyxJh1BRMYaBzx3qgVSYcbpf6QZiaoUdNJZmLDK31dU79j5xBkoLJ5jJDqhVaKv42qoj2df6g6N6",
  "key25": "2mypWhDMGTYPeNWcCGgGNh3B54xFsAupbSJ43RUZBvxPPN7aFnjbs31vi1av9kzLVpoXRAfyvpMfKSvU8JNdk3di",
  "key26": "TXCnpUCHJmYdx3Wya18bM8ihZAEZsrVe23JaRa53FCkSpgEhyN58hFuPFzf8sT3rhfhyPKEJL3jbuaBVht8jq9i",
  "key27": "NKekDsp4PfFbVkuTyMNuaq4XqV5URX6WwVKypbeN1hpt2HQ562ckKGU8GLc4LCHEPXG58A2AMUjKpA7PUjnRZzW",
  "key28": "4wvLKyoCTmo2LvdUM6U2NfuG8SaJJnYP14k1ioafywAvkDi9yasYk7mjfCUtf3NorLhjhhvDfEu7QA2sL7eiff8b",
  "key29": "3pbMyNUMGsdYjPQYKaFw1a343MQQFoaSYckjr1i2r11UfP5W3Gwb4AUNxZjKSFJYihW1ft2hKDBiBXg3S1ck12uZ",
  "key30": "3uWrQ3PLUsQubpP1eJxypV3stA52gx7hgj3r143JpMHBxtCmefMVYPGWyRUfx7wsF3k11TAZecRLhdkY7nWN5ZoS",
  "key31": "KjNgmJPvR27cQmCwWUNpRmcf5CdTGvi7cvrqEV9Gza26ExRxhwbjyoHruFdq8AkYQ3Wj7zZvRc3Uk1r3oSKUqYm",
  "key32": "enfZPV9YaP4CP5PS2ZhavdoczuGFTsX6gESYSkzDhJoztAXm23ihWwdHo6fjsEpiZ3ubPFYEbswvdsGsxVpSgDp",
  "key33": "5uAsnwM5tw2CoYbr61JR15Tipg4Ax2oXYNjHJREWv8JcSz7AaToqx2SdTT6UbBTpP3y1xYn9XizkyRhiBnNBkCko",
  "key34": "5kgPMaQSCr3AqAiY28QJQRgNkzMYgE3Zj4Nq6zjA4puY3t13wpQt24at5gP3VLnWSd1Tuvio9UkVPstRtX6Bz7A6"
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
