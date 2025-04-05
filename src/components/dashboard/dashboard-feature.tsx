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
    "54QWKHPNpdZHAWsC4Vi7ZnC7LuhkHTVPq2R8GyT45vX3KV3CtgCP5D4MWGCLeHH7AtkAdMgBbuoEqZunLqtNYDWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fa9rURamyPDAgNZETuKXUuUExecSj9HbK2zRd5coPHywDXW7YXufBq7VJWS9pgzCTXhSDpKmZZHoQii9P6Va836",
  "key1": "n8gtPeeRcnXTMn9YJosfH7q5NMYH7F4BpevE3hrAvWEv48BC3Kg7JzTnigA9tHhmrq7RMUENhh9VaUnSc63CwdZ",
  "key2": "5yF6Y7do3crgia4qTtafNxgusDvDRJrZfJwNXCtyLqji4XDXdqpwovrXTj5m2qHu4U85ijBGvQeznmYsqKrZqMUV",
  "key3": "5bJ6pPCu8yLhtgL3zJYyVWdToMYg8uyC24FmbtQgH3ab3ZJfDfp4m9BhE9x9WprTzmvsv7NwXCZYA2fgiGk5p7T7",
  "key4": "5cayKhhCaSFw1FoD5HaNTsxXg9qKvMYR5uawuWbYt5i3rsPKtxAwZf2nryvPER3xVraRq6FULAPyuEmUawnVyzXh",
  "key5": "25eZgw8NsUDZ2yZxexCdbv1n4PVtm65jfmReTEkMwwN4deBCdhWMfyDfmGAVjw28DZ6qny1geHVT7FpzwSJjy8zS",
  "key6": "ykgeDyPU2nJZzF6DRy6yn18ZefXsBggAoB4MLNkhmkPpnhQesH6GbwbVhrkaPguUw7s48gGfTcJNFefZ6NBZ19y",
  "key7": "2AuyYyUuq4ehaEY1Ueu3ZU3Y8GqKP5vYCG3775cCLTFh5xjUiNjyCdVYg9aeeBET98eb7A4kE1LtuktPS5b1VFAb",
  "key8": "2maq4SonsTMPHRf2BiujBmNVrfogdKCKTQK9BH7TyyjhsVkWh9PdQQ3U3s7vb7BPE2EGJuRyMm5excay3bXKLQVo",
  "key9": "kmzp5bizJTpFnbp3GEA64hUp5dWZRRY2uBMuAS9XriijUjta5dfCfjZCP2TXsa18BpYDj6QxnYuKWL2ZDu9nKq5",
  "key10": "FNfT6aK2xzisbDXh79UALAUydXCx3BF8dHdiRMgCnhTfqwoEAcPNL59TMzxc7FHsjoComqwB8wnyj4Ydvyw93PS",
  "key11": "zRKaQ4N4j7fGoJBTQuv2nSEnZkMpYdtMtB5unDz4jJdurMpnq2y3dfnQrM7EQ5fqFuqNEENP3H4AvFcE4QFwH53",
  "key12": "3hJCHMvnuvkves8RimNT7ttDL6t7caA4c6rbud86uUmcFd1sSjwFc3ZuMqZrbrLv6yqCi3GKVXSh5oA8724wQ512",
  "key13": "4zaXMSVFDuQWGPAUzbdULPqrooFuU8zUQQBs86FhndWojFmZYPbpTRWZWxMQNoCAmnarU7Piyh5WM3RyDpBKEKgB",
  "key14": "3YiC4wQTep64iXvLgNgpjkoaJEtd68rQvK5eLxvfRWnw4DKzsrj4G4VNnuzckz7ybt9LRHL9MrDayPLz7VAxuUG3",
  "key15": "41TeWTCkGP8ywDK816U5danwiCczg6PLTZwfZb49p843SNiZYMpKmYPrgdXWMdH8qneCVaFxbReTXweaJNUCorqJ",
  "key16": "3MitFBKw1ezNhQiRZWWXsrWnKzXkVhMu4Fhc9nQfpVv7hho9d9LSC1SVzNiqo74NPp8F1JNFtYYAnbAMfrcb851Y",
  "key17": "63de8gVPssy7tVBsouLGuFT8Homs7ycvHRx4xmEsjW5RGP7TDmjFEKjRJxjFvF3QAJHQ5uzxcHtkM7SfgdhxVczU",
  "key18": "3PnyfSoCfdK2dWs6RGj4N9Guj3G6LJujzbRnD2zoxJASYc9GXjpbGDBDTqYP7npXPvjdE1gTieCJhHxqLLqWa9yU",
  "key19": "2aRFAVzjwrdNF9zj6C3voS8G9DZZ3GNAL3svvywwEXtKoQSCbg8yyy8CWGKktnKNomnapScfDPB6YAD25Nh6CgLW",
  "key20": "26n91BAQVTTdwRKJJw2PCwjMH7DpkTyHDLFeqCLvs2SvMQvHwA1bZcy1USXT2t7v1MEy4AX39MhAEL7BQ7NyPYVD",
  "key21": "tqjSvs3TA1vMsz5fus2CU4dB8R1hzYPTmoJgvUaMifsAn3TW4ZkFpZZ2nZz84dsg76N3Jxkg4rYbHMzdy2nzSk1",
  "key22": "5BaJSYa6uCrgApHuYPYEfDmXNTNWiYxz5G9mTXZi8hrtDtyGrXuGvUooa975wNZfJ4WLM5Fn5PgDGMm36Req1BT1",
  "key23": "CDPKjgFWRcuB1ooJFWCLMu2w4QXUtczPN2uxKgjP9VeeRqXper4XaLShXK952bprowLN3VcCnUWi7Z6G8ZXMKT2",
  "key24": "3F64661XJTrH21ARnz8hJd5AKxgggdE59ARMUuPg7AsjBbFo6fr63eP4LG55ZhQzQ2JesXWC1VHAYjQtNgrrjyu5"
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
