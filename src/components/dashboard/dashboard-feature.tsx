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
    "hiFgntNiZafCuRKbhMWFwBiKfPdHkf4mR58E16pu7NATh9yJZbvKufPusGAzSjJmZoxAK99C5sAYUSQmPZD4QaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhauRrnzC2GxiveswRgbTrHRXvMQc7f6ZjcQfBuMCoUBU4qnr6vbz2b9oMahRxrEX54iUR2rpwZMbEp9h1d3SUT",
  "key1": "2qVkgVR8eEmkZnurjUAFYTAX53UYHHU5QFdHjyRzg3qZ5H9xiRCH1nVSE49CdwTC8BjvNQWsgMknU32F2TdXrE25",
  "key2": "3DCb7FPFPxzEviGvrdprE1BCdG774roKXDKJ6qrS5j7nsYunFRwfiCo4g7EFdMxSL44m4vVVk1PTJWPBar9PZ9Xo",
  "key3": "2hXAxKZw2WWQKBMpQTx5ZoYxsb74gQfqRKDgN4QZmvtM3gi9d5hGNAFP8fSo4UXq351M9tgeU21sPB2RpPzD1V8i",
  "key4": "5UUFD9haUkQGLNccUG9KTfzXq6aHLjnv6DuikNEh1sPAKSvvg1Ho9DdQfGranBEbx6h4AAvRSk5P1QDcEatHrjve",
  "key5": "4U9Ga5zDNiV9ac22TYt7ufnrQCbAu7RLicKoLaT67jXwD5VH5Cd8eQMb94Vvgk5ANxNzNMzzCdC92XcMFPxSagyk",
  "key6": "2PKEWSpnZWeGpWfFmNQsPDxziw2V9minjgHV9RG4kTabTGHfktqTSrAR4nufEpCETRpj6q479BEpDaRHftpVx2wk",
  "key7": "4BTyCfpcJJzLaPzfhipNjcasn76yQJ1b4EFz4hVjAMjXMSHuFXEf9xHs7Bzfm4kQsP5KzNwsSr4VUthgcMyE68uX",
  "key8": "5Tne3S6H95KZJxCYQdWvC6at5TcnUVbtqTAZcnKSJT3xjRxXCZJGtAX4tR1sSoNgAgksRKncXTXT4sSBD1T9d9cQ",
  "key9": "5qYGkBhSzasU3ana3Sgjwbkeww9TWAgtqrUtJifHt1K59YsKEo7sEeEuwyyUVTsL9zLukKy7PvjBn5JtMg3Ud2pN",
  "key10": "5ft2qxoZEwvcfbcCPngn5NCTKVK2tW5uH9eswoTG2WcPnraNCaYkbo4t8tMXzYcTF5nAHGxtPD4WvSGm68twMF2v",
  "key11": "3Y3JwPPzoFUM6mmsZBi9jz47qgDQAYCbDYdVDYqkWMGYq6yUdSzaXPSTMLvbfiC9CBHb1waiBhoTjfQ17baF9zXi",
  "key12": "5KddVyDK6HibEkCSxqFMP9MXvKZHcr2h4oFrSa6nYt7A5eVj5YKNBBj2ZFvaBP6KMjKcF8yNtVKtF2kVF3Zmd992",
  "key13": "5JstU9dudm5KkruFscaSWtnw1aQ1MSxzcPXt6KDBZqH73zMRtzGNg4ha2nuLrGYyiDySuYst9Jf6uDpt8E2rLMpg",
  "key14": "R8SGYt6cXJTumGZdSuvpArCZKzqLPXnJJa3gxa1H9WqsWvcBHmzBMMY2gUgb4159e8saYvJcCkpEBSg8dqWyagu",
  "key15": "58JYZycsw63mjNQBEdoVBeVxK3FFukuTzc3ikJk1vCHgeLk4xoBqrKXWq2vQHDHXAp7ctSZPoVJyjMJiVePTdC3X",
  "key16": "hp9K4WA44Vg1ZMJHbiL7zDg7o6j9x2iNmPfyyeUqBdQsXRt7dVsHR52HHVRZFcGPR42KxuM6NLVkfs2mqsd5D3B",
  "key17": "3BpydEPa1d5r4fHwkfEknxRi6PLihbB6GPxAtyWsjM41iSLVVFaVTpJGKt7fpva4oBYd2LTnhhHfzVjMbct9pp5Q",
  "key18": "4peC2SEcXCRrqC2jr2hk4CJiNotixJL7TUt2UFzpuxwqL17hkV5V9SVstfepgLji3URa4rs3YqUNKWf7MCmBh4eV",
  "key19": "2AL6ppz3FkhD9ApncWfz8PVaCMshu7FTVFXNXf1XEo6KnAQteebKkFCu292RL3y9HmrTBrV4gyqLtoSHuRqTDDR3",
  "key20": "3JMip3fsBtyXCF3CfqFmT5kbbL1wU2AQnw9oeqD52mLa2aQKjTfs35yZiWtUMEHPDTNWz4QgVwdyA6ppDiaYxbjk",
  "key21": "34vDaeFPRpSR4c5Lwips5ka1N4i7bonkaGyb3QNDeEmayUb8XNMKtGwjDGTaU2m6BnNqEkSr1AajUFcQSDihNDcU",
  "key22": "2mmJkLK2kUR2pNem1CfAU4RNDgcdTHd9GrrWeTfzSHit9gA71m4jSCXoWt2m3n8VUzydPhPidm7KtczVKcWYNapk",
  "key23": "3oQXT9kRBD2Pxt9J6gw7eAaFTzbyAriCVpJUPsq1A1Z1xacwz6zD2GSpF6vj9uWV8dfBsLxDE8NhwnW6QUdzJbmu",
  "key24": "4Kmanzz3KAaAXWfgg2TjwjKLdDHboGzghvy5QW1MKvRrqyBpKBSosnHq36DfWvP9UWueTP8E3Xnac9ZSeMqZogvJ",
  "key25": "5xRkojdBAH6Ghw8WjcBnHXE3TvMRDJztPP5SZ9dnAxQ6hesuabN5XH58PkYh7DpSJo29HyoHX6ATEvA735pNsXPW",
  "key26": "8eZFfyk64ZDN88frLZW14aRwr1EHrtJf8ePJciMoLyAVgUXQBLVpdCAKT2GhjuUA6SdFD7aFqLjNXeUkDECdWGM",
  "key27": "PEF8b6DmhNitijSGtL1qkjmo1Psmj9rtvbEu7YbPP37sHohEHrdo1ZvXKY7jrLnatVrec2UnFgCqgsuGdkB8pKy",
  "key28": "4LHcwGVSasTqQ8JjnfPcKPuB1zdYoas4ArRqnber4mAwoV9v7dMAABWBb6NrzTmJdTKaqXMR15XmCnpDuhWe8qvM",
  "key29": "4BFELyJAhRXNJvCdWo3VLC8UGcBu2v7EUaLhvFKHMngM8eGRaELWAi1ghShjqrZ75n3rWx4czW9eTyYybisJQ6Tr",
  "key30": "56KGmpBzvsvnyYweerJ9tPGtNzUPUVxwsFfBmRqHZZ7jmU9jYfyKvTFkTvP32zCN31ZcVZmnRje1Nwa9AEkiEW4Y"
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
