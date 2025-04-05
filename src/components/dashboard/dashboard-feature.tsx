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
    "23Top22EVd41dt1mnT9hFVCX5dUse53hFR2Vx89fA4RoTq4uDTmgxhZyQUndcKDbUB56wjaxnYMTeiucQkQPTvo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264vadEMMU5fRosY8h2dptnxUNCQLm8ehdkh6fMCbd1iUACScJi6HmBTfYhpiv7dZ1D2eNym7rck19gs7ghuZZBV",
  "key1": "5SofRLBrafeVh7Xa5PcDSVKtYRqLfYEffixjDvf9PDDtN5RvAn8vKzELPaxGXYnDD4KkJWrNFPaiQLK4yb1nKDik",
  "key2": "3xyJuRt93Zvx9hmSLt5fcDnpFcJrqhToheSMzM57898Xw3BndbeBbnWVDWirCc4ALMWT32EdR71bVChHziudYDuK",
  "key3": "47D3qvaZcrRjoPaqu13NU9Jp1HMvSpwfWxFgapUrpk8gPBtfhaJcZNE74CbE4YXsZg662VNgW2kEdmie72iVzVC6",
  "key4": "3JSoa5VWoQ98FVkddHjF7wy7B5Vjpztq7YtfJUhTupr3LsBTvSkAXahfWE9epceewrRW8yNhexGgWx9L5hitzZ9b",
  "key5": "Vas5YgdSgSZVJzvriWHjuHQWLVdZsA9Fr2Pfd3PEF4Fp2R7GhwTc6Ts89LYdPdSpUS2VDFJaSsetvQFqskEffrV",
  "key6": "QjFUDX1Zf3iHHqBgUKzvjczBjXTvdjz52Dp1WXZCv2vJfYqmaQxMduW1YRaeWuHUsEC6uFDZWGtFLnLkownWLhR",
  "key7": "4NAUj3KCsEQRtTbXpE2G1eCJ5umn2AH6nnWWDxNhKAoKLqcPYUNCnBhJ2mYTM4sPVmnBWcP5EwPVLcBiRgcxCEp9",
  "key8": "4ZRJC7CuaUKvVUGFZs6TtZxNqRQzsCwghY6GTaCtrw3YwbE6UNzMLqokwkVr5EFk2cTcrescvqo7XB8fwPtfgo24",
  "key9": "ja8bysHzDvn2mNBQjWJDuSN972VpdhRfEEGGQCU7fqNC9sguXcasWSkQRirEXMjmH3uQsTSgYoJgCoN9xtg4hdE",
  "key10": "41nfXMHMMvNdPhnRbs4NPgfmCjNynWf45x2fqa4cCSAvZEP9VVwyAfXBXqBjBZ9ewZPFiVpGyoFJeB82m9Xagb9B",
  "key11": "4VL9tQpy1UZBP5U9qYq7WPH9VTQH83TCkP99KoBr82CCBMRPu54KWZJgo3n7cWANkd893tPBoCTtC36uS7CEXp9Z",
  "key12": "4M77J4DP1vwD87ymBwtczShr492PD5TXgmZZUtK2ACUBxxTScJv6R5nRuJxFKwmEBERELaC3FEGvgdEJjUoibBJn",
  "key13": "5hJqDLkNyx33vvty6hibbxusmmmFHy4UDuTLdECaFqEKuqreKXP4MbpDy6ofGfABmZJwy8XGUAJK2Xfjxv9xXqSZ",
  "key14": "49PEcFAzAs8EdgMPeX31z2Q5fxUr9reptpNvUtY9HuNn4zWnAgLz9tCbJ1tMDWggYbuGAQkMZdMfEGwF8ejfBsL2",
  "key15": "24iSTXxuZ9mtoULsUcT86BGBs3ijn4Q5Gqq3DhA6VwPJBQMFcgy9ueF2DjSL524gFzkSqzRzK7JjS2ecG523hgBU",
  "key16": "5bXHr2yyXG9Pdq22yodMtymPwkAp334zGSUXAELCpVoyXQ7Hy7C5V7srpzYjE5pppU8vZTFdDUqHBRVc9j8gLQyy",
  "key17": "5RcDnfLkYLDWEpLkE2KfNYyMypDxdxwMuoHaVCN2yRyCE9EQPfouPQvceowCUi9zxbtg5VU7g9mUkxfZ1DgfARAH",
  "key18": "4nBfppSmcR4agbkVHni1MaJ2wfuyNMj97nVK2bq9vx4cBRAbbhH7UmECyYrSJ6VB2zpkaWA5M4wusSAdRqfmuZ1E",
  "key19": "3LsqtkirLLFQmuLBbXd2j8R1bna8Fi9hCXDyymgWEvjDfc4gscAnvSvKF8fTz5cpDUcjSefmqDHyxRTNev7vbVYD",
  "key20": "46NiRGBWqqfEwYRuoHQzL815m7XbkxnLpb1L5htwBVHrHqoGLJg1eza91EnGD9EyggTWSoE3dxM6Gv8q1pjbzUKE",
  "key21": "2H9b8cCScVhvEFErDPhnp4YufEFudSYpkWycsDy6qewxMXN23wEDZt1uiXhs7Mz4ihcGYVSnYPnrmdTRoWNmvfo8",
  "key22": "5uTgU7pgTHyiAneXnaotAnAsc3PPo4Mt655spXCnoSrAFm4pBzk1Ws4zNrHD1kLqkCXC6VoGyxDMeNXY1k3RiVH7",
  "key23": "2K33eaXXj7PiJ61NCN7JSTzZD4n8VjKwZK72SRqRJUrQ1AYFJ1GdRDGmcRHGc4KUrzPsAu8HPHewTQkYvkaR5d4G",
  "key24": "5hLaPjwiV2iFwT8zhTkN4QJwBoYAeJTQh33Y98JH4E6QRHPRLCkceWWn9EozfUZQ6QWTU2SsNE1nsRLnVjTJobgT",
  "key25": "2vVV15BocVjt6ThZeBC91WzrRNJwSXXxrWDWYaV3vJCpyQzBr1zGMPnFWZG5mQwLGuyWM7vnVFU4V5HnZPqYVmVG",
  "key26": "3hMiSN52KNKrutzHsVtrDkWnpjSaohGGcqrknCXM7Fn5NgsLJ8xgqQyczQpy9FqJif1iAbkmeLYwfZ4LSNrVWJ7d",
  "key27": "Ssryhp8vhpRsNuRN9NTG9C5q7ywqqMu1HNZi8q4fA2WUyZ5tvDnXX4NDjxGW5ZtungsCV145scfAwFWN5vDpq1i",
  "key28": "3LXva5mhe32ZPxVSq58eg4HZ55TTdyujd8sR5Td1QouL629KsVnFDqSo2xRiYoa5uZiV3H4rQSTJbhagvE7TWXua",
  "key29": "4nPumdf2PS6Vtn1u6yWYCCGLH1asCjBGxf6gqw7W7n1S7oCBHhqbWsfCVhun3ovVo8AtbXw1cQNJKvTiB57TiDnc",
  "key30": "4YJWRuS9RQziUEa71g7p3gXNfMMp2GNVaaoA1tNWkhjzKMhaLoffJRHkSKVDsWMdFwU7EWnKEnZKRENZyEJDzHGz",
  "key31": "3uFLuESp7wi6Ju5Ew4JFwGzh26Zr4RPySwyra9vCr5n3jb3ve6HNuzJm9NLhRw4wFvWroY2DQfMJbrfK2mXrqnWu",
  "key32": "481ciybesJTUx5zzLePgz7mHn5jqvqy3G6cuCoK2DMzBcJnLTDadBFTg8eyAHarSJFaZCvjkUtXqejrBRfczaEfw",
  "key33": "4dsbF9FYRxeSDSLayX2Ccg55qoA7JJZVjcQDZekjcLaGEutihCJTGzQtMqnhPAhLLNKWQuPELuw78Xnf6Ta6cMgJ",
  "key34": "221ioUVz2S7ZuRH9qEXp4rhVLZ5rGMCzM4HsceTCBFZm42UeUkP5rutVwTRJvhUUSMVJnu6Hp4DtCqFMKY8NRYyu",
  "key35": "2y282bTqZsmfRsBPZ8iQ4peDibJg3SoXZpHC3Hda8kdcDv9GLNYjsdeQyjgUS75eZ7oWxDQQBvFr3J5DWJ6M8dfN",
  "key36": "2Qy2viDNcxbb4vKAUUojJn18xBkunnNZX6s7cNvV1cRTqeA4zqfmffGrnxtQYH2LN3FBUPZBiZZbomX3x3o6jat8",
  "key37": "4E5mCHYKW2ov5NGPb2tVKYf47CENMBGugMUMbMg93cAyhBbFA84jF5UxgceP6tyAYrbDWvpVvC2WtYXLyWrsxvDf",
  "key38": "2FS58yQD5dwXo81ccveJpMUTxcMxR1k7jXrbxW8xu1F4PSycVPPBVWiMnwMAJrQeieammFXBPusL3gABB1fNeWkW",
  "key39": "YqZcvbxgTvJifHGGvzvascF2m3gqRFYGxuEDgZqTaaRpYyXpJoMw1b9JUZWBHRANAN953exD1nYG4MxMBwwp445",
  "key40": "4kPbDT2WuXP2ZXxgBQHeH1tnuXWXHiyHj9Y5qB9nBQfNneTH2PnwqtX7yq9TvDTTD6RBmNUGq6CNbqhQyqMYMSj",
  "key41": "3Av3vFekek1mWbR8LEsz6q3KG6tToKynHNt9CoEswjQvVaRUKcHC1noJ6Cm6s8BPbtnUe2V5S3Y7592wyKnKw2yc",
  "key42": "3NxngzmecGAeFDg81v3wgPP4evaWkx8k92RBSS1w9Fe1MBS3yxfJNfkZyBDLyYzrH1bM3a9mmDWriT7r9W9XNEJY",
  "key43": "hY8ZvK4VcixUheMt2yJpJmWcTnUUN4LT6yPi8iwXyZi5NTjC8M9qyut8sAUnMfMdHynRTtLZTWGLqZQw3nU4wat",
  "key44": "2RowDjtauKo1W75rdFhNGeQxuBJXWGgCmswa5Etem7b9FfNYKR6uY6ShvikZQhGQz4nFKR7wn6ijuxueL2CCo6Ni"
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
