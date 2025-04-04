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
    "2K8qdVJLSJSSLfND4SFiS8ARSMHvHwtQQQcF6mFmA4CeHmPms8edpe96w5pGcEFr6TyFuR4DnoQa8UDqnmgiF68Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wz9GEHsnG5cLYci5qcgiB3NA1zoMUvNA2FsE6XmAdBxKKpM84Jx8gPJVuRjcgNEuYzKKN6fiCoe8gkVXSnZFiDL",
  "key1": "TsB8aiLDsW7S1Cf2gc45quvEPYMCbT4jqqtwu95u6YbvFBak15t4W27kYukfain448ibGQB1ndC8aUmJb8eoyvb",
  "key2": "4rB9bmEC8cVCsqQJqtqJSxZmgERaCnpPa6AN3x86TWuLHNxww7zfyTHCuDteF4WPdB3qubLPjTtB6Gj9X5jA3tZt",
  "key3": "5311xADf9XPgPec6Zmna2BkeBJLQGEo6aQxksZjdfybSMEh4Znf9rf4cwMN2QJGFxmmjsGQ9WrhtT5UUuVpraivr",
  "key4": "utwFPy7HL91N7PDS7azbAaZGkKhmoK8Y21xao77pzQpij5Ra4msFDCNz3fjrR6WzvpVW2X4w4iaunffmf7wzF5c",
  "key5": "suxjGXnGsNwvYbfsJPPg33quuRLGv82vZ6nXSVKBG8iukzXcLhHCvNJAU5yeiCTWntKEauLECB3qDe6q3ATUWgL",
  "key6": "3dQQduLyGjTm92D6ywgMoG5mPN7vZYZLGDwvdgF56AjCzZErcAiiMtbtWuF99zzo91ZQRnL727zYuiFWpY3e392N",
  "key7": "A2HP3KWH2Scf96QZdXALjAi9CtewcY7VZz1DapUCrrgEyRgN8AHpq7CPv95DPH3QyjgtnedN2vuyeGmD2i62wv1",
  "key8": "fSxMgnR7oJdr7Ho68EMbEgW3SWyxsxPHQhLg2iiLGcQcFk2ekDZ1zDvp8ZvMXK21CkHRDwFBt1R1kpaSENQ1idn",
  "key9": "5dyjM7CTczfwahbhqWppKpYtM38SMsLkGT68YVU3x1Zn8iJzqr3DQvZqwfeNFGfVEytNgmutgMfMMTh8umwyZwK8",
  "key10": "4KbfozDTAiiFDNycaTvaPcYSX2LwPaHsjsavcYohzY2j91hxkJTzTK8yu3bd1ud9TuJoHhcF1Erh9atZH8Hk29VY",
  "key11": "3TMLU5bx4D2ri8kkDL5shzpnzSPmr41LtSTtVL5tuxhtkwa1rj5vuyCrjkYzLyWYSk6kG4QZAa7ph6tfG5MzVtsD",
  "key12": "5RFXQ1mNpQhr1GvsTWMYQyWsLwgRShwVvRwy57ofFrX9K1BRNe13XsstCrf7txRQxPyxuHF8iHH34wHCWctcy1Hv",
  "key13": "5hZRnD6f12eTyMuwYZfFvMq6zycGiinvAdbnqzx26he3h72hRQMQ15NbENiyvFGd9cRFdUgm6UX7sfkNseWPXhFF",
  "key14": "22jrJT2BAg2peq5XhMy37AghjPSxi222ypYdcXdWfTz3HAfeoeE1GrM8T34br93fgGs9Euoh2ZhSVXp1Ni7W3NzS",
  "key15": "5UrkPiEYgGLpEGUyFY9KRSgzP5BS32zwRL37SJwHF59xYvirRYHRj1tB4aBz34HZrpinzYExc3mmJCDUrGm5QmM",
  "key16": "JV7fp3pgbiiTK7CSHCcrDGXsC9sFqVWtRbLdiJ2BAYFeM94KtDtQ9qPKZReaBAGRVS7YWheU5UCtzMroxXPG6KU",
  "key17": "dGW2bgeCTVNZstSg9qmVe3bxyhuJvJx9HWXSvrSHzmq4VSzz4HrU7bPuFtnforhAw4qiqRjhapb24JQsNJKQWTt",
  "key18": "jUN8E7UeVMy93Zi41EoY2RBPr1RSrBdnSTm35C44MaxbW6cUwb7iGtXmxxpjk9iYqLTo1BQdXJ1ReJzyTe5MGqA",
  "key19": "3xrCKwRcAt96q17cBZjLCGEwFip89CyFHnBj5oGEH8seDQhzTqTM2g3ykQKXo1YnjUm2YUxzWyr9Ux6afpnkQS5E",
  "key20": "4UnkU22KjjBo5ihSajzWQSnPnT5QzfmynWkcTyjGrFBZJ7v5fYkyQQicoQhajSjAeuWJc9YoAsb4ws6PtvgDPPaw",
  "key21": "3WFe3YBNk49SZywQuiR98Nt4iMzdZMzvQKJ8BFiD3vkxy4oSarc4Bm57MPgzozG6H8PjVQDENE5FvUzHWo5Miqcv",
  "key22": "65wvZkwYT8r8KxPnh7c4e5Q7J9bHK3EZUdbdBFrnaQrH9VHhTTgxrAZdr9dqBu4GVBLkTfp7YRzwWx6BbKjSzDi3",
  "key23": "3oBm4aXUFb28c3ZTh1yQAvPZ4PTgfbvxTdBdCzAfuFn9HmLP8r5woPypb73n4WdwodegeDqMWevqQTo3CdEfJRF",
  "key24": "66t76tBotXV99tLYaxq7bN1CLn8JwPcLTB1tPRLHRxDKdDQNQMYD4ePUgvbtCsdbxW9VoWak1ZigDhnxCmwsQy5d",
  "key25": "LCRkzX2w5We13d22fVj4TrYjDLM9az3gU9q2QEAEVJfNXcKMzeU5J1Gd5dPZAVB1dRfp9yiWn1LKwf4TE6bqUWM",
  "key26": "3gKmjpPFpjr4BdpxM2YWEZBEca3Vrns5W2CHipV336PSjvBmcXsNskjQ1PfgHrPBUGoR4PBmhSH8FAHprzbMGcHW",
  "key27": "XmLaYh7qwdnundpThNC6rYaxSC93Sf35FZ2bSe32u5HU29wicM7v9p9MZXXp1vhoW64bL4S8gBvxQBZn2hq4PQK",
  "key28": "5pF8kwU6o8UjHg7zLya9PEnqdVzG2NmbVmTh2oyG5a1TjPhumi2FMpCQiJMgTdxSmDMEx9omMq1Ns7R68VEPECUP"
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
