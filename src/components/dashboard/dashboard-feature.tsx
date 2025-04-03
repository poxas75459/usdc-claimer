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
    "45DEaGwiDqEzLA9FaWjPoph8T44KfjqvFQsy7afJfYmnt5PoWRDZayBcyfh2po5vCS5d31d2o4PRSnCqh158LUn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCjDy3uRqipQmdtFAt71EMu42j4UCnEtG42DEGmS8hq1pBS24D3SRTq4JnXMEsnfeX8Gb4UeBiF4PNy8BTnSHai",
  "key1": "51FhNJwBfnvCJQryaVrsvbBQMwBKZq2Wg7Kz6x6e2ESWy6wV3G1X1rbzxedXhfu8KKKCtPGgZdP4y2Zucfy1kajh",
  "key2": "Tc1uDYpmHPUPZ4eZgMQrQ6Weq5EGLfa5wpr7UD8ykMSFDJc2PkY2e2pCEgA86DgdYdTWj7mfGM63xHH2f2GN8d1",
  "key3": "2wrZeJ9P22ygHyj7HKhzsQePxHVJng2PbvoG1qKU1Hi6PLUCvTUQsThKgatZpvHe5JVrFhnujAixQCTRKei7Ya4V",
  "key4": "2Yqzw1AYXSqxusi8pgs8jsj7oTSu9vLJ3GjoeiSpzDwy5equHe2aSH3rPbpGnNd1WNR4Ayxq9Z7opvs4yTecH6aQ",
  "key5": "4MNjmPrLfWRcFpbDhABeVavsyMzvSXJPtProjztaimrX8tLFxqZVQnAaMN5BcydkSBniP6sxdcuKyGXWhC6CASBY",
  "key6": "32eKP5wrCE4xaKoGU1AncrjCwUaLLYD7be9XooYaSNKjS8uEJrwhYhGAgph7a8ng5GdsvhDpAiKeBQxB3jWk9YKo",
  "key7": "227Kxkp3BYZd7B2TVMES911d2SLYj25h1pm5Ec1CXtLuW9Rv7XCP1dWw4hJhXoHKXdxiMLZMdhb8SwFfgiiHEetg",
  "key8": "3SwP7tfwZPhDrt8EUiqzu4ruTeNgRMjtpHJNE4dPBTkP7XhpcqSNPUZTDUC2FHk3iRJR8HX73UiqgGVrFD5fHnyt",
  "key9": "Zw5Ckk6WUPpmRz1XCvuU5SddufBkvTfvQrZiaUpJYEp7M2b9bV99vrSAGi1FkYYR2w5fdu9W5qwp73143jqct1e",
  "key10": "b6DPoKuGmUg7A41VWoNZh69tywy5QJJioZr1siPt2yeeAJfLBDFU9xVmZfGxo6fzNN39bbWdfmuyVQuxCtXpVRx",
  "key11": "5vdTjQmDxq47d18BT5gGC1G1d1MrxCsbh5vvHsE3BdAFBRAnmnazQNd9ee3RXENHdMBVkt6HyjcjdE8EuooNAkvN",
  "key12": "ZhN8FshV69tCV8K1doHwxxe2Gn9qeYCbiMCqWpbocaAuSVRs8phe1wo43pXxJNH75MfztjNQKUxMtqGgT6FtSa9",
  "key13": "3SBh7Nt3d4sKL3eVdGxG1XcZt1Nv7wyxCQwqkTPjAgXgucWEfNdGW33R1WDQm1dWR7JXnCFeY4x6JnBJuzsYLtBp",
  "key14": "4X9CUJ9dxeCSJ1J8aSisgu56TXKtwRMEVwZpubpzSpB9WXZxeCxDj4BnjQ9d6bp5YUn2mY3ssFUXf9pfg34yL161",
  "key15": "5qnzcqnEZjWsXGSqTijH4rVdpFjB5kohNzVNxUmLw7oAy6rWGB2htejaZfY66wrbesbeFe5t6ngvTQsVhZxvDMNR",
  "key16": "4AKYnSsNGvzFuU5skUjepHviocAsGXKJD8aVJDCRFZdJPNBT7uwLb5pwumM7DgD2LEjeNduNHF2hqA2UyQGzaDk8",
  "key17": "5b4cxUVZ3s3CWkjWLfQcnwamQY4Nkr97FND6tiTaJqQgpDxBdAULHHMJ3yBo2PWEaJXLykGopR8BwVbMaJNG8Hae",
  "key18": "3WnVwqXz8dToCPcumx3TCtdKrLAqMouu4u9j35KAYwgZc8YaZpTZTCGEmL6FpQfiKgqvYXNCbkBivc6n2GT1UvnX",
  "key19": "M7PmKJ7D5JNSoaDwMgiHETFiXGu4EQwPrf5msry71e4GcBckFFV3r5mPmGPmAVnRK6EipqEsLNCnW8NQxBQfmsA",
  "key20": "5ZZ82RFwQg4fxAVniwRteuveg3xzqz9jeZBA1sQJ8myHSqruFN7DugBntEvhkFFnJBDneatNAWhQhiHJs33CMzZf",
  "key21": "pZsoNvbKFMpWvGKzcSYxxzpacGqU8ExKWnmqbS8tHPouL2Pzjxv65nkyFPqEexRvXq1XmfeaB3brwWgtsL1ojez",
  "key22": "aPrGbNiVnJcHSDTviEwUg6zimw7YbMFg6ZhpDKH6Yd4t4XMuch2CPPH34VCbsT5FXovcnhp8nxmkBSSn9MWu9hr",
  "key23": "21ufjZTVkMdUCXu36gBojusTwj96So3DoFAAQcAHUbNHw2o9b54fTyT9Kfi1FuT2XZus2CGtwWeGW6WbCjMy4Fvq",
  "key24": "26h2es3GZhyXzfbf67yF2YjopbSTG5ggntxCyscKKMKJG1SzTtB51E5QFD1NVuyrEHfGGUSVnqo31NTUTuzNR9KJ"
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
