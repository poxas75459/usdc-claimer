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
    "ixKfJX39Y1XuvD396MibxPeBczge53hayNYfkqg7gdiDXva1dvFdDcetveYTk2TezPCFKXBCisGeLJUjXCaChVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdfxmeDXDdRqEoY6nfbggJ56nmBo92rF6p8LiNqd4awPz9qEStYEiuqgR8frt68ovsPYJ2V44ms9wH3891u29kH",
  "key1": "4NiMSqfimnvtdSoDH15xtQRACEVkGyA8NkVD6YuDDPskzYjjN2QzMGgfKcxz4D62HGxdK11sMULayAwXffxSuaQH",
  "key2": "5Ryd1vFqDTvVJB5NhsGkjLS1YTUYv4Vf46HZoRuz37NJCecnMTGX37mhUbGExQH9Qm64wnyK9CggryHyqZRSLXzD",
  "key3": "5vzQCwsUUiUHB3RoH9VWWsX2Um7mjLgQxHP9LDANSup9W4NcQDN4K9YdzipBemtNTLG9u6UWj4Ryf4m7a3BcQby6",
  "key4": "ZwnSho9b1Smf7RHzSjPRHUZkVhH8hZ2hCac4rRodxc4eqtB4bTXnNwerHLtmc4ydueVuES8K4yG9PJ1cck2HxHF",
  "key5": "2SZ54NFAYDNoVFBRgoeiDk2QByRe6jmUt7hg76Fr6pdtPLjDkGGP8yi33nfys6kpbS6GRVdgpJWRUnoV9wkd5agS",
  "key6": "44xkKHHwv1HXdbWscYCiKDz34rwUeA5WVNHKb3CiwypWEXebpMNHquUwWddh8GPtALRY1Dym1BHLZgHMaKZvHjMu",
  "key7": "3YcenNACSafzKV4RDJAeMSn1jCakEnka5SSnfSvHZTr2YNfjgLe9FahdYqBobLMCWP4AhfEfUsiBJTS379vCH1zK",
  "key8": "56GGp1qm6Qc71cwihYVvQJA29jfoQPhJoGB4tbkdktmy8m2ZusY3axEzAE65tD6AbjX8GUZXMyPQjG7o3j2uyRrP",
  "key9": "5E95HHTV1zzV6by56gptMihDy5UbHDeAay6E9xxq23Awkq5GqyS84x1wmQWEFEMNVphQPHa2ik9dDxyghEsERzHM",
  "key10": "5xyep62fHmpwuLz8ctYqRy9vgZj8LpCkYoRwBpuksxgckmzsh22sTHizFc9RxrJuBf5G24NQg1gEbek153SPNQ4J",
  "key11": "5v4UBJDykTRghkMkEZ1aETsurrvUnKdxvAiYN9PBdwHfJcRpLSF27EJqYUetPwjREcesrfLRT6JuJW7d16TcSzaJ",
  "key12": "232w2d8cnqRTrV9yzYNDZADyFnZ1aasNxiYFh6PN5tGg5BQKX8WBY8VAsG8tUjZwGGpFYutkg7mzuiXBdjBZ7emB",
  "key13": "473zoaRMdwAZe2LZiUbDagYZ2b9Ne44P76NGTvmNU4sJtCS1UknTEAX6VdSrDoRScCbwCHfMAw4TatMq6DpGabVU",
  "key14": "CP4c7QPS4yJAVba2ojhTNsPzRHo7eJd6nabezv5FZ1xvwdP1cj6JkuHLRmUfHizQqBQgk2jvMCx5GLqUk3Kirso",
  "key15": "66iXU2BrDe6PVo5oPsn1CzqKkCHyg24coCn7CHeBSC7aHXg1mGEEjteNCL4SEAZEMj4Bd64wcoaBVygKKE6tFMqT",
  "key16": "4X6xyW7sDtfbFzj28ybFBgy9DZgau6GU4gukjD1RNDukeYEKnbPYH2njAegGkiU1dEkTecp2WMyTp5wbsd8gEJpY",
  "key17": "5ZcUjzoQifZBXE5fF7RaUYqnYPVvDkToZuzVwxY1LHzim8pLsPDcpcQe6V4QcwqLghABKnkcefupQUv6TLsPaC5z",
  "key18": "2UEGWxAsJv82hdrds7k3mbYmEBVXVnaKmXWfc5ovpXRC6h8EbBQ4bSuCwFw1uabdWBouLSLLPuFXiKcdpxfkrT4Q",
  "key19": "5KAJLGkohogEhed65QmZXtxhyXzRQZSx3BQ8HVAQ1E92cZuFByBxbaH7nXHQDt1qa9QUTpqLJuTJn5HHQTWz7mHo",
  "key20": "2utfpqyk4dUPnUgDCuzJTxDb6PJpitmV7t3DLNuUNBCYk2fsbZ8qhK7j56fZ3qKdq1PhP1xquL4Qg978pM3Qm5bK",
  "key21": "5BVsCaszNjnCUPvtGPhXp6TVcg844Ls8aEN97jpHoifAZitLsd6nYDLfJ2b3DhMZbY4h3HXzPWPFBLJmyFAu5htf",
  "key22": "3TPWWd6y5y9BaSXsxcWEHjdTKsNYSYyyBPVeK7CiRvUddZpjBZVPZAxxzJ4ancxyJBzKH9xK4PY3BxAvxorPEeGx",
  "key23": "3UaT6gyTo27V7iqtDNSnkQP57G5JbVE1PEEvfrGtQ3k1Suw8GwuX1hrbv8sXNDoNAE6JN3M5JH7jzRKxZNKfRuqP",
  "key24": "3a3vgnmG56mSGbimBVbr68tHyUyEhY9RCNteuB8aCcc6z7mre7WsFZ5Zaoj341bVjTEcaSNHEX3freBYUgRWAkTF",
  "key25": "YrWoFHCthGgyChFZuoCJRaFQuFsxYrXYGWpsiydagbzfJpyXx7MrN6ymsdUcGSdV24TJoAWo1cdgK7nmMEVns25",
  "key26": "5YTDPv5V6RACGrwSUGtsf5dmBAzhBeuZqEXM95MH5y2PkCCGqd6o8Kd1T6z2Qxt56jNHuBY7T1ZvucQ6KCMoBA4E",
  "key27": "3EQzUo7LBR9jnbRJ8EydCRKiCKX9cqDgdq3ixiJrR7CWpf9oDx5cA1PQF5BsyW66noLW3X8Ln1EsFBYvb9Bdythe",
  "key28": "4fKcvZtKJ1eVXZ23CRxEYEqTixqXwFZA8WohY7cXgHnwWCfBUxnH5Ay3SJzp84bL7FrLsWkLJVJq9UxoqV2vYbXq",
  "key29": "2SkZtXrpaHXXYXEMnnSaqNvtKuQwXq8tdgACgsdw3nFu6Y4HhUVHTbAshdXwNAoSHeYFLCdS3deXmW3bRMSYVGMy",
  "key30": "3VDLTE7zD2otwWeNJDkcLpFsPhPrSbyB5ADhyKGY7c2nwVussig9CL3NzVR7vVSpZS4H1yLYCcF1NFsCcoXL2Gvy",
  "key31": "516JV5QHx8vY7PtE9BNGdEegqXCHp3jrRcEJGuYcz6vtqKZErkwi21r8Ufch5vppQmnUhe1PxgFrnKGpV9hGTY8i",
  "key32": "smFUcbJyeNaAkhhtu79K4X9gUchGMVMCiiZhL9fQCnSsGudNoM6FanccUCV36WHy3HiXhtXkgJ1KR6fqtJVkSQ1",
  "key33": "2ra1hpu3ky1h96FDRPyBSQigDWLMRf5cmvX8b7U7CXYYjALXJPs4JvFjHkVGqQxnWLa1FrWwRJ7DTbsCEB1yaJkH",
  "key34": "3noDhzxFcAv1eLyCyL2qNvinoTd8XWhVkh8ret7roBkg7pHsyVe4JtSbj1uLxDNjibKXGJaU3MY2mDZfzVYYqQKg",
  "key35": "4kGBhf4RotztgtntDWxk4Kb3bTp6xKtKarbbkN2GNvbRaTTCd6iB9o5dTXRBUrt9yZ6MwwAABzvuVbJKAiY1wAmZ",
  "key36": "4JpPEvCR6JSHUacsLwNk4b9VsPSsBbfFVaRM5YDEX1d5wpJWKBiEhXDaUksYf7TN6UJb6LgDQcwgWGnVT5Q5YEAD",
  "key37": "5YAjcGhtUf9fSQZoFfXAUGTsQ32uQH4sGKkdwqS1CZT6broASXFkiJTz8eEzx4E7tjE1WYvXFpqWf7wJo1BLgp66",
  "key38": "4SmgccsGx8ZggBtiARRARyXSSQeJHK9evCiK3Nh4wFFvLy1c6usyWNFMEsbK1SYPWqaX1RkgXUNq5Coyvkxv7Qmg",
  "key39": "5nDfw23HdB7h2nAmH2xawPGbSSkjTcXicpXXHC8aieDyJzSLaNxxBe1XcYy1KwNa5sphg9JP8eYyB6aPSew4dX6f",
  "key40": "124iU2cwZT7us2dbFVWFrhmTBT9eC4gdaqpv4nvTFWuEk4w7NZZKuuLQaneKNWDsb41GAiLCQyhQu3Y5VeqW8J6J",
  "key41": "dGBLjnWgWcS7sFicCT9wnY2CBMzbDw5qdhJhWs18XLW9WPgmZy2BzZCYdZZUnqx8qDdxyb47ntcbgp8m5MunvsE",
  "key42": "5iD5LkEijhvC4Cm95e7S5Z2oxMXpS65VhUfw9wqA6zogSccWQ6rwtaSnJTAGcSb8pK6AzpF8CjjwCaKQDNSxN3f2"
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
