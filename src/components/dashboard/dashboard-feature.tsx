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
    "41mdgWyut8bG63vtVDZvwWhsBycFLqcVSWqQXMgQchiSAYqASsbKJee9tfH9FjBCfhYHVbcwQfXzvGNwX5ZxKjyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hugn2qMobCaW2BW4dDYFXZpHu9tyXNgPwJeJ6Mucuc6Rnd5bXBDX7A1ZN7WrV4amfJvk5hwpYmsoNb8Auu3dPhu",
  "key1": "5eduDCnju2zxPom75hHBa6PyddXdZEFAu6WRidT3PoCsadgaZimgnNshzhRbJ3wob2j2nyR7fmFe1JrzdLfCBoBi",
  "key2": "5fDyshD1WR8WdCty7u5A9U6goVs3X2bhTWtPox7Rf61wFo8SpqbY7pbsMrugvt8zpSecCr9xQQ16pR9hCStonLk",
  "key3": "327PtDwQeYdG27kfc7gGgEUDnedeU5qRgCSnTMx4cFv7aejm5QzmNKLsavmNKJ6QkHs61cXz6zVNePELbuxkd55n",
  "key4": "61N66XdK74hTzFkubV3CvDpYeNeA2KMp1dECbKueibFTv2P4zaWcCGns1h67u3BCb9ytjw1ijMNb8VUysPrZa4ij",
  "key5": "3N3P5XHFmAHwMHiEc1UzMkLcDyycoXEs4he5tPev4pDfHUQauHwZuzVWG9Gj426wDD9nKJjLjGKus1MQQUbbtr7g",
  "key6": "5n5LUyV3bKbk9ihhU192wRbnX2wNNhgy7VaHeYvjq9HxEXNy3bPSHUfg5AehkPypsagAfnqqu3syR7qUbe5UrEwK",
  "key7": "5LRSSBBEcEdRU2ijsr3xFc9UBWBFZg6cCdqf7co5Tx6ofiFTeVwJaj1fn4N96uSEBxZRL5GztAJE63SWnEdaSMdT",
  "key8": "5DDrsJkr6FbY1X8UeRrZzActVeXxyeZDgxh1pDWshjKtkbZHMDLm14nirSCuruyccXx3eDVXp8UrJ296awHgNHAp",
  "key9": "1y2tLzGT8Tr1pQaW1ghY4Xk9iozmQ6J8GMaiDJtSiBefGR8MgZE356pSw4n1o82SHb2NrBPQi9FpvjGduW2M9Pu",
  "key10": "5GhKj18PLTVuoDK8DF4vd8FQVKvfKPeoJ6eXGtJvEoKa13Cscb8i9rtsywAU1PfeW1HFuWjCgfxcUmRd2sKrVDoL",
  "key11": "Cw9tpEqLDBc29ghSTh2kVR7JQiqgX45vHtCTs5Yd3cjqoF14qufreLGrxfH5bQdBs5fEiHFVQ5CJQ2Hf6pnkSg1",
  "key12": "4w88vCqLVXqJddXHi4n2mHjE4C8Tfhv9iGpaKFFmmVg4mB1KERkvyz9LuKbwYtQkTzZ8q4ERKgNYcMcMHra1DnqP",
  "key13": "pLmxmAnRUHJwJMFtAbi1z8Vxdr2jDshiMsbacvzvjiwNVNuU65R1aMsrJjWLJMvaHHwrcRohWMwu9pYah8PfvAh",
  "key14": "2wugiuV7rUXTL923HkdMZD8pt6wGkNTysnxA62SgBv41tWzwnT6QABvxBwAAheYKVw9CdmV51Zx9ZE97sadrEWec",
  "key15": "52NH76TmsTnp5b6hPPDftQzdm666gpnJssu8hx1YtKWwiXiQTNDD5Yu6zzT8FvTq8JbsJNuVtXPJYk7LNuh1rZx8",
  "key16": "2WNxy6whoe6iPtvjwgmomKPejHBpQh2Lpz1Rm8GyBCbtp6xSaiexW41s18cPf7jXhWPbKaTpFEfaQwNrJSwkNRES",
  "key17": "3unPEVCGfzW1tkFkN7vhBznawUyo2pkAgd9DPU9XQAG51uT47yAiPyN9uJ9vLq1YtHLrYNago6vUm8bWcoPJQjbu",
  "key18": "2MaLULa4C3SAAopUPUvPgaiiPFeV5c3xomUbkU1ip69f3Bo4zQR2WofbyfZcbPjPuHeZdGScN3yaeeBzShnERHKi",
  "key19": "59zeeAP4bCXXPUukh8Wn44v5pP2sQxKLdST7KZXnJxQdEZaVTBJm5ePuYHfqFkXBXCgTyqe1xEVGZwTg2wgsBzr8",
  "key20": "2R7Pbh2rJoGEEjADYZjD61bnbrU4ACAC1mzhRt19Ek3ZsRC6DcPCEnAJVKZuRU5a8GxqWhGU1zDf1gP2fsrW4Azr",
  "key21": "4rjuH9N3tfEKnYycUj5iatA1TNXj9uwpr6vsNhikkHtf5kaZrUNqK2HxoTFhSLAPDQpqaCTqKcQBDWWnvADwz1q3",
  "key22": "2ptSgy5bSGSMo9Q3RTFpRhAFSuRekttcQNshdBjbsmjmFV7FU6Jq82KD3dkQqFZXB4ofJor188TPZQe1pcTrKwsx",
  "key23": "2ytebVg2kQT2Mc3euBkejxd2tLA2u7piCy9bjkpBxuhre1pZTXCbEJzr1H7qhJn6DQ13G7rRRGGppA3azTUvgV1g",
  "key24": "2qqSNC3WEGvPsB9Pqod1i4svXsHqC4rYjiCoX7dB8EsCmEfTyur8AGDGz6dRSXMYtpZRX3j1LpoyevzKbdQxkKVp",
  "key25": "21KUnQh5riNHgxFW7E2q5ioyYYZgq3NdxSYH9w39MYDHGHc1tdJUaQzX87Gm6fUZRm5DEbhGGLphNLuy9TQGhDTF",
  "key26": "5bqDRngzMiN6dBpbmnaENwvvev2849GMPmgH9MZ77NMo9YYVWzjvt2ejQa1YxdkmyUHhodeGZckihrjPSRpzNUYT",
  "key27": "4Fss4bTUxUqXZRamdudX8vZt8ytyHn7PdpSMkb1tFL6DHqUoKcvi45pRvAHeSJAGeQ2g6tZq7dy8C6je5HHGFaGe",
  "key28": "2uiJMhy4mwWmBYS5NKvTvGLGAq8qzErnyV9BWxFp6rHrZPTJPmf4eP2zAcEP2FC6bJoYUL652mwLU2sRUxmuZrEJ",
  "key29": "3SYLRHg3ifbPKTzVjU37vNrooVAhXm882LCd5w9HYPAfbtpwNzFP2zCuvUKqfd6vFuTm2C5xicbwjKerVo71L4c4",
  "key30": "2KHpu97Y9iuUywxocNomeMWkMYbMiJQ4P43TAW8YqEmQbghkCV3WtGangF1uazDH8vXkwWCEuLNe3KiA7HVBRjcJ"
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
