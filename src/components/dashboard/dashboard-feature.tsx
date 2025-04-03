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
    "5iojXUoc2n2sqAipyfniZT6Ddoi5N8FZCn3ndgs12QTSLU8tKuEcLbjc71oAyqGsrrgfMJqHKbsUknhgeRL5XPaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bYrZM75NQmvKnsMM5usr6G7e5PpTGinXcB19AximeMbHiuhTBQjQtmeEKSyiUqNY2pvTQAhH3BSEtimoW7WRFD9",
  "key1": "3wQd7KbsZgdMYBkyc69f3TeJ9WATmDiNhaDfqQP4AEosnvhepbDQj9dQxGaVDbt11BrJXDtuMLH36F3gtS3iiGAZ",
  "key2": "4pSJazMaNrEYYJm4GrPFm7BjazrDaAJ4XX3jwXguLdeBnLv8JLGXNyRHcnDCoy8qVDQXhd2wJ3HDMVfQCzWyhbh6",
  "key3": "2ydwEBm6BRxD2CHGALAYgKnaMu8xGVmXboGAC96LNoDfP6Q52UyXpNyt9aVC6SHZdNWyf6maSJQF9zUikcHC8BjR",
  "key4": "5eaEXkQoVFQhtNLwXfDUVAvyu9v5fHvqYVSHdujdgGpjJsVUtRm3X5rBexcrevqrb7THNGZG9j1CP4CfnAFC1Apv",
  "key5": "3fjfk5w6pNTwhbjry3KPtmVWiJHvUeyytLwQ6vS45BnZyBkeHoxk5VumawP81BBQ38bWSKxD8tBtVhX2rL4AQqDF",
  "key6": "4qV28U5iLYkVefH7pRteCgZVMetEgCKBm35K9j2wRMSiFzguwVBzLF4EdvBmQdG8nndpqPJHX5gB9JLH8QzWMpGz",
  "key7": "43nNTnjVz4uHTjpAZcN9sdsFwEycgy2Gqr1SjmKDgkEhWp2KKddFhXyGgoV2mozjTjUpYDJCwq3XBQSBAjhbwdzr",
  "key8": "2fYRAtHSnhtC6v3b8sYfBeMoTucWBwVQQcLMVjw54pfTdKrKFtQDMA86awEwpHvSKDDya8wdSmASYFhJpBNLTVyY",
  "key9": "2FJCoh5XU3sNs6NM9CAug9gSodHyjKG7cU3kLkHNdNTKh9gVrYG3h1mDj3XrP2Gn5vvFr5rSAErhgVomzQsjH1fi",
  "key10": "5GxwSvphZt9c8CUmWgDrAwEPZzfzEZtW5ocueFzMZsnbJLFNwdQp77goRw5k75JbNUPuaPgznFGfox4fzhk4bh9A",
  "key11": "2FznGhdYNssj7hVMqoh8pcyM5rGeSmabkXw44Hi5rvruyciBVonpLTgVnSyaXLP7a2VtQNF6nzCNN77yXk2hxpAx",
  "key12": "3VVJZEcUD27HbpuBz44zym2qVagaDcrcyuLVZURZQjHq9qN3R2kGer4umRTTZDKPRHigsDdx2puNWCs8Zj4qaNHp",
  "key13": "3Srh2itr1d5hBYLa5RECnggsppWUn52NReuCdgfw2Vt5g1EredJEmYpHAZbDBHGYg51VGWxdTVvCKKPYBz5EwqsE",
  "key14": "5y7gScrX8M631aEM3PHka1cWGx7zQwqmn1n3GTDJhHqgbByofremN6KEU644VeQ4KzeEeY5wT9RYvfK4j5S8BNyF",
  "key15": "2uaFmUJ49EMzaXbu3KH45k4fZp44167UyTN3bNFbfUT9c5RxEkpQBdPsPeS6GvFDufr8hhyPZU8mMoiTAkZVEf2V",
  "key16": "3czWj6pvF9cJ8iyHxGtijxrnBLvGTVLMXtSDCDuzJmBNMEnnemaxJ3hJSfDUrxCiavkrQHXqY8cDNe3MAfXATTuo",
  "key17": "tsqvm5tnkvLDqpLQuBKAoPbHv2uuzGP6PwLRzLrBQk7yWsyp4h7qor3yMM7qWLin2UXTFntC8rAPmdJxTNJqBt1",
  "key18": "5hdAM66tkuHMpu86DhYWsRkYNy7vJanSLMU2sf3ZYneUcLWtGr2FbC8nCvNu58sonsLe2LMyFoD3yfhTDNuqvobe",
  "key19": "4mrMdKQ9dc28eSqRfCHZeJSTfYwYVD9oasMjddFjJtmBXErU27QWqMFgpz5VNH29eRyoQhcDtXyiiWqcPgcdYVza",
  "key20": "38RAHFTZKYDb4w2x8Mxs98ie5ydxnXD5GAUYm968TJgbhg2AjoWfLKC3BfZCpw7Kio7HagXyjzQq72MEjjAfgkWk",
  "key21": "937ngH2PxFpVjfhxpYHgMgKnjK6n8Nsf44MPgkNUp8iL2gZj16zo7BQZCLG3jKv7CuF4AriJGpVPD8DqCqZU9Ha",
  "key22": "3kb79CatX7kQe2jMybgwf75B3EdkKbsKVzGXRLG2moLCKwudKPgFTiFGd7k83KJz5XR2bGh8KtmRAy4nTh7U16cr",
  "key23": "5cSwEpbNBpbD2JxaYsigW4ZH1Hegj1cZibzkg9CdhoaBZpisUFtmJxQYwcma6RkusVraY3tpqTEzrUbfK2oA5zJS",
  "key24": "2Fs1zkYsmUq5xwQAejuogsqDyVJCuezycUA5kBFBZswpePsTpyTMxvUfrP8JCJssjveTYsbsdNnVoMy5fDf3k16A",
  "key25": "5bmXJ4RuQKtPmhjCob4vHrQXrbVGFZ5E5eWoYBfay4oHDjZEZaVUJNodoxaVB8D73siQwoRcVz65DPcYWgfW5zTJ",
  "key26": "2vem6qXBTbtuHUPcihaF4FfKR1exah7kxPKUnvgaSkewQqjC6ibFcMuQCJzpewMSwhruaYPH6NQ3sGkCZvLEHGVN",
  "key27": "37uHseJ53d3PfF7LruayzFkJuWnxRF9JZdfiC2tDeJKqMzu2KQMwcGkmEDLrX6h3MD5yySkexYzkpJtZF7kqr4p5",
  "key28": "4xjsbBDDHBtGc4eGWP41xEqWgYQN8rQHgbzbToMWHXVFQg4UyzbYXbZbyMTnVuNuEHr36xAMRDQE5ExusGGtdZky",
  "key29": "2oaf8fj71QLXceSVkonzMp4tYUyriVTNrkpb59KL3DLXmqgrxfE9d4zj14ouwmBPB1ybA7tCnnXnMEjcFJhSEK63",
  "key30": "5saRTQGcDU4RTUPTteH9eHCRnXVfagkBUv3q4bcWFY1eP7wmxc2nS3kktLNMGy7DfbgrUKGybQLCTH5su8FZz2wD",
  "key31": "vLMnxfnfYYTDN1DKek6Jb3XtTM4pnDyEjTpFqMUn9verBEz3z1TwJK7SFzKf9um7TkvtGEQqBEtfTAQh6hvRQyN",
  "key32": "3UMRqFZHUAPGSLCUKfVFrkkz8PxepsX2NsuNytyMoUhjL3tqWYVPvNw4vWWzsj7BRgJKAfWWhsA2d5YECkq9zeMi",
  "key33": "4rZXcjEw4E5H139eKUfVD4gNP8zUJ2Fw5dyq4aqN3ncKmFhWnoGmL8Zqh5rB5ssH1aHYsmX2SJtii77frEJt1PkP",
  "key34": "6qYURa1wUpdUQJHBiqDb6dG1G7fytgUz7HjrKRKCFPn8TrQnQxfAnqDAMDimeAGMZgqAGxg4994HMvs7TSthYaz",
  "key35": "2DGWHD9sFsCQ4jKiNyeudcNQ16aFuTpE9K3rGU2z1grJpqDuSZKF1okXKQvznnTTVoohCwd3Re9oCrw4cqoDmH59",
  "key36": "29p4qMLyXFX11BZCbxAkgDirSacCkmvXFNMxZswfVQeZmrqXQcTdQGDPAXwkzDeoR2AffBr8XAJS3PvBNRsxGZHn",
  "key37": "bnRH9Yh3UtCfraQUcoMnUoAGc25xGWhkDVsrhyCZjxqudsYgQnRE5THJLR4QLAGCmGomjRu8LSWiCwgTidPZ4Ae",
  "key38": "5QswweRJnwF7N69JTZZhTrTA9JPuCXFJELj36PeGK5Q8zH1t86LFGsyR1Zj2e2A98unZuDpVyvRQPzJeVVjANzAR",
  "key39": "61js7emY97dkk14piga5Ne7gw12tLorVniMc6BNsFvvQEBzoBuRG7QakLEBQM6dL43Wj82uDT6z96nFJCJW3RRS4",
  "key40": "59f11AzQMMPeGG8fPQPKaMoZDghC45YVLh7DFsmtdrvURYhbBEDLMPBWbZQocmV9peUecR7VZT8XAqxz3d3pxiYe",
  "key41": "M3v1DX2vHHHrwMQdBVgbrttDxE8fLwxE3qXACArK77B7AGcza7T5XdVkMfJ3eAEpL7jHYfRnNePyiZ8bGaKx69H"
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
