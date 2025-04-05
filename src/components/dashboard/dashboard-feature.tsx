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
    "5MJ7cvFyQHVvtFPScFckezVuaHEWKTGgUPjLFAPpmfsjheCrEHB4dYLoVkzRHPaFEdY1wAaMQ1nhZV9fR2Xuj8H2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcR23DpkwTnBxguVopZ9VwBoyAYQS4vt1LccvWRhyNTJFNdiuYwZ68RZkAN8MCAowW18VX2YgPjFq3aCqhH9LQg",
  "key1": "DcTXiyA7LLVrxocMwdYvm54RizGMYWNbRsX9XM1RPyhv2UgUFTVXQGVK1LQ9wWCcoPJN67tTHiwjxrmHPb9nGCH",
  "key2": "V7ifBevrXAFn8swVot9z441Q2C9PvQSa9UKaqziE55q2FZKAs7Hy4XQCNHWThydKe8piEjubZuqoj1SgwxHboBN",
  "key3": "3ugRFkmHXRNa6V8XFTAZtb7o6QUVqGwkGn3DqEUPdUMQovYPDVd3p8kCvnfDarWkDrsug9nQJepuc6wHWYEL8vmj",
  "key4": "AdH4r6JfxC2uQRujn9qwCUDu8zE8H9Xi79Cp1dFispQLnMkrSBxg2JtRqGrep6q9meWSENpcg9dNyQVdatRomd1",
  "key5": "2MYP6nvyrQ6U979Mf6AjU8h5c3eqKqqFuwhKXaBaExp6Heaz1aVmUHrF7YN5Kq7N6pXWGZNi9gpfXM3NJYRYawz9",
  "key6": "2LLy9U7iLKYmZBvXFVBPgMn3wzNrCpNxKCXrnowmyKBRQm21q1K9AZoJRwZwg651ByqN12EVzrZ1WZih5QJ6RBJi",
  "key7": "5LoxJ8YrQ9qRxWCKUt7XeWsxVAxx6uRjPMUWDiTTGNL5GSZ35eCyoKimMPJWUStpFkoDpsknD6XKMKXFRzsSSdVg",
  "key8": "4GjNa6DfV5BcaisbTgHzGir4BfaquBcxJJ7TzGQLu8JNZkmP8ty7y9sw2BVHE6qzKn6jdwjK5DCGww6ecwFYr7JJ",
  "key9": "4qkuE29YWstjWye1kEkRC1ctK5nkmCPcWBHujNfSy3KcCKGZRQhGURvjUZdQeScX9TKS3U4hU73ooAxzZqRYD3EW",
  "key10": "4rY5jtLJxsVXvnEwPMteBdj5KPEUkUFKozovcKJGSLJXLbumjoJhqgEd3uzCd2PUvDLeVthRxvgmY8g6PwApQNrU",
  "key11": "ugDEcLqJQm6ictCRmvRqsu3XHj6zFocjGKRzy5WTASbMkpCy7hXvaKR1SEzXCwv3EYfTQvhNaoxa4vHHV2LSscH",
  "key12": "5892YnjjLz6MLnKuccy3RREsPRnpcVmuQ3drhDZJ7CvgQyxS7aWmquKw1ZPzNkeXq7qC5kYFJf985twhzGRLmpdz",
  "key13": "2XrisKegz3qbiMrJ47KzAomJiKPcgVqAnrFDCkR1tFdvkWSkTCYqm9xhW4y748m5TAHRS79CW2hLLcPZT25gze8q",
  "key14": "5qhmPiZCLoZ2wh2TDrGt2vBHGk1fjBw3eRnW3QpF3v75rmgT3DfPtVkcyrKcrAuYcVMUD58mKyBVHDtJMFUkxUdH",
  "key15": "3YsnzuLzH8tt5cBmUoXYxuaomDe9rjCBBbfnv7uBNP6TtorHrTrUV9htuywWfL1Bc7DW6w2SZDkGSwShMWjG7hxe",
  "key16": "5q73P3VdzUA3ZpedBLzn3gBCqg2Yf1CLoUQviyNCGPiemoYYL4rn7SELfg4yKjcJwgCzKh3WEAqjW6bgGobJirqm",
  "key17": "58x2aLroDf5SbrMZS6j1AqtxBnifEe1iCN8i8K6FN3nKiZ1Qau6nu7kRKqeAtqyV4PCRjMLv11XURBSzcmHPoSiS",
  "key18": "5HiDdrsDtKGjYzYS3XWXrSDE4LP1xiD6HPFr5KQavn7a34cTuRQ3wWRdHkcy1fDuyZaYSzmWrXLc7VrHMXhJjiHf",
  "key19": "kHJi27EKv9UGnE5ST65fPSmB7bah3sgtkBn6AG1u34upBAGAPHrojNVPvAXkbkmJtibQF9iVb1e5eKhwyXT2FVA",
  "key20": "2tRM8GLvMFtMMMFKcDw9VNc5s12k8knaF6RUkLuBBFdcPJoZXUTW9KSsHPJ96BvqvRzCd8QzaVpHsX6qzEKDHvGt",
  "key21": "YszMvnUkWZmSpvADfE2TwN2eUK2ywwwMjZyWq5cb8F2qDpQjLgJwkbe4vUpJn9oMqdUuM2SyxCqGeng7biMq2iY",
  "key22": "2HBfHiDVJLx1LbcsjWWiUmTsEZ7CczdhWALusS4YvywjrP98ar4YkgxAM8RfmU1jFBnSmpbkQoiVeRwoQ9aTADYD",
  "key23": "4fnoZ9GhXWQ7zcnDjKp5bhNLg9T7fYPi33cBeiw25hajCAsVxGbwpftLSkQQ7iNJDnt8CKX79272X8c2xiHk5QcC",
  "key24": "4RKg4V9NraGkPNo8srY24TbgkxgeapQ8jur8hb6iMX7S5fEzsWdDTBdJKfB2UQ2uB7uGmWPSt4i7JvWmQnnfnjpX",
  "key25": "5VWbgfgatGzHUE8qwz3xzNvn7BXMdHF4kpCt6wvoLbq9UHnhcPP4yanacgadqKojrpnBRMxTo8ADaA1hFjL45zep",
  "key26": "5fUUFysT65XXKdCPCTTJgytQGW1n8vb6URp8CdfUJggAK7njS3WToA6b7WqiWtxZahzKwExn8zyYstMKFw6sFBZ5",
  "key27": "xZeNYFo5PbPqrzwU6ocfwehsmWoLMMnAX1vfVcEbmJDCkLXcM56zN2jEjWKdG8EqbFwyU57U2q2pXowt839XaGm",
  "key28": "fWjoZphbLKufuyaMsQcBjwbKawq9sHhH2e9nR1Z3vBFTzghfSGNJhqcfCLYE1SzrAY6LQubeMYGxPWbvaRVKPPh",
  "key29": "37Sc6yyMayk4S7nTbCYVb1HGNMCVNwxNAQqGE9oc2n8Lqukit8KqdMmcFckurEBJNB4CZ32uT8jfQhmv2ikGxhpx",
  "key30": "3WpssZoEBatjdNuinTg2YP8wnJrGp5MA7ja9rq9VMw9MVVDjU3rcFCPpd4moTFpxNm5sgFti2V2uBi91uTtQ8kBK",
  "key31": "qmaHvxgzqpLny5WNuLCooRjd1iNVGMZaRkwt1nRm6F1XHKbywQjvdbA9w56fCwZNGsC4xpu6XmEQC2B5Ep1cNu5",
  "key32": "5JDLLdUDec1KHWJNcQu341TuroHk1Sjz9bxEG5xKeRzrANWiPMcCbQc3qqh7VNcZPXarspKq5AxjJ1XzGHE7WWjT",
  "key33": "2tfuNhGkGSyqukxAsGFpHNEy3t2F6riJJ4hNTePZveCfwqhnGDc29wxJEaSTxdUiT64Vb6A5dJsMaBUPhjZ52Khz",
  "key34": "4fXwcrYJsUW1ANUEtHFP7oimqtZ3Mx6BXoVuYfQJt96kCGfXc9GpbYdfF6Zq6XQhryDdB47QNRqMnYFcraEfv3pq",
  "key35": "ijiY7tZ9A4TPQH4KDM7yZVeUYvGiKE8ychB6jNXmLJ87hYR6ym8eCXNbYZa79U1CS9ue776NGEmab8yoYAzk8Ux",
  "key36": "2RD282kbHjLXF7L3Fvp1uR8swZWJeZx2zregVRUk7d5R3Szh9TixmhxoAnhAGRefWrHfoN42F7w9bziEzXBGtWYj",
  "key37": "2rVjRU8UfSuFas9U8p4xhPDpRBLtjQKXYXLJVQHxFZcGcDAer8rAiYPKhBBsBQVbjPMymZyoZB1uRfF6cKBPjccJ",
  "key38": "8m7QPmmgCzSE9od2UuFRtrM4gLvxtkbVNT6qXth2NmPWQPFCCvBhhXzymoBCLZB8os6E5VbDWNCLAKdGZnJSyGC",
  "key39": "4L9pQeNXREvB1q2FvxCbficy8854zbRVqgJUh45tjjrXSA1RjayEqtomqgwdQPrRDBDqfmSqNvJpbzYKVBM8hoxj",
  "key40": "ToUGeztzVPjMdWYiMiVCekK5zgaHo5RA9asdhWJAnjHd4gG3G6mhrUyxHxoYEzXTA6fkvysnWt53yvmzMdr8LRc",
  "key41": "2opbgH7sDdHuyWFkLddNHxuAi3i4Hfoc923Gbf4HQLAR6wqAno9dD3KoDLbs1GfHj6EM7cdewFBuxyS7AXNRTKff",
  "key42": "4Rhe4Uar78pjQneFqCW4eRdw5UGfkNGNyXfQwDVM1he51g2ZS5MfCaiJjPvniwhXjEJojppfxfcsjQNdBuSYNnrM",
  "key43": "3obkcSenBuQLjQ49ctTA3YWfUbBUdkFeLJZC35RViw3R4FTWRSXb3ZGswumip7WPYGEwefi7RmyC3KcEED746FLQ",
  "key44": "2ZYZMgDB7mmnHgW7pAaL7NFPP1Gd7wN7L4eTYSPV4CTUHcJL8br9kL1tD8yhgNv2t1ha2SUHH552n3oFBkMqvcw6",
  "key45": "4ZRnHF8swufdhCrYkjae3vFBT8yykRkdd9B4eJpFxHnnHQC3vbxtGWJniTGe95AqAoqhv8HQoFjoa55kh9wHTVVm"
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
