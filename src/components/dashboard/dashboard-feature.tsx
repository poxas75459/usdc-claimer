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
    "Nm1Rst12sCZJhsznSfoXbPmgefdsooCiTdCXhSysfkFY3FndF2fuvRhbE6XjibvaCAYvZH2R94hKqWL1ANa3HPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZrJpKW1SJQxw6wRXjjHnL3SwDUbcCaHG1NyHN3cxYC4oNYUm4VT4PhwyGYPuGb9W51epcRzMgo1EQcdACx6bmH",
  "key1": "5Ao1SLbUTQME4jzAN5bGdK4rVoi38C8EoCuvHSY9e9qySFwbyBeicTDHkoJVkGkFLeMCnSeTtDmpNprA33G2zC8M",
  "key2": "h8whPJtBy8u68a9x3zDa9VLETUiV8vEKU8QsLNLFG7699WHaFGGTT5CZrynFnTfeuGS3EA9c1jjJ4D6tAZNkpk8",
  "key3": "5DX7MVtjsWsy68sU1zRCsVnfRfcsC5idQE9zAZ5tv92B9Q9cMLtRVvpdZVqqJmPZ3TBDk4TCtdnDUrJNpPqpxUgU",
  "key4": "2sFUdi8D7PjBRbKFUP24DDqS9m7ZuFHkjn42CVbPZbgyQYXEXaYWXYS32LxXPtqZxfm8HkHZ3BX2iapiqSuawiDp",
  "key5": "3YTZnBZtwqxeAvh4GvKF4379ThzUM3dJdm4yBusJ59b7QTEHP14JGa42MYY1D6h8KHeqR7bb6JwEJuyLRTYhUtkg",
  "key6": "3muFPGMVRt62sZkDaMmHW6cYwNaehg22KHb58yfoNDtwyiAe4GrWPToUbQXCEKnGsfxEb45v3u1gkog3iRXckyQb",
  "key7": "4B8eaJHw9jpHcY8c7rmtkMvXWuLE7N3rDU7T5pMCyEtJrpq6fKPiYPkyE6kmgTGQbZ92vmACq9VeWgq6MmkRtGH2",
  "key8": "5R38u6A9UpN3We31JmQJfbZpW9Mu2WojFqyU7FfrjMoCHZQ2F4vDGsR6cVZEgsPpCowz4ud3p5tE1amGF2jUfCvZ",
  "key9": "NUZQeek5eDe3LP82SXtnPzR57nP1TcCrHdArvGwvCV1ZMY3RPrUwULhearcoJgQCHT5HVP5nS2LS1QWRLyLkTEr",
  "key10": "4YiQ29wCtCka189grC59mfJ18NRjk1zNDsKX9ypCUKzDXXvqFNhG14T6Wu1JNz4gZXF6okbxcB7pFLBTgGYLWcKv",
  "key11": "LHMRS7uRsqzdVC6BYpDA9oZfJMEj5EM8gWKsaT75HHanJTBXXkGEjagBLXJUeQGYB7KFaNvDacMWDYvjrCZ7aJM",
  "key12": "3WMTdaieKdKPHkccRFCn7KT7s5U3tbASJQBWWe6HokqgArt7D95CPci2WnCyvsjhE8UCWuJdeiKtPxv1q1tvahdp",
  "key13": "szidK6N89oXkiAnNiuBkiysG5abdGaKBUXEUPPN6CsesfMj3Trm5LcjXX7tRu5Q9EbuZgg4QHsCSKmZ8jb2G843",
  "key14": "3825ZdcZmBQgE7egXtwpHPGDorhB2VVha1VgoUnBhEjhvbNBj7zPp3oZhkXd9Tkw1J9L5eRw7EALEZJTWL2ABZ6H",
  "key15": "5jJf9jY9vP46RFMtKkQgEM4mwvupUaPSTtRmDMAoEXj8gHBaAfwdLp2GzLCib1UUdrqnxyR7D3Lzm4zcDbqkZEXq",
  "key16": "3fduwFT2mTQYEZqSsneFnqJSTo46Wo7q6jec4Wr9s9cuRVPneWw7SNEC9RMRwaWmDoyCDvzgFSbYAyLPog4ghAeT",
  "key17": "3ZTmaLHX2yCyepNiTt7iMqiptfFnvWzdrpD7irWGhx5Sd4umeduemAivAU8Wq98qY3RatkjE6KJfW2FtmKbWCJ8b",
  "key18": "mefBxqtU8ucTMjNCmj9PH4fLdcRoZ3mUpeVsdXaHwn9HzCHFzHCVtGjuv9MJtMk5ngGtev6iu67tnHN8UN8x85y",
  "key19": "3XKC128QXrvjZrQcT2L524gbr8HgWy9b9rXAhjMz4uKkx19okSgHq2tExwCvFC9DUyF2Mgphdc6L53PCTW13qPrC",
  "key20": "5rUNeie8GHmQ2HDJQbTczNE78GZ4DCM9L7Ej2rkeyAxyvQqMRD7uqBEEs6S5PVBAArVFpApn5A1fBSEkMWLQaEsS",
  "key21": "4ZEAnkYecHCtV4SWfSi2YZC6UP1igrw6FdHhYMnqtFAJejYNd3N8GfVV3viCXyWCGFVT2uAdtVGryzZ4WHx1m8FF",
  "key22": "2rfBqVjJze88Mv4P8yVgsrBUg737zUkgag11bs9kJ5YjcmJr7g87VeHCDUhxa1gNaLcbZ3vfg8M7WCGRxU7aHomC",
  "key23": "F4Cv5ZdHCbgucrEFqBNQ1u1CPvejVNw31FYhSKzDctcg4gkmUR8JeyFB8LmKxh8u7P5NWExwWrBzoLx3NThN5GM",
  "key24": "yAomCgw4MA8JT8zvYsYyVDeoU2fL1T1y5gPDN5eXQtVZX186m6641dWwCkWgN8uhq5EHPNXTQKYEHB5kh7JJTxC",
  "key25": "3appEzMWW3ko35d1p8roc3vp9NSDwhdcpng2SzpGPwjEeXBHjN3aU4emPsfjMXUcCUiRFkspMCuRsB26yZNKa7aG",
  "key26": "5P1hZqQF8GmMkW2XRrSqBCPt7jzNaprHzA2SWZx7kV4TjmtjNffqMVK6idehStszULhxPdbrfv6oVpMMpz6WdqLT",
  "key27": "3vKzgL3K32Xq7QgChRBuRmzePreFvvSqmBUwThkFzyM9mWYxcvW86XMXjJVbynBHBZYBKWg7pi5B2n8AYHEyTZ76",
  "key28": "2crnEP8LBippUHht6WdT5PEad9SvENythqmjwCEXT9Uqx8JnL3nfcCwN3FS4vsn4wCN4gbnEDz9xzzV9xjad4VLL",
  "key29": "2EeZqVrPVpfTCz6i4JFDkgQwjH5WKc8bFu3pggtHDD75dNFmTjyei2UHkyYBkyUBQ2y9GTT3ysXdu9kV93PWRPpA",
  "key30": "2w9WM1kC1q5rH1vPVUKiUtq7d3AhfhDFmD1WmYshWcuoLxgAeGsMaBLXiQscsQbAtbbuZk5kw41U4UUAyvExzXk3",
  "key31": "4h6QW5exU2wGiJSmjP7tNjFqQ8HaYoGUbZ6atvRJHwVXvJ3n4sv3D7keMLPmU92fbJRXZC2NshKWHjgXUeUi4Jum",
  "key32": "2pDH1WR9crqVfhMysXn1Wxw3Yz5PDHrhHCaJHB8YVsCtFouHkhFdFXYukJz8McENC7FAL5pL5V7WYgKFS3eBVCg3",
  "key33": "5rpGjydy8SPmWBioTyo1v5WHUUFhCDQHqaHqN81wv1yWKjyGUge7UXLTZDioEwUtKdQ2XJ4LU2bJXe694NfVQ6XD",
  "key34": "2R7bsufHBq8WKdEAB5yPXpMP2Y4aWnvxE4xM9uWLQzaXp83u6Exz37qh2fhJkFiwPHJKGwPfiojNsdhmqkEedxRG",
  "key35": "3rV7stueAkqGUfSXc7zw74MZcEVFLZMfc4vcj77EZYwVYBNNDVHsukoF4gu8Zu1F4N1p3WJs1zkChEZ2NWMB7U18",
  "key36": "5TtamqD85DUaxifc9bPvwgshnvmBCPyWHvqauWwax1yQ9LL2KYbW4vKKppUuKUnnMWiHRk2MLoQ5pjTk8sgBimiL",
  "key37": "55uFbDigzQjmQTtb3wSKiQCEUSCa5Wsgy6y2xB4V1WYCBS1w7iLAQojEaF7kyWUjowYBf14dY3y96vND316F442z",
  "key38": "3uj71oB1D9nCMAcZTtbmMMo777ygZ5NqbTf9wsc2T9pRkAs1Dp9DkV1m6g7TUwZVRcFMCSLGzw5aN8JNFGDNkkrH",
  "key39": "51ydDtyjqjPHSYjUcGAMDZ24bgamnzhnR4mAPcWtqQWefPZ44SYtQaG8spX55Fj846tUaaYk6d5p6zg2VKAUdbyY",
  "key40": "5fRA3AKkF49tBuSPPk4qEcELRu1LT76HCp4rmkkB1Jp1rrTX2XeP65e3jSFqPsvoJQASJABAYMrqmBk6btUZhHdw",
  "key41": "5DptnfHs4zhiypBoi1tEZsJgyWVeKhw6M53iPUMHhNHa3QYTGByzVNymtMWT7MJXJ8B6iJxnkM95ZTbVY74xvrFo",
  "key42": "zqp3X12i3A6dyRuj9CAgq7jk8BVc9Gzm3sPgAKmfHW51p1NPEs1MsZSFGTGgzyYtSKQQcV1LvFe66pRjJGS4fwN",
  "key43": "5Lsc4gwwF2PufpgXyCXVMu94XX4oCtVdzgzteKq8Qe5iZc643MnKGc9r9YfQgebL7YXaUWG5w6sdJ7wcARisPjYq"
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
