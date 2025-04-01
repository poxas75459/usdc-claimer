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
    "5VwuvrmKxuKhNkCcJQsKeanjsHKjkJEpqH2UypWsmxbREiZzN4gkMjSUZemaXnA7SrW5NyoVjyPHP9EJcwP3mwno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iksKzEFftLgDKCTa37Saph2xWiHmcS8ebSuYtuxmB2h3QRztMQk1jQMYWbYfntszErJzQZBfhM4BfMdUL8vsV5S",
  "key1": "2Huwd3a8t32dSize9FBFCUigRfHKjpfdxZTrFXfV5hfJFm5YY4XU3arTsyYbxvskpwJhmDVrBzcdbxr8iA1XacAb",
  "key2": "oufnNu96deP7u5W8dihN1VaxDnk8o1Cv2teHRGB3Vkx4V6UupcS4ymNiqZpBDogXiQeoP1raUunKMEKDgPbpNAq",
  "key3": "1iWQyaT8fVB7hrESPiwJvzUq6ccjGU7Yb3wUTfYpYsBiW9iefLiEFzWoZCWNMg9Vncn6Uv6eZHY8TD1RuPzJAm8",
  "key4": "5Qc1htVu4ji26R2xKowP8VEKKcicCatNbBCeDaWWAe42QLLmJUgVapsSAUEHcaEfGj4AZMRpJNcsyhq6pBH5u7Yv",
  "key5": "2XP8HRpVpHLHBgfgosxNzRHwFw3GbDD6wm2RszsyFFUg6WBwHmYSew89RhYRvUZqm3BcyYkHDEJwqBKWP9G7F9Vh",
  "key6": "4t9VVUYhhWKLSoKpiWA1c4W9nAjuwrjZ7a8KjaaDrJpDjoPQhyvy9PquSdPbMSNZ8pn96jgQzCZJxYQxEqBxyYVT",
  "key7": "5Edz6LTiaiN6wohv4KjEnnkvQpb5oEebVSd8aMtwjXFLSURVjUsZDBLGQUfbN1uWSwn6avowQFefVtSmE1jkLF7T",
  "key8": "25oeg4wCBzbdeoESKqezZwc1WSVRN3UAPUcy4E42W2KXwDtce2gSjvRnvDFjMzwZkJRydRGwmEEpYCK6nV9R1yKR",
  "key9": "2q54KgTduAcS4jsEcpF2wG8E5o134wpSPZTjL3LN5PEbm9AX72aH7PBw5VGpnF9zhm8CsD5gVJFP5haxua2gUhJs",
  "key10": "UPnb8fRkPBDsnjLud8NLyXMe2EFjwEALDj465jYdUh9pPnZjwzkfQtpEQz7WzoNEpVzM4Z3xfRhoCNJbrt6x7vj",
  "key11": "J3GYU9gKEiQa1GmkXShjQ3mSdZiUMatcfDtBta6iyLa8qSfwm8Q7SQNzyKuXE1MiKGEJbJ1podtkTZ38hcRu5p1",
  "key12": "2iYQa2JXpagqX8xZSdm1ktr3ERxQFH2fovkK48iYLt1ZNgMR2EBHstCV4wRXuj9Q92f9y6ej2p1ipQZPGc5Yi9AS",
  "key13": "3PT2XFWZ4gLg9L6XdRErvmRMD6CgfSt5q3TcbmoXz3kNPQkWtGSMiz164mxtF4bf1NzEvCYQUqW13Ctke2S8vS2p",
  "key14": "4nr6hD4R1oPdjEKo6hAVhWfJ4mrhUc44fMvnjDny3ns8ZZU6uYkB25UupdJBxAuK4fbow6nhnRBv5aQa6Pn6gtfW",
  "key15": "3kUTo7jxjt18HQgpxfFstUNqnCNWHqwrRRHa3BiTAEeAHrrFiUh38CXjc279Hxm3BTPNVGrTfzMYrhXnuQqiLLn4",
  "key16": "3U2Bei8Di2QbbQqjwBYBwmnphSDyhSWbLmf4BZaKxxtH9c86pEscyeyEpzuPTeKngt8Dx2YS8kUn37tJREP6zeEs",
  "key17": "4FptS9HcCJHaMD7ynrgs7GzeyMGARAt59HqsBUVKrWUYABzQ17FV7RVuNzGkfqrksogw5o4Lp723RSQ4XTXPSLsY",
  "key18": "46YDicmGktX5LPWVT4HQsFLBrqsfou4yYCNEAcLBm1VdrpofAUkNQm17rZdP1bpmos22nHt5qiPqfFXy8Eh7FGZU",
  "key19": "4mD6YSzEFnXPqMCLFnvzDfVHWsC36ghGrZWdQ1SBXdSKa3XScMTLxpRhHeMKq1j3EwGWMUJzgRovjjyt7npCFNuM",
  "key20": "2hU3E28ZperzLcj1Q1CTNNW2Uh3u2qZmmoUHDdLT8oDSQkiKiUGRJpFMYH4EerCCkDmhyP6mEkoAfZwcKUW4RosT",
  "key21": "3EoymsXFMZKfY6BoRSsHDVXxC5WfSW82apT14fam1HPe2ck75XPxvc9KensVGMBqjMSZzxgVtoYPjLJDWRJJGsSS",
  "key22": "2gp9EN3EKF6jTfifkiYh9sWYaY4xQsHA9NaJKcP9VkmUTztbBnYptpmwKVHYEQ9yDcQHdEuQPn1imcm8JBtLXHaP",
  "key23": "64ZT1dFXfM8doSPdNrk7qsk88Mnaq9V8gWwGupw4UyPezUuSWT4ipHxhUFKLs9WFdDkeasNoFZ7eCXXJkdKsiGMa",
  "key24": "2KYWkm3HkG7des5CC6eUTDEctyHYHeoCPABr6sDwcRQ5YZ17xtyaRUvXRp2TWRePwaZH1kJdoPhrVHKxzSi3kibV",
  "key25": "4G7QPUMop49mKe1BtFM5as2K1S5RNYj2G1HbHH1APXVZDCYLFekHebaujBwU7wap42Sy8WrB1vRKep4qUg9hFy8A",
  "key26": "5t513Jw2SuSCXYRxFocpwJxmeiTRBmdjfmtmYxnxKrSDPWx3PXNYqzimySAWFDaQBp8SUHtZ9iSGM12nP3d4nZkr",
  "key27": "2tBXhf31rAsLYYSeMKPsc3eG5xPYASfwVgJkKnEr58wUZgFr2A72bv37yWSVm1QY7XjrMSF6hKNQQPHPjBJLREt2",
  "key28": "347tgCPYrs2r4NvQkTxr8UAdxKCPNrcR2R89LPw2DVrJR7WYme9m6Saue7MBTnUdy4YsiZSRwoTYSnngpsEeLd9p",
  "key29": "3VgT7twMHAtaVhGQG7cBDNfF4e9nLESBn2pRfUEuiuy2Yc9UT8CEqEEmMjUF3FLgDFQioKSTroN7G1RfmsfNu39Q",
  "key30": "2V5Cy5Z9mvpacRWhbxj5FQedVbPABgnT3qenVM44PiNnhCRvTsM3mqQmerPiNKpyXsPoup9aCU2VAJbMr9zV7RQ6",
  "key31": "5X9Hn28PNA86fg2Mfj7FsAMFMhPzNPeTPi42ZyUskZ6kwSCfcthn8XpK2JVaND2ABY5U2narLkf4BhuZyC9NudZv"
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
