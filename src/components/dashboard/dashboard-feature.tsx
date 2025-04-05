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
    "55qkQ7kaP4QKGrnj3JseQDNRUSjMTVzCWUzx87zTqedoAUSZwfXJCcNaLaCojQaaJPfGHtZrigBV8Zu6yFHwSXuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j8rsWVzPU9ChMKsGiQKk7a6AR3d8YENud56tz5coRa5SCsQTHv7HXeZogJzBs6vLpMZdghU3t8YdrfB3nWtL4rE",
  "key1": "RwVY2DdR5GcKrr9daig24GoDhpsNBfB9hMd4xayTKoSh7v3qMzfzSJnf7zf8vXwBhpBN8EeYQqiKaQnfRUWGEUv",
  "key2": "5tHht6se3yBsZW9z8jbdcUY2fHVrjjizvugU71tQjYZFzsXNumuETs4HnpGDbpj3Pn1S8WMdw2fMp3SKnzkq7SFS",
  "key3": "2boJXQeYUzv5vJBycuA5Fssc5BziS5SziXiFG1CbxiwBs2mXzxM1Q7PnQ8U3MVDFHrZJ3Gcizpxp1vJnfZzfzprX",
  "key4": "3iCXdqSMPVRdjkp4VzqPWJv9KEuC1a2dG1Sy72696sqZ5nwbGUgu6uGudS2jTdLxqCtaQ7GG3qXaMctvyptk3URt",
  "key5": "2GBtHfRemFZiwVb8uPMHE33MHodgXkp24dmnqf3eBuYwyzXe3XsYM8TG8HCRQ3hB8xrqg59rhxLA4tmiZMJBGoAz",
  "key6": "3dG18kCgPHW5M8ZdN2uBbjmPaL87zTT8pCfXcVJTnWFmg5k9rj57xgcBKAXpmRndp6jkcuaVvdTRjpvbgk9ow3bf",
  "key7": "F3Aepr5MTTQzzsNtvVWpzBhJKy5m6wF3FNvvdKSUm9PtwCeQR1vzjhkwgvTfZSyVX1kg2bAnFawbGFSLXU2eWDL",
  "key8": "kve46DjVPCnuGRRyaxpWAsd7CbKpKpG6gG37EzHBRNsaaxc1WznagbZAuecwmULQoyDUkUq84WHfBQXUDgDqqSQ",
  "key9": "jTQPEYB2ZqQFo7vvjPNLngYtvsEc4fAUikoDXT5S4831c54uQEP7yRWfER2nS4np8PnNDxXN8HkhmJiubS652sX",
  "key10": "fKNjtLCgkbepeTdr357aaJpsDBiU4wqypCrpqUhxJj2y4bEhCsQDPdWgd3Md6nhRg3YtZtFM85mDacCibQ2NpmX",
  "key11": "677NHKXyNVc5YsCA2AiSRiSnbdwwMvtwihBKEnDGoDZoXSSWF6iXCiXbP1xjTAJtc2yFeDDtA3M361v1kecpPSt6",
  "key12": "2QAdY8Us9DgX2My45UmfzxEhA9Bzc7EU4w2j36JJWjrVvDACRRAUQ6bUL5wPKm1xY55fPZtyowckysBZSGR7PKYd",
  "key13": "2HgoTMsNxSVJ4QPRW8Mcu4zeD1MHauPmENfYnjE248X6USoELDZU7wjJqd7mKdnT8K9cu9R5ihaHgShegF4nVtHS",
  "key14": "3Y6eNbC1EJfETYmiiTLbQseypWF2PYTDk4xUXnnjyKv39cod4eDpCFvD5xhyd8Mj9ASQ7wxAziRZ8tRkeL5o6q7y",
  "key15": "2AfbbRvpd9B13LmhttPvaGERpbuDUC9YwBczGDSDK1ySQm8TstykGj1xXx7PL6LsPHzmbVu2WfK9G27agJwEcjwS",
  "key16": "4jT3nS3UPwkYbpFNzXZyWBGeELfCtKwf6TyZqod6ZkpWjYSUWfNHECTbznHm7uF3XqWp6ttfTQj3n5N3kXwKZrK3",
  "key17": "9w3Au4pii41emdNiu61nJdb3xRPKQFKmbMuNrqMzA1RbsvoE8qFwf8gnuwj5jSiNNZi9UUZRWvm9fBHaJLJfJkK",
  "key18": "2nWMUwcMZKW7ZCaxegydgb12cLqksi4Z8QtmSYvXns8vmL4DjEPqG5MZ6ci68RaaD2buwGpP5uHZ6eUZ8N8CuetM",
  "key19": "61fMhNe1TdjNKJ2XW6jWNTeLgmPfMr5Lxmv5NuwoKhEeRqkWNaMUMWptMHDdb7JsCWqRtfRH7fsDdEVHdwK77GmV",
  "key20": "5JUW66Sj5ekm5533n7bYfSDKjDAqzkRcsif7Z9XYfdwsGMdNmTJod5HH11F41FzZBHcwuSN8HMzbNBftVxWSvoDH",
  "key21": "ob8M2gQSTkKcpYQtPfafxLBNd6EKsSnPkYVNeZM5vQ6tHHqgUyZRv8rKAHucnhWqXBB2v1Y5ifu4bz3wSLVeNdM",
  "key22": "3Vf9JKM7iTBMKk8UhxtijENB7mpPj4JR7mWkYZAxxjwVQ8CCCvrhenFTUiQGNGjjC9Pa3F75QnTF6HpCW9hKVm3T",
  "key23": "5QfTL1nPUmpbNgoA15wm7zUWN9tiXQMFk1DJqkkfxM4VRpWUrEXy8gpaPX5PpUdDh7vgdGL5e1rQ6hroBxx5AQu6",
  "key24": "4em4KWvHcNuRgD3TFZtv2pf8Hk75gsX8B6792T1o6o5Y6K89LvmZeJDDvJZkjeWfaEQ5s53hRGfAmkzcQbaStTGa",
  "key25": "5uiy4eSbruXKcD9THCSMhF1XqGQDu8jJcurkzmZyJaWhqMvfhYst32hzyjFk9C9BK51t6PSXtzXLdxaAHFDxo9Bx",
  "key26": "4LDPTHJ6Zg4uAas61tB9ukfE15SJRN7JdfHdFp8h9VXTLgAoBCD7usv6vsk4NCCU6o2ZUt5cED8e8NY65kstTFRi",
  "key27": "3BNviHR7Cq3JgGtAeXbgs2undFDpxxQbajnmRHTg2gs9DmC1j5Go2wNc2wVqEBT5NUBq6zesjNSY2MxG773jGz4B",
  "key28": "545a4ieuCEWvmPCMbGySKUWS9ETeJqBDe7gUX6tEq9jU9D4umXZuednQwKCEmnmkJDnU9QdxuHJEdvBKBLhPidwz"
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
