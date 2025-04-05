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
    "3bFjin6rxBPCbafDdLCcdrjoXwXn7zdHNk1LnNVerVRTchykqVtAEL58yzVYBdVEqF92vvW6roP5HBXBxUmzFZX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoCYJFX2Ks2tWbEnFYTu92zFDQQxCrMMMkFHksQEnkikrs67NQKZ2nVGk8UsoX8WSsMRTPE8NBcuAQbffG2Hm6y",
  "key1": "2rH8Er4DnRaupgZTq2S6jLueAdYYCEeZ1RBp3aZJnEiXuK1irXL6p6MiWfNzbsXvPGCFNR2jbNEvmw99mwvdis8R",
  "key2": "8QenvzL6TuahjXoS8WgA3EAEAV7xLivz99zAgmfjGUmuBkjABL7Ut8VLkBG2D98CyWi79JiVkXUKhmDU9ePhYZU",
  "key3": "4LrrfnouVdBk7Bm2Z9Zs5JvUypkZ9iJReUum6JDyWaeboddRjPn9vpnboK5eCA3pP82VdQP917txWgUJm4tVniRv",
  "key4": "3N9QRPMH8Vv8sx1Bfu7NjtE2q7TTg1mVKKvh1jVCXg59TYBPQW7RQUSGHhSJ1z9UMMJjuBLHxiSj3iyMQp1VgWRD",
  "key5": "2Egs8vvxaKMZTFCMbF5hoomreizhADdQy1u8dv8eYvzrRr3p9XSiPiuLHYjR8niNn6fejXyJGHZrzt3emzwrGmK",
  "key6": "5WFpUNvrfEaWDTmnNo6UQUoyB1BuErqqqrGJx7dfbuH1VjhxzedMmsjb4GKYuMkLA4DTghGzMd8zAhy2AZtUkTbJ",
  "key7": "2a7dY2YVE18ycmTLtcbcJxChA75vY6pvn8vCLMXYmK2WVQzAAVhxJYKBZczzBUZmMjvHVBFojB8BgDTV4zhUnjPQ",
  "key8": "4nqQceeMKwow5EDJRhiURbipy6h3qux2zwvsTeJSZovoHhRQtSU36t4KBZfrmYrNAQrCg3FpTNMKGaoQXD11KZJ5",
  "key9": "2kRmFGv18fboxMPD2XywbvdYNTbQpMw28YgWHiJRbGRbqDMinjGiUif5yhD2FHdNndiFJkuPsRFDVJsCeV1J5TPu",
  "key10": "5ag8bS3gZV9CNtXNiN8QxonTnC7mSfUYa5FYc8NBreUPHCFiUN6g9CDcyXszWb49SahQfjV5GT4xwoqiQEobqdYM",
  "key11": "jzgUiuHbgofeH1gzjYUHVcf1jHAG4eBVEWjTX777tdKVgUMf2XKW5q4BiUE85V15RSapU198KsiRVddKPg8p6H7",
  "key12": "5QDdrtjZkegYWkeCfwpV1BC6D4en7fJzCVs75QioXKKHX1N7bFdpPoQ2EM4F6A9DmdBVwC7w2qxDbU5iXm7EyFRy",
  "key13": "25Mn3PrbznWecfbyzNm7MUmMHkjC3npzgHuwpLwDA3jaaC2htCr7N69wqrnx2YKePG7AQucB7vkd9oB5D8wrmDk8",
  "key14": "41eFNV28PocnmzeYAQuZzHmcd2XLjyiwSCwBHStsAXtzTxZTFNXuc7TVcNGsYvnE8LhTTk2SKzTP1Y2xDzCVnLtf",
  "key15": "Yz3smLWxQkoR8rzhh5K6aMnwqVFaU7kNBEStVLaBuE2LjscZ7wAmZVskco17uT23wcKkUp8x6dxJwyNUnstSWmH",
  "key16": "j38vkcrwKbDvSuNCCqCuU6CPaJYnqtL4zKryERmc9B168e45HUV177ZTk1EPu6aFgNkXsGC2pjDwAQEBvPbdXq9",
  "key17": "3NFfhb1TApuTX4RFQzegG5fRGDdqqVwbB8tbhkPBeNtNWSxSnUBfr7vngxrDDA84DABTw1zkotBCmxmpmidvQi4j",
  "key18": "jwV4CG9nvNsytVMQuLou9r2eSkYWwD3qxX2EznLLNLpFFNfzH19vp2WWpYiNvMBUdbZjL6sJ3FuQZXrn3oSgv9t",
  "key19": "5esDMkgWzgJBNbNQdLMdchCoCUe2FWYZH2XKg9j78Qrb2jhumaov77Bm8VYK2CMwCufSRLQgyPx3LByWPX3r1GRc",
  "key20": "3HtHnckKd4F9Ew86gPsEZQRrNvpBXDaAXnodY32qNU1VfgWBL7pbwAUv1NvyXWZH9Pdc5SFk6wJNBH4jQeHjQ6up",
  "key21": "4UCbnn8cQ9cK2bhenRvJfMEVn4otPVPHg47AcKXSmRrfSucGKaUbxtGtCmbWbMwQKQkeTPFYbiZsq6cbXWPKfdoS",
  "key22": "3uvWqK6HBPz7H8SV7c5SyQuSNRPT2heimDDgWeDS1oXShSCC9SjuDS1wyi7KAiHXDmo4CntAEcZzztdU9RU48X6c",
  "key23": "NVq16bTeQ6vKVq5Vkej2gLQuNk2HRzRE3istGfXqBvQ2uGDUMfZgNbN7tMeE5QZJu6RS8GrxQYLcg5WULqNFL3S",
  "key24": "5NFbmUzDT1MJ7UHyr1hUTSKoGadTSr2rK2yiQbpr4Bs7HrwbK4mxSLScknbbCkM2NNDCzeq4Dg3KgfgNjWj7o6xN",
  "key25": "3GZW5t4brZa692FNRTuwrAvabmynCeFYQyxfwgjLr75hSpVutjnztXrsJPNneD6gQSuSa3F2VtH7Bc8oVfX1M8hK",
  "key26": "3mCmY2eXKDdyckvFRUSu9JhPoh1Ckrogdz8ivSvSg12fTJSocg8NbHxLh8VkJnrSCuWj2siw21gMXumhu5VG61hq",
  "key27": "3DpwtqBhXPUT9S4AyPEdXZp7JkPFAkdKNtX3u1Km4TFX6i27wfenRbJKVLpc9WWjiJ4jxHHC4GfeiqCbMnCfDVKk",
  "key28": "36JcCMTAeLfHH357n7FU9QxUUEtMvwMBUu3y3r4PC7ejUKbEF1hmuEcweBdH6a3ym6hDDKzSoy8Bnw5VmtbJj83h",
  "key29": "2UXJdgGW6EuoxLLFg2yY5JnUq4j7vq9h9gFpBK3wCFwNLv51c1oR47onSbG2xMJNDKK4UyecFKdscQV6PazMT5aQ",
  "key30": "4STJgwvWUMxRUbJKApvXNG6SQ93tHGd9qxMggKUWCFF4oiFLZKkc4gwXg1LBkeKnSL3YwNaMrtVS4tZruwR8v1y",
  "key31": "49eMDUTguzeqkTwovuV1FLfnDcseSe9eN9SW72yZxF2xvGK9KCVw42s9MuB8E5BFzAQ1ZAUuAC6jLATvD9ADyFeF",
  "key32": "CbprHsoKrvAsNZZCukFh5SkK5ixG3isHPJiXT1TJxjbfNWLxbxLUseUijVa5mvddNtFKbLN1vySTo3xikhSGEnm",
  "key33": "3ufTWN2VSu36S2EqU972GPkHxunT9Hz3CFR1yuHULzN1RTD534s58k4ff7wakyjTaKqS1Vqk3Anz9Ti3jZwrWtRZ",
  "key34": "5hgSQgES2PaThBncJBoByYnEj5CUDuPDjPDxkeieXKL3dj91xt7LdD7G9QXxe9WPxucZcc7jquhMQ9pBCyvZFHhs",
  "key35": "3BhHpZcA25vD2WwMKoWpZ7sCd3MLmfKxsp7mNcDgcYV8Q8Uyiz45LT6cnpj9diASRNFRLcydiwvWyyHigzF5nMx"
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
