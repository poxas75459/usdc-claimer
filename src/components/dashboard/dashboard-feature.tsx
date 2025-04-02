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
    "x9gtMc4nDjYnHqvyxteEA21DACBUfiZNa46a68sHXEPDwSBPDcdxGtx2fgBhHTH3kijoZNxXMh4xfo8TrRQ1UdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26u3gVjLAcQxLLSW4NYjFzZ5ZGQdCMovkMAjvCj6Bx8fv7MXaRkpHXZPxt2fpVcGwZiEkQu3L2cMi3geQvMbg91W",
  "key1": "5tsrtMTC5PnPxsBBikvjssQA5kkMtwQH1oFQtRHgLGkSKU6WofTkae7DyfiHsiGoGZwysVWo9P7Bje6YSZEG2b4q",
  "key2": "24gLhTkAZpbHF8z2uTrGTVehcfRMZTXLxQejQqVLrjrovJm8Cf9rfpV1vGVpU9J8EWNR5fxwWDXYxE2BhhN6ZtKj",
  "key3": "4sLkMxvmM8wuEypKmJ7NvbHJjC3RG2vKPUggqzYnp1xGqYLoEXnWC6nc88F9dxWmiNfKuw5y8ACJwgZCrZcFJy7o",
  "key4": "63qLjaT9zSqqTW2JosSLqdBpDJQVuWujHLJyjHUr1mCt8UcTRPApLvVB8CizhmMDQPD3M9eKzMsjXzvQoQxh1Fxi",
  "key5": "eh3V5DoFjNF6iNMnmUdY1x5nhHJ6cX1gzNstjq3m2YWC1m3wqdTAs4eixyMA4Hz8R1dp2sJYazxDvpzu8JXizAT",
  "key6": "5VYS67gSTgs8GFhmDqy4WyQKitpaGnC26BWyPsJHmCr2DnR8kMx3FUEF9tqzXKkKX6Gi3UuAjv71ypTqPYsXJKwh",
  "key7": "5Yua2ij463zHo9Fkji2dFTDBPPo4wGm745JRcYY1s9dgdpF92RtG8yrET6c4JzknxGpymbovpGtmoB4FUHzsRcEz",
  "key8": "5CPTBL3Hz4uJLzy3i34GGQqH5gHGbdYchymDQWfM7nfW6PtiXJ4FbnA7iMekiNifgTGpd1BvhMdxVLzchdEQjE92",
  "key9": "5qgStUEL1cJ5QReWMxA6FA6J3LSmK16hLojuwpTfNMKtrATUWxsntwUiQDtebiRpv2B2pKbgdf3fKRpyRijyU4Gx",
  "key10": "53y4SuhLHgXRvvWnmHa8h6XwNL8YgF9nCvs4cSf6BUtdCEFvVJHt1gFyACQwzuCfBYqMwLc2EnLrBGKNSvZQATwf",
  "key11": "5kf3UrPQT7HNP9NTdsJNUEZHbRqEigaxtXmehqWbf6u7JAs2cEiiWALUCDuqFPSPg36yGmWCDACHV7LSLsia913c",
  "key12": "4BtBXv6B3bNcrNcCB6wJ7h4z6tcZStfe91vdFyNLYNVhDs8jFUjp1X5gYeWEpVh6KXNY4tVWvHyZ5bC7MfnXQP5B",
  "key13": "5CnRr5GPQ83E85Vzr37DsQLWp2FpYwMSg8jX6bHR8ENSiReWfHt11i4SRqqRZyC824Yv6qDDuzFbbx4usWe8eb6r",
  "key14": "5KYLcmTRSBRn3dJwEAvBhwn9sBBmL5mVBbysoo9jz2m8kzRxNuJ61Y9rh5pL85ngaUa7ciWiDr8FPdQWTWm23ZwW",
  "key15": "49XqmNjmVQRhWHqAyUEYhwPqnierP8aKACjKu8GVGARetZyWS5sABPonb79v7m1xPsVXdnjhPXqpyVCFh3QuZFtN",
  "key16": "469WDuWo4hLYekhwuR4tJ12quEHdBr2wrrvqAyf3rzd2cqj9bxK9BX4qqW5Xk233WXNsRwqsVzA4bJacc7x1RELY",
  "key17": "2Q7KWY5qcJMqCFva5GMbZ87vUSBnS7mpmToStRfRNsqQMDcxw1SwqcjSoBzeUNerGGTjZ4GgoCnU1X5Xp8UKaqFj",
  "key18": "4ED7LtEP9FJcqa1cbcec3cq7taEDjitSR571rcugsSLzoejXTn7RSv2BvKUwyF6V55F6ASxoJRLTXP1gLWG2pdsx",
  "key19": "5AxqySvjNDVrQqNF2t2KzDVfTXNXiYnkkABUozL1iTf1y6YQGhxzwNLDwgtW6KXsenBKYtrRB1fw5J4TL4CeeAxv",
  "key20": "2UTY4DjDwAKBnSmuBmFpKPbPNDcw2HPP2GKckGEtr4T4yaTReej68Gbgo11tjdggRVRA71Q9kLpcebdQMqeRv61A",
  "key21": "CVqcF5e6KyRJV73qRVfNrpcCvSPyE6auf5UKPa9RpramTZjMFQQS8ChrXdmpFj8FBc5bntqfK8MkRzJCyYxAgdS",
  "key22": "4MTwtv7PGQqNhb68FGsj2ApezQZ7BFyxbxYd9DJGBRN2WzLNeufCQMVFVfMESpX61AMTXzE6iVkf3wv64ruAgcLq",
  "key23": "uzYy8QrPMQFCdYFgLLtLzNTF5iNvq4XjG5h5bJJBaxgmYezz9zJHTZnxQ2EqzMapy51q2hKtM6H2Zha5VMn9kE9",
  "key24": "e77Ez697h6YCcd6F1DPpPwuBGVywRwwsvYAScFL56qK8z385k9DrVcondNQ89vDFnNWTbMGn2SM8a8oVHmubcW2",
  "key25": "48nqUqApzfK1VjcFfLsSaDxCAhjbdWWBQp2Dq6UnQyggPb4Xq7Kw7eR53aSohvEx4ckNXBXu1kWs7qMNSQqEczMH",
  "key26": "naCke9Urrrtkk15xPzJFH9swdxymGHfB1fjjXRjKf8d6U8P6gMCyebuZGMqdBF22KS1J16RCJqrxpb7pTM6KcRT",
  "key27": "4iKqZ746dHRK6DVJmECBLZgZkHzRBMhS7Kjxi2WfQRg1Ft2jV2v5ECY66Kat5e24ZUnxHZppWv9hKjB51vM8Rsve"
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
