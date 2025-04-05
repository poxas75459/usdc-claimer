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
    "mbubhYsmNiXuxDSMdq45ogvtHWrxhpYgaFUs696fk8qb9LcWCHXjGcNKWYUm5iX9rBvSRXrsgWL56vysBsvF19w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJFKj4YGcVzEhM2H4FL5tfxDHCFRXnwrNgUQqjPjcB9WvW6CQHhdx86qDHJegemY9BAcPZcTDw1kwmkGH8Sbt6a",
  "key1": "ibAXaLedpBDUjaoufn4hY6kac6h94vh46tg1osK7ZNm74NK4CkPLde4UpaTRKdio3d1ytv7GUPTzD1rkHxGP9m6",
  "key2": "3wvZAtocLn9AjntGoozfVcKFAVU59WYvHpk3bqFvdFZVnVFgRdzwiipqPZwZEZCa4zdR1qVS9yA1MNPrGehUiaHi",
  "key3": "3hu68vVz3qQWG1zNvReQeueNgUTvQ8ARB1Ho42K6Y1LsXXqNQ3NVtWXEobqC5vgBNHbLrHxhE3avMibHpHqUVKh7",
  "key4": "4ufkq11LBs2cqbyuUdCffcPYNy6VMyX998T9s1oKT1M2aCfGnsPYGyXfB84XGaM3Z5brnRkbwr2hMiSia5ACNGCC",
  "key5": "gC7DJrkjpzeGfbcNn2uaHqvBn2spEh6YdbeKP2i4DnNJtUdcXj11vVCRrWDsnGnQ5hbKAQM43WJ22pdxvNeudjS",
  "key6": "5pbTG7mzpSU2z4QTLRF888xBVTBEWmY4GjwxzPmMzroiXwWnJ8qjRz5ikP7Fp5mTWMMwnENsQCTkiNBmqjgDVWmC",
  "key7": "4B2rqZjybDAUhvnMY4gMLNsQxb18qfBXPFqXLHrXtvtwtyGprmXZ26imwowwhwkNbRYM8y14LRr356Tymsh1dCh7",
  "key8": "4eq6huEWCkbVzptY5XebXfSx4u72cxDtttkXHTR5YsatDEgeHvfSDNbotjyBsETshPnCw39i6iMcbALLi5a7rBt6",
  "key9": "5HNQ3VhU618dK583A6VkMGDNzsWqDMnjvdV96aD5E5Um8e7N6G2CE6Ba9mCdiToaR4kxDpuh4Pk1rKUSQSYzMeem",
  "key10": "4oR5xvSSZAb2CbH6CPimPA1bhZ47mP5bkXYSViqwTipLJKVHVzsQ97aNBVzANtYHHehyq1MTDMmKURmE9EPSEQrq",
  "key11": "2kto93ankCCQpKcttp6xFEhSSzZei8eiH3xv126A8ZDg6YqpMSSKY4bUbAMAY49GZVQNnnoSAoV8Le98bRyyfu4N",
  "key12": "u2KCn1VgvH1FHySGRcZ1F4BATM9pghZvMZhuWCWmpw3E4dfYCW5ZGNUK3BKMKX8zoPuctxiM2GL39EaF1WXH2CG",
  "key13": "2aazyQniWW5bnRGLGeGrMCJaG5LXUsgSNnnYq4bJVEqRJZjErwkKjapWPxfq4sqVYfcKP5u11AJ7iLQzJWfqUDNB",
  "key14": "bcYdWHh1b5WBYqAQxE9KgDby4pSosFLgrr1R8ViarrKWiUJNK415drCtiiMbxzaWZDtT27PKxieQ5Ni7aLt81N1",
  "key15": "5fyY4xfU23x6PqxVDzookJUkuxvkS8KGyQnWAuGK7rH8qpXbStF6XZF3vDYekE2iAThNEsnRMyUZRnpdzThEdhkr",
  "key16": "3LqbHqtUoGcp1kwshtwZCienCQ2wwnqYJ5MEJFM4dpV3jJr7Y5gBHecgthQkPpDKWaTBAbgHYwsQRPjUAVtMQmGi",
  "key17": "4F42YB8bXEQLvhMr3yRwG5MK1Pdm7wVyS9Yrez1btyTsk3AoveomqC4QktBxmbLgoP8J9NuVomZ8YT8Hzsp2fd5i",
  "key18": "3PJpBqSddh8bTf3LLwKr8QSKivua591VLTGZGciW3bKAchG6PmhhvW5BFTkHDguUpsPHuieHYrx9MvxS3dEAj7jS",
  "key19": "5TDvKuLkGJTWn1rFAAzq4Jiv3AaWdrtdHq48M443os25YbknR4AKhs2yZc6mbZF5viFDdEBJ3V8C38VWDp6ZR8DK",
  "key20": "4bHjE4U5t49Abg8TTJP9e9dZk67kWUf3tozvxuaBLVoueLxdzJp7ETxP2jzHSJ9RKxPYrLXCLPBA21vdTUcpm6vs",
  "key21": "nMXEEj7rD4ebbFgyvQk1P8PSSnydPvuweKyiKQ8RJYeERwS1Ys8fnpjcb3qVW1QV971Rph3nM4GgN5wf1tfbdrv",
  "key22": "5V8zi8UNkg7tPMMwXSQGfVJVG79Gy8gtztr6esHjnyTvz9pHU51YUkhVbDA44VPFeJUrKpHTqMnMYWeYYofxX4Z",
  "key23": "3dXVUae2n6XVpcFu5CpkpygGAm8vkZo1G3oQN8AWJq7annpPoKhsSoRtN6Jz6DDqgkv1c4FVzCGDEmje2qc8XK5u",
  "key24": "55fAF85ChNtzHY1KgJzn9nr5u5bo6Df43y1TVJZR9TVwgZh1tdzKnT8Vfk4FJ599f3RNh8Qhr6JKcumyJvkb7Yc2",
  "key25": "2nSHjNUV83EMJ2y43npP2WnecVfnidFHxizcWNw7Asq9QoZz5Jt7h61dHtabPV6sBjBe6Y6cEFobJYN3guHTNUti",
  "key26": "2qdEL5avwufi2EaukXq5GNbx6NPbVMC3odGT5b3xcet37v46RYUhcQyQGE9VrNV5FDyHzB6w3WmZgahv6AaDDNX3",
  "key27": "2pS8AV3wFpESZvREdJinut4cLwiPRQbBZYwocJ1fJmMy2giLpzGGHz8wG2mkfQ25SwJX8Qyx3A5CocJdNmecB3At",
  "key28": "2h9RoM3u7wU2WUYfpqujqwXbz4UVeYE38w5mjz88JAEV7TcBdSVgxdQXY95NrLztiP7pPoPPEnrzGMt8bbrRHxxb",
  "key29": "5BbgevsWLszAs8qUm2uiuupGcpPuuD7vt98BJX1DEfDdHigheHnpyiXrQt1qbpUJfzyMLv6Fb1HuF7saYPZ1mQWh",
  "key30": "5Je2t2kVLZKjzGpTvL6Rk1tCCeZCByACmMgYwWM4WEtk5ET73bh9srteCWdrAWt2FyrESYx3eNYJVi2rsvChCfTw",
  "key31": "5C6WNvqikcMdAQ9DaNXEkDxT1obGqYnbXz3ZQz1STi12jEdGb3asDeZarUJw7UEuQwuL4nF9jP2Lgbj5n8g6o6MB",
  "key32": "3tLKMFjFfTYrT2b5hGw1AsnucdEAUQhnzppn4Qi8q8wHnU2V2SgXXgGCWnYo9oJq5qEEoycaCsdqHUwZbWx97Hcd",
  "key33": "4AcG1cnmy6RMSVNucWX3jDJhB2mZSnq3bqYGgDkj9qVLNTvgAXBfk3KNEFt9754yGL31D5xsbAkTFcFHZETtEyrj",
  "key34": "1jF1Qt5KenPmag13RapwjgGN3beHvqPr2gF2V1k5s3n18jyttdBFPhhnQcFAeK5YkakVtRFPKmbFQNAgWLCJdUo",
  "key35": "3M4vdyv5dShTpRgEL9w14hBddfNPUhcDrYS2CNRecoiUYpDTGBLNGnLgmnmVYs675Gdm9u2cUkKzW5DLfitzvV6Y",
  "key36": "4euVjWmNk7VPtJvJtykJ3kvdddV7gtaNFEJhk1Tpm6aagi6ntoC6dwRGmkvAS87qsGycDP7PvKzEjburA6uWRFBA",
  "key37": "422RDSSqA8Pp2C86QkRi5dizwLXxiLJGrbgSsciJMKon4aGkQH59QKsRtqJsHtcxf4vE14iK9JqM2kEuwaFjdbx1",
  "key38": "5oL8BqzQrhZ5H5nRq2sAst5q1Qd4Mg3KnnDZf5B7EvpeGbdBwrvaTWeRgdvAxh2M4iMvXa7X5xyACyViQruKXubD",
  "key39": "2PCZnWMY7YzB9u8v4YRkejqqvY1EFKJyDjNVyVyjKCCH1fFAM5SCwmmhPYjmg6QhZC82J4Cr73nWhFGEp7m399TR",
  "key40": "59usQRjko2yo3aMrLDMdaj5mPv7mYMuKLZoPBnKeW7pv9hPbUuaC78JsYcSHrF5pJ84RqBkVJHkztoU5gYjn5znr",
  "key41": "3LWSTpanTMkJAyphHTZvz2CwkTV6PVMoApFS6FrtZfhUN83WfHJQS1HvPFaZuPsWUV5WsH74Ri6Xadwo9uzCHCiQ",
  "key42": "5PEWtXRfjh4WDGk26pLTSeUsUfFQD6sbtfR9ZreAFDMWMYtcN1yjJE9ecWd9QybQF2hT9iwA1NZY83WtByNLatXN",
  "key43": "2YsP43xcCZEeAzVGhPXrzrXKsp8h7W9JK6Z3fTwZgQ8DPnTM7Zf7xWdsTksewokRPjN1XKYaJidoC3b3GczrQbfj",
  "key44": "cpLmvSj8gfgpTjPmXjoL3N6vu52M1HtWfBFxjuS9N8sKJ5o6u4AmHK5nwdBKFnF2vKA3C64a6d5v4iUfrPiY9bx"
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
