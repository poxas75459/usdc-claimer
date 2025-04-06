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
    "41Eoss9J3qsop9CydE9gwR2ZDTss999wyE3C12R6Q4coaY2A81jG5iRaffRHGBDz8ytGetDTXmVYa5Rd13YbKxvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LboJYbKjT38TMtJJc9jp7j5AZBUK7KKaeXoL9o12WMLSBsacGUQmLtMx7f8iZhgBDq8ZQrqMDZiiA7dUvJhcR8d",
  "key1": "5tsqakhZR6TPGqJGUSoKmLEkwgLprFx8SxmEeCvgWKomqXwUxievxa35DZi3LFUsEBtpANh9j1fxYERtwb9HUGAq",
  "key2": "3Jx5vwHEq77iA5HfPRcYvCMdS3geiU9jzoCgsmrvZE2E4RjQnkzyGXkn1cBdv4UrefL9nm7fL8dz9rZwWpJX9937",
  "key3": "6Bbzpq8Exvi9UGKvJBZ7j7ceJnWvvrRXp2NDVv5uTnPNLTjmyNJzmEns6b9cuELDDiDD6yvoGiZMgNud5HNdiMT",
  "key4": "2PwZGfQ26emqFnhAZuR16cgzRJdvxmsE3cpkveE4siKV5SqULKF8mhSanYASomeVb66NYfRgVxAvRLazo24gCMPT",
  "key5": "4L4C6USz9RZbn7j1JaAudUYqEbDk6xCPkQgy5RXjemrZHqHMzsgsRnsFU1nznTJdzWv5VNgXxqwngkW7VafU1xAu",
  "key6": "pUqih9dWyNm5qPU6S3LwWz4BKnRUUCSJkkuQ1Evbu5yj8iupp4azbBXrevfnpLnafs9rEZoonYDu18uKkvFiBnc",
  "key7": "2dXUaR8StbzhrrD7JdEg79JKSk1ciEua7Q3VcmvHmfiCw2XTDFKfacUiwr5MKcQjrpZs45BVScQWVL4s77t8av4v",
  "key8": "56TRihxSHFDiyrrrMm44tbWSbRzjQq6vHs3vCuN8p6m8diLMtVY34c36XziHk5UGt7hKMJALCZ8xAeDcyapf2kGD",
  "key9": "3rvwGRew1jduWDYHXpxUHXfKDgKu9PqzxrHBGCU7Ls8wdLUyHD3dWaD2Lo58m4253HdH225dqASK4NxCkX9W6pxV",
  "key10": "3NgUHhivjPwRnaV3LNQMHe6jyUjdpJpjLxsHST3gfEqcT7T4YAJttrtGQGc8RugoKsKuV2sNWdmxJQaWYGEsnAxV",
  "key11": "26HWe3cR2j3mW3VmPYzfk54F7wyTpfBthUrHU1tvvzcVot6hsGwW7sLKKhvEJSPHLVXyXiAjkshdMuXzyNXy1PAh",
  "key12": "3PhVPzixguKSqukhi9LgAAqBpxz1eC6ZKrtfDjrT32xxBdrBa2REfpS4psa8TYVH9K2wrV1SHhcTa5SPBuFPEEHS",
  "key13": "5Ma1H5K9zvorfGnF3VvpGZQg2Cj6xdfJ4EQvxr5G6j49bZNMb8JbUjUo9xkcotQCvVQ67bu62JFa1FjmtiHiQbDE",
  "key14": "41BfrkyACqzSkBDuhEYMuUtuU7JrsDTQRYP9fhiWLi2h5esbSGEpyY8e6iF3YMgdbgEXvXKxcyjGE6ydmg3LvfPR",
  "key15": "4q5vWARdMREDa6u8ymyT5NEQ4Xuavkd98E5DGTqHrLpLcodv3CWxmmjE8gJ9fpKM1H1sSPziKEsJGH7SEXweBkcs",
  "key16": "3ShQG8pcF1Z3q66WczTjz3ECMew6P8JFHvACRvtJ8DNvB1b83VLnyjPPAQWMpNaaYdiJJqvR7cuvJqxKN5jmjsA6",
  "key17": "2E1K5i4TnJsrGM6FKKyUj1bG4vPnvYZFf5a5BhUpSER1h3o8LW1DjNBF82yHCGJieeJXyPzC9MM84Pfju9RGyAAJ",
  "key18": "2TL4C7D6Bajs1ijxWi4gcRTATJD6yJziygdm4c1x19wfksNmBEDhRYcHCnwHanzZivXDCH3NTRjZ2CbADfYwtbXE",
  "key19": "4Lte5EYC3n8zH2hfFdQgZDa1wjUrRY1x4pfE1vTVmHf9EVjETVj1VNyXohvjpdM7rkAD735B8rUE6Ltm8WTs6dq6",
  "key20": "5UafZLsTtXAHxP6BHyPg4agf7ryQn5M6WsRuWikKnLM3b7MCictywkeEY2PkxCiAM7wKEgcsJxRB2s3p6Zcd3m7w",
  "key21": "2wkB68yFn4A7ag6SB2rmQg6KDyBZtVspW4WvsWozPYexBSEYoRcrhkT3yX1RDXSLPBoQqVAfCyKSufeRMepBipv3",
  "key22": "2SBRUK7k4dC22RaradoxqKFzCGHXa6VJQ2TxdnmAHADx9V5uUXy8takxuj97jCx2uzEADAi8FW4hiJom8cMP1L6g",
  "key23": "32Z7GuX9aBy91zoRTWBu4q51WENohKHfARWykfJ3eNW8FycCa54sNwbRnjiSSw9UM85YeVxrsGjGqG2r4j3qRX87",
  "key24": "57H6Cdd7QJbzykYAa7NGz4Qvrp2Rqmq3sdyUrMyN1dtHTFpqYUYVMUAjr8FJYNdpRzGToeNHdDBJgByCctxa3Lfe",
  "key25": "3tbUrav66U42koU5atdEHyNG9zsyd6cYWaARnr9ETv3CnVbFDXLdVKN2kFjURZ7gFePpJhSgxRpYgjBJcTHcfFzz",
  "key26": "46EwwgJuhR6sUNZR7gTHkjXXWMmjGQcMwnKLu5hqGrq85UraD8E7kzTtJHY89xeHCo7uLJ6ukxtDxBdeAT4T9wPU",
  "key27": "5YwGR8ZsJM41sbU42du7eVEsgL6CsUrWSweg7FvVm6i2SDRjvFrxDTxEcnU52wCmhqWi9EFD9mEr1FnVRnsFEpEP",
  "key28": "4Zrgh2P2KUFKCLnwys18EYdzr5hF2qqatw4mshcWwLBYo9RrqaEs2tb5kKLijgxks1yYhgF5g3TCk5K5QCZTPKBh",
  "key29": "2drfvARf4mHyuEWYRrujpn6UuxLFj4LxxUjFGewez6SjAZof9v4VJ1AaLbHxanwa4w39NaJ36xQVEvbPHypKzxY2",
  "key30": "2qXXqCsq6QkVHaKYPrAUD49dhBwhT55YpYLaZeoX3mPwpN3T5Ei6mh55GD1vV7Qta8bTCS1w4mFnXGfzmobBd6sW",
  "key31": "4sguJwcXLSfPJXgHuVKfbWY11sKsXAxrh6CsjLYiUPHvpufWxHcH6N1cSSLnb96BGdy8vxA7HoyYhc8ZC3eeD3as",
  "key32": "4GpLF7FntrrLKG1ArqmnexpCG5givrQaL3QqKJCytqc8mZeaQgpD95ZyTZm6njcVVRkrsdVAFLW6CK9Vuam1Bh4h",
  "key33": "5jBJKqgPA3Ao94kd3n7ccXaxpCVoCUY8vqpFXcG2JMG9ip2BnNZ88v89LH4EYcpuiX6iFDKZzNLW9xeuDDjcWHSM",
  "key34": "5Ff7b6JZmP8CMnLuZo5TPDfKc6vcisqba6Do22ktznFLtSuHQ4eKZqN1ZzTAbo7K8QXxm5jR84qcG54nVW2nAJY6",
  "key35": "294KdFHeTGgh73cqErkqKPVRtPj3gLBLouKsaSxxbXiEcvNzG3CrBA1BppTKwYvzLXw4CtAxKHESpfd15uyFN4aU",
  "key36": "63ktVHnJ8yZhkicgToPmREZ6ztFwhasVKeZdd8TDZAdSrPs3pm9XSYw8K9pu9veMkd2t8Rku9t39sw8eSk3tqK81"
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
