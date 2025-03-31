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
    "8wMQDxKr5z1WaJSN6WKa44aGhkGnfHxvJ37PiwV13u1YjU3AqSwmsURNeanJM69tUGgqRRKWdVhL1NKUzuKKpxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ryKJk8e5cgpqkWKSNCUrFRbHXPNrbrYXjunfymUWt5VJ1CUMkmzRJBpy8y7wrh5jX9z7TNwLQeHXVwBfjhvUxca",
  "key1": "QG5ZMLR11DTHfhNB3zETNpBykfvGA4CsZHBj7XcYY5DXfqyUMd4b7LLFEQX5GGnXSBQbi88L8HFRYFcgupnhSGb",
  "key2": "27PB7zvNabbv1uox6dHQiV88L9raNfQZjxWiucp9UqQEJTHbtFr8QwZJ7PjGUxPFinYaCDvscQoq7DbdedNcVTdy",
  "key3": "pdr3BYm2JdCuM7UAEFupVDKf1U3XQT9Y7HA5QswyfbqTXBwaCbYoVuKzHjLKixfqbCWHDfPVyf4PX8jFU1EKp7L",
  "key4": "4kJvw9JtG4SBKeXRdVmtPL7g1pD9yUV3UDysKfFjUMgrTjMU2AsExL938WawNjxYrJim8D1eustBjuPuLBYgP3xD",
  "key5": "25XFPK5erRACLVQzBNqarJMXiSHo4WXpNDDdbbBJcoiPWqZcJR6jZJ84fs9yrXFPpaPDjW9pKpx8z4nkHo5imWac",
  "key6": "3BuKpRHg6VicfQCPtzuZHqaddPVpvuatTY3Jiuw85gyUdG4YeCaV2ykfttSaC9z6sgikv9yJVndNswJp9J4LKkks",
  "key7": "3jyVhgUtzttUAkB9TqyZXB8dhjM8SZmY9M3gQLsH6HjeoWVtA3zZrvW8MTydefXSy2jwbyDWnzN7u9dY9qbFjcSZ",
  "key8": "5kiNm816DPxvcAmajefZydNqBZrjk7BpXJ8tTcAJYL8X9kw8b7JgpSSEtwXSJxE2jaix7SZyeyyWsxLEyEyvTd2U",
  "key9": "5RitQJmX9C7ZGD6zJb7WMmyVMUF1x5rSTePtkv47jZq2Rv8SDQAJ7E8ocKMXdsCLweXtkuhxmox9CcLEgQxNswMT",
  "key10": "38nLi1tgQcfJ61Qg9YP4teysoNjQ9qnqWDs21H9iQJfNYrBPNbV5woBgSzExM1bjz9FPWbWmhnv2gdFQ7ofUxJ21",
  "key11": "2HL2mnga53inbCuzAU76i2EQkKAZ1nPTfgvH8kv1jGGuoS2eYrbHU7p35QzDZpWgVyaYQapfLLLc3sFANebw9pAs",
  "key12": "ezzdhLUB98kcPsEx5vYQWkwpLXZPrWxkZdh4C1wQ7vqRvubHxVRM3oRinB66wQCWZSzrAJBgKoDEGbk6XycJoZJ",
  "key13": "3EdbrLFnmWX2b6bAMe73jzkhi2FBRSgf9V2EAx8kSgTFwBkJVkEUqSTv8uX3t77Z3KDbfccEYhT4taTvwCuMsRDG",
  "key14": "5Q9riVAEoQAuMD2ifpg7aTiX3GdtsYFKHY9uhRrVtzKTyu5Uq9aRUXwKFBu3BbcUmnoMbv4QTTsPfw3H83QByL3b",
  "key15": "27rBTSogS5LYg5RbmYF1wGDXuDFsFf1f6WRo7hhfbQCAqwRHVC66hFYkqJZtAKipUf5TvuFUqwFrnpLQBxTEcXDH",
  "key16": "5PCA6y3geUJncLxXTte7mMTh3mxGuTXsM7WqnSKhYveac7r6ZeUf8LVDbfpSyYrNakz4fgoLcaMAhcrpD4dPyihN",
  "key17": "3cuoqVYZ7JZTVBibsmwqZspVuuUTVo3S33Ro677TzHpqKiHnCdwY823ns2wwwXmEHEdNT1xoMn7dT4iLJQ9FHKGA",
  "key18": "framxfvrbFYbGtC56t5UduVd5mxmkVDTVSSNhAgbBdh3kC3zooUEgD4MEELDJvJoVcTUZjNxHsFhJ5JGCfRPWPx",
  "key19": "5kvxuUJYMDoYRuUvyahWNjkUytS1JZFzF4wjznAnQCHaFnQLVSdGfVbtHSwxzU2mQUjeJGKJHigPAaqyHFeQfFUN",
  "key20": "2Gdnx2T87hDBQmfwXE9Kwp2KtfbCGmJcMj2cHboa8HdBCBMvQ6jmPtDB9CZ5vm6jsZSe8717pchh2bHazdWCzXda",
  "key21": "2VPdqzV3uEdeqik9wn7UXABWJGD1w7qHHsr6VdLH1XTMah9syc8bMehPe5cb54ynnEMoBxgxorXmY2P1Db8FwC96",
  "key22": "4zjQvLtCCtsCTYh9f1gpFVqytptvVGNftAXv5JSRWGbDj1Y4mBifYdKRzhJ84PX3eZmAjZDuSkqHCLiYdra3ucWn",
  "key23": "4vNsGJKnwgtN9M1wYy2cvagmkhceEdJHKwRCtQM1J44wvN6UmpmyHvBqvajkmTdPdwW31HejNXg7Bs9DtZsGKT1A",
  "key24": "5WBFjeFbrBFNRXH5UiSdpRNRAaSsG7N1izg4QavJA9FRg7wExDiGgJkzTJWTe918YcWysH6a7LbVo4FZ7xD2PFSm",
  "key25": "3ZXQpgEno3FwCUs5XkWAwH11xisiHBbr7PNoCzkt2D3w6bLCUtifuUyDxRPNeqZqJxuA83PmNBze74nSab7iQuRC",
  "key26": "mjmDFRySzRCqcSwni7kRNZ4MNKNNVbwb7tpRFXEviPAFgJ6caNLnqS5briY9fY6KJXhkY87Ax3wVWaE4RShzj5S",
  "key27": "67QT17yuzy9moYH6WraBzB1uh39XcNuS1r4V861vi1Z7GsaWRXo2FSzjdXgtXRknz9zn8B1ZPJCPtLKSUfYVAFqH",
  "key28": "REywe11RqXh8b7HP458eLYgjSobhx4CCEERcFAMVq2ceTu6jTeDKBTvnGkMt6KNjxV5VNdoMSbef5c965WdVhPZ",
  "key29": "d57645ssB4kocEBqaJ99RuRfFQFwab2raNzndUL2hKxjwyw9sdTxmu1SmkTzqjKVzKMiUfeFaR7Upo1HoPzHpfU",
  "key30": "4CfwcFtawjMFkYHhw9ysXQ339pmRf1UmKuNDShFQqF2eVHkdkBtJ5Xgqikq4r4ghY7d61YN57Ag7bbQvRRAWuv4L"
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
