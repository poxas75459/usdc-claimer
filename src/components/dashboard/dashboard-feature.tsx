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
    "4iwWhw1ePK4A1449c5D3obYk2ni5uQrwWNeGB6EnuWeRSyJKSoS6MVVumvFa9uJExKgbEmM1tiR9V3kdrDTtofyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5uNuzBeb77YQn2wFYMCkDqSn82HiSvVkoCsySkKZgW75oiCKWFK1ZnFWKNHGAkdNrCqASBeQsHfN7Bv2QXgtve",
  "key1": "3LU1R7gAb6i96UYTw5T9aM8eib6rqQHzFDsuRucMHmFJZSkHnLoPRiVvw5S5GdGj7rXA3ohsxk5eGp2ufpoiuoRf",
  "key2": "5qc88krtCVEoNonNhwAdrwBW7uviMxh2WHwGTnQBgHZcGorbX9euAWvtSmFUmcVJW9PGgbb6B9j6HEa3nB4zwbU7",
  "key3": "iQAwxHe3yqE3kjhK22BxE8yevNqofFoaAgWPeqnh8E5t8D9fR69oTFxeakEQheFM2HZcWQCAPRgtK9VS7QaYyYX",
  "key4": "2jJss1eQK1xKz1ngR4b9rNKg1MjZ6rWudT5h4fhGsq3B3ofHf8mLW963vFuZxjvqHH5LiD4bWS8EL93DXSeskPZm",
  "key5": "fpHQtywLiorE8C7KB5PmKYfJ6gqFshzuczLYTzvCtvc8LT92AWK58BRd8TD1v6VSzJCkVxEDHiK6Vwau5vFaiAy",
  "key6": "3FSjhatJDis7TwJ9gRJmUJnKzVCA5qzvodiRgNByoK1Gq5CzQUHtMLVdda7xur8dgkK3gWiozruRRkKRh8y1Nbfa",
  "key7": "4oqJnkgx3c9EuVFR3WYxYdBXB1Cq1MKFKGX8GJRhgLw7qUjY1W9hswgyxbKNGRpg1Gj9iTsJfNjQEaD3F8BHnRus",
  "key8": "5sj26ovWAAxNC8syeXkMfUoj5LhRYgyeAF23Wx5TcDWxLDfw67PFouDnKrszydL8gUMQuDmRevgLRuNmTi2UrZ1Y",
  "key9": "4fReqpZEGGNaB9AfWjDVWgwsaVY58gZi5Q4R6fCMfG4o2au8m7s8LX1WvVSRPPCVszwbmsoHGubgJ4tMtSwDbhiA",
  "key10": "2uCTXSJ9LsEtbrVyAPrqXCw2DsbJ7G3PBAjnHAXGgykmS2ZG8FRfXzd5mMvgduSPSzPHEwPZWWSThUr3AHVrkTCn",
  "key11": "2U66CPGwcXuvzADUhVyWFiSh4x3iajhfN43Es5UmaQJ4bz4TSwQgzt3QdMz5gqqwYca8AP4cdNanwjajiCHnXGDd",
  "key12": "2N8cNt7Kft1oPm9hKPNMNN24mjyyCPda6xQ1n4Lzv8iDw7qiD28VaZyR6B1dpEAG8K44FPApHABr2tcMzwgqfAua",
  "key13": "3f6ik44iM8aaT4XhJX42zj36A8Ab4NTQpG1c4aF82UJ9NvhPcdwA4ikMszWY1fTr5pWdpvPyX1MfuBLHZPqgH192",
  "key14": "5BTgNcyaotAwoHUxX7z7LuaxCiweGY179MQH4PWme2caDRymtapmiasht1y79ZwbGNq67D4bCsdxKciahFLSTNHr",
  "key15": "4imZaFjtW3kTQtnqb7uXx3LBXZVNcy6ua8WKu4KaWcPpZS52TZuBj75t5HRySxCt2ScxVYPLSEQDeHbfCvNqqFXc",
  "key16": "1GERxZucou2KSXppHN4PHW1fJARWMhGWzZZzH4dvekfMbfij4ivasdigaEE2cGwPWXsTjZwu1aMzbZnCECzHRzn",
  "key17": "2Kwcj9KTVSVmAfnj5wxJfTZQZ9eE5drhaumzN86ijkrEV3U5smbo1BqscEZfDwpZmZn2gh8ctfyQZ6dQTLN4gMLT",
  "key18": "2m3JLMGEoe2bPtgBzChp55amwzgATmU7fYx2tMJ9A7pw83X7V98cBXVmsWTHt3a77kSeRNnGm6q91ujutJboFhR8",
  "key19": "45ot6gDnBf5VBCDPu149qLt6HUNBjy3B9qSFvrWgbKKwV9qVJBr4TFzpyUZsXZCFTRAAtnhorJm2eEDgQP4u6eU",
  "key20": "3y9iwFjTTT4PEHvfH1GzbL11N5EHH1ZKYWZC3JaHV1AqneTzBJxPwnVYdgCJoRFPBj7kFPyXXd28AtXWS1p9kFqj",
  "key21": "5Xt26Ef6GFA58w2dgfbRzWUS5iG123NcnHbu34eBHEQoXb13DcfbAZb4c5saMBQgWeWroTja9ZxfcZoW3o1EDoXz",
  "key22": "62Ly8V9idu3tAn7gkcMTfNWrGvBY6bG82Zxkbyf8n3TZAoq9KE7NCohLuM2SvYBiwB7gDAc6cDLnmJbhtNKHZLam",
  "key23": "2QeMoPddz64zdJcCVyheyy2Yv8MricHhqsgTekscUedgnSmKznpgME46BVThKWBYdKq9iBU46tnVjXFPkcdmT174",
  "key24": "VMNBQjmeazBpaJY33dMdKufztqBdXeejDHsnushNaNFuZi3S9Ki4tGjnhVzaLXQ8TmrdQHAJZttgByte72gc7CP",
  "key25": "Mcb6aK36Csa2savp83N6xc9BqTc5avAPA7yV3LXTwHrYTykSNKBboLgurNu897aaPdVrTAXAap5CjeWZfMJcP2t",
  "key26": "2DGcVkTiZrEKfB5vcEfn3jgRTZGrQ3P8c3PznCtk4Udk9eh4U3WxBfSVjWVnYbJVREmcTwRrHS7Z772H8EPhD6RZ",
  "key27": "49qFEvWMtUbCtt4eY4G4XWFikFbnCNFDjWxUhmFf8CvVTLAB76vKbo2xasahVKhZkxnNkJitGf7NxUa7ZEBbQNW6",
  "key28": "3AtAVQG9gmw6yMG8RyWUyUpHnV3g1b1a6dWQxF7zUSxUchPcDgP8ESWLwmKtiZdDMqbo9HTWbGMfF9GnCu3hLimV",
  "key29": "3cQ65wkNs7A3mcMWE2F4vVvjyPA53aKkDiFMheuC23zeWTTx2NfefmhJVrhev9S11WRodL4BVGDqbRuJ7axgWAje",
  "key30": "4JAqwCGN4n2KVmSk5v65cWcHiMfpZwtYjVKhbMhR3AwdojZZxX1w5heta6VejMKJ3L5F2dYb2SZXCFQMVyoBmFVR",
  "key31": "4qHDWCuDZLk3CzM2uVoYty4AqaC659n2Gcf6etKoWiga1XPGJnDopnkk3QL7LpgSmQY1zZ1XJYiNtPUfvBQfYaJv",
  "key32": "5yHEdCr999EZrhDRwojmDWQkBJ53aMn1YEQZZZbyqL6DDz9ZjGEQzZdhJ3rkk1HFvqbVxs7xSQuAyYkE1aQrNeeZ",
  "key33": "59JRSDkDsWHerMHmVzntgDVxEpmKmNaRjH9odpy2Zzmp7sUtmZNpStYmALwN6QBqaeanSQE7k6roXqDtnXFRrLUp",
  "key34": "2Zkib8XvDqW6d7w2bP4CbytcWCfegyoXSZddBBA5J9nKVMZocdK3ng7qHDXPKGFBicHnRFmqSJph3eQM43JbSFuh",
  "key35": "5npQLSRUe85UqqsAEVb4KNQr1CauK2a9WmS845dr72pGnFu9D6qM7TehAPyT72pGvcFegqFQcVw5dJ9muddJM2Az"
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
