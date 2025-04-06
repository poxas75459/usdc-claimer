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
    "2zfpPy94jGgVsXH32RVGt5Bxgk2zhNTT42YmJt7DX3rg6eacSRnnWVSaBUK7NDnvuBj3y44EPkZpZJYuTKqTixJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rR16y4LvJh8yn2yKRfbFwyz8wwWWv3dGGkmd8kGpwA323JNkskb7AbRdHkSQtdjiMH9kQkxCPwTwJaoVLGg18Bg",
  "key1": "oWxi9XmquxXnnGGb7LW8bzXJxvFocsV5Kf6wU78fJzLoQpU8TRgTiEC4A78NQAgx4BFjc9ViH5PooS9QcjLemrB",
  "key2": "4kerTxuJY5DmUprV3iPmhXKXFdxcvD5S1YhnYWBeHFLRArYdhDyTU3demjDguEnoiBRyUUTPUV7aLREuVREoTTCS",
  "key3": "4g31a4qUWM1MF5XziJwD9yqxACWWKVHNpAvTTcd4o4ZEiRkZDQ2EBYG8E1KAyXGiiQhzkNZKrDTkNSb2ZKor756U",
  "key4": "3ygcrN2R1pooFCgjVWS3awb5SRGotzw1BNUjsrTmiF7Xf1s64TjBw394nWopYgn16UqRFyQfuZJsN4HUhJemJm6V",
  "key5": "3zLP3KCpHy62wGQ81aQAiPG9NBXvQN8QbLCq4dfzCeknhczNmJ1XUtj7PA4XEXWZeZ4JHpZD5a5rz1T2tT6e8cnd",
  "key6": "3rbTW8fSyPJSc9pj4BaEMtM4MorjJuKsy9kHh3S2xuCiu1Aj4QjDVv1GViEpPwY5ywPUpMN7RfqA2P9u2FfbouH8",
  "key7": "3mT5cdttfHRcHZ52hzWMWDhuM8u6gdqNredk4hk8KmivtpidscyfmQqFzeYUG3ZUNNYNgU5c62wCmQ7wzE8K7vEU",
  "key8": "MddVeunM3PZNj55ErKi5PuV6eWeDvXuHT63ofmFsAhjbWxpQ9Xy6DeHyBrBmj4nG1DvLo6fAJiveyWKbVmSPsWc",
  "key9": "2u419ceTjAN6GZjRAma1a8Wmgc9EZaavzc7qVRfMasLbi6LbVfheUyW4miqNiDs4HHjB3uzm9GKMn71se2d8pxqL",
  "key10": "4sM2DR2zeEZECbdTR6aQ4Fu5eq4XwF9PeFcVVFh88SSEAkRMxafz9MSrMKuVZeYLHdqZgaSYqndxQDPxwWqrB2MV",
  "key11": "CqEst3g9W8utXCK2HstSdFGcBPuPYKGs5S5oFQTbVYd2ViVs7mxkGGoDEqoPjbCmpcoq6GkuF2nUB9sX3dcPBAQ",
  "key12": "5zneAJCjYjtoW5RihNsLRskye3WwTRj69cz9oPrusoHKFduCy2Yn6tbFkWCjGM1k2TZT8peasLtMnK4Lhce4Fnkx",
  "key13": "2TmyvKVNCtEj84grRvLrwTBgZysUxZz9XJae9Mc6MoN8XPBAn5fgh6SACyDkuxwuphtmioYwuCxAbbi7qYB1imQu",
  "key14": "46aN94FDMbDiwMEDS9FHvatYRiQ399U8PbFoLoT3PtWDCKSbqQ3zc9WK8H1gUwstouM3BZ4YjHr4rxiFFotjBBQM",
  "key15": "53jBzckruirDUcKDvYpaQDqpruLdcJRFXwn9kddeihpqYEFjzGva91jcV2Nvi92VEG5j2u9XDSZMQJFxn691xCBW",
  "key16": "4fi7XJRTt9zAQosRBFT26jDASAu2aQBbc32gsoddyVQ2eozcwZ5w82fr2gY3fN8swmEHG8PG6WMEPYro4N58M9p7",
  "key17": "2k1ngGDmpLUA2dPzbFMhYGPSWtin3BqRZJNATAHjHcPanSvV8KnE7awiHGU9yZ6MCH2h8VRrkUkJpatxU3gqMVEw",
  "key18": "3utmRFNJcDJV528yiunCGyHqXhuLXqBuyJCGzeRj6foxw4eoPBo9zDLDWMAh4k3HyXh1ZQ6c7Fwo3J8W3nVMJZRL",
  "key19": "2J53pm74jwiNfm8eCajXjauN6UNDUnqaMdMQLNyasrPK9BAe5VqV8TwLWJ2eFygZu14Mskik6ApHyGBLdTzt2ams",
  "key20": "hGBXknzLegr76guqb5rcYb6ndNXKdaSEJ5hfXx9hqgaSTw6XbPocTcCco2M4o5cbQG3JJdc2EHZ3YSHWRr9TbJH",
  "key21": "2VFoA13BUxb25z555B9xh2zuTxzQsz7hRdNnK1aPSS6WiyaFgNctVVWf9JsDFf21RY3eSPqVoztUUv2cGuiEHX82",
  "key22": "4sL8yWSruCDfpPyhdhsnSvKbzRfxUEeypPgeneyj4n1Cw2YJ8rMJxhuXoCX1RhPyvgzwMjgsywLPHjSZht9eVzVw",
  "key23": "5PKrYhz4CZmjEiJWNpqyVjJAEP12jM9my2DKq8aDMAfeggTnEz44eFDUqbvUGP9qedfg4fk428gSn2QNYx7Cs7UV",
  "key24": "r2iwC6h6pbMUZSu4X7b255X2kFunZm2ZvdyTKvLZwS8W6xrbjs6dmJELhaxVYbHb9o6uLREb8ufCqvKwE4Po2wz",
  "key25": "4qbXCDbbVDs6VF1rXdtuME8aLywNywFhoYeP6duWAYiTK1sn3eQriKurSJ5ARLcYZGbr5P2FJNAewvM89LVaL9Ae",
  "key26": "sPQib4MgJP5zQW2ATozWL3QzmNPpCK3B5nUFNJmjuv7hhWnkAD247duZQkXFbyFpwaJZXhezmBT5tPqHNyN3FRm",
  "key27": "4aU6zh1W4SP5yjF1yxZdii87Vk7v1u8vDncAHzFZVovhBBD4e7Aw6JuiPXgpJUSkqVpjZxLJLspHNtKf53dUDMBS",
  "key28": "4GDKj9K27DoyquSfcE13Z4f7RNpDkemX874bNdP6hELz65oTSfWqv4HAJMDt7VDmELsyAKUcdcQxrhfPsf2LPtur",
  "key29": "67ZB5cmcP2MTFfpDLwjmH6Fvf1WP2FxMJ2pRhWoMALLsBBMSS36PLdwuuE9ZdBFHzjPsCZ1XJ7YAUP3C7Tj4JfJU"
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
