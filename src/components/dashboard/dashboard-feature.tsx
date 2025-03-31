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
    "278Uuy2UZg9NK1LWQHzBRp3nVXoEWWJMJ4mLo1sRm1TSXPS6HwPh1iPqPgCcsu4KXu8qneDvFumPsPyFmkXkb74D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtnfVSWmavnqcUgHcYr87a2TnKduEFkadGwmmtvuaxZK6dxsv4DC7a7qpw5U1mczvqKrABPS3suRZRe6RcLKocX",
  "key1": "E2y22Cj4EhAbSnKpsk1pc3EQw3ASA851Uqu4N1h5yzw98MrxNxUEFw6fc8XNFxjsCfzCoXx17ZTbS7riyA16bnV",
  "key2": "3Lm8TBkNaQ4S3ZtMRLFpuraCfk8Bnjh6ad1xoXpYWRMBbqQkKXvGYErbMx47r5bEwq4EXt7jJHn1WxUPtbkLbn3h",
  "key3": "2fhUEisMXcumqsji9jmCgEcccCodZsgNcRmkgy6rDta3yznw6jKzZu9mWEiKbFXtzRD5MdRBe8uZ9o37BBUov8f7",
  "key4": "2N38R67HcVu6NBc9j7s8k5n7Ppkk2crAAvFfRULoYUUJEnYbjkqFVcNqETaY5NMcjVZ4kC1dFsJEo5Ba9hYMnaL2",
  "key5": "3zijee895zW8DU7b4VJqCUMVGEFcAHivizxypek4jfUbyXGn51qF34CWyAvfVwDKL4YLVjHVWGb3Tu6fVeSUhYVD",
  "key6": "2xHg2yJ6YC31NPBxx9sUJfkYZRuKdSVV8q4ZT3TpCDS9KedhaqkteZvheNfHx4aWTauRndQpxeHPx18H4Uj3Q6Kf",
  "key7": "4uyPgW83QaPgYEnA8GJm7J3BeJkUTfAzWRGntrWQhxee6Nyfa3ebiw6odELcmBEGfZy472Wvpdxqh2FFSZ28YW5U",
  "key8": "3pH9viGRMayrLHQQZQkYw4LHAVyv6y565LBsdKgpHaMgrVLhgZfBkeUFVYRhXJysF91mv9qbvPwLbZTHuioD5Ycr",
  "key9": "3AJEawtuhwSnp7A34986vh9S44BhFJhtpn64mP38Po1DSNrZvjiW842bg1wu3rFhcKhCazJHszAmPpVqXuGKrJK5",
  "key10": "2mrWCaGrbmPgG3QnUF5AKXori6ter621dkqh55F8a1N2cEkzSLPTrx67KYmnmsZYXkYudd5kmeUTZyMApxfuAYth",
  "key11": "y2FRzffKp63swHAbG67hTFQ6GvnLEXsuAD5MBwTuzgU5kx7UtTX9qzSeYRoEZScSkgu3XZ14BraU4MFyCHQxhEU",
  "key12": "2UjhAKTAAaBpTNZd4g6jhMVUPBmHpbM5fNpPw7Az7sVRR84xGpXRSvRMLE8DFrzMaeFZx7VPbVvz6na62jDTbPg",
  "key13": "4uaqc45jPtJ39iqFWZxkpP8qGwH65Xj8YWj3XbB1YzWSmcmUTdbLjoLx791XrXtfKjAnMvVsFncVDHNuCYGN7JsP",
  "key14": "3j5uewdM7eCc4sW5FH1TrvZVfRNJXg5vHbD7ja27Cn8RHKz9tBFGC1AWofVSPf2qvu6nhueiNgVbk6kzBD3ZJzjM",
  "key15": "5f8PwDQm1rVzN7A1aGQbgXh9jBHh4zrtjLoFvSsLSZYVvcx9yEkjYuAAf9kynLvAtXaQKQ9rTSinGCjiWxQSFkXY",
  "key16": "56aKtZTaXo8Nu52GKiaSYpLBDUm1dumncmQQ1HpEJirPWjmwQdpcaoN5xk4XWB7w9ZfoTHYeNVyRHzeqMZTvaRTx",
  "key17": "5oTXoeCF5WFEQzvTqnx69tPW548PUvruLfwTqCX9hNxZ7p3NTkSnRffsxVeX2sWACBtgEayYAt6C14LHLPiJjfwL",
  "key18": "3u13HmC5KR3dQK3W2N61jJPDmfPsstFMXBbwUQzY2Stcu7pm6CD6kanLR7GvGkSjxcxUTE8PSGGFXRjcGw5Zwk6L",
  "key19": "44toAb18b2LwJDCF9PG66842oSJ2zufBXzKy3fkCPZh3zDFbUpjwufxkG4EMLeGn1zrp2xkxqWmSbjqhMfFb3Hp6",
  "key20": "zi5mKnSRauw2iC16UW444oe8r6pHsZgutRh1eeeHhjx4wYvM1uQ3qLxcaqfgzMuLrBQrnvFTu5RYwznEq2RFuoq",
  "key21": "hpwWL1yEXMuCsuzVmkCoafDPs44EaAaTipUG7HX3TEqAyRFsPkfGyt9Khab4KDQSAVCoXPiHS8tw3T5ydDYFhXs",
  "key22": "5y6cPkFaTaV9HjNnw21kB65Z7C1keksC3fRYcGXJvYDjcVFYMc9U87NKRHkWX7zXvPkd5NYxn8gEo7CQe6HMvqQQ",
  "key23": "64jMqHjqRgDV7MzeWJHjuFtqp6U2DiVjEBN44KNVUvCS1N1yVAJdN8XGDJBsTCcBDf9ecPXFkz6Aas6moJExnyEf",
  "key24": "29R5BqcHoKTSzmJCU7oY4sGgyy9ybJbNwBheBa8NEMcAT9tSiGt2P6MqT8xaiacNV6bmGLhf2CzaYWTNLikykgnX",
  "key25": "4ncXgDQYf6Apug3px2aXAe7Dh8LGTZ2v9o5tdzeMgrnjhWQGrTR4f5vMdUWKVs5S2mkSfided3USBfVhdGuzPFRv",
  "key26": "2k6ikJ6qzmqYnnfs1NqMuHHjMgdnqE7rHJP9Ge4FcA1kqr65vc4NitrZiz8nM4pccyE3RpgCGS8PZE4y6de1ood4"
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
