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
    "5z3uiuRvM1DisQfD8agwamqWxJAGoeub5Xt4BPgRQjVzb2kEpWCxDSr7uLeNr1aUb5x6RqbMz8w4MhmPjWxSmU22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uw6eZhEZguMUe2gLybkqNeSmtCKPxH2VQmmASbvDXXEo2AseKxsdkHNuqBm1cqfoBsx2rc1CQiwt2jAEiZdX7Lo",
  "key1": "tdLRNNMRRWGLnxn1WB3Ufy2ZCGohLCVJdV6wSnsaLyJtThjPx1oXbDT7ZgZtDDeEkXJQjgwdeQx5ACQvW1NPSGU",
  "key2": "4UeKC5kdUXjXnsECj2C36hZAVEzfTRRksfLcnAy5j5VQoSu7XY3LmQKrSSsHTYpq9ouJ6oca6vhqaopZipzB6X99",
  "key3": "is8YRuAaN5HAAb1VVph5aotoATQq7phTj5yuUwRnACum6AvGDGp1DTBwvWbFn5V15nxyFmkA8FNW18K9ayPNzE8",
  "key4": "3xeu1FWp7zWQuZ3Wb6zXHKzW4dtGNcews1BazHuMAikMpDstMLYw6c7951BWeLd172FHALD3AJ28vqZU4NJPUkyN",
  "key5": "42G2md1dihVuyNBFiq4ZN27u3vMNRDMC3X9hTwo83UVWVTme9zHXQoKoUGbf5AW73k5Kb1FudJZs7uRDvCK4NSGs",
  "key6": "5tV3JChhseykuMwQF1TEFmcmEYiBodvRHk5gtsz7L3XPZPi4rn48LvM6DuxVEXE4tFXSsbBWuHaRQDr5PSyhYxhu",
  "key7": "Gg8QvANxWrip5jEK8qeFR6zJfbKCpMcKhrgtVZjR34fsVY7Uj3yKm5pmZUYPNWcXhx7eQHxYZ3gQgPXdWgeF9qi",
  "key8": "4Cv58BAk7JTVDu5Twgz1HB8UxsRvoqri2dztRSAj5ncqkMPZzBAoFz8yTzvxJjXq5ZwRFYKpj6SotAHBzTmNX8Yp",
  "key9": "Vp32f5LDzWSfSPPj2xwSmmLaLE2sgFf788f6SwdxwZpeDq8tRxaZ6syNsufVYPFxg17rj7JBZG2CyCNxaMczykw",
  "key10": "2z4uKYSKExhobwiNLyuQet7PKfUN9sF4Cbn8m2ChRoc6YwBzp4xTeGxzjZhtNFwQR7HLyhQgvBubiT3JrFxFWZpY",
  "key11": "37EaCpDb4G51yhHxR723piUuHi3TcggAoKEFD1ovhDbYKUvMkM7x11NnPbxmYKtpcBJ5jRv2HXn6oLkocLQHosaY",
  "key12": "49D4iBvH21ej87seFZ37ca1dPyfojKNHjzSDc4v7wNx8UBuguYFVH8NvoHH7Ear1Fv14iamqn3bB6ptE7jXTV31E",
  "key13": "ugnVWKyzvVvccVd8g1k8aN4ENeGjMv4yzKNjanmv2Ww6EhZmrRCgvBdjsCi7byJcniMsrWD9bUd8VJRn2EFVojh",
  "key14": "4t3MmZRNczpsJ4G8F2irEmbuWVVMpLDr2E8D2AovSzRQSry3sZKQ6me7onDnHQFCPiozPyuJTQwNycV6MZAsTEqT",
  "key15": "39HJiq9uJvsfGP2D1Z2E6K854yEsfxenfJ1tAFSWS5UGKP2nuahWozwRwkda6ZUgvazZw9wgu7a6kGWZfT3wd61R",
  "key16": "2xMdo46fXremEH12wWHCStSwpBND6NDpNUtNPpQ8r57q1Ehzk4cAqmGa765Yg6jG13fkoaVZjJHCww7k4o6YyBKh",
  "key17": "5FbBg54o3aTEr6vqBb6m7akGrYr7TiGxeuUW5JsYLXNGHW6BuTxDLbZaP6QW71GVtjM7oMGt2RpGM3TQqNPkDvGU",
  "key18": "235jfa1xMnCSwubDyweVtknB69boe9tRXrpfSWJuu244rKNtPMijh9dyNS4h4V3mJs1yqNhiSsC7M8LTCnmRW2yV",
  "key19": "3SD545TYgT3j2zLqesj6x7wCxQuneNtVUSf4mrQQmtYXr8vz6uZrBTrsgGhjGvpcAvQDZwP1zW8ULGLKUqjp6Rxa",
  "key20": "62rmV7vDCNg1xWDENvCEjFKMXn4ZjaWKGaRFiCv3kqkvt6UGZLaHc3A1jiY8LRfBWWVrLVX819WtA1CFWM9HJxCk",
  "key21": "3iSjJr1EkcNRjQQVupRGJxL6S7NVgjXuVmy5YBpax9PcvQzNJp5hkJFseAuJefjp48Gerp6Ep4mM6mMoEVzHCztM",
  "key22": "3DpFM2S2dvWm5BB7zwWJbXrFJkKAtfg3Fo2vndddDRYsr2nNrMvGMdaLGKeYUqHf6p2VFxFFX4PSo9YJ96g4ReKD",
  "key23": "4gXrykpaWkmEjLp8y3VnPSkJp9Bqh4dgWBp85fZn7NPKvBhfyjwgvr7GiX2ejyEYoptNGzFrg23n6RjxEWmzoKBe",
  "key24": "39yHRteXM9FjT8RB4ouK6Uyti2oYbrD5PZrgECcpEjWPNFEHpKsP4pmsRaZAnFj7ALmjFCDESZo8zY3gS41yJw1b",
  "key25": "XGXa2NU17g1ox9HwLvUjbEnG3XKgHdCc8UNzb5gV87zfK59rd8r8fmpTc8eGTRTvi8vLCP9BohRyutiZAEswof3",
  "key26": "4NcNwwTyAwW6kATRM9rRyZq2a7HrW4eoBA8ThAMnHfJTLaEA9ydq3Dse5bwY62k7iUsjcF1PT5fGgnFTWGYytTBi",
  "key27": "CtQSmJmLwAojn1JAj4dArYD6opwiEuXYjK59uzKPY5zxBYqZYFq3eC3ZVHxWGviE4xVDwtRYYmqqa8jVDBkFZho",
  "key28": "3EpDsuECcxduSaYVZ4vdGy29WW8bn4PP7VkGGQHQW74xUD62C9qrEABrU9Hf2iNMb1FoudnxvTALh186MthwKPX2",
  "key29": "jvM76k8CazGABRXkKiaw9Xrodi9xz8JZ8YkWwNV9jTYLoq6wPvQ94BsX2j8aCSAhuq1w1bhowEBfGQS9CpXTsL5",
  "key30": "2ZA2H2TN8g1fHgG8NagiFHePvU2TLPcB6F7Yu8uEN81PgnF8s1WuSfzo3V1yaYLLY2ojdJ7q7TcAf5ktA9BPSs5G",
  "key31": "2pJJ7CMR2J5fqmzpaqibA9WK1bJrgnLMQymufUM6DortkRHAXKxPz9jiJ1GSipwqjbNi5Y7GbLdhaEjv2sbrgZ6S",
  "key32": "2aErR3RF5d98JANu7LM1V6NGeKHBHwR3okRDRGxoKxruz7KRLxZv4CP1HyeU1MLLwpenBtvLVCRdWBPcfyNyTzeN",
  "key33": "4xEWjKvCqxSPAuRXijyATq641hfd3qmEQjjxnWHfZa961AfH3qbW65LZFMQkr3d6uvToZVcQB4q22CapwrccUw2U",
  "key34": "4EZMTbNsZ8TCXJQb3npec52TcS2a1Lq85A8YGd6PJCefzxVgZdd4dcPPJv2kMKy6x4zDgVrJpwNRDamRstwxgnDo",
  "key35": "2Zv6VsjdnAwFShFg2scvTF6ga2rHukuutoK6bmoKfiSLq1qNQ7fNpgoK4CQjvPNrY7Dm78sPC2f9KNrrGLYEwJvP",
  "key36": "2V9nWLbQY392Sy6zT3JydsT5oFBbwnLDgSTTFRtxcciZoWzApTdbPQ1rznuy3gQ9TUVTHzBi7cMgJYoyQYv81i1o",
  "key37": "5Sr2dNKXDFmujpFcVoi1rA1jvgjxMnLcUumtLJLn9CFFhiQVrZx1s1zAXMkTLhK8s9GZE72gnMyZMe8Pmu2QoZc2",
  "key38": "2e24uS8yZT4Tr2gi6PmiS5TSeeJoYUxB4Su4XX8aainaug7xTzPAm1KxeDyp9V6tPwX1S76MXtKB8gvUqYGeAFcn",
  "key39": "8ZHu1VUtc7eGGowadDy2b2bye2dPDFXhViB4gbz6a1wnjYyQAh2dt9PgDvcmnYsLZeQiTpa5AX3GwK4972cUupX",
  "key40": "34nJLeTQLVDuSkG9BfT5s4z3XnAcCQnYNLT2mvnCVPgTkYaL3iKYT45bqSZJt1zHhmvSM2d96JNrSqAd8QN67qjH",
  "key41": "2eoFZxyAEvyXVcsVP9omLpuSSeASwp6n8A3cBiBSniDSDR9NpWQQW3DDBqqLGKyNRVLPWWsdarNCN4kxo8z2iYza",
  "key42": "4XGyVeooVmetwUK1Mddoky8Jpe7SpyGJhgE8PHe8S8M4TBKX18ZYFBGKV4Ek2Rji9e4kNixrBBav2KLZVABpEPbZ",
  "key43": "4cKtF8TpLPFRJXLmWpSqDZt7BRtnLQN5xXbhKok8gBCMHPG4GDv2Yski6pbTP2fVJyVrXQJSPafHUrkx2YvoYCXM",
  "key44": "5FzfM37Zf7jStvQTxrHHCZHcp7h8Rc1Bg4CCWfVNcaDPPFe5nExr9sWQhDdW3UzEKu6ivVm4uPoUQDrSTsntYzR",
  "key45": "3v9SWob28fiTwoasvuBqbgkpKvLkeD6D3apHxDgF5rEv7p3oGmxAKcgejmUJBgTRpc9RWdFMp8QUSXZ2zgx1fUB1",
  "key46": "4M5TXA74fYb1yyVio7e3dbTFST1Lfv1Jwhdi1VQBRTm7EL8W9eNrajoWqDLd1kemf8w3UF5Hs3Gj3xPxbagkYw6M",
  "key47": "3bjS7Fr8c87Pai2waQw89CpbvC1uPrdpdqRpgkDbckyMDmtD4c8tQCKzN8QYM49Agify6RYtGSggLfBPtJfsqYZD",
  "key48": "4ahzVnqPqZntJMdG4Km5Sg1MSKmHGYEuz3b4pG3gZJNsp9f1zxS8vL6Zc3e8CewgEMjZioSaMFs3XM9McYdn142F"
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
