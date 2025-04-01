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
    "46jNDEmw4ioii5KyvkVSdBALDh9sxisC1SNEYRenXhshu9Mjpiy7fhtb5i6G25Pw3MC7nkpJ3aNQeDfionGHszLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUp5Darq4k6TUGKCX5CqLkPUTRLDNDhiL3xwgVeHm9tB8Xt5QXKdAo9LZDYCGSZV3m1r41zcoME7dEA32Dc3opK",
  "key1": "3EDs3HHKN9NrzNZd7d4pC1BPXDo3XEL3p91BHTEVHhGT1djzfNQweDPyFXrJohhtQUnmtgs694W8SBGmLwCu2uMb",
  "key2": "NVBifkFsWscgEtLwySniDLFqgA9gTueK3qqehagon7Na9eyQm9DnVnEKFRoMWigqn3cuyTcHDbKpJFVNPb5BhcD",
  "key3": "5ZBBM9khHmSNWRN11TUtAYSic545SMjUCeA6WxdFsq9sGis7gyPUAy6tuYFrv7rwFd7RVDBbRQEjrTNqHcJJmUy8",
  "key4": "57VPrQcosthWVotLqoNwftsMhAJnrF3eDR1wYU8MQwjWB9q8gLQHbqnmUhVaUSgcbXZMyfMf83STkxFPhZpYZJCX",
  "key5": "4ADtXdKzm52ffUCL4tpeeeCxWCjXPppyAKNdDp1T49CUBrLqoCrRbcEjoE3RhmR8CzJRCZeHUXYLaXHuvgi796Rs",
  "key6": "9GLS3TW39BJZ62ZBizuVtipoTtMVGPaSRi5rjQferWGhUPv164yNMHm9LnSw5aQyixdN65dRUR7iJdZuwzAkQdu",
  "key7": "4wFTZM1xcKKqnAFpfn2EPRNqVrN35bMM9CTiQmrvmiQU6iTdFfwLWj8nQo5kreSmkx7AHCn1H9eEe9R5gUSfhJtx",
  "key8": "3BFiNjxhtEavGCuQWrJVfoPvHrgtSz4sGHmGr2s4GwCZPRphKUSJFnKN73Pd7YzSWomL2fJKC9RCj1HEb1q6Bgsk",
  "key9": "4BVR6nXivEHEHdVNq3WxgFLC19xAWP79HSrGmuDWsf3XAy2po38uEYuojPmeDY4yQk1mHDF8gkJciUszMA8JiZZ6",
  "key10": "3e8EDta3FMfJXWaqPm48FbJDgphby3P4wDqniZPk2ut523bLczt4sDnmGkeaUjKshD6KSBMTd7j7hxuiEuckPAcK",
  "key11": "61uw5i9oCmW5d6UtGn1zXa2rJANYuDAAaNEtUEUeZTa4vJysyVjUdfWsn7Cb4RnVKpfMpLp7jMMS2U6MxUZSdTQe",
  "key12": "2hLEonmwhFYRNxw7qaHpwFHuTfH4HaMmPzGTP2GADNk9ocdUML4caUuN7QmQ9bqYpcumJoRuWyfnXP4YbzQc6rkm",
  "key13": "65VcQGZ1LxGDpijcG5rDCnt5UwzbCehmY6mk2tDMPiyzmafioeG7DUyej3FByTBxFfEWHXxvww5T6pwLY1U4JNNs",
  "key14": "2s6fYEyMY9n1Gn5NLNFPbgA4i7pqpqcXmWW3UYud7JbCXGjLuShUBE9osWJ7E6njPdipiLuGababaHMrRETuxEc",
  "key15": "41NL4oYsiANQsY7WPyqpCaeAsfnHZjvLNd9DTmtKrjhFeV1Z7dyphQaKQpEP3Hozib94doTUmycvTtWfsJTDJHJr",
  "key16": "2C3BGo8gTKx224454nYnHSkytHyJVNvWTQ2SCRHHwE6jE3U8e8DvtaXhj3pF8jjUNBabjgmBHxEZ8rJCyL5cCdiQ",
  "key17": "2dvhU1Jat8WS8tAewg76wfVFufhVuXopFEc2FRYedeYRbYbfjHAo6fitx2xcDfaY9PgLiEB1UrWNm8XruXHpSzie",
  "key18": "itqpxo7NvRGwuxPBwagG7pPjhQUWxebBwzQhuPS18c7eyeMwyYRU2xbB7jD4FKM4zW733TZQXQ36xLxKUy9hgXN",
  "key19": "4bRF2pwL68YZr5cpLNgUVQvisZdrNoX14F6QQ62A7gRSHQZA1YafL4RAeQ5QjWUA8H9DnhXTgSkM8fhDZptstwUo",
  "key20": "5kLkiAyumdTRsR353y1nv6YeKUVBT7tPqBnT8ZU3eo4B7ihgCUAzR486jbeciVWgj37qw5FMPKoVr6hcTeLvHTX1",
  "key21": "3P4wdYUvG2A78JDaRdwZwhJoHnoE4yubMdorMvMMXTvCumfEoavk96ocCzS86J2eFRYZ6KEPkN92e4V9teGScYAd",
  "key22": "61RL99D3HyWVykYWZ52PmT237gDQ6wPPLjQ8HYmVMLyn1g63513iMgFsC3G7AckVxw1cSayM1zZ1eBjy2bv63C6Q",
  "key23": "5HaoBXVxMzT14THi7oCJeD31q3jy5CPMWhWT3mTpsVQX8aeVUD4Cs1XakVaHP9jD3JdrXTYGYVCgGzLvXiPLUtnx",
  "key24": "42VSyPXs5wrDiMMRr64cYvL4BXDbJmukNqoHGtKSAxkST6ave1BPA9FQguwn55DydWwdQPXtNBaWaBQcdvocdCFn",
  "key25": "Zcv9e53t7hCF1JMFhe5Yq1Bq6x2tnc1xTgQcE8hKQZby6PXUPyByV9uGC1cWsZG84RzS9a9nQ5iifQKDa99zwmE",
  "key26": "2o4FErGH6vhnDfeZd5Dvtpc68LMAj4W2ykcCXym6taUqNUzrk3gBR7GTYAHCZ5T5JwXPQX5KtfA5SQBZn3Gy35by",
  "key27": "5gFSHNba2dTfFjWSLNuYgCpKWjAB8AUwrsJ1YavxZFSDMnuWqsQqbRJLd1fH8rKgzAgrzh5t9jpePBEMAPb4Y7MX",
  "key28": "7NKXGurN9SJSSsxWj3bA3oZWELKhjmw3SYdDnzuwmDmY3k4xMuYCy7pdrwqtNwLjS2NR4qZhBecEagJiL2gppbA",
  "key29": "ZDEiN7qJmr3QMRGzidhBiUNgQTqQ1KTx1nBoGHmbwPKCp9kqKRLLyi98NrQ7exdJeMEngGR7K4FqM6rk7UF778Y",
  "key30": "23ruhFGnnWHUzEVhxfqJcV7oG94RQET4c5xKjmk2dqpFdjQxTD6ntyUHzfg9H4uzAVnnr9NTqtJ2GdqneS3b6Mb2",
  "key31": "Ccakt34CJrSWxYVR2mUj9NsXEC98h2qMnskhWNNnMM4rrG4Fq65UxxFTomLy1DL77vmswzSvmhe5jK545oBFews",
  "key32": "4VkS9VoyBM1bCXf3Ybpgw4qeHDEDS7p5ojHYZU7wknBganhMUUiFbx1Y4bggaA9fnxk7okbErKa4jnutGyR4xZKB",
  "key33": "5PH8aBFRF5bFm7qd3hkd1avKrmF6ohyHEQkvmctdecGo3cP4UvQYmGnAGajeMtsUHsZzZxicYWdLi6AVMJ46GyV",
  "key34": "c8ai4DgLeP9i8xi9ov6SB1ozaQ8AzufvzuWA8KSmkyG5mSxezjsEUqDqbCuz8KkDGj83hp5NSnFTCaBu5aqUdEn",
  "key35": "Dfs4mSisM3o37LF3f2EXgetPWiP2V6woN1jPA5EA1fD3va9N5HHJ7WJxCh4VVp2PB1M85aqWGBbXrWaXrSSw344",
  "key36": "38gufnCXAiQnhAkcPfGh1Yocw19ne2j8X9h62u5t5wLMdB7Sjp9PCJa8uLzm38kVvCEwJiCbh9s86eNiDRda6mGK",
  "key37": "4VBTCi28VJio6hyyoddCjhdCgx18sVCwbULYn9J1xzNQnHL5kS8rXDWws3xDBFiNp8teyKS9cBKjo9jSK1CDGGgm",
  "key38": "4THjSEMekCwYkR3tYttr2LPSXsvvLDGf6sFsaaG5hrzDYLfkKr2mKzNohMBwHVqM52fKum1jiiMXjRURvK1AerTs",
  "key39": "2NiDYVJEHKhsXeVXRsCMS2gz5He7bd5K7rkrKhos8uZ4eiiLASj1UQMe6jzseefheLMHeL3nVC8Hzi53sxB352nR",
  "key40": "4Yocgcc6Wgwi4fwEa7ToSMP1jm4FbrkTnn2mnSpMHZMLRcnaME4bRbiBwxoPPkVER8SMNRU3pixnPF5zi5vSCCvd",
  "key41": "qc9viGbkuCy1JfgzzvhyJhD92ATMo2atC7rY6qeAMotqXH6c8LaujJzCbaCbAoCEECLbmdFcVXBfkyKMZehqSjW",
  "key42": "dtJNFzuCWCCiToY8vBntyBoVgRmeSsJNP4iusme586BkHUoeW4wiZx8j5RXdvnxqwwRGsYEiVLFHCFJdcsCAWz4",
  "key43": "4pjhouS6cKrqrrRQXCFYFDvPLEH2S9s8cdj45y24RCfftLqSrXmP7tLEgvyfGvxF79subNX9JMaCJhq1FaTEnG6x",
  "key44": "24shTywMbuss8gJVuWgnfTYx3W28p3X4TngVp71z8H6GKUT6gNjAPSAZ8ZVWCoKeAfu3xWyk3hSbH95QsDhurp6s",
  "key45": "2wUTy59GVQpSnYyBJ1zg6MXhmXMvUFTBsJRpuvAwn6CfnFFBSKcEzLGXib4oTs3yHjUm3umY4r2hfrBVvPtn2gAG",
  "key46": "rfhQ5DYT25i2NTfkXeE6Py6X698KjAavS5fMBAumHXofUDuVe5TTLtV5NcgR26q6HEiCn89sQV6APYpkHpvUM6r",
  "key47": "5KUK2JpMA2WrbWMg4h2AF3pVnRRv3BAvNfxtz1HoPazxMm9Vf1JudvCPspwxG8HQU73gTbXvcaNngaovHUSmLPvE",
  "key48": "2A1EAFpH1xifdSaCU5yGrufgE2VWZLzHEFrtA9pWJuhb8ZkAR545VHtf6gVAQYo2gC4Hpn1AhnRxErxsdUmR8rkT",
  "key49": "kNpiGKm2jgFwBGnse6BKuboFgk4q4t3v1u15iTs61CaK6K5tENjuvbWe9Kt8bRv6mfRiJuHX7cgvTqbR6PrseLq"
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
