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
    "9vqfnUibGadq2kJ5bhZN4cMPgGDbWyvj273WSSaFPTdZTHUbqAQw7mYPBWsUqNnz1LdX5rRhhzuAiizVcgtumJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CCZkHZ193r1C2yfyugUrdfvt3DRAjRR81kEbhCGjYadsXdUPJPJq8rzmNzqXhC5y7Bsm7JnsxMpMne5BWqVaVZ",
  "key1": "4GifSmMYfKv7cN3UBwt19HbQUF9tTVfMK8ksgmoYs1RsaCiLNXYaJ3bNxJodfD3D8uZgcaGjLoPaU43AgpkQfG71",
  "key2": "5N6WkLcpR5QwuYcWMbw49dj4RRjJh2TBXReZ9MsSmH5Ua3qYuAqbZ6uUoMNsbyxKggvxwSVwyc7FhqJVAA75W2Jz",
  "key3": "aS9XQsPav653Fm3TEmNFp9YDtVfA1hwhRcmt4yfstqxNJtGQj54djZBp6Q7M4w4zmgVHCBmidVQWdDCEg7LwTYo",
  "key4": "5VzNKUrtZb1uH2W9Hb9Y4HSkertrXFMa4mHdQCEnaMFR3XThgCWD7K5epJxRpdSUAGQYQ3434ZGvjBEFiZcuexDg",
  "key5": "mUvnzhzA4JXkm3aN8jB9yYsGUMMSyXysnbguoFipcgVzZXGxuJgNWSpgUAsQ1bYvx6ySMv8sDZ5SYkNwm627qt6",
  "key6": "52fTUxFevYBqvpqjM9RWZP9hBs3FQ8ngENxGb2RcdD9b2URw6FVmJfakh2foN6NJseDRyLoCRkopiYQuf1sggP6T",
  "key7": "54dqEBynHLcKbHJ2Jeyak3kXFqqDDbcpaczybUPwsEWin9mbM7xArM8PZvqbLptDdwZ9rGikTDeC1Xc6Gd3cXbUj",
  "key8": "3dKxgznk2s6dAej4XhmrRw2q2LthQDPoJotQRczXxNJMSUNZ4C3Zyi6p3ZrD2ii7C5CtbARp12yNr8xoxoZHJW3F",
  "key9": "3fvXFHTwahfuXxdtZ1wPvuoS548UhhUTgPUSQHihFF5bFrB92mCmihgkvNgW3giWH8TyL7ZwoAKUZQF6c1qMbfAi",
  "key10": "HNGdhyAm4FWFdKHmK1kzczSzLjLYCkYEuc64fWZqqKy5oGHzHsFaAMjMtcpd1oqzPy8D4c3Fa39mERy81d1gHnq",
  "key11": "niULCRtb51SCjppizbAGkDRB4r2dip1ULNUSeR3GcXEG3eFox8nQdGo3eiJPnBhBhtMf51HpHNPQkMsdFopQtzC",
  "key12": "5Loh8FzbUjo5HGW2rbvPMZM859ekUfL9xK55MoqocupdyEc8kuqZSkrAMxacEAbujGparohCPFEo5KnKUx5Yz6hX",
  "key13": "2kPKxUwJsJkR7AeJtf8eq7oJopGSkMvGWopM11tn4FvGZVba1StXzyL97UjmgTYoR6XYHDaRkxXttw6UGhsWujZi",
  "key14": "5AhLsCMD8Gubbyx6zQPMre1x4MUUQQAbH965jbQ5gkV6SDCR1mbRrdvmo2tsDBWX1xR8P7UC8Jo2y2Dm7Teiah3g",
  "key15": "5CNw69sikUbFbFoDuo1PqLCA8QwVL6zMhyDK3jdDMaWydRrqzJysr2tfx1oYrNgpUd2Gt3gkK2fFarTcQGYNJp65",
  "key16": "WwJdiJ2kX5PHdm6T2CaPxwr9a6VZrreMYRLfzNvGW4weuPzX6t3B48sZkfifPgqD5s9ULTEpFymArdvfes9ReKs",
  "key17": "3s5YVrqfYQjpFNwepfYo9SgR5pFEnY6g64uT6KCZg4nYD95icZA6xm6MPThzuZDGU37AQs3rjASrbgvtrnKX87jU",
  "key18": "zubyH1AoW4u3hDAapY4os2hjSQqgGbJJfCrfBXiwPkWYYy2pzUnHfLd23HiG6hMrtbCJ4pZj3A1Ad8exKD6HuAt",
  "key19": "2BxJqnkCw6C5HqAKYjgjTY4ucpBNcj3dcaJppV4gKsfi6qVfPAxFCqU8hmM8NMyfBwcFutT8AcM93jXP7ak82agJ",
  "key20": "3KbdhbenpS2J2Cc4wAo9V3qErS8v4AbdByy5EnqUtC62e1aZw7S3MuRfoKRCDMZMvHFVctJXuo5HPWefonJuHKAk",
  "key21": "VwsnDPqtgfsL9R4T99miae8ZfDvCF5txPJ5rQTYruG4geMvr4ctsFvsj1C8LFjpbJyAAYNgCxrERsvJjmUNhy5y",
  "key22": "2174Cbj2wF6HajuSf7qGNBUxJ83pzEmkj2nMBwTbYQd8HtqdckA99Fx57WMWuLDWrLff9nXrHYNXkx3hsEMyccpv",
  "key23": "3jYEVsYdqt7eJSb6As7obQYkL9LZ9au9N6BZzVo2QYutLyfiUWFPxhAKZVVKGCzbaAHVAssGvgXnXJ3aERUDDuuW",
  "key24": "3LaxB37yAG1XsncMpbiwiWJHWLQgXRzeerTfm5yih1yZAAv9RBNU4oeYkdZbGbd2cd6V8FVQ9LvWXYPUjLZp3aAT",
  "key25": "4kHntVNHzs8fMwo4fXqJMi6qH6iJDnmB5gdGc8ntHdty7pZ4mUTiDDif1afhXWRGQ8FqgjTqEQ2K9bqiRkiSuw8C",
  "key26": "2eRtf88XrkgYxtk4PqkFnynshrub4dr6X82XZn9sGTo2M9vMNKiRedvbNT6ZsAZS65F8LeztVNaNi1T3gduswSvw",
  "key27": "4nacE99dqa7CpxqwjhznMbKkvH91ufkamSxeJNHc4AHqMhwyGoMh29XfVz82eG6xghsfPs5Spsmfu2tUP9765x8",
  "key28": "2XRG5kSVd8EY7kkPXiDzLUG65jXH8HhegmoxRyZhtVhUUZcSeExhzgL5udzxDd4UWDVYuLqmkcLgALrJeMgPzBKD",
  "key29": "25Y9x3meQrdxoDF8udZapPGSc3KQ9Cva3UjFYz9xHpLKFjdpZr2Lk9renQL9qzVhBiEemT1uQdZ9xZKXJSNkjUkf",
  "key30": "4kxevWHSsw5GzJPwxZUk4yzhy9jKHeYrXW84UrtgR2Ri2Hm2gdqhiKm1rGjrS4yirz3vjLNVeq48uoyHKXpn9oNU"
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
