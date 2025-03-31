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
    "rES1FiPbE8MuBT4ChwG3Cvie4Hrfa8MJviPeT9BTr5sFkUSKVdw2sw8Gc8cJWcYXEa1AsfKAnad3vk5j3RMZS6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DH8uEeamzLfmdQX9uwnoJpDwuNn5sxc3GjJaGzT9kBSgJByTt39iDLUNYCsWtqfkWJmx5euSHNb9A9JjgnM1Ao",
  "key1": "GTowSq7Wjk92kCwUyvei6s9ztgZ5ZkXwpXnGX6kern2TyXUeT6swx3Bfi12HjXwBPhNUgCm9XaeRDtVUsUtmi3U",
  "key2": "5MGyREoWqPrLDUEXArfQjse6zoK9hbPdR9VBwzc4AqYJYANzDwZFpLhrmLRBTfx8ux3B45fVPXkbP6jwdeXuhw9v",
  "key3": "4bkzYzNcrxwXhAxVmK5FofL5FVygfrHZHaVpthggF7Zchr8abKQxpXML9NpeWgfaJxALdeoULKNwC7bRrY1tSBdm",
  "key4": "368LgCiCQy7HKtfEtXiXX3rvDQcKBS3TL88nmr6xweSnVRQ7z4LtgmM1x7EZBqPTQR5JkKReJVarKL28HRhPTJ2X",
  "key5": "u3M6cEEh5b9QdaLGcNVhrHKBfc9dLbcYYJYYPBpWSfnuUMSZvzfskpKcGEaCpRfo5V1bFGpqu3hxdzX4XweMLpy",
  "key6": "4tA8L171Mtg5gmW2XF8eVUzZ7ddqM79obUqMELXPmiJNb1zfTBVBeXm5dw2uyTur2JQ9ja4bmCnuxQfUvcQH3ZSP",
  "key7": "4A5G7w3yJViVYCf4UsGiyKZY53tLzAvwVKuyN6p4Wy6Rcb7huPia35RMFhCjeTKLvqiFQsYLT5wkkURdkfqw42eG",
  "key8": "LgBke6z5wkuH2Ks1ThzsXQva3Tmw9poYLBpoadVoT2AFdevpBgoigBDQwocMLymb7CktjBSyjHA1E6zUSQemzfW",
  "key9": "nz8GPyAXrjyWWmAd8jUNt6Yc9MxpqQckCDGEZLzPHvMav9HbLSF9rkHESYFbq2VgRRFdjJgTpFVPwnuYNYrXR3s",
  "key10": "5vZJNo6EKrhBfg23QXn1dCh8Ljehdr394szGWkqX428kzphCzeemsR29eQaKZWG6HmeuG4gYn9KFwvLcGHUF1cLF",
  "key11": "4PJPUEU7uedu6XmKafdABy9ZvZioANero8w9k3EphHoa8WyjioVsbCVgoEdyWPStkb7D3iKDGW9HPHxqvLBUAxD1",
  "key12": "3ypD1q7d7m4oL96G15bVciHJds35Lbx2KK18aK4vVpueHs4u7Ks1PWzyzC1S1i7ojaEHV5FwPYdSdM96fcDbRpW2",
  "key13": "5DHuytpV4w8WKeLHFEs8V5UV9y3HNEvyut629o73dPQ66YfCDfBYMP23Srw2bgVx463E9PmSwodiVqTW8WYBg3wy",
  "key14": "3FNumYH73AeTc5MRWjMwV2fXSSHFRUfGPZBiEv74NYy8VG9z8BUHxQeHb9kq2PcfHesWE61sQV1dMEzPN2gsUuNG",
  "key15": "2Kro2Q5Z1rQ7MTyGxZsYDwNC9ZjR47eZcYn4SEhVytenAQQ7Yr9i76zGxEPCUswhSNRY4CZykU9iphy3S3qiLF6c",
  "key16": "NaHkCcBjmxJQa2oAHKhMQvDGNA3Vwrv8QFe1ADwFHYLbrVwZ3Wudvsb5MqP4UnWYqmPSzALy5CwbWJDP7CKqMeH",
  "key17": "35K7CouUjT98HmEgetFt9tQh7mYMJtDaABnaGugZfQc8sc7YJ1ysbB1K75rH9RKcLk44iDoDDpMMtLsLyjhgSHig",
  "key18": "2s6mYz1aajHjgioYX7b3esVnRdY9qASAP5jsoT4q4nuJAvQ7RiUGAv7aH8iWEUjzGqTJiVe72ectNF6Udae2Z9y",
  "key19": "2Rx7gnmXZoUNqEnuqQV34Kca7TwBPavvJmxuBpwrTVAGSFAnfnLkNHKgqaBASjNmu68neh5CQGKJxBJmK8DagD5b",
  "key20": "5womDhQgfuFhiH5vdzSnGcgmne1SLcch53TydnRHAtpdurh4MdDW2YQ7SiPFerc8HkmqXA9jAYyeJ8FfKwCmqvmW",
  "key21": "621gW1x6jviGnBNbxcpBHkHuJYMsVGDVjnCdS6NVBopAfLmNLCXjgHnv94zP5xFVxkmtXUwj3MY1S2HgUoGwFqyw",
  "key22": "5NBQ3ZG9Z3aTaw8qmaAGXicFAr53V9rjEiJktqf8U9nbKBdHSU6Lb4VgrfvfMz1duHqvYvzAcmrQ4H8Q45KEFufz",
  "key23": "5W6U4wHvLFVuaik83pFxaajP1GeumDkMNPZ4WuDE2bfNCesTchS4P23nH1n11iHLDXFF13WpTRzoZtGkGhVA5bm8",
  "key24": "5RHnZRkcuAoQxX9Ei3fFmcxKmsFVozZdQzUyiBTKRVJT81bJEsUm6V3G3XxxXYifMXfeLZWMw1rwRvtWDPtzQRDr",
  "key25": "62dQodzvDwHBhqS14WneiJnMS4p9tCxnheKzUfWFZKENmj1nJidTmqQfhWWWSSMLbkGbXqm6scPebwQJYEucs6Uz",
  "key26": "4a8cbPWuHFXYL2dcEq2iSHcv3Q3zTjxgeZmnff63UMj3RvKP4jQ6kZMdDbz9vSEgABoxAPLsykLdj2mpycLY18Ye",
  "key27": "QrK7JLEezfjsEuYAiCvqcrC22HArAzjhyYh9pnK4TJpR1ZcHQWpniRDdFN5znJFsgP3i7ZEqN3N9GiciAc6wp7b",
  "key28": "zqSkUf8keYqkbyFef4MmntidsFazYaFXSXiPUquTzuwLg6ZaCqZr3GivX4QUen1VNvGCNFNniQUY1hNAxJuZY3Q",
  "key29": "xLUzVbn4stY5GQJfQHXVTx2B2eYLJCWFgMvUmnLdFzUB9w22r15FqTUvEPsBTTLnUsQ2ugESrLu3uM5pt26rwEj",
  "key30": "52oNeN9dNrZuBSqcGvERNQ2RPkEJfZpi1KSFc4xxMLeEynLbTMM4JWVJG423MYcw6iesAHaUbrq3Cxm5p4ymTsqj",
  "key31": "7YDt7jz3n19iiQSR2fhKkRPTU5nYWcBqpn1Em2ANdhbfgVTKCd8uyckLCkVyfqSEd9HKH18pCU8GHFu3ha1Pr12",
  "key32": "2u7v7kkKM1L4q7AMiz58rEXkNhHS4xVvXhKxjknQewY37rTaS2QsGd7LUpc2LQTqc7199cxavfTxPKoNtKTyrxLQ",
  "key33": "4PFyAScu6ePe2MUQ3RJpL4k2Qr5kVaJkxXaynoV78bupe375YFtLTGDkCmLDDEuzxfSpbEJLNKiriEUXVQ3YZJKv",
  "key34": "5EUbWLU9NDmH3hykChrogKT56ZauE63HJpn9jzfdrJLMh2vv6XLe5EsqFAbRGQcGYvAfRV1tiD6HisYrahZRETSx",
  "key35": "5TihRTprepDRdp83weCTnXGhKfZgTYe4Sa5P4UaN4LVnFUtUSqzVAV1LmMtK1McnnammXsFGdXPxSLTeidJ2LJPr",
  "key36": "5YgdzFZLiE98gztr2Nt2MQZFLssY6zdsPokJ3hFUsaP6drP7ksF6KWfDHnEout4S6CzFfi2TVGDkZDJVNpE56RwG",
  "key37": "3d2TikVm5W7rdGQqa2mbhGyYFJEddF6LL5kJ3Ztbo5AWquksZD2UprX3oehEWJSiKdbPF3LGyfg4RPHdLcNtT5bL"
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
