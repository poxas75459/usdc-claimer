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
    "5K3KCxnpdPhN8ej4o54GXogw6KZ4BJPMDvC4ZNiX7pQzZrAHut1U7e7u5Lu75NnQZfKSk2i4fv473ryva3o9UFYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7X5gipKVSB6ur8ZMUWnyEu6FMUD8MCqzWGpSK8N6qA1MeK5xwxSTBBJ4AeWibPH6efzZh2PgqBTAZX1Rtjx8RDF",
  "key1": "2UySUHSQLu3FogvdyVZRfuFTHWEFiUeecYMdm34eACCFNaDuCi7R6jCmwActfaFy9RhtPsvsYxDFSBpyzL8PVcgN",
  "key2": "577giQKbS7D6CUQLJRtTjLdgr2RQeGgzmhHBC7D7BKDaZbH3JiB2SmtVZB6SWkyVtABAjZtkupabhsCehWqLPzbz",
  "key3": "Ehw3t31DYM5EJR6m5U7gb1Xk2VuDJSwas8jFcbyX8EcEj3BBwLqqyQ2UE5b7JAzJJ4d7kWK9UG6hx8oHB3RL9Lt",
  "key4": "34Pzuxb1FjLggvhDibUiqHr1T5VUvP7kgj5hsxPGkCt6njL2F4znq4GdVgRosH4y59rMQZrAEPJDgnqK8qzi6sEQ",
  "key5": "2QEzB2QFGFiiPS962oUzmBd6QvHPtWbrdTHKxYbJiXCJvRgeUmyotGamRjf6Cfus6dDosaW9bJm42xibssnqQgwD",
  "key6": "5TeW5R9JzPFP7dLXurFZRSQyaw6hhhzCUwLNBMepobcYr6F86eFaoEm6zJPsQiBtBzAdNNwh6UdRXmbUenBJhUm9",
  "key7": "367ghFKEXeLkYHfKoKJyPuaGDhT5Yi4NVy6pdTin26jy3n8AYpZoWUH1kg8btQxMY5q54uFqc2UuU61tUMeUSn9Q",
  "key8": "3bKTedif5c5xxTVDbPmJVx2KwgLrqaqC6ePgRYXmgJDsx572hpkq3mj7rv2T5VV18zctMt431D5HRQoj1rBnzUXZ",
  "key9": "5QDcpJauYyqV8zSCGbMPQw2bZQHkYe1SgEC14endeoHQgN3CGGL1d2pcbutNVMzhoW1z6734ukK6DeQvYmg9uXC4",
  "key10": "4HpmGpTGi6HXCDW3E4YQKExThAXhk4Nh5CNASGuBBoDykjoGuvZW1fmK7pZUd1gdv12Q3tmr3vCzqqitH4Wn3oL8",
  "key11": "3UW1Lo8a86ZiJUkDCsUeWAdnxTMwJsQLyzWukxp4AyN9GrccyDEdtwWxRHWTnmXiXuUTN2sXVbWNHS3VZ3qVePQU",
  "key12": "4jwzNUFAXuVJ3Y8rFN5K9KnefQiq8yManVqtaGj5NFaEgwf9KmkpwbfLA4ugjbqNpvU5WDEm6J9qh5AM9G6ArPgw",
  "key13": "2vQt8Es8pgbvJi6pxsT2V6eiyTjpYCvDBrRGksnNjfugejNQumZr1ehTMqifq92SGXoTiQs85ab4Az5mVX1fKdMt",
  "key14": "2zwS8VKnsMcvXceTMFuQvgKHKmX3nXU7aTzDFVKa7RKB3nz1WDGae4ACWpvw1dkKJzJQijeuKhYwmNBuVzkRqQG5",
  "key15": "xKEE1xDys88d7G9r3TmkeiDw6pCg9duKbPcuT8HAtsPoZaLdmzpSE6bUmkkVP31SF66nbWVri5kTJGXoG7H7uG6",
  "key16": "8pYftxFQjsSmbTMD4yZduMWYXP5epoy7A2YbZKJ2hxS21Up8nVBdLRLxPbTYks6hisqwhZnqep8fzi9KPPA85Fn",
  "key17": "3MWGWfXNdHeNfQsLubUm4owvNKYWygamoBcCDTEFEW9DXCUf7fZvTWMHhn791GLsBc3Rz9RhGGoRAzxhkWfo23Qv",
  "key18": "tmPSRYPDvjYUdfB96JXEpfyX88paLugCPQErai8Qufc4yZPgPd3bjmKck8mvgEzC5FTEkeT9FpnD6hsJXqi8zrD",
  "key19": "5mgn7HbGFvbsXP9H9VR4oL6iDadvnV7E3yj82qZgioh61ZqZzpxDtW9Ljau9B6YzKjMujWdJ4idp5SFdU82uB8gQ",
  "key20": "P2hMR9GHhpeN26kEBGDihpJwUVg1nxcsqK8AQ53AjcC2E1d6h1dWXuK92dfskNUaGXTP61SPG46TvVEk2eDS8Bp",
  "key21": "1kB9zh1zKL9imBpADmstr6Q4xoXVuGLpwvbiiVRSEdUNKQZyGM5y7GMRxroUT8DEvMup7ZNTKrC3XxVWAeumbv5",
  "key22": "3eLKtukJj4fZe7UoP7ciwnmEBeLm3ogSvoEUcDkqozj7JDqzobhErS1XmHKTrZxneWvQg674ZTfZymEXyopQd7EE",
  "key23": "3onLRcR3NnxExaNoVh7jmN6S62Bn91CCCGsjQjbomEzXtk8z2ALCVSDGDMSAU6nirvukPDpdhDS5p1vKNrtT9ga6",
  "key24": "3jcEJxfS5rWR5xYEu3qpSVvMqtpfEngRuakfm979FbAVk4wMZ2h8vCAVPrwyU6rDoLVP3PBwrzcdFAmCiB57taT7",
  "key25": "32Ri56NTNruknNBETMjwaVou6EYAXYDTFJcHYGvJYwdNei1UfQD61UPTBx6CKBV9Ka1dZN7LgvwFdkHAPX83bwW5",
  "key26": "5HvhzSXvWGU5DLDa6jc3WyuACfzUjWkNm2zhavimJ2DRvY9tEm2gabLVxet64J8AwBA7fWSmiWcmQM6co3SFSniD",
  "key27": "4bsiCejAecihwGrU2NhUEproMRwRfYD9HoVp6oK2uEG5JEGvMk5c18fQ5UGbrpT2S1JJAH5jEhwWfXia931uQh6G",
  "key28": "dCMcbEYuK1iFKPcrBaJip3v5FbVbzr13QGHvSroYUWFpJnEdQy98p92vq4B5UEesKM9Yfhmrufa5QfGahdRTkMT",
  "key29": "4tXtzTNgJFLvZwP7xj7AUJgyzgVQR8w6vp95p7x4yUYXbQPCiCzwaVJydYxZVwrgKqT5TYk1NLeW714LhEU5rVhu",
  "key30": "67cSs5pZnbvJ79nk2fnxETt4ygcmw6hYXi9YLU9p4E3DzQsdigjSJEfPKL2B1ZRhXZ5i1ZHsPwLd3QSXtU6Pxmze",
  "key31": "LaQuxFZdGFbicozU5zNfs13Vc3vFwHGZLS86bVDrhPs3GxftsfKFHBEMQCJZnA2EJsC4PH2v9pWFECtevFA4fZt",
  "key32": "4Ba3ppnQuYat8qnRYDpwcc4YSNgnPQeKjjnkzM4o4sQYE3MZFjzLAuC5TbcZ2AoLxChdhChXBt2EcGghSmGFQHBo"
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
