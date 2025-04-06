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
    "3Wtr4wurcskq6DMaeeixQPsgmTcevusvo27RAWz9jkCEK2mC8wELbbRktzGYc5fH68BmzaDXTgZSRPQW4CDSAC9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cAkJHjJcJ1YiHSQ7ACQ3KJNX6GLiNGui2kCVx7jSXnRUPboQ7Tc8894FJaVGX36WSkTrSLF4C38QRMTjQpdMBKz",
  "key1": "33ZhaWRsaM27VwXyw42GLwxfw9ke3WfLy3ECAq3QAr4b7dx53c7srkV54GrLNEHGSV6mtiUpAdzmxLHZGvMC7Dum",
  "key2": "2xU2b3wQMQtPyRBZM75i7ZVbYCfbsj4jHQ7FUShmyhYeGTFumhAmk69LFdNGH4Gv7QnxXKNe6JbEJ3jANwAiPbzT",
  "key3": "jKP2aMcXi8yD5VVekxXtGCJuqEjLWF3euTHdfystzBNF7GsXMN2FQxP4ZKEkvmyhogaGGBxGyMYfJ2ZoitEB53f",
  "key4": "HwLv1NyDEUEnm5iNy6JMQBvJocEXZEzZ7KGGW1LFaYPKoHAYGcCyoinwy6to9zeMEFys7bakw6NbSsHyPKVAVwd",
  "key5": "2VtNKceZFoEXnaT5n38MYLqsyztYXGAPcyJYyskA4iTPDKYXj6KU4JsKBueZcFWmQBUcqp1TALHdxnUqzLCeMZLE",
  "key6": "3NhB4jW3Eh3EdyoyCVj8A2UJKC3aRc15SYqAyv9rNaTxP2LaB1pBhNcUSfqPWDWhD3V7qUgKmz1ATRMBDEYs5aji",
  "key7": "4Pnh9i8veg9YagwbfH69zTbGS8NFrFaJyBCRjy1FNfQMucQfxUaXpy2bFFZubhPVcN56U8DT9a4spgDsuh1A2J3",
  "key8": "4b77ALQAfw7eQ8pAzRN3VKiewJ7QP4J8Zx1WQFAa5TTmnafbfGyj3FLTWByN3azBkpxYEcXPwyUS7bmndQPjD8pw",
  "key9": "FzatBynX5YiBmmQ5tKpJFCWkVbfRyXgYZ8uHR3pNf1mGerqjhBqQXzgfcestBLUJMjNQpSNqz9cPFNnZAdk6tGt",
  "key10": "2Jrgc4JniDuHgM5adWq2J2AWUeuTPpdDemAgejUpUctR2ecV8b5XX5QjsUFenti7sywkJL57VtEibX2AzqPEkpDS",
  "key11": "2MFQtku6gMEGcWLPAmkWHXgnj1WahYe7bR9Jek9dPd9rVKGPkNCGbCbE4N1hXhHUC3AMayQHkKJu86BKrDiGbc8b",
  "key12": "33EdajMWgxzLM1H9GUvBWR96iHLZX2gb4h8QpzqdKwiHFvvvGaq6gRDdayDLQhJ2p3v4P1ZiWTS7ofxfCv1Lsqhp",
  "key13": "5aA1zUbcY3b6XXHV3AXURFP9ySH6vKCwmGgfFhC4XCbp9T6uYReFx94NvVz4taqirmdoKTF4fCHH6tohMGV64Ptb",
  "key14": "4Nqg9swiKmwMUmVJwnTJGNwkWJy9L5AwxvrLHba42ahU9GJYDBWg1Ano3sYA2b1bokEjLwarLH2c4Bo5NZuhqdba",
  "key15": "47v66e6fU2WD9B9msYSfZzmYUXLzK1ehx3Xfnoff1gf2xSXaQwwyMBzVngYXoVLxiKaiGHWiGVp3JJwr1UbrLyoN",
  "key16": "5QCaTyZJUJspHbnDNHaAcZQDEhkKy9DnEjJpkPfVZAcwBZKaB2wgLBwyLNMHjAmc5Yf1SoDKPwbLChyoUuUB5m1W",
  "key17": "ucFUmNpGNce69WPi7VdSW8GjEfW4PsriQKqoBzTaFtCXrMA7hWcHwJBFbiAQpAJXDuvty1AXZZ3cP6Tv3aHYMTS",
  "key18": "gjLu9NHhYY8arHcpiMPz5UtyUP3CPATeB9DCww8EuspwvT1YfupWUUeJjBT5L158tGfMCdi71HKNFyiqZ12a7vF",
  "key19": "ojG8zQBWF3j7uD7Yc4vRgh8bCRZPBnu6TEbw2FDor52L5zXezv57AdJXuWsXG3CS19aLqGEcSgwW6BGnHNzGTMX",
  "key20": "2BPaik5yifw11iJAkLuxNhVW6pkeZpwD3Lgu9mPFxz68aUXKeCAa5iDJvmSYnCtbEjcZ9oeavLnfVogKzjxFCCmw",
  "key21": "2RDfP2ErU4HZc9ivMREkKkTPLk8yVDMpLZQ1M4a85STM1SVT2NUT3pjJbeJN1at2hdN1oX8pPAKbWHc4JhQZZw5z",
  "key22": "4x8Ft9LeBeECBgGqNAwbdAKYmqWf5Z1PKbtaBv2HmFQWjCytq1mFSKYTjMmYEphumHn3VquUdawXBR4iWQQixqsf",
  "key23": "545WH9C5VCDxjGmWT8MECTMTq3bbQDRuDRQAdPY1KaYsHhFnkQWcczreoPn8EeCPe2gDbfcUz59MDC8jfRBPFuLR",
  "key24": "2Magt8Sz4jD4mRCmbo7stZj8nxyMsFszpUhB1PomrG6H3JqwnnAqHCVVeDgLkXibyavLcrFo34n1Z9qGvzxw9hd1",
  "key25": "2k9E1NMFDfELACmcygBQyHSY4wzqmSdDpywSSQrxqUkHYUkgykQ6memKvt4NC825rGiwkFHgePeb4TgR5dvK6VtY",
  "key26": "4fExugwweDncEwrzS9DM1bcYgcqAa5U6FsMkVF4BTUEN7Tk6LgvEKyqpZGfTFFXB49noaWeUEEyyTUSULemKEGd2",
  "key27": "2FtvVNAzeRgXKvyUpVshEZ3oiNVftKkq7jEUpyqj7MHASJKWSYdvxhi529dgVwJ7TmPAYXezPjbU1PnzpUm86wnj",
  "key28": "SBTcshamxrzSQxKSsEfjwYXfXbhJixNxAN2hm8NMrfvTH3TgCwm6B6xC73dAmz2mZxQVcBgUDfvDCkpA2gqbdcP"
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
