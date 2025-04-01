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
    "4rrVZvHMBEmRfFxMLbjHNR7r6STjQHNprjPgnRV9uSyakwFVhPrcJDxbZkLBEVVREsqyQbHXPNzF1RX6LkKjp14v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z7Q2jmEWhguRNgAbWNh8uFe2Kv96R5KPFEPo1Wm4abJnpknBrTyTxdPdTzec49E9nRWeR8BgrcuKWj4jtHQhWV1",
  "key1": "38McnfcwAx69upm9ymw1Eg4n7TMLThQcTpUa57GKCK1YcDPivyjCEy3otM85CELVQEyq1R7PE8kRHsJQbrLRgKdK",
  "key2": "3HUmErpQbpdVwjcYreeTRJjNopktefWi5jAP7i59v7iiLTFBJ3W3AA6sAfCLbGsJyZ4angxBZrEHtjpU5eQktPgD",
  "key3": "3rovtG9F58UcDkM8BW33qgrdZccx4iWqkSdbnD7GGerKd2N2kq3ewKgxTM32sDkAp45oMQeu4pdcrdpB5K5fT1Ze",
  "key4": "4DkF7hsKPYc5aHeKntFgqNFphYUJeDCNGKRQ72vWcSSCV2TB49QXvQDWcbfQnevCFWTHv1wYThjyzEQKkgM2WK9D",
  "key5": "2hfhjoyAZQvLLF9N2yXp6Mpok8Y1X3qtN1VazhHEwg5VHnJiQ8AVZ25W3LbixwP5Gdk4atKjX1B3cWpQoFVQ3zjk",
  "key6": "3m4AuG6wpLcmjVL4ULLTQ1sjEbpwNaL9UKhsz8hiEiEYBcUazamnFxy53ySnpShTNaEX6e6pW3wRyhoQcdt1Qxnv",
  "key7": "5k16ZU89h95PX9GGm3e8Ebv2Dcktm9r31sDg7QTX87wfhN5bdsdD3Cg2iGZv2kzrvD1tLLEn2zDdf6imcGsLpXS8",
  "key8": "5FxujJR4NzsooofPY4fGKqsF22RbxZhPdCDaUT2KdNU61BVUJUEqJR8TcMXDdsmUzmmkDEzecrMqYgD3LnKSWX4r",
  "key9": "2v13gMFdwABDpGJkJK1cEawgZayLfWrrPvyYnS6CN6DJsG4WS25X7Bdk7D49BVtdfDvhG16EASxeiNAXLjvE6HPe",
  "key10": "UgHKxCsju8LnMRnQmiEAuV5mhKdQFXWZ9oh1GD7fzXypjSGGNPBYaAFa59RQSv7RQZpa8c3TZ5rzbAw5cEb7eDy",
  "key11": "4bC1Nva4XAEpN1PDCeMBXEf3uR1jERXXQJqNM77Y7d4VqdcmDoN5UMgdrAQQRyN3Uka8MuL9smuV3V2dm2qdK4Yk",
  "key12": "66vXFF6T9j3DcVWriE6dxLuC2G8BADJF5z2dvn92HFAx97rMV399jZxqc92PAmxTyskuHeA8tYD8S9MRjgSWjRsm",
  "key13": "4q4WiZKHDNa1WdfMpT12zhYWvThyBtu8bTyXS9kNgGBFF5qnYoqNwvBqNdDUQyXcZznLiKZmnyxLkK4hw52MSKTM",
  "key14": "5Mv8GkfPtgaHJf853G1oGDeSCDGW2J4yHhXcHLYz9T4bzf4CKA3238eXtoMk9w15xfyFg3W9N6mgsUV6YV5z7nST",
  "key15": "2pHRdF6t9EmwVG7JG19wW1KKd3Wp9LXzuHabs9MgT42NG2QfgWZFVuUyF8nTkJmMBRF8fHyd8b1wKsMRUsYbqFts",
  "key16": "3G5Q1NSn9mRTQoYQgWtgz6WJajfv75yRynmFeAp3FxLenCGUsnAcBfoNFADZXYdNNASVpJuoFXRTrGGnTDyak7V2",
  "key17": "2FhKnYiBEUUod9X6gPrhmS9788cngs4WjFBoJJw7X4Dp3DnCrzYu98HAkT62tDpT27FdUteF5yGaVnsxdcdGKxsC",
  "key18": "62MSC73r8NcDhsbvpQCtWbhBdCxnFey6NzucnQmMjNYmmsCTxEYh6YAiGkE8DXSResEcciycXofGHKVQodjdGDMi",
  "key19": "2C4PAK1k5UcgBqowJZQq3YYpWdbqpk13nrtofeDC1g6LtuwM25g2ZBCPxC78PBqDLHhZvPRjL15qSdLnQgyHubv1",
  "key20": "24iGzBngehdrLHHxusJKoquEfWXPVDBimFYxTvT7jPrspzxUtihYJJXVotLXxekCN61Xi1EwF29Vn2azfU7RfypA",
  "key21": "54XPaBrE515vWU5S8HCwKk6ej7T989c4dbSfkFJRcpGKGR6nKViyUGAydm7jMZmwcXyBeqzGKrEiRyg6DVgJ95mH",
  "key22": "34DvkGSu4Pr9PWi7UgJWYUxy5tqLemEKQHSax3nWshdXZ1z9byPTNmgQu4Eyfw2bCHnujJuiTAEM3xVFovBVPhv7",
  "key23": "2HVdVjk94VPSvS3HU6dAGkPegXTKk5XcBGhp3RevnMP5UeafkMXUTANQt8xVNK6q8gQFQ5jDBfR7dyynEat7cPHo",
  "key24": "2te6hpcK36xMgQ3zNJromMJhvGY5wiCdYRCWgjb3qEnRGcxjsskoKzXx7wvC5wDWY15zCSuPUqL15R7K84JRrsUD",
  "key25": "2bH3B4X8SrvvyeP7Vs2uodmsbTR5KsxABjhZjDZuz4ZSwWxVGd4xPC8TLULPiK84LLR6x8ruvUjYY4heYUHaz6fN",
  "key26": "2aWSUcFaPKArnU1kbmg5Trhxwa17TWfGEv9Hwtf7UKVZDHewGJf6yoCtkA1nbzsNoNQ3MDaL665KLDwQdE8nfuJe",
  "key27": "2JPRu6s9U7DUYhT668Y1oNJX5AY5mmPFVRTsymrxDXNe3eA74Kkr7z27Xk1ES92Pr8LvRVfn97sUbgiVjeaDp3XR",
  "key28": "2QaG9SUD9rMPmrHGLikWcpHSXZ7T9BZ8ftaQyFYiPmGs5gvDWk1nRe5fph6ZsRiw8srC2XQCXwogQYsSCDhN3gU3",
  "key29": "1k5NDQd1qzy7Arns5jNCMf1Lhc17ykWFbXnSAQcmEP5x3GcJMxwUbRgcXB8N8fmjZwSa3MZhC85YmVeihpPeyE6",
  "key30": "2nyc6P2bSyBw7zYvJ2VYLyg1HfUn6MSeGifY4rKJGgmPRzYc2p6eiZENDuo3McNnjrQNzKQ5jMSfUq1tyVcaNdQv",
  "key31": "2skSrivjKPr7wQNKVeaud6C1hLvMYtxZygGp2TaRT1bWHxaafP1s599ezUipNKb9emDuEWC86diXm814jA3yvJmd",
  "key32": "4oMShe8ehii4QFkaEHRsb7GNrncZnqWeEqtZCQxWNbDfbVL5u4if6YkrCJZHaNBEjKXytjxZ342RDFVfQHp2dnia",
  "key33": "Pznacif51tUe5djAQpWpgX45XtEUoJQXHkih8RAsPc7W4w1eQmQT5nbUtQRHPbekAWCBfm69K3Kprg7vrB4eKJZ",
  "key34": "3xGAzzcnzEkaMSMsvXsdvfAsDXpMnupvtG7zywc7QWg8UgqUcmfFHyofdXCFVaBey9pJVXQbkqVGnByBX58ccvnu",
  "key35": "2RqkZ33n8oC92StMaBetPoiawPoQBi12sAyfR2xMfeUGemdkw4scNuxefCsrxtrQitWjceAxxP69qKBDKEWmrnqR",
  "key36": "2RsbnqLSdtnqRMiE8RyX9JeNRkryTpuvLjFqcWxqvJDFNTppAwqdcJfDBGNNUBWGMXKZcETX272vNqE7Shz95QQB",
  "key37": "2Am6wH2VELExA4YXkykoY7SmKRusUJQ1MUKSrA99Z5CT1UmFkNL4eJDRfae7bMy53K32XFfuFoV3XPoSVhoYVUxK",
  "key38": "4N33hFqPYXVKMiyqw5nf1dNsjNND1i8xi71jh6Het53PxfMo29ZtvSJkCtfoSQbzpEDVXpnHnhMg52F24EdRokv5",
  "key39": "uQPQrc1mek1bsS9r2wchpN8q1KsoUvjTMiKagZL5L28E1Ukkw7gQtzTc2j2n3VaJecJo9VCg2UtpyE32YkLhjYA",
  "key40": "7XmejsqYiNGJBwGHCuBPS6bt4tvVgfU93PyHUjsNZrRwkTiUHkfVCUKvMqVTgxGR7gPqidLuTyHpvQ7BME9zKxu",
  "key41": "3mvXDg6nZ1B5cMic8RwnEDErZP2sSE8whXWum5zoxENKuSQfKZdmQKzcA6F6igjfRpYk7xYTeqtvXTikE4sfXnSa",
  "key42": "27ur1taNM3PxBFnXoxKkgrMD9vd3oLQkNDQKtj39kCxkBYnS6hE22qbgZ2FQ3RGPedAwPuSNNBUEvcFqM7isCnuV",
  "key43": "37myoPgeFwmjxwpD1XtFqNRtisYYuHh4ZRiP2wwaxNfjpRZQTxpdarhcCZ9NVcL7MX1qajAWMeRGUP2dPjQ6DEz5",
  "key44": "5a7hnbA5h9uWwoUvfz4oDB5eLw5oyUhXALA26aoshCheN8WuJjJUm1SLLeKKfN2NuRKwP4eHC7FWHbqMhfY7Eyx3"
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
