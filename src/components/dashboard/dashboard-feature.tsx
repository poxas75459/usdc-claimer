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
    "3qD3A8hPTxuV2tfACGiSa5j6MCHGhJsYCsPXABeQCHFqCBegN9kJ6WRtoqpNwpwUSxiD91jGgvcTnrWq9DF6xNQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57VKUx4b3t41vPcYzffbENQsuWYEUYRmVRU2bNHNkiu5rDDFPJgRsvbPWnKgsN39CVWCP6rXPV4k7QY8tcLWrWK8",
  "key1": "44twCgnh4hHRxwP8Hmjwg2VUM8Kq3qgfTxJ87ejqHNaXC9Feeo7DNRPHpULtHdTzArX2TvXv5dC7vy6jxxTPrqXz",
  "key2": "mSaS4bDxSvHtkaeW2KVXw82wwYxwvF8LkGXfwx8ycnjvbFdhDNVrGscXpMtTeKEHZUemjhjcW56bX7CSSzJfmsi",
  "key3": "5Tp9auKo4UWqSZQr89pjFa6yBR6oMVkshDhq6bLx7PYw75qqM9XPwBxj6zZA43LJR9Z6oR8XT3eYVpuPqKPKYy56",
  "key4": "2kAe7h9VRKyWKr6r3iT4vAKnueNcq98wN4PwLR3ntouRpgQv4W9tpgwwPCeYUcbUo6v1Zadyt5jZv1q71oSv6aTo",
  "key5": "389nxvZrwQ3R4kKrvRB536oCNB8UsxBZcz9u19FHpt4P7LsZof26po3HxNaS79MYQmCEDMFg7VDw5q9nwa8jrfXZ",
  "key6": "4KySxxjyshVbCUUt1vCHVEwa1QrNK5hb2Q2WUuswDCxeiHnmZJ7M9r2fhw7nFLzfEvUh4FWnX2cDE6nuVBFBRNid",
  "key7": "3zFF4SYSWjXpey8oDMx6CmRzQimJSSqZ7nPtuZTFrWwRYt8Z99ZzpHAtpFT7wrVtyF8tAnuW5GmPmvEvwJPSPPvK",
  "key8": "57HRNniN2bDzPjhitqpEaLNDeSFHQoBrH6tbBcR6maWGh5WmtQtqpeYs16CaUA7Ed2cNdBnKzHEfYp1eBZaqRtXs",
  "key9": "5y2Rj2obJHZGWxfj31RSvx6qXY2WjcKFcn9mkWZmE9gzwob6fhZrycNhzHdqMx8nXqkGFhkY32v5c7QLSWnBkQw7",
  "key10": "BHuekH3EZWKbHUVrqSioUCaxQqcTsD2EJbgFK27bf9SGf8Gh55EJPTfrwTv7bLoA21HprYx9EvBGfqJZ1EmUVdU",
  "key11": "3uqiShNrb5XX7kd5yJAWXAyJ2Mi9zKgU6pTsQhKL9RSWg9TMQdCmvHZLcskqwEhiZvPZSka3oy6FFcqnerkfv2ci",
  "key12": "DFm3fvDnNUKnBo9KgCBAJQPtBqtwAWDxbj7oGznx9oyAec1TX98SQSRrfPJyXPdvvCya2HEYmwMDrXExbjagVgW",
  "key13": "3haoJiNgxFDP6F3uERLHDsCkeUTJT8eXr3McnLLWdcgH6LB1UxsuhwAzKsGfqzAzcP4DENjbg3UCg4AfjE191iso",
  "key14": "4HR556GCML38sutCUJvinmF4rBu22SKfquu5z91nDGkByPRUC3CnqyW4omyrYaSaBt9HpBDEyyLHEwnhRPb4m3W",
  "key15": "5yEtinpN34AP2VssE61oAEYppD9aWGvR2bw3Hzj3pSu5c5nYEE1GKrirnMT5dkgmZ9YWpPRYNBFov8H9ZVy41879",
  "key16": "5ixU8GdhbhuE9QctDRbjYu7F39aHLwBgmchfQfsg3Qv5fGcfzYqA3TAdjt3TES14jg8btMDvkSRA1iaDF3zBXVpH",
  "key17": "3h8tvqQCMvXkcHJiH6g5qCoXets2mWqEGJxaJHXu6A4kZFLSbmsuEagMBrmVPZQjHXokwbnrYpcPuFKg1HXP9oCT",
  "key18": "2DqtGa8uYL2xAFTPigJhzF5do8E4RVXdiHdpu3naqAJSwJBGqtMf7jRFfGEjA7ZGbYoD2sWucbsZUAhBdD75fSU4",
  "key19": "4JuqmEqagx8618ArFhAvJeRmzj2XFwy1BKxjWLfXA89cM4wpBuBxxHkbv2bdD88T2mL1uc4CmMmYTgLgxHBbDUsX",
  "key20": "4TJ7z4nAziUqNFhmnuwF1r4pkwaium6S1bj8hdsCjo1Q2pWceciurB5vns4DfAQDwkRJ8456LryBcTWGnS58Zng6",
  "key21": "4LMAL7DXwVGX9ecTUuAJurnptV8jLFrBJCK3ct6siXFyFtHTRQWJCKzPxFEsjXQ4nWXXN7QX3UfAGNgQRWgkeECk",
  "key22": "4kZGfGPgeh22fZAASYTBJPej9Um5FuZe97DWXe14T2PEy9tvBsu4FNXWDXGwjAvGKBjj1TEafLxTqnheSG5izCW6",
  "key23": "3DwJiqtX1DGagk1rkT7X8aCynGg3vDJZQjdGvJpGzA4sRqknrdbmoueRT9YqPNywUUbDz3rdARi5M945vBtshyWq",
  "key24": "5Vc1V2n2amUEpHw3oJBktuJVriszy22wuXf3eeVyRMaSxGdGgEX6YAZt1VRLzieTdxWVhoT3vfxfNVa3DBhYtoqk",
  "key25": "3zE9wxhnH4zhbQHc8nY87XLZJepM1Z6copas3S62F423W6kxKBqZQsPq62da47rHbKvKKkuGgbsxFZUAJsKCoWdL",
  "key26": "91S8mTi8a8bvTkZ8gasQ6LdH87poJnfphQx3PaAZpPXUR6e2ogESLxP9jnYiGiepd8y1FoJHNCjrJKaSHgC1ZvY",
  "key27": "64NFDQBFfHnTrtwUhHZwGMSpjsx4XDDst3E1oAp84VFDmLm2afzC7r9sicnaz6UAGrM3rC9Pd6bUVbqwgiArhQAh",
  "key28": "5u4CHAPMnuqjaauaVxr2TbNRdSy9W8MktdbqKa5CnjRg78fToNeJHKQnhjfFz1LzmHUsk9VN3vzzLqVqxF8GvVXG",
  "key29": "3uK2pYxc558gwZaAGb4mDEDcBbhYSs1NKocbiNTWzpRUjhznQZVyT5pHFbDtL6PRPP23V1PqkeE4roUWLafpFSJ5",
  "key30": "4WgPW3JC79PTYmCgbj9x4wC2uU3Y4KBTxVjgPE2NfoPorx86YicXSJmWNzqHPRT7vUQAsNX8PLUmFSUAkDJi4jaa",
  "key31": "4qwa2z1UyEFYYhR8WiSzgH3oiUeNs8CKn2BEN3XM6faJc1VVR2jiCMQcTSmM4CyzN8yRJ4nU5QfjRvgQ8xXqzF8G",
  "key32": "4c6ZF5vvGksr4areC2yQwVioJtUU1eWKS1GX3CQ5yS6V3crfvyLwbXWhtavu4H13aegSESnkGBcVpxm6ytY9H3Xn",
  "key33": "27NT6NGhPpoevu4SiBhBHBtR1miWi2kP5L1QM9Sz2NGNEt6XJorsXiyDVQLmdcG88icPskqHcKrURGH6TmFYCot1",
  "key34": "1ykQpq6BNo97AU8dhPDzJJqjNn2vawxzSgKyTJtTqphy1zazmJDsbL8WpQgXNkzLGpEDG7moyCv6Ywqr4fwEXjg",
  "key35": "2YXCzPeGYKKgtnYtmT3Py6RFLzkaoBxHVkK1kM5hxkbdzgXbgAegZdaZviTvjX5ja7BHTGP6FDn6dB51ZLVsV6K2",
  "key36": "3pFLhZDumUitQtHC3FQTVeQDZGBxuHRfkK5HB5eYFahzNB9VDsZRJCTC6Qswsiv8HNNZbDkwZwtsNvzY5YWBJ8ok",
  "key37": "7eQPCt4bvLCRDPn3dMj4WPH9xTWuvv5jV8JRKZ9JwdWCiuhvf7J7V89qaxHv9k1G677deTbq5XNk78QMKHEJpBj",
  "key38": "2TiW1o6XH3MY23uPEgB47hEmStzKaqVa9gskVU4sPGLLi5LJUrFidfYn8X5nAwP3aui8oBpoAAjJg3rGaZ35MJbh",
  "key39": "3k4DkkfiJoW9tvCAH8hgc65iVoQqKG4DXdvfWnzwYoAXxMuo1wtCujPVYizZZv1qB2uNX76wZQ3ZfowSitG9A2RE"
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
