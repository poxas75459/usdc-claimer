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
    "2vUPLp8uyNwbSA7wMY4Z4u2WtzJWrwBhbwYrfXQUj3W3QEqbWe6mEZoyWVgu6AaaGnedLF4UZcrHVcvKQSXSrqL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmg53SexFSmvV92QWBXqJHFrxkrFEKt8oARVAn34K1CV7NUQpqKhBDqVLUDZTN3N8ycswtpM2M6aF6QP2q81MAZ",
  "key1": "5BcKPdhAaH3B8VBdoHZPT1zHPL8HgCBz41FV1BNJYwkaZLM94y5NnUPR1SKuxscu76RNNcHyp9Q9SvLUpT7sQVyK",
  "key2": "3hHVdfoBJBmPCqQNxiRrGbdEZKo4XbGPknRi1Rs2VcH5DG4qG1faJWXZJnKKKuRiCpfjrsPRfrSBEBxznXj8AKqZ",
  "key3": "aBaA6TB5BVV5zToYi8KBEi5N6YrXqawR2MtBZfrHRucTHL9tDzg5rSKyU3VJhJueJ7H9TJyjS7Yk1Gj4bsauX5g",
  "key4": "3aSs4JzCiu4ZyKwUrth4qgHNM7Qj96YKAAVhmzt7cwr5UpE8t64k8Ch8xsL9kTjHD8xNbCz6RzPBdZjvuYcySq46",
  "key5": "3M4JNMEFkiSgA747LjUo76nfV4hhsK7vYEJUyFCyAFitLEHqqEwdiVVvE8updmKo87EMeUiPRdqgTT5mxMDfhFK9",
  "key6": "2gZ2TMjVv2dqaRirLJLqstyXYETpRHm7zLRjADErTzNeUwE9XPtj8hzdzPRdMqogfQJVxF7TQsJ32fvFQ8LT1SKe",
  "key7": "52UzvUVngU4jj6trtWzywr2pnD6NNTg2G3jNVimox2RPr22QocEGeeGqymVLRE9akBJ9KEPtSoXECjZ8uarvJkin",
  "key8": "3rDbtM2V1J63EJcoLpUQ15tJ4cdVK7xTPjuecpWMqZacU1ayVDhrE56jUWkUaVcd7yUvDt1BUuDfgg49x1dG2QHy",
  "key9": "UAZAxqSAngf23MohiR1Bw7jwFyxNpKA2Kaiu3ETkLVKHqAZoWgTgMukT9QTnUzrGcVqMZMsqeLWVwGZYG8iLcYS",
  "key10": "V7ZJEVatqt7Z6vieiD8KeF4wJAcnZGNtJfR36RuPQytmFLsKikQbns6sVBnbfxTPMVqT87MaVtaX8orS6b9JwyQ",
  "key11": "ZDB1zyRzvJXRPkZRhcwH3CaH2EF1Q8RF5pDqF8UnoAwA214qHkmMyw6BNm9QSSAyvsPXF3jimofeeFnXE2kUmew",
  "key12": "2kMALEXTHj1i1cc12DBazUX4y6fpaxMKg6PParMfBYdcSTeT8GxdfFyRHa8pChoooUsmA7R3EeWUcxy4YobzkcM1",
  "key13": "4MT5qb9YoGzys62vrXj3pQCc1byVmDhhTAvU6hnYbSGprT6pXhh2UpfwdpB4BMXa9d19XbRT9r42ZZ4VNXRBdu4P",
  "key14": "4FbP8Zj6D54ktib237RkR93NSHiy6XowokY8S2LHhJLTdC7bdjFEi3u6CywHDNaCWHFtjeRSRk5WVMenjjtzJhLW",
  "key15": "55KMVkujE6Rhmq7GG7NXBZwFBp6RMkyS6QrCF79HPnBwGgnETaghFWpHnHGFt7aQ6WiAk9QvqkiMpSrcrdWKFyiU",
  "key16": "JWZ73UVSDTVnXAkUWEfmxDwBySLVpZMEhJguguXUmojepvEFjS5t6KcrVZ7eRAmeMcEDLH3d7Qxd346eBpwbjYj",
  "key17": "61JU46nmggVfL5P12CW7EvJMCAk3ca4nE4aZXmvQ2t2h59Cvx83WLyHknyvWt7zmSQkbGtCXv5hjWAus5EKgUxK7",
  "key18": "3xpaJPGwnHBP1rCQcBSVzBndDmpNdw3c17XSsPP4fDn7KF52ygxnYBXAJvVEybebnQTyKUH6aDp8FiCFPSWZoiwS",
  "key19": "2iUCfK1aftURuZ8pJKbpa3JpCUAUyKrUKzyjfwDbeT7CjtZe8FM7ZJHFu1nfzoqu2hnsyhCvypBfn8F6v51HqEDB",
  "key20": "3StBUrvne3JaiLFkwtCpWgVMJpcuipdGvJNRw3H49HPp4mnKaZpBZQDq9dFfwB3PiCAR4CetmvTmNgJ2LVVUT89p",
  "key21": "ZEcMxHh7qvVo3TKPHXhvVoyeUHEkeCnGdqxABy6za1UdNfHiPTiYxg4cmYrSm66KLbFAWfyXjcYdx2qq5xmSLHy",
  "key22": "39C78ofaqzp552CcpjsvnQ7SyFqgSZtA8DCtaCEGM8qGqABnf9NztJiPwBQctwHdm9FJAn71UgUHTkihxXwUvMY8",
  "key23": "m3gf2TiDxmiABHXxYZw88PCkCYhQUKf8oiSN8zGyaD3gZdUCtmyRDrp3SpC9zof9yfdyyLoG4mxhU3yPZyGry4U",
  "key24": "3yVzyDEQWF6GgvXyKNjUGy8qD6SYgrT6kbAWXYdSZqCoTzwKzWV6hv679hs76GvCtga6a4rJyguTaVdwZ2TR1GN1",
  "key25": "2w3P4U3VSWEmtn391EE2WF5j8NmLTCpo7CCvZsERwzLfqtixtKrNQWE1Hsd8wLQMJDGENfdhknKUWKSqTYqTmAxC",
  "key26": "3AZWUMijcPvHFxMnRfoBvrTvd8tBybJLGptkA1JkHWLbLTft53zqUePDsgyfPARvQMT1xtwfLqzih731ZTvihTER",
  "key27": "4uFxR5c2CP4sgA7HXQT58gDMjLZ7gMCwGcj3nZMusjNN4rBvcsEJLyaBYcVkG5ufn7Tm12X7zWWCNt1Kd7e71tYF",
  "key28": "3LcMrdLEF18NZXpxaibNbvLaQUd63tpn61xM4j9gnYqhPzE6shD82dWTMu7sLn7UQnvQM9KsTAazFDcJhgvPE2Jo",
  "key29": "3YtqE99AMfbqcN7WAi7kes2c6c8e6u3EWN8jxdirYEVFtUKBaw7uDKY6ATJHv8XLZuFWjP2UPXYnv1rECTz5RuGK",
  "key30": "2pje1mcmFV44a8F1DoStX4gBoUX62f8PvLsxdbHxXAVAgT5aVCB3M4ABTrvohqJUNEVYcHpqrqsEd9QDYSpUVoYS",
  "key31": "5cifLashRJkgovxWYPMbSsBTEDVshBS7D6x5XbJboDqVFABZcZ7VgNiA5MttWX1NJUMVSG8FuL1UTWPSQYNNAVf",
  "key32": "4QEoCDop5EfxoxMe3Ry7vMvdWUdgojNXcNr8da59rFWUX27msfwH3MJ73e9sMZA5h7bny8wxt9tViWpt3V7zX2XN",
  "key33": "4LEfgZVB3PdRNs2kiXaRJYrhpt3yJCmbqH7WsjS8cA9jbKUbTh1HbQ2QCV7Tf98XVUefbRHooM6yc7ue411ANLNE",
  "key34": "38bVLLAJ8aTRtuvRvbncp69PH1hhpXSzZfaGuY8MTrqcnPDF6ibL3WRwbcWcNWxcovfDzCEUgm6JwX7xbrFKUZP8",
  "key35": "4utx4ZSExLFdmTnPiAjyW7sMnT5q2PUcuaGFFfD2uoPzxUKsKFsdSmrh3kxBhHKx7ZtcWjK8GFPdPPHKdXiwfe39",
  "key36": "5pGF2s8K3viZoNeoHAjg3b7gJELq7xVUvvJFhpwDJHciC2ysxKD2AcXf7Mcb7CxU8NamcrK6XFEa7gvQpqvCzE5n"
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
