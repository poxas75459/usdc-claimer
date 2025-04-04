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
    "3QDqsTJUxVzWegknjfv3cS9nkCbjrjJx8A8Bhb5YoewEhFQPVS98yR5LGfFq2Le7jJAdBQbQ2NvVaDj2fM3WbUjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36hfS7HKs3XMYD2RRPPx7z4c3aZf2MkpHRw27153Kf3oANFT3vUaUm13sgX3bxHtoB4oNCDqaJWonLKV8xivKuaq",
  "key1": "3RCFpXpYTLt6Mo5CLEVoQjeAV7EkEbd3JaWJMcaKoFLRnfFkkq27qej5PpBqUV8qw79GrGMTB9UZjcBCguGKX1Lg",
  "key2": "5KqcAVjv4oq3NcNvcL18wYUPLMYaQ1eN6mfCWHVVuWfArJEoV2286oPvXcsYppQLdyGxC4kQqjEzgN8oewPL1Da5",
  "key3": "55yPqcWreXM15jxguDQ6NQwJ5TUqrNwThki7Ci4asZG3xWJcUDGHbZDPdCx6p4Rcg4SvUak2BZ5YdpUjaTBorzMM",
  "key4": "2LqE4BBARFJgCsWKywHmKRshR4tWYnQ7q5EcSpouSG9MRT8hyXqfMVBKqqoDuaK2RAfhikNQA7LqDmDmniKa1KTt",
  "key5": "2AVZSuoBJVUUYKdG34TQJ9N7ey7NsB6TshAVFKuuDBLX1QEFHJ6SCGPWRp2jGQ5iSnEejtXo7m42jLShQ9jgFAJc",
  "key6": "2v68EaCeJAXvmKjYVxu1fcRbBrdJPertjhprjgrrHvp6VYXvvQSLJa2VyQEHKdk6XjERATB6dG3wZ68ozKdTt21r",
  "key7": "XNbqDM9Lw8f3uZjxmviqo57fkK599ZDDmMh2BbFWvQpm54r9uduGD1JwkEUrifvtVgJSap8nAUM82PUbSCqAHUz",
  "key8": "489XNuh3YhwwvamA5EjBKDALTGp5kUPShoBpRU24PEQbbTkyThPmJTdfM2msP2xyTf6bpRC5Cg7U6KvfsE2WrJem",
  "key9": "5ciWWASsSMXR9XJsKrKNnaVkhtPvaJwizmp4UYzKyqm2nfMkyA2hWUTjhht2HGHzGwQVrNewQw9CXo8rXXC2YVib",
  "key10": "2qMMiwys9yY3cifhD93NSAoipcU9gF4g8sEUSXJbhHya5rGR8SqvMJLZqucjZd3EwMthGsLSmx79FMKwWH7QCaR2",
  "key11": "5JnqTxjmACEsCBoNThTg9M8AJEVYUWrQpvz9yUuwkgRPQiA5qcgMFVVP9jSy3Hdc3on4vcJkNUTh1hNq4x8fTjeB",
  "key12": "4V1Z2z9XTPMXipEkDhcHtMEe4NsUKrPZCL7PJ4kg2Db2rtp39AZbuSastyaAp8SREzZwFBTTose8N1pE8h6oj9ch",
  "key13": "Tvs87PBQaQRNc3fnoyofKL5NCXRmDtWfDiWztvrH3tErNaB3MwZVHZhc21bZvENLSPtik4tUr1ds4msZkcYAQvq",
  "key14": "5X4vRtS4pexAhqgoc5NUoon6ejbVk6i4oB1hpYuYbN6DXdqUun5oe8eFj7N1GwBM5R4qjrFCFNXBR6UXJTd237Pn",
  "key15": "xUizwzbwKQjxm82eaoe6RV5xMecQYc6g8o9zQfFYk6LLc75Cp86NXTiKhiebRVpwkzTkzhMtaiam7fA8gngYCti",
  "key16": "28gH2Z1zWQk961D4txWUcTwFFbXrJz7rsS4mtYQp2kSE9xz62guqD857ax7ihWR5gPp86kMoCyzMhQgukECXQYfH",
  "key17": "5DgTE4rTsZ5e2uR2Mz8QMxNg476YpATYb9uVAhgxEWQgPCriQWwrybeziTvcuSYy8mqQ7uuzWNnhv7UNnKGgxeLQ",
  "key18": "2Gky6PosBcL2zF2DZadGhxH7otRFhrrm2uLCSXdABDHuViqHfDm5Hsbahk7r2x3pxP9bfbNGGRimzzGtYdgDDaw7",
  "key19": "4m4qr74hesz7AMGSaj1Ki1ihWeUEUB1E66orZ8pcfei9uW55YapzCKGR5D19LijFioVFXPm1eSAgpXqTEuM8oYcQ",
  "key20": "29Z4tNCEao1qcFPnjH2C3tuQU3LxRTHGb2chYNhtgMBmksVcy47TfdmqiJxkigbNW6hQvGrRc25gnoD42Wj5Ldn5",
  "key21": "5wYe8yCBdZ8tDs4LqXnb2HVs1JC7X3Eoj1MRdna9jtqkgtmadJm8CejgT921VxDb7NXN7SWGMPbJ7QbP1npbPLGF",
  "key22": "4Xf8EEJqbm6zrcwrrFAUQbPkftfcojafXoPMELGeneSDwakCG6BhfekwRLNENLWsxSDdbPSepGNoFsaNkE7Pammd",
  "key23": "4AtfNyqCpkoKFAfJatgNACjNpLSH5ELUF8uTx4a1g4NKYd9uWF3dfoxX9uGE8Y7aGT8B37SNXhB9MQMuRr9pqez",
  "key24": "3HdosGg8aHivVg5gWhw9rhVCszE2hffp12eTygYqfVy7LjwLdo9hta696yqupBGLkwnZ3kYo1JiB2hoqEAiK6BCp",
  "key25": "2zsvvQAXybFnCvZo4LmDJifZGE4UrFQ3XLnqKr9iT9gaouKXVkv6i8iAaW8ekEyjdmxRFt4F1vR1CRQxhiirxwZw",
  "key26": "55gBLEBdf5Eudueit3q53w2GCq4v2ZDay9NwkqmqvzG2RC7kDthy2WQx9mLCYArf5UMiD5wjckFmduybhi7C96dK",
  "key27": "5WupGiaPTA6aHgFTtbHW7srBZdFLUpxkVHzhHfRhH2Yd7T6HVSsHhThiPTioEHdpmCHCQ1VbbxoG7vHDiWvm5NEx",
  "key28": "3A6GYALsq44qJuDDYkC7FaBgKAKvvmNttgQKc4h1ft4F3B2xZDUjeJ8mBzMnFzSLNyHhK42qXz31G6TzRKEMhoMJ",
  "key29": "WfRtYzAK2LHQqY2d8H4wbyE6GF4xBkKHxCBXgKPcd9y98MWsusj2vhhYUSTDn2L7phbpFdokQEF9pxXt6aXCsgi",
  "key30": "3s7tMyX2o4rJWmabuVBd1su2o1K3jJ4CVR26JJDqSdijVq6cqt8Dag69y1xfutNVArgqCJB9iZiVuTXbDddV5wRm"
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
