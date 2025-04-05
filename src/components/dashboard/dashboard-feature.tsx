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
    "3ZUkDohBbDoSh9jLvdK5LXmtNcN1JrFR13bg8dF2s6rCSwaaSeD5CFCTWy47DhqG8qaQJfberMUu9N621iBK2Lpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gieu6sXho8EFYXsAWLATB7co3nfQtJzAYo5dz5jBvXuNJzn7zzgSHowWhWuroWBzBundZKW5EfZKyLhuJAWachy",
  "key1": "2bD61FB4AAnynENkeasJWnupgdQbYqXKwY54A6Z72GjGYyvjmWrp5d6FAM5dzFyfcunvUTUyWktXdJyZjSHW7ZER",
  "key2": "2MZ6b3j8qg5oKoxyunqyaUkzVN8BSvGfzmm3wtXC2Piyua9mUTqg2djFwT4SXcweoj8VjFXdZ82bJJXybds74UJF",
  "key3": "2kC89d4QbzBbafsX1ANbY7qojjnMLUUJKpe26Baf1Joo3xLbBxpubME4hWRzNw3mH7PQwL68d1X3QkpDjAFK6Vqd",
  "key4": "4AAgjo4HxqLLmNmehD8bqYMMf8rrdu3LxFtZveDQ1aSqutFh71yaMytfVhHJv6HeggiaBMrYAMfGsTe6Msn33LxY",
  "key5": "56mdhJ819hhKTtSXZxNdUiFBSchGkNkEhzUsybJF3jkxjcvJU35MyXgKA6JQbwxD8EesDMro9o3AaCksbSDmtWcH",
  "key6": "562SgXh5EubsF5YBaWEehcgqa5NpBg3SZHU6g7XXSDTi8G9W3fXCPhHnnKq86ocoKsoCSHwKG2jjmSwcPcnAYs8s",
  "key7": "23gW9EAXM3iDCYePkGSo6UonJ23DV4av6EdabsJ3q21F3yTfnmdCSXXNX9GE69eXYhLYepCP9pat6RhAXHUubHQs",
  "key8": "5DHr45bmyraR25pAeXJUzCAeFzppTJWCnR763Y9BxGaSP1Hadw3F1JVLwAK6q9cqQKXyVyZXmqChpzpo1Ea1qiYd",
  "key9": "3RRUVej5BFKUHMwKcugoK1RjaTezDJ5niZNwVDopCWCEkFAQ1B7cmd7fyE5qCLq9CxoKpZQq79x3QQsuYpF7CJq",
  "key10": "4D1zqfAHVEKg3xmJR522jNcpfZ5jUWLpzzCiJuZ5Pz9AC5DqDxYukciUs2YoiRzaDve3hbuwCLpEQjrWNV3NL2Uj",
  "key11": "4JTymiLJvtDE7SVUUeq3z3Fg6mJD4xK8yXebaqPGNir4EXukZ31mcVJXMBZYttUnbrK2qx11FV6RK2VkbaDKMP1a",
  "key12": "4f4dHWEcPkMoTRdiEyxr5DVoqeLosxxJJvJ9mEmZeL8WDWHpkVxfM3zMAftoLntR2ANDWi8RmjZaBY3xzEbY2sTh",
  "key13": "2LEZJmUNH2XXpBey9tQRcVHdCCgUL7MJBxHN7LUJz8TKkEMnJfRoNRukDCYBYWCXZc6fApjYKn7TjpstuikTxXso",
  "key14": "28apeX2cY96DknsKVwGuo6Q8dnwCXmiq2pDeKWcCtJ1A2hSKcrJaiFoQUkNwHzDegXMynjpKfcUiU4RHpnE9Y6N4",
  "key15": "5aLXcyiCcPD4CxiJQPk7CU5sBup9x2oo9xfP8GFqQEV1LeDxcDTTwA8inaR1NcJPKsTdWSzwhcjjxc5TQNupLvR9",
  "key16": "46TgTnteZFbRZH7a8V5g26zEULE3rtsrLje18HdWix8U6JzxscAwjED81UyuaoBd6Pzq3gKPP6PZ91cEsAQD4jTW",
  "key17": "mjf4hobikJmXekFVFGvDXxx5qgG5iLbqZwEjv7c4Cc9tQYRaNnJoUiTEwFzG5pvWo24xnBR82C81Qb9Awg7gs4A",
  "key18": "5ikHWGJU4QE9m4fvs1XtkZynVG55CFeGPtTKniWs9vQHxx2XMiqHe9M5vrBDvSztYvgJ9ZCrHVEoXcSyuLe5WRYJ",
  "key19": "3h5ks25ZwbJnFR7nkXzQURbLKH25257w9AT2EoyqL2HEW5vMvyfbuLro1mWDhTVCm1Y5rPznmDFLxwyDYFRqsS4u",
  "key20": "5N1MtUzgLgb4a9coPzkDczDVAy7DAhMZk8Rfmg6NLkPk48AmS99UvS7TFb8ofDz446nDDNGGAsvS2MrwiN24aZVg",
  "key21": "3S2TpasvjQMzfzKH7dmVpoZmod1HMBF8z61VJ7TmgMg2FmwcS8oYpz7naY9ME6yjiSFzfErH21dRsBjm3raW3dwp",
  "key22": "7TkVcY9uPMY1YKZS9t3eH96ZYLVuHM4JrUPLQUZGznXpGEoWVZRG9oJQR5JPt8YpTRd1PoY2jQ25SZC9orQwzEA",
  "key23": "JZKsaGZJh4syv8GnGquRQ7HboG2sEhrdRBT5ouWVP5kP7q75B1FwuFMgXYVZ8Ar7oBxdDNDgm5fJMjCUsKDwYfp",
  "key24": "2QBURJmo3RnCp2C5dhszJBYzqGatHXrzHduvkDhBefdianX5WN2wBvGkZEeABYcU9H8xpco5SP7NprCND4AaswCR",
  "key25": "4LR1Y4dDcsDTF6hATmWdighMT2BVZ3z7zLScrfYz8ii9N2ZyGQuU2dqa3J9pQyxDnnywa3THtWBt8epkNkunihSA",
  "key26": "5B7xbtEodawhQUfRoAdWjwUNaGvT9oKQniAYybmhjH1AeXm4aEerdvAqW5fFCDkXZh1nEe18ZN9zQPZnTbbTxWRh",
  "key27": "EcGUmgVQJsfgSh591AwwyHUucLgH34WF1HyNh129XTnYDBpzV4BbXCgnA2JmDtV83KaWyS6ahUmZe9jztUZa8Sx",
  "key28": "W8UvJPRQxxSeJJ6FZHQwvxiv9ntUHbfdbZjJgo8Zs7siohkMGgs4dtB9zwVZtkV9VwFEhyzP57Aas8EVqua5HmZ",
  "key29": "28qvXcVe7XtjQsxYnhUMXxGMjGbnz1ZUxtqqXPjL4VavvEStTvzt2qazS9T984ScmaCaFhyrucKnko5gk1sJGJNz",
  "key30": "37Hg8AHDok36QjHkDNiTnL4ZKQtng6L1898RiEBpftFd3UcUdNEjdgiRLJLyz3g6aLrYktWdXytfxAZnVFCvDZ7W",
  "key31": "4H7BMsJ5eoybq1orBzCgKgmSuq9un5LP2hEB9kwCFYuz8pmUcWiQRtBzx9qp29ZYYLYzdiGf5apF5Mo1CYYPnCA2",
  "key32": "4DTURaTmhYdpSfbmcKLTLRqZyotVNT1wSg3JchXRCSbuSksD4kVnY7z7EMto8wn1qEDwLYTQHadBcdznb1WBbt2q",
  "key33": "3Z8zTKdgDqyLkqFEQdYBw5jSJ6ws2N22iWrf1qt2oTUr1FYnBQrbjrt4hERLXxhSJ1Ty5Ezdh27AysCxCA4HuB1D",
  "key34": "4VxK4efXoLrHTSFRkGfxocjfTKS37nYdS4nLTCDedRnqfCgc8ytpLwWVQwhLbRiowyNqoMHibz4PrLdUGq67527Q",
  "key35": "3Z2s2jxPg4FWAnkKna4bhXqiMzGEr9jvhdxGqSEpT54URpj7NGjpFGJXWMQXbJsZFTpV49EHuJP942Yz9cXS56n6",
  "key36": "LciarGnjsapRuuxVu9arTJsfeGCH9GaeHiU9trH9GX32VT2Ck6KUyzCdnkMHs5qL1ueDvXJtBfppt7D49cGBXd7",
  "key37": "63ocehSPRsPnpRF26GVGJ5U17Wo2vNLANMRGRKtYobqqtcNxinRdLW77gGUm2bbGJCKTGyCHmUHG9o3UVzBZwsDR",
  "key38": "3nj6pfE7oa8g6jyRDeU7vFSu8NyLN1dPndFzgrXTbPr47Bz8TSkJRuaJCSKMAJaqb7w9TuwknbQJqu12NJBYHtYi",
  "key39": "2xQNAR5KS9Rmk89xB4toWGtU7p9MrZUvxwVY6QcKqUS3CY8FEqujNRPktkqWQmGara9QXNdTBDNahoqpQWZDqCu1",
  "key40": "3WdgrUusTHy8DhZDYSynf7Rk4hXywDFDbpbTmo4W2RNXUy6e6aWKc2MugaMwb2rfitiykyYMhYEM95FqEwTyBGPo",
  "key41": "wFgvnuXZdMeGrH2bxd21BhPpzLjWPtzGjU4WAkQA1TbzBSwjpGhNpFWP3SvN2mtFTHPKQG3CRrgjJBjq1qEGuLK",
  "key42": "5a8KSdBY4Mej4fxmLDrbA5L977NdYozbcyDi1yz1zzMXEPUoPPC7Aaww15meaGpp9SwwuXNrvDqZonJ2r5bLb975",
  "key43": "2iFjxBPF7R9kpShfgpeHcL3n8hw34rmK5sAijJz8QwiKXv1XgcQEpQBmBhT4GbexWev3fLd4izVB8WVLWgdGo2Hv",
  "key44": "4CjUbHMgpJdvVC67GNWsGTtyanq3HsHWZWhvyZuhha7eMLfYsrNt3YsYGAFzZoVX47SFTPtkC5um2mZnKLyMh9xS",
  "key45": "4Gh7Rp1CPKDMx7xaGkhzU5QPp42KvphtK7FG5y7K2MUQHER1Z6YhBXvCNHiHzWTuo1gPiQAXYRmjZ3xjPwQ7rmkv",
  "key46": "uZah5QyzQUPVEQ4C2z4mEbPU4umuzqWy1MZ2w69mMGHGFePeKfgQ33Ndh4APjd4hTVgmTrZf7Ey8YU83WXmurz2"
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
