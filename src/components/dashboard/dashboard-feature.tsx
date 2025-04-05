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
    "4N1yaXdKh8qLNLyZif5M2v27QbkDv6ucZBskniVpXrqvFzaFHnU3149iKbG5hcnvayBDYr1fZkEnF4HmDTzy2nUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XEJqP5CDbeeUtyF1gNpd6T9RP67uanxZAKaP3cRvLLq5AM6VrzPJ6dSW3sCCyJsoZzL29yKJW9Evpe4F9yGLWdE",
  "key1": "5oc75cahexEB1ft2MByj8xmGJzXcfNvFbMGfEa6pJq1ymKfe1Pucgj2obXCwQpvUtXsenuHU6SpavM94ExuBCdEo",
  "key2": "463TL3R4Jytc3FTM769FoBbXhPJE9XwNo26Up2wVQcGQsruiw2ECggeJ16dhzUnYLNpWrw5L5EpsaXSrZ5i8A2Ra",
  "key3": "2DFhrc9QA1EuE4yxZds5UeTovQCdxkiu7jJgkFxDEpqrdC5si6tKfrjttoocqqRgSK8Xq5QBzQWWtMpfC3c2p6kj",
  "key4": "2mJNbmA7Ep6eA7BMi5y5fVBvvUtP2w5oSayktzYbALZDvfQ9tpiDwDctozqLJYypM1u7ZjqBxmKpGPd5ojyUgCAs",
  "key5": "2tgjZFCjUiEgJhyp9wKLACn3CZcze7sCdaeNtiJS46yuiZnwn83RiRXHZo1wWj84BV9LP1tTgDTdzi5kX79hBtEa",
  "key6": "4ehUHtUZ2LoMHh7L69sMvLmJD3xwZC3h7xtd1t3Rgajpn57f4KZPiBa9MUbXSc8EzQRbNGFGbVhg5oCTbJAWq4YQ",
  "key7": "4c5zQEiSGeLtxQNhugjpoipbMuhVshYLaGCsPJViJqkpnoQMusonsm14piSG8DnFt5C3E4jF9ZTMokUrzgAbgyD2",
  "key8": "45YptcBAsPKinHoRD3HKLUyeXVKZcdHKimyXbkwXLnqPej47ENUhWFgS16m2amJfAqPXPqRgNwAQkBvR8uzQwaVp",
  "key9": "5ES1h4fu3kDEWy9HDU69YPB7RGBNZ8tyLq2scLoTEEHx8goZLZhYLdkSCTDBLEnpr16hk6PhiS3WzLneVmB3pjo5",
  "key10": "23RPKuPXnaSzjDB2Kb2vzgSngGnYvnnUxEdQrBhoHYBgs8jNuqZYXTFK7dqzzpe3AcLT1FqyiudrF2H86YixxhEX",
  "key11": "2S6hY5rEw8C8LpKnZxVDyZEncbfc4nThKZkJQW2mwK7ySZpvD68AHeueTNm5unEdpfjLwz2YP723RxZZsY8dUbu8",
  "key12": "5VPTpeyeASPuwkNnTHusY2awVBfw4WLcoJRRrdtDRjtKtLV5nv3Ep8PnTdsShyUYdgy8H5BB7N8NHtCLMumwKyi1",
  "key13": "3rQmmmKj8aMfgxTfKwiPMBf37Qm6vdSmYXXbzhfHDdXiC1szv1WtPnJzZRq3PzVgJi3MCz2f2iH21dqo95Kx16K5",
  "key14": "5LF4EkWQ8S3h4BWgruKw66d8B5JTWdx5DR85wxDW3niE4R7mDhi7AtPbNMwtnj5UNsP4AKhpepZ9vF71rGVmkKeA",
  "key15": "5Le1L2rhpfQkqNAps32pqv3nWLFXtPViEoeRawMEoZBvt8eb3hQkzQsJuiMLHkPd5PSWuzoJT6pxdZddAjaBguu3",
  "key16": "3PsBfkqC3ZynnZJjsLa5TQv8taTKmnW41fjMDyARJGjB4FfC9KA2ogtuzcd4c8WyfjeADf3jbspUocoxdX4GgTHv",
  "key17": "3m6fRbTK8WLCajFz7dTjhzAnHnJPAX2RmRNSCoENgPGjzrwzQhUk3miHuWeHZg6YHYHhAZeioyAdgseRQLsjpj9s",
  "key18": "5CmoVWp4cmRdhfVa4AaZ8iChgHho1wAjEEn58EqgMBj3qVQ8LYwMQLknJeqtm6Qzk4XLnJRxc2Zwa5VaE6yvYHVb",
  "key19": "2ggvdSQWHXnY8JBfjSB85AAVEzP3SEjkigXrdqJMQo3wJ7PGEFeZLjoLixykg3waTsVhPfPmaFp7rFgcECampi5L",
  "key20": "uxcUvAMcGogdEopWHquWDUGz975iFN3AxTMUKE6XaWZkY1jCCWCxLXw3Q3HmSXT3d5xpnWEfmYaLwRhcETFUtJa",
  "key21": "3nY2fNwGKxqmNDszwZFXmAicKi1Pt1bZNqkYJy5tEMy1xNPvW9FxUoXK1QCNsZ5pNwqdBQtMfaBQ6ZEsbnb8mpJJ",
  "key22": "3MFpm57ybwLvZ4bLtEpepHaY3Wdy9uTxWj3JpdNkvEx2HnmkFAL6kDusB39QgzyWyXzooPjumYfqprH1vy8bhKhR",
  "key23": "4zjFMLZNy1iqnqqUxBKr8tg2abaqmJrJdzFrQwWQFV4qUgCHhKRcSDZ73Q9EbEYnxDNFGtHp61FHSpQZxN4gjYCt",
  "key24": "43KAfTk63oiCbuUiqntnzYvH9Sfp5MtGKLC1RadEC6gT5U7npFryS4u5ZfufEzJqmjLEqnC8jbZw4kpfAdDu1UMM",
  "key25": "4pQk5ZMC4Yto8A2pe4WnfhNTErMxLTwcffL4QsxgKrG7n8VDQp6vHcrPHjbbftn5FB62EXGDnLzVEXqUyVRDS7bz",
  "key26": "2QcrbtbkG6rmAoGoQALKnxNfCNUGBYmMPzuiUZ9uSu5krxuJtD1MZX1NDzC5YCex6Z9mTUztSfCKsA3jW3QyNVjw",
  "key27": "4Q4DHT3XDmYbJ7rLPU6V6BFXg95hVPdWXY5R3STQgqUfLXgT5rFTjksiVWcPzWQUUfMf9PmXkvQUErDBUEQvRVYk"
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
