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
    "2AyzcmxkDJaL3MtzxcW7fkJ89LcdBESL82FYjDVYdcWVyAuDjBT8yEiEZNnwemT7i922A19NEom66QUvBnzHj6VD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QgA3udfaNTRhQEujPac2kXLZbJt8HZGFPLeTzjjS33Wqm57tr1okjCZCzBGDZLCaWU6rF2T2GNkStf6DC4qGVBt",
  "key1": "22CoFwRRDV6KxkgXiMdxNwgbseUQJhT2owS4HrFKCo7dXa6h6Z5zCCM2Ss6qCMG7nRWT1K2TKGoPzDYKyBFzFnXG",
  "key2": "4D9CpsJRKqx41Adw97ewUvwLHhWdGyV4LgkxAzkZjDXxSHss97NFp1fbBSKJbUiPFQeCfdMzvpST6cDjvSSSS87Q",
  "key3": "31R5PMmHZv7zXrb3tDqZKjex7KQw6hnRWsQUMQVhMvqkgVQuxbou1iNz9b7r1Uiayc9QwASkFVNFraAGjad8wmi8",
  "key4": "4GbLXkunqptyiENTTRS8FzGnfbVv4vNygxpqwTPYiPBzNZZT4GPMAL1xm6hsToeE72q7JYbyssbGkHNhf1tg9teX",
  "key5": "2jpQ2TQdRhSb58rFWcLg1EBs4wj6WQv8i1xYqkByQ82wx1gSNYhzUWhuEC4Gh8tDk5FqYJ5NqAWgmJDodiFCXJqb",
  "key6": "3iStAdywRkaHVVpZUGUjhg71x71CBmjwWfHCiTSkfitppbXMWDoXacmigt34D6tkMRK3aMvpL9azrW4PbFYjtGHi",
  "key7": "46fJNAu4roVie2BwPpmHQPHpfhbE1yyihDKCBnv79RxnuKD7adLXVdjJLevzTwib24KPuKpQVD1vgkkq4iHvXfsk",
  "key8": "38gd1DPNaY9ZSENhNMymuG89dAquZVFfcaoqfSzaZQfErCApSRSFconsMmdUWMSQDAisQpXqaY68zySEqb1rJYWj",
  "key9": "32jUo81JDFsroP5v6x6vXRPRA53s6nJDFA6oqmdEAMns8HVmVpfzw2C6m143GMcYL58T4RV63RbBcNCA82B7iJkR",
  "key10": "4DB88g6ZRz8oRh2cmKeNR2suKd4gJXuhK2fAeUNfFNBZngc8y14f57b6YkiHXfeJgHpj1zkVGHteGknJKLBuLFG",
  "key11": "3ozr7y6P1dEjvPHtovpsSu1NiiWMkLU4D5GiM4sdSz2GpUf6yt79sfQ86a1dA2ZgjRuA9YD2AGgzwHbpR5pZs8xM",
  "key12": "4cNTpFSEFKh9AkH9Xrxh17JKYxLFPXs1CMnAsJttwoLyTJtsRpSDS7uzZTMg1fR5bjnrrisDnj8eX8NCPWmYYGny",
  "key13": "4ncDFEMMPSybHXS6HvckncaR3kEwRDYMnj8nZ9Un4kt7JzSsYBUwP5KYvTfuwXzUUdfdtVZnqzKGbA2Jbx7c7hLm",
  "key14": "2YxwtZh3Pnj8FV9zMpAfdjM18zXEDiBEYKW3zXVL5wiJAwS2Gpm9pcJRTEbagmjtPiTfn8Jy66nfPvaU8FedhkWK",
  "key15": "4gvEQDUuS6fN32ao3smKFjHXHkU8v4CxtJTR3uG3PA786v2r8rNE94ckJQRprPg9Ef4mjKaAnMqPDRLCQK8ECo1r",
  "key16": "5rtwRzbVGsHU97tEAvJgghtbWcSEHk63ms9fAwdyEaGXhyqzhmWFKFPe3g1R92z9N7D287eVAjnGzyHusjBiJDTC",
  "key17": "51DPBr46RULdTAjtiY19WaC4uzGHF1hsiQ4HxLHZ9WLdQWCRMSaJpRWN1138QK9BHVAAVG2CkeUiYVQDVjvhoJaP",
  "key18": "ZX9jT4WN1a9sLmAacd1TBC696hmeCeUngW4bwcg8bCZyoNcjQknYXFff5FiPTQfHWbcy5RXCaj5bEs1aVGLz5Gp",
  "key19": "2u98NcyzTR13yL5ifpc9wFzRWX7BAdZsUuhyDb7CFNv5v9VJcgdCzUGiaj8UGGske1eket4ChELnMzriaxBsAzdj",
  "key20": "5HXRL8v5dqDSyd7KeUjZFg99RNet45gkxYGWynCB4JkJXsPXZxSxrMKaT7jGj46zSJKQst7D1XKBzzCYA19uN8TC",
  "key21": "3bJm19qtegyPoLdtwS57jQEDxurS1a42vNoU5vTdNJ45iUq85pRX8B9XTJqWwaWewNT398vxwBh2fpyQgALdhrw1",
  "key22": "xhv7LrUPdSNo9VNeS66sGXAJLxd6iLLd6rqXuoYeN6FfY7aS1ZYtTqpwoCQiHKg5PZvEh7JNo8NYWa14FRsVGL7",
  "key23": "4dJg2ZGtQiwJviKWSCTrmvnXGXRwbN6JYA6aBnzuHQKw2Tw7Xunb4qKzwvRznUcgRRajmrj4kv9zWwCZHZ2EmqZR",
  "key24": "3aZeVo8FYPN1GDzaCDBZV3p56EBgjYyKa364dWsEpno4pLhsFizkkVq4qPM53JibrhNqS9WzZ1mSNzderGq9tMzV",
  "key25": "544yfG8f1FWYAkp4HyURMphk8NCxkXBFjnRoDJSejVwpNrpPcf7Tnj5tx6H8GSbc4iS4gxLLQrexBtTQHWRmqmcF",
  "key26": "2Dz7dUtWV1enUBH9mq7v5Q9586gpvw1mzpoujRgcSe14RNMGUnXhJeHFQ2aDxCw3ZYvaMmPfBBCzrGuiXapjc2cY",
  "key27": "5ccVmdrBCoj7kBgVhiRzxD8LH3CMhBVkPomMVvEhGyS9YJcFCacJQqrpsydPpuSt9FTyY5xWaTt7BN9W1HvaK4Jk",
  "key28": "3pu1jZGiLvZk9sGin8t97pkWvhAhJzHe5Dpo7ddnLJtP1JGNPmNpyLgZfVULMUkJ5KV2dXPZDyawiD1Pe7dz2e4V",
  "key29": "2FLTaoTs4P9Wvm6fKijxpCfYTQDMTPi3GwmwaRP6JVRnRgDzBT2KP1VvvkcGmUjT97UQqG3XpnGtZg2mNqDpY5KM",
  "key30": "3yfkuqJdTbh6TYdeC6rxav1tL8uSrStC7d5nNerHi7J8eHAdPYDkSCZLVE6fmBwEYUvWdmYgZF6Z8iQjLvyWiNTQ",
  "key31": "2ZGswWo6DqTaVNBggM5zRX67ssSUgnv9CsGqwvcVXW39JiMwcEHVfhevtFDJGukkGHozvjHhUBZSQ65npBJFx6Ux",
  "key32": "4pZQ4NhsEGqFtxx7fgzzLfhfHpsxuS2ZU3JK7D4d99CzYE5UjZZf2kGmDLNAhuTTRHUYWNYm7qT3YSDwjKy8orax",
  "key33": "43BLfRS3hQodZdbRwwFK9kKBZYG3hxdNxLNn9NiBtGCZMjVcSeUK486ydat3GTSvGTkMADBwxiEeWTAodva29Smc",
  "key34": "SD6tcgjefUreAXWmrgyVBYGZHheh9d2Dcw5iUKsH3acmXBiMk7dZLudjWkgdhEBmDKMBLtLngYiSs7K16RtAtPR",
  "key35": "5wBm3uTJCs7EquvFHR3X8oEX2SwDyVFL5kTghCWPDvYG7Q4k3axeAs5Deh2Q9sVdVtgdu8fiFdGonLiyZyF1X9gf",
  "key36": "42gXZ2v3HNVa3tw49XVe5ESPhL9M7ZKjhqB7NrsWHv4AwpQnqq5NUBjozBM3x8W4fVv2RGDxbqheVpZcTSaJpgaC",
  "key37": "3NL3zQ5sbWRKtrFCpHhmMU7U6W6Xdg9zMjHYK2g64G2UnEJ2pvcikQaY6facYyA7JGontCJjgVbArb7N2MTgBgJG",
  "key38": "3Qxku3KBJv1DFo7GmHRVxSRfaCHxo8e3Hv3257xLF4U2PccwiFUzAxmhUq5Knw4fuoycENBbjuPrEz5iAuXJDFYL"
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
