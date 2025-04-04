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
    "23B22AKBEHf5YGfXdz9XcSkyMVjeUTDTR58gRnpzqKUL6XBEeSYLkn9D7FXHbf5oCPeeYM56t1qumnQVdL3rwGgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46XZEwGhXUxR6kByY5mC6xJt4HQtDMu44hAbbCV4T8UocuwM1wKHSTAqrjMgcpBrepP3ZTEhYJcSJ817EzZ2WPET",
  "key1": "5EXY8UiCrtkWQFcL4xE6vfh3zMRmwjz9ErsyG1ZPAGwxA2yvmKPNttVcXFL3k4S32W3eqjEVakDTZbt9n91o9CV7",
  "key2": "2dvM68ZFDVxZQDABHtzaNU5wFyTFUetV85byQW4YRZm1p9sAxN7fvr48jGTmcvAfwYusS5jMcYgnBFp5WQGd35NP",
  "key3": "37YedQBrVkGvBNMPF5iNRGExhYoFqzgZNrzpj11B4MHiSGvE1zSYVXKJ4gmDsPrWn6hVNiei6ysDVDrjdF3EKBCR",
  "key4": "3C9QjBviEU1Y7uaU2sxvb7VmRRMwM6NxTDcnrCoFT1y1ZP3kSex1DEkKb1GGSks3cSkjMgLWYWVSLLnXAYwzbdN2",
  "key5": "2jG2UUy7Az1Ly6nmApuCneyX5jo2smToMcoaWs4YYj7dFiLmr6oA34QrVk6fCfXntcHxg9JNZcH3VRsxJW2R7WZv",
  "key6": "657wZ3P8atrtKaNAasx7dJyAeNw8wgqA5deMsAAT1naX9uSCpduERRohY6q2ah6k8uErdniuc2VGvBjCePYvZ8Gh",
  "key7": "2CuNyPdXWQ2GgyWEU5AYq9FRhB9NvqJvgWWt13QHitEjUQ6inZXMJQMCLEDrPvTwqdiGPicQVSn2TBzxjggxgVtj",
  "key8": "3CWWjpZJqTYxobbDAKNAwgRBWjXi9r94vv1kik4raZuaQF728BpT9WoWTHGZqzvgt3fyv2kPuQmGFQ3QwSamWxSV",
  "key9": "4tuoR693VbCYZghyz6cFSUcymyu8Vr5kFX2zBtAKtwzR1Eg9jpq3MhBv26fvBrKS7T3DoPM6x75TE9FkqtnMiz9q",
  "key10": "4SZ61j4sGaPtNPbtFKSLboHg3W9X5SjpXegqGf2Jj1fhk39KNjGRFMz62nXncqdTPA5wnaBZKbp8cM32c8nNbZxS",
  "key11": "5BbM7vdY7GQHxcZKALmWQsJDWXRMwNzC5DiU5SNcFNdWVDtdUUh1TmXfZaEo4wR9dnJhrkVQ8ePPPrqWDhfpffJw",
  "key12": "3TnDGA7ZXgpGELeWke3YwMe31TyiYaPi2vjp8VYUgwsvoGGRQvWSC3hzGn5c4Zg9jLajpENNneJLgjToqjcBLgT9",
  "key13": "3ydn5JkXrz3odCGwD7MDf4TkF5R3MkEGrcKmojuwnfBEpqr9ePdBsp6TUrQj7aCFeSgDZpwZP5dVpCs2ed56wwxd",
  "key14": "SeVEoRNAZ2kiQq2jBi9rBco5gNrkbGwGUEFkEXHQknfxbQWdqyXXw63hrSBCMoUmgdEhWem1dRhR4a7Vhw66EkK",
  "key15": "KG85H7TnDFj5XQ1sfezJyXjLXVkrvSzWHcTVmUpMEQ9Lg9YhqMiECTBKV1Qt5NisyZN19haY4gy9UbBmwdqbCui",
  "key16": "38EJABCVdafdrk8tvwkn5Aw2pKjCk3XvXEDrSGGAi7mat9TyB3gA1zkmcthfRHgj4KRPQLVpKiNhW2Aqd2LyxTYH",
  "key17": "qLDpPvpLNewomy7rsgYn5UTVaiKFKYcAJaehYJM8v6ZYm9Ebc32VpEATDdT9XjEdmEsfwV2FFCgcbPGWZaEUnWg",
  "key18": "5Dp55PsDkSUXbJ6vFXAQCAbud1vTQ7j1gGm7j948cCBdVocTmmoFxgazgUPo4Hj4kXBsEbqdK4fZkbKVgybgweJE",
  "key19": "3oTR3yc4KkqKSJ9dBY2LCXspm1j7EpZz7Hc5vfCp1xs8JbuLeE5EqFruDR4ShsxUopQKiUKFMWnMJUvUa4fghBTi",
  "key20": "2y7DV6kUbV73SLGcsmahdgQMVDAef9o4wf4NbQdtwP6gD67zc38cHWSqafrvmg8XQBuUyuvdCjSnZsGDZMnYKvko",
  "key21": "dxcjDaBZRbTXbQvVYUSLwgyfPv4M17PysLUf3BwtyF2vstrFHtkxAvxPc483dNkbKWGnCbTwX5eS1qy57Xv1j3b",
  "key22": "37EADMx24oi919fapva18zUgLrY1ZLp7duSUB7SZEtM6jhLX3CeTH3BvtJgBNisw95ZHW2tqgUAxVi3Q4JiTBMgV",
  "key23": "5A9HFKmTTgQdtoEMQZrDWBRWLQGUc5DvzqSHwb8ZeqSd7X4QsYU5ACW5NTiFFqNfQsu2UdeUPfP3DnpYqJG2XWbB",
  "key24": "5q9zxAV3FvKSZ9QzR3dAbJT6sHdmpc7MGEF9JvZPFsd5dvnQKvKTbauXhZ3x2fACotxh6LjPUc8nAy73b9MKLWBX",
  "key25": "4PtGKyykumgUJ2BeiHij7ACQW2HxKfB6UnfYtcYC7C5DjGrnMkJ42hgjt5kuuZmRS2RrS57Yp2xRV9yupvr2phQX",
  "key26": "3BXNz1S5kMbmbapuN2quW1y75TvCVMXdMsCS7pMqomLYq5D81whKZYWww7x2oqfqygDnQSsFgL4YbiAvKCmJYniJ",
  "key27": "nS6yb5CdZqFC5us9tziHCmr3pR9uJZ8GK432dts1ADuCi1XDFGQtMVLE8YZPapWGNiLJL76xtySHrabfgt8XXyN",
  "key28": "5P5nSy94V2RqdbS6Bm5QF6tBThThp2Rvvx3BWuuCjqubboP8229uxVJ5G6H5zc4h9is1nVNRXo4vLVtpEdBwbapu",
  "key29": "3yg7ZGsuN3kbmAEzSTp8uADAo8SZ5qNeEfA4wa9AgoPd7qE1F4sof371ay6YD7ZVbAPdFoj4RxiFmkzt6e7sD9p8",
  "key30": "2YR8uVPSzLSHGiaW3JZXzYVEkc6sKwCF13n8HcAwxrVwVuirkuTV8PKAwPCsE4pgHo56AGv9NLicuJEuSAogVfRf",
  "key31": "2p5aqYjd6HpMXeEoTyL6HeVER3hGVAw72rQptFQeqWAoLTxHzoEaFerQu8RvXMybghRxSGcrKPqNU6p2wjunze8a",
  "key32": "4o4yzxSKkXQGmF3443DNoV7xKdm9gNgwq1JX6FFyN6LZdrB1HdMrM7N4qoqWMsEViwXAC27oJmBEUoUuu9XeQ7u3"
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
