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
    "5WSHyrLaWSazPdBuZ6ZJVW2CPMBrC155WtSYzcXTh4GEJ1HyQTPyDmei7tUqoSNKW4bkv9ixz57n8RjVaqEKyGz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZtr1mxQbzBeAqp7E9qRvkcSVh6S3ZjmSAhCw619viXKBxxKhcHhvRA2JL1uw5JTPzh6TjQmKtEJ18CAscBGV1Y",
  "key1": "4qsbTD15V7885z3BkuT5kZv7erPBeMEqZceAckp42xVNPW7tsh9gVSLCH3RLmm3cfbXdnRVx7pfM3kW1w97HxtqQ",
  "key2": "2aKpoDiABMDiz79xq6HSQf21gojkwKTnDZRv5jFmP5pFNGDVFzjnzFEuCAR5su21DHM2KY98Wz3248KuSix1fL7W",
  "key3": "pgAXGFPisYAz9UkQEsY7XWTPR1uUYZ3RYdqDsxoPuvYXwTUNDcYziYiUNRcG1wtizuBpVHuSBGV4fkKGGD8huBy",
  "key4": "5vDbWv9j8tJLFJ355SnY4TQWKodsRJpLj6hhXvuwMa9PcZxwHyCyf7P7XtH9hYHvbLR7ZyaNzw6GvcR5pEaoNKAc",
  "key5": "5AJhStATqGbqYYQE3qBV2yjKmczYJHrpCe1TMQWuys4j2cujYSyBjUUocNf7ohxEyTHRQKqigdrJNSEMpynzPJG",
  "key6": "37iihexom3pFojb8CHA6HVCELTPDMbWvhxMsywFVE25GkJPZMUAkGbckrtAuwbJEMAzkNj8JRqTBfQuBUucNdRuY",
  "key7": "41s4yohnUQr2M1ty9zKXhWJ8NvtQqF6K9wPuLCTBe7fRMZsd2SAphRcidCujarem49XVWmjTpvfUtJwQPNMXj5at",
  "key8": "3DhhdGkQNWGQ2TcHxejACee4MSrQKaGaddbzgLuoqVeJZvmsWak8mxYDgptXm9jbjgETdfQS9CGiZXKvwKgi2tGo",
  "key9": "jHz6Ab47eUn7L5PaHwymamiMj5ZS1njtDBN9paEeVb8MSmh1pHYkGHwMM733QmKWzdJp9TiEmyoxo2M4QmLodcB",
  "key10": "4a3vsUfzLMC5H6jWdWgCkNV9YbqhczhPtdnfQh2cBXbE4Q9g6YovZuz1Pu7PJX2zpEYZKYfvU1A9K7D694rg7XMj",
  "key11": "bpVeqPiFJn3LSbJX1hJzdiiDVJLu5Hj5czpuApDhoxJHPbnA2FWLCiRv7tDRjafb5aukdk19t2mytEBymguGM7d",
  "key12": "2UY1huWUdB9cJeV3Dr7e9WnSX1FMo4r6a6iZY68FMZK9NUhQfKinYZsDyFdQLNC9jm9RrhC9mqQ5FaMo3xc7CnSZ",
  "key13": "2ZqHEtQczJdYe2uAPjWLLiewBX2wrgWoX3hmBhE4DgaVTyKaj1c7nPDUZ1Nsu48mhGMPQn1hhBzKhUaTrucuzVqg",
  "key14": "5LJJdhPZdpU8gh7P4n3tpWCRyamfZBLEf5ya3J3qDkcXMi1MZygVa26WBphEVCBzimrznnix1cf2AbpeWmrZDwhe",
  "key15": "nkUjAf1Xb7HWREf2PoQpQrJjgxmDHr3WvdNoLmcYpFrWer1YfT7HUUsY3KRPEAEuAEGoTwTLyWowJR9r6sWaHP1",
  "key16": "61KVsttPh4xp4gSsd74cP9643Ud6u2xVWc6WT5JyWyR3cH1VVc8FRqNQ12Webf6MwrscwVDdEpyEL2hdSJyisUwD",
  "key17": "2uEATVLZUmdG4RQCuDNrMYpmbzC5xVch2hdnjd7GXFURAJzQrqSkeiR77ZfsbYM4T5YDGsjZtCJNPAJUez5DNsUy",
  "key18": "5m9oRkG11EUU8QC2XgTpvViGD2bwkGJtRtaanXmaFZTt5njM7oeNgAFDgY3GmUHbXVbty8wGFTVrmawLpFFw4X9t",
  "key19": "5oU5VefNnUHUJRF4VVqRK3ZJ9v9EoB3LEvXq87nsqWNQu8jmshBFz5o4m1eV3D6prEQEQvPGtPcHVKcTxE5bczEV",
  "key20": "2XC6n6W3zZFTGde17ghVmTVBJfKNRi6yVfmaZ8M9h1FHQYPm8i6tTWr5zEG4nAYWa3zXxNGe2sPeEi5aL4t4VEKt",
  "key21": "55c9DQKGTinLPPTBJEYHZiagD6FoWriJEs61m9G8BRpSwAeLSj5dK7NzVsBnRtRTDwWxVQsBUzyHwPBAvQzbjhVg",
  "key22": "2PsovBnJf1QfgtNAxye5RnT7ZtVatqZJMeWvE6YMR9GNsRww1bHGtqxd2CdEfe1GgouvcF1t7gg1uEvpQWwu4gUn",
  "key23": "2p58SgAU7MfFus3y8muci2F4ZjQFP7HFucGmgB9RvUmAdyQroZjEiNiFPvDittf2WFBaYqtrc9TJuxejNZABYhiv",
  "key24": "4yaMy1cybYFwCLxkGnEXTguGHpBwxEvygAfyFMmfn1EJCJWCMmYVctQKm5WY59sbH3G8WxqL2v3Hr1j7ypABnqKc",
  "key25": "iGRoz8iqvVp9pXs4M52TYF1KQoTkhEmgW1cXjFwMntou6ieeCJVdLoJeAhEMMndQKGVrijmyuoPyjHKL4KsfxaG",
  "key26": "5xjefdzjHaqQRhpWihGQfn1XxAXjR1NsVeSxwsDteNqC45JDebsR6wVmwUfuasmeHF4Sp5JU39KnGdAnBUmAgJEU"
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
