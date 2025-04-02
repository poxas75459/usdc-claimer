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
    "4Pzq27FVkj4GBZWCcbRfx7S7YTkQTXzWLgcEeBKfkerrRs8U4qvgB6YzdVogXqPFdsdbS5kwKUbfq1uR3ossRxVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HKHMx9vL5uWxQfgZWLXAehiYCrnPS5ttxEkHxaxT7VFNFBpihPp4pdh8CYhnDn7tjVjCuLoHYDU89jcdRDqyte",
  "key1": "29YB7MCyXsbuR5AEG4GTJrb5fETqzfRBSpj46Yk9y6ptQGXNz4GuhaxDmmyfyGJpUUiKU6mGwVoJGixXTzMfbfsS",
  "key2": "nix2EPaXQAiDYWGeRWn42yoNRxHsNphxKxaJFvw9tX6FuGDasHFuXSgWFmDDBagmBgJFRkS5WCcQbd3sKi5GySv",
  "key3": "4Ec4bBS86NoqASbjE4AvrJJmfebpZWzPL55DJMwW2HrAzUGvoaCMqjJaqbzR5Wry5FMwiqtxA2zueGV3zkrjfyNM",
  "key4": "4muTSnhAqGhNZnAR6FekVs4kuMrN2pN3wNAojqs8MVPPzjPwpUDS2iqeX2px34Td9AYNk8EZhQGNWheBjHAYgrx1",
  "key5": "443qMFqdyQeTa2FvRavzL2fAjpep1gWUqXbDXP6n6sknmXmoJR7gRydKDmMDLGgbPV3vvfgupY4pK2eX32ZuCJ3r",
  "key6": "5bEhtC6ttPhucGJTsBQQ86ntdqiCcLbYytqJ6ud26zFZX1Dor8n29Wr4RuBn4sLbVEUsC3fruBFXCeWVzP9ZDiU7",
  "key7": "cGBghrP67BY4zcycdPLTJZY49rjR47FvV34tgxPRD8DZcDx4NsTrD2m3uoix7nxoYq1ZRRW3xLbPq3jLJBEjNN5",
  "key8": "4agrcSYanDuWXNNGRWtvxYvQr5ZT4PKGsVFCpmK8SMbxJfBnEFHNHDGdZwcAwdRJRWAb3LGPDcxJaFWTyXtQgSpo",
  "key9": "M21HiyyMf739zhH8VoMLefZVoWMrsxvZvk1b98g7pXKGJs6Hu7z67hTdxfzX2hHk9tLeU4WLtTbZjiRTr2Mg6Vz",
  "key10": "4VBF7kQcgMpdq1GR7nEsRgdCgwYg2LWQPn19e7Pq6FNjDp23y32H8CPaGJNNdBZjKpu1cAyTwkTg4c6j1WRs1FyR",
  "key11": "2dG8cB2soDSNxDMcikdvtyCYfSWUhtaovJ7YaN98pcTqsCQAMqUeKEoe1spYFgGjov82wktqq7on2ekuSHza8pGG",
  "key12": "2MGAXNSjXnvGNTcNjMqREmp4jfcVmnSDK1XG8EFiWNeth2cWn6Dh5GoFQpoHtabhL5VbNRukNdufbx6BpnGY7nBj",
  "key13": "3dMmsmbBicwk97WuP7FEGGbCHTwRo4D5Po6xx6FjDmx9qYfNJXY7V9iFF5JjKNnwWo2QYGZmf7JwtCytcs6gSym9",
  "key14": "59Kvrnk3hgYFi4vJ446JyXSDWjY2Chbg5RSUgLewb4gvSVHnF6cwRWmrZ5YXjqdn4yYeyTJRbcVfdJYrAzA72vxb",
  "key15": "3aR3fRMdMSFXz9dsQAAJFyHcPVi7mnScwodXpD1wCMxPw4y2AK9TRzYMceAKh8aG7giSvsdVq1y2kedfsPx3zxQm",
  "key16": "CNnYu11c3Tqg4X8HaHGTEQs24sLS9iPfFqsk4Em9BREb1JucYW5G9Swy4jNWjCnhcpQikFmMC2Ht484j7fuM5VZ",
  "key17": "YEmw9hvAdBVwBbxQB9sbQw9aPddwqZ5qGiu68qXj5HNfi61V2HfM3szhEX87dtoVfqEQj7wCaeqsNDDt3N5SpAe",
  "key18": "5iXzAJqTaW7YZuaRZ3UjPRdLHFjEtPsrVYszCMniDNxNNZTFHY2qqLNGQKfP5R5XD1ohb6qerg4iQmTcmLsMz34x",
  "key19": "5CFLSuVtcaN2ekHJpYeT1hwiR2vADVkgCwnNgt6mYkjQxcgwaWi84wg7WFcLM3E1hs9rdrjp5eSkZ8DuJpnCrPJ7",
  "key20": "3yjnuRyFByXRNi9pFF2xPiP3YyHrQFo7oVnUdSJdrRZvBRWJPTkLw3TKtW21DEMQvpoiRosiasstpxeKUNEjbbRx",
  "key21": "3vsjT92tEvmMhqEY9zpFJaPyv1D37k2hMQivf49g3BbhX2vkkBet5YnruXbkG1c4D2GUxq6yJ5M1UW9mxCnjFXVf",
  "key22": "2ahqeJCuibZczM7m57ffhYuxnGXTdsSW3o5Emb1jG532UGNzqJEBuaKrTDxt81wiwWZ789PqwkKUMUwD2gR3uyxC",
  "key23": "BnbXM9RXwbhcGeUZFZDdDTNNh4KUWDBws8tYGC8hD9aZ93z7R5hUU23h5qpV8kjb7hkw3PeKHjYNCXvjC26ERAu",
  "key24": "41tenvR3nJiTKdEdU6QN1WnUU1EttrzoAZ29M1BzAiCyMY4UcjT1ekuHBrsXuhDMry4LPkas5iUNHGaHKKZFkQqh",
  "key25": "2nJZgc5ek7XfdvHZ6QAUvgk6FvveEM2ngRu1SY4kFhcBbwZ6YVxZZSxtD19rJYgMuggZCwToMe5jTxEc5RYG4Bek",
  "key26": "2xRLF4tvfzg8K2t5QpcH3BFooT7EgHzUo2uz88a34KrzdkUXME4WVKUYfinoHG5wgsMzH7DKHZfAyHTniA4aY5xm",
  "key27": "3auhpESp4ytBRyenEEgDwJ9yYCXso9Arxw55PfTVfAZtokiZwJMerK9iauGJDxbZ7z1yHDkDe9RDPb5VCvDRxoi7",
  "key28": "4dqAu3QG8HHXA4txg75epTS9VE636vydijAwtpE8z6r1n1i7pis7onJgbvUwrJQdY1e7hH7YVxi7y1FbQckLLNWE",
  "key29": "2qmP1ScTYaSpQakPipnbecjH7AminSeUbBBVzFoe1aE2xZmedB2JmK9Q1omXEA24WJjz9WvyTTYJr1Ykd94rR64V",
  "key30": "4XuvSq6dr7VGKj4tabZJb8rzVbaiFeKm7mP2za42EkhRedwJn3dJv6RoPrU41PBBYgXSeH11gxFtLocHoxEK1NNT"
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
