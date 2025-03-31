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
    "2PCvAUTiQtMuK1EBF8YuHRgZri1Lm5vnk54Btsq9V1Z6HyspY1XbQF2RzC3Ho8D1o9Ai1XA1dG5ExmUsxFScUddP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y6DEf3r6rruut9ekTUNHudLRgzLop3sa6TL21b6DiWsDTwYmgWo1XthKKwPSnutMjShNS4mfKjPLsPiX7F9Z7A4",
  "key1": "4kvbPT5Hh1qufGMKhiJSaCLYYDRP4x3e89PzPrnTeqGMPaBXzQmP7pB67a8L1qHWM194eeVXcvPNuXfdyDftJNp",
  "key2": "4b8fPanYsqsTQxuYVbzL8gpGEygnd4HKRWA1KdovmP5jDZixKeaV7RZbDa2CgzF57757FMmoCexXKsjx6svUomky",
  "key3": "2UH9RhpX1jbqxnzHRSg15ZUMi7y4eDjVBwMXsK6YqZ4iYC4xAt3WBenc8PqUcibg7CZtQuAyzWXgAGTLmSCngtT",
  "key4": "XmBij7szM1gWmCZ3nAaqU6Wx7MsCASH1Vy4pjdKa9GKPgwKZy34gzYXWsWsZeQRzgFiMb1MEfR2B1BhYqGR92jz",
  "key5": "2Y84KQHuCWKRZrX3Nt993A7G4zJbXsWu3oZNzTeQ363fPprVDZjXHqVhzpu9xjyZrrRGK5TyJQE8JR3YWmxxq1WP",
  "key6": "4RfCeT155BsTvhoqAH1jZzZnFygRtfNads79BWYr1Kdt7ht9qrnCg64pCFz2rthhCHTz7YVPPtrDj9YTN3PmmWn",
  "key7": "5RiMJ4xxPg3tZMwyYmTJQvNAjJpkJFnxJtK6pp1GwSp5ENcQEx7JWiC74BnW8vSNj94FGi6WPj1sPrtcmyzCBLWD",
  "key8": "5st8shNUJcitFhdV2337zs3MYAbe9UKPL8uVMby59AvSe9iu2VAEU8dYyzJ3NcRTGWWawHEyf1h1gVTSEyd7n52k",
  "key9": "2AHKJLZn7wTeHFqivQkd4Jbv68jwEnuAedAFoxMVwzqgbMzVuMjxiKkEmytQqRgY6CECEKEc8GKXGx5dXbUZHdzu",
  "key10": "5p9hK8nXWcqWWf2e95WbjPiJ9Prr9pRiTcAS6hoUBeP3ERFhvcXgKdDRqav8nbQC7PTxRpLaiFunhhBz2mCY7LFE",
  "key11": "HzZ5Chj4uFmkzmnKpCXoMAEaLfA3somz9SvukCoMXnwSG8sHTDMZFU8HpcQCfZLTNcj8BdLRxf9Nqn3L3jXxhnh",
  "key12": "2XXtGtzCjXxc9opNRhHGvj8KvXw9cmUerfbAGZajk56mo3m6M5ZJuwsofSxJAocr4KbJbkWeTF3npyjizJptN2fR",
  "key13": "5GwmFW53t2fbcpE1B584NgsizQ8SVv5P4GNfoDR1e1Z3CZtonrQSB4yMLGc5EW5tznswLbxAjzVAQHWoFFQjCCik",
  "key14": "3M35kFcnKGRNAZqtVKRpuBjYxpiadUfXX1CfxmGPc2tRMsWvxCaWikX6Yf5HZvQUzv7yBojscCQDhPfWLJNZ3UXN",
  "key15": "2MVz8NTYX5QhBcE3s7b93dgUukF3CKGYYE4oJbUwFXfgAn81MZdqzamovfkmcG5Pf4MXEaZXPNWoWtVkNGzNDqzD",
  "key16": "2iyj3nFEZJDqxpWuM2ojJ7QpdvFggczZRKYHgJYSqbMH1B3yq2LLXsFBNKcipkqHMJ24TWUFa3tPfMEFqYQK1P2F",
  "key17": "TYxeWzdYtPGRB2FxSXDmc7PD9SzPFGQY7NeADnJ5NvnKjuaneHJvZgLUQpPiYtBmw8SBdGoZzf3m2MC8YKCQcN4",
  "key18": "5Bcm6xqw4ZMmqHiQ8n9wvoF4PKu6hczTNvceFff1LZS1gtD8oKWsUUyWgY6dK4iSezPjRgncFBtmr1YqmaGTvBqJ",
  "key19": "2UEEuJNUtuR2M8qA8dLxKi54gXwBcC3UCkoux7PHH18hDYZQdycAuEeZ12fbiqxSV3v2CR19zarvYBirMALYGFNq",
  "key20": "66eEiX9AzvYgHBLXnJxJ2Lcn6RMpDn44hwNpjrf1pJvkxV6NiLtNHrrmbBcsDpPLshJL5giTodqpCaZuxoNZTidA",
  "key21": "41juBSa6CgBqvJpDLiETZFT7jJjEn3W76aqgaFsj7QCkxLeqxqBHegseLBCDhhy356ue6nagxPPhMdUdVsUAHvkw",
  "key22": "4QsQGsyxjYYFhe1Rr9q5VBez6tVBNq9Aw4Cnho4ve4Py4Yu8YqWYx24F6u4Zkdycuo3AMqM4yYKsuPLXeLrDwnFn",
  "key23": "4K3hHHAGvHAVRCvHU3CBszNzvSKdUaXDu26m4aXesYhogpRhhcmtT69hTGN6WRJVbiVvBQjE458L22C1EQUZeqzy",
  "key24": "DdtNfxST11JNWwczoxwdNQ9B19gNxdUvAxKkC6ZYm5sZK2rJcrxXzS6YknBYkv3pVA7joAE6bxHphJNHGGQxDhm",
  "key25": "4fn1qJ4cydLYbW9VcnJZuRKaHTLZyGTgdWbmjrER5JKGEvrZEPRu3LRU1o9XqG48gh3De48rXiGKDfcprKMeU3mu",
  "key26": "63bydeZdN7CfxFKzKNATKycj1BpH5HSMThgEthtGTtzRyLYrQDbyU6a4QXdWQikGkAqbsK2TVAuVUnGUqYqeGvvT",
  "key27": "4SWLRPckr3vYoZHXHkWaY3bkWxfqthf5r2cCsBv8q4wwKVETav8hZjgwqARKi8KcDZXjGQwvLFXJGZrLriVXBM1x",
  "key28": "4syeZrx7U4dCQGmLNiWkZA7tbbRUivkTroFNFzKGTkgUe7qoRygTiUftxeEBy7d7DQpa3fA95ei1pkvK2T2VQ2hZ",
  "key29": "Jv3ZkAK9zhTSJT3ft9JPY9Em3idT8KRb47cQQ298qrEfvMuDo3xkkV2a7H1okEkDPw7nqizPo6haLTNQMYk4X9j",
  "key30": "3Jv56KRCx1vZT6ZtPNhPEpUV3GxW57mqDZsfSc7i5aANS2ML4coimGbiVxbmY7XR6UTUF1BohkThkiHCx3DL8L8j",
  "key31": "3VpMme2aoMmmprPuGSMZrwHBeVfTDeP91vrxr7nCULcXbdEpcJfweJKivYAM2HRnuWb3APSyCNVaVHzDdRFZa29h",
  "key32": "5ezw1oLFhsSDKGeECyuVvyrjd9aczKnw4etch26rWuhSJyErWo63vSfggmik9rfTrQ8Bwy7ee3JmStt8HgfbeCDj",
  "key33": "4Cz4C4g6ePSz2aWEjKGqopE4rF6sC4bYT18nAb3EDjcBMZJnngN3aeeEBU4sAhDnLJuiRDy5qXccvYkwuLL5Yukm"
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
