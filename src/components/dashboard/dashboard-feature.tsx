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
    "2PiSZMcQqG8PpRN7K1kGCozMmhGkYEDZ11F1f5iMKJdEZoHRaLnnb4CxQ4DYNqsTwhgaTE8uGMX7rXRGPanKtBnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34LJdEPENtQNzBBqSFT263fiAttQBrMwEPNwf7xNnMcZwsdmJtedoUCtDLrAZnpetKqwBkB81LhHKNvNq7s9JqAh",
  "key1": "3r7vhspe9yUAbuoiRLCtuQNfzdWoSCVowV7beTGgZxmnvKEGnDvwZh7XPuVRoFzrkKUYTs4daUxgZ7RUX1SymypX",
  "key2": "2y9GetA8iSDHRTnBrb2MyB5Lw9g6rKsCGKF7QJLyrtzNf1bdAzWfe785iJc7uHunt89yaYY4LUMzaKRN5mHCVh7B",
  "key3": "msTRbaMQpG2iQmtn89vzMQQneZGFQqB9hgmMQX7o7xUiC5SBJCPjrLRsp7FnmcUB7GSPPJAcCSbWVd3xeQaviUV",
  "key4": "2HbdR7jaCeMoEoEvV7mc1sV3uyJpkaKfGxaadTb92omhxSBL7Tf8p4ZWFDso5HocjTNjnFGA4HVLwzkssP3Noe38",
  "key5": "3VMQhTg2EBo3DbF7yDyYGXGx6ME5Dxb37PH38MCHAtinMVgB9VCJhvuBmk6JWZ7n15ZCYyFcPxmfNMaFqvp35W1Q",
  "key6": "WmzfX16HP1e1CkfcH3jCvjxpFj6EekGHUgdGC5bp87Mn4MhWZgeCNg7JwVtdELtWE5UcGca9YQShvLPHBxdGMQz",
  "key7": "2MjBvoDDTEnd665CqKas9aSmB9FoeMzRy8T56a2Rbp9e4RHkXc2dxhQFpecNg7HN8L5yLC1QpL4ZAb9mEnRVrdUo",
  "key8": "zFrFt1p1tPRx6B3zFu5DPH1L3U2uyKAcrPdPMhTVeDfMTvHLEbjczRq5Zo8ZsAfW5K7oZf6H4HpKbv8cgWbG3NC",
  "key9": "3eTe7yQrieq6cTkC5GuxCKsu267V1PPAFPrw4B6kcUpGZpJ1xjfrv2u8w9b8Zf7z5FwRDmm3kQqnU9bZNjR6VCzp",
  "key10": "3itHjAHANix2dTRJJEhfAZEqs8z1xLXfodfh5yEQ7JP48REe63whYTaP7UaLSzeh5KDY1on658aPXy9kZQ7D9qth",
  "key11": "fHigo2pVTbGmwVN8xWuiMBVbfRtScKJUvevaKZU3AoWdtdCLfWrdqwdLWAqBtHMpELTLMoRppDS754XNRpjxa9G",
  "key12": "2mSgpD9PGZeyMEJj2SaaK1g3MkX8aAV47q4ZRNvdDgg5bay3vT3WCb6ag59XbHRk2ksUEbWRsTZPQJAu1JXEBURv",
  "key13": "4H2fbo4gzZtXfH7DRDzEpmXmZtX9snvjCgwxQsPUggRnWBqF4QwxiLxvXDgbvfRjJ8979PjshPphmm98aigXMj6d",
  "key14": "xN6srT1s5ufWDru8BVV8Lzpj1H5xPPQLS93rmkshYXAdGcrsCchKh4C41SHQcwefbFyhykNDeuUUmqCsoDbkmzV",
  "key15": "3DgmQJKhS89ifcD4gku9LicYGFS1nnPSYf7aewxigo3EpyHunHrj7d3R9exgDWEHiPYr98gVXJDNjEkAhp97BnEg",
  "key16": "22D5S44u1k9BB5dwYyWhaYL5JFeNru6xvKyaiSqb1VYaUa4MmeFx8fzq9wDbwc2ZW6CR1kG67shCSsYCEuijTTzX",
  "key17": "2365meGHhxFoY2vLdcGbB4wzaABhD3vtWdfkrg6SvGfQYcCiEuq2E7o2MUNEYjpixSJdKG9JJDJ9yuYLLsJs9PBp",
  "key18": "ArKbAXiZbqx5vvgUXfqvpc5TkSTwn6Qh2R2Mjp36YAuP9pVUH2NXt6j4pwgbRGy4fM1Mwhq4DscTqijrNxz72sb",
  "key19": "4rh1L2y4MpUvL11nTBDHG8tVRcVhqtJFZY8qUDK2gN1z37ZcXxEJuZpg1B9SBWVxhKNrohFsZDQQJm8zabvEAvQ5",
  "key20": "4Y21UjKPRRDFBiGTX95dYUb2KmgtJHVgyD9ipAhuWBKMZRa1cUxKYaAvszZHtRSN1VyBCedQGXvQbwvUtAZyHLtK",
  "key21": "2ebkYAo2aw6yTk1Nag62UTPwmnHeSmfop1nU9VQoiKQhF1qkxngwDY2Gt1QGB9oTtzZcazv4nwQZcDbtf1uzomg3",
  "key22": "5bpdrd3xrgktUtHufgEmB1RbsK9awy7aQvEwGsvP6WFEtbojNzf6ba2gQtxxqSjXttp8BafQs7Uj6ixYVCrQVmWy",
  "key23": "3ndaPJLAzsnCD2BYAaSE3eMLCyYX9zFrFbR7r3mr42SEVbE8KF5oRvYWJRjkzLzDoMYFvcWNFc53SuFT24XrNJTp",
  "key24": "5nAhsUTnEyunXdBV1vhbu2QJQ3qTNsMuvTbZSY58GoMJ98SbFS61yDMxg4toGwATMgWsVxuJ5F4XSQUxHje6D1nD",
  "key25": "2jQ351h2oWczNTSjTQQm96qqCx5JaA6eTFAPH72kAVZaMwpUnKQGMz9swYWnuEDH7mzkRsANqt2bQfiwpsvGkkFP",
  "key26": "5X9reWDtp2TTxQqmDD3HLiPmcFvWDkPgGPeDN2tgafYF6cL9uwFcNfG9ydrzyHoahnMQemNRk8RGvYuxDSUjmzzg",
  "key27": "4pBc5PNRCtiriUjaMVo7a3tQwzMhYQozFRK2CuQFRUJUTxDy7ukasxwMacX26CB31yFAAt6Q3MvUe3GKJdJdbjrb",
  "key28": "3UU54zP1izsFKJ4jyQqXrVYxg1Mv8WgEqm6v4KKr7Sh5t6kJe6mgQpgheSHTvq3FvJFtJq7aBFmH9Hew1htGXJ6K",
  "key29": "2pH394ykoUYbNpvUgDSzZHv5cBbz6TV2WfCAdM4vURbAJYyTZkSNnPkk9cocSkaQ8bCyJLYppG3zrcEHtY6WrhFB",
  "key30": "2ExRDLL2Lq35crk176ifuwAiK86yPwVsin9V8ndcFpfwQ29v6afD4F5QLhe84KGUcRL4v1nNoWos3DbZwVaBpQWq",
  "key31": "2c4bZMX1k7e1G2JpMvyjKwUsqdco9dMQV2F27z8FsvKUKihYHkEt3Er7kkXy4xBogss6zfytnsoJuxQjMPSrsw6s",
  "key32": "5TEgh3VnJ9GT7dkQmxxEmnK7qFBweiHGJDTt99cTYjcdDpjFdHrKtgKpeZzQuiDzrRDJ5v4dmebdCMY7UCfJEWqA",
  "key33": "4e45p6oVsXXSVzAXirKFNhzjyKwZDczAimPvV6wbZ1BVZFJ2CrsmFN4yPbiYjFTLNkET55dn5o64YY2RWzTpEtBR",
  "key34": "cNKQop5LGk7q2oDNosVCvv6fuY8GPwt6LchqWXHUf4Mgm6yVrxfcjh5R6zxXgVHeULG2ebUCFEu1RXd8Whb1qw2",
  "key35": "5nai7XPqU8oL9aMXDFMBgPaTyTLsEJvETUT8UUMTF8rMAXBzLvX7YGxqqbXpawsefkuYghtrTMGB1NTMtmqH462u",
  "key36": "3177NFx3i6SPNs1LehQdm88s9NPkrftt6K2i749ZcJTwEbq44BXhHvZENRR61P57EvKukf2k88yZENARxEjKo1jd",
  "key37": "47wAfpXzJYma6bji1Jaes4kBBLDbHEj7HdpCz4iZgw7AX6Z1q75NjPMpNUKFscUyjYBYTGCYvdjPVDFu7ARrM61q",
  "key38": "2jot8t2E8PvxfqTnbVTHYV9Bo2yi5Wr7pGr361toSeJfoPTmW9ZHn9yvQCjT8NFvUQ3Ud6TjBL5yi5Qb6REgLL8p",
  "key39": "4Vi7dVsR8oqkoU2NPEmr6i7YQKChrNPo7vfs9SQ3sGW4gAqAjfMjDAEzt36SexCAcSm8mWxLzF4BZaD3ibXMijEc",
  "key40": "2NrssuJTAbK4BAtpbejaaaXjKjjbzdaymytwLJP7qbCYz3VjrQosm9LLbjDeuzhPKhbS4Gd6A6VmiiRnTNFnNffo",
  "key41": "Ut6RMH9jiYKSYWxbLAmoRR7qWwQroTSS7bUYGvRVYdez1qq9pdUN9e7A9gSEimRZQmykcuJ2GhpHBuGn4Kz64zJ",
  "key42": "4ZmVWHsfztdu6C41Zxqja5xvPJWYDmg2UzTVwLhrn9bVwUMPHMu1VybXN1M8XTAkLh5vG1djmdrrQEKhjzZigfkn"
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
