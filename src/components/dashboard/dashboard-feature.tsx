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
    "51StH9HF4LrcdHqrJAVNaciZsLNVYfuBUx3AG3jw9RYhdTg9jXjMbuJehTKfCDuE19mPKpCibCTrAB3iADTcobuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AqXGUxsXTVdyXAYJhAUae9xBti4PaXQE7NHv3kMQqSyZGTdnn1RyxpKPMuCF9uY5a3ExbcmasmXsnxeKavwLhSn",
  "key1": "3wpMxMMNGoLhR6CCxQkac5upapRP1QoF5ab1HeQL4W7J1kozDTcNiAR1vjMTG2wF98Tu6tKwWEsq6VZmVNNtSQ9a",
  "key2": "4tsZLtftskK5X4ZHiHjndGrcWhTsJNJ7eyzMxHm19sT1WJAWSsTqUc3c5RFfzZhx2AzZv4SzyehPkB97TAHzeZ8p",
  "key3": "34XGw7TSTRe5NwzpPxUa6p4VoPPvS3SEkdQVBtjUgT5mhR9qr8vYmSPGKdmVyA7P11meb32XS4fF74T4NnGMczwh",
  "key4": "4ffPNcZAtUT6UcQVB3msdUGkeq9RR2kmNe4ivzg4xWbRetM1PzUT8yAW3AwPjow6X9PbwNPtHp8VNZHX7zCc68wn",
  "key5": "2RmJNsMVbpuKYdisS2hXprbFWdo94XVHANbiRs76LHQMJJVtpZknoZfr39aq5ZyEhQyNDtmEMWETLkioHLL2PyHJ",
  "key6": "5TkX7gitNTy6skv9tZLxVH6dGfwjUYVoeYQKh6pU9WeNru37FTpBrLgxP9aA7YfE4HQkSVf2QiGE9oK7hu6WWuTd",
  "key7": "2D7XhuTuL8fAu7CpTaJfBNY3VF5Gsa7eyzRGUX4qaWYNN463YH5LudYsCJbijDT9kjgD5fCXb71jCN3myrjW2hF",
  "key8": "5LXEKkgsw1bWJTYLpxYZUBpMV5nHrC9EXkU7GyHmsFZ71Rzqbvp8EYHHxQyAXLnWQH5LZ6L7gJ8mZ8dVDHRcjbw4",
  "key9": "2gYQjqxFmQvPnhHTWJ21e5KmXCxr7xEvS1PFSYCKnwcycdqWMb5wHUSUPVgHD97Qd7iNoRABWQFRkWKrEkG83Yim",
  "key10": "4pk11QWepcrS62Hg1HC5XERPwBE6YK9iQdkSSQv2jzU4VQCcRBLxYqsuwc4Aei8AXceDTn2Mg4vnT2sudPaovoYJ",
  "key11": "5X2dkn4srVKbj1TKWbisBekrEiGp7xUNaiGE9TZvtHTS5tJvPJ3XZnaxTUYrVER35nf9FiPNeE6CfDP6enPy6U6E",
  "key12": "GqY44h4jAyC9zEf8kjh29qAoGfj1pRuR6YuYfzHaj6wWPtwU9G3jmrsiPBg1uHhXNM3ToBPdY66gRodY9p8XfF6",
  "key13": "3JPfM6uC1E6wTZZxZaWfsXpvuULwhy4f8pTjjJeu1akGrpH74V1ZF3DtDfRDVouNiByBirjAbucry2VCG1Apoowr",
  "key14": "43Kjr9mkGTFRyyfE7teyqPSihhBFQDTinb93eKibZ6LitRGWcNk6nd9YTon6NxVgt6yBvFZY8QfJtcFx7CSLkpiV",
  "key15": "TqEkhTMC32fY8rCvPGrwUqkbcomdmPFyhQGBHhRpiHuMbhjcFWraaqj5wgmxNhUguR6GkjDCXzYCAX3qCipyG8A",
  "key16": "34nLbst7uHWmN9ot65gdeXLwTNBKx5Xtz3R8kR55P8uMpJAa4sgH8CQBPhvdzMDLW587Zhp2YV1QFUFnxqDHrxAF",
  "key17": "4m4pEAdmdaaYcpdWwQFX2cL5aQqziNvhHifJw9Yefk42nWqWseXAy79TkK8wZq8DKqANgtZWazoVY6UXGGrzs8Nj",
  "key18": "5n3uUao7BrRLuqDLNZ6bMcq6RAGYJfa7pvYZibDtAovFfRcVMzNR8dgjMn6Wj81LeZvioPShngoRSUEfPQzyzA5W",
  "key19": "3DTcYAj823aFZNy4Whdn9vVHYcFrkDkAcGg46n91XKco3QhgkchqKjPNHsWr2VfzoMhgo7VhfnFhdtdvFRhYnZS7",
  "key20": "4qgDwPCpQpMMYmX78mDb1oB1pjwsab1j5phuiNVbrjBJK7x9cZMCt6bwk69aojsgDvqvM9oDvkvRVQkKhTsU6wkF",
  "key21": "2rbqiHb99wt9wyxjD8Mv2LsgrZGRx4BHLKLFtRHdzzQQCrZzMbBfLU3aGVcDsCGhKJCjpHF5LfbUtweaLe4FeAog",
  "key22": "5n7VaamDbvNRK31PwG7vbM9TGBFLGuge798CJtLLRuw4p3662dPsbkaq3hk5eZJGDKKgirYTLc2WgWpAWcaTtLxx",
  "key23": "5N9xBqwSustGnCyd32HJFvksNosD2FguLFw8kkgycf3o72T6XERx4gc9782h7hHKyG4EANSmrNrtpaFkwFcrbenx",
  "key24": "2X6A5yEW6HstzLbqeev7zpUwWotYV72Dy2udyGXYAKi2z2fAmyyB4dmvHUKbyxqD3YxgZcxiYUhLAHUbJ8Asyx6M",
  "key25": "4jRZYCMZttZiuQYrS53pPjmFk5iWQr5CBvSnk55UAW1FCby9ihDtBcsCZHaNLVz9gtZwRXBscr4RoiiY3JxMSdCT",
  "key26": "21ryVCfv8XjypJADGsCxGu2hprBfzQmrfyNv2MquTaSpP7yBigToQXAx8DxwhQrNhj75K3fqfP42QxYdYt7YxhjU",
  "key27": "uWg6aVNAZyNHbMCDsbmdsuiAs13ae6ZSRYvMcDBX3E3oMePVK3Dxxg9pyx5RFWdVPp3hYF4o34T7s8hfmjbGJ1E",
  "key28": "3nD1zfbU34XvZpc9f9A15riYG7AKFyem7sRnuS3YkotG2q74djkcCyciewfQbCprjfGVn1gxsuE4j1ioTpy7qdZF",
  "key29": "2E7GTjX4TxSWjSFUGXNSLigrGZTeZ6vaejPfECUq8EtNFk6jts3jLkkp3yjEQNS1VJUXjpDcfJVdjQTQkfkDCN5D",
  "key30": "qrSfTdqfi8k3VWFkpLpMKgTZCqaAWFvX53CcHa9Wa2JmWGh1RXnMF4gr3cYuQGmWCMyjKSr7uZTvbbG6E2EQjBu",
  "key31": "4C9wTDTKFPBWTRuy9ErdbWgKqSkazbw3b7k9VswTCjDnBYEPW4bZBQe3LXeY3U8aMb6v3dDqdG2yFbAUNNZduQuk",
  "key32": "2T7AkzYxw95j4Ya32FmhnYKNUUEFhPmC2cCXPNuZPxs343a6WmK4CnEQ21LMUzTKp6SCbc6JhsiMyQwpP599Njob",
  "key33": "4WqeT7x531vK8QbK6Xr62k5dcB2a3XtST9ULY5h3h3UTRo9Vhq6AzGrFpVpozgBguAcjU8qaTpNYpuGjyTKUEi5i",
  "key34": "UrKHpHuT7uMcsxNwSGNnNZSs4oSVGF3RAPky5F3VsPzxyhu76FTi2mnUmXAFCeDPzsqATLDm2J9QzwN2fHutQ1Y",
  "key35": "4A3rPyV1R2w5NmVVEvCR8ELiLg8J6xQugT65gisuV4a7nQfxe7k6Qhvk2RnWdUVwYEzHur9VxJnBzfsm6BvsGM4E",
  "key36": "51iXAHZHQH1Vz7ba1JCemygNvXxKxU8M95V2SRDu2j7GHDGqtDUUu1NJagpeCXKGv2bNugq4hB1Nh9ryMicBA6Bc",
  "key37": "QK3JxZDiEudk22BkMzArskpPJdG4nacASLEXDhPPWsSf62qGWpoUkmJjCq3eSf3h3wU1dMjkDCm4F1BE8dyBtgn",
  "key38": "4S3mab2EJ7F661qiCQEE6NNWnwJJ9FAEuWKJ31mHHHZuKCdnkJpdMQ8rEpbxKiRnhUpKLjdC6wd8kU2JM5tf4yDA",
  "key39": "2fs6uYz3SbZFE34zjXP3jvnURgp4Eb3wAqEoYEq7hxSZtkVNVyAc59NKtUYyg6qBiR1n63DMQF5FBYRXcAq5ABvr",
  "key40": "35wpgLa3FiMQkoYsC5LmFVWUGGycQBmLPftmGvkGrDoEbLZsmUjhM5GogtLCqam2D4dahdnV5phxRnpujk3aoW3K",
  "key41": "3tjUNv1U8LoDdhongXsmPK7RRxgyDbhyHrqDxxfMdmtLjxrRx3JwW5q3h9g3GMh1j7YHp7MrTuxEP5ndaoKfSFjD",
  "key42": "2VCDWvxMdaVkQyPjNdtP17YZEATNrqw6vDm5RUswNh1CYfv4nAcBt2vQ8trsNHepFiyv8MAMgeqhnX3mmkHzedWT",
  "key43": "CeXSYQSZQGJSgR9o6NdcxvTZRqReoGw2w4Rne5awDmSbKhu4QFXXqqdka5EydmracdU5QU7kUhXxd8TBoCq2kX4"
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
