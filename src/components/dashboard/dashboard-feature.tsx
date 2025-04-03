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
    "5GsJEJVjWLZ1aU9tjKyAEqDjrgPqxxNeYem2kGzaHVn6oPozZiZyjY67XD6CuAXdkU4DVJibDHmxWhXQoAR4xSQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7RvfVepHvYm4sCE5BBK7aafvSibyuERH5cWFUmKbcK7ocK13ZiZtXtN9TiNEdkEvcjsFH5ckLWk9jwFrWZkzXK",
  "key1": "3b2oyj7vbq3GUnMoyTgUs4e3FpZJpKsX9s2F3LXkh9qbqHinL5gExWmrjJBJksjUXEJKc7SfC1BZzftkNmGs6RPC",
  "key2": "354bqZBC4mufm5ngKA3tZ4ciKnbswAJf13Ug1dtwxHR7ASN1e4yp5rJqAnhZSZwiEznmfENXXYmyu2MPEq6vLVLb",
  "key3": "EZ1VPaDSXH5rv3UcUkP5iqC2KDYdr2Q958daV7KanwFQJmm1MTgZ146HFm8fjcBejcSe2SYujVMypaUaeQb3oeH",
  "key4": "2U6MejZRScL8Mo7ezVToCmnPPswzwB3UeHFiyfVGTmPbzFytAuuEqkH7E1qJZHqBEjx7cDEFFXnZac3cXFELY9sB",
  "key5": "3P5tjq7cUS81fnEmX5LeCQx7ASBcEsyo91eK5VGJQQhMuLboymv4gBewAPu1tG1TP5Bp8Mfeuy6CHF5hpPo1whgd",
  "key6": "2ZZ7tnBrzB4JMv9Q7JLjFfmoM2p3kB3SKwc3XY8gdukV43pSmeL28BRkjZML7ZLk57hy7AMPbQtoZhoWAdHxeVTV",
  "key7": "2bki8UV6Z9i49kvh2ffSt5mSJMtNzZk6wbjEmFBoEALQypoJqeUeCRwjpp4RGK6CKTBDVjoufJfDN2roMKB6D1qC",
  "key8": "5fDZxyGkbwFckahpPWwjjusreGk9qVkhdtqSYb78jVaSAJYNWrpjxvP3gVaqcUcBNAvokUhFEYSBr6tqYnSyD2Qi",
  "key9": "FJU5imvJEGVwS8e7cDk8LDn4Qe8Zh8SdbzpqqQafGUP6FErvKXW1xLDdQaggi6zLoxtTbF2ziQUbXoYoYUmhHop",
  "key10": "2kPs9VoJMccg37z9yuxBt9eXHAdRLM7yj4fm9cX6rEwTVfTuA6ELCHCvLr7Gdz8uG5scBJZjivXyB8dGiQqK5iWC",
  "key11": "3ufzYEYpUh9udMvC11bJgqz78mNpZQQcgrhPkDivpucNFzSFT8crQdShdytSqwHDgw5wRiEzRqASPsRUUgsfszLe",
  "key12": "3nZMsaLCVHpej71HuaiPUdXVGewbf3aPvQUKyK6GtK2Z7iVxjxVF2r6eweGFQiBYa6MNm2AcTgPJPshndAvKPNg7",
  "key13": "2ohPVSH83q1jMAbbZDQSihT9qcgiVhSHTs9EwTPVoUxUjCEuisL9rv2YzZB4tRyg8LueKZs1npCEHxs9qbuDhXAA",
  "key14": "k1Vy9Wch4iHNvFxiGuyKf1NQbVxdxAi8FyDkoAP9uYzYrJvNF9Ryf1X6YucEeSuhTcnUXHundyCkRzEeW2CX2XE",
  "key15": "2s5NmtgXFimQeYMayHYN8KPa5Zd4DC9KMABeyJ9xsZFZg5hm2M7dDbZzFBMm9RVUnAa2uc9Mco5XCZub5TnkyrtK",
  "key16": "BhDX85yrmpvD1vFtkW5CD2PUtnqccmUFeLewWioeuPmFCvFWxNv1paMqRZNZ3jKXwNkh94EVdDS4EKLCxZxud8N",
  "key17": "5hBQLgi1WgZMeSxGDoWQxkUfqEbazC3bmxgAJdvwMWgUMQyqQKYoNdUw5dQvbwNdp43Jp8CKTpEV3Tng7VaWdqvm",
  "key18": "2GdtmC7KWbC6TEBYRtMwwABoy8FrwBoQmHJz45Hy9NZNZ1hCmUfRm74aNxuWqX9cqzLmeZxojPNQiQ74mcPrpPiJ",
  "key19": "52ThR4q1tkYqbEqXmh4q9UPvSom8LnTqPyC3741ZaXofT14MSQPQs3j9Wwkm32VcB7RokHwDMyKbcWToDFWUMzip",
  "key20": "5Eb8XfLMdHkkctBqSW1GnkNpLvpQd2bem1XX3KsPxsRe6RvwMBycpjxvm7diWRo7Ro5hYuG2JN3UaTUFdAXZAMsN",
  "key21": "4ejXHD9zmxzBs7iKi8iMbA5jkRDuaEMEJ4spGpwGHRzxz6SZQvJtqygHDPuyVT5Xzs8myTesYSNsNSojbo1MSV19",
  "key22": "5q2bFnfhoMEFEMtf9EW8TJ6A59wANAMeAexv1pDFPqhkyogqayAxrVcZEGiee8oKxHXk2oMcojEdZBKGAsqLHGRx",
  "key23": "491LBoWtqn68Z2NdFVvLbSKFp57n6xECh3mB66HNnZoTdbYXvBxwEGzxL6LL2gANBAYQ4baiD8KyD3Gn7K6hpk1Q",
  "key24": "4HsjnV5pJquyMmMPfKY7M6evRcS9twDiZyveEVu9VxxbLze1ajgoDfEqLd9b7ZoNcBSey9XPJVYBiJy7kwCSXXR7",
  "key25": "23etN3cEQaywXaqtp2qN65QtUmQWm7SWeB9B6HPCNFqquVhF1mcizcC833HvwU9vPPkkZ44XxF4yEsWXhcr5WTEx",
  "key26": "5XxfETPuFSv7U6qfHgZuAMd2LDSrdDm488yGgrz41SKXuAXQW1Xyk3wCAGo9Knx2kJyhJh9gZW6A4mGYdNN9TTpm",
  "key27": "5Rer8PUeKdahMrXD7Q7BHMuuFBcMLtNAGPvEsYR5sKuWah9GEiCgk7jngbjqUNHBQ76ncKzh1CpUvaNUp88E7oDt",
  "key28": "2PW6bVD7JwYaKHPcUz9E5WPdVAeV3Azo1TfPnF7NNZKSE7321P3N5LRzRwGA3ZiYXnzUswRWipuYEG7QoG5je9xy",
  "key29": "271g4jkKw1i6A9XL8iYgr6uxwLCYM88qc2Q3CLUfHxWm7LbuDwkYoE2enKKjTyqZ7AQ1uf4pWXThwhh38z7USZaA",
  "key30": "3PXcUFdQmpBcG6doMMZJiHkHmAZXwJqbccBcCEHksxQnccuo3trusvyj5DrmrEMZGRi4EbLAkydkCXwEHqygsoaB",
  "key31": "4HcwwCTXCpC6xi8bVSSeuWu8xSyawXmRmowuqF9uT5iewtHey3R9Y4TYbEvE7s6ijsh8dvkh64TL5NUmHA7tyUeZ"
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
