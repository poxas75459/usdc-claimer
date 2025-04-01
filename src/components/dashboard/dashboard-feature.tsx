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
    "3SgKMeiUvo4JvZ1Rs5PPymo9yxeD7Vtk9ENmc8Tf95FSXrpTDgvxkMJqNp7jNPmrEk5dmCtg1EBLx6pLYLK1iagy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sh4xPym14PmLRWUdMQjaMWg1DFcUUG4FpJNg2JzwJwskqyixsVFJeZvxuDo51ubXYTew1RayQ6LdhLyK1M8scFE",
  "key1": "bGhuF7WHXTnrRSPRBcE9FeBckwZCz3AjdXAkRWgMpDsWhSAqPVs9wzWGDVsAZTKfLoZSeNGBMjReVvEgBt6axxY",
  "key2": "F4ajhwC54JyKdJrrWctZyL8DmGSk9Rnxq7YZoqG5bQhsttb9pTE9a5b4tfEWFzR7kPd6NLoSNxFVTMpFRVZeKYB",
  "key3": "24TM9WQwj35USMTBPYSjFmHUgoJ4fZEdaNtCa3gMVMKBCpSHgod2GnKaPkMFQQcmvhqaCrnjEWrjeFiirvnCpD1b",
  "key4": "3pYox4GAgQDVy9YmyvbLqWUT8dW4VswMzk2fSgN57Fh6EmmQU2pUNHGbWNdP953YFXWip1qU1gNiVE4Snbj1BG27",
  "key5": "4wDz5uqaJfJad3d6NgPEjfrP4LFBZ1EV7LrL2qhrZyWMTAcGgFH7pwHHnb7go3SCsbNLiHfCNDzZgkaoWyAGy4Na",
  "key6": "5EDRqH6aAYgQVNXeQLM8gGjxwjVe2oMuFFHoxgvtWdP9D2cCujaakiASJMCNy8AmpAFiTw6Yc36WujFMjWmUQLSe",
  "key7": "2RGu7DiaRXcfsjVvAH8QMVAFrPVgR3xUuZMjV9jJwA7X2dFrEu8zjHzVLzA3guNMb13P2h45i7VasRGGdpMuePwa",
  "key8": "26j7WAy4cpsoriRht3j5BAxZeG3upqJTmse7McEcJCdhVQzJcqG319ey7zWLZv5jcB6cK52AdJWg1V3TroHrhyqT",
  "key9": "7i5qU45i2uPrLG8wdzfEAn9BLpym8NV2fifagG2wgRTCtUBfFq2PJWm4AHhLkp4icGTJntCzS34MB94TdytxGP6",
  "key10": "uRnRZ6CQBLfZyFjnRc3XZSFXnsYk8GBXZX3AYfeGtgcEW9JogAQksvq2qHYHVgH8kNeBTVJ7PkrHMVNmgTXpcdL",
  "key11": "5JmoBqbV5mGVCgy5us2BVrFRhGSak48GSuUgWGFX1koNoF91e7y3E3jkNAVex7QMLEC5gdZNtXfQNnk9bmiEFcrx",
  "key12": "iqL3gxtGeZENE41x6MZPFmagZcKBESrEbbZsSQXnX17bbjvV5Yjqrt1iPVpg1PDXr5ruN3oVtxgdgJkrW7aUbPd",
  "key13": "2iGWjBmfrD2xgvVURUVS9hzkkxy77TLM9a7HZi8LomUHKsz1LmxPjCe77fx2ay29cfn2xyuo5hQhUat8nPMvuFLj",
  "key14": "3XtG2LAZEBSootqp3fdDgyLJ4FS2itYPbV16yxadLFgWrx2BReUv5KhT1kJhhgyDTXxzEaLPtvmUXFyo2YJXvHpJ",
  "key15": "HKXxPGxBvMG1rfMTBHpjTAqwt1x3ztZQfP89Vf3VSLkqerzL1KBznvSVXtSoBqdhBv3Yvjt18UKehYCwGgbHtxu",
  "key16": "41GYnX9RTNLKnkh61S6DSP1S1Cng5XdpLm8iRYGMD14DnXjcaBB7RS9Wi2GQghCwKKT6iUEsFQzs3TWfsfjpta5q",
  "key17": "3SCsNiM8mAndTpenBAba1jcPtGQpBpjvxfLJF6Xi14GJ9cMXx4mjZQy2aV7Tdbk49SQakkpapSqgth48Qr4nxSGg",
  "key18": "CVxhKKxiFA9ohK6HkDm85TinZ6PMYqBcEo5zzyLg4nbaU5rCirqCNPQiPaibpN5iDCGE5u9y9fNzkSZ3b6haR3h",
  "key19": "Z7JZRBSyR2bk2m1ptZVUkm5LLALwimkeBTcNpieru2Zw6VFrJ58HLRnDP9w7UA6mKBuFzu6MSR86fs2DkZwstra",
  "key20": "2xSDD3CSXd5txbvNY5ZDx1ocVDhPmYDRgrYDgTzwfY7D4u7tRmzrt4exdmb34cjNJ9sF8iFQyGkTaN1msjPbjM8L",
  "key21": "5HjDb5Daj5bqs3nX4w2hWcALt6NcE8Y2UY5QCCgz4mL2GMK3z7XHmPk9PpEEdSdwBNJR3vzcbbf5fFsdEJotzbGb",
  "key22": "2uMBADMDq2Gi18b6vT3nkFicooSqaPWKyct3bxDaSmKSTPWFyzFoKMt6Ka4tp93AGfgoKURvfDU9pvUpJ7BvFEXG",
  "key23": "359XCEZAzaWdctpazg3aFLKNQU4rJhom9GgLndvSZRaj1yjLhuvi9zLL1rfPszFwvDjhz9qX9cfNzz3oYcTAMEfQ",
  "key24": "sqBsqby8HGPs1jjDywZQHwVNQqfZot7tp1dLD76piyJbeBb3Fx25TS3SPz1fk5bP8EFPA4Hksb7qV7K2AprQ6DR",
  "key25": "4n3Qgte47UWpdW8e6fNu5qTeZ588SV9MTY6vmMSp5appysBsnFetiTVotSWf3WSGK8zbKi9eCHDe2BBY9Qa3QraE",
  "key26": "2eL2VRje3ApKiyEskkaVFuPkXygQidCk27X8MDiJgVGAGFwCQdqLbhDUuFjZSTFFNx2oAkGik3PU35MYW37RTuGE",
  "key27": "2rWgwAxfZb3QWnuAQTus61Y8PF4TST6qeXKkKW8xL9ceWmKFZ1b9DqXjBNNH9UAWCfyEPbMfwAK7EAkvo9kw9tCN",
  "key28": "5xmcnKELEXvbRvFBjM6PPRW4wVuVXJ3zc7A8gguwqcSHj7WAa41hK1oLk67uFyXV6sW7PipDo1xLbVqu1PUCtJ1g",
  "key29": "3Y3796F3bTgaqcN9mgacWPGXimUGz92NwQsexgzLjrJ2AdRujpGHV5eWbXpQN66jbkazHSMqgo486E7KPfWuPLi5",
  "key30": "3ohU7DKUveBmQ8Vnt2hKgZPaKuGCAYr5LHNGKJ7mxnJiuDt1WHg3JnaWAkKcq5YypYUFCrkaNTdwTVnRJ6LpWJ16",
  "key31": "648E67mviL1Xwyeb23VBz14cFJFeFBjWBb4CoEFoqHv4S35BaGyMhTJEm8hHyJotVA37mUo8ijaf6Rkg3FPKjpdN",
  "key32": "2PC2KAxwpiNfkmiVRUusXbtz3LgFuD4rVnZaxLEYAdHb5KaciWBW6RhKWaBZK6QMaGwStWEX56CMt3y6L6eG95cn"
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
