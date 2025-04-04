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
    "3uJiC4JAb9MAz21jikgR2ouyrFBWoVQNcWRsJ5ZQXHrnNZvFVPCmCQyHZuMahDVnbpS26vk7rbZ1NvPcWUte2cte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8btA4r5n8MAt6GfqPXJ79ZDzuYMkVTwRFVC6hd2LaKgHGGhqw2xvitAaNH8odA1QMHLgwpzQ2QpMBkZsthcrvQ",
  "key1": "3E3u7cigkPVxPhMMa7LngWvQqDT5ewMN8U8bg2UxCRncpvcQ1BG2qQwLssNG3TEddoBtfLESLANg9genUBA6G1cA",
  "key2": "3BZx2mghmaovc81RJ1ZKcf75H7wrcsEmFhxNJv1sKSJ3QjmBUb1cDnaYJdNzS1Vpxon8zcTZY1pcTm3yVVu8C1Rr",
  "key3": "33t5NvY4SVKCycm9RRZX1yBEkqPjoP2k9mcMtnBgQjyTMtLEtm89864mkALxCAYdfH5ijbwvE7qnDzK1xmwiLmLQ",
  "key4": "5LnFenzoTBRNeYax819Xn93RzpnaWKz7U3w8Y44tpTdNNKzMj6ncjpBPuSdyFufUtYuh3FMnN9aZqehnvSQV6doP",
  "key5": "3w5NFdiY9ery3zUQq6uim9FG7Ho9QBCSJ12PJRSenepx5dan2Wfc7HZie63nsbfocFBCPGY6vTEzwHkDiE5oVpn1",
  "key6": "AEKWzDTUk7FvEGop1XXqUaCiXkZNJ2kqQq3MLPCWrt4mk5NxRPXXwfwnPboXqnWcXncmKkvBPmnZdb2qMCHEVQf",
  "key7": "3B4kdzjeppNLpedprU5vGb27mh7gV1ySSaQ81sFV3jd1a1sDJxLms9B9xusy6fqYMjknZqskiEaceVzrVTD7262W",
  "key8": "3iTWNYgYXLtDmra8u3ndf8QSgCjq7o74J9VKPV7e3Si5w1z1yNagXyEUYA9ktSL1PinxvYmMAaycCJLRp6ni2wPa",
  "key9": "2CemXWCTWPjzNoGUa8vp96qgz5G45LVQFMct3dEVmSx67LzQQR1fJyQMKEVGPq5WVWA6Fas8Yq7k1xMfeE6QUJvm",
  "key10": "5gfQkdqgj1LFsJ2JT9s5TYgtywX6UMzUZ9C8xoL39C89fqidwsq3WhgZmGEWbhsX1zCY9z7JYKKpiZzuVruXsxFw",
  "key11": "2ZWBTPb88gDGws8osjHgdeGF6HFQCEgSewjvac6iknjiLt5hNZrJaMwQsvgraPwTynLEfdKzrvKdkNGozTUFDvWt",
  "key12": "3o8VQifa2GPp4nQCHYgEP7CjBex7q5Djdcm1AqByyc7H1W2yshcQuNFypGerdeV6Nsb5AohiPuMGjcN4Lp3QzNAX",
  "key13": "3sPHtpDLiesE6gMdEBV1mrTbUvjJqeaT9r2fAZ5GjMhRXZbFhBthqhBAFNs4LXRnzPCGD5gFAHqH2r4LPpGpuEJw",
  "key14": "5AxMyeYnFTEchtFdnzuLcBqgQ2qNRPF386HXUCp6bvFdB4MVg6XAoBtb93bQrQHjvRrnwv47gmPrhThaLMG1A2zB",
  "key15": "DMomxSwB9NneGsrUZGPUkSXFmD5tF3GbxQtuMpwkvLEpVCcvdBNCz711YwgxWu9X5fBns1EV4E4kVJB7cnPBtRi",
  "key16": "3aGXNE6J9phPo91PdNk33oZx27TwqSd2Vnx5qgGQwbqMQdSPucMxsbz2j7FDmnDKurDXq2MYJc1FsnFLUFtRXgva",
  "key17": "5PYFn7RLMkvXxDh7Y1cGJM7uEKwDY7KZhpK95d5XaasREfK7SwUfmKCNgrASHbxN88eFbnacJzGxSXATSTnbRbcM",
  "key18": "3wXwQsAQSdhUQBXNxuUPjbQjy53xsUZWPbYoti4oyA3jignN9v612TdkhjTjzmkaf8899kUSMVHfNoccDqmBTKWh",
  "key19": "2Y5UT6sxQxccjSGDkc2q9R8wi4nA5UEb7v2gm6oa3WR4yFdzBHdFcU78Gcf5nE7fNKh6sXavEo51LCSqVoTnMDVm",
  "key20": "2ycYZdV1JEGRVNyqeESQN95Ddn6uFHWh8BgiEDLkXGAeN87shpUSZvjCgZn3v39LGLS9H55XpmhvHF2Y8SEBFGZ3",
  "key21": "5MF7ShJmQ2DNEWgMda4AYHc8ueYb7NkkLnkZLkokUMxDm9cRL3fDzCJbCdWzPtdYPgU9AUB4DpUTyPhGRyFuLT7i",
  "key22": "4tt2LpC1m1pciaFGc964Nq7kU5EkcNW2wRtRCYBJXXKB1qw2WAHNx9xmy7jXgMmBPu1sGN9LTdhaYNkTM6FFem43",
  "key23": "5rBfw4XSdT47cEMEM38JxtN8bXCdDCSSpEapcKrjQARSbva25P7cUhhRu6bZdAWR5A2MQi8uzQunCFNtnptB6Rsw",
  "key24": "42QTeA9ND2nNGRAtpS2Mx1Mmi1AhuGLQugi772RosaG9xdwgtG78DazEkhsADyQS2or79uaoBk8hwd6sHre3RzVm",
  "key25": "4UaBaFs2egBiHAit7y1m4PCWfQAkMfnJxJ2gZMyp5wNm78FT4ERCwGfaLW27y4AyuhTNXYkk5yi7bLKytRuDhDBS",
  "key26": "5pEJNW1G6undehZMc4rrHbzYJLn47pb8GPYWZo3PxiXTMocHQDWRYcFsJf2YDWvb48RTUpzuUFPBvTXnLGGaBs9t",
  "key27": "2eu5Cyu9QPTo8JcLuErMJyCD5UGT1K3tsfKguq3GZ7gZ1j7TA7uMSQDuvKv7DjBdQCuJRaKNFxUipX8E6UXr3NpZ",
  "key28": "48GsGDmTFhKEgrzFsZjYWGEMJxcH3tTVwkRhn88EeNjPhszzJgzUZhtvhvZneS7x2dtBnThzJncc1iZa9e3EtupS"
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
