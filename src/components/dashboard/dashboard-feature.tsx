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
    "5N52aLtXRC2XnVTUK6SNqZkyY6RPzjZehxduqFb6x2F5oVBU2z3kRcstwo1Fe6WfE1As1FbohLrYnZHqUYgR8Pbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4zLeoRKS2gTu5S7LMm5pMNnUXZGG7bxyCB1aBYCBS87fR3rP9ezDXTH2CUgCwcBwaUwsv2sDmEahqLsVvDtt8R",
  "key1": "4cKkzDrJ9cHGJwJCDcvV1NzdhN6DQkzK5nBgA5xXmapSu1Z5nd6LrJZYgeY13S3X3CgqxCY4nvY9d9nbB3sdjVy8",
  "key2": "Jv7MTN5Eby1VeE8Er3HETSUDf1jJifkNFMLrf2K42WbdRZmvYZau81Lo1hkfPxv9ZuyQCukdxngj7Q44bf6WJUu",
  "key3": "43qDDBsREnVcLesb6JJvdLVBste8h32BbEx984KCYRd5LsQThQ66aysrXJrBeSSFo33VTzPVuJPJH8rQtiPKJWBL",
  "key4": "4XGE89azrpSxALJare8JqaCUKWdkQwndGDt1R9asx6CtWYF6CKmVRwV4VKQh7bqTw61VrCTpdW3Lk5DzkHAoMyDw",
  "key5": "3GYf3LUrzbpNozp34NSeUPEdqCHwTDrdCgJ8i8P1QMMGrqSJRqv2JpRQa8ruab9PPDNxKFAy4VbfFBzwLh3tGKR5",
  "key6": "5Vuj8v6pjqCV15UcSzTxr1dU6nDDihTF9JHyk9BUtzKKM7C31vr8EntkRDY8UFMoy6EN3BVegnyX2Kirvum9kAtC",
  "key7": "6ugqZRdfcCShpR89JaXAnh5sBCyYSmYBz9LuiKmB2bq1Pv9M8ZBrDNTJpCDntSVKZHrMH1ZkC5Uh5Tv87JrUE7L",
  "key8": "3CA98GsB7nibagiyeBidjYjNzCf2FAtTgphNrPNocmYuoWNrZjoXfBQsd3NXqQanZuV4UoRtGxM6CmNyHtHQgeuf",
  "key9": "49SxUirpJCcS834oaYcXz5NKUZ8h31BHWFHzkCBLJEjg5eAijgp5A23s66gGcE5pTzcsXJW5nZEWDddnjjC67JmR",
  "key10": "4oBCYkG1WrkiMfqBehas9uufYTfYM1YgKPztwtmAD8EShj2ZViCYjVyEtTMtzSweAUh3hfKenaWYce8wQGwERtQb",
  "key11": "2WzvJpnqgUSJEWVeeYYSRADUhPVceu8hCBkce5sFGdFBaxt8YF5E7wiHVvdxftMki38P3uoQuJFLJbiJVn1tDv3P",
  "key12": "apa4A6szFEYVMzBWMW32CdoWSrKSEKUS84yiJVUc7NkAtx96GvhqumacwdVZFEeU585Gp45yDmXpuTuUXVYstjw",
  "key13": "5W2PzDyjCBacULzAJZohGmB2adzxoVvkYyafFVKtif3soKgYZGQDoSZi5p2P1QzDLoyhyPsgJtqLK4Qc89ib9BML",
  "key14": "5sZqzLju8jxXG9pxXNcxjoU7e9Dj6GVWdmULk26qwdNfkrVghMyUGJSkX66Xh479cKFAJ6sujP5HK9uXg7EvxWpp",
  "key15": "4CdijeeBeBBqNPTePAYL8WSybrMShWCX8LQ525EcXjDo8m1kCYWz49xEmNkZgNM3QASW9ZVXb3xDs6hKyyM7Wx4a",
  "key16": "4CZZXiBpSGQNmvYujYUPnGA6r2uHVnEbJtiwLaR5zG7ed8DW8yhvssH1ENZBYW4pctCi7QjBrcmMD6wJVPfoWwiR",
  "key17": "2mwFiya71pr1L9jDiAQxyXBP7TvTLs9b4opcqj6XRUU98FZUb31X3c83fiFV9RqaAjhtkZw4kou9zJ1Yuf4TNUSC",
  "key18": "TAqD68aTJm2JEKSr9ZExA4uvKfhvrzofxgCmPA1jEUzi9u5B7bDJA9WDVG23CJBVcTMwaQHC9CsCY26EBRagjQL",
  "key19": "3QVoi8cE5UzkB8ru5isja9JeLxsR4VdAyX1AUmCpCiRMSeEvuHaSmR4ETVaewcAesEsSxaV8a5q44UEsgJtLqUfd",
  "key20": "5FMC9g2bwgMuhfBqVuecGg4e5RSr7G38SL5gLJXPH87RtBKg9ALEj5eo2FHYyMiTa5Tc1R13qcMwhp4kfdUaexVk",
  "key21": "3F3gSPx7btNRGvEGfzBAJN9FNanBMJkJktR5LmLKPbpkqhHAWnE7pNbZfWxVkC8csE1frvZwFwtgwEZN7r7Spiuo",
  "key22": "5HkZopdP9b2wDSidAKPVAmJuFfWFh11k1cKjtYthiJcFvy1RzjxmCv2phM5Zy2nJ6GkwmWNkRAmVVLYT2q9SGnhf",
  "key23": "5EjTDCMUh1WUdLnw9PPWddAkGBfAJij7NkkTy3TaoqojJhTRJiTGCgAzA696xCuoQV2Q79apqsEtdL3gBA4w4JcF",
  "key24": "5e4P6kfH472TKjELaKyBLQzQnhQ4XpeskzsfFeXrdQTyPbBkvrTuJTp7kvjHRSbMfoFSdhJ165iHtCjdrQdRUiku"
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
