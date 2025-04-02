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
    "4TWLMtxgPHznZxEHbP8bRkVZAtCCZL5Gn1K3CcxywPoXVUfTcUJ9JXPPFekub4ponndhAWkYy66ouSTd8GioGrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u7rwDgtbBfwdQBkPdhf4g2M1VAgbWHmnPvbfQduCWJMn4He9MYaYGTQf1vhDDLnkUM59fUYNqZAPTT2bveaequm",
  "key1": "5xJyd6kR8HghTBpf2mM8kuartYWveDyxSGEbKvkTLH9JV891KYzfWpseU5HBvE6AFNC7kxNp3r6GVP1exLdEK7ax",
  "key2": "f8CHEKYcck99wNqNQbWAE1YNEogmmAUMBw1AX5dHZ7pHctQGcFidJoRsrqtGhLoknBt1cw3onUww96QN98RAiyt",
  "key3": "2MDgyxQ6Uv2cCHAGKVT2SjL42uVB8MEkHb2rXUXPvbB45J2hFnE1mV6HHCKrmANWgwY2kvrPZGiszeqThGMcH1nU",
  "key4": "4QQRXbbR7nqEWUefWFbKEu3uAWG6xZTMP4W3Mn3W1jsRzZpEdwV1k7kD1VNze8wCxSrRgHfCV99sKYT5WL4fnQgG",
  "key5": "3xiSTXNhTEgmr9b9cEQQ4LPYKLt6LChtx1LV9R24fbXqQeshPKQdGTJnqv124ZQqHgVn5U3UN5f6vYEnt831ArRY",
  "key6": "4bmYKkk53iNtVFo2fhvX4bYA78QJsF65zivkFC8LVu6veifPQ8hmyWR3Zj4ANT4JLyqu5JwTM9vGXBE51FwXt3H8",
  "key7": "JvkQuijX4ZJfirb9vmdpotrgVe8N9gvPDp7DnGskhU4psJ2j7tBn6JE1nWUNdgfLnYnJoHeSvSHgz6RYjkCN6Nx",
  "key8": "2RLFMQNjBEv19f2qcbm2yiExJZoeD5svHr2nkKYFSwYX1YGMAVVrohaPv1gFRHt1n9PEem2TF5UV3D5Lc4audssq",
  "key9": "36Y5BLAVSuQbpHoWQebqSSYDhyNCHXb65TUq89LcBvcwFdbLUCi4xuL78CQJpftHpMAcXnzSSh2PfCTfHoAofWjp",
  "key10": "5QTZzfosPM2zbqXb3xQnS3nAcp9xtvr9PSRx2cCwtLAhpxDCiAfvEmQPcUzqktJKnVS47qznjPkUeuVGNraqeWt7",
  "key11": "2qfzmYNscSK4ipjkKV9BarPvx2G3tyR1RHV5ahw7Lqr32tJL6rRiR54sMEBior1Jq7RSLyBbqzdJQRhKEyTRqH74",
  "key12": "5JDwNR5MLyGdKM2TGudy6itUyYGSwJzUdK6vPPWaW3hcu8Jwc1ym9fT6nTcyKj3fdGa5ZiHxvjLZ8JJWuYXJz3BH",
  "key13": "4Z498A3N9j3gtkGSV4mF1s2FhJdDK4owzNxrxqTwJB4RG4S2AgVmkcuzZbrJNWpnVVSipLBj8nn7Zxm8onGTWYPo",
  "key14": "2E1VwevWMCev6JWraxaZ2YLASMvkFDyVubtT6xwkUCNVFgeXkunDrwBaHrQTcCkpfAdPNrpsjFmHegpLoZEysjob",
  "key15": "36jnwFMs5rHJnAUqXZqnSpEdXBp2u1Bvffgrvjop8kqWva1TPJmpziWaihy6mLmJt8pAo577TAHCdhVJkh44ceGE",
  "key16": "57qjymGJhBFNjuuQoTk3s4zs8Em3N2cNPMxNqxB6HLCnP7DXiQuV6huas4x43RcYUsRUybKBe8fi6pcx2rdjrCfS",
  "key17": "2H9SMpxzQ2ndGvhHTVMo2C4Q36fvMihs5vukYJ9QY3HJNwsgCyy37CbzKkMtMBaqW5SGsRDeufzW3YQsgZAcRD8H",
  "key18": "2Cg7hY3xb2pAsmjrtHsgP3cjea6UxcvRGZpg8XvoJDcwCApTwuaPwUiniooe544unvgv2iHKjmqDkDnkc3nRz2q3",
  "key19": "4FZQ4vXLcArT4YppR3BRU3TtEnNBnCTSUykPDyUeNpSRkUwh8PTudEz19GcX4S6TcfZF2877x1UzWx7FBR9WtUQk",
  "key20": "4ERXaDcQ9tCBFnZYfuHx86yoWzNTfYgTxLSMZGKrh6u4RNumgiasSAkxE2y7zMZCMH1qB9aMQHomdm476hVjnq7W",
  "key21": "LuT5y6zsK5qjSqjQMvXumGPsb21fMP3czVcGptvQNcC7vUk4HHDJwQ8xEPXVwuitWz5BpCrNeFD2pAnkQ4As6Fk",
  "key22": "PXzxoEzr26meCBZFtCxPyJnxyPR6MzNjQu39UjiUoxYSsYxG1UBJFUkcpFKyb4k4N8zG9v69xNyvLpSVFzhqFY6",
  "key23": "5ZbUHrv56vJk7mrPAxXvhxFPYDHQMVTNXJSrXqLnyBuvTN8MbVUGsXFNpbkWvAr7A5a4V8hd1f7HS6PVRezw7UTx",
  "key24": "4szcYcVPR21fkBYVWamFVeuKDN4sGwQeh41f5ym3oVNoCjoRmqdbFsNJrphwCcER9JXgYSnYb4fHAYqFXqeXJRCs",
  "key25": "3RvwPSGTVLQMaeasnNLHLTbf15BGDRzCmpjBedLoT1kWs5uR1B9ocn8hBXu5HkoEZSZoTsZzNxP19s3vFp9xmVjN",
  "key26": "3deedio9Ntp6BnNW3h6ushL1dAC4tWxSo7BXMM2zYpT9Y9fFnGZWNgspHeGAfBe2Q9xwWHZgGpV8fzKrHApZqWk6",
  "key27": "3XLuCADmLvhUFHBLqBs98YmyXE8CoZLX9jDKwojCv6LR1dhATUb2hkgttFPwuLv1wFNooZDivBt5cVvdLoYgXQin",
  "key28": "26G1K8zUZhmW2h8Hsam6CBmhZu496r6v1xvLVdvh3MShVgBZahqmn9YuCXSQz5gERD4E26aEb4wxKDjaVTYjWxs8",
  "key29": "53YoYtCbcexy2DYP4doezvyGc4oEErc5cvSeenZG1QmoVb6LveJAUa6GWL22mNHoQwhFvsbdxDf3EWLyP8omVv6o",
  "key30": "9gQKwvDH2qazDTWKaUd21LHNojSuw1DDFh9zFijA4LUR6hTn5VSMojuY61FbNNvju8tqYVcqcL1rsTgs5kSfAJc"
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
