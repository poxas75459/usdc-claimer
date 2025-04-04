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
    "EsCEBo2BrGrtVqM2ejukoF5iRP9nscJn6FmNSAmiMNQ7emtRdf4HpKkq7WYfhnfcJKRPt1AQrLvxpKgY5yJRtK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rw3HwuTneaPsGwnoWSGAhahk2hk1WPkw5UfRYxQRa9bRcRcKVbzD8t8AX2kHCY1wCQFi4VdSKrvwPnz2saMxPJ2",
  "key1": "NnEAtosF8vhcgom3toJv6JM6FCzGSanum4Nnq6bA7CdMRAEUtWvbX53CwMZTwgTxU4DcEbBHRz3STW6ZSpbCdor",
  "key2": "3MHU8CKvpvsifEKsS6uoD9gvBMhYmYqZ4APGpv9yJZDy8nTx45wywMowGy6MTiMkTLozUDGPFiAzWMQKLVjreu3H",
  "key3": "49REWgNx9tXDwW14o7ycGbFjfKktFdZ3B4UdsSeXK61djYWLgQP2kmsJRGWq3DHZSNw2KZmeFThvFhiNzzgwYGoL",
  "key4": "37r1AcSHJct2xbvH5oG3xegjKt4DEFp11XHvhyspiXH9wzuraJMUe66h8J5mnYmWcnmpR2tHxFbEk85zjTGQv21v",
  "key5": "wuEnPotzV7uiAV2LsYVmR3VpSoNKLVqpDX2hLy4GTYpWvBKNoFGtgUYsDYwkrErUv8cqNNmsSnR53Y8CHZSkkkQ",
  "key6": "vdAhDmYp2YtWCkNz9UMtQyVpXVCdEj1fkoNbbk5R7zU9Dzw2YtmbEpKeYuK7YNNUL364yhRYoYATzjKXUXgELJP",
  "key7": "vKGdCogVFqUnbrFnk9ctiRXZbdHzesacXepCaL6JM3NR9eryU9VGrm24vmLRA8KMNHqis9P8ziDVWBMRirZyga5",
  "key8": "5aSq9oXeTKjnsquhVUvad9H2Z4hZuAjkUvrbiros96q7gxDquH3ftkV48iAMMFioeGsnQcUkVYKq3iUqudZw5D3Z",
  "key9": "5RwmcDxuXeaMVpdh2fwGBrpFQ4ZzFzWzuBxgrV7EvqH2nf5bWQLa5hJhMZhsX17sxeV47E5K7gZFmJj9U6egN1zM",
  "key10": "SrvZh39BWoRuMC4q6hhoamukPgMKiHtQcm4tuJjYHJ1SLttKErC3Sru9j57P4TW6n9RgHmusVREjrBfgmriWK4R",
  "key11": "4jKzut1TDCiGRyuDiipnkwPhVnCPb8bwZjTKf8LMyfeTxZm7RcSiZSBzKxZEPB1MFraaoHdWD57pUvkVAMK3Ph8H",
  "key12": "3QUHmsBNnhmmmm9PcX81d5nb4o8t76pxM8MEcM2PwpLBHwHFYXVSX4kagJPghJ1oJGt4E471FRQXxNPPP9EXzhQL",
  "key13": "3wz976WgtPzjrnjf5fsPq2p4AvoNk3Fbj5gZ61SDrDxHFx6ucj1CoVA7VMtfJQsKwWwjAUjEMD2RXajrVDmusPu",
  "key14": "3DCscXiD1GJngfmHcyVkVQjXCaCykSA1n8Rk5kAMNRK78R6MUJyH9M3WF8QpqcWTJFaVF6yQmtcCvodNon1NFh1u",
  "key15": "2Nufo5kBmN5wSrv1L3yYpoqGKsJBhdjCfgq4mueD9KHV4U4xKZmRw99kiFGtpV1Bu6XdmPUXCMvmcPX9x3k95i7t",
  "key16": "i2fAGG4kehFrbgmBf8BSc5RaewCqZNBG2zJo3ahpgZ83tEWhtVrqn2Xo45bLmzeCuUsUifmz21pYkfoE4YvgaPJ",
  "key17": "4zrenmuRLiEwkP4bLzmZvWKQ7irtxsNnephyRtoCS96dmMoRT1Me6HZaKZPahoY4gYKB8Gix5rLdWmSyNPq1nxEW",
  "key18": "3biAiBUSzwmH6DqPdHQrpNwraD1Y8PJE9rpgqDuPQQQUvTeDLvCJYhBtyXgN4zXYkCVpcXNJQPvkbHRRsTXQ5ESu",
  "key19": "2tazwXFhvYWi5C9yNH6U81Fctfw2XqcgeWKESjP3m8qJbADErBYetKeSmND3zSzQw57w2s2ahmF7hAZUmhtaDRSx",
  "key20": "2nLtP6DWhW6EgX65uqxsn2KtXskatRFArruHAxpZERDBD1EutPi4roY6pAPsqrdhDZPerr3JtXBbAb5aj3xtLZMp",
  "key21": "4VMYzjJBAW2sojG1YaXntMXGYKjUeUECJ69Zn8b8Cu6z6AxkygaPH8a5KpHS3qofjpeLqHmBPiXWhLrEDXcYAr1G",
  "key22": "5xqERLHSjToPrcsVw7ZzY8e9v4nKipJ7ocAg4NnW4Zj9bbRzBrrJhUX6MTPeroAUQuyDtmK76Ne3YER2e6YHgiH2",
  "key23": "jmB1UStH1sem4nde8hKzVNy9ECsjyHTHfLKUPsMRhomS9vtcvbLcGm4L2RQQvRwWrLmUGSovBfBydVzYxzXvgwT",
  "key24": "4Y9y5vrt4Z7RXKSKtjVk3QBd5NkKo9WbTvKpYbJsAanErmcMDx39j14iLsQDxuJyZyjCN5FkVm3VR2PYjzv3ywZu",
  "key25": "24tTQzJRk7M9iGB6VoMbg9zGmUSmY2v9uNRh8mHTK24RhRCvk8CViB94Ao3tDZuWeH44ccyWTzGWt9LvF2idBjVH",
  "key26": "2F9udLo165kV12oMzrqpH7bCzRzHnHaiGSfpsoXsXHwwmHXqJY3J3Gyof8xvywU6xmWazqfDXbiEQWRurKnZteca",
  "key27": "57QjkekvZbwJLShUyAcdRbND5UyDTK6LrtG4CHP5zUyLxAoFJbaBE486oEZWeeLS1m8HsMayr3mjZd98NqGz75cG",
  "key28": "5LFz4YRLoSL44vJ1aeekey6baiLS5kCfnUxSontSDuD7baxf6Vx8a2CxAVr55jwof6yXutzkmCgWK8aeB9Ag2F7S",
  "key29": "2o5x8H2FXzXuxL9GbhFddoGn5oETAqpxDkNvkqsbPAbFgRVZrZ2J8ZbydMAAmUoJv9FSn3HkvuDWZ5FEQkJfxMKu",
  "key30": "tF6DxfH9no6GXWqn4nYYdAjtCuvf6TtoFZPeF6CrKcWuRWUvGDBZfK9vqS797NEVNUe9GSA7FrT5EGkH4LT5Hmy",
  "key31": "5avEyUr5yPC3Cv3tjzMHVhwY6ekRTipp7p2uFmzUN7ehnNSESbAgmiyTXLRjkBhAAgXKX27diyDhXvczhis9mQUG",
  "key32": "3ji3cLbN3ByRqb1v1VfQuECENUVToR8DvNt4ztepgqYiZxk9jVBHa7ZRC3EWVit9uKgWsz6iuZK6ZJMJrV1DQ3hv",
  "key33": "53zCuUa2LCqpcjrV31mh7vyyLBragoD7VxkfCEtAjuNF6JtuXbwn2ZpiryPCJSf47zxSfXfUsZ9RPoBdXqtyyRsd",
  "key34": "dFtFm9vUxBVsHy4VYPjgnCXy5jgwU6DWyy6heoB8dH2Zx89BJBuetfjTWb5A5yLPMLtLJmfoA663uuviSpGe8bG",
  "key35": "3igWD5JviwD4aLCcPNGiZxMMyHt2Th8k1wXTPFGQDWbRBhijs3yXGrP7vSKAj5G1GuGCsRnZ8X6GRnnsLFYmvKUs"
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
