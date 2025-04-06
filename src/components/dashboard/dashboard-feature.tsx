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
    "5144B5U4pnVU9qg6NriuLv8Z1LZAk7MgxnkwgQHgvpsECVd3EBdqeQG6Ugp4B3utaNmQNybyVanpq7KuBqv3mtRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzM3hgEp1UkfvEJVi5onhckRkwdQ2KiHZV1WV4G4HzEbi3xJmno4YSPfwE5uDFvE1zzbp8KaAGUK9fdF3TKKEMX",
  "key1": "25y6U335tSqGXAsQkP7YwroGfc7PTZxA8eefT251J1yEiQTkfyZn6vpLUdYZxEXU7KWAkpajESk2QPtRK5oNocWE",
  "key2": "Pgrhs1yx4Y5CcmAdzeZXmCsH4eQ5jiCLTfzWXvueTeMFuzjjngspPVcWi22WerZaq5pAW9WXSDWHD8SmDfTzjtM",
  "key3": "52sjnPViN5RRzLPLxJrwtSvmr74Q68ZZPwdsiBH25h1CKgzFpkWvRdQVT1rMeMHMnMQdDRBu9VYAZnvokxn1iSD3",
  "key4": "48fzAmtzdoVyHv1iMNXowFc9McPXf4QczoWwkiCyyVNAFAsPSAdyKujFm7i424SW19MdqHM74UPcJrh9PWJCGZHp",
  "key5": "4rdFFBk1yDRJ9yhg98YbK98HAoAgW3AU6bR5H58mAAg8z4nQWqZ1NnJr3X8weL6reRB3iTqjzS1guRyL95AoJeZt",
  "key6": "27aQxY1zKzPTySFmpCxWhKa3YoYwntgftxDSmhXMHMkn4wVLdB3eFkxTTpEPSHGA1Fyy6GHytK15nxtphSFYs5cu",
  "key7": "67P8frDfWyQ2B4GU9modGcmVFE47vyPoZKmEyGAyyEG98bR3eBnKgHHwKMs2xmbZeoq6T6NKJweKSsKZmfRWqbKx",
  "key8": "RNM86E3FSjYpgww9MwsB1ZBt5DPHgWZg4SNt49rkNwXHxe5VdfEEWK5FM9UbuKMCMoUCTBCYWbWXWGr5CfMQvV7",
  "key9": "5cmRCWtV6CtZ1gxcBYYRdKe7fQN24oeLQuiNfSkZMUFENSUbL7dcmhUbJCo3kq1sLrA1NKKgXeRkwDnUai6R8nDr",
  "key10": "2EHnbQWg9siwmM974aaiSNHHwJCycPLoHExShX1qwvkKgBcYGzNKBMXjmecFgzf5Mxz6uqA4TtMWjiYQDJ3XB77b",
  "key11": "4jaoSwa9yhKZvvSVtHTt7U19ArfdwA1QeGioBdFoRbntA1MR8LMi5yBboDPPiVMssHk97gQoKn8w1mTBXJ5AkpNu",
  "key12": "3W49LMbH3Ap8q9S3Do87XqAPSzCNS7RqP24J3VN5F4718EH9kbB9Gm5Cfrnd8qmgYEs9hUmTt67tPQ3KZhG9XX5N",
  "key13": "58ma57Jao6ntXBtkDLU2jmTDH5HqjKyucoA51c4ijk7eQ7zJDgopeKJ1oVvtWg3poanmortHYQTCSgDWGuBBeaGA",
  "key14": "49fAVsCSbMmwEt5AXF32GwgupWxeU2CVMifA3DsMN5x9DFVtYzxMZ654KzTkQCp2VQcv6juHpwr58cBxBQc9XsjH",
  "key15": "5HwzLTxWZv8z6k7ZjxHaQDK8t4pQMdGoRCgTSQvCqDu3EvisX2ae3gfoRTYVm11u9YwVuH6un55Sew9kcJogPpZc",
  "key16": "5aAE3kTwh8c6uLVRbK9CM5CwAUjP1DwihnCRxrpjEXNSbHf1P7nQqv65uYPZRRVEiciKmFNmTQDwtsw5o3eLAbJ2",
  "key17": "3h9ghVbPManBi5aB8aY9AqmY5dPqWZt5ZXBwQag2PqrPPU7dc67WZTzyBZrhCiN2hoMBgDnZ9cBMCCRKazgnSeb1",
  "key18": "4AmPLAViDUFspdPLx6zBWummpbUNCR7NMHtdvXs1jiLXy1Xd8vzyFx5ag1NofGMFTLN2s4LJPufPBKZ1LUQCNcr3",
  "key19": "4GwZJYvdYEYV9J3BXMwkrCHzaxc8dLwSvqLddNyng2JCYvZgRLzLQVD9nykSsjj1zdjnPYFoVh2qyySArHz7KSPP",
  "key20": "3rNsSnXjkXkYLThh4QgS2UYWFkZjSf96kohtezoGtdwDEVmVAhdtb3W7zVLYU4xS94nzivxvGPm6mbknJciAwUdE",
  "key21": "2Nxhby1ooKHp8SWz5WEAfE1SW4KTYW7SZ39Kjw863xRuzDtpSgUHckAwaBX9XvgqJtzfuuTykBd7c32BVSmLvRM6",
  "key22": "51dHcDdV2moTfjY21m8F3NW6rK2S82WxRWMU9NZFaRFnMtBvmctSDz8hqdBB6FW9zzS4U1zet6HyaxTb281qsWUH",
  "key23": "4hW5cjm2FT3oFM6iX6up3AAm8wQjRJEL3iAuZahW7ZjSMBFdhaiBbjfDhYE1uo5ujDgw7TUu6bEm932DK5tGFuv4",
  "key24": "48ngs9wy3vmD3B7vD1MCJbDHtcwB2V3w9TSaXSWtJistGqwjMgFveeXYRupqSy4mBYMXRBxMPmD8Q33EinbzeE6T",
  "key25": "2VLZodTKN1Ggo5GquidcdTfPA44HHjfnrsHWsgBRWpgCU1yE3Bd5XoP21J1E3rAftGxCcKLBj2MiddfziFzneuNZ",
  "key26": "3WJr5aWnNctFSjzBq1dp9QEoFaNWkXiAUvUFR3JoGbNAoMWBkg2ta6REdbtJVsiss1kKaA9oCC9VzzNyeoMtkxT6",
  "key27": "5nWt1CY6BRGUsATeSJiPrsjHKdkwqZzS1EBsATSteBMhYzeGB5hWhxbF5F6w4wz4AwpjNLXvsJ6cEFo6ok7akTW4",
  "key28": "4f3bEaLPCQVRneEFVJk92bQbGA9Zk2LD51G488KjyMCVpBsr8R9vfmeCHNQz6S5GNDtTvMxEsQGUU7VJLoPNaYjU",
  "key29": "WALCzvvXSMiUMsSkdrx8MPUhBT7CmmR7omupeA1ZgrZTuSZe9pLwm98qFMJoNwQtVPeuL6KEs3F4b3vs1cKJJfA",
  "key30": "xd2FQwWJPoKBTZhS1CyBTbUPVpQgG3g3vwnZwSVD3L59HVncvHUdr4ktu5qLcEgySbszCLGjQ1Uuxt1E5DATW8b",
  "key31": "5HPX3DVvRYF8XLRYBFZL6aNd5fvmFaQeaReZyRVfECpJU8QM46WJihZXVuxfh3JSKRVtcojemyCjiejqaofmQ8nA",
  "key32": "2xjibCXshowJuGCU9Qqz4poN57i75oHVf6zicHvXD1fukhVKeUV9JTQ5436d3sWbR9GqZRyepEsEnohg4X29YcRh",
  "key33": "5KCSsAtnGG3GZAaS16YMhgcBf42EPVdfHgx2rJdNrioFrRfnhF3iQPSBVsPS5PpeY4bZF5Doihan796KCPXUbm7Z",
  "key34": "3kn6QXGWarVUnhQzyMjfRobGtdFsgbEW1VW2984XkPrAUEMH5WTa9nmhPPtsdW5dbhJ7niKyhERhpErG6hQKDfsT",
  "key35": "3a6zf9DqQXxjEJdhiunPC7wnKDtFRM1qgetwMD8N8zqsCHaLBrCt9jHwD2xgibBuLec2oVNBD3fJfNetX8GiZFH4",
  "key36": "2CbTsCW9ikvh2UCNXGGRqZwKq8qEr827ZdPEzYH1yokpSDqwzqqvMoPYHqkxy2eroySxrj16yJzq8ahFMQK5gYKs",
  "key37": "4c7wDDFiKZ6Gnx6pEPZhrW9LsmR2wyt3Jqfr4fiN8eQvHAxNn1DMCEQ8LWRY7egKapCGAgmJov6VgCj6Gm8CoLoz",
  "key38": "3dxTWEadvDk87ZnC9iwby2pMoTzrp2QFvK8py8ebCSyTQ9fJkt9rAtcgH5MUmhAFDbcXiz9PfmSKB8frtiCwWw51",
  "key39": "54KwBamPXKJP6c6x5J4jwx41Fxh4UBvPkHGo8zxXbA6P9i2FvtoPDSMitwiZUVtWAzE2U4mMPXKo3WSTeVsVvGTE",
  "key40": "cxUpx5E8JGnbkF71oJP9n7C2wVdESHs3L4qBTziftEUqi3kCaBhFvFxNAwCWp6ExTn8ntB775w2yTSnKVYUno4k",
  "key41": "3erymfnzD3fAD7VRQ1ofL1xyhSwiACGYs2uaJRTn6mKMfAnUfhndbMYZVFsQWAMM49rKz33QRrz5bqKAJMEgvUez",
  "key42": "2wUTCk7gJgfqkZZm6cRMmE4UeE68Ucouq53qJTAo7Ubn5y2sbcAXsG7DSh8E7d1hkZL4pxJjuNAcoveLwemD9yBj",
  "key43": "4VBQx8S6Yt5Yjs5fFFrzj4D5AU2bofsL2JAkB8dZnaNbiovQsDeV2FtA7KMr3zhC5DnM6UyBJyzKP9rcNm1knTGF",
  "key44": "2VA4sXvGQGVgZbquAyJ2hdNsDL2f37Zc3js3MKFzKr8v6Yn8mRd3a5dvV9vVnUPpYidJpm6KZbnsK95JJArKwjR7",
  "key45": "2q3ypHjALV8KvxG9nHpngNYSNM1ozustwJo9KXwVRUnPQFrXv55ktksXZTwFqefUvE92bs9kAvebpFMtaYbyTzZp",
  "key46": "KmhCy9qXRwu8xzUG6EN4Jhp25ZcfTfP8mNjQdJ4Ujdp7ChLYF9Qj4ZnzVnhvkxdL52nKViZ4w6JW7nJJ2AUrmD8",
  "key47": "3VjkFtYKDrxH8Z7wipWvcghNEv8VpQdRP3oYuWmd2CJdV4xVsrDzfKVkrX9jtBiTE58cTRC2fbi2qFKMxnS7zFBh",
  "key48": "DgiKQEmTMmQGySggNcH8J67eqJTgiQdrhjLwkJhmf3aHN9hvZYRx5YJfRiLWSuCQ6TrXc7i5EgVqNXy8xUMqLeG"
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
