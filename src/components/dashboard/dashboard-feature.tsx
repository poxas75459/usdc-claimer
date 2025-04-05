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
    "2mwcEntLxKSoJ6zERBH8mSpd4YP3WyhqhiW3UV2abVpXQtS9mS9yxn5vcVCrvH4veZ6me38F6EFScFtfEULQAnnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XP3CcacsMSTZSUQ58XFDhHivydBaFeQSC2T2NKsfRa1ALxMDn4fusNFaPu7k9oNJTr3mtZPqL4ox9g7QDcvzgBH",
  "key1": "CXzXRsShRHYARq26rJAxXMrbtQ8ud8QoV1uzsgBWY21Mux5VAymktq6mK28M95MumMY6HnE7jrTv6riPBeNKtQd",
  "key2": "3sm1q8fKzcaBi5dF9wmn9HK1Cpr2aTx4jBr4kHGjxEgLFAQqjYJXWdRsGk1erFa6aT9khqeuC83gWkyFmfV5h4Md",
  "key3": "3U2u8jr27mUT8NwVUGALzbbpzRDPgk3xscK7TkdaqFqdWG7spafWTbzhDUUc69UpNxzLUCQezkxhwy61Vav5fuUe",
  "key4": "3MCRpvFLTiG5L2LmKdG9HMJcNtNLoNSJMZ7oL4dtrstoU5u7iYehseyz3suSjx9e24vgRMqZYQCFq8ZUmqXNqXdu",
  "key5": "34JXipYUwQ42SHkHcNDAabSMMk6PriUjk7nnr5hnHnsHiWktak5Pji4J3kiZ93PZktkiVFmoJ8AZtWvvLzwiPCXN",
  "key6": "26xhYRj7QPrvgRWKnRM8ZoyvRwpPHgpQSpA984L5evJeBn1mSDpCyQU1jZi57BsHFfbNxPMuPTWoPJeiPCEsjqRi",
  "key7": "2Cxct4V8MkF453A3eJcMLvbNvaXRddLgVHrxL36c4ZALtUbQ5MZYks5NMPMpXbQNhEws54PJ9bPucBbWHcx2LJbF",
  "key8": "57m5GCAVpzoSwpcFNjJvm9XJsfs3ZkB9Mmz2uezJfG92GZhBy9ZVPVJHXYHy8BxT9dLH9A7acLmH62vj9T7e9iSy",
  "key9": "5NrfL9MokcjXUve15ZQ5e7ZSiwidzayrCZEUauS5GWQg43VFTKxFmKAJPLp6ob8wm9BJPHoE4WZD43PwLuMdFA26",
  "key10": "4ifKk95xeU958P28SLCAqi8EHaYn8hVVbPT7PYm5gCSBCHx3toF496TUwYxVhA7NFaGgNRJds9n29VxurLfFvsy1",
  "key11": "5q1UZteGbvhdm7hzdRrUNo1Wy7ZH5VnLhU6rM9God8AmhxNaNRLm1BxrpT81aY93bQx2ZYM2tvphzMjKf8PPSkbM",
  "key12": "4ufbzCnjDhALsjg3YSyQUNqEMkvRsCG6GMEFAsH2kH3aqecJggaSGJBmc3EBeWpyKYPYY86wpMnpBgABBBu6gmQh",
  "key13": "3YjAx1nbEmuwQBoNP6nUwFV3fBVt74xhEAtJfNSuQqonr5dzK95tNGPnAQnWkpSa34yRUHyaoz4auDqah6o1hLKM",
  "key14": "5u442e9RttQbCFTRDwSWis8cL9GtrkepjNU9HhFq8aC9KGtahHD33zqAqxmLaHesHKAUAi37wHciHpHr7gqFry87",
  "key15": "454aFfMzv2ykkvoRJfuDt3HCfcZee2zEzQzGJ16SyrFaJ2Ydpb3TL7xqWmqtjcC3ofsWHT8JyxGLkesVRbSy9wSf",
  "key16": "4wee41jLUyidPx9AhBFmexncLPGnPrsDuaN79jn57PiDmGVfgCDcPGFstVyQUbMPuyoZ6yoV9y3GmRsg1iGjD5mJ",
  "key17": "i8qA94vWbLNk8AES5fFSLMPzJzVwPGwnSooJFJ1bj8EyTRpCzLSaNoMvmKKdJWpi7PWP5yPHAKPH4UvPhTQypgA",
  "key18": "5kNqf2sheBiTQXeFe2xcmTXcM4DGr9pGEeL5F1nkfHJPQtQ2BUusksny8w29MqtmXGGiQEyyhkauQuuVv762wV8X",
  "key19": "5L9YpaAmGkntckJNDxi1eZPAcJGHZG8xkntbGMzbjFXdLrubCTQNA8m627PpHqXpvMiukyGaf2kN3sATQtR27yH",
  "key20": "4UTMJPR14QU4zeTam5C1VcfjxauFxtb3apaA5XYjx55L2bdRoj87F322KC3gFNDsJT2579dCigmxF7zcGWMNczcR",
  "key21": "4AdtvGu9aizmWn6eN6BSwQZtqSNmVRKfdaFXf9oGGW6UQhu5AbxGXzdH3dsTY2YqQe9C3UXgjz4LsUcz5bc5mkNR",
  "key22": "4GxUHXihtLD1KZ19BW111ZEtQFoxLaUrRAvdbQyseKVA5aLSWRTRN8rPxHGWHeskCKNCRqDzbiZD3cTScAMeZuT9",
  "key23": "3T7YecT7tCa7tQL6BbTQJ6x8B7k5Ceo4bQEGJBqXPg99NahoA3726hnRQePTiFA5AY8GZMH8YoB8TJnuWm2TZAbt",
  "key24": "3yAGkfmiALvSdSZ9AZDgZ2kAqovAnoWHLw4wD7oQKMK4VgfPPUzAfbnVKv4WVgJZTnvHp9tDu6LoMmkC53n76hdg",
  "key25": "2wmMRf6JA5Rdy4iGJuEXKLLsqxzmgiAQXMo5XKEwkpSvCjAAS6SqDyW4eqXqgsCW5s71SBgPMN71YbLQpDfC93Js"
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
