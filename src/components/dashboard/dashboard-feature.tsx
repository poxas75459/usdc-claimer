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
    "Mr9W4vh1hCbA6XneduwspMbiWUajjXRSBPxZU68eR5SPFq6VP3WADUAGcSzHiDNPhR8NMKD7P6prLjJ9EzyA2Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42uQYFMvyuUKuAx4yTQrvRhd7t18x66kBg6q4znJ2irb4pm5qMM7xqZzV4o1pwwLF8GMWED6hdSoi35RE6xioyJH",
  "key1": "4h8bXHdGFZMiPNwBU4gw7MGDUP47MfSe4j8VgSbAcHHB2KAvSyhk34GaMnCPZG5552pUJWDjsqPdt5hZYJBr5Gnm",
  "key2": "3fwQsmL5oi5EsQJehVf572GAyGruCo7KNGE1BJCzzpb9tkCx9qaiTTrDHgLXFcmDivVxtNur7QB81d3BcJyCif5o",
  "key3": "2W4QDHccdP4QUjZUqYboUj51K1biVV1DyNtLEXcVRUkG8dsg9FFyqZW2NiPFFKfWU3ZH38wio2bnbp1ohftXTX2s",
  "key4": "gyHUbxUm2Q71szH6mHh6PvpEvcmJev7hdFdu1A5PbHLgTzxBwcDDQRYvnzz6Ptpqcj1uHJ6ormtPkENvqQe7NmG",
  "key5": "5T4AaQje313iV8vr1AEboVsGiCDDJjGxfTGr1Gn2YKokJNPvU8TdsZjzEdafvDgZ98VxXqz3Ccpccc5wXci1Zc92",
  "key6": "43txB3qptJC4fpneCXJ4vuZ4QbXRfhLSgdweErF93XTA2qEjtpHhtA2jctVzCxg5z8SPRAPUauPjiCXMbxercyNB",
  "key7": "xoE4TMfQahtXeJqjddxJ9KX2XRpDhkWFwEUHqCfGhghvsM4rY38edooCg8sM3Xi8G8CfJnnhgkdNavnZbJGFVaE",
  "key8": "kSnmDKD6NzrJvevQ3Tbp8HiDZu6pcX673wcL7FMHVXM5ztWC1kxvLyPsi7Tgc9GBSZBhTW26UgXX4aJHe4Cvd1J",
  "key9": "3Wu77DoHCtWk1Bis2shLmxkdUcXNpJxwy8AJDYLuFZrEUdpCZ9CoiPwxkcNzfugfycHrXBR1djp97vNybLootS2s",
  "key10": "2Spt46tTW9st2MLhMjQtsNE95LiZ4cAFQ5uodb8MLcAPVB8BPcAgMnWSc5uWby9ND4NWPnLsKgWQvHdrUpbnkmu5",
  "key11": "3Cd84g4tYMowYEyo1vAf9pJbDozHZdSGa7KbToMVXHPC2KtGzKpXVDQcUjo3A2usfWg7DyWqws6TpRS4DUQT6BDG",
  "key12": "3jbMgwmTYWior8ZrW1TWZ3dE1gYXs62DMmGV12MUNtGkF4LegdPxNmqmm6Pu3z1fXF8dsVvqFFJ4p42SmXqznQRB",
  "key13": "4xqmsm637LWtkfF2pfKJupr6ieb9MSQwULC2grXQqtt5cNATRuUiHTsXQ3rCaoycC9VHTBZi3b8wQmhBx35pgg5Q",
  "key14": "24ZKcdTsekpqoRxM6NxZQoVEpNi6dZE3tqj6hCGzGkqcNmXpH3RdRGAVaJFb6iwF9pCiTUPaq5awxYj58K1j1p8f",
  "key15": "2Cj7sMukU1bpfHw7QA5bd498wywYorqDsoqvLFK6GejZYd355Vt2BrQPZvPYPi7QxUB43qHUTwW5v7vpuMwfAksz",
  "key16": "2BLuAjVpR4MrKx8ahgEiFSnNuvUYF6Cr8YE2iFXb6WzCVyDw14p8qpxPPwGTygox1DvUcmLzSvpGcACDT5vcDSd3",
  "key17": "481sZXo2STJL8nggV3piRMxh5HAcJjZpTftaEqmrh7FHBbG3LvSnxeksjkybhbjkvZKa3d9jvzdsSHDSCkxnfrJr",
  "key18": "423k63bHJn8T84eaftGwqttN3AqPsex1RnaH2JiEfPi6CrEo9ETKnuz1FiDTMAthBQStmkNVFo68T1uBfvWwZUQm",
  "key19": "3Vzsro7Ab622fGKMEdPBpb4jvRuHXnJb3VHm5Hr89cbKa7eBs6DwUrVCp44hPXcGYwfWxg7d8gniyZZ9q3Pra8W2",
  "key20": "4ewjg6gHu8VFsS3v2JCwdTkTdNxvcZix1JkACbA2sxkCHCfkE9jjUfkCkvwTTMi46EjFhRRb8SxU9LUU62hd8RYk",
  "key21": "5VnoudXN13KJjy3wp1rvDjAb3M3jzrVyRJMa5FRaF9iUtBcH1Nw4UpknFsSZH7CCP3EfpzB2VH22kueHofQU8gtJ",
  "key22": "4HsVf4rtmfsmeSSJcvyy919t8dGGxokXPcfwhU6LHYrHaHMx4uugkdyzxHGTscpgNTiqLdPpc167eRU7NLkVgsvk",
  "key23": "2SHwZEPYMw1R95HAyMTsjBPNXXTqjQTgX8RnuRrYUjdZEiUc1w3C8sjhJBqeDcSR7Cvzu3mG4BXHakpYpYsWQdaJ",
  "key24": "3LSqL24RbH4fzA5SNM8EVx7xiDfd777K1aWYzXVJ4P1ooDRjAjfcm4PQH7AjKUc13PZDeSvZcy89VxcfBwrxedYm",
  "key25": "AHPuiVQgHugUax53RLVML2VktsnkkECTo1FHngL7AXtkdinguEH5cjnz2TRCfFrfi47ChKe3UAXUV6zpmP1d5x9",
  "key26": "kFq2abSuGVyQVg63mcw4q4XaDUTTfFNYJ6MWAzjE9EhH7VY3yzWXKS5JsvT6xaYtFrTZKsN2ZW58xQBnrV3iQdx",
  "key27": "5XPik4kQ55KCSu5B2Du9xEbw3FPsNpFDgmJ9ps1WLECrrFjMhRVGiwrrbFAt2VsUUoNmk1dftSjZxpdRSZQjfi5B",
  "key28": "3eyYTVgS19LwpcBWhJ2jskXg7fc5GJgPYR2AUgciNQpAS8qtFR345RhSjpMfo4p2t6VgNKbZko9f9oU5hgfxUL44",
  "key29": "Q1UGGoEi2AU2N62VyuGfWrJRciohTFNsfVGZP4YLtQdrQEiyVePQqUHoQLmJ9yujM3xWsY7vVJmTDj3KgnZbdDu",
  "key30": "5AwdVPVcfCnUHMywG7DWbmF7593WFa8vHZv1uf4izpni2yNUTsKHYm64R8NfrBYBvPUDUN9E2eKF1bywvvhZ7e3m",
  "key31": "4mp8e4Lom3TVQM6pYqQunoemFSPwSDj3c3NP1iWvWghsRPfmvHN5jd4yYqbH6YE9SGNZ4ZDhgkrwhAcWbtFyvAa6",
  "key32": "5yF7VnVUiL82XoRNgPq2UW2X8xuGhAkDKDuaLkm97VtuiUkKXdQKxWABkdQnMm6mVbRdsw9hKt132XKiRvZ2m7Nq",
  "key33": "41CPthuBuPdGAG6AMGHNeFgK1EUMSWHWBtVXNHTY8GcPfRqaJ78FE9hdgGWCYH2DiRvMWSTaL6V7PJvsYZ2Vz72m",
  "key34": "26fGPhBB4j82kWEi2EqfHjkrcTrSbfLZ5kAz3nBC46Vy1KoJ4AZABmLwRWjaMiRvxEVyQaYsn9eZaWpd6ff8EBAS",
  "key35": "K7nCtuGxZVoGN5YNVNcdFZE3i5oL6kBxqQeRGtstaHcy4xhU6AJhuwcfUUX7jFYykpdqorpWeF4XyvkGKxTtCFv",
  "key36": "2pRZek4JpdRSR3e6bZCkdkwkSVGV32Bhdnk3HCCR8Y7HfJe58GyxBPEtjRSTtvQvcVzUEHFLbRXbv7etTSXkXwnn",
  "key37": "4DD4TeVeG6UEJNCVtFc9aG7H2VALHRHMR7vjEGuaHMukEZJHm1h9h52RVi84Z4QuAwWHs1wkz4jamZzbcHzUT56w",
  "key38": "2nQfgJRg1sxeHgovzNrhaGWArooTG3MNfioUvNkXgo7awcnEtdaQnjk1Gm7c8zhTmtz3MB9nFkKQwPCxiyovVnMx",
  "key39": "5sFk2Sd8yP73UtauFALVhqT5RGbymjCVbivzebwRuiPKxvfP7SPZu88d5yR34ejuLcXUArfvWSecBYRdjKiocnKM",
  "key40": "3z5Kr9oyShEnjKB3G1VAxtZgdEME1MdFmQ2TSZysDrCrwarM99QatCwf7swy7k7jPgydxqcVnwJzZspfScfrrKp9"
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
