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
    "2TcmrbZnAQdm99fhs3wdKbcDR7bZBCFkgTHGFjasNCtR2pRykaRLGN1zTF6ALRuEHzuSV3PekMBQdEjYQFRpZCC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktxqVDpKpMfYhmHBc9WvM1ZJmNV8d7crmjF7sfkLAREJEcCU7sDmZa4Eue2F35PM8WDuarfnDz5pRjughLu8D5c",
  "key1": "hYjoSzJ3HfFodFnFaB7UwULETGsyRwABE7L7XuDswydtqp98ugPJTDHm3Q7uMdu1MpCByHVEX8CHw4BzMkgrTMQ",
  "key2": "LBGRN25i4WAXMTmwN4G7E3fe4qAvmr5F6ec2VdtgadybR6HARw45Dsiugr7jMvSG9sAxrM2uMXw1NL6LDw85aFA",
  "key3": "5omFCWYzENjAqt3UEP8tqyouq4beHjFNfCfKTjgwx58Nj7bNkadUsDbxien7QAeAYoGPChrkmEnwBz2dJ9n4pqTz",
  "key4": "2rxawTi1RaYFPqcg9Sd85sXx9Sr5yBAHR6FA5dCxDFR6WMzQLC9b4fdoZdxnJnqXDEY1DLd1fstZiEsYQnk5Zi2A",
  "key5": "wKnXxV9aumH1zEFN3xp8S4g2uPF5joDwHcj5nHZX7YFMTWdThMejmjC8Eeq4dFMazh3KAoFmYhF2Ht3CaQssnVF",
  "key6": "4wKwL7r8o3x7XDmM1M6oXJy8348SmQcnUfzsCAAemSPSAeEryrF8gzzXcQFqHB2HXZ1QCLQ7JL72tsMhnbFmGgGv",
  "key7": "5Z1PhPDR11PaNvTWt55qsdPvB4touDhRYamDiqW3ffTUhFNfaGvjtEKur2MG2TKkALZTeyFpa9tp4UeBXNBxmwPE",
  "key8": "4L2Mrb8TAg1EXfSb6oWVTiUNeyLhfEsrK3hEbVcrmEFBc7kNNSMcyCqVFi6tbNd3PowxRsQ5KxpgoCX2ujUxthmk",
  "key9": "4T6kCUogmF9JD7vzvM2xFDQaPYmu2acCVX3e4UMJGTgbnFZsQuUiDwAoEHPytTsif9kTotnWknT9XgNt44j7MNwx",
  "key10": "5SduZbmFp9ZGi4KwNYMwQeJhUNJyWVy3BdSRRvB6ZBNVXwQw6dKJ6Vnw6TTzctxVvza55HG1192wEUcZLa9iK58v",
  "key11": "HkuQuHSzaBKZLuEED6MLzJuuV4rbtUtUPBzCaN1YAZpdz4w5tPNkE2bt4JcJymwgkj9dWWMX7hmhaBxXbaGf1aX",
  "key12": "4YTLafTGfCDZ2QWEoEKa6TArgBuzi3NewArtkhLESjMUrF5LWhHBDxAowE8RrGmzXmRw5o87Zzb45eFkWxTan44f",
  "key13": "2WzHwZenju5rX2WVCPFjV97D3egUkpZ7hx9xukU84zYhvAKHMxWwBV1r9AJAQTcoQvuoCyeSwuQHxdAbika5M2qS",
  "key14": "H3p2ps4QaGWUkChQYPYCRjgGVFgf9KUEfixchmZHPjLHenKhfXSaTMWbynKqFFrtc5YA5aMD9bnDw3avZBpxZjL",
  "key15": "2eak6x24t76Z9yXJazMJTBFQ64exZVBociEtDi6qe463pQoRgkE1mtaKj5jG8PoP5emdXz99CTFeBwK4zuF9cji",
  "key16": "a3Jy7WDNaMxtExoGstyMGep9Nh7btDRs9wyGxm36aRTkYqzsqYmEpYSprMZn2bGHmXBjaWF5P8ZV9cyM77Nd44p",
  "key17": "3f214C5TQWj5L7Mnx7EimifrrGRCqLe5pzZwFNzBDhwUySMiSieFvJoozE8TV5Uvbc36KhxKkQPb3HSKGFsaQCLt",
  "key18": "5CtMDpCD4uFcpcbwDRBf2o3HDyKUV7xNkgjhNKQN6r1kLCspFujZZzaFYJKtRV6GG3miGNfMWwx6vv8nDcov1min",
  "key19": "43HB7geabuSJse75iuUvUra9xna6Hm1CEBmG9Bbj8uMgE7F3veEHPauHhMKuugDDTVT3mj4UMQhKtj24iMxcyzc8",
  "key20": "8Jxjw1ao85nnbLszqHphkFY7oM3Nhp1z3kJ1ziqrx551xSt5hFJ3pPj95K6jz72vXuJjSyJkxF5D3ntCaEN9Uog",
  "key21": "4wUe4waLAiZS8NR3aWotPk8fCRUGqnLhRBTtdg8ZgKV1zTDXMuKPrkcRs2c1Pkd8Hq466F1bP3yETo8suXpJzv7H",
  "key22": "3oBbMCPW4V17ymiVJSauhBo5syqSX6SZJdBCwBjkTixKi4QKwBCkUw2xBi1gexZ7BXxSSYPivM1AfXntN8SjDGXZ",
  "key23": "5Lh3Cr1VvaU3nqGHuvfL5rPNthfEMgX6Pud8Aqxb3oJnvwDurbJ6aV5yBt9RE4uSz2ozrPMhcHWDktTvVZBzMEKV",
  "key24": "2kEX5ibCtMgcPUanGEBbKGh3eoNvjuzFEgmFvvTGvhUAGunhe4qKSG5KVRsQdatnf9CZcMwfJVD9MczGAE8KSJkH",
  "key25": "28rd7nVNshg7ZXaRTBE7XVct3ynEaMcrAQcVYGjCivK493iHJjswJZxPp4MJcfbZMGXkHGUVBfH8jibMrnTFrvf8",
  "key26": "3sk9arbgQ4ANAqaz9GDpXWnDhxm6uHTjPxcteGEG9pSXtPHXXm23MhYdRRcbuCtqpRZ75hhynRE4rQLaJeMUYSep",
  "key27": "37SoMBqtrw23Lbe1Ldfm2M9Wd3H5pAaCixZ6q3XjAtbzDwtNFdWDoJXhxXUik1HrVgRCwFkJKiud9HBevFxUQynr",
  "key28": "31aYKphvKtrbwTjpJS6h7xLa7buUEiJmyqcsxVcvLmJ4WYfFURdeuVnzkZW5XsZxsoT8jXAFeMaS2F9rYTYBhWwo",
  "key29": "2CAhTzg5wAbW8ftHtCVDKtvYYzUrS7EnZBXhp7Vxcr8X2rbThJdSrmAwUa5ZBbQ8KnKxaUWHduPAED7sDDgge9or",
  "key30": "9SvbU2AP3nWjj3qvxvNvg4ahAEwFX3t46YNESCEmYTNE6dHJvrvt25mRinhqYgidATa2wiboKEcM2cwkHhqg3Wb",
  "key31": "5ZdkGzzSu4Bi3iX9P87AmdSCBQDZKjb2rK1jZfC48YY8nYnicRNNDX3XDCbEQW5FvGHEE7Q6Pp938iR6eErpN5d",
  "key32": "3z8P3rW6BhNm4sX71G4tbiZ7S5oNUHjRYk7MSVWybufybJKEbKLVsmcFfrSoqYHtzvjwaVnpuG7jnX2wG9JzWeNf",
  "key33": "3sbjA6s5R8gpEnyRPDYcrNqaxDBA4SsJfPD2MkYoofT1xC6F9pd8ZbhiNL8x35Dg9rRgwEaJXAdZpt92Bz1LFQ5X",
  "key34": "2psxDUQkUwAoM4x5b7VpPzGjvUMUHFqXwk2Zhw2Bz4SGrvo14dHb7ZQ3NgMaU2xKxc53tDp9sHwymz7QbmeGNVKb",
  "key35": "4Hihjpg7eMXGHedUBheD2JWkUsMvN8CsyTckejtTyNC8WKrMqxYrLWB5u8aPLsiFFF7ci74bvJrfeMd1ACaQFqKk",
  "key36": "3DePFjc8UcrQxFARUep6cjQudszwUWKZn5vg7bmhDu25jSBFYahAZ9FzYQ4xjGw9UWBFpKA8Ji7DoCsG7jU3PGBJ",
  "key37": "4Fg8Zh1GqGG4eQQHMHyumPY9AHR9xCyi9CGi32KefMHpstpXiGX5L4WqaCUigbf1kMsa2oGmPRxxRVYw85KeZkVm",
  "key38": "4KosvJnpkTFpA9NTuoiYid6vpYv6QGTgjigDGXHBzUJ4Q5T6HifKAT6gcbSeJfcpEz1mbnrBfKLAL7L9CaXEwbZV",
  "key39": "3BGgzv1s2ED3wAvm5kFVWGWWreYyv7uuYExGy3hTQ22YHxZVqq5LNqvwHrnqgQdBzP6u3T7yTBdvi3j6UwC9mC1V",
  "key40": "n8cn3guahSxqx6XJkfG1kTCSU9ixi4D2nMkHwmFPuYQmDws847Vwa2acpD3hCAvbbWxa4dD5XrMCz8EgVnzq6yh",
  "key41": "5JYd83VDLyTFWoKcSf6PSoA3gmx8xuqrF9dUZYoQQN4eRmuN6VUcMNVSDqBR87Qp8eQVKD4bbRvjKSH7ZUKe829o",
  "key42": "5eMaYWeRd6AVxaDut5R8ECVyb39mndPyGrmxq8JdWZ7qkxDJ8Pxgqxkv5qGWLzsbzh8JsEUUkcZ5o5dVM3yhGzj5",
  "key43": "3gtjy5cEhxwsZ2Lvopk2HEBHtPFwHSk2kWQg5g2VqJ2h4uFa5AKC1hhNvWACP3MoUSZQA1RBCRpKsmBpz9iEMALX",
  "key44": "2vNQBZU8sfkqSEXhfZHAJKvpqPoCZB3p6rCbi2K5bi3MbQC8Xxc8j2JsEDfpbaYzxwc6tsjbGLDojgo3sAy9ZpsX",
  "key45": "ZQ1znf2dBDDdmU4U3nqDxB5qi4DGqcbKeTcRS5khpJ7Ui5RdKJ3maY7MrxKNA4GbcSoEGUGaTNK3zXfV7n2TMJs"
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
