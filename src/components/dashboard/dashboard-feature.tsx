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
    "2pPM3aQjA9Y8wLsmavvY69Vg9xx7ShmYprNurfUL4asAvZSUVQmN99aaE41XDXGrK2sHGd3pW6LXNZtNPEF3Ka1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLHjgzaErBD5t78DomHEq1eUrFvXCoLJA85uCCMfAXrnwiQYa6jAKHcjy1AWDSn3RwV3tvKhQLePPjhexfGsofW",
  "key1": "4QXdkYP1XEJ1u2sHJZh8WuCbW9pDhZvME1GTQt25N1WxhsrcsTm868Ww4gqW5CqA4ge1Eotam2sUby7HUVGRxB8n",
  "key2": "5ykRSUsC1GtXFS6xJNk41LQNd1rGnXtzwj8TV8TrtWs7PPRQKANs6EHyZRmBdbVGckCot2k5sfGdbZfggUR8ADjo",
  "key3": "5fxje9ozmKSdCbjviePP2Ja9XPCQVz9f4hAsFivd3V2xhRgvJgf1L89mLmWTgUPSAyuBL2KH5MNQ42r7gXqLvsgB",
  "key4": "3FHyX4Yk1MuyeL4aYENrHEMzTYR5wf2eWMPMkJ1cc8bcLHGK2VfjwUEZVyuxtn1xTdRvQPMfrLqbiZ5MV9wj5jAL",
  "key5": "2z1odxp2tuboDFJ1adS9XpCeLkTWhUCBmrJjNUyiudoSoUFRb5wEeG6vYxsziPcHyzaarSf6kpAWpuUPuzS3nhRn",
  "key6": "2BPaJ4SVwyB8yiRRc2CrpLcSvJwdWTxEN8XmNYbUKsNMqwwniVimorPS1YpeKPGjAff7cFzqD7w2C8cPXC98xADX",
  "key7": "56BSNSANB4bK6RmDEdhcwbTLwab9ZqwTd1sk9kSoNePA1hP9nKgMQgEWF9uiQibxASzLGiTfZsF7vqEth5QR53rz",
  "key8": "4HuxwF9yLGsWtUBfVF69bpwNGkUMFkeTzrQyH1TX2A8LuNTZhGeUsbGBHNRm7wvkJKCwExDATA7YJ2Kr8PGNGZdR",
  "key9": "2Foa8p4oYVWX8SeuDb5sCycA5R7df1VCQzhJz1fXT5TU1jFugCZo776gYaT199j5wNaRWt2stW3fWYE3zCG6tdzH",
  "key10": "5uxq6f3RxnyW4hdTuqeE2xU4Rxqp2k14K3BtuDMvuQVzf5rDtWVXoExSicz9s4mDRqbgSNvVs5PSfiYbfZnzJuJT",
  "key11": "5CQQdUupsjeUPLChE4rx41LRX1gMvMtmHQYE2RkJcRZ6Uwq7DHbyMREebXF4LznJZKvz1JFJNnddYKwo9MzaixVL",
  "key12": "2FtacKxhtqFVktJWFnrGyesp8GAbDjb4J86ocMbUjiCpZ44PVo3P3zBRt88qz3QzP5rVjKGfMjwA1wEoxBMrczGY",
  "key13": "4AbWU5ZBmyqw3yctR9QoobnAy3451cPh3yumVxtwtzYJTA1VNP64dcx57pYY4VP3kgADNuBRmaouo6JJwexhkC7N",
  "key14": "3aadVxbuQYayAgG9u8cQk7NwUvqmv5V5unRxx8gt7g7ReebA6rzYed26JYBHeSg83Dd8KUfuRmRXQdGZ8aUACN6K",
  "key15": "4m1X889E6cQ1CdY6RNoL4NM3VVDQNbLgqomoVr51Jz4cDbVmJUE9dB9yVNydDrAofGjRUUyr9ZtfNEUhSHz1MUtS",
  "key16": "5Bwfprp6momcZMHncoUVuEHhXJh2EXjfBcRqscsWf8EJVgW7ojSKDh2xa3Cdd4kWhfkan9PEPRQ44kNnWZTcjs5Z",
  "key17": "2uRtKxXrwrCdgJJehpki2UndRaV3eTPdSNr2o2CBeArP5ZSbb1Vrx6GmhDhUbmfcwbL1kp1uXp9xwaSctrpET3pN",
  "key18": "BWNUhhZzL7VqKWfgU3G9CuhyA7J8wma6jg7Kr4aK3WbgHP1z6d1TbU73XXYtwya8sgRGFYqeUy2MPVjSvChv3Kz",
  "key19": "3cV3qqnpifur8fdtppqz8N1LxyrpRbtexVCCXDinD1hTxCrJqkszuXr7NPZUuwWC9GzXb3rX5TkrQuPPUnkt2oG2",
  "key20": "5Uxa5PvQMaRYbkrQ72SoroUVR3EmWFZ5MLdSFf7ncTCUcjdEcQRqBzptbF3EDidLYUDgAmCE8w8zgiMWEL1sSkbg",
  "key21": "24MTusALfGMcdJnXjn6qxq7wMegiTHSM2px9qUsJuA7aLLsPEKgXwmJRLkCGDPjGNe9UKvam5WyHipVj95sH671H",
  "key22": "4vCrecqccYutJ5M3iaY2aWtN4WxCGfFaSp8137uWKKFLrX96qt79bc8v8PKxvwkr2RQwgk2jLqGLZAPifgxt1zjD",
  "key23": "3DARR6ijdd8JBSt1VNGoiRCP8DUwxoNAfFuyTds6QwdN5MFEZkHYN2SVh3VAWM7BpTgGP3mGLBzBJakATkZhr6iX",
  "key24": "2tR7Vfi18cCcroxQaUfxXinewkRun4FwsXGpF3ZnwPmyGeEW8iCdy9zGejupJgmDFZzK8e2F4ZgQ9FqtS5b7RnFe",
  "key25": "5Z3x5UD1ojrJJ7KKijFWsKtXAnYfR3EW1CXUioASCAjhEteoVYG5p76M4DZnWx6P32izwYZoEc62o3idmP2iJEnE",
  "key26": "3BC154ArbDDGfyApVZQH9RD27cPUA1rrotEe7aMSYSHHHqFiNSLn8JC61ybETDL4v5V4x5kCz1t9ySch2yoYUSco",
  "key27": "44XiXcTXyBwyLhWmLZ61QjUVaWnWWAxyB49genBQyu2VGEx2e8fHYD4GBipqwBxpKVdYDGLQkQAL4pwTufpRG7MR",
  "key28": "4Gn4R8K2r6FrBSyRY3mdizoa6LvJZ28EKwp7uxfV9hj2Wb2ZEqsTtq3FcQqJ4HjQipjmeMn5C4GPRdQfZQXESgoj",
  "key29": "5rDkL71AxUQFNFZ14HjGqPgdmpobMcriGmutQjZszYMNjWKcS3iM2grhMDVaQ492uQShogSJgNKrG47DKCPngZ9U",
  "key30": "4noWL2GHx35G2RfNBaraLZDhCYur5aCP5aXVyYKguKdGLYu412f6C5NJENKUprbYSdzYvE7HWqpjBEeBuAhXjvYA",
  "key31": "NQ757jijDynN6hRLPwL1SGg8Z8KQfxsf59q52sK3iMLStTFr6HNeAy7AP3sfF9EUT5VKvD8EcEdTLZPdkWYYoDN"
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
