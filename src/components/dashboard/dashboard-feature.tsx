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
    "42pGFAvobF1L254iwcYsxcmrJhJ7PeVA9ujj2ogre99NDgqXpKnD4JPKJVAgp869Zse4D4BRdPtFXjruJQWY5oby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apMij5NFE17ZHQbS7eqz4GfwYDsQ1tGSDChDEyoRhUXzhUvLrbcyCGQMMJXWGM8NJQGjLNG4j8wWopg9gZaA5jT",
  "key1": "4AdkVAYr5F7D8t7ZTZ1ouHwsvuj2LnN3xibv2P28iJAXzQnDh4w4ZwaFHiFkdysqV1Pey8XJp8X6mz52apYJmNY8",
  "key2": "5E3NcLW6amreRNRJqNypxDH2v7yn2uagH56FhrVN5ypBQaGNKjfov4W8BqBZRAqoNqJmKV3UzosYc8ULe6Ez3adE",
  "key3": "dEyoqU85Vqk2N9xkYoEEV3fRKqXeVS9eUSNSYg5bhKpPzCR2kZD3juJR481R75dEfMmbAVq3y6ZR8oSvUGQ3NST",
  "key4": "2nsUsTFgEWWrn6sifo4wCkBVbQYt6KRTXwNsrFpxQJ4AkUztu5bg8iz13VqZw1Xb1VmpqUVZnedagd6QdiYYs1Uc",
  "key5": "53HkaQZe4mAWUdCKVSLtBrrZoHzDmzk3Gt8Mfmm6BHjzceuNNoPtQY6MGC8n6jCR9fE4zLhRoTWeHBmPqEoZuzig",
  "key6": "2cKakJpA7h3hVLVpbXWZstCn6amvExmyxXdfQPKEALJCsDA4fmDTRNNPWBNTkpRWRwNhpo6ZjK1MRbgvXdGE1pEX",
  "key7": "3FSfaLk7CFGawgneVPkYHUR2UpPkuvfp3CcQ5x3SsfStU1K5P1zWwqPGgSCrjs1oa1g2cT35fzKrNsJdnbD4Bfqn",
  "key8": "58uysfCtX5jNb7W8bpdMroWvyBfcbfXbgiaBrXzEeVCLtVJGZQdTT3jBKPsSk8nQLNCtvJgnMUk8Gj8f6tzApvAj",
  "key9": "5FSyUTXb6nLjKYd79ryo18Hcy5scwz82xefcBkKs8z1bkRGiwXHZJBrwgXue2iuysWTPUeSnd3XfnvNmGhsDq3eV",
  "key10": "3QqLcp2fCXYRLWpbt4ANNnBboG3vXMVTaBQ1d1N7ZAzfoyP5YFHn9UUgHY2fQpbnXtYnqfY6AiGgWRbuzSM7APMW",
  "key11": "CEK9vAQHb29Ajw2cYF3yFoJAqMq7zDDUBqJZ9swu29xWhzXDuTFxXraZ2EGEQJipjT6DEK5dNiSB9PFJa3tKBUE",
  "key12": "jCmXyitvG7cg3TGSSQVGbog9Tg4cvhUXdQuHHuGXPQyDqUXtZHSrS1EaejQSpfGyHPkAUFMjCW34bujhT13RdJ8",
  "key13": "29aGcievzE9uerubaFJvysGcqf3X3fCKXtYoYJs1HdEAAiwngMhAiomouebwfn4FMCKfsuw2Fw8ZxMwPrJV3UK7C",
  "key14": "UQFU7ZJZyXDEzrQ7BNLmFTqCGBuEWLg4BXSz4wospfxZRwVnvPbnJfs981FQ8LqbZTbxagFuzbyBi9fmSH2scZY",
  "key15": "2hUSn8HCWx1zaVM93Us6XoVtctSs5tW8atBGxXDkiUUbSCMa9EEEkbXC93xsTxJZyQRR1yz71MtYtBu42VNJFPfH",
  "key16": "pqq9f8sWaB6xfdsinNdjVZjGsymgZiw3kZFKRPokvZVPcbrHNn9kaVKYQN9yyUYDYsHAGvDWsz86wsKsdfyPFrm",
  "key17": "2YUEi4yjPrmkW5cJ5ZFR7AjqH1FhTWKSXvKuEQCNKPjyPLNVkg9KV96VDFiEpdVdDgnMMCFeu4FiiHt6q2CXCHTR",
  "key18": "425ko7dPC2436uShGjKtwpPTQSvmwz4q6MAbMMuiFLmELWZBVdy6G5DFEm3fkqsqZbyJfr9nHE3K9yT6kJK2q2ze",
  "key19": "39NiowmpGaCmaCpBzg871E5m44UHNfTaL6qHkLEJi4P1TcyzxY5ARNahGnFqvXyZ6K7EqTE8PmTfg6tm2QDohdX1",
  "key20": "31qUhgAVtuo1mZdoFP1jJ9isS2Bzd96LZK5rDe9BE3JxBikNUpTFc8grhoDtq7GtYp7BWPu16fMm3z77mm98hq3G",
  "key21": "24kmFErGYWMZwii6YCfXqxasdofWThwT23uUxbzmPEybC88c2zJgyhtsrwrF2qpPmTrPHj5n7qgBKSL38eff3gWb",
  "key22": "4LCDDrETudTk6hsPhJx9JEwtXpQnVK1QpEaGJ7J6HeGNcKUdk1Hs9SN2fJVBW1NMh2hEEvTXGNeCpoTHCgAZDxcp",
  "key23": "3C93ZzBd3jYf1R9mqL2HZhK3zmVScwT5TFuWCPNffrFRB6awHfqZUMV85QiaHDbjy5Br6qUxCEE8qsZMXkspzgTL",
  "key24": "2QUGwjTbfMwMEwYLUHmkGC6zuXAPHp7Yf2AuWvSeughWRi474wr9suzR2BsTxX2H58TDTuJR2XopNhuC5vMk85hQ",
  "key25": "5jF3MydNXR1hqTpVNSkKHUcXeFALpkgkdXa89vvodt1wx8Qr9QgP5QkK8LNjAWrnHzJahgD5e2r4AwRekAd3UsmG",
  "key26": "4sVgK1dcJ3s9vyJJwVipopvcQM7sWFxRtcojrXTcKWSs99YLeNDYRafAWABra1SD1fuXweSshVbhB4HNfRumKY2p",
  "key27": "4PEKapKcu98F2SzfAWufL5bSUMNk6eYiBHHYvj4wQRMrw4PsHxLdLoQuffi4rznPSMube1caPra8RmpnVWUVdc8a",
  "key28": "3HG2r7R2sEcNr9AMaJpYySU8yv1bE6oWcJiCGifySN6G5ypk23B7WHC4bKFgZm13v8GLXe4EtjEfTNkbigoMBsA6",
  "key29": "ir1Yk5UTD2BsaEuL618htXrcBDke2mSVnmUh45NDPiLWjG7LSipVgBLqZuU3dnRHbKJVEZJmzaqg1vTvc34TVuX",
  "key30": "2cVEc9nQPSG4VR6SfVhxree6KWjjase67zLQSFg6NZ5JpL26R6qHo3oGm4rfm1qjbMFDFKyY2AXAs1CJGz9vXQX4",
  "key31": "pkB1jscaS5MrrAURSWqwuZaTc2MWtiBkh3g5Jyn9tVSx7HvLg2CR78ej7sPxcieJFgqRWX7D8a2q6388qD9s69q",
  "key32": "4iWc2z3PvofTj81XfWRMpYfMKYAEXmDuKoEPkpoVLk4sz7worWX49i8aeFJ4mjpYJCBdZz8dn8rEYByxuCfGUjrw",
  "key33": "3UcgvMxvWawBErQbRcRMWoDyNS1RzTW4xvPfnSJFoKne2Ss5my6BREXCF8e6Sbmk1hNaa6oa8uKhETdcayRdb1Ya",
  "key34": "64m7MERaWbPJdpNgLL4S7hHtM4bjjQDtgPW4ijuQheNber3dahhsdZ8XnXh7msQk6DEGwZ18QkLFJUjskPLckcEe",
  "key35": "477og8KYqrXxMcFrvJcnDn4EhEXhPfJ4MMCdYHK6nZN4rXA1GjHyGEwDRi4piyELbmDW9hCEaTBnvZYtYJosnvnk",
  "key36": "52YPvKY5YF1gET8J1HNkGVCYCZMnsUciVAwJWbUBKLpnqToRj6Vb6RUgiUJyHpoPhzxQp3Vsf9x3mb5XXdNMqTYe",
  "key37": "Y9sK7Ng844boEi8CuFJ4taDB8pXWzrCTnwERoJjgJL7AbVBT1Vr4cmjYVWauTajGAyrTtc4RGu1r81fGSMCRZkT",
  "key38": "5fzbyi4TsrJQnqasRXRnMGzSrD6XRm88TV6MXmvwyDL5qDuzL5MgabfPXf2nUN1ak7q8MZpmQQd7jJAFUAQ4sdVS",
  "key39": "21mATGogyEvcqDfUm4mxgC6f5bwhm1w9uHwudVF26mp6NrMMjrkscD1vBo6mgVv2U5RXdQECMbg2rERC4DszVB8M",
  "key40": "2ANvxQr3yur9PbQh9n659B1RCAbytbWmfPHP5TtX3EcYWxbcmGzMQnwZdFzcmfmVRS5aPmGuF25sjE9yxBcRVku3",
  "key41": "2A5uDzCAujH4txf66gv4uyhvAfEH8uaGwBJa3PGoT12RZLDjvX7bXSwsoSHaLoXUETwQFoeCFPhTZpMe3vSmdVWZ"
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
