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
    "3cE5Reth2mqzYzT5ErPnyUSCjWqD1D6h7meNWM6cTFoTt948m14wZ8vzX4jxSVvc2W5ErGT1AuqGdKxvsUBWVbbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYGgd6616zdcoc2agqxC8LGpZge46H1rXRdm9p1AQVUEyFXuEstZWbXtvJmfXL8nrYpaTbKDFyrJoty4m87VZgP",
  "key1": "3KdATCC9tsDhGbjwUPmRsauV5bjDhq7vrkHgzYHmzoRcctZwxGFMqwQpYTPeR6K9Z4GkrLiEsvuVVUcP7tE2MUmm",
  "key2": "5n4TsqxED6fPQ73V5gTipLuYWNU2J1hJSbwYmkPd9RKhi6XyDbvsmhQyLGQBCPrJwutJYQc78ESu29nwxsDHCAyX",
  "key3": "578aN4TbcmvfBU8Zwkd8iyuZmSfHhUFvTYnEK3p1HkN4b8dhfgDJoELgWg95WdpFu9kgSHoXc4YpALaRWUrGLYYa",
  "key4": "CUtpx4rmEJQ9nH4YSZDv6AreboVb59waufk1cvkabXuc4t94NTJfy8p45mrouiURfi46924vmMCZzoYpoqXFPFp",
  "key5": "3ggMvcjqXmm4iEDCpECgDyUn1VxxDBYSPnhZeCAVhkJbq2U1K79FCABSgKzGMmUkftsNVUGLU7T5H4ejVxUXyThq",
  "key6": "4MUr88iLWdWmG9kfEkgux7QBKSyocFSg19FwghWH5pGs43L4oZrf9fmjN7AmaGNPYrkW7RScQLRay7g1gWuBvqeD",
  "key7": "QLuvnvH7XGSrRvaLMWbQ4f4XArRar1Hn9zH9xqNNwZL8yWYi8YAs7MKCJhVgoeJP4pfVF4oSJwVj65oS1uxHufm",
  "key8": "2D6fWewbg92r31ADZJXCrKzSHqad9zfKr39GW5k2v4wq67VWmHDzoMTD9tcNLVtATvAT1d1qhg2FuxjtZ3oVDrLm",
  "key9": "412EoXDuGsjQhsKdCC6Y3NYUneb2RdQBY64ms1AGxqWF2erk9JgReuR79NAJ5MJY6tHzryoDFpqBwgV9BD8vzCk2",
  "key10": "2TUDwTF7iqHkfrzR8EBxaBZdGigfjmmtKv1SkhRZgWnXpYb7HXkYLXnosWKPp6Sin2JfKsohVCm1yBehkKTqRioX",
  "key11": "5tsoDVrfkMVfwj8a5sMCnYKUehGZoCSqE9zSmzgygu2ZQc3uothPcNBwjgcgnRzMC9SsrGQwBqUCcRiPZzsvjojS",
  "key12": "52NR4wVRYrrgWVZHoy6RyXLbixpyii33aQjKJhPyzP6y9wVPvPuYHVGXg1YeXpT3GcKwsw8aqgTpvKVKkt2N1Lf2",
  "key13": "W4wQ1vHA1AYjE32ja5L4oBN1SpiJcxmvU3JRXXmK1Dz6o1AjghNqXPdLAqKT77nui4hgYocBYYPEV9uimkDvr9K",
  "key14": "3dmVEzeYpBavPnryT2RBCnEZe99s9mgCBCeDAeqbhtgpC4N4Wsjs21YS44Sog7PTq8Uj4FizYqyZshGnEzeje7qn",
  "key15": "E9m5LdMremMYfgcG912D6tkWLDn9LayXj7N8EqBreAzhfsjsspHr6T3eQfEyZbTzJSk3eZ3sjEeyaMGCcFjgbUs",
  "key16": "2CZiUqLc37kcwbF7KVrZ8C1CkaGLQueS15Vvczhrerzds2AgQ3g1ajRpecJvo9te3fVcyxdTbr1yBHd6ckagseVJ",
  "key17": "2pvjWFzxfQ7YrnwezpbvoCRbqjwU5WHWGiuBHUHZFhspbZ7JrJnUWrxUFPApGZ51xCiE49W1MSY63wTjk3FtJMmd",
  "key18": "x72oyJhowDXXSNPqjoGEyYESqgTcbEvhEycvzEDgWTuGwvLPxgkXDjbBPoDiZvDD8AhtFKDsWSs2pVdX9o3Nm7E",
  "key19": "SCDyo88mg6GAeeinZLhTgQrkhCWZqc92zg5QXZNPVbKGY7z22RfvXs9VeX8GsXjhDRuo158ooYPD2zmbT5N99Gb",
  "key20": "2raa7aUnBpjQRUiJ8ztc9UmyLpc4QCzJifBcX9VCTNFMRb3dFzwtaSUzjxeLPKmH9avPVor1RrBszp3oMHfHE55p",
  "key21": "2xHfXLKEPMuUdQDYNqBWXXgKVq5FdbdUCh7v2PJfn8quWyYT48U7Xc8ff5Rn2AbVNZgu2GkW9EWdZhReVThKKSPZ",
  "key22": "38x2yKJUrvDFyewHJ63aQXPgm4FJtVzz44XFhpoU8vibjhN5bPLKCp4RYy8wRgkm46DbwSdDkyS2Ahq76tLBdCx7",
  "key23": "WR5gE15ZF5mDpZbBdiRsufsKh6tTfVveGsrxFhCBjuxi5fxJVtDyvoCzndhY7Dy4rRYVCq2JLoKZaZMgAhqkRpo",
  "key24": "4icz16zRc2igHKozXwTzvhdEGhEdejWZChw61pWrsQ4amSZLnEjN2But2PQDahSYQcDxAemPB7Aod2eLFWvjGZsS",
  "key25": "5nKAhqviVyfF8dBRAWKU9s18qLq48xnAyMAVjsqJR3QFaD7tp5txBhQzWNXz3372DJ7VHPC9VgJfokyTWWFM6PqB"
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
