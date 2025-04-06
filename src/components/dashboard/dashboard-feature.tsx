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
    "38jS6QJLY3x8oSEm5mUMrF6XULTpdbrXpQ2mcRmRJSYEQLvd94GJiyt7PvbSMh7xgpDRwdXsaUSSftW71Rs6vwpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bkRtN1cu1H8M8mwRn4HwdqYp8t1xSUtBpXW8HQZZGEfSc221AgeyQ6Bx6H3fhx1qiB6TmshpfBfZAUYi4DqLxm6",
  "key1": "5icwbpMp1HzVHm86JdWPTCirSfahZA37wRjL8PHz6XS2tXttKCk14HtPoTprMrozU3s7RpdakyaeHU8DW3qPYdQ2",
  "key2": "2DYCaw3oWj2si9tDxanmR9ZpiXjQMnwutmUenyfNqjDtD9sQjJanatRBVTvZjCeQiooixvyoe32a63YLRck5zwbh",
  "key3": "4an6UBPy5zgfYzW97fVZ9osptZLMigNdhdiZW54xV1KWnmh4xQsACaEcuJjBLRV7wFMsUVoQZXYanTfK3ZRQJsiS",
  "key4": "5gGSe82256VHJkjB6eco9QtAHfVg1BEGXuPYfq86aMUjjYKbLBCh5c4bYebW2XoC77as2BmYFc7Bk2rVL3iM2hnG",
  "key5": "62KcMn6xXweGbkuDuTxY9yYp1213SMxeew5bqtRKD7km1GpVAbaJYv9urC4gSxBqEBHAWEBkT1adsQFHnaKEqsgf",
  "key6": "3Y2r7t9X3XM7pjuSJTqfyifERxctAMyb1oxzPbMpRWcrrZYwXHoCWdUTbGgyZed8je2jacmurxis9uaFrTwEWiCA",
  "key7": "3ayrsgYhoH2oG79wn9P5rpjE6PKbCcCRgnWdkUAyBtGcM4ueP2RrUcxhbziqnCMtGNPJ7ZYQy19th1wrtVu1bpag",
  "key8": "4ksPcR6MxCLnbTUJtVoHJcZ6gRDVKMUTFvSCCa2kK8kcMSkmXe5TXUuipmNPpoz6boLEE4nMiGjbtW7j6DmuoW2G",
  "key9": "4UhJTwbTyUjs73q5pL1CNYuCyBT45U3hEaFx5UNKKiV4RyGirXEGoTkgBo1aSAnbHzQS7bFNLUdpBRz2uu51RX1q",
  "key10": "3th9pBkU7juKMgxNomgA6WaoRW55WzyvY73wVscNf5WL1PJLCZ6mmNcJJA2g8yRWhfSk3LgmqCKoz9wjunVbCohr",
  "key11": "ipKisGCaURnRzFdyFuH9RWhACyfrtmceoRH7Vmv279XG9iW4QbtKNcrHNHHJ8e9b5yS2EEWzeGAbihpPjTsRrc6",
  "key12": "44pyn9yVLhLKEJadsSkLG9KAHFqcTbyJC29JUF9JW7aM1Zamnbf9idDXEeQkBiqXWm6xT89fAUkZCiAZnGPMzNhP",
  "key13": "59RikXyVTaJi16cC3f4YNfhgHkiGqb8ZjboYj3GNFxrpXVc35NRM33y8rdzs4ahaf6sDvkMQ1Tp1jfEU4nYMTqfB",
  "key14": "4XGSpPRVJuQ6WjD1DJ86RsF9nnWZ29zDuECcJGQ4pvms5wXAHZ993kKVLYvKPRjn6dGJWoo6qRgHq3MhhRSFqv18",
  "key15": "37JNXYT1ui6NqTT8whKZc2dh4qvNUELG7hG1n5arHRU8DRGGKsCtuWEjBYARSuYFSsY3BK1zjAFQAQZ1ihbk8KQt",
  "key16": "41bkZCMwGo9vXS8LMJgN86sAXDohLEqHQ6immj82CNaWJm5XpMh6FxGt9JZ76x7pjUCT2WSoqADsaHwbKFyE2DAf",
  "key17": "4KdUhAjNJ28kt4Mavzu3U576oYXEPbtkhGcYjGsJbPCUSU1ZP3e3vFg8jr6pNGr7vBs2JueBXYwLbuFGmAm1Sx6c",
  "key18": "34797Bo9A4bNU6x8EcDD5ub5wtAkyuRNLo3gzbXbvNG95Sewn2y7ANAWVGQ9BiDzYeqvhzrG6KQ32xQhnnx5BS5s",
  "key19": "2YSGnYyCFmtSaP2UY14Zzdp8zFnJ48cfBDU2sZyEdTA7LydJr7GJzP5PhHzv8TGHihYvNmvptEQ2Y3shcy9UPYXD",
  "key20": "2z1Uj7rovae9Fp9nT8dCp5avz91QBLeZ7n6oaHBh7Ei1c4h1EZ5tya4k916XHjvUZPF9diceLzdvP9WMNxTaXe9P",
  "key21": "mUyJqcrqByfQAzHNwFyt9kKndxne9Q9wtRiQyimHmp8y5PyVbLbNUw7ztnNUkraRAgqFEjwv9NfozM5mxaxt854",
  "key22": "D6BFyyKuiUhKUKKTVz8XNSkidcoWw63QiZERjAEXYMn1XruMkaudJtbsbHAxNLEawYkPNChf7zdP2SdRrr5MCmQ",
  "key23": "3dMFedjnit1GjoPBhNwseHsfk7fuZyuUfxB9YronAsiHCD6pEF11K1JBnYs7mHeYEzPQZwhqhxzS6aUcxrw6XUtM",
  "key24": "GFvK4WqifQ5ByQsuTWpFXnfe17X6NoyVdKDgkLNmTBgz5yy6CYuczG3AHHVuXZnTDuZxC8WYt4jGsxACiuEh4sX",
  "key25": "4ukGRWmRkUYi2UcCe87K9H4JA7HEDgMTbLUbMGFogQLJnrnGp6GB7vGrpszNuE1q6de2VxAjiAxu8ZfExH9aC8YU"
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
