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
    "NUvdGGU5JQboqy7iiMhKapgNFcmJEG8A4eHgDxjjGbLoDmCemjFKXHFqTwFAcQpibNkXBdjk6cTup1NpaqVcAHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5235MB8CcgVoF3RfrZCGjrEnHjZ6wCtBs9huNLDwK2JWtnkar7eZxSPmXtcHhKTDNeeNYLSrVxBRQRyxwv3nNSNC",
  "key1": "62vHiacJHLgYg7QeshxvKsJnEs1kqaMRNyUhL9nVYARPZZZyGYcJgE6ZtK3xZ4icA5nFzTLDchWD3QxyxNvaYJdC",
  "key2": "5D2zZQ5oomum9HS11r1NiTocY6xE2VFF15yuVwnsBjr9vemiQ8XzNMigLEnL4kwzHfPeWUoxbjK9JZ66arjtWHG7",
  "key3": "5z7zFuHbC2hZ932v6JRQAmFPb8iLjm5LrgccTng4KzyYEfnArHgTJUG1thABykKDjMfWGSRUConiyMkESU5ih8mn",
  "key4": "2U4aWcYewvCsdGbxBtkhuJA6YDwm4f3hTd1vrUQg2XoosrxxQ4QJLNjNH5zt7aELMiadfW1ZB3bpkp6URkeCkACS",
  "key5": "2AQY3cdn4Upkfop1BMzr381HuqdkbsJFDZCqAah7Gtw6CDSSdQSWnwt4PaXcm2WXDpHdvR9uDisW9mEx5qnv9f2i",
  "key6": "5cWk99ozAd4h3dsB5KE1Z96j5AHEM4MoTca1VmYrD76ybjGwfoxLh1N9rQ9GaC3ziC79MMaPMkXFNaZFh5AFW5YJ",
  "key7": "29oXe3QRqdQQzYRtqYFUQauabaUSH78Y2bD3YBgvGAFyQTRWSN9q4fNL4Bs5DV5hLn6jgjkTt1jQmrfHbkXHqJvZ",
  "key8": "ZeUUwb2rX6HQD5Vpah4fJ53jqNRncGV8N9JYHbvKMdbCiyURVqUnZPaWViAjG1WXDq3WXA8qPHy1XhUm27muT3H",
  "key9": "32biMKaEe6pwhutbjZuahXfBrzyGUWDJbBnzQJ1yZKhLYSaF2jWzQH1N6q1DMH52gBs4uGXkiYAFSViWi7B7MYTH",
  "key10": "2YJaaKeJT98uZk9fTh7BPc1P1t6wZubZVXQiMeS4BB2YUPB7jRUpi38gKdc6AyQnazeqsJDTpCh2sDJ3raG83K1a",
  "key11": "5rSd4TnSvkzykWPHbuNMoLz1NiMcaUudY5HRHTcWJrKgdPy6qD6jmfe9VzefxJXBcQGzLAF86U3ZJNetFSdMMKwp",
  "key12": "3dwK3RdukjY8HM38VNP7qg4iVnPA85PmawB8A1arCiVcpbVzZ22NTmTj6JXBHsd2iEMTfHdxAKvCLfQSDUj18Czv",
  "key13": "2jRn6pPstq8wNMaHBMZu1C8prepzkvymbpLkq17ZhmsgGKF1dC9Fz35YjWKRkuoXQCTy3qvS9iXDoToh6gKWB9EC",
  "key14": "5TB5bbPuDEuZxs8TxCvkkkcExic92szqEdmh45BSZrbRsoSwoYDrinb5pMCbvzxvMRzEj8ZUhqRN1pj1ZeQcBnXr",
  "key15": "zi6K2uKjrtYMhWnMfoD8vhs3jzbpCrNWdve9JJhdpWuFjR9ih8CKDJztbdxg2bT2mo75GWjKx4johqu751qLmRj",
  "key16": "4k1NGcZdVpFKqzf7vNK99gNjAGzCZXdAg9TheWfc2cfdAwN9W9KjAR7GDiVPgixsiCQG5y591XomT6BuPNh8cfpW",
  "key17": "4FUumWqDHjfRz8qshhkhS6Q8TiFcYhhkQpUyGFBowvnGDoanQWcT4qaQTi6Nqj2cQLfj1iKqAnisDdm19jYFU6S8",
  "key18": "F4K1L9pmJ3wy3bnttxXqstn2HEBXmVVThEzCAY7V9m918KnFcCGQQQMALjDPbpKzq5az1jcAjgbcMZgFYmPn23i",
  "key19": "3KsfcBMvYmVMxbc4VmEfRHZ6xiipu41hjxNp57JBrGJA5YnY4KBcGkoZpnQsZgZYBLhFJGBfnuk8cAwsrBWHYRms",
  "key20": "4GdhS3seNoTWZSAnvC3einxbZSwxfkfd1H7UF7H1mDp6r9K4om9eMrpB2g7gZBTmg7yQenugQXXfk2ZaoaKhpBDk",
  "key21": "2kAwJM2RRWGsVjgtLToQeYmJk64AtKdi45xiX7cjKAGXXYvesaqMfBrbVCmsj5vsCKryAairDvyffTBeaNPsxjTd",
  "key22": "4UkswFn9wKBMAMTjQMELPztzf88kdioSGZMpcMZnF3jLUd9yDVroJoPTeSqXdSTfMpQRszz3gxgeE5c48NQx2Ldq",
  "key23": "63dtPxh8UnHdmkz517qPZVQKvoxBAzjXbUAXjQzNHPJAKFKXEv9u9Tx2VMDS8WVQZHQXxyrdEMbjntNscbq8b1Yp",
  "key24": "2byp41PcdR4yACLrLk78t1wjyk9gZhkygTWSPfEASN3hiCFAhtzhespMrNsr6k8XAgqyFHnujG1aXJcwcb9GvwsP",
  "key25": "E4CPdRZkWkam3tZCk9FuiaeyHfGf7MkDfjWLGRWqaNRtwg3d4i2PbxzRTkPh5nzvhQPbCjwcw3gnAWmnynrJHut"
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
