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
    "3CcABhpv1WQn4exXfquPhDEFHkcgrfcu1wgjTxugWrUdKPHvTdtEVhyNL4xAogvWTKSCpxZN3EVzfP4Js1zwbD72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qgzdBZGpn4qpX21CgNNkeycFq42xw7bxJrBtjC2F33XpP36Ej9gS6sxcs2k5ZAjjPnMcXinNpKfjFYjqVsnddN",
  "key1": "3m1YYa2RyTd2CQKfpTsYfSYCbRDXieaRRDr7jP6Ga7ywZpTS2TgCgvgPdLRKE4ZVgj3Qz731iyEf9BdSmw9ewBcb",
  "key2": "BfsZp9Yd2NRUh7yVFY3HwyjW6PNi2PTq5yQh1EeiyVzStHKJeqgtPksk95wW1k6R45QkUpw435XMhJ6RiviCsw4",
  "key3": "5kXH45ZpmFZzUKWXbbaVeQkoiys2mqK3o5EZ5H6aVidyUGsJU8zEAhMou7Y21WDm8qHci2kwK5SMdUM3e4zUWFKe",
  "key4": "2qz1L6B3c1MeZchzRUmBB8CzHf7HuNoqPS6yRskTRC27R1krWtPoUZNvw9FobQcGrRq7CSMTJTU1jnBVZWddDm4w",
  "key5": "84HWw5zHCJnsgJL3opS5zQwiKAZdnFTsNMRQxJq8FM32p3CkUmbSx3MVrFknkbiv5a8LidvWiNAZxvMEirAae6U",
  "key6": "41HKjcWk4MBuv6Tf3KUdHPAEhzT7DdwSNF3dZX2FqkQNJzpBjWD13WmFyovpcdcJn8mrXArwZsPDUzbYrYParWcv",
  "key7": "4Ybs2wFXMw2vdaCLGrbaHiPX5f1rufBKvuDxmx6yarDE6F9jahAaTWs4GefMAcTd7N448vCxPxuZkxZxpfLTS9ap",
  "key8": "2u3uuKZcmZgSunHJD6Tc9S78n3aMTjygyrfEd4V4kxJa9SrroS9Ws2iaubrAyLGvK9Ku9BB2aCAMK8Z74xWHq4Po",
  "key9": "36KJyN54u6SXXXiNdsZVRTxeRC3JAzUw2pq21hCrKZXG4HoJzbLvCWUGT5bYQRqXg4awYE6xY2SfyakTDhPoB96T",
  "key10": "4FPiBY2SMSiFb7NHNmABVKtQv97DAV8WEcKmpqUWkXS8ZBjg9rfpYfUyCZcSBVMfiGB11fdWMksP65AbDX1gvURs",
  "key11": "24WycjdenC4jMuydQpSHbBfd1XWx4bQQAm4ZawseeCNPaZ3dV45NhiGxAA6UYmwKahoCJJGo2BZToAGha1Qu71XE",
  "key12": "3tYGgw3WZbFNsTBTwXrbpCaorX8R8CbvVUnQdD6A6t8hHRwk4syq8fsku6xr2EZE4bb25B7dEqZjcGTPWkJ2Qog1",
  "key13": "3diA6pXgGcEy6n8U92R4Ukvn7cbcNLWWMeSSt6ZRUNppHDqrKhUNXdvGs3RDxbG1vDtbrr6jYjFs9ZzNAkuHmgEi",
  "key14": "39WN3aoy57hJn3gWSjtG8mDrBLygax1SczQDZST9rBpMeoTMzFpCYEBUv81vFPpXHYxcyivBaHxyRcJ67Ujbf5ar",
  "key15": "n4jop7qtvuQjWBqY3q1DVdUKF9xqBok6QrrMqDwSPnKhhHwWoMPx2CsZ8AyZgwE1QRFQGSxU1yxLYvpYxA39wSy",
  "key16": "62GhoA7bkP9DwZEagTRktHw32UF65GJ6o3RHKh6K26vSKqXgYW8axQvfMffK4tEfjpEcVRuHXsDdqtWkheRdV5Ym",
  "key17": "2CCm1Ht87ERx2Vno4covNv5yBUo71tTMws5kcW3bP5y2LGVkceQp2uAJeubFvSUkBu5FsbZVEYCh45xEUQ4qxBJ9",
  "key18": "5Mvw6bAxABw5sj5oDVc8pGUzoxjEepmNZD9sGh1eUWroh2nSaBA5hRpAwk8EEvrGYhodNA2jGt2ahNEk91L2Qs99",
  "key19": "2s3CKVgg8ismu2dpkJcU9zJnmbq9V3UE94GYLz5Jkyv7RnzwVonVmsAmE9c38jGq6AcX3wkMpwLBiD3u3HqAaiiF",
  "key20": "5zpGB7jxfVBfAGnEkDnb68WEAEm3B1bJZGim8jQuoKXEGviCJDaorYKfEFX1ptTyXo3E64c2RoSzb29pK9Wdaep3",
  "key21": "4ynZTzp3K8PANh7xwkti9xtyHva6DQKXsaJ28cDvNdMouf4gv373msRMN7BEY2tQsgXfejbnM1NS7u6nj3Hk2eAg",
  "key22": "59TxXVe8kTMoWyMMCvDxyZAj9GFfmgPnDGGdjTBZ1bqgtQcTZYWvDajU8rkUm4P9qqkx7N72Tdt9ViTYAEVXLpFp",
  "key23": "25S24usrvccWY5Sa1LK9X44ZjH4SbQF3kw2Rrg6tJe5RydBfCgXHws1Km8NCtF2hxgNx9JfkmUPsFzHRwNBTPaA5",
  "key24": "29DMWR4SYqXvjXpWKKkyBAWo4FkWsSYippwU4qfWc4pvJFc6hNfja6ap5hQFjpJArsbApL39YxjRCmoRQC35paRf"
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
