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
    "65794GNcGoLhD57fNUNppwG5EHfF9Qxyb5zCzT6LwWkU2Vc3uEKmE9jmJeFx82zfmYTXAvXK1S6GBgf2MDETchkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPUQ97nhdH5iRMgosf9rbiQ19tQ7jukeV23bi4uhezzieAhE3iSDvVfCo54QRxFTU9rEvfCYw2PFqwk6PVk2aNY",
  "key1": "49mb7g5rXyK1b9CAYNdeehKZxAMrJuRvTQLVNYyjJHgNuUYZYYYBcEhAxuyWvRw5UAjubqGnA3YpRB9mQyrH1fP6",
  "key2": "4DJceRse1mJ9bLzwwKAQs5WeStHTYMi1gbfGaszejiwTgzMYJJrTK1mADubzY6Xccom4SE5Ct9xCCY8u6t4KQHzy",
  "key3": "2XjJriXRJNxSYbdoEwy36dJ64uhvf12wCGTepVQdNVVJv9PR6kmxVPJqA5HKoj6PwXDXTQVmBbVrykFj2NRh6d21",
  "key4": "3afJVWzkspeXkKhYZTZrnEeW6zEsztpMJj83TSczY5cRMpwaygmHzz9W7TRd6A5Y4sVFF3qCbQyGx156a4mU8tvb",
  "key5": "4tZcmc6pLMFhTWoPFN63YRUkUoJ1ApKU8Jsd3HQdphNxGCAFd1JwahoWmRFQuJgca4sTU4mguUEAYmP7jiUfh4bM",
  "key6": "33JY3TYs3JoscXqCJ61BP7wMoq1ztdvCjoaTzZy4hBkxQuFNmWq5JvFrD68UR9E7zqrHQxHZ1sqGV4vULezysEjy",
  "key7": "2abWG7vVT72yFmNkCNpRviQrVmmRFZ5X4p2wpdtGYfCCxVyq6vzgiTXqHGteyhXkh4up94ipsCxA5f34in2E1wVo",
  "key8": "4ppuKSLse4Hhks1VNAnLUVTzBtNmNJpbAeq2PsemuG6onSj8h7XojBBb2afHCPLys8NkdvMhfpZxg5jCLWXC9KHL",
  "key9": "5ELxYQSvom19AQtwnsnrqBUzwnFvuJTZd5C6CYCkpp8UPnu9wH3JakmNdKeChKEdZPBQP18Lb8r8kgSKA2KmwtNW",
  "key10": "5hTdurhMiNDRJNbyVz5XE3aNcJfigw6bGVwx7pZfTDmjADtAVK7mrDi2niyKFY5Cb2SW7qrc5q3em1idxXzbfBan",
  "key11": "5bNmffYt1E8NUM4PcPZJRLqPUrEXCYrvXLgoq4FEKtiARwhma1HACRdugsSh4uTErVPgQWVgyZy63gakvReZvumd",
  "key12": "4P1D69eNv3SBCt58UFMAytinpE6WKuHT3S2FYGf5ryejoy3AjQ372XWi2aiXff2WW56i59Zt9Fyd237f4B9VXtQP",
  "key13": "22M9jC9fS8CYG7gnNX7z15VnY7d7BEmDECKCUmkqwLLhfAvBJKW2xTCvg6EUx7WmkT9LyVZfiKHbcKnR8bRkTsXc",
  "key14": "hRv3qkWg32vbSQvg3sBY98aATCnjScUwuBUae9GnwbhhLp2pXD43xJedqnP8qUHfhPLVUuCJZ9yEUVbiSHLm61V",
  "key15": "56eG1rYaXdMsKjURJWkfB67gK8cqrDaQwGCjtsqcZiFqu8N7DUXdfK68mN4YRYaFnAqndCySxW4qGkzZHPLsFDSV",
  "key16": "35P4CoWiDTruNTe3LUmyJ3EUnT8Ki9R2ZPQeioKajvPudtrwJNTYeHckUb4MSPYYwhBRp9FXEqTNxBXtumdZDLc",
  "key17": "FBMq574rrbFkGudER5wCD1LMhJ9PavSsDnEbtwyqkYYAMFyGsgQXq76HpKj3M21NpkfrbuXaZBaqSozSxEqUjLY",
  "key18": "Kju1UcDMoYuVzBAMXXgiktLg9FWgmzhr4SzcGx5t19Vk6ymJaa2FoABMQ5TV8LQGPi4H1WHQnhrasFN7vddLLmt",
  "key19": "3Ksf65hsn9VYW9DsDXZFRhxsmAPbQRkMVQ43jupWbuBJGnsXhiCLMaL9bk3ZAkRUBW6TuVWok8aE6NnrQTDDaR3n",
  "key20": "ofMsqRLp4jWoK3ETLEvRxZwncBDN5MFVwaV5RmRnmGz49HyAJ69LT28hcFBMFzA4PRWmkCffPXw3oTjncdERuv2",
  "key21": "2yjvNmnbxtfBCrsYjy6uVmvtyG8TSYnoLpcCQrc7Cc8L1kjvZduDnPE7St4xKywhcZ5nuo8Lzf1uWGCAX34z7weM",
  "key22": "RYqPstH9R1tHAzwoQPJ5DieqmtucXWNH58JtVmVkyoRtUNJ4qtzjvWyxvaZQLEuthM4peao65nCjGqmAHUZ3UgH",
  "key23": "4EnTBPRjfHR66N8dsokhiQVJevvFT1WAKqWrn7SgvtGTrZtsuMNUpXrtCYDcMdEpD3ufyALjm3kQiJtNbA2265VW",
  "key24": "2Q17zWGo7r2z2tzDseZFj6XdieYTBijnoRnjZFawhgJBJjMSqwxmcJfzo7VYXbEs54XSXVEBHPhziqv1oSzMLKgV",
  "key25": "5sDgZA9pgrQcuaKdVqLgNccRpX9c6iaCRVWnuKVYnvTTfR7bWfgp2aEa3w2apoDgHyhperi2B6kJ4ZPssjDjPkbe",
  "key26": "5K9owkz1jxwKwxoJ1AdjsuEMBGy2sVuNMccfFEFDEWoA6inwtVsqypN17KqgeMegfzNLV1KNPf1JoxvJGyq2rKmU",
  "key27": "424pZMB4g12WkFFrkjGNmv5vLZh92VwwqvjspHLh6SqZT3Vps8UrZqsGnCNRMki5cfzYZyNvpzJe68AW6qbp8aRQ",
  "key28": "4gMCPi51znj1qvmqH1KoqxCJSSkjKorLkPtqoAk3qVW6sqB8aFgNP5QLXsX2vN7bCcDmCd2ysbWaTqzwVgAaomZn",
  "key29": "3xvwjzSDHsbwo5CfKfbHdRySEX8MDkEHAhJWumoigPavkz9r51jk52VL7C6udzHmZXeFmUvAZkxWwZRpJRvHpGLy",
  "key30": "5QCr7RrKkZujU9VotGDKGPrupt5hYv7Lbvj985Uh8jw43ActDdtHhHoEujSVA1f8YqNDeGhSQL3A6jLHfpmdfgMH",
  "key31": "3bdMnJ3MNmGKkB1DGKBUJ1w84m6YFHmqyKJUePWzE7PnMS7AQeDUfKtq6qYajbjjpG8GPhXvCdnCaKf2cEEXpscd",
  "key32": "2nGPyJL2r3JLwNRoDRtgLQGxNk8f4ZwNw9D793Z5tZRrae51B53XMG8k3tyLruqFJXWnviLCmUAqo8c2yTqaPSjc",
  "key33": "3YNbtzsx7zaz6vqPy8xiDTpQUfHPV9MUQQXp6j9QszfsK91tmcYAQz6ufS7o8WyLLBsqvNf5RDLepm57uVqzSuCr",
  "key34": "cbb5mAdQU9AL9YJccF58bouBViyzwPshfmokWDsMnEvW3yoWp8am4hKPt7EyFnSf62DRySph2gdt7nShQ7jT9N3",
  "key35": "2vafv5QAgWoneXyX1ZqNJRfmR8j4gFUSsh7xUUcwFYaUC7i9coKWR2HvqLGukZunegrsPrnLKhFQRUAxLcGAys5H"
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
