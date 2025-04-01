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
    "4EtgSPoC7i3e27k4f2gZ13Cn5rM6X8WEkL61LKHpWrsPa1FBGcT8uDEwS4pTAjkfGCSgkKkUgKvQgcR6XdZFGPZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2zU8jBc7farYRLvni7Fs1vKtL1QBjZgsSEXHogi3v2JZmcm4fVu6ivfGXiU7nC5yBNmhTnrwChoUgyf9u2uMp6",
  "key1": "3R6dCh9GpMXJVzvnYXJxA9vDrgrg8bxfdki3aZXaZQLx78KWCnanmFTzS1Wb7UtdZx2Z5bw8KFSy81xGDLhozb4u",
  "key2": "4kzSeWA8X83Hh7X7CSw6YoWTjnmX6Sbb5ALKCygULSYehQQ2C5drepVX5imLFesfzXzRpXDx6qfE6qrUrcfzf3b2",
  "key3": "4rA5bKmF2ekLpDqxLbwfSPdzYUTHm8axnznWETTGznfAHgJZwcrwRoboR7UJqwyNv4EbL3xvoXW9Z5Vre6WFU4U6",
  "key4": "5CXtnFCk5mJ3MTTwvZAAbSKYcbEFJG4aNq113cimKewCHFkFC6JerPAXvkyfndqTgQQNLswMxFbSR3GiLQpf3yDk",
  "key5": "5jjgBnQaQHNMFagu2WS5huB3KGo7X4A9B9QRdprdwN2xhaFeTdVuDa5LLUmzWg9D6md4SRxMZB8KmNaNhD1MaL44",
  "key6": "8toXT9XcSitv9zrTb1xrPKtyruYC3RFsVhRfqbqYj2vXc4gKYkzuGQuZrPF1hZPKtucobrY5YpuxkqsvxmVQ6J6",
  "key7": "25JyaD1Q8omH7tniWSZrwABPb8fa4pP3Hd1H1TMQ9e46vSSpA8dugbPyNmHQ6ssD3zv4XqyjJvGcJemDEjaCgirH",
  "key8": "3v4Jk5vS6HwtH3zVbH5zg8KBceHJW98o8VToXS34xrNhAkPa7dqDxfXprcgAcPmYYERkAPUUVRaRDsJyEW9rfRgi",
  "key9": "24wcrabAN97MqecLFgm958DsnA7DWxAJGfZdU625gqbjkvExH4MJSpDVknTaDt98ZT4wynMb3jzUA1kyiLpP6JrW",
  "key10": "3qiWWJEbh9bpcXEChp4ha3W2WDGcWfq6x6aUADhoqeYVNo24ZfMPzfaBd1Q7Ks26DQbeZeajax74rUkfWYNmimaF",
  "key11": "3QCXdGoTxnqdHX6RHQErzvCvTy7QoBLc2JH4RBHyiJvyWZL5NyctJ28Wm42udv4Spqmo5dUCVbDvVuzaz9BQfCXL",
  "key12": "55ZUprcNpp9bARDUS4qrUxKQJfXberjEUn4bW4z3UYK9vciRNgx1eGEDbdKW5WoSEKLAvwUsmG6UZFcNDndBxsZB",
  "key13": "274xAikmzLD27hfJme9D4YN7NuA3VqNfNpN5orppweyV8ZHiix29gT8EEXQA7WtkEvY48w5mCptAmFbU8ZujuLSW",
  "key14": "5NxDvzmCxjVWFsap1ejXvLCYFJ638GxRmYx7KiSEEs6VRgP9Gesgbjtouk5Jpa2HNipmohtWWugCjvcPuQ2JZ7r7",
  "key15": "5rAHp6oimH6mV6asAaZkc1z1DjgUzGKLKQ7khTTHhSzQ1FyxFZi7bMiKVAKknJRLcW9ZbkcK37SQQtmpo3JK2iV9",
  "key16": "4nw5TLE3LT2rqRQHDuAQPcdBHvGKxrn4zTaPWa36ZGkp7iceD2kyhTQT3cG9KZ6rmLnKkWqv9ZGAx7FaA45JnhTw",
  "key17": "3Gunivk5jA15Zwcu8NZ9cEWKKKKZxnzmYDAK7NGstkEDviYLttm5K8SMrm9d2cp3FChopACtUjnZxHEU9uVgozRy",
  "key18": "Rg1Fy9bqgeJdYjcpLuC8KZyW4opUCkhMJSTAACAxq6knFJG4Tmu5Ft7C1vhFDimq1E26LkMydG9F69BeV2XEZK3",
  "key19": "abFJq5beqMh3dncBgmyL5v6Ev1wJPcKhjDA26rcmoWSgLBD75t5No3sTdKvtWUtr8km67LGDrfr5b4BpufnrjFM",
  "key20": "3TRviTjgaKvjCJikxhPvfLgCWBuw7CvMBtGdxTV8ngh6KuNkU9bSLHPzph4zajqEG1yKMBAwDh8iCrAsGC5RAR4J",
  "key21": "4xLa5SNWQftLW6VE395QAppdhkqCcML8bxNkzFRhxnsQRdH1M1hcnZReSycCe8ituSzTxLB8XAsbTRzawe81JKJ9",
  "key22": "2Wca29a2fPfC19aWDA617LsfX6huFtmA8T8FiDLvBcp721NL2CZy7GsTzbS97eZTU8FckJwD36i8quWAniPMGreD",
  "key23": "3phkMAFN32Lusg7FsdhswDMYQRVe3sM68WGjCgDA2GRGLhvnQVHPD4dN21ahr5GxCt4tCYopKfKZSXzR2HAU3TEw",
  "key24": "62KoDwyA2926KRybZYg1HDRRJ7b15GTSW5txh8ja8iXmLtvcUsWSju61j5wJV8u1ciASo9C4Kfy62T52cU1LjNsZ",
  "key25": "5afR1B7LmfHux9ZbQrQLjCVYbyicPYJhWCMmNjJivwcDiQMnw1GxvafW4FGW6oJ5du3DG1GoevtUMoRuhqLpgXns",
  "key26": "2JiaeSGarnAHMKqZUKjUWDbn3EwwyeR95Kk8UsJoTqNBp1Hpw4rsrWy38gJM5kAWBSLkDNLWGKJQzfSqFDMaMJcq"
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
