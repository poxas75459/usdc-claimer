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
    "2PQSrbL5BytWTt2hTFZj3deQcZ5dCjqRdrk6hC7dPVbEFDkCvazQTDHCQM8eUceApFdxGgU5Tu63Rqsrx1nmgwPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7sHK5UoeJhAuAGpf98Mu9EPFndsZ7jUQLaS3WUaGgXRVnqwte4qgedpGX4KCwcnXzxqRp4EUJqPJ9ur3VtbJEL",
  "key1": "3NqUif42751jckHsbB1BJBiiQJdWz8pAvJRvozxVMVGpCrc6T8uEW1jM8CpUpSgF6Lb2J2V8aeE1mohgVZ5qSSm",
  "key2": "3QGFdM4ELjcwz3RqLwAyfTT4tKtfzxh9XsqTJ6nL9QK6fdzFbwwswapEp2vqUSs6Zw8h3imsdA5s5HpCVnBRmDMU",
  "key3": "4Xi2FaNyeAn1RZrNVmNW9iocASp8oiE6ZdhqqWi8nebfyfZNhM239TbpmEBuv5u9tmvH56AR2oAu7FoLzktYYL6s",
  "key4": "2J2bepnLBDbbd5jZM5YtDXzD8qLQTNVakV651PhQscLiGewYT4zqEjiPxVNeawQow38XyEBm1WYyHz1EaJSiTz9",
  "key5": "3MhgLQobMgTeKJfuaKBaVfjxBBnjowvNsSkEKz6dJbR3c9nVmCisHX9kQLh1jGKZPxbw9DCxZvakb9c9xC3NzrtA",
  "key6": "2KVh8hhKb5BPdyqmxaeEJRXA6qMVnuYupkTNmHyVAz16PphZF6nXRgAjwxaJ6Y93LjKFn2WbAZxfSr7mWSfqnU4N",
  "key7": "3ybq4RbjpmPneNQ2NyRhkdM7F6coi9HRfYT46JkK8ac6VxpUjtBA9hrwpfd3D3RHeZA5e7Z5PEBNffZt2LYrWcJ2",
  "key8": "2GZdT9GrpYbZfcgerJSBiCgZm34WP1XPco4EyimCE7DKBXfg9rEiZ4VNW7cBGAKSDJyZnpFMDQArMuzGQv5J7hHX",
  "key9": "3abi67qomrWyLBh7efbCSq2JiVYvh8gzhMAMtcuzqZoRd9C7LubFKQa9mrn1DHeAmuNMsA1ePG1Sf2Z78HUeGbs9",
  "key10": "51q3JG2imFMjSDKqcZawWLoBk5eC3q7Yo7H4v4S7f2SfdRo72rqpH85eN47cWEK3XP6tTgRPvTWwxi5tYTwzizwc",
  "key11": "2adodES4zU6C8JngpU39oYs5esRyPLmKCcM2ZN5Q8J1iW7mnAZPfu1b14kEbynceXJhNEg2LmPgKopZCEBFPuRpz",
  "key12": "3685uigqzckmeZZXE5kt91eVjVUCZTpAs86HFKqtgmmEA86noXppyom5FB7ohFjQTeCSzCk1yPUGpmJNfxoVrGv",
  "key13": "4vnQJYMH3RZyS36PGTzT8d8sHmTB9Zzog6fBCB5pumMr3EAMdCJYkMttyxoaEzrgksuARcHWPUj5hd3vs5CQqXue",
  "key14": "64Sknxzy5XWmsDL2RgbGYKSBfwRJKBGWqB168jWk7NZYrToRwN5PLZu6TFTHK1Yfb6yAW8DbKqxHdVGJMqQ9C9Ck",
  "key15": "5GPHC5PKnfGKKZK5JmZeA7KqgmScaYoLpSSa1iStr8ghm7y3wmFigcwQ89UZcvzZ9L67HkZZL2WjfrHyX8QN6ZcJ",
  "key16": "5dcnC5HuMabfyjCcVyD8D1BxEyCprJmmXSXLX75Jjvg1PgNYGmrV7HYNJiutebrz1xmEmvdmHZjpLN1YDpXUEmDq",
  "key17": "4MFbxGQwHZNxLJA9VJrpCUaecugbXxr3yKqn3r86hH33VDYtLNXsXJ9KXQXBhDvq45jayHY7zpL8gGn5dPDziUhQ",
  "key18": "UXFRyDmcmbdKFZN3UzsF4bvYyyF84UxuvjeY5cupwjmkVYQvS9q9NYcgMCBxPH4oen7SPCEo5XkmPVFEWfibqRB",
  "key19": "4zMk8NaGfUZRAWsTfcfQkjCFMCCD3WngXynbSM9mUU1BnQ1PfT2zyxtXnLFLAW7hGG4iPx5VLSduGzh2T54hoYr",
  "key20": "626pj1ibvi4AxVacpf7ffH3jzzjT29sMgfSHEoYfs7d81LbYfZzceSb46WeTwKNpeNSMPMztFpJ5CDmh1Zsa2NLp",
  "key21": "3NoNJEj8gm56pmK9K3GmdSynWTzMzYzXJwm4vJeuHgEek3c2AHTDTcTP9B12V5f9NkMjPGBUuzhNYV2rezKvTCed",
  "key22": "uMzwKT2DS3rrQ7v3JywY3RyHc4t31CBSZ9cyXHsbDRg5wMAdgsNW9h6w9ERGmLRfN4dXp77tA81TecLYzsfymnc",
  "key23": "3KQaxrYBhKJjKykQYNZvMc7sCUQqyFwekjdK4SGRU9UTP8ubrUmwyxGYuY5JwYCjSiuZ7Ar9iESMHk3FwmPSeXP3",
  "key24": "62GPtDXs18CnP7Ff1bMW6WPcuxpf6edY8aN1319X1cmtPoLopvqkoo2nLiwWrEG38U57aRrm9EAK2xgbhQbe3Hqg",
  "key25": "aeA9q7iM42SCbKTZ43oLw1bUssveyMUttEStZYoAbJtmuv8MHayVDZXxHLVV89bjfKyzGSuwkfCBdkKYynhxzmS",
  "key26": "2WLbj8zm3yihP14kJUUBJkLCE4h2pMGgpdpcGNbroty9eWg5xDFZXfmYws2sekMuPjYNDKpHQaX5T5Zyntv1E8ga",
  "key27": "4nMKjKcfMajqdZKpXPKkRrVo1ao3yUV7VBRRMJUWUK5Do4SqFEx8BE4ciCF34xZj3LP7K2mzPXwEkzbdUEgnh6RH",
  "key28": "GS8BmY5UiBQceVsGAQ149aXPeAFwienHyGPGtGi26YimB6Tn23cpGRh5drHVwwWKPyEiR1a92zzn4w99ExNV9Hj",
  "key29": "3EHGcoJnDDaCrPqbvhtUzz63Z7pkXGVFUy8GdbyM4mi1ic6VbC7Fq5pfPhhioVictPpuFuKnU1EDuHRcNQSeJmCB",
  "key30": "4zNVFSYjxBmy89vgVyngiyudUzUyfN85Bu3BbKVm6dyLnqZn54pgWjNWqRCzx6pRmNekQKqNkihqaZUBoQQUHnpA",
  "key31": "bo8MLkV5eG9iNrawHw4gzYSDTZn5zy4YF1pr5YTgZfPcuSzJf9GPAt2FeiNgc5d3xqFdSXZpThQLbcsytKy1X9N",
  "key32": "2DEe5ZtFoUPUzyEUpAgFh3t88qTAQqpuXN7K73ZzXJo5k8Rao4rDMX4jeLaau66TtiB9mMR25ewn7xVxpsF992ch",
  "key33": "4kYZD3xv1yPf6qTXh1THDjiGdbVurWpnm1E1PvA5wqXLCzqQ4xHDUrQfDYUwk4grbNVbHFCLHJQRefuMzwmJN6F9",
  "key34": "zjLayiHxtHCqPhHsAPs3XFQF8adDfAiWi5iZme2NGX6TqC4YVoLEduebubC27o7EGVbGYgm9j2wiAZqngLBc9HN",
  "key35": "5BXXiXPmzsf2qUboi1ysMAqTUmAPpPjB37MpFLWFSRhc6Lc9FcDoq9yCZ1Dtvcer7a29iWyXEQNToZpgGKjPLRuW",
  "key36": "3REe6BTmGx2tyE4RpFXeXL5SkgPmDv2sp5gqBko9Z3Xh4jXPTcVNLvVAE9fKbmprreYxTAjyMXEdQZfcnpkoXHZm",
  "key37": "5CNTpcp6cL5vyCaQXYeNMpPGC7MXYReMmmBHod51TKYdhTwhq9vFWKTzVmCPzNLxr8ddWyJZ9xHgszzuLrC6NtvY",
  "key38": "G5qarSL1rDZkbQr5H9mmZgcKMqAuTkDuaN7mCxZRUQLzdduZca8TZB3u99uruYwrNWawxiiJsE25sie8wuvc2YP",
  "key39": "4464X2iyLobprstDeRYVDrChTxzp77PGscME4M3CsZD41oNtmQLofJjFDMiqZTumxLZTKv9cicMCwNA2s3QxyxLV"
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
