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
    "zi21q8AmeEn9TuTaoqhJ6Jn26TywLMKAbN8W3ufNUZX5jj3nhTWcqJyq5k7PkcgyuSqZXecmUoca85XGn1nu79u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ne5fequQPNrGE7JuboeT39c3QS5e76seHzXPNhMS91pMesRzrxQt2MHihu6CKH5ZsgedDr4thLu2g9aBAHyJWMU",
  "key1": "5mzq3dH7LHGuazmmPHEMiyUbvxZ6DxPWiJrMuPixrFDYeNroBpECJp2ba1VYfj7K67MqnVREJoAv1zLUQxvGq7ca",
  "key2": "5pfvbhmwJ4KRrSHF1MLwSrapJqW9QTVJHDQWEKynLiaa2Kn5uPoasmCyDjAdRwGL3S4xJx6zDroimw1f3qUsHYRe",
  "key3": "YHBnbn1XWcgUMefibYgVwe7XQUefpGbzE62HCvMR832kGPqBPhUqn71cbYvDUbQRpFE24KniSUdtTFrvk75AzBb",
  "key4": "kmSKdLDuBPTgVA2zrYZVY76NUVtU4UttsFbmB1PR5eG5RR4PZknHRVJPKEmcStWf2ozP1ho2pimXuV3iVcVxm55",
  "key5": "3rHj8ddunJpkkXw8TkQsGd2PSaQCfpa8bEcEdhnVaDPFwgee7UU9PUonHJ9br71aSsrb1EaUMXpqpFMUQkPa2iH3",
  "key6": "x9XwnmdCebCr3FSrxy9BvyiTPKFGU5fdTmw74sFdC4tFxs69ZX8nspBhASytjftMBPBrLDcB313mimCNH2BW135",
  "key7": "2h98ZJjw7CAtutPwcBTK5UaKiZcGz12j9FVX5jGEpvAKGmAiLd5LtLMTEQhjt38cLyoauSDQzj3jTFCetAdsgKdu",
  "key8": "3F2AkcDpKgSPdCqyJgkSBS2n7owbByLQRXAtfJ7of8CKU3iQghaLpn7MRmcQ1m6g2hfEY8zf73WM9ZUYEdYF5D79",
  "key9": "5Ucazc2NkVKLqpFJTGpNXCnQQz9U2YPmoDsaxT6bmTmhhhjvadZF2p3KbKTyPn2A9Kzena1eze9uAnHDRcvbeRD1",
  "key10": "2bG8wxohXKgsR175P3VqBfmjBgyt8MGFjwSaHMRiDmUEYZ9HLkQbNDdCA8Spzi2yx9vruTBZyZjnDbPTthChEFew",
  "key11": "4njYsN6pm5M8zwzznWVEwd6c1YeHXQzRMxLdSjYcZHyXe1VqdEWtyjbM4SNybqfHfBNR4rWYYJwj7tyKVqQt5uyf",
  "key12": "ZPLAE18QfcNnbyJtHVWTjcV9eC2KzCXdiedPTY5Yz1y7V5Ujhvqo2Tn1hVCL8TWGfXM5kN4ZkiPwRHKVb2VWNBm",
  "key13": "5AD3vj87xUysnufsyu1hkqGDkfzo1QubrSh8zjwUShWYjxSm2J7zudtdEE2qRYVhfnAPNzhPEj7Gyg7Kon4CdQFU",
  "key14": "63DxRE1jxpptFeBNdERyXPcKkuYKtMCjfTZD7wqXMUTHikRd7KfFsqfJyGGLJ8VrQSyZZSpeH9BjBaavobaqg7CD",
  "key15": "4bhsnjKST4QBvoFySxvd7hCin1R7eN1abpww63EqHmWJwg48Cg2PV3BTjFZDqLrHGAHZ1Ury9anTcKCvLLHtwVin",
  "key16": "5fyQjAjyq2TKDV5F1sq7fPeM6ZDcbojGFX5jLcWB1Ufo2xthjn5HspjbnoJuRcPbJ1CEP7z2H9WgoT9JS3PP1pmJ",
  "key17": "4joVYzwCiFfjzVMtogQff3VY2K58J9TSNtj5hGdaa5nHH9fMM1ybAgZSobigV3bRT15vhjUJwFtJq4CDyMyLz2mz",
  "key18": "2XumicTRu9kwK2zLfQGDvwHMKvZd5p6fG8buduXr8qzGWcvKNb7oWVnC9L4BnS4jpHzpUm73fF7wobHKekLtbRiu",
  "key19": "21TxZSDdXM3xncSUtGumZRMNR82WnS3pWQbgcuzRTa7so4AmDxY7jB3vD4NPNku6PAyypNGurvt8MiUTDLmxiUKK",
  "key20": "Pd1rPHUjCJoxzWpYwAocnWminmAVTJQveQr53yEsbw43JM7vHtRweqJd9uSHpgBgDddNn7dHQ3kZqLatV7Hy8fg",
  "key21": "3tuguhnSScJ1ZnHCLEeCinE5pYLiiqU6BmAAzq5D8jZz9ZcYJxiew3AvgfNgnH7mrJRDohk1Lcp6wZg6DvtNmpmL",
  "key22": "3N8jWG3kMMMfQjtF8qaUm7xLJiXe8fa1DRFeDFsgPtMaWjg3SkBQbbsexiVBEn9RUjXEbxo6rto81rpxYP7eusoE",
  "key23": "4XJhD2WH8Y5N1HX9BuTcebkVqxqjNQDBxa7YoXpfNzHvwYKULYzk63hdcA76rwX54x1ZBShfGvAANyLmR5Q8mK2v",
  "key24": "2UWrtjcx6m9N2Rya7d9uS13HmBkT8gRPEiCy93qaPjry1MxB7bsr8zdVGsru9mqvUs5a8jjeWezBn9XfsVes6CMe",
  "key25": "4RLPb2oJL4io2UXNYiZttHvgyGyF3GGcpFRvZ46YsDxBVtebKeVPY8qeinbVKYMP3Ln7ZMtZBaprfEXGWedswnP1",
  "key26": "44XhAy6TF7wW64oi5MaBy6ZZ7JgxznRskL2dEM1mroNF63vDYuxNWwTCra977L7VKZq8GWMW329dTat1F1FKDR87",
  "key27": "k8wGpEr3F61tLe54J5ex3euJ9Rbcmkj4mqXS16huTU7VJ8ngk1BuP3vQ2axgWir551rE7d9oRRjdLfAnPY9iz22",
  "key28": "3z4qU9abF2z1H1WktwTYbD3Wet98JFRTH4dhFAc9z3VnDTHJJUTwpNS1tYvDgnYP6qotsi7RhfgCsjyGQtQiSQRx",
  "key29": "YzMBJ4qYYTWeR95yfV6v1VDKSTrsEa6Gfe2RTJpNTzNc5ccN1aVd6xLyBs8iux8f7BLs3RceEHc7zqwAtY6YVqa",
  "key30": "3NoVWkhy5gRwbLhcPhsmvLijsg2P7HEWeFkbkdFAAtfoYTtJGWQ73ErtnYUnwr3xnVNSr5pQsLJge4awywhnsZn7",
  "key31": "zkwT44x77cQk4WYpAsYcPLRGBkk3VSaFF7ALzmCDty4z1TLZEhxaqXuQvvvBEm6hoVEk68Ag7NqEL69qq8UAAPt",
  "key32": "3cP4j6j8BQRo4MCgN8QWPSKjQmGhhzwGcjSt9E9qG1cxiQ6aiwzSoH7VqQtcRBnH6GNggsiEyk232qQ8imY9nsJK"
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
