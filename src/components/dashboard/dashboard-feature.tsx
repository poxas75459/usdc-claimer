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
    "27UovYM2SQSN3hYiuqkyYRZGet1WEXSNKvFHdvjh88U6nnnTNLh1dcUvzkVB6uXddkFHLvYSzakewSAzX9Jzdmna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hhu2yTxqrqJ4C6AQ3JUmkkQ5M3k5GmsgvE83JopKMJVdJLc6E7ae1S4NZfHjNSfVHSmGRsB3Q1t8xGE5Whsr9yS",
  "key1": "3MQKpuyBjBUuptTMXHJbbsFwvKPwq3QnUk7UDDjVnpcjbh8uSVJ5LLorSA7wk72EuKWHHmni9mDa9Cfx5DTh7Jyz",
  "key2": "qVFMurtKgHfa8aV1NarcwXYTkTBo6uvuGhS218XKaD4GnaMWpkhhBWKUjktKvmzgcXzz83TwUDK6zmmimVcQNa7",
  "key3": "4bSyjjN3L2C78XwpfSxpr8ZzJ9AffLx8Y8nT3nfYUGifa5r9vbTHsYWTRfxuPbPif7DcbYFdm7rvnnZzFt1v5UKd",
  "key4": "b5GxFj9YCgxe6ZNmDtAD7caiDHJqjtzYyVr3VGjVZeRkBvyJ6xt29RwaDyxeTqqWWzhFW186vs4HHrLLwJcj7tT",
  "key5": "8HaoZa7TvTvNrdxWFqF2EDVAUoEQVaXyBVM1DRq1vhK9DmXK4Xbi8EbZRsYbPBXbaw94yhuJWvH3AThtJwWPkHN",
  "key6": "2WCzR4HnNN6HBZgnb1XTTsp6LgVtWtkfxzsRcHUJ1VYfhrcYtEcX7KucjbeHkD6ZrS5wSCbNpqr1okgh6Xmr4sbH",
  "key7": "3R1GeipWsUBWZUve4XCPjYZcFfiWd6xgj8MP5phhCJaKtSrxieZVMn3usGRfSCfaUAh2f24wfBWm7HwqgmfCmooy",
  "key8": "4rwU1xptd5Kq3W8BQJcAcUckmsqf4kcweBs9yRcnovuWqU33D8sj1abV2MWc2ArphaSWmYd8ZCSwaHPRPYjuCT7g",
  "key9": "5H9rbk7Dw8o9Gkw3t1dNNNvjCZucesPy7L15QKhcALhMAKJ2BR6ySnUmRovy8A27WoyYFpmLS1ncBQDBRZ5aXom5",
  "key10": "4sJXMTJJJWDp5inxC4i5F8kjM2SwYuS9KfHA1VeN2koUnvqCxM4U9XFWn4iCo41X6W137gNfNgET5Q7m7iCkFhy",
  "key11": "3yBw65p1cguSTg6AtAA8G7KGUsXp1h4jfFJegQN9VfxMkXkq8ZzmUcgB6EvA1Zx9ZfRw35etP9apW6SM6bVRbvwX",
  "key12": "5ByFDjLuonbBjjU7Rghe8huY4JER7ETg7N1reHgM4MqxMEWicRrMvHCrnNgs7rJWsrY8LigYRGj6Nscb399ARGwS",
  "key13": "3JDRTw7UK1XHxhWe9kCFSkSeiwswS36Pmg1Qnq39xLP9swYn7vqAKz3daJFTSRbV54rF5ou6WunpX2SrRfg3be8F",
  "key14": "3feRRaw2azEZSWp6sZoxHJ2YSetZx1yYqYateDfi6gSk1ibVkRPzU2ug3QcfSvZiMt4j2MFzqqdmC3MH8PQepPGD",
  "key15": "5cgKMuWdJiXdc7DWxSm2m1pFuku8QApH5xKTe6LxcH3Csgf4ybzor9BUQqZfHkxWjCruXUQq4qdJVFQTEFVVPXfc",
  "key16": "37qGdidb9MbLdiaGpnptE71aSjsvRnZ85yiHiYS8X4QYDcz3hp6EfU4W76CWxgmWNmMyVrKgTP2sKf1UzKK6dLzf",
  "key17": "2CNz9rxQsUoMBtG5YrWZ5GX6HLgd9Xoo9zFU7366gqFuGg1y7aQQ9YWgtvY9e4wQ14RqrHUdmKwseNB3nSgqf6BU",
  "key18": "277secM76RQcc7tEi5agJi6cPptqFYqArTCWxpraJb9c5sz55cWUffY4Ub4CCtbXgj3rbudai2KrPFMxDv3HNquJ",
  "key19": "4MUwhsy4juAr4veuFsCCXNm95QSZSKFPn15rREmmkK51J5Z4o9DSRGwkHLpcrc7rtLYVFvMLqQcNMpJMNer12B1",
  "key20": "2UntyMbkxRNifYx9gGgGgyQZweLg3BaYbV6txnDz7a21nWZMhPFhXqT6Gq1CH67j63dFZGXB2BkSdRGuBCTqXzx3",
  "key21": "3rNnyzdMQ3ephQ1Q6HJBj5bAvi4qaAq34NUAvhbtA4Hy4fGUqwpeYw8452YdvtvCMdC4onuDCNqNkGQSQoEuB6nE",
  "key22": "2PaUGVTy5fot2R39pzpwLTvguWg2Ed9Q98Bn9GpfSwUtYKnJi8LXEq5wswi78E2JuHEY8c5DXPiUYXKnJxRDUbGR",
  "key23": "2mvoR9keki2Aoa2QnhcRSDryPPfHRLpzo63Y4nW7C5fgmDntSANQpqgBBb4EJpBrpxCb69wr9XHN5x994ShboxT8",
  "key24": "XcoNsRiZxcbymDvKeGYPhZvHMBhxMbQ92By7mvpbXTAezcu3Z9EjYWxVYScLk7Q3uft953udc5BojaSr5zbLReE",
  "key25": "3u3GApovKViHxEXwWbK3vUvQ9FQ5KYtjHEktciQn3JwzNvWVdes6pTQw7UezAS2Th4Dx65tnybJ27rmF4D8QWohb",
  "key26": "62wo7puNqcuTpW8udmRtketp9dme8ffokQ8JjGUTCbehunct3Ay9GhhtLcN2xpzY6Y1Mm3yf4AFQnXBeVMLEfZd1",
  "key27": "36QFw75UuiSrQkjukUZy4Xq2CUWHNpqKq7sm6QsiikWGYVC8RsgskhE2VtQqRvthVYZkdxgc78gAU439wy6m8YFC",
  "key28": "41Ra2hcVfLeneDdWTwqsxqZWnnEF5QVe3BY7vUWTESJcJvXGsoKrdYUE2XStiAwn1vTiLbvKwr8zAP17Rtx6Cifi",
  "key29": "5tMF9DnuwncKPftWPniZijddKqMfYZFYGx45UaTKFrGKenDtvK2NUtjP2f3xG6ofchTTRReFy3jVRoPVG3YFzasM",
  "key30": "2eY9bQq6wg9gr6wSAem8A6FSnAfcUf2X4xgBrYw4BxNEpVFQ2qqXQsjuru7xUQoihBL1mj4FmZ78uBVzpZUuXugk",
  "key31": "uAbWkkvbZU91hpKg1YNVp1n6UceY2bC4R5SEUMD3U1k6uvaC4TzcZ6mhQmbHdSobvM4cejezvoFSgQqn61y9oTh",
  "key32": "gSudUWGwuF14bC4HK3XmM2ANy8aunNhihdsEScBuw8KgG2L1nMw4xKM257mBvGBoXRqCLz36TXcehFrraSvrh3g",
  "key33": "3EAuErmU7Sx3hUMrrgo7fbNCxhieo6bUtMTzWS6Ps2mB5gs56P4x6BDKcPrgXyWXsiLaF2kw5asKFv7z8jG7wYXi",
  "key34": "5h2VCYfYJiEhiK7HzQ7rTbS7s6CnJ6SsbhmJnLJRMfZwdaS9Y5Fm244mMdRbKPSMxSvmtJCMXGY9ZfNuNZJmuJdd",
  "key35": "5JWn5Gr8J1TchxGJCeZqvGf6f4BM8eAb6KKyu7sS3pi1gGVFqjKrhoCfHtqiejfskTAWkZLQ8PDhW39vgBAVkUeP",
  "key36": "3qpcsAN3DXrqstnsV3f75j6C2rZbyvtbqsPtzwVVFZsWJP8pDCZEoKTHoRgWRQa6xAnYhyfevfVvsw2XFSa9gQh8",
  "key37": "2N5mHhJVSdnP1sDdNYYavCMqh7HwJ8DS1RCLmAAAaFkRxBB2neiZrY5UsKTETvyYX5jhQ9cX4RDynxutnVupzHap"
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
