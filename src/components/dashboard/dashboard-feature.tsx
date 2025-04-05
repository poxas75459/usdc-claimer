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
    "3JAV6CPZxSicjVVFQNbphogzPZ9ZomgJoaVdf8Mo3EMuaRazhrGdGZmEcANeEbLEqAJN2TpwMsmyEk7WLXx1cJxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEQvyrTrbXznF2VdXm7LisVtBVvXK1icWY9a7V2pF1RRj94HFfDDHurVhGxi79uyWS6tmqexMbCD8YwKZSv8Prw",
  "key1": "4QaCxqwf1zYEC9Mtcatv8tyrziTq58jNJBgS74kXHMZwzetQFys3dsK5fuvR8BcFuvhRrBDCLC6sh6DRo8muBv2V",
  "key2": "46KexGuaWmNuNtFKy8gsvUKeovtCTWeN4fD33KkGBDq6mssfMiAh51sM2pQtzfsHezAaRuaaZpDqfE3tsoPiWyGW",
  "key3": "ZRkMuvMwqDWv9v6EZemB2pbH6DMSenHRD9dT99RugepHDoogaTYU6QLSD1iVuuzUE3WgLUaF8CmWtunwGr8KYbM",
  "key4": "DPrd161SW1PdgYQD2vhga3vkveL7w3Q3BVuhKKiY2PniiJnFskSBrP31dXzkJjN5koLTLKUWR1Cp2Dgrs7xoHmz",
  "key5": "GE9W4Br3Qgauu5iwCchjJo7fUyas4zXqBknTijcEvBd1yrxMheCqv3d46U1fZy8FbrgnrhTGxFke8sJuc8rrjfo",
  "key6": "5EdRxKbNJCX1tj4B3co7EPJL8QEHXzHRT7H5gprKPZ4Q1GZ72zTLo76cFUyd2rW8Vxo3tzUE7qirJZmMA5wGzfVo",
  "key7": "4QQCnPaH3VJFyWKfX1ZHZHMdV5KR7wyfeZc7StvzWbRrRancig33JUaze1gHy47YF4SB7j3EZXQduZQ9N4MHQjY4",
  "key8": "t1jPb7Q4TZTLfmyUHdbeGVAEsGU8EwCi3kbe6RqChPSW4e9EVBEJ3GbKPxoU6AzdUc8D1pQuBQawRrcAmdSWnDf",
  "key9": "4S6tJmnaiEuh8woKnqm8yjraFZvT31taxzLNDPGHkvNc9NKB8HEUpaNNYvViZXeX4vhdYEfUv9Lj15FVbRRxfs3p",
  "key10": "ueCpH7Y3pVNp6NqjHRs41YsYesJ8YiSXsKqJL7RSfpKwA6aGENTH24C3EBaZTkKiuTbYC1TgsXEPQx1zYSa3W2a",
  "key11": "Yt8Un1o6nSseLnVjuZnxts9moBMjSGn9sskUoXXN7VDpgWTreffLKiriBcGNJGbA8yP1TAMdBdShZcLR8U1KcCb",
  "key12": "Xq2aHPGRKjMXc1Mh86xQDC36JaYJsmQqpisyy4H6ckEttQTnEd7JNZKwPS1g6JPqBXABiQf4xCAVzkcnGukvNeh",
  "key13": "4cD9z9Pyk5uNadiL4exdUix775PVTP8CABMt11zRVsrwuHxuCoa1PNbAL1kqEm85RPSLmFLUQ7Y4ztCjVGV8Ee2k",
  "key14": "4yjzvwH8yT3bQfgbxb5BtSVomQtj61cUBG9nwqSNDGHmLHqkcGy5HmBZ95uwLFwvSBHf32yT3dyy1n1dZeHa4Ncv",
  "key15": "3QizJM7Vw2mGuFeHonEfPzRJX6HQHcNZqzMuw3dFx6MPCEcakFfeeeiKwqyx9gccL6YdnwUzh2pXwc8XTsZHfk84",
  "key16": "2zVxMocw8FMRAbpKqBbJAR8yTqQsctYx1o39nBZagcDap6tm9NoCPpCrDxJ3aVF3LVofMrBNS4yKY3fbMBLFXffx",
  "key17": "3KkVpZ51ycKXBh35BzuFGhcTAnr1p1N1zpsdQMZYath3rgr8rb4YDapLPkXQPi6aPbMC7GecXoB46Fscj1TYBD5B",
  "key18": "4fPiwnU7iAnjUH4fMU7wp3AhoSjYNbMYXFKTQCknzGjXKCWFAH9Kq3F9Wv9u5PPHr984MbVKJAFmjL3KYGyZQmtV",
  "key19": "4DKA21SrHdevVxBVKDLBaRdJG6EKY4kLJa7nZXxuwV2iVBcCtnYujBtC7inFkmR4ouUXpdJtSgQuDfWCnW7Ag1H3",
  "key20": "5YcGY71AsGQPn9XyHEVDwiMKhpGbYUQ8iPi67zRa1awsFPsYBeh7TceZb8eNaHGQQgVZwjVufU7oiZ1ZpBY3N3Eg",
  "key21": "4To5grPF9waSiWiybJrBcmuic8MzNjVsXPjGVK4YTemwhc54Qwz4RyrajWXL7dctH1gMeFFEtbvQeiuznHb8AUH7",
  "key22": "5gLc9qV7wL4rBmYf6iPhvu4gYGqJmoYxrrDEHNnVTs4QnZwqy3ZB1ffVRWk3SjpGdaAtqKtfZML14C5QUg3NTgc",
  "key23": "28EBpE35At87bFYspXN8cGuGVTa7dJ3cYAdcEYZNK9MUFP7tj4UYmMytfajpL1xzHeURqKyhHdCfLKJm5eYnatA9",
  "key24": "xQqLD4nEL8MZwCHLZn8RRRt1m9JLirR9dgBsk1Ppq8We1c288aQf5Kn7PjmDSHVWTXE48mqP2HjTQnaPriss9Hm",
  "key25": "2KCsphCCLaVxnWM6gZaUMJAuVF33K7QQRP2pLBqNB5pTpDCiQS3GhGwJbRLkCNr7zn4j9z4e7P7m48TpQN9bYrH9",
  "key26": "5xmZXNsUSEqRNKqbTrbCR1J4jAuD28avBUxWMVmrLbr8iqmYj4kHeSwoSep9N21NqBroT3hQwMyYWEsVtpBjo1Yu",
  "key27": "64MVqHzPqRuaxxBJ3mD454oU4KE6bh6DPfo4bwas2umnHdYHhPsafxyZvVkvtZ7Jyaw6gWpepDWhtCu7VdH38zF",
  "key28": "zD3bHKS8t6ZVPTY2SGg7b6MrSesgB1TuT6AVnsoXrQ2gBTSC77edpY2XVnydwFDdkGDvG92fsTThjej65aFw2JY",
  "key29": "66J63q3MWCJpdSRysPfnS9mrjHbt8HDi7x352M2ueSmtxgge8SfuNJTX1janX67L3PXvN4h6aKdreTewFoiagZEv",
  "key30": "2ywJoKfTaydYCh4ppawQT6CF1PwTYhsNkfWyr9X9PbLCNLh6fdrGPhNgjGBmJYYsCtTQW5uLLcDh8YypAZntwWjK",
  "key31": "4hiyP6vEQ7DQFQPhFuYaCUNQZaGsLsSCXkuoZKXvzXCudF9rRrL22rt97Q3cprCSue12jvF4vqz9KnL44j8UuH64",
  "key32": "2LtaL756vH3kNrRyF2EKs45tkLdbbedms3tVfzQhUwXqrBw7bYTUcJWaJqoUNUBLjZETTure11FQMSJf3GbVWA2J",
  "key33": "3dAv3CY8TwiALaokvqZMDXVk28ZdmiCUNXZJ7uZM14nGHRMyfTrNJkxiVQBScyHb5XyAC17xZSGdrDFzPxv5vFbm",
  "key34": "46mfRUbGKYruknhWdN2Rm6jg214bvpJJFh34H5pcctAcJPkoGHZYtN52MYJNQtfG91tht5R9Fr8DvRLPbXB5TnG4",
  "key35": "2cBAjvLttigmyx8TXA9CNjhG6PvjBhXtiESKrtZUckbGYP9PkWcqGrH68LvDejmVjm2WZiVG7LfeVJRSqRbRajn9",
  "key36": "35ti1Fajfg6QTbq3mKHrzfsRjES5ywAxKjGCDCEvCF2hPtuVsMqWkVpQCgAtZXPxx4gRKUtkf2yW8Har6MumuQFp",
  "key37": "2dTYk8EX31AnmbWPWwt9H4jW47uMi6wtnp12dou2EAwbKyRxP4hwz2chVuhNf1ZkrwtSXt1W4ggAJ5eKD8YucUoY"
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
