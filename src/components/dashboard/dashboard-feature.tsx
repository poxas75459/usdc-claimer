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
    "35fXyr6Ngnce5B94HgWBg7cpVg8cQiGMmn3np52xYTDrJQHBYFG8vwB2e6iWzgPpLD1iFcaJmZQvEXSfSNQudS1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vh9PeoYg3c46kp1TaP6NEB2Xur8TKmXNDWMtemPEUctvCY2UpCo1JgUxGeAYXLamazA63LJxMKKDv1ZVMQ4F5pn",
  "key1": "47rCqzWaC6wqVPQCELzWovsPu1rp7TuBpoDR4PwYYoAv8aToEPu3LhG1V7wu48zCwxX5eMcom9LjJdntqJ57UQGu",
  "key2": "3G9583hCRBRJ8tMXWhjKMJgKru5aM5k4wrzY6kkTZvvzFcnDqBtBRhREwrJ61MBtPR7xs8jgLzUC4RtY7m86cvQu",
  "key3": "4NAWZ3auSnkM3vhrGEo3XGELP6JMoSejQwaERJhATpFsnLa8KR8LCYxGkGJWbcLfJQuAjVWcSsnG2WbSzqhGee4m",
  "key4": "2Q1y6GaGL4qrGduwBVHqTxJd4UEE1jyfBH5JkZXM7rhixEUBYuAReoYwtNyEySbA1HPL6qh3ea5bXzhGMVvW26ek",
  "key5": "3oL9Y4L7P6XL692Fe1PHJ5pHBzzLy54u4WKomKFPtMzNvfzMMiYjPDSHqxtmYV2rLoCrT1W8W8vg1GAua8GNC8TJ",
  "key6": "BScGz8YcH9WgcdX46KtHYLuw7z8Ur3PxXLMyRfdyWsqUjnQTj7DJr3nz2koaCJ9LzriXEGAioLreMK42jqPTgoD",
  "key7": "4XtYKZaD9kUJxS2bkSj1MQJwcVYWw4NPAq2uwAvMDtSxkEG19VLGDntaBv181opxqViqNFegUcMf7GjNgtNcjoFm",
  "key8": "4XC4f7pyGAsW81ErpDG53fjjH1jUj1jNTxniN5LmT3xogr2PQEsiPtDt1957LuFZSuJ7qy6FJjjFu9jntGmxsezi",
  "key9": "2uEReyksE9J69ccXSjHUwrRSrNvFFptdB9MvqHtnzoheUUEuqJ6jQjbVhdrC8jvdAELPC9V2oLvjWHe2q3VRxbri",
  "key10": "4srt4jvz6E13D3MnNBgUaAMh8pmg2zRneQmeDrijVbH75FyvyK3hQpiJHh5FnsbQLWCTZY7NBKVysLVoHRtwXPYu",
  "key11": "3NYeuanRsC7xfi3E4dRtEbV57KA2yA6dEgi5QdBp2FMN6Zv9nW9bwKjJBvkcu6Usfr4yCAgwcPugEuN7wS1qd12b",
  "key12": "4WsryouXT6P5KAMjb4PNEp8pxQcqdShumRHb5Y5D4qZsgRr7YCPUJEChxGDc1Ec6iwgnkLepVARQt5HpSYspkPf",
  "key13": "5e97KdcQecpELDVko1YqwtWKjJ47vRzsb3MmCR86trYUrnipe2fmYUKzadCnsc4UVUciM8SpDtYQsTifPq3hnr3h",
  "key14": "2TgCAh45FXJKQgb68hzxf2kRFpHmzxcrQDcSh6BwUqjJy58Dq17ad3yMzgFdw6Xxk3LSE427qXMo9Ywx8UpS4k1o",
  "key15": "4aoruFRCSv7LcEiCXexr8d8ETHtAa75gFCZtXKgJtZAMB4pSKhw3YiTLtWsnJ8M55eSpADuX2gEX4oe2TEXuYoPR",
  "key16": "24RNJfXWwNvMv8WoAp2JzN94GxaPtTNYqWLYSxRv7cC3kfXCgXY88TmY77i8VPkbr94P6bg7yFerz4gezmBZ5DZd",
  "key17": "5kn8FD6J58tEZzQdBVLM9Nv9yVQ71eucapv9CeNCaasyEhwXBVC3yng79xMVW2touyd4CRaBk4QGPBhhHQZaX95m",
  "key18": "4aC4VFp1UMnWZtXr726mCMu4muMSzULjarW88GPWYHD8w29cNVmTrBPYmofdyfHsBCCr7qf1arwMxrT3DXfKzcjG",
  "key19": "cNvSgP2EbuURvpBi9Y8EDvcnJZwxGx8apbb4zPh4TwUfB8XoJB1eFN8avvpCsteumexLq137WjSKZgeZzoBZFMC",
  "key20": "5JngkCphEnGfFAoUZcwd5Vgg46FaeiMSr32XjWtL9eYoq3JwszaVheJTiqVGCiPyTkZogmYucFoZYGrfZG56UrUv",
  "key21": "3mMrKzR4G6N5fEWMSVGSM5xei9GBTHUATCKbBEvFvALupLjBhtXc9Y75fSw9CcLAzt3TMa7i9L1rjXEBaNFAKLPz",
  "key22": "3hnrSSvc11mGmSitJ41bPeeQio5o8kZKiTXLM7oYYA1h5QUtYFKpnUmxukLXhuU81gAnRnKq2bE7VCNocNLNQyhf",
  "key23": "5c8ApAbb5qQ2UvWsxf5md1DfpkjKg3GJSeHz4nBQ5oHWmfFeTAnVQxm6ACTRY1eJUGVbnpzjS7ByzH8pF8AqLQPo",
  "key24": "KvBGhxeZGZUYP6hYUbAqbkBqBsmZfje39zZ1bxWsfkcox6CXimWeaeQRoVfRzoz2aoFXxLuNS8Kutesddms9Vnp",
  "key25": "27jdBeJSir1u6fBwcZAqaUfdqvhdRpjouNxVQZaR9PMP1v1hHdrVhvjavix6wxM2g1HZXqkGFEhhCQMyrhQVY7nv",
  "key26": "7p7ZHKW7GsMLoDCGWrMHnYtZHdpHKmB1gCLm4hved5AfxSviBQP2CqEE7atxpYW3gRLvPVUaNf18RVenjqHBmuE",
  "key27": "4LvRyK57uAFpmWpBbjP92U1Dvm74TjmBPLtzSCVttir7CFwcf7ndpmWnet2B1cj1BdySbr19z8bxoZABQDjqTp7u",
  "key28": "5Q1FNkwCkZyCVrtQmpiZYa23cZDJi8KrywTcVeZ94hqy7T6KkK7LyxCtk68WwdPkWdEUpcd1724TtEm4ZCRfy9UH",
  "key29": "NHKGKTuB1rXDM5wNyz8yuzFpGMx2Fgf9RtN6a5gVdBH2kLqiemYSejdwViR81muZWSUuh27E5dWfWKq4QKXow46",
  "key30": "22FGeQwptYuHg1dWpdjMuh8xo3CXCqUgHqUiX9HACoVVNBCpHZBwLZgzadxJeTWfG6QMfwZsv83HwEvxyTkS8gKa",
  "key31": "65BUfSJTgkzeJzah6W4tCB4t885aJtxRu3oTEuqgriiavGJkBSZwGagd5fD63NMgF5aRPihBDTvzhsCvoko4atcx"
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
