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
    "3UDYAwqLNNv8RSmthWGwZTH4mynRpEhzNcELYdxtHWGHHdokCCcK8PMGmKshCJ5FSjKxG5M4szKx1dDJJnKUQWy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XKcb3ygpED3upbvb2fGRD3HtXJpegA13ArqFAWkQUXP9diNGKe8QxYqRG4kfqpdD12W9WR1u9yLY2UG9B4TDRk",
  "key1": "3oz99MZcyAy1baKgQo1ew4rB1JSj2NMkjG4n7c7EUYiCB8om8Pw3Yy8Q76mqxynmjKo2V95yPTEx23BxRKRy65J9",
  "key2": "4MNrM1wWd5zzUSeVK83p4TsNs7Hg3frR3jWjvGLV7YonLYZd7cEBo2DR5d7HLmvZrRBVAwC4Y3xyuWvzYWLiUAND",
  "key3": "3CytWSeeHs4PwvXRC93oGmNh1KQNfyKf1dGCDt3hbTzqN9deVFufwMFj7Xgwrq9LsDQXr7sCGAkx8wXs4dH2u8gS",
  "key4": "5wzQfQ1Z7ZqjV9nyHnRtCFZ2AMPbsUUdt8wmnfo49ehWJKK1Z63dBxesMepV9iSBXC3oN1MJjVJci4uWjEFH2hm3",
  "key5": "2w19tKD4ES8Hm33iq5bZSoFckZTSHuxTV1Uy7VtkVxzqDuQsfLvczmvbL7egFaTFKiD2ZMJWL14WgpgxWMrmtMn9",
  "key6": "nihciiqsXwj242P1Y5VHmUp61xwvi5hLDsKgjnMwVnvA9JvLwK3jNqXHbuGoJ3o3pwEtdz1qAjyDBcLbHZ8yAgX",
  "key7": "5WEk9d9MKLVRYFQNrZZ9nVq8dQ7yHVCGQ8Cac9Lw8ZsPckF1mWUncaHxFmZXpANuEVrjirNDYAZhEGMkw5YZgp4D",
  "key8": "4YmDZGXoMvFyw8B9CRyY45cjSbQ4q1MG96NZpLAAdvzUoi3iTfiRETFruCdTqC2s8ZVjHvyMLUbrkgVXqdSbtVfJ",
  "key9": "qmB7SnboqVdzYS8XBzFbBiwkwYAZXKT5SijR3pfiuj9eMDxsVMyaixtANZRGupC1Uv1ah1tw83TEFX5Pusn5Duy",
  "key10": "5Q81fmzPpLNjGK61TVLT51U6wjsaztrWZ1RLqnLmG3JmLkih8WhUTtjL85Gix2FyuzHgoF7C569BPUEwqXsY6TnG",
  "key11": "3CFBHgBnsn4mfx6BsKiXSN7Qoxdt3FnonN64Bo9LMiZgHqVxnZ51i4nRmhRfy5gwuqgm5rqJUdode2BS4qSmNz8q",
  "key12": "5vbYzfAxmdBPgC18PYs81bG1CrNdbCDpyxKLPUBECSW7ixUywT2S3QHhHAe2vZT1GfvH5isfqHEF5AbByuUtrExo",
  "key13": "48ryRzsYVNB6HxVFKbXJN11MD8xKU2M6sBet5pcTeq4hYjrAZKgGjbJLPLiNKzpC99QM6HvJ14KQcVjEUQAspmGb",
  "key14": "5bHy72eHegfoHUjuFTtPLjdzJ8oCsdKKKakwXSiRnfPMDrkUsN9JpWSoW25H2Le21YTWRmUKAa5NHX8V7SLxXUV1",
  "key15": "byxYUBKuqgKk7NAQj4Tkakx9ocaK6SVqYoDb9Ddebs79sNTcNZEyqGitE3mkfEiSaRa7GbDJGn6jRreYehtWVPr",
  "key16": "5iWPF67RQkgDzWNUJwRv2ea8Vv6VGExiyem5MzZEUouwVeDitH5pXn8L5jyK2i69pPFAZZG5fQFKNzixed3FbTRJ",
  "key17": "3eM13MdsiFD1ejjApfDqSjUwg5vvyw8ZBFuhXQ78mBiWwNmpixphJmBsWEHDpcVLgjuW76zrHPkD4XgRzk61Z25M",
  "key18": "66P7avHH8AY19VGu5NQsPrJYM7kjCEWNcFsL7o6tMmRt2hUt61TZ4pCwKPMJutUrWdtEKMf5McsndjWqqJkgCY3U",
  "key19": "UixoaXQp35FWKUfy6D56LFASmCW35NhajFitxZUkBmmyXNJEVfxUygzTicscrkJH7J6WGze7kpgNLf3DCCzBzep",
  "key20": "48VimbBZ2EMBJWTQGTuU9pQNQiGEz72MnVaGwmcXG6FL7pMaFpyygf6JWWTD1WWmEEtUFDk6s6kQzaoxWLApbDvC",
  "key21": "kq746vfRz6TpMTZyHKaWjCjn3ecoeQ2suDTSrqPKu4FgXr4zZwim1CAgcq1rZDQcdeWTyzby48FfJWvHxdHDP7K",
  "key22": "5Cnd81QqC2JtcoEmLCyvd59AkQbDrRngW7ozUcSnqmzXk3t84zKynqJw6fNAQkDfemLsjwnXb8unJ9T7DW19Ta7",
  "key23": "43F9KqY6mYyPkBDUaYNTWvsxtscaaNocN93bF1xmR99n6AR2G8D4uyi682bh6qu5QNBstrM4HLiwS4GczEWH1jqi",
  "key24": "2qwwgj999LWtv1szFEyovi5vz6m2ns8dMwj5BQraqkyj5pjEuL98me5Mk4VmWUnkTFTQeJPxFQyi5U5PL8iF8mU4",
  "key25": "5u3xCW33DmsS2LZwx3Becs9cos3ZRqb2otUWSsQgoG6Hqz6QMnRQ8okVS2scgZzWLrwFyZzs2MBcj4VdTkWPd8cL",
  "key26": "2T81zTsArKDee3kjZe53YncUbEU6ctZxWTEDkpuZ1eRFQT4UzCHzdKrfZ3abuEU6xGPonHJ2g2fhniMeBsfvTRbj",
  "key27": "DcUqgXeb4bCVZ47MemLJj2ChpHi1E4tGjJB774bHJARbKK9v2u6VUfvxTHA58zdfbmEqDexMP93cRZ9bBW7wpJU",
  "key28": "2HuqVogrMpgjqAz3WkJpdVdvApZ1eHKTvWWhzk7F9jo1aTjFqFADpYrodxQw1DPYyUgwiBZMahGifsEtPWAXFnma",
  "key29": "3YfoKB4i6x6yc3mmxcgbJ89HeiKtm837gRz7TUoyg6Vj7hggZyYe19aCAFkWcE3DuGvuvG6FEcrzre4YnR27buAc",
  "key30": "2ERGpjxXaT1TFJetkCm2QwSTTuSETJLkcW9biPVsD8EXvqVVYp3aC7sRFE2wAhKSfmETCs83Pj7R8qVwwRghAM7R",
  "key31": "5mbAoiKL1dF2iHaJXxLgX7JCzGsY1NsovREFGXrG4JP89qotFZwXnHWxnQo2p67AjEwLUsoCnG9iRnhBtUFWNyy7",
  "key32": "4HqLnKSZcDWwEA8GaeawfBhqnAey4qPFzEY988dhe1DwRwxyqZJNSBiDMwDRXAhwWB7DL2thyb3TApXc88mnG7xN",
  "key33": "3ohUCZujyr3EyPJa3yWv1z1mQqM27X4Cmj5dRYT968Wve14NgbAKJn2ms5bD1GWkzGp4jBsstu5ftK2nZkXUhjyS",
  "key34": "49jrhcyLFwf6hJnerrLELoXTEKvKCV1KqKGmkq4jCqsCg4PbepiAVyKdDNxhrDV23bbDf76QHX1Dxvf3LPWfBygD",
  "key35": "297pTEs8r3oAGA4pokYyVhb5fP7dp8hXUWdBrYAijPp8rXbEhLES55prDTR5YUpqNEyrtm4B6WUm3K4GHamwJ4rP",
  "key36": "35F1j8t3Uf4YMpk8ZB9QpsNqUAScGW7heC69kBfDXxQe8rLSBkPN7xga9C2gVsDTfVyZ8STCPEo89VudZGPoxsco",
  "key37": "5KPRA9GTQio4D1M7kGsbaKeg4Xuh2B9LMCFqwiuVhGhHhPCVstnU9wHvtsh65T1mp5cg2nxK8gxtXQZSxtMCzkoH",
  "key38": "5n9E8f17qs52YRozCQTLbdWB3LbQy4shE7SaeJ6ywQcMVVRt3KeUM24YTc8UeUictKCKgWStDfSFnmtSSq4QFo7k",
  "key39": "3EvQiYc7XDtpGUqHKDgExnbd2GwuKHnTHTfdhcMifTr4Nsprd7LDkRVJu6kNjXgUKYH9eXjYMpD1CcsHA5Do2rx3",
  "key40": "5poKgK1tLBQJ2yA13fYRDMxBko6XJLdXsAPYo9aM5Wb3ehzqgJ8zZmi1b9LegPxLxC1UUrwQeG3LHfcc5iGKXJ6V",
  "key41": "5WJcTkDyr7Ggezb8avs9vdN4adpWagvMzFAnd5fKHmUrKZtmysWkFdLRBPKV5MsS1axYQqPhXsJYsiKyTZBgXymr",
  "key42": "23WdcD4dbXeMcibVne9xGzEijPiYHLHnGe7oRXM94BzYgvKLE3L85Qar5LS5KZkCwZRbbKi7Vywq4vMaSk6XemNT",
  "key43": "47YbQATrFPNUy91b8MMLCGJb9xkwBJS8C14rZdaByPm6cUFJdCegN9d2HRaa4X7Nqva8VuA6XjNY7ooiuhaqP7xE",
  "key44": "5x8Aqrn4iBhhXCZJoJBFMj5XaiL1ParLTjMEPeisrvedN8tbDJf6v6m5PoxuRCAotnYFJA8nADtw3DTydQz9P2ot",
  "key45": "3CfCqpMUGkyfsEZTStjUvFhQBwqvYbnMg2pLWzLqCzARoSWea5CWrWFBHoEs71weMkqLH58yJFRc72tUv8PmMzGA",
  "key46": "qLE4kkknqj8kbNTfrT9Tz7Jg2NpQG1ivWsdEUUfhM1zNJCaAcG4pYoex5h7w56cb9ZmgAQtHg9ZGqnYiYGYE4Zd",
  "key47": "aU3Uox8XRT2DxHLGP38RRbfQVSEv6fq48zQfF2HPk6hSWtMAJFarVi71xVFgvAeQeh3PhZZdvUN46pZh5DjGiVs"
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
