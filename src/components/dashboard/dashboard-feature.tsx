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
    "5Fm4H3Z7Rbt9vqTCKRHn6DzJzwjYxSr5dLASL77dPxSsjmoGJhHAMQgGaVafAzboVy6yj5w7o3DqYTMJat9aAfLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQVpFQACAXcEhfGAkGY9k2iYdXZx7Vd28RsJMJJm798gcXm2y8NfD22qaXCntaRkELgeaecm1wuFC4rg5cX6Mxd",
  "key1": "2BGwc5ds6mgNoAxmuMGqYjqLEYBQZU5Qzyo3WVNjFD3JsQBFfff39rxvBRf2V5b7VRk1hiCZ4JvzghrKeXsJttZP",
  "key2": "515FXmPD8E2TXFqTpEs2xHnSCAEXXw6tgE5BcvR8pZkdQSvdR5Hc6Ld6ysh3DBbiCvgbFywiT65btMSQi4F4gxLM",
  "key3": "3xWp9hiwvytS4SqKXGV2TE4Q73RwuJyaS9q4VpwWtxMNKTFWg25vm6k8uphyWfkFZohunJPaaRSutrbBCUxyTJ5z",
  "key4": "5GFvGLxavktc29cHwXFbeASh9XBtKDombeBe9xGxiuVwroj5DpCiohUviDBHCDtEA7THuG6MsMmBZTJGeB7CVi27",
  "key5": "2G61SaJ53BNBxBRgXQEmeqjDWGWZ4YEARtxnRqvU4HB1CBiSHm6oRpCKBWkb9gzPfm7DqUZXkeyHotmmuWzyhBRv",
  "key6": "3nAuK4YkafraX46GhgmaoM7Si8cmEMNFD8hvJrRVSLK7BbuYiKFyZx8urLSM9VWM7pnR9C5VCEDy1BPwZFTV3FQe",
  "key7": "4ZNnEkzLEE8fXdYE7NHBqzW2Z8acFyEo4Wd1veXi944oeZ3bWmuAEd1Pknc2yGeZVb7Y2YvQoTrdwmE88W7wwByh",
  "key8": "3RorvSWvv42VaAeLBffag6N53ZMLok9MkZJUXWUWfu3mKRBHDsJrm3GM9xpXBZYcL64Nm8sePNZhndSWqHG9jhy9",
  "key9": "42hJxUR1cFSk3AEvhdBFVryHMwfssz2zWo8gPDpfvhGeawUEbKKVAAKzJ2Xaa9Chxe6NPvkq1ERSvtZJV5YDDxfL",
  "key10": "3C7GYEHyXVaDzqAJdivCJgcwoW2m3eY3E6LnqFVryk1yqZcn794QZULpQJpdKUY2p6LBZ6AdW8UV6ciU7hxUuagX",
  "key11": "5J8TVdW5KQMdSab4avM1BexoFi3tk9C8My2TXdJEDh88hBJrvWDw1ULSj56YBiVnXTPxjV6bbzfzjSVUQqiTcwP7",
  "key12": "1W1awDxo3ucn4MMFHKyC57nbS2DpKYYU6n3oqyZPLRahzWqqzkpjKj7YZ6x9zv4fJtKKcGNZQoBARttnVaiyyqq",
  "key13": "28WHABDAnkwAoWegh6BvaJVBpvHkk9P1EjTCty6Je1dirhR2QEHwct89Ha9mEJZCG98aRjN6Uxr2RspFqaVmSTEF",
  "key14": "4qagEDHajKs5JKPFzGBbnLNz7CguwZx1wzjcwtg7K6vcvFpegZtmz7bv87WU2CUAGtnDThb23X8cZkQTvWuscjiF",
  "key15": "6k4yAcXYe38ZVP5MLCBthhmdNPXV9m2G2LiNZs8anUd5nsBuiLxFgfkcs1EJ97E8kHmcHqGeB17Vko6C7CToHST",
  "key16": "24KxLCbAjtswktSaHoV9NVziyHQDJ13avQQDP3NxyYZ6byU16N1B42YiqcWv7x5jYEWBg1zzwnSNpdQsLxR87XVz",
  "key17": "53BxaQK9jpxKtR94TQvPTfmJKv8gRxNm9VYhpiKo7H1hsMaaDQTKzdYV3c2QPQS8NMGWbmuLXoKDGzafoYnFBkXx",
  "key18": "3MvetHyCB3XRY1b9DnHqfhJQkzxP7ahujqhcy8Efrp6BsX9Zj5KjpXoQHkzZAVpXdBMvekJ5b2CHUFMtCZ7y8RZ3",
  "key19": "kdo3KMiZCEBEMp5Af5j2jZXgDgSFNxuPSxFm8EFNdiHKCktZYUdFQFDTRgnYXqKFqzSdEwh37gWrUBdkxugLCRJ",
  "key20": "5MCuwedxnUi1xzVkjp8X1ZiLSZirEeWMXoEeNeXefRciNQm6wjZQp4YatPKW81GK9Tpkj8n5KiPqrqEReUnzDe9w",
  "key21": "5bbasXSfP88W4Wo5QvUXmSBjaEKHYp6zfsLS7ew66T6xVpPahReTycS46i4NAyeuF8uGooaQGqQxC6f2EhRBtzB3",
  "key22": "4C3mEXwX8BF4H5RpKyBUXqsUTzSgcmgLCivwtvVMd1JPM1tZ4ikb4nVVxyTPg4GaVwg8m1xHbwQU12JzpxehpV8S",
  "key23": "5jKBcTiSQixFZ6iYbswPdERcU5vApix8ubAiX6mQka1nLD7zLUZ1r3Rgozo4EHGFP5Q4RDStRW3FqABBQdUXSrgV",
  "key24": "3nhmp4vgrbFE14RMGPwvgg77GeZK6PziXjvD9MXAaeQpyLWW7qKV3GQng5djnNXAkUzNuHpcPhJwwLuFtUvsSjVN",
  "key25": "57Xidh6i9Ga4CBuEeY3J9Bbsfo4biici3xSceqohK9JBtapub2AZm5oUBEASrjrQ6xGSRAmkyJXnsWsTDBmFA1y4"
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
