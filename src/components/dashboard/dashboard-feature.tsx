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
    "28Wa2BQBUTegBLwQGivuQFRFWmj4ctkRZ7iKkLhaRggXmtWM5owbxpoSPgaBJJrQXfR46ojKZ2g7u3qPKCXygtnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHfVDu4gixTrEGhJmqcYHKqkfTyuWiL2C19vTfrxUy3G2nJZ6R8avwkYzx6Y85gzMEMLYJhpXtoHzKU64T9VP4r",
  "key1": "ANby45q293RFgwN7mLP45cWZxHdfsw5dLLJN5fa6pVPCxVi8W45fS8DbZASfKZCUMk5EHEx5VCAVK9Ubj1qfs65",
  "key2": "aardqUt8m6ENpTt35A6UbWwzSEEUp2rZaHeCM5wtrqPe6gcYLxW3priPKY7aShEqRwzs7RtZUq9gS16cMe1fFdy",
  "key3": "2yX8ZgYt4MZhbLuL6sByUu2Jw5qcG5hLkG3gBW4TiY9t3wXYzYSivYQWR6C1Q26wh8nZ1yLBag9Ry66EEZiSxCHc",
  "key4": "37gEoMk26SouWUNMV5e2DNtjrSjLgxzyDgKYtuuHdCCZWHUygHxMnA8NjCuvLj8hoEsyC62i9GYv9xBGFvkLJC4v",
  "key5": "ADqkLJQro1VAJ68zpukZ7f5Af8rpokM38foqfQedPfwcWqtTjc4MXWRHV1P13ko4okbwdu3J6AeKAoiyjHvpTRK",
  "key6": "4i46pb37PYPy2FhbrUpBCdeAQ65b8rYfXne5ESwMDgCj8tu63c2aY3dbAC7TiHMLMTAjehfFGdk687AF5uLVVMrC",
  "key7": "4EykV4LPUrXxB8m9Wp8cJkzi14kPuzzHDxfwAndHc3G9oKAa2YKnmw9k9yFZhvtXekCa8Hn9oRjbBLMcBEshoLQC",
  "key8": "2uBPAnKmJbeyjgibrfquZXbH7bvCnWsUgGFoDJwQwrhxvqFRnVW9rsJST5BYob2q8fSF9vFYYBK4t5Mkooj5zt5w",
  "key9": "U7dze3vfvEC9Tr2xPptFT2tHFoHexgwry3YUzSxr2BXsanfRkaEpbZ1ZvA2hB76UCPDzhyBKjmkmEis8Zj1cFTX",
  "key10": "2dmVaT55xdBvyaZcndcRFV58PKAm95cEV3tDHzto1oXA7MxuPJZyxg5cDuCZzNKSTaLc5BT5shFCm8hWSkKgMCTs",
  "key11": "66z3tzqVk1XtgksuevY2X9te6hEUco3d6pj4K785pkc8ZBar3xsjbSGg4XFdgGTumSZUmbeYg9TvEUqPHD72nzrH",
  "key12": "3vHRsD8SjgE81xdTkkMGjK1Qp6Jh17G4of1UckKmucZjBMGySKqmqnBkvorYEVNUYG1cybDvpEGQv85Mkb1YKQFD",
  "key13": "4KfBCgTMpMfZw3B72rCU2Vs4ddNLHaeYNb4wPHCwEAQTi5tZSmz5WD81qN57wRKGFLwCAuHL7e6LM4P9uB4hkG7a",
  "key14": "4ePWSXcWDJMPik97GVuPHdrC3zfGXMqMQVgQHmVLpD643HVwtQ3MSVm4BmF86UVFBT5Tt9rAaCWzKL3HxJ1jXGEe",
  "key15": "EK3msZjuuaPnKvjf6mRFJySq3S2eZJtmK9j2wRrEAks3AgXrmJD2ypoU8DSWHx2N1tp96pZo1wrfvWzHyWx83nb",
  "key16": "2NMJPvQsdEPoUvSHJ6GCdM33TQi1jviPsB4LK1HpsGaQgK6yiUh6jqvf7VBot1QPLUXaY8Uv51icnZW4sgZzDXds",
  "key17": "5Nis5L7VNQNoucV5zcyojJXgaQqz2wrUtb5tQQVtRTCRYEQAVAANc89Vh2NaRWD9LUNzB9Y57kLPhrimtnE3jy1j",
  "key18": "eo2mrNCXCnwD1uzU6DpvjsTtCrxUGU471BkeoLi9HksfyNy5fAtnXHNYNqBVTuwQFpDgZgJioMLwgywYXz8c5zT",
  "key19": "2fX9LdtriTz4g4jgVjizE4ebXpSnnBzrGzr1p6NT1VSZH8F5Ww26oYhmqtUpv9ZraXEWYKnbFAGRoVWscwF7MCuV",
  "key20": "5qioa2ntP6Txv5MeBN2N7Si4SoxAdxQpLB7CCZYDBo2QEjQhwCFpHCieFTSRx455TeRDMsqFPmmvHrQPFuc1S6aE",
  "key21": "3idHQHJwquKEyjxT69FaTJpwfkYeKi73Krg5qxpP9wtvmhRCtTTirpq5eBUxsPp7RYAzx93eQ9o87BaPSQ7JzNch",
  "key22": "45fkr5urMAPTkYZ5pouGDx1YvLqdPoJUWC5Stf5HQpS2Nbo7nwu8tNMdYkufLdY1pL5RZooEx7tLvbCQdZUTWdbs",
  "key23": "25wUwrc5EwiPCyFrnNbmksPxEW3pvbw7a4wQ1hZKtCKSKx4GktqZSx28Uh5ydrUt3HyhNpNmMeA2xYbeZxwhfasw",
  "key24": "2x8QU3oGqmmXXb3iMMX6atJY99uM3TRkEtWJtq1bAE31dbNJq6g8xCGsPykewCvUT6MHa2Gj7FTRSDm9d6YCfuuY",
  "key25": "3mPAMCgtuZgPd4J7JQDbrdrTKb1FqMuXec5P7DTa32GvfwqXGzR9w9n7voAeeDPjhYyRhsHyUjauR7J8JqonfBWE",
  "key26": "JncA1NesdrRoN7fCxepThFoBSD8gBjZzUiAgNrqahs2zJNsziHKheyvtS8bwUDPvJQXzi5Q1uq11K899nkMRaaq",
  "key27": "5PYFMdVsfc4SuidJmtjhr1s4za97FdLFUtF2kvEGR98sPMP7jAwfs6YFhpMPFEGiQWZJLmHsTWtfAzFwMm7bYFLo",
  "key28": "2L8haVXBpLEXKPZ5SSNVMaqM6eWHqff8mKj55zqghLVs45AoaqoXMDqzAq5zEX7yAcmnCNXAuuARMgzRQ5pgJThJ",
  "key29": "5cns2CYTe6VDra6KGCB5nRj7vg8erFkm6X7BJkB1koMiUipjoCEvdgLMW3YRdimwmwaA1RmdBWwgEbuB4a9aGvfw",
  "key30": "2pMrkToDiJmKW94YS4Ja2JrHJ9L23i88o7XcuqRdvSBH4ntGqY2iBMibT95WuzJedYiRUik6MZcqjFXjrMp7KDU1",
  "key31": "5engo3WoaGN8dnr2vmahnwYHbe6Dndga4QyD4LdPiUSpeRxMJgPa34tfyFfKV3WCKH8JE3HrHgK8bqNtdjtggAoL",
  "key32": "4DBMU4nJjrNqVuzptLsz7GQhx76FxyNHYyz4X6QQ4BTAW9XZxE9efSN71meurL7TcHgen7VErrCMnqHNngvuQCCa",
  "key33": "3DdYWvks9bw8SWvTUf4ZXq22Q7pXe6PFNgRP7mjYAjjYNvZMyxhP82NDwhUmUroJuPuWS7svz28VwSfXL21LF6Mu",
  "key34": "67FrV4iYKzXZ2EsbqLNrKbNXbV3zsHSEXBdCquKp3uhC9cebrJPER4w3Smni89C9XsnyX2py58EAUtWRA4SGeGen",
  "key35": "21WazQ7QRNoBTfAVMQH2SDnmejNmueqPrpj5x8m6niic4hFsv44AhrUnXKRuaZVTxZHiK8qVbfDMEJx9wn9g8Xeh",
  "key36": "4yQD2Xc5FmmqTz3489AeM3R3NgkVj7cdYkUiwC5huQEG6jEwVztndSaD5BUgBysod568UTdfv2U5Xf2aCcaD98EJ"
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
