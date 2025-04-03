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
    "7Cbv7pcoW8Jj6i7upEJp4WGhT3XEa49rVytdaPoBn2VR681e2bx6beGxKvrW6u2Ewf71Vk3Kp51LsD9M71xJhPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxdSjZmEothwDBgrnPhnteNpsrpPR1cwkjfew8jEZ2gL8euE6tCnVx1jXsRUgPgrtpQyw5AA46fN6zjfiiYyfNG",
  "key1": "4Qmugfr2NkxUU5TQPsy9W8XnpnZPzXSbkUno4nDwinVPqJLxmk7YFDKW2tgTv1NMYLUGihAACQNyDn1gsGYA231m",
  "key2": "3NBHNMajzqP2zsdeb6VpvSFYjjYjtLjQaFy1BvG7CuGy9dLHhAGUeysVtH2URye1RrPgCoMjvciZxDBeh8YtjtzD",
  "key3": "4WnVSJfT67bR3huaCAjotuHBmh4819iM9uj8RSA5hXkwn9br2gdqkyzUXhvXyEBDwyRCj2EkacmpHsYEJkzRmqT9",
  "key4": "229uWNapvWbWu5hQpFCc5fk7Uuk3BNmMt8BfVFHFfb1buRWXHjW1DxXcKGe8vpwDDt4dRq55iDTMGZCXM9Ggje7e",
  "key5": "673FF2PDCiNcCLCssp2rj65XSg7xbKK8fiZaaFC1sPbUjk7rKk5TjhTm6j6u8eYqGRM5HKMKRwH2hrLBpeK3DcsA",
  "key6": "HFwj33HB4mtYVA4EykMhzmHZiKMyy1fWXeh7MtvKHK1dHFH8gbg1VtnfFyggjbDzNGbFV1aiA71EixzSZFw91B9",
  "key7": "3W7r3qhceZsir7J5GE1H9JSnFUFFwqQGQE6MQRrm7t4c5k8JtqbiLyYCsqjecnt8Zmike1fSTXHfNg4veSk4gpmZ",
  "key8": "NbvpWnjPMMDNEcbQi5k7HGAPKDzVMP5LgeiBQUCa9PmBtqnfRgDGzvJPNbPwcbAkPTvkyxKn2gWpUoRgaRMWido",
  "key9": "3EwUeUK4Fy9yfFVVQUMWKX8GZkSiPSN7sut1WevzHpiuQ3mc2Aa6ZefBjXgRboPPoZbBKEzr716FZdqswizP2h8o",
  "key10": "o6BfPD1mJxYMr7pXMm6F4VKHySMwD2KKEvcdwHiNzMQyPy1eYSFYHEBT1kACHGoksA2squRqWixruMduhvVXRLk",
  "key11": "5UZSJvM7P8TfS91gZQFASvyYFgRDefM3pKvbfA27FDK8R2DnavaCRWhtiVF4ZN8RvZrqBeGpp7f4G7nWLJx7cUP4",
  "key12": "4ibFuLQjSwR4NKDJYC8LfpMCbxGGwXBFLdWpZQz5rne9TMxPAVAX4n5Qyp3KEDLiRh3Htdm11xXs2q2QiYH8edU6",
  "key13": "3U9fcFLpe1LNPa8bzxQAdDZvULnFuoQiaw2PRCtjkRS6YZAVbNFog9jZtkNvEMQHUG8GcqEp3pjZbTKioaZtEp8w",
  "key14": "ZxP2VAjLgJpfxujkPoV8C51ayvYdqUeNNzzPNSngCrFNyCsfVHh2BQ6AzniuQpyRMLfbU3MRdMewXpBY82QnCg4",
  "key15": "4NZTdBqKoXsPnFwRLwHE76gWLpwUNZ1tRPEt5SjxfT59Vhci1ZawEiD7pWEkmVTMBi5LLd82NTcvpB7o5SQTyd5e",
  "key16": "bfFbcHTL7usmU862kWxY86Yaa6DZbzLZcBygPSLWy44JdvSZNgG5tGYikb8CnnSPLyDxjRH4N2dhbfTUBYtb9nC",
  "key17": "4e1kvBEhLYia5nheE3FvzvN2SiqE9nEWg3vFyD7jxJC4zCtNDNXHguFZ2BtEyGbGfdBLVHfBkuLFkyfu3zamobS",
  "key18": "2yYr9exZQ8W1uHtLP1sDVMwiDv6i4NPUJYMWsKyJxMATWu9qJ87YcMotQJ2qedLsEtHTYjPXPB9zw1GTPhvv4GGN",
  "key19": "nY1tuJagsZqkhW6QcqcCsUdWnGAApH2rN8nTHfcR7rHuQyyeyCx61Q1qyAwg9QjcVQYmPfuFLghdf4nCK5ay5UF",
  "key20": "3FhjbyH3GoPnRwR17mu3kY5xgffYBgpH7JQqTdAevVLjZeMTyLRw8snYCYUR4ZjZRSpS5mk3e4tP6xtX29Bs94e4",
  "key21": "4bCPBHaQDY7DDX3UoDfXPKcK53gp6KNJdKUiQvJPdtCZZcd9TvZkua7oZXtmKonHPb3gGs8MdgwN7qjQ2QBT3T29",
  "key22": "4xtniF3DdXYV7PfrhyRe18SJeogfdePN72o1oGS93k9jw2DAruXGVeVLEUFN9xu7yo3fbnLd8Hk16ENARLHBdA3M",
  "key23": "4Bzb5YN5pr7xbaQkRN9gKZj5UEqKkgqG25WFLka3h254hSpEQBdDct8t7E8fpHVniziskjQvNL5dEYpKdccJtdXH",
  "key24": "33eMETV8swyPSh5FKzrVuatHBnk7xFDTqYmj7DhX5845ZT23VXGtpoTwTCSM1dJ3X2dQFj12xQd3SFN8RZdz3twD",
  "key25": "Jmst3KCTLPEtYJRyQC6WVXkAEde8a8NTmAvS9n4iNvMTmrMJ45PEEsHa2Jbt57DDaYaRGtJBWfCYqYC2q9B1uz6",
  "key26": "4HTuox2UU99QoxNHivnSqm7zB2dHAnkwoEjJoDPGZogzSMo9yocnwPLaExoBAMVuWF42cUn5dZnybDJLVZN3zSig",
  "key27": "4ABVtz89Lkf9erTDpy7R7AXLWC6s9WseVvsHx3aaDGSCRCmAreHPkWfYYswBsNxCiK8S9gsEue41PZTcW6V267dJ",
  "key28": "XSKwwSuB31QZebwtSp1FvAwiiF7Mmr6TH29y3ppWJrxindemF9d6zn62S8pqqJqSk1m636Nw8A8cpWEtGADtjbj",
  "key29": "4cmm84TLHXQutH7CGnJo68NcZtxCNZmpLXGa83i1hkSpAzaWSFGhtwWBz3qMG5HgvrQbkcDUkNZvzLqHrSmktJsA",
  "key30": "3ZHciXZR4tHJ5rcWSKetNA4ywCkj19icmqDQpwzj7c3gDKWaAzAyrMgNH6AQiNZxdCHD6kW1cFUm4jukS2aKpnvN",
  "key31": "3wuNvUzT6QHVVVrQjSwFYF5f8TtM5wHh8pKPfFCHuByni5Rw2Lse2ETp3D9bYsQFbVHSuWRUG4CDefggaZeXm3fq",
  "key32": "5civm2Z1ZMweQMpmtoxLbJpeCBSG5U7NhG9XvrSFqNhcmFfmXatUuW5Yp5p9AkZNzWNWPPuPT8oQoy6sL473JPqJ",
  "key33": "LWc8fdC6949MjQGmg47YUDbdiau5w6ALzBEkNUzYXxwDHt7HmbBZa9nKw8keyLT74dphHZb7T3GE6rdp5eoJJcV",
  "key34": "33xURFC9pbJhehhLSwMo7wtSjwGbuiCQHB8y3oTH4pBL5mdtU9y5yn7GYD4uSuvh27ioAYc88cwD7XrNXbKBoqKB",
  "key35": "3NQT36qmhdVFN6CtJrqSYRkyEY1fojge7qfaAicMMgFbitU1jS83ws2d6xFYZBt88zpUtbY54D8UeobKLKrfKiXH",
  "key36": "4y42tK33wmu7dwurzveAwozJ3ddFAEe3UeXi9uMxMj3XF72UBL1YDS6aRygExhmKKc1rN43hGMVWJwJAofx8BhGZ",
  "key37": "4CRSNJ2t2PJu1mRr9SNnXBQ7KZ6gazBNztu6YSd8Mj5BEe1YuyhfuxcP6MHVaXR4iByhbYdu2GvHAoz9JLU6npSB",
  "key38": "2BqdBgd5dxUjTRJBmUGa9AckrEzJRmnwEUrdtCWgCx7Ar5FNCYp8VEeH266TeW1NrbQn8MAVHGq2QWN8gnLYuFJs",
  "key39": "3D6oNkooogbtH9gopQAgdaC1tBuxNu8JT3c6Y4TwAAcrQwPfMTDEKrv1fPF9mpDfNJ5GjBxLQLPaDuKLmDWL6U5w",
  "key40": "593wmEByN9FYS4nTfHZzNyCuMACcvAyqC9ihYrEn1UCJhLR5MTCpbZTnt3zQSrXKPkn7RRDjToLACQ2gzHKJSy2w",
  "key41": "5NDDaqD4qZqN142AaLkVYfnzoiGUEMGxwS4MUhXAfGkNEkCEZZss8v9nLcfgACTPDtC5aQrSfBM2aG7F3qMo3GX6",
  "key42": "21ZVEZHmq5DqcuL9gzF5kUCypsAYn9qDzH843RLf43KAKjuWj6a2P6F3mfGrNRVuARGVt7wZZDzGX85cUptcw4yC",
  "key43": "3mspACgSRCGFnzqmBj6cGCnqfPvKuRmSvhVvWf9XGZnQ5CDZsPCQr9MhntbF5H9dBUdgVAuLSdPhGVFDQmcE4RmJ",
  "key44": "2Q7rRU8J4FZsBESdWRdbZNyQ2pK2prxf9PaYguVHN6w9NavLHYiQXC1FWKaF1QmZrcjdQK4LZmBfJrQ3Tgnt44dv"
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
