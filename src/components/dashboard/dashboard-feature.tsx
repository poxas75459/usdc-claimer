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
    "49KijAofbd937XmTgwb6f2gkHZfCXC5ry7wTuqf1EoCFhnrxnkdHN6FRKdY149s8Qx6thDzUSLwyxJ9mQVcJMc8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZQzPacbzyqnxAkwPM2eK7MVdF4xeZck3cvrakRz7pxzr3gjae3GNYHncFa7KzmkaRoBWq3HAHiv6Vd8HVZL1hg7",
  "key1": "57CsPJyHHLAy79yXMyZvc6HuDUYGE1RgtgoT95JS1Q9wHX6h7tYpWiB4qd6DZTe6kMoGBYubjfnJ5znC1qvSMmcL",
  "key2": "6bcptb4xqA7md1AGLcAdj96iW1bHeiWn4uQiHessQMDGj9rh6GQh2YHZitChaQDjPE787ZwGdcCnWra9FPZcD9u",
  "key3": "3pz1bRrmV24vsHJuKVDXZb33NJCRLWnD8kaBHNyzj4ngkjBWgoqDAAMUHs7RgM5rcVes9gKsbf8poEUVBCTV1qCd",
  "key4": "3AYZdivCMpUuJqsBx7jXp2wZEtqeFCnyhPjeKTpJCCC25LEBsAkTYzhPTGg6q6tbGerxXJ4cMafU8xcuL85oYxZM",
  "key5": "5TimcSKjYynkjUjnejua1i1jhrCu9hHiSwfAAkhwT1JBRzyZV36tZJ4YBSoH4auXnEbX4mZGvJUVL798vaikgQme",
  "key6": "3okDx4o4KDsUSd9TbddKHqMiJ4c1ieKQyuGagRrD6Dimq8sUMYm6nLHKMP3RugqFcB4aJKkcHLDi4UXfLSTtedoi",
  "key7": "5toCm8K18aEaZ9HAXpf7DEvQEwYibC4uagt1xhcG5CcTbEnQaR9tWXgMoG69d2H1Y7hKvHMddd1biS8QbokH73Vu",
  "key8": "5BJ2LeZY2VQgcWmVe1sx8Y5GhULcFxpPUtk2HodeUQtmnvpQyYSQNVoJuwpgCs7Ayas8vAJJxxKn2Dx7xQ5sQgwB",
  "key9": "24q6j3Fj7aKJ3Ss3u6BurtDn1qhqH8AP3PLzcfq4mnVfUYHXhwDBY9YUXFndEPnRp18KusUxnrmzKjQyhwtw5iuY",
  "key10": "4nuZR6MbnzJjEmP9tYgctdQ1v5XWZQqPqpmQU9ccDEcArXVZzyoXdNdxRSoj4tsjaXgxoaQLfEsZZtw8a9NZbQyk",
  "key11": "3p3WwUifZmPTWa6hRZKWv3LPGsMiBxdiRE26LBpPCHcE3ZhkWk4VGcBPRPNPS7RbeqFughhJT2CqkPq53jXPyf1",
  "key12": "297LCmc66icd4qwCv4YfqoZ42LiiG65ET2VbofSAMFkDQz8ozsAZjzhF9WWcGp4wKV9TQciC453LNPiANTRYmSbf",
  "key13": "2ae971iEHsNk63xH29KGPRomBFuqhAfLRCAyK6bpjQWK6jHGaRZtxerxPqRuc8mCHoUsFyzsGAmRy3rLWDNFpL6s",
  "key14": "65nvkHgbnQcu3zDBwdmvWjjRffjJTGa1JRdSpSR9FDYzmDzDc39HNs7UH63GCsMuibCdee5HsBkBAhbXdoiHoNxG",
  "key15": "4kFYb39BVouTuiTtYoXVSJhUsSaviDHYNb8P5V1zSon8eBTtMbVwCojX8w3JB26G5S1LDe5RYzMVgUWQfqsukXUi",
  "key16": "45izv9p9mH6ADUCZN9pFA3ZTcMuS5iuee4fFcSBqhCPRWAZE6fSTKYH9cyTgDa49f8QCckHxENmx1pLk1JkcydLi",
  "key17": "4YdcBhfnscjGr4DM8KzVnWbMh8JE3Vs4p8r4sVwD4kxCwHz5Qb8HsVDbh6KEEeA9Wkbwqm7aDXDNoRKSqcVj4kTM",
  "key18": "3J2R8mR9NfvyAFVFRsWgzdxVrJkBwBwn4HfS4KPmQhA4cQn9HXQdvHHBcrs3kMiRExnyb1q3TbDZGPwP2GemTEYw",
  "key19": "32W9AzWYBaddfhYK7ykRhsT2iJF437TnJZDVH7giZ3CHp4JvgcfrH1m5bRnC9NWYUbWbremp4FzTLEG448BvvLNq",
  "key20": "5EsrA8z1ndPSS2ySJPB71XonxUrnbrcmiaS6wt9W8CNRsUnDEDo3nYMtwgY8wPguUWWFCrxf8AcZr9nNQBsLtoT6",
  "key21": "42uZ1GEoQSFvpBPP1toMo79nCJWhvuKnKGK4hFx7VQnYymACvAa4TaSPFoefy1AAmYHZZFUiYcv3jDiwmpdZ1gbE",
  "key22": "5mtz1EN8Z8MH7ks8bzrMToPvEm9Lqk3rWqJaqq8D5ec4KU8QBSRzsrzJaFXjSVqnr8nUDeaUXYZggaYGygiwJXX7",
  "key23": "2gNKMtAzWQxR6xVoy2yxBwLwsJD2yh4iUP8vVsW4g4tX78PsebNRCwnRtrBE1Jg4iSJHz5KbPnAxo4myjQL4TeFa",
  "key24": "5JbtZVDdA2cdLmkT67iu2KxTbg49Axb1fi7GSNRFcN3FiGYRkHLsDpc3HkE4XUDTp1zmiycnUMjY21EatcUppM4S",
  "key25": "66HeNVzBXr3BPgDo4SfMAAW8cj1BtCBd9CDYRExZy7ij69YjbXfux7oxFPchecTiC32MP6W61fq5dLAQZSwbXfbR",
  "key26": "uiAyQtwCyPd7vSn7fEZ6JxEw2uHBrM5FNF3DLmCTsEvdpSwNcioyf1ewbDG49XYmDQyX72EY2wnLLKQUrgAJJeD",
  "key27": "4dohJpSqAZyeRuyGN7A6jNJiBatva84LaSSNa92P1nvdxYeNgZkMr6fWGe47fgzqwMk97Z4Z4yVn1GUDMKSEiLmU",
  "key28": "2P1hDNQYzsbVbDv68sme9sFedZJDdJqoGbCuq4T5kAHUR2KshobTG9Ar9eNozUDQ62d9oweNFZNmq2mLa6KaCrFi",
  "key29": "4dubNW7ZNepPVz8xTG5TFrpvk46FF4T2saKp4SJKuctK98m1CNkQMzRVKemzQcG3WdvnK38XywvgLz2AjrTQrKDe",
  "key30": "5UjoVrkQYXqUKsZrY1sErzvu46hiWTtttGW2gqyoj9QVg9fX12GjeX73E1K1Vji2tD3EzR16ZtBrosvVDX6F4B84",
  "key31": "5mekmpgMryo58Cfehj1yEFWEfGpMYjC67QgPzMRFQootks3MU5ZsdZY9Se5fFCzY1A1xj4rPg8YYswtHkWXBgeLT",
  "key32": "4cifrQ8sD2V6GbhxFhgh2ck9QuEoLyKLF5BnJUXziTLdEedAQjff7E3r9uiw67HPTfk6ag6M1qyT3UvqQkaeZ76r"
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
