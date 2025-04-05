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
    "5pm4gyFMn2CGxevdbxtCAWUG2vgxCQpLW3Q8rzDEd9b136VMLKmSuCgrdrn5LPzWULEqNCQQ8ZkfR8zuCnunFt9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCKt1skzdT8wcgp9dpGs2MtwXsdh2gFZzvCe3rYsrSDaxpErQ1JBHUYxDU4V6QPXRxvGbqs4P97BJiJ8CMhNwvo",
  "key1": "42PTcbjAqRY6L2G7FaUUA8DP1tQdk9QHzkmxjpmRxiaSmypPnJNNX6nfhGRgfB7hD3r1kJ9AZPXq6ua8gQgPGt6A",
  "key2": "5XYmQqWbf5Cgp2jv5nhQbu7VedpS1NtY9yAXtok2XGALRU3TMyZoFhLrdrzGy7QPjDJTnfh4XoVMUWCVQqgsb78a",
  "key3": "2ZEo1ZAEvAjQccKFuc7HZXCB2ZkgE3rVkRLizPbsAYsRte8jhMfHRTernsSbjLBwx3hQNsjsy4bX5LsDc2whGBHg",
  "key4": "5xMy6brLiLZPWpeccW9w4TLYDWojiX4u61d3HMPDnqtXBQSCpgEtgkYcfShWH7fSYPzxCWYB17bFEYmCgaFkXbsx",
  "key5": "5fdfsfskWrADdBf8yXaocrq1mj2e4zFSd9Se764an3Po45RNY4C9jxenBnbJdteoDGZU1wYcRe5wet6Z7QyXE6V5",
  "key6": "wRV1ZpszBqmMoRgW9ZvBmZi6B7gV2nScw6ykPvNmZUvuB4XiaDN8J7MjKmXYdxnuj46vi7H8GY1ga9dw77Azg1P",
  "key7": "5RdpiQKZvFFFXHc9nXV9TY5g3srEhR4dTyvWgPXDsSBRAqjWbYfcvaUnBJPriarKGRUg6RCMr7n3r5UaWzY3EZcR",
  "key8": "4jnQLkSv1qTUCRC12hhHSVT9kwgg921zpBDmvFrMv3FRATunb1VTYHh9BE3ucxThzMcek5c7EZXaXf6hNygJtNNK",
  "key9": "z4cSQE5vLkdQAxsycEDcw2NbfuQkq2quYUxkU2TaDKJ3JnVMs5XbNLkXVMAxREYPiVqGDXAW6qB1R7DibkcefTt",
  "key10": "5kLawCSEbGErK7Q2GBJ6untbFeKtLhV35oj9qua54288ywvi3eS19bc8M5ebFsrWX9msTXrizvTzRFrLzbVx3pT",
  "key11": "5KMSbbEmHTf14d3dpUNVLAqyvdB7AXDExZgEjs8cu2PPbhoe4ngatqGMRHjT1VhoaY491sE43qwsPFyr18F5LMiT",
  "key12": "65bsf6ajXGWpYW71ZHER35oqGqE4oi4VymaKMtj3b6zbX3ZXuFohceeFMtV9Dnsjfd6BFhCHv9ZTBEQecfxSRWRq",
  "key13": "25bi7eS5SuRjTwk6AqYp44osR6J6U8WKT64D9k1WWSK7FzsftGKMKrCjv6HhYzvVF7Sncen7hHyDnGzTzbPxVpGv",
  "key14": "PnQW1TqfVRXHoTHaaXPv37egAohmUoz6rDx84WrqhUicrd4tie3YjbCUD8ZLxYUpQGRvwvBE59Hmg6G4GLqqnTJ",
  "key15": "2Lg5FHBZqrJuF6P9x2srtpvPrRmyELCbgFPn3tpyBp1CTrRz9H14U5T8bytAuqzG2nd2fhiQGjEsqRj6LR22eroL",
  "key16": "4ZqzvsVSt5V9E4eqhm7EaK36P6pwNeHCEawmL8V9JeeVRDaZGkXrhAeugbfxJ3J8sWBgdhSjfdv1VjqRQ54Jixe3",
  "key17": "4zRF4aGyD3wJ2wadZuyeiiVMDvhPqscd9u2i3Cq7PLwJzd8NdYBFgY7pRCpAK2jzaAFVtyCbsQkhCdkJLVG6tx4f",
  "key18": "38k5RNbPRYNBdbJv47Bo5SJ3D1pzvfQMonhZZUfhJ7mektzWEEwUNrrarq9qzYd7zuK8Cs9pvf4NW1ys7zdjyrXq",
  "key19": "2KjW174tKrq9xVBRr3NrSm51VQK7tE346vCP88wMunvH9edsv7fQaZJyZLYnwmkWyUxJ7HRF4647dF4Co6D9PDAL",
  "key20": "5R4pP5E6DXce6TNQphkD64CLRZqYkbPPhTg1LRtrKohdFSZoBizXvQimhgKtMnudj9pfz6GTWuqi3PwH3b6BC7Pi",
  "key21": "52WLkJAZrRc1hFLEdswUeStbXZG7kyz1yE45mmhp3yBsFQkFaWNwtFUJ8RMrFqMMe3QN2XG7QuGprgXdECpfJLr9",
  "key22": "jUjPTcvY8hUvpDd5qvYeqqtisH8TEgGbkMCFSAfvPNqgCFvjeUm4Kq1xmuYvHDfJBnX2E4DHo1aksRonWswCzc3",
  "key23": "5g8APmnPxN7bydbS2Ug22CmZgqtHrYzALy6ReMmzCXR4vXyFbWd97P7Qa2WnxdjvjCz9c2eHqMvHRnCxvGj7TYft",
  "key24": "2JhfT5sLkDxRD45j2BgoJAeMMWr1jgf53sjr1qeDZUsY5GUxEiqxoXY9FYhmvAbaQqV82pjaYcqsV95jMzi1gxJZ",
  "key25": "5vbPk4pn5phHxWJ2p1Vqhku6QjJCaRK9zNDxraDQVEStprQ2bHd6CWNXqLJCGVEb6sgt22uZipZxXUmjjYeurkbC",
  "key26": "4Nbjdx3mYtyRkq6t7vwHyHUDb8fwwa653Mvj3gwhLkETdirHm8BMmMntMip8vyGbVNCeRZ3CgmoxShR1CKP41vHG",
  "key27": "3rsDFj8sANTKCbHkkQVxer8qXPh8o9p4wbAQo7Eg9C1w5FheMy1zpg64cvsrFVsjCMHhQobiSBrXT7LfNN9FbeQf",
  "key28": "3ufJw1YAsmVQwFYEYmLGmmrZwGr6Z5ZLkuy2akcGNxWCJHca3hX5UMPoeQz2rGS2Rak9iMeXyC9RuYxmxSTNsZGW",
  "key29": "Q2xeNxrkEphK28d429kzh8Sf5SYGHGWQSL5BhnThMrXd98w8TxAhj5yLdg2TspMJywZbSHVu7kzLxikXX9ANezm",
  "key30": "4e3rxXhY1JLXjAMyqZBmyddoZnAGinHgMH3Tf2AD2QNjZsbz5ReTVbUWaXmeaKxV9KMEwHpt4mGKDukLBm64UsCo",
  "key31": "2Kd2o7GGgii9QVwLwjzYyntrfe76zxs6oaQRjCHCK6oA3tfNqenDtEkENBFZuRSKNvHP8bCe2eaC1h5EPnWhF7rp"
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
