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
    "4i3fEjj9qvEQMXWfZL45Mspewtc1x9mj5KifFUjJGfJvcuR5zuvrAnRt5kKtXU8pmDF6wtjzYBwBmR7gVGmKfiu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hhTqciTSt4rumNUxn7dXtU6QGCsD87TrK6efEMXNuPH2J6Re5wcPj1oETfFNozx392B9zPVavXGc9DHcvKKUfRb",
  "key1": "Uru3G5cSEZiLcb9AatvxS9GpNKBSrwmU5tdb3xuEvsLHf3DrHLtPwUFagPxgDkpsfwbARTmT8mSjaUcECeU7kCR",
  "key2": "vfFFrPndNfNR94my4xuwwBBaJE19sCDkJFnsZUyArWYGzep9wyQNByJ8j4Ws3ZvdoA47WqYh9WvDxQ2Lb1JCpiS",
  "key3": "3uLuAouDfgFbCVn765CPvekQE8Pw5Ufz8gnZsBqPDgcfLcqGhtEwmk29zaQrTpNUz3YdXpMwJsHn2Dierk1MDkzd",
  "key4": "2p6xzCGnkPQDGaTxP3uZTuWGqK7cESyHsfKfBpfaYtRfmMZi4DD8Kfh7wRg9biZ29x7M32NkQGPU1nyqiqJA2K1d",
  "key5": "2mjpcrqReSFi79oWgzTyNVm9Wj8bS8qgmWCDS34ca7j9UNm3fkZZTdjdxmc8zjJsky8xsNsAKZB9rLQmzxvfyx3p",
  "key6": "3Tk81aZFwMayEfFVvciq3wKrVgqsYnDYrjB2sigu3VscXY3XJkQFCwj6r4Ykd8GaQSW8e9CHwCZM99ZDBqxbwRSS",
  "key7": "2HGMvTs2N9kuaMtvqoRsnDJ6wtnw5LfeakJitxkfUS4knPkg86KWqJ3fdEuqQre2k7k2cSUv28k1XFKyU6L49kHm",
  "key8": "37t5xe7fh1N8FDhHkwKTq5r8GMimgWVp5KekNpoTzx6WPccZbUBSBs5PS3tYoj4AY9KPV2hjQ9QuQRZtbUQBe1Xb",
  "key9": "3fZQDGCGPMX8mUH2EUEH7M44TL8U932R12iYjap3nQJHWiJLsLYDYPBbdNzcEH1gh43DZuXjpocXX2LQgDPZRfYa",
  "key10": "2sheoenHHFMpfLTP4w9bMuUGK1Bm8jZKfF4zW981x5yubbiQTzGZjEHwrbvne3GPwfubojdKZ6GxyeuP2AzkpnHP",
  "key11": "2rG3wXqB2ZqZwZSLGAB2nAhZEvtCwMCDKzpcyYKXhKyj9CwCAaXUc33FvnYqN5A3A2g43LVyg2KXiLQZaMXBzMXq",
  "key12": "3jDf8zHyVrrAmwhZ1CzX5ZcAm9Tc7GjfUrFjtuXUGPyw3onVWPQytnUBgmeEi3nfaiLeNpYbCZK7v85GumADFJXG",
  "key13": "5PBzJeTsC5b2rw7r9gbQdgcAGQR5i3q6U2Cu6Vf5HkF25uqPJFWCmHNTBcJwVeZSbSc4mZTKewyNKcz8ZMnZp7jZ",
  "key14": "4tq35cvwre8W5GNkWhg5pwkMaNNnAf17n7GJriAFDXXaZ3TNsy5ZJbSNaF2VuUasKXttd7bmwnecTcKtsmCKUC6P",
  "key15": "28JUsbVpmnHY46AfaZY3DKbjojinDLS3kFpk5yxLqZmwa6CSf26oGnfpCKXnCTLijEhQ2jmHzZMxR4kztRt4jGmj",
  "key16": "3WY72LPtxSQawp597rD5wrq2BgFvAVwR5hR6iUoJRn9iTf2TSJzazkhtRBSsebQMBWx8YQMSzZJJ3n8ZwAPr8C8U",
  "key17": "22RihgnaLDfZDii5hMWMMiy5uRy9k9UYcpodJnGjv2uKyv6HtwGBCkLFtLqdrT6M33YMkhSLoJQufLn8x6KDB6Fi",
  "key18": "34mF2yMh6bEG1tTWTWX9dJeGD4ooBHZ3qAb3W9L6dX5PRdHpcMDNaFa5oBtn6YpMTSr2RbM7aciXhnr4vLXtChxT",
  "key19": "bzsWShu49vJmj4zqaMC7JroP7WEUBfxJA7243Nts5PDdgymJF5euJDab152Xs85gNJPWFupwDKPk94Ui3gYQzFo",
  "key20": "3tChioaEGBTiYHX1bTW2az32S2f62EBNQoL4D992qLQKwa6A3Qg6eCuEqjaLdcEFNiEJkN42UBVEdm5FWcT8gGUu",
  "key21": "59ZU4uri7juhTRYPxPjm367NBXW8UMQZKAG4VnjfjTf2WP6vU7ue1sG2EB3LgDWKscKhKtBcAQXPKovjNem8Q5Ew",
  "key22": "rizXNjpVE69tTvPdc9dc7gnApkoksTvKn3wo4n83juJXeD52FUXVumpFMvUkez3L72Ds1wM9RuPqmNsQAMpWSkr",
  "key23": "7LGsZtQ7HxKKzzKoDoYtrj4ktxbPFnELv1LwWn2LV3KW9xAo4xxzZoifr39q3Cy36U6SHuEc78m9iw4QdFV3m1q",
  "key24": "5Tz8K6q5JtUbEm5hyzmqJi4s8Y5Gq8y9DJEQSzQA83PRqjpi9Vv4XgHHJyUyYTDYX6B5t4eAdt2sP39wWMenKY4A",
  "key25": "5Z2oFnPeSaQ7UatiTwRCr3ZmC9s2whQHdSErw5cac9mbQftRybSuiiFouKV3TGZC5J75yPE5cBjouuuiGtXdbMM1",
  "key26": "3CoRYNePgrkvEgZdrSVwibhSbWNSaaQ5M9ufoawE5uC4rE1UnTzeT8xvjd63KNKwyiiUbrEY8PNBXTscYEUDTfEq",
  "key27": "3ds4KD5SXvRWPLnUJpiCwr6n9ydYRAbu9WDdbhhAkueZTefDAeJqLjAaueQ68pwxbmdp5dwG4YhCpZA6wC7hXCsb",
  "key28": "2BtnuFDNxvyhRTyNPF8HKj93FbGeL7XENkDnxAV5ASpZzziWe1f6L6L4TNhpPg3qC9F7cEr635szqNgGLsG32Dx4",
  "key29": "428WswrxqHo9as46igBMDBaSieWjbJnSCnpgyKyFmE8rQr2a1a8w8miJ3pL7Nn6AMRef6jh3VVh7DXDj2En4zvWw",
  "key30": "U3F7qsZaA7A8EaoBKzJP2xo5R8vtdAysjXc24W9LF9TLZjkLUJzEvBxwRJf5opjtKEfTDBtsRK2NffKv34wESUh",
  "key31": "3S3tho43xDVAzBrTZtJqAniyje5BF1aSEmCsKwWDxQWDD29Cnsh71nbpBQhsPaE2PTgNHnCQ4oKcNkPbmRDJTzvd",
  "key32": "3NCgvk4y9paPDtgPEj8ovKV2Dq7MgoC7v6DfPUL4yxohHhDYw1cXZQPKDAGKBLucpYzxrED629W64mytGDbyCy1M",
  "key33": "5Pg4KKkXsmfPVrRZRG6PUN4ku1zM7hwqWi4NDMrUFJJVCFzswY69vkVJgzAF8CSQ91TKMaichJVjgorpFThvj3F",
  "key34": "2pPPJrKLkJ6G5qr7hzVfcMBh11pzeDgi7DdynfaYaL9stz6GHHcN7w19ft29Dubeat75xd6Bvmj12Ns1x1ZckTNf",
  "key35": "y4RH2vssXDbTmbcmLY6UDbkHFD4XmNsCULZB1Ukye4Fvv9j9EH6stQmgXhJBkSb2opEoxtdQSshoLVgxQW7pzTm",
  "key36": "9KkhK5jr6qM1KGN22YSxqwP1imyR3SCh11HXxFzs2fMePoYz3rNPzLmfYYwSM7f9b5mymZ1LnGifKRjTfjKofG5",
  "key37": "4M8Zf6hsQTtneyxvZrrLK6At1x5ndPNeeJV4qGZmRVpvqZqScB3m696yWo1xmLwREjU1bWkUSxrhYJAAp2Wg1Gd1",
  "key38": "4J5HNmySiSEvYpjQ5ypgKUbYUfs13fsAQUk3UtpAgi58UdeRyx3ch6aJofB4EaibXdca2tQXXjeeRLyDPKkZbtqA",
  "key39": "3uyngLXsNDBDn7PbzZxWqLdxJ3WsndFK4BT4yxMFBsdZsmP8uyG6V6oPa61ngkovCBRFAsFGHJHH1aNySzbRvCve",
  "key40": "5GTSFTkksZpCDWZjzJWRXUKrX5LdToQH7EMzA5C22b917RdMK4pjepHxT6zb6EZBnVZhJpyod3yjh77XMKUaXGvh",
  "key41": "pBqbtj1MrFaN9Afm433vV1e4AUGu3Usyz8F9Ehy51hnEioE5TC4jiLgR4fLcn87joYucHB4iEXnnDXvqZ2DQEtD",
  "key42": "2dRBvvb9oAC8ZDoQfoHCtRraZZhfm3Sws4BAYy1nbeJSphdwkohsq5ktRB24prxKU4YWsGQMBFTKwsJWrFNHDLaE",
  "key43": "3Js7wFgapZWgMz7Y2ngKJUV797eGnMeiuBtwfAAY2KHQ1JLk2wiKpq1WNPUBjizuH1RtjxHSyZjf3Z3nsbUBLH88",
  "key44": "pJmx5XsHgms3V84y5k2T78ECLRHSz1nEW71fvSeLbtbBQqPdANss1ChYjNZhfYnf23x2iCfrBKPKtgCxukYwQhg",
  "key45": "4f677PQg84FdLAcuxfDzLQ6XgHgeonUJH5zXUx4fzjFbFwwpDQE8yMRVMhSxAqac6gWWcEef7yntktP97E2FwAL4"
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
