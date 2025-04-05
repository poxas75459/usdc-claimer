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
    "3iaY2td4pa9JbvjS3XGRHBEcxcK7tSMTfczUNS2iH9MCLiBFDPTVUSZqLp7hrwai6LYtxLf3gyBQfztqkPX3P463"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PpvS2624FdKt6VXvcCLsbxp7rfcm4fda4fMF6FE8o1zVh6XPMFWAkuguEWamKQJYunuBavhpggppTeu5q597ky5",
  "key1": "2cJWGSkKFkhNExrL3fFEvUywBMyfjBQ5CnXfvQeS1goCM2Xnkju2YNFc1ziXBzJ6MG1ceWQc94L11morrd3eP7Jm",
  "key2": "4dte9yYaHES5z22BakLeqkgU6GeezyUaykyov2pkFV6SJVtg51NVxFdSuiGrqV1hn6Nwd31qjz8G99BPtgfBuwFZ",
  "key3": "3c8brFES1FoKQCPevoF2c42NDy4hMoMhkqx5iSbRLRdPwMLWtYKer2ZZjQ5Y1Nug6HQC26xraQXdJzWxokxRspuv",
  "key4": "4AwgTXr4zt5UXv2JY5j8i827MjHDtHwirvBLmxEDGorWKzCRGfwU5D2hh9qvEfYHG3KF8Hk1nXNvhjvrgzVz7YrW",
  "key5": "3hzCLsmGKCN17SQsai52LxBzLvBSSaY1GjqwawkjKr3fdSvE59Y1QcS4R3JcJZg4CxYMVrEfH7Td7hU6UXEhuY4H",
  "key6": "3YbhxobAJBu1fMjYkMxWhorU1Qfsf2JcKW8oaQKeHiTFgELiRCMMswaoxw9XpwJxm49VCBkaBUEfndYTvCh8L9gA",
  "key7": "4MCBEFWkXDQcvf38LdvSZb1hMNEwByMe9VkRQWsmuiGve77F2MgkKWyfMwVdbudxb5wW6ZsBkD38MkncjqKH2WBf",
  "key8": "3Uua3YAqwGiMDQxPxF53xuPGxiN3eEA5EE7DD57nkJWxuBkyGwxnf8jjHMEMS1CxQ4F5GP7godY2mTBWaeZqik7f",
  "key9": "42BbARFnWnSqEcu7YDcTnEEqRD9pe4CsXrZNYwR8NgKB9X8ZBEMX9g9BJ9QvRWcPetKahjDNc33gvvtQqRX5s5be",
  "key10": "2m1b1uPBc5KMeokTZvxHGXSApc9d2PSnRD644KBPJtTu5d8JHMNJpw1FEJRuTYKr2jbkCnMYYQ59N7M87RWKzy5k",
  "key11": "4Uhq8dBrikTdWH9EywMpz7C6TGzcAJatdNLW3LdU75hXLEgVHRqJrQAUey6Cw67JLcsNnV1Wtbjv5uRnfBqkGYrP",
  "key12": "2LbGtFJwLNbLt7rEtybm7TKTriQagLFA175k5jTUkVSkTsc44dkMwFHSADyTGFcnw3tewMCA4moqmQQkr7mTLQQg",
  "key13": "HnzGCYNvvaaZEnrabF4Vebq894yJRjQfnsHiNEXS6wcyu6vaPUFt4BpuGZjH2jCNJCCr1rkpxQNxMMwBVGgSWqX",
  "key14": "5JUGRNGscZDuJ7qmqXH6SbvQ7XRKBSPJKxcFr49H2tWBFpZZRcKhpg3eeB3Wr5NMqBZRajAsbGjqczHpE6bG2EBh",
  "key15": "5Zk1LNCN3oLZDZMXD3kedvFqn5ZpMb4m8w8nDFs3SeyoFFLwKY8YwqsotrSrYfrhodtSJsijCJp3ioy9i19tzqU7",
  "key16": "QwHy8vdnyX5wdNcPErDu79QrqNsUCoXTL4wV5gJNynMwSk3F72tkrYa2KUQ1C6j4mEc4LpZHbyv1og9DGN9poXe",
  "key17": "4CwedURx5K2Qf17ibNezw2GiLRHHcdyn488fvW2tWXiTbksMjKkN3NvRAr4DwuDjf5ndg6omaPgmrXRtrAH47nQN",
  "key18": "2QjaxNUCPJgNND2dEgGns9DL2XG77nv3SMGqmBxNuTApJznsKMFsuDVpPTDQt9yGpBCR5cQkVdkH1JX1zyqBHWiM",
  "key19": "4FQxgHu9UWnkTEmMFo3G1oCDMowAEtRviV7UNw1C9f9SxcygqnqLsfgE4SPL2YCC44HbSnBVa6T7eZ3SWzSAV2Li",
  "key20": "5j8XmqYGk63Nm26bXsHBL4gNEqLoAFDJhrrVmWSkrknErm79V5sacR8iesRsJaJdRBJ22GoGLhz9EXubjEFCZb9K",
  "key21": "5ejPG4mtCPha2yheEgxVYAokEWBd5d7E4TmtHb3eM7C2fdKERq1UA7dYRNqsDWi5FBXDFGDSfScn2EyauS5NSmba",
  "key22": "5fankjhtZbtCJXXx76LE6Rx6NdJ3wALyTRJiK7hvuFT6D6pAUyhjDnXFWeU1WwPWZEruzFbHFDgH3UEzeG8uaSrZ",
  "key23": "5iwkLaN9Dm6YwZ1iDnTqiJr8EGHQixerMLEurgT2L4jC66kUopukDu1L7fb1GhvqVxHVKEVpeZ2Y6ntH5r2sP84Z",
  "key24": "4ThYv87i6QWQDaMuqud6Z8C2UHKGKSF8d9hSMaSQZaeJ97PbrpcNSs2uPm86reU5gGNz3bSVSJtKoVH2fL1gATzg",
  "key25": "2ANW8cXB4rZDq9fiuF5vGxLgp4dLbJDwGhN4yyY14bxXeD7nN3vLeYXdqhLdydbn7rFspnqfWFhKZ8z3SiSwVvTC",
  "key26": "4YZ4t7rBjC3SzTxgEoGWQnrS4gW7oMEmk9gtvLMnDAfvWuGm6bVwKWn7NiEirPCsR85z5fRMbKMNGeLymCrweyQK",
  "key27": "kekbQYZpvNK9ap1EYFtmD5Yr8TSEnj4ZeC2gXN2T4xnVyPo7kWLRsvdukyvEhdYwbMh4GMFFyiWcoRXcPwViZVK",
  "key28": "uES8ZU3LhPqEcPBTJ2FavQuiiW67cgcv4yJ3phuGQAisoPaB5aZAXQxpRpG17tRxCTzKVaMgjnnTAyGpWxT3RSa",
  "key29": "2Krxff3Ce5sZW397LnrYC6Ba5Y1PRvBkHZEuzKqpejdr2BhiBRSm6YJvqXV9sdgNGyLXeKU7MpnWtwqhExeRBvbr",
  "key30": "3mBeUzfZhPhTEEAsqcDv9NiZnqQ9VfppnxuB4QevqaWL3Mhey3Rrt4ur4rCAAFRgYWenCsWLfWkUtB5BTPBf2j2A",
  "key31": "KtBgBHGiKAVMBHa92BF2ZpkFppKc8m82mdk2J7tWk1bcfHMp753NUFYSjAZuxUpT1RUeQTC2xy8vj7b8yQctSUz",
  "key32": "5JVLSkHSYyMACvxrKvWhCFxhqcngr35pLJAsm4TSMXQnYdCTQccv3PshZyZQpiwZfHGf6ASUavF6k1roLPTyt8Y",
  "key33": "5imieW9q7qrKFsePCMx8yWpMYuZ9ENEZoc7zG3Gq9sVxNEdu6m1D13H8h1Dw5g8yv6Q3MFyobw3Fgxy7ycqAzwic",
  "key34": "2LAmjSb4vg5kwC9hxtPFx7EfreQfPrUPCkebyLByUPUFv9Yddnq5iQtKiUR52vVewxE85DyxssqBqjirMWiMTS3D",
  "key35": "3BcXhpN1TDezDccu1Bzty9ZuSQ2q5et4tDuH88Zd1e6pgzNpf1M7zVn2h5LMZ26y6SU591zop5sqfasaKxAuAW5r",
  "key36": "5xsaXJMKJdkSyfYhSSJ2TDVp21GwKTziLkPWrsAHDiCPjkwemexUY8zNwRbu8dfS87k4yXRQ2qb8tnS1DtTrC4P1",
  "key37": "4TYV7wuh1U1d2c7USwBALfjmuY6MgCczGwKd82SRgKYVkuVmBjgqAs6ByUGUCbFKUa3BwADHmLQF8URVRsBfVqWE",
  "key38": "5TNDTt9QkzPESpcYJeK8WW4SP178s6GJuD7bm1KaHjJfJbQK1oz4HuEUyvtvYPUKM2qt4eQwMBUFoNHNLE5JRZjh",
  "key39": "2iKkufHoEHN3qEbeubY7jaQNN4LrTKLL42sw6DjV9yPy1tZxWcyqNJYEhP699ypbP4RP67mCYE2sCpvwLTXpYYGc",
  "key40": "4cibom1TzGnZgDHaoenuAxhbeJtDyWMyxbHSP9Zy3iVRnU6XntNSnbAFDPooyPjYDJRafeHbF6sikYtp6Tyqt4Nz",
  "key41": "3i8aQ4ruMRi439xGeXWgQnzLibfyfFQ7N5MExSdwRdeJTGv14aSyRgg8uuWECMpKJQHA1xEMkmnW3tYiXQh2cNnW",
  "key42": "2Wi2pMytdAvSUhr9nZwerFLthV5DcrWPc1VpQrphrNGUpPZ73hewPQgqBRgWPbNdNs4TcNnbqi8aEJQyoQ8pRnN7",
  "key43": "3ERzJyCpniU4NUtpF2GeEsfHtEg5PbPXZM3YPhM34EfkBRVkqJADhaJLFRztXuWEYC5cwLuXZavvtMWDSS2nkeAx",
  "key44": "5615HKr6z3kZzonkZ2bKU75aU4SWG25sjjJSQjBd3Zfr6BeTCB3s4cuAYxSokra8SzYrGZ7djTfypjtELioUi3Yk",
  "key45": "3qfwsNF4KjcBNkLh7zm5cJRjTDnsYwpwkKuqdYtXHvjBbQnnvTVeBRe1nRgDFKxA3u148m1K9bS1YZrBPX37Pwut",
  "key46": "Axoh5kRNiG5MZVSis63CtroGxZv7zoikLeJyQEpzvXNk5xurSNg9Lb9bNvfo5hfe1jRg7Q73A8VBv4E4iMVnkNQ",
  "key47": "35BiY4doJq7hBL2THpmhV48Dgt6URoAhx6b9Tze2v6chzVVdXNyJfeGUUWGmUzFDFF1Ak5JGJNFn6SgXc81CocnQ",
  "key48": "iivb95eqXMTGUVu2gBfHx5r5wwJrFT3U7t1eLyNsvC8eU1R9x4e4TtCPUEoo4u83tzdqLXQaaxLMKrQsVN1nnKp",
  "key49": "2YvAW1RDKcnUV85eG424vGmyLTGjBRZFzy3Rxz4KmKizUZn7PXKy6GwVBjTh2fzJpoxGS9YEKH3Ce1dD3nupKgR2"
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
