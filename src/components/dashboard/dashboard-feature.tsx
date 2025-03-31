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
    "3vMKYi6bv9azbX42fgKZSKXqvwu18iS5V2HMvgekWKkP98Xz4ypgbLrbd27kVqCXw84GmE7nbgb5YddE4tuFDHwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ap8DioFGmM3fUnt4PotU1ZzXW3Q6D7rfHsamyNeZMGsVEYcZCSPyuVRcyNkyp2ZjFSaaM8bANovCXQM9sPvvYRp",
  "key1": "4cwX3oRjdwWFSjRJpsWWFZqtdwLpYv3doxKyFA88Nm1sXX4sbCZBiJdZkRmxkoX45zdKg57UYGcfMeqHMYdUKRs5",
  "key2": "6fWK8KK7favgF8sTSyN6ycjP8VowJujCFqSPTHaLbUKG7rRwi3sBwqVNE4oUXC81WLnVjpdB36juqzupJcEYR1x",
  "key3": "2Nz546USWB2XibY2a3WiBq4C7N5Mu4VEBTieDZT2crNwSS7UDPzPVCbtfAL6dB4efh7aZPhnJYcTJquf7Ac4zh3P",
  "key4": "3py29XocuSoJfU9omJwEMxEagxXjH5eDHf6nMC6CG4JjHdNrVnsCEncAW6VbX3eH2Ln7aR7gZM5D5sckZ19yysAq",
  "key5": "4TH2wFFQssACn5df28sWZ3oAcGCQoW9giWqR1H279bGxyjNhBdyw7tLEtWUM8mXhuvA9qGB4XPUeUUQ2ZKx6z1Uu",
  "key6": "45cEjzu1p2CrscT9BqwtSDpheJMudwqBeqv3fddZioKN9cab2eHF84AXMa2D2P6UcBC6HEYthC6RoNodwwLNJPgT",
  "key7": "5APcbqPrEAEGvcB98xDJ6WLeWhzmHJ9qQTwZPWB5bLKVZvWxbJUJyS1GKjiTwL9zaWoavBzUU5pyVfy8p9Vvs12d",
  "key8": "5M5zgfeZPUBevEDKiVRJZXyXs9b3Dt2SPBpJSaXkqcf82tr1KpNHVZE2ZheJ7WgrEUAfk3vjH41n5hipsVzDSEeS",
  "key9": "4355UQS4NmKi6nCBJRAgBPv95B14XGkWJrmMaY9EMX95oUozv42vKq24kFUPdrfYbJ9ZEEgYQXrWnWaYM9BRZpkV",
  "key10": "63RmydgtToBxorYAb86dmsUjxRv85mRPjDT3J4QpQhQfGi4diM9i95LfjwN92ucKFgFiMMxT9WB2rKVCuXV3UKbX",
  "key11": "4LHwbVtSoAVoBhxN3bwpogKPz7iZ6q6KekLA37S1hzYAisTqgSvPeEjzbC2mHC9DFNDEWdfQjfZ8HyB6uZc1nYxx",
  "key12": "2trSbMsQdtECujbpb8SZT4GUha9qETs9c21h6AekKm1YSmYC6aEyodcPZ8fLmSjQ6tKH9o27jNixBFZyNrhKRXeM",
  "key13": "4JEqEFpMyHTARSmX1zn9JRqb9t7NXrN9QQwnM93BiFRc2sKfEf2WfSouhiYVkUmHpiMcEGBZC4GTrcZW6BT27nzX",
  "key14": "5W8o38og44anEJFEA3qUo6f7GP5BmENKnrXRgoi5eAqhqevavNbMGMNKPgo45aa3R2iwZyMT7HdN6MxS8Cr9vR1y",
  "key15": "4TsDyNnjKLS1HFGEAr1Dvhtpwoh1SwnskAqvAZ2SYHFfGiXs1rDgymKmZDz6EP2fCGeeLn8cDSexYZN4poB8EXPc",
  "key16": "62qGNy4HVQq5nHQZoWK18dz8hgmijn7U974pmx8ojgNUAEnoKkde6KBMTWcXq2z6wFSJKT8hZjeCn21AQ3fHCyAL",
  "key17": "2XDsTMCQTXWKTgisaGb7bSafT72JUG1ySNMYJe4k8T7bK5rZhVPTXQAhKEsfcYdUGdiJRrDBvR4eb2mCUJFMucqw",
  "key18": "2nakNdycADnkjWurrCxRPjiZzDFWv4JCB5W6JCRMKP3cAnUWaioe7j7uMuJ1QafffpPt6WzCuNVgX6v3CRyqd66r",
  "key19": "2Z7xRfLFjYetz5f64im1tyhxAGJqr47Pe5br7NxAZcM1VDzuQZqn3jDU6wShktjRoevZhg3d6uoLtGBi2kS4PEqa",
  "key20": "2K6NFLfQoo7dWv8DWB3WBnNeEdK3yyVDxs9H8qrDd8QPXja8H8L3DrK6YfoMUKwtuvRmZTC29Xf4kmQW14RQiNFC",
  "key21": "NPgwn7FZkuvrUHLkAgWKz2KBMw2TuU82iMGXduq1UUnea2tkBukcuXavRCNjAaeTy7hgGfbvCeZEinAwA43QxuY",
  "key22": "T16SSV7pHNCsPjaXXLCaAg8trqvRpK2SsmZfQKPtCCHFZBZtaC5WHaYL5BME6pVfSsVprmNdEvfwWvsMcSz44YG",
  "key23": "271o6zQgVLwBvtKzMbQA1CTyPFJBjGrArFEGW84Fhe9sFne6kG2USNYFyiU7mUqHYusoupwi4T1iz37k8ybD1DJb",
  "key24": "4BuhVRg26S6UoxL2gGcem1cCMH6nV1APUG2eMes68Wb8G9s6KjDA71Gz9pFruweTpT8fLx6XCLM3FupCW9GvHaDB",
  "key25": "4jckXwRpGkjGHDd59o7vXSXPevHgkb4CYzLs7E7KbxFLZdBSGtzbBc8A6TMpXv9aMbPkgRFjnaNevsrUhSNqJTmw",
  "key26": "394mHmjtxU1JdUY4ucv6UiKrkEToB3EMui8995Cpoi8NjJf6u6WQruHMfwz7MWSyeVnKEtAQWcLRkWcbiTFkXV4c",
  "key27": "5ebPRhq2FjEngXdtpAXhXyRomoLZkqiNfpZLQs7L5Sz7LUNYS8o4yh6GSUZzTvg3fGcsrcrfUqXcEVWqrF6ttL71",
  "key28": "35VTTocSJju5XDvdVrZ3spXRgMGPkSCvYfNVRmps5HXjxXfFpZwKrbsRc2GRMkvVjiDJJ4H2xroaLvXx1D3N4qbk",
  "key29": "3kzZ5fGzoJ2jojAdU3Ya2H1vCwbmDgqgpeASVMSFJ7E4yGJVZYwhxw8s2ccfjYeChVtTicqquVh6N6cu6To5PRFz",
  "key30": "3xMFmwNt6B1QgKC9yPRcP5uxgCzywB8TrC3jwNBtXjhhZwijHBJaqJJBN1G5YexZeUDqP5VPfv6KHN8Sjqy4SBrP",
  "key31": "4Tac7Hi3oMJd7xY5KF3j9tjTGZS6wWUZ88vzGEWdSinQh8idHpJSDGjDBQkZSJJ6DeCaFU1AJbhiXjNScCQ1xfES",
  "key32": "aCDjB5rJAisYXidTn1gQLPGmaP2zP7vQVKr6t1ZPTELj2MMhvEhvK4xocTSCvTuAd61Jg3esLi3bkYShh5mfQU1",
  "key33": "33yFakqJtZXDgRYfQwTuYQrgEwxuGZMbZyUHcfyuB1gxBw8MD5uE19FTbrdou9WGGD2gbVfQX6p7AVA3c3kL2ums",
  "key34": "TaYrpeEiHu51No5P4X86NJSmgwYBNJdj7AznejbNG99rpvjvBWR6T5jBvW8QayGgW2yc7WkFVerzkqNAz1Lncti",
  "key35": "5x2uFYBt9xzsqqX2EYBih5Kz8UCFtvurH1yqhdafyq2SkMChriXGcJPAnejWRKgA4AZFadMRNTcaZHRmzYob9erK",
  "key36": "sd3843C43DxWTTEvPNDdgVxXPEK7HhK8iHRTgPF7mEnAqCPdykssZi6UaD3c3YE49zt3MJ4PDXECM7zQK9xBV3q",
  "key37": "Tiu4EE2ve6iuucPqjpFAEKUhd2TsUCJt227Yz3iQ7Ukj3iCFEtxGsbvvQiN8pcqcdjqMGNX6M6niQuqL6HdG8YB",
  "key38": "3pXtPVPTZcmVT5nHFBugKzaqXdiLaqMHpp2boeahjoshegWNVdkXg925gWfJncKs949gNAMfYRpb8WJmhgwXpyuW",
  "key39": "sr2UmynjP9NzP9cSAxwG7aonEtwAbrv9zaNtKZRLfgpotsf9znnAXvu9GnaKcqE4pjZf1TGcXiX96o28CqfnDmH"
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
