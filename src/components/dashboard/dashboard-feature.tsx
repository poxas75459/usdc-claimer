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
    "3Ebowd4JJoxXYNpmGVzak23wzTbrxexpvfcg3XgbgGsU81oN5kVv3c92spAs6Qge6Ux5Xyb3gGenWB9vwQKzuhNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7kSV13iL3FZDqjuGtfsQQTNHqL4Emu7XeARvPfUPzhAQU9SJgHcVVMzKVsdP6Hfyt7Mv6qfYiDasLrZVTw5DTu",
  "key1": "4nRfcSvR1v4ySSD3jYZ4XXnm3BAjW6TcHPWLRL7bTdoVuXqpJ5cTYeYwpSG69GqRweQYiTcGcbMSoxU3xvrpFowf",
  "key2": "3HkMHQGcJLXmN4CMjF1QX5aqWMfoEm3NsVHP8v5Emt7YozH629kvaUd8KvqddN7sCcf1qMoukrY7NoVdhxLBFbrA",
  "key3": "2jSS8inmX8Te92xy1AqUVPzYty4FAsGoN5iKuzfmvrpDe3mSqwqjnzucDKS5Qr1epiL3nWpzWtYbJnkUmqmxsUtB",
  "key4": "eyz9Z2Hutu8XBaMDehJUqgE4utZYrwg8GfDNhA7f2MitEw8vNvDqrTct6KcD5LFvz2H9kxzNHtFWVvd7D2KWFP9",
  "key5": "RZp4cLGya6XjkUaZA4VfoQaNysT7SqppzSMZGm99S2DArA5tQ5buJuCV2fR8jswk1uqJ8CoNMEpHUzPXRQpsMxh",
  "key6": "2uQjkJYVUbfMc36YYitZEayn46xY79T57fKZduq3Dgi4dEYhZg85fyAV2PhkxqjCkhgzDjbsBS6K6xy6BqQeG8Dv",
  "key7": "3ov6ctJwf7DNFWZQHbf4qwJFAk6hMNMFiHTxzxEmU7vbjTP717o33xfDXYc19qYPGPyY433y9NhmFNV5Px7AuSgS",
  "key8": "4d7rPvfLuwBXcrW82GN9YxggTn98met9M7bZhunMZxeHXxpsQU9mUNsiLawJYtSmXg8ySX9dRGc2CERmsgPhG5ud",
  "key9": "4R88yqKKFFqT3LtoPzq7pejQPjG5XfQXAPKdx1QY3FzZGKeALvW6BCgcXjppsCMBfCo5kKPn47nBtqLcRxoD9Rzq",
  "key10": "25SaBVc68KDv58Q9yQ7bVMqrvb2p8deL53qRL12Tjtcw92AZsC5jcTcWYGDwnmkkwV1rfmKKF7CGkjHjtk3nxZuc",
  "key11": "3KukXbfdZMkgDnzriLoPr6spfSi5TjwNAowNWLipCkEWX1wiNv4invhqk6FkTKkKDWKxfrj2P1mueBg8qCjgLskU",
  "key12": "2McVfbdC24zgequKmtSaSjn1Q9uosmKQJHjtzA6FEL6mHm4Kpm3xDWmZWXaR5KswKh7JMTMyYLFHSTHf5XTG4Jvz",
  "key13": "3QkR1K2fMkkE4FtcD9vDURi2yRqPvG43xh7fMt6sq1EkCYhd6TmmRPbX7CcawfqKYSswFuwhtCAp8t2kkfdPTNR1",
  "key14": "33D5xyjUKVD37zyfvXLePtsm2MzBa9tGUfcvd7KJLXB2wCWjuWWx3fzVSssQPNnSkH1PQaQnYSMDz82bntRff8Pi",
  "key15": "3NVAr7wAeKMyUFTiiFMcFDFkhTUamoyLjzzVWfLBqh4qoD2bprqN6UgNWKYmXqwtnVHKmgxTZaVkgMUgETXuiNmC",
  "key16": "5Q5CHA7m9SC8ZRuooSLhFnSsp3b4bCbf8vMth9D4Anxcmb4attiLe5EkG29EbR4xPrEPpkT6FDQrCr6X7ssygGBt",
  "key17": "3yhAQ8pqM5tgiXRFq8sNg3XXA9RAJHdb2NdNa5c5btqGbzrnXYuB9s5boV66Kp18RFz4zqCb53F84b8ofokViiew",
  "key18": "9zMLNkq2x8WtYifxcJdVwwVVquQxYtZ2dmRsC2i8ZTu1jtjJCvL42HYYKhdw5L14NUmHBz7HsdgpnrPNTnrgoPt",
  "key19": "5jaugRaMTjDDXM4kG8cZ1JBJifGcDgu2fJtdBmBrs3Gpr3fbfZnxfi8W4jZPTH5FKv8N7gemdDYQLtSA83wYQSFL",
  "key20": "329HcTf2ioSmN8uYMp2iosg5GqQV8YDKBBkfr4KmJGq2MVxCtz5bFDJyv4sASeGb3AegceChmw2SS4iqzFcePo68",
  "key21": "HXTxDHj9DWEo66NK1vFuzcamzjS17JEHVuNM2CSm4UeUeGvhwfCqDAVWfgj1qgCaLeQDBQJc8VcpsGKA4Lt4JFw",
  "key22": "5cvuCTYJm9BqMay1GbyGMZzCUrdup4XotR3Pxrwhxr6GqtWKNPmD979zWqHrxDjQYX3cyxPUvF7aUn3Dy65LH1Vf",
  "key23": "4mYemDac85Q2TPrp3zuQhDBUB2zMy4XjTytGs6Eg7CrNc32JMDPypeeAG1KZpVhv4z4hC2BtatwBcJfyNYmte1fy",
  "key24": "3AsyfzE6ycvfNpiDPsxsaZUj7RbeT4ZbPkqSmb8VcYD9Xaou64DvR2vULTgtQRKwyocMGVAWq6RDhoxCMz97uYsX",
  "key25": "8wc5Htgn5KT3xZRYHMWM5vBQTwBgFJPdYF59pqr2p266BgNpyPZYkXuSS9W4wB9BscfkgefoGZqRb97GnkMykGb",
  "key26": "4bHYyFSeLh9TvniwKa1ojsrLCowTZKvc76v7FCcbqf5pjnNaHWPSL4SQ4hF5Ni9gQJxgfQ6KPPsapQ8d3XGwvQn9",
  "key27": "216tZ5Hdftxu5CjWxvU59uxhhkU4UcCnMsZdwFaByy3BhNPG4yuHGJ6WVXt9wWq4QAFdhy6gzqgwdVvdYYNBPg4J",
  "key28": "3jX1WkLm12sFQpoDXU3XfPkphNLLXw7tduD6yZw3kDPjQdu7too3Vnic4yF9tp15egZBYLhhtgHaa26NUgKhxpH6",
  "key29": "3Niwd8DYGiUWXHAM86QMFZe7Zi1cN4fnPqrDDC72PsPKh3BooQKAgFPkbqPmtqRgMiwH8upHs4ffZGgJYRcLEpG9",
  "key30": "9c57jGeakuTXLmN577arKdtGz6ie9aeKkJm3FygDEx2iPttCTnvAZXGPafP8ZjURGwzBxru68Q4SXLMfaC81NM7",
  "key31": "2dDcF7WXkmzEarVjqXCXXgpNocMEnEKMEdScvGrM8k3FsPnfPC7cyqKSB424m4LRYbWeWnFxmqQJPfnLofXYyWrv",
  "key32": "4avzpbHZw15ju1LGS3WCUUaAZQJv4h3Gm4zM4hDGZEaAWgLHxzBBDeXSNSVoeNS5jy3QbvjacUthUEuMFdMRJfKH",
  "key33": "3j5rYQEGYdxV1hR3DtPg5quMtsdwhLnb7tLconHwhr83oP4rN972K7KtmeshQ6ZN2u6mabj1FUbQujywTHUwXjn1",
  "key34": "5Jafjpz8b6rJptntkBbeHiSfUUcseQvC4mwjbZhBg6zuQrNffc98VnijZx8aKqnXb2qSWhxJEqehp7u6J9nbqT7p",
  "key35": "3pwLm5f3EEn4xjykYfmd5P2e2CqtHQ6aMyP8SikWgrbS4YAaNb6e1FtgzdyEjqnknrCt5u4BHSnVuY94EuVuBeEh",
  "key36": "4ATFdnJStzoAXvUkkgpUMHD5uqc5Kn4Yi3yEFxgNPy3j48ZMS1sdZbFqZYAd4cPmfhDczCxG56Puxo4gk52dYTSA",
  "key37": "2y3bfTeafn4szZacQk9LZMf4ip6mDefzEPafnWBEibmF3cNXxK7LyMi7dSH377BUerY6aZF276hFhZ4LPYhxzg9g",
  "key38": "ysncbPJ8TZUiitz6qa3o7Nj8FWaWXf5hAipGoqsadA9VfderZf2uzDtz3JfT4SGj95hjVZdsgrQNskcEKWn6cj1",
  "key39": "4HnCARnZwycaCYrMWcCgorR3Wk2m43UXk32vhuj6jWPSNKYaMe2kg96PMQLWEAmTP6vpKTtsJ3N2hmp9k2Wydu5w",
  "key40": "56iLdWX784BAdde5mVyt8QbCEEQ3aewX9W28MCRht4hq9f5Uenux8N3aDRcyHJpnwWu6qK4buDre68FNHsePzZZM",
  "key41": "gpX1QKZz7BYZ9nk3pghdDJ58NpDPWQmx1Kmc5kR7qwLLKurYujCsB34dkPzqoa34qj3tqYVAPsofTLoktSqGxYN",
  "key42": "2ekStXV5nPnvo5c5DePqLWXj1sbR5ugJ8usrTh1YxxLjdfta2vX6hHREMVimFkFywGq8cfNWTcFdmHzxW3ubH9Yx",
  "key43": "5Ecx69oxwM14X51LUiJCtQ6fNR4jXRTquM6Nb2mnjDuShhCN1aKxNZhU4GHxhr3hAWcv94ebFGgDBodEQR1YykeU",
  "key44": "5UpnqvGzG6DHYJVfV12aRLNFSHYLDGkY1xmRRXzDRarMTEL7AQFZUvAooQayS8ZFq7DLVsksKDNi7mxdmCj5JRFy",
  "key45": "3xtBsCmMek1KmXEuBoFMHPE5jrXUECUmA6DzZALQYzfUasRP7U8pjWLCMUUV25rWRbt29NHVeWNNzXBxpyVUcJYV",
  "key46": "2sjCpR22gbwKeA95PCxZKukGNmEx9Fty1DEjoC6ECwbUpPtnaoR7s11n6bQx79prA67mVXt3EBkRmVDtsMrQQtU2",
  "key47": "39MLSMoB2VENkuwULm9LZkeUfZsrLRmQr9zXhW4hzQ9VU6BUcJKYLLrsUYC4dSz29VorrNyV18JAwNamrPkRsW2R"
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
