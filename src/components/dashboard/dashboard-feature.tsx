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
    "4N5ZGKDrv9GhYxZRk6X2kP17WgUXBzU7pLjeDs6j7GuXGBkzvpTb5cxbcr634R9pSbFL2pKb6ukz3Ee2RXjymSKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxCUENUkiTiA4xaS1rYHYxA5GBSjPWdWMhTmN7o9J7vKQ4XsbsNMJYJsDhedkYDZpi93HUcrZVemHSNeTSTprpb",
  "key1": "xLP4Xb5PjdkePhZqMVtd8rRTCkvp6zr8SwUu1bFqmYJzZQsJU1PXM839ZdWJFrLuj4Eac53B4xosZ1tmHyXqJsa",
  "key2": "57UHDSjp9QiJZyaQB1YVzpxg8Xryes4T6ykuHJwpKCLCE5oTAiRpvfCWGzu6SMMT8NfK3Ge2QKYPN9bWeefqxAuU",
  "key3": "2iRnnVrHaD2GoMypt7y5V1UMLC8Qj7ttvJbjLRSpdeMJijXpVvkJZm2XDtey6dRBwzGKbzSMAYRgC2PnTZ8P5fg9",
  "key4": "2HCgg2PSAsNLZpWVEN4F4PGteXUNjSykue9AzAjqDzeXibVFqpL6bsoMZGjNBYrBryHdKaJw2GwL81tuM7iftyZL",
  "key5": "36Hjv8SjEJvscxH5g13VpSN1yjvGEpk38uH8WRXdA38w4rHSLe4XtnccrF8qpys4J1bUMfiC4EWqTgumYiSMfPin",
  "key6": "As19tRpRnp1TcttdP4PtWm3xtBFPmfWRdHhWnTZ6RcvYgPQVmycUutdfj68wS1Sq6r7vEX3S7gUBvAG3ngsVZx3",
  "key7": "4q6kHMMXumkfGe4qNyLq5vQ4bKGRpVmTXLt3c2NeMSCXgfFNtQ5Xya7KKyHH8amzgjBWonT2gzvB8h8yveuqUu27",
  "key8": "buGQAGrqWbLah1AUNZLjAbWGay2wCfU8QCmvKRFKmSvsjwtPM5yYTiTS14wRQJrfxmsf4e9x473nLEzhcjhmmh2",
  "key9": "3VJJFp2A4VL9uC4cP4KpqDqdwM3sQAmeyHkWRsyRAx2L3XagF51UKjEauQhttq7EzxM3c9P942FWKxnuXpw8qjLw",
  "key10": "2ndtQHSsWiZXakNNc1BBH1jsb51B4KXvrg4pBiSsneATQ3uMGF6Vfr8U4wCoK5sBBHPvXvz4LhqofUuYgFScwkkE",
  "key11": "4AKun4nLz8VPzdzeMuANAxPpiBD88WhALZb9JyQtTSN1p52VcGbFQG5ZgjgVBFxAwPi1u78DZZc35UxovoEEbwCD",
  "key12": "5vjeDqWfo6rhQkGpJg2AkhJzYnNHoAYgoYPoUzgovG2FkbJKQrk2AqtQcP64KcXrCZRoiJs37dd9VKGw9sX3jpHQ",
  "key13": "41bKVTFo952GkmsvdXDn6PnW4QuzHaeP3tmdtmYYzwax9vKuxxBUfvkJQeSdaNmhMEMvuo4x245MtBFDtM1Us5wV",
  "key14": "2Mg7xMCDE1zWh9sj8pQdxwcNX3AjvnKiAKuXerjc5T8bn84fz327XpeVrLMop7hTbs2LvDzcSxARSg4ZZdSahkJp",
  "key15": "2ynGCxvQ6p5aUeRy9NGjB9LANd3DmMQTXBQXhjGyWbNUkoi7abp75vWWM7DVytbFSGVbcvyHo2QrAP8N4KFHQHy3",
  "key16": "oF7Yx8w8NC4K7AWhNzNPS9yBnbe8HoUjjFzJaaw6j77Y6oh8bq1iWS1z6G5TX38fS7NmNnDCM4qzPbZFfWeqMQ5",
  "key17": "436qzH1nABGnxsmRTzxqjWZr6VhM2HtdyPSfTWibNiTZrx4PGyTNzeMnNeAn1f4MbABLcaB5nb6QgFggzgLbBfCs",
  "key18": "5iTNiaUaJpdteqkHPhAHnHwR8eBTYXt95EVPKtjQsWEQUkPK1J6WX4m4yZgL934DbaewbqhBHmG8sGwK7ScNT24q",
  "key19": "F2ViB6jXKztNZq5DWs7zryRAz5KzZzD22q1KWKp7QVK4zSGLXQZknxWWQbdg9TSFFHKvP55VK2c5UBBUbngV6Lv",
  "key20": "2qG3NdZnWP2YQ5ehAFpY2Rg8iU6Gr8saQ3j4CSUceXKwqcTAEEoxi9dugHeQZ2G1a7biiEYKq33nfESBobvEGftS",
  "key21": "3fG8zRH6Ajz3d9e1YHiGuY9T5nvzd3v6Q2gBNR24HLFENKWLT81sS6pQpqyJR5364gfsQtwLXBG4HuXsH72AfH8J",
  "key22": "3mRRrpgvMGH8eyH2m5p2fX4HxAmM27yudsTW6ms3bbdhDtvi2GKAug9jc9JnYsbmFoPLwrPAZaVjDSp9mQSWEZkd",
  "key23": "3KePjeQRwm85arcZvJZJkX4PYWyUXv1irhudq2YVt2xfq1jwK57S4HMypMZTgxy8SC1WVUxxkmLdfRyMQAvZXiAq",
  "key24": "63vRdXZt3yk87wpELuZGgnupKWqErTMLPyzuxMaYzPHzThU6Qo4gZggXES1Z3RBBn19r3cnb7gNojv1qapk1vR2z",
  "key25": "cTMy2pm6yZD9mAoYAmSU5BGGVVNE8bZynCXVBmfG3nSd4oTUPD7XiuQFQLQNiZcPqxiityUWeNSwyvDZrsJkWFW",
  "key26": "2YEYzeS3VUtYU96mHTBoHPjEeRVjsqFsdk2NrTe4M4Bddxg3ukg45GdenM8pCNtKS1NpqfweZn5cx2hPSP7eNTU1",
  "key27": "3d9yCemoTjdUpcWBJhpEy81uvJcS9gbaus38RvejmTey2v5nUfhLSRsHFGfW4yJmACfSy6ULW18eXeawqitcHqSs",
  "key28": "44dBWyhE8fqCdYsdDDKYdLpKEuLF33ChgmLgqvMLcpbRwywSu2gVERvpN4kyfPpPjgcLzvboT39adC9tVWWYiMNZ",
  "key29": "4R4cVYVuPb6eLXUdeYi5NG211YikQHjE61XaTDbgpqXNJ5M3APEKCm5EWUcYxqnaJ1mSnBLusdGsyjPyWbeeQMBd",
  "key30": "zdXxZAen8MZCMUFk6rQVvkhCnBBfmvQEmufhs9bRyS3RVE7rVhfzxWYyPe9i4CvZgBBkCYFut2fqWm2wVT6R4bi",
  "key31": "3mQdTTDJgtxZkHuxj6ZU1SfznjERzYfic77EgbQGaH79h7DXdbjqFf4PWwyWrcuC4eaHt4qcC85r63Pi3hfVhWA"
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
