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
    "31f2T1zqhDDBz1aLx5tZaB6rXhpSvFx4SWagoJm5xv2siMveLstC246VAHmCRj94YMULE5HD3qpdECYucmy2v2vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t7iJ8S7yHvFdXdonkF57uoP7e8KM9bm5wSYwz8Zhj7k8gYjwHPnw9BUmderuKRUEcdvHH8AEegDsebVgpn4u87P",
  "key1": "5YK24FCbrUFWAB91ffVLB8Epf7YtsP4WNvEkwAsTZff7WXNnq6nNeuobcsJLBSGZqAy9ncomnfSLctGXixRtfkZ5",
  "key2": "5uHpS5QqVoryhv26SSvsk8sDPyHNinNwgFAT956p5dv4X8ZYbvsVGKR8oEgFWdta6yiDFYGAVXLEWuZJDbK1zbJp",
  "key3": "6nQWrqvK57cCxMtBrEqcpFyn8MH5QEXLcD7FdaKTkPnqPDFEPwkQLc987m1L8YGuWiiJUrRQDcHVT4id4Y4NQ4F",
  "key4": "5bJqaxMdcsEQE1idMNZSa2QJnoMnYp4KZtjAeYEbpYdaBJDxVnkExP9FVG3HJnXRBZFG2ngWksBKeoxYFm9wHACp",
  "key5": "4kxtkBm6oD1qKHoK6eWVR3jxJz84Y6qhbYfQMpv4EmQmXN5JcxSSohbEfwSM6cx2zpufj8kxCz7gzavMTTxpFMbG",
  "key6": "4pfrJAqiPtiKYqfN81iaFeHgD43PLAZLA1nDdGHjUotprhFeWa9ET6dZ3juYnhEtFZb7TCpDJStK2AaTFCy8mVa4",
  "key7": "3ZKcapLPCr4KorDYboXXf7vWL4Fy4CFeqKgSE7C5Cq6iEo94iYFR6cM6jtbJqp8L5QY2wXb6PmYAEKzaRRLSAqMb",
  "key8": "3L1Ntp3BJy3nBkATw552YY4oQMELJkwptupwD6pNz8r3Cv4b58gaRDU6aLxncdd2jdPFbdiiYG6LA8Pg3uDj4zJH",
  "key9": "2ATvKEJeJkywiVWAAi59iiaEFeQhapiR6hqDgL3oMbdTW3o6134ouwZ5UhF7ZGeSJT68TwmuTktsybQD6yYzCYvG",
  "key10": "3Y9oq2thiqZ3nQd4JRUiEZ3gC3zTKENKZqhcEosHRNrk6B3r4WyNrH2TEC1Y3ps2Skb46Fk7LdgVKeGHyKv1htE8",
  "key11": "3w6UXn8cFHzV22RfZYFt4NmrQrVqmhVVuvAyZbBcja2DWpFSTmqQwNjnR8yEKtS8uNcrpnrztfDseGpj2mK4o7A3",
  "key12": "2iCbGdnrNxQ8S22LitDvxxCZMfdwcPbcA5r1MgN4wp6eMkzrW5VGP1WXKStU6i3htww69nb4k57yWx2AriofeVaF",
  "key13": "3FfJBnqY7V14f7FZzB9tVJwm9ptqqPT1zXVMLc8JrvQCaayu5vysBnvf51nePcwBp3UyDjuZxVgsZm7eLSeL6Ao4",
  "key14": "3wNMwy2XE9ScmZrsX7wBabHN24yqqrtdzTBWGroXBg7kStJTWnR34P6UCTcns2fVQoBM2hiskPWYepdZtKZHRhvK",
  "key15": "4j7u2jhYUtXvLpR9WpNRFbsYPYVkkLc5twkANbhchgMBRaHaKyADzFQa5SWGMRYywpHDrFYDD7drkpQpSiZ5Maag",
  "key16": "5WS7XZR3mUZR93fgVybff6AYBUdnoWk7oizU9Jsc8zMT4qQNscpb61bLUxYkJqGnzhkwZPyVELNr5N5N89ScUYKz",
  "key17": "MfmjWcAmumFgwMVh3M2dSKRK6kNeWbf3k5UGSUNfdpUPiMPnv9fyXwgQ95cS1VzoG8Ms9o2tPWWdnD3CQcWrfxi",
  "key18": "5ZZMc7Z44GGgJaQUm3MFrHCdGjvGN4A7N8xaY8cdR3r4eoX84JP1byHUy25AZH2yEoVm7qGXsyNbi4ykuSRnZgXX",
  "key19": "3MwhnuzNuKSfUHDCjgEs4XwcS4APAgRvkniXNuVWKXL59bwxDg6g9QSBh5VeLrzvYaCFJM8iAC7quKK4XWyhagEx",
  "key20": "3NqKShCS9pNoGFUkFqsidQjG86gbBCYntLXDZkpibrqgeXvE2BUfJVSHkFDJRFyUD5NsZpD9GxeyZQkenmNM6hQS",
  "key21": "65bSBhSfmAkHxw1VurvZvnd3BLLBKDYHGrQDsMmxMRop736bcdhWgmLDn9gFzxdWZgXyKXXHNWbB2Xo7m2nxDSnw",
  "key22": "4C79WgYpwoDvpr1KPWvc3DeUGH8XfoDiVPd5keTcHa2GEXtdNmwtvPeKAxLj5XjdcTMaZwhDtN4ton9MtUoGnpVZ",
  "key23": "4Fnb7y8MHvKZMC43ZtNtQnssER8fgU5s77eSM7cvu1rvYxMM2beSRTQU7FWPMeqRxtojm1uXWMpZCQM2dxWSVxee",
  "key24": "G9KjZDDGohadpPWAr6kPmwhii4SaBUig9nS5p8sjrWSxJz1ZsHPD6FPpD34VHSQwTyoNngEeLxutDJKCBzeGCRN",
  "key25": "d3TMV45ax9jjLumx2Gvuy7Aozky3QNpH2ML1p99fybVn3RZTqfRjmEwzkR2YXcyzJd5QnTstwwRfcKHBtgaAHvY",
  "key26": "CYruLfiMxxtus6j12dMWGxfZ8mip3RTR9Bm7QgL5fALAGKC2W3cGc3KJjjgxHuUGeRz6GooMxbXHYiasygKZ22n",
  "key27": "445pnZWXAL1nt2dT7jCyY3n7yWtrCSwgGuC3tE6SvPy2ejSTb9vpdWTGLn5cicgxttbT62wrzUAV7BBViC8mFfwv",
  "key28": "4Km4WE1gG6A13wq3uuPc3jftXcnKw9zQ1uBQbazNuaWep2EBTfjTZexdZjcRoRZ4axuGaiCDPj7qqEfEbXGSEo9X",
  "key29": "4c6HvTpaMJmnNPtZxtuTjULaqVngGWyBWSwv95e8nVfo3jUWeB7T4LvP11SWaBs24jnK65wwUDoauSKjrBBVZ2k9",
  "key30": "67XsfdSvnMQxNeqYMwEnfkmSGCYddgXzdictJ1wrYucCox3p1hiHQ8PBtRFSKYuLiLSSSPx9wyM6ADAPTshCpeNH",
  "key31": "21yeEC91BHSBcccag7cMQMddq3jo96ZQLThKFKpL6o8hHhXueqyZvLbU5idVMsgGkT3bUUbB67SwESxmwCde1yhF",
  "key32": "4sGeYTt3md11GQC3sDPye1nFAwJcbXcM4NB5DLT6zDeTSjDPPawRsqS5xSj8n8z8BQhmrvCLKevgoBB5C7MtEP8A",
  "key33": "5v5G9q96jFuvridr3dj1bz1ALzZn43XBGnp3NMrrPiLaWWAsZCkxL3u47XpRWn4rJphZ3AoqGGNwYJ8jwgNS6pfo",
  "key34": "4GAZm23a5dKFJemX4nT6RmCfdTqoBYkUTa3Yms3tu8CdP4ZD9VDvYzfj3Szxf7AZ29uY2XQgvj6hHUENaAh7LEAp",
  "key35": "5tQcKMvy77N9gRzk9p8rcCfVcgfUh5peZtgyo5VzuFxa33dp4FMnnUCAodPerYnRgjBnmNptF7TvZRfx52qyz9MC",
  "key36": "5RmHGEnjtm51CdTihxj2UjwTALtV9Fmpd57xF54nqZ7JjUpoK4Ske6ixCvWXcJkVNfTMRS9qXtbB3pByvCw6iPzc"
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
