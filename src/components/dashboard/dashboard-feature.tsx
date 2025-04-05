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
    "nk5yZHSBvhu2PMPnN9fK1hDVPRMqTX2H1muFXeGf34sbVp3PBWPhN8xwt8kR1Qw35h2Hps2DYwkuwrWPDmADSDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k3Kv77Uf3Noz5zcUTXKouwPRXVQJjUWzhKPLCnFAVvW6r636yxrHzZfYjHr9NHZap1XKG1jtUF2aAWe31aQjyt6",
  "key1": "MzeJrcMvmMa5yoWHXRd51yiiAvdkPF4GNhXi1KvP8PajZywViA24c4mJoeusohJM8YjH8UXHzEHUEdum6Wnjj6q",
  "key2": "4S2ee6P64kgPDtx9YeH1P1rYB1EVursj7s2rmvfWug5jGkxAgpdfiMdTbxXW9BxdPix3w6orCVkhTNWAfkwn67Ek",
  "key3": "5rJSkG6vbuKr3APpF9zr5sN4UgqgXWrXk6kcFhDGdfRHrhsMeJaaNoDSgqfaU9wdRtPpmTt3EDZFyKJfVw69H9WM",
  "key4": "5p3hHjWNDYLXZsPg1rw9LTkE1SvRKd68fjDcb1VKSVNiNo7sjkCMLWwMWLFzEpDZWrhkDbxeYjpWzYfGpt2VmCE2",
  "key5": "2DJwSPfxPRznhab7F1E5T4DkB2BAoVpQcnLr2GJkV4r2LiLLCgLCuvY8cqz4UTq4FqVWgzSPC2vfWpRMxfEZZFYX",
  "key6": "3qXwm5FPQg51SxxoBd4pBq8ZrDpKpVU1DcBTuvpPQ2KKfL57BfbW4uTc2ubCnehYa3hE9dFCr3cLSFW9E2akZ7mT",
  "key7": "2BZZtWxAsVvmY4CWxkGsQAb7uKiJfBYNy55R8XZpCnvaFVAbRry9nxo4DXruUrLwCYV6CScKWqodshHNaeBLxcFB",
  "key8": "oaeVB49c63yBVeKxd8yUEtHT81i4jwMiHNJfTfMxFXhmoR2pgoqdrw97HW74pdVzMfc3o63xbxxCGvoq6n4LmdV",
  "key9": "AUw5EUfiXiWrEC7g9NwNHq7BxhgkgySQZYp8BkmYANyXMzqF15HmK63jkfVhwJkv5kt8w4oCSDsy2RUksRqM11N",
  "key10": "5ftUpZZjvze2PTCDe4sPChBzocgrVXM254FH5cnePGfQkWcxcU44gNxuuNHufAtb9ktGHXKr5GeC1ETN4nUeE1MC",
  "key11": "3LxTVVuskftr4G1DgSLeXBie8sSeiZEKdXu7uWCjTqk4TZ2uEZBDC92VQNsUspqJEVpxstj6wGdV3S1YRFAakbeY",
  "key12": "2wPT2npF2FxKhV7JprfHkMd5tBvYrgvuZoNeRx6GLZPu9ZUMisigLCvtpYiXp4TQ9EMjpF6hW9PLErpHxDsrKCUD",
  "key13": "4MhxCy7gG5kYGhoHiKDvbz84Dxq1ft8q2GPdKe1xPWmwXqnZvFpn4AJUYjn1dqmFKFy9iSLdtZ5sP1VsZKigkQXe",
  "key14": "2nBVZWXRLLMMoJ4yzTToNLiuubxe5EZvjeEZp3rZLF8Khjk1NK3RFLnx9TfY68N4e1kMmadyDAQXrd1rqxCfycTg",
  "key15": "66sXj1b1HSeaJP4sGS7gRH38TxdSGu264zGM4wk1Lzt2anu9V9rCtfLX1mD22tCn5D1G73vq9apv7oGgPeHhMQRc",
  "key16": "2g3bZfcfB7f7TffSiJjZBHnyiGnBpmKmcbyYGAoQNLJqFB2kirLvF6cgJmAsMmDQptqdKPrNsdjGAVKi2amD4Jve",
  "key17": "2tKMEhDMMcf5ysQv5YN6egP48QKthRku462ztBPWDun7v5Sc6q7hwyoxu2xJwLgarTm9KvYi2uebvaTBVQLjhZHZ",
  "key18": "edHhaQ7ooZiPGXkjuPiiNRirK5BQwGoSNRyMwaqyJYsGGww8kVodfDThLnzcYF2CWgHjMeSv8FNiLEzS9Y4jR4n",
  "key19": "3U4wm5L4sf9JEjPcd8uXLAxjb2aBFdXEY1XyfxVNrtfub6jsBg3CJTrJ41wR4ShwXALF6E5wGYyFf55AtTuqvoRX",
  "key20": "3qszJiPhgYoctdyMCqtsXgtWLvYemmpKRKRzsr3xEHL9A4bsfDPQBoezsmssQSAVDbLEf7jvyhpVfX2qcnvTaSLY",
  "key21": "38op74GfW3i2WPNvFVQJaweY1R1wEScr8iXgNX5jCqiKKYXiK9yuGYsNBdCJoHmmxYXtHUbMj8Uahm3nGTSZtBca",
  "key22": "2BDgVtBz5YcjcNA1TdyXLrN5x6qaWXoTWA31gdozoUcv5Rdn3qvfuen5QXQnbmmAXSBYrD5ja3tAwWyeHdPqfAPF",
  "key23": "3uY8WS1Sy7RpHWtWUedJXYxgJ2WhMwMtRB39vhNfCymUD7ANEEF4zn3huTAKJnrzH1iNSiAqfPTdJ5tirjXPKMbd",
  "key24": "2vwna6baX4Pky7rvuAEz26y15LJn4zuHVWXP3Ba2Nu5pSwBMUpKGCpU4B3LcPLwC24rj946xPPeefyzQFj8hRYiQ",
  "key25": "5JQHJueRN939UdKuo1bCaASFh5z5LFyRRZ2ZyqMJpHHavxtZ3C8rhkU1XSFU5a3rWSkAXUDFufDp7GpGRqyF36MW",
  "key26": "2Zi3h5p5ggwkSjcZs26PUQM61b5jfBa35yFzqCfZa7zAcvNPGCr4D79qfxevT1T3YuHtKkELaMref9fTB32dRGSx",
  "key27": "2FRVUSA9Moi8EdDGVd86JQpeTT7dGTHT8736mmJ4Q2gFBmSovt9iqtQ7usNwuMMC8LkjBnmZFSQbX7n75AFkVppC",
  "key28": "2MScepxhc44XU7erSPGUVzfS7u65zaacSsbQmZTZDX35r6HLUWZv5VWRQVyCj5MmJSrMfb3CGud8JmtxKvP4Er19",
  "key29": "43XuNTTcvBTc3qoNpQVRxiU5PTBXawkpHhP9fFBh9EQ5kyioy7jqEY5w2trw6uxfH98fz721D4ZMidevCpuWnmyv",
  "key30": "2QC1fYB2D2xaSc65scYbJK65xZUxwK9vvTW2SgNoVegcSSQEQudgWmzXUg93t9FeXyFU5FaGfmp6DidCtxXjbsNw",
  "key31": "3zcPhVihPbJ717JfEU94ZDknefDeqksUXNetcpypuzVBYusB2PdA6HvxCXkyATLzheGkG5fwzSAD1EWkYmgPy7TE",
  "key32": "DUn8nrFjRmeqfV95PdVrNKBLCnoXThPbynLLFGz4K7hvwz3U5dYfEoknAdanH8Km5CLDfo66Wu7goEVvNAEQ3PG",
  "key33": "2Vjjkq5hcu9LR9L8wnxif4BHgPde2yWV4qSaFVKgsyCa7yTm5orQi7ERScUSnryspbRakcUvXaXBwJQebgnRQv8t",
  "key34": "5nGc84CAC6U3wwVYRt1XxiGHqYpSw31qe5RkbnQ4tHjRX2kuDeTD6hwjkC1JNgqSST5A7HHyLc9FVSA7u9H84baH",
  "key35": "UhmxoH9fkN4iCZpW7JkhGEvaa7UGGM9PqgqFCKA7obdL2UHDPQwR5iT6j82YMfyTQtwPx3e2sfJvHT1qQn2zuNw",
  "key36": "4msDKeG4PySyP7sJsAmVJZTsJ9iUcwt6bE1MrELFv7rqj3ppemX3NjTbVt9pAjSEvwgAS5XDVGcTcihPtWwmqYC2",
  "key37": "4ZgRW8VDQaAy9C47X8RM9cpLLeBpv2SFUDG27BevVxwVh6zgDwmHSvfUMX3MbPHbPgtVP55Fn4eVrt4z2uLmLL4H",
  "key38": "2EDqyCUHfWxHNmA3QX1sWpKV9hrghVVC5qdwSzpna3SRiuFu28PuXduqL85C2oBWXn5P7AsvRD2ttUdjL5tVGA21",
  "key39": "5v6YXqXkbRqWjS1AKnsSYXFmzcxbsfQjVNGnagX8UFmFTsZrFEcTANcgfwLw8DJ2metkrWQBiGy49qo3uZT5e1pJ",
  "key40": "4KHayGS535VNoiKeKJMSbP8bxaWVWNzCV4iRMqMUXr89wgsYvPsCVfSNUu6gqcQTBNiq84wXADPp7gEjigPMe5y2",
  "key41": "5k96v7XuAPoNDAzahXpeCVMDaDbEj2cqY3585ukg55g7S2jQtKqqMtcE9b7deZntzyukwrsB9tL46744Q5om9B6e",
  "key42": "5cYDCVt1C2d1LCwzHkqKRy6WdzsHVeK6EnJioe2HfBeqzQTLwwguYTP9Pa74ded4C2XoC5SNFmruNi8JQCrUycyM",
  "key43": "3VRj9YhexGBdhbZc3pY9faDaJPehMjvQmQXGuT8kyxokkh7VnuQJS9aqTsXANRRKbZefmnnJwKqZU7pNBhqiSFct",
  "key44": "3CobPDNWZwdj8dUk9BgvEKoL1QaAo5hTB6EPrrpbdJayeTqhQpAxZQjssAsJuAX3BBsbhizB3QgkgKRWWhTWSnAB"
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
