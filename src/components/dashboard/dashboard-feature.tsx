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
    "2tzby1gdRSNzsZKTDbri52SrkrRzpePhzrjU6i6vLLcTCbRzoxxiXtz7D8M63qgKNiGs5etP7ZBKbLttFjbwKJKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQ4BBgxYL7L7JzG3iX6xdyb8AstQwYaRCDRRPZbX62A4LJRoL7TdyoPaZV7NtqLTxPC6ib7aQMCP6qsFJHHAZTE",
  "key1": "4uP33YaC1TJjTiKat6VznmaRyHEP9uHzaDnA7E5LS6MmHLuy3vKseApLtxxcEpgtmPauRN1reqSuWZ6ZGf9ja9Gw",
  "key2": "67Q8QNJ2h9bvga9L6xoeGgENciCsr35DxC3sqHEqd7vETus3GtAZX4ka4MWe4VCSJeWHzru4BwPcBRyfgkHVXjj1",
  "key3": "2CxTJJsuWwjQ1sGfBdAzptRwWKZLgxaaSegkEHtdnkdcx3KeauhoPEzufkbCM86GJ46BkBgz1TzhEDxApM86eoeB",
  "key4": "3ErjNKznYFs2wJ2o6zUEmoA2aZpB1YZ6i4rNaEAJqPm3AG1gwsupJssS7qsPsTKYVGNHZ3ezu9r48NY7tMCyPwVh",
  "key5": "3szCLpyRTBKmP9QS9ZEXNsYSwCK3DVNfNgWdnprHtiNawFXTPUJNkFPTbRS538v3aVUUnbDWCPRAM4dY8mnkRxmZ",
  "key6": "4UzZxHWpwnaFSaU9qGV92J7T6ej4kNAmZJAKbZqTciXn88DHh9oXcRkSrBqQhmBgKaVZrYhED6aa3Nav9SmuqDp4",
  "key7": "kkYRq6iFknsNzGDquQhx9HW8sgJDQoZa1mNgTJdXnmQbycnYU3hB1fCSnQ4dA1YzDe851CPqmrwEJGe6xV7SM2M",
  "key8": "3U7g5UgFayuBw9LLx48cWcSq9KApA1qCZEjeKEUp9kLSY4srY9n3ZAkg2GH19VeKUmFFW8BqVjvBw1Uwnpb6CZC8",
  "key9": "4RJTyYGnbAZK4MFRAmHfSRyX2AcTbhYAw5qNxDKQXEzevjN7re5PEtVL5tgrZzTAyRmpZkrcuhezff3fgJLoVaJb",
  "key10": "4a5ak6TM61A8wMvEeENuZpxkMYr23HsK2La1B3KYLcpsrfiU5mSYu5gaJguExJ7sEYcK2UaEvzGQRVBrhNjN9W94",
  "key11": "3TvtdrAtbhy9qvkchmXqq9Ut5RPXRYqbm8iBGrLCdXFxRtVfuCPRYk2PHJJFWW3MEEQZ6KYuhZRQcqo2knweFf24",
  "key12": "2r9WwHCkUjFUwBBreNAb6cNsT1THYExkuMcUPgHiQZGJYx9ApWe4d7ow8xARYp8PDAC3Sy4CfvCebcWTZgHDSxrR",
  "key13": "4MDxm676h1Hj3PqZVrm5pXRGY2DpPqAmJjafFWXsJVzoaYA4HsCQbKkiFtBMXMf7PtsCCyNmY4omXanojEPbPJmn",
  "key14": "5S2aq1UP5TzGCkQ91dXRLRdsMXrHDPseimaxbTX2McK5LnkhRNhPZoLayozCinDJ28ShKktLEj2ujzNRHvnyh9RL",
  "key15": "5y5pnhD6uK5tZSnYPSqMtEiTrHox7SBZx2WDx8An2yZyDNPSpEbKJFx4aGFtWpx8oznbScm1So3JdZXiZezfTWHG",
  "key16": "556w2HsK8WRE6xFB8M9LzhAnU1uLvhNFiwWk9cMNPQXHNxza4jVVuabwVdXyZ6iX9mFzuYmEXNQPyf6r9rFXnd8X",
  "key17": "yMyUVvvyqtU4BusuPxZ817gjk9jhPDtsd44omczYEuwcPJ7hrTjShMfDn7nRiDsgJiVsEZAUpDNtCsNNWcBPrG6",
  "key18": "34sMDT19heChvEBt8orsfqqpcVoCkjkDbmAeX2wCECnyMDAQVT5U2YnGHfwwgRWugMffVPpr9fPA1XGDzVy61yTe",
  "key19": "gjVSZkMwJNvsu8LoAs96hvQDKKH1jyGRXMfyzwn8HB8VfhAFHz6aDym3Hqd32jVWzWBf6iGvzmbPHETCTVBV6z8",
  "key20": "rh1fpqwDH2x1HJ8vAzxibWgWvYTxt5bbCHNNfGmM8eqzdugtpvKS8BXgtL4Zi5RXzHDy7ZD7dS7beyKKpcqyRcn",
  "key21": "27NoRCGbW3Vbm7TGefC9YLuk9AP2pKmQZWe7fiBtn9b54VDTzpAymwiP3BoxosDyXWGR5sbGLVhp9kuhDXaRfcjv",
  "key22": "5WCTE77D8KQhVNCWewRPssSa7ZbfGpzsHa4zYuxQXmshxh33PFN2LbFhSCxYgeDx7rYK9bpmSsA72KNvckXzUReQ",
  "key23": "dJXSihmaVhwLDyetso7G77ZKg7HLzYC7rnyMUuxXpw12Xes41SHCZAj8AnbbvgQbVjYx4suJ3yzRWD1LU9JdXb2",
  "key24": "4kVA8yW1TMJXJyvv49j6dNTcneRfMGWAupi8pGzjFttK95fKcPmKcQcroaMmMxgteQPW1PzKeUFPmyi45DwBYVZP",
  "key25": "4rYQR2eQjmj5EC4Y2pVmvUNHDX1eiBFdFLMy2EPu6bsmAy3iKqskPNCVtPmgwxTwggWKGRzsBDkYe6bTXPxyF3bg",
  "key26": "4wMCr9k1EAMqBt8e8SfkysgU6zSN9qXfuHEmD3EeYh1hjgegCpdJoHvJkdQZhhkdkgQhH8St3bX2F8n1hMWYF7PD",
  "key27": "4SPm7qU418V5CP1cCXebYzXcLtYBpwq3gqg5SAUtLgo3kZy89erwnhxFfXeHSsYEvtWxFn6kEhuqcdWvH8zitUHD",
  "key28": "5w9TxvTTyjNG1GDJhxLoAdxjeckG7Hf5mr78JWpCKjWaK2cafANEzEJeJt5CJuCMWMwFr6uJJ9XdpwqXPQLckjmX"
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
