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
    "5tAR48v4DvNjAgKyJjGU4Rxmc5fTgg2yaFyZ9WcxX2Y2Qgh1KnWuw9rxAQN7aBrm3tVksti3NB6EVTPbGkQgpEEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vRvwkvcsok1K45jwCAo7edJG2SjbkELzcjUU9oYAUHjoVGMwuB2spRwcKNeVfmSP5SegDAk5sdzu2FkiomF2vJp",
  "key1": "3x4oeqtkHLDgiLEg3jBHQ5BaEhKPRxGPYRe84AePP724u3wk8Suwz3ot3LdFJhA3cati1393PTQiUfCBn6mE1Rru",
  "key2": "3gcwwhhy23QMBu8VyDHS6s1qpS16h9qbf8YWy9yEEZe5VWPjyDTYRU9AXBfc8nYtZcdEpQHV9AXm1SMEsvtCPWYD",
  "key3": "5znAgskBPUHG87rU228CkpK2qzronQRdoXSsMgqn8UXvB9UwWtVpJGz5ChspsqZASYKPfXD7zwpasEZHzGyxb48X",
  "key4": "4fpz5DQ4WqqtKH8DCouEovLutLL8Rx2MmM1WAb7nnLf5xsgKr4gUPGw9jBv4tjGF6q8tieaZkbdf24Fe4rs5VWuC",
  "key5": "3p3DFhLw5MyKEHTRZ6xBzzqKSDyCCwbjzp2XwomZa4MtdmGayTibQewWdYjfJpkNvZF8YtFhgDjm7mfMFshcvwAv",
  "key6": "4hSDVT4ufsx6reosUkhczjoGMoRxhJBYWzdcAro8zuPqm1XCW2nTga6NFEUwgQEZw1iHy1mkLtMRstmtATYe2efd",
  "key7": "3ckwYkifW5XQWufCrMP39F8meo7YncbehcTLp53QJETQELeGZdncTBzMw2P3zfw9eFPiTC4RavzNTqkhMQT6s4qc",
  "key8": "2cScK9aMK5ogkMLh4N1oi9v2jLQBeo4t3CEQqZ4Tv6zsL1KTvgFtM9WWjUASBVgZe8UefrsUS26aPhyL6fiSNPjs",
  "key9": "2NFv7KH3GXhid3dxWJw9X7QNUoeocWL2KzMZ4EB68eNuqa8xm9KJJ8u4dFEUxiQYPEKZE4Fz9urqWjjFydfSP8He",
  "key10": "3wwotAEomoHiomR1JUr2E4G77Vh6DSyXatBGqcp8yxmvWXFUz4R9svHiG7us6beRhLR77YUzp19NKoidyKfAya4v",
  "key11": "3GKE9Q5BPCSB8kyTNJWGJCyB1fMMqew8ieFKMq8oktqqNJgui4NZFnXvxUgSuqa2KaxRdA8RyVzE8HcGughuUzvL",
  "key12": "y8uyn7YdH7mUKYtyS7SkHRnvULHTw1sic5yXNPm1vLXua7RS1yz6voMX4KnDy1AfQ9imGndxLNne217PEcRxLhP",
  "key13": "iHh6rrUgQ6s5wWYcQ9NoBb8DkqrmXtThnaT6A3apbHFD7cx1ig9jSN9A26WhyfLYfzMzp53PKyR7BnLsdz8JMS6",
  "key14": "3Gz4Rmc2sBJdHBrWDPUs7th1zdz6cWeTExyAnB2YSr62wJRmFKnb4Q24nebj69tcRgkvptGAaurq2fhgT5RDNGA3",
  "key15": "31wHatx9SwbcSFxHB3oJrdpa5Lu34iY7vHRKtkg8FQWwakp5AJHsRLcyoS2pGDZ4hsmyxg9fTxbdRKmqniJ6URBF",
  "key16": "4LnTNmpAy3SEHbo3qAQaiASzF9qt1TgNTZ221uUL3cbzCmo9iCXk5ZJTScADhoPuQyfeFJg45gfC4DFSGgraXMJx",
  "key17": "2LzJw9Bzq9JkmN5bjPcy9JdpsMGrX9kxvThYftcBPYiZpNxvrWbNHWjCoNLfZxQVaF4nNstYMGR7VteCcu8VpsGf",
  "key18": "4tBahVRTYKeu8Boxam8xZYgSap1CtYAt4TxCJcWmqRoWQVgZEs6sit3ee6dFTUeTEFD4noE2efeTMXq99GQopYHP",
  "key19": "25Dy3CENttwwZEQoYxZJezT3D1EJrBodMRrZMF4zmTJKotrN4HyMRqxuySfdHviRTfvzx82vrGT7eQWx6YKwYz3L",
  "key20": "uvnF1PTBp82y7N2GGcgFdS1dqKBFqNVGX67iN4Mr3oR7rNczHitJpjyr11V2gjbtqCXTnxU8DhJTw1joHa6c8vc",
  "key21": "4BRJtpkoqECpUGT96KcoKRWhc92E26uX8JmD7rzfgEBj3ywVzGmua7HXWgamrfWNEf83JXbs731uHRpPyUqN49kG",
  "key22": "5VTGWdBXBaLAexH9PF2QRfgfRL6bBnZLfXxY5X7eQijRYKUmuPXYcdNFPrrjqfpiyutaokGy5CFcqhuzB99gb8FB",
  "key23": "224Mq4Le8M7DciQEgLZonUUrWwCpK93MSHbNPG5By1T9g87PRmSmrivfchZePaHiAcH4pY8c97RBbqYcZnf51tgJ",
  "key24": "54dU9jiV2CZhwB1nu8tvZiHPbuNiNZmWRFmgsvo1h9gMLLpvjr3wj5hJRrZWsnLWouUBgPMW1UfWxciXu8vQSX4N",
  "key25": "43byPTvd3xkc2infr8nsbNuXDGQZvvc7PEsfEWcuXyyNNkHgAMcMy4SoXbycSG4f7Dh4DYdADLVgyttSNQE3Tz7Y",
  "key26": "Hb7GH97xsub3VHzi7YkFxPKDUFSGa7QQzsDicWtbVdSmT4PU1gsxbjuGZ1QP46fCkgFyxSP7GUjwoR2WKYJNYZg",
  "key27": "35sq15wWGoJFnwHC39Nq8xH4ih1H7CZESULcXwSktXxA5f3aLBahyX6Nks9j8MJDUNdzszzeBxSdnCHhgQtoEbu5",
  "key28": "V9EYNJfoXQX2AymAfZPgp9VFdvkMwjixyEAPnxm6CN2HgxYYf3JGm82jLw1kSiLrCyV8deeTPyQURdrX81TPeuP",
  "key29": "XjCawEnDft4UdKWGcag7hLKvpxauxfBec6y7kZdHLbm3eLrmodiwkRGCnRNaXL4Vc9aLwHEGQdbJJUbZ73qhkUL"
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
