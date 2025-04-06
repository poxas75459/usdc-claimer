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
    "5ewPQHEzDTnPDN87gjD63w5sQLzQDtsNGrxNcGTjW3P21krDCg8X8vznDFF3wYwD5ELnsNJe8NQk5T3KFCnQu77x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Po7X7xdnb1mifSpRL8QKwyg9AuWm7VZZLLM3edBwqHfbMnZxxjVmwjhHZTJU121CuQkgTFHmwPPDMEvjPeKLgQZ",
  "key1": "5Nzpcg951xY9GxSKYLZH3Hee5is11uF6ZUHAmxYnUmcvVEX9MLCe6c7AsQoXNoRY3V1UeceFwsPCufNN4HnfFBgK",
  "key2": "5UdpVukFXjfzWUJJKKjyfaHZ9odAd2Vd857wcsq2jDHQBxwcVjFYaXEtBoMgBgZCAsgenS8U1jkEJy3jBWWGKX7o",
  "key3": "vW9EZjPTrD3XsnpAKXWAjecWyzYbjHoqCKYtgCTAk8WbBpBfrYh8nUxhMCy34HVS84Bsj1jzieEjFj6QjL8BZnE",
  "key4": "2fSfXpaauJJuuvosBCewws9Lgyc1zgZodhs9VYTZJ8vDVkGDRU9mXt3DcvPkjbwXYzxj4hxJhBR6zWrxLEgyy7fU",
  "key5": "5AY87u2aF64SRWowPrb8CsWtu8UD1ZmuPvuMaxYE1yCyjCMj23Q8m5XHBXusXTvm1X767tQDkLMm4UoFCXk3auYp",
  "key6": "2EL8oxVkcmx5t9ddTA9uLS1Gtt2FhNHVCMQQFzV2mnFk4STYk2zBiMRNE2DXXCfaoCgc4iNnigXsmGCE28bJVYtB",
  "key7": "2xKydYhR27CBuDWNvh293AT5Q5JmZvVAmCjpV23jqiLkNXYazN84FVC4rbETo3L62fUwER5EufCoAbCuaPSRretz",
  "key8": "3FnL1pWHNbG4xpmByAHLbkCXVaCjZBXoLW6BHeP4AEnkeQXww4B6MuWk1BasfBuR1Tm2AANHoj3HXYuSx9qxTF8n",
  "key9": "2vprBsbkyjTEkacAjjCqfKq5CwZi5FjYe42eEJfKey1LH11D68qZUD8SxcXcBbtkMTcvktJ8XVDUvbkeAyKUrScz",
  "key10": "4HuQThQK9EaR83RRzLNNzC8HL1hEHLVu5eo3bLyoHw2NaVRUiQDBdV17PfFghaF7FbUpQwm4ecg99B5Modd6oHzh",
  "key11": "45wWHCWhuLPXewCLjrBS6aVwMvRMXRRe4Ytp2fCtDGD8EjuU9kA68pjqg2oGxVWJXdduzq4hjGK1sGDPxjuF5d1c",
  "key12": "2NDvYKz3UJSzdFSPYJHrRjnCh2K97UyrqByymp7ZdPvFaXnM45P2jAnmPHx6mZGi3poRhp5U1U76YtBdX7BF8zYq",
  "key13": "3Y1uRvh9prGjGNtPU88Z8SE6o1xenD1LQbH9UfeAyaRsUndTjx7PdPiaFUvKFLm7vemuRpxP1SUgDtdsJ5y3tLA6",
  "key14": "4ETTmXmMznzQMz6SYPGMKDDoEppoLqJCBVh3HBHeRQvKpVJLEq6roJDCmpGvqi8saJc1F5Ujry57o1nuGjqukcpH",
  "key15": "YY9JVxJcEuuwFjZKwEkjrFDsEhifJqF6bjGBqENsZB6XU9UEeZByHkqHeNQBgPLzskVGRHPxmwzGNhShpr6sLWC",
  "key16": "agXuAUWsEvjFCxmAJY8hVCB4694m8DaDhv9qJTAqpDfisy2gjUpazzG2yrP2eHqcw5rdeBPRE4vsdPUFDUZN3QU",
  "key17": "2DXZHFm4byXMDx4Z71ofzJBHkR4h259ibGKdRt2WnkK2PNHhbQxgLBg4T97jUiBbB5hnLrDuWE6hVqkF3w4n1qDj",
  "key18": "2pbuTugh9vqmT46DGzX6RapK5Q4cyz1nqBhDy4oMU8xyQ7zGv8Qhc4KYeuJnn3axXGD1RtSAHeTSiyYDWBJYzXVW",
  "key19": "5X6UhmawSCXuGUcwmiCQAU2XPUWn2nz7g2nVyECwtyibye4bi2pcijze15BE8yZoXc78jpWDn2Ht1iXVRHqTzerD",
  "key20": "2eo9XQmWoCVRg84EFtRSaaVLs5XD5LgAHR3ZNkQbR1RugfhszwjyhHBDkP8CvfXTdHAsxHgk4jEcAzbhBMnotXgu",
  "key21": "44158CPWSUAYh8FhpDcQ3ZDmPXFQGaG1JSxbnacst2zJ72W5vMaY5u1ZB5tscKeLBX8NFitF1FFqZP3R5A8QpFei",
  "key22": "4DxhnqbKovvVesfGRgZo1vYEepk9N926YoyS3icnteap1k1Gy7NdWqeVaUu3JXEGPaamiYCB6bFpZamLbcYxdiJM",
  "key23": "3qsM3Ez9HYJCiXU7cB9qrNtUxeX3A6C7LSexNJmtF8VomKzqWtfoLft7vo7BjxuH4tdRBQYNhAwJj98AQMzf9oBX",
  "key24": "5LEN9oQi6Cz2KAE9dCcKGnR4AW7MMjdnTZp6WwAQwvJinEfpmfk5m4yEPw2xNgh2pNmuWS1DHX72jUbMnoRv9qMy",
  "key25": "4W6PhRq1jjpoU73meVpz3vb6m7beRRkDz4FfuDnopqz9ipyWJCct1NnaZH2J8fkXTTydvAWjXRhWfZgVEvLos8wJ",
  "key26": "2Cw24HVp1e7hc1cvibqMSUezQX4BxmYMVhhi1dCiqx8qd6YGSnPMSngJ35S9DPUrYmgY89j8JoVoSBTtefaCe9qW",
  "key27": "53JP2pLszuFTZxd2bnkjCQdiNFfzXr8BxqsrMfh1YRggAVahhRJdMy7Qoj7tfas5BYRpSrMUDDDj98nRHtJQinxH"
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
