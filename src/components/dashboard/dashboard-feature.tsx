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
    "4MZGRXTwzUxTpdaw2BGpKGhyuLqBgnxm9PDn1PdBwfhcTHLGeqh97A56i1H9ivAuSJbMstqbX3zBUpE9d6owaM3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZbjd7E2DoKVgzwBqyrGNUs7MZubumgQKv4terS6iSunZey4MBWvhh58hHctStRotCLYA93GA5KG6JaG6WCN65T",
  "key1": "4T7TkvBXPRu9RG68UKD2ZJfU2gjGarQHJ2hRn6M1QKwUgnBqzv1xeJQ5UAHmo4Ux6CdB7KhHkbKQmFEiq4oxd7Zf",
  "key2": "5btSTEVsDUEM86ahZnNxTHRagRuhBT4NCw5dXsX1gQQfnDEM8bTHC45SBrMYkHRVvf9q9KkzRVRynH5KEuSL3yCg",
  "key3": "5ySxUFZrihprSjtctjjWCLTmXyNY74cMYLK8wq6u3r1jhi5dqCumazwp2FQuC9JygfoswtdQxvvCncWNDrzWmr2s",
  "key4": "5d2s21c8iRfT9TwDAeJj6P5SMYNS8YEEVuAYdDQqiKAb7G9gVuCmw9yPZdsHKF8ZPL8uuhjDZAKToLFZB5HdWYkQ",
  "key5": "54w8VFt1GZrdMHckA8BQpzAwvDWXWnczq7XkwPbTijkvEEE6rYcxL9VCnEJy5XHnAxu2eLKvSdvdNkrr5smTLiy5",
  "key6": "5EaSM3Pjtr7duKztKrqP2SRF3VWZXRsc6t8JbnBQfTLuzByWgxxdd2hzsGRakdHeydxfUsH9cdQtkBfWdW5U8yRe",
  "key7": "4MB87Vhm8snYuMrzp1EHvuj8W4yC8zvBTQ6SqZPVgVKqNDmTbpgwMeYGreGhq7J5xjTMdjswBqKqXMPcvsGmGsDJ",
  "key8": "3JFeFxyJkGxAo8NdstGnJaq3wF64YunqidUTuAqSputZXjifZLJUeWrdJedygzVjpLuMq5ztqoXAzX42fgHai7Gr",
  "key9": "28YbfEby4q5QkZvoKnC5Xo9UVKoMxs8gZ3pF9hkS9WJDrVGd5XmReX4a7AQMSouFpDv81zikaQ1z2gqEjcyZQfdZ",
  "key10": "3QRX1hDzU2aQwCnTgKRWiVtm6sz2N6BcNjsJ9rYov93ybUgMA1vYZRNVnWxii1Gi8P6AKmpus6fTKbwDVY6p2yKJ",
  "key11": "4VGDSZ3X5e8Cf2FMDUyJgp2YkU95BuccCsHPebNZWqRN5JW75xhaoMknHzLSE92J9tNBs95mjiNsvPruSidC8mnx",
  "key12": "2cmLYyyuw1Gs3gWniJ6K8SGit7KvDzVuj45pMH1kVFgPMpGijpyEqbv5TvfQFwDWJ9Vzywx1oK1sB9aQzFuv5wjT",
  "key13": "EPSxpyjBe7pffSmRdxyybpi67Tzr42JaWSvd87eCZSuy1WoDKprpDcUqpetgtJS3wWHeepaWp2d7xgTFrutqMjK",
  "key14": "5kAZm9Mx2fWHqb6U8VpnhTFU9aPVRycL4pFZ31nXGkiAkdXYsBJRD1qMaRNYW6AGbiDiQFgG7CZetYzU6s85nz2c",
  "key15": "2DWvZcM3fkgEqcmpgnWmk2BWftcckv965VTY3x6vw7QNyDNfern6jDdBexTpfLuiMVykTtohUapyjt69kXFx5hKC",
  "key16": "4YgWdifEEaZn5QFXX7qdVELDUmSHdkNpX3kF7EZJUUFwJKUFYspu7Y3E6iuAhwY1b13J2QzXHdSoFjRGHvoW2LnA",
  "key17": "5qf8eHWuTh39X7PjTpMeo5D491EZz4WyhSoQW7f86PCVfZpf2J54Rcmd4yHpTeBjDMn3AkgC49a4AGQ12gbUL8Dk",
  "key18": "4FknNciJ9bscdaP8wvFo3XzyJAnEFMn32CC4yE489AHkhAkJQ8qqn5MwgitUsKZiUneupmYaaxbLqV3TYbx8ujwR",
  "key19": "Pi4LrQu1qgzKrjinhn7ALkf7tgk8RBGykedp1PXL7ZhoChb4vCYun64k7VC3E74vFBztvLai7QWLGnzugwBCxRS",
  "key20": "577wiCtu7BTFGRtVjx9dLqjDw8qwqpkCjKad1G5k9fChVQLQvqF3igfvJwjPC9uaaZbvPQZn5RA2TbQ5etBiQQcJ",
  "key21": "4jxuT2J223vE7puWXTqT2h5xPZ2HtDJ4UaH9YB92qF3c5kUvKPgM4w3h9m9FaSWHwkgT7nToCk9xLXV3rQP76MfW",
  "key22": "3uQX8of5W4QrM2Entr3cFbaqhXPvWF1S5u7x7PaRrEFyAxfxzeGeh64NF4XS5aiZ1WEsBHtmdhZL3kmyzfmhg41X",
  "key23": "46f1w3m1TYSKo89dDfFiPRrkKkm9xDcd423ePUsY4jBpG9B1AWmVM1qiNkiBqGZ5L7Qa7ypRBMbQC8ZS1ZUNBkdS",
  "key24": "5UDQ17mAC2gzcUdPBGB4wxtmvLG74ttKBubuaRjenVk7RDkNs1AFPycQA8EhDdaYJkQWytNpnaaaccicpDxRwg3y",
  "key25": "4AybYwamoGqyzpdPPRTHAv39G3qq5nPXMr8j21HiJpD6bHLMkndnodRUuzEdibbckYGqpNNMBzGo8KwkmoDUuvDJ",
  "key26": "5HErZr87AcXsuPbio8MfkLAcpRPfKG8uR4xjTLqzaj8T32qPpvukHiUg99zUzKThWGSHGTKRkaAkaUZC9fpeBB3R",
  "key27": "584xPiYosrB5SZ1KxatLwTa8zMVBsAJCWajUBFxW7VWJFdgoeJerc7Jk91coST6F1cY5w4oBE7tGUoUXsjxugNmo",
  "key28": "5eVjGHt336sQdcURu4j3iTKv7yGAiC3oWxsb1Vg3HNdPkmhRJi433GWpbL7NdngCNZ2VMPTVCva2Urm1h1nqUXuU",
  "key29": "3zvfSJZJ3V2edfQdRUPkCoNkNZNSbgqvV5ZtLccEXApynyN1rY3rkqWJ5PBKsVjo1ENfPQGP5PGrSnfz45kavqya",
  "key30": "r9FjCzT6M1HQuQHZRtj55tjgt1t2J6fSz7UyP8DdgdQrxHZomB3QRu5PnheJBLoDRWd5iNAK1cHCeuT72Gk3G3Z",
  "key31": "3RPWiU5wCePS9JTv8HMLXcj1Sh3A1zBennR5wnpYL7j6oqe13AVHf6nJWXtJdCbR9HZrDpAiLTEvJ5eKXENHaPg9",
  "key32": "5zDJyLfmB8M5Em1GNUCpBeoFLD3ikJtHwUA2iZHU5tysfz35P59pib6iYU2HYahu1LmvYHJELhWF384iDaP9jzKs",
  "key33": "2teRaKDmReF2RgxrGxMFVzbs55xw6yTadWrQTsMjqy1Xg77rxnomnYaNqYHNUdGYfaaih2WwT6GwqNBgV4tz3F2P",
  "key34": "37jvLgVCcELSDGhowa1pupoS3iAFEhp5BKfjtUy9QjSr6AKPtn9eq1vd4sSPr5dMszqiboHN3fANBMgqMLmMSBif",
  "key35": "3u75UN2PecqW6a4pSFTZmCocRrPnSBq5K4QXZoke2ugyfyuSoKH5gTSNJXG9FfV1kZXHjZ9v1Vg5uckmnbZQGn5C",
  "key36": "4H8RSYxXeBn9m3GWM9kzXrFjzgWsD4QdQYDvCBdhXTP2ixb8kPquPtQzXjXoicDQZBLN8wif1byrymoStaqqHWL4",
  "key37": "4efjF4cVSMnEoZVBybXxim77TUKkzxsRzekfmW5xnnvrEqdJPsKg1q6R5QVNSSXbABm1AP3nVuEJqFbTPyL9k8rj",
  "key38": "5D1aaCYgq5uEe8qa1rnC1xM7EZogLZfeWWNb96o1bk8j76AM8SyG9dF6bkr4xpidhk6579eQiMom43JozMBMS3hJ",
  "key39": "oNfTFjUzNdGetVTa7i8TFNzum4bm12CuQRWSE4L5erdgkpVzN8S17iaPF22uh5fz8bzL35sDStViiohNnpvbPNC",
  "key40": "3CFmhNE9sBiQEfb4DjukjjBFHCFfQrpkXjUP7zTP3XT6zEs2cMZ4duh3Y3zvbHHA1etAH2ZPPXtadnSrFvg3EaJC",
  "key41": "3yXr99U1sDZy21xUvcpk4jXrPKHZzmykeniAmaCjVwWctxRKCnRHg8Trxwz3cyViJw5CEKCrMAXC9DoY5Xi5ghQF",
  "key42": "3mYakh53nvHbdTi8AoBKjUsTaZHoVpJUvaxSkBBtReVc3FDxNSZAYWXu28QSfwUcNQKoMVKm4PURjNw1NXRMSzKz",
  "key43": "29mtuDUrf5Ytd4TkzcXumJW9SxdUUhwtxxhxkN9Sbs6pcUJzdGUzEXECgyr3RbSd6mjnrZanNCAbKbNSvscRp5zM",
  "key44": "5ev6cQSP1vQK9brb6ZA9T7qjhPKKoRZz9xGzJZu1z6sAawCeYYd3WmKfS1hwB7uAUuT5uWpi7bRgF4YHw5FzRrDT",
  "key45": "54E5iVJVdCz4e7GHnA1AG6p3Dbiab6pUPJdAbFrX7Pn22b9V58neY1Qd1Hv1E7CxsLyCAenvoxu24U9e5aL1D6Te",
  "key46": "8uRdznwxAWAnpYzcjEKgruvc8KeJ3quFd55F4tFT1YZjsryTXCBxdbZrdXnWWsAtepbmQPpacqsRxm17GgEnjwM",
  "key47": "2v8uKXGPM73CyBYYMDtRBfdb4QHztd2RgSMxkuG4fPzYRc6vTxc6TTwYZNTzTPYgVaPzEoLGxyYfDzR4QbH2WsaC",
  "key48": "2yuVQoMRp71B4j15U7oJMTCmo1LwUbu9rZHddiUEZKa4UXLpD7z9uV4wfvhqDBwxdzrEMbZH7FPJfUSVwqrXwrQq"
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
