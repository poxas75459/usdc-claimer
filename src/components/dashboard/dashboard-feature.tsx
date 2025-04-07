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
    "5wjbVKwxLf1nh2WmicxMwvvxHpXZMJWok9wzkN56zhsrEQzV1XzgABGGwfd3Bkq5kRprcyZz67Lz92PvZ2raKdqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdCNymuiY7uNE3SMqEdwkyiAnRKcGNFwKigBNAyMRuFX9fwxkCo7XQuD2FVmXcGn9dsu4YKNpo4MtfxU9BJjK5a",
  "key1": "59UysXxkuKVZdrBqjUPv55spf974quskjRsgMxBajSPajY4ubwMuKivWVF8dE7FDGtTvT2BEeW3p6KYenihFGN2k",
  "key2": "2ZV1pvj4YzAWsxLBb3vV6vApBszDDjQyHCiPS1GV4xnUxPdXL9G9n9UfvtEQarVk7kQLZ9Bc5TNpwEk9KXZGtufn",
  "key3": "3E3Dj6vX5THVJ6Gij4n74SwoHg4pno4D8cbLjhcT47rmyRzrnLe2qVZAkUx6QvQUd2PeGYwJAZPVVJQq1jq4JXCf",
  "key4": "2Bv7MA2mCKnps7rr4wY1j6ZRKVXst8fACMCXaM2MqLAQKaVCQgKCnuneK83EKUAnZSQZfUrAyFbqALEHSYx2HB3H",
  "key5": "ZFi1eTpx1RSaTk7dBegceo66kuFU1TEkgxSebzGySfP4vpTX6kykjmGrdKV7dMPBBQkM9qsvfvLwN2XYYDUjqrb",
  "key6": "4S9ZUaHKQ9YnDWpXuN7d5ptM6EEnay6hGFpM3PbkQGC9yDpnqP7PdHNbpjDmrF2iEMcmiHsFr2rV9RDzivSJZunE",
  "key7": "3bMajDd3oz5nJ7gpokdh6UhcAqUgnhWSqiUkRz9WPDpVoVFCU5MDsfvC1MB4Zxwd7KoPqxSMjcQkhVeWp6nSXdFs",
  "key8": "gm5jz2HqYoQUEag4yWYDL1ixZaH7YfWUWRHJ9SNApneVTbfDgmvr1xKojSQvBS36vPp3B443KyAweH3U9BNnJWL",
  "key9": "2yMAtB7RMTfEoECjaDC4gLk6u8xbRh3NkQrnTshb68K88YuJeD6iw2jPmjYxvdrjpq5oNAg2wSrCuJUY4BLVZeis",
  "key10": "5yMhCEK9b8GmdU9a1AccGcxCSk56BJBJHXvBRvQpgEzYHprXmSWGbeb93zugRS4Neo6mcF8qSa1REh8mtZ67uCWT",
  "key11": "53q6eWKCR1MsbqXNCugKDeuYVjmjecK9u6YHNinSZnKCTNGnb91XuAFuhjLi73DaJqcMTwu8BzdwRvfwjkFE5FnB",
  "key12": "4hmxfkjYSKbQmroFXDBmS4gEG4rkDGtLBZTvz2v2aZkwqn8z5Cat12iLRaKKgXc8TVRk8uMMnjKXU3B3uRbCJ59d",
  "key13": "wUGZcYYHp24Y47gfhXKpGQSF1WQzAwfwWs23pf1caiKrRst1BjBYWcv5ZTDsz566NrwyeEfhnhSs6DWLPXjNjaD",
  "key14": "4oc6eB5ZciE6wm2wmymFuCwW9zmEXQAtMKAUeoJmGjeyeRtDBpKcUhsnFXuw2DJM4f7WuCSSGWTZqUDb1v8ZRUka",
  "key15": "3QFmGPgAA5m7uRpeoioiAbjxCUxEvREeRu5UM3BH6zLGo5wusYVn9wMxZUDcbSoSQUBxCso3yXCcKNCCbuns8wLe",
  "key16": "3dmLtiy63v2DnkzCHBwtSbd4xXmxsXYUwpW2KQ8HugjVYz51urtbpBKizNArBNL46NTwTk8JVAFRV7bzNFBMfnNB",
  "key17": "2dRaRoF93CgSo966AzTnBAbv8waMxQp8dRoBMzoq3XCjAeuA5jKuoWWXbNj7xydR5AXJyFQ8ZFF7LBGa1vpZbQ3c",
  "key18": "3rguEcNgYE3a1rKtjq9Qiid496NNBDJuGv1QHDrqcccVQnXzwbavo9ZVc9bxsPkX5WVJ5P1dhW5QYjicpdjYU749",
  "key19": "5R6ZoSvAfbv5u3KcEzSMSnQfUJiTuPdTwgSKT3mTrLCh6siasGDZpjJhz59BK5FhdYQUiEm5FBdYJSma7YmG3AVb",
  "key20": "51gHSmobmgd2jJFvoijQDtPAXDH52Fhivuy1QGjEcYfmN5v96RPeUfsq2FoZtuUUSEVbbNaP3W9jUXHnau9MfMXm",
  "key21": "4eDAHL7yNsFpv1gMwgXmj5eUE7t9c2Gh1BrGhUtLLJmvTrG2Ch1ZJQF1C6rRgi6kkSB1iUX98wCxJ93AWXhkR9uN",
  "key22": "5u2xHburvPa5hhvpwXLyP9d2b9zX8z7t8iuwLAVkZnyfvqfiSUSU2VGdMTfPqvA4QyHb8TEoEtVKuSp4dp42eH53",
  "key23": "56PEtzv9jQoLVywMqenJENkTwxTAQKBjcH1KmZvqHXmT72juDppQJT3HnGYyZ4tXSXVxFjUZdXtGyaYCYXVVBQEH",
  "key24": "3NBBRPrxRaMDUZN9gHcqtjCtGkULGBWQLTuuHqHCw69egVPtTYaoofYXEBJDCDAmWszsZZTrkuBfBYcqLunwRAbK",
  "key25": "2v8oofH9o9gym26a7aUvyhUoUjSU9hAKSjwVHxcThBTd6H3FMaBCaYk6txdrSojtepkFws6A35mVGBpdMEsKw21H"
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
