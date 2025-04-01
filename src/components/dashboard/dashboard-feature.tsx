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
    "mdU8JD4YXyvhiA1LHyjBNg5wdF1SWz7npXPaAsxoCwHtBVPMFXBxQdiwTNhTNeYVSgNmg8picuV2LRtdzjKt8Sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4oNJixh46hTXZ5VJpknxvFjwaTi9BcsFjWarfcTMVYdsgxpsue5WDhV9HALxeZv4eRAnJy3LhpAW7NabRgoQX6",
  "key1": "3xY3cPB5YacwUL7BtPFNtyDzDRxFpbU3zXNKsV6oHYhASw5gQgc9bDkGT4uHkKj3MyHLteAeVxeEsUvF8siwx1H6",
  "key2": "4RtoAdB7ro7wuRwKkHWFMbsjXS84Y3NbkDLoMU5KdTnaueVTfr2bGdv2NDFLrc8Uf6JovyHZqXGHLQJ3RhpchPRJ",
  "key3": "4QzYEWUg6XNQYQfCcXcdLXmzyDzsCcqGM2SxdVrWMEgdtY3RgMtCkrE68KtkRnmofk47MeLngjZDhWh8rAEngKFj",
  "key4": "2CccKpatC1qARnyaBX2tDrsP1oMy4a3qKQmS3A23n137L37xpwgWxZ5wfbgHk7UaUWEK9bCEVKd4Am4hBU3AQwZC",
  "key5": "24Y4itPUypSwbwuCoHV9BVgZN6cLJYb8JcG3F5qKqthV15GQoTvsym9zCK6ksyGgCcT4shYsNwr3cUgb6MoCcpfn",
  "key6": "J9Zx9hr6HFpN35aMELZVgpXyWdEncx4yC8zxmadGLFhg9bCAxN7vKbzQJDAyRefmzpUD4shkKafG2NoYBe7NQHp",
  "key7": "NyPzMeAg2T4hGmjCVJ19DNxxRMMQsSyk8wXrZqPM83PxaSzeBvAyrhpgSUvte1tsU8ZmNgzLYfHVTbAyfaPe7Un",
  "key8": "3kTejCMMCc6f8eu6a8P4QRDQGuWKE7qTQXdbeBwt38BtdDgTFoXn8iWBjJHY3H19DGWnkySgWxsYUGQLvxhkqBQE",
  "key9": "3k9zRdbKAswuCVZbBL8XBz27vDFL556AwPo69ZBfycyThFpgSCKPRjsmzS9M3F3MgKRm3zDZDp49AgiJms53j4wp",
  "key10": "2r4GyFgtEGMGNzPaE3XYVACH7aZ1ZyWTK7xkBBDABEf4WMrU2eeQ9ss2tJfAbjEGLhRf4qCk1HJTTGh47KnH2FFj",
  "key11": "ruRMzXvBspTE6q71uzfuMSgiBwHeqZds1fLNFDKkxV8XLuDofDQFxcWJuPB3ULVoRyAWGznT1J7ARwc83Y4xc8G",
  "key12": "2uMvsprhV2qdEbeKCD1DSjNKXZxLMB8nGo4JC3RF46BzZDkRWG2XQLtwj7UogovGtFd2HoYm7w23XDqgmxPgkUgt",
  "key13": "2Kyi2yBEzsHSuPonwrxN38weH3qmZxgP8GX9nFTYLAtugdgYJCL94bW3i3Nuir2qF1z1NvQgKMCkU45zmkeaEoqv",
  "key14": "2BNiQxLNt4xhFYzL5VRCED9VaGAzU8Y6SEcwQwSShD4y6cbj3vwQXTqKciC2D1JHdQFAXvyZ7J6yPxkH99CsxSUb",
  "key15": "4hXAjYvWWdmen8qZb6oVKgYP772TVvrMNe8HgimL4UGQ7sg22vuKnpJR4343rDoi5RS5mahuHVbayJ88aeDx88ZC",
  "key16": "2tB6x6LEx9BNJ5LB8m1t2FHERsCqMLwmt6uhR52pyHzCmAUXB5WBiExaZbkNDBz8EBt4AFd4m4XqKejdqsNzdc4W",
  "key17": "47xpopZG7mZboYnfdEq4N8vRNb5MV6o8Kng5i6j6J49XCSaEoi6grJHfTgBqZXwoN52bFD3XTXN7swk8E7ZCFSpv",
  "key18": "ktAfjh7RUuPjnUUUf5MXUkZDtcemazUGgYQHdBKksia6FwFZZamk48eR8Wbh6FjmtBFyiyjxQkuVfES3Tc7U2Pn",
  "key19": "3SyoJQnZ27PqEu5Qu5fJWEVwH24HVz3QoYmUQFRBf34gidCY6FNTsZdBmiHniYZSvRKnXA6W9UJ4RoZC8tLfQvWc",
  "key20": "3zsFuPinzxu2NotxneMUcDovdvLGoD7SGDKPLEEHXRDnoZ3bJ2ysCU5Ywh5rUFc6vfgkaexVfxkb3NC2KAH8sFjP",
  "key21": "4V68Hf3jSBxSSZjCHxZXYdDzke7Dvtin87QHxA3opYVTzsNJ4AzMspoa22xoVcwZziCzbBdT97ZPSudjtUKopXhM",
  "key22": "5vD5Gudiow1efkNQZuAipMzXcVRu6qqGXFNsrVe4hzWVGDSAzCnHuKejERDGcBfVPRTEvEXvc3rRZF6hDMMvN8Vt",
  "key23": "hG8SfkeS6UzVN7EW7LRmEGZV6HhNxVN7DhgnPApGd7VkyVcsneZkKTdM4ihcdjji3tKriUHWFMJzJ8V7CEaBUu3",
  "key24": "5Qio1YcUdnBqbDSZGr5YkXaEvLWFRmgkErLa4cM3qtcdoqQxx5cNT5ZSPRkSu3JsjkQWoNadVZdhzuAugdRvpiDb",
  "key25": "4VWhzZsbR3pfDaZGnHqozTywX77BdswLs4Jf1FkJ6acNeR7KkgN8pYGB9XcfpB4tsvaUmjjgHUk9aMLoAj1Fnxeg",
  "key26": "3kUqieddPG4VdJZQ6SN9qZztW6ok3gECTiVNHTKmSGNdBkcg925wjeWkvtbKvg5orHYdDoCvKRC17hWguHjTydXy",
  "key27": "2y9UkTwfiGfajpyUWvp3PNixg1w4VcKiY8v3kBBxhTRYG7pmp1LZzu2VRKV9dStjyWwVp7HvsaJMhMg4sa29yG96",
  "key28": "26XWcZGJLnS5MFGLd6LEst9QBkJfyYz27ycqXnF1DTytkMA5iXr35ArSXiy5o27Yu1n9vogXXkig1JF49HgeQrCg",
  "key29": "2c1DvY6nmdTGGBeWNLVSE2o7wdiVp4QVXJ9cGQHh3k6GZRCPsrcGkeC6ZCfYpG6pYHgPm47ospGmFdhCjzGE7Eui",
  "key30": "3hjqvEx73YCnzVqnAqRiftJD3Sc2nqhDBz7WgGhK5E7dciwz8hwwVQyErY52Vrchj4eBNEpEtnUFUaABVrCoLJij"
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
