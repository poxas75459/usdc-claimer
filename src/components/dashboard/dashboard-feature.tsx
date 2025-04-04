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
    "3D48kY8af25Mxn6zds5nEu3rnM9iU4qj25SXR6j7Ssu1KxSwb2odiCeago59GxGSkA8yp4kGwEwTojUFTgy6LJbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BY42uQoHTi8Ri3p5Q5xAwBb6x1vBiQLsiECdkai5HBzDTXEYoH7y9nJHUjL14r5QkWtNCDoMxFSvBocm8pfCRw",
  "key1": "4diRM1Wxrc8vAHzH98JxRxkLRqqUXSV6dRSeqpoMDAdvTmVySjWGxHgLQWkES2y1eT1SVbbJRZoW3wGKWzCFpYUg",
  "key2": "3LN59ZeMw8gpnmozgqkQDoKQcUUWztTKK1e48PjuPToRdicagfReguEMMTu6gn2P3bKdZVyc6bDtj1M5sTDU4QHZ",
  "key3": "YHoWpXoAsg5f6X2HXr4QJYFEBpuvToEDBxoo9T93CX3mACTNioQvdBzyrpHU8hbhLpbyWTECamp8Wd3MFTuXMA6",
  "key4": "2fCZbS5SFe1H9uHco6JUyra3U9fY7izgogDa5zXsdPzVPWRT4QBJ7b5CqQopUx5sBHXXkZEXkfP4eAdj8fbN8WD9",
  "key5": "imkraLhuCm7E3X7jg6r1oJFimP3kdDxSzJb3a2L6oTCzqTghAu8JdYe53byCeG7o1zCmKN3NEuwKqdsEfGgDn1w",
  "key6": "3GwuSKceVc3UCLjdz87dkLgKjwNLZooSicczrGQEo6xRPhKL6e6U85kJeC3ZtCzFDw5pYaQhHwByUTABit48KV4Y",
  "key7": "4r8nwtY9u8k93FHfoLqnY4Tbgt2S3TENuYsvbSPvcKPLeCHZ5cJ69vnT8yHZUiBcAP9hpsN8Ycpjj97VUsekgex9",
  "key8": "383Ww4B6FCiNAAZWk5QC4RyqymEsDSNC4LNtCvoDTx6wANQiGuex4DH8pfoQBWusHwsitKaETZNBjHFQ4ak3vk5o",
  "key9": "2aRhWtzf5WXkmcMotn6k7sy2FimK736xfznv852y3GLFBvWaWrSLYfbpnCWn6L8a1BsPsWeyasqzRVqR8mrRY2s1",
  "key10": "2aezSeFNNZxs3vq64oSxHGjE2SyVJ845QUqJkzVZKW4uhTuErENCpH5P42XKBZjRyR6AXx7kvzWwZLftZ653Qxpv",
  "key11": "5TL5ZC2r3DM5e7YfWbzuN7vHcm5tHDKJJKt5EaSYX62s5F8v7CgFC4mvr6Q9CRmJocbb8rEB1SF6txwaMDyaYAHw",
  "key12": "2Bkpd5Sd7faXYezmitZFj71MZAikuXVg6uo6zaNEj9DHKjDXy9ezQpUWS2JXqpLSGZFxpz254AumJTY7XuetmeRr",
  "key13": "54qPEDDpreTVUYBuc8kbwAmgAsGwiNH2JYJZ8ijrawLu22V6FBX8119jCZNQMh7e6rz8BC5Ebzsir8DrcTCqgg6z",
  "key14": "2XqeKq3mQzBKN9QY8suNp5X4Ykrxhjbi7GwDypsRFLVkuN2QcqFUbx3MfKRQWff1BH6Yixnb53rDojJnZ7baWDu4",
  "key15": "4DWzWw8RQA5zrdBbUHPH3ooBRxzZ4cqPMDxpjZzXKSpggeVhPX3tE3T2DegWZuhMc4WkFkmV7F8qM898NoCPKtPa",
  "key16": "My6ohY81QudzJsNfCeZunitwBsFCG9ZdJdjAg3WY1aa29NGXtYLwY55BXpwx5FxsVd1HmVJVwkAHmR61a5UShcs",
  "key17": "5UwXCztbHCYT7yoexahbbCJWHiHXhvV3PpyNwE4qKQjzo4QCWmVisRpBSYjqKR6pfzWo6xDfsfRcTQba6h8TSXPJ",
  "key18": "3YrsJUFrvEwzn4dgdMAD1sEqze4PznJtgVkK6pDWP8sJAveoLqpbJ5Sk6tVf3QfiheukjQcsk8y4TteoSLgUWfTE",
  "key19": "42Nphv2AEoyQqThWYLygAWVn12UqZ1zZgGG4i8vE9JoxX1sTzTjgd8iHCmDkDyGvuwXm43NJJMykAqYFKzAw3URE",
  "key20": "2xzcgq2Pr7gWbuM6Ex55fEfzD3NHcUHw1Tiss1qLb5LauwQSvQwqH12N7kiT9Aj8pwXDATt3k5J7yd2XVh4bBRub",
  "key21": "2Pb4zbU56UUk7MeQSX362EPxw8vdwWWVANo3MttZJcqKqwDdwNHtz1TEmo3BppLMcNFxb9haAwakGsmSuYDyFBdh",
  "key22": "3WgB5Eu8rs1c1FxSY5L5vZ62XtVpkev46FU8zYdcjMWjbtkoMCBsFYzNtmuMsJoWq91yEFJgR4xsn81pMNgpigt3",
  "key23": "37tXSi7DRZFhoi4CJEcrJZX9RCqJvnFPGgtmQfQ8rRqeUwJvfcZHurcRuTTdRaGoaVagdJKTdVFsgAv3eV5EyDoH",
  "key24": "3Ss6jVmMzV8EXswKWcsBUjUukSrLx7Y9cTfwbDh8aLTLtM8jsewuWDadCWNu8aMSko8CGgJTYnEfzjLjGhKnW68V",
  "key25": "5d44qxySjiSUU1v9nMGAp9QwU72Xam7TWUxeLkgznsHHzd425zt3PR7t82mhbpCddCWVFNWekuS8RuKu16LnXZQr",
  "key26": "4DLHHPpDWdsiCZZvPpgAt2UTSP7wNkDdCFkBRBqbitgv7hNT96AH6whCjcAVCBKZVReQi7j2DGNhLL77ynwo14RW",
  "key27": "5bsvPUgb1Mzt3JZKVcexCACQDqRRynMfKhcEsEAEREWCGaah6dcxQ3bCGN88d6YgvtKPa892aDMyBcDP7mjbUxsj",
  "key28": "65YoRu4VRDeG4fwiqKJpGFkBpMYQaYmEfRVXGobxEsvxHqTV5QEKK72K5AteTf68UuPqMi5rzAiN9HGVtGQDgenb"
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
