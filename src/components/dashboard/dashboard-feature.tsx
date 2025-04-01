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
    "3SaGhjDM4sH6pUUd546xsYXVdSFHTZKtS9asof46jFVRzre52KRpXNvBKGhFTJ6wCuSSrPuGe8hoUWcjrHekDrdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDgcywTorBdnYRJLskHoUUpXY7tbjDiVkfYsVA3oohhVFPQxzR3o6GYrsDipP4ySQLYkB1kjHCWFZa9Hxu6oVkY",
  "key1": "5WPRAwcqS7hMByCCahCLmdRaheRCQNNjVoRbMtn7bBwHbzTZUzkHhEM1dAiaidNbVv7Yv22Uuv3XjgwuKLHaum7Z",
  "key2": "4FfhfAXT9mZ3yuJBA15CF5SVVJqQy3fb7YFx2ozoN2zBm8VaUvXXFZ8qPosBeVGkbGq4JRMvweAhEB5YKJseAc8F",
  "key3": "4CkqWyKEjYbZ2Co9sRq4S78aeqi8GPZb3iFWoPXAWZjfXtfBFjsoQpsQdGz3EvtjbKDZy3HJAxijRSLUnww9ksJ",
  "key4": "3er4EDfdnMo5Ebwytsums1WePbTV3QVpFeSc4RvfWC7w8J3pVRMkvemSeFfRKtuc1PKjiYaqzHRSCL41QBQ4d7Ai",
  "key5": "4HYq1gh6wrAcAY1FTkUjztotpce95Uxp5NSgWwJpx2P2PwvhYUHicm6gyRF3E4bxRreC8sXgMbdJtH5xKFAKNQ2g",
  "key6": "2PkFui649bDmjBejbsYjzii8eQynKrMGR8f6si2b9YKzvAtdTF3BFtpc2FSS72ef5ycuVPAYzxxZCA9jUM5x6Zsy",
  "key7": "63jehoPzNc51ZESLY9Espz8UN4S8aePgc4grHTod6sk5yhHJuMgJ3x5fouXd2GqW9piMmv1jrrrCb3ojECjWCaBA",
  "key8": "3sTFR5KJV5CsHR9AZZj9U2PVaE9SoFdassdsNDm93W5pJy8uwXc3beq5Dp5jwzvoeFon8gJ5LUo2xjsMEzovrugY",
  "key9": "58k9TG2KkCTe1kj5pov819QoHN1rKVYiQ4fdhzA3R6mSrfFwmwzCrQUKgckg8nxQjQCopMcDBpCeyRygH4RAFYXJ",
  "key10": "4bbzujmteUM2U4wHoixBuxuhM65tndgcukLAbsYyyegYYM9o1rymb3Etkja8q5iGVB63nizFVNHzxTsB5LSiqEgd",
  "key11": "51CVsnYsi57ap1hLL3qDVDrabkfiPFEdFY7sdT6HcyirAxg9AuZLynLKN1juQECGFue7MyRiSqUMoLnBfZ8gewou",
  "key12": "577QhPbWGaACjWYhYbmuYFRdfGqaWnn4UCLr5omP4cRSA7bjDGpiH6CWN7dfdtbC3ntjKwo8ZoQthFbyHVorrLVx",
  "key13": "33S3E55X9Uj7RhAu92d6Ju7RreLNreH73AetKbdiKNNiK6mht7L5NoiGcb6h5oHmF8jgzZnZzW9Tqj8KL6KqmTEm",
  "key14": "PSThmW2BfiKGDwsBfRcUNQgEryM7jQL6K7Yq5K1D74x23YriPVcgCW8K1d8Zm1vQxrucnHV8fwbF69Ztwg4AGBC",
  "key15": "5ArC8ZcuFqzzQHYRNhZ7AiTRGExkGCDc6s1FXADs8Lqwn6Sr6WUnhPLSTsdLaKoFSDDUT4dLdTkzH4DBMYd4LST4",
  "key16": "KBT8NKWqWAopsD8zyevLEoqwd5uWR1GzsVsFRFGjRi7b2ri8qGi3db5tb3AxHuF5x4kvcMCrmU6PopQrfobGjHM",
  "key17": "3BfSPqMJUHzcv72sQMCfgfLaBDiXRna5QGVddAC9daYSoVvcz5MWkx9bkbFUaKf4MnBWq7DxehpYF5aMc2PLvzEn",
  "key18": "5xGgKBvD4CFiiq3RJLELymgDbZnNgZYdhxBgs7xbXAxiGwocf6sjm7ePessqoaN42KW9opcv3zZuZ5GHxgTx3CSW",
  "key19": "usNKQpN88owsmHAFNcpXfceM1CA7wHbNQPV1TDWKGa5a7Wshv4jGX4TG1T2UBEBTYyst6eU7kvTKNsWKTioaEVs",
  "key20": "4aLbJtnQ933RGrENyX3jCHg68tGDFk1WZQqd9p7fdPZ1aStDZ2AEpraBSALzCtRREgZoCBm8aP7jJnn6Dew5k3Vz",
  "key21": "2hkkdBdc1H6fXzPECSCfkRacL3oDcnFwHpjeU6zDGUb7XzaYasoe4W6cB4oAcMit2K1n7Q1S53W6itNgPRgFAVz7",
  "key22": "23VzrfsPB9LcotGTxwhsogWG4riuovZiqky1B2mVHnxCBrR8yQpHCro9N64bxpS8c58UvbA6xExTm437QQAMhcua",
  "key23": "2fkrVjTVKNLk9cas5H1P3sxE1u19FvRRMyNn7aXizDHQjRE8gkjdiScNKBTJHZe8mLvRECd5Hgbr8RPda988j5kq",
  "key24": "2hkQPhr5peRrdaf8LYrozjzrbCNcwQ7TvmxHsjate7py1AovW5LBUfCritt9P179vZddx1rZj8RqJcr7JoUb1CvD",
  "key25": "4kLoK8S8k6VAUfzDkfRM1gQD6WX7cTqJXUq9E6kAp9KErx7YXisd9QRNTHqUAdaZu6rbEPqxfzMUv54Csbc9cFHJ",
  "key26": "7HKKqWpn7MM7Em1w5fgbYssscZv7NaPK1F1jZ3wLhzxkjJ9sqR6RHTvQBYD3DRQ4F4afRMDuw4j7sTzJ7jz2vm2",
  "key27": "GhBs2LndqXoG7V1DoTQipMB69HfpnHrtAnCbck9rGHkjKfiMoq6y6yvufWGQEDmQhkZE9zZtpsWEipryn7fKhHS",
  "key28": "439ZT317kZCa7mpEvQicjCmcmE322pTASjy1ZFHM3HBwFuXframuAtATgcY7RvDBZsGPjc6GEAXnXa2MgQzEymXD",
  "key29": "27LDAc3mdFYDWrvUMHH4sFM5peLRYSaiux8PaP6PvyFpAb5gS1nBSAyMgYkSyTrX7vBvmkLezfyqBVdznfRBdFps",
  "key30": "4bWcMCo2QfsWWPDPVZ46s16EbUssWQjs5dL7uKBzSGgmprGa1G77bJ9gw3MBB5TwkT3gQnLWGxvQMiigoQ1LCeq",
  "key31": "z7zGyKRp2kh2BZ1BAS6yYV57gPNWH3tLrhhEBrkCRyR9CrcoRjbsGRsrZeH1qBFv2Zj4ZJbqx1TPnEaKoXXd7Lm"
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
