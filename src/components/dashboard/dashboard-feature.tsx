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
    "tF3BrGhcYcy7X5faLMvsichQZp6voqCfnTX9N5VN82RpPrUC4cECxwjuXsNsnRo9yLeXXaBQgMBdpy5RAiJUeX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VCF9rE3hEi13zvCuwLYvqxyHvtm6Vdk2wv9LPoUuVCqBc75aUv1GQzPQXzFBtJguPV3FM1L8VRhffT14TRx5TDY",
  "key1": "2wrZJDybwqvRgKg7nR8F2fCsS1MY3tVYzmAXFqKh4ETfYKfQ13QD1NjjfBMXa2dCXYJHzEFhZqX47zPQYEeg7t36",
  "key2": "3nv6zz2wBEgTNCa5QWDgr7qXBkwZZ2s9y1B74UpCxGSWn54uok9SCRYUJc2ZB2UqMgQaXZedawZzigf381BbRch9",
  "key3": "4baVnAgEfBN3Uff8Fchs7xEHRZXXKr4JiCkaoPDvhxWbfqE7ufNFRGbUoJqXACMziQk5v8odvdQbQmvWLBGo5d99",
  "key4": "2ag8E8BS8L18SnZ84mghSvLTJ3wf7NjGWcU3joyxj8Sv5bNypDH3WLPXuuiPw96i7R1fmjtqAq3wFkStfeZNwtPQ",
  "key5": "4cFg9uoRmfwvN488GgzoDMRJKuiaWCZDe16B8fbBL866JhKirUN2uY7NwhjA8JDSese9UMxnxxibDtTxL7fs5kqJ",
  "key6": "5hfgUrbGjkWzPyDpVkJZr7EyNwMhbxq6gGjnNtf8MQmYDnCnPx9QbQ131UYZbdGaefTZJ5DJRRCVRgVWuw7oTgk3",
  "key7": "3aSRFbCjpio2ka3yXVPiQvYve9yMVB4ibPm2z9RaukHXDgHy345Wy9Pu7xzbUcQfqxQHcxvveFHuFLjv9NrxiDJ3",
  "key8": "5tM635sEjuRK9rUNqsWK1qT816kffnSqpqDd27DCHsz1JN3SSBmZfHQPjqRyVrdbMdCGPCWiPT4VCxoGrU5obWrt",
  "key9": "4HwCZN3aFEDAPGDLRAM7RezAwjR2LApRhyFTKLni3bNCarWfNbaTAvVTRkdqFMi7GVtrpWdEeZi7p4VXgkPQr9Fe",
  "key10": "4dAhZgat7yZ5q38MuKWMZWnLATgWe7SHtEDLhL3XDq1LeGr1gz1JrCdeU2L2QGWHgifkuhQCPJDYKAdtUZb8Lk1S",
  "key11": "5PkJoRG5JYSkpgJDSymT9akqpmb7h7cxFp7m52NzPMUYdPjKrFA3P897CUiitJsPUSyZV4DgD8Ficaj9taRNBcZ1",
  "key12": "3rfBmR8v4BmqhgW1S2DPkht1rRuPB8WR2WTijfCwy9NYXEF7WQfkWaTJm5yH6ujvN2RreDmsRmet5FMgdbcCRKCf",
  "key13": "4Pb1VMquWMJ26Z5KwyFEAXz2VMJYZcUBw91kiKe7LqAoUkHNJJeGBhfrUVf7EL85CK5Lm5BE9mA55gHK8BLLgLUF",
  "key14": "4Ju9gLgcT3Bev69QmK5497z9q4jnjvg3ymJHsKyuNnaR8cMnbr1bmZCga7U6GGWvhF22LEWyuFVXBEjJWaAvr78U",
  "key15": "2PkgsKut3QsEBUfSfYu4pswQ1pzeobtmTDVQrJs6uQVYURVsYmZAM6EpQ2ToJgLai9xHFNhBJMXPcBJfP3bSNJ6k",
  "key16": "2NxCCZuK3YSZxTDnzouEZ3r9HbokFsDF6gZ1ccTEnY9hJ2TghuxjMTe3jYaNRGyRsuLkoikt4vbaV57TApzkaTSM",
  "key17": "3rSqHrFKnvX7zMm61jEgiKLFbag8SsTfKtxWDWdDgiX6gTngecLugS6E38dkxZbV4CG6K3odJ6ixpKa58VucjYzd",
  "key18": "2Cyf3aF5Lv6qfBiKvGD728t3uJKetBfpDEHpfiqHBRhSx5LDE58HqxxVz8NM17tEt2U8fU2xB9LvWzXZMsvAs8HP",
  "key19": "ivVzsNBUe2mq5WZapezE14hixi5a3WZuASqtr7KK7m8TVvzrSshoEAt3PdvSXHfGooQACSSaG2PTqdfWRncbxii",
  "key20": "2AptL6pHWNj2zFqvynQZQFVvrRsLyS1vjnBYPdFVoazBfeoLCx68j3civtggzijiyKGrmNzixkba9ZdPmXLcxYYM",
  "key21": "4N9w1EsstJVC6sk8h9d1EF7f1qHgeiLFFXyq7sYeC3kpAR4RViqftqZfmDtaCoGbS8vL3d1KkEp7kETTqqN2xPHr",
  "key22": "5pTHTKyrQMfrMJgGxHuP13kmzh69ZCZSKHnMFToefoZNdTjX23f74N6uW184SAyBhefjk2y4UDukHVhmvTtqZqpy",
  "key23": "4WtqfhKGJouteB23oifwco7GPPxvDoXCe8enyg3CJcHjhwS5N2bNWDpx5mVv1wiSxJGtHuPxNkKc5yisMXWHxirv",
  "key24": "5ZcFxnFWZHyWSWupDW6QiLKZNHyrtw5xg8XzqHJ2BDbW3xbABdAi9A2anwCdhaE6HoLj6qi7usG44X48ujG15o8J"
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
