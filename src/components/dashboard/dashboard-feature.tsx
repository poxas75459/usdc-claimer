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
    "2txqtx3SmDWBoAbGczPWxHKQq7uPhCbQ7tfkmaHiknpoQ8QRHx1jntxHCKKxets9PnGrcPfUbycsZp6kToR3AwhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DeJd9scNYvdkuhEvo4LoT28YYN1DWuiaTfayBpueU4FG5zQoZthBxs6EDpNRYmEqNX9wkU1T55AMShAiGQcDgey",
  "key1": "roRirr16vjjXoAhPEP3S6HzsavBCaQZG79GvDppjTJ1fexpRJjpNrR1kc9r4kYNLGaqJt545bsYazKkieGppDMr",
  "key2": "3acgXZANdVhiLxaAhwSsSkd8nQRXXiLonrBBrmYXYnsYDxDRbbCekkZn4oXakBVtvSZpzX8y4kN9y6a7uZcViims",
  "key3": "5BWNm3tVdLrL6VqJAMrPXfPjuhsAsgjmoQ5jmik2QUYW1wexBhwhNMKMQqgq3EQiUj9fwwR5MfAeqSLkpH5WV5aL",
  "key4": "qGL4kATzh9qVWMFqZkUaCoyKht4ja3SmbZv7A6UfPQ1z7zimiLfqmWcAAnMzttPrZtyrfc5D24eSiwQG3EFYN2b",
  "key5": "2wHwGQDnZS81JeyvXswRxFQkaaT4YtSfF1K5QuJ3Tsjp7WPYHLMWVymuF1piNyXxs2pjaNdJJwjtbqKi9NgxDqvE",
  "key6": "5qSZywKDvNDNzffbcZdN7BDyPwKAYbVA3qCYS44uwmDPNqLzVgiDPFmTpBT7yC2XP5frqajr8U39sSCUaWi4CKiq",
  "key7": "6ifQwiJifVcZ54orq1hQBV6jCKa4C2fsHqq9rSkLRYkjGVqSWYPeWmD3kDRZiCkEerYes3R6yDho26S324tmfVA",
  "key8": "2FzTztizHQtroczLDcxTCV9FGL9d6MBQQaQEnJLW2QAEQfx2R9GERXVWiU6ijWrdMD5CyDmKuFEShc7tGYpWnqGF",
  "key9": "2LjQhU8Cwsq4Mk5ekPSwfd7CLantBtpHmwmX65xUECtdzhrB7Cm6TWT2y48P4QDGoy8JzkbNyYRiQRoD3CspNXKJ",
  "key10": "3xv9fVxDgsBTuKiSoxMUv84vRJXBinBjTdPBCrfLWZYcXyXR8obygJr2woWrPopE7TEXb2YocJ4VZkEtb4qnZCz2",
  "key11": "4QZDRUbeZFiPTK2uZWMV31WpYW2eHXvMgAPcuQY1is8qrEoPKucyUY8FkLwRUK5uT9gsnV4qRmsNfdR6tgnXoesz",
  "key12": "5LE4bRkd6W8ZeiyeZTbecWA2GtSDudqciRkJo2Cy65E7scKXg7pXLZ5f3fA2jU5vTEMFpBvehcHobgBco11QUwGr",
  "key13": "36ukZm3kHbiTwAxM5GKZyJtCtP1D94coD5QBycvtP7hfQNycMgBo3PMyE7VpFJm89G9j52roxeLqW7YDjqGyFMw2",
  "key14": "3x2MZ2U6cLGAnmMSxAx4PmWgrANTDC9mQ1beABeymtCuVxj9A6hjqVE887hNLFM5teJKHsfQwww7Vu9Y9S42WwYf",
  "key15": "fx94kawf69WrToJVN27XsNmDaTkjPBRXSyhUtByrQx8iz9c7J1tfEsueoHvN2FSVuWwWMbihgzugjVrJMkuQ8Et",
  "key16": "5FCi921kprv7k5tLL6XUt93asU7LBe6cnfX1htLGUrWzwe3UJHPd7yC56N6VpmYYkciptcgDBVec3tfGa29eMZiG",
  "key17": "23Sq7UJPqqKzH4ZLidtTgQ6Qn5y2qMfn5FKLR1QYBGkBJKv9ZKB1NbU15jF637zyamTGkuiVcsFJWHN7vk4tHj65",
  "key18": "4ENYtoq5xp1hUCaSRfWUh95F7XGkCvwE5rEMcNck35JXtx5cfad4XGvx152kV9FCCyEowWMjqAYPWs9LWUTpZ5na",
  "key19": "2MfyBEJ2TFYdnNdsfHNuLfpnSMfSvDNHps4STmUDR3VjJhWf9iLJCFNcuzfTLWyZUeM8VDcRsS8HS3ALFZMsRXLK",
  "key20": "3BmEr51mVEnWKyNTJ37kG4ZVW4fiYzkub8yKYFQvA97Rh6x7whR5RPpzgWzmHLXR3diFPGEDfndBJgo8ESrxDNSY",
  "key21": "3RsgvMHL8UcaNXbZrYFbT5rd9aQ65NTburRs7Q7UvmEEu7zncAm3cUtMMGMLwskRJdniQuvsEnxhQqR2s4TZLbSb",
  "key22": "36LnWkZ1BifjnLX5AW7Q6XDEpCB5AbLBN6nB41nf8pbmAn5tPcmczjXgqCgGaxC99Nr5Kf1RTpW6M9F2fusHvso5",
  "key23": "2bUFfWTwvfhCezgUEo65WyXNRuaQWSBxWcMbzUYsjTydDeuYJgQd3MD3EFtyrRWvnr2WR82EWpTUUDwgqZMpN2zd",
  "key24": "348phnZXB2u4hppLK91msa5i1Cwec8iM2dLAGtjeR1XkH6sakMB1cCL9tYJ1g3KZLgMna397LHea9Jm7KvpdE9Av"
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
