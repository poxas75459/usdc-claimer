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
    "555Q22ujtzBi2YS1bGeyponUXfcN3ErQ42wnixYuoqdN4jR31NLPoDjfqxqMDddHgc1crxW1Eoym8FCuPXopzkLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31u18bM8ZUV8dRB31MiUt8gqd6gonwFsLoFvpWDunQPjYDjvCZoSXtTZuW8ZDh8stRGheBkQ5JJqNZzvHZL3Sy7g",
  "key1": "24nV4QyQ2ZEkwZuzKFgBtbMGmuNq4P3UvGEj57uMSqu4x3avjkG5LJRTTNdMcXe1XsJh6A3tJTWYtwcBdcVHKe8b",
  "key2": "2oqS4E7C2j8ZwK7QYJFQYX6bmy3MwxurKDZErGiPy6FEkwpZ1a2UFJLma44LwTxr9imsoRSPZ1NHxqaU4CuchN7w",
  "key3": "36R8hUTaPRmhL8qAMJ4xvrBe2C2BLwCu5wRR4kezdv4vTcMUP9vGWqFpGa2RJXXUAMEUwBN9AwgiDjchPYGpp9Z7",
  "key4": "4mxUDbL5sJSsLZvN1kvcbt7PGfPQDF4JMgot5EyBw6PZU5JePcpWPQNTt6y5KSTakp7hB7S95N5yVfASHrd2DLc3",
  "key5": "5hJjZvyLH5RccxRpJEK2dM6KEzGHSC2DC3wu8v3yNKnucJuNAV7qVVevtk7oa1obcYTTV3osbi9PDBAhbZvfDFcM",
  "key6": "TbxsATkuvTh3To3Q5nZzbRZX3WENs7GujQeEL2BeD8b5VCifLYRoJABEAXwbwWetfPQ75M9SJ35pENSiugHWwPy",
  "key7": "4tqH7p58MgcFy53RSePLdwmKAKD4PZbG5bWLL24fe62UCdkvXYWLoivUWY8SC7srC81oRBkgUjrgpXDdC1GXJ25q",
  "key8": "3xyxpmvbg2doJ3VFdmRganW9umD4cECaLDxzf5S4auxpNSLR7gkK1xHxGEvWwpN3iGFKpQBS19AZ8AXZG48oSMEd",
  "key9": "5Zohehrnwn9LpaqUrTH3ReEJajaSrjBcthu6374Ga8jJV9xXcGT1xuu5buVQKhrhZDFf5SABH8p7bi1q6JU5PfXx",
  "key10": "N714S2WprwbmQjLZMtLYyaFai5PceXM6EQFr3DBNUFA4q3C4sZ4PdjapvoSBB33DpuWiPuzMPb7FcZGtCfCKgks",
  "key11": "2EJpcMuo1Y5GjRLE9Yh8zxwNvQo1fEBWJc7QfhmCjsvTHsYv1ghvAoDNuHPtH2DMCmmBBzGXYHEK6KGR7zAGUznw",
  "key12": "nf9EEb8NfzjPGBbDzypBkHBs6tTxhawcbAu16v2i5JmuVTSRbBsiwD7MMZhJ3QoYV376fMw3H7STDEqD6cJqYdA",
  "key13": "2WCMnobVZ329RG9zoE5PdgsWYjtaB7FSUj3rUrJjbf4Lt3DYAfwQY3S3T6e2wDwdUpn1wu3Ar5Nb93jMLifYTuwF",
  "key14": "5PMFCoi75N8vM3oxwNa9yfQYuyazF594WFZqvgFvbVoaaA8u9Wc7jDND8qyAjajhHSHiFigWT5eCAdXwo4oJKnEq",
  "key15": "2bEReqAUn8ZikksZxT4214AeS6A8xDfvZVxKFNsaBRpqEoZw4Xfrs498q5nSpmbAWQ2jXQpvQjuQbTyERA9Aj59H",
  "key16": "3UxWER32XsofB3Jk91XWjWbrMJdwM3QiSk4waQaMz4NzLQM4etcXVBBFRmkcCXasVi79W4RAgz6ML8zX24dcMNgo",
  "key17": "5k3WG6Y4fGp5LQ5JUGtWmuD3QPEr4Zqdk1kywaa54venvH8XCyLEjxVeqVPU7LEV9KgfTz2fXJXEjWyxuuL5aEpG",
  "key18": "21BCPYQqEhJ3jbUkmopr6r6WhG7JHN32df6Fx5fpb8oJEFyXMLy5fGtGFjA1NymC7YCLAunrP3irzQ3pxqkiCSDt",
  "key19": "5kiHt6v3i1Cd8Ck8gFe1cPaMXvngBH9bqM6btbqY51TMhvmcpwsLJhFbWA24wDGqN4WvQp6VQMbWVRByZSs3RcHt",
  "key20": "aRgmF5DPapJb2osH6WB2TSGVizD9R9VgHgnfbhgvEY6sisJqRdfxpCx8yukGtQmwNLeXaT28i7xqv3yKniZGJNM",
  "key21": "5um5dY53Loc3fyqYqKp3WE489i9py4GVLSpMMq6QaJVXDUW4rTzNYjpkCvekCcvHoPJnSoiULas1KzkL55xAm8cj",
  "key22": "42P2UnYTAfvCzk3BXHr2cVeZgxStWeQrsPQt3NPi7iX4g3n1VfVUkW4PjbCYQfXzR7AJL6UfcDpvjuzU1pFrkasD",
  "key23": "2tuiacjHrpNs1dbw685vUqc4LZBH2bhxQPc64id9EH1Kpa4eY6ez6rCDrjBsTm1abQfJk2F9hMKj8S2kTXJreyPv",
  "key24": "2XPFGEUQySrToYdBLAJZR4N94ok9QPSA8Snf4fREXFWtz1N13JZB3LaH9V9VQBFgNvm2d87SA1HxTjVCzyZRvfAh",
  "key25": "3oZXof1i5ukJgzZcphdHDMS1bYLDoMBZrmQZysZ9AtCKRxC9o7fQ8XPZzcGY3ZUqTEQL46pb7J6gyN9AYKohpJPq",
  "key26": "2Vxh6pBgDZMnmow296o7912oHgdArfhBYRttNF6GbjCBVHRWXdBxfCf67U8H7MCNfXBu73MSQB7g2wXVN7V1ciV",
  "key27": "3VaUDgVd3HmjdnZrRGePJnZoaRWSh1T8NwBVVtSmwpa4BwutanpNnG6fH11MoR2osVnDKNZtCuyLqWVxhcoN1GbL",
  "key28": "2eZkygVfEko6ecQbDsv4NSHuq9hi4p6GPaSVqe6hE9HoSai9jzdYWsx1oHX1VaH3WQbuYhWvNgViZukAmFZhaZZw",
  "key29": "5YRDMEwt54rFB9Gqw3R2vFfzaEtHs1S3Mzs42sifHQ2PoUpPyAkDymFy6SeYEGWv8khcP4YwjVb8vyBmzeNWUYeF",
  "key30": "5xm8NRA6jx5VebHD9Tg6drruHZSqQDuSHRJtzywiUoTbPEBqbeaCKFN7KmyQhcwFoHcKXpnnZvfy6iKLMGWStf6",
  "key31": "5tQEDDuhS4wa5XsuchY3ZSwxyuHZq5zygyLTrE3dgwq9cwPBUh2aRkwh4E3MhBTTacLd2nniDUfyohE9k1ZYWFD1",
  "key32": "pjT4VPF7SH45D77srn15S4d97YjpAGgroCjGQQVsU3Ub7QeQjBQNSSz7fzwRu5GP27evCRi19khojXGfvCxrqDg",
  "key33": "43z2ncSvViZRjy4S3q1ENCRLPX3YsjM1nR9kNhaiuPeXoDJxCJiTfr9qqAgh7xb2BzEU6wsfSWqQH3LQ1PYWCxTB",
  "key34": "5boYYGtv6NUQZVd7DFTSLiXSBtk8hVnHBNdcYaE7XbCnWZkGozieGFVct27gteb7AcDCj71vsW39b99eFLT4JqPf",
  "key35": "5S6eyFUMmxMbLC5CSnHTnPK22nCprhHe1LuCkDJqPig7SQ35nvAeYJ2gn9ybuiaq95qF4C8jKf7iS5CRUreQXUfJ",
  "key36": "2YUx3mDhHyfzCqrEHtbcyhh6L7pfdbyYvwkFk3i2vxufc9oYjuj78hXe1ouDscVXf3ycv3vM1v6U2UvTzfp3Yiv6",
  "key37": "4StZN8YUeMJwgMSwmZ4BV1uX3H3QvT1nfjQew29Ts34dzit4qyuqZ24y2eKvW5cPHqYxt4mj7NbRjuTMWXfrSBmz",
  "key38": "4Y84R7oVBUBLBL6hdhnyF6eAQeAdP2MeHYnJMgt8ZuQjH8fh6CpJKeX881NAoM83dT4LSzzzekewdnhNA7TWRvu8",
  "key39": "5hAnd8inN9bzRo3jf6SG8tGm8B1wf2q9r6xo8P5kYdzF71Pbq1Tywtku5MAk24WbtnVwV4Hmtc1GShXZ2a76uAr4",
  "key40": "CPoo4a35JDbmK4pBySQSeYGpcZZNKdGPAGju2HxZrstCksjCxMzzdz3EF1T4HBakWwE7T9UaanNBdxmV14KMNRS",
  "key41": "4eD96Pif1Y6a6S2NoCJn8A2Akei5KqfefDz4dZ6hgY3AkxqmKdvSvgaxBJFUrZPeqR4YC5SMfZCwYgghNjwxK9kW",
  "key42": "36G9CSJqXWRQFFB5UUUqEYh4jnsoU3zX8wEBaTuj12nEhPq9kfBS1txVv35u4eUiXVqk1D9g1iL957yWeuKsH8aG",
  "key43": "5ra3QGXqr4EDkTrfWBq7WHXDJj7ecGD8DqMnG68Ua2WyejfrWr7FnbzfXrXmkqWVehQ2a7gHYuComJpq41r99cNs",
  "key44": "2GW256CbruJtfi4nRRZgSh8pHAqdTxFSHWuE2paeHitRStVWcagfx6mpQD6oANuSd77BDjjv45SB3Y5d38Tb5JbG",
  "key45": "2K1VqDFP1W6dgAQcFZ5xfUY8riyA7aeHeqck1R7HdEuCFuVn8xwf4UmenhBMak2knTMrkvzrMU1vFipYVuZSAnZi",
  "key46": "4JPK6C9ScQeyAKMjXagGAZQSDYyoorcMGdUS5nr1K3JLKFTFDj84SbLyV45M9bhSvcr8EuHHLRXAmWNb578CvD9i",
  "key47": "5DLsigJdnkiUYznDb3kbJeYajFLSuAFtvMa8HwhvSrTXkh7bkACMqnJieZ21FEgMMBRTV6tLrqd4FKzJ8KbQYWa",
  "key48": "NE8xjHQfiRMrakQCSrawL3QMVqEMSWaXV4ch5HPuneU8mX7do6MuzauQHMbH7tQ1Yf4ZpKGbJWCdjGoDHuKi8ym",
  "key49": "RNv6ux9aHfB1mW5fNkQo9UixtjRC5UV8gP9WUsS28V7ajExAi2CFErtQhZiuQznMzJarpFo6iUfwXkqLAvXSXdt"
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
