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
    "5MiGbYBZMqNPwFbnogn5Lky3YFatGwmBk5NSuCy2DpLfzF4WTZV4gMinhA6Ygpuu9B1bK1uojetucJPnz18etsZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEZEqVRRU6s3sZ9FEdvXkVXGUq91opTPF7TuxhFoZmxC46CstJyvKuSBdbEsygT8zXMq4ALqrhzVLoZCGyDGeih",
  "key1": "2XrGM4sECbxNpdfn4Mp9ex7ViAkF6LBZfxM4EotXoaHz9zMoYcgDch6a86FUV31kq4GzWaPzqzbtH9rq2FaGeJBU",
  "key2": "UMBLS5UxJgrqrUgUfwKfaJpW5UFpxRT8sF69k46Vo6AcBf1ftmgpFgJKfANbCPLEhWNfmnmDvNeR9ihNFw4Jj4K",
  "key3": "2DXXdo46jP3HJN96nz2QK9LpevpG6MrWLhpNSRDnRb28bKNgvFQGKcYnqyFsBhomqMNG8J8ym1vve2tGc6jcBTq",
  "key4": "43GVN9AJkZcFwuZNiu87MS4HQtTcyBCyK8m5FrR2oVQmFaA6qUUKS5NPwkRZc81FDJdfHSs1aKurGAQSYjt6o42E",
  "key5": "2FVDZtNMg2Bgt7TJvy6NvsQeN3w8eSpAQtTY4WzJy8vtiCqYJmHMBRpSoNVzDsTbXM8csDAV9GdBuussFgShhrJ",
  "key6": "2H1p4jTLxzwCD8DuLvukXXsydzU2xcxeVHEFv5LnShqWAJPfmBNCjzXkwyuYPcDpsJQGvC1hYDnGhYFaGa6dJSZL",
  "key7": "H62VwNFkRtrU6Q1pScimLSaoBbkhJBzTs6HqnzpeNYgzPmzfrCr94J73fdgFJuRP5XDA1jR4Z58asZXAZkTDFHY",
  "key8": "88d5u8m7N7pUSDV3mE17nZQcogGdfNHHYJ1DUz1Zn3x6jbFkKT4z8wJP7SPojXzqeVGbL4JnAd5hmFmZ6dDKvRc",
  "key9": "2k1jdMKkSgvyzHz48TEKRP2E3vQ5VuJuJ7CE8UbYNaSevSVcuGJq4HQiRFvboQ1MMZzegaaWVtsLGyoPYnr2SqpY",
  "key10": "3VrnyjhE8JpKpShk1HFR4hcZJUmWz7dcVEDAMdh6CMyZrdXrY6CsfMiaooKyiUX3QdCn79GCFTpvTe9WV8gP1uEx",
  "key11": "4KK8RJLsBQPJYrKvA2FVJwp9tYNaDXTxyffUMAVtbLNiPYP1o4m8n2tDNttbBVBT2dXT4aBdmhm2LPzpj4b6kiVN",
  "key12": "35aLQVFGTvm4Frmudh9T9H6pBQDXYcnsTtFFE8JxUaunhT5jEw2w174NRTNZCdzUYMcDuyypjw7NLMKXjc1Qr6LH",
  "key13": "38EGCngQu5ZCXME6aUoD4DCbs1wwYrZkbCaQzjijvaxb6JmEbUtrXqPUpWV2zdFfg2KPeu6sZUhVQxbEpMX8msoJ",
  "key14": "3mP7PCSrPskYxmxQmbPijQpkaVDLtGN3GitC6q21XLiwqEybk3yJSFSNdiqD4cB5NAwJzvdqDkHJAGJt9vfapUqi",
  "key15": "3eLcSou7ob8hyVwbAQCVvb5BmRGqi7L1HtiXsFydSxrW4XAnTod6vMadN6uUbXyo3WprcXzSgs9jLJvuQxThB5Jg",
  "key16": "4VmsBadfGQgQB4JEq2wW3p1tuBfS2BiPUCBNtis1u3czvQKJkfvhBtqgTVkKjT8eQGQYX96vddhCC1BG7X1gXnwx",
  "key17": "3ntAfkswuoar1NJ39AALquauiPPdupjiM7KAFnbs7X2gVcawabhmv795aPxr41waCinfQNUNE6HuKXUrsL1unWYN",
  "key18": "35HpLBM3fV6UYxq5wVwtz9r4zyMM8MkSmqxeZfyAhHfWVVjiF1QUCJrNGw35vKHyiq3Yv6FnQAhethoMJwbcqZta",
  "key19": "2cnp4CQUJPpsHVs3uFM9BoNoa4TdLLGa3EWzunLSa5JXJHTTykRdLEQuSjYr9fMc5wh9Vfs3DW7ea9g51nyhL6Y5",
  "key20": "3MgFwqxE6zusrm2S2YbfoNzY76QDY3y7v4XRibo9FY6uZSrf4bWgU9pWvokdrthjfS6zc24ETNa4NTRTgqMjChCU",
  "key21": "2JnJD1ax2nDam39BBVLpsg7vZLjuDvay8FjV7zPrFnzAj8kT9U24pX7TwCfwMP4vokUP1xCCS7HCemY7jsRqkaNn",
  "key22": "2Tdi622sssKsxcJAoUW6Qidt2Pax9yZUNmxuuPwF4LTkv8wPs7xuGT6665CFWU1ZpVe6aAXBUGP5sdy6EadKgBMe",
  "key23": "5gn1bTKRKZx6LtAnP8Roth3JaMks4Chw4q4RUdfS1enBYC2ijrahhHFLr2jAH3M5XRXJTTAdCUkum9KcqB7XB7fZ",
  "key24": "3c9xVovuJpXbeY2oS4g6EaqqzQrpxxbmwDfR1yjLnZScA9cJUQD9K6eQwbKbQDxWamoWhHzUteYfu86obdz4vKS3",
  "key25": "2uPR51Nq37eUYgcZYK9CxrPSdA7zB79gegaXsERRGunUyLpjMjRcqoAtgNAxtARWM5a2v1k3vSr2D2fFYcfM2Y6U",
  "key26": "31usFuQJMEvNfq9PDmSAQCu2Xd2hD99emvqefF1FD5sQrTPLjLFDRZjTciEkgS21rtHryfJKEV4jDqCVWcuVqSCo",
  "key27": "5dgCQQ2jK3GGmvhdSBXbADU6uLMSRnm5zbaP7qiEXZvL4YqtMFeiwvUyB1BgDe6rSXrv2dAYpvEjUC58MKYzE7tD"
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
