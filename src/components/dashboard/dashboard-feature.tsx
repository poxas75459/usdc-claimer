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
    "2Vwb7HTB1v4555yvAVPudxv1p9hdTf1Hbh3ugw4zmQs8ozDQMfyQAXgL9LTgGadYb65KdrszJ6rUsCt1FPSmzKoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8bY8ByY45AdnG53YfhngcCTPZenAD2XGkxv41ASC3AEi4yz8ZZinc4Cqei8k1DUWcHEV64fnnqAxZ35QXVKgrK",
  "key1": "5s42YzeZA8HdEBBbtn6kVuT3rrXvQVDfj9TS1WuUEEEp2V1yom9jepHMymWQrB7RbPUaarJtAigtDuNPAThkjK6v",
  "key2": "5qBrhVtb61urCFWe12LfkPUX3UyFrs6eHoBdYCZoWtD323dMWbxTsZwhj6zupsfLKEVhYEKMuRc5UPvBz5664gRE",
  "key3": "5ruex3xH7oejTCtHpg9xaPokzRkukye3KUmUrMSS7nLdawfnduxeBbSHg4CEjV5XAr37y2Udves9kqZnjp8AKJdZ",
  "key4": "4rj6o4FZrRkzVp4YtgUsQwr2j3XfbydjCTu1dKAqZQfJJ5dYgYbEeKL8xLU2xym2dh1fpF6G3Aqrc11jCnPRasQU",
  "key5": "2zDyBWiVZ55gTwrcFQmNJfhCUHcdmL3AiprrvQjuD8SJwr89V3y5Hms9vAcpqhh5oyE9sSeNSBaApm6a3gJy232X",
  "key6": "61h76gBN95WnTaL6EXgkfFX2NcmhPNLJewK9aJP9gFksCNdoQk1wgtw5n2gDcCd5HLz559VKP6Ap8xVQQxDiaiwQ",
  "key7": "5uLdqS4JbPfNmPQqzasGSKe18F3M4kLDBDjvidc8GtLFm838X9k1oyG1xQGk1zCPcxaRLWUwnN4jCM6mDo4RDeg",
  "key8": "3r9sGiCjut2pzHryLgyzEpzz6vy4HoEZu7ygCyXbJVgHgW64X2yJbscFBn9hs2C7xJ3GVHHfnoiPMUigmWyCr4YE",
  "key9": "3Mc8NZLUxJdcm8UtZvMBkz49osX6fp7tddNePJqPnj9Af9REaxUBYTyiFQTNb57DbyQjoJ8vYAB4ForBTYx9yHNU",
  "key10": "XWTarWbGNx1usQ7HteMbNgSbo5GGz8kdb9pmZrqgQACP95MkBpJ2qT86hAvACzgfrqfp3zV8SbMvyic5vMqYTyw",
  "key11": "3mahEfsDysrbcCZNVF5tubJo8JMxd41AbGjY8qd6nEBP5QVPRssJVerK7GdS2nnPcyBcLjvbS5bv3h2vkZEM8iZ1",
  "key12": "5V1RnsDDncsoKpZn3dMv2rWW7MXXYhYywmZdvbvBXfzvxomV9m3Yf3PkHXtphLtyUhR2FsHX8j254MZScjmBjyXn",
  "key13": "21zf2b6F8stLZrzDdRz5EMvW5cskrYpi5e7o7LzPLipBGVVf3GLrTRzLj4xE1hnbqadLeGvHUNPKDWVFTvDtZBkW",
  "key14": "53iDBCUk2LfVHDWTXnAcHHiXjJv2qfTmg65HkUYBKZkPgqsf22K23ZtjDkj3pZYk7zbQA7rtjDq1t9LQqKb8zroF",
  "key15": "2jGbEq8gQQMSpDsojaFKpuMLT7ShDs2Bd9oRAFW4fnWGhYpt9tvjJ1RwDGaGwR5vMzRE21aTo5omm2eJrK9wEChX",
  "key16": "dFyepQvq2rdQ5ZGGzPvaMJQVeaEstdGxrVeu5nfqcThA6vSHuq9cVVrn4meCZgGcJeS7W6LiDxcnMNaUjXjyLdW",
  "key17": "iLhi7EsFgvosg6nvMnfzuGyoLp6xnrwZMyLKVqjg5BwSd6L8DprZZUDRRzvQrwbJPukwFmw46fDjJXQxxrEwzc2",
  "key18": "3g76k1FRNX43KfDyWTrM9MGodZnwsK9xVLFMACVKr5YKuooXt1M6mCUjZK6cWWSKsEqCMUZKHTUu1NucuxgnTSmw",
  "key19": "4XmsU6ZtqJSnqECjCZutcU31FDZiWn1ypD5c7emXuJjVrrcVa6toNeVB83QKqqGWVtNN34zVS1qy2XHsC6sDunwF",
  "key20": "4GtGi2Zp2pY8D2uo1nsKtdrMuGCA6nKnqJxSBKMUzpJYgT2iaabSpu9Pv8mz7xjzqZ3Ap1ksEoMfgJHAgtJpnQUi",
  "key21": "vknAYnZDsD134xFyD4UzYDXvTwEKBTG1EYLUFySz9Rc1gk1EurXQE6AThWBtNEkSR9LdxAiLsXUcGrbmq3Ng2JV",
  "key22": "nw35Z5BSZBbFmTfYx1HBCW5EVMJUGXqQ8V7ntv467htApJnA5sqe2rTzdQpwEMHEf7rgxTyQrEsUGrUNvKzaGMY",
  "key23": "3AT8Y8QQqtpnXrH3KeKcWeqB32EbAcGJmcGJpSRPhxryoe1geYPLczrrso9J97VevhgA7TfqpQYAvDsDWayjQnTa",
  "key24": "5ZHWJ3UGPS1g4ptZriAnpPCNww3eZ9yzrjTBJw5uH33jcixbpZrPvYouMK9EZ3dtMGq3eUe8LVUBpXsyNf6GXRn5",
  "key25": "9uoZhZe7gisuZM65Rzknp1tHexpEruzUdtUGuQYvrm5C3MWpuGv3LdLGYNYEsnSjfX3w4Z3twshBMwQdNkHaCjB",
  "key26": "ZQJam2ajQjvKiC9iPrF9YBtxESJ3tL13i5qCZ6PKgE3PjWF712kt1TemDEwenPK33e9XdR4tnwJR3Tawv4exxjf"
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
