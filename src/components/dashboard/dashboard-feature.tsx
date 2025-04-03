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
    "3ZTjoFzeJ5mUDxD231s4NGLWZEqtE9PCXV5Angnqp4Sq2brmEeg2kS8EkinJaw7DSve4YU4e1uZsdDktLVxyxBbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v69EMZQGquwHkL5QtjS85BMyaUxY6TfrfW4gufVTXmaP9NCoevBnQpk3PQX99AhaRu89d3rgm6KPcJ6wJrNHYEG",
  "key1": "4kYUt4r3aCZ4LYhQyfoox32fxrWtbiqfs2N3wAdNtWt84BHcrGgqqj4LzS8Ykf4exXkYqFULW3RrENDq9B1iHufE",
  "key2": "DLs8QRyA4CGMyejK4BmgFoRrhyJiaKk1yzUyP99CU9o2VvPRUcUQPuXQy3XVfv4nEgYdM2PpVmpt9fUAve9CJdB",
  "key3": "2BmBpSwumPy8iUqHJ4wyGpWpHxzTiZZPP9vmKL8dzUo4PqPahmxApqgU5nW76tg773FPtox12rMseFFF22zG4Rdi",
  "key4": "5GBhurPHraFTheNPfYWSZ7sXbxX7nEdh8pcVQnLScFqurvts6C4s7uZrxMA13vLgbPqatuQM2qdN3cqCjrfRXy8W",
  "key5": "nDBdh8y84JrJYLaAC5exBXTm9LRXeQ5rxYd7R67WZEf6k6qULK4i1EbWyCjM2wv25h53o9A4zhDptSVQeMXT27n",
  "key6": "5xhYvaUnRzdEBaT4MWLVF6xws1TYMX5kqnuaTmL9saJz1tZCkgja8gsm7eQ9yR8doysD4zUiTETWPrKDpKvBnrCZ",
  "key7": "3cKa5W6iEmidnE3DpHXbcnBr1dJzp66pGWf9UkNcneEE42yrQ22Xvipk3PrTjuNPKgx3QYEnv8AJdETAkNjoLAki",
  "key8": "p8ZKuHXPEhwTf3PdVKeTjbgP7vFAX2rrPoQY9GrsVoMVi2tEwQKFVVPHUaPgEuyiKbFzXU8rBvQDTNieFSGaPwW",
  "key9": "3bXsHsACrEEoU2VmdcdJXg4Nc8KrfG5jRTz4hV97AHrtRzupeRzaEMcu8NLfuCUcBTdtqrjgeUbkKaj7H4so6hst",
  "key10": "4gBLprdXCYNP6hEMMzfyEHp2GdQJWUEXuQdzTBTx955AWJCB2x3G4Cmorbz6izKE8DKzzgLxRKWSxnoA7V5PSMUV",
  "key11": "4FC12ZfdfUL6fEr5fpTo8LmDQzdd1U48cfsqGYw9fpxyEnEhwPeMRtktDgSwVj6YLeFgpsLvj7xqrFnjBtSHFpES",
  "key12": "2dB9GeDRCUFSvoDf77qRxAZVpZdZMpQUo611bG3uHyP46VsPPyJCeqqKiRN2xM1WcdkunVajd1qJEMZXRVyhVAc8",
  "key13": "kYDfR43mygbeUV2MgALhxT8KXkbb4qnhDMSsmoLwEg6VjyP5xt5tzNkxi9JoiE4Mj7HNyPi5u3fMFm78wbbdxth",
  "key14": "3f4agWgqrCjNh5sq1fNyw4beB7ZZbU1BDmtK7R7WPES6Bdtj89tihMkckzpszJSowk5m3W2nWpUf7ZveAN17Qhs3",
  "key15": "4sb9XWwGMcnFoSEHFE1zhXopELjpaQf9etUVPEBHfLRQoVXmG94GWhR3Q8rKbMCjsCxJ2zZpGx2pPZBoDsVB7mSo",
  "key16": "4UqzkUFe4wgLQ2miFaWcYcmDj1D7bMR5wQ5vFBhCwr4hbQWryLBmF48RCGx8kBuRN7agGq3jGZevk8SoBSzuma3Y",
  "key17": "5vPEj2bPTd6BuRrBNznncNGQPgqTMkzza8wk4u1nCpSgctKTNukaWLLrdsoBPozm98QAKzpnPZZX9KE62BxHkyvC",
  "key18": "3BfJBGNoN2DfHd6QGLpoUJTiu7osMByALu9SEfn52C5h2TzwU522yDwoPt84ic3p7He9o6vE4DHuC3WxGa6A35FD",
  "key19": "5ADGvkDhYXUKtVenWMzcXW5PpG4HqPxa384PJfPnhqrGdvXryg7yAY1AxjEAgagkPLxaZ3XHMo1frmc4nc3aery2",
  "key20": "3Wa9fmkc7nMUnNvY5x9S6DGGeM2bUz3BYMMYxoBQ1dzT7tYA5Eni7DZx8ektawiPkWVN5NPjbdZRqKTuHHra4MFo",
  "key21": "xBt9moLmfGbYhGxSRjhff99uUDX2MbduhjjiSm1rfEmtRnM3ZkLBGgcEPkhpFMJuRhDD9xYjuLLbVwep3AATtxN",
  "key22": "3S7Br9ofAbxyMPg8uFdCcicBrX7MaEBi94EG3yWecjCwjr81njYjEvSDHSkdTUXnqYshtK7F1Qmxf2qP9zZ2SvYJ",
  "key23": "2hNefB4X1EEJdhmZxRSQGD8Wc5M6AUhSw7d91P9vy2MZUbYb9qz8YVhFhZxwXXdySRdsaVhgH4fpZacseMaMB38E",
  "key24": "56v1UptS8KRYBpDrvjFSuZpAr1oAD7jC6napetDMpWN1EUmXoKfLXZ8DBkY2sCXWLHCkdyU2iRLPxnuwkDMuySvM",
  "key25": "32wNhzZGQkKof7vruLfvCfCH5mvLete9tmNBfMdr36BxvV1NA6X7bUbeyuHciKGsiFW9tsmAYd9xtdjUEjpBdJXa",
  "key26": "2r2kzbcSjeZzN3Lk1NM8Qi29krUMrNarVAExvY3f6aQPh8BPQ3MRzLsKhvKXZ4abmqqMQhhVYgLHaBJP6EejW5eM",
  "key27": "5JDQgBiNxvk9Vu3m3w3LDXpgb752d31PPXyi24iyA4xkKvT63uyUEaWZYAWdmdTsGXMzm83T7CWzmfds3Wi3d52Q",
  "key28": "5n2RtzpFPrggMVXohdVETTpcSuAYykZ7HgqdVGc9EoC2hof7WzDFYJ9rhDeTscJyiv2mzjdV1Ndp4giBYdWD9ci3",
  "key29": "5Nyg7N2UvPtndgTGc9cHERks85QGEGbo5kHREN5EWvykAsBM3SvT7kdDbhG2c7WJmjL4b6s5Zy4P9GnNnqYq5hK4",
  "key30": "HnGDrYEwEYXNQnG8oFPLX6y2SGxUZmF7hzU4GceZPU5FqALvZCm16cVt73JkpNXSdMf69xDyrUZVMjQEZex5xuL",
  "key31": "48WiBVBxEjPACTSKqXFMWp5imULVY4kiPNNAvohk9YXanFTp8vjT4VC9gcETvjsqyYtZMJvKq2gp7wRQJTD8irm4",
  "key32": "3CqAHnDM9PuHFCJhLogq2rb7KX35NeuqcY7JkxGNm2Vb8qutZByurMXT16Q4c5bv3eTTUc3ZdkdtWQ31is42GVu5",
  "key33": "4KPRni9XrZdG9e85gVQQ6xuC3ZSxCRR7fbqcmUBLafJAfynf2MWFRekDaLboqKyMtYigyCtkqF9uALqLfnNau5LP",
  "key34": "U2N4khWbbcM54zuZNE1zqWLqNRRDMVZ4yoQXyxmQ4wLvaZFoNTayxkis3kcviCd429f7pXxGksrrDmwJxGvVdiF",
  "key35": "3a1kxGadEMooEPUKwiVkfpgE5PAangvnXvio5p8N1ZjsedUNVSzWKcXaBXJvvyp515ZJfLCBugi22Josy8oopBsJ",
  "key36": "5qgdoosivcMXDk3b3F6M3Briguue2Va5uvQzc6SecEupRvfSzzSFgRPTfahbKpn5cDhq4Xp8QLUoNNFHJ2Y8Yn2w",
  "key37": "5BXdT6YCz7JytELJzxkATLH9zoU93yrGUAf4GLY7LxnxxSV7bf4Uwb6gVAETXzo4tvYh6ytUQegMKs9QGcKNdB9u",
  "key38": "26RkVZs6gdqtuvRQHkUbNSxcYZwmc9k5gm115dLaS22ix8aFJv4RWkqJgPJ5C1LWw2eCPq52vbNKQWZ6atZjmeAR",
  "key39": "4fKBuFWNiJrhx12LqzK7BP4sdEhJfRUw1DjXYSUAGkTD3x3FoZ3X4ehm4Lt8nY6z3JhbbSvu3fr1CXLisuy2Ewye",
  "key40": "3KBJKb8vNcxdzZyDB6ZD1qX4AeRQcE5X2CcNdaV3XTHY5oMWT56tvhmHUc14YE8GPcypHAYVycK47wpT2jicqrNo",
  "key41": "UVLBAfeNJeB1RSVechZs3MhoqQt3yUAavNQTUDUDfDjSAMMkqEe2HDmJSFPQCVUnuFj4oPgmEDcVCJGjWeWSNCa"
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
