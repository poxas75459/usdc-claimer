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
    "5tegbPwBz6ia3meG9npkossKVsiJb4hxB7v2U3tK4bmWPrBVCt7jKRWBNbiCyythZyg7GLWqGVKsRz3nFVJbmm6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "489iQz5vBVzxyNiAbYLT6M6TchKknYVNNVTxbzkg4o7rD73XPziRZ52c4MEA9Zf5bYVyGAha6Bamog4DYZXVYpsW",
  "key1": "2aRjKUaTmt1JmAABwYTudLcU6GntATATykF1hqF7Sjd7t9P6NfHC6UAttye48Amb99PjTgYkyZDrU6b566sdDXQv",
  "key2": "57mQsdjZ21khB4AGjuchMfry97UJcML6FDv5t38ZibU7Sw9zJPk3kjthT2kn3JcfJFMcqokXh8eFo161cHeZNv84",
  "key3": "3ATAqq8Eo3p5Wy4xbPetXdsuzN7UQ7oq9y46XBdyM3p2GLN7mVjSEn7AUBPh7RVa8xVVt7rMSUP46N4XQ9xd6JQL",
  "key4": "64wvUam2M1utCKfaWkZQHpkDyZB8KYBVGhpdBBZEqeSHCcuoQBxi3HP3pZZ325QkQnK8fjW5LHmV8eAadJFAU7jx",
  "key5": "3wQ14LikeZPZzFMmFomnbaqVCGDNp7No2YrBiX3Trzz4h4R5DqDhfKXmGbBm1PiCUf41FdT1jGtBdZ74rsm2a2db",
  "key6": "gbH6WTrAp4zpvvTXEouGe9JdFSQsjE5VE2Ra3Ed7dAXnbQkDa3dY4dL85iMEFXjXLYhXj5n1iwPBi75qPX2bzC4",
  "key7": "2Z8y8WhJ7wzohpTaZ5CR5s3MJ3Qxq1gz7HM9tFGJHBoECq3Zob9dV2SPTWz9SW51vUDMUCL2wLNp86zzG7u2EM33",
  "key8": "62SYnySDAqnnwdF4CBR9NX7jEm2wJ7NfALb6oXdKuUJABG2ShkRoQjgUUhmfPDaPUuZaYFQbmDGqACEkFkKkcuGK",
  "key9": "3Wf7c2Hbs9hSFKEbtbeCBgxfYWNv5B1qJvEepBVEQ14DWMgsoEYbwyAuuP6kgxras5tixTVeKHFQ9y86KvyZk2U6",
  "key10": "58AF7YdJrXNjfEDoMtg38NRbGngugwihL9kht1CC4z383cFVqHXhzsJ21WZbnDyf1RBgfaUPnqdoTmW4xKuwT587",
  "key11": "2DvyzcZ9hdkPzUe2jqkQkdXMf1uatgntQjSsmwcXZosPddbuiMmHJMUMBZ5NeJm57etDsm8GyjEoEiWbFNYUgAJK",
  "key12": "34GgvvzoE9XYjLJVKxYR3rHSN97e1j3zSXA75kiTyhHC8p9CGG8MYHpwVb2yPpSQYyjo6XzUKru7dVj1QDv7SqfV",
  "key13": "5ixodQovVfm1AXmDfF337tm4jqVeKDQibRqtkQUijuH6ioUSFpSjd7zXN2Jmo8dF6yVrTSiCuU4kGZqHrQ3M3rvw",
  "key14": "42p7U7EY6NeguBiChZRa28AtqaEovz2PDhUzLe3rXuCeEWiostmPbV5X64iHNcbUmxqtGL6jBRrfFbvRnfxpxWox",
  "key15": "57HY1y9wA8VUMLHz2TQMLcuXBCsN46pubZFxKj5icx8ksvbVzJeVdmXJjWXozf3vGfjvfWBarL8n2PnNMBPk5RsU",
  "key16": "2b8ko98JZqBfmTomFYxf1ZfH9UWUYsRGuNoKCjgnLzRE8bnAwqpdS24txSDdHWTmSX3rsHEh5gbhtzW4RjncHUke",
  "key17": "zs4Gv7ippTFL62Qux5yT1LghQuShXjkY6KKKqrXXNBec2MYKoDGZe9J3KQhfb3fNwCoLk6yX6sSbpc3R6ZheJtZ",
  "key18": "3gh2Z5u11D8GTAv7D6x4vasz3aFUMrJ3hSLPxJoQQ6fWHfUQEkqEYWgasQHW8XQaV2HvYL3ZjZhKrc2RcY3EqmSW",
  "key19": "4C4uztwxadp3D3hUatnGdSgmpsJnJfuw7JWE5K1LmRhNNCycdLxfMw9bdHKWaCw6BWV62vryKWdhd6x3W5YjV2bv",
  "key20": "54nhN1C6nfUtxsD2HPbQULgZY1NF2yYVenaQ8H7EMppGfnULB7bAKGJU7C8miC3ddWdqgEGpepde79UMjfJzYWhp",
  "key21": "4kwPxQvLp7AmnfScgLAqTf3UAeCEDVo7JUMJjdU8Mdmjff4u7Y8QxnFXCmXueNWuMzMoV86EGU37e6AFWFNVMvni",
  "key22": "3sqNEQCzCiZEmdQ9r37iFzyL49xnrdpWSL7z4qR9FD91sjHLvVKb6EX9sUzcBgT8SfmeUrmpeeWsNKcWgpyWphJg",
  "key23": "22FZdxZEkLwBkdXSoSpws3us1KPHMta2MAB9PE17vsM6XedrnyuaU8n7aBuk5rjafpc2rpck2XZyCsJTr7DZNvtV",
  "key24": "3GbRJ7MaAHbdWJtY3WW8Bc9MvuyS6N7swASS2q6hAaZyxK3Egd42vLT31mP8pqaHmzeav3TMEy8nRzZimfTeFGAb",
  "key25": "5iU6v3zAkaJT2Er1Kze4YCjCWtpE3DDjzbr3rQKdCGmQxWE6HYXMnM3HdzHZ6Russkj25BRnAjfZM8z97VLPvkyn",
  "key26": "3fUPgC194Yt7MQUoVdeH9nMwQtBkzoM5KeLAjatb3bZBB6xJMY2cAmBkfx1t6tjaG9wNGFvDywfDDUFSA27Pb1PU",
  "key27": "6yHSVFRB3rW8nQgxh4ELtzC4wbfumKYAxfqBYr5GLpKDDnWaejwG8GaCnFgqGuMAUR5Lre84Hr94FiQjAbWS52z",
  "key28": "aaVgxFTHuASNbAWL78pEo2YvnPr9SQpxuN3nPmYNVFo5MRsb7eYV4Ah3hQADDxEuet77ZwTJ56VJDNscgeY11Ae",
  "key29": "39P53sCHQwLGRr4xnrJgPmGsmc5FWLsvQEUzqbjc1fCZZe3PjrTS9jViLAZAD83pBLE1hTnFyNZRVRrFo6qFLmYV"
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
