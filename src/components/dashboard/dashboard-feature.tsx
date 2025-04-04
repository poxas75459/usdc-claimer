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
    "5QsjnrFWnPedaXWxqkbqXnXBPTfj5Z8ysmh92s4pLckczMLS1XNwcqKCUzXi5xTLRgDKqf466vjXfp9HHBdnfzzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdKUWvSxMS4ZadukgYn3TLQedaZ7gz4VrL1sfmxGx6LpvxJPK4n3eV5dypJePF537UPwEVZ7PTWS5gJmg3U4TSK",
  "key1": "4G4zhFS2EpEXT8kfvksaSMwyRzspdw3fd6Joi1aXJzvMb5vkPfNyW4sRt5cN8FMffKGp9f1YkiztSZ4hFR4fMNXb",
  "key2": "5rf3G2y6fJYyKHPMd7UfgQe9uHimCVxGpBRPPpn2NGpkszvjtqxCgrD1ZyLy4Z3dcF8fmvDZHz4fskicFDEer6tX",
  "key3": "5TChZGqr41SpSZGXaVoGLjEmBPyBoiCxuF1QxnUKQk7RSM1nJbMZNggosYsB3zwaLg74H6zho4Pk4GKT8e4q19ts",
  "key4": "3CjbLHjoScy2daBFsYfACvjYqKQZaxbekd4thrkg7s6aXjmKh8ADfK3nJrzRs2hz9fvA5vcUQo1G1zEnaNJA4wEw",
  "key5": "3SM7uUSoNeqmB6ydThQXZ7k7MdQzx751YPcW4gEKPDjuBbNHNA5s2NLpafEHsTgjr41owwJ4LhtU7w5FnjRUwjg3",
  "key6": "2fh7vWoJFjScnwBje79UeBmWf5qojFzxPEPWihQPLuDRxDkT994ttCjCzhGPXeXSYif8YGcXf5YGkCRHNsg4wrLq",
  "key7": "5dLKmw1w4Vvcrusm2pf2kgvmBoSPNAzpyyXADgSTgQaPqgnXGTDpEyakjmhkgMVFg93kBq8L5FqkNeUUYrhTHMu6",
  "key8": "3u4KHFdmE1G4fgKvNE3kmmGWgVTwTB3ySmm9HBxXXSMkLyWAjGTtjVZpH57ZaF1AwqcqKKpMJrAgaXra62RU7EzT",
  "key9": "5CRyiFgkL2YXA18y63q1Nxxt9GPY5CAeyH1t4YjsdFPRPT1AjgvQVNSSyE6ctguEqapUgXeqzBWTFyhS6egHZDiy",
  "key10": "GkVM6i4NpavUEVt9FKzGADr3eaAbziFftPk3AJ6SY9wHBd8jwyKNbjYgEYxD85f2VhapcJstXo1v3xTCmunFDqv",
  "key11": "4ExEtzoUpRWJBYDy1Ze2TfjsodAfBsWMmtJe5n8T6NdcTKUorZukDuq2pMgFGqm4PFFtgXQ8kUiqdgoxaYNw4adF",
  "key12": "TbWqCaF6eNShtqTSdSu4hzT87mLNbF8GhEcYybHQdAAkRzZagjKkqa8euftZsztucb9XmkNo5SqGWeX3mUiHEo7",
  "key13": "3jgKro7Sc7cjNUbdDoKUQyhR1eYMcGimrVab67BePmACQt691Vmr7EJuFoFxKQsf5g12nKNrPvkTejN9fFHyZPM3",
  "key14": "7DEoGxbzM4Y1YtyjpzA35r49hQnjZbWGLREMQvwmsyLj1tgyhbJUDiqLAcrCEsTcEHM2GfUz6qc1Xcu1AkJEDG5",
  "key15": "3VBSTtVp3rrfEQUvAP83F2jKL57BGwLQydaCtcPeggwLYXfgmZqhFzWG2qLPtwi9PNQ9gjuBs6LR4g1aPWEaAbyn",
  "key16": "jWENkXico1j6qp8o347k2gGCmzFzSjpkixUdXu38FaxhG29pfTdqSMnws5mqC133sEEMbPSyD4QikEnVyAo55xw",
  "key17": "4LTNG8Mc5TD4NsgZyDCpLWAKB6TWXk2E7kAt7ChjhgFGMCNbX2vWnmYuYtzPuMkQsZpB9zahN3eBq38Yr7UpVVH4",
  "key18": "3XbazC8McdDQS6cJKnTLTSoyWwKFMb3UN952FFtKLL3DNn7VR1xLJCoi4D9mThLM8r3N4t5VBb4Bx8hnvdJDScWU",
  "key19": "6MhUeXfFykMQFoXZgjiC4oPhDZPVT28XEDvaHFu4ZBa6JZer31XZNAFV8TLnnD4TYmucGzghAeunB7M2r9usc9L",
  "key20": "5SCE871HNkCw2cXivfjqdisDUPMnDZ2gp5LGVx8iZN1tqDPm27FZZKfX4nCNAubP6USHQ5DJf5cWfQm9mqrpBq5M",
  "key21": "2fEXA5BzoCvM8LpUossp7HKEsrEanaYitpNffi9jXFo7SuApnJe9G95HiXQTugmtUs7b83FMRxuXTp1wp4hwCsMR",
  "key22": "4XcsBQgS2KqSzV1DEkiuXS3LdDAQUKwWZnH6FAdYbHEUaLFHMs2KEJZ3VZVoJ9CQAdrqK6PBtr48etwzmCShojEm",
  "key23": "2tkywKKhrb7X5NRcYhZjQNeaCjk29uRNQ9sTwhEQ39sDSurQHmkD1JkfE56SrFUT53DrA2wHSGDN6EVXQEKfShq9",
  "key24": "5SFpaVjsG96PxHt4cPoMjFtBRuF7bXC2wiZWr13inA3PVmNuJmbki2vUABMENz1K9DH49hGjhLcATjpVm6krXkHL"
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
