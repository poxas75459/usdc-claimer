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
    "3mih4gnfJqKxgTB9ZsoxrzwHTDbLZDL9Tk5X1WvukiXXmdBEEvesy2yrX3WuZqGdF4CJWcqR7VceLGGNcgCU4mDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66JLAppr7ErEyYU5gKNaCbUX7kpLGUyaYsta8sxEo1oUuzHZtj1zr716BES24kRyLASzFCF4ptrRghyV38r82CDL",
  "key1": "5NxxquaBAxraghbgrpK7L3725ktiHXgdHaYNG9hi33NgGce9Wt26ZQUQ2mQD3zK7K1zT7WdTs1FkBUnfpWkVHWmg",
  "key2": "4sExXS9AHrWazyK2wGRAdLGKgS8V3NdmrTYLMFw1frVfrvqkNnvtMZ5MV1S4eob7Ri6m8VAW4rSyirsNrRFx4aV",
  "key3": "3NCyBekJv7ZTm23gumCyDMRCHXj5eAuBcpoWAC1SBUs7q1xDW3oDdziTX3v1N9Jb4oMZsobDzwj7dTRMURHyRpNW",
  "key4": "5UjG77fmJD177PnkyVFqJqHWqb8jv71Kduw7gXafhzwmBvswuaaHoSDyXPgdTZXyJGVeANed3u11HqSwWVKT4Cy1",
  "key5": "5dBkXuZhbbphvJofrrS2HK9kaJ6gfQTeK9c7sp1JP9xLU6NwcBPmAj8fi2RwSTSa8PZnzR9chfBferj9zoL3CyBt",
  "key6": "3zPPCBfMXbkeufhg9s8ocQg7tbvbWEivdcruQXPT19WhmVGQPn9L7no3EpW3uXkZht92wwE6Vc5GRxeHXRqY32uD",
  "key7": "5kVpUyZDBdUjpb1DJHenDtHyUcZRxi5fbHhzgzzRRg8yciHn5sVJnepJyydfHvGzCnyyMvcncASNTbt8hCsELK6A",
  "key8": "3Ye4fBKE1ZSmupUcm3CAwuuPBUe4JQQDUsz8dzjJhKhF7ehLndZFqxNPEKaMHKQoX6EwphVPS8iwSrVLxVm6M8ni",
  "key9": "3hk7hd4DvYSHFKEYLocAqfhU9DHzxDTfBH4kpSbJR6ueNEpgturXm5TY5cEp2hPxcnp5MJYAVCLikShApYpMb3s2",
  "key10": "5EZxoYuReVHFA3gWhPP5x5a4SA6ouzj7cPEDNmpv6gCmi5bpt6KCGVfBHRtZ3MP3SB39umHz29nah5etY4Gnxmg2",
  "key11": "129XtdFfLWggRdQpDtfuXiXqWTkrWhNoUSUfno52aW3HNka6cvMkLg3sAUguSxSaQLjsBboFncZHjQzqXmUEejCo",
  "key12": "4uXYpDV9weo5qaS2hDnWuZzJ3RRwQQudipTFXUsa6VVHwkTCiMJkE4fdz2RUYGRUVPX51utvHSBxvwKhozrm5GVr",
  "key13": "RyHexwgoFVqzu7Evkv8TCLDYNFnQcunPRMrp3XsTGYWqNekhaUYRJFqoY9sLWKr2bQb2L6tbu25LXZKpvvZKbFY",
  "key14": "BFxWDZULJsGhydbfDhqVMoyotFBCVZqcjdK2gR9G23DfuMhYAPz8g7H2mSF7jaQsc3VKCFUd46oUnSMrXgHwhu3",
  "key15": "2txHs9tJ1J241RPQdhrDBbAm6ipRqCaUASrLrAQKDjGvYtgAk6z4RPcpskFZdUdRrbzKuBkQ9uHbYSp6Xosmt72r",
  "key16": "2yFa4vwjrm9mWawuY3iadmGMiTeKnSkQkBzS2GHU6twUM755GoWfQebY3jgDS1D9549MaYt1ZUkfzm5vKEmnoxr4",
  "key17": "AhkD6otBnJWsTgLC9BSww8xo4edPpTCqnKaGa2uMazwcXhrTYNKj4GLWGi9kfSGmjbYpK45UiiH6Y4Bpx7m5cja",
  "key18": "5GRhGZJhFYCjsFRRV9HVEvM7JdpseEL39H8Bo91Q9TFdNX6sbG8nnSWKQiuZf5juK8HDLNYM6hdoM7Mafi946HJ",
  "key19": "32y5MbdGPVLaiseCodptUcQxFuGPX69NPxRSPSzarUHu4yCE6dU56R7mjeCT5Gh2ufpfoE9tu7RUNNgeg7aHV8xt",
  "key20": "5fi4u3rAUeTsA5HeQ1FpKFKyqDHFPZm8vFPM9CexMQJwoUyfHxqvZBJJdDeRwznfK8dVDMHDx5nLJ877GgDMTx24",
  "key21": "5fpEYQBSLgVSjdpoPmi31KtVvDWcbWuMcRndXdEZ6HAX35Yf8UBVNzMkog4QHZD7U67W8fYQ2MU5WqRVBqMju17b",
  "key22": "49AvaPuawgvsinzizUJh3BSN63dTAo7ushTqr4jqivc5X18UsEkhotEAP5mpZk6akEjb9ivzEk9eQZpvY6LwVkpT",
  "key23": "3ntC5XrUid6iVBevVzzsmbqidGcRVKREpK724rKGDvGcGHNuiVt2xowPU8V8qsUjenRzYWoHJyu4cJZoDUnXCMJ4",
  "key24": "w3btrYBSENyjJyECr9xV4UDTj89jqGxP2UbF6nVEyyC3NkbeUMkK6dVjWZLpMegNenEyu1NqLcN4Vwumw5QF2JV",
  "key25": "3rVWVewNvHPZdjDRu1HQcMZqMUPLxqzep6KrtKANrtQyjtzkt51RPtifxXuwoHVT9sWpaGgANzJEYituGPiP9K4g",
  "key26": "XcyKYBREkW8mvdRHeYRcA2qmy7dBqQ1HqYX4Fqif3Hq8vH1RzFdisjrH9zureL9ncXBczGZjnyf92SiiQM3SSdb",
  "key27": "2aKDruQhAFc9drD6pn9YURshPeo4ks1QYuqEiGzoFvvSGZPttLL43XZPp4KPNbWSpzt16wNRhrBNhcMjXkMf7gMi",
  "key28": "3e84sw9bJcKiB4pnDjaUAf7Ytipj8cfE3ZhCSxujPuqYNCpEobaPJUmVtky4vmiFbe8jpRcYPUoc2BJmVrpkkfM5",
  "key29": "34JwFNSUtZbSJxcPx2G2DD1fpQUE2K9s8TUHPdWqqTJdKCCsj4DrHebxJpgoJJHeJiaLqBjTzqYHTZxSDy5z8bXg",
  "key30": "4TrmPtJJcCFsXuT1WNJTzgC8yKbt7kYz66VMduTXBP1RapakgEhSG59kXAb5SgV7y8vMuybNSjotzq1GXnb5KyUA",
  "key31": "5a9byGStW4fVm8m2272mikZ4L1jwPZxhXZBKhCb2SaCpZjPpsjJusDBmhmcv3RX6LGEhChV1pmBGTNKZMh8PtMoL",
  "key32": "TuMwr7fMaDReTo86wVm6ni7mXZ2dUkMmmjZftQMqLVjznZxEdnzLWRG9XZ5RbZthq5whYHNmii4yCjHn4fTc8xp",
  "key33": "4kU5ctEHZYR2EsMquEMXhEnDjdkuQSonUKsBySHkWu5mxqMCpBBsb82zFwWM4pYS9XS5AhDKvga3eRTyMcBDnS7j",
  "key34": "2uBBLRprbxpHdJUeJFxcQ6SSKDArunXqbRAvSq9GEmnW2vcKDZu7mZ7a2ne3pzJBSVj81dL8z957LpL2GrEUBX6c",
  "key35": "2mDT6sLevFJXHRmYjYZFWC4KGp2KwFopZuxJbQDbtgDw9d98Es8eJ3XTV1XSrfQURtBHYeybTLgfhtmeCMGdwxa9",
  "key36": "5pDb5bRsJDT1f2p8YGrCzVFv3P4qN7nN1AkQrXLTao6qknipyfobHotCUxaAioNJp1uCFBBJPZcqHe7Nvj8gnzcm",
  "key37": "4uwHLf97Km6aeS5h1fLix67qyoHMums5EE8qsEsJ9Wt3bp5hrvhyyzZhTU5ZksnhTEKqHaHdR69uu7kfEKpxauKb",
  "key38": "3QM21A8FUL6GrAKJREw7GrDusGAGVN4SPaWbsXjSHyVg9fXyZbCmLwcinXCAArYiVA31w2QVuminBpfG5B3ctCFe",
  "key39": "4ihZyMa9TwayvYZMzh2t9tamN2HLNqVqSSsvhmQJTrhSuaHJU4U3dRFzQ8AVT9L4FnoLLUfC9h3GXEjB1ub3LZms",
  "key40": "5oubCa3n9hGCNDgG8trLJ7bDgFQTCQc9FhCbWZpHeQuz9hHzexk4VLmUw1q8in8gUdZQnnDAn7PPwiCsew4GFTAa",
  "key41": "2upEPVZXiYKnTYbu6ue6Yzo6PhTGBnpcPDfvSFNp7JH5nTxZCMi9PFs8qhK74yt6PLnge4AgCycks9uSJ67SHqRP",
  "key42": "XG9hn2moutwNVffdc2U1QrW7rAfpij3LsQJSYVPSvL5EhUvaog82AL1gG57CLVGHE69EJJTk7sKYtu89yvSgNna",
  "key43": "3hZdjR1zzF2cxVkXZvScNhuhkVUhkdx3HxXP3Jsu4PxcF5UtJi6CPFw4tgW6Y77Tw9ZeV6FXqZ7tCM6mT3H3Si7n",
  "key44": "YdosqKSnGr7jxW5fSdVnWHV3embEUNGt97VJm11oC21YNExVQJg7F7AySu92CLfMbZ5SvPGMW6K2cjezEziSFUN",
  "key45": "3zUwWe14y13QNXN9K5cnUg7HyvXfjRXBZRyxqHjvx3tBYxUvPX83q5AxJsxyVp1hV8GzcST6HhmzeRNtwC4dKPaN",
  "key46": "3zporaNipMC4irbt4nLP1Vu7EfQbAswoPrjjEWxRUTEjikkzShyE3KEkRzf9fks4TCSQx9maXpSRPsXkduHLQ8wC",
  "key47": "2W7fzMqpqHbhEsT2irN3ER5oUdWrtj61cUahbGBrRMp3zRLyty1EafGZohKUqXG7vK1fqzo88NzbnkywAEpFh8st",
  "key48": "26NfcrxuMDBhpGs81LiZzJtqcC7gfsRpp8a4LzsGk31XuBwk3QbJgns4KQABr2jqPysBdy2VvPmy7B7hKzExntDa"
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
