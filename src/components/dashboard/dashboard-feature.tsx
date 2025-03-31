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
    "2Eum5q5ktLFT8bo1Fs2dytWG1ji1KTiFkdtAyxvEV8neLSRGnjA4vZ1sX9zrVvPA3bec7EjyKs96LCuuteWzW97i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ttcvaj9ZzNRiuwzfcKSDGZSYMDaMJzivenrk58bxAmX6suv2dZQJcdGjmkMj5AHm2U2mHAgFU2RowsGAdozJVEf",
  "key1": "aaQPTcQoMgWXGpiKVzxGsUHMMPP44K3DFR9bNF2PrJ7agdDf2Ew44cW4i4Pn8mE9V3S5PNY2FMFLySdhqexbBTe",
  "key2": "4NrzxAq8v3KXDQafmfDhQaW8AaQL9YjCPDYEfGat5qVr5uRbPaD4aPkNzJLBwFQRJjrYdGAC26WXdxH2HPADtF7L",
  "key3": "4pGNyy3E5jdLosym5xXe58JQcfLNv2zfyZs5pYncUj45i4tYs1KxgtfimJ5RJCs8R7wi6iwaY1Wc3R6oc1udLiTT",
  "key4": "5CJvhbhu2Td5VtnGEVjHmXRsBf9ZtS42VYAupm8RWJqqr7AjAwwSuBbXyHhL8gQ3EQi7XHTFZXhRCJLdRgbUzfSo",
  "key5": "2MMJwnagEbRn5uVM4HB3bboRBH8eFM7SWxUgMW9Y1KDBoJBk1akDMDmqvGUjCsvXopTCMzs94AC8tkAD2vVJ1Wxu",
  "key6": "3yHyt3xnZhz1D7XXqU6fYsA56njRHpqtGDmvB1ZjaC9YwK6gKJw69zvDNFJF8GUzoowqH819puey8zBnPfszBhHz",
  "key7": "3EEzYYrtfEwdykopgUMCogkCAhDiZadXjwrEh5P6iGmm91VgQbd1vEwXhKUb3TnfXETSnjAYoxYK2AuLNt873gmz",
  "key8": "5beUsSLZdNR8mDZ1JzWyGJwmhwUkHowqnXE9NdmJAjE97SEwEKDnAL9cKW3gykA57p8CVfvPxoR5h1jUZqJtEUNH",
  "key9": "2PszP56ga18G7tzYSCNmF2ez2MbcXCGKT24kFC8DJcZ5uX5d76aDNKiMf7vhoDjaRmiETgqQdVxjo841MgvBWX4h",
  "key10": "2623V1GZT7S5MDoHSYNPJ6v5wP12gnh1unXKQWMxmb6EqDrs5AGxvTMRKiAiJ9VXcSE5gizfanzgSuppVrWB1V6V",
  "key11": "2DWtx5JTsg18eqv22ehqs66AMHo3ThFvdUgY7Dm7x49Buk4R8jkktmhMmqbUBmbg6zrgedvfnzjXV5PPzgo5zh37",
  "key12": "4ReJ2fdQQt8YSozgC25TLCaBh7n2W6qCwHZrHkxWWxJURfpTaMPsSQL1T41KVHEx3f54ebvzH7wMRHF8vZTWdB4L",
  "key13": "9j2ZZYjRzzFENE6Xdyj8nSC5kbdwyx1Qz5bqfjo3B3wrnj8bLjMKzacZPWkYttenWRoyXXAkjSpLBZkNhuYc6QX",
  "key14": "d7X9mUzcK5KpDYHmrR5w1fZi4E2382rNLnBS2DBQmxtnpX6LvSKjRsVbgenAJ9TPgtiCEsQo3KbuTvbfchRTXUw",
  "key15": "2ZdK1fZXaxB9Un1mqaWVcSyJCgQyozbUekP1qLubBW9Vig3NSribH5sb2qKuiN2W6iGtupZny2ySH9uxHvb1CvyA",
  "key16": "4G2srfmHdmM4uMH1tg6axLGMYvspwEhJQjdnW4Dr7Uei5ry8UMRnkWW6pmPNWYcG7SvRVQBqjk9Lj8pk3vTVvnyz",
  "key17": "R67FaFhc53hBgAkCkcr8t2a38WzgmGWEbdrfZD96XWCj3cmiEQrzYpEXPZ1FC8awG9Yfmg1NdNNnPeRcCzcTwwp",
  "key18": "4EyirktoEEkyau3MkFrYbQcZNAGqPK1NuJ1pNoeMRdTFDiy8xgmXk8XgTkP1uRxya8FY9jdTxbzmfKs25xh8i38D",
  "key19": "246L7Pg8tc8VzJ1KVFtN5q4JnaxZZi6KyrLqVXqZ1qXC3BixkthZekMnTyaSW9FEw4PDFW46wKTGWkkdCdKmnaXT",
  "key20": "3gbxJ3VLnB4f68kbZdp8NfYxgC7BK1TFWXAdu1tY3Y8z4pYwA8EXV5S45fYUeVM3s7MLWgdA8HrehmsvExdC1AGe",
  "key21": "5tmoRBfsu44GdiYGqbomQLmeP8N9bn6hth8YGw8K4qYABFcM64cUsPVfqW3XGEeEG7tHE5AZ4Ax6jN9YMfGYJ1Ra",
  "key22": "2q1JSUgWcnxRUZmiWm8JkfKxPc6bZj3emzoTJDkKepk2wqfAkmKhaE5qrreCV5ekE6J4J6UvDi8ZN1dxVAodGoWf",
  "key23": "31VfSSptEs1X1GWWN2MbqWgnXMxYHHXV4vEAcp7bUueoAE1kVMMWTDoDnKdq6TmSZgCTwKXy3tGoKUW5gFFKFojW",
  "key24": "4LjULvmq61UtneJvyEzYNy4dvULzcU8JyShcJyrhPdRdCxt95NKZZ8CTRKeW9v6iA2nL4mk2xp41fGfSGjWsmb8Y",
  "key25": "3GWsBbYWVzw6aF17vV778rhUEZpNZYkd3YPkgbdg5q6x5LKHSeD2W56JhHm7xXki3eb3qK8cLAHxwyetJnCGonyq",
  "key26": "4TLXuNDW9D9NfJ1PLvGSSLbrXHwFauXm95dfXHGqkZDEG11NCCXYaoezZvv4uLU6DnGFR923FYqRiWxjAaSnMeXY",
  "key27": "Th51Lsrhwo5amZuPEEexVVicaw1CzkJBkfruHMpcT821kZrgqbC1gE2BeadsQQS3Z8gBuj76bUNKTd5dvGeNdFr",
  "key28": "77EmC5Kr92GUNa8iWkNXowU3idLjmhQreG9xSLe3WbjDtHhHknL9Nfd7bNQD1UCqdNMPz6yk884BA88Mxgc79y3",
  "key29": "5kjSKZAgfSfec1vjrTTmCZ1P6hWMeNsUUKScR2kz5JvSqScP6vuDCwXQNtCjKhQXWaHQXGXmciWBZsL7PT8Nbsza",
  "key30": "2VDVRKaq167iUBzmQiGcWD3kCoPG5GHBoFGsP82Sk3Eya2EXLhHsJmYDU1LedZxJdK72a42THYZ76UDkFzKjX9Mb",
  "key31": "4iXNjyYekoPHUjxY9rB3RfPkraxG8BxFNNx1JWw8zadsMaDKeFdm7wsPnMpgrDisSUUnp27DCJCdzjHB5pVBtLdk",
  "key32": "2kXTnD3ngb1k7hCq84wDLTWq1ZngLCHDhvvzmAyzncNBERh81sp49qogH6E11jZyRP2iXNGDTu9D6LscEnNi5hr4",
  "key33": "MfZ4VTGqrVygBAcisbvmk4aUSxddWCiVYwBmQTf2FkHPRPz2T2WaR3sxqEhL4w8wMkq54QYF42qGLStak6SRYNa",
  "key34": "4eB8v9WeDUkKfUByw3J42EBcjXcgf78KdmMrUAZcEs7Bxc6uiTne8i5hzAcERWMdB8VKBKAmJQDhgUurak9KGYL",
  "key35": "4TDcHGBKx5XJRGhH1c9sJPyzmZhFwzo4DmXUVhCHfbpuapDYsr89jUoHbqHiMKS4bBNoWsKYvJnWUhPzQxcyVctM",
  "key36": "5J88HQNeZkKNVoguSd9rvyoG3QFuWwCw4T843fHT9ovqiR4qcw4KsVvs4k3TYdc2y9xRfe4H9t1FaPovopRzSZrC",
  "key37": "2bnTi5kBk5sWAMxwKn2ssMmaEV9tA4mDV9bYwHEMSz2fiBaik9YZjVrsTaD2sFQs9a8VZYnpPfzmp9uQfpHt9E6b",
  "key38": "3aSJMzbhmnuGjsZ1AqdiSEC1dePHRLoyxtWLUkcdrsMjN81QRBi6HKoSJkk941CCyMQQDtwgNn9JCNuvB6JBSqK1",
  "key39": "4ZorUdNGahRHDqk2rrCYSAykXmNqfpPAyCYM66fGaTkM8qKJSDVXBTEWbZSvCWjc1QEpkY6ZD31o1aUyNcs6rMBa",
  "key40": "4LDJGFrzJik7nLttKPiZyCfcvNUovZwqRuTDHy25bWQbf3P42t8UkZ2D5M4JLhvuH7Q7JgKjhfRicHVnN9NPFXvy",
  "key41": "42MGhmgWsBaUTGZqiJTkijuTYZpVagfUi5mW5PFjuNajtXWemsZtuiceAPjtdHMtfHRxcJvYyeoo3TBfY3pob1qZ",
  "key42": "5tLPWGJbSNsyQLx8pdaGU7Fw5NK2mWb4vc12gay8CEpEAez3vGZT8Kc7uL4GQtAV5QBtDmhiUKkLcapLukFAxPsc",
  "key43": "57ZcEfiyQ75VtfpSy8YetkQHWFP36YBWpVUYABHU4QcQaSFRQrZYJEC6gKJqtxz1jf7Wh8dzHtvycWcUa27cki9Z",
  "key44": "2Jvx8xe9HA7oc8PmDnD7k49j5YSWULSqxR1WD73FgPiTXVciJcNNdvrtZQCyXzdFptwgu2wmDvT1VsvP7QSEBMB2",
  "key45": "zeeW9Fn6Syad7GBMYMx6Hihuydw9CN3c6hfQH1pb3vQzHFieiGCmX6M5scVnpMU3r9pYend71Qu4xRjuMMmwmdV"
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
