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
    "5pVUsgjNHiyjHY1mw84GYrzLRLLMUYDR49aSbEaApSQUxvc4JVSjzD11QNtCWQk1dabBYA5bGQFpAKjk4exVZEri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ULHFNjrosx18qf5yyYW3JNADbfuYtwMgYKtLPTAvFTJikYTDhg2rYEcN3r6cwKoN7WbdMhpv9DQnHx4SANjBMxV",
  "key1": "Don5JuTmNSseiujz8orGq4CT5MRFrg4Kji2BRaQB86SoiNW5Pi3T5qHZyzFzFVhQFHXnGhFLMvb5uCsD2GU8fnb",
  "key2": "NpvhrGue7pfLjEGrFdTcBtbWtvaBuJkkNMYiHSXDBTbNG8rWSBSn2asL2YzTZHC3T4MWWv1d1ErSwhDDsfF3Ugv",
  "key3": "5Hid9c2UMac3kLvAUapXDjJejYdU47Sn1aPXEW93fjaYyYDXbnRACcB6976JzGxmpgHS9aCC6zBTZ99n6jEe4qsV",
  "key4": "2wq8nnx95rmqyAQA3Yh3YGGdpqqJVo8f2LkvjQPBihtUZ82mHDjdujmNECyFj4yPQacqS92t4cDJKvxWnffYdNhp",
  "key5": "24NNbvfLwqENvn1CEoGz1rfYh9C7nfxtdTm8PkxnK8vVuey9gDJrDfrNSNN6wgwkACQXMXZhJdSGj1rGRK28eT9D",
  "key6": "VBQPX54f91w8wGUujnuw875ssDijBx8bBJZosgGBX8ZNjdz4GpWqnter6CDBPxYf2XWHrwxLVFke4moQSSJPb5f",
  "key7": "3XnnNL3fcJtYtNhwdCXF6GK8qhr472w7zpTpbKYwjJBK3ecVaMoahNeDkYphKByx9anCNk69huzJvfaGYdiBiNqp",
  "key8": "3oVs9ZP7jDK9xizoSk4kXnHqCFK4LvnANT4aVLhHpZ2KwZVreUfSuSdezj53JNJsJJKi9ytabR2cHNQD3YjRBuyi",
  "key9": "2WJN4hNrfMKWZPi3d4B2h9C1qSsqRMT5cCiDXkM85rAnMgAa9WHatX3SQKy1BWyw5stfNw8V9GZmUSFjhhwj8rx8",
  "key10": "Wofi2egJUqEN4hhgcSGVNkU9btk73pui2NEzCHHs4GC6TAqK1qrgiM64fNm2z3a4w59qUQBTBymgoA5SG3kHWgw",
  "key11": "zNE8Pyky8239jBQdVKthjTohg55rzG1NwmPUKayAMSkjA5gRNGTzKve9huo79rC2YTgmHNLYZDjP2narbrcrjWN",
  "key12": "23oC72B8SycTvrrZMbq7bgetN2gdnyBopWHiLc4YKyvVTjjiYE65gxsEHUX48HDsNukaqQc1eWNYzzw8ueKbv8ap",
  "key13": "4NkEa5ex8pT8v9QyGHkajcyW1vBMmCVLkMv69WxmTVWXhHaCcHCREgcismetV4bW1zFSmpDBJUbKECb74rp1VCe8",
  "key14": "5be45ZwLnwWWbpkka1xF8LXZgWLxipfECYZoXPfr1AN177AcAPVfZs7Li7H42fbNWLb8MbLmxgVWc4cLpR7zxQHU",
  "key15": "5QyWjyJ42rH8ieBMEvmnSdTu5vk2FLmXcFMNt4tC4C8LgR4QpB7jdUVzBPba4GWFzap3Xhtco9zFyqiV9piNQaHB",
  "key16": "59ZQbJxGDSPqzBDJ3Cx695FJJrSjKPcKFyBEdyi8734M6AR6aHsQBA3ST7FABb4d9arG1LvupczurDZRAh6mN98",
  "key17": "uU9T72RPFZtLK8NvHQ6CfRApFMBx5ZUpq4Uk6aMTeUS1qtD5yBqYkw9v61SNAu3tvdzm9hYKAgtXQAdua1ZoNG7",
  "key18": "3g5mzL4txHMzNyJktSfBJ54GxakUdB51Z8ZXY9bUCYh8REKYwnb8YGE9mkRpkrrNUKfv4HtMZ2wMXHs1wxs6m7uu",
  "key19": "21RUCXqTdrMEPnw3wdWawTNzNscDzg37wdeRqvpZMAjvWMEKorCdjFQv2ACz8NL3ZAud4cEYbsUqiChvXnajRhuk",
  "key20": "5169WBF6qi3Nc9XAe5Fm2YRg6j1k46qUTFNAzhufZzzzA3ioxm6QcmeuZKGe7EkhvcXwnEBKTkM17FpRGjmbvDct",
  "key21": "4Nd4CcW7fkkBaGtqAFi9RKZG7g6gHuaom3LLVdKsVcu4z4wM5mxiLaiWes9JrkAvbX5iSe4PUHvFSasBfjU541Lb",
  "key22": "3S4BhKjKYgxUMBKPqo74BB9CY975kJuCaV49oiUKR5mdSTK594PEGdFHVTmuKUvRNqT9BAptERcRaw7sjJkihxMm",
  "key23": "4Mmy8H3jwoNmKzbpJBEiAp5LCSiuQkomfqgRxojc9boqMC7d7gg7kgKB7oTcV61opk3mtHMZDzj2PcFCeGK2sbm9",
  "key24": "5ncM7Lusp8n5xKGU8kt4g2eYh19TH6QCiLU4Nz2WjBnRQSEZytE8oy7viXb6JuuMK2vxD57PXPcLc2sDpWDdLaxj",
  "key25": "5QHFBy4k31q3acAr1hEDwmFLeDwHNtVTwtkG7wHWz34t8He3nQrKdz8skrpf7Lc9hfNST1MiACmD7chyEEVB912S",
  "key26": "2MV3zfhKDP8J1C2bDnkpLH6K3eoUsWq58kGsHGppLuxRuTe2HGs5A4UM94zAVxd4yjjD7bGpJEXdsCU4cM1WbZ42",
  "key27": "4HsycV3kGR2oHwyCkbyN9WPctqi1n2jSbF8rMHQKudfcvBMq4ByPR7eJhXAz2jgbu6namvjYr9Aun7D1VfFQdN7G",
  "key28": "2h9DFibPCcYpTSf7hdTaGQAiS6FAiSY9wSaFXNudaqiD4Tbwc471pTUjN4exFwyPTov49PU1EoKTAyHkcKiFAyvK",
  "key29": "4iRd5AbTJfZyBaYEPguhuXqMpAfYztXfxAJ2mkiJoTriwbHMgimBfJ3EgWJiSqgogKYRAdQ9eBeJiWSzyJWzqkMK",
  "key30": "2bs2VLJYayHhoZvaa9RqUmQsS2fg67jxPGDdk536krEzBTYth7vfNFrF7eQ62zwMnvoW1RhyhHshN3RaVGWtSGta",
  "key31": "3KfTvKX2FmWefKFWFuFscp9WMC5FF7zQfF9ZvtQaVxQz9RU5TnzAkXf33XkeNVkGo34VDirBSbMDqwHM9zqji287",
  "key32": "4p8AGpbBHX3tkwhatTvkiFq1LsZKrSnjGvSymXmxQfAzvRwvP9fCTxqxKmVX7vzLxmx8btbxMGMX1t5kuwMhS3i7",
  "key33": "W4Y4BKpninqZpDbQZGMeqcGcK5JPKMYsZXiUsLtAM3oUiQPFcieWsUTNTp7YPjPShPaxcujSEpBgJdMYG69HgmP",
  "key34": "Vfa6AFnssX6cTbTPZe2vutA1H8z3sdMF5Bah9U5pLngJkjbj5tndEvUTua3DNhPAN9PZm2P9vxdKaEjNZtqyAKJ",
  "key35": "4TK1Q4dSTeXQz4usNSSAw8gxGiALGRWrtN3Tqa6KtRwxmNVHMhudcS59hJ7eLB6y1P8qGymXDUC6KAC6o9r8GdnD",
  "key36": "2fPo7VvcQD5pVysuKR5JEsaVaEZh7JLrxy9PA1w2X1oPmdUkApqxr3UHM88GTxwD3YhoVfnkjkag7M2X5niK7S65",
  "key37": "1dNwHLDAW5sVxKZaKeCDUZQnnydPq9K2goZtKiAVij1AkvPZCUafFCfTdYan1YjMykwYtxjsdcTj5h92M3MG3KA"
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
