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
    "3XrUySGMHMXSdAJUFdDGozC9JPtWEHacHvpg1DcNrEeS8L1dnL1dTh9YobrX6et2QpmZ72W8bh1z7xMaqsGgwzeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nknfcNqxP6gNjBzgH4uLuoeGDSiyaaNP1acmPuhTTBkSaXcszt16LPHdVLrN3pRCXEbRhxBrdrVfW7mPf6q9aNm",
  "key1": "4ibe5D3HQCE2o4gM89cWmFcHWbaekt29Fxo8C9VvsySRMXPqLs1eKVUU59rffMTfSBZ6JoKsJLAA3ngB3r2hNxog",
  "key2": "5hrMYqYD6degNjbQ8yZtqP7EVq6gvZSnbAKrJQcDKT9qkKToJe8464sps4sfXsgcS89jLsASGDtvX2UCQeJehbo8",
  "key3": "jYmLkf4AmGMFDjHDLyv8DhGRP8vVnD3M6Hu62NWL6WmYTmWsxYWsRQuAKu9Xhpd5o5L6douwhNKhdPJm78q2TLv",
  "key4": "5czDpsNPAvkApd7RMAGxy96JQirPAmpDVeD6UoLwA8JQa4jG6DhZAyKb717ohJNtuub4bFc44wTpgJZ6a18VEqAz",
  "key5": "3UMLiCJBakvuExf378bK98eEGiHNQJ8z7Lm5QVb8MLGGoZ5b9xZy7m2SgXx7SkgksubcWToYgsxK7d7CKMVT5qNs",
  "key6": "4m9aw1dfmqXSfnhHQhtWVf65vxfPFEaXUGrQvCZtJjKKyz5Ct4vCFruQWp44NuBr8zr7G5ehT2S4TdyD6JtsJuJ5",
  "key7": "3Fg8tUn9gNKPXnAW7pgD3GfzndpKrYzwmqmkuyo1DYZdWthN3VpjAFdJuR9eC7XwbHeNepBCnWgozkXAwS48BmGt",
  "key8": "5uFQtgKjpFNL4t9e5TDBxbimxcV58QSfrqiZQYdHC5MgG7ttrRWGVcVjJFwTfyhUEbEvbbLVfThECKkehbn8HyyB",
  "key9": "61BbEpxgg9HSMWC1jpNYZjtn7bBRrna8wCT2N7vdCEsH3QjgUf9EntGAhEoyByJn74wjgBWfHaGKBJs3aQ4bPLfT",
  "key10": "2J7injmLvuvkaMyYV3UgwSmeoJ3LGXZ7ksNBrVo8s8dWu4r9nbTHG1WvwgvTtXPUGVRuRzueSZM7CsBo3cme3WcK",
  "key11": "GdHzPWRdXgtzh8fhnUxh8K2T1madYEJaxRGyBo8VbTFVs5dQqUi4bug9ZjzV3gwzs7F1oGZiQ8LWMVjbssDScDT",
  "key12": "4PrWaFJEdcJ2RsT92qYoMBhsSRYDN8EFHzNeFtUoHioYH7sCUYad3QF6azjWKbAhbBxhCg33HaCzPkPKbvUiXmS9",
  "key13": "2yxj3miccrKW1H4HAv3vdC5fLiv4w9CBmT69VKuLh1WvTyEpD4FavZ1TKg2aRBvkHRMyXjuHWrNKwnB1ukGuNwkS",
  "key14": "3YHgwabZHSZfXNVDKDe2hmrmjxmDnWG1rFSqRMyFTVtnHN9MRgTXL7XbftXWARm7fmFhUrTkWDJA5MDzg1P62yp8",
  "key15": "3rZVazWjJreUat4dcjtFWPxdBy1mPhZGSz2BmekQqDHr8eNWgcSkghUv1cErGxrEZyQBZUHVwjXnK8QNZj6J9Vmj",
  "key16": "2LzizZEcsDndJb4i1WzPVhwnxsJqzU9Nwkg4pcgJithgmKYcxQJUw8tY7G4kC93izt6qPobuviK4VkzqXVTDe8Nx",
  "key17": "4D3cygGRPFAFvWgfw8Sz2EWktVyKZyBFjWDUfUFGFZVDGJjQ6xTQBiDCfhmsani2nmT1ZNYd8kkRvSZ51FXQSZoK",
  "key18": "448cdVx8HqKJPRg1fCqkqzDTgRJtHoA3BfCNNP7Ao9J3eERtCnC6AkKVVqRHeEnfQNkWvmen9GyeXNW6MVMF9Zrm",
  "key19": "S8YUvv9XFnmkDmTLRrZcovMdL8T8ndDL5oZX1om5igpcAp8i1f58dHj7uQ2atre4LFycnB14nfYKWVMEuExEg5a",
  "key20": "3RYTUi3BEKe1PGyEnjMPPjmrWZJXMLqrPJUqdfVX6jskkUVxa9w2PrK19AqP4cBftEdmtkKHXJKruUtB5eoBGog4",
  "key21": "jxg9tABqamTNscbqY2CmyySTuTfnTmX16m1ghdog7A5NuU8U1hT2tv47eD6hHxLhBDhL4JfppKuJoo1hami8ZpV",
  "key22": "4yzj77rMLntm82htwVP3jrhzRvFqDFz9N1jVDEzUsPM6AKmU5JpLptPZZMCpdnzYTVXuhXAphKVKvdtsq5HwNYva",
  "key23": "5DeJe4MnJLzoU5sDuG4ZoYfCC3UgVKKX253cbTbttPTSkB9yMYLWRSqdEe5S14igmLJhofKTuYxsJ8vi7cfBDNUE",
  "key24": "ZeCmc2aHFvAwhGAMzA8RevkzgeVrfFabxBqS5PVS3HWYZmokjzf5SSs7RcGtQmj3QV9i9znvR6sEMoNEr3qfNka",
  "key25": "4nqedZKH6BxtkKws5cz3D43mbK5BQpsYz7SDrj4BEfgm2FSsSCV5ipboP3yixxoX41FN5HWixRCKaQHhscTHSKGi",
  "key26": "6252FsJpCw6amYNh38N5ZxvjMrYSf6RqGiFXrn62oeAUAZoaC1aRDmcKGHN2JRLfHDYYwzY8DR4BeQ3ejNcnDQQe",
  "key27": "5Hq8NMAFEbRTU67xZdyFqh582Tyykm6pweDRAh5zTV5nAVbkiW3Rr3KNNr8Dq4FrMWemddZdpoGyDESa8ps1eBCc",
  "key28": "2WsQLLDm8FVi787sfPiCYRybhnN7f8ZgJ7fdyKAyhzsnmkWodLFbHBmz4cMsJnGdNVUai6mxGNAv2fGGpFZsJAqG",
  "key29": "32eXLdCgsKsa9iWn9ktsLYjQ6nw8NzKHLQmhYSqUPRG7XGN3x87oVf5gcA1JUTNHnAA86a5Kx5VVtvXtXmt3NMuX",
  "key30": "3yRyJM3A93BTQRoAsvvRy2PfoS7WnpvNRebZcRqJc7VRrJNnmBnz3hgUwFnnYWqqADg2avUR1RYtwyXTyE9B9esv",
  "key31": "2ac2oXWR9tuxYXvDRoNWUmh7fEJBTygQpwHa48uR9FVkH1uDoxGG8TvRenfGV3fHmxb92SSkoj6g5bMnSmcf3AVD",
  "key32": "4VMxhT23kKNm1S9dpTr6SGrQDWRHsCPJWRj5U3A5vWSv6CdYJPDotdAoh1mJd4bPPiQWLPx2jfnwo9gTrpoVM173",
  "key33": "EJSCDX5eAygKrWHrK98GgHMmNVym46zLXKQUwkY9xWUh12pP11dpsDkZsGEz8tFJdGwnjmUQYKFsbgncjUNPAVk",
  "key34": "5MKCm8VEpCWk5zWEPxwwWri9xesB68qcWNFvNMMiK82ZLmjEhHrMMff5umVFdLVsiwk876aNWxXZiudGmAe7bL7L",
  "key35": "4xGtFiArBKC8Fo6VFbJNyGg7ezWkbntSRYX5GDMR4KGhjcmNgE1BVe1FqqvdPqAPYBWG9vMwGLaAWDLzgnvx6S7o"
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
