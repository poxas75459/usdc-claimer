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
    "4rRfTa14x56QXwdC8BhG8JzgzxVQLTQfm43xwTEbBZUniFPGSR3ZDVnePMMyBYgNfhaccMcSqWzTYeLUQjujwN3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bgsaqN2onaQwn5Fyfy8Fx7p1ktCseAJoVqNzi7gfQPfvFDdZbNhK7KT5zyvQvTCDM3nZEVFV82gCZeYtctGXvTv",
  "key1": "4iKXy4TXadhAJ3FU1cSEmHV9C9uDDNJKx6nFXM39s25ch4DKBeWLx5Qwu4F2E4b34nEZuBQX49UcTvjrFSPDgCyP",
  "key2": "nSXVhrBE9uECTyxCyQ5ufhwo9bqpvmVsJ3HmUMGUrGJjaHoC7ks4TAJtJAqATSs22aB88iv3oLSd7DpRegEpYPW",
  "key3": "5HBbAVPFxHbE3xQtc7rHSmrYGNM5jFHRCahLdZbp5uroGwUctYfHNXPf1c6bYvtevda1ym2WyS9PNPFN22KryRkx",
  "key4": "3pCc1BLh5uZpoqAfocJi1TFe9je8PfH9fwWLRZ7MgicAaY7rZbSuZkto63JupPCR8UBNGRT4vNtMZ5d29uyTd229",
  "key5": "5B3Fj1NRgnHAuLmUfEtT62FQvGqULF1bFshTzxXTWGNTEN12p6voKF5CCcjGRE6q2wk39QEpVeYrX4Z3yfvTRota",
  "key6": "4uQJHxSazWTq2TQSjiXPA4ZibCSX4et6sZTDmrSkh11jUbAwpGSe9LZa6jxDo9xj21o2KUimetFTpWrgoKSPjRhA",
  "key7": "3QTmXPtiFAGWrukyHyCmghMmTfNxQPQmi58rwWZoTvgX9VaV3wKH1p2TtNnEmdLNVeqUKnj72Xz1bKX7t3w4hiJw",
  "key8": "3DmYtumpW9ZWpqpBxNYcXyCJ7JX7GicMtyuJF2A41MVjoHzEohoTUs1ark5C5VxEZgggP5Z6PEwtypzErCof3Q9V",
  "key9": "2vukVz2YoDGbptaw3fZYPSovZpQmshuNpqb3t2zXpXizZYGDTcZrStm4FEBPZT9AeuxgWzL7oRHmNScfxi5efPrP",
  "key10": "5BUDkF8ta45dUok3sF1m3DcKanyGZUz1eYNpdysQtsm2LY48URcAqBf7t9Da9J4eVbpUaxSiVqG69UAgibzWRHUR",
  "key11": "46b2dQ7sVbWpZuQ64jWfE3KZuyvpFyVZ7AGJzemWmivL9wqc9RfMD4tZeHogS3KeUna6Gnhshaum8g3iPeNnEmTt",
  "key12": "4AGRtZfikaLdzvqb9iXjeCV6TEwBcNEGC7pdBxrotnfPr9f24ULucUissFjs44kCSP7DL9cktWLEfpGHEi6vBFeU",
  "key13": "5Wejx2pknDD6dCH6Ze4FvzNedFMM1qoS1EdY8xpud9JXPYGzX2Gb1vn79b6mFoz1pnYP6J57jqcpmcDnfVK74Qeu",
  "key14": "2wX4giVXaBReV1QkmjcgLTENAa93HeCEFXf8nFVQ7ZcXVG3oLTC6nT12iFzpNQ7xaoxSpL1YBSeKSrPTn7WzUFeT",
  "key15": "4hYxNTib9UDgssCVvwNdMb4Hr3trunSoEBDFmbnCuUMg3iZxu9w8TVTNSfcwjb2fbVCpzXgHN62j1nwEpiBBjiPh",
  "key16": "4PdXnTsPBiytCr4D6F34ezPfdEcyb6aLq6TG4Rfw1ZjxdKA4nQRgMiHoeMGH4BMDeniz6RmbXczzrhymPi92Wuea",
  "key17": "2JCZUSEiZ9g9Hp7ZsPTQwA7zidxU227nhE1EXqUs9w9nLbajHLVCCj4QwX4Hs5abpST7GfuUb7qaxVJ2X6VbQuXh",
  "key18": "4Lh4JiHyfZSNJ1Eiz6aKfyvRcY48LJoVubgnkLpkAE3ivXBmEoz8go4ZZXUmtKSyXh1ujdNXw8bmeNXf74P3XREx",
  "key19": "3V5tQTqzA49CbLaiDj8trjAoMe6a9ceJjGA9szKHHaf5SuXU3PAGdKwoC3UnNgrK49LhH9y6QztUWzmbUTYaWhDr",
  "key20": "58jKWQoKZJdto714DsFNfEeV5UTim26kT2n7fV2TgVHRkiGJxHKeLYEA4weF9Nec86ntLEKxkiseXPm7kdQGBzjy",
  "key21": "24u2QigCNushHffCwUhwrghSzr1C75kmw1U17LRp3Ca59U7bYeKHPmb6m5sMaoeEP2ajJAszigdHhw8X4gTqNUvr",
  "key22": "isZNphnkBeS2dVMPSFpoRc2k633BEx8q6yQYUCeg5bohC6WHSA6NWBpU5TVVh1ur9GSrowbjTAamehr49NhxPZc",
  "key23": "41JBUp1j3AnLmTxfehAQS9fzz8XvtckBLt5HkfeW7ZnibX9AJCSKwWtQNVyXmnSfp8AiRZvr8uKxoHDHLT4LCYJr",
  "key24": "ftcnqh19vJpcw8t1NeR5jN9ykwnqWfMcVuqMGxk6SE4JvVqKekdU7iBp3G7884pyx9bMipmLbYgC6rHEZB2Un7Q",
  "key25": "5UCYKP57aJwoqboa9jKVNgxbPsEdA1p9CS4nxyjAx7b52Fchkw6APQYnhiw57QiiwBsVE4Uh3Exx54HSi3wJbGR7",
  "key26": "4DQ95m2Ud9WGexg8kzr6XhBPoGfihEi3z73m9Y3zpGZtDbThEw4oAd3XS9gPhEMvA6AmNbfnaTS5a9mWcSgJqZTm",
  "key27": "YVwpNjoxFEkJvua7zThurqDRPcVfiKxxmiYn7esGALSSPKYdkwbHSkRPvp9ZAEvW2P3SSYrJadRUhCWQYarmLQ9",
  "key28": "E999oiN4FsRXsZciirEWTkFUyEgND2uiksFEeESAszKs8es9idnyPKk72H1TvBNQ8n4v17dkfuEvTmaPqmywN97",
  "key29": "5fd2ssR32K6XCXm1MATH89q3WVo2U8A1cGJeCxUia28v6UXL6jMzukxjffnQ5P8FhsZL9K9NUMK3nHpqyeV8DUTc",
  "key30": "5cdtpxRHXnE4kysgu8scDDVPJ4Qf6qcnmi9tE2Rdaa74UQTdpMhbZ9fGAuCD4NZPcWan1y61Egdhud22w3dsN7bt",
  "key31": "5uz2CZGytqcbD7ajQBNj4Bpz9rV1Mtz4otp9bNpz1DqahP9a53yMvsNoxMwHNa7aHN1FA8ed7ACMceeVhjYipWw6",
  "key32": "3oH3BPVRdgVv7KRDu6t3EWUraTt5KgsBynMWMEuh9aNSzQKMHrERnzNH4AWH8rVueEUnBrJUUHo1aGVNaM4BbrpJ",
  "key33": "3oXLAYootdwmgvL9VUKhc5hpv4wmxQWB6MM9mMHr9HnstfM3aFmsagooXV3udppa4yNQ76zJLi8qzCKAM89ytG21",
  "key34": "3pfzYpVgNg8FGJVkK7iQUt3KG149JdYNhPqMp6dDiEgd8eCmCb3rJfJVB2T8pn6ZLvns9MxBjoWFGdGuoN2MoQfu",
  "key35": "5WCvfyV5AhQRrdb4rjEWUfd2puaAzQ3vRf8TH4hZKJdiof9SxC4JYaWyUUYi8UUs7iDsL3mrKhKQmkMr819vDuPD",
  "key36": "Ke3ftjd373oNfVAQk42bByVCcgTjGZksysBVQsgrMcfVzFaEe6zK72hsdZKUCKp8R9SgCuUS23HQwFXzxkBhwsZ",
  "key37": "3PuTuu9VnXd33YqQEfXgKGTb7eDtmfS6nqaCXAoeGovNRWTfqBNghzcDX6jMAUmbGCk3UpodytAiDG87Wv43WpPz",
  "key38": "3xQqcgXBrBAEKVGMp7UGiFPWMwB8G8Y5gu6UvA72bzthFfZ1soDsf2AjQGmyDBJWmmLSLBLNbyptSGpZMFCEm6Sd",
  "key39": "3cyvR6hRiKpbq4KMyjJWe1zcQf6rYX4FWsfXde7CaQH8rjMz7cXXSbzrJAtWKBRQz8RfCkHNf1nvS5Ap5F64hken",
  "key40": "5NDp6CkZTrPBgJfq3FtNMfUuveGApR8GY5CKg8rBpAv4SLYjJfBBcr7rvwjzPGhScf5PSgyq3wWLjm2ek2WzCLPa",
  "key41": "4yUzPrMyvRByBSLRH9an59teQQJQdX5W2bxdmMsoVcqbdmiTVhT3UhuchmD1kxctpBpCwwKmscPvk3onVieJ6gYt",
  "key42": "48TfhVvuzwgRQAWQPjsNU9yrzMTbyb8kjjK67cwWMQaRTUJDXxzmjBVtato8FWHFkmdXsvgpuPDfKSkegwCJHX2s",
  "key43": "t34EF3C4L51Gje52LqY3N7V8yeqM59eqQ8vUTmFSTPoyFzeYpiGASCs3VHWGx5AYD5SsxcEcJ8ha4Jrus886RJo",
  "key44": "n72VnRKhicw175cFC7b1xpixPcqzoXJyoFm1JnBxC6uGA3Zpiyf3LYni1jW5gpjHpJzu6F2Qgpv1aRTnNYBF62c"
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
