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
    "2PdtzoxupBKSNTDYPs46ZsQzByicfyxjmUucB64RRJoX6oeJDUPNaJmeDjQU4AxjXDwPecrZFkzWSoNhygpqK1T5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXadxUU95DoeY7fjvAbhTeoFBWWryXfbfRUGQn8MTQfbLJtA1ksvhotmvpfDRAjC6nrcdGV9ECuL28jjtYZzFy7",
  "key1": "4jMvHbcfFTggFXDcG3DGgWEoRMMHXrmJGC1DdAU7QbtkgsCHYXBn2ZSmYFz4FNFaqEjhD2YPuZ5Wihe6CVGxsfhV",
  "key2": "3Ns4nZehJwfikhuJVJfmqaPRkHf7WHqt1NTu19gw4Ef5JPopJ3EpMeqkV31T1Q2kX9nKodBoqVdp7vzMt5PvKP79",
  "key3": "4cNf8RFM2UY2Tp9nscZPCQsHAydifo1H6VwDYMYMvSsKxDva4EvqTYni3ycqmVPYawBjr4mq1XkiKunsN4R96Dv4",
  "key4": "4soVh3hHickCoUvJTvNQuaxy1aYjfnXhkiv6vjgUsSFYyX8moNrrRzUGzoLNrKGyMkALfuSs3DMr8BQSsUDd2zJY",
  "key5": "45AuQkX8gJfJ96ChF5tiPaP4vabzNR9BeoQraAQw2vqp8LMvHdAKazuBduwczyiyxzzooNmnopZNSk5EP8fateje",
  "key6": "ALzKt16cABnqvkZMmotNbPuV5M9cyst63XkaMnRXVsMkwSH1Qs4hDj75QLeHiXc1iRNZM8mcukGqwS7pqy48SGB",
  "key7": "3iBaEWyLSSLvPHeG68coS5wqiDuR6ra8pwBVgEZokkyiXENEW5jUXpL1uNPEkWAv5DkXTKGUp4sjjnCkGPxdCVdM",
  "key8": "2dEhpTvkdtgPYZ5fDENbNksSMa5Vq1UWBBCGTVEGYEpy4ARCqrrVy7gDa9V4Ub3VTE8bMykDftgNgaM1FT2q4i7o",
  "key9": "221g4ucft31KT5LMm155my3MQFbED33goFDaQG8jWDGiteoSePB18pG9ZkDpMUTxRPb7xheSvPXCdRLDmFbeZ3aQ",
  "key10": "4zrMuCuxLnPcn37sjCETC4VZooc5nhXsPWZGkZ2gu2f3TujV7HwaSyApShX8KHa2BaPeDNgvsWQPgy1NjsfMobSG",
  "key11": "55qEJoHD35Muwi3P8whKhzQ3MVcViQXbQjAJwuKyejpQj45sySEs5kKFRMADXWZGLvPy4epcnNmR4PvVmK64jU53",
  "key12": "fZ6VkkqpsPx75y4cyG2sHbvCrF6H6adjXcWQ9eRtdh8QvBBDnfu4c39h1Rmg9e164RCtSBUMbBwcPqP3sNMCFCU",
  "key13": "5dre3778nokxbBgZ1YpHcS9tcRhWLPR2cCUAG7XQ1DL8TbLJcr4pYE6Ygup5GzXR62Bj1Ad4a47xe9dbjP9QoVhc",
  "key14": "2bt8LdzLaWdAHRdyiaW7ii2Vzn75LpCuSEiXes6tqavToHpfEYpP9ZxA7UEtnH7MrBFR8McKjKzxfYVSgiKMd8P7",
  "key15": "AV3CZYA5eFK6pVxL3ozH82Vg4q6jsRz2jLnP7ttijPfq5RKFcBYrB8uZJQhPAPZrRsBhtNY8NkPnc1MiAxkVzE1",
  "key16": "aync8gn6hKwcgHsa64akXqfBFQYEQqgYPeXdH8EVJnWNC2zbjQvg64LngcXLza8GQaYsX7qvQLUbnEDYR3u75vc",
  "key17": "FmDVoCGuyPLvLgRc6fkaZrNcMtDCDBNEWPnhv5Wbu9swsBqSbuGTQ2QrkBP2BkbjUSgYyRut669agUWV8m2kbS4",
  "key18": "3VpCDf5mPCS1tJmAXKGxgFMRR5ND5kL7UgUQMFo7PiY3CEUKhgiyScateXMZq2o67L4cbQ2LfxkH88V1MpmFNg1H",
  "key19": "58iWZT7Kje9iKUKLYuRvmDyA6twHR5brFG55bZ7UP6saZer9ueE7WrUrE3818ZHhSrqb9gMwWYu9LVhHF4HgTLHV",
  "key20": "4dhdK5wV7b4Vif1AigL1qzCsRjv712imDvQjpera8zsZQ6ZRSjF1Z7iec6C2RbvngFK28L5uKKnq2Uc56EHyE495",
  "key21": "x2AxVa6THm1MmoifDXoZeN7P1mBEunjERYEbUBJ94DXrwx2ZNHtE8qAzq6QEaGuftLVXaF3aFvstQtPuRcSiyRt",
  "key22": "EDZG5N2YkyAQTX6t3r1zsKS5qoUVTbQN7nKxFp5LYYaZoABmxjKmhwzdCmdHcZAxx5cA8UcMyyEnBK6m83puGvZ",
  "key23": "31bEVuEfb4BJxE9pzpFVtLHC5nHVCpcb7rQQvPEYANrSifmefyVx32rzN1aEzUDMcMRj9ECFi4khAZ4f6675Y7z8",
  "key24": "5diVScypnoJHqeksb3dMptvozEAHLLj26mQRB51puieFnghGSBbnF9vHN6JAgygQCNMCXL8peXfzSc6FVbNm5Saj",
  "key25": "3AMMWuZuJw5HMrDJnUX1FxHWBeQAM1LcjcpEM7zWivhhafJx7SkKKkbo7c2pPNNgV58ygXNzAe1BNxRuD3xkdM4T",
  "key26": "3kLUSU3mDXFhx9cqYLmEzZbkRWpmbEy6NcqiEPiVb3X5knpVSem2d4nsv9ckTu4ojFtuNezCRszydZwJcmH8pwba",
  "key27": "wRyugEUsr5gXn4jLQn87uFyH3tw2jguSox8DBywGxwjnqphF7fHhZyfmMqkdCvQHw5nwzGXZFJLABiEnDRUrCrC"
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
