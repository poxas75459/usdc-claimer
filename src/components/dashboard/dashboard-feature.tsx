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
    "4jQ2FeEMqHNiExSQUfaegFxdtLMprFPFEXjCqte72oiDw1htb15vosKMFinHf5pTdHHUZNUs2L2nUMc6uXWYYBsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJknY8BAnMaWMTzLZH3ReoMz4doxLqYHvem7q5As1RZ1nAgMTkDigNABiWkgUSR3c54VcKSZ3KpuKD1bcusk3VJ",
  "key1": "3KLo9JEXZwfRqTwvzppkkGo3MUjt2sMmnCwme2ozKL1swUVhx9Ze7TErWucUKMZCRWgM7HvRx4nTqQiPo2L3ii82",
  "key2": "sSYunGxiGxSsQj47qw7G93F4Nv5NPPAKR6TPPV9Xep3ctzb45dtgteUHGMffzaAUXvqCm2yis2ude5jQg9gcSdj",
  "key3": "2AAfzfrgNb2sMWoGvWw1MjNTLQNkSkMAbAcHbmEotjBZwVmRzcYwNCuHtaFs2zB9bzZEo41MPHe7ucgmjrzg9sCN",
  "key4": "A1jhhsVcD6ux2Ph1JtzSsQnKGXZYjLR5KBedsPU2GhETeDv3KpvZfxUYHi7aKwBHXNww8fCT8XnGSAYLd2YrPaf",
  "key5": "4x6UhB8ECsH4tQ9GLKEgZ1knau6oEPFWZRWGc1eNqweg6SG6E4NnFFyet1rtcTDmaNTuSeShvaVeqsZm3VuXMBJ1",
  "key6": "PeVMp7XbJHA2wt7o3e3CNUGaAcZ4AkA7AUBBZgMiuWVTz1YVVGcf9pR5gkhJTLjJG3Y5muG5bitDBtohRnfjkk4",
  "key7": "5eDL31Y76XvydWihLxzEh5uYTEozEVxKiLZDBKzdmX3aRHLkfh1SWFWTjSL3eKmZyA1QLqHyTxfGWEBd9KM3pogE",
  "key8": "5rqAWNeB69xTXX7rxDMcKEpvSRnWFBJC7MNWGnV3dZo268F7HNT7b87o5yu5xCtebmowH9kdoevHpV5AybRRQ15B",
  "key9": "p7aR4heyi5itBAt2vMub5t5LstM3q3tPfbGwkBNvun3nVu1TcVMANYUTeniAi8yJhPanKhAswFjvhHzxrKE5nMe",
  "key10": "2GU8EQe4EPdXC2vqZQbShm46hazhgFYrDXwAYRcJ9PnAfENW2kVeyWUWpmLgszqdzSgpdKuzP4UoEj7vBRKLxWf",
  "key11": "jwqERWQzNtURZ3t38pnm4qSADq9fbVg4ciLGJSo2SpzJPhAhCraxejatT4dq8DJu3sqR7E9sdtqif5bdEU27nHK",
  "key12": "2yMog1cL4iKephLQMKXyUrA8bRWVjCiMFDnz448DadpX23rULiGJeFDpU8fb2MWmwe6nLAW8nba4UgvhvHDX59vM",
  "key13": "4WvE4Lr2AQmqEDDSkoPTVd7hehi6uncsuPdkU5nJmbGTcicvHt5ARfvym2mvn4cPXtjPs21JPZXB5PbVUj3HuTcj",
  "key14": "39FXDS1DkNPaAjWtVxH5GzDHPWVh7xHPCXvaAGLWSH23FcxbLgmAr1DQMNhWx1WZvaQ758kHJqc9tHeJPno7fLbx",
  "key15": "27xdK7cfep8dwg9LTCchD53BmBQhwdb5hnQCvkViZT524uSdn7pL2CrM5cq93JWauqMGwVZWopSZQkma5XKGEjrN",
  "key16": "qBnaMSmkzaU6VWzeBM4Jj6WBNzZSjvnFdcjUJaimP3ngdzV2mbMUaGbP5t334jBgpPM1PF9YYvrGQmyZAX3VAF2",
  "key17": "2FSP6WmswQDfnwwNeec5Jx4h5tdv9beYbVCpsQvPzFB8d4iZMMt9F9rruv9NtzDBC1bUL6ehMUkXVAzACQquAhH2",
  "key18": "4aGJje9e4wo7yft9pQKWaQXEvEhnLy2xCxZ4HaKiaW9dggqYWvGcoaZCPKnmENgWyaG2URVKmYpqma6HGDYGTz88",
  "key19": "yApnnPBJztn8r9RRVSd7RPUoxqeNnbRH1g15n2cseuEMFYHmWN4PmXy16xF1W1HK1Hym43agMReFEzTTM7pP6JW",
  "key20": "3N1PvBXnG1qvjzrzyGH9YarfwYYStYf9LkP2CAcD69i63RJ9nJm19jhgo5DBybA9tS4YCG4E9v3sYc5RnKkrCsTV",
  "key21": "5DhbKBtTZTUdGhpL67amRgMhyJBsibymCYX3awHUTf4Jr16AivEcm3fzitTdJXBvBSvA3qj8HUdvmxUrn2h48u9E",
  "key22": "2JZSGRC515ir1vy8r45xENbWQWCMhEyAPw3ABqNhwHKmKZGQqKS2AEPsGKH6QLJdaJ81fKBc55mEGo2o2UZUEvt7",
  "key23": "2pstsrm1wBKhnVdsmjmmrRQCV63wbq8w41iqnhp6mumAiTnVtdJtJRKdWySKx5TTSkaJBYiYmNAMRQVGWbPAw3sT",
  "key24": "4SwzqmCXu24MScJFznDoPDszYe7XzNkyGfq5gHHvVn1KkNxemGQ7iostgop2JAKu4n8dHF4cJTABNnucf9rkD5WP",
  "key25": "3mgtTbRsrm7tbhgDhPfV6NRPTaPfoA3qRhPAUHvqqzMCL9iDTwMS55GRAcyBnQetJPjs6FZatnU4qRF2UYSS4Vnb",
  "key26": "3tuEZMZqXccvQTpCTtuVDinuyjAhkiQK7tPbYiDvdXRdG81rqH8k7PUf8K6RRMfTgjtg1Q4xr7KqfD1gmMNSVquM",
  "key27": "QuwZVcVJkBpg4kufvHBLsD36TWmWaoK1NL87vDuRWYmwtcK7ULexQvzgFy9PKcsM6DC3GfF4VnV8dNZLquX2f3t",
  "key28": "3S8NarHhfeSFriW5KxGt3Fzdxo5jTm7kjr77vaMHgSAUoFsCUQpF1JwsPrNdfGAZcz2iQ2g7ugrSPQTdvGL9uWjc",
  "key29": "4JWFPagqVpwiKaNyiN8sh5jZKkQC5sHaqnp6dsQPMMhAQ8be3uSf5w3X114yd98GCrRQ1a985GQc9UigJSEzzHbF"
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
