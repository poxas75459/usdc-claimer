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
    "4gHz3ZFPAtgtUrQwrGz2EqpA5FCauo7gjE6tjZsEEpyfDihjSVRpHec2uRtXcs7fxi1bHwPXEByE9Py93hkWZXyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "277824ptKcNAKc9AcVb8Ertq5uH1UV5e9RXMfLzxmmRBSpqdqmRJ7AqeRZErUevdakuXY5ufS8CgWpmE2r7tUKNn",
  "key1": "33KE1SeD6Y4r8gcX5SRY9w76kCFg5iGB4CjySnqbsrRCC338ZrpcDjgWYPnG3VLfb18yw2h2rKihKCW1NkAbPoDo",
  "key2": "57ci3mNo2ZPrQUqD87UbgYRcWDLESSoMXL9AQ3WcQkXiUdXX37tQy1DWZJGJbmaQwsCWT8EcGuH5w8j8aZ4qonD1",
  "key3": "5zu99zoNAb8FBTVgCCPcL1dZKSjgCsFTWnSWBvLDSfYQZkiYc4yF7bhs85ZrpEpGxM9Co9fwtaHkS3mpZMp6XuX6",
  "key4": "4Fi9aPiYYkFd1wGMAd4T8mqz1KNLHrZDfnKjYFxkvaf7TR8FyGNCy9q4xcnrbf5VCp5YC9XycuVuexZY6gRG2yjS",
  "key5": "29SdPeedB1kybqBSuWQw9evzc5rYuvb8GAx6pqA5zpP1MZXCZpT7WNWv6WJmc8B4bbtBHJxpahYy6yUmm8JQiTyi",
  "key6": "483R7aEGGw4q1i7updichp1KVDtuXRSKY4g6g95jmHAJbFfoReMtiAXayCL5bGgno5sVRzpEhtH98xDh7dB4vNws",
  "key7": "3P4bqTnLG53m9ueiAxeZPhAyMToAJg2JH2zW44Yk82Z9957s3KaddPytNUKuoZDyFfsgb1SUyAyjKKvB4tcgjUts",
  "key8": "5fPgxAG2ihwdhEuJccR4tsBTYSm9mEP92PtcUW7jyuNw7MZ8SP7Hey5L64fLmRcwD97qhLrvWpvSfWv5omvFoB1H",
  "key9": "cWkgPG4J4DtA3scxwGwFrRbE1rg5kw9jhzQk9E82UkCDzHEEW8PGo89MvenfEYYnFzXTVuPvQ7H1ybkVVbf5gj6",
  "key10": "4fGSpHk22smhycmANWDEx6oEiW1ZG8cx3bMXAQECJzqbmuRYV5mibZRsJ4KddePpZHCJxTBkFK6S9jqgtozo9LqD",
  "key11": "5RDCkhpbvafk1kLU9q2CWHDJchM9jjhySYWVxiUP5LWdobBfXFUdLQERBwgfaLdBJYTkLeYyWNVekauJcqzDiay",
  "key12": "mwv5LC5w8Yva9sFbA3otVm2WrCRwGe2L3KPWNat2r1F3zTKGFfsYFxWryA9For5D8yBnWBXAzPPV2VTeNPaHHfr",
  "key13": "4hn3Pp7LGG44ve8nYPVnsYzHL8BN97H5YyjKYWZz5p4VrrKumeTGuhKTBurUenURkZnyAPsqwyQKSsnxrZhGtyVr",
  "key14": "676zNGYigGDFW61QXE1xs41TwTxxhzhUZHobqdgp43SPNQ11K4L8C4MTamaLw9McqfFLzBSYpNKbcviwMHMpqFMH",
  "key15": "5gQwPpEiGF6cPaJs3oK3cEDwEBeW292SWiRtMSocwhuhkpU28LicYgefxrDT8qJWogXKvcafjZVCmn8xoCEB4YzL",
  "key16": "4d8kY49TThp9DB8cPGFCpMwNv58WLs4qn1Ver8B8BDpx2XA2jz6rLe2NKvr6uSquy9HcYP1ZrRghf3EqPxrpdaJ2",
  "key17": "6RVcf6mXMymRBgh4FCMpd1wUecFajFMT3XAVvQJsCuEqVN5SHL6pYS7oMportCDMC6ZANQeP6sz7kmML5LgBaTM",
  "key18": "49riDjNUNuVbBUymnnwtz1stpx57cu9uTf53i9tAfT7wyZpiEKMz4bL1PFFANEgmsrSTcGYQ4aike4vKTGMvpKUZ",
  "key19": "JnfiUyipRaQg82GYRXcDBBYEz6PtapNQ91yGpRMEZ58vfjqZXykGwoVhUixzMz4R6mNZMe5buqQDGdbs7NPBUPF",
  "key20": "2Ad9iKSeZqLrrhTB9uVqDBA4vCBQCgDeUBuU25Jj1GT9MizxYphxrW1U4y65mPs9Dy93orWTiRCE4w6eLr7JFu7X",
  "key21": "4ouunoFXDJ9CJe4gq7qm5jN8eX7J6sAwoe19es9KwiHQAdm43w7z8BibAMpJFJAQNGhSitHp2FHQXJFWKajbQJoA",
  "key22": "3EiD5yjjSduPLS2DHWRiqfHfXhLL78AnwbDfLZpwHqHay3MKcwgocRKtv7SsEj2X7mgRSs3Nxatm4CF9jXWAkHGE",
  "key23": "3FuN97DWT7Se8pnbyRzc1kWF1puotdaqRoM1iShZf5CgD6jYugxpRpXpViNtnUwTj1sL7tfn1bzdArbMLxgg4pcK",
  "key24": "5JRhg8grugiJQHkzPbToN6qWoFcQZkjsMxw4eepVibN5NMyc8nw8KjqDFAhFEi9ZL4K5GdsxfwXr2UaE6xYFFDWs",
  "key25": "5yEnXQdLZoXuBWt3YaBrnZC9StRorLDyqaiLSA8vcbofSkDGM7jcj6FNfAP1sjttY3tCRNZPacAQwrgwt4ecPhDX"
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
