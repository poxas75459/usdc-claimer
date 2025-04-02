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
    "4Bk4AeaedKjQ75iqB5Qm5njuGxB3e4pFY33h8yT82mgfrMfX1M8bjmH1NPgYZynxEVdbKfo2yNBBWtuUi8SkBZUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4adDmF4jJFVxbHQL3bQxtox6XVAYMYtpHbt49j7mKFM8cgcphHpa6fm2sQCB2mJRT98t7YS1PkWgouLtdgeXkPhL",
  "key1": "2cqM36AndQxWXZsHrRrqSWm8Li7of4NzUE9rxsb9oNZqVtJ5hSC33H3at1CmsCXmepSo3U1iMGqv1ipkb5Q84ZTa",
  "key2": "24tdaKgcedLZeJ4Zn2KAG7wepmhWoZhr3ZknQSsWJ2YhaMJTkFBGnVDf2UaHBffugRJY5T7PZubVZN4cUQBwFHKk",
  "key3": "4HMQrneitoH5oB87WcTaf6VwyYDdHTJFZzdZNSuZKTXsZvRvEDgFRSUaKNYoC6Mdrx7KWhwJFnj7vbDp4PEev3gu",
  "key4": "EFYhppS3asBpVSwNA7JH2XjLFkr86UWdTKDRbGmHKfNox3sH8u4iZqEcx1CG29Ya4ugmq2qawuXarfGWRJkXjUc",
  "key5": "Gr4Ntbg6mpVC8bdiYdQvLEaRs5CwAqgRN5qiaMNYYV5oUidp2gjxJEKdhVjzAviTQLeC8fMhZ1gnGeHcGU5fuu3",
  "key6": "KySAWu7g86rwCwtmieEtgBqra1DgSWCk2QGGyX2YTbRsoWqKnPzYnYQSRqDFNATwbXtikdatggW52x41XCLW23Q",
  "key7": "T2EfD7wjyiW9UyPJC9bv833LLZMqMe5o9e2o71Mv1J7kWzhafFFoPYFAUngwHXsoZTPxKHmvvsAoZtyyEefUaVM",
  "key8": "2BLb4UEnEgbcFgwBdooipjbZKyLciVCkNfpLSz6y7mnPzwP2k3PNZuETQ3oSJAhx74jghsvWWdThw3EpuqCraiZT",
  "key9": "3m99VSgEytxKiDEHvAPf1FuW1ycLSD5kS6gTXYzquu3v8DyLCTNt6xyuhEv6VFoTKx6HKt26udABkS5JpbQkbZQ2",
  "key10": "4hEgebch2DizQ9zTXUXh6jLY6kMAbVK1WGnKocQV7es7a1F94n6EdsNGHw91ofwzg5USx1tKjz4WTBw8TzMS8nzS",
  "key11": "5kmJWNcTHh3sfx52QXpt4YhNYR2Ee5abpzFtWKpFZqo6nkhvgS9e9NNQJKqC8MxRkymLyMJxeYEoVHq7JM74zNTd",
  "key12": "3wX37rXqRrKnRvGCBYZvywjnnJEQddHuNBrozesbxYJfEKM8aFqwkbrzZDgrUmBiBqDfFF4BzkW5mkGzQSdjChhq",
  "key13": "61xeW3DToLkLcPee3g5ob9hRJTofjdWBeSJjqCmMuwqmsh2ntezcqNRNHbaiRo1Y6AmcZNFfuhSUC7zMffz8akpJ",
  "key14": "3LSxKYB3TKcQVbwkJ3FqWZUaaqBeshUMFLSvDsxLfAs59Nm4UYbtHs6TPi8Mq9SUVgdeR7hbGeya2ckHpKgAabZa",
  "key15": "5FAdHwqLRw2mmQpfHZC8sQv6UnCVv7SC3WXcsnxeBkga6QXdDJNYsqMPRwGtgMUmK2wkdchCkFRCJRudXzE4Wks2",
  "key16": "2Br3ECGzyS9EWamxD1PfAJ9e28cCwR5UgmmAqwmMCyG88WbNntvn5LsstgAbiFAuxQHYT9TyZqn4jjtqkj2TDwhU",
  "key17": "36mmeC1GTMMrsV6iTdNduvRWUNyvue7oLmxwbez8fVX6aqCH4GcBhXkGbffigd32o3xZzrt6Bhi8Gi4tmNFSkhJe",
  "key18": "Hz8LruHA9pw8UieS29vr4veBoeGSSBangxB2uQFsK6PZiVWtm3HDtj5BMECxa7ijDxwDUFXUbaji1aj8fw3EWpJ",
  "key19": "2vqsx9DFDx66d914TAHSLhMRDUkBY81aJWBtgTkq7Qip43HmBf48Urys1aSKmYkoZgaxAmDgFbAjofP336nm1sCV",
  "key20": "3MRCAPNcRJZPQB9BtP61tSkQR8EhujovGYvVeMJwbcTQB2hGnDqAXp14QWK3TsZFb7G1K8nh8AFGyFAiDjGVBbFZ",
  "key21": "3jHxjVaW2sXoKT9zCdSsdUTDTxQRpzHeKu8FV1v2z57TMh68tTKmmpuWaTDEu7H4ZYryoG3jsgdNwGAcpHDravYo",
  "key22": "sfMRBM5ygesB3dqwRba7PumSKrgVu92Ssr4nUuQmnyjAtsYAQ8p8u6y3idPpQ3qGNnbDABsN97jV1Dgo2WA9mD7",
  "key23": "3fRh6hEih31KXZRHY4WfEeFbZFtVUqmR1PJ5A8hWaZ4zoGpiJXRWszJgLeaK7oV13ET73cpzKaK41yQrmgdzoTjk",
  "key24": "3T1TJxYZL4aUqtt6yFnj3jtJKtpTLhgRyJVnuTyY8WB3ab7pjh7k3pngJbbsv295wKQ38pb2K3y2xLXQiMxz6qJX",
  "key25": "CG71H6sdbLMU48x29nDduzL1ZPzpQ619aphPub5N7NMrEiZCdjJs8FuXKVQM3mcVHrgB2a57beQ3wiCQpsTA5Va",
  "key26": "4kgWV855dW9qTZrmGu2pmb1o6NSqcDBijg71kSwF1f8CBixf1miCX11WyxLaT7jaGvXJoMpxf7XW2Tdz5JPcRvBk",
  "key27": "4Uwn1F1d6meyVFs7oYstVh84KiDewcbbPoYV1J2TsKQfYJHmCUTgYx3nMMYDjXNs9HxHwmqhSHkT4vSCLEYRsFRh",
  "key28": "4VhWTEUoyxaeDvLifM1Bcq54d49fcHVqQym5JonpAm21uccoHvSu8hykHYVM6Y1BGvYVM6YZbLSGjuqxc5gJBcHB",
  "key29": "4DaHRioDfNmmXDbPp2jh86qZ3DTH2noFvDgG8y5SFCwNw7EayE7AJTj6Pzy72VT9rUaXbiVeJPLDsNGSy298DRRp",
  "key30": "2LsMEYeXDjxxzTrGnZ7bvbRgwtKSYmUUEYhK3uRdTXCcmcszTBbagxqnVGazVtCTZv5sCVscacA7bGYr2ALnuoze",
  "key31": "4QRpn2agjPWbjEPyKqorUjhoMMtB8Zr4tkMSNy151eaLeBY8MfL3y3CSgFg6jTY2jMbXKT9DAEijmMLdUJuSjBeq",
  "key32": "4LkX6SWRTony7adaUPQo1tnkxYdETSq8FiMv9kV3DUsSLwUc7CnaMTZC3TfhaDkC5viSnn9QbPxsDzWxFQhsJXyb",
  "key33": "2aTZxmNM8aZeCaKovCZRwvysutKny9u4iTdyk9FTkVUfpGsgKybZsgZWPx4fVAEC2T1uBhMDNEzg7y7RbSZC1yqW",
  "key34": "HtyrZZ6o58xzbJr8MKX7HVP3iNpFuiSv1FprfvEUvVSNi1ENfUGYZoVwQt3MyM652c53hihVKV6qjhUPkodsGez",
  "key35": "fb23dfJ4qQ2QZuzBKH3RyM8ipRLUdSP3fmoUQyWStPBjAsP5yuDDQdVs4eirHmv7KqnuvfeWvuwH7n2J37feSr4",
  "key36": "2P6cEezKsFLSQ6NqT675zAHXKN3iJ8pK7CYamBJAEvbFCwGMt7pauPhxzMB1xQ7QdYUHseXT4vfs3pTeMEG8dBrD",
  "key37": "hQ57998XTKAGiVA4ysrvvup1mf7BU8Se6vM1Ygj4ogkg5uSFkpfZygVneWPf9t5uLeyZvt2AcEJPS8CVYidXYDR",
  "key38": "2BL17WuLGbQijzRNeAyQMdcGt9wT1wd5xNX8YwusYNfQJsg2vSfXNMLJDqJUacv4QhMnCrCptM2CiU5JteESEaHp",
  "key39": "4BECzTZuAuRpaCTn7pHVD8f5QHnbuzZVqGsvLX7xk6Y9niEAdniKU3iyJLQCW6iQCjBQj7QBRiXHhAFPGoU1138C",
  "key40": "4dT7CxpAzy9iNfrKekvgq6jfT3eW64EDn85akKJT1JynYV7vjs4tdSF7oLE7nyv5Zae9dzs4zYBALiG9JuNSfkoM",
  "key41": "3CspMyP5DGFqxcsNxNPzqSrcBTEUi3T7x1WADAJ8AxihZoZ3UJ1GmzS47hc6n4VoRo32pHEropaNmzvotGuhV548",
  "key42": "2XLSrRHwbmAj8fUmxYgqJj1bhrnS2aWgHkJAPp1itRcSp3b7op3kHQLNrJK2DDHhdykfePPaX5KhooidECm7pmmw",
  "key43": "4nozruZrD6T1s9t8enV8MfKNFxBaXEKahF9umnsN5f913evhLbDbSgD9Rncis1rj59gXBfCVzxBi7CPBJNtxg9Bx",
  "key44": "63EPjRT41AVb6TW3cmCedb1jhAzC2tFv6DBVWjUz3mb1h9tx4KpvKnACYz5UrcfNq17WZisfrqLKYf3HVt7wnFMa",
  "key45": "21x9fUQ11SavmqPUT74tntSBgRLdScRzYhruVrRuTXsPGSbH9JA85DaX2VX6omrXFQkMNSqYTVsJucGZ1LVhvbz3"
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
