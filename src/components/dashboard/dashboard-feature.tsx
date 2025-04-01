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
    "3355LpvHd9ZWQo7iaboAP5eqrpuG3yHnMMRtm4EXrdfgp9o5VcCxBVNDPo1woa6dqbq9vcLTT5iXo8zr9g9G9wXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ko1CvkwxavgdF9e45VKyzAi2KkerGM37RMpgQmP46MosNKgLDUmzwo6gKhRqNb4BpdmW5VEjMFLEFwnmTfwPZn5",
  "key1": "dw1akr9C8FcmRMdzKEGEwbUfvsz8iZCHVxRsrh6GfFv7xwfxujBuABvMTmM7ntPuPcKgFvAEfnF6Ni211WsmekC",
  "key2": "55ZpJadzmyxSH2twB1ZUsQp4NHQbfePsoarRZwvcXeer1hEJRNAmYHNR5kNmxRko94TjBMVw31d9kWinmjGqhAoQ",
  "key3": "5ciufifNe2EGo7oD443tLAmD7rvtH26AsUFLyy8gExdHhxi1ZnXerZq11hDTw2N7Rq7LdoxZNfUqoa9z6jwPZiW7",
  "key4": "28fZJgLpMerwmucKgqd77FzgPG2BB5Q4eiW7hZNmWUTXE3pHE26hYbDKeCdApbtbpJhrGu2x2CE1W56PvALNwkpo",
  "key5": "zVTB8WeWLC927ptZejZtor3Zeu1GAXKR4rFnncwXbeQCZ5vSPnMnrHWnZBPTeMJrHNVUiyYgzEKorqVdb4SeEti",
  "key6": "2eQeK9WV85FbgSeVN8W762rA8BGAS3NNjhFR5pPnPF4V8qGbT71dacGjRvUL47RiBKJ6zbE1k5At5rprGZxFd6VU",
  "key7": "3Cp958LgnP6p6TjtFe5vgHdHdJusoEQfL2TZNNLSb4HoUX631M687aKhdHbwRhfLKd7Pucon1B8ovyc2Dj44srLi",
  "key8": "2PP6Gr1c4iMyF8wTQPKCHHU1kjqyNtRWpkdnVTfLZabciweS45W54mbPBKcZcYeRy2MKB5EAdwe2FTjBU4gY3ZUK",
  "key9": "5TBZB84VSnDdu8X8pu5P6zZ8GMHpXFjqnBStX4XmNYVrnE2NbGta49fauUnBwgrrrNmRHcVB4Y8A3kVaG1aMd3j1",
  "key10": "3yyCzRCK7kgfMwxfXawvXJKPRpzpFx3FRjzxTf8fx1jmpjM5qjfcZ44gpJrH3iduRZRSUiTh3538TLnQ84Sa1zHu",
  "key11": "XzToaL9LMqk3dMESwjCdduR9DyjDq2zoGCqrXnZLpBG3TBX9HXyq5XHAASuByJBQ7YwKMYeyw2NCf4wv6u2Wfwu",
  "key12": "2qem9Znj5hjDmBfdbC2fQLoJtsNK7CbSNvri7ne9SpDFzGAfWtNkfCMSDYDqx36zKqSRinqPpmeWvpL8H7bQPgxU",
  "key13": "5Romi2dqPX2qByVsFKCoySGjEZSAMLvtuvwP9gw8izxtEeVve7eDQntiw4biwTwxsN8e2jiaACAzFKhq9ybghtVV",
  "key14": "67jPFUbqxCoWrJj33GFHUt8vetk3mRhB86QF4fK71EcsFQjZdWnEoHgd4iZHcurGniUPpRy3aMs633aJfnRt51Az",
  "key15": "57oYZLJiTQ3mgvKkcuv1oHqzubnfYKQRaiLuQaZUZJaYhZHBm7BBaAZNTJH8gfvKkvPgLKcUvUVGsDX1cyhb2i6P",
  "key16": "uzBdVdSDGy5nWMvpuBGngGwWRfDoJUnJoZBTMFSqMNwshsWyKxHojqphh1pdMDABHWsbJd1KTxSFVJXvrSKrRdR",
  "key17": "ctDy8kPVP7sqp29uienhQdjR5NSpLwvV7tfaNf4Xd95myNhMY5aypoJim7pqBY48Wctn8xWYDTFi6hpDj7ixunN",
  "key18": "5qYXGHGuWvDpevwX4nCAakZWouPWmSqppyTNrThfbVL5T1hVqAbueUuhMwBQFXaJRpDx6pPiACNsyx9s8FPQfKtT",
  "key19": "65yRCBR49jL1xzFCiNkezGD7vep3kmhni8De7vzeHRcxiZAHCJBx6kjBw1bX6hSbgspM2ajmqK6E9wVSgrDQLcco",
  "key20": "5GngXBiBBC2ZwmNbkm8rmbyCvpQw35KgMTZfAP6rffXT98BE1RsNgJnmCaBVKvbkqNqq28HRrSqT4RfZjxW85LDE",
  "key21": "5Q4tJ9nXf4Z1737XMzwBdDdXzDraRnsJ4DH4xneXTWhDcpHxGiLkch2ZukU5TCtsTmZf4W4DzgnjMkrXkRcAjKR4",
  "key22": "2zpJBYjVy3FV3YQgGw9Mre9dpQ8btHh1uH8kpxFTPFRGHpfV2vYwQwfnYyKhzDcKc4LPymH3XVvQvjcbWwSzoY9Z",
  "key23": "pc2BoY21JuCnZUJrYzKaB1iqBYtLw9R4STRQjU4EcBzK8z4mM59anmLWWMWU6i8caRokXFgDwTqLN2KUqTKf7Te",
  "key24": "3vx2pwbPRYjZTnTPUTKQRbnGqzwYu1WGjLACWrrABoasFqMYmJiEHLx18TFHPC3XVjharJ4hh1qNkFntf9HQdq9f",
  "key25": "T3NjQu2uzjMcxuhB7VvxDthJ2vyQ5ntNugnRrLVPFdTN8CQMTMsP9Def1VJzEYQN5sCE4Ckmd5rhhDyyRfSCc9G",
  "key26": "3BTidBjwMJbXDLgREsK8To2so3YoB3jp43ApTUi9Hw8MsbwXKNp6X3opL2EApADRm6LYKrThVK5sDx7Eo1Yrupvw"
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
