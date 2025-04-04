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
    "2V8vXUt2CWJer7HRSNLmcF27pYj8qpzTceyvienWPZmCNh1H7EEDiLkH9TXrAcK2baZrJ5oL3ShZCW1kg1hiyRPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tr1CKdNz2hhCseLczHSdbLz7bvsbKWrVgQuctG59twrStoTjKwunzaPBRVxq7ksN51ZAVFLKQUL9DKiyufZjUA",
  "key1": "52nrJknxWEPqZcSSGwEwFFmmcDtJmsWiMCNMz9NSmDEwwK3itMKAmHz1hTFSTkaHGhXvH8zvNXiNUfWYmUKdU8KH",
  "key2": "FcZVQKr98WTXdMhJ7CtANzXVwDCAerbdXJRa9JE9kMUahUvosRSKnGYiQyttQ9gcJgF8tptvrqAqtEh52is4gvQ",
  "key3": "2pW2DB2f5n87Ugr1NUYzziFwEdJxKb5Ugyi4Mx9qAXggNGguX13hhQZmXAaHqPBJMpnigLdHeEV8zgbmU2fK4ky6",
  "key4": "uHwu5kzdeiHwJnp5R1ZgiwrCDjvRzCfWnDtpKjDTRynwN6hbfRBiGJp29NJhWRnmdMrXfmMSNYXdRX1Secv7q9w",
  "key5": "5xYHKB6g5ZymZVHkEFgdw7acTGMkdVDrDaDgBPDUueFjDqTUzdH7Ny4Ve2Hh2MraCwKayz4T1zqpWtQNmibs9hJn",
  "key6": "D8WAb8RSAViTHASJ6q7WFNM2CAAf8LTXoQiiTkjk2GZ1UPjGT9FtdE7hym5H6eQkuEs4bQnh8nSdyWo9xd2WYYy",
  "key7": "28ZgQpL2sqPuBgCjrVrZH97GxXu9vABNTRqMbHD3ECgtcgf5vcKqdGWwVz3eroFt3K7GVvpa1wDyYDsN1vK4ekeW",
  "key8": "2xziCKth3YhovDaay1pT49G1hDgdU3nKWdtFsCaR6Xi8DMpkoFVGEJieyDJs4nsHRbnVhC7Znu3pfcKCmHtSjjLe",
  "key9": "67e2SSHd4qp4cpesQHEQ8nesPLLg3YS9JztTgxqKYpFhEq4gQzeYTNT2jaf9qDYksJNXDkCjDXruLxxqREY8Yxcu",
  "key10": "4nBsQyFeM6r9TDdphsnpadaHsAAgktJDgMpu4MDmkuPW1P5Mx4PCeHe1dVgQ4vdUsrcqFnL7897SnhhCNEE4R7bm",
  "key11": "5ZHf3wND2BZ2cKo4CW2hSDkjk8L7dbiCMspxtqk9u8f3kVJHHaqr6yjxVEbLyGMdnzKMNBWAxzdK2DoBp8ZDXx7T",
  "key12": "65AiELmrWbpPYGqeACm1htXS8zCeEujFcP5tEasXZJFrvsS4X297P4teTr9nEmmeQHvrPjwURVpQdLFZ9Ua9fgeD",
  "key13": "2BSQPGGRJKthibpS3NWgDa5tVUQHizvAKcXwpGhNNiVvGBjxqUBZcYDFxJQ83PL7NtgKsWSD3mHrD9GopwuPRT3M",
  "key14": "8rbmWgUMmBVJBNsecht52Tj37rrv135mRcWWTKo5qvUHwsfiQYyooeDUqdVgqtLY4fGdYkGy3Wik5boA43gsv66",
  "key15": "5FW81d7rVuDhQCu2ZkaCbdi37SCzyFsUwE4xZfSKcNVnEDZrfKCS7Pi999yykQ4s3N1sjpkEfZoFSvNjrrzXZ7rW",
  "key16": "3v4ojzLyMzhqfVi2mqfD7R4P7PsmYB963PDa1U1mY3H8cAGVLq5GJGJYNj1uiAMQ34bhXNdMhuv5PUXUiE6jiY8k",
  "key17": "3MKhv9XH3ZoJgHkRNNCu7oNRAokz4g3KjzqHpWoRhTZVxbzEzx2WWF5UP8qzJxCddZEDzpgyHp5RF71p7xPiMefh",
  "key18": "37EkcNJJpnssZJdz53cksuBZ6pnoSPRiprU774VuHfTUpWELjbwMjheYSdLmSdPgwAqeV4tFL1oSJekSbWMcKCsK",
  "key19": "4d9VyGeHAevnSxFbCY1HpuQ6HDoYTuNjvcb1XTWc6xrkLiBgEjfUk5viUYmnBXxy2b7W7naX1TtUEihAR2kRUGKJ",
  "key20": "52mzPhbxJUpeNwmn2h5aeTpLCMMwbkaKEfoT3zt5tMTmuEw7v8acXqHj8bJce2381HJVo1buxYEJUzkBFhRFkEow",
  "key21": "4SpkdZVSdEa1fc5nDYyVNEtpY5ngdLJJiDztqy5oxkU3Wdnz4wugvt9gXQeqZgZHjSyDr1Ppmw5eVtChZfzQjN7V",
  "key22": "426RdzuKYW7hzqKpDNqnuxwJ2nUf8UQBKQ9TaEgqTN3s6Za3bVxfu3pT481vGfM33m7Fo8W2SAJxki4a2fGgKP2u",
  "key23": "5R2CTgLL6tXBfKv8HqGkAoLMGrx6nG8XneGitPyKTf8ymPs3pnGVWy8d46t9qnNh7wYk153iNejG948k1oUhA6gu",
  "key24": "5828tmVSGYiBvdeMCV6p923QetM1qiu24Ru1KLn6AYYAcsT2BKw24TRyNVXsu7uES2B3KCkEEmuvwu9SQqLKNe3j",
  "key25": "5zK3trNwGA2uhxLyLCmGhEfHYFTds65M1mKMNTGsWgyzod4a33TAQQaqCZSeypWjhWAEb75gMqoqB9DzQ1wUQYXZ",
  "key26": "u5Wba51QPc3eTRzgd34HJdQ9etGR9s1shW5SgmENbiwR8rPmbB9YG2mjp6UrHXnwne9PYETWRraSfFmidQsf7u7",
  "key27": "2tphmTdWbQ7bECMFB6HG1UZHM6ytrsTj7czN5KWttNUzkCEVq22k2FgS8R51aNy3Ke7PmBtT5GpmacFHfk9yHAGD",
  "key28": "5tRUoiAjK5837jvRVgCzBKkCbGmPCskfLyMbbCpRAoxbNcJU5Q9Zfy93c9MkMxBruPZHYQYccpbtVc54ddDN65N",
  "key29": "2PWvBji9UCTQiPbse1kmeg2qZoCeuUys7gvhexrRGmygepEnV13sFHgeTuTMeqzbgWW7LSHyu4nXw7C3vibqhc4q",
  "key30": "KKTzn5qkLJhu3keqHMdRUR9Pv1Es4tE2k3EstAyGbGce1r5RdASxPJchAQuKkeehjvxy3yqeR35afTTtXrRVCRN",
  "key31": "3icrQ2W7qQGCjpw7TTrXAHytTAe5g1XLob5cS4vWkZ5Z3XNsfuHyHLJCKauJiQGcsFgbzSR34ffXKEokQrKFZrC1",
  "key32": "4DobhHbAResusa8FnytcffHTG54hcymRvySEqe9NexnKV13g7vwhdUfLDb9MXgNGE1oouwjg8yhgbRwuCdZSzp22",
  "key33": "5CFYRJU6pBVrJu2KSsLnPMAzizbf54yPKMpkwbZBR4xT4isznn3wXrtAusrCLTHMUJzWFes2ynqvYqvYdpGdySjQ",
  "key34": "4gnx6WbGeA1dLidSgM8h44Qu45P2ySdtJyZjJihZc8RDF119obogkSQHZq2XV5aYZiTQfSRURc2QNLNnLg1ndgVB",
  "key35": "2tKZ8FzrbmPrjZ2qf8Vy61AXj8UsCexvSwJZ8kZpCpGL3VtshaQdDTiP7SkwvxjRiAmCRTu7aAjPu8e1UPZaWXRm",
  "key36": "5iBPgb74RKFXtZ7A4VarbSKGkz93sGZo8yrcnMtW2WNZdqtjKYt8hssUQgMVekHH89mfe3EMJk9w2gvDJPD7du21",
  "key37": "4yPmxvW9kLxRWRwG1FV3pS33o3VCPb8tpsGTjqmUjipSgy9z34fosYeHFjjEeJ5UCYNMwcBrNsgXfN6TunmhzBNs",
  "key38": "3hfGR29khcbX9azasKzBozzqjyWHUpm5SAshLy2QeCvUQzFC9Hn1oFuqZmstnpMBQncKPNAio5LVj3AYz9JXrFyW",
  "key39": "BY4Da18djBp55i66bRgmpmyeDKLM3mdYjGXDKPst27p5rABYuirsoYT8pN1CsYDrtUyUeSmCHCMEfnNSq5Q4sgp",
  "key40": "hz3etXXKxX3rd6KnGHpu5wsDmdXkDB7SJD2ceef1zMGfEUbKy1bH711Zbo2cBW2criUdPhqKpmNPnThV5rFqKRm",
  "key41": "fDGWYdUHRsV5cQHq33pbGhrTJ2VmiumZhnRVLM61qQNKCFearAs7dr1bpcpgcymhbYmSP6f4nU9Xpeocn1rWqMU",
  "key42": "RyLp6JgVaa49KTFE4ZAXsxPGTQKvmx1uenBJNA1n6HnXLMUfMu7xDdQJ3iFLvRKnfqEMzSFYBJAqnauC1m6Bddz",
  "key43": "4dyyW48PsrSmwKDwBey4UDQjrcq69zUfFBQZ5aRAotunthj8TrXwdrXpg3u8mUNoH34z5nyWvmfENW1GM2G2U8p5",
  "key44": "46nDmAX8mXwp99xHpiobZUyNQfcypAbBkGvQnX7A4cBJqfLmhAPQ6dJvnkkEwHDBjto2avieojV5ENh7EvsuBCxW",
  "key45": "d8aDbtB3Ms4A1QsLpnLSvzn9TgbxDTn81rdSJpnMX7kVx2FFycBVa76gL6YCuV46gxD7ZC5WeCHEWrANidrg9oc",
  "key46": "2dCo1FFQG3BJwEtJZwJJ5wDnG33ryn3AHhb9QChVKUzvLxyursnpHPhyqwHoa6ooE56kfk2ARJCC23dXxXtAyZvN",
  "key47": "4yiWTvPdC4wGDaVBFZumjWRaCWdzdrZGQa3gCcAMFmU5KGkJvjRWvvScDsyqffRRs9sCwiPKYYgYxPwzSeVabtvF",
  "key48": "5zKGCQZnDZuX9nKNbTL2ZhhcGwah7bUESvbmHzVd8RU7cPcGHvP2BUJ7jTJwibM7iWizMEADPvEyDANmnkmfA7F6",
  "key49": "3VBH43erktg1CTPNWFhtqEq5uJq4CRMk1hW4h72R5KmPGZ5qAf8g2Tn8xxQVeXnBctex5X5MXDkN7FtE6vDoSCFm"
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
