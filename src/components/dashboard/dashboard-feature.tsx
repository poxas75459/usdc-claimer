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
    "4tePSYUpjaDkiJSQNKbHxWNz4yj1NUpkK1y3NqgU4u664Vyw4Ud7EuVVbJBJVHQEc3paYdXEiQJdKerj2u4a5ox8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRZc7wGv1QswJshaYxcAM9A1QVvZch9iPPbqtXvApDj6M1aPVzERXpFBFrZvyCUJ8kEudhFkM32stCkzCXU4vdt",
  "key1": "4DTvDEXT6XLe243AwjWNC4aHvjX7QJThEzaSYB2eBBbwJsG7WB9mtRowujxhCUFvvNSehDr1kazb6AWgZGBuxDRM",
  "key2": "2Zc86n3tuqe6LNtJMwFQCFPTz7Ewazx9boQvD64gjJ27dP2W19Mzounacz6xGPnxDtdaWCgLfH2pejdPunx3QdpT",
  "key3": "4bbzix9LvaHVo77KXNYhyhXuoeGJw3emhfUUEcwK4ocDKzrkkQoZQmT4pY2k3SKfwH4YXQtciA9sd5BrsFQJchhu",
  "key4": "DtYbtoaBj4JvmSw91JfqGCHJAxRdPEKCceZi1UXp2aogzcNwdJfMv2W9ZwmsyRVYjz39JFVUac8EP38aBMY65Z4",
  "key5": "3YL2a5raGgn5kWfj84VfNriEHZBZ6CrofWMQjCYzfJtfU4CTV9D2oaZuziJtNa8JBk5rKvCeqMdd1pEo7Pjpjq9T",
  "key6": "3hC2Wo1Sx6c6BzFsxG9zoLbpXniB59m9bRpzpohGGCuKy6wAEoFhgziPZm8afxDQMRKohxQ68pnpzKk1MufxV1Km",
  "key7": "tKTtH98zFt5SrMMc8TXLLLuShUHf5fPfYkzLghavSB9thGSRrRfxN8X3iWj47L1MGSdRGjvDvRycUar39BUbzZr",
  "key8": "sdGoz4PVye5qmNNM8KGrQxKhWQsndVLwr6QojGseTGhL1yGKGR73JLBrzGMEjwngBWkCM6vfA6SHDXpKgd321yq",
  "key9": "4usaqqZ8XUMhbZ7bQXapyJ9cNsDN5Vu6PzFwSgnSowLAK8a4fDB4wzHctNSRGj9iah76ZaG3CSCmox1bZiTX31nu",
  "key10": "HTQxGYL5ZKjJSDyDfaLRfXkKNPsFAgqBJ5efQbWy66AwWbTBQdJW3dz5JTqHqJu8jzFuEmoxhXbpTCCTgo6UJZ1",
  "key11": "5mjHkFw6JBe6kD2Fa1BdRVYkNwjSJsFAYBeEQnjJMqZnWweu47JEMMMBWsv9MzxnJ7TurRQpnCZQb4WBAMYFFhUM",
  "key12": "4nYkBBFE1Q62phikRrxcF4fBLQXSj7tFyFijJBeUnnYFaPZ38jcQmyY7EU82a2GVo39AZNSWEnr9peP3TtfhDBoR",
  "key13": "38rqVQytVtz5Tyv6PgCmnEQRKj3R7SQ2SQca9C55eUEFSLsCywBjffwxELcCfMVFsNJmsT9czEoymCKkqUKoBGbd",
  "key14": "37RNDjJo7dP8KqMw37YMsTU1fi9482zwMFCETrRH9KLG5Bqe1JURfr4zTTwGfd5M8GmkxSrwHZiAWs64RajQkFPz",
  "key15": "4Pa6VxzHvyivscGR1quwH6gUDwLZiv6bnAm7dzz2Wxgj7bEhmUN5a9HxZpgmvyqHzjrBJBVUgsVrhW7MexvkfjLH",
  "key16": "3P7Ctc878LD3MxR8fRyKzyANAD6gwuih9ddcbMsxBMNXx8UMPgy3is8U256VjuDzw44DayX89LyZZF5BDXiXqLLp",
  "key17": "2fsMLrBpVm9rbbzyHTapphwr88s1PWp4Fqbd7v5Kdu7yemtTJybjTr3LPaPREYzFftK3pxNidPvbH53Bt3NnwSYj",
  "key18": "3FF4Sit9otm7zqyugwG9BnjDdaeMimPWiMC7ZX98sD7bjCa1uW7nUS6ZNS2YmiHAvYsbN92ArUA3UtmjY7GPRXb6",
  "key19": "4PU7c7Q1gzQm8vyG41Bzt5ecE1aDq9HfgLMBnt4jukHGNMKc2kSBPXT1ga9KyMynrAZKwemyDJuoq7jB279spckt",
  "key20": "4jpcWeBsGEwwQ7FG9gRJXPhbywUW7XXS5BCE9s338GMwCMjbUE561MEQCmYVRB51deEDSMWGqg1zEgAcH4NHPbPq",
  "key21": "2AxD11kcdYwxF1PuffNztbiNaPBbS2sUgR72E3jRLb5JtFpwoLGMPMuDjCBEFfpVwScQvybjmHVM6sNvBrYBaY8L",
  "key22": "5UFghGjkDuC63pLNHC8jXwSkS8p9JVNfi2D9GqPjs358jQTze7nuiNiJaG1nMYS7C4VXMKFnj88yzPwK75oTTavy",
  "key23": "4yyPrpb1SdyUcX8KMJ7A8hnbAZxHa4JazKQfRNb2mkT9Zcresmj2o5KbDVB6oPtYQnBxVwEAbDKRg6Nd9B7jqB1",
  "key24": "S6fvue2EodpXyENN9kA5oFnh1ysSTteFG1yynzK6ckcR2aVeWESccMEBXVpUWciChHd4Vkck2f4ZX7oZ9iaDfSx",
  "key25": "5hwmPL45UP4HVKN1K69NueaQ4tcQZiVoDJqbGx3bFofczEEZVuyFXaUmVDdon1rFNnMSxAehktBmus5GMmn5qVps",
  "key26": "5F4eRGVSwz4DmAruNPK3ZqFu8RguDRVwcrEKZVYwJh5ttN5TeZn4xqJXNofnWn16tViPbeyWALbvMdJ8K85MAqYC",
  "key27": "3jsLsbyhFQ6hA5SFCnj4MQgLUHbGX8MUj9k5Y9iArCrJJGXb4nzcwB1dEmh8F2Qjbg9tvMRbEySqNFGa1MBaExdX",
  "key28": "678YS9KsvPTueeR324aQaEih7jHdwXWVUXie4zx8tJncEumA3mTt4UcNCHygps9vfTDxVCTsWpFGYXHD1nj36Eci",
  "key29": "4xonCfUrwHC1AnBSsDMmudJg47Z8zQHnCDfUrnSoAHHEunhsgZ9QV1ZSK3SPaaFE3RwzjxoEt2jKiCnw79ZhEYfA",
  "key30": "2NiqHetvwvNB1ziYkDbXe8yejf9PQahumJHN9Y1tPhnPUUNzMfu96FNYVCtq4jFexc1qncmf29TEbxVsPLJC54P1",
  "key31": "487kr2FDb9yJkcReTiiqmGsCxZNPxcd9dE4oCeARSXzaXtXqYjYD8QGJTYMFqwJXMYyzSveYtjgfFv3hn66NE7Qf",
  "key32": "5NKfYTTKSx9BB52uRghHN7KQJg8XJHxhnMBzVLuLjhKXpkMDW67it2ZRs5k2rHNkTMHBDPFnj8U9CUUrRDYZeK7S",
  "key33": "wUXEbV6bHxAcsKL26pNbNyHnb9zKU8zftRvHYwD5vXY3U6GCKqhNxC6q4gyxg9EdQuwzcan7eZfqa6J7D8Dxee1",
  "key34": "4RyEDHXS3mfGkCg2M9P6UK1TLxUKB9RJkjb1TipGMWbhW8N4h2gdUbaKznESh8totBtNTffuPruPfaAVCQ3izW2E",
  "key35": "5vnU4UcHhbZSUWgUZ2T5N3LAMFUc4Gn4q2DTJZ3VxRgG9HnHnxgNrvMonna1vkNhewe3B1uJdQvRSHJoyfALAtjY",
  "key36": "4sciStTBnQKQkbWBv4vgsnkrkt8SgLxiEXw84wMrBfUnVbYgLunG5STANHhgMigqozX3swCnZHJkHdiFGZb4pCiZ",
  "key37": "2iBSnfpX6aVSz5XxqWnQA8h4yEBbj1sPofCmxB3fERYqKJEcHkn8SsrFk5yXsfxKGdKDmCQHU7itukdC9kJSEACz",
  "key38": "NZdufRjmCv9CbGiQqBr2QwtqqQymdgUG6UwFWTrwWfEo1EFy3pZJtcwkc3Tj4aH1UfAies7mYdtnhXn8c6KB2Y2",
  "key39": "59XoL4oTK6K63mQWV5ApZhKGioiHcDrjhZuSFWhoR4MEYND76Kt8EVyGpPNDc5UW7mBmxUknDHKr7xRWgjgchceQ",
  "key40": "2BjnQi5Ujj1zeeFeZdyQRSQtrhX1SduC9NWp7zmjkQXFKKg3TSex8TMLdEG5sXp76GBuspVPQF3duhnah1LG6rPM",
  "key41": "3L1XeKH2wf52P2YC7Nut59XVi3AWyBK8WL5SeUvgRQfyXpBH4dF1JtDyxdcPFKvxznFG4dywvWKCsspkvZz2dTuD",
  "key42": "2zM4JKZJDfJasyCrWtYN8ZexHGZecDpQ5AZebmUoy6bAiPoY8Ta6PEjcgY8TpTcJJ6hh5ZWmShUfyy9uG1V9P1zX",
  "key43": "T8yySyE3gg43H65zQDPNjMYYt6HmRLq59a3dtydohqq4Q9ekVRptYduN1HxYVUA6BMUW7tm8Mfp4cDNwBQg8Z6F",
  "key44": "2a3LoPwjXmEm4Ny2ww3PEJXDoqiPLi1P1VvMq8EbXBGRJksxG23eHXTqPfvb4FU2sVgNz8Mt38B6q9SoRcnmg6y8",
  "key45": "5PGRvui9WfpnjsJ5c2tJJybnMapqaKudKfzS3DJXVyVBAR1D72Y11E4Gmv5sPL7E523FnZRFiC2UdHXBErcZsfAD",
  "key46": "q6zTEo94GgtYKBVWBpzJe2bjycrD9ywrNzLwHf32bK371BNGraZssfw8xX4pwWAMRxnvZC88S8bzb2DKQdHi6rf",
  "key47": "2SbNecNYGMYZNHSF8e8hpQc4iXfiWDKvvfoggU9Fu2fGTqDHbAzhLoGqc9RfyzYBq9FS5BfSmufDzxHAQpAaZJk4",
  "key48": "5hYB9h9TGgc3xuhq22tD2QheP78ibndm5D4YxcDfYsJdAzuD7LaNeKvkWu7ZSDJjNyMsE6HP1gENNpmz1WLzUWyC"
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
