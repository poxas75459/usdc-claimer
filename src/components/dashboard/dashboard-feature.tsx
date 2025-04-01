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
    "5oywrB9uLNA2ycPTdPQXvxtjerV6zJjNw3Xsf7ehCrkRmiSzH5y6jQw8Chd6QmauCu344Ljco24GW18vKSM1GHWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTo5pXa21WMTkWyVJ287v43nzJD5t1PQ7dbcmSSxBUFkMHWq9F5y3VjeuVvf4B7D3beP15wxSz4X8xNFne4jgFw",
  "key1": "4ecSjzDRrnzAV8tfbZwBGfqRjuEu6KAn64hiXRaXiFvGsvfsaLo9RCU7aABEZyoXLZjU2UZtkbubgKoHQvRcurHm",
  "key2": "4k9TY8QNNQyLcNDw6V6UjzqzXvK7yLnBSXAyDiWgnZWUfHTkH2Z2Jvpg3V5FuAyVqdAQqfKxbbSJrxV98SahJLv2",
  "key3": "4h7KG6tG6zDXcA6g4abR9zNyK1kJ6zEDTgdAZrwD2vbbdpvcDVMmQkWtivQmjSsdQLVGZZpphqDTesw9c28gDptW",
  "key4": "3fGbWJZXKu6kZXMTpZFwD3gL9gsEwjeBqibNpfpiXjAQB8NFeZknsnxZmKtS6QxGKTtwf2vdQJA8v2L3nozS8fPy",
  "key5": "5VnkwT9q482eHn5k4MbCvNp7jNeUkN5naZYkMUcM5krKiaPE79ri14ioqwftP6T7ju5F4WEZYv17Apx6vNUepq5x",
  "key6": "3y9vwJ6yVnwckyQ11SPNaS3KHPAjpVhiNvXzSL7srcokYDFhe4jU2eqmc6r4ZHtjLgrSDjY5YYvMXeWJs5BmrvNZ",
  "key7": "53GQ9kxxZSpKKWHTaSCiWgCvwCSEb6dyhm17dJ1ZKawGGdwVAkQDEfHUFf8K5utFM8pNCrQV3Ekc1NWDaBcFeQeP",
  "key8": "4rTMWNbA9UfmNwa1HJt66MQ3aavCtvajbrr1koEy12H5a56gk1Jv6zPCwoN7kt1kjqvXL5aCpxfuqqfzYnmmrEzB",
  "key9": "xgRh4yBYhSVxSYnGSL2D6aT1oqoMxDvgcW7Ld6EwsTpGnauoyFrMVG2nTUaiff3SZR6tADgn4axRv99qh5mTEAD",
  "key10": "3voCwJeGShqS11TSD1YFUNAWUWTTSoqRDZtZ5B5oid3c6nECwNBcS3GaNUynCYE3u4Rr3yTGV8JrhgD6P6crw3NR",
  "key11": "4jtBh6D1M5BJ5gAYWcTgpstGrMPfCmtsx9CWE6Y6zKCvmHAWytky9foWrUAAGRtEFNudLuSPXJq9Z9DbUAHHzZgy",
  "key12": "5o6kFU6WPRg3axFYuYMUHfdYRkBbUycyerwZR6X3RyPaZZuwZnuLQsrsrXT2p4fMDFrm27m4u6iHCK2cjQs1o76C",
  "key13": "4Wx7aZ3c5xQdsmx9U6CFuK2yUfQGYDQW1Sy3H2MQ1NKbaYsZKLWqfdzE2UwbFZpFVGiZSJhsHJBxiyCqPHbuvTUi",
  "key14": "eYtfQqCrT1eWBUSNEpAZz3VFKx73VNpStCynt6SRZm7YoMHsJ4ciN9W8ADxoamViniGfztayaXDisVydJcDGFx1",
  "key15": "4HAWNymPMjcEaxNB6eAevFNHSLQ2rpYuRs9JnmHou5KaLBZh2yQyfSDj2bijUc2cZwLTULckcXmM2QDZ1FTTeLsi",
  "key16": "3G5g31HbkFmgUt5qXwLEfLPgPoVCYfEpt3DJHu9b9fUVAABNToTWWhskjYew3zyjtEpg4SoGAHu89n4zqFia4S3k",
  "key17": "21keEUbYBb4qZECRsbWyaxinyVLFPuDVnrc11LATAfeBkZVKM18eJax8YeTyt1G4S7KqWc7vprkSTnzA5NPi97QU",
  "key18": "5zafFwHSFbQyM1ifpxzR55PHfffb6snKLrj9FwTGgt5qY5RjnumkumgPoDxJXakLcJpQWjfYV2UkoFS4zng2vVxY",
  "key19": "4ta1QwrqcifMZtLo5QtARnvrDSiEoELmFjeLLLAVA2yLaP7szrgARfvE2gvLUSUhVLpB5EzWPmeWFxtNkAFwm7zy",
  "key20": "67K5NuKm7zx1BAH3JMwT5w5K2aznyP7kq7sX1Y8yjcviRDJT3HUbyrKFax9YPuVbYvoz4uMK7FNQJogUijv9smXo",
  "key21": "22zmwRm8MAwUvuDZWu4GyKjuw7GQuJM2gpXoG93fahM7G6qMm919bU7CktXGPQjeRJ22X17XdvifC3v9XnYDCwFF",
  "key22": "2abwDtXVgPAZTuKVCHAq7B94Esc5aH253CSt7cK1SSDM2qYTZ7p9SeRfJL9D8ZcwPN3tRSMG1Tbf5Ni95Xn9Gt6m",
  "key23": "48qza362n1dTosnTmrXYWau3oNTinGKn9wKgjwhS977AW6xwwURDwxvZerkSF5LkZDUzRpARXALqTtKXGci7eBLm",
  "key24": "5Vun7ykyJZGvqjTwc2siemZWwarWgjqq8kJLi7hUp8Ftv5JsAvuPcVifQ5X9iQe5NA5MeBk8hK6z1J4Y7Sc5ZQyN",
  "key25": "2vHvqWBxz5xePyZVvScLyZCFr4H73h1v4Lhk4eD4UZULJYfAyPYBVJryRPcSpg9sqXu9iS1irxAjw4CH34gRpPxF",
  "key26": "4oZs5uoENy99YQ7CBRxEkbT4KhWscZABW1tE1y2VMFV9wzH6hTaNJnvMfxnhxxcrFpCsUFuRFTWoJeJYL6xFVSgN",
  "key27": "64wFJ5CkurwNbmH9f5peC3R8hT2Yub8snS9KZyf2J4WULkkSEhcwxYwdgJeMPHSV75Kaa7YDACdrXgCGiXXFsF2e",
  "key28": "4i8QzbhTAYCcbem8j6DoGSpBAMbsuSL3dGQP3doMbPdPaM3Z4JWSLwmr3qy1F1pZ53SMNpMdBxUx6WdXfgoYijWK",
  "key29": "5FtJvCvmEaXtXzUdH3HXvjVK6ZUEsaC9vyznx44sZVwuQw6Jz6WRpbbicM726SqFeTy8y1vo2m9vzMPiGR1pvj7G",
  "key30": "4xhkYPtgAtDbrnXb14pScyGYxH6NwH278P48LSwx3RRx12fTxFodCVxZEHiBiPRDtRcwHpG6bqmpVqfHmx1ZYgu7",
  "key31": "2NM61ZEHVmjiQpZ3XSFx2oUPmj4CBRNCWCPSWi9jSVUfa7q4mFK3KgyGUBp9WoEiyubhLBgM9RRN7MYwCAb8bpXQ",
  "key32": "4uRbWa8m75ZogSHD6sPdX9HLSp6VPeWfnbcVhV4qRBeAyzLKGDwchYFSUZ6ckwTufVeE8vhNrJzMJriAfHcyGNRP",
  "key33": "4jURSoxDjoQ8tU2oa4K4YrQUSkJkWW5hcqRb4VBmSFya7sBaAmFhZiac51y5hgN5euifsoBy7NkX2nc3v1xG89a4",
  "key34": "MfmWuQVr7EUZH3bUHWDxtc5pUs5Q55sBCCffCvEVAdMBggdV8s5w9af6f75N7igf9Wnh58mMWGidTmmspZQ6yyG",
  "key35": "33dn7zXENB9SRMkfnCRmkezeJx3YhBcaHXDnptrFumR9TBC3eMdKXAUQ4Mg3PcbUTs9Dpm5u5wyHuRmzo4DSbbCi",
  "key36": "4sXRnURQcVEvDT5rRbr63VjgqQQDzeSDejK1xUgLYeAg8CgKTKHqWUCDCThPLMGGXqPeYv2NVEE82e22oRULuyC8",
  "key37": "dJbBkmNLpfD57zyeW4cgy9RVGxykCPyidXiGQ6maR9waYpa3F6gJiVCnWeyaVzLgbJhvkBTSNyYtYsSWBjZa9xN",
  "key38": "3KQ64cNuFdfXL7oZ31YoL37mqGeGCaTyiGu7GXzKiqPW7eRUEbmpoSZG9avE9Yn5p3Co7twQyM3fmHZkxtLKRY9Z",
  "key39": "2JEtnxEH9iQDpiam4BWHkMBE8JkR9NdJbZvEPBvtyFJMqnFB6Ppo4Zsj32AaWWk2JDBU5ropBEgxdWzcWWwaF6Co"
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
