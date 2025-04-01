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
    "38W7W4CQXqkeSiMRx7Xr9Urr6HKYdAAc8QnXquPUbNSFbiYmStGsYu7thT6Z2yvDeUWYhk8NT8DhkF66utUBVwUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qS7rFhc2JYZHP5dYzULdwwBq7ZhdpUFDqRkEAbCmaVTKn5TUUSFD1kG7JsumuyoRU9ceEW23JaXk54QGALfZGqm",
  "key1": "zkd9h3aHNe4vTkvSc2V7fRHe8oErbcGT3BmYtoxRPCtfr9ufzCQb9WuYHQkrkxyHDt3wPa8jF2SkirFDawMCJsf",
  "key2": "qADJ4qzf2K3dQ5Ko9daoAyVrJBFeJC9nXu6Y1T43DXuhHizndNxDcNjovSWkRRC8z6LRwesUbBA3zRDWts4EyC5",
  "key3": "47KkHPBLQzvnCAv88qQ4Hjb7BmFd12CTicsCzus2rpqf4pfgEwSCHZvjyiCiTif3gpwRewADfi5B1QuErT92DEHo",
  "key4": "zLWy1hRQRY7MGc2gppUjyigr7nW4hJDnPK2ZsVupkrcKUooFASUpsMbzvA8ikMK8PbTf4ZyFwUnTdZY2j8PRejB",
  "key5": "4YyCCZCv5ofzx3LdTX6SjjvYzfyn7vz7RSN6stbJ9JjgVxwAPDzcXJKJiRzHQEEWDobTPBDi3hZzKaP933Kyh6PJ",
  "key6": "51baaFNYFCSNiRZ9eyN2R64w1QcvJ63QF4rdtN6vgvBEtbMFuCpYHNZiYsHRUvbV8jHM1VdGsSuJj7v5hbJL9Vd5",
  "key7": "3ozAgQQCtDAJKngoMqLi1rYnRijR3yC9UW24F5NfJ2UeQcB7U9b8yuUD586a7D2L2nTZjoa7BztAD32E959a1tpd",
  "key8": "594Kid2UoYu11YBkRqutYpRHkehdv75PJTf12drRZqTxmUGf1QXXrr9rgkdcXbFfJM67dfuGyoBBhRu64t8qs48g",
  "key9": "bHo6hLZ527S6ERJCn28HQ4GGUoC8pd96HKC5qf2R5hkmqcJFJ6YePBC2ajbdet6htqsjLCHd5GEWEt5ZGffRL5c",
  "key10": "3PP5zG9hp9UAD8yqB2ynMKRtu6VNYHqg7rD5B5JW3s15B7F1yPCWbJtKDakkCEcGrpwsc6g9ZriYjruWzUnFSXzD",
  "key11": "5u9KDKMAQz2Qk7v2aQEArob7GG4RfgJgPvn8aYLB96zygaKSHdjEUjbmFN8CfBAunUgE2R1Gk3UVtmyNh2nmLNDE",
  "key12": "mPY6hwPt39EKfCXVotfYJUPGuSg3Kzsjdoa5D9865tqyrcY9VvDcEShp1gTaausAtk2esaHTyFqBnfsWUa17ZeP",
  "key13": "4KJ3Vk85fNAr8fTpFN5w93U5mSdLppMswcgrQdvCwzMCyamEQw24rbPH8DYfZJg89tVuhdfzXtccygMYNwNSDVuF",
  "key14": "5o2L1HzoVCoKKaEDSzTZFqcu4zopxWaXocfqWYHv6oCawQk4tXWrg2wGxW7cgumMNMRKbfWDCyXoKvTXBbDv9P22",
  "key15": "3S7WUiHU1o58DkwtGMPA6WFFLH2JriPAViUQwyuQXZHdvfFMXeg3YkYp9vjGAnmHhcdQzZGFGB86W5TcbJjAffKd",
  "key16": "wkRTUMVLkSmMNuA63E1M5bTtEShNaa53WyAW8Nv2T11gcSt5oTSuEX3BcAUngSMVJEkp4v8WwkrT3j6u4LuTjdK",
  "key17": "3khNUfZfnL3DJHhsX9qQtQNGf1hWc3b9Xv88ALPuvHJJMkLZ4DL52mSEyLqeUopdPrifbhM9Rx6uWN5yd6i7Fwpx",
  "key18": "5Zeq1BEMEJTEVtjTKdeapUKepCkgy3HMR4H8sbESnjwFFAkqQem3Gg6ahf5QHkTvncejiFwdB23RCqQuiTi2pDAv",
  "key19": "2NSPkVfa1eL92qxTDxjQGf4u6u6EiATdT2kgtGatCaPvpn99ny5NoV1yR1esu95Yc4U1KAxfgehdH1oU7PoCd5d5",
  "key20": "5TcLcRR519d3xhYbkKNsF3nAtxVpMJQ1tDysKdtvckJiqtB5DQSxrHwG8jwEYu7G8GpHiGj8eBnhDp8iD7GR9GxC",
  "key21": "4UySVBMv35U6aszhoF4fvajCZBhZ78nz85Ryh9bjo6uB3Cba7WKz5Xq6wWuqJRac8doCm3kuByuXCYha7osQYeo3",
  "key22": "4n6nFu2F9EyWziMbMy9VZ5Sg4H5qJLefPibDYgV2LmY5cJcEw8fKK4KVVGdVtLA1737FbKcBThgrf6bY4Vx6S74j",
  "key23": "5Fu4cRCRPbNATGn18hEMqVgeiL1hnyyJwUTxvdbaHqGbsscv3w71hVZz46EoSQxAvynzMuPhWp9DuNQSTZXD3FU1",
  "key24": "22PxYXrKe2Buxh3kN3W16SzJtKacgmAkZd94mbgeNTvrgvp5rqmYp5dHqaBdMH5VBfGZHXinc27xp5mofq4TbdM4",
  "key25": "49X1jjktGMJiwHKE8xUeurcnu2EZBiVPpw7dDFQhv2vKE9m3w6kcRLaFnmvZ4qswigJwJG3wzDPtbCBjVSVW9h9i",
  "key26": "srorkFy1BVbyq4DJXhXzcetCT5ay3q7Z9CfNbFc5nivPLn3kHU29CJYryjeSPnJMuFtKhHXJSxryUkJoxaD3HhP",
  "key27": "4Zs57joasTn2ToasqHjERWdktewU7g44pHnZqVzNvrQwTJYRoQwJZUYidrzCtu9kYFm1qxYfmJpGt2mkoP39QxDZ"
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
