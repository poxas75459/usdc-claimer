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
    "Bpks8BDGJD2x2JCHFK44ty5GSW5PXoCJMmyVxdE2xmrxuL2Ncb7rDjroMoB8Euv7VRTbwVncebX53btGgVv2cG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9ZGtEMCWuxeqzXHCAuKqRXHHwWahpm5qQs32zN3ormHZsXvLhsh6AHWL4NYJZT78ECtZ71py5zWhNUvn8aEK7V",
  "key1": "uC578ZKF8z8bUy7K9e1zcrEhG9ULVmC1EPcooUsdPjNR1WrcGURJnkUbfg7snKA48uB7JhwCHkPPSznDaAFsd16",
  "key2": "67MUTiyEBB3fwVxDwJENpA1kQuSvBxSprvdc9CrgGEyTzEgfQmi7AJGb2RtPA8DC6MHdRb5AYcEY5zLWm5smutab",
  "key3": "5u6QjQFX1bCFDug63sHtxLunGs9kY9t8FukvuM7bV4G1u88NM1Gx9KuyHcNy2hbdZX3MmAPmYnaJFC5K92GWRE5n",
  "key4": "UwsjxjkXqpiA6Z7V58gdAwGoMh7Zh6jHjjD6o8X4eNUCeuEvN5DEpDMGTcM8CxCGSxcrSskxiDTTuuFVBJzV1cJ",
  "key5": "4oQnNzLU3bU1SRpCEnB95C7yo9Yx98JR9qF8JrwWYWf99kG55UKUganLejaZy6eNXEWqTqvwYaYqLXGibdd5DYhy",
  "key6": "3x7GqGBPqYWu4qpsK6roLjWvGMKM2f5LvVwwewLknrwRrRqmHUfMF9ufWnfeehFzLujCjHdwvodFMQHFacdAn4x",
  "key7": "245JETwXm36XJEt1g1mN6W2qorRjubAyvkxHwSwk3uh1FZSa6fn9yM84Z1KfrVckCGGWkJKqwCPVuazWFC1ieqWi",
  "key8": "3euGUPdxuC8isfub4kHGkRg5R17jQnJF3bSuwkWP4uP5e28zUuKUCwcNpgR6oXyZP2VAV55NqYwWX8X8JgwHPsmW",
  "key9": "5pmLwpgGpESXx2Jt5i2PURHXk3QScuoUtp9SuVVYwzXDks2aXhLihjSk37J9SLxqHT3NnrHycaVJZuFTx93BCCCh",
  "key10": "2eSt4HtroHXxmnw2uoco1wshZ8GctDjUWK3AAu9D564u9F9bSSTzRCjAJUgZLfoJufXirmKXd1RDTvPx9RxXTRLX",
  "key11": "5Y5ynZCbEHapa3g3DBUbLH2ZpCQhQBs793pJ7MaaHN4hAdHykxTwoGwUEYmUc1XPXaFNfNdz9EzvX7vTJkNdiAX4",
  "key12": "2b3zqo8k5bLBrexdimhoJvB6xFdx5q5rwrJZZLq1ny9nRNjyEwDnX3WHTZHy8jqTczDyKFT7SmFJgT5qDaXsbHWK",
  "key13": "2VYHzmDNWQSWKVk9vX3XMdrn9w7f3DWFkn9N9RuNNPt4SazWfmp9pLbf4XYY63Xkq928RN3Exq4kJmmbyLebNW3K",
  "key14": "2ijmfSSKBNuTaHNtBZATLsUATGGx6fs5qBLyeS15jEjxRsYiYWFxyDjiu7XioMiLqmSSJj6Q6hqauMf2LdPC2Pg3",
  "key15": "2zhrmvHuKriGsoEbE3r7kBMLdhkRYzCkhEfCfDpMJNWJ8hhtFimX5ygUwZeQcE5PS8RRxPLziUU5hNht4jbjoftr",
  "key16": "2prJJiqQMKh8RtwhHkMM9SjAtowLrUagc2hzVrg6ixwp1swbVMAFoakFmGVs1yiARij9UPzXwGPWXGEUVdXHV9wZ",
  "key17": "29zmxSuQRSJTLss8LUvwbSB7MvtHmJ4sPvmyF5fieqbo1Se5QaE2d8jNKnxHmRJiZio4N9ioTubBwk73q9PVnNDt",
  "key18": "4gfCd8baTWTrsvpwAqiLQpuTxSmbZeAoxbCp4sPGBhpBSUrB3rEotrVkBmDAVw5poQ2yMmgXEJkke6hWhrB2S7js",
  "key19": "3tQBhnarkp8KAbW94wCFCNTX41UfivxGGrD2cBx2kihvZMWY62HZctUnXak8vFSFA21de23TJNRLHftwWQNtawFF",
  "key20": "5K4m5eVrrFecKdTEeL5be5VbmEwBBjLnQjpayLXxN3H6oHFZMQ7acjAJwE7KHNyt7n3fRywmdL29HDqW3xgL1vdF",
  "key21": "5WMLX4hib5SmpHvqZyiSfA5ebJbDAfNYu2kDsqfiCECZFsSc8N685wVcFx6rNoF7yBsFcsKbga7zaHgfSw29Gsak",
  "key22": "5ayWtShP699AtrtLsWtphDAk8Z2h7mvghJWHDKR7RqSeJ4wrHzrnkdEBFJDyL49FrmGWUs1EcrAqhakw18TEA87J",
  "key23": "4zDgvsFmQAUBkVFkiQJJUZ6VxT6ujKxhZiSKUm3ZVcXZ3sdxYoB5pP1DGXTqgsZpLkmkU9s1B5ymo3gb4w7owF6E",
  "key24": "4iDwZD1WuyXPB4jn1ZbyVyzWfuSG54MaM3m1UMikTmagx5FaqdGVBDG9R32YeJAzcwYd5TMKvsJHYaZ9Sv5rryYY",
  "key25": "5uoHRzr4pfhBg8VHthRUPvNdJgmowJTRAqYutNiuYdXBKPN3T5Z49tKqrGb2KCamGji8aNWebL5BW4Xzzvz1NhPo",
  "key26": "4Yw4GQpwBUYo6v3xckxYVrmwgJiSGKPVzFrS22naDakju264pTVNMEoEpcXnx1ARQWPqrddhWur8oCLZWXUkiBLD",
  "key27": "49eoQuhYs42Unj1LDkKytQBi6A2K77o9BVVvpaCwRwuX6trwbdLofZYBSpTXgEZE17mW94NccyvZus3AuiBHiSYu",
  "key28": "2aA2B3szWZdNYm4BS7ouokHUB6HUTUBkZgGu6oVMGZzPmxd5LuWGVHr6xhHhnJTMHVmAP9Zkk14C7XZtAaNeQ4W",
  "key29": "5aUNnHa11pHcBxHkq7cpw5sCgx416DNMAxexWB3AY7gwuJe2SNqJiMCp3fNexJhsFdvT2djGSyUsdRFPPPksJ847",
  "key30": "4GoQJvvekNEZH5wmQB8z97j6WFnS64CbEhfL3KoZuXMo5qQBNszKZBvRTzsYF4GyVaEFzEYytG3gbbP7oNDgLNS8"
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
