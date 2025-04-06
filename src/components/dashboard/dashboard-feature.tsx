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
    "4bK2YazUZmHv7dhWvpJQMhtStw9L8h7BNCER3hKUHPpJz9ZCS8pmmrsTGgaPaSgsqYnUYRMmqJUMRjFBfMUWs7U5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66R4CnrHTA8AnKUPMGuUQxT8W5zTFBx7cjquAQENk7EprLGsNELv5gusZPNLnDMqgXJ3Fek56TVxEuDMR2rYbKa9",
  "key1": "PLeLYUk27HbwNaXtq89gKPbkTjvr6zTwC7woSh254gCjwCAkxd2hpzVG17oedYK8soXYzVHbshrnZyC9fEFrXvC",
  "key2": "2GC7FM2Dix4mxT7fe1edp4j8ejYM8ochR1HWEkkJFVgdx6bZVktWk5RLYxzFR8Q1ocdcw8a7dW1e8KBjzWFbPijN",
  "key3": "C3KAYmsNYuU2eFhVRLrQtBroJUxVo3vNvQTt1HgWmCKK8sutxYgx3qrST2GN6tc3UNvXx6ddSkchTUgq5N4ycd7",
  "key4": "3tnAXNx1wDAYn55qYNHne6A8fzqDmhk6RwVbRfMkzGLwR7xMJpo2enXa1kwdS1oUiixc6iYHPJKat3MnndYZvDBu",
  "key5": "2PVUBpS3Rq265sTRofGJCKTnbn2yh5XfUDgFZsdSfVi1xkUvgvjhstfgCwhCXk8Zxtw2JuA6bxEFbKRKgNU4n4fa",
  "key6": "4Eo3TnHq6cAvkGNZL1BwSk4LMXFjCLGFEzJHu12FuFGa6bDjBhf14gR7D5DEoboty2SySsqNjneHtTUcBa5dFzuC",
  "key7": "yAoX4temrCGCevTvRWwzTefyjX6JjaLkBu1PCV8wc86pm8x5svtW8xRk4wkHR3SdRtKBknkPmAPuA9cfPvoAjJg",
  "key8": "2SnEnRTVRfue5EThmLxsEHNoBWkJhFQScvRhSaeFRrYPUU8du9QwK8Rq2MSFrZfGfisJyhx2sjmMEyDbYrkheDrA",
  "key9": "4tAW2YvUeYGQXgAASoDNbD2rbgtEsSTP7LQCXuT9PZk5a3hXFVWJf5qo7C9RDqeCimzuURxnTe5LHEyFgLAea9Cw",
  "key10": "4YVW2VnQo2h5i4GCEKVeo6ewojTUaTapj47SGfBfhhsbdX3Ta5Vh32BJAeMmxyBwWrKVEBz7gZ69m1DWzqxfSa25",
  "key11": "2eWSBso7SDHJFQaGYR9bZj5DEqScTh4FWE7xfXHxFmvxMJRtLGZDiCHZ9vgC1VGQbgAr63qpfbnmVGqGbd8g5jsE",
  "key12": "2TBogj3U4fLzji9Atfqof4mAksYvLYwuG3XcmA9ziiSbS4k3fxw9J7YYsQSmZf8NCM7HvLUobJk36EQ7iQyni95T",
  "key13": "5NC45oRQQWTGQSufELb2hM4w8wLjnCUV11TWPgJDg4foXsJqJT4Sp1fqNKYYAFSM8q6w4k7AugNis9fXiFhA6xog",
  "key14": "3eoq7cTKdsH3nFsZkNptK2seLPY7dnopF8HFv63o2ju1621YomXNT2EBXgHVM7QTS88HxpnC1fPHzca9AqEfEXpJ",
  "key15": "56Zstyb99q9b2Vrxz3HiAURZssDnrmBiLhazD5TLGHKSV9mUDiSFRwgnxze2316i5MhAJ5eCD4CmvHKgeGGgT5xH",
  "key16": "37BCeQ3ETBfqHiwyviCxSqtom5Q5z1JLZh7mPin1dNANcVtQvsxD2KynkDrU8fScnvt9FJsfcyZcBaiQ45APyDy3",
  "key17": "21D5S2Q2GQeewiHPPNC7jeEfbjy5gWKMnLr2jTpmNdwNv2gyah6K6gv4U6k8nW48sXxUYhJFB3VRGEEG58M9j4fu",
  "key18": "2FgYUXhn1keWtDjUomgKLSrEx9Rtp3H4ZhpvfjQCBritVdLMVLzeau1n4xQoaAdxHKfpviQ98VN62oMwUWN11DUB",
  "key19": "iPmz834sidBoujAc16EVvDr81zhg5gCoTNwhF8Npmb2qfrDS8w8cDt4z375Uw9KuEiBYniz19UnH1pMc8MVWEaN",
  "key20": "4z4iZuWXMAanp3w4PH9YUa1ZofEtmwCssFAJxHeuPQNhfXU4r4H9VKkH6isPtyhfoCPW9vNeessa2KovamArgYhg",
  "key21": "od9Ns4pYJyoU8zaFw39A2ERPaefHCXkvkkauaafBwUNhE4RSa2eNm9PmutBdd8XXnkDoYyzb1RVSPYF8byXorzq",
  "key22": "5LKKxScdWLWh9JdVuQsaRrePEFwVRDUwD44LTasfvCeBMNyp7avoVstHuW3avwfqeCjFoq9Bm6YFzC5LERdbb9dy",
  "key23": "4mxeHxXzZJRnSTiEevJW8TMitj1XAR97LCmS6MWrcN4vqzrFnMB18g45N9CXcv3GsjiGhBLMK2ky3f4C1nmaGzqY",
  "key24": "2Cz4vF4bqkiAedGHmghc147KrPzcNojVzQJA4jdYFgKCENn87DWEpda2o5xJAyUNZDGRhWnuVb4RoAtqpCd2RZaj",
  "key25": "2muQMQfF5MdzT9xcoE1YhuSjRVUtGSFvNVA2abEvhDX86vPM24mMepu1aZ394hd9A1usPBQ3FqwG1cpHQwMpCNqF"
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
