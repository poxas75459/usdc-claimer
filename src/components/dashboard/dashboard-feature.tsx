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
    "qMyzVFeGyjjVRmmWRYXP3BuP7ZA4w1MrFy4DVXVcPQrT4249gq114APJsh728fM8BUBN2ZgkwaJ3DDy5Bzn7eoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54msRkEunwqva58R7p4iGGLJFv2b3ekXcQgLbifb99MkXYG3fXTXQE9T2G1eMhBLwvHPbDdYB9rv51KaK4LEHNm3",
  "key1": "4N9Tpoc8DmsMQPcXGnNFXGQAkUvdzDW8VHSDzZSpC3DV2JwZM6pdfBvG7hsHZ3JAd6J4VLFAHoEZCMib6n5X52BC",
  "key2": "3NZX9u3sEahs956j9RUM2BCT6cfoRVYTHMsa2g7AaVxKj48JUNMZcBE1P8EyA4B9BfjvJYBhx4unh9jxtWXvBMDE",
  "key3": "37uXyXtM8a9Cnp5oVqdnNLEcGJZsWNHGiwzy4eQLqhSGmRLv7Xi43ZfL3BVR8mhH5otZhX6jnTiCMCZ1E1oyHWeX",
  "key4": "62QLf94ZqBeVsnsrYzTTqQMu6P9W4TGGG2EDfKD42ETx5PcvXpQ3T2uCGo8wy6WShRnv6u5kz2rHuitkHTcpyv2s",
  "key5": "2jysYayqyujP2g49L6hCeEKKvNWEZPqjD3XPCkHvBQVpiXwf2YH8eFrdYRNodao6vTGnffLCUqHr4FziybGCqE1e",
  "key6": "5yPbVSZU81jzYd2wND1oghbK5K2148VUyTXSYHhqPuhist3AGPTYusfV55aZH47Z1qqN1PkQcrYQ6zPutuogNri5",
  "key7": "28QJqjojVUGDdzz6vxSgpSY1NK87oFfVF53X411JpqXcvHpEFA2ajhSdnucRSriZej8dkfqVcrEQPABHrmiUPGLq",
  "key8": "2NYj4kSFRTfoYLPHhDsZkpMNYotLBv2gC9Rc5VhD1E4ynXpZSUB6YB9urvX25gFdhNr3kmCTqPKfRC7MdVjqbf1r",
  "key9": "3nSf6NXgHzjpPyDt9iWC8NRyVw4SKeWCL33PohNH6hGgriYVZDpYeZgNN9Wz6FLk5XfHJRj8JECzqor4gCTMTPCT",
  "key10": "v8uiuWb6gQS4Q6Vt1rDKur4c14DSuptkhXU1KkfEsNnVT4kR4Mg8Q62dxnjmZbgrn1Bhgt1JzGu24JfkBvU31Dd",
  "key11": "5WsidGcy35CScCWmChXoKiCgtiEXrVR94PfdQmSsmJyAxodM6jjLZvYyPjjs7Bq5JqsKU4ufNHLYnf7WDVjh1rrv",
  "key12": "2Yzg13khyjMAVtnRS63p7Y1Q1m5Sr8ZmBPnr4FziLrUE31xoLHXGJxUWGMC4VRhpwZgfYQAxz2c66mEo1hNtqmwB",
  "key13": "2wJSjziYF61Nx872o2MZP8DQP1hsuHjocGR3XwqXugxJAf5qdcnCaB37JmVCpCERFBkWWtRCKLgeEGSe7bH1zwVv",
  "key14": "3Gdyduo5C1VZ2abixCDtXPA8Nja6moCmsr9G2LUHTV4UtXxbK42WdWu2GqPFAcZzGmKj4artyAjbvXa1KjpHcbrg",
  "key15": "2UUxQZn7YXjBRhKZsp5MxqYNgZS21r7VEs4uz6wxHPDb7e6VzKYKRmwXvfupd3JAHEStAybC6KwuHf61VhpNpV2c",
  "key16": "2VNLUW1EpE9rL39KWRx7eEYawek8mffqQSoTrpFSgdwCehWV6hqE5ULpTv8wxaiwAUAMCAwDPYEfSho23ARMEjg6",
  "key17": "4CoBokVqiMsTpyvikkfZhL865Xt8KMVERBJCohcEMgPKfEeThEhhAQpGm43KBgXbGQcsHBN7bNu7bVcfwerfJ2fJ",
  "key18": "2kvxGkJ4Y8WzwtviktNBHVeCk511hm5Me3E4GkX1Wnu1nUVGSXeZ6GGFbV95Sgsudmyo5saVUfvnqdwZYRFPwFjs",
  "key19": "3eM3V5NpHbEgYg9cvZnHBGgVkLMygM2iuZUUqgjfHPSbHjRtT2xLSWs9DxTGpkCWQFGPeNDJEskp2239vJBKmas",
  "key20": "3UQPYtuA2B3CNM9sx4sUxUYf9tjYgyhbYf6ZER31fcfBW1UsaT1GfQCtQNzyVZxNEBDx4jZCPeLYNPE4FMP1c1vy",
  "key21": "3xNQgAgfPdoK27aTk4A8pe67WP87bZjCCSPfW5rzQnGb27vutnGn4qvj3hHuth4zrP2TW3Vdu8pxgts4e6hL6RFe",
  "key22": "2VEGTb98t9W1uC99iXAGxXnYxGGE5C4isKUsgZ5po7HQT6qigpKJHTAqvT4bqsg2bsRJJDP98MP1TnhJRUbTdjNa",
  "key23": "4euPGpjbzTNJHwzhFfMAii56hHEQJVw4hMXSA3pAFfp9Q8SBtCEAbhfxiNzSuzXP9XsVciKxojFhtoXgvsEMumPU",
  "key24": "S1ZWMr8jSFr5D87Lv5XeXJ9UzE7JNiwWej3nZs9ppbmBbxqKF2wLJwXDHkSjTLq3z7warS2pvc9trupgzeFvccP",
  "key25": "6615oCEvExuHHVdYkj5BdJdgihxTfWW7C1otRgmxe3eRDZ5gFTqejoNLz5xWgFWXsSTkmsHLwCXrxPAdK4TKywUB",
  "key26": "2ugLPzYrfoFZaDZVWj3Eju1tpFpbLSNPudccgXaKjd8KCy9xVnz5TwYPer3UCAQEa9pZiXGitvNBCqEGfwcz7w6G",
  "key27": "2SVWcvMhiVVRuSySBvh5PfxZU2hBe9Gn78otkyYccbhq2Pr1gX9m1L1z7f8yEnnEpV4Zihdw8dRRANwYUYWqn5VP",
  "key28": "65LryZjAMm1qmajFkz58tntck8M4o21EeuVXB1B4iL46uT8W8TjaL7uqWFVV85FZikpctRj8xcoVD9USvJ6igpYC",
  "key29": "2he4E4ed7Nv5jqi4EpdfDtNvAfAfGmNAf63u9N5QyEp4C9EZjt1ThaLb6bTQbuPfvHdg5GvkkYGkfnrY3muryzXa",
  "key30": "Sa1Rbg5Pfi1ZDAy819jVBMGQiXYiUTZS4Sb4aw8v4LwipeYMWoVKtKipiMH7DwjiyovqZ7xtjT3a4WsmSV3VFSM",
  "key31": "31nxpoYLvbzn5GzRf5sD5v3FQx6d3LXvzNRegmdnWpLocCNAbpAofdDBU6mS9dAwAXsWhcuTcxRqYRA734RMshjL"
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
