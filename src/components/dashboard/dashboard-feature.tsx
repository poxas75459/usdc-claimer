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
    "Ym3cCpxmpRWVMdHPJ6DBnm1UpEcgZBRYQAynZeqQJwZ99ukn67Yc7FcHsXbEJoPu1McVf2Z1uCUqo528XC1Nwzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkTdrTX91jeQog6xsu1LED1RahK8TYsQjaweG6mjRuKMogFyiimcgafzca8CKgrZwtj9hiG8Be2FVoZSY4hd163",
  "key1": "27W73ndYBZYV58pigSEuJQMUaAYM2A3mEvcnWf2urNgk9dZmpKzMBTXew9uKwrpsPPiL3sBcyqmjA4mBJD2crq3o",
  "key2": "qjDmKD4EcfamZNb55T3ZFNAebSVpXo8z71WAkDZL93HuVkRy19u9EJaiaDtcvo2t7uD5vZfugBHo3k6Dg11Nf2v",
  "key3": "3W94dSWEgrF3AsSx4j1VXaBcTuJE95HPGoxEJeKvcaBWH5MsbDecUpAwLpqjVE5AJAMKo1MYqE4wYbNuJ7LxVzLt",
  "key4": "QdsSek8MXWoJRRWELoJUB7SAyDVcoaXX3JMwny4RdE5zx4PT5navRmqqiZyQbjEYPrzWSp5rCyqCuG1vyZyEtRv",
  "key5": "663weQyfVwUXVYsJhNucYDFn8gUkdE5A4iJTNXXEmamdh6UMvzzdPzxojSoLy29ZrJ8Kv5tEunFhPPns8zcTMKR1",
  "key6": "4XodSd8kCwqvXa8WasGc2nj5wWHtMNFJ4Y5y4sU6qbFTFk4TTQEsEQya8jR1ah2CWst9jyTs5yfpzSppR9YTAgER",
  "key7": "jUXTJP6jcHTERiskhAnxyUa5MT8fz8chtG4cmBKM7vuxXZpv4urPnnMcHizTXUzUWF6YF8rABWiEFAcoEeM1fEd",
  "key8": "maN4EJc2mLPcbuG3zFSnEGkJDtdAunUksZ3CeSzhHcjDmeAmhWXDtzAVJfWp7ctUbQABmj1UDh2Yb5i91m9iscj",
  "key9": "pvLd2YuqNuEFTkvLcyzr6UtZgjh7cLVioHcZ4skBL14BRMzh949ovq5Pz3Cayk5W1NZBfkgEvB8uoqk1vjN9oGi",
  "key10": "3J4fUhzC4WbXnzwUz8v4qG2RkTskARUTHm4ammmRxcvbMaPmCh1hCjaatMSN19RTRyKJsP9cWsCtkZ5c6qL3bNar",
  "key11": "5etyg1zzvD758QQHZvVY9unU5AbQhbc1jucUwNDYsUxSkQ3wLoKKpCW4dCffohgMK9z7p4nSoLAgmH8oxP153q1D",
  "key12": "3WQjsTQ4KDZz7byyTez1JXkPGMcZ4LUiUDiNwTe1HBtqih1jFzLXqUZB6FDaYUDNPpNCW2Ap8epPjojEgsVpYRbs",
  "key13": "4d4KYdDtXFEGwvHVjTY1iXxsiTip6Qm9zuXMnWCvAmKQKLeGhz8xVMpNP2bw6HouXsSZyMFoU33EfDWP99jwZzhw",
  "key14": "64Jabf2wUwkXyLJJUuqzbuuC7jSjeKPMuXjcjjZT3N8jUgUzV7zGfPqDrqD9typSraca5GMbqaLpuvPJkjr4FZ7R",
  "key15": "3jx2EfmpeZoKF5FqpT6ftZjaNyrfi9mPS4hJky4w69NmBHTVuQHk7ee8pwQzNDMfF923pmXNxu1skrcV5i6wYbMS",
  "key16": "3JTb1toXhaC6ZR2WgTBnKVoRRXX4bj4NFZc1AW4MwMdJdmqUjuoCxtF1XJoYLW6ZVtpfw2KPCXMV9XhYXUipcsWu",
  "key17": "67HPBm9HZP3W3cgqgbKJzG9FPyLuj33qGnA3dsUDpeoDYGchQGCZwfQmBhi1Uw1atkHSpabteFM5QmMdvVryXxu2",
  "key18": "4pHEQDFzSc3j3JXENntAPQQVNVaPzyCStDQYHpGxwLpnMRLWZboq9Wq2KWaKrMTxC8nXF7pCkWSfQ3nyW25BW83F",
  "key19": "NgNTR5KDh27fUUctNG3KK9XP8VF22FfEnhqLPjbLF179crFeprZAEP8ZiskcoDnnNQEjRT1PrH6ocEhYEahhGg6",
  "key20": "43E7fShagYXvx9s3d8BAbeUngiacLEb7o7teU8cNJBMhHoZhinrFkN1RAs5rgyiq1iiUcUYYawqbECcbzt91gp7y",
  "key21": "3u5iyWM8QCJZp792KHea1efjkcN69AWP97jo8VoPpxS47JD7U4h6LfADo7PP1zmstrjio73uGYcTLwX4Q2hUSLXx",
  "key22": "2wPp9tLnLjRPHVjRMshU5hV5jjaj6V7oWu4RL8FCrr3uCJnVXoj7DXYTcv1VTcMQuu4JJ6eLC65T6aQCfKd6Pfj8",
  "key23": "2MvHQePm9FXVs4H473RFsbwsEhFexs7xWtB5Lhotps3uSKzBWvHXU4hfiwc1Si8bM1HK8Bg5bQpea6ToNm3BoeG3",
  "key24": "5rza56gW6G99cARBhb8o7QuYmiAztFPBJaPYYjMJgYEQFPQzVdcBQRUqg9mtohXe6LkRgisfLWfoskRrtSLjuDfj",
  "key25": "5e71vkkH96j2fgM3ddR13xfgKDWqMRsQGAdzCks4M9YVvr1TbgctQnxjCU2FPyZafPdAqs1bVKQyjZqXiELa5ZYh",
  "key26": "ra1JoQe4MU6VUUBWNUuebqMxL6ieTU6SdETBVsv1d8j16u5mtAR8jhcAp6NCHpLFKSY2kVXDoVbAWToCTf9AZ2H",
  "key27": "TZizTG31rPizERvXg3ezHKczXugqdmtcDG5PktGG7RsBbCBDG79yR7h5iix1Qut125bG3cvnbd8Dq98TNP4L9V6",
  "key28": "23WyBwAmptzFYNGm8qsPwLNHrpKgLps5NBojXLgK4bmimeY8gs4FzQkhvEDuv773sfW7UuhHq1YokBia3TWRniRy",
  "key29": "V3PA98L6j52xXtXUrjSPDn6tiX7Mi5XX4QVGttRuzGMfRjef1QF9nXBeVaWwNZaE3LgL7bUZpwmxRSP46K7RuU2",
  "key30": "5g2gg3jSt4WcGYtLCUuV84csriZb4aSzc6kf5NBV678BwkxqwLvGAjmpWZmpynL9xY3z6GonE8aN9tP1HTSH7w4d",
  "key31": "3kvALenF8jSSWVVjz6FfiGtFhgkjd4NfEsbBiocN1DxSVZgQPogQQFASN8R57NzTgNB9EDnp7QnAQS1XRHkWuTLc",
  "key32": "4zHDfaSNX9CPYdu7bTbB8euV9RfEgc2VCqFdM3k9zvXoUVxHUGWaeWgM1T9FYXgfzdTXuPrDMGxN4ur6xUuevF6m",
  "key33": "5DnzFbwnrWCupRAr47XUarRCNhLNS9YjvdMx1oKxa4ehY7EELjXzu2G7Pi622ygPrJx1mfcJ6dZL4LCESn3Y7cjn",
  "key34": "4KhrdAaduPjEwAWM7qg6toQkNrmU25PKz7XQwT1X66JH4DjLkGHyatadfEapGgHaL6CgU8nXN2pKmqCg6D4Eo2gA",
  "key35": "2Tvfu15oyu4EmFpH4tdnnSVD4Ka3z2SbcnbZ957nYqVG65Lj9qiwQRUg6zbaWFbRqPFHxN5AtgcxDuVU2WBusWQU",
  "key36": "65zGzB5JR38MdKvwpt78bC2JrSmgJXVAPbtSPTq2t3LZC3y4D8CjQFmYzwcfVVjnuTBHupCEGxrQbixqSaL5gapc",
  "key37": "5XdTYhS9eGQs3Avw89XG5MepNhRqpQWPV1SKY7jKACpykn5mhLmSTr5Q1rAtejdCQkBY9nc3JHEAsxxGtsPevR1i",
  "key38": "5Ata3gX8hTSCewM33hb6y5PFf3mLqNWocwPVtkHkX2ZpnNPUFBUZknLZdQjVQoeeLhM1HTPKCHGgUvpUEAz9BtUt",
  "key39": "4Fym5Q7RsbstvJV9hVTSqWxmN3Lhqe8rTssmajyc6u4N78Ld6bYGu1gf9D5NzvsABaTe9geg9XmESxja3p4ZLVMw",
  "key40": "3EFnBRcFib7nJYcQ2h2Ux1QgRE1RxDmncB22GdcB3MmRtWnzsYgGjwAnR3DWcqYBZaBbXGyyJW1XQ9ZPphvRQMB8",
  "key41": "266kJXTuDYAR6zoZc9V3xH79fzosfhfxWgJiX5vNLnoVPdJGp1uxPtiM7k23uGUQnPi2SxyCfZPCWaCXfrgHdKLH",
  "key42": "2eKNVTw1N4tRfjFFQPQTmYoSsGqKhFUQyihcAS2SgKPnC92KeecGmmicKzUyfsMZMAKhCaDsJarmXa6u4fUBsbtm",
  "key43": "2vE88CGqnMBLn3ruUFuioHqgb1PwAumSfQDYSf1A9tjbS1PQQGnyDMX9p2Gn5jF7caHTfFCbuhWS9H8Cbz78pLKx",
  "key44": "5j2EwDkgmDT7u91Pj43EWM7NZqbrZs1ZrEHvGp1E5WuUuhSqFYN6nKRUHHEZYzjpA5WCrmnSwpBcniVKes1enGYw",
  "key45": "2pmh9Nau7pxTZhPFoC9nC3HcitBdA2Ly9ng3XUbcQwkBPU7juvMpjUzm8BSK8z3B2WCxpJuy87aFB51odWu9DJQ1",
  "key46": "2msjsYDHy93rLgCAXihrrvRwPeUgBrEtxSU3paD4csvZ4UY47Jk12siRgd2iu3VcwvT4cTeiEKC5dWXPSLh9Sz11"
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
