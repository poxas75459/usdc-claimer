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
    "4aG6rXwgKSqUexT7cGXkvR6qm1CJkvqBLnqr2TkExGvKgpDQx3VFkfQf2qZb6Z7EZeQcygBNKxXpejMQZTvj9QkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psFCCmHKtKfsX74PZYdLvQ3pPd4Rps1vTVjQGcQ7pVfJ5ZZuHyqHx4DdcbZxxs7ruxQF6EqTvoHuBu8QtuZNgbF",
  "key1": "568wdc299trp18c1xdFJESy5bdzjkF5jdGfq9Sj69BrqM72cMZfKTcWK673cPmFr12Ve1AAiVGTu5LyhFuyfiuSF",
  "key2": "5LyQSHGeuBdEq1w2JDTKtJaU5Z8prs2un2D1wpAjkXxX5yfsKYa1xHtd2oPbds8Rg1iVLMPD96nY6geyA1DE31tp",
  "key3": "32Y1RqRjhhPzfyQgVLnvkWuGb7G52RPPhMW8QCxLVhFwHeia4qvvwpVDQkvTVTsa7FMPwdewuiuU1YCTgPgV2UfD",
  "key4": "52K2VBRJKRZ2PN4SxRw2tDQz4gLJdGdAfGBXsjbiVDPKvQHadzf1MqeQcQLjT8foojY73NUqbwZHEdwkuxYABMo7",
  "key5": "4Vrk3hRGYk7C1xgkMAYWwg8ju1BzBnz5kN9tQ4rfoFA8x6BrxnfL4d3oKXSNNcnmM56xrXt9dQYLs8vm23FVcR1S",
  "key6": "5PwMc28WQ73VfdjPdpnnoyhZT67N6N9onCKGGZ6GmyKtJ59ZrVTWRvfjga334bnkdYRcYfs1ZP6oFjCc9PhwBbpU",
  "key7": "123Wf6GwrNxxTuUNeuSjG8kdyArY1ZJr65CcynmJoRRKGnZgWkN7k96E7YPSxL4zjqwfFyiJ2Lj4J2qhoiFGLqrH",
  "key8": "38YdvRL1HXVVvkqjdotUNR7dJDTp2P5wFDyBx1ddzxC8XWd3LRL5B4EQQ7KvJYBYBK7oUDtLHtTW4TpVvLJQv65x",
  "key9": "2VGAfjMk9ubi7LyftVrEV6YBhPLqAd6nsPNjp72GPBkeF7pcZp52w3AnkukBU2JrPMinjX976sWQtyhdMyYkX2CJ",
  "key10": "3js4arra3XzBhftfK1GTFfHj1Uzkj3LCw7zTzobgRZGnn7RMqTdf7VxjkcprDudPM4jdtY1HU3LErf1FwsqCFSKx",
  "key11": "2bjpVkFarnX6CacBd8yoqiW1vLqYFLErhrwaWb2YGBxmpUGkodeQkV3yYd25fYzKNPzawhCEH5LyEYGALCGLdo23",
  "key12": "Uhz2NFsC7Q8aBVH1YPcLfSd3w4ht4WtYs5Y8D6uCUU92YL6xkW7w6odbgvpstQ1PP7VYda7hPB7Tc3HC2xnfZ7z",
  "key13": "4RUGrQrKiXeqDCeAMEswnc6Geu1u3Y3k3Yp6x4Us3rN6awC9X2wi1AL4Bi3qHxnJZDZpPxxdkMAHY57NfrRKkMwB",
  "key14": "3bz8UuPTd7p1VhXw9QPgjNptE5svrWkB1CBhZ7iYfYHp2wj4ny26iWdbnLfDngfrGwjAZZ1iJZYNtPNsWNZQtXeg",
  "key15": "23qA4aGR4FQodBRzoPS8TLNHTrNreB33pvbYymKQCqUShLYP63YCAD2Lb1EphHWzdMwbDF91U7jDH6vXGyFyU4Ng",
  "key16": "QX9fdrsqow5Sc39LU3nirNKEajFnvDuk49rzdtuqSQy8zzM4LsPKMYsuijjQ2Dx22J7QnJcRbxcxfTFKpNyM8cQ",
  "key17": "4QJpXmhGerkkbu7CwTyiZf8VriMR6RQyMDnsEgMzMLgd2Xv1J3xBbDVU2ExXRHLZECPbMuwX34X6UrhK3FAJkdtz",
  "key18": "4SJzVpCizh2GdUoBW3rBHWZ2EEymZNPGiuxFjSRSzDzud7WM8pXjsdpB5JG1gosGV4Vo8rQbVRfx6Bmo2NZNvNDJ",
  "key19": "3TCbbdKd1KXSnDkAfz388PSSMEBRYaLNcQ5zMUfeiq4b7MgoRZ7Li6yt8Dugf1jnhE5owgbeJVnR5iVK6CFfULh7",
  "key20": "2s6fzRDksM7in2ZtLeoUHPiLwyue2V34vPnn8ahXquNRJqVPGeAFb1CRHEPpqhocFtoAtGPWGQuQShu7akTi8Qyc",
  "key21": "5Pkg3yXKH6Ex73oqXpwg9T5QzdRPm2B7N3Rvuum2TABVS2h8cbFGSi8m4pnfp77UvYZmevLi5PRBnAVnACJrT5WU",
  "key22": "5Jv4v4ymDAs25FRMYxcHMLqDoywbDR5yVhEAnCKHybyrVef4PLqKNEhhvRpniS8p2VbddEagF3qr1xCEMxfk4pno",
  "key23": "5ePHEB7mruJsxGRSZLvn8cZfqBRKrAkedyDGCFpcDM66arFVyj1PD35zracbtvQUdS23v6HZTxKjyxRgwvrsoZTt",
  "key24": "3Zzx7eriZfUF7tkJKccmwR9DxYCRPcsWFf9wpxhrxuaWYxSSW97ddktUDxdsLX66bomohUvMXM58fqKqDgP1RTF6",
  "key25": "3DPo74JLK2J2JzN18zsjcQHrp3RPGyRTnNfptwjSSKUAtGR84ERP6pgQ6Dvrx3azDvWzDgMrfxWwbvkFpGFPSrpt",
  "key26": "Uhrv5ncqJmKbypHjxJuxZXEvxyGKUPjN7ogsG8M2uRBiPw3asjjaUeXDsBaPCrsZuAKfahNYHvV7xgLh4L9nYAh",
  "key27": "5ap7wKm1V3TqFoRKjvnSweH1mbgNetFx3hpj5DosrU4SkPNmqP7XTWNGzGARP2JadsCJCAAkYzzT6RYwFaK274ub",
  "key28": "4qqgkHiXaJmAytQq3PWg5eWCxk9xocmWXce1MBa8L9MCL9ytzoybjQy6a1jmcDodd42c8d4mwzyr7oHH2DdcWxa9",
  "key29": "NwPBfdqSsiVprp1Baeicz85P7KqPnv7w2G1LDHQpszC2P2AwmzWnYwtPgSzGd5EqcSDBWiSJvm61KZ6cni3Lgu5",
  "key30": "3WDLomDdF4stMa9wNPhCyLTqRY2uk28KXZ7xPJUbvCSBmGgzgsEroxaNJPAo3XbwvVf7NSHbS68yHd6189CRAcmk",
  "key31": "28oBRouXNuGaXw5D7PjvhPh5ZoX6Yorjf7F5csDESkVBgtEmjJ82zaLNkQam6thK2m8q7Nj3qgi8vWsppGjiLs5z",
  "key32": "4YKMxWvhnPteoxfHNcxgpj7ihHFsTAvh2vzkbkuKpi7vRGs8ugPdjU3C63GYRA8ppwueMiNsyC26558gD196MJS4",
  "key33": "5ZUZD3ci4SUQoTWp43owYW4xRws82cJA7zfBUjPd5Vcg98mmKsf1tVEEAnSJVnibVCSMUtkKNHbCm6R1fX4DRf7K",
  "key34": "4GPMc62qPQ1TswLFm4G5wYADD2GLVNAPfDmhY9f5tGhwAYhadiJRgiysVLReY3hbLsmKj1PXcNLi4g73r113xsmX",
  "key35": "4tgKenU7uwNDuiKdR2biqSneHqP2KF92NQfR5vmAv7RTsYuxmNzexNFwyvzwS3isTBFawquwfKwiPGJFKJY9w2Hx"
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
