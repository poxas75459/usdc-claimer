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
    "KEGsLUBmiVanjn12Bh4BQo48SR3vT2P2SPVnrRXD5NkScEWnJQTWxdPqFMWQdRRzRceFtViDZUDX3v3SoH7NZUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umKppnDxiarVgyowCZhtW9TTMr8UXmBuB3K74jDQiYVT4R68TpR992ZrSPAu3zUcKkWwUeT7RmDwBFrdsDxnpeE",
  "key1": "39yapU2gUctQWeYWmJ6Bise7aYWze3k47kvTs4Y7bkaQrBupV3ZV1pC12zP3We9W4ppwmqXdKnJcGfsdSE1kgyvr",
  "key2": "5PDXMnGDjvSynx9WqjGRqWCsg13RAUfoQfRgecKZ694J4sRbQvjdAiiHpDMaL1U3w3qNfsSSx7vzjJYw3UEQm7nh",
  "key3": "212nMYFWPMcgSLpWkS5ferPf5Li1Pwbw25EPyMpbxQuyVt26vc1uiaYTzNGZLDxta3BdBA4ZbvsybbhjprHkPBCL",
  "key4": "3cD8eCEyrC1VreK7m9Gk4fxxj6fZjtagVwWWd994u5pZihy3d1c23JK84CagnHdD2fpvgG6CjiQBpnVUzREN59kg",
  "key5": "5xgXAGfuqmL3KdNvZ3LmKfjRPRHWhNj6dAZp6LefABiDVWN2P6BJWcUEueWWZ78GtSNSSQHPcRSUPfUBPJmnDmqN",
  "key6": "5Fwnfg3hkfR7iBWMPEjorxyhTWkzfrUJZG9dPyxJ1t7CZkNcTLhKLw2ETvBRBeqMb7H89iVJiYh7SvPtKtw1eBzj",
  "key7": "5NCq3Yoi4hus78rjhtmVoQuw6jXypCoPTGoN3YxvmRU5TJ1VvQshhgkDPFAJTmaWLN8NwotbmUncikPC8J9DnLiS",
  "key8": "4vEtLW8BniJjHhPHGvGPEZbVKD8uuLBoBP7fdPHW66B7sCXQzFCgzRnPDHU3L4itRBE3YFMpnkn8tUjCTFFLXcv9",
  "key9": "58Bg6eBWsssA6aczRE3FtFKSMSC78iuUP5XmZuTHGTMCqJ6RMzmQCzn25zGVhrcCMSfx2XpeBb1sc6FkRAXxGyEb",
  "key10": "4ovCFo3Zt1gCWFNR1ucncNZutstF7C2wErmEVYtg9jcD7TSygviB3Y3vrLBtqrwiSjRVV1hVZYVMPJQyEWUBD1HG",
  "key11": "5g2YDfStjb9MYBqym9rSALsSutcNhvYJtWf8FjXnrAjgBn1enmfjGSHAvLRS4Bko28KHoc2GVPkA8yc7iMbLBmUp",
  "key12": "BwejcqjTerXkXTjuNJUaGq5JZEBT3N8jC4Aajh84G8fmYGBaDFzugVVbBDT3AgysKax9KjwUpoQbho4122vwxCx",
  "key13": "54As7LSYRYrL8q6xMnanDe4vf1PzZu23Tdo2jJkRG9iDib4dwnKdeBaUeipkjUWw8XECxpASvKQjX5AUVVbJ8uiq",
  "key14": "3HJb7MSYAGC3NHytaSqhKWyJ4sySfRWcUGaXxfMAo2zJ5houfDdwRozFi4GbQm47jXywonREK7bnsW17znA8QGqZ",
  "key15": "3exSh5LfWWf8DQhu5rRjRgw2DXGJzXdA4kVdLPDiZhVGdMreU39tpEdFZ5cc3unVKEbQ5C5EgpGbAR1AfsibtsgP",
  "key16": "wEni1qoBrhoKj9nvcv2FdSKRjKxRGnZF4SRnWDs7TtJwmzGqkYNowstXBZbAS7cMJKTmFA8BAhmHv5TC765MAHS",
  "key17": "2AzAcz9imQxancuYxbn2W3rsHJDFQU6hsvNXwXepc9maVtpscjDpHmPkNgyXxxHVvd3CEgfRL2e2DKEZTxZLwwyG",
  "key18": "3b7PoDFeLxtHZSTSJ5Nj1UWKtxqNZnYWW7nXAU6jV5jy8GvJScWWX8vceZrYpdSHnPTxrqKPxEQa2TjaXfBLMkjK",
  "key19": "oq2GpyQccj729xyYX825NgB24R7JNxXQL8msYPbbDsiRKzgsKkEgRDPF2cPiFiZj3KHZrqSmpAYFAW2t5F5LPRq",
  "key20": "BN5TNk8PdNqsUGrnKkSsvZ3abqTtdMgvMYaTPZzPy2AEotzcaqUUkxu1qqYe4czVYtWbvzGotT8kR889nBwrg1K",
  "key21": "5UWTzPfRRFBXVP83E37LNW2HVxoqdnodxto8dR6jmCEXrv2bpNfgPGJEqkkGYCNJbhQDYu1N27np5yjTRWnXSqYY",
  "key22": "4FsNbawZ4rcMj25k6LouZfKJ3EsyKLs8atNsyezRLEk3C7bsD1uQbQphubQoRJAc7kzmTbMcpCxGgiVVL6nspBRm",
  "key23": "4X9RA9tNJQjsy3od3XcRDNUmK1azTQCPhBHFSSZjedj44bd5nw2FrJsUXErCN5FW2xBfX5E1Z9St2EZ8ecvRxLCZ",
  "key24": "2TnHNsEfmtMuYKCDDj7xgS7DGgeyYfWA7QkvLPpGmd5sq3mANatSCRWp7wczid7y7hebfZ443k8iYaQBsCcEoSZx",
  "key25": "4yBpkCMhXza455iPutePCehzh94ekXyyFMtF8EDfT2CYipHGNSrPvzUXZJw6zrqAuK2sJv8ts66vypjLtUJAJo22",
  "key26": "4EncXKd8xhM97ayn48htEPCsXkJG8AgNopTdJXpGwFrMwy2S9xMHh1H7tje8ves4M7Fcod85t1hFJZqifc2nuBK7",
  "key27": "4oaxLyysKJEAbRuGGNT8w4NQNUDC6FHH1PWn1kwceoLf8FH1Tir5LGMP5riB6a4qEVi6a2DNdjS2znc71Ak9Cqyd",
  "key28": "TYcDziotVUtxc1nfB9HqS6XBmPaqPe6852bipG5MrgsjfZNXBvBdUD61khMzvzH3ziosR3HCHXMnMKJRc9PeWbr",
  "key29": "4sinizkzYjuDWf3mHQFsbxxqVdAE6NG8M182GNwrXUxZFqLy6SAf7gVSw4hb428eEt5fEAuDUVKZ7xXB1kNsE6Mn",
  "key30": "4LHaQeYWW81ephCqTEsmdFWmbUiAD4eAe2jvFrN7g8TBWcqeZebXmBip6LLrkMTWqvQwsWpqTbH6wENDuPd2K7HJ",
  "key31": "3W41LvrzGi2phhu2QS2G7rhXrSLK9EJYXHiBfsg5X1p3NxsEegGsigdxYfXAnc2yxyWNgm2gzCtxGtTTY1qwNsDh",
  "key32": "3paS7bgBh78Z5DaVzHzQ4NMsGxsuUcBoMF5Ny93JYcb1Dkzh6aTLwWbRYn6oaMSskVMwL9oLNnqh5rV99KBHHk62",
  "key33": "37ESZKr2cDpomWUb7DpGiUxpkeQRGVAALpRT3jq4bKy2XvzGFgzDM3CMFFfxPR9u9KYoMr3MiMpwuGTxgS8uGmiD",
  "key34": "4RfPD1TydjKCkzDvNURPj5uRBDS4uydRCpYX9arhPvKniPschgJH4wcgdhywPaH5b2aynUY7DCukwsHhSdxEX9pB",
  "key35": "4NvPxn8E428dUeUCjbnY3RbGiMJiDWojgZo9CTijybZMyrkSZM7uZPWEiXDi5Y4bvhMicsbHKUAzXzPSfTW45TTX",
  "key36": "5fdxaToCECV9hpmZxwzBeEQGi2K1eC3v6fG1gBoJV4wuyNM9rMHWLZYXyWYiMvP84p7P1Genqq2hj3qzrjqivs3b",
  "key37": "5uA4LMYZJHpU8Nu8sWeoF2Zekh92rSSHNupL7SWJhxMxtGUvUNE9YWvhMV3gn4zNRf3EqoP1DUnQpnFY31i4vxu1",
  "key38": "RBpBLRZaViuXpMv1RM6KVATPqujTRdZ9hvEe38mCeKmymooPrPhUXEtpcTf4Tx4zcpi3AZX9LRv8kTLDZVRFGq1",
  "key39": "3qr31CQGFRCJNBHKtSGfAZgDPv1Ja3KNVP1MxZKg4ueT8X4nDK6aoSVWJQnNwuJy5zkajM1q3k9QiQx5WALJ7i5r",
  "key40": "2726BPbUTjuHm6HLPb7Bq1uciCkSRaXbq2kp1hPVp7QadUAsd41vo3VpwebyUN49RhVJx3xxJVFNAtB7vo6Epan5",
  "key41": "4Cu9BkVQMHLtymUHoZebYCbA5Hzsg57LediNAhLcPXMTgVyEtagPajpNjgyWerxdWDpRTsh5LEctVZBB9hmvrVrM",
  "key42": "2c1bJvpaJm4vhXE8cmKeQjbyv8uLuRXxQdxsSVSe33HorAYC7C5tXFKFCUmybUhcrZeDkDqwtfztKnfWF7RTh9fe"
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
