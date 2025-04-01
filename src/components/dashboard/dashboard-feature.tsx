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
    "4YKHx9ePjv6CCMQZFAQrL5qBp6PvgnETwfnZFHuRag4nZ8DU94em1vEPvNLPk6c126sic9sNpZDPr5MAzFG8XMvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPNVCP7Lv4M1gZc4Zy9fcBdt5U7B1VCHwW9V8ga8VkxSD9HoQTpX4j8sFSh9Xtc4F9FPDJf8CRSV3RgoKP1fjAs",
  "key1": "2ppuEtcLTYBxQy9kTujQeEPxjm3NduGffaNjqZ6P3qnM94Tyd3iBVJs9vmdCqw1MkvV2AgY74SKSS8tBv8iU7W4W",
  "key2": "5QossGcB2ZM2s38oxBDdwKfvKJUYpy4zNkXf9mze3zw95zJESU5E6Luc9RTWGYCJYTK3rdhDayJa5ahXZh7jSxK9",
  "key3": "5bSRixKVUhxMDhS8LEDuUN6fjZJXWrJz3njHdAwGv8A8qyR6nmoNGfscVHUqyTJkm1m1W7mE5G76iNhX4dkyFgmS",
  "key4": "5XktkQrd14KwkWHanfytCdoCDmbEUzgJbSjtDbZ6Rb2KbJiuRuARph1qaqntxPEe9FhLRHTMNfFpUtz6vBFk6Nmq",
  "key5": "42wJdQVuyukZ4kYugCTF88VQwm5dLtTe2LGdorhuuWi5D4fLAxrDu12fecj2wbd3b2sRaXmEtXKrb2m6F2kgWL27",
  "key6": "3BNWPiKTfZQzcJkFib2QEvhAaBPVF7hxkY5ah7wfN3fuPvFfh76WHpBomm7T3SRezQChWRDDXDEEvPCZ1LZwBZdw",
  "key7": "2Lo2acjSwV4m7WcHzknv9eeD1QFjmHXvLLZDWsBNcDJLkvg5NZNdN8RX3MbeZjr44v342CSfu4ZQkSfK6AVRjeny",
  "key8": "2kD4gL12E2vr1vZdfSttj8Eiu8SabtfSCEBCkjQdXGVgWPh7Zu832CJGrs4eboGQLhMoPs4BLtraSfVbDavJdbjh",
  "key9": "YgcMzpUpBrtZVTbpV76K7n5dYUGfy2yWHPDBXg4nJ64ACWnTeTwAWAGxyKHGn7A45PBieyar3FYNjT5VWZ3JRDG",
  "key10": "2WeQFHtLL2HEMopBZFrHJamnX6d1KqDH9xPjFhUjfsjoY4rRBwQNqgSh8LYPifSZq93WqLzcambFmquJVz6pXbH3",
  "key11": "GC9EurPa9hjYmgP2vETeQTsgXqsBvE47Ca61PB4KceffG9s7D57rFQZUmiRdJByWVs7bGcUtoDjU9Fp2vNFbvdN",
  "key12": "4ktdDfv9yekZMhK3cac1K69TBuLdiPXagyB2qWjNnYAqh5QjL5cicvSUkF8EBbwh2C2ywN16sAG2xJzbVcrMm5yM",
  "key13": "tkYb1zP7NEJAVUQCwWx6Fh9xY5adJSqJf7cL7xnxpDcVtDtj1TNgFQdEoVywELkgqaG11ML7THL6j5LGG1JWnPa",
  "key14": "4KanMCaA2enpAfX8LBQ6gCG1k5mVuZPFpNwRC7baxtvBSAerQKscJtiud2ykANLr7EoB4SK6ad6APPXQE7bmDyMS",
  "key15": "4kJJ8AhGDEfEgLRUAQf5Mnj3Zi2G8CbbGrMC2rLUhCjwHCDTMxk21ncZADdk9QUTkfohH4ECzbzuaDHuo33313dg",
  "key16": "3PQvLZhcy7geHcpxk5WXG1rrBrKQg6CXYzDUXyFc6gYu48o544KCbCR7RypiJRX28UhSTEqu1PvLNxPim2XH2Jk5",
  "key17": "91qnk8NJwtW6yPXoJKHzVQXDmzaiRp4vALCRKiuGm5TaLspsjsurDcMyPpNHqaPT5awQFngqTJLeMP9nPGSaJGN",
  "key18": "33U192eJM73pWEwW7M6RGXcZZZLYZ5N4AbFmGuuh53uzxajTFrWCATjzTmNStEoF4GK2mv3MTyBjxAxHFwjCrhSr",
  "key19": "52bSKP7waHjReEgGC2L9yLJRebZCnHf1Cafn9UDEViXTfkexFqC1gvBDC4GBE9hQfLyskkjsKP7mkRoJvXhkdnbF",
  "key20": "wxxGwArXRfoCt816oZkW76jkX9MJFZzbBD7syid4uCtrVtAfMo8oBXXRSmzkcQJ2RGvvTKTJi2sbyxR2UAvgWTC",
  "key21": "2mtchWUuJtCNQSfz7wHvDkRZvBancFMv6CNzduGPCJRwXAZMrrL4VMCVrKLzUzKrqNTHVvswBWVuS6M3fLrxB9Rc",
  "key22": "4QJLpFQuNxbDUwuKuiD5w3fqst5HFWMrkWMU2KZr31VUgQo4t7bzHDgexAyr6scSNrm1eyzgsdzP3LjtFCWtvHBx",
  "key23": "31BxuAecTuzMTcxr2vk58t4XDHLJkcEeKJXZTsxjadie2WQDocvyffK8Lb3mJn4Lq6ddmDj1mNZaC2c96rdaGmk8",
  "key24": "2Rb8rt29hT4mW6Ycb1zM8CWDWGwZ2NWApHtzqMxefLf1zbUG2ZbRnie6xWSYPVc8RiwBrsyJdAoya7NDmMAJfUAE",
  "key25": "3v1BxAkYxzj54caB15gLtcmhi1uQLFLWocyRD71WZ5av5YD34DN5py5zGXnj3n8tnUW8dDwx2bvRAmykc5msMSu",
  "key26": "2szXPhnpqamFM71HvPCACVNjyKqSiAZTXnDSNcbz5L6sr5Did1n2Qxjn3fYMKETJ1qiKdvdKV2WJktfd33Y27TN3",
  "key27": "Do5Wkg6eWjmVMSsVQqqH4KQ5UhGx3ywpGNGtpMucsqCdcFaRXPsv1rWjqWcFU2x8MHs5iBKFWk8sV2X31HbhppV",
  "key28": "3Dkg3NJrcCdAYRnzmM5d6LcnVQQQ1RqsaTtz2gvPYxf2TKiF3RzsUiGoEJ5DvuPE6U5xrMVyxzcMLmxesMFaPhLs",
  "key29": "3iWPBCYapd32P3hrBdjjziyhx9ve9W51XA9qtx2apmTMvNFD64uAzToQkF58fd2QC22XYppPipCVXEE7CdkPrAuk",
  "key30": "3xUweTDpXmF1suJuSPahvYpW8pQmgHmKGkTkzhReaan6EHDvtf8g774N4YPRmMCE1qA1Tfb8NSGn8Aciz8NYV5VV"
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
