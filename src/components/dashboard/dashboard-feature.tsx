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
    "4dzD53xfY6i8YG6EBVvhBfm9muspmWfcC7fr71duLcjRRrLXfKJVybTF2VdTR8DU5WwuoP2CQ1YXicR6SLp59UUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HneFBuCDk9TmvXPp6Vm8eApiP42P2kFqBvzuNUMp44GszJMc9Ro7gxYumUc171kaULzgShAgLL3sbqPpLnyCuma",
  "key1": "4F7zmZ3R454zA9CVwQH1QCA47dRqbRDLv9LhkKMRzhzUd8CjyY3ffjLLJsq7n3r4DF4qgv5tMDEYenTea2AJLmiY",
  "key2": "aiwsUR2gZgkSXDBaquaFtLdve75MoVpkjC27abdFD61sQENkDHnWLTv8LZ2mAyMkUqcUv6gH3VrqSVtkutXiXC9",
  "key3": "2a285rbp6Rz8KGCFugca4PTu3pAHkfqbXstQ6nViPVj87bbEqNVBjAuX3xiNneD5S9JWLRAyhRSRnnnHK93asnAH",
  "key4": "4HCd6KsXahVwxbvmbCXAv1nfmW9wYkozCF3PRLLME6k57SRZMj7VNR47C2FM2jT4CYXEjb4jfso8AxmNmHuZ7qwp",
  "key5": "66TPzinKhuyue8jfoWzeYABFRiqMEoB1jJGPe5dFffkAC9QqN8VqFxt9ekuQqAnqMqtW2jt1vcZfmnhz1hXyT3RT",
  "key6": "J24gtTP2n9qDUpF9MXvkUQCAG3JBUrutoyYmBUqGSPMxb5NJXkWBptEaggB7apcsgNxov5VaPodpebPPKNMHdRm",
  "key7": "2va3WT57YZ5TMHfqTq1eH3G1TdgB9J78hp2jeefdaPLoayoL59WKpzCu9thigFEHDmHLyTBjYCmPgp2anMD8D7gA",
  "key8": "4XAh8ekhZbgkf7cXn7BkR6DdUc7ipHC9oPoJhswxKhDAb1GFNScsxQxPT6Ddqzs2QdWhUdsXH1DWYB2qxAD5crUE",
  "key9": "4xFCMRccdZT2LLqyTM1XKdLuXyK2hBdawxt14q4SLkov6app5Cesio8nNm8B5L9DHAWXe3wCrDTYtJSeMApr9y9w",
  "key10": "3GYNtV7DVB8aTQ5X6JKZmEuBKZ6FwGkT8UohVKYcuPyS9G9GiLuCB2YnzZkRLcQGUJQPMcUV82GPfBwHtoM9mEEg",
  "key11": "6z2HAcSKsoB21nUF5Ncy43qGpL41yeY9DhZLjqg3eefc8c1cnqch7xQc5aY72ngZXPojEwnuu6BaV7sfDiSY1mv",
  "key12": "3gbwD6jJrfxqPYLYuT8KogsBjsV339TZpYFKvXY24riaH9NyTGDKpoUfwCTP1jo2XTUiyRy2ALuzqYnXHy71VFGU",
  "key13": "65M5ZF4m26aHKZHQUpuXiNqh4jxwL25rpR1QVEiwRjvhH62Ufmjs1XREta1gmYFGAXUF91BiGDAmPwpP56kSwjvP",
  "key14": "5k6ju7wCXJBjH74Pc8DoqkFRJRwHdYwBbeAEvcrBeF35732XqZDm8d2dnqNvHzbN9LHxbttUzmkAB68aVssoeRMK",
  "key15": "5fnKfVHmU3XP9DDpbxBGv7jzGgGUzY4vfKFo4rxNchZWz6ZenPoa4yC7giDo55k69N6wLm9LEvQBeasa9LszU33b",
  "key16": "HwMiQXsoLA4febswFJpGGyJeujw5ekdiV2p7kQoBujF8U6rW9fbjDtS1p1fxcr6QRy8BG25wcPonQoxnfamrqR9",
  "key17": "3oPV8yNUNVnsRQ4ZadjYVYex7o87MEYFSjqbs2aehpztpokn8p7D61gxTxbZ4iPWuQFCmC1PWSSLJbsRXRbMV5QN",
  "key18": "2yX5Pcw7ZJxGJgyW3tagQeXBpYEE3phNzXUEk2MmjBZ9KoMYoKdsDzK8Lnq2dmAMm25da1jyiZb39DxTcpm3hP1f",
  "key19": "39RtgwUsPeF9UBH3fyxzAVZSjZSnFsHefXn6pLztnGCGkdbCFuQGPA2ATGQUWoGSqQb9xLXrVAwdxzk72DksEpm4",
  "key20": "5cu73bs7CQG43NksVTkdFP6zeFdv36oWWLJWVhdSMT1R3fyYitdqaurVTSQ3mmNg9BBmGFjLL1e9usX6pLnnCmUt",
  "key21": "55PrTjo7bk2Ms7TDvz6NH9CcXEST5VKnbFDiso27PmVzTsKndtmfbJypHcZtQzofkfkyPL3KZWw3szTVnSutFdvR",
  "key22": "2mB6CFvmP52H7gYW29fhBpp4QF2H3PuAgJYXTciHBhPMhz6QcKgVFH2D74ukQERoV2tYUDHxgqfWpSxtSsx5VvpY",
  "key23": "2aqp5xWFCrqB4xZutDbpDreQcxAoSNsACexLyowCD6q2eFFGJbj7NDsdvevcfQiPhg8dYerMzBWFAYwuk9QMt2jr",
  "key24": "51RcYAaVsmBvUh9N1BZj2jkGviovR3aHQavZMQFNWYXDnhTg3AvXCj9EKKnbzihiqX4ear2evGZx8rZpFHi5GhgH",
  "key25": "2yBCZ47yvm9fBaC7aMDnyiRNqyLv1Bi9ZwX2BX6C41ZytJiAqx4RAhQQwn4AtGWXMHmorbdxFsryLVVr4FyRiYuw"
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
