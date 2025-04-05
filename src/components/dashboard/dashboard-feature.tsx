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
    "BjxXyYTMeTPhPzhnmDvPAd8579scXP44nbbQTfN7g9CTqcR9bEKsSDnd6zT3PQkoYrv3y6FHBLE3XdaJqFsgFjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNZZJCnAyUhwyvuicjichv3r41RdvwEnpMWjG9X76XQtB2ZUhzAsbWUBpWvQNGh1rZ6sGg4Nm9qXJUAeuKUf1HR",
  "key1": "4rZ4gf35gQnBr5DWiw4oDDzJHL2qfeXih5TQCXNWr54ECvVaEV9F2W4sgvqMMXCfqpd6wmruS9mRSB2Eya1wz98Q",
  "key2": "3nuBJaqax16UpNxxM4dTpBFC4b3w1iV5cU5yU5ymTDp9k6vHTQRCcN2a9xbmosWNUf4dUPebr79aZLZgKPCLEEoo",
  "key3": "3AUMbvRRK5HfkTdvQszhnyCxLt18N2pyxyNcGDfzbQqQqvatvQUYLEYE7rPD8ysF3q8YzUg8qGzLoHzPBEBdVCaF",
  "key4": "4PKLZyfCvsvs3pB8Y6HXYqANR9Rd9DHVATGTD3C23z3mrkMw4xEMBvg9cnhuVnk5REgFzwaWh5sqTNrrMUgv4Y7H",
  "key5": "4X5E5XQUAnLFW4LqubSgWcDpbZgooZ9gyveXze2kSa2VzUisqQv3R1Bv59oHLhgcbdayVdGywDqhN9QSLHqaTU6T",
  "key6": "2gZiqJhuBSYUXeNppk9KXrhwyYXDgDAANhmjmUKzfPedjfMwAY8K2q2hh92STheMnKkjpcbRBQoHD94Hg5Adc6dj",
  "key7": "5fb4QmUF5ZXoMHNYvR4ZEDrjsx7n7c4UZELGvn2ht7BMYEj1iEU2EECviAU6D8hjeJ6yezWE75oShUnoHvjU6cmS",
  "key8": "3jKNUkJik14NNQbjMKhwNrMkdqGy9nmwe2p4Tb3MgPEzayErtbtEtUiJAfy1sBewLDcKmNawvQvT63N5bgeY3EnR",
  "key9": "3uqssnKLZw2aLfACUWZBooLerrdoSZ5FsPvdYCmjLsYZw6FbyqECHnc3DiA6kiR2evx6WFpWH95f4zemkJuiCHJU",
  "key10": "L7566qx2JStE36EWPY1Dv6aQKsKTB1gTTiELqRXfY14aqM76n51UNv9iJQafaR6mxrqujVQSxD58x4G3CPDih24",
  "key11": "4vdP5RoFX5AGq4u5XTyPY9btmFEedpu8NkKmVG7mapxWTKqWdX4r9XbnWW3aUsgaMJgznfxL6p8hUeMgLjtciH1z",
  "key12": "3m4mn8Uw8ta2f47QvCJNVniAfateYKXQjACXva4Ccnqw8gUWYf9Sde1NSfkGtrrvYWpwfyttp1FhyM36UigH71fd",
  "key13": "2SA3h2jkk9ras9Pu7zX7icdEswxMKNYZd92HhfnejcVx29VBjkTGhTTpwEwWGbsRuS9oba17GyPUFwfBYfwtdXPq",
  "key14": "39yLqvaDMfEN4oBRJ8rf2LAEQf7ZK9Rtg5s9jM88NmZkAJRV5QwCf23RDNcknaiSgdFrEWvJFpRei2rKdUV4Yc46",
  "key15": "63JRnLCriwhKRttjU5zopt1How4Uz2Dg8595WoCUi5BSGiPXXEZ1ZDV2CcbCpDfEFFzPrbgUXVYtAyRAS1xWMzgm",
  "key16": "313CRPTPBj2YXFuUvD5w17mpyv697SHiCVGJo7L535NjSkW4NQJ9mrWDCSVXho8bWwJS2TKZw8Rw5Poi4mnSaoe3",
  "key17": "5TJjYNTzLgXnd88cDmN4nbt2aVkxrJi6iMrnzbtJq79w5ibiDkyeXsAGc5bYKH1LDzemP3rpoiok2denyWxgieWd",
  "key18": "38nZeuHVN2HvudgP8ZSSodRoM71ks9vPyfq56im2dFWojvMCNG3krw4epbS2Xu6h5xirajtLYYx8VJpo7buAz8vW",
  "key19": "4nxm6sGyFLSJcCw6v9RcHT6pmdPLPp4HeLM68itX374XrhfKt6NtAVGaqwptEmJNkPRuEgDuTzKxNEL73k1ASidH",
  "key20": "2YDQJVc57fRZGiJumnM5Dz31rUDBRnQTCXfLAz5HECQcUhbZWrFnTytQEwrNbqtbWwAto16GRTCST7hqdRWKCfxv",
  "key21": "SEyudCXKMgd2NX9VCmxocVmLSaz5L1EesKQCaqqahpwLwu96Ha5dXToE5VKcvzUEmuQD6AmKjZhJPeudm8Huew6",
  "key22": "46entWUGANX6GoALCf19GmeqLNKHCyKyvmyj9K6yrx57M7vRBniSSkwYjTkXQxF9fwCwGLo6p1d3k8RfbeDH6Rpe",
  "key23": "4W5LMMeDEhdsERKyPetAUYX8VRsHViMCQqLA77Zq8KBJsNBxMd9nN1fQkiBAHvKg294xnRgYrpkirPjV8LRwKVk8",
  "key24": "5XpqKrrZdpz3Fb5KMcUMptZrK9yKHTaeCDHR1ufEEwEbLyJ47EySVw216smLvFg4H1DDTyRfTkPswpH1Uvbutc7S",
  "key25": "7H3y4TCzPtdB1p7GWMbF7RF5PjoQSpV1E59e9JVAiC46VGgMhvuStTeZqdyfx4MX6XioGvN7YiLCn2M5ByWhs47",
  "key26": "2wZYm1drGE6ysk3E6aza1qpAG53JCrHuRVoVUpMdMTWiW142BJXYFfjS5HBwtHx2YYePu4Zj9pyxWWSpDAJBnXZb",
  "key27": "482dBW7f17fKwMQWwdBh7cnfrQkZnDzoAHR79kMkR7JcXPoUJcUcqchh9SaDAkBMA3D51huiVfB6vHaYMyyYwuby",
  "key28": "2uein26ia2uE5RdExRa8YDFYpS4TvKgHq4tspe5enduX7HCBGMLV6RyF2bXPZYwDJPBewomh8ryHUcV1kxhBzMty",
  "key29": "2pNzhrufXHEwTVsZNYvLwoEj58PikSv8RE7zWAQGF7MAe5pSZVnfbX7VfkHJqzF8LeNYFfSbM1un2QH25bKHDvoU",
  "key30": "4rjyrkQH9Ny8uwMyWK8iSyi356hrLhA7aK5Q2wPgrv5zco5EsMFo6iTWGLHEbqeuMYC8xkipboSRgqJjyus5eUWp",
  "key31": "5GDkXJ1ZAaKYMtS9jYXBPrya2vJ4PmzLF3xALvjNmG1tn5Lj1mfqqNehyVoaSzfKjdM4cxKsrznQtGus7Nv3WpwL"
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
