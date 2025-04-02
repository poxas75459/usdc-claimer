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
    "XwbjzhLv1aJ1JhSQtyNDq9GWFpVQeJKijqvm3uMd7mSz7AmSpeS9TPf1DuD4o8jo7qfxd9b7cTDewruufFvzmwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5ith8CUUzn8H6x148eKmTy8zZpRjvh9k18Q4EqyDeSY31Ch2qoCLi2GsWQGiEZjmCTtHhUmG2nWuFQh9byGe87",
  "key1": "5U7R9GVUYXEY9f8FbuWZt6tZX8yXUqvQQz4TP1e3QY76CLhr1f1Ye2WaMZueEqSjFJGh5yLWcMQeMC6DzeTVEcFL",
  "key2": "5oG46Y6rmGeM2Ev7kDai4bPwbNbBPSJmFRUjJnHZaezRXSoNeK9zqWiSPpVSu4eXBGD8dTYxgHWHPsprJPmDtgE5",
  "key3": "4ky4XnnZunF8Rf4rgE4AKrs3FuiVCUeczXLbdxYyiB7zDJLxbhKUS6F2777rWDytnE32k56nvvM5RPeTszRcLJet",
  "key4": "5SCXZKWCFTPSRw6EMuT6XTnCBdLW6FFEQmAD6SNPjbgRnnSmSEuiiQ5ov2x5m3qBTNYJixZ2xfJ2AVz8QoFquMWF",
  "key5": "5MUMCQedZ1h5GpsEeLdtXHx4MtAGpQn9s2W68k3nYMTn5PkDbBVpEdExxs19bAbvayANSTxhExgwvYrXt3pS4bHr",
  "key6": "45CKNkXNsE46yGGJz7x5wCd5xaZJtxXY5gru6hApMJBosC7fxCBhFkX8YB3fdBxoQ8AxNNfqawR2oUVDezVMtBH2",
  "key7": "3dvVgkYwMKohiEPRvXpNDbLxsWgQo8d7utMKZ9ih1kBbPnpXjBSsWXSBmBPyw1eXReTB8dcWRtsm7W2Q4xHvegw8",
  "key8": "4J6X4oDwvEPf3pBSVJaozhU43whT8E3iP1EbCtpuAuJDLzryk9oGHrb52Q6cLS2ZZFmZdcptpZ1pPv7pn2dggUiX",
  "key9": "3TvjawSn79iiLn69xMdcEsrSgFCt2nxnbXvewwq3rqsa31iNkSAX8SkWaPe8kJ5gXBWWZwZsbTjHR7q9DEovZjSG",
  "key10": "2hHrSZhPHPYoeq6hvg1oCxAJvH1yYaLeNLY4jYGHfEFEmSWrScvfBWtRWG4j4redyCuZmdJKhbcvbJtwhKGfriRn",
  "key11": "JMkyB5JpgmiuAjcTJWgBd71Jb9ZbYUgLHN7KVHHWFwH1DDCwV2LbByarSRixYSLmDZpkrY5YBbWtXgVetNfWjQN",
  "key12": "26aFKCjoGY3pDgtj3wKx6dgPAUHRQFaRRrdSB8i5okaRogbYrnrNYG2AYWXy8jXwXoCeo5h9ffNxjFbznYwvfVK2",
  "key13": "219vKZvS4Lbj3GGXm2ghCxK534R9GajSwKPjYXHiG43u9Hd8r4ou9XerNDjga7bPVR2VESRecVBVPTbmgMuoiyRp",
  "key14": "9V6JqenKdMZZPFWuYkgaJk5cP9LxcYxA1RMbWdrTPwC7K8cHdFNyVSCLyEYAgB7TccbsWCDGMsjZWjv5X4iMC5R",
  "key15": "4fy3nUWfXvW5t49FyUD552cG8wtYGeKASD3v88gsXoEpRLgAhUYDLmeRrfkvVtjg4GwymQmK9WBBK47HZr6cswpi",
  "key16": "4KqCzRZeFf62xuYC4hiV14GySKq8aFJ6fukhJyU6Vyjhcef9cbnqT8wQPJp9E77YHXR2ZZGTEcdMQpvmRTUvtNHD",
  "key17": "3skEoPU6nXSQxXpxeeGvkEKKuH4YHHnrfWk99BiSh37bmeupq8txvoCUgfkLHk7dba4PTUBKwQ57S79Q3VDunX4H",
  "key18": "57wEZM9h7dWGBbMYj6GaVHKntjhL9mPYafhzuFcGpRmiU7pnxpUbkpEL5W4u5GmBsvfGfV7q46VhoPeQN5pxwQdo",
  "key19": "2BKhZP24yByWpCsL5v3fjPfwuYWSQQyDtDoJTP9dd1Au36KKECECcCB4Gef7CwkRMkxKMyQaKJysEkMDQCPXo8Y5",
  "key20": "4ibnKJ87b8JkyAKec9VftrZS5gtHMaDZtH8ERLEHmaoXwuXDeUS7LczRE4Ek1m5XLPiDPcR26yrLKYzd4jBDcWqV",
  "key21": "2QmWzwMNDvUrhv1P9Wa9rMymkdvsq5kfjD5KHWL22KKPPmjDRjHS6mdytFXSvEz7rdo9VEZLnk2rNKDPL5cb1HAq",
  "key22": "UtstRwFTdhi7b2TTpvDQohhds1hUpuQN4NxFy36bBqVfPG1nLM6MTxbecFW8xJH7wLepoyzefPTPRWr1avHKmZh",
  "key23": "42fF4HkJicmCfkQHVy58gmgAk2ty7PjvLf9C2DeYLAqfFeewn4aq6CZzT12XGdgmJ98eMRjJwMMetztSaqU5ur3P",
  "key24": "5qQXvnDmMATKN4YpQQPcPSejTBeMftYMWAv7DezHYrsaFK9LCMhzAn1jcDFenXAA1mbxmazwQdQchfcrjgtrcgdJ",
  "key25": "yMou4Pp956thpFLWPBaH9YpmVA1xa9UC4zHxHr6Ntu5bKZCmauCTgdxUEeSXTFaKpnyPvqnuupsWxuGLnmZajeV",
  "key26": "Zb5iRrg8LtBbQbaETgUJDCiVjV6n2Siys3cApxWLDYKGmPVwHg9Y3K1rMSAGwC1sQEFRSoGBMVjbhx5XK3w3S8B",
  "key27": "3gwYiiD9cNPPA5zHjhPSvzgUH5CPdbY1b4FEaFChBNpD22hVx4wu7dmLwVqSEryp3rsxjLnY8uUUfdjGkvyKkrZ1",
  "key28": "36s5hkBbPuThCKoivWDnKdbw2DYKFWCR5EPTgS6PZibmUQJWN8N6x1ZV7SnEXaWcMhighBeiGAnbs6bFtPghjsHm",
  "key29": "3B9VZroxVYR6Gi9uHpsRzaBVa9y1ikKTpPwp5MPnaxxr5ztutg1cdJi45C1cubt9An6vUQrZkToq1oxQZYtskz6F",
  "key30": "2uCdeRdxdqmHyGzLqqxr7B6NeDEVYTg9XFUaYu26CnZoWsV9JDiwtWqpVVZDVG1tb9c83onAGktsPdibAkSAgEUY",
  "key31": "dne5Nu7L4U4TZBMpR2DKjy1ErfKLVhjqDM3DkxWzPrvXHDDvvCdv6tcZFk8eYnuEj6z94GQYetLRW9kCB1SeLxV",
  "key32": "3gzUD4wBjPbN3vBiTSvtfLTR5Ej1z48RZ8Dq5vnaLsaBm3qsWtvYrK1AqCdgvhjCExfch32q8ofB7AC26NNZKXSF",
  "key33": "53DSqA1DM8MyL2B4WF6myHyYfT5b61zrtnDdMq4s9pkkRbJcsfzVZDuMvta4UvqU8CKfbnPMGVLPYb9jdcNuCVzr",
  "key34": "321oURDa1Zp2HbtX8w8a1kzR42vzseL7Dzi3G5X5PmyqY5RnhC7DyfzEAHHLNtVt3TbRErDuXxJfBBy8UpARdxU9",
  "key35": "3ian1uzKWYNUfxTe83jEe9AZHNJCfarBX2HdpqM21Z5pdYp1oatenm4Sjxx66SbnwwG2sqnMbeYKsLfDAvsYPuud",
  "key36": "32NoD16sjZWRPRySDDJCvLBSbzeRCyubKuXEERKxp8NTL9k3J42BY5V1LFhZ119D23nPK1unPvC18HfXJswNvnuR",
  "key37": "4mYPCevxqTraHeSNr4oifW7c9Ub9nRx8hjGWi3NgHqMxyoiJrvNqQrc1Jh8CenxWcfr81h82mTiU9aTNe6mKNmTb",
  "key38": "3jQdCSFgR1TYm7yrTm1WyGxrfGNiBxAeKEPy8mSvDq84Xz5ysWgZUda8HkgkRELMsPDpAqSv73Zd2cd35Am2d431",
  "key39": "57wuXnJPLasmTXrBTD2n2cqddzfDLPUWapQkz8CitKZvJbNpx6mXQbNbLxdMb5nLyf5VmykcVgxY72e1H2JwxTqV",
  "key40": "4AFQPZDdN9jAJqDMhqmjcXEtmhWHa5T8PeNeuQ33NPeRSFVPTU8sgos4Jzvw2gaw5uMV8XGoZNc15LSjg4tDos37",
  "key41": "5843p17jvYrjqJMbjvVWpxbnyzQMJPemM26EDEqT57Rv7hres7TeNNft8hGyEKK4Ee5RTA8kQxd7f9c4AcCk9Sig",
  "key42": "46dp1pkJKRByirTSLxosGpWMhnG4Lqa5ToCsbMNprh2DCEWNHbMLtsmzvj5W1UCVoAnRYJoz2Z36d1mEnBrwm4HD",
  "key43": "25deEpe4TU9P5BuQGe42vhfb3cv6bou8G3CEQ56pzTnVLVNSBLR8WKrm47SkhzuXT1Z4yPreB8KMXGQnWYvbRJRe"
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
