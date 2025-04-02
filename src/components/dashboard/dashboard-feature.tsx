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
    "dgSg342YTQf9zi4kXCSigRcfdUJPZtp2YhRpUNc5MMrQtr8bAQYJCrUvJxFrSTmsNW7sKiQkVyB9ivxiijjiyBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t1xJspeYeBXdTAHHdaQoBs1uT2JsrHMNvuoRAytgDdq9kho2aMzxFM6iaxGfye9S5ArHF5cktxbYi11KgkHVymk",
  "key1": "35EFS1q6MtJ48Nz5ZkeGTJPZHSVKWSroE9zbK2WnS73boDDwWMY5jL5j1jpwk3yJjc87CpHG69h5xPS3R8pkUeGN",
  "key2": "4SWnWbpeuEdQpA1neHhJePRDNLpgh73VKnFCszk4BDFTXSFPyFVshHMCxGgxppWj9pxH6dmPg4yagQjbCrm3AAkW",
  "key3": "2kRDEY5cKZHXw7fPAc7CyGK3n1LAfsUAPXbPYsrUCimvYoTGxoQbagNNyDQvF8oYew8kgmNhvrL4zy4rmiwyaFa4",
  "key4": "4amhMuRQ8UMfzGifviEmo6UbFaXy5mo4hP6HkzqWSTZFWkfG5RvWDAxfK5MwoZETfBzoe15Xq3BMS5b54v5HNFdZ",
  "key5": "3VpzzHtAyeV4DjsRtvnrtHxeyWAUhs4y8eC4XGtXt2xD9HaMSjZsNFAvdse7GZKiYyu3pdG3zQmN48kNdG8MhW76",
  "key6": "4gnsPWubxLtP8QHBGkW1Mv2zJEuYvpDsDYpUVzYxH6u56yKPbzcdyqAxs2xeH96JkQCLEMgP1pM85VsSgikg9se2",
  "key7": "8yjwbdeJpHoGkchLKPdsWvrc3TRGGSXH63jomBvxoT9SwwSVT4PAysx39XpJNrBFeCzfN5Tj4txSfYX7n6sy77W",
  "key8": "5REnwJjdd2S8XtgvaG7P9gyAuMEo8wxXBNntdaYhwZinWn3KdepX8sQxTJXBXP8Rdh6Zvy8HvNy76QTAkVYHZacE",
  "key9": "43H9ybys5LJ4mRenKosxnEaaKcK7DzaJEVNvPJCmYWiA7vtLs4GDmFQKGELdYHy9gVQiEJuAViF3ScfTpkQTQx4G",
  "key10": "36HiBY9Hyf8kBZ1VkjDoHnqjEkKE5zUZ3yc8LZuQcdDsbTJmufkpfssUiiEvAQ7GMm1FnrUAAPrvHy2uZNZC1PEu",
  "key11": "FrD3QEE3FGbDbUFKB5zUczxXb6D2NoKKjg64XPvMaFeMQ4pYrBszBDzXzAcADAKX2AQrQQKf487MjNbehdBfEVD",
  "key12": "2pEwhrcn6qipvZdwZmrEbzCGF9Xqpkyeys2S7kUWWQ7fGpJM15cjTBzhefSQNX6vMB58oppeuWpb8NPhtmHMQCPk",
  "key13": "3h6GPJT5DW3cy8nALK9y14HUW11tGsRMePEd66xdEpyi5k2g5TJm8HcUuYGHQ4qpHraAhHhawMBrBxM3mN9Jjezs",
  "key14": "3XZY9y2VSmsuYWWggNz1X9hAfAXEKp9DRDpBjhrrzvHbAsTCQr1b22oSvnJuXP5AQSw9k1s8iZRVynfBmF6qn4aT",
  "key15": "4NEeTpJHjV6PFVmCXBG3ZxabC2L85XHtrSsczTZs2Wa9icob9FN5Cw5yxoo2GVikvHtv3PAGbGAqmB7xe1AAZy1D",
  "key16": "4xoDALxvQ3S8XrfChNzuE5dTMK4uiehwJK2iP29s433w3P2K3PDGHAJnLG9HwTRuat3T8NpzZU8j2W9WxBMkYjdv",
  "key17": "3etoF2uhhGNcFxBCTsLpoyhPBM1DHAh9P5YtV4w4ZrFn6rBesgLguRutaTKw6LcNMFtEKHbA8kcB7E7QnteiJK4Q",
  "key18": "59pec4xj1Zy54SaVe3z9yKcU24iAWRMoi4eWWq4AZjY2nV33zHSx86Hznm7GPo9udSaCYYRWS1GxcMXFSHzFQQ9S",
  "key19": "2GBEy6TkfNiaiwJwW1RrwDarf27HpQXKuCS2toBztSPuBUJiV6Uf63J9UPJDq2ueaLG78J9Puc9FPgwdxhBukbU9",
  "key20": "5wo9X6hj3PQ234fMHaXyCqfHWPYk5jrwPanEEgGUaKodARN388eyYBxvkxajsqX1pkdfrh7J5RixDrKqR1jN3Hwr",
  "key21": "4kUauF2fwAAdvMNtGDtrXA3eow4xR8xXqkqaDkmGVM9WJrWJsqm1zjU5KdTDGXkqJ7hUsqZH2YVbvNuTr7cbQbvC",
  "key22": "2svgNX33ABAPY1zEPiYJTyReecbQY5isTqJipbxs2oizNHMqbAGjBnn4Wq7gtwr3bzXyqvoS8CgES7tT8VFv5UHY",
  "key23": "x5HssCSo1BnbMDhhhXVwKxXBFh1HXr9ApeQS5XZVb2sbCVPq482wLuLqXXJqLsxYXC2yPGrCy3QfyzC3qc1dPCG",
  "key24": "4B9Qrj2nTXUojC56PbHqBdQws49s8ZLi5zjHeK4FGx1UViLHvv8x7kyTXhxJ7Tq4MiUWYSkActP68GQ5MDxtuDBd",
  "key25": "2zvKy55Us1qjpXNwco6in3JAdvRaap6nFGoVrXrzdvqmHBE3psprEnzV5qTFZUPBA2aqhKJqpGp77yz8UPUT6cdz",
  "key26": "31mZKPWeX3eYGRUM18PVAVZSV7Y8CHE2RccxyAvvXq7ujSiKEb6w2eruo9xxj5EyngvHLryooF7EtkcU5bXXaFnP"
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
