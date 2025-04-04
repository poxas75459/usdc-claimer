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
    "2adWXuWut1nUecLms6RQKVXjV2o2Hpyd5Nzu5x8xL2UduW1c3n9UFJb5bjCvrLzz9izcpyYLXgHmvMmqjRFDh43d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rb6i7SFqZAaKVfKBXLUey3YtZLx6QBM8AtJotqAGZmKZDKUbG9QMj7kApegbqp2SHZTLvL1SC6SpFUr51wxKoSQ",
  "key1": "LwNWadTz1qYiXhb47pfCY4aM5k5rEmmkAKAp77ZhveEYn2DaVCJamFu9ekam2ovu6umw21twgaddntpbDFgGERa",
  "key2": "5SMCZHyZPRH4whgfGo4UBJNX1hNx9PS69k5XTgtXNNJtQLxYR3QcrP4b15cEiDXbAbqFJLijQ4APuFpjUitLXcoh",
  "key3": "3UNU3SNL6S4YMs1Bxq6ReLcPRcsXDd4BkW3WsMpaFZU6LLASrGY8VERXY5yd72QvGcqM66N7AXqnneRQdYP61WUo",
  "key4": "4YW8HwXSRfXt2M5QKZoZ1YD3fu2Bjw1xCQBzV934kuYqSrobUkedZaRbvY1HWi1CZgXRfRSYrcqXvvKN9XUuC8e1",
  "key5": "eZ9kp45SpZR6RUWhE622pcB6UiRV7b9Z7pURXhkesGn3UhRwDEKyt4Lx9JPThG8aWS8xpj3WjtBiXAT7v363ckf",
  "key6": "KikUNbUNGGVq7p6f2tH2jkUANjFbveeguuoyiUAhP4mQwM3VP2DF9QbTSLoegskfHDjrpwxfqLP4VUdwDA5ppmQ",
  "key7": "4bJ4BvczA38fJkCPmTNcYRzk1EzaHEwV4npSAEBgHsfjdJsVqrDEZYF8V7TtKzXxirjbbF6yzNRBQaBuqieJf1eK",
  "key8": "4CPhYwwps8C22kPFchDTZkgGBEC6t2EHT5jaM4xZKouYyruGLcVnGgV5ecedxpMnZ3NKLWz9aHDqyjU522RNamR7",
  "key9": "fWkWtda7LAnSg7rsUDwiG16EAGi8WheU5CZ5E2dWAwNPvxHBJhSRtkP2zyR6re64wRhBRXyD3RFTbKVfiCoWBg6",
  "key10": "22yvHeLb36mvnCeqgBLSkgonxMCjU6QWv1ffnFVQN4mjfiwtd1FjG7BQBRbyFY2JfMRWiJstuWzawaSp3ewjwAWE",
  "key11": "kDA2hb8qH8jgEc8BqJFDtfP7NtubDjCacqmScAnwKsMbNUsm4jMwMMLtdoqdM6c49NfsgUBWksJY86uNUTHc8za",
  "key12": "2KhgKQodNTaYLNpt85dZHDWEEPk1LaFT1QrwCfUBrwL5ocWrcR9TvsWtuTaFf5gTYBa2BdHzjuLMhWtq6dD9n9ec",
  "key13": "24dtJFYAxuowy294FWT1XfqpaxfCEAf888ZwQpE5qFBAELyZ8qsn9jrabTFo9cUppczFa76mFV4RiZqaHLfq8pLY",
  "key14": "23QEGjZoeKKyVyA4B3DMJKFBTXsJ94UwtiXm6yJLJbGXyadnxfsQW1CQrMNzGpT9Qf68safhJBzjxSWXkjUNQzy5",
  "key15": "2oDoFePvNr1j3ErhWkaqFs7wh69p6GJCH18NKu6DAp6wUPeaV7gK68oT9oJa89g3tapdEGs5Rf6VTW6NVqiKJbrd",
  "key16": "2D1JWSSTq7wbxGS7gG4jZobH6TAQTVF2ncXJ9etmfJT5CXNN5T9HvJu21urufWyM6zPjFFP7LkQQ2FMy8LEQqoRk",
  "key17": "5YtRYF6aTGNchZVVFyvN3UthxZg1PB64L8wbEuQabLVgeG6mgGUTFLbG4cN4siuXryWMVTBTPCZe3f34NqwpXLuM",
  "key18": "55KCjsWUAG4C4EuXw1UcQMkW44BDz4ez1DBwbCUowkFFyE27pVPG9mT6y7YyPAy6Eov8BaZq6H78j829Z7ajQS8b",
  "key19": "28XTys3P5synaAbcGwbGzMfC1HAR4dUcA5ZCgBffqZ6nkoB5kzR84jD2fxCyMgPToP2fHQTGFcnseXR1BXQywonk",
  "key20": "5ZPCTFct5qLwK7z1sceDxu2dgqGSH6kc1dA5KCii8pV6KYVpn86NbFHTm8iUHF2a6YJ7k6X1HPxnjM1MBSpJNFLe",
  "key21": "3D5XuGkJsmmGVr99VUvCguYg9KRAyvZTX7rU1ZdTVSzqWCAodKyZ8cCAGsFCoMdBGxcRyg2Q2dDy65uRQhv9XcFW",
  "key22": "4ffjvciJekRcDJozdB4YehWYDyU1TYLnkZoTLizohitwMUE5peSwbh7GczyV1uEXoSALjM2uM2DNq7navgYuSEd8",
  "key23": "4RenZbpDHkg6tbcTwSJsyc75vGLyuk73LsiFSw9oQtuPr1KZgsjWhaM42n5DkWTsR7oh3gT7yiAwzKpZvaQ8vMiw",
  "key24": "5K8usgUkTYTciujEe3cHVA4CcJdbg5tCczWoTkuaJQKzSKwfo9NBdXcSHoV1m3WZszZ9oYHm9Ctbuie83RUSmnJA",
  "key25": "4R5YU58hGDu3YL2ufgQ1ngxbeigRJYMPpPs6ejKYGLbgyTBVz9m1jL5grdqYMdUf1jR5heVPSKeeH7HJTucjCiG1",
  "key26": "2WY2iGYektBWcAzdBMgtSYfrx7U5mWPpfwL8V4mnqW7GRKCvC2CQyWw1CsgBBtVuq5UPr9kqxScd7XznoKPd1YN9",
  "key27": "5qqCzNj7yQsxtQFa9Fxue8pVVeC4vzZwbQMk4adzsanK2QsiyJAFJELAPBnBN8gmhj7to2QWZtnQkE5DXSfWNqp2",
  "key28": "5iuVYsmjq6TD1pQ3rCHu8CQoLEYmZWvKbNd4U7nHVEoaqh7mU1GGqxUmrZs9T9GQJoUQhDc6Wgju8z4YnQkAvUZC"
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
