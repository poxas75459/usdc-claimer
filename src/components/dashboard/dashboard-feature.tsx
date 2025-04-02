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
    "29y7XL5CNkELAXnXD5ke4oo5c3odKD7X9e7dzEp5f6PKcCfxmPiwpMgV6uZjEdC6mFKJYjNvTXTNKBPP6rLRegBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdnzarpwuf2gs9rwahQgYDispL9J4ufJNgAmnvdi7Lwo7ohMNcw949XXRg7ePeCeDR29LQ8gqnz7qQd5rUGNKE2",
  "key1": "15Tpuh2URnWcHhpV1szbeMpQK6YrcXN9B2unyYZHUehJuFKh58FM3MkFkQLBJHaVXyJPdwbPo1isysT1QH57LXf",
  "key2": "5UeAQBoWspRixuos7fbPNYaw5nd1HatypgGRHjaHTvTcN3ESLypGM4h7MmQyzvtP2KkJqbtMPG4aP7ZBpWCyLwYc",
  "key3": "4S9oNp7jJ7McsAnK97Ne9TX8Y5oXVwWAMbk6n8ckLwfFPGP6WwoKWR4JX7B5bxTQHiKEFQCB9YEc56BnYQJZEw6n",
  "key4": "pCY7VrhfbZSsPLQgQpeTVNjU5opzT9BEdi4TQ8aLLj5PUxUGhwPvfHbkp8oeuQVAXmYvtUR2WY1V6FPbM7XELkQ",
  "key5": "5QJ3pwbkKdbx159T2s8hxRXktDty5yv8UVUWmjciKNsvAw5n6CcPvYW31TMn1DUGy5wVjD9s4xRLh5Sww4dx3qNm",
  "key6": "2QUC6LasnZ8pUjuGW9hS3Nz9iiaDsUYwbXMTiDa7J13sVRy39ttSysfUDQHivziQhP1zW2QuWBgvWosqkQqqUHPq",
  "key7": "5sSknFssfWf1mrYVYhWC68gtmkDx2GfPGjrhTHYF9Bqd5sU1rgYVmEj6y69q92R9Er6DYcreQvSos4xFaGBYbLDi",
  "key8": "kCh43AnyHpwDcPkuKsqbzBNWTe3pJ35MmVz2ECnLPKokbZUCUYh7CuswKnKfCLpYW3uXNc81G6MSHyQso4tcZBt",
  "key9": "cm8LaCmYpFPYRALua2GvMQ2QJ6NUGdKb2qAp7HkwEcSALWnJVzx3dpGigAR9mX6CJ5g3Vg4zx4uE2y8TaVZzCKM",
  "key10": "mPfY8YvstMiz4QhCbc1uh62eB3HavJC9EECPnTouQXoxv83pcPZoA6cGjwrc9nW3CefrWxvgSPHpCaRtY6vwwme",
  "key11": "3auG1zzgmsef2HzNqEebK32jVwT1UnEhT91kSXpHfV7ACvw3xL5SH69xnfFJMAkCt84Fy8FErtc8Gvxnz1jHXTqs",
  "key12": "3CwHkbrGb7jDP2xmGBgKZ3XMDX8tq74uGgeNMF724mdnjdFa4Kt9B3u2k6TLBmzvqv6Kjz99G6zva6u8EPTZCFr3",
  "key13": "2RtFyBj9EuNWw1KLECdKibkNMbH7DXVbsBaVRk6jV97zs3CzhTH8kQkUuDVvoXqYbYaAcpU6Ag644NUNzKW86fww",
  "key14": "5mAr86cbayEgbSLowci7EcpKwnBqDXogPZKwKaZwN2xTu5RTKZQ1U5ApEQSTNPJH3fuvd94KiuoJJLnf4FpoJ6tT",
  "key15": "3NJ69sGJavCQt7FND82GnqFow3xsEj8NwL4V4a8qNMNcQxpRDSmFpGBkEKPZBEsu3ZXJSSbvSzXrW9MkjqU5pkvh",
  "key16": "5Y4FkJVTW8bHqtFgiktFP13gW6SX139U3TjQxgNGWvtBn6ueUGguqSSpcAyiJQxPmmJT3EaNJ9KhXDHb5s2XLFJ7",
  "key17": "hZCq8RcWgQEHf3WssxCWDgWrhzUgDrv5K1NFzYD9wmJnGX9mysFampNtw9vNTppNzaTLHdqdwXkTesW4Tcj5VRU",
  "key18": "2SkKbxovUaRfH4ZfiqUx7nVNRKBLJbzre6oas6wJUVcPffwREjsD2SD1Qf7edfykwF7geamM3rUQiHfmWNB8X7wD",
  "key19": "3VP7paqaX4zbhv7v46VAuLSo9G4tp8B4Uc95Eo2c4XLK9ZZtL9bveCggtRMGBXPWcv2uiWQ6cEG3pnuq2ezTViGh",
  "key20": "3mmiAmtG7nc1MHz4X89eA3oq1EJtTkzzoh4hVKmf8csHJcKMY4UkNXEWDSDYJC2qzDm9YwJmqy4bfwagJD6R1owT",
  "key21": "3jy8brdEpGEx88n8g7Avo3AUCPKvNvviQk1MegufTi3wM5j6X65qsAkXqVkJmrZgrHtuiArPXRM6pmVR12uKgkV9",
  "key22": "HQCeRz7iyC6TSGHjW8UEd6r8KrT3TZDSpWWKhqJQDqSqemUZTtu8ZgWsgQX7c8echrAQqHz24TiffUSH7YJwGMT",
  "key23": "5vXJDAKfa1LBrCFZe43N4KzcKjd11NPE8pqVn8CuZXUi4VxmYYLjLaz6gzWtT9d8WP1DysiweN63G1GgXSWMQfCQ",
  "key24": "5u6E32YDgWQWxxMaTj8EXPrkCPG3ymn1hPBLCrSeQGZtTdEVxGpLuo8CruHRssdFdL86KuRC4CQmh8zQ1Mis15df",
  "key25": "sKH4rewkWcv2bqJuFaFWFbJhhRhbQ27ob3V4SiQZTTJL7WVGH9AwvXbULD9CgCsS8V83uC9XjoLHmz1rmczTVH6",
  "key26": "5XuRKSLeBBSectG3VrGUSTnwmTHWQC1wU65hfeJN2uHtj6GKdCHg1mmwWRKFiuPTPDjtVP2uBegChwqpNprvuevF",
  "key27": "215ZEX1pUYgQD9nVFkeh9jyVdCVcRSvKvBG8FvSSXHrmadEuCY6oxdNMLsSsywJ5yyvhRAcsoaiY8FVzq4qo7Bvi",
  "key28": "BvU3ccPnU74TffKQ6m3oGsoCziCBebKmT4J5cHN7t9wGcYZdQJfcBJQp1AmAKnu47FdjJmrGjeVcC5UeimXqpWa",
  "key29": "5xbazC3KXQPXPeR7RxiDjJW8bPmX4pGqbMjXJ69MgxPZSfXNQ1TR5dh7EJBM6tQc6T4g27z2QKFwpdyf8R49Jjck",
  "key30": "5cwCwjyBspZfhGqBsV9LqPbwrLQDSy4zncpXpTsPQov9dM9pFCWBn5SA2b3ZG1AxKRcNbb2Cvd4rrcDFv8YrU6Zg",
  "key31": "2NpeGytbHJjAG5PicB6wNGcGzJunearZtdkx6a34oBpJDN1mM5TkoznpwmJTsXXK677CHJhTKCG6Fn1Dt5f4H3hu",
  "key32": "31LHbNELrtavpG6T3WSkxTNp1h48Tk21BPv3JkVs27rAw67Wk7vbBrVtUKoqhcdJVfcisDRzNPZYk4y7oe9UpG6j",
  "key33": "3gXoafSUQbsFWBj1twySEY7TXx7DDZhCyZryCoktS4RHYzCFPWnUKqRTbZr9FYnWCBmmGNLCFidmw8ctiFxBoejr",
  "key34": "22kiTvQbxyyTwmmz1WPai74WeaYc3eLpjGYm9ooQbVJGD5WtP9MPc3wqmAnH54TpCXQo7LJMmnusrHohdmkta2UU",
  "key35": "PLgb9NT1ffnNfSqP5HwKMw3mSzyuDHBLarhe9QT733sUPExG3z7NGMhrgT1vcBrtLf2egjc2q2BAe1g9w2NchPZ",
  "key36": "23wGYUBdQ6aDkdAFbudr1uaQhGgxXAngqV7QqVCm1W5UXpNfK2CoQ54Wx1EhGN8Dtm9GsfMiT1DvS31ny2pLvh3s",
  "key37": "5QfTUrfUP59ZaWiUqpEymijsEBiXgfatnzFXPwiGL8fALfdXFcwfG49BN6JDmbU9yDwddCVEXmkVsBFyzrDyfs1J",
  "key38": "4UeN6x1DjHv3gyzvE1hwia8uXbNe6XKm6J1wDTUH5RhHaR2PcvXNS4joRPHY1eKZNUejMn4nj7fVUutyJyWhbUJh",
  "key39": "5Zj2LWmAqB1dRVNpq26Tvn3xN8X2bKe5Dgv3F9ryki6PrkTScXJZJaceurdVdpxsdnSaMKgJz5dgr4fEcqjgoZvS",
  "key40": "5kUEGu6hb9Ehn8iFUeahM35bknWdD8PuHxrKuGJyCoKcGKpzmPZSrVQQUVpphMhosJVXEZyHgWecFfcarjeDuvFt",
  "key41": "ZMWxeDdzoBMh556XZADoYKDZTrtkxFZnWiZhQTviuEjoAbLEALoNT5oK3v496gLK5qMkuTQaMLpa2tDmehAUHKF",
  "key42": "AiM38mMMcZfSZGXYpHTkQfEoPNixQyNs6v4WVFJKnsbGCXSkLGfA8oY7CeTSNDjqLQSRs7TfoWBRWU2TN6is8Xi",
  "key43": "43f91hkS9LGAwBHJ8yyooQArjbyLGm9QYaMPtxqNcTYbjsjekYZ9t1HJfDEkq6wiQMzikdbog5gqs1QfZp2WZ9pa",
  "key44": "58BtCjoBQ7Y8Ei3nv1iJztxNuN1Stotxkz3jBiFjcFyzhhsqejcQ4c7fAL8HEo62CFRVbbzFGiwdRr5scizjSs24",
  "key45": "2pSZjNPk5uiod1n32ajqSzXDDByK9LeHJjzkEaXJQCfkiBQt2uNAzaAQFovDvt28pYk3ADGC8AfKnnLWUDNCwzTZ",
  "key46": "avEC6rLcaeRTcyhnCo7EomVsRk8aRCYUUCXT2ffuAbfR1rRa1Wf1zeYinneupXTjTcfE9Kstt766JdrzHYmpvfG",
  "key47": "aUKuFb95RfVTrASo6mhYgpFNGVmkYxEHrXiy8AS1Auy5MgxAEWyfikErZiwWtZyCT2rKNj3NwGxFGiexoTRWG36",
  "key48": "3QHs5SGp2Hi1SiCz8Gvxa4dtjgkn6LKPJpbnra5RuTzXAq5mE19bHvnRPfcytS1JqMVVdvVQ6KnhFtFfrbpjL9bp",
  "key49": "5FT17EQQELpLZki53DtfHeXwNTyfvaNdJyFimNjcGwatDHNEC82zXpRWWXUvDULViUzGEBQ232W6Up9bT7ZvSgk5"
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
