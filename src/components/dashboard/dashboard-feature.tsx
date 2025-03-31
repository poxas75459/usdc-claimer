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
    "idL7YSHGZxK5v3xkB77XsoJNs83XUpQaY36BtDERr9xAj8GqDLMWJd5vG9bQsc7pFbaguJmHTTidZYfbWsZENXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mTP8CGvPLqQgDc3seWmeYpC1EUgPJo27abAWMUMM3nXWPBLynPwAwjP8kzbv2ZQnXWGbzbrciGHhuPS8YKU3G8X",
  "key1": "2PKswq1PyawuVcQSCLMT2gGDw9A43Gp6tKDayXo1zaXaHZQR9yCsoFvoPZwZJWmApwMR64eF6TArmQ6YgFWigpZD",
  "key2": "9oUKkd74J5uto8wn5DRkSC1TXVoRWD3WWeScegdRGJmG12YEwgE1Dn95f2X9aEgXQQmJV8HCeqT7EYP58C652ek",
  "key3": "2MY2SBv9MCGizLWDrF3c6B52mjJKkPpQFqJCqKrHx4DCYBPEL1p8ovFt7Zy9XrMRrS1Le6soAAbiz6474dNaxCSq",
  "key4": "3w5LH6rFuu6mm87oECyt2q8MNpHAcrLq5tYUZzt2gZgQmh4C7GGEALT35BMJJYjyGfiP7Nb4jFZiVwN4xPErNL7x",
  "key5": "3i2pRFRAeH8bsdA6EexoqVvPmPhWRDZDxmGsp4KgHVNKCu7dGnDhbPqZ9tE2QhteWrt9L5fzH9awLRhRxN1JEHhX",
  "key6": "5VSbzJBg1sLtc6b1BpEotYQj9XerAi9hdmRaiqV3Hp14ogz5jEKJRFuF5HhFhbVc3pzc6R3wC3ek7C9KYqwtnXon",
  "key7": "2m3DadVks3q6GG3H9JHoXrRBfjZcBrzDvtAMMysZYpZEJnBXyraN3WjTVcFsTs27EMnk8GHrCDAxPNEZjnXmysBU",
  "key8": "4cTQwUTLdo2hhFd7qMuAGZysgkfqhBset44YPXTX36LfNAyJkxfJuuyKPobBFbNnzCHNVi2kEAVoHd96A2vRFSAy",
  "key9": "648N3SRuPaz4N4HAg7FcFTHXVVPxGuKnWcv9E5efiEcv6DzqLHXpnSVTAGnEDti4rujxw1nAzvnRyuVDfjKzWJMp",
  "key10": "2UxJG27W2LQSkU2MaU1aqxm3xtVFHueah6r69KEUXjiRm8sUX6gVjfcn8NgtVn99n247VeAEoqq4iUaiDNJVaLs6",
  "key11": "3Juc6KyeoQYVV26FEhiT4BH9ZJhnePDD1ekoaeVfAvj77GoV9kn6HgiUrc2nwBWzWca5F1cizBUmwcYRJNEbf47s",
  "key12": "4BG6EUBTQ86TpGptPhw8nSH1xp4gw5GoDR7k32w5Zgyyop1z5ZP8CnaLDp1AzJX8buZM4QbU8bNoEm471CzVd2dS",
  "key13": "aTFaJ6AiSpmFhwyosp3DMg5nVZrEyv5GVui4miEdJaEo6Xrbi5ou5sJ1SgzpoH6xACRuBWvxKdywmnpKkQuFosX",
  "key14": "3FrRnXZWkXVrBap7f7aeNkb3LEgLpKtd5zhHvfBy1HvXvvV7rBTisfumptyjhgmnWK5YFnXtw9qNS2f3cNqf1RkP",
  "key15": "4Jd9QsB2h2hpHRUSLuN2r4zo6W2U8GpVdZ213UQmgUdMLdkHn2zN7ZczJ7RDxN2uQ3ANwHHrqxSWi6LoVxkxuv5k",
  "key16": "Wc5SvLk7FbBCUuRDxiie51TZBGnmPU5wwZBa6SY2QHmsyADmx5xcieaXM9pYfct2FunzES8D2ZTvTk5YrgMvZEY",
  "key17": "3igXotk3dctwanRdKvqJqiAMGLL5iHhEShjErtd2GeokZbBYQunthhnTP31WeFCmd9L8RjiGHfFZbAW1g9t4gX2x",
  "key18": "2jPADTR4ZPkkepwc5GhZKCazXNxHHnYx7f83NAw8hWZmvErn9bkdqwHwLaSB6pVd2TbfHBjzu7bESf3HhyuXbC52",
  "key19": "3Lbz3sFg9e6Trvt7csHMMZ9Sk13Sbog8YWjrBox86EDS8Z2Ycj5Q6rz71XyRCtQ83MKqegsfkftpsh2dAFfPGSvi",
  "key20": "3RSmK3Wxb1iUkNftrwXSRWNfqCqqEdGXmZiDg5mTAwFjsE2VjVZ675kgxgc536tSdpcnYguhh94myijeJ6ZuD61M",
  "key21": "2s2LAchSP1Mj4tStRT1A2TUeAbHhePogLzcWPU7ZVJepTQJD9QExZ9bMSRG9icQm6PFToGCwP2rzEvFQi7cv2QG4",
  "key22": "5Qf8xub6xfoqwVhvh2fJVh1nMrT5wmoi61dtVx27AzjVDiCtMPmXPsv8sW68XUbkG1PccFn12zkhGtcn33Nvi96Q",
  "key23": "35niqZ14exM1iMjvPbucAhbU4qF7CUKzKZfM4s6eVmsw8nhosHQmsRzD5AnQuGtrqMWuDXwvTFjshbcxAwbHsF9m",
  "key24": "4TtBzdTksEoj5DmGQJJxDvwjmHahTguZr43Dk2mv2zzofca65MEo81B3iWw6UARmD2uThgU2HLspKfzYmMAayb1V",
  "key25": "2TBnJUXbX2QyoT1o626PQJ43fFq1kRjJjf5VKQJeL2WmCfQDXSAf85MDb8rjrfYUuCRQqf8twYMJ72c3gjH7w7dZ",
  "key26": "3hqHbVXSrtFEwYMXrxy37e3TvvDq9WyLbVQqsphjeg2zoYGPVXJq7MAefTvDvVzJ1mxRM1pKvCzayu3FMTQ5tBQi",
  "key27": "3p1vPPQZRHTKxEmkJLrSbUGqH2NSb1CsQs3ixq19GQiZedP3E8MVcCAPLWkbTzZngHgXjJPbxpmCffurczQX7KuC"
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
