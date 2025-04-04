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
    "3rLSNmoonZoHKVP6UN5AgdTjhXvd1HsDkaKsc2s2VRuh7BKjDPJ4k8q6nC15DpsDoeXrSD2S7ZtZ35wxtR8S24ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQZrwdXdBfeLyBxRyBeEAiW6ihdu9NKwGna8E4VMrJQwArG5bt1NHNeqxZRKaCaykBz2GyTHRnzFZa2w8FGnKwx",
  "key1": "44rrFQqVq4truWdqRCuKbNw5aZKHZ2Szn1khNzj6KXi2ehmPoc8QL92LJP5E6uPRTnATvPKiVxBcckEQrLFQXoEh",
  "key2": "2uNr4egEyLF22717m4MUhSUgkZFvMEJcsnbpRy95YXTgQSZ7aHxJVPEJdEdzBgWq3PdYQZK7WubRr4ZBbeuKTXJz",
  "key3": "2o9LVc7mRNiNTSKrtr6Sdy89oBnG9pnpxp3VwxF2NwwFB4gogCbN97aWSJHgs9LfbzwQrPxLVHm8sRuLekBfBCi9",
  "key4": "k1JNriiZhPrUZw6BgFTsKKpEf4rTvzFjztqx9ujMJY1nAMP2RREpxrHSt2r3gCtPMV55gn7ofsWTAVwJjbnwqsr",
  "key5": "3yQHJkA7YJXd8hLJuf9jTdaHSsDnwRpjFXZULDTkH8DYEVCeRVFaNH5WJWKPtAEkfxW59YzBn8GBD7xCGYeRLvhz",
  "key6": "4s8toFVkLP1zbnC3tD3VEZSPQPPXNp1fk6SJS5X8WkUjzMYhsPZ2VrpR6gAns9D6kcjCmLdnKwcjBSHmCeYAMpx",
  "key7": "4pJpZRFpvmsyTejTPYH4VhLxMR5Zr35QbCQ9tJjoTNKA1BQa8g125TPzHyHP4ybLCGcbMaytmoBxKdJ8GQ4JLj1B",
  "key8": "5ftquexqVurJT1YLSZiEK2Ex34YsQDWXXHsA6hhx6XYb6bCFNZBLDsHL7Gun9S5MrLSRw6PH2RyuUkAAMTneyHJt",
  "key9": "52HxAgeDdSj4EBtDWYfc3ETsZULGVjQrSZtNm7Sjk9M3eHqtcBBAAGG3F3GUA8RumcEEgGDjt3LYy4ZJNTgirstJ",
  "key10": "i4wEfDmbxyQdep47ojPeTKg9rrmH6u1HGs6rtKhUKExjqPEidoBBA29wj2BM5d7M6f9nyK2GqQu2poCzE5cCkN7",
  "key11": "34QgBNPKYc3iCQxF3AY39CiSCTvQioRYL6Q7TFoJ14FaeuxDudFZyiMw11jE4WepiXwKtrporiEmFrsTazFqAJzZ",
  "key12": "5DNEYpYwBcugYwCrSzgdenCSVW9kvZrpPVEQkp5c9SqeZHTrSb8JPEwLLcAHTQqnTqiUSCvHyADR9fzpQydS5VGW",
  "key13": "3iR5MmYbMWD9qEaNKSGztfFHgaooAyfPkhrSmcKAnai41FumvGp8QNoSV19YpR3FHDmti74sq2gFZgehyiGa3By8",
  "key14": "5vfYaCTMtguAkrpXkvRXVdqZJDXsVvHpiSoa8FvKtoJUATx2C6SNzi7yvsVKVTx6EqRsuTgdMRGZwroChfn7dXd4",
  "key15": "EDgcVFxoGxgu5VYu6PQ47KmxEMHmTCBhi5SFq5vkrDeHQKqqYDmjEHZ32qGBn9x4uXiUb1Xe7Ee6VynwtsDXNZy",
  "key16": "31jnFizCiz73wpTjFwyNGp2KPxMiRxo87NUMeqqSsSpxs9FmzBhEMsho3Vkii5LGzwcqZPSY8jCDRq8CXcfGDXcB",
  "key17": "3xmNy8pTo6zbfNYNdad2wz6aPGMJUGHCgG3dckjYL5tSFA1AGbsmLEKPFdTdKXYBhXMA6ETP17X9ChC681qWtoSa",
  "key18": "66jVKnK8DmFtrWaCefaeeKTarybvSLnHVduBzo5ogfqRsLCsHitcopgkxVsTpNDzzw5Lnw8a88y2pNYR2GxpCXnc",
  "key19": "5aMDbUQtoRbYgfhwxXNPiiRi6wF4bcZuiYUK7mHfEuttjBkdariAS4JdrbbdrRjUD25R32nJe3D12T9k3h4ELqft",
  "key20": "3jdXHgWQ1shQnd7YqTxT8NDx7wnpWj4gCX4Hu4joVuxMtMkLAp1AyBw8PA2rhyKaTF9KwRyBWtvNvU9GLsTRwpZP",
  "key21": "SaJLohjGWGZW3h7ES3HjhtRqQQYJvEDES8FNsaNkSEdf8rFTNRJP4NVU5dEY1RGoaHHBqXFmvUgNEweeMLDWRej",
  "key22": "4p7bgs8owJuFB5BaJsueiWtZC3eoMjUEZdHwftBpX87zJZqaNskeR2gwt1HqpjxgomAbw2mLsQX4j2hfUzNA1CkE",
  "key23": "FtYrxGEv3vdDYLBZd4c9CjhPbFog7tqNjPLBUGgVcS4AkaiXAc1muZEywK8xSykn8aok8fqX45Q5jfaLiJFNPdp",
  "key24": "5m1zSNoJjpAd778HNs4RDAZhcGQBrypybi9REdZ4JFuGaPhEQJRBovhdYP6ij39s8SykvtmddWra4Z4g53gwU4M4"
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
