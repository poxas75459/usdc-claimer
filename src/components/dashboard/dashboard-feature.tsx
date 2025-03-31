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
    "5uRXFojKhZ2uGn535KRPAzBg4EMPTXU77863J7hnPFeHScheYEaFWTpYsKVTdPqTfdMLa8KoDXmpLBHvweVM9F74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5ADVzrjkvEx7j1Ei6ryMQAS2Gdj3ZEbk1BJ645aceXcQmNYjcrXx43rccAmW3y1u2fNGaRrygbP34zP2WWJic9",
  "key1": "396zpGEewYgJvnV7irJD4WZZXxokEQyY8saagLzHmsMjGxk9fjCXEPvdtPEZ5XK2CFoAfwhYUDpqWjphLGZbQadH",
  "key2": "587WmrUfRwxfw13yKXJtZWY4RNRz8fzKnKrCsSHzh8HZLQRdsXrf6dD6GBJZnfR2cgBsWFCsQgeLpJ384Kf2F1L2",
  "key3": "4qV4whkKDwrsYFGPu9Z8XkKXiC9iiFYLgABTrq5Zgz9PxwSGnGAVfSY3Hu51is91kH4hWMKGLqNjpreJjzhxEa9Y",
  "key4": "4PvmuYrwU7NiWK56i8617tNXvCt1MeV5yfWuVMQ12L6KkmmCPDN1S7sxgeX8uGRCJLTndoCq3ufziPY61a7nNvD",
  "key5": "3hiNDACTG7xuFJz4XKPa8s4xWPCZHwtkQhzJQuesFUBMPZCqochyt9LnmmX4X5B1uXvJUCkR4q4dLAgGZyVLjMEZ",
  "key6": "2P5Wf2mNGg7gNMsZoPJPF6kcqzox76i4fRxbV5b2FsK4PSpKurvddrh9SaoAHVBANjEAqWu3FsZAH3etyJEedBAt",
  "key7": "GUZffiAgaco3QbNDh8Hvw7Zjbg8wHWHPqYVHZHbpdSVFULAojRz9SkN7EJHS63q1JtPsTQ22tT6XRch9P2pbUVj",
  "key8": "2tsQs26cisU2Zxh3p85shS2U6YQbQSa6JW1UaAxsy5xrawjUrvttVcSKo3Q8m7HYavzBJtdTKescqTPtJq222uPV",
  "key9": "599cD4pEvpX9nQQTYVgRrfjdA3atboAbvxKK6CoaPRWKPhwE3BesCge2g9XQyeKRTxQgQRk9Ko636xyCvrDZM7ok",
  "key10": "BpXkaDkm2qi7oFWHMczyhPySd7AbZHZzbDjx7uD6wY2FcafRNCAyr5fL4oqiQhEEBEeqryidCxFCLh8E8bpncgu",
  "key11": "2qdMKinpf3HsB2KQmS1NL9YVa19meXdinjKtGFeqhZa4C3kjqjuTnmbpHceMC8tEjHukbW8qPUTVuj6ndRS5i1KA",
  "key12": "24esu2JSRTgUU5FhPyev56Pggvc2s5by51m98qQpEtiuf5SdPWRsXrk81QGD6KZHJK1CLxDL8VKHqqduixh2jWdi",
  "key13": "kQwnAS4Hv24B454TbTJ187pfmNnew4ViJo1zSoBWqzJ8Xn2TvPDAizfU2gpsoy65xwaBhJDm1gLAUQmRxjYadAw",
  "key14": "5pu5fTcUNL9P8vVG86uyYosCvN2eLgJQkYvnjsUCGPTdj37FMgYcqZDMjVmb7Q7ZnBmAfBteUVT9W13MughDpbbr",
  "key15": "oirxGv4fEWtLhZWw3FyAMQniUppSmoHGvLD4e4MBYzEqVrFujnfGTyRFYWbYboZXFz2BAHvHAiVkGQ7qMWa9oKz",
  "key16": "4pG8Aa9tj4747SkZtzKXJJNwBWcWygpqc85oXVLWjdv5fjYtH4G7qzex7aj4Ug46eTindzHg15R7WmWEqZLYaGaq",
  "key17": "3LiQoPgqF8gNNDUwFpaAKLTiqzdnEw8QVP1hgZChFkFEEoTwEfoJULEnoW8XFU9Push2wKbdSvXMuqUpp1fPjuv1",
  "key18": "4TQwPfWgSxMmiX9hudsBVTyDQQhFoSKqs3hEszUFrGjZMSFqoSKbRBQw7dxbUW7uHnX1d1GZP5VDRCb9TutEWEmS",
  "key19": "5BbKoc9JBunMg8UtsXxts63Y5heL1YEuszv3f8WG4uxuRn4KEej96PfGfmEL9BY49as5et9wCMghjfg8HrM3LwsR",
  "key20": "3U4BwDZsUjpPyLX4nJftCmRdBqeyjwopA9ZeD5nbST3yHUNvmsaghUxUZ8ADNzcm9wguV2KUPq5hwMY3XGyd5K44",
  "key21": "3tXfHg1pi1daf5fGFDNp8SvXbo1UZkCfUUKvjFppRKbmYbm56trUL3V8rAgYRQvYdZfTDuC5kyZgaFMt2yTdTgUp",
  "key22": "2koPVZE1K2qwMaZbnp84qp7cdwsgzvHtU22p8zYcBGrJT33i1srujm3Cx6aZ8JbRBeTVLDXKgbNmpiCXD5FpPVtp",
  "key23": "dG1fRWPDt5Gnc6Hvoj31nRXwKrzzRRiS4JzAPGepYXkmALZxeQJGS4KymNUVifxLFiZZ5Sw2sRzgmuhQ85SHBux",
  "key24": "5Eu2VxxN4eQepPoR2rheggBVt7hJQzZAL2BbYiRSbEwxJTxpi6c6njW6BN4Fcv1aVZHV8RRc7Lswv4SeBGvqTEkU",
  "key25": "4zhrKixYENpd6wVbvhZ7snVtb7pMLLDUGhGdk4HeSbpCvKAZowGvwKnzgdFTJaoP4CRrNocsKCHnbWg9ciPZF2jz",
  "key26": "4qAEyHtCzaSbQsaZZAFYsTrirhua6fMkRsMLjb7zNTPTuy7LemQqzVDnweuuKnGH8UzoZrQ4ohm3SZYBt77fAYFT",
  "key27": "2Y4z4WRMKkctWJmvT3rN7EkEwWiy2XW1ct2qP9dHjudxjimBRJxhuDNmcm1ZsMmsQ9ZNAvqzB7iBim6HKGAS7d36",
  "key28": "QkarazLNC8SwvuNPwmuVzzH8rfDeyJB1vAxJDZq1M3tJhnuVz7Emxu8LM2nBEmV6YQGQKXQdCLy2GikqHP92Kfj",
  "key29": "5WUwxvW3zYDP6gpX2oj1t4ge6ZENEbJrJDDzNBYYD3v38ucswYyzMi8yJ7Z2Sz4xUiQbEwoM6uV21CzodEydEGYK",
  "key30": "3WY6ustVi91xwdp5k6PiGWi8fRr3sXbf3hLgdvVZw3sjf8xXoPPQS7LRUjkEeWKEZ71sSoHcjBvyFWqKVDUGXKF3",
  "key31": "JyzWbbkNBhU2UY2Jr74zfp26rSvbdbtr5fUs5H2Nw9xmQ5ruqzmSGnZAK8RvZ5DtMEbi76vhqKx3YmQQWfcoqAo",
  "key32": "3BxqqKHwpRMMywnRq3dxeSQxnKzDz6d5mkpd4Mxa3YKeDi1LiMXAEsgWdsemC9vDW1ynuwvhnf7uoo3X6uyMckXR"
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
