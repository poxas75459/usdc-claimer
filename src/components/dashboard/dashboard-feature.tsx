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
    "nhVVgtj8WvZ1yAcHfZwK2TKnHKVJGG3HwHYVCHkyZbEqty2ysW648vUewxJUEWTdbJGPWvLGBqrn77EdvaDMfWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3Wuq13yWPvTyrHpzm28bQG81ek4CkhKsihmRCqf8JRozQDLAsFroVDYaMWTpU6nXXgevkqytUdhbA6zFD1mNS4",
  "key1": "zBm9BLAaMg45Txb5MouVLSnuscXkZYUriqEpKjm5tgpcAztjJGqeeAFTGMUEqK1vhrqieXoFVgm8JV1DeN5nMQV",
  "key2": "5u9HiQk53WCdAtdb7exkSEAfksxKBbNvfTU7q9p6h2mzp1u8oNhJF5kdPSfkckWbF7HeiJebFkf5g8jip6m9zbVf",
  "key3": "5BGSPDwt66n1BDxoeRWhp9BQo7fmQgdZFb4CY9FRnKQXSxCwk3jsyCzTr4fZgiNEaqFCx57QvuSw8N2sVB5oZZwE",
  "key4": "5rS8mpeudW54cQdBLTbRCFCQTLnXfJEGUKbSsGZYSZTnK7ssdxWBfUw9RY2cRqn3jxqEjHb24Gtkbzz9AKGG9FkR",
  "key5": "Jn9bDDZDcLFH3vUyPPiug5G5feZb3Gqx5ADGUkUqJVZDWJdF8yc2ycx9z8XKYESqky6fj1KCSJN3tQdwyPtEp7N",
  "key6": "4YLwFUEMqQeQQ273Udu8BJD6ZjNNTQZzyXNMZeugh5ztRHZi7117zZRPgFjGdujCTxZiikqEhY3yYr5eieNYT589",
  "key7": "SPpQNppgpfdVs8auksrUEFSbB7zWZLqwmQgoekV8jkFHvUG42KgM6yKYQgGkKrmZD3vBFKH9AzeatQpBFS6T8tS",
  "key8": "z374R6J4iKoPGUQfEBwLqYe5utVuKEFhere7jTrarqBHFLW6yxpUn6QGaXmb7YvFYkEvSTDBKmD4hWUqPuGwHLM",
  "key9": "5uBiKrePGfhupExGVwtP4MAfumeVD4rtDbDftdeppJtPeeF5tfPoZzxsh6hJqHUHqYGFEsEpvV2F6bcvFDMJikWY",
  "key10": "LYyuLBHqTBjTfjGFpMD7vwS898trffw5jguSekBvLaSxLX8TbSZVkAypcm2edUW4vq5y32igqc7WR3JawAYXr3r",
  "key11": "4JSj3kcYHoGxnWXnhF1ek8Ps4A1CcBLKsxkWi4g7hXVyJ2zbbSSwgkJjrTY3PDor4ivJGQ5QubaNCrM7966Sz8ep",
  "key12": "4yg9YPjfLyHRMVjByRBehP5MuQMGFXR1MYPwTgFLboCumnDYbae5ftF5p1mcrqYebmD5avcVDSnuJ8WFA7JhuZ5H",
  "key13": "5eiNtYM5Yj7josf8KYeCgARuo5JqG6o5c3oxcc7kcKKX9qAgZWwV1nWQCunXj1nxjGeDSUU4CDjhNuaQGyrgexUT",
  "key14": "4AsUC78GU7K4kKo5nyJPjdU3wjDJxhXXPqLUYi2kGn3mpFx4UDo1nGp8JXvRroV1AqXXHa5QPYVUx35WsqcEJsWF",
  "key15": "55X31NcYMRghTrsES1TF7gaWrsjwmdGQz3eXLLNkvJjYE4iFKchLBNHfQhcYL2TuzSY41SaD8HZx9YBbE8YoajUF",
  "key16": "4z6RXThvopszaAQSHHifJKgP7gVY8wZERCGvoqs5syNfupX5GxyKKG2h57Qxj34KiB24vx2b3P952mns5H8dG4mi",
  "key17": "5eKShgtcaH1QKSHuKm4uNwkMb4chnPpA9djFseAYJgYCJCnaimXYpAVbCwtgQjvGMYT2qg9iHnAmFrERpYx5mhqJ",
  "key18": "4mf1wf5CksYE11QY84mrnsg1pqAnH7pRRnRVqZoXyAyfCcq73AZjwz6Bk1RKNJ1x79GSCJuD3udxMLXY1tCmXiLd",
  "key19": "4Bysx65Cr34TehxFBhULNKE11VJyN2MMhfVjtRuS9ZS1Y3aKUnXxGCJ9JRFq3ewNw9iUPuLZaN8rFaRNetUbvdx6",
  "key20": "38Amdj8eVDzVt54fpAsqzfJ2f6mdSCXJShbdGCmdM2sSi9FcSXBxAJVLfY8x1HGGspnLoMBC3kGSUUiRQkCbMBdu",
  "key21": "kEzoTXzn1ofUTKHHTbRH6aEGjfLZ75gdt4YSWDnhkBYKi8ajmZYioQSkRvch9BugG9C3TE1gx3gDg2GwG22pVUa",
  "key22": "BEbXSaNyGtatcesR6RqyJf2zqDmCHg6ygRT3j27N1K3HwoV56cwrvghXvi9hNgJNjgvAK6H6zCKKKkxLvXWYWcE",
  "key23": "3WVzpqXvopEYC8GENhYbRUEXwUhDTibTSWxCvBMLoU7JQizzrXfFvgjeLBsQznK1RJmvuLDVvaRfgwBd43qkVCa2",
  "key24": "45CC8HPqLxvDgo94Q1NVKh6WBX6oKfSuaTnv9H7iP5y6ydoNQkHy8usf45i6FSzzLaMoJ2dh46hBZT7eYMkrRHe",
  "key25": "4sFFQ13nmsjvABSte4WzjunNxxBYQ4Fc6BpXz7QC1EMKEiACrN3jBrAxJZeQiCdeTzq2h1mvnChQNyoe2mEuhLq6",
  "key26": "r4iCJTimh1hGyKrgVqfjniUF6gtuJbp4kk5qkHv4A8m2pn7tzJuVKLJwcFtVLfzZ43PK7dSc6zN5kdrEyaaRrzp",
  "key27": "S9LFQWV8HcdUj6QMcEi2qr4UtJDbCA1rSotFdQMFCnMBmfqStN5Hmgtuwk9tTvu4U5UpfQGY1gsGBqwVgqStrzH",
  "key28": "3dURDr1cCsykFLUrb9u3iRtr146EvWxoHE2twLBafANexVHcgLyp7p1bcyFoicFysJcUAknYmKRjZRHaz2DaSiPg",
  "key29": "2ipieBQnaixMuSZvEmVCPRYSMVxq395jvbagWc5s41yKM4GEjeHH49WNys6XK8CzU6i5k38nqHwcfoUcRTeJHKqM",
  "key30": "2VRqEpvY1mMjHsZD63xNkniJ68ypuqLN3t3gztFt4BhmC6iH2oNS9HXuK1Q71g6PZBRog52LGWP8aXPXvQDmpJrr",
  "key31": "5uRzYNafhNHhwVaxhJmvQ2RB2Z3y9zDX5NShHvkXvMSUgHa6UeWUvB5bQUNVW1ra3C1qDmgJ8wiJgaTeRnodZ7RM",
  "key32": "2eiFNtJz4iP4Nip6ZrudBCs2LxGjxbsvEj3fw6Q42Kg3Ux6QmZiUnHdkfyfj6wJREyts8ARMRPXcoQPyB4EgCaqZ"
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
