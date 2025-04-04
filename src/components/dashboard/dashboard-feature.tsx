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
    "3gegCra8hLJAkDUTv6QnMfkCmZfQsG2SuPKMQRTPBJPMNAcMwB9gVgnHhVpY5LyoiAhHafHohzReFmFcaDKeeYAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vL2JAfMWSBowzah4mUgi1aiSdB5tbXKQcsvFqbU7UA3oCdsoc4Wc6xb8cVE1Y6zVa4trrpsiK5vX5tWjDJXCenU",
  "key1": "4A9SFA1SXo2fcUpU4bk3cA9bVqoqGZNmaXuqJBe37UjtiW9ZaZfqsQqwjmqLH5ZWGDRwUXh6yGhVVTPwfERGGvih",
  "key2": "wo6VhA4uN5vzQh2Meh2LzFtyuy3ZLGEo7js8PaLTCBrFWo9m2DcRqr6euj2kBzK16SFWk35JWuhLgKBQeocGxdw",
  "key3": "5kak736DarypveScLBAPr8pEgK9oXL36xFJCMwtSs4sSP132F2pxSRahkRygEn4Qcg6mS6fndFznnHZXns76k9zL",
  "key4": "2ZgekEWT6ezuyct52ECSHmgrij9C22xg5g8q4NbHECz6gMMkViGSR1ZQuqfWbJTwunkuK6f7Lsq2pRRhCPiN25xT",
  "key5": "4hjZfLESo5miPmNQDRP9bB8nxypTHNvLtYHYT6DLy3HkiRWNzZSqdENyLPLfDyGL8ZviLdSDJdtyiyRkWjed7Uka",
  "key6": "4WdWXFvoKNaegJ893eGLxttYqfavAxnPne6pSRN6DMPmS4Sd9dtaceebmhXxFRFqG1fpx9YYAZnoXMD8LoKg2bXG",
  "key7": "B6DoJQ3Ddv3aiXHLe6s9ztUQ9Pq8XoC5sK8JqcRoUzvwGoRa29QXmZAiMMq9Kc6wMuFVfDhpKxQG9iMZDNAYnet",
  "key8": "2QRSjWZHbT9gtzMtcTGoNUadLsTaMwU8v4f1gHBUyapcLqJzfM6R1psGgejGEhtTNgkM76X4UAvXVEjWxEtGYXp9",
  "key9": "3NbmvgppRcB423EXhV1aerhn9CcXLYjjGzyHdwVynjuNaKqarJnsmHWPb4YfZ1pCVihTMpcFFTmVU1Qk3uwNC8PV",
  "key10": "isH6Ee9q6SegA9HcNbhPKnJXEC9H7CKxafMmjftD1mZ9vwoDZffdHxNyKnMTzWDgh9ttoGAHKzPwNJU6ChZ7yuU",
  "key11": "3jdqcUF5AG7tJapoBgxZry76DYDw2TKNXr9VQkEmHD7keK48g9LxaaDz37RvAHenD7afdV8vhnwxEYPNqQxtkH12",
  "key12": "2cPrk134Fu1wSLJQ7MSAwceGC6GE2FuoLFMGvCWsZLSEdkCEVYBV1z36YAogWq8GFkyPgkhRS6uMYiZtuzcTKuiW",
  "key13": "593S6WQHV9eEXPXp4g7VYyadfZXuvhbGSsxfp4wovvce7ALUTN6o6gT4RhpeNnQwZ2BZNGBdWv61Jkojp7Nym2Tc",
  "key14": "LcBQZTCMNGxpUPNkHqcyCa3TzMov1Li1kZ58iqgShrq9kbGbaejauPyidwkmPuchr2i8Hubs6jN8T6Fsu3XY81m",
  "key15": "qzZ7zxhmheEr5sBQW6yCtKCBGfi4PWC7K4EYdka3asZuTb9LvDJ5cyeuye7phx7saYiaPZDMQkU3r83SGR4LSb8",
  "key16": "24JW5UKVicxRoDkHbeFHYqHDYc8tGLLT5D5cJUgEg7WAh7GVxp2ox4Z2gUVqHNUkADezqf5ZEp4gxEetGNGK4civ",
  "key17": "ZSqkTaC13Cm86zJgnNhso5Mq5XZPwREHMdF7PgGDiiGzYBrLJkThUoTdRAVxtvqh9ZuPtEwvYDEKkQKecCF7a9H",
  "key18": "4YdtfpgMa2zS4zmMyd3LCdZSKBqcDn96V1HzVfGPvwcdMyDrH6FJ4uE3AeajBwhcpEgsAvrQedcjUAqgZRTAURR8",
  "key19": "an6uRiBFYdgxngDNT3LpKuLdMS3fPd4KTH1bZLzhzk1ecCdqSgR6taJenGtRAg52xodrZ6CzUcegPLCiwVG5Zkp",
  "key20": "2ozis8SoMxrPRXvW8Jsp4YUZkUpG5kMpbuf38eQ6fucjfyDuqqQ8pdGYWLChx29NEpPmWQWKUZmTMggvJim9F94F",
  "key21": "4nBcKQUmDu2ckJPfGKepxLbein1zp6FW8i6TrYbLx6F9sZE3or9sgaH5oU1vp7kRbSLUt3M4pguqQVsgJy8NKYnt",
  "key22": "3bpZUXz7Gb1h9LKVdNaM1vpuJVfx5MKRjFPqzjhJ2JdEfmVxXL59j7eas3JXFiYL5HARAiWofcpHpmWzjZV7UH6C",
  "key23": "5mxnkFjyyJU7YtqiJokKjcMG1wdsZXAKSXebpxmoJsrGoTbJQumhvCmLQrR3aUq8LRSEd67oEZHRsNHguRH6xDV4",
  "key24": "4GZQjs124eShFACykQo4QgH69tJTnNKyQ6NSY4LQj31w4kTLaabjTC2sc7aNRashgsVANski3kxESqKPQkeE1Dr3",
  "key25": "TBPPfHR1fBbXuhmSQMqyg23VMGAvrsBVyfuTnm5Bz6gVN86HZzisV5ERB5eo2rs5VMgs5tZ9b7CfEF7ez6QTX5H",
  "key26": "4L7YR8GnbjZvSuoQp7bhVcBf5sqXdd54iWH2cvcNFw1N1oL79ZG2y1QinvU5qutinBqbFQeTD12nwSSkieBTQXgD",
  "key27": "5SYpPcDTh878cT3gpAh5GUmFYwvC6eiKv3TD6cqmB5SFLJfJcwawmpKGZf9xv13HAqsEyLvXpSFr91yuyRKFZa1k",
  "key28": "5d4mrsiTERxrexeW2SFe2BZxHoA5awHzx4j5KVQTk5H65BkTvjSdKAJF8ZFPVhNs6qzxknG7KHB35EAWVDMajh75",
  "key29": "5GHNtnwYJ3bBDzWcy2uj84iYAKs1kH2gUonL3yz5CdjWB2MrbzdFN5XBEQQkF52WCFv64aDgwqAPMMW1h12ikvVp",
  "key30": "5mGtDhAxKJcpkZS5n5G3gksZwXdfU4pJfLTDUdB2Ld9VV8kgkU5jL4cJDd6gNPSUJwbVPEQ1Fjfyn3nakFyghWaQ",
  "key31": "GcJJeGAAjzTNPSAM4ay9BPVQv6PGjxt5A2zYuWam3NNfshJxfVMwZ2YAsP25xu9vn5cXnRrqvfvKKMwrtSwUNFX",
  "key32": "5GiieAsBd9x2EtehQLMASexg5hY2gYQrJ3r5fea5KARFBDjnS1khbvgVPmEKsbVAXcXLhr7FBcvbDHgKtbf3EvpR",
  "key33": "54bZhPBNaUgAD51bzgWvj7ZiTgULgV8QVmwUQhqpmUkMujkgCcUVXNxL9Nrw6bsChvfomfY2brufxyr1veGL6bfE",
  "key34": "5jNvFFYo8Ai7heCUz49mtoFusbmLiN9B6WoM65MHGzuNXyqtfouVPaD4sCMyMrNkmBvs1TdvuFJRwML2A7aPjQ2w",
  "key35": "xKHicYLGvCPvWxNHTu9ZC8Wm4QeeB7cdtKE3Qj2BoAuGioD2YT1GBdk7Ly24YWnt5KZdkrXeoGcEZ4L6tMs6iYE",
  "key36": "2pMt3p9158sN5kiiXwHWK4bKdoax8hPQgqWLQVAX86gijSvxjmDcwhUKFYknXuhCgPRKkJ7ksTzcmeNFnQxNtesa",
  "key37": "4Sr6Cvai5gYAFrh9oUJpLcU5MgS3NRfce7m5TnpXt7UxXvf2ey5dXoPBv7CwynZCETP7nb1LWH1Dszd4Qb9iwqNi",
  "key38": "2ynxcgh3884vW93LndwqNw47bMyts3Lxapz9r8PWJfvVMk8ANNfCU9FtWDuohtfSVso9VG4QK6E4mzqrNsrt1uST",
  "key39": "5vbPRiaBwRQFy9F4Frfijf34iRuhwF3Romwu3o988qqgecz35T8AQAJGqFSAhjT7c1Rrv7iqTd3UFQqf6FkN6EBC",
  "key40": "5xuCRT7qGYWJSGjRFkER1CEZC4HU39Y1tUUoX7BgRMhTqW8dFiuJX9osXfeVCWdfFaPc7bgwxZRwXnHkaNdexDeh"
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
