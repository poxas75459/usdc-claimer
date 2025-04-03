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
    "5k2SFNybLBsKqL34ruHNdgmLxmUjFoJWszwvLqrXELL9r99LCEnJVPfk9XCuL4B6yvEpXKvXJy3VeCsfFfSY1Vr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFGWje8CWq35GPckmF7sytPeRj1AoH3iT4MWETpeKAgsdci1f5oQWCd1RrFLca2KH9HEiHqB8XYop8qYsRfEpto",
  "key1": "2tk8MMyHTcMmRAsuResfQhFFdVZCJAa4d4d8AJCaRkN4aVGbMJwLmK7riPPoZuPgJtj3pEErKkEwriUsKoBdC8xV",
  "key2": "41A1iFZWir8cAGaiLqZtGbSkyFF3Zgewi2Q8NsDCJVh5bVi56SStMAPipa19E6yNPCAmdNYJ7KgyT7W7GHReWM3C",
  "key3": "3VtQ87edVDdCKvo7A4rVR73xcotVDjMhwQo52s5DkA8XrHLDhsTo7RdyBAXUzbx9c1XY8WceodfKe3XeuvtgTy7H",
  "key4": "2qRAZes9u9VSrifiTSGKcjaZfW8fm73PyTgLaAUPBscFhNn3USsogGpvxhVsnT5pqWwytY3YavwyXAVJSt4HPLa9",
  "key5": "3ndBVoKbMbzkUkcKG7noeEuRzqex4q87DUcHigc6PpugTDBqfaJ6vpQF32nBLFVPuWRTo9YNKrvmUKPWE8FgmDTP",
  "key6": "65tWEy5EphxVjodqQaMsaBYQoV1td8Uz4kP6fkPbkmQbjddMqwcwE4r8Z9poioQneNQKUXKb6oD1Mm13Z5gGMY51",
  "key7": "2K4svZNGZrDtnWQAt5sRaZegQd6L6nPgu7Q9YcLtqvaoTkPcBHf5cdSNSWPapmvHwYBqyH51VC6CenWXnwc6VjE1",
  "key8": "5qfyXxcb7Ta5F2x6bUQe36K6ecFkCFdGAKdG5oNdNXjEm4JcPxabDHNEqu8WhSbAhmFN6DczFaAcsBLL83aNFXis",
  "key9": "2d82wrhF8WyVszxtxLPPmPnrnKx3gktmC4FUpSYDXbt7VrV2XWR6ES6iVfZLxw8v7aNwRBi3YqiyrhY1S3UreBsc",
  "key10": "3twMctkXuNjQBsjiTd7CeafpSquqPYmFeeGQpDPA1EdAPWqMtZZEvqcB37vRs3vNEQMnaiY6P9LbSPrGEUWsBN1j",
  "key11": "4B7yvaNXJcDBcGc3iqkuqTkJ7eUZYgoyBPwasx4Tbac13TJ9JxF3DZpvrcCFsyauqhhL4MQAQhTCNfoEpGNzTsCA",
  "key12": "3fJTHEXdUz5bW1phqQCdT8fFYsXFFRoqBcRF2cRfCGScbWoajrMGGjGoMYnTwkptz81UC1E8wHyu4VFNwCtxukGA",
  "key13": "4VQYUDsTbeTJwA8sLbwTs3TuPYq4WdCS9mahAasHArNbnu7tQi1B6CMDYC7rgppSGQRND9X6jM3d6mZoU8Caxf7J",
  "key14": "3KeUteNxMzvGjwqrHYNiWLCQmCpmFAYCKMXNpGMWGhTAFSaA3L3zSNBfCDNNG31GECWNjYF7SswPC6Rd2YMEB4tK",
  "key15": "45XxURAYTFjoCe2jMr4pLzYptZFCL5D4wwD6SgeJeyyQugaTgxzkENWrugmWzGQHfRPYR9Fuv7CeHLx873AdBA7j",
  "key16": "2ANgHw35gkQeTXZEagQFnkUQiZMh5CBNgfC5o1TgPrkiwcgnQ9g6UZhoJuBAzaDYipmfAaskDNTCfv7qZGezjgm4",
  "key17": "L3PbiaZsjt9w1d3BzNp1Ni8Y566oD4Zgus5BorqVqt87NpTB8ScJcRoN3tYW981yB2RiyRncd2SBWT9QbRqhMMp",
  "key18": "2Bbk338o6AXPjtLmDTqnqtqy7g3t7Ha9sjrE6wXM2Ne2JnEjH5phigncvEPnhMPxDuCYKbjiDEyMGHJkRr3tttv",
  "key19": "iBB6qkz3Xp5deAQie1s5kBzc39e4yWMsdoFq482ic5AbNdcQijaGaVpRovcvGEDter52RTqKSQSQW2ZTQ1s8HUZ",
  "key20": "66LzjxaCvb1LWvbHM6VTNSGc63mf91egWH76TbeATKiAFD3tvmzXKY4ioMHQGCehkr3RQ1nrnfoU4X174Gf95hz5",
  "key21": "3XR6Y4YRuKBSPB4BkRM413b3JtegCFdN9qH4W3pDDNmHPXavtMThn4NB3GzyFMKMaiok9cNtSFaAbMeXjigWiScm",
  "key22": "2MSQp8ma5sQAors1dDEq1z6PCbJrTNPvZp1RFbRxAe7wMvU6BgrnPua19aqdjU74YJqVkgbCMXvamULgdbhFYRA8",
  "key23": "36FJWg5NpKZomoVcTxo42oTGGZ6XL9ZzcYxc1pUgZ8bDCjcg6FQyJfv9AVdYiSvyup1Fgh1q77wjbGrEtb5QYvgV",
  "key24": "4a254fWbeSea5ucm4wbmfNKt2fqcRLktXcEfwPugMQaKNGne85FjHPaAqxxYSVr7uaeHeBcD7C6TPaLaicVnpEQH",
  "key25": "4RcHdHWUF1ZLhh2oU3fR1D26LuxudBRJitnFcypYJYoQF4NtACxeSjTQrzxQGTqZh4796aYY4Khr5JyHuX8ScxfK",
  "key26": "2d75YVzpSmaXd18P8X3Ej9T7H6z1gFmxNVqcAu1ypzCFoNKDzDPpNmCyARupxZ3a3Cf9Vwf9GBffnkBxeiiZFwH7",
  "key27": "5GuXZREQT5QscFLNSjv3cmAtkzGvcJTNXyZpwbGGVEXtB6fvi5tk1CZYfN2MHNHW1dWMdHMokzbjMLMVpkGS2sR5"
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
