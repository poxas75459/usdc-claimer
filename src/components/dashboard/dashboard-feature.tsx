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
    "4GN6rv2rn7teuDQHPowjJXQg2Aff94KzUtomvzUFvaUYyPgRn9qGseDrgZC3hmp834xPkpgNFSKNTZ5RyKHJv6zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVwS2p6SDQN88vssAfsenknAxtcie3XXKzXTiD6NwhxJkeyihaJvHGvR94tDv5ov8eGiDNuDiiotkpgrGWk5FPW",
  "key1": "5GUDo4rE4PAi5VzGtifKjoEmEuwJPqTDRSngLuqZUqfQU5tMJxrPKUjre9gbKqy2efyoHK6gbAT4wf1qfYpUwLiH",
  "key2": "5sF4L5nXt7Lmzh6jyJ9dkq3YEu6V7bF16fe5is741H6sCmLL5vxUNCp3VRrF3UYZN8FS89mG3T23sFiH7CuD8d1F",
  "key3": "667SodfxXfivXdEvA1yziKztezAvmY5to3n8TPxy2RLLAyFnmzbgbxVhsdbFdiUXK3XkqZyjrYA36SdxPto8cKQt",
  "key4": "4Neb7227mSh3EvKagXwTxA1yCcjCc72CDUyDgQfK1kktD3kWFtFyoTPMyXuNfffGAdB7xmfo57LgVpsqxdbBXtXy",
  "key5": "5sdyvFEesXi3TPYWPwyYBCEYbCSdvdAjm4vEa8mvH7KdahZ8qFKKuWUwm42zHwibtvyAwsoi3EGvzf7SgB1iEw4p",
  "key6": "2ZmsDnf3F9yHZM5iJ7DdkdCgZHkQTsa2Qz2cDjZfKgBF8fkNBkDjEoDKH6FVnd1Z3TNjYn8PgZfQdQ8HK4JWpi2L",
  "key7": "2FefvD76wGVZxM5nzckAsjrXxv8Tuz1fd2xuyohDn4A5kCBiV2AvUjyjdVprrEMwQyEYSJp4d6KinF3Ctw6aQTRP",
  "key8": "3gDuB7hBTqj3bsjskAr2EonZPafoSgfJ8abdho42bVvFiEbqwwKNzgLAQ7LUoZVbV3ckK9QrRQhjTnP6K5yDSyPq",
  "key9": "3J53DQmFvB69SFDtM4Ei2BcDWavatg8wWRbZ3UDjfCggahAsueW7YUz7ayRZafrCpVS6S6s1AvXyPJcYwKVEPAre",
  "key10": "4iWc8TxfTJ7sM8EHxmzhUUZ8XDSFgR2sSuLsYtj5C6oKSgNSKV8MnzGqooDq7vyfRUX2AvsBqm644pNrMEimF69j",
  "key11": "jip7jUpmAUeLDGBcWf7iHw3NYXcaPt2TzMQBdBUN9cA9xVi3bmeRyoedAJC41VyexDn68of4GUntWtV5fcahRdV",
  "key12": "387PKvcxLkgtWdQUyQiac4xCVMUB1cGnoEVsj4K3LG4qTxb88wsxRFz6a5tVXcJgGuPwLV7ozvB3QWe65JXt2co7",
  "key13": "4YLUGBauxtm184a7wcrgrhvkLXQoTAXsJkEKuj8RD8a4wMmT9rT7vbzJykAiNfqJJDJ55tPAQnH8Zkix9CfVj2HU",
  "key14": "3cHqfSs9VfDYHLvA9t2sjYKW2vm5CWXkzDdoe1qmB26fiSHmJ95PVa6qSLKWtK4gMJAijzB6oBqyT5JEkhmQ145J",
  "key15": "2uKyqd6TuaBLcTL6gE5vPmgUrJ3yJGQM87jfNRUrZ4wEn2cQRF5Qypop8FyM1bwaw5fan8XvcbAL91swshEiY17n",
  "key16": "4teNoKNVMZ8CSuybGaVKDXvKZyJvmdgcY4qzrkAtf1Vm8YR7MboPctdFKsu1xPn3EprFZXQza5BQgYqWXQDGVRpj",
  "key17": "4D7GeFCARpwydUnKBYQMaJvdgDyGowiBND3rBdPGzDEqJDK8zgveE7xKkke5Jk8xempr6fRKbAnc9QyKQZkEySxC",
  "key18": "2ZjzYrN1Rs8v48yqo3L7WqJTFhBBPQ3e7SZtUResfy56xC8BQzEFg6QNWoWrMLVEMYm99GB2P16hUyypwXzGBeV7",
  "key19": "2YYYWk8aoJ6fm61js63FBpsGtmw2AYiB4b7uRpuJ6wFBnnqVQrzftja2w4hqJf16KR8BPjPKvBTQ4GQXmd14SqP2",
  "key20": "3h72tBjF3TvYKFQrULLeq8eKk2CppxE3kZTF1Bo1spxbKWvrykFQMkez9Bi6DfCsa7DYy2DmtcuNS1inL71hPH4a",
  "key21": "5wP63WGSfF23vrDzSxVxPBNryQfpEZmKAQ5eq4LE4sVYAvXK93MzHX9YnDoHodDJhJPHnAgaoeupsvL2AZm6REir",
  "key22": "h7tJrvrjmoS1UNZQoHPNEJscUSAK5SLQC2TRQcGNikiVxszDb9JvPichd37bASTAbfj722871PpufunpDiQjWYu",
  "key23": "3X4hTxaqzoHmUjGZEJrq66BJJp6TfFUpJwEvdAtCDKCAnwtCPkchBryDf31QDq2hzdBn8LVRSfd6tMcQ52haE8aV",
  "key24": "58PCzW31sXzja8Yf3bD9PRHNEnftArS1YNxDzRTqDtpphqpFSgdhWtF36fKQreooJZtV7EgZBdoaQ9rJt1vsJbvE",
  "key25": "5HaGxcZuZjfVCEoZM6ytAa1e7t9sHn8z3GX1nc3DpQL89FUQUBUoNbbMG9BsnoncdjmuxqLcunjFyqyM5f4n1Mnq",
  "key26": "URcqBcwwRG6LTw5rSLAqg3egLZ9MuHeJj3EcMSQm1VFgVtQfCKGqEu9TAiE5nE6YVVaYvRzwsj6DMbpfNzQHaSN",
  "key27": "2KyjAF1dXQ9DRcdepexYaftR43R9jRvhx7uibWKqva4zhy9ZkpPNBmfcVs8C66HoAaYcfeW6WHF8X1DYYP42wCEu",
  "key28": "5px4Csxv5PtHek5kviYm3XzK7VvwCUqAxyHMerSiVcHo7qh4W5X3oCr2q5QBB5znGHDEs2o83WaBpFLQoSyBqMWA",
  "key29": "3TzSSVF5XShbM92iGNf3rSo6iFSS6Xi7i7v3WWupSdVyquwSNjCLVyczF7dUmgrts44UAoPpom7UXbX2WuCLX2Se",
  "key30": "xXeJQ2XQ4UhVLeiD7UdK2jcNVk7LZUf24b8gLchNHADqvaqF712zNvXkbPGWosEqhrFk62qJsv4CDHJUzUiu7Ly",
  "key31": "5oKv8r53mC1NhezSbRUJWc1VapA1xw8AFMgLc5CvQVmR7Vj4G7KpWGe3S7vHKeURNwgMdYuvpzjy8WFbXdCoxLgT",
  "key32": "4DNLUtp3UcbuE59WrLLyPM9b8TUWDxzdn77q2Qv5AHC8VrTE2EuhftjQtNupEPWnLa48Ti4CPnk1rgci5qX5rSrF",
  "key33": "56Df3YeJ7rwfAe56bcSkd8ycH8SqvACsH9k5PHU3vEHNoqD5k1Z45Z4ErywCnTCb4pUeU3qbgidpbrvYeZaB1e3E",
  "key34": "qZuoT2p3hkcdBDxfxzRgK57E1XeBpwfYDQbytT4Ed3hcc8fAkgMycN9q9ocK4p4pCqzeE7b8JQyxP8RCwU5VURP",
  "key35": "4Sy8umt1SAXU1LTctfR3Y3K9Kcf25af3gHuEfiW7HRNubCoPEwaM4SwsAMkJHRngv1wDsvGzrHGDGH6UMJhKxwnw",
  "key36": "66Nw2AAVUVjwfFj8769AYcqwJ8Gu6x9negXpKirHhWsoUAcX5yX8VCcc56hNKdgdRpf4Nta587Ag6aKCcDNd7sGE",
  "key37": "3UHxL7PeFjvurL3f9D67mwTUeSs5vqyx9Bt2xYgc6Ragdr2b3wSrjv4xav3oakpEaJ8Q5SYceY64oc7x1DtjhSEq",
  "key38": "22hX52iLbSSuBXQkXHEPPdc2w1Sys5NbYePpKVWrvnRnY2MkTyH4FxfuXVN49a8bdg5TZf22Qq72hiysZchmCfGC",
  "key39": "uWgBerEyikhFr9sga1QSXMGVPqyV3Jt728nm5tHXgYVNvohYQvQ3PxcqvvsUYGZNTHpo28UBEsaAYhhdXpoCTUX"
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
