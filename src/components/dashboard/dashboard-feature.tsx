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
    "4gTQk9UcHY7seZtQVDjw3DSXYFadzmp9VK46ZbaUbPD3kzZtnYEs5gbuFGJkffuoiJGd2cKLjd6TkVMVP8iu4d4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCbKVFeXMx6onsGrTj3odg3bkLSDbSrg2ovYXjE1GUFmX2rrJLkPkg7gvtsK7DAN17bigvq89tS6yFxVuqiscZN",
  "key1": "2ZnAyMdfDaQ66YAkTHcc3kYCSxMknz4bUbG3R3gCJzqxWQu8RqmTmSY8WFAiq5hWaqGp62GdKhpK2yGYv6WXM3tz",
  "key2": "5UHtzdBySWmsn7RwSMYUM6K15pZVHX2hFaNPbGmACxJSxcfS6T9tdo3VuosUSMkmBzMnMiNfZgLXyaSux7w8r6pn",
  "key3": "3K4iKWQKVJ5ZoWpYy4A8CaL9uQrEwJtvVWyPycj4VZyAesyia5j4FgMYZpeDzYJong4zuhV158kq4B4oU4TLtCGa",
  "key4": "65XtuzVjLP9GNyAThtbSnwTcZEtPx84NtukNpByTtxWBVj2UjMbE2er6tuQw3MS3CfTNGRjv9MQnHkzvEVHc8odC",
  "key5": "2SbzabTgZDigL3uapo4aZRqUi9XDMBJMT3u9U3NcK1Bmn4xx1iFFenVJarJn9THJwdz1CtqK5dp7QBDiEpCVoNTr",
  "key6": "5QWBA77VMAQzpvFpNHWF36bXZ8JKxbpANXHwmZtUwqTDcXvVSMScbuhSoFYR7KVt2TNYUdRPsc725sfd1qScULUQ",
  "key7": "2VmdLMVe9KVJHR4xBnB6Qyo8Vb8brUegow53QvJkVw4cm2DmrCSAEUx8Kperp49YXyDsY9r58cESnTNkVFdqji4d",
  "key8": "4c3b5Bcoxgy7x8MMreghx8LnT8AjiDJAzurKNcJ6FffVSEqsQCU1W1rcxeBZjcEdBGiTyiVhT1hqMb2WtfTQYJEQ",
  "key9": "5sHYBJpHvKLvbHtgJ2QngWdeXMoNVnkms89pszY6JpTvbNgmbv4q7UnU22CPUBTDDejaBum6ARh39oP6PHRWGqXQ",
  "key10": "2haTn6aMcB8pHxkVPFhsHNe5XpZQEkPkMCLoNCXESPksaqR6tWCjGU4b2NC4TWVyrw91983bx8h5sGXroaLaEQ21",
  "key11": "UWxvEzDa7vCfjBNpm7oYfgEs4TGiennX6UjMkn93B2bUz6TCoditAAK75bDSvbiuhUvDUQxepUj3Cjfojc2Gw8x",
  "key12": "24vAE3cLkcphfjU357y3d9tjSRfwWf9Lhmh68ZyRjsF1ocfKEhPJuW2XG2YUBLWnsWJdXDXiLpWR5F33o2wN8Du3",
  "key13": "5Hc3LRHdUH9NTHkPYkvUaR8NQKz69gRU4sFvdua67rY61mJDnQEWayHWWfn6MD5Txpu4QZf6cwkHoCmY8S2t88bA",
  "key14": "5w3WkuR8ZzpeT6x6bryAACXKEZmA1FxaNBrL1VbvKY3mNCpq2ENY5oz4kMJ7zQNCHSv8vqEydBrt5gD4kUodwNQE",
  "key15": "2CXYrBfajAV6egRNubKS4xqhcgADT7m97YqHAsifyZNYuSkH4osfTSpcKXtPj7sTkC4FKAa5Ah8FTEQgt69hSdCj",
  "key16": "4MgvkiVSvwtUYKewuEbBvcQEvXNFkXaxnr3bjn8iUYYSnJitDKzwgPAYkTbbVuNkRCbuqyYvL14juXSHe73c3A2Q",
  "key17": "2dpbbdkscodjVvT4ZWARJcBmuRMWxuAazecfrsV7kXTqdPGA9yTguAPAEJFYN9hWtTsPQavZbirQ4NAAbwB4N6ff",
  "key18": "5Ns2Gck5SPamR7gZBhtV2fDsZvffTZSXGJrda2PTiDJWGPu2dsaXb7kyp8VuuFSL1nWHw2unGJCFf2zu6t79cbfG",
  "key19": "5mc6pbrxn3epcB6WvxP4BpKS8MfYJ66138qyZbYPqypzLtQAfkBytkgiao1gSkAMJdJwVmP1a667EvFwoHw1UYKz",
  "key20": "gkgDEzFkHw6iE3PYxk47e6pxV3wq6Y6CHvhcoAmFTcRyeDP2zx4XAhAtfSShUm7jX1tJupJfc5FUd9DcTrw6QjA",
  "key21": "4obHAH8SgkLU87BGpi3tAN8tnFZqGBBi88pPTFk46zPHhZMeHj3AVUzDPzzKwNESn68MU16gCGGaivjBJrbzPDFR",
  "key22": "Cm9AeLmHnhMpyMyVL2QSGAPu4SwTXX8ZutbePkxJw7uJM9vFduTZP47uKAozAewRYaZPH3GDPbtCvupPX8qAZ9u",
  "key23": "3krPjxN7GmWKDn8A1goTHidaKrMydMFUV6fuC29FeNFKokpxhtRmnoPu4tKj3RUEbxcQeZVYevFYBd2o5iwfUt1S",
  "key24": "2kmTGskCYKLbM9jT9hwEK3A2jXFJRE3DQDvgrGxB75Fs3hcpujrVv3nFpKsrkrnWGDdfag6MiCe9zi4wHvLxxsSa",
  "key25": "muXkichg3JMeg5xfyh9TA92EEbY5HERRVDKyj2VC9UWPYD8b7hhxnjQvGsCLxZB1oJCW5WH8Ng64Crm9goKVjrg",
  "key26": "2dP7nxC3cmGYBcEMZeE2F7yw4WoXCP871zdHys3kBeVb7muttk5oG2wvV7NhZy8YTGkez5rRZHCnXtnuN1DPa6fm",
  "key27": "4QsAQPkFFurh1FBp4VDFjcJqGrm7aCzaQu7zLS6k92Vg7s3mipCUp28TkpzX4Y84ztHbMHfscqy17fdJQSHPNt7",
  "key28": "31qciz52Bi4TNjeRhbTpi4JP71Ffto1iwqLyitKoX94GbW3LEgKuz6qGG1ruJfwyqYk4ney1ZyWrVw4XBE9qGSN6",
  "key29": "456xrs9WCKiJMC6w6rguyZ9A2FrzxyNUG7zKXNNGb1ojXYSyhoURverzcfzycCyMADxhk8oi81PrDFjt7XVcrF5L",
  "key30": "5CrJgBGtSeVEyExPadioD2FFmwQU2r4EagP6an41ZjpnePzTcMSMCEAPvtqaKweBHkTVVNowWVGjTQtkdxL6ceqq",
  "key31": "2ugCJaqQCu1FQdzFM6WEBvMymg2xDaioQKroW9CYsnS5yMbCebzyc1DVWq6Mo1VNUrGUAdceFhrQJWU8AtZabEXY",
  "key32": "3eZWnaKw9Hue2aomhPFTC6pNVMw3ncu59HWXGR2c1DL4e81XbJK542axNCMwdynx4tKJpBqaCxuSyo4584F2DdEE",
  "key33": "5v1TWDpHZgKMtaVYJctC4WpbuP4N5qtivVtCXfBFddhnfYUkw5iUmxJrLBt6YrexPSXSJ4mwPa34jd86GZ12WK5i",
  "key34": "3JXiAfnnPt9e2y6z5EAYzYWQ6YHtz8qwNjWiEC1homvmRtSPhyiPAfdjusMJKpoP8tNKvjVPYUEDg5DQyQmMmCUJ",
  "key35": "dGnet7Aos92jCZSQUioYLLfWoGa3ikEKea37VcRUsbLRMwcgP3jzzJ5f9U6eaGTp2GJ61qam2ba73UQfvM4Nfd3",
  "key36": "2P3r4Dk7Y79FwFwZURAwpeEnynH3h4Gjo4NyuQUeZEvw4rV41AB4E7KQs6XkVQVqc5kNqGZT9ENyzMwKnZ6BK3tu",
  "key37": "5gDH6NKKPmyPPtXGnYNvhAvE3PqdPBUQANhXGxDgoRC8uwjCak9sFDijcGQL1s6h7Y6gbmcqnemu1o1XCXvwDyyC",
  "key38": "4AABcy4X6prcTDVCg6uFxmzAiiVTeyjFrE73CqBf7bcE3ZnCDW1y2NnvLFUCX91cSYKHXFprxFqeTkYFD6tDV6KS"
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
