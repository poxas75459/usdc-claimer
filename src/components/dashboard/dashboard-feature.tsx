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
    "21zgknYTaBkxmPzg7THjFsXFz1QW9QP4xu9ts7fF4VaVq6am1uuBApwcC7cuo5oMpo95RHh1UU79uq5MtZAZZ8oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsoTeNTRhK9dvxRKqrxjfG1VvGxPTrD6wtZ56BL2Azpwe5w7c2WnGgMBB92CJbWo7HsGkBgmBPrURnzYrXoSQN4",
  "key1": "eTFUQbaurKR6Xc9cYwbvXbsyjgP2GjX2SeSpfqafbeJRyshJkgTkJDR6jFMv6vFEcRwRhzGrdjfZHUb3ksHFqza",
  "key2": "5eMy8BhvFSuH39SypgJq3afHyJ1pVQsYfWKiLB4suqQk3JKqDSR85xFuw8FTtZukgGBL7SfCJyBqLFdvSyeFybuN",
  "key3": "3p1ZLHV4MFsFhzQd8AJZL9gX6pLxNJSGr5gUZzDRkcC6ESVkE1Rab6vDsiyQQFLGYr5XVvQsHPQNeysVGrccshLX",
  "key4": "4jdhzDvw1AEYotcXHQCymfaLiuH4KAekJULJqoU9s4fXX9yY8AN9QQGHht4YtUJV4tSRLgyqMMjRPosAk4iX35hg",
  "key5": "23R8yDQQAnjCtv9oZ1Yv5uRP1oTMUzmDR52u3JgLXPtKjUdhiT8dGAdAKyyXS9xbTJma94mVpd5qHUbjEXqQ97H2",
  "key6": "2DPeafJUsF17RxDBiAUV4MGkAAbUueP2gfrMvtogi1YM3wkZvQfwe8H5fFraHG3Jgf4oa1Qp6T6VDKd9iJZp7KqN",
  "key7": "hADh4EfG8VGPFrgruZ76dKtf9zcpo7dfB8hqed9bNiMfoCqhbKev6tBpnP7Hqb9H7SaBQz8dAd2z23TgrLTcCMt",
  "key8": "5AEFyGB9ujJqjbmV7QHKNrowNdURrsWHyKPsfe2a8wwvfuUgtYUNQmBhEsEHRjmQnQdF7fEo9LUQ5r6FDRLfKot",
  "key9": "dCBxZpMngr7Q7hnXsqbufhsPSudz6QEijnoC243aeFAq6DcyeB5TNiTsFm2n3ubRq2gcjkRdECYAGEninpV6HnP",
  "key10": "5zRNCXCdtZaCWv47kgocPkAvo741rqoxuc86tZFSzDDUpLRgGxpLSTnMZjJa8e4Gn5e4Nh2CW6uErgdWwJmFWfdf",
  "key11": "ATEhaVnFCRDZX3cvZBqhEkKhuDiauWAZa4gX4ud6Es5sCDZt5eSUoqkAmyucGxXcjQ71E7fACTxSSdsffotxpgk",
  "key12": "26kKLYbTmvjxmfXWThuXEtS8K19kSDiabNMbDu7JyHvBGsxAzhMiP8pWpYufHAdhpKDYSBnppfLXqVUV3yLZUr93",
  "key13": "3LJKBb6T6TqamfaMbUjQJ8B2RQzUxx3LWPiUWzQKRExhC6rgy1rhaJCsAigsq48iwzZi5Sy8yf8kJ2eCe9ownthW",
  "key14": "2P2tYhaWxFKMiYYNwHhgC43KAbGDTdBozuaP7Ge1PXWGmywAWSk2emsTvD8SYTm8oRmYD4Kp5xmzpAXi5qwF3U7Z",
  "key15": "3QzZHbvxFaSTroHNJV8qfUcQxLUHw6sNLWagBpkgKcHbw5ojrbLQtdWUQTQtCAfMgqZ7bkWcWDvJuApy7FMFNPnv",
  "key16": "5sEwTfg6muTBV7Q89F5wZHS5mtnw6Kr94Cvda22uAgTep2nSWUx8cvY4mSgpfgBbmV2rgme7LvacEYPWJXkQV8yo",
  "key17": "2KYv5ieTvaRkhcBkKHVCqDib9U9yo4CCDnHS9xSSbn5BNYvt8yyM2prsHTQZK9m524gJhZdaT9g4kKE2pZ81SfZr",
  "key18": "5AqCZZjVBE4774Xs7HdzKYKhexVdww1XfCZEx11YUDtzw3eo9ewk29cW9jreUXVFGSnwYkddnFwrWuPkf6nDriRk",
  "key19": "2Y1KeqyP2khMmASnMtHT1YSBMxPhoRPYgSSmXV8Goau2yS4TXQBmLLfn1gxs1jg7oq4EiNQGVVXVEihmSHaeNL81",
  "key20": "3HVVcRA1aSWqPu8wnSK7XkunuGbCp4AK8hMBEFMotHTUU6x9Dm4415PhVgzi5bDmhHhzGwzTnvvCJ9RB9NdcU1Ao",
  "key21": "2Q5vY4HGFsohv6acoT4MGvQX55KBq2C4bXq4b4Rf3VigbMc1J72yTfwLS9px9ZZ6ZV88WgLXkHtJRoSLsSNF7dkB",
  "key22": "5CmSX4ZjUaroXPPZhb2GDtx84dYuuiwyE12NGNs87RkGqNjkRCuZxPznimkSMPPU5oWi4ktH8hP1kfCzvqNueWSD",
  "key23": "3FZmHmCCHjh7Esj1mppSEr9EKnL4Lx2JgyiYHnmqMA82Lo8HYqncysQ5mGCHQydYPC88DkGmY8q18PD9w1STHQdu",
  "key24": "2MLtntLvNBQMprHSdpQahGG4ZPaBTPfK8sm7KrxeqHXzai5vbUDxWTSEyQLLx1CaDTqUsbeS7BnA3o35j7ebem1J",
  "key25": "EaFMqXQ9vhcE72JBswD6A9sBFTvqZut96ffxZhM4Rs9PeApKZbKvwuVb5orWK6hx2Z7RHUzyeMLA2QLm426n3m5",
  "key26": "go21YsrxG9n9aHka87bEbeJnVprojpguUvFyJWFDDwvZB1UcRHQP5M5bxWuJwm8qHMJX5gPRGGoA297KV4tNYXQ",
  "key27": "49JG32Qafh8DDHTubKUjhbvk96tf5EnTRq6hTNLiRe1yce8eGDN2v6EQn6UvFJ5R7DQws4VN9Fz6ZgafRwAiK6FB",
  "key28": "4GDBJNTvAB82qh1e9jwXehVFZSFWASg8scVQhiLzPH4SNfPrih2LcRjF6xRfG2SEETyMUNqFWjMb4SQ1WQqUjySN",
  "key29": "gL5nVPu5Kh339gGH8ssCq7y7P2eUuTJuJEDMiyzGZfQ18py3jZMLMoBacHdZntBVpun68fCmpLBECYMGKPKBQB9"
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
