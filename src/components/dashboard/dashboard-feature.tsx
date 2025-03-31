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
    "Wbw7w38CPRyuW2wpCqCaAEAc7YL63tz9QCzMMSi778Xk3UKJZTk9k9xxAhvbCZR8f1oSnEsqZu14d7L6Rm8UZZV"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "Gna1RcXEjuuLY1pqEKhHf2e5Gr2PXcsL3MkLVXWDPBZRb27VDGdLC5LjKwvcPwrSUXWTa6M6Zufhw59YeV8nFuV",
  "decoyKey1": "UogechQCPNPxo627FCDLaNcGeDLrMeACa3ZNKYEQdxxjbiXfxm7koEpD4uxzMP8HBkmV83kg4e4DZ53cXrgTg2j",
  "decoyKey2": "38EMzKxJ1pyE14gWPLzjP7QpUERNgq5MSpu31iDXvmyFhEr4XVvP2JBdPFNafMtFCzVo7BgNfacGHpjktZxLj2RU",
  "decoyKey3": "5L2s3ngMUY53vTThYGggUNJJYDb8mfWMZgUeak7WiiyztKEVmHeWr2HZ5AKFnZXaRKs8CvG8wT6EpAX97AByoyf8",
  "decoyKey4": "n3TiaaZfUB1b4BfdQ3Ca3ZhMfjEQAGSUdfVMDQz7ppm9ErLssj9FZepujA6yS254HSF5XBWvbTPAQeDWZkrbs3x",
  "decoyKey5": "iHhYdpxrZXqodJM8Zc9xtQACrASg3Ue7okAHKd2YXk4xemjYkowebJts24E8Q3YjNxmp3Znhv8AarpD43bSoP6x",
  "decoyKey6": "56ckLj7UYQntkwDio9hvpEygx6Ram4f3J8KDv1yjF7GHF9vXJzzNxtS1ZP8qzyV2hrXtGqLWD593eqhcMpGJJZxu",
  "decoyKey7": "3fHQLwADUMg7M1SjynHNBqH6meyhXbeY2JYBRz1Wdo9DYqw9iAsknquZ5FD6aH16v3eBjQWq31FmE27BnGLMcmT1",
  "decoyKey8": "5BPynM6EiJBNCZyEEzbvyYNGfENis7jn7KfQcqtwzKgAEKWbr4hLJMPezemPyW4nSVvGW68bx59c29QZjDhfifMU",
  "decoyKey9": "5UEcA8a1DfEoKNt3eu9bAmCkz7NEsTsKz3u2L3qehmSHMGKNFN22qNPSYLwsafZJYQyB71373kzFXbtmxHdXnkPA",
  "decoyKey10": "5hFYgbnSuqTZKCApoToiRzKjQMwuQy3HXmgpqCe4F3bPR5KSksXYfm51V4tvcM6DRHxfvSY5jqxC8w6ZqwVswXWx",
  "decoyKey11": "2PdRZwoJaUfdBSLyea1egfJU6jnbFqKga26iWj6myvoRC4RcgCAwDMuYxMwqKcuLJZo3wj7EfdkVNwmemoXsvgNx",
  "decoyKey12": "2bEjj6NmDY47SPVFqkS9jg4zbeybp2Ua17nvHsiDrsrohAtAPW7jVF2YD79ESTkUmBLqXoDVDFXCfVqQwz7cDyrJ",
  "decoyKey13": "2zdgAuQZLFSVm3BFpNoyU4SKP7RWSddKZawStEbtZj1h2Pk8vAd2ReyM9nBa6UQjEYmLJBaMF8yYXbiT1Du6FTuq",
  "decoyKey14": "25fSAHaUw65T9hBv24aDM8qCtjZPvi94hH3Bt9rEtM3arhxi8TXi6NRiP6k6uSvisSKNiMVkLVgTpfeYBjKweY1F",
  "decoyKey15": "5SjaLPABLZANGTyMBNM87o57uc3uw5vvCXuAcooPU1x3S3MPmUe1nVtTL9JhzvBuceFuWUb9zkaZhTmCTpHYnbvW",
  "decoyKey16": "qQNAZfJC6rZFtBRUt7KUbhd1pFuWooaH3qAoPWg52H9TFVimtZy6tzvchCdM92FSuEpST4hcC8vQ83Uhpm2GCTi",
  "decoyKey17": "27dJePakQdabymt3jrj9jTfunGk9NmeVE9EqgFkMRBaZvsQV1FHnenkeZd3BXSjXP8qib8qtpnA8ZqB2jW792JCy",
  "decoyKey18": "uBEpcbzrGKBuviBoVra2Wyg4DNeAYof7oYVX9ZLr4nrYJ32W9QJyzd4F86aHLJmjrSyH7b2H2LM9Dpquzh8G7vA",
  "decoyKey19": "3RFVDPMf5hDQEU7vQMTRjEkizzWJtvcHUAvWoU6EGpFTSUdmh33UabQoybxtqdLK5mkFaUzkgYGN1sZRW8UvdVw1",
  "decoyKey20": "2gNsaEF9GkVW3K9oGqrW1mT88YzL4pHTuG2Z113cB9yNvFhcM8213WJNkwvouLWYbhMnzi1r3sibpVdT7tX7AvGM",
  "decoyKey21": "2Fy1Wg9Z3eskq9wZhdsd1zMt9VTpLxVMMq5SFw3uR2q1xYh3uFE5PJC8B7M7KfDBGfCHB4Vi47qo7babFeP1mN1R",
  "decoyKey22": "3XXJ7QEbP6PWwCpy85eHTEtjLNfhVYS6TPp84Z6y3HMEycATCeukgAgwmVTKd9d55hoiRDD1TSz66L7Fvy1SU9o",
  "decoyKey23": "3REQmbHFrbwYwSbQaL7pwyKsxs9JTFewKyGsFv97rRGxwagjeQKnRKRZQF1x7Yb6k7wQzXpQhsVWd8Wxj5zwSw8V",
  "decoyKey24": "4Nmr4K1qZMQBhfAj27BiioLdj7YVnTMKpGPmfbb4PKEiNZz46PrSjpcqE1iqSU1HxsBKQpSRC5fGq6QQtJ523Jza",
  "decoyKey25": "2Waos4MgAdXQkw74UA6euTwQKDzbAHUpmb7yAFLCc4e6vrXwJd95LcaxX1puakfpMaG7Wz6fxvYboJRxme8e9Cxm",
  "decoyKey26": "6p7iUATnamWiKMmRTbR7yBrJARFrHtFgXaZ7pVDeYva6knJfp4HyXvRF3TgkGyCCuL8TPjBM2pCESYiZE24KRE8",
  "decoyKey27": "39CBh31JZGttjUTJNVKqNrUrq9h8MygfPFYej9mfjiAR9x8WjZUWEy6Pn7sTQjfdeH7Ukd984S5dUkTyW9JYLWpW",
  "decoyKey28": "5hfXGVZY76Y2yZdtYwKCg4zE8PvczT4FHRr5zrZ7gBjGrvtCBfj86khhRuP6jDrjtRJRm7CpHzLEvAkkMZs8VdgW",
  "decoyKey29": "3eVbaTbC3z5i2jsMJMa7g3uFKfZ4NZWJL7a5NCn6YzMJ5H8uUUkL3N8L4k9BJNsRwVvDmyeS1ixwjWGuaFnsXWTR",
  "decoyKey30": "5qAgj89aAdz6kFa1zZfGjBXqg2zBkrg3Ly9cqxqtWKQL15dexU3ZsMB6So31C8pmQbJ3GHfgwZttXQhTpbc54hVJ",
  "decoyKey31": "35mBuDyqpZpU4BBjnKX4DbC8toN7VyWeiCHq1asZoDy3vFP1A3PFtNhRqApa7zmDcfwTYBrc1yhUMoT5V4Y57DRX",
  "decoyKey32": "dFXHYPS6kGtCFETuhSuYbWxG5i8b5FVJp4CSQMXrXGXtAUUH6Cfs2J5Mid68kzp9un5acNriVQ2rMbW7wPZhtGC",
  "decoyKey33": "2ZwpbAjK7s6Cdev5CfB8d5PWJV9zfBPPtYBDwxrymC6CmT6ciZfNxqmUUye2M97cgJH3xKC55LaSCECdgqfavdJf",
  "decoyKey34": "2hV6B5nYqJKmfKEX3GFsFh2hr2q3sR7ujhkuMEeLt7QuWvfDZF74UpLRVnqmCKiJ3AqrWpLXj68epcExfNSk4Jki",
  "decoyKey35": "4jHvns6snkdEXF4xJUcQqnCmo9x92K8TrL4kKknvt1MBTA5MPvpEdCeMn5mSpQ6gkYWHzUMgDSjLMR9mWZG9gFq2",
  "decoyKey36": "5VKot25ZfzzM3RJyw36obZmcMnDHYbtU9amuzV1reZ2ozyFbRRz94QTBETL7dQnyqJkh7QP79rLCwwvhFvbG4RG",
  "decoyKey37": "5quJhnJp6FtPRw8sHcRDAo4fyUdy9V3aLQDPzMAYZsj9NbhDtQ51rCJtyRVfpQoCyEcZPD9viU9R57EfHdaQ5mBB",
  "decoyKey38": "2DmFQYZt7Pry1akT1vCcKNPaerqjh6aiK9mfVJS3jRtTWRFg4Vg3bWASLqHM3Qk4AubWa8BoaS4etAMwEV1vAeNJ",
  "decoyKey39": "25LdDkfUcKyHTvFXHWHhMQJpunDomdwadc4WYaRw6eJSiHTt3nsBEtJ5Ph4tUqhfgUYtWPvjyoEqitMcHLti1UqK",
  "decoyKey40": "4q7hiyUbthczYN8ApHtPWdwg28M1h5wu3oUY1NcDPLBygKRkqd2J5zreNcZcY9VVMeP58725QqKkSJh1EVWkh6PV",
  "decoyKey41": "3Pn6ALVt9tFX9Z9HBxTv9kFrQrXjEtKybp1P2FEHcSHe9UD2YG9iLEkBr7thnMfyfcgHCF4xQXKCQrDREd5b1EP",
  "decoyKey42": "3R4f8qtWsb2xd9CwRMVeCEFEB4jUWDA9ywZN93bbsjQCfNmVrKVceSxnwmkjsUpGM6fJb6sWpzJQ52416aZLoLL5",
  "decoyKey43": "49hsQjGyaeWcSC4n2ebaZYNpahsgmtgHPuZtwGtWmuHaVAVHtFfZnTxCpu86q1DXiTo5YsvQEdxeDouD3JXXhZin"
};
// DECOY_KEYS_END
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