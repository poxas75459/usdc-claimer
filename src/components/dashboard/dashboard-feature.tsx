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
    "2PTzdRTM3Gk2RuGCVh1QvxyondY96o8PL6nkPo9SpV1F5mk84Dss9zhMaiG3TFShxSvemw4ee29M4PkZbuphzXcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2UnTGVzPYRaN7VbgJmB26duVydjKugzEd9mCwvvkvQ9uxoHnnEMjLuM566cRP1c4nBdGhFnVFDxjRJhUyTDiXH",
  "key1": "TN3dQPaQHaJFY7s9ANFLjsPoaqG2XwgHja3HSaNTBEGgm2Nv3KtV9BwSGAp8omGqMiu9itMK6CbwubszNk9VmHG",
  "key2": "3wrCWSezm1s9JgBozhphiGFGNMUvmbB4hMJpUg7JcdBhBqiXyFK69TSYzhiQfCpwxy2LaoxE595m5z25BcxkcyH7",
  "key3": "5wwtDp8EkC5MYtZicaxefNkoG5XS5nWHkqRctC6nGdGzajhTm8FzBLojDdRC4G1gJmvUigEa61NN5Db3RzM9G2bq",
  "key4": "3o9gdDoF6dWN7W69zGdeH9Ns9XyhWRLirJsWSvY9Ybji8RYQocyokZn91PCFrFYjCaUGLtgwkQbYVUwXbgictjjW",
  "key5": "3QKmEo92py4bGKwEzd9oXeRqmi9vT6ZHALTPKDwtYRAYvCy1ELEjEV4DJZJAAd1QkreU7ULKFbLzYvUDPheKbjJj",
  "key6": "4Sum9DM3cSwn7B6Atn4RTbsxVMCf19pz8qTSVsjrAPS4bFqvMQLEsiY8mWds8fqAeLz1xLnfMgexe2Yy2ea4sKAd",
  "key7": "4FmuxhTnEQUupEPnF63x5G7UxcYVPCWBDoipxqzXBWTG8pfxs7ZgXXWkFyidiiXosR5Np3miSM5WJF4o5ALzY4Dh",
  "key8": "3r9LZUshDdcfGrrqmaD926XaBXipPGe2o4D6E5V1a6NjhJXdKSsM9gDKpuouZbc9QYet1WkrYQ8uu1uADoHNpfdc",
  "key9": "3brsf14xg3j6qZexJHSBLVSqJHZdSLUyeYgi2dXo4xHXkSdGSBL3M9VqWs98YS42hccVPftVzjCsXR9CBAtXqTK9",
  "key10": "2F1QWmYE9rwUEZwQ4JEQ6aUzkWucwNErgubz2TSWKKLGgod4rkdvPbuurk21oifPtQihs7KCAvUsvddWMtvQNBqL",
  "key11": "3cAckzD6HXVNuRVBtpzBW7QdqD6kt1Hri127paYyg3JAQV1nDSJYQvXJ6zyzJAQTTKvFMbixBfeWN61UveCnivL7",
  "key12": "Jr9sF9fqNu8wvJKjJgop4m3SxtunrM5CHMvHJqRN626z1MTFHtM41zkcj49f7LKb2G7iZAk9ciJHL5bW2mtVecZ",
  "key13": "4TXmMzGcMquZnGAGre5bV1tHkRq6LmEEVqj4znhMiJrSrbwizLFnMkMAFw9fHf1kkdLaYNwry6ksN6DkQ4TnyNcz",
  "key14": "PikBFGjfqUZ82xxAg8KEaLVDABEBtd3kArVqgUPnCvYAEcjZHoPt4LAzF5BdH6XL88qsER4VS2jJBenpvGSAaHE",
  "key15": "XybE73Cyj4n7PJUaD1dfcyyVtYVKjxFuevzpV3aLPfFzU6GEbwbz1CF1Ju5BTqQTevx8m1tsWKbPc3HJX5w524Q",
  "key16": "56TfajSVJPqFjrkS3u8fGrkaTkJay2oKWJGCo7QAcFTVz3B55XnGve59hEhjpmCqyxZWGj3p31oFjxK1Sg8wfPnx",
  "key17": "3kKkSnFVYuGUbmGi543Adp1mhFxDjZsPo5jbvz6ef7we7xR99CctbunJmZKYjDmXSZZygHipzeN4Ji6QDRGGgDGi",
  "key18": "5P4sF4Ry2Toubms7vMvcMnkWfwaRQoELYik6bruaPN2ypCGm7b8x9RKWaMZRpa8cxtvtnGaqSBeKHaY3DpwdHJwH",
  "key19": "5TDgc9LUZ2rWPqwswRk9SoBNVeQF1YRNe5gbKpVtMuiFifj75bSfcqyoaMB6BUDycemWggWGkTDc1owVwy3Exvv9",
  "key20": "uYtU77agAEb4UuaVUd5NUa6rgYkj8ziHSTwvK2mWgnGjt1VaNsuKziT7CPXdHkwNoUmwzJ41CgVr9v8rjaAD8mT",
  "key21": "auHuDFbVPYXzhPS6wGtkhvGxTbeeFrwrhyGjg4RFMXdeU2aUkCvYSsxRBEJm1aTD59u3bRZrSvi6MWoVoEQDesH",
  "key22": "38amtM59QU3qoPLFfsUDFzsfzCwBzoNhs1KxknGADiZY4E6JRVTfSnPgXFPj9LyJLh9uSsgkgaEEpWSrq5wkcASa",
  "key23": "4fBeZoYMzZ91kSuvJZEd6H2hy2sTkV21mmuCAnpPHoUL32TcQH28PHLRsjmUFk3ZMsr386yvj5tQnRtkjF5J6xij",
  "key24": "5hZrBQi44x4u6UHfdg9ubT7kbGxiVdbzqKRm1CQc86kZDfMiSagZt4DA7z9QZdDqExeFcxUF51BoihLx1AFnQhan",
  "key25": "5gQLXcwy8pc5gxmdxaGnrinb2vW3ZHG4P3v5gQLRna7YivSZdB78w1c8DCXphnqXnvLSTYdKWWvm7nYNhroRkCjg",
  "key26": "4E5tXkSc3wxWirUPVwkHtpZoYhAELfADaWRUyk32bNHvKmoz4QL2TJaNNkff924qMViPBt7W8jvA422X9mwUdLHX",
  "key27": "st9cCy31RhuxjNN9quVMGBkTQxbLv4jwrqSPbcecqa6U8GtdddKeehoA5rYiCgfYb7ZSNpFT4WtHhEpn3mDgLVc",
  "key28": "29UJmQtUsFe4myDa6tenG5xNbVJ2GfZkXQ6CzjQLFW3x1YqdgLdLTtfjkcwfLMXjXtwP8tqogEpbeD9GNYRCihYX",
  "key29": "61xxbLhGWYmU3r6jHj6GevHDCUGqkkqeREwy2MH32gMX3kw12Knsi4rRW4fKEDt551krJZ1Nc1vxZYtxQmVXvpDn",
  "key30": "4KazCFHWX1Jwuc8BhhzxotTX3krQ4k8yACfmcSktZydx8jWivkjia69bfYc3z3gHM83NBvJXU4z4KwGUfKuarfCs",
  "key31": "5YUKeHZaGFUWqmAqGfewR6F8uDqJizy1ZVkSusNXvPkwKzDSzB1ZJWGs6iWgyDnsGVwimkZFxPgdrYMS9HdTSv1N",
  "key32": "39wNiEMt3jquQndWATsCRFEdNEyc5K97utZQtZbUvvZkXGREe64rwN2UbA1BBhzU1mJyREsQEG1x9tK9vWL3vWz2",
  "key33": "5RXKqNfaksbtpa3A949VafvTr578LPc8a3676tiHnxRRsTzPtfNBiZA69avKTtNgKpYFDCLHZrHW1pLmN2ynmnko",
  "key34": "5KL15HyCnYcXAwATWiJUKbRnuuuMgTXckQSVtzc5pVzQ1JazboJffVJwb8ockYfbipwbjsri3Yd8yEnkWECxLGgW",
  "key35": "5jwbX4xkvgpEQ2ShzagkPHoBwnM7KRabwTTEoD3dwFQfS37GckQdNzTimP3AG83yRNvCnEHCyJ6hLgv6myokYc4b",
  "key36": "CzpCBpFNEyjJqA8XWvvm1KdGsb4aNktrrFEdJnS2GAkou2MKnvACJKY1p7Ufky7Vy7g6ueyv6N24s5T8ea9j7Nh",
  "key37": "4CDmbnrW3qtiaebGS6BK9Fzog438vbPQDb7byYHVtu4uVEbKBjyAwQsNpBFSqUtGaNuQxcg9Z3VvfVAxkgTMW8m7"
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
