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
    "3RxkYvtWh8Jyy7XywSkeHD9kjwWFi33c1vBNaaPr9p9XVJTJpG5oLTcGo2djM8iiXB4Hrjc8H4qkzB4LQd9zo46X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7SEMpsFBBh3sVeKC8NCTtMZqPWYjHf8sR1XtbRsHDMkDNCVsPWyCXGTp2E3ReUaRs3u2bmmThdrD3doYJp9STy",
  "key1": "5cXvqjJiFmtpMdax2fbDKru5bwdNtnUTTUDTMzPX11itPSYVzHgwhQxCfNQJr6aBSMznepBSQsnKXCsyuQh18MWq",
  "key2": "4AgvCk5SuRaR8zWXVynvwzRgZpvnF2iAUNCiCABmCStAE8GFFAAQ6qYZEvnH4qGtPeY7wevoggpJ25MNGAtWZp6B",
  "key3": "3GSEeUBAbi9JxT626nQ1aWLxvf5GAtFZ6JDe1JoMbTPk6rSn5usE6Yh7nAz6uPpRc1JYhT4QJBPJCKr7GaFA4KHu",
  "key4": "4zuSr7DLFYB6HA6dX7LuDfK8gjE3RTp4FRsZZ9f7ZkLeR8stC6JxAcyKqryF69Ypouu86sEqsjUyNbqncUMB8JFB",
  "key5": "5JqkDDU5kR8dDrb9ZCJojgPbJ6HvMspef492DJbP1qGwAMEGD2PuQFJfMnmNFvhCdfStHiNdPAujWrQnWTcH6Brk",
  "key6": "5BLyxUCWTsj2M5Qs8jvidFiwGBk1P96gepN1Z4UDHMrWGUMTFDwgKr4Xk5DABBhmEu9D1jBHegk7T27H6nnVW3W8",
  "key7": "1Vne61XfaNzfJcoxBidd9RDBym9B7fsGSmLvPDdYw9VtZXTVw2AwgxwxJwPoR6Rej2HG9Y325VYK5uSt8NPHZby",
  "key8": "5DDTcocZSLg3F7rGGjZkQUrEA8sjmPEuPHnHJgcsLinrAntMUkWGH9gqt6Deuf9EweAHXbTkKFvydYrm9EC9VFtC",
  "key9": "5XXkoccpkPNKKvKS8iThmR965zsnrdaL86jCaXyEgg6CSSDT8rriWSzt4Pudk61dp5oSSYhNdBBRvaRwnWCCSBFM",
  "key10": "4FMHERYZh4BPv8rq7M6GY2pDy68f7xzy7kL3LkjTW2y7qftDS1yQqgYCEx6ZiSRfCdTNdXymn1U2BUtABWhBrsaW",
  "key11": "5ki2J61g7WJPJEv9PwN8ogpNa723ediNpCrNXsDqNgewPLsGmJUuxMckYjhccW3QjjgJxzFthw7PqMk7UtRS54T4",
  "key12": "24ALXcQoz4YJTzx3STjLjFCUcJvwS6LdnGtHkpRETREWw1gv8uZB3Y3H4kHHf5FJvRMwGXioP1Xxz4wzkQ2msJ1f",
  "key13": "2GpmpLxnZK96h1ZUfaz9kjXWAMa1LdcBsee8EjYJ4j1jxPwqH4wp5acQJEWi12QUYTaaZfnM9ATxjUkBKEYmdi4q",
  "key14": "5htrrJxwVFCBjTgEExpLsmkXdJhspWJSdzfUbqzgn3MnG8qdtMc4pikMBpKXzMNMJ9zwzXaWpYrBeWT1gUzNMZVP",
  "key15": "48HZj3GZXzbb3SiyEU9FUw7ScfLWoYNrWHrokR4iQAU8G5E3CtQ86JKfQyf2AzR9fmohSuvNFKqCt9SvGcGaFy2T",
  "key16": "5tnSuBeR17RoJizXQV1a4rjrTryYbh3Kito5yNezMJ8sn8ExkB4Su5HQDA197zAEGHXnMjBH7q5dEupBF1caXbEP",
  "key17": "2hL9ZQfm7BkggYMpbEtzjcUSFUzxTEuKyyQ9BUogq4Xv9zwVGVg9YUyACWTkWNuaCVV2PWb8pumhu6zN4Jtywu45",
  "key18": "49KwCCce6QtSWTnBp89D8JLhS8rgKyZZWHBiESgp1Don5z1HxU2qxax2TNSExJeNT4BzLfYvcnQVwbjLsEf42Xbs",
  "key19": "5CrDSUYkvkLpFhMJwH1WMsJXb96UxTftyF5XC7MGHnrcftXfAYdfS1LctQ3WTjdViHeP9QsnYTTxmjfXdWyRRzGX",
  "key20": "3gysJESnxTihP8qv1yxnCS4R3P3jhnick1Eu6XTutLQnJKBXueZx5bxrWbZmQH8yLyfrcEEonsGhUvvsdZC7mLtz",
  "key21": "5xinakbpZ6TQ6a71gWqxWj3gRHg9jr2f6ueMTRMCoDVSvcb4zMM6M9yEGC9wThMJnqZQAhz8yi2f4piWD6tHbnub",
  "key22": "A6SQFd7LG4JvhFtmUEPZwvPTgc9LYKf9xkZ1ETCNVEttP5wSRSfAzyjPSg3pGBPRT8hxht6Kjv4wk1mipU4G7Tn",
  "key23": "34N2LhxacKPoBQ41FgPbUbszstAb1eztRhphV1MpyccEFUjPK7FrwpRgvyipU8nirFkfquxMDCCAkcnoSqvEVkfp",
  "key24": "4jYw8uBHfwMhcZc8MbBku3F67MZkyxHw2n2BPP2Sx9VdiVoPGEXgXFkQXseE4owYZLj7Q6LmAVYyUYhK9K8UDJbD",
  "key25": "5QzAhZZ4jw73pEMZCwn9ocTKP5GRk33MbHkHQSysdg7MrWnhm1vGYqjzXiGG5CAnyHj121bfSrrE7TUkgHLaEvHN",
  "key26": "4m88CGMeMQ5zTqMyQRAcYA4bvbuGfwPxT3mLjEEw6RXc9v1BV6d5ndpB735zm3ZakafQ23QQ3YGoFonP4fo8WRqq",
  "key27": "4HGxv68KbvcigvvXhKNoJCPPyFurz42j7CgYSrAyKmSncJn3P22WrHMpCiZ9myiCjFR4xtKNbd8MkLdJJ28ZSisC",
  "key28": "4YN7ooa45zovLcTCR2zsEhHVgrThwouK2Yxdj6yQFvDiScpMP3s7MjRc1P3Q2UQ5myKG27NRTooqdzF1QCUVC1wx",
  "key29": "25hX5tC2iFDSH2DCYiPmtSqxBBBWHu9rCjuaxVrzLq4wNpPhwF4B1UZWzQsZosSes38m5DqcuXYkMjVMHbghDwtT",
  "key30": "3VHYwfWDK35bQKGkUJHRrMANJFKdwWTWrkTRDJ2ygntTjSWyMenyQFRHuhdAAb493qoQGx6bZ5zUE2m9fLSdV9Cx",
  "key31": "33NvZLfJos2JqKqUr1L5aNjh4h6MdXpmxViQswY9wSifY17ezajcdhRJw8ZPWLLefdouSRP6eD3ZCkwytoQkxyUt",
  "key32": "gD697PrxCCbdvK9J4CYuoJuhQJAneMftPLQqvXeYs79yzoGLBRYhjWjtfkgEtPjgXVSYw6SnYns6vbFvbPXymEq",
  "key33": "67P3rKf9aX6f4rxCjmhayLXbkf2LQnLhMFe1xN763aDPokAaDnJ7Ezvkg7GgudgyoPYyTdzREyVFMacbeuGXigbc",
  "key34": "4dS3exJFVoFkxjfHfg8f451ZRuqTnigCABpgoPZ3WbXvF9gVNAF3Wo3dRdZVu5Rc3RZ8oDGyF6YYi4PgsiM6UAci",
  "key35": "4HvfhnFdsNxQzTrhrmd24XnCrFcBnM4FM5LURvv2gvSkRNr2R1ZSzgZR6goyMXxcnZPArXYSotkKEwMv13yDkBrZ",
  "key36": "4bBshSUNcZiZ5n3eTy3SJ17cPWnytK2rSm8zwXad8iZ3FBivbU5ibNTkr6h6ajMF51HAVu44XMXSKpBZ5QsWDEMi",
  "key37": "54uJgdgczFC6E4JQSj2q49Y41DgrSaeNH9YHEceaQWZH167w9LWTb82jLrbCw9ya62BmZr8PGSyebY3Ex431gkpU"
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
