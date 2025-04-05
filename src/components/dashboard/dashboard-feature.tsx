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
    "3pNuwa8YyevuYpP85zYujhUWtJoXMtQdpmvQ98ABjkvss3stJSLCSapx3P7khB74HMz1kdw3giQpoukRV2FfuW6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brUa3u2wW2Y8gkAjNZiDvLgzYYQqtpxBfTvzT3SfxrrKgdP9sYt7Fv5ep12gS9tMkLfhmgX8MS8vaUMXLeXcnBH",
  "key1": "4pw236Hwv4PxnW3op3nNtUonyzLYJBLcqSX8ndUD5684YvRpByLhM5csJnpe4un9rkxMgDFoWzt5wd6CkucQfKc2",
  "key2": "2p3PEp9vPEUU4aQwndDigt42YDrNfbKgWLNo6nbuFaoHpHEwjnzwLFWGZwNaoX6PSfv4yJHtyj6BygaWrMsVuQrK",
  "key3": "2xXqrh3Sbyb4E7a9ivbo9dN7Xi9G59ucu5YDCbroCP27PQ5jfN9rS7tRQtL1K2x2ZnaQ3p9FK5aoKXeVJi2JVzt2",
  "key4": "47rzXVt9cGscbqPezZQfu7onNx1TYEiTCpCJ1VhzVcdjEqziL5g9p8ArBLoGnLNUL98Bwqxt5hZXXGMkffbtHtNq",
  "key5": "4BYcKAWbhNVnAmV1qtX7MBSAhwWNVasidhexpjDu5VNxnQ7FLZcTmdzWGsCxaWXqAdPZArYURSnnkiQnMvw7qp1U",
  "key6": "58QmAxyC3UGNhw1D3UL5AgoSGutCyPwRSqgkHz7ZhyCLfLhzHivXi76QbHSNRBVUBU1ktgMG963VvSox2TmA6pEs",
  "key7": "47vq36DEhYMV47YM35am56nfTuTHnN2mXwsNZjg74QDXQpDmyQoGEU9GeJKY5ZXbeoGFrhRkt4CaRwDFEgeYitj3",
  "key8": "233sAL1BEjYR3or8sBuXf1xd6rLuYNgRpgnw3EjaNyA5QpPDuvAtVnwzoWMfvJwYDXJEc1k7rvJqD8mpEvQJhUTX",
  "key9": "33wV1JH2ewbSWEFB5ed1RNp12vjhqNsVkYTRUapETUJQm6RB4QsvwNABNsMKWogtjHPTDGHMTGWaeziTAvw5NqRv",
  "key10": "4TdWnBJ1W2ooS4eUsh2rSZFgCpxP4UprkDYz3XhhiUC7MpvXMs6uEaCicbYVy43sampNZKEaHJdfmfjbsw91dRVG",
  "key11": "5DNYpg7UnDpL6XH1yoUJTx9qiFZyy2vGeXxBnZ44GX4TCaMh4g1VLpbJNXAM1JQWWoUw1UAYvzMxQB6S93yihxBc",
  "key12": "458a8JrACHZHJsY7oB41h1oNRYYVqkLs5j3u7v1QRU1syGHSwvescg81ox1oQGBFbGizMH1kCUvHv1PFS4osQJgB",
  "key13": "3jVv6CDW9sy9AaVjSLhuX3ujUj7C3B2TzCAXVuEycyqXgJH66hNC83WXw5WdhCQjidsc4GvnSDjk5hx1y444e5Da",
  "key14": "3TmtAfLvVBTfjyibDXvBKu9jQpoiNWoWHQBVU815ehMrMQpFRqoLMVihAhi4Pv2q3nwgHqV2KJhySDxc4hpFjKDt",
  "key15": "5AVdrmjDnGQXPJYGdNWQj5mfjJcWYVS8ni1MvQ4UwPdNFF3f8KvrD9fnSk1cjVgKRdVU7EjAxZrBMPFtWGHJbdpr",
  "key16": "4rJghPqqAMPQ5swxGADyaKEBwzaF7YXgxpu9VpGWP2UqrZS8TkfixLPSs1vCEAW7v8Rsp5pNNcoK3yHyydAMr5Tj",
  "key17": "4QcDmtizjK12bqq4s3Sxvvr2kPEjf4KAfTVpbz2T26CeeDjuzuWE4LLP7MhaxSd4CvmeEqmL2iJUpSrGri35P4mj",
  "key18": "4rGH6iaG3dboda2MtoZPjencRHnc1o11dZbnxizyHcAocFAs4VYJ88LYSNYs3ANkPVTe2rLSYteAscwC5n4njcVr",
  "key19": "4j7PFiV7mJaXUkM8WupbCBiqysdYrwmFpaGm3fHKJJhHQH68PQGerDBeqmBFtCj8YHk8eqHscB52AB9pyfSScUqS",
  "key20": "3cfCLn2w6PR8eZoEonLFGViNTGx5wYfktZkUCPZyckQRbaiq8BVdA65qUukQTUWebXJ43snt2A75UemXGvi8NP1X",
  "key21": "KUyhvrMGajhbt5c4T6EbenNtJoyZ2h9JEygbciDpSB7twvXCYXmvP6RmcdzB4up7xGxv2PnfZ6zL1vMBJYfckug",
  "key22": "3dkGpFtjYJ8wxmYixLWZc9iDj15Uc4MDd4XWcLLnwSQpQSjkejL9kjLJ4SMZtzLv93m2CmznVoGSwGP8jmzThU5V",
  "key23": "36cKMd9iKRc2yb36Q9FZc7jaH6UcxfajEJzxtq6cau7Vf5AV4vEpFeJDQq8vFdhU81asDqvLGihPiJ7RpHRx5L8j",
  "key24": "5L3qhBRoCadJL8BuV3aUx5crjRq4dX2MN2SfJPZ1dNeo9ueWs8KPY3sCYKjSCkArniDb5zRtT5ouJKV8f9C7zD5Z",
  "key25": "2uHGoKDN3GvfKXN4TPtLxXswaiVAW4n8HZsZqELe4VJp1F3BDUiuo4uWQx5E62kZqvVLsy9kUHXBh8WBequv1Mp9",
  "key26": "8mpuARWykj5nkTxs411azWEhFTRMcFPGAKQbeBb8jA1kuKzgfDFGSCoAD47S5Lf3MYN9brDjey2taDJWvDnVs4A",
  "key27": "yQgHrLHGZg8DD5D1o43o2VRL6SnytStZKw7rn2Soq6vyQwTP1A3zDjjfLZRne4dBGVnnXTbSypm5Mhhknih5d5T",
  "key28": "2HZVMGB68AswFnB4Fq6W2rrr8cuE66ijrCmsN7v6KDdWjbLoaoXNaa4aNnfiYrmNCCWVqZrpug3cDPJV3b4c3cJi",
  "key29": "3mcah4BjeTnQSJ2Rp1eVXxkstBAwzi2x2R1vfwmWDkLePX3kS8n3usK6L9NnbYqrhHQTNuiBp4metajnZmZnEedt",
  "key30": "3zSSP2iSc6bhDhTdYD45gC2VY4Z1mKMuX39znmhzxG4puZqDSNVsqV4xTSvHg6ThCBcS8qEJakMMi4KgDAYQyvJt",
  "key31": "2ZE2Jh7qci7RRzd2HkXZapataQYtadcpsg8YF8gCjS8BYVWCda5rwkrGbGX7czSGBvCM7Fe3jhinVU4VEkxprqTp",
  "key32": "2bJt6cuaMq6bNNdTz5bhzMDx5bg8ymssqQE8P1oTixERJ1ZRuV1yr9JMaZogSgyiVkZx5XE3ipbJQUV6qqtHbqds",
  "key33": "4E3uS65Zc8yaMVWzRHzMf2FvfwSVfaTivBswcKRnpDVEGAqJxZrE9t2io9g5G6eF72z4UwUfX9W5baiTQroq25Dq",
  "key34": "3nAsPctLLYoi3bvdcD9B26KDJtBhiTB1iz2NCkMqtuMfDosaMkief9EfjyK5xGhhK3CnNdtF5dkb1QbsEnRFJGbB",
  "key35": "2FZFjorZJtCJzme3dFuzneNbewvpwaG49g47rm3pQqpstUJAa7tu8MSJr95oxqUTvuxH27fLE1y38WmZ68AqAvbr",
  "key36": "4eeb5SL1MHCaMSyAqEBTdVT5uWkQchjp7NSje6AtCwy4eoLbkAGnVuHd3aJfc5jEudwA1SJfgRB5F1MTRHmYiS7o",
  "key37": "5ohVELQnXKqWUezjcptAVGwStKCfYQwpKBnsBEtx19GwjL7xhRzayxJjo2cCfatuEWDtWf1ANJqoqjKaiLauUvce",
  "key38": "5QNX37FYsDruaiJAsjN9fbkN7WDnJHY7LV6HXVxN72gcMrdrnebpeeVAxyzweTjK7KGWe57s3QAAZALvdzVvdQcn",
  "key39": "3QZs9Ei6tBBNCaNnYiK9RV7UqvBXYStYXGPBo47jwKvxyMNvrgLyfA2SPBkVyctMagqnyW6UEUnAq6HqJdnMKhaY",
  "key40": "5VLaSXaDop2hFccMRz1DBonRjkSdHTQPTcRr7PRbuaeH5YCC4BrXg69jBrtCR4kEEZ8pW2WdL1ZDz3cJxjPBoV9H",
  "key41": "4KnAxWxfisfLiCgxCEWUrC4Gyy4SDbhkK85zexGV9vGSqMK1te85YpnrV6AKmiNGtUFy2URxJ1EiGAze6us63X2k",
  "key42": "zWpPYW2cvsbHn5dKMZ2jBJMSvWJQYdS2tNzFkoQQJUrMzwZSvfmfYCaLotXd5sA3dMcTzTv1jhHp5EMgfsG1uCz",
  "key43": "b7YZ7J2GvQcQ8CsEQKYb5pEuRFskGUqK63aVff8Ui4Lyg1dUtKMSsVdV15MsywRQVcMz7So5EsmTZ7q9v7TDvYE",
  "key44": "4R8mZL2p8cjavwAyu2rf6jfFqYqcMZFaFtP4mjk6JGs8rEd6iwHogZupRpvbrcgMScd4dhsiAnGYxqtrE8164ca1",
  "key45": "2AL5WrW2HJzULs7w7zAWjgkN7YcBJyp1oVTYYgggnVrL3ZXunZpMYhvg1FHF1ZdjkpV2ZuKzdH2izjfVBnBeeaHc",
  "key46": "5TUxk15EpAZtr4WwyK8ks84FgTCmP9sQ7BJbPVwFYcm1XvwWuwBUuc88wu2yNSySPp91eiABbLGoTvSHxEAm5Hzy",
  "key47": "2skWgJo8nHPXsAfspZLUbcRALTyzn8mdubMKDbhMcsik58Bd2Bncm2Y8Ba3eX465jdszkpmvKbGuTpt6nzPMbyzT",
  "key48": "4B8Fv9rHvt6s4HuL1ZnC7PxKGmfKgSznDKg2iGRujgGcYyETJfXbxbPa4JaH9aPcBgZqgnnrbJdvkeh2aD2NpwDR"
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
