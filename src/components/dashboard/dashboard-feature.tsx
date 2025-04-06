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
    "CdmqC1XT2ZEE7JGmWiXQ9P4XLPBG6p2FW3WmK3jN71h8frg3Bm1aao1eVqcgX3GG1ETpWgXVJJxUEhx7BjpoHf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vki3e3fCbREqzdSiKEQqd2qFPjSLmMq53gnJyyvB1sbbwh98aW9gfSf6UoBxgBag8j4xq25fBi3e1YbVndATF1D",
  "key1": "18yDmGZKC7azRS7ai4mG78mvoD731Wd4AKXYWcRqC4L268hXD3axeLfcitddsYm5npa6ASNB4uCpTNedFq4JMPt",
  "key2": "2PYUFjVn7rgVeJ4xpzy7pbf6vbPUfcJ8QiU2qxAGX7M44cPS1f8aDcTXFqvXVqMjyzeStanjT4AUbj1F8E76zT5i",
  "key3": "XUiCwGVQtMFaLjWRtPLxoQHA4tktHVZMCMX8GgqKPx8SvEtmfANisCLBs16nJwxR9FCRrWnM2Kwb9ieXEUbJ2Qg",
  "key4": "3owHrtHHHFdtwvZrRXqsjBJ27dfjj1pdGAEgUniWy7gxY2yfDQLU8pZ7s2V8DQyMdanyd5TaQ3CunJePVq5uCRTY",
  "key5": "3QXhBXf2RRmbJNjp1NvtPY731VDtGTXUe4GaAdDmViXitLvd9rouHjV8LWzvHTqhAczykTRaH77N2Z5DCTtDpqao",
  "key6": "5wBHutUeFrKtjVwe9kiGppXTSR9Yzf5r8aYjfci7RfwynvYFP4UMx3JG59Too5JnEk178D8Tc9zXfKokgKYGSHex",
  "key7": "66agPVjz4QpN3gz7LqA3gSA4XGv1ZdiYAq3nwR7cApRLK9xmYKjNae62wuT7Cz1HbZY8U1N8z5QMr2mQyZXMHg3h",
  "key8": "3ZwyN9DSQDZDsC6ZeKYdE2vfMXkjsTzRwTTEVbZ9MJN5MCVMGqRY3DUQiQtZ7RVin4TExwM4usVVRaHSp2FPjBJH",
  "key9": "5cESTdygUPnDWLUDHnWonKW7dxnthKoZNTVACeCREBimVkWGVz6aDumdQa3DbJPEZbDM2MK7uLLynANXTpPgb9Wb",
  "key10": "3QAGhPpJJe4FXKicRWk7bKe5uySPysC9hoQQZPUBi4DJuK6GZ6r88ucsYUU8tapuJqW1a38pYC99ZeLFdbP9EmHp",
  "key11": "zrRnteNsWxMZgoWc2Z4N8nKtSVWVznE2VWcjsMV7wewooUYB1x6YthGftGRVNA1FTfAzQPvgKDJdzP2a8481wif",
  "key12": "m4CFQxeRm66JG44ZbKorHpNTD61TmybMdKpx2o6m4GBbTVDzDRoVqYs1Xb88yeqWAnMCxW4dYChVtoMhXk8yEaX",
  "key13": "2kaiShUfMBNiAZsuTnFG9H2W3ThU5g9Z2sZVA18jiUA3z2ZGSpSR9kkk2NQggpQVTwK1ca78Sv9UByPuTd1y2cGH",
  "key14": "4Zf1u1fTHi5crz2pxnq6XPHhpxKh9hq5pZ3NESJPxDoPNL6QpUgZiJMdpLjxv9DPjFwQi3g68t8itYoSAA9h7a7Y",
  "key15": "4qJJq6MZ8wR9zdtAYBDyNgN1yzxwE3BoYKpjWgjMokrGRUxxbgybJgrQg5FvAAGbhYCgXVBQPRzSLV4ht9B6LTw5",
  "key16": "5DyKxDmTvtaFk7UVkyGrFeshJhDK5Jqd9FBBweC1LcTLzps6WRVbkLh33WpBpp1nUA5yLj1375Vbxir6EJWKiJFa",
  "key17": "5ukeBNFktnDf8JwT5FetKT7YX5zCAz5AaA923XXuc2qUEg84e82QppPsrbZrzTq1FMGjySSCUsrPPoEsoJuDhzgu",
  "key18": "2ejwokc8KqfQ6oSo1r4k6hDUVHXN37iQurzKAmSjgAZfe9MWvU4dtYGQaiRGXUpLHvojcNNXNyj3TTgWZddkMJCS",
  "key19": "GY3KPCm3xSLzTKVfhBTmP6dudPuCRRAGSGakAckLvz32cbGTxCSadXxdoMpqTSL16daXhNJeB9MztYsqjsDnVGT",
  "key20": "3JvNNTKiTT3niB9JyhdrcwZVo2y5p4cnoQgPhq9dwpc41pe16inEj12BM8LSQ9TdX22Y9YAtgoSj2AoU5WTeNSHV",
  "key21": "4H2KHu7M339PgvH4wrmixGdfdwsomH4CVoBsqMhAbbJt9xjnvpYYaB7nS77NTkt1RpajZZhYPe3UG1w4jsD3GHhy",
  "key22": "5icVzVJH5qWmZ9r14x78JSE564Dka2LSGTs7CVcJc6sGTeB6ozdC37K354FcvzFcvrgTu7LMEEbCRuF1Zujv9mRT",
  "key23": "2MPtD3y34cbseXzxf5tWZLSD11e1jZEqZy67W6Vg7aj5UtavaN82gvXcYGMBGhhNaufzPG43ZwjAwApJoAmY1fWq",
  "key24": "WpApQ3Y4mYc1wd92eSjD7AfNcRHZyoQ3WiRCq3pNJ4yoEptLLq5HdZsVD1J9ff45Cau3fvbtBqf2Nqasid5vKNN",
  "key25": "4MmVSFu7xvrzLd9qetbcqs9bbUiXXEbzRMpGAhKqWGmndXyxsRCcBRwRMCjk7uJQF3P2SwGYUAaWwHYceCuwVBMG",
  "key26": "2J25UwAxY3qJefciQC64G8BqcnhfUQGSj22D8MsEiDxEViWp6X2pf5U9ZQwDoi7xrWW2wWCdXZxMRHNXJHVqZFPp",
  "key27": "4gDtJCVMbXVRThTeo4zzDGSNBvoQjrWok8Zymr62vbVqK5jQwfRaKrPSJx4Mj6uNufRMKkJB99RUsAgoHxu5Tnq8"
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
