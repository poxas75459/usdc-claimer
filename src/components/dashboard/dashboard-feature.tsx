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
    "3cGfy6NNGFrnALAEa6K9mdEG3rsxj1oxg1mwDpz4gxRCgYy6WiQ4tLzpNB3UTE7disH25jRuPvEYBmHeRRaP6gC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o8YqSo2AAJesrgY73BzL6gs3sYK7YgdjGco9ArwGqbMt9MNix85GxV9EfgHwHc81Trw7MDEvgqMge9v43hmnfPj",
  "key1": "QycTByA1LGdshxscWurehZ5o24dH743LFirjuPAu3aNBfN14Tfgr1wanTyFcd2v2EgMHWLQFwz8xUme46oPymRg",
  "key2": "5wJv82ohfBQDDFibqzcw6LPdCpz5XQzkhoPjVMSvEPX7LH8VYZ8tHQpRrc9Sz2kynMMKYNUrvecGbHgH8V1bR5LJ",
  "key3": "te2uG6PM2UFKCZ7DwBZSMBkThik9N1rJ5fpZQhpRVSRZ4KynTD94VEASdYrd5VsVnzBy49PH1Fy8C1LxR9iGSsV",
  "key4": "2NwbEiVBwpYBEbns3XEfKBRXiecpVyGy5QNn5PmzqBeG3psV1iRwjL7cuRCYqDqFwtUNJkzqc1SVqBmFCd7kvFC6",
  "key5": "5DEhQyZVDVgCzQHWTFoPXhe79fyVbLf8QMtB71V1m36XoTPSwSJcZwKu54MFqrpj6Xmsf3sL81nZm3sEM8nD8pcA",
  "key6": "5BnxSTd5ixXDiTMXvFmoaMsBYMFfoR3jG38TCXvYb3BT94aEw9mpPfCgifPauFV8M2S23C9fHxUMqrBSK87Fuhgx",
  "key7": "5Ew7WL4RrfssvDBRzqXMMmX7Hh7TjPYzGpqELhC7BPkJz55FhugWSbAiTaJXqnk2eVzkzi7nvZP52Mucg4meMfaE",
  "key8": "466yD9GDAhG4PMPG1cY8ZXsdP7Q3GVpnCoyTbEVvkqnadUDaywoKmDgEqMagaTDdSGdsdVnsXpduvusxAyXBdXHT",
  "key9": "R3q2EEjJDAfSRHHvgyX5eGYvVmqkW2iakiSLJMHXGztmzRRy4NcfD3MPS67eNKzJcDgUVtpAfTupYKP9Cw3zUwR",
  "key10": "5L4rRS865Yqd1yiDDQJqRvdK298qswiXYsZUrHPMKAbHSB5P7xhy8XmgBy6R5PCUrLUmECtE2HKL4KbASQ3os878",
  "key11": "3g7VztMAGVCCuVH8Cg7EzGfuXHq4tzbH5bgC2kQZG9QdKgNnAjseYEEeUDi3PiEMAV4U84oseopBkL6tF5y8XmNz",
  "key12": "58hcXGzKi8GW586i2h2YhzhDZwRTV8BpLcLvbEXh3bmHeSoAUaZ8vigBsc86kwwacyZjrbXd75QuxdEtBEfGnL1y",
  "key13": "2kqKPBBEXaNDoTFvZhBL9oDN5B6U8iscTdWF3hGsm7AqUcgHd9T8Ty9vYEwHbJVRyBRgbihn6LjVFBXT8hV8FQU2",
  "key14": "5F9F3jcuz7rnRTfFQRwRR2rJ3Zpx8Pm6eDEEkQsJJS3bY9Ctnp8AYvShtFuhR7ABfrNPbsvLTeXk9aX4YFQLm174",
  "key15": "5Nz2V5f8MD7F81nt2uNkNjN1tCZuZa7EnGnBwE5kQQCMaxHnxVK54XqvGf7dvMd1Jb8F9GZ6SYJjFKC3g8ffy2yF",
  "key16": "3q5t8Md9i8RWKZXUQAeubLjtPg6TcACMcGgAmYQGe1Cixnfgh8Eki2mKNQtjKuBSteDcqQELWAgKZvjMbKEKDkNk",
  "key17": "2EaQnTy7wdJrMF8bzJeUhKF4DMrjZGBfuNFw5KsAAovroVqTtBEJr2Yw2m4HezzNXXmcjtXS8zejrTHxCScLM5Ls",
  "key18": "8MKY2EpkRnsmdn2JYD4Y5BqNnAgxH3GyWqoXwfND5YDyM7mtyqEmuvnxrNjNER45PKVT15r4r79pgQnXUfo5sop",
  "key19": "3cbJGXqDUjSrBK3SgeUEs1zA26SuETKXfxKaKpRZjEUBCpfAPAFMzKfbPAX4aThv1EsGki7ax5hZ81J8aEw8taYU",
  "key20": "qMFRACEM3N1MQvehJ6R3emN5E9Y16voHnGMfjq2jkA9iCG536rpGN2fYUvQ6bA5fkXKYG9LSpFekYBY1qboU41k",
  "key21": "5PBqHz8QXkdDfwZ6Co3AAJHWQc7HuU5TksQEzSo24JxqbHKyhL2d4wounEfAXtYhGoPgfwgA42f2TAx1GyYdSi5d",
  "key22": "5A5Z2KHRp1sarLGpd4jsp3RgbvTYKLmykvGsR2Gq6iQJbM5BQWW1qLi36x71R9PTt3jf4CAhRnC7rDEp7NM168DS",
  "key23": "tp7Az4s2JouNFCaS2yRyXLUNc9CrwU2yBuRB3NhB7RcnZVkE5hojomUybC5rYdByA69p7dmAcP8XCiRmH3W5Ls7",
  "key24": "51Uz76kt7dwatK14NgFt1Y7AxAEEjFceHEkUvJgXpj7spCRwJbpqu8M172YUH7gYMLmKqt3w8CEBq673XoUw72XZ",
  "key25": "4rgHgN7jZo3MHhH2CpY19DSSRV4xUWZH69XUz4PAAFzSJff8nrtUxLwW5RgtYs2WRMniDptjdc5Cm2RVoTGEn78y",
  "key26": "4uQZBaRvz1pjkRbVBtABXT7xRF7SJU629f5QLJ1VrMgZUKDtFAMhWpXtD2PgdjGLqoEmCaio9mgFNM22X92dJJDh",
  "key27": "4tLR8AygHmnfCLyLHsyLrHBgUfnuKVahtuBZSVeUr3mQHHwNq2yYST4GZCLhFecmbvcxhWPwNS2oQ2jqfikGjZaP",
  "key28": "29SXUMTKVzzWxZNxcTfENGYJMrFcNWhfLvLFPcqCciGWdHw4janRBeh99QmGgVQ8Sp2mynxE3sBPBFeNrLq9oRKW",
  "key29": "39tyQdM3khCbDoGvM1dBRPnDKaMpJLByiyWg8AfEyk4riBN5rKtCxtS2Mz6ccEsGeNFE678xKKDht29xLU4862Ae",
  "key30": "5GP27eeZ8YmEZ5KPeGrG6cGc4R8oVQkQhCc7ttz2grHZQsJ11AibGYLHZZdhu7y7vXTvmUcGue2KuJEcG8pwhJg3",
  "key31": "33MjjDq6zNHZzMRUPvfNyGAV5Sencxxmov31F48FCriPJJPok9t8sQVw65qXUMfUr9qFCU51tViiNG6sZnurUuW5",
  "key32": "7wC8R4NnVw1iTnWxmrgPJwyWWTDrPbDz4L8KjiVz6Ms4d1F75oBCrcv6erk4ck7n82L8rLSGsWZiaw45YZCCedE",
  "key33": "Bp6VipzkJoJTQGxJG2raAyzdEW6n2eEBBRdGPcB16BbXX12xtcWGmtcaynAPzqd9YrvQLwbSLyMB1Aqyr5bLUUy",
  "key34": "4bFnLVYKvYTMt9wDqMi1kbGu7HtyTh8wY5mDhQRTRtBvpvSZmhL3QPwkWAtuyKJHhjfhhZ2k36P9hqopbwgt7XDb",
  "key35": "3FY5zdYj9Uk54ymr8Ath3oQ7qxzEYRMaHqGYfSPF391oKhJnrqcGcYURi8TNUyC2G2rm72sBQfXxA4hCBv69cAn9",
  "key36": "5DHDZ9RqKVjq6GqWWxFFDKJWYcz4Dc3fAhPoirAA5f3Lzb9NUbtvUSfvV1See2EAt4MyTg8dLUrbYSGHAtaZ1epv",
  "key37": "59bUWfFNw1UnQ1RyBCGArpFTbr19p8wgGX8vtg8TxtJRAyjGBrAvhByPPM1z7ihfrRhZhpC3UYsboRFrikUpCcmU",
  "key38": "2FMWDrG12Xmik9LiwAgWPNuE5euK9LrCXoJxVdzoiAVxU1LUT3o6xZLUfjCskkGMU4L2VkPvRN394aQMy1Njh64m",
  "key39": "3z5cV56pKq68rGgXRtCKbbugxvmGdtnVAMQPdggwYg2wvsAuAwo4WaSie8Whv5sbcqTT4TPa49tVwNiKhAHmnGZP",
  "key40": "2drA3BZgTDHTPcGtdw9FfEcwUZUA8Bh2HsmUg6stE2F7i58wo5iMAj5QLiCNHCF5X9iXiBNZaQVAuRWLrnTW4fMB",
  "key41": "33VshTSPrFgKHcPcraVF6pJaBDeFQP37yxeMdGjttKF9aKUadP384a9jpreKsZGGDoqwrY55YpQYmE8U6NffkQnb",
  "key42": "5KhBob9DZmfLBjq16WmTtciiE4fh6usLfrwy6Hxz4ZxivBnRJkmSaoiUpRqGjUBPgE91gT1NDU1XWMHxyEHG8j2G"
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
