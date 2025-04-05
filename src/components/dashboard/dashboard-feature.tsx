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
    "33c1vFTs61Y9za6tRc9udZaYccWkXgJnNeRoKNrVMzdCksVVdRcXKQCkLcjBXNUfzUppLXJT1H79tAaHdzSQvfhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3CbCg3Y4cG7voPz14gzzvHJSon5bhU8WA6yC6N6GB239pphikXbZpcCdyC1cSekgU27BV8Y56g6a75RCrWGrSV",
  "key1": "2nHo1yXTK3tk4i1RndUytnMvVC5NqkcvVgB95zji4C7BJvb5fYmdnY4tSMQpvUXZ29s2syqtmj6VTkpr7sXxa8i2",
  "key2": "9x287pLmJcGmcjxYyXNYc7VoXEk17xziMJSn6a7oNKSna6t5RhYgrUKXYsDZUcf83Gm7CStXPhhdLY8Yrka1kCw",
  "key3": "5j6GZiF6CHKsNUGZ3EuprZkwZnjxyMo2MN54cACGPmKDCmgNfbiU4SyHj13mAWdyqihbHzYp4bLn7Ctwgg5UYsFu",
  "key4": "4TwnWPVc7jmVWaQerx3qCWv8p98f5We7Gh1kCRy4p5VABnJJdnvhxWVUL3xN8efhNvYdHQXizLV9fcReXmWPbo8N",
  "key5": "g6hZcfPNbC9N51TwAwyE48fna9FP2Z64Za7affqAt9rFu6rgri9zN9SnyfoQUF4zHnMWX6qpyrsza5YJAPSagTf",
  "key6": "WGobzBRxHLBc3AZ8gsHaHmveHQ8tLZCDZiMLBStoWaGsU9YUcxNKR1geNdNP8YG32QoN9wdaa3P8wGfCa9iYkbB",
  "key7": "41YNN4JB4DGto5g7ymBPWiRycPJtQihgqQYimRzmvQNfw1MQ86Akio2yh2TSj13RFhp2an4AJK2UbTSgg994gD9L",
  "key8": "2xo5P2UDdEcTkUXMhuSqEy484KtdC3tWJEXPTqwzeb6e5Kt8TdHUJECBx8DgcDV8xWGH3mwXMWv8Py387YfXxXDE",
  "key9": "62fG25SWbMc6t2Sdc6ZMkqiEiyjdvCbfoLh8bVUfaDtbePwnpsaged1u9EUuGfRmW7qinj81uzCyxqvuAH2zSQCA",
  "key10": "5rXXqk9Lt8gVSp1e5evcc3Dz4pr3F91bXsNVBeAY2MMUdH5ErrsbiajXFfspgLmjQEbBwg5APBYJJMPKvx1ZK5cM",
  "key11": "4AfCZZ1fk4dXL4TPGHYD8TSTfKJuNM48Qs54duCi7YeHxQ1csK1HR7zYp1LRPrAZs6TjuJ4DDciLsuYYwZq8VCWk",
  "key12": "498AcXMhCXULAWk5Ce18o8dJCcTGEys6tJa7KvcoS5rfLhJdkV3cfG4fv9xFRiuMaLEjPBn2tuxDhTNBSkoo6vHd",
  "key13": "2jvk1R3waNpWg8G2mFECYc85N4cnGpwhR1DHi49HPC8ubstYSUK2uec8dMnuGcE94yuEHeU2bwkFMveZ9gL7f8gV",
  "key14": "326XzqS3NH4bGQAn5M9TTYBh1nWzhAwKorp76VhpMpwgq6PySTXzde1kkBASJkE5xAANLpLqEmA27bVPDFb2REwg",
  "key15": "52c47BTKs2osdUuKyCUy3fvMJ19A4C37jAGmjjnR4afrfopGspGtJKHPmb6NpEyfyiYkLyP5KyQsg6ST5fmjy5sM",
  "key16": "31ZAXwpLEfS44BnA5N6VBkqyiXZsMZJeRoxCDPGrmCwkTzqCDY8QEVUS2R2LmA51MAget6BcSiaKj6QAEzE9tjmh",
  "key17": "4fDnBzfHGkkizGDGrWEVjC5NytDEkC8bDu9MZfSd3nXsMRiuhbXXYThHmC2cNsaCC6mbPPxgBKKJvMmQg5FVqwfh",
  "key18": "5zY9VKBnFdXz5E8ycY1Ygf97fBYsxA4YZyUZqmP3mj8voAASm6F3LzJ4kUb3YGs9cyUjSD8XF4uqTTbohNn8dXPJ",
  "key19": "23C3R2ZasyJPCom7zBr3RW3UT4dBU3RYeXL94ejCyYj7GLRZYSKFdS1BUUNyP1anoG8XvmkFHaQL84C2s4tD5wjM",
  "key20": "5VfNep45JyX19uYeKeMEk66vrgqSmduwxenBTwUJNztSzsFFV7Dkzy6eQyV6UoXF3duDyMi6QhUEAKMeb9GakDaU",
  "key21": "5ei73jkvgU88iQ3WEv8cPwXbRje21HRCSCGn5YVP6EDFErumPDyWXPNXM3e92kX4d5LvL8n7pj43wQmzhMgkbMZq",
  "key22": "UGbr975T1sKkg1EZY36e33DAefkfwaEyB9nRLuVE1Tup6cd248GMxSdMiCCobhUmcpY26m45PVHMaSZoFjNC4Pf",
  "key23": "2tpPcwyjcStMB9skuDtc7oniR8UWcu5TqvDcUVREUk6LF8qCGiMs6YdYVKk6A9jJuJJU1gsGxWWVuSYNFndt3J93",
  "key24": "2TGAVwXQusyeNL5zVmquWhkBuLTurZcHbhg776F6CLRCpdhnSLZkeVuLcFi4eZ9z5qZUgCuDmgcEq2H7C1ysmX4N",
  "key25": "5XCWoXBGfnPymfyXPaRnG1Qfa3wYJTqo1z6GREkros3RY5AKHXogVETuV7bKqNHCTozdBAeo1g2HnQ5JcLUwTYxT"
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
