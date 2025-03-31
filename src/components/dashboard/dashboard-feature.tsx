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
    "22YgufyaedyanqJLL9D4fTq8SXayCm34CRm6zCvJ1QEDPDVLkwBkRcJz3rAfigF9sVH6wa4R9j3khZuDQbG6mFcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPP1opzmuCnY2hW9S116PgUbdwjSbtbJcpo5ETB1LVrUWCCqDntve5mWCgq29ebiPvenJjGKpEZSPPACjrqEa17",
  "key1": "jRXkbQdzhanc2EAWEhXPPpfg2P44civs5KN6dszSeX6BqDTnhPzqqUmyy4SqerPWqUhCUUnzko8QReKDDQM3s14",
  "key2": "4JuALZLCSHeQoLwcHekwLpzzpy7XRfZjTSD8EF6UZGdcwRtcbYcNZJCaQL21CsSGy9TqswtKBM2FCeGhEoL8Xcp3",
  "key3": "whR2cs8oDcZZrgebbVD2BXWDUnFfVV3kLrAF7sSkEkXjnqCam35eei77CwzBBHjjp5FDDXUSmwmY58KFVudViwQ",
  "key4": "4qE5AKNH1kKHs9qEUJu49n512npfA5AfKJuA4SrN4g28ABYh1KXDYKbf27DNEtKSaJKrfmnKtsq57fmFKhvwMgrt",
  "key5": "4RaqCjcaiW8jgC4932fozxXpeTS7DrGtYR2DU9UcNUWhtTAL6eGfVVhzktuGQMhQoLJe8Uvy6hkQTbtBsPznLjp",
  "key6": "5nC9m86XgxER4uBJoivf4EhTHGKkMp5mMHswx9kbECYMpDCELazXuw7YHacQDsVptNXiihfoq2VpbRpjyNRYknj5",
  "key7": "3o6XdHuCdTvjQJtRHqMsN4UQ9fw4ARpgaBXxBfHH671WVhExvLQLbsG7cDhDug7nNByPFrAnJM3obmzZ8gmyKcAe",
  "key8": "bJjaMmkZJRfcMTVkWCnS6BrZkEo4Ur9rLM1fdW8MiBhyckTXbkdu8EPZ7F1ovm8XQNGhM5NCA5GR15sAyZWMcXn",
  "key9": "5pZSi22aRy5ZoP5XN9jj7ynunvGxWtda5EQhE9Toh2z3zL1wMtztd7S848pxEALwAmrgpKzoYn1h78QY863Y2GG7",
  "key10": "3BL2n6PgkoUmiHoynjbth9ML5GZ1AQLXaaTpdqHiTHGfc2bk66HAAaDWdYi5gBQGmdV51wsKuqCEDubYkYq44Nob",
  "key11": "5xZv7iQDkPzpF23rWP1dg9mDuKrrTqkDQ4uGyKMJPSGj9Zb1cF4MvQTYKZMdpFEW9kiHcLyG2JDPjpbQSoU4Vop1",
  "key12": "EJq8EERRcQBWJt64sTSmYxQKwEfABpRtTMsvJXzB4Wxm6YeRzfG41BR6Y9EQ4iAgnwFusxLirnsoUPsTanVRoB9",
  "key13": "5dPih55yhXJpSBdYmdb5V8gtJUCWAU6u4xvNrSzFSLRHpvXknKJfyJz7WQi2KurNTerkeoN1b86dw4aqoJYQbSN1",
  "key14": "5GkYB6sdqBqsaFZShwGjvu5WJaQftRZfamQWHyxBXp9fRUSDTd4JHo2mSHgU92ZiKxPsU64tpnWE77yyDzBJHbjT",
  "key15": "67hfhMEw18Wec75JzRNN5KPDdnt9ie4cBuAVsRQr3PiPNBoj1b2A23KX4GYGti6ccPJ6bdaeV3CEKUJj2rxbCoVH",
  "key16": "2xEVE25xSQVTfjJ1JeaE6eLm3nm27zRmtkuyLW1vvN6WX455zr8yRrAsas1PsAef9ZWJ79QiKZrGDMdDqyGuWe48",
  "key17": "X8UXrxBaEwwbfRG5AVPfsr14KNb7kFSEQoiLM7ootiv6Mf1p3abWaRbvZVetnQBS5UVBjwHwPMfkgVyPco2HTmT",
  "key18": "2JsMxrryRMVy3UAJ1CoahmTV1xBRdygUZJzeiqg2qQPRo5aNy9FCuYLsugUVckdDHuAjxtz7JqXKgWKJVzfM4Q1Z",
  "key19": "2eq2mdumPK5syKLo4WxgM1YXAHjf9bz117t9Ckv2ghRkigS1docfdBTgeafY5jtdVz6Fbd4gGTfRq83TNKiTxc2Y",
  "key20": "5fGumyMPhEvhVdnCsQuYWcS7uv91MnsTXNPM6oMmdCQ9V8mfHRu8aDkKvzPQbY6d5BDeTBL8H2LyqYjjGBwCL9Ef",
  "key21": "5Zoo9xUbEveBoc1XvNoDxagcGX4T4WC88Sc4Lywk4N3ey7jaxATqACMPENJHwBnH7Kqynss5PwoArnf62idosb6Q",
  "key22": "2QE5aAbtDkyU8uAcjf6N8bpRyCz7YdP7rHGtfVZBsfNqPAxBjndEoQBG4Er3KqftaJAj5zXQevVKkjgMwZpGS4JS",
  "key23": "5qrKHCSMqfjPUbGEZuWd5qvFSE7tNC8XDcMauLwWBxS3s7wtL4frsfkNZ85xGvyCmdXAZ1GSRVrF19xUNCJFMFZd",
  "key24": "3cURobavefBeC94mBtPd7xCRy1chu5bcbnV1iiB234cWMbP2R2VjbQniboDEsyszZXoxh5DjfexLUxTSMUFHs75L",
  "key25": "2VT4MJFS521cnxkGjnwSnpCdHeeiTREEZbR23vvwAqekTsb82Z31ew3cgpBgKVqNHvMA8Kucf2X1tFwEkYV4mf9R",
  "key26": "4FxMpCtvC648GRtcdPzksUp1esbc5mGmEaXYoKZNYxF7AcrGkpP6aRTscoqMyxPgk7vJDTm8An2LMBU3DxhFGq3H",
  "key27": "3t6whD5TCPTHW9mYRXBUpTqoU55f61eZQ7hBi4TBhNWoKWDgSCd6Cok3HBc7zLz1NKT617ReBjjM4CiyP8nDLpca",
  "key28": "jwXkk5fgeVu7SwN9GdPgpqefi3oCtnaSJGhnN2Vi4FQDtCReJpdpH3YSQzjKy9kjUqhKrTaZukwxzPRo9Zeoue2",
  "key29": "3sUZwrK2xyeMJtRppEL4Zpipa3vNbjuZP8SUMzTucxtBo2GazxaaWCrEDgkQH3MVjSkoM2FmJH6mF8Fm9ztxydZd",
  "key30": "5TCXACKvEuRgRVeYxGheNuFPnZfgXbPTvBoz1DMebv28nGHajWyD3qqeGHdgp7pCXnijG7RwE24799d1uJu9gTE6",
  "key31": "5KfgSxZFVaSH2GaspRSvrrkEAxZ9b1ipURvdXKvrhB2GxJRQbHCWdYpwu4aYPRzm4DaSn6Pe8iBgnmXAmdjgSDvZ",
  "key32": "2WjRcTZ5ACURqf79W2TW8HRcWPdPPBME691jw4vTXMFhWCqPg4yPBY8rFiRTNYX4pdAdSD3C7fAgAMPF7uPZbnP4",
  "key33": "4UsDzDCSZjGnakumpfFgozA3Vvo1ScKw515qQiCYRZuk8coyKQmMx1k7HfjJLvu4ppjm3vbYFtCbg3eC734YFSCf",
  "key34": "4pV4zM6dkSEp9QaGLBcxZbkMB8AtXdQHkYAgrgFxhrxZkbbQh8DeCEMdvdVNYHPeMUkoD5dj2mQmrk4esFs4J1Rj",
  "key35": "4NncxhJxXDGfKiudbbXge3B1fvwBbCLNxcUFK2KacihQzSyxo2H9VTSi9eivrtjyVLdNTWYCTBbxCLwryQLyLpeT",
  "key36": "EqjKmwo3Ph9oTgPGzFVqxQk9TcWDZHCKEj33PCrJrqBGKit9acXZbVbchS1xKtz19PWYT5E4C8D9HCKJn9nQXQr",
  "key37": "4QuFoA32chGFBvqw117aLDXXtQ6Z4o6c9w4dwNKEHJ7pSVcKtPtdpdr2rixCy94gvWNtUEitZNFSCuVputAzaAyM"
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
