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
    "5XMCx4fPd32gLP7Z8YmUC4Sk84Tt1oWXUhtrkTAgiB6vX1MeUkbxRbj6FhndLC1rtJN8uxkPbEKkoYfejgqVcoKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orzrHJiWZdAn93X4Kijf21AJ95JG2Xnqe2DufSRpd7PczitFTVqe61yL9UGXpgU7TGKtxUHJra8tLoMZuy7cm45",
  "key1": "2258n71DSiryK5uodDVzzyCpQSN3LBajjyM9hFVjWtYLS1zGs1DCBD6UGS1BHHT6Lx9yLcetVjx5hEjdeRqiiEzP",
  "key2": "2jFj6rc1TjGnceyNpKizeiqb3BuSWZJGJvR72UWp1rJoTVNFRU2U4uWhxdz9FQ2vVficgeP3ki3Jr5rLaGr3vZAL",
  "key3": "3M6toPPQq3D6QUzheW736DUx5AAH8R4bthtLsqpxQfSCqgVnXFCcxSZm5W6n9uSb8NV7H5E3gBHkyURXj4nyaHSs",
  "key4": "5jNsEEDYch7HqjZyyzvBQf1xmBApYrzq42mmaNnysMz8DwiesGMJvApxkpTieLPCo1auknXYTbUiFomkL693mkgo",
  "key5": "2wZJs4PyfgnBvQ4ejbNCTsUk8cUEwhkGuLtdTVEPbqJijX5WcL8RVpLaLBE8PVhq8Tts59GLvKReFULBSwAHccg7",
  "key6": "w6xgkhn4bBvoRcKSad4zQgdh7xRBsqdzdAmb3UeZBWd7co9rb7qZwNX554y5B4kn5UsV2ZHcQmJvpoGLZrLNUwP",
  "key7": "5DLWXgurYvgvpY8XuUX41Qu6S7KiANSuC34awf1LnpHfWstGoZEqjWC1bY77R5C2DS7MmMHRyg9KH4dJ12mmQUxL",
  "key8": "3yyaDPPVvUrtidBs6HVF6W7UGcKtUXygoQZpXmZSAncUqT3KFkVN9RWSEDVwDUAjammZ5s991JUCMRdy4JPnhx4u",
  "key9": "5AjYcRvkhwmP1cisMfFGS8XGi7daEgEgNXq5eK8fCsj1VUvBmuugDAK3w9U2aRDN1bSZDYigreyY1nctMCqUcZRW",
  "key10": "2fvmzAkGSAhK31nYhP3pGND8QdSdn4my7iqiF9iRUybsYbCtwcj4pac2xjby5qt2WwT8uGMTDCAgqzW7S6oSRN5u",
  "key11": "5h5wgN4Z7YAT2C79DZfE5nzeVBiXrNZG1Cti3a4JVDbHwDZ5foiAYm4RRrTFmyTqLRAQBuXwAELfzBiEnd5YyhQn",
  "key12": "3QD4vdzt24DjdVCtBNTthurLfdWar64He3XXxzYVWLzYoCFuZAR9731ViRgPdsggM9zChJ4xsWVXGkCwCm9iRPfs",
  "key13": "5BngQBavSAerhj7PNSghbunbH35gxdUTzz1MqryEnxYQTiPjj4zGWxH1qgeyxNac5doAaSJYANz9uipv17gyAkwA",
  "key14": "65bcNYKtGRmLN4Ubsj7zaCceUEUriDnfrN9SSNdSuAxpKZXHtDXsmgX1XDfbMnUmiGQJABjAqXe9Gz7eSFuEgq3A",
  "key15": "3mgjcbAmvp1c9Cttzk4VVxapmtojJihPXLWy6GwaCkHLjxXSaYPLAHvogfAbjxxYGWL4Krsp6aakXcTHKESctZSp",
  "key16": "4khL81oSPmoQEQkAaS7961CSMMsfXVsPFHe4pkSZWhJxpP3qETqkcggwEh1VEie6tgGi8Ayf3oqr4xoQ4DsxDEwA",
  "key17": "AQ5M9YWX134923pyKoXnfunG9DygJNJCjhHVyxYJofusGxgiTBhF7zYdYp9pggBLoSpf9yUkdi93P4mkhNbHdx6",
  "key18": "62SxMhhNKWgGawWgxa1oacTWPkFXahbijTZjX8wEQLqK7HUrsryCrL2xZKvcsox39p545Ey8JaogiBFxtvxX325c",
  "key19": "5xgQbn3HsXBDWvaTTFoGu2uLdvXDYhTobQM4xGXofVPwUtw8TkMFpRN6QRm6idKUswqyd7cDm3fcMdwGPdMGxJsD",
  "key20": "r3MxPfdYcEh9GqmyFcKNwrDWC6oJDb3LqMLduuQGmJYpWDFav5P6r8evT1dim9XBna3B1k6JCD8frJeDkvyrVC8",
  "key21": "2hypeqnc1xvAng3A2m8m3yMHYGAhU8BizTVbddCAaazJTTins1KvvAbuUXN8MbW3ewgN6uje9j5ZZTcwE1tz2FxC",
  "key22": "4rzZCHbMCHr6fpdAesJ5nMQFScaTemsvKZfAV18b5Lwos6LRPMEfcpYJDp5TqoDJZ7ATnJtkh5DYtE4dpvqGqsi7",
  "key23": "2bZnLespQCdPxfQWmt49RpujaKZLzGCnrRX812WKD3UqSRG7Gb79XCgDHytWehZfnCbZaErf5x1o8f3B3SPiB2N2",
  "key24": "2rfjZpS2g6rJBGfPepRmCFbj4sRcg3VfDaFoFGmXAr82CQhcxBQx6kP8KqVFzKz32ddCfHTTBmNFBKmxShhbKYxA"
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
