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
    "qS5b92dFRPNNWCqGNPzXnJg7utvwJ8KH1zVoKTUQDAtQiafn9tj2P8qo2mcAEViYSVeakNBiTcPALepXVg9rKDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adVWdZW9ZCuc74EuFD4PSRrabooTvYG8VQtdd8FGJmY6xkr2J6LmTC1FqWkQwcMhTR7zBWPTxYg93TojvdP3ayb",
  "key1": "5hgAL5sx1FmFah4w95FQx5zNgu1WiHfJ2tovxRCpGRD4a3yifRymDx6FhY23xhVxxTQLvUqyecafaa4thgKdBZsS",
  "key2": "22TThFxNhvgToQ6AyhMTZbU5TJemyB3waGCsSxhR6aekEVKNaVFjkdLjhW2q8CqmoxYy8BnQB39E6Gtjwzm4YpyZ",
  "key3": "2gfKQg9UB1qkh3eKE6ERVmvRjAFvrGSrESq7Tm69YPJMVWHNRn6up2tBofLSc1Kgbk7vF7yufrWTriB7YHVwcmT2",
  "key4": "bH4YHptfA45uUPz9PYi7h4nuNywACJ6WJQvRwfrSkH9Bawk9ZWHx9XApDUzzCCY7gC4mAwDnfZ3Dxq5CGUQBfBU",
  "key5": "zVyS8jJB5SU2HhckHPjSVAkkgc5GzRZCy68UCwUzRy1Nsm5DX37TPLQR7sTE1obFByLcA7VLSCAKuEd61osc5Uh",
  "key6": "3RaL1yhycXWDGwipWHynJhJtkxppiWzEL8tFSwCpChHEpP7qShqfD33zp99VsZx7oDqXVPChSe2DoFcf296rFefv",
  "key7": "5JAZXqYZkwk5sDq4TJUgwCF8vDnucH1abem9F5uN6R7xS5jts8PR7eocjrqQjcp6N7wyKVrhVyCuvBqXBNRoVztk",
  "key8": "3YDnvdFUfdz5bnesoQ7Hw6RFHWKPXZXTMtwdRnFmd6py3ymHtJDzqeftAwzdgGqBTquGR42tvCsPQQK4rcHATmRh",
  "key9": "SuxdPgwBwnxF8Ju4RiYUXETQKEbjvfF4ZPS2pNFvXam81sbjtU27QU6NBkScGWFkCfu8kuqB5vmScbAaDB7o9EU",
  "key10": "3UsYiq6sj7dqm3tgXEMLVgbXkpxxMNQ7QY4z92brdQ8w6WEmTrY8WF2vdzrjvtpXzDQcPTGtuajur9UGZpzG5rU8",
  "key11": "3MB5mZ95nTvZgavRxFvEZQ1JxE5wCjWfMr5nmgH29ebx3Uf9oAtQszL9x2tUSBLKrMEvzzktgvvWyrd3yfuWMKLZ",
  "key12": "3CRbyF11k11YRmZrsH3xqvfEEH9G4ZDEZVchdJZxjZXxMq5wVTVWknq3CyKvCQM85FRS8P2TArE3y22D2NPhkaBa",
  "key13": "uo2ncVkB3LqLiouSPvrhrdTkKrtUeXjsvcPBvGDjTHe6kuRL415xcu8PEfX6wRaWYX4x1kXP374a6GKmdqYTpUF",
  "key14": "4u3rTxrwPbiUyJ3pdtok96ZpQvUQhScDrV2LYEB5acj5ztacFJQge3czgXeZGkzdoCrgGNaJPa8bzSAjQoLrg63",
  "key15": "4mmvjhwD8sWmLnuF7f2rRfGdZJ6A4eHq2ftRxa6geHyaCmNHqQ7b1R9buSf5scdp6WB8kMBcRkDvMBwBAkscJ9SB",
  "key16": "4zxTWyay4JzaysjM4TsZ8NvM8aDsahNfePwi9Ek2Jkjt1NbcKSt7cD1NsWFMnDY2Lwks15yDxnExUQZ4L4vM3inA",
  "key17": "2iFkZ7HrJYkCBuo2JLNQJykUWJoUo2RUmk6imDhhVcPs7L3ddxfGA7Doz6cBoZr84mA1R84eYdWEUuU9wG8Rz6Sg",
  "key18": "3s9T8zcVt9hHf7BYVHhX4k9T2Nv2piZGHLzHf8FpCddkNVd5vZEkpNycExTQJJ9L7L4M1adZ14qD6J3K7sPkt2Co",
  "key19": "5PCHPjYEpk88sDFdN2K6EFr5yhhbUwGAVN7BG7ymgg1Z7ebBjZxZ77LZAijjQev2KFvc22EjsZUGFXjABm3KxWK5",
  "key20": "QtJFCtXHFSrgrof3esCuKeHUbkMcVqtsWUqcjmiGzuxBYvu2tZ77Rb5UKCdofQH75KSkXCqLUMcB5ubwLike44K",
  "key21": "3qWj7bBzhcLEVfcjxt1Zjv5BapGoJtM7k3N6m9Z2mtxjEbdEFf5aM6SNdEcdfJYEXDchWGHRBvZTeiJb4uqNiMeq",
  "key22": "4kH6J7B3f9BJc99DeCJDf8LmHruNusAJTxzvsyaCpaVTXyXBjjfEZHK1bkikcuDPh83oSXVs9sLm9cU1owGat3wo",
  "key23": "3CA7rbTXLjS3ZYUtGN9QxkGDoezQnu3VFv3bFsV2sH4J1VfRSDfEtcBeWfZZwEkG2UdJhuxwXkuphrqjXnuswNnh",
  "key24": "3ennsfPALeUZh9FzNFcKvRpmCFuBCRevefrDgFccZACCYBPGEexGDSkoBeXVM6mMqFmFSB3DdanFE9W73ynTpArA",
  "key25": "2RGJvejub2aG5BnQ6YsFXoBFdP7H2q9mEGEqpK2TXba4Ci3BNb8bNuqheFBPrLzdNEJFMHwNEW9DRdQGoc9o7e7R",
  "key26": "2jiYsVa812m6vwb1qZ47GcS6Mzb5fHSZfB8kwzBw3ffsUTza7ZHe8to6y5C1QR7aP7dJG843Az48S16VetEGSTXE"
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
