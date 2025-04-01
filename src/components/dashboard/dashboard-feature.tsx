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
    "3uU9MFcr3gbe96PQhtmgfNXR1nT2cVLZVRT3E3KjyuVhj9TLUpXHBPtMzb6kg2u8EVaJxphPP5z2sMbMBs6xADU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LPE3RNdBGxH9ydWWvsQq2oDcxTBvG8ceHZpukrfkgtx78SJi3y8491aMk2Nn4wnPJBpsF9EUxpP8YkQzhMh1RpR",
  "key1": "3DDvuTXqjMhAtwpqfQrss62c1Tp4BZkwAGRujAtXE21xtdckUAcKND5g6cS72GRZGPo4TVF1xVzmsLGmWN9uieSy",
  "key2": "43XMcJRsqpg7BwFZF6kMZDVAeHKFR6g3XZjZhrmm6v2YJHLMTcM1p8fNY9LJauv9PyiavcDkEvMbN3dF9pABdofn",
  "key3": "5GAbnVrmNZd6n3PT4hbQJvJxzSUwh8KxtdBBKSFLdq51sbS71H13Gzgbz1suPvtDDhiR7YziUoQpNxtrhfndRqtD",
  "key4": "4N4cGzZYpL1WM2LozVFbbNWVcbjhZrFooFrkRBB3JSmoJ9Yt4eRXF9Y5FX1txn6HWjbhk2apPB7KJvnWKK1YfWJ3",
  "key5": "2rByWmetHvEGS5Zuwe31ota7rmp99oLwg2qCVvkx6LCnEhbhYgtMnQTnjvPDTgJDKHfQ5sjG3scicrgJ2yqvzumn",
  "key6": "2MYcyQ8XhS7XaYUTXkFsLXNEoDRNTqdZNEtgQoPTMnCHTL2khus2Bera6MJAbPhbzLb1eYJrPse2Jgov36xRVZdF",
  "key7": "4zfkr3KkcCXM7ESq333xBwFx8Yrq4vyegTdftDrTKGU9EpTuGPqsCkroa285yXqrRj1zrZFvLu5CE8gNJmmh64vb",
  "key8": "645jqmVuJxUnS88DyLFRNg4YjYbR2mAD8NvZGVpqKMreTheoNL7u4rSmPSFcJcF8AZQhQYEMm5SWSXa2UoiHBGMw",
  "key9": "45wr5yKX5hAQA1A14ByYV6casvm6xahERL1N7puCm2af79yzJphXiTyTVBRguFgshNtg3ZtBsSHXKp3XvF78NaqP",
  "key10": "2UiM4Dqf61TvDZpiR5Hb3u5QbamQrrAG9SsUzJovCDFFV8gFavnpECTEmk9LfnU7g1PWvrodCdHJNgv4AdyHFrkN",
  "key11": "4ACv8XZjBVELbkFr2kunjwPHHNJFabYWixdTSniTx4tCtxNUHcgoh8LjwurBaZekGEeUCfxi7JTTsZfTcTSjv8k9",
  "key12": "KibWwZn6wWQ4EZVSMAam6ykPJdRshhdsEMoD3G4gfWsD2812zzAiK7GGAHQVjVgBACghnW3KATgddyxcyJyDdfH",
  "key13": "3fggQSJjCc7oMjfdHzPchU6aCxD8iPH8BmBfuajfoonkt3XVtNE28KLLvNkdXpX7MyuAVpsKkYMmMvkunKeb2rzk",
  "key14": "4fhsPQV7nYk7iCdvdkCyGwh55QXTkRD2kPNURGGcRSDmocN19o1UG7TRFZJAgeUU1KEqbu69yTjDFDn4Vn5Sf1Q8",
  "key15": "2KQhZu7oxZUJ3aEv4yQgD92h9RyiD6RCkBWDABKWnHk5DstZrfgc1zaXPp2Ep5P2N15Tgzj8oAf9uSbSjkYfaTiC",
  "key16": "3grqxDqvcGozbXSsLDe8PidbKG8LPFArtg4YFm4zf1acvQt8WUUMKqwJjxA317Li7isJZnMytQstDUbb752vLxUW",
  "key17": "ccFNTxRjf5B8Ky2PmoqZyp2EmDbpw9NgT2cA1tVggheS4hLPNa9XxawNDUe9PksuGQA8ckUdgjmaSJz3CVEWco5",
  "key18": "5W44GqNJe6tqHesyqnW7taqig1Fjgd2BUx3kCmf6puFUFDdYsBsFCyD811KMwMvdRkgx4PG5HNMp7Eb3tvSjjjok",
  "key19": "9HJpTCJGcgn76TUqeX2k3GDnVZNntVZqDwB8CjDw6McxF5c8fKwWqp4EkAdFyNXD6M1F9ypwtzQ3o4UvE9yRDHf",
  "key20": "xcp7jrtbGPE7xHFXHF9GLii185rnjDDxP578uRECUyDuzrW5ZNv2JCNCteyyPT89rzcRcdMrgQnPpr1qkyL8ijb",
  "key21": "5sL4wbdXmcXmaD71dDqSDs11HHc214sFB6km3gaM5fMagF36qtip4svYsabbN6WwMpU5KfC7GPpF3y6eBHQqCZ3d",
  "key22": "4mvEJVFs97yJSqRtXGSnJayyk9k2Xjte2gVSJrNLuD4nt8BnCAkMdjzFFmvWo6qaL8NraeEQ8yFztvgGdsJh3hHC",
  "key23": "5qiFqvCELsiE6uNu8ZVjuKpwPYzEU6KGhB9xx7wxkojGkb1k18ThjzDbtckyqJBahPAUAH2Y4V3ZhQ6EqSwXs9CM",
  "key24": "3K2F5EqtJnc2AVYMr6DfpBSikT6u7Gr8CmDw3fteH7ZyQNQ95tCKiLv9tv9ED1hE7Cm4fnhkLGrdc2MRPEZzukoc",
  "key25": "5evUjVabrVohKnWetkTKx9KgVaRdVFHsDdfTEt5n4j4Chr2TpEwrdnemtk4N2ZsU2XMem6zU4VxNPCciUSkwVM1B",
  "key26": "3UGJn7eqnUWjjiS9U4hhneG5cjEq3ndQtCiDP9yvQ2wkjqHfYWfhF9iQKChdXGMQH1GvYYtmAxEiBeZJNxQNQLfk"
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
