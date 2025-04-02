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
    "5LJPYMi7Y2QHDU2zMz748KCqXr8eoq9PNBUoPyk7vUGaH3A19oFBC2yM3Q4Skc2UXNNwyit1KatUeusf2EzmEVsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UnbDaDfjjMDhiVezyJsZcVi3LipDeVi7gVqB6ErCTPkFB1WDKMzBBFRmMxcd5sdtFgaPZKzXridkhGc4xrHzATt",
  "key1": "56j91j9VqaCyvzcCA9Y7nHAxppV8rrFXnCHX7VcAs3az9SjA3CReLGS13oR44NNHuXrUQEcMEnpFbTU8GamCotsj",
  "key2": "3sdw2H9eM2JBVaUZLpWpBMd8n8a26JmAyCHHAqRKBe9ybY3zre33w6qtmzj4J2sw9fNS86CrhLgodYqLa8WXHqZt",
  "key3": "4is6FygtYRb6HC1DpYsj135RBAey2cpvCV6T3USRbTKuLMuxnniGPDmEXejQFAMQ9Ng9b6QeCry3WmP6AUkviDba",
  "key4": "2d4b2aLst7psg1AEg1PAe85HvwWzSA4oQTe2QippaDawAAmHds7iSc7eu1CrSLYWZ55Httm4YCQfTMA8yct8YG6s",
  "key5": "CCSXfkkGMNyyYDYKzVnPPpzXnxsLVHRsEUiYeBDTdb21oxwTeq9NwjKsgxWxMTRyRTpAuRuVacXj4r4hJR34FTZ",
  "key6": "3xaeqKuFNUEeeJ1dL9yo5Fdm6HfWQFwuLqSoPAZi86JkQAtdcTL8Ffb9svf12QexqKMJ6GfV9ipHCA1NHCjP4FmN",
  "key7": "3DwFFEUTZSnjJgdryEim9XiKn72F2m3VHYKXNctCtJag11Vsiqfddrbv7mwUjNVBGLz3G5VaeUbn5jkd1EubM3sA",
  "key8": "5LgGqR5sn6Ph8EKQr3Eopu5raDT44NeoS7Ap6x6nqSn55QURbkFrx68VSiKFSKFs7BAFYETiGe9as3v8j35DJDYJ",
  "key9": "27zCz5EP74YvfBWpnxf4RjSAiMmwZpQLmif91WP7b6vhEBRwrFjLAo9ii6esTcGtLq6HQyDNEkyV8poe7yneu4dv",
  "key10": "4fyQarSE4PSRLehxLVpyTh3uLdCyRCddyQ9vSpdLk6M7tDnwgZR2bPGfTbMfkJPYN1tqYoefpCprKfL65Xas9vDa",
  "key11": "3zvsPqKg9M8h6MNzv45hRU5ZRkwQX9MreznszyLsyJvtQNVDJV3CRCryDA4wbyKKwomFAaYJBnFmWSFJSpmeuq66",
  "key12": "52shJWfcNyzJGfQfRe4KCtA8es7KPh6iTYgCL1FrQpwPyo8zHoc6ipRuHqiNEfCeLcWe1CbBY2Rn4TaHDB6JCJuY",
  "key13": "67okaCRQ6f8Cnpn8mCKzAyKephEqnJ8wxUduxN5T9S55sktdPNtUiWdCSEf6xBM4wPBjCPoPPPopPSmjPbxGAchQ",
  "key14": "5hd4jdcNbmC2oJovYKnEAn1nZ8HDSExwYgECNCZmYgSz6mC7Unb2aXTWbBqSduAmQKtLwafvu5VdXF7CQzG1qqmh",
  "key15": "XrNPQ4mnu741ESRwXXhDvs3tvihHKDTjDfeWTfVj75SE6YX42NN7Dr3rUr7BacQuFRmXQK7XiwwMxLxzFRHHVoo",
  "key16": "2mGjJsdCv89yMjkwNoDVyMqFRU5xLiB9b4xG3FcLq4aUyzz2mjxzpNC3g54sT4cKvTJBonHN7GS8Cc3pJTYPZ8cv",
  "key17": "J6cAuMayaFMbsDCU9TMfpcazJvQ29Fiqxq3inDAS8HYwvkrHtSC3rB89RipAnjgTJ9S2jjs7bAvCAwZh4ZDEg6f",
  "key18": "2y7ugoQccrf3orikTLm8XD845ZEDLA9eVCW3tp3jxYNixxAD6cSEqgT4hrxboPsXRhC8vo76BQdag9G1afnbAbG2",
  "key19": "2hfcmncbzrcAyekwzzJR1gE3Ngo5uBWwvtVkWXgGbU9gXeh2XboaGF57gfXUNnaTy56tJ5uq9Wy6XHXNEXYf9j7K",
  "key20": "3twx9Kpooz2zTrwmojWLVzhfPjQ4j2SYtQoxALFPhkU9dUTvJ8Kf5fza7fuFwRoHAsj8JbMnciWN6BYiWgChdhvs",
  "key21": "ftD4WwRvm825sDVdZv2N7cudqgC2nnj8ZvBY2eHWKT8vtTc1xqBcty29WQrPmqszjLN3ttZVBb5RHQStvRjH81Y",
  "key22": "27MwxWHiUXvVfLmTa6KuFAcaAqjYyeGBHsQVDfxAk3gce6wHcyCN4oWMbpMW5KtQ9wE3w5NaJLXTGDUsjH64xNu2",
  "key23": "5kBBJqWfKRLc8YRqnJosPyFY3iavVVW9uz54imEQCHPmM15DZ13KyFaMvk62m91DyxGsHpQJ5haKeuT8HtrTXJvq",
  "key24": "9F11e8pPHG9yYkeStncwUvhU5XtJmBe2NBS9LajTmP41Ub2TWgpavgxnySg1GsmoDnNMcAKYVmihtGLyuYPbsKW",
  "key25": "2rd47WGYEAUe9pWhdVHfnJRDJWrb36qwmwsaJvVBssrC3xa5LzMwtDBAF4nS7C9aoVad8EK1KbTQkRevMaH3ah7u",
  "key26": "2bEfuRSrfTBYkeHfPJq1xeQHHBg3XB3TxR7zTeSWSsgz4Hu8GzFg6Bp4jLkt1QC5vSKs6qsohFp3cHWqQo3dXN9c",
  "key27": "3GxQiDGicsmq8WDyYJMCfg4knPw8QnRNZ2GoZqfw3sxaPkPTn4jFpmioSadMHvAW1sbSiwtq3cCHpnBo3YpBnxiU",
  "key28": "3DeE3vWUnvaJiETGy7EiESt6zBQB8zQDXk4xHS1i9xwTwFpqmhr1EDdNjmCS9WuBSVjytMrpbRCdJXd82f9XYebp",
  "key29": "5mijM9TKNacSvQwYtPEjLF2NwiTPVwHHgfNVY7KVRxKALiKy1iR3X3AfV3aKQ874umALABoBBCAkhRnSJ64HA7Sc",
  "key30": "5dNfWyaLXvVJMDwDsNptJtyHB4yWYhdnd7BjdM1j36etnqyvFWi1wa7c735AKxjdgaoBiw6YpbvoXYuGwrxCG8sh",
  "key31": "5EbgeRo2JfqkN1jboZifCVma3LerSthnF9raXbaie8cdABUgNhwiPc4uyKrX2Txv7wq3pbpYo9pv6nwgJE6KoZnL",
  "key32": "3i2JFLqjhibDPbU5Mx9jQmejrw4Z1TBQFixDLMapbJzAtsVk7X8EEyQYKrFbE4jvN4pHk1aEUR11g2qLHNeBRdmQ",
  "key33": "4SMky2zGFmUhd8LxYwuX8wKZ8y4rZdqARjzFwxrAsMoKJJufdTr4YmdyAmUUYtJTBQmMsd1hiGEnthLrJoVTmP9L",
  "key34": "39m3jhJ3D18R7Td9os5UUp4ntrZtwziFfZqCok6gZ66kkNWcsWmr4ocav6ea8FFgJuFJeFSh6CF43KesYvmsVzhi",
  "key35": "2yKdKfKiouMPdSTLs7PngcF4XAJuRWy4Mqeozp1trDQHCU9rDT3gi9c3yJQiM7i25z6qFi8vxE5TGCcdLrLPUZLh",
  "key36": "4Qxkci8svAw8ADgzVptEiW1mtofgTXZXobrmi4dirTwmdThiTHZYKEr1jDrGd5so9ThxxMprw8a1S6gV8PNRzNSZ"
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
