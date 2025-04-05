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
    "38P4uABT6GfRmttxW65s6z9tnukUPBg3oxCBCp5BpoccCJLyDo4xB6AkQ5R6iW3vwYd35MsHUQnnW1E7xrLWLJK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dSA9ximZVP9KaxJDA8jx5JCNCcK5XM8qHQmMyCsF9FabecAzWRHrESr2K939yynQEcmyAU12ZeANdCmb1kHgCFq",
  "key1": "hEdZq1nHF7nsZozHdY9VpeGTXWCnQTy2UE7vFxMMAWXwtpY9M3HjTsXTxyN7oTTyfEEMRdoUCUApexFu62k7iwP",
  "key2": "4FVQMnaLVzHt2NGC4K4uFavWftpEhAsbYq9LzcxZmCsuKPCndkAqrmNbrL2zuPCmSG84en6qJAvv4mnzmYAMmUQR",
  "key3": "62iGHKLKi8ZzKDQYu2DwdHj3W6Ug3ibd1kUd7d8dAosTwqaReDxcR5yHAn6XSerANA9UjEHeEHwXQ4ZPjrnjv9ke",
  "key4": "4SLZg5pD7zkZNvZ9RjUKUtPoZXgYz5vx8qWVsFSnYahmUZcqHwpzeDQYnuLgz1DYpxPk6FqZCKpJev992dA56YKx",
  "key5": "4ZbRhpJeDvdyhVvar8CTPZrbwiQjmYyP7CFKeDCGQbiyFB651f34NG2SV7uiHKW1qj3Av8zJBJboPvBsjnAoRgSb",
  "key6": "PuMCveZ2U1WE4Ve4SqBhT1svbMKk6WSDmKFJqhFgbkeG5FswmH1cmLXgpH43M89ZWvgK4ihB6WLMgL7fDLRHT4f",
  "key7": "4uhM2kjpDYLeSbbciJu4fwdHjQoy2qEQPUHJ2rCPgSeKXVnxMo1Uq7UMzdU2jaXiY31DLUHYeQo45s9uiAav92V1",
  "key8": "5HYLtzPLbk7gXneBc6kYRvk8NViE6vcSDVC7ovQC2q7PadhRxhFbinRaGQniHwaBBKQw8VAYykwGV8phhhrNn1PJ",
  "key9": "3a2Wdjk4SmXCVGJLZQAWB1PjPTnQ6yUEapMdedGE8GU4aXNWETYhJYKaaZcjzhhrC1exfR4Ssoqy94PFAvSJEm6s",
  "key10": "3UbGDTjtGynP9AVd3gCLTTmJWtNssfZ7gmRwqbTAbmkskiHx2DRs5xBw6gQiyCrFddywsyzHLP3Jo8Qc6iYaEhUU",
  "key11": "5MFy6uDonZMMbK1z77vdpAVp2KE83S5Pn6KvQNV8iYG4XLpmnb32eASKNFvNzCDyUrJjAwpYtTTr7vHDGKGfU5rH",
  "key12": "3teBWuhLQTnCYMdomdw567Q4QH7TbKYPSpmZ2ztfEpeKQJy3okE4cWnWVe9WvCxTasVfavufufjrHhBiAoYqBjTP",
  "key13": "EU41KDrhkt4H8HHaJoA1mkq8McTZNmfzQHRUxgQgAaBs8484aHby4wGYfTDAxPq8mxiAgcD93iJZZr3XhxkhYKj",
  "key14": "WdLDPLuRJVxPygQZzSkJTi8MbKFpWPFh1ZNXbiXNzDRuPXhQgjetTd7dqEZDBwGUKgCcU6LUACS29KsQhkzWCoq",
  "key15": "2ctvc1WqiPU6LfTSFmZvmujTLEnRAc2515nmCVZnCNWBjMMEh8HzNYvt9v73ppNKt5z2CQ7K7TXsy1vsdmDE3Lxf",
  "key16": "e9X7wQ6TiiFpQgySXM5jKVShyWtkfByncgV7awDXGafu2iUZRBPdeQrBpcUcb7JrafPbGCJQXH9F1axyPTwtrFN",
  "key17": "3JPCec5Df8u2zx63PjB4Gxd4JXcvN5xfGtXPAy9sLcxBu4ck5LYuSJjJZ2q71YrEqfMRrP77QZuay36HhBa9Erim",
  "key18": "5C2BpSd2w7c791QVCJ23i9dhUpdwGTcrQ4URnynWVpPQnK5A6ndWWm9fYJ4kwS3a5xcu7Rd3ZaAjwtanfukBuPFg",
  "key19": "4cLw9pCbnGKraBLQNRgbNpWA78pWtzb2uwpZxo6D7d7nq6R9rb1H4ciyMe8QHCU79JsQHm5hcbpW46bnbDztReyt",
  "key20": "3qfCvxowZAh2NuHzEKnZtVefPYMWwFCA7mEnXmw4zHU7srooQgjfEuhC5Ri23WdPm17aENBcUCPm3tBhPznGCzY8",
  "key21": "ZGgXkXdZuJhxGmfFaZyRhYWpRs6WPjGondnpTT8AX8JRrgQMsiaUwHqg6Vs8wvH8Eq21kz2hu5EB3udcFQ9KnWD",
  "key22": "58fYf3fhTCdzgbWwoyPja4UZRpHBh2cpmfnJSScaRsaB8pUnfzkDoFBAEt7go6nxLYiM6XWn96tyC7DaAcTUYDCp",
  "key23": "FHuTRd3N23XC9q15FCu7qetm2pmNnZ2pRKHRzT4YamAe8YCfNU4GQL8xEB7zDZkjTUs9RgrPmB4m2Jm7RAd4fRE",
  "key24": "231n2JtyJo3v5G4CprfnJG59qsQvSihfvPH1VU4RJKcn8MEjR9LyG1hNHcGYbHkRycSCiLpMXYRCq8WE19rxmjVL",
  "key25": "5HgnzH1oR4gttm19Euc3zzTVnzNcSxCBuY3HVEsRNKEzp25uASp4c9VTzMfjwBtEoxPqbZCja1LSC5UgXqKo4kFJ",
  "key26": "Vzqoi7qtPFHAjuzk7r94sMvhUhcT7PqxPW1GRhZW9KeqNY3dp24w6s6Kobkaq7vRkLMqGighfeZ6puq1n2MSjyK",
  "key27": "zveMwZ2G1Vw5GsjgEuSYtW4SePFPoWUTAAABamxJu7VxvZShjoB3sCw5qLbFjLXJVuDC2S6ExweDroxSdWXvscW",
  "key28": "3ZX1sS53QqmLrNh6Ci9k4UHZr8zFPGaznrWPSeFf2XZJnLEofZ4AUkuUPcnr3CPeGhc7johbAFZLYWWYA6Do1XEf",
  "key29": "rNUmc8GNTiQY8uSwJiUpVUuU9N8p6aT4pbYqNCKnpncmwUAwz5J8UkpNGK8DjUgLkXbYNxhEwTt2BoNgdkcCXt1",
  "key30": "27v3YDKbN1GQrvKoHYSpkWyEoA9ySvZWHWSyFayQs8WXVZDrmKt6ZU48D3EcTsdTTYzJNUxHX22Hy7drM8fN3xKz",
  "key31": "35PwNqypRGk7FRi79bWET2a6pMa6Puv7PGGcAb1GvNdgUazHcSx9S6MX2egqHThCPmhLpRakpd6cTzpUvRsykebe",
  "key32": "48nRicProNSCNCS2xjhxg3VqCCgUQAstgR2LpSjWoPch4RvSBfKh3VuxiJYYxQ9G7RsYV4nj8joHFQ71na3iTgjy",
  "key33": "4Wiwhms83sSgVnB463XZ6bggcVii5PeF9xSzQi9CSyFDfmaprjyhuu7XcNw5zJ5DGEpq8HXFBrwm6S28hD8mRzTk",
  "key34": "4NB7HX5UjM5zSwKNN5JFDUkFY4HBMsjQVH5M9kkopXUELizjPEgX8bh3JgxeTWGYpJQXn2ZgCJ6DSgz2fq25EzFj",
  "key35": "NXKivAQPrErSGZvsGBdRFsANy2yNYFkDtpjQxYVgy6mhBnskHk8NgrM9iCxPAwGewDRbm5CY8rX7AvWnAA3nMVB",
  "key36": "3bG6kMF2wEW2tkV6R2WRAKUA7ey89FMKngU6YYdEgxz9ehhfuKxeA1r6bAT5mkT4fubWQ1ebvxEJFEdUxS1PL32C",
  "key37": "5MCXuHoREAgMjf4VaCuaY7kjBxboWx1UnNtUgtPm6imJCePz8c39RBJ4XagUB8Lmtp7edmBYevhAWusy1hTgK8Ea"
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
