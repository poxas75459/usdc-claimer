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
    "2w4qT7FqSx4pvb73gJvP9UwUftwVgHR1Sk3f9hPxRWY6yAPZa2PsPRwYfGp6FgHJjLxCBJCim6L5BMBS3hvNZhiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yqjJ1Wxh2ThmSWp2CQ9wBK2FJ6bZXV8dTJe8nfmZBbgWo7UWzJXGjojQ9yvLdoLGKzabWCvyPXM1q6UvwuvErj6",
  "key1": "5fW3wFnaJx3pb7jPszBJn8cfU8C1votRrHZSroHMFSyaT3mkVRSWsout83RTqEJG4jHn1CAZ57FunJzbTxz4Wzaa",
  "key2": "5aBhzoTAgYb3ktjPYBy1pKUqkSGMz147i5dXY7Bz1wcXc8UcGoQ4TL85E4KmffDovNBhFZoEb65LxJy938YHyZzR",
  "key3": "2K3mh9UgCqGNJ1yDUdV86GsKZ27i64GgL6SyLvpj7Tbj8D9c2ahPkQRc7ZogjyyHc18qHMqaizussetyMJwwxMA6",
  "key4": "4WjHqLBD6drTqDJ8G2bxG3KBSMujoEwv2fN8WQWf8jGGgC6N4BM1dWoPMDRAZ8dUAMCrhxxsz9DoJj1a7XUpJaKZ",
  "key5": "GjrZ7yVdoRNEcVJWKsqkxxmiUq1nsmNMs7n98gcxCiejkSCXJTnvLS74cwD4DiBuuDpPgBY8yVDGN6DgEFZZyPg",
  "key6": "65VEbFLjR6UwSPc1hNTHdrY7oKpw4HHSCDZDDFmM3nawLT2Re752Pi3BBYbT61a4kVAUZdybhfM8xmooPiN651oW",
  "key7": "3szeztUMfZGoTsDAejyzJYkC1AU6niYnPvvGisUXd98FEd2DPiKZrW38Rpi5o1rpfXeWtRgbH2TRMM6HW1omevwc",
  "key8": "4urhjhWiAgQJnW8o4qSsKxLuuaQiWDXowRXGZXRaEeCjuy9WxDGqQYkfPyA9VgZxRHvP59EHciAeNraG2fGpmw6A",
  "key9": "XLQECb3n2uC2TuAzQSECAbM32ooauqrVsJDtUt1XceVfrsTP3ZsxBKe3zAVSrQ5BSN9P6wNrRWNoaAZkGewRabZ",
  "key10": "5Gs2zNw9svxHaFZz7Aw3G2g89ALfBXCTz4HUdtVabt29kTdE9VzFbGUmNMYc5iyuXp6eTaGGsvbpJUQqhs1Er2pq",
  "key11": "3EMJiEmiRz9ck49DjaACVaVpBa4dtcX5VB3emch64SWdNre3tdG6zSpRcinXupK3yEbqxqDvVJjRiJNMkAcpV2YN",
  "key12": "1mPYimWGi2rCGTV224SxckzncCymssXqq4y8JM6fw2xgopTTiZB3G217kBckRRTvvoToxDjwdhGyrFXu7ZVybG",
  "key13": "2pkUENNNETykm3fqt2Bi2CZR4FpYu1Bt9kprUqFPMiU4ytVyVdLeg1zQUHBuCSXhRV49VBYrRWwUFQaBUyaT81oc",
  "key14": "2TsvCEkxG7tVHYRZzsiezGZNXBZpA2fzbj19sKoDTjJxgwBHcnBD7WRwsYUzksdP2924V1KwFfEQjoMqjAd7PJ1X",
  "key15": "2yDsq8mvQJfCzeRPe5va4q65nA1AER3tRe4eSqvfLUZ25GiarEq7SBYyJit7akoaniw6tg8Qj4KuaqRf5m2VYJsk",
  "key16": "2hwDMGupLHPwmEZmWsxxGpMwJSZwg614KC1xxvjKB5si9QaSjaLs3zrFSJx7coKeyn2vdEq74LSYyJaBT5nTYdS4",
  "key17": "3vvUFKkNMrHVWL8s9K6GQeTWTv7xED1jZDu1n2bUFe91eC8TJXu2isuh7i8aTSwfvsWAY7jkLi6mtit5etK15mmF",
  "key18": "g1depQjD1Bz2PD9A7HCWNwT2Cpu7NS3jd2PzLYya6j446BwHYLsauunWsMs1QxD5SaVaHyYfVaGvxSgYNWY9kdL",
  "key19": "4aZjdpiR5eQXrxbtYmNw5jctVP24wgyJTFrAE7xM6zNn8hRz39QWx5LiqB3Ey7u5awsYnDG82RWLdHY8Ln1Nysat",
  "key20": "24ARe2JvTfMgaXU3n9Y9UNXAUue3E2ZnzVqEpD3TssfeCSkWnfx7UdHVbiGLMAJviCrbtGk2eZvHU67dZoXv4Kw3",
  "key21": "49pUNVNRDP7idUoXHMCi6q89uCFN6d81SwoJcUGsCbVQ7uV7GgP4mhKtgJ3ejqmREESfjky75aaMwworWfsyZ37L",
  "key22": "44s6cFatqTYp83SXvPDwLfaQhcZZjCSCc7G3SCtKgT2gTciHypeQzeyF7Hx5Wo6BkyUqzyK2NQ3kvN8X5qxXQYjj",
  "key23": "3NHrBQ4TBbQM6Zb3Nx7zmVZywaxinccZce5zrSgPMRCg4TVMjDjnQ2RGvhTwCtkJR8B1R9Ao9D2TvmAEY86TYPon",
  "key24": "4ueLwgHE11uiRnPxWT1z7fJJrdaLi1kjQS1sEGsj5fB5sFqx7JESH75szMkwBTjxegmsskYbimWPFZJwcQQ6jCc7",
  "key25": "4DRwha6fLsSTFhZQu4atVNQhQ8Xn8SCBWd6HA1ZMYYE59bgrXqLpJrfj45Yzn6sUb5mWa5NC3GCqLCDQeagVJbyE",
  "key26": "5ViC9NdyPAGJmx2efXTnD1wNshMFcSvWUQEptSgFFBywMtLBFN4PpcZcaUoXkjJyXRqfjRs28t9sRrqv98HVjAxo",
  "key27": "4rngARkA1mm9pR4g7Etaw4WxMdnDx1838TjMw23fNqZ2PydULSw52ndR9hLecqH2AjUWBc2WWxmXWLq6GVidXh1s",
  "key28": "YRM3NmK1tnpA9bfpK5BwZ1AXaKSk3W2zy1WSs2gAg6VCVUrxBWx3qHtwEFHhFePc45AHAFJ4pBK3YiS27jk93YZ",
  "key29": "38tLafUfUJ4dCTtg4HQ8bgsbQqKWF1NzbenKHEqzwuS8zLvWqVmuLBaCSSC4pBshVusVBAMSPcywgd4oKSAXJjWu",
  "key30": "4hrD41ocBzXy3ZLTYZd4iT2NQEVCkh1bG3WqFonWeqZAoBf4xrA2NrVKo9W9486DUD2B2Z8dzyZn3XFxaRhooDtS",
  "key31": "2CHd8i48BGzPgzW5UoU4s31GGGbRpQro4oBjCYeocWd8m4DHiM3kAufoBkDee9JGcJWc25gsiNKYYDfQ6QjUVtuW",
  "key32": "4cwWaEkm5DY6PkaKwjzxzmNLWdv7DdSjhrKP1KmaRnUDqTUJS4C2KPcFturhcpejaTxT3bV65FqAPXqKws6Ca2CW",
  "key33": "3kkunPpC9MHXaTsLrJjYmrQUMEQYstfsKkUBUEDmXTq2UuRzTnFutvVUrGkxmfhUF6fC82zdzGTMFxPBjLA6roje"
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
