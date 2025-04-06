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
    "3B53s4oUzrziJttErzTmAZGF7gwXP8NQkWnb2JUB1jWYnfiDptm4fRHkTxQYbPWYVreoQZLAZLH9FvRYaEMc2RWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKQqy3PvKJijBbdfiNJ32EkEgmwRaMaM4386fuuYxSauAzh2QWeFQeQ1LC1WoK3TNgDRqXTWC1Cwgz7jbN9wnK9",
  "key1": "5tRj5v9VYCLrhG3yuSTT5eaiYVXxwHb2Gj1JnasR4RoedBb1wKhhKCL1KB5qBusCNav1dXFPcYgJ6viHjqXYg78U",
  "key2": "aDiuEf4BmzisLyDXBM7QtMMaD5UL6dL5BUL2diktGeuMiNN36vy6nba95M4fyYMRDHiCN15fw7MTeYf8RbpjPme",
  "key3": "5KLEwSSAzN2MUDcQLgHgpb1aJSPkrc1vKhmE2GSgsjKC4K17dhyuMQhC1XMRj7Snga1ZcXaXiSP2bt9KDuPSemJ6",
  "key4": "2NkR7CsNFUgGZjAHM9E82AQkUBxfMaC29kqNEbnXtGYPsvdZx7uHU8jst6WKxMpDz6i9kMwdpqidjwyTqab9JjVv",
  "key5": "3Rh4hd9TL3PHrb1xq1KhEDzsFxPj1qa6K4psFCKMq5NFqKDyoBBgwWCTuTAuCcGYcQ5E7EY2wG1LnE1eK2gDETdw",
  "key6": "64TiFkQhdrNmoFLM4Sur8oaSkYhjrRevgSvztsGQpnVCRJHFxaFk8P4dx8W47SLFjQgoAUrapVYGzZYMbqdvgG6U",
  "key7": "NQWmWtka35Cx9qX3crFGsQN393hUU6wSsVmhJG7S3AeWjJAS9STH4DYQX6p286JGgQqSwiCf53whVvehFj84Xh2",
  "key8": "AEmfm35i3urCxxjmvTCRc2yfU8sBVfdzdwigUGRqbHJ8FjC4rYajbeoLNJ5vQ4uaazdKcZ3aXdf3UHUQc4Jtcpr",
  "key9": "Ks3a1UuhgbPH9yfnJYCu2E9yHTeiLbEPW2gQUtdaWS9JZPVkAE98c2355KSnAqNy6gs8KzR7S9hQXAfyu2Y4Lgn",
  "key10": "4nfWg2GJ7UWzX6CN8HRH1bqDtVaDdwEFDGEa1zQ7bp9Eo39Ri6VibxGNzPGMv6Uxbf4N5o6xB1hkse9WFRQ7FrUQ",
  "key11": "De6kRwTZwEhHyhRJxrYt9uH86M4jZK9sUnpmd7RdMNLwbWreUnLmWQqtqcBAQyrAnMPVNQP2oDFjNDLCwRtRLit",
  "key12": "2zC2RaKLKFfRMezF2ZmnjLTHUhMPbjcspYCZmcz5JTWGn2UCfjxCAYSNZG95VrraeDnkvUxsXUaroU9aj9La2waT",
  "key13": "4bF9N5L29an8QA3dSFVEJw7h6ufjU2JH3iww5Ayg3FGkxtLtwLZLPkn1bWE1aEvxDBfsQkRjEQf8ANeVRb1Pgfzn",
  "key14": "2f6yXaoQNWvtqEDCrRgP3SupQgNte4VvqGPfskJPpAaewLUFzzx8fhecmAFF5hapm694TCdWFf35EuypAntUgrJF",
  "key15": "3NtoNtyqvJu4hPqnnp7pYsBbCsa5m5KEcMViudAUEa9qqJZg5jAsrbAreEmnr3nkfRgHAa6o1YU7Nt1EpCAwCTVG",
  "key16": "cwEdzChqCvbwYhFZ9z5LnTycx2CGwWXfYHssUa1yXkZVS3WevZR89L3e8uw7vLRB7WyuALaECtLAumPf276QyVP",
  "key17": "4Aj67DyUDtGv9bHamAjTYbQKJEXQhfmEs8VLgDb6f2QgxqxYqV27vMwj3FvJ7mjPTtYRGp6hiCCARwB5XQWxPAF1",
  "key18": "4mwF6xRPTQSeVLJ3mVWVkZBdBBvQmuzQbhhVppA8yzJ94PEQ3Bvj1Cf3gnM6jbSJKPZmopqfCm9udCY46wEhqcvA",
  "key19": "64yEHqwBUg7t2kwZW1yx2yxJ1kaqDf3spDxVxqEFebkgje3X1LCZfASBTSA2xRGJMqDamfoG6YFkZe5oQqUN4BSk",
  "key20": "2eZvFT3G9ffs1X4gyeAtYEWPK9JsZBBWB3MybaH4Hhmf8Znk9qEXaEqYWwJ7e7dUbjUxKM5vFHGi7Am6vUYTpfRe",
  "key21": "5zEpfwHGJk6PGTGj7962hkEMTkN3LTfWbGGkxSCJcZF15Hk4gs2FCmoEqcNfqPEGUUnXFU9w9PHE7TNGCgtaAZMv",
  "key22": "5nnh2EwraZTnbCZtT8fCsf5XitsBF4AiNgKPuhLxYQSxL4ARhtFvhyxL4DBn7GwrNhnPk5nS1hownm6UAY5quVAA",
  "key23": "5eZLa6PAYrhcTZtkhUvBX5EFdwigpd9Pb2FiAcKCL2aqMuGRUkYo9aEWiqwzZ4MsjPZxfeyEHEAxzeLAg7uZviqr",
  "key24": "553GZR1KjbvauC4zdKn6GpAjh3b6zazBzzHEeEH4QaFk9G7mMh6ctq2dknGCydXyc6cYZNDT4Newoo4HpZh1dgiU",
  "key25": "3UybHnQ5fmTo6e1S8d1H6hpq7ssFkDa3akVykFrye1VNHbFsnGMP7dRf539c5XbmfiSsgKXvo8WczRd68TbdacFc",
  "key26": "636oW7QE8Vf9hzw4qoZsAvAK4xJBtZwfsuj4KR1L5q3c8Z5ApYScjyaMPxuYeqhdnYvvTxH3gRfFngUwsvHzsSo8",
  "key27": "39Yy83CSMSmmTwpHmiFUqJZu7JHwodvW3CTNgqwsnb91zQBoNZPQfkzMYayAw1MJme9XacVuWbx4HDwnxDT5oGhH",
  "key28": "34NMurFxa3648RhbPnLrLSCso5Ncvqyb7MK5hu4f8CooGnvf7Bm2mjNbGPmxyb99iKsnv49JWGFRRm9fc8gB6Zri",
  "key29": "3zYcPNbdRkmjwiqXJ7g3Mnq3PSa5kJXaGg2wDB2LURCtTFtdWwZBj2qvt9vudTB2qLHJ6MWc5a5ygWRF9XmCYzMY",
  "key30": "5PgzmCbZrNrV13azniuRjZbAGN33dzM91gS5W1aJsn3QeVZeH4JZyU2PK16mJQTktkv8AQywU8PYivr7spQXegu4",
  "key31": "4o3A78SENUXJ9WRbx53od7gSR1FQmTy7vVZiJAjbuYLXprD36PkhxcSCa5MHSSDaD7KEs3gvoLZcBr3U2fzwiatf",
  "key32": "44oT978w1zgwYzcZxHRA5Yn9n9tSDDQU5oiq3sE6jPgSrx8NiMsBpssPQ7AzQxQjo4NsXhpE5B4iBATonmvPqGRc",
  "key33": "46WgpdgKkVsBdyCviEE6WhxqDEhRY3ubfLgiV5JxKm6bXwu8KpEVZ1EZ1Km4SLg6wMasyhLg3dcQTF2MFfhkRLyf",
  "key34": "MeL7kCUu1UQER6WZ6ZaLT9YPtGcz7G8MtuSCUPH6GVFN28vDvFXvyKTBucUMFesUmqQ3VHzDKkBM6m4P3p3UAA3",
  "key35": "5bq3ag4dYZSZfuNwW82b7WhtXSNWgdQ7QfSfVBRHAhsjjd8K87KnYp4u8SqHgn9j724cZ2LmVqv9t3GBkwwTJso5",
  "key36": "aiG2FKdVBS6yvhiSRM15MbYEr577m3jxyBTa5gPVNkUFWXgxko8jNqXHjoGjmqNLLkNMuXLmQGp9CorqidV6bNy",
  "key37": "5cEeBp4P9sF6RAiZwVcw1Sfxk7DEibbmqFwUH28vt2DsF9rKxWhn2oBpgWfesssvRSF62wBxLZqX8tWFSR5we48D",
  "key38": "DARS1AW8xxeNdWBLqvH3vU1RA19gW6aHG2iVQttGSCdBx2LcKNeTDt8eKpwgrxqKodzSJznDVtJVv5rwj2PwZuE",
  "key39": "3JGKYUV2dqpXp1Z6Y2oRydJoYQCzpjfQTpa1USutcK2P4XHuGZLmHE5Rf3dBtmLPuyBTz22RdmKSo9jNx3NXZszZ",
  "key40": "21jqPJfipo8VfZUCcdeYCrzfhNpfWV3tX92iU69og3jSACWexEESLS5ztux7N4EFd6jDHn5ES7iZ65m2aL8mgqss",
  "key41": "4Y33tKZADVNoPB9s1nZTthaHewsdvXNJrDHmR7z22hbyvA3R4BA2Q1iiqjJxEM7Y7SbQmzcEuqe3a36nMxQSjSpr",
  "key42": "5tpgnWoeXMZMjXXD8bgJsqna2jqSpRSZtJrwmAQbvRWod4fghUoEUDtXDg9jfSG183NbVsTQNGN84wynkmEJdzTL",
  "key43": "5gbN4NvGbQbBFsKbEBT9Zi35Ls8WEeJ19E8UqgpqR98EvVDcSTTL4iew16hkr5eMfR2iqKgFi7DxzTZiaiMG3dah",
  "key44": "sQFaNCEFe7VE1LRxJouEibkajj2v96joVaCj91aY8GHQ958g3q8PYXNMuyajeUSiWEJwDMmT6b4rRRmJerj1KHw",
  "key45": "3HeVb1BSQVCuFK91av3GsxqHxbzs7qMPCGZuA95hEkh6jirYW19MHp55eiGPzQa3WCzCA6aiweQCnT87YuTw62ZY",
  "key46": "4JzMhU28DAVgCJADHZKPABnqUQjSCyqsVrh5P2hCPo6ew7qnBurWpUArxjeoduJxEKTDDZwyHDU1PkGm5i88jzk8",
  "key47": "5uYRhCtRg2DuSrQcesgidp7yVpuLKAkCL48SxGq8JacuPVjGz19y1dJPXEYTrHumNwv97SNkoGww7VQJzPZ2kyRx"
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
