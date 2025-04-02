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
    "39z5avuv7hMeDSHjbcau4UdJKBnZuh1DDxnPpv4rFa3cKhkq5HpLU6eXHdREH3W5ieVQWe3pWDwN7othcSFvjtW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCCjzT16WjbYgR2P9vedM63j4NhoYPvKKEEFpf94CV75LcS6cAr2JCUWUTEdddX96iqNTMp4wD6AqTUviijLbpU",
  "key1": "DeYyTQCCP3oKzfjPLdu2Fe2rYnAXmNRnVNb3XjniYCcLjY9WfVNUvpLeHjh8ixdduZE8QHXMht3mjsduiKRNU5R",
  "key2": "SYFZMYjjEYcg1MfTaE36rKiaeZB2Tt1WPmJuovdcJ7NNeTG2oveAd6h8M84HJeY2NZ7aemz4MiXdZDE35CRhjG6",
  "key3": "5T8ACcYsQ9DvR8XvFYswnn1JNcsUDaSGEnTqLZJQC2jycMXjfPJvCtpjbbKq3YpA2ua6DPE3WwzDz7RDfdogwG1g",
  "key4": "CB1RiGRLyjG7FUCNGtvZsF3RbS95Qf64UyKWpBR68KBPxTavdG8trcHLAG24eUFXdiB1Gr973uAnmsDteGWbCwH",
  "key5": "2MYfAsHFgRLYjsQ4uJHaDd7hnAqz2YXXE6NH69svB9RQUPC5F86vs49B8KvFC6BNRzjXbnxyahaGXt9cuHW5FhnK",
  "key6": "4YidzaSnWee3AeqAJKXz1uhbHUAaThMTbJfBdBLYyuEVnVnSzY7qS837eFiM1oWKx2poYGQrzGrhP5DwkAwg3bzC",
  "key7": "4PnjEkY6eJNTE4kgGzdRrfDBzyE2ff1PYEDe5ocPokKHk9s6yiGKTg1Ap2UUhFArMYWYZt4rnt3CUNwwRGVsMbtw",
  "key8": "2wAeyB8oormQVhysdxhm8Mxqj6SFy1jVc9jqf4hAojPDFBSC4VFE9yiqUJVCRWM1QLhtegyy9uUyycv2nnuTUDwA",
  "key9": "29MsNNKTGsDdWDYMv9FzhGkxuhZ38235XMdjGxB8NfNqr2TWfz5q2axmpFxjQDdoeYLgeYwgAGCBvbCX2vwMkyV7",
  "key10": "2PFgfmjv3bbnXz7Lh6omNZL7epSY9NMimJ14gSq84zpiSxxzp1GGEBPjUipgzWFsAaM8Aa2x5xp9DpiaToazjtDT",
  "key11": "2CaT8Vp58z7xLSksHmz97yJJKDJfgWygQidcwDHWXMyeu7L9yRqoW33uifvNJQDZ6D4MeQoqZ99ZWV3SyVRakTBQ",
  "key12": "47aeP6Tm7JF9duTAwvKgZDsTfMqjbhz1bM2unJDWm8gEtpLzGC2noxzXbeVgfmDJ5kcsUjMXHRVofV4D4ZpW2tpC",
  "key13": "3y3gJHzHtXEYvWjcSD2vFTq2tS9B9mZW1rXbBD86TVxNJEE98MQEhSXNHFxhuKKXP99tWqRw1e9W5nATi4FSLL7h",
  "key14": "4EtzZNRKu3MA1MFLiFrkPNFe9B8dP6QcGsbQ6CEVUwhreUTnuNPfhptTccZDsoXywq1p3crRGBCnaGqC4BQtomoL",
  "key15": "8pEuT1mkVaobJkToqNm7z43ZaZtgwXJG3wdViM82VZp9iibJErdLkMLMaWr7cwKFmNx9RdWhgrL9s8yZgiftKYT",
  "key16": "5vegb4sSqeqTQ9aYrZSKtKj4u8eCsmtUGbJvELiyFuKCjke9apg2jiyP2QmEwGEUA7hXfH9vNJHevvagsJXgB7Tw",
  "key17": "SoMitRdt2JZna4QdwUuVCfFPgmcZVgLKZCt9SMMSzJeahnF1DCwmRY2PD6cLRZ9CCewws4bakwsetLXUsaifvqn",
  "key18": "5WsrZMVvYSxJYy6u83DwXVW5BvfP1DKwzDfAZwttYbiFeUBNebR9bbVg9Qq3VL4Vx5CrcY8XPkrr12UvNjzrKQyn",
  "key19": "4rHz3SSq1tpvMFygCGX7ER2civPiwPF2c4dBKoTQgHZcRhCBnzzdWiHsfZ7PE18AHHZnq21d2q3NS1UB5Kohm4p1",
  "key20": "3ci67YwUQC4vyETfVz2mEVH8Egoi19TsKr5Zu4VKBqjY9fFg8rChkaoEww3scx2UYLBHJjo9jQcEMz2pGyhCztPx",
  "key21": "4ziMpewCyvmjzukt6iipZ2XF4gWGAEqQguWZVdzmAFfQo1UipSwC7Ty7hK2AbaK1XYxCMFitvj5G9ssxwghEbNQA",
  "key22": "2jDWXuEZKnAGLZF79dZYSCceVjosph2RmJZLV8GRGLLtPm4JX5swMoMQVNRDS2nvhHyAxRAXo8oh8v7jfFAXvGBF",
  "key23": "5uu4GKC7anMWHGRh5CxrwvHCdmvNoXdww4qrxuBfyuvGKodHmommW7KtAj8k5ZL1GXfQwKCAXHVox1f6QM4Dnpve",
  "key24": "NSTpbrAbbGZxeamYgTEFr997JRmrY4RK3EgopyQFemjCJFFExbJyZeSmdoPGY5zWMRdwCDmkdQCW6DwtPE1ZiRJ",
  "key25": "59B6y478A8LzueZshh5o6n5wyVAoCzMSC1r9DPQj3StCxs3A4nPNWB2pQ3LJH315i9gC7wxjxT5rasCCNf1QCeP5",
  "key26": "4mfV6JwMTWnqQWzAN8LUuTo8V6TGrQTUU1pxxa5UBZ6mgeLA6dSAuBXEeky2kLHy6Xo4cYnByg6Ret2RXnJmx3S1",
  "key27": "52DNuvobPzu19DbveyWmnWyNfTd22LGYrknQtdd7LPtyvPC3TDvFtSTNHbCvrqdeB3k8XZ5XFygNdfcWMtujnQuy",
  "key28": "4b1XD2LKiuLUhF2JHj4U7XLn1k4CciZH4T7QrhccxsjEHj2CCSEW7fiJZwnQbb6VmZZdexE3vYcLbJHWPBtcWrUK",
  "key29": "5C6v9fqAA7RZLMXjNhXfXUHwUc1etFBxEH39tSFJFLgZgmk2zwEJZJ7VNSUTqhLrZ2KPAeRM6FYRpcyzcj4rehp5",
  "key30": "3HMMCpUJ8xY6TzPm4Zw5R3tLxn3iSPdtMKeF8hq3RyrDqisHEh6shDun9oDu9XvgdLrYHmKd4uvNCcqReJWjWxiv",
  "key31": "1JPtDxc7Zsws4iNqiFKNNQdr8RXPQVyPkrnK94sDAD8Uuu1U9sB7Qiz8jg3GyB47NYxLE3kjbxDnVKGbXHFYX47",
  "key32": "3Exkp5K4R2CPB3UpDM7ZrcCLksgh8ovVyUi9Q8ekqk8LyfWeKGG8iCP9aLdX2iGksRDhKAP1C7n8TFrboTLRR4xL",
  "key33": "4WVZw6SA7TTdDDQRQtU55RadzhStSWbFTD8vk1pU3E4ZnL2L1cgauww3thtnhaPVcfHg8udMX7dpY3JxsgyFc3qM",
  "key34": "5g8w3B88Pin1FhYzpAU6UzifX4WL7kYnHLRXPcwu87tKCGwtFGrbM7TS3KA75E9CsEqsEPtTrwLKyimea6iVx1x4",
  "key35": "3Zaf2qSG7xZu2k5W4vKHuHKxsTamta1HuocmBxoifgBsJQ6AScye222J5VrU2StHaAsiKukswARzDyfCjvLwt4SJ",
  "key36": "4kLXvVibfMN5dVKFr8BWtFNisWhkZhDu98qGRaB7Cm3peViWUmWtPBemnsQoiunJE3jNX6K8uA1fRVziz1LLCjXs",
  "key37": "5XX4UMtjBEn7twThecNFdyGeHVkhPjepGHB3g3vtRFf7V9wqucZa5dF5G3Ne1ozUET8Kx8SV53yHDfGTt2rMYXPk",
  "key38": "2Hcz7EJY7chATvtWnQf8T3NhG9uCri3Wy7EJPrT4th558RwJ9cXeLnxUW4JbZN9dtoYktKcvBDfBh3R5njkBwnrL"
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
