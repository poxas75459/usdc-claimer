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
    "jEyU6xE3XcGCrXLgXQnmhxv2JDUFY96ECMU8ycKqTMeBreFc2tfDp8e4iPHb7UVeXUoCJfDnihE3QYB79EFspET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itLuzBEU7tSaaB4xyGt7d1F9dN86z6b47RbUaFK8JTxaGdT3zEW23r4Ru2u5yAFS2m4XwudWjp3acEFKhoDqSPg",
  "key1": "vxLaM6k5a8UfEnfi18Xtym3xm8FKNHKrCSZMDL6afDK8TTMfD5jwXsqvnh54FAvB8DCDkQzjgqVrhkeNPFtJYvc",
  "key2": "2BNgVF9AUmmWuKYqx1dvA5x6AtVzwXEEbg6WXh1AEYN6fGWg3WhG1MGngxcgKzWhqmNhEcBu887dZbd1MKMQcvzw",
  "key3": "ktrDNm7DR172phBeVQjZ9kAKVLhspR8rE9rdF8e5j6B2jVhz8fsGPCTGBj3KCTXCsjmB1YsXCtWLCwvkh2zr66g",
  "key4": "ZBo597J658AbGhUDcPQqwQjbVYYMAC6cSEbKJ8Lntspr7pMw3Yku7YtUpXyWWbdsQXCbboy69WGBAQsSU47MR3N",
  "key5": "5jaLKN7RdQMKoBEnEAxkoFCWwj1yBWMo94uVk2hxpiXNxi2NsPD1ZPau9FPPcHeZmj8wsntnHqZCTevDgKAWHupc",
  "key6": "49CNo8qERA8d5DVJEcFxgDyHdrti3yye6FiQo7BUdk7SgwDaJ6UJWZNfn3SUvhQEAJi18Xn9yFJmX2eXHeG3jsz6",
  "key7": "4G5Asb94Rsob2pcxBppamNuEFZx8aRqkubU3qjsuhaGSeWMDeE1LYfrbSW6WmPyKi34Cf8G5LkhZdBxjzS9nnoKg",
  "key8": "iCcPrtmQQn9NXbycmZiFZT7Ck528zJAXu45BDyxEbpByfWoHgDCNUbzLEK3mtvB63M21RUH36FhTaVpiC1pYjui",
  "key9": "LaukHAx5YZRrzZEudSPnqRsK7NMAYVFAopWVoE7PLYkroEiofjL6nMMUeAVxmRJiqYgjLFxYfueaFPe53XmDFXq",
  "key10": "4M2pYxE28HpdG9WriReqFGGxwUTVNVSqHoVg2sWzYsT1ZuASjdWAvkPy2EN1VcKtJWwxcjNGYKCXTULxYvbCZt7",
  "key11": "PeDVdY7oCysZ6TikmoMfiyHLEJGjxxa9vo4fV7sNf2P43PHEMPDS7jvoYsLWgmcikhVNPkRiUrd6zkyeJ6Ec6pA",
  "key12": "24hB9mupCQh28iBwgU1j3atSqCJm3d7avw4k249e8QEatB6T63pxqcz1fFLfWwu4i5Qj7NEcpTpUJb7BVvXEA2HG",
  "key13": "3SQjSZN3cnoJXW53oQzGACRyadL6KKn6SsZAgkKjQEtJasdUnpMXYHNxXYxneTciC1eCunz2XQ7Wsnk6DWjodCxD",
  "key14": "212dTvyBBkL1U4MPPEDoyP8GNAGTST8eCfEGE7QiPQG4aQrWxd9oLyviy3vKv9EfEuwUfzduFHAxQJuKPdQmLBun",
  "key15": "3syGHXrdAWwedUwd8JKGZHrnE6UaySynEuZHLdCmH9LVmDGco3vxEVBRC91ii5Zby2pA9ZPfAF11EYtiYE71iZKj",
  "key16": "3AQQ9nBQp4D78sqJsBqAE4afgdMLRJV8YeH2snTmxmVui9VN7z3dt66e5DHAhgpHwRYt25d4m6ustdcSFDUkLLoV",
  "key17": "4RS9NeWJqE4aa7WXbShh9knyd3qWShXMF2mpVLjcy8euGxRvbT4fvUrrg8tvMuHsfD2aWCkuKcpRqq4n9NK7Zh3W",
  "key18": "5Ri7diYccPSuPeEVjFhy76KhHLLrvsuTmRGbQEWQe96XkUySUUVvpHLmNz3i2VupUbJuT44XE634khRpLsW71eb8",
  "key19": "43DhFvtUc6Hgk5LHiPEnS2asQeVf7NmwZgrXjtTrxHavHW1aDzpvvWXRfXZQxFhGd6sSRKARatp16Ta4cvA8wZUh",
  "key20": "363Ep3JToYeUuhCo8ETTGz5ohxXz7vbKM5dx6xpN6JkhVpq4xChTN9g4ayNnx8wfGP31xvUVeZ5sFcQLK11iASHt",
  "key21": "ikW9cQP9SekzNvp7iHNE7S11tMXNq5WKD5ZhXWbh21Hi5fiHF2RKtLDGWAJKx4mtYGkFtooiYdybGJmVK9RPT4J",
  "key22": "G1GzkH5Th7zDHh97iN5pi99Pz48gZmTDeCvuYPdhdgKmchJnoZXeRbc9Kx1yYxMHbWw7JWV6YHUH3jBa3eaRpPL",
  "key23": "3pHYiEsHV9NKqQw2Uap3RNTrB97rvJieEbSZ3v6yRkwRqSH6qUjmZUKow1d5XyNpDt6bnKND3iombf5oiAQ5zvw1",
  "key24": "5aksHGbYhV8PAV7iD5KUfTsHJ2DcU9DMsgpMoUfRcnAfpvRjYhsJhj2484RmHh7L1ba5oqarXudfGJJCvbyUrXwV",
  "key25": "3p2SndohMncRFjSfUDMb6k25NrpWthfk72yK589UbZmfsFdX3UGoes4MiRYMAuNdJpW69TEUrL33g187EMfKnRaA",
  "key26": "2kyi7fTqBZ2tyny79JmmrEeCvTb2wSSDKJMBZwA7iTJ2Zdr8YCdvBgjDbs5VmHSxAMML5rap3TTwR8XrfKETriEd",
  "key27": "3coY2QH4icRNLpxhNvKxH9mLttmUctxXm4maiigJZH5B89gMtKkkyEheMs7epLrRXaEtvnbEZNrWeDvjjfuyiDxi",
  "key28": "3ow95yovpE7JQESwwBrEYW8shyhsYRJmQgHvdzxkAvG3XU3AX3aCm9ubGGK8zHXakaSU3GMKwHmbwFphZDUA2YAE",
  "key29": "2SBozLrFQCRrhsEAdDoTd9weQH8JkzuLAXomTh7FHUFniAQ5gjPJZ5w7xdQXqwym5ghgHWtSm7m45FyvfjMuinUo",
  "key30": "3hDtkJ3RJ6LdXZCWddtN4tp58g6sr97W24LLNWA18ZR68Epw175wrA6s13CERUrR8AnTaBgznYvnemoXYBwkJwUm",
  "key31": "2dRw6ASeHFM4SP3FDJXdVDXGgspudSMoMP83Da4qo3kvELYzyYu9NPYNhPBMnpLGpnJ9eNE61XysWrtEKVKBAABT",
  "key32": "3gY6N3TCKaboCHg4F4asG7nytCRcVkWqkBrMmrJsxshnDbc2YMbRjT82oKS2ZZm6PeYavtUMMLgpJdvTsXnKzvBN",
  "key33": "3SBysU6znznFVAYU3R617RsztuzPjGVirp2MXRLtCrrQy22MG1cJfGMSdpE6kr1wXTpjKVTJVQSmXGyW4Hx1LHLA",
  "key34": "3wW55hRmsDfuyvTK7ifVw1vffYxjgxABUXhaLEjVLCjwa2PnGEJQiEtua3C4Zu2anQe6fRxj3bojH3zJ66GEpA91",
  "key35": "3Psrpv2begV9fmAPXHjdxUU5W5BcEK6dQjpiErK86CB48QsmLg5rkMv4sekoeqGhwivHA6PG3wJtagVD77Y7bkVk",
  "key36": "nFdTshEeFTXSGkh6U5CjwVV1yQUt5jDMLAStjb3JN3V9Ftc3ssfnML8KV6yf61uGzZeq1eAdU8LY8KwXAoET8Ys",
  "key37": "4h4ZMeQL179DkNBBJfM76JQgLrNGZLJ1vRqQQBWm972mbBhP7Nq3kXJQLFsHR9aLiojaaioyoDMbD3o95Pn3RBZt",
  "key38": "5vbBsbgYtQmBq8H22tHPFSsCC4e6VbFuJ8RPTFpKZBTwmKvoD1etHhSV9mJasjpWDdjgV8nRxnCKkVqEDsTHXtub",
  "key39": "kunftNmHBkXE4ksViW1oByAqsYuZhvUv47PU87GVD3h6sYR49jQYUAUWzc4851Mio5szqshpX2kocEzdfwE6Gru",
  "key40": "4XPeBBz5TtQmHzgqCpkDCGUzGnRjL1o7UX5neySm11TpvMFEZXa2cbRnXRjdtk5ZeJdpnftB4XxL5ziKnTaLr9NL",
  "key41": "9fzXjXepoYxHPRi2krUAeyE7x5ZTPCzdNA7touH4Pt7JHsp443arvUWvyuo2iYNv5BzvzFKuF2ZbYeZqBrFfnU1"
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
