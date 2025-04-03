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
    "5ZpsyiJYXubc1ai1rhYeZQwMyB48CPPak7dh7aScaA2uEZXEumn65vHbmivczsRoLpNjVUUQoiNp1MrTJoGDxcrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A4gT2jzFtrXvYikLCnjeqWENL2oWZNgnQzM82PQL8YKqtd8bnHf1EKEBDHLmovHXkgBrNEMQ9Dj2GGLMyM7eDCP",
  "key1": "2TvW52CTKuwW3FZyamfqp4tN3vzJS2tKxGRrcdghZmXUMujGA41LivoDxqkGMMgoF9uSn3RoWBgfRDLrX9ii8CrT",
  "key2": "4BSKY3vMwap4ki4umynUF4zvZYdXNsv29iirtdCQK7pbBDEwxrV4XWSDw5A66GrCeaEW1HRkwb9nyEfHJT4VLrvy",
  "key3": "2LFPT4k1vTutufACi1T4buTUku9WvYw1hcgjvb5QniYgPuGfvGJQAS4rcyrsrmYYmbU8aHefhKyVBsYhcXuSjZGU",
  "key4": "2Lu3C747C2PMsLjbDwaj4eVBb7KkmqrXf8xaStSRKAuDXwRzoKutjDkuK3XBXGegftSta1ytjnFNwEYXgkmhAXsN",
  "key5": "5yVnuiMUCBveyHrF3eqDENcwdF1rTYFzN9Xkz7hRJToqofAJdohp6yZzrYmGWyfbmyRsxfoWgZxwubhMQDY4wZ1y",
  "key6": "5Y5zbDHfn6VErAUo8WwKKHQc96A4163vYBoLRSsGYPeajeH7vNVB3fjbYvuTPDbuJgxHAYgTn6iucwmhzNTT5i2a",
  "key7": "3PbFZBQamsd6XMLv5E3TNsWNYEfsDQ6LEVV8un55zsqcGwgDHRqaF9B6P1Fv9ctGHSY8oZKZDBhnA9oZJ674QKxi",
  "key8": "JKbMaTT6anCuckyfa5pzvU5Gs6h4qc9irbKfMdmyWpcwy6DncLaE7inn7ewHGMtQh9Z6bnWqEBosFwqwQg7ink9",
  "key9": "2abycEUvYfZvZkfGd5Knq6k5dPLN1BHwZVFtytqb7SAdvoyndCjQ4h5enjzXy3FSvy6WAJPPnDntHcbMiCbcjCna",
  "key10": "2Ke8PiJiE587G4C3B6iSQ2ioVuD3xbms7cbgRYzXhVL3dkyWGe2nHHmi9uyf8PHuYoPPKKDvTqVHu4WUa5a1KaZ3",
  "key11": "2jdeiGUgY73PpXWxApk8uCYLuf9NjZMZuXwwrhN4kL8wFFgWDoZWozSvdFtZFDjinieNNkiQHKwyAcvdMQxNNkMs",
  "key12": "27df5DFaF6t5nTBiMXFJrvuaJggJ2HhN4pvMdoNsjWCPtU1dFq6zdtTRWfAUmyeK9cjgum9QG6NBAuiREp3tJBse",
  "key13": "2MzQzRgY4GTst8aCvTs3GvgWYfnmM2e9KYv7oesDg2pEkVRWVuLs5oXuDEp3nEDwDwxA96UiGfD2zecYGzqsxCW7",
  "key14": "3xFd8XwpEKU35W8vQbVir9fajAiu9e1RNUZPZrmo9G5RisPyznQQgdWDgsZmJLxUbBBfu5qEF7prMyB5C7TJA9jo",
  "key15": "4wkV8cvNJWBSGdSDf2iFySU9a7Lk3rxZkeFazzRb5CCY6Ai59p2sNT1myr2i7eg8KacsssAPWQXqZoc11mRUHCir",
  "key16": "3Br39mPEz9FJfZvFePziLbfoHaGfzKnu521u4SxttezuU616BkMuHnZ9J4BccTe6FctpJ3cZHvt6GqCq1tNFd2Ct",
  "key17": "3LDNLL9HkNXCQ2dXB95hya855hpZWJoFDqJJVRrRKJCCYF29Pwgc144yJad5XuBeaVN3P2qnaogMUiFL8S7QoBEf",
  "key18": "4pjCiiLhwRXzqxNJk6o9jKA3n7c786jgZLF8yq3xEDhHU3AzcvjZuQY2oc4b7QwFWVQod4DXKRfqoXdax9A1KWJx",
  "key19": "2AaMyATwvmBhkCfz6yjTZLANEn5BpzwaBhapWn71XpHvsJ6kdrWjRgxtNSy1r8e85bfzRErigCzj5cBPBeP4LiUo",
  "key20": "35rHW4zcfJcLWgsKsohRsye1KYvhXb3df1TwgvMKJtEVh8fSd374z65Af2mcn2VkjNza3sAmAhrFNDWzzGhE2RBp",
  "key21": "49ENqYonzxWGf7uzbwxNPYadcFZ5Ure8JwvhQxiMfgSrvBZptky8RSmbXmG2q1T9FhYxeNfCsL1yg5WmowDwtnoj",
  "key22": "4CV8RFUck6CnXrhhf8LVZbP4LKjoeNR644ZfHofNP7TDtF6Xyqqcpfz8EcHwqvu13EC6efDw3Wi3wJVGu8x5Kzzw",
  "key23": "5jn37s2QqWYS9ChLPx7oMWF371ANjew3ygGc5zGDZDKq9nyHFFPFouGP3NLVqNZ2YN5RTujGQq74DTM9XKWPhYnJ",
  "key24": "3w4BQjmLy8f6tgFC7BkxiDTs2SHEiKa1mpbFKaHLKJV9JRawpgP5TuBTfvacBQnFuvdevbANRm8yL4UPNQXs8HEp",
  "key25": "2gUR7mpLGKqEqsNVo7Qp2r6PuKDVvUGoPm2FQxVmmbi1xan3ZiNmkGTeFtMUKB2HiYX9AgMkg5tLgxLhyTmmPFJx",
  "key26": "5gg2M8aKyZLoTHoAgim8oirSg4Ju7hbjyHFm44yjmNUWxd4aJ2LFs3s3FvubcY4rvPzwsiTFqE3nCvfdWEzcYzMQ",
  "key27": "35dZkrtZEHThaQBuB1TJsJRCeRnGBS9odk5tskKS584mJ3QVtrPd1Yg9FxRcqq7py3Vt4jnMzUPHejsx4LmN5MUt",
  "key28": "33QKCrhbXxKZwvtEaEF8HpLUPhXZDVrk4Yyabx27ncdsewDFb9pHradJvvexVKaJH12boWHtPDBrGVow6EeyCaTd",
  "key29": "5gUcS3LJongPFPwzkYSYutUNhk9VNfpiiUwpiTC4T6g2v8fzBSo3y6iAAbGb5vHyJCBea1iKkFhTDXeophiNZ3cN",
  "key30": "2tpm2HeoEZwLs5DapNERsxNoT2mYTsj7AgsA6EVy75p1478Vt4DfyFKP19hZ2bhpJcHRzzzNPPcHYUwhXjCtToDG",
  "key31": "3LgQGGomZ9U2CGbZiK4JnAMBLtfpxFQe3iAmgg7khQ3YPdsLw2R4SRJK9As4MdxzmaJLYFoYaVQuWPNF2dRZF56Q"
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
