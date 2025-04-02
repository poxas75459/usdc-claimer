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
    "4XshQ3vTUKuVBHLAyXvXL96UdpJPsSidMd1jWzv8dfPB3PCLhut7LirMCVjz2YbvcFupUm1wkXaJ53MFpBL2hbqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ofv9hdavnvwXPDLymX4jSXo5XwVDeM4SrjEwKRM5RrPxU6Yc6Bw2aPcrh5NWkuG9Po2CaSWeyosVCyV5VJfvCJ5",
  "key1": "42wztY5JuUTusv8Jpw59Qfk9jjXx9BbQfcADT5vGCGrT5G9jPdTi56AJ5Viwh1RGuSdJDw5ZuCng1wKGL88P6vMp",
  "key2": "3UNNSU7R86NGANViG7u2Ykjyz4Xut7thmuBBnhencrEMCz5maeNgD9N89bRuHTc1AwijMSd4rySSkRp7vpmZSSxj",
  "key3": "b5bbkyUuWFLw5ioAsXcVJ4aUUps6jyakFndt9dM7ra1PoJRz8NvjiYUPrjignu52BgByZ14rDsrqR1RqyRUAFks",
  "key4": "4trfyPXXrPfuiuoaRFMLQF7G6DGBh43FqSMZyjjGdxVxm1YVdX5LGY4fKFGeLkPSaTEgGoVgbjq9V9a586AB8SuT",
  "key5": "4LXsRAFTRqpPaXAU3exaCkJEZYaUHQ8YbL2zAqhhZeByEXtEuyLEyaRRbvTfttH7QD8WU2bLnPy7h9T2vkJrrfQu",
  "key6": "sj3mkPGbVu6bTtYz5KoBVP23NDtwb8zdw7ngnsFT2973xXXUNfiwH5MGq5H81jX4mCExukeu2cSXtdg1UHguweE",
  "key7": "2ZD4L9VXckfmjwdbYKNwvD3vhqXpJjPoG5ePycN4881CfjZ32g1tzJmdKDAXEBEFxGLRBKK8VKHWwAPvTtikYkum",
  "key8": "53LrXTcSvpLZ9RR3LU44qg4qLTxzLuv1dR7hcyNpGVewA7uDoM1VhwZNNyotcgHyo83HXaMXojBfZ5PUyjdF4fz2",
  "key9": "63piJ2wWePpSnM7AeXdofVPoRG5QU4ZmDGNLC6jCXCVk5YUSLMpZjTs5v14CnEvwf5uk7LPsCn3PbDxruaQ65ax9",
  "key10": "2ey19PjMbkeTePchKhCdRZbVzZV9JUvvGjGW4YCNLHn83fffXEfSPDNx3KiLFc6ehrcWsDRYyvZCTtVxRPxMbPrG",
  "key11": "FHiVQH3HH33NiTwgsJFK2F4iuMX1erBFLuFEHFt8Mpg2WRJCuc7hN3d6p5GuHhmiQp4sQzEoWRFCwsRFZwiqNbg",
  "key12": "iu9rthKRHJHLQe47FDwG7d1QSoEogjbBNkLm4N9mSuPR2hkTdgHkgCKKJ5YTtaiZHcyARTcK2SG3K5KK3hz891B",
  "key13": "fZwo28pBwVZwUjNtYSo5WtRVxUBRDxfXovyQNftG7HXPGTBeRbDpt9i8cBnTXfZ6jKyrnzSVadARPPAQAQhpgYJ",
  "key14": "3kdJpQs6BSSsH5VdxmpXfqomNyFSYX4oGZxMh5s9skdQH1d2FctubtvG1LKvC2CeEfGUNYLi81DnEm2PtcKEXnWf",
  "key15": "3hU1yjhH69ciKpuDq4ar9vU91r25ovu47y3gsoitdzyfEeLcWjdabxbeJiVBgrpcb8yWPCztfSnRmHkfXdT6Qz7Z",
  "key16": "5zgQaEGS1XvPBqVUc6dwjFSiMLQ51dART5RidNt81V5aaxNHrVCJGGQjudmye8nbkPe3wdC1gi9D8KWpVp4RN6sX",
  "key17": "5W3HNvsswznvjk9432eVvg7dy1LnLtXVqzAWAr1Q4MKkVaj4yB8xzpxsbfKUXSYWLmmqFKqKHModsrMtWse834Hn",
  "key18": "LHvX1B3bgM7xZ8s2ruUmcU3HrwvW6VtKFAmzxdZsokDpD4P8s5mHnJSc1yD9HwFWY17GH3p7L9osts3xyXkGgCc",
  "key19": "H6NT7DyCBWMcSUwi4zvHxeCGntLSQzCoFJgGWgt3aUcZRA7PWGULQPBNZ3YRSr5TQ6KaVRDUCphBTLi3qDVEKrG",
  "key20": "42anCuoUFFG7wkMj1p5MNZDhDvyPBUq4N1ti55CoSGjZaoFfLPGbkk1fSvM4EjMGWnVYTs7R6kDHXkidveUvyFHZ",
  "key21": "5nKzjEW8GcDS1L2zxNp16ZD5xJzP8khDHnmgfuSWnDyT371wfSzzTuRuJ5x9yEBu8ctiKCEjWzWHeLAXJePfyJga",
  "key22": "29snMzhjvitp3u4qAa3hvAsm5bUSfgbZjQBbPyTYXS9MT4JDFusfNHKQhKMTcJLezAztWnxVj4Jad4VzE8c411fc",
  "key23": "4b1wrPN9QoFNBhZ7n7foxvs6rBH652f4eV5rgZ8y1qvsrefaiAvpSuSj1y6k5bvyjCBTGbaugR4tGpmKtRs4r2zc",
  "key24": "C9cyiuPQDhNXSEZNHkB8b6RtkbGrkkw5JdYtXLSEJyUyB7aVdtnjEm6nBD2ZJsCLXip9JrGgTwsYk9BGoy4eMwS"
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
