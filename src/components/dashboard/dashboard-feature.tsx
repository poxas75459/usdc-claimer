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
    "T1F4kwWzKvr9vhX9mz7QvRa7wMBnH2j9zEM67kVTceahrzCHUJMc4Jw7cbKnXW6JmjXjL4kZx15x519qy5BXpQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpyGvzLtdbongZiaYa62Ct5XgDNcigLv7AAkv46b3p4wAzgWjaq82CZshvPc6G6iqaC8QCnZPp4FEdvjMfQFHTV",
  "key1": "2LTTNFMNvh3vkt3xNyfZop7Pn2j2uoLmLVAsEVDquhmaGQAb1Lqy1sKgKrJTThwxNwWTbQzfdBJ3JJxE4g4p7T1o",
  "key2": "3EvzkdoGaaaiZuudRmiL9h3titZmejRedCGhje1Wp3c11cHW6YUG3b9FFtQNkpfj6SnSE4Y85PxhkZG8SFP5fNSB",
  "key3": "3K8FSXthL2SnWadw1DtR8YwSzV52MVVTdtkdv3J5c6oEzLW1XeLsw1g7GDEUotYbDiuoe5MpWbujoZty4zNq1E1b",
  "key4": "55Pzv3V8rTNryjwxfbGxPRdi2BgBcygeHADeg3Mdmnr5aP3vmsYWdU4UMtiM4cf5Vbarq3jmiqcBjCLraroafAA3",
  "key5": "5cwNcJwDFEBeGcKnm4cgzJXTV3c7XoytuCcZVrYwZNY2AQkJP4vNxzWTiHhnTKsCnkiXXWo4ujiYp1m1nBGcT4vp",
  "key6": "5pkkx8QPR2C7Caq7uXjxLcyKRCFu6L16h9dQaPaHPyY5LfRS6xMU2tWaLqFo4s7yUMis6Gyna71uARSHf4rjZK5V",
  "key7": "2Tft18yknrSuQzkSt7TJsrKdGYmSiCCyt32QtBv94EusFDxTrNBYVvUkHy3ZXfwNDgMTdCjLPmpCNdagJ3D9QR3V",
  "key8": "4DmEtLNbhHF7cy2EnA5XxhAcAz4nhBfUauMNEqEtBMAk2eiXnD6cvFKPnBiV9LDYBeBRXg6NHZXEu5Sp2nuzRnCj",
  "key9": "nkroHxpqsMwRoPKUJRLr9dNBMqxxrWPaTJJYgKnRThufe4bgNmfDcboquYsNE2MepKYvAJgiBuCdzTey6pMRbJ9",
  "key10": "5JX1eg9XEr2frw7sipadDLFRd3FDJadZaLVUmtFB8YTyfLeqvbFT1pSxNVa6rEyAie5TnBAMbYMn2g3PLnwnxUH2",
  "key11": "SgnQKFJxroLTDNEGWAeK2eSh33TyvfP4MEo8vkvoiPgYWWqRauW1WYCDrXj4ucbmzUGvYvg8cxDzHsUQNFYbXJy",
  "key12": "5aUT6utZiYnRLce59yAkdz8tpYmVgdsz2T4HAPRwqTP37YS8Uh8tqFqn1yfrqymWj8SYTKS9ZorV49iEazcVeTCp",
  "key13": "5wHcav2j5r27FnYqv9Azg7ZMC45B2RBkdgUz36bz5fZfviRPLpJRCLEFmL9pCPyqib9V7kyRMfkbM1oTZLsRw3jQ",
  "key14": "4mKa9Notm4SeENrhcsjm9oQGyvD4FEJciC3TckTqbBZqHwd8RfzYYG48mPKEUkdQjEDX5W4Tv2xtVdPkQGe9Dp5H",
  "key15": "5j3oYa9QUeNGpCB9TGpwPaa3ptPBURgBSgV1DEJ8Qy5hZKtMVJsAZ23sfrsSFatwNifUTsiQVqC2Hz1LBFYnXddu",
  "key16": "3999gtootqpjMwzPpgCLAgWTicj42tyvkppYDoLNGvpu5SFKcmz14br33Go8hRm4kGsgWoQwq7AmQ9f8UAjGN6xX",
  "key17": "TMDaBCZFtWUFv9hkMNEABe7KpQK4JyzyCXtsRsxYkcfBkTfN2DyEVPtXLaZUtchwBLnayYTCbCtXB7PQyM5np5u",
  "key18": "2DFGiJHfk2FCNkTZrVRP85QqZna5NttNFzFGZXkXmAtpQ5EE5cCj7no3BGGM2jc1XBbXqMcN1iXxfN3YzTT1fs2Q",
  "key19": "43vM5QV1v4kXhEUkzVPbPPkV7315LpctGgq6GT4tCkAquet7Cff5DV5HtcWQZvdBrYqWZNzBkqcHTiuiMSn6DXDf",
  "key20": "3U8CRndWrbsTsMb24oGuBAryxjCFUxCfwG7bKRf9MrZ7tXzi7EKazC9hhcKd2eg9DYN2JURhVmc2xYs12BHtQRiR",
  "key21": "sGdwDxb7YXB2eiqoh5EgL4dADzhZM7dgKgxRVvxxkrPCWZmA7msXSN7AFQo25n9ieEGGofatCmYCh7k6k2GZheo",
  "key22": "362AzovkvspN6FZ7TgcyWXWaSJTo75H81jR7VNJRc5hffC2WtX8kKTBsZC9moQrgCgzdAYX8jMFJAFmKmkJ3W6Gi",
  "key23": "ExM8vdTUJLfc1YkoBSMcM94oVSo5QS1R15LXYu4y3oecxfz3LcvN2RrFCBUGW6T2YDm8LaiLDo5ZNk1gTMtqan3",
  "key24": "3fHNTrUizyBire4ifjKeJoafUEGoXHLmxTcgAEyZLjEK8Gr3nZpQGMX5akpbEky8YFzUrq63dPmKQmByReid5xB6",
  "key25": "DECts63DVABgqywcuysiF3WBFkfTB8eFgKAsBZVboB2pHDbGnFec8fxjEyZwnzfLrrzMxzJWACyoB3hEd9YaBxw"
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
