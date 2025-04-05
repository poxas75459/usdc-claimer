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
    "2n1FjTNJoHpfLHDzXpqeJeFVUW4eunNPv88QmkR6K5hmuUdFtXW7M6x5dMXsXf3FC8XBhhriu43iXEK77WVSXEBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3yzAWgjv4nB9mqyjnoaqB15yu5vVNrCz1yumjCHRGTGFPDkzdTVfBeee6U2thUXsMUb4ZCZQPyzCYFPPKU4zJo",
  "key1": "4yYbNB6o4mBA4aDGqrGJCU932zWcAndaYczRqDxiUh3iJw83JhoBGfrEeZLYa57cbyck49fzscpx4Db9UUCwm1Fa",
  "key2": "3CYKDMddGDCR9m5UZg8bGf34nQPaSCB9z9rj9va9YMBVNvFXsNRL4uyJahjSYdXLf96WzHx5FKiKm4w8nohv9Tca",
  "key3": "42BNmb91BrBr7jVU6bPZBxnWPgkCHkEQHdhZwfRXFr1YhbPS4bATRcFKJnN9iYdNwM1TP37RTgL1JAnrvdHtBG1F",
  "key4": "5dL8W4B46sDmpLUCUaLVHxA1ztgJfiETuDXgvwtYkZp6tu9L4wmFQi3r6VospoQRP1v45Fz9bzFSZMs9E3osCgGP",
  "key5": "3tXXofM7jAFRUyxfdzTKVGhR2J5kptyQLVdADXuwTpkJVSmirgUSym5XzEVUMxfQTUjcamq7rQ4WDUmPznsHJZQq",
  "key6": "a1VvQE8wxKuPzn5jvj9cpjsjsnDcHXThGeS383nqngVJa992Pg2WkvrEYYZnzwTPVXPr5NH4uLvfBA73p5QmyaE",
  "key7": "26njWda9wWD2y4mFNQ292MSMw3TGBgDUsDNh9aWGJSR2wZCmqaASj4vhrhJ6CNqBC2QwHzfbwUPMGtmAGZPgDQpF",
  "key8": "2EoL1dG8zZrZAg6mHryEAsrJ6xYYK9szhNXfmznA7PTTCjTLHsSh8jHGTW4B7Pt8W9D7TgD2gHjJVKWTS2gPMWnv",
  "key9": "1M2iRBemZiBg8iDEtMg793dMCj4kpktsdnZvABmpJxcQ2wppDPdERuo4swGm2sYEPWjKz9k4PTGV5AGJBPzxZyh",
  "key10": "hRwLirMC4b9MCjNEULAbYvJ1vBSmaCYJ71TkV81345CLxL4mZgunndR85Nck4BwRYXySqrAM2WreoAyEBJPLYUi",
  "key11": "4RbvaiGXtm6BC5dJueeVCYT2mx8eC2XYhcP9TgFvk8FXELbR6iBbsA6LtR7bcZ9ncebaDe6reuFK2ceV5JTyo2NF",
  "key12": "31Fny6UPzoAme7DZkf6YH5q7D2FXdZFSfoVs3v5o5fN4a6bc8VZ8YwQoZeV7XZwmBt6fPfmYcqRxQvQgzQ28yDq9",
  "key13": "2iKPR6Vk6tCgYToPC8ZK5fSjVCJWFDg3c9ZWfnNeRQogGxSFUu966FTZes4i5bJDA6XfKmPfnhRrSabqfZK6FkHz",
  "key14": "5AH9eJRqtTfw8oX9z1n9SH2fS5n6kXyphwHCJPE5kEJHBC57kdrQQLgyU59Di4JEGQpmuiJwqpvndBXFMNhhHabf",
  "key15": "44hRf9JWkXbY8XyXsrFYjokh6jmcKW8yeacBo3nfaDcJUk1LWNNMy4XPVBu9ERytxpnDSxqN5hm4jJwpZbwDS6gU",
  "key16": "e45g7ie1DsnoGXxYY5KNCnNh8FY11qxcEgxfzCmgQpfs3MQTgTthGRnMuUGJxYbdoRPk1nJX7KaV2Axbbbz5h7o",
  "key17": "2VYwguEiPUu8cUMWnkYTPfjmntUyazXfayEt2AY3SBQ2BnreLZ6ydDboAnH1jpMSuw2uZkFgGhr9wnJMFHC8w5JX",
  "key18": "xDaJ7q54x9BKAGmsSsLiiRTEHeFUaLM5jLZGjLk6vNVckaznuL1C9sZLZVKCbpFQBXUtVr3nDcZ7N3Q5wYvHG58",
  "key19": "gmUYuU9HoY7NoXwLEfSEQKV3WzjEqWgh5qVvn9scQLtKe8Reyt6wCqh4bBi5TfgHPVuAAvAtNPiFBrMdB3yZjWh",
  "key20": "5ZM3P5LPcJgbzNPuvhFp8KjqKoVuqeTtE2C6tXgTH9jgzKakNk58ddpoBuAKsKKBj7NdCihWLECQ9VB8to6EpqGG",
  "key21": "swvcM8eu4dLG45g2NgZWhhDKTKPLHMLmayfCsYRwUYpnQQapgeuEZUJsbm6n9syPJKX2QepaoqWfChmiwxS4NhM",
  "key22": "2J7fmvDu4WyNCAo4d4Vdi7vQXbbMAECeEUnhUd7xJ5u1r6QyccDMLbdA9Cm9emthP8GvA8T847ScRiib3mVZf4Y4",
  "key23": "41bYHuXCYdtc8cdpX2PYojbnyMKgHki4nDZY1aJ9C9fpyCxkRHFgHmPKPxEu2hVT5SZgvLmeyFKNf77kQxj5wmJk",
  "key24": "5n2DPkkFV7smQ61cFuoQwudiMYNSaiEVZswH49aeVowiVGuLaZszoe74pTtFjwyquQPxwJGrQEekCUwa1gDwsAj3",
  "key25": "2sTPkNzCywGpMjsn4xcsExGNgpqdgPi8oB4PA4GF5vD6hd6pFyMyy9Qq8cpM55GLWAk18eZp6qhdyxSToiAzyFDU",
  "key26": "4UyTTNEHfxe1qG7zr5mLiz6kkPm4bzo6c8tDd69iCHB6xwHJAYtMiNYqwryF5Dx3FAg6wqoc5RZzyB7CqkriW9ZV",
  "key27": "4Yiwep8Sr2G8BW9A4EbUxuAoEG6LoQnmuhByzft72i8ukWJwWmbgfawzD8VseQ4TQMgdsY9nPt3aZ4QeDep8Yw7h",
  "key28": "mZXHU8RUBS2LtiGfJD5uFh1P9cn8YpCzVfyd7sDRZUvmEWpCPVr9LGfn4EhXFKnvjryPVsYbpsB2HKqcm6VAPgX",
  "key29": "zpac29BG6mfKq8YJSytjU6DS8fHZghjc94Ndjypw1GU1z7V6FYtDCV4mSuaXFpFRASjsGT8NEQ94TTvn3uMHHNG",
  "key30": "JCsei26GdChxqSCiT3L7y6qJ3RDTChyL1oifL8pbm8GmANvoa4EWsBNW2HE43pEXRh56BssBd7C9nL99TmHzfDd",
  "key31": "EBbvxwVXZdE67nCLHP2K2tU96XEcBQF4umRwLdi7tkk6GV4hJA8meqHaxDTgrDaM3gjVhjRWddKQGQZgRyxsoxB",
  "key32": "5PkMfxvjHtS6gfc3t4Kmkj64tiJ3XusBMQa7FNVuvTQ5yfXHV7WbqHjqCpgJpFXAmYxxbfJiq7vUH3zs6GUGm3iU",
  "key33": "4Chw9ibvmiZY7zeEFo4mY8soYyJ2E3g4Shih3voo5zLVLtmi41vgsGw2RgKfq23tSYfWaVphQUByRFcYHpQB7hSY",
  "key34": "PPPXjUv8rA9AnpyP4tetFGSXB6AruGDFVW8GnH23ifph8C6SV1QvuJ8LhftXX88sj288GVLP2wF51wRQjnHHW32",
  "key35": "ZgvAiB896hz1uqgG5bsuzRoFZywq479W1KfAk8ueYXzsmBvQWL1QZYLJZzsf9WNyLwJ3p2KbsDCHaGu1Yic1L5N",
  "key36": "3x3dUt7MwTjTAb8GFDiGP7c387ff25G4nxAySJjdzUHzhD8ZyukhCZzzxiU1KysBRJhqdDqBKJmrnzZ11Xt6W7Y"
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
