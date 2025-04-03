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
    "3G5q5p23s3ncijGRdHT8Gmpm2xuETUYKKnFcCMydhUrxSjUu7dnHavoTVnbCpFkc4BfWUocETJRkU6nZFEZYY19W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uXVbmzjxabXnuBouHUYNoCFUHPJ2i2uQ1Gj1oSBfs7EuX6eJx7tBwSvHRuqTHqCFrVyRrnPX7jfsDndju8VJyb3",
  "key1": "2VWNdnPWjVT78fNhcmEWzHMxhewXrYjzyGfFDR9igSfk9cx3up7oXi7Y6k9m93frypFqg7nLzPKerNtpxyvwXDJZ",
  "key2": "4i3iK4MQsXgDH6JKpNx4XDt8kKb2cQdCoU3RgzGBSMYfPXq6QFSWDz9SeKmdXEtve538hRLtyTmAHwbMC8Smubpu",
  "key3": "tsTihuNihwBbyipeVxHKQ5WLDTvWrEswiur1eLKpcefeVm5FENgvbRiwBEtgcX1E2o1tGVyS58zrhMabW8yiwUN",
  "key4": "2dTwrPFMU27FHq7xuQ6rcCB35rrYvr4UtPoSX1VPMZjoxRTjzRKgqQkBv3wqvKoJsDejVfwtZRQgtqLM9szSJPyL",
  "key5": "2n6DshoGd3ojwhBqqbqPYg7MCpzEAXFVLcEUaw1SAHgnGpNPw1nuSNbTs2SXji4v8LJiWTRxwrUDo9LmTFN6dQJJ",
  "key6": "3bRtknGd6DLbVKTfabxW6LyDPN7viHv2DxTw19sxbbvU5tb67JMvyauQEDQ9MCnPdj3JdSmP7aivpd8gTRGXRhHm",
  "key7": "8BjJ46uUHKDtSXMQkz9JXvsrdg48KAtjKAceHkAtPGkCnUnNY3ffRqz33X4tysxnjiRAPqQMfCWN9R7TMr6oGG8",
  "key8": "3KZeCNUq9F5yKRtDgguiKtcaM4Tk8DUdCp2C1LoPiSaHUEECt4i3pVn6TDgDyBkE25Kppdxwnr4vqHUVkocMJqS",
  "key9": "KcbvZRCJ2BbpBNSSuyyzBmSWqDtm9tiHKDkWHQr2sQnssk9sXUpNS68eaSAYHAWmd4Gxf6SxMmLVT3udrXu3QeH",
  "key10": "4hwUvYhP2R1LAP1hmrM42BjxfXeJtDzEQDmvXn3C1B8g8RC1hwcQZbw2dKpf37Ft8MzYZ3TtYXxUBmR3Q1CHocdt",
  "key11": "3ttpWDpR47598xd48Qspiq3x9Ev5234qWoDQ4CnaZoiyxZuggnRymX6aEAXGK9UEZLGyAzoAmaDn8SP6WJK5WpbX",
  "key12": "o1ErY6r9i6E94JUT6JNDq6oBN3TcZGWJZfaNAvrMP5pkzRwrBZUDUaAnto8EGQ9FQLTbVs3WKw8RakXGREdGDVG",
  "key13": "2kZD3khzYCxkY3dA69VgdqbhRhtDwq7CAJ8bbw4shdntxJbRSLgTiSkya2CzDXq23LjPjzZZEUAUXQxJZW5iZXph",
  "key14": "3EaGgH2B2mLEWofZGSUNBMoiQJaAt8iB69Gy7z3B8ndK2piz5YGJtGvUqhrhN4zdyqcaZf5mcrsEaVND56BVAp4A",
  "key15": "5SZhxjUMeDK6JEBX6Fh6YkhrLkq98FLLaMkGqhqi2wpQBdj9BosWyTPXZbjYVEWoY4ZRJza9eRf5dDzhmo82tTyo",
  "key16": "3R8p2H6HTG8nppm6DFQhp33Hxu6akX6FnSVCw6uw5eeXwGoEuCe5Tyo5zz7GqvPFkxjtQuAQPfpMqdq8W1dmGZ6X",
  "key17": "2RPbXqSrqjDxXKovuP285Mk5n9MMoM5gPTRSLNw5DL5md5xkyUL5sc27h9nLYhe2YjoLciKzCDmBGS718yVQupah",
  "key18": "3Env9t3VPDbnqJEBrnE1XrZf9QD8TQqdwtqBYw6ZKwjJVPEnVj5Hrv6LAiE3qzSEzjvNBTCaJNCq4qxnKR1WwrHN",
  "key19": "aGek23t7R2VDytPAqdAmsngR8RGiXE2EfED58dWHckfJyuYmuQpCrb8E7rBXwZioxs8mSyT5k7jo9WY2STvvzJW",
  "key20": "5z5KScC8VErvJeXYdEdF5TcRs18g8qqss5CkB3CY77ejzKL8kc5XJEmXXV4kDPoJ4JZwxPKMgJ8VSwWg4B8MKQ2",
  "key21": "4yVXQBFLnTtPa5joE6CPgyoYvKGrGrSWmi6Uzoc3gziqAX9raTabALiAFL5u4vto41WVa3Y5LMQiYuJ7Fv8xyL4B",
  "key22": "5UswdXrcWs6pUYNE1LL4hXEcph7FfePHRnqfaix5rCAFy1XAqME4Ff6VBQefuDg41qoCYZrCUZN5FpGat3188diW",
  "key23": "4TH6sZxkmxgJNaf4gdmbK3b7PS2e7dLS5EADyQQ7J1iATY3LA6wKrNUMnveeJAX4ijxPgBUiWJiyYtoJXVYBxbEe",
  "key24": "LsPVz8ZYH9Q5vot3MQFR9hkrZCR5P4tuTxg8348ZsFtf1h8z5H3CuWb6xa2Y7fLrXNtFZj6hcUtB7GgTzpswfdw",
  "key25": "2U9dTT3rDxaKjGN8jhiXg2W5ZQivmBYMB7X3mr66nt33m7EGz13Zny8StJH6wh6e25AkhBBCv1xaoHi61t2oAEA3",
  "key26": "2HAcNwwZAFwqsU3RYF2EVDkotv3rBvx9TThpd6r9nwR1SdjQiDrKh46ag9dgeKAh2tMwSeFh6e7bKS2Ppddf2LzZ",
  "key27": "5kWhzGZVV3gZUjK8aV23teYCi4CSkKnijD9hyjT7c6hRxN7fsg6qHTAg9r43sLC6UHTGJrBmLwHK61vtS98gXSs3"
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
