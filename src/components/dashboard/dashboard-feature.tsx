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
    "2wacLMw6xKyFrTZS8zXY54dsaVvXkVbtrqqP1E1pdSjfP7FY45Ttb9LFJHbsFizTzkexsrw3XvEqPX8HGJwk1fyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xitBwFRHSztzxe4NEpY4snRDP3m9gK8ag6Stqwdtw9LYSHJVP37vLydEGLfFdazeNHJYSYpPmcrU1a6ZyjfByDL",
  "key1": "5w3qCWFQbtndkacHYacg1S59WWcj7us4Jz6R9faZQHBK6ceZN8JHkbr1kyWK4v9emZyty8WymUNHTLfsi6xxX2hb",
  "key2": "5QWQPMey9UZfJtTTgzV9Pd7Miiq7TT5REbFHp14mDVWnphjQfYKvTnucAZLvgpGD1UiL5H6PYKAx1BgURwhpEhTc",
  "key3": "2c1EHH1LXxeT8mPYSNZMPYwy7LhzmhaUDGxy7JxDgPLTfXn4Up3cNiDwUcwRGUMwsgemoracK298H4wyodiqJ2Rh",
  "key4": "3Y7XSZQdchFyzZLeWErN3VkFJA2mtXzMvCm9ZnFw7rNhDdGSorxrCfdY6gx1gVJfZFo18DKfvWAu8dzHKrn9KTTB",
  "key5": "4VGix75esvrGsfEyKskESJKdBHhduiKdPeYHvQemDf4GYFxMj922LAkCwcRqcvQhoVHcu4c5FLgREMbDzdQEEpQ7",
  "key6": "4CoZBouUbgxppY4RDBTVBBC6KSfJt8MfrFhPLLdiXWDPafDWEdE2VPL99gGTwxfPP2M4F3QT7SBpzn5sRKjyzecU",
  "key7": "2BgQ4uJKX8H2xrUy3p1v4C5f7yJrvtQD5dVFPQHwNrKPVrLX4h8aW6RtVmiM1doEqSEDwEZ3SvZbA9fapYYgtWa2",
  "key8": "3v4kgyMQy7i1UL9ZZRnLcdJDFbo6HmqyDH7XdpZF6bEcLekUN3PT7JHsaEXTbsnzDLwC9CKUpWGaZdy8JJJwbN6X",
  "key9": "5v79j6LMi2cxayBbLQpCKanjdBsqvjgRfr3RdxacYYcfDVou2FRKeSQoaVfVaYy1zrAmC5ZcYrHLEGhdwb9quG5g",
  "key10": "41HnyX5YuZ7annRKu7qwWSAyy3gdknCoRX2PhRqP6rfq1evKydZtDxa7HuVzPqafvjCVPhvUMLQeQp8pTawpy7zH",
  "key11": "514j4giBHDZbLDcvjwkjmBKJ5U2RxS78dwcmfzf4xKYg2cuHxowU8pqggN3KXQ5DpY6gEnMyeqLLMfsMtJsSCmos",
  "key12": "52bXef6p3jQWToyidc1D46XzHdP7VPbFKaLmBMwNW1ymi4MkK3LAEPEAvUzmCoZZAvk3yafPPuNDHGad67RN5ATA",
  "key13": "WxmzNwGJZcbH46kpbkpw8XvhmvCpfVN4xKh1A7GhSEfeVLsKP9kLFf5tTd8o8Rah2Ehf3VbUzBAuHMfSp6Vkgn3",
  "key14": "27vCQDf3YWYCTGpRfqUDPZdMxvgy9fZ8hM9RwapSUfyNNkhcESPZiWGgGnN81CM2bSRe45arjLpz5popG6srpzKK",
  "key15": "5AUkVmDiu7UtfTZGAWQMiNmAZsTUHZZ1Tvmz8CL9sMYx5U7CwKmjXdzK17wySqqQX6CjybmA1DZ4jo46FRYjt281",
  "key16": "3Dcr6BABufQTqJQ5FYJny8jLHMAov2ZBSrZXmnmdiyeUYb4TQZb6ue3VcixPkcAYsFvxVrASLDXYav4oPReEexXY",
  "key17": "4D62Bbou4de1CKtvNQ7P1eZyBAgLudpFE7y7iprd3zcUJveKMrqfAwvhhZkd8rvcQ7cqKdjoa9RWPoPdD7MDHGiz",
  "key18": "3Uu8jWvu1uMvgyiM6ophz9GB1fWaJfU9UuaHJp6CkS5AXoPjc532tr1e4q9wKkEhJ41s1wcHJqTzHo3KNZ4BLbgB",
  "key19": "2qzUtTvrBtrazLH68uc9qaYBqH1HqUZdReCyKT7LVcbYywEccVeS4TEDPpadKsNGsBkoizzr3rSKEfda9SfVCPtS",
  "key20": "4ZENuirgY6yBVZre5GAE7KQzD38wxHAPG1epkxv9SMew3vP6g4sMM6aTPuA8y8DcLQg6jkbz1qnZhKfyi3YrevSY",
  "key21": "577TTM58e88TsNk39XquSZ2sfC4wGJ7PWTmUgxsbkufqoFxtdd8LwecYYAfFSt9FuHBkSiR421uFyFFkM4v3T1Zv",
  "key22": "4pSnNWpxwFivooRsWx9GFxXTQ63dNSMcS6Sk4FXR9R1ui3oLMcPZmh7UmL4Xx6NmmrJe99scHDfJH6tirSufiHvu",
  "key23": "5AQRtk1UquaYYcgV6FdLFPzi4rLCwY4Qeg5Qi2MwDWU1BiMZM4tyoq9tDK3QMQoukCTiXMXTC59yzgo17HQVuE2S",
  "key24": "3dUbxQecp78cTzYAhMn3TFPnDSDULKv7HCqFCZd5sZS3SCLvDqd7i8yATqmRJBBr4jGSnJrmGKnsReq1f9odsePu",
  "key25": "3YbibLRtDeYUqFVp9rfLqzJMkgnn6aMv6yathbYwhjNKqxcRLW5V9Lz8wtrcw2FrahjkTgk8QxndwD35JSqJMx5",
  "key26": "2ycu79bmmD6GSAyEXKZdqWiu3MdbVymqG1hFZedBG8Afk83wuLVmEvvTFS26JT5DfbUtCE39ZCDgEUesBWL9MBzH",
  "key27": "58hgk5vzbsL19TGWiMQpkofmy4zjvV4hvFCgwFRasLdR3AhizjxdFfdUeJmPhN4Zj8fDRaquWUpU6RoR1uoyJv4",
  "key28": "2sQof2HGv9e7T7ptA3WJHdQhNyyV7RrgngLcE1SbafD6p6L6R46mRffKxxofVEH38ougLRjGqA7GR1nZ73Eobq14",
  "key29": "26H8axhq2oiHT5ZirAx4ZLcMTE74KZrskUYgNcjTh7ekoXzVave2Zw81annC2T7D2UJcAEY1SaqjhiaFRXeCwbP1",
  "key30": "52U4WL7kwbwKLhrugCKxPENaoyqAMF8fH2yLpZiWpBpta6A8itFZAAP3NHZ5v7PyykMo8PSfkjHfvrXKQJHGMC3f",
  "key31": "4CoMLS69cnFJZQDhK3DiQSnHivFNs14bNocwSXstsnAnMddmSpDBXaxgTxi3yBnYXtxc3jSqUse5tepP1KLCSMSZ"
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
