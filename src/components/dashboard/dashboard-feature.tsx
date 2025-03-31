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
    "2Bsm5CeFiEx5L54VH23EueAWQ6MWYs3ogHT5pxNRoNv95GTMfqhZ1Y9wkLwdzKbfMBTyn6KHBqLuyomDoMvuTWEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDfFYLs7QdJ2iXvVUt3kpBoSiN1bAfdT9R5vJ4VLsAa1ni9AmMtK6KUfDa2q9BCh2M853D6Jk8FrqriiWvV97XP",
  "key1": "na9tKoxjyJfGWhuQkBsqLi4hutmr8J4REj4Me5x1xFjxC7472iWbGqf4YnajSGjS1GoWed4d5swPgvCq1qx28NF",
  "key2": "5f1h69fhAuytxpKQeaM1PbmkQSqv8YzU1HofRhETtJQLBMippF3sW1QJuhbgA99NLcCFmAT7RMzuEdifcnmJGKnP",
  "key3": "5unX92MsaaYE8A2Fmzf7Sp6FrqDvzh8q8zAiRaFnoWUvqQsCrjRkEicKFqaSV3aphzhGQK25ZN4qoBEmpQmrg5mx",
  "key4": "4Px5uULdK7E3HAtKTdQN1pSvqm5rJhU8ibn4c8wvj88Ajm5uXyttyKfGjNfErwKuHjREfEwpR8LgRjfLP4svUyoa",
  "key5": "uBADo3tQBGFBcKUPnNDQ9oL4raEodQnxQ6xB43cBaPzzJgo8ryvfQRjzVpE1sMzFA7hAwSrhjE849V14yRV4119",
  "key6": "4dK9RnNycJGhCTyzUeghA4AnW9qvPxuDxyaSYsSU17Xspc4i868U8SSn3gq5GiSVzXfWVuaFe6nKe9q9NgkShy7b",
  "key7": "5tvxoY8FwUw9g7wWWAmaGiFBQ6PqP5ysftkk8acP7F4uiB8mteRNwsW7yuBVgTNoy7FcsQQGF3KikvanJJe7mjZ6",
  "key8": "5pJ2c7SzFRfwNKArtGZqAUwFL39eF3y5UUsYfQ4BfhY6hKasum8XDXWg8LyyDweVRQZb4RMzyxCJniYrGiziTz7s",
  "key9": "xMZG8nehRLWHhfJL9hQ72xrymvbVr8N4X4Shj3zJbWqzw6QFUBbCNBw1rDDKgsSMjV3MbjzdDTc8Gh63zJMLPtm",
  "key10": "2aX13Bquur8Tpd1XBUeDYq6gPB1EdRTkGPJZdpcv5ziva1Tj4bSL8wvvjxxL2oo5kZJ4S5nPs1YAhJHkVmCM5x97",
  "key11": "4cqrpsdM7CsxdXbnFG3ZcZiLxfxzAHGFiRhXd5d9HzwQ4TPNbnJQP6bdqMzsSxP1cD9BDzHmhduzTmUnW19yGVQx",
  "key12": "35ebWfb7hykA8S9kAg5jMW63A1pkk1zFVnat1DEcJ1qRzRid8SdyaHdfBQoBKhNqNCDQmJDnut8c2A2DwSTcbjdc",
  "key13": "4HPQ4LLtrD76JfUTpNmS5N7tjpPRea5Xon6QRjQWDEEM4P14REn8TEcPdrcteaaREENbMWntTGrxkXGmvcriTwYp",
  "key14": "32AVKCKxFTABzj5nHwDuEm1GivU6kL6UcUUWFb26esrhX1Vm2PmENvNfmVc3azKKtd34esFuVr7qhPJ8VGp1faW4",
  "key15": "46ETVKnqu5w5j6f9YTgDmPQm33sXALzzyrXoD6G9uXp3PmtKf5ZYZzv62CPSFp7Cm29eourfj4VwKQfZfSbKjfit",
  "key16": "6UsNHkg7BDX7RVCW31L7ASuUV8Vjy9RYdxRybXyLmJGKNBgtK1KrJkEj1xcRvZymxQcycsXagtxgCceuhKThBxw",
  "key17": "38JDtsux1FobisckuLEawHEoTqYfuwHxmSR3kAtM8MGCnjAWH2U2CYcoWx36U4WBC58LYzybuKCBfsqgwxpvJRcc",
  "key18": "4Cac2NUvjZGos8FhFENi6ePUiTz84VckhnVNC8cfMHP265RuWQwmdFgqVQvsZaQ6Vwj7PWzoB51u27qmyj9j7M5y",
  "key19": "5DQvBXSwavztBm8XWpMYb7Zn8xYzXWMcjHAPZ459jgqLVWXiwPFTPEQDH4VLrorZ7Kw5LxirB1sQmrkhyNQqMfYn",
  "key20": "ig8cVQSzHM9XhJNdfbS6wGimqvJLoXFa2TL27JHDdPv4gtNCenn4A2SFmbfH4n5HoVpSn5XSWm9oxypZTQGwe9E",
  "key21": "2iXk118bEKWv4dpiL23LoePbmG6xd1RsCSqYa5VFasD4Yjq9JrWN3YvhKhXihVdwRDa7Hw6kWGtWaxywzmsmJatc",
  "key22": "3QQFvdogGnMnAjnxwd3ieTmd6icARacRavPU7Ru59MgZYSHzvZkXkCgFbotpiqhv87WfgaAMJUjdXPWz9fh6T1qF",
  "key23": "bNokxPd4y5jbUuSYMqHSEUVzGZaZGmZ23HwgifvXbpRSGPfhph1NVr6JBSDp7QHbhJv8oSvcuYc3WhzvnsEagNi",
  "key24": "4pYZDEQTrzS97F96bVa3Nv63wYyHDWTPbrV4zKos8yFftcVJ7g3nSYYLXo4yxwrFoYTYMqrqtmCodmMHWmGFAzEE"
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
