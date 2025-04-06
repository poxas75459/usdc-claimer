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
    "QA74f2rTc2v2hr79DuXbRhkohCQobmzk3qmMHhh3wbiRbHJ3xgmSbJS9WzCs2BJi4LmGa65bKemft5ZaTgUzSCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Kb3Bgb3owzfjNkJarXiGRyaRo9crhEooV7FMAf42pWrCaks3Xcj6FQvd9cDQqxWK2B5AunfmuXyRN3tPXMSJUh",
  "key1": "3p8wcqoLEXXeu4LNXeCwUtWjqU61ddFJcQqmnpuddb1o9JHGsPLCo25bLyq1mHUjcvCbPz456q9tKtJEfLDKsvD4",
  "key2": "8qQaGtx35z7MAX6dvyTMXCrTin5Vq9a4MGwqBrXSb5wZ53J5d3XEqsRV4qq4Nnt1ht1zmdJawCX7rhDebwW8vM5",
  "key3": "4TfXnGoMVNkGn1ejdHHszbyXpPrQ48w4mvUXDsvXf7dm8MSNrfzpy7nxFSs9LoaFVMX7tKGfjC3TDnQt1im8mimN",
  "key4": "YvVHWc1sr7UsZVvUZpkmVDAsnbhqFEEb6QriS5xRYaDrJAHDuY4bJYvsDJ7NVc1VUzaeYKPtCrakLJWqpY4dtpT",
  "key5": "PNthq7n3SyTSuPKTEP6qNtz77GZCwrSESgRCrMmBfKKBcUv7Lk7aLidKJtEaPPbwtCHNnpVUjsfUkZhWLcrpSDi",
  "key6": "2V3DyzGeE9CwTFTBs7QskBYgkk8Exe1xzwQ67LiCAzjUd4DEpGHH2yDoHJn8y1pXs2Ltt4J7a1Na4A2UFtRRr4jW",
  "key7": "4ZmtttcxrPwSGdK3cFoAGUyUA42ewKHv45hvr1uF1bdz6481mATLGPZ7FDwiHxgkXVbt2bonB951D2odcQaBc7Kc",
  "key8": "2QWvfPjYgHWKcWdJuyfu4ADPmMNiMKRLSx5Ttqzr1ApofcjHea5HpUCzcAFzZPqYfy6jBXuzbwiBfTXZpLKJqxei",
  "key9": "3dqP9xnmAD789huGH7GQnCWPsygKmEReFVFnLkdoRVUiDo5cJT14eU6gW3gzSwSJatcvoLPoZdem2aB7i1fPNjWj",
  "key10": "4pcMGhyCg3YU5nsdAQ3m8Yo5NkqVCSZ3K6P2uc68dJACAJDKgGLTw2YewaXURFMQWMxFtjS8YKPxCssQUoZi8PWj",
  "key11": "4Do3qeaZHfPGWN97oFKjsvtDPSAKAvU4RatnrtYt3pob1YJkJpVTgLFjutpYBYs3AXoRmUZLqmrjHPrNWMnAUcAa",
  "key12": "5v6cVeb8Zsp8wiHtAMj5qak7sZzv9YRrs2u42ReiDer5Z2rT2dt7EuMa9eywJA8bkSXUD7JJJVBox9G9r1dbrX23",
  "key13": "3vctsEJBy3MG565niZpbosGcDjWhVau8F3pTD1ySQBbK3KbHhK998K5vPAPktfKKzRiQtKrjAgisnHWQkhRVobTC",
  "key14": "2d3dqtaWMUddrkhg1fGvrkA8NdPs6QKPmi54xP7uPhBBG7jhi36zguuKaeCojGBFMY4mYCvvpR9C9C3GpFGYJg6a",
  "key15": "2mAGeEnUTuMYoqLtWQP7sV5AVTX7jXhjTJwaFqBJw9vaXaWQhWXKEb5mmN9r3pG6fhE26vv2Yb7Yw1MMCaHG8eZH",
  "key16": "3ACPr1BrxZF1d3mANz2r9WnUWL7MWVq5KNJ68yJaNd1s2sr4ve85RYeE66i1xorAqJiq1Nr1Dvgi15YEzKUrhNic",
  "key17": "NbF1h1sqT8oZPD3dq8C18vfyukcXGQCeZLZdmGJpRSDioEqf72J6rKMnrSmT2z1hZjW7xJHxmGTcKEC2Vv2wiEf",
  "key18": "3ABfmXSMFd2P9YvoaKod33fpVRhD9cgjJcVwfNZJvvYD9LX56S4JecSC98kabYkSWnN9onWgy7J2hWjRv9wk2S64",
  "key19": "49nZbukzQ71AeKL7hc5euanHKBTJruGm8989fs2UbFiRLJcGBYyKeWHAZbA6UPT19MsFoDu4bFJSBxVroDgpiUiQ",
  "key20": "2cPpZZ75zjXkKXTjY3hjVrd6kwErBjT9PgnxUrRem6ur8Ycu9PMXUiSGdAzCpKzDrKqKqHDKRc351Lv2oJsaGWyd",
  "key21": "37DzdavpiiC3FGBMPyavpGRigKcZ36o3hB99nPcWQ6FYB9WR6XnNeZbyg5TA3dN8DdgZeJnV9U383wF4jz6YN524",
  "key22": "2JSq3ZgDAThShptKyxLTJPzc8wg6FLmVrUYHEgMZCd4Ue4Hs3dpvDoK3DG8ZCmmYzamXWdkz6x9tdkuGHXGnYPVv",
  "key23": "4rCyJPhkQ9HRGXdA11Mc4n8iAZ4mHP9jN7Duvwvx24nrkeVHmioPvFmYidjMN4miaKr7YaqfrUNHzpovZN9hyeZ",
  "key24": "3sqPqsKoyRmKSbrU9JHoKuNJfdkECzQWXiWCayBvDQtXoy6b1wLn23yViayxTPM93sNygqt9AZWDjBMUDWJB3fXd",
  "key25": "5R95sTPxndcoNKP2JZKTkJiNJAzfCJmymK8tC4dETBaxqRujcz3mtRMcNVd2FHY4WwpUi5LUcLwo1CmrZxhfzYze",
  "key26": "k2Lb6aYxBzej412jj6p1x8KkvB1d8Z6KUBn4JYFYokcHu9j9cqjHiXPgfPMjCnP4uTyMZUwReMDvHJr1gMgKeXh",
  "key27": "tvoXEbUBsgUAnuGHrCvziu7EpShs911P8uwhGW9Crj1or3PZbdL5VTbJ9v83qzYYzK3eJLWDA6m6PtQwS2sCuzF",
  "key28": "3ntEoDT752VBM44GhbRrS5wJGTC9W3JyfRdYWZeczg7ubSVK54pcveTMYkvUHExCjTgc25ZzjrivfTHJmNN325ct",
  "key29": "43oSKbYQ7WSWBTK4jeNRUN5Swuu7CsxTr8VuYrejUrdCp6PSLG3gLykRCUBjsWY5k7TbKy6MuwB765XAxZyTuYwD",
  "key30": "2fptZwxX1mydJmtP6Qtmoy9hNkjvX7PxvgUDiA2Rhw7ECabmPYY7K1hhg9ZbC4DzwGrncxuDeJaPzmEsHbgS7Ynf",
  "key31": "VK4v4QxJzfY5srcY9jB8WRDF3nt1rx6KsbrZVaFrJpJ5gAquyr2vtc4nxUubehY2QuTLJGd958n2M3gUBLeCo8n",
  "key32": "3zdLxoy4857LzCFoy3DMEzytas7BRRCskedQwSwboSFvmKu9q3jM8qvD8f2rEnDh1tqmLotHyYneJTca2JKYW3XX",
  "key33": "2p4RHi7MBk9fEwfMEVQQPTcvkvb8bUntyZw3ivPyx8NeEpKWcHgYcVmpfEXgLccJ1YkKEecnuaM18DMaY9dMffnm",
  "key34": "2At3XSXPgNtSa6t1nUCo4qj8s4M7Hoq3HJSBqvbzKs87V1byN6uPks5XPFz55ji9AJAeVHQyhyLnz4Ydv4k1iqT3"
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
