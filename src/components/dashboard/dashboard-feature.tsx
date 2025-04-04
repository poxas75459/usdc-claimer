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
    "yqjKLNmKSMUANsknttxPd4xLB16ZBmuYFTPHKMs78quwzmKNFEAZ7snksrk8wHhSoNFE7DGS3ux2KqUDrpd55ZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UVmE9wiJ5wyeBdL78EHoCiievRoPm3bt7T3viQD1xtFBq2zY8cH5F2WTXBxt6H3J9FKEpEArSod8tyBoNTUbdQ",
  "key1": "sCBcNjyuupvWNjZadUtaUwnhybxmyk587Aaw2KvYVUnbWCzHBAddzfpoYTa3JhJaqGBt6uGmje9qADYBAStWLVE",
  "key2": "5zXfK868Z2JiVoCZwBZ1fH85cqAXELM9u4JEJ4byUJp5RhS8kdRT4vxcZHAVejrxTMCYaoKfXMU7ZXVDC5gCiHBW",
  "key3": "2A4uw33vHyZDdX8QSku76GDx3m3yeaKwH74HEu8HnnrpvT7Z24AxAp5PJcFTbifowVYhzAzd2F3BuBxtQvgLD12W",
  "key4": "355AQEU2JootiDQP1YM6jvMFxVNt5rf2iC83bFhWXUXCuiFBCGbRXUCrJ7PnxEbk54n6BLjcGFomWUfb5dg8QAtM",
  "key5": "4WXGeoX9SeYu8HHNigLDmtH7865r3SvmXWvAFa6ineUdsGnGS3tx6rmDuae6seaY4AQo2bvwEsYDeC7Jt7xxSszn",
  "key6": "NipD5Aa1Ajw7QdKCUXQmjQLDfWyKFGLSeipi3CbfYvv91bjUMu7vqT1VsnebGrWfnSZ6SYXWRY8dLKFrYBMKNgr",
  "key7": "4gyWerGfJPSBeDZmvFh6JEyKnJwKcUzA7oGuHGRxW8sHmEbKa8gaS9Hs9z1YFysYuyASeZsCHCwSNWobfYgwsCWt",
  "key8": "39PG1kYs1k8MezwA5bqdUacDMPUAgXiZ4SY25DCC9iYrMqVxHkof5gGVVVaVQugyk8SJdnPJzFqiwwz9TjwFZMh7",
  "key9": "ucSRRUSTHjhsWEin2urVaU1CGhxwPTvc7rbkep2Zv2LV8UbHszG6yKD8p6eTHYJK6qx9Qr5uybPAeVU8UEJLX3a",
  "key10": "3RMgmPMBhCXq3yYur3UWWevJbKroj3MnFw3gjCnDhMe59iuSQ4knD8uD1YexeWpUFqw51GpJ3kZjtdDvV6sa19Mp",
  "key11": "sGcjW93TgtwNk9kzmLZuMNYYGrxyb9v5ZAo5PwonoSEp3PJ71iWtp4bVgJXwzc8JwAqRJDSW1HGuCm9aC49MxpD",
  "key12": "4h5ovA3rEE65bnFMQkqURH4mw2AxNP17QMpHDM7BSu1H9rvo6jVX68gJnsPJ5bKf98JHubc1ReqT74cPgCqGbnJW",
  "key13": "5oYfoN9c55DdBHGPHmhTES4B2u2pSFzbW5X6vGfjg8BXwxZSRYgQxCuLGieKkhKW6GjDzXKAxrK2ALBqVoV3dtmV",
  "key14": "4Tdk7sxETX5kW1YJz34ExNQz7BLfRs8SjFr539MKBVMBbtrKiKZjXc95fU3KbTjkDPZVDz3Pnux1xnJL9TncStA",
  "key15": "41sfTmvZgdhtpoCmAvDBy9rF45pbTymvMPatR13y8kX47gPPxdbsBusUxby1ZeE2t2t9otCJsKnfbC47Xfrt2u5w",
  "key16": "3JFyqKN8skepUKkLCF5PShPpU1qGTSRSzM3ZnL88j1eJduKFVsLPV7cPuszDmT6BnkN9KeNQ5DDyaYw2dbCxCyT1",
  "key17": "2Bcfy6HuNomYBVQLRU5u1YS66B9L8D8EgegAEmgaNfwUQ5jL8feAVP2fTFbRuJ66LsXBMcx6vRfoiNRsJrSG8exu",
  "key18": "2gcgvmhGDpzxevKAYKFFnK4gRk6ngHtajd6GE9WVFUUPsNdLCAnXJbc9nJ5VGmsSshkoj5fhFJLSkUp12VroD4xq",
  "key19": "21mJ8goqsEkFLkssZtBvWA1N5o6TEcGVzN12NoqFHd4qAuYttpwrNVTLgiokfrjFMRsUyoqairh33vPFm2qxwns3",
  "key20": "DRUeUe1yyv23WrBDihVAQJMBB2pRVdRwZ4fDk6HR6hPh8w8YiHJm4WkR4TZ1eeP9udEASx8AxL4Bh8YeimmGkb5",
  "key21": "5UPVPAPVzAKSL4ddfg8Z1hU1hFTQc9CRfqkZhkBAZa7yLQ2K7jYTNUNcACtRq6DA63Y3gJvExhTqJjt1Pb7nULND",
  "key22": "42o8Pz1mEWrm1BrpdCtHb984bRE6yD5xbYUWek3kagFcHUp82Z5et4H2sNSSCaTuKfaypMcuZsBgyyg2wGkAo7Un",
  "key23": "599nchRDBdu82c9vvzCnNtKRshxhNbEJ8PZexcEmvWHiMpAjX6F1vdUHSugrSsZAmzVvh8MgZaQE4jrc3kbyrVQQ",
  "key24": "3ugNqgdHYof6Y6yuubp2DXUv8qTzcJZerTHJkzHrHEAr1mtgnE5xyeQwqZszRrXfLNP5vx3WJrhEoFe8uEt7QXr5",
  "key25": "xaDwyJEt6wMCsNM22McoBVuXeUddduA5HHPJE5gNapMuRTjLWYzhVH7b4pWHcuUFgogZR6NHLZLr8bjcdgeRvmV",
  "key26": "2ytT9nEGU9a82fGogr4sM3rKGxS5qrJR3QR2dPhcensPwqJraBu4L6Wmjxg4ftPFQAAA6PR73grC87T7R7mc15iD",
  "key27": "4iWamMjVJhAXnTDX6Cw2CMXp6CTTRKHeoCrkSaQM6x3b9Cya8xuVvNnhGgWjJhX7zUzwoSpZ7VFjZKNDnxAuA9v8",
  "key28": "3MU7stWsfDt5Ga5J7qsMU4dV6MdiEgpjLnoRPCDv7sC46WM5jWE9GqZWFC6ydkTL3r6y1kUJbY1uNNau5R4z4pVE",
  "key29": "4fABQruSpkwMf6c5V9VbmTk8B4KvGWXVcr5psKTGKibgddwoHmyVBCtMM2oqruSnbmaW1iTXCZCbdZD93UuzewMy",
  "key30": "27ucEJo1EFT2ArEPZKJBtSUHRo732CF1RmkK52TjY87y6awf9ujaeSGF9Sgh43t5fV5c5Cb4XSqexxQAtUKhWGkV",
  "key31": "4UVfCsaXhPDT6HsLPKTEENpC6QL2MqpayhD9ptGKcvP64UxW7UrmU6oSgiiKsUjhx8eEkvuf34X8Rk5Fwa4qPRSP",
  "key32": "364k1iwdJdFkvEuYURckvGW5jy6Jz8bMX5K1zx2aKaB5HNyimGYyBotLJ3qPr3zNjxsPTd8LqU6TL5cToyarTskT",
  "key33": "49WXSMvP9E1tSr1HgZ9PqM8J5XF2uZWJ4zTvPps5AWgf7AmX8QoPgqBxBb36tezHTtS98nBzWCkX8x9woPPqtaJD",
  "key34": "4K39qwRa8set2fKTNwaRhrkcUo4zW7ewRbWxYCetuxQZLvJDEQA3YWtT1LzdM7jUFHfjSiaJxtZfCAWhzoaiitiq",
  "key35": "4DsnTw8zji3hiPLy1fJk2NhDxbybWe6E3vV7CecwfSoub7XBok6ZXJVL1DeLhmUmomKscWU5US7UQx13rCdVdwgk",
  "key36": "63aq7eZbhsmPiCjJbBhYQskWVfYhgrrLLC2L7p7ZuK998xYwY7cTB9nhxKxtgd6rTEbt9y3opLGqBsH5QjxTqYnZ"
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
