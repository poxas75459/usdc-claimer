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
    "66dFMrdwPu7VsW2XKRnfSfdggwUX5bTcC7LeocVavr6ZvXWG3zEhbeKeXQDS8hEGZ5SVSQWT7PGcqvunvxr2ANWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDTPGM9ksGAeAn31TLhgHacXZbVoEZmzBjQzU6YVyGFbtoTBhCqz5mRj3oL8L23BCR7TM8wSMu4tvNY1FPAVbkK",
  "key1": "Y1tZ3Gmkj7qvLNUENbVXcL9CrFSdJ1Ee8dZajk3Pe2hhdV6dbFRc2jpisTT99RBLCdsYMx3uNx6L1b4pU4RfAGx",
  "key2": "5SkHsanKxt85Svm9Xn9aQpCC1zHcgVvxKsS4akwZvFodjxcEXC7a7Go9fiA7HyzeL1GCHEqNvJwjqcYgWomrZsuG",
  "key3": "21TaHU1LMu3uj3qxvjrz7tCafRnugMSc6AEbAY841nsbhmy5AYSg36C4MNpGa3CiiZegzwewH8fVSLdFYoeRVYtE",
  "key4": "4Av3wSctUms6d1jfugUDNDRBf92vTwYPv4CmcWF94154UHf4vWaRP67SGCMXnj3drdngp6NoXiBbfrF6Gj8xeU1a",
  "key5": "5DCGiRKjm2foYarzcLkZkZBUTeHCrnA81zckQtHc4hhHpvxoms7ehLwww2uvc8DarszPm7AQSchEF4eLxC87Mgrn",
  "key6": "2TR2LhuRKinTD9ztm1WH8QEnhxVA92diA3ck7JUQaBDkmriL4GbN6ddamyepheVGArdzZJ4VbEcQmbkDC1b85ki4",
  "key7": "2QiHr5L347UiCz5JJM2zB4yNndv5fWLnA8AyFkRMPuzUhpPa8sFaU4CZXFTjPkZptF3w3cJPk5GeStGxe63zNboe",
  "key8": "BZEGEmQzVEkmzJUPYTnimFvRsWyiAVAth7zPSRUuFTzRp2x5fkW4Jj5kaxxyg7VKAmtGUF5V18oghCZ3BB3o51j",
  "key9": "mMKVxKaKT4GxoDy1gm9gsESBLSiwLKwNTpraze6Y9CZy9tYrtHPge1zoQinvGfKMfJQJmNHxwuFMcH7YWYKZQd6",
  "key10": "4z5hRNztyhcAy9wZnYkJwP4E5UJXR6eBxhf7w2R36GZSzjyhqiPpwJQpA8mdXuGnfStyCuZ9iXNjzQWHjA9T6QAS",
  "key11": "Nq1BXo3WxMn1AY9gzxy1gaCS56XfuMoaTsd4hNS73yfg9PgmVpL7fXUyoUBnfwuQfUiCKUEFQYPQVD163YpQmSj",
  "key12": "57zUf7u5LmXoBvH4wCvKJqARjvPJaX4jZASLjHTdcR1QaZ7pq8DQ6s8wUzLkdtnoXNZkp52gpK7nhc4ybifNGdX7",
  "key13": "5g98cgTAAgei3dVf4wFJmuwtAtDKRz1bjujU2iXmt1hqvKUB9YkkRH5PnqkJVfThVjLs3GCPf3ovhWw9Wz3tGQ8c",
  "key14": "2jnncs6XZwJBgJxvTAg6osEvyZ8FWXfWAubW7meuh2gwfHL6uG7DBgzxUgoayBMPXck2LAPi7ZV8QgdkKP8Qd8JQ",
  "key15": "36CMqxrRDXkDDmK6zPz9h6RBmNSeGizkiMfaUpsgLzybiYSgrxBYTF3o4XRStTtU8K8nSYqx8GojprGtqDukVoQi",
  "key16": "4g5G1KUsfNv3JeqHAS3VMjJjWyfk85akYQMbZAmFesVg2WcJ3VregM2FvKW9jZ8quX12qQ1PjYXE9jiJ6PmPoXSY",
  "key17": "3W2SxqohF3zs69wsvjCFnr7Qn7geezjive82pnEtujSYQauzAEJVM3fesjpEbxDisCbnEfWzkrVDE2Dridgpy5a3",
  "key18": "fRTdz1oUVAoQgMDMcbFeSEDVDM2pT9SkCfv3AvN9yxjppQDmmKpn9PMTL6qMG67x9Nkk6b1LFe1dm4d1Xm3HaLa",
  "key19": "3jEpw4itf35HPnY5UiokFdwU9SpcX1MYQKSQTA97yorHJKnYmSsWELeVFR3NyDA4bFe3wckH5S7MuxEfczMLBMpK",
  "key20": "5LhMCLh4VeVQvm4TiUyq6J2KAfXwUxWDaaPn2hkJ1JeQkgbBX6kx53FFEgN6HFKXxEAgf2LpmzFQMJkxZJTa6YBM",
  "key21": "4Gzx2ad59N3wMnHjAKA8WU1rHbSpuS6NddKbrkCNZV9QDwQ6FtCoctKyg6EpyXuf2YQx8SfratShtmkKcjnGFPrg",
  "key22": "4ntHeubEqrgh4omWwqb5eEWvvTK58QbtZLcqaq5XsyRhfg87VNeMMbxdUxYXHfmryz3W43MQrQfkCzCYpTr5GUf2",
  "key23": "5HrToE8EJMJCqtLFxZRrrKbQB9VyJLUmoBJBry6aZywTna3EHZFYA1aSR9PMLHjxvP2CNN169uhTa6FhoN4jZH4F",
  "key24": "3gznBUGTRWeVk9ZsaHmsQY6Lvxqks3NTD4imM8gJ9fPUfewMV4aWUrEf7PKC1vuUmjwBxb7sovXAcvXRzSxUyQVi",
  "key25": "3VsfCersgfsG5BDHm6C4X95JE7r6mxPQio3Hg6HZpeqyBfsUog97xZ1h78ZmvkBMHczwFS5j5ddwzyJzRNh1y5os",
  "key26": "aTYjph5xzh2vD5VzKEyxtaP4EVtte2N35UzNsPaDY5DwaF9EEHcPB8C4DkkeWFUbfHsfoko4bxXdWE1tPooJt3U",
  "key27": "kgsb8HgwG9Fte4kwfRRiiLTpWH4PbJx6cH1g5hrFSCdKsKZC2RV5vXiSHWEE3NHHG4EcqvJoQyt9m2SkcHCg1kv",
  "key28": "3bYesS4gxTiBJBe1o9J5j4SVxHbfXWEeirwQL7GdsG92sNeWS8qbAKcRjGuv5QKBoNc7izf9t3DJLJmWJtK8hPL7",
  "key29": "nu9Q1AtrEn1yybUVhxwPvwtDJiQDSZE6UDFBAdpZ3rQnHmVFnDYvaFeb2ure6o7kWeyEkq12TMsXQv2i59FB9bF",
  "key30": "5dcRiek9KokhUamfjbYsUHWAmQRWophJx5F8vyoFS4nMRytNLRtg3hf7FjjzJBPME3qPd9spHhJtSFdFsLo8G2B3",
  "key31": "HsLxSU7FoJsPRSPmn15TthhYaqev268mUsD8uYDryaWWHNYzJzjxeREiW1tevAk3wyzhAB5hbi46XU3z5voNjLK",
  "key32": "2pQ9TdTa1EUwD3nvRfonnpNGit4kjFZ4Jw1yLH55pfoLLv11cDVEkyF8WhR2JBmumF2hSkpjFTW8ZGQzWXgeQjiZ",
  "key33": "3r2KCH8xNo4rEjFGuX5Xe32kRXqkkkgotrKXzDWhqyRB7bWjipDU1A13Lv4fAQMSVHZ8pckduyypE9vJmNqwdxLZ",
  "key34": "5XLxqupyQYYV8ePcQQx47xNP2Gj55EXfEDzdkmnnkJzD5d5JciVGcyFJWoWDDaugHYvb1RM6U1dpDu13CF5yeNJo",
  "key35": "2nf4x6PwuSLVJPvAc3CGmXT2w2HfULH3NoWmQKtY2XRJgftRgquwr9JPwfYjzteNX1cXsiiDriTLjXRXCP33Po6M"
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
