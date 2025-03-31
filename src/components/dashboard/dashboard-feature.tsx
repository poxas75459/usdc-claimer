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
    "3kMmxh8v6XBxC4rqfTZM12rkoehTDFwdL1zTm6LjYqkwhwAh7TYf4rJaS3TsmanXLqazU8BKey4uD4nxx3Zsd3gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izuY6enai3GPHGrvNeNoEWy11p4YAEeGgepp2mMCh9rCWUxycCxbZ8ByVt55cHySxUzQDs6PW3pQwDBFmBY7jHc",
  "key1": "5vMJaA18ZZ27PyBvkBc8Smm3EENj4WoUt726PGsK1nGcExzcTrykLL7EnDxhGzpXny6uwNd8ehXpx34Z3TPaa36D",
  "key2": "5PEw6FiU46aFYYaCJoDuUpH2tu4LDHiNqMwyfuzQ8kwY1Yq9ULr8VE52hGpwbwkvXHx1dAs44YmDxe7NWRSxAACq",
  "key3": "45Bw6iUJ5bDsQnk5BssHimWMzKBKfXJdYcdLJf6jRHXQyYjxbcsdYqwT8gLVUbhHjg41gLxJTsDu77WMZgCBFtAT",
  "key4": "PvoGhQTgNtB44paeSecNiuXpLh7PcjvGGTyqg54zgcjNiAuPtAKrx6Yn5mu9KxaMTRtq6vEKLLZTvPYiSKPAvjw",
  "key5": "3HtrhXaYp88aHRSKf2pBXTzucbQUiCrnAUcXA4p93K4aEoHePT2df8HWAbb374sHAWYPC7oSSc99okza4RMEeGNd",
  "key6": "2esTDgSiyKaVRCuzcJmJZwdFACvt1aPdYAR3uXLK7Kiv8nkYU4tDgxEVUz8u1cDKBcpHevtpB6EJxN8hRHFeeLPA",
  "key7": "62FS4ShNif8ispiDPXJEyhLv7kGV4XxbFGrqTDSQrWGdiDJfkZVY7fkAfZo4ZZifGMVhyKXhdvWGhNkGmKw1HCSA",
  "key8": "5YFcFazTYkwRBh3m4rPejQxdQ8WRLS6yVs2iwrwkpBQqXFTcm29uPdNEwrnZ3htj6QUTsW8fRmFRSxrjyNVFSgme",
  "key9": "53PhBSEAyj1DQYGRihSWfTHCDwNELj6PZdFbfpUhgSxe4Asn5DQ8hnQQYJdj4AqFFXwPv3AcFyt5n8EZsrqih2Pg",
  "key10": "5egsPqVYbBc9NKdCPrrkEYeyyiXypGYJFbGZySxZXQpUaYAL64Yn7woyRCnYBdL6RQTD2J3xdQxAHJ9dwu2191Zu",
  "key11": "4GYf1CsBVUYTj7d21Zv7TVokfdQ6wvcJyz6kSLMaSytjcu1eB4twoByu8BJAusZGuoLas9XR9KqTq6p5KETYf9ms",
  "key12": "5xs6C3mPE5ti4KGXoe9FE3LstBRyW9yynx6JGYJvj8R7CpYQwfsm4kZaSeBFs74rZLP1VsKs9LcMe9JeVJ16BRqK",
  "key13": "33o22kp5bK1L9qA4uys6y8DEfw4eQQytxPTEPs3BMt68ApVUqeSCRTZzKRbwaHwy2XNg4X5C8ujZT8VGmzvgJa5H",
  "key14": "pwFauSFZs81xpoQKci3u5G1owhUEAoVWvPpfkC7oETggMeKmTmH15JDnctibaAgtTXZLQ9wjACstCtBfMWu9cwM",
  "key15": "49dD2RVKiNh955vgZnxVmTxA1tpnwxVj7GwX2GaVyQcHsgNZ3EPW6JES9o75H6riF1cWMxbNJ4XoVN24UCBfKjxe",
  "key16": "66QzUEhKHGpyW8xvASkYy2nDrYY8JkCfVn3a6TyBPWy2Wq4H7u9kaWXAx7vEc9mZ8EoBvdtxVJEzqRWDGexxnfrT",
  "key17": "4mwMGJBhuFTiZvrnVo2oma2SFAYFiSeYhc9XNpp7rajXREDGCtsv5xx3RHhD3b3CDmm27Qnsx9muBsDeiF4svxn9",
  "key18": "3o1TFmLvU4upBSpc9pKCeQ31UBscFHiS5UAHQVoBEZh2CLpPoQ7GD7pS1JgR9uHoidmwW9vnA4cAaXhz2fuJkzjY",
  "key19": "4AUAekqQjG7yn7msVGiHRbSxJR6nmLZL4QM3RFm9bTTTtFhNQ8oU5WAXeBKHxNWFN21q294waycsN96ZNMfKabbC",
  "key20": "3DUYZ8j4ytjoF9R6iMwHBWGi4xYtqtXSUQV2W5PXo9mUoyZmgY9SYRhzskLQDw22rFXWLg4hTkXapojb8fPTuLH7",
  "key21": "kYx8ofeL58RvRKHeEyo8aU798Dt5Mb96cHjZNR4vY6gkXGyonHMVcuGktSSAi3WLksTRpDWJuxU8pfZercqyp78",
  "key22": "4mDWJArKPSzDzbKrgJxBxgb3ADaAj9LTXDqzPHMS28FYnqyyHwhJp8sGvSkAN1YbpbW8p4tMge9GLz4rhoLTMeRE",
  "key23": "32wAd4enHoYu9j8945nB1KrcDUt8fdRSKLjwjkoccQmE2666b54mPptScabGn4i8V5sunMEzCnrvEPdmn2xrrTd8",
  "key24": "3jECTZqt3yfugzh14JB8kW4mVVLMLycjn31bYYE6Ehq5iwm62ykoeUveq4HWN9YfpvqMrRqhV2eTYFk4WR9JvsPT",
  "key25": "EiKgjAarWwra9vujW1wdPseVwLNSJ2rAnieddiWbjAjyDYfYzyfFJNwx9CuqJ975i7CX5LiqJdza7Y4tEWa9mdt",
  "key26": "4bxiqE6tefErpZWHy2NLsrqYpckrzmP4rFgQarhixRXo75Fbzzvnt9Uept84JyMET3Xjwn4vCZYV4YY33McpRUpK",
  "key27": "3GuSSwzgaERyuq2VU7EARFah1muwUAriigS52H8Z6Lh18w5SPLPy3KVx6MitRtuV8zsCjizMV4kdBPebw1BqPnPk",
  "key28": "2xafYK171qf3zhMk21CMhWoDb8w3cDpvQv8KKJpLkik12dUkq9G2xsSJxzMwPjq8oD64c9HDdBuoyfUzHJEtPk2d"
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
