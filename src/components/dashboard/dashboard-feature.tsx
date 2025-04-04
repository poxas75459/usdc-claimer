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
    "5Jvyvgux3XYcQSMNa7U95yjMTQHjJ6wscYoADqma8dEBDMaSxDR1qUUK26nrGBveMKACRVu2vD8zmcvPzhDm5JEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZy1zuqHwMp7bHXqoMNqBvZtAonTFxoqj9ciGWnoE8fWzMwjrKS2iZsvrsbKMkf9LzV1nDjtwz4CVEtqT6EPmJJ",
  "key1": "4zaXA5SbGPtBkMoA8bX3cZyQfB2wkrEYfqm3McQjjgkVrkJ5UesGJgaLo6twa4ApZMSzNqjkCbKygX3ZVb66xzom",
  "key2": "kpoCnugNkZjWmTxjstuZXYL5xaw564s4fTkG4G8qXqn2mvUsH1ttW68J6EhNzcSdHfJQ5K7z6GxVikEXjsypEZA",
  "key3": "55ekzoFDvuXnoV1TJVicajUVAKC9uRvXR6DJ8zDv3RV7AHBgJFzyLBE7kYdpf3ZXX6YH1SgLEXUJ9Y1XaJaFVRJt",
  "key4": "2vTtuvUe75CGvD6p5XNyK7zPCBFB4zLr8i7HYqHbur6UZn4ZUe1yRVBWf8YB5zS5G9bteyMGkvzSUcpE2wxVsXgk",
  "key5": "5PZF7De4MVftw2Y8VHcLteWCWKDQ8GDjvzHr4kS1GqUjQi9WCLjHqhPDvUai26Z7WiNpCHFNUedzqGubnMh8cNPS",
  "key6": "5sF3jno52BiikwgnKr2rEsQsS7JFYuHvuQrTKqaJJq3tkWLoT2bUWMicRRDVwmruoD3AUHSjwNCu98qksoRvRR27",
  "key7": "3f4DT9Khe31FA3rk43SHtwbBRMsx6vvjmFTkFDxkBsoUd7CViQfbzqdQurqQkDd5QWqK59JvvdoVYn56gKtSBtsf",
  "key8": "3SbQmXZWACyFMtYwJ2GwiqxEv4ppw17JpTadCvD32riRZtSgKFijfMZigw6pv7CNupJWfAVx9Lo7grF2tB9X2aAi",
  "key9": "T3qiYELRTV5ak4EuQwLSQCkVGE27BRHpyviDEAjGNPWEhSJ33Bx8r2HE7nGZVzxwb2ykF2JYNjAUj4w3UQkqMys",
  "key10": "5gcjyLm8Moz3BusDERsSz1oUfPfVFyeE6t8vRrXcCtmrtKqLXDTQjWH5Ko4rhoygtMjPBSCUb4tMDwoad4ioX8dF",
  "key11": "2LsjhZ3QYnBaafUDxiBWeGbprYJdGA4C2dzt9qsxEQgFmaoUExCKUwPZUFYWTLyv1vn4Vptb4YzrsyZzd97MPTUB",
  "key12": "ECcLTUDonQEn8V4u8UxYyn9K9j1RgJcZNgpzZkoF7VXNSDvmNVM8qBnhsLtwgKFC8rNX16motctDryLhPPLfbs4",
  "key13": "23reocnEWxsbw33o6uxmr1rr1NMwKBJVv3DrGcsvWTx3smF2Dn5qT4Zr4bWMRFveu23e7m6AEpCs6gwgukBMRkVb",
  "key14": "2GUi72mcLgeQBEr1PRztgmeaQpANX8R85Kp6U5Nsz8SYuU4EZgCmZLJbhSajTmeUHnPGrUyMkUaQU7ADBzrz1ZJW",
  "key15": "2rtFCi6GhFUjmGScCr2VM9sEsVyuqAJcPqVj3rkAy5uD1HzH4s8GwCtSZ6vF7XWSJhSYr2UzueA6of1kbHtEzkKu",
  "key16": "2JxiBpL4ZENmipECHJh26MNwuQNV6M8aP1nDW2xSKygsnwze1Y2B8n92X3QEasi9G7EdUHMUvFLPMXmC63QAQmQx",
  "key17": "4xShwKyqtxVBqhApThufvsWzqskBeBxnnAsJVoGK8Pw3smq76vkkW572zkcCcCoVVTyiABbERGRongFYM6r3FX6X",
  "key18": "3bwoNmaYhwfYRDRY3gkgP3qfWgxAcsLnnPH2HhE4mE6giA16FbvWWGiLj8zQHjFbByNgB771gqu45V5cK7Ltca1P",
  "key19": "5WxtAac4JZPEJCBMVA6cFan66jtkC25kfz6zhnj2arqTTEvXbDitaP7V5Xmzcwi7yaqTfocqurY1irDY1CwD2oYY",
  "key20": "3XqUe1FesZPZLYsA8qn24S5rvYdPiSvH9LFZT1eKKDNvutWwe3o42yiWz9mxrdJTXxobpw2pgNvGvecrua8W3Z1",
  "key21": "3rWZyNZhC2wYfcc9K6JzcgmnoZZoYhRU4YZ6SGMjJmWkP8TNGP98SED3CvjJRZeo9iE9TG6RDzAgchC7DtLYGVp1",
  "key22": "4pGYrHvpgfa1HTC5JiSYGaXpBnspNeqam86Meex58hJ6TMX6YrZkUhC9gmpbRVjqhBsKRcXny117RL2cAYFSux32",
  "key23": "2PoQRDUtLREAzbFHPheJ1Q7WJbAeNZFmfoSNDT8ieqxJQgC7HhzWVEq1kWzq5up8hbbVY1mtgWbfcVqKHHeXo5CJ",
  "key24": "4aMPY6fU7hFsUXgNuNoqChm3dDHMSvhXc6EtFkoQoWG7QshWYxTqWMhog29WpojTLM9bgGEBg9JNDebB8K9QPBKh",
  "key25": "rk7sD3hm5jcuAGPnqmKbJ7vmDu1FBy68t8c3uKknL58Qbw8yhK1kZRHykgXeAdPgyptwZf281Vixc3j9aC3MWAo",
  "key26": "54DB57tUerd8eMpiDy1sgGKC2gwALJw5bHxc21eYmqzehJm5JxxqYXnCsVRB9VMxLHLiL8Ljjcyq5eygWy7puCms",
  "key27": "4gQPMyyzumTjs8j8QntYxrRmijXY8wVJRFVAoyyor2aCx9W7xK4pKbBmiConPL3vnJDXSbSAfW92hrSxxezf65yS",
  "key28": "5nS6ueKuEFr8hudFm94zdGBSF4HcmyUA3VhGWLcfDZeJfutAv2JPQmootQsQidLbfeHw6r9kopqzcBatGZ5K4EsN",
  "key29": "DNHwizqXL4fX111uDMrKmWimrumuewGHmPoK8sqcQgzFssQtqvYFa71cJot1LH3swMhcbgtUTUZYpfZx7jRQiP3",
  "key30": "2qBoj6sNABVCv3czPBmLyT3dM2apUk2A6NbXREAbydnuojpVq2eLDs8g4QVeZW7gyBTGBgbe12dqLGi9K9hYtTX4",
  "key31": "UiuZ2dks321yai57gC8UHUgPLhDpfa13SEC4ftapt14eo3B1rHtCEtzP5H5ziFDc9R69xQPd1YHv8f1ey15zLHE",
  "key32": "2xXKWr1mxswwQ5uhfedi29L7R12VTng75PhQrQTQ19pn82oevygL9CCfw2TCnUepQADFMs9inFzAdVTmpNx1rDEL",
  "key33": "38T5KUrMJ73frZxBrjqV1KpiMBmeAFKCPqFFUYzavA62W4j1YGVh4DvQFPLg3MUSCbBoioXEPhtovvQPxv7Gpiny",
  "key34": "4YDVoQD7JHdmepP6nE6Ehx8iX6UtbEUUEEATtHgJy8bCJD2q42WFo6tGxyiCPUVdoCyhWeVPSFMDkSWaduxmboHa",
  "key35": "3AgRf5izhWsQfiFMSowoS8shoBk1uq2yR2zGotaiH8hF5PsuV6XnU63xxGNzdYdncSXZicuAZwvdAQ6MynGgJeHX",
  "key36": "KqitgoLxAcM7KgrGw46C5pUQEoUgR3Pj8S6YgwacoXqwLmG1B6Ycdqc3DuHkP9ZQJBRNN9u5a6aEaehXcfDHDSL",
  "key37": "2sM13FTUd6TVFVNP6Mo9A6BGGJG8okPDRKU9wty2cUYas4ReqsLmVaYwsckM6x6AJ4m6NvR336R7QRQDPJsZVY56",
  "key38": "2qA5JjZoV7BmXGDvsgwFNHaoxFTJL5Dv6Ya5DqPWyV2Ck6k9xGmJnqSdMcWEGqGqJKDT3PTNsqR87VACeXPN3Dmn"
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
