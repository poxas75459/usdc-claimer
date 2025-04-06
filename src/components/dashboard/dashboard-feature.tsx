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
    "42FEVnf7nChMPoo2SNoAB4tDEjhmvvXs4XFEJDvhDb7YNSQQwKxVPLuQq7ndyLXxVfWQmR4AdZgDvK1K68Ve3Lhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRVEz7mPXZ9uEpyYvmyeeq2ooq9rWUE5hUPnzJj2BfDktUyhVUvgJyeonNEbWfdbJz3Nxkv4mERcAsUmnMgWyq5",
  "key1": "2Kyq2aSajyacJ2qWtkCzx7MyF4HoZKkL36vahuj793wvXXUNhp8xoonscmqNMDJnKixeK997g1XzNpogb1ZShxUu",
  "key2": "2XiRKytVYs5RDbU2xmoNX5G4KM5FuQVmMyr43JXZAQdqKts8qQB1FtpxVfQjTT4De6QD5U3nbs9THXNCswh38RR6",
  "key3": "5fiFMDjnJdWty4WFmjGazgY3pcrH7uHjRjUQV4XxJE8Y9dnjPcDNe9qDJbqmrWawWyUC9tMK9gxybV3j8AMNxHaS",
  "key4": "3nZrv2PRGZX4ipSiMCEfK915xvMsimeVHKYZKsYyjDwnQbwADe3zBX4xgj8c227i6Mn3FZXxaqLFBwUuzVcoT9id",
  "key5": "2ffbXDxrMMPtr41cxFMa6duUy4XgYtCUDANDmubq6oNRPwudpmvDszH3SULjFJSFGaeurjKo6aNHAoT995nPp9sL",
  "key6": "5hjYNrmoH6Wk9pavt7MKpPCFUpMB8hWxkXuGA8b9zC8nCAffMG2gsR8hQqqLjnnBw4qMZeNwH6xXpfXfM3ktzXnX",
  "key7": "5Sbv9XpD1Z8E9MpKQRGNAuqweGiuavhgGmJffmbELgd7M6fCokS6iEg7om137BAprM26FpKUp6wdzGHqw4prWhuU",
  "key8": "zWqnYVAKbsxRSndGNxzUidiVWSthT9NHH7KN7EyW1WcQ4cQUXnJEtrecfMpX9osewp4moqTPkZpes4oP3zuNdEn",
  "key9": "4LzoNRUH7YApnh7irZ5Tmreq9BGeDhJ4QpaTsbBmbFRdURNYBBD3krWEPhrABRQ6ZU9eozwNjnRfj112MLTiw97q",
  "key10": "4sZVPadTdfbDWrnBFwWsE6fJ6TeYR17EqSFfw1QLAgDirQP1ZC4qMVFFZDtD1yDbHxTTkPR3b98qLYuoagv5AcFq",
  "key11": "5Src142Zfp9yPVax3vpuB25wZZkn38J589Gw1ykMGPAQ8NvEahpe1KxemKwNRbEF5bbcBjN29Z5EPuq4oJqKQBAq",
  "key12": "3kmmRTrxxG9PA1XaZ4KjTGeg3buQQ2cJGoqpQYMbFp4TfBFffCtgQ7289J5H6PBLu3dsjiYVEGfBRPLb1sd96Tgj",
  "key13": "4j3HvFj16nnv3RSmkUQdF1AgveWp6LweCim3PC3RccuQJAXp8KmsfPvzREKaavP4AnPDkPzoED3GKa3ZbZ1xpesb",
  "key14": "5jWL87VUxFLHaquuYGpjwStAqQEbBhoyJ94s9BGZT1XMWYTBueecMYGQxZJbWhfjTWjK47X8MNLjAgq6CYoZPJaB",
  "key15": "26jihDJcsfjEADcYmL9PjFJLESBANecEybf6d1AynhnW5Z95bAghJ4GEkgi2WjYmKWPwqFqwGfkEttQsVA2b294q",
  "key16": "5TtW3adrerTRsXCin4B3SEcKaRKkyg3ShS7vhVubvJhokKCEfGADg8wUfdrekNZMPXb3X1QWSSNrxDc57YvVs2GR",
  "key17": "5SPhMUyAtx3BiTaJ67y8bH7RLed4kQC8dhKm4yMe81x8z9jB1712N862VSmaLetqnkqvFgRtcJikZXpv3Zmgz9yN",
  "key18": "3ALTNfHYqqMtVwJ5vpGYZ8VSFPHwDfnxP9drxLnQHr3wVKdN48966j7MjYA6Bbehk4xQvJ397soKZAimq4zWVgGa",
  "key19": "565EcMZ5zgVZQHwS8gaM546EHEDiM9tA7r5TGNyzKuC41MXZRsMvZ247xM3JiLKDFEpNvG3uXBSW8ryGFiEAgXcX",
  "key20": "3W6pRJUVPAkFT5rp51rzRQSc9JE1RwKPKWoxwNF8y7z1DCXuBtKdNd1kdhUEGVYomhj5iT1JLkj58HDBTowYp29J",
  "key21": "5zycugYFDPDnufwecFQQzLeRVmtUwJBnc3RKu1cqzHoHqhrekNDaG2AGQBH3Jj95PeEheToEwZRdnbs5DtqQMaZz",
  "key22": "3LJF2CpurxrPPr7xyi9Z5yj314VNkCcq4hYr8XWRNQaGdvJYSQdrJytA14AvAnofrPbYvpt2AsV1W4xEX7k8kGPC",
  "key23": "5mrA5iURdebMxwtg8gSngMwQfdpMTgZKPaoh4US99P3Y54m1THeXABXgLtMrMtmV7Z46DmZL4imXevWYotcMXbGC",
  "key24": "CJyTNkHhpmQLYUt2Q3pLZAVKczU48KGHaE7z8HWhLgf3mR9LxQMCFrUzKUXUxkENzaDaB9XP4NywCKx4Umhe69d",
  "key25": "56i18H6MpGvCDHzmvSapmC5sd7y12uAuSUvPNgcSEjgP3oy674FJPz4GmhoMhBXUfkRedEDX96FrXtZswgafmrWh",
  "key26": "BgrPdrTSe4RkdJEdJvck2EomqkPkPJWkv9iLnuMU54CadSmHvqvCvx7gmhCooao3mqeM5dJZmVNgYP5YYb88yX4",
  "key27": "2j6ZUouffsqHNFrG7SpX7ML3P6daRVRK22pumvazuthQjSqTmTkJLfDE5hPGcumviFDDPPRdzG5JZ2yj7Jc3PDQi",
  "key28": "5aEqauuyB3NBU4JvXSQNPaZJr3cUJwvbizz8aB1n7iqQTuUc7R7UsCHcSbVpKKktnUCRtFGXtDdPRJXc5Lb9mTuM",
  "key29": "TC5a28ibBVcHJUS6Bbv4uLczhj3cArQhnoGZCNZrLhFv1Uru7PfsmeZrfoRxbmse3ghCsMnavScaDFPspogGWYP",
  "key30": "3nHbdq5HfGKEpGjWvCFD4UGDNpr7nMn77LbACFvX24k3F2fK9ekuVhJa4dLDiC1CLU9d3CZYNzdkgnQMRtXDrZ7R",
  "key31": "3eXkakx4PAUsf5jk1BWciEiqHzJFZzHX8oXxb3DdoK6RLDMhZ1STHN7aJZGFqJQozcfpfiusaF6pUP67t4iMofwE",
  "key32": "2zXqaojYXZ5yDsMvpakf9TzUByNnhWAJWyiZv2bgPT2JUpqeMtaja1PJjXKQYK5rZhgG7oCBLaCcYtNzaUJoUbqE",
  "key33": "vxcZC4KDWyxenEpoY2YaipwirxfD8AmuMDDwsRE3hsQSi7sbZvTKT9EvrbEFGMbEyWNJ9zFFBzUkwMBYLn5oZXi",
  "key34": "6vTrxwfSdU8Qjjqt55R5vKJr1Wx2FTsyAyoWxxgpy1Z7EmSyeXcNu3tp5Em3EHGkyudPm2BP2h1Ge7x82pUiYWH",
  "key35": "5RGcwm6H8uAugwQsby4wFxAGocHBmn2EneV2QqBU2yXysdpQsRdAfJJdNaMoxRsGjXuxKzoxBWM8dFuzB8NPLV3r",
  "key36": "3sgHqfyjMadDoZBbUBi63gaNDXsRqyyBcZFpfn1fKF8m8Uk14TMKPHXuSRtw5W59eN6HJL2HYiy8FFTL78FYyKzB",
  "key37": "4WWqCfauxvZjpDhXevPo6thxyfBc6HXikDdvLCDu4Knhu8P9dy9sJmUE3fk73MjqiWVaKgmMShcfXXPndbhWqpWR",
  "key38": "5c9A2VaMeZzBrNzMaXks8NXqhSDk14qSKCGt79Cp6HCu7HAQyYcAWKE2zRexbA7Kux7HzcbmoKpWGX4JXEKmmbbu",
  "key39": "fzKbgS7CHzuoK1f5LxMjkkA8ka6kJXRobTw9r2jmGeCstJrvvozKWbSwb77sAB9iVsjPfeQyfcSCqB7qLbvYUcv",
  "key40": "XPoLui4agCv9zXKgQQsK26hGtJ1fdrA8CdXJLZJg5huYdEcm53ZGubqyALrMxndK2CrXza7fBD8kLAUyhzTVujN",
  "key41": "4mYNtBaNBJ7XgtoMoUNrZ7piQLSYgxQgCd8zpSawjmkGy6AeFDyqvqsggdCYtFsaJeeGrGHeBptoGN55ZjLr9jVy",
  "key42": "2DiYbMKDFDQ6fQmpvYGFUFoHXcWPv4N6Y99zcHtg6S3xnS7fQuHFmtMBQX8HPsh9yYzmFhTVFSyC8LRRJ7BovLeX",
  "key43": "2bC9Xk2zcWoe8BLQ6n1sNkuvJVQEq1texc1geDtzFSdAUMDsCTWZrYktEbhQjecvTVVhPmFjuwz9HcjQbz6U7noh",
  "key44": "4CsG1oTSFM6zmXBs2quk3v2wTLcUambFmhv3DCrPhvRLFkSxsi1MsAn9MFmD9V38ZTpHnBVhfsmJQKVUKSQnvdK5",
  "key45": "5DQSWnv3E4KKGcb3Cjfm1sbQo6xCGmVorzQxaipRjy3jZeDq9HqdpKHJQbytYoXFrSqms94Dq9fjTMhZ3H7jfHoD",
  "key46": "2K95yij97kSAZ5WNgSep9pJ7jTcd6y35w9BBZLFGwNuVm6GJLLYLKJ5gznCHUHxiUVeAuBQ2Le7hJ3rCvGrvdJVZ",
  "key47": "2hmqLZkv4S6aAJiUzFeEbNjP2GjrVhxUgn3nEWVNuqBpmPVCkVz4TXpt2RpSPgmVVEQGRBBgxG41Ame3WLxHypjU",
  "key48": "4LXbnZiioRsan3CVoJnDvZYUkybfLEAWLFgPntHuGHWY4xtQUbAykZMkzUDRf6b6uXqHRHvMvNYLJ5cs8iB9SRh5",
  "key49": "3JTfx91BNv9rG8qSHVmhMCAa1JLLYtMN2a7gwnrcC6pXiWFexz6UFwt1RwGoUF8GF1GMqLGvaMTeKbiAMpt7jM4D"
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
