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
    "U4u51hVSpK6DETHWVEgCpKfcAtxs1nrsdnT9BKH6qUDfwxqt8agtqJ6S79vVUfcZhnqyqpNRuT9LL7dR2wJpGzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xr2LWwY5Fd64nNbo4L9iN7fhoynr3AgcW4Ng6j2qgk2mq4UHn9Uw1Q9KCo4yg4rP3qQUcDwzEeMxSwmFz3AkkF4",
  "key1": "67fe4NBbWPuMXzrsErxZdZLc26FGyEXLTbTYFZ36iHQEDe5DMnHkmScSaMJcYK8HjuTVfSdeD5fTGBKhPDg1XAoq",
  "key2": "CAiMHKv933xdjsJNUZV563Y4uMR86rMbi8qhCkZQ5NgFjS6mp4MTrBeS8x5ddp8xLS5xuXyJuDdnsCBwXGxAyBy",
  "key3": "5LzQP9E81gfSWno3k2xN4czqVUar34kbyWc4JXqJU8TUzR6ZhMHmzXyBoDuJqdCEw4RpRrD74gbH5rnHXwCtVQ7Y",
  "key4": "25fTcFetWEEtdqP2thx5JiZ7vXQugJwrUCsVRfEvFM43mdbb2nkuohBbBLXtwpmhBGNdW7QuzpV1pp4uj4bmiFka",
  "key5": "32Zb7eQccn6q8LWgVmS2bt6Gc8Wbxwq77dXBFzTQkyb2WYMRs6CTyX8DupgNS2HuyeWxcgwRGvwGUa5mFtoLJ8L9",
  "key6": "5TnhM4CGUBNg47cV17439nVJ4QjCuBdEabdVnTQkXSUZmdiWyxErDvaV8bfBWQcRHAVXvkgnRUQ2BNdFuAq72mHT",
  "key7": "32syzaB6LppARnTDJFncCrJ5o24Ms784whUVtKuoPcZsEPtACXThZ4sHTsfxKjD4WZEUv3jEd1Tcp9sDkHRxUt6b",
  "key8": "pk4avSQ9dcLPYBfe6mqWjRH9Pvi5kH6NTzXfX8uVCU8TUFUgdheyFKJc3gjPq7hmuQ5GL5gFPLySyVXGdik945w",
  "key9": "2zfnNVdrfXheUKRieEbdiou5DKGnREhJSfBLUXe7oWFopCpdF4KFyJGWYRERicKXRVYEU6XJzt44F5Lj6Kkf7QuE",
  "key10": "4eKFRi2jN2yyhpeW37dACM1tNWsgLnhs3yaF5fdf15G4RJjv9iMG892ysZS1iZEnKyLdHqc6PLBKFtoWuCft77jh",
  "key11": "5d153Yy518QVbExAEbbpoXD4Zs1sTTtCbENGe8jmnNnKF6jxW31Ps3N4eVV1uvZhTEYFAzTo4Vmycs2d5Dhcp2rW",
  "key12": "339m5Grmj1r1uPYoivXEkkdqUeUhg7wDJsX6yqNT1svW49UK8pYrcREkXsae27RVH9Kfmdddc6tLf65DR8ETRe8c",
  "key13": "5R8BNVWGwpqEUPReKzPVBadB4aq8vKnr9f7nF5VjDQYm7jWAPvP1WynzXMs3qJSEucdPTWHpGKDFDdh2LN43zRW7",
  "key14": "33fbDQN3a4fyQWTrvUyfyuVHLM1y6cLknWapPS8hiizpeKPSJH8pN1ECS8MxpbPx2u6ka498E1WsStgUMz7EXMD3",
  "key15": "63tQR58WHdd51rsLm2sMA3AcTJBwJJFzcmu9XVZ7u17KQPUm8KaMkFouEZHkxfKjwpaFhasuikaJ8hGZZ9ShxTHa",
  "key16": "5qm72qepReyLJasQGpwKgq4jGPBqq695pceXXY679awJRLKiVPUxBEjjbcM9uUaB4tjLSTgfBkXR1SCjjjD3JeiU",
  "key17": "3T4woNDEaMAcLtZKqsfPxXoDxjaceKD4tfnNQvaewZhPJU6ziK547QjgDWZM1ukEGh2SvCHUhMTwgcP7WYwxigoN",
  "key18": "3qmXaJWEB5AHBmJCRxMgoxbcnu3CwVqB3BPrhZHAkLi8fmLiaNZqrcPmg72o4jnjb1GnH9xwBCwD2eSCNmGPbf3o",
  "key19": "5hFxBCnR3o1WdZDW2etC8Zrek2Zxtxd2cZqdJAbuEJXWpiHsihSvgCRTo6fdc8tS5s2oXX2AkQsv6x23XFHk7Eoc",
  "key20": "26HzTxX1NfSsHc7FBVUFU4vk8ZytyABy5igkBqPuaG1Xzoo6Brw3SVMLtwJ8Q9iSobAHNyQxBC5dFUHzRHatCfY2",
  "key21": "4mri9sbf2ZEfRTngiqJg6MPsutzPSdwkj18zJFLpLa9AeugAgBm4AaTpWBWepckcd8A37iEuksBQvSkgj8YFAZBy",
  "key22": "5eWQdkB8k484Yo6cTrPZTw2KxGWqct5iojdREDjeBgom4oh71WdaVEQqxVRCGy1SLxkKwEUxwSvqcRWTbtNje1j4",
  "key23": "5LuymNiXwZWujZUnC8o75GKobC4mAc8HepTEePvmtKu5FqPEAg1YtpKjJFiwqS7AS92BtzhCRygK2bWCUbBrhH7T",
  "key24": "miG3n7HDdV2c7v3juuXFNTwGepTJgte6NgS72g6iCgxk5zKy4G8HGyi9DrYcXBpttm8cCAqKgRAQqp22T7cL3E3",
  "key25": "edUkfxZVqDdzQk9tKW9GUSxtoxfkU7nUqfFqLKeDtSftzpnYn2qVqtuWAKMVfCbSC5VdW6v7dwfG3Z2Yswgaym4",
  "key26": "22QDbbKzC9VrvdeW4aGXrj1ciBBLG7gjwi3F3acug2xUJhXXnv5qeAxaiTX2bgkFFbF2AtB8B5dp3tf9PkZsBK8g",
  "key27": "5SMiNEzpuPovNn2o2cCqsnSnBmiob8W1rquG8EbNRSNN36wAJZZLQZ876ams4CrpTJdQFcVoWn83B99siWfTWvbV",
  "key28": "4PUXkoQxKL7RJybxSMbHcxThzCghWgHb3U3xwrRMFdUYX6H31eoH6n3xuPaUn1dsNfXTnuY1zKwiLKb4RFrBkQyH"
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
