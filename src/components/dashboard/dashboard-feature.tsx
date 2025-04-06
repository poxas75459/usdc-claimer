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
    "5GPLCTrMeesuh826pvoGEF8axFd7ndsX1nv2frKQm1sg6Fz9hpJocbXygnZkmZ8xaQdSZyeTVKHARx1iQVKz2bN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yrCRqqNqaQbcnD2jjBugbm6CQptiLSQZdhxe5LQsor6cFdevaFaZnb1Q57tS3LwoU1iDUZdyVH3gMmeg7EWQA92",
  "key1": "5MZcBqm1Q49sfaBkSEHAa23mQ9rUZoWiozdQfYUq8k3aj5qu8wMjywHaBK3QLYNneWuJnKGSyq1jvhEZooosokbJ",
  "key2": "2vtVon4vdPFVxpNZWnBfwbPGWRxTbF4EhAB1LnQu7pmtgmP7y4UmGe87y5Eg9HnWD12VPRkV3znrT4Me1XWfdWVp",
  "key3": "25GSikD9H8xe2LxUWp1LwBvt2Mz6BUNgpdBRaiiK2zt36HTr8W6m4fHLm6QLsKngjkiuc2hrkn9aN3AQfkbADSHw",
  "key4": "3JahZsFjsEU821kK66ifXLyL9JsYnwxwQJrMhKi34JYdch1J6dU4Nt8BQfQN4bMwz4XCa8AzHA7Nmm6rKRYUkCj3",
  "key5": "5bhZQbA21BgjN4sDGE8MD7SYJbSFyKrVZnmR6YhMZsY9hgyvQwCFSnghkegxUBX5Sov2ZFCwy8VkpdKctWxThmyQ",
  "key6": "3226d5zFvY5DchNsz1wafrK2HrJqk6LHqK6vMmKiRW7X4oMF6kmbQEVwwmepRdijRdwRtqSN2Wd5bFSy2JXKyBvw",
  "key7": "4qk3DrvcXYrm6nLH6k619ooxkcQs5Le1STnDnKQHRSMJSZ1JDva7LdEMYRStTjiQnJgstmCkPvPujdKsu7mjncgf",
  "key8": "5kRDc7uHMzJFjZebdeC8vxv7h6mTgmGxrrYJC2gowoEax2rskDMvNfk6LnsUEHqRfb9FoXGaTgkD7hUprGKq2WDk",
  "key9": "39ZxgwGEpbLWowoMwAAn4KkojHA5Su142hMFjZC2UL6H2K92Us3Q6o8zpc7pvNio8vHugKsXjXeyRaFZvpQNyx5C",
  "key10": "4Dau1GN6KkEmePDkxHYhdvjjmXKwVUGrffCv72N9WQyYDnQqFkXiX3YuihUofD4D1HqEvWJQtDJGnCKmg7Vj5Y6z",
  "key11": "5jiLVevvkxCd788tKnvXVhtEWQ16WniG7ckaqoTujHRwpFAdqLb1vSyzCPzGhwUmKWscgzEYKaMw3DK6GtNzrUU7",
  "key12": "4cNUCqGC1UeYV9QjV81moyBFRp9ewMCZKK4NbPqHt4R4MZBxBBg3ketC3SSA74FZsw7Huj8ZNoGfEz5wjda736pQ",
  "key13": "X8Aba5FW86d66HmzQggFMeipGKGd3cXaoUhT5Ed6GQUThwhWd2m8gogh5eMz1AH9eGaz17HvnfTjSff6vwo7qqE",
  "key14": "5Fi3N6v9L56A8R1heAHp6ZynAYgVnHqkok72cbRv5xFSjxxKBoGLsd3E4TSc467X4qVUiQd7Ggq2eEq12UTmGCNn",
  "key15": "aa6nTPgn7UXkUPw9HizsLYzUd5DUHeSwj4Ro8LsZofsQwoYn5p3omCckAUo7ohRMa2E1SxdiDkqovCWtuihgrQL",
  "key16": "3mhzPBPi4e5xirV3xW1EiTiMokxnfo1cgAy9Gv91UPxosq92gNwN19kmcaNgSZHagRJWB5aWrxzye84q6ZVQr2UG",
  "key17": "52VyoDiPen4wxpkAn4Tn1cuRT3KkTGX9c97vLyH6AL9EeMXKE6q6cpa5UugY1vZkoKWPtFj7T9m9Uj9cgd7jxvxu",
  "key18": "41Pfc7FnDVAHvyH7vRVvfGNgfkyCtNgWYNJ3PZ7WTUmZdy83Mdp6H3Eorp749vGHbEwGmpXKdqaaBpXfmNTbsd3G",
  "key19": "3zeNnETsDBx97sWvvdi6X6gPvAMbcbGXPeSpBNPvFuSu3VyzqPhM5gJyzJJLHenLbkAeDemBQYJA1Xwb4yW8Z1SN",
  "key20": "4BmhHcYTuMnuT2AVTm8eBJQT8eJkdsdXvNH96EbFRbi1L2ZNYdMXCNVb27q5UuWzsgVrkaxjPVCvLYARhK4nsfLx",
  "key21": "2Jp2HKMZV4G1tBgTkyCCm76riKphVoGM2jirrAhE81f7XdaVUUZnt1McaDpowKFQT2X3xpExKyjVy9sEVWTEtuRh",
  "key22": "3PAvextSbBgdSfCMG4Qe8oc3ZNd7AAsEwqVnqMhYRX86SJpnVN36kjVR1tsstMbDDftKhRaojqosYTg6wRKMWmqU",
  "key23": "tBBcDNLfD41SeHr3uk1XHFyiCanyC2DpGUpQKMWgBKHqqSuxgy5jckNojsUPi3tJKmv8Hnj1EZKue5t2H2mpzAy",
  "key24": "4QoQDrLNVaRPg18x2eTN5tHNDgr1Mo2upq3vUKSBrqwvkzabhS34Z1CmPTWmyW9JbiAs57qjL1eEtLXp5myy44P3",
  "key25": "2Ahq1NQBAryQzxNNKt8QHs849QRxHAoqLs3C9sV9YkUyADo2v4WE2TxubWcWYfHAR8LSCVs2ssHCLNe59E5dRrSK",
  "key26": "5Q43ohh2EFiG5Dgotb5ry86c2XLkdQqJmkt4pp345bd3rpveUYFzC51jxsb9m5wGtGRWyUoQG13Vw1ewDDHTD3Xx",
  "key27": "5keYtD8oSTEgHDdLiUaQs6mTQrb4yABxc9efWPYZqmVRUPbjxAEGUSSrg74PieMag4Kkjb8WCim2C4CyWmqhXnir",
  "key28": "4S3epK3W5UzmhDSz5QM2pXQq5JMpChLcaVC4UettoFvvCVccy6nuRxWqPjmEUyRfS8AZzp7PWzbMsHZghYWi3iBv",
  "key29": "TtPDQ7e13pKYYt6ZVdzfPBkyRzE1CBXjxRib9NoD7kB9hRLfqYPNq32CdZn1BBnJiKxV6BMFMLeeW4qGDYVoBrs",
  "key30": "52Qmu713ZD6A3nM1mRDe4DUfBRVxdLpYefbFZMLQec781UpWtvpUjGPJe58oVgHg2xQbitn2jGBM2V4oNqoHws9L"
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
