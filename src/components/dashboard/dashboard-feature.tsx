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
    "4UBM6iXmP93jPmbzukcgE7AMYFpKNMPZYUYuQUnrePHL1tvNR7XNEm3yaZQRSXGGZ5mZSXV3ecyeEpu1E7A3RHfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rzpox5SLtxpCQUHD36as2byq7vgFo28SUgquafQAxwFTseyNNKZWgneBkLEbskFaTHeZNLEsiBZHvVuviesi63z",
  "key1": "2sbk5736MtbUPwhyhiAmbZMVNN7qifMuTkqrbskN13VTmw4vKHJdtyA3mtPP2buk83L729tpks3LgX9w64preGc",
  "key2": "4LGBvRw6RQ3Zwpa9iLac7DdpYsFsRCmKgfPxUHqgK3yGEyUZ7rs5PwHFdBUAQ53pM6QfPUzggc6DrCnRdvGd2oK3",
  "key3": "2yK3uWdWem49d6NWxCJ9V5oHrDN3mCfcjLYXp6wD4X2BTLoMLFZUpj5j3RfWCgH3uRumZ9aXWVpd9NiwZaYwpKrT",
  "key4": "3KVC5bYbEdnA525iWSY2QdemMMGUn5KYpFZFtegwFf9u6yo6K9yCmajGHkWuKZHd9CTcDgSwyXhjL3qeSBgj4Kaf",
  "key5": "38AgWoNkJhFc67ybuF8Tkn5xc9sBY2ao6ESm8RXaFZyJmuQyh2tiv4ViGM4biqybD3CN8ewHNsyBXznVd2AGju5r",
  "key6": "4XPTQEyhEJjqsSFcrr4HdFyUqLch51K3THvHGpTzn8uaw6MqUuoMxvV87uEqvvfT1ZijcG8hFygN82tacYQtineh",
  "key7": "37yNuYzMjAw7Eb8zH3FrfkQKGjwo7Bhm46Lb2dPYMzfwyaHLqaYEDeY2Ze79JD8QUrBSNebuKfzJAWKTwDd8HsEF",
  "key8": "57NYonXoSaixJ4vUr6FvY8Nz47VZS1LZaWsZJdpWiaX4euSddK6xwLrgrxsek75e7NN8zvXvoxTw4ykcNDikgqmy",
  "key9": "Jn27AbR991PW7dbe7mSqk13bwHAhJDmirBJm1zauyuogrPcGebNX4w1DD1KQ3KrteGQ7BBFRqt7i4f3ZFvGjZ3e",
  "key10": "5ToDHaYiXFYm15HSLY2Tnw7csCJ2T7JTpfTme5gJM77kNwjouXoWz64YL6tjGFjPVgbN9fDgTPTEga4ewvEBtz2U",
  "key11": "2gCe3rUC4nAkwrygPztwH1VKDoieqFcMAe23mtQUpwunSL4vwKCdPrvTtC7ENJk2b9HNEHZ4pnF6jex3cAnRWdGZ",
  "key12": "4jAjtV7rv9F3mTkrCX1nN4WuS2HuZaw1wyNEbPn9rXDNyD7E9xEStCMVKYfSRzifbbbKLhpBGZFxvWT7nhr8GLGv",
  "key13": "BcFrjowCgeMSZXxecpyZbwQ4op3QfbWxehHBjH9uexhbKxtCAhfwRoDjJq1z9hYberAK5ZAYfzyXhxC16JQALsP",
  "key14": "5YkVQn1dfA74A69Rts9Q34YCVgpeQVf56gQF8rBshULsrFtVrwbcCSPdp6XpuQNdqH9x3ZRy5Fc3A5vMXW8YLPfS",
  "key15": "bP9QE1pXA9FShgHAimtB4AXGoLG8wJcWtoWBorBZJr8eeJRBRXtodg49fYqKVnnwY1GYD7ovc2bQGEFkY8dep8J",
  "key16": "4jx6CEf6mCgjDG1kKiKyrZJWDYnjxiCJkbV94FXchUnuHeYnf3fkGEMUajeKJi4D1naywZf8r2ujTn4Xg4MFDcue",
  "key17": "2ba6472vaprSpo9STDAVyYpFDozU35wc8mWb5T4D2guoRU3tNjNhp6gExmGvgUA7TPcujeqKPco33VJzoRaYw9KE",
  "key18": "ZtAvr94VLhd1tjND3YqfEZupV1rEZFkq1xpbz75Uy6Qnhg7HLgHETitagvLgsQbqsA9QfCKEZ4FNj6P6g5yPkNB",
  "key19": "QwKAyy4uZhAdXKp5kAygKQAnEthv6yJZz6horEaH7GhEzd6c1vCpcK9rxSDyhwcEsfgXZjFzd56PAkDVA8xLC9B",
  "key20": "5rwbjmFyD9mTQdUfypswjrEENdWWPyawfWdxw3HGdxVxf9bJiAaRWvkwF4b5kFA1fMwr5gptoYXaqBeXJJKkHZkB",
  "key21": "2LTc8AwoGLrh8JzipfpeTLyiq3tA9xs1jGBdTBukDw5BGyP3PHaJGKrd1zqPQVNezpXU8qY6v7cNL5WujLsfjCiY",
  "key22": "4HKoMccmqzPpZxWBMXidRscoeHxWARaoTb9745jKSFfq28gfKWDGdZ7ttHrJX3LRrrd3vnYKbw7str9WWXRUQjX4",
  "key23": "4w2zwT5N7d9QMup6ySPMk8iwEBthaXnzrfv1aZJDyvMLqunHbFmYj6mUjzgiEgvHbuQ52zbX6TbKdDjRg1KC9qiE",
  "key24": "2P8bQqRWNEN3KngmxmxGTcyhZ9WkKCWoseeMpHxCPxpwvUebnkGBQc3CASoDBeNS2AcDVBnUM48wR5WdRqhmkYfi",
  "key25": "zFDGN8gCUhDqpXrUSmmg7YbBJAWny74LcxM9EvhBsBaZt3ycPxZnZZ4C7FYTTwWxxwi6oBmwgHuyTikY4JbnCST",
  "key26": "2BYpQVtBvjHDAZiC8ZSBWhRzVb2PzasPXGvmnoLEtrYstUL5bmJHPju9vBU3V5gjKkumy5UmoMKAP9HFoiX8BHzG",
  "key27": "X77eXG8HYwyupFYaU7gMUUzBtQJ1omqpiEgSaKcK4pbymYwx5NmrGPati7HwPgdiaA8StjSs82NP9uc6htFkVr4",
  "key28": "4zXAS9CzKcD3McRdQt8u6rimAX2asoxz4yMGbYDkhtHiMheWdMzKBeUzKEvSPMjQdvnv4pVCiCQGmAtB1EraByrW"
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
