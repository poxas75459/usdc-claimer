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
    "4CKtLE42LgegKSbqiYsPe4QB5zZXjyhRb8b4wqhaauDnSdRbvaWLsV3YS58jd1NuDjKDn8xJNAxxRiHeJw1EqAwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kjyWMrPw4EebMSJ1G1AaqGF7hFGqWM8pQymUEAa2zjkB9cKoHmK5MUmeXiTehULDZe1EuuCYQffs3vS7567LRsr",
  "key1": "p5uuexknZdreBNwQ4wmRdjjfLoTXPnjK5cJXDVo5Xd1R5fC3EYzhZCp9gojcbwdEgzipA2bA9ByLTBk7MeuxisW",
  "key2": "371XSCbe79kqsWGYQyxYL4sJLLMcXFbyt1DcyHcCSAuWoRmFB7wNJTnY8zmzt1gLjTakKXzKji9tbLNcNYxs6cUK",
  "key3": "2fayRJziKAM2jYdvyY8DDvHt9K1F8S2aWEyr5qnpTE84ktWMX919EJTqV9BoJreJGNfppfcNDKzpRrSsQDfib4FF",
  "key4": "5wPs467zUtWwEZ5yPRWLV6kUpae1wLgyKfcs7d1ofXqKss2CnDNyaKmnMyjRkpdGDih1sgqeH6HLhDG5pFfqDor8",
  "key5": "TbVvo1GCzBcmwStmERFiKMozm74Jz9gheCtgexDbsBvyVr7Q8cvdRvDWWg8orb51g5VCCW99Y1aL3qpqFp9Ux7V",
  "key6": "5WNRG97CYg7wXmdrr1TRYfbsoHfuLrS8ew5giJb7b7JNwxzBRDk2S3UC4psDBo5R4nz5Yy4DRNCTztrgwoeMoGkE",
  "key7": "5pvvGNh4DrKJk7mHDFomPDwRensgrjfY1PHjTFJX2qFHvVnSC1sot4wnyP3Nhg51ZrBrihDZsTbx1VHdx46w5dXe",
  "key8": "BYkfRdRWf5XnJSDiAHfHumYpqjQ39ToHY3Umstqsgg9BiWs8tpXRc8cnFTRnmKQAwBEi5gpetT4RwqUHZkG4Vg9",
  "key9": "utwM3KHsk3V9CqzR3bWY5q9HViWiEQD3e3wBu9pBrbPhp7C8wxNWczUUnJHFXVH6MMJxGsSYX6gMN8dTcUhQheR",
  "key10": "5J15Y3jVX1zF2nRMZkzp5BBuGmrAGbNQPToMbRjDALD2LkbcPLEvVPWuxD9VoWGb4CAMPhyznQRhsBDMLRUsN5m1",
  "key11": "3eNxxAAmFmPiB2hcUEiuHPZC181heXxxFm8tSLXo92wNqbrnuviHx284MRFjJj87NubKdwYUpMpXhaMg8HR6L7fu",
  "key12": "4niAyyi2hBXGzXFYo7mhRt7i4UJwjj3ppuUu1fB75MGFdmRZ4k8wtsiLmLjy94KG7VxArjRM2ZpQewGEku4h9dSu",
  "key13": "4agk3wk6wf5yTwwcM5VoP5n1Tacw6DfBDfgrJsTF8CvP46LHQbGQJVZdphVh4kXBoNtRbeN54Km3k77zrVNH4ycg",
  "key14": "33FJfSBarBSkhYcv6yCuK3dsFrcvXij6rtinbftx44M4ARgsTBqmrnDUJsraPWfJP6N7dUKAY67LNSZELWg7HG68",
  "key15": "62jRnWR8EjJ7j8HhakMARhqUrsgUmbnYD6zNL4dHJB431tLekKEYDbwnjMrZxVPp8JbJdfKm7YzRJ7exVFNSeuh6",
  "key16": "3pJjRYqcqxjaNHxwpqLFgPXCbc2ScmnMRptVAT97DuUM4L9gqCrKDK7aoZcBcvYghEKq7cC2Z7HLchxsiCoUg9nr",
  "key17": "2REYYExGGUbyuc6WQ9EjkT3i5T22tJnBNTMdiQyzfe2PG5Dpu2mDnSmcdonQUxSsM8vjEGHRoEmDt4zsCt3TKRLg",
  "key18": "2VbFRDLRW7JCamPfpU4VLMmT3DR2AjSr2MjH1ERuCDTqvVRdpfrxjXii12AkdEjufE8DyYN1pMdU7we4epgYKApc",
  "key19": "42U6FphHcAGyruREXRnUEFDMa2pmxjdRpAi3n1ZTMz2wCNFM3Ebo4kTQcytfqmTVy6yBAjQ1Ndv3swL45nf4Ugh5",
  "key20": "2yV9YgEitokqKHfdmG6PPYtbq5pifbpFzbK2mxEwbQh1bf5bP2wA8DAMamE5iNQdWk2TxbcKWBC4xtCeYaYqC2BZ",
  "key21": "SpPwNEAKoybMzN6vGSQdFNLAqCuoidnmQBswHKBCmU1n9hBKWjBmHP3CMF9nLvUGNdkFdaWGcGaN6TaioopSZPy",
  "key22": "27MExPWRdUxL1rEMsgjv7FtYAKj22eKPwPjA5qACRdmpW6BtDSu9oNvWuK7T8PfMYbYHcuhXXvH1U51YPn8f5nM1",
  "key23": "49JLfkqyUBEPgnvFDGw9R6qqfMPLo1XA9N36FFjh1gacSjFF1ME9zwoqkcC9sQT3n53aaz9X464aorjaTS9YjpEK",
  "key24": "2fGbWQtjzbKc1uDCHmX2Ns3s6tFdR9WLdtH3mPpA9fhutAN4CEGRLHD1HDtKe5BEmXZ2BWsLmMkWu8p1a7NvoXk5",
  "key25": "26JKbYGVfBHhmiuwCKjk3HGuGKiH8jv5opeMx2zkvz1WaimPdhhuCvfVTJMzA4FFWJrD5wpTnhpBstmvh4GmhTum",
  "key26": "4G3f5vkmrLdzyA6vw5pcSWMPJKPU8cocmsHmXmvHSHMJAbqNLasfFUHiDb9QgwW9SVmYEcv7YwGwsf5QMNmUncK9",
  "key27": "pM3ChKww66etci9BUQx2T4SCbWkvTQh1v2axfVq3pRGueNDR4U8fJWYEDEiMVwiZQuv9kroRTZNXTDTMs67Ac2Q",
  "key28": "SGpjd4UUJwVL1MukXAmXVQGEVYsa6MhdJ6nePgndTkJYpZv79qg3JBENsR5BQALZPeQWAZr8Gf5sYmh48MMaLfs",
  "key29": "5UGNZn9FBTSt9hGHM8ST6teC3TwZsnFtKJf5KR2KJTL41PKqcmn17cBkXm7jBwm3cVGA7k1PXAYkAVi5LHK8X1fJ",
  "key30": "2bJgiYezcvJwrnPR54XWx4U6AZ35bDLNEwx9KreT5pAaWDNXexEKVG3xvgLkKuSwR959zDF5osfh8MKwSev6YHbF",
  "key31": "3FBSwCcxJBfksAqHNvDiHm9awzZsP7Etef773y2EEmNqzbNTRMEhZyWZ6qaZ7MvE32K71ipXntkdWhsUG73bfx7L",
  "key32": "3aGibdWG3JFnET9nKEJQQRUhgkEzHGfNYfG3y97QKTDTrkFhWXzxYAm7nQ4h8AWZ8zWpUHUxm3GifiYVUj1thomt",
  "key33": "35gYgZPUumj7VW4yBkEbxudqSwUuokXHmdsg5Ax5p6Nmak94jjsRxjFVDz1EARXx3srfPJmMYpXBXXnd4Vj96vzr"
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
