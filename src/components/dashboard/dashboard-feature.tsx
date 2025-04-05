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
    "Kr3rRS1s3f4jtxQzvcR25Mn8Jvx3k1d1j8KEnfuWKygqixWKQm9g21t9VFvETqWP9JPDx7fhwkGK5NAdqeTjLbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8AD5gGhRWrUxjDUAtgPnyTaK9RFagmxzgHY63KUrMENw1vgLQsBoDBdizfTNqxWBaeYknNNeuuH14u1JomQgCo",
  "key1": "3YJkZWiMEUEBcmBnEUPkCn2DDZ7xzLFcKnwsdhgn2TBpyPGi8ConmSejq8xRDQCSexkieh6kwquoocRDAdYeu6Zt",
  "key2": "4orzTzWBHvTGB4k4JDayx8b88bqTYQYHmL8hQE1BuQ86ALqYAvxuv8c5G14eBZBLGJbzpydEdY4wY64HAzpqNGAm",
  "key3": "2LxH9tkM5Le7uKjWEDtjbkp34KqmW8T8gxPisRtxeDTt64mp8bSfRTxQ5BmZg2HwZZ7DaaHd66Jo2tQwzqZYw2Du",
  "key4": "38kP2yz7XCqXJiqt9GMxgijyBDBExMT9a4e6mzYF1j8dS6WHLFWCe3RF5mtQoRp7UdJYKxsDDwuiw5qMkohYLuqf",
  "key5": "4WtuUBDoT81YFpWH9Gtm1Xa36MawAd5zkEoPcjQKUWYkoQ8EXcVeYhxv6y7CS85XP81hEEUG4Dx5rd7JsGbL9uxk",
  "key6": "5uHSV9bzQdnM3haUkfMQVQGco5FjebbHs1RhGrhdcz1ARysm1gNPHKREtf2DzBCKqunVhY7CCpiXRJo3hy8VAwWz",
  "key7": "5qaAbf1XPRCroWekTG1r8jAPyB8tZGV5rDcHPWJmtwFb1iVxUU8E6fWZgLCXYo1VhhN5ktPiLEft2kMTtZ5o1eDN",
  "key8": "34Sr2nhYS7H3fY2t3MpegTwW4MBG2NTqTrLVSn9wqaAazhvRzBMxDzCNQiXwqGZf5SpnCJthSKGK3JiBCeLUEpGk",
  "key9": "55eM2K5q1mFXg3Jyzkt5d54eNzpeLJsLbGjZQhGG5KhBh3H4rkgs7nw9yUjpugrs1kz4481f4e1rUdq1xgGuWXpm",
  "key10": "4CKbYBH1nLvVrkG5HJpcwJJnboMEt3DuQkiiXdLCLMyojdZDCheDocDVwoYEa4wMfkcSLYPJat7jyhxWZuM28qC2",
  "key11": "tzBZRrPSBySbs27fenAbQRFJGR6F9UgZNeSxKNFRmMX49NE6Sgj2LFXzC3GmbzHX16YVeGh3TUKtchBmayKZQZt",
  "key12": "2kSBvZYaK1bbEawNRjaA2aCUB1gtBsimgxpbvSvj62odjiMXFk3vT4UMhZNuc8hoepP8vGPAU9NE4ruH1Ckkzq1P",
  "key13": "3RRHG9YZuPoAULSmD6PDJ8zuaaXVb8oxKCz6UfR2tzpF5WBf6rMyyFBGhDq57rsZx7BsWTA9WbCKLfkfY7b2fw9A",
  "key14": "5J4LumBwQBXBjXN2kf14WksyGVeMachbvV9VLN7dw8sHrAEJJy2DdrsPkyuUj9wogBnPGtQz1C149ZhCSYfe6uD9",
  "key15": "eZkKT2gz8ZzpFVU7Mvgzw5fyqTeLGqnUYcWTVadRu5yZT73HciQvdVpcHwZBKrm2eSr7hHTDQHC9RSjwxNSQmP8",
  "key16": "5HyDBWXnerTr6CnUv6jftJsLrk1HjZk572Tt4j42UdpP2DDnrsSE8YJcANgYDmdE5mxh1XH5vM2ibXvnV6PdM62v",
  "key17": "XbApYAVfUmm8i5b7KZWu6ee4dqeRRhzvYDJNYdfLomfCdUhuD4dEwbhPhveL2xYp1jJthKytih8oN6QpVifagqi",
  "key18": "3cEcbJrij866oaDtAkEticELhhkHUe5QzSQ7bPLcmAXVh7TgR7Jy9SDBCjXUAJU1hGYaiUPmDbvMAYsBgYej8Qsx",
  "key19": "346k2SSvQjU3vbaLFer3VZWDDYEEFbabYdGUvZEnCQzUmswiSdYoPb6Shzaw7dwrAtLFsPVudmdeyftsF44qhNC5",
  "key20": "5ygDvfoXkXahPfkd6HXS61dQFVVC8Y3JvWsHXt2C3nnp6HUrGdxhJx9qRY2S3KNVvfdUeVpeMQRetSaweZaeWbSy",
  "key21": "YMEUQ84EWMoi7N45QE3Kyfa3pic5EDvRLziaVyEwzohrZw77od95hmmTHkvZWQLWt2v72NPDt5nuGTRXdJMdrz4",
  "key22": "2Vs3GY1pbNPmQxRsWEoHiTmf7HGvvzaZcdUMaUytpFtb9NPKWmGZqBMuaCkCGggCTMpycuRcmrNBuSf1yXC7UMUe",
  "key23": "4BhhBF5iLLqQoShrMLz2yCX8mnRJetiiJW4FNbpVuL9j7LeWyfzPwjxaYnKXzBdZ8NMQoShHdbozCKtkXEgLJEuR",
  "key24": "5ADGzmSpxejwv8N2GmdZcrbMGAsWzmpNGHtE7b8mLGbxgTbyqaSDib8GvukbviYt2Nnb9XXYLRpv3vamXru7gQcG",
  "key25": "8x5r7ucLRxrQGLu9oDVwFPiCNHNNBg5BapksWjvZ4oYWSRVEbavLwBNw4NHPPyvaZfzRwzqnutvRWQVzKuLArwe",
  "key26": "iP3ZHMvewCZKAAaip3XFP3BXaZcAi2AY44eCe5jf2npTVEYAUdReacfwMZdR4gzg22V9GLkSiDbXw1egSvpe12b"
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
