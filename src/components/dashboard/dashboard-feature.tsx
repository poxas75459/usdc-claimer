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
    "2AZVLaTSire7Cgy8akZqtv1eN4jmVAESH17iiNNyLZYkNPVoE1SRJwQi8WBCWHZaeVpmdu3AaENgGDcc1scVnKrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xjSYNgENwbcJnX8WD41oVTy8ynx8abJK9nBYnipM3m7yUscJYr3w9NaWt1rH1NAZmuAhmA95mDULgb4HSrdkhFw",
  "key1": "482xtgCxwSUeWB1pqX7zWobmqod4iDiVCojvHvKTBwtYWnMBdqzfswK5jPYewpBWf1rfRi4GdHG9HhFbuS4WMogd",
  "key2": "5vrk2KuzG6kvywhQndVWgiTgASEdixonoHTE4jC4QzBLPMJcmA5R21gBrousPBoANU9ap1ZBZHvGWVCRcnKykMx8",
  "key3": "2GSj8EHwqSDKYHPTqimUWxcte8DDTyWVETSKmAu26a7aDD6kX8rQoKeBgdJ1zhrU4Yc5EZeh1qdV62D34gGwMVTT",
  "key4": "2Ta4FSJYjuPCKBBK7QN59ZTSWtTimsMbedNpZ4U8LWvDSjbK2pCrFL5b1ozicZ8g8obGh7j8pX9AWa3iDxbzqAJy",
  "key5": "5dxMzBoNo8V6wSZ6QQ2BJ9X1eKqhNGMPDBrdi3eg1iAFozkYBSRAGTo3TE63qjVvmSrJqs5k3oQUc1pxxPf6W8ta",
  "key6": "5yiqqogkG2YyGFdoBedsnZoeDuv66cs2ppu7MWFziHYB92qc4D69nTdqumPX7qMg2eYfBAG55LuW7WYMCbN8Z9LJ",
  "key7": "5aM2KhjwYHDYz8Cke3PGkfAiPf8KpuM8fyU9ZkKhqm4deuRFWU77yvdN58DsHLmhun3cDvQt6MAL3ue8xSn8d87q",
  "key8": "2StLfHutHas8jD3EFBW3ap84RXcWtt9YG5uvVUxpwztA58GCtQAVs8btWcwGzGvMAy4PZota7Yb47J47P4WLX2vA",
  "key9": "2xxFKTM3w3ihptMm7A4dGZDHhnpAw9fHrHEMc4Ji2ffUzMe8fbch3SMo9woR8Q4cHdo6zQzEA4nozSXLKLYhreVx",
  "key10": "2dQz4vxPFKxunXJs9Exs3sh32fwzDbzRTRpVjz4ebLJThTyhhuD9mTWvRd9QiGjRaw1JE4ajSWtF34z8M9Vv63Qc",
  "key11": "12bA4TpyWJtHjHj27N63Wg6LkLnJ1nrgMo5XeU3Ncgsm6jfFErGt6HZTmRJWdG2kgAtVfH8U5aKQyssRmYsgfrw",
  "key12": "ycrecgq5p4eefSGaTY2bFvQBw1qRPBQvwoiJRgh6GSU6yR15DTP6nrggefremE9prUFZApPhoiewPPtwvpB9uJB",
  "key13": "5QkzvyZHXs9VRAWpPsAwxHY5JkErY6uc8htH8b1JYKpgGDP5qyHpreP9k4wm7SZkR5v2ocwD4ZKaVv8ops9XLDs1",
  "key14": "53mFuNviP9Jw555dcpz2P2wr4ZpBZv8etswM2QyJ7eQckohLmMKevax4M8MAHDDXhx4TrAKFsi8C8H7GGgLa8MM4",
  "key15": "5KnoJXDV59cmFsXz6VXVUddtwufWikFpNxshL1BL1841HJuUU7fS1r9W1f7DG2UPkVduYVvEeFhNxhE8Md8f8w9d",
  "key16": "43jkNJjdhfrcurEe44cjzhMPku6GRvK6J6ec27YjgdK6HgV1B6KL3xypwacHb7VFqWawx7HN9uFFuHoWGqWwnUAu",
  "key17": "2YNKR3tMof4KRgoEjsB6aQvZWEJCkTctDGLakxqqa9rScTAL39EjARzQ9F2iDFU64ErhpAsKgKwrrkN4AiPxJ2Y5",
  "key18": "25oVUQdxZM2SLzM3gRNUkjaXeE8tkw6afcMrRmY3pN1omWrvMuY8gYa8uUWc9MVdVtkXsS1DNUpxYTxCQZ2JEbqF",
  "key19": "5Nquv4pFAaNtrDE3YgbyggdQgGM9usm3yfuPNq9oMVj2EzUoDqkfjC41KXJDWKFBVs1irsurGq8rNdG1UEX5mr8j",
  "key20": "PEAcU8bkBB43tf71PAw24e5EtVcAEdYqmaw77AjBPEMcUqHS4mufzbH9FAbjPcS2QmtSwfytPqZtvZitUMkYfaB",
  "key21": "2Hcp69Db4Hton51ev1mJ26wT5NiRWfzRVJay7cT67XaH8TX9rxt1MFwkog3yi1aHyoJKMYhLyG7Nj4VGkPWtbJwg",
  "key22": "5QAby3Xd1VqD7pEsKY6zKZoZYeVH1j5xyLy2snUxx7RCxBF1b8GdoKCR4rRRxXiThM6qkST2nTwHrb34unoKsUZK",
  "key23": "KHoVUThDXrWLGWZg5Z8iwd4bC55gGQScks565GE64vBFnLgWVFZUjKmWapSKMNzQmi67yNYKVwpbdGMovK9unBr",
  "key24": "2fePKkmamooivfFrFHegXmSHWs4snHwcPod7yR24QZL1ZHX6TMavWZdezqPmFUr3PLYi8i95vJo1DXWxz7cQ9Z9x",
  "key25": "4bmivYX4HRubPqG2TcWSxogpFuRGHHamYxq9uwJ5PV1SeXGDr48Up9Uq3nThjxGvbk4k2AmT4NufBqUfgtW87rF9",
  "key26": "FZZNh5NAxbM8gM8Efj8xpZQZo6QWDjeeB1sZMRoppC616ATPmtpA8NJ89d6asrGs1fqkMfMbsDEU68dKCzEeDpp",
  "key27": "2AwRtCZ9ASh3zEFwBVrmn9NpnHKsn1avFArioksJSQAKsVDg1RyEP7ZJnesJ1HVxF74ABR9DABohgpvcHQUpRSfk"
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
