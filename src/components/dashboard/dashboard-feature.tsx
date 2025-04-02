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
    "2Wd79Y82UFDyVmqXdK8ddgUUGCsHbgbsibYf5pQpJfYNwQ3q9qmvjwdm9rgGkrAcvRvUBnqB1C1YAtN7me7nrSa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6hpwe9wK4acoecEiV4BUGPrrUS3uoBCankYkp25s1mbBfvPQigbUHfifyihDDK2CkkhtPKjkRSRSNbEi9qJf5Px",
  "key1": "kJxGYtFXJApm7Qb2J1RxHkyB147Mf925Sdh9aKgAxHE8PkmT4EmFEhyezyrRkHqB2hrBKGn2EiJqrNe1A9QSu2D",
  "key2": "2kEzQwQ73ufULiCbJ2MM5dzcTLML2umnD7bysJ66Xv62XqVGZ7Yio2w8onEpUt5QRgjt4tpazYNEGTqiyuubLT6q",
  "key3": "2sQX4qoXhEGyTfdSGxzuJwNNgmSTSyAXSUbPwUTnKJZouoWm7NoCUMxGuhvaivgJoQ94fs9Wv3ckFReed4wfG239",
  "key4": "4pcjpJsWYRuYo4Bwf8jcYhxED1FveRBZ1tHqLLpRFo9VFnb49hMBSL7kEDoV7h87xftbGvhWiavkMgSDMgYLVs2q",
  "key5": "32kpfyLhM1zpT2utJFe5AFn15NpzurCfJ4zPWHgwdj9vuTq9AE96QNSLW5V8WeNLbG69CLhffykLfUKnVoE65mt6",
  "key6": "SUTVasTsfAYhXFJh8ZNf2BWmzdvPKPsYgfiDQSk8StvfRhBTvYWt8gzRX8TYkBkZH6D17UhqVnxzmQeSxQHExh9",
  "key7": "zKiPP4mta6vX49jyPB39cPBfRLwKufdu9TmZvz19cXgCtJVXBZVEBhobgBQbFc1udcRy2nR28bvniVLUPUcFy6N",
  "key8": "4GRwYVwY8jVQWYyGT6YSE1fc3kknQopFLKW7nEHszggYq96z9AaASoWH4eszwmWwpRnE7dHHxH7jEDsYdDz784PR",
  "key9": "5XVr2DCRZs425NJFPQ9515Ts5NjwZZCiKj8cCNjMxZ8Nk4zb53JYsDMh7gJMNdqncxZgx78iHHxGe62RneEDeuXu",
  "key10": "5f5GSfEAy6zabJj2GLZuEFqv9CVkNr2JxRfqapzw2mBoa3E69pnhiJKdekh8N8SYP1Sh8LF1QHBdAJAa1pQCMmcz",
  "key11": "22iR7JgfuYq4gNFB3QqztJNsU78oqxvgWXyuepqfKrCfFKBKbJodmBq7Zc42tutYvu6HD93GxWhGu4LTjkcZb85J",
  "key12": "49f2vQvEgYoZewZygxadHquXqYxMYTJ3E12vj5s79Vc8Yz7e7RjdiuHsQM8SVQ1ErQvUutJXyxfiJX73rW1RBH66",
  "key13": "5mFEANk5QVQ9hMgFCGAJCaKvuEdban3JtE51VSeZVnPvPzZUy24hvcGd9761X5eEVoUHVkD3p5nQQBrdi4zx9o9y",
  "key14": "5UYJ4ASdRYvvPpUmEKJEjT9bYv4RBMD5gpYwPfrsm3K3JsLjBUKqu8sfTLiwdcM4DLSPAhz29eC596EaFW1B6R3V",
  "key15": "3fCduKCtp8ULmdXpGCWgdTNGNZYU7HPSiJiVJJe9Y6H7bDTtiBHYNS2KBvvKtMMXZLbFhaZytwuYUhMSUgUroDPe",
  "key16": "2z3S9QK1V5U8K1AobTiSfZYezqwCoXt4XHb5Xthg5cmjP2oDiU6hmvXGZu35AmtVhyXCAkFeVVwxdJy4TxdZb7oH",
  "key17": "5p8GrQXivQSaR4JtokCpyp74VpNB1XUb2MNguZ42kM9Pmow7VcWUPGiaDELcemaB54fDtztfgdMUVCx5EHyuSzHh",
  "key18": "474gGeSxxJQii54AbaSKJzgAVgcFRBtkHx68jybi2bPcioCYUTEtJEaUnEg4N5khSSQpKK8R2pGQxx3KYuXn4BUa",
  "key19": "5LVeZp3HauYEPKAAJ5RDFcYy5So1A4sh7aj3g1vrqkEne3YEwPceYzwPwj7FB4cVguxqGUtgQ79qPtxqxnFAHQ3m",
  "key20": "5UhxnYgQg7v1oWKReKUynaKGyicFsHtkdBeAGmckzT5vLCRPR828ZPmYpgVoHonUU6EnsqJHFbq1vvHvMPa43RJX",
  "key21": "32EgsDwR7J8MATMt2PSVCT6e2hMkMamJULEZ2nDUGSpExRGq3hP98zoTMe89GJguXGDeFQshBzXTHMTW8YoekQYN",
  "key22": "296gegKQGtfs3UC5UzQ7g8o5NhDDrJXxnL2mnZSzvmmeRKr8oKA6NkKbehk3DsaRQWXv9nFv53nH2Cjgu9HVvCVr",
  "key23": "u7GNpkk1DBmbetck4ahyde66ELFjwmmVNkPWvFgjtCE26A1LfkyLv2u7pPp11U8uQRmbAL66PgSinJp4oUsGiMa",
  "key24": "46RVzhSKL1Cua55BdUtCdmHptWTAmJbyxdnaSbp5agPLfDS8TgPf2ootnJmVU4oVdhH7bjhufrMXKdSGzhNDBrZ3",
  "key25": "3VXbPNKTYvRwpghFNMD8QR7ddSXnCFcJgTsRUEWQRv5qPu5hEozRiMNshTrDMCCUAveeCveBTDd5qKCET645w4vF",
  "key26": "HFTsfWAEkUt9LJgckgBbTWTjwc6jDGqFfbnh31xWoLDmoToxZrQYFG6QPwWuRh3CTMsPbsA31aCQh3DnCF8PnLq",
  "key27": "gKUui8u6Vufp9E4RPnXxJWV9qcj8k4jTxTLR6LvQMucr2BYuuy5iZBtN24oVqBnoKC288vvk45qLTqfThcALTkx",
  "key28": "jhbcdnZHcW3ft76TR88kQQGRxPSMnefe7Qc1tEwybtJFRTSDuB9RPD5B1VRwcv6SxWc9uB7amT7545iAEMcMvYZ",
  "key29": "cRVD5msbjumpnTcUf2ZLGPvQLWK8GepBA9qH9C4ZivRRFcW2a8462dTj2Va5jhmdWkDoyeV9BUTAFcsKgrRrayP",
  "key30": "4mfSYP7MAwrwLxs6E6ns3NYZ7nQcNVfA4DAsDuzK6LQipjjEXkarEYSjn7TZh6skJDKjDPjym2biYftGiM3cgLgY",
  "key31": "5CDdanr6BmueqZzsGoo1bpaNqo7FdHBbJGt72bAzztZDuUCAb6RXZMgft5Japu1T8Dp7vHPNh4kTACHomaJExWFA",
  "key32": "4RTUXsK3kF1SQCLTwy9ZTbvimNtiszJVfaVFeTtYyjyXe99vh74UkRPzaGtJYJa59Wtp3Pfm7mDphdGgBpWcp7tZ",
  "key33": "2uxT7kjcSGPxYNXGgKr1G12NrnRFvTkWWNH1uL59hyzfGRjWyeHGWYeatLB55k2o8yK7ygaCBbGqNC321pxAu6pq",
  "key34": "34yAAL5CamB44C99uugnj6NMeTghHrJeh7KiGQuiv7aWwZacuMgec3MKPx98NUbrXZzxnkBCN3cUEbn3VUSkvTpd",
  "key35": "2rg4waqHH5nc7Bdf2mSioRi1RtLZpPrUSwSqMJHGQocaMhXfS2Cb66VsHWfdYn72KCAiaztm5FEFLnVB4FexoptH",
  "key36": "56o3sB3co9s9bwPAPBdBqfURVc9TACc8xqq2PLNn6rmyc5aHprGU8zHd8B6kny9BA6j2VfXA9AeG6p2wUqCf4YdD",
  "key37": "2FLo2C279b85BJX56suiw59XD7osBSE2PF3h5ndueVCxDdh1i9a4YDK2BbJkywbqdTqq5GV4DSmSWKKc5eoRd4ad"
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
