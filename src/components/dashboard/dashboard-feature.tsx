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
    "5pu5TKZHV1BTigbrojP1kT82iYS1zN2KpZRCXZDsqK2FdANPhWtaPbQwzGJ4CW8H3CNZC1jcWsbVcRk4rX3pnGWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKkyN2NzWxHvkRHH71dZuBNQiAqDQ2UA9CjxZ4G9abmEyZAkoTuPqvD2UHYZ6t9xurispq9AQBHcgSy1JMSjX6C",
  "key1": "35xhPgXbm86VBgNiHBF18xyJs7Z7tjYSLzCmzE4riLmcS3pq3uyQvzhbXjqi9Zio1ajEe1RoNhFUHtUBZFBK7L9Z",
  "key2": "4jffzo8fVvRLL9WftEPqYqx9qghX4q1z6aPwP1akZKfoxx3ZrjHGq22zW1ieEbaKwdhJWvxUenhB4sKNgCYyq82R",
  "key3": "4YA4veXittrEPtKnJVcNenWdxihSn2hCYfpS5Nt1euS38bbiiBgzJkp66TsVQY3HU6vp4WQgMWbZdwuqb6d27ABQ",
  "key4": "5q2BrLDku4dinQdFT2hwiSCvnk4CKBpMigq4X15uDrXty99sZR4dR1VqzvM8A8r4o7omk4ySYVeFpVuSyRi3T6eq",
  "key5": "2DVexmpTaNzUfn9urba961yYQp7xizS2cjzrQiYgCA3LzmmsWefJNeWS5Q1MMvxS1W8CuvQh2h7SSJid5LBZwaW2",
  "key6": "3QnSWoRrTm4B3FSGLhkSP4EFtdgrCtGS4jpQVWynKSVnbnyXndfBen6r4xShRCwgQYGhJU9MsYv3LV4YXRL5pUB5",
  "key7": "2451sKs9skXx96Mesqti9YhPQgv4ymXpvmQUpaQ6UvfmyUF6ArKpyafEGBuCNWfaCsTgkzpKjw4xhXCS3NCjJpzm",
  "key8": "2jkHQGzwaD2MHSua8b85BrELkb2Fg6eHvEX5g7A7S9mTT9WccgoPhWCKxMFP4icJ1U735EEirv2vb5WfFZYaKBv9",
  "key9": "5nykTn2Zf8Bn1PZd3eTJFDG2fGcrT8eSVaQfozJDmmvUPavvGH8ZhUnjJgCbddgkjr8PasERQkK9k1KbJGWnAWDd",
  "key10": "3JHVgZqpXakscsKc82KNo4hc4KZkBcdL85Yy4i2Eyrp3n2k8jWoY4jSLBZ6DuVgUGJGEdJtbt3v8ccQ7eTJsJjch",
  "key11": "fmSZhbfRPo7XnpEKQEnBRYJks3y3qV1xx6hKPRQ2SkxQtz666VxhZpFgVFebyK7ei3MyLwMPBMZrHqMFGs2GxaP",
  "key12": "yzPgNRp5rTb2ZotvyaWaEn8dfttUeA9goPdpnu2GRx2SiZkEvc8Qu3oseSZoM1s6q9AECwfWPQm5rGS2rMY6mgT",
  "key13": "xQmvDS4GL1r7oG6fZApM4WwHKrJ4zbnq9mBVmdZT5Xp9jkH5GJt8xAfYqmNNRLBjhGym4RCLBpe8jyY2XhNKwhQ",
  "key14": "2AdBh17VRCjf6NnX2NkfSMX8pthzXq2vCz4rnZbzR3gbSZFs1hjWTTTJY4AiqBdCwc93acHVNWJbBe3cqe8YPaXn",
  "key15": "65jTKfDDufYB4Mgboc33XjZeSpuMsaiLVBUHfWQf8nZqHZH265RjXPdCq4W4P7eRhNa3ZRjfTeWSkszvanQdMWBd",
  "key16": "3S35DLf8LwX2Su6Bp5RHLJ8Zh9dKfLrFH7J1txFQ6EGZFKEFXhpMLFz1ZZPz84M8J14RJad4aQejgPjjrC1oypWV",
  "key17": "ecxUrPCV9Jk9qWukVet8SMiGSRnvtopZACTENk7HjZiv8XETJxRJnMziGwe2cmxBXiGpMKQf59HQhkpMzwjwJUa",
  "key18": "5LNYC8o7oQcEBCgVpjZgXx8Sp3EGnjuzF5i6vGFjtjuHyZb5RR9y3B2Syt1h3zJdj4L1harEk1hiPCu1TV4eDX2C",
  "key19": "2C25DJ5D4bvYdbSrkjJ6kw8A2v49RtBfAHbxpLNR3bh9JiSEkhzaEhYub5d1fieVvxD4fEJGeZxk1EovUkjkqjbM",
  "key20": "o22B2Ls3MCi6pHxf2kkBJ46tmfCgjyuvWW5LNDuRFCSk6JM6RacoZWJMEwBgWU4y6yRQmySwwavEGL5U9CtEdTp",
  "key21": "4LEXtseWTqhvgZETzjQZuC9tRGuCDUMdqKqnqwKBaw2jKVnx3TD9eTUTSs7bayCVuq3XMcKiy8dJMz8gKiLx5wEW",
  "key22": "3rQbNGAEb6LByknPTQW3gRf5uxMPRkSDd5s2uxja8y7vuccGa3po3E2UM8oVsuxtMgn1jXpkGtU29bDMnSWFQwfB",
  "key23": "2Zx3SmcdzdrpQS7PTRFXR4Yef6yVLbHpeYu8c9qAuiTGWtzTqkamUNoNKnj2xj9u6TCjJ6b9uxg7fqjaxq7Q11Zq",
  "key24": "5ybDMRDKjomERtqzBEP6eEsZ4ogfTUe5gZNtkV4888DUNHW5zjmvPLf9wQgmtdnE8GF9B2Yic9xR7186iaJetxJH",
  "key25": "3LPdjqFu3EKL1kbyWNCHjq1AZa2a4D6z8yU2LLf2UFZpxfXVxB9kAyNcQVU1QReCN24Q3cop9G9EhFPJe5ki6vLy",
  "key26": "2jgd9cwZxnQBQvBQDvZ7PceDe65DAWHPT6ryfCGeaqVFfH8Qm7Dc5rERzPhNp6LaXZgXQypqQqiG9XiRhb4LXiaS",
  "key27": "CX1oT8wPCvwVMFkeErJ7Z4V3Sx22faWBYCGk1hQxRfC75rcJSEwyPqpkcTLdJsMz44P9Nr6VMemt4E8RE8EKddB",
  "key28": "4ZUbTjkgrAU31Ky5eN5fVhi4X8VMvL7JzRWqGdXUUCS7X2Bhx8zQai46jXD8CmxYkStWL71CssLpmLJ31M9eGNQy",
  "key29": "63mPUJHpdaYXZi9worsKXAXkpV8HJAJxjFqiMtVe956BYmFJao1JooAKjxcL2suoMxvwfzGxaWunFGHuq2W7RqrR",
  "key30": "7WFB9GN44t2ARqoxm5994oEH2KqkD93DXVaPFsQKaPvvxqgNqMVbHbzoGwhfyV71wDWKXwGwD2fLa7a8sEuDe6T",
  "key31": "3ZTvZvQcdnsxiShSWf3KrZPbo9actPTdpywtHPq2C8uUx3hL6jtTzbFj7Z7nBgMcMquogRMRaw7MySToRqUjeGHe",
  "key32": "22K54pBLmV7jaLgtfCAbhLmBTKKiF2Ddr6MkqyYuFshDaiCcsY9AdAkhmJgnJPfQNUsbDKFG4wyzqFnQjqyV2Zsp",
  "key33": "5S3mHri5p6ADTVSrFo7Qwqfu3aNeMk8UHBpsUpCZDiwm2Vpr4e4gKeixoKA2qHnvBGVcsKNGG9jPrXG7GKqkT4ge",
  "key34": "3tzwi4Ks1NQm1FUzETd6TYyDU7sLydw1u1kBuMSML1N5SJmQg7Phd2FC9UYEgCStNFNQUL5w5NTKz9Qt2ahMZG99",
  "key35": "3ZDJnPKr8SkWQgptbjPN5zKkzFQfouPMe7ZY4Qh1XtKQ3VjKHQA1zUV8M667n6Nx1oHTA9rGKoo6nY1dmaoyXJCt",
  "key36": "5EZkE1LzYccHeKirpCH6F3tToY96EBNwoYkmEeduKNysHsyS1ZTAfaXCdMik4N86mUV99VbNZ8uSyQaEGT74qUdM",
  "key37": "sFq3tC8yuSovfcg3as7V8NY9vUiUzwojE62ft1VaQKps1YrHmaFn2G1hkCAhL4g8CkR5ngvdheJJn4VUEDYUsLU",
  "key38": "2BryjgAQLKHaCU6yGZwGcGRawB8iLLmYAvpio6MRyKza5UcnoDrpMf2p2HGvWyrQg53nTW7A9k3wK7F5RNv8CoTu",
  "key39": "3FSokMgm3eHsD99pKUGWUtyKbTHTXZyHPJ2D4u1QBymfNXzr9jCw3HduioeB1mRdpyCSEywCPwFPJhyQM8bHcwQY",
  "key40": "5Fi8vDQMJc4Vpq1YT14YRatMDwqX2pi4fyD8hRje9AekCkenQaGBptAaeuoiwy516MhuVzRej8yLcDZHvtG2Yb69",
  "key41": "5nUPmUM6cJKxVq6GpvCTm6tSApoTthE43aa5bmptZRdXei1NgB9mDq6d5RmLHqURWToaruP3T8Wk2wpwrnLKpcYA",
  "key42": "26XmJUpRRBAJdDmuGTziNgg7E6vtGkUmjbRfwXpELSUm5ULALfEUi8B7S4BjgTCASCqjStd9hgguSQdTLRNazpLB",
  "key43": "3QNx1ZX5b4xyTqJqubsWpVdBkTHBBSvuyeR7Bn6HgaF5aNkNkpnBw3192ufyzjvt63zJ44ysE9Npe4pCyNHqcgg5"
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
