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
    "2cXEk1XM1TfaWg231PMMZjYKGjDYwrQ29Ruenb2LopUVbzNjJM4MjTBiTpa7JeMugkSJLRru3uf9GULKUKuVgvyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxeoSGT1Q9vUkB232ZQLJkw3ubE4UxYdRAsjddqVELgDhh6M6Km43mVhcwifpy8NeaiF6wamx6h432a4oeNrvBE",
  "key1": "61jr3ZE1qDBQytyYMg27XPyzRd1Xg5poc1zBgsXVveCCM9HmAFum9GQnDZ93XoCBA8fKaMDrEcGcEP1nWah4GnR4",
  "key2": "5tnt8sFjSB71z3wQ2HYeH6LRspV6R31xuykkeWVKdtdHnAe3sXqPaCR8hPsjqv7au3Z8gK9MLSmmkWLY621QWUQo",
  "key3": "482nXuMpQxun18m4prEvnaN6aepo5B5GGFLC8BNL9Tb38nTU7o3YTRjsw9emhMqFqPJjYMiFnhWgJhxoStH4mwBW",
  "key4": "3jrv4DhXMAbsgaM6AeUNjvfQSKLENSED6fWK9ogbU9Ero3NG3HVSECBnaXxXR67X1vL7tsuVbDYvKZDLuxg6ML7s",
  "key5": "fyxLJoXYqAPWUCtAqTgHziZpngYw5sEcQXBEhowbr3T2C5mvGEU5kfepyjmR4guEHXG55nHLWqEzsrcsbi3BMux",
  "key6": "5vbm5s4hFjLpW3wimm48vnne74zpmuFVxYSNxmGgxXoWDScz2eXnChw1sJoCSQDijSDM3FsexTaUfZNRpbmeag5r",
  "key7": "No7nK3ED9sRZJnygTVgvTLY4HLW9uEqs8CiCkpQKfcLWVZSmAW7wfLY3txk1MbSW2XTyJnYSbWvddQJm9hskvHS",
  "key8": "mpAK4y7GxEoS6XX6gEs8A8tQQByQKgkUs5UxhnYPuw5qCLa7xtPLGW59cQYNE5QjPwCviogVc3HCgQMkahSEphd",
  "key9": "511duB1tCNcGtpi3YtBNNFkpR8imdPQJxmhhweDXEnv6LvrUJEjpK3fsMpDnoAfjzLA7dEsWENYQiKmC3SzXsaBu",
  "key10": "3TFethfFWyRfbvLBMggoBrkQx1SdAdC88vakzhMR14z2vfW1p1jnoEGrneRv4kU9xFnJdg6ZYh2WUrN39Z7L13sP",
  "key11": "yMuUSia899fs4DC61VVWaocPgoYzcLyEaLTyVXVeUuQTBXAf2sMCHHS8jgpuoQLscpkoQhkBJANLb1BQXPtq3N8",
  "key12": "2B1BFSm4GcFfzRfXq786SoMx24acaiF1aZVuMUzrhEHGBarH8NQQEfpHzba7PqNCsQvz8G6R2RRoutseDbHmHe7w",
  "key13": "FGDRiHMGkzfdh2LBd2N42SnvysLunJNP699niSAZTUbKxUQWvnUwrdTXsuDtcrQwpfFsbK359Msun44scYa1NoB",
  "key14": "mDDM69GiaGLvQPSUB4vtfn9eANQAQHusykPzaqqj9ik5kMgbnJpHzDU8pWkgVsnsotnRhR88KtxypqJMRXqmRbp",
  "key15": "5LgG9WYP7edeHV3qNRUbcrV6wS2wVkoEGio6gsVpxjHAtfnWpvJJEDYoBthXUS8KsUxHCxCXuoEiDiYwssu4dDvz",
  "key16": "57HjwCddtdjZW7XZA9F1oqfJsfBGRVGgV9hLEeSE2QXM6A9kUuC1AT42GLD5C7356NdjXxT6urBnU3YYacSY8hQo",
  "key17": "3ath4wjLHG7y5KnnYbUqtG35rSWtLR3kuXGYfkvubRps2eA5BD3wUJ1NRP77PReEm1jAXVWhrXzRBkP8ENWBJDvR",
  "key18": "4uhZMj7RwtyUHN2p1J3BuXV2pCgmkQpEZ6nXc7mDzh7Q9LuyQKKqiN6YNUXn7Y1e9QUujyRVSdYiq5n85Wcz3SMt",
  "key19": "5apPUc5T87Zd9hEYQFbksn7GpDPBmmgZDUhMykwC8xH5j2TuhRAv7J4URKpCMD9MH8jPXwgj5ncSsbzpwanQsGNV",
  "key20": "4Rw93x3sdo9uSfwYidvHciVwNXYsgKnUYmDA7LieeFdJegQE37pSmwXDXQSHdSayC3Qnp2Z3xNQWFtf52sz2q1sB",
  "key21": "62WgFwvCSitGzY4FUebkD8MasDDHqa7yrhkVmJP4gWKe5nwsUd5rVckpBsayVFz1Msbv3andsBfByU88ER6WHpXJ",
  "key22": "4a2D8BbxnXWY2TowVx2Km6uZSWmB9cDD7VaE7nbu2EfR5r7eEn1JDeg57pyCGC7MPdHu9ekia4DWm3go1KFNEY99",
  "key23": "4rSVcFZujR5Jn18rhPkEuLQv3AEsqfEHNHxwS8QkG1hsF7TbhXPzk5qHyH7X4pi1o7Cea3pfZJvcAF8dfyuX3JPN",
  "key24": "3NcxQhpfKmBcAHZ9hZFenk27oMkhoB1Kbvv66eP7VpSUmyXraeuvjR4mQxaRtVsqLeENiAAhajq1Bnqunzo2p3hJ",
  "key25": "5h5zL5XJRjsnUuZ8czwhCm1cJrkTGStyavizpMcCTr9qRtdx8V1W4GsrLuGEjAgG9zDMukSZzM7kVzBCkcCXj57q",
  "key26": "3cUnf4M2Gip2uffygjzwzZKZ2vL9Aih6g36h5eabe6bwJebzPoG3Amb5RSPD519HxxcoSFJEeWfT8guVzNvqKSP4",
  "key27": "3YBRvpcnZ9sLpQhJngE6QLjwgDaDTYipniu5kigsFURBWEhJtePmNp7obZHfCHaPTjWZ9Wgov4txjGhZgLPPzGbm",
  "key28": "2VUqcjyWKh9VK5CLmNrbtR9QbqFmkiwehHS29ge6em2cQ49piCSf8i3AmscvipvxA9UdnWg6iTufCF2GcfgAqwb",
  "key29": "Dpvga5S6NbyprkJzosUXpXvdwdNqmx2H1rXZ8tWNJCzMyzPoHmePQ1m8LmwxVRwnukRfk7Vbv8GTkRGUvmKgRnV",
  "key30": "TJTi5j3Li8nCWfFckbRFyAakJCSpo3BzGLPUB9yp2mzRaxNs4tpsYf75LGgdbW6EErpV6m9ZgGcwKmfDoYENwEe",
  "key31": "2qKhnrJc3T3MCvgq2DDCPetf2GA67ncwqsijLnvMKu5aVJiUYiEwoJztxj1iRaiuVQthLSMVjDyttsbH4NoLbNTN",
  "key32": "4MaXk4ac7ttKfWFHuuE6TkCkLTTfjxYmCE9EVgDix4rtJnfA9DvkxhXTVRqhxNUaFFUAgy7he4L4rDVuyuVsXGNX",
  "key33": "5ZmFBwTUjPprUUTi1GkFC7spex2jCxEbbY6BU2PiNdhM94FpYdierLB22aPR9dHe6FwVh2ttfQcyNuJ28QsjKckU",
  "key34": "Aa4R4zWhDHKP1ZbWqdBFRpAU2YcFaYRHd8FYzCFFLcAFNwGZSZW3eoA8vwggUqsiZoWRzw3BuJuF7Ljd5CmoSGc",
  "key35": "2tYBfLetW6eE8oVHrpBNBV3DrgeQSZcugqrdUANDnpno4wEcjTfJHXSmRA1466Mkb2zKhsmMFdRYVCBqkWnDdaHw"
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
