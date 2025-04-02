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
    "3qLmW2GXVqNrK3tEywuX3Ngdzo3cjBYPzHTEytTDBJGWS26CZK9zMaAMDUSSzTrQTa3drNcg4eCS1BMBCSWZq4rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aesL2quuv632iHFkZuiZZWbvkoFH9dzvWFqfu8171ci5kTkWaoQTPVKqfjNqZZ9NKcbTDfcEEeZVRSHvUHxZK4r",
  "key1": "3yxGNbJaesDDrTfLQBBk8dech8W9ok4nL1Dizq2bxrLAxKRkeG74TRTQ4DsfHsB9Ln15r7P6WvebgusW9ayJCeFK",
  "key2": "55FQvLsC2jHUfdyogrQFWRsjWe5NdjrBNwYYBMJKaHXGADNLvHbnLidc3brUXzGGFqxMaZ5xKVWPUoQwRdYfWcun",
  "key3": "21UxLGPB1YA287BjqFYvxwtgW4s9cSyBgvsAcpbbVLxZGAuiqyMbJWT7V1FoyTcsbjXjM3SJ8YaV7ccULrGJ1Sao",
  "key4": "3kWHVihcADYtHss6N1HH2bMx3ZgDqpAdANK4RNtFGebgTJdomQ4UxNenoNKsByCZdohR47Z3WQvhHoMthLSe7YqB",
  "key5": "3uNpsBYPrTngYXSs2p7AEj1caVNy3EbCWnTzVZLs88hHiiztjyL2ozq23tZy7EaSWtv1ndsn6anuK2Cjpv8jMQQG",
  "key6": "3Q6M9sFfb2hHM7Mi7yiyT4GYKigjEo7EA3UtWisTPMTNUhEHAeW8EzURLSNXkbp6cfyVik9Ne6BoFN5FSxazoqSM",
  "key7": "5enqWTaH2W9ggCPmVRjmhbiwcp7mdLKjPBua7ZxVgT6h27CZUz9V6bpJPjwL4oGmYS1CRPSwhRAWQb78eHxdmA8G",
  "key8": "2WyNLs41ukLovHpCGHrDzJ2G69MtN7uzezwQNyqthngPKGef3rAQuYhFPovBGys3itpeLeCvQenSYzrGd2wtQobq",
  "key9": "5M2fsmaedUPJQ8h9t8Hxd13rQrXWzG4ExwEk2qDTViNp5ig9c454oRW5XKYxWXwhAUhFZ6EwtDYfNexHNrCNsh5F",
  "key10": "abRSK7rK8dJXYh5m4groUoqv2f3vHBXToP8y4MVLCRtQq3sW2MuWokxzJU31ZoJpkTejMV47dW7f4nkykBjoQVa",
  "key11": "3Ju9jopM3wUeGxNVDYYE6hFGqoomBc65zmNeTHVY72T7RguDErCag386FdTKi8SKkvX6ynEH186KsQC28snNUikU",
  "key12": "2CatvhKjQ5WDsP9qHwRVufvMx8PR4kwFmAcETnmKH16QpBeS8dxTVGKi4SgnAiPcTy1nUBKkjrGM5X2azwGd2kmA",
  "key13": "5mZeRPor26YM3428LtBpiAkkA2QZJhUvCipL6JHvG1GoM9XkiJ6hAA55bo9WTGYQmjzKxB5v2THH9PYwfvtKMELp",
  "key14": "5aToNLNEcQAERmXUu6Sq3RS2kyYnRzdEuzNn7nMeZWVfpwEDUaqWhvj2fyZrpXFDoFMKG8xtdtLmWFr7kShtQZot",
  "key15": "3kMJBwpwv5yxBETufLKTpeGsMVPXBiGu8ocuMsq31HcrvtLRSngr8JDGTBevfN7PAEdq2dDBVLh22aeu51JHAXjd",
  "key16": "2hK4FLszzzbBsBvAQKT24MWoZD2iGzrkA8QR7xwaJ6AJs22qHirQCzFigBLPZw37rFtAwxB6asaTSGSezxZxXSrh",
  "key17": "2gczvPrx3LuYmqiMbSr9CULdYqVzpuzor5LtyvBhJkDYBwUqYmfW6PuXwTwtGdtYyx21QuHXGDLhdGMGY5zajCg2",
  "key18": "126zxEr9nRavwkawkQ5CNojTzaM39puhmUmxAWtWqyikhYGzv35tbKKG1Db7YkwPaWtwFnDsYkGWK29UuBTRqabv",
  "key19": "2Uzpxprcj9uRTMMYg69GXp8gJ1wyFCxTfZv9G8kxVpcufFZUSxVrYP7Yc5WiizD8DAXKqsVPsuT11V7AnhtiwCNn",
  "key20": "4yheebv5FYziAGHRwxy6LWygsA4AuTFg1FTDXiSAqMESn5WS9g3nRE2TiXpZieAWRE2gj6dLGHxdgbp4UxXpESyG",
  "key21": "3CvKRa98rmSMKQEgh7dindE8KPGKopcbxAR8FwKs2K9cFT1CnAjhWX8Rd3YyJhbwfAudMevVbfHrApzp2xcwvZdP",
  "key22": "5hebj5kQsbKTgEkawDcNGr7uCxAGaXZmJZszr7VFJvAc4PVfH8WxaZU9S86w4rHU1FPQs31HpAuodFr7UUzR9TR5",
  "key23": "5Da1LQwKxVyMxsVDi7S9NtzCJ2rycE1cDXNogUFsPmzn8DYA1kANXWw5fiKfmU8JQqh3ig2uiKrnJXzocDi5nizK",
  "key24": "5GRMbY4vQny1ZzpnAMVhe3Mrdgy63iNoENBx2aNfcsDHos7PPxKN3Rzi97Qy1BJsHdBD4Musk3TJFS19wG8sYyg",
  "key25": "3fmKrC34AoU7p6xFxndKoyetnWALCxPtF7HPVJ9vUS6sTrETRH75YMpG4yofCFVMN3aD3N2qHg8U8jPhjSj62nPC"
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
