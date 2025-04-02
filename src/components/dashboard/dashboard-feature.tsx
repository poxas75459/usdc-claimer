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
    "2sK29NrZ4HRdhnt6HXPmyB4JE4KZt3j41MaMSiPsTJoPFTWKzWgiTQrzFxtnBFhYSfzQS6Yr3MNTLG5Zdh5xfWYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ztHMuw6Zvgu1cwwjWBTYYCbeZQK9Q2LgpXsfh7wo8T3eFaukTdB6TVT3BuVztnvmYM3jGo8j5vbQXFAjCGcB1d6",
  "key1": "7iz8okMYU7Eieq3ofHjZyNmtAjQyEFcxCGxoubLp11RGuzCratNmXnysQBEMGhwXu5LvYqyX1j3SCYPsygJ2k8F",
  "key2": "3rn1611USHBs54RCDrPbdjTzgy7kQDdeKVxZMSKDC84UB3EiTV4yoF6e5GpCeoRRNjvSRhrRnajGst6c9bgH6uL",
  "key3": "4rBJcc2h7jHu9K3azWVZHEmSHYjwJegrf3ZHee9qDPXHTiZPYAYFQZG79cyYewP5QETExmjkXDrtbEzVxyXsx637",
  "key4": "pHkxB9GMJ8TYoKuwC6m5dDS2frkz8ohxF1wSYSV2NunaDC1UvNVdRd2nWGeE3Jfkm2B7qBgf3YiUntR7SWYVpQu",
  "key5": "3gT6nE52E15ZVhme9vNsGqVfKFSc8Hz5K6qTDZFe7ojfnC1pgQsK8rxLFVckVaMny3BHSP7yAUwwM9nwiNXHgPfX",
  "key6": "48WLBhpFFeDa8aLpCA4jyB6uHPpPqB7VL3myowPDQv1SW9VmnEPaT4vvz9XCfpz1kjWeGgB6eczamAmM9eHrBAQ2",
  "key7": "5ofEkaDn6wuwCfxoVUeivpHP4sxdj2ZnpLG6aGRT4UTqnpCya2zDVV4cSUWdVYNv2z4cWHEQE87b5LZ9PmcQ4BzJ",
  "key8": "3mx4HzWHAT8VP773X22h1QLdN1asJzXhXThFRFyNmAwJV8LJAWqe49s3KqhvNZr44VSbvjtBBMTJSERRh8MFGcHy",
  "key9": "9aMVcdxCgTza4koxkzrGnZUsVSFt6tmGKbAaAa8bQtmvRHTN8rDr9GU7ZjiAEt19FVkzXVx6gxRwoGRqSqVFpYd",
  "key10": "55R5EeJocnrYPPe9h6zd6x32hKj1inPmE2tPrWzZNRAVyyDJaW6nquSHAVHHmTUC7fX2gV7fFn2tcWwT5pU8zwiP",
  "key11": "2FoQzJRX6mo85BkYqDr7qAcTz1EbWtjB3rU6e3JAosTFkasZ3kygsoJTSPAPSdX6N9Qih7eMWHzZNPRaSnWTZAmz",
  "key12": "4XWaAmV2b9bzCx1Nyd2abTZ556EpStbiG5JkTNmcS14w3Py1e5SBLLwuFPDgiaBhkewMyNSewJ7PEDvVvugTScR5",
  "key13": "3JpyDUEewcpyrzFkNkXrEGdt2MFnRYVsGRLCDKhjtc3iH287bWTsAXpDwdn1RHGsypoGTUoMtrnsXXA6QGpYZzz6",
  "key14": "U79XNMx4i3RBZLofcT9PN27wjDp12VhPiMsiUqf1Q4nUjz2DUSD9n5fw3X6shhKKTVvRtjiZekTVyp6m1nCPTbv",
  "key15": "5ft2f5myDSa1429w6z6tNsxXPJ387ynwzhipuH3sUF8rERQhzUtryQtpKFErbctrySswkPgm2e3HMkXbfi3sLGnw",
  "key16": "4RRwPDq61KjSUvb3U89d3JhLN1GPB4fTceoM7uJhni2NrwRXsbDjbDcBy7A53Qd3uWN58d29429Df7dUmkJKG6hq",
  "key17": "3T5ffsdn74L3VqGY2PwXqZFSHEHymcYNPpNKbEz7423RrNBCeyTAzv1zVjjcHsDq8LkwHc8ew9rN4GKKsZiGwdeC",
  "key18": "WL7xWe6Ax1NbYRYSXZRPfgiHzaJ5RcBfQ8uu8V2Eqf6G2JtLPJvzj8vkMGkmF94iCVtsNyFxgJn6R5BY8XcT8jn",
  "key19": "2oWSrEkm9wyKkWfrCNkNWJawtjRahgaQ88BFFSDFpRrUc6dbnE1jzhUCgMwcYbxona6zh4LfecczW4xbSrQHeWuv",
  "key20": "53WALbNi7SVzaph1Yq4dxv5yybC4XpU8o4nDTo4fFE8NEUCfxAjEekMQpC9GNgvBH7Q8AkkLtGpH4BXCRVsnFUt",
  "key21": "VV6Tb7YxyCusLeVyzPJ9FTfabxKD5pXDDeTVcsbSC9GSVgyETiwwgb8XUrCPfDXYEKHQbtirMFdx6w2fJ29AzZh",
  "key22": "c7CEWGSaxtJ8AoExRDQqSKKKQ2FtJ61y5sVhQXib12LQrNvSz2gw91V46GVAqCr3Xz1tpSZC9MftCAkgXZG2P7R",
  "key23": "2V8oogAUXa4Rh9G2DjoLcXrgXKzaHKSfBgRcY7Qhthovz8XE4RuKU45eQHcE4tPtxXjWDfaoS62F3n3E1bG9WgGs",
  "key24": "34kGTKoek41DsHiPVZ8NJyBfxjyWCkuk4cwafR5h96TcEKe1JQzQuajmiTmnZARKrTm6Emi6TFpZLwpDxv1av5E2"
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
