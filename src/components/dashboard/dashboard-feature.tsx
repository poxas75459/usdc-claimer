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
    "2BPfj8NTv8ovwZa1LLGfsCh35UAh8pF8N9WHzM8Hg624H2Tzq1qKmVrwQk5ZycJkkDZnbnotzmFMjuWx2V6sC8zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKGLfejeAfngMLzVUuaZVbiXtNToDkNZLSgZdkW8yFjLo1oAcnsGBw63FVfeCNSKMt9hsHLHtxokZ8wbx7XjMJe",
  "key1": "3Lo1cBFm2UXKLxXhYqU4Wf93DBLv7jKgtQdtHVXkpvAPcFDTjFDGMAVqcWmYEBhXTmFuEabFU21LV7QYVCLVSFqM",
  "key2": "42NvDeDxt9hsATQQJgjzFqhaKmRQFrUnxJavAoyiZmUSw7uWrC8xCsTa8EXkdk5KrTHxpq51g43jHHRaMFBwNytc",
  "key3": "3mks1oJa6yyPqDC6WwFHH2NgKyp2tQA4q5AL45wte6wkFAQJfkzTKenoiK1bx6FbFKs58qeqsdyQAZVonZvnxyH9",
  "key4": "5qX6ZTE5jwEuCCB8iEsZ1VHrF1nvFwWCpiyGHwEgznKisn53WN5HP29Bqy9tjYCYdYTKEjdwBi5XumDYXLNgbERT",
  "key5": "5AVMtP6soACxTePfqE6epxVcMR251p5HKn9VBnjCuJHVGidhQ8QVMdjzRHGaXsiMDbRC2c1S8jXfE44XBtv438Qo",
  "key6": "4vfj216NjogKvCEFqn6SyE7c7hwMcRc3YuC62NPKNxg7rxxp1dyHShXdJzDEJind1M9LHJGG4TryhZ1FKvPYRCTK",
  "key7": "WWPNCtQZxRvCANtNnQUpvEfAt8vmFyoopKfcRAhVUC5uWvVGp1y4FRYXW3QWZkn6WfTDrPX3kMZRJocBQGDfD2u",
  "key8": "XE8gLVd3ZdCMrMbUYtZc4cv1C1wXg83vZpv4HAemN5ujNBTUFX9fhU3SA43L6sECr7ZQuPMjdHuQ8Q7zjwmknfW",
  "key9": "3C2QsGfGBMyv5AShe3QiueFrDDQMRii4tJ1HLrGSV335jsTY2Y1sjjyQoThNYoPCo3uHVXxUNwXNXi8vA7phGMDy",
  "key10": "4RgztECMsJ5Bh4eJrEjXfTykzyZKmWaKUkBtBDGc6kQb2dxTMYcdqtpsfvRUTf12KLHUWUFSTqKKceurYVPkYcJC",
  "key11": "2TggAyUYsccYo3HU3k2gb545Q3humAGqKMMYnibAHfxLPaZLretUB7L9e4zJnXqbP6hksaQadUSuGckaAdCvCrM1",
  "key12": "452MShqc7En8oShNsa4Yb81SWgYGV7nsZ2UKN8688MaKpeU2WwaMXnYHK4NT1PfoDWYS6dNDngDvV3b1nje9mcoN",
  "key13": "4rTai6S95FvzBa9tqV6RDH9n9zBNomtD7SCXGEog6ZGAxJYXFSdP26PiuYfP98KFJpft2VETmqCeZJTqd24QkjLG",
  "key14": "TgfC8cNu2xRQcGbhDccmUHAqNUvD8a7Xu27Aydnqr5jvxPx5PufTB1tCo5JuEAjDRhKpekt5Ztuqo4zgLX3sNsz",
  "key15": "3o4UBqB8YZX3Hr3YWEVfftimrimCso1QA25z6KiNzdvoDwPSD4ByYFFwnSnF6YEUbif2km6KSbesYvjCG2sEPbey",
  "key16": "4hQwYD1nWbJEjWk61ZxeefumsohXVaTCyDsYXieRBLaxURsXmR2sxHCVvumFtrzWM3boP4LDH7SMQDZesXsmHxqg",
  "key17": "HeFC3kSKTcGt1yishSmBm5cGNXtWWUr5gE5rWV6Kt1ESmFtxC7ojL7KCF627jJvw5LmmgKJ68bsbbEopjMxE8od",
  "key18": "4KuKVHXkVp6hMdXx6ZujQ9nrzupsmV9PznSKiU2BKGh4BjRPQpnoJH7Yrh71heMcU3VJuks29HPFdGRzy3Az2aGj",
  "key19": "29ytAF4mGAbYhE29QsM1kan1ajh71MHhqbxHU1BwV4NZZFW3CPHtjAaMGDnx3JJZhzyY8zGiLy8CdfwzecYvRCyy",
  "key20": "2CcbNjUczMc3twV4LWMpBU6FRnXdDuyxgXmor5VUVvMeUo1FurUfwm4LTx9ydxugQgQ4ExGBU9P5JAghieGcG9Zt",
  "key21": "5StP13huH1UgPMg32uK56g3mUchB84ni15vNDXYoCyG3x33VEgbZzhdQ75eu7cmiuZeE25PrHKeS3WUSppNncgwf",
  "key22": "32y6ek493i2rHvnWVsoh5KgsrgyFNS2BXDYAJ9LxE9in55SnghVEKPzxR4z7frFWRzm9xTnJvsxBSWJRDsqgL2Lx",
  "key23": "4uXTwq2jyULa44jhAY58rJeZsFN9saHVTsUcJjvZhoezUaXPiJmMRoiWeNcjr4a8K4uxMcsZY2s9SGXxnZxNh6sL",
  "key24": "2EFutRfZ3gb2u9gZ4kz1UKfk6Qvh4MV2AJxwGq98vxMFVBWx3ofTRxUH7jwaVh9sPPXzsYwqqGPnT9HPvcrPSv2L",
  "key25": "2BiJaQNd7EdfvCrhzeZFCdFErpEBrYt28CuCtyAtEQMrDSzDxbicGEx2qUN2Vsc8VMTXjfdsArP44D3U6zxDLfFL",
  "key26": "2Sk2gEN1UHDEAk9etM9byVbaqrRQM3geEyGScP1poQu35jCWeEnp2uonEf5Z8qU76jc6M76RfQVveQj5dEHburFj",
  "key27": "5Jv2wXEYR2s6ftP6oBQAmVhfq4UYq6BTpAvvQxHVjEzYpGggRLMbTZPDBnDc4mjhAiU6ocfhQoZ3MVwK7xDKzeBY",
  "key28": "1A8T3dmRbBCduSbSqesq7zpAhcx7RTLKa77UZen9pixuhbuY5UsUm1jjzgNyTy4vy3SbuobLupgTE8oiigvdjzg",
  "key29": "3PP8Mn4sr8ZPfSXfwvry9etnEpoAmhRVYEcKoihmZMMioB1YGSSbC7YSkF33C7pBUUx5UMRTL4VSXqwvSjQLhnGn"
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
