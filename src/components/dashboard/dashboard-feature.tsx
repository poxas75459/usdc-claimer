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
    "2zQTtYHhhDrgdbt2362V4w25HpbQPjzfb67iBbaNAuVbMMG2pjWvh2ZyHAHPWBiSRiTZfrFotKjW29RTecyT3NKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gPXpyiveNyrSXC7XuQbNHfA3uxoY9UF8PpU5LNqBWNwGFS2YeYwdmMUh48jSBLJZzPYLGDuhvcveV4cFcY5GeM",
  "key1": "2xQhDcBnLTLQeqkz67iLefBayeFPvgGqjQVQHmWtDbi9NtbvzGrPuGhUXRi8Pb8kuukPw3eW5pKCPwFAXvjVCrpT",
  "key2": "57S7Bqevein1LJkEBx8P5o5Z3Q36VBTPaieDLgK7b6oReCjRcCATM4EXy2oQEkBJfQ3qPKVBMAzES6yM7qQa4DSm",
  "key3": "3hCyYzvhzyznWjHz4s371ocQTuju31koMrgpHNYu4QZJawVApAv2ex7ucRC2WWmQ4aqN5tzgsXyHKJAHuZF1wQEn",
  "key4": "5WbiZygEoNu7PBoGUDyFMaQSWGmXpD3DuhUE4tejeWjwawKEXHhmgEyEjb4wya3jZ6Gg5U9y9E7HD3nACQRXaRUe",
  "key5": "41XY9ukqQKtySXSH6HRCdmWykhanWjD5mY5ZsXMbG7nzETGNSXV2yH4V8jDabzNyUDtbJLzK15EZw66zyTfsrMGx",
  "key6": "GBQBp2qen8tJ2B24LRSr6Czizp2WHhFLXEiQn5VbbcC35Y6PJ5mxwxhrPiEBH36AZ4Zp66o1LU5a1EMN1kW3E52",
  "key7": "5GxXvwFwFijk86QqPQfhPFUSJfpQ1w7oaoFikiZaAPnJ6fhRBdz216dFUD9ntYyDDgWeCWTPX5pU3RLd1nvcFZdr",
  "key8": "p8xgVaA18ASFzdd9BaU1kermcf9rG7FgJsgM5Gxp9NFL4Z1F2AW3dW2M6iDkN1YZcuxSR4YKqaJa452tqMJZWUV",
  "key9": "3sWTcuk4s9xrHGEPZ68rRzmQsTBUT293cwzk7paD48spbe5E4h4u7rv95FupkPhKmsToKZ8w9YH2zWKuSFRqewj3",
  "key10": "2ewxNn6ntkzkSgWLsMLrABuVNL1LBiGV522TW519eovFzW5WunxNN3PqKzEuQ8WqyX54KMxL4gwWNteWinD5dJjG",
  "key11": "59pasxEfzschZv9MvgyR8BgvGdCwjQUdd3LhAdpoeUPXmUsdLzqStSruTB82WEXum1KHaTSBFAVQZyGMy55pR6td",
  "key12": "3ZudHXe9KH5qiVzaWKqCL4D9vDKjN2Lh2HEiGNLizyGJdK4YEemMEi4CgNFbZ2c21cWmNwCPmUQLWwbm6y79deDv",
  "key13": "3Y8ob2FZ5wuqCHMdpdHpUddbditGSB92SwLDMA3PcgeZwfDnKYGemvdpe6VungUD9nwEyeVEG9mHZiKVgu7KKQf3",
  "key14": "hF4B3RmNWEuGD9JDzsFwDzuq8cbLSj81GzPZNRGQRkCV5NHAmhdTVQ7zMP66fV7nckZcekit1MiE7sDX1tM6tHa",
  "key15": "2PT1fkAuZLghnghcdBiia4dcCUA2gTMXJy1K11RK23NsaXLPpvKZ7f4ojFVobLTt2B2vcK2iwPFNumUjGwui4XVZ",
  "key16": "25E4H2zYMS9y48czQATs9CTk5uxGAbpwXSaUKYf4CSjCioAu1dGC56FBUYRgDh2Gn7ZxaRMFFmkPQniCyGKqmNRS",
  "key17": "e5Pi7TCdrULfj7UeTwTRQjFHpjjxH2qZirTWRkRtLwioJeWmnafjT5jydSvepaZSD3S5eRFr9uCwz6cNQo4Hama",
  "key18": "ahfrHxEXkXai2Epn7RBJdv4VeHJr3oS3euXvoRd2mEpRFPYX8yUyKkJAJUQkWYopF7WiyvGFdhAnCKt12hTr9y4",
  "key19": "2waPXJ61M9ThVgQ8tMDLJ5f4169T7H7Nrs2QvdkpWxw4u4P5YFPf2x6AUfBqpPZodvCa1DTX2MrJi9SVygADGZXE",
  "key20": "4a8xYBdGp1iXAAzaTJa6TPnjcpY69YxozdFf37eAcf1rgM8V2g7JLZXTvvLqfc2eManSppDAr4YbESYNq2b7BKF3",
  "key21": "4G4hVhGmg2VQsRV1cMeN4sqMx4pF1GpY3x4RnBfwvREcovATEowQLFZqAAPDUNMAGgdwBGwXtgpK6tMdXocB7V7w",
  "key22": "5cqk7ndWi1rr3VmLHFiSN1z28JKsNzpcWEjaHyCXWnuYF52jtYqq1Le3BLSj79KaBNNJ2PF7ksVpQUsEJ93VDExr",
  "key23": "3BrSv38bEQt74tBaY7UVSwRuhSxjESSxuCsqE4kZ7viQxwtSrK61vrpg9WNywZkZ93Byms49x2DXxYzLzuYEjg53",
  "key24": "aYBvneQTfeS8XV8SQwyvswZnuXB9bdpDLx8Y1i21DTECkizhn331o2TAfkuePeZMGUNNc6nGciMtfeYberGhRB3",
  "key25": "5KkqmUpf4GCCUoxJVrX3G7emL8nPygR1LLjABf2EzNqKcd7PshQ454Ykux1fiCvvTRa2Y3fNu2GEEq1ZfiU9E5HN",
  "key26": "2YoWvgxCywxH6uCvyPTVsGFXZxhLyzF4cMZugm5jYidG8PQ5zWjTFze17RCy2oe4C98NVHCbUiZXyd9oMsNVJmy9",
  "key27": "58bxHYHAd4G55fuwxEiqhw18LZFoyvoQgkXFmUX4Bz19gc6aLNeMZ3WGb28NWFkoqK3Kr7NphNoYq1FwJ3LyKGFi",
  "key28": "2fsn5xXMWN7j2UNpX1i1G4QourVy6j1cXLUwwW8S2mMRv1fcwwwv1fDxnhasNq2hn8eDAEuJcUxjo4CP1KZLamSn",
  "key29": "5SGMVdbso5ZFpoqJCmedzCrWGxCP1xbHjT5czugKJssAe5uznCZnZrUEYk3r3vN6S4Qkfpo3y2K7fAaTuDPRjqMw",
  "key30": "3WcDQg9MxyYep2VpEnGnn1ZXJivdmq8m9PBwrtZyT7rx4gCrzpF1KN4YPGAE3UqzVaQ8opYGjJhuQ3iPwUks6QHi",
  "key31": "2cGPhpMsDeUbXewGaw2DZ5Ru4QquEEhdgySX7W8gqSoBu2enBPvWEBXE7zqK67UNGj7srDSUFjzhK2EzP3Q63Ugt",
  "key32": "5shkBqriQHjeBwTtinQkTKNUwy7c5D4Tur4GQ1Tv9eEg5MCRXNF6nVvFNgwBB3k5AKUHP2Qo15q7ZfifpYvsaRa9",
  "key33": "2mDqjD1YAhnavF4J5mnb5b6PzRyFYV8zC9XHUnqoZpzPkZuctvgKRdL7yKkPNx7qbjjsqeCVqhBeS1ne4FPEtEA2",
  "key34": "3yasgFTYsTEvPn5wcJa1dKgnuDkFS5hkueqbmvK3WV2c97GFJsDvzN25hw4mUZH4Ma569mDmVNPC5uMES3jAMrV7",
  "key35": "KPwDh2GUsN3UhVbHCa2rMv2rPvPgkm2enRpzxgAfFBzufr28Bdkq6bjTWDp5aGHhvnWegr9yB9pLznNSod6PiXX",
  "key36": "41QacNdxNLduT9xfSDppZy6ixvN8CHZUxDx5ewpgSvjKAub2VyCViFc1MA6pnvpvr9v4WGjNHCxM65SH7pmLaWiV",
  "key37": "2pza3keqREMr5EngVdrdi3XYqyRUfk5bWzQWeJmAQCuK1y2dDBNi2sAtQB9qEpzspMFquxyi9kz3uARmEY7U8Ut6",
  "key38": "2MHaYqH2icfcoZJjiN7kBFD8chfxrDbx7DtUDTDeZhgxScEErPRtRxBSTokdDkAz9F4ZdB2dhJ3toguHdAkxvcSX",
  "key39": "8VUn27rPpH9w84ASkeNjzL7gUAqJGpNxt9PUbXfC3KGbL1Ye5xCb2K29TCpHy2Qm1BmDpGMVXgXq5MwumvqAhQA",
  "key40": "5WyaqUzeaMGaQYoKSWVmnLmMJppmT89mqhqErg33JyvYhx3vAnQ4RmTuo8BP2FmrLiRnWJrZCgdtYB8xndU8PBzt",
  "key41": "2ArXEVobW9W3vWegk3tHqxJaiWju8cqh5NafmfGhg3RfHHHqXPjc69HqWUydTsWAsdEck2wV8NYDVxLcLUtzpwJc",
  "key42": "3SwRbPskS76L14vqNjGTn7ppFPZzoFUUq1LZt3FSXpoXnzBJebesFZgM65Pcx5REBptWp7651CH5EvX342A2zMHV",
  "key43": "b1r336H83CRGt6yApbXdGGTYXfCnhJu82Bw5UFfmRQXABwPWin3Pccui1Jfw9BceDmgjSjEzmd2qLwqQbtX3ziq",
  "key44": "3MFZyEyHHB9XQQfYUKXtPPV39j4FuBKTZLDmcvspUwUGXF7bDv7VtMZKwegZFzAVTpG5MexEUx7ZMExrVUKXKygJ",
  "key45": "2LKXUpYWrXduNgee1iUomNkYDb1Z2h8XtfJi8TfdipJvNioy4sjMTtKhiGjrk5yudyNBHqGsuVVCJhxnRzgynMJ7"
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
