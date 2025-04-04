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
    "3ZBxRYixc4FXJLiMqcwQtJdGuQQPvr5UGmxnVhMo46oBDAbmyDv6cPmT2KJLK8gKoEXZeEuUCqmap3Zr6YYCVRZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26of4b5hUScNaXKpcdv9Mfr2Af28WFD8dBDJVx438kZX3rFLxb6b93BZ2rP3gBPtcM7KdQc2GaLWtZr5AvceZtQy",
  "key1": "ZSzhmGaPAgCxm4iaexcsNijR9YY42NXTFpesB44myCDRzsLuzuyjGj9M4YP5ZriUE4WTt3bjah3vrNCsFmWkd7P",
  "key2": "3Dapa5HHJyC2zHcQxo73bg7eEmGYzXJaUQCdgHpSqBWvMedRmU5NQjH9wqdsBy6BZcLomfKghzxpKhk9CcnkRAMi",
  "key3": "57cptKDHfsFDdwUh6s8dRJfHs17Dr7PY6FYjoRUQixN4nxD9RokCSvzSR4PUd5UoHDJ3bvMQerAm8ntTiBoa67ve",
  "key4": "4E76zGTFDUeNH9vDaTmzhA9UNPVk5Zh85H65jVVhufQjGfKSvofJAn1SzTYd32CAqvSJXNDGo16HvWPX1a4CE5HT",
  "key5": "fBYMSEHaiKwNmePVqNck1wwf2NGThoCXQZbumVfyU38ofeeeL7VcsFsym4R5Fbwdt3RqQ3JCB3cojP5qvPtjxRR",
  "key6": "5TcuY23kwMtDxTBHaHsZjrx2NFNb87Wxb5Z1ovTJ9K91TJ6wgHcwSmkqQbXsnPnY47tZtYMPWXyREzh1ZamyC3hS",
  "key7": "5juhzUsSfAY3FVP1DzE4Xj5zZV2tmCuewTWtwddEqztZddAEK6sTunH29GhSbVJfygH8FsKHb5qW1vYUPRnjthrf",
  "key8": "2Axidj15vf3RSB1k2VU1odfcRR2rDEkbS7dEPxr8HnSqHi5NMY1b8DSZFUo1o6r5pRZRJnUaEHwYtiW5B87Tzgr2",
  "key9": "2UFGiYuRyWBXfZZYGzWyKqky9Spwqap5msQUb5XTG8ehratyovTtQE2siRcFijzRB3Fsb51Cx2aTsMzVYmWvdEDr",
  "key10": "5AEemMyTPzNmF1hUFP2TfN1X46ffKMC2UWp4i43ErhGZCmHj7PkRAjRVNL9gaVJgkk3bzRc1CfuWsYUmTqQyQGe6",
  "key11": "5RD4NgiNFaEEhyWeL1Phdv6DMRiy7P6psYJpvSoFAPWgwEpoAGX1twTv2aiJX7XdKTps1TYPUsSrjEF3SpPUELRY",
  "key12": "3gc3k94yEaNrN6FeUNhCXB6jkwHPej2Bd11svjN8T8S32QchMLYBxjyBCTnaip23BcweaKRjqnpCmomcYLF3JKno",
  "key13": "2GrFRyVBFey7Gg1ScGHsPKyxRCWxyfzNdBwdW1zLpcu8yyKv5ZrtHM7zEviVFSncKkwxU2QvhEpc4J4Ayhg2LRDJ",
  "key14": "2QEJAiNsH4P594r4ZXPwWfDZVewQq638PQZ7CeBocAmigyv2vo1ejhNpGnNWqxhkiENZGfPomUuajrsX9c54DeDc",
  "key15": "4VUNDHaWtWJf5zPq6Ad7Fy156KwNGEVpWhxBRssiKmiWNg7t3wocc6TihW6xYZxzo5dJbq2GgGvNZ76avZG5RaF4",
  "key16": "u8KXH87YLmkWVb2P5WYgLuM9F1ASLtFCDiy39VjDNej1YReZuj1a6g4BreMuSzNp1j8c52AcfFC3PCqqjTXYNUW",
  "key17": "3sz2voVdeNNnjeZhfhVtXFnWipqA6G2QUi2Tx7o4dPuEcMPuVqURufejbW3gXRGkFTLUnTtChuZQiJU5WPuJFVMT",
  "key18": "4RTqATCfEmo6qbidgJdWJUc2izXJxs3SmW5UEdNtkr1vNTzVA5xAsUQhYTavys3g7kE11JM3QwKsNCQVUUqnwLNN",
  "key19": "3rL8kKqt9KSFomgvcuUBCXPrpFc3LqVQqU8rFximkfxMgguas2ZoGecX1S2zAdfedCcBohrV2g3nAMa9b4korxjJ",
  "key20": "5LoQyqTWQJCZZtELCsZ8uCkKFzKaYGNHsaTKiyriU7SPnFBqzcpDfEXFCC42WeMC6Bg1E4GhsRD3GLmradXxk14j",
  "key21": "4MiCny5VqUSaioxvbKQFJ9rDrbDqKQn9QuPfPfNYCNs53qNSfoddUYoVB3RDgU7oBvMHupf65DXQ5d45WisGnag7",
  "key22": "3ARkVCzaV3ocsVBKQ7trQT13sNmLnwN98Yo2uEbYLwWW2xLu74eykikEJ8epQNSrgcC7JZhay7B5mALbSxYFwzDg",
  "key23": "3FAB3JTucaCGxPTK4qGAJtySKYp4rK9P8yk1DBsDEUz4D4Cp1y1RtCZYNr1Vub46rCYZeAuiCM5io9ZYopjh8at6",
  "key24": "2joxW5hFcuobRtFQuw7WGPX8TehJ3hm9Zb6dsm3uQ42pbsvoevBcCXUiaTwnbfwXupBnLChXteWXFq2V3gNdAEvr"
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
