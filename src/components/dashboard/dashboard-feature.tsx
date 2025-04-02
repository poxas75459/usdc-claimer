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
    "8PQFrikZQFwNngnHQYAcqPnFjX7EF8HWAcCsasVdw6Bd9TvkEc44KB5paeT9G3sqotWiBsLnT27GBrEBPNk1Nrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5mUsBUkc6iKiafYZw2V3LgbvLhipwZLF8Sr919s1kbpRN4fgo9n2CThrPYXC34ybXcxs2V44KdfdNJfQhrxJaH",
  "key1": "34WPKMDwSPyDBHfy2yEDiomnCv92fF2f1EBv2TWWKG11tSXC2Ghi4y1A8ZujVzvEu5GPJNjcAmBfPsgqDXsZCtCK",
  "key2": "2nDRRac1Dz8a8vPPeyMFdpcc3VhLQareMTwJkkkCCEkeG1PsaDVMZsdUVbxaALYvJAcK3wJDyzK944RDsFXQjsnh",
  "key3": "5aK61Af7NMhPUBm6w8QMxZwY9TPDK9dQYQx8TpdAa98MFZoj2GhQDUqH7wMH61UUV7RwYEcTRMhfi3HQyrLFDxJ1",
  "key4": "53VL35B8pGoUoHsrfKBHYcgXEmCs64DgLfqEN3kCJskPiqKMeTYYAzaGPnMPTm4wWLobpVQKe9RVizDg6WPghwq1",
  "key5": "2uEzsRGK7dSewDicNDgWiqsDX5uMSdhv9XWn5p38PkbHgx83X4n78kyqdKsWqMTh6MYXwFbJaPaFXwDnM6YER2BG",
  "key6": "4NenBtvZudbKDe4VVWybb9MGWmCiftgbe5Gcvd49FscGqfLKtCiXUWnrC7mWkYfJ8bUyfufs4iY2rYeBCXoKJkSE",
  "key7": "5DtvRXZqWqLbgFZvAKKDeDAD3iWaysUg9XcyHFsHo4QWpbXKYffjaz8g9jPsiWaEZG93nTEAFmo4n8Tn33DP5hKC",
  "key8": "uFpRTyYXkdNReSpCzKusihVKCif91wjrLqGTPNYH6hFTtFv9AfNu6nJdh2DfcEMGc9MWyN117e7EAur2VHd9Xeo",
  "key9": "5fjtiDSugp3pz9UwC6PLNYGar6FFHXEEJcUC1shzXL2Pr2M7eBDbKnTHsG6updFn4Nv8Jiveph6MnFe1WWA1Xm7d",
  "key10": "3KYDrjBdmPJpnTpFCcipEJ5xoWzJh4Q9pTMrFNLQy7g3WRNU1HMV88dpdXksZAzX355Qriwkq21qABwkCrB6F56",
  "key11": "4f5nFfiedQE2LtrW7h2FS6LqnneVSUAF3C7pK1etuZLdAk3HESp6RLX5qkYeLKm6AHGh7xQohRJtMacd6cAYekfG",
  "key12": "5nQgazL7AbfnFFPQxJfUUsdSNv3ztwURVYhSMdB4CGA2LTpGSWJWeRy9MSWPn5Asto7CQKDfoeL6bCn9XnnrhgV5",
  "key13": "4Rj1ZAQcXeFAS5i3Hpk7NV8CM7Wr98rqQmfWUzCeZ6fhXvBk9TT1speWMQdZc8Tedh3GehRKfJdui8Tz6pVne4F3",
  "key14": "4RrFPvpx8tHYLa5VGqpBS8zaATNAWp7ZzpKuGqTPZP7mppDbbzSbdpSUYKQibBCUetryZizjmngVMhbeZ4tXaSBj",
  "key15": "57id7QBcLafgbAWG5n5qULg1HK1mK9CvAE5BJ3GmgbeGxQ8FVyNTmjSNTycPqKfC8eNBwVumZxAVFqYjZD1fJWvy",
  "key16": "47AEgmDUyVU5u3jtDyogPGR4qew7gNd39p8VTHyyMUTaEo97R1rtdT7rUDMXmQByMxe7MB7d8kU7yk61aJAaALTm",
  "key17": "4dPbzFpG4JG33MyTi8xZGcuNo4u5Ch1mRpnimwYxXxrfhrC3tcRBHyy6eKXTiAxB56zK3EbVHyPufjHBL79wXVM8",
  "key18": "25wPewU7yGVBVguUhFbJSEgRPJvVccqJZ8sA6TAsyNz8bBPK7DHUtXjNkF1iFmNQU7H5epjzcBsCJ443WqKrfHcG",
  "key19": "3FJM9n3m2bt9TjvjqfMmkxetNzmQF6vatzPjZUFimRVN3DfLmm1jT7G1WmWXdzBmP2TzSYuXxgE4kPZqNZkAb3pL",
  "key20": "5674GCgVxajyQrJnhH4sYWrZZLxarz7fTwthXuAsihtNq37g9KxAq87183dLrmwqvd4yLc96MVQkWJA357zC3Djb",
  "key21": "2cStELExzhU9tHBBwybgSocjU78GbWU3M4ZVvN9QLW976wL37gMn4ySCBAwBaAyrchYPpRPqj67LWXtxgjhEqghG",
  "key22": "4ji6SQyyvmCrtNyZHtG1ZwzVXhQCPg9toP6rAdhCHL4VnDGhRsTEApsErqY5VwAryBWHMaVw7r59WYuDt2vDSLfh",
  "key23": "5jartYzefwV4Cz3J3ny5rFNEPk8xmQoXeGUX9c23W1obDqwcJZDYJ3Ni6u8KWyCvLPjZEPwGnZroZLG9YAdkUwuX",
  "key24": "4UoMxNPivGmgHSi6XrxUQMeCpfgWRv1fJncQ5EtKvrZQ8t4ABv8MUCDEYzqNDtSvVt922m43ay2CCu5VjKN3F3Xh",
  "key25": "UuxUSyQMqeHXNBsyohiFPgocuLrP9ze5KCEdky8RNCcQMo56SiJSdzcRXhHM6BPKAe8JswLAFt8PiyczusE8331",
  "key26": "3YgBxkjQAX9iSP5dWFmG36wcF4vr9BGP1CAhaRUPWFUWiirrHeKDuGSGMafgksTF8pEtNQJHN1niiNk8k5owotyT",
  "key27": "Awherw6arJRiUfcoHGxntovWpmWv3CbuTURwC7K4GUt6XmVmKQGHVmrS7ni8yWwVhZd9b6LHUa15xZ4oLgoWn3M",
  "key28": "37SZrLsuRD226LfaNNpxyYGTjSXujE2R9UyrZgj9GrLrdLb6fS5gy3DMyP5sKk4x4VHvqKM93WsbbzANtw1BDhZ5",
  "key29": "2evFqWAqskRpo5rw7FUu7WopqRbVz4KvqLtKaAXMJRBDZcofAdGoEWNFNSDWQ9pmPpLBmgagsTeSRMZPnrdsNYMv",
  "key30": "2ieqzAJgWDLELJHyqpDzUPRhh2LuPegcQ8yvVdwd7YJkHecMDdMqpmzgNarP12FqYVdb1eHDvHFoxTNsAESnUnLQ",
  "key31": "29TzAq5k3VJ8McLuahZmwktqjS5x4iQd5yTerXbwLreVupP4oLL9X7N18fxdmQdxXHSpbbm4danVhzTgNrgHwm7x",
  "key32": "5r7RSvircsDxZc8cngGFUww5mrRzF2S7E7qtoLhGrYWT9etKmD9QCMXXVxGGrcPaajtqHWxoCrMG14v7h63Eh6CR",
  "key33": "GH6q9Fv7ME7BqWMaoECgU2gwAqcdTpwHRS7ehNnF2SHGDWVXYdHHodzu8UtCrZWJCGKLm51JQQdY3GGSEHEnSDD",
  "key34": "5U6FpZNXEcfxM6DzeYdoHbQLENbAJyVVBTiSvspx4GF9bmc8gmGcENvspHoEBbeyGYsr472taKkN8Xesy6QegS3E",
  "key35": "4vZdcwg11sjJLypyHSc69pykNg4XLQFMnwAnRKerShQCpEv9rcBdXM4tC6Nj1GqjmZTWYMCNnkHvtv5PWKmg38Z5",
  "key36": "5tzcM3aoDR9mofxLgHw7N5NKDZiyxP4aA93WsLoBZwyN5uCs2TUNau2wVg9QnjX8avUf42iXr8kKsUkftc9TEGfh",
  "key37": "4RkkBTkAMG9GvVh9gvc66dmCvmFnBJJJ4zcWM5YjhX6NehpsmBTmY3KFSXrpg1pCSXtKfBd1AbkuREgFW6LDoUfn",
  "key38": "4ZkSVyet96mrtN3K1NrqzYaGeewJdGr3NHfwNp8Ca14yJd9oJRK9SdQhoTRt89affNq9DQX8TANWkWUENSWq4YGK",
  "key39": "qykZ7r2K2VACYQmvyUKsrucQY494RQJRPgiJQeMnb5oNBfickzpRgutEb1cuuViLMwNcZNWuyjJvxmu18uEmgDT",
  "key40": "2wMn4jEDZ9FNcc4MxmL3o2mAvYYJXXFinkn9YeRR4SMowauZ81xFPibtHWzrQNjiE8UYQSCdZqgz7Dbdd4n8PSFZ",
  "key41": "64e3Rf9zQfHDDLbAQabtUDPDYuJEqEL8FjKuwKYFbK9xgdY1RpvVowfeYc7k74hWn1sNCRnySHzpUf1CVthZuWBP",
  "key42": "2zkpFkS78vBE967RucpsxXeZorVFjG7XSybjr845DQn6oUhpvbn7sPpjZE5CZgKG9LTYoaEKGQYrw6gsD2Q7DTjV"
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
