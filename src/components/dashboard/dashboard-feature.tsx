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
    "4viGkYb6zxeapWdwMiK1YXpqQeyjnJ3VMDXkZZTYUoHGv2yg1y5fugCrbxN42kraQULHXeB8qQ9AE5NtpSo16b2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBP4BKuwP8LsFbC3JcNUq495rjTSDsc4nybXX5dZ9oru9knxEkF5fQJDcAipL6g3d6CCoSRqwGRffCb9fFZfQaJ",
  "key1": "5pmzpTn3QLZ4PPY1GQtHLSbv4BFAHUkENVMzVhyXKthYMA1vSPVqzQKUbU8FYcwRLeEC7w1K7NNLp5tkMeNAL3Wu",
  "key2": "2DC9EXqQhUmeSqqLacjvYRBL5d6Dg6gkufGdANQz2bu9syMxZBCfDwQYQYCeeVcYJpMhyp9cm77j4FAMNV4W67FZ",
  "key3": "2UTKnxSgQTTxYXge9L7JJEymm65hT1JhTi35mv21pks7E2v4bAxNEVY5SwakhE3nALQZffQYsJW5NsreEfrnBnaX",
  "key4": "2BzaNHraBRzGovTHrknzJt8hEwd1MYe56ge6ZQcSpXJCQ6Mfm9XSdHw11pnqQxPvgkYhXAAhV9rWJD8xvvC6FbZZ",
  "key5": "HozRjNJEQjchPDCp5bDBSN5DRgq7EZwWdD523Fx4Z5qjSMDSRX2ggPMrj1KJ3vHddhsajfhA2N7KusmSca6RGTm",
  "key6": "5dwivs7cTdo8ZmDLZj4fKxDq9EvNPKXkrtKLMNe3cKj3oFxPQQ1dxCM9mNdQiPV4szraGUi7kjqp8pS8tJodyq9n",
  "key7": "4pyvFH3z9dU5QZ1dNcChHtfc6RDtmaokJvzixtxczRuTVqCWcSDNL68RKKuxa7fYJcth5L8R1hXDsTGzR838fReq",
  "key8": "3iosDXs2HoCwChzMeZmHQr5n2Liu48UZPqX7EcymSJXGnfGDmp7uroYaVeVNjdWx5Rxx6HmavAJ7tj8fzy8shCnL",
  "key9": "3yA7WRVz4zV8kB37xBrN5pA36z7yRgEdQ5gfEUeXUterAY9op9TexWbqTjz6QsWF4BvhrubXnaSxQftbZxiZPEKU",
  "key10": "4qU41eC1aDNXogeFsLnP7cqtd4BoYmMWX2P6cqkeZogy5qyn5RfcKZrvN5HvaFczCXjDiuMKxgKeuVmPEtjJqLJc",
  "key11": "c4xNVSkDw3d3PcxUAxP59wrxUMXPCB8jFLRkBbKKWjnMk4DBvq87CVd6aR9JRnkAvicpdNRC3iGCfLes5pmK1Hw",
  "key12": "51BAv7KM9KdwNKgRSCNgFCCsc4wRYCakxVuMde5ucCKG76EANZDay3yjsEya89TwecYQQsfN65iWeYoKiBtjuiGp",
  "key13": "4dxB6qm2gYvTU7NG5cioyZw3TNE3EMVwhPLKfWNe3zZz3oQqBmRBWNKcDLf1j5y3YzKMWo2btrTv1kLtSD5gUykh",
  "key14": "5Lkjvax24vyGK3wdN9CaZtt72ETtCrbaVupBjkmCGtZshpgBKwYe4DntELjCj8R7okShptQSHqL6h1XF1tA4oSpb",
  "key15": "49R2rExsd5qkiGRgEn5A4BvQqHSqixYrpneznh44MSPKxxJoMnKnQXBtX1HkJ6r161YoMMiJaeD5bSZpKPUte1hU",
  "key16": "4SXZmZXptLi85dL4Bt8h8qNphGms4dS7Pw7VQ3DyF5jgPXDvfqRiF56N4VCazwPuxcYJwZFVQGY8RuxWw8sYSSBu",
  "key17": "3RZRG72VHWfAqagGGeLQYEb4R7QgiwroLeYkT9ZctzbeoCr67GLerihyh4yjFgp89PUv66sWjmPF1MGqdCUgVkb5",
  "key18": "JL2sA6LwWx4XoaU5WpbMEb88oSbHdHp5vSK4oEXg3ibKtQYFafPSEVoRyMrUhWK3qFSV1muQgbBxW46bbU6AgRd",
  "key19": "SCmkgtjdLPJUNwvuhoRbZKdL9Uhnjno8jdsY4Y93JTEEkhhaPZrkCFRcFPjPMZB3ZkQVtQFoaajR3mYoyrXCCsX",
  "key20": "5XUmBduQh8AvFDwTbb9gQLDUBLpKWeHYqgaKrrqKK8EFkNAEWjMQSQy685GdqbsueQCJxiAs4yGnwsjU25HgHvm8",
  "key21": "5nUmVWHHmc768rBuYq5y2KzQiRtvZWHYqPW81viCjNcfd93rMun1BE4UnB83Ti4xvu4MXSJh4txtwvL4KDLEwv2W",
  "key22": "3AYFxnk1t7e8XUGxWHiiUqDJ1cbRht3YoMVRgUHUa5oubZJsJZ9zvyzRbTwnxHwjdF3bbs1EBSuAcE1BWyFw1WjD",
  "key23": "3bGxP78ZfSD3pzKYgxG97bzAVPi67soGNcyBRgfDpHjy5VPb7CFHPnDBuGW59Q7ut3VnjaBhipL7nr9S9YcGFD7G",
  "key24": "3fXnv73M2piNfKw8JpynLLED5ZmB5apJ7Epuf3Q5LBKcKjYTqkGYA6DRtWE89T51WHjTMjdWCwrTN8K1fWNnWiSt",
  "key25": "61kxcQK6Vpv8J7ACCUAXU3hNEc2osvjKsLZdmkCRS8yyb8bfvauoVFNMUrkPD84aeshtH9RnyMrFovRd649KKxVx",
  "key26": "2at3RukkFWUTeVSbFEoYXx398PM865EPsy7vsHRB6KrtRuHfeqk6tXT2anGN74uKJdvsBSTTfeZf429JGYe63diX",
  "key27": "5JyywA5VGjg8BXmTd92Tft3h1HuaDSjmfNbz2tnEFmzh8h2djkoHPrWUWYSRp7sXSJwVmzh8rKeFkqS2nQNG4Na9",
  "key28": "42jEgFNx4Wnimez47tbZnF6MyCtrtL6qoYsSFnJHBcN4Awe8dzC1DG1ZvYBRb6Aecb6g17MM5tHveoXXrWQyXmW7",
  "key29": "dwzZuavA69pFaFvqpRVkWzUs7NydtAyGxxDtPJCyWz8diZ3AtyZzQtKPF1t36HchDsd8WouDQ6Vn1zAPU6HfeCD",
  "key30": "5GsnATvb5uLW4e93MShyyTSFoBDbPVjks4ev6Bnz4ZGka8gpafqJe7c6iE3f3iFaJZrqgve5q9GPKJSNAjwhBXDU",
  "key31": "52syxoEXSK9DPDFbwh5iipMQwM4EhGdoxyQ9nuaEkb97PuBpvLwG3zDGT5RfwcUwMeVJFTpsis3Ys3Lw9grVzLKi",
  "key32": "2bUfPWw9BvpzbFtrKMDY5nPUF5X7DyV12uoVhk7Tryf8xeCoujfycptPYrCAPXv1dTuCePKAEpcqU4YAcWrvUe4B",
  "key33": "3DTLwQqwy2H5RstQ43fHHxqHC45Bar87uN2idUtRSQXcgeCkoUKQFENZL8Q9LQc5Z4Spj7on4asfvmsUgEPL4eJQ",
  "key34": "FeT7TAzhHnMTGzfU1inEg2gns3DPN9HBy9jLTEjvyFPe2wmoDHDb71JQnXBtzWnSGQPmRazF26P7YPY8Ju6nNNd",
  "key35": "3yNxKPUhispzwVpdmKL3H4CJ5P2jMcqZwNwc4mF99ifYCXQMDq28eVKfcvfiX2rkP6eV9poDYUGyZuZ6SStnxd5j",
  "key36": "qGCvsCGktc6UikLzMNkJvVFA7SuXr7AXkZPTieXWkPuCpeMkR9VQoLZRpevDrWdVhdKWuDQsWVApYtGcdSSMGe7",
  "key37": "2QgJvA3s6ty4uBsStQc4Sn46SYpvMJW8iUDW1CrphzQcnVgp9i7m6cnmYjy5Y78M4SSRneNic3DVbNLAHFtvjA1a",
  "key38": "26nkWfJEVwBzhWxakLVDKcvyihVNoxRF8NRFFGFonq2jgAY3fTvebtauggqk4vdwQdjfG1poe7FMY28ZgCWkMtwx",
  "key39": "5N7JZ9VJBXB2qcKUVx1cg86g63agGdN9bwdnEtJ2SeFgkRqExNER1yZyaJuTyxpYe9Hhnp1krXeLvCqNnyVMav4v",
  "key40": "26EButvFqa72G58pNBavJeBDGAyg81HarA2qTToWttWXpBGmWv5PWsWj5U168gfwbvCVrdceh9XWxiRBzbnyG2pw",
  "key41": "3FKW5jHg2r7umuKMrey8s1rFbPSU22cuUrmgQE8g1YmXaWDaBvjvC53LAUKgSSPquxoVKQq5vzHdLMDBazduaJSh"
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
