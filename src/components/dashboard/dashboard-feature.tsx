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
    "5SeTdyrBJLYHXazeDrHC6kM5XpU5jXb1mzLQU78haiut7upa4S8ZqBHrqHf5V6VTVwBNoxcKW4dizj78xgWRJbPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aPF6HtN3bYyveAeSnjnwcfLsaAPJNvhwDcho19NM4sECAjJS1mKRsn99zBP2cASwGywDUqbYJKuG6gzi993TGQi",
  "key1": "4fyW2iaVWgTifTTruoYuKZUSP1GW6YgZQyffCnnP28b932CQgWoRsjmRHN3cuXouGinrk3hXH83RuRveNh5sJSUR",
  "key2": "4z9t3qvpcuQmzWzFeaUHaiU9te9PndAtKubUoeBuiaZEQkU4Lii7aPnHgVh51Q4QwUv8f5YCr2z74FufnxGFkoLZ",
  "key3": "5rbV92djH7Mr8fHU69VPPQ4QSya4zSTR3MZdt4JeD556sX2JQ9Zax2pHXLBBTq8i3xkU3aSDW3EojkrzQKWgn5Vc",
  "key4": "31wfHK7JUNxdXwjyDVYDv3Z2iJqbXrcUNoGD3SQryCDRQXKmJxPyy6YJoeCnqoWxkPtWDqSTkomG5MiDGqAbTzB7",
  "key5": "3y9PR4tDxZ7sM3n1fUpEcXQmNLJRxxJ5CFnC6GZHStsXN4ZKxtPL4aXneAwzeYxV9F9dEbvguptDV5b9VyMLWrwV",
  "key6": "2kymji8QiUHi8A7yeBkZWQMMTtAN4gKM5mU4kPuZsdBMbkivfwZLpPpb22iaJ8hURLiVYY7XuC5QMp2H27kyLukf",
  "key7": "2KzE8v9ktMiXvSe3L3voNLBaFuLdXdh9G7Dzq7D3GMyqYRKmTMzfoFRfrCXkq2iyuRyq3jvkhrLiFhnWF2y5G4Bc",
  "key8": "3g42mRjy12CpVuiibE7EeB8yL5PchF8nqpFZzBawQ7D3ff9kEeMSP7sD3ocMn5Xhvhc7o8fqAmQJLUe7CFcodKyD",
  "key9": "3gQPGwPNpwVPvXvc6X3q9hCNN2KBD8zQLrWGRsTkMZDJdmyCzH4fsBRc5bCciZtWPBN9oPuFvYXLFb8bdeNuqm9T",
  "key10": "auMW3dxgvFcqj62ieRavsakuJwzuZJRvYJrobaESZUMhfBqRBzYgS69TUfeNLTDCu33bsUcRB1zSEJpCzY5E2FN",
  "key11": "5rCwywxi9rUfaebrjdsExfLZMtF8sEMM3hRqMhDDcmA92BaeQRtiVU5u4AubLPgqnrgWe7yVWsx82qcKB72pefyE",
  "key12": "DpPQJjKWGmt3oK8mjUsyjRdRnu5w1z1hDhrTAB9iTKLKEeBTjauBeMyEeH6qvMAZ1FL9M9QUD29NWp72HaD1Apw",
  "key13": "3fsqXWLv4LDpw9tdrGvqNY3DV8SfVcnbX9o7ist8gTUM72RuhkGzLt9p75p2rM2cCatie3vRv4prmBWipBYHtaXi",
  "key14": "2tv18p8RDvw8ViWSJYTfNpVm2fT5huyGtWLcxsgQ7vvkiRkj1rkiHDwmkFJDSBTEUMHc9txigySFNytHPYJWjjM2",
  "key15": "29qkqsJEWo5d1cE3B1x8BezVRsDgWNvKrgoxrZkUZBxzCHTtjKUnGkv6vHxzkAquVUvJyQauQkCUxE5et58wfBd3",
  "key16": "33KE3ncBX4AL98J3d2fCHTwSEkgMqXUxUX3MDgMt5C28eNbZRPGmc8YpQ2TLbmQr2e7nypVyrKPVg7CqHJEzXV4Z",
  "key17": "zBTyCv9WmiYUCnVtnFQTbvKAMRhgQGF6d2WS3MeFfropAwyR3RYo5FGMguQbPuMAR2rmhQgTfM2cSworYorfxVC",
  "key18": "ZA6ejREHsVv2uTQHTkNYLb18vMaqdY2S8NUzGmQsdQ5L38toZqN4UHssCW3dw36NLe8y4XVdAaFUPgYM84EeC6y",
  "key19": "5H1RrGNngeT7egb3jEintLVRd7pZqgSgCqDcV1uc2xCwoJtDL4HuaR2qNYwYA8kcm73AdrzAfoCugjzjc9wcxbLg",
  "key20": "4SZYuWakzTQ3MAe1wzNqUcc24xmjCiQyEbTVGkHvtcPcC1bHjaWJY9sqnqWDirqE6oa7XJVyNCKUriSwJyxWqJSV",
  "key21": "5LsA4M2PDLJGVoBK7Zi6qXXSQZaqd8xqGdttBoASgZL1i5H2Ur6D9YuTXZe8jfgDck35QfPeKK8DnUxP5K6sFJ4g",
  "key22": "S13DPgticQfqidR8fGoJw9ZK1QZBxbu7qqVtn1qt6VsKYt8L2ety1NRmAqsEYYNSFa2quHB3PQ8y7iUcgN4gydK",
  "key23": "2P9hgwN9iHJZ5tFSPCBmGkis4wAoo8rT3eKi38w2jMp6mBoc96BCRnr2HYxDbNH8RgkeU25bTCT2dnqHYu5pCqP1",
  "key24": "23PHXC9GTs1nLc1jss3C2qPkP1XGLk9vGXF7XTxmMwcoECjihoGFeYWH5PjmJoBzaLFsyjd9vsUboVJCTCoRmk52",
  "key25": "5nmwtteZV8rhmWZqFhAybsptjCQ16fcqmW6NabX4CneR4K2MxeNoyig5QV2scpQtCutZsgCyhWwNcY4npLZKiXqi",
  "key26": "2BQy4Ua4YiWpcPpwcurASTHw1xZr9iWnWvxMuz4TrwBv7uQsrvNeAb7pKUA5NLaVcnSTJVYV8KuJi1XJfoE5DHTo"
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
