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
    "4ALaLr71PHLDt2TK1oL69TLhVEwA5UK5Kcfjxx5R6Uy6bNzujqbGPEXKAViSVJbucPZuvk7VNUYcTmmd4dz6mnYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeTGwdMVfTR5jtdRE2vMqrrpCMgb1LL8P1B9ADdHEoPoaRsaTiNgiRDpuzsX3ZQP1HAGwhMYsS2WfA5pyh8Rh74",
  "key1": "5K7fQ4zwXFQxarjse8ENR3zSsRXJ43GXM1QQCLToCXvkCagdHPRVcuZk6EhDCcWgJE8QBw5gjtMHLYeyq5N6fTVm",
  "key2": "3zGPXwG1Ujndyh6aZmbLz77FehEZKkLLiNMMEC8MEvB3tKDcT1D5oCDq5GxVDARDrXZD4jvkvi4YfLxjQjFJmXn3",
  "key3": "444qfBe7BBu1jHeQf3dQcrbrXJmZbQdJow9Z2rj93qDCMpZh83tNeKFhNXoNfoXw5MFu5NFJgny3cbydyAaDGRk",
  "key4": "5TPkZ8WMV2qD743gxWkSUsAqa8UXtckvDjy91aPL3GCQyC99WuQsbBpDhnQ1szLDiCHxyvtEdonrGqTfzHcvbgaZ",
  "key5": "2ejxFy744NAeoxThhLypNPocpuYNj1gKsjyzQad4DQp7V6CSzQN5pYNKYVnhHrrv8Q6Ac3wZPzuLseLWuP8gMXK7",
  "key6": "3GFHNHoUCvwe6WyRHhQaxjBn1eeLAUWdTvSnXCeaXN4mGaUzHZiShYHgVjYtcLncpMSutw4Wxdhu3rRXsvHXakao",
  "key7": "5dPiEb8XuHUVafW3knL2UZv1CA59Q4L3BY4MDJyboF7GA5b5cmdA6CqGri5yRMkxBs9Jzsp5j6ph11pKZXvNKwAj",
  "key8": "42sTZF9knQEGFS7iwxnzrfQwmt4ZExdggjdjWpp3RaG7ipTSV2htQUeHeAGaNyK7NytGYPP5iAaT9J7VukJPAQs5",
  "key9": "5jUrTJCcZpf6Z1wof6VSaPDixgtsCSEG1VXk1y4zHKHxKSTYvtPfMUF9nYNEKiiojtkr1ok7TrKtqj9umuse9WTK",
  "key10": "5omFFtowEAd5sLeyHRpSXfYh2z5whmH6MxsVp4zHe1FFxNKCbtjX5HZM4s275QzuDj7CohXHorowR4m8abroiTY7",
  "key11": "Zo5j1A9ZhKM7CGy142soaKQnZDcmjvdLRCUTZ4ZBzK82sESN94rwXe54x7e3DjavcXgvunQSWzzXpWQfoqgsk6V",
  "key12": "NmGhCWxwtM7SscRNFRe82ypX7tynASEA4xJDVArfv8yfkix4LqBTkXatsrJZg3oakm2djkKC1FoCXcjCnYYWEW2",
  "key13": "4YfbaStNZryiKcXroF4zpS8yh87JgNcrmJSvTLqStU9SUjYmnyCWREk7SzBjrWte5KNnNLKbWAz94M13vxzxD6Bb",
  "key14": "5f8FytW1SW2tfStmfxWbjeiM3UKnHPazPzQyCbaJgZ4BRFCerRSUgYMKF4GW6hxaMtfQ2WhfsyVePw676iQ4hvvu",
  "key15": "5hAjbxD5W5uL5UrLAeSFWQiha6kvDbtw7bRjMZtuGCbLQBFqM3gL5qp9B2pssuGHqKSvCTShG7hwTmQ6kST91rwR",
  "key16": "2CrQQvDpN8gVv4EoPB8E5aEBQerBXCa1BZkwZ37kTjmhd9M2ikcVafrqhnvh78mhQHysLuMrHLw1KpCJv4S2Mgch",
  "key17": "2zRLpwcQGuyqNDm4GtkPfbHbDodoX2deVN54V54py1FqdViiPovXCp76SG8roufEEKULUHPkwXHoyipCuztpG2mw",
  "key18": "5F3yZbsq5XwRmGA9jyBXvuyfiiFgp7ALMYYrvRAef9UmmXj3fs4zTbwUyDgdgT2eJH9PPYNtgJnRWN7YiMoV4ruZ",
  "key19": "3Bjvb6oCCBVVBwtTqhK6stHVdSmi53ELKUUnoWNteBXgwTkGda5qb9y9ZCMjvz8JjMtLe329UYvQW9K7Z9NMDAYW",
  "key20": "4tgTJFrhwxz9YhZNur3AJWz8QbJPPfaX6YuJkgQ64AtDBDE7FX3Q2VE31FoxZfYrDmWv4hS5rx2hN7SYd4tdnAZG",
  "key21": "3wuKF5eBdj3DQmAFXsEckJgLeMFtH9qeXL3SkS9DUGj8bBjnmDZmGS3AhsWahi9HhDa15jN5uPzJo7DaJ68MqHg5",
  "key22": "2rHxQdpobRnTFUT2xtwMX2KsboZKqXddPC349PyAKy2tftzdmZBwnZzRrzu16WanryN3YeLPcQt4dx3Twv6TBuYp",
  "key23": "cV8jbM4GE1i7hzUsaEbBuAfnp94LS5NjJUhxwTRSVaAu7B5pTuVaB4iTV6RrxDWAZMXMgGnhdXu6dfn6YS5pYNW",
  "key24": "37AsN6Jufcsi4AGVWtJGUMU6bHK3j6yfgUpJqvPVyo8LKFf4vTzqmvg9EZnTgoiQEQoi8tGRUfYUs6DiQFUi4nA8",
  "key25": "2XrPsasSTm45TcHvtxUwyjA3jmoaa7bcJ6hqkBFz62GYyF7yqPUnXhGhrfEQeCHNv56FBE6XvFxMkJoZSHyMBS2b",
  "key26": "4KNz2eG6JzfMW3aqavd4MAXsUNX9jBKjFvJzo8S1GhLGit9e3iYWKY5uWPCzsZa1X8LTRYbHwpt4o915FrPr5dK9",
  "key27": "57o1GaZGgu346viYzKCyv1ZWWAGb5HJbxJXkwPvFUWjmpC5gxs81vGCkbDtk4ZZe5RCCEm81zGJTahfZxTo1Mba9",
  "key28": "2pNtfZ2frKVkRqDVqr6pA3EsiSerQWv16ojXtAHqtLQpFyAtF6jjNmgwhYH4QPA3TrZ5MfSfzjGtyPz6epS2SaJh",
  "key29": "2WDJTyrD512RMggj7wDJNRyDoD6f42AYmfrRk9K3xS5kJzBM14uBkkWcwttih2T7C8VDLETjvSzA9ukemGFedaAV",
  "key30": "5oRBWLgprv5BA6gB1SMYQQKdHqSc8Sd4VLj8V8V5bgGWaXhM9tSnv3F4rrHT83sVdJXWZHdWWK85wEkzD5MZYGyW",
  "key31": "63s2RdRyeEbvyJqB52YKwbf7yuFV1USnoDezyBeMdynJoRdPh6mycmR7DnavEoQCCShsYvKKa7YZna9JQyjeiiNb",
  "key32": "5ypjkwmcK5i81pjuvzQUssUE2f9qKdr4P7CvZHKFi1hXYdwc8AeW11214kxh5wBuxjKBDQ5DnRgKLnzmvUWiUJ62",
  "key33": "8eaEw5HCaLPLSENv69rGKapBFMshY9njQo1ckdA31eaYAz7J8Zaufd3PUCuuHviHPJCaWmuU2T3n9WS1tsVMMWX",
  "key34": "25gvVz9ws72kZxeeNjLR4zhGGXtwzeicM82r5qKLEZn4d9sf5g21cek1oyrKdeiuMJ5SvrrsAVWK8ms1wfiJWAk5",
  "key35": "5iKWUmbN1R4vkEx9PByEioicxi4tmNfWJsLGyiEWUacNYJ567CWdyQ9jmdjBeViD32eE8mv7iVoZyiqL6gzJWJKc",
  "key36": "3TRqAoLGQnZVRzq9nKtixh3vN3s8NyZpaV89qUp3fyJAcKEeuoxMpNFkFdJCfcpceiMvxTqSMBN1oRDKsYp1Lyc",
  "key37": "4y9NZoERnfwJ284j6doeVStTN8H28FPvTBR3FJ8zYbtjs8CWd8GWpReLdwFXHtJVoYzVHEzeuUaBKmk9EHy3BtL1",
  "key38": "B6n93zmhyGZhqJixzNSYRn6QENUUTmf3TMtQMYujBUGYaTMQR13vhWsJCX12rA8YCctb2563Xb2rhWTm7WYBomR",
  "key39": "nR8AEuPW1hmtqUB4ikNR5FTD4kt5TsGdPr2UrsFDgDXd5G2dfdWKmNjRAgAnucMpQCHp3APcGDy3nmLaSjsa51f",
  "key40": "3vsk7Sa72QdxeRjSkQp8S7hXwyfsbRtVg678fmdd3b2NUwQUoMzDx7ouu5iYdY8dhZAxGYqUoWQkv2zJr1brP7tA",
  "key41": "4dSLqGoeYEdQGArr7kXRsyALL1iRjorHxAWZ8TgSBeeCQYjUJZTf76fPELjfT9YLcmXg3LodhgvNjaKmVDi52EUx"
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
