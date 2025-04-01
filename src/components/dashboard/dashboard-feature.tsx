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
    "3bcNzQ94SN8GaLvMScP6e8YErrX9wSPSGTWY7muBKqbWVMTyL6vTbekmiVdbjpqw2bHt78J8coKNjK56MkGwkJFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7TYqUQtbFY6oWTNbHZDZoynQAqUaq4Sk2q2VFFt7TA4iGSSZjstp8Y2M38kigpRRueLt2rANSv4EnfycQu4eQkP",
  "key1": "5UaemN3brDGpZTY4nGyLtZUvNco7V3T5Tb6RdGLayBbuiRda5Dqv9GFeCqiTQsHj8ibgZ15UJ8tQPnRd9LqjzqGA",
  "key2": "qBJbSM2BacJ2hm97gwg4uP9D15i3nsm723F3TdWFpxUqQKR35fkmvooZRKwKR7Mg5MrQMVkmMnYLa6TvMLGWUHX",
  "key3": "2WdrizXJtnBx4tjFoH89GubLqeJNZo4QqpvywXqJUZEiSdNNRUE4Bzbee1Ro1U5Nbk7HzaQAirL2Zo1grMSWeW5s",
  "key4": "59uhyuAW6zeTDsGwqRK3DCHeeRCmc4xkqyeCnGyKBAgQtGZVG3cH1cqNtBisvPs9Q4gTxnVKfCVBpEwVG8qVToDz",
  "key5": "4yCa3C96os4iHAXTSnPHi9844dpmVMubqMQkroohhcxJgLWYLNh6vsi1cYnEFNVa7bcB5d9WAR5yDpHzufneK38v",
  "key6": "BWie232hkkPSttt7tLJVjFW9FqyiHUTQyAqnnrfY22pNNcMH91vaACrUeDfgbQUGZrko7RmLYmEH114L2kVMLXR",
  "key7": "JKPp9HAFUxneo9gyteLDXcCFUBpmrfQPkLjMw2pVVB71f3bbUUjSQWa1opPTndAmKSPuHyxCAh6Y7BjAX3G3zmf",
  "key8": "2E1h6Urz3JbzmsWxQ78Qhtq2h4H4F91irNeYRkB4PVYM8Uts5x1RKaE74cGY6BWU4v7SdGdyFfT2eaJfwMwwNM5N",
  "key9": "3oGi4vHQbFxQdiSvZXzvJd6ZM3FDuFs6CkKodq4gUs5dGDqWZEgcnvJTiDuvVDYGEtrMoCarpqGBQeMCr9xQUstQ",
  "key10": "3bgkJGjdbS2GsQEVnGDVYQkbTzbmL3n84wVS8N2byyAe6qZtcbJbCMXSNbrKTpd8ae1Xocns88x1Bu2yTLeWxb4v",
  "key11": "3hCANQMEgu1Hr7uui7LJZYyTQHjQT24AKssYttdqQNFAmNVbJ9Tz3hJy73PpNMiBof5sFGxfqoz1eAyng2YjipaS",
  "key12": "4UqxoyPrDWDsKwG4HezSxbj7HxuHfp36yDpTHw149GFf78yeLyZqd8LNSenX7QX6SiFYvQgDoQzP5tzmX98crGv7",
  "key13": "5YhJK7AhQfkgvTUAhJre6eRApKTtUTjBqQ1QTurUTRDvNU3S51A7Lzc7fsnafFSL9q1oUHjo9amJoZPbZwCUoxiy",
  "key14": "CEMiXDmW8noH91cw6Sm3VMGcsfxY7HX5g6QymTNMkGQNUHWvpdYsjtfnehVcNadzxPZ9QW5YqCVG7m5wN3kCa3r",
  "key15": "AdFQbNZU1wZ9VizoodzeHxZDJBu1nsBiSMPTQcRtGNDGEFP9hU4ubXGUcPMhzHrsADV3jPkwUbGdH9coFDA7f1w",
  "key16": "rUrCS1TMpTtsCzctQmSwNSmCGvNEB2L7BQhBUvGtow3rMSwA3kDQYyPZyWG7mg8XoSvfVqBD7Npcgsv349wYpFJ",
  "key17": "2LYRNNMGTAgpGLhGRppH3bvoZScH7MJU1RWqxrEkHgMRKSiY1jQNqRspyZAiiQvNtvQcUhWjKb9nBaSkRnhBBCE6",
  "key18": "4U6KXcvfcqpWC2ER9iKhf8WPupLgzsnGXtnnyVPE3heWmKB2E5j3cqidb7XJDFvPFhdaKEnXPueYfzZepu5NbVoF",
  "key19": "P1bfkhwzTAWxMPmSDSPuKCcAcvd3Q28iT29zkrL48nay171dynzQhfDZuRMD8BecfZ1qwopgHG3acrUdKrYPvuh",
  "key20": "5BR7e4c5FmGJNwYuJWjnBVDeHjx7p1rEGBgQTy6GX9RuB8pTPDqgjVmUpAJjNEUJyHogJj1ranGcsH5SsVp3RFJV",
  "key21": "4GXAcLK4oMU3m7u4yx4VsP3i7Y9H4wWNtjUrPjgUpxkAjUMAuYZPAtydowXEquZSfJGnGKQ7NQVtQ1L3z6LogrM4",
  "key22": "4RrTWZt8QqtHbfBEBnAs4iP8gwcZheY86yzVYGKgwqRReeytYhjxJVeQBRSQxuDggzg6uwiC6G8rscCprmWzpzzZ",
  "key23": "4jfomScH8vqBPALJiiP6u24cBJ4Ne9TaqKCB7poHBHmvE1VL8JEzNdR6ovLgoWi23yQpa1krX8dcdYS6oFDfQDxs",
  "key24": "J45G5qTxvqfJP4gRKrANF3gnGFxGyzBBGUeSCzX2MdfNsS9c5QfDrpGX8VppcsMx1hLsfWUpMZB9YHgFyFwHBsr",
  "key25": "2prc5Wzjc5Md8Ft1qnGn6dMdgnMkCabohUkpGMHjmjXorYYvWfw28cvur6emNDHnPStqWR5zjaxEgRnutmmyVcGG",
  "key26": "4w88Zr5aeaDfg5wxkvVGkEU1Nu7or5VAZ4BvX1JJQB6dGFBaG2Uz8LNmYjqo5KPZpUbG9GyUconRNpSUmCVzntoK",
  "key27": "2AzaTjN19s9VEe3NHLmndJVnY3UBZqrno8L5YGsqm9phXZMHfiJGxoPPGh9yZeFYEoR7AuaGvGK4Uqh6S8isHXi6",
  "key28": "5Qp3gSRr2o76HTr5HiSTQYA3TLcPRWaXb1uHNYK86wMsjEYoEu2bTibtBfUPT8x9nKScZx1tN2RCQSDf6JdJLuh4",
  "key29": "3gUtLJQtobNHoLW3P4VsmT33rrSq8oDnBsrmsPHuaBr4SUw8NK8r1VQSRjfFamWzg4o7HswaC3LrtFPuzCcPgKmk",
  "key30": "2Ryv1VPa4WL1UZPT5b5n7sUiRnHD67r8c8LpFfRLKixPh586ZMJs6WqLQEs9aa4SStdMRx1jv4rRWe8wKQG21UEM",
  "key31": "Fi73se9h9253GeUfdKcXTCbiGwyfukt5FHcudgFjnTeoA8bQHWJVK59EueEGoSJajcAAD3RoR7yuwM6b5xj4kUH",
  "key32": "YcZbWAneAT14Lh8me2UdhnD7yfVAFUHA2nqoauWMtT7UxkMaBqpF2nut7UpJ3ogAVAnaCCbnQDixATxRiJGxf7B",
  "key33": "2VaiKh2Vq37wKy5fT5Xm854sbaQqaKPVTTCVbZVPGiV1AVT1otGkCgPPbP26tMfEGzhGizNfvRqY8HhKEggq2BWT",
  "key34": "4WnvX669unE7PKgU8vkrTUq33fjA9kTJtjee2UT1Q2hkwd1K8HbyHn4tHbkSVLb3GfXDmeGsMDgcbcjM6JTsS5fg",
  "key35": "3qDRQu2pFHFfhk8Dnto4zc36RxubsCk3YVizeKTtJAEWCbuRJJWwtczbxFP3Z11LWVwxijdgMQjYVSL5vYJHhDbE",
  "key36": "4TnzmMtPzMyzmvJG3soEhotBnjkZeJKmjvWTBrdyAWxCpXVwJebP2rFwzz4uq4VTQnP63DHXLK6jzf7iKkBgmT6A",
  "key37": "4tXrVHfAv6scGsuZX3yL5uW2bRXVvCng8K3GynTpdSHfJPFeVH56vLq6xexrVeDjc5iNjPa2Kived41kzzJgRxXG",
  "key38": "4ASRiYBadc3CcJ1qAf9eXjw1FypLBS6Nq72EYWwyP5mY95smDuExdZFGDGPvgbUnJqGtZb5e2oZmnnZdjZQSL8k5",
  "key39": "2AEoXF8inudn33e4DpNc1R9xVXrWgbrhSW3dDHue31FNXqpqcTpJpFd2jW3CZz7TzQDpYZMxjKwGgpNQnZyzqrQ2"
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
