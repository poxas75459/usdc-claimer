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
    "63ktfhmYyQDMW6ZsvnZNj62BcCZidetfi4FJUF9bn2ydNDbW8YCc5bPGu7ZjrBTkTnrGFAqBch6DxpuiQnZxPSJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EypvoCoWkA358MjaEcptt8Cc5yFXFd5Kd6Kgs15FzJmgghaKNQPeo2QqAaQAmTLqyAVFc2hEUx17hMRpzUH392M",
  "key1": "4fg7Yq36SM8MAiRD1fusV5GivR6Xjks42H1ttQ463fPZGfREjFNjvGbN9HtEDizNjCWLbtZ43REWF8p8dSH1BktX",
  "key2": "29s4DJbD5PYCqwFoEnhXGjYxRY1nzm5GbbSbFvZ4FZyzGZ5C7k5QbXZtknV5VhTHp37fzypVn3jfafL4Gf1qH2By",
  "key3": "47RyDTV7u4Rx9RNM5TkcpwFRguKtKpLg41Luswzy3918QYdH6rkXYfKTabuf9AhUTforirwrvbmWZpVQPy8kdnY2",
  "key4": "42xmaCnAemNqKPEphrPT7L2RzQMLZ2N1s4Wipo8HRH65DX7kgpp2nT48MuP2uFpo8ozHuMHHgoFZFVngGsrrRPN9",
  "key5": "1iHkeyY9AkwcaELKwmo6fgQvdhPbpHtWpFCtRfDSuWF92MwkPzYYEbphxTeXVqhSkYVXRAYqLjpG4LZ68jbbvtx",
  "key6": "3ydjis1YfQGCvVH2xi5G2D4sYTgiLFp5LfaSJ6MNM6rGgwqEF9i6MpbsmDBP7meGuRoNH9YR14J7kHCji3ZMkeXx",
  "key7": "26NGKg64DvkS9hjmGSp8vPbKcLZJWhiGwU7MBLGpiukNrrDt5BDxNwpL415t1yvPsZbvUPZLyW6FphG96FxgQ3rU",
  "key8": "CnGBduAcGBeP29z7grGZ4rnad4UGwN5tBacF6BmybXpMaE3qCYh3qt7boWauegzimuX2W7SJ4qEYDGRnNByXapS",
  "key9": "3iYHqgjdCEttgZoejGeMniCmVhgCdkG6Kkts1X9W5XahECJmbEhtGEVZ6EreKk84P6QERKzh2N3sax16Gzp6JBXL",
  "key10": "5UaAutkmmSfPqVyGHgfi3669X26tiBAqFX5Q69RAYzVMb8YDLBcHXATZZ2YMG9NwL5unkZ6KQJUFuxV7KuRqAjWP",
  "key11": "2NCu4oU8FcAkP7ftMUm4YYYdQ7XaPYGbz98Xu3Xq1HtvHAKmR8AHDs2F3ZhhUneVmVSYujZ4dgnryoMTJvwpcgE4",
  "key12": "5zzJwdomofX9qEXjNSbwxZKQncXnnN4gKu7VpqfctapJMNacveFWpcCim6EzemZ1FhW877HYXdD2EoPiW2br3wuq",
  "key13": "mM1kAKdnUBSJJ6HuR33KyWQSfmE97BPa1LLFmgWp5nGRv41pDUzaAkWgkovieew1sX8SuatumqXxUwaZ6eZDV6p",
  "key14": "2BnCCmmSZb2H2Wri51U8WXNteGUX1YSgg9eNesNqKZgyvD8VLwkeMwB6iNnazkWCQx5o2otnZ65XSes73VxhmZFA",
  "key15": "2RNyTo62kGzJidrpiuFHnaRks5HSpugkvuFhruSEaY5jmX49d2sDbsQu6AYoMWvHfr6RSQNaYj9x1Ga9PWEWPSHC",
  "key16": "5Lq4xWEe8WkkEsxYdQXvF5etNL5s4CotTB9uY456GRJ4o85L1vj28s4cMZCHo7Pimm3N2vZzz3Nj3JTuv7KptESS",
  "key17": "UQ1MjKhYX5XWfrL6JztP9XfsZggTTaofPfQBw4R4wpMXuucAr5PyMw2PrdaXUM6oURzjMUGzVZjaBPqesNwvVL7",
  "key18": "2jgzM5skTfM6XtngVk1Zukqr54ywPD6d14zS2ePjnGUWPAkJkKpR55N4f1d31MvVC216mPv9gdkgecrLW1JzMcvf",
  "key19": "64QVzWAW6fVcz2AfAjTR2UE8JARfKfPLufrDkyQHV5CAe88TR8M8HqYMR5KpBUgWXAxNHLoAyiw8KuNBtQg4bs1G",
  "key20": "2wcBKB87pUFH97WUc5hKE9VT5viYgfCXDxv6JSM1dVeDrrWEGetLuLdyt2c2ewomrz3iXhoR5hQRv3M2qhrea4bo",
  "key21": "2FmS9nqJJehXM1MZxVrNNvjEcYuxy9Rd5bMUzTffSjRWGk4PEQRU61BLNEPUyGjmL4U36ZJNMtFK4MvdhY2c89oV",
  "key22": "5X53bePRJMjfbWTLNmFN1M1bPftskUPDv8DCy3iwqWYLy7qznh5eDKaa7hEeYvy56xioU4d93z8igczZQ2X1fZ45",
  "key23": "54dkcvEkbsc8HKxC1VkMS9ViahU8TukicbbENhMuUQ4n4yudLncCHUMafKwWFuPDh2gKt7TfDoa377Xz6ZfjEZD8",
  "key24": "4iD4CSwEtd5razWDqz3xsctmRPR939m3Y5XgMVcPP4cf8YZm4g7iQBJ4V3kNkk9bSR8FA8kQuhmtDtujeBUXMjtA",
  "key25": "VC5uDk35bjS9NZ7oNBSpfGW1uYinzyMuyB3ctZeisH2GwMZCur629m3vqg2SrGkBEuz9qg1sBCFpDMu821XrKRJ",
  "key26": "DxdToRAeM8DQpA72DQVEzypT6RMGv3mkkN2RQSuuUmkA7aLoZY5ct2VpCzZhQij6MxrUNquBoRdGHGviEtdKSMH",
  "key27": "7trjUWzqMbRo71YKdjk19XRif7jpHAsKBpA6wjNhLES19cSWM6Qu4AXgF1B9PiYS6mGyeXvqZ3a3mTwzgE7QXv8",
  "key28": "4EwrSbYmDfsvtkgGCRh2Xi5nnjHxJ32cU8eciyg6bBABokQxCxpyrEE369CB7S5rhWtJv2DgTcaDHJWcpfM5a4rZ",
  "key29": "4hSDHGdDTZhvdaECimLftp9QRUaCqGD1rJ82MHEgyjWUUqspwHXyQHTARsXjW8ks55GgQLveGthcLhpGxMgob4xs",
  "key30": "2oQE96BAKA9835SpAMWDwgTmmML8X4uN4hcP3ZQYv532eRkYxFhmsZWpkYw1oFm5jgxy2hzkGpviTDfvy6BrAzpV",
  "key31": "5e4gPh7PWSkhSa4ffXUWimWwfsdBReSKC1KGsyVfwCbXeZMoAAfedjAaMV8sCLJrzXjBRH9xVBGLxKgYw6yNhR1w",
  "key32": "5eeu7HPzJ1xcu22aVo9Ru5pqD1ZBM7ihfsNgR8AfBX1XLgrAULAPLSK68yNqnPNYfsyceJ9YKzg9FdaKZt16r2LT",
  "key33": "25r2fizKcYnD4oEkxjTXPmDuagqp5Zt4Ashzxzu9fQABqYJxtz6gTLjwe9ETUbXYRR3VVHLHjQ4HVGNF9SPia9B2"
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
