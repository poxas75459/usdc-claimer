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
    "253mmNcH6Uo74DrmivKNLecbM4y6LAMDrQbVvYbVEh4BzGCn2U7Cz3uQkd4FJLASKW5ysMc3kHXqYUdHaoJ14kxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j35Qojotxb7RDjuJBW5JZimZLLcjKoy6ZqsFzcaKdevHNWwS2fGBoUDK9G6UCp6c18j9yE8jBcQGbnu2U66X3LP",
  "key1": "2aktskNcQuKdWptTNhywVrNbwX5fTM1Ee2zMQCXJ8TA7Zjdee1XuRT3AKUXwZRFonhyh8psHu9jEYb3z4quUQgRs",
  "key2": "5JXRT2S88XuqKowX7ouis1hd256VcR8cpHfrSXKPvTr79ykC8sSQEZXtX1YWGczzYv973jVoCTTK7EpnaQzPLRhU",
  "key3": "iiuXaEzj9ZLdLNH2TzPigHqH7R8BCNjg135Z3A8GJHMnJ39ioEwXJPCMxWgQyJyuXAYtSToWY5yhpk3SwMYVT8r",
  "key4": "GrfuqyM4T6d3KDortXX8DaF2NozpKUGL5SKDKt27NNwfAU9jncm6bVSK4d54Ev1YJiFwv9GjAuKZrM9E8xs3D5C",
  "key5": "5UDEFTXNe5E7uNPcatREaBvfHuXJgMWipRfDFbpve3GH5CCV2Pwv2kRCrDKVNUkApdo52n5ZbPVUkhiJms2xPmjG",
  "key6": "443dExCYcduSc47z1gY4mHMc2NUZ6v7GXGzpHqkj7D5cJBskq1YjBjgtP4N6GM6SEtPXef5tMD9zL9rAyvWNqN7m",
  "key7": "216sqchqcdLgYBQmK8zTP9F8oeAwJKJDUcJ29ocuE7uJxZJYzdCSWnbD4X7FTk1oPAcWpjU4xzPFdE5VinZYyvTX",
  "key8": "4hmHvVuEEXrgEd621rxvE2CcHZiEbf7Dn6hhTY976QNhv1tm4caJJbP3fvcNa2Jnb818NKXdyzwxPyDd8cuMGNzA",
  "key9": "4CR3eGhpLyM3hUunEP2M6Q7JtraeGjzU8vSaAVLYXNo33r1j8YZpje3ZzkJ9qpTs35PYtyq1LskiJCErN1smF8iZ",
  "key10": "3zYX6kgpzB6MC3EyS6mdVwBk59cFSRsd3kUYseXTseXR7gvMCDfoEH5P34DMRGGf4aS9Q74ve1eoacSqFooErYzY",
  "key11": "5qDH7FMLVGcqh9zRRiNgVgcJwpEnUvo5G6cT1pfAcxCYLgwL33pfrjQTuiRanzu9ovNvJL1SGFWt9YvCsrN21vnm",
  "key12": "3WT8StaoCqMUVWezsrrzPAHGdWMrZmKyGtnfcpGNauGC2S97AoBsEEqFWC4aMZxMqwFZ3fpitrHYX1epdZEDsCdA",
  "key13": "3KvHgqCW7G88p5f5rWsrEphGqxN3VYH9opTR2nebHdyhdyHJpaRw1YY2ZBgY4DQ8gbaDZLnRwmNDkFsWsuCR4Cpg",
  "key14": "5LfchaoGicQTrk8BzjSLLQqjsPX1dgVzUVLcVzCE2TsSar9UB5fFFci8smy9wgpVerg2kcHShj4i2w52njsnfv2",
  "key15": "2oFZ6GBKzCq3W7XvBzBYxdpHNLgziRVkcifLoMsH4Bc1XAqPsT3xMM6RDzaDhuXWDTedM6zkN4XegqvJuYM5ozUB",
  "key16": "3zEcqasKp9jchhD9paCCucpKJAEGEjqnGjsVbxYae8vvn6Fy7fhV8fF3NpAqaXDjHMpfuubkgNzM34SQfK6oHanW",
  "key17": "5HhptU4sJ6j2jD8RVkosqzAfE9TFJMVbqEdhLajUJXzTbav8hTjPLwXhejak27iVovjmGfk9fyJnYgGvnKHoqVXP",
  "key18": "55fRWC7aZU5VtWGe4ZShuhiL1oFm1Uk64WHMcahJiFLnaun8z8aGXyh8ftXcsvaJMkpATv9B8AV8KKdCiEAAFM1C",
  "key19": "5gmGDNnXRM7tpy9xewQbhXwN5e7uN3Mtgct34mjTKgD2mZRqUf4uWU5JQFHu5ESFq9BgGH6pVFawEzVhMt665EDS",
  "key20": "2Ahbfjd637uVefHzC3rkj6mWrrQMuoURt6CxwM6MvVRwCGMJTMBbXv8n6VxuTW2Snv97JwnDbyGo1CPiDnWvEcn5",
  "key21": "58T665QdT3aSLf3xmX4at2j7sbN9vXogjAJMLvs3YB4to9HoMP6cR3yVp1gUX4JJP5juGUygESyN2niHdLkxJ3jk",
  "key22": "2DhyHghrUNrL1mX23TcyfduwBw6tCzk9Aoyb5gZ65BocunNANVeH6hnFVp5769EGGpGA5WVAWGwKwANqPwNd3r6a",
  "key23": "5SSijUTD9Rz9EeiQ3YesbfScWJPP2NPkaDaKUB1yrrb3LVxXn9jWtUgZeY4dixziSyZgtMFtS7QmaXHpfC75RNfG",
  "key24": "KK4ZzveGd9bnZdWTReUF9G1i4J4nFbzixfJB5bws553qkWCkZEEyYXb36nN8QGpoHTrpSDHivXSqgZHFNo8oxCB",
  "key25": "5vcsDP6Mi7qiFjnMLhfKvEjD7MBPjVA9Sq8qJAwm6482g1ENv3aQspj3tUQhrnt57ZR74k9vm6s4RadM9JPvc4T6",
  "key26": "2Rwa7pgnX2zvKSvuDSVF5nSn8Um6AEDoMHTQdcoNqoXcAQGrCGMna4U1sbbxUfa2bhCZK4UowTUYSC2GZhr2wFwv",
  "key27": "3Rv4ACzWeXeNG5E5ijWYKAYkkHFC9LkzTb7bsWTmhtjXX8zpyUGDN3mineib7DTHFe7J7K7unkfPx66FknxxNxPz",
  "key28": "4DWWHCjrEXUwFYjumuvzAr1mLbhavW6m5Q5RG6XekCXT9daor3hcnvyqUmuXJoRhtCP65yMvxkvZLgkXutgiXY4a",
  "key29": "3WFXSFbrU3k4jVkUaLmHoPBymN8b9aTi2SvvoTmM1ixkh4zJNoizCqv3JdDuWpyNqCMvK77pmwcWU7DPobGDzvE7",
  "key30": "33DHk2Fki86ppnhPaLMrCMYK13wrMKse9gr8qDyo8BnuKEdgR2JFCiKaF5NvpDp2yU9qVh91MV3U3kcqF6A8hKXz"
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
