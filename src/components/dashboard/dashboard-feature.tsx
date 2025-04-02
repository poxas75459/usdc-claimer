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
    "67i4FcCrPZyK7Pn5qbqUPigV63CqmYjfADVXWLCxgaDcxtxCQSVKvWBpzLWmA1FTwiLYXJdLibxycaiQR96CXCvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tFfAVJzF4uernUsJoyZhmNywgFccdXzdwfp9B5DCm25X6VyR951yZdnSzaoyw9wLDaX97j8L5rAt9p7Ff3uNuU5",
  "key1": "2Eb8u1jjFB9FcBdvtkrS4z7nF2TQp7Pafvrhoa2x2kgZ2gs5tN9KpJpMQia3oyAxWCpqBrdqcQWkCtfxDkb8hKfd",
  "key2": "4ziqcyXnwnUqmoNwEQNBphS9r82JT4ctTLGf8WYkt1qUspa2MResXkPGGHfEYDXyVyDWEU7tyBZt1SB8gxuwmfzc",
  "key3": "4sWpGJyyNEQSgFC8CfuGmJDhMfA8AMduNxPTZQipKpzX8U29f1h8CHWoraLxAdrqTtbmzQzSCSmHyV1kP8J5q2JP",
  "key4": "V6CiTVt5H4FsdU2RqfbfxajrVv9xdvBKuNSV8hB81BzTV6qBiQ6N9e2RdcqMAJACqjQhxRHKzntjRahDo7ZkMkv",
  "key5": "4mWTSuJ6DbNaJfwapE6C6XM3F7gNnvCoAH4sQcg9ZubViVK55nAvpktgJqLTKVwbx4XquUAEHMtGNGXBessfAQaG",
  "key6": "2jTwQa4tSA3uvLUZBNLBt5zQRsnnXDjJqQQFk6tNTqtVtX5A76XNhahM5C3DHee3qphBJ9z87c3u4yA9cisBngqo",
  "key7": "2ceJXa8EmydXaagQn3HEvgZxpADHKT9if9VTq9TXGa1xix4UewoeU346mcRgbdRK5y94SNMmXJ9jHyhZSdXLQRs6",
  "key8": "4TDnDimRrUmpDmAUYeELeVAa9einNCRY7rpn2cPYLUCuS4qCQbYjQRnjbDGsZKbJ1HcmbVFiwmdw9fTNMF2sFXqx",
  "key9": "34adatwUMboY2uxT74CY3p77Zcia4rFa6WfP4qJgFUDHoiuxtGxx2PfaYkVdrrWkRK5dXqZnP6q9izzq4pCt65gP",
  "key10": "5LwVextgbZn2Ygbc1WzPPJDfgSa7RmiFjP1oELWDGrs1JtyKujh6rXX8W9bmZF3TShYGxnPxqvzXHsNXWrrmPXyz",
  "key11": "3LX9Dn3E6F4AG8XnXxcNmrnrYQ3WCiWipgdeLRYAh4HZfTp67ziS3pAXtFJA2mUjUWHwEiitin9EnwmAXnTGAtcm",
  "key12": "4A6Mg4cwSiGnry5RH1CxqkWq3PHzZ4MG5tNExf2C7Rg1nm516GWQqcnPNGPpBzWeWkKZXVkk6pwBnZDXUoNm76YY",
  "key13": "J1Gy6dZsd1oLkUSkK3gbwB5X4dJQWovbX2qVQBUiutqcoLSvb5D8bgdbLPk5EedYjyX3QEaBzxUSY9dqAZ9m4ts",
  "key14": "3aG5d75m3JqnYQ3aUdQfepZzZHiCCWRTYPcwCmqVCxWWADuzADyfM19KZuwYK7dvftqC7BJrvWmHmBxLTHt3jNua",
  "key15": "5uaMmqSYTwGBWT7gKbx1wA3zXWiUYUqbNJ1KkHKLragT4DbhVc9bUnisbatAx9GCrFCn7rWq5peATZAioJdj7cuq",
  "key16": "2U8iRJZTYvkGnoMYV5euVANzuPURgPqNNU4MH9GevjCmkEstRSKQq87pMR21JxPueHUmkP4XxCCR3WMy6EgwhGXe",
  "key17": "3HQ7smc1ZDoRMPCcNnbRuUUdcA2VRGzxqiy8crD1uo2GWc2aJon9PQds568CH1S2ZB3Dhvz8oybxV4199x3npMik",
  "key18": "2XmBjPk76YGGNKCHKNXCWwMKLmB1my4EqzMEdkPXcJuxo3NSruh2TEtBeddg6RXgbsUsoVtgwVhwVBswfimK6ZwL",
  "key19": "4P5JuU7t3hw2PDn2Trhww6nQo5VucTQjy2sXtgcukgU9NohuJdpKYF1whS1CicqG8uf9qp3fC32Y4LFkqqhyZBXQ",
  "key20": "3M5kTHNbyWumeGr7wUS4a7qpDTwQzzrAHVfxmmeHcbQBoVSrVzmnapgW2FmvtVZLm7dfpio7uzyjt6XZNqCDXWGE",
  "key21": "4i9WMaaLmkodKdwwxymYxkQhav2gY5hMruqrazCXkeZ4uCxef5oiZRhjh7Ry6sQb9HgAbWeKdo5BqsZneqPGvFhL",
  "key22": "3xtKcqUwgPKa7PpGbJJ6ywToVoJqehVMYPJZPmoLaNzLreAZHQxA98YvZkChLTkPD1pTbdaAvfqEh5PR6Zebfu3v",
  "key23": "2YGSPdcs9Px4fvMjHQ7PrQxaNXB8dnEhm2KFRwpPhmtwPSSehdaFyDLTsroGVPoaf5g7xMzXWAdfyvkbL5ia1TuG",
  "key24": "2PdVcWxCfAZT7n6Mt8gBANwLZj1eyf9U1GwDpnqQebejzCwAaPQNGPtiWCxSRCYv4SBGMQfXEqMseaMg33hSx13C",
  "key25": "b1rDwuqYvEot5X3anwdHD16PN2CDSt566H6a8Dh6bCu94u8sgsvxxygq1sXKyKnkxfiWHW97Do8Epop922jiZaB"
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
