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
    "WPGHpTMqxajv8zpGNyndbU3gbNSzmzjHUWHqvnkmLeJYRJvKrZJSpEJiMM24HSuXexVVyK5qQPjrKvtpfHXpJxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Duz6d1wHzJbJQ989K8Zr1XboZQr4wqS9CNCZGM6t9zQ2FVHNChN46snSqQaLu8qJshLG8upCCfHdzESgAkZC52v",
  "key1": "5AfMsVVrFMpTUcdL2AqhatYC74q9sZs4jTanJhRGw34fsWdwmUF1VB9S8p57k7cfZk2ZMyJMy4jRsKszS96MfwoV",
  "key2": "5CAncWVZfkkcpqn9gjSoAPFEnonqt83NmWW7Bh7kTRvipuiLvpa98DKvpjqHutBLtxD1beCMt5Vp2XkUZtVvp5g",
  "key3": "hqYmh69QXrP4GATtpuX8FWFAgbqVhSSBgy3jqvYt9FQsX9cyDqTauxUZW9scNyqwzUzv9qksWf2qJCPqikuEHAW",
  "key4": "36YAmRPpnh1o8CQhnydUa6nS82fjPFwM5jPwf3K7giyaT8FRFcDLRw4XzyAQMBscwFXaPgbUfRbQ4jDPFDVBvFaT",
  "key5": "4E2eDjMZTsqTRqgS6hynnkyunXwqrpCfiikpHk2twY66QeFjkn2w9PAneHdxGjPqwQsi8M2sTsMmVWyqG8VcLd8v",
  "key6": "suVYgz7wnevfCBHHrztxNdyNcRN8qT9XttAua1goT9JTjKFzPTGSjpZPduYqgvb6du9epdedd1XqXCY1q8QfATt",
  "key7": "4LB8pYsHcnSo9itX4PA9mktEEn3bbo9TXvKjc8bPD4tiC7mqiC63ib9pWDRWabWn4ZW5JUEximUKXPNbbGWP8Njx",
  "key8": "3F2SWbRiz7g1bCKJG4q5ehBj64TYP2osVZMxgW7d9KrJjjQrwShjaMRLPksyJvrNAQqRAyyxJu7unpv1FEF5M6PY",
  "key9": "3M8V9scsLhnTd2g6iUkvwjwDPXSFLdj4rbHCiTN2eh7rDEDr3e6WdiuXnPMpkNuW77yYp3ZypT8dMZ4mdepj4wfJ",
  "key10": "3Np5GvbawhS6WQ8dF9RGuq2J2UTbZuzd4KjorUfRSA1XwuTdJbEQpNJsUiT1C3wNKKoZVz97KMqp5xFrzgopsYtb",
  "key11": "2FGxCoya4cRf19Mu58LnMQaaW1mRkUZ7ktWw6AweQU41UEp4q1nhHgDB46XcQYuxayec2qXs61SX73VXPHmG5Qd3",
  "key12": "5QZ41ucJqgNZhE1HsCMiF5H7sdxD4QiNnASGzXwXqsmZwfdpDjLHU51RrXsAF67CmCujfUJfZdT1GBdbdmRaTQhT",
  "key13": "5UJroJxdsdrLKrbxjpcqdVx1tFSPgutQneCmNtJDtCzQhanpDcRTP9GbfPyk21tzYb3GCaaoS5o6qjZixgYEG6UD",
  "key14": "3FLYBpr4dYmpLew6vgfjZHKTiRmjgbPZkkM47U2d4Zv2VVzL7iMDLE1auEMoreuxtw7esFYWXjXcs618sEhJTNS2",
  "key15": "iWebZ7Tvqc5cLF1DERpW9ZM4fKR1FtvhVX74HEqchifY8bofmaMjZLYVTpnaDWtZoWzXJ8rz4mMEWqsNy7dqpiv",
  "key16": "qLPe4TWVJdMJ4y7sPkkdYnvKEE4zU6ecY8fCv3hVncCapTukrEdShdGVqmZnVZTvz9Uwxwv2VncmBTN9JYcig4b",
  "key17": "2WKaC62oNJASp2RpffuxH4m394CEDCzysg4WiXzwXiAs4WdKAVvXXm5QM8ifLSwZ9U5fqtZZV1Ntn8hEaSLR7sTb",
  "key18": "24xXyybNLnNh62QreTqZLYmZhyuz8sNRN5KqvM3Xn5kwbkd4BMbdpeaMaj7D2ckr4Xuz86GSuCqKBpVB2rLXpbdu",
  "key19": "5nX1tRKEEsCqUcLGCQq7JwTKvkospDUWsB3JhCD3rDRn1fNPQJuPuqfwyS39EsXoBZq7pxGA97csv2UN5HbNdM6M",
  "key20": "5RfXkZSCdmE2xKFxCyBvL5QhGs1B8rrndLr6Qw7PfAB1jo6mk5q5JoVfFLwv8aj15KEVD4b8V2nbKG9N4sE8ypmb",
  "key21": "XiVzpqQqzcBdN8Qeu8gNV31moGJGMGz3tLftuBL8HFVL5Q9zEvy12ot92tbehR4gsXq1VNTru1x3QwhPrLjJUMH",
  "key22": "Xek2cqsySR8FMJP7GtDKhZLgjPVwMAK1ajcoZoCye7CZdXwt3VPVMgNGaops3ixXqLRbDnSEUsYPY6oDB8HCa7H",
  "key23": "39iDUkbnZc2JyMbTKPrdgu14HykJJxSojbe3AkhvzYPw3HYET33aSVYAmo5dzDZfis5KNyRLFz5RXaYC7t446bB",
  "key24": "2UTNeekitvGB4iPRy8CJ2ZsZe9zyUFyKhjUks6eRgEKLr4GmgxFUAoSKesCr7EvZ8ZegepPKSHjsc6sXSesdFrA4",
  "key25": "4zN4uzbYdk37GkdtZMuiyFxKqqJLKNi6Dm27tkrAsTAvSMnfHR8dhhD8yvJeqcsuf1hUv8Nc1jM9PMGrbGS7fRQM",
  "key26": "2ooZMh5scHMEunh2pUJB95yVoLArxrfnYva4wAeAjTeXubMaejfBmcaiz1XDuwGhzrtXbBxSDHDS895gYVLTuWzd",
  "key27": "2R6YYXrodjMYmuf41zmDKEZHi6GPrw1iZ5q6ACpnhVubkiCzq5Af6LzYfYYKiMsq1ijNvihS8otyEErhLYqg5wdv",
  "key28": "33o9XMGqHhT9xbWsFAQumdq1y4sTF39yExriL8rtyTSTaUVPnHUw8knZoG7T4eqRjKthStFnM6o1KZtV4wA9GeVQ",
  "key29": "dAyytccxUEabSMk3wtb738zMGNuqRoQssbYe5XjG34GUA93dTKJNdq3H84tFQ15sEEZD4z9WfDccWvMqb2ki15t",
  "key30": "4iPwiDh69hid6k3vW68k7KeW5snfxK64fzEtvJncgt1E9bGDqyKNFrMGStdFSiq29Mz3QyVaWF1dybmXnhsJ1EBQ"
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
