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
    "vH5ZW1EqVwNag5NKpAHba5LEyp51R5bk4evbjY6fDtYbh41pesbp5DPrSAD6eAZNxHVnMBKy1yJWAqWpKybyZ4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xfu6coQrdpBGYT3BfJBdq8ssz2oy4zk74xx622kSuPdradyHS6Ab7tmSkju26giZSJCnvHE6EKFBaXpZsgJyXSq",
  "key1": "3Qhhm7kGuML1gQwAW6mtEuY5pKFuj6b7HTHmVHTy3aChNiWgzkYRfNVBZqsMEirDvNiSEnX8Uv2y6NQh2X94uouQ",
  "key2": "451oXJovAD7AvRo554DfoE3ebFv14AAPwaE2wqfUBLBZ6tFCC1thYEYkyVjHya2qT3df1BV1vJfcyTAzHTrvDVvt",
  "key3": "67kKXyuPUFGUD45hC4xzr8NYd91Nes5EcJYDn8nzbZnfNuZRK2cG68j2DMyA7JJRNdwX4RbFRYR3crggeXHhHBQQ",
  "key4": "2qKzPJv6uTyw56heXQZKVa39HCdeHFDRj3F6QHtWiLDtD3CAKtdY5nYfBWCp8CNpZqsEeXvFiCYVwU6isEmXqM3p",
  "key5": "2vaGaWSd6YAfpuynMhMRLxjTaVy7VgKrDyXJBkEFEQ8bXfpqSXXzbppX7nYbxLNU2YeiyHusMz5ozZJP2xKBK261",
  "key6": "4sKKjJ22f5r6x4ogFhFHQw7XSBMYfd9asL82divBMy915mQqwFEpGjZggL18uDMU2iPr1Vn3HBpWQwQXXnyin2JD",
  "key7": "529oquCYi5Xi42ssvxxREKZQqQxUtBE9UStBtEPRirpqTv8Fe9EbSZ7YGHmjKMRdoZ9Ndp2MSCSBXaAobir3RHbj",
  "key8": "5EmjvjkTzExZXjbFAthwojLmEP69SGCPq3jzLqYkbGqHzr4vK8qn9YQjpRTayA6dGLe2JR5aVW3DwHxb7EvLQg3p",
  "key9": "2fbJMcZS2XkhBzoDebFsc9bUWid5z5n4LPRjtD7wipyiFydnKuaQBgLCgCoijZn54nLHtQCGxbSTw9qQ1GDoGfsa",
  "key10": "5djfto1Euj5gnCoDEHywv6wtAbGCchPVR1HEY2EgdmvUzjHWSSfPkPzzwi49vPBSZQpoMkFwGqpRn42GrRUVdZYK",
  "key11": "UsqLM8eSwPNmDTJKhtdSK2atXnbwvqB39UQqZZfeDBNZHvDegN31bbXo9K41QKbTN1MPxEYxBYTPqZqpMTkdw7r",
  "key12": "4s7FSpKBmWamf1yNB6bVdqZBh4Rpkyke3eDSjbv3ofpj1FDjKSkkGR4zUaJnUKExHDpxyccRHBNi5bGH2cC3YbNs",
  "key13": "5PYzp2aY9vgiADQ7rrawx1F47q4TYjg1LwkJ7V5gV5UnVcMVRWfCpKPrZYAJwNCBSBVcc3q4iaB1QFKEDzjtyWDY",
  "key14": "2cBJcME37vnKaJvxhavs6LVM5ayccivfZ8GEHgfV3f8oDSuxLnCpYa6Kppkjbz5T52B4LKeZbjMp9pVTbsebVgm7",
  "key15": "3vBei3g5KqxgbFYZ5f4v7fnfmFozKAzELzSVkE3yhqDZwnMKktXpQYbBALmLwjTDYq5Ebu99ndfn2tvoh1tTcJiR",
  "key16": "4gWtqFbbZneZ6NFboGfpCECNycsUDDB3W929tpBSiP7KzNnWucjfBGYYbRAGYpjcew91xnt2qGJzi7WxNHTwvTdC",
  "key17": "5L5M2G7bXu5dundg5eLN1WkEju8sUzdcBnYSZcFhGyZ1v2NC8asZ9BKLNvKPuGSX5UEpj89LjWdiGm7rgWLwA6eJ",
  "key18": "fazcvxDRSWseCAUwm9kXceiunWXQPVDYiiJCazytRp7uc6hpNwL1etNjGaYCp2kpZYjEsdQjsy2o9C45U1rEKru",
  "key19": "fdDfsi7fHRVPPRKtKv9Nk83vkgRbd8PvkhXwyMXQxk2ZsCw5TT3NkPBknxfSWBXNxmW8RtqvKqHTVGZHEFTMQpr",
  "key20": "3yxDQQqWRJGpxHrBKQGiWrv2yKESQeEHAi6nPdArHwHvDyesqsWKLZccVTrMaZv3h9Ue3gYrdQKtui7LMDN6tvy",
  "key21": "3mGCr8AcaDYKt2xF1f1vymSWGz8eMykvocHDvFkWrjTW3std9r4umFp1FiKsHTdE9t59623wt2wM8z6HEnFDNTVQ",
  "key22": "5BRpZvZezuT1jMuCwrqD1b6vggbmiVfwpmEw2y7MaJdgJ9rcph1R94sF9ba6TZPkHTvJSkhcqMaFhMrBrogfnG3s",
  "key23": "4T5npCTguQBpAWiwfj3ZwpbE1ajt8zTEYbQ5F8Sx38jqkd82LLwGTwK32bNuWxGsbN7FDPR393HwdrgTDMbYxVKn",
  "key24": "5uGiV6WdZJN2oXK1wtmUTYPSyGGWss5B36UsVjkmWuVjKYFXvCwawHpQNTJbKABKWesm9g6R2UuxBKGrQNeXjKGD",
  "key25": "Jwx5RS5mxisg95fbKcbPsGt39EQT6CXwUbwnHj2DTL3RTExg5okjYk2kkQ2B4MXqmYYjMamdeshG5ixtZmQkqUR",
  "key26": "2mHLMncCjzrkfjPxMEnoZ7QAJWVWn8uEUwZRSBWBA3zpeyhLDMQCDJmbEEtYnDWvqEuvNw9dW93yqnF9CofYtZe3",
  "key27": "5nfUVdRUSBuzgc2mzRNFtGGKpYv2KT9Pcuc6HV17EVrxV8RY4fUDCCpsdPv1VC6jaeJnZX9bV3UVjADEkusMv6VH",
  "key28": "649YuEhQ6ovry1FnFDc7Uh5CHP7NJ2Yp5EVXxnSusmW7pSHqJkXzQLoyd5TgEwh7DuAkBRnSdV2KvTo3wxwvMeLD",
  "key29": "3KsxNNLGDYiZHvoejkeJyS1p3pziya37EAkyEsX3AYW6Ld1z4bbyLYxLFydGhxpwR4ibKGJVJvcYjMmEWNGH8iXz",
  "key30": "yopCJqYxj83wxvbmXQbUqs2xYf3p7uBp9ZoiBpbtifNgeMcKb8KKSXnhvxrR1WE9Ui42StB7XeDJiDPzCtczHbR",
  "key31": "658ryEaSHyJPJ6nURfcq8ERnaeRWsjrerMJs5TuucdmvVznad7Q6LmfpVimREWYhVLigE12BwYUMTwq4xkZCM34x",
  "key32": "2hArcFhZzAspjvw32vR1zWUPGNkfuqiae5U9hGBd1bQJhYaWoMe2EsoKdrCSXxi36MacW13J8NaM4yuSkYXBcQFt",
  "key33": "3veqz95GL5mRZuPbH9SfoxkqKH8UpYCvSJKwT9zte2axDxV2jrL1XXpF9xRSnL8Vv4t8PwgjXEZFSELg6j3Sbcfr",
  "key34": "4J4ZViNhRgcm2zYkZmKHNemoAbeu1sprj82uMoRPP9f1auo1XqZv1JT5PyDBzoUHztxyannEAJUJFLZewQLchbYR",
  "key35": "39LHdjbxzNiviTBB3BnNfKsqcVeMSsgBZxtRTvFzXtjiaoexcU3ZM6vQ3y88rquX9nkS7XHee4v5htz9PGHUHFTM",
  "key36": "Kq7X22ceA1RGtYmwzRAPVcPMyBRrxdX4VS8Ri2xpToijk8TPBn6Y49UV1aX6xiyFJk9fupwTN55eGqbAenwdMJF",
  "key37": "2tqnBi9DKiY2nZfHcLbQtvf7aPanvr2EHuxhyX6SFPyEXACw4abQsy28UbnB3araKxgmpjeeBRc36bLjB3R2dJon",
  "key38": "GfXgJs142ixtzm1vPB8yakUTnpYAT65tFXD3rgFmkM8vyQ1zgAi3a8vha8PPZidhhynD24kK39EL2w9J6L8PzEp",
  "key39": "4vBQq4rXBmg1i1t2k97D61K8Na5orDFVwZ2Yv8NgeCL4UTAytUbt4mD8ccvHuLZKsaoKiV8vfnDWBX4YVjvLbCcg",
  "key40": "2TVppTMzZet838se5H5FgpJwy9uUZ7n1TaUtW5oBYYqRti81y3pan8SdokB8JabUaS3spJimi9RsLznX3brZFBhs",
  "key41": "3bL6aerB3VapiKu5vpffmoenMdnDzsMKziwChDjVMfiwnPk9GVBEsDFq6CFFXUPzq2BybTgLiEq6DVB44QKK7xLB",
  "key42": "4mCRjzkN6sWEPX8UXzwd1jQpKVwmwio44W3JLFsU8icp38LYu3LaJPGpK1TW8xQvum9FvenGrdbzTCELKGmv9S3d"
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
