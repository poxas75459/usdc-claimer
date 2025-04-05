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
    "5a55cHumoLoqiZzqL7FUneWL5pWwCCvbTeReM6k76JCo5HEgpPtciY2dpJrvJoMtxDHK9zfPX1D62CskSw4xNMgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsRTxC5JT5ZuqLiwDrmFLw4XLuGzAorFNqdVJY9ZFKxfnRwXFsgbatpLPq2NUcG7t93r11WUmPMBfqov8JA1oFe",
  "key1": "3wvQtimtnkk5a53VmXdNN1GwD4qjtukwsbqvzE9T5hzr1RM93qhxgWYuhg6p9ctQs2NEGQc8WH9nFwBSVPNgE9rK",
  "key2": "4XnBfs1CthZ3J2e6TgAi7dcYgYXaNyryQaVa3ndGpuQqvcMQATcVfxBrhFJJsd5ZFffGN69DHmhEqKtXZdW3h1QJ",
  "key3": "3H7CAg57E1Kzg8HyTb2eV1tgiqg3u19WTSWskZhQWp2VbW68SWLb3aryNN2XPmwGiETbLUG19BmE4jdbXPBB1fRY",
  "key4": "4nihdFVzDV1Y8RTAFX6UimYeDzwsMeKskw61u8eyRD3FceSqvF8jjQ9Qhcmgzx4RfPoufkBPkwfZNaY8436R8Pdj",
  "key5": "4h7TyEDxRaRmDby3U4zz8L3ZKcb7NDmbLQ5f9RwTzRTWAsEuYCALqKhnioMzqp6p2CxbbLkwB4ZHknPYwo1rC3JJ",
  "key6": "4fecSrSDViau8ZKpA5EUZxKXc7b3oGAy4hquzbm4MQ8MoTyy6gY9b2NYKg7Qt48ZmiLQWcRynu2Y5yupGHm7cGvp",
  "key7": "5E479TFYsbCya7iijBB4yKMDU9r7JpAHKfmd2NaMzGfCdN22taX1oYUWG2q1Uv4iFC3NQ8gZYmC6i4FHX6AaLwGo",
  "key8": "4ifta6E12i8gARusAWnkqWFbSzrgVdbmpcdrhKoAzJqqWHDYsSG54gGKtU5X6nwYDstUKfc8DJ1jK5C7HRFv9wvS",
  "key9": "3guSRoeh5QLvzXMcU3DdRmrik5izGcRPJArq2LWbTXHYDJ3j7JkT2AymTY7jTXbGDJRV1Jhz5HqKE8PnnSbyNaZN",
  "key10": "5kMfvXfWbPNgFWsmbRrtTYFGM7M31h9MszTDtD4T9xUFpzuSXJAuKCwh3HmcFiFpzbLtcFUbt5j3JHfTgp5Rh1uu",
  "key11": "X247DDPpfHJhmxC57RDKMDPc4V1h9xyds1weKWDLYwDTnpLqw6x7JXTn1ffs6eoDQwsDPjjbCWMoVc3pFm6jNRw",
  "key12": "2Qfx2sqQzejaJxvKLe4hTgM3eoSC5uCLTsvBGmoqvug28MVCCHUALXFAr5fpSfEQ9DyEpSsw3NzB56b3k9mit6dd",
  "key13": "5EWWdJMq75wJGmHdzzKjifSrosdE6AAnMeGuCXbGSkJgFRZVthyHhBxhErRm2xezSPxvsyGdMJgb5dfAN2RpxceH",
  "key14": "21jUeGiUNSkRBqSFFBRBWPonpvMVypuHUVKpZY1TdHk4uCNFxEiysaDhQFypTt4zQXiGMxDKF1MTcjMBHefPhyrF",
  "key15": "ejfPGfh7mWrQ8GsYTKcqAuzRuf9SrVmg13LsensqnY1BNst1tPazms15WkBhmGEYNuBRjYSccniee2MwtqTGZk9",
  "key16": "2MtCqiNzpvHCTvPJzvFjbrU8Xyf3nr7KNbUM3KYnXCDPNHjPFrSKoTKtQ2LcZ8f4xanFjSntjFvyZQff6aFywJHu",
  "key17": "5ugUMRaXGKwjbEZgY231BUpTSs5RimRZk7k5Ze9cPdh8GDLD36VTW7oyZZCDtqMrARv5xnPb2SWUq8PhshrDAjwY",
  "key18": "5oU9uVHTWSYNyoxjeUZfi9KoYeKv2XwocGUZc7nZFA7kLXpRtcxUFGBSiw6uWS7rWzuzuM3MEdijPw6ietDhRwaZ",
  "key19": "5Xwi48HKHTT4ARZ4dgPaEA3ony7gF7hwEL87TkeNBDp56QYCpmgmBCMEAe4gPRMJFoomJCyKRSogieuzKUfNGCUN",
  "key20": "3HPeZGoVbgoMqr82JiuzQarSDhnH3PoVgGk2YcC8kLVhxapqZQGkZ2xnW2jpviGFZMmeM1pPTN4rs1ZPyG9FBAzo",
  "key21": "2Zuo7ssBsuNWcBuwyK9E2nVELmbJR1GoM91CkCVEGsWK5G9djud2RQC8SSZ5G46Z76w6NSMWLCUvoA4Pme4dEmY7",
  "key22": "iBMc9SHi2C5oJ6VYCcDUjCHd6LbZ8vDXiSYr7wddinoy4E7suGR9U166fzVvY9mZcqL1skRmRiwGoPvDibcVvjo",
  "key23": "3M2KzuZ5pYUD33Q2CUKXk1uHLZ4WmiL5bjsEaZVwy1d6LwiqJXPLAN7Ub6XHMJ4EGboPah1MfHUgVebJ6Ugs8u5J",
  "key24": "2qjM1CwGsm42mSppCZEKHJFJC8ghjqZPFpPna8ULC5oSetwqSGs7kgxpha1MeWRkTjruWQsskLB24rsXqjLGEBgR",
  "key25": "2zBJknd5k6cM9sTdVny8vXZStDnisJUPXqEBhGWUKeQNpMEqQj8DT7Kdtwws7axBpyPL7k5GABikVkGooAdbC6wg",
  "key26": "4tocyrxVHkg17tpt5wnjmCnywgFVwbvf5MsJWgJzrfqQBn5qH7d7wfgGC1eJFRJ7fk5YmT8suD9Px685APCmxmCW",
  "key27": "41dir7M22cKhxYSa7DLrwgvJT94g6xTGskDMqM6ULmqR2iMHwtJG7pJDfvB9r6dvQAbMdX1puNvRWs7uwuMqQyz5",
  "key28": "JNFcsD3KFwqYyp56Y5kKhCYJKRDDbhyH2fRTVLKQ6RCNxoJiuupvbuydUFAwy3RSWF5kmKk9sa8ZVW9aFVfP1hF",
  "key29": "3YFvMLz5SYgFLQTL8M5sHTaA9aRuekHH7GCev9cD4CX3qQiYEMeWgLfMNUH7X19WsbppTqxQwNxfyG6QbzphSabp",
  "key30": "42AWPtjsDDXnpkqoQghc4R7sq6wcxCKe5prJ3pe4zAB995fw9ieg8XF3E6f3VD4ibqhyF57rCXUtM3vsZQXHmM7k",
  "key31": "3kSWV2mtnhedFCdzbfdRdGMjavQkt9v67vKtdgpaJAMWmySGknBnNMG7bNgKjhpAnLTN3eb2c9gzxqTG4LkMLRGt",
  "key32": "25s2Seqr7PDFS8HEhaXj9HTznRXGnD6X25LhafFzKX6CadwWHod8vrduDAJBkrXNusxxYnXdxt98Yt33MsZy7kPn",
  "key33": "4fKXttYMQaH67m6DhxdFsTy5x2u2byDjnGWWFmMDwLHBLHdKuVpwKTfbFRfFNgFkBcRULTo9YP9r9grj2Znkg3QB",
  "key34": "sTimjLompSphk9RDE77HCMRZC4vvJdVXd2yj7JbYgPbGBos5sRvN72cLFtE8iPsPkqzGVbkJsYCmAYbGYLPFhTi",
  "key35": "PdTP8CszhT2KuV9Tcj8ssZJNAmjztuZsvYeeq25P8acmZFYmMR9kUPcxNxmpcqUUyryXsiKtjY5n5vY7X4bxRSz"
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
