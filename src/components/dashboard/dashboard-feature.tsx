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
    "5o9BbBSSLoPNH77DPZKb4F9SekZj7Qr1awgAKznMZYswS3wHFFAH24CofiMeWaX4qMJ1GG9TgCwStMqbxP85KZqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFf1wE4cxYasWME8AEt3PxRBMvxxWJZg6SkKKwoh4QAEkmAHw5eeer99hmFr7QuKhEvP2Psbhd38ZsrXFsD7oa7",
  "key1": "215Jnd3qkxp5dAgF9iYpqtwXQGPBhjiLE2PsQPaYDTtkxQx3P4rT1Vm4nqCR33SV41ZT4p9sdZMHrjn5CuAzYqdg",
  "key2": "5nn9GKXAaE9Zcm4HnaM8fSoTgwkD7eSi71nkYYCgaAUiFPhZXtT9zJrCmvQcsr7AfxVpXdHabsEhhvMvd5vnvfxH",
  "key3": "5aAc2VD8rfcVoBzo8t1mAupmaHVZ4vviC7AhnwU3Qw4sQVib1rNBs7CztMBt3ByESWRKALxo3xZwhi8PZjaiyRw2",
  "key4": "47psTzEhcSfxv7gwWMQTs14JrH1JPY528cpM8Bovy8gDqDtkQPZij86v1fB89mjkM8hT4LFgkqgwB82Mg1TVYzSX",
  "key5": "3VwH92NXKAJ45RHqYNGA7AaorcmnTK3xK4N43MwyoTGKSesVrvcgt1HMSS4CPu4xB9dFJe4A9kQxUY1E7HqFKuMR",
  "key6": "5oL6Wj1Zw1VEWTJdahFndfEtycWue5FBHnqBw7cRAVS3dZgSAP7knkKB7iHsQPidj9gkwN1nNi8c237AHAjFNPFe",
  "key7": "4pobivf5Ubmc8ciwZ8DYPvrbsTrLQ6KZ3aAq65t9Bz6Xkuhtp8VpeBKL3iDcQJkqQsiWyh6WCQZQLwrzko6owiEM",
  "key8": "3H7pEdHFthn16aAVpj9QJnWjCpdkzMMNLUc6jnoWFvuUr1tF5vk4LcfqNcK6mtzZEuQGXaDCQH4w1bz887m3bpxT",
  "key9": "2CyDg2B5z52ZazRwBVMdx1rcZcKJXD1kUG31xbtopLXn3XYyMWmCi4wGq1Xr8PAJFFWWNZdxMsT23fCaT5GobkZE",
  "key10": "4a16wEMrgVHBVmuDSoCDoxi8bnoSoSj5Uo36NJt68dQQUDG62yvs4DpXPrBE7pvfu6pamAsi4nkvCRmNNQ7aNCkV",
  "key11": "qLhYDp3Cn3cun1GMzoKx2P2L1918ALnPhZJuBsp86ktu8QqEsqcsSTJfTV5Bcuj11Zro5yj5dBRKKcQvdousixV",
  "key12": "zQXGh7FrTqFuAVCLXDr1swVcMfxw9kWjEw3LBjEhqhtaddYCwPap6fJNYKNZFtN5KKdcwsgaDNeuVw71ovva2UJ",
  "key13": "2ZpLadQQu8jm82CQFWbWphVoERHYBVvHqnBnarRnRbVjhhNrBjc5Xc53S2ZBDrQZbn7gPXehArY8ABCetRYx6Pfn",
  "key14": "cd1ib5HmpUNUZgGhkqNy6e88XuqWQbzRrPKs1J4p25NkMfLKKT6vhs16TkiruWcMKnBAgvGBqGkBkUBTFti6TuX",
  "key15": "LYZESBMSpDHiGmfyGteobMASdaHbc1jMLmaP72YdUT1bpvJsYUYp2kR6xQDp1aDKhCZpqFBqNWtD9P6uQmHQiYq",
  "key16": "5XfTkzwheMt5VZSzKfcM2T2Nvq7GZFsfJuLeiNY1E21QJskYxBV5pMJor2qxANxFXn68YDmcx8p9BcEXXK2Ro7sY",
  "key17": "4pevZ9dt9zZ52BhvwLrtVvFAyyTGesYENfP59uaGeWworEsZdZCoASN8ZqBskjzR1tPZ2JMMcWsdjEtfxQabQfLK",
  "key18": "54ieELPvuamntxeG7hMpCajansdQd4JU9y2G3BiTepGGtkfXRrApMHAiRZ5fdTq8xFTDGw8wuKrst8S6Pjv5eq7X",
  "key19": "5RorUw6fEez9JSZZU8yoVGHkTBtM78u1fCPy24ixw2ZLMDqBSaVk3nuLh2vhMFNkiQdEEjjZQrhLbTh4AHeuHZPc",
  "key20": "58JEF71deMrgHy99KYg1mu7Garr1D3Lp7NyFhaeujw2gHipZwA84NbwyXpeHxT6XFuFtGxweu2xMfHZtTsL4HnLC",
  "key21": "4HxpvCi2SV2DuFWE7qWqiqeYLGzheKDWiuE8JaJLDnZv5h8ycrGbKEVeKeRWgZEZBga4QjMxKLEmma8SxNY69Us3",
  "key22": "4rwFbn4GaZFxZc8N3V5UMySqdF8BTASCDYgTdWkVFZ9yforcPFWNjDWjDiABDgciccFWfd5Dgk6aK8EYsDv4jw3x",
  "key23": "5FNu68FtB4M28V8rSDarpPXtiVBbZgNdsC5TNDbXkHbYThA6GPNBJGjHDKeFvrZ2MS1sBvk48vaAz3AaWaccumVy",
  "key24": "57nwTwqSoLheDQfTa3gdeLdSLpByKa4Va4dZfjiYe2PUKQuQoeDwTKfgoKt2LH4WJhhBWMc9Bf4qP97VufnyUMUD",
  "key25": "3NLDafxxEeXprkgVYeNDVdRg3kwWBHbEiN2bSzQhCH9rLCqajQ9YuCQTnsYZVy4yq6cJfJ5PjJZWe6kiQHJJxExZ",
  "key26": "2M8noCk6nXepPyxo28q4bASvYApiTGsjKWK58sjzRSqqzCCnuSExLMxAk6fSC2Bfbkw8A1zj8LC9fyWrBkLGpDo3",
  "key27": "Um74bRf4xEEfG6rBP6QTJWjMBH6TKiu1Qt9aheDbTZKXQMY92tnhZYaNJLK9mbYbaHPTidqw8danM1tNCgajDMt"
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
