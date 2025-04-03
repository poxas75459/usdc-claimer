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
    "42T4R1RbyGv3uD6Xo3sgDN9X8fbmupbn52kEUXfFs12hvsADcnzWNwwPSveqRoG83xjicdm4wxjw78WSLZ8Mx4mU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2d2TFycdNjzjBu2qNRoEdfSiNHoT86yGPBKYLtqYx7mYib77QZn7UtYMtKcG4yDzpDhwA3Qi7Y2pPptd13z4q3",
  "key1": "5MeqSASfQGPCaoD9ngHp2ocRuYM4gRWHzAhdTs3kYG9ceUfVTUT4XRXvMnmESTdxr7rL6jdwN5AMhQWvbaqBR5Tm",
  "key2": "4mjmMdpnMrp3VWcmAoXtebRf8RzceCvTLmjWKWzAwLqetbzRyWnZ6bpE5KxD7yWd584BMaK8BjS3fKXFvTaXj7rn",
  "key3": "4GV3EbZ9NLcrXigPJAJzLPQZCuiSU9wEgYRxL6hx7F4b392tKatHk7o5cduhKKb2wJ2R6JcsGF6ebhBsn7mhsMib",
  "key4": "4S77yntpy6aLJ6yfYrLp5CcBy1S68WqT838GUYpReSxyzCieCucaipukesQypEvuZks4sk8ouR5mF4kXwFmAqNhQ",
  "key5": "5pJz8XoWfvh3mbTnXnwB3iBv19TheRqYaniAidJ4MnWAXBx6oyk4XfxeRb6n9oNKdtKZbTFey3bqLnC9rvaviVTa",
  "key6": "PP8PgqDRD51HPpAdVpG1SmDg3J1pnNWNaMd4i4rWpmDPWm41yi98usj4RiAW2rMYmxsHiEMXDKDBFjzFPdRhrMR",
  "key7": "2E8bixSc4chR1triqY1eyAvVL3tcSuDQtXCw6N7afeNboaZ4axVdLaV9ViKC9x7uLw7HeeKoeRg3rc1EwHZ9TQ3f",
  "key8": "4HeyuAKUc9EfDt5zjwjZwpHmcccyf5U8djLKQxd3Wm6DTNcD3V132KxtbZvjiQrcpQRTGVqANdF5pzBVMvKWFHcn",
  "key9": "2V3x45EcDEHb8nkgnMsnkC4qAk9kWPXJH8jqtWKHNYw71C2H4L39nQHCb6TdLtHJaobdBikbP3ZbuSD9iYjfq3yW",
  "key10": "3cDJEMVnf7oVMDgPv3KUrQZ335VpykRUDbBKPzwzXpKfxkG9rarKuKyUFeYAD2HwNtWjEc3gmavQbBjzFgkpdkyi",
  "key11": "U2Ht7wgvMaRWB38Xk84jMSN6QrTTzpk77KvBA9bQdHMZ7hPwrGGihiiSSy72s3cyzAcG4mtEE2Ljf4AfgBkH1gt",
  "key12": "29xpFzLe3SV1mYe42CJ1eguGrUFA2wLjZKy5dqwcyK5YaGZmNFtpDSQ2WSMJa6WRHMnPpMxMBMJk8Gf6XfpEjVpo",
  "key13": "4u5RtwLXLXocPfkowg9ykG5rk2xDnThR7q7TZG3YdVVF58gBDaKbwtsTKQouepVf2Npdoygw9LcNgq41A186inaB",
  "key14": "3DgazXmTuuWwnCGrJz5pnjVcNNgvca3zpEPwoanTj4uLzajF1w6ZwX9KyagaBhA6BtzsDqp7bqzJcBeW3DvnCPob",
  "key15": "h3DXopsNpqttvUN41keV5Cf4WRnAB7x4oe6iWz6KYU1JNLPs7nGmbtbSGekoeCUc6XqGrhA1684Px21tPDcQQr2",
  "key16": "2jjqgHYm9w1HcDRifdpwttKjYJ5LCZtpoWCYBWtLKthoNdixvZh177dDxg6CogWzrtUEptZgqQynj5RUTdWHJaXY",
  "key17": "Dvng7yFfRQDj2Ym1JuAvjzgnnoScWjxQrce4GkU6zMQ2t8xxsMhFxcQm6oPVE6rrKxNa8bqrivHRARDSCYrzSkF",
  "key18": "GF7t4b4h82CPG3oVFW5iAjo5cRKomievqUguXsA59sbjp8mvwmL1tU4f7BvW61FqRcC12aPjKqWoeJtqbH4uRCB",
  "key19": "3Gtomv2eRz3A3XNEDdFfWRMD6ZDfAQxkDSrCjvwaVZ6xjy5WyF6SFZfC5XoGf5fE3Y4gQPecJc7gBtJb2D7EVdnT",
  "key20": "JcUPNEMmaJoUS2wGgyAoEGZpH3bEe5BsQsSAxktktkYBYm8GMm45avN9iTv5Ui9qcckF9VNj6Pmj33db2ksgvq9",
  "key21": "1rpLLsqYrkkNbQRaR6TuJSU6hme1wBvjzYyWGJE22Ch458HLAFhE4gh9yyYyPtmDcPGbxvk6wqPRkQyh9QEGNBp",
  "key22": "4GW5y2QR9BoqsHMjEbWkYBLAPfisz44xfCk6S9RijAbmgyFRGEQx7mYKuhrxbKXxrDWXjkLAQuPXkTMTYY8b4yNt",
  "key23": "56s2rKAsr6n4YJqTNP94xkZAFKegeXmq9XcoSrprJdZMJDKYhsYiSZYwGoyh8L79CUSvXWa6VZhvyJa1UDfchFZw",
  "key24": "5eDFyzjzRguDRx1vQgJJJUWiYNkXUxTTrAR42hKuMVXksevUWcGdKRsmsRTD9vdkddzAiTSXK569pQ3VUxMJbwVx",
  "key25": "2GfTVHfWzMbUNY3Y6Q5NzkAjUo4tkSNkTQ7DDHtsKDD9WWAFMbSWKRTD8DPNcbM3jk6yGbpT7PEQoMBnxFCrcbbZ",
  "key26": "2yXnSpwua68ju8LkfVgkTBGA7USEYQDbTNdcDxNw64xZSunESVxF92SsL1JsATCLgT1fBnMXgfQRvBhCvcE2AjcF",
  "key27": "445FNHCSRgGvVcD3eSs3uDz5pVVLqsVwi8iMCaDUVGhrRpTVUxQPvtowwMURVEp5s9dxqgiTDyBJFWm66Ae6ZY9V"
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
