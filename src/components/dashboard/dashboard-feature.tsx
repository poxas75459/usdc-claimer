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
    "NcMd9eqgaBF55snHm8jA63bCvCFoFLRKFuFvxPrLKzPpxEFTbN6MkM79xisZrtZcPUHQk91NuwNhJJ7yz37Szg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqG5j1CTM12KKvqrUBjU6x2ztdw65GSCL9NqXGmZetWddzKUThc5vbQeiMPjyt6FKb1PC1uivACjn1pPtYKB8AC",
  "key1": "2t3VrYeL5mNjgSnFAFkGzhGaN4zkbr1KCm6s29JkqFXk6z2qQ8BobnSfAbw15zB6eAGcYsroTab5jCE28AMgbRis",
  "key2": "5DYtxax4cLZ8iisdCEoLP5rP8WPmh3CFMRFcP3CuMmSmHmg8P8BRxk4VVmCEWdTE3AA53651yYnBVmaTZrkZZanC",
  "key3": "2HyBaqA64YCSpHooGW1Hbh8yTB6VG2Nwa7yrvcM7tWYdWHxVcjRn7Pve5xvb1XdJ6biQ8zvJ8WyoceM8QnKjuMZm",
  "key4": "4fNmrhAon6vXQYUEsQJXi1jD2adR6WgpLwtx81m8osJnfurHs6sZD9ZB8jUBFfpduHQAbzNVgi1vpcqFN9RFCDxa",
  "key5": "3BNYw2jdQ3ziwc6Li7DVppQxHhRU2ieFb8yc11aWY53juFPZGTkWdLXn3yXbjL7fFpcjoF9kQgXKPiYJCnZuzUR7",
  "key6": "4sPt9SUthEwMqUAnkty4qMKwXUh3jqdm94CLwr6Zo19oXDzcng9Ry7gBBndbKK64vBJtrQ2d46vDoHEcdxNVma2P",
  "key7": "2JVGzazCbjbXM31QUz4McN1gF35xURZKrXDhK7Q5kNxexDohWfhJnAujUQ4WEZYFehhV4Zu8pCtfNYhXcjkqLNk2",
  "key8": "4fYZj1oJ2a8jz2BGYYKwECgfEg2c7iswXFkRYuGoRKtA2q6kRKMzJSgciTzorUFq14j2Dw9N9s4RZpALJWhVUKXa",
  "key9": "3ZhYSxKtauGnW4YBsjHiup7ZLSs1jgMNPJwrXUmxuUC5QNf52Btxc5wWDfUBmrRabxZRFWyBKZiUUzaLJ7ZLAL9T",
  "key10": "2iDzwhzEZZZhbANxZ1kSqJyCBa33XuGq7NCE387ts4CnUKN25fM9wEHFj9kqabkneYyG3izV8wTpY5BLM7oCWij9",
  "key11": "4Hvgw1yQWoDRMg6BJxGwHTQHKw33LGV54n8bQsH5N2xLDTR2Uy2joU5XV3vBdtL4Cig1xDAT7oRmJRBzSR4rYX1T",
  "key12": "3xAXmxaYrUt5PTGS8rgv5ho7zECgnbf5BrcoiibjTeviuvqdfhjt53pF1w9ajrbCsSFkVYfUL5gCHoZ23mNYyoaK",
  "key13": "4JFYwSC5YrH6vagpChxm8jdYZoHgVoXFLyURZKrCLMQqq4KhHdunxUzQ2R39Y9a7yt2iYvmsy8mL6hgqWtvesw7n",
  "key14": "5Yxok9SrVKfL6QwEwbf2KB3smJWB7CnejkNb8gZKoB1AuxHAApVfayGhUZsjbYtC3UyFJH1sz6zoXizdbs29ddJD",
  "key15": "5fPVoTWnnuyGefAj4yrZCSxYg7CzHDaoaesNBo9UaTEs9Mrh39mnsMHQqs9gwV7wqfxN8qFywRxBgR6Psq8FhBus",
  "key16": "2TYeqHePXR82DgADRgzid8a8MVrLS9DWBn86vqRPSXA26qJ3SZJGsMkPwgfukKgDktW5KH5DLbisp2iyTMbZTa11",
  "key17": "vjTFYeHjdLHRCyfEJboegjHCWBwitWoJUzZB58MDDrLDWkb8pmYhhnFfm6BnxbpFKG1JeRmHPUSK9Ua4yTCu5bA",
  "key18": "3KyoonQkHJSXdkvkx81mjHx2DHK52DEhmDj1RrDHdPYnwcewG6K9wVUvKLjXxGBJDRJ8dzYLaEnBMeP6oaVtZo3K",
  "key19": "2T7gWWeJ5MdZzmVW6PySQ36MtzZP9zMyZuW1YarzoNfX4cBJKcSheomUr7tZSF6P1szZQFn2weJ8BMmYqFjGMbAJ",
  "key20": "3GQpFXKT5PqXC2RRwapZkxCGToi4mvZkeh2ZPcwyjXHhuBjjj7RQyomieSjmo8rvCZtX9S2ZCoY6B43ndpFCKn1N",
  "key21": "5S7NMBP3FCk1Bwu3Ab2khUkTBmVjfeCqZjf27jcSf58jA8A84VGfpYP455cTLEfAdBrgvXALjDhg8siZ6jsUgUhf",
  "key22": "5jCjsm4v8RXzEcHqNJfPDie6YJvYN1oDFouinNYbDRA9Vdyn8xkDKL6ULpkNB6uwiCsUfEgujvYEP97t8UFTDKdD",
  "key23": "5GoSwQHgVAwKQQTybQCw6wvhEKr4rBYRqu5FE2P99rd1qL48K4jKBC9spPm324raefowMFDPoaRWjZ2t9Es4NbCY",
  "key24": "2jS25zZH8ajmo3DokCy6u7ELGkm5mCAHV4NE33GTVC4tHrjBQQYWGu4xwCnjJHCMUybnhXpfwmTV4LrHx2zW77EB"
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
