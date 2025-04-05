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
    "3KRHcLokJexycpWLjEUSacubqiUFaP3SiyLBAQHfT6wYyMv9HW4rrVHbhEUxAHECqSMfUYud2piKKVzppf1AH6w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WEnCkPJ6eakBtfyK3Je1f4ekhy9xkwQs6ZmK6TvNrtWyvb4AeqYeaM1UA4QtzWBU5RH8fpphGCJkgFBZSkv7tLV",
  "key1": "51Ba3vmVaJDBdeWWGrJNmFJdPGfxxiAssYfCnGu9Ku7NKEisRNBb38omJebu6iZm2hAZ1JGXQ5bWWgoeAuQmNFxD",
  "key2": "5xyLVtXxGLYo9A1UHj9UzYQRzjHhvyJma3eoXvc34jwAb9q9dje4hcbTQeDxMHfchb5bUsskxhvEduKD8NudRQDr",
  "key3": "2sBarsczb26pWKFFA4ZHMPw5u6do4XR2YUNvfWpSKRLGBv5RJowASvhsEbGGyWonHXvWf3GZePGUw64pHcogcErx",
  "key4": "2qQ2H2e5PHSTBVL2gAxpuhuE45tZ8hon62c6Xp8CGH3a6YiKajPqH8ZbGcoEuB32dy1MkC6eHDP5tgTb2qSqV3Ef",
  "key5": "615iWmXZ5WNuFZEe4Yn4TgwEUKD1apEg2c4ScSoatBcvozrKjv8uAv5jY8Ba3o1D1EMKEfuN56on9rLcxFpdb1AU",
  "key6": "2gHSXVWJWw4vo1JNCr4tb6DMfoFSQMAP9aPhJ2TgAMfFAFcEZQKs9GtPqWpBvDt9tqr7KpAyUTDWrLdUeACghfRU",
  "key7": "TBqvYeFv48PrHJD4vZeWWSGFaLhcKJSCgBtoNWRP4i4ZD9c7cTpw7z51HnXp8XPUswhKPkCuf11vjMKG39sjUF5",
  "key8": "aKvWSXTwHFk1gHZ7Nfn7Vkv3jEpunEmM4GB6Q6HVxDGcHz7M2CD5Wv8AxE46w52UVwXTsBmBGn2vcpvB1eMUdaX",
  "key9": "26H9CSbHnoc1ahJCm7fkjWo8t8vAyLN22LehipbW5tshDoEuN6ak2NQfEmSkqgWVTdcsrUddjkmaT6MkizXAau54",
  "key10": "GPdUMaVXGBsVUL6NYMphy8uwi1RDVxc3bWbij3n3V5ToqxYu9cRWHHLQzkZ597VRSqPi5xtCXNL9jHy7WyQh6E5",
  "key11": "2FRFVFtozBAhA279Bmb366AWpyVMwgDdSCtu6fk95kZR5k8v5ph8h2KnjSvVg9uAS6qWhSaJYcbmnDMXtgJdSt7S",
  "key12": "23tKDK1r8Zc4RAUqbL7NjE58yFTsjGSRYWKMa6UCFLKcDUGCJTYosDkwYuivABM4swbkDFF1P9V2WhPvroBDZza1",
  "key13": "5xD2HwrKas1H7gx91WZcZKy6NTxByqmrc9TpZHoTENdZ55GcX2wDE9cZC3BhubCQmnkhfekXxNTzJnsJWmba5RqU",
  "key14": "2oHuuS4M9vDmgvKwtVn84QQLbL2eTFPEQFaNR76RdNBSXQe9P92q3H2SgB3q5zSTdLNx7pjmZEyFQc6DHHp6g9mB",
  "key15": "32KpRrjQSUpLn1kNGLQHdeCXMiFeR7e8eka7hDVk5FEc43eJf6ArSok9cxMq4N7qf8LPwZj3koDEoxKVVLscyHzu",
  "key16": "2JhEDG4ke2wepnJKZNFRRcRtijsPrJsG1NN4ZQ427Kiu46A2RmmM8wYoQut8fWzW6qU1L6XdYNbzZtQD43UfwJDQ",
  "key17": "3vL4mJEXDagoCU9QmkW8jXPfB7wnEX2zQcV3Kdf6bCzHwktv16CuJ3wQNAqg6JNgpTW1FpScGKVYWUJnrDjjqnr1",
  "key18": "5hdNZ5AUe2FhDRzdJASKZfCpxu4q7Rry5cmZdtmgQ1TV6Yb3uie3zEqZsGmK1Wqdqs4aQao13WqPswbj3DmhiSwB",
  "key19": "2KThqkeJaDBM7YsGLZJ7vum58YbNsKjweHAgcasxEp9Pxpqwx4Hg6rfczuEio34JnzroAmqe6ziAiNi9CtR8Vqoi",
  "key20": "5MPiicF1yXhKvjHrHGCXEXAda8n2uCfqTwn4yn9aXdkEqsr9QoCXA9hfWLbivDGuYhTxL1VpwsFfbccYpVgFiPCx",
  "key21": "3vkZy1HXhm5EARCiQ3KKkDRygHACiffpUhnkPAHMTK9hXThAoS7uKAdsQbr6vmA5Pkr9Ui2Ud3u8TXEWwAAfU8nq",
  "key22": "ZwyoCVgzUdnbgaZ1jrRufto62H6DhdWbHu9LfSekUhD7GRpMPUcZVbFer7W98mFen69g6BDP18bYhuk3gBtUfXf",
  "key23": "5yGMC5rCDGKFeHYc2pdYiAiBu8spgowTeJijmr7cmvkbbARkvnBQ7sCHKEmDa7aXvcdvoX1czc1irKSPUkPmhCEc",
  "key24": "5tLnUCJHBjw1HsX8Z97eJe1YD864SZpMuL2E3yHTWSo2SkdCA1FwxFvDwLdtyWzPvJAYNRMqiKrmGJGHkJAVSFe1",
  "key25": "3RtamP9XN4hjagJRE8RoJYkjtA9PJPhNWc1cTPyMSXFfP9Pix4tsdKFkqaZiVLVetup57wZMt5MX47Avr5EcKnW7",
  "key26": "3LuH1t4ppfgr8q7gRVD8dwC41ddaGajxyPASfW2L2Ja56V5eLVcSXacV34v871ED3XQmv21GqcbSijN8g3CTFZxT",
  "key27": "29FpLwSSP64fq5tqsUPxaFtZxyESsEt2KwQUcRKheP7WN6WUBcFAF39nQFYERfcHCxRaaj91AuNps17tyeiyQNfA",
  "key28": "2Zvksvx9mSLGi557o5Fj4fAvWcpVAstQVRsuYn1mJeikDzt3y6EYPADD4hiX8LgSFyjhFetDcGci7MggtsQ3bQz2",
  "key29": "36oumidVxKU6dCPW4WnwpZm8mRfyTiELbBwb3n1FoJk6q8AMQAkVoYwc3zSGZXAkspNeguxc65cysX1cU6STK4sd",
  "key30": "4KnsiJVYbqMjHiLhqLC5CasZAs5KNZ6jHdWLL2PYzEAGJLY5fVTaZNfrGcvpYbe7nZnVEu1Bud86fqVJZbH5Gq7o",
  "key31": "5J9etooiSq3Ukgvh5UwSyrtftugzw98iqdH4ExJuXtCXWiS9afwi4FVkkj3UyAqX7ESaDrgJw8oZqovNDwBDbdoa",
  "key32": "43yRvVKcM9uePBNWUqRB3z8UabgkDTmDRmp3dAQFTeHUnRik99n85ouxLUFKudx8Fe3z1W8WjcBx3qSGRXUSWwJu",
  "key33": "2tYaX2Gk112iJfpZ24adxTjcWyqkctFgRxaFJM1iad2izx2L54QTULa3FrY8xLPBiHDZS5eRnKddeikVkTCisEHe",
  "key34": "4mjs7kopVtWzp7dxxfX9kJvhT6Mx7dnxyiPnXVTzv4FExLTkgtQjD4AEbkfRhJeN8sw6mAP14zGPZ23p3cENgRvr",
  "key35": "2SFGPTitKpyJy1xAu24YT4nW9mVuB2MCWUxULSmkkRjjLbW36bsV3G8GuPyRYKeb8QopCkkQZpx22rYyVp9ZBF4m",
  "key36": "QTQhLSWaXPmmfnaaTSaqrAGDPqBgzvqEQV8G3pMv4JgKeccrqw885SpEq7DWtqJy6LiiDB7uGA2CzMe4b3eH31Q"
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
