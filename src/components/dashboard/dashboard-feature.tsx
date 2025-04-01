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
    "4rv1zBovcsmE5Mdzbxn43VteTDNWgrCoAK8ViAgTsR4zpFqpVw8JPXLysnnreaxHnxNYjMUe7LBWoL9wtgQW19Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22T8BcQV1utK3YnLLeEQ1RfdfUjUJ6J8UiSX2osHABhf8s235odcfdk2AUkiTjB2KQMoXd4xfjvPpyXt1XcXXUR1",
  "key1": "5hZNxAfh4tWsnKqD11H7osNcSpZc8iRz5s2NUt5V6VjNMzPgERMxtQFXMxjLKNkZqtYMQGFcAZW3pAk63NQMjXfV",
  "key2": "4JfmPF4JsBVuqr4yjJgPtPxGLvJyUzTK24kn2NArc4NfLMkXGYXm82a8CENyFzti9Z3xrNSZj94936jf29Vywhoh",
  "key3": "57XrQ63Cx8w78GWSEqwZPTxN3SGM8wQYCM8tZAjURk74zrzZhAynmvyp4GwH3MLdMJ8Leuywvz2jaTgrDGtmBHqD",
  "key4": "5PzQZ8XKS47sJoptqvCFs588LPzA6jKR2voM361Hhb4cAAjVwE5ZmovvYq1bdqxQHQwB92DCtmQADFgdKafTvSNT",
  "key5": "2y3k66DHFx6tWBKLmKCdvQjDJCQ7QaLErKYAm72S3b24UJtW1PsHHWtWdr5iUuZWrVa5pGJLz3PjhUDvHYzin1Xn",
  "key6": "5dz1sfaKntVKoLgrGHp2gRPTpz2EzSapaXGzEmBSQSTt59ieHmMMpd3k6HthihFeQ38iNoYYoAPBc3jg4LM1USup",
  "key7": "3wRAozzPnMJcyHZcd8Ch1Tg46b7vfFUXrDkCQV2fwG4fm3RGb8Qy9v1xtqspkaHrmRySyXacvztyh9szMEMVctdz",
  "key8": "3sGMsd4fQkJJYwqWw2ersYntXS6hKRJ3PM4SChV3c4JaoG6FQSgEatCsBk4atYn3GoahSdZfbqzafVe8iGfRfkCd",
  "key9": "4JevkKDYj2psTyDdsJfWEuwY5s3qZvpVhNdEnBkLzAkgY9Jr229PrfBSbst4tH6UzxphjpniYLUYMLJovstQNAjs",
  "key10": "Aid9vYMENacZkEvqJyWz7es5JgvhguWM83Kw7HtbHeFtNrWuj59vDkdoq5dwaSixXE7tCHCs8FMbndFESw7kJiw",
  "key11": "5LuKBKEEKufPtyP9DdPrRxbjLooKsv4KeDg16pzR9hkn5XnFVx1fh4Pt6ZXBWbKYCzwpHAEhSxQWPShunxVqJ3yY",
  "key12": "49dMGpck1zNUvLKgY4rborDAMMLXg3PQUnNWj6gKx7G4uiXCtwn74WsDnwnG8Zuobp2jkwh3imV3GNyzVBmHiuQv",
  "key13": "5N5GrFUiHcWjr19KBmNHkiDBDZfZPgAm2KygvWNsEn74aRXRyvqQMV3X2PFpLYxKikZMC8atEBx7VBgG7rPaVCqk",
  "key14": "3XZZv3r8FxoAgZscd3YDweBnacWjJYiBrw1bvAJeiQqZt9hekmGRBrPPJFuL5yepqzaeLrQDqvfWqEWRQ3iFPs4D",
  "key15": "55FagkFjDFcNzpAhYAJZg99NCNco86zUXPEHWfC68ZzL91RkaLYSWJfW6Ay3uu3CR6Sg4W2UprNuyE3ZiW5oHQb2",
  "key16": "4TNg6wAjhaeN5S9L7sQgN97Eu3orE9jVymSPtV42fk5WixMnjdsMCJU3hrK2RizycLLdY3wBqYo2aym743uCWzdB",
  "key17": "4WnU2DKUv6UNhi5LKrQjMzzfFLLeZe5pBBa9gBZKdWDCYiCgJrWMmc5nfdp8qzHA6Lf9icU3bgQQo5gddHJwdL86",
  "key18": "2AeEnDhtNrbvDBuowec2uSzR9hwCXv87FQEeBGBQc7BYnS1SikSe1JMEJn7ea31dVAd7bXasdcrBsH5PYtmqthKe",
  "key19": "2ZC4vR8sdBJtZVrAdzpip2cgZeqVY41PSMG2iwbTr6rus9ebT3cGmNVJeXxhRTARnh5ZR38zmkRaFScR8HBZCWtn",
  "key20": "5CfWzak6XMEA154jRLmH1UwVp9eLsWXybe9179zFhV4T183fP8S15FPLzeCMtWX6pvVyjP3Axm2LR9YSP68jPZ8a",
  "key21": "3g7utEyjDDAixCV6d4JHDtiELKwMsEAz6eJ1S5fQrc9RPSbBGb7MSBwPesjn4HHpVciX8jPmBGvi4e7NPtn7sSHM",
  "key22": "3tMFFZNzwZXgbuS1XBNs3dLp9LEyfksRaMB4AX7P9J2D4b19Nt8CsxY7zSJ9BA6kHhWQ9a96bmi1Qy4jwFDzJpEG",
  "key23": "5vGJGb3DAAgX4TFmWUR2fuKtgkgM2rvaAkMmvaXKhgRHchausrUgcoECCfQd9nCJGJhyWGE6pzuTjoZDeteNjcba",
  "key24": "5g3TBWy3fJdjE9RrVATgGJ2wetsU1sr5P4r1LNXHt1GTZc6dXiLSSP8UEGfz7KVSQxB7uiNTkh5NgB8dyev7YJFE",
  "key25": "67JfuE1vPWHxJ7jMAb13JCE2GE6VihVmiGJdjGQnSidvSCzePCrFbaTWcFe2WcZ91hnDwjffCV99jgf1rSaZPnXK",
  "key26": "2gw9DMX7W5Y1iEG8WnjytS6snpe1mCSAWEeBesnScMPkFZkU9TYbXbAu1JGdf8vfv6J2mAF8RwouriBLiMN6qzLZ",
  "key27": "25kujmmdyUPqPvxoyw9sUWkcv6fae3vgp74YrMh5debJFRwevie8y1TLD9N1a7QZmyP8e8a6GLn2Pw71Fa5oEiP5",
  "key28": "26NVVacaa1D6CFJYPHUgpJMstVgGT846AjGnr1ZcYVGWVshXKV4zTgmiMha9uXSJcoae9PLMCHXe4y2h1WpUJmjf",
  "key29": "67doeMjFCc3fYj3SVj6nNHHXg6SfPn6RA574GrTqbTEWLHdUFfx87wSLFWSmeXCditgcZP8jV3RRB3jnJ1PyeQrG",
  "key30": "4RgZsojxA1N7vZVFWR7nrWJfVfKJA91wsU3bsfy6NAgUrjy7DNnn3oXWYjiXL86ZTQpiJkYQksZZ57ALCkRbBaa5",
  "key31": "2vCXj8dJom9Jy43awkekCibMMHLHJdJqpL8ckgRrCef9AfWPdCxq4Lt7vpaWAq7nUoDBa4HUPKVYpTrUFzwxPAxK"
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
