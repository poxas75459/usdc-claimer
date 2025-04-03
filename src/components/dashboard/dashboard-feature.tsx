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
    "42pqfbqC3y5xSPLHcYdphAYwpS3LX2E7VUgmCoLmM1aYPRYd8rWbDEJwyZCZehzKgyimzquz3RyX3Dvjs6JqyL5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hqovfw1uPmchUpbq26AD1xdqa5vmKLigZPYsHWzdocWSVLkswi1w3fvduhiVuZwoiaRqofvDqzSBk5AfncsPjPb",
  "key1": "2ZbHQUD9D9gQQkBfcCs1JTvdCJZCEX99jr6E2fWvXDb9W6cp8BUhDGEK4j7qMu3tQVuEPq4jsGVSGzXFnGtCE5wT",
  "key2": "gD1ZVG2zYiAqaNuJ4zioewhNmdqPxmFFAuXTnLRcFqxKUqHdsKSDEVP6fDggoZ4geUxgJcFkDBEm88WQocDii6T",
  "key3": "22vwYjGTHm8uNnJVye4vY2eQmCrchxGgQy3qhUsB6tWyEYAvXshmW4WH952EtnLKrKq1pMWAxhUFA3ijkLiWbDDk",
  "key4": "2JwzY2ywLwhUtSL1NuJTt4vqtb8RbF8Bc1Ss1rLT8a2N5bodTk7R2q5xUp3LupXhvhh6PBdt7mGb5BiiLCZq9u8u",
  "key5": "5KnYMocrLmMpwBG9Dw6Z3iSc2bigx3UbpqRe2XJVqbfEQp7Sifb5tr2M8bvmxQn94ZN2yFukBkmfH2uAwpA8KzMx",
  "key6": "4BLjCeWqztLdXrwahFGVLrsyZoTy4EsingFn8j2uVVVDzBtiHRGZ5PZKDMh5wswHbVDAbsJKgCwGYm8jzy8GmDBa",
  "key7": "4DikE3fY3WFTPTyZzmcWd9Gb8gNdJjvBze5aAxnGmW9YQi1Uesas2ARHmuK46eDhnEGKKusMgVzdTRHNfTZneiPv",
  "key8": "2gh2kLrNRx4rLQabtjc8Vn4bc8yvmQgJYu4e6Q7MTUQYeszQCz7bqMJyFksBdJUHn1DSVMQU3QEU3kmu78RAzWBk",
  "key9": "xw93zPPSwUxRvokrxPHyjieciDrY2x5SdJEihKpw1wnoHCE2J99BLWd1BLqR63CCj1nCmEb2zKSGps3ZS82EHhB",
  "key10": "2La9AKfUKsorHJ73Ui48cxPgVquZGtCtSkZYroP1D7VG5E8n2pGMnbEiK38KvguBKUB6Fyy2MHtCXixBUzj8jTnX",
  "key11": "TjZqRawUK6FDQtgakukTHX7ULFswMhZzWjrpneNB9rpDnQwVLTBWxv3ATkQKrGDNc8V9Hg35bpmr1UXEVmisfge",
  "key12": "4fJZg656ddktB5gUeJhqk5wxydgXQHi4ArAoViY72rg8HSdFrV5WymtSZ6aZ5PWieTLqseM5buZJrSJ9VQgq8iEX",
  "key13": "3i8PzkYnMYe4HiYYjaXayyWw1RVC2Y5fmK19prNS5c3V7KnM68S3HxEospNHcvniipxz3RrGV3CBB6bNabQQg2DK",
  "key14": "izwSwLt1Q6iKCcfdMHAeSkY3zjNdZkJccB1wdhBC8HStBCXPdjW6E7vrRQqdQDr2WM6uhGm742bE3EXHC3TGWzm",
  "key15": "3aGX8L6iiMPfNcimSK1tmVjqYKpr2QYK9597743QBbY2FUfKu2V1LyKfzVZVfAPruQWjajPd8azanxMuFQhS4BqN",
  "key16": "3aHL8p7GixiQcNK2yK8B4RiVfuGdg7KC13wAaKJB7F5j8xW2KB5Rq9JS6CixwLhW1D4wt2zKzkBdvCbiw8Rtvzyi",
  "key17": "5FUFskhjciedG2FJxRWr7T46k3jpMMnnw8mkG7z1aW4tuiykxYNCiBt9tNBAVQYBzRMhNU1Q39MZ5fZgPTwzM9mY",
  "key18": "8T8CKy8qWxtfHvSDt6xqvqskBDaniuVzFFE8kR9Kcming5Ut5ws1f4EfDv4Ne8XztfNthFcy1jmFmwLoTfMYsRz",
  "key19": "5PsCNz4ccQKzokg5CMDKV5Q8de5ohXc1tp1UJTQ2jrxzjUKXb1czAJ1yEo96UpsNDCdR6vN6qhHDQDPTzP6C2FhG",
  "key20": "4L2WfPDmD4xEjjwwbFfakJLPB1DuV783bFceFnTqrf9xc1MZWyFRQKjzWKbXAdqu3RrTDunHi5QZAv9KSvtjGpXt",
  "key21": "GXwsMZfKv6cZz5FxuMYMbzeih53Re4U21bVdZCMgMBNUoQo9pz6qVxJ1qKHJLasugwBsRZoRHRsBozz58yzKaw5",
  "key22": "2uztwhzw4u56tNgm8SRrK6MaQm5mdMfCvdKdnGRnXeNhdGEUN58YS1mwyzaY9VswnGmgSMy2QaRSTP3szcr61W4m",
  "key23": "4o79T5TcGfyT79qpXAYvAUfKVaxKvYjYQ3VuWHCnbRgcV2P2JtE25denPxwRLnC8hKa2Uspb1RCFxFeuHxfsFF4",
  "key24": "4NGy6VtXEon5XSHGgQHKV9EpyM3N6xEgRnoMyDkMkvZ7MjwEyk7xx1MrHkQaP1WKfAL4w4a9omkAKrmXsh3wHQc1",
  "key25": "5qUUGmJcb6ERUpAaZb3GtMrjafyqtMewjRxqGsB1gzyQr26PzZ3nfgwhpB9fb1uQCcC45dGsQE3K4GUSHcbrmHNr",
  "key26": "5Fq7eMPQ59kLwgQxBqbHT3sY8wbaVKWKZ92deESLbsv2sZbZCSJRZMY4HeZ1fijgXG7gLkpNrZwoEUKGEpV3HaLz",
  "key27": "29TPjqpAQUY1AVcvuQhHB8UAm1cRW92dhB9h1kAf6TbN1or3ppA1WaBTz1Bcx1Yp639BfvGF9VjMJmePitvgruW9"
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
