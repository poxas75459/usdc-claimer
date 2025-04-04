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
    "3xrVDUXRFVk152LZvH7MotGRa8Ey9ASW1ykrBrR83cShqkMngxTKvPjt9zhFbZGfoqRSX2gC4rfacGQJibiEbmGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qb96dvKV6Y26ZdzSqEgRzGrKFRFKc3qEUebCy2oeJ4WvGKzoQYLnZBTos74cvRESb7Jndnm9saSkPW1WEWjSuwJ",
  "key1": "5y2MSL1vEB8wYrFxX7uYCZ89A8Rd9pncSu6ivdt3xFyQ9ngC4pCxbViZ4fP6LirsM7JP5yQy2jJ1FiJRcigGtvUd",
  "key2": "2The29TXTSU3CvD1DTRcPcoe2aSUGN2xzZMZAMSWCACM8oivB5BzjjwnoYFU1WAhBNFG5Zzi6kX4cBgrpoWj4xVV",
  "key3": "3hBmjLmu8VpvENUvurEqETKHg9Vpk5rLkUfNq1LUbqngVG8zfHH4koRyDdRsJHnqQxQ9HGGZmA13wBSuigt3ffdo",
  "key4": "3LvcB7LJKEKDt345wTLxhpFtMYNHfKuNgp8HSgs8rG7TNggf2GSYsYbfx2JH8grBny1dws4kmG8BHaYJwFgyGzig",
  "key5": "24MgaLRH6rRafHEnntff4aHaG63EMwpdDFEVcLTfUCUR1sLciemfgimmEM11bJKLCkKejJZJad19fAv65X1H23mu",
  "key6": "5GXj1LFxpBSZd3RK3UHAagbAueJgNw4qewXdRWaTLrDXfoQmA11aWemVRfsfkoNSAZ7NyKQca5V4S1FUsb8wspUv",
  "key7": "3DmquD9Tq42CDRVX6JY2c578L2PLgvX1CZPDPXeso61ngSn6YFPFnvgsyAryeW2x2Ydwhbp83LEmE83btjyYAn1f",
  "key8": "2rCYbQiUpkYPEmH142PTrAbpzQ82i6hJJGCBqYiczUiD8H3XPrNKv4Hf63UgAs2dx9pFuEm42vAMeiHd9FYmiihp",
  "key9": "4B7RB95DLmdd6VsEXSZrqutWRft7ZtYECZc4Asknmms91EtgCszCH98jLB9rMCmjvB1sJJDbemry4H6R6UXkAwta",
  "key10": "5DYBJXJF7irUBEP47eCoQDNEzw5ccpKz1DPsjkckuVmGf44rV9LqeNpMSHbK7tvVtxsb5cQgeJhk9pLnb1r5L65W",
  "key11": "3iCQm4F7SHuebRULPpSMjDRUd33nG5jhRxumD7MLRhxEmRVZMzJQiKdgE15bix9ZTz3BPGCxAs1GbtuzsDmfRJRx",
  "key12": "3DtkT5bHf9AdaChVbEQAqJmDW3ciGY9KhZ8Ybn3TSXbUoRdcCtWagE4sPfqeZ7MeHdm4jAba69a1XPUVg1fHfu8w",
  "key13": "61rYGDMD54gSscU7RxvJzCHYCncFdRZRKpvegbWznKcYp1sJdV8ArxvnBTHw8Tb4gJ9mJcJ5R88w4ge7anQ8ZsbS",
  "key14": "67hxjH79swerRfUqAJcqjLaAS3intFM42cw7XUxasFbWjU7UmiiLFMBdwH4obqsB7uxu4hiKj6mrx4vd3wsarTnP",
  "key15": "2SYBrmygDKzo9QxUvWYK6T8MtGmNiQSnWeTeW4wcr1yozDxr4yjz41b7MegEzpVPkEEnGyYiMDdR9L3YyRX1uRjR",
  "key16": "3t7pvFtH74C7rCeMSBypfJjMq4eViE6TxED5pe5kpcKKeEDrfyT2jucWkepDaLxxdzNN7YcVguyreQPF3jWyTDWJ",
  "key17": "5NRQgHvGgp6sJEcnxiKDvoMWykRXWf5daJRUvWg3Ls817CwTjrLKoojAkSnS6rkyUPLTQSD6ttxikiMEMmgSvUqh",
  "key18": "4KxxrrFoTCutcGAchAiJoEQNshsNAtaJGMWpqALsdj37ntBNBSKd6d7W2vFpZKv41XEhauLPka1U1zJQR991vPmL",
  "key19": "2B3YJqN3YCW36tKMPHXVDoq8pbPV779eXTwF4GJMANKTG4tGHd1CV6SW9R3KLE2aGZDxyYcFArFmM2xkSbXMLzMJ",
  "key20": "4hwqYhSTaKKRteZXnaxQypoGLtS6ezGkeCL8jdGw1uYFXZdRBGSd6CHJD7CGvcKQ52ruHKoeJZSTBLHsSFH4pPA8",
  "key21": "4NM9DXYwWQwtS5HbhPaTQirpUjU6zRkcjETbdmFZCQjavy8j7cMHVFeV6JQvcK5vp95oNUtQSw6JtNTfpgB5Mgpu",
  "key22": "5GaQNJgCEkNYkp4A1CsJguZZHZpGbpz7Gsi3tYh1fL5oEH7nTfRZ9LJU7sjbxH2Yt5jUf5AcLhKJKPjBoEv2e3fA",
  "key23": "5yTqCfQzQY2549xqK5DAAhWF1pBd6SDzh7StkdZhonKnBfiPj2GZHXWrqLz68kPifaxYs5tS7VSFrWK2WdFxUS8S",
  "key24": "38sSkKWX2JVYnANPDmNdQbvn6PYEY2S7LeaQngSKQhUyyMWqjYbB6xKtobgoGb8qyVjxE2xLPMCFZ7Koz27GJCRa",
  "key25": "4YD6dDBgAD3TuXwmH1YH25y3NGUCibC8gPXoQWLA5xV5qmoGnPgFL9btUJs4vk2QP5wU3SKnbAW2XfFvZV39FiPN",
  "key26": "zGH9qWKxh8BjxijMbgWiM4LRz7LHnb7Zvy5AjvU5ZbjKy9gN7EEf7TMS8Yy9T9jSsf25eEnphCp1HgnaU8v1QWd",
  "key27": "5tRdQYERxPV3C3C2rWfiQiotqVvKSqgBYW9t1j1u6FGZnhBb4GRp1bvufJ3QyahxoVaMRjFdGcsJ8BctmKbN3Uma",
  "key28": "2pYzgs1eM4WcqLWc3JVmn74EjvU3ngQtvTnXeghrw3hhLG1ZbAUgNDXGRq2ByMkeGztx9QcLU3NpEx2A2sDHTHeZ",
  "key29": "4A9DoLQfNA9TmEmNSzrXTt9CospEuqcPXe4NJnbTKgM96dG6Njb79oaDMRPeoxnM6jk8ahW1Uxc3yp4p3JBs5spQ",
  "key30": "3JcF5KDSEwWzShyXm896GuGLzZddi4Bc2vrwj6iBqaS4wYiHjfxmg16n8qVCZXLBYSvMqfU2L3EefoAYsazDL91G",
  "key31": "25BQvWTmFJ7YZbzox97WaZtLjM9WxiYLx7HUkSiy2QyvnXhnfZ18Ju5o3X78bUL1CV3AovYSGSk3ftyPTTDZVA8A",
  "key32": "3N722ZDrQiYqhmzuZqij2mu7YvupBqEgKRwWCnF7dNXQpcS8wmPmK5H8pqdJC7u1b3ZPRK5hVMaE4zfVUym37x4x",
  "key33": "4cnQFWGtpyRLsEocTdeqx6MBCGTegq4X1N2WrunkA3qGN3x6pWzxKwF4x2oAV2NjwYWacuQpqJn2xKkWHP8Aryme"
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
