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
    "38K27EGAZ8akxTCpHHh1ZGU3GwFi6rtNbrK2ciGahvnUwhB9RsEfKvoipBNMa4M9iYd1VUuyaZXMY7CXppuSqis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2KJBCH215D4JPTd76c3k3VQMV4CLXD15zvecixiZLG83sAWw6Qf6MKCmp7uMRxkHoJR74wXa2hRyowAqmoVHx",
  "key1": "4GvzLWeGu8VU1V42AWaq6cCakHZsf6mLqVq3TMJdm1JSGHVk7pQLXrTDVWG9MPjsrQvsjBebw7Dkti8i3pWgth7Q",
  "key2": "3NicYuWS24atJjgJeVVpatzutxRMmiknvj5oaFLxuqUL2G9GjV3absH77Ju2KYhzCvcBnYyjxkEju8dLLikKTPTA",
  "key3": "4BsqzAKp4U8t7veesarfhNw2TucMhzd45Wbt1ry52LBgetVAUHEMrCXRrwpQeW5qvtfRKCdhSc7fU5DjS6UccsVm",
  "key4": "2dqwjHzh46vchGwsCTru3ZnFocsf91tTPG6T5cmESSfzTGuEMWTUcVmKq8HPGzwpX1krK2vjZC7tG92ENMXfJhib",
  "key5": "5Q3qcErt852QSdxt4CY13gkzgu3bd7cG492yHtruXWEZxvmJwsVfdrCsCzbndhTQoTpfPGtpVK2zBonwtUzncC3Z",
  "key6": "5Y5BJFFej2ew3GpdL2dtzvFWoQpww4MVtmVkMz9yGFPh81CsNDYNSXwvMsGEhd7pEbUVnqLuep3DJ2cRiZGvJs6T",
  "key7": "3JvJaef1VhR7VVrQYcymoPMm5ajcLj23s7khniy1fKfR5tjeaianfFjpkQe68mpmJ2xXWLnAbAFoSgwAcqKWtxmx",
  "key8": "3jYpvmru1QHHVnZbQdXPRdNXZPxPG22rFN8y6xxHXfJNtN1vy7haKErXoQD4LkvMhFtn1m49aBdGh63GXJu2PSL5",
  "key9": "2MqpqLNirE5rPfmJF6bDm1cAVZb9Woci36QSt7KTKGuqqBZrkAe33tVQ9v9nab7LeroCKxaJoUhpcfTY28fyZyZK",
  "key10": "5aSLVSVkddtMuy2dxZdrwmCuwb8FfRzRQJ2M6rfBrLpZPHNZCgRHTNHDvAdFC4qro3LPTmLAp9ZyB8pe56RvjgkK",
  "key11": "f6NH54GWYnoqrNK3ixUb4KKn6WnwVdPTGMedjeqHjYg4rMmEbG7igbfuKmv67UNtJ7P9E7cqd9JnJWBqwTG8j8F",
  "key12": "5SBqvNjtbFELweqZAezLVX7e1Bpqb7VWTVAP8Dqj16u9wbB75fPvYmJhBQtCCaC6JaF8Re9EqfjEfegV3eKg1zaM",
  "key13": "2o17Z24SA9NysKkzZ6eqVo2nwErJ23C8gFenD3xTb9RADWCQNrc1fpnB4T5TKBxQnEtbLw2vXR6Hd96tq2vcG3ge",
  "key14": "3g27QxLuv8ptuLfZrx6jwNDa4EWo97fTJbg7nxLRrjubvGp13RZ6obvkQ9CcN8MoDYSTi4MXAN1KdW5UP3SUxLdn",
  "key15": "4rCTX6LUfAoqFi9DgtSugZ2eZf71g5J2QWLJJk59vz72f7QmKwNxfZT34RBZRBLzmVcXcxyTpM4F1UgRZJdbUVAd",
  "key16": "4VG88oR71DkzVb4173iVstvJppiNdpSBRZN7i66Ew5wweYv1Rc6y8eX84DfogYCSd6qpEgdCE2C1FLxb9Nheuq2T",
  "key17": "2sDCEjRLuurtpsPSKBsqKVYvXrLw8C7vvXUL6QMYKSox2xAqmeUkaMtBEBZVxwM95RvRdbjZ4bKgjqExL6vgHryh",
  "key18": "5GhEdSGXPojvqhttTL4bK1egVkKYtFbsui6z6K1ZHMVhSgKCJ6Vj4pCyC6DgBKAwP6RmAf2zRt1uHW1ZAS7VLYAW",
  "key19": "5zRoAcyzEWKVQU8EHABGn14pBgiPxJWwtQ1R2Zba4MRuNzKouSssvDX3Mx7a7ibapogKR4JauUwUaxU9xmg8XwHP",
  "key20": "5RunsseifypGipYrLY3FuFtdNfVTWg1ei9CnS6oNuQVUHiGDeEbiezTyurKJV7AcM3pPiezfFRnbrMHdkv95WgG4",
  "key21": "Ju3ToKqEVVbXeramxFQKs9uVTaDMNw97Gfq8M9PPNjk63RArmSejJ1kiMEA5CeDY1vE4ETseTthtBrwhLuF4KTv",
  "key22": "5ENogZfJKden71kHdeqtKUVsH6J88FEn5SRTuJAv36RhfYRjLAePsQXCr7CHw89j9uPoGc57pb72NMRm8KWsE9J3",
  "key23": "2b7hYagGdEeCvzUtzooFLiHFcxcCdMYuGiZLnPeCb9j1RP9VBGvzHcxVfAxFHjbTa9ivDyZwjXcvhKM6HV6RNvS8",
  "key24": "4EmYfDs2iFkDQFWzLFXZ43LFBxhySXZTrAKcaYikQiY9muspHZ8zJS49SVTUtdEXsDFiHxNySXq6QYYrhTSn8M3S",
  "key25": "M6cgh5thBqVTnj66r9Fic5uMPPpRn5MeHi9AvtWQ3tp31Yor5W6AamxynpApCmec4MGkp5HCYE9h1Jss79vNdFc",
  "key26": "452LyUPB9auZmZyGL9WaUPXgf3tVfZH3rYWjvL4YpGCEqVnpLdTAHPe5yNNXBn8dG2XMfkFCveFDsXzf63JNXMz",
  "key27": "26gZe6sft77ysJygdF7zGpY7zMdcHXMdW785zNvNo5cghgnqidLQQCmSFrw6wo8TBcm9EBUrR7QEE6bAGrRnkWJr",
  "key28": "3ZyB38KAtrQksJ8dkDLatMhacBn2QMpRdQAaTsPHh6x9R5BPJYRW7i5x6CnkkkkmEAeFBozq9MvRvM1epcveTSaY",
  "key29": "4Sjjf9mv4vc3AHt6vK7hCaxHquRwJ7YpCQGUqSgbpZYgQa47pzfVDjK9kYj9oFnhmz5L4XnRemhkH1g11aeJhh5s",
  "key30": "61n79mE1GKK7cAAt27gj6qNHF8EB4q9scRc5cLbM3m9ZsfG8FcmrQAKHgX4dQvKvkmwPEBnvWWeTqRWx5P2x9d1b",
  "key31": "5FLquK3d45tPNSbTFyrAuac6HtNeSDFqjzFkTCzUYzMMKCWqragqX1ysg6nrU3GoiPN93GK5AgRZ342qmEz8qm7x",
  "key32": "5c32Qq5agY9373QtaRuDS7oSzG86NDj3z2kEkD5Q1Te5NdC5j7STcTwGGGhwZus3B3SN7Zddt8RqtPS9gnqR8cbi",
  "key33": "3xEZ3iX9Qhx5DMoEycGjgu49XBtTRBEa46dxaiAkmf7V9n21TyAjTKscE8AGym82waGm6m4jm4mUSauEonh8ukxV",
  "key34": "5kwK9aUW7pVeGq9VKMmYVJoa5Kmb2isfrj9EXgtLf1m58yXac7PoV7MHzxcLGMMfmsiUAvXp8q2q4PkttQKSUo1x",
  "key35": "3oSbk8Ni1wUyAG9tpCsmwm4nfVhudxeoYhhVqU2F5AYFMRSHWXGiW8k1QHfSMhCttXwWACxuNx59cfffbuuKboyM"
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
