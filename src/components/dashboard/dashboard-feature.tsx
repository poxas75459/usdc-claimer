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
    "5rXWwbKBFxaALqvX3uyRPaqaqBsKqREE3WNLahxhLbTXWbwijraKrh7YriKy8xkdqZyStuBZdX7ZPPPDYeFQBXfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzDYXyWdXNNmXTrzvUqoYeM2xo19L9hSqFaMy7w4JiP5Mb9njPjwUeWM61H92SUKgef8QLNo78DmuA6FkZ1Ciqp",
  "key1": "3ftSSfLpiTf7E9YSX6FwWUSGt5NdqyHytr8okVUQXq7iAZbd9zFCLGkQ5yQgzoDym4LXy73XRav7VzZddfdARD5S",
  "key2": "5rDmAq76aAkq2CEpF4NhqBNLB95XGJTi8SFgGRnGdwsLE1krKenAVCdV25u54UgdGUZmSR9zWBVdgu5jjEyt6wh2",
  "key3": "1v7PYenAdiMdCyPDvEsxsY19K8boWsbAxTdT9sYw9SbgSu3SkiDXvjzKTbRzKfdfo7S4H5EpAkXSYe9tmhaXjM7",
  "key4": "3jAK7GPmvaPaALdKoqcbUJ5tgX4EnHJYx4cuB8RXXgr8PEF7hfoQv5XL5DZqeqpQS2WDtKAjsDG8XNxkJz3cKuui",
  "key5": "3LSDhPKqV8JhTrqasfWDtMvJVTrph3KZ1K5sRbRUPFfL9LavwSNNZhL3RpsJgryb1mJ7mb931uTqgYhzsQPKxgrz",
  "key6": "3Q4XD9MvhnzaKSDHErL2X1wL1cCe6Y5vTzEuvEyuhYVv3GDkAtXirVWBUkXCi4QKepn8KMpbC87CqZp2kjM3AiNJ",
  "key7": "5hN9LfnTCuBPjXZYQSVw6kfsDBBMb96AFJ7Xf3FrWVAtXp8DEARR2Wj3hQMG2DpFVLYQBPv2ZVJYnJQ2djDf6hG6",
  "key8": "bUkf6TZmiBT6gf4Mm9HpShFB2Ws6CAzuN8YzrZCMUbGWX8zz3SuvVKL2mW9imynNELttqLr3FMd3zabkCVP8d86",
  "key9": "3AWzjXJaMHfFdguTMfuwNPsFogPbuZmYF8d7ZVhPCzABqLHudeqcoSgtcCpLVAiNSHc4avVepWTynFURVvobBBvN",
  "key10": "3UoXpN35X64AAeqmzxbiU2rFDCPDkjJZ7AEzm59Ed2ex9csKwPEPqE9mJ4n5eChQw3JW4V637Ec1n1EEiSznvRXu",
  "key11": "3ALjDxmoiKiZrLXXy6Z1F4ntLnVKA7VGTU9gHPuLgqz14bZViDNJdm1wYJfWjUxuPJyw1JKkkVH3gurPZaZz26pD",
  "key12": "5XcJqaBhqmWfuJuw9dFRm2FoK1bCcF86vzSx7astCPHYKvBAUgwfhTH3YJcMu4qp5CXteyePKbxBHTdtLxQeSFxe",
  "key13": "4GMqRPUBsTVhkcdQ8VBw3tzB8LJWo6KJkKyVUddkjXAnyBqT3J9wBBYR76JG6m64JN3wWLbgrfeuLGRMkyhCbELm",
  "key14": "43yTr76XLhAFS4ZhNmu3K7kZgqvQgFC5TYQ96GXq87N5zabZh73TCU6ym7fzLuSnzsdR6o43LDEtmC6nyuH4Y246",
  "key15": "2XBiRUP9aNXUtHWQWtSu9q5HMYkEbkkp2vpZcesCSgu16XhsC3z8ynkE2BRs9e34RGcDujbZ4VCAE52JQaVzFRnR",
  "key16": "3CKMjeZMFxmrv4C8JecqbEkPRt1R8oJ4XyqE4TzuXdN1qycvU9W6diAJQEbJw1aNd5XhjDPE4iirppMKo3k8bsDM",
  "key17": "5iQMPxfPtwbRDEbtEpRQYrPRzcxdRLBxtHX6vtY7RqmtoEbQR6x4kLknSJZ8SwYZYkYRinuEN5uFHedz4SAJ8noD",
  "key18": "41vvg26V9rznsifsbCT2VPjd2LwKFqNPxPsEcn9p67KYu5XW7k15b5mib266nKK4e7xGRs6kpbMrgzGsNTYF2kEV",
  "key19": "2Szh9Xo4oPNbT2xqYURD3c3PAAUxPHZtnevSECaSzFE7Kzfpo7nVfV42RxUoKYxWdy64tVBFt8xAwLmwJfciVXg7",
  "key20": "4SYXD4NZZSpGuV2MmqMU292XBgPdesU2WpkNiyQ8Ctv5Dw8RHy6HXtV9UWu6zodiV1n2sy13oK5nvWmuuyQf6x9Z",
  "key21": "2g9HE6s3rCpDm1Jnt4hcjN9G5UUZQ1ws7FZkhcfwDKoYkz6gYfp96jQtyiXNXahBsKRLfPLgmu38PBqwPeLnq2eu",
  "key22": "3FUvvL5NtqaRUDMhYMxSizF82PSneLrCZK99B1JdnsAEN4cUSNygJ8m8vpvMUg1jZLjayZaWf8BeP6eeEXLxRRmx",
  "key23": "GUn9cZCTXtxborp57msTkgTUNuszVf85417JJB93AAPouv9jmkW5FrZCowzMwpH4pD8XZt7xEok9a2FcFGWP6Pj",
  "key24": "5HufiytogJCv2kGve9vonar3aB4GyypwkUFrUyPJRkTThrizaKJorc4jx67BmBCKY6C3YsF8Pby553pJRTQXaQkt",
  "key25": "fhPyX32kKi9s4Vx8SSYSpoSxs7kjwTZkwDzX7gZzTCmtMJyvN9gjZyiEXHHuYzfW9kCbbrVdfQAJu3MR2ZjBwDT",
  "key26": "2EJWSipjuXeqwweVRaZhehxSUsQjmnySBb88C7vrKfNt9xm35bN9YbLtYVwP84Go97fmAMX1eLcRCfcdu4RwqUVN"
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
