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
    "4L2jU7LfVGXqfbXBJU3mVhbAEqpyh2agsym4fx7Gc1P2pjDTTAyvkTdy73qMESDcZxkYvRWgkF2czqSM24qfVgnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPDmYvyrbKX1kKAQCUbyLNGQksMiw7U8c8hD9i9gDGnnYNn48k7j2EMvusQLk2j3csEipkcqTiKWJKuX7UA12f6",
  "key1": "2bKe4KmUTqvcWfQ9XbnRrDuFu7i6T8G1M5CVtpP1pMoMbsT8Zx3TgnRscyhDQJBuE4UfKsFLR4AmkYQMb3r5pxV2",
  "key2": "4KwZ5asxCgZfUDNGTQN6Lwzyps4ZTkDcStNQZLgX8p5uwAKba5b1HSbG69WoQrCGrsFVHGzKiZEAfNELg3zcEWWE",
  "key3": "268Ug9vLLAu1dwYf6ydUEQS62B29rUdK31TFQSWdjxWFJ1aJ61ws4iiMu7oHN5h4W4FGEpPR4TQ6Dt2MuiYQ3nVN",
  "key4": "2Xbu5HHMjLEXW4PRPhbzKjvJDfcGToDxzvg27XSJi3Z5kHJv5HWafMi53EcuFBcUjRARvSEm1HCh79DA7mVSM3wp",
  "key5": "3jnmYgDv4gJAVwTTeN8nSrG8RHoP9h2mjaTUqwwtGV36JJctJzFaLP4yrptvNrxBrPhndg12dbKAu4NAtoBMF9JM",
  "key6": "aTwzSABYLP3j4RX4gJ439qmnJatsG2uBL35Ndoq85EDg9Zu3c4aJRWuQPuey9J3mTEm5DZfbRpL2jxnuieC89p1",
  "key7": "3BvLAxqsXYoWXmr8Fvbs9ZUa6wZH3hjuWznqR11pNNv1xnFWT5pkfCe9RfQx1HbG3hm1DHHQjnwnYB7RTrQfd9VW",
  "key8": "2AR6Wmapyj6hyLgqQURTtKqDeoibgUApAnRw6zZCQaxsRXVH5NXJz5oYXmKPjHHpA2Tsm3yfWjp8BnPKT9bcExoQ",
  "key9": "5f68W74FGUgEKdiF82focADaTFZEucJxd3q36n79ZZYGMZbvJjN8fkdLFT3tG4j8ReK6zGaisjGMqzUuhD1XS2kS",
  "key10": "2HtSMK65z5c55YY3rQc5etf6zBPhWSBEHxmWUydijZPXf8qLprbA2AmPhERynShfu8s1b1UVtPmqfL3uXHnoF1AJ",
  "key11": "5LhUf58NqdGp2MopHKnTbt1cUZYRLTrnH6LEwQGSeUFaKpm6DH4MG6SzrcozhBpGsDkbh1JZK7ukbapQE3WLTQzf",
  "key12": "5qyRhaPvVzNrd3JZKw1oPqHkCvjiwXDNfGpEpSqnQ8vgzgpKdNW14MdBvVhmAsMYKwjh3UUf18TxfC7y2N3VGM8X",
  "key13": "5zbZdJyYGaNAJtBJhNRZdnWvKaMtSe2eePTBsr94j5Ph8VQyWxYNA3gmUaDaaDGyUt4v913pdveGhRouVZn3KXRC",
  "key14": "382c41LRYKSh7hjHxiza2QSxXMQB4pspgRxQmoPZfpt8oBBBACxsDyzi6FRYp3v4TCgFSU4c2js74AZPhpjoNsUe",
  "key15": "5nKrxZoPiKEoYtPo81pj9eTAuJTTVKL1HEBb2NyZQsx8akk4N3vqSdpAV2Zjc9DEoUgK5BZ29MtCewNaA6odSsjx",
  "key16": "61Ze74kKBSKkxV6xmRdX7sJy15P1KsypZUBfc12mtLEqpLegh4x2zw3AMX8zbmJwT4JJCr8tFcJJK3Fhn4Rv4azB",
  "key17": "38qgpBKhnvvfuDBnLvVJnNJf5e1KwArVpvcBfU3yM6TRHYYoyB1Ck6JtXa6kzsgQktXzf6Kwrsw3AsKpnJAQJroV",
  "key18": "2JzSyY3HSwFWnoEA9yzkmGVa1VKxQThnyuy9ZLsg2s1G9oLp1K2wMNFCwPtjAhdpWjXdxCCv7UbVk2HekMyPp3Sb",
  "key19": "5U4peBpa36bPhsmLrvAuctCHesAmriTSPaCxtrftuag4wKjMvxD6xcX6NnGx77Hr8Kh4tPbCs4E5LpDEtQ2ehFmR",
  "key20": "4MzPSGq1udrPXpn1TJXM6U7NjXDERWTyHx5E67UuPXYVkEPeR8HiTBxWjnQg1fuUVrWF6EMnr2VuDbkNgFMnXVCj",
  "key21": "yDXr5nX42EvsvM9ZaPqtAaniiBq1HeRffEdqcNZbMGGnNFgEkrt5tUmttczfyZPFTj9HWi1NWV7AMJAroMmZQHm",
  "key22": "CPwjns1V5kuQAxigUW2MZCDsgKbGnjjvHW6E45GvPHfamYuhS6CxpX2w3MfjHYWjK7k6WxxW1h4bYbsoF2ZKXDW",
  "key23": "2J652C2JuBtTNfjX3SfGotA1j9XoBhXXYDuFGr7u8kpTKLM5FUiZUPK1RyEzPbMq12SWr5Hh5EGAcFWXoRZJBT7x",
  "key24": "EFftkJP1cAwR75fegAbu8nZ1VUzaAgF167qQjoh7XkeftkwrYNYM4MKG4GD4uKwkq1RZnPptuBcY8fwAE9nigbq",
  "key25": "29fJ8yDDPaocybvbVBqimpvHJ6vNW9TYPwVejq5gWmTxFnxvm6cVWCrs39WaL353azAqPCrf1245pdsndkDJtATv",
  "key26": "223mr5Y8AdK7S7vGrN32uAHqpjt36Tx37FECZ91bX6uXeEuS2Q7JepsmXqwTgtxNSEaELx5azM4sP6dRaaCNNSdv",
  "key27": "41NNrzrSkscQVhSeHXBc8aENeFLWL91ha6o3RXqbijugUa7SyJGKBp2TJiiC8JeH1fJH5XfWEPXVsH6vhmFP94wj",
  "key28": "4oP76eVgHeAuGmn7YQwvVXB7Gj4hEPKosKubxdikib7C6uAC8tMfUWf9Q8N8TTExHeVTYYrpWtWu4CrsCiLfd634"
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
