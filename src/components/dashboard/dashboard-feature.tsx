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
    "5vSBvyTivZTLcAvgJponScFUDWm27JDWJ9CxWZdYdv2JP2W7fWLtdpzBjUcviuX87s7Q9yKyNpd8pivyK9ubtbEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jgfMkmhBmac6gXex2UjVrks5Sz38e8fpEg2MLTX7LGQWBEjGQf8ME6HcuCuVR145LifsviyrCE9rgS67Qjg3BDL",
  "key1": "3tkyy6khug7GCrvWPwT5QpciytQXVjSvoGBRCVDsXnEfqXPG2vW7BbKCr6EALjL8ooZJ5Utn7fokeQkxbC99VYuQ",
  "key2": "29Lh6EEpCtLTtwahESRwG8C92mv751SunZ82GvBewCBN5Ai6odQbfXLw6u3AxJiXgfyLyX6rNvcKWJU1g5uDGQfA",
  "key3": "28RdyFbngjs9tWtkKkjGWL9bpQ1k3vg8D3Z3jBUToi8d1xTQh1fxqxPYnTvimysgpig3eTVBfYhc2yzLKXzRqT74",
  "key4": "3y1va631zT4nfHzoKktMtDYXiB6HZ8tUqoiyFwjVFExd1XWABt9HZsj3BgRuhE8hazRmrCy7f412KSveanfS9yTq",
  "key5": "2Y8rKWvT6UM9U7A53wyMpKrf4GKbdu5iGUpQsJ1HrfrmMo21PKzRrcFZyBsgWNfmAjbRNzGNXTpEUCHiyM4Ez92N",
  "key6": "5erFD8gMQcvkZaAcWacRyggwzZKnoBrpDjvypAWX4LRbac9eAK9sUc8YiAYXa98NB3SvV6TXH399GCt2KaVTNH4o",
  "key7": "5NjhnfS8zFhkjv2WxhR4irpGnaNjGsSdp2pfRzrDAn9QqppjrECjjbkvtZhPuiZ2hxoa9MpL3gSL2nw1V61YUQbi",
  "key8": "624Na1WmLMjVp7A3LrdDLPQ7qzpe8ViYCsiVv45hRpNPRr7x2j8BXnR6e6HHpLzKmj7NsU9ijPC7FzV9dZhFR7Pe",
  "key9": "4GARY4zEJVfE6gZMNP1AvQzu7uuuX5hgg6BsTisnF8vWEAASJSfnMwyStcCQxALbqFbLypiUDFBthrogGM52C3xZ",
  "key10": "cuhGgJ3o1fyCwHHzT4DxBVHmfE3fHAvAexQjK2ZX7WpUdBzCuXBeUvAfA7A2xGekJZFQUBLnYrhPYsragmHGuwm",
  "key11": "3YyEBzrxfcT2WFZYzMqXM1J5mx43qohSEu12MBKkJuo4r27vBt2GHbNg5DivhbauVSBNooTa31VJi5MGfnBBQi8m",
  "key12": "3AHRCR2ojKDhbwsSPcCDdZfqznWPNwdWvGgYMtjwDPKUjoqs82uNDCrrtE6bYapobc16aJNpRiViTT94UaybKLhW",
  "key13": "5CDWFASzD2t4ejD6V2UNSv5xaMyUmEiUdSBqhaYBkHfDQo22FtJQXGkrrSj5M5poViszV3Wq5cXCY8yimcE5ufhH",
  "key14": "2FW7cXdtzkTEsuChZ8SFucMFjsXU6AThBSvFawfLUnGcxLMMs37axe56VaGCn4LexsGa2fmwJtZ7hQhi5q1vRerb",
  "key15": "4GjozEQnXAdJXDnNSBZVTC8y8x1d46rawK5wS117YVJmtdpZBRmYtrwZNyAxoYuVTt1ceyqLz2JnfT66NhWH4QCG",
  "key16": "67PEtxuVrxYXhaUx1TD5WtEP9nLzYXvz7ykZmZTrLT3fAJqK9x9erdL3x7tNQj1SsyZJgLR3nBXESFp6Bbbo4gTb",
  "key17": "t6LGfVxUQx8ShBJrmcWu6hRnzZHDyQZ6mHeQR2sUPshHXAhubJAm1hhMJLW6VRpmDjMFLSRJ7fWegn1bAt2qDmZ",
  "key18": "334TTvwngo4FYXdrJ23wTpb3WdDR4adzK2mR2tDEfyumsTYTcDuQZGmnh5p5GqfSyxWuTqZpLt9iKuc7gFRGgY9t",
  "key19": "62tgwLi31p6B5oN9v4kZyqgtkHBfZyGu5PocrteZLGjPYzku12QACDPUNteKSFCAmg9Kk2ekLhcjCcM4CgyBgZjh",
  "key20": "3KzBkQxcUpZJLXrgYLZTEVQsyRwYJxirxjyRvy9BKZ7MThmso2AqmioiUebJ4vz9zrMXKdUgycZzPaBxZZSTWKqQ",
  "key21": "3gcAEyadkfoGg7zw8WtWGjZpnEMhu9uiiQyLKYtVJ4Lg3JVhHoecWx8w2FYtJaisj2fsf5rW4vdgKjGbu7uFTm3Y",
  "key22": "3TLtyAiXifuCYpbkT4v47tJry4TT9Gi1bYXXkRutL3LgZDcipARpPYZaFiTY73FtkFhxuaJwkrhZnXDRDeejMHjL",
  "key23": "DdKuPDzHy5jVaBTSGgS9nSE8npn9tazJbS4mfZ6K5hgCXtntZa565BuveJYGAbdppokeAgbsBHj9BKC3K6fBM9H",
  "key24": "3HR7hypuxSwhmoNn9yYXmYFUo4gL2i9CzLKr4uAKavWYeNj5BNnEBRkQk6BH9CrFWFLMPAfs8Gzftdbes72xufaZ",
  "key25": "pyMmZaB9DB7vhbwPuWgaNX4Enf6RgrKvr385gaTnna6QzTG4eDUoCSV6ZBE9LQmwmsTD9gs2ijkXsAc9gG53ZY2",
  "key26": "3NTCtty9kXKA3FCPiS8G2jWwwzqt7KKd787dxX1PZmXEm3xdivEcA1gfLuEa2VZYXgwWiJRuAAJ9pj5znHpxLc9V",
  "key27": "4GZnV6m4P7FgKmcE2hdCHxwLo7WffENLoacoG1DpiEZSAarA2dCM2knNQ42fqndxMSaoYR1515J8qDJmqVWw2cLU",
  "key28": "2pBzsAU3XzTLeitoRfuAk9NjUEmSJxawHkSXo6Vc2A8vKHhDuGTGy4PVzfVJMc2BmgcnjY4x1aChuxgFGwFHuutk",
  "key29": "5qNtT7kYFjZYi5rfzjL6NcSmtCvSFy3qksgDv1xSunBjcbC29AUUmBex8MfrQP2e3tsJfCKzDNXNkJhvNKCq9V5W",
  "key30": "4X72TzEpLjRLQu5nK15idmpiUsKfVNEaub7Za9VLenAYJKkrRf9wJ8E1KRdWKiJ8GSSHqTNiy92gGdHp16PvzYxU",
  "key31": "62H4iHg1EEhBPs8FV5pKmXh4i5Qn6E78KFNnx95QDftpsixHM8E8SEBES9dZQsqbviUupsHMDMEuBKYYV1u5HNwo",
  "key32": "KLmpnKEfmW47kCGtKod13j2ei4TfHghr5dypmdszpBz16Ui6FR9ekEuVqbTzP4mfTHhBmwr9QuYcQJqbT99sHfC",
  "key33": "zgBwYSA42zzpe1RXTw1bF6Fipzux1nNNTokbjmNx3STi8UT4NLvh8e2EyC8VrFUJkFCnzUFSvtkKf3hF13kx48Y"
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
