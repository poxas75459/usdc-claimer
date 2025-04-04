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
    "58r1G4jGPNvoS4Bi2a8MmTTurdWE3nY854bbGTTv3AWgFRHQuhWE5TtRExTLLCmUZRuZfuwg778VeTRnpjUonP48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YhSPr8numcjiehP5W2L4sV7CH56NtEbai6QDiJE11u7DrUU1wJ2ZuxcnufYr6yQNX5aguASM3T8avMKdFD45H8X",
  "key1": "66xEVaH1PcQmakpJC9hbVd697UH534hFPMiTaQo5Ws4Eoq88QWgm3DYBbsegesMRJ5NKHE4bvjHo2G1VtQCwR3im",
  "key2": "55gzuEpr4xcpotCwAAniWZWQQ3BKEWdD1hwR8jmcgC2JToSihMR5oX5x4VMKxdjE5sEdZcPhxxi3mVUX29tu65pw",
  "key3": "5zLAifZ7WdTjkfYJyzdoPDZBkf8zN1YVcNBtRaeUGdLtW4JKuiyaqn5vwSE6SeJLbQ9yaG8zZQbfBDH1AvoyMDrt",
  "key4": "3X1EKk3iJbLViuNjjL7DRwBM7QJQTMraKavY3Rx9ss8BPJh4bkEVwxiPvguPz5xNbeNDWmXXmyEVz86rJvcoQBww",
  "key5": "4NPKY2qSUogr3Wko5aD2dhWwuvZANQn9jsBRmudpH5Hu14QM8uezECgN3B8KuByC4NjM4YUqLfFaTh4zbZ3vuFLM",
  "key6": "2wAuc4M1ZqSFBRbVRV92bTHhw2jsWFER9X3LT7ZtmHDyyJvV8vay7HARA9MM5mgXZKQgi4sT9134XpJ8uTQfHJ1o",
  "key7": "56LeKH6ZjDDAtbi7snKXn3mWyJqjhLnSqZh2yHdyB2CsMQuNy8n2xCuPHUGJSy4JnNCj2Jdza3GrPPup7tQEgRX4",
  "key8": "2EHS34xAdnky6zRrjhE8Bvo1co5ZG1putWjcTiKTF1zBTkYHecCuK6NSomNE8KzurnG334C7jMhbCBKkYi8ncUo8",
  "key9": "3Aux5TRoU1hzV45ipn6dvVYgEVp1Dt5zN69crQLaZbdeQPjxV2aHzZLWZeGQ52CyVMJv81wpKYy9D98LuryknTtJ",
  "key10": "27Mbd5L91dCNL1PbxrusofP87ZKp7HRNL8zmDWKPoaeRBRWkddzyUrShEMFNajetf5Rz7fWVaCYQPrXbTqRhHVP7",
  "key11": "5V2jfdUibzBD7dq4RQaE8rVkvAZ3N2H8DNWZLm7spUoYfEoBiGWE5DNfpfXUpzssoP9WFzBP5kwDvpJE1BwwaL4n",
  "key12": "4hAD2zgqy2rC2WeJPbvhUcLfJfvMSNgnnb8EYdYiPyqLP9YdGStsQNKHb7jjHaH4hV2nkGQPr82uGS3aqeohtxiV",
  "key13": "5qtKB9vQTZekkmWVNGhg1ANJmtKWZqmLX3eZ9p11j6yxWcg7JPPavTwhYyJiJfdNKH6Cyuodb8RUvr3oHQ8gnhy7",
  "key14": "UC3Eaw22GssPWJh6JWsvFzdA7sBbi6TucPBPwwrDiUc2DdKdaziTh4eWz9Ccyi1AXKsd3UyqAZsJEWXN6gCShnS",
  "key15": "2EvUeGbY6pFXMSjZNA5nRBZbzhEYSr1xYtNJ4ZAwsK4ewzx4FpLdBqt3QktAXBxcgDQdBrxopy9Jg58CZV5Y3c6W",
  "key16": "3BmGc6wuSpz5FuPAC16emdMUiZU1Rkgb5i7Ywu49w8VaL74YiN2CjuMRgVJQ8PbppiA9VBMJZMmbcApKZfANQNcW",
  "key17": "4SU7Aw2bSB35PjGsT2q9t3xS5kUAKeJbbqoX2ktYdqy7Kvq2xtto5w63Jbj3PVg8WJb53mTyXhn1yqunBGrTnqDz",
  "key18": "48yN6GD6SgbdkqfBGjotA1h7CTfDzQq4Da6fjN7C6Q4bCeLGN1BYDKTbi2Q2bLmqM9gAUXzUDe2DNaxBDABfcnvb",
  "key19": "4YH1bwXCnv9WmsJrvXEMFfhLrboh3QCjLihfPzaq6ENFFbonSNPXd5MzZSNRH8enoNuNoVdRf9Nxy8sjPX2Kurn9",
  "key20": "3HZeNegTpE7TU8JsyknhV1ZkgRCGYEq1yzW4iBCjeiKc5V8q78BiX6gCXvmWVNZC9W6Ty2w58KqRbxddsLCojvzi",
  "key21": "3BNv6hni1rMuQi94C734KhdC3qr2MR6iZ4LZ1TUJWksUjWD7uYXmkxD2vYLvbVaxPhTA4D6VTKHa7MJkCZHUsPrs",
  "key22": "2RwwYgAK8937oN7dekqPVz8NYAHbgrLBsZSHouvUSde8nmQ5Nj9q15KWmw8TwSuXzSAZsAVBtdzP93gESzgbP3bX",
  "key23": "26S66GbrwgC2shRi2VNf5TGuPojpxVzsM1ULPMKEabdKpVHq9ZGKSUUAmPqAyop69h6ED9WbScYRUMMzTf6zyeqE",
  "key24": "57KiiDhXFTzKWoQUVjzhy4RX3ejZYmKSqszQjA7CWE8NcEKui3k7Mk5tktsD4hGtn6JAY48gTA9jUeJTCbxNPebf",
  "key25": "2Cdz62Ks2V3EbMyuXhREMaiWiwCSydu7Ays1AjqPdNZaLuEiboKT1EPs4B3XNEmCjvnkWuGr5pu1Zk7JgoqtyHSS"
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
