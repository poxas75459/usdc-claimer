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
    "eoQta2tmzcz6PzcGoHYHMK61maxJ2yXDjXJ75vXDAQ6itN7cZXzzB5CiAZhUzCwjj9iAHgNr5qPkM2phEvZ5obq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqvV6r4ksrJFohnH2uGNzZyihERinagbcbi9JP458eas2VweNskmUouEWB8gCaMZqq3GEjuVMAQ8zFykYcEo4Ei",
  "key1": "2xYe6E4RwhFX75XYtjNTeypnSbgicg6S3FE9E8fybNLRFcPAdwzVD8MVMiEtWBjK6TpUJHpvsc3MjERni3MVHHA9",
  "key2": "5cecAic3WGfXeo5iHv48n6TqzKjpTfM5cgq7QdP4KTVsgCAxrdrDL2r1uq1fwRzrPwpf1aU8eun8Yk8rTjGNxQnU",
  "key3": "PHb6mcrFbsQoCFLbRQVYHGynPerxMUFqUrdZdg6kM8DGXZhaZ9gFG3S79LPTk46LL9mLoht9iRVYDoUtYky9F9Y",
  "key4": "2WKqE4uswDcD8NsFJEppwerZprs9XLDq3eddGtYeFmGk5xnZRGnUN35KQmLNtEk79mZLtN2e6nd2cQGgPgQS3kgz",
  "key5": "3SPpJoJKXwnwCjBKQzfw7R7yicEF4iWzgddRFLjAzT6iSCRsUGfPJNobrr15EEEbwrHDy1NmySCdB7BrMPznZYsM",
  "key6": "49Uo4ZbwtF83XhEAHS1aBANmF3uxFpZcpmaocq1Yd1Rv1mgKHb2kfQmpXNTkE1pfwvioZS8i5vGRMfJzRiUhEF5D",
  "key7": "5SzSV4ncKeSVmJ2mHNNALaQoqEhAbKPcCqhwXF93ibWmEyiHr1wH9yWdWzqL3uPBjNPw9VdQNknmfRHcfELuCxeY",
  "key8": "36gXbsnPDwphQMugQvr2ZnpQxyZCpNuDmu1WFaveoSkf5u7nvTXNnvxtVcofhiUmpMmTHZ5yYu1kurXviKsX3uvk",
  "key9": "3w5LAgQqiuN8HJkEpdoptck6srz6xd3VgC7iMn7pG7aU8tDqXsfboDaQFjMRUQdqT1cDi3q8YBZngqatJHQq87bv",
  "key10": "3UkXgBJGHafdyP4mhg16XRVjBtsJuULeQVydBCpD6FEvjg8RzHj1HHzrSzEnT8ZYitex7vxXrS4ypq9Spp4wGz3x",
  "key11": "sELpY1kmxQksvNpxqbuENm7ywiL8wgBMm4CMM6nWxH33bvV4tc9KREp2r6dE74nFeKL1njPYq6o7VZKga6HiRbr",
  "key12": "4dngGEYvmjASMjq3xoVVg5nh2GWRoMn12uywmqtb1cML3edpFFipZgLTcQBERgSnRsqtnmKGLZsE6k8AH8iA4M2f",
  "key13": "5Q61Y3Varj8KMpsxiPTuLffiVXiGd3LusBqK6wwBY8zJfSnaUmFtQE4TYaduSX1XALmq8Uwd5CTrWjEve9Ugmjj8",
  "key14": "2qvauRcMsprCgzonWAjKiAr3QBkEBwVNhB5ZnUtqQ8XrVC5hzBhy8QKkL1XS8G3CBYfcWd2eZ2prNWeCuuRpdfXR",
  "key15": "2sR2odJK6t33cPzz7F31yEQYcCtfkDqtMSHzrWKpfsrowEqBzHE5WinCeJRbLrPimp426LkSSRUhUvwwZEsNW36j",
  "key16": "4MedQgkCGemRk2DFLicT9rafei1zq98upZ4BRSmPjDr9c2zngfdbyqUJaWgDwU5NFECxiL6KZSswVQtZdhnCvUKw",
  "key17": "2jD9tRYQpnN7y5d7VMfMSbGnUJadRPFgP23sxPjaVPSfmycR5yJ46A9gMFg3nfrgxbCrcnGx7uYnQCJhQVnJYKDX",
  "key18": "4eiAEW2Rf2bv9sN9MJYuP2Uz3io4n3XH289g69PJZMK28nzvtDaniMS4dSD3uZTwDTFKmC3NdNphfz9Xcm7wKoLH",
  "key19": "NRnM46kP41NswzGnoFzr43ziQNif1BeDTMzcyWEFCxUriLS9dtGr3UgnfLBxFX7HeQYXCrqeTnuniFTmZRc2VEQ",
  "key20": "ES1awfCx6q2Gqz28UadQZ1dSvHUFvnJLnoxHTyPzK8Q7HQzXsedHM3Jf9cJzABjMskwWSZxXG3KA2aT4RzFQeRS",
  "key21": "27bDkLSNEkPQQ4bVjk3pS1jjJwxjUUYYgT8awv3AMUbg6z4bHuCwRNZZxrA77DvkRPkN8GV9cnC9BicPY8LQZ7Rd",
  "key22": "3YoRnuqEa2Mq8YFFAGbsxU4Q7MokynzurCFsWm2hS9wsjiAiF573CqpUQDFXogTBSrZYtHpvNKqM7rnQPgUJfB7j",
  "key23": "FTApq3mu2eTvBU37AUKkJb3WfZ5McibFWU8fPibLE4mUSiH2td1pwzNaS3x2oyjWdahV3Wc2rxeY4KaTKaiT8vs",
  "key24": "2nxDGtVTYUs7wDvjtfjJUYsz3rkxuiQwzG3dNLfHiZdJsxb4sZqfZPsfBwiWbysuvnxyXhcamtbmfRSNk5255mTq",
  "key25": "2LeBuJjRnsrNnbYMangNJscptVVyoYFXzvt9FzvcB5YRnfsrF2DdikQZQMrdh5R88cU6pPXtWPVpyrp1aYPPUmfE",
  "key26": "4RH3x1G9L9ikoku2ujwhWkfgwSApFpX7aAWFc34BU4fxwx5YhpZT2gTbt8kkYe1ZyTCa1nq4vBBng5G1KB8jCoNU",
  "key27": "eaShXSqR2CzPXPpbuZpr7RWMfvPiRisK1WTgWqx4sNzojG8Y7XPgBtmtixfk5ocWkbD3DoQegMFwv3VL9QLqi8g",
  "key28": "5kBNptRA9RTQAxqH99B1QQSsiPnG8wdApP6yjyHg79dbvPCEjdrzG91myqs2DLCGB9aTAfWJicRc5Fkn71PTmAxo",
  "key29": "5Up3QkMv5oGtZtk4R2BsrddwNVn1AWEV4rqNFhgZ5mbxiA5o3krTFhr8yiYGp6o6dgX2xVUZos9cnH2EKMqZ7Puu",
  "key30": "3MdrKWcrstwVzBFv66Rmoi2MJtkQwkN4C9nWCtdFT3Qec3Gv4yKQEJV7KCG1pF1MfkJjpjpKVXBMP59wDnuoMi3M",
  "key31": "4mUoMj61qttQjAPWJvSEp23iHYnrcPsufJHHPLxK1cXDnxtq55Zo393GJL9fUpVuAnunTYQqAowYJf4m4JCkVyd7",
  "key32": "4hQcndmezCdLr5xJaUTtsqdrkeWSfmuQ62euYtSEkhX3qiQW1LdrdXVPCiAo9JeaxJ4Yke8fG18WxuBCkYcbeFrT",
  "key33": "5hPPV51U1hQf1D39YxVAbfmrGxVGE5gxHzxSLUixEHDVNttEHVAQn1jpxZFgambDr54G2jWoyuRrcwhToPHv4fRF",
  "key34": "3MheF5cmdZ3NwhBT8UQa9F6EEKS4w7VLAdL3BPHBzc3gonoC7DdFQhEbZ6rZH12CCsNdPX8CTMsn4uM2NsagT5Qu",
  "key35": "3PQ76KsFHsK3LKqa87YkGew4UDFBEQpPjRSAfcq46XDqzwDSENb7NsuB4dKwDt4iUZSXxDm2fQJtY8o19KS5VpSg",
  "key36": "4Z2su2r9ZuAc5iXGCP246zwrTULhycCBSpYX6xXPYsDNgHUhUTHb82DhTUTMFQWnhpZoo8KTnQtz1HyTeC5bYHP4",
  "key37": "nTnDFJ2P226P3m7v6TmFJpHayiw6qhGn4uEpjN1TSuGRXZuk8rdcBGBwY6vSxtshmsmTrUXjoRErSa3qyLDeUGt",
  "key38": "39sa7XuZtfCzpk6vb2doEhdK1a5fGbTnZ5Ctrfp9xYWj22jKW6wCNUeeHpkcawZedUduLtrxNg3Kd2ivoPhN8xh6",
  "key39": "5GKtEk7BtpoSEQ481hP468WeuNZCmcPTp6ZEo7ToU59TdG2efyzgP5LsGTmJLFmbGhmcy2cqPwCM4wRjt8uwHyTP",
  "key40": "3h8J1hPxTiVoGCGcob4t7BLR8fuv2WDvfsyBKkXj8xfiyrWA18xQQoLt42yq1eMqwr3Wb4Aw2xnAAi6E4BDgoqx3",
  "key41": "4sF5DuNssPUuoaeNcE6nwU6AEoQZjk2mJ2wCi9EGpzAxV6UejWpntwr7gDH3tWcbaRZdiTUTwAEBuoDk4KjTQVwg",
  "key42": "4QszfQYBfU4Ga9ki7A17UCcbrig7dyCAJXMbmpH9fHhiLPGZUFcGKknMj6rYdX9eck8MokBJQGW4QKhJqgep159Y",
  "key43": "3EeUUxJDoLKap3foQqUA6ZU9jUnD2CwaJa6MrrrQwwBnCyu5WGVsufwRw9P72psLxtBDHWXTyRVcNLACttyUWvMR",
  "key44": "4F7GVRDURnbMeDeDGshDPKDxPMAP7iWgRAPG2iapuKsamRZeJ9N9aXNGBWnxPDnN8STyqwsCAEg5ynnTuTw2qMRC",
  "key45": "3g2T9e3RVT2qtfmTVrCvLXJhCPofvqRMyuMCPqCRcB718kaU14ukgKcw6AYRGEgziBk8Z4TCfJ98GNiGHsTsrbN",
  "key46": "565fdRDFf5AHJk8HJDQcUGBJrrPLUCxdYSswxf9Yt2bRuayxqYuLmMzcC9BrXnn3qNiyw8LukHHzxNvUBAiiP6GJ"
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
