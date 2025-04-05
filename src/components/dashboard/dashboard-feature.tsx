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
    "4Mz3n2i4fkHXEbAfKP9K4Q5YnaHSk64cf7xAHTwC19tUCrZScvXoKKyTPATNdHEuEipRX5iywDDBY9PnJakCeXBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36thz9ZCQgubyB9eQKD7qoPEVUweBTr6KFzQGvAWCaeLRhvTkWZEoTztFzVB551YYi5Rnr4swb5nGXodUPgd88Nj",
  "key1": "3t9k4eJgFCSqLBKFEoJvdkkwye6YVRJseZfnzGmkZMn7Xs5zPx36iPCvY84Au6zsBiC1YRY4uX6YKvwBNDf8vuSM",
  "key2": "25sYAyxWLPXkZWyyT1JkNBZaMCmDSs3Q3encRYmHZkNm45zc8MUUrUaYHAberDyYxtko6w43RZ8oWSWycMo4Cb7Y",
  "key3": "3LsJCbDSWnVN437AtAoCwk6dVk4HzjKMJ3Fo2FpR1GtnutVki8N3fDnBcaYvtPCJzdduTCZaxjrvDnRKds6LyoRv",
  "key4": "5ofYjV8dxGtiMnsAyu3VKEMLGpmb4F9yGRMohisuUUUejeKnHFgYG5FwCFEupgLEYBMvCPtqBPCq4Z2uFrvNSfyL",
  "key5": "3Feece8QYFxkoRoP5WsU5myAuTJSKKXUdfR3Qedk3KxVykU1FJFo44N31ZZeeCzYM9WRNnr7xnvAbY3uxUBjKEdD",
  "key6": "382YPVHVFqkqBM2rU9dUakvSL2ZGuoESLdHffGcfuDYP1kY9qYNEZtoLDR1JnG8SZwPM3v13tRWjTDS41bY3sjwp",
  "key7": "4T5s9aBW5zHXkpwtfbH1oBJtKAx4rP7L1eAbyz8qp7VFbXTZq2SoVYyvWhAXvtAB8vkVj8jpvzLYPUxuGwpnwB2W",
  "key8": "5z93GF2Dc2vFT7URopSESKLoM1MP9Bu2LySR7wiyoPCpVgCYfQZoZLr9HVuyv5yoJFninBykMA8xxdd3j1kxt5oy",
  "key9": "5DKWJqhnq9bxUUDAETADUcwwG2SsoTfBQ8k98YTfEACu8r86ypWVZU4EZjU39R3DNRLCbGj1LDMqsueLH4194ZZ8",
  "key10": "3YrDKADwHix87MvTCUTgxRj4hPbPT27kDXFTZkiGRKrcQxAAFpeWdppXDo6t2RLAu6q31aUgQTv41QbR1vyW4uZY",
  "key11": "3sSKYoyL9sPYogwAhqCsf2ysiaLKvW34JWsR28SCnJtszxbtRzjjZrvvJBCAZp3L6LTUceH2sJ1jxRR6y8n2DbGi",
  "key12": "2egY4Ed1RCD5U3vjWWzobGPm1ZE1v8vXDPhG1ZRW8sCVWNA6v7m1GGMxb6jCs5Rnianuy22csVqzfyTdfb2LvDhg",
  "key13": "wMgcFEdSiYpPLpptMHR3gxVkyDaBABu7qkUKsxJZ4ytuz4SUFCdXhMAE3MpTCFQgq39x8daCAeDUhM9K2QX6x5Q",
  "key14": "3RDg8GNwVgY5MwqpG9ViKRRSSmeHHNz8g6147VeKBiKadNLrPTMCDFT2FWCACHDUPQJMA2g71SQ8KrihPwiCodNR",
  "key15": "47LWQjbMcDFNFydbZQ5UWXwHf8AvBnM3SFpKZdrTou6Ge6Q8FuH3uQKJWxEqJ59eeJrpq8eXJ5ayEpUYt3pJdexu",
  "key16": "QCpFRaS8Z66L2qDcTfP3exWbJ4BvAAgUwEFXRpZTp3cji1fR36Deks5Q64EYgVyWsriEZdktoYJXx7GPxgVQQeg",
  "key17": "3pVaxF3qwxKmeRPVNJPibiznspyTqpCWwaeK3hBnHkqK4PgfAeUCZTuhN1zzg8EpLG1hzr1TWgQLsQrJ1eC2Bxkq",
  "key18": "52uudLH4cF73Eg7pxoFoJUjhamsnqp3p1UtuzeMuFkMfJfsUdk4vjoVxXzhu28CPcfuCaSewLhQVPEiQX6sZ3Tq",
  "key19": "dGkVxEbaPtqkN51T12inTkcJMutV3USHeJqSxoxHegUwDrcPEHmfdLxfrAYcf3NvhCuiB17KLXTtEuQbM4jnmjz",
  "key20": "4qiutBqv5UkiJ6oLN9gfqmmrrYhus3hNPSHXj43R2qqpsL1yvitR2WBFEqFcskoi6XtUEuYgGdNguoukr4eeLt9E",
  "key21": "3cRqQQtRRA942ZaUa3tarNmYCzDjbfTk3dS2oDHUJXrmpDMmf4hFoBfz7EQNBx4dNZfAbsvhBJyDj6MztLTJc4hU",
  "key22": "2fMrxfmaU5cmt1BzoJxyJq1kqxpc2a93VgaQBoDqmuA3WboUYXYTZUFFPFtJEsbz7VcXLjtrmTYz383sRfa5G1H",
  "key23": "2wSg1hCu4H12NuL7Ry3XNY2h4QswznYwbxHUPMsgJif3gQj51A66KbiX8kGnYK622yfbSB8vvFTkcFMJqtfLNmsY",
  "key24": "2Tipk4SsmxsgquJvXymDYRw3Nb6qqN5L48gSMkpLX2NtvhX61jC4HQo7yMTyhtstDcMWPddiXnBZ5YQGCYrAJQZ8",
  "key25": "2BF1dokFnHsEM4w8ug5ANzsrHHy7qx7ARutTejUwa7RJdpucFQLNGUfJpyeCkUW9aM8KZV7RcHZFvNTueoyy2bQj",
  "key26": "2jeTpT3mwzUQDm2CTutQVm2vUpUfEJinB5Kxzkq969PddaaHa4rhng8oGgYRY3BpmVzDY2WRTAzFxqnUXEwSCSCZ",
  "key27": "2JTWf2ViFWUwKxoKAPknYNJjGKyoZ5FR53GcHb72QuWhfFVda4jRo98aYCC2JEMSKHy4Jkzwpkp8yH8MsKn3s2au",
  "key28": "4c2C6upMX6sxtsfNnxckAzQYyN7yef1Wb9r3TRH9FwFLboUJgDsW23Cx6ZHHp2PKrumKrYA4XtEuMnuvuEseapus",
  "key29": "REh6zUZDj58uFh5oSBg1trrLUwUGd7PnxfGymjUHKGgQayVRTujus7SoxRHAn2d7evkSrry3MzCxK3FQjEMMXHz",
  "key30": "4vRxMZGxViscKz4MfH2MtFL2zbXFMYhJJqkbyBc7t8kBa1xRb9ScBQFoa2f2rApRx25k2YzLHEvXh3RAGskNasp8",
  "key31": "wEaBMu3Abcu1z6kxrZtaTbsiWYULte2eZeAo8aQLimY5bxVfbFsu2F51vzkSnKxoH28o2qkunw1wCFmnryyTztw",
  "key32": "DvGVyD7mN91qvJQGodJEHpEb1BAvySgKjkkL2S4E1eqWJYdFzPBdjPsQ76EtgBXJ8cb1qXsSLHiFDq1JsZmyR5d",
  "key33": "j61a3BXHwTqoAiXBuoHvGsGLSwriw9pLfgQ3iJdQwRxZYvnLXYVdaVMmXbuPMiS7nedJEzFvBmwwL57bGgYkAdX"
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
