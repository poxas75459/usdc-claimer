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
    "4wATHNMjZW6Pr4cLRsFkoNTDC9rdwxScVATiYJaRUGLXgpLmAF1SrtZtWj7iQ8tv6xSPaLwaj3KgV6rqNxjbwEGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2feiD1KrenMetMayuCpAwkUxLVm3xwMUw6TBDoCS9V57SwnpQVoG2bG6zSgCco7H7nXnaLUgD8UBPvwWjydNRpd3",
  "key1": "9ybRZT6CaPdJnmhj37YHRTNVxeLtN2F56sC5M9sfqGJvCqUVaRerGN84RuDjfzHLDBmMQyCL2U6RXbdNA54R4kZ",
  "key2": "54xYVBJCZsS1mwWh3xYcn8EHi295BWzbVUqXWk8rcXLQz1N5SFTybDkjmvfLfyKkFAHVotpEhmVUuxTyRmLwk8Xk",
  "key3": "wgkSH3SBfsnE8hzCTfoRoQ5cPjSUbFzpJKV34bLS7DjKjGZzfN8ji5A3zijFz6HgBhsbu8kExS4pNA2FcZdypJf",
  "key4": "54MhCb7Ns7JTt6YdCD1czD8xsiHbJrrZUvxi8qEAeoAS9WH69YXahoMCehwcUUD8tvXm9sDZXTLkCZVJiYDMZwx5",
  "key5": "2NphGhPZWXZeUnk8bMLjKHDQut5cDtmscD3ViXUkwzKVN4LTDaB7Fk947wCAGRRogWYx2axeAJCojzad6Z1N1HGb",
  "key6": "NFktmns67oHintseeLuaWZiRzCJnNXGEc9MDjh5ktfG8v7RLjDrGQDmnpC8Be59B5kX9bE7YmE8YoFUDTyJuS8J",
  "key7": "3vKMrTtc9uD293HKv7n18YuLi58HH7LnqFqJ1ZTBikurwzPUtFxUiZvFgFQNXwXKc9XsKuaoQT8F6w8r5pbYyrgo",
  "key8": "31yD3LSFceMtkzEmef4Q7vTxEz8Lh56NEjcCsYAyQuG89YSBYvr48qQP1wJqRXe7Y1sPSa5fiUYJp9JBPkjjahpY",
  "key9": "gxhXAryuv5xGbdzUaPvj69Lf8G9nHZnYS9o2PqKPiibx96WbzUgcUDpUa8HUN1cS5C3YgVP9vHasvLxeLvPXopB",
  "key10": "3tbM9kKTTrj1JJqXCbpQCaWvS27Zktu7LDMpRFBf9MZTfKr47mFwz5rFdgct4QxZ3x5t7sRdTxCpS6eJzSyRZYdZ",
  "key11": "5v5PdNfhc7EGNVQwqnvyBxxrPYfFU8FSmG3FmbkoYuGTbUbSL8cvSF7dnYqX8NWdQMnuF2WE54riyv6Uj3F7z3mb",
  "key12": "5hpabRY2MxDNEnNuABpNF3Ww4xYRPgiXNYytrTDJ3VXKDHsaGoqVY8ntQGKcv5Du278F3RV2gim2mmnhcCgrLJc9",
  "key13": "35jJZ9zL984XLwLd3YAFuScxA6Cnz7dgXck3gswrMCP1thYTyeu9zqY411oijFtZ6ddsV1mTMQYUjgfScJkviAZz",
  "key14": "3gurL4WrWEJJeDAtipKFVwTJiqSGvtoWS5Webz27Q4bvc3e8W2PuT2p2mqbcYCL4Pecr84KAzyp6WTSDa6EMeLsU",
  "key15": "4H2fupqJ5idX5oxfTeGHPQYxVg4a2iuwvpfp8uEx8zstRZcvStVKgYYRnWbC4rMoQZZZXb337xswKYtr3NSTigJf",
  "key16": "2F5FkDxxkxPL98x1ZHsuZhbdESZqzttN58aag9EyihUCJ5ynZBcWAmzsTQ9TBtYxGLw1vposPnZPk6xhoFS2id71",
  "key17": "2jpUpMnPMPjuezUZGM1q6UW3M8GSuqwDS4uhqmG2DF5AdtLSgZ8xcEvnuhXNBqBwJBHBSkaWAt64Ch7J5Pe3MYju",
  "key18": "2wgf58bcGjzVvhgV6Daud6saXyD4QBYKtWTwHuFztVoaYR1wDR4869UzgxdZkBUvjYED2LVD5wPVF3r8u8YGib8n",
  "key19": "2K8jvJEcSrgcBQJazrMDRVmuRu6ynH1Tk1nVeUv5F8qS5YxvnVwir7ruCJvASi3RrQ5p6EtKFpotZgQQnLxLVbdK",
  "key20": "31s8GzZJFL9xVgn1j1pXUPs5u4TKkn4zb6DoTxLqjpEEXeeKKa6rBEjZFbEtm45HXBRVWzLXG59T87yA3km7NHr8",
  "key21": "48yfUk7y4PVziKoRkWu7Gf33n7BKmwxgFczk5BAGcfquWhXTQxbSmbhWsGWRSkLF3aCoJW1VvdL7qxboovgqGMpU",
  "key22": "492M1Dh8WFfoZQwJgooUqpjQZDSocWhrCUxEGR7r6TzzuzsSkWm3JZNdm3xDivDaP2JfRSgEp6QN9KUpRp6athnF",
  "key23": "e3R1odonTSUDFpdBc9yMy7ESNqFy89YyvLwVK4CKfbH5MQcx1qfy6YZjDDrp5uFzCtNQgoWtFKqJxZZKY1DeznV",
  "key24": "2wXedgAbGedXuRLySjGcqE4SqKXNnjcnqvV84rUzZX1gyQoVrzERJXPP9SPiMYzdXAju9o5MuNZftbhnHVnxZK6K",
  "key25": "67nWSvAGhB8Ak4JJ3qMbCrTvGPEsX87PhJcwZHXxqkQ9tSRSwJERJkQFpPgSKvBcLEfbsJcp6pZfK1Trq8TTVMkx",
  "key26": "3rbJxUBXWNKtHH8MpsRjpaBdcnY7VybaxZFbJctQaa4FjPsHgiKY1WVovhuigu8CX9gzBqXihjLDoYYVfsGAF578",
  "key27": "2Gvfx2937SKYN7K3XFwhv3AgneBLG3G1pbxLA7oAFmMp7pwzNQB7jUErLgq5MGPcGoVjEGU1qfy7DbdELPXH2KgS",
  "key28": "5qDmDq4tVZJmSZReGoANbDvcKj1Z1GYjDeUVksRHfLWin6jNjerBNcYk6CaAVvpyzjLQXJSLC6cVnjx7gAa78kCe",
  "key29": "4JPgPncM6rtJuxejUbd7UP5FMqX7godfTsT9eyMR1G7aZ2mVTYUhdhb5LNiu7MUf1KtK5npVPw4jEsYGJ6oaDpPD",
  "key30": "2Pnt3PHRJCJJgajdxgiSL8bKxqBd8hGKL6vq6cwGGm9irCFkAHkFd34F9AZb6kTiQeo4fHsW5LjSn8NYWCYQt1kM",
  "key31": "2bjajFhg3LPvHDe7WayYWpcgynaE6uPEZ1f5J3DW7xQAnpRpeEMXWwF96Eg6RNsgskteSRkvmNU355ysN8bpwbq4",
  "key32": "TGVVPX5YzBEHvSe5GW7jaEgHeVpcjH2nBtBKatKRuAGEEcC4CSn3TJyEvFax1DPd4fzPPr8jmdg2LyF8YKaitjW",
  "key33": "4SeHR2MJNNBL7QP33ar2uCiNSvMG6K4RCCdF3R5QAujm5dLxxAaH9LJTbVBFppxSoocZDTuXvTeK6RdHm97RApZQ",
  "key34": "4AicCnFNyCzkr8WdfNSyVrP62LHp2ybour1KxQvdoYbpimv17igPVfFwsRb61uPXWde5W7d2n8D7veYUQG6JGPUi",
  "key35": "5NtpyoxcsdWn4iWRUdVzH7io6gryzrBDgkPTNpL7kw1PEy65n7SRfcJDrEgp9sHTUWTPtnPLGaq4abD7wUxvdU7g",
  "key36": "cPZ3Vz9hFDB8qEJesDcP8LAiAvMBQuRkPDynBWUm7c8FCcVxrNgrCZsaBnrMToNmW7dDWznNzrypchXLN58Hvd1",
  "key37": "4TrbDXDgMyhVimCSYZUsb7VP76ozwFKQRCu9VFnJwDNgnxwX3iRSrrjuva8sCCh64rpBfd4hgJZ258jwktWspX5C",
  "key38": "4JxLmYUnKUQ6eL5vohevdhrEGjNRSFJxE3mxXoW8ZfoajJstGdLs7NFVWYrCtWccUhtqXiNWKFUR2r3ULMc2RvYP"
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
