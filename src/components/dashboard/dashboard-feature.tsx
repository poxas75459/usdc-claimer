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
    "4kH3YipQ9GyNwd6kxrP4u7DEnWegzHXsBBRT4P4APvcjEAFhsbYiGwJeZFXMa7U6FoMZHRiS14hj88pnJjWreGpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZs9PSRZ8HZKXTbEyDnPe7Dz7NdAQuRpRekJDPFeAb2VeQspEKN3XEVHd8voHfzRe8tu4ALwEju26fqSPvfydj4",
  "key1": "2fmc3Nywz4yRDVoQBHrXj7dyzfXDrXwnojarUV5doJh4QfMax2mkvPGiKEoJwwKRFTMz7cFYUMvrEJg4Li9KxmXs",
  "key2": "2QotJXtPxakz9VaAXdGWCx1aiMJpkdHd9ZMK6UTh4MArKTM5mYMTm87aArwYv35VyQ28MPjMof3NgCMCE9VfBWnS",
  "key3": "62U2gdJfajks6pKRP7vctciUDYvHkWsdeufkSufiDMvRsELLJbLqBXfVJnQ9Aq3eDnrY9iyMnErfKAcZVqrHNX57",
  "key4": "2xpnwzuiG145Cg9kG7dBCqgHreSoNmunmH37oKeDtXWQhuf3syTKEt1eFfGxqpVoiaAAYvMSkHuAbva4BryGe6Zr",
  "key5": "67bKEnwhgxMyNzQauxzKJ5PHH6Gw3G8B6XXEhHdNfzCEiq6nrtaHzCx4orGXFJvdqtGUjpG8fsbb9sEMgE9GSYAs",
  "key6": "2vK98kXhiq2MGgS6kk184Djn3yJ6BBCYRH4KnDKCECJKzLTwC8FtARdziZ2m5rYE4ThgkqLtAcMbzruJvvioNSLG",
  "key7": "56Fdod4uPhiY6ndNjDtTARWkXLj2nZ8sQ3L8Pt6ewNbG9SjtsUok3qP28VBQD3au2ttLMTaTUM18dCpCUvWns7Ae",
  "key8": "3ygRGoxAeCffyjg2iytdwCynwg5qYyZqrs4xSRRNJnpSevBerrW6aFRTU27wjQixmQWRKc4AyScnR1oMeSSHWKKH",
  "key9": "2i9RsKpju4AqaYkGhVAke9eixPRLw9ahkRyEa4cUsdMtr1VPEACQYcu1gUgiJKB1zajaJPtLYZQpLssjwFc4zcVX",
  "key10": "3cx4FdGDZATA8h3FgutUuUWTMNRED9DZZ8K6Yc68eaLcewb2cYaq1odb2gD4MGUJBvsgxR1dv1onUp9tXnu9diNd",
  "key11": "3SaakdNvnWkgvGHbenqMZsUSMyAVFMNeFpoqxRceNVegKHauG8azTxcmJnwCUX1fCGRxAhYx3jVEmdz5dLPDP23u",
  "key12": "wicmWnrGpbYAbKEsdxRAHLwVGGYAHWDMDXzBkFc5cQKCiqKVhP8eiVTRmwH6C8FNPePQ7cCYAgmp8VuWktfN115",
  "key13": "GwKg9VsmcjQRrdhttfWFCYAkEbPqKNS1QAZFLsTzBjujrptwQuPmLWGbU62TspLEPqzRS78ibE1Em7545t2zaQx",
  "key14": "qDjY4j13vrmwphEMdRASShMXdeFr65ops1FXqbS3JqCdgFaGuxc1Wv4AWrhD3MkusHpFJbKsGtYzwrC9n56FmC6",
  "key15": "3jdYFcxiziXJ5LbBn9adNpMU8TrhtQCyiDVZPZpTFyQQhVBb8cLUTT7irNA4UeMxvHxRp4LUGgsN38KSiQVEkpux",
  "key16": "bhS5Wy3tajKW5xwjwBjMHNU5DHbXc9K1pqS7HN6TkHvJAYeYodPNz3oc466hZyoD1qkHVQ3W9G8FGzncYifLzrF",
  "key17": "2Ee1CFCPPhakvGGrdEYzM1JQsJ6uo5PHSyVTSJNcGESTMxVceHJPDDAgGZqtcCxw461bj7g8hSvZxqprzL8aV9so",
  "key18": "MX5V4qpxEAYcbv9GEFffU1PgaRHAXuNtvdte7sYVds8cjQNcj123UQrQZQyAVvFJnmhHKTk2rSyU2FkAbLTpMHJ",
  "key19": "2cHC7fvD2rSaBY4CjpMWdLE3YGYNyCBNXne8QYA7WNaavGDsuGpQwQ2yfFNsqisVfUHPaqQwPJwUvStUofbveWzH",
  "key20": "3HviyQUFirBqkJrKkYeieGKmrRtQw6jx7AcnKnpLVXejnRXYzkmnFj6UbTS8s4TwsGZRvcbhiuJjkv1HcFGFZTcG",
  "key21": "48YKAvL2m4w9FftFDELwiqg243tcrFkDz8JTJ14uLNL7mmtm7gicyPQu665sxJHEq3TsCsPTU3kQeUViL6y5U9AB",
  "key22": "5e7d6BMarvLnMGi3BhAKNJGUv2D9cmRbcfYrH4duWUrHejPH64uRz3K3MLR2rpeFtAVR2Fi8MfQDkyTRPSt3UgPY",
  "key23": "2GXWXAZLjf38UfHtTkjy8VcuUo58MXycVtiugPXXPtTgcMuApLoRUwxqVQCXnzXLCjDHCCNuVRmxFvtt6QmPGQve",
  "key24": "56pcLZMWgCcUox59Z2PeEEUJ5SpfabcpDQSawAM8mM9P2rWwJUSekkT6MrZuPRr7P5ckkwimz7cEg7aJxcUve7Fg",
  "key25": "3oSEoQHptUcPVLVtXNDQSUsUidPsk9sg8Rz5XX7qEQWnrSiWNmv2d1Gi64g9EvJ6YxPN53tVrqYR7ScBGUtWd7hL",
  "key26": "2PKgj2JeLyagUnMxwZiGRofudB8d29kkMxVnUMbeGxqvt7qC9AnFPfVsHhEtVcSrECrzK2ctbpnVZuGb3Rf1Mvk1",
  "key27": "5SnGu6R97eSwXvxwiHAzJwXMPG5YQcgvihhssDMpZ6Vucxtfmgoh3Gs4QWQa5FRnDreMu6G3no5HAuiSgUeCgL4u",
  "key28": "3adNXWqvHAxfgUDjv7HEyzYZ51WRgDx7WHL3mhdFVqmgvdNALDnCUsTpfvMMLwwgpYE693hPdvhRg3ypdzZdUS6X",
  "key29": "43u9i8yAhe86QmC6m6mY99ePoswMtAtdbjWM5JDABbaaxT2MJYfzd6VQv4iSXpxQTQVugcx9qHm8cjoysGTMhd7m",
  "key30": "5syUw5pwK4qovzNiztPWDyBJSKPsd5AacQpu77ziumXphPcaoNyZiMJiqQWGKiBVprK7ZpAoUTkNeB9QKwY57veB",
  "key31": "2cm4oHCXtJDNjxVL4a5oCfUyBRu7RQsR2oUN6oq7ooZi963vPRBP9BKNUXXLMB1GTEJKGR3UBvvW7SRaJP32N1Fn",
  "key32": "4o5urXMHqFFdZzZ1ehFc3V6wN5dYLX76gmGoqbqT5cDktejyYVpEHX8WTDE156dEhsypFaS7CdSkCzAfL3ibUBM",
  "key33": "2fxJgnoERbFs96QoNvtE21nfzWpH3gmCRSgdHznhgzrABWCZCgLg8Sb7ndgoCuKcLoBQiL613RiBC8W7VBCYy8qT",
  "key34": "65uMg8VmaQ5DipVNLP4FsBY1QAcFoi9AaFimV131LaYd7HZ1xAJe6E73s5VAMRYFfdN8NBgV4GRiDqNuKGPPkgcS",
  "key35": "5RKL21BkmbAxr9EuUav9uY9woCoc94hXUtsJ2oLL7tgzF9yuwg1vEQxz2B8EQYDpducdY5qoKjSf789KsJYzaK6Y",
  "key36": "8gB9FSRDU38yM2hYEFVLmtt9wKML11DZk5LGVhhUj1BG112WZccFguJfAbiXibTKjLBAXnF9DefizdoYWxpjstN",
  "key37": "4We1NzTT1Q5eMP4hZFqPWyvHesZwRUPKLYVUG9ScJqnWaA9hspC17b45UN5aBMF9MCibUy3WBeLd96gXeodDZYU3",
  "key38": "2sMbpk8s9uayiiyNTGdaKPoBCF421ARcRJeWQKmbCFJStu11znM7sssPhrUhfEt2U2eJhuGmTSmAbtLvJesdqikC",
  "key39": "2r3mRhnEH3fTnRTcn3j1TaEPwKj6VWCxMYFyQp7r8PN2n4vmVmRhNk8fuMzVtzVcArSspYCZtEYdNnxguUajo6Qr",
  "key40": "2Fnr1uJUL4uS1a5WxwJUL8kA5b8zMQXaqMeVeSZrjLRDEJjG2BhwMR7eQghNVhuBtM8Xkf9yAJy1rtqgZo1grfYw",
  "key41": "5Vb3CEoRa5piJemLKM4TX6PSTnb8mKLrqLAwDBUBn5KZWL5QPHvFRG5SzN9K37DefYVCunUStPodipwi7WDJsBEq",
  "key42": "2JpqiHkawwgA3zyhy2cYGWwemG26ia2JV7MDtrHNRjejiprKhctYrd4ZiMngaJSaiYXU5y3eSgmxitDksvPPzLNG",
  "key43": "rquXZWyaTNsh7EP5J5zoeSnYYQ5XEgtYAkatdyMT5LfPQNjizrsVE5Gb1ZPKFhqLAAJh7qMXmwaTBU6qD9VU1yy"
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
