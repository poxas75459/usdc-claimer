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
    "fTs5LuYr5dLuu6SpqV5FgFMNiVk9AvdGQZ2iUU5nVP5ddNPV3MjdeXp3SoGnY1cXhyRAnB2xemjpBAqnuyDesHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGpLj5vwRC5nFjqTv35EQP65DNBWFCDrvfXuLt2ff94kUnsAxFGqxHWiTnj25bkn4DuyHVMqB76QesznPajoLb8",
  "key1": "54h6mVJNFmVee88q95bkyqm4pHe7USHJ9PegwgdcBmB3Uyg6bPFhQ1j5WcDmtfrBYyQBEiBNGfvGuvnyp9wjSTn7",
  "key2": "274hEeAgecd6G333EDhoicFi8oM2bFVtKyToab2W6wqwAUph6ShXWYDs6Y6xSip5PRZLed6pcUktAVKGKUKL5Dn7",
  "key3": "52hSw8XpeB9JAWFqWfeQpRZZF34Md9Y4LwhYaXAfpDsPSSpMCb5u8fkVZqdLfJNYsTEmGQ8zVQZnYHBEuHP8SBcC",
  "key4": "3BcQwt7fcv6KR3Ku5BwNXomZUDtF3wxGMviMcjRrw1g34EB8sfzqRv9hyWMDgtGAf9YdSfkp3THRnePgkVNAeG5H",
  "key5": "2R7gLu7j6YKkp5o2ieePXEmEsKEQWJcHTy8u8rkfYe2Jg4CJLQn1bJxc82a9ZgnovFJSVSW47YdcvrYN28eueKW7",
  "key6": "5aurYwe6usgDjMHpFdMThqPbcoJFRJ3dHBCe1wATLPJWhqp9cYcc6jp4s7vLAxeidkrgFyymfeUatYmNKsAbJAa6",
  "key7": "J4Mi6sWgcuS2NjnKMCYUyrc2DbUjWca8b8m153ZkAZtUiH9qySR9rS5g9e6o9j9ZMEExDsvYLVcjex11oMD6v9J",
  "key8": "Yuv57SpV69J3uLL3PvK2qhFXnu4wNMN9dfGnrcLXw3NZtPVKDUzVBRiMje4FRq1EFii3dDP5i2EvuTsFGRYfYLM",
  "key9": "5FEoDrNnKgaNcW6DZmKLrB9b2jcMgo1xGNCoroG8xLuYS9SapqHJpccukPrtruxKQ5FgUkbanxmEJwueqFXfUC5Q",
  "key10": "31CUjG2ePgZuPoxRjmoGGpaNNNSMrihH7Q9CrwNZ62pswZP7Eb8HeFV7CPiZLnAuFZTJLCEhum4k4gq2vkBdm2SN",
  "key11": "28sx2hrb5QrWf64ZVK2AXvXwgCu4NDDHgYqvpX1adS97RZ7m8ijxtEn9H7BJ43ZxTgdmmqyiNBb6zW97hQJioiJU",
  "key12": "51CN9uMpmbE7EULDjpNnEtSFxu1oFL2e7wb6eWGNF8ge6BfDfoevaWx3srJ9XAfQjrWsYZ4nVW8vrkV8pn59mup",
  "key13": "3YUXuaz2xvzDyvtmzMGiK6BUTEL243vJhVFjviZ1Gfb3FMgdoXFE2d1dMYSHigVeTFYtq2puoNZDnNDaxy6rhev9",
  "key14": "d7497TmJD5Vi3qyNeU41LKYF3RZnKbTsUjiifbVSSkJHiFKAJk73QBoWjd2Q4acttkbr21NG4G1vF3is8AC97RY",
  "key15": "4rgoTVrK2cmVehqeGmGQD9pJQMJQCQH4WrBbsSCzSJpGTnHHqQ3BYCpnT8c5HymJWUwxBA7984kozupVWtQtNCae",
  "key16": "3iFw57R8xo4h731onMAtihWh8DrrKJSmQr2j2Tq2UakiqTmYHiM2huAD7ugmsLQALgeDMArripAdJjBRsfwx8zUa",
  "key17": "58WdtBVeJJykbKiL4zadDBzhgsECJAU1Lrbb21PBD3kDfLAEapZPnTPZCS5bvTr5cxa13rJ6GVLFa23k2SvKKNyk",
  "key18": "5oCxPEXcrtYQQFuaiJ5KKSgQsjU1EEnmfV4mNiBc9NNArX6k2qWiNRChGVvNYfY5fe7wbJJyo7j8Hw1SDQX4c2SB",
  "key19": "347HhHjtFkntnxqdgrQvzLCkptwg2u1KJivwhcaj9XVn8t2sdbRL8XyRNLeQDbHZdL7t5igPRrXZMtTeyFRw22A4",
  "key20": "4wkVZ72JmhkqG1Q3YN54hY7YjecN6NcDFBvj9sPsxTsWopoCeMNY69Xz989woZAwnQVPywEWDngy2yYhpKtinGj4",
  "key21": "4exgn4fwNXC7Wx5tKt4FnMUx5cn9gyWFQbT13DB4FxXUw9Fkj5zvb1AFv2ap44iHTBcJezSP6bai2YZYRkQNAxSC",
  "key22": "3aoasdQKnL4GoRMTGszrzs5erHWV1pXEQi3Bo11sQYfAemwkAe2frcUqY6bKgg9XdmQ3GMQqPrjrNbRiyxt3i9Es",
  "key23": "5cYuYwo5kcpELG5YoKLFR1aJDGb3EYdXNiPfHJbThFmk4UKZVLM1wgyZHHDeZMwC9DkjbbpcrZeRP5DaMFRBXdDZ",
  "key24": "AWi7Y5dm7Y6cgLNSGWzgJRHjAFQjEEA9V83arsJKX92GE3MDAECvWPo64wkBPfsPWnWdX8Y4omHGYESwzp3niZn",
  "key25": "8YeQrVJaRKE3FxaGCV3GhkXKJgZLrfG1TVR2SfVFvnkv2EP2HufCvt4fcec6Kpp9GdEcw5qp4wVv6BUxFSJhoJM",
  "key26": "3cfKxv7KWzectSh6BPCuXjiEx2LpSpBXXdzr5Wicb4G7qL6ctrX4TAMWHqUDeC8zy5MhVk7b4uWYbonZEvu2Hn7x",
  "key27": "5NDfUz6EB9mhCuDWZ5XQGJTzBMMB8gNTysvZezsa4nEWDazKAcJyJsopEBLLAWc5HFNMDurCxDND236znz1YKfdF",
  "key28": "5dCzgEmUKeBUq2wau2HbG5ERz1bUveBke134jpSRKQvwYTDVE9pcmQy1wkTwZArAq8WwWQyQyGXpaiipYPAMLxLj",
  "key29": "3gfGTGkCTcaVFyWk9wUN5Nb8RGgoT9hAVrvmyB4iuhniocs5wPKh16kksF1VKEEmj98gPdA5FUbn5fV7tuSyTnee",
  "key30": "5ou3X936V71Aeb5CrzLwci7EeYHw99psUgvuxmzpU7cbcGiRBjfH2bkkacWCA856p54d59EqBpnNFAvybZZS2EbS",
  "key31": "3hJTkoVrQPwkgwxRWdmNN11aKWGfXM8KmCDo2LEe1tBrwwU2g8EnP7pnWhS47iKrunbDAX1Vnw6Hiekv8oCHji1n",
  "key32": "qANieKCyyX5gGF8WWMW4QaVv6vbqDM8uq9vfjLpNtk8Urx85rZNsiLri3rScktNaNN8bQM9XGE6R9Au4ywnjMVm",
  "key33": "3Bb7Mzyq3tbLErRmDT47H6ANPb5c3LWF57aJXXfBDA5vAK5m4hwguZ6N6iBc48ZfTE84huiPmRmByRGHQy8zSrMt",
  "key34": "DnTnmPqGMBpMM94gx3WQFVqU6wugG26821UsPNDe7jG1E1cxv1FP4iiWTCVjCF459XcrFcu7F34P4kpigFNhtRx",
  "key35": "245HXeBxr39sunLAk8qNnsGx9vYaRuhtBbvvyTCTsAy1zYGBzwLVEEi6wvMiz8JbaHxeq3P5qC2uv5YmVgZb6uow",
  "key36": "3fySup85D4amNRnqmj4MiF6wxXftg1mZrzk3uLtGfksLDjdPZ2v3UEKgcwXpZqDw2e4ytqRxHbF6Hp2JKyruGxir",
  "key37": "2QkBP8rUE3XPod2qFKnrzoL4ijF2mDkVaTGxWoKf63qnas73MmFG2BmmFvJDbQkz2Q8QXmCAZUo7kBs8mVX2kK4y",
  "key38": "2wcR27H2YnHsB7uFKwpjyf9HpxBDesGyAR2aWZPmk5GCsv69QF53dyqYpTJq1A4b7KwrCGoAwDhVVHrS2LKhgfYz",
  "key39": "5q8ZW3DNCrBxt3ZdBTEe8x2XF2TqFcmT89BNYkwXbB1dc1VHwQg2uytEHM3idcuSbhstv4zUaz9gcB4CLYPRmCRY",
  "key40": "4eRBNyhi7DzkkECLMykKjeWmgvW455LTkmxqVZyv2bU87q9ZgX2gRD7i2FRZJXmAmWTrNcy4CUSjCkSGsKCyMHMX",
  "key41": "4nDhA7Ay5v6HWiWjRH7netkp4khQWXh4G7GghLxYkWxJYJDPooSUqY7A9S6SnYQe4hpsZFbeG6P3fJwHG3NxVgMg",
  "key42": "59w4Uo2a5q9t6pSKwa7vq7NT5XVRmosZcMJGeGisN1VPUUadYZS86QncMC9spUiGG2uwXuocDtecBKycivyWiui2",
  "key43": "2MNACGrsWc4Qp98nBchFnMsRRJhCVd4FmWqQEkmzxBqVUUZaRH34qg7kzzRwvHU8Wh3b8sXJaeYmE7CQuz3rtugK"
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
