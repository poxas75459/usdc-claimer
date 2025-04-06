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
    "3bdEpqg6KNuHVJNSi63Qy8sqoHXw2uDUeLsKXmaqQ2KecWEZVvYSpRcJ1CsnVqwxcGVmM5UxCZdMhPyGX8HWchsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRmFf3W5FrGAPrGcf1nR7vj1i3E3tWKFU4JwM3Gt6yUmVHY3VcYUVfabykzUJos2mQQ3qkSkiwCW6bmv2wYfLzc",
  "key1": "2M6P76cxJ12L9njK9V7fcowrKSxZdLuc7tEZFbbSXEgH1scNwPSc8RmpP8D3cZZxbMJzic1pecQbVLTXQJ6MUjwR",
  "key2": "Kk5HWb4QYqgUdAAvQgG3K1G7q2WnKqhJYUaVGJX44TXamqS8FVKtvuYHBMpFfymyhfm6tHFJjj2JiDK8AMFhEfJ",
  "key3": "2o7UV8CJgsQdYHfma9dFWKmYYmQNfBLFV13tucxxF8XXfNfAoLWRrEcxcrYxJSK15ToVP9E9Erwe95hsyN9jjPHw",
  "key4": "5uDda4PN2C7m5M13rTcsrBLeMUYnkDYTgU7XwYuXNog6DxzjBW32j8qoQqNaAZZk1Y6Vy69Una1PUAs6RPbF9u4n",
  "key5": "5xxqcPAN2kGM56XEWdanYU4GyrVw3gehMavPMC7CxBoZQZ8eiry3NXCL6NQyoNju4udQWLUstNqFbspbrfKhSNpa",
  "key6": "3tnouJnDck2w6fsGJ6aH5fcfzdd3shvW7sMCKd5M6zKSptcEktyXmpw7aH9iE57pKmwQyo6P6duLBjatknZ2eVdD",
  "key7": "5HPbD1SSfnXoazTnB6PfnBhEyyfMftzDWH5b61aSXAzy2cTvsasjyxYhj9vJX9ux8FThzg6PhimKuGas2zwQTc4T",
  "key8": "5cx6m2yJQ9Fds1U6aRcDz84ZsX7VXwPnGatuAnUwUGQ8YuRdzYemWAG1nd3Bh6sVn3sP2bu3pq5vwxHff4aETr1k",
  "key9": "4at6CDLiFH7DFaZDYzfVWmaqDsPoNZpFMYwqQwiExCLg94hLv6aAxoBxBMv8zAj5t7ehTdP6b3rdzmhKM8CK6WfL",
  "key10": "2xBS1LkgFdWmQcBs21NajheqjMAruBrhFCazN28CKz6jkDEYzh35tJeTg1tCztnA1EaanQzqubzKJkGYZJENmGvh",
  "key11": "2M3mZwfZr1tofsPTijG89zAfHCQhrLeFjRBM45s4i3sLmuwD5w8LUjZ1SdJ6y71VF6qRGonGYUxBBVozHE2Trfbq",
  "key12": "4xGycm1WBCuvDb54VJau8ARJ43mGW57iG6Sq4F5JHvcaChQ11BseHSx3hFFw6a56iG2qyUca2hj1fYkNWfBXi2EX",
  "key13": "4mcv5mWXwL6YjP9nQwkuEaFATzfGVVU6K9RpJq8foQJsLAzRtzpgqh7inacAdkboe7VA1g7uLPS1k3hRE3mLtFic",
  "key14": "3gfjXiHyfKvw92GczQLUPTYB6qS9zppMHpcR2QmLWiQFCXvykC6gn3NNoDmZoULaQkdsf7DLpzqKjobzZyyafgJZ",
  "key15": "5B1DNi7K2BjiySaeTsRwMpTmNHqMQnJRySRtZoZeGTzC8KgwuvNJaNLaCRPc9LKXd3mLEbjoRwiJ4QGokSe7DVDB",
  "key16": "4AscAaiHi1RXKgiowhXAdGVPy6UYGYSfsxuTRQ5urJggFcDuv98mDcpTqjiN1DWCr3j5pCsgkvrteSFTgtZPrNzX",
  "key17": "4JgKmJqSAJtYg7FKW2j9t4PHHLGSAzPgUdyLMjvrmkf5io3MLWQmfprxWFmPy2tEUsEgpzyivhXHxtZvffPXwNzr",
  "key18": "LLEGh7ENqCQxjoHoP46W3LRP29Q74N49Dw65Xa3ZyKbS1qM2krucywRRgHHH5HV3ngttC5Y9NdfoXURGLTaoLuu",
  "key19": "47JPm6Pm9jZhvVXTxdMg5m28Bqn1H2TBvffpmgknd3pB5zuAahJTGJb1tiacTpRuFsXCAk9n9ehXE8LapJHyfccy",
  "key20": "57B3njkDpVDEz51DhN9KYjuqzqAqLsiW6UypNQkptNmgnZ19AhxMXG8DbnJoE4rQpWMu5oJJXHAhFT4fENTtNUpW",
  "key21": "5brdQtoRyGSCF2ZX5wagNSQ3tssCov4Eny3iPLAbomr1X3h8m5CNfNgsZdT1QuK1XANb1H39VK3F9tKEDn8KsUM1",
  "key22": "jpawVaGjHNGjyfYmSb7D4X5Nu37M7EjYXEXRvEnZaoJPSzmrAbmakLmmk4QVwNC7wLyP3NHh8Rs9bhtp6yr57ct",
  "key23": "4ZiJedoTndsWcSaF6c3gTG5KvJxLdia56Ru9WaztTYYSr8rdzB48Vxxt2B5dUYeMzKNE6yogpHWs92ee23PN4UMZ",
  "key24": "4Dyb1dVQFxfnEFboWfGVkhaJhXCZP9AyREizobeRxB3nADKK4awgkEFZazG4hYK1MUU6LXC1PKdtrreNL5FoqQe9",
  "key25": "2yZ6uHiLciYejbxZsKMcEvbkfxeoTzz5iQrqJNUGUU2igy5LWzsXFt7avuPGyWXzto8kTd3NimMjUNmiyVo46o27",
  "key26": "5P9dHNzcbjdhkBsB5oRieYE3xqxUfjy3Ffug4sDQCWjmL5iDvx7MFavndNTnh5YhkNQpdzEvDKa5W4LXUTHMfKeq",
  "key27": "4PLb4Qt6dEygS9J4ResRX71mF3k1BEdVjVtsHuftdYHCxZ2q3ZRchfLm2AT5gr1dGB4X9YoLqtbiXmso5gtPPRi",
  "key28": "61KoMrJXmVCStDhjyxJDBxnR61ygZmU986yGNDdutmQ7o6oGZxGs8Vkhk3Ao6f7gmuPuMW7BUBb37oaEgG8EdxtE",
  "key29": "4Sk7eNusU7PRWVHJMGJAKihKVayVEVsJ9c93nxiWd8Sh4p1QbxPV56WUQ6vUHfEcEjFpJRUfgeiSh1BcDkMHEKSq",
  "key30": "jwvtZLu1M5jck43YiQZftfjFFKJmBuhcyW6k3j4o1SAjpoVaRRsbUQ9xU8PR4iMfTujmpr1MqWAMBefNoz1bL3i",
  "key31": "5dWhMqbnLNDwtQbZaKc88jqVmLDWF5UkXjrAQwuVRpUqs97q26DfqaH5tKc6KaageGffuDCCWPzkK5M2j6kgEn2P",
  "key32": "3D1yZjsbsuNpqwTfNk4SWZUvJxM7RmNqjJrByd6HktnQBezMNLcPSrAXDskgxe48AAEQUDuYT1MLAjrJrH4VomRJ",
  "key33": "5vEMLqyW5XGpgvUkeiCE4m6wZstgyR1sfZE3TNnA1zcZr3ksWujJmTMNTtkQLTueJscf8YNQmnezzoW4SuvJxPbS",
  "key34": "5PEeZmkzkwadLXdfVbWwUEiz8XDutxnaAUgNZNNHctQdA5h3Pm82nuvAnQN1zhQHCf44KffVo1prktAg7VcL574e",
  "key35": "3yWBPQofLHGvMgwSkKiEBWi4VNJw67XCAi1ssRW6wpu8dvJU62tB7ufJEkSF6vdNKNqfRTiYxJzMet3YB8mE5W13",
  "key36": "5rBivaa2KXtZA6Yr3bTHTrNLnT67uJ7Lb6tG77vKo13QQy5cFWjMdNWL2Pc41ZA49J3UKko4C6owMBJ9VcCopWW5",
  "key37": "64Ri8qd8HGfNMxr74a8LvyDhrKky9gURtw9h51KXEkT3vUUUEuC7zPGekQHbP6fXr1GmwYzJ5F7hhJKhmnTrDBFs",
  "key38": "5fSrY3KmNN5TBzwCX2GunwF8bLXky7GoJp43j1D1RTgXKD4YvNa8tvcsw3rV2oLXutadb5Hca2qnnLA4DL3kiDMb",
  "key39": "4cKzs1LetP4mR7rYZsbjHBULL7gvrjgxFsMzzHmfcKGovrgqW3FJitoahVgjwNRdJpiXVnsEc8gmexy61UGMvoiS",
  "key40": "3PSFHAgqPTvsptEftgcCYXwRoS75AW4RsC9qZ2rY4Zj3Srjh6UQMzgDEGQhz65cB9pj5TfR1A4YGw2j3ED3LoWU8",
  "key41": "4Qx91mJkowrzRwf4DGqDXnG3McnCFMR1bqtgK1LQ9BpaQu5XjqtAVJFEFJVs12ZTcx7tGP39Zj1XTZZJwNzbZ4C8",
  "key42": "5pZ6ARHfeAo6SdEmLD48g9kfxnBGMT3bggbry7KLH6NehtR37meywm2FEZPpyZ4fPMkY9mo9WjvX5UmmE7FwzFBE",
  "key43": "2XDHVym1fZj6KMDLYXb7sP5Dpko1jRJnEacJ75vvpehhjLoAJDz7MjmPoztxV7tmHs3jb8F6Gd69HySxWeRF7KHB",
  "key44": "wgYVJZ38s7dQAJavmFi9MWWELe5ZnJkLfpUojzduTeJmCSyaKYEvHe3YLeCxzD5RiDnADHN7aQSU7EJ4PYzz4HW",
  "key45": "216tHgijVroNbgKHR58cH2bb9YWUyRUftimDaPCdgixc1xoGMSzbqLWW3PBdBgugR42AEDiqA2LJW15Nbgar4LaS",
  "key46": "5HoE6iKCq1yhrFd1r4zEgfxKuPJzfsqu4xGoxNJ7Pmp1FZFFJ3qkSyaqNH1omz7kbstxE71m1Zu61y1G2rgcioz8",
  "key47": "5YbjcD2eKsveAxntpwGWvLPmQN7wyDLQxHEqPU8CPZzcmeWn4jFQjURKRwAQSwZNAUFAizaiTLWW9Yx48arduWAF",
  "key48": "adCFNxbfZH7vgfkkZ1sQSxvTeYR29RSM2HDEfc517wL2FP8F759ukDSeiKzSNysyFYfSTXdEu7cGZ2C5mSDrFbN"
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
