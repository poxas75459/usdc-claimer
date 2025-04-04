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
    "46e8Y5iKV2u1V674nnSgjzuMQEBwHgsoKyHxqkZt57kMEGPtRvZSHReh2xaVMDrkL8f9o5bAhs2edNxCtyp2K6Fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMwMXWUpg6FBFZJSafWW7jLJ9mkc6aDWdBsMJLfdbQvFgq67KMa1Z7DjYFeMuNwy1ehDaTYQeo8eo6FDxe6pNwa",
  "key1": "4QgyxVr8RjqwZJVZicMKhBHsE7NTQAGcB5D77qw4eSJTRDp65doFCnr9DNudpT71uosae6j5hJ9tLBQrXif47JpN",
  "key2": "KR4C4GjG86Gf5BoqUTdmA4R78fCqijWQgxpfq8aQkW5B39c2nKz4DXK1HVPRvB5ZUxxXPS47y62AmjyDEPxP7Md",
  "key3": "2Jm9P4g6uiEzTFBL5kgMqnn5a3XCbe56GekJDoCmSXaoMm3YgQ5xazxY2mPqG9QB2j9Fnkeq38ZB6b5b5jRPW83y",
  "key4": "5mDXZieXemwoZZHyuW8rYQVZoamVsJsnsXShwwr5vTtbjT68qaH2o561uMDrkmuXoSz1NVjoEPEbgFmmDTDWhJhb",
  "key5": "41NrhwNWsLsWD3YFh86RxW5D12DytS8pBHyJc8gk9qhtiUwyrZ5pD3KCBFrgR8geUUpHsfSxbPU16UAvSMToXmim",
  "key6": "3XEhdCW12uijojCmfjF91KknUYJY9gkceVkYeEBvwLcAqyZ3GhjR1aCGbUsVEgvnxdmsHdaekmyxRtxoF8gPsWzN",
  "key7": "4mGe5NoVcDPzuM4yZ5dJ8L4LcweVV6yJxL76yTZHKP9ZbheGp4Hodfr2NLKg9JhwjXDyehW3rBGaU4TGSQTmABDc",
  "key8": "2y88YxM1vtZFquy2LffE94RmztHTuxckADErGywHks9UCPRvbVZrbwq2xM8QCG5NcRUexRhSaj8iZQEawvLwVNou",
  "key9": "smqwd7VjubqCpbCSa3Zk1WmrJfpkvN7DzYid8e58TpZpc3vA6Nc9qgfNfZ1uQXRxWxqfeDDjiSora79fmbEKBaE",
  "key10": "5Jbyb7NBv6q4QDQ22rkouAQsSovsddAcPs64xW9LLyyf9MnGjse3GQyt1wM6eaw5Wq2u7DJbpN7GHZJtHCw3Ejo9",
  "key11": "5bsypWcjhh96Mg2yBQbBvgMK7BCB6gt9RZiHNsv6s5BrsrKk7UMeQtKnQckCsva85u3iLSQDak9HpLXDr437rFpY",
  "key12": "51W9vkoqfCpDdrHvdcyXCEKjzJwitqpo2NkrkG1Q64RiFEd3597ZdvMkkBrN4gTyuV6rhWbHZSpQ5gS16X4BKSTv",
  "key13": "4uDbu4DpBUTncGisHKQvd38x39MmZ71B2pya47AL7cgaktvCoXtsZhVMNVaJjnRSn3KWq2zJZjDMkFBZSQkfzP9r",
  "key14": "3WKDK9QKM5S6SjbNPaDfy4roKVCMB87UncaYdB3V5xJE11JUYB8CExhihtiLSvRJe7r9YaPcBiQxd7Lyniu98FaE",
  "key15": "yS9GtMrvWdFthVRar88pxJu7ntEZu1XwgFoeyXc7t8yh5htoWeUidnjavcgN9WMzoWCoafFDKZrA2vfaZTcTQyJ",
  "key16": "3RyjApDpWVPoMdm2dYArcidvVH7FJkN7sMDzsKWsjsGsGMNVKGeMs5U76eQvZEwKCN5UC319wdVJKNLxF3zof1hV",
  "key17": "2Q53qgxftQLJsuv4bVHDPpxDSt5f4Ls42QEbpG5RekJc1PMSwWGbkXYyMw9uG8hqWd4853bf9k4EvKhsP47qaJK2",
  "key18": "2PBAKC5vSm3fTe9iEfab2XYfYMfyM3K1JaD62pa8B2in4qVgUZLXEgGpSeBMRB6KFYCFRkvSRFYeNH5TUefRpKqy",
  "key19": "43ft8mKUXfpFvLc1P6oiBNpiZv6fm8Rk8rLWkP3c54jjgLaBcbmij7pY8SNQVycYbFJFjVE81yi1uC3KPwfisaBz",
  "key20": "4vYYp9yU32DjwGLm8ocv1vjrS9k5KikBgNVrsnLL9LcrDps25ADAkEySYQov2Y5HFQeMw9Gmt1VxDuwoprmAQfLJ",
  "key21": "2csd8kBCtHhfXmM6MqjT9W2RbekgD2qxLmjasGuckZfR4L5Bqoe29zUHWwGG5tugWRLzFeujCMzY5vYh9j321FBa",
  "key22": "62du9erY6uk4orKMdZuzyVmDdgQ4a5wtnsjeJwTnwiJCtskYKeY6CubpDLLBSwkmjNsH22pUjkEgnZiNAgHy7XbD",
  "key23": "3KSSmrMbSUPVhKnV1s5yKnsa23xzuLVVVZ9xeszrm9ZaAc9VtXNMvSUJxCeg6xeSRYeWFS8H4HX2xPMRSHCaRemm",
  "key24": "2hVriVGAFHu48cfRGeuf2rdg1vZG8ePCsxZvy7xhTWKDjporwAa1HMbXJ9H3Sqh5wENVa3PBerb88tKPS2AMoTfD",
  "key25": "2ujZy1ivY5CpVhhXKd98f6n45PcK68nZDw65tttAb3eQu4J494jL7RnLDMfWV38DwYCKR8Dicqugm4xxR4RrznpV",
  "key26": "SUWRp6xJvqncgA2hvHutgEZBoFEsy6aNnQ5VFHoHkWq8Rj8GnvEP8Q3bfqxiVjCK7ewzwoB5bdvX354NqE5GEJN",
  "key27": "CL2jpDKeSB4AY5uwJjhDUbMjshwbLUfDbKptgpeJbJgBHtdmLtPFiTzMsBnVDQe75WuxtbKdUwH2qAJhK7Kj9WK",
  "key28": "3mczHa8tJjgsddLgA7TnTrgbw91kgEVnTKQk5cpzBmMk4dFaiLeagQnPZscVq8dKfcehEkrHvxd1JEQfvqKMsPYs",
  "key29": "57DUZHeqwKikhnfjiJgYPEJgCw4xG9Lherh3wixgFf2mSQ8MchY5jFUQedyAwxzBktxwtsXKr92gDbnVkL72xF3Q"
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
