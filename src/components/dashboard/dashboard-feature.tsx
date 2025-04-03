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
    "2tpSYnkh1XkgATybw4Fj8k8EWLcYRRo4GFGXMY7kwsTFxPRARt1cvMTUVigfLtWfr3jFbrAYqpGFBzaXNPTBfQbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27GShbdFWBXXNh7zYw6ZgpUn3g2Hr3soZTrBRfWeCHkp6BHhTGQbyitkjBu7tKZE7VWh5HjUapDgn4zxCYYCFu2m",
  "key1": "v8vFe14wNxv7w1X979PHDTkpLJ8y9XGzpFfKC2CESK2G6w9Bdgu89JKDFBxTmL8iwUiVhkLY5LoFAiV9C6RQ8L1",
  "key2": "4s88Fac9jQHxAPh4cqvxMFuzdUnZny95rdZ8nHTAuMDHxPWdZdtC5G4NEJKMJNXZgs1RQMW7fkcBRqTceW1GtWoK",
  "key3": "28LsQRWQazuHgav2PyuzsJXHqV2bVBJnSKTz715GbKGGypmcKrX9KGtX3xTbQ9jQV37FLoHa3f9Fw7ygE2A69uwV",
  "key4": "5kSin8jF7qWaFsfxHcUtJYZAAKEBvoRjcQNQzbzPC3iCVMaPZTndSrzr6DoaBv8oSC78xQD8xQ9Z7CbM2JqcSdXf",
  "key5": "3Dq2ryRB1gm1j4R2P54BoYP134JaMiXYYwZRKJqGDYeo3az8rY14eSMwdGU3xB4RG1Kj38T8wJqiuEjQtBvHPsb9",
  "key6": "4CfXP2BBQ2MstUsvy4DMBa2F3YjrvxrGfyR13pRVp2vUjSGgQMVuW1ZT3LLgaLHd9RB2wtySyPNtjzaLW54qwc1K",
  "key7": "gxWef4onQ86QrEDtk1UZ6Jg9aGqzvnnvtYcQbuWB3Uf2jgsCMyobafZgiZZLxSnJ9ewnQ12YPQAtMQSAZdPZcTC",
  "key8": "4bh6zEzpSvNRXTEuqcSfGnVHMspM8kaWgYRjDJii8VmL81HBfDUTiJ8UKNxiXpL8Uay7ZzoSCAng8qRNSXJfi7WR",
  "key9": "3H9C96jQUsuWzox1qJavgVho82FKa9mfpmtJxcpBLX7x8bLz3EpiEYrHmZnzwkr7VwzPTZFTs49FoTTUXbDkQG1w",
  "key10": "3mYTkS5uohJckhSQwLjdoprC1ViFN5RtVGEX7PEaNsx2Nm4pZwU3S37GiMqjAZG8ixErdioDBSZLEUUnoQSPm4Hv",
  "key11": "2oczSx4aKhBWN9E8sgmEqV1FKo5JcwVqnW5Rx2q8WB7kBvk1ui9WHoJQKJJYrmPFrjaooBrmi9Vzn7Kayc797KKD",
  "key12": "J7YyKjF9oh35mm6was9VbjwNnewFPPgmu4uQs5zMgjQ2KnmbP71exBek7unEKqxBoiPubMenUaZ3SACGSYELkn4",
  "key13": "LcTP6cQQopSV49kXfUczsxUwPtCcTSjjJwb4MTqXk2T7eEtgqGSUhpgPMJHJp1md5dgc6Nwg6TUkDGmEx5tTUaS",
  "key14": "5XPS5hzLBahhckuYMqbizCaDzuK3SxreoDkcg6vF7HVVwT74r3LWtHSNxHruQxf6FTxYc56yB9LWQnZYjUsgL2ex",
  "key15": "5JqCFAmsCRiwJAyXM23zxAHCHqoPCUTGESQXj85EfwD4W5T4W569MUbN9oQNaZoXrvL8MA6f7LFp1runs5xEowru",
  "key16": "4aH5fGJACou6EY93YNyBM5Ys1jnFTJJRELsraRDLYWGeKe1kQqZhN4iyXhepeenV31ifTpXz6Fhky96e5zWCxbVZ",
  "key17": "2ktuTZsZFXP88zsb57465DyFJChbkEHDYABuSAtj58Xa8Kpny25xD7QFQ7NmD6qSzKzRiJqdELHBkK6jFyjWNvH7",
  "key18": "452piEuLui8a3ZuLKeWavHUx68udSVVGaLTJuSERCwcfskoy783FASH13x2uHMThdHJqLmwUwnP4qZCeZGdUG2A5",
  "key19": "2e1YL2Swak3AQpQ3cBZ2p41TFN3bz2gkcCeUqNUK2L7pph4NosYeUfHDoUqFA2coVFd7VS9JoHVGyr93wDqeZTuX",
  "key20": "3B4G9PVXaqTmKc4j4ZdJNZESsJBAtXFzoPTCn8RrUzzSFNd9gb7EJaEmDTAScu6MF9ivt3ug9YNXMve1rB6iFjwa",
  "key21": "5B5oudths9pmmLqf43c8MK7oicjujiY6bQ4Q8nHqEgb49qyKxD6gTZFa6RYQaAfbBxxCG6uactvkCSc9Ep5H5p2j",
  "key22": "4qwWW5kH2hzudYJjNobmUFKURoLXcqJa5ZFfr7CSJfKrJfeg4yuYb2ZM7jvWFMik8WeM4SP7rmhb6wZYMMow1ah7",
  "key23": "4nnmE59sfpvEJoKUSEZNY3nrGM1c9dT58ULKQnuhjjcoi4QPrzoy1AGzJbWCwAgrdCGfkGDy3pTJAjGAZT5w3Pi3",
  "key24": "3jDBB2a3LF2ZgX7h1z9JYLkaEqcnFgtMxKskeMZ4u4FMSSdpSmd9KS51kfa77H4B8XowaPWasZYMw6R78PybCuj3",
  "key25": "K2GPBh7ieiJoP2suH7DJ3LntmB6CYQDe351Du4ocVg5SQDCtRa8V6TbFRZ7MFu8H7F85B4YradjA384dPvYwXCD",
  "key26": "2EeJ2yix1EFZJ3VxXcD96smnDYDSLrbAaXtqaL9nkgPcjqyhH1XGc48eNBjRCHbQ5Yxu3QM8UZP7e8YobG8uqegd",
  "key27": "2mwYgGYzemK7yQEMFveJf2cBo8AY8besQwJ6DNv8Mb8d3vb2VF2sgPCYcVJdC6QEYLQTEGGwyv2eMKetYumM1iEt",
  "key28": "4KGEFnPF3g6mv66PLocmkQwh4d28von9pUovJhQeN2eAvq4puBMSX2zxPPjZdJpbQpXuJN5MNfyJVftB6CMVTgRd",
  "key29": "4TRvJNiCfnim16YHh64LyDJpD316e8ffuDwk6uZNccGDgByJG98M49pRwaYRhdB1B5TyFDLszhiCMcC9PPiWupHV",
  "key30": "28Ww4fCMAXkJBxB2WCX2NMWRtVqQc74kL87oyzBNs8V9H3ZNdRXNJkW5qcUDZUtzACrGHzavQEdPwYKRnqFTifbN",
  "key31": "CXXL5zsRs9UgxLi3WskEcmpvkRWKHpEkT6GCzGFkJcyEaWESid5xk1zMrRG136k3Lya8j19gBf9PVXRzR1ZH6CR"
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
