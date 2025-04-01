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
    "4xREKkfgjo8y5zCxZkAgPsaYNJms2FEjADgvjqUgwyG89oHmbynuoVx3HrrT4EWy4G2okhAf2TVrewcP8hMKtXKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgvyh5Udkg3AoGCXHia4vcyrZMZ9D3bBkRWg1ZWwEy8gfrdsUsYPog99ehcsGWtpwMayAtBo49J35TmDKPtsm6N",
  "key1": "3Hd3q258K5q2UVcRWvJ7VuPTybX3uLoGVXwG2HBFdkw8WngkbPZmWgbYLUB5apu4wLUYSTFxzzkk3gjeFoAkwLWJ",
  "key2": "3TCaSnZRMxmbQMrrug5ccNKosdmp4XkhfT7UDnruysZvVGrTRRT4JuVq9BYfh5nRgDCaxzRqTfGLzWYC3EJeTrEK",
  "key3": "49memFnN4fN5K16stJvL8FzCqLgFdvWAvQvJiKFxenFFJYKnropTMeJUX5ESW3eCAEkZxwEpGuchzFSi2ayTueJN",
  "key4": "sseY154zbZ4ggiALqVHmvm4dZTtMeQWaGVrHFi93NCURfYAGDHQHBkbnhaCP1HCDXwBC8N4HWBRzfhyj3C66Dxz",
  "key5": "GFiYUqwKhwsaY7vDjNjYkwGTaYbuswbQp4J9gBNUuwwL1kDdnzRJauc17h4VtR1ZruMNsQuvNQfcqMZm686XewH",
  "key6": "bUmh1r4PtPYQhCUuPqsNRvKmMoXnwxWfZQ6epbZ4so5v3KTFHR8ppjc1RRp7FHBYzxWKS2eVCrjvvigHUBGSpty",
  "key7": "2kSSMVHdKQVyKYsxbB3cAPcGAd3RQRuBBQ7UGRcoHNTrUwQhCsL32mPCBGxRCvQKxtTDeoygW4FthVfMH5h7Mtdm",
  "key8": "4YJ1ZHvMfJsbEMbCDcYYKczVyDXzFwwVj7TPLnmqAHVVJFWy9jazEjvk6DPgjrXaSEVPKWdyZD6ryRJ2Lz66g4pT",
  "key9": "4asNeLZ1u4ppKNjbCdg3d19xCkGE54j1CD5exBuynZZMnTVtPT46qEpaLZKRuvHXH8ZWSwLR8zFuXR1yvAHmYQ6a",
  "key10": "aMU2bXD3YgWB2DdbkDUeMJBYv9UkwLNYdrEwc8uzvmQqQjEiMh7D9VKdV5KKw6ZV5HyKsuTyFApWGfpSu9CAZ7X",
  "key11": "2BwdYFdTQ61mBmDHwGcXSbPDKyptkXYt3bz7sK4xKqb3xE3i6VAqG6RKtWcbBbKr1gU5xzZU1LYGJM2gx3SJk91o",
  "key12": "5GXMy19QjFNeDXPvfAJWkTmvBfeYNNYHpAzonWYfWhGN5qrpTXjZgMBhkSCrvwcsF5JsrvHe8pv9BToTsrsvo9o6",
  "key13": "2gxqEY56oNpSuKY39LqoTuLFBytV2Ujz2RQ7eNHACFm3mdtetviMqvpimhMTM75ZmaUef6xvNU5JJ41P7QFZeSi1",
  "key14": "5e3pWTGs6d8a5eYz9kwcfETeE8sh1cejeTVaTB5RYu4WPNfgh9rZkva3tMze2KJFC2b5YmJN4desnymeeT9sm47U",
  "key15": "3heihxJoFsHExYDkRe7VqMMjHSDt4thR7PsQU4wdbyuP93Phbc52KomETaGN5zpLzXVHQtssvPy7nUqpkPorNmcP",
  "key16": "3wTZRPL6kMhAZMdwYPHt3uC5RW3AHpDETMrFjnRzu5zf1QuGjijFjF5FHCdgs3MX2nd3FrBSBHFpFYEmPkj1KnrN",
  "key17": "5iF8q6YxsGswTV1w37v3qxFCxf8oGjuYPJsuBDaeeApqYt9JUmWbKc8i72Y3KZCMo75iWu1zNcbKHPALDzCM3gMU",
  "key18": "4CdUVHxdMhqNsTH2CJbZswwiqM1beqEo8dMryemVd6WJiYpnCF887QFFirw4gayMaEN47NYpu7bjmn12TN26L9fv",
  "key19": "5ajqos2imYkRnxV11k9LFaHLLbYRjo9LK3HfPtv7qQxQy2azxYJpDyyvv2bwAn7AszPf5eAhtwpQcUSGiScoBUJV",
  "key20": "k7ZiUtiyHSGig5RUjkUVS12EdeU5gdVC3JHq37oXcecVANKwHep5Xax7wJZRw78qZ9aGaoELSY6i3uA8URyKLa3",
  "key21": "5ygxFcBQVUMrE7Q2CPFr2ZWRjznYnL1wDJDaUFocWxtH7pcwZs173ThVKeni4hc8Lkj6ZzdKibnk5B7CizZadhg8",
  "key22": "4xJmhMxPXbApMB9KwfU6zvWfUBppGEMLWXjGbgdNBcvypv8kY6trtVFLHtX7Fc6ByXgLCDZc2d7Tp5u17HLQTiR4",
  "key23": "5PUtuvkvy2Rbou3sb14fWqxerpuvTPeePxFq223tKgEssntA5byzCCnvG6LuBaQ4PgA1aknypnFmP9BZYCeF1Qrw",
  "key24": "5ddKmSX1mZ5EU5284dnMK8VoDqrjF2iAfkZVBxHZQThDWkdv6ueACDXBUFdmj7Esb6sUoJMNhuF9sSuysSEzxRHj",
  "key25": "5AwM87QiS8GseibWFCaZ9KBsj5J6EsJ3jVr9FX8LMqd556dqxovcwXwqzYi7jLKu2cVCsdxULMTrAn43E4sodi38",
  "key26": "5BVtiUKKThAWtKtn5ZRPf9LcpyiNhrMsnf3GKtPqUHaKL3sxZzoL1RDUi7M14hpaseQUtV1X95cHZFqTFncN8kJE",
  "key27": "2rZXhKByQRH6kkqeMb4dR2rKPZCrTAmmSmNYR94yP9XuyiJJXr9GiZDv7Gn4bq9tse2mCb4B9YQi8vA3SL9EHSoQ",
  "key28": "53MwQu4rEzQUjpq9N3ES97cigNQd2u9QuYExUwcVhnRXr5cVeJ2FgErjGvp5WAznEMZWxfvLatY532Y8BASZ9zB2",
  "key29": "2Rm6Qqp4QMmQB6nHew2x4TVgJ4oiLD66NmWzpery4NV774ohZJ6GNpUGAdC1dUcuhruQ9XQhk9hgUBGvGzmjLx5j",
  "key30": "gmDjjzFJzSU3G4EroYFz8moHzHmi5ibvohbhmzH1P7Qv4ZGiqe1tkYWRPFXusWKiGy9uRZVFSrhkX8tuFqEinwJ",
  "key31": "2aqncHpyjCYA2mez27wbx2jnQm1CRxU3g1uixU9gS5WBWibgx28gXQn9ywThmWKUzDdtoZYhnSQLJSg3wzEd4MaQ"
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
