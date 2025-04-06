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
    "4GCEXaSUCpwQuNTZK8vnjDKorxzRSeGW1hGNbP5JSoKbnLZL4LBXw2tqj1c85KXyszeYv8ZeFzSgtJ3KvszDjnpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hS4nS2yc5oykaNvmeaFoXXoBJ8kyHgEn9Q6NzpUU7132eTj4HEkPWCeetPvnnYpyVWLDTgEQ2AKe4DFakGPt7o4",
  "key1": "3eNqpgUy3W2cBytZrkeZE4Rb7oRHmPQuzajwfhcrx3DKX4SowrRDffWYMYEtXkYkcz5wPTNDp6bHfBmGsaB3g5az",
  "key2": "2hvqshys2zdSFuMCzVst58XvVhkQmGnyL5iucyJFdg3Bm5t4JyHXcTTgzySNxvnAYLNjs7yDesZsHabghpWTDFfy",
  "key3": "5D9dCY4QdkiCnqAwwEauFGGHaq1kjQxbVFy2z3EM4uvomTQ9n4pG9EfZXtkRQNWZcVNFMS2CBF9PWLqvqgq6v2ZH",
  "key4": "2gDSfbRgV1FTdd2awFjQuMopu2BFtqjRZDiWgm35zEjkiqwfoFwfH2Ui1fVwoNVUVfLCaXDtPkcuoddre5fGakUr",
  "key5": "46Qiov1q1k9LmYSbdjVAdUSVAVYxrWYBRDCBf5AKxPWhPRiREMs4f7JgxdJGMRtmoJgAYdh83DZzagqXjsEUqxGx",
  "key6": "5teTw88EFjyrzmMdx8QiyTk7RtU2HUEEit8r3xT4QFEFnV6svhp59yzYynEWXm59JG7WuN51XorxkGwNczajW8RG",
  "key7": "2QDXTSa5AVCQADTC6tYrND4BCmgjfGAGZ7WdzEF5FkC5wsk13QXAnVrzKKet68LaYSyEbZNptyqUMeoH5m6GHy5Y",
  "key8": "3sGPs2kkmWRebUt9nSeUeCzKnNizzdURW9gwG5woDzUvamWR6HXWRYV3BBFZMJS35uGrpeRaPptv6p4XbL8M3KD2",
  "key9": "84cQKa7tTdQixecXXFe9TuYHqzZFrGEBefJJJVHN9ifWdkNj2KytEmmYjp1NSKh7XmuP2Wrx2qyfVTETZjnxQyv",
  "key10": "4SfP8NiTSw6M3a6cYchk1TbDkH7bzm8GqntYinuJirT7sfbLJ1LiZLuXgrLLGj6YQXZbfKaSbpyAY3pXRnMcQcrB",
  "key11": "2fD4zWhcLTFsbLgpamUbFdE8wsjCcNMspxQeqsHVtwJvn5Kn4QggUWryhWqFhCSrrGk9AELQjQEhGhZxLhfUKbEj",
  "key12": "31aMawKxFzNpg5EgvBzWorW8ZDqot27u9CWgQ3cuGghC4zM7T3kdyRsBuwJHXSojdxVZsmeYN4g7FHJ7UF9piGec",
  "key13": "571YFN3dw3XRUvUJCZqhEoax9KasBiV5LVnuAQ9aNkiUGgP42Pv7VvTXJ2cv9R4jvvJ37877EUR9XPiBQihBnAax",
  "key14": "4PMmszgCSQc91ewHbUZDcvsuhq4mWgYuZJKyt8N9JHuqTWNY9YCS6X29cTAKLiiLKaSF7CZDjyKQkYj1rqrSii6v",
  "key15": "31X49Wwdc7cQhNvnXjdwAEwpRQWpiLKJfqD42Jqnm9bjtRSEZqHVH8bDcwhEPrJEj86fpcdnRHSMgVdbiuaLNE32",
  "key16": "28zNrbcEzDP8ADzN1LVbYSq8sN83bazwA27xco2A8xQSRg4jAqP2mcgWqcsaqwGieNLPGxyMV84Bkp63BPstbc3x",
  "key17": "383f831A27kizQJVzHKzK9ganAsJEXgcPjhoVPPTz52DKNjXeNPsRSEUA9sdwb6AgdQBK65pDz4Lei9B6xuyC3Cw",
  "key18": "4Q85JUosHuCipNoxcfCHBt4AHXaAEWpMYUY62K6AEk6PSUkKsGJTVV2BBeK31smaSSzm5xZFmxiWtqEv48EYHeVJ",
  "key19": "5Ukc9GZoGRLz9jHHsL81hkG3RjXb8seLZ8vUGiqBHmPnx1emvz9rUKWvA8N7S1sHaNcHrNn3mYdBdPa1tW2Tjicw",
  "key20": "3UFLKZ3UdvM79ZczXaamwM3h3HSXmafnnu1SyTNhEj82dbEKBzhg7rKAS8L4r4VYQjhvhEFp3fZ1EZQqyscJ929a",
  "key21": "32HqqQ3LjYhqpvWajZQbu8W1N2e11TPKYp6E7YMtiGNgZAfkcgJE3zL4xhq5oVs3X8JMqWf2yk3uY4NE3PymvHE2",
  "key22": "2Vw5XR4TBsDNPVGDmaT7BzbFk9QcjEhf5qjWBtHTLXdyJDsHCcjzjk5VFd5buqqrqZKjgxP3TtBmFdHsDL6JNXmr",
  "key23": "4GWVVV2jnLRBh6xpT7oxkdqLLqcPC7GmVDu6BHK7yVED3zsX7GSbJqiFrPDpNtvDyS9XC9MmRevWmz5DdESoCiXm",
  "key24": "5WqKXMqFPwbme8HULbSyGwFBE3Z9r2We9oicesgNpUwRyCm6NwkPAGwxLj8rByut8BKecpmAtFNNJt46mTAwhKXp",
  "key25": "qu8EA5xf3xyFykEebhBpNfDMJYQ3DXVegtPpfrJASMqG6j7dEuhh4aReZQkKQSTJsQDNJA6BJFEoak9MLuDKkqD",
  "key26": "5akUboLf7HoRiz5LJsUFGCcbhrqbjFXRd7hrHV5p4k1RMm9cQiuAbU5j1fNbegKuqQz9Z6zss11p1ZnpMPG1JTqM",
  "key27": "TdEejzztrDsXqbsWDHa4m1jEhfDJr1N5oBQEF4UAbAnaLUcXWEKKufZtGH9Cn1c3SbwANnjkSb3JnQvaMbjjWao",
  "key28": "3QjbGreaHp9jdEUAcNWqSkNSCikKczUC7RKUor4e5yp9DF5RVCAz7FMLwkNG7DtxzwSPaPXde5XxVMnfQokM24xA",
  "key29": "271agQgNH7LQcBod9VhvBZzPX7AG9zpEXWpyWeaFDA9cS7ZfcMd5LemdQ6SHAnYq8BisT4u7EGfUEtoXEhFXamCC",
  "key30": "Pk2mXSz3TWvivSB8rJD5vtSS2HfRMnQwZr8tzHudhb1sBVcF1pC3qB6WYMy8GSfneM7iAVZkdUWtb3YZnxkAUsz",
  "key31": "2NRcyi2sy3PsgGxXVa95rR2LqAnMRJKDCwtB2kZaATWvQbJ1Vi5UaceZmkQcsSK6KC2FukL1sHc7dGr26hQzuivR",
  "key32": "Q6X1Gp2XXbuL55ZiFpaZdY1Uhgt1Q1a3GbDUw1HLJFzbDsRoDpvDKQvvgLc3RJzUdgVbp43yAWmLc4f3Yy9eeby",
  "key33": "5KdUgNTX94LTJv7FysC1TiAmNwVUYmjgRypkJCsf67WY2YQBRYesTRRjS8bcwywwvPGTw7XVBLdqyHVAMSDBqAa4",
  "key34": "5j27doZsHzF5KhJRmDYKsnzACV7484EgqTVV14xBDdpv63X8XjLk4kG9WrBuDpDbfiBeLksirrcVtNUDcodRMQA6",
  "key35": "5oEXsggA9QRGQgxUWcpMDaXPkj9fGChR2nHPRKuvURvP3E5fFpuVt2EPSXmmF7erNV8VuVKKMHHnMCSiEBzwMBcj",
  "key36": "5Te9HGJMhY6QGR8Z5AyKQZ6W87MQwvpEzhfX4vYt1avY6AWviKFCWMrtkK5opYhHEM2Bh92y1ZaQrPNrXJS1usmE",
  "key37": "5kqs1C4aAQTvbrhmvHJtCzDtck78VmBf9frHWL2kcxj919uQrDW26fsN8qWuqcuL7RpNYaVN4WYY5XuAY8NivNbD",
  "key38": "JR4eghhabaHktcENaeBGakSJ8Si25bVhwEouhJbJ94kWpL4cJ5g1jz8Eg9qpSx75AhxvRVaykivPzSQQ7q1YXoM",
  "key39": "3MV51koCajWu1u1bD51sa1tWFBgrWC4f5Z1VUrUqgPSBwDwpfDLKwp8mZ8KdMhuXLWnNM2W4VKtBmiCjm44rWC1w",
  "key40": "4Zodd24CwmeYnTwdxnajZVA6xqUenZ1bYzhuyGfuEFTvjt5NiXtq18tyKuw8HLzMiTvPhvHAVNjG19nHRK4pqBRe",
  "key41": "4BTD5EdQDDtChxv8Kczt1Q4wXetJoSaX9uU24XsZjSQ8hCjb7iArPvtnqPG8HxuBYLYJBqr943ZjpvjsoAcTsYPW",
  "key42": "2cc2zVuPssF8qSrQJApVSaVXuwnxbernyijSEvr8BnqDtFF8nb1c9SrFc5MS779ZMYDiuhKNv2XV33GgQz1ktL2v",
  "key43": "43AaDGoiV2jrZ71DrR6L9exBfN3rCqb9eUnyGZpASenFrMb22Z991z4xRgm2TBvRkpjhcYkfJ9bvRwsMzKEXmNjm",
  "key44": "2exH12zhUsose1by9KZaX5mzfzpr2bkhicfHwRhwppRghPfnmnQ2aKYk9cTppzyH1VH5qVxpPdkjbgUZXWboarmw",
  "key45": "5dh9L2kr2Qydin4euHSyn9caSMAZDRRkMQf9iN9uGNwEn4zmPHCgom3V4J8myLALbSVnhLQ8cuWLjsZFLkEqTxdh",
  "key46": "3jTQm8e4j8EeG7xhKJMxTrVHxCvszrzUBWbuKUexHQ3vQ31VVcpsVCmmPmJ8VtRfifK1HG57NPRYp4Rbyioubtp4",
  "key47": "37GvcFEQZ622GTcv78yjMKFkDsWEXLKLWQn8AMnkiwsAQn9vdY6zLMKgHJV314hwXp9ypxFW5WByrRGx6EDKRDS3"
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
