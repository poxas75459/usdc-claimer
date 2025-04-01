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
    "5LykHYqyLRkR6oLR4Nj89sJ3SXi1UeiydGduCzXHoum3P1X9duEwSb14jZUU4PRDot9Vxif1GAMLqn5d5Zmb3Qoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dL7qpEyz6dPBzH32sDxhP4wu2GQ8sAcVx1cU7QUiJyAnw7zxK7GgRN24mfJDkLvkakyqTnquZoMXM9A9pEAJ29o",
  "key1": "41zTyXoka2TeARdGD8RidEqraDYZFPUjhimjvz5NS6DejA9qavyFtvHJhsNnsVKVhGACqgdjZwpK2x3R7opV8FfC",
  "key2": "3ea7beTd4J8tqkU5Wzj1thjGSrCYMtqCzX1AHUjoVxzgSpJiCyYamr3RiagHmcaqTFUzLdT76f92C5sUYt9EmCmi",
  "key3": "KC45mZuuM4PqAhyNnwQAtL8NErQn5vTKmQhwcZndo9wSNbuixctcQ6FFoA56gzDcFBcv6D7hG2WeFanotYCPfZa",
  "key4": "2gVGg1SjvX17wE19GSPQx9zgTm7CnD4qY33kPjEeEzYK9TAQrBjThdxmw1eem7NEY7qGnUMjFePYEjfXqNeGyo5W",
  "key5": "5scpQLrwKTSyrAJx38r2Eb4MsNR52YDqmYt9VSMgXfdajHSXMGHLDa4h3JcrQgKLWMgg9T5CyQfSHssMdVpQfcv9",
  "key6": "44stCwqEwk3jawGW8CD2Te7DZoo4R2Z8y5JGshyFsqmJXLQZpN7gHjUnG1EiEoXDGNCTdtkpmiuPbZmKSa6QaWeA",
  "key7": "5VLzgb9ee4LQ2yGcMbFqtypR79hgcZajZ31ik8sSiLu2o6oMdaKYAhwzagwka1a8hhHHk1ukdouZwpeXpSivch1X",
  "key8": "4tax1A5m4zis5X87iJBiNMSMRSHzNBzCyVbCfz2ue3zGdiSLYifyxvh3GXyZJBnEws87j3qos3Gx2TUKGoapHgeM",
  "key9": "3viSW7wi6vBeGpYzfXhCNtRz5RUNZNS1Pt99zCAHzhUZjtYtyr2XMEDvpKgwaKLobiM6eebNicH9caKDVtCX5Ssz",
  "key10": "2pUrcp6CsPD5XdzpVaVCYz6DUkRtjEuccqmskpjJmpqy3GztyHte7ts7DJaNg9w96FZMkz6ecGajP59sP8sBLz7i",
  "key11": "24kvJX7H2RvKimmmusibf5YsqSG7ztHCLwdeUUVQ1LB5U4As8ngREzddtBHQsP9CmVCLmeNXo4KcFn14C9dF86Gn",
  "key12": "3vskWeGVSGkGzHPZgtkNyu8F4vWfFt1Wc7cRrzbATbCwx7uudDw62m6MR12eEa7MpeNPL6YF1wPExExc4gqrMHLe",
  "key13": "4ZeSmf4iT1gS5ToXakvLmqxm9uyR1khowBmmc1eRYD1chTt7gVRiEA7Bs1A1tMeFayops3pCZ7Ac4URCJUsjJ267",
  "key14": "5HeSE94JVyoFRLAQSdJW8mH71a95bCUMEAtWjJ2gY4h7Tac5Wd5xX28Ytxz7aMAcWHskogLTsJbeNJTBA5MKyAhV",
  "key15": "5TmiXeQRrvfgmBjXg3SiyRtbcw4DTBgdpHsGxJzmLeD76AAGLSiPHFxzFgB9s8nJKztWVfaduvdoc4L8parPx3jU",
  "key16": "31ez71m3nAezBDDS9Eo3Ee8vSYa49JdJWMeu1hjPfN4u6yziDhMRhSiGZFHMC9m4ycEjnBjW1Tv9e4SMjMt4rYAQ",
  "key17": "5V5r4nfze3R8VxPbX71YB83LwacEbpfFKoMo18mbUCcvMz378JirKxTAvTX3Xj8cd9pViNB7Kj2fJMd65PkWyEoU",
  "key18": "4MRv1a69dk1DYkFpaMS2nnN3nmR7ctnPrQFkbVQcoNLa9jpatycNUcvwr5nsjN2hREpg6pUvtwoCsX6PgBcHrtvc",
  "key19": "4CaZkk1sJJ6B8E95uN5Q1ZG49QJCiXCFWcMAnsiSFgsYEDk7BkKhFsLT6eAX8K6fdYsuabacdtQSYj9nVpnNEv53",
  "key20": "4uMhpNKBiTQQqNjH5mvSxGwHFqY23dBduKo9DGF7vb6sLFSTGAqjqKZ3r4ecUoqv7zHBGWvjVWoKz9HqyygQXDSe",
  "key21": "4gzxu5fWYFzqt2V8aAfj1S5d7kXzQg7YFADEeuowQmaKCsmyWXN2eNVjheYeJfFwbGJxBmySHZTqtsEBXBtvncQv",
  "key22": "5hvZXKs73wA7TYX9Ly2vLtVStJtSF8oLUfXMi8SNj7QCyj8fiwTCHmbp3VAzwcYBitUyKv6VF1Z8ZqC1tMF1pkpm",
  "key23": "5qgEwtGeUK9SDCkBnXPVY4UEKfAJqtF9gXfBhe9xvFNiFfgH6cfZpTS4aTX4T4YJE6gBBtYfBA5XqXkjzj4VE6cN",
  "key24": "4zgZTPGgKDQ88zGsxtLPTxWNLRBqRvvyBtXH3i7iNRadzuCuqhpNbdJhT8uXKAn9NL8fgjCE6iPvJGgtifemsTo9",
  "key25": "9oDohZznh1dQkV8KzzD62Hjrnx988RtPUt9o2HbVAeQy4UCD11KykyW8b79YZBwXVr5BMbG9k5UpVb47G1QwcoV",
  "key26": "3n1zxGnPiDnJcdx7fa2P2QFHHuJryvNJp9ytXNw9Wkpa2hKy8nmGatktLvWFsdEx3qntAEq4aZ9EGaUoPWDN9jti",
  "key27": "63m8p2x5rDfkiywiRo9k8Brz6YQ2es5arFTgwoZnLkBbp2ibNr3htN3tr7gJ8Fun5oz2rjTxMiifTdBcitPTv4vT",
  "key28": "51vWuumUzA89gN3UFWHxq59a2AR2q1hNadunhFmbx2A8hNuMpgU7HXDWvgLBqdsfGAF3L7x9YFziBpA3jMnKBWeK",
  "key29": "yqGonv58TkbpeSdMHnVsF5xLkiuQYAQc33XJ7MYDCjAApw39LPAZFrhRBxFPQLuLuEgB9KDCxBBLmxsaVgVr5ho",
  "key30": "FvjmiQ2CreLdwpPVkvJ5zatzg8YMCcZPwCCD6t9anFwd5dXUU4ZMbRVTHjirUTTztPWYC5zVxxvgetsKngzLyHS",
  "key31": "4k4QYK62dHpozCzNZ37s4w5hM9Kp2B7s43y8TuD7ckLTvzeAtP9jqqW22H4EH36BvK5ssBQ3TuvdK64o6yv5adhF",
  "key32": "5qbpsHP51hvXxQQLDNf9nRUBX4nfb6amLY3j1biHHBUuMKcKTVF9o1dmRr6PCDFo4qH1wYp6ZLZGzGcBhrnyVhzw",
  "key33": "5J5iNtctjwBzzRkPr1XNMTdBDeLUrW6VT1HKrMtQEQEPzdcAuoJ8wgSogRRr4ttVfo9xfUaSd6Ros4e4dNFGNeCT",
  "key34": "2MiWo7hMNk7ScZSVq9cs11Q43XJoabEKoEQoqwdBveR2qCtMJz5AJcWsvwUGzPwspRfE4rx65k3tRXKH7aZcSPic",
  "key35": "4jcxgdUUo7cZKjgwL29ZZ1Cc6kSUMfbRd1EbP6d8ayKipFfvJyZVN9AjksKF35BSiEQUEhnEniU7vocAAKb8F2hP",
  "key36": "4aTfgL56vKqjt75q94rJ7U1rpf9Miweay5apMm26QE1UBj6p8oaNdgAVjfEhQzpEjSPKP5MshyYcuQWyEdAFv3sJ",
  "key37": "quyvTp8LeW7HTJx9iq9irTu5Luxep4sVvxhQnbR7HFJ66iMPFsGNyrcMtmBNQ26fS66Wg2esvWfgkaNeUqSev2d",
  "key38": "2GkdSE3zqBnvQEqV6tBmVj6arqRNYmoWmXcJGrYfV2CshbEZVGXXS5V9bViexQwyYTayFUAiEbUsrDkRrFWTojYc",
  "key39": "44dpLWkijoJEy1NnaCVdY4C6oRWVaAxYoXz9kyvPJjrRHhcXMAxqEZFGiQojdnAZoAVhaXWg95gWbJoNQ4JE7WL6",
  "key40": "3Vi7BTF8NmFUX2fXt3w8JQGc9VuaqdWukwnXAQN1apuwYLPaACFAyfJVQhhWMBc6KpXpEQtkfjQsULAi7LMNL6ys"
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
