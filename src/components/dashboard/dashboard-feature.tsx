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
    "hjAoqFCngUTYsVxsiJSoxr82cXoHtw8avttqfWBwsBZrfixawRMK3fW9w4JjiPgqjmbCjhXGXzcWma8azyqCDUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZ4nW6oTtQvoP2NEct4S6FGdgZpGj2bHf4VQrPiduidah4ApFcUowtiYFWjLU9rAYeBJ6SPRNxMsXxFTVVPPRir",
  "key1": "2dDErV32ZnzepJk71fdpWUNhPNk8YUfgeQzAgTfqZA6Fzjq88Qbcxdycxdv4TuUG7cDuUPcTLDCGVFx9hxgCXEaQ",
  "key2": "4exUQXpQ6mCPwMXVTNBDMr4oFzbmURoCuugMsu4BcvHtkUb37fc3Py7XBHygKgQ9ELSmM8tWZdVNUszZevnDfsVe",
  "key3": "qXFXLWKovEbSihTuJm9s9n6zKZ5hGvKC7BapqXsDWyJJAqDxzigbK2pzBmieBB9utzF1Kr8zz5m8oLw77VnCAC4",
  "key4": "devGSdyQWCtzmPRPbNLMRGyfrMgxAg34MpyX5hC8zNiP1xxmVPjmFQd4ftupXgWdJF3dkFxLew32KouUxovEqd9",
  "key5": "SxtXZvJFDck8GhVWoEMfUS1p49RSbFJFZVw2iLqxyhA29EEZha7mB9urXADBsEhWf7DcWty65xk7GE7G67aEJ8j",
  "key6": "25R6ZBQhQPR9mUvhry8f6iTHaLrH1z6VC2QW9Fcvndo71vp1wVRzw9rbG4RfSSFVB1yNT3RphXaJbMJ52my3wGJL",
  "key7": "5o19kcHHn3mWenYfkmLCZnVjzGTkmxLYHJXNT5Vphdun1aQC77Aj9UiX62HeYdturiQLahw8NFiC4WdBB2PmYvXP",
  "key8": "Na4xyLRePGCjkWEJLH7BfuewrdMN7idi8S7MrpqqxsGaBYcKk7DmCKPjbV6gVpsFD4w4Ke3BNXkZJL6kErUMxsM",
  "key9": "2oq9mWborD2WSXF7tcewyGiJiwvNWwEUpBdzrJBp82n9YEKagubwgC2mmkX8x6PU2txEQTWbYpFqovgW8Yza3ZWy",
  "key10": "4FLqJah5S96vHu4ucWjiA89Y2DD2DCQEsvn9u5YiaYxM3FqwiC1upduwTSnDmEdh1aijhEs3PnhtfuMYKpNoSQCs",
  "key11": "3kNJypZ9iScQaLmTZAgadH5ftnX4JWWQBL7worN4iJAeUyZXn9ecdkWXFvdmgw4yTJmeuvtZfJ88LuYAsqKtRapT",
  "key12": "5JYeZCqQbziAvomj64pUvSwh1Wi61YCjmXo6oraESCSJk8iiPee8DuhJ673hankLzKz8AdqGP8wgUcmJa4yYh7da",
  "key13": "4uNGdmp73iyxFoQdHixZcEu9F73S72yc9fBbyeYynaGAderKXmNSudQCfCpsHByAq7wZBHp1JwEs1HM6HGscbGXg",
  "key14": "4tehkbNcZhXrQ7zvpoA9gneBrqCs8wVxF8aZVFnpwYvv3NBgmPa3uL59juurCdMck2pWqKM4iFq9bJ1nKipm1Xg9",
  "key15": "2teAX2eBvjqyjiK9XHsTbZ572UfoWfUo1XGpSJrfwwjzoRmocAPyi9JoiRSYHRf8jwjzW5umDLAbFDdwMdtGFKii",
  "key16": "5M8VyievjHy6JGGJVWuu5msgVxTd2JKuz4hc7fVEpY1fPhRb5XoZEDXqgZfMUtLPWSGe7khanb618tZ1aGHXTioR",
  "key17": "5wTHmNMLrYnaxhTJY4xtSm31xzUX39qwA4NFNpKrGNk5rREaJrj2WXGwe2BSpwS3eESQKoy45yw5bJWLm2LXuNXU",
  "key18": "3scMEoCRqdVvXq2MwRd991ELQEh7m2WqoCcKyd5ba9KScSHDkKP1HsTZYaKEaR5Abx4n4319DuFXzx4ZbseRWMc2",
  "key19": "4G2xMwmSXTEASoVomMUUydnLrsees8U8MX6d4r8rZMQiqfMKPvuCueqiiP3Txbt6QLZteUpppB3je8wk3x7oMMqr",
  "key20": "43rKKTSeo95yAsCyuTnKzTBDEst9ebXS5E3MV6tHHmzKSZss1KmqRQjkwvoL9oWmM5WChurtkKPpv1yW4cWifHuK",
  "key21": "53kvK2U6U2B9381CgakaU5NdgbJttqNFVX1rBdHTWJvVoKhWD52Rwqe17Y5rkeJMKhUgrL9GVK6MiUG1CDTGWUAc",
  "key22": "4ZBsXR7FnF1Xd78dUU1boo6gHY6Ln17DnNTzszebKLtBLzm9nNWGFNXYGYQkdwFAku1H9EbiopQCvEjakLo5SPML",
  "key23": "2PeDVDB5wvk3VdK4qZfWFPYxJckchQMZugViown8VPKBcXZe7dw9JMqeG1ejtY9QMgrh5N1vzeeRD86JXSmFSq6P",
  "key24": "2Yh5PNxrUmX5MfVuoehevMkhdpy2UoKJb5pKntey8bVhazU1dPBUrAKVN2tz8AyXBTJ6WSAFNtzXWAoXnuDy35pG",
  "key25": "2mdMEr5awfYH9JQkdv43h6jLgN3URjZGtVYnkuNZoK9T62vD1s3UMQYJepE1jbqrFjGDBv7nSn9FEKvZYPYFQ2EZ",
  "key26": "2nue8rxhQkm29W2RoWHYCppQgQJGieep5zvDB5xf7RVCAWXPupFkeXkXGkch5Jgqp9RdnTyMjPm3A6y9mmCHcCik",
  "key27": "5p8SsX1Qraz1VUPSQdaecGCnMFdBGhXoV6j6ykcUJfqu7sBrZUQmBtQBPwz7LR7azxHAmoDvDQgXLzf8UH9Cws5q",
  "key28": "3ceAtoDnpa8cVaGoYU4Zn7qKF75ii59SwJCrkmc7NwjEkkjV6YkcfXN5UMih6kZaso1U5Qb84WSD4wQrbqnGhBH4",
  "key29": "45oScpsBduaNbzrsY8wEAvtSyTkiNRP5JfkG6rshfsFvkVdaQJF6dXzWog4ZAEA6TcPwuVq9AfyfYchDpkNCaoWK",
  "key30": "57Nqo6FdQs5dUBRXmNts18PoupZPj6pawj76R3Ui2uZWjd6LgS9JGattFTC4ur8DXNt4VjmYEF5kremJkY3kWViD",
  "key31": "PS5Njch9NAW66ky6nUL4EzHuAHiYrJbSFD5RHAvtUAK4BTYzzVCXiZh6p7ed9VYsXWGQ2YWkscWyN3XfZVrNENS",
  "key32": "28DyApXU32DkBtvkPhiqAAk8AeNDZkj5nwjHSfm52eKXjmMNNAomaWqJVszgbTtsTUk2RTjFBAx5GDeBtHHbPtkz",
  "key33": "512nqy6yfwMaAU7VsPbs7TcvDihaucMhLmXDNRvSGrXN7wNGZVgkMCiWFFpCkah5dacKtdxmqd4TwPGf4fxfwots",
  "key34": "21pBeXqv72vZ1K7SnuFoe9NeneTqzzfMLfmh31JYt8MRpX2JfS2rBV8Vezxi2dFi52X5AYxdusQmn4NafvugM3iT",
  "key35": "4LfMtju2uEyBZoyyAL7idz21rj5afwFK6eeH8m3vF3CPLLxZskNaQ51cPNzMmc9NxqNRRFfeYq3H4rawryfGmgZD",
  "key36": "uSXNj9PTLY6GCJ6ozFUgcwwmHMnRaBusAzShBB2nLPirft8jDKiRJ6mN4wUipAenx5G97gTCMg96JJDdeL2RkAv",
  "key37": "4wFqCMYTYevM8qk4irVpkfzubFYPJ2hWW3iErUrGY1iq9LqroQy6bh8hjz3bY7ivUgdbT4VFDsNU9JGQon1SU1tc",
  "key38": "5u8prrPCWsPct17X4Zee2ekHwcNGKL9qvs76mDv6XfaVEbd5h5ozdza5s3T6Vidk83iRN6AJJbCjeQVUD6ka5E7f",
  "key39": "3pkbMXZjHNfFFisgbkQ8n9cMKo6GQ9uybdV3AdXCdyrwuMyYRiw7nHMUQwDyMBGeZAtANmGJQWS1d6UtfwnKoDPu",
  "key40": "5YCsmqLToGHwV5exjNWzvKv612vUfQLzkeLsXce6jfJHeqq5ZcoCd3Gi2p3bZd22hegsynepfqMbSatbzRMGg6zb",
  "key41": "53E93GmSzJBAoGwhdD9vTUtkrfL8akSGaFTFP7bCSLWUmhimuttwaAQkSxTmWMHHvTxZEVKA8PwCb8CJi99vVDQa",
  "key42": "3mTaiTFhjFtC9tEk9Key9xBWMqbKdxBze26DrzovpcMfgyMSnSep3mpUYpacjE1FrVBiMGhdL6U7RL5fV99cfuc",
  "key43": "58Ni2WfQzKTAkDBNnDDWrUyjkgnFdyWMPggJG1K4k85MePctsmirLDcfyrHWo2pERtTjX2VYBvm4RpgicrsPDG2A",
  "key44": "45f2zcUcKFZd9vUCBLNFPyXA3mFa8HxoSRL4FRuT1oHHdVDNPEMe9SCozEYJa7bRbrUe6edLiqkcxmmP7QskhY65",
  "key45": "4eGjuecSPNhptdFxRG9TUwbA61VyaHwHmR9o1H4QQ6JzjtCDy9VV4pKW5gwFrQ2ZRd5r3DSLLNZswDZbwWUcyH9K",
  "key46": "2bamPDBBLQMK6AxfBtV693Eg4yHFPKTVrKeaWpRRbe31qQUftNHEe72ST356TGdNy8Mw9FmSxHfV1dgECWHfZ8Ex",
  "key47": "fueeeGjVFvoY91TiVFFZbnVVA355Z3iL55NwS32kvQg6MQ3VFQ8BbbefMHgBvfTm8k93FuyT4u6fo2n1Soy2J9e",
  "key48": "3q6zndVtojbdYbUuwQhFcuchTs5X7ojRAB3NGBneSVKFHWBYLKaB9KRy51fCypTqw6NxXtVCEhaYJppxAAuHTmpe"
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
