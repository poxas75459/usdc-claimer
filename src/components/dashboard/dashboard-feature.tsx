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
    "2pz4iM4UCYwhgi4MSPTMVdzbFYrTTz9dM23AmLrnDoywSTFE9EAk1n71iEFousVEvagPqqysiK6Jcw9LHt1XmsXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ss7LaiePB6T45rnpMi39ZoF5QkSXdcHtnV3B2iQhvE8VvA1AjVc2i2FCD1WuVfioiBy7K16vvEqkFHFuy5qcxaS",
  "key1": "Fu5s5Wh6xtV7Y7ZEFLVjn9LsyCfxsSFPZDqNmfkSKCaXEyz84GXozUvKEFevdcxR3z8vn1fKmxrggsH1koqs6gN",
  "key2": "3uoAiTL7Gx7pjE6aNPr5UxsFRd6teY3GdAQxT8RW54AkAkz1iXgyVgMMKXzbqhdnqpX355LpoSgH1ihGpvLhaYN9",
  "key3": "37NHcfoGxz9AFFaaEciT7BUtpfGXiT5osNyMXSPMayFSTjKs2mwvsNvt3u3FRCt1HmYCFaPQGDJvfeRs8p1ZjaMZ",
  "key4": "2hjNBP3GEXDVzRUQJjW6MGgtMM5pPe8WpdFVKkHWxRajLKTA29ASdUZJBKy49527jm91JjK35axCa78hc2iPM1FS",
  "key5": "368EWeAHPeXHhDdxG7Fwo8X2voVJz4ZQzusSbZU34EXSWDy7xCSd9b5JBarEnnsBPHfv7SE7shFf4eRQvHk8NLuw",
  "key6": "RYrmHX2TkzBJCcFEtGZQPny9nqReGysA2njtcPh5TB9f9ngSKsrsLEL9F2Da7zUCdQr7zGt4vGCCDLRWHPXUcLP",
  "key7": "2eSW9ySp9QMZW2n2QtBPxdVVvBMPJhJ2JoXdFbpjBRo1uKqUWC3uU7TGnEaBLosEqaQ91ygbyDJ11Twe15wHem8Z",
  "key8": "49XWz25ioU8u1465sqMFGiKiEeHBEBXDqjDsic1yhL6aHhnbgmTkzaChhN5vEyZ8KvSPhsYLQQ4jwsn2FTbVHhz6",
  "key9": "5tNYjdZZG2wM7K8fPzckyfuVsNZgDVoxtUzttYwdynrx2RM2KYiSGFBjz9TXBB5Aafjx6LQp2UZxvkseQeqgMV9h",
  "key10": "3V6xrD844pnCwkXGQkcvWbGreJd3Tomot6tAAiKgsgXqQMSTmSz1bfdUKwbaqQFsBs76t8NyBD4W6FYjNjj7w8TT",
  "key11": "4mWAstici18zFqPtaWxhyz2QixqS5bYmMniAZjgZdq8a9pXN45izgCV8F1A1jfgAY3yosJAKAE319KWZ9zUu4Ct1",
  "key12": "5Zoc8FfJXTtpRfFpbMiHx8Z8QrtFtYgFhqSbf4eqVbEPVzke6S2KbTDBcQPPrc3TMm1YQ6646yQqAXnYR7xJ96zQ",
  "key13": "Hk4rN4L4KejNwR9gzbs1XByKQGeFYAqvj9ZsfifRDfTbLRmNaTRNsXvidhfa1qYxudzkBL14eMsdWmjXQpxoS7b",
  "key14": "2XhkP4brTXEuFuCp7wYMZoTJ4XCeb5UMutGsLdTurzHApzExQy6bv7ityyxbxowhW39EPnczACzs52G1V7MAebKq",
  "key15": "2Db6eJupnmS7NGcTFhjzyGJSQp6xze94BYiiG8ieLFMiDHqTLnuEva4MXmsPA3vjrUqJ6Lo4mnMFSRWwAFnUFQ7A",
  "key16": "2fjYAAwstGykeVdS7vzGkfXmA5nMuRy3pm7YLHa6YqH1oyZcvZs4XHr7FJgkLqTnRkwCGy6DYaZSC9bLMMM6mEVV",
  "key17": "52VRvMXgVfYqDQiHXCHY5qVAQ6VUqmCnR9GncdWUopXumxY4jNwjsY4QdruPuayLYZKyXsT8GDznf55SWYbygbtK",
  "key18": "3vNzLhkqRA9HnEbcArvz5W28iksk4HGa3r6LpKLh5Ckkrm2FJoRW3aVmxRBtzm8YLjiJsMEnLhzg1JWB22cSukNp",
  "key19": "3q1Q6AzBwAPScaTd24oGbZsbRaQ8yza3SMFcCzNSHsY52oN7YKyowqg8NKv4ZB7mCdvUaRW9M4B7J1K7ay1SFECg",
  "key20": "3WD91nkbX3wdcdBovrxjE6TRH9B7JAopzgmJByh7WVZw7xGy41VRx2KtKdwE8FFuegunsmt6iihvRd7xiS3ajiER",
  "key21": "56bHKrmA4LY31pZigMeKJPuTPqa8XtY6STiS6bpS6xJNJedRprCgNGZ5ta6rj293B5G2WJpgACedMGU6WJyXDv6a",
  "key22": "4myEJZmQzYgLMTx99CykegAxwKTd3YE3ZAXPhy5fd3Su7W8Wv63PSUrjoRzJaJhQWn1d6H6YJ9LJPmHXBiw3tG8u",
  "key23": "2iPRXMQAt6876X67ZNnBgWcuK8aAbPkuCUfvjyaqmSBksnYpj2YjGQ2F3qgSn3itUDqZLPevY9HZ1TKiC5atYQdp",
  "key24": "TNfJ7DU6ZjzpJ4YTWykRma1hG8G7x1wZ7NCxXRZausVnn4PnMTEpmMzPuzbLi13jVgM297rKvZmvD59kuhcKc19",
  "key25": "3twHPt6xv5f7CAd48ituoi8UKMit8VK4JD5ZNJThhf1K2UEvDwMneDwFKKKvsfMfptKxJHyqrP8XZvH1KVhL14sP",
  "key26": "5aiPNeAzgjakBUNSQrhjWggDQc1n2M17hukZEckaEVXfpp28ntaVgqaK9q7Nbi1TBMnzuKmbmEvRRUnbXbuGhUKq",
  "key27": "2pSJsUDVqbdHTRu22GVay6sHe8eBF9L5ymtULMWV76RtJgZZMV48SGgAjSkUH12nu5RtRXwVvTRdGcGozNLUv9No",
  "key28": "eFAphaSA9X5TzQ9rzMoYmsVjxk1f53gG5RwMbjfNUKL5EpWNPSNxNeP11Yb7SkeHs5vdkL2cCnZ8JmbLdjEWADR",
  "key29": "3mwPXTtvxyKw4kQDeXA8DuSnUE5AQyed6x1s8kVdTncjtRUii7Zw5hfTE1Gs26tWNDpJtUdVtNHaHUEaZq3LMN4X",
  "key30": "5gEzaVq8uEHbGGyVxDqLyf3ZiqoqGx3Frr8yJQMVpaboeq7mWcNEZWYag4NL3MoGGZuaBE51eXGK5e331rnDPxTh"
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
