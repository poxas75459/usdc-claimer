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
    "4nfeyNaxAXoEDG6AKSjpYQXGvYFhFrdW6XmTg619rgXANsPyWtqnrsF5sZeJ27yzHF3JpP8hmUBSeQsg2JsBVjJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gF2781UWRWPe72qL7Pitg8Rhdf28HBpV1SDdR7xx3sV74mt29t3JMZ4UDumRouSh1LJmXf9kKx4mXLho6bQms8s",
  "key1": "2rmkEfQz1HtPzmmCL5NzrP2JL8vvrKpT6kR8SENGefccLJSnwqbKpLJtpTVYrYgiUcQgU5MLknHbXUjQ8HaX5KKv",
  "key2": "5VvJayCbFD2rXLKLxkq3hmdsTaKKiZJpKnP1zPet99zgeaSKkBdGfeNn7o7ET8geFLaeNnhiFzjQ7R9xgo4suXn6",
  "key3": "2ANwbgJQtCVofXjHJf2yzTiaKfSdmH7JtpfGbTvwsjBhbcN47FTKReHu6eoVcGxZPP1774XdupFqJm6s2fwErusS",
  "key4": "3zgBbUySyUQnkaCZk3ih4QkMTeAyd2v4T4TEtShKJT8ocRUWXnFZTAAmx6aooDBwrXymzbe9Q4nECgrmzybxfe3X",
  "key5": "2H62LYxWeqe7YaSabjvRweMG6rA8UshFLSnMN7sLq2C3jcByaZEiXoHFqudSB9kEXJyXR92fq9sXahCFWjms4mr5",
  "key6": "5MbXXFxkKYxWsP2vYkNJn1RCo9w1hGH69rrXgqVrNMtvePBpDFmmN5vkZEiPMn7gBqqCubVSS3iUEnLyntWn5LNP",
  "key7": "4Ayhnopk5P4hTZFGcDr5dPUrQKkGnkumaTyiVa6D8nXa4hKN4dqTKL67G8UghU21Tp613ytnqKTBQzLb1ftGUYgr",
  "key8": "57uNmpVn3dh67TwZA5sTKpzytM78BXvfx56uocQLwUT8DdyDgh8pUzoYTVkvrKFDB2vqHhMSQqPKvihL3RGD5Bi4",
  "key9": "3Uvrf2qaeEAvXw8WtLZ27x7kak8JUH2h5D7bwNk7kniDSaf41YXNmnUsZqiQgQ7CYhNAdTu2kNV8k54JnN7J9fkw",
  "key10": "4YH4cFkP9XjtagsFxobTFQZf4YzEhZ4a9u1pN235aLeTss5rYRmaHnxzJbmwMSnmhwHvxfL8NBbsJpar4xed5fBN",
  "key11": "66x8PqyHM1Z4gFCtnEu8pFcifcT9gBfXna6Q4B9zecCWgpg4FVXL4aJpBU48Vd6sHsnH2uXrCyp82fNhrUUNE5tx",
  "key12": "2eFHVLga2UFJMa4Xx7nAn5eFhRHSt4xLGeutJ3i8q1kTmmkHiQ7VhuoEFxUgqv5B6rtiKjtWPnctAwkvHwcF2G8a",
  "key13": "NmcU5xx7X8tQB5s5gtZuuR6JhWNter69fd3kJkVSSUGKZhj2nptG7pdYndfqD8jnyPotWSXrZrdY3HVqwV1bd7r",
  "key14": "5j7JkuXGMP5pWxcb91FD4ANYNmruiBobcYVQV7J4nPEWyy4nx7aD2fwXrWABbAYLSUZx2X12othv6rUmu7jsqP6i",
  "key15": "2AuuSmaLaFcgyV4BNgP6DmGVmkzoGHa6yau4nzzv5tKwDJevtRZz1R9xpPGAxTUbdPbsc1sJytnatFP5RvPL9Bk4",
  "key16": "23ChXhiLka2zKVjnupoAeyyW6jDdrXhkLT3dPiemzJgdGW6UJjGRQBfv6xyP6XFiEZLkLGx8bDzcfobth6FX52Bj",
  "key17": "38UBnVzXePgVBfiLYmVDvWewwcp8oHzL8DzEenCxzKErDaxMQKsusuXWrt5FfVy9grscHqMGr4FbZPT8siZvPAXE",
  "key18": "3p2g2nbkyhCY45vFuMHB6jCD6mgock39soqXL3qHdD16yG24v86WYG7ShLKG2kmN4VJKH3cEnoYdFV4U8uR554X1",
  "key19": "2C8j1BtLv6NratfNxrx4bJK4cfSa95kMSH6aymotbYSJbNDH8ux4DBQqAnYLPtFNF8ZwaqeCjPGVBRjcu6VkP9BP",
  "key20": "4gaiF27nSXkMhr2cNMQQ8yhJdhxxG2cpjXufJuWZuTnn559pygLtuGo5h1YtMSLB5iG84nAWv8hJAKaMswz4Lbpw",
  "key21": "5CamaaU1rAtRrZgKrikunuRi6zpei389YyPjbnDZgwyYnuA7ttQrEG4f3bnhGiqpJA7DbtWeKnYCme42oMK6qwHB",
  "key22": "5tYVgdStaLs7xQ49xSVmuhNNiUB4LpPtxWRDe39gQ8SiW3uUk2KueGgFt7FWHJfqggGXhKhGx3WchNd9TZdWQo2p",
  "key23": "3n4Rq8uBLy4miMiVEWRjFeoBZjv4GUNx178hevxD3Ab1KEAAC1E3LzE5yVQa6cGe3F6QSt5DjKmx46572y38oeLN",
  "key24": "2KUSfbH7cGnp1fhv16uPTdFA2g5nLv6ANA2xxnDAS16QMSr8sziQi8rLkh9DGhdBamNBDnyXN7EbExeZZZZbV44e",
  "key25": "4PKx7gD1HPs6Uc3TwZAD7WHwfoqcEqy9EnSQam5J59Ns6WdTSkabC7TijpTFFA869SZaRiwtoYe5EAjh8VdtkB32",
  "key26": "2WdfcPzPwbJNjSsFo7UPorJAmjE9SFHdh2KfWUf9tL3Jk6f64pJNrYYjJxtxRpodK66oYfcpZF2rdxFT8xFVgzEn",
  "key27": "4FiaUGk6kibsEqEwJ17NGyk7ZLo8Eke2kH9sNfHEcD2TiTCYupThu4wiuV4c43TfRnRwsah7ihJg2ciGyAoJ8Bge",
  "key28": "3j4xkvSNVY7Hbw2ZN7yREN1ybQiTJ11oXP9btBp6Tb3H7K2GozVCgQtnS6hivj5K6QBR3KRke8aZyaKiKEACSXxG"
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
