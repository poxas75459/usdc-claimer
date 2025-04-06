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
    "62Am89G7JQy5QoUEQPokwzP34UyHuRfNjLAUqMK3iwyv5j5BB2CykhzzueNgkWY7L14rNfYKz1gThJkaACyXULrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mCtZDCN3QQmWS6BDEZFaqiFyTTqEHbDZScA51zj2FzQnKSSFWD4xEYe1CMj7ewkWW2GyoR6XBZfcF1C6jXsQY6K",
  "key1": "X38U3gxdEPQEEBaUV7nQUgSx396gaahQFbPmy2cVVzKhp6ahj5eWmtbdXWNFzM7p2gfCT54byLV7Maz4jn2bUVH",
  "key2": "5SVT3ayPz4TNPUEuZRpx5NPm51HXf1nfLNCEitrkoXTmC6BdqvDZC4yXUBG5YLevoiKNwzBkMUu1PQC3KBXe7LzD",
  "key3": "2wj4k6uyNskQomE69XeF51Yz4UiHSshrJiGCXCtNXe8eEPAymXzW9evMthMzSuPNKoXKPv8PkDGbqAhh3PChjpGi",
  "key4": "4dfGJZ6c94KEx4KPdj5zWQsJabS8z1xV6TxEdcggnLALcJJLH4uXFgc7AtExH8mipNuxNPvpJf9fojNqPkEkZnqR",
  "key5": "2n4pKpGaPLXZzFJeMiG3C9J9hceGDBKhTGTvqTvcoFPj75fjhkLtj6pcoY5FrLR4ie88Gc8Bdhd9urt5iLkC1Rcz",
  "key6": "3A5J55f74RyG1w15gbzURteskaeYZnz7kEyfbzb5FZ4XNcjseLZcEBJ6hq6b2fF2G41nmiHouYtGKcjrMkCA7EVd",
  "key7": "65t4e6RDB78RN18UheWQQsdKXfW9A3VWNiwzVV1Ua96scRQS6fYc1UdapbbeCwND99PtHW4AaDNmM2PaCe1HyW7p",
  "key8": "2c1t9cGA48p47WEEEzQfoELz7aAGoS7zMazFsCqZi9Z2zFALsPMVBLrZm1wY9fvRQa2usobznUouDRwMoV4k6LBv",
  "key9": "2Soh9EoRVnumydJJkmP3K3riWZ1BAEirroZ33eYnPLq8W3P8EgyfYSuquGTSfV5BAvcY8GqJmi43vLNoLRsrY1YP",
  "key10": "2WaFHFSevjqEhw4g7bkbWbaV3iBG82SD4vw5eVBTnr4R4e79Q76SQAqjouLML99Hfe9wxUBwR3gaUSXdZeyWFSRc",
  "key11": "5huWbdKD9sfxYfsZzgHF2SkptkKYDQA7vEDVABTHqHUC1caxKzcqNDULAGytmWP1WgAzeiYXnzdLq95q3TDT6Ks7",
  "key12": "2QdxW26bC5ynAoujvzWGEHyoV3yGps4oKDjVtzuS7rAyGoQYoq3GUD7CtdrXQFW2Pmx49aGwxCJUFRfhj8umUksL",
  "key13": "4SW1XY8PJ4o37Ma5KRBhEGz1M4s8CgztuTNyaraSw32d8M3VDWkY8nwvaA8e85TSmYtLC26kMVWekaLJTgygd59e",
  "key14": "7Ao53VTiyJ3gN6q4wBVvV6LU7ZAckPVzDQuot4qbRfD8JxJ8Q2e1qeYQpiT8AEyZqNz4myVwbyRHA1gA83VqYVb",
  "key15": "Um3VLPEnPCXQYBdpWwGDr1qPmMNrzky1K2RNpjnb3LrcKaDy7MQd2fcaPG9D9t5BhEJmMVLD7CnRzcb5qUWjeZM",
  "key16": "62NAaKiQzVEHVomEMLc3vJmmepBjWpduj1LRzPHvcEySFtMqNpujzyitHHPR2WuhThC5DeiBNPyS2DYxBzx4Vm3L",
  "key17": "33zBAsBT4WpVnJdh3P6RvKkkaFGQDPA5w95ZeEWADGAvKgAowQTp6UateoF3cMVemobmbyDnnWy84Ehsr3oxEG4t",
  "key18": "2fwGnu55vvpHjVmpuLv6dZMiaMuX7gh6ex9c2tREx2wFnyVkzQXfnAuSpaFjTs1FysRHvEz5MqhJwfUW2Q6G1RZo",
  "key19": "5rGh7uRjRH3nFbT56cE8LjXjZV1kzWyor2bcFGe6w69DHCb9n4mWvyEcSyRGqYEqxJhpSkfJnkNMMSzZ9FCfWVYi",
  "key20": "KhF9qzjyJ6pNnwkXgg9M8HCZTWAxh4e4PgM1qaAWoqbcNzrSSfzXkfvomMqM3Ex5NgzYnG4nUvEJLxyg13FAaEa",
  "key21": "2HGLTjqjEbd9mfsUGaMvhRta3qEWbZKvfW5w2y3GM3EXjgSbD6m55EyEuPNYFYanDhPKK8AgGQd1DgJBBkF7XyMr",
  "key22": "4DJjNx35AabNoTU1Arp4b8qAfepKUJi8QN9PfqLfFPUQZdEkiSCNfLv5jyNTHt2j9jWYua4KwqNMpw3eLhtqcTW5",
  "key23": "5F6ss2yY593wVqdab3EaxY57C8f6EvJDdsD127dV2YgQRGMpGmW6GyWszzdp5uTKYhjntmAgT3kQx2ng6f52ATxc",
  "key24": "F64fae39r3aCkitTaKYrSXyqNNx9hZJJiWvza3yfrPCma7WrAVwi4XB9LB4FZgdxek43rfrGNFo14B6hxCiSa6u",
  "key25": "33pXUttArz6owZK7wwkxMchbCEETm4xA18L3cSLZWq64UGZ4DJY4mP1FePfiHFvyrdJYCmf3ncATEfREiFuihaGu"
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
