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
    "43nxEgRoqMcLQnRT9eSReST9Z52D57SdREf9HrMS2hu4p2kshuydRz6qfyAQEH9nTZh6BnimVhwuXv5Ge2FGTDuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xjpjkoNwmKGnDpyroLqHpCfeNcqdGXMPkxcZufTzPKrPLYFTLFJpNQnQiHBGXysS4iWEBEjnrhHgg9GrtZqfz8",
  "key1": "4HaaZqhVBbzkVhtZgFa3phYpzyru82xo9CcVzN8K7e9fkfaEHaUirCmAa7facnF9eBhvfJyqFFKScMN9LxoNwW2o",
  "key2": "3iv6UPYxLsK4264strjTdfU7vJWvGJffLivDb2tjjrY7WnsjmPT7d79cPF7LTVYVNtFyZH2ho7mjdHtRyj4rRuxD",
  "key3": "bsCFm9PuifPUrAg4H3sKURt4QPAHHsbKZ4w4zkhTAjb1eZ9Rv2gQPQpZ6VBG9ErzX9eRbaKpo3vEp9d4aJzg8Lg",
  "key4": "629qbVH27rg2qyqmL94R6k3PLLUvPTEPnKQaQ3ByoCmLQYMj8hFXk4Bi7H6tteo6DmxnHsD6ykRno15SeSbZUFky",
  "key5": "22nzraMmwDyfHidqSmqKHmK8HBfHy3eRu9NBtLig1fvpPxmms9ouqmVoZ4eyoy5eNNzdJqQCxMyq7H3kDPoj1Li2",
  "key6": "2k4aJaPPo8FF68cYUh7kLATiTonQHzWn8zfe9WYUZ2QrDLDASuAnRTHdGYqjMpKcpF4GdvALFv2CYRG7T45A32WD",
  "key7": "3MUocyfmxmtoNjSjWmzWudRfXJTVunqoyhVrzZqqdM5LdqKC5NxJZKK3VWMMxZjy4zPcYna8nrVos9PH9TTEdeBM",
  "key8": "NGtvPc4wzL5uvm2Qft94djKq9h31uyQiH4o2hDdZGZY7qMCDaAbZrveXGbRf5SKVYwBZSvfj9MNU2VWpj3i9475",
  "key9": "5ay47Qo8NiMvbwKb5Rx6hzQirGj5Hv1B2LN7BfgqbRHJUw8e3o86cy1odPGXwn6su6ERnirg5f4A9RJEtP61JhK9",
  "key10": "4gQHRTQ2WKPK51qDL3ytJtt9gEyRpCNxqNjC7SekJTQyA3aHUupyETFGoGGRJXcrtBHVo8X3bHF16HxZZQqPdriQ",
  "key11": "5g8kcqaBGbKnff5awi1FcS1pm8riGJreX4cUyUT42mKphVpAfys2KsTsDqeyUUeKCASH7r7TVtsTz1TeLzFGihyg",
  "key12": "441hAaS9jvrLx7gqHbvBcYyM3ap6D6E2k2mPrEpxzNKEErqVgBG6WFPm2S66LscMAnFgrSJhDDc3Un46rg1sgrFW",
  "key13": "4yd1Ec8C9PN6jo5gJvS8NdK42xskna7yjXN4fLfXPkBB7xuLsJSLhsPARzQFSg6X9WWv4nySgQGqVevAfm8XnyVT",
  "key14": "37cPfJ4RmoXFaaAXvRmniPyDbfBjuBsaYtuLsbKLqRQ8JWXWZw5epK2ovaQeitUfRqbrrd1WYYzsWuhMAGznSu2P",
  "key15": "3htbTqzBF2pSiwXrPvDyCcfyKMojpCwhkzNAbmaf2SwsnmHtZUG3fZTP5jkExorF73TkxNZtQoS1dbFQWFu1efJJ",
  "key16": "M6SC5BtkBUVvfdsC2PCtrQpgRzC2foy6gAzznZJ6bD7WCHYFyDN85BQczSWeJbqz1rZQwr8XXaSZYEtVUU2ZPf4",
  "key17": "2hmVcw8oSfoX9EhjjcALPSyRVmETbj6RkLyTTeZaYiTdZkmBNd4oEdUksSLFzRYYAq3YasgRoFG6gEuazDgHfYey",
  "key18": "2jNNQHK39NBetFSshcTzPQZMuAYB1Nf9GQBdRKLCpgyrtremcZmKr2VZnKhjp9f5fLsgBNFcfNZYqymKWA3nArFT",
  "key19": "5X7XyFWVt1R3EFdUwp1gChytDhQj8K1Zq9oXcrcqtqDvs7FctGu33HccPCQsHUukSQBh6mdnU1qN7bKCREwufsrF",
  "key20": "2txd9DmDmdGLVoDHw2nHXpiGvB66TYEr7Y2FBSw4YJ4bHFECViCjkfeFm4Ftc1AWCKSZfZQguVDEWupQPZJBwMTd",
  "key21": "49HPtpZVi75q7beRi8wvevbbVwQxmDt5hgRGYsjETdLW32U51xF5YK9G3FTMYUppynhqRPwz2mY743Kbd8m8TjkR",
  "key22": "4h1X5DmD48HSXiyrNDZp2mhNR7berEiH1AekDuCjJixL4pZuMqQ5BHhkkiG2KciD1ahr1dLpXkkoCmSwg46Pejy",
  "key23": "2fEZEimmfQcrMLBJCr2M5qybQKQn4ePrJ9KSCKq29Zrs8P4rJzyDwu1EewYaBC2PN2rbRhHUP3xxjevULY1wnHS9",
  "key24": "4cKU9oaus1exAGErGRmv5KXaF57W1JfaGq1N9PPREhiVor6ZLJu1gfpAywchsMh13usXAQCnbRy8F8XQC65J8ejJ",
  "key25": "3BVcYekvugRQryB5bxaXherx2Mf9LyAxHU6f2kBL1QtVod6iWTsW5yRkZnjpef6i8pH7iWDXyBm83eMPASPW4sir",
  "key26": "SMM6LJ5TK52WsZ8zr5wE1995xvSwz9rFgZ19kLbfR5CkkSGUpKak258foSdKTiZyWmJ3th9ZBLCPKQ4hREYJQmD",
  "key27": "2WayG8gjKiYufiPsAeWp6JQFSzgSnzJSSuryoJDW69R6cDoSEymD4MP4FNXTb5cymQDHHdXBsPZcetfT4aSA1aze",
  "key28": "5WXqw9ebS7NJNMJ7PxkCwcUg7jEobbJZxGVJmxu3RsgPqrHutgTDErJM2Fqk6saVYNzqLLqDGng1EyFkVXDRkDDa",
  "key29": "LCfEgCYwWtzv7DGCv1e3Pzr2e7KdK34numhJwixwVpifuibTWcsaoJJwz6bpSn9kVrkQnA8A65CFHvnYujfjLys",
  "key30": "mrencNzU44N5LEXf3d3ejsAcXzaZJAwtMJzBiWYVa4xyBWZod59XMRNQjxZtEZd9NApqyzYmoatJxGnRLRoAXPS",
  "key31": "5CTV4ep72BBJdLF7YB4kNJX67XUdDufTyabjXhbnRm8EXzAyuAgyaE9S6oeMXCv4mgKu4E1XL1KinYf8EDEszTeD",
  "key32": "469GwqahFwtsWhjNpxtSfhpwwhX83hVNuSbcEtqDHeHcu2LXyR5tBGnVyN1K6WLqkBSQZ16Up4BGoDre3j8x7B6M",
  "key33": "25D1aKo6e4bs5N2qhpAqDTggSEcLQao7GQZzkypR1yHGdesWGAMW1jGjDM9oJrzVb56M1U4hvnUVr5akNSVFNqDV",
  "key34": "3awnFCVdzziVB8HnKZaNHwepcUTpHrd598uC1Wf5Zx81JWfrLJ7A3uoWKizAWxmXmBqsHQwXAUeUtq2U9hEU11JC",
  "key35": "2DnSzC7VQ3tk3XbUSHVdha8Bsp7Uv2LxYX1LJGDSdxtYkgBziWs3MVFGqz2RRkLy9JZmJGmMRCK4yabTenz8zWn8",
  "key36": "2G1F2qaQb3oRURmCRyF8KKJdbeniFoNPdGghS8ANdrKmBWhPuWpibXmt1LfpTfWy7a6QP2Di8AAaAEqJPHgnBXCZ",
  "key37": "4XUzEaqu9r5bCAg5sUMN2xeqv1FUYcGxz2pUQW7HhrMdYNa6bVVV6NMpBJW2CFdQV6uz2FajR1GqZxVBt3aqCa1v",
  "key38": "3oVeZ6VxQGc96HLRhTVCfX1R9v5ZoGf44ud7Soq2V9hsJ6YhsiKYKiSnm1ASaqDJu4bWWEhz4oKurwGhk2bEyzq4",
  "key39": "4gqsK4NMpQJMBQP1RxuHMq42WHZ9Ps6YV6ELqAAaBcu21cGn7AK8fAMBSb26ukpf7DkLoYYunHusFPKbXSGTNWZz",
  "key40": "5D6e3WZn7UZeJ8pJeVKV9o4NS4Jn1ZE9dTzAFNnxJtjat4eaVZW5kmZSCDCXa8uCy48m8Pu1ZQuNsHp4BKQSAXif",
  "key41": "42iUPJsA7cFVjJ4xbCP2FMKNYC3xoDvmo7LVwVZdNLQyWgreqoEQxEYsJmHNe9zGJV3wJzLzJaStfC7NPy3kMTAt",
  "key42": "2wd555vmGndLWCz1NuX2xM174drM382EwdFU9ntVcQRccjtZTz7Jb14NWRSYunTRkHh6z7JkWGLdaKw7b4uvxEZ5",
  "key43": "39yjPfS4W9AA6CPASizzExni3rvXqH7HZJn6S3cqBMrYJeyQHqVTN2Rz7D21LA1zPuPg1SHafjuowX4eTCsgnevt",
  "key44": "5WStMeFeLAt3VQbp8CnEZ1wtm5SRFaMc7BpVn4o4DPq1NMoB3fbJURyvzSrb77mhg4qcYdmXyfBpKQyekuMoT8mN",
  "key45": "5nXtMmZC9ytRWB1Lrt6gjxKnv6JNZxqD4hrwnuqqBfLVcGSjjzGtXPR576662gq3Tvhha3u1v3yEWds9hkbpYq9a",
  "key46": "pjZ6iLSd8sRAGLRnX6cCK7hE3AAaeU8iqYDHj5cYpENnZR1ge6BvHuigaofqEDpLHj4sJ1jDEXVYtWuVvX5jnLy"
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
