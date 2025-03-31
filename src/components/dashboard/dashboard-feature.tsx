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
    "4MvwFTnyUnHahWqtZJZdCuFNQF6KKDAKWYkWMDfj2xbBiZKv9BRYe2TxuNfovQzv2yS7bjkDpCTFvDrhu89P58ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVb5z6i1AcnfFUbFEf3swVk55s1d8zAmDvB7crddK3Cj5uKMAZGr5CucwTsQBDDJwLrdjnCLajrvDqCBq7S6g5",
  "key1": "5DhBbf4pVPRNgS6TpHBWQNEuUpL7ccYZqtvGbGPFwgQ24pEUv7LXRWdayRN5Ut8K3SjVgovjhSNQpzrazgK49GxQ",
  "key2": "2MTyi8y9LasaWYJFBWi9athGJYscSGE1gkrAQaiEGJj3WdoaMFZSR4KGAJ9wQoFtAowsVYdvJXb3186SktZz2trx",
  "key3": "ydpuLYHKQsA3YDLvXU5MwU8X7NFEQTon9NsbHPi6qD3tA99nkQKSv66gGrzvmVfXFbhrffiL4r5FjCk9rZUyJJp",
  "key4": "5gJeu6zMAKh48ePxW1XMGqs1geuxVuGNjk5NfcVQXG2AyKuay37FqVF4Ajr42mVFoqQYPYFU4EZdKwAZGwKGbyW9",
  "key5": "4PMaawyCTBBDdrfporgQ73oYzycq3Xt8gMPPjtFzFQB2Hwbub5Z3x4DqZ3o1GYXMELeFTcSwstALvbGLtrDTgRJt",
  "key6": "5pYGxuHUjmPdUaHXtvwF3aUaoAnrkAjV2MrP2kqz9SciGxaD1Xz5APdDn6K8so2hgbN7usyd4NPydL8em2VzMJFd",
  "key7": "2qAPBCUiovGwj7YaRaUn5MsXznLpDnJ6sPPBBRFdeDbDG2iJknz7xFMqH2ac6HCw6bh6xoSHEnhnsjqQALYTDPXx",
  "key8": "4y7JKTa82f9Jax5SqduJDijAhj4UmCa69Gd8BzJaV7DkSqqqngeJNuWTm8KU4x7MHabPcJM7RYJbmeAtaGfRVMKM",
  "key9": "3yPJpZYnp5egVbzCF4447XURqJW8i3GB44E2iTD3yUtTb6QK8fvF8mAbDtMo98aQDgEJnv5FP9TjjjdBCM9SXf3D",
  "key10": "2kCuUtUsF2fe1K94xdQSKh1KyeyJGscNpH9KHdfrawEUcH1hhQPgztN5nquWHpP8yRChJDLjuBmpWmfrTRi9nUm5",
  "key11": "3jMcf3ojMea2tY9tHqhzea9QXvtkveTkaV4XVQDCdd7xDu4L6WJ7L63USFbQ9DPuUDkZuwQdrWkSrfy1fyt5dQGt",
  "key12": "5ceC7YVC81yToYr7LBxNd1223ZRhspAorkHoBwCkDNXr6DBp5TSL5BnWHYgMuouev8XhktYVNoEGbrZed5aDPP6h",
  "key13": "3eCpL76xtsjbkohJ7QncFejNLUveoG6kge8dJoi4gkkY6nFhMMrFBqPGsVEcLsZ2PUVD7XnYroqyy6cFqKyrBxgn",
  "key14": "9YJW3bxwXQ9QQCE2Dgk21DfRLbBCgQH2x64rFR42JvzXLaqCX7MuAdARu6tXHTTmvka5sp4WuZKXTv6ZzUhLoTS",
  "key15": "2QAPHyQ4ZVzx1HP5qcbgzyj38WDyqm2oTsFyu5Na5LQDh5QomQD7gF7C4jYjHcHVK4d8Ku7gEnZq1889mk3rgfsv",
  "key16": "5jocU8uWSKPNX2wQyhb1JnCYJBYrQJ9PUkZ75ZSUVn6fBxuGZwnJjTE2GevY9ukf36aitTFXyrHa3E8gSipD15Ee",
  "key17": "3GueBdeZqKTgQ3GFmKbSnDTYVafuP3qGLgCnUWM2bctco4HGdpRjj8Gb3jDdbG6xRfzLtN5FCaCFnhRdBUPz8d8E",
  "key18": "5CCeQvVh4dQr8Z9hAewng1EDhAUeNgPk5nkLojGrwT4GGXKvw6yUaHepjqNp6RDDgFkq7RmPakYfn8M9BnYinSjn",
  "key19": "4fRGYgw2wsn4jT5vyVJd14gTcbbgBexJsvnGNg6H1A2cbraRzc1nshbVbb4iBfjanKzhU2pKNeoU5UnsFgbW3bXU",
  "key20": "XyVmyaWgoT5CxtHvArHb23PZiYva4YpDPkM5f9Y58eKU7R8SHAQeLyWrWkZzRGtU2PukQw72JzNv7S6bBYPh3Ta",
  "key21": "5MRjZc14U8Kpepdt6toZJbGwm9VnKUj8w4XF34wCpYSaeowoVwvpMfCzPnXvf9cuR3osi3EticWoTWRXLb2Knbus",
  "key22": "49JyQ1amzxS1uxqi1MhMrqc9hpgZhQ7GSF397JuCDthTziVT5mbqa2ymjFNsxBTsmDRpCoMNp4FK7LCdCRQdKJ63",
  "key23": "2HixF3e3ohGUnHNutDvSNxQCAVPcF81yLf7JdtGwBcUXEYkGiTBPzog2o7Bfa9PVoqBNUwHkKmLNd4UGqRvM8q92",
  "key24": "459Pm4PyjNd6BQ1dFArwceKcYX4qz58T4jzNejc4PjWq7CmigFvfAT2EGFjCqZGvy4MvKLFEctQZVbim3KxndCW8",
  "key25": "46ALUsWkkZTAHUNfm2NB3u6xnMVm2H3b1U7eUBPbTLMzgX5hnoxoFgxiwX5rGVJEej7CdB9TRyNRCtsNrvgwhNrE",
  "key26": "5VRXU6v8tqpH527go5sW4B5hkMtKku4KPVrTPU3KXAHQ6wSBzrTKLYC7FB3QfWdkNqekRgSarVvt2iFCaBicTrxS",
  "key27": "36k2RMrAESdKCtUtcy39sGv2sxWAq97X5wG28QQHTAKc9dVGUoCLekcGxEq3DqFDvjFW12DtsdCENcPXupJnfm7Z",
  "key28": "2DGymWCjBdTV3K2B78FFDLY14r8mCdX1M6UVtJ6Xn6RpRmp85nKtQYtZERYvTvzWvLPVSzASRT14CG6foGe2rZHN",
  "key29": "43jJRu8qDm7tLajp6diairB4C1FA5VTNjWekHTsQ4kvjGjybgDZTRvt8jAPKSYVziLxh23qrbWeX1ic8NXn9ks45",
  "key30": "59cntSXZfky9DStAwBy6URdHW4rX7RwnFTjNTufPF55S8nTLGvd4Mxgs5CdKaDPJsLwtKecxX9KZVvL9HdTtdeXw",
  "key31": "mGqmtRWJoaCL2pGUVEzHCoaVpiytqgD2fStx4jHwmHAo6T6nB7yZZP8PC6s9Mbe9KeUk2g4tnRrfyex1LzN1WWY",
  "key32": "67gLxuSVqLqiGgGTc7nMq5sdRzG4fUASCqJGeQqooU35LshKCyBRNx18CsGddv726ZXZJ2zcRF3rJzAek7dBG9qc",
  "key33": "K5bFjFgnJG3CYVkPxAR8XccCdkg7ZkULQJrdyMsGRmRSi6ECGL8kjtacDtSYQnEMbFumen5xyHULJiksdNPaYgp",
  "key34": "2WCBc8gM5tbXo1MFGYvWL7hdJebT5mtGJTTkmdzQ2TRDpRzDWb6Rp29McwCxsKWKwGbYwcY4yJUoq2Nmz6fX1DtY",
  "key35": "5QrYFnRUrBvmEqscKk1SycbPSNq72k53foed3KTyQCmmNjLSCuyPCUPmvfHZDa4Y7xxZCV3qtV98Xtfk66XnzdS9",
  "key36": "2tJghdzGHW12XaAYS9jgUTLp92RGitcty6fG2Vgi5BqnanVrWSVsC9uYcdAnURix7Arj3C5RQ4JWzj29GMHvcuy9",
  "key37": "3BeChRHFEqW5ck7e8qz3DeQQCayXZvd4rVsZVDRebHwDLJRy61RyhkMKtmisdGwE7Q2iXAC1QM3BosH4jDoAuT7b",
  "key38": "3WyueuC55pMWzHSWQQUnKcTk5kVxdsy3aemYeLZUP7cdrnuGLFLwZ6fGqc5aJyjF8ckmdS87X64HJ2SqZvzRuD7r",
  "key39": "4treqRvXYjFd8CbixPsUio56hmFexGFH3TG8h86nVS7uN5scE2aC7Kq6FKYUFeoqyKojY19Eppbb3PgCdgqkMhBc",
  "key40": "UdKwnjazbtnkeJW2kYeRQqQabdj8B36VwjvSvL7rnCN1LzN4rdBiSxxsUjvxCPi9NRrhFx8mdvue571yD4WMS1s",
  "key41": "2T7QgKdMoK1cjxN444DBBn8qJEiHyGhdN4nKPbofyCM2BPnUGTXTd6dFHJysn49vv6AYmJ7UnRWzW5BnVg142ydn",
  "key42": "4ABmDdyBawhdHXJwAJheH9vm1ibAnBG4zLKQCVYXE15jmi2b2ZKbPn79BsrqnML9huhH6C83RJsakQFT1Bfyop3g",
  "key43": "2c9rcNXx3NQk8g4xgfuJDbbxpEBodt9C8fYTjFkpwLaap7kUFHTt2GujZgppkEaWX2hLjjY6ThznFV9ibtoLea5m",
  "key44": "z9AAnDXxVJ6QbzQ7hmTDgVT6JmCAoFDpCDrJnZUEYyLDMw4AtxN8KdpjbqDoywpoCZD4MB5BwVRFEWKpeX7gxaP",
  "key45": "5YhsSfshXtus72TzDz1xX17rN9QGgW7J2mb3Jup1RVmmhFL7q47zy7SHRV8ngsxTSityogf2TkgvxoQK4VtYbubr",
  "key46": "xJNepzXUdpAdWjFMfmz3i4dP35Ea3ayMeYqfhvo5ju8j6V27q8X5GDP8GM82qAi5v6M4zSrjvCMYqDhN5itzrfG",
  "key47": "4v7BgVsh1wRxdSyKxJ5yDwcfKKDQrEkb2t7ZTwyDBwYg1dmSYyU1xjFWwksTy9qog5fRV8Jpep2duKWRJDsUuLFT",
  "key48": "3imeFAmZD5BGiTLtywdHcq4pmEg3RhsF2to9Qy5VGwh95sh62JD2d7C4cNnxK5KAYCkYf36brc8s7WGvxB4y2orH"
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
