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
    "thnHc96aG2MM2uXRjL9uukdFvEbhkenW4YZ67ab36C3SBpp1XEUCpw1HiM8jfMPQ3rZZ9W9i4dcCkwTwRmZDQWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTH2cPLcusYCD2KLsQZn1aLfoLPrCEfLQLjbQfy8vVgeccAwFMmHDTm96mHEPFT6Gruq5WBmhy3e8rd84aH28j9",
  "key1": "4W875xvep8dqLZpEZUsGLc7p3wdicAuhXLEP7FhstxvHYum71g9Cvrighw7N2Z8NzxphShcy3QNVwX1wpMwTa9f6",
  "key2": "fRxZnvK3EHSV3NwnRJ93gTiTbRjE96NzVfNAHa7HF7DGeonxJ1pqec6d6SnkTGepLNqNe6wMZZMBqVepAvUo9qE",
  "key3": "3ny3zWbiWYxU1S1J5E8mg7VjxVUmEDKHiK7LhR37rjfvjTCnwnRJMpGhy5mWuEop9vURkz9qgDp5FnfyRjAejLuY",
  "key4": "22Yy8KveyM9ceT95LC6ozuYwRbkcdKggWrQRVokXqbPYoCKqvKaf8rXY5R9xGDLGYtUSMuuQqWGrBUXENRB9ehkC",
  "key5": "5GaZhgzxjbGahZhe1ZpTFNGRMf7oMpBbME8FQh1gWN7sBm9xSjXiJ3dEfwyHktxKTNfZ2P6cont1SWk7ctiq5kSZ",
  "key6": "tWaSiCRm2Qfyjtp2YD5VASYXzu3tf8yxvoyenJckkXFCgYWPTPQfWqoF5jC3e8nVYnfB9Htd5RTTjPCiz6owWPu",
  "key7": "uSFYbPTgrL9W5f9BSwoqK9QnExGasUq41WTMt8pS3vRWKVn7RJTxWRCaQzsq9GMfdrzxduT7gvhBWHTK19aV65q",
  "key8": "57jvBLLPvj4ZoQD7rPxivQjzxS2pxcV3Hs2GvwfRpx86AUZgaDL6C7Gs9zAbexLjzdC9MToPJMQLNLdBAZYZmQ9n",
  "key9": "3y9yScrersLGNy2mnDvXG3MjHyHqREBnfQyH4d2UZQbksHEQ9KvK4iEkijQCu9JVnMBpfSvFXgPKR2h45LJUZR1k",
  "key10": "4nhxtok7ExKNTPhEYQkBLZqEnh2ZzKARLGYLdMWF7SDJuM1WnHoP1BxzMu4BZh86DHjSWX6vrF5Wi1drQDM4PevR",
  "key11": "iXEWAV8mCV8NoSi3PZWRQTmqA556S4SaoiQESbVZQtx2ZkkGhavDdDQx8u4GqM5WPaTMeDVJwPUEF8orKcU1ScP",
  "key12": "385dTJU9DVG8T5LAwExzxAU1RX8bBDnUQSQA64r3KhzvLZvP73vA8edt5qNJNkRs4rBZJZCNiQKomhha6aHtiw6P",
  "key13": "2kSWeavHZsLipRjkuPki6KJDeuVaLfVUXAMSKSjnaGmRScPJ7i7YGhUdW4LBbL6mPA6qPPaRUYvM6BeyFptK6pvU",
  "key14": "2gJuQxiTi8cYsCwdKRgXYoaD8eQmCZ897kuwNM6aGyE1nVExRd3TPAFVkf4LvXos3oVCG8iBawh6XSxex8gPAcsU",
  "key15": "RFRRbm2aPu5s7H7t8DJ6EN5Gg7avu6BBoPvnvso9bu7JyaCSvMwriUnbQcNdbtrmcWucUeWfa6wHiJgYPryoEcc",
  "key16": "3SCG4s1iy8tDpfF7PC7tDoTdWE2aaoMcN4ZaCFc2RcAz8wr6kfG2cTds5dpC58iKNGUDGY94uE5VfpEKUJSQubWo",
  "key17": "6ewKQKrweDPgHa5uYnvRKtr5hxXQxfAyKpsLHDNGfdxF1VwyP2A3sb4UsbTwsYbWWBAvKTS41pi1TNus6hikpBu",
  "key18": "3mpWmEhfN6AwhLNHG42CxfdBE2SYj9NR9EJhdcmF5RviZAqhb13LMZ9ozSFge5stt2vDMow5o8esgzmDFfBXBMcV",
  "key19": "4wvN9SdeezbrdPyVKjyijqwRFZ2mDXhgZkAnYvmjBrLTjiP1JJNyseLDtPhXGhL2jDiGXRazcAG8LDjTZvmuZQR5",
  "key20": "2cP8ZNUHw6ZoJGmztpbbsZ9HuNp1hYRzsFuxzwYxN7LkGoVYddrg8gKu4yz51bzJGuZxwgzV4V1LRu57obB7NKZG",
  "key21": "Q3ZFZci8nxWV3yjZtYWsRH1RBz6vPX6GwX1itT6RahgD7hh7igztBTXkVjpqw8x6xdcDjkxN8Fgwimty2TDLxsB",
  "key22": "K2UfuUrroa9NVvJ99nFeK7YRGBp46R99fHT574NEokXygKFvDcRVCGxtVeZNQ6epbULYZHFTevQoWk8mKnmscCy",
  "key23": "D5iwzFk8aVAWTpbshYpgwpDy1rTAcH6XB36WThbkSqzvyXizvWDBR5Km8RfTpMhp5U1eakvSd4sE2G5N91fjyY8",
  "key24": "hW7KGRjKKxyt9MpRWyJFvwpC2TiEvTLK3YfyUfj7VSq6SDphP4ESmKsGac5yvVSHnSoNtds8TuTKsRDCvL2iPWS",
  "key25": "31LqwMV6swrhHWqE7Ahn8nHvLcC1GUDUbASqiqvV1SiyD8j4fkSnKtTRTD3hTzEUXNEeQZV1qBaVvUEB5XutCxW8",
  "key26": "5BLiA8BvRgAQ21BY4td9eSh1RHuDgg93qfs4QZiwpWV14HkjNDcvXHcMXE8DrbiTy3VFWLLWQgmaBWri2JYEyRA6",
  "key27": "5xmuyCyKnHHW5BPnSP4NbSsEPeWbJs9c1Bqdevgvt7F8hoSdQv17aYXBRvdZpJ6PFbuR7CcWiRY9zDLJjwhCHngM",
  "key28": "wLQDZLZ2DoE2sZehgN6GQob4jUw4HS4NdxSsqENEcSJY9tWoaeP5J7ETG1vsbX3EmAAC766g29okCt1kwModnES",
  "key29": "2AqBib3MNHgDrDyuNbAnHBJ8cotigDmSS1fNeVZjUhN55B1CLe2S88qHhpoEk8rJpCuS9shEw2yamWNzkpnuxWJq"
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
