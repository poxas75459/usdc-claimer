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
    "5uSgMMcsozFSib977LSqfxHN7BwSwqghRZ5rWymFr4CTsUd5Prb7bvijrX7239ee566dSqmq1GwcpCvr48WaYdkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67RkuQAF7Vk6CQVDU23ybEfoxF44BjT46tzac2Q3EPNktNGrdeAnFoaUC9Nj41rj75H21Mv5KKLMPcVcyc2R3G61",
  "key1": "2qznUUQhfzTuVvZiQsScUxdkB1wu8sjo1ApjvdT6Ae6cG7LhDzEcYZ2qZ1xLag4B35DDuC4LumCgyxAbJiMVrPnv",
  "key2": "3sa54sP82ZFXQApCJvVzVGriuDk2qyg5kCHyo37wf3je5J1mBJPDYYVx3WrwAw2vZbzwXV4SuE4ZDpA7ttgWc2h4",
  "key3": "5rFFTVBayaNZZ75fdLKWip73ZxzH9hCA2U6oY3DqQxRcqwAZBrNWwHXwczf2dBEhBPufCXjou4bqNMkpCnF6aMEo",
  "key4": "3nigStwcH52FANQNZKXxuBRV4in8sr1u26qA8MGCSZaC31pGD1rNJ61bwVxJZbsXwT5KuZ3NYcSMnJD7nTeLaxYg",
  "key5": "CRhJdR6Ujc8KT8UTnuPf9WgWqhz4ybd7ty8cWYXR8R7J7kUkKhjcvur5g75EbPvLw1QKgUmL3ySXHBsazfe1qH3",
  "key6": "3kqvBiBtC85moVFWg4UvyzbePfoVQVJv9yQFfTE8kgfsG25JXiJNjKUDKqy1mATKf2CsfbXzKQyWmmXaWymhrVkv",
  "key7": "52YgYDaf3ETu7RqGvUV4p7uDdzZb2Pf2oX3vVVRCFHeGUdX8CYyfJjsYGmgoWxY3jh6N4QbVuMSV4m1fwyUJpzTC",
  "key8": "zNNFK1vQ1LTqqEiCxyi6MS1w5xukHffgm2RMFHAxqxXTxGxAN1MwXEnERc8iLYRPMq7XKcrQSJdrePUtuj8zgHN",
  "key9": "4X3db3HxUYVrGPTgcwjUBDen4GL7muqssNTMHUHCyyMiAuFC12FHfdSo2cWYaVwcznQhL8GDHAM45LdGAKvSf6bf",
  "key10": "2r9EtmbSx5aXTDnSdzCyHJTTJ8mVF4dkT1iYkMBYwFKTReVcedyHc4mRq24wRbnk4ARo9H8ADKShMvbVD1WAadEW",
  "key11": "XrJGmbfhTpe5njpeS4PkoKfhobA1RUvygTRtE18f1bM4bp6MRsptTM8H7s15kkvTdkcew99q1sXgW8XJbG6sFaZ",
  "key12": "4fyBdb6PWL5eCsoCGXRYEiAJAYZ3VkE3GKRXUMwQsJ6rhtVqwD5UMA78DWPsYRQaHzMGjHtMAjg8eLMrsfb2Hnuo",
  "key13": "51G3G5jqUj1Zzf9kMKskfwa41U2MEYC53U4ehFSJRB1XaZtgihWuXKwhqUjZDJYXWoHMUwCPf24eZtstxhaQsnbQ",
  "key14": "3XWzoLD8z9d5jJ9Ny7xHZPNvvjkMAXUX9DLCyCvThfeEXDsnuysZfBTaEqigvq2ywLbDekFSkWjSPwty3iWE9yPa",
  "key15": "3emEbytV18QED45171pgcPNytR2YtCgpBN45D2CZHgGsBW1pQp291qEYVucH8KniV5fRfhyfrVmyhVekJtaSU3cB",
  "key16": "62wUfiyzCCPxBCPwvGu5zqbYnNZzfSupX1r6z7AU5k56majE6EQqfsz9y6ico5UBoV7y4Mac4u1P18HSuYQwG72d",
  "key17": "3M8AKYobpJVZuupDedV9xWpzC3r9etqKq3qibgRs4PGK2xVVPJcU2GStJxzDa3mkRiXHpLtAaPvpcaerrPDXdKkR",
  "key18": "3D71XrjCZJztrcxHkFx7Y1LxhWMujZMHZTqkNUf5HanJ5RfMyMGnBQVpmC6HvLRYyTwyjeu5u5jciHHRP4Rn85bY",
  "key19": "3s1KwfRDVh2s3EPojzSAQpRwixvyaqPNwN4kgzHryZVkjo44ksHhs8PRhk2DUoAS9mD8m6TrWuWboRU3SH2wzSoh",
  "key20": "5j8uDUx5xW7tCTfqm93yvM5F12zJPvowtHzLm6y3R2DLZ9VMAJeQUmP4CUTkWMkz2XpX2hFxsbQvZf8h7VYWADRv",
  "key21": "3iJgTrDTTEEZtKXqTbja53orjQY57YjApCJhTZrMPufgFLugarTEK7a5MEjw4jTsApRd9euJyxPpD2kCsFerTUXZ",
  "key22": "2jpeWL3k1W2jmynBh5v4sWxZWxgRNuNysChEdttFCHdtV6Mke9baUbFPurfdBfp6Sco6H7jXg1Q8cNLtMVGxrtiV",
  "key23": "5GugGQkqr4mdxdfqjGF4wQ5h4azyMA7y5W3LpHcjrU5F1tXVTbYFYf6YEuCXGrNRVgg45LYBDiaF4HyiYG4xwRuw",
  "key24": "5RLjLpMzCEBmDT3YLQfiJMWmVqiMaFuXJxJ9GVMcvXwQN6GhGF6pZ65uMT2LKKxjuj8GRMkAZN1QKtyLLTZ76bXF",
  "key25": "4CbVyyWBCQMuxxcAHDudpsbMA3j5WJfBFyhanYSJRJKh2kcq6hBnEcANvPBruLno83Bb5dKhQUUafy8W6AxRm3Eq",
  "key26": "2ACjM9tp6oNhHKNfA47GaNm4dooUj7Tpe7GfmiaX75RDu5HFFfAg6ZRDwLZzjnSBYbSHHxYbj8B38dJSPRvPYKLn",
  "key27": "JR6F5VW5wdsgfWkp9ketFc3Fvc7A39c6VDZSn2DhhJxUsA4EekMhm6hAwcMsEYDBQbRWussWBDKNswB19HRn8fv",
  "key28": "38UU28s63RReAywAbaiPMJZGo8YGmviPErdb2Y4Q92hoVCPrLHGZgYaFhZcXL7zxHt4aBqjfUHDFgC1rds14VcRg",
  "key29": "49Y75PPsBv61uhsKoQGo6qrAWEiXsSeJyP6zy97wkiYoHVsztpkF5vXgaTAwd3Qf4wMKREFGTAYq4CLXAhMM5kp9"
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
