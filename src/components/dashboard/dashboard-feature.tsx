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
    "2y1WvWpDJtfHEd8UFhe92MwBjD7kNB8qwCcofjfB6psEeaS2hJTUkhmbQZBJs3yGSeUEuJLeRdfJAq2YzFr1uZL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pqb15uNryJtRATbzhaHZSnGmd5jcJC9pXQ5b7mZjsNGQYKUjeppcwrPdXTk7AzHo5B67iBXxNYsyFySarazFTPM",
  "key1": "4xEJBLH63DwTRJRAo9w4BuDDSCCvkiZ1ocoYVi7EXwr55xmnT7SuTnCiUG17rKMkXBVfUWgPXqb5uFdPJARs2XPi",
  "key2": "51VjY6Nd3bSJu6GoSooZhF6vTVVyTv6hHo1rgJPfYxQf6hxqSudhTTwukhVRXmoo49K3qXpAHRf9osaEbeeyEMSH",
  "key3": "27eGj4nz5aNTPhtwZvE5ZVbPEGhNkMTx6oq7rdUfAfDkwxynzLf1YeA7vW2U4uM7VXQo3zDru3m4Bzit7t2hLgsM",
  "key4": "3nfMeLSFJQ93i7TZARWWMsLPpbYmZxfNf3dxomMMma1DNnbf4bRYVx4XJ7A1Gr5CsyoRkAvAWiciT1qfgTxiJ3Aa",
  "key5": "2rvYzptHF6qpyE73zbGwTBxdTDjBUunSm7BSfBZeuLEwkhGvvnYgv9UFeE1EpBaAdLrPxXRKWgJko6eGb38mXmY1",
  "key6": "3tMokTjrn94aZqAhxNPMWwtutQBtPpGrCjqx5Ef9tu8rSYbDHGz9XUTdJSNwGUFkwMTPREoHJP8ARWmogBAbvKF",
  "key7": "62ETYPNeyEc96rjwWfqn3DWGLXr2Es6kLsntbJ7hJWE6wLmAG4ugCX7oLufAgPKCcyVrNMQDJeGqHTmWo7HD6SdL",
  "key8": "6i7ZXPXSNQy6PybfRbh7iy6wth43HAMgEbKNVdK18rPV7hC8yPaYcBRkXcTVoXzhouvYE5YKQMsdyUuBy63QRhJ",
  "key9": "487FC2YLKiDBrHumDt2dXR9YFWszXkq2aEyBmut1phMQ7BnSfPfqufPT2RQ8zrcZCo7dDv2JgwUoGaxtkWKJ1FDM",
  "key10": "5fQajE38Uf2S5mpKdDRjPu8jFcZoZds9AWdM4EgKVJuL1zfwTkAfPWj9B1wfuES8vm7v5mmeuf6kHTTdRXh9N3cS",
  "key11": "2t6FadNhBKHLNGQX3U3HUHTphUTWeW1E5ogurwZZKmQ7DaqB1zySS7ii4wX2VqurXStpx9ZuLXdMqffJLPa4qT3p",
  "key12": "Z9spawrJifutjDzBoHPErghCDp7DfC4vN4a89QJN7tM25NzBuRpct7E7FsCMeWeVy4s25xpaHzEMzmebbqwbfPk",
  "key13": "orZ3fdxwKC9Wo1yiHoMSb7xt3brzjqBz1QuTc5n4wxSmMU5SJesNJZExKhPG4hgEBPDzi8fwkSvXz8852VeuuF6",
  "key14": "61fvCpnbaQcp75wbfxWdXusWbmZmPpsRRsBVpjp6xMNCaL7BV5TaDzZaDDtB2DbXX4bN3wVHEyb72J14JjwfCqSQ",
  "key15": "4RPibpgjNeyTGttgcJZxxFxwnbdM6E2Upcvfw4gji5SHdPihVTmMzgRysTFuqxqX3CKvgA9T9SKfcXespiMpWUvv",
  "key16": "5JDhQuQefapKBWWEwkSPZpNhJw3Hcj2XYbkr15DvKGWDvVTkF1ymXXV5hkJqXdW7vWW2b89mxRrrx2U6soT9mKXN",
  "key17": "1QKc9LrGuku3gk3sPGUNugdhEz6CatbbTBnxX49fMt4pP6BXS6TtJepeb6X5bYeNQtEQrjkdGak75fEj2j5Mauj",
  "key18": "4i6YERS3K8mVbs5hjRK1nPAr5bqgBGxiAfJjTwbcgUDaDZQboURpKmZehfqmm2ndofGvBEE1fms3V4jhV6Vu1Ya2",
  "key19": "3cdeBfsejdH7GLpT8MPkuoxuT796Azi76jSim5pMho9ZPt5kS3LsVdGf7yASK1Y44bcNxa6UcaNYnpRqdyqcwLtn",
  "key20": "3dU81RNhk2wuuoYs64RskVcCZcQcptDAV7ZG9XtemQW22wUunC8hAAd6pKjUYdkUHYzEuGv4frDBrZritM1jmAUn",
  "key21": "3GAHa6bYx2hpyNx2mzx6YqiHTfXvk1y53HqqdjTj3Sz1vvzMvuAqcPCkASFW3XgGdDsSfgcpZkfge4ZJBRKYzFQJ",
  "key22": "37YMc1ZJGL36qAKH6d3RXmfs1Vw3NgozMAEV7U5igoiwkLp3PvR4SMu7Rxch89vTLo1hvibqzNpXYwyhTtcBq1TT",
  "key23": "46uVPnLJAqia4zWow3Bsp4f4MuZb4udEsgyEWF8oRhQkebzHZCbgPVoRf6GF48AhCkRf2HFVmF3iK3yxpjBAjedy",
  "key24": "2UBS8RKaRDspKtwe3do1aJZf3SJQuuBkQE6u6vbPgxiv4o1WY8xu3Gf8wWpWac3gECeVWyGR9DtG2L2awdzachzE",
  "key25": "5NKhnr2kW3EGRx4C4ay9juJHygXWqxxugfDHRMcvuoxEukbjsbQEGNSHP96uCiMdoiKvvsECzv3BpgzyFgVcxCNb",
  "key26": "w8stxoWdbWMkNEc6zQMxzApgHHiiWrrQibBbcVcMCMBDC2ANTcE6aFmui8vC4H1KVvyNV1mAcYquac32WaWPMJ8",
  "key27": "25M2EFKbktH9DYeF5m7cQisokPWpgfWVEuWSuPbNxPFuhEA4pXyhWSzBaZPV67xpWPD23t7sDPpzJj8gRnL4qVQh",
  "key28": "41nfWxjbhGvyNvUx6ascAGSweyy92uLnYNrE2sooBXzHPJfvSt2THixw5LrnNdaHzVzWi3PwsutveRSAwyoYVgdF"
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
