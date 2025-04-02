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
    "5DAmjLfcvU6AyMqntXmcUMp1mpYbFtyZuRjTxY9QProFLMiqsDU2ugVqLk3JfvPJpg6Pn9xn8JsS2KXmwNnddAqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9WbNsfYwo4vDwkX7gdmEPujgwPPytM4Gpxs2G8vuErZwXrqNmX5ntHKfqrBcyAX9q9ZbeMt8tes8DyCjL4D42W",
  "key1": "7o2eNpji3SJXCnaGTe7uzGkebYxkVWy2ybT1Kj4HzPGEcwxh45ewKuv4x9A27RY5ScRWgErzR9Xx9oRpCXe273Z",
  "key2": "2968DVyCerPoUadzuw5NM6nazQae4zEEE3utZrFczEzthNe1sjR483Lnj6dzfhFxjEj57MBJcBUUk9Phq2C4Qqdv",
  "key3": "3H1gzKBw5sEgArA4fspxEU1vw2GDnNYWvR4sf6kpTwAuYrEwiNeXHWfG7BawFggyHDy5gRzYgG5H4dj8SUP6wRzT",
  "key4": "5reDjFeFdSHdSqvprVyUiVwwmh598Gvx5Z48LktcgVApAeN9kCpAg6fqDFbJ47AsjnxtKjg7kbeoRoJrN2eqScgr",
  "key5": "2pQLy9BfqSiwE35Fgdpgwap9M2RJwisj24K6ioogghfFsXU8HtHts3aGcTrLHJ69yXXQkJ8dD2cyRt981oqfBnkJ",
  "key6": "66HChGqTB3ybb1yXG2dhE6hdKNZx1TuPQ8fAS6xHryHGcQ8nu1CHEfBLuu22YdqZoKfQfBxtE1EzdinwdiYyAZqC",
  "key7": "6UiHCTH31SCGhWYHPKVH5Qxmuzq3h9k9kiHVgY3NM4q1gV2NVGiWq4sxXitBRH4hZeMxsMKbn58RAbu2ZG8SWbR",
  "key8": "5HbxdLg8zrBNPfYiy9WYj4r2QTprSXj5DmyU6CgopvHt9iZpYBy4P5DhPi5W3rqd6UgV4qiMUgjzZb6xCpjXAhWs",
  "key9": "3gHic7BSE4UrPCcefSCPN1vqZZPi7np9PELtdKTJE35kZTC3PpsdT6LHDTMJykt6eeVHpXM98PkzSQpoRJqQswLc",
  "key10": "9cza8J1La9rnHve1RmJ4Dzj144WtCL6QAi5uALgPNdTYTchDB8sqpajTTNk6DuH3AGVH6K15MTHofA9o6tDQAZC",
  "key11": "4c2ppgFdwBCNGF8KY3rQ6D6ZyCtJcTe8jt5XaQqWKEJpGjuzqEQo4CtTG3L6eSdNzzBoujHeShziHy9VD248UADA",
  "key12": "EydrLgGeeuHxof1oV3sGLgfrBKpMQQEknRLuVhU5NjQLYtBCitai5BXgowH3P3w6ZUGuuzNdSNkJZzDhU96cF5U",
  "key13": "H3TfbCs82JN4RcKwYK8Ab55s5L3xab1e6aawq64znvoaDz3PaqH6jFpu1wTpN41dQFYP7XF5qJy1DAZchePSsJk",
  "key14": "3Eu56HxtKSUGAKqfc1QRvq4ohirzVuG5ZvgnAiWWXxsNH77BjDZG7NNTW4MYDX1BqacbT1M2tg9B7XSVT9BWFhwt",
  "key15": "55pVTAhCsUaGXSbNfw9dL56k498QxBDU415iGg7kt76yxEfnpKGU8XSTaLvGe6MFrhPWKXeZLnTj67uXjBLVpmXy",
  "key16": "4AMQ71VV17kUf91fSvLCNzpeMbjfczpJDG3BqXBW78cUiuH1rCicdegLsbYEtCZkK2ArSDtn5T9rS4X24aycBQDh",
  "key17": "4u7NovxeDNhojWVYAS4K9Qnkcno2r9zGzXFq5uHrsGHVL5hbbMoRZ5vn2j1ANU9noRiCwPkfaFxRG1N1FBG3RsBv",
  "key18": "nME18xdh3udnBz5nEPrfjEt9ZgxJ6oNJH4sT934aKUAJVCA1p23nkRZJAVEjmaxHD9TuNFWTqV1DbM6x6RdLfT3",
  "key19": "55HFPc56P5N5yCQqQL3GeETyRFW6FNzwuJmWry7TNSKRwLAfdnjYkYoh2tiamh2rkbyn1fb8vgFPQbUVJriGdFgj",
  "key20": "2z5Tv6FtAXEeZ8bWSePPqVs7zWe9V4UHRSXEzrCT1m8oqaos3axA7Njzjb9UAjnyVCPqNLkSfaNNHkHVnbQVBq3Q",
  "key21": "461VM6bLBuk5h9kPpH8rimd1oySaD21QBXoV7id8cRuJx3smBPhogoN93hjKawRtRgaYoJnKNYxHyLeXwzYJrW4n",
  "key22": "4kWALLmYvsNm2sHJYscHLZTwp1qWdmeL3FUNEZN9oCZqVKEzrx5vaayuzdkixjtEt8Ran2s17Y5xP5USDrtGqU2i",
  "key23": "376p85uDzXa3HzUVHYJhKi3DGNyMjHJTVg4TkvDSDfMMkc2UMm8C9dTvKETXvhLs59DKyCiXq9fbQ8DP4PCNhWHs",
  "key24": "3uJy539vKbXW3seWdCWHuncHT82ZQ1RXgXDo2h4eM8N1BZscTsAyKRrhH8tEzSUyEU7TxunXtGSjXaqPn3pVz2DH",
  "key25": "5RxLsismZT9XZzxfbSMy6VNtycLMdiidJpM73pLZKuHKdArNN2dmgJrKLTGXXW8dir3PKu6PvfU1sHcozaMVyRUN",
  "key26": "5zc3fpqjrgZQWCuUTvDA8ZFTsYLjU4X3ViXDg7xKTav4Tzh5WZQAD5VFHzjQDaGfdfaMQmV4p1xQT2zvK7sPYVot",
  "key27": "3PxkNTkaB12UmfLbjTTN27qJpsUSLvhPTo1WQPLadFZLHm7WKYtSGYawUwjYhPQRQpEfLxwuQ7HBr9omAkBVUp94",
  "key28": "3tihoQa94NvkRZE4aHZiEayNtCWxxsSrn6qrtyPYfPgkHju8sUyLFa2UccPAaJg67cd1ot3pNyj9WgmBcn1sS25H",
  "key29": "63LT5La3dTbksg8kde7ZQHmGNyo5PcphEFVH2jYQDtSYGsFPYsXuqacAAJgcYxsBgKwq7SW7C99VA5A6nCEAh1De",
  "key30": "4VHDbHTFyY4JRCGeVwiLVwdZxKcPHh46oSGfgws5Y92qAsp8PSxDse8fLA4qhyUhajtak2cu7Nkp9tYYQj6ctaJN",
  "key31": "2vieKYqtKfBGQPcNQj7gKN4QPegEBHyUsJGGczL4nW66aUMk3v2ACsUfBNxSHobodW7cJJRN9F6SfLPZRahTBSw8",
  "key32": "3KDPUckp2gwrw6PA3R7kC5T7ovroo9QpeBkFLdzWQfA9bM3JTRCuJEBueicW1DVzM4MZ97NVwvEWQ5fu5sbZkwSK",
  "key33": "5RjfxcbkaaqoU6PhCVouxmHVD4CcUPnbbUHD4pYvwxSaU67KopLnbRvTh4B7Q5j4JPzDAMERjx3DxUqUaRUxCCUx",
  "key34": "5afuSZHvZ56XJYsgGhbyeV7sDdeESQbynQFSYVgwtUNyhuJNwWmtFT6AyxCTT2sKawzQWm9yw6jJeAi2MbwdXc2H"
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
