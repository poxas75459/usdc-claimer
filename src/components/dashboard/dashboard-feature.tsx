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
    "fn7USESRH9XUCdCFYExpywNXX5VxW2PkNMA1jffZkmNEiYkdjEs7yVsjagronPqoFt4nAjeSPXov4LCYLV18PXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nc2r4bwRgRX6nap9Ccgidv5Yt8Kj4co1CdjBgJcgX79cFCP4S44ySoYWfwyGFXHnNNDZR861vzBhA55ftNjGMDs",
  "key1": "2knNMHjWbzsR4afQTQjQbvgpF3NDKwEH2GfmvJfRznJfyMLqZJnAHxzSoEiHNpp7hEgpyayv79NCBKmhuiTSVXVS",
  "key2": "4ZgyKqoecU4nz9cbpJSM2xWScUVUKpGoPeAw5nPP194Fcg1FNix4jqiaukDtVbKWqL75TuGjdQ2pfqr6xqX8LnUg",
  "key3": "2cqvoGSeGRc8SJ6syfBnadB35UaBJd9sL7pkqtMWyW9oWSpXS7CPJChbokDdRYTgPHhczMPS27TWzaRWvT4S9yPD",
  "key4": "4QdiuW4qzX5yVii55ynyP5nTP2FjmjDfozotNVDNvXUWsV9FC9rr2untcAnCKQKaKVLh3RaxEs5oBv95tLrGi3j8",
  "key5": "4jGRRAGkipN88hYYnSWDAdi9Vcf3YDujwtJbBa1gnc6ESiUQiPBNLxQvUaxRi2V8dbEkoFBcnLgTruGJCCtZSXL6",
  "key6": "2nHfH3emku7GLipgbHzoCqMCoud8d9GPY88SFT9vidAnVY4R4kGcJTpdXTWh4AqCSj9UrQSxM7UAHcAbHiScVJXe",
  "key7": "4mu3cimEU8HBSurZvn6nZ8kG8YBxviEphuansQD5am5puFg3CBhBMp488Fv4B2XfnBAWs8wrTxPbhsGcmbr5Bcyn",
  "key8": "ie7g1v797VJjf8TQaqoDEpchdomiS6XyZWH1SCh3jVqa1HYsqbd7vxqmHZWrZ11oAnpmwH2iJCMoHk4ujiaAUjA",
  "key9": "4nTPAqU7u9offe3ftmftAFo6trrz5nJG8Ezmu8ae8tvj6Wm6v6BZkCkSUNJEJ95MyWDWmBBQTs8vNMbTqW4B7rwt",
  "key10": "4qZBGqCDBk5yW1EDf2rLRSn6Qfdu8awUA5cvpKxYSEFNKTeixgCepRCd2dsZrT9nWeK9JE1WqyVUENfYrpXk1Wqy",
  "key11": "kWQiUn2obfeciU86rkuXTKynX6mhcH1Wi8DLiUkbRzom4cKE18hnzaTUq1KTrNhYyB9SHq3QUM8oo6rESLZhErk",
  "key12": "5XYXWaqk4ZYtqwyBcct323ENo7wvEg6gQ8gZnpJoJ51gia19G1DjFYAywAa6FKLgHfeMmkjs4fopxU2j4cAhvkx4",
  "key13": "5wtyRCnTg494CU3wqz49QEMcyh6Yvq9S243ic274KCjQFtKGxkFftYGZ3W2n6PkfSK8uWFwsKbETTmwsGUjwxmRU",
  "key14": "4bnRT9ujyP7jU48mLuRU7Tb35aWroQc8E8r4bjJzoJp41pCokL8at42Qpg9kbgGq83tZmSZCh12BdCz8Dtw3KnxX",
  "key15": "5w3z4YnHd4xYosiMGiJ2qzmA8Ni2tz7bCgXowXByizwxmgEirAFUvM1zBMWM47drN12VjhN3QQg2yi2h3e3NxwcJ",
  "key16": "3cfxqTKMKKyXwfM2hKHffKtdq2EZWcwnVvu9FBtSK9Kn1rCTjYpPujGumKLULnP2VqhqcAFhonqjizbGJpLh7EPh",
  "key17": "or78J8wUfJx8eBPo9wqn6RhmSUTyoTQT9eRqMrQPutfd9XS2DkRF5fqSJ5mbWebhu2RYcmaVkFZXsbcU4AVhqbj",
  "key18": "37HTvZBRLkbA8MnZT8nn8obiLNEpyiinzgXULsPgJebfmYjcyUBo2rfMGw45NaLzJDaRojRmh7pyoQQv8KXD2uiC",
  "key19": "3yWRj91ELy21DbiU2hJwCRc5VqubibY4VLLG88xKpgA9b8nqF6tSweXdi6HK8pEQpLXDot7PKjGiSLwC4XAWABEQ",
  "key20": "n6DEoVaq5RiYY3UUfNgeBvjSdd2W71JJZF874WTJDBwprotx2nT7Bb6Rh4tqvYV4bvtHxZJhWyM5ZEiPYwoeTog",
  "key21": "5TGuf3V4xVyQy2adn8gfRdGyBpucF9ro1wWKuKQ5Km4SCPgpySBVmPXxVtP3wFTiVXBpVSVWNfLjErtf7yAmq9dg",
  "key22": "oPt9xFCTR1ukY1rZu2koKNJaA4mUN5ueZUXRJs2HXXgp3qewgTqj7pcqqcCEa8mHAL3ft84E9aADKD6jNS5sFaT",
  "key23": "5a15bnpu87ai4cf9jpRvidrJXX1UXSS7fd83e59vUoa76SLhan9iFRiTW28iFaAqzWVUf9KXHBxGqJc5c6cAFTu3",
  "key24": "5JWX1BK3YNDqLGS5XK3KYvLG7LkWpvdiWXq2GF7vGMHebZpnp6s5T6ACYuQ3w6qn29EVWjb3WvZvM1vA5vnwWmbV",
  "key25": "2TakaBGELY9dnEekWgemJ95Hm5HQGCKcEwwgAvRF1QmZHd5y6Ld7qwZ9dWuG6uGr9BrLix92Q8d2CJvcUHnQFKDi",
  "key26": "5i6pZgDwfagKVikAWAZGFS42daiLq8KSBJ52pjqo5xWcj8X1kd9WJdMsVTsBHhP9J6LsjL6w6msEWa2LFxxmaMEq",
  "key27": "6ydkgnmGgBkC831WJMZNRT6aNUVPvVQDCzetrY9W4RUV9bWEudjqi1Kqop3hs8DFv1rX3h4vxEXMTzU9aTdviHh",
  "key28": "2eryfUA9stwLv8r9egnSBozhekwEFZ7pHD9juApGjdcRSyB4v8AgnEhFHEJh7hafXe4rcBLhgUL1ZKFTdtHvvo74",
  "key29": "ykfXeZGkxHun1UCMZDajhbANuzU2NWrKdxCu5u7rRYEKphX7HBJB4CE7NMcZu87AcVua3SvwQgUgCUfgLB1PuCT",
  "key30": "3mQtjdQAC5wpzpR13DN6JgCKmDPLwPdFtbmQWTrBWTsmR1AXKxto3bwjeBHuv3bZpZWL8XsqPaDM4MpbWeghK6ZS",
  "key31": "3qCmwH8M2q6oP5Zj7WnuMvwv9w2BdXx4bw4T1vCo8wQMRqr59x6bh3vBfLTwHFrBE4wh6thF9MnzDFYyY548HBRE",
  "key32": "3FUHE4621m8SU4mcQxA1j5yzdUq6SzNxhpLjDnYgxPT7CjMMexh16dbP1nxxeDcrJHFkojapKVTraBMtRf1y4hD8",
  "key33": "RRPeLTVJM4WEWaBgfBQNhk2fpukLbt4tajSXv4WMiDhkiAeEPNN8qSdKgVKHezhbgVxQZyn7nS4HcnLgy9pNHZD",
  "key34": "22jwz7d9Mnh1UFBB2rQCuJvC3DeDL1kmPoSuLAyszkVp1GustARuvkSZFgTqzqczLPzEh8QFbWQxoE4UcFyyvFE2",
  "key35": "2LD8JHW3aSy6Za45NhBurBGayKonMi7WgHQpwe7zUY2kkvEMEWaRdN16119qyx6D698aafADd1g9nYr7NZXrFNVQ",
  "key36": "3851qXGAZdvYx5itnsvjdecxW4xiPJzm33pBQVkie9zzbfeZSt3BPmGPVsyVrAYxDydU673CU4fsxPBwPdvS96vU",
  "key37": "ZMoM3hSm6QHYaAZUwFqr5TqgUdEEnTQ6rDDGA2QgKkWBd4JA5AU3q6y2PUtsVafmXFH1g1p9gYaoPze6xF9koAt",
  "key38": "3mJhDCP16vGP46PR4GeNDQazJhLkWemVmBsm3DfCkG5z3tQJu67Meq59w9PoR7akxCWjqfZhRxeCbnJQuEJ2qQkV",
  "key39": "3MK95FQaKhUQkF9HDmkw4fFia1jtu85NgtTquAdx6yoQKi786D1Us1m3D48X1rqeMP7Dhsv5ECRuGxaax4Lbw83x",
  "key40": "2ZobJ8nd3voWcYhZ1duLntvpcyAKjitMezThDd2zy7XN6KaZ1Mm5unidHfCTUH1Av9qx9FZG8MQShBTdzz4sU3Kp",
  "key41": "yACaudpznYBHZs8izocrF5QLyuUcLdJaLWunh6ygsjBpFh2MwzspSHKY1RoDeK6YSxGJkDVyxaJLKyyCLY146DM",
  "key42": "5j1WD4HSVDLCeHUmbCs7JhWR12MpgXba1Kifg4SZfoMp6cQh9wSsf9PgFagvDG7xJbL44trt3S6xSg1MQJqHQ2eg",
  "key43": "4k7rVgN5v1wwRs2VLbu1Y1jpLMFdvL9pkhMTV7DrKxeTn9dP91xTgncgBFKGpKKKawxLm3CFEK83dADGY24KU3mT"
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
