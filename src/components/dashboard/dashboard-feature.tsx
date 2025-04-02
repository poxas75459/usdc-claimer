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
    "5nbjKdouBSFjxGumRoyp91gG8JALQnPNFGzRqKizNXABGdJFwapTNz11sYLqk1m9mvAEjwhs1MsPUhechZwT81Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BSueTfoC9igyHjCMz45w668hoMVuFqKGYt2ukjPL8KtRggp11pFSwnJ9dbqmZRyZmWaMeYaFFmecxs3GjB2SVBZ",
  "key1": "2cc6BkaEqjRivZait6MCBtsXrWQZyHarqnVJkqaaW8QbXddV3qN1D6eJUobZkUjFDQ4j1zS2W9gfJUGdLKdT3TN9",
  "key2": "5j7CxJubsDv8sBXdRr8Zz8vFKgfp9k3YhX1USzrXqqBwCjnJHJgd3cUmqUrKnj1U8KbrfHVd2HB1FZifbkEMy5NE",
  "key3": "4qQUQzPYuzcYioC9Kx18q58zjF6HqJ8ibS3QZUbyUe7PAGURDfK1Qsy5NXDsjTVj2DFhF6rfxmU22wk6q2vd1PW8",
  "key4": "4Likak85icXUy6shzNoY8DVceRyQNzpKGD2nK5vHhJimkCnWykAc9vCttinYZg5f2fwEU5cPdkGw9j12XMwMMLPS",
  "key5": "4375LTtDEuSjFE6vvAcgB6vt7W7jLrz2Hsv93Jcg9J1oMAi3uR8jKahwxTBG6Sy492uYxwTGDBoHA9HP7YvqMc6E",
  "key6": "59p5C2osEtoyXJBufFqF9ikCYha2ntPWdv1od4ySPn9hqyB9VbdmVpQXeko32rHYthajZM6BiS27Y2Rx9XC2DJAf",
  "key7": "3cwLV2cLnGGiEXLdxnF9vSi7QQM3rgFrBL9vAUuBqRQNKbcLvd4koJCgDGCHsYLT7aXncsd9CW1XPgTfVqVdZWbX",
  "key8": "kksz9Wcon9ZHGNX6hac1fCTwi3qLPoxUkKSqkM82LM2JKL7zWE4zXu2viBcmSETZQK3UYZdGZnRDs2aVnfhSEEX",
  "key9": "tSBEjx3cMGhGdKeHwsptVufdTwq58LzrVot21H4qFjVt4VhMDwJPFjtBtrhkjZoaAkHRde87P4YLM2LuVzgToJn",
  "key10": "2bZDWPZFSeWx11BmpWYDxvFkAgfa58qQD7bc3w7qgDGTVJfdh3dEpXU11QNh8JUwuLFDdpmHnWvfGuS7NLPdWsUx",
  "key11": "Li3pnUNRNFPUzEw2vzqjJFiA2R9jTwgW72uWmDB9MUaijmAmKQquFFgu15kF3U4gfCVnKgp3ogYyABoirs8VT9e",
  "key12": "3THexxTCiHuaionApX3BrABmByGmWNzLQyoJCBJWwnc6B3LTAXWJa6yQN3z8USo1RXDx4EfceNshUKM4gyUhGAd5",
  "key13": "4fKD9EfdGrThJzA3LXitBvJaxhagn7dVp2BDgvB5tUpoQLMUqr17Mz7PCZE8BnfiVCmzY5JgHXVU3amimnfwHic",
  "key14": "5JHRXatxC2vTQcrxetThPNFU9LzETSaxfYzvZpjf3E5xLTEAGdAbNkqGpymqRUZLvVqCWuirVtjtyB4WFEL9SqXy",
  "key15": "B32hs5kSyxwUzoZgPcggG3S36utwanPFEFCajqvihsTj4nCQ9JJ5JCEwn42oKwsx4ZFMz7NdJhhgxgXJrNqJaxV",
  "key16": "3yxSoxn8ybturvqqtn9e8daXNkMkdGsFWUkWdCHmzDD5u6XwkUDdFjCtMRutXf1t1mQxLvsgFC5wQbHCU57DxXQx",
  "key17": "2SYfZeiMx3doLshTWA8QoPS93VSZTZzVp4na8Pg2XqkZrBfZfKdzPSfZ5HdPee2nw1Cs62uZJ3X9SozdgwVXaUhn",
  "key18": "3bLRjNjx2rJr1TtJS2T8zQyCCbAz6kdUdFgvC4VpMb1ZgUNHoK7QHkE6sYCdtqGUusDMKUZ9oGPLVLN4SfTR62Uz",
  "key19": "4SzoJEaLju4h21iVvpYcGaibnfjCpAE5KxwYeXj5vMDhYZ4NgKfatKCNeRCjw6W8T7aCnpLYzkbniG1riiYvJF8j",
  "key20": "5qg8nTnTmQk5g2K2prV5AirMuuUoAP32DJvedrz3xNs8CAXgtv1d6JS7g1rACybGhy5xgJykqE6wQ9hbaLQeZ9Jf",
  "key21": "ffe1SbSDoDBCynWx64XrU6P3XKsjHvXc7BwaEeoFKFetogejYvs3SHWRidBVDENHaaqeboacnJ9YUzPyy8Ybrat",
  "key22": "288pxYrRrUnK8vJcF9rJZdE3oQHBaVSzBgnTrHUiPNjYA6MhhNgnVj2g23pykRnM9Ci4yUVKjyEUyU5W6YHb9a5b",
  "key23": "i6rodB2napBZgW3CgUmDcusYHcd3LvzowoLXdvHfoAYC7GCEN7yk7TH11i7MWvJszNybhCY9qmFy39EEcDWa1q3",
  "key24": "4zHGjnNQi8ZymfJ6G31rGeya4YBuDMrAtG9reYj2Pr2kdRDSggv9sMN1o9vKM631UZgzSVbCTmFhScKiCXngtuW4",
  "key25": "adgEnaEzxVDvkjuUMowr3r4HKwZVfiuXBfjDciGuHxWic8y7eRGkjEm2ZhEdb3rNszp62XPoKNZMjKZ8yM5KH5s",
  "key26": "4iNhtGi4KugT5uE6ky5TboQvD7dBqkyK2hKU8aMWsYvX6CPmGQ8j4QsXVmcMhhLTCvzPvE2e738ZHPETrrov7TkG",
  "key27": "3Lx1MEGjzYMepqYNio9hUdYtv2QcSN48619FgjZ46t1j38Lhdky2qc1yjsa84ivvaXMkZuoa88RerafnArrHjazQ",
  "key28": "3eMwDwWQ2gwmxCfUPfvuiV3YewAkY9CP2EwBP6XZfrwwAjnqLxiV2XPprqKm3rYbvr22fJy16aU76utN8dAAsHmM",
  "key29": "RFFTo1yapCZsLCcds19tj2ASV2iTWzCxGTshAPwHs3VXmZXDA16yvgGRs8fGxLCngECZXp7vQAcoARLm93QDXfR",
  "key30": "pBqkcR6NobZQJK9bQ61WS2mh7dFPdqnkUZg1WH5xWLrzGETGLUjCtYpk5d34D6LzdHmv4BhS72b1gjPC1JGXhpq",
  "key31": "2gH3xExdqUAPLv12jbChZUize6iEqWqQfiufiw9SVyuVULTxe5436De2hav2eB3sFZnngQHQozBs7tM7fRLxndPG",
  "key32": "2FSWmj4xuKMFcWqjZX9eK2DgMs3eCGZqjtdteNApNEFQJpHDkkmjVfsYsDUL9YxQ47qTExGRDZJjAgRcTYgrpDgk",
  "key33": "5K5JJGRWAV9vADFNsiAoYHckXY74nVhQUh983G6LQCmB5f79gt3s98Ly3MpH3mNUteK7K9wZn6UdMFidd1ZoWpwh",
  "key34": "56PvrWsbHpDRBFG3LbF4zVsDt7rrHkPWabYeLHy38mvJZM8TEvc28KVXRBwUpgFY7avEC26YqcajBgSF6YpVk6cS",
  "key35": "57H9zu3HWLza8cpnz5qcKN4ds6cKNkimCsvPHqhUvWBoeWK8Y2GuJVeTRTxyBw1cDjoWv1kesBj1FfYCatAYUX7G",
  "key36": "2qwj7WVamF1qyuAtGesbMCMZ1mSt2ex1qunwv4fqEcUMHGrrXsbPCSaDsyVATrxH9LByxyDzsn9ijsTFje2R528z",
  "key37": "4jjjEpXouvVUj6NFmanjg4RA81TbZnK41QdDRETqE8LxJrtdgKocJ5jsA5Ysk6F7YcjkRcsoiJGXV2BL96FLJJsg",
  "key38": "4cDXDhPNJgxXw1rCYhENxHtAEaxHNgg7wcfTiLRPc5pAaVkBwChm5SrpmZRNjnjQVpxF27aGJb2bmB9Ri198GUST"
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
