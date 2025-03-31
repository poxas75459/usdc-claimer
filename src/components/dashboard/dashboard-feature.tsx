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
    "4saEAff5RbK5j5YwU49PHcwih1ShcFQvhdPdjrSHCgFVHJCxcSh9RR3QgbGM9J3Hy9ijw5fPivYUjzGysx3oJJ5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WWjxajg3qJCpL43qt3kWBptKEQZbyijehPhx7xsZzZttcqxyzMMmkMgtCFajSv3MK2VdJKaPGNGLeaxgMUKq8og",
  "key1": "4XAd1q7iB4R6eafMpwRS9zxKMXBCzWQ4jD4uTdiUFFAUrKjEwanxXw5i5pgpdin7chejessdXB4mT1CBUZQqd2yJ",
  "key2": "5aTAJ41wcsQ4nCz4cXxJyp8rNQ6t7RtuwTsi7HsmmVnNqFQ7rpj2wEmubm9u5urJ6Pv275AocLp66a73JztfwFo2",
  "key3": "34iNZFnV3m2eR7TqsdJ2H8iTsXGwLMtoZWVN7e6EGJYChAPfPBRZeccNXcEJ9Tk4WaQDjvZBd7yKbfihfurxRkUS",
  "key4": "r4hprrha35i9yAMyNXY35p5xTU7PQ2EHpvyWm1wCLNVYuWkqVgZ1HpMxPF3R2TdZXqBidDu1DpijtoiJYaQNjPw",
  "key5": "nzZ3DwEFfNcAQRWugWUTMecgGMQNUhCCo5BTjLKADR82wdgvPSR7dg9EW2ETdjkoTpgonFPWQ19HDDamtuD8Ue3",
  "key6": "3U6UXaJdtFmLFkrRpvL8weLGjTQLbZRzLhvHtBgoZeg8ybV8qgUMcHhk7fJSmNgUCg2x9yePqoPkzWKT4WG22xpU",
  "key7": "2AqLYqrnvPAU76XstLpXDnuoitYdk36vvYjNV1EvHqanWP6Ayb5uQSGUtfyBf5qfLeNep8QiXKwaq1uTpN9yjENu",
  "key8": "aej4DoEhyFcxEhNCNtiKyL3zQFa2RRyR6tp1cAjqdK2XbHGVeCNnrdbk1ZrXhYVXHYFtWpPuG1DnSFJ7zCk2rby",
  "key9": "3Y9Cy49Qv7b9tgv9ncNJKYYT5knMrqTaCJKjLpPshjJN1TpBXxBJYsaDGoqkktWmtQYtdTsjzvpsVVooxP1Sp4dJ",
  "key10": "4rncexvm2NB3oks5AkzKxWa8irXqKTdji7s9v9fRphcYp4HjSgkJJM9hARbdKAD3a9LkfbZjTJUTJ6bQZ8EoNqu8",
  "key11": "3dDUEGsjD4V2PKt4KNWvBDC2YtjQjg87UTviRxCFvY7UXzqnoT6qggtzacxKWzXrnYTufdv5Z79RHGKB1aMgfnCr",
  "key12": "48yktCdGH7bjKuKhgNJ2ShbrnxSW3qiUiUM9DDosz4QAPDgn8ffAhNSXEAgooMtmTeUp68pwWZ3fSvFmr7e5YZNU",
  "key13": "dvbuRh8NxkbEjJqhh5dYPryfpiW5E2SqHTQKLHrgiSD274rYVypDJxY7aCiR4fmVX5QVmAj63LDjMHnUh6qEEXx",
  "key14": "4R67TvLJ7hi8CsoEWgo856dg5ZxqNDA9u9jDgrMU7m4DVuhqqThHXPPAKNkXrt5QG415yvSb9GwG8jmS33meXh74",
  "key15": "3HnQLuajGouKogmEdNHUVR1DWi9Q33e6RwZwetFFVyvbW4m8rZ155Pzh2SAszgnMjYHgMBCFHjhU3rCzC2tbyTo7",
  "key16": "2FuZfT5ZCy7chwWjtPGj8JUVB1ST2LiTWiCyqxobckd6tSHbCv8DduyH8wyUJoLbhhzYpcvmkRSiPAZj9omvgScb",
  "key17": "ufB3KHyXooYrtty2B99AMg4q2gaNZCUrEwCWQCtYi6E5uzW1i4cebJZEQXqbkEpLSxAjtTrzNSxXNc3vmgAv6Wa",
  "key18": "2mzZUjxQWz9YYMgCxJF3txNn4XJaZNdGRJ6dfhjnkkYfTzRAFvrahRELY3ykoweiaPGXtPZ5oZesHdC7S915zQ7h",
  "key19": "2jz1YN8Mf1gKPajbJc5zzYuVVQo9tTYx8evQ3G1xfzMfiWtCXXn4UqGhs5jLyVVZfTvKehDojRhoUYTJ8A1qKFvz",
  "key20": "4dRavmq1BzxXggMWiNjTCVoSWhfyBaToyS9XP6Sb4AdTZuJtCqnQi389CanMswriTw9N7vEiLPxxVeU7BSgroS9N",
  "key21": "2pBFLCRHvUEWb21mcjLNK6PZzmw1TJmdB9ARs9XKQu62hf2dunibJRs1rfZj2AJimzEbNkbktMZPSUVh8yp6KUwJ",
  "key22": "3UJ5QtB13Tjop49LoTXeiib59cUoRHm6EZo2TJw57p2GLCwhvPy5Rz3JL2i4wTwpbeLFhd6Gvmg8F87ANcz51KHr",
  "key23": "582YSMG3FzsKhjfWgzTEmZfHX2xDKXu9pAjLUvuogMGt1n1iQxzVRbGTy3eK96hkUu7DgdiYN3AGBCn9PBHGB9JZ",
  "key24": "icykA94EzX7zQj7yzxURHkkg9qMbicRqnNBY7DWKeS3aXRDuNp7vLc1cJa8rfnuLVqzM5AEy9YitiSisfJx8TKJ"
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
