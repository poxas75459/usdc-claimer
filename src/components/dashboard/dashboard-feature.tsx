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
    "5XW4uixH5YX1Cn2vfN1SfaLficbD4vkwh2wxGg9xuX3yxUuSoZ2CHVonyV4B7KfvDCkxwRY7ca9j2Tm4dSDriBfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XqU1Bt1e3HmvY836mDUreuzhsubjT3dU6yqcUcuE6TQH5VvRdDC7edis3oFjB21P1jnavL9wBWUiCcYnUwaqZdL",
  "key1": "52RZ8DtmKfjTF2vqEGCu7joDoCfCcZooFHbN9ijUEwm7655AX9TtH9PSoFBRnDjaSnENhvVqw3crB5RcfFXX4B8T",
  "key2": "2AGzbWxbCYmupgs9wdoUwZMNUKVZBK7MtBNVCFS91UVWtRfmSKTVbExAuePF5zZ5QQtPP9sGo1S1yn2p9NSiR9wz",
  "key3": "5Vpp51EtSnfQZkaH7aQFVZUzkwE2DewL7iZZD2wYGSLzG1GVQXP6kAf3JVUjgWtbxtf2eYV68Z2p6uSHzbt83N8m",
  "key4": "4EVSjFgivX3sXWg8GvkcHTBqvbYksLPAMKm55xJ9sS69Vh9LAvEpev7yPGHcRoeJrPXwuqRVVA4fG89MUKrLErp4",
  "key5": "4XgbgAJn3Wtan4mfs7tgHNnadTLc2cv4Rr7Pua9Ch8kM8BSrkqrLDom9WQbaN4fBCP3ntFzpRHge2urCdcVWd7we",
  "key6": "2jeHzSLrFq4S6a5b4jqiLE2F7mSDuy2UVJhgMvfnC1MMrNFt7KZnXP1aJrua9xfXLATeWoDcNZPkJCrouh8Ezagu",
  "key7": "3W4muZmn38iftNqtqV7kDWWqHXuNjUj4ZtTijxUKqiptWdytxiS56quw5ULTPS8V6ggYRW8SGSpRMMALr6AcBJ1y",
  "key8": "5KVhrfEmHtXfHWNcXsWdMq5oDKv3j6mSqGJ3ok2XHzVikjPLewgixs2ixXhyRpouRMpao5SJNDxh82vGXGN9gGE4",
  "key9": "LyBJnUndCf1oWe7LeYFEHvvSskzRzDc9L9ag2V2vcttHaVAraFXrPuD2iR3LaPBbgwiDAHSBvcbed9d1YbzgMMM",
  "key10": "2vqJkeYvSQRWqZbLFRdk4J8znBLk2xaLZNqePYj3uLKMa2UoRNQ47DfUgXXY9RN74Ej4Au4nmUMcmv2rzfooUVhM",
  "key11": "62A1TGHfUYQgxXgPvd42cnFfHJwhUqvwXRTpztbt2miRXywxu97cgrVqJJFVLkrGRUDoBf3QfFxBJX4RUPSvmYEK",
  "key12": "rjXhiDzVTgci7iskh9YxyuA3ZHii5m5sijid1RspHx2sTUNKYQaPH8NgzrFCsiEHWaZGZD92oRaKxVAmmFMFCYS",
  "key13": "7uoVWeX5kNCCZpQzfVooQqCDDNZHDmefHuHSZG239eqeVBiVUMnDeHkTALUwG7zc3F7nzmeDEhuHcmYJcfJ1kA8",
  "key14": "2QRkfxq1ZRSFFxe1LydnxwVgRZxGPgLT8u8zs5eE5MdwyQ7hb7DMCS2XRfXigMsR9qnqozgUBFs2qaaPmU4D5mio",
  "key15": "vMpEQ2oEDcKebBGhPaungkyQC8hSS6G5Cbw5gNgVZCMXQGERtXVejo77BvTiN9mkxfLHLr4ggrJomp499rwbv9R",
  "key16": "3emNNNZVV6bJ7zHnWsTAax8KKazdFJyxkmm3jkJjVV7oKyweaVitRvDM4H1D7cZcWd3dCEzkEdE4RkenkqqNLFv5",
  "key17": "iE4dUPsYWL2QxwWqpacuqWHipmcbqbFTGbLCMbesq9mTf9D1TX9kLN7pz42NVg2ky55LSinKn1nnnMHTafU5xso",
  "key18": "3PSGhvTu4YEkGBzbqTPv2sfYRaN4cymKZLKdi85Rj3iBFiUjz4B5nyQL8BHp4PXzeaiQM2tZPhzerTNkDG74KbD6",
  "key19": "YTk1tCHnshYNYm6tgB1vQcVtVWifZjWUJJXhL1VfWrApHUyBRbMLkQAxjaPgA54493FWnPMCFKDrJv1fXJoBLQf",
  "key20": "49dQqdQ87J6GiCKuptxmbuA8dDcfF5CsV6rXBTwvTJBkirZnkho6F7rqMYNUBetnSXcB7a59Cnmpr44UiSQaUJJz",
  "key21": "4Fmib3W1Fti8EKeR4mU6fssFQZt2r28L5rpbK9BihNB3XQVuz5jusb85MkkBwM9MReBEBQy2xBbrVaMiQf7hN9o4",
  "key22": "emztFrwjDN3i8caPU1zuXTeacsVcbf3BvrUuq571kpsMeDCPdxxR2KYCanvwP1rotDgQMYMbpxyr3XhpWxANwWk",
  "key23": "27oGAafJkp5ai7KWXL57gdqVYFhdN2er8fq6DJgDyM9Pr6sJ63spJT2wbJETa3zimsgQ2cyoFcfx3Kq6BUfBwM8p",
  "key24": "2DPT3v7ipL4TLkgzS7ViyCxuNJoP5Xrwvb12mpo83boWvtPSUNYdvkm88PnsgkVzAtSm1s4Baz4j4TDFJMXS3pSy",
  "key25": "5DuBRRivWJHch79g2WND7L3vU2DgkpiVpPFgAM7JFsivRqQj5iTAJWWjhPyfjSQ88wjLh5diHUu6ipYVSGCeC1b4",
  "key26": "4a9cc752ejgfW4CcdL1Pe9d9Mm9WBiwzJtykKMQZwHEA93yX5LDf7HccvR3iCnyQyLyaKvnZExLPhMTU9QTvFMSt",
  "key27": "5fp3tNtYqkPKH414fNv6yJgJfdEQC3SQGeyijh5VA6XH67xS3evRnubULpbPD88DCnaYnwVMZQjJsntTA9gX1CLq",
  "key28": "42kDud9YCXq5wjjvzr8ejZ5kVCpQriUHK4LoNha7CHiEoXUNsUMPkTRkH5ypXRyFhZxYJhhjjFLYJe9CNDAzAMG3",
  "key29": "5sQBDNdXNhAmdkYyuLbu1qBV788oUqButS7kZ9mdETTQwatjafntwRKvKz79RGWmFXZr1WbuuwfJPk5pUUEeQTAk",
  "key30": "5repzfSmFcEe5EH8PQ4MPnJy4ga3YsAZMDoxvp9amJxs2G3hzyCukVkaS5REzgAFyHKMpz1GzRkUAhA5FbiNKZpA",
  "key31": "42aN1TbgANoLDhtockGsHxWZ1JFA3qkNFgkD4D95VvGr33stHnceHzhUWUDnRLNM4uv5BofKeABNKb3Pp6fcoyDy",
  "key32": "56KwSEMeYBzRQsuNp17MohvpsrwB4s6Jz5i2319yx9uSmDp3GeUJnqTWWYZy2Aq6UTssXUNHn1eaSWfJ6gSUS6VL",
  "key33": "2ubF9HjBoTW9B1HAPbJ5M22an5FDE3iUaGNLP1qXjH8Zp6sn4hRXKLyeurFH5g1gE3C7NtEq8NFFmPXzYQtr6Gkr",
  "key34": "3zsGa6GuwFJu5SvvVamcybEeb6AxctMJiQ2sU4fRSoNwAt5oK3NaGRUDgJ72gKJd35Ho5JkKE5VtAk4un3xKyALX"
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
