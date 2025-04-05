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
    "yev3x56772JetRQY9xWfdZWwgWutm8obw2gZi6zx4UbSZshzzLNkUNR4fxDEt16E3chhkptdiXVgMZrw3vGyKzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645HPSdZw81zL9kaqG4WUod5QtjhRMRZkQsdxyW5M1xGnsKeff3ZCsFUiC9KwyAQSScjH1fzd7B1PgzgCEqkzn6L",
  "key1": "nSC9KkrgfpEgPeMyVkja5djShDPuK5kp5AYXAQdVuFc2kD71YzR1FtuQBWeewWCCWb8YaZ4BADZchpCL8oDMrGh",
  "key2": "211sSjqn3h2X7wJrQk4VVXZbewSsPW5cfAQtU2wXw4mCc38KzNZsJVnvGB34jaUhPKwM2zEG7i9mh8ypfy386L5v",
  "key3": "4nvLr43C5ugsUWs8pacUx2bEfkPnGaTiQB9apFh5PNesjT7ReBP8sFNb6Q291zby4mZQTHNfnnAfAEXyRtVu8VjP",
  "key4": "39wbNL9K8Qk6vFdYc4AmAqzFC2KZiyQNPGAaTJxToccQ4wJNCEMmJR19fypJxwecEsfEnTXX7gyMB5P62DkrdBp2",
  "key5": "4DGjw1eU2Gux9pM9N4yXwT2bUXjC27nPDfRk9o3dD5fu1E5ufpXw6Dm98v3skrw9jpdixdCtLFCHCrZo7pVvXySL",
  "key6": "dBHdUbGJ4sQZhLhBH8MfVEow2SvEJzAhEjF3fqVXGJC1XRAb7K1tcV4XquLyQxQ2WrbuB64uZFjHsNG4FaeLJaX",
  "key7": "3YFBYrCGVHjkUrEvSb651aTvEAh2GUV6iu5m8eD32bGmTaGznNZgqAz9Pn18U8EkEYcXiA3w6sXxLfvjfSMzsDUF",
  "key8": "5Qa3GSivWnYYg1k9Apdj1ahqHA1mBtPA2DQzoafwQrY6xZ7r3VmAj9Zd5RVWjXvbgpq2KR8Q59M8CR6FrUr7LVi9",
  "key9": "4dVNWsnnTNzQ1yNhSFCcUCHBPWeUnbjVLzVBWPyDTTBbeMUbEL8DkyCrbZQ5j7Z7STuA3JUn5BKpZ4k82Ttztkyt",
  "key10": "2En6mg5RqbB1UoYRqFqYJ4nrf6R9eKbDfUmB5etVsC3G9UkYpMCpyzGA2JTrPa2LSkdNmzhr1HWxiDLS3NtLP9jt",
  "key11": "5W1hhuVLjpFipiGc7YYQSnDFQWj2YhVpjmcK3RVNunwx49z4dskHVGrRWvuqJUjnfjFcwh9RLp2XioXsdu3pxad2",
  "key12": "55D5vTVk9aBxb4raQpWLDPsGpwCKzv5L1yo8pefcw4D82KgggaBQsGmmL1bUTF8dUSscGcCRTLJAvksbMx85DVfz",
  "key13": "2RiPPuDYEfFAEz2ihAUVa33ksHnqrFcZVuTMyPPZTnQHzz9RJ1Nka3DQ1DKBWUfg2BabN8UqYoEsczN1xbJTJcoR",
  "key14": "3c8ps2sL1fp4ZdN181cHfDy66RMM1ni6Dpurg6XRQEiHYe9mJhKysggbFsuGsm4exTY2gyG4dZfERYqsw2F7NFy8",
  "key15": "3JXcy7n6p5REroMXUArH3KLyyAMS7k5YFDYaCu3Shho4XfCCpUv7Jo6JsqB5YktwUNSGUvrGadqrUTwLH8tmy3v",
  "key16": "3p6TNVCMyhP5udspQAzinZY66v9BKfWqLxCJQzcXVkFQwVXdxgRguTBaZQ8qcxz9p49MpDW9YFPPm77jaThDP3uG",
  "key17": "5QfTmW18LsPLnjcRNXp2zo5cDQkTc5CdgUAh88w8zpztTuXrWTCakY3a7MB5YRKcUosTrwwhRQ7xqt888cSbxqGd",
  "key18": "3SRprud8ZNcA765LubP2W5ZNGp4psMgRqVQt4EdenjqZ5sicjkEvb4Zqi9ofFeNWw39Ep5X5kcLj5jB3v46395yT",
  "key19": "2b2T4jbPvtiTYdgMWegkhxUDW7pCnRwmXGtJAC75kXZFvema9xx2qcBc85svagw7mBmNQzKUv87w7MJBqSL1HDWu",
  "key20": "5JrzAUDtVWWVyDBkaWC2G9VUbLTGKLdEwqpub8htNc84MxbfZi3RKg9SoGT7Z7ecgLMr9LQYzPbfuMFbAC5wdi9u",
  "key21": "f95hJ86t7WVjn11ZaH8DURNCd1CagpVLhD1s2j6V2hkn4DCgjZZi4PjFrpych28AgMjaAQq2sHBKZrqu7HpnzVH",
  "key22": "45mKEhTDru6gRavotcWnBBNJSXDsNYSBzTBVrMKkH1YKUDa9sKZ8P2iHF8St3ujauQTbgwmEFkFhFqK7b4yNodZy",
  "key23": "K9Tkdq6qSm5S6XQ9t4tQyu4Gfdi3pTWy32BVfLJnUs1fwKG3u8Q3mM6sCiHa2xDRPq9UvTarr3qyNafsvQx1R8E",
  "key24": "5VVtn68tyF2aw9zv5gfiV2BMVx1UQmQoebKPQfrMKW3RqnVC7NpUT3eer53DLbM6ZFRE2yVwht4hMwC7iRGSDsS2",
  "key25": "2R1Emb3wiUKHMuJSiDNtEwf2Mz8SxBEQW7jk1VDhjecA2KwQxmyTPwm1W51e8VzPM9ndhC5bj7PZF3obaKPoHzjs",
  "key26": "puePKN8GdN5hycGjZC94FqNrimb1BmGptay7jUDB6viVsLoZbEGtTCVUJTWRTEXFK4Xux3N8LuE7paZV44Pb29k",
  "key27": "5btSuVtT6NfZU4itoXCp34aiWCsfaqbnAVMkmQZATbD1AgQbskaWCmWAazQBusw4Z2z9ANnZsT6BgxY3GB4VS8vH",
  "key28": "2YLwqeeqM6BgwbEg3VgGrQFN62TmH4yZSot6jC3DDzE1mxmPMkDpQGxGsvibwBJhuKggm8ypPg5JzujBXRywC5yq",
  "key29": "3xVpSHV64XfXUgyqiZcgg8P72PUk5mRWG5noxyYGJmrPmvJsYGnaRUGzAGhVK7ZegXJs75vbi9qeNeVuLSq3sPim",
  "key30": "3ik6BfYed1vCZtML3oJKVnxNCvsRVqwNEBNajwfg1nDhpPxxkAf8QAFwbNHTnkgmVk1vC658wyxk4y2qXYRWqADP",
  "key31": "5rj2439BPMgRVhWp5m8iPArNUg6b2VCgu96Eof2V7pvXb7jtP2jvE1S9ViqXbVrwZWT3qWjoJWptNnsPRctGm5V6",
  "key32": "4m7NVyH7cx99uavmuyNxtb6pY6mAo2hhsoW94fqcDEcpEm8Nyd1gr5eMeEYy7XDVB3buTMJpVBydRexEyVeBhYLt",
  "key33": "5BCmUBC6DEShK858StjZHwd1HKqA5KEGDdgyD6aehduamBQr2wT2Aky7LBfVgpQyzTnjehRV6c4DCxZuK5iX4xAg",
  "key34": "yrCFQCEpWY6y6stjxA9f1rFAaCD5Ko2L8JRZ6w1ALC9RdTLxPg6wDNxom6cPi7Nu1NzSj5JERHqdBKymm7JUX4e",
  "key35": "2SdUexPu7Q8Lojp7q2uDqaXnbrdr8btTeg7PBMZdoiZgqz4TnKuQ6rnuCoonPfEBhAsP8MLJx1RtJExCzSA27JGu",
  "key36": "51wpExnwzFMAp98YmoP7F4thgFmaW2TGy4Ef9ytYh788tR5jn8k1iipnDKQJ3DrmEmVNbQQHKwBFgvydLg7aLzTJ",
  "key37": "5QPXVDBvEFCWiWSaXcEcbdbPHiDC4P371pRfu81FdRDd7v7pLooRHwBqceRPVwKRCrqD2d4J4eof8NDXfhTBkGwC",
  "key38": "4NviGX2Jm9Wqi6RTKaWMzzqvXH11R9SnT5tLTt6Bsq3VrFaDThG43tcb9Dg2Um2AARSquovxCFiiE4JGB5vZbpu1",
  "key39": "3NbQhLWh9jB7MPTHSuEi4MAmroegpY3JoSrnfHjBMDQDiQwSrSA21JaKJ1d8QhFJ3M2Stph5Qqnsy8mP7XwVKPcH",
  "key40": "WasBrHk3JzaKGAm9PshuBLeao97S2psaW792pMeK8oWLMUkygQMXqByxHy86a8bLY2QFDcX4krgQESsrwWG2JdT",
  "key41": "Z1j1oNaXVN8YbCiuef23ZzoEmnwYiwmwk6Sc1m6UL4yUhiwM2y8Xm126WM2hEW69uGUvUpQYWfHmQCn49vAHwHg",
  "key42": "4FTCN2C7nyEFkYCUvbKRf5RLAUcA4s6F9X27T7wHbFEv6bJpCGDoWdKEknAYThKHyxAQhG1aU66qzP9KxqPu21Ze",
  "key43": "3CAhCamcxgG5D2TSMYrbKcCxoPRZvv5rfVxaxZ27oDZcYwC2uRE1dtVUvLhwsKS7ke3egC2psjTLgrdeJ5R8k3jo",
  "key44": "Rh65ppYt4ZPtrEeNoiwnBka3mLaDuBXwJDubTirQQXKeqghsqhDE5iKp9UvcnWVbhFYYh8RLWTsc6n9am39ars8",
  "key45": "2KYQA4fgfADUPjZGEBUY4Q49RU3ox9JuRGDNLi4STsxuVJEUa4TAJwMp8oa8CnmPrgLtxEZmhcTn7RK542fBssN4",
  "key46": "3yokS14agbjFjY3Lw6evziujVu47ADPEEfF6mmA35k8QbYgSeZEtEb57vGQN32Yfhr7d2mCttPXG8JHa4xpsJ6YN",
  "key47": "5HvLjCRPdQTEKPpCjw594d3k6B2AEaqv8EoqPwfGvNPjJuPwuCt7XjeXGaCCWC27Buid2DTZHBqazG7VqZtw1C2K"
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
