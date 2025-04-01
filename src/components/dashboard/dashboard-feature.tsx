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
    "jQMHni4aHsWSEiHD6YBQFm7rPsA3Zi1b4EUNP9URmTsSKnPLTiHeBPrc47A7oWisSCBjUT2EXc5dqymreWrECwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsJKQQBZKnAKFy6cjfKec5m4teyi9CxEjQ7jf9UYzdQ4bRzZsSm4KP8Bk8FmRAKTmTw6PZZEDWeeGKuU1MJED5y",
  "key1": "3SkGEEmw8FmpKEJqVxwPUVEcSNhH4nD3pqR9CKQHcmsz2GaeRHK5kX9GigKpkxv7yRYWSHBuwknfnGStULAzmtmn",
  "key2": "2kcfeQ1tGXF9AWiYw6vBe9iPfh72XrJfxZ13aKYP2VUunPYyXHwm5B81gyvZsqyCQ6GzD9Aor4HpfpeQKM7qAD7o",
  "key3": "2r5EirmeADFG8WLvdWAA4oxJGz2cRuGzbaQcxVfpFxTQ7p1V4FahUuZAsvyXhyuJZ6SoCJMFk7PAiuDkdq6nwe8N",
  "key4": "5tTx7Z9JwPGjjZzrLiffGhqXNSxwbMQjYczSwGcNZe7ZcSqQSaGjTsuSfVffmDxmMbqQLEHY5yYZmQjUoUvVpV7i",
  "key5": "3n3Eutm4RSJgw8sxDUbXqzhGTfn3Yf4rbgSsNSimNXSvS7qvbqkrkurjvgMNFtrHMt1cuvH7ssfxyb2Y4UXxfdef",
  "key6": "23XLTVXdKV1FAyfaAneGaNbjTFTT8XJpwpejcDMbC3JMQgg5MaTS9bv8aPXyh4uxoBEPi6AjPr97EwqUjhtwvi78",
  "key7": "2FwvkEjbjAC5wmat2J1VhR44uwZ4JVh6DPNB6SUVM3CgMzgN15YqvXwFtB2CKgtpHQMmiAWMoA4sBEVYh8YcnQt6",
  "key8": "2T2KfmoKYjHVPXzmP1iBWsnQqVjPJ7tWqqm3e8CbdoQzrqBYp1UJuTMjTCXe21qCoF2CYRAAF8bGrQ1zVU6fmJL9",
  "key9": "MZeppQbyZoNJvRopcpS4R3rHyaoNsi7ZChUtEXpr6BTVuo2PFZrksfcQ2kdVEd6k5WpCtS45X7jfAq89uXUnU6D",
  "key10": "64wCfyWFPJuD7W3Z54qgtNmGQ7qBy2nnt3faJvFntCVzJw9pjN53VoRddWKPAeL11aZj5Uszh5fhVDzsHD4LwruN",
  "key11": "3S7LDyb9YGkCmSFz58JMJvWgsFTFS9v2LB5zxQJQhM9QnwhaQgzjND6qHPPTaCBQGf5jYGSP6JJHiYpJ8pzxqc2V",
  "key12": "2WftfDpbBo8vNfgsDzsbf3q6zz7bZvAiLpjrWx4hqJCAabcKzqHJVczFgMCU3XhwScTv8inmy1A9rzHCxn8UTiaz",
  "key13": "tghJF4nYkhyLFpWtkEavdM55hCkQ7SYp4TAge7H3VLb4nXp72BpRLqR5LkYXBE7oYYJayqeZhQJMtUHzuvzWSN4",
  "key14": "JZbqWpBUwtHnVvMUo369BS6r8QtAwF9WjJuZTyKBpFGmvc7Ke53Dsa76G6EgkP4HoQasGyVMrkfUsvuVp3hQZVM",
  "key15": "pPM6He3cHvxpEi9Qpnu5GvpUrLevTuN7XABz825AJZSSTq46CFbWUvWTPZmeWRaTfeqwVjZJns8rfdvJx9aERhx",
  "key16": "2M8m4dfDjrpFxzk2SFHeXMMJGBHdMJy9wD6y5JKQkDX8D3zu8nKcqPg1BRuybuxgjuWDEEhGSGxPSX2cM69EpNRs",
  "key17": "5NCzGJVapQfmXV5Bf3TUfyXZHxHRgjEkRvHHeFq8jAJWNmxwVGtb5cYcC9yQbZFx7p2Dxu89dEVFEJAAPW15L8Kz",
  "key18": "4dL6rAwDufkELEaCAWWm3GYrsT1kEvxXKYaVFKHJN7g8utb85X9QiN4igrbnsaPCdQw9wFi6MvaJ5xbFqMK9ihZS",
  "key19": "4WPsFFY4d14G2tjkVis6uwHkqM4nJ3UEmHP4XGQr4fJBZrVo47W8ADgetVhFniztHCj3Arm5A4Xs8dMSmPiyzQZQ",
  "key20": "NtFAoU2YHXS1HCyP8ftxQnZDZmP9AZqSrGZG9RH1egiW58aCZGEw4uwWg7avtagEY33SQ9eNdYvorEH2gcykATe",
  "key21": "5s6s5ouk69irgg94M7Ly83bnnkmZhkVWqaH3iQyj27K6j2vDi9yFjc7sD8zPFSf87hgUSKRSwNicS1ZsfJAfgUXa",
  "key22": "PAEaKawZY2eUPsmpRwFVtBbZucRYH6A4EpZJxgsvYkxKU7zgvWTUPuDiHfi6Qo3WiuD3qvYRMo4tNdh3B7PcK7s",
  "key23": "51DzAqXK2Gat7cbgxG2bscebUZNe4ZWJNUEo47Urk9TDyrA9RaK6ztd4myMZeKmcuwnds57acC43kpgL9ery9ycc",
  "key24": "28ePqNj2vVVWue8Zv5dG46CgBzog6K9NQD4ogfL8pXhZxhmYn2ZeyH2s2wsFuHDXBHfhtkRxV9By48oUyNKPSt3R",
  "key25": "41fmR8N5EzgyLVbWWPTidZ9EiapDjAqCZa21GaGCJJX3xEy9bHiWVdaxKBQWwbGS4sm5HAEgjtUfa6aRCuYcB5mW",
  "key26": "2ZnwZjzwpM2Y8pgvJ3ATwgFnGMYbzE5JxFgAY5Z2ZHJ9v5AYcv1moU6awS3nLLxZYkqYKwmaacv9VnW6aQphj2J2",
  "key27": "5FgXdsREAZu5hfJLWdrvMLHC2b6e4dia99tWuHXv9uwcT7SuZH5pxd1GifXKJM6yTRNid3NwzdK48Fv7PWycwi2y",
  "key28": "4ADVWd9ibMenKPNb1eWSC6JHfN1FULh1op5RQXMNTjyEXWfyQWrTYoSDoHre3X7aN8RNFjCTtYCqVF5uq4u9gDHC",
  "key29": "2JrjC3JfnAhneHkuMKUVJJhb3LqQbi2m24inS92AuFTxAB6ikYoKc4VFyytrRNt8k3jsZbMcFcTfcatUT9K44iPT",
  "key30": "AjZffSwHYdWCupEZb61byMN6iA7hYa9dqaDamjP9pBzQUpsMNmw2p7hrKcwnW853T4uhabDX3NF2PoLWD2HQ4kW",
  "key31": "2hW8Ybmh838532WLADFB63im5j3BKR1w6VrNVZ7UcxnjHC4q7gybHw8iSGZmfU5LtG3Yxotan6djD6ujc1Nj4xLv",
  "key32": "54SjpuBHVd8fFrbf8q8tM8uQBBc6oVbEMcD6sx8C14UGRo2GUmZY1Fge2Ctw9TrDedr6GrgMbq3CxxbKxEdygB3z",
  "key33": "2mjJ8cHfUiQHz866xCDgdScejTFeKr266kzsq8Cg8AgX2yGjXVPi7w4MpVeynsUEULFnMhdZdyF7AAj1UGrpTDPy",
  "key34": "2v2E2dQvL2CpT13JMtAAiDFVb72tvmvCRsSd6jaQpFzqjdrDVXMnpchFcb7FRa8dBvu2VTCdkSaDQPAUCeYL5Phy",
  "key35": "4mJ3egWDvGHAByt17gQdFqk6Y1ZhKiZ5Wjwwdc4C5UzTxknpEkKFSQPhQEkHWVSG6AguADdGst3q2r7PVwTS3nxp",
  "key36": "4oMSGm75jG8fR24rbKZLWGUVaKz59wgHLFVuJ4dNf8hiLmWhiQZLSEA5Bprinq3uJsmq7FQQ3MjVY3SkghUMXzQY",
  "key37": "jgSkcnwk4d5mQU5Vm6cBDEp2diNovdjQU8dZMgCVwQWKLJCimHEsUdoqi7eJZcfqsDiQGCrZpvQzt3jbxYTjrGg",
  "key38": "4NmpZamcaGYQ9Tq3zDD9duWGEmf3PJwQ2akQF4noZ1Dpa96zChp5MKhsMRhWpJxeidGTR9Ldvkk8D85H9cC8nVR6",
  "key39": "23W6yrZdSsNRQcg8MnZKxRNHMABbYEAFwwA9tFEAkZVm5sVa57tQQxeJsPncyoSPmqd8QP6DKMN1EKcSBVUbkQVn"
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
