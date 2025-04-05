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
    "5Bd2tiizXnW4DU5rP17HfYqV4NPpc8SkjUBDsXhAPhtiYYKhKyHFnzN2ikzguFZeJripXi1waqngjNYE6qS8v1UD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qTT4EHrCAijuQBNMNm4e6QzT9rhdmAaFG9mzpRDN6yNcs4DuzSNfN4ZZBTBNCNUhDxbZaD4oxRA2NvtrqWnWice",
  "key1": "26XsB17xEpZzPwieaiTsoFQUBffgpLrSvpARcSqaVGc7i7k2gsmLrSTCsSh54f18HBaYM1K8y73YHbdkqvBYq12h",
  "key2": "3pnaUxgQqUJsjucfhJM2ZGZF1MvpBjwkNGJUfPCJtzzvSiV3aXGdsNYCnqvJGWSR8Py89NScpUdww5zfao6KqzGe",
  "key3": "4i998psecZr3EvDmvKrdMoMhcMPnYfD6H4hW56XUgCdRGgXM2noco4ifeCvmr61h9XXFyo19AdUYyHmg7ug5aamS",
  "key4": "5sJtd11oBH1rje6ZKXgkfPLZMrMRNvZCyuB3voEYPhTgxHnHuKBpVnTypoq4wqG1aCzGMYLTkFNrpjQ9yjLh9ey7",
  "key5": "5eapWah6iUTuDzQJKGFTAWnnDUwujkFzwpVydbtHnNzxJGxTGPu2wh4PvQAYFEv1mFUaQjjodsctyvXdKARTiqnf",
  "key6": "2zLrgPgMiht4WFjyvLqofnvNZoqSrScH5s18SyyrZ9RZ7izucno4GU9m6z63M7gTCHE1HhRNTStutsANaoaMaiMS",
  "key7": "3yPsRqknQP7SaYJPtCz3kYpnHJapZyCWWzZuxUP9qonpxtTda1mJf2o6n7sbwmHdoLppcHEFRCVCFxREXH9ipHSD",
  "key8": "65ZUayJ43VzD5z1EtsYtiYrFZwpxFzTmbGMfpgC71x9YCW6RthJLwh5B3r1EqEo84h9TcGrXyAGoJKQjZ9296NBw",
  "key9": "LpQWVeb1oBsDuNFDey8q77faAKcs7K4RMvA3vaDDs9a4N8JLKggEPpm5VDaEZCmRZhuc7LjdFFbDPwukPAWWP3i",
  "key10": "3fFrzUUgUz7xPyBPFGqvGw6CUs73vnQooY3Tdf8QHyJWKnJEVUMtcB49qVpKLNPaW5Etw2AEi6BWa7qqQkbNc4QX",
  "key11": "21oaxeSCbHZFWg6uFujTbwmiySGM8YQoH2kCdMJVFwEGt2Hha3eQjAWXB4aSqQghMQpGwFCFVrVYEuykAStvpEtG",
  "key12": "2g55ZzQv1R3UrhhYVaY2f9pLEPvigKcVkjBtFGX7tGs9GzQFhvok94r3Wg4F7STTLpzUPfjMas9yjb2rL647d6Dq",
  "key13": "51miTCwrSHNLewXt4r5JGWaMzt6wA25tn31hk4jFxyTx3uxQ4r9wd9cefiDTgqdvBtimFXZwKbzWp2eDXsxqjuqZ",
  "key14": "4BeKjz112wmNLENca4Z72Tr1HsKTSqEMwLKUgpZ5saNRzdAyooBnWdCzFPpS3C4MTPAoSKKvFt9T4cwHD8njCMMv",
  "key15": "eh5zT9bBvp2jXEeGA1f4wFp3w9j986qsfdQf7XaJ1SKN79rxjMEm2F7W9CuUaPEWqkZXg325rdn95zXKvCuBUqq",
  "key16": "4bPiF5FE7f2CrUMpaArdrrc1QKRJ3GzwNxtEYSZgGAF4WXLysbezox4NpuEvf2TXjqRZKSvCio7r8wL6NUTm5E7P",
  "key17": "3Hub6wVmjuNCSKW4Rd1WcMBvLDpxs9Jc784eULKgPJFqYHm7dLgUaa8S9AKjBjPKhTwfhqiAF7P1PaAWmSjHuUGm",
  "key18": "39rc6qhYTh2qwiWRURTebScsVCEc3atj2b9LKwiiLnZkF7kZGM1npVPafWLo9Mrd3BbfH8A1bh1eug8gCCi7wdwb",
  "key19": "2ck3APSTqS9JvbsVaQYqZwtPcHjyHsfrE4dNMMHCZ6F6kMHuoasQNn7SbmGpVxRPB12bjYUmdaoVTEkd4B6QcZhY",
  "key20": "3NWhD2EBhsVsYAL7bTDfcFbQeMEtybJ1VZAiadj4rQ1YTd7b85fECd7bmsyPb7yVbGGAxNtq75BmY8U4vc8toyT3",
  "key21": "dXB2r1orZq1axcNraAT5aDYEGwW7rKXRihHkYXLnC9G117Jyay386dFuSdB6hZzZiaGY9wfcVmcYcTvuuBWKMa2",
  "key22": "HgVwabeuFx7hbEnikWpz7Uy1gp2QUYvqKHpRnGv1vzSiuJsToL76M8ywzzmkXqSBgaRV2SZdSAzK9Y5bDQxVDP7",
  "key23": "65UZy2qb4Xj8KRV2qaLUxpPh6dyZezG8vixM8fJvgARM8H2TrFs4N7fMHH3MtUf7PJckyjKtFUsYETNDLeKj3dcs",
  "key24": "4j7gsurPaY54FyDPVAtcVcW7SpLzwr7Snms4Yjz3uVwjMJ4ZMmqQWEKmoNSUdmzhZpzoX4DrMrkZk4YrZhDd5xyR",
  "key25": "49925nysARsfBisVKXr2TdPztXZXJEZpaCcbYvNz7d81FXxzksJTLDtrjfnGVuesWhcZnarFFokCi3vdX7fLfm5P",
  "key26": "5gjhYCoZP63mCommfsEPE6SYxoSYEukju4wkqyKWjWhTNnASqYWezTGBoj6xExmB4wADirFKbzd33mwBjaJ1ULBS",
  "key27": "53vjJ4DRt4gGqmSWEXCCGxii1yiBY1rPXvNSJqAivZ9dxWha1LVyhbNHTWjApfDLXURVkH1qa5PRwYoZXex7g7is",
  "key28": "Fh5E5oRRpiwdUB3NHXt97crpmNhvtnhsLQoJGCcXanYxPtLWiacr9TPEwScdwjfeKagutCBeSywtRZJcp6B5neS",
  "key29": "4ZQs3MZMKp8THFAdv24jQSkZV2sfC1SveuGtJc3Ze3yEr1U89TpQwwFuGqwqWD9MPQ7LVbkSGYYqwUxzjYHnvde4",
  "key30": "h5phnkmnDyPJzZaCv5FCBq3oHwQdNeyZqwLkB5BPLhJp94kcRq36pTmKJegW5E9BBxEJwiQvoF3m7QYGqjP9UKf",
  "key31": "56GUB6tna9THdF1E6nKbHdfpSayEvYHgDMwXLoY1zaokazuGCuqoY5Lhdf9eMmDmXQKqbdUuuimL6aisE4xsSSs1",
  "key32": "HFi95V3Yp3fkNah45bkxgbswsq11JQdnJR974YBN639qt16SbLC5p1MFMysNW22RtiVuGsqJbSUVVbi137X9Tda",
  "key33": "2jnmDfNxpSFj5bGQPwLtXziWDAPL3EzLho7d3Z9x3TwckGhQ36n5oTuMikp9d1DjMJDUrzyhToF8s1PTXpnL3b6w",
  "key34": "3F2vSUdCTQnqrpYfaws1V7EgMLqgBkTA1XCDMZ8jPeNzVH6MonNXE6L4YNN74crwR97MpbQcWgeN9uRkVWpTMDmh",
  "key35": "CQ4NkqmdV8KDTW55T3m2etb2uKsMnAc3wmoyNmvHa2JGXed5adVVvLxt2fQPffA2vrTzi2Mo9zHMpYL5nPCZ3VA",
  "key36": "47B5S3g5emqQZmttXXq389Dy6QHcrqwCbBFqgh8a9ZJiKB8CXWHP6KZeiqdKiypETVQzrZxA7Z8nwF62R8ZXfKNw",
  "key37": "58rUfg4RJ8L3FkgQYSpaPvEYibRCvBzqfwgdckriNJYksPbzkBHrqhRCTE3NYRNK1sqLQZXazNuTVLCYwLXcqu1i",
  "key38": "5FKgqxe33op89EjepZGhuP988FGkaAVXvDt2ZxmWpj7q2BkmHJuHyHGsTGDePcSnzd22cCUGf5v74HY2dobafYRM",
  "key39": "2fiSMLe2RE4ng1xDTx4iFnB3SPJ9HQDs4QmNEDpjaTFfbV3ityBDESaXA36W8iQcGs6GA4THTyzkCHSWWbbqL4a7"
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
