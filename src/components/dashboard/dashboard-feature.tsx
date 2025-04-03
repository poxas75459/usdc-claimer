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
    "5QeQzpejUDR16Az6brCyDyjUAMbTJQbo2feaCBqr742xdX7os43wkhsD3KJUUEZ4fpXQk12YyWG9AQHfmZKiPS5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jPUvsABo2fR6QiC2fSKHfcFsEjxc7yugGSXwoht4a4iWnezBc2KcReQjWc83RbZMadJGtdxdYaw3eZdJfgprY4D",
  "key1": "2z8tZppkdfBL1YD3KWw3paCNjFuKuSGKtgLhcmeD8UazkmEVWPdcG7jHA86urvT5Wxkg6UsXBbssv1vrRhX9udA4",
  "key2": "4hG5mgfjirjYijzDupz2DCRPXPfjr2YUiv7PvTv7xP57vN3RZSo3TFTLvgwvwh4sinK2A6vhhkXgCrEuGT6Lx2yB",
  "key3": "2B8VxZtN4eSZg2ofCSaJWhfGjibCf1tsCdYoDX4u8aihBZRXrGJKFmL3qkw8DfebAQTjc4tzSZjo9PPMkMfF7BU5",
  "key4": "31EXCjEvbmNhCVsrQM38KXy8HY8hwTuXdN3Uv9S4KNpqeNKG9bm5nwKVusrmUcu2YzR44FQwbn4Mw92uoSSjfQh6",
  "key5": "3i3FK9qmMvc9jqs4gZKus11sQbjFv25dXweBnbbCsgGt2UnAPHAjroEvjr3DfieFd3FdLGmv3EyAyXQ4FuZPg6Jz",
  "key6": "5pb8Rt8xngXCTcwm4KnECcNFvWreVzEdvhtkEWdu2cLbHdEK5vaDGcDLmcFndnB4JkaLwhAsxJxKRYQUkjhqzpnW",
  "key7": "3RTMjXRoCEejuhgynpn8fr7CBEi1PCSEpjQ3vdLc5Jor4QUXN5ED5BQTPJujohZmzK4KiZ6MkMRnEkECnfjUiZVj",
  "key8": "2VK7KjHTdXJW5N18hfKCQuzxbmzCtxzXG6FVTywYPrwvQVeQ6PNUnxA5tgvUWFGHFwzLjusy8UzSQBNtWxtLkHDL",
  "key9": "5SiPrsEHajLuS5wYw21bt8NTY2k2iduSp4KWnhgtZivmkTJuXmL8zPyDu8yeaBWRxQosh3mJTRjs8MrPTZhUNCTx",
  "key10": "D8MnbiKop4aJuUQXvjPsEyLAUDiuZyfpKwxYXcGRNPi6zHLDVnmE2CNjYP4dBQtH3DoPSHk8Qv1e2uyr7Aph67Z",
  "key11": "4J841qbP9Q9ht7u5xyD67MEJAuD4frkQvLPMbVMAjyr4iyAQgJityPj5Y93Gcrezyf3nc6GtYKRZanSBSmLyspaz",
  "key12": "2b13ihh5xVVZdkR3THh7i6ArRM6YS6aB7iYRFRUhc5fnm6gp9KCQQJ8j7EM9mbbmg3DE5D7nsVsjg3BiqKT9uH4m",
  "key13": "Tsi6drRrWd7ZkYqDxkg7g4Lt2qaRzGPmooYdRB9YzmUoKWp4JuvpPfh1a9yJM4nFwJqBqmBPzyCTHRESpdr1SZG",
  "key14": "2fkfiATMQyvLaxuPrgXQVKY1ooAcpKDxwgK6FcihEFnJHD1ndrpSHzwH542UEv2TnD6S8smTUj6R2zo3ZQLDgK73",
  "key15": "4gVqo87x1n4aoAD276Bn4pVrFriA88PszeMtLu7z4AEeq4P1TqHLsYQTkW2EuAGPMnHg2xgwBj9PyagrZuJsWn1M",
  "key16": "61gVZAaWdQbhrfWvMJt9DwwVivDiHaEwVRUnrfgpwpfUz1ZAiiAbBCY4JfQWb74LueL9YXj4Pyqq7novvo4PMWqZ",
  "key17": "jpD3o6LMRR21p78qsBmWbzsGStA39xtAuAkgH63NEuBGvz8Zz3P9UqmpYmZcAujZsWM3uDuxmfAatSVADyKuSz5",
  "key18": "4kZFwNYLzS3TqwFnQtnarx3t1AarFiHGxtqrP1f52mVsypk8aBrsMho2SsvaHfXSeaDHDNMH5v8nnNJ94Xhruduj",
  "key19": "ivYFTVnWDqpmSBs86VTr37MVcz4LYWpVWohg47KC9bU4AUDW9hDsQb3f3eyEPvK7ev1dT9iyTXHk72UvG52gCyF",
  "key20": "2WfVLUsF4dCgKpkNTRuJxyhYXqySJFyVdtbNrmw5RNdVfNGzMnfqqZP6RAXxD5QVCRdjLAZykkAMbi4XPVtuqUrH",
  "key21": "3AJw8RvFoAQQ5yET792gmh5fJvStQKWfFMRRVuUASssBa5c6Nn79KPncamqcTC18nryEs2tHidWKqYgTTNYqhQs3",
  "key22": "3faEBKJPixeoyTyJtM9jkc53AQKRAEMnPvfpBhcwCS1NyqRdqbLdPp3XwMKxbwsKRZrrDLtCiWwWHfgTbMYgDsms",
  "key23": "29brdXawzeekp4TjJYHHKFpGQb9w4KYQ2Ve12vkJK1D6SUuXhQyosbv5dntGhDT7wL6XVZCoaDvg5jaG3tvJ8NUt",
  "key24": "BJT227Ljb8oFFuCtZSA7Cg2AU6cBRpeAZKWYStig4URfdX8ouy2JAp7LGMN7rKW4mecJKxus9AnDPG8h3zPWSyR",
  "key25": "4RWTkRnkuiS4tPp9yEpMSAcQpAUiivHKnQg1YaUAnf8JqBsNrx1Nsgz6kskpu2gMbu8CwqCSPx6m2xpTgeoor6xo",
  "key26": "4KGAhvQ4nq2nxbjbcS1MAs6wEdN3qyR3yJrAko2ha5wDiXkrXjC7WZg4DvxANmoE6n6NfiX3xJFUA9W34jZKCCb7",
  "key27": "29xcsEyBwrRfSDNzJLPgEAasCQfgngvLuHFYpBZUBiPQhPUUcmMKgEKZyWuzFgfqib1vbqHKfKeSv6mPgXZRvjFp",
  "key28": "3YUr1Q3DFhPLbm6xPp9B6EVrkxbA9Jw5aJW8L22JzvofcXQ528ocAPaQj2eT9qii2P6y874NB7E8QtFp5rRj9AC1",
  "key29": "5842udYVi4cYq49Q2ohQLDW1MjRt3YDrWwJkjiweaQ8M4NWtftwLpZ7ZmnU9ij95jyjY9Lm5VV4BZefPHx5w7svs"
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
