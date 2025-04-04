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
    "2saRoJMmrgTcibwmdKYT7hHpKYNuf4izKzeA7eg39sb2t7Tk6Gfd2avKgLsYE7iP6kjxfk7Beeq5naEXGXYwrPDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buvkQnx9NN6qHSnwS3hsFyxVTQqb1vLDHsY6rvoWHNkYq6TVuG9HAm9a4bqRE8tvQ48op4XU8C76wFNPEjFBWxm",
  "key1": "2SCNGkxoxEi3Q5xGqMobkmLC1LJaonsYtLhLtj1TMYS2aSkyCvjjzteA1i8FWcpfBG4JRPjZcdWgsriWLJ9ynMTo",
  "key2": "31oU1WvNMZ4JL5daAg3VBRKn252c2yswjDcFcRqceSFnXQ5YzAF14T2QeHSRtysH9g8cvq9N3TFPaMNnNJZn9zqb",
  "key3": "3CmNKXSCTZMKQL28A7t6UZSg1vWuqpPHP4r674H8pC6qzCKQpirwpMQDhCX7fPBfmz74J1GXEjCqUPULewTqixNY",
  "key4": "5Sh4JNF2zgRwkGgqnTn5DG3oeNcUfmUTJfMno9d2Q2ZpfWQwURyGcqmcQFY4g6XLZYZNoHALRsWQeKTgXwyD13YU",
  "key5": "4tP1i25Qa4JjHrZzEYmgpHQFTewh1UHNSiCUwfExtx2gErTJCWe4ALqpA6BC4rMmigCaXReHTNSkVcnnynrWdinm",
  "key6": "4xpyUVrxLs9qKZhVQRnwf4ZEcgTMYTdiBLR3vLcKgGs6QbrjdynBaNyPe7GMedw1pP2XXoZBWJZ2qHCoq9XXNbCi",
  "key7": "DUw9BRRKVLUwQuXyC6KQ9fdP9saP7wX2bbN7voXVYigwKHscSKoq2N17QrjwHnQL792gnkhuK53ua26RnkkZagx",
  "key8": "5zpFu7TcXBtot6ykGdDSceW48wL4LJeW5QynWFSsbfYZhFdb42dzAJxnquxF5yGZVRRGLMQ8RGT7Mz7fX9SjBh2G",
  "key9": "3W2BfDYhgmaBVasBRr8NcbpHrGTFUo7PcZmHBSkvPckiBMYzqedG1sGaW5YMRs2vmuV6gYx3XtEBMcS5pwF5DsMa",
  "key10": "2b8oi3bjgvvqoFq2hgTYU78S6wFTYFSkqvtJ4wbhwYZ8VFt48sipBN7jjXascpKfgxuvt3TDcH8ojU8RCKELwgzP",
  "key11": "4fSJdkYqBduLAsRedfrFZqAuQuy3PLSHKFg7YqVDbtMFJBvPu417WSxye4se2CD1afNAicKUAo1Nyxws6HZ9Yxhq",
  "key12": "4FzirLYymeGGiMedM5rRMdk1BVLMcvAFe3mVqXYYoGaDkefxXA5pKUN3UnSikCkjamrWEjsFt9mruyhoT2Axpzn2",
  "key13": "3nk4JunwRGNzWJB7rNqePbmc8ayLFbN16nkfLBCwP76nGurkzqfNGguwo5ubeTA7c8GquE4NVNMZFwfbbLpZm2R4",
  "key14": "4wjiLij4ik3vXHWSNbQd9gPettBnPW4EggyCBtkkgarF5xaQx4QFnAT5L8cmtPkKULRpNhas88DNy6XBEnk9FG9j",
  "key15": "4pW8ne2rpFxEo9ETJZisajdPyUJpoaDqP3zAHh5qJmjtunaCp1NjqvZtpohPzw9YQVaU73iWvJyP2DXTVRsBZjK5",
  "key16": "22sRhtGpmJjHCcn1Hi1UmPhjwnrP7UF2QVqgHcrPY6MbDyPxyGSDigLgrZkoT1vPdEGrSLb81zXrMvzDXaEkLpNy",
  "key17": "Szz9YrC9V7xSh91vdiR7BWLLJVJDVZgMTuiMNTzhP9itQNahGF5RBCfzEnrYC6xUjBwmV9YKLjbjfwyY657Wuiy",
  "key18": "31geojbEdNUitxunhofh58MJixnKZAFDb2keHBz9pScdPm5YsbsybEg1A4DdxUWv6WBrGThLP1Usvwe7Fp9sagV7",
  "key19": "572ZQRJNPjBapvNwV2KWnC7YE9H9dMZtd1tKHBVLk6QtnSddToxBjZpm9LYjcW62AefXiamg7vKh9fNQHc2vzJJ2",
  "key20": "61fWoN9SpSWKCWMVs7EhWfTyAsfobpktyyiqiVhvZQXHh9UcUZUfhLHscg6KSvtzjpVzMTTyqcDKUyBoi1PxUwmq",
  "key21": "qftWALru8Bc5W6dQZWzzJaqu7CePwC3mcUNJZJ9ULQHKYBPUB13FVSqUEdYGQQecNjfvbDSUvqxeVz5KZVedD7x",
  "key22": "4PpYp9eMTTi1NDKL1By7K4Mzv3dz1m8dCxxvdvSeQ7imsNu3GGG1E3LTHKpEKwhJQj7ioFn9bg98YwzbbdKUvVd4",
  "key23": "55zzqtGkDh5mjCQD7qSszTQ9PmHHx9XgXp2k6Tv2Fav652D8Fx8pLegxf4UXBAbmfT7e6GbMGm7KDUfMvjGqqk3t",
  "key24": "WR6QMq8c8cDx6wA5B5ihnxjyZz6Xj9m4BZsdzr6W9zgzPsxP3fv8mGXzSZ9cPFtzekpWnFSkCj25SrxB9WEEU9b",
  "key25": "2revpgcpoWFhDkuSc4DSSrs36MHGSKaaDBixMsxsa4wQbywNNa9qq912y9bjmJzv4a1XGykS4AanoCUtBTJC9yNz",
  "key26": "TVyVcpaqTbhAo2jMLrj2XBxcgdYNYesYw5DiwyXufR6qSTecDWFWvcPUJhnRzXthdAmm5bAxFvwxpwrgkycyFii",
  "key27": "7LJ1aC29ZKX7UtWDCGLqFz4gmnu7dkEtptoXDyXCKh9hm1qiAswHgPW68cT1SKdsrdrurk43S8e42RbC6o8Cc4t",
  "key28": "4gqn9ovPndss9TZhBRmLjdMbCCrTPWFPeTLZjPyHXwszoZgqSrBza9V5jNT9iM1YYCZNrKAvpRZTA4tLmfw8AdvN",
  "key29": "2o3qLh3Ue8hB1yx4PNKfqgaU9pUwfJzF6FJ78kLsSi3YCRxueUrT7xpg7GotW4jNR936onM9dSP1syVGJPfyUGah",
  "key30": "5yRqUMmyzPF6fbwYgCsFVpqaEtksVxkwZTor7tkLjmPKBJgMzVcPXprgUA1G3zBL2RFDtzTioQ6U9MGQ2un6XkEe",
  "key31": "2QsFwny1JgJPCvrhDFjBdqeXpDX4V6zQqZyQAWiWHn26ZHCPvk5pdWfnsECkLCzUU2CAXU1VVT95zoTHvEWdcHvG",
  "key32": "2PmMFkBUHFPpMpcu1GitDnhWKVxRHmykxCSJpUb8G5yobRtU9uSNeVFxTXEGUkxd5AvikRrd7HxRh6gbwExAhB66"
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
