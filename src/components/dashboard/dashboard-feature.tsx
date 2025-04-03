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
    "UnxPjj83WsAsa8Xbk9ih4jsaEFd65BKtu22wcQEqdpn5UuTpdjdjfXbzQFerU8FL5pYGkETW2KSb2Xe2ATaxzeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtXW5u7Bn3W54ewzjqntKnCewSs9LgkZgWYE3seARxvWZUzpAo3HyiJnkkkEBsme3u6U2w9M32x7GBHbVNhkqPG",
  "key1": "h5dmYewzhyu9iGzRKrfaKHHtE1hynZZwAvaD158aVGxzQoqMzFruLVgAxw9fumyDpR8yGvZx1mRgEDgKUWdX4XF",
  "key2": "2qn3C6MH4ZbXjhZkzEkbnTStHCQG2Hcn4u824sfdoTLE74FkxZmkmELwpgu555ALBmSvKHjefUAuUHFq8RC392Pz",
  "key3": "4MX2LdyZk9AzKGAQAHUUfe1oLWHSptVKrUpUgTFGCpioxRjjwPjZsHHDTbvnpx3d9LPYBbGwu4mcni1vw7jFMD9t",
  "key4": "4d5KmFZkWffFqGxJmCBovr2hnf3Yt9siUVbTQEgHuyLWea11T3CnzTZMoeRZYhVQ3Ysiqz6URcRigLowyk8mozBA",
  "key5": "36TjMc4Xwp8smE1dUrYiXxSBGEfqacrVSPggRH74LKwfLA6soz5E2v91B7PMS8LVMPfZiPo1FC3Py63EFfU3qUfU",
  "key6": "2CTgonKYDvDdVQUmQd7g7GQEuu2emyUWKdTd212MZ67iDqdE6sBwFDCWb1AJyvRA4fHMksENz26N4F1BweMUX9Ua",
  "key7": "4ywpcedf4x7BPLUwBNbpuPYP8D2a5vaxpavW2HAqFLVt4jS2oe6tPfAptyNGMFGqyttf9eqyjfLFzDUDWfJsyMLB",
  "key8": "4hgPkDrXgZNZmBZnsB1eM6VjegeL99JAHZagRmH3aAVWYwLv4x5b1K4jzMFSQTEDhXBAmfT5MjwxYTWE3tcj4MFz",
  "key9": "KfVQDn1YnhvXJCwhDVDdvKYbi8rFFGtkEE4ncAGso7311JisUxDeYt1dU2RdXYYa7FEWoojGAbKR4fjvPdTJkiL",
  "key10": "2jm9PvbYFLaupkjMupTp7qSEd77VKE84JdeZhdiuHJ8YsdSqn9FCKfCqZhNrEQMWWVoUjMeVxfAqH8VvS3bs8dSo",
  "key11": "tYTUh4ki2SXXriWqnzndyZ7JfGnzQqSEk22XgrXZtpVZigNCd87PmgftsfvsEbqK4Czbm2KU6irhSN58SvqcSzX",
  "key12": "3RqpjiiLJwxPGAh1GjfiZ8SMZMkKFNJZJLUDS2Mg41ghtYRGT8Jo8m4jJPojyhwXaBYotkSoy5dq1CyVgGtJLzsQ",
  "key13": "3c251KSEdbeYYq36HRW31oHHJjCiBiKTPiYaD3BVzSP36VHPLe8VSBemKwwqWCgrpYbfFcdsj9XQ1u8NtQd4Hnk7",
  "key14": "3eoYmSRPtDdPoBFBdrHZ3t3j1w4VPojJYdHYZsDf7th7PPMGtLsJ95jpnNfLn4XzvBA6AoBL9jomxnyFiqzQe9Yq",
  "key15": "55d2y99FoBA14HbfEHAzo3DfxbrjmRFfhxtpsmfPkkDj87gdSK29nTvhxrYSz3RLD8quM4bUzTzR3SzcsVYxZwKa",
  "key16": "44EQf5yEG1TTmwqxhPybwcxsQjnMmRnNDBbpeZdtGYE5UosHu4piy6TieWrDCJ5phiwVoNBsrMQaFMRgkw8i4rDT",
  "key17": "3dhY4fUBsSBMEt6pmyXtRh2hN14T7ojEbuJgLHDp8EL9sPE5Gs5QQS73r56swVPCX7F1b58SzATxTVbAQHm7im5K",
  "key18": "45hbawWXdZS1XccJuR6ytvmND9aeWwRMTCGA8DhmBdacYbVZHgohbXRsjaAMdgqTGM6YRWbVGyU4gXUaoK5u7S28",
  "key19": "54nVHBYRNeKF8KtH9HypU32QTJhrJ5dcNW3ZxXYMZ3G63vqfeaLJuTuUyh8Qh2YJxNy7ommKfurN87p4e41zPjRr",
  "key20": "5FMdwKKmY3Tky3PbM4HDdLoRCFZmGpat6NxviaiyZUKmZwHRCFwAneroQxS3Eq5aRgr2qsjaTPxqfYDFMiGHo815",
  "key21": "4wFaUvgUxSHgmBNqnbzQU9UQoViDKhRePkEoqTQgcwFYSrVNJ4X27g8ukJhV5fM49gMkPZrSja6Gs8dssqxTBPR9",
  "key22": "4ZXWD3bvWcGpwuuxBGYd9TwK7cZhmkizAtpK5jMzpLNTVRpqucsfErzsPiS2ScRB5KHfFsQHyayBUvUfSx595YRS",
  "key23": "jrnFYeax97iX5cKyLg2Sb655MGrLuNzo2AXysaJ9ZGPG3fLFaDzQ3bBT4NHkkuFbenBJyi6qCBaqzXskTYhj3ye",
  "key24": "AbiCmMa7QKC69zSYbhBzFsjXuVZ7A9j8GhMH2HnH5pYJqtAuWf7cW1VjC8GmJ7tUj5aFL5LF6HXRY5LmQVmYk5k",
  "key25": "67Nft5akQyeL7oMyaT8EGu3zXQ7LsoSvMXFT5aovDzaZ5UgiP4cVz2nak7hQ1ud62Hk5Vkwm7XwdTLnpqtqx7k3H",
  "key26": "ZjvE3fVC4fa2mydeb4tHaNKCe9eRmM8YTDXxLehDyFSYTDzsZDNZKBHAKeSNrGJBcwf3ew64AvtFmN5WG1TeMwV",
  "key27": "55zZoHLPR7APZeHUid79E434UysEANZbZ8jcxdgNpNadViTtniBUxQJ5uixn4DnVXYV8yKPSxu3LUL2j3x6nbxBo",
  "key28": "6JjmSAn7eGjSDeFxU9ZHMC5HJd2gTDzL9tmBs5V3aNi3grx6mbyHw2Us1NVwfQGBopUXt98P6k9Fw44nWEZ2MRc",
  "key29": "3Ny3jVvV1N1H1d5N7pEp5rFyYWs6NYhivD7QSHP5dSe3JzMUZHTFd22CN5yuueqNrd86RtM9qRUxcFbDRWyxyypg",
  "key30": "KKECHp4RmMRK9yfrAMGrdPRZH2QjVPpHmV4VT1orQWpEaiPsF9KuPFmuE6BRAZNpexpFejQwNvUdgNujd9F47VE",
  "key31": "4iWzbpAqwP7Ma9DfzeDPBq4UWrG6kCnPirpQLwgWb2auww5D9VrEuF3PaBo9znyscwKrxUT2KBdd7qNPHzKXYLr",
  "key32": "23mMXMD2BgqDzeFhviqJ1NX5uKZ9rKearNXaW99jxSRkGDhdom3j8ou4gAPoDjCPEHMrwuxM9drvN4xxBBSTeY14",
  "key33": "27Ta66buuTzM5PrQevCNyacGMpHpvZT5V2RDBvEJEFJjPQdE3eEa3MNo9vjCdtPNBFZj2q5c95u8PtSfByHcNqXS",
  "key34": "3dkVQcau9fg2U6D1Hdi2bv9RmtwThMQqddTSwtouzokYnoCcrYov2dQgzWxHSA17Qamy9QQF8VqyJJjQgLVHmLZv",
  "key35": "4uidZiWteDZdJiBHKF9x7S3mvrX68pVw11bdWRDbBHafDMEfwo6s3TQmffj73DGKpci9qLRw3uMgmJcENSVzzbBb",
  "key36": "2aMsX8uCx99D2vaUiGbRDe53U3NcEpf65DLcVLv38SmwXCgcogHpLFHmvTfaquHA3KQgvoFETZBmBgYVtShuBpxM",
  "key37": "3fJP6stzzsZs4SnhBH9dQgj2LhYXBYzBNns6YfT93efbxZJSkeBfm8oRrvXHQy9zXRKG93KnbEv5FctyqxKn7XPM",
  "key38": "syXZz7VDaxdY8M6Z4L4gQijvw2u6UHFypj9wDsoKnLkF8oXs8hQXm23jhJYjsCjQNfrYdxP41EXdAYKSdahYtvF",
  "key39": "bS9TTg8vjCrwLvSenS2Lnugag8CMHtXEt3bPd11uPPwSH9R76uajTL7khW5y4S23AdpzEHnEWvbXgd2P43CHU61",
  "key40": "4MhREndDDXX5ZgwdEuuVZaPbZQwcTZrh9LBV5Gp6wMqrwzDfC2r8hKvquqkzJ75jvHNyYnagBNoH1nVeveQjEGZN",
  "key41": "3XZNixhfJrzq4JzfG7f6g5ZuYykLWzQQzKAXCV54rmS3jzrEXWRXgKpuCaRMScgHfNQCY5ty8rVCxxp5ndD4uhgu",
  "key42": "4iS6KkzXkm95BMpYvjYhwVhiAchNhX9W6NytWX8bBXvdwmkc8ukaJ6dVLYarTunRYQQ5vYB4b7g66xrxAHZZj7Gd",
  "key43": "4gEn9AxQHijkDLNEUnB3cmQaRYbrcPW3CdQ2bF3u8qdnGtLDrHX6B4bLjEr4PqNG4dvVhA9JmKMyqzg8qrfXXYcu",
  "key44": "45Ad7CTFKEG6ibQQGXLdkc7Lxjk4BNLTXBfouxRoBNCECZLSHobYvQKcezLru9x5Yhge1me2JifzRGc8pWevp2qD",
  "key45": "64p6araUXZP4NFmeoncfHz7gZRwSyo5L9jgCc2keM41s1PYZkqVqARsKcsgJpJ2CGpCwdCo3QTpsv48q4nMiAZq8",
  "key46": "4852fTz6WAHjEU8xWGpvAxgqtvdsX4x7BZwKeUEN6wSQ6kzMLXYj1cQtdvzjCDZSdWeuPDdBP9wgUek1vutHziuG",
  "key47": "DmW2rcoDem6zfemyb41yCRjRuxDm7YghhsYpTEkiFCAHjaMbtsNUhkfiQDfM9dWHMKcaYJz2Mzxu29XtoDxGV1f"
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
