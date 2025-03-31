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
    "5UEmxydmqxrUL4ZCeFYTx1jBi6jszbcc4KvVwxXTL482zrnTwjZJox1Kw2bobAVoT71gTtTWbBL4hYw1Uai7Ej1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uu5nKzZBJ6QtSvoNHoetas3AkeAupiC1269e5SVx5gqy2hmHknXX63VtxNk5hy8TJmqRX9n77uJChfiy4WYndUA",
  "key1": "2feD7Q8KZQSfMKx5QCwF9znpjQxLpTYGYKbxec1nVQfB1UPLoQyGVN13LknoLnNaxjwd2N4kUmTRXhpEEtNe8BcB",
  "key2": "5f9BiDutx2LNfcwb1CsYc8L296PDYftvkpPns6VwEVUq3fTM1onB2sSLK8PMEZvQm6YxpaPyxtLzUDDNg9pzToJp",
  "key3": "3HSXKsQexW5ztC1eJJtiDZr1RG8ZRNZctCwx9muWG6Tt9tGyTermky1aUYhzu6TjC63TaSKWUfteCvyNCfCHJAgw",
  "key4": "2aP9JjhBxzTU4vz2qMHumdmvkjMNgdkh2dsR1JsFmwMTiaKdx7YEXtsGngmJD3Gp9tQavM5jZS8wa7ppVXKnVaZu",
  "key5": "3j7QMRKV3xuMAZnEpGUy4oqVK1LbDqWDsCEPrDN4X7uPV33KdESjrsVQYC1LQdANcWv2yojmQdYVD1GhnXw7hPvy",
  "key6": "3A4szyBAP1w8cBLkWJSw55gYoVyB4f24TpZ6rBzfrWCSY7stYQDt7ETCd3SGYyQkXX6wgUnbwCCxHR8LSDJys2qg",
  "key7": "5jy4MCPHECbj8QreATAmE1rwg8buskJn67wmLewEtmKEKvpxErutKE3Z4QveFyzqi7op6EoEBXEYxCZ1SMgJWouM",
  "key8": "2sfqGswQZexnd3tNmWFh1CekzbHxb9Vp42gRk7YD8hMvtEroj9p5mmfFDfdkLWBGgPsGaHqkcM94TY4Gwg2XXqKT",
  "key9": "5qW8mzMqp292jmDkuqwPNS5CBxDYgj7oDQ6JDQDywxGgRPS5Cf7eqJ8LTfaJXoXWweFEByqvgmhkqHVLc6oDwhBh",
  "key10": "2dJLDL7d219Khi1SWHan86mDH9qgo7t2LMigB4mP1V3gRNwvs5eSLmZcV9qT24U1AwzfjpGrD5DxBDUxrHJfPVi1",
  "key11": "3yY1f5aRDSWKhSUvHYih8Q9LkUSP7VpFgrFkxNNm45qHq5i251VEKEn1iAa5zSkSDhme8cyAtiX7C12hEXbBLuBD",
  "key12": "4x6ujqANwhCdS2J8bUW2oDwdAAvUkJ4PZSoDi6ahrQR12pESvXHaRCVxXUHdrRM8DbgaqxNfqn9Zesig96J4qoha",
  "key13": "5SBh9progsekkuiaAbzU15P2LBhpFhHh64vqHZ3kTK5DbwzymGW9sXdxqWmHGeGAhvfSGjYtGJRKDnY1fp9e47c3",
  "key14": "B6T6iVbNwRhjYuaciHgqbYEc9H4K83Y6yeKiAq7v4pUhi4usNDtqt1HJHFfCShZmZaXeed7JoiyegQRwBnVacgv",
  "key15": "57ySeewaUAaCKLZA9P89C2NSiwZaFQxQTgZ6yNRyyDQpuv7RVuwrDAv1YNtgAjjXQjzGM8GZy2V76CtAp39A1NBi",
  "key16": "4esjPB1bGvXJBbKxtXdsd9GeD44KvyZSbWKtJwUZqZ8D6iX2T6zLboyDqefyjPoupSPCezVS4pPXJyjT8MmXGxVR",
  "key17": "hr964cFUhSNxvq6XjCu9iFFxfSYrnUhEseRcobGNEzjx9fMZpx2oBGPpHokect6QFTxR3Q6ykexbewTmcpVTRkK",
  "key18": "23zdXjZGeyg9DFeBWXHfMPmEGuBDeNuqbUB94rLmaRWofAP2icb2AyvvB3m3UpziVUzHaDxuLYUYUvwWUEqMigym",
  "key19": "5tQknGuxUp8dXMp8ZSAsRQbovxNqiLZDGdt4kjxQa24novnUpyNvZ5V9MR8WJjqa1zTVTouBuA34iyQCRneFMw6m",
  "key20": "2KWJSAyBYeEibVvXiVsvsdVE91JPXyVaE6stKFDywx3r3THJcPEuK12q2KYDeMCnBgNek1HmbhjXj9nHN1ZxbFzL",
  "key21": "24JRb3jTvZ7jmqHXQjGnRmyLG1VNzCww71xT6B1yybuEAZJGjGHMeSaJRhkdr8U3AqXEsDUgdw21MaE9W2WCRpTQ",
  "key22": "4XKnBWJdyJzvfhhBdnoViovAiRhGn6MSdrn8xAEJ2sEcPwpDMnQCwjSSHChJ61qecdC8ZjZZUpzzWuCM7REiBKCH",
  "key23": "37jkF8TL11nDoCzZfxUUSNHTG3XoC5s1Hgv86Ke9rZ3AVA4KLVYRp5QmvUprsZYh7m5xPot1RrX1fr1JCt5cEZgY",
  "key24": "2YHedS9yLbLdXTowBQ32dduLprQKEmrzkd8XFfPz3FMRZXtRQh1qB8iKosYeyquCNnUJU8ghNcH3m7gP4NbCqndG",
  "key25": "1wj2mNieyKH3B2Z7G16egK5tuVdphdmMCnc8MnuS9QX8cz6pz3eawyAduX3BS83Vj1ziStDK5JHYGVg3GvebkoY",
  "key26": "5Zom2N8mQsoCYd9vTXjhgu7zPTDqxtiMunLyqPLZZd8TnpTLXroUoBQvuMnwzci2io2oRxy8hfDZgrwhmhroeoj1",
  "key27": "4x5wxoUmevp5DXQbp87GyGn8mLfUwRKxDSfKpX28GKm4tqfpNcidD8WpQyp496YeYUC2yUNqa4VPWH1ZAe2zfqrD",
  "key28": "3Pmo4tVKcFYmWy7y9H2FK56SrWiWgUgwqcS3m2f3M3fvwRJbWRc3juGGVL5Y6pgEqYUQbPvBj2zhQfK7MBgH8sS8",
  "key29": "3YnzzYhoZ8fLMoLRTWmEeAaTSU8VsGAjk6nY7Jfp3gB6SNPL68dWGjebh8Q8q9grrncyBbyLqPguKKf8xMA9JteV",
  "key30": "289uyi5XUFrBkQsh4LSLrdUfgMFdYHumEeJXJteA4BKFQfUyBPttKdxVqkwVrdUwmWtGz3aB8uKcYwV7MgdRSUGM",
  "key31": "4eeUw4Gqm5iSj11Big4D2sduRzQZiL6xsyJh3ZLbK7ypsu32NFhotQpz3cSvLjYjtisdn5dJ1EcmZu7U1F8REDRj",
  "key32": "5M3MMMkxzqegcxtwFYvifmSQpQFcJY4SSFrMoPF3sa4HDc5g1u4uurHrBXGmx5SaRAHkkPBBPxFkoyeTLbuWWuQH",
  "key33": "pxgf4QSywPrhZJhHMFohKhuro6sDvRdY5fKvJbjiwCpdLCd5hVpMEMaXgbJ7WYHRy8KaAf7pkbu9pvfbmaSSChL",
  "key34": "4gSAqyFbivCovin4KczcVSY2neCLFB6nUo6XjLN7DAhjEhSbijHBuw2NBEaYQd4197Sg7SGw4YNsNEATvi6RTXip",
  "key35": "3sxD9DVkzXgzJzUSKJAqskjpy9iqE3LbgzEYyTaZrbfc35DVEoRuVJ3Xh5tJ93dwDRRDWsRkDo9GYBvBsvLmpc9X",
  "key36": "5LBK6JDjwGLZQCpoxBXLkdJpC4iQudvbvqhmMNxixR94YLeNJKQHAXwMyDprB23vSDZG7BNa6dwFvMkso7eAHdam",
  "key37": "595v15mkxw7DLNe38D9WDCwfnfdAhqVPaVBGMovyPXNdQd1W1wsCfjVpuy3frRDpQpkhEtR6ATqYyjkUgtRC5jWx",
  "key38": "2HNWYckgnt4DE9ZMydMhFsJJ4p733EkaW3dd4PkgpYr3fMMvhH2a86gZJ953Avr6cco4fSXPvDXgJ3WiK3HJjjzJ",
  "key39": "59TBftbRftR6MVVE4DbpPZ7u8zBG37c1BAyDsz3cgfEdjf2HBLcdXnE4MzRype7hkQd5qzRjv5KnmE3jtbricSiv",
  "key40": "21rfxYDbc89Ljsu2pCeLAP4Fw7XXimmDwATGFFBoACrxSYLZeWZMabAhZfBPK37RoG41YJHrs1ukT6wW29kZF5NM",
  "key41": "65uHuQQmDn7WKrtwZt1AtqDqBJXKNBq6d1ZR8PUeWD3ELK5erzjd8te3RbHerd2oxtWy3izFUJvdZ5nmR9BKuT2L",
  "key42": "cpr3D6ZZe7StxK3FWeDBkzhkswRPMToCjj4w6m33GQPWBhRpCpF73XSGohYnXGkgAj6Y4UntJ421ukY8D4z38fd"
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
