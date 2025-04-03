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
    "2wiQ6MqxYEFE14nZfXHEcP7PJKS6x8W1tXovdCSD4EM4rf9Tu7R94TMYgynh5NX8ZbX5ZQTkbSUeX98mmLAuZZWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jiYa6uP2VH4Wu4qg3bGe6Acp2RMUhFm2JKyaP4bokwVx9iB1NQFpy9aoAqG1pEEiF81wM2865hjXuhgALEhCpgu",
  "key1": "5hmKeGbqkE7ftdYhEXxbNNsmASQb2cHAeRSn392mDeBVMYxPLjFzTx6FB9e1YktAQHm9pwsvMANvchm9QwnyZGpJ",
  "key2": "4bnoUZ82Wye2Kf6MKis9W7zz7AARofwHzkkNeXiz2Dw4ZbsM1P7KKVrA4Uj546BGn64TZp8Zx3yPrk3tFG79TXkM",
  "key3": "24tF1oppsLqLAJHfPh6HM6oRP83fU6kWLA8eLSwaGnEo8TqreHg35UWiigHtWJWeUe9thiLtDFon6KX8WvBMxqYm",
  "key4": "5H3VXbVsQYnE8KtKoZCsT9DgAQvXgcEJMcuvQGawKv1BpDBa4MJPcbo91N5xCHAr1gTaU5pJN7iMvE2N57XGhN8S",
  "key5": "3KTTxZgw64Zkcup6BAJGqWGGAXcgi13XyCXg2jxjCXgpw5M3Pwn8CMUAvv6Nxsdggs7h2bbLuPKCrLscfGaKDrdP",
  "key6": "2FaoRaCbSqexHqoKgjKo2iXuSyx2xdACnw81wLE2q5cVBk6mV3huessbN5zDF4mx6oAVy8ZSPTcFsx6F82pgmwbT",
  "key7": "4ZhXAHQdhqMFAiSs671Z8rJhbKRqMzRBwJdtBWqHw7Zp7d7cCUwzU9Af9XgXehdaqHMGi1GYKMgvcDkF8pFbff3C",
  "key8": "4eAxtFGaDTFwLqJHAbk2hiBwuw1qejz4vRmdGNKWmWkRq1YsGXYBha3R3FJxuJLFeZVhSDN7odmCXMK9ggJTtjZH",
  "key9": "9X9ZCfJ6Ngd2e5GjcjFNE3CxE13YLVHv3t4qVkBXMM8kHtaQsoViMgAazrraycgh7rBtPaYPagkhywjRfaiMgsK",
  "key10": "5awzaNwSJajk1nY2grSqJ9dGFJAksaDxYxTtbqhMgDH5wbar2gQxVSZx8k8tXUdwDqTAiiMx16ixSfqqo4evWvpR",
  "key11": "2VJhBEfCUevySkHtJoNJR6ue8QLv4K1M1QyjD3EB8jnpWzULwUFc6zCtgcWxUdpm2D67UFZSiHtRpzMEZ7vC7d6p",
  "key12": "4K3AFZEFT9hogaeoLH73z73LcK5bqrXLSuVno4DPJfQg8yr9ZAPEPsYTSKa8ASkjwkGHQgR8k5q7uLSHkbEKSZQY",
  "key13": "2pADmfmcEtArJPvenuWFxuz49VppjaFfWCJ3a3UjM4UoR4TU5DriE6ctVBVQWApFTT7GhFT7LnW1wi4EQEmSVeS",
  "key14": "3UzUP2w5mF4TscT4pW8M5qaPU6eQpgs8UzLJUDiYcQkFdguByxCAsWotniyvUGfrHdRdQ7fH9CttCBfXc69Guaxd",
  "key15": "Avec3o3UQxkwZsjoTQ2xeUmzknwEKfZs1uvSzPvRCBs22qo4z3RjVipEFnYh2iCmzKqTp9yPKn6wB8nQ9fC3Z3y",
  "key16": "37GwJKuU6sUkvBHD5QrFwK6iZryfSZBPJ4xkRRAZ1QdQA7uFoptgFPkDFpfjzt3XyWpUo8Aab9m8oD3jLHQAkd4y",
  "key17": "4p3uQYonoXAxGDc1gGzrEvPGyop45z5P4fVYQdgSLSKiso99VNyXCPaMRDwv4HMPoH54Nt9nG8SyiBAJXMsaE6s",
  "key18": "2RkB7JQp7AjCztXrpkGXD1vHPZEvrDkLKKnotHJDoCvE1EMdGgphhCnCUmxtUPR9j2peE54tEYibNTwH8tsj7uAf",
  "key19": "J1dcCrmTwfCYfSnPmqF9Ygqp74JwmfGV2GfDByfMVUn6mH7EyTA6ZUP1YJxtuq1G3dt1SkdwuU8fPVQoDPzpPjx",
  "key20": "32TWFe2DrCU5FHfo5ipRATWG17G5N5ht9Ki9fBmuTN3cEvL3X99sxZDA7EHZzWPHPX5McwCRMyEF5hFeM7E5GpcV",
  "key21": "3w2BMVGU3xgamC656vQdzzVWbewuzbwn3YwmR8rNkgFDXVUvbzDr3Dg42xympWeVPPQhdDUeiJaphskSLiTHeavK",
  "key22": "5EVQXkAZUnDMK3ej69eJGF5PBG4Ffva4uQANQAxt3k1Lmw6GETvzeKhepPywxevRiTcNcbKr9BoVB4V7bwaGrMKx",
  "key23": "2PZ5nWM2xwiLSxWq2pftpsvESD1hnsy3S4MBsTRDwTE8Jqcj3EmRqQfox3pAzR6CjbbGBtADatsSvPm4N6okbXMi",
  "key24": "fNERpXXdTDkHzxSKhkgow1fmVjqEGv5ZQySX621ntMNLKUNtrqoCJJV8HX6AD49LsRFpmHdWjNvjFMQnJAxqdLz",
  "key25": "R7tuV2knX6Znyw7DDsUXJbFc6ASPoDqiSSg3UuTRZyd1jwCd2h1AMNFub34yK5S52sp9vsC1pGuPCjdFBPnFK1T",
  "key26": "RGWEoLWovnRLqosHMXampWJXQLn4aKYyEwx3XQw3Y5Pkbyc9mGeEr4JP2G2r2Zy57BB6LeM6CoqpUkZ11VZnydb",
  "key27": "LJcm3i5VBXKtvTUM7rT44wcR8vsCQ9ezp8upMQnmfXEQW1UvJdriLxgdNz2YLxjX18QdM1eJduyeDyz5THNRQnZ",
  "key28": "3KTUcVRXmc81CnKwWo59G1MbSGNYHdcJBUWFZ6PJAx3fGr9dtNYLTurMKhitG4fYTX3oJ7qKFDYurXyanNcZkYVC"
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
