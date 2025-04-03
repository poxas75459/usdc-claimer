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
    "4Ebho3WtQdphT1z3qMfGibigtuaArHJGF2EwR459JQ4gZ6kLbH1GSmwUCcEcgazw2hRZAKKR5zHobgQ9S9BUdTZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izPL3kwyCN2FF55DnVgbz9ijZrYEMkMGFM5kexBfZ8BGrLeZym76YBhDYjF8GdzvYHNhT6VVUWZkQXJjfvkqPqw",
  "key1": "AQaxxAcaZmG72nxFQFFGgh6pzcsyhasApz8d8UQP7f97Bt2WuYLAjM1sgczkuqgUNaPSkrt5SqeLBqwv3HRZ2jx",
  "key2": "4qpXB6z6iH42R6DxE4mwZx82NnuGwDhVVqbFqdQYJmi4ZWW59xXgv2DSHCiykZojuPpmbjSBzVGgPdvwFTfx19Yc",
  "key3": "5i2CzGzbRWyMXvmNHm5LTYz42T6wkMSurG8EpHAoqGuWdBoBiGdrtG6ixKGipdgSyENdVJ9zvCd5DTrGMYD2BxRr",
  "key4": "33x7hNjSXwJdyKyqDGbGLFQ9aDGJ3s1DaqkpbUcovFXy8Nkxa4uachD6JKeqreRRnMohYBSXwuGN6sc97VzEpt5n",
  "key5": "424L41WhE8VDCh1rxhEM7K9NLaivniBTPJBU9XocAJZpHyvsz8abqmS1vRRwGWzH6fNXVj6cPk4rLgANWxQqGDxY",
  "key6": "2ZxVZTUN1CWNf7jbLjJMbf7zJNKK29fqwxKx7YFxJRTmFdgwYQXMqfpFFTf1YJ9cgaUALAk8mjZZRvNdqfKvrQU2",
  "key7": "5npibhdc8u6YKVSDaoeuD4PKYiCYH68zkE8dCpGx1154yNLFyBfvxwYgVyrSEgML2iuBWVf7bcMCLJmXRVw67X1s",
  "key8": "9QAk8DhzWEiU4FRvP9gDhmTme87ykWMBasnCJcHAZYJQvGLjRCvbCKJULA82GezqR5ZFj3UpsYkL9GdRFAp5GXx",
  "key9": "2w6jVoJLu6C5xqbx9ocZyQfvgXGkYRN6jBXfUPc5sXrd2cBPeFdYKwMchyeSz9MLDLN1gUKDSXj1UQ2JyA6Q74kw",
  "key10": "3RpagzagKAKFSmR4NvsxNPxaACd1vybJDQQHEpMyZhj8ji3yHzK34HteHpP3JLN8REQSKiWxRFspAKeA4LtiGoxB",
  "key11": "29qbqjaJAGE7xCDSc4QFo2eLKv9rh32rXGa94N6yDFoGt57sYF6sq8qnPzFt263FCMk9Tn2cyvC24tbwGuGxxhNC",
  "key12": "5A1vCMTBzUryvnHDkbhYc5eMGwWGVxNFspShRnzMMJzvTyx3uzuNNDUmkmEZoDxftYRCtyCVfVsbsjXKNy638ryx",
  "key13": "m6ab84qGRiLjXnk8AC6J7VL5CnEfnYornbbzNg7wCqJzuxhKh3WHYCBLrUazWcPhWnGZGxMkHoBR8BEuotktriK",
  "key14": "3rE3C8EHrS4yFShkhkA9Afiz18QPq17SgYS8JZ8Rt6N2e8H918bzoi1BVnoHKLK3hHk7kgUt68srAMZTceNn2Fp5",
  "key15": "3fxDresq1PPTmccmaLnLLhGMtQrSHwKUVVh2DtWA5zxkhH6VPy5FEDnsVPaHT7CvSFy59pWdJJn1RXJJTqAqSn7x",
  "key16": "4JbtZo7vHwp847sWbH11BYiyGCJpzf6SWNzHH3bGFiZ9zcgunByy2KksqxQfcG64AxLggGsExxGPp3PWaqgtZbRh",
  "key17": "svZYyv9Wx1TjFqpoqhjrm2pEnj1rba1BiL5ejjUMKLSpFmy3i11uA1bxBusuanbMhW43odCFfTtNBnGqHJC8u7v",
  "key18": "4LGVg8AKxgftZ6Qk3QjqTmxbvowNiqDRmifw2d4srrjhtNKsaEW2gUPaTRo8eRRyk5qYHdcDEQeS7Chp7hgQpMD4",
  "key19": "3rWaw4H65PTxoXqKpj9H3MD5j4eFiVoeHDVCbSsYkkLBYohKrQh8DAGwrQSHfQag25JqqGEt8CLYtQXeMS5wxTBv",
  "key20": "8Zx9oXvSe5FGJKEhAGiJUJmj51zLXkyznTETwe5XkCi66FMQS4F8yCvAYy9JsskmQ2SiJvoQnT4yH8RmxkAdbbi",
  "key21": "4TmNHdAViZv7nds2ooeUHV99BBNuNSezhnffTa8Rjke1uCvUjvDJd8Dmoykx4U7QRqpzVm7qrFvXFHdY7EjGNMJQ",
  "key22": "kxSijnQeTa2nLYNkvx69v9MXoPiwiUVznPkcCQtA11fUD7Goj3Co6AJ7DEjyDKKvdB9X9pJV5Bgiqae4V6Us43A",
  "key23": "3BMAsBt5vAYYy22wX9qry1uTH4ki24yah1JVMSfrsnmeBF4KDSFvkYsyrnmAD6Kz4MLkfqSjPocrtvJLhJYgGpPo",
  "key24": "2KbfeVN9K1Kh8YRnCptf7Bg8kWbKDsM79dB5U922w1bpfENits6iiuJSDfUd1A4Luetyrnz4WLmZv1dpoGKZ21xi",
  "key25": "3NKXLYqv6H2gAkApDTrH43QtCDqBizjTLcrxfC1FiUFyY3Nqb2KcKi4bV6WSH4vqVF7e6SFvgKiSDpRspaEg9nMT",
  "key26": "2mnTtRggCYtRySyahP7trdxdWMyzHMWy3JvFG3LqGxkeaGckBjQ4Z5TU7HoeChcgsU6jhv4Ct3tYywHbh4CDxDZD",
  "key27": "2bxRhTeLC6Y3U6WNzHATQ9iEJDvKqjZrbDSyhkFNuDwQT9QMv8nDKFwgN1SA9zvgeLP9efYas1iu2qkT5HGSjP4L",
  "key28": "3ZsAjhyTP9NtMPxeYetimYo4fXmmNf1zFLi1Y4yqHaXWkvEdLDyF9aVP3t4zVMiyQdBTBDJiqTawjPxSDGjMbQNs",
  "key29": "56NijzNEkD1EW3D3peNDYma9TgYVifc29YSEsAhQuSKR4WM4aRzCVYVA1nb7RZ7Sr5JFuGBQNJWUL52qsee1rpp3",
  "key30": "56P1xJ9uMg3656rAuPXLHiGSPDsDwi32jrDm3Z8dFxBDGWS61CmKX4oKLji9k1tKnTcNAfTKKEigoiepNZfteFVu",
  "key31": "2gmZn9ERGwFwKoYqAPZUGpTW8mN9UNGEJKicQtCNZZxtTYiRFzzcNZTWXdgukky2SHBGKd8EDQUpvA9jyDfk6Yc",
  "key32": "3ovF1ACCdVQx54ziqVJQF1BSTw7eK4H5K7WVEVwpXVDd7v8Wec4YdEfXRZqPV199RBqM5m9ffBnjFEWjW4r2kKkd",
  "key33": "4B42oPu1iaUm6U5xe5xA6QBk1KzZnUaDcXRVKZs6Cj48vK98HZLMXbM9CPfLRwUBnghWSzPhYR3qo4nhBVSq8tVp",
  "key34": "e38BHS9y5r79DDTth4fGWhrCmBAiUPoYCeuJDDfCjP9Gs2H52W4Ju2s4NdhxZXmb5KBPLzUBTjFt15K8K47TbHH",
  "key35": "KZ6KEPSNLD1x5d3Kt9EdpwevUiUKZM7HDfXiVXcPVUv8DTZAw6xDR7kHdQfJ8d2VF3PVmhXpxG1eQjcsbzbNosA",
  "key36": "32ZAcQX9T1xSKiy1DD89gDJ9ENykg8e7yjYpZcYXTW9oKfyDLS7NPa8gZsyg3AK9QWe1xrksqcQahhiJB3j6BDDR",
  "key37": "vEEdCL2disnYd69VPZH6tMjQio5VkLntCM6cY87VjiU1NVeLZJ84ivZSWmkLm3jN74cCjAseSMg9YJqmEWQdEk7",
  "key38": "223ysVTfLkgDwC38HrjMbMijpgnL5PzRHio5FAYNVL3BSFjjgxk8uHS94UZBSrTTGDWNaQPvVL2pAM2EQbGT2kuG",
  "key39": "23hHZ7CxB6R5pcSn8vK9yaiHGmAUYRN84MfzxZThWy94mVq4hpf46QKanqn1yxEvxM2L1d9Z3v1MUfVtWw89JSA7",
  "key40": "2BtSmNTkZDDUn1qHcTBh828fwG1qcpBMAW2mT3zXkB33ASJzjzNeLDmFNUHKUWtzbpBLg62zwP3BmoTPKygkHmX7",
  "key41": "YbV5aEmDDTRi7vbsssobvoJQJHpNyyZYNB1dYLcAHyquEcAhR24GyUd9a2M6gTjxr96WeWgdttLpjPcQhcQdAYf",
  "key42": "3Q5XEeLsxVZ37ZV5TfNcCGPVtoHKVS1sXg2ZLh8prsxSxfY4r6M2fyogkrGCJsDhDJKBHtXKLjNDcgiJaZUwfgAh",
  "key43": "3DVNFnwzjV3iHx1HS7KbobYRpZC5Xwn1Zdu2Yv8BmYnNYpY1HMuMqrF1yUa5GHcaxXLTD2jK9GTazoki15zEnCsM",
  "key44": "3CH6LbTLv2ASfy3GNfWzxUMXqRfg72jLncxbs17UfJosfLNWVmAAzHFJrusF4gRcsFkq9BbMdxQwjnpe24vLoGFo",
  "key45": "57CiB6Z3x8zSBt8RdJytH6gwrJQx1P4snjCZPYiVxRDrH99pZ5YLKBM13TbBFRHhVSKgg3vGGn7kZvU5eNuUC3Mi",
  "key46": "3yrrwWWbEKrduVEdAZNQojs6ErHDb92GMjrtTRELpnE8ZQkyJcguQ3xMY6a6AuY54FBy5irbXYpjqpcFEue6kQW8",
  "key47": "3Brkh9CYXnYcVZ7zXXrrBGdg8BUMuJNokbL9CpwhHzz5X1Pvj5hAauhZn8WhxaRJaBi7QfVmVqksEvj3L25ZHJh8"
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
