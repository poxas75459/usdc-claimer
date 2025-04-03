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
    "26dZwtX1RtYapXXJW5Y8UdpK3xXfBgMiwrL5XwsvpRHQv1xTakFhx3auSjAbHArG6k41H5e9a9P6Di9cyF8g9Rac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9RuRgagsqHRUscu2RC9REAebj5BqeXkMkir9gUQwkaqNh3h9k6zmHFZzAHK3LHn79r3KS43Up3J5Hb7XZWAADM",
  "key1": "5VAJGtHn1mbfbwozrEQttrKu21bdajPPFxFXWPCSypdjPzon65ap6X5QEtd1ygkXdrKVK3TJ8ufeqqqN6Segnr9y",
  "key2": "izLXMK7WYjWjVJdvMzBA5w4UDEJRsuK7uQrBEhrDaNEd9KuQhQU1nhCpZVBqYXq751u1TLd29JvbnfkPPRNjogC",
  "key3": "3NQtN21T1VoPdzfov6qm2zgvXuM8DvUaZq2g2QZCXLTgNLGinuFBiU9LnZ6ntFhjti1V1EmtbUCyrn5uneshgNYt",
  "key4": "2o5J93m9eqDPmZUqA3EKMUgHQWnUZ86L2ewFJ9Ujykqzuetd1dvS72PpJ8Mvo6PfCqJKrpwX2gRbSfCrgL2kWVB7",
  "key5": "5drrqgLAT764ejZ6PnFQEWewNZNFKy5inXAaktNKD9r7nxiiBKCG6bCEyb8j4SPbTNHFcnj8AAQtk46H1MARfw2F",
  "key6": "2Ps2k2CK86simzGKNvhxfjuV7g71Mcc12bShLGwN6PxDcVuZFfSWyKGSoBc2aRWgswQQPzBFC8eo8C7Y7ps5eaH3",
  "key7": "47awZnoYAJttoSKxRcWkBGtXjejkBoFFgh3bJW4bdAB7Qv67k6VZhiiEX7n7rk4x7f9MycC6muJHeRRDNCdiGhmT",
  "key8": "4gejx5TPHu3U117HqLEz4mrqdzdJHawA46wjTfBvEVAgCK1Ug3NTj4cCodgcdWV1Rvta6bqEfsBSCmeU8ANU3HEo",
  "key9": "5DUwWnmKaSuAidErwHwrQqFLuWG9VSGiJduxbyxfJEYaUHnuGPCoboJ6UTKbeeH9N2eZ8aaxk2yKjCzwMTYFnnE8",
  "key10": "4e1fMvF8E3S1knXcMQyVvWYehSFZ7cEkKEHcFhSmsgH1N3eNT2KLy5XnEwum2iauFv6DWMKao8MQzjAaWzKVGJ4b",
  "key11": "3PGCHdSpjsDUhWJwJkBjPre4fHMYwUiCBhcjjynHELMgBmonK6iM99BmVMtM1zqhsfbFmnr7DNHXtibUhqrK6ZxD",
  "key12": "4cPiB8wyaeMmSy9Cqcuhsx4V4qMZ7vNjFfH2rSuG4Fzk2kcWYgYkpZZjYAJFR9EZ2aJKXjgDxtdjxXMU8wsaf8gQ",
  "key13": "kQVQ9sQnhEwynKDkPZoGzPkHaoNrVp7EL3v6S9WLg8HjpUz9b63fy6zApGJpkks3TFBGow2KoUdwhwzkdvd3z1q",
  "key14": "2JadTdggLLMsfUymWX7ME2E3Y6iZvZ9rFkFpVUznpBUWKHWrrn1EBY8ueXj497HigA91DkriiQysBizk8JCAoz76",
  "key15": "5aziciLf3uGp1stpkr4TX8BrhAV74WadAhhHSKbTqrotpfJuQ1g6QgZgozNnujAvrPQxi47JpDcwK79uBZQ4E23",
  "key16": "5f9yo12hXQXGTEaWFh1VxPXDupMDEeAcuUW8FXVGPVEyo6Da1F3Xhcqqk7tFLQaHYDKzfDZUz9X8VgupLe2APNZR",
  "key17": "oEw2H3oTzPdLcxjZGWHbg9BP36bDXqhLwT7ZDA8Mj1sLeANkn2BHXbC3S5ZNDZ8i1svLBLz3EDZ7SjCoe3uvetj",
  "key18": "CagfPTZ2VBZk7CFLcAc7oUC7TaMw3YAC7F7acwH1EAWGufweWnYDDTTjQ92Rsi6tHUaTNBY72iM6zK1ZBkY5gz8",
  "key19": "XxMF9kfumVpT7KP8Mwpp8xt3T7Qn3Z4Ge39TKTpkcBX5S89oMGQupJBgAsZKkWorxZb37D3rTLSGkejDssbQvB7",
  "key20": "3fNjQBt3522Sd5HmyaxYrGuV3qKJrzBvhrCBq4tSskJvdhBL2Z7b9T3vTYVDHkPk2gxQkJT9CgGCmnuFy1pPyhX3",
  "key21": "5iKjDZcnE6qvfn32Ed8L1K64VGNciHez9xUU6XFs2tL3g8HXpYzdhdB1x8xpb36W2Ffk3jPMH9Z64AZ9U9uRDtwe",
  "key22": "5p5ANwZUUuEdKuMfAat2JXpPEiAR4MgMcG235pNuQasd4fgK8ATpq3pz9z9dhG43fd8M2vg5TP6Qc3pQQXKw6pzZ",
  "key23": "3h1DCtem6ThrW67mJ44RyaooGXsizfiFaJihqhpVBt1gE6cvuJMd99wciX6v6FgSdqvTvVNHKvNLtw9zemvF4qC2",
  "key24": "4T7kRq5umLDsXFHhvABgdCVpo5gh77ERGSfshgTyjGsz5pT7L55Vsf3YkWUpc4AVA1ynXKUGyaUsoZc7KfyUgZD6",
  "key25": "33gWkouGgJXM73WkSyxbhorYHNmWGv726vX8nEsyTaN9Dzop4rMqVge8wv2afC4EBkaG6zENiajhKmuuvDZSKq9F",
  "key26": "57rmDmn57YFH8uUepgpUqn91DjYE27nSU7uNF1RAGqhzx2Cg6UrD9ZsthKUXUXgZcPP4vwj3V24LWDZmQYVsgTtH",
  "key27": "4nbR313dMSUA8GThnRR5x6XjLehhRUT2BS5Mu3vpBkWSL5zWuX7eoHosne2xnB6UGpAV7CWXrXCEyMU47hf7yZeb",
  "key28": "4ttmTyxJHg5s6VgZqjuFbcAh9uLW3qmM4foqEqvVZoisFpQ5aZbRj6ht1s9Q52fm2jwvvt6zQ1XtmvqDJg3qPWoZ"
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
