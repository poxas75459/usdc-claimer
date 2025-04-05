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
    "4GbcM2J1j5yWPxYLNugSpXodv8CseV8bKA8RFXZuqLzhAWv25WDFB9kX1qbjQpqonaEUqpMjav3Cv9bnTKuDUGmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PkCtcVa7cFkMCRrpWmmktofWsX6oD167ZkZNPtabNsNATuBhcBBRLEm6eWCv1SLM6Gwi63HWv4aX8dYh5WJurLb",
  "key1": "3iLxWreH38SJnuE3AehZQNDx1e8Dn11CexbZKh8nnXGopEH32m6mJnfYix87oGYSRgSkXJQUocT9EjywxoHgmDgZ",
  "key2": "4QrTQo1jAKfQ7RmUffJ5WpYvYvBttu2XcaQUEJHsNw2AcYf1Kkd4r4ugbGzovr9jznTHmUWP9qGk7KZ3KqE1hcTt",
  "key3": "5HqTYaEuRBAGuHacoAbBmBB2yjK9hy7MGS1bTHRxfeHWLo7J6gTxrMeGqt5qejVLnsUbh61nnDptAMmGxY1u97sN",
  "key4": "3zvExVaogXM1XdoqafSmgbvNuhsDkHPGpddYpHWNuoKWa9JPiw9huRYB4dfwL9RLp2o2vsC2uLF8f3E5YbGADhVb",
  "key5": "53gsieAH53SP9fd6Ubi2hr4ujgPpVwULkfMxZbAFWLfiHKM3zvZnNHRwpn2DeSJNVseh1pLkMPNQMFaZi1xFLVbD",
  "key6": "2JCboyXu8epYqRgnjxZ33tV1rZsc4fj6sDB4arcNKP6phuU61ogwP3dThHKXCdZS9tDWUhmHBwQFwMu5UDsLgQjw",
  "key7": "5r8CuoYP9ENZSkuDfSVqY1Ur3y2mvmC6ns5xNmChvRjdRngdnJat33cgFsMYD7D6s4ufodECtwMWvkyStVxqeLnX",
  "key8": "Bh8sEMnfGuUcHxXiA5ZzhZAsjsPkd3ww4RCYKLMQQsn6mLHFfwaKwTJCP2A61KjkZRifXCSVTKnTxcffj6nQjmA",
  "key9": "5GPJLPVQAER7JAxDG3HkfWVQQxREZ67i3prDymb3MD6Hn3WiwZ5rMUvqxPVeZq7Z1FXXBckyLH1VmTTF52oUcDTB",
  "key10": "MLvHUVVRPd6Gnmpv7uxDYxjb12j34gjsGNCHGVEGCSvbCBxreCjRR1U8KFQLgTeZqe3263qbUNwmd8gmbhFkyeb",
  "key11": "oHDfYhykJHTvmUzcvMnpZDMdwdyfiPRzbipd4CkjhHorVFJC3R16sXJVhVWveCsUDCqSW5hjCFRHsjNH5Qp5fG6",
  "key12": "4SRh5FhdMi8xXmMuYKxo6Qw9H47dmPEB8fEF8DBuU3gAnQj3a5aDAtaivieF94hVUEGDVQsssLvgd9tC1doF7FTZ",
  "key13": "22h9Kr7e7NFxVtS4qKPZqCfZ7YAcdsDLCXCVHV9Q38xCWQojjcQpzUaJSorNi5Ctf6jBwS3UBxiDWdgEpUreMoKi",
  "key14": "abPTRRHLKYt1sZ3HjYdqtHcf6fzy8YtYapNLhyTUkpDvfkTPX6RzgtJUEBVSeqDApKoeFe34CnrwPkCYQB9fuje",
  "key15": "zRPYmoM1SgAausyiBVn7GJcP1XAxeCseDingwmXttdRvTS3PEe11zdB78hdPqQFKcunfxk2etxNhfHA5jVqQy9j",
  "key16": "4iDQJXtgS9bDbYMrGLJ71BiwW2ewrNmTUMutoWuo6tkMttqrmfDdnPxbgxCNdVVq5Go5Q4CZHY3qHEG5xJWay7XS",
  "key17": "2aZNTHcRRVUtHpHD95kXGXUJGU5X8VsEdDTkEkACNwihdSK3j65HFJqs85y93pJK5ehWGrRFqzrm9oGANRxgnn6U",
  "key18": "4VqCa17W9ZDaUTE4uh8e7uFhcdBnNqa2dtUpKDJtjZEriUQjdAp8AyV3kFKw4afB8d5QvCFw1f8YZ98c9K96BMZ",
  "key19": "vsfw4Vgtz3k69GQA85Uza2fhyX9QHAS6jVGWrxr47xuLMBas8zjocY7A172udhNkjd63rd2wgf246vbaEcYaS1X",
  "key20": "4VwqzWWWrhXKF5XvjksqxQ26bTxGRcuHxg5PgiwAGQApffX7Z5JiSCeacFe3Co6Jvj1Mbzfwq1kPVKnvAJnF8dnQ",
  "key21": "3tJvqfvBvEtGBT54RZVvNu4vxFrryEQcPgjQzW1xLznTfQD8WpX4zjui1bHAH5bbK3xNFkghyCgzCy46TkVbwCtv",
  "key22": "2uwTmcAqF35vF58bd4FywhqZ6cSzSbpJKqrRxgVz5rkExQXG89fSnPDEXbdtbro9WTzeokCSgdDdoGS8KBLzvZjE",
  "key23": "4XDtGKvkW8UUD6HU4n1LSCDVnDRA3y2KWFAUSze9HbCPngBpCkiWwvf4R8qrRgADUyf8QyqTpvraPmWKp13in1qA",
  "key24": "2qFn8knbTivDu7FXRPZUgpLGw3zwCMeNTLMx4cbaKMbpiJwQGDKM1BYexFLVi4wHhKxpbxMszxQUbUgEKeQsaoce",
  "key25": "3GLQnx2UDNdoByJ9sjsFE2ToYzrQcG5BkQhXJDj4XSqniDk6jDLd7gfriapfiwNRvzwBQ7CNGF525jmS7SF7n65v",
  "key26": "2q4dMDP6PYC8ST9ag4aCWEJufQgrcssCM7gT1kvDpmKYn1qKd42SxaVu5vCTv3or2KUts8fXNLxWGseMj9BudDu5",
  "key27": "4QV1bddY1hotCfivxYcu2CJH3qmwW7RNNttr5bxHucPBcFMaKYCnZYNMEpWE1VUod7NHKCaMtoxFxgWmKL1uD3aq",
  "key28": "4f8EdiNU1YZyd5grVquwW7mFkE2Nxm9b9vNs5iSLzGktGerDwbrJwdZhH7j3DafxT43rnxAE97R87WPDMzBaLCEu",
  "key29": "3v1ZAdSR7Az6aJNdp6DgfadFJYSzrm7qiKwBXfSxDZ79AkqC14j3RyPDq8pz92GMSb5SRj3kHcRvYubYaPpek9y9",
  "key30": "4rF5AvYracb2MrHxnayZNCAAeQcVKpAZ4aTZifg62b2o97YZLQDYsRtrz6GFt4ERosN8sCWuGZ3h9GFBPw3BLto3"
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
