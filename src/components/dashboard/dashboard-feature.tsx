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
    "2yyp3jYKCWwRmwS8gKTePV2HrFPPozSj4L2pBwhDND9XnPxnPwttFmi9RLdmonU4DjbaoFWLwxGz9FmwtLDrQQ74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F7KDVFKsQZxudgQdkiEhNLGG3YYqyfeF7jcpcYJ3bp2TARJH6C61FyMTtz7vCWsosCPg7XwQdAkXnUcZHzy6Zyd",
  "key1": "5g1SZbKa2JncVSYFHrAgj5bLykr9cikiLa4fC5vNBeWF9z5bsTcQy32V5wkKSVnqwJ8dZat2o6KAPbSofaKR7Fya",
  "key2": "2Qac91SpxT2MydKVpAFw5TQihazBRDFbDbYtCu2348J1vmRgMGoTm6N1zK8Vj65LrqF7CT1JUt87PveJwsT6GByp",
  "key3": "22RnH7HX2n1REbhWfXvei4FUyUBkBArMiJYX3975cDwGyeSe7aYA2vQ9jUuuUGc5XQBdzeZcsTY6YKuTmUYT7QAS",
  "key4": "41jWCCmZGXwXUmwYskgWC83cNSfiHeu5eaateQQgStUvNnHGftRVnt2mXRsMp9sGXz3p436bASBRqz67FDZqU2fj",
  "key5": "kEWGmUWAUFbQeZPHBhVnETVHQ3nudNugySTcA2Vn22fhJZYC4GBmC5NvCmUYNs5qjcnNCN7r1FdJhEWZUuUNawq",
  "key6": "45JRLRm8Sj9LTQ7dqQqNqVyadFV6ZYBSeJbpVWpTAHXGTcD7CchUwE9sT94UTNQVhnBpypXs29voJJxqaX4wpFuk",
  "key7": "53qp7KuCSEAkd6YnmtQrpjNLoengEdYtE98Vp75dxp998WMgQvbARrE3Xb2f4FoBAvkKsmQWkSd4hDHidZUuPMZ3",
  "key8": "2AmWG8TEaKzwNVEXv3GmidDqKiHiLwxg7dU3TTsci1TTLfeKDt3AtEmaoigFTrCGoKqc4SjEw4s4GJurRDDq6GJW",
  "key9": "2uAXJtbQQyF8MnV1RcZBFAaVCNvuj2nYdoFtXFP6r5YHL6pZnyhL2taQwcWaq3XzSzwhEgT7nthnDGYNqcq1X3Mi",
  "key10": "52Ea7A8em3DNeNHVphRoscfow3KkvRA1vuQYr313pB1DAXzZ6XkhY77YL9wD8JLB4ch1GM9yvSkv4rEzk3h2yULq",
  "key11": "aDPgGGaFB7cBrL6DmzR8UUPUdwvFZaJY9BGUHqA1Ts7gTxxVcRisWSCBEMXmKr1yCEEfZLYKrNy9UGkKJQgQZng",
  "key12": "2w4tekfrrppzYtpufZqU39k1uoibtZuCTCXR51WvD549oo8vrQSXJm3uuDQVVRKFrUuEnQ5FhZg1QVDPU5fuffem",
  "key13": "2r4KBhGnTNRkf3q55chaDbbtqApFLSvDXLSYWUUFxsh3SMeqS5js652xPMwYHbbfxXjhAN5DREQ25cvPHo3Epy1B",
  "key14": "4fbatBiVbUNYEspSdfJ4Ns7UqyDWHQ6mjVTPLNSst76eGGGwVVtrFWgYHFh7p1jZ5D5CL3jbEq36NR6DbznBF9Jf",
  "key15": "44CkodLGYUTmo91JnnbHFFk3CuJy5nuyqdWK4iRjbEGcmCgkJYuMjEaAGt16id3roKHp7iCVourJSFCeNRn6ZPFQ",
  "key16": "3nXD5e3axfTouBYQmjrN4xpUagBFKwymFpm4zwLZ9FZYJsTWQdvoNe3TKbASuiBctZXtLRkSNXahwgTSRy7FURpc",
  "key17": "5tyD5CpwtAkwj8ub7VeXBFLCdecbeby9ru8yoqRzsuU5gv4ZQpi38TNrYpmZA5M1HFTctNrZqRTP17dGnHp5qwut",
  "key18": "NUvQHKoYgtYkLG78JkPy2ZqQtBd52w65bjs8zVvo6Wh9f8pFL3AbR1GR85RRMZykY87JifczgxUra1viCJpsRgf",
  "key19": "3LGQoeUYp64qMdDR6Rtt6McUjy1UAodUGGsjiVFcvdVPzSmEEJK11f3MSP9mviCwrRqQPFLN6uQh9Hx9A5pMCqQv",
  "key20": "3xMMd8XfzTt1abE9hoRBxTeMu1GWyNbcB2L3aB5NdhdNAHFLuppoyRLxsv6UFkAWEMSeYru8bTp6SS7TiGHo1hDG",
  "key21": "4C7mX9uLm2gxGSp5SiuWFR64dKqxRi34215imDtDusWwb7ut785qbUJMi3DUCgreLQLrLhKx8jcnTXTUxUzvAqwe",
  "key22": "3HS7eMM9Ed5P2wW2GnHCZR19MUnFzBtbn6jN4vSokhjBK1WvGcqsztiVgSjug8afLtFaAmmes89T66zjSuRV3EBF",
  "key23": "98G6U9Giaipv8q1JdDiXQdhq4xCDHqM9zW5Bap9XL1up5tT32Jo1UbfvW8uFDHc4nz1CEBctH1VZ3qc4ttdQbsH",
  "key24": "4x5qwshNQvsC4vnDn6iJngbSqMLDDnhqx2cA2o5XQnRTMHg2Gf78NLNXcxzLx6qks82GWM16iJHPtSYTpCoKN2Qw",
  "key25": "2ZLPVCCBqzZ4XrBLiRfLTeuJtt5t5iuzGkyJN5nE4eGNDSSop7QPtV4o73ScexTV3PkpfzYQpKHLKpmQaNJzeba",
  "key26": "5eUGjPjAREPChUFok8D3hz3uAJ7iYF83G1tjV9nxVhwEQzhyqBfXE5Ey4zi3Qu7pUgbbs29uaqGACUX465Sffzpt",
  "key27": "5YXpc2E45hDWJF9bP4K7MQhdPXrXHKobnWPczePHSqoPAde1pz9eWSVxqEmXXHAP1QGJxSNvjWY5Y84fRjaoRuk9",
  "key28": "22RsYd94edWGhshTyG6TVMsJmPessVA1wnXqC88FNcaY9zwx4fTAQee3xCH2HKiwsw1Sf8hTgmHQVeFkz3bMRzc2",
  "key29": "34wzBBVCFUQXHEJf1X5GxHCL3PBuoz49BnZnq2LRAykskakTYhn5NghsmxeSB2hLmK969zeKu2fRJgm9XmHbS2zw",
  "key30": "S7L3fFxo7uvf7bGswk54sdWEBcxcVTpdgB2U4EMYMMa8jbzzt2WdU2qAwSmXuRkJrjWVGhnaTEEuxL4z6hphgRc",
  "key31": "43mP3qrUwcsFxAR4CnyNRgEDWty9JBF1fAuzXShZ8fUyaL6R5HQ3vh59mMEZQVrKjeZ3z9qGKszpCFyynBkTqbpb"
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
