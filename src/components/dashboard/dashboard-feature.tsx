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
    "5Nrj5EU3nBn2TraxK7BbXqYWfdCiTMyFFQue9HmTQijMnN1XHfNVU31V7g9fRL6FvvQwEpEeZP6B2iWGuj7sVfiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVQmMDy54nWGRvMTmKNQT39rLGDFifvJh3pA3nswA7rugxN5YbzXDGQNFPLL6zvX7tb8Lz5EiKKc7WGzNLtdJwc",
  "key1": "6HTAxD6DV6UxMAKjWWmgc5iKse69cKp1eW7FVpG9dGEGo2pyy7w14vqeLUfzNdeuuTJQQ1w5qjd7EEfzpqt1JMA",
  "key2": "3vSWixxti337SRyWaQ7iQBVVQMnZGsX4NibDjzkEG5JJ9toRzXs24mXuVEpp6VUx3oVmT9KGdLHn2E8Jk3DiPvZR",
  "key3": "4ZMBQJKJBYNuUC9p1v92FPbSyhLeqVSNNqoE9R83Ex4qHZcY1jNF8Cutq9geMHzNrt4RLH4ARsBCorC76d9pTYy5",
  "key4": "54uRSQdXHPzZyyWUL2Em2M6xiikopY27KWNZ3kthmbwCNVyn4fRLHAMAGeQa7GrNYT3xpzBRvoQhjx5NjjdjcDLG",
  "key5": "3SpZNLXu7rfBAznfvC5iNtrV5HbXnojCa1u8ubfqDKzFTZmmztALW9BbUyHHh5xoGjgbVBXNGkcP6qitv7Vd5YPc",
  "key6": "5KwejdQKmJjPpUuZhCjf3pvkxJ72r8Dtk5vxp12bQ6z1bLgKcuLvPF6FE7THjdiY8A6kcmjeqfmEuhqq55cK4ifd",
  "key7": "3NWFg9j3y2SYoPH9xdMBK93XhQQiEJgsfpRqufHdDGBSabECDJYkkaiQ8g5hUiZfJZG9vq6isbNDDVJuWroWs2ro",
  "key8": "37ZxD38jJTZ4yauh1UED7heV7YLisAStRFQrap8XedrRXvvUPsu5PRwSMaeMXg98deNTBM8Vwhv9wr8mEAbUe4kP",
  "key9": "5KMhALknnp8KBjbgB4U33XWxkVv2q68RoJEFm9BBpaQJ5N9uBezAsq4j3gFGsoeSQDuvDifFTJsbFDq73GMwFvnu",
  "key10": "2t7DVsyWqeUT9tmsbmkPvno6mQTP9LVzrwNha8om7Akqzz2sS67t9iCVYNZRR3PThB1hcp2oVyohSjQHSCZSi39u",
  "key11": "2VG2T51n6kU1pqykpDaBcZKX8U1fdFBjxvaKqAq8WvhvbxQbxRcw6XswToNrFykvxB2zzLkJafSmjW4wDFWjifeM",
  "key12": "5ieFRzVaUbaWbhxBQyiHyCh6YuLuw9cxiZPBnx6QSfm1tGkuh7Ap23ZNEts17HV9aCw8idcRFQkBWF5h14JWz3dA",
  "key13": "2i8smbCTiGuw24o2SxFUmQWywBPPZER8GSq5eeGxLY27hhoQyUGKKRvTjyayapVVRGkByupPv7ps4yAVHyhy1eB",
  "key14": "8WvvdG5psHzWSVMnVtA3dc6VsywMxhr2iEvymddnGkfFFVm9E9CGRQQbWbZLh9H7rRyy3y3RLQMUA7FWCeCtXR2",
  "key15": "3dS6ovx9D7cLk7aBLbKaCu7toQTHX81jSaNx4gEyroRd4uDSFGhkXc13rPB6MkXFNNRb9d6LtU24278QUHPW2VDU",
  "key16": "36YB9kMNfjLUByE5Tk1nGda7NYKTvckMERjRBq3nT4FyDCT7MyWnPGWvnDCGWgG7TMRozJmr9je6fj4gJHhNhQeo",
  "key17": "NJPLTY4uYut3rkds7vPxGEzJEnsbgm6nZ4Pemn5D5Z1VYoBQmM1XH8xoJk88PVShUCntTxYorYeCV7fYMsJD7Zq",
  "key18": "UG5DtjYgj3EkEJ2cXmuSDoMCLwCPJLvuCrj7LnmZyzSBfKAszozH2hRFnw7WyeaFSMvVNYiRSU7rnxmYSH8p2Ls",
  "key19": "5GcmGRorRdYqVAAh6jiKgwdF1gCM8EqCLMbfPxHi8FfWGonBLuMC1HBxog3Di3957cgVqE6CWD3qnqQm67ugqHmZ",
  "key20": "2XbbDsp389rze7tLyi38DagzGg21TwfAVudv6nFU1B75G4hcFfSpiVoD3UT7riVPbBumvcXUAUZDJsSEVZPjioeM",
  "key21": "55JD86Zw8c19RKihf5q1Jj74BWSZuxSrgNZxh11tdhmrN5ftXvyRGBJkiMutaP9qk5a9KNYEnT34XZivKwui9kUh",
  "key22": "2Zx5awz1W4QNAejJu8F4j29PvxLSjPLMm3zMVTzZzWPND4iqdRgwdushEPoNZo6uEWB3guoUHa8fCkjrfQyYEJH9",
  "key23": "58GDejPgWfk7QyzykRzYvN82t4KCoSse2sZivUjubkQ8vK71fcmGEQhdNYzP1ZpVEpKZVG91XpKmLtGW6qWvLVDa",
  "key24": "2on1tRVZ9Si7MdckoNTbpvpxYcmTpG6cAgwaGfZzP9Fng2vQxmkTvtbGjbh5w6shFvD4ehdm5XEhCQ3UbvSLancS",
  "key25": "2Vv39zF4yYwb8yVSYh2HLnS7xmr4J8fsFvGwmmCL3cuehzUBpqKQAuRRD792QwaqtQUQKYrtQpVEhEMxsfNGFvMo",
  "key26": "2nFqWpydkL42jvaVkZDn9NiRUV9SMU6GiJVoMA9PTkipMqEKaNKTsNr4FnBFDNopzjHar4T2QKoT9foKmiVMDnkj",
  "key27": "55HF6MGgaWwSgVhYFYgbCBmSq6GWu9hUeBy3nmFzLnCf4sJn1RiCEKP8jKoiQBUt7zHQrF9QQZGyop9tEgmigzHz",
  "key28": "2mz2hVd6Zb2V7uc6MxRT7yEQYWY6vvsKtXATZjPJm64m7fA1zTUjypWSCafXkXZbkd8TAnKhCik3vXFj5YdaNcbc",
  "key29": "4SpCpmrd7H1SqcQ14qCyQLZmuoGy1nHzBaxnr7M9xPeJPguBYv1wqPrW4g7FJhBjpzUqTRaCfmWsYbpAmxqUzHdJ",
  "key30": "2Y28MnsSmCwU8wvgbz14C7qZUYU9PdsVsqNSggU8czyDhyfycCA1BwVhsQsHMJbBpicMSbAtPeMrunJsTSpcRJ1p",
  "key31": "3tPNVBSCcy4fqJWTrNxch5YmNbuTytRsPkH14UBZQMBLgrjFAhVirM3gYGpjAEwHQ8FndWiVHmUb1iCQHGtuKDqE",
  "key32": "64aPgKLFss5ugemiTPPyMouPyj1eHYnr3J3Qf1bZ5jC3gwK8GDvJUrHFdNwdR1hMRKBRKpVkZsrDFFM2rgJ6iyTR",
  "key33": "3sKphaRM2jwn6xop1aWgCGv32WdpGru4CUSuMkkWZFNE1sKKKuEMupzEYmbPjpuAn2o7Qvodx2mjokfi2GVcVHgv"
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
