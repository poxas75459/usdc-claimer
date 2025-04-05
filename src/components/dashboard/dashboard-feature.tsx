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
    "rJPv9LwDw1JGf6JpRbSSN3wsNYnkuDUu3udwWn64RbNF4V6UhgGBKRcVMUBLBCPJGurygtKch6TbCF8PDfu7pGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P8siZVaUzxaSfMXY6vHqS7gCDL42umJS5gU2XJVyeCmE3sU5wVXosy8iNGYdm9xA5tMXqcHmteYmK2Qy4tQkhHy",
  "key1": "5BumwenSMu7mi2BYj5ZuhAM3j2AhMwLa1ToceeTvgGqaADU4dgwBEMVCQvZcmDfUVyNMLFhbQt3UiZXE1J994uds",
  "key2": "324doyXqsLyADY73E4cgnYcZp9Q12H2KpjFX6RhT2pL4zUkrVFhV5sdxm5d11d5tRHovC9TCGYiEDmB4JWALL26B",
  "key3": "4f7YzLQzNXBqQxRgdk2YE9QRQpLdTvaYYhqRAah4CL3SdL3DmFpeE77672YWJ18ZXA7vXYmnY5ygYzGHm5LZeMZm",
  "key4": "5cmPtS5kHb2VYA2TfUF9zU52yZG4o7xBY8sbRKVYvAgaZpCXaQZmJA3C3iUcc9nWN9oGHWkWE2wTHvuAgbft3eZd",
  "key5": "YAFrUksqc7tDFPD5G9PgbJYsFn7Be1oYNDcCQDqm99dGF1MWE5WtdJwzSFmcb31v8XHm2iY9TSMPBu6DcnzE8Dt",
  "key6": "4qFi2LjgYxNWdhQvpKJa737Dcgo8su5g8FaCgunXKMFk5uWCiQZnNjNNzfoKLxZJLTzuN1JitTcMaW87Q8nGoL3q",
  "key7": "3c5X7SoubPU3ArMN5taRhVeM3Rg6FLipL2Advwi2oZJpE3Cbt3WfPmHDGYYwQawcyDv7kNCKUPeUiVYSXNiHoNP5",
  "key8": "5zmUabRkvVV4KTQNGHvtcB9xLfzqQWGoTfpCoDciFPNPuz7Cm5oQudZjf3dEcf36qbREa9x1zRTWCyPb8QuSWkWe",
  "key9": "2ftKpnp4YyWxxvCB5P8HVbjUMTZVRNxp3TH1PwBJ3WvECSqgfJGM65SJFpZep7PKXoNFhNXMKGGvyHR5GdwSAwg2",
  "key10": "2yite2xqBVMm2ujNYtR9FmWQJFPJ8kFmxCicpJb6g6Brncx6bQ8Tei6d28cnJidZdHM2RdFybnxZf8vRhDUYXCNJ",
  "key11": "35ZNs89jznSM2muxpjwFyt41w5CrBCwbn2WNZphWkTzNpwBHztqEM83KNcwGaNMmnLS4q5Ko1ixCD7gf9gvSYAvq",
  "key12": "5kC5RSdjwxJNCHp7U9YMNYynPU4dRwpBFCCC7GAzLSJCPHm2Z5hj6ryRREyjSgBRn5sgwPfSJupbMqUM5wySAAbp",
  "key13": "4LGmba8TxySJJVtbHmmU1EAusdV2Xy6fMY8qbGunKh6SesVubwKKWkUFe52aPqPmGrbnSQLEMDBdGsGD1T3s8jcy",
  "key14": "4Neec5AfgAKcHwGcnxYgheykEGUZif8Bc52eYoNAPktVWd66GDd9teA5XCiRAKW9sJijBWAhfEixrCXn7bdVHbVB",
  "key15": "3PSHBhnDtY32bCwH1rK2ceFMmdDdjCiGoh6YqnvdArrTw633PAnkPkChy2BJjG6D5Cs6X8GAvQwMW3uv8dp1zcJq",
  "key16": "5MBRDSj8U79tqnmrqNEskLWHqKabD8f6qZLCVDwXnhWzVBzidgRnPXzCj1y9HnMTLc7gWCtL34xQKVZmHoKBqC4E",
  "key17": "2jU9TnHvyzxhcFfCun5DvrmnHymfBUv6ELiDZyachTfkVfsdLQbn9dr18v19S5SHQmJPTzgb9Rj5FqAkdQ6xGjxE",
  "key18": "5jefjPRkryefHGd2mwAwdjgCTQngawwV3NPXsPhMsnyzpr2CWt8AhoJqgnGJr25KyRM6qWbBWstQMKqE3bs9HvzQ",
  "key19": "3GT4w7rK7iGDFFcg5EK2jvkyb26YzY5XyrCXuCNbFD4TMN24DhLdiqxRjtLbEcsyiFdssCHG9MxkgEgVd93wuKcA",
  "key20": "5xJL4XhXagwWYYYjwwzy4XySkZGBtu9dESs9g3yET5BNgD3tyNvcBbG5d1DAii7xZiU2krxWvH3XkYDU4e87B2kJ",
  "key21": "5zMTAyEbrGYHaKe85KnftxxJio69sfWieD4kZ7YegMQmb9k3wTQazjyVyFeJjKHWwFbQy9hMKQi5TJndTTQF18Lo",
  "key22": "5f9Sk1koYV4zQueR84Yzku5ghqjVLJ1oQsLBeSsNYt8J4XuS54V6tYbVQ9zH4GN5gZRzBD9HDVfCkitGwj51yrTf",
  "key23": "3XDWQQ4pCq7yJwNYNMU1xP7nV4eXmuBjJtNeG7GuguBpUZpiQdb1xLC3Buo6PsrciA6EYWK8pUZ9sFyhoWC2j7ss",
  "key24": "2ZbEGgDFbjCPeaNoamxtpdf4wLyqeWoqAH5ZndcKx9bgpqW18GiKEFcGD77mnApBhBRz58WUQocSZ85UP7iFccB2",
  "key25": "26fkWzAS77rLmSMKpEWtR4KWovWir5NMF4DwkHxpyU5oDqFx23gdchk467SqHQ2cRC1oJ4sAW6r6sdN1wmx8rqm2",
  "key26": "3FTXC1jwDLgphTc4iApAuYtqq2kR9kqjGbmvQXQnoczDpj4TBg84t6vywGt6d5WmGaNz6CPyYAZ99U6WazFVw1n8",
  "key27": "5XnLs887oPEVhWuCikNeCAGas3KPnTm8mgWDq81p2ghiJdHoQ6CFXjUbWL53aYn13cEd8Q49MrWHRwjWwFjmfghf",
  "key28": "3PLSDnsCJMu8xdoDueu5hQF3fVYcAkdVF6fh9Kn2xuRPLpfJ3T385pMCUkHGC87KSVTQ6udV17pv6YeYzx8fHTbx",
  "key29": "oJhgiEwuT3DZvQwniaSxEL3PK1PvmTpVmVBaZh4AkTwtYxwd1eD17uLXh3iVvd9Z6SQn59u4aH43zPv2rBaStVM",
  "key30": "J5SxwSKRv3bnCnoYDXf7Ho52EkVwbuS8r3SUxC6J6FM2JakwFj4d3Hd1vvatQpkRX4iGxpeBaZFGDe7zS5shDba",
  "key31": "rKkavmb46s8dq6s2sjCfyyWya4aQHHY9zLCLMWJ5XfvjbwQCKbUnktP5Vu2c48Gves6kNxJupfbGGqpJVEWmuJr",
  "key32": "4KomEC494K7fJxhJPwQaXkoTyskxWg9BcxqgNjX2M6RtkAgbTWv5YUg9RFoQnbx4PoC8HjKzaQC4cyQHUPdXXu6i",
  "key33": "dBY7tvBWsuy8oofbSoQQZQuERu4A6kQBGn694pBPgL352Efkg1N7XHJq94vSsiRZRaGmw3PXEvFMuJ9kt6XgrLf"
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
