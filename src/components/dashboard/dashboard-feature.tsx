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
    "38RcXA3qKqUNZYuHPYTMCD8uFEYjjPwARTcsku1xKP84X5JpyFeHBG6RCyvbUHTy42ZfjhcBR5C3SfanUs1Wt4bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrXiXd5MdP9n9tsqfKoZ3PZaf8HR5Jz7EHETKTTdQoAwto8GsB5i3trf1Hh2v4cNQbaHNeYrn8xXYHCgczBcu7T",
  "key1": "Csje5ZNdXgjtUUY6c3CbLk4f4D5shneQsMyAqbXBd361HDmTN3aUfLw9wALRzYMjtSRFKSeFGdDtxmmRRvnbSzC",
  "key2": "59bKUFq8LfSMS6urab6yBWHXpsHgoJfPzSUVmbLy5xruEkK7WEH1xTFeKUNFuEuu19HHFMk2YuS9fgkW2G6bDxWL",
  "key3": "4a8vFkUDxLN8f4SgXBpuQqZ65etgGCQNjgLvaqz4brYFMn239RmjwoaQMZoq5wrWLTKZj7AXUWWEUpyh1rrsYusQ",
  "key4": "313HRmZM4ECqXQpU16pU3vGqwbMwG7AD2h8t3PSwFkcKjzSFQeVCePWzZyGouGVBSiPj3j2G7QgdfnchunsJ5iHX",
  "key5": "5jCYWSYeN1298ot7C4k95BYhEzEFEmsHSnh9xLTrEgb9FreEUZBsRk8DEUpjtLfKbLWB7iNBJhj61X621oKx457n",
  "key6": "2JgRP98ZDoLidZLu1xbGG5Me6TjUva6T1LuR8WNMdWCcS8qAmqkjyuNiqQkT89XZsXbux7ZvTr71xNTraRB14gQi",
  "key7": "26q1Zt9BLhR3nPyuLumetozQ9FYsgsm3EdRF1nTiLPNdqxxrsfiWph9fxbSSe48FQocn2A5pyCRHHsyVi4hGJsFz",
  "key8": "VqC4AcSc4dEFWSGSG5o2ShnPk3oEi4G63sFydCGJtQGGBdDtDtjYfsFfwAkZAdW3AETiVbDrLxPTsbRGPv437GV",
  "key9": "3xopiZDL7sxGPsfh4c1J35EypkNxRM3NRsfhcD8BfLokV6LN46rygZJ3FJG6hsfEDqxa9VG7egSHnHWxCZg7QmFg",
  "key10": "3dCYSiAAvjFvaV9fEcmNtfLWNaN6yRX3xSEgmpWJQS3B4v1oeAPvjzMLdPme6EUbLnXuCHf9LEw4ZwRBywega8tz",
  "key11": "PrmJvW6HLQDncAQLQtfNC1Wt3H8tsqwNWJvnpcdhVQj6oBSi8TQdURb445EdFZTJrTBfqvTz28jKR632XijQYvo",
  "key12": "4jcHo3Y97GXxsQPd83jdUGy4ZMax5npjptrJqfgsHwTQCCczpvj58QogBjDWCY8tRo9dsXJMLUNyYywbtczKYFzh",
  "key13": "4SzHUzFNJmwxVtcA44L5dfgjXHNLuj5WfyaiiLTuzTs3EMuNACQLbpDqgKfN3QiYDeiLpSo6baUpWdwUapBtxFpZ",
  "key14": "5H2ikkNvf65mDTmc8kRhBLfCroC8o1Tfr7Fqs7WNMmxvwWoJ3XsqRLj75P7Z7AKUdRDW2LWMUe6FUkXxthsG7Hug",
  "key15": "3sQEQcK978bLD1SPSSviR4q3nuaxocyeXbAJXWZrtHkNU193dCPr25UEsBAZUCVjZ9S9xGsUdPEe6WanBoTawTCs",
  "key16": "42bFjP9THaqWWmUL4FPQhqQaa58MaQ2RxZjkUpC472SzLvC2kkEz4AWS7ZhemMkgFnCE21L9nVt63c2i7uDpJc5E",
  "key17": "5PuBGnXgCkPBdEZWP3AoLW5VoySByE5RgKuB1CSGeZETrG7966zLiuqVarXm9ynL1Exv8wh4DRcWohpsnKsMJR6w",
  "key18": "a6LX3JY9FwBAF6BZgaLMY17voP86WJsxun77YBkp3Mec41kX9Kc3jN3C1USD5nwc4j5tDegeEdZdM5Kr2cGmT5x",
  "key19": "4v57TjGhK8HD4ZjyS2HUuEdPn5oPWHbFLnJPNJXUjTXm95wFuQ8RyRUW9UeUHW8pjqHhPXV9icXSgWJHCvX7sxf4",
  "key20": "45BqGyUr7ENaCA41K8SZbBoZ9KLhvdz7LRpQAbtf7wqesJjg6T5MLyQMWK393HoTiYEJXVcgEdwZEB873WzeXmET",
  "key21": "43TXm4UtJfKA37UBZK8bCFiyjWdDhHM5DK1NbkzZ3Zegjj5s1W4B2ADBARKjXUoxrAoR8mtFDkiaqHREj1YNLs5",
  "key22": "3PxcPqFAYamTnt3tdTt875jpAVBqVXYkD27x5vy7bNBZSqnz48wmeoRB2ALvWRwCftg6W4YVt6UH1QCzHn83TcuX",
  "key23": "3vPMqEQ2YkW6N21Xxxfo2Sdta59iTsGac59vGiQcWXRqTUGGTEtsZYwx7orG8vzyp5E68yWY3iHtotYaxbJradFg",
  "key24": "233W3Kq4A3ZUsBdHwHZoNpCev5aF5Y3FCErX4Vb4EGsVY1pVmLLwqU1F68R9FwJX6GU57VqzfU2fE3eEDtXtSEtb",
  "key25": "5EamW2UcHDPZH8GHMycSs1GX73Uxr23y3WKKYYxQS3mfFBZH2nTr6p7av5KbNuDBMGRxU2jmPjPgkb2DkE9pvUpi",
  "key26": "39oFZ35rcwPj9zsetPqaGN3QD75BETX1dECHG2BcFwfwyYjWCUo3stuNNQgWoGWsGcYzhbTahsThMhCDSGEYkqrs",
  "key27": "52z4AbfqLcM4FfACgDyowq9dVha3ZYPucCj56jqPWC6vKqkEYn1TjqyC2pbRUoc9bcxNyCffoPtcpzRCm4XphvR8",
  "key28": "2h4NrVq5DUh8BVkNqp44u47DbKA8fqLFrd1hCRgp1FiPKM8Ts7htXF2TM93YsV2ttmrjwaNqTBjJZfUFed6tejex",
  "key29": "5Ch4dLrdLymiFadX7nZPQAknMBUeaH6FDkkx57oE333YvkCnnZjoKttb2Eht74QtYjhdAVhnJtiv1bfMG5jJcuMy",
  "key30": "3Uv7Dye2WPjsFGYXAtkJCqmbvvinHBai3EfZcU7T85XvUdHyMgojqNsJyEGQqXUJ9KQW1wAxPabNiSaPDtwQ8zTN",
  "key31": "JUY63ZTiznDU4Z6m42EMeSanM2cRrHts7Ka5iU39iAQpU5pwTs3ZGdsphY4pi7chRVCXbVK6QnechmDfAh8fVdq",
  "key32": "3Ge6q3S3HFQtwbUVwxTKUMKUJ6TCkWrAZU6WKh1uoNYAjNsN6UYwtPoyZJ43i9duAfyxCQ7fVxSoYWVZ1zsb7N5r"
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
