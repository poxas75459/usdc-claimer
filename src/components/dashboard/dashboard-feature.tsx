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
    "5BpWbNL24Raax1nTWiSEtCLUnqSG8V4DaEBnfvWgYYr7oafZrUSLfxbmggE21NRqKqPkgqEtZvsdgyin77msVUqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CwGx5Vr1wkgkTmZnnbMKqoD7m6qdecFghipDXmRkey6EB9cAubw76VkDUvKwEmhtyVBiU4oXbhcrQWXsZZGjz3h",
  "key1": "Aer9nZDBXMpkt2XDqcYPHBRWjV44eB9Ukj8Fbqd6dSj8irRXRrDBDFoppmMFQ7AC5GFZJCbbGT2uXKnRXy91de7",
  "key2": "5FT21PZzEnruQrSd7ti6eBEi1egvnfEgnHnBtCjcfKymCx6T63papbE7QtYdpJX9AQgM5ixA2ikTprhnBM1Zb8hF",
  "key3": "589pNMcGJuESKKG5LYBZqjCvL12jmgp7XWusmBafJ9Rvz4GQqPDB5CEyyrSbcDE8S5DzeKSj4Ra8cqKiYDWZKTH2",
  "key4": "51eD9yrLhHpvDsHXBKTqzA5CFNQ1J41ceiuhiaP3anhvABtjgU2ubmCN7Z1ULvXRi8WHwwGFDjo1seESCu6LVeKn",
  "key5": "5byKJZ6NsR5KuQdKMyfQMYNtFShH9zyaqbFFJ5bLiojeYH1wdD8K9J3WHeNVpE83T8g7Y5xKEUV5qSUED5Ffv2GJ",
  "key6": "2xLtVY8jL7FqVkg3FNjVT73NSPr4mWdPQj1TDLW3sRwtzPDatVmTa9RVErMNjcKi3FkCDKwcjY4X4qVp4kFsrqu8",
  "key7": "3WiexdeUctQSp1WT3CPZKnzrpY1JeNGn4cwHRiFbwJCpc1kFmvneAHdyfGQngCUyd4BiAgstox1Nr4a3EJ4mvyKQ",
  "key8": "4VezuhL3vTP71VQK38mVvE1TLzJnRt86acSx5yM5GD1WnxpWNwXbg2qnyaBhJpoNx83XJERQAdqjMr3N3J91qCC6",
  "key9": "RiYdD91gKWKpRZTw4qfCaxvPtJNfyiFNnG9KsrqCpA2PZC8Ek6zoMg9LnQ83RjoyEFcNEBfJgXiEkT2vdEg82jL",
  "key10": "4cpTQLtjR7wEVAcax4WT5YBDFtGZmjMq9MdJmTXu2mb5yEwXi5Wt85xBe8fste9CEZo6u431Naq7vhy8qH82ki2g",
  "key11": "2TVDG4qc15pqbVAEqZmhkbrhCgWyZzmZL6Kaag9rFAfYDYHoXKpHxNpypwFvknSPgktZMeDgEHkf21eHUYAvXt9S",
  "key12": "37k75tvxfVakgL1vLRqEfynL3yGTyEWN28H9HumQ95HgNYmt1HonTdLURLUSsvbmqaf76e954NuYdTaDodcFqBqf",
  "key13": "46avopscoa2teUNitwT8W16AxJTcRBjmEiu4AecZfmLwvt1i6qjRjXDAmNgzwa4mkDAun6AmabiFEMCoHsPC24tY",
  "key14": "aYj6nJb6hUW1BzzDxUCfjwymhpqmNToFdAC65xTjv4LGVaWrKPXPyimenvm7wPeqUDTZX7sm3LKn4BergvgxZzj",
  "key15": "5JjEkBs6uaNnXsj8AvtHbvXPBGXuNNVEdrBg1nv7FmhckhZKDDj7CbPr3frSqFLEKTToehGTU8uS3YnsnEUUUPiY",
  "key16": "31j7ffG5YjkHKNapzyBz3G3VkLH9V3aUbLSK4gjLjwHiGmFZQqp1LNtiFPyV4kejj1KUBqEHUDDTxaaVVLYHzDRU",
  "key17": "2dNHWrBcC9q9bZtyZgWGokm1usdjJGppHkMp5YNmGPmT7xqH21DuWAiFYuYTD8R94YpxdpfVXg8UXtQKvcvK46SF",
  "key18": "5gMWfsGSrrUZb1oQHtDwLkGWv1sbApYSxwfPpiy8QNGCzNmgtRLNdDAZD9xbTTyuJU3u16zVZCE1YGPjToPbwBKj",
  "key19": "28nSdw7Vxokr4Ly9Z26UFNbpPaczgH6GAvcdDNXhFsRKPQ7gKXaGiPB3Wy1Mw1VboTfz81NuZbYdXQs3nByLN6Kn",
  "key20": "4ex2F53yTpYoX1doQu4diBky2hXhBkvcwVjmpMogM5C3wNChoizNNzhtWzZNToq8By6LS59gSTb4a4eAfehCipPQ",
  "key21": "2ByjW1YgENAUaBd1Y8ZiDjieZXcQcYCWK2FzzDH5XANWuf1PgLufSaX5SugQ8FUDLCietWyM12g7dAVxDkKbLckV",
  "key22": "wpTYBaUdfkKtpdx778xfQ6jWu1Zm5L5tCyxxP5qAVAHWWa4iVrfSL9EvRFKUtYVVfzcFnxyXVQWCSPyMDCqT2Hz",
  "key23": "wxjXttGtjf3oq5FvYuNdygQZfG2iTqJfKn2Bg7fFYJ8NbDynVi2BFE4zUQb9Ar44dgEQyLb7RNh2mM56gj7St4Z",
  "key24": "mghQ2ZLPBohyHEAJN2KzLsWXJyJw3Ba9YRnjTfPeugENepjNbx89YHAZcB2KhN9GwgD3aXcEEps8diPj9gpJcLx",
  "key25": "7MJWtkE1Fu8VCXvf1vJDoH9kwku84JZadaQyRi8GnYSLwBzLEjCbcAN1Xgf6KK1EF9ymRqYXPSaKsozQydXtQ7y",
  "key26": "4SpbjLhurfq3asDE9drUqbA8jwLkgPnGdS5Gx2kcJVSXa7obQd5LNBGdkKxg767RNL2sj9oWyfhMSLScApfyM7ip",
  "key27": "22GND7WzfrXVohfgoVjBrpsi4p77sK4zf3MctwtyUxQp4jESBRPancnaBZUjRFJzBfgctrF9jpKxoVyvY7DiMMbA",
  "key28": "5yAjTieU6D7JufWaHy3cALhRUwMMCCek1Rkr2nJycKiWzg6qWsn48qNApuB1UQq6EXALuSBWTAFdwz1rwqM6qauV",
  "key29": "5bExM4o2SjR3JtJLPPdfv6ZpSJSeZRuqHy53kUvD6hNSV7XYZdp7nHt58hhT45A33gPapATuJE4BQU6NUatCFckc",
  "key30": "Xt4iDEtC54ZCSEaTm3PBUGd8zkEZxDHT3FyaqfdWr5gNcmBcwtG41n6xNmwv6JLKTfiW2sTcbE8FAoQbRoTGMpv",
  "key31": "2eiDoaPPuyKunVifgfquFiSMuBoGNKWqHXSinMWsrmeoPg6ipJSBtAZ75P8vG8QXnWyj5UZ4LJXAgYVSUacDr5Gk",
  "key32": "5nz24JtY7qbYKJPiqhcBtUxRAHuRQssVkNVZZjSJUa95RUoCwrzmzhv6b1171ez4iDxHvWMMkRqYxy9QjMsWrkNF",
  "key33": "4DrrqQfuwQYP1EQ5EXuhEQyKrMLm4jSqoS4prveKMjX35hP2eVRVV4BcRU25gB1MpxFBmsC6usieeD7pRTUP6pgu",
  "key34": "2fcx4d976tzZJ33gfFuKmmg4vqrVgB3m8nHrzVa9eKdQ6WeEH8Qhwq8QVtqb8ZN81CRBSDRzkFsifbu5jKdz6D4f",
  "key35": "46TaDUwubqwgD37Jg5CNU9CAJeJ9dZk3bJms9cpL4qDcnDyjkyRYLjYNhoN4Yxz7hQ4ojhdDCeT2C632yRkeF1uK",
  "key36": "3SgDBHc5JSPZbHmCXZ1PEuV7fMXncaA4FkxmZqw1QwqZ5vQU25xnuitPByC6gMgD8ByE4ycDfQt7mZ9M6TeeBmKi",
  "key37": "3dcqyCZAf148FiQWrr9bmfiq3SSph7hZ7sPmiwbW3qXSy7VQSmrCyMFd1Tt3Wh3QkzFask5EWpgHmMw5Ufw7AxXB",
  "key38": "29NTAw6iiEmYquBxJXwV7Z46U1BLLbYUpeDYhbUUj6morCs32HC1HCW26SAu1tkyDnMXzzaJf1nybCwESg34Rzip",
  "key39": "4WUhGE1Z1mdqkgbiC3ffAn6CQ13ztfxUUBQHXA5s6FwxPhCyHJjKp8mDvRCDRaAPe5py7ZL6sdqtm9kcNDUL5SbW",
  "key40": "4QV4NQVqfCqWCX4eR4AkVo4256r3qhBy8S1a3Li4t68KXY4vQM2KTFYErYtZATkoBAJwXVkh3Mki8zDrEhPDdHHG",
  "key41": "58EaB2aAEyJyHuaD8YNSxEwKAJ4J9wZk2iAaFSRr8Wt9dT9gpKqLzE7VjuS4itSNrFWCdX71MrV2epRhnJtRhCD4",
  "key42": "5VmZupAVjUPsMK1nV2PrCKk2bLGygS9D99XdTV7ixmmQKV9mz58ytpJes98qbfL7S65vn1yixHqtBpVvfuMn6kcj",
  "key43": "4C2mq9pjHyspgDm9EUiHPWYkuerwykhd3ywyhKDbJCPDC5QSbrrot9gWfRGPqEXLZZi3cL3qy5W4swHtHXkMWAxQ"
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
