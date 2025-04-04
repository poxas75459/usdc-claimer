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
    "5BVC4i1bd9UaKyMQQknVbggtb3x9GjHvzBVD2XfESRqTG62eZTfzBUZPKApu4qeS6X7zXZNqyEVRQkfbwaQWiA8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKmJTQHgMu53fJqyKf374hQpotwbmxKHtF4HJJ7jZTrGYduozLkokgg8nb2jPYPX3tfEFQAiZ4NZwtUY95At3rs",
  "key1": "4eu3r53qpfKScWFcJgrPZg3uLHLZMYpkScEwTmrGA6kFqRmj1XNtbao66D5RFzJbw5vJza74wyXVJ3LnRZfGLcfw",
  "key2": "4mJ65CkSPRoKQ3QdNAwsXuM3EyTycjXHQHV42izYhA8LLSbZmNgbdJh3wzJEdxj5rkb3XT4pGinwfQqXCMfvMQBF",
  "key3": "376o9L55rfjy85GpqpjjCzPbLV1FeNFCN3ojyHHF73KTM1eBGRdSyL74RTVkU5VUQN2bUZaV1SHADtKFZPdqzU4R",
  "key4": "kx7cLmQwJVJDzUtpRvA8CQ1eJDyZF65NqgzUedziXCKDe9d5TZbXs7gLWqTtpJYeG6BWyNaUG3G2m9vvzrzKB9o",
  "key5": "3xaFZRtFaVrAxFZm2Tg9PmFytmfMUPqXcB91eT8o4bgRtn4CCVZ1HPidSKqWRKVQHjXkDre7LuRMvRxxh4ZMHPH2",
  "key6": "vM98r4V4s7XppY4kPXUYqUbzEPLWRpfnr7x8eJnUjWGRaJkopgpS2Lphf63ggQXGeo5k7haN12Q3yMfK1ZEw2k1",
  "key7": "3YLcBJNgksjnqpvnNc3p8yyCkN8Ww1yoiEgW6aYPeC4mhbbipPLmAVEHvcQDFHZXe1oBmEzKDMZG1Z3tNYA65qMa",
  "key8": "o9bBJJnyuptHZ4BNpH4QWEBTvi8jZoASkyiyRd3UBjhmvtXKqx9pZZ8wzgDWhsXmBjXd6Vw5jzrWU67JCT1JCsb",
  "key9": "kcJqrPjkmXAxHZUutm2VKLa1qRpScduhXvuymCiAQC2XB7XtHtfQ8hhQsaYkAaWXf42VyFN88Byo7hQbjDQgRTw",
  "key10": "2BKc7FKu12MSRVt4JUqaH2ZMZP7XwM1M4S7XoLjDqEs9rigE4y5JPvbL7SoT86EvQDwUwFF7u6jgyZa8tcnBf55f",
  "key11": "2fAzPUD8Fb4tSEs1mMb8R3DuCZdDw4rvmxgNEmKww41RtveFUdoKUVcwooZpV1FXbcCMYgtYox2hckPCwR7CLoq3",
  "key12": "59MsAW29rCYaZbeUV594QfKYLKwCxyEi15bjndytCWxBHVRNBaX4F5WYm8gcCa9M6dwzibCz4NzNXHrsMN2UXivg",
  "key13": "1DEGZXUMx8ZyfNLfHAWXAHD9m6BTCzYN5XbMo6MJh1yoic1J5v7Kerya4RoS8iEcd2ZB5yrQtQEe2K3TkwxqRvN",
  "key14": "3d9kBtDZWiu6iaPsF7oah7EikCvJCvdWum4VvD66v1vcEdZBz7WvBorbThiZbei9QURe654mYRXbffUDJ6FzNboc",
  "key15": "jCqK4PtfkTabvQu2HyMrQRBBzMxW5LeaEa8BxczWvD9dvKGjeyydBjg2qsUMMnER8Egu14hFEkBL2SEYZ8euE5T",
  "key16": "26tsx9Jk5Zy9dAVE1CLFUqvw5YscgGAy69PXCVNAfvVgRKgBgjXYQmeFEoktL6kSxY5hVhJRsyCnYJFQ65V8p3sy",
  "key17": "2hsw1fVFHFUStFobdFLebKYCeDvLESHudbL9YJiyzTWmDFhxRay5AWnayuQpZnaZzpViwzUNwmjrD6MnKVPqSXk3",
  "key18": "4WZk1LyUoou7L33gEoHZL5dmFU1vd3UtxaMPBHAgmM3UascyTyc1rp3DiDyW97Wmbp5beXAySHdEk4a6M7pjWogR",
  "key19": "5eu12xZL3xWTn6QnDbnM8EoTc6ySqBwVmsdVt9s82VSAoXg1E1DXq3An1m3LWJCLk1u9Uuuix5Q3iq5X7pZrU2bt",
  "key20": "4rF8zkC8FDDMX3DjexqxsWYdmP5J6BFNVrRh5jKrzRa1jFm5Ji5cqiahp22qJLZYdhdMjdT4itpCqXqkj7iVf3GT",
  "key21": "5RQ7UkHzGCgTkELVqW97rhiGCVQfVeJNXSiPrqSBVTKeFCw5dxWkQYDWgAuvHxqv7MmuhnWJAm7YBU2PqPq4hy5b",
  "key22": "3LqdxBCauNcMktgAKi6UAs4iFGWjtJGxZZoXLbA8FDe3Qrvkwfvrgq9j28YPnykH6dHDj5qmEEbgPDtUzjnLHKKY",
  "key23": "4hPBdMVREov8vJui229NneZiEamZEKKUrKQf7uM8EhnTzya1tjnW4FZizYnuqCshh5wAfufCZ8A9avwiYkSpx62r",
  "key24": "5wraXLQHhwk841TP9qbFdjjqGRczqW2mVmCuReZgaPTQ2LZTDeFpb6PAix44KLZGneQq1WP2fNjLJW33aGS3eGGn",
  "key25": "U872zWCwz6i4oL4w3Ms2Pnw3zXsuLm3pyCmkmwBP3ZozUYaEvEpPdrCn95NSRojx3XUtnMgKWEmGHpDrsxiyfm3",
  "key26": "5VvU7mvJvFfmyMFfZQzV1F1z7B78Bphpnuzc92Dszkm6EqTwkn84fxjNMPWmQ4Cs94rafxYaLuyLZbPxcNZH9G5X",
  "key27": "3e6Exfyot2sEiKqCTvKFWia6ZEw75V8Aj2vUBYfWyaevwQZY8ytPFCMfXwJDhpTuLTe7dLYJZejwt5qMTFn43TuT",
  "key28": "4FMbtXD1dJ9fU3GbQjNLAHyymzfGrPLVvsXK6QdTyq15gbZC4FKfPDuHRrGSTC3AoBLTUinQmMu6dtSKyXacV6Tq",
  "key29": "4C3fi5axHvGBBRs2XKi8QJEzNhoG6ucWiD7zwosyfTBfArhstFY7kj6aosMw1MkajnsBUc32PGg6rc8vwsLF4Wax",
  "key30": "6kSPjEkZ5cCXdyURZmXqrfjs97DErud4Ex1HtAQHd5CeuhK67gBnE6goJRZFJiPNn9zzwdrRCK3Kq3rys9LyPWn",
  "key31": "3GiDcybkmbkoANPiqaasTQBnkG3N94Pu2cBtsiN4Vpmhhj9PyP21mYGovNp24roYT87tH7pbk8zzFLRGasf4LUTA",
  "key32": "2XDZc69CPPxdPkTjfQFHK8HqbwQhkUoocMg9C8FsLEEAiK58GzbetL4scWNccRyWfLyKurctzhcAC7hAvsRKvir5",
  "key33": "4Pap3CRT5qy2XB28vpg7UYb4g4fy2jjGKW3gSVEmSghQUVbvDa1mh8tov3JbE6U4ncQr5WXk5rQmLUFtQA1gS327",
  "key34": "4jDNwp8jd59aWz8cyNGyCAJtB2X4zZH8n36puWDUf7sHM2qebn1e45HqhNsDztrbmwRyjWh9WziP8t4dSh6a7x7q",
  "key35": "4toJacQaubAVN5uiEwT8NKPuTbKMveCT9Ei3giswVhJgH1uCCLHYrQor2jnCjThm5pHmo3e2B2jbUUz8kcuEvc5P",
  "key36": "3t5Edk1SRNwW7vEpdbUZysDQUehoB3adpd2259GuK5CiQimRpgkACWWa2CKxEoWAQwwqEqJWzPseocFo87Q7SCY6"
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
