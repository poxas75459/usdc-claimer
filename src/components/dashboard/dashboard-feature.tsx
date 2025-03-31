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
    "6jnnBmCsP6TffgadcXpq2zQksZ8TsDidSDQxJctaeoaBzgyqXZLJPTSVB2ssFmQCd6jHSYJurrfcLX4rP22tXAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNySR7JnufYaYx3xg8KxpJUnGMTo1QZjdVu4tR72vRfg6XuhFAcmwCMSkZwgVdhEvvcfHu4oKfibj5T78ffYjnB",
  "key1": "5CmzL2YpLzoYXqEkRH2gzrJFuZ1SNnmb5ZdxUvVWmZbgpkMwgbVShi1x6ft9HHxBWUJ54YkhBDdLAbSJmsFEZq3Z",
  "key2": "3zXTwY3zUt9RB5oVaLVPTEqC68jS2GC5QbEbydX9H3DC3zLgHLA5jByhmdQf9p4oRMndxMsJbJCtX4m5FecybVg6",
  "key3": "2x3SxWKTaSTi1kzSavzH3R1zNQM2gAP2tX8XFZBFTJTb4cd2o19vp9mux8UpUupd5fEW13Q1Rvfzt9gETtXotSe3",
  "key4": "qeNfWa6999djx6phJtmrtYkrM7uhpEqTJhNSiAXQvRbehTXKjYkdTprgfEHcmFuxnVQEcZsNCWP381PZ3wHsSBp",
  "key5": "4fSVE5SVF9Jq8egNmYqSHuZYqDZkRYpPpwtDDsXTACPLgWEu7w8Li4sxEUNaxa2FneSuxc1dfEVvrXXEGU9qDGmx",
  "key6": "iWLJEDKka6NZ9iXuG3z9a8pL1Dn3oHHtASPPkGTNkUAqLGXMWNXN7EqW7eQLs8tz7tXsLLVmaZVqWsXVPjzaWH3",
  "key7": "48edpVpQ4tzyrTaNSf3TVLp451GXHE7ZyDNW5TSZNTuH5hW5QFTkA4GfwfzS1mknXSgAD4vNEV7SmqtfxF9uuHYK",
  "key8": "5sNGPWFdEXQsCY5Dekxcd4REJnSNGEp33qbG88hGewY1jVGifF3bGfPL98diJAwLvUeMvf9HFkUVeTftwQqButJM",
  "key9": "3ERCZr6ZmnSgLHbpfiqmtVy1FV8Z59q4tPpyxTTJjMG4ekQYnvcNhqQPt6PmSFo1fijkzWCe2fYr5GoQJhgvXnGp",
  "key10": "5VaUM1gQRAXwAUxusF8AuJVzyaTsPAfXUAkT7CsrmjC6zayEtYZzxw3k2ywArZLrEQtDrz9Mj9xpYL3zuJHPukV7",
  "key11": "41evDY2VkzbMAfJ8mcijtD5N69q9u5psLnHz7FJ98jAvUK3h46aTY1WBX2wdozR5iDMFnfiGb9CgwbuC4bTfdvV3",
  "key12": "2Y3zB67rikDedzFP1YjcvyhJ1b18Um3nj59g5tZs89HjBtFqfrtHKDT2Ag1xKhW4f5Km6kxQMQEXFXsZSXKkxYiP",
  "key13": "24CB4JhoJHeSyvb8LiDt8AvbU2dsFmiw4Ug6zMRhdUcgHhvZtPbSvEuXS1FvbXqDvfzb7ccgEHcMw7h6HHGTah6K",
  "key14": "3B7X7EQrkSU9Sw3AJNkBCq8KpQBcTSAVC7T1ReNhPY4iF7WUV2Rw8CHUPoTDjrXZ1PsiUrXQT3JzYRwrAL2jhZoG",
  "key15": "5poD9isi7VJ6xGyzSacecR96ERM7Uq7erbagS5YtLoYP4xtvVr3ywckVyc9a3wamWV4TQd1QdjHywu1gBpUr1qBo",
  "key16": "48nx3nL1psNZJH3gfhPwUDa27pySA6351QoR9XFvh2f8AnnmHoni7R4jQBHtTeSM366yT321Fg6agwhKP2h5E5eL",
  "key17": "Fo68c6GyC1HKuxHiKd7aeMHaGdmn3ZV7DZNtyhtxE5asoKSj4krEksRaZPU6UynvTiW2yqGyJUgSKe6ixYU8cPJ",
  "key18": "V5sdV2gLRcujiwMnfwyfzWDPsoDQkwTdT9u1t763QNj1tR6AJraLRFTs7UaMneb7KKfMdEZRn3rzaRfv4vSPEiY",
  "key19": "3HNoYwgRHxD6ekcr7SwtFgJWhf8G5pwyhWmXPtjF5oQXqKGfr7ZQbXUzRUPPPhdFcW4oUFaQ1qSM448MUThKFTN5",
  "key20": "5qk6tCMhukTeYLhwyFsTiL7aXACKq5Mp3cneMkmXAuSJvcxoaXkusfrgyhdrytqcntmaMaNBh9A9nkK61zDZvoSr",
  "key21": "3iwSirT12JZzrh7XA6kcETdSBErKjq2o6CcKwe26b5QxcwFSXgsWwu2E4bo2EF7nZTmP5H29ffPxwnvAPoMw48VT",
  "key22": "62MkjWphkZA5j86L5jqkiv9puTZ7trx1YnQEQJMSS4g5pLhHhYVWQRbNtyJf366iF47x64tuzXVEqC3g6JRTdiRU",
  "key23": "3hYqwmC4UUdSwZJfCshsDaa7kWvDJveNHMetJ2ar9ANCfLFbNMP5AN8smMz6yBxBdYD2deKuRXEZkipiBdtErxBK",
  "key24": "2fDKvZbB5GHtrjEH7PY6UmKvt87CAk6yKFuzA3yhTHQWMbcPsPSAxVndXKzjp3ybtdMJoSbmMyNfSCtnUz2tcHkN",
  "key25": "gbcQccEFHubUspKa7pYKdjiJTqZuAFJeexdisTS89N8BMP7BJVoKdpK9iB2LfE3syAN38U6Kbch3X2RUEbKLSt5",
  "key26": "BYUdhVxLcQuswMEWTVsUubcSNmBVLdmv4Y8jfPKBG5KvuzJTDdLAux6NmrWzWbbiF7Rkd4g7YCavpSYgicghpF1",
  "key27": "293JfhF4thcea9LznjAcUt3xSJqsWKtf8VFFBpd19hY48QxNTpmX6se2QDcwJDGzcTe3J2Pso8i7m7CEoLAsXxx6",
  "key28": "2ELNNXJQafLBYLUoE631F4KGU25bFtTj25Xmuag6r345C87Y9Qt1V864PPFieAj2S6wnhM8zv6o713E1KhAJEZFT",
  "key29": "5ju7DVdthmdpM7xB3BLc6oLT3WFAbK7dAbzqAEYmrvT9KMNkjoskeQbz31qnThLE6XWBxm6XE2hB5YJ8WnmUq2c9",
  "key30": "rm9SbkGt34U5CgKpJpkmAsTnXfP3SvnuJhv7TS5FWbhoH1MJ7TjyeRkQwatTQBB45Jt8SiMEzfoJUPgNCN5G4oq",
  "key31": "2GwYGhR7KHJofLkBN2hYUAJXbgz2VgJv6n2srgCKidEE1prbXWj9GzWFGfGXDWAuudpbXGovk1R7oEqeEisC5GTM",
  "key32": "2M7B2fKwhuLaXUuRCutbL83WYYMtd1naxPsJ8dLyJwUmdoycM3uyAMY2accrQYGuyuJmZGsSKxx59p2nFKnpFgxA",
  "key33": "2FwiSvGEHy1PevfaFACdB2RDXpBHmDJTjurj5Pn3np4EnSXunjvwjjjMgJDTJKNLPucncvj8HTNUxgmZLo9PeSUg"
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
