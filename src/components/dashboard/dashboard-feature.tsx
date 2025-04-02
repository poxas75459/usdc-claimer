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
    "2jmt4MktnJn3kHRrS9UCf5JhysSjKcC2T1LoUoicQv8F9xWxfEBvxhwotgzFTWWwfjmCpDkpFZnEUArKqzVv4caH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCsF3ytYz44bXmrcu7uxRaABdodP4d54iGLqiEMoLk95sLA1feaLyey2BtymNj9GnJxbie4d4WvoFW7fyYScPum",
  "key1": "3Rf3YiRE4YeJD6wXkYNYTf3jrhag8aUHc7SFPSA9nwbPAxswK8fqRxNrpxAigrKyzfiH1njYbF2m51VgURhMj5YD",
  "key2": "ZxQj1UJSRRjXAFvRToQQhVRPpHo17ErfDT4Jbv1tbmpxBsvrA1kKtRvrZKqSxgcDtCXXUZvex6So4yrPgQuCfsu",
  "key3": "GdWj1dGYcbj2vRWVnhbeV1DapMaupFwFWVKBcjQ1AE5DSV3ms2ZHiruU9MhRxsD8Z9bpS3V3gTYmU6YQr4gbd4H",
  "key4": "5KZf7i6WooDhruLmHe5G1AyjmHFLcspqEZHZHvFSPZcH1UuPUUqNjtRygcXGHs2eEhd1sn8nW72NnNJW5NmW2XWw",
  "key5": "2yH449kWLoHUgAYsUfKrzAcydzXa6x4zEy6D8vp1CvDh4PgqWNdmRAtoZk5TUNKB4FCA1Xo3KgPbsNytQ5UARirn",
  "key6": "tiWdGSmz3rRsqh4dCho1KfHz2AVBTG4RkP5gDqDU16AeMZynMkQBjhs9aFLknUBcC9pXbZBfGaavyrCaqiySUoa",
  "key7": "5tYb8WoYcDGvYkXGu4NYhwck9ZokDiukNoQhwbtbgfPfP9tuQ1YUCsApHAdmFgqqPkPqwSCDfJbX77CeD3hm7Dch",
  "key8": "3q6pUEfMNkDVQsmac44JiJhR1NC4hGZ5Hp8taYzrgwd8kiNVw2SvzsJQsVaJ79DoJZqcDr2tqWojBg8EUyG9GbkR",
  "key9": "FsEXhd5DAHG2ay9HLgNDde6Kdfb3v7Bc6GsMxK5szh3Bgx2uqCBkYNzjtbfGTzF8WuV3ymiJoXyKTC1tFJJh4ys",
  "key10": "2R4dVx58kvQWgThvCmYAwiiUw7CUmYd8my2LcZVc4H6qywqrZEgDNm7Az9cJS7xchYcEViAEcAoRBpjFj5MDTWT5",
  "key11": "URACXWKK9ZVDjBkzfevzBC4TEkZrayWt7ViqZkqmv1J1FqUuRsDwoqbhPRqMCGbiosr9ybwyJYEyVxLW2Rhsayh",
  "key12": "31Pnusx2741mjvpoC9HUid9CwTHGb5QVaiCMJKofYmu26cf4gcS677qUN1hjdfU6pu7DhSVPHa33y7gz9giXikSY",
  "key13": "3fXMnsr7mBhpQj9jyxRmUW8voDKxcXaSLVH1f3TBRjhuLVFHA3cYguLELRRdLsEe8DD4BkpnYGSpxtwxFrCdZrv3",
  "key14": "23NAGwMdVYaqysYrn3VFU9jzWK1vKVRxWjFNf72xvZEaBGkTdFAvqA5JvQcsmxiUhLC2KLFdU2pvnMh1mXt7iKtH",
  "key15": "4EYRQfrHSyDRgaHf2F2McdUvHaMEd9dqVUmoqfWmyFEEw3TWB6fft33X8x4Vv1KYoBvuJi43hy4nwaSbJp5f3GQf",
  "key16": "2BiRNWV9iYRg73iccV17d9owsj1yKVrbgf94zJRy2P4WhpRVpjy1Xve488ZKQWnLiVD2qybaAsT8cnwnpmY9LVun",
  "key17": "4foieyj4cdKWa7npf12EmxdQVGYFamgLJLa9fBpzfaZtTCxfTAFPaHH2GXczBx6pbPEXUoKc7qhyYH9W5yNkbUTQ",
  "key18": "3uukjbpTHqmNR3Er96fUrKR8FEquFc8VZhaZfe8DSpEheuDM5Jgdj9zkFg3K7DWuUCtDGBKX5uRm1xgJPTr77xBy",
  "key19": "1ApKUcG8jNFYUXt3zQdxm97BG9tmouutB8hRwEhgvcqErtzX3XdXVSGgh1ZcsHdJE3DwiAco2BSaZ7k9zBcyer1",
  "key20": "3S3u1CaMSzzkDpvak7Hytc8vpHPW46Pp8ahfo2wBdFTKn6axW9c8u5VL6zxtmJ51JrgEqPMM4QAWzvAj6Pa7KLqT",
  "key21": "3geqGcUBaJaTEMZAueMi1WdT38Wef9BLvWXoAmQBQ2hR9RnC1kERfTvcMdJ4Ygof51g7ecahjEZrvBiZmGtojGYQ",
  "key22": "3ZxgQAoKEWuN29yXJbMikJBRpjfPriYpSnUcsfAM28NdJxtutF2crNcp46Rd9o9nxAB9RwtRrVfzezZ8bZHRzYW2",
  "key23": "5C33Aq8qX4Yfj2tgLdBcFjmRGtE2arDzeUem5VotBNvGeDGH9XZy4zqwhG3EDcHUmaDWUcFiAQ1Bg9p4J1i6Lmi8",
  "key24": "38p6BWBPzBXjZ6UNeWVnBNYchFP5nkGawhYMmCu3EkAwPcoumLUQz71tGfVarTBh4GNe2wnCfoZnAYoRWaf1XmP8",
  "key25": "dPXGVLMkrCMkDJdAhQeJX53ubybaG5j8E5dujTC752KJ34MTydEpUzypQSts3TkgCm87KoKT3g2fNMoBrr8GRTw",
  "key26": "2dLSznCnn1WP5PQFUp9saRq6ktMfnMkB18cach8vpKZXofTSJeqd31zj6nDGMb2KpzHZ5mhDqvzEzEnuB8pvPTar",
  "key27": "5CETyid2SeaydtaxfX82V9GLtAHEf2Ss8R7k72BwmGxaxZ1jmp6ZQgavj7ERgegvxerBzw268JDrPjuR3qTYhMXo",
  "key28": "WwvnrhTcQ63pZgHBJm6AW56ohqBrf733rWPqrJKsjLsEHcJXoH4yhth1K1myBo6u3W5a859trtYcM91VPnUAt8R",
  "key29": "26TTxSU1RveKE7vJBHLnKAdrMA8DQaVq2c36UM7NynrnYUYkCrWFQ5rRZb25A7Yy6UjHCEYwufj5zVBeNedVkTWp",
  "key30": "4v7mzqZYk5P8Eoe9QsAqi8hsi949MBVerSsASHyJSRPwjMfRNMzDa7SF5kvm67DKm9vG5WF5E2mZLWh37d2oHH28",
  "key31": "YyUZcs8bZ2wCqzUCYh7v3LDKnaSKP48VW3RPSQGxnLucY5tjGEtRaAYBrSz16JUcCsqtFqjtnq2mPGXuUA8MqQP",
  "key32": "2meswy3eMsjQwgmX6YbLrM6GGunvDxd5cTMP3X9bYjRgmvYzJCR6je6Nt36fPPWx2d1LY3VHu3DPGiuMeeAiQjCL",
  "key33": "3u6nbHj7q5JwfNin8FkwgW75DtBM2U3hemuBvPZd3MAsJs6wGNCeLXq1vkroeeWiRJuSxNKkMTTZzFb6PH34mVH7",
  "key34": "6cz1VSwCddYdwzbdeJpj47eH45gKvQQ6NjjaZkGXiEgkjQcWeDDQXT6cXM7GgbS8PVLBkPfnoW8SDQtnB2W52JP",
  "key35": "5CC88vXZdFCdkH2pxNrMqbk978bGPLKcbzh9F7TUMXvFprhM8swbRw7yFMQYP7LamCo9UwejuZehq7jAkFnEJiPw",
  "key36": "3qtjQ7gEnS8ZoAtnykznjxcBeNSUAa3TcKcUNRwvEHkJFYfhL9xCcm3Bby1byDpBYLvZgr7q3fi36i2oCU4Rn6Sa",
  "key37": "4dnj3QvpxsqYjCac5rkLk9WLnDqGAJK4Yd1B8RSXK1Qsoj5p94Pg8SC8taBndVxz8ooqxJwR5VKJey6RAeSAwDYt",
  "key38": "41RM4J24rXRAy4PtECmgpqMv6Cd8PSYTh9owD237HQBdgwBdqU4UFWqAsjRChQoEiVWJg9i2j2HuURkDhJcAan54",
  "key39": "64XrsR87nYq84M4V3NWfncHGSzfVsx3pyin4yN8jVbeNv4jWyitYyNhEcw2NbqzLS5YsTLTXrrB4qFvauyJfivgR",
  "key40": "4Vrzkq75wvmjaTmnmcxWp2aDjoVxgGshvaVkQD7iGjexDgjKNkW9zHRbALhYQbkT9WUwEZLUKX3zWz5T9oBTe4GU",
  "key41": "JSVERzJ5X9nHuEPjJbiWPZMcdLkHenEPSUsfmdDkRkyQbkvHjBHz5nYKhX2TGqtsnV5u74k5Wg5i61hrgMNm5UV"
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
