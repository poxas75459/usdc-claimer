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
    "Zt4uYyggoNEDbGtwA6bdEpqh8y6ZCxvY2wHFzTxqPz1m9pQp93QbzN1Dv2gnv8fTVtUZVsv8BR5N789v94KDDR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVtFNek9hh2yozDgJUbRmy9wBaQLaVTaDX8XT9FM4dHCXqBJSwDRLT3rcX6u88tMsonHSyhs6gUQCbxTCReB4hy",
  "key1": "2TrYyetvgYGkzikaJUtrZaQTEffVPpvEdiidQJZzrZdps48MZ5zxZ5qv3jkGoYdkWJUhB7fWuWpXP17YK6tkufz3",
  "key2": "2TBHPhazvGbwcgW2EGsRXQvmqMeWM4TwPoexWc9t1x12hiN2SESSQ8nZqyNyy8MnWFfbx4XgwUxVWsGtH2Ppvq7a",
  "key3": "2sWXDyQt8Z5fnynV7w587VJ1bzRZ2qK8nkTyywmCDBrBStDv9uCdBPYEdAemASnUYxKUiaoYkCfn3LHDwNVgbjVT",
  "key4": "56iyW4weK55NEHgV4AQAX2ETf8R8xNrQizsk5oZhEoYcNKoXzE95AAmTnPGwdLZWVWHrkoP48LozHV74he34t7SL",
  "key5": "43qJNwdwYR3ZijzuumGHGdn3wNK93DUn9tALqDjB96JWiG7Eia4riWveRE5xih12yzBZKQxaqPy8DXE1Pk7CNNdJ",
  "key6": "2XTgV1uNXoSHYeaiG67JnENNWtMYQdQEmLGiLJ8A47P7fv4HHCLBimRKP5jZS44apLSc6Ha9KCzFMDWgV6iHoj6u",
  "key7": "F6ennb3ZZw2EZr314xg2wHHLKWcQhGu9RKnWNpwpd1wpj4UfqMvv6kUEAoi2H9XZifKotcNPuzhjUFRtfti5QFn",
  "key8": "2wowm1GbwTyzw1rMPbzLh1RiE8CGUjqiimeP6CcHYzkCbM8NSWfDKvHMeqckqWUhTKwjtfdJ7hjzSXYnF17EKjZ",
  "key9": "2LgA45cVVEbD7LNtW5b8tVRYwXc4SDYjtMUsQyx3KgKc833hqqETk8UtL7hpHfGhABLpKAC3mg4qfQUTmeV9CShm",
  "key10": "52gn4UtAmTqQ8ymoxRp6pydk244L1uYUp2YHXjMiYEqbse9VVJJyKdjipF8PR45VhoFfBXRioAkxhK4u7fqyF3Ps",
  "key11": "2CbSKvEpSLaX5AeLnfMj5BRt8KsXRKfLXUpAJWMaoJZXVFdG4iQ4F1HNk8ChgafmZJ1cJ6HPVAtursfMdYH1B2z",
  "key12": "5sbXzuWEqZEox5HHiANjrEjNqYqp8WECPaQKqR9q4GCD57vyRSnyFCEe6M2FUGqxYKsdvKTA7WA5bx78sNnLXFcf",
  "key13": "53P8tw2UZMf9xBizbeorsbmGprqmmbHhR3w9UWF9x8ARFdpGu4aSxSTDhPwopeVP2YjXQGK7oEsGjKL21eaeuKip",
  "key14": "4PXfSPWtpFpBUNvyRtHNbUQu51GHGvkHG6DEZghsNhgNbqxYyFxitqtEauBKJG871XZYL9vzm5xKgY9CLiVUfpRe",
  "key15": "W5VxVMuGVGZKQA97WhrPP32HQ5HwQGJvNeM5tfBJtDMpqZnHYcNfZpVZXowFtpH18bW7M8Ja68va5BoCmNKe8X5",
  "key16": "3NzZKn4pmuB47WWiYKdpBBgVos46ntPqNynFnrHDw3EwbKfdaKpuJZj1Hi3bjXF49PVQ3tpvEp8yWPbyb4yW9F5J",
  "key17": "3ELnEr4mEjFePqoUJPz6hKZgj1dPCZgcVitnY5xTdaasvFY2hGdH8QqyUchcmoQKxnkzbseQ7ZK57uYuryMQgxXr",
  "key18": "LDVGDx6jtCqaSPLPhgog2wJmBtRSjtmw7aPYEmeg3sesLRcLD1BfRWSWqkj4BUGioB2CzYTAYPDuifR6WTiGupi",
  "key19": "3RTYCExGdvCKj2aE4HuwYyEnbRB3bqPXZud87emyweN5PiGYePFQCNsMxH1JqCMaLy2EuaS7iGRRWWFxrB8MUVxZ",
  "key20": "3xNYZ3Qobm5pJgNR6iJv1fSapn21BGLHJKk9N463tbPRUpHkdGXboc2MoGgCXYxEae9ThFzgCJexv2QF4XVijvem",
  "key21": "2VsD2nJq9dPfJ9ZZ8bHNjDFqFeJUQyY7kcsWfVZ7exkFaaaiwE4x7WmdTjrkeBKRpwYZzJ5jTZzb2QNatFe3mucK",
  "key22": "34AGnctSvnmdDG6DVEgst9WxAWZ2ndQXz5dKMqUhxmbwiV3FiC5DLH9xFqTgfCpyeJYVTnuHFu7HD9rw1WtW5yo1",
  "key23": "3TVUd5pLh9APfDDXfs2sV8MR6D3aqTZc3ApoQphjPPFyrEcrYPmkxvQ3su5q7VGt21iJXxcR5rFWgrwRRBznA5ux",
  "key24": "5AVGnEd6FnqVdJPcWD36GU6ADQjtdKNFzcviMmVSw58XtVaEisV3J5GtUEaNu9SVGBvzv2uo3djopMV5Qt3NQ4uG",
  "key25": "4AcH5jukGnGuYzVRZyqyeLRENt4zi819QchhrmFkaacfiEqd4ZboqcBBvZ4937pWUPmK9e6EzMdn5WU6bcoGotKJ",
  "key26": "59G7JCQX1kCncSKhQFd4uaK4PzYgiVWRrpd3WjXjVzNUG6ZEGngoxUJbHr7TUYPe1QU4enMwQZjcjmn1aHYpzUfs",
  "key27": "4mhAWxwQehASNVQEHfgN7MDzFzSAbRWzdPXChjpQVA3pqFrEDCZnCr8iboabCbh6W7JD6e1ms4W1WeT9Ni9TCJbx",
  "key28": "D1vJqXoUMMnLLUN4ECqJrt4VC4bydycXATQC7t7F7f6ExnfzAmE4NkAHB4nMcLiqsM71oKF6LiMNgsBLhMuNdoe",
  "key29": "2pNMpLUFJubYkjTpUZB9NGuyYGo6aEU2XtUb44pwY3qBVgBNqWLRQN3QRB2eyha6DM5TrXMLyoKkCFSy8cDHdRUU",
  "key30": "29TKhAzVpnHRmga1dQdSoqM2kwteyPuD4Xgj2SdQ5dDEcyzRypK1HRvnwKnBiHZZKGV9C4uoqNDrxxcHrUEn1fwt",
  "key31": "vkiJKNg6d1WApZg1WresYaNDdtopfM3uvibHkkmZkje1VgSWDVLeodV8iJqy8MVzkiQUzHywW9g4fTrqp3Mf2gE",
  "key32": "5iYwbYESUijvGsmAubFT5Udh55NxYn394brwGfgKZZNacZFB6Y9jZhAsYWzbYC9M6WgYYTVh1e1i2A23UaoDyckt",
  "key33": "5kB3CZ2eQDxit4WgLDXFZQcBqxrZ8YhkiiKkaHaWBAnZSTv656aPAkRE2ABgRBT33ATxmB2UUaS5MMiQwqfGXpbN",
  "key34": "4RpTW6Yph618u43HH2EtBSTsBQnhW18UPTQqjqH3nWUqpkUwJsiVvpkkDADcyE6zHiWiKzxewEXk1fUdr8nCPNck"
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
