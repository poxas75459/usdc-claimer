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
    "2CqDShz7tuSWyaLYW2B2F3sCHt4iPpCSzKgewZkkrd1i2hpYYDuYTmpzkGtMHiCSDfhG1yrHYqXnZq2XVgarzrJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twA27LQgCEzxmmgxSqoapPw6y5TQPKRHNeBQkBCferJYgdYCXWVEucq81yZtBf8vj1Fo9THfg6srVkFjXTRc3St",
  "key1": "6Fvd3rJQRDBHDBswfioWs1oagYThzvuFmYG9AWPyx4Wh4oXVxu7nsxYySHz8Pdpg3BfXa2EybzHVpUdcXpXbiA4",
  "key2": "5pfd4Wci8LhpRhDETAvZb9rZbZ7fL9cSWqWajznfXAY7wWPcE72dTRWzrx5YwgC7QCj8shS7QUqtau4UGYZf7Zmt",
  "key3": "b6bcbrKbcyTQeHrfDESDUTbx7Lu33dCqSUngxEb52smGkqmuawNj4FFWzCdDUnUw26AdQg8F2HyG15w3CHGf8SC",
  "key4": "5NqEvED29AfNrUeSx1RD2SAhc1iJN9iYGpq3CvdhUZUXdNo6Bp77H4auAa3SjiXuhfaz2K2G6rcoPiJgtcRNvzYW",
  "key5": "4Y9xqdLBSxLMbJdyd5N6SePrKni78Bmo9urFESKsC2na3SJmk6Rqag1NpzmXdJyo1gwzBP4kM6jGxWTV8p8h4rye",
  "key6": "96woV2EMWQbXHM8kxtuiFiahhp1GxjMSRnUEpgKvPMdpWhiZY52RBC57YfLN6QMQ2huE9SnHjxuqz8pEWrDyk2M",
  "key7": "4QUKFD5vD4vepzViqpfnYCi4kvzxi4ezggjueUPi3nJNxJW8AXnBvKT4EptNacrD9sPcHKCyX7SWPHn3QqGTfSWb",
  "key8": "5RLbi8EorQszqx2PJXCAFp9o8KFDcY15jDU9qVZWoKLU6HJzL2kDLAbidtWx78U7xNnQaqwBFg5RrSy7heg6ng5R",
  "key9": "bLFEsqmgKSJRZkGSu164Y3VwyfaV9gaY7J7v7dmU2CGSSypSouzigH2oWgo3NSquHtPFej1J5k8fquirSxqjUeo",
  "key10": "4MRh5uRn2fAd2pusg3NG4nKj8Lkv2W4w8RL8ZufpBWJKZ8fS4v2oxeGVjxwe47vBnkRASCoESYgrAMK6cp2AHaCZ",
  "key11": "29zxP26vSfkNz422hugsqPoWTcUzyoTLLcpBXh4cQb48VVCjqtRqAKTnVZQYz4mkcepYVMJ6rLur9rKehVH26KL7",
  "key12": "5f6jknUs8ZRxuAmHtAWsUJ952xhfDrntPQaysc1KxBXy2SrMuvqdmhvUnGuv8ZDnuf54dXeAP5S4G7Exxd4yjLyo",
  "key13": "5myE5bPqLzqoU53eVMf8J6QoNNQsk2MjTZS7wnfNXM9DpSL26kK9ii2umaJNSvrbTpDX9ANdScUqgDaybKnnDMeq",
  "key14": "3fJesfVwD2kwW6e4VbZPJvqCG4By4XJapz9xGaCnjzHyYYcq9wMfttFYerb5NrtSSV1hDZobV9MeUuaks7GNYEQr",
  "key15": "3snMSuTAGMnDntrjPcXoy7YvZzZ6PJNsS7ZnqsVXKpe2haqXbX9K2CyWrhjKz6jvTDV1xcu23t2G11T8jHhGCfg6",
  "key16": "3XBTuT9NQzN8RspyWcTSehivAfFawbuFQBfCVVQKHuAaWrGmFBfZM4m7xoq6KchFhnsP4RgxRrYRnNm32HQr4uxi",
  "key17": "3FNoeY8Ugtc512QVhiT6EFF7ex7FLSerk3z5cTtiCTCsLMr8PSHEwNwPSiopZBH7i2JhLhuq9jpsVZYAC9QuMb49",
  "key18": "61KuFiVzhLHcvNGDKtFdNhWi2TgBbMBhq8LfXyNeXp1j2JkNTKim11gKrCtRiDLJyXBZLedzRkZkLfdg1gXkkP3u",
  "key19": "3q5KmzFV6q3982nw13sguVeckANw5QBXnbZ2pxSvqaEbEyE7LoQJqbg7ku8tBiRAfWGLPACc8eXgvX2YMjW5SGgd",
  "key20": "6GEdUuTDsognVywKYHr7iVkGB7KgTB2vFA25FYxuZLCwN2UDsRPUWg1zHpyE77LoPsHPcYEKSYVpbstCTQntqj7",
  "key21": "38jmzkoH3tBg5gghYVyF4WSp5JSoV6YDtzTKvke9BZjFy8mNdVd3rzsDzrHSECHaD2C7UjXitRbTWfzz9PdBtGAU",
  "key22": "2aGzCmvJa1ArQVYCEu1tTWkxL3nCwauGtqDXHjLgxYhURUqfhQASTwuWgzSKQvBUZRApbjtbDv3RXXigx99RGnVi",
  "key23": "3gohRUWXjb8uLT7GTTSqAeXL1o1dJkNk8SjHrnKjeCeeBFz4bEWWeXEN1PAzvFrvgcFMETTMbpQyNUywFeRaC5DE",
  "key24": "4GQG5VqSN7RT4byoZ3ZWDW2RYxz5a2JR5NMtAg61DiSQqZ8a79whDhTGG2C3shvTaVU9EyhGzGdi3TU5W3BqD9kZ",
  "key25": "4N5oADkLGVKQUQb26M7oKj4EF5yPvakobrUzwmLNt9fpf2LRLRGkFwtmAGtVpG4RgaTXzurHxQCMXxB973ZF1P8v",
  "key26": "BZ6BBSUvAwMtAERXUKWRemCTRsE8KWR2627rt5o4KvgWLwZ7gYZkWZEQ1bdhgqjJcUGNbr7ZPawmharrKgg78v5",
  "key27": "5CZwQaCDgy5tjgriBbcRi8EFUkHmpCKtpx5T8jYZEVofd1HFFG8HXoYt4CQQVP9NdhAK5PPmjjb8YaayLQs1qNT4",
  "key28": "463jgzEVs5yVWyCUGby86VisQtzKKVvw5NwLYPHdgsfiPeUPWtHgHg2TZvYnxd4pkzkBPLXpPJCFKfApQjKc4yv",
  "key29": "4ppCC1qusYBjEtmAECT68qGS6o5TxGbGUksMSyLp7PxN5HtATC1f7tKMywVzm96dkhnumrXrqRpG4D1ZFEg3F5Ka",
  "key30": "3k6fvvJTZyrxfZDg2TEvfhE5rJXaM8VKZKXXQQgoteA2jBPh99xPKvWSjSkWUyKhKBZSktDuXPHVHnDoig6162j8",
  "key31": "35XyW3rhS7REKPACw2FwGEgYYa9fGach8kwaqD5Euq1zJz69AGhj578jT8eVrd6bHpwihf3WGCB5gTX3dWXSChW5",
  "key32": "4e3r22NPUtdkKRXDzoMg34kgWjqdv4opE9psXrQKxcyPfviJGvQy5XBvtwwWRRVCoVzWczzji8yYCViaZ63s9mD4",
  "key33": "2dT2JcCg3nXgSp4LE4iLzQHbKaLdBHK8c8wqHXw5kktDppDKEgqYH3CiSrRcHnpB2zWdLUtyoX85nGKjqcGULUaG",
  "key34": "3PTpbrU8r4J4G2pTi9bAVFebhhodePTNaFfpPaeQtyKosezdahfBCscQyZNu1Zxm6hjw5DTSsEppTeUBemv5JgKB",
  "key35": "5bcSFowSPY9Utn8AtLhysdU5rSoiGtAmwTghx8Pt3X7dCdugcy1R4QZgfM2gRdexKnrRBtrEWxjSpc4BqA8QDreJ",
  "key36": "38pnRXJo1DqDebpDbBNBCwLoxFx6VZRUAShiPS7tZiUWQseWF1SKqZuCTtpHQNKdoifAAVHij4wPyMYyoqa6peTf",
  "key37": "2jW5koX5E9TBHSTQDGHmXM8AmBrRPFWRwp12xmGkbf4R8ZTHdPLV9iuUEHHiyRwo69giuWsBVbZYJy2pxwmy9oGQ"
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
