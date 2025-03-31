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
    "3zXRiMHBTmPzwVXej14hiyBPRe5Jx72P4yuLvYrWuZDoYBpKFrM3TLQLyE6VCybCcoYNQeoRH8nzL3r1nvwmxmfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hR3PBmTkCKLQLnMg4h35PKTHdp2yAexDcixMSXS2CrVvPwD7nNQfm3sw9Tny8pjYWPHWztyKKPwLBod5WQhqzRd",
  "key1": "fw5WSGPUt2cEukb4BmVoHuVLwDmBjJBn6p5iMkK91D987SBh6ANM4J3UJDnN3p11nidWvKQGVvbgxDkL7oqtuvy",
  "key2": "31pGm11zy69gN3sDbXe9fFmgHho5cs9ot2nhGSBadbXnLLnRgx8sCbqsSPytMFN4FZuWJuZhoPnB2ADWUsESAEjW",
  "key3": "CLG8htLr8iUdjUPg1EFEd3HXXLaxg8HHW6ELUWKrXcFrrNfrGJFLu69WhjnCsXTAAjiP7ZFAx8wxoaKegzpCVSV",
  "key4": "5SzRAHnwwas4J39VSsc6JC2JuVLJLazwfxuwUScszzWxnT6aEwBQULqnuLWQEQ2YwPcwEVCzb9bApcwiM6Qffytq",
  "key5": "sZRsam2TpRt8fuUqdAwkzBC1nunS7UnLnZ7VqyDHMfXUWPS6VX8yG24cs4hFGDLHcc1D4qPUFFpBp3L3y2tV5Zq",
  "key6": "5PCznXTxk2r9mjARUAmiE8abKib5nVcXVBHY9H14RKV3Zk5rVMUeSYuQhCKm6cVyP2CmmQfR7pYyjdt3XASzf9CS",
  "key7": "2FjivjBFC35T3XN38vrN8sk2NmCx9JGja5nzbQfT5YZUxVVLQzMRan6WToCpUQMPpx8LwaWV86pf5wpRGkLgLyry",
  "key8": "5dkhbub6aRMTQyavmAiiVW1iMckfK1n7gN3hYKhe1rBJsHDTC8o1konzijAi6AyXAz7y1qvaVYqFUaii5Wjdv7Xh",
  "key9": "41PLXLWeNFewaSWtWQgaysGr574Jri7WBJh3poh3iXFWX3gFPWoM3uozTZDRAfeLTWwjRxXkbUEcQnPtbmKvZdmU",
  "key10": "4x4uGR6Dtn2fcTyKvp4etCdSMWijfXUdphCy9iwuFK1fcTvJJ3hynz2uPi4DYPoAjP7GWezbsC8CcjMfBkFirmWG",
  "key11": "27kMhQUUwRjPWhhUbdwfXcnEy1hU1CZEvhpYKqWkePLDAEfV7it9qgoyL3jGrQZWyiRuuiNY7i4eZsagP1bSZxbL",
  "key12": "5XdM6m9piDFoYwd4Ww9UYN1wLdej8QKRfNPW78Cf7EtUyYsFazkA2c3tQqfhuuy9X7zuWpXhLwc7RjiAc8NaZcF",
  "key13": "qqAYqyv5vckJEnaykDxAdizGkhv3o2DLe84zJaD6DSxqUeRLVbpAhxMEZe2rzuJjN7YrzKgppw6jrGh442YzgHX",
  "key14": "fESuFBgTaYon2QetHXDGRh8HveThceUY1F5SYCJGDq2vMLXhiNTTmEoTMRfmSBMMxp12JcemetcRrncUSjxtGr4",
  "key15": "2m5qQ2GzQJvBr8DKnoGzoEzxhMztsbyGxVrtUu32hXkg1guWSMmq11PXiiR4VSf3HXuxGxo7e5SyQXbG6hThHwf1",
  "key16": "5ZqRDH7D5khjgotohbCXrrHTofAUYf7PNDgBhenYxybRfcJUyCm893D1ZH2xdcXgtstTzjSnwyiA5R8yxFR3gwN8",
  "key17": "rAnWYkM2M6hpYWvgJkHtHCxgeUnyCPHqHy619uD8RtsiJds5tpMnKPju2KaCpeYpUmo5M3we6mSUEWPBuS9Rtpp",
  "key18": "61yBBrKVNS57Xy4hoqxeUBF1nutwFwFzHwtSWB1djrzqtoGNekUTv7iqrhL349tVrXCFCKdCMEWPt34HqtEYDHd8",
  "key19": "4uLSJbv4fgi7JjoWNnu5wmYgV3omhBWXX1627QgtxAW4VBzENEAvkvtc2gksRfkSXqN1gt7tEn7Y7fF8XcJ81dF5",
  "key20": "3Bj2Brcmsfu2bCUkRmB7sA6QN38WKhBk3s2caRCMWxZUtU8DqFk1txzjkpuEHSvaHhz5V3fnCczDbfvex9Khs5L5",
  "key21": "41psyskXgKZahF6JzTSmfiAGAXBFjXTw5KEiHQU2z6tTwUDNGboUmMN3DtfoGtetJT4aFMPPuafZhTnz1VjYzN3x",
  "key22": "9Fhtv8cLYoCHezKpVXmsTQ3UZBA7XSsvnAxjXoHAMHgd5GELXbuyXfLBNrZAqoYwaEoeZkvU7YbtBfzFYf53Tpg",
  "key23": "21YgiBpYVMLiEwU3XnhWCmLRnC2HpBoiZNSRSG2bb62bktizN3e353qzhsbNR9XRhp4tPqUA87WyHSaHLKNSG7Hm",
  "key24": "4RT8rhhEKMcQUMtF8cWe83TCJ3v1FUWv3H9VGQP63n5c39MUb65gufbiNzsYQQqkLfsJfm3bqaVNQMPHVXxiPVFk"
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
