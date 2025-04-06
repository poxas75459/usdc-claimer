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
    "4J1WL5JVemAbGhMxccW3D5jRV74Lo6rWLdXiHVQUDxMiWGozpGZqKmxuwWPKWEp273dejLhKoHYQm7NiUEp9XC6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZmeFLUMKtHKmYEGCid52Nc7KTiPwAQqAtxHhQVzFd7g2y2eBKyfwKgdRCpGR2d2z5RTdrPKuoMCcCNCarQQw4x",
  "key1": "uadf4gwzTvYFDt1845yqucmyxWDNruyp6qrE5g13bDWadzNaypMsb8wjswkTwa2m2Wi7agQ1GWUGEauyrrE1itP",
  "key2": "5nQeEWmsigtJSPCvrCavMigcMFZU3Y14HNtcRDeWnBRcwW6r4MuTov3dkYK4speSmfD6VHBrV6jUrRPd7jQLks5p",
  "key3": "2T7HABvgdsmadBNrRUEZ5qVXU91LtCbrhp3hbcsQun362eJxUXuicveAgiLJ5xXcf8SoJu9p9MrHYfwZppCHGhjN",
  "key4": "4uxXpWvG9dutnv3NompKxiaaEPvKhybpveife68CgqCUTMDTAv3gnWU4mNQy1zkjjFct6vNAFcnsnr735mZ4aEWj",
  "key5": "2GmT1aWaE3QjKEocC3nNQG3HzF9QuWWPPKvh4gBmLmMC1bhGDJ6x9UXLvFzV9MESSKWZwyLHXmEYPr4CrqE8vf9c",
  "key6": "5knyQRDfgwX4GNV6RojeQ9hstdzohCHwX8ZHwMrXR9yCnx75u8zsVYtWM9cJFRG6cHSD9SRNR1d6m98rvczMzwd",
  "key7": "5SBJkNkKiXLHdfTw1BZJ9KpDAs6QqUwKb84Ru4Dqqnq2t2JED8q2a4Z6fUWCCjeMkFBqPnfbgxG8J9KrvWogaqYq",
  "key8": "4d7ySoNchMCy619AEsjqVxdBXZemZMEUKd9pYioKHvhmoLeM6RcneTANKTQih5mfYc5HjsHskcBT8pt7QpsnZdyp",
  "key9": "2ubfv2PWCShfEkxCcwnAo1XwGreJCFS2U2c9tsiBt6xFsizRL27xbyp9rmnfUUWuQPm2rAHtBAdw7mBpwzFFgMj6",
  "key10": "3GMdT8vuYFDqV9UycBbLocUy2DkXeY4hwosujYrmpsK1rEbtdSRXPa4BugNPBZNy4AzjSZ1TjBKhTbyYPEt1u1xS",
  "key11": "2pv613fzXkJgz7uBagMBPLGsZTzGV7PN6ynboJ9Ds5Uat8CfFA2D3QYmovp2LTrniKjiWhFBRrgBWaPNMUNahYEB",
  "key12": "3gcv5PdhsH3RrrzyfcmHLSPeMUADwGZNVdTe7gzr1yW3G1cHhWQ3Vpnz4m1yH73f3yG7GbEBn5EB117nE4zAipLM",
  "key13": "5YFi9YfJ7FyBJmK1Xg36JWQVCmsrzSopL74U5inQRDA7VwqwUrH1PUjzo9KzkzATS6bK4kULuuNrigRqekHJ8FLX",
  "key14": "2KC4QKSXXWRdtrBDvcrmSYCxswQXbhzatXNZ4ebPL7Ec9fYCB3M5T1MqFrQwymSGG7PgQWwv9Cv2CCwFpSetiamM",
  "key15": "5MbZ7h5uUNn8nR3adqS6AgsdbwEUQi3wUnaEHxBa4qFF92XcPps1oFLHmXCJQ3usGnDNH8qG5sTzDVWSCy2YoQ6k",
  "key16": "3f5NivsVykeJhk5RbCLdhK2KGqLvpj63ZgL3kCe34yNn39c5GB8p15eJ16utBaxzwpGqGB9hBJZcjq1LrcL2Pnqb",
  "key17": "5SHcr5bzaoFerM8VDZ8mDed3kpGAS1MJzaqANrw7ys3DZDYD1YnP6aSf1kyhAvJzGAPyNeR1nDqTBMxXq7xR6nQo",
  "key18": "3BRMjJ8i5j2K57CNiW3GauxT5NQ27DbZTafMTFpPUo19Qns2L1AB32YY3KUMecouUj61vTXRsXq73SG9eD2oFvvK",
  "key19": "4HpYt98UnxGFdWDhsvVAQyCanARHw9Te4DUhNMGYb16iHBCY43JSYEe33e8idtuBpBbjrBZ43e1q9RXpAWXXieYK",
  "key20": "4CYMVLYgqtf7iFgyk4cMV2RPEg9CizoxTNLXbj3W8Dp2YhLU9bNCHaQFGHbqg89RiEomxqkfd6Ani3XZDipMRsaA",
  "key21": "31fyAz2ELbz7ePkqCpi2SNvtpEffCfryywtS6SLF3EHb431c9CQWiYZWdynjGMgUXckdpeSLfsR6VUfpp75mZpwk",
  "key22": "5c9qWU5eywUaBpSNULqqxg9fzLRTEhPvE3bNFS1L8wRE3rc7ZwfigfSXiSfbGKgHZpUVxBBxPCwrPkGpHGRQ75ST",
  "key23": "5sTHbevu9dw7AsogF6amAwpEdC35yoQoMbhN7gsrVC4aBqSExnDhopTeTk82oA4fTAy3cXspZoX3o4QYa7qRsAwK",
  "key24": "2FkvgA8y9LFbwCwvtZThFxxgBg8gfFncweDwj5kZR5s9soAuCWjSe32yVjVyqrcQfCNR618fwgTzAqQSFyKrUEgP",
  "key25": "4VQkqSFW4vrKGcyDBEPLtmfPwZfJJARYcZMQ38aqsg8nD9vvf5gHVxZmzNJwfRafzg66mmzuzG91hXmp5bduJiWx",
  "key26": "2TGS2jUSw6n13wkpV88oJRHmLGrtT311hg4eYzrU4QQphn9uErZLz78MT3jShPvQLx49E3FNSC9Xgn64kWbaHU6b",
  "key27": "o89gkiR91bwzVyJ3uKomGHbdZmxw8pe6BzWd5mnoqf76wpSrCmkGRBaSDMwAzPLfPEex1agBNArMfPLmGpbXw7Q",
  "key28": "5ERBg9n1Kg9T9ax91TpDomqR8ekH37YfH2Uhx2yWc3f8t5xQ3ADoQ9BixH3g3fS9fAh9opcuqYijG5PMZzw8f4KN",
  "key29": "3ENLJS9xpQgRvi1cMAB4P5U4ZihRA2yoVuunWk1VhhpyJocdKGGG8xhLLMCKDB1ibQZLGSHFT6G14BWAq8BiYi7d",
  "key30": "4G4Br93tHxcdQ1BdJuBvmXD5SNLaCsecHvxERKm1jo5pTunbhSjebGmQNnBPRbHDfBnndytkFGW8nfofbo8XLJcv",
  "key31": "5BzjnAqVjBuxnoFPrab1mYHb36ASCEn5bTF6jsAiLTUYq8izYTGCXBdq67QZwGrpEGcdbqBecPjqgxkexdBbUDNZ",
  "key32": "5bDcprHtfN45bokKSAWTSBQjnknXxHnoY9PJadK1GCQPPQFMv59ksxYL9rt91ZShxJCtwagGxtcBtt6tUKm2nomX",
  "key33": "47XQfbwxmE96CXwd75jn75rh2vhNP5SFUjnXAvwH9ASFY4xWvfGQ9sw32aUUkz3v5JZYDGiyeeMue7BtGaa7Royp",
  "key34": "4DeurrxXUxaxfg55BSQxzWF8AbQsrJJVaJ9FeQV579jJjuCmoZ2wd34vnqSfLHA3xRPiDf6juzrPkJyLStrPKc3Z",
  "key35": "5tzc5QK138BiryhJwqqZGCVhQnhf9er9vqk3R7h96dqfwogCTnmRjZK9rjTrwutJKcPiqprXDZmjTrLoe19xfjJ4",
  "key36": "41BoeKVjMyHugcX2rmqJrD29d4okNWttWHFeg4mEP3r7zhpYWsEiPBhaUFae1Z9YjbYmzL6aHHAbUoorGWJwh85z",
  "key37": "4MJY3FykBimyfEiSUHbosnBC7pC14R1xY16wED6GPMBniCQvzCSszTgSGsUx66t7X4Kt3i9zEhHBQ8giUo46Ygjc",
  "key38": "36jKyg6fdABkQcGYEvpSt5xs6dhRzNek6LXtVDRPQMFQDMvzCEF2XTNgBNue7DTNFgjrm5wJhzZikf5Geguvn3RB",
  "key39": "ZH8CKtenQNy6fZnaF1fFwcazZ8EX8Do8EirwRKMT7dSBh8Zg2AdAKAtN1GVQqwH1wHwS8vxVDBLQeuEQg6YnnUz",
  "key40": "57V4dTyt19dJ8ZHscx7gBYfxtVspxxnyFrv5CbFcYEqZd2zFP4EfVqea7kDn6wygAQhmcTX32AqzygQZRWdRjR3C",
  "key41": "3ouYUPgEpNmhagbAXv2Z9r18h4JtnLmpghFYSqmskvno4XeENsD1qfRNQwuun5qHp7pvZDgTZvWk8k96AiRK7kok"
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
