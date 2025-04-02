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
    "41Xguw9npNh7H2EnthJN1yzpDt6SSMgJ8VPzxcpBPzcjwfhknvMjYDZsA3Ue2t2cmiBDYDm54syXgmY7Ygz75htn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7TVGgSZAtHfeH9Y98rVCGojerctq16UdYabgW9fSqyr2fNX1jSuzeM1U9enz6DDMoFDBeviVQNaXRYj419LKpG",
  "key1": "1YUkqGuRhT5JFDmdFrbfUWE9e29eNcF8aiM8ViCaM399EgLsKsW7TP4cLPThXDQNPJhvrGSZdekCCxKUaEf4Jjf",
  "key2": "45pTLcwR6QNRnvkiTem2NKc52dQyp7cx97PtLswwC2Vrd2hwUGFR4j3GP3d78Mptxa5ca2jeMGmnnytBnL8J95Qk",
  "key3": "2T1xLgWtXv1FjgMqPixFxoKqhYiBZs9RN854982mkgkXbo3VQRSYPFokFFDZsLnS6KHvfq9CxEg4Kb7erd6n2H5i",
  "key4": "5Nf8pFpPjYeCfzcbff2QPUauEvEkzBtq5C7kGrQzRpfyGB4HPmUZKXzS89NiFJA7vuDK6rrEmMqX7XymXzg82sw4",
  "key5": "4oDvqvgftJ6HDvZLGpqontDpE7Kip4xHi2qJLsY1gcW1bq6KiyxpzDyMEnryi9A15CrqoTkZzz19btj8JeJMk4GB",
  "key6": "2m6m8Qk3vHqBmuu9zBbgPdymr3kNDaa9DBE7xgKJLrpzuwGbih9jqT5pQarch4gySX8QocYzA7vgSuBziX3rZsKo",
  "key7": "55fE4dQ6vfBrxVmfQ8iZKgf6UdbncA1XuoHL67J4wPr5yB5Q3YfJ4PwhAr273mRVHWLTC6TTNUarBy2XqqSt1Grp",
  "key8": "2S8nevYta5dSvqeg6iGF5u96LTpfcpuJfP7jVgSakz7YksSTv4LyU9auunxGY5k3awepgPeTB8AWYmCEhPcdrshH",
  "key9": "raiRUBVm9XsKPTUeShsXcFxT6tEzsQQzVoStqTprwjxurpGH6Zdq4fVCsoU9oaHQRfu9G2V6jKwPkP4ikovrJNV",
  "key10": "3Xw7teBSMBsDJ7Y1TXV5zL6h9j2kWEc2Nmn46D2ruVPCFCxh5eVQx9PNBb7pubHety7ZC1moVi8WarXGbq6udBWd",
  "key11": "36bXLm2mb6FVVhNKTeZbP4Tj7LAhYGEof2Bb4c9CQjauKotxA99XgLJrEfVaV9JHSCg2wZyxWLNjhXQ2C9k8NuVP",
  "key12": "2Kvr34t4qwjqQiK9nfSWAsnnpXCtG4i2R9diKYsZPheWBubkUmQY98RdvQZmwvyK4YACBzBkJzUywChfrczMGh6G",
  "key13": "3zhxs1rwnz5vLgWRiVsx6LVej4jPGrYjg4aFS7RAQhEhVjz7fb542uymScQbh8kmaohXRhdQAbFPVvk4oMpcBzmU",
  "key14": "2Ef9FNaEZapdpXGcYhTA3Gai6kbpka2DSsyHBp51ZSjt6ZibXmWR7eQSuDpWHsj71nsM9yW64qWx17cnnuDaLtvA",
  "key15": "fwKA4n2dCRkbwHHHTizAk9ZEMqg8bh31TnMjvm3DtxY9AAXPTfB6pwyTUFCRajKpb9TfJJ7qMrGkqX86QkSNtHM",
  "key16": "3aHbqPsyFG4qUGVhGrq24msusrd14F7vQSCXzjYkZofpRiMzQRhVriYWLBLuqYibuQT2jTbLtTHBWZnfctAMNxUN",
  "key17": "2aPYKHc2LmTwT8bXRPGhS2KjffrjQa3LR6XWcEn1KjhVtAnE4mqLXgGcC9FvzX2Ec6G3bmDJQoEaxu8cyA7H7qFx",
  "key18": "5KG2wT2myzusErfb2MHsgPy5Dw7MvTvVEDci8RoiVJEaMY149widZKJZZu5vuGGfx2kJUidjzTR4JxsHimGpar9R",
  "key19": "5sYbfWGXPZ4UyAXYPAVj4xUf3LF85HFGHKmarpd1VNx3LmQDV6xDybLQvJmEFzdL1RTistUhwKCGm8XZEgX31afA",
  "key20": "4zp64WRW47ePrzJFV2KJX1gemvxgZ4fjRHyYThMCwrmYvE5k8KNdAjBqoabKJydiJPbte7y8MKdhthbKcwLKN3Hq",
  "key21": "3PLooEsgRFMNpoGF9Wdwv15cb7Q1sJM1ybXLvAsbaggfNAkvPQ7vugZzPrNB4pvdsYQyzHVT5koJZoQpF2uQaca9",
  "key22": "2meN5WEfG2kptTEZgicWYxcvPt32YetDSQv42BgEtDH5WenBF7LizzzCKiTBHktdvzkbbti1pSv9GQHvKeC6cfJk",
  "key23": "3K9qLvB1XneyyQFoWMpK8EoPFeyL4VU9UxWb68kk2H5ywmXKw9LtJtgHD6UA33oY2NKzB8Ehps4NTs6rhZPPpzh6",
  "key24": "215y4HgEQUWGigRWRfbuuxchQKnVosUEqFqqtLzV64YgYWT75FYSzrKuWNK5WPzbJ7mwAY1eE6XGafjq9YwNySeg",
  "key25": "2So5zRH6ZN8SDa9S4S4MedDY8mReV88FKUtgJaLnK3ZzSQTNUoTS3n4b8qHAw6hrgbawQwaqoXkwxPyrrGAES41p",
  "key26": "qaCHF8PnunPr8U6MFxFB7t3pT2bir2TQ2zFWMEATDxpUJGShqQTqatemFqoXeFRXjixULzSzzBuBvVqjaqy9rhX",
  "key27": "XpRYp6DBnQU6Acv9xMMmm77xgBYCVpkFBRBZeWybf61kCCUG7GXrCP4VtxTmcsM5xkshH1U4iPN3ZfxCXx6ujD3",
  "key28": "mGWD7gN8ah2iKP2k3yVA2KMrajQtnpqxF41JzuBiZoqFuKKike4XPrfLNv6gA6YfqrhtRafek3262QfTYnRaYqU",
  "key29": "YbuWEqU5hzg76gvX41yGwirakprbt2peBhvrEX8U7CG8ikfQTQYEKA2rsircAcVSiWdyHr1guFVoMoPBoB3ETrj",
  "key30": "5sEY42XWVL4WFQXD1KX5eLcXuSwdCGuvJBqsqqkTYz8aSdvQiBWTQtuTCUWRBaKkpTGy8rgEvo2DzqLrv9Ynxvkc",
  "key31": "3aGbJFmLcfmzSrcP7SsUWL5cwT8YdVcmKaqi48qdQ6x53PG4TaU3bkAdzhBa44KqmyfN49osD3RZWWEhTQG6puxv",
  "key32": "4nxnXuTutuxucPXh59Syz1RPrSz1zuUBytMecSj8SQpN3j6gQrLXTY2ZaYGAfigV6AHCA5n7bJq7M1fHRckkvuxF",
  "key33": "w1h6R7ydVstVgQhCMhgL6fy3Yr3S7Hmt11ezqTtjbZVt99P5EGEhGuaL2StLyKPFbbALKMUXjQmfWrNcU9mEPpu",
  "key34": "2SpMb2Km3HC6wXaoF2HDYb3F3BY1QHLVhomP91JdNzD4c97XZtpourkqKG92sY9zeF6ExYi3fqDrkjxrMh8uwNf7",
  "key35": "2yVksJbJ4ZLyXngz7TwuM19WjhkrECgvaj8L2y4wyPbS936LBQuiAhJCf7x2LAMkN2dRzgAZViCMjEe1HegX6PjE",
  "key36": "4AMgD6bhNjCrXutYT8zqnh76HUpYZsH8b92vLqshQK7ky4KUVTAnyCzKZKoSzfYkXwiAYwCzS2QdqznQzM8E5x9m",
  "key37": "3xdtLkHJQYB79diTfN8YPN1vhY2rrE89KhyXcVwFFy4TjVTt9aNPcKtVz6M7HaoTU7fEoNZDZ3UdFLzGEGpX3c9z",
  "key38": "2hLx8V7QF3v5YzDa7S462gWRy2cigYf2gh9omdfZbnwEE4Cu6NcSG9iUHUVNjfCQUjbqZYLtvjvnTa3kdi7LHCWj",
  "key39": "4C5sqzaYJL68wVWJpieLcsoJwLkH4zoS7baNu4zWeiYYHG6YkM5NPAbEdqKLFAM4TZF5hiNskxf9qzJYVoCVhsov",
  "key40": "3njpuXjDeB2vNzPpNbPxd41hjcLzFAKi4M4MrvjzPnbHCMtMWbjhNzpvsCm45ZQQ3CQjkDibBrR4ojr2MqdxbRug",
  "key41": "4YaXD5a5E1QreVAG6XR1Sxcome69qPT1J34HujbKrFFaNrxo5PbWihx98q3iLq5DcnP2rY196i5ET3zJx2RwAjty",
  "key42": "31eKPZq9G6CD3gPGQ1AzcACWvPWLRzevbxC9ZQNVoprd9Q7qGQLCpE9LF96u3trgiypThpAPKXBjUuAVZJrVtWJu",
  "key43": "WcJwFY4dW1bvCX92foaHiwtCQnnWRPNTmRFQmAqMhhobywDuU8WgU8D7vXjGPYYaiQvuRhW1BQJtHvVcgUH7nxW",
  "key44": "23fkMqgMpEpg1pBKwH4JefVYRVKUTAXcQPWj15UMc8uvFvynZTY589gSUsww5LpK1LKbWb74TJB7Tr3zL81uFaas",
  "key45": "5XCyJLxRfsUKZjmQY5G8fekPJxHtahJ9ifYNZ8KZgnwBeEUovHzCRHaxc6pEy2oSVMDQ4ArrRaGBZuesj2RREmpt",
  "key46": "2i5cYNmSXjs45LP9AY3QciUqMHtNp4Aqz8CZmW2yhpudRsN6Vk5Qcj2xxzdjMXLX6EbqG1ggAkUUVQTNZuMaTyGm",
  "key47": "5FkWEuLo8fP68S4sTvndWEPcqs2YxfxXFtg9W6LtQsTFDJTBvpUXZ5drFFTmCJBfxEBzScRXM6jJK2uYY82fm3Gc",
  "key48": "4akiiKjCW9EgXonBFt8TnArG2SDakDsNtBxR9avMQozgGjp1BnFetLtp1QxTGMic13Vu23wouhe9naQezTPHBkbP"
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
