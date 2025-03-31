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
    "2TwWsHt3eGnVbN4UCN8k3jsASDs8bFerckz2DA4VFUBEYxnCJtuQ5pk8VBwywZwbm8GDQB6n8bxwZwp6Ghh4tsRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDwqyDtsNtvcTyrb6K3AHL2HMGkk2srQukcXUbYyN5uyv7RDxuyizgaYCoHWojftHk9upRBUMzAb9RWm25tiK3Z",
  "key1": "5Hr7kqWWqg8NtnyhcqqMQ1GimuE6YycQvjpgRW7UT5L85RgvvSrgrjkYUjY1mu7Pp6iNcfKipapEvi5WEi3yeTtc",
  "key2": "4HAiWadnKfWHrDGYTEuZqPikocFeSCQpNkm8RneEE9KVpJCR1yqnbpVqTYJBv7Qu1gU3iXYyop5Ldur6z2BJe6PY",
  "key3": "5kFMNoW4TN8oDyK8CRnxu7kZE1Ba4rAwGFrxsZgbFoPheupccKi8C8qKT3kSaDzcs1fh7Z3ntUhEsBQvTQBxG218",
  "key4": "3rpt2x4rxhGzDmFBaPABvnKgVPceZDWfy7CgcpG8vp9Q1i7B4UARFEg3i1EnTkEkRwkAdZWBhQEhq5u3gRr4ZRfE",
  "key5": "5EwdK1fpHKWpy4GtvLnTomtpmrrM5d6YaRZtfVjV1HXgzkmM4d44NCBZFiv16JNdMZLTmUoMMGq75sUsgP53yENR",
  "key6": "4kXKmQAeDSdXtEv6CRoBvwuEEjdLciyB4r3hGfN1PMdqun2o25EG52rCvr8cpbR61vw4BzJNibuxYz6a1LqjyPop",
  "key7": "2wNjubDcJKLETx9v7nbP4iDrBuiFiqzKXG8ZSJzvTg6QE53yTgeVgnyk6r3RGKyN7HQy8SKzaoygGpsdZodRwwTi",
  "key8": "5KGuDB1B2Qu8ysNeSDwnUus1UbfP9RuiVMvCji2A8sAUXfZL76YKqUVTrv3SupWn5x95bwBpktmExTRhvpKW9iQu",
  "key9": "5T9JkVUKBoKcYQeZRXowXV2tgVjftZ58oF3pKVWgTH6M6MgcnuAthgsmX2asoSUcukGNZDCwuteiftb9j8KBKCzo",
  "key10": "2mqBy9ELUKoUJCyEgEnkYCS9qubBHQxHTE5oYReuvpXbSHvbGbQyj9SxYuzrvkAyCRLMwfmFcYpyezrVfRUeTfF3",
  "key11": "4NN7Z5a1khXJKQ8Wwed9p4FAUg3We67FVv5DbiYAtRUa1uLCpuHuWVoUZqoS4oYUxdJKmyYgY4Zj3dKqHJUNn65f",
  "key12": "5q3oRVU27qpYG3C9ePuNLmvxRjKWnfbmnioPLkgSSEeikCrgkUeuhH1WgrY2JGns6LUysS3CdJTC25t3EMGeQWLG",
  "key13": "wq2Rn3xhqUEZK56vNvaaYNToNUHRvHZYVrxxFetxSa5jx7zGBwm9AVTBScj9CpgBJdMiMPyMinnT6G47vLXZhhM",
  "key14": "4QZkKkqSbndh8BALXm4nzrn9ksvY6xFxHpMUNW3NYQ12tPiDPdDFR5Qa2ZBwMXcLrVCi37Jv4jci3gEbREeo7r2J",
  "key15": "CUwdLKc5r5pz2sdwy7jV65xB2tNmTsbtsAHYk2izfcfCRUDwbHKhip2FM92waMg9DFbZSjE57aFGjGp5Wycn7f2",
  "key16": "PQfNF9qKVapnSRjmetkkeog59qm61YYrYCGwG3vnRg2YL6ro6FrPP6RqXzAWzqQZ6Y8BmtjEdMmkeBnqqoGkdEP",
  "key17": "4L7xtamgmJNBaBjofZFNx2GvNf4VHy8pHnjNyRrARCWbcnRfjBhBzTCT6kH8eKnV8oqLrySqohJx39a1i97S9KPf",
  "key18": "dS9KxgDGPqHRojWEMjr3NoFiT8nDANhGcm4yV2tPsezak8Dd9Zj9Z6Gy2bUbUQTP2fBryRgxU38mbVVdRYXPWaS",
  "key19": "3mYujoUicvBbS3AJTaYcGnzuVbeev8tdYSesdi8WAMNut6z1fFbfmhADU3HkMojtLJRaGARBMYdHZoja6SCyWTWt",
  "key20": "2GaiJRAHbtiNiKcMnGirtoyQSgo6SEmDBzHvucwg8xuuw6V819QUSvmnkacXGb8oyBTrGwhPJBfNeCaHJmHpEGdL",
  "key21": "3s8uSbvBsiuyqUFYfmPMVY5eawxvsrwvD1EhQWdo1tAVATEYJHpRkVvijoLt9VAkK9PQxq2A3N2CBAPEGxshTib6",
  "key22": "41k1WBmgdpnjquMhV5DL6Bp4LJMSDDaKxHHPuvrM6VC5fiumYDqKg2tWH6wDJ8gLq7MRyHvaxSXmetSUbio57hPW",
  "key23": "4FgNJXLC26tpyf1T251LTngqVdqStWUtSSjsxixn3CiLpN1StoAtSC5VsxQqGkZ4qQR1bc1CaQcxyW5x63TztRpM",
  "key24": "62f9TTW5DvRmBuvoXRJoMpjRhgzYe8fk82mn9SPWCqWabW232MLcgvqspAgytnwb7w3gvW5DfKhWGgvxEMuzBwFc",
  "key25": "2EJisUnPVeUejKkkhjkfu2FtcB71QFRUCrkMKezeEQj993CabpH9SnwVx3FRJG2mh2sAQy621TnB8FLJUDvgLqsf",
  "key26": "4xP4kCkkd5TVMVzu5cpKaHyfVPGPCqHGevkvrYfWVQ4MGcRquEg1EVRsp93nd19QyaPZYPY16vb7mJaGYBBrNrTE"
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
