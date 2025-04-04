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
    "67HYyGxp6r9S2uJUCjrNY9SBMLVKkrF58kXGthQeqxA2xZde4UuSkbYEPryfACHVUzKLsSmBiTDRZc42EEgYfHj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dvGaaNNDh2QNTjjPscCRLecUG77yvM79QpFx8zgbmHMuY2qpL2tkUKqVUgRKcVaHxyYGHRAKYEK86J1TMMbVv2V",
  "key1": "55x1QsH2WZxR63u1RRLhsg1dtRUjKFYTxFZhZgZnt4psdBbnmgcJqc1jk4mN3mkkLBXouqvu9H4BWX3VipLNb2ps",
  "key2": "3cXmCXZhX7dSM8TZwHe9aY6n8qz5XmnbJJ33TLF1teBocWBcHhVtvhLGbQz5CFngyzqLmzKaepRPz2tQXLGwMQWY",
  "key3": "3tvKYriF8zi6GEZxo8qbTYc4eKY3JWoQzsY4BxUj9cppCiGoHzYE2zyCQbh3dNdijaDVKW9ZiNr56rtvunaTHwq7",
  "key4": "yomFyFxd4nKvEjmuixBHNnbL8158DBEGUspLV8V9CB8HHPHAfdXdccwEqPwbshCiMFKrtKgqm3R9sPpjf98ppde",
  "key5": "3AkBVZqqQiyysm28f6WbTpcxEHukg9xE3wk5CzK6GATSqDxzc4z8ZvGctgks7n8X67NLKfGX4CUgfgk9HAJgXMek",
  "key6": "8DoafJzrXffmHDQZc8WBLyoH2N3PkqSkYpkMpPXhGno9ubnF69NLy3EsVTtqnXeRYmY3tUybBSQNEe47KH9oaB8",
  "key7": "3zkoCFyqLMRPoqAkoKxXPaqymCDCmvyCKbkRQuWuProM2H4ZAjdfSN16NeVMCJkyF7n8sSF45ufGaDw8f4eJWiYB",
  "key8": "41kxuAioatZc1Y3Db6qtZ7d2qon77ZJh7icEK1cDWGrtSxcekij8gHnkQuUdjndx5EBSK29aTD1JvrgChMydLG8n",
  "key9": "3yojQ4JaCHsQ23SEfqoqcYEM9mM2QjhokaCnq8yenKqSjoEvby6npcE2pVABoZbvAMzwnaSrC5hKdJqts9MgLHAg",
  "key10": "53Qq8MQcmMUrxN46mySoNDrkUBvPCp4XBU8wH1skvgUXxq9vHfjnujpBchPAekgMjeNVgCxZnecSvy1Rqm1AZXCc",
  "key11": "3h1CqUUf7dxcqiMKDNgWXdnek4UVCGASJbtUqi8mR7t36rabiTL5s5XyrXfgTTjpUFWEKDSADWkXiAx7bzwdZns6",
  "key12": "2GCWzTkKLYVZoMsD5hEbmCSpB4Hh8CCXB1fgRmV9qSn4A8xdL8tF2MVtx8uEGZ9kcc9e9H72gwzoCNmoq6cga24N",
  "key13": "4ZY4EwCeSzotXrtSKCWfGRdSWA5zHdVXA1n9xeW4F5Nu7JBMEjgwpj1BJVJnLiK5wRD2KuQ69z4vwjY51mSbzqYX",
  "key14": "5414UP15fxLkuvwbWeT9L8w4QXAEeZa7r48Zc1H1anyeympThPqM3KBs7EqPBZcom2SDC5A7tAWh6gCDvLHZ6iqs",
  "key15": "SYbmuZFNisG9Q8qwii2vqoJDtrF6QMgTS6zCYpHNyrcLXpFqpLV6VjomScBbc8EPvDyBBE1uf3x9N7YUpWxn1L9",
  "key16": "5BbGSK2ztZJBAUALtPmYDFpt9ztb2NzcXLxq6BmkhkoqVXxnaCPPJdc2ZkjVqJktaqyeqKmXSbmyiVabtjw44zf4",
  "key17": "3vN7gK4f1dBHQivPa37c1UKuwMowpiy3qKwMcH5w3nLNAWUG6wdF3QvDybs4mqNJmt6yesneRHPirJ5s2tTo8AQa",
  "key18": "7iooCuQXYjvF3jg1wFTMoA9toppPcKX3wEUbBnpoDmkz1c23aV7WDdbdhM17xvsYMpkcGK3dYPN1ksB9ZwPBjnb",
  "key19": "4bNk7djh5QAq73jqKhYX8CcgakBNi1jajt7P7PgL7174o8GrRi5W2EYpE49VkpEbcWvpet1h4octcK8ZKC5VoNDj",
  "key20": "2H636GpeRWtT2yGMspgCB5xrcVwPKZSoU1j31qLcGRsEi95sViCmmE9wkehyw9vv7254XnpZ9GFUxgLaPb1uZbKF",
  "key21": "2z39rzyhY6QwnzXUJ54DgCQoAvm3JSnuGAuWL1r5qWevyqevejwckEq1kuj8tdTJn73tAgXsmHmXRyV7MaAvqyXG",
  "key22": "63jJ5upCX4uP5c4TzwLpD6gYHoKDUu4CeJzSihaxyaNWTfKEaCv1ZCw1dL81n1E5vm39gRohK5mdFRjwTSCLhTCg",
  "key23": "2r5dxuwsfZHogtBRq9xJXgCLDS456pYAVDCQJJN52UkhFJsQVZZSpDsjgDMx2VpV6JET29mcmtc9EQSxmVBvK6aj",
  "key24": "3cTX2QADZ7T5jws5L5ks8QtTYNAysKutMfZeimY4eTtXhEE8gph3xem9YCK7B4h8DwHctP71wkFqCapkSVirxPcG",
  "key25": "635zKBxE5m1hSauKeay37YkPvvC3J86A9uT5ZjziegHWX9w2gQ8jBDpuMzU1zDbS6H4VURUTQzdSRaioappGoLSR",
  "key26": "35JUEqXUo5kFm7yz8GggbE92wutj1ZceKHfYTgTx1LJqUdVRnnEvuMErVQm5G45WeVyGuEbu7t8Sm9CRZfHo1AFo",
  "key27": "3Pa1Laesd42fFZH9iGHpkYh5xNwNKEri86eJ3kg5yWNFsVEK7LGHiHZWTfuUtgWQYnCeMhVboc8YtdUZJnMaURZw",
  "key28": "4nXTof78E1jZDdLkTfs4NfLbCK23FFVXcJ7EEk2GiYvsa1cocCqxJHnT5hH9hiceoQUReskXuZFUdQMmUkJ6AwTu",
  "key29": "4nBknQLAGDaKmrA3mLkKDFE7BCEMiChb7oXtTZ4dND2y9uYN88DwrytttaKpnF2UqvvpKLZK9aXTmUtvqCJJ12pa",
  "key30": "2XZRngZo2cUJLQntzLvCL7Y4buuk3GAYv9LwPmCJaHxsh4QT432exeioLQk8WJiHSycRnA63zbJKMfUx3k3td2sp",
  "key31": "3rGvzNJ31YAAaVecLUx3uiMssP4JuhvqWrdofz33knofFwQJnseUxdD4N9SNZi4YGsL8yY4BmjKoCtHezkZAN5x2",
  "key32": "27PFuB1idNiwhEWYJiHMpHwGrxnBGtjEcLGZdpkLpxeUvdsjpmW4kTxxQ47kJUsmibeB3eubBmkc94QmgbgyGYgp",
  "key33": "rKd78eHCJjeVk4nmcpuAb7Lt4tTXd2YJgj39QVSWWzPpSaXp9SJNjsqjtHmsK5PmCfWc3jVFm8r9yM3AzbHAszm",
  "key34": "LzmqJnaopEyKf7hSsTcJTc9LJDh9J4k12pgAfsro4ec1FaYgm9beMx4Cdga61cEhyHVzVGLZbPVVc2oaxcze342",
  "key35": "3gZdzL6mM9hxj87QYiYBW3RjXPhp4hXfpQZbcACdk18Rc8YKZXemV9UpNdHWLbmNnxqUu84yDHRxXXwXG1z2GKTs",
  "key36": "3wFqLDVB3KhvgGKGKDyMKRE1Se8n4tJBXKxUuRnw5vdaXbxhpeaFWNRafc8ZGXYww2oxp86G3tBg1kf9PP9BWAR3",
  "key37": "48xrnMP8V7XBkdEqKHbjR8YgLV1CYz9t5ZRxXJ3VNdH8bWEESBgA9T5CCsWEjR1B1xL8ZeqLMuebkZHVhGJ6ynBZ"
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
