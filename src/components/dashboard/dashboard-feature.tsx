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
    "3JWvFdiWb5JhwphKAskV3pMiGjmoKKh4hSGL4u3AKAShRPUyUdoCvxHtBaKuEQYdgJrRnpeF2UDnusU2WmYt6q62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qjs3zRyhMrEfBTjFWHPR6jtpHS3iy4j13n2uW7jZJBV8QLXRmuaaKF7CUCC2RgBt295uSL1BjJw2RUpsihTAU3",
  "key1": "2yC9qZn8MEjmXncDfNbRhrx9j1TEvrCyWmEs8zTpTJhdnMv3nAw2ruu9SP3fncM9UG1w8c46yM6N4XiPdXuqQJCF",
  "key2": "2T4S9otDHNAxtiA1Dv7uMMpLFJXakmowZSD3shd2jgbhuFGC2dncW6eYLSiCKmwRvEWpxy9pJPUGKrV7SVhJv6Pd",
  "key3": "4uF3cnJEwNn8RniF7weC6PPdxDyXUZn25Zav7sLUCwvcL2gGniCf8k3Fuuh2hQjunkW1gPcctdnMd5jZReRFRzQc",
  "key4": "2m899YXQ5nVWkKBY4zMQMNYNjA8SvsFXyWnfjuqooyt5AqUfrQ5sot36RucFqcqxwwrxuytjFduRnDiLw1bUpRmK",
  "key5": "4gVYedN3TGv2vgRKCBd4gGGHisChnyqD6PMkdTqKVceSvRuV8WQLrDWJPwv2g6jiAsGbjCaWYFnJPU6rbYB6RULB",
  "key6": "2tKikTBeBmTt3ATMiNG2p4RaVGRrQDcLAy5kgQGFiZZmhgReMFZuhzqG82ujw7ueMkn743YgPMk7Fme9jAg8g6j9",
  "key7": "3c5KW1XaoXbnYuqdctyhqBsjpngQEWHyTXzD5EUNLMo6X1ci2hKWGTXiYAXvieK6bcmeoai8K149jLA9xCrDjHh2",
  "key8": "2nsQoesnjkiuhTANEsn9Y6CoF6qKk3K55CnqNHyfu1ne87DvTqkz6FS7hQ9GwT8ENBFyLUJrQ1snkng8UbB1BBgc",
  "key9": "37kBL92M9z73L5h4XJWuEF4TQNNRS5ZpuN4GgP5sf3L7caLvbBYceUofksy8KY5W3XoNC8tZr2UK6eJwV7N5PUZb",
  "key10": "3ZM5cHsk3bwvDHn8xEXAj1pmain1X3Dzudf3hxmA7J1jRX6WAexaY9cGTyHJ88PW8ix2YfWbF8U6FdyCgCpJ2CZ3",
  "key11": "53y6pVgUQzo3nFWStzw8oDBjibqMnnMUnPneNwMz8wpm7R3c1uA5EJNDY7WVCDw1UrXXo26sX7FPkhRiwKu4Gb5o",
  "key12": "4Ehq2v9TL7m6h1Ee5YRp4f3Y5WzqCj4AkhziA7ZKXjUT8KS1wAc1FiW6mBDtP5cYQrx8nuz1XuYHLNV817hgcQuy",
  "key13": "2DtjFLg65zdxLZDzoXo9QFJ6UXTWWReo2i1xbzdR7jLRun3EhXeLz2qYndVFP1W9tqLNZb5T4rYsLHLsyMdkxTxh",
  "key14": "33z79SVrPijqtep5BAFXzFjRCteHrjQas1AagZcdiTgBFnAjcHiJJhJLxgS4STfoAwYC3nb8wThdaykWPVeV4fkY",
  "key15": "UauuJ6yrCWqpn4itXFCyRDzDYkcvLJtQP2X5kJEuNnodLw6CDPcf37N4gNRQ1rRXEdLCgFFQ3gfocLLyGJ8GkDZ",
  "key16": "3UuBrGeYEYNhZLqu26QST2TzY3Lh6oxJqVSiDdVQt2AxnVFU9gnSzizqboeWNmtAb8RSz76NZErPyJD1tjPZX4Zn",
  "key17": "n5iLw9c7BJnp53ZPqU7Se2ZZKLRi8y17Gaxnq9LZuDHHmt54qeKraE4TXHpe5zEhKn6Nei3eCLipkWbjZvzP1m4",
  "key18": "43QMHvVoQWMx12MEEu48YGkaEP73DJZU6fLLesr3HDZycb5WENxYQzS6GT888v9QiZ4PysonaWpPrs46473XX34k",
  "key19": "4HrNvewXGsPPh1tJw5NcesfxSmx2oPC9wNj9toxDt5D9mQ5MuNqC3PvEJwqEmcWCmFe2op5A748VqF8nTRers2zy",
  "key20": "2PC1oTiNnp8zNo8vyC6Do8UV3TrcM3os4dsaHRDsfriXpeMRsSwCKsS4vvbYkYWTc8c1JRk2FpGW2EqMBbujQTMU",
  "key21": "3nNWS5xwqQwvgpnjmRus7kA9aNHZ74CvfukrV3toaX1kWJ739ev2G5JS2DoqDHiPzTHAQYJjRUPZe4bAE5ZwD5EX",
  "key22": "3YqjGTCXDxWkwvGUW1QzKckZoY2js28rFAQPgtQ4x3BBWP9gmdPtztvn1DDV1qiFrGhSV8n1SjK1FYF9WqQ3CBJ7",
  "key23": "jvb6XU1qVWAWSeznsXEX6yTJM3zDmihjzT4pRaB9kPw1bTcF52pKW7NDvQ3MtHi3NFdJXnx8tHwLTXhvwq5AeiQ",
  "key24": "2QT8vbqnjr2NFV3D5rrWd7gtmDv75s4kh37P2FKAtL3iKuAg5iQSJXmS9jSMo9Zr3bmJdtwZKQRqs3eXvrtJVj2s",
  "key25": "9XB6vLvxogyZSuv5uRZfNYe2xAKS5ZHKU6xc7mRiGaGbaXwvL2cD6tpKFfL39zoXLpRPXHnKyZfG7NnTM7mQNhU",
  "key26": "5qocVkqNGFkUYa79TrTTeA5S945ddNqseeVvC2ccu7xcJ2CsAoq7RBhvLqjPzHi6ovuhJnrgRzw2EzPfrcQyqyy"
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
