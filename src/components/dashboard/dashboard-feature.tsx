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
    "4oL1UX9y8SVfp6mAegGhzk6UF5mBotyRjgPYPwVDDW59mnx5f9Pw22KPfokgFan7dFZB1dtJZXtHF2BbqcTQnzri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEFtZyAYZX58WTkn1VDayZdwSTepWLUef5a31CfenAKB5JpybdyH7B8YYRzP2e5rhhJAQ8iYVV4maTS4qV74Qog",
  "key1": "GDkZUX9dAZTh2d4uK7xnRaPrjiM6UHmfLWk5zQ8Vweo4rf3MSZdto3GcWtejduJomdht2iu9ML6Tz2CXjaSXss5",
  "key2": "4RguQGX13xEqNApXjsvcocKa4oX6iaA2zEevR8oBztzVdCqrMVovkjpe7MWHi3uWr2qGtHSqWR6EGr1W5Rt3DSNM",
  "key3": "2cjt2SmFQZyARMMTN7AZc4ft6jotY1TaxSxHnvgD9CaPr58Fh1Drd4z6m983ayvwxzVcdPQ4TQaZMHqG1gZcRSN8",
  "key4": "SS9EebLE6Ro7yAWJ84fkKfDHvYKH4NWBupot3UeqqBioB6XwiiAUXkZ3McR4T1x2rANACvWnge5MF1AQpisjhH5",
  "key5": "XE8QrjtHrFQA1Mm54JEQszJdkdi3dHj7xkFAmKNSqiCv6U7heprhfDbfpjG3CXvy3YNsX915crLtCdGKJiy4aYZ",
  "key6": "4F9yLyQsXK1Eu9VLBPxkQ6xAnnmKRDfBtHzCimjCzZkh1hRmzir7qVP4NZEnNKNZrEUSVq95eASLyvouYa4AHvvm",
  "key7": "ndZo67GGv3pW7ZU8nLmWuuaufakN2BJJVVVKbC4vSfioFjJvqWS3aW8gSDbbghNHbLDRGENCbtvhVpMxkMNjjYN",
  "key8": "2pRSuJVjKvuy651kPSLwCsd62aPKnHG5KMG5Z8H3LTfjt53pov6acgsDLeESnZ64GHCUC7TzZh6nDHCbCgsHCWUx",
  "key9": "3Qj7gPZKsyiDnVoL8WET6cpfdsfDFGhqzkL6WCcPN4XzWbyEs7sU51EUpPQxTjb6U52qVw2MikoQfzw884XMLcUp",
  "key10": "3XwzyDsGw1MNPUJoewRurBzVPXGauwMe3984hKFj4eqNAcvJfUo18kzxowbVdggV4ZEvg86GPhPnx1YPNSHj89jR",
  "key11": "idEUN6i8FVd7Kzw91j1CFna2VrTagCpLfrVHQQPA42TV7oRXr4ZfL98dgETarfqxf8wYP8N1pUvpr5kvynZPLPk",
  "key12": "4oaTaVTQVmBRJZetXZTEisC9iqE3c2xwVwELmzR55gAwyjtnsjbtcVkPZnUEwio2ZeVGmC7Lwzb5Vxr3Q6Xpm3Rp",
  "key13": "EFSZMDtRLWRb9kLbpuwsdF6CHotrinQ7d3zDh9y3xgBS5YdmDxrxSxxmtdeE9DRk4JNgUMFQDaGYDkPFsbfBXHY",
  "key14": "5pUKJxWMZa3tiiFZwayo1c2MRYErtzjdg2HL8fcy6Z5Q9Hx6JLxrJfbpumEBKFTZfXiXVfCY5psTo4UtXft4bWRy",
  "key15": "4mmwVr7S4ip3gJMYNfxZCXsyCUewy362iFsz89Ysc2mmrVSB4W9Q2Ptnp13qg5CCmjX5fMga2dG4b3m6MnDAyc4R",
  "key16": "4mavNCcVFEmQNJCaDfR9h2M7n1TaAtmg4HzbV9ms7SgjdviXGKUK9n9JSc6djVGGfgAoC6mjW9ecq5pJEqfLaVAw",
  "key17": "3hFSp7qzdntidYJphaxBZ9vBgxtMv9dS8woAsJhuo3c6TpDz4kBRk4ELMfc2hPTeErcPb3shkPZdVgytLiNZSgQf",
  "key18": "5p3RPoU3nYh1Pw6PEpsDVvPqKNpc8jJ6qFhK94LhBEUTaBcVTREp1kR7wC7XgakbTsNLLzBPrRsuvJEHXbjf9o9y",
  "key19": "4GCSZzHoAJhtKsHXd7FAq8irbPgoTT8HtmWkuQ5rgY19Me1Xaoxat4y6YRN5sQ1GrWWmpwMTHRBoXjkbypLo4YPA",
  "key20": "2tD8Wr6edZxhghfhSMXA2wBJDwiQQjtUvB98LpBytBjsXzJgqz8SpJd6cSHDjHcNwsHmA8MwH9uFR6mQbxa1nuBk",
  "key21": "5qDEVuM6kmaWuF6omfUc4X6ZsRfiRNo2pBGMJJciQn43XPArJTgnoMEzo9qx1u58ucsRuN1j51T1nt37iyaYCnxS",
  "key22": "28tKAYy3bD5vZdgHVUgeq5Cu7P4y2nAAMk2bVN5xQN7CTjMneYEwpYD8n4MvAAWxe2JTyrwoWir36xM85KjNNVC6",
  "key23": "c5mbUxc3JFmMGckbhZDoF3dBbBatCLAjSBgaA9g56n1nXHyKagDiNqENyFCui6eq5PqfX3brMdd8LwYK6ocnjhJ",
  "key24": "4Q1nhKPsM8QCZHXcWdbjM7G4EgM3vBh2F7znEc2iHNAuy6H5eYr9FVSgYgrFcoryz96RxhSaVYzxh8anZ9iSq7Qz",
  "key25": "33sA1mGFefjMHWjAsmkQwJpZVx8iXQcTFK8i2g2aZR7VuSXyL2cEhEsk95vd5ZtiXWUvkRk1FD2cjXtwcLT8DFe3",
  "key26": "3gvK4p661L1hR5eqSqGV2Q7YQTYFLjbT1pxUY5PXqpmHp6CixxbyhfmBsCghvjFngn9BaZu4roMutPtq66EFTkMT",
  "key27": "5LeFnUJmocxm5hRNbAEpyjHQkt2jsSzoy7Sd3sV5g4QUCV1fMqhaEND89DuWyok22x3BgKPdX4bkZJZgy73oY1yF",
  "key28": "zij7TSA6ioMXrXjVLa7a252JTCJ6X4FEUU6fEokSg6JwGF3VQgDfSuDxPx6j5WvdjBddLVJ8Zy4FAsUrCDxeX8c",
  "key29": "2JbD593ofqEEeUiCzSZkUk8aYcc3wpFF1zKgpQPKVC5AMmWrEajCckTBwd1bS78NU7AMKmdxBJQHbUJsdm5z2PBw",
  "key30": "3yUUkEYMRrTHDj5eZ9dbJY4y2EeSCzywEAE1onUHQiZvgxJe8EnngxqDBpXPtsvv1DgYeJsmdQTAMevz2XGrG1ms",
  "key31": "24Kzb1qJ1s2wAkVZfJRxgFciBmoG2WWHHhjE7F2puXTkGfrJjQCwJt2AKrtXjvr9NDt7eFpgthZnvfrpawQ38tyy",
  "key32": "4pnHobUxa2kwp1tfPSarysduYNaf8VD8jPmARdPCBnqAGL5RXDwaLKjhWrRrwZ8tKen4nMybwTXD3qXPDRqv66F4",
  "key33": "3ehCuYPtMULzEcoA9F5uY3JpLCtyTE8W7rsPW9caPiNS7MmVjQay5puVQvfLYVfQTNq1Cab7FE6jLQnQj4zL28Z7",
  "key34": "3JmLEtobm6a53NFWDGPYYxLsGiZ6woC2PsBvJUNiwUnDCZGN7kYYUHL2AbWrRC8GAfArtmQuaCq7SUs7qEDZcEgX",
  "key35": "58nNC67EMyaNN3LzipuUhrd4aX9W5kHaRrNstrnhtj4R1p4K1mCWP3J3iyncDQmh4ChG6XYi8JGVkxVaA44voJZd",
  "key36": "3T2WJFq7psZsyHRHqUhDri6uxJXxtgqM93heACgitxyKXpQMZyYSXWLixDqrJsdfNaMguZhxomth1zjr1XrR6M4",
  "key37": "5LVR8PBooihyoqUN4gN8ytufHUC8QVjiYY7v4opU4QxbxyWyVY9Cznb6g6H5u1fAtpo65gfYH2sGsJvYt7w7YXD9",
  "key38": "5P1AM8Ga1cpDajJuSbE9U6hq17qweJjnn1BH7DUgRqZAAbw9cRdu1ZAykUYPipMPFcr7hhTqfZek6w3YYjFvxCAn",
  "key39": "moq61y1GHzZgFrVDh1uckVsg7doLxxDyeLcvWXyPd9SzG4uL28snbXNLM8MGvMkATAahiofhm7J9KLCS5fHs9EW",
  "key40": "5TcvwrCFxX1QyQcc7rR3xjimzZjQTah2Zn9muYeQVWxUAiTcwX3W55VnHpvAbCUEj5iRgdxkELWtPMgSpLKcXKd4",
  "key41": "4ZMuXtySXkEaekcVUceGHMG4qpRYmPuof16NteeNN3RfnYzeGh9o15tVHPXM9BXQMhHRNHetVy3Y7ZkbQkfmicoG",
  "key42": "514RvoWTGRW8Y9w5uuwfTLuA8Jom7pi5Evi3W7CaR1QXoNy1mXPdtnxsCcjPWC87m9C4qkbt478M3DFQLfiuqT7i",
  "key43": "4kBLSrF4AXBj7UW1kkERmU1RoXMqKXEYv1W91pGKFYjm48yai48NDuTg8Ey7zKqxWaKrAVRJhEGMfi2iARrPKZeh"
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
