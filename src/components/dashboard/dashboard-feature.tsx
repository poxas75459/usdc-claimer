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
    "4m1xe1xa7pNTiEGpxfexYbS4VXMxWM8zV2zpESPbbRgrgi1oyH5Nd5F5PQMFytNETmDMY9n5bzpfSc2QvEphjuUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UNqAVKdGgcdtYgTQVRx5HZDgtEJaNdK9NPjhiQg1m4wFHhY84k9CyywGBJ3QdVCNEV9kkQuaPQrDeZ2UX9moiBy",
  "key1": "j49DGFB1L1WR6eapHAsTRSjAUU8QGBmxN3PEn8vVJkfLkN6Pk3FqXk91JjAqMNZ1ot6ZntTVwa8jNYWLDw9HydP",
  "key2": "oGX8LvpeSfpLQFapmyTqRhUF5fbfUVzek5K1vCWYqzQKoDmdrjVSnwZmwRuxnWtCHfXn8VD3rntJHLE5Mn1h5Rw",
  "key3": "3ASK6egdCcTbUVBQcf5nNLJeDEMxpP19pAgZqnMufCUVuE8AazhfN1wF4ttsXvVjbKSFjEQZrJheqrm1xqiNv6xp",
  "key4": "3qCMMQUt7cFKYu83ff3n7FmywGZquN3Nq4eNgQso8jpiVjkKxwCDoczxU2yzmdZqR9dEDqKwvypAQrMgmVQBeMKD",
  "key5": "2tDtkiU8nByAe4FvbRX1m2axL4yW4KA3ZkUEecWR1KMNBnoShjoieYa81BEdL3WU9pfjerkYEVqpjrfiQBsZrKaD",
  "key6": "4SsMNZBjcKWbnh96iaCFMGzb7jNzfnPJT4PsQpJEDfwy8K6Lo7F7fvEAjTJ94pUzXVtduTEXWZ54qYyhvTnFqEy7",
  "key7": "4LyhsqKo3gg6vU2EjFBbWFdQ2JYXeL9zhKiASukv9YtkrQk6u6rTKPwtDm3D2kGwL471ZZyG9mt44RfqU3wWhsGq",
  "key8": "2CZnsztHiYzGCycAZzo4NBXomqHaHLDmHHAQMgFrG2dTDkez8trT5b7pmmQBjAPFnV16w9w5iwzYPoVc6Lpd7Y5e",
  "key9": "2DsuDSzN59cVDyvdKqjNQ4C74MheKbURBou821GWuojSQP8wSwvP3b1eBvMiqC2jM4wcFtBc7z4h8RxXmP3twtUQ",
  "key10": "4k3aEE3e5qcm24hzzdjLPKgKFTyh43RVq8NixNXXtuFENnofFkFgkGYJNnvmocpBAiCQxNDsPsTFVBgjBhGNQkvm",
  "key11": "2bCSke9qdJrfSjsWCzSpZHSLScNLiwLJT9q2ys9HzJ83kAXww2wPsxB5aFSGb8n8URh9zgQrZuUdKXrZ3Vk7LKkW",
  "key12": "2Gc7NjWhKa5UnSt376dqXugDAUsYqpfH8JCGW119Xkzd7oe5Bu3V1tZTi9F9qjjT1bTNgUs4BUAXk2KenKBbLXYw",
  "key13": "4S7WP1Yq2mbWzirAZWTucrPCQgW32jyD7AKUPmYc7cUsqr7h8s5LPqoU3mL26VV8x7Nu7dxS7TFx4bdaywQGKLBS",
  "key14": "4FTrmNwab2Ue2XxVpGTJdZ4wTLoNYVwB2VnPKu7CajYNmZuiTNFPXzkrgZTHwLvffFuNx2V7C6NRguPzMuaFsXX",
  "key15": "Vr1im6zSxwbMnCwKnYPopsDFQ5WSbZq9WT1SLzXFYSzLxfosRtLg5tLgxMA8SYpRUD6ztGpUzhJgyWWaZWac7hK",
  "key16": "5w4LgCeRzWjEtAG8C1EUrM4JvMcwsW8DffRhmYfq9kxPryBFg2aantwJWqpsBRbd3GZ3vPApMYSCiuNuMU1pHYnh",
  "key17": "39z5kwfRPTC55xb7QgUcWbfpzMiAsr75GsvjMFTJkzTytEjMzx4XithLfbfUGaMd5N5sUCJfPxY3rFVZ4SamD3TM",
  "key18": "5Sn3EoxykTnzWDT2wneqTUbaZCeXHziW5uuLTuCW7NY83HDocYvCeakndK7YPbF8wYKkiwamTaHRseje7rEKqZvP",
  "key19": "2hq1XE6Svj2p1eqCv1x13d6wBHsGGyczFbBJ5UjfQADgRWecPPUjTCBo3em3MJZW3J3UDDH4UqQtxduQ1kSQrWqK",
  "key20": "EHRp2uTAwKwaMAZno92TQmWARFwFLbitWYaZ55XmmPREg2GMqFLeuU2os8XZ7NNVUWY3S8WV9FCGqovhUTnUwFP",
  "key21": "1SMaBwCW3tEoypDfWERqextkFZZnzWEa8hDgkC9zJQ9B5sHZYShUnSFLYgh5t5xWguzzJvQjyGbE3MPBfgZBtQp",
  "key22": "33k11jykNsK7ApXRhspGaUHw9ZSKByW9XHVbMpekFGzkJczbmuXJUgmRxk1MtpofKoZpTvh2GEGu65Xd23nNBQmh",
  "key23": "3mufqi63oRcgwM2RPPY1itzrrWBvBxAku2SpakvMpT4gSr5cGBU9pTPebT3vS5ehey4g95eyMxoNFs75FJwS9ziM",
  "key24": "4nREsiUgnLUzen61Bq1KDdTHes9tkXDHtnYfWo3QwWpPpevUYwHckHswgkwN9y8Gb3GnZGkadLKTYgg9mEht3XtF",
  "key25": "4yw4FK5Bbcm8SGfD7DawFGEgqXhMXek1QqpVfZX1bj5upZbKhy1kzeEXmsfgtYVT1fodBF4UYCxsYKZNZNHzeMUz",
  "key26": "4KZBzWiHSZuQ8T9BzwryQGZniNfxTnF4AY1Z6tLho8onUjUmxuoFB1EfEBLV9hQcABkihG4tG46LwZ8D57zcf8H4",
  "key27": "hpTbzSxfa4xAE3id2MWkPv8dGrzLe76i7LJGBfYfsb7X1C4VMFiJ8tU1ZYohe9H5eZrNYbiBDVqS3h9kxfZoU5B",
  "key28": "5XL8Z2H3qBGGTfgmpg5EpsCRQbcMCdMTmTSJShzMhA1hYALLzN2iQ6EEhadqbLnhPVRXLRrZTMzUVum5sDeErDHL",
  "key29": "5Hxq5DNh1mwuhhWRg3UeWGza3kYU7jXgb34zxQKQuqtkR4895tNSQC8KGEpeLqb8Mwmqu37krY1Kg4B9jRrvz8tD",
  "key30": "8tfm8ApnRCS2zuX5ZBz9WFsNzGi5JyaV13HtKLQMXaN1TVMSa9U4YwH7rGjW98nhmGMBAjV8PnJPmwmqywrHP3U",
  "key31": "4DvB8gA2wpW8VNBT9GFoeN1ZDJ6BH91CqwStHhTbMsKvJqUaFiVh5rDHoENcVi2crjxFqNto6LMvmzJyTK6Kzzvz",
  "key32": "3m2C98Tdw2UDMWHeZmLy2hmzVFdGFoW8PLs62j4iUAJheG2Qi1S5XQdNAh72K9hDeVCYKUYijAMhtk864bvQL7YD",
  "key33": "5V6s33ecB5UUpZmFbrbUvHhB9Mc6mvNhcRAcXvduXCytXU2N1HPw9JuTNdr1eY7BbxXf2n91ZW54DS4MqLwabu8T",
  "key34": "qvAD3i1o2TB7mj7H2EA8nqAjqus8Fc2gjYozexvom8b8JgtANNtLHLw1gJ4SeVk3jyULvVLPhgBF2h6GDcFUHuG",
  "key35": "oUKaDL4GhoRqv3GKYVfJTXrXnCEy4H5jUEQf2tSnemxuLBnwS6oAb6hdTDKGvmAofzquCPN1payD9VMsjtAf9fN",
  "key36": "2pWbgd5MgLuuFzE4PJQ55t3cn8AitjqhouSCnhvxAoC6hqZMFSDeMEDdJc8KfqJjHCyLSCJihrbYhLDtPxHbJG5"
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
