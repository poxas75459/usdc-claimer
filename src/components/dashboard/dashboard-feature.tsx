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
    "4MN1o6BjNqiMNh6Wm1MGrk8BjGfmyYBatGrHC7Rc6Hb2dQyFToMff3cdKzDBE8eV2BrtDKGit6xU7823rjdZXmkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lh1ozhP6Tx4wB6y8DR42o6ocjtQhKbJ3uGDeNZBkB1VTGgrW7hWgS3Q1qM2fpXs5Yk1n1AV3mQBTWoyjtig6tqY",
  "key1": "2ZEP9EDWsbJ2q1aYPMPVnjiufhwNXqeyPhvwqtQTKSN9ty3Fs5ZzJeMf9oo1ci94t2rAnTUkBUG5QkcFygM1pFR9",
  "key2": "47J3s75mVLrqXQrLxMUBmVvmiw9XnBoz8rbsGRiPWFH7Cj1gyitv2vRR34zJ98zPyVKZdp1L9VMteY5aMRCg3o2j",
  "key3": "3MFgiiBDTNu8hwUXGThnVNhmJnPqDappk6i4Xk69tJGQ5RNDb3SXdTRtaRSCMbfHb3CigiDz5qEbXaceg3fsEeNH",
  "key4": "4ohLsmL243aFw56TbZVfec4y6R9rwRH7FnvoNM9kkqkcZWuHfwndbyEjBoCYwkJFHANuPT8ZYHRPFqH2S8b9Kw5k",
  "key5": "5ZFCB13owG1hBSqFrySLdwC3yLVsGCAqPPs5dTdGB1UkekHwcSaZgrpoK8CNM92Zg8WAheKMQYqDC6yrdkLyKzJz",
  "key6": "3KEqDqSUGnk2piKeRxTuzFCesybLhoXXd889UVKSWnSKG9VFy7UgxxQtXpDCUpLTeQKUSQKYGnGXfBP7anbkFxXX",
  "key7": "3qiH1sGUnQQnrAWZpdDAPF6XBMPAXi1sSo1vNNoQtVgReNSgqpud1rfLoUmV35JgSsMhdCiVRwV64Yn3ogSdsB9i",
  "key8": "2j55GRE1LzPkE9e26PT3Pjmgrd9Hsp2d6XnDfpmL6sJkPcEoBLQaWnQYF5jUy4Wkw4bEtavyu2Wsk9PH5GqR5bQT",
  "key9": "4h11NhrfhEPbeaZ1FMe333nPcVgtFaQe1eJgJe9xnDqkG88rYRDM1CFXA45ZhsscCnjnwGvodaE2Ub7F4PLMQPWp",
  "key10": "571JPuNA193eaTDWPfpDNdQxmwfnJ41Bvfw3G3tEKjZ7cNusouuBsUvUuRCm96QDn8TbTvL388FCjVdnDUN2qvpV",
  "key11": "4b8iGzHvfNXkx4T7WpAV9EtCpP66P4AgcfoYB8Cz2yqupG1u3kmFChGURdBqx9whLcy4VLamVuJjHha77xUCBP7v",
  "key12": "5sDNMiAbDkLE4P77ZrBjiqxEyn54bzCvJuGRKD38ZmNFv2K6bFXaVEnuo9W49nmYnMea1En96n7fzV6pHzFMeUS8",
  "key13": "5AEbgpKt1S9empNZoCjdKDbFckDtBNaftt9mAP5b72ggHhg2zEuJS9bEDfSUzcQ3xmqseJzTSimKapffhkKQBKvk",
  "key14": "67h3dwi89PUjGmR1xqRfVfYbZH2XgdjSQuV4YA4WXquJdFfs3d4R1JhGrqN59Qto6RSEy88LfWxnmbLUtab81HgN",
  "key15": "436KkxvNcQMD2DPJ1ontewHc3CVJzQXp3SutEuPZKP5BfJchhW6XkRkya3atRiKTH5Sr85iaz3N9oBD977ZJNJTH",
  "key16": "3snTTN6j2ghhRe3GntF6GMz5qzbZjkcmRrwcFuQyq56xD2ACsbSAG2Sagb1ndQxTrsE1tHB9mPQ4y5brFQdjPmCH",
  "key17": "YHYemm4GdoEC9X5LYH4pDwts3UaZ3gaudYoFdcaSGpux1UUrmMS87hfh5XkTJdQqkJfKVtuWyJtisavjoWtT8kH",
  "key18": "2h93DXjETPyC21SZvQicC44wmyYmiSzAnL6rHrFKvykP7m9b2QboMGGPEUUi5f87EfENaCmEKPhTzzEMHXhJuWFr",
  "key19": "4g3MgFZj3aVEScccWch88dgET17p61W8fXdxhhGrraSqQcbk3g7e6gp3bZmxK1sKDRg8GH7jsQgVx3QneF8AorP8",
  "key20": "48fU4Vs5NEZnCN55iMpmwUdhAFxK3Zwu4DbzjpY7bnXNYv41ZRNUHq2dJrzsk54GoXaEfuYc3PkLLpkXzXWKYwvm",
  "key21": "24oRKiMSpWptyZeVmYK4UGmyaaKuG2DJ73VTru1NojxTs6YX8P14txwNnakPfWGF3UFmknDKBt3NTgLjRXvUomei",
  "key22": "5BL33UsVGSCuzXMNu6iBHwQg6ZJutHnbHpr8xfN4bYFCw4ST5KKvbaRLQLjK8wHLyQ8GZStbN8dUdzgg3jKDfDGL",
  "key23": "JFCUptpVBDHgFyJojkF42brcDmBaCFKgQZjkRPFgPTY9pTSyoqvnbYM3n5fQ6VGY2zk5k97YcSjFhQngwxbVgcV",
  "key24": "55xi45kN2b7DDwu2BQthxFbBmYDAHUrDQoW6UJ9b1cuwHXwQtxvQMaTBRVZAit9pL1cShiKVdJ7fWVqmrJgGRTJF"
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
