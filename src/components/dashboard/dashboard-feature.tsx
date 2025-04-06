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
    "4bmw8hxbRqFfrHB2UdhB9po33ajR71Kw9kpXDj9g5uvQWkW2jSQGX2TQYLosVfrnzRVQsEGbfDLtQqMGszzuGmaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nK9ZuswUXWGRtGQDdtSKevAveFZ5h3jKjQ6qBbQzrw2K6AUdBuxRYpSsqUmS6jdshcvm7yQDxhZsZC9qWaWQ4iL",
  "key1": "2ATk1P6pwoGorQt8yLejQGkB3UksxjD6KR3KCNT6psL7j6gKR5MjRd9DD5fTFhXbxprmx9gwsir7WbnYUnsY5hWZ",
  "key2": "2WaBPMi376pmjxfRmMEN5uhqARcLae5NHmD3WUWZgmvPsDow49DdrbkjQHzdPrS5pfvJFkk7AhuLxdz72u1NW5Ac",
  "key3": "2gM1xTbTM3B3Q3whf2SDuS9GQ5rvuKCbuampZ9Zo4rTLfq1iecQQicnUF1Df3kGbxz3BBdeyWqs27sZwLRSU178o",
  "key4": "ivK4KrmDdPgTS8ujiHaATwHTfJVJ1hbgxHe6handdPbbVZVtqehmDAqcu3XXan8znTDGoGwpR5cfpogiXoy9yxX",
  "key5": "4QLmV3oZJ3pZUhLkcDBo7faXQza2E4DCeJd1C8GAU59VJPEdCowdcNT3VUmUsPCRf2Xwykb22pMuZsaDLLsWL8sf",
  "key6": "5Tjf4owbDxvRSRpvtThBAGdVeQh6sGCHjqAHEVDznQTwmJP62cViHxBNGNrGHS8ZGH1LU97ALpRRqF5ffNLUcPsJ",
  "key7": "5sv7qaXPNM3SSEiDaJTjipEfSPm7FK4BduW2W8iEdUkLK7qMKz7MzNDiN2HJdbk5X8cWY3QoaNobqCHFoV3my3ab",
  "key8": "4uXdfRA1SNhVcra1msNnKeBhYX7zAzqu2raBYiMgxGLiQbX4qZKGDfnFuWgthv7y6PrwwdYTDqV8342YG4FYT27s",
  "key9": "649sUcnDHA4crodwZvKTNg7uH9P43jMFRHKzqAri3UJziixvc98DHNHYmdP13qjQK7AUaKx9qyzSB4GxMKg4uDRD",
  "key10": "2eLRGYujWgSUr6fu2UxRAwDPbhzGNZ1CcnJNTmQ4mY27XiUnGdnRycksjo8fsLGEkehDeuKFuYZWjsmfZzqioB9g",
  "key11": "56wgGBHDqtAZsxUbo2fWhFKN3XD5vZfKoxAfs9AjVMYnrC61c7rvuZTo8CFXmpkCbogUqjoD4YsRr6HmkMXUkHoB",
  "key12": "4btZyYxbb8xxpKGHvMVJ9YmEBgNNAgnnKBTxZBozxxSQecSSkdHLSFsy99oHXdKx87aKwKsDx1rmE5aNZCf7Jh7g",
  "key13": "43JgiKWtL3bVMTcBmXjJm4dBv77oHbNiB6Cv2kCSjcNkN2PdN7NUZphHSJejV2sY21mJY5iSRoXb23355Rdf8qAp",
  "key14": "2E6o7xtFQ3wwoNg5xaWNtvSB4EQ9Msq2VLGCa31ZuX1B48UhMrwdfmLFVWgLfYDEppqhfbQD6TRVP3NaXEewx7gR",
  "key15": "32KWYXPYtk8RoYHzWyrmEk1NUM2kG8md1aNgQxqThjWtHuSUDswXhpocbxvQtqzB6KD68EkZZCsvSLjF7K19C5Pc",
  "key16": "2fYKhQDzicaVEMj7qDAmHFqijDQnca1yCDuyZv36L3TsaLEccMGXXoMeyNaAMSFzXoTBt9WkgZN2AkX3xmrGuchT",
  "key17": "WvvCitNsWhjWpvmor69akFLovqiBMyA4SS3SCnM3LF7mrn7ngQ7ZQ4G1CoQgDhW8V5Lr4Z4Uks8zLRAtDiqrCCw",
  "key18": "2qxPASF2ZChFUtitaZ9Zfhnvunckugi8FJq9FgCNasWeK25e1LMCVrKHLAp2TMWyQLoirEQ7bzXFinMHKCm3btgr",
  "key19": "2eVmNj39jdo8jz4z415ZDjpqp3WihToVtPBNULWCqmJijaHTks9WoimVPDXA459M6DrkHb5iw43xdZK5JGZPmT9o",
  "key20": "4PULywmEi2BLAEu9FPGLwhz3upWSux63MH6fVtdYbB5TjMJZFGQ2jveiARwb9c6biHN4fxFEoDS1zpf1V1EpPcRu",
  "key21": "2MGribsqYxfEGmwo8VgK9DZkL36wWq78w8uP7XX6jDNQ9tHtPNNkMPfJ3y2yNpDqBbmudVUxsoaFE3Ugxv9YqiVS",
  "key22": "38WJbLPUEVwEPJiBpQ5eivTKk6219Cx1Cofs1gnH6AXcnZGpo9363ESFxGBCMB6AnSoGWDwPszezryVF2Rbb9Zf7",
  "key23": "4q4PQ9m3dp9kc5rxDGZSnbbzuWXCr4pDv4f9ndSG62VFdGoYzPJVkddg1eZDbwZo2PYcCBwazPRMQ8i6XajPsp9L",
  "key24": "4vFEkVusH39zFTF4tUT3Vhp3RWuaJ2D1WRwQm6JmstbtE1T9bHnNR2Fosm7VmoAKXZcVQGBjgVnj3Htr8V3EGrxU",
  "key25": "51kPt1rJzRLSYcB85jH6CdmEBtGvQV6tJsDT7ngtFwudkYEMg1eHmgEzHcXQtMv9TUBnPVKRscp3ikSCbk2sEtUw"
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
