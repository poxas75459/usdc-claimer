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
    "3fsgTkmj1c7dvpYGQteY8M8vzVnhg6ShjVEwXz7fvkD1ck4DgTbRK2G4EtrCVGi9gCAiZbv5Bn6MMjgh7dGyXiRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzA5jjVtvpCofgZSa7hLfxZL4jLbyz6WUuiJbnWNzBVa5KtmrELCDytqPjmCwaNK2zrbBdLBYWd36YGxVdCFAut",
  "key1": "583Ysg5ricKHSRBM9sdsWddeSt9QGSajvA3abrkuDoxLhz1amcXPTyJvUiNeZt4THdhCAkWTt3RVsG9RKsq3jPL5",
  "key2": "296A76aEjaZqW1KYT5wWgNKnBKUyZmmwQVspGV6838r1gANQ8R3UDnYm8kEU9NnN8444TGLFR8TzgHjzrQ2dKDw6",
  "key3": "4TGQT69Kq9VUNdKdJnkYKmegVLuLZh3gL7G4MFivYutLWCS7NxNC4xSqACaKB3m7gDSB6vXrV7oYyiHo7wvAx9LR",
  "key4": "563vwZfBfcGrEgFSpWzN7Xdb9USLqoLog6UvTA7i1PgjFMTSP5gqL291hQmZvnGwwVvWbmafYeAWh3GcBSaH1Yyt",
  "key5": "2GjwZvqRQkrr9wb8s8eg9fbXLinovzNJ12DPnu9nZho3Bju1moMzcJJDdxF3HAurrqPq5j8fCQWfZUPFtShVAYDG",
  "key6": "En9AydtqvgMacmJ9hShefEuMRQ1JdQB5Qav2XSBKojdgPFeUe45ECLszc5oGDP3nYqA9ox2SoJpzS1EtmYPYdfV",
  "key7": "1bfzKj9L7YeoL4BQ7CnPG1RuswFsRfuuvrEMW3B87QLADsX64Ujr5DjQASwCTCfxEvsioejpCSw6tBcVJ8uWiPu",
  "key8": "4v9NAFQ2DPqDHbwosN7fxskPB2aGc7diWn95hqrXpH4BUoQ37Js9s9GJmamd9w2j4v189HgP5aTM2JuUctaMkPjJ",
  "key9": "2tFUa8dZhJ7vCiT9nAyfdYi3uVwXEu5nhjcUWYGxZ6HXihKSmj35QXRCEvHDPWsej1SxFxDJK7rexYEm8iwKsHdb",
  "key10": "8DgPn9wXBXGjcR6y86TnFoukZwfhNTHV4GYrQPBLLiPcg2ePW8NpUu5TB1UroVFZfrr9gk9SnkTjUk4Edpu3kCQ",
  "key11": "4D5qzMk96QNfUam4VAy6wM3sqLVEm72jE951TmvXzivmZLF9XpYk9dhfmPCP2EaDbTZBtgjamk8qcQZNwkWvf3rX",
  "key12": "5P5uBzWdxt4haqXV264ErXCVA6MaZCH8H3aVkfwGNPN1yjp7HLZaL87fVU31LH4V6LL2zbHY39W4cMemr36C3r4",
  "key13": "4u3n1K2bPTN8Mh1ff7BxF53ALRWUTE6e8GibH9V3w8uaHES4CDndnqAZ3RJfb5mbrFFzUCpiy1XmnB8RctEbByJt",
  "key14": "5bypQLsvNS4LCS18g523qeY3dhx3k1kA4ymFWEJMTqCSZBSwM5i689XKzY8UbcEmUyCvbQM8me8USZkAKPaLXkKe",
  "key15": "2EQpF9fBgYtW3EsdU21cskGfzAHggTcaLP1Sj5RCzZrL2JBFE6URGPhcu9MZZtsQ98kYAgd37e9N7pUFmhiXRQif",
  "key16": "3PNBq8MbkyXUJFJD7CFRGdGY7micSPCe7qNanXXeEurrdrtBeAQ48jFonpkNgDWDWTifMFsESSZVg6szhcMcH8HF",
  "key17": "4cSWBudf67dQZkwzzzdHnnZLqi9W8C1z64b4FhDbeG1qN3tNrfMpUrmfCCqk3xThT73fXczHe3gcAFgpp34CfJzy",
  "key18": "2XZbw2CpfRN7RZtTA8TkEv3KQ4RM8nXpmPEGoaaQhB564HmAWDDYG9UwNspRtW9or4BhpnuVGvFkN6GWpPYhynR4",
  "key19": "21fPS2xADaR2PYVuXPTf84tj8gcD93ZDDg9BRB2MrDKLPK5APiycfutZYRKurmxi5LG8Ubj6A1DZFsgpNfyP2M5a",
  "key20": "4oiCuDJVNKJMM5vo8NDkSkmFM1264stHmZrDfDQYPNvuiRY3ri9MC6TTzKExVvod7bLvxv5cmcBuHeQAq2JKxAPb",
  "key21": "3cChLCYxymvKUP1yaxuqnsandz9m6yaPLWUv2CC3dmQR2jQjikeEJHBggw87d8JLJ6nLT32N12E9osLML5jGwM6",
  "key22": "42o3dvnvCnG3pyxXQ9X6cxH96sBS7ozRCv6jJTEswqiWAL4eVoJEqoK4UPRcuhFiPn8qnPfjgr6d7Mv6tzDpV7Qa",
  "key23": "bP1rKeVeuDj2Ng4djo2BvknVoczecoYFMJioaoMiGHU4Srv1eY2XZerzjzMDZqgRx2HcSdw3en11qhR3ViE8gER",
  "key24": "j1oeSDL55PSpuxNS7pguVxayM1q8xU2dcZ4rZozKhnKYHktmoBcaKWinZF7vg7fG8TBqbKUCTh7ccMnDif5vjyo",
  "key25": "5PKMaoXBBkVxg1M3khf22Z2j5PTbqHPpp8texHt8cCdovLhznZ8zSHqZ9hSes4fsqPSE5T81HbMm5rEYtAaquFtx",
  "key26": "S6vJpSbVQBugpC26VfVe7uU2ZSAsqsDdTwZ1SzTEBpypBQMEGtTJxA3mcTmJTP2w2FUyRyntJaPTExmmtM4F8hY",
  "key27": "QL5xvMLHxdwSUrNMEmdMnE1JsghRKsZZo5JtPCRTAhRMYzeZyMz26TrXD2yyWM1KjYJ2Rm9Xr1KWCeGxRbSiFxG",
  "key28": "2YrWuBvaRY6zECgRE2ChrijugUQbyREdwU7a5dLNyoEifJQKuPgWrDVLS3m5FymQWfheVXs3r9WtqfjDAiAJHs93",
  "key29": "Fcd6d1MqVBP6SUhVJDQze14HfG51MuL1G8yGsy8twFqi8gYZ5oiLCYBg8TYANkGNufuKFrWsbjJL8LhVSmy8Rku",
  "key30": "57rrbMDkKgFH3hjffJ2CWD4JSdXvkZsvhAuQJWiUx34HYs4J4p8GLM3ghAqvqaXekXPk9CTc4JY9AK5SPqjerdp2",
  "key31": "5pZJYj9a8RN53TRE72MC2GYrmnLTkSPQHT2UKibwrEcaeGeh3m4Qy4rz48n4EjzRxLeYYJySQdkTnUGoJVmkt255",
  "key32": "2ZMBYH7rWPrnW5vVTdEvxvWUNX7jPD34Ab2ponzPWPSuCiVKqYU8ALgSmWrN4YtME6ABYFTqDEfSEWxhxGmd1hfr",
  "key33": "3d3ox9HHmugkgSqc5vv8oyxuLVYieZzpLVZWDQ5GZdGMHaKHfp3f8fYV3Z9kwYeE91KJnYHvNYseUZ7sTstJhuFG",
  "key34": "29KnbHk4V6spJJkVd2q8ZorZAk7fEvnu4Q8TocrhAjNEQJVt3DyjctTzpUtB463QUMreY5ssLvrzxUP11pTHksGT",
  "key35": "XKgyUKauBeaCK2mm14v9hGSFwrUKPovTtGahekNzJyEBpzGapH8Lexysojx1dYfweuRoQZUN2D48P88h5ymd7py",
  "key36": "LatL7RNUP7pP22efEb7owgTA4Lf1NAn1eJJk236Z9DWaW4HxatqWA8jGJqbqe2nbwYLBEbMjmGi2PJoTemBWCjU",
  "key37": "bpp6AYYSgpCEZq6o4yanoTpYGfxNRtPLTAhrjWQ4LHisDq1LcooTq8gYHodB76h6oYCTH3tBxTcJpG9VMR2XPKy",
  "key38": "HS2WztDxuZXVykC8VKhqPEy3GHFYhTVHZbAUR1Vf6JxyobgjCQNnBhJtfBbYNNRQAzu1L9aod89GzfopywCC1HS",
  "key39": "3urkaPC8sw539qETxFYbC6RA1KVNRWbBeMz15hT5p84ng65Hzk8zBoUTLWioom43UgruXnfGz7y8ZUE8HMwk3RUK",
  "key40": "5DRoiFNtkZQspkWS7xJ5jRfatWgQeJqETM5B3yvGfKHKaRAT9xrn9J1g4atszpLNr6EEEETcNCTBYFpaqAjT8Nqb",
  "key41": "2F66PCaLHXAChoPodwiQkm8MUBKoAWLPkvtJZaPwjGCdrhthaKfffTAjJ1NSyww4jKvodHcKJPSm5jsHbjuBE8NA",
  "key42": "56obLDC53jLCHYF4SczWGYfB8SjJTBCMxeh1oHTmR7JwYHiZkUoXBWZSBFmMSD9YC8jre916tKcwiiM8XwCFT9kA",
  "key43": "59hjHqPPwb5wVQQyov9n4dkrU9MGefbFiimYrySdfmhXwSpcAWM49vsHS11Jsmvq4N7PaxrwdH73shQm5EFNZQri",
  "key44": "4vpZf6TdfG8VudYeKusa3BPPpdN8ixJCnowW4apVgQUKtLF2HEA1P9TUirRaRX5unRh78sXdnqL5yd41WYHZYo3z",
  "key45": "4fxbbjg7aDkRFKsyTUYg3TQMxKmEhzBwPbeKLL72RhpDHNDdRieyR57sQDCGVdgYMxD29GtivH1LQQfw7Fozn5R7",
  "key46": "5AzbgFkGCc7co9C8JGH3tVky75tupXrVN4xyx7T91tUfpQeAxG9D9xDYYwQNy36a471Gf8qdTpEdM2m1cqQtC2Fz",
  "key47": "2eRkfbNu6GVVtMAryRVvfHQggHMFEXfgf9U6SvKt7GpbNmKc6ACsAE8geS5bW7R2hBNhRjQ8ZbgM8TtbT228Qd67",
  "key48": "2u9Bt8y3Em2Y2Qa1j5uJbPDYSr7gvsAnBDsqXjheSQX74BRFt3J92aQXG1KLrq5iZbP71K7vHJvy3daGLedpfMHz",
  "key49": "5DF5KnkGr7bPQ15UaSi9rNYfQJg8hDuZz8bb1mQeDCXCiVcdieMRTbXP1Qh5B53pgshwdBZcGNUpArThABn68uVa"
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
