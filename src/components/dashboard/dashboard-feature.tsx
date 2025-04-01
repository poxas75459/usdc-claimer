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
    "4rHqFwziKRjFP3U3f36BBtyrPsj34WasccTGJc9VSxapQrSkogeLkyFVH53UBKppBSRfrtcZRyAcpqyXVHkSXnce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M87AKSERv4iQu9FKpQAerdHvExv4k1bhaCZkjMFveJWEVfE6qtjKYp1WCRqUDB3dLRSYNLj5oxFvtwfRLSfkkDn",
  "key1": "fZ4vBGenwsLL1LFBXyjbfVMAN4QG8wG2KUctYaDNZ8FxvCAPbuy2pZQULWptUwji4nuf1CwcQMZzWr9NR9q5RuG",
  "key2": "3LerACppxmixhwXPewX7M97NszWSMWaQpEXhcWJfNtEmLD5Sn7HCmcDp55nmGfemKBm15sp9bSMiBD5b2VMQvgXz",
  "key3": "2mYX2whPEk7DKgrPGcT3PDM9sJh2uNz6eDUCsDnxKLP9i3cVkPM7q98ySUsPeXhyU57nWGLoyzUtTcGUG1HdY7P5",
  "key4": "2bfhStpd7rUQoMCAjSgetoB4ceF4MUh52dJ4JPLGXWQWcW1A4U2R952oouamgmSjDFkrmUWU4RMXqYekSS1Eqdo",
  "key5": "4DcPMdrNMQ686jRhSfF9YfZmyU2vhxPYzzk2EWHRdNJacCH3wjbhA8VoM8uJWayAwaR4RU8Fg2oUURmS7Fs7w8MS",
  "key6": "4RNfnkVFUEaUAuZD8PBxKFs928nbC6L9XGEmCHWeUu6sqiBFw5sJAkwGyoGsnZeKDJnBMQMfaHDCkgrzzAb5NsnP",
  "key7": "5KTxYxsFk9WL76ay4nUttyjb58Ft2zAyZoadK9DCbbKo2D2ff6Kg2BQUMRscJMhdLJSL4s3EqXDkfMX49Kk6kZis",
  "key8": "w6MYbGrTMqYMexgSTJDkFDM6umi7vgwp8o2AhqzmTNKEc9UbmwaShj8kuiqcr2dRzdKgR4Up7o1KN4A9VmGnyNq",
  "key9": "3gSSBj6pWtg3vt12S4ZThVhA4r8AqGmGCzNJimkpmzUszL4QSFbLCLoaQ5ytsKjD7mYd5KBSQZxMAELHmF1qbujL",
  "key10": "4YeJmnHLTAs4dXSkrdwf9RDnB5EDCq9fsC7ExeCVnqPAoQGvcgKj9TjLnFtKgfwSow6Jc8pdHEpb9wcrXm2Yu4rP",
  "key11": "5NhdVP9XBwUFm8j6aYVFR6MDFN33vfgM5dU29hxuqyX8mVsB96UNuCFggJaQXqqy2jfNEjLXdzoud8ypJnaU4ATH",
  "key12": "5i6NGJrHLrq77ve532bDx5aDi8wzjQ78mc8ZTuRfhSohjdUaKk2ZeVQyEvqqaLp12WGSwndKp8gModWp1AEyouBU",
  "key13": "3d3WbjF6j1876JMKqF1TAS4shkvPY6mUoFmPL9NCPboTPYHyZ9z59MQwZfeNyAsNJyurfznbRTfQG7RXAD2G992n",
  "key14": "2aBPb3gJ9uTEJwC9zM94edvotWQocsewykhQUsTs8xRriANqtKKS21Ac8k618dMkiiiye3nTiyLwYb2PQikTdwLy",
  "key15": "5uNwbPQuhfdYaXxfkDFXogXAc9AP9LQ22Hr9GaAfeVcaAXVTE7EYVtK34Ly4fosGjcn4CUK9YJEr171nVbfJckU1",
  "key16": "4dYLQTxVFRGK289uLDu6MCwvGptDLAN4Nda7xH956YznrDpqv3BjG3h5rgeJ6QvdNEAutMk5mgBV86QhTDL52RzM",
  "key17": "4ZN9zddv1jaPWcESe9MpPTRoEJi7Q2NQQCoVyZv5inS9sLAV8qjdWBToN5Jm6cYcoWUSk1twCbY6ufXZitFceYpF",
  "key18": "EdN8ox2rEGnHHBHF3NFnf5477XdRzsRxQgDdcxXp2FmJHxQXRQZwoSod2KHwPwwSoM8vj3HYCrEoNtruMLPCsjc",
  "key19": "5XVtvAT9feu4r5B7BPVbPy7WjPHXWJDvCW8THZk2HMc4sM4huLK7RUX4Xk5LcR7X1TG9cey7WLPpxZ6ad8vfJFbA",
  "key20": "3bRmkRHsoiPquTYEcXfsjtWqwLKg2gnhpsrRiyCXKks6vJbunosuey8RLQzgW3daJBZKvscMLeXU3XEG92HXEJzq",
  "key21": "54Y4P6oKsjSCeMHEqu9UkaXFqY1wr63au9P1HvB1SW9312wemrcBjo3huAuHqSz3m18aWb8ZVasdHwf5UeDr2aiZ",
  "key22": "MkuitCa5NSQ5Dt7LjNY8vpX7we5v1qnLFYAWmkDbhDmk8MxxFDJ62LELyjaxbLkkfYQKfDzgEHdT6KDSJL2msYu",
  "key23": "2ZHvH7woWr7FPv12KXqnJUpET96U6iWLRruBZss8waeSyaA74qEAyhBqEwUkaxQD5iCpmbnVKnJ2wqwuFZYUYqN1",
  "key24": "4JtpeWvC6jjANLxM4FAuL3hP3SsJ6YBSy6HtMErsy76AXyqAWoNVGJPwY1sqxqceBAmq27CB8b66wGymDVY5i4M4",
  "key25": "5Q8fCgrCHWVBxqRLR2uPsJJojAEE19kCM7xdzrmWhiFT27KArJSm1kovsWCWKVrHYSqNNRS2m8MjWgfP7XHu66cB",
  "key26": "5EKT2qR5XD4dR8yvjSAgfgy9ByNr6rd6u57eXCkZJJ6ePySeFXGqnHJkBLxujXmgWprTY65MTKVRXWPcaPnbPxuo",
  "key27": "BYcW1hWarjjfeHXnwixTeR92hXhKiWpSYJgJNc1EBBu1yHyJyFbPBCYjRK4Jidwcn3afnwdT1dqJm4uxyLQLwUj"
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
