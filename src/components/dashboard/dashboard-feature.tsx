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
    "2Ftuzbu6zSWrHEM4Rq4jJ3Y3qoSXmF48xmHfYryyVVt5EFYQVL5XRrjKYBLt8tNyPiiahyQh7kNa3ikQv8TCG54n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589LSsagv7Eff46VvTchzLYzrgX8mDju2nMUddpXqDdyCYPV1RH4RrHoNv9AiZKi2gKZhpdu7JeSukfCpwhbqyjA",
  "key1": "b6NZ1iBLBAGxVb89gKTY3yTi9KPdn6Sv6SBW3hAqbgq8zQzDRyW44trNbnVM4RmUuiHAP3K7nmyUoaiPu8hrmQy",
  "key2": "59RUXZAbR57sJTDXTNxai5PEUibK48HnzK2Y1U6K2hV9Avx71pLiYgJ2DtS3PmkUncWquNGHxabG2MPfJLFS8oRC",
  "key3": "4kB2A4sZyCCJszFkmNJpDDqyDvqNStnSkj22wT1k49Ny4xWRNj7faz5rTWphNxBadrSoKHhyxkXNR6DtnKp7S6D6",
  "key4": "26NZ8TmzNQgRqvK87skLhhgFuS9hRFJMAM3TngM1DQVpXYQ2pQ1DyntYr6BceZzpeKaASdTpqdcDPs1eaAjvJeVj",
  "key5": "34RUmhTHN5tjS22kgevRPNYETmXxXjZSbwxyzPJd7aSLqDLtFPogMgKVDhHKRuJvrcWmuNT5EduBuoku5Figf7CG",
  "key6": "4mESk4qzQUBhXgvpPC83GK8gszn7g9yDN8jh4XsK27rkLirn7VCrbe9gt8RKneGPDQ5VNGk36vk8XaAT74omrV3d",
  "key7": "5mY5SedNbyfJEADocK94UY1Uqupm2avnNDgDe72gtLuVMbwaiABjt16efp7JpkuBHLT6CkW9hhBmFcPeLhShLzV9",
  "key8": "3hheV4b7BhnWGNMMrFpnM92goD1DzTwxoLHAvy3wk6amma1oMnGGgiNeq6LCMdSd9fg9NhNsU7ZDH8URk8sFBjhi",
  "key9": "5YBmCYznci57sycPmtkKg8WxaqyULtmgz2NcbY8VrTwyJriZezm4KfJfpe69uPXW88zu4yvPtKtSyeUZPJZ9gXKb",
  "key10": "3sCuEtcfkaRcdnYztLN7eh9okhCpCBvBzGzBAwGhzZGkYAojzh12JAaZpSiTmmFhNqHAAs5G3DbtwrvtDd2BuCPb",
  "key11": "mb33BMyN6zKuNzjq4JZD3taTc2xVa5irUHhN4V4VJKTQcuoqkB4wnmoMcFgAZs7F5H2uWK5ZQi3zX4BQaKES9t4",
  "key12": "4cnmKmE1gfkjBYsW6zMxyiPbDC5e4ukEShNzQ2c5b9BM3VK7md4JzPeCtN6ryJL3aUHR1ucKS41CjKUs3vrtwUok",
  "key13": "qHWyLGPhYUhWpmtwz9YZpXCZKLar6Pes6b6g2QVZx2iiPBPnQGzSznGBW8YvxJkypPTSNDBqa15X9bEk8w34oaG",
  "key14": "5dJjxAhiiMQDwKZ2neptht2eP2kDHX2AKWwk3MoxgLNnnWAa7KJQpyGecT4iAHb87BV4ynmvBp63qyavzhffTPGf",
  "key15": "55m4AzLsD8FjNvnYsHVHSvDR9yJrjJxYLZCURbw3ofuenMHvcGshqwQ5QKJh4fJPzorLS4o9ZKFgeCDp2hosUCPT",
  "key16": "3SXxVUyDdF2Y5iaprL8pgUbdixVGkbm5QaxemkUSqwUYSYWN8Eozf59GKkcBZA4fPjfd9cVDa29zJKBdgLuTsbdh",
  "key17": "4oKT3CMbPTV9S5TGUdj54awuBYc8yHExK67wax9Gsf9wGSpSjBgmte42McQKWKoTEvRF88uDiKPSm3WpaBGbAJ76",
  "key18": "2P7KJqWgEyAs3tC4NmXYFNs6475WXVKRYQk3hPu85TtoZgFJb7pDGUN4kH2HX5MhqXCoSTWbJfw79bpqnR2nJ6Zd",
  "key19": "3HusoyvAWrzj8jHk1fJRGA3rNhPuSScXvZ4uvWphHtAeHVeax9oDgEvUpae1F6LeC3BCUyBTPDSis5KcThFSdixk",
  "key20": "5oeZjjUbg2JzRU2xyvkMqc55T1vHKJuTz2Gikx8nAGwokMZkg2G3cyrYEjGuNxuahrUufvRHMGSDCVAfDbbrqg5y",
  "key21": "4fepm39uUsY68AhvpvHhVScDKHjPHZA6y6xP6zoqRgaxTRHWUq1cr4ACogVJUWKTsLrgvU82u2rwqrMubswAqhrx",
  "key22": "445QkKGMzGjtaN2EkJMmbcNR4ZrW83WBo6ywnvXJMmmSp1bYu3TXiFg8xRTtZtV5yBnwXfFFcMqqmGMib93gYMLR",
  "key23": "5fn9EZoShs34qyBK8nSdtLAKTiX4A7NQuooEu81Ec2jBaRfLpzLgjvJ6cYTADu5DF9JFNWmEnLLywRYna1EMtoNf",
  "key24": "47kZHG7bDXsWH6821adJm7CTeB4138781uA8dXk8Nk97jHih9gtc68DNDb6LeUdhgfBb2nbDbu5bDQd9kVn8XZZX",
  "key25": "4XyFJqyQJ6MkRyTKCxc3u9jwLz13AAwqvNb6dEeDNeDJjE1tbG7a1PyZLLLA6iFyfAyraqwoVHn1JZ2EhVSn1SZr",
  "key26": "4TBddRzw2dmN8TYK9FaRgT7fyyN6sLdPfZir7Za4msSoefedKiMUCh1sKKQjuz3fw5JH6f8Yz9gdueNMzf1wrAgY",
  "key27": "yDysbVf4LMHX4a1LRfWhDFkew7uJkd7vRfoKTEDb7UohvyWnEn4x7nAnFs5gvWFCDqANsiDhPD5GyWxY1xxQDJv"
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
