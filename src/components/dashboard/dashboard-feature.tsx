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
    "5DomBFy9fxskxHMLdborVTXPgEzqk3jMAxXKiBtFibWoxmgUDWYEyxZ8aNCWkPL7723rwDeEcKezfMsw5rfwpynt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BEfDFVff2MzPHrP9tvop5tnhMzBZ2EeDd857ZcQdHGzD5GEfca7RD43ZJZD5PDK5EsoGvMkH68iTax6UHcTcR5B",
  "key1": "4TYEtPjYQ1G1RoLZ9FWSDR2rDhxJCdcmB4VTeQksxjN8xE4yiBPioeeNU4pF7UCiS4NJtHVAc1ASvSCqJoQqrruu",
  "key2": "2hgmhNBb5ytS6UrzW1gnJMxfEJCF1KNEgd687GZQ8MgwsNgn1BR7HNWCMHDudbALfMWvVHdLwsCGjuENE5rmUrHm",
  "key3": "25Dges2pXkCeCMbgq4KpFtmtLLjDPpJ2nbioPAoXF7V4cQHBVkVm5EShMvwmb9p439njT6yK6RPiMLGFGV14V1si",
  "key4": "5KNTj5P4forsj3mQF6LtU4kZf4nR7bkNjEtCPuwyoqJEH9dr9KFdtmfyPRKUDfNsXDzZ4MsmfjuTt5bkQh1eKgo7",
  "key5": "4kuqp4JtSFZaY7DPXLMzkgDp6Di7fe2cGvcsSjyyZmYZC7wzximi3CjdKNr28xBsBdozFpo5WSkeph8Z2hHS46CM",
  "key6": "3ohoX7VDMsJGFf8suPGmJjtG2T4KxUxrZGsoRcdkU9GEUTQrzL99RMZoDuJx4xSn5kgzTLGGU2EUUW4TnJFjjQNU",
  "key7": "5bF78XSpe4VCihjEVmpNZX9zBq7T9YUcsWfukbL6SibVAavmrVnEYwcuhuw149rm8YMNiohfXfjc2VU8poucfsJk",
  "key8": "EzmhonMVX5HqokgMsJD7DgyFyr4M3chPGYsBE8Da9tC2jVkPNX1WXM4tiNpeNnUw6V6Weiv2SgekNxw3a2JYoEw",
  "key9": "VqaQ8LgCyMtbgWgXK87hbqe6oDB84BMUUw9HQ2VJSVEhzdAAjzoDQkZ1uGEMdpPfM38LuzYv6nZe31p2wBFbM4d",
  "key10": "2Z99bcU8Cdq1LHV8qWHxsRJZiMbkHNPEcFucewT5ygjrwvcLhmmd5AaDbi2yQMiEJT7sxEecMdiJxYnAA11pvXmt",
  "key11": "5Gby6rANr992U3CxhHwCkBVymMyEVVBmk4MwuKVRmN2KsFyoLJKt37HQHFhj2XGJkLrqL6K8p92qHBFoeNtWA1jt",
  "key12": "5wAuXsMCWTAyqZ8jMJ24FT1TtLknLeNYAYXFUeLt6tP6Lqav8afArrnX2nDhNCJgF7yAQPHxgP4dLQqw5ENfG5Fr",
  "key13": "2x5SbAZSEBwQephbMMmCrDvCFwyDduXH3tKWaRLuk8GwpQxL7FdYc8TbAbym42dDGyRjfpndKc4os2rwQwtdqkvJ",
  "key14": "2oAZVU61Dw6NEVpqg7XigmQQTWSZkcxrrUyTmgCU8nRBeqqv1sysn4LVwp8xcjAKBQw2iRUJkfoHSH5XamMd6znZ",
  "key15": "3vQeaoKojYZWWAmkSYHjU9yGTnMc9kbUEfr5Q82EXdsxLPpAZDVH9Jr4uhwM6Dkg8rC2APQCRMkdf3uv4QMM9WzN",
  "key16": "3GrAZ3bTGdakZG7DZ1F6DXvcxcpDNrWB7umBihwR9raXuzwt1Lp7LDodVzeLRCVU5rsSTKmRB8ezZ4S5rdxsh55M",
  "key17": "pKLBEpqav3jBfFpGkF8PqYN8KEmj2vpra8DvN2vPQxvLHHo22UaemmspwoSxpFnvyGJmujVfMmLyRNheZrzAypW",
  "key18": "x9QsyurJLhwBWmwZ8PRPbe2u6at8pQuMHsxD5tRdfzJQmNPC3Yr4NXrvxymc3kheCdztMTq3F29CvMmjcA4Dgwi",
  "key19": "5o7SGfm6sikyANwq6r6UbeFRbbZKiZBzRUqbodFJeumLeTN38SgRoSnh8d3Euy2DyhytXTAK7aJKTAjd2eGkbRwH",
  "key20": "J8Wr4jf6KY6eLNkz38BqeQMkap6BNNfj3ha6iWrYVkv14i1Jq2SYuEJs9ozckNpsNM8nRCa6NjjXxGF3WzbFfP8",
  "key21": "256RvUep9MDbaPRnG8yfYxHgjQ4s4YLSBy5s28x8179pjnLzC1xtzDUsdok6TZvKeTgJyUg6m9f71xXiGNVV4Kea",
  "key22": "kieHpcC3vuwhYa4PsZaf9ZoKo53uWLcEQZhGEHtmjLM2ta5UCY4tTPcutJwePXgMkQMRXSTqtckaryKpYxdAmCH",
  "key23": "3Asuuh6ecHaktbjKkMZr4ZdShzn7apeEkww77drt95mKEVfrwoRvFQ6u93ZL93Q3hw3XSSgrtqhJhPy8SbUMugyp",
  "key24": "2TjUVoU63vUHrJwtc2e5dDaks4LU7umEom3mySDxgANophqJCed2wAFWjeChMU5kNhU3Kk6SEBMKCqaCcyjHqsvt"
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
