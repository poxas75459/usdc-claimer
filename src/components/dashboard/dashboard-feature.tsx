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
    "5iH2zgNpnGW3EZbbQftGdrBKrrJTCguaPsfGYH6P4CiJ7J18z9yJfbmkg3jM8ZYDjdfDkrg3YV7mSQwFqQHDu9TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53v1mRTdxd7ciFaAtCj2Lt7J3Gsojzwj6KtsLDEKg9T4tjGc8bq2Wwhk6uqM2YZ7CCmQBXS2H3H7J85EQXssqxr6",
  "key1": "4UaM4EkkJUxC3vB89AtNgkzLPMF4QbAqhvxRfZvCXRnLhpv5BtKekR9k9cLhFV4AGUAsa9UNcuDQMHB6jEGFoCvf",
  "key2": "4csTr3idUSfA4FaxUVhhmKnHFVoFhcjapdumu7CvxiPKBVA1oTTE6o8MSEi98MQg8zgyWEX5qm3JFN6FEJJ5pkL3",
  "key3": "4ncVnxW3kVuAfbTbqnJDSRwoUM8vB1ccuNeFA2d7eGuaEtfqZaUXdV3HUCzYHHoMetPAnRTuDeTkLmiKhF9hdAJt",
  "key4": "5GT2TkAsAqhPqZaGEDRM1eoUiKJKKjq5Wcjz6VwUZu496vdyoP5QAxzL5hJxKeusjvFop3G4rzteA5mUkHqFomva",
  "key5": "4MGz3MFowc9A7VBrAKMmUg2stp3Vis181E6NmAamMUxJva8TXsF8jsyWaRcGdA4H19AWvBrL5idwyhwgM34aMckz",
  "key6": "6vidYmcyfva8GX9kcJYXHLxxV2miMgdsFQmATkPCF7Ww6pPtLf99pRbNbyVHSyyVnSPPFPDSFKp3jhe9Ch2ToJC",
  "key7": "3GUknintjjspLkjXwMZeRMg8XJE7PaQzSXz7GTDcGKrbjcTLAp5UVqtKo5fTk9LWXh79w16LUGkhGHPX3Btf8FX5",
  "key8": "aFRXivTu3ou5dqmHvLGVm9XPvZhJGKctG2JRaJUwGKg8554f6kWq2HiqBTRwJc2BsY4eTB98ucCNebCAo5mocQE",
  "key9": "MA6ZFkUrC9fawyFKhuPobvWbEBopZim58kuVqb6C1U5KeQBYT78K5vCSowfZ2SxmWB2QeQg7EJ4w75dTdHGjY8V",
  "key10": "4ephxjg75sQW514Za2uLoFYSy1mA93mpVa9boBKqEmQRCELgSrcqqLrjvJNgRs6YBQZyfKQbrTjNMz5Y8HrGqVtH",
  "key11": "4bL148vFUt4bod3u2nrTWXGLjafvV2CzBtFgaRmetUxaEGgoxEb9S6Gt6eicwViZLfNMrm76vu8rV2WyWEp4HfY6",
  "key12": "4AyZQURYDk4iuJoeCrZVCcL5XEiN799xyVAYcHYSRpLeQkubcpDaiaVBAYbtE1WRhtpfkV4ev9YQvLyLzj2BNt2L",
  "key13": "2dBf9wmdaFGcM7AaRQr85h7MdYBcnBxuWkMJDm5UmaPHgBG8SmS5vkG5vLWVi56ZGeFUDMeuS3UaJEEUnMxgdfFP",
  "key14": "3LmLGP2EdmnoWfytY2SDBiEiKqhRWfDpU2fUbEp6RETqidMmE55MNkw3V8yrCN1u2fvSsGjDDhdDRaYYT7qf3Ptx",
  "key15": "4x6pmqhxeds9WtsgjbFCYNkCTUWRaf4r9dPrkFZJ2TB2QiYSRoQPepWwsw73ifXdEYkMc1aiYRSYpKFGrs4yskCx",
  "key16": "4dA5PWmW6yu1MqysPEoZ3wux9F7hyHtsD9sviYpdD8QPSGt6vNgQ2i5HcnQJ8sguyugLrh1hLYLszMtpR8Kcat98",
  "key17": "5UmeeKJhy7jVN1mDMf95GuVGTN6GMsEzqWr1n1rXDusjZTG5v9JPVBFTFaMpqtoZw6LwcRP2HCXE5sFCAUz5fdFJ",
  "key18": "4aR7kzKV2zyjLPebsbj8nwH1JqrdoUTBeJhptQnE6HWRV6Qnzf9oKoTNp7m5hYQAWPMTL8z2E8r7CGVevvv86wgL",
  "key19": "nFyAFiNKoU2HBJha97ZprEq9Yqe4zfy9BhZPiBAm8KkCXbAaxyxLBY7jroFsViHh6o1JoKciP1QKd3FhoEqXe1B",
  "key20": "2QwXhfqCMcBTCjqDq2NVfc9kJRo9c2g4FciAEThCc21GVzWPeNZaGGHbWLAhJwM77e8vXgLnGTnWhrY3wLsVtnh4",
  "key21": "bfNhfdWGoiuPdo9TYnAU55UbNgudFpP1hw1Fosdm5khrc1LsZARHvpdUK754iHuyGEE5uBqZ9Q4YxDjZ4LcEqPb",
  "key22": "3MWwYh33LY6QurEJPtyLz991znfmGnin61caqnZHvD42do286rU4m3KzN8PkH8pDB6SS1LniHr5ZzYufmQw33FJR",
  "key23": "4VZTnq1zFr7oJ92MYDyfvEeeUBfWjDSNeXLURdkFq3FmfLWvqHoTiBP5wYvjEKtyXUXuADKWxUGUSXgZBgbpN7D1",
  "key24": "47kbpZziEHqW9XfEUPmk7Gvy3tfhrNfFjoHqMtwwJ9jvX2wzgeVaTL9dVggx28WJKjx34FzGHDPpp2VaBBTidPdU"
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
