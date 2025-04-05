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
    "yQ5PiJBNobJD3fRtTMrFprkv2v1vWCfnqgWdyTMgUEix31inEWBc9MPr871Tpd3YbxbFrLceKfNBGB6DZeZDAvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fWXwLgqABJZznvGCJvD2fGPdBbkTw7iVrNFeaWYiwTvV6nL2fGKMYW9bg5HtL4V2ZpSWSRX1SN4ppperAateaWn",
  "key1": "5n5tQGMVWJzMGV6sFisyFGbrn1Qa3GuYjXpnpuBTS3kstKmFakF8NFNnE1q34C5P1UXGhhTA3uy3tEV6yTgeBdY8",
  "key2": "2stpnqJZkB6nbAQyavT1frFYqSu4rLFiRg2KkYRH92ziZqpgQfKJP3fRJEJ9nczS7r7Lmh1aFFLxHpYBoLLJXQTa",
  "key3": "DCdpe7XNofVYGCe9pqoZqhvxji8RsJVzvFe6e1cz4SkqB5QgaJfE2thPbxLKF27i1Lsz4YwznUa23DNjdVGjRqS",
  "key4": "3xzexA6vxHPfxXxCizdk9Q343fJa6ZaUn6bihCkpVumMSTnQ2AE7HMtps32j9NQ9yVJw6d23gtLz9DdLg8HyZXuE",
  "key5": "5gHyGhiZwSor6a2mBD7uVJjtc5NmjVCxwcGZ23VjSzAPqXpP9G9xXoAy39Nwy17rXJvFep4P2pUbWGqQZp9J1aCR",
  "key6": "4oS3iD4PwPBu3vsf2pf6e5faXK8MLcJdfqxRz7JbSdDAsEpQcf258QeDnJS1tt22YEr1qZf5Avn2t5gpyxMWXv8a",
  "key7": "5J726LZ7yQ5z8kSr1Qfsbpu4sRAXc63qrfHo5VBD2867axjaz95BBrmdz6yJ3HyshWVcqAXfTJDMgp823ByYNapj",
  "key8": "5r1v17QymL7mz7uC48VpBsVHbALm98ooWiJhfMZgWC8h2krEfGrmJndkrF8SveeHZGnhnjStad7Nrfzg98eucyTn",
  "key9": "5zBwGWG8wLpDdHWFXAAwXjfy2pDZ2SqPThDsxDDvAFX1KJc28UT3vNWWzHiBRDKS1n17wKUgc19fJdQSdmWXNNwx",
  "key10": "5NUzYyvqxvJN5gEQ9dcKz5K3Dp5wDVEs9XjsTgDvaAVrK7y81C9fvThiw36VUngbVd24sW7VoLbZaQJqNCqUSHao",
  "key11": "21FPxxQqgWuMDNPB84NdsotqPWbLbatNnXWxNrLs3NcMdTSNRHT9XLHvgPB7tKeFN3wTAFVxe8JQ6kjwa9t3Lzq7",
  "key12": "WecJnaHgdijMXHj8P98iMqZqvg7wfC5BKwcyR4iiVZD18psZK1B3pEDFMqWcLeUkR92mTLJnGpxyLcC1E85mmqe",
  "key13": "48Ljwd82Rn8G3MzwXFpux1eAFh2BqSmZ876HaiiTXdZ1oMECqgqiKrR75YjD5ar1zyg9JkG731pWQjaabcjWNXDk",
  "key14": "4yTefWKeyuPvn4iKDESuDywNZVG3ab9H5aZzu9YiV3NVxzMtg9YK3zJ76pxNVK7rKupTEnquct4VtdMc3z1ckpyU",
  "key15": "5jkEB7BM6XLio5YBqSPdSUmsLio7TY73XQvU3KfYbqS33YLedSvERqcfqqQGPBSStDNbZVRC28EHyxTe7R3VbASA",
  "key16": "417jpaPFY2EGFZDHLUimgzYpjvNw2Fdkw4UDSTaPfVum8tbLBuxCWP8ZLpnvKjrjwxcXawm6EsyCC3x1RNWK1vnS",
  "key17": "Rej3ghEnVzmoqReqbZSWmiMw9VogEzNtrJBSobTNotCUXumAEFxQ4CUvstq2YBifjHqYwZy7BDs1pbhK9MpnLfn",
  "key18": "2jD5iumS2b83QSCoEBm5XRaB5cpxv4uPStjn5faYinYcxzjeLaztoM73hNKEuPFmpYwctLQoxVSvKbAjQ9YWU3zH",
  "key19": "2NVifY5dQe1zkkmjtDgJ2MY16hJMQ1WUwzxTvHESkrUMV9LHVfc5HLo8o6eV6NxYMNJkwibtj54AMAMtZHpSVV2R",
  "key20": "5HyY5TcG1182eZoaKUrs5CD5XP29gtAsCdWutAHzKD5CCZicsL5iWJieBU35Hcy7pwnqYPFdBF8f2vvg57BTyBiB",
  "key21": "5DRF7k6e1LRG4GcFZg74V2jXDW8L2fjWqT9T22eEoNdueeXkccZrCW4TxAScbZ79gkwHZ7whBkFYAgjMo6FFmi2o",
  "key22": "4SCd5cYia51B7nikYJf3YLjrxZYQVHrmF55rvNaN8yBLcMYLiLfTNKUFNEVyiBsGAK9b6ov2d55My4D3Xn1PFFCM",
  "key23": "29UjFWMYGGHwoWgGaCaLmJi3Zk6T6vv41AiYEXXjk2C27CVK1SoHRdy2jeS3we9SGKeHhUKUL8bbVgtFP45b7Y9t",
  "key24": "5Ga7vyrRXgcyGmRaLMZvMszDmtk3wTMrgEcFAAYhWu6mSUAwngw15r9cGQVJ5bMBfo2sGJ6Bxc8qzsoLGftEbecx",
  "key25": "6RT1fTi2rotJR3ViAXdYKjHSuNXCpsKSiWwu6i4Anqai7GUby93f3EoG1y4rXKLMVwHJPq3EUxQxez7kyYYc9JL",
  "key26": "2JARPo1PSkztjgdzEfK7PvkXhi568Ga4u6Lrn9qu9utphbJB948GhfMJ7JWBQi9FFbF4aTKuGZ3NqmN5X23bekq2",
  "key27": "55MMzcUoUMg9fDhMydk8WqP1bVHmDjXVzKpyLVoA4UYoSa3YcyMxRDTmnNvUfhHe2vDS28DNPDVDydKS1eicwpbR",
  "key28": "2shdfXkTHQ1ego8CFCzwjkqQjEEZe34Dc5cycPFBkbpv37BaWt8zXN7xUZGuB2jy1KMAdv27G7R5DWZBf4rVEV1p",
  "key29": "4j3ocfSfNxbfShAqk5r4df31TefTXGV1NqBjcxb2KfsNawEH4BwwmxqPkDhVxU2Tg6RGXMeDQt7rNki49F15Ztfi",
  "key30": "5mhKSeYLvdX4jSUDcF1H3sB4YKnDLH9CYF8YWZVUyRTrB4UNAaD8a1ASM6qirSJtYEUGUMWLStETM2TDjDaqhy7P",
  "key31": "v8iWskE18Y7gakX7Pp9Hv3bPHkuvknhMBHj3X9RGNtzp3ztaLbCbuqgQFFTSisyzdTJTBZ8p1Tnpgjb5hJDaJvC"
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
