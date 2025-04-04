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
    "5VjQ9S8r7PDNXMbMgXNzY1btiAkfpBzWvQoR9Nfvt3zLuJ3Thkwhz8h14swk4N41sifa3CzgrudXVCEL1aJnUpcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4PyqnuZCAgwUZkUzJPs3J4eNGXvxBE1pFf6FdgjdyosvVAw96sDQPuayMW8AAVMhaDoE2CciaJdrqoZEpmmbhw",
  "key1": "5cCTm5nBjMoHCerbx5aydJeicDavnG6NGBmQjc6xr5ssHHhZkRDyJkhS4pVvU7NcK5HezNksktT2QTJWQaTG9imK",
  "key2": "2wbHNFHephfBo5bw6Msv3ZT7pirgbVQ9BvGUH3A4go4cXksBxpkRaDU8YduBNCmdV2XEMFZGznkLzEgakVWvYxEo",
  "key3": "3zK3LsPcUbFRsFiPFscnfj8Mtt7QF3U6XSsbKC6JS3Fr3sz2AsBGQNctTvUTPSJyyD7P6hpzCoZM9xWEfu5tDfkb",
  "key4": "2NrFKpM4sEXStqmkrjgWx3CQK9hRg3bDuX27q7HvBNoxNouC6ntpntKm2a3Vfbn843Qv1RtCcJd4QxWQscwHxdHz",
  "key5": "ExnqutrDndy1bd2VTnus6sq8KTDxY257f64fSgttzf9PGfsxxCjgw4dpi97aYsCLCbxFE4trz2bM8XqVNUu5SYa",
  "key6": "3jhqjTvQUh4D6v7DaNdnaiqz1Vrp6Hr8CWio2XiGe4UAKpec6yyrbaapWpyqYVoxh4A8EsYhjNfSp44GEXYqvpgW",
  "key7": "4Yr4WoBWN3ednwYkvn1mXJyNb41rVb49xKU7DSrBQgEH5cRVKvCreyy5W5hihsY7oDr1SsgarRqC2k9mYZaFWLJN",
  "key8": "3vhK9uDqAjdNcKk7MGeif9DE9miENzRmY89177iEDRjFZyCTZNVKNxrhrhTzukvvD6VDtsvtan6jdy3QFbhePvs1",
  "key9": "2xhfTmL7XP9UuMC97oYumU8hxShtzxZkp6ZDnjMpfVqFRjmaLdhSpVXZF7YDzCohmbANqRrqKQQ3cBUcvmCTdd6t",
  "key10": "RZRFPyHihtkm4mufAxBNBhaJ4bpqbaEn8dzT7qjqpQsfKpoxHmtYdGCASZYwerYTwHrx1UFRF71FXXKAsM1eCtE",
  "key11": "4P5jjaFcZrjcKCfUZG4maxk2FDbDP91qC23ihomDWxq6rJj2ThRP1yP9ewjB76sx6HRPsdxR6mzaFPa3H7nhoaUG",
  "key12": "4WqezSwKYwpF4cT7UC5gZxemF85AwyVB3QpSao6m2qR3RqQRQ5q67vHjPeJzeF66sKwThPHz5AQPrjCicpSgSCRY",
  "key13": "24B2ay5J5Uq8evdAhbxYkBqqszg23jWycmEjPqAGeKeNsGTYU7ZPKXCUdiJQTMFBn4uLyWLWWSi15bGxAFA5Uvjf",
  "key14": "4wvzNkH586q7dYkdr6YXc8ussp2tsU2CywTPagFZrVPESwH5EXwReReKZ48Ju1wqpodeVo9YmcLsBFf2XJivXitE",
  "key15": "3sPwPhM15sKJB4u6VufessPtYbU9qtkkoL6vg7LSDryGBmdnHKAvgrfoiCXR4Jnvwy7qz2omQB1qfsAqrmxghiQY",
  "key16": "3TssRHBaEAk9ErNaFMYVj2LWoBVjo1AmbKnyo8ZViXBd5pEvSzasDRHAWKPAzafwTtUGwTLppd7pDmoHywgCxf4K",
  "key17": "2cmyvMtg4moh7Xg7JWfWzxVhGjYdQY5y5MDG9XMgtqonGcaXEX5L71TawtW7cpoNBZLDQwSi9RQkbLsskxzVHxBm",
  "key18": "3qvqQvMemCc78xsmXSKH6sgJgNueKYKEPVwL4MivptQPY3KC6RzeXGYQFEpjzS6mtnmVupJxDVAPfDGE911KpPsZ",
  "key19": "jbWDNZCUr6x7YJEa6mfDSLfaoocMj2dyUJiN7p2cQQ3ZnYLspZChHkLMt9wyrrv3xc5qT7eGVRnysfbtiLzB1Ai",
  "key20": "vaJtMdHjVuqD6HJPAX6c4Na3gaiqqGEG1XZsdCU6mKHz1jkKHp7VwvWnxXKEBdXsJpT5PmXZwuSewEdeUKGrDfz",
  "key21": "21DK4qUUouzZaCRKkMUTAkgXJH9hKf4QtZYvaJf5ah9WauXDSQqN94MuoAQ3A9EQ2s7bi4fyRfVexFGSnbrotN9e",
  "key22": "5qqnsM8cwP51uBaTgmoZZk8vy383h46sdyGfPJworuzbDrcK9pqqbW98pLc9nGbVesEX8bcNRFnbD4RH2gPpoAjE",
  "key23": "4emUYUm7GvK9XvturYzUaJrEcdbmZA88wojT8LYa4zvLNfFJhpXL4bLZJiHipnqS7Hf1AGQMwBwoSQcao8Qj8nWL",
  "key24": "2Eu3dDZKjLgqVVUBYD3ctJGYwvFCXPtvSjaiLW3vTCT4iVqmCEdnn6cA9AVTzWQHrFJjRsjMwSip1PazdNorTUSQ",
  "key25": "edoJXubCg1u84YFwwSdZsVBVMKpKEcWYdkwhF9Peeeizqiay5r4UM7woXeiMs9J4EJy455JEH7dpMgtXuGTsBq1",
  "key26": "3PXLxdD1KkZdR3YXaZBsis9uSubfmGu7WsieEwrCRmvepqneJqzytHWGqYVvHDp3AttXzf8kfSLfsFtrfc9S7kB"
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
