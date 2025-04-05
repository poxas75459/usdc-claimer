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
    "5DtaZGz4eQK7XrBCSsSXnLsdW4CbeSWyC3zVSt5rBV9SZLerDjLAs6ESx4wNrkTZeV7fMTGyj2F2sZAn7dtbkUuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28HPYETiZBr8sDHMroP6D3yaP7qEkhNmwe4em3DWsSKfFc1nFsM7b2YzCm8JroPNw52JZKLAhdCGCd91aqhheriX",
  "key1": "3uAV9rPK4z9aWzbHBskshEZWyk6Fr3TesLJ9vAGvrcQ9Ybgp19G77s8T8AkWiqz9EnMBWEzjwejWoDVy7fFMEYbx",
  "key2": "4sSK2cDgTJNu3M4p13aQdpRNcYGJJaq2Ft5dykyPwLssQD8jR8NXdvjeXRCJiGeKLVNduE1kSu6LpVQZ5e1eTZVZ",
  "key3": "5WvJ2K6zJPQy3rw22S2Qut1qXr1tJjSm153VkNedxCkKwfRTx2S3o1QcSH2gja7SV1vrYPhCSyrM7Zh7jJuvZYpw",
  "key4": "4kkrvdzQVqfjBhA8CrzjPcHpaikZNT1H3cwyqW2Cog23KYxNTZxYX1df483L753aYR2ehWhwcgBBvCSaB77patxH",
  "key5": "22uHLs4XNx1FjpY4EX2ZJYts7pbVP68UAHpSTRcf5ALQpKtCYRK726j8a3JxxD539NN829mZefLWp9bqSYv42zvk",
  "key6": "2nPhKJfJs6tjqhv42TBZN1e67QeDLeNGi3tpm626TZV7AFNyWLz7UcSHtBi17YpLRowoqvWTevGrcqbiATWYWd2A",
  "key7": "4gzby3CXD4cUKbSL6qgiXeGtArpvCZJ35CdWqAMA2ZeFqsFB8QC18Ak8FKhNwdQmFXa4VfXzqG7xdi82r7pDHZec",
  "key8": "5XKVuCz4AetV6UfTCEWzbAZaboDgDus8JLzuCH8aHkbt9LJnyT7hrL76FkSuShCv34VnrKu6VnWwi2KgaRn8CHrz",
  "key9": "3pydasUWhBj99d2L7McYPpUTK3i6r7o96JC9tmPPWy81znb3RWZTxHT2jNTYcDqm97zWnzVkGYJnrFbES8qdjZzN",
  "key10": "DQRSvmiv1rGQ55M6CN77GSmQK4KaxTGeGp5tzF3hJkKjKVWk63kXSr4zwPBb2u1PJSBpmNEXVqcozuJkxPzfB4a",
  "key11": "5gaWht12qyvkKwjLjAmAvBS46dUj7CB9NoHwKPbUAuBiomjnUCNHMY5zyZSMfCbnSEvjyTz5oyEyp2qranQGK4ZV",
  "key12": "LtWeJnpt9PhKJgb6r9DU7WFCh9XKXQBhtRMfLX95nXmqNqbKcrnfVQxSLhRR2yKZvQg1RV2JhgGWQnRhUqmn5an",
  "key13": "4kxQakQnPYhpjgDpndzpDk4Eye5eScMA6oVsRKzFVKFMwt7FXC5SLMP2U1SumoKsXsKEYL3nrh2NEp1XNcNVfxzy",
  "key14": "5CEnTXoUTj1FgJeGRzAidDhjUujXZA12PexrtgeiDAQMZCF2DT8qbJMDg2gWC63wwuoYgCxWEThw6ALp5hvC9KLv",
  "key15": "2yYTmKi1g5QHAhskvL3X5eLGNvpLA9nhuxP1zDWUM7ooPHrL9bzAy7UcnKgSCqrmk9xiXUTaTBHyx4oiKbbjh8tF",
  "key16": "33pAZUwbbpRC1zakSXWAtJBngiriBDQKzSm1GHkNXxULGLYSC9G5j9EnFH7VpAzK1sQMmvq1jFVqLAS1TcAn4kDB",
  "key17": "3REjMEjbtxUythbxLSHYCJuFua9jD75ipjXF4GPDeJKgYVu8KkXHdZ7ebmqMa4nTQjjZDLjzEyDyrxrcjpKWx6m4",
  "key18": "5kZL3tiVy7TDHR7oAgwTKAEie6mcu11ZYYhDFTafmw7M6p5GKAJLDNKnQ4ivnwLsgae6xaUGgRhyW12bS7DKfez2",
  "key19": "5NzH2aVRhUVhiJ9eHjPfpNAHQzKnEH3ojaDiaxUHzcs4YjSRrNWdJctiQJx3ECtSE99JYksriEiWEyjLgCHmBMaB",
  "key20": "4W1nxDP8WuQDfDS3Y65uLqcYrXsxzPRHCQ3uEMC2Tzk4q2FSTBdC1H8PTqqKi42NsqgFCKfYy16TwthxhdJBF5Ux",
  "key21": "2c4Q1AJ8kNYjcj5sejSWcrXX8ujABDfTqxSYEMP6MbPZBR3BKyb5rWatp8Cabzxv2j4pPwiCmJZWBtB38hkEuKqX",
  "key22": "4NjKttz3znMRAVTMGG1krqs7PhzW3mkeh9dRKDqvRjwxcYMN798ktBTSwRLsH5sK8VEM83YpHUTnGDkh8VJEwN8v",
  "key23": "4PwXio7XYpAHZrqZawWL3XUhsB8GebqMrUhWjKTFoWsxHEgKN2FeUw7LaXSuCKYSPH4ZwP42VYHFySp34nQ7sqaF",
  "key24": "36Xv6sWag1ZtDxrJBEBVV7LmL9GQwiDT4yrr8Mcq32E4drSd23HRCr4EUw1b6wB22wr4SBTdak9KfHHtCGWxH6PM",
  "key25": "4NCnYND81xCWcA1WzgwH66U94DpmjvYPjwDFFQUgZ63LhrDyA7CGURF7pkGQzWrbAymdwd6yq8JbCPSoVz9gUdjU",
  "key26": "4z1ovoPY62MD7eZWRKeMy67xvY3iFoBS4q6awvZ64xvp6X9D7bkmR66znecXkhVDaF3pugYR44d9u655ivNaxiJZ",
  "key27": "2KbN5YNT3Ws8zAJtSbCMaDCWdhkULuPupk4Mr2fwpj9bz1FANGcso8j4uC7h1dUs5t6pkRpHGQ6W54eWkbu1viVj",
  "key28": "2yznWCDsGzach2Mz8fbcP4SXpACUP4WbVRRhAw6rq5PsgRuARHeAuMvix9mbPeXG5acvKKT7HWBQSEJGnqckVFm5",
  "key29": "38WWqhRKGjs1bsq9MHiho92npvQTUiBtC4ZbHR8v3iMydqHRsiYW4gHXBHd8iChHbanno6ax9cuD441nYqMJMXrn",
  "key30": "3uXAEQMUmqApTrX1yL7wGdtgd2XQ9dPtLbbD4ZeZxpaYLsQQ8ZJ9zWdzS5FrSYBVoiKNEDQaYkMHZi2DW6WhJWeB",
  "key31": "4ksbfE8jijQwvN82rZvXAvpcMCxwrLX78WqR7TRu56pNedkCXLaFnCeg3moPmDkV7oqP71aLf7UQPEgkNbw27bj3",
  "key32": "3jgjCK6anKom92nFHWgoFezT2dsYponeukzasF3EE5UvAdNBPVUnMG78F4DvGRoS9c8gW1warnJ3XHmjhL9c3qmF",
  "key33": "2DSGZq15ipbZxkfdCL4zP6MvmbaEBqrMTTjary1MaSgVPsVSVPMb8NwcvAGXpGiLG7Y8G7sEs2RgdXKtvLXyPxrg",
  "key34": "5AJXGeN3WUUkjkCsmz61ML5vgLWaSfkeg6QQhkUREMH3aZeiTTFL8r5CNmBqnfZ2NcoVFcDuNDPg9k5caWjFTUdz",
  "key35": "KTxvzG1sHzW12XFQvBewz8Bhw95145SKjxYGtvxcZvyJb7t9sqahcmpTAFF6pTStLKviLdEWoX3VuF38bSaiokS",
  "key36": "VtSx6Tg2nPUNuvzPEay27Dvi5GxSWzM5F3W8yQK9jg93rnMBpLorSg8ZhQCuU9F8BCDNBdb4RTs4ydDfAAWeD55",
  "key37": "463rxB6nbQ4cLNsfX7E6LfWMmrsri5zRbmc1nLf5LvGbkeaakJ9GkLKrVoPSwi2pBtoKibsG5bQs36GoHsJnsTKj",
  "key38": "Mka6CkXPpsKrKftfs8eY965kVqGcyZt75tbF43vejgmDSyRxNWuBwGD5idfCaJVRDBjiZuXvdTy55rj8gBWaWqZ",
  "key39": "5wqhpoMAV1MN8YgM2NuieHsncjYi9mXZhEuVivJfutSzLCsgz9gLjgn5LEqkHtUm3yykcb8pG3NDMWN1oiyu5HaP",
  "key40": "4ZgcAqFeaJ2Tz9ZYciU5Vbr6S5f4NSdwhCQDMxTQuLvpvW5DLBPvfBWmLXzTTvvRLrK8MPSZWxKuHicumkuR5Fcq"
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
