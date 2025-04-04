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
    "4aemXD1TifGmBC3ZoaEpdDzXKV5vs6m5ZiNhj7Z6azWqHpXmGXKXLivzCqkPD6B3LJJZbkRZ3oRcqAwPTTrtSeFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qPWrsJraYWh7uK6qUvJ8v6QDffeAqU1TtSAkSA6V7tocDCBGjuf8X4uHNw7c2WbzAPVfcjgmHfYowCJcsGANDY",
  "key1": "5SaaJioPSde11MiAbRzKBtDrbF7rJYESpptLaLnQ1vSLt2XWwReNyaXofdxQJfY96oG682EHc6dYYRdVxrsCJnWk",
  "key2": "2eJowFSViUvXzzSYEJfZCgpoQwpJNKPw1LNn1zi34HvMLqPgX4drsSoMrg5VmdLUkAvKUJiAdW8moZtaE6r4omC5",
  "key3": "2Rmtk3ZPRF3TRFdrkUmiYjBogZVokprqHmynPuYjb6DP9TGoKk3MBqQ2fJ27LYtNgoxX1RmNUSdkJr224ejUFUy2",
  "key4": "3kEJz6YahPafmE1kZGndxHD6WjX5v4ugSsfYWswjmghz8m91bBqhQYRjYbvsyRmywwQiAiRpKCk1RaEGPCjEETQi",
  "key5": "2yyqowH5crq9BKmyw4cCLnjewBDV8xBt9mg8gb8Rimz2JGgTDukCQgn1oc64KR5eudsbLjuHTXMjeCFQTz86DaG",
  "key6": "36yLHnrdnpAkqCdYzHt1YwgbaSwor2YGM6B3srfr9Phyd2qyqZzLJzmnJt87xA2N12uiDDiffWTF2SRrQdgJjoQL",
  "key7": "5G6QoSNZKFBLnWwJeJk9k7RutDWFRgsMgX8hWmAQpHM7xCfW7YgEMeCMAqRxta3ppjUTxohbB7TESsTqRWUqgWQ1",
  "key8": "3GLg6QaHQ5vmH19Ey8476Z5CxUxNSN814evP1SVNsD6X3kFaqGFztQNt2SLfoF1BQRHK5ogwJ1VdNe2uVsHv2aJt",
  "key9": "4wxzfoVFc9dypsuquSBQJquMdNCDpYRqYzgTsaoBmzkSdejEn5kAWP29hVvLMPrcMDNstsGxrV4Z8WSP7imHNo4y",
  "key10": "5qPqvVv3sdcqATGLQ676SYdLM9WQpBoRfYBnbi2MzNbQe34URmGpZ3wmssrmn3qEzjCWhnVuqTMFvzqjTnaBCZWv",
  "key11": "4KPM5QjvpSsrrtfAuYF5Q3cBAmNjvfBpzHtHNsPMYumsdKWFBkwVRL7sd6Vq8eMxJuuiUQzGpZ3fpwAFPJ42nP6Y",
  "key12": "5umXipgH5snwSjr72gkwAHXcXo9kzT4fGAYyTG5BJdcmwFioXYaZ3BLs9y7L3kxBjaBcdVAiJgxjYo91CVR5HfZY",
  "key13": "5Tn448MBzzg84nbKpCDKJumQg5FbMDZHJZudMWmoe6BMzbGqFJLCqMr3dL7P4seq6ScBHB3BFMNZGqq1kWy69tAD",
  "key14": "65j3biTog4o87qmzPykpBHfeqGZJ5cNixdoeEAwiWFkqDpyZ7DP5U6kVa7cr3BwRrTb7arwVkqPxJYkDtw4qEbJS",
  "key15": "2oey33kKVqgTGZCcNkC8dj4CVFdPLCBaMbwkaGATAqXCUBnMmHR8dTjdAT2K8N2D9hebDYjQ1dEusv4gy4p62BV",
  "key16": "3LMQoJDkiJ5oaZYgEowBSgiTfDpQsMYmdaBvSJWQ2BiRSv3L6W2Tt3Cizakjdayp9wxTMo4BdTf5pPDY4q6w7fR9",
  "key17": "2ipBu37CfRkBCVuWNxJvfPkMUmHRcqPX7LAgKGwvbT99Tb2WrmaWnACuk886fFHryTZJzdzejdxV6fX1wVM99mFH",
  "key18": "vLbEBXELAt6uCRzBaF9zy67XcASzRyJZBVzPxXrKtJdh69CSpRvWc75BSwyxffcUjQF1dtEWTBGpguudt5GsuKn",
  "key19": "5E4dcL7phcMBQPF5MMkbykCa9LVvJnvRGmFKVsU1nG41mepvgqKeCFhrRvKWbEB8HmkFoi5YWLYNScybs4ur6usz",
  "key20": "2RGgKnEf8tM9xmhPDv9j8breChhGvZsmpwcZHZqHGkUeqVwsvvckHhA1WZ36iLuHDkmoN36b54LiyYCnxkHqedni",
  "key21": "qVg3tABHebNJkeqx3Go3fdJB61LkYAV6Z8GuUvQVgyMojesuTbammiSo9VCn3dkGyEKmGaGRibZk2x3K2sbFvNz",
  "key22": "5sM1CWiws7stYKsi3pJVSNn4NhXVZ1bUgs2R1yp1wvShbt9U1MuYWnhTuUHU7iNhDCqdCcV6PD5jCgiTnfiNK8EF",
  "key23": "5BAWMdaEbDdSgKBAuPWvkW981SBNpv44G8AXbb6at1257TwPqbrbCo9u71SM6ApBN4yPZXescZz9Z66HdB91bu6p",
  "key24": "3FuypBkubaQDPoBPwP42c4LCNeiMmpXxouyL6g4QcJ6s8jxT2nZ2k4eLvtuYLPPcKtCC11NYhyexiQhSFsgWetc9",
  "key25": "3deFCYpKUvxonBdp2de22StgpSuaiCGJ3VXE3ZqymurUJbrpepfP99C4XLwAwKACrEXdbQVTzkJMU2QJL7jnX9XH",
  "key26": "5v6c4CDQ3S7YHj6x3ZhYMrxLSooCdbo8mdRwrJ4BhFbL6PJYJ7Jv2bPhTvqajvVz9MkLWzBXKbxAwFwEoNmqQmeU",
  "key27": "3hqouGfUtuDjuGWd4tC6aujc7UaMSWs8S5VKNf8gy7pdgdTyUxRrv1p3ibafU91Vt6cBVyC8cNAsHypRMWnJMdLP",
  "key28": "4t1hLAGghRgHEaoGigWUG7HPJABYsHMED7f2oJUR8anthwqb8FLBJ84Donwxtq2YAXgWB7qQJjoPRmkT6kCzAZyo",
  "key29": "MqxDR2G5bRjnTh2sSEiYyk9MYpLSPnjEoRXfoF7qZdnQgY78J2RQzTCAYKYMRAk7EiuHdt99XaYH66TxNmEvpHw",
  "key30": "3URFgLkAx85aRrjBs6GwMqj4Pww4Q1qxN9SXxecLYGotrCTedHmPGTqgwps4D5Xo9miUgMnUMd8CLh2KfFUpfqGb",
  "key31": "5xFaY4g8T8wfegrjbrbouMXD4RxJAt49dzz3Eb662ce5tsaocrLun1UJa6jboiDE4rRMzxGBipNbPtoezf7F8zEU",
  "key32": "5NqVf4ZtApGr4va1q1gVahR5AfZYwf4MDxCkGvbHNFT5Hj7q9hnicjjwLNckquKhHiSs8nrHzCqMSqiiRYRroXKQ",
  "key33": "3XACRSTHo8hvFv6XvUWn8BCTekkfhp1eoEdNaNZNwAq4jZtVxs1FJaSNPMyH7yMiBb4bFXGwuaJRb6nKQMwN5PuY",
  "key34": "5Q9EEcXeY58C7xy6YAUJNsZdqid7jxJpUfv5ze9Eb3easMiqSrw2PHLBbRe8XAftFhQ9asVA2M1nv1RU5GVKHigP",
  "key35": "2LaXAm8zyvyNcn1ej72417ZongkidsqCuEgHGua2suSeEqdMeopqoThTiRkeqrKea7VukdnGXuwFg9UpNi7nzAva",
  "key36": "4sWbTmWKdJgkUzB7TvJwEGKc8oA79hJFKupwV7n6HukSKo3bmLaLq2FE9KQe58BN6mD7hKNxrTpTN1sKJquCSm7V",
  "key37": "27Zbsq2P7BBpUkWtYYanyXviiCcWi8peKzNUx6JbzHiTt673kZmHbVGEMvTsLSQ5KsrzT7RE45dewZk6nsm1bL9G",
  "key38": "4GGuoE1mWo226LTasHm2ZxcPcK2vWre7m1ytta3gQNCo7cPJ1n1pY3fHMdXQpyT17nKQUqV4eFYZTK8NzZvgWR6W",
  "key39": "zRhcCyjjFMPmUxqKteprq4bhpWbCGGnx2R83oLfi2i8mG22sqzjuhpaV6xUM1BRPuxKnckNgyAb7P9iKuQitHPz",
  "key40": "4H6gbZx1hgR82BrNGd1h1xMTNEVXe5UZu4MqP7BAYacB8guV5ecFvdzKRE2u2Arq7btHwcNqFrLcCJq7ZWYnB5vV",
  "key41": "3KKxpDfcwqvHh2GBySmHcitsb6QWi2PukFeQmTk66SGaFwtapYRWSqiN2dKYwff1kcZiM3HufCRznVLMctBBjkfJ",
  "key42": "569EVPsuTcs7KZu7rvcsrP92jC7uiVovgxQZKD2kWDvMaD1LwgtihQ9KTXJGVJD3pYqiTMhqayvYYkQKj1ZLBsTJ",
  "key43": "5WQpMyXTvZ6yo4REcVzXR1aR5pkZBTD12cJomxwdbVVa8KtoyNqjxmoqqjQS6tCH1UDDAt5rvrWgoa6HKPd9wP6k",
  "key44": "2o4cjwEbXEvvvghWwb26FbA3g8UofNpZ3cK21nhLj2Q57vuQR96oRT4QSPpF2GjG25KW7RBLRR7H82Sus2nThZCM"
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
