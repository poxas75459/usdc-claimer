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
    "uXqDvNdci6LHFZU2PHuesUYoagdUVEZkm6WoZZKheXeENEUek3AQrmRqiN1b8M56jwLX73E3xGhCiQVycX7tsfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jxYw6T1Tz58qaftCpVLrV5VYNjZkdAngjsK995x4KNhGfVQRGJD9ZwXfF21B19Dw3NaUDr8oRXXMH2Puv7DgA6C",
  "key1": "5MuehoZHySpp15XerDBXUvovayHnUiUZKF4e3dgLok1BHk23DgSM77somxPXzD7qQdqgSoc8Jn3TuhvgPnqENa1Q",
  "key2": "25xrTgF9UiU1LFQgS4XQEi65nwbBKCriYhSXw2AWxyBxxDiW8Kk97o59vwEysuVrhVxcM4XrDFQx4ifvTBystgKR",
  "key3": "d1h94PjMLpSCFdPGuiJVb664MSyMXJzMmXodWH8CJzhEmox3yaRXR22WTFvNoJUvB6g9utGydisDZK7vtEBAHbk",
  "key4": "2mH9r8i2WsVyKMey2s6eBp6anB4Tz6VQ67XXcnMTrGqy1R3qEKt7BpPQij9XjNoCMormWQ5xpnGa4jrJn5Zwfgfm",
  "key5": "5UNkwgPzBzTcX5Ficy3WdUFyEoeceQ3mviXaY6PbC6yyfEvGYT4zc4L5VCDiLBk2zhZZGAjXeijoZMiF23NZBRcx",
  "key6": "4UhjBP78skm4a7ZMDTuMtw8pEDkbsKo88XBfjKufo8gStFbWHzGiDVP5gdmCqP5Bc1w6mtWvWkJXDyLaSJWBbgNo",
  "key7": "2Xb5fTR8br9mhFxVUjS2zMCeb2iLKREMxgWRqx8Gdtnkn4XTvwkQw7XzYM6ZQxD6Vbh5gC1GcnnEoANpMQAiEyfL",
  "key8": "3Wg9NXWH4QFf8kD2DiLhSzTJAzwNsiXjSdPnbxUHgSDJEU4oi9VueGndAYdAxB61az9vh6QrGywi5wZJWL3qEZeW",
  "key9": "3EAZsHkYCd2SKkKaDyfGQo1n7tpG3YUBhP3KUHgzfazLsVp5dPuQUdr18v7X8yLxsChH4JdhVe4PuNqX1r4dQJfo",
  "key10": "5oRtu7VF32QBj994aLWigcmYqvHvSW8WRF1QpFGcTNeuZL9zQiissdBM8J7BYavPQ18PnZurH25u3CCkLdh1oPhM",
  "key11": "5oDQ2eNu8sPvymaruhRWsshoWDbntXwKyKkqiBDkf3rmBDBzJHaybnZvAHzzHwnwu4cmwgXz2ibRGVirMF8Ew2D6",
  "key12": "Rhr4MYUC8TArwijmat3eDBxg6gy6m9u9wGvxG22SemqJTn95ppitQgThKA3YWARgcRhHx6PEDoFLpWntbfX2RJx",
  "key13": "493SAhTdPqtzQPU3u3JjAvzRtx5HTRPxxVTCo2DBQM5PaBxLwYweLzidUAZFB21FrLvyrBkLnRL4XyBrDkU3zdxt",
  "key14": "5qKSte8rxTmDxDQD7StXP6UAQ6Bzficcfdi591Yf5fAkef6gX6bArS1k7ST2vaK6fvjqMKBz7EyTJtxG44ZnPU4U",
  "key15": "oauxeW7an5AZCMcEEQ1fU1cwZp5dXLwQQUyDMKnyVpqUA8hSy52fHnxRKDBFqUCVvUHMVxXHwoXZjU7kzqpgRg4",
  "key16": "23vTEPNduk3i1o9DuVDPWFTCCUL996JBd4ioMKSR2GJM5ZBatqQn3rFsm1yrSZWxw7ppPxMtgrjabVLBGWAbwUkL",
  "key17": "4xxMV6Vg9BZNgBi1WtUZu7RpXwqFk4Bc2ehnqZGTY6CCvDxoxdVUGoXeMsAkN2f5NcUf2oTvh1ygSae29oH9fvZG",
  "key18": "4ciWgh6Kus2Lr9VnKAjyhhFMrqEuLcwqajuF73iTirk7vnxxzT5XKy7cu3dL7YbvJoHojPmL8Z71ZsfFcb61ApVb",
  "key19": "2Ge8XyiaEvKgR21MBDnSb78cWZDR2ibzKufNBDtpMuq468tsebtBux4BUvkGd3SZ1LDcWLqwoKLumFXpYdhPEhbC",
  "key20": "5KqH5GDBwtbyaE2T8fwXZVDRVCuRNeuJhS1yXZfiLkSiidjE52YPX7uzZEqziN4WEEQonXCLeWYZWPZdKEQNuyrD",
  "key21": "3TeURHGikb7H63356Jv5DSWt8Ab3NndHde66e9nfXPkQJt9n2e9G52URSqDds51JVefMzoiuEsMgd32zWVbRatxL",
  "key22": "63vphFZsBR4sSfx4rNJ894sZFJS4dHP6m7T6tfqLVtTS8CemfHHeRdtdS1p29pCjntg3v9qrD7kabpMDFfaerLYJ",
  "key23": "2JUBSr3TvxjivZP9iTNSZJpEQkLgm7M4uBygj4RLAAYoxii9jbNTReVn9QuwxrVYwkZMKPb7JG32xycfzQTCbsL8",
  "key24": "c4SJ1GXDcSLAm91KJjQPi3aD11gjbHrtSJinK9p5TXvNx4PMP4FBLYLTnt5XFQG6H8TE7ToRP1h2sBKpxueuMtC",
  "key25": "3GgNqA1ijGQPdEah7rHeTWy4dxVHpcfn9zzrB7PjdUG7xQ6AtptARmPPpdHhtHqzuXnPT1TApLjgfUW6vHPcHKsH",
  "key26": "5adxTeGgfexhk5qzz8cHxZwH79AbSAdvQY4tZmFxXGyk5fH9Ehv1MxVkWFr1BAoJscT27qh6sQXh64UTWZAEk98i",
  "key27": "4MdL9nYLhbioBEQXJJ3Z4WCUVf3RHTftVgGq4kt97P8MUj37ZTuL8aG58cm6g9vWgiZ79UaQ2SvEwFnK1z95eiKb",
  "key28": "57B8F1SKNHeLX2L7SdYveuzdNGSV7wxF9BWsZNh3ziSu55n98Ftyrz4CEV8z5BvYbo79Gdx98vuY6bC6Fsv7b7uk",
  "key29": "2pH4MVK7HXT9TWSzuHNp6c16bVFk6YJKWpAcmFSwHybe1fi8JutB49iBAszVgUB4KZZqyd3i6wsau7N7UEYpfJ1e",
  "key30": "5yyYxh5bk2LQ365vGxgMFXuxfUdAkuP5Pzc9XUxno9anc6as4xqAWR291NCVspERBxhkK6P3vQXmwWqKSeiT1ts5",
  "key31": "Kp2ShKhdAgeECkkYHGDmyvRwAs7EPtWBCdhACJBBN1dhifEPDkApvR91foYDjQnWPJB2S5jkZLZsM3bj9tfMT3t",
  "key32": "5y1nrexqkgRASq639C8Uh7xEif3UaoDW4jhj7W1r1teuwbF9nP2kPm4NLNxrtZJcdGCj1zxSndRFvHCcQ3AzgXLP",
  "key33": "62w4LuaftD4rcgNb2S8K87bz58Z5X9RpEMnC2rUfvWd1FEgTv7MkQBnh4LX3ubSo1GC69mcfGiVNjE5ji3up6Vrx",
  "key34": "2Ur12dppPMjjgCZW39oHfMioWHvssyk2M1dsuA47nvnsZ4t39izH8D82oMGZZuxRpVBpgxLhet8J9ce9zexrx1Be",
  "key35": "2SA5j7SNxeg1Ee7qffNFCEHLzzGbTwCnCeZBy4oSTKAGBT6ubKsyAmTAfV5t1gds52SuthgFNs4TPFr4LXLUcptw",
  "key36": "3MHciWNV2MFr7TJa5NsopeoXXvrPtqAKm3fEDqV8M85Bx4rjdeRdVVCYwv9SZ9GewNi8zbvytK9ywVJeTETkvL1E",
  "key37": "2vfRtZfKYUUYu9amufcM377ayrK7j6LvM88KPa6tRsV45onzvAcA3KtjGSDiENgJJuhNJCL2pow9f1hdR8QvXSxj",
  "key38": "4rX3zPB1KkW1dhcaLMLjyT8F7Ai6EL5eg9ELc7UYwihfj1JeAymb6ge4xyirJh9ozzmsyoD6ShekvEPMnXszAuSH",
  "key39": "54smLkKyfeRnzitcKo8hU7QzUwgkEMc6bRLx4bEqDaBmYRRaE4pfjq2uQ4fuMPAXm5JnWpDNd4uzgpoGuQ8H6b8L",
  "key40": "673eeyzu1YxU5zpSa1si84F89P42Wkde5SoVpceHyKi2UjQJrv63gmKZ6XsL31zbTDsCChnn2gEdS89hMeDCohuf",
  "key41": "3b66vVrR3Zy3Pq1TeKEUqCEtUHWrjg2TPYWmxC6su4U18MBg6cwmoffMhQEDYa1g6d4qj85nZLiifQPdHadz4G6z",
  "key42": "5GBUiRYfNjRsdfyUu5BQ62DPAyfPeZZR7XJHrHVNtFAj928gU9z3E6KCzuwKURLpXN7xaNjChLcAKUiWgTW5Dc6n",
  "key43": "3fiRq4gE1FbAUGDbUBSEveHewfE2y4soVoxQVcs1vJDrtdFDzvQyKmxmAwD8UX1oPwSmwz37dBwG9XBMKQ8FLWJc",
  "key44": "3rwmEterD4B5gXG8f9T86C3CievkD1BXGopRr2PjVd6n7iPmskbYWKDT3QdpCEGswujiHL4qqrMYd1QfYoULdspA",
  "key45": "4WXa3JYDPhixiTKAPtEqURGbGdgGagxsWwNFtBNNZWmHsLQk4NW5H1r19MTqcdgXVTi4ZJngfYS7XPQB6rQcpzg7"
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
