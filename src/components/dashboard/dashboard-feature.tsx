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
    "2o6bRX27G2wrypoyPireDjk1tgMfUoEXKhwpvpw2imN64gbVrRYrQsg4iiTzakwVuh5bLoeLoRTtnYz1DgghCucW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKoeeLi7RVWnRCkJXPfNyDm6M21K4XLJ4ny8pi1U7Vv3o6m5srVtii8Q4Hh9PwrF9cu5f8ZYgoJsXBbskCnDz3g",
  "key1": "32SP83D1E33gduB4XFwic71Ho6bTNbes97vQVdPoYfcqDByYdmzi4BLYEeU2SyN9HaStD2cz3VvADzmsf5yPoyVR",
  "key2": "4CdfRfTq2cJCe3bv5PWPZUtsBedzi75ZiUANVgBFRJTZmndjzVDqZBhqKmoZasYrzjSsd2F1wZHf3JW4894cwxw3",
  "key3": "5ejvezycxqxhNAjztF6LxsqKYrWJY3wGTYHuZNeGKYDMaXXm3Bs6Zh3GNn5gPrJucvvnLndVgXxFRUfuHvM2V9TA",
  "key4": "3Tbq1iU8TBGYNK3YTLaoMD1umjhSuruTtLvGBYSeBJYSMP8KE23Uu5e5TP7meeZRVbqwYtqBuxSTFKrSoLZS6fMp",
  "key5": "5uVgRZTsFeuG67u69pKTUWioBpYP3rM69ChCE1AspgTCgsC1EceAe96ayVvSiRTnis3u7Qf6JuyR4w79EXrm3Wii",
  "key6": "4Xs8Rz96CiesKaMMredCKM3DDF4o5kN5MYuK2j98dJeVXKV6Vhvve13vLuSzLYAqe7e1iiH464RLtdPcqbokPw1R",
  "key7": "PaM9qssGEG7csUnRHhavMFRdC2ByznS1W2A8dfq4JABapMQy2LTT79xuQNC6wZue99oaVZ7vjd7YNRbZvvYoUDD",
  "key8": "59Sjq1fiu3oxqWfR6uF831RRErESckYAk2nZQcaei6scDFnnebxtzpaCRSmyYbfyDn49iKARPDZ1hctK4ukTRT1E",
  "key9": "7enhqZcmqUz5J69YeiqUMAG1evfAQaYtq56TxhqdcC3nCqwRTbJecgfj42yTyYKuthXWG8tbmXBott9km56skcP",
  "key10": "516yWaL41AKLbp7tBu54vdiMqfovgTQv51cKZdJ3DzFoMszGyMaraCaLNgsxjYuLU3A2yENE2knasNcattE79Z16",
  "key11": "56FUybX1cPmcdQ317DL3aAdko228fqZJEoGziUjRGjx6kYCV8cB2n8ZonWhUidtdhqsZT4AJXcAgHLRqTPLykyc2",
  "key12": "3hXgHQjQcuA9wdb69iQ9bh7QNxMHWT4zVX9TycBAtPL2XUKcQwWNiFo88GCp1RKtKQZN9dBeMUkgskBTekGtbazY",
  "key13": "3sjtN9KzqyJoDTsVXr8TobP7hG8pWgTUaLW39qw9x3zjatKBjSA7M65UnCcNqeLRULeT2wKpi3Qf4TWYyv6PZUQM",
  "key14": "2gxXy8Pw1ZkCnC1yPz8VmSACM7oNY4r1JdkknBmwoy1ssxJ4mYMvrSNpY18cKbNzKDQ8kaAzzWobEdZzo9PD2R41",
  "key15": "5maFp8v6BYneLAMuXpTTvCgwavYy9kuHyDiBuSvyickyKiD1uW942cvLsVAWJEMEd7a1wNAVVJxj3Mn6Cy3dJmxx",
  "key16": "ZivsSSHYfDcuyMccbo2zT8pUpjoZx7DM46ZcMPQexJetvu2xR2vifEF2sxv4UaxPZvBnzCsDDQ4nUiwSqi661mE",
  "key17": "4WGnXtzy9qxUVW4h2RwcBS5ZbDVFJzFVAJMS8qHy3pr3QAfD5yTTx3XiRFoJ5KXM49oYYnvMLkW62NtjCsurRebx",
  "key18": "QRccs8wdr5asRfHyBBTVR6GGX3kBR9HFSGHt1zqjL8X6Etqa8VD7RvxoAuYuWp2QEERscZqaygVUjzvko8NzL6F",
  "key19": "4PudzFockRZvVxZrx6Zc63PTLcJh9bbFJnMiK8gKeU8JQ9BNVx4jMBVu9qrXcwz7XWqcHmzp1KMNNBJghoUqye2k",
  "key20": "8pxLb5NEQs4dqw8Qu3dyuJKEo1bCByrTceJuohEUNwcCbn2ZtLBc4HL7NWF7ypYoNX1ZNXyCDyymibg5UFfhp81",
  "key21": "AA5G2pkWyzi1LRj1uLhAFeUwVsUyj1hSdyXmJXzw5QXUSGr7xg7vKa8FrYgoRUAs6yHiXqhWXgnZuyoz7iCHiax",
  "key22": "58z8AZu95Bs7Yi3ZWpy5sjjkPLbp7ujCUAfHu7xpsQ3f5Skpw3HWv4Fd2qsm4WCtGbAuLrcPbhgTZY39Rtv9ZE1u",
  "key23": "2iVG5aCAvndaKmeiGXT4mEjvkyMGM5PWYKFr5AaBmXSbBy2TwmQXPeXHDHcy2h9YtXqTJEJRrTQe6wv4cwJyGRze",
  "key24": "2f7rQPoTeYnpqAGiYnDxq4djZsxQHFnc22Nj2rJK8FhkhaSMP7SsjzH1aN44NPq7KmMpbuYdQupijJb7dCukRYVk",
  "key25": "3Tk8WQD4VLd6z3bqonbetjbhhyfUs3UAbDhRGTeCZvWDmFT7aqSWtz8Qg1pGo3FR6GCmeLvkrdj7LB999TAf7H9m",
  "key26": "inCAUTxzuZ2hJtNi3izEgJhjT7bWdfDSwc1c5cusvdFVzHGu86xS6pkRYczFCFvP6nkCiGpkBCXTNFSVbb9RrgD",
  "key27": "24h1yoBBXimGD65PqiiXf97VsEFja1SHQfjmP2KDhdVo6AeVM6o4CGtEU7apS5NqeNsrNEXZZnLK4DgsbddkiUvo",
  "key28": "3PPwmChhwLwzWSfYbQcSnBVBsF34oCBjAnMFKJco3Vza9Qdv9RFZq74eWFZHLw5vY1jbTKTkLL7QGyW4yr2aXMWx",
  "key29": "4WQSCvVq9uvxuYUAM7phoXkkfSM41z8M1FRoC6x6sbqpxnuos5P8uGgfsCEpiZsSCVcNFQ7Nw89MfBkwAsZutLwm",
  "key30": "3Zg8GsCzqi6jLtf66dwnZySKhmfyfVDgiJjcHguo9Lnueq32nMDoaNknkSx2c8H85P4NehuSq8RAmzxHaKeUVWVe",
  "key31": "2Pn3Sn6DrxFvybtdGh9avL39w1vYvmWhwfSUaJ3hP7Sqt46V4BLHpAc4vBmvnViHysz6idwAYoQqdSMq6CRxPPDd",
  "key32": "3vhwWiRfZ2gHpnviqHYHMcyfPnwTHUvyfHQhw3XhDRPc4rwavkUxA9crYM1G5QMX4GTeq7VeJb7HXUPdmLfjTdo4",
  "key33": "2wVrdQXbFdTji5oQc5R2Up83T7S8zMRdxkG4LJjx9YmQeV8mU2D3ypAX16LwmdDAdVa59KcwHo9FShxwvXbESr1E",
  "key34": "KpqZ4Vk4XAsZEgYhFQcoYDZv9oKucyzwrCCVPjmXPaPDq42Ljv4iYtuGCPTKeFJe7sitEdSAW31S14DpB1rHwrw",
  "key35": "qXqbppotSAhBj2oVJFBUxJxSRpNSNsyDw7Hwx9FXG6CcrKpvNRri1uEfJpuddBKWeEcACtRkZpu6z9k99554UL7",
  "key36": "5NQsvXuv84ZARMLV7cT9WwDJyzoeTEnNA4s9h6dn1pWVZEMY7vBTrC5gXGCSqddW9sxxiS1E7szXmvuWYvGVZZwf",
  "key37": "5y1ZVTcn1xydLJcHkL6PSggJEnjfSAUmjVYZjk8NCPR9i2zDQL6gB52y4pY177trgmbZ2q6PKFnVPuMiUsPL7gUS",
  "key38": "3D5Za9zdm7t6nJJktp2cWLbUmEYWUvpQBtyDVXU7JuNigFVujgbcCune8CyoW9K6sTdixv8HuqHGDGfhnQLbsqvD",
  "key39": "5kN2jeBH7ZbrihTMFZSsdtipTokUvQFnghZ23w2tEtiZ1b6CjhaUs43NV9U9BjzPQt6BJaLwJFHxGdN1rynn1EzW",
  "key40": "Y64dnUJqHLmeNcoiVV51BCDeq844VFiPFSUoRmTdkbqUomPiHHnCxr817XJAR4iQd8nf4eRzGa8USHveuivATms",
  "key41": "5Yq9QJwwczVLgTbNnaDvJJkjdmUkNbLQbUqq3upuZnk6VRnBzzs8tFcXH5RA2r9JX5thh1ZbwMhWrHPW4wnyUEfb",
  "key42": "3i4z8L58muSmFXBiTTjnfLWsdSX8oz8LjDS97Juk9a5fB8aH4KeizDLcsn3qVjMAZ8CyUuGs6xXmTnVve33m7gWB",
  "key43": "Vnbfzfj9xqQibeFiHBBeAPxRDcR8rGUXaJ2zaw8fm2jDYg5jwiFyJrToBsZkSpLmTSRAWp522w85qFLTRUpk3gb",
  "key44": "29M5igaSo5ZNVqL5QGB3mi1B8QUee3aT9crRTas4dAGRwWWULX3yDp1js6boapmL8pq48Aao9zbnvVQgjVzx9EnR",
  "key45": "2APPLmB2s3YJMNT2UwHecf3BJg3WRNKTaejdgtMCdCGcycWn4jDNp5gPL7SYP86EmUTQ5tnXR1KiJkpkXN5ubbGs",
  "key46": "5fC3hBzHNiVmJtNus3ce9Z9gDnUYrAwDE2ij95p1HhPUiURJMMXxq6CQwBfZtsYxFHzS9qHwVsVhVuGNwzCtNrQn"
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
