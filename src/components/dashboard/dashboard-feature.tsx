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
    "5gd7eJV7J6aPuhSAjrUdn9umVNcHgrivZfyg4NpT9eXPJPbzzu7Euwqz1hE46jGvucp4JKe6LnCcX7vPfCYckKkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nH3FFrdRWNdahCJn5Qqi92sppvyhR6q2tDHdajxvtcahfcHRG94PWujnW6xWGLNYsMz4Dxm94JBxodGhKFmyskJ",
  "key1": "3Dh1GacuBj33rY7kdG2v5HeicDa6gMEdkmzgb7BW5K7rd34wZdmyftQxrBLi1ZFwKHNSSe2BPX68mDCCBM2UCFBt",
  "key2": "4WGX8EKmBJs3yTvLYronvZ9jEVJM8D7Ty9phUrQpHFjkJCHdKfBnZddrjPn2EFGPd52HNYQMacD8cMZYy6gcTBj5",
  "key3": "478vWDgCQ2MbY3hLi2bJMrS5EJhwEVxKHZcJC3srAT4yxMh8JKtbkZ4P1SPG3f88rGQ66EVgfWFha48XgLNFqNHV",
  "key4": "51wfE7UwhQ7B1nRLXCRq8yXJjiYy44x9zDyCm3YjnY2PzG9RXQ6o9x9xSaZNbiNvk93GfpPyJgpCNFPxAt3Hn6D8",
  "key5": "4C1TBfvHqWVu1zwZyooHDVhuJAYdJpcK4Jo87bztKgMToDB5sKX2RaGXUUFaXE9MKyvQKLLTN5NdaaYL1Zr2z2Sh",
  "key6": "LikJwdfJBVMLJCFLprKLgonTNT3si9PNgvnqbfsGsWsh8WGUWB4T9enXcXQsSDps1N9NZ5PiKd7rVtc48PALkUZ",
  "key7": "eUwxgLav6TwyHF9rD3x6ncpnD77e5dr67TTwkR47pZyPx4GF7LjKGp1z4DuT3JQLnRqMkqV8N4TAdWGyXkfMxYx",
  "key8": "3EsSRJVuHuQS3NhJr7Vg3C7ECAtbUkLzDm7jjryV2fFNsPmPFoXZqPJUmj25xPz4vy4BheoEo5p2tuoKDuQnndw4",
  "key9": "55Kc3456Z7YiNrynKBE5uoqrRGbFvxVQxVeAJVrohjQmZ5Cpj8ywB748jnfQyqbYp2LVqhzxjEAgH3ckAbfqHRk1",
  "key10": "5hW9JGEmtxfgqtYAynSMukXwSD5pxTvF5ZkCdwj5SwCU6M7LE9GNiYaKNtdMGQS3rUVFbEh2EyktWLkLvzo44SWY",
  "key11": "crkW2PmQoHs6nFDgtWyRpeDw9wwhqiLd874sMS1qRHRt3pKqEiwFXTeNUVB7HbotydNrbhZVkHssFP3TZv7xk2B",
  "key12": "4oHBaSkTGeUTLy8Tf8uQ47MjkzXPewtbHU9g3uuP7kwfmZmeEMouSKCbTTg1ZzxmrVCCLmgk8ZTeUSuDLoPBTrW5",
  "key13": "2wHPm2xenMaq3oqR2AqooxsDpj2FivXk3PVvb6ee3kaxbKp1qD4HfBygSeNWjpNNLiH5SmV2gRbS64ayHPfK5Ufe",
  "key14": "2pqL4E65LHR78RK63GgQWLrU28Nao4nYfBre71tvyBd1rJpXF1oUNQci12SCLK3mk98Y27X6K83JtFLCmVk1a2cb",
  "key15": "2mkL8FR8iV76jWByLWdZ8cknGGicibSpwf2LbJcy472Vf5SEiugcbiPHynYxyD1Cp2waTYYMBnaLwjQCfTyv2NL9",
  "key16": "4JA4PogAE4JCc4RFBKwcxuXU3ppxdVqWuLYWtGXFnsfhyJc3QcjaEzxhBGZYtNAP5k5wrMSWLKsnSDRzj3v9ofpp",
  "key17": "5q8PDBDkGf4kwMBm4w4iM4UUo1FeKktzPZJVYpHHMXDsBqgEFtxKbtS2pB6HrFEBsYrqGD4EiF1X4DLr8QWg8p68",
  "key18": "4s6DCb9HcA3M7xFyp495jzaNmaxpivUcGGffsaiBSWZLTfKifhBCvK58JjNp7rW7YVJ2T4cWXs6QDio9FH5V3AgT",
  "key19": "Un2X57roGDEVr4PrZP84eNXmyWCyPZ4gAWpTWgG1eSPZvonpJgwh96zowiSjD3j4hnc4oudDpRz7HE62VqQCS8Y",
  "key20": "2bXeJm11xKjz6fem6uu5ENcZz6XGziboVi2wyP2j5W1qCFWhPrR6F8VtGHXVFD5zBK9Sq5aWMmwygCin7F1btcLt",
  "key21": "2m2U2SvMRK1nFzT2nWg9aQkopBJbSyNT7HFSMa5xmD8BVfqgJzYCsPAj6aTThC1BEmuJ8UahNA9RuDbxqQYasFsp",
  "key22": "4kHyQbafCb2C8zGrvGDhYvio748x8rYff3gPDYRDEAVjNCsL44HBLEn8uxACzSe7ShPfgXEZZbFqb9BLAk1KkwfJ",
  "key23": "2kwgZLq5Y4Ndt2anJqpTsUcxcw3acGFyZ2MTdLUx1Que8rWTzdo3xbpyYvwE6iGEfagxPbNL87tN2MPy9UkJT2SL",
  "key24": "5AVacVeFndkJxvtegcKRU6gCeurNe76yMxfQjJud4Y9DXyT3Mz3SNh27XPdJwaf8KYRe84Z7pVbMVhuu1RqbYyk4",
  "key25": "4QVaK4BsuKxm8LLvdiSxgXm1JGwRt8MPi1ubHP3LqYGuJaPAAUjs8yeHBJ4x3Ln4HxAL6MGs8XEVRac2e95o3sva",
  "key26": "3naG9XbWrzKGcc8fwmJCHoCL7YKVEy9a3bQJSxjJckB3UTvaBq13NbaLHPbCQUWyNeRtepKratJPL7pnPzYCfq2Z",
  "key27": "3gwXqHtCMb7QDz3uuZ82EWHTukRNwvptH8Th8BwpkSYLhZRYtN2p3Bs48XnhQ5PGhyAREdbz9APuh3sCDo3fWpBF",
  "key28": "i5Nu4NuD3m3KXfVeytRshk4w1HNvW5dJMJWgzuwQEHNhCwn7dDxU5pEdZLVMT9QYBULsEmksVN34ceM1xD9ocLq",
  "key29": "3m1YT9L7c4cq6dURofsoiCBLwJ81z477uZWwQB4bGLJWyhJdXAzs1WFMn5HdPhXNiGT1fstZCoCya1dKS1kJNuXY",
  "key30": "65CS6LxhqaUYAnijqK4WavorLDrSSAMpWGHx2P66CpNe8n65WkhUfnEDPPj4fSs5JjE6hqQGh1pv2AM5czUC2gr5",
  "key31": "5RuSd7mPBVGrwMJj6jUaTn26wFSrGeXpCTL72JPdsvt418ZVKgoYUzBsCZjE7kweLJDUFzsM5mQLfLBHLHbQawTf",
  "key32": "5K8yBayhBs8VHEkz7ExrfjpWrP5hf1Ataa9AjVAvqkTFn1B6nvjwEXFiB9Rmeak3GTGAyyX4FUyWHyu958qxYXw5",
  "key33": "4XBKdWqenzEvtooDCpbsZQkWds2VcFDK6WcqZ2ZDUvoQu4FQTWiAioxG34NQmM98ojcdQm7oLnDJvHTyGAReWpaH",
  "key34": "3tu6vXfom6e9qH8Hg8DbTw6vpKmQj2NB1GttqYPAXVSDrqY2c9ueMpWd6vB2e1GtA3G2tvxoJA82atjXZQi4bqSS",
  "key35": "4ouLYZMJkq9HAVfAgVWw7CG8w3ZwpeTQYcUDm4YQtFJV7V758us77MN5YyV5zoyEAyr7qVddPtkm6X2KQH2uzikV",
  "key36": "tyStnp3i7Dv8DprvkgbNFYDzBm1iJtjEhLDkrhDtwCSmEZqiapkY8LPCsq9tDF3JiLxnj3R7W2zMuZTB6ADBpvg",
  "key37": "34x82kiL6duJzK9KTDk6DkS7YQjC4GFQZo2C19BpfPiLpN1uZofzRehut85vfUF1CRXfQaSRnfpXwSV7tHGRxHcM",
  "key38": "3ruStayynczFykMYpR3Up4ygQcS5qaifXvz5JLPHErqJKYH2C2toyLTSfLBjKu3voczfHN2Xk2JgvWnWzrnksz1c",
  "key39": "5Zvu98LuTyeGUJDgsAbSGb4PDv1kS8fKJsJcGanLXCg3sZVmWXX3cKdLx6NNkuqXRzph4mYVZk3ssvtxHphURPpV",
  "key40": "4sdE9sdDJd7TJBeNL6Cgm8MML4FCxqL1b6n8Fn4Lv84k5ZzDWYbLmyNNnEY923oqSon8ksPFphXCgVAvvWk76YLY",
  "key41": "LWcpJZ5L5FF6YLBeJBn3jvN7v7SRsV34YpUhWHrToCYcxsskqssXPBebw5VitcFDLY548Aab1K3RwBhfHuzn37M",
  "key42": "4qzLWn1AiCzCVq3EUtEz5EtUZ4EFXnficr3okoT6F3Qw2eAYcRrkQNcvrV4hiouCc5KS2AC9K6Zagk5nvc8eMuMR",
  "key43": "NWBiFbEwjdVBg3Qt4KfeNFvsUjxXiaKfS1gmxa3UZfbpuxWgN17HBQRGeUsyW4mYeW1GG3WkyqSwqmHDHPVeeh1",
  "key44": "2ggS1RwDtmjjtGSBiv6XbuwHokVKmLx56bGYvYPu3VndtDxDPw4wnWjwGUV17spfSZAawvf6T4xrNksBAbrA4ykX",
  "key45": "4pLEcRneRtdrTtJ6UdbniWnocVf9qvCxNQiXYaNT8UXj6fWNW4kgF5Ket8nBBEC9LpTvPDjcShrvfYs7T4ZgBTNM",
  "key46": "4mT6RfLroMMqdw1ZZSFyCzRZYiJWrwCJF4BnFJnFuseuhemxXinBzmHXWvHKjnDK7o15Xvj1uEc5gYfrxjyVRt9C",
  "key47": "4KkfwF6PPwscYVBzPivgMwp2BNpmapKn71hGmqPpjtSLzXHb4AzumL8p1xMLr5QapBQjxjLqj15ZRrUnWp6jRC1n"
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
