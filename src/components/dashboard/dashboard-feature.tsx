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
    "j2xrk8J6qtzzTBGfDxi5oBCbW8G5BbWUjrmbMZ1M273pPzMHee3eLhWpLXbCbvrLokwBfcqkRieJhNd9Vgfz7g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTsdTo8S3aXnDHcaNxJom3SbGU6CFShYE9HQJtp4k1TPWUKJSrthZw8ALbQAYXFMwnm63AZAeRxc9vgzMTsMDpW",
  "key1": "5xMuXJNEacvYaxJriGiQ3kAw4HUQXFdKuNapaFAV3rLyngAw46S7cbRvqfUgdbqCUZjwgNAMtuxiu6hi8S6xR6Ro",
  "key2": "4bX1MfXXVaSsZVbg2QKhxsR9aHidwtmJb35C9etyTmEaFc7K1RMgMz2Bgj2XwAhoL3658LZ2yKWCmJkapSGTjDiG",
  "key3": "2v3veV6gBWNsLGUq7Hwf1cBUuhEpqchrT8Ns5R7sbW94W56BvAYbKToMsthtrBFcKyMnwyVfxpVFehUSExbKaVBu",
  "key4": "2e9RZFn5KYLj4VAQ82iq2yM3KsDVequZeZZkBLVmk9jiA3cuQAMjkTS58Ag2fMzahfAhwtiC3WLHFNN6FykS1Wwd",
  "key5": "3LwrteLVsKEonr6GGRS6HYJvhKWx4upERJU5Szo99ERcpvP74jaqc3vSxZZFiBNmoEjUhE574LB5Zktprc7Z3Kfe",
  "key6": "4WnVVpGETi8nYgBQCfnUNBfdgH7gfadSpo4ANb1qefqaQ4zBwCexL8AV5zVM2tCYu72LXL74rkGmGbzKxf1jzvqC",
  "key7": "uDsyPx9eN3gTa77xg6cWisAh76fbVc2WvTmMH9owrsHYPk1ANRZrzzJBxcJggnWSExgYRtPZc61Zy32DLu2yLxK",
  "key8": "3fKE4XmPTYZpTA8H5Q6r3osHeiLp1TK4C6TQK4p2ZR9ieeY5WdqThTPGhGAmeyC7rFTnjhYwi64D86WBxaTPxMEN",
  "key9": "3HSB5YxEgZ19rSZHF6whSec3HQUTazzPXJbBqyF8XsehJMxzyf2s3hunxcFuneGx4Tbd9cnjqaRYrEVNaquHAuJy",
  "key10": "2JxdgsM2Xhd2pdsQXHuVqxZ4D15zd3Z3ku48C6SZbRNDLEMShwB8GV87fayjfX9wB6VsoGBBjrDRzcxj2J7kdLCj",
  "key11": "5LzXBfJyyEmHyG1L9w8B4HsWJJXUAxyPvBob7u16DqbNH41WYT256AQRSdsJEhKWe2QFYJ4QdgiwiCpZY3uePRCf",
  "key12": "3tKczDhdXruBzhU12dYuSPqoMWecAXz6cSGEnQ3Qc6CEhfvNRavaXoSH2Qyb8sDS55MaEs7ubswTupwqHJxEpfZL",
  "key13": "4kfePa5KLs1v1mk2cyeuCdx9XSPzB3PqxkstxebgAsgk552ZJRKEy8bLjQ3qDbL71RGJmysU8q4JarRK9hwYCHBy",
  "key14": "3c4sBzpfYtJtNsR6W1qoXyLFqXxcoRmvuN65sVoyHTJoB8dwQr6ZsH5JzvvAKc7MVYo8oTWkXF3mitbvrLgaYCRW",
  "key15": "4ZMwXkw8vBP5hGw7hDAmj84pweojZp5WqpyxGcZRNcZqTnU8rQTCh5gRsFkmgt6xH31x8JwiSugkiZmnjymStEEm",
  "key16": "21jiEAq4hvHUPZ9XgqhGTV1iMiiuZSKrAoeNysDJhwKUsoaw1d72fjycMGGdQgHc4Kebo3t9PkmQ7ZGjj5WHihdp",
  "key17": "2pNWPxyLF7XeQUgJ8ug2oxWhf3z4bzMi8nuVTMNmNPf8gzycTbE2AM8V9ntKThsMZyJ2jGVpFRZEuGdRUiU5tfPa",
  "key18": "2y8zvZBjyMUCrT8EVfx5mm8BuNtfzxsrWdbNyzYmZ5wwjDeR5bk6ewihCGVz1M8DzHLT3TWeZhbQXRLhsHakqk1G",
  "key19": "4UUt5Fv1mfgcwZbmmhNrGrKThbVfwCfmrjJ7tiVJP8uU7RjufBA4HbXvNBFW8vDL7zRpDJeW6uLBunCe9fiRhEPk",
  "key20": "3MzyzzsBdKTSzbB5PxLxqLgA2g1aVxJWF3pjqDkj6aMB5RksHoSVmxYffaGGazXJoPVnK1SWnCKCufqMMLRv7n7P",
  "key21": "3HM6fFctLddfQoXuT2mYP5G5xoQZTpgY4ZYWZzvecU3jRSQjhxN3EGvGBKwojy8owhiBzn6ffBHqeXvYcsT2obJd",
  "key22": "2YffcRVwYR86pPyWJr9KgVLP1bg1aRMHqJJNmaTnZf43enBcZ3ZjT3H63JmKmVbdTcdVRKRqofzXVXBJzuZo5XB8",
  "key23": "5oVvNJh2Qn6g3iGzDuaFiPt7dUSU5DHVbqzGmZeG76W4EVwr9RimwAaceLRKmpgC1M4jWSdt6wsGcH2QpXSpbryq",
  "key24": "241mWDSFXivDdn7rcJDYXhLC29bCud17SXF8r2en4C4FtTKAJwqVTknunBkD8QJchqmVd11fG8ueghMCvmy56AMd"
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
