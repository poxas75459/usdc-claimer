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
    "3gvnrXnVj8RvE8U973o81bduKeHqEHJmVTKqct8x3UbCkgZpuYnsjtUG5x6ht67Lgd5ioUNotydu9Kp5Ss1ZdV2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Z54fV5DHpGF6gP1xDnsbJThLFqEeF451aSFy9exW3QyKaioZpCn4CNpwx95G397kNcHJLfVWeUv8kUjU88MqwV",
  "key1": "4667QMrdiFsYhmo8mRYE72tMgmKk8jHzB1BLLNQtydthkx9P6Wu1Y611oJN9Sm2w9Z9sfejqZnAoqm6S9Dh4RDRW",
  "key2": "5o5YbuxizH8JXWwrtpmAsLjRcEboNzWCHDmJraQ4FtboLG6UEVvkgscxyA3gVDBX1uCFeXi42ci5k3qpNeeNoeu6",
  "key3": "3xV2sdvibjio7dUEwj1FR7jaHCD9mzTfgAfdEnwakkRhiDnT2SmcaeqqKCZRtZUpunTCXYoEyQKfXSeFraTAyKgP",
  "key4": "61tL73ejegB7V1jRBq55KW9NMhfJwYZxRfGspcUEbWtA8nks8s41zarohWT5C23qUNJwWS5ykqeUmQafYDBfJrSq",
  "key5": "3BGEsxDpXtqstuwDZvAJCcFWjBm56B4FTPW9NMtZ6zGKPVx7iUy1Vf7YK28LkvsCgiu6vHxdpNBMBYm2Ppm71gBP",
  "key6": "4yjGjxUethawLqgFBhnwiCbgSP9tsrABHd7zMMWn7aqEmxhBAvN2Rp98phhAt7JnZ1a8tUrXyQPCPNEWKnc5m8Dn",
  "key7": "3AjPSUqLmwBMw3E6SdqLmhY5decUBcBdsntjxdC7xTuAfnGVuZ4Pt5WpHFL8h28AAoTkK2b79FitQybwTcRMghhq",
  "key8": "5Kv7mjZTPY2EwwzRGAZBEQnW9VYyQqGkyXbo213d8CxJ9J5C9nhY124NAWvZY5nJpFcm8hpHFsQpFxb6ZR9yHmxj",
  "key9": "2dknS3KKABK7AU2EZUNv5XCcc8HbGA1GY6QyrrZXv8m5KtGoGq1FsHou9ChXqcbcs8v2A3geZELEcRzqdPQYQdU2",
  "key10": "2joBeEyQSsMNxywN92A1qHdVZn7cqACyroWj2up9ik3d1F8ctBU5rRsPrBWSfkDgxXUo3yJm8qSrg4FSPKK5TAr6",
  "key11": "2ond4gXKN4ZEoMWpCyeDyzN2cYAfeRHHYU5UxwR8pGJqR9v4N3qV95SWzwY6EH5QYyoa9NSyczE7JkLJuXL55Xuw",
  "key12": "TV6yiGHguXe4g76ciEhDLVWkXzNJVV1Z8KmTS97mHe3814DGKzdADTnLBsZnAU6X7AacDWuP4Y3MPao8Ur8wiPu",
  "key13": "4qHp1y34g9mWosHaWARgxuxALyy226wcHjgy7zNCsxCAnHCwqUKba6h1mjwfF6PcdefUmLQP9qA9qDFjCXVrLtQ3",
  "key14": "2M2LEzH6t53FpmDdhmnc1hx9QMXwAv2LCMewWz4JaXW4zWdBhuvPkfj7nS2rsnJATpu6FMiNQaAcz6pibKG4LLJq",
  "key15": "5bnimQWAaV2sKZKosJwZiaZRQxqG4STN7Sn5QmYA5dd5rL5ZocLpcxMtKYUmoSu2NMNHQCaoTXaAdWS5ZwwL73ZS",
  "key16": "HpENyjm1bcDwoSgz7VsP51ZxJWiGwwobqiifci5FJ4hBkPwBeiNMsSRBGQ66kyP7K83wootkVm5x6i31KH8kcxR",
  "key17": "ttG21LJmUy6LYGr3M8auiXXv9YkPLg4dPyQFYCN5nR4nFJ6W33Rg1LEYCGFUScHSbN7b8YJSSqKTo5JRSgMPxXp",
  "key18": "3BbRUPqttuFaWcV6qbH6o2SomJTiJVemBcbtoFTdyYvdbSPE1Hn5xfJDucTkXaHHTXbfBQbceQFZGunACaAy82tC",
  "key19": "4WJANhqsS8ZGcBvjeZcXW4amH8JuYkmN7vA81mVSW32X85gvnYLmHZNvDKKrcfxZ3nJFyZaz5DYb8BTFfCABqUGx",
  "key20": "63Nc8mup9DBMkNxhNFNYLLx48bEgsAvZe9qfNNFvWijVE94Dt36Y48TmPk8xhyaACKLUwSSeXKM3PhyHYbhNyB9R",
  "key21": "2CnFtZDwZZHUqvuowTPdp5QhvmCFBrJVhss1MN89QKBosiGUaPGPBKY5eVcLihbWde3RWrnJUAwTktZSCxKgR18m",
  "key22": "2FTC2V4U5W66bQPgFZZHdGxWVez6ZHaK8NJCDsDCfiobySdaQZN8BbTTGqP6YbS2fuw9Gkq2MTYz9gcXwRU8EPfR",
  "key23": "3tziDBGteurVVpmq3ijstntyw8zPJbGRNuZXBMz5a9AekgEyo5zJLosR3oGhtANJSNcUcFCbwxWt8yHJ7ctL9x56",
  "key24": "2riftAx35jhjZQYLJ9xQ34C9cwwpLXocowdpqeTC1Gedc7vwmPesxf42FxWo8KmGiPEnDsZHp9SUkEqg7xWM91wj",
  "key25": "HHaJJx6dpE9T9TCRQKrEvFSVdVZuRq3QKqAYqRDAwd6YwmWWKpaX9vyHwksX7sLDo7ZUjSwtZsbqMyQBZaZ3zhe",
  "key26": "5xT5AFGaaBoKciS8nbswR3BmDvnU1SFsMrCbyuVfkYn6wVG2sqf7SxonrWpCt4sNGYc38L5citPcPcWWJUYTpV13",
  "key27": "2dq8B9TcezR7ptgP6irmnMJWuKVycmDwCpuBccKkdBueRLMseSEPGPVgf1h3YmreccS2WPemWAbLDSw4VSsn2K7v",
  "key28": "44Mmt8F3h1c4YKcnXRM9GWbRvMikYScNWxopgYfm6bd3x9H4x8MmrVFH7hvr3NVxeWYfeASpTM55rqk6wvUdpdZT",
  "key29": "5KquEp126VSxhvu8UWKeSafDw4Nmhn57YxAmBZT6ccc9aNKMLj9V6Naa8sXtLMSsqP7bp8USj1mnR3shqD6xyoWD",
  "key30": "1zLHscK7dVhw8cRBCHtJxqVZnAvyJ7XQepLu9ED9Fce35hfXPdzkq7APEuBbKJLRoqc6QVNz8MkhQU3mcPVEoMc",
  "key31": "5H5x7JnFYUTXTuoQ22sM9mPxKkV51i3QiMwCzUvSGD8A1VfxwAE3bii1Rzz7sXT58oZuPVkkRtqBF3jenDEBYUVi",
  "key32": "2KpSHw1uUuovQnCszTPaBwCoXjQxSSdWUXE3yn2xxyQAjSBf71kY1qdhGuYyyYhQR61F5rL3BoEB1ySkWAH51xGw",
  "key33": "4E4XfPupBLpZxGsvuLVqA3L5Gk3ceqnL1uXeogMJKpHYPnfcyxDErd2QtTUgRBe721yU4e2Pn3cKiptWk1P1g6Mz",
  "key34": "5SzQ4LHKJzcrSrFVB3wZDmo4WdbvKvZSqhztPHTJo8zRV7iSrbVP9z3QaDBnAgGofTkXfdgBw4attfHnvCnY4uXr"
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
