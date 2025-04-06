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
    "5KdaDmZkRxiQyyDaF2NHRJGPwBkm8Aeze6apCKjGAgR2SuofXBMZCTGbtMb4MA9d7jVPdr8zb7jUMk95fjcvb9N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HfpfB1GnkJMNUi953nc4WwQuQsCatCw5niAjTwBoAAb3k9uZgrcBrDocqeH5g1G4aZkXdH6ppTkc8GiYi6DzKy",
  "key1": "NJLLQmHMDe5jN3JyrbNonUJsWdSa5SSh9DNx1avC7gpDcjxyxN4adKLbzmfr89Ua4zSdfqR6rnXYBXZSw7VdPPi",
  "key2": "1yYWon1FoQycrcQw6CCZzXSYdTTBsKrfspHFnxVXpFo7DT31Gwe1Q3udYaEySJh9Ct2k9d64a13G8NcHncFD6bw",
  "key3": "5U3bxSiqBSRVuBeLFcoCu8C2g47m19va6XK8SuWWxsFsEEWyJQRbR45m4ucVw1PBaPWv4V79HCKw7J2SuauNs2o3",
  "key4": "cwu3PPhSUFrs7N1oaRSwEh9uhPLiPLRZ2yMvGSBYDmbU4JChcohKdLNxLMKd258KmjHxD5jGmBHdKJRzq6yk8M6",
  "key5": "4vR641Zjr6hCjjWH3sEiaDNVkD9nJBdGmq1GuVZXeqnG5b55G1Yc37VV4f9ToTsDhziE7k8aQGMimYBferQ9Khwh",
  "key6": "v9Wm2raXuJdijBpWWJBUTNMCmxyU8L7RLqbayu3wXm8X2SiLQpxshKH29RaH3AidnBMxX3SxhQacTrUKyty6gGL",
  "key7": "3Y7RqmEJz6bM4DBXyWowt9hWCY3E6HqoCpXfbwwSRnXTJ1YuFYMRncisYxeZGkVjXzRL2MUymANyx7THeKPsZDKY",
  "key8": "2sC13phiFgq87rqi2BhaAr7DLyWGzMFuBRExBxqScjbvmSR97kgXtn6iLULmZkq9ypvJoZPsDWgjWsSVLPzkpwS9",
  "key9": "59JZbLRL89w2fnQMcKBBnXd84t4CyiGr1W4Y2Z2v3WfaNLD6eEJLiztG7dvL7anmKUrwxULevdTUPzKWQrbKSRg9",
  "key10": "5nJvzLjiTpNvVL6kxY8B2mPsQ9n1VbPuSQWiTxeoMmf7eJj7tX9MteGrBGy8ynkynYkTmq9cEvsTReff7BxaZTzv",
  "key11": "3ahAw8QTx2HWfqFcJ92fL31aSqwRBaSibvqVrvSUdko8N3j7EWcK51aDPKUdnBDhCxd4Fn2RtsKBAj5394BTAJd3",
  "key12": "5cunesMUuJ245DkoapPkSRx7Pk21KdvtcmPtiss3tGbR9x3R7wvpHvuQQJYz7GFa648TbaUH63T9vbVAdkPMEH2b",
  "key13": "2hqKtfFQYaz4f8q7n6WEyiTCEW4icQ9XXsK5naPMVuGbtvuHxTnmR8vApUyq2um4BMTstFh5tMckQVSeWA6VV1mp",
  "key14": "3vUKDMDDqvsVyMPc1Ma6TqWJzQSgWZxBwc1veToXK8pBCdkj1vnKwZBeZFPhEphUizujTSDBf2RA4RZD7fkkhFkk",
  "key15": "3o5Fwis6cDXtRhgC1BrcXBETsLW4UJEf6zqQxirxT7Cg3e7scFVyHfVgsw4vofWR1bFxPA5b2xuQvwqW2e7Bjeiz",
  "key16": "395vwkbXWq9ucsxTi1Te5puesDUPqq9EzuuSqDSwqzmNYj7m5F1oKo2UW2tXADkzAdtfewAGk5xbNhC8wpYbmEJV",
  "key17": "47ZePm6xwxZ9ZVBLsXMk8CdAxMZtDBRaPDwFVF59uK6VyoXGRot8oL6LNJUUD2PhuoJEQLVVrefCF2WeF4cimSSi",
  "key18": "31vt4DQtnJRnKvBiVLSEQ3T8aMdLuYxREsPGCMd7VHE2PDDPEnBxotNECo31v3A9So2whdk4kARPJTc3Qejz57BZ",
  "key19": "uMu9riZCeF8YzEXWi76pfaHTDv32PskH61soj8Sbs9GZfozRyeeWX9V59UUSM7ZQbp4CFtqp4eMX3HqtmMwpZ5C",
  "key20": "3LkpSG3cLjaEFpmXutQcTPyRHHaRzisp5cBSFuQ7NJsWKtoEtLL6nSQNYn7Vm1AwX3mYCRfVAncPdf4iZj27bQ3i",
  "key21": "3ergKAEtupXzeAtDLvsm4JBbzgrYwXE7FQKf78qZ5T7T3ApQBjjricd9zHvPXCRornNbHqqes9e5fkNwo3nTYgyS",
  "key22": "BYrhGbLMR3j2DR2CzkeWjAVi3sRdvpNAwemFc19bxQpeHGvn4NcRsVZT7GxjVs1Now77qXxS1ywxEvLwnFWHUGU",
  "key23": "3cXdASAbU8x9S4pdNaBCyMpazo7H6CAxkpURN2extMkxCdWgrUGJ1MGTL2DaHBbjacm9AVuBwrREWcHki4QATMJb",
  "key24": "29mnfZtZQWGSQtpGL9U5dfCpSjmR8ngobFhVnvyXC2VCgouDjscbZbJ4xUts8ijypSVyACRtRRxJwvcYL4e81JZ8",
  "key25": "uEwSd5JN6bhnYXk61kKWchaMpppjHRJMN7FWtDsexYau1RtpwETeCgRjVwvRXitV82kpaqmTMXGN1j9s5Qtjjhb",
  "key26": "3ptZbLyoZX4JAovFupKmYRERYx5bSTQtvZcqsQaHku3W1YBYA6juR5jsftcueuAykiBv9r9Y8x5nYWhpMbBWXt41",
  "key27": "5KUyHj5ZMDnhcDeVveUvHPMrMbF57Esjt4ak6baidaa5T1N7wjVX8qbnmAWF7dAQghgAoafek9hTwrVcTTcrcffk",
  "key28": "5TB2ayk7815ru5hihKhcz9hu4D2U5aapAo4qEM6qqj3p5HSzr49fHy3JgeyLqBnVPomEoCgawxGEDRmx811QwTJ2",
  "key29": "miGTJCsBNZjvYskrSvc52pDUseuXKAp7q2MmqrCy4bxP9LaJvL9t19EnPy54tRrmJfWCF8MsZoZSB55TRRDjqt5",
  "key30": "9RHkYMRu9ouWBnbStGM38AeKdHPQbWWuzaQ7mmquBzZnWDCvyzTjTmjS7ZdLpNAxye1anCSXFg4h5Txt45Eyce4",
  "key31": "4TNBqa6TkJd7Tak7XQ3GXWJtfj4CPT4WwrYqJVfoFUD8wKkbmhrFLX3nCB7euLZgQHJ88JygsFX7TMuxeBq8hr4M",
  "key32": "CrBwALZat4hJe4XoB86rLVw33K2fi6svcNheZ5F9JWmvCQ9jYWhoa5CqDVDm8FAhziop5igiKb6PUCM8j3YWnUf",
  "key33": "4foGMTBN9ET7ZyPZ9cUyhYY8gVBzXL5cERdHRfTrET5w4AN5T9g5hyRfpdu6ydU3SnktwXZgGFM8zFpswq1vdhB9",
  "key34": "58GeMNDQbU7fiDHmQYiwJoAc43n9aNR8vEptmAAnCeirpyDbXQVEAm9V8Mtwot9EQiBLSQtGescGH11DCKPY7RZd",
  "key35": "52VXSacGHPwPsjjCrtBMwTCFZEtvpUyE2PhZsAHarPVzDjs7d68r9DmFJrdLF89S9dePhgihWsrywdgkN2yDV7fT",
  "key36": "3NzCG4mrqCvji7SEZaWs1K38XyECtCBsgKYRjaAPPUJG8pTtnZW3i2LEZJWePWz2jrCBQ3dshfWskxrZ1xpqidXA",
  "key37": "q5g7vJ6ubzGR9uZ5MdtQViQgb1PsZD6TtckmMJs9FsbY8NvD7ikD1BiswZxggeSxqAap7aE7vC6d6bcuT18AoGe",
  "key38": "33tbFmwC1cEvBXMg3RLaVK499Kqw9VaSfPCeQoc9m5nngkUQG6GGwNNqzBMwasJjrMX9YPayWD4sLFDayFvnBgNJ",
  "key39": "3eXaUfbcZCupjFqMttLHvU3Uo5iKaEBjFuyt95QBsnitpiDAFwNw7WRGe5mVqWwvejLP9DoBJMcyXFnnnS35L9GA",
  "key40": "veBN7toeRDndP6XvxCmDtdf9BQw5w6nBv2hCK8BQG7aMtWGjJo6rH78ABBLrWHZyPNmXRt29PJtLxucNQ1ovjeh"
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
