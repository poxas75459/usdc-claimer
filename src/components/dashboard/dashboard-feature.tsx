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
    "5hkc4Pbj2E7qnrNDDUqF6xeZZsnBD6DsqtowrHWpEvcux5D4bjpjGF1a8vjCZbQoSiWPG941o48tgo7fkyGTqiD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfcR1dzbgoQ7X67e34TvvJGLfKsyPxHveca67vdaDvYAqwwgR63YJcLKuwtYBSWVoTX5aWr1zUVzuF1dyWLY4cz",
  "key1": "5PYNXqhaqJcMWs9doWvqWjkbwf1P7VbuwqKFC8vL6MtM8w9ZK6pv2Wio6SNRNiNhvYeiC8uzdM6V58bPKg2qVyXV",
  "key2": "5xmFjBqvngg4ejkSH83LjcLHvE5DzpPC19t8VyNgdQJhXjX5dioEW3rfXWtg9BsknvvbLGzdxt4ozCmdX9cs9sxQ",
  "key3": "5E6CWxpgGHdcypNV4ywtXdkN39RZHtMsc2cuYPGa9ikpxGYykJsTvSvfXAJ6x1QvgDeCHFizhmUPgy7s6e4bzh8U",
  "key4": "3YN845Y8bJMuJR79skATyrZAjjwSfykBBB8JuJivUjqKNqovJy1Jsx4jaM85Nj8fy7Bzyuz8aPYHZQGmA6ie63Ve",
  "key5": "5D85LbGXyVvrtNEdezSV9akWoXwFQGHcNdXt2c3JiLbvJ6vWzW8KhSjW4xupBSJBv4GbQuz4QH9h58eWekLb8Wdd",
  "key6": "4uzbRzN4Si4RR4nunXBmSDHX4DxHRPmvb52eifEWx91VPExxWZduN9rhdNcCouWhEkGJnsvWcP6k8Fx2tGeS3n7K",
  "key7": "7qX8tTSRVmzCvh9Km7cRyH4Pbn1bTPfbeoBPweEYEmFTZFkv4L3k1ZFeZjjmAjN5TtHUExuwUupmFt4PwBmrpK9",
  "key8": "4kcAhcJn3rwzevDBR8f8Xuqwv9HpSrpbyVTgQzxQB4bAx5HGeJ25KqBdRMVkpJaFBEt6q9uf6LQduKLc1axmNEXD",
  "key9": "22oh9Y422TrrEPga7Hy4jP81husFeHy3FfJJu225PqedE6rgJkawSMZ27aMKwjSecq67evJMy92yXpswynYzQk8N",
  "key10": "52Kn5Tbo8skNXLKEw61oC3CujyzJTRUSsvJ6xgRUP5JAkjhWi8F2ibYJCQ7GQYPMS5BtSkBEuyN4ee83wApqLUAh",
  "key11": "FchusqHCRqWbsC33PBfvwqmudG6mGB96Lw1SXCRfsrtv4aSVkXriy6rErY9DmgKbfMsF2ZYsGdPieG88hFNGtBr",
  "key12": "5JWku5Fj92jBmBQgMDjBQgNWhhoUnA2B1kwm1UiBHBTWHpSJwgCXkACG7PeqTz7EM3bjtogphjF8NDXXXeaheGQE",
  "key13": "2ByghghvnD9RUsd42GP4SUTr42wfQLpE4NxqsMDGAYzCCpSgDJzqmiWfmA9ksMCmgib6AzEzk6hyjWBoGaN6nsyS",
  "key14": "67YpJnyRaMoMWQn81XzvGAwCjTv6oyUWLDajRmPiJqewZPvAg8urHZ2NAj3Pcw811MY7DCNrFoZU5jQXU2wkxEDf",
  "key15": "5UppiJocuSxMgEDUN6oyHCh4HRRFciSa3fn6yZzPYZ38HVZyZhMdPMSp4rbkpnezfSoyMGriFd1VqVYkh3eexwxx",
  "key16": "3cN52mhdXcXxruaesYWtxFM2ciYWvCS53ih1YcjyLSMiCNG5gW5bazU4qht4b56U1Gd7kAKG18CAWGFuAJecWz2H",
  "key17": "5LYjAGyPzL8k8tCmQikXoKsbD4NoBvWnYKt9ALm2Tu4pDTnYHpa5D4Av7SRbKXR2tmrjvSwzaiRGfuB9hFcUoJGa",
  "key18": "CMn9oSy3HXGwY7SWeoZpEybJBvX2CxoxkxVZ7AqHMktJY37XkhT4CPpS2UMyzvPoDk92X7HJGDyNBJbYcdeWYen",
  "key19": "46pXy9TgvvS4narJ1yLqX7XUiN3jCR6sreXt5VHcTqi4HvxszCzeHnZt1kiKQiNkQyFuvmjK1nSMM9jYoobpSwJT",
  "key20": "49gUhM6AeDEJpLoRT7SL5c7pEBQbsLaq9zqT1p14xzohMZejRkZTjtuns66bagVTfzFUndVLH7pALiRkdH8RJwF4",
  "key21": "3wPtmiCpv16v4eCyaxfpb39Y4X6cEWmqpHR9TH3baatKAX7ZJHsoRtnPdLJY1uimw6tN4dfN7W4iBULAPyFEeGwe",
  "key22": "33KTyePix2iX8ViK8Q4Z4j4SGLC8uYx6vaX8nzZ5ktuWor9oM2GqacmC1scYAsvX1sgmDbCKJqG3jUqcE5RT7fSA",
  "key23": "4T2xgypiDecC6NWH3ECm4ZLgu8ks4Xri7RdNLjadfWGkXsUmhzH2qobVoQwKDQRB6T4wMpqfiZe8LywtKDGb7Zfj",
  "key24": "43z5Rfo5isyZLqP5hxs49j1UjWt2XFQhh8td3sMAKGC61wcUzeQ4DoGLtVGnssFb5ATMpz1LDib4r5TBYELRVuyc",
  "key25": "2yifycSqaGqQD6jSsLamFhaf4ERXeADhiJgB1sMQUyP5uDrdnaFFm41z9gFvo8oWVAJfi7oon3RWgWSCdVaBuM9P",
  "key26": "YnR9mmgv6Z616VcqSjs2ErwKBBKYgV2m57Kk6qwoczYSS3K4pFGejMguw43EL9RC5XrtcNVKNMnMAZfWj5JDz9j",
  "key27": "298LLjbb1owa2AS1rguWLbAARaimS8DSkPrcZbcQ4wtBy7NnXFDngWqpNkDxmy4yAhSHiTFo9D7dAcP5ikGw1cJo",
  "key28": "8iFdmH9pyqWSteYhdCjCeQFnMtPox8jPC6VYEKXuE87MdNJ5trWw2R7WA1mnycmF8p9JBPHFiWiLp5mR8PfZNzA",
  "key29": "3xizM7QsjvE3vcg2g9jRhVVYfB9s6GVt98BQEpErz3UFgCQc7mrz8UMXYVqBPUewjpnzp1YaLN7BFx1DTa6CU7xo",
  "key30": "DLcq159gZsEWGaaJz35TTK9gkfjEsWXnD1RVKYoLEbF2qY3FDyKLRkKbqhb2ctGP1DimHS1DfLcNhkEUvQWeVUo",
  "key31": "2eNeCNH5QhHd8Rriwo9CKvshGRvXRK7kBsL8G8ZscD4L84W6FTDgm4o9G1tyc9tH7iCw8JexRn5iPMj9gnboHBDJ",
  "key32": "3LFLmQGqVcaio9WsdEW5fMK2nQHLsLCNVmMZy84oCGcKT91doxht4keYvwrJPHBTaHCsgEVgy56vhTYc1GaAtZaP",
  "key33": "2NEPhHsNJsBq9TGMJ2x9ZDhRQgRkRMqPpMWU72XfdM9LnTXtVUr54mMZFehsWYCxo4iUUdaWciLcDTdzDWMNqysA",
  "key34": "jV7mVrcw3xagA82gpyVu97m5k5TSts3GwvmqkLksFDJejYQc6vJh67FBf2NDwHkiREByeSRh2fT5AC8ArVv515X",
  "key35": "4oi7tsQMtoeYVBNFfeUF5JNarF23HM2CepLCHhodYTGnHXUepAhBMc85ME8Fh56BAmdnRJfEqq36eicfSLtVUqKb",
  "key36": "V6D3uiJNhngNC1TEMXZwcHHLePmkYS5g8TPEd3R3wQd4TamCE1S1pyiLi8JoZU9ReAH5FrLdNqiFFmz3jyeXws4",
  "key37": "3XyY1zCpkDxyd9zPhLMC1oqsr3R7hT52pSAuGeTChTDSJqcGXZYVFc6G6DQjF3fAkfYYdExPfSwvzdDP1Fkjgzsa"
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
