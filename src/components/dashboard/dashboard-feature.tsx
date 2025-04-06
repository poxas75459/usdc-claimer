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
    "3XpAG4xPUxiZY6WQs4kRo6Yb4Pu2umAtEBfwy8rRm4cnz5NbZyAmx8WUknYBuEjE43gMJwiAz6VvoamNa84pz17r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8oHHLvairx87HTx2TpepukmquJnwktpU3ExaGr9e9WQS2igaed3N4ZQ9gg5kwqWnXCerhHS51rgHAt2AisgZ3BG",
  "key1": "5Z3aH6qA5djCG4MsWT2GDRT8d5VoGG65FVgmNix4zbJHQDAnWHuetuReS4EyPnwfZckZHBtftUd2vmmpXg4oTM9p",
  "key2": "3nXV788EePchNh6ABiJmde5CgzsL7WGyNpeyw8shqAXEniTym9pNapHxEzTzYGhUTVDRmBSj9M1VUqM6DBysCvT2",
  "key3": "4eAvJabb7BHPBrL1CnYeURupanKYXeLY9gj3BxkntG91sBmtGFBWZmPvupQyUggxKC3Qf7Hj6G7SSkMv7ja5qBuz",
  "key4": "55RAva5iuVUZw2iGoan7ExcshaX4c3cAc8ic8BGTWMZCxFUfyie25p9Eg4EVDT9ppx7hCDNkvUijZWLtDqgan4FY",
  "key5": "3VPrYzU5eN5WwmtH2oqNsUHhbckfrh9BsPgVy9zknAFhr1WdsNk4ucxXKJAXGuwJiW3tX3apo9TMD18N1G9nbF3w",
  "key6": "2JunVVqnUVLScAiaRwH68jSXc3xWitpM1Q51QgKyn1wbRE4BFA5Z1N64KA8JyNXEDxfMpXHXizsHJG1yQsfKPgQP",
  "key7": "2gcm9C5jTx4177sdpmojD2B39p72oxDMaguYyTeyU1MJuUqxsNdB33nsDBYbEPa5axU2tmdRzMBut8wLJheXLwJU",
  "key8": "4AGtJ8yyDEmd3SrXfNDALte5SvU6RhtxRqv33ipP5rmxN1sDoYRMu5xTzPh1htknueqLEsocoMTeg57amZeNpqtX",
  "key9": "31UFam6Z3YgHYocARGEFZ3gGk9S2azKUHJvViotaDwW9MUyTztGssUXnuWfKhEu3ovNc3H23hB9vcQcr2FTQm2Bc",
  "key10": "z1a6gYcy1T77PsZTgy97AKgKjsWsTRzreu5ESf2agXQgE9mWY3pEjWWgFDMXzHCaeV7RqUXzXsBJnAxun4HVuHT",
  "key11": "4XkL1cc9dngS53BJCzYoj2e53Z8qkWG2AKKQoBtsTjJ2VAkHs3Zy8mJCyHYMKqqoFDzVjoyvLKknH4CacMBHE6vG",
  "key12": "5rHJN5mFRW9JjFS8RAVoMvudT8B7K8QdjWCne5rzErSbQTBfwov9dtBJDthupLRTh8kYLdmkp9ppARk3E1UczSU3",
  "key13": "61BcxvZc9MntjCsEP6vFcESetRRVxsUc6CNuNcmjnWJF9yViW2UxJnR8azgc5fD9AwKT3jWKi8BtJqXfRenhQ92Z",
  "key14": "3msj7myvdSbL6s6c6RjatLRoc2eDdxEbPGWC1jmN62g3vB4C4YLFM47akdKeZcSJDWmYNUEyJwp6x5s8M6DwyXec",
  "key15": "5hJt9yLaKWd11vwWXYnHcjqzGPys7dseumvYRPo7P9ojuG5XcJUC8auqzLHy7mmSQpf7f539iusi4yshVfZd4HcT",
  "key16": "3MfaVqfejsdoQRA931aFzta2Wgcu5zkBcnGiirSK6VqchRMNT9CwKSupY1JYfpxtvUcXy81WYN41gn32Y9aEVPpU",
  "key17": "24dytdh3Swk2XXJyokmzJcQvLGxj7CzBAWPBy1YGxKS5KZ2N1U4uUjmZNvnddSbAXDKX3B9NacFqZqpwPtPJSEZx",
  "key18": "52AzcExE7YPxDCE3QLAjBUbCLGCHSubw1xCUetB5F6H2BWa15xM8iij63992vZATudjHTwLcUjezeXNjNqNDEZnt",
  "key19": "34RbFekMFgZzD2jt7iYwwt1VurJV5oHRXH4nLvmQWNEXTZnFfSK1W8QwZ6k6ekCfChn91QVcUfmfs9c5RM6xqjyW",
  "key20": "4gKW7BVLiDWbe666p5i8p5rFToE8TTLqGwB1t88fYkEVEyd6LDk8wWm4RD7Sx4bqKszNFMw23ZLHXFij32Ye3tQr",
  "key21": "5nEvAwXMmhrzSyrWz9cYKGEkJvnWoF3zuBbQnXJ1qVUP3e9dY1wmDa2ux5fED8q7d8AYyuB1AHM7kzXVEvJYuhHG",
  "key22": "36EzXdzqrpMeBoHLgVuQ1TXrLnpEjR7QL31cq4v95m2QfFmSvkKp4AkG7ZcYGeowkew6LRb2gjcgJLtauJM718VJ",
  "key23": "5iXt6r42Vs7zspGBDrToQ9PttcVhf9o77fSXt9G4ZyfTRWCJbfxp5obew9m6ZLZizc1n8GvGBeTMMvgdf4JfbNYc",
  "key24": "5NFRYEHgu7hDANn5phfqekzf4HcKRkPioEx64JWteZeFkiJik9zVJSLFyakspe4sZahv1ixG8NCQgHJJb9tK9xir",
  "key25": "22VV1b6J46V3WSWn5y9kFwwLYjoYExEQP1Wu8dscdndC7E2arR8oMSmQn8uvmkuEyWNSiGH3whhR18JGdwBoHxVQ",
  "key26": "3jQnVnU5L2qH8yqW5rEqek6xS3G87UuWGVWHGF9eetEb5bQWWKJDk6uNcADbkTbw1aPBagbsA5yxbSftPgD6DG9s",
  "key27": "docL8dXzLXQgakXi62Yxf8MAx1TQXmNAzppUpLGG6Y8uUGUbLbrCKi6PPst1bP71wrK2fcjd6dVgBTCoXciD6DS"
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
