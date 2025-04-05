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
    "4fXhoaB4DxCSWCg2SehfmzptaZFQ7yFzfTpwr6MrvKgyA1sAwwzGUJhDtPCdfMSUjmrrRyHgCaZAg6VF81G6jzFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHdZmE8vaf46pdeBSi5pawgkHkZeP7hRXhSpRL4mjLohvZFBkKPbHcp6fhnt7rCZ7P5xXkwX8Uwknkk7V4S9WRT",
  "key1": "3r1aunfxEaKENnW126gVXkLevNaQsxiYG9rJY4DVXKqTRp4p8UEtTzxQPYqihTkCds3LLJjesW8wiEribLRYHH9F",
  "key2": "3cHB19s8T3pR5EShicwpAtc4a7Nd2XtNQm4UmYTNPTsyFomHGJnBWQBFbECVc1E897NPe6PWipmpSYryLhR1x6CK",
  "key3": "5WnGXbfSaXZmvPLaYe62r8yWL17D8oGGNnQS877JxXTCfFB86Lnxjv9kRhCem6raVjy5YFVCJJ11t27B9EijZK8F",
  "key4": "3noGcwYS4VtXzdUiUvM9CE6FX6e15W1GKLk2u3R395ostfVNJFp5t65C9gx5ASzxyMxEzTZjGjf9oVmzwNWioTmS",
  "key5": "3Q4dhwsHBpd2n2G7rpxvd3FWw1sG3MSmL9YkZ9zopZzkmL3DJw4ZJdVWqWnZiA4KdNzvhfnfQf7px1cejhkuu7cK",
  "key6": "2oPZynoRwEGaqAv4cm83ovTXgm7pQf4UsM1s7HQQ9Dmq5VsTzfeUpvUAZ8ZAUTx9LES2YeQATbs3boTsVFgi5GBe",
  "key7": "2nvyVyDDpgJhG4SgRM6iy96i7nEemiiHLzPFCH2ud4PBtnBbj6SiveNutdKuVtUXgATfJVDfFTuP3b62RFUvGSg6",
  "key8": "5AUJgz1obwG95vrgAwjkqMc8eL4q2JtnjeWW8XMBwmo9vQKufZ4jEdwc6Cvo3HwsuNtM15pbfhUasVgYd5Qxymdq",
  "key9": "2U1HnZwn3vSam32B4fcbBC2fQkRfdAq1GY4MnnhV64v8hKrtJJJk9DWeKvGBVos2cQDrPzFfaGGGCANts1KAiuqM",
  "key10": "kDgpvDVmFLSMMnecWvZDnoRnn68np78kUxr6CAbw4vs4LgDRPBZcDngy675BnmjjH3KGdvSfG4JD4yyAZsKJQYV",
  "key11": "3Qq18dToxheefNUPxCMtRm4b4tWY6up7ug8bAN548vrCjNDDuVBFuEkFNv8Gu1C6XA3gs3CTX5Qiu79E5Rhhyex4",
  "key12": "4YemUC6ZsJe6upXGBwnHUpoyX2iFqQGuB46YSyaSUZVbWNKxeFnNbqCGPNDBPQVXVnBzCPtb8zjkS9hbr3K2yJ34",
  "key13": "4y49WhqMfabsL7wZEHiK6vB27DTzNXRnqdo1cRfnPaM6ETbSVcNQiSBqSuv5GwuJ2UhwJAsXzVS49RoeCminWFtC",
  "key14": "2kUAeVBkQSdEbRh9D8g8j9VAxnxd4tBEaAhmQv4bn88zE4V3hkJR2p3XMJXG9r4J7iLjtdfWvXnNyP8gA2emjozX",
  "key15": "2C2ofdyTahe7MVGpVMwNzzQhhvtjJ7MHReyXK7ykfK3UuUUhAtdPLBk6A7jygEcodUs6Wv7mXh8T2ucAmbRneYNX",
  "key16": "3cMCU8kieQ1zoVviXodCgagipHmmCDLcN4a3xrbib3qoPiKtyqudrGks3mG3i52JHASEw84kXuYsgHykAVCuotx7",
  "key17": "4mFttmdC2dsLMFumpUoRaBga2jRTSdbqs8Xign9gAAFwj7u9Xgf42f6bhvKJ39AjiGsiM7uarNoWxom2kh4SaCPy",
  "key18": "5QPv6U6pL18sdjY8v76KH2JD2yJ2vqRcnXUkrR9tBHzee27HtBEUJkHtPsov3f11EzdesWV3vCvEK9vdAQMw5zNS",
  "key19": "53CrsFZPeG6FJpMZ7TpNYou6wGYhzUSykBo7XkHGHQ1VnrkUYK9D2F4Z4qCckn5M4vLRD8YZJHNjbEHQThXcxXku",
  "key20": "4sXg2WErw1KcggTutqC7StKpGhpYDcHDeckogW5YXDZbEXJPn4292pmxDpqMZW7sTo7jTU2Qg8CtJEpqmvkKUtJS",
  "key21": "3FnJx7Q5BgNyYfz1BMRHMs5XcsGWsPTyuGSHDK5LGgymL5ytussm4hKa4QhrGDnbgLU3kfgviDAPeNrLKGQDZN5M",
  "key22": "yPhTEwdpn6mTQv9GnRGRyb7J8VKiZGLgNWqDHLqJWpHi4Rcg8LA455fpRPoq3YyZREUKUUt5ccAcfNuCGwe9FCE",
  "key23": "2LuQMdfsGeoht1C2je8fxYseXBTyuBFnWQKyi6BwcoxbdVwSe9nWpiHiegjAKRVCrUy2zLTw5kMczPT5HdsqAYNS",
  "key24": "pjtuKLBBuFkKekpEHgnFqRv8qAn3WeQD2WPMiRC8HnMUeenurYAJztMJVm75cGzW5xoYdCbGd3n1J6CN3XwYNiV",
  "key25": "5x8iZrRgDBxxuNyNsWAyU5ngX58iFy16zz6RjU4Tdwzffs4CVt7xSZzcgLSgmHNrfJFrbvWmwGuwJi33JakDKgf",
  "key26": "49B4vEXTjAVh51q2M4TxdDYhSQVCyAXDfxMoL1ahFgmRubaUCrnd8WaM5wZLdK5TK5wyxPVxRnwSAKLWHcTpJ6TS",
  "key27": "3RpupHYJNXaQzyqyfupzwNtuwd86KxhtxwM6NCWvcn7pDnUeR8ApVZhVSXhZ7TnMRGc78kHhLqUhXRxM88BYBqCs",
  "key28": "38MPAQqscq2zVi5hNDtSsHLUrmgq9UqD7L5WgZf9eKZDZ6UxCP1we2PumUcyz7EbPpyi5RRKEqZr3SZSnmfzxvY3",
  "key29": "2pSncj3BLrU4EiBs1A9WbzFRU4bLC1mhxSKM1WrDxQnuWTihxDRqY18mMyaaJc27XH8Ab8XpryG7xNzKvmurWEhM",
  "key30": "5JCcv6QEAaKTV6AiGBZ8MKLnmM2dDLNE4jxmPxSNxJESCsgH6nAUuZRSjxXLtyS1G4PKz4A2G1zKsp2BVyf7yPKD",
  "key31": "CvKjfmvHS5LZR2gJPTFbNvoiRE7gCPnbdKzNQymSo8txzggztJqHvcecmVkqAjMgwYNDKgJKfT1w5UCCQcCLsRQ",
  "key32": "5AskmcZ3yBZrgzHdF22kzkCAtseDhXGcV9X5oCCFVw5oa41PhLZVWMBHihwPdYkDQ1onCP5UitFTnqRa2uUkNCNF",
  "key33": "32X1wWTCbndKM169aTGAye7VH13EqAcNQAHSGz8wTWH5RuGDpETrd7XocbeMmJpiJD5UYLymcZQnDqCSebqWfCVm",
  "key34": "4jjGyiwxyHwGZtamJHSCQAkLcYC8ae4dSKytnVazhiicagxRz3fTy2bu1x9nZnDryUdwjJmuMnS2oHarqKj2xrUJ",
  "key35": "5EAUwWUr38jL6rS7pGMWk3T3WJgxHwgTZWoP8tDguD8kGmoYZ54ek3EFo4X4Vz1eTH4FPS6GHY4Bgkp6mUMjf2jR",
  "key36": "JLT2hwNGgsa2urab2BgCGXWj3j25KN5U89iikgPJiUZ9wMERmvwZuJpUNPJWpybZXBntCPRcCCHeppihhJfErrq",
  "key37": "4GLepE1GQxGYUAFJYCMHfSLaaC4q5wsNSCxT4EbbP6xMD6Vi6NApTo2nkGypfYZJpFNHsE8noS6D4EJrQ38aURwH",
  "key38": "56BdEmXNSqJLAFztusf8BT5kMWX6uFweDSTAw3u2DBNcqV9H51LZgTSMeRamcBpejZAAP8cz3NES6DSfkVUdyRZK",
  "key39": "2QazW3x19Cdnkpjr98MzfDt1mxNZxBPJKMbZJtpsDmQ2HVJnUxH31j2JwesnByU5XmXeWHfMV71vdr4FyLTt1pjg",
  "key40": "2N5wY3LcxWf4eV2Wjz9jnDxfZAy3cBn8pYKPoTsKcHfpTZhtZh78M3K7A9AwpyZwKYh8EqQCQHjdm5STtxLfUBUA",
  "key41": "23vFaFZKHroHRxZMHij2wZHurawov7Ld6x6Mwi4zwBFZnhFYajX2zzPgmP5wrY7mQ9ywiN8twr4SC2jHr7sDvvsj",
  "key42": "5F3FT4DTTLi5Z7REKNjb3rtxUGtQKr3ESPvsqw3MNaPxduksb7MJWi3YLpPz7NsRCyzE6JfhvvUEQaP8KKu9Ls7m",
  "key43": "4AA6UmSKhbcUnxvFvqQ7ukZvK1t93gngVKRrpHzWvqRHpq2A9p8DgoaPkUHfPswqxv1fpGQVXDGheZHWsPEt2jQT",
  "key44": "3sfpgxiFfRYVD6WHC8tKHcsZsq6XEXUkv2imqURw24Kzrx7PyK38xY1MXPgh9FdgFrup36mhmhvLEx3179M31VAg",
  "key45": "2hqnBSHVoHPKCKsDWE4Ubxdn7htJjis5FErjKYQuaXU3A7yf28Fj4jdAC4d4istQGmQshTND5g6LGTfrY9Y85kMP",
  "key46": "MFc5g21p42AJfw9g4FrvvK2YipizEo6xAMQQ2xv1dqcopeLQ1vpjgywt8qDzA1prWMJeTCworuMj3fEFy7hdw8o"
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
