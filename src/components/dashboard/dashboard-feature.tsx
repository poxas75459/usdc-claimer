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
    "4EHtk7yqaZGeSExzeBLVNRqMUA7VrXikbSdAzEnM5QL4XLwxQBejzmDhwVLKmKKwSvfvu5vfKCXB4DcnTBWjQwkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPi2xrNBr2EpQE1pojzaSniBuXX8stM3d2nDcU7urtPh61wpkYTqx9okx4gtxgX9Zf4Wk6yqQPDME7SKdNUEorK",
  "key1": "3kkPRxkwZhtSE3gYEbYJ7QE3nC5Ez3Y586Ct9L6Y6RLLCcesCxNEzjXUJf3JZ8tBqppujWgE4u4yruSKeoHkLHkb",
  "key2": "2DDqzmPsR2fcyGF16j1v21SD5M8Nq58dGcV2x4jo2hiRFoVFw7L1LzE93ooRJ7DT14pRi4wgXs5b47igsFVVEYMz",
  "key3": "4iVcRhJejWYx6cZWH4NtCKu4gzvWkawBu9Ybp2oCsbAWizGC6UjP6JF6KBJKS579n2HdXy2u5FnrW96YGYhxHp9a",
  "key4": "3f4376goj57W3WBhsd4zShak8McixKfFKfTPwYHWwCtYUAzMHJfvY1HkFrTeKuy9ryRnFTRDoJ7E7oWEi7MyeSfm",
  "key5": "2DtWzF9ApwtKzb3KxBEyhEvN2LowFPivpyxi2tAphmLRNuoeBvJg9GcHQXEPtjZSXDZSfxY4BqFSTbDuUrJS5Xkf",
  "key6": "4ZLpWps6cmNJdk6Df2t3rUSWc13gFv6ZV7sdctghuvnqNmTUMSpnHu4UzGpJYhjPQmKNpjowQAZH1RJisqtQy6Nb",
  "key7": "CyLYsi5ppPagonbadhjjC8L76Z4bLHoS2EXiNjQez1oMzoYSDF6NC9YbMBaGUoQwFurPuMPcmufxvJVQUsjPN5H",
  "key8": "4r7xK6Fn9dq75bXkKPUGMBpsoXKTjhUxEvWBHs5CV2YS2HkFs4oZjKgR8HTjGjPw1woXDvnTcDzFJHR6ffjsLe3N",
  "key9": "2xrQT8nseRf7PDfHEnWLdqkuY5RPvqUE2NbbPiqcSvHDcZULstuDwThBkLZsFp3yCfCGNYzPFZ2BYYWQJiv3x16i",
  "key10": "3uatPbA4qjv9it6WV4q4niXnqmNgatZzFtQXfrpbmrkRuNaQv9s1Cc3fk2mrtUcE7Fzwd2aiEvQ6camhcw6TG55W",
  "key11": "3jcc5hfzCVtaAgLoTzh3cdQE3qDiE3Zbsyg5ny9C6Bp4xgAdkdUjscsCfaDLxUsJ1fTug6xgLMLVmAbK5t7YzsaY",
  "key12": "3J51DingNF3GF1shf9TxmoyFNPKc162zoCkP2FQZZf1fQ1caLF4Rep6ZZ3qwjRgoKrjpB1cvZQ1FU5it2JeF3bNS",
  "key13": "2JnxKKtc8tzwT1LUoGqSCfgWBkZkrG2nKNTwhJvcWtyA43oWGTRN2RCTu7fNJqcS167a6HnDieTijDigWPsDDCYE",
  "key14": "hXHfUSe4r2EyZSw9mPD7VM2BhxKMnPdb1GoJvWu32U46xD42tjN35y3gpUTqPWkczoL1ovTP5Zg4UrvxnpzEVV2",
  "key15": "5XEfkFo6hDwMNqZiH39sscbChtwSXAKSQJnE5VStPSPvCBy2YqytUS9fQNGEbCuqus5tY1C8schF5g4iAUjbutSe",
  "key16": "vnFX126yoBEizWYZ86Z7BPrn89kVAX5ZjwDWrhQjVJExWDar8H3DSVeVjn5L8F1ein4CYdK6rjL7kN6yTica8dv",
  "key17": "4iNnRKQzqfMw2V1W6Lq77krnncnXFAT6igUnxZGAaKNfyfFbaU5HR3UmoVZcHZv3sVoSPzyUsvdtqHmQAFiJCM4e",
  "key18": "2LJQND6Gxtr75bn7cogtQEqFWVdeWPrJQytfY6bVRFG55nTu3iQ6ii9dRsVfJqvURow246M7GsXzr9J4UEayMu3m",
  "key19": "4hsLQ3BmQKtVC5Gu3ZtJUEjXNgthPdhN7RD8mEe9WF5hStwRDXBwunK9Cs7strDmMUf1ScJbibGUcBa8tszcNWNU",
  "key20": "xFbPsvD7kTNAkhrqXvCCSKoaCwomTaY5z91Z4bP2kYDJAyEvTtKRxVYYTUWDNWHSyqxyLy7NpPJvSPvd38aYHzE",
  "key21": "Z3sRUKJjjVFLB2jN6N5Au8sajF8pQXMNLY8EN5KbJgbt1sgFELkZEWxq6s7YP5UUQoECcaBRuwL75hZzFX7Vfst",
  "key22": "3w6qF9CNqV5YQcfuGca99QE3pUhMgHBwfbJWdkntbqytZrGqhxJZiA7Z9wKF2MUB747ydWW6uWeqbmcRZNZzTQmr",
  "key23": "2DSCBTU6e8bKGNSmiznnokCDaEWPJuSu8mmeYiGqfBmf6gpv5kUrzEZUkGnUWadSC8vBBQZD5Te8y43zjhSnU9i7",
  "key24": "5CxJgGJJ8HhZcoyzgb3zcxC23vjH98u85WjdfVSWmuRZZEs7rsko4S9KF8LpX1ZFP37dg6yGRNYLv6ccuKUwrQQF",
  "key25": "5nsFkkv4ayyQZQNHj2jTvQQgpBHHcMgo5j1QDRp7by6VvsA6yBqv6661wqnRiT8z8VDfbRrkWkXQSA1HrtLrwp4D",
  "key26": "2B9TPQvE2DKrgvuVDu9bnHaJqptdGLwrWWuJ1qYb6DQNUcm8cUYRcavJRr1DtkWTNEL4PADjnP7R6YGgfynoRAMb",
  "key27": "37sssUgBsyzTwCPutK86mMDxZU7a6RykmVqAB61gnNkZSjCjRrR1sGKSExFwebAYKmQ3XDcZQVpBEpJUtXbmZ24F",
  "key28": "3wrzkXdtcissuhchjerTdfcjNPFUttn9Cm9MPsPuxjm1wVKztbnjy7cZvo4nQvbp7v4F6bUeE984CceAgGT2fGKZ",
  "key29": "5TyitXgcsK7RfEReUtbn5FFVBUQd1V5BXpN6EJgPHEasgj8Eda5uk596U4jHspEiM1GUtdbM9w728yFzLX7oMvTq",
  "key30": "4eBoWeXYV3McvXZKCW4Rg8yFiS4nM8fnpJUUc4fjY8se9TgdTzXN5NiEow4qtF9QNwdHN1fPz1ZxyuPCTkogk2WZ",
  "key31": "2A16NeQAY5kGBrgfKPsdbFutt8yb2bDGaAWVz8ZimgJ843MrndP7NEGSiLoCqnsuxQ8rqaSecCaSqFbdNxzExw8e",
  "key32": "3MmngeCjxkDYsvpn9fiJaCwWeocsFR98NJso2J9BboT2PJcAYjH1ZMBVwNeGiYJu2R1zfMsj91HPSfmQRUtu3njt",
  "key33": "2ZS5vroW7KVxjUCCosvq3R1P237HoFoyfNpYQFJJHAPADnQLxxdUth5fJHnPy5DiGFZrgZQhWNv9baFsGVgvuS79",
  "key34": "4ZXxjqmktGM8hPZjKZzZyFBXpFQev14rRiUdiHpoddvH7FTmEjwjMbyixGg1pPzbq8QdMGx5hXf3xSKWs18Bhpq5",
  "key35": "3u49v7b5gceuUT9D6A4RKbJZmdmnnhR8MsVFv29dzcdqH6yBCoSuM2pg6tGuK4mE573CyGZEJ4VD8JL2rg8BSKf2",
  "key36": "4FTEdNV3cDzgomAu4dcz2BxnBFXyZ25XLEzPpAhVGoJZzifFj5YaAbhd8GrEt4B6fTYSA6Rm7hzcaXKW4pnMZmXJ",
  "key37": "291mN5Zzw2mpamejaPgsrFB5iPUdPrtZAPovrWgnWoiHNUx8nM2gN4hx6QkcwodLcfNZR5D2XqcvmdLuWttu2CiL",
  "key38": "3iKdLk8eADSVWJBUG2xi5FVpEq7Vi5gwB84fpHaiLPxtGAY348xL16QomSn7kdovHJ3gYwQ4pGAU9gYmXwRSU4NJ",
  "key39": "3yPA4hPP2XY2pvQe9x1qBemZ63bsedq4CG4ZK7stB5VC5ie8fDYftxHrtUFKNSMH1s3m8RQP2SWsSnPLTJptUeWy",
  "key40": "34NFU9fqWQU2qnVwgqPbsrj3hNgBXxqiNexWSkZ2G5gNVWgZzw89d2HaUwa4rdHAwWfzBKwuDUGt99NBb1JVULPw",
  "key41": "331SQfQP71U5skNtnTg2Gw9Bh1FcxcBX39iEjSGFihJEbiAENyjGVb74Gp1VnksaRM3oPYHrTyApFwNKzPNtDzXU",
  "key42": "4DB6g26HkJFK2vwKFyGwXpqrg48XJp2E95cvr3vkF3egSy89vQpC71xLF2Cy8cWtKnqzQRuuo6MG1iaWw2R2Sy7",
  "key43": "4BtJdMo5W9gXaaesESbStSihQcJGwTgW9ooXzEgWL7osN717zbbk1BLk31UJf6DAfxjpi2fVscPr9qaagkYeNpAt",
  "key44": "5A8wWTFKuXUcLM8XcJHTmA4Xg7NGNJiofZwDGWkxFR6sdTMePGx7qhjPGW47NbosCcVifW4YdoyscqQcXud3MEAY"
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
