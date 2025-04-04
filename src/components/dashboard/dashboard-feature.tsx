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
    "sfhcGHMemay9oSEHzasnD9vZVnttmQzAxbpEm2T7HKEgx5dmK9XY5BLwXK4ydJQywjsAD5h2dx7qsYHSLeALnhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYNeQhTBSQFF41pLr8vZdxJQrEGvK5cWb2bEXitTcAVFDW3kQMf4Fwjtg5ZGYibt6CvE2ErxqCGGGdnwaWRxLyG",
  "key1": "3CJ7aq1sUFpKTENTukojmARemcDr8vpjKTj6jhdV3Vd6R3WW49QGzVnfuc4VCpnMZgNNwvnxa4Lg4tqD1ja9kEax",
  "key2": "ZoDdtkm53jvBP9L33Vi44cykuieyAacV6nu9cmqgW3fMVB7E5smigV1VqYuUvorMzGHk5DBxCzzXAQ2AhyNwEKq",
  "key3": "2U6udUYejyuWBUfDBGviZbFTyoDsFXDRz427EjmHh3uugubvDLGBtMbybG9PWWvm5ieqBLJm3bZwm9LgW3vp54xE",
  "key4": "5seeXxv1S5m97CjmEE8vJHU6fsDiHchMW6WqhcTBky1eDHqdJkNNhdF3hauVat9D3uaE2qSiv1jsGuGVcBgc2ihP",
  "key5": "46YDy28vhNupyJpt7CMyHUM5F7E5p4x9Cs1CZLQ7faMeGGBCX4Ny98s1YhETZ8EAn1BmXV9D1pncdBtwFNUM1MVz",
  "key6": "5MW8dV2nQkXTadjhNxUYsbd1tpYiVw4Nrg77Jmj9FJ19hj173LZeeW4JXPv2QuJrXikzb8uuroV214J6DB3RHrjE",
  "key7": "2FdvBcsPF7P3B2QQ2VzYUcmH8UmXg4Wc6C5sC4XDvAfRcKPoPmcTSqNfWHuidTTxDjntMBw6QJ6hLquf9bXr3ctg",
  "key8": "4hg1EASkeYU8W7BsNk16vQSrx1iFDcqYjrrEuvctqLf9kYXfC1w88CotnaWB2xsQXGudWfvDvNHPTnQ6fU25u78z",
  "key9": "2wKkX3gmsR25StkLkoBj3nEav1hJQnn8cEMDE9sKvPADoJPL7Hte63nDwpWHMzsnfJnziuz96mbvJyxcB1kiEHpW",
  "key10": "yhLkzoFVBTvQz6cuJtRCYXJy8jop3HojzjviqtJdXUT9pm61EEAQAbVsUbPewds8kKcYAdt1NjURba5GqhTuNYk",
  "key11": "4GRxKFgz6qrkruN8gEGYP1nx66A8yZ9dWttar6WeMmf6GPtAuUK38zoXgqTKaNWZV1qADpwDHPCQgxgk6pAcHSRt",
  "key12": "4waz32xEWf4a8JfGQzSTx2yzY26NUNYNH1qkouF9UepomWR9aBwvHC3QbN4q2LDUd4FYfUrEc7apMNK9RubWTPTX",
  "key13": "VTzinV1vTTjrpBgSpyD3okBKVYCojxQiG9iVkptgmJSupmGj98WAaopvHH2dKGDtkmazBUczePA8rY8qGnp6oqL",
  "key14": "61pKMyrfJpk7DhdFyE98Dq85LJsuX6Yx645FoZY7DtyuWmBURxZhmDQYScuYFhDdRakMuh2aFE4BMyBPtt7usmg6",
  "key15": "2tqzKGQNAokVUwvjytegcNFQoEBZxxSy1vVwu2h6AxNm4FTLZ6Wsb22PRGD9hF8A18s41zdmpiMxNtsacbraMs7i",
  "key16": "iiH7gUYhjPZrmWoYysrTZAyQiAdqzKXGdPSN7coerq92JH5Ejv2DGVmdsZ6mmejnyqraUmzFQEKWsJRxPJaKyKF",
  "key17": "CW8oSQs7F23fLrttnM3jeFMtmbL1gYMdB7WujeesLp8LpAjU111fwq366A5TezeAudqVX2ZEfMdZQjhmSde7oW8",
  "key18": "SfuDz9B31u7X8Y6N9vHdbGDyZ2gNfWRoBRoYn1Jhpe1XgLCCnB7JTgQphsiHkokpJdvfLtGnrtNvdCijNSbsyDK",
  "key19": "5zPJDwtmSv6Mw4xdkS6qCXx3pfpBQdnfXQLg51NmXPLrNuacxVVpntPKkyohWJmc6KALKBfUrW44Cejn82LMfksc",
  "key20": "Jt8nvdyNUSdLL9UEw8aYYFfnJvtMvPEdxZgXfUMiVCbKu3QCL1YTKQZZC9F9SesYQZ71xTGrKwzwoDdpKByT9yX",
  "key21": "5WpeSsNrNeyBTdj87AduTmx6PvBXhrKxzVEuAyfm6HugNKNtDH333TakkMXxWSPDuB6t2v98oa21YDxaZ5p4XvmP",
  "key22": "8tBWAC4md1acKBzXek9gvZ3zmaoKFkGo9jaYqD5qFVRpyV6m71F7tTwJoBhuQZ5MMbY1mXDcMvDzJffAeK42MnE",
  "key23": "Pte3CR29pvu29ACjzrJntPFBpRZssjY11rLXsRKmRkCer7QS8eU8mAUC9w2A8Uq7AernSsbUi42vrhAUn5qcfWE",
  "key24": "31ZYn2nfQGsyj5YMhmY6zFEZJ7iEwuHuaQ9cuw7dgsvL2UWMhjCkKDpwD2v34prVJmnUKZU2hcWF5g9GVVL9foyf",
  "key25": "5trDV3oG3SjB2ZdKicP3DiXZuFmP6trCR92qygxnP2ps4B1WSqg6STTdri4TsaAs3vGBH4aZW17u1cFV339JpiYs",
  "key26": "Whk7Eqa1WRqgibziVn1UUMvD87dMz7fMQHWDiLA18pHk5JdhWfrRqwuUxQSWuLGcWyNgZ59YsSjyJBCBGSNwvNC",
  "key27": "3R6M59NWGRztJ28vE5RyTwsFkDfuvU4Sb6cbGD8FWT3z5jy8jgktUPy1Ko2kkqoAwtC9bWKeuFVNpLi4YubWpea6",
  "key28": "jBW9QZySH5cj7Eh7yrwKKoyoV2dCZ9n5sqZGyraLHtfhDemtqFHnaArPkQhUfePgWoWukdq7bTsJgJs28FPkLKF",
  "key29": "4nV7y9GcWApvN77JnRaVibUvuyyJQt68eU9pq2GnvjvKCbgQTRUgZbf7aYKUPxYsANwvmC2ErDv1PfmzeHmH213z",
  "key30": "nMiiHeF2mqpxSApe5sYW7H6dv8XNKiA2fvJG5fX5i7PHzKzA2GhHS4WE1wN1Vc6X9XqgH8xww2HLptsp11uDmTq",
  "key31": "oPg9EdGyZXj8RZWatQEQhoSZ7a8a4maU4EM1ZX2CvPf2Mf9ardkUdYrSQ1r4YUexbgGqWi1LRGxhKQXAQcaQx2q",
  "key32": "s4aqZ6fn5793y4anFVpUieW63gxyH169iKxzCpmPVbMZV7zFNmoJ1zzoUV7aEHh6e3SfCbBhAH24JkPoCLJh2b5",
  "key33": "2soRiQAezKczgjiq96wgSCcCVy4yQKHBBqiT7P2M6NNMoZDz5krpEesMP64daCAyZdhyQhhKwUPKnvXJBisVz8Mc",
  "key34": "5FwRBGs3aNGAQrZD6HzxaL3RdE2zo1k75V8yfkfcJ7FxtfmV1QM3JFdYF1Pg7qb86Z61PLWQeUgxaWHHsKcXU4kJ",
  "key35": "4YR94GdDbxq5H73d9ruWdRyk4nwRbc5wPG4Xgwy8LQSTPyVvVmqwyMHyoTpQ84cAZHiwt9c7b6ynhS2ReCCuwKYJ",
  "key36": "2sPjMC6522roFeaRzSEj3Cu4johgyvQU9zddcyRwRqbkKPnUvVBreB1YPGqobTRGqoyquokbwWkmAESeAB43pYU3",
  "key37": "5hz5uwtkQGUo57vk7tySXnuowjkrAoUdN11ZK8LtvGAfNCZ6VjCzwEuGxvSxPqSw98adcQ64N4qX62Su8vVQSFJ7",
  "key38": "2BXtxFmPahYnfcwdeY7ikdaiK1PH8wz5FDqcKDEeCrNMKGzSwYyBz7EW2MJid1sR3sWGyeAtjapUJ7QahYh9ZYL",
  "key39": "5noE8KoXwfftEFuTb5n7XRrckDThc9ZJikYf9hHUffA87qWZX6bRmnYdRRvRo2Ztc1hUezUTZDdzjBaq6AUiLtUF"
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
