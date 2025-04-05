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
    "36Z91sDWUeBhDmw633EUH5RUhMxygv4qQZMduYCtTbH5u2YWx42X7FZx5PiQGcM2SvpxYF3A7MsUoDU7gskwk25W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkLGmY1B9Rb3LCwfViEz1ort1qpXUYWVZ8Knu1hJ5En3XzaS6cFJxtuex2TBFfbK84P8fpuBjZLhAdtjrDfzGdn",
  "key1": "KxGu5VaF3u2xnsFnrvrnf3BtdSYyj8HL8xr5v1DSPLmsCfjSuc6HiJJEFqSPRKVQr1rqKyQgXGMAcPFTnxhVsBD",
  "key2": "3e9ibfP1SfyC6x6ktth3DZ293mmi4948itB6xjwmv1bTczqe7EG4Gttpgp6RtxbqP6j6cUxUPTCXVWJtKgNRhXtc",
  "key3": "2zyUZ3Fdvyrv6Qne1pokUxUJuozhPwgSPcDZCY8ksGrC3gqjUek4WMHKcMyy5fTn9VCArZLAkaPxKpsFPoUPHFhN",
  "key4": "5Lyc2zmjichDE42T14dyJh4dfZXx6GkrTjmD5SbRivHNDQQFU456GtKNu5hscDviVPX4cpQToGZt1rxa7NkD8LMk",
  "key5": "3A9vX6Bec17SvjbhzfvzvyjqCa2cJqnZCwVgrzAeSRzuhCsoTGUZ6vq5hBFChjHFLgWVYSBM8PX3KX5d4HQxvbLW",
  "key6": "3Jvhc678zJ8YPRbfALwa3vKTSbz3pfmhyoRCfBbBVR6DBPjsgFyqXmxibQ5ZW2BAVR1dVBwn8eS7Trgg8xjNE5nm",
  "key7": "3RSvAKL2TYBG2dPQi9zak8ArZwCiy8jXT3UHomo6xKxFfJXDioXsn2hp35BYNJ9AZCzCZzBQ26EqYM4qMH2M9nRQ",
  "key8": "5Bkfn9ETe8ySTwu7b66DvcvTsZsEisqAbF4jDZtE6KvAMG43HntdDMg66c8dxqEHdK396ezqcoQqJnxzDB4iQ2em",
  "key9": "53CDU813vKqQCkfwGfoabKvK1z2SSGUofYqxxbQZqWwjuGqpENAoLNYkUPqM3CJLmDuNz74XXX8Wxm6sLfmxuFW5",
  "key10": "3tpwpkVq67WU9AotcvYCbDTpXDcTFqLTYyx9jDSKCnCny4ygtZd8JFDuPZrs36k8BybZBVmhjF3ab2zxPxWLvTdG",
  "key11": "5wYxNKU9vZRWUoW5t7Yk5r5RuM3MRqkVckszoikxtovtWFr8Y6UBJVtPVTYQe8obt6t6JVuRHjvh5bxex48YQ1TY",
  "key12": "5D557Ewm6QproT8nNnUNjGHXBohkd7v3bi1vRXhdd5NDxbSBDTfzWKvbghA8V4Kd4FN6WH5ZSjLApoHL87d7eUfX",
  "key13": "48qx5ZGHgHbhJhchKJpqKrCqMXPJTdt1Zme336VuQTQX4mMixNxDKHBvbTBET2hatbGHZhi5j8opFxXKadfgCrH5",
  "key14": "2gBshqs7rw6V56RuACjLBG8QPNHeHzqnfbGY87xoRFdoVM2ZMj9Y44sx4JUc4XxPDAugvgZusf6UYnYGsD5aBonb",
  "key15": "3pNh4VkCx3113oeLZripyjQeMa1dvFjGFoCH66xWUwygNjcgH1TD2aQVLYxRtZSScUgHr6wFSLQHqkoqFANX6t6S",
  "key16": "AETknniqcFdzjat9EVzWkUs5ag2xYAWD8rgknRnRaQn1jm4pcjBYjzcUmJErmiGjdYpxPxCaA2APvs4mhWdoFgP",
  "key17": "5XcwbNkQQhMpAgizgJETM5hYrBZf2J7t8m19Hwp2Jwrz4psBLPQQVoQw4U2CvMGRvoNLYv6YNeKzn4QAd1MU9x3v",
  "key18": "5rfiM2y13zu72D9b3zq3fo1zt6MHxeQdFAx7NxUxDhr1xtNva8A38MTyEbsWCTSvUr6GpYv8FDXdKQX9b95YBtqN",
  "key19": "5KuQUFu3VpqVM96FpjNpdNnfX129oKyPms6AZEqUSNKS8ckXQKouR5yv361MCKJTLnt8xzYCpEpmg2fSsU7wCCeP",
  "key20": "5eEnqncuBPtug1BWo7RBbPPQofgBAen6ZJt21oTTR15kzgWLJADnbqZqBLwnvm9C5sUrPBP6aWT1VZ5zXieRWi8h",
  "key21": "3McYMXA7s3VwaEcyPzYbgMFPKsgZaDsygyoYa73Wz4mM4N9tQdbY7xQUAhWsKDjrhsMhbJX7iZ95KhyiwgKRQspt",
  "key22": "5B41DcH1iaZKQUNC5sQp1hrscEf2AywUUXyRiPPK4LVcTdZxQLTuhLXd3LHYG533CZbnyut7Ggp2np54HsYxMtBt",
  "key23": "p2kSwyoCCQpcY3At5q4R4jtbRyh9bez78cn7Ag2bTqQ3UNhWNpgxAL7V5JZkNrSMjtMmzhSaqwqE8JQNSPwZEDs",
  "key24": "NeLGr37GVfuaw1FnhcHcnDE1kthiPP5CgHxEXwfwmqRswyJtLB7MwMnpfppJTF61K1JPJ4493qWYnUTCyEETSQ6",
  "key25": "5nmzmJuerFFBnL7PDXfcqNKn4ddmFDq72nyTUse1tLc4cwK3RYhmLWzjeDLTSXJfUTaSW47HF31Nhj5uUgH2FPMk",
  "key26": "5Uu75Jx7LMWHCbiQCdRLsazmaFSaDhJNNPJpYaq3iEPBPje7jfFqiHDiNBFfwnSxTy4hPgNNAzLVGPbpoPYwqHcX"
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
