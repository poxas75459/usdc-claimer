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
    "5haC6m6NFpC8bRyyC1SfPb2ipqK91211HSKUg7w8XoR76Qqvg7AYYLwvEBg7WiAF1R17GURQHdKPYUovSGeyXxLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uw1JiZMZVxnT7Sj13qaJgjQ713iq6uAzVRfrwhxfdoFimFFZrNXM3TWqxttiCZ7gDUSk9WjcSVPdgEzJqyNdigD",
  "key1": "3hHCDGARTPiXBGiRXntaWkJHEgF5fhA4RGVLPG25LUHQsAq3iiqamhgofZy2LmS9yqpoDk5WiTuHU5FmuuxQ2evG",
  "key2": "pUvQX97Pb7NvPrQ123b3a5NANTbNJtxPctvaxBcchTvgmTyojs5Muaukwr8nhjKTbZMKHXsXCbqzfjHnJVLKJZt",
  "key3": "3BhiTByaJJ8tk6kztxNGtPT8iK8voEywu12qG3QTH8gWMMuYUjMqMhxuz5D3kUxyU72cSbBpoX5SszeNKMsrwU7c",
  "key4": "E3t41ppi8iCUcKMfc7HGhZ72KzZxbEtxhp74e25fNYwAEhLnTJADGV9U693duhavvjCb8rTawUxd6W43gDiCxJk",
  "key5": "mnDjKPAqW4AAgo1cMTXjHXbUfi3iwS62cJnSgGtD939bQYLuo3coUHKW6Rs5UCrw66H5YBG5mAntiGHc51MuaKQ",
  "key6": "2LYFfbQ6gP1skG9gNHS52wrPZB4jSHQVrQgrUvmJ6gKZk8Pq794mUFDk5Cw5gBNnuDHJ6souTDGcAg28sah5cvDH",
  "key7": "5WeW5YoxE6Wupu2fzBjmgZECYDQL8esSCKbpFUnpMz1FacsnjsZXhGAEWbpTTMoNVzvmj6aNwRdCqL1xdUpgSJXe",
  "key8": "4BbwcuvQymB1W2B5kgeUg3gWz62VS9rw3AhqHPeBa7k2KV2HanRsoNa2Y6aKrtdVjtBKsekx5XuhqmxqRp7BXetq",
  "key9": "5GdXvSYmSYMcSQ4qFXfdBne1KNNv1FQsfEZ2GPJCMKKZ4wBbGArp17oNya5JaQN15oqzbovPhvPkQZqvAnReK8N1",
  "key10": "5huoMfymHpyApUYC3WUM2aQtUWatdPvLD4vABkUoCUui8ZKjEqkP7qgUhikRYXk3ceAajjF9DM1ubrEpCjVSUab5",
  "key11": "3AC66Feyd7QUvkpQV47HVYaNBHxcKDe3qDV9uEpmueZarH8XaKcJPnC2nE5Wh9aaHduFpmk3nBzXauS5qMC7ci1Z",
  "key12": "3kcaxANDWZ9ZJk9Nefbc1SqKu8Egxx8b1Fs99o7kNLQu1TdFQLWWM58NHMqgWBcZ2mLvDKaSTp9uKzEANDmD1GpD",
  "key13": "f834LphQERT4yiUAciXi9UZobiSEDRTtzFAucEALzKhvTiCztA4DQeRymV8f1V3rioPiKaqhVLdW4BsM42KQ5cY",
  "key14": "A2Zm1B1CAgQUuF2mi4mTFkL7o5JAn9uGsUnUhjhGL8KDWmjoDfVHCXjaiW47pbJWrhv1zF9N7Jbb3HSuTtdQhsr",
  "key15": "3Yo7afmWCvQiB4ehTSjiay9NaJjxnGMdEoeyPrwj3smqvcB3tmNuWwZGWu2ANJ1mCXXWy1uTpo5x5vS8BU7LqJ2u",
  "key16": "29w2JKQ3MPczLPNYN25uZxa2geB8Yt2SKhdqQhfyjqQKXhEnVAodhGJrfJNuUq2cko8jwfFWyALNKX1yQzWs2aCz",
  "key17": "3ogkhKNCkpPMfAzS3ZPX5A44MDMM7ZDYD9jrA5Hz7btdbHZojDmnz9Jk4p6VsRq8tpu7UkgaBxoW5kZqMAHFaNfU",
  "key18": "N9pAr42hyXeAi8CUWCxDSt4G3r5wqpCVNbjGEsRbMu8ic4faJq5aixtHyJkXW55GPqm21C6TShfPcpPx26iGXwD",
  "key19": "FUZmMY9EG99JGGdv8RnfNE5p87897MdXWW2gWGbUUzbaJeJd9xqnJgSdh5rjGB2EYRZGJwSePV82CjdYGCzoasW",
  "key20": "2WvtEJt2vwuXsqEVVbJ3Wi4MaMxTWCZC1HXuX7bnJBvtoZBCevE36mSxk23g7V4wLjFrDCqiT1XgkwcUVJwXajSE",
  "key21": "67qrWrxRNjAg6vSGT9Y1v9qc8SKnAfzPWHtBdce72DRWa5RG35UtGBngKLM3R7Zs7giLCh1w9rzckDReUVzq1SBU",
  "key22": "5waf6VEgqVECGN9RrSpN6S1ojNTsLz8qX7BgqAuB1pGvDMxZqBmPszsNnHnVXKi7YnVAtfAngS2GW3VBcwxHrcz9",
  "key23": "5FzCXoqiy8JHBTvEQNsD9rxLyXtKcX3twqW27nVZAz9Tyw8tFbTrjVcSwZHY8UDNg3SUPfXtHcTBAifUvWBeJ7A8",
  "key24": "4FdtmaEkfAoKrAQD9V3siGiSYFuKny2jxHR2KXYdkos9MER4Dx4f5DBGY6UzSfRMXBBqYBNZxt226HU477CWSHt5",
  "key25": "5gGVUd5xpBej948MiNPnQhj5LCeXKEZ4iH7TuxDUAWVuqcE4NCUYdqDd7RinkFG6gbipLfpmVaYpyEmszMQrKSjy",
  "key26": "329knmyV7khQDpzfNZcnoj3VKMpvYR9dffhNxjKMx2CeQHc3iZQfgmhRZYGmC2ZPYeUHpai4gKWdqXLu7agNMPz",
  "key27": "2gZZTFGuAoftN64d67YCVzcra2KMR9CccT3BLDevWiP3TvCX2cxDJtdBGokVE9oQ2xxcPvyX5awCvL99cvr6ZynC",
  "key28": "2Xo161wHet5icQRPD2JHS6nqM3LPmQsYvax84qz8v3k9f63S5tV7iAnL6yXpsDN6KtJoTD6GW6MQvu471nybGs2f",
  "key29": "5ssy6brprnyt3vbwr9hdXi95Jkxj1Yi3A8W11dEJiwEwvE3B5CtMtwDFGNpZqYG1ZBZX464nbck2236pWsFMvh5q"
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
