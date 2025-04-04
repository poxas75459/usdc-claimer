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
    "2ChPBDuEpzqbcZaGTpTVdXcT9StQ7VwJF7fHR1W8AXCLcdEfTrHbZTr3uanjfij6sa8vqCDS5PNVw76T53kHPTqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ULrjtRrcv2jFdFK9u2iGpGFNXQXFcbhzfP9JRT4uxCBPhT1hPdHoy7QWgbRoZQFhbRqGyMX7SaHBfET8Hv8BmKL",
  "key1": "5XuXusD7ftkavnUjbDz33pwpfE1JABVAJ5FAW18JnZPyfk9pJRkVVJbykpPaVRkmpjK1k8NoDT3zBt2mMwwGm9WL",
  "key2": "5YkqeuoxsfjGmmQ2zckYNTDDdUoHmCU4PMiYdPhyZdeYBf2bXhCej1reMujv1REmMuVrZuL9qyuJtEZ3H9tTtxDk",
  "key3": "ECXU1n6kC9g4nwvMLoSrBCE8EJcP3gBJmKDLTQZ3SexTrsg9zZj9CoJVfoc6oh5oucPVvNNzUDWq3yNf8DVX3y9",
  "key4": "4M5ULBT22GZrMDEfsjvKQNHDDJqxERbkjxnsCnLzyYb17yxjPxBq2j1CiwkgmmroHPxd6hpy2KajTHiar9gDCd4J",
  "key5": "XXkrPX17Zrm6y7DSVj52ikTZmMm4WNHk1rwcDKRojX7M4EycUzj7mBa9pXdCzeNsbwYhXtQPkpQVW6LPRWWkKVy",
  "key6": "3nR7YVMytLX3s3tGRk1PSmrNBDeaK28xRqWTahZjbm3f74ZHX461nZDCFsPMTEfsrqj1gkyJiU5QLxqiQXK4pcyX",
  "key7": "2oT6MmEBohUETPmmXZdEZFLoRXXjp7FBMfVzuwjziKDQgfJ6wPmC6LNgKjLiobvpHzvmYi91byXRz5NQyFAn1bWJ",
  "key8": "3JzLPPkNbXGkuQCrYZ4LESYsQaxnTeYhcBTNm8aEJ4HqVgxnAEiHKbHRc1nHKpsYTrE3Kck93TPrS33w3g5sjvGj",
  "key9": "2ZfLmwmMzxttUYU9URgKswvaknWqqEzvMoSBXvBmhQk1wPNZDMk7jBoJ5jFbDcerhpZd7EkJoico4tuK138y7t4f",
  "key10": "276fDiMXmvuQirhWkdmLbDyshPeTeg2CvsbdKYTsrfP6PYfMQsqSQCkEodqRzikFxZ48jLr9bz3gRMaiXMjMxNLW",
  "key11": "3vog85cciNeFWMjQuBH8rYmQ4UmYBzoRiVpaby94CMhaB7EnJThPKEsj1eUKLttLnzcChUWpyU5zsNEhGGruGXm1",
  "key12": "5gPinhbj7WPwvV6vu4HmuPLjx4mNcseB862ztWMnErECfshgXW5YpXxcCRbS7PUsyMtbyAirmG66TF5BnBskvWEQ",
  "key13": "3D2Dw2NNAgENgtGhZMkz8M1tLtoqHSpHoajHQoYMWpRqGqXMoXJfspN3z2J89YUaFJPG4ooi6FeUdPj3TgDGYtHS",
  "key14": "4bPJMkKuVTScBzsS7QaAky7H5hXHffKnLD9QB3BBvKJ3goRbDMUd9XyGwUocWJZa8Zjh5LuEJ3DFg8QqbkysoZdj",
  "key15": "Ar2AvKuR5TpqyrV9wLGTvV5gLD5x1xm8biC1BATrQQ95Re1Gc5tE9KthjXcv7NQkQ6AYvGGHsd92w3GL94WeSvP",
  "key16": "y9Ras1KSM38ya6QHwtFvcH5fKAHfg3tCgQmAgrzxCXayfCCjWHDic2ZQrfrk3V5BgpgkYavQw7udQkuwWQoxFDt",
  "key17": "NToTj1NAoS4qQds1MVSU69HBmCRWnoV8S11zdEGTDQZsBbiQmKHi1Dmnpox2VKWQpuFJDki91NrbgnbbBcS8zDH",
  "key18": "5DRhmoeg4e6e4pryF32ToaBEBBxT496ipsJBMpJiKDvicpVc9pY7eTmbek6Zj8WmNVsNtAqzjysYWfSpcYXW5D9m",
  "key19": "2BdFX8k73gJcvhViUzHEV8if7VWTJdgraNTrhiW5A6gVjittDqNoFKdPCxr4vBcEpSErj66buSMirD9F1ihX8bo9",
  "key20": "2N9ygW8pm1fZLTdD3DrqZHkqao6iELzcJm9hwNjhKnLRWUYssDTChxYe8Y19cZrN2C7ysjifQDGxi3WwNhHXNYXk",
  "key21": "4sQjsJxm7SnBEbJRJxKrzEzs7bNcS7egMwnNvUjFkeKBeyopoAYyV28joMQiun5RLJLyci5KoUwvKATsEbSbQr35",
  "key22": "2BWGCZ7ezeUDr3QxM5AumQY9NbNT4rA7gFtkopztmmfgFtNicMkaeftmFggo1co1ffF7uLcAoocGP3kPTdTrSXT1",
  "key23": "2qVoVi6F7vhuXkJWQgk9sDZ9TkoD5FGdJaei3kDT7kkQkJjA8Q8eveTFGkpLctFyFn3GxKrH5VF2kuZkzeopfXSN",
  "key24": "2KFyyMHTmBVLXvXWzRZW4wgHwgDsNe4pphw6EmGNKTh6dTtz3FfXDKu3sDBPrHb4Z3VnzdGPWXNSgWAtKK6Ynf61",
  "key25": "3TjvYobhWR4btgkJJwYek2EwhNyBaCXmGh8DBZj9qX8EbTrzpSJhiZsWpZJbsPyQx7QmUvaJeWyeEq8FYbwByDUX",
  "key26": "wMWWMyp8Hc81EYPvL6yaFsjRZcADNSC9isgS5oJtJBBDvm84JR7sVvBWEwVLrXQBYF2dAowTJvotGKrHnBExhqR",
  "key27": "2qeTL4SiJ2d15qJnBQdxMFpHbbgrge7yJdFxhjDNxhdRupyC7VMCuR3eN3HAQno9vgdt1XEPCqWfUmsfpbS9DNSa",
  "key28": "dnVKH8FHTAFY8r5QerCGs4WBLCnoebWycAccUnGLHkMiMX3DoBxEEwDMTytV5PzFtK3NyNRMYA69UjYCLTH36b1",
  "key29": "4a6L9CX4j3ZnFosMpeCdi4y8xkg8KQWe9nBhVDw9PxmgHyw755Td5frfmdPJ1xwF5LwoiSwWpth2RJS9GT2qqDJW",
  "key30": "2pBy9EtqQU69HVWvkFkWJ9Fyf5LxppAybAFv9AHK3KPvj5KsSBe5BUF5eGVfsGqXYmkMCHJhzeeASizBYdxBMb4J",
  "key31": "2UHex65ZSebCXD1BwmsAVxEZTwwQ966y1WhWUbcwtj2b4DsAeK2hpfpEU6hsVncuVACy95jGWf44omKoifA4DwLV",
  "key32": "5AbPdxZpeECdTWA2fXtsU6pBpfnwk4KhFqTHFcWENWg7pcnYj3KChwnGmCaDJCTWcuuNCSXPahLVXab99w7PUB5s",
  "key33": "4EZjDn2JNyimbzpnxZeJEuHLVFesEb5e4Cn9gErYS9WED6dZFVLNKt31Kk6nH1C3ZV6iT4TwyupBakfxRPUHcME3",
  "key34": "6pfdCLh39z9c2Z72wtLCFYUqEuqMqSU7jnThD4ZcpZbpL58NEJQ84L7tauC9J1SKRuhy3Bd1YU8Sh7Pt3c43S1C",
  "key35": "2Fip8MjxxwQNRA6zkm3987zEnSYNA4BRi8FXwC7YURTDZWyzLXSCJzcFaohGAQHf3JvZsU4VBnGDj1YLujsH94H2",
  "key36": "22P8bGuZhe1pHaiEGGnRQomC9vMJd4mqJcp6oTAXQgThbJbTw7NBps65PDpJyT18SviABX9qfgf43DkWkAqKQh48",
  "key37": "4PmQG5xVxwpVUPdKdyXnPuuRM7vhdeRUdh5FvAFX2TmtXbfhTycrzcufcKXoMdrVgXt9BeeXWUCPTQbLQh1reoYw",
  "key38": "21EpFz5HFuVDYa9FwMfSk52HkA53ENP9LAPEXrNPfMMa6jEpH4RMUZ6awZ81Z9gPXXo5daCHW7UBmXPZU5wvEiG2",
  "key39": "yRfwqvrAW7wa2VEiM7urPxtapaE3jYMxvwqyzDeRy5TeKnYXuUTDA6up663MyeDARCNGjWbkF4hkWUbagvtswvT",
  "key40": "4nu7fCqrz4Yj2rYg8EJacBPMHTaFqQU1M7MU3aqFA7TGoFX3zQhsvUotgXtU6mXhd9u75G8uX1CQB2ZXLs7X2m9G",
  "key41": "5Pm5RFd5aAoRjBNyn62hepnnHTWNWXSbZqPnECp3w7rM4RtzgvqVrGAcFNQK9UBUpsbXw4cE8SxAyeNhQNQBJVuz",
  "key42": "kDuXXjJPiDssbbeQa7XUKAQuN9aqbwCERxgvxQ8CGpWqWWiMDuc3NUBdwyXDTJ9HreoTitWK4dp4BYznTWiU94Z",
  "key43": "64EQcGXNra9PRqefgg6QLWUDuEeU1p7WehKCf2ou3xvG8Nw2wXRePLKu5Ld15ropHpFzKacenwXW474qpz66YGst",
  "key44": "2Qc3hH1aJXyRg2iPTzSmtpqM39WinW4WsriR6kRqujkeY1ueDsCuNBJVeMGDVWq4H9TZU2PrQuHeLntPCvqnbtP2"
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
