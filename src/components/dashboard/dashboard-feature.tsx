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
    "WMtUcqhK7aMorJbomdy9acERT34LCjDN3x6buU566DYV1pfX8TMaNveKFLTMNfdUmoh8ftX57jS5uPrHg2unRtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DeRRJYCkZkfS298UeBvbUVV48MA7BwLngxgTByAJdC93Gup8CXQV3mfU81MMrPTWMBSj1jo4hNxy9yXo37fZurH",
  "key1": "ymjxkA6ARu33TBwYj3aLn2qs8gsLeMoe81rhbknerTwVbmzsQB1aonq4vsxDd1e8kp5dRX2A6GTMwKJPs7FueGd",
  "key2": "3txVHJ76ASGte7pChqvfBv7gUjhFcLPvuHCxAUVgrRZVrLzn32Uejm8RSGU2xh1K7qgzLWSQduKUuF5YXhV6WWuo",
  "key3": "5RUAYCfjtCKjkqSnsEUwv2acRhAcHGQujVChXAyhhvVfN3zo6tvjkDJUY4NEBP867vtyKEBcD6GLoRsRCR857scp",
  "key4": "3HJ4rSZ57qUFq4vwnEiKVWQ8cYeYhKyQXm9ih6zYq3m3ds7LQQ9az4PcawQT7vQrsLvagBNShGe5zjNF3f9ohQuX",
  "key5": "2PSpBJ8cCukTe743Aj7xzaPsR5R7o1oUPGoaqW5XLmG2vAocF39FXbUMcvgKLhsonR1EBNf3kqMYsUCe96x77s4e",
  "key6": "5oudAZjb8Mo3HpkNhPYdWq3wWFwU1YPMzqdd8eS853vrmmkPczGKXqNj2GRe51koVJf1o3hnGsEYH3WRShZEGdzS",
  "key7": "5eh2WqD59iHmB2J1KHpFDzgJurSx12Y9SQcKzA4HJB5gNGNVXJTVuSsVLQex1F62YwEw2dwb9yzpkpgUzsvJKRhY",
  "key8": "4iigaZnfupjMQ91vLA72wRwrZc1zy3EwJrjvLwHA5QnREKwiFoUouCPXAA2QGkP7JHt6c9hKtQ8yB7e9sM5Bihn",
  "key9": "WuNMoWZhoB15eEMTPZCEBy7XhQxQWEAjgZRmTduz2y4SuNk38K3Viub6xa9z55Fi5C2C6CYkoNbbZ8bAHGju37f",
  "key10": "2tq7yyeRqYkq9bGx9cVi7f5HpLEwyiZUv5vfpbmnEBnLaBByC4ARZAftGJzxPwD9d9xhVCSpmT1m1ChiBWKxySwf",
  "key11": "5hhodyaKVLqC3fcYwa9KoX2vG2kXbNCdEwwdh6sV8Hwd5WXsg57KjMuGDznr7xtKuaKEgjUEnBUt3qzTqMU5GtYM",
  "key12": "5kn3ZWPHHGNdgGn54wBonnXNRjTKdiLRQT9fw7BpwJUdPvbiY8yG6H1i98wzg4Uo5EMFfnvSwbZiR1m7oYA1Adph",
  "key13": "eAYw1NFkZvk5xNkRFcatFS7kyNzxLMyLeyyqV7QgsDgZymPdy7j52B2ptc8E4b4G9VqzZj4UP5FYdZWBNPBFdMH",
  "key14": "3RuyPfzjjmMhS4mu4iQqrNy6UWLo8vbzXLTkqjHihuSbLrnUQLh7Fma4PmzkGBrx794VeeFs1UPkj4X8rUewhG4u",
  "key15": "4kTd9LpfiRvsdzHJ5xv6ZfpeNvN5hurhrMoAM5QshWNnUTK4kom3P616YucT66v9iyePu9Xg4ofNBj1fVwXUVrSB",
  "key16": "5AwBYhsHVsS6cmmJ8LJNHz7Wvz7jDHz6w7kvnX53XSd96sudqWT7ghjU8S35GkWDgutqv9j2kxPFkDB8iLFYHajR",
  "key17": "4bunxsjd7UCCk2V8owDERMP7iWDGXTNeXWTZNhrYTyhasKivu99XteZ7sCc8pw4AKeaqJup3aoGKKjB2V7ewbZus",
  "key18": "24UPKMDBEhJZpuqbEXn82Dm3VnKHk4LwtoJQo5kXAbq6CWYTJEtisuazCiBayMJtwoeGZf6zkorMsn9E2zPNY5Cp",
  "key19": "2LCyFKxc6Ey7UG4QeCxy6SW9xaGMrNv2fxWyWMLALKHcHrLiA49AC6dip1kfG7copkgAqTTqMphVEX5SsWDzsu7r",
  "key20": "4viVJtXaAxsLvHDZbLMYXoeeeyTK1NXm792R7PA4yPgUuCQSEz62MWucmVm7CE8zekEVqsoFup83NczHYDxgk1bJ",
  "key21": "31wGXSs5v2Q8AvfK5XDfFtdEsJ9uB6Eg671SWQHabAznqPYAE6WyAik6TNs4iCMUCYKCkKU5LrBMUZZwsDX8Nwa",
  "key22": "2sDTawL5dkDdCz6cRA1XW3TzeVCrUGFo8jbi8r3KxxqMFzwjXEgQfmQD31eDydmDTMELKfhuJky1Bx1JUG3UJTqw",
  "key23": "5RpBAfrTHsubEMWc5N8GvnTGRmwHPUdLQcrCLWZY4rhnUs55r12UgCUsToj86wZMevpoEfCgNTgpVVP6JYE6Vmn8",
  "key24": "x2zLc5HgpK27aCpcqpXDhbwRkbnAgUVofpazN6kdQNpZatAsFqhewmYnzWVsSB4LaogpFEiM4xnRwQYjYsNAgqD",
  "key25": "64oNkDq3NpVTYpdou5H5GtanwrD3AdBx9FuYLqNsiyvFWcC6fRbLxHwC4A8sCCoKzECXHyoxXnoEbbVAVNiXbRQ1",
  "key26": "5Su96eLgb6R7NV5e8wo4wT9W2kweQ8WaPfSNi4TZ4WxHju3zrLpZPabXgmWsYgNGCXnmJbdZNJovMxn6rmYKYguD",
  "key27": "5exGpLbc3UKRHuhs2dHexaCz826SC7jercNf7XTHuqEk9JeHn4ETDa1MbXJBp7U6BUNDHRdKzauUGzTQfjDdQwNC",
  "key28": "jLoZGz65Hy82c31yMNkDtBM4HJfNbX5t2hftYYR6YcQG2NWCPZFM5guUvNR9PbAS1cNPCL5iezv9GiNZw7mPRek",
  "key29": "SgeU7ksGfXKFmqPhhAeKKUFViCHapSXq9iCtxqT97mknZKX78kbspyoXBYwvjDQt3aJMSqfGApG31fajvAs81b5",
  "key30": "3EznySSWVUREEfjfUVP6ykzNmv5ZPe6EhDn3uBdGp2jNeqoe9vRfwtmd8G3D3ysx3gyTm77cJs3QhNCnm1ccbvNE",
  "key31": "3bVMR65SkfKmhw5oeijog2GvP5E68DrVVa2cLovUjcWwhm8dzyVRyPy2zimwhgLJrhKCGQ6VAKyExDHVJRt47ob3",
  "key32": "LisDactAudhttMdG5rSgx7NY46WfB9hqz3WB3PCbbbMhfhaMTbeHe5JJNzMJw7SndFbza3ptdbGWb42VvjAp2ax",
  "key33": "b8cHWpNc4BwV5xqZ94SKtqnNS31SU9Y5xiND2UF2tvFp7znKevJoeNxUf6aDDUn84FfozkKj5guvTNX2dMtiSxx"
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
