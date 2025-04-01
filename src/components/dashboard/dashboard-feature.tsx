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
    "54MEenSwFAZ4zfjFB23U97xWHtDJ3gEbVsJHDgwAUPuhdTawiQYEg8KuQSypk4Xcsoe9TRsCeWARZDxJ8xESiHvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356QdJey7xnZmTKKb31cWLjicKFbpiHa2gV997Wk38rAJtAYFBwoy4Cg9B4UFYo3KaexzxqskDeqVoncSR1ETUF8",
  "key1": "2zvsjpLqZ7V8ASjZkUf8mpc1sAkEVaRQhm1nHfH5JR7PHn8sRts5H6vnGBgTNqnqTuU6WMPxzimw2nhZH4WzJBei",
  "key2": "rW2u4YPB9Uwi6HfJY9cUULSb1dVq2HMs3kt6MTNNcX8KdARDEfjHXH9yxUWsPbgZ2u1BsjSf1irLfRSwjtRRc5M",
  "key3": "3H58A7HX6VNhvT375Xr2ffZr94DJG3bXWxDLRyjVLxSG7QYYn5vswvuTN3RuuysXkezdtpYAEvTtxteuo6EyevRN",
  "key4": "2mW5Qwc1Avbk1GmwVnTCoaiwxaj8U3uWwD15k7V4HP2oYDiWEoCszsnXwwF68gKV5FEfLXjgyxLMNRNQmboX7VpR",
  "key5": "zb2w47DLw3DejCzr6ZkMwHqtDEDD7mVz5DJt4JS8HhZAeSCyUAq5q4mZimwjwRsNNXqHK5yTNA5fSv5ixMr14Nz",
  "key6": "2e4c9nPFq76xC6iAAHicFPNVade4S7wojWWX4xFkR47f2HAtZrv6mFbZpLxfhtZG9BGi9ZaoyZNULRn7BrGSe3j2",
  "key7": "2JmneFyg3JY5Zy8oVmAKw1rvjcJeVqjJekoYF8mhz6NwQrChWshSATqTDVRYQxqSJ1r2jy8fwBWkYFRg5Xg8hhyB",
  "key8": "5hSibNJMwiFbhz8i2Tcc5bYGc5RnyhZh9c6ARYiUN6jXGFH3JYatW5eMgtnxHo9Sc2W5tswtkvhQH4pzzfyAS58C",
  "key9": "54U6Ew1iG79XG7Zp2znLov8TBD1ULFqCxSwSPz63s2A413FNksFZXZwDShLT54vRWC2aGYDJNHy67hSsXhSPa2F7",
  "key10": "3UKcQjDjchhNQ3vYjHF9wqkFfxsv4Df2YbXhstPaMDPM3X5Ypv35sALXqiibsvXgwLhwHvH43ydXsrzCn5vnj7MF",
  "key11": "4SKk2sy29B4HDHs5hqPskdVWLY96X9GAU5nDPfBUuVYcre6L3QhmRb1kGekPSAmEsHjyLYEAMpvjWMfmurLWhXJc",
  "key12": "5kXNKVzJixqFYYkA4NWViYVRJr4CppQqty29nteXwtE5b4HCV6vBsrzRjyxcTFA54BEcHRBtTTKLhUPCFL1Wzido",
  "key13": "2tCM3w8Cqi566Uqn6YN8fXXDzQgvYVoWT8LRT68peFbR55HF79q1DuXQ4WBSkBzg2DVjoe4izBf7uufmyDBUuTU3",
  "key14": "3VsU34PeXi9eKdWCcKLRw3B5vpJaLbRRQm9mg5JdamzPQSSCd5wxJRh1AejYqASdELf7bXHp2FK4WLhp4YXJjWWE",
  "key15": "miKoovCaigckTCEmVLpYSLjmNR3PiA5Y1B3jzw5T85TunQ5u1aCc9LBaVXcMYQgwRL1iPDsJ4KZ7KFoFaWDAYCu",
  "key16": "SK7TvRZpsFsyZDKLJ8Y5WCxbvqMbWGPQ2deyhSihsvJxoDj79Gtafv1rB9H1dBH5MqKwL6yTRLck4VNyuWoR3AY",
  "key17": "3q8iSCSrzB4h46u9oPi9vV8Sw9CTfa1GLDxrXpGBjxSvjwS52sW8a1MdHQG1gugm1fJu5Rmt75RDeXNkooddwheU",
  "key18": "4nDcS7iaTcXX3LkMM5dVyAYF5jWsJ1cxLfvaAXLM7FW75hM2HWx21z57zk4R7UQArRfEs1qKpzF6T1dEipsA2Tcw",
  "key19": "2zCNajbQPq4BDqjvGkF2ELKXkWhZQZFBZZ3doWhk1LnphUzFMXgvaNmBuhEPy6kwJe1V2N8RfTHYafwAr9dYSwvL",
  "key20": "2EwCrbbbcoQMbQX3JALH2z4SPeQ8jKW2AAubJ6HefSQH8YxbRdxJdJRdJTZ2XgkHFvZqWM6kK7uDUN48jp6ZEoPT",
  "key21": "5seDEBRg9KrbHX6JAU4oBXyTLN2wo5iAKYP8LbQooDh3y1zBLHwz7N7vXJFzXjuQJgftrtwiqUc5WM2DyfeDckTa",
  "key22": "4kAeKifbMvwvnWX7qDv9Vd9cq6BV3Go7gjw3gfvm1CW16S6HqPYLZyPYZndAvchsfnBH574MiUnGEUfxJWi8ePU7",
  "key23": "5D8ZXgtFft1BVe86kEE9JjqeU8ysmddnNohatFowJDpZdDWnseEgmPVC5hdupYaqoC8Vpn9g1FJs7gaPysc9zQwY",
  "key24": "4j9iDXt8V2fjqamrv6KoRaPPCvapGS7yBk3Kobx2xjGpXywxsymWAp9fg5GWbGQWo3rGxLotXMMf56HZNf1LNrpy",
  "key25": "5oWnZUVQWuhrkscfubBiUftPk6JS1dgkw1YS7emJqpq4boX9nxEjR1eDSQyvvEBsfEbEkDmyPf9FzzFsc7KWTD2z",
  "key26": "5fqUkLR5wWqTKJrWQ45zL3LWDk8ai435U4QWma4fKi5surqHwHmtjM8ANocZ2QnF21etXo7QgBdgZKAB6Rybg8hf",
  "key27": "n1tHEQw1HuPnvtvQhibPrQcuGLvrqJfpFAzBFQLbFRm7dxTx7J89eyW1LrUtMyje8nVeeUNJn8d3MGF37RAnftr"
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
