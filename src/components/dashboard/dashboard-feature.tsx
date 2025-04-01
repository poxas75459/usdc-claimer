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
    "3zUFariYGGWmSB4tnqP4dnodrm9p284L2hp8roeY6RKozku8EcEckYoGSN9YT8iKYHiigPWrtH2ZNt9G46mwpdao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vB2ueieHyKpXDxwm3QnMaKmfMJogbMNnJNdDFzNXJC215dRMfm4DdsjVtv5rVFZwQ9kn5cT2ZQ9S8M61kTfQmE9",
  "key1": "k55o6hAZAiANjbUXGQMcFAH5WKkgzfj1wVrkZZatMkQTdyTFa3jDdvLEtGmdmHSXKSQeaz3P1fr9i143GanfvMr",
  "key2": "4j4ca91mtNf4f9vQtDUyPG7Ggjh8MMDnNnsd3dYH4WR8S2M9GiLdMNjT7niDtNykXmqTfGppF6jwj4fpmKiQpDhu",
  "key3": "5RL41f5GrWz3z16cDnLL4DrS9cYEyGQ6Tjp6RgTnPErqLzN8TpCP5ZDHUG6Z9Q68E72MNtxtaT2ah3QnofwK5TLG",
  "key4": "RLVW4YxhCQyoJMpD6qfpDWYLRBzttxL8RbPkRz3ab8zXVvsq8JNnMUbkRjD9p8NcxRJXufKT2pQDY9zXnGjsPhd",
  "key5": "3JmUnJ4Hr5eWRcM29PRfzaAo3rio9YmP1p8PYVMZoQrxYvnsj3EWaDF13jkLgYWyk7BeT1GRj5dXqe4caEHicrqn",
  "key6": "5zdUJwrMng5Jbh8hQefBUQhAcMVPSCDtPpMjM4WdFrtZdb4AzqfZrHb8Q5tQZaUphcmQoRwVbMWnFcBWjFRnWXXN",
  "key7": "2jHi2CQREBuJoEuKfNTDmETcBBmLWPBNVnnoTantB9UG9VSwH9TnodeQNq1tJB88FZUrp5hw16b8CmiPK4UoKJTK",
  "key8": "2qmtVG86ZKTyUWNnEEwkuYeoX2Hqiqd4fYv7dwheCVWB4Ve2MYBGzMHdgr5ysH8QYHm5sSvZYUwSzyx7EZP1y2iK",
  "key9": "2DCacXFAfoqptzRFVH7xP6URnGQFYLYb3fbHV2N7Bm4jUS1R6SPQAhrnzdGXcBvYiDWHmZNpqYwxZHvntXrjwALn",
  "key10": "GsWW3pmqLC5puP6kpaP9iRi7rkByt2Pd3f89jCh3RNe9JovSqapwSrKJD2BgTVtuRNBCDjyc5eJVy1xaD18YUVT",
  "key11": "3hdihNAbRrn9coXdfktugb1SdfYfYuyBdPefG6JK98HsRAeK9htgWSLMWv17MZcuLu86RZftqNoNo13FBrSDEgEM",
  "key12": "3Dmi5KT3ArRFYiRRkHmt3r25FNEUL5B3bfaTvCBCADqaAndJRKRCLxTUaerx7MZj2kSyURkp5AEwqfNvkbXipwU1",
  "key13": "3SsxKzBffY3i97CHg312ZNpHpVvYc6Bs7mkCKodYZrR5dzF5LARN1cfC7W4M17hC54iFYiaWcALNgtk2LSJjkx4S",
  "key14": "2kdk5XpveytUsZn8vV8kzN6hCkuH1YJCjwSnztXVK9PHoNgzx7CL3vTxPfm4531U75bi6xTJrHF8C5YKGUVCj5vp",
  "key15": "5SDyn2NjCjs82h7iBLEJwb1H1fRnQHYoYrLAhos9Bav8vxzWU8kph9PRLCsKNMz4E3NRDhbeK52CqCcsaJZCL2iz",
  "key16": "4jf2oiG6hE5seW1F4k2w56DowywCdkz4zELRg2BQgVpXAtc2LDnUooCsfpKgSQDTuxxapkkpCUmi1t1YtL8zzufo",
  "key17": "5k9j7LJvekSetpbFjNU6zUJiaeck6BkPzXcoh4vPuxUUvxFrYD2NHT1D3DLT5bWxHpLmJy9CEbfs8SZ2DQxn2ECa",
  "key18": "5yppcynCDFFsLUBxLHq2AhYYN8cgcy1H3Le8LA5GdEC1kupHuaaZfFgv8TXHp397yn1MDvkkibjiFQ8g1reQnvsb",
  "key19": "41SEjhCCBwZoL2T8dU84htNycYsXc5hL1EL2ZDiKsPtBtbX9LnQtkWQ7Q5ZNp2JtgprcW3echWmEjmnb6i8Re6Qc",
  "key20": "5ZCaYxCiXxyNKGTLTPUpQTWKLjBYvZHvxkPwiij4t6vDFi5xjxXMpMcAsdUSkSM3cxNcWPpzipSVrQUxBMppRgQm",
  "key21": "2vsAsiJmbCLCU4yP8uTiBqinhoZQYsVxXjfecTwZFKKVynk6EaRqtSRgkA2PgbuWv9ZEEnTt9aCYc3XGUwjjde2D",
  "key22": "615k1Nj7eW1CA8BrRVADx1Y9E66B6bt1ho5DN8iRnmcc4fSmnXnDc598Z2UX1YrRm5s89hTvD2RQHAQEDtryyisY",
  "key23": "Yya5wda31gxdB31se3Vh3QrfNcVr1WEfJxpSaykPv1FouK4dDzfqyWqNwLamebckUpVq5tuWCGA3BiesnaFnsqi",
  "key24": "wRXamVsfTevGvAunyHCzK93MksgLXUWnw5wshF8YRDBFKQ4TRkDiYpWWuRqvdGTrkCpJfKUzmSvCksPGjTrUYXW",
  "key25": "4J3viMGsdeJPMXMZMnnUtSEYvqxekRHhBkeoWZ4PU8Gxn2phnj7xWrEG5XY84Qa76zrg4VVnRypf32FZniuALzjQ"
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
