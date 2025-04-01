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
    "2a7eb3tqzayoTXETxUz51hqP1h5191GzQdD9DNZ6DUsfLkuw8FSzzjKvGj4MusTcTDiAdPThxjTeg6ticdu7Nbsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Fy5oBRkYwXjNpRSVognAdVHKXbZhwbLqbTBr3X6uBvdGtuk9Hmc4K26yZvdGJpH9gwFpdUb6krnfbC4sm6vFmR",
  "key1": "4qUKcivy3JcXo6Htbnc2AFd2Gx5SaLqPcjYGaBbFgQ2R8o6L5qE2yXb9eGJqkCiGYhGhGzAkjXvEQeAJvtyR2DNo",
  "key2": "2HZUu7qnjPa26MimE74kZHtDqtX1dvYy5WdWh9N7MGaAwkRLestnDPEmWdeE5wz8EPqmYiXhfcGCPzAbNw8PfbiP",
  "key3": "jiQWG91HeKDVodgAKRF3jPnkz3CG8AuqoyvfCXDZBjTX4bL6nazwcm8vzFEuaneB6XWcZaQLHAQPmrqWk79Ecwq",
  "key4": "45YzUN3fvQ77i9PwNLatZt4r3juG9Tv4EcFBEewWeYw3Xq4H5VkNv4ya9WDQTnhqFoGRF99CuaxrPcGzeKVrsf5N",
  "key5": "54GpNm11iNE4kHB6V1Smx1TMNh4Urdc6oJUf9ir4JM5brUSveh8jGLxGAYj3goVUyGkiS7eQeRNWzUHbzx3yqvC7",
  "key6": "djV2ZkUChLoNxsgkCNXEmwx4oRh59LDAzvZnLvCqsCK9q7HE3HrftL1zGmyExmZKWbAZgcr2QmvPMqCx4yv3X7S",
  "key7": "dcWgDjmrPU4NBK1vSknrD2GkSaawzxWxrUjf39Va7u319UAYXYQvfSfxFYonS9WGqWTegDyngbWPrvXDbWasS7u",
  "key8": "2e9rAQuV61dZsqicekAzeD67eTd8iMoro237EiappsVTmJJ6SNyosfSR8vqksHbsgMPeSwpD2Attuhe8rYhx2s6K",
  "key9": "4sxHMuYkdnJJDEpMjtjgMCxF5Eo2fquYwLBLDzxnN2ubtEHT3kovzmaNtVxXAnqjVBWLtvLfayHRTeGpzwQfy2TU",
  "key10": "3vvY8eMbJykUmufo8GkNqkiXRs1AREqH3yDfCDeZFM76xSehjdk2bUBy7BA3U6y2aJCL43RVjsGtr5iojBUNWXJe",
  "key11": "4mqjsR5NnDpZvQCgkmRHyP65YDXUuSi34a18rQ1SeW2g9HhoogVGcAMwAVEpH414TWcTAejnky6h19z3RknmYQ29",
  "key12": "46KLvb5bJCJAMcvgTwiMAhtrszWLoxABMZZE6tjggKchXnvyjtFnhWh6pWY8xeMLzTxJJsxNa8kCiVJiTkhM7QSo",
  "key13": "2WQfZaHUvnVpGbaHNwgXGPpcrd1qaSErbCVgf8qjrg3sKy67vZDgChqJxcHcxfGz8LTxaVzaesNazBayRrSkfWFN",
  "key14": "66FW8HVmumRvQxmDjAEiXuHuJTeDbs6WtEqNB9KZJmngwejmEQs29wEnNbMP9FnnxMRBcC6DDo59TWdiUoiaL7yu",
  "key15": "4PSisi7TZtt3q1Rk7mNcy9KpdMQR4DRU5X8nohb5TkAngiE4rKy29Luy4tSFEchGWFmenBXPuKb1xy2LhndmdTWo",
  "key16": "bGgGHbXEBzJMD3ugBBSWz3LLPgbHN3v24dTaCAXwNxLfddQyUFKTSCNNkLDHYq4Y1ZKVcfyJsLayrRzC4xiWdbY",
  "key17": "5eanLAdmUs8XCXbpAbCQAoVTodLqaRb2jNpp8PXnGuM7KUTmdjtVcsmEi1x8AYv6cBcB5hRk8Qi3k8UaEpbLhfSJ",
  "key18": "43DxuzKDDVdJ81Qf1DE7G5bgRE13uCJJMKCfREjdW6xzCJiwMGZo1rBtWVeB68BaMoMJdH2i5F21DcT4NJTkSvbi",
  "key19": "QuJdJRej54Zeo1pdd8Rb38p5fZaXBfaaQYHWtYK8cV2PXJkvGVSpW7Gop9iMC6UU5ziDRZ6cFFpTb59pFRKQN9o",
  "key20": "2bRdMeYCAh5yE8HxfZbei6RDQZwqqdmp814h1edfjmmepvtKdDjAtYMPLx35fv7Whg2JwFPWtDuYhMEL3grNci6v",
  "key21": "3z4Ny2LejWAh6c2bRVDRfn7mvqBw2c9GMXsyTQFtSKcYbJXXPB5RcuRuNHRMB1hL6c9YafExmPCMg3mZUkSSju5",
  "key22": "7wALQamGa3cL7QvdHwMbL4jNFezqDXXqJyGA5jQJ4f9RPBkuxuvKqcumSfip8YddcCvCxXyNU5MDcjpmj15ELxB",
  "key23": "57Rwnp9pgYmWGtChPqnDcdNwjsiWQM2F89C5JRRxpXwKWcjntED61fqn5Qcnp7hUeBA9HJoLwq8dAoy6F2zx2jyK",
  "key24": "RS1h5XnDrpVcZtBQTGSrnGsCgmQPZbzBBVi428A1yAUktXiYtKHVPjnykh8SCu99wD155NVtPctpb2gF9b3n6ZD",
  "key25": "4zStWakWYaxwG7Kn1teaaUxoFbs3EgTTtT7Dz5bH74SsUHKLjtCZZepGxwMiWq2kwhjuxtPo8nc3ZEAPq2Lkznt",
  "key26": "uWdQXUdTs6JS1LfpA42viNVskFch56bTAYeraDcfxg1LqFsY8hWYXLHHg7Bhv9kLwkKCuireVznMKvdBkNzt6td",
  "key27": "4E2D57sXGFnj166KaWmJbDxVennEEhcLN9954haXhxbUkTwxLnuyKD2ckvjJSVZXiFEB2HmiAdwmJAKu4eHLUNfz",
  "key28": "XfZVhWGh4rbbyH5TU3eKCx5iwabSi6v1xKo83JhHU6gKbxxhH5q241fXy7zgu4dmv59bs3m6rZnbfs6D5qyDy4A",
  "key29": "3g75rPuBgVjyv6M191qR9qbi4AgM9jGhBHtHByT7GsJXWw6jwGNZtTXZbkQk9BoFHrsg8L3qVYhsgAL2nTdnp3gJ",
  "key30": "5p86Ls43zZ5YmhmKKZArJgYcEpR57YqhCZsERT5fSi3q83cwove6QfzsobRHQ8s6rY8nkRonhDToAsaSQDy4UjFy",
  "key31": "2twXTcLWYxS39bWNyn2wFgtbcvj1eN1BkHKjay3MHkx8h5tdBXCw2mgmmDFexE7K476261Zf73QSA4nrojWF3aLK",
  "key32": "Ge6Wx561FExNSRSofE3yueZ2F6UhbCbHkjg14idUnEfF3wY6rjY2XYM4M4JZoLnrtpsg9FQiewYLhpuxXsNEoCQ",
  "key33": "XXDhK1XgGatQWgftNgKcxVnyj7XCQ9VdTxDghY3dzDivR8Yy5sxX312drN2M4g3kiJP5mcjJedVGC8mC8oZ6cVK",
  "key34": "4ecGdamh9jsurpRM9RZbeFJyDSw1syirry6qxbdkfHsbFdxVVHnYSZDKAMUJiAM6YnhBwmRJjxDtdtyRk1crX2nX"
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
