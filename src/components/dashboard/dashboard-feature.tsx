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
    "3UPfMukBCfptXdSVjciLHoKwjX48fSL84u8fsjkJwjPdLmSuuRuM82HKjNyLpuRdkP2njBENLFj46btFmfYbom2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdfG3SiHzJw5EDDi7jzGbh3EspFpXGUbA5fZK8HRFnC7q2SfPHB2z53zA18JVLkr9rV6JzBQ8BxC2pg2yhPrWB8",
  "key1": "3Ac3gJLh3fxPW3rPu28izdTKHuG7nF22ssXUkKWjSBDtFUtm58H8tRuZrHNCEroar9moSvQtZnjbnLXb9hHFSjCV",
  "key2": "2b5a8BHcK92Tsu4JifqnouE4qpdZvPGUS2Nr7RFjXqwTzPxXMirm1gqASRA74R5wEdKVyxL4u3M5bE6jTSS1cgnT",
  "key3": "4YUqs7kthFHcUEsAYu6zL8skYMixrcRpWfXpfZAxPcVXmRzJS9KhKADCRqEZzLgEiHP9kWc6Qq74eWqGsYCBoZwV",
  "key4": "2GQ23WxmcVo8f7LcCNvwmtYUd9rGZWDajPM4jXaX55p5M9yoi3xQpvXyAaNSDpopwnhtY7ATsshxH4AN766TGNHc",
  "key5": "2KJQQhbNhXfKSBGhmRQoJC7uQPnxj28yBUcts5Yv9Xvd2FYzRAkwAMvZD5rBEED1fWpgHtaQXDfEUJkHddXiWbh1",
  "key6": "4dfxKiSzqr3UL4c9RfPk5qjhWrxHmxAVhi7sPNcyLUifida4w1Yffag6YexbfgAfdhshUentNLYtcdBctEjzNsEG",
  "key7": "5vowkYnmVuhFhM7bttrH1ya4JaiZ9cf3iXQnytT7YyNDajpwjDX61SHVSKh1mAeErr3bD95dcdb1vEVyMdifbHkV",
  "key8": "3uTDSZjDbMR5SQzHETnSsd2Pj772TqB9FGbBKWRhdFTqdJA1CYngBQBnLsb1erKwjnSXdkUjonf71A5itmMYLAzq",
  "key9": "3hrMznbVp9p7WYqjA5GDrgxSpGekRbdpG6AQk74etns2xA8W63hSgwV1WntBYbBYaRadeAbHsfadyoRmayrHZPZA",
  "key10": "57Dpjm5vkX8VrAw8PAuCqYsmM2XoAz4KA2V1KzHetfHu3oHttj4MfXKS3BvQ9szHCApAcjdy5S1sseyF5i4dRB3D",
  "key11": "4yTy754BqmYBwTjE1zKcxsnBbwWSpPjCsqdLvxaxQX4UnVAi7AmctLt6cq9gdobKo3FpUmMf9D3dXq8KNr6vQ2j2",
  "key12": "3XMchNLo7kvzN5ETqYaKdHgveAedsFqxQMJE731F8ngReLeqBMc2N3LL9BpKS6trKrZdJbik6Z1Z8sTPCqUQTdRu",
  "key13": "3rL3vJ7ccAmhe7amQvjL7MmmSQmC7V5g18B754HKJmahMZMQ3goWj2mcTASz98j7tkTvaqrR9GAjuyNGjiyWFNSh",
  "key14": "3ykM1rr4aQTA5mWZVZC8RUjxNsNs7wWajrUC7w3iNn9FJWWvSwCzi3xF9DYhJ4URSRJ8hXMi8Hqw2T4b2wMHTaEA",
  "key15": "3CiPbenTyPjeVZ8CRSUWfUKpwKFmGoJ2iXijmjNrLfaUogSzqwTZrLAjkZWFo6yrz5tJQc3FLfjsHPwEJEx662Yf",
  "key16": "4KuuELE6nQ42To7BmZ4zZEJd5VWLHpCnNxXKhoDtKpMgGqqMhxd1UKkm44ARoVp6CXQsoxiX8eiRFeRwRjYF5ETZ",
  "key17": "4WEVyS7zu3Niju3dvXqYpGbSnjP7GbUB3eirupU5fCQm8BpagB9ce3Ua7H3fL3hngiccMaaVfkk1sTjhkbx2EFEL",
  "key18": "3aMKh8R739BoHTae7mJqyxAvPFaTwW7bkFt6CAiQoqh3zNKCMKpvBbZunT9xhVXPA15Fyzw121uKSKHf8q8pK5V6",
  "key19": "5xSBioXc2TW2DtQkS2chujVUMTYDMUvMmhdTPLYboXwKEiR4LYvWGcVteLrwcSKQdUU7S2cBoYJkGCDEGKHETbWj",
  "key20": "4KUXQFEnMe2aYKv4auE3dAwmJorcKgK28LxZydv1jLDWpXr8YpGPSyBJMews3RpWFPSpRehzVFUQdeVwtpu9EyUK",
  "key21": "48MbR3uTkbJNXX5Wm4ghUoXSViWmC6Suduemednns4iLtMwV6MWEn4U7WasbVEvk81iPDJTrQBpv8xCGX2w6GQPT",
  "key22": "5pt4LkcxepQ5zVp1Mg6xnThUESxkqgLQWpb5xeqwe4faYkFRCCBmMwudgWiMjt7MJxYUa2VAw65pFH5eF55ewa6G",
  "key23": "BzAabNpK5A1jt64qx7aRJK5Sv4j79iVLR5eajWW6XEHtiLkCDzm7E1HCbBUKdipWR3UVErcpB193UDKwVhZ7YZJ",
  "key24": "5Bsu9Pcb1iVrzxbqbxvjCpDCrXzfopveP6v7jeDvJAanvh49NdTNN1HTBy4chr2cQonQTDFWogsjwFQfGPzk2uTH",
  "key25": "5zDpNemNVsP3U3EmLkyAMK4Pcez8feScrpuHNzqeeTT2LGHbRG9s8fMNHjJXVtxF81KVp8Twb11rLG5oygi56mba",
  "key26": "4bVrHrKzr9SvdiYqyzArbgoSnk4yw6WTkWHrcSX6J4ZhBm1u24e7VdS1P4JxEkFbZjttdny37JZWQYrWNVugp7Wc",
  "key27": "2ju9xpFxzfnNUX1ETqPQ8rqbrzjiS2ULNYfR4KX1HuchWwp9E6Xst9oLzq9NRNxo4goy8m6RuJyen26HvshqUCyk",
  "key28": "3fbyfX8vmrt2DxQWHFNZLhUvXfYhESbEPXaXYqQsz6i6GziehHygBa7uv59xsdmSPysc8d4SDL2ZB1Hqi68s15xW",
  "key29": "3jVsWSPzNWvrVhdyw9pX2cumzmYa7QGxiShRzT9yKBewnncEzgZktTP68BxLoMHcYhw4tEQJWDJY1e3vUePvLzHV",
  "key30": "JdLaRxETrWA9pYkiXP1fQJgmf1dbuvxxsdwcx8FbUFfoZ1r7sRX7xLC6XzfpKGSkvXSV3DaAnvg9e8eN4QDQHQg",
  "key31": "bhcP61mY1PkmnLmCmB2ge12k7ZXd43zj7zXwhcLYSqyMFjgAWEC1YauUw36B5RnEMrguE3XGcGuf2A4zVBk1i1Z"
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
