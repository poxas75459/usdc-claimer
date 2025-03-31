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
    "KKcvL71hzSbAAvJK3FR1VAm9kJJ9iZTdrqj7PevQ3K4EZPce4TDHihwaiSiynZ5h6LPcGaC4jow4qLHFcZdMJqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxZbsjYzEF7wzitThd1DDtBKKQohKzYV2umWBkNtcjMQyFMxPAZTkXX5r3cd6zGYpzbEpJHqQYNdWYxaoPhWkBi",
  "key1": "2pUATnLtaBjnKxuVrbND4W5gr6b6uM47iRH1EugnYiGMgKEY592WRNpc34TNLZLkoZfBoeszjdE8XZ3q5rnqwHix",
  "key2": "bQ3ebx5Qx88eUsJXXEGd69WGuELfyiVnuradUwnFFYGdhgMaT9mohqUtgtVNprS9Zsx9T8FUyE2L6KomLUs4PYq",
  "key3": "3sTjhVWBRjnhuRVEazkEhsqWnNF6Nf6JPAgLjGGCjaBWZkK9of3rBKL2fNJC4rzGNV4uSNee2cScwD4fFDjnqqJP",
  "key4": "xPjqnS2rd6ua5PiWo2sA8RMU8H22vf38JALDgXzFVYgofcasfb2UZRz6mcmLhysmaSgvp5Pz8zeYWTzbpymXCET",
  "key5": "3trt9i5aefybR3e23ziHssf9S3ztSf9gVmg2xXpsLHKKjwbCWSZqEM7XEtTeeUDkB78Nuxr4iWtfvCu2ytSWUezv",
  "key6": "b7o1Hay9ZasmnfLJUqyEEL2wE5Vs4HEsDyyiUrR41HMN58CScvgT6D7jA6G97StRi46mGCepL1ktiWtGUr4rBXy",
  "key7": "5Z2bsZwXTRHcqjAE4hKTyKwwGiGq44dEjmFHh6gdauVwPV9hznM7YSmUGkHyn6fGNLyCawgzdHj6GQt5W1JUBRms",
  "key8": "4soBmv6wdTHPttFgCjeFTqxJfRt3HHJ6rEnawcpvC2qUBZBPra7Gu7mvn9PaEDo1tzvKJG4n9Eaz7WysjSsrcbk5",
  "key9": "3E4u86Kr4ii6HEmDgopxjWmsqXKggJCAgDn1gMaFcWmrUHKcnorjJk9LwYLXUujUhHTSZHyZYiWSwqzrjaoePfKM",
  "key10": "3DxMCJuJKryg2YU6e6Fe1pcSPMch2iWSGCe5JcWfoSt7sbPUrNGgqV6GqixawpfvU9f5cXY2QSgdusZ1DpdFmqHN",
  "key11": "2ern1q1Vws92EedeuuZibnmdCWh2VePGLw9nDUjEjbciqLMzAT4qnTLrM2P3neXrnCa2FE13RzDX1ce51qwZ8vap",
  "key12": "t3DrezKta9d9rxQV53VoV2HomxrYgeQ6ihzYcMVGjKAvuY4dG2WGUBELs5Eo44EBVXEDQtJ6WA1ifWMFMDvecJf",
  "key13": "K92p1C1yS5Ni7uFziEVDWw3XEvL29TH25pds6GsR8AVJ3MAwGSqCyRQzm95N6KwYmQZ6X2mnPiJvjxvnd5Ww63Z",
  "key14": "41zpBoffTpRg7hVTh55GR2nVDM2jrGewajuXNzgQ7uiLW3Wb3Qpy1Y2yPkctmsF2nKe3f7wQBQJNVpSw2rTGvcMg",
  "key15": "44TTALAQHeMAJ5jFUynYBv286JaWLoRceHtZKyoQRNXMWr6FCnBsn98NaLPcpkoL97uAYaYd3HoHC7s9hitGxGMM",
  "key16": "HVLJhgE1tBWHopNRyyfzvBFvXSNQHRWppVYm5Nd5TMPPAV2L2m9qnebSRdLAvp1F138nKaj2SbdP4t3gV2RrQax",
  "key17": "3EnnJbmpBndw1Pbjimye2MYZstpnGXEkNhKhnTqxE9da6TiL84WdPhShLtB9nCjtYib7sYjUFM15ST2xASoNf8AM",
  "key18": "5uYTLTqQuVWfmYsyJX8npoDgRYGytqd8q8PbB3KBrcqGHxgQW1bBSGQ8brcXQaZh3dM3bht4Ka1ZGHtA65UxPx5J",
  "key19": "4pdY2vTi1mKDhUAgy4Wpd5qSeeKJKRQWrajSkbA2Nxf2PXDFeEfvL77P61MGFsCM7aAydziwg8LP1c5NQKTLMrEA",
  "key20": "5gCDeZixSCXcyJVwtARXtCVKfXLgzUMrcLrYweNpeF1H82mTvpN5EPEvkyKWmgEZGb2eQQc47K5a13qx27njtXCG",
  "key21": "5nQvkJohpBwTL8dDiFbvVAHgpSo73ARcoG3GbH3GmsHWZVSdUioGwPp6RjEHGhrBLbMT1kTgPSLmmpWczGSLW2hK",
  "key22": "YW22gbFWdz8awWb8kFuQ824CCBaUhoJhMTnoorshWkuvebjEEPocir13Nu4b7dpes8KxSpsirSjMVQSiGxQt4J1",
  "key23": "4mViB11MU4SchGWBQb7NV7t4brWQ7SLDGAohezcjXRXJoGfjhHiGoVrMwB3iKyNtXqSxAmuKr78BwP1rnwRbUYyE",
  "key24": "2TUp7gDqSw1r6bFWjiH7gRFt64Hcz53t6MB6UzdBe1xRXHuw7KrkzbRWYfyeS8PEXS7Typ5RFAHkWp1xLqAkzeCW",
  "key25": "4XjvZt8DLvUT54ZTPK5tG5daVrJZwgJbR1z8oLr3XrhMGHRbXSJ5yMVuy8irqjqNBFPVTKFAMCDP63mU7eMFaSbP",
  "key26": "2zAaSDCwFZApXiEuwyCckv5iFbJthf8wtFYTbbmNJjXbgnr4nTirHUTKJVe7KaJ83zWgH6KRzcEZdLfmgCPHxuho",
  "key27": "4k5TbrT1KkfURKfPUqLeoqjtc3Jr7PbrNqEHRHksWuxAeiZS4AUoqkrC38CjPwJ3a9KAmr8UGjWhiTgz4i1D66UQ",
  "key28": "2Xvr1pBu7wwD5wxXhU14cDWWv372kvfx9E6mjPbT86QALRN3RUk1Z68VCbez9G52cioVJwwopsdbLtRTpLRvXc62",
  "key29": "TypSMJYNNXknpmQVH9Bo7BrJ2Gr8ujxnc7L47rskj7QqfaQWQFCobFpCHhLNnjNq62R9uWbZorkzcyAkMdHMGYV",
  "key30": "3wc1cehnh86q3besUyacz5rbyB7JQw4mMsKYvugrQS35yeAtQn8GyqftR7YjEhLZPhHqPPHs3rsnSEQfFgTJ4wum",
  "key31": "5iCRYwnmUDGeqx3xxKfKWMKkpJ14mH8boWnTrLApzrmGW6aHEa82qJBKDG8kTTcjaChdhdhnYtEsoWEpK2rXV2Yk",
  "key32": "5LnkWVCfni5nCybqCw4G44fG31FHefUJ3tEnGwEwHxjGH7zKdtTfC26Z5dZyZxJxhrirM77T6dnnSFx6ozC5r4dW",
  "key33": "24mZcnSqqsNSWyNzwXYgn2CiS81F9FJUuyka1HJc2VqjpSEgv53N2SR45dT1ZPnzeYecAgtt97Mr4VnurT8XpRzi",
  "key34": "DhsYSGHF4qHMDi7cJo9AAKpVp6qd6EhJcWnE9URmAV9UwUgWhhAQg83uF6P56pxVa5BCKphQrwbK7qtRB6TCXD2",
  "key35": "527v4Wnd3Zh8CZSTtWJBTFGCbMfcD7MKuUbXhKBEiecuWwoSGM3TZEg1bW7R94N1Gk2gkXC54Lf5FtMWBFKWJEH7",
  "key36": "5mAVr2UVDS84EaSSUigHa3bMCi4jrdEU1w1SC4XLdi1XkFbG93p2KS2FqsTxMjby5cLamtxNw7RzGhiTqj5UiZnu",
  "key37": "4JLWotibWMi8EuatG5oGFfsYsnZfbs5bkb18LvHmYCD9Uf8WycbwNeqFFpRX3uVFxc78GnjwLjFMe1TtcECHHffw",
  "key38": "6xUqk3kx5A8Fsbn5SZ1gJ3hXYHKvYgy9QZEVJp2ymNwy4iJKaNuHZ4WPJyEStQUMFTLy2XSiVE82xYXW5BY1Sch",
  "key39": "3W1MGxJBLc6W5AkpWDGmU3iVxd32wbUXMH7rx5jzEbRdsgRSRJn3nL9p5qEVMo4xehvdA2MuufTLnn3pBcd8N1em",
  "key40": "JZeab2qyxfRMcShg1AahrvwLHTAPAJhaHHEkkgAtptJUizjZ3b1e3YCBSncTWfsFujC2H535tcKe1Ee1WYPXrec",
  "key41": "378UJeaCBjRCkAHTC5oXdzW5Ph27VioALcVX3MuG22EcNcsThw36xAePBS2krd4TcAhtm2k2R7cnzyrEwz9gHcGn",
  "key42": "4vRmc1F3YTZEJRZReDg6m1n2JLaQB9H9k7KSz3kcUbNaUYCDXXjAVT8YUc1Au445V3fP6pCKKjGtPtLURVvcikdB",
  "key43": "MYbHDLxHAjDetQvG3GPjGoPcUUXLkWwZzC87y2XPUJXUK5iymJZWWHrbb5jw3itwP5LWyebVVCQKxJfHr9edY45",
  "key44": "5Wnu7AHEPkjbE7KsFFcofe7ceutQiXAUcRmKxQLtkXqDhfFmaNysvrnnm3uLkVL9Ffe8oTUXMev83DVtEKRLkGJq",
  "key45": "3aDPxAcea2VUyZDdpSBgXa3sVmTP2QHW5g9VSVhE9mcAxqfJo3YB6csjjAycm8BU3sBremkBvoXthrZ7agYTHCgz",
  "key46": "4mwbpwjWiVe2rMu6FHjMve31ErFxgvMLWfByCGUBcZvrBkpgQgQjzEphzXdDUMYqfgVC2M2oJSfBsDTTcKHePcUv",
  "key47": "5mWoM7up9LhsQYiRsXdAJcmcPJm6FrPKCS75HsQHcpC1MEvPqbpJjN2rv3Tyafo3Nwpau6jmSVd2LgXvoodt9R41"
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
