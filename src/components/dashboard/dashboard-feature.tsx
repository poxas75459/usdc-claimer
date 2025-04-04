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
    "4odYncVVFvduopYKKKEHvfU9UEcXNWnoWQE198bGCcibR5gbpRP44ZYrQ4YMR56bpUkt5xm8BCTW2QSi5pPtwrSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YLg6VfZ2bDFrvUfwtgkuPqbVCfYzrpPVTUssGRMBbbrmDqyDNXErvbboRJCak3J5kZMVr46LuqaAv6VRwb5ZvZ",
  "key1": "2Dx6iUkK9inA4WsxS8cP8SeWJDSLoX5czFYBoQD7XYcdt98mZYSS2Y2bQAYh4BW8M5xqPaUci1Bs7WuezqSpgy44",
  "key2": "3tLhtssSDDVeJ5mDRQAze4pFqbkujS8wivQ2pre585uryBLVeVox2iPz5XdYh4gDgiXPmqVejfTFcsXQfboaShrG",
  "key3": "4nRdHXe3WPeHgfc2NMCNb8ZxTG4eS5eGPVkvAsMETfZkyvjY2ceXdwFC1MjWF7wrc34EwFDUTiGe2DT5pTA6GhqW",
  "key4": "4uUWjmagabnKGBMqZd95adUzp3KpDaUoTXuhiEscduLff9EQsnaAfGhyQ741bSTCEWfi6jCxbZNjv7GGKt655H6S",
  "key5": "3UctAzxG3ootUbowyfbRa2yfZRZHxXUZk639piUiUc5qFr9eCn7MPnRH9xLU1nDHGmGciChNPNKDYUhsG5FdEEkw",
  "key6": "2wEvrwBC2bxTTeH976pAF43QPcBippQ1r111GKwX5ZZ7bQBk2h72kPaWKPFTkRqJH4sUMLodpTgro3e4TnHwHhQc",
  "key7": "2ivWxiYEb3AhwKizgHKuB1FvFL5n8odJtBYFzmEULyuQLy57yhFCBG4ZHHsZZtigLm4zBBRWr4EH7tUYGvzmxcdy",
  "key8": "49QBMa8dj2zAMYxCBXiPxsaRTeY6HMdsAZ1dzLjSNFQiPP3RWMYnTpGqXFJ5XainsX2seQQ1Z69tgVAbwKi5uEkB",
  "key9": "63YrKzmSN7CNAZ2PpFwejvvtaae57d6ZT1ePM9nLbmHV1CEryBxu8T5WGKGhcxxfFxzA1AczKJx2tKXCACP4o98X",
  "key10": "4XcH4V2T3RsMxEToXt3MkGkkGzJ9XEu3UGjC47NUzxqzDSLFZpXbYQ6kWA8ERh5KabmydSwVeosJ5m4B5S9hRJHS",
  "key11": "2BA8w1yEx2HCKbU1Eh4px8nEKidsQDwPzEMTEVqV19kxTzW237erhpXkDG6cDTwAbpCxY6bG4dSfmNSqbDPQRCn9",
  "key12": "2rkcvUVAGXZpLuEFwwBKr8Gri3GCpLamG8jcMyHgrwNzEfHcFieFA6kcB3tkPZUUb6dptAnRaipC16ityxwaSfZQ",
  "key13": "3PXrw8JZAcYUZJkaQ69vQZuSW2KZCVxpSqa6dDFrKjnWg2x9XLhtJy5hm87Jp8i167V7rkYmtarjJK24qTuRepbD",
  "key14": "5LUc9utSMhW9gpxMKr8G2m3sLBrtam3F7eaVjX8Ja2jmLc9eV8ei6yPhnGi2E2SD56h1znCqhKdSUNt43UaKxzno",
  "key15": "2CW2GKEhraeSzw9ZSyWuw5fQy7usu94FE2DpLMTBABrUTvsFW2PYpUczFLDM8ReCzm2G8aoy274RsLSXuMYWKmJE",
  "key16": "2V3qMrzWZGUSNfNzKHUP5RopGRXa3SdcNRJMTuhG35YrC9GRw5WViwUAbZxPuU2uRP9otaBwCfUbEkaHs9PYQ6uj",
  "key17": "2mWPpQTdhz2zMx6awadqC2JUrvJ4JVgSzzc6NbMc7y6cey8KiCk6DPXUpsr9kXYch1j2ti6Sc1AaDAVztb8nXXmR",
  "key18": "B2afQ6ZbWXDRkUZnhpuGPmkfV66dqhdYpNAuJC4PgB59uMgdD6BDbR56BoU5aC769ggg42rrq1VXkvmppEPAVsY",
  "key19": "3DfkKQx183gqtiMAzWGJXZSYaHndLwk5EfZ12Q4qa3pMrSRdNSAHAdKuTngeJ5Yb7AB2BJE3XLEJEi8VVcF6ggJa",
  "key20": "Rpv4rUFbXxmHyHBGy2uMojBdKNh5Vm8GHqjXmdHRcYuUGKmQYWSyyfbopC4Kc9HpLYFofF5a1qcBUbPGGGF2Q3T",
  "key21": "kM84Am9WP5A6uid4GmDsMiYp27aQo5XAw3iMA24smRRb5uknw4CG8WQujj5tp19JZSqgreQJzhUy7b5c8gHh4vD",
  "key22": "22F98Qn2X1g8CCqEsZjNqDVNum8mkRKPm3YF9TpHqq1ahsTq5heRmhXisEqjrgCMfgFekHWwt1GZL5pu8WoK7Csn",
  "key23": "p6EqoSXR6S87xZTgD82EnUAy1micoB15XjJMZS8c7xAc3amiWk8jn2QnJzUT3hpiNcMRuoK5Uzgr8f52NYEJNM8",
  "key24": "4uiRGg6GWiBg9Yxwy9m23BUk3jE6LZcZ364SRaXUJSoT1pH5qFYZRnWS3ZgkF4jfcpqQmiANKCv9TUwuWPnFo8f4",
  "key25": "UrJ53ZAxwF3HMBndFtnHLKpXLCdEK5jC3QcLuX2Rv3QkNCo7N6udboixMvV1VJtYrukFaSg7YnjQN43ktdE7LEK",
  "key26": "9szWEn5M89D1vmv4u1hsvCjJkX5Xo3dYdW2CFq6RjrgLh6X4DjeezZFVkguotEaxjMfDTqKEwVrjtMFv9d762Nz",
  "key27": "23LaMxxP1hKhFNaKZoiyTFxoREP1mkVRRCeMyax6jugEs3icYMpLYj8P6sot9HZXV15ypLGkBanzL9VDpjyM4Xoi",
  "key28": "bqFuNXJmoeyUA7uC76rtNbBNr8e3c9LNsL7GJKSSAk3JSppy1q7LPQywEzuU8Dp8vUm3q9zJicmkZAcTN8KV5MY"
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
