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
    "5BpvMmWawCgrtfk5Pyq6siuM85ASfdwSuPFMPErUXNrDQwrknabGt4pPdhZKEwEFTwZb361rfczVjfN5dN9zcfuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hSdUTyXGEhY6WXheMwCAM1sQqJWsJJiaZJgA4TWpqtZdsRXFDrU6MJVZfzGeJbNqgFNypQwNWhXL1VsWwLZpPMn",
  "key1": "5Ss9JaahLqdR5SNsd4EEa5ouCFbv9tbL2akUCVsTpVTcs7X1CUa3PWbwRS9Ngo3aSAVPku1FUbvmBFE4rArHpKM5",
  "key2": "623LDprdoMnf6HG8vdHNu4WdrmN1C9KQJPKBH2jf31BxjShseYsaSfkTrgZr8fLjYRiaQz53Bfb89G65HebJRei9",
  "key3": "5szSQSUogE8S2s1PFLCZqsZAjpHHJ4U24S1DGWg8dRDiAfXGt7RSJzm4GWAakEU5ynfR7LvXEpYoWfBJ8A9rWFYz",
  "key4": "5QVroV6FZnmj166fUTK99YF5tjFoPZZiLm9snaf46y1aSMEpxUQZLrDMcDY9GVyFXYpkRBW8rZ88hwinZE1q57c5",
  "key5": "2zAEFKzzU3mfGrqRJbz99XkcTm39uSmfrXat8DdrpzMc6Z8JFW1tPVNEBUbk98co76gzxf2puRgZxYcFc76LFHUR",
  "key6": "3ZTECjc8wYA5G9D2KE4PRhytVtxbAodcXju9vM45rWUhju2hgGuFVcKKP7nqAuL5EimA9W3pvoHvHjn9CYTYTjZv",
  "key7": "3mV4Lpzp9TNkR5G5DjVE9YPMgwdLdf83qXhLYARsEkhSmAzgHTLfTHqD7xjfde71xkQaxq1PxHQMAQXxhubY3kmz",
  "key8": "4TvainsBZBLUJNCfYJLTicBZJtZXcxWmxWzhJFKFA2uthbJjAjoZ6TqvMtkEijdSkfpfU3o8XdZecdAfLFKESk4a",
  "key9": "f9EdQc9AGWtAzQfjGKr5mzdEeWNqWXsPvYgcgGsFiUAcaYUTnWnx7VBYHRd7TBtR8RiFD9yXugat42G9FtpDetU",
  "key10": "5H2niVtzK4cvxQKZfzLu1CKefBdeyDcyPXjB3XwoHNzbYiZBQqLzKyZkLNuvC4duQN8ig6vLBAp66f2V1YuoJk2U",
  "key11": "pJQJQrdyrtKvfyTHNuEdSqgb52jBp7izvp4HnpPnaTLF5Q166QektT3pyxTVCQVaeUbmrepXguD7zqTCdaUo29k",
  "key12": "5bmWjS2sjsBQa4kjhPAe5X69Q5efi7SYZ8Wu8vekqMvUZHSyW5EpeKCJmdxcLZetjaPhhxde4btNeH2UErvTAgE3",
  "key13": "2gtrVEfmHuksoZ8h5YzZn5veypHjFV2sC3TwKmna2TTof1bGoMSYa4FnTXLkHQNmLDaXzkVuYcbju54CDz1Q2Y1K",
  "key14": "3B7GGMsdY9GzeV3j99cWUYTAiUrzr4raGTq6ip6xpXn7ShFNSHCCxBhTHvn4qFiVrBCXgt6HHxKXcsxYnz69q46",
  "key15": "2bC16SLYq8Q3b2deG24BydZ5DWtS64pgswRwkqZrTBrX4y98gbWejAzm95xXuX9HPSpnWF9ccHqH3cUHGBRGta7C",
  "key16": "4W2ME6kg9VhmCSHxxvaHgASBQvjgwPnBTcxt9xKGyt3bkYHQuoAQqPWbaA1uybNCDSmGFNuLXKAExhh75UNkJUGK",
  "key17": "3tsg8Nk9P9rxzEFKWqFnpC232sH5NbEfKhynBTRLvFKg6T6HoYCT4YU5LPsGdEUeQMLPxRfdhPu7QPXCK8iTLjYD",
  "key18": "4WjsVdpvi3RjeiXLyRPUT4pB6FUFepjCooQJrqeXUSLUH7BtHaVdcHP2LdGZNZxXk1E2JdtQTfvQsadFrqH85P83",
  "key19": "3iYAKcwNJZbaqByZqrUEjcufwG5iVo6HfQuwjw1n5C6L3zmJR7qgAF1rdUPi6ZPmPXrQxUfRMd87i6ReSqHgvvf9",
  "key20": "2ZK1PSQT8ckqo5z986Gh7axgg86AL3v4fn17hygWdenTHg5k4gVw7ba9TSVgDv5fid58cbhV4NnEzuDPt5PKiqgD",
  "key21": "2jJ6dU3qPzsAtrZ9qzTUhN7iC4UW2MaWZjHYfwYnUk93o5EEVdPJvnWEBApvKtbWBM1StwrKGenkmc4AHqLdZ4Vx",
  "key22": "4GLUf2sTkJXAkg6kLQboAz5rPBm6fTQbwZJXrYHVjFtxCybNv9X1dsAucrXCD32pEfMCTCSrvwQYUyaLZbbAbUtm",
  "key23": "5CtXnaeMsebnXMYxhSTSmGrqQTW4D3A3mUByA1qUBYRnei6ReHJaXTKxGxCyQe4C8jAeGmecQSAtS3tD2SKx8Vra",
  "key24": "5Ca1CDARbV4aEPFaPdSj2LAEUkziyhMNZr4BFBjHtTFGS4PPx3vFXLJsMBL2dwcG68tDv1CZq2U9kwr9aWGLotFB",
  "key25": "31twuatBscEWASCE7rVk6QTvLncAAMQpoi4u9FGdj6gNMatcCWPqqiERu3yeduS2xeYLV731P4V236A3TYmPZgKE",
  "key26": "21vDqSmAjPQYprheQ5KD1ZiGQ5QqctMaSr2sEAuKbTUXruarRte56YxaS9uuqFwjLcHwoLRrgJ4NrVd2VyU5HGaB",
  "key27": "CBz377K1vKZtMNQysLVFwZwrME84ybpbV1LGuXBHdrzR7Be2kKmrBQ92Jg1ASKPYqxUeihy4ep1mrVFYsAkNFQ5"
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
