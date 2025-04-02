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
    "5XcsJCafGJkzT1YZYpbsVYpv98CCUNpiQBGnbsr2esKassvPcBXxLoipHfBow82zLWNoL3pU8LjQNCPXD7sckhVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DGxM1V8rEfKktPTaavupTv5Q38t8ytFpXYunCA4vef4rmatUjBAWgkB3it4RoAbJwmxNzw4Rei6uDesjtBYGD7",
  "key1": "4qCW9eFK8GYkWav7QZShNC1dUV5S7GBxaY9uRYoSYahmGVuttPfKRqPiND5CABUPAmyyknzgSpSLTDxBkstyozRa",
  "key2": "3s9Rx7pwnevgBpE3hAE5Q5Lu9buLDKaJ5w85towe5meJqgekpBEiwFkmeibcTAN6XQkFk81eBkPhwaJ61wmWZHzT",
  "key3": "4JoK93zsJNYDKhQv3bqDprXhNyhraHV1WJqfKa7omhMeV6WsvnTcRZicjJ7rayX6o8RBNQvA5giov566rckrwHP4",
  "key4": "45AfVNdHJPRraRhdc8brwayfYQswMUPu24P8iHLzg3Fzdm37L6gpEAcPR8JrTxeXfwkY5NeCLoe5WCgDFMBWHu5u",
  "key5": "2qWuK9JxQVeAYScmL9vj3x6A1m8x8LWvRJs5PpYiXxueF5cLgbFKLXREWSYwoTvDQb6j66yH1zqVoiMbXM6gK3En",
  "key6": "ZEEJt1a9cyDEEjb8RE6SJTu7D4XWKNu7KZLUBNi4CHCNQA4wikgJfvCywQbejCNEWHKDRpCKAaqjSeg3X5yNvj2",
  "key7": "4yHfdRC1jibyp2DuKt2F1KDW5LMZciv4zQyScKzZFb824Lo1qBzMsjoXSzvoTS5HhDcxr4bDrPqQuYh2LaVbupUr",
  "key8": "5xAZ3bcXuJx58pn8Whmh3jmJyM3CqN7CZkxCEWBs1urjFL1fGFxGEMVPjjiUTjRuES4j5ew8Kve5XLUFhGRkNjE6",
  "key9": "2HVqq8rWthWS97BqatsUaEeMJBBAETippcDVjpnQi1GmQh4WFnhnwRiPF9MKHtzUVcHR7dwAoRpBPszomNKDe1i5",
  "key10": "3bGXUPqqnBnpz4c3ygizcG3q4PZKcqx7hTfXkiJ9vsNsfPeJJZiS9reaMGJyKconzkS4diFtT8oSEpWvsbN3D6wx",
  "key11": "2jbNxDuypPdPokkUAntxVpJBYthWR7fptV9R7sxRZ91muHmeyBaZ1fbPdTicApKXrgUhokzBNdodKjmRVHdvXk7y",
  "key12": "3CWeMsVXXPY22WBFbvqZ8pbuukWdAdGmgfmaiNjmspbn19sHyMzaWUWsMGwsHxn5H2Ytz4QHqLEbFufRGxwUvmov",
  "key13": "2kSuUhgfR5DZJu9tqo3KiZ2UAFvPuXZC6LxnNSXXqJWe8ymkYSqDcrcgQa8tREkWCW3oJVxY6pzp5ok8sxsbM5Nu",
  "key14": "5phP6FrgYGXGpf7FfjVQ9G8XrQjvSC4BJHrphniytNVdi2wzvvgFFAsHWrxthycz2pnjC9gairwps2ohbLBn9tU2",
  "key15": "27MfPUG8aqAExRp43FbbqW4FRAVToTpUT8zpef48YzZrMWD7nc4iEwE35RQWHH9nosufpzHqktzVS6uhc1bZsrGN",
  "key16": "3JmPES44K8MT4jaJp9VRw3ZoVCQSbMzZZwnxfxAALFpghbHThNU4G24PoEkMqZQp558JHmZJKKHjNrxYD6mBjTEZ",
  "key17": "VTshxuAK55K64wzg7qQgpnkEsP8upWACbBLPmGvFfzDazPcCzHovf8VYpQKrYRLh7Wx97jZXaUvofGmzw1ijP7M",
  "key18": "5MFTWapbktarSYAaMryPVdgdv6UsVHCSPC3bm8vQyvuS9kF7EffQLSyN5dBCSSF2jubkwwCDdYu9QBJYd1T4UB5r",
  "key19": "2H71PTUQb3k48DbZDZgst9TyKa7RNsXLuDrMnMfBVpnQQfr8mNDcg4BWhkUDKqPbMo3UT2LQMAguAM1bR5hYRGyG",
  "key20": "FvD2iLiZQnSWH6W1dLwMxG1c4KKqscs1aqsxcR5KbS2FmL8rN7bf7nmBzzcneibw9qbyYeCPUEiFt6ueBrFZ5f5",
  "key21": "4TwFpW2BhWWmM5nn8neNBBTyRj9KMAPGmM1knTL9bjiZCw1gfEMSj2XR7i39z8qUxL3LouXvi8AxUV9n6UbmGivA",
  "key22": "4pSqBa7b8rsckZcWZyaxgEnWAT91U1nskHNdHNn1f15wJB2imzAZioHiJvAFbZbCkb5bqgSS3H2BskKGREKKMb35",
  "key23": "3FLHXWcbxCY3UhkdqQErN7MbaC3MZmHiUY4Kx1zW241fZpjmtBQ7FNLQx2U2DntrsHvZCh7D4vx2Hg1if1oh89vH",
  "key24": "41NNfnGfe3LP3DSiwnjFk3KiyQ7Wp7PKnRRRcnMZL9sgxjSXyrPrvcA6Wc1aHyN98MWPwyYWURvipCwTSJzhbWNK",
  "key25": "3PsVfnYB2zGow9H9b1n6pXVYoMh7j86e2UGBBehBV1nZ4vLeMzghxR1NH3uY51dxubWFgrPx3L757YctQA99gqh9",
  "key26": "3dHjWi3CesE8s94vpV7ms4U8xHbRGWHq7AqcEzJCBneoMD7JovnekJustHF9AhhLXjTxtdqR9GDn3BxVkfPArj9c",
  "key27": "4mFswPQutQFJ7QQouGUn9hSQ6C4kga1PSEXmbc5PpBRZRpQYkJNYRZ73bXqzAUMcf7c2xyNoP5y1PRHyDjoSG1SH",
  "key28": "3YjcgHHemA4VYMQNTqX9TksNKzBsSRP2Lb8EbSGY4kJNzhqqMy8bmBEWoEgx9up9MBmQbvHhaHMvUgQt12jXyaeu",
  "key29": "5qg68CPL2GfQumSX2qLrcqzJh6o4cs9y24hsBfpQ2NWpQZcz1aGvyafgbajJV8xoJQtwsf9fQdByRihPpABXqqXZ",
  "key30": "3d2FFbJbpJd1TSEhYrr6TLv6Z628sgbeJVGamB6qjmRMWBH1tLGkkQxR5CrKped1rEAT38av3NfUfAARiz7m7NHF",
  "key31": "3mHUFMXQVzgktLMcHA4bH85RU9vzeV2e8U57u8Tpisv4FHxG6yRiAvmqSkVGeBZG2nk2E1WnmZX64b9LjADpC8kJ"
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
