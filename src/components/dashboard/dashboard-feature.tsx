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
    "3WGDxPkrkH4ZvniQoaLhgEa2YVECJNMKJR46CiDKhcm8t72tbzNFD7e86DQC7pgxbiM1eqmZC3o5aiQhNdeTdApk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x7AsDjEUWPU3hjKqBjAnKoccp96H78zKQyNV4QjkcDciNgQ21hU61mfUjFXqdCm5mJ2N8yDPSu3AM92ufh34zxk",
  "key1": "2Ugt8B5mNGXBXqkMUfni6Yw3YbXDoQgUHTvma1E2jSBTyHbYhNDaNFPFF3ZpRsDdZwq6xY5Jj5YPqtyX4yMiimNq",
  "key2": "5h2tGiriWtbzGTzPtpwvJpZL8yHDB3XKcHvD5sZQe5uZ9u8QMayq9wjCSRWZZVqTYuUoEA5JkCGqSGVDdrY6DXR5",
  "key3": "4NXExSn9ydYHG2jiqb7MNPYWvSDxter5wgxuUjWgpDahrFdXchcnycLAUivKequYhhZSpVvUuvmSz5f3xyFWu3vb",
  "key4": "yzzBC2v6ScV2gzpe4f6P4GenpUGb2fsbDHmCPKdfetQKjtvciB64yRx82cXARApBNdNP9iNpiUnWLc4VfNKn4CP",
  "key5": "4cVDc4He9ivng4jaVGEqC4mmSNguMK6NyB8ersUDCDNHV8iaNXiPuwJAxUb8nmGsAAv1Ss9MJ7ktJvyaznsyiDda",
  "key6": "4U3V7Pwyr5X3xRmtVuo95cDiqCE7asfUvhUzJ5CyGybsgPpuD7Cb778mgATKB71f5RJ4MfnxWc64RC1UgP5NcxTi",
  "key7": "4TwQDbgEguNiqrj2CZLtkqA3tAtCYsAdssJ7nBpoVpWz1U5pn2i8oP6vZeNmXfR4tiLdQ5QRa2hkojsEq4gdxpZA",
  "key8": "xFHhva1S7DRkfZ57CdyXf1AB1JoS1LPdX5cLSnLRwFWNbFjg63TSLpq7cCuGtVwXe3eLpGABezUoofyxbFMRMTB",
  "key9": "2pVvw7BWgd3guBMg9dLELBWBT1Zrmgq4rETSrHM2EHdBWH3VHzo17FtaxKBWbmDogRyvPkkGvqsTQahZHgjT8c2S",
  "key10": "1mhhR2ZyXiZBeJ8goviywMwmjKdvN2pnmoT4yfQqP4RcxLeiiFg2cfeJV98759nm2Ae1depZBJVP9TnAFpgknUP",
  "key11": "2dpqb8VSPpfDywTi4B2mRSxvjhxTwP4iV5A5i6wfudF4w83ScQ3dxYwXQgiq2U9nehjRjajkbswJhsNBTaD84Wry",
  "key12": "3eeLZGZ4eHYzTQpsimU9QvSqnzjoskzYFJ31bSQPrv2LK9ZRkszgBsVgzC6XGvzgKmUa5jRjg86USPUx39fDwXi5",
  "key13": "3FTcMPJ1f7wi3Yq4Utg9ztXU8yabPmr7UB1ExX4iLwC2VgBh6zoYyG8LN5ZwzCy5YZti5X8S86Aamh5GbV1CT5NP",
  "key14": "kmeYCp91w7DwfDcrZZcNmtcvLrb12hQHVmVdek16LCfkPfbubxCjiwAP44eyE9YxcnQM5wwAMiTC8d3C9MtVLkq",
  "key15": "5jbymtQTtKbjGV3DFuk2iF3XHw2K3JgEHvqfqqzMqLuzFkDgyJitrMTpUZUM1Y9qgSBWHK6rpWmPuHFi3VHhncTC",
  "key16": "6Lu1KcVVUvtirBvoc9XrKmhCMsVmxdPD4QY4TidBm7sDAkPgC3BvjHcBnLyRhGEP9X7DXTNfxRAc3r4PnaQod3f",
  "key17": "5VuuPCLfJLQvTNrodsRb7AMF5aetnPBtwVPfbiQ5xrC9y2S9XJrjXgvGVf9kXnwUEdgDcBnvSZTA1ZuNZyJzEWud",
  "key18": "4MvZ1vMvHFqv5T7UHJ9SQBAxXL3NSKx3ac16C9YWcBSWH6R8C5KNBzrnjHhYQJ8FyeCtMwnDqj3eiGBm9RHNU5pT",
  "key19": "5UoQbTx9XPeosgkred4wDbaW5TgJYmPmBvHaWjvnmz979hDRvkCSNvM38y1jpCBKMhBQDEnZcQYfHuRh3W5uPSwM",
  "key20": "66LSwDKmJzp2VYWauo43anSmXab73BrPVCkmzoFJkV9VyJbJUx5apSXyU1CX1BHWnNmcRXScVZ5A12L1sLGF4nqC",
  "key21": "45vzm8TDNY4Jq9LGAS6x7tUhysDuwMyp45C9yBgZUsg5FkT842rcfEFS4yyqN4eP2b3PR75SQZBzmD4BcEt6iuKE",
  "key22": "VhYePMrtTKwAcYg2rBg4ZX4byY6g6b7vqH2picQoaDpM97Cta5o3MXdAW3QNb2ExWTA5hXHmybGULCoCs6LGaKP",
  "key23": "47EVbenqeTdbTqyTDLN1ayAFLWGcLc2A3z9wRwCvzc1vXpHGmpvUpf2hP1rDxHGaSeARzd93LwxQbWtCZPuUgxHp",
  "key24": "scaT95ACYjAPJ2uojytxu4DSxDijzBZBhcXTRTNv7hVy7q9rYaK9upvET2cpTKDTE4zqvTKDQmwwucdtXBK5gbC"
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
