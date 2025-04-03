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
    "31eutgj95HsvMXcLQQU31AkVhZqcF6mw6mfW7vX7LVppuXputrz5kLSznbtmfx34q6Za8o9QEVj6UepHKcwrx6Zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AV5ZQm3wtrkfXioaRj5uUw2jzVJccW6MxZkWekzgjkgWbWMYkrd7nb6V9ZpxkfVeZRASM7WVvbwnua8BdT5WAH",
  "key1": "BHEFE6iN33f29C1L3YyRbzMReDZfYsCdZiZgrzwBdgybqPPyroxBeRuds8pwpKpwwMUzacjBoe1KcLzHchmqZDW",
  "key2": "4Hz69ry25KLe2UKGuHYM2u97n7cyGyscsRdqkQKpfWXA4fG6jNVSBBGTpTgjqk85BBEwGxXGC4NUvJ4nzixwCYfV",
  "key3": "46AxgWk7eFcj3jGbiW3YewuAhTiAziTAVXTQcbxHTqASDdJwQt8vAtoquyAmRPwHsXhngG15jhZJWJnvPP6R42KX",
  "key4": "2aFhM6rNDwJS2MH2Mi5sdpHYcHb7bjoPB3agMT3HRcMAP48nsvBU1pphT6GUETWgKFb49cMRjhXRnWmKqW18F4oR",
  "key5": "561W5wpQgjFTnS7UXL7Pwg3MutCKUqAtwFrbkX2GqzFahUGrkERVn4vYbhoYSxHADVwKxmDhgQ5U563HaLRotUmE",
  "key6": "5bTq53chD7HbCRGYiTT6jJu7WQQQygftkaPGJPneMEKERUgPFDHrD2Lm9YXPH7TG3vcLuJYSXtnPFUnESQ7JaQoo",
  "key7": "jg4k5FVxVDaVYbLrYNSfAGy5y6ZYppzfx3N3w2vAaCEN2gRP4mg2bqQe1iajpy5Jj41Cs7aaT8EQSXRSi9nSUrV",
  "key8": "4WNXHc1ncMpXmnfEHnCVrQBopsfBbnsbi8kFZZwNhX9kiwX3vmK1Y7Zz33KHxkxy9MrQACn3d5sa4SdG5hgctGYt",
  "key9": "2Z1UaAUQ3sZYcJVqesKjp5Kcznn8qGPzUvjCWzdgUCZaPEvgCwX5Lkp32Rpp749RMDgH7TfwBVENdo3A8vMjJPbC",
  "key10": "XZjoRbD4WziEd8FPveuVDW8LUaa1uD78xpY327fAkALxbQGVUnqMTysQgrAEP4Zmsw83jo3U48vjUcgsLSUptmw",
  "key11": "4mNSMyS9o8pzY9ABFrcUfWPY58sq7qfynYpuBM38z1Lrc2Djt7ARTFQzzvSFWMWCD8Tx7gaEVEtH7pytc4hD7yG6",
  "key12": "3pQG3pSQ2ZchDipVKfBxJF1xvG3QeuXb4M3zLsPL7JhY3szdnAEyrjEXAPEeofGrdWhaNzg5FSnqxeRxAQ3SqQ4N",
  "key13": "1NrBxD7WKpb9Y1AvNm9y99v3z6KjzYKMdg9EMPWe7vbR4FAeHnDU3rJjLxxjUpbrkqSFjQ3pUJ3nb2v1JhxzQMq",
  "key14": "BuBUq2jBcjUqCvp35bzqJsLPiCaiPCjMoBN4SZMwqXyTDH36SUaYfAq5BpFg8bdc9B1RKVZPgZKNmKeVBta6NGg",
  "key15": "KhEyv8BienrLnYvQDV8G4zb5kgsJe9HG13kQcWSfMcXtH5gSZ146XRbqJSufN9p1anneHhp1Yi6EVwXpobga46q",
  "key16": "3bTe8pkFUQUHZkguXg2YpTKP2f8qxFje69cpxCTzvVeBAGomCX5HFJhUffYvtVPiYwkkKvcmoWNC1Ggo4izwMYis",
  "key17": "5hzi1Nn9ZJDWiPgbiEDm5R1aJxVEBET6N8zWFQmTuoDtrsJVMhBh7ugRqNREMDZXN2t1aDWZ6vFfAbaPXh6LuNDJ",
  "key18": "5kiSnY3UYVXg37FUBTwxtCkFpSk6CTWLJFKsdXPigpFqZTjqzcH6aaNk9cVdZwynuYg9f4khGqfTWTBzNAaknzpb",
  "key19": "JWtpaRCvAvWyjrsQu3WX4tyPfvhVEWH9VPm3ijQx1AxQHYTgsh1ChbEMmxQMGyfotRkeWMVuV9Dpdf9Z3kSRxRh",
  "key20": "4my8BnKGKRGYLZQsBpUdj6MEPDL3MBVAJvQ7DT286XFJVpbm4JvuBycmM6RHiEqHaAfQM6oir6wdgJcMipasNSt5",
  "key21": "44CRf1JmV6n9QYL8Tg9KCxWH4mbafNyx46SkCNB52BRAvTqHWTmLXg4H4J4T7csjLQ4uQTNeHuXLq1XfnpCxj7HR",
  "key22": "4UV1V3pMrD9S2Ld1XC1AfWmPtN8TRmxFowggMiWsak2s2e6Lg7LWHaHGPXx991YPwAgj64nBffvuibRpCHCD95K6",
  "key23": "3uAwiHBPTjGBXnBGwyV6d1iTPMbZjkTx21fy24v2qhsbYNHUH65CCmEvKBkfUioQ4sfh31PjU9pU8K5VVgjufReU",
  "key24": "U9LSGbLSxpLWnM2iSm6hgHQCq22NQyhMa4ipoWx5H1QxiAFBcBmbbNAqsXLXE3cRF1EqPaX1caW8KFXfk1ZFkLm",
  "key25": "5XBzPgDXwQoLSfemmYZi3mJ1y5WSpd48kEaDL3y8riVKKR8y1Xq25fMNZ6jMMpnVhW6g6vaZBD1mc1WHMFwsnMgW",
  "key26": "VJrWmdARkJj7TXSFFzWV4vro9UAycJU9XHsD1Jd1uSAktC3V86dVzuXsgpCDLeAajPFATTDg1EorbYLy721phUb",
  "key27": "3zCbbqQVBidnnh1ZvNF8fUAJ2yqSnWXc61JGNvZTMxPzGsM4nWpGVewhaXbaJsCqYMoDuqgAyfdqHonQZHfEuQHM",
  "key28": "2h5LfYGwiexS7g2q473xVTstadKYYgeqTAXePTB1mremFwnoQRKb5RnRx8irGuJNXbkTRdtpZ7NvLxKEePUNyfWg",
  "key29": "2LKDwJEdzZk3DPsJwE1X7yRq1PRoSu1YWvGbwvqoTbq1NkJWZyHmhMUZyKQCebGbWZhNAJEUJP6GC9GShaZ3sErj",
  "key30": "z4EjArocLpBwLhXtqnkbrhVwLkTvLaFputRLf4k5sDT8LJ8SZjyzSV8XPovbu9d5r6MeLPKcReKGWqfhGtXtbZb"
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
