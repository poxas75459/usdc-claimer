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
    "KwTK8HqwjekyGEp1XhWxiJEQcGj3gQrS9xpzZtu94Zoxj6siC7hhbwCVbRrFsoCe9399NHCzvfErkr655ivuFhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S87oJ3dKWaMhf7tLhDM5jcRfgMW64UshBVHa95q1bYWagx3GbZ6L7sXivXGnaESnEHFHY3F1SWPRJASBZz3d7Zb",
  "key1": "2HpF1BiG1Fq99Hx2am2HdeedSxeXaR4TCCLjBMkSwM9HCqfR5sZiJaLtxhmdgFUCbrLMz2hx2rgCh8mDR7x84tZJ",
  "key2": "5C8m6eK2NWoUCErmRhwEkFw4vJfWfhSSL4nME6ASn3hGYNSbwcjMnvcR4MKRPnYLWbmeHQH7jQg9ZdPV3daiww5W",
  "key3": "5YQr3LpSAZp1LAvNPViUikPeWPUVKNE2QFpMddi1NQfZGDcZFn3HiBXsBxFFBrrqMTxqcNs79JcMo27cPQgNASoE",
  "key4": "5cFmxB2Yt3xs6XEjcN5x9hsKaw9HK4pB7p7PTTnGdujraNfiy4TaZJL5kWsyiSyhiqipS2ssuZUu4NXRvraj4fqN",
  "key5": "4EujCtNw6eCbbfJC3DiqBMGQup9Lc5QcvtPmr3ptW8AYqEaPZiptCojieCAs28ouAxMGZw7a6kLhVy4afs5jJCcg",
  "key6": "53bbcu3ewSwuQrAxXTmnrDhu2WPwsguVWgvyihnWnW56ybeM6ExqbhcVqBVrVVDAtykBXWq6qH2p1G495pzix9BK",
  "key7": "3yV5UBpEbbemFC3ztVDDiQks87c3Y3rD1NcVVHk9yiov7mberMXry2BdJCbMPkYG48wcQ6oXmmCmWyFqo8WGrmbH",
  "key8": "UKEcM9HvVBY5FcGx8vFCWukrdKvxQETNYgnyy46FWyDmunmLTUsnVrGBuDTuK7AxDQu4WDnLVpfKkZNAVpCr4pu",
  "key9": "2ARARiZdjCprYz7TRpidSLoT7LtGarQpo1LzpX151Ju5gdf8iHJjb4qdodC83ERQFMpeafupefg8nULXAeKxzH2Z",
  "key10": "43X5cdtJKaHHjvpzsXgw5bvaB5d4a4QiqxWZwV2ptzuewKX74SLp4SZXJFrfMabobR5xpkQQsA1bvrdA4ygU82EF",
  "key11": "5LLj7dpvtrkyMWbk6yiEpSzD8bUo83UKSfeZUfJZqnqE7AwgdauQ8N16CjktWsNYjBECYdiuCcnWbMm7URLfMdWy",
  "key12": "4ToEzkorjeb342gaCaeVCpVwLuhtULtWWwfyP46PCz5TrL7PoqZFqdenrJPnqGAMmG8kxQK5k775bHGN7imGqJeV",
  "key13": "4hoviSaCaAKCrm3RncYRjT38ANTQd8o3iPtqS79j481SBzvhNb3eY7XStp5AyYmrVMSDUB2RrDWAGMnmFCPdbnrf",
  "key14": "4CsyGc2vV8sLBQ1nk9ZPXP3Y1du4k997ssf2SLC7ZXzMoapcvh9g55MqqQLpqTiffqF34pEibbyCrd41pxjKWezr",
  "key15": "4eeQwR5fWpVRRoeGghrXBhHFBzx7NeAXShqo3EDcJ4MyYpnqrCQqyu7Fty5tBLgPrLRhfZfWH44wFaNV9RKQRa7n",
  "key16": "46CsWjgxfJiB93BdjEP4ZJNKxGW36m2LmmzdupAr16v5LznEYPMKYVDZKVr3ZDoyzmSEVqDLZSdSm7R89HfrQwSh",
  "key17": "47SJvqVC4HKKJLgqvZUH7YfQWsdrSZ4gYevB4gpY2ezpTRPyz1UvgAcZqZPu2ipQKHa3tVdkb7MMCdyS42iFjJLa",
  "key18": "3bwqWqAUJEWLuQRb4EnpXzQPypmnqb9yX3U87AAc8gFVpfqqggC6s9AjP3mhoeHrgYJDqLSo4aE8XZqQWRa62qMq",
  "key19": "2sUDUrhAPBqeLHL9TamnZ7b2pAf9atprxqGCcmxRLfBW5FEcThgNkxeD2UaPu4GVwztmKGmaPgY1BfX3rC9CDN1n",
  "key20": "4xnL2cpmrAbNiJomGKH9d3stXcZpNwtuZHZ6VaGjZKxjZsTFgV2up29BdoMQ5M92BpfBDMNPVfmaWks5P1rHQZf8",
  "key21": "36e5B9pzENgwTnodEEKVmDbehggj2rEnJZegcv2hEG6Dubd9J3oWFEpyfaY9LMacXxJS6HuZaLHs8mKAz2nXrSY3",
  "key22": "2xoEWF2yvCm23KTuLRdcvcPtZunLedn1E5W99NyhBP92ahcFbvveBQA1z93U9WsnxYVgiCcD1UiWCQXV8BQfWj5J",
  "key23": "5ETbo2nvBsjPpjgZFaEsJxQLnyCpKRpN7TGS6enP4Va5Hw9cYLmkwXZ879bP52YRDLULM81pFwT2M36bGksnZ9qs",
  "key24": "58C4VzDsxuduimWz2az48qodNAuf5kYpb2Bwn9BiGNWmceUqaFqc9WtshMwzneKacN3ZTFDS7haaPqXvjkrReBNs",
  "key25": "3MdMMNA2J7UqWySWaeW8jCwCoA8LAuZtFPqfkNDJ7dgQozLkjzjgmcJtbqSUDph4bXR846vvDyAqv3Na946aUdoY",
  "key26": "21LVt8aq9q414LatRk4JkSUwN4Da39XuJJd6J1UGX8iB6dH4KyyuhpD1hJBC6uzqnHZfVu7sfMiLr3JoMEpQd7nu",
  "key27": "4vjJupHaTr8GdUHHj8eou9rta3NboZSYp98m98uSqei8E8fMMPyGE5PRZKkLXMrxvXRYKYx4YLYKPLVTxNAkQPu",
  "key28": "468oH97rmJD3RADdMjU7aJjxZckdEASNGtNDAeHrqowNCwEa8bCWdPJWYQrBrKHryzDPGBCwejPcJEzxzSBnjcvu",
  "key29": "5jja55T9ux4d9Y58w9YrXzcPf65uFYJjYMtJMaBWZp1pNfpippoaKHKsbYQQikB4rgxaD8zVodCe5VPwyHtNxfhz",
  "key30": "5kR1kpwK8Uk6MiWG7FYuAck8Qa1CNbrN45sJBcembxDs4ebj5DpVcZ4BitomveReAZ7WSDRSibMZuHJgW74qzVdU",
  "key31": "5oixeRYZntZhGJNQ4WY4Ckr4eNopBbtFvr9ssSvea1XKwz6wijk16WjcPwVEEHJmH7bDrVDdUnHq26Yy96kC7jr9",
  "key32": "5b81ACr3R988gHPVQfam7pLYp4k2WLvCEYLR7vf6aXFycLFsZBruTXnmjCjBngEr9V6YBreiDAvsFezXrRhna53x",
  "key33": "2NKDBe2y8XNVoCnC6u2mampCUaBG3L4vkvb3ZhsosciUenN4mYy3RUk3ko4PUgYE3UGmgz5pK35nW7VGJyJn73uy",
  "key34": "5znHjJqDGsEzBTKTJEcGh3PrGcjtBBtgwrbGsqrfKHY69XLms8jKg7Phx8fdKCS9DFWgtZtEGNRsh4RrZUghuHN6",
  "key35": "59zheogbuFZsMXfiSgWskn35vxn1udFZ1GqeL2ifVDzV2KtBmzLwDKoQQiHMsukiPBUbPkk34n9Dtiy91jFBZBRA",
  "key36": "2TBR1ET842yM5ayzkexNSXCThAgfHd9YxtRhva1UPDUmt8zY3hXXu6NkmjYKBhGKYoRMvzwdb5e2TyCUrPXvLVq8",
  "key37": "a99pwdekMyRU9DEg5fwWG7kSXPphxE2ZgnKdHkquACYHvsP7g1tbZbpiUb7K3gaeyYuHjBH8H2TAKXoKnDjY8zv",
  "key38": "5M6ejhkG3M5StsihwhEzoGXzP5UPcCLosjkT3cAd1HfVbCwL4z2aoP2y193ymUUKSdxUcBgvGXZugDbvXTogN2CR",
  "key39": "44iCQYhMPE4vPmoRsxXgvRJExjWu3KzovYLSUWQKCXCgPCv3GeVn5pjoUMS7NCKRhnZ7GvS2nbSL4mBseiVcMPiL",
  "key40": "4YoS3CMQBbKFaCyUVktP5xNSdrRGq1GFZwWi5uU4vVHV4CStPaNkZfTitdNeVuTyjuRKqhDXmWMBUE7G52j6bF8o",
  "key41": "3Psn3JbDB48EAwjLb6VgRgdeoMV8T6MsxG6Ex1cXj5ccjEjv5FSbQ8pFF8YrUbHygjsRzjSVgWdUfkhV2fx3zMZi",
  "key42": "34fadcgNVRLLpTJEacddcEgPVgP7ZjMMfD9B12Qmso8ex7y7VzMjEP36CM2bgUdXR4sUJ5aT68W8hTWEyg2NPSR8",
  "key43": "RJVEXnwhw3qFtzaf18oDRVJ1rxmna1LzNmxCEc6BtLCfeQGkecy8mEFcct2netEs2SAeALxUB5FfUccoD7ki4u9",
  "key44": "2tmze98KsxVPUk4cbjAdm1e1aeFa75N8X3cBfhsCd1FpuPCgiYQU93gkgv8Cdoi8UjuE4vuL3kJniBpekHZLZdau",
  "key45": "2UkWyY9MtTo6CT6xVzqUEAkZRpAh1eCNa8MtRQamHWARsYiuMRXr26WyCzUQFhnfRUZGj3LuZrdFFVxWGbpjPDAW",
  "key46": "4uPuZFvTSztoHkTdoVvfiWFHn5RK9yWbHjr9ApqFgV1cjAQhee64osFsSWVVWgNT54UGWcuRb1dki3jQqucDgDmo",
  "key47": "2zjDLNPhV1vLgXiJQ9BFeqzEXMt1sdDzFio1PeVczAiBcqxrcwdL3BaamscnQcnvV6dLqM8Rdmy1wtARL8C9xHcT",
  "key48": "5GZrAWkqk3ZfjqwM4gkBguxMQuy3EyBJLy8c1bVKSN3AkPcspru2f1Ymg6xkx6iVGn81LdUvhaSn5tmh3xHFPjAg"
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
