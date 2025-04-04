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
    "2LGaxyTeKebN9nRnyefVtRVERTzMuxdMD4ksxUzxrcsaP8zxCYviLwpD6QvTDEsAmUGrvS36VKrorzPUNsxGTiSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EtcgCKp3iuZpSuK9wm6B6iigHb9v5py8cmJLqVu82X2U2nzaHbh7hTQiUEAGAJnCsWu6Fw6ZmyWQPq3zA9K9Wti",
  "key1": "2zEv59Hz6n6hhAsR9T1YXcoUCNRdDWZu3km5EjCFANUWFudw7L3f5Tr9jXHQUWBDDdXML2Z6UgsErApyysD9uBXD",
  "key2": "JdfZ8YvyUrtfD4QQZPNfDERGWcbkZ8ATaYBVzhiTCqJJWhSbmTt1pUiuhaYzZRuG7iVR3Ay9eDiMHWtD1z9PGP3",
  "key3": "5P2xGDaBLaW18ofDQTNfpGuoRVdmi3o3QHmBkGRyBSeHYxrxHADXyYsrnbG4YQTeMQBdxsJvmDQkUFhN6cDA1Vz",
  "key4": "3JFmRQHag56BKgsBAoW4s9MPXUydBM8GabanQ9pQYEY5oeoJBnZGmaV3qgDfo8a27FzuNJsXFpbWyLvoE2dKcv1V",
  "key5": "3G1LoZ2D8E68sjgen9B7BvuJWiYaAW9b6F4JwCedakxASnNtcRcfFc6i4gc3PVGP23ibUMfgRhRjj7DTo59ne7Yx",
  "key6": "5cioKJ2BtQtaoTqxiKytVAWM3DZYM6EmSgetW8bjgwusAbz1dXuG93QYhvCPQLCxGwGojwH3ELgYRookWPL5yhvP",
  "key7": "3tMpkdoKHDdDgsd5WkFzWVyRr5uVHbv9tYH8pzoG2xutaxznRFADNpMaPgSzW5iBxLm21jZFZ4Wq5BALD82ixhKM",
  "key8": "4CEMQFTA5iYn72ALS4w9ERrAfvZonkdU9qtEu9h4NugQfkXdVyefeXqg6uWZURGNtjCDqSHcJG99nKXgbbspJUz",
  "key9": "wdvgJ5LuHF2zLMhyvstcfKGsPD5qq55wfgbmiFyecYRbYQMKDN2s1iZXR7X4WrhomG5m9GGNMN4zbS3qWk26Fna",
  "key10": "5H2e5DD4wZjU8h6dvsmPeMmBZEx9hi7iGjTye5kRcfRZ3RE7wfV8ZpK6NpWm2MA8PrqH1cPZqAqvEuadfkFqm9Kd",
  "key11": "2R1qD1ogV1WeX69cUmXB5Nd9JEmersfWiNopayST5juuZSyQCkCM7RLem9iWVm7Mry4HAVcYruVeqQ2xq2Z6MK75",
  "key12": "33jNpYjte9f82X22BZuNU8eHuaykTEPuUdikPTYRAmNPshWmfevjJfnDivFkjLVsZEHYcjSEpK4coVEGaYmFgCva",
  "key13": "24GnhgFex3Kz8cVA85TeNyuTGdg1Vshm8L47Nwx9t1kGoce2ghc9Lc665nMB9x7RW6casrJch7TYg7wP9Uo4YGWk",
  "key14": "5SMJ55bSctfHYiE9VBcDoNWBEDqzPwjXf2LHJ9rsLrsqWqedYVZcZXRhiSQAXGwwmweewE5Hfosh7Q8w2qBDDF4M",
  "key15": "51AX32u8Jm3h1FVzzQvBgsNDMXaNf9aTBshnESgrLRAfvvJfNWwRY9fsi2bLvxt1FfpihvkMb39JaoK56UsVZvZ7",
  "key16": "28VC47u8KgfvipCE9SyD7rrs2Kpa63fsVCExPH6YrE7cSFi5uigsaFMzWCMBj9uKhKpw1frrhDj1jmkfDPnQh39j",
  "key17": "YcAwBrkpEkSEGAPmRfXaAEbWPRRnrmhvcDpk8YxZdeLomNmWtJpMVC1WuipM8nAZ9MkKiNXQ3kD7L88YUv5yWY4",
  "key18": "27RCyAEMEhWUzJs4smZhCqZmjNKKRCvkn3cBwUomtM1c9TMDRwCfzFBh5ErFx8XAmQttuGVdvdy9y2WcHbwfcn3R",
  "key19": "4kyiotdRzcL56bu3SMR5jbrF5ZNS8BU5SfVx7YG3eBdchimCcZW1pH6DTWE2SB75hG1UUabjxb4DrqQdn9YeCjAM",
  "key20": "5vSyXt4SwVHx5eAAFCmxEU6wzGowebThoh3WrQ73NpXqhfvVZGYuGKMcWBMjEu5PfE64A9eHdSR4XoKvtrmAKHaU",
  "key21": "32Gm46t7CkYH6PEUUi12tMtkPhbBHv9ySS9xkghZc6Rdssm22pPXLwmD8XaGhuStpRUAXfomwo5xfVk786zZw9Vc",
  "key22": "2cLxW7d1WBKMsY6aggmWBDrrHsfGxFRhZNzukJz7N9wRuCDpBaz63LSJUp3QdeGwSjQscpoTrs4TeDBCkVnobrbt",
  "key23": "wedckyHGrBMFYLZzCgCbT9hUFV9pKebZEbHc3iUNBfHfJQZ6kwMVBRwVoWSqivDwyzRSNdshLkDcmHgXQyaMeMy",
  "key24": "2Mka3rkZYXHvwoT2PddzeYh9riwGdN8b7B4s1FyZt1FvM9U12ipb3AM74fA63dSc6Hwy1XACxdAFCH5APz2Z5MM2",
  "key25": "5uJHZuSS9LGUiRXnGgebS5JDaSZ33kUMyn9VNT5EyudWUttZksKjaRJnN32Ja2BJRD7tKLNwqH48tLnm4HxF87EH",
  "key26": "2WGgLoe54FxZ9RLKi6zeqs1qK8UNppNsVKGi4WUu7VsCVgVwSyanVpQj2S4zyWbQ29mocashBjaYRRYF5GrBBkJ9",
  "key27": "5MVJA9WT8CVjkxcQEeaDqkgA6eZBXUhLA4va3roSqDHR7CS8rfzD2dYutnqk5peTAP4VqfP5U6QWR1kB8UAo58pt"
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
