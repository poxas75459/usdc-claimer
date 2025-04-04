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
    "2pkyBxygriLSqsLhaH9eAbCDcKHe8t8CLHWqe3X3L2PKhzbWBh8RcfEYXynTyn78xYH5FNUaFbbuZmJmELV3Mn3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8CrTpX9a1c8VSkj8D3knyb1wzyTr75spFX7xcwTWAoC7u7AkG9QBEVkCrqjfJMbqAkNkKt85nuRro8n2DHzabJ",
  "key1": "x2MJ1LdQGTprNsc4dbbMF2EtkCeidgrahWUNTSeHtRquNwPrUhZRrXNauzbLsiGVvMMXK2mJFjnPSG9y28n3MkZ",
  "key2": "4xNXJx4Ad2U6KRagHwyx7e17j1gSe5cnz8VTMrccpG7gXQbFWVts8mQHEkit9P1ShJBEBYDNTK2uYtUTtDo4xANx",
  "key3": "2v596qumXe5mEBJR9y6BYdAapuSob7iFym8AALghvmrHuFjRxwJGL764uYsGq1mnngBZxZgesZKog2PNfMQjrbGF",
  "key4": "5XcnruPgZPiouceF2yPST7N6WA3WL5MziND5hxMJgDUN5qiX8n45QpSerTPWDUNL3tFGiXPB6YHmHDpCzMaB9m7K",
  "key5": "4XU4CYPAgUDowX2VnRfkk8aLJX1iebLdvhiHa4VXzcxeuhkXTymzQANfhz2ykKAjHGR62KH3NUBqUUyo1ffZE1uD",
  "key6": "ZG1E3RvwZiRU75VBtS2yGzyZujre2fiee6RZo8QYVaYKB8goypNJLkPVZud5gYvfVGAjrCnYGGdJtY74y13RSbf",
  "key7": "3evg5yS4oMx33kyWeaLCHS3reHFZAXMPCYGqzbjx73t1DStGvkHbkVhNwUfrxEXZnm2gXZ8fLFNdNT5AtvH4Zvhq",
  "key8": "4pC1rKHExfvQaVrR3NU9wUFt7GGSAu5ghFsLvTzB5KqDPad8a272SMymd3JCraTAg6gZnjnwkpJc7sv7NifTc6Ei",
  "key9": "2t3jiNcbBtfQmDDTjyarFP1RedvU52Lps9hsE3hmQXk3pU3jJTeWbF75kyUbdF2AkyW8hPurp8SZvRqsSbBB8GD9",
  "key10": "5NSpo9VxXkX4wdiA2Q7CjRW9vJ5mHGrD83PzUgZNq4hZoTESFSSrQxViL3p55f43woYNUGudEVTY43hxFnP7wfWk",
  "key11": "5bM64YTH4oFVyG3bi3ELkkwcW8jy6gAxXTFKPhahAJNjDj4wC3rYcxExpZdaSPuSyyWdGckL9uSixiSY5qxVmHCN",
  "key12": "jG6xazcsgmtu2WgYjBrqyeRNFd8u8XQU1TPSE6T1ujwq2WAibs4DsNpRZCKRfYzFobaXY18AHPsQ1Z6EuD69Xvz",
  "key13": "25DxXHYGEhmjuSayUrzLfZrYfgThjX61WoXFY5EyXqFmrJCMne72W84oWVudEF9hsaeSY6Dp5TgCziTJbupK7wq1",
  "key14": "2FVJYwrQWSNqkqUWiQjMf4Zg9wLp2Z1cC8n5yw2HisGrgMfogEptJnXrNYaPy1dgR5u1ZAjuXKG7Lc7u5jDSnkmc",
  "key15": "4KWHfMhRQqEtZDNpvMYwASJfLFX5LAsunqPKJChnqZTNPYekXsJkXYVXFx1jBeegBtRs4eCuCJKcGckM17vk6hZG",
  "key16": "2TCNBv6xhEt64VwcXopaTLunACPL8oQqtcNLbNLgTmeVYUjSqX8u8uwX5AWTpJoKSQwqAunB6CaJVmAaxybwX4Dz",
  "key17": "u4eKRkVLH2S9puQG6mfxXenKPX6o88kSfDDmMqZtS1yUdPZzHThbT4w6DaDtBaCmidBaZSJwtVPKqkHLcBgb2Bp",
  "key18": "QrTxMNqtDXP1xSKrQpeEDS7wFcZYuytPNbMo2v2u2sCKqBXsETpviRW9gW5Vs5RoaH9oWeEDvVyfNjQPFHXMWYi",
  "key19": "58QJcBLx8VyTcm5UtVxqMW5GhJWBJ4YKLGDukWp9majhyjAwxsaXSATXS2LTNowEmwwePba8MGSZvVatnm1FZVBn",
  "key20": "4L3m7Ktf1xP7g856EX1BXpkjqJZrGfpVeYoGC4ViBPRa1c1TyKyK2qhPy1Y3gSjSiVJPwUnmTPqNp22kTYuDvwY9",
  "key21": "5j8ePRuJQCvRdKzynabK12cEnrM936Hs1Xtho7uRTwbJFsrn4doxA3tLA9V3QFkFruoHnS1TFXm7DvtfsocP5fLC",
  "key22": "4dMcVfe5bGNShXuMukSgmLudTYALpjrmHzy1LTxwwaQg8ygtxf4YmavwYSMVi3EWKXaMvq2XdhqW1jnEfDr79vr4",
  "key23": "3Cohu8TBTp2a1akVk3dRWn23BxraP2NbDxHEznVvFBQLxPrs7dVSYxLVZU32kMX5buDnSEWGnvxcrF73JtDMb2Bf",
  "key24": "2pnpnMGDFD5BZ3mbA5v6NyYDQPVY8RRRmide4ZRTWoLxupCyJRkkffEWJx2HnhCRua1pHscu6UU35yiubeEkbqiq"
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
