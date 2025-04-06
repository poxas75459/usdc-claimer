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
    "5aC5VTHZPm6zdSKxC8Cx4c97mFbCnPymfvFkiah5Uf33gFyGzyzSkaduyK7852ucPCdkwhhqLxuttDcXCSN2a9CJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QkzVETqEE7rYgi5cvGmAyw7QRfwN9XQDDuSGxMndLemv82rcm19JybTeX8ZJijv9ZmpBFAapgQSShkitPN3Aia1",
  "key1": "3eMbxsEe5rrcGJHMiodVjU3AvxYtXNeydsZjicFu7p1KdXxuHDpfPtUyq5v5zgLrmsjTDXRh3LLmDMcPPbQ4CN9B",
  "key2": "iskj44pnNqna3tuusKpjpMsJRrZguCZLVdLW7HcAFNqvmgEbsUShCNKugHmiqLTwga2FHo9xCEZ4dF1u3tHHUJc",
  "key3": "3sbU2XCZqsMTZLGGuY7GF8MAjsPzvECfduZa3Gi4ceKNiqUf9KpF2oUaaPpmRHpLHmR2Xm3B6knMtFGUUSxL29Kq",
  "key4": "2Dx6cZYy6UpL1JnMgVdtX61EoRdsFHRoSPUSnHBYF5BBw1Rzx2RFYsS3XTZEkv2EbmhDPLoXF7ah7HK7LYjM3mgc",
  "key5": "2tH3hvBcAK1MDj5PNNs4YDnLqtDs2hFTkE1kru4gFVkNnHmbvxfpdQt2DjHricb9sN928QNBgsw7LyuxpELaVXuf",
  "key6": "fwHCUmD1R69M5nahcATNjSSUuWRioUM9SmrydVyxZBHC5a62HkUodJUC9XkrJuFFvn4kLPRvcXaqviHDppfXEJ3",
  "key7": "2xFTSD6jzErzsd686cD87tyU4ohcwWEtc3gqRKTuhd87Ko5oW3iw367fQPg5H57gAUuBqpdFBucmy7pAZ3ozrxn6",
  "key8": "2bPCgZSMptXowc8LFPV8fogW9PRiZW7MC195MTnm6kSMV1caVKMXxD3qVcMimNMyzAoX1EKirckBjo6YFbbiajog",
  "key9": "3u86oP2NcgHpqS8QLSusiXgYdncaiordyDkjRUzwyUsGKT8vEEufF4fB3nPx4GQxHCWAd5SNjQUjw5UPqAUSduUd",
  "key10": "3xf8crvjmWFds2NxvG1PnSiLMCGcQXkuGtiPj79eCw6VzKAhmeXVhDVN8VMbzks7CAgvd37df93ot1mRT6aGhojE",
  "key11": "2YjoWk7otyCcXscHidHdRRQZRgKgWhrrdT9zy1zWcGdk8rss28sFfMRPtKLm3aSM7n4DZ47pVxTMPc4h64HDbWYh",
  "key12": "3WtfNoZW389N2pKuGKgTq9GL5jhU9xwbBpF7XPbak6DbKAaZFnGgrNJbYtmxnBJ9jbLjLwpW8Mn1X2FigiPgcNnD",
  "key13": "2nr2jwYnvZWWtbfygyMwWWDBczC33bEXTLBfQ9J17VxpH9C6FGtXFt3JF3sFi6yTefMJn3FoxKoti8nxbsRqxPbm",
  "key14": "2taZbvRjvzsvQq45QLES5LiE1RscezxmHznaEbPrViWq7BkzodEwttUpSDkeSH5NyZeBhNhiCPjFjYWZhRqVbkML",
  "key15": "ZjbCEB83fvutDLjAg4JbnCZ7rDg65KLK7unXqGZM6gVB5UVV1F3FvHZnR3McCTeyzrm1fvNeEEP2DKQ9EwH4Pek",
  "key16": "2sf3knNBeZhySkQ17gmDniHJnbud7CTWD4UtDrqRpTwLv7q6cdwUFPDctGHcNs9ASbPDwsGc6Cr7Vhq7xwNpZFj4",
  "key17": "2eLRv8JguC6MH4y3tNNZcWHqDKsHuXjDK26GT5gfvAYA2wFndAUCEVUEMZr6ikbRq7XZkq4CeHpuWKzvhYohuKwj",
  "key18": "3Y65JP11Fsa3fkjFXeTAkRZi1VQBCkvGfXEXPMH281C359vg8oWjxvKTm4ZsJNjZ8KizQ9urDZBFD8fBAG2AUsrv",
  "key19": "3imKsxJJtNs5ouGfnnHmMjYfaf7wi35nm9dwdq49NoDWJRuNVyZNxr9yk21h24fPqaXopGvpeXvi7odCcZve3vGy",
  "key20": "ACjQpehaqmK36UsHJzRLZziPamGH3Ap28fgnn9MyzJJW27HB7zYTXJGPcseWxxyKVxrwWAx5BoDFuiHdFanbUVS",
  "key21": "5e33vXuvdNLSV6e37XWPVY6NVvQerB8s6UPYihSdFrPHMgRPvqk9jhesTRHxxShizfTGg9zcyTNecEZyAEY3Yd29",
  "key22": "2h476R5Z2fFwgZ6SscAewtL3RxRqiZZeJLaRFqKUzjGKektoQFe5eHgcQ9xovbpPMLpzEpLfqBrucVQ2XRGg1USA",
  "key23": "rxV21c6smu26CuCnEbCcgRXabjf1bd3pSdR5R8zBMkEGhYzQ3uVCoArgN3rnVmg1wJ9HoHwmpYqgvATYTUXtHpU",
  "key24": "sNiL3rjgJq5FoQNeD6VuTwtCCSQ5Ys3eEPvcrEdFuF2AW8E7drNuTM5ACGirGwaTvx9WSETFe9BmSkggqRsfN4t",
  "key25": "F2o89M7CKETC7rGsQSF3LkArquUP8jfWfThT3kZSiZ6MCUEcqT2UTbiSrWoxF4t1HsXdkBZK4tdoW87KHotwstw",
  "key26": "2fC4d3S2RY9iugfSv9CqvbV2LnVoc6cpQNJghgsvDFPx5eW9Qkd4SRNrLnXpTr53hCxYJPvUfpG7dFr38pgfbdw6",
  "key27": "3DXkB874EtHZrnBMqXgULjqmtFqPbhohPwpfzdrWWrqZuZeiFEmCBnHqfn69uiXGNw7YZ7BF4UzmXMbX8aHGWqti",
  "key28": "6YjkmuDNYAmK6eVwYFgUbBBW3TUaoswenrCfTPLWDAWN2VPhVXbGeiDhVTCKxtfHhDuuUrMhbZLWGe8fXMqprMJ",
  "key29": "5HtWP97QBSaJ9rygfNDRYZrBM2g6cj7ZZzUSysJqdqYQREMF8Xdmgr7E7KxJtafpaiqcHUtNLMBmc2quyHbFW6Pm",
  "key30": "2PpJVpBpEoWrmXHC4PKxowSnG3QcUS8C5ZJFHmqaJW6VGRXUQiXK6Td5N8dUGJQdjFqxXFQGWcsXP9VryzBPBmUL",
  "key31": "3RtVz2VyPYF9p16KiF8xVNBMmEZ5D2t9ZFp9ESXJ4S2MPkkHK61mMsQjjRdgEBHTC2RBJpXFP1ZS6EuRXeypTHi8",
  "key32": "4p5LhJcdY2qB5waxWiHGEyBnanNfKJd927FmsHtCoMPY95Wf33ijiMTHMaHiKpeLsTb8e1hjHzR6GKqWw7Jz5Lc",
  "key33": "5aRJ2TB4gnb6AMsDwAkRDiVadv24oFFu5NgbV8s49TSD7PM5pVDhKQrXDFM84htEmf171Li2nempp2XAjCkvmuxe",
  "key34": "34xDhzCS1NSe87yRkdBDvCcZTMY4x8Vq2hGYMsq45xBcuLsHz6TJUYoyUqAUyCD6HumpyyebaHdAEmefnGtqjaZY",
  "key35": "2sarY6Zs1ZAS8gJM6QG8uqckv2hgui4qaREh1r8xqcBZiqebU2RJn5rRGaVr5KrqdBRQbkKzhRYo54ZdBuHEWpLh",
  "key36": "3pLWyqzGYK6a6Ts2FuSzZ66VqaavDm7cpSXBMfyD7AsSaXMbGDndqPQHGwFSHgmWqQfKc8pi849yiJNWuRTruejz",
  "key37": "35ksZZLA8ZX3fsEnNg3TnzuwojMAnfSryniG3puVpMnJBBTZEd8iFMHvNFeAXvEfXzqpcZpbBWAqFxCNZMA8912x",
  "key38": "GbFqPqsQjfLFRdwTJAgwUDbiksmFkfM9AHJG6oN8gwQw9RymCwucCgqW2z8TCt8nyMcHo1T6m7aAcdzsJmyGjwA",
  "key39": "65vKCsBvxfB8m3pak1ybWBW9oHiC4Z1Y1ZVKbEJsqcYrPaVCk4Gus4rW566TkqFXBkSsRsLkp6P9z6xiCXmj1uf",
  "key40": "zmMLfpMBsGUXpdDAHYXNXhDcePjztVqWsRNdJTgQHL3k1Vexwyo4whYw6MPXYVCRvfjypGRqVSRB2jHm3vsKy1y",
  "key41": "3W6hftNRMveZc7PWpu1g2UH7UC2CpAbQrs2zvtKeV3UdakMVMvyLZs8uDZGkF3smGCbVYp5TpFYaytFhmLyZzSFu",
  "key42": "52cQoVUiHyAN7wZraHSR9GUS8RBGdEGLqDeth8oHnicgBfkAFFoAGqCdHYf5Yoa3a7EbXhL3TyEBYkGk2FUYanTA",
  "key43": "ufJWvKQAMGfo3KrMgy3sJaNEqvAqQ9V6jDXknPHCLVgYTqxptdKgKScpH82xJCGEFQETtZSPLC5x6LLbJ94n7is",
  "key44": "2F9Xxr96Xc7cv6EXp4fg4PPdUEto5e4WfRfhweX4wdPpX6GkR8FzJaQELoDfEUaCLqb6zgYBbb4afQXDB9fnnCo1",
  "key45": "3mwra4wCFygXvqSakAXqXHxK5f6TYJbAPuszPqL2r9MpZAakc6uifjYiq76XCLagiMpuJTw7D7h4vW16kcSeRRWe",
  "key46": "5N9ZJMJBgk75NVHHGjnr8aSeTxMbzRqe8iANR3Mw382xsMvvCYngE8JeQXnjmJUzK9p1WNQCcXHU7aqujsAwqdB4",
  "key47": "2gJ64shiJ1ERXRBtvDs4FEe3vaQQ5d7SN3KkMDTPhXit3cENfkwwm1ekKzATc5L7ZCZpQEZTjdqu1GRNzv4VmNKt",
  "key48": "4L9ziiqgMAg88hSdSgZkTRUTPrU97F7mEaHeGza5Z9WbvdFhD7drEq7Ayj9CgYPMqWMeqZtfpfpaTucJNk5zrUkc"
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
