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
    "4S5jbNvq2Ks9n88e9uzatwEAf73qE42VvnGT527fwCu5b1Xe17P79mMFT2b8FUJhxkdPogCK9CZPLFgPkorvuEYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rRFJJ7jB2RG5GF8Xwbk3bBLGFhxo1bnTpTbUxomNsYwuaAEMj8UMrw572pB1HUX12qHSeWYSbfefproctR2Njiw",
  "key1": "22mBQTsXk1RDV92TbGRNiD6uQT2RdmkQp9QRxtp3tZ6ffmSxV5T88ettYzFW1Mhghw92XqNPXn2FtEyCfDa1XoZU",
  "key2": "hCqusfVDuu7FU7cdHFTxrJ5e9SyqNfbX8tMCv7mkGibHrPgsMyHYNG4erx92e5r7bCw3PgKdHhHQMyBszsG5rmY",
  "key3": "3Z7PUNSoD2T1F1YznNPDe5JGC4Lkb3f3GsV2MChvAz5RrTfifYc9Mx6drzKAksNsRNVshfxRjWfRT2Yn2JXhaEuk",
  "key4": "3Akh4KW9AzTfAjaQj7zwydihxEmZQMwKzT6H8iWV38T5L743jiPB9NGAB7SyKtKniVod4t3RD6UZeTdVBmszSdJX",
  "key5": "GM4VeKHk5Gdr9FVoY1sUd4hkTQFrQzFeQwYV1rHcH1F8pUrj2NxW9j6GaZf9f5i1fQKipjUSyQ9Hhx6rtEsZ3EY",
  "key6": "5ZqvhRqs9jpTbvm5kTgY49VomLGGY5CHTbL29wpK2GDihcLS7ypeCaniMD7g1A51Hd3JG8FXsm1T37gnXNSZQSYL",
  "key7": "5TNMTriy5U4A317nDm9zqs23EinMAbMrV7gvtm2aU8UXwTsWz1VeRhHUEWWyRqaAhh3EK4mTQ8HbVgw9Y3L8GZcy",
  "key8": "3HGNSVddBephDQ7sW9u7KqNSkDXsdVMbdmjDsreuAtzwnr2ks7D8VgNUar8ngnEk8KpkcHXBJLi1PwtG5hyXVLDK",
  "key9": "dqJe8jkKg4tgz6k589bGf8HNM9hbbF4p5ptgVNWn8rB6aYGv81tGmNPjaj5B2Nw28XKqcTFhar2bpsZSHDi499d",
  "key10": "2btwaJb4gDTVgBQUNkE71XGETftGg3BZNJ3z6XK3fC6WHHs2FSfmyTJFkhFRJjQUKX5RtBv4q8c1Tqf9oFurcVWd",
  "key11": "5Z4RndN3CmvcsYEcZCwKoEMNpkFUbFPZoPBgxLonDV2EZxNQGJ6dcT7oDFQ63pi84FB72jYjxda1pJSHHLXdwFQi",
  "key12": "2VKzDqcAH6Tn7bJBL3kW1gCdpkHyYbfofW2wUFeY21GXkpgyfuZLk9Q6E4hV69KRX6qTo8bEdFsw7Ramn2jmEdNG",
  "key13": "3jE9bZpPHwRhtAVaaw85d16JvH9iSktbrBVapb7dCCeSTJijygsJtzM1XbUEHhjAw67HibiPVWYGHZy3ZSb2r7f4",
  "key14": "3VnEtAyfDKCTjZW4iJH61ogkdCoJvzPFgNMvuUPCByii758NefuHF9st5EyhMwGLPQUuT9ycbEm5hjxTENNV56MC",
  "key15": "5zCP6jbXx9vmX8dov7jeSRbo7yeF46xtM1JXKquNuTyXbQRRSokm5HXsMBQ8XKjEfsEEUgDL9bQ85g91E1gBX1cp",
  "key16": "5d2qV2MSkK8tvukBW8ddnFBaUsxcNnwu2mSgJhSrjmbbXZZ28e2ep254wEvCw7RbfVEYim4QJW5XcdVC429DCG5o",
  "key17": "4q5VhFViRDfjL1T2jSLCc5W2oi4QYUAGp9fd31na6ig7HLcz74mZdXseTxzzDK56bJa6iE2rEtmZ9FL67GDGyuhQ",
  "key18": "2SJRkkVjnnmUvWggSbaGEkLab8X2MyYWosawGZqXDpUXq11AEB5JLVjwKQnrS7171fz6nqhrC38GUYHpwTAEk8jX",
  "key19": "4BDK8Z1ua9JEkPmaRwzaPGKPLBQxTMoSbK7uBqjqsZFWN55qEKmizhAKX3ywQZpF9fMDKQuk869cXxQ6Ci85bhG9",
  "key20": "fEA7831199AbEA3J5B994bunuhZdKncNbXRJJTWNfR59vJNqn5vNuTdBcsmwRdKP1vjdRaLcbJs7VyWZPk37gWX",
  "key21": "625hdtLHQULsjuLp66no8Nsfim4Wnm1nWauiD9qzUHv4zNSZG3JJnhjMCuA2pzius2xzRUEYCQKtwe4HfLB32VLL",
  "key22": "3GCt6T8g2rLnU5C3dkiNLhVdY4nPk8aqotwv7CbkZtg16wATm7RucdPcLWeqUhkshDhgYGaJVxPAzyXVf8SiN6RD",
  "key23": "3UEvwFbTGwju4WF29RZDTq8fVn2L88MKLtmter7p3eDUxqjYnfepmnMcCniV4MubPAeuL6xMbftmyDLGtGcYtUm7",
  "key24": "37fFavZvk5zFUEUM9CA1mVZFv4hNo3QfLowqD6fpHZUipTZRkvyM37QPqi3rCBPPzD2MQGw2J9AMgJCxbR4bSD4v",
  "key25": "2dt27p94gELKvaEkcvwYSeKYSvjrwp4B9V4jSPxFhqiQ2pZMZDZnWBt66F2EA5jBUrmZvwkLP3JdVfsc1BnHUsxC",
  "key26": "32XX1yQnuHmTV3VAHG7nSXHtoScY9CdyN3JS5d4mCBbS8kuC1Wz1b24G6MoVkfJEqcpih1x3EHrVyqCX5UFabaaH",
  "key27": "59Edgz8ZSc29oapFsyTxrj2uPH7nguN3yg23vWQr3sA7dRG7XWziZUDnmBwnzsMkbidZR6ZpcRs9Y9FkM3qJJmzf",
  "key28": "XgJvLgjURLCNm5HaRh6mtsXoACj9ARENAHS4U4kSmzxzoNJtNuPDGHMqdwiF8YJU9nHZcWa3hv1ezK4CVbivz4K"
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
