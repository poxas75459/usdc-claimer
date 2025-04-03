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
    "iRQu5jkk1bxzKMTP1zqHRrFyohCk99hKautufvbV31Vmy2pK5Pfw1pGfv9PH7JS4A7wKfcDTHrK3PWBA8VUiZ5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yt4QG5L5pyiNRG5uSMKu7VAyZrZyEoa4wV9K2JhXkn9GpUBaBYdbaeLp739oMZf4yBVrKKkfAEpr4Q24ZadNF5t",
  "key1": "26eirHRBMdtwgCjVZmH6GNFHzYLSAV87r3b5Rs9T8X5v7uz7esBhKm4D9ChFxvyDSkLkeCXBgwmaqizUxLqgtNrD",
  "key2": "4uHKVX3d5gi7ebgAfjPZdoJwjAUFwD7VEp1VhHri6EntEszCJVrewyUZ56PjSR4hXczmNS6QyA9Qf4rvYbqRGriE",
  "key3": "3UtNHWjA4hi4e2gJucoZPURYNGNYzxw4j83APqtKprpZX4qMBpq3cQW8Ykve5Np4RVvde1YUN5KwZkHcNEtCMwKN",
  "key4": "26HbHc7wGomL5afZz5Q7CJ5fyFzdLRqMgDqGtPRx7Hq7wFJCc4RHVU165nQW2aLvVQbxQxus3qxwLATaNvmBP5qB",
  "key5": "GmGUPUvG8R3PMKEUC296vrsEp3TqcwtxYNo3JhPjQe2PTsRmmXgnT5VnYGe7YvT5eYXAX8Nzrgk2oDgSxMiiujd",
  "key6": "eH36s1EZ4p3rdKkMyxqJQEbLhrksT8xnUvVazmgUxi89gr52uQB5UTSiexa9SnqHDcGQDoEim487CXM2RXypdcg",
  "key7": "4CzLrKrqFEK9Y63R8XrgfTu7AnHLsxXY8u1Hu8CnWADg6X1xKtEHJaZzKa8kdQpmVZseAymmEEkqC29837Azvfi8",
  "key8": "27FBteq1sY9xygUEVRZn3nVz58DNfmNr8R7NxT3h1CPfhJNGNHi2qfVKN7hbHkH5RWK1sA8QyGpv3XW2ijjZ2yZG",
  "key9": "4ZZrSC7zD9iEazcLp2CoXztwCn3E6NYawE51JwSft772MmBKYrEG7GtzmnMHCwowUs3MrYizh6vNv6HcFMViDXzJ",
  "key10": "PdoEJboUgfiVxvLxhqHoZtQ7wphfBtujnpmbTCmqyGsUM43fr88XK9nGgHQa8WVbKCZXqr9oNK6xjnKE7CNgBvA",
  "key11": "4Ry7WAMaNPDcbYS8hWKbYNoUbd5JqAwAkrdnXtNhxgnCfNjRc1LqnWuwcss21kr8tPh2RW9mCFEamdGkHDaNQvAd",
  "key12": "xk66CxppdJW114BDdtXebaNUkqLDCwKctc8QbFzRBwmDcfFcHGN3huPVKcYTzcpSe2Hrx1h7f98B1DPLRuqpSb1",
  "key13": "2vjeK1Ph19mSQAqYN3erTqKwP8pubqobuPp988VXM8fn6FMFqiAmmWuKQkTYjVoEhvLQuCPobN4XaL2k5nZd2VuE",
  "key14": "3oskbtKK9JgcQGHupDKqRT26kxwH7AvAEh7VfgtrppRGR5cXG2AKyKoCLXwAKNzbGzw7sHsY426oGNmZtum9HDEa",
  "key15": "4nnEWYhKrx1UR4PL5pWDZSfZhr6CUGiu887JVQRbptbuHVNKyXBwR4u5913bYRwpGSXkMskNqLwWCwTNzZSH2z54",
  "key16": "4swbm5dP9AyKrnYnxh77ahXsvSeUpcZzrQWarXvUW57BaAMqSpQkMA2wuy6bjiLWNBKp3c6Xyn7LRkC9tjF4TKq9",
  "key17": "29qvvQ94dNEtBarrGuLhh5EU2JDBYrNsbGLsNRzUzUEagfQz8R39TaLvsRDqxL1wYfgHWAGayfLUUjbErnqNmPEf",
  "key18": "uLii3F3DUjGGECugXLfbaFVnC1d6yV2M9Q3JQPpwqTrxt7TL4wyw9sXEQhzfTbDkb7qMkhRN3VJhiCY7dAFoBMR",
  "key19": "8X69haeu7okdyvUonfT7v99bgmHuycFounNmKmHhNxb7qCtjrD2YLv7Fg3BNunCpGkCusoPMEgZphaqwr2S56zb",
  "key20": "5KY78nKfZwBwZC6FzH21434FMZW5mqZCGivqfaBCDidka3TWdsDUGcViw6KeZBLu1aSZ5rheoYMSS4EjWJ36pnPH",
  "key21": "37iDAgwgcNDNFAHR4QTJgCrTuAAjXFNZiW1U67eNdYNmbDpUafxY22gKxb7VzaggAtbBvK2tdLXGWZLgCiXGSkQ7",
  "key22": "3xs3tDLunUtAtiWo85KvFU3gPVq1NywAGLLZkPXbmE21WGMTJpYokzCJddgM6iwk4vmf6HrrPbd9r2ayD27BpVoF",
  "key23": "2XqvjULfgK3TCKJapwdMV2cvqLsXiNKJbZmc2pMqQo5LrhvJzy2i8g3y7JkTWuyWi9NAkVtKfVjVsTRGB7uAj7i3",
  "key24": "R1Gg2dQDUQ4Qgxd43agHH96M9sMrtkVvaEPpRGTeqmQKLcRaWDwbckBAXXsZ1xbW9EoFz8f9xK4771uW7heePTy",
  "key25": "ZEMKxjYgenSYKTPaDs7AEzdWRgeogsDe2E4Zw6xko77YTCmPuN9eSn3eVu2cthXc9MmY149wVfEdXZW7Y2my4mC",
  "key26": "2g9vDPUquWdTeE7X1zswfTQev6RgyTwUYHzoDgQzw4TSmSj6EgS5h2j6ixqEZVDcb7hffaTqQoHjjnM44xKuDcyU",
  "key27": "f6QeK45dhiGF8U5MVPLUVfZqp82fteJbhhosfgsQBwfwk8fTCU28Rt9vJtsWu2hEVn7YpKZfvF1SdPyF8YG5Ug5",
  "key28": "2ajMSp3Pz9PNcXCifHjygQ775TNsRFSGjY4LstzFYCQqL921s99jiAFEnu4embGzkjAUuU5SFpXTMDdoCysygwow",
  "key29": "3u1dqENCqAhafJWLceWpsHGtUi6nir684BZLAUeHkpq7YcJiNzZ1ZSw4HLnBiKzcAH3mVjSrXcrjXYxy7DoymQ4",
  "key30": "5WMJQBRP7TyJFDP2ToYFuScyb3yc1CSnTsQyYthfNZGStTNnx327WyNcSkNVqbNNKnfmtAgogn7TM3aMoSHzrm6e",
  "key31": "5RYqLtPbLSymb3KrGZJbacp6DnKLxFUQ1ChGNbsL8ZLp5kNJF4Ts3NGx7AxiazX7vAXuXFPVaiRNwbGgZWKCBazw",
  "key32": "3Ak3hMZddTKQCSnxoxhY8NKLCJAghWiPDyQmzbax9XxKVz1iHaZUCLfVGK6xXKo1Qxf2LHQUEQvxXtGg9x96e9A3",
  "key33": "4yFJzcTj2Z4jBD1Sqv2qk2cvp8NcYPQkye4WczBdA6mviLRqGKWuLy1oe95TfQ8siJWHV7r2n6mYZRVcR4BFYbxK",
  "key34": "3ZFeqrbYcUvKYiCXZtVonsAn627aRDGh8x5e3w8XgrRNsggJrTnkCvHheGaDSp6dTjT1tpGHRxGa7m9hfS6Yeq47",
  "key35": "3kauZs3Cgfq7HAQDWe68bhdmZ36aByYcYzPrgQUUowhBcwkunkQyrx1N9H4NK8w1CTEE5cDzkKdFzvQFuWsRru8r",
  "key36": "2Tv7ewzbEwAUe9paJjdHUJmAmxmyRDxL4WtRgd3UZz3TqqrETSomGhXDeSjnbuT3dews6XnSkZ7RGBXTU9vtZpZq",
  "key37": "4Ue5dGYakdMLjoKRFCmjEiTXcoucoYBYnvF9wtpGFqw4Z88p572uTtknQG3FP6oXL5tc1TVSwiBUDz86oH3BbjHv"
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
