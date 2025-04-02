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
    "4qiRZXvQxhgF9up2BAUS64MFPKNKyZ3dKWGZxapqdqREqS6kqdWeNML9NvB42ZAn1rPYBjuYukt8nz2qFspeY4wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmkJBdny8Kajw3Ya6dfqJqEadrDR3KyFx8DeKvovqgSo6WnxQyonko6sGxyZzb4ruCV498WcUTu8Q5EJmnn36j5",
  "key1": "63Ys58beFk4ZukzgTxkWX4grwimAxjejg2vqMDBARn9KEpmYpLfzdpgbEGpwQsiN9N2HcTHgpAJDMXYjyyXqkcXP",
  "key2": "2KTq4NZneg1Pk2rAk3Cqv98AUmJSTktHVyqMUexYvccVUxtZawyJNNsmn2NhtJWHfxAQdgxKeatvx1Tc3nhTE3zx",
  "key3": "KC42Hbanr67TDZNDt5wkrNoNDRhP47Y9gtmHyv2ukj9WPFmWLB7FnXKGB1SMcF7NFyCPJovV7vAYsLuMycnNgvN",
  "key4": "4dbRPxXpErHLhmoMqejEci6A21aBNw5pbTED2deLmdQhUjxcuNpw6TFa6VMiiiBpBZsT5a1G9GC2QtmXpXBT64Qa",
  "key5": "292v681SwHCDfJvhNkBEBQQRdYkurKpq3MLvzZZrPsezQpMJDkXwaH41hceSfTG7L8N4hfsFWQc2TigLCnpDxbxn",
  "key6": "MBov3mUnqEi62sfUZMhiwYPRgtTzdpuReuTFrcKEnG8V14DKzVnZ3YMjgVeXmyh72ydodtLLhu5fmw8FviQhiNv",
  "key7": "5rx5TiwWeYYqGdtP8ydsnn7zBg3n11581VWTP14Gt85M8gxSZMy8niqKkrjjDKRXk757iPxpAm42pN5Q9QXheXjU",
  "key8": "4gHNhjNerBx2kt8cWYkrDsMmnc5WvY6vsjsUW9qTuZWK4xkg8wtwjJdWhbe93r1A8MoCqiZ6Rq1MCesxRdFKd2uK",
  "key9": "2D34cd6YteAgbmkjKuqKwrb5seQLiTcL916QSArLThqcGPnY8jjhZHFzjod9bnS4RaPJUSAgjbm1u2yTqi7STqWK",
  "key10": "3rR3Z8mdDEm8xs3bVGZ5SFLFJGTMd53KCcXScaakmE6wGBppz26MeZHiVBRjmvawvSq7qRLsnqmXcRa82ZkB1fg",
  "key11": "2DP42yHQLnUjvi273tH2XQsYdUZKQ8XBykPXnBkR5VRpCb1eiadjLrZMNbXQ5h5HAAwCEBVpPfkBGBX3vpujKPDp",
  "key12": "3evDTsac1Qq2tYMTgSNZyBXq5ovcoZiWm9bwdLFWT5EPGshJQx4VaKCK3wpvZRvf8r1y1wutMzsjLjM2cvXpE8nm",
  "key13": "4RWjBeAf4Vv7sGzE91CAwrKh7zXNxowF4wsAsN4poQxYuvfsRt4KySmFV3qjGHpztmxnhxo2B5RRCd4xacdQeSPs",
  "key14": "3QHXDQF5qb2V2xHohCAPySdyjRzTDhapm9hPQVBajATDWgBF3Dh4cYfqviUxBLtj5djTrcRumg4aCNgMUPBqFP4J",
  "key15": "5e5GkWgVmDmhqYNJ4pVQCRAy9X8jWVJh18z93su55ShVshjhoz5ZPXVVxnEfRSD3W5vFqtpsZJzBxZkWtG9zU4C4",
  "key16": "3kAiZj6SvPEU4fb9VaECrMKiJYoR7YgjYwrsbwGxUQv4M1LSJK2J9RKHx5bM55FyZ5RfUxH3PkvEyH1deR7gLKUG",
  "key17": "3xWyamytCF3SaQb7GWm859UrceFHUZ1QWoFpfnGTxh1pW3ypmE2F6nfVqMf2VwWffaN96jeMPYrfGZW4nkM5dT7z",
  "key18": "HftYXqmu5a9Uwp4NzpntW1oBYMnnLtcNuBRV3dJaHbJtfytznHkGW6XLkDSk6UU6oH1kHH5qS8n1YbKTr9vjTZK",
  "key19": "3e8isgxDSdVev2ZenD4ePUK1ixPy1KSx4AC1ugc1fzzH4wzLDLcy6XcF2AVpcUdHwVupNUwZnMCx1JCN7nGU2ahG",
  "key20": "63LujbUUf6SW35FEvgziMJgGQAT9Uy29wiMSgycQPnQE8smBWiWp146MJRQuNnyhaPQtDcoBscwNaCUBqDEbm3en",
  "key21": "24b1ydhg3kP1ASFSdcz1ydzQPxKzfQyYEu33Eqs7dW8GQKx8WdvJMsEexFKR4nkEX3PCKSVg9qGpQiosrTyxzeNj",
  "key22": "2d7E5grpetH3SJDdW1rHZ9kkLDtkALpeSwoZnq98y6hcrscwYrsNpeZ9nM9ev469j2LBSbfvBYituHBSdSiVtNgU",
  "key23": "5SKY2KbMjEdSUfybEubjfyiQkBsyMUf6k51EdjSZwqjhs3wxiRTgi8heiFd2YaCJfmXyn1v5sHv2ewcnGhY9vK47",
  "key24": "4DWfzvTDQyFwpHfRLgBA5oANgALAnv5WgdfG2T4kvDhdTKMSgiZN8inhnpvG96zzJYsT1AEigf9kkQWZDcNTMVBm",
  "key25": "4GFXYAaXHuNjtYWcP6fG1FmFKoZM662qmermd1pXKC9Dj4tv767x3ZZbzrLB2FUx285xnJ3cXD848dJCH8Sn5ktB",
  "key26": "4VFhTJT7RVUPM6sgJCL3mBzrP3RSWAAqKagDSosTPxNKZH4WQ6w9QH5LA9eC7uPCCETDDzzaVYHb9iCtXRFvouZy",
  "key27": "3ktQc97HJ5JWX988jYSQoJdhwiM9gh6FAt9aAtUS9LwwBkmFQ2qR9pAYDNYjUzbiMchJ73DTEd83iKdf8mn8W9bj",
  "key28": "4xMfJeJhAQHeofhoiotXczeUBxwAbPwLZm3uW92rUZ4jF8kddochCzA9jSBDhTw1a3M3jYmkSL2P6iFNJgMi2FHy"
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
