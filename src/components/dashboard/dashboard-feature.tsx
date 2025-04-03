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
    "4BAKMv32jfv5yQhHHXYhTvYfBsEQpjFUKiA2ivozcevAReEW3mSNRpntX8X4bcdoTUc6PmWwb95mPn7iqZ9bjL4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXvRvXyRxLR3erEQ8Svmr5KbTPJxGDD4jLCV5yQbKZMQoQuPUqLQnU2te5ymXVNa2r7JHraKHzTvTV1p1UempT1",
  "key1": "fMUbzrTCG3mUPY9AKqmxyiHxxmuBjDfgdPwo5UtGspGAk8mZwDwD1grVEhstn8vksyXBwNup5xSgTf3c1FuRwVc",
  "key2": "4Uc74EygokqyjTT6kuTd22maTdgb6zhev6VL1rxThT7QqnHomLc3zhGRMheNKTjD97dFtuW1HpLtQqmJ9QJxevSJ",
  "key3": "2pazY8uHWVDLhBjaChYuE3DHCXdxBxBZrvfpf1ETM2H5QyT7v1sAhSJ8Gfqz9JiZusNF3BK9XBtpf8Q6phQ5rZJh",
  "key4": "32RtbmfoVmfFpUE9xsr3YaCnoLTGNXXuReDnEdCEbgPaeS7Ja1tpeuuoHj8CC3MTiYCvinTVRLjCWx5XchRB26HB",
  "key5": "dTWNhyz5jCDbXd6Z38g9rZyU7we2snLeBydN2KFwtd1SZHQndooiP1kV9jGSTKBFxHJVaKccbkdVpVodPLWUH8B",
  "key6": "2pPUZv9kfCDuQWkRWtnvSZC2Kr7yCo13ZdoLfNkswfHkA1Yhs9SSmhp6ozFeMuxn38Pshhxu8Wdm2phPaszR7sa5",
  "key7": "3LXrZbjJ5ucxM6KVbm4vR6JMjgzgU9rkafBKvfeALqPxp5yRE8XwarCUzZmZjKxuUB9cK1rSijXViYqXZpY5VkMz",
  "key8": "3DwNz57WYFmGLUCN7aZKtohQsukex7rokMhjaShiTaW5bhTaFXbgxcMESbcUx65rDjxn3JG97YSvdRGvfLrQQo7j",
  "key9": "4sjna7n9cvUqLGpDiG2DHXi8ezQ1RVEJrqMow2onawzgzbB1qb4VsyqxoxH14sAARd2uPGbZF3EA9DCH7xMudQZn",
  "key10": "3o1W4oVy6hZexEnKZWxNaoy4wFWrLHFSWmZAeWtihQwf9H1sAyuLkbgwVZ8Jf3K9t7tgjrvL3qQppTXkoevJCfJo",
  "key11": "575Aq7mhZgbWg3MXNF1c1gyx1ZvX9sJU69ojFubvjj7eG2i4mLNftRLvkKa2am7pyFs4SXKB84ELnrSSdQnLn562",
  "key12": "3etuxzyR7bBhAeiDGNhUDRGWK6rThqUzyXDNiGD8wQ51GyMkrVGRqWVZRRMWavAiKyiY4FNSiF1gws466Z3y4wLN",
  "key13": "2qvRkc1U48nHoww7BuomTq2H1iRYRBTPYnaC9ZavyVtHZBNACYiweKgoGnDc678zzo9azaBET8ACrDs39iMzLZFG",
  "key14": "4JSypkSG6RsNQipsnenGc7bwvQ4yba3G6yA33Qa6TQLCKNH4BSU6JawP6JyAnUGz2cmNLPYNXR59gAVi8ntyAdHg",
  "key15": "2BuoqBMpVeQrs2xBMpnK4Zdge1nk7Y1ckg3XJvJ7jabnyYfyJXJwW3pPzkKDFNetUP5jXVYyFHUDrf6d6aA6oRzJ",
  "key16": "3SNirexnsSrrnzChc71Pjdyxy5A83Br9bsate4csDnbjL3sYoDdQkAx2LQ2GTW2dP6wf3yR2bFjNDmuTxFWmDckn",
  "key17": "LiYDwe9XhGSa44eAUNFm4EKUoBLKa7MvHdKTukEhjgJVVqFudE3oRr7d7RNrXg7UzX7yS2yJ7ihYbJyZmKgF4wg",
  "key18": "hyWAKpvuwrMKf3d1cFhKbNSCMA7W42heS6B8HvR2DnHgruATG9Ufpj7obwJEYPPMmMBRr6YNmHubBLFDTecVKqq",
  "key19": "2eppbxRrXAAr9dsjTBmboAEK1CgHDn1Zv35cTWadJU3nNhTGrsNXNB6GLTfaoPDyDVWKCDck5UX7mznmA8NXQ985",
  "key20": "4ZMReqUTHgiCVReFpuH4Tiv2zRbeEetXJY9gQsEgmWvnT6rcvP75inbshSU8yanTaQt8cB5mWASBTNcJ5jhy9ZiG",
  "key21": "4scU8hLoeHt5ThG5AZkySFicDL4XJJw1LC9EdS9rXa48KMFazepvpThHmmbS3oXtFVZ6SzveaCE8UVwoLJPguSGr",
  "key22": "5ZrFvxyUYoaZjbZcMmGrjfMvQha89D7JDy59LSAZYu9ensyqJVpcLuB4CrsAV2TnVjC4jP6Xp3UAuUDgpWTYqJ9e",
  "key23": "2mjRvQddFsZrgKLmwjjXNGjn13nGCi83cGZgPMtmFTxy1wMggpGhkDz1azN3T7fZa8yDhuFM7JCJuXAHDgknCrZf",
  "key24": "2k9m9rnsCmuAxnjADxRV42bmJuziQut1qH2CyirmzBtkY7koBaQZuNoRGELiYLF3fQhs15ApjaHmPfUAd5N3jeq7",
  "key25": "A1gpM4G84SCRvzWFRapm91ifrHj2ft2NzTcnJXSCo7D8XSaWk2fLVRVdXbFv8tCLgR6ksmNKZuCvG4DWRSwmxNz",
  "key26": "2v6jpSuYBe9Lr7fWj1hPeefiDPHVUfKkeLTY4YBHxfgvuVPKqJi9PsJffKx5PwtGGGx5Z7RViyNkySgQRaJDGu38",
  "key27": "4Q3JiEEg5hNFaP9nWpYGesT5ADqqmPsADRzxCzDu6NUKm9v6d9uYK3uXy4Gz8JeLyaNMovWzbMWs5RBHqNPngFYz",
  "key28": "SC6svgWUYpGExQVnwYpKcQHJeuTfhxuw2yoG7L3Sexr6KPes44YDZRxxCEJs9rfBBWFMr1DrzcqWuDY2GD3gAZm",
  "key29": "5vAZYVZaPspE45PSpWMQ558Nt2fP9pF9UnHWiDBd2gfjQN93V4GkuVLZPQhG7J2yjDAbcoyPjitQWeLGp41utcRE",
  "key30": "5Rv8mkGpXYJZBsp81SxmXEkFdZjHTpdKT6eWZdxMkBat3H9Euiu1txWSytm4s9HS2B4pi6t4ogmytFDzvK14aoRQ"
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
