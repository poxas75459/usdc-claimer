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
    "2rT6ArsPuk44igXFBkcEnSaMpqSRgkGdNCgznLnJ9LPtRqNPuuxiGnadb4uSE6AySK676UThWtA2VVpMkksoasqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LoteZLrzw22y2HLFEG7rXs4uzv2H8JoLaZaHprYR6zTqCLoA6W8DPYPBNa4BmffimbrrS4qpebVVq4rRULyL6xH",
  "key1": "1cTEEXriHeDTdspsXXm9Y6QcJFNF6yjGiyG4PUqH5tqVrAumPy6L5pVM4t1yvRMDFyt3G6dnUH1pZrLTmWaArS7",
  "key2": "e1cKsMxaB9sWNNNBMzyTmNcM1UYgH8pztxe1NanRPWd2hugepYT43dSVmddh21TzACkGgryumY1YTd69Scah2E6",
  "key3": "4A2qDoC3HfXtGKasSwN9vT198f6pZUguWjJWStmUKX5jFi7oiPgkcgPWZ9AT2TxbQCDukg7F7PC2ev25UK8D32sc",
  "key4": "3gsxfwbvMUVfnmo8yKn4hwMBKGuETjDKuyydSHUTbTyLWVczThBEu88sExjCuNUFJbxqkjBbmSjgp5QHyNDBMKie",
  "key5": "4tyYp3EvXj3Qti5MFodLbqsEmMrF8aCudNJeyshieqCMpr9yhHK6xBQfrA8kSfKSpckW8W8HiN4JFYTRutT3vDSv",
  "key6": "3S7pPgkuC7EicKzHWRGxpdE54FPSwZ2vrFDTK8mBhcMtS3QcPFfRi7SzUFuubRVdaPHzcW8Vx14uvmMt6iY1ox2x",
  "key7": "VGKMpt7duGNsNUEymxwkemDLDe8BZEeEXxiNecJYN4r1wgJCTKQwvNyY2q8trS4WhxeStFCDPnPD9bXuteB117s",
  "key8": "5E8CHCWvxqkDW55R9hMErqXRPC4uw9AzvPeA1yJpKTf8a4562523Jgq1YztMWGZtXXYBm8VNjoVk24UfsUasHhz4",
  "key9": "ry1hSE1meLxDdogNzmGUJh2CYzapF9hTc5tU7Y1XPh389La1vvftrUwMuJFQvwuTSxh5Y8K1kfrQUS16TKNvj4M",
  "key10": "5UzQPRzgfwVuAqQCk4NaxVisMhZXiDfvZFH6rufhB8qnqpxuZ7XtsCvi7id6MZLV8HEfNPDerHSwtzhu6GFnunfj",
  "key11": "4CySJaS3LAyAj1trGcZdajAWypnjERkxmyxR2qL8XkCj4kkUd2gbYe7CVKzgCjtaMaFM4JWrYQ395rpzWeHBoqF4",
  "key12": "3PkKuyMtCcue8w2T3HqDHoDwLtcX81SZkyLpdbswAoagHyDNt1ErharnQFaVMJkEMhs27CTLZ3hq8aMuXyfqYR7r",
  "key13": "4dYEZsyUU2ETUS3yKzfv6NKay1uoTxwHcsTqFKmvtv36RHZjCRqdMER1azchgtyHYLFJhdZcXZXXLvAzALTK68XQ",
  "key14": "2yQC49gJ7VZ9sUCeVyNZoJaaQ31a2ZG4iEWGT8iSWc2ULEC8c66oHKg47T5uZYW5XrCZbUo4DHk6wcP8oE56BLsT",
  "key15": "2hLgH1yjGb4YJwzhWXjiVg9hTaEZdvPMbzVouhgdFcJQrz1xDmMZ7QEX45PS6BoBDwHMWcKRCJvdcfD9s77etTvR",
  "key16": "3p1T3j94yk5kpcPAEZyQAkD87Q5Pt6NHp5s94LbLnSgpXRJjouDW5ALSEN4nBdnXtA3fUEkZDp6xemqKbsbEahqx",
  "key17": "25XgtgwNgprNXjGNmd6fTWgda9qTd6gE9Dsn6eNJSqP8DZqj9xyKHhJZiScvbjrCYzUysSPgoKWUPDftoBQyvW98",
  "key18": "3XuVqdn5D3BiAtcBVwe9izGUNE4Vjkw4N6EGMfLAj1vuuLBJBFB9KLVfgBtoKgJXWhxtHZfG4uTZNeYmo3MFyZuU",
  "key19": "5S9Jmz6GH1LuUMk4iJq9TQiPV7azsAtYj9mgLTJaA3ngytZmAko9NGJsSY5Xhj4A5iiJGxJipaFnYgPUtFE1GMeq",
  "key20": "1Z6VQaxrL8Zj2HcYKYWGnsPNVmNk4mXAUN2z6faXGAiHkoXNcDu3b6jyJhHdHcw5RTXAt6RrxnyxLZ3CKEhpuW5",
  "key21": "5dnqdvGP41nxm3cSCXEtoh3G4E2jMMA52GhLXEsdS3KWyxMqh7DtniJeWJnHyoEB6DUpvgAg3SFwv8nnaVnE99Gh",
  "key22": "5ZZHf4GQv4CXZ8K6FXBt2K26euVshADvvEhTtYHyJcUVCSH4invA5sLXVAdsnnKnRSSiY2qf3rbZWu4ajCA7ToLG",
  "key23": "2Ri59M9bQ2bCKCKYXGyckKNLJp1B55Ki66FUu8D9HYCbzWpcYEGuHSJFkDwshaYTWYTnXDpzEw4KuWRDSY5by4j6",
  "key24": "3rkd7tJVEH7PRKoxECfaogmjdPGqaui1GhioaLps44BTMGMXrzfrS8FXXygK3iwNRz342jpi2L8Qfj3c9Sj3jvWQ",
  "key25": "3wQhkBKbdxTYWEg3x34P2fMNAoNye6TeRxLVG1ocuUXveoA7wYpovE83VqNcUxnUxQMAc8qDJKrbrarVsWyav9NM",
  "key26": "3ShUh4D31usbAcGUfSxr441zwEVaq6XFUd9W5w55DNS1Z4XSYrGQJKMdG7ak4P5dqKnX8HZZJz41Pw8Rb4MF4vXS",
  "key27": "3UvsDAQrRCoxbv5y7j7MXBmVLTS6ii88Hip5zKREy4G5mbV6uqxAtWQr2kY1TPX5sbMhFzNcQuyix96zYX5vYJXj",
  "key28": "fXhNQvqtkoJ5tB2fR5u5HTAaYn7Dpc6frqjywPxkKikWMjhUnv5vTED4LsCat8p9UPmxmbNe1Q2ntTCpSkxw6k7",
  "key29": "3bKd4iYUeHaCVbimnEew99LgMknH5anULtvyPNYF6Z3fCtuUnD67Zx1TEEPtixmCaYwHj4Zr9mMoaYntjnRokKsR",
  "key30": "4bzUuvfEEzcCLD9z7XketjX6eTsYCHkbMtYZqdgf9Qipk8dQrLAWBHh1e6D8wtM7aaPBwtvko52YKhVv7y7a9qLR",
  "key31": "s96G1BFA8jopTdVykoEk7z3LN6cRou76pk6cCrmJQ3W8fbQt3UTpo7mi17Bc4zSGLuwvfsKGzmdHQps55LTJrao",
  "key32": "58scNcsVkB3vGxkKi1p9ZT4PWyAg7xD3Lm7vLXoMnGYsUrefBrQ4XAa4UpB3k2EQ2PA37GrKizw5AWDQYDc54t4W",
  "key33": "4X6KAVyDidbnJCnNzpsVReRydj6syXQLfDx8hnex7gzpf2AsSdNr1MexDJC9hAQKtYtjrvLvNXLREoPkyK9izkyb",
  "key34": "5kWZgTcKtTYofYWDA8AoMRZA9tBUopujNBSwwGYKUWgtdbYrnWh6HuWGTNgusvjL9TQwtVmSYaUo1YgoNrwzvtco",
  "key35": "4TchjSSeHcVGc6kmxD2yWh834MoHuUDhn2KfrwTU8iSPWajsLBEqhzENRygazuWEiMVyRKjvN2beE7RMqQFUnFR5",
  "key36": "2UzYby2Ae8hE9yrkLoTLYZTyfSeb6NdjecrktU9F9opXcUV5YBBW9cb5TRzAvmXwvWswJrJNzt2WNv3775CQmVdy",
  "key37": "4ejmrND7QZht7WQ819VDpoABSFMW4QHCskACsbxZHGLxAvWAQUBgU8giFHSAeV3TLKXAGbrVWbf6w8GLaLcA5BTQ",
  "key38": "31zcggSTx1PMZUGrk71WmrwyHq4BopSDSWrvzHofpc3MzQU9CRdMQtPM94Wo4iRME1dcpkV4pYkQVqQwgBwm3w7F",
  "key39": "2qWRMptNCt3fv324fU4ikN1yVVDzCWygK65Dao8h9xAYYQHHNPjGBVp7GRp8T61FDCjwHMdkQxkxsgnqzjEMB8Fa"
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
