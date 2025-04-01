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
    "2Ywqt1A9iGXEL7kVtJ8miMidxbusY1Pbk58YR9XHvotR3S1VzmoHw36JuNFuomCyNyEbEkbNDPaAAXeY7DyytWqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vgffKdEyVWGzphYt4wADhQSBUYZcm7qhYicDhYj8E2pN2dQHod3AoyFsaCrXUZcAH9JmVknDapETUXqK3YpXE9z",
  "key1": "4cmzsAwe1FQ6J2aS7WWiAoiYmeHaHtFNZX3JRSejmuC2nL6NmnqH4HudznMAF9rdU35VRbqjNquuxjpq3jevEr63",
  "key2": "3QWXX8TNUdbLUYdCFXSj6jYyTB3RwyB266PR9xkzCWaeffNA1P8aUc2XYagLmEnyDGkfHxmDL4Wckbhia1Wp7TBv",
  "key3": "2UEr75fvhvzas5ayPpbkoagn11oQhF9VvgvzTvJXjBiwNod4YXaycrwP89NfpHiXxWQRyRHgpiCRo6RZmG7MNyqy",
  "key4": "5aTiwkNm2fJ1N9LEb1jPUoJTjqr32dMbSGVijS87TnMR4FV5tXeSfZGNWsVWGMpGTZbVrHqg4UVGWPauFTfFYW1k",
  "key5": "53G6ZbwkgZagmG6J34LQbFk5Q3NWeXzTx3zZHEW7SbdEzaAAaVPR8MrQLBHcwH2fgmuzR2JNE4BvCTRJPcb5g7us",
  "key6": "21YvX3HMG4veCscbsG2R8HToWUf1HaZ82uwBUzzs3e4GSrwLwFoEtSL2rpJZfp55SaGUnDih5MBRBMLz5pGxEbX8",
  "key7": "Yxc2DEMuFfGo1bCWBbKJYe7QRpLBH4Zy6QC95zJJtgg1RtvfFJELjc1B5eoXq5M47pVF8uiobshLiHK6PTjwecm",
  "key8": "2DJ6DFpAu9nkCGVokAfaWWGQgMMTEcnK4m6SnMNjx3cmUvq7up3rrN9GkfikA9QBNXjQ5HCyRfgjpWEqs76Viqxy",
  "key9": "3JgPMZh3tntvg9CipMyq4sZZvHpFiBRkGx26D3WPEHtJ8C2eWqXtC1Rrpbzdpoff6VCbkyKxkk8uCXhwXa9YDPfy",
  "key10": "5RqBaUHt6ZdJamoGU7otgi9S8AEkuWHuVsbNpLREtK9Qd85rJCYTjQb38yHMd3fZtLtkeEyFoh6TP2RF3bKmGfwT",
  "key11": "2DbRZx75exm7Hysbix14fuzpNCTR1MdjWpz4atcsfjVhBWmeTVHzFPgSuzNS5uh2Hp5AJkG8XskyYQppNRbx75tX",
  "key12": "NNCohWRFDopxzQqjD2ouoLeQuZCrEsfarKbsHUHjdoKgkt1zZb3nFaxcUuXQcH5SEHaJE96qUKCgvx9GRNSczeM",
  "key13": "5AeyDq48p787KVMVoHEuoz19pBjEBhqLNoHXu83SztUStVPD4XCxEtZM63oShg7P1TCqFY1z7a51DZHCcoLiXp2z",
  "key14": "29nfZj8aCQK8PmCzpJUudeBoPFHJAgSFwg12aBBQmxgZk2NXidp6RbcgFGQ7a1FHXN8Y2n3zFZiCutcFg9czzKfJ",
  "key15": "4Rej78uDPfbt1KpQGQKRUjsykb2E6eGox1N6x6Mcg4b4QtdLccphz8M6Ei9hhnK3AeScWw4bSnrJYkzLX52WwJju",
  "key16": "5Asj6g5j6gJmgTmpPEnRY7U9CXBrBXu6Vj4sKDugwh33y7dHkDSPuTmBKg59GEWv5qTSTsP9qyfRoq87PNz2NSU8",
  "key17": "5rrPjtrVEg4u55JG55Vv6s5QQCrucHyiDdRUwCXT7N8bVr45x33fvgD1sFFuc3R5zLcXxWT6FXCBmi2hTm5wTRZP",
  "key18": "5MhKn62h1A2FvQEQCdN6vCSejyEsFBMsLmQNKNmWsV72wASy5HK9EY8v5BLsr3RrWsHLKKHSGxTnDQQnNahSrRSm",
  "key19": "65j8dNLUWVWamWjw7sAjVjpwo55vD429UrDab5iZYbTQ497n9G2JmQkN9kVVbc3CENzUEXdWfVK4KzpMaL4PXL3s",
  "key20": "5KogzpkT8EynqLCf1UHStQMcr1ZT2LNg5ZxsvabVSJj27F39anttUezqJwaN9krr8G16GRBhnrseNqzWZTk4xS7g",
  "key21": "5tRDCy2qkufUMz5HiSheeBmEp6TYGBE9zDAjmZtiDiAyNqpecvexwJQ31sHobTHYJGMKmGkMXHhaf1xkkyNia8RU",
  "key22": "45w7zadfkXieQ9mmChhxz9NEGsSF529wnKMfT5GdxmKFJaRosBkvKCdPjHR84eVZUwXaNJ6DUuSjzxDkov5xZA8T",
  "key23": "5gkoZaQjNrBBxgBDmz6yXRpeUHFS51ijpuMYLyGWZkkDY85tWSwkjn6iUKhuPZthhSqe6aE7f992JfhKBGwuXPz3",
  "key24": "2reu8aMKRFfwyPoKx2jsoJUw6yN8pMbke1Kbt2YUHyTvoeTx7a3J4jWmCr1bY4UFQf9QfgyTYgg9SAZvtaAVqFSs",
  "key25": "4pHdVcyTZNNAZToGDvtA9Hh8ck9KUkTUCqJZjSTq5aBJMPtvgihydQxeUeRnXsTELQ3Hyj94nmhR7gbpecGVQGzk",
  "key26": "5NCc2i9BChxVDU52tJ9ACPzUwo9kRu2SaR3oSJhT9QfLr5xFG5hBmfhM1ZWbxhYqsag6hzDGFrtnaxMN6gChBCZN",
  "key27": "4FvCDkUFHXPCANcwbRdfBz1QdhMbuj8C34KsdgbGzUvqvuCfsGVGt8uNhJ5PVqTVTiMz9RWuo3QmDbCQM2AKMxMi",
  "key28": "2HTejw7D5ZSC7K1KU9nVH4fJtqKUfTGj6uaLNDYk4Mq4RBjCMFm7jma8xUUKh8eB84ynAqpLoxQDvWeH2VjnXriE",
  "key29": "5hd4h1mEdNmMBfw3nBHjnWWPufazLW46TcP55xFfU7drWkhBvBByUSEvitZSAzVd4eXX1BnCmmEqAYzFnF6RxXY6",
  "key30": "4QLt1GeSNJVaapHwsTYwePUZxP6quLdBkfjpzxYaJNB25WaSNAu84VrCBhxz8HyKkwpTgJ9c41gb6dY2MvyMrycz",
  "key31": "fS3qFcoDLFmENeWamoXvHTU2pYtdT6fqnPXMXrA4zhfDjuBmjy2JsHGFVtvZh78MTuqQ2ayZAkvhrrbRj69JwmM",
  "key32": "5U9vRDpR1rtZVvPKQtjYGvBRgHkrj2urEUxCnJG3v4AQjjXdrsoBFG1QJ5hhAEkv5iLxuFcjsWAgBa2ky2hobPf4",
  "key33": "rjKdoB5sjhTqphxpyhMybyYDjxBGkSMWfxyNTVGkhgL5Zh4TZGvydEQQqDqsT1DbwFHTNau9adm3x3yYaJX3eoV",
  "key34": "4SPeZ1GtJaEkPVExG4dzwCPp78zWAPxctf6aPXQSjuXGDGKitorp8UbSckiTzUG8vSmzs6JDTjn8xwDqcnMqYZSK",
  "key35": "2Kahd6eLSMh1dzjNoe4HkwTLr28pSEHjP6z8rqV5zNsmDCpK7sHKYjzJRedN11LMXWnfrVgv24YMAn4WSV39rAQz",
  "key36": "5XzG4hkCgW22SE8RP7Drysr3zk7PghXXxbivkmSUCu9s91oDJgW9zcoNxNAKRfpSAMb3JJEYmGhcTWbiwUSRPXHN",
  "key37": "5U9WRwsUCdLHkvrCeeWCBhHm2yG4HSx3WjpcQzsFsvAZfX2djCuLWaAAsfVSbXyXvbGEfJfXsYyZ94qag5Xu9QG4",
  "key38": "C72NvhGACgUsaU9prNzFSgMh5ZrefgZXqBCxo8K9vbSLqDfxBrQWYVauoVCeMoZkCLNKTe5jWF4wLdz6tmwgDVG",
  "key39": "2e6bMJkYgvvEYefvyaUSnNTZniW4SdksWyk8V6TDbCie6xcs7LWfKrySQnwsBv2UJQGzgzRn4pi5TS5k8123tyP"
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
