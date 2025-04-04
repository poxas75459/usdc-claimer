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
    "KU2GrzoMmVCFo579Hrcaf88g9tyjQKHq2eVEDgbNo2zr8RJdJ3BSGJDx7affLi9Tmzwmf1hZhVEXcEJprJsXKWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xfTFxVXQfDVFx1hhcPhuUqe2psguLDEiV1M71WXAADoSGXPywQkQCiQV6Xbzyw1FHLo4taagQe3LxtYj1hGX7wn",
  "key1": "2Xfoo7BYUYFSPwRJQbXVXZNQsqXbKapimQ5hqqYGGCg3L9MZvqgfjKAP6csGMa6wQxGP313QMATzSf3mcX59ZqQd",
  "key2": "3oNnhtZkUA3wJXnNLT1cH18he5pSbn4Z7ungwJaa3R6eM2pHVgxis2Ezmp2AC9M2jPQYk4Bo1fXx7eXa4UU49xbM",
  "key3": "vAHhwQ92gAHDJkDmEACE6MmCcWHsHovNGTpDT8vKRXpyz2QoXXpttWFGELt9R3JbuPyPEVThtdj1zJxHLzCPWmv",
  "key4": "5xrqu7TQc2M1jfhvd1CWFzuX22z5JmLt2xsCTA6CLrYBjtdn8ZYUPSVWNejPqHkkZPMkCxrtFqaUeD3kY6jfAkZJ",
  "key5": "5dA5BYqm19XB3Y4XWHj8Nh6Zun6cU8X7iP5AceRqZw4vLc1R5gNcGydn4pN8TuBsmNXdaxg68RxyunNjPPnsFSRT",
  "key6": "2T4pFH7Zt7tZEeNQ6pzqM2Ey1ip6Vinua1a3uphy78W1HEHtaSH8MmsbZCoipULSaQ7MozRMeW2RkfTJBioyBX6W",
  "key7": "f4CBptnnpKYcZo6WNU5QvyQwhcGbpaPgoN8B8ZHvk8ogUrM9KbccuaJURNsn5Rxjj36aDhVsH32ASJUgMBueqcs",
  "key8": "4gYowZmtMeiaSta8P3AWindqFPH82KbxNvfMDBUg11yMFarhXifc9R2GYDPXckNSdr1CNwa6daqMwdpwdfVbEnK6",
  "key9": "2Wtv29hRB46hj6GcLocz2jiSzvSuBJuUnwAJFr8t8DiwWpvsyxdpyEkK2SUjT2f4fXGLBnaMV5KS5DNV6mU5tWRG",
  "key10": "nJ1X5yPDL3tXTCD9Ezv4HYjPdzVLuwudJsoY7F67av5dH1ztemNqDyZqcH2k27Gk1a2Q2xRw4WPhptyXa6iy9Mu",
  "key11": "67g3MGwJELA1vtkB8CsJYdwnJ1sVeG6WMxyv46ohV2i3PvkbQC2L2Niz1q78w8vCLGrB92WtW3TjJqWwfdQn472q",
  "key12": "2Z4uLkaxjk6G57R8KhggJtuzSHvsDYkdVxhN77KYthpN5ZpGL6Q5gndLTbwN3HDnteDbpAcqne958shdjnTx2nvT",
  "key13": "29Ky9Bkk3ApDV32fwoWy9w5mjSSJHqg6XoJQdkqHPuBjxqzK7q48UpswqYduakXdnFH8q1xE8wUCzYmYtu4oer19",
  "key14": "4vQXHPR6vmCemZBYeD7CCWa5Sewk85jM8yyi9pBBL9hCDbdCbyrVkrGw55HFjYxaHqyprexdPtf6Gtw9S2x8KGy",
  "key15": "3wSPhzNYtuh3bLnpiJ76thMLHtRopuqweuQ9vCoomkURsFuWSKJuJU2XwxqZtJmbE3vWtBrP9QJVrNu91wJoQ5TL",
  "key16": "5vGTcm71Aa2hhonBeGvhDLr3o6HzktsUirMsRWgr7WtCDNgJruMzP4A8gqebrizXLzSTdnD7eqBKEwhxnXJbx3fu",
  "key17": "299GSBhpqoBhTbGuDxeVz8S6odXbGwTkWFPrg1A38a4hVdp8EdCBYce3oriJNs6H2bkpDE3cXu6n4z5FtdvXZ6Ju",
  "key18": "63kPek88NwM3Z1eRxRyR83EKFZnT3LksxKda1HNykkHZipajvhKAZfAmLD2eZtV1TKHNBghayTBD1MiEBg1S4CmA",
  "key19": "5uTwMw8EMoJGvyTnovHWskXmrTivwrfCmU9AuNSnC3jL1b9MRg8udKGotnJmmUvYwpnBgW5ESQfqypL6egWd6bz8",
  "key20": "2F15RaQDZNjHcxGaqKC5usDmrVncoyMzenwsMNcwanSFRUossP1Cyz977tDcd78FauxNNwKDZtkL88x96zNupFWa",
  "key21": "jCWywevU4Z3bZHWuEFrtyVCTmKpL9aDg1j18JPeLncy9rwqRWJv49omkk686hspmsMLdpRmuw7dVzD6LWBUeHY9",
  "key22": "4rB7DeZZeo44Z1MT19crUk4Voy7kgrEevrtA3KYLTcDj51q2RR84UUF941KdvHrSiVaZednkZTDrHNDwfa3DxxDo",
  "key23": "3Aw7N2KwHjdcsKKv8zUL7XQNmgKQbEvRqGbMPBqCNbTYR85FTtHERL9YhqQCqWhJx5FF6FsLAaTFb68u45iGb8Mi",
  "key24": "4nAnYe2WxsWJPdZoUe3AtYNhed2yuASuVnb7Naw3Dqy2fbqAUGR6pVMm7E5gNtBAmicSiF5JobAw3gmAYGJU9jh7",
  "key25": "4UrKgMkyoaqiQjtZn5Yp9nCQgYkFSBQTHj3MJmv1vXJrk6qTFXswZsM8SbH5SjGQeMJ3rn9YJ1okXgwBQAgD6RSm",
  "key26": "3qd9mniVx4jj6Cxe47q7fTDG9Czr1naEFFFBi7owoxybTvg8b6nMw6cieAoceGbtGVX1BD5mD3cnUamuwn5X8y6r",
  "key27": "5ZEUYQMMJbHUKeJahsiGEYqbq8GeLLQPyjRxKANsQqY2F5xY4RpeUJNMzztoH9kRF6hVWeT52kXP3QP2mJTokhNp"
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
