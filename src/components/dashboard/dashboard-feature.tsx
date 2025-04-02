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
    "65WNgrrPQombvKEUxwww6cYHBgFhEshuytLJiY33mt5bXSGKYYm437vHK1epJrA6qtasftVd6fp1Zosrf4tno1qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDFdG2SoJPXfrbXPxVLoXHxGpwj56FahZmDcjK7FgpfaCVApeMvKf8eMxBiyYzwKPEXRstPt3uiADUEDYx3DEG1",
  "key1": "3BvhYpBSJCxAAo16eZTmLLt4iKba7DmZvp2maxFpVDxMGg4KTSUMy1Vtfq8NdCZf3vYpMDJx858t1gKhLxaQhKso",
  "key2": "2LgCmhCP9Pj8c4hipx9A5WQZrcvq1VdCSfFeJxhkAdv59TWMUwZK7TafzcRw6CXk94WGZrzFPbvPKatE5ijwoemx",
  "key3": "4rNRdEfQHDCBHJpeXrj2ghQ8bk9CMSfewt5gdWxepHBJvCsnLbe4mwZH5gHX1vpkQJE3jemGNhB7aWnBRZ5SYmmw",
  "key4": "VKqCxwwba68kNksFMB6yxBXmWnSryLkrkGTmJGDRJRQP67Uj6EmxpfNgr8mMHuHKxNYfSWEoYuh2Za6Rxkxb35t",
  "key5": "62L8YeDoRzsqH1htAxtCtgqhHvX4s1ovfjJcKddaz3j1JM1nSECcUasTLFZBen1impDGCt8sto2E2yyTysobKvrC",
  "key6": "487jinaPRg55emQeHZY4Y1NFbHf1kACkupxmWcH7NDdH8rdnbGmjNR8z8zRo44UnrYF3amyQTNXQhjdPhivot9R2",
  "key7": "tM4BPNkd8nnvR2MRLcSVn2Bud4q1qjDaL2hXRGUZ1VzuqHsZZFnwDWEgh4LY5bjNTmAnNirsHeXYi75PFekSV6h",
  "key8": "4CedgaSfft6K9oyS3jr7Zwjh4gMfYN6NNBc6t3LU8KkDzd24RXd1Kh7zhEhXEnx8JWZnu4jNxpSjKMXJoexLyKWm",
  "key9": "59sPN4fqcUPCDbYWsv6tLRdZMwFbe6ujoiDCVmeXCCK3YULzEiwSkE77xqLJVGRntdHKiQpLxrtM4FaiNX44K3Yi",
  "key10": "4JdHiceGRW3FgLEtXrr69FpLV1xUN6jLq4S2tUEhdN93e8ehBYgB76xdz2qs44Zx8ayiHEFpVL5pYFND69o152HG",
  "key11": "4ixT8gtDuTY5XeUWzLuYyFyDBRLJgtSuaEu5wJ24aSqTKhU5oaRRytqmtWTXLfa9UkzZXBXsCgZaREg3q9tPAKjF",
  "key12": "jTjzFv6Z9MxZ3ULnS5ziBQhtDjLYfyXiJqCHenYnvjAJb14dh7cRBGaJSNkgx7TdPQs7wJG6iSTbFNruVuSY5hp",
  "key13": "5pn6J4Vi8oLYp7WQ2PG6piv6KSKMRMoT6g6rBTZH8SWZXfZtn9mCbFNr8Upcw4x6YynPfbcnkU4EYVXSVnbEvCYx",
  "key14": "2dkiXuYr2jKiBKzTjCM66hoK2p38gW6b4thUyz9pENToezRmexbqY28Lx9MgxTDnaS8ifoi9bQxXezx3mgDwZn7N",
  "key15": "2FZtTHJuqo2yMVATjNcWoAx8RgewvixR16fPCp1rApPZhHBThYzdtFqR31gDDPwbbPqz75a1z9PJDdGtP4mtZs7p",
  "key16": "qgiXsjM6YN349ADCh1hUa2tqGYcY8YtEvgC7Eu7RVvqb5N4i6npBuSBeA4Xwj8qizpzMVMe7zsEkx85hujRrLCM",
  "key17": "5RqeUDHKjG9nKGdyZBkaWE1efAydp5pdT6QNopnW4z213QwodiXURMqAAuaWo3amNhTx4FrUfvzCQB3SZKVwj68G",
  "key18": "27CF9BHYhshA1He2CkZvACAFFs4ygmZsQ6HD367jp94JurzeKjGgkbtZVUVmDub72wHD7AcdBVxy2gNvD1zAmaNb",
  "key19": "9R7Uy3Jho7j8awt8dFUWBCNN6Lv78d8tXornz617Lmme6PXbcuAP8YT4hw18KEnpsHAveTQY8hnWVzbB1hjPrXV",
  "key20": "4yhiGWKPEGwsSoC53Cb9GyqmQwvbs4mFnqCEUy6pjUXxp1SxVYqLaDMFUwG1LMoUUb8QZ6o7Qu9tyEeWZumViLut",
  "key21": "2eg31hLMZBLL9uv23yCjCZaRHGbX3ZLkMZv1nEpGNVJ2aow5Pr1d53APJHrFBkDzTshwHtcztUfDJPnQ3eiKb4mq",
  "key22": "5Wviz5NvN7q4XLVmnAmhF9XWUeNxoxNE1vJywrF39UbEKUsoUGLqnezakdBSMZ6KybojHwTyazU7XASkDAYNqwme",
  "key23": "3RmKP7AzARX5qK2p1FXMy9QjkkHrDqCkSQc4KzMkXHKzZJp1tiNh87JS7Tm6AYKLPwMUBwh7XSMc6syB1pTkJ9Yh",
  "key24": "6HAxs79PdaMQCh2bseTgF6dvVU1BrzVzQ7Twj7zJxvWKNicKTPUe89vrFKRqbLsZcCeME4RWiUUmxq3Y1GThDqf",
  "key25": "2ZpSgXgGWTV9mLfBgn1WiAtrfiZspi3RtAFyLeLJoH2gff4mr2ByBJzpXmRzqGoZnAEMZMYFqchQAf1oQCftrLNS",
  "key26": "2KnJVQjDr8GPkXHdye6d3kPkMi9VLnFjZGhL67ReJpCaCjo7tLTMYSKCdPfd3X8B4bWuXXmUZLkBkjc9SywGr7QM",
  "key27": "gWaWxUqv6ZwWnFa8Tu1xHxvnJz4cP3UJaeMBxXG9SwUe9TLxtLR86XgWEgiiq5CXj5PymL8pPepZYWjRqBZxtdS",
  "key28": "2AxjSxpMg7qQ5sydgZTrwRLno4PZN9C4n6GVcQifdPxiRsEEPqVQcL1ECGcT6QiSeqBHxmpUUX8bfAvHgkhw8aWe",
  "key29": "4PfueuVwaY8t35QktnsykNx148n5FJRVLkrNF4GF9ZyintExsfAu21DpnKvNX1NPxKtet7i2JqAPW6MJbTXbtn6f",
  "key30": "Chxoxgb133usvpXScggVDRNoEekM4VxwnUs44NyK17Aqxq3wPg2oSzFmYfErk35ecoaEiaszi1393NGJbsYT6GE",
  "key31": "2wz3U3CBb5yg9WC6eJMvJCKpfMtQ7HDCb5CVSFM2zisQiW6mn8S9ePiuxdHbLXQCwDWGugGcxBPwMdzLZWuD8t7y",
  "key32": "5nhrRKovHhmsfRdsw9NJKijoqk6yfiUeKVYdPydjqEdyYrMnTTSVJnKiJRi3tvWkRoooqJWqyUFeP66q2LQU7PG4"
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
