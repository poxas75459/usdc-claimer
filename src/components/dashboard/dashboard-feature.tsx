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
    "2Xac2AkJFoLpFR8VxrL6cWBimTezJWvn9NoXtpTa6TqNB5qzqGFSEWoHVC1iNmHXRe6dVpcS8cBnMmXxTBLeH9wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49tqQdfsKtchieJoJZsY2Q3BTgsTD3XbZGFDcntvmVC1Yn5TJDTHc6amyLsMA4m6vMKJ4PjTBfZuuvaaSKP1rgW2",
  "key1": "5chtoEdeB3o4B72bRcedSj5fWCpHqufqzC3CyWG2Etyo5JCZVAC3PY43LhMQpUUSAf61RxC6qJdX427PtNXr71mD",
  "key2": "hpxU1cKFh8d3tMs2Vj7JrYU3G62VpsaL5EBGqQcX9S8C5P1gNUuj4Xk5b39p78Pg8FW8HQfRGvxm2XoQDYk2f9f",
  "key3": "5GXuH3SHFxbdQmdqDWdFiDRgUcyBmyn7CWakN1cHoGd9mRAC3jcVqJsEuVEqtRxu9nk5NhSqkC7rWHpFHXdVhBsA",
  "key4": "ApAr52Uos4xQ3fEgKKAYsxxKCEZLCCMZUuaThbbCPi9hBG54kctYGEX8ftMF29o4nxw8FRU2tJ4JZBweX8ZpF7U",
  "key5": "3tjUqWQfTbFmRgugpYFfa4gCMKWBdCJiT2zdyc2gEZiHw5ajmtaaRp8CPjJi71h4eixHPdrKuEuX2LUqd91ayN6i",
  "key6": "4FcPkPGhn5zMZprLF1CZ8PriePGQCeinZv5SwMmwpopgrpKoACNqYVozvoanNDMX5u9CdMhfPvJfH5HqqXZednNC",
  "key7": "4ScqnagN3SHXa8txBLLnGrPhbj2cxnmDm89euBoCn1HEYaQBYoJMzKqu45SU9S63K6zbv8xig5yp1DoR7XJ6gjhf",
  "key8": "4nVUaZBx8N3zwemEGWx6YBg9drrd8uKgjTxL5KxMGgjrRyMrN4gwcQjfNgrg8BdaPZWjX5ERCBgfSCCE63oZWSvh",
  "key9": "3gadsGJbFdhTLo9MTLdvRhPCUrM5fuRKhxcyt8hv77NwFYCT8JVrChrPSDhGestikPSSKUmZ9cFcSznhnZLdX5cs",
  "key10": "2EqFd2JKR75QwmFx1sCqDsBfBvRqkAcRiXviPsGLJr6v4PCBPLk7UKNwBJ1xYzRkhCkinf6sbA3wgsNs35mRSWFf",
  "key11": "psZJwh3bTvmoBzcxVAdJTEKZn7yjmYmXBZexw2CJQjYhENTcbXkWxQryVUyk9TKncnELu4UAdeeWDmVrB2v1zXG",
  "key12": "2ECPHcDYhy9tKAjkYN1eS1TshWXKDwcwLRviJQA7FeHouQbgyHKAWHMbrLm66aGPiTVTxLrFpboeiejZFFVxXcYV",
  "key13": "5Y6BnsdB2yQTMBEjaPdzvEFkb3KkPUwUuHjeM1GQeTo58eeNpyXFsayzkkWvwmBMwWNHjdj3s11AwbonVcVziLev",
  "key14": "4r5KR6feEp9DXnxjzWBRruSBWdBvnyhwj3YrS3jVa7KG4sSAyRCmofxbE7LfW9ydUaJFScxLeLmetHcAEw5KcWJy",
  "key15": "31w8EbHqA73f3AucsnFk23o8HXr3K2QEueoYQMfqF5AymCLj7sAR7AYGvzE2ouDWbNjtz9WPZC9zYcSSvMCYS9Y3",
  "key16": "4HCb3cHsgwrQ42JEgvtsx3nKJhThKUs9yKy3Aqv1YqJBQ6kHnQk9M6pxZo9FzbWzFvTy87qxAhzWfCgH1Hdh3GLp",
  "key17": "5G6pcFBsSHX58GqyD9CRBdWPokYpGQDMPN3NXjPFRULsd6DhbowET9smcnxo6CupoAv8gnmibSK91Fvow1UmNVTE",
  "key18": "2tVjK9xdXBajXA9dGDiYTjvEifZwadVFj2B1SYTQccAmMRsQZnYy6mHE6cm9LEbViLwhXfQnH3ggAeHv1MVZhYiL",
  "key19": "5bkZwzvyvCchWaZwWJRX8czPufqkh6ZRFRgHvu7tUnJaPLP5hRsYW2eiLu2VjMtkkNcAq8KDwjfd8evx8Z9JPmMT",
  "key20": "2KcBcjSaeopixstUe4PLx15kj4xtycF4QadkeR5xVDvPTX9W9v5g8A47VNmobukRH46RFXaNsATp8iByqrovDRBR",
  "key21": "5PH61NUfm4qkv2hCUwwHnxX6rqnB3kQd6LreQqPPyCa95B9NUm7ZzbjQohTehiZafHYe6Q7nu2nNVSESwgnEw7Fz",
  "key22": "2srfKBPHA23KuSVTnJVov7PxiVx8YWVCocTZZ7UDWPwBHKx5KZsnmRD4ZLdu1pDS7abKcSCAn7MiU4dG8mFpk6TY",
  "key23": "3fgHgL46bNgw3UJZCuRF5Q7mBPc8Teo4XfRxdMbE1hcSbUrF8wrLLVqC5Hj1rMr6mE9MRFexKc9e2CfXqPVC69QT",
  "key24": "4gdy6cYPGoYDUQCr9hSBcbGJvHM7ZgjyRJc5De5vLSojPBjRZeP4qJRP1NbRDSMRmi8z49HZQJRG8tMC2FoWWd3h",
  "key25": "Arj9qqzZPTQKkjQeqnStFoeDhCvuciEeDfvW9S9dLH3w1Wz54DeWPEbXK5D2zeSZxbpJZkQzuA5WzMMLG6ACMbJ",
  "key26": "GjmAKbLVCLK8iayyUaYqcfif5kon5uwgMz95BEM68J8kNHqSrpMjpgXGzM48jJ28jXW6wF39YDfEV7Mzv2AA1Du",
  "key27": "26AStePqPUXGVivrAYf3XmnNcXUEmASHm156wqXJsoi6vfH9yaGGXofzb13Smsytk7LGJxCcVnW6ino1a2MDkgbp",
  "key28": "5GQ2Jh7B5wXxGGBuG8Vk9VSqu3rsuScd2LHrubMesgeWR9aoQFPDqb5gy3hDae4e9ZN9fz1z1ndepPJbVGKUNu67",
  "key29": "5L1bcYjgtiHMBGHVihaJ9HXC4kZQ6a9P5ECEbHtPMFroXdcaFNNFnMoKnn2LPi65VTmYSGUgphapfpE67Sv11uf7",
  "key30": "4HyY6RHPZ8MegHQiFwb8ru3DRDvv6C1Az77EXZndxiLLvTQk5j7mrwp4VtJFPK2kAQL6iEcc8qcCc79H8xies27E",
  "key31": "CdrxpyRiZrRH1AcgMTX191W1Q7M7pQNmji32UmpZKpFRMk8GGmB3FZZhMyhKG1cFBKsuNq7oirHrTxVCdRckJMY",
  "key32": "2SG9jT1NgY3JB3or5AZV1QhozM1vMCB4WTuTnxDsVkz3LDuGCBnf96ukw8BAFSAvfzfHTbJ3nAK8o99vdrbTkRU8",
  "key33": "pU4mPTYd1f7ig4amzKiW2xRDmbzk857Ne5QAmRs3tPPpeNKFjnoAp314N6C2NdaTdh6NnSQ3SwQhsV5ELBFSA4y",
  "key34": "2s4uGSsnmNR2YEne7oEGw6Rg7KdA7bxVVv66H7PFfBcwDwjG4WrGsMo5g5iW9J51JcBaTUJJW9ZR8iZsBdJhqAKG",
  "key35": "4pMDb22EnPzAm3GwhUbQndFFg3RHsC9yTnR4pH5ZKXUFmBqvhZJorEnMfeEB79soGZuWoBhfnTr4BbkueaUfZ5Au",
  "key36": "5A2AtF5JZdfamzkNJUnakymiZa6j1xh4Ckq2ZMCZfmfJpChBQzBkf2qxhhW3QPhq2JmDe4whkPcPksnFsQ6gJfSC",
  "key37": "3xjNvJ3iJBkUrLz1zAW5NnLt7Q7qoaFdpCc3YvNqn7TJJZPmCLDtHt791dVxJ1Dv1mxapqRgpTrYiarsY2ekMHx5",
  "key38": "4pgHtAGLPjAY54V5T2m3XFKg3K6Z84WCMMGqwZ6K6zYECAkJGbiGcSLH7FiT54BBotyYz1f9sAAGivGtwc7oCA6i",
  "key39": "4SVwiDcqiJjiqJSnGyzUscsbrqDPiCjB44k6wNFeopeqbwKaBc13srCXn34zZsRrF8nbwTajtN3JuGLhc8Tgb4iq",
  "key40": "78EdTJ2bVZ5emqo8nZc8dB2WaGUPphMNSxMDFgoTwzv7RuBq7S5i4MVH9pQznqzWFLY7obmswzT9m61ohpzNebm",
  "key41": "5PHuN7xSAf4gkeiAtVBUQHJesNZK92GATjdjfT1Z9qxYSP49SMFGNBLkYjtPcE4uAtYSiLra5g8WyR3aQMxUhB8a",
  "key42": "4y4BCkeptMQ44ZYDm4X9thz5B2tjYiz5qBo7hmSVaw1KfREShMVA2VouG8xK9pz1bVe5y4ME6BmkMC5m5HEerHMc",
  "key43": "2tJnReH3aJw9YhzBbpcBhJAuEwB8X8ZbLGMyNjsRWZxRyAiCBuWqGT1NKdP3zNbaKP8AsJFnA8zanxRxq3szpouU",
  "key44": "2BenjRARDeyWBYpG9Q3S7ToGxWNMShPTSTrXWscK9BP4MTbZ2nWDcBbGFbAgU1fbm8a1FB9HDyTQG6DYBh7uEfcQ",
  "key45": "4oU3KPYhjPxCRzogUMUpzwB91bdHwNgPpDYpByjzFE2fpcxhb3KmU4exrYHS41hm2YgNpXN6QARXxXPNTzNjbX8d",
  "key46": "61H5UN9mntPKgxTfuWti2YiULUgDqo3rRQALKYCL6PS1HiV7c7Y1RQkVbK7YK9iRuzKEHtH3YktQaXGoA3wapaL1",
  "key47": "47XRzqAaTGmDnzdrUvfmbu7K4qzPigDiMyyeSVvTRmX4ffLiXfXbGqGNSBoSu8Y9tG45fsZ6yGJvWTaTkVxGkUnp"
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
