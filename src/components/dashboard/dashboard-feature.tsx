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
    "4Dapjb8EAGYrScFXDRrfxYd3ZMqTos4C7w7jJAXrfofzBB7qaTetSig4RPkMQ9C9rTgjrATaBR9Fiy5FgqQxstNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5PMnR7KKwg9XcNsfzYuQgZ9Fxs77AcTnBZNasXH6aVVyYnKnJyHxFRNHr8JLXKEnLef9fwfBve1ngqzdVHgKKt",
  "key1": "5NcuXXckuGkYEsqTv6cZ6VFnNtPyA5bjdJzQxYCq6Tnkf9hC5tJ72zofFEKbaZrX93dKpPzbP9B5VKvh1YVwpfgg",
  "key2": "4ZwcZ6kBRLwSNPFbtgBhbpv6xBY1SjYE3GA6LXEBaqe77os9qusCsSdJoaMYVPN8ouUj5LFpypNwttZG2guuctz",
  "key3": "2p1zMtNbrEzsxAkfn2T79seconfLNpEkX7okLfawdpbbBWiTvNUN9VuQf19jet7ayAgCD5L4aajKdHz2JHZibnH4",
  "key4": "4junPn75JCnu2g9igvYiDvkRbaMysRoWQtEktuypWywFxQEEsFyxW54Bowv3Hm1yHuNJraNrnQhVgGoEwvMR4cxB",
  "key5": "4qk92roGQ3t448htSKmpDmSjV2rJ7QQbzre26iuk4LERxqbACtA5iMG8zv95ZXksKiCAR8TLwP6hWjH1irPGy9RQ",
  "key6": "2zKDpXCnSbTC2J68LMKtdFrg2QXGKgW8FXoXqChdcgvmQrrMofUg8dSRvgaWb4nVsAbBqwVemE7U9mXTvXFatpLu",
  "key7": "3d2y7sz1XCniVyzYnMQ9JX4w7CPTg7hN3TzjTUR8xK1f4GtEDbWyFPn4nx4keMkp2K1zp9XaSrLtG5TWHQ6yf1Zx",
  "key8": "4shgvdNLfeEDrue3eQsmk2U3iSEumTCGmyjiCjuoEdmyDPhQoPdgdh2kMgo64GaYzscAajU7D3Z5TSZGm73Tncsn",
  "key9": "2c8e22hZ8TJ23MWgnoDcPwFbNbwYWbjskK1rAYQ61RmYBmJC4ZgBT65B9SuPXJ3V14DgWtAu4HTEkpYeFC2Bpuxd",
  "key10": "3p4XftMWr7Bdyw7mz53gutqRwx7TsSofK5mv62ku1H6Mgq2vh99UaYmScGGj94a8if7mWD8BTUNeir5t3Z8V3kYr",
  "key11": "3rqNTkSx68wt6sbed97Q6E5iYGyzUTPXjPv2S1kasExZwxpfZqMFhjB6qu4z38AFK6H1XCQ11ZxR3aGLDqpjwsUH",
  "key12": "3AUpVULZWmNvRF8oewrmjyuo6asGgkoiB456yjFN999mPcxez1qYYRdDDqVZ7y1vQYCYzu54t7wRNkJboMBNk7Zs",
  "key13": "KVTgtHrEU85E87xKQ52vB1z7mxMn2uFeyoYni5M1in9jT8eHyyCWBj3T6kKxpgLkV2PAdt3gMCk9bwQawWPjqnX",
  "key14": "3nGQXswmW3Amfmqk9Mmw3EbiiNPHs8izDCdx6CFPV2ncvtWDizWcAzL1W2FsMH4NqfaDBtLWGocv9soB5quZKbMu",
  "key15": "5SnAQu4P4V25AmQYvZFWGicpJn2nj9YLW7nckbK8se5VDzmdPjdi7DZjHckQSYVrJHgPAgKfAtwZpJA6kct9KLfL",
  "key16": "26cm4hyB6rj7jmeMyzi7tbyEgVqAr9SXwyBds3XNTbxwc7brFQ5xDruqTaF9VwnnwaeNQqZ6JiGFTTQY6PJKmUXT",
  "key17": "kG4A2aY2fE2K2JwDzkkWsdd9M4KGvXovcy415p8YTQPAoXSQNdf4c9YSPuVRFxPwzfKACna3CNZpC6YxsYAvpgB",
  "key18": "2Rqzeo9avodjEb5D5HKDXxjkL16U5cXut42mGnNv46i2oyaG7fi9fPupUgwNjzzGsnBkW2EguLcUWLiUW8iyFqdp",
  "key19": "5yQozzqq58ZZmAKvPtuVXEJiwgqCjeVBsTLJBe5t59PinRZnvRignxZcEQMGWbHTPD9D1QJjw1Nw1J75g5hou672",
  "key20": "4FXDMWDbt79yiTzwjezPz1Y8jL3V2tmL1kMtomwBZ8jpavA7XXzkfbaFufmK1gMK8kgtxCvAtWwvMGfxLUUrd4AZ",
  "key21": "H5exhGSNsMnNfob6cxPppmo8ZgeA5j3cyj2dvrptSmC2H53wzCqr3jiACVbGyf1bQzJgKspnvxZx2ETY5uCFuM3",
  "key22": "3i9xQ83XAB1iKMYJdhh24sWC72x9FYigpibPVPr1FZK24D3u8BujGYMrYMGVJdRXTMoXxtzvUKY9R3AD2ZDpW677",
  "key23": "2LxNk2AHPeLYDeSXsW8m65BGpTPBAuNRs1zCtSVQRb6KV67TMsVPqsLF47TphhEaq9eXGKfqP5GnmxBznCPx8rXG",
  "key24": "4D535cvg7qsfs5vHKKBQrauDKMUdW9nE1peB8fbsZFYEfBKa5Yi53os5jn6enH7GXq6j1ZG1XZgCr8mfrUi98VEB",
  "key25": "3W5fGRRgbDnP6CEdnKURbDw7wrzoB2go7Dx4E9fSKZYQ3xrBwaJReTLA1Vj7YM7TsdwTvHA3yuFWnxCTBTkwdoiP",
  "key26": "5Q51o9bfXd4LEgJtEpYFArUa5W6ezbQ1ofGhyMgaY9zDoHiisWmfwzvzr5QJe285SRmxoPm9nZfqZAJ5qmcrFNn6",
  "key27": "5aMwB56UtmZCDLjqvrU744RV4GiZbMqPrcSrtrWzeVuJuYJw1zjVit9B7mxj5wJC7CUuQDwGUSBrybxu8sWAnqC7",
  "key28": "2MYpNX9zCdAMQt7Baxgq5wwv1A2doWyjxp1PJSgDmqGDJrCGD6ZqysHq4zL6nAfCWPM4GGkEYy1D1JxCbQyPe1yV",
  "key29": "5DHjzrDaigp2u5n8X7CVKxnfdPZrARACF8gZF89dvDy8khG27JQbGgxQFmidJBkzqD6aKhXLh2qHhVpzbA4MdjuY",
  "key30": "5BqE7EyWscvxXMrS1FG7coi8419S123YeM6X7SF44oCdGNhZQJBjBCL39pNBdirGQzSQmhF88n2m8XA8ZQszkN5r",
  "key31": "5cMvtw5xhgjun7iRPCieM4snpwgk7fyTNGXLFg52LVPhetRBtHDPigPjN9dFbFesk2A9Kb2QYpSXXJgAABzhmDLq",
  "key32": "4z7KDnjbMyDgazFa7RDVbuHtmzBXgDbVQ1BgameACdZhCsrC4gtwRCTf3f8A2MsqZhKgKEhdy2j332pANtyytWqL",
  "key33": "5TqPagFMJW4R21SxjVf9koK6KuqKxj7YYZMYKsdNX5sZLUGQoTx1e7WjjPrCQmvPiJDyAH2rR2diAovhJDgRnBFG",
  "key34": "6nGcsYWACnMhhQAxvF2hwENDC7kgm9vD55cxd9pd3y9vptWohhtVbQHgQKQtBYPpCPZEQmexHac4FmiCifJoUxn",
  "key35": "2XwRvpa7Ra6hUTs2Wz5v6bN2uftHB3eqqXyZ7kBrf7FpbBzujmGc1uasZFcfLhq6saiP1ff4fBAsSR2Asc3pR7fu",
  "key36": "3jr6X9iRoFLLHMv1CaZEizuCyLia4VL6AeQyBJZRLK2Ym57y62SAhpDW4rXG9iv67mbTEgfFZxmj2vLpWNq2frV",
  "key37": "4kgXg6zeKz6JfHe26gUC54qkzmg91AnLvctWqhrjsNyojM2e4HyioZY3FnnLENkhz4cA5v9tj82vNQ2H59SDYTpG",
  "key38": "3W7cofbRrwJNUoUimZddcmgrBjD6bwByGg1LVJmTnaX8RjTrxajjiwz4o244Sdkh3aLi3Vy3sdpz3gRHH4i374in",
  "key39": "2935VM7a2mc4drHB7uJQUGWFhwN6v2fVno7jGGp2BfNbMZuxP1N9nNvLhQS4E8k29oF9hhTofQZAEzgtexEPh2An",
  "key40": "5pyjCepYFSRLxUL8Z8XBZF5zR6XX2CM7LrKvp1Bfq77SYm8kHgoBGn9aCQPNL7ksoo2U4QQKHBHNZBTbAuX3NtAk",
  "key41": "56UYdDFsVaahcS3HDghbJw43cwkqrz41MDB389cuFHbX63jCxmbJdtKiAF8vjaDUkioGY7bodSQdznGEXXFzQjKN",
  "key42": "kTsUiGowuavTARhw1bNoDraNmC9hKAZvDzD82NpDVWgXy9VmHEDvY4kYBBPzKZ7zpy7uecvj32VwkcNMLUAi1JU",
  "key43": "iJ436QsJHig752GkvZxmaKB6DusiJNh41wPsBJefS72UTXQjBoTB6gJ8RZwBvs5uMXEow9BxJHXkw8CczB6Yrxd"
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
