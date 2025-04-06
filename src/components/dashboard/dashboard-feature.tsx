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
    "Yhwuxs3tXPxHxCQP7pvRHfxW2pVSeweHhvJoZ88sUmUaGqiAapo6BXbyTycu62cbRfjh9jSC1LXngoQMZt5qdvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7Vv1W3DMkD9SofDGofAQboB1Cu5dt8qgxMTHpKLu1gT1i4jyuQgTdwr8WQjddjBQrkzHrguLtCdNugx7FzK1gd",
  "key1": "2UqT95xpH8dKhSBpjt4najtrwpw4vgMZgpHzMpR5DXekTK3f6uRJDUhQiGPRSUd2yYB3LycW2NajNWHp1v31FbgC",
  "key2": "2kRNrvvucMp7ZB3erPT6vrEUiHistVnz1YF8itFqMMgaNCmoWru5yZ1QkV5BjLPPYXQX5td3mrsGqNWn82GaH1UN",
  "key3": "2EgewfuWvYdc52PF8D4hAhjMcBZHF3Z5g276ZwzrZ33Pvr7Vvm9nnYsKAxfwbL1CiDVgK9BdeYfYudJq2ftgCJ5k",
  "key4": "4ymTu8ct2eSahzahgJpHUkNtVcjkmRcYnLik4MjM5hdwiPTy5shES4ekgBWFt66vhn5h8ELShQhceES35j5LXkGR",
  "key5": "64h1xw2S5rtXgfVnynXiAGS5nCr5UWrvPw4VTRDwmvMTc8Wn5rBcCfBUtWfVQiLP8vCU6j3uPt4B2mKCq8e7xQCd",
  "key6": "wFyK9K2bpfojXJKv45P2i2Lnvog7nTBXSSPLiskK2aY6dr3ZGLDurEgQ5nK5M69Bfh4FAW6UGzPRF7nN7aN8bNd",
  "key7": "5MTGFwP3v9iXxF4uxGXz9NmkJ7FY7xPM423tpThg9qZ2CND4DPzrzDFMhtSutD1x8rMJN5nsZKeFFeXwRHksBhue",
  "key8": "4DqkeT7eAb6pA1uSwYG1FNUPz3qWP5oZDiX8AanZz4tWknmcePm16iDWUi7bwAWMGfEC4XJmBurpSPUGAUyYoZab",
  "key9": "4ivi3kBL61oxar3wNq2ZXKwhWdARr6RfDbyFh4YzwPmkW4smATwB9kj738vpwdu5zvHCKpbJdd4rNh75TxCKpTBt",
  "key10": "3pfpmx1nHxZM3RM3v2GUUX8Ja9xW5fRGttvNaYxDAt43vosF1YboHYRTWdBx44Gnb8t2RpDHkqRojP7UNzNrJs5d",
  "key11": "3xyvxVocGusoJkV2cdVhVwbVL8KBbSz6ezhbUB6hSY9zyW3HahE3KugbyhczqaVy3XkC8rZnByBiqj8bw8TQtmwM",
  "key12": "5uRj6AsyXjxk9g3BJtpTk9h3fEHw7F8aUbouDcEvnooujvDpUqx6GCws5m4KLK7PcBU2srqoxt3Qiumaf4ujgUja",
  "key13": "37Xr4ST795SgbKUTGcZUhpLV2zGbaFKDWdooad6XqWxi5TR7RQfZwQa5A1SvWNxE3HNQsYCrmRJHqDbFMtPNUoH6",
  "key14": "5nEUjvMon8mjE6HNEtwafYogj2WEhRmjC7zy6jEJq6JrRi6oFVT6MYsvZGoPvPjQJKjxd7unmfWUm5YWB9YLRGX",
  "key15": "5rpy66yqEM6FHHdwbkEPsPMnyZ4beiedbNmS3ecVzUfhCi1gywCxmYVW9cC5LPevhqCEabR1rGtWK3Cwhf3w6qTV",
  "key16": "4NNg3CtsSGPoY1QrHE4zQ1hw5tzLCGB5C8ghEQSa521oXfUcBjuyBWpudANpzwMXVqqHN14VohxvQVRfyidQJ4qF",
  "key17": "2pvPyvK867LgQCUP2F9v9eVk3eFpFUonPawaE3gVwn54NU1VbFKgj3HsC9dAot5ispsJf9MipicqXE9oXMyJZaHe",
  "key18": "3WDFBRbW4T2vDPwRac6adW9ZMTo7uGmqa7b1Df1j2oN7rCf27g6GNjxrd7J9bV8qUkxtBNxJGDe7de58c2FGQ3Bt",
  "key19": "VrXWRoQDoDz4SskCFyMv4gDM2cJS1cJmiKmUbqA2j34QtCB1EeRbt9qcPpVG9rRwPn3ya2DM4myw9JaLnBFAzA1",
  "key20": "2FxFj8SZc28Vu6g9AzPth5DMA24vTbXdFVguVXFqR3NgfT2hBw6wXGXRkhoE69mKz3RE99hqF9fRSke9aoUTbGf3",
  "key21": "2UGM4idXVzf4owXrEBA4DU2XdDKfnZLnVrFZQxjHazq8BzPgCkXA5WnFPCtBQxZCSVQ6Tqdc8ffVBeSZycnBxdWU",
  "key22": "4aYkznEChDVYTvGdbEDpTmiggUqyeen9QzxAFWfUtf1EEMdyy4A37Hst39dScYChwARStvsHUzvtmg58jyU9pgu3",
  "key23": "5SmgxTTWmJJ6fWZ5u5tWuXKbJpQMLyDFAXyw6SnX91UQPhgDTSoHGHsx6ctDaZxsdFU6VP2F7JmKFXasXbSUvD3E",
  "key24": "24UHrxNVJG3hcJZ8fWy4PdYEqhy46BJxfyKwzKH4BLiLGUTKHwhqDaqySLUNWzaE9CSKdK5waVjbMdL9fkdmEY8J",
  "key25": "2VTvFcZCshCaA78Dk1q2vwM3wC5j6syP7mr1NyjJh2ccKvidKRdbSRbZeSomvFsWpcSBTER3QancVkBLM4jjSCvs",
  "key26": "2JAxW6LrAyigKg3Q8F9UhLTj7CPznJhSgPiHTqemcKH1XAsDaPPBuseotUvSxV1F4HDNSSbDf95QayQ4DAK9rjpw",
  "key27": "4LuQzSKMfBhZxX9duTrbHsRRU1cEXWwDszYgJbLFgroKJWQ1VxhbUNb7Ssoo7XqKWSQEqQswTvvroTPjARTnVeBC",
  "key28": "GpV9pYbdaJ8GHo2d8bVMnoK2m4ULv67pzFmKUHqs6CFSn4FhkSxT5gsN7GiV9C2DCM7KKkHHxUVznUmLfXxh24s",
  "key29": "5qk7b5mhsPmERj21c3SX9x6JUvPovJJy7aVxnfVovrT7mGUY125dpoKtn2kwo5mTTjqynhTjMbY6HzVvXBXYFLQf",
  "key30": "5FK6nTTEXyYmbK7EFAWriacaH4SYteTLNrrQJAjgVwcedBWQsNH3nqwDcDF61Q5BeqQi9yU7aX3Nepx1oo7VW3Yu",
  "key31": "5xVCwrd4j5KRzMhW2kafUdk15Wn8Y12SAhXMvsw8HEMijcpCDNvxqt9Dx7DJzAssVnFinGCFfJPFphDs3w2y5dba",
  "key32": "5dcGv99WqWaSJ5oxpuxJ39GmRcHRLKLEiUde7rLZxcZzbtuWbzx8x1DkRDAdhLdcdW9kGLUBFGjrjEGrYtMYRoZ2",
  "key33": "3BKTYY3hPDGxfBm89ppCvEbFR5HmjiiXzXdWxnx14PUEsMqgTP16NFXTcbtBsPvJpmzV8n6CJqLAghdU6FAwTw52",
  "key34": "29Zd9Soug7TPnVqwnLF7rWD6pEkddF129wfjKx6B6iv7LSkMzJ7kBAVNy6QDjWAi7osRd5PBgn8gnpwhd2UFDziT"
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
