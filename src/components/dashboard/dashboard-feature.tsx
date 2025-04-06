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
    "yQrSoPDEcgU1fKP3wn5soZEwVi5VLBPZap5rE1o6UBjGDAaMBXfxfFZn89eNoddDRhw9gNmaYRZaUXfLtrVjDow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ezPE2MnpwJKkbpr8kMWA27Wv1DbSCBtj4ACn5baR7uJW8itx8BtS43YtSQCE386A9NXpFq8a1jAe7RsE1awhnYy",
  "key1": "4n16g4hDan9toVifnfoPf1FDk17rbrJmK91bgtoZm99xr7CQmLGbJYYM8MdEwvNpmo2p4tEjsTKrocybAUNXTKsy",
  "key2": "JT8pfwYjR6KJ2LX3uwip8JRLBaLESgedkKmgzGn6cRVJhc2wdQTLQ1SyiC1u5s3tbqWeFgGVdrtvkppdBDP4P4n",
  "key3": "5LH8jEKjjSq3ut9MsfuuE37dnvFP3QeCQsbSugqqNU1JGRypzqc2jJp8Dv1D5pACFRPrBpotz2HSiwRax3C7bgSP",
  "key4": "6452QTV1pE1h6hLutdDBSRiqskGMG6PtW2CM3ey6A5vx1pKagrUMLvrYS1Z4NtvhLgJ6ZW5NBmYQ9yNJA3cR1PYA",
  "key5": "4QKzxAKUpbbYPjDYt9oLkfvQXXW6rMpYARa5HMvxq8Wo82GXQn8zJscumGJiVPAgj2RD5FV3crnYiaB2ejSwXEX9",
  "key6": "4vT6r4xXwdRnaSv2pNpKwDHLcqVgWTgcnqQDtNvXLdnct12XfpVHdztUgW75BrMhU7Y9eLSQu6xCWxj3yHZyjqSK",
  "key7": "3NVWcTAGTt3gqozRGjxF8uHP2wJoMemNCWW8o2J2tFoCFbHCR9gQnvTGRTnm9yES2axJGT56Us2Fhs4SFjeR2KTA",
  "key8": "5WuU6nbqYDnMWtbhUqLXtZXyE3bGhBRZEJhYf5XqjW2h9HpD7G96B2d59GYpvoqQWy173PGoHiRM4dSEN9BGkS9J",
  "key9": "5vzUQLMwYsMaVeFWSjfn1TWy6GntzpPSHLiAmrpQvCDcLYjLzT7FbwmGDAHtQ52qMK5ZdbKGscXZdLH2AzkJH9YG",
  "key10": "55pmscEVxDYSFqbxrXVZpa5NcfCzthVy68BEtiEqk8KhBFrvh6PGnn1k1Ey9gP7hCyW7eKD2GNTg1JrUroBPpA3A",
  "key11": "2kokd8fktjFwgxBgF9QnUVGr6Gwckad6vPotyhbL1N3YzysEVUVLA39gpSUoseL2vmmr6ndE1pqVFuECKU9zpRdy",
  "key12": "5xngGijf2Y3eCzAoWVD5BZZHzSfXKF56Tj3bVj165AkSHKZeH7vfFQzWMgWDtE9Gq2xNzaWUhgAMi8RRCryPWfp4",
  "key13": "24tZjyXgvFe8Nuw4Rec2P3vvfsA3xyossV4DfWVzJxPF1EYkoKDwiyAzN4VFPogEq69S7ispThmCyHd9Kj4TC1sP",
  "key14": "3Jn4py6Chqhr7jNxxD5zEFFHyErjmykWWEDLCfAWgmnShtbwULsNxE8WEH7NFdK1oUj1oEywXPJfusHyYx3hPX9x",
  "key15": "1fZp93rPq2Y7aaQ3KU9VZYbnWuRdvfELBJxL5UQhrboG4U1gPuh2fmPFYtjbdswRYTi64dsBv7fecu7PDKNhvJg",
  "key16": "2ZbAqtFPprGrtY7K8ymtyPJX6VtcRjfSkSDGJn1ibEsJ7pq6puiqwd8k8G53QzLAV4PPmhnQn25jmHYwhuozLiku",
  "key17": "4hF2kqyuEqu5TV538aWSuhR6z6RPvhJ7j1Qmgb7nZkR2w6SvjLkJm76pt9V9wiPJc5pH6u8PQuHq6CcoPESSCZcQ",
  "key18": "43Q4KiPiXK6sezyc8JwtszbwVPdGYSdeN5HWfTXQAzpWwPqUnitHYXcJgRTXfzkuMmiKyXXpJabEWdqExQfqN14A",
  "key19": "5QAjVQCm4VYAZZnrpR1aHqN1MZZ2rUne29YMuZyy45N7UxDKxGN5efTBxLeyTCSxuFPQpGrEHHUPkspmN24tsraG",
  "key20": "fuSz86Ad1Fes88C9pGRRArN8hXNSshaE1MNSUkqeEwASjg1GV4wAaZK2hsCgqhFzFuZtiGcyW3C3vvnojzMaSjo",
  "key21": "5iMsBwtfGZvzJjbfFqhVCtMvEWLkiDQ4mAoZe8FW8LL7cRNgWwWs7g8yjGxCnpH343auyWXjxbbLQyNWpWmsqEr6",
  "key22": "3GVFwfGUv1m1nZpyGRxm3hXjbZVnj2b5khjU62rpoV8Mk4Zp5JaZUazD8TKXACqVF1ufkAqGX3en8eEudH2RUf9h",
  "key23": "nCZEVrDL88djDxgVmKiMsoo9DDtojZzR99bqZhD8biwr9ZVTtH2rHXSxWPRs2KwZ7vtjbRTbiuBZQvfeVzkktQV",
  "key24": "2r5xpGAkfnnKvyZSXqZcXaGGsumAipzzvjrBHzSV4FcJja52MD5mYdk8Xxyt2qj3zpCgjiVFQhEkKzSM56AoDcdq",
  "key25": "5FgQeJyhKhY7eTQtqaBsrMHvJrsh395ZpjWSD6iTbLXnfaFMG24zbuTBv3dN9y1R2KsmutdRQ6Y4UywBn29imTfe",
  "key26": "5UMPJAAr8oyFfTyVEm96hXTLcEdeWVoKqRcbpu6Jw9YuMvSw3RXMgeVEyySQwKWEN3o2E9Pwh1LJzBFFhGVUj4JT",
  "key27": "3RWLWWcdq3f41WWdnty4Hixddp42JxyfBzCFi4tgmsjf1nUT97LtWzRCmksfKrVHbhEV2rvqeA1brrMjLQbR2m71",
  "key28": "4nJrUBCfKkEAhKxaNF2g4cKcbRCsfwaVk1piBCEKCxv2zWoT2gFJV4pQo56E1a1DSWQRU1kCfo6TGSyfaatZFZzZ",
  "key29": "4VLsCk46uZ72uoLkFboxVSHRFxrUynejKKLqPrejLpydhC1RhdEf8CnkDgrhMu7Um8weMjf5BG8Xj2CN6QeatFNy",
  "key30": "3cdR3VCmdYyNM8phUQGbufxwsBwgNpnPYNTSiZQCdtaADqFK6TYGkTEC33fFBRmacvmRWu3fb8PVvj6RbPxLyuFD",
  "key31": "B2aedSKD26bwHCjtoLVR7KmzJp5gNzeqgJeb8ziXdCWkthNb3T4rWHFMwQfJU21VNQjKwbSpWexJUdoWXKMK2hL",
  "key32": "4v3YEo7epie4tiJS5XpL9kBbtGEYzRzaLvmHJbNG68rugWrvWdmgx7eXzbXiJ5bierqS5S5wP3Q22QwwZTDwTVJk",
  "key33": "YFWJPygk1hAF9g67SyeSqS3n7ZzDi1p3v82FRb8GJzKh1UWY47ijZvHaEkF5kGopmicTuWsKRrrrHE2LXYarpKv",
  "key34": "5u5M7XF7ppdYvibfzRv4qsTb1BGpUCeprNBVbGzSvWDETNW2cdZ9ssptNeqQCdMJMJLmXXspudrXaHYy1HHD2uAW",
  "key35": "3sdiEvfc4HF2L9CmsQeZUfA7VFmgot5tqrk6nGnWUZ7CR5X5kCUEv4X88j2u1St64zi7mX7kSVxofu6MfuCGapXQ",
  "key36": "4UWJCgyqHyygbxV8bn1a54LMDnArKt8KkzH6ACrnT5kADg4vCGFdLKNhLktuM2MWjVm1GmmZbLCCnXLakNtCgmaq",
  "key37": "4TnWu8wy8FnjR9CuEXTFTNPwrbYoAG2KbNiPpbES4BNa5XEL3Z4qzkTfAZtxCDm7X3R4ohF5mtX89M3YEpjcbPJJ",
  "key38": "4f2HLZXRccmdRRGSBCzkjhLZrQitBGMXS9axrqKFDpsyzHdwmUNirCPsJ4nn6qzh2srcJfwZ5Hx5SFRorKFMhUCC",
  "key39": "3hxTbtZYnWKDx7bHNCZgxpsKFA8zH4D6m7dCnRjvEdxn74zBg8YUYHVEcKHpopcBQERGXDkyUUchHsMBRh71M4m4",
  "key40": "53fs3kT21p6DZYrGax7Ca1VSJdvoCcLsbcqLbXF9PWcdsXhZbHyqsUsk8CMywn8CkVVYDRkzA3DeazvBAQN9JvRs",
  "key41": "5TdpQ6rt2n3MC6VooXPHxpqxAAXV1Vd1k2K2QPCMTXyfxhHzEeFTM4U2GY5fQqVW7bhD6L6pXNNv6zKQr7XSjH68"
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
