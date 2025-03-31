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
    "J4WGXE5PsE994nYTNAdAA41yNFRjjVQ44FVK8rHuSqr4DQoJGDdp1ADLxD8wSPQVrXKdq1boqgDrRAyW749u1bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SHjWb9N97aoZKpWsEfx1hyBGb6SMH4S8UK9uPfwy5zLs3wgdn2eY6YoLi8LoySAkMZXdSu7bxWFLCVWX8uiZQY",
  "key1": "4i5eo1YWSm7XzkcC3EXEPrHkB4YMdmyyQLTTTHowasXYBpZdybc9Bgw13tcHM5UcHQtjJRygWdiS3Yayks7qJwnR",
  "key2": "3oaTPvwntpFMpPfMQkc38KD5ZXvFttLMuaupNmAjo146rL8wf6jZrn5aMnZu4ke8ovc1hsC6JMaoGEbqFa3Mo6Cu",
  "key3": "4uT1U91m1Es3zHfnUEYMuwB3JX8KwjbtCyLBEi43cK2ubvdR4LH7yTQaq1Vhkqf8GMZo3Yi5XTbjeCuSHc7sZ2T",
  "key4": "22CqxSPiRfKggFa79FqdGTiCvr8LocQhkxsMap7abN6XFtkoJvMqY3VpJgiyntqzVHVLvSfCSBrx93QTRGZr2xwr",
  "key5": "2gq8dcXikf5qdizGuvDSDv34ccWz5rm3UbnFTwS4UqxW6R8MvbZ2SqTZ2hVYe5pwjnfpv4QzZtSa86F2sE2YmVJS",
  "key6": "2aN7bbttuv3SyMDXSWoVM9gamYwJcnRvMqW4jyTH8MH5s1gT79HLvzYmdsfHrs9R3vxaB71Es6jc6c33dXhMcwpY",
  "key7": "3phLMmhMadt61BrnqcWaHZqcfSLWsGXPtwRNMvN6o8Z3vDukQK6qJyweFPxtBick7AVc9jmHXkgC5CB8KR4JuyEG",
  "key8": "34a95JVv7D7GKVyx6d7Kv1wy3St9FTTKn7aRtJ3cGNDgWZMoi6f6wy9kBuitSFh8jkPzbeJyvngVBJFRaMt9F65Z",
  "key9": "m5yGQm8hdh3cMy8d3JTU2GFb5NhM8RFhdAhFMNcqksFNFJC5NbJJ9VPRBUegHTXKQ5JtLifTZRYZW3vgtgoCHup",
  "key10": "TtnUCxgZMstA7UU62WjqXdMTtFYEANtquvsPQvXz15KPuhiahWxmtwTjUFdF6gMdwTsYmS13uDQLLLAtp8fAEox",
  "key11": "4x5N5hHM5UtV7Jc4e2rPAbeCaSD9V5h3Z1z5Jg1qPtamjrqWW2GpbTxHUUyDNCNQzWxPouLj73CNrAxeV9dFhc4m",
  "key12": "5gNPw8C1zyTRLgDxnBR1rutweQKEbm7txKJ6GGhVyMv3FgyBuR72Uw2Txr5sVDthYmamTABK8tbqQjukPpUvGtgn",
  "key13": "4hcVrfKQk5iywwejne9NpZ8J5M6z3ovXgbiGrnD2hXzjCcTyc1dAAGhYXhGtv4DtoG21n1yMzYHDdYYUU87BGYtZ",
  "key14": "3VLNmj7kEc9AxSFeGEEZEwaBU1qG1sDEb8TfNiCWjezUnwNdz7QM4pfCP7PdRt7XviJSDbCC771uhEeD9tKtbrRB",
  "key15": "2kFtp8GZsdk2mBG7YBdW36M9SjB8nt2xwktJXqQsgctsaBDeQmbExGDeCEpKcLVECWBr3LntDboy8SyWMXpoyxJG",
  "key16": "23vmy4KdY3Jd2e7Qpt2XDCAMnQyRmmGqPLrsiaCpz96ZLoXVLfmEfnpBUE55zDKChq4x5y9uct4cuBVZ65gwaCKj",
  "key17": "61hm3y7BREv4SRaPp2f1yk1ojuZBMuPzxVHor48htdmcNb2jzbnNSfCFFA9YUqoJQ79zToA9T8o3ZPQ8uyixuDPa",
  "key18": "2J23gfvAKQSADhXXTcYWCKAFf2Epun8qdDYGrqHRYwtJb9R35gUqCTVhdkRxmKCyMyRRedGJ9hrpPYZoNqFL8Fyv",
  "key19": "4wBjskA2DRCn4U8dgWXof14wURhCEUWnPefoxmrvc1bnzJPfdR4uiMXQ8XKUG2mKqXRwFDetvZzmErXXXJABkVL1",
  "key20": "2DWHRFLZH237RENbd4AqyDU2Yc7qXdyueuPfZfHh6ws4zrXSCeM3pcpfP1LLVUYhyX7USpXo4vpb8X9nfvykDzQ",
  "key21": "2pFLRN3K5kXA3A7Q2qQZxkipnDdaSK1x1BxWMBN1dT3KBda3dzpGoVPdCC766x56KAQHAxKe6Hs4YHhPuyUsLgL2",
  "key22": "3Pr7WqJpmJqvXYDmKzUE4FPV7sTbQCmkQhmnEeifz1yN42NeR5umzwqZfKmJaGMMt1tRfywEexLZwHP3vp9o3JR8",
  "key23": "4H1wZ7fXanP5iEXd9jGtXQojY7RrRUXwmLSrNGt5ZHyGiuLGKii9gr72eZd8TH6VEeP9rwSMbiFgbpgQDLTbXFY9",
  "key24": "eBoNRjzJvHiuPJcnGizE618pZByYxbQ5eNPYfN6rBW6HrRqbr4SiJDnH5WMgQhiCrdpU5ivTnaKxPhTgA2g7FUu",
  "key25": "2E4hbwoWyNcTMdafoNMJpnGjPgQyrVpTuiMyyrMxbTrtp3u4aKRA6bMwXAmh1xr85qiwtMPSrPHdEfWiWL6Ady3F",
  "key26": "4pppnM6icpunYDCpE5g84Rs6GNyhbWfcYKv8gv6WiFJ8cTEcvy5Umr9LzYWf2PvEec7fHSL6sFgy3khawrVqgFhv",
  "key27": "musxqSViJogneixow35ibKxh16ZTsQ5fYTSwoTH8t5u9V2ogjUyfpHFBL1HiWrAcYSaMakMLNHrxjPHvbQKeWsf",
  "key28": "3Ve1CXM2KNQSSLJSTMGPtu8qCfEHDNHNKTn8mnjBMG7ZnjsHNNth6B6zf6wL1rLG1BKHpyssW4a1zsg8EjjQmL6A",
  "key29": "3aC5dpoFcatazxF1Ht3xDdehkwicsZP9MyMX8CUAA59PR2kN7AWzLRDMCbairUkYKtYvupg5hkpvZ9RCksUM9iDD",
  "key30": "3zjBQfs8Dj3z5q79NUjFf1uhuh4626rf9FZNacZpoVgNGeihLCiQVhfg1u6Lp4RJp344T5KHxLPrkBEsGVgoQAY",
  "key31": "5ec31Fn8TM3UJJcM9U5iPeFdTB8gBqwyRTbzaXUSUMtXotVYgJhZ5mXhryNankNCYxW393gdMqSSaboHC3q8ufiR",
  "key32": "6647pThjjnhB1EjsbpPutrhZ9CqDcxsTDpcXFdFYGsdcRiVaPr6GnzDckUEUs5Nz9uvvd7HGZ7JWEZd3LvKqZVh9",
  "key33": "8L9e7EZYAb7XcgihWRv6F2qVpaCcC1Wm22CrZ3YohVarpYau46Db5uS8h6yRPN8TTB1YtPCX5Dc7wiwLDYpJc6n",
  "key34": "4ArvKwT4apUnDqawwfgkAfQeZyv4WayhTMXcYJj9aUUhP4xXDmgGyQZ91tXLYc8mJuNc2PvsxFRtooggk1NGVrmN",
  "key35": "2TZwEKC4c3e8uvVpVQCiWiRvuL5fR8ZFW6HCRGpsoEU9AYX9EJk2E28EXmyKgJVageXdGicJV67nv6wGFeMnGwVV",
  "key36": "4EEgo1Ha2yWJ7CWYvpaEmHGgtzhdH9ti6cab4dq5cbHDqRb1fM8RmH7ixVsW14sL6BnVLdXPHUNyJ78B7JKK3fSa",
  "key37": "2cjgUMCGCuYTLmNbExccFZKPXbVEnat4ETErNZMoyFPfWNFHPjYKzXxFZmJFfrsjhnuMthEpZMV45wrtZfUr62ye",
  "key38": "3AQAWe8E6QbcZUbrKC5kHpmiTDe5QRxvvT36xCXLosuUxSRKPoLnrmhWn9v6fuaqZH3yid1zkX9tA2m7EgxjXgHp",
  "key39": "4E5FNebdCqCPjhxK4v5q3zzdszyDj9i2mH3TFcLS4rNWkW7SjJc53mjMCoocMoCrjcHvnbPRYepRD3ztxJAGSiep",
  "key40": "3MZAjeZboYg1RBZnSPUkNoMeG7emwm34DwomsAumMPMC6hvAmqNdmbBGWgBXGYpbXLiVKP5LzriXHSeMYUWsDHuU",
  "key41": "2wSThSv9FqU7nd141ADiYprm3teW2hHqB5Ncs5NGSefA7B1p4GkvwfDwHXmquLtK8kuTxjMeWXEfwmYsxA6SJ3s4",
  "key42": "nNfQMTjDKZi4suvvnkcZ6RurRecJJJ6Zw9ukenASuhumiojdGqtSyi3Lz36CpFJ6RmianXYCG8BgwtB62y4HuK5",
  "key43": "5Bpio9dgGZGR7Jhp7A5Zn8oxS1hJrecBqC96eCR7XjPJWZSCUR1UcVdh5mXtAe2uid6KkM1sRoL9A4vkgbKjXE3U",
  "key44": "5ubGdg3BW38qKfX3nXyxuw7TSpVGcSMCXRWqvB7uzAMGNrVA4xTnp6Xz8Ndg6ZzHBjQjcyWwdXeWHymYwtdRRR7b",
  "key45": "3dLjTsVU722dizHFF9FwkEZk8AQ3cm6e8n9oWVkDDczQx2MgYkWVmhP8ytCNU7wzaeS7UtddUxAJ3CuwmcWEkKag",
  "key46": "4AvZ7zfj9Wmpc3hAGFYAWcSjZ1TzogHgZM8M9yUPRY3X3uaLD7HhC5DwDDzd2GTRMZLk59dnRv7rmivifJ1FW1Ei",
  "key47": "cA64GjMoWZnd1dkEm5uyWzvrXXZFiSRN9ohBkrvvtk7z6ZdJyWyQYeUBgwmMMqTq2ZdB1kT8gaJCq6jQp3DZbaP",
  "key48": "32jTNhoVMyQFPfTJoqUc4wtzTUjRL816qJ3CRSXtoa23ckRxfGYxa7mxfFtbAPcY7gG2x3Z9LqwTvQfhDdPvGzSF"
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
