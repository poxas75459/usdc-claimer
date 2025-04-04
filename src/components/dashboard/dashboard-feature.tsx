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
    "3nXSFfDTb496owXB2R5zEneM8rLmb2j4QjpoM1rpoHtXfhfisCaSyCJzF4Tte6ZPGQ4eAX4FoSANo6kHCyzk65Cm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VMKwYB2xcMLTAHSf2kGQyD7cNYUEA7mCaDAqXoV3cqZTLQsZK13ZUBZ2Trcn8ztoYXFrQJzPHzTkNyxvQTNpnBT",
  "key1": "67nZBFRjieWoryuCGpujNbrsy5cyRNRwVLzVkD1f3xS3aVZsk5tYPMKMe6Fikxh3L2wmRPkdgVkXuQWyrgf3gQyK",
  "key2": "2htLdNW6fv9Dv8oSEq3aRdsjB6kvPzSnqCAgruRWY9BS89ogvyDX33Ab1zYRuBmj8vcmfHtpWFTfMcixAtaBdMNn",
  "key3": "3zmyKbpwzZhS8gYanyqLBi7ZYQeQA6exPtdvCbyKLX2XTnNH977fWDMCNNuwEnizPimw5cou4hGVZjNtUmSsPQec",
  "key4": "4AjiXpQAru9BXkf1KNFHVwTiU1M7bpgsWirm91atDDj6hNWBMXTedkeGBU86wu9VsM1UEuasp7C3HSjRoijoCaLg",
  "key5": "5U3mL4aF1AT7frex1GTkhVqQdYBuDK2t7bKrW4CVESKHBxidQ3zuCbwtoH4UXtNApguUzjRLSsRD3QFmyLNfnSku",
  "key6": "bViME6LNHQJLSHt3kXgzcYK4zd4JXoGi5DMHAngtm8Sh6qLTQTqSr7TcKaCsNNf5Fznfow8idS2QbDvN2duMHRd",
  "key7": "57LbhwfdjZtHwYDaPnxzuaGfjokRXvtkWtgTxr4Ye68N8iunJ72YafufZPfAQPU3AgKk2aUmirzDe8X6z6M8YL5y",
  "key8": "4J3h5rDs3Ek5CH1viHEBVtzfk1oHQW7wBEFhgoL9QyW3EU86tQPmFUaY6TqByjD2T3kVVuMjV9ws7tPGabN9LqDv",
  "key9": "44fTED2Wm2An1ZscZK6CtQNH2r4621xpZYYwpcX4FbT9rhCfpJfFwJJLxKZUMkCxcTVbDj6e2CQPz9FwenKhbWqZ",
  "key10": "4o1mRD7mm9Vow3pemRpfNuis46wC5KzPpTTWUeycJsEd3sVozVWjVaR2hA88ZApVXAZfUxKQdfns2Q5DQPuYzgUV",
  "key11": "52wfqHPbWYAgg9eHh6GuqzgW1EydhB4jzq4DhyXL6vt5DX3fwq8TYtxtMDvfEM34kzgDzX5uVGYaB8Q8pJtiGRSb",
  "key12": "4ujM73nqTa5tVknxv5fmKGg5C44ktXkSCDEYKhhAXnmuvF7Ce9zt6ARz7cScSdsaTBbWyeYskEqPjxnWTAka2um5",
  "key13": "2NjTJhXSB4xm5zzD1rdWkMcCXT65y6uG6JtecL4M2Qq1mdmmV2SQdX5mycDyGUJ6SfeKLVb31CB7JnE4YnTk7FBE",
  "key14": "2EpA77xwjgLnLjWa9hfbx81MMdq9K4EbA2HEQdzsXxRybYwogz95USpEMu3vKUL3Amy1iRVqRYHT9e3cyAX33EDj",
  "key15": "4iPETuV63B17sQBVpMcoqjxu2ycyL11DNe594UZ8m7YDWnhy5pJ5UVXqehiLH5fhXYPr3XFUFiLDSLEaZcoFfiLi",
  "key16": "4qZyKKkV9484zQqWK4E76StA254NWt7STHt5Zph7SEV5r6SK5TrftBPdeqpjjNBFH78Vhsvt2gc8Kp8M6Y7cdJdD",
  "key17": "4x7iKHvcBvZxXmUALZGNNQocvd4puz1tGe8AoSdThZthkLGHfrx1nisoaLvzUHoZo4iKozEGyBkwu9v9yMFXi96P",
  "key18": "5y6CTDYy9sTcfUJXxyvbDGhv3kpR1i2Myf3m8MCsphvvDE5aMm14RihZSXFYTdqmKCmrepSy9oJByCtP9Mhrnx9N",
  "key19": "5MTB6P9gnMbvs2oqWqnaW1nw8gk5dGKGKn6FZT4Bmk6easGhCpNmu5or7b8aRKzEpY7ipikh4QJ9kKw7GyNSZzC8",
  "key20": "4qDPq3JpyQTtf8CQzCr6BosVHj2KSc5fZoux2uv4g8wzfewbM1MoTNJFHwa4M4u87dHnHxDMZRNbzNy5ym6ACJT4",
  "key21": "RYs1itwDaDCZ5TAtv8j2Sgo8UcX1MxFh2feaTTybj2b9DZfbYKggDwbUQTmcewPpJNPvZM9MHRirEatuXYQHXBi",
  "key22": "2CmqCpW5XDC7VWDbSKThhiN6QX3gYKFiWt9An9ndz3JGV1pE6zwDFofp3gEyViZR5frpXkhVSf9hjumK5cF1WiiC",
  "key23": "4VDacRmAkGfjKnYSYtbMivX6QjNL1rXh8NCaDestJw2Nhtr5xvfPMTx8zE4U1KUay3YYaAdZpWeezCyY5TiZk5ic",
  "key24": "MXjTDgJn1nWcD6NHQk4UkK5twJe2iro33Kw6CdSyeFoKdYKKoXUpycsiqpLpYgbotF92hvAFGtGxeTEZEMwQAjJ",
  "key25": "3hjSYW916LPMJDUULArS5G5CVLonKnLDDUSAA3vSyKF5CvEJHxm2jeKmmWmrDcCVyeXWpF6zoUECe32ZfJk94jYE",
  "key26": "4T2umKoLXa1ZbMJWJv3nLUP62cJSbmZ5RuuDtSNcENDpsV5VrWdhanPjs23sVqfTcvy6TKwuhLsy2HGYRfzQDoPA",
  "key27": "5HEeyUV6o1DoDA64u51PjCHQYvbeBgPUwXRffK1CnkjFdrhD7anyVaxr48iTEHVD7dXDtU9Gy7JK5Ptsqkgao1kz",
  "key28": "2oZvsm12f1SCGQVTrN4tsWsNH5N18mKGwCWUwfvmtK23Mjs5zrdpDKjRGLFJv3EVHkHZP1tC6MgZv4SFjkgahp48",
  "key29": "KWi5mfR2RTMRajQkvtsux5KVfdf7NBGz6YJVwgpSnk3gYcESpzGTisuC9uYsk8Hx78eTYmSgUH2fT64Qs41uP9d",
  "key30": "3Suo52PGSP55LawrwywqVHV9usBcZCk1HPfLawsgqdA5SV4zMwTGDXpN4cAGsGhY4L7sSM4UPyhft2c8byWDUNWv",
  "key31": "2GtkDE3urkxQGjiD8jAxzFdt8ap7SVU2T44d9x5PQU2dy6QEQBu9YS9NmFCXgvKhc6FvBwjjShNAZtHJY9PaUrE3",
  "key32": "4Tha62m51yv79WUQJqW6NjQZDXHS4Ftz7FHvGmZ8pCw5BUsx1oeMQnGQKFvh4uHmj986eqaxkKhZmdqdSyqD37LB"
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
