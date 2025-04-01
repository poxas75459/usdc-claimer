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
    "k8E5CYWdp8mqnphi8MgRxwsL648HhAzJhAtnt3EYaDP3jt1Uqj2YYhdwYdoW4zBZzYbyWcJgPkhE5fzYZkyHJ5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D61SNit3rgc5xUVHaseAmazndGQ77N5BGJVdSkAyJN5UzKdzWDfpg8vKjaDkgDF2cimdRiraqWDZnGDiPMpPFe9",
  "key1": "GgXrPkifMWk3hA6HpZYQaG4uhrU5JZ8rrPYPNkHgVxfa56qJLd758ig6gb3MW744rr7xi7oDVhm3fzy8dwR6b59",
  "key2": "2UK8eEHtTbrMeKmfCMtNG2wdiwpQ5utckWSgBxcB6RVbbkEAzbBPQp3GcSVjQJWNjYPDZ9WwGXVXhy7M2hnEX73B",
  "key3": "48PQrL1NAKQjBMdqPW9EDh3iuqbf67VBbsVD8cRfsdqt6KqgnwVphJeGNSAomJYpfbTUxnVvYSDwphXxA4rcLf7u",
  "key4": "pnAjLWjt3DzajXSEVJJ5v1n2uAGJ1zo9a8kKmbfpAq7rZRASpWckUezH2GxENRBMFDMeK9R6wCMBFaYqMZp4gSA",
  "key5": "2akukV2tJ4tfGsK1CUii6XGPnQ7F83aL6ndYWBLCz6wyK4M7kdEiVKNY6wR22PYTpUB53V3sfzVs62LZf4vsfaFE",
  "key6": "Dg8CSV4vpT6d9PoE1UfLtjm6iZ8MMXhUKhxTLs9RBaLJwPcWNjXv7PdE7jo9sjdZ5QhnMqKJeBpRCU6NMRUL2cu",
  "key7": "53JRfYzh9Qo8sK1UC66tHdWz8CkTjkR8hxcQyRkMYj59iVKVgCP7SD8dzzGVeojgpAs8JX3iJ4NtTzdtMEfLk5VM",
  "key8": "4yBYxZ32NjSibsm61cj48hcuRGu7J4GZ9QXdfkkmyH8P1R5F6TR6713kRaWScst96cMjVsoSMEkUBkq8roswU1Pw",
  "key9": "3RqjjwfNjtJDwkzaB8zbpMknts6deWemuBpS9x28MTDmoQJry2hsu4pvzK66yexNaGhTnL7Qtov1bW2RkfysPNpx",
  "key10": "3S7NqeWhWZxLAFqWkAibYaVWPk2cywijnmA5S6svz73rRhdasPW2i8ReuXct1gYDN8vsStoqs5bCXhP7fsbKXVKb",
  "key11": "5Kg9yGiFTvUkQpZSY6T43ZJgAEdxZu17rXB22jr2QaVeiZTPURxnJ8CmuWDqN8uAp71AWtfzQaZuEwZS1PqkEn2u",
  "key12": "2KWbWStc8ZKLY5cEiXnoZezyC8caeQ539iTXZoGDQejVkcE5PYmFygBXdDF6w1swc7n3E2z17N1QDmF7R586hFhJ",
  "key13": "22FdCnKjn6ZVTPBoCvdZH93tKa3H9aDo22pA9eCUG3HgKh6dhcJkUQs4UNK44gfmf6MuynJRoeZmdSzaborhYLWB",
  "key14": "won2ZuGCiYwQty41D7pYo9Smn4er3HRppStrEZKJaBCxG33qCKCwriDSwmU4vrMy8rFgBBnihLpi1WJVSHXtMMR",
  "key15": "5XqaS7A563uJ4WXtMqEKVVCCK4S1VEduTAMxZBAswk5uogBvF5HVonpvm6GMgpXVrQ35gWrqo1cdpuXqiS4VFfQC",
  "key16": "2WpaNLjuUhhptHhWnV3TSDXJSmu4udw1ASdV9x6aXMNyToFfX7X1bf7gDjQVutFkrGDdmjrNp9XvWEZAmj1tuzaQ",
  "key17": "2SxB3B5vBgUCfRZtwMJmNmKbzQ8WvkiA4Y2RqQFjxQtUNfNhy5jCqH5gdEoTWuj4QxrDYS2fMmYzS85ZahoNyyQx",
  "key18": "5zUxcZ6bMBx8nX6HiPz5ZN7NoufPr3MvYqAgK5RUyhiGNW47JqGryc6MgFa2QzypuiQbmXcLpd866zFDYQdtosF5",
  "key19": "2AuyWP3cf41HuQ3Bi8J1USi95xtfu89qU6PEyewffxW9YWdk3ETTReLRQsEk37Xkg81DLK4pvRK75TgG2zDQAi2H",
  "key20": "3uL8dLRYGBkYkzvQtkNn9GVRCc5aHELEx4fDxDsmWP5oHWV7Mpkg2vuQ5AfqaZtVT5Y2fzYhPgNxtUAcisaJN5cJ",
  "key21": "z6LAe2TNg2723Vk5BZ61UFGfWbbf2pNGsC9F4UM6vpRp7838oRUEcc86nhWm353cqHdYHjajfTusfCJh7oiCpuz",
  "key22": "5hHwGf9j8ZDD1MXaKSVBmat1d2udt9W8xE2a7AMhbqfjL4HJ4Xk1vpJ5DYcM5uMEnbtnkXcw7WtQkCUR8ZyrWDnT",
  "key23": "4WREDdtgzijfhu1FjMGHyeGwDA1ZucYtucwvNpgmy1K8v4mWetVUZuJwReRn2khAwiaadz3f9TH4eg88N6UezYnU",
  "key24": "7NtJuVBEtyNDk92nmCiLWogSuvHLMXfSV17SyjsRn7hqYFtKRkuUQr5DYk9TwHgcXPj6S3VjibMVan9MxBjM2zX",
  "key25": "346Z47s5Rvc3P9EhCFqdHBWBc4R7DPJgHtCK3MXTsGKYcDxYwyyxf9GYMdGthUqbiAT1sCawJhnN4DyCwaSx3CE4",
  "key26": "EZC1oqRVy4YhvU9j32nJz3HFqafFXcoqa7Fzhy3vHLejnQwmiBGHYcgG2bLQ2k2TWDrUti7MA9tZ2Wd8frTMXta",
  "key27": "U93w8dyj3xbpU6WruPbHytLUtrr13DmB4TQhVZuDT87HLQaRv2s5a2EmCpdqjQSUqiauH7brjpavFPaEdSK83sr",
  "key28": "4VjWKqrR3giL5L3dEuJNRq6GmfaHeXiddgkAz9N2L3ZEd1YAB7WHwvnH9GA1FWqxC8xeFGCtvt9kgaPYRvxHtFbZ",
  "key29": "4RD57PKu1Z1RTSvkvdTGcpYn7uJruB2txFCeqihHM41nRwGuwey13jG1zv6z6XQLrdwQccnzaE7HUcqqwJGA7jCj",
  "key30": "5VfpHHXJSxgQaGTgZWgSKyQqsPcDnRkQLbBdPwfrCdQc9xoqUAyniHUPgQ7eg5bvDkUJeYh6MQm74UyYwePNyapX",
  "key31": "22J4hdyt25isDeD2TAMi7U19h8buMoCuThEGPShpaueUwLubtgsFYG5VcTkE238ngBdeYxFKT7jUjdtvbTi9Uo6x",
  "key32": "i9eEWmHSkGUCRc9jp5s5BjbWg2jFHY18hyS7xxVqaLXphHwVN1UJ3W1RahTqp5r5GshMez5NVw7bWUUFCrE67P1",
  "key33": "4p7qPPNnK6JWWnv5pJXZJ4PSdfk1tQALv7mTLo1Q2xannDjg4S7R56PBvE76qQfrnmDd8ijPtrUH2Sf21mfBM6J9",
  "key34": "5xG4YKbSjaE3A7ahpYerJUbXPNfkbwaXhiWgMdFrZSk6rFcMDpH8nBrA1DvvJDw2y2AV4L8KCzM7tS9YwK5S8nuT",
  "key35": "E5jWXmUy91yevvfoKTHaEQpaExEjzMBS5R3d9v5VqUQ4MswyLqdfxTcD3YK7V946WVGAwZv61g1iMi7EwRJwa94",
  "key36": "2DbeaK3mmTswZFnHUQCEnBh8RxQiDzcfNeZ6CdYvb8bQpWxp6FTdbvSdMy9ZPtcDdE8cXwdsrCAg8BYKMby7T64r",
  "key37": "2Fuz6djfaUn9R1ugmGW1tJWKu7AyMbYq1fsHHEw38tmsc6nphpQvhK2waDtHxgTjw7omq6i6d4mBZ5uYUg83NEWf",
  "key38": "4xqCycUNDRQvWKLJoSVRXb8EU1xsfsE8o4DdL4qz2Vi2rBauN8Nzh9UjHDoatUgCbZfAwV5oytKpgYLji6eyMkYN",
  "key39": "5yeeMLzE6EayQnxfZYQPSLgEpF1eRe7vrPzRZefhpiUnF2WDnkhYWoWAL5TM9tfJ6BJGXe9q5qU941H4KZaPndRG"
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
