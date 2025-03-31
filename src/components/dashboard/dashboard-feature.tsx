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
    "pcUJishk7vxLeiAsn59PUiNPRMjpd4fBTMriyntjMCDbA7x1BehLqJ8rq4Twz5dPQW65x12ZWVQWCLiXzQy7eng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JEYV9EhwBCdgvic4z4aeSDMQsEPW9mNfvzLw4gw6tArouPH1BsSddg4u4QgFWf6o3GkycjRz3jFTRUgtVyC1PJG",
  "key1": "21EABhstcmUW4MX1Y9WYUvMk1VP8i2XdjUHevfZJBwpa8WifteLevsieXypy1G8pxN7ghHNasp2mKorcoZW9VDv3",
  "key2": "iFHcv9A1KfePwPXVW4fAdigXkrvHqH7GLJT3bza5YJgJQFTLiPVMrL8Z2buh9rpAng9XBFwNhYmQbzExzyxUNGg",
  "key3": "rzSSbxSYxH1dAke1Ukb6qNCRc1tTE1XPhncDPGLBeQB6ED7eiYXuxmP85hDrjKvF3vwXh8x11zwzwWQi4qNcCti",
  "key4": "3Rz4TLrx82pDLrShodGrZPB67caVYk6r64SRkctg32ARrvDVfnWZZaziNzv8D7qmGTeyPLcAdBRrgqqbAJbLFSCP",
  "key5": "mSVA1Ddd6nx7ipV75wXAfgWL7B9bSPJc2QJZaa5DF81oaPmhFpL5q2xf6Z6VdoHnVMJLWGJGuBTV7h7VyjjRHgv",
  "key6": "3zFQvQ3Fa9RdZ7EURJMHT9RA2X2RcEtpTtSDK3X36U4nweLKTLVcsFuQt9KjXE9KBbV6D47UvyTWQpvzvKc7jbUh",
  "key7": "5qtufjgivNAzViua51gs5ayTBYcHZa76rChsSRjXexH4Xo76J6hHZpYXWJVjtjScB9qu5HjGPkcZtfgrecD6WFVP",
  "key8": "2iLDn24LzxV1VZiSZ8i3yTysVw34rrJgdBxDNzkdbxMpPrpQetZRiCFffUhQEo1KCn8oLA87PULd2pNPB2uLK3UZ",
  "key9": "tGdPdbHNjfH1JAhvDyGGxqSVbwD4yZdNEhVYsZU5mnZvQ3CAhTc9M7UE7ipwheAPm7qYFd2r26Fq2Vf3P572XSd",
  "key10": "4oAFahNtdEbfTqvdXhx2xiuhzn5nhmcYesXTjU2Qkt84NbQ4bkaAbcUZ1g8kszqJijFsc7rKXQEwBXV57ujMha2d",
  "key11": "5iGYBYg6aCHgKywBtzujYGsoac42bMW1Bd8YXxujE8seoD7t4y7VEJqdd7xDFojYuAwUUuz8rZBjqTL1Ey1U1jCq",
  "key12": "27dgh9MgBjReetipErLVtvsZhriaArALLKKmRWXZqrNbmtU4PFwguMqi9frCcAxUVwSeTgrsfacGssEgK5etQVqW",
  "key13": "5jcvPwbNgaHvHatVwqharY5jWkJHR11DKLW54g5zXmTjyX6PCUEuJA3ztAUYgGD3iyFGgRPdqZk6L5EqS73JtyVh",
  "key14": "5v5PmhygbvP1tXyGp6MmaA2GMXcTs69hpGFadubdoFAHzBJP6y89Ue7TS1BYQbvLQLNBXPP4KxPJsMZbBjwakjyi",
  "key15": "5nC9tGEyHH3RoVw5kV9n56SFRSXLANBqMdrwo6egHVFvcUD8yjjPmZJts8Ww4pnJEgNm3rUWhSAqw5DKxyyGUR5",
  "key16": "3KoXV9xXFqMCfvMRM43w4GS5xFZTaxVr9hUFBgac3nXTmcMAfKnMJouwR1P4KwKiDbg1TXwkQYipV9b2ySJ2N35q",
  "key17": "61hwQQpYav7Spj4fgiEGZ7hzgTYXLVfjByZTedEXE1FbdpEtsxxppjLhi2fquh35A3cJSo9K5tmMqR4FdnQPweV4",
  "key18": "574xAtZfTeasjt4NMAhzKNVNiW87216EqmDpuFVANvbLUP3HnQAsu2UEy3EAAZF4ymVEdMrujH4hy8ypeFZCwfKM",
  "key19": "65wDVoo5Jut29LKHYH5D9KgTBpf8kAJG1QaqpJtT6ZYWuaGPuBptyfzKMHAn5NTEZkCrjb3J7c2m9gtYEuQM5Hod",
  "key20": "38aPvDAhdtp9N2MybFQXyHkazFXWqLRwje7C5Ak6MKgZq7DHWiebZG826Chy4nUPW2ev6ZkLz46kdwnyBg282SRX",
  "key21": "5iEV9ZCZfntqsxedDTed1NhvsDoanMAd8Etk9Yrfozez7SWNBL28ZJ2nmPzM6rY5tBLBieJ8uQGRJdbP6Rjyxrph",
  "key22": "9VJFx6cCBp1zgNzF278V9fqfaj1o2L5zZqrW9MRz1cHfiHg56mnDkskUGYRPot7jsJ2Reu3z45airkg4rBYYP2K",
  "key23": "33Q85p4anEaMdk935BungPwJ4Q5HTNS7q3BCPtMwuEjWbELUkyNAZBEMibh7Y2EKLrGbWe1ZjyCKvpDghQhosF6s",
  "key24": "zfjR786pkKp4zMtsrUy7goouZ3qfkwg5eveGTP2SWbBM6M8RqjwUbru7sihZv5KWRQv7udDWXZzCqBn47QupGJg",
  "key25": "63qTaJspLaTPzQ5FKMVrwoEqDDA2nBCowPSzZ7cwWNnZ8BG86GysH254XzvGnXUfQTRYf7Mvt14mudmT76uj7ESY",
  "key26": "3NupumGV87TfCyuNGUu53YjCq1fgYG3YJjzLgHSNoGzcCf8wpiCEWaSdKZVmgLmP6WHkJUtL3PNxKF7a5ZVdztxP",
  "key27": "4gKNGwKGHpynd5ddutWKSE59CJLzK4MYgZ9SNypaswbgEJwZ74QXpR816BSA8sSacqbYjnKScyguvnqVDhWsNtzU",
  "key28": "3TkLDpQB8ykSuMcEvf7ptBcfCQJ51jLVMCM9BobJFsfU8Cp3RBUBU7ewX8wKNxwova2mSauszp3zUBSBQPGygCPF",
  "key29": "4b7bgbZwo51QN1SMwVKwoSPCqQoAxH35R9Vuj2kEb5Ze6HJAE36VP8RdSMcHiTLqcdjfQvEyvgHm1odG1ieoQhuw",
  "key30": "4Wr1zhATkyhLdcsWbebbbJzJNqWk3sJAgGuqpBZkC8VHmL6LEXUsMa9jTzKjZiTvWau74rfyr8SofkQaT3jcL4M",
  "key31": "R8CtD9otA9GFiPkcyfH2ctjhmBBLCLycEh63it8KWe71tnmKBwKQefb3ExEya2XzF8hDcCwMk7TN2uEQwjEXsSn",
  "key32": "4WbuWMKtG5wq7ZpFyrMvHs9Hbv84SPcGJPYL32dxnngHrh6xeVYGWCUqrwF2njjXvnBK5ER1o2iyMnmu8BCZF5jW",
  "key33": "5UkJdRRVEGatB3BAqHoGp4FqTUAuYzyj8ZGydDJmo9pmg9VoVuyqg9Utq7KfxDNWpDG13woHgQNQd3EZtoexjnP7",
  "key34": "2uwY3KLwRR1rVA8X3N7RL88SeissKmvt6yuR1eVvygRpxYFKFmQJz51xCqaANYQW4A3JHg6a6oxcZwGLsxhj2Gfk",
  "key35": "38ifvZNXXZzcMZQGArkazweWn7r4Qib8M9ahbfk1VcDxiFjvS2H9VfzkHYnd23NyEn11bPcjqdVhYLWWfwAuz9XZ",
  "key36": "5sDgn9azvdVtaShhBK2mfnCib9wkEv7bKTLMXdexDCd8wHQxXzSGqHgj5951fkMdwJcZJCa7f2WwtvvP75WXy4Yb",
  "key37": "2zdfprZARuQZjAF4WKF2CkFN1KDhR5H4xZgVqEDym8z6AASFZTeTryTBvGoqorFGZmcz5NzPh9ZKPdkFJRyq4AtG",
  "key38": "4DagzRVEM84UoEKx6RPne2QNGPNyprUjLg6tdoM2Sx6ERMdUJCcZGaGttTa8TVnCc3NjqFJxsijn4pE6vCvDdX9i",
  "key39": "47VuWdVjMqTQMMeZqBBhV7c9nNiEJpbcGodCgep6qpaZmaiuDcsA3FJeP3GgfVNXG5qQwUQrPD7Z6x9Upatzoqp3",
  "key40": "ic9AcGSN6dxoojvuqZU8u8p9VeUJH4NWn3FsAz8WEoL5ApbVF9qvRj79oCNnjBw8LqWC1hBn4v7Yty5e3853Rft",
  "key41": "3ys25yvy72tb1Zd45mQfHurwDS15uCduzhmP1gHKP9QTzvPZc5GxZB3Mw6hWeBWMF7zYdF8ix4ECovVHvnZhAk4V",
  "key42": "67kupG2MDpQxKNKmWogMxpwH3CqEqv7nRmyjoJyWW95HGSdBN84zc2zjdV6vqPHkUjz4VZtNt7BvPVkRy1xFcfTB",
  "key43": "5SLZJsLtHqUTe2PG6x12hczzTepkeQNR29ngK546wKaTYBLnjseu8igxFrg5mt2We1TxzHXgRxbqjUJ9P3vAHmjQ",
  "key44": "Vvfsx6rhM65Y4WJXq3Xq3r7WoSXxSiyeEbh1HvJQCDcnTXxFFTz5MywzdHpbXsiy4n3Xmb1PKKFAr6Hjg3CB94t",
  "key45": "5JndQeRRy925kgRG71tB62ZoZKecNW2eBp48jHDSdVGH4BE5MCsECyqESgrSXNcw8mqQRhMLf4QvXTS3rfL4NbTo",
  "key46": "64Wu7nA7rAooiMN5KXkpBmfaxV74YezXHvqGznJQRoRdQdGKeRBCy71SiAUQKjZ1L7aoXr9VP6Fjk8RXhHN8dmku"
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
