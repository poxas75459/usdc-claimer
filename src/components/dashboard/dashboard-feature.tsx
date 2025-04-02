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
    "5qTd4BKsDVp5tAhGShT9DzUJbXkwPq1zeNzF76fN7rmNMhTP7cSqXAscHCSBFonQzauLgkJSJLFGE1G32EQZrx99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43J3oVRWFpKQ9B61kRnLUtmfV7iT2JthQhkpW74SH93oBePuK4V7dTMqViMbQeddT6UCraKQySsyM4mzd93J4h37",
  "key1": "3itCUtUQozePeaJ6YYS3w3qX3xMC3RwggK3eTaXZ1AJmFjS5xAWe6SsUaJfN9bt6unTCHFxhNMLwhzszquPZnHhz",
  "key2": "4MLq19gu8UrLHU4nRu3m9ughn7KThVsCoeT8rRnbGmz8P6xEa7DmXzLA24aFWo2pVogKmQns5Gq51tUwoV6RJMDA",
  "key3": "28jRb8aRHLymeKf9oVkTAsEHbrbRK9PCfaZqVCjXPJRwKTRWyXYeitcbYhaQPNkZqoH2Ph6SykEhFLjTFvbBhFNN",
  "key4": "5BvnM6GG6D2KanXufo4JFjPMoFZU3az1a9UAwXWwM2wjqf1Qsy3bhKYA15UTXbWyJmqCjCWe3MCDtxiAziSndU5L",
  "key5": "5e4HPuLWStiohNK6HSKyYmRruqpE9XXE64dvnFVEhaADaqMQJ4jXLkiufUzfnm1u4Qx1oquk9PDWWt5A3jWrdfRK",
  "key6": "BBdRzuvphWwXY3PENnxRJJaRQzzzqemuKqgqsgWVQuJG5yhDAYKU93h7rTkasMKVDvKRvCeHeR6v1iqm1vcyX55",
  "key7": "4xASRD2ejAGqvQ4EDsc1Xz97HfjqUUH9wqkdDGeWgraK86fdK4inT7CgTc4mpL6wXWiMktCQ88TJcsZZDL2pMGC8",
  "key8": "iQ56t4NGjNyPTwWsvqpgcLVDVGUAUc4V7f4BLQJwDanNoCQPZMRDQ6T8jSFRk8JZcHzpUuaA85A82M5K1oWDLP9",
  "key9": "zoBjmqDfChFuM2p16558qXmgzx74NhFD5eD6daxJanfx4271DMqYpyp3TYvnPy8ZCXDhW6t2vcvzayQPhJ9iNm8",
  "key10": "2w1J9fwKRH81bW1BTLzRijYujdZ8rZ17FGaBkyY1h4cGJbJ9omAqRKkyuEfnD91gAYGs538DoGUm6tEEsr2JXaXU",
  "key11": "3u1a6zpEsrHW9yKmni6zHGepPPgjRuSDoZzUKHEjBYx8AGK9bkTLoR3ttoXQtxVjtvbHasopf5dW7ZhFJ17pwtii",
  "key12": "5cMH7G4FKmGGHCE4bLxL5MtJV9qxZeJhQFKk31tNnpser8ham553fe8qHgHuByCRqyokXzNStqcuLRDD6CjJy55X",
  "key13": "mkXcLwVPYa3oSduRyrM9yc9ZH22KYuSqkrfuCnuoTVvjvxFXobNtUia7YY5VwibepYMznWs9hhTCxBvXWxwhgJm",
  "key14": "XJJcnagTrRthh1ohcAeorMe4aC3gTWcsGjqWMUoFnnWjABMnJnvvajjBv9NtjjhceCWegWNFBoVCYKhyE6VJ1My",
  "key15": "34E2tTF9ji8PZqpg463FsroExxo2H2hJ45L2GVSHdVJLEcY2rqo5ZJAW5hEobq6StZzGEhM5vZdGZP3NZAQ58rnY",
  "key16": "4UWHZYTRMsAvAuAcBZW1dZC64bkzT3MhSgtVPpFsn4AWqQEvihRrxsLsYQnWWHp3RLfhVcr3FaKUNdTAEu4soPDd",
  "key17": "uVCSZuHV1WezW5uMGqdVHXFMVpTVs6Jfkn92UtvCMn5bvGPCmrf55NDy6sBnXYfoJrrpD6EA2buAKZf88GxWdQm",
  "key18": "4xLhQK2zogm9ToCLy7txzj54j4yYzKNkPLyqx3UDpetPBsHTXJBYoQc58mHVB6BRyRbYB82b87iBfy4cFAUDs9ho",
  "key19": "5ka2Z2gMVWoNWqsdjF5oZAhrYTNf4suvsdjrJ4AA2S6xPy1yiQ1Fu8bB68CkijtMbW7nYZxr631jjCPULKKQ8Jqh",
  "key20": "ALY6Y3escK2zE7Beo1ohUeFe72HKA5CSPQBSfjsXJghggyWG8nYTpxSBSa8ifn52SyiJhkXt6s4jRHYFgax7xjk",
  "key21": "59WTSqT9wn6joiJFuedWZsEtchoHUqLw8Qaa2qDbdEDFXopyQyGXFjiVBHrDyPHsxikq4X2UzSvL7KLFgpxrhAeF",
  "key22": "2FB2cGHhyL8FPNT1tdMFsL6xGpWi1jaaDDVaiuNtj7Xc7QVPEpUf7Jm4ZyGHvFrNXffmhe1AcJJhgrJm3wXmH7pT",
  "key23": "3sYPsxFvCpxz8AVL21veNX6Lj4yCkFpgnoXPcLxGTsxLQCc6g1W2mSj68N6zvTPNaDBqpnymesy6Wje2Givp3Ccs",
  "key24": "66SAZf1JcHWhJwk7YwGfeAsDVM6TadLXzr1X2dkvopNqLTesbkkvmHVeeTAZDPWj7BKM12DGA92z6mucr6U3hu2X",
  "key25": "58oGG9ARazUExQYzdkxX6SuuF77BQd8ct3ZFgdNz3KE6FwXKh7ZyPeaMv5p6sk5YTaqcfQpyziRm4JxkQjU9Kr5B",
  "key26": "FXjeWKgciSabLFSnHqebDjHFueEH8zUhtpBo4Xb6yZg9CC7Qpxud7WBvX5hVS5t4dRi3xh3zNodSnLBczX8Gh8q",
  "key27": "d33cGxGWYXSj5nPnnNH2gL2TaLvp8BUWzakfBViCNZC44BUeZyDZVGMsh6nEWAcUJZC24LPK8zNCV2zGaa2y9gG",
  "key28": "3WiZxpW45eP3pMRFXYfk2tAbjDvoZpQhaH8jqbs4mAv498qNFNcq2PExWCjbNBBXzgDCZaYfvLZ1Pkjah8PCPxrd",
  "key29": "5QQCKYC21v2HzWLsA8adMUiHLZo24qqvx6q8brvHzFpfPqBUJ25X5ptdzrwY5UfckDGGsMbHkbypp8Wbxz41vSmD",
  "key30": "3UuVPer7HZdQBuiX2G6rqs6gDe29a6o2U5LhCL71Z7PEnkhFWippDGf5WMCACS5uLzppS2jATQT1pvYDbWsavLjw",
  "key31": "2oNLiEdYd4yCJgHHQr29sgB6iU7cmSYTkKxyUqJMwvrzma9MyiHLqEgfGUrThFFM7xpJWkxAv3az5Pyk587UDGMP",
  "key32": "4YB5X3gUkqQaEm5JoMzzTycUEsNUMxG133WQemte735wqSgZFiPJRS1kwKAL33nrdffABAAZQLASNhD61tvoa5B6",
  "key33": "BNoPAevu6Zf27K9AyeCoXD4eiCF8yVXui9JgJ2metqPmVBdkFBTD69qjhFgybkrC2TUmijFsejzULc1A1NVcBxq"
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
