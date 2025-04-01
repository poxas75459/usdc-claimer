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
    "2KVTjFopJx4gHgQq7pNapvFYaTePGELnYQxDuMzQi5fqHnnJTeP9X7EW663j8ARm5UGYC6bPXKVF2wEVxgt9jVvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfnJkGKcYqJ8Xv7d6FDkcwNhDBPESKEf4MikvWK2hSBRjDMcx95ZrTWyQKsAxe89AVSQeSTfH9hNSX7CSUJK6k4",
  "key1": "1fXsFTBiK2GwqaspzDeTB5JGghEbD1uGkj2BnbaDna2WSXWu3GZUFVjX49j6ZWnH4SngFtganTm4RT9PmwvrL7R",
  "key2": "SSSCoLK5YaJ8pAnmQiNVJ64XLtoJZUEhH15Z9Pg8aABVXwcoVco2TXfZU89sMoYtPY6nW3GwnqBfY1RmkYnTay6",
  "key3": "3kWXrm39DsQZuB2X74AcFU5B6d9XjzmpuuB7yndUD7ugQaKqdHrR511bSUVkRaSmJMsckvkieTAXB6tVWQU9Qbvj",
  "key4": "EqUNyF7DriFxEkVo1d9prv9cj83gXDmwNa7eLi4XEafv7qpaC94TdEhCR6MGKnnYn4HiWXqx9kTvs4dzeJ1szqA",
  "key5": "26ffkYD3XsBPmCQsWaSHQWQ8JtAXcMZLEXS5ot6s6G2E1WcyRF3B2vWGZ2k5wLjGBb7TWhX3rnHchrDyJy6fsQLg",
  "key6": "38bRBV6HqPLqwkEwPNxcAdz4KVLJK5b69g8BZLqvGHxAhd1kSBfmyqyZVgMmzkbKD2eE2KaoRz7BbxkBpv1miA4z",
  "key7": "27ziD7iEkoMsyHWkoK2cceqRPxK3NsWJUWStCBWF91gJKToBsZu5rg3UGAh8cyxsyVLfCnumqYct1aEatU4KMMGB",
  "key8": "JJGTRzzD2ewng6EsZHuazYK1XmdTcReHqds6LuDY32tcxav7nUoL4yfhWvwrx9vxJ7ce4FDBzfZD1UJFDCKK5HL",
  "key9": "3yQ5XXgzT4cSGH4mTYpDcoav12ZELm7VWSJPaW8heDRHmfMWkHLkfbGQNNbHRb5dDj7er9ZnKrjM2Mx3PFbqqRYz",
  "key10": "Nzkk9pk18n3DDFoZmMdp1GLN33V69cBMidiPHnNQuhHwqku5WGf2EWaN8GVePgkaJWYAzqhECddDnhFE6cCpNaP",
  "key11": "5xTavUVWZeiJJmHR4E9uShnWSvNRYJrvV3nPnGRuF5AnpkzDGqwLWj4hJMYzyqm3AfnAGYeufbDHd1etS3536JFV",
  "key12": "2NsFgKKSZhSuPurcmgQfDEBdvuneKV5LX8C5vWzBt3rHdN6jZxZoNWkoiWDkEPRQcejhB6h4RTRL66GZAifW2WyP",
  "key13": "3k5aMU83tEdrCnU1MqYcWdonEnrqTsAMa6zMvox9TZ3uFg3NfY7pSxz4bPNRynPcmHtiRESPUgb7YPoyzv5FfvxF",
  "key14": "5hyD9ahpCcswxAHkG1nGtc34fiBBKPMk5YR6djLtz99FwkjRVxqdDVFPhYd2UAyk4WZtn3wDXmmNuLiRwFTjqNNt",
  "key15": "5eiDnWQU8crGes9w7h6ZdB5AMpwRyQgdheVmT5NzU34dfV8LLiwgv7d1Qdktx3j75J5eJUp6E8E5c8oyDQACQSxG",
  "key16": "3JMiskbGjF4dyEwoF8tQ5QnsMG7FsLPFZkat6FTTEsVEdNY4DA6BSPY5SFgpdd3zvxoe8WBMq7TitdzjZAYmiNh5",
  "key17": "5re9SAPK89RK7PF3eQh1t2Wp3PjaXTEVhwxRSBZu29rGB2cCxxYCkqMBHVWnypiP3AXMGwT4VYzTdyvZfUjU9weP",
  "key18": "551RDRW3nWwGMiTs2B8aupnZwYPBB8vbMJopEevjRbjyZXdhy5TzH2Z92GiLcoXaMiEhB4AWHr4ChCEsqz4Ue2dA",
  "key19": "3BgsPAmC5JkJEBcSTUJ9P1S9VKYhUTXp6poeEfv6z74QU1e6zHQRTcQB9eDfgtNbP6FrKFK7XadhW115St78z1Zi",
  "key20": "4F9HSaWfQphw818j3aTTkoQBN77xXdyZ8W8nxMRi8hhbpA86e7VsAS7bWzeankMqYitgPfk51shc4UoJqpChzSaR",
  "key21": "46Edi2gBGc4n5uvVQsT1ks8pHQjPqkSikcxbP4fXPZUgSxozNJ4CgkethF63Net77qnRBEsoUZdnMfVwx7umNwm8",
  "key22": "5AVQKPwtWZSZGmdtr7KsbGAmf2pgNKJ1L63cNQPP36JY8e1kPeopEYZLhCD3Rzs2Q2ogfLCDuk75o63FxURMpA9A",
  "key23": "3AUnAdhkFchanBSMMevL31MLn5iPZuWuHvFoFJAA2yHLNTTCCJ7YrD21pMLfTFiXQjRtujhLmj1AMmKKXXmRg3cf",
  "key24": "vLfc3xpqJyQGrJHVa2cqPoG8s4PuFNPmS96rQxgbLrrwyAeayoZyacR6EhTezXY7TzfAgNbekEKPqyariEE69aB",
  "key25": "sqmhfNq7m7b2GFKa8oW9X3RSX3hCr3X53drU9KbmzGjoUGnjjKWjAKo43mxaekeHDTFsUv94LcZbbUCVGiEZXGN",
  "key26": "24G5cKmjXL6oYpRUdbAWCoZmJY9bFsXtQXp5LnDuX5rGvZKosKebdAmzWD8Y6pH1DCUTCgBxHUozesJR37iNJx3P",
  "key27": "4WCj93YM7Hf5XVkTskuMPzxafF2GyjfuzmqW6d84RiY6P56WzXdQuksSsczDLyM2UXd1CoRxiSk4MY6MtMj1VD9V"
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
