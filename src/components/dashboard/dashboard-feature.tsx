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
    "3nR7F97WjMFoMopWmaVaimwNxVBqhJBPiTBAiPqRyCe62ysrvPAs4eSgxu8xwatS2ZzWRjbVKT1YfFievySUSgeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcDGLEfk52FTULyd5qYhriVijkmFWWzTX8Ea3vfwNPKkAgHFkRpL5ZACn2zYXYaweyW2ndPpJ1bpWqD9rQwsz6X",
  "key1": "2aXS5aRW7gxkG3xGr8yfeAPC1YqXYYfS8TdD5fVqb7GfrTskipFHHxUYmTozHD1KffDTNauxu2vwFAW7eg6a6Ji2",
  "key2": "3e8T4giRpg4Eev97XEm4jt8a1Xf8ZuuyRYqaat8pE3x2p6AYbogeW6CjnyzkHdyUEcJvWoyFwsrddsDcz6BqmpVd",
  "key3": "4LcRgJrUfJdDPJMAfAEnvZ8y7k1Y1oXrPXgxitrnwF8sa58hsGaE61mL6tPJT2xVY3JJ9chLgc1BVHekdmCLQLki",
  "key4": "2LgLzVphBcMrv3Cmug97CcV1uLYuD9WY1zeUfepUUmrDSGZ57CMHJaRuGBBZjFnm7MUJdYBepm8qrSfVXMzGrqXo",
  "key5": "3eYFE7FCgFEUuhxFCToihprcDxLTyGUQFm4LKQ6YovgvyAW1obe5XpJ7WJYZHVSfns1Z3XigquuFT4g7zbP6inC",
  "key6": "aoe7UU448kU8MgJJq1fsUBSWSRap9Dcyu3htVUbGUJwjkv3uXM6iW1kLLZd7FLq71DksQXxrBFmUTP2J6JW2nHN",
  "key7": "4VnH1ZWT2aayw4HxwQ35evMzfGCYCtFPfjAGVJ8oQf3nNwjKrzCPBxC19LbSubAGpmXVkshksKzRc3oMYHhRRCHm",
  "key8": "wcknGz1Tdc1zNEhHJvRNDH6vTJ8KNM8ph1Pe9KXvsG99sbmhAT3iyPfmX5rQJkAAZpyUWTjKiDAKxzEoEjvEBLh",
  "key9": "2nNsMXnZ1BeNxnn3EiWZDf44nTm5dKJscmrmCS1Sz4bvbfxiSAYt7pUW35fbWuBdxtVRV9vv6kaASVJTwt1XC6nX",
  "key10": "3dbdTZKB1gxZaBZoNAXpbLXPvo2ApskhrHhtb2ZTzXeF4qeiE5xjEdVJMs49xvuCnEGyVRhTg6hPhtY9ea95xB74",
  "key11": "Zt26MXYtMckoU4uWVa3JjFVohK66X7x2nHUkn8ZNzYdxR9dP2E76PSQeSUXG1zrqzCH5qvQ8PMbJSRbLzcJtPQT",
  "key12": "5M4Rn6du8o1g5cKAVyUhppA9zY1tHep4B7pwZzPvMkGMtPvvBGLLSJPDDiTiZRzUGem7dL69kVxSXJvt5sPksr6e",
  "key13": "46BAXu1D2nFC4t81kySKgDpBuny3DPyEZweqPLCrPmj8zE43S5f2tPKF7E7CDq1Euyzc8SDsEM3XggCD8vgLXCJk",
  "key14": "2SdZ1EjQVFxMHMfWJSxq5E78zkgvFGFzLPdvmHwAMuRU6mGrxbe9iQnck4MzQWYhUMdYkKGwpQf1HB6x78vUJBvC",
  "key15": "2pJMEs3f6pWnC8dNKzXVFH2wK9aozpe2X1Jpavh8ZxC8tckUeGijxzzakDXqAdLKFjf1L6fWCiTYEBSSNqeYeMnm",
  "key16": "HPYM1YZEokLYWJgDD3Zejb4P6Bvm98bNXbhtLn2S448BWYhVDe8aN2NrBArw4foghAcAyczRwCuURiCNgo9E1AS",
  "key17": "sbfmXcYgKJV5M1CepZYPhBJrtH1Kp3SdEAyYKtNdhnc7vWbdzZShJkdPinNAYpQX5bEcRFv7Va1Fy91JwbVc7zj",
  "key18": "3Fb8KzHrBuArqrkVJK3fG7n5WE3op3StvAgurBcsRiV53KJs8YEkwSdPhBxMPCw7F5vAsntHtr3DRxmnkXVsRP9k",
  "key19": "2wxLptyeH9dbdsJwZDxHNCxhXK4kAMkyLUPqqz4Q9aC7C29s7mSgfD69qyJ77DRdThPJgC9XmXkxTXvLRMdBojf4",
  "key20": "3K9TqR2oeudLsLLEha9k3tUP4VEXBhr98krQ3NXvANDjpp7bfbeVyi9EyFJ75RbrQioW7X4sSFsRcCM9wxWHr6ga",
  "key21": "4WsbpfWhJH7WZ4gdWSFtue5R8dbi4KxHpamJLGTxXpzRK7QCUdYN2pqjNKNKQfZXy6W2gHaYL91iW3gpV3m6n4Tp",
  "key22": "TAemuJTKuXmab9LwygKMqvSqHjK7JQN6213fVcpccmWyBeWxmcuPtoQQQjj5nTAY7urnMG2cZbdzVyHeXkg7Hvg",
  "key23": "4Uhaoa9KhaddXoeGQMENxv4kTTYTUzCTd2h7iqH86K54n96oeDR9opeN8JbYRPktSJHj3bYk2PW3E39F4oXu3Q7W",
  "key24": "2Np6h7LhS24nvF2vgQwYe6Fp2BrbFYP24cBHimjX7c5XvozQhF4M1ARXUAgGFN43rKCTZJM5JrBXfn2SpTDdCBQo",
  "key25": "3YCTZbtK462H1G6hzmmvvJdo4Nncyds91F52gEmpEXWhkD69ktGSKqkE2Kgfm1uvJBiZm35RVN6VsMkoBRvdigkg",
  "key26": "4zj2Ki3yMB4xJ6vDeumJqhWfAou5VRZvA6VBDYnvcmNiT3sjNv3ZfFHQQGRWs74rMr87ewMbNkmb5WrGyf8T55h3",
  "key27": "3vsm9kiXwHb3JZ4xLr39bf2swYSNMvhQYLBQkHuMhDr6TVMpEEkQdyqZCA3rxiXAgRqTyovYSZVHgMzVPoBjABUF",
  "key28": "2KYUMHzTUdjtwQ5Kq17jUki8EB2MLajBXpHX48KzDVqTAG1466sQMAGuSoUXqRuwvoAqroa1LEgfKZP4BRYdjHrv",
  "key29": "3SrN7de5NYBUCcDcPh7TC5Hs1hCuLik6LvctFYvpJ2xqduwtpVgvdVozuCuHAMTYXkf6Zn4axnvg8MZbPdQe4fc",
  "key30": "L6Jqu2kBNsYzw151Fzw1QqKyLNj6588yQ9fUimDKp2zX2REWMR2XmN4HxBf2HHGmRdrRdDDnJb7hbSd4iRQLH1h",
  "key31": "4EPzn6fLkhs4Ub5AtL549wBNvvU1R45moPzjBPckoPMeWQ89SUtHa9E3HayC5k1FrGbKuosnqTcAVJveMVM4zUAm",
  "key32": "WRYSRomuGDTbfYY62fgU7LH8pyovxP1tD9pS5KpY5es4LyUxVFQv1kY9EAjPAx3v6BbWHQ24ofkFgSCQMvwvaAm",
  "key33": "56GtpYB1DgQvyLReBw7q5PLEwUFvLo5TWMPCfCKeYtF2tZveQfhit5LMeAZscvRv69HAq1u2wUugJCC7tAjiBSek",
  "key34": "57duM5aZodRGDhUh3gRNYzcVGWKJW243pTVrKwfVN2Ue9bD3vdAzoCRbpk3pBmZLDPUaSqYVqGt3QJXeUP6ojbNB",
  "key35": "1zUAAXGoY8VoSR3VUSHF3YBQEgHyrzB5rhkzWHVS6uL5ELXszR83cwJoCocvacBS7hHmQxtTvdCTkpaUcxhhZco",
  "key36": "2HeLrYqDFkaJR7d4UpUF5tPeJUpaGQMGZmj8YVmuAxaAHSZj4bQK4Ab8xJwEt6L6osps9HhBeVFVQCpeCK2tFLaB",
  "key37": "5Nri8rDfCUf46uytre5KoDXP6Ms8oUbBurs9ohLgazqHkfNwDTVoBZBLYTtFNwgzsjVZVDms9kSwNukqAmWr7bkY"
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
