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
    "5UFKuEHMsRPdjgxJyzYYU13Zq4UtiWgsc6sXoHs8amzsgsnWMW5oSYzWEmuwB2jRCWkN2BR1Qa9Kx6TThmYELMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvtMKLJ9Gy8xuKwzDXG2PMHSYuAkFPbHTo2NVa3ZeEQv49gM1yYjYLAfQGZDFc3N9kXq1heMmaXMZKcrmV5VxdL",
  "key1": "2jM31MkVYNghwQyYLaZ1dq2qvBekYBagYpDM83EeBYxAN62S3Vb6RQqpKpAXLtkQRwSSqKtxHdnWYGf4w2Gt3Nxs",
  "key2": "2kD2d9QXR99mNcV2pFGPgwZsuMFYdvFnazN1JBDYCfwAbtTFfECyGZRtMKbgXHajudrEweatqNfR7XHEhHyqbWXq",
  "key3": "3yA8Wz1aFygjZmqhSP3kUEcn4tyyisKsWsdDRn98QsmQMyubATjbVPmuxaTsBJRxgEsrCvP9tZnHfHZpTPf9J3EQ",
  "key4": "4NbUwj34m8YTrEGNS98Z8pcz6VtQE5fnL8RvYgGEu7ARrvmFq1ZtV59WMb3MKgEZc2tu3AUamNmfS2qef1x6bwWJ",
  "key5": "f6mRTuzo6k24uBD8Myz1vHg6itH76RRSMubUpjfVBavqannPYhcAADjMZgyNoLp32VEeeey33pWaD6V4LtP32au",
  "key6": "eiAFZfBUTJ21YWHNx5WpKDAXep7Qi3cyDTNw2CDFNcbvufghvVLuM6exSQ72vUZD11thsmGRPZf2FQDZAvu6bWh",
  "key7": "uLMpKjs7LbVvLfEtVi32ziANwS6yGoDBTYpNrFmsoJy3oWpUJBWZDMc88ocNHjvEVqFBZFxSPXPTDDxqA1UGMMr",
  "key8": "5c8WFcuvvNsHyDYdGBkhqd2gf4GKasC3UdGEWQHsmK9BS6xnFUH3sxDf7nV2Rz1zqhQHPZG6Wba3j5FXybS1VM7L",
  "key9": "4PuAZMdZp4VZHXh4qZivkxsnR6srSybUx2z4Yn3NriKk2vmFgPh5sP8p8BLXg43qs8Mw1aF7V6xhJkyZbBHAtTeT",
  "key10": "4LZBLXXEf1BB2V23F5w1ycDsjUmWSEh1MxpbKGAk7SjHvHGGEhRjFDkYgPd9HQdtAnkJZumSyn5Ki6gfkGrtYSju",
  "key11": "PnoiqgoVr5EtTq1B4DZYJrphTE2RJ46RdJiST95bGUKisePrNYQ7NAk84NMxTmHFoXkK4rL8SrGe4ujAKRzBEHC",
  "key12": "4YXWQMuX3JpDcPY1bHx2DFzzeckB6Z38g7R6tQQM3ZZAGom33QpDusfytiRRxYcrMorKZjAmhjVe3foDkfmf7vhH",
  "key13": "2eNdPRhq7sKubCxKu7Y4KSuhafiZY63jSd8suUupkQ4ynxw6yUKPftZEZZKeyiMh8PwzHpALzUZp6BJnA6y3uvUa",
  "key14": "4RkaFPshfVAq7G3ZCYNQcHsWUNNFbaieHUsE2mxAM212GWBCQBMmSPrqKbpcwRFa3GFifSg9MNDcMBAsxC4s1Vpa",
  "key15": "3My5BiB4SfzbPbow2jFqMeHLWyvTH7NU5HiF5Edp1rRnH3VruxAVBxoJHT2gkXNh5tFGve5d9ym3Bwpdt9AWvyo3",
  "key16": "5hnvfQa3LvkTQ7scjww8K9aGhjeNJMzo8UqWkHyZRdCEqAsyTU41V5PJSY8bqtvuJQ4jaxe2kpDLfNFaSnjMgV6E",
  "key17": "46DPUnL1ZJjUEZrA4ZNGsHqQ1QSg4pEgyTGjwmdkTyBZMhVv6hBzxYH7sWcWxCEMDB8nGRuJf1RXrGeXtYNoGmgV",
  "key18": "9jrx3nDGrrSsZEvsSiESKmvKXPPm84tZccS3UStX5WLmUqJo5vArnsfKXXXUbMz48nmEKLZ9SBadmM8dP19DxmE",
  "key19": "HsHM75bUQbiECbkSgnjw9SbpipQWHWk1EHFRGc8xzSbG51pBqLBbDZEUxERRtFNZVkTugp3unPT8UtWgWdkpKvG",
  "key20": "3GuYQCmn2DtPYcaHEtcTXVbLQ6FxSW7zN7T66LHiuuaD6rDeLqG9fCrFjZryS4xVi1BFxzaqkzhLzGgE17kUtxZV",
  "key21": "43qjmegTAPYJ9MvMetKn35r4kEQNFrbpJp5YpazFjBoqjXTgfpc7VipVsMdYojASu12xNxiWxy1MT3TG8ACtZx5s",
  "key22": "2BrPpRNsbJnffuCyjEyZzkwJBvxfzBDZMmLxipgGKGYqwc5uJiVt1WMHb8y52awu1PHac3QAyufkNiZFR9GnLRBH",
  "key23": "qtN9NDq5cFxM9xFrcjAqhyALvVNupGKY9Ef7JjafEiw7BK2jKcdHs9j4xzW8nXP6Jsrqy9ZK76LvdHp7z6SvC4j",
  "key24": "2NQ7T5xm87xjEpWymNFqxNPpg1haf5NjE9zZJNXRzovJaEAjQHBBbTXkASutvKXzre5jdr7jAt5VftBArZac8D5Z",
  "key25": "2cTPwRJNwEVD9nYKz3H2116ADPpNVB3pvgrfyJNeCrYcMZwXd6YaZJWJYZfhGFvxJkCxzLdxHfRvVHr6dxY4hXMF",
  "key26": "5mgZFfQrFTMedDfUwP5tacfX8D6FkXMsgBiRNYFB5jBUq17KT5V4tBwVs5NLn6CgmioYKmm3L2EK7t8K8g4UdgK4",
  "key27": "2866hUnhtqqLmC71ZinGX7HHpUojQ8kQfjpFhhzmBPrDZKiVUiauNgW2AieH7Zjgu8rHe8AmVaQEftaHHFq3t5Gn",
  "key28": "5uzpLrziuDz2Fu7reqgXC53Vd6aAjUUkTnHhtjVJwvDxftPfSRRnDtD5pUP1CsMgqDDfKKL71sP7vCTpQ11gUaw4",
  "key29": "3ZAFdcLiEPV3AcCcHaa4wsFPMwybYX5mFrfnZyRTs92Tmzk97h4SMVioJ7VEnmLxa8YC51KvC6DqVGKU958cL1C7"
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
