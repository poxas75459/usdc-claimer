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
    "2L9vT2TpohB6DyZwf4MoXLnhFsCe6FReD6yv7SnEcGjdhgXmgkuQvmpxoBMnUe1Ht2zRJWGPcsYmugNApjxihFTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62cxsSy6QaHCXkEB5eQZsR2gJFQu1ZReeUFvWh8Pvy16qRoyFcp5uYED3uNrZ6ZPuvvZyvuxeawgzr6cnhCxyH9g",
  "key1": "2XUykR7yP7xEr3MS7nihUekHSJHvuP7cstA6VsE2ERaQQ32WaG7n7JUeY9fY4MEPPg5VXPLsJVA6ZWm4Bw7JFVaT",
  "key2": "tyiNRNSzCNUdL5upc2Yny6L52oNM2LhBoJ1U3Sfrc5zE3T7cYpa1yhaJ4QK6SGiRbe9ft7S8T4pKCLu4kd1JbtR",
  "key3": "2NsUrJYV5XZfhUuaokXpt2vpQxktkxjFTw1fcfj75XFNSZxwBY1qkV6L2N8tACyRpefo96wKhCWwJ2oDaSdGBqJX",
  "key4": "2Tzsf4hnv22pmRA7VpeMGcCmT8h9Ba6A2nL2faGJAcPd6qjx3CBbczNZ2Ac4jDURC4V1keNh6YxT7c2MWrcxcsci",
  "key5": "4TAE3PGByUhyp41fA4PKk73W4zrz2JCRNZoz1LysbAXjQXDJqkhx2c8Vy4r6oYfzdBMyAumvgLEhJXBQTk8Rt6Yp",
  "key6": "3Dbfno9suUqeEvikoXiTteL7R5HePAVYasCk9AbM3Qvrshj7wJ9GXvVunQT1tL2q9AZ5K7cM3QuHsqqse3XgfWwr",
  "key7": "58nqmpCZon8SvBxtFYbh1H69MEX1WeDc1xgTvodpNotWVuDA7CjKsXvfES63oxfsL4WjsFD4Khha8mWbtiVHALj1",
  "key8": "4SFPzi41v66Z6vJH4fD1rixPLETdrMoS7Ytd6M74jaE4zeRVK9UwCL77d2rpu6YfWLzQxVXdW8dUgM8Z8f1BLio8",
  "key9": "4NyZewhxRVEkTxwuuNRMT1VbjsmQEqMjpDgrJcvqKsaSa66FGC57AxtNZEQeG6XheVBqXJXvjmegpfKP89DoA7CS",
  "key10": "4HshxRJH9SKZNBTkWcnmDXikJjf7mcFstPjzGpzWVDvNr4imkMSuiLX8Uox7rVwXP5zdhLuFyeaLUQQsPz2nRYox",
  "key11": "2cZHqbAr9kMqepR8XftVPTxmZXkctyfLCtGUKU9XkVxh93wHrHYU7FkXfejKmTbw1QPCJyF11h59bQHdPvVPQDgn",
  "key12": "5LCNyrEJNm64E8e3hpu6wFwNAJU6TkRtqTkR54uSPm5ubNM9VK9s74Wyx9MAkDuFNRJ4crW9kMm7f12uXUejENrb",
  "key13": "33MhycC1TTLhEbkqHVz3PT7buKxBFjkAqfpyKyTkLLgpYCzEdjMeQrQ9N4yuFsobpnRgxmybMYew2TgJxvodZSfT",
  "key14": "5kyY2mstZR5H4Ho9mtuZkcsd4ZLJg28FyXQGPF2txrXBY5zqKhP7KR558GMqVBrWrEb2S1DkHs6sgNJWXZkNyC63",
  "key15": "3FRErczWUrqFxQECsboT2s5E5uQzLcxqWeQRiXW4rFkhcqEu4XzTJtfkCGqkNHgDtZG9jM69fchz9dRkVMWjQKVY",
  "key16": "5bCjVn4iHC7YvDbVJ89ArhrLtr3Zt8Jmqx7VkanKvcXF6jRx2sivKWgHBYdoMrPf9MztFssMjtPa6QqKavJ5gxPb",
  "key17": "2A2HpUdEHujkEkPMeaDAiBkwFPYUbJDMBxGYtgtHoaRKqoCDvU6pBzGovHvL8V94tSAbpSiHaxu2X3irVS1wHJnT",
  "key18": "2CCfhCyNNhdEZGsXqxwgfvoccCrVvqE7Z1Embg26HMGCeBTB7EG59skyawQ4w2Y7fyiQvumUSvSyHSARtw8uyA7B",
  "key19": "PubuJWZjpmvJp4sVm4CyH4EhymDR1uF9nxBsRSNwCPgsHP84uDn1x8Jc3wePsWS7Yskeh9oDZLW22FJBE6SENGB",
  "key20": "TFgE1u5iXKE1oB9xCDJrpqUsAVeNueLFE1kHTrL6VBkxbPfBTVKUvs4Y5jQrVXd6v9QMkutKK4U9zb1ZL6NeY1Z",
  "key21": "5stp8kRyMf2zs4UhXRuAmu9iRhyYuKQcdXZsUszup6SBAwfoCT2M3ee2gcTGbRdqDCdadkhLsvmFDMwPWzZabUEJ",
  "key22": "3g6pBshsdV7rQtZWGHJbaMST98DCtgLKZ1MxCPWicsZXj5GoxoCUxXf86WA8x4o3RMFeMw99ek1uuNYdjY1zFT8H",
  "key23": "5mTQhnJoJvvo8R1PoXuZ3TKW7w5zvKncqr3WJR3QemFjdc27Lih48oNSZLyBEGq7TDeUzeCinv7Fqmqw2FtaRtMR",
  "key24": "yJQRnyhYLQ2p2KAPzsH8MauxNvtKwuCHiLQcXjQvQUb1Da6gkxyYiHGa4cMddxr7NXx4CitzHifYhoiCnKD1ajz",
  "key25": "48JPZ8PgfDTxBMHkVJPFdKdJ2jJp9SQU2WehbKec9SdTThCsoCdsFe4UK2jzxnL2Dn2XTnPANwhREZZcbcTvtstW",
  "key26": "5HhYb5148fbB5f2ZGLZD2Np1KaJhAyqwEPQskFq6Cq9FgHbXSWVvjxBLcoK34Ndnakw5hwVScDzRQLmf1JeqFSCv",
  "key27": "3CoFpo4bXtERtBSiV88W5Hef7aWhJMzqqpUeSrdWXRZkgFydjWb1hyXD6RURtrcVmSVUYsxXaQc5x7qJAVPH2Dbg"
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
