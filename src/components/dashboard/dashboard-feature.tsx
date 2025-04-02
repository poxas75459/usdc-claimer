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
    "5rugVQkCSUuwGFe6P4mUP4jMHnzyn7CFmMkmW8sHmHbnXPi6pKEoQRrJ3mtC9Xp6qeGE1DDExMvP9PPFCjqpBbcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KbdRdF2bn56iFxkPrsTxSmWHpp3kBJxj14Xq1Nac7uxybfWGDzftVMxQdKtNdroQcWBs47opuZ95uJoycY9LQcs",
  "key1": "62oPVrVr7kSASE744qMUNsVgncfgQrFsMMzDTsJmjabmvPrw1VxohUVDdTXc8Yzzz6JUba2YmYdTsdsA3ctXG4Yr",
  "key2": "4PZoRZDeWDdxfD7bvA7Boxo5SYSBfTRcU2BGwjuYR4v1AamsUeDmJFV8ANZLf5haPqZ3vHJZEyzdeK58KzWnuyDA",
  "key3": "22DX9tVAM2J3CnHQaxie7WafyQL79wJ4cgSxZ8XcKMg5fwAPC1YpGJf8uvbAgCfQc9uBzKkvHeM8fVWy7xvtriah",
  "key4": "2za45YS6Lk9cqFj8M6LiNaAckQEgjAeMh9XMLkrianKGvqx88Q3f5QJYERN1eAVceVWHV4J8vDDVZiuFrxnL9z3b",
  "key5": "67CXtZZDkHzAKUNWQsjPCQbpERmAtYE2R932Qvz45L6wYgKQAhmtrVkKaVphHN7SUBCwu14PG8DXH8g1wBPJwJeo",
  "key6": "2JeM8LvFQvxeL9WUCQx8Z8B6JHgdM97QbAgkgjT4hubWiFH1hqQWmMBaUeaCBbEbTURmVH1fdq4RM4VZHuHdBR2X",
  "key7": "3z7EMUEC5k5zCjEtNu5AUJnsigciGkxooaWJtUCmB1BmkhfHgWJR2GpJUY9SmCMAjZb34X89zKJcc3A5Gdppybca",
  "key8": "3Zk4ipMVgdBRuzmVCArNaKXWVpprh8kxGZhcoSV3u1JRLKqb8wwuYq2weq6yjZehF2QfWbZobkfvwTX2PNvEEQeF",
  "key9": "5Mc3jYVcXcjfMsKMpTRzwCsCES39ttTkXfWUA74z8GmziAYBiQe3pAyBQ7t6pWvFfunYKkr8nR7fArCpJdkUAFRx",
  "key10": "5V1LZoBPeZXa25zbnnZqot6mfavAdGWCGPc636fg45PLbfpvSjiDwabxymEMd2ZLWeAyeLWHidYWZnpXssDjC924",
  "key11": "3VTg7LNLpQmKCsttZDE3qHRodhnpHMJcJgVDsMTNys892huHVNCxBnvaJsYutmNeG4PS38GcisiLZKMiGeRsGsaz",
  "key12": "35JfAD9BGpVv9vbZDEz4c2Mz726WRtEiS1Qve89y2um3r6hEefWtMX4rxEkRw7o8Yr5vjeJeNo1GMSrVXWLyoD9N",
  "key13": "vcEMji3evtwCG76RhCRhwFXZwCQW9CzNqSkShM2nKN3RZZaLuGEdtWdtWAUfXvdt7ZETHqV8WeczsWVeeFnLazY",
  "key14": "2kM8R7JgB1TCxy6wFWedxDSWS3f9WE38MP9iNFApQEyeQkQhHMLsvHeGN7dZCWaH8RSqzeK4wqUchPGHH2ojDEAM",
  "key15": "2PDH1wgufugAhQYfRj5Ex8Vf3HBEuRC5DQp92YoUd22EjHwZF3RWtnQnxeZBBFsCNkBiCQcXBVWy81WQavpoyTZz",
  "key16": "4Z9VPg3AghoLKq8hktW8W1n9tLMkPpcof5fH3o2pD82z9Fb1VKE6vrGZXJYsCGuwf4vCJJYzL7Lu4k59euJTyvqz",
  "key17": "27v1WNZTAJZjU25KSTwu6D86mAetyjzdR5N3ZnuxkJTatwuLhcztgqvVfRyT4tmGHXue46X4AxocpQCtPHXSn39R",
  "key18": "4NGxQkZamrtTDb3Lky67K4ZByzXXyMNEAmcGGuxikR4SKD6pmeNFx6zZek1JLxRmfyNDwZjQnB2R5t7u9jy2VA5N",
  "key19": "3c5NidayurgJ4Rzz5aTu5NFnPt3BDFhPK6LbiCtDR3oAUmZE8rdWmYUhLPqbCvbuR2xgxw4fRHfRX7Bx9e7crQyN",
  "key20": "4yavJ6LPW4SsbHkFWrK27Nu6mBMybQcYyH5PufbjngANMHB9S2eKmReDPbeKNwmTV6imhUWTCh7uRK3RtN4s7ysW",
  "key21": "5hscE8wmabgCDjpR31WqLfLKDMQ8bduThaemDk1eX9ref7FTxeF9nPHkYF22k2iSbXrY1K71apPcKe4EHJg4yazN",
  "key22": "4b7QWUekYDqDQB5hcBkqrHnhuHKc6rEpBzXhdkC314uDgyti8CeAEogQUzxwGgYRio62mEJa9HRBRidJRKCaVRxU",
  "key23": "5KR7SJ9WXweExJySGnjWDuzxNKaGq5LMt7vWZJhvfChXc3f91u6NCyuh38YixanqPLEaoFQoKyXHak8Q6TSeBFtE",
  "key24": "3wjNqc1GeBTodXcfXhkio15uWpL9pEQMMQsqmiwc6oHFjHHtqrET5H29wcd1pvweVHFeZ89p8sdBjp5Mpeq2GZdW",
  "key25": "4DpffkuxTUp1D6dgRNGKeYPN8ZZRQR8cYDoxjDqSAA63GtbtxnvD2d3sHJZBiowoQgxpGxjd2RJCSbTFAf7XVogA",
  "key26": "4ogCAJ2iSf1LUF815preMChR6eTqvwdpkVAn5UZuPCsm9HFr6p8LR51BU13y9TvFrQWfaeQRoxgGYtmUncaizopZ",
  "key27": "3MXk1KgAEGzyWxg4jVaTwNdST2DQic3SvBBAvqViuuxBj76JVzmyrUxXx8QwJiurS3fQLvimtngfMzt8CK9x8vuU",
  "key28": "2BpKQq2ZCqB6Xtp5HzchCNq2DP4HcE28Yiw2WafzZySDj4ABidkSFjZ3f4AuB1E7DrWBV95Yv6r9LWPE9Ma7qSAk",
  "key29": "4GmHU7vQUS1VPvad1jiw8JcZWyvGWVdhMeFTrkfM5zuRshGU7GwSoeuM6ANcpTf2obVd9jcw4Jr7WvQvhsqNMaBw",
  "key30": "4M1kQZCHfWCMkp7Wtg9C9Fc7EyhnRBAfGkNBCtkFoSkkZbXA3PAakXCXdv2SFWbr6UzcWbSfWcSQrMmQJaDAxfws",
  "key31": "5iRVcmSDkX9TnqoUiN5AKyCVTCNdRE7Z3758W3ioHfvm5XkUK18KcSc8SGXjMmcsrJm22DRzFLYKPge2aD7mLRPC",
  "key32": "4Yiw6ajtBsSNV4qzJB3e9U2bjUcvrMRYtZU6KqJytRPPSxSUkrMmtX6VqjUgyDBKXbuLpSrdixrnKTYMnpmyn1Z5",
  "key33": "5DMyNeEfLNmK5ymPuvPRMeFFP8hVBXQiCQPNH4YbR8g3Y9do66b2uhwCjapTqY8yojkKwgMVr4rEsM8qjDRUFeHF",
  "key34": "3ohNH3Um4wUJQTFfD4TkeJi3LyDrmjfMoc7nFP7cmTo4Mx23E6cRiTsgDAEUeTptuijVss5Aa3gMKFQf8P9Ptzg1"
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
