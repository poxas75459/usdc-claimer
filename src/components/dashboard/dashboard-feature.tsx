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
    "4dGH24SqwuEDrHZnLcR7tgpYkWepYpy1ZsrfssDsFkJZVdzgfmMtPyKcCe39h5a6i3ESxvFGpCxNfyt8sKSfSmMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMWdjUY7n2emjPy8QKmKq3yp8ZWecW8SuTwqYjVPCMY39bbC9qga3XAwMWSBhhjXvaMbfsBawD8AB7dBR2Lak5J",
  "key1": "228m5ZK5KtqMDefL4Rsy7j92aYxgRMLSkaHCuwQv6Eu9s5rSSWMWn1n4uTKyHdDz2JVS1WWcmyuQfRPjrte47XDh",
  "key2": "3DnMkHnBBvh9xyEW9JZmmC4mPtrv3qTNHUQrQHrcVQfTVWKJuwZvtZpHH6pEHXFsmwKnWdYXaGz2WGsMuAbd1vmD",
  "key3": "54teHQVEFDbE9U4FeG6CaKdnv9ixQqm6ZxBwFHjFqkPYvBBvAyJQbMNW16ypsytQww7d3Nvjvtn9LpF7kXTWYJkW",
  "key4": "4gzShn4CD7UA8j2Njmx5t8PnxD3mArngg1zpd7Mzvjz2zEZWr5RMXvdbuRaVStixJm1RSEWd1uHUmhB2WTxKhcG3",
  "key5": "2gvSDJqXTrQ3jtp4TiuovRmonXA1FD6tY9VV7KuUGQnpriE9JTgxdc8qgKr9NdEbFJePqbrB6325yZZwb2ngLDY3",
  "key6": "5aZN95mszLoMxs57apbK9CCdaKBqYJnycKpuf3Vw2aAH8LdSCWSj45GCLscHbgRUUJ9uzTsYGpw99vsMuvoAHZyH",
  "key7": "2SoG3qAo4ewJ6km64LakSN13DndAPAvKy75xqx3nbs3D6dF4XysNfmNRr18k6vM6MAxNMcMrAPRmQa3Hszfgw693",
  "key8": "4KYKQS6X7rGqmek8ZNnoA15s5ucogRQ4UCSCQWcht2wij3hLYiKJ5FeXhC7XTqcN2iosCLDauTeGUJjpbr31Jc2",
  "key9": "65scanRD7EPGALuYk2o7zim7wCrtYGD5rww7jNWvc5cL7EC4urNs4vH1qK5MVXzFd7qbRUNZDao3o8Mv9yJVpixh",
  "key10": "kTbfL5VGPLi92xB6LicAqMYCVsHEKDFGZRg11KyU5tnzo4Mn14cfGWvPtH5MKarsxdhW1FUr6h951AouNtpDhga",
  "key11": "5XFbLbuwe63XV8pE4gbLWb8LtJyZ5V4N13Cd2zLKRPe5WmNQdNvTfSSsXYbALaSfwVVPqZhNbck8rRRcjpUPu66H",
  "key12": "4PXPsxgeMkH7MuUWCAEG9522daCRbvaemBDFSkT89yv5z84PQvRH83FJKE876mGt5JycA7LuHNhVcYvZ5f7vLVmy",
  "key13": "4vREo44k5gCTBcYuPcdJgTspF7MDWt9D9Sn7pgGXUeTncvWWV9R6CFNkVjqzvaiw5XkWvPANhoKy2pqSwWcwY4Ud",
  "key14": "GDDQVsjFiR3QN4pwjeBjeGoEZBXgxuF4mJUvMRLgmi8nMbgp8rUpKsghatmzZzW9q3zRVnt7YQbki8uf7BWb7En",
  "key15": "4WxQjbMVhYJ496WThDxC8TZAa8MuXmUJs8Dv7zc45QUk3Rr58wbab27LNUJvW1hyREQefayLqnd6Pvok8pCpDBDR",
  "key16": "47XLi2FmzGDxQ5ug6gsZANF6QUVtt4Wk3r1Q2XGV7ZnR1E6uovtVkenv1CPbXyjUDLobFTUW1nHtQic6zTMTyMUw",
  "key17": "4pWV4c85XZY8D4yqG93djsNduBPpohBMt67igQsngtB5scd6rgDB68CdoQoXKvXkUwUuVaqbbhwJ2uq5mvkh4rNy",
  "key18": "5SPBiK1djAXYpzz8BgDY7MX68j9yvrWEg4Q7BE6yR5LgfDBheJQJ1UTgwaS7UTkR2UVUq7duaEDYpyhHL2bVodzu",
  "key19": "q678NnXJrP4UmcASepwy8p1baVcMZ2UTnoyfcVtfrQ1Dgbd1MArLAVnTLq2g9VEL2YekuL8JQ5h8aysuGqw9jX6",
  "key20": "4oUhPvTQmW1TnVcGxUy2aSwogP76L5bU3hMikqtb5CymqGACrSCXVuDExwG4yqn6ApgWRprBnUKN7ZboAtmkQiMG",
  "key21": "4ZEGJSuRPxetHM3H3RfoTKqTpCRAe2qEeUJ31BNmdykev6ew8yAEhd1k2YxmTBQBDb2hT2ZomP4YyDeNxFDVU4R3",
  "key22": "2bvceEJpa9ihNwiWFhxDsG64fX1SdZtXS3wB1hRQxuvRLjH5P6j2rLU4Tt9qDisKHF5bjesukHYKAotnssWf2egN",
  "key23": "59GakesJjrep6UF6JtxGPhS8hV5WgEj2NjMtGEuVMx1WxyPSQqktCjZLGZt1V4r9vKzWaCXv3ddZr9rMB4HtPpPP",
  "key24": "5Ubd6VMfqV1c9WXd9Ber6FYd2SdNi8jyqtLnDz7xSJGexTLAgcTHrj9Ld4U6QxP1PDhWCXFqbzZScWdiDQCUMiFz",
  "key25": "5QmJkgawgVrXg8o37ov2t5yAGBmYKC7LzWHYVNo6Syogb5tvyQxJ5FjyFoQYS72HVAqtUGSBEZ4DznhDwpWcHW8E",
  "key26": "21eTtrUm6eKA8jgCisZcPNgyJ4EV3DyBnVEQUB7fd3ySYtZnFbEuFJ9v2AdtvVEKr3hFmACyFBq7ofaybAm2ZuMD",
  "key27": "5GoPtxqe9UrQXWsxUsYcrauKpGZjNwVkuAyxVi1gaTU41163z9rrqgvmAFLUKrarefWqRaBk2PXf6QDFHnHERLCN",
  "key28": "4e9gdRzDBs1k6D5hMaL2wVz6aXqycbr7Tjmu1eSMLaXbaEGR7kBEh2Urcy7hWYbgcNEBHdq3p3qJpXSiFeK1TVHt",
  "key29": "3hfjWZKLGdSZagf5nsZvYxbwpvyBYxXifYFq3VppyXbKvXQidPgjnqUoUfGQjFRUgKoqGaPHQj9jHkGEHWgSZXX4",
  "key30": "39KgpKKA3eP5EKyAjLod23KwhQtknkRy7yewd3TBTBf7FMyQonVN6Frvm8VPFdC5wY72UT8B5gs1WNBZjw4yf5B9",
  "key31": "27vNFWi28w3QkexudgXXQ68ZSb3oTBardjLCRknR5T6XDLVvxbb8PcVoN3BuEhe7tV3HdcGpioweCrb13yqcZeSw",
  "key32": "4zjE4t6U9xeGMToVJoaaUaGcH7X4YM77z6RgrzxedTGpVArc1CGXGin1GkwBZdPse6MrNWYsaWnWSN9kwvAuMAZs",
  "key33": "2cDrwCMpQytKYJYpfjeESSavUkmHJjjuorcbyEQP8es6KQRkSFTy94gWHxaMnLKmwR6cPifG48t21wJJxVpKHVKe",
  "key34": "5c1cSX3SEESTfFRDgD7NwcGw4r1GACb5rzPvuycj51Mi1UiYKH23Yv5yYmBfFYTiGDVFJ44eN4UaBub1miBuGYJd",
  "key35": "35VVFJVs94Xr9Gz79an37uxkVKCALuEyHJkRhAo7qUN4hBa8guqSvPCzahMedVDTfSDAtiQ4XMv1fMha6PeRZ3qj",
  "key36": "2fuhkBbwpyK52aHbRMQvuNorcSPXymr546H2hAMsdaJ292svpbiAhBaWYJ5QMmWukSPJMYxHNi52T6uvmHv5MLHL",
  "key37": "4znZwpjbXqmUXiQuzHn6SXQp19w7QsB9Joee63zC6q7mq8m8FrHA1og9m2vXT7GNmfJ3mj11ZjLRqsB5xFZmgacE",
  "key38": "2HMD3arTJLhNFiBHC6WPVRvkuqnVg3FGeiMLkWXYcdAfq1NHTP3SStrhGCTYtLpSuwpGRwLJB8pX3ZfL4S1y35dK",
  "key39": "5SVtXzvJN6hQeMv1GmVMhfbb5Xn6Zw2pmFkvLB14hdBijYtPw3Z7ScfnEALnSR2gQACeHcHT6RM5e8Gtx4XD6sQt",
  "key40": "21XJqFSu6NmvQb7f72ZotpLw8mtpr4zAxg1XWjy7CGVoC684VVH7onLW8r8ENdzYx93bBSbehijChgKFGmH6y6h2",
  "key41": "4K5WEi3TR4HuDigYV1ggGT1mswTc8QzxhFdgpUgqoxEXkeyVX6xV4CKD8byX89vEtYypZLhB8zYto7gZgyarnHqb",
  "key42": "JDMDyuc1ynqoRKQXZZopArMyYMKuTUT9jnwp1btpnAezwjrnsE3C8VK5qakkNqiVLcdzStWmK9RGAcNMQuJ11Lr",
  "key43": "3qDQDU8vshNofuEoKPgiLsnYjaFitt6pyFWqivvFB14MqCtkWExG6iUzSa7MdqVGPqPTnzvckUqRiyHsk6ukKs3t",
  "key44": "2RwpHwr6xxTJ6haSFpQ7HN8XucYuueYAShzVnNYDDdBjSAjK7zb8WmDMnVsmVuS3H6h494cHbT2HecLTCnD6ewun",
  "key45": "D6rpqw6FzJbduaLxhfySJ5wHg4AhmkRgCFW7prrfAWeykyjeM5GSvZjVKJ7DSUjPcWVvVoMWSkvMLp5qfLvNz7a",
  "key46": "33E14dLdkpyqh6UgCFPwG7874qyUs97Y4UkWo314onVt87KdgYuKVgka18qsvsLbgkXupR5nvS47YcfyViPS1RCc",
  "key47": "43tadiGJRtjkqMYDTgHWqyWkRggDuBSeW9EkemVzY4zEjPHjb9nBC2AeCYM2iDM8E7o9PVDkBdqLBGFxSYJ3a27Z"
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
