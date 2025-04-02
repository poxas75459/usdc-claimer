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
    "217ZGLg4gmxqtuDHi3J4UvwT2j1fTaK34XdkvamqYXuYkUMPEEyJJ3vobBJKt3nY5AyfDWTydLJQ5NG5ejCY6sxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imjRadqZ8y3PjN9Evdx8GRK89FfxDwiwU9GtZQhK6msvzxTiWW9TYZDim3Bh83PF5SK7qWiqtRreLwvN1yBbdbV",
  "key1": "2iZVewbE5QfBfRQyBoQMTX2jZVyuJBVrftN6SEyFASbnfqfRYCZk8PBeZZ6jugf2s4YwND7Djfkr26PCRiFBDesg",
  "key2": "2GcbHKEasndAMYEcqU1sbbUDBh84PF1qJE7LH6gzbv73fUHbM7y2gWpw3QAh7biYkQUvz1J5CujjGRdcLkmd72kN",
  "key3": "4jyw5RLUWEndZeGtSMiZizqRzSuQSC4A1fecDjTs6jknLHwCmnveVGhRHN76er4hHZVLZW99zojDu5m6QeKNwmBP",
  "key4": "3DfbpRee2gQ2ebVQSQn6AuJfZ8vfq8KuneFbkwNRiGE3vESuJpJK4JCR5A4pqS8tMZNXQ1ZB5oCJ33dUWso9Efg6",
  "key5": "5dxNtHetegjzkxLZ5bkTx4vmiQkLuk3BXK1mNRSXiPHYBAv2c6mwQhkck9fx49rBa9GaP9jCDgb9gYNScUAc7m4v",
  "key6": "4E8gzjKVbx9E3Wqj432G27bXipz29kCe4Tya9cuKFBD5VVCP6aHeWyR2r5YaFHqNKeyLfsS7piLhGgEmM1NHD2Cx",
  "key7": "26Jsp1CwPaunePSkpnCRP9qYZ5bxt4adp4MJiFKmc3dNi1A7Uj7FCE2q7khdyhdACcYzXFBXWFbi6nCzormay1R5",
  "key8": "3RUKWr9nZCicunQGmfLcv6fkSMmog7XQ2BQVfXMoMbP9PtKiqvtYzoUMDR7WYG4Zi13XHJJNjQ5tpSUrL6NmDsq6",
  "key9": "4xKJMhi87upqPWCAWGvNEYcT25XNoQL81pqaR5hikgXs9sZsMfVHk3doa5xHnCrVZNoBNA7BrUAZMHRyqLmmteTW",
  "key10": "2tKZYApn9RNxecLh4zcoYRWjBapWUi1amzyzyTUYhubtfXaopYV1NDuZp6xMaS8X4sKxHKw3YiGrAq5Qd966UsxW",
  "key11": "3DfNmBCMnsn7d2xyXM2QotpBjDmd1pDFMVHsJX4buzWm9Zfx6NYCzrmFUmfK3KxpzTPapXRsJ3Wx6kKkPJ8jQZay",
  "key12": "MjiZi9cq1Xd76QJZoZSZwkcWbZ4fd2ZBv4KmSNqXzkPngcXQ68vXuTFRLvmLU3hTQTyUTxizNEmh4npEBXqkh9F",
  "key13": "2DQKFwzuxvaedKwWQT8nnVMGe6DhHqYvYXakuiX7rx19A38S2ZAZhN7UaZ5beAAVtFi5YHEb5gyaY9zvgcgH8YTB",
  "key14": "43gmj9LQKr3LUY8NTsLyPFHFqzyvfjakGRQRV5FCQFaYHQiCDDYrxuWwfk3AH1Kr5LMZ9HRe7qYXBeM4rUENBcBZ",
  "key15": "2fdUxWs7HLAEG3CsYBXCNq1gsX8R6Hy1PhtrLYQCvVKJtyFwKNoFKe2dVcvXderB6gMtcLfXRDK6yPwavPhSwokD",
  "key16": "5DpD3QARcqT11EiDT2RwJzfrWFA6vfgbF1MdK95nDyp3jqomjcLiMaotVmJG1T2QXSaKYhuTk5PcboWYxUN2osnp",
  "key17": "3z4BKAfH7TNk5obryki58asvMsp6NwrRmTaXPLFtFNULsVMCn8QExH1YQEj8Jf2X3KK9CzneRa6NLrdDaH9V811Y",
  "key18": "5MLBswb9dYg3EJbtosrQr5aLxQsoxDfQHwoDn23Bw6KfheSu4xnEFWDhEgZNsk3oUqeP2Rwpvp3F4onfvvcYMore",
  "key19": "42LPkUJ7oZY4thWs2Cjzj6fiZ2V5YRZoPyBqHvL7nsKuKpvEjyZssba7CrEN6Tu8haAu7hA5EUgYCudGZAZxNjUZ",
  "key20": "3kk2fDH7HqvqdYXtaCgCHAH26TTYXWpQogyMV48sfyFDdPSJjJ4to1pjv5hhEFDHuZrmaQ5xj3YBCPMgxinrSWr3",
  "key21": "5BZGgNtT6FG8J8Zr5bNEGw5cpvKrkuP7iMny7sADcFzsP5ocoUAkwnBZYNLMmrU4FxiigNsvMs1EEM8cmMCmeYD5",
  "key22": "4seSuKQTemrZop5xg6PdTYvnfcni21FbymsLk7XeeVVu6a4RyMQFgY72nEVoNGC6AnsZi2km8oBqLyNcnhfD9K8T",
  "key23": "21seHu9XeATcrxbRMkNt9wdVqrrM34Q9NDhWDBBStxqvnohujfp1V4nGTVXYomtMasrmAbu4pZYE89NPsdqNU31Q",
  "key24": "4rkGwwLpqn51uDhHheu1Nzm9bZovJ9M972JHsz5pvR96S4ZWEk6fRt5HmJh9NZeh5oBRvy5D71BzSe9maooQFeU7",
  "key25": "2PaVTe4badSxcbimnwaAWB4iBhwNmftm3GjvLPpRiAfcG1YTmf8XZJ4tNfkkNKpCuPKpSf5yYmatWqbnryLuzNwb",
  "key26": "3TVzGhRzbi2azbx3icUWUeJ4Uqqv1VtnoTkZJuaVNSdHgzANqKdHR9psiPv9W4JZfkRRUT54Vqxw5Zm7uPxvWWPD",
  "key27": "4CjoxyKUgq7rCFZu3QSJRFkfcjSweZF7QBQhd5r7C2dDxoAL5y5394VJLoDR8gpGMAehgFiC2ncHbdaLjGGbVzsd",
  "key28": "2noHsktq4wwZJohMhuJmPDveEqh19RXNG7Gn7XYQ73pUd4kM8tsm9DuwT5YajpEuYgHHtTTXMZ654esDJckJrYXX",
  "key29": "3SnNRNGtUe3QyBzyRWJ3ZFShJ1DRf4Fn9AxE2SoVMa5k38KCKJHttfs3k9zRBxsqprVRuxtgeMYAjFfqvZvggmvt",
  "key30": "NrgL4375TJ8r5sVL3ywbg78VuvfUngt4EF22gtYSC67rvxoxQpQVQdXo91cCuHhoW9KvBpQEQxh7DTQR5kvQsDR",
  "key31": "36eYMm2GiZg7ZHbCTe8U9v1w4Qngafkk93SoG3tNbRP7hkGSTAaE4Vg5sU1SWprCQkxX7cJaCHmpi9Snq2xWuNSq",
  "key32": "4XVFTyTKUkBdLF8Xuu7HgAry2bHHN1qPBHAwjL39KZMBJyhGCB27phcq6QqMBpz78268uDQeH6D7Eo5bF6ztEP7q",
  "key33": "58QvCo5n8wCyiCyBrW1qsvNsvFBQGJihKC6fSBAj3sg2z15CnF6kiZn7t68bQbxt4HN7LvwvujXtTfnjFGkFeXxJ",
  "key34": "4FXhCB8cjSnxUBW5tVtE1g3wbjHu6PMuNs6KS1r7z1LhAL9bEkuYeNDWzx2a753GDN2Xz5EQLHQPoUmVr5GpxtPM"
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
