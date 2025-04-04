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
    "47hb3hM2Zgg4vk4DPhQX4XASWh9FZ3rnNsJvBYHKEmpdddLTSLFaQbqmVe3UjJEFoPdicvzefFiMywSfDd2xrMcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33r6XSenBxz8pAU6dGgsfszLndkopyVt6H1uV6cc8WSwqqkgZ3ezGYw4WzouqAPHXQGzFSSnQKSwFvJf5wmrvgpk",
  "key1": "4KHUDt8Hpxg1dCiztuWighZz1t8KrMSWnAArj8475mSu9bpWaSZkJhFVTbyHHPqB9g1uMr8RhimXoWHw5TDh3NmQ",
  "key2": "3PzFRBL2eimkekvqPzLVsEf3BTa2C5AsATwj6ZiraZ6C9CsgAGkMoXVDwaLKLsLaDS73YFTXNLwdenaqgDtSraVY",
  "key3": "35CU2U5H3mWBgdMFEBzuXSWRLJmznX2A2e1A5416MrNCTeRCamCV1RxAhE9eR3xTrmtfsPRdK6wwQVByZnVHTbpG",
  "key4": "3APBzt1vbdNShDKcdjR1Q5w76ZVfN5sDW6LVh2Rc69ckJgjce1vHpU2RQcKfGK42rGJE2owWH9Vw6UNNZRcatLa7",
  "key5": "2VLGsJAfL35nGDeCdiU3eXTyRhSEyxNwivYMpreGZhdtJqb34sdumBid3yer8KJkGd4PGTiDAnNL3ARPddpX3E5C",
  "key6": "5m8yrb7dLZMrTEKdu46RX9gGtNuPtTa5GgKVhQKxEFzYLCTDjgrtnnkZ8ZUoF9UgQuxyiFNwmfDzwsxUB1WTqYsi",
  "key7": "5Hqfu9BVLeGrag8paugjsWAvwUzxvWyx1J8spZ7eCW3w7Ne184BLXznGG9AvrLTVHiBwaWNVHGVnmMdL74p76dTG",
  "key8": "5hhpj5QDEUV6ucjys8JnLEY5XzoRr5ogDjJBHXAvBZ6QpfkDsr5YrHFqJcqPq3gVYEQmF6uJrzptuvoZ22k3GW5y",
  "key9": "QiMMD1SpTo84MkkTrXCcne5ZbrDfwbHJjcgc7DKhvBpwwTaFKWMUj8x6e22simQZ2N9jVHVoJZZ9uxRtTgGnEoG",
  "key10": "3SFNMaJFANfUJjqbrr1yGTXrPwBs78LVyNoPhgV14ch6Y3pozw7ajNGLdMNrJGUVd8ttDdDWft6uzMe2fbF26dmp",
  "key11": "jhYid7PPZBront5qfNN2ZRXoceXESuifK5niWGpEFbue1jethrF4B5SeHnXbgyC37zbfH7BCwuVcD72qKA6vSio",
  "key12": "23Jzdvhp2BNAJjAqc2a8bjZRpY6pPLMqE7vwRUWGcC394BzHHv2YU3kovCdJL5t8zJ2DQpRTKhorwxTnfrvpqWgb",
  "key13": "5nMkxSXrqE3ZZ2BBU5zFnQcgcbHcBMPd8xiGDrhGyEHBd3U2vzRvQEmsb5e6Gp4HhHouUpYW1hDzCYnoFUViBNKp",
  "key14": "2MZ3RDbdpjiRRfdACiG5m5rKhkVyL7sZy4iYSBrwtpBqFELoZvuEac5fjcGXVdo4RoEvHBdfxXLL6MZX9uLRwAxo",
  "key15": "3niDrb67sBv5NY4ZY3P4wrpTKifu3gkHGW9B7L2mmEFUfpSJLapDyasyhFhQGngugCnaNraMkbRfW8iWQwbPv71p",
  "key16": "5m6Kn8LdSC8eVDKmc6qhjjdHeaNYErALzBpSX6P9SRSNXtjgBi1CG4iwknCDrvmjZoYKS5KuaQkeV58qgrssQi7R",
  "key17": "4BGzzdrihJTKhwEJkyTXsdYvhsZqWkBFgtmxxYYAcVHi6aMDsD219zih4QNwNGpfRUHmHZdVcRz1kADBBpAZDqzk",
  "key18": "22nHjvSedVs12nK5YGDDE525wsBKtDCLduW48gW2fv5fTwtPNzx9z41qtRWtssx7kVqAwnHWjkP8iSmBvDWMvuB8",
  "key19": "4BNDQzaNY9YNYrvMyLoqpxzb1jmTWPZvGvZZF17B6FKCq2cfFeJZW2NQsViEzyAn4aGpFFQxnzEiUW4SPpww54W9",
  "key20": "47Nt79NyHqbSRmne1REDJyk2xoTXBFKx5Co11fmuxzyaaxquEs6CahrAoNn54qCNm18f72LQ59HN9HVmhNnMmxpR",
  "key21": "5uWNGaWySfmEjEt88DFiJiXpnwTjqFTeYwzH35Wp3apKhmvBtEczzKyGdSsKdVihb4Juyfsptbs7WsBpK41K5uCq",
  "key22": "4zC6ijLYQRN9C3k97eXe6SvH4YXsXKMdcvZUqnXM62KMgim6pfAaVujXQmoaQ3fbJvZiXEpJU1ZE1kdoNDSSZgT9",
  "key23": "2SsgepTyqdGDZjqiZY18cqbAXLmhpk8bWoFUTcHSMpD8vejZWVfecDxE9hxXy7PjWqDJhDnUfn3baEsAHDydPoCq",
  "key24": "5bxKz5W198x1DKaJUfzao68YJLRPMgPMGBf893tQsVjvJGXxqT3faQEF2TXsRDghxifX89cwLECtrQSXhvUoz7kx",
  "key25": "5GZdPcBEnACsiCEz2toRCeKmLVjUiGvCPpdLYB4GHmxfQFSBY3taUcrZe5KoD19ZB8BPPyp7aWZ1Ni92zc7ypNEZ",
  "key26": "5jcyrYJ2CeZfCj2G1VeTFaATszCVXLX6esontEEn1f3h7u2uYbJ3XifppWKEY4CRTd762aU7K2prsmqwTNiZUz2s",
  "key27": "5W36gB4Qc8KQpMz24erZTeuCSpVGLTJMCeppvkoXK1p9hSzdwJpsekf7BVpjTKAHV6ZGdre7w47cspwhkTB57zLS",
  "key28": "9kYPqe5ENVdDjJdrBQang96ZSm1ARYFPY9S2gdiob4E2T1VrFscFrSAkzGKEyh9kQRdwUrUAe1UPvSUuHfV6WwK",
  "key29": "4yWRPGW12vig2HLR3PPir7Tc93Rs4ZNbPDEG8rz9hXpUrASXwFR59D78KNoGoWzeixB3gZyvegMpWAxYZBMHBoiu",
  "key30": "4Wcd6MGmph2STphzkBTmq5thBTFHf2ub9NFh3RoWFEzaTuynw6C2C9RxuH7Xvu11wW9qntTPnnjCCvj9Sr8j4TCM",
  "key31": "4Pnxa5WR7cJj12tstjCxYYfCmFghSjSNmV54Q457XdtZCyaNNWAwhkePqpWJKdmf9M16Zk58EonVKNaVnjmopdot",
  "key32": "4KYXhE9HyKJgn1RSVpER5UsTPSf1gd57q61V6VvtLszoFSXcXSQVhCAqxJft1jnCxf5drxb4yeQNXzER3aMV7Pj",
  "key33": "3ya9NiRE2zg4sG6qpHFg5fRBGhXX2DWhptATf6h942vV7Q4TBMcTK3GT28JCPRDf7azDZ1GEWGzQm5HAGqnADmp7",
  "key34": "4oVKtrK2V5VraXAaqhpEqXE51ZknQrhB2NoniiyxMePuVK7t4jQz4vjp691wz4NiuwvPhMQZRcqQfKVXk6STM5DM",
  "key35": "4s3YLMsLTfiUV6UhQqhGYG1zKwvEvQRrVB9Ru3d87GsSc6JRQWPzW6H6ZAVRAFcsU9LRRrXfLev525zFK9PbJZEz",
  "key36": "5ZvL4UgD2ozaWEecGLdjryKqXcNDVdTwhXvg67deKLp8FfrLHs6rjMBEZBWukjvu9Djfn1bQvfJEx43JG73KS67M",
  "key37": "5q4U54tWPoMkVMVaQUC6EVjqY4wLk3rTNUUTNyomxxsqhFXn78BriZKPxHx1LepgmbXoiTeEHaUTt8i6PQ3uprxp",
  "key38": "2ktptu1pxBq317FumHHMhHGWzkVefrSKhCPjAsd9evNWVwfHfAyvwMbv2AFcYuP7Ls9s4n1SMKtkBxjXkkwMK493"
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
