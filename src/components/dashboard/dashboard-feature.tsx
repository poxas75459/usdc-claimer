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
    "3FY24yLBr2dmWnTt4H6vpKWUrXYphrmHSmkJvrKCRoNA72mJZKAgQHQeELtAn5KVXtWnKQbTXzPncPySHiKaH4pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542fkLtzR9QRiNTRS5G6XsDNVFEZYyT1nDrSRUC18KQcc1TKUDdnZLFG2NL6cCCFpmEeV4iHgXK9SpjB7UyUTDgG",
  "key1": "24XkyPdTjaKgAkwYAw5PbwBJ6TKZ9FjaQtH3kMae7LJK4kcxCMZCbNiN4TAg6j6nfVqxYzv23QpuXbsGi4qTkCUD",
  "key2": "YUT6SSvo5APfdsppLUwbhuLF7NMmq5BG88iPASXD8yWoFKFHb9f6tMqzYmrWeV85thHv2EFTa6fFLgxENqTZGQn",
  "key3": "L3ZgeRyVnJuHGarB1RCo4EfNDy1iZ9RBUuFpDd4v4FP2FJmDHD4ZWYYmhUZdk4xP57JVt6ApUKv1tMmbEiwFQt8",
  "key4": "dDxfxQ7uZiqmgcrwFAyR3R1AkA8optw4XJcBwuDmM72ijpPUEjgVizMZDScHXNxMe4DetQ2fjDb37fW1Czr5ECr",
  "key5": "3BGnh57cF8JuwL8ehcCawknASVpZaMekRczMoVBZvwzWDn8WUooukYtLjQ2AbxAZCy5Fd5TspzAj6uvZvVSjUpAf",
  "key6": "5i4gBSn8GJoBuJALaFHxtTuVNAs1uDxSqNFVPLTF8pyBNRenezvWhb2ofmX3w1KGjGzeCFE2tQgtZZCaT6E1LVe9",
  "key7": "5T1fQ3LXr3Z4EKC9X7XBouSuf8JHG3wtnrLvSgRvu99AYNzgFgGaPSrjN9Um6gy6EJszfJjyTmFKVW9URB6Z1t39",
  "key8": "47eZJaYPouCkvEfsxKWwnTz1v2totNfQfGrJSQk1pELvVQejZAXts4hBy1MrZUeL8dDaaVr2WoE2JtuKoUzE5UgA",
  "key9": "nusHFxKX5fMWU4Pfh3cGGUYMU4kbnMo4Zau5zDahoAXq3cvtDTkHMwcxfEKbSCr9cnLCWmV3odfhHGfDdDZ8kaa",
  "key10": "2hBbmRBRuSHY3MMAqUcYJFPakMcVuw3NP32ATJfeLCSkF2HTYQw5M7oStHmu1Ba3VRp8rqfjtMmfcnbVroBdZ2dH",
  "key11": "353kBAzM3aVbitRoYBixfz63c1kF8TcNgXDCfXUyrvi8XMzxEaq27EnJPZ6yUN4BaYxsRwixmJgMVwYH7JthFytY",
  "key12": "3uhYEeBxXEbkqieJPGpRE4KTq4wY2iSgEAy81HEzLA4SjZNs8juHrF4qH8Jhp7XnaMade1k5T29BPDhULyuDjgVJ",
  "key13": "rfqJfqGhcq1xUMzCitYQDLBLbQqRmXCNXbM3WjX8PMFtUDLwX7gXKASWib8sNumg98Ad75uHaVyuwSe5WRCc2jS",
  "key14": "2jeqxmjiHqiuyEZ8XnkZViqWwbuAyQyoRGCZbAu7VddxgCfaUe2wPVpHKp1jkV58mYkwY6SxNmEcj1ZmBXQ6NraK",
  "key15": "3rDkbXU15UjDENL4Pz2BRodBBqHYaoQPoCNsX7L5fcr178mDTL9kwwiCvQio87vyajeUWb1TvDy595KSMvw8R8jB",
  "key16": "4v171rAknk8WYYU1AYQAXuGaFJy8SN92krSAgoTT6iikoUNoRcPcHYpX2CPUFPmvRwY9cVkZaKmmtq8k3RgYAcad",
  "key17": "2DkZNfExjB2oRzee2FN3X4Agv2aZXRgLtkxXSrA5eXhjp5hSpsxGp8a5XTjjEeNkpX6yy1EGoFawoLcAKKrL6P1r",
  "key18": "t2scphrZDDUM1DB5JRXzkraZfeD2dzedJ2qFVDes7XbgY5rPKEWnybv1itz6fjp1fcy6VznCyEogttBvH9CHwtV",
  "key19": "63cif7K1B2ZXSQACsUaScReATkzEx215n1DK32oUE7K95w9dGgnNUBTYd6aUJrZ7Ps19PiFLCnMdRGj5zebord41",
  "key20": "48xG6AKrttLJjmGJgPA1YyGGx8LVpLYpyrNS4pzJxtaRZiiozhQExtCe8Bfv17RxNs3Z7T6pGnYwgydJqUYZ8uzm",
  "key21": "3vzY74UtTKFzG8ruqJcvPwksQSdnpj2HkNzXGCRDmVEuR1XDUV7Hu6YnF6MzMz5ZyKhCwueuSNRi9xXMBj2Sm2Qi",
  "key22": "3kxFxxxHUBB7o5W4qFud8PCYwpmKkPrrs9RKD9c6a7XS6hAcjg7vUxKnekekyGE1r6z7EFcRFdcDLa1ueXN1FsdL",
  "key23": "5KitdimtaAvWS1HsFYnJnohtfsrPG2ySgPickTLbP8NhFeuYC6t9UUf9UnhC3BYMCAfyAHWxyYmZmtu7Nb8oy8xB",
  "key24": "4tj8HpAdVdXB15DZ7DyanQNQ2Buw7DALqZBrWrgjs8Nkve2PAGwAEfKDqDbT5UDArcxsok4kaZ38bM558Y6SX53s",
  "key25": "4RFoMYdB3Kh6MbDXyUwF8asTDVzmvD8LNKWCVm1UeV5fcKi1mww3YyxzyP4LhzAcnptkzLH9vBbxXXzxjNry7EB4",
  "key26": "5RUpPgCvp3FYq4CNQ3KkV5fFzC1tG5MwEwT7AosXU9VWLaYLiVeZUhtfEZgB9ozeGmRc8LSsfpdxmn3CQWgB3WNz",
  "key27": "4W4Vw3kJmSQKpL9jeiVaBuQrPmeWiE95YzHHWcijZ6isaYE9DhAMhbPNJHiP7QnET3F9ZYtdoTtsdUDAWHy6E3K7",
  "key28": "3r4gDTiXT4h2fQYzfbf9KQMdswcthttfkLKfYzU6XhszDLgXdbDAhvCgSfEtTQsXqCudf6vLUi5AG5ZwMp7HHQN8",
  "key29": "3GmjQjsfAhcCJmxdPTqnLrbsdPw4tDt9RoeQZQJKeBpihfRntK4vB7cCfj4jpYzTM3xS243qFBhiC2tcNnQhutuq",
  "key30": "5t7vqjg9KFjv9pk48LFiMtavtkVj9aZGokv9cWNyioSA5BMVxBMmSS5Tek4tmPYJN8pwJD51YGYXrvd8A82EHhCB",
  "key31": "2RXAWUegeoX3UYhNF2SAtq4Ywb3w34GqrJXJgxMaxy9J9TrDkQkuy83mY8GG6ZZoa7sSmwYVypKesyATXo5zvQz4",
  "key32": "5EnzECYBWm9GmbfgurdZe2sCDd8SvKcvz18FBqvWgDMu7gvyj7UPPQvK1abQRKn1HayGiAS83rF2iaUQUu5KkRmt",
  "key33": "5BS1k2eL3861rZHeiJaC6oPM9NGtw1JCDog2k5cJWk8ZZqia6LNvBrh6vQTNn63DWVXWYXHfVswbNsRjBgAWV5nY",
  "key34": "3tr8u8aGM6YvDqbb3ynqdekPnAo2ikZK8kiTQaFqaoefKyDqUKiPkt8RcLs5V1zJTS976GMeL4GWcnFw3Vc4Wkfz",
  "key35": "3xPpvmtr8ydbTAhgSey73xq1sSmby5W3abYzQAEw4NX8AuCMo6WTDY3wdHuXhfzGpLbGDRuRNr7ZxaPsnxLsKvfD",
  "key36": "4tRXaLjx7F5AZ4goUak6VNC4MPMRor3VKjMpzLMd7zKGAnMvWcb5XVFzw8iCY9gm5ka6mssphkxcM6rj7G94SBQz",
  "key37": "fURssDV9jty9tFXA14efWiZUHdUEgwJCvs2gjhSPHKogQeCbdUtSKZrpjKbGQZvZhkbbuGfaBQaghjkVhtAjC8a",
  "key38": "3tVkjVTbuVW7WRC5wA9o85WrYUtRFfy54k6YAN6ZgFYQ8CeqVvWDRnzweVygPkZGPUs6iFSW1CSGDUPTKQCDAm46",
  "key39": "7ZePcS6ZRJYmSBo8Mk46NXqjUraP9yrUHosJTfeUBvHLafYWk7zMyq9J6W4xoDP34WUtYwnB9JpGxe7AydJrfne",
  "key40": "3pD7cAHtBegK6CpGNUoTbmWMWNpDkHGJAFXhEwopF1Fod6uYbS4rLuwq66yaZADa8kvfE4j4VadRwVeLPEXgTCMN",
  "key41": "549FjHfvW53ND4xhjEBER8qQ8P4H3S7eTDvY8gmiRWoAfxSw7x4pCCfpDpMfdwA5auWYoqUm3DYByp5YXifZc9sW",
  "key42": "3TSkvWz6udh6fibZYVhpYvQsE3aHdoEHaynpdn3MU6kgi9NfpoznDwt2Rd3Yx1aeexyp5uBvyVZpQ92uHPxEQaSk",
  "key43": "3QxnprXGqyHUuiu5m6i3SAjk5tYdkEYFVUft2VyquzrweWbtZsKUsicVx5RKmJSjn1YD3Gs5GcFxZzseHeguiKUB",
  "key44": "5dws3NCN57b4jq2dt5XshkjdR8auzTzgYuMxA77EwBDcMNXYXd336QdjFHuiiogGQWJEggJpjUHuehfK1VuA6UtU",
  "key45": "5KQCnGuPib5eMSUY4CXcyJnSDSFsKXNVu5VUWd2rsnU8QrCcpYQG7vqiuz2JXzEY38BPM7Yz3nxni74WaxgQr6rD",
  "key46": "2Ran56arCms1fS7455skXkst8EfAS6opmWwQjEEDkdg6Trv9xQ1SVueyvJRA9FGGnGykv7RQepcay2F3uNP4x7P7",
  "key47": "5J6Hj9C6rQWXz77zWjHbEiDn8K3nzrVjPXfhWywBuoYSQh5a3Wm6MiiFoHD9cQ7fJsj2brDPvYfCcQGfTd1j2cWA"
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
