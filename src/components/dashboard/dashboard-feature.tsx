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
    "5zW4chvqcBubakHJakH26Y1iJEq66FwixsxyqNmTqWC9qNzZCMmKaw8itAZpWQzqb7ozErrcNMmm1sgLPE12jbLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBobC34gL1td3e93UmKu9RX4w81rVdPTLWABJnqSwUV8VarTwgfLddGe7PeTAGU4qGaME7zCPnMKnUTTNSoVRih",
  "key1": "Hj5uPkB6rvbY9MTbg2T5qPTjt5QDHYASwDDo2PBY13TEz5FhKqvgxQKnJXadFeaqenkXHiTUAXXk3ZbJZyJYD9n",
  "key2": "25segehefx1zCCpAUMBfSFiBxYvknJTBrHHfQccfCCJsv5rN5hUSbvKvum1FL5bzx1zLT1G8LxCCNZYEKfbQoAZq",
  "key3": "2zMLLLuYeQAEjZ9JJ34pF6Y25e8e7eYa5RLADvCCkZZArgAWzgQ6TYHWu6vU633HhRsBxAYBpVCaZne2cFioCwpf",
  "key4": "4KxbdoepBpXMe3eL76HU5BrVrftDfsZ21AGc2MkhEbceW7AJTVMzt5xe9H4UAbDU3iYX5qbPyxdKExtGqb7d4nh4",
  "key5": "mVVLYWnQZAHbNWkZMzK3dmWqWBP4KW1xQiBkTHATxhfYahzX1DuXnJkUxP5gHYCRur5FsFD7ZgvwNu1DyC8Vi4d",
  "key6": "2uDLKCi6DGzEeFFYdWpD3TL2r92QF657o2jNw1ApwLNAySno9hDgkg4SRKAmqEwBjmkrA1vLA1kEjaZ16ShWjrrg",
  "key7": "7nDSuBMtgWpgmZu2UtVp93Q1yUXNP4Zs1zSyjqbvRE1b3WuLvHzypSkhG3knwVsXNPzxnFZAeqxtp4YoyEzbeuX",
  "key8": "3e38bmMD8iFiziA1i1Rq16gSCVAUyhk7hddrN3EoG2XSqpE1KxVR9b1awRvUozDosy3jKXMcDBAwSWFLkkB5wxaB",
  "key9": "56djGfTWmjKTYsmqqX42BYXuXEK9hgsmK47q4g4PPDYKBgGaHkK6EVg8v1xQJswLzawfTQbSzDDVx9EpjQThRctV",
  "key10": "Hki1kB4eTvTCb6LqfwjkJaGTLGupeqt69tUrWkkZZjf5JzEyQ5ZqNXjLeYaxPTwctrd2odtmAUVM6aqvp6LYxKF",
  "key11": "2cvMf8xruU4VDTYQPAcpQrzCYkCcMPQPQmstDEzaPuEjjJ8vKhfCTiN5mMc56citd6GiXZH1KLESWrqa2mEEFdsa",
  "key12": "3WzRWqTz5E9naZWaL235zUT4LPKkLyq1keKX5X3c2MBhp4rEtk5sTspW5bqq5jbr5xMEAkkoEU7btdPPHgDLgEE9",
  "key13": "5JKbWGNvYPzYwuYwQZ7A6K2pWA1zas8HTqsqoRe2m9rxiort3goeZ953MxgZT7Gi1QyotMn9sZPMusXF2QhCoD8G",
  "key14": "4SMwU9W2wwDQaXioMRVdjowfo52F75RxZ7arFxcmjkCKKTirHzwJE6fDAxvAoofmxFTWQ8QUdTaFaUt3AQTbwFwk",
  "key15": "3fdFJV4g2wfQ8H8mV9GW2QXEB5AHDShyGrVu5345Xz6UPCMvT9waMRvJAXQhUhmGD5Vo1DUPsJYKM3N3NvuDLY6W",
  "key16": "4mbM4y8vQMgwY3ZF8f5Pa4pHsm9mWkFL79HsHCc1mrUEJ5ZPSa1bNE69mqZMCctrbSPoRg85M9cp9E3Y9UoDyem5",
  "key17": "2hdLY7S5Rr6dvpkFzSBzYSUrznjS8gfiArSMdhsxKAMb3hbTSgv8uJgjBdHvMcja682zDiTqbuWVo7iPLY1iLjGc",
  "key18": "dv4H47dT3VMHK5V986ayukF4bMPJCcRZCKJ3MYoDMswgLpQMtoogydpvj2LBmZPnef79gxKMoKMubw3Sf4zMXpj",
  "key19": "5Dtnaaad59KP44ERTrweB1mVVBpKa7i265A5x7tytuSqTsn9wTBU8NWzPnHNffhDYNin5ME8sNq4ZFmD6NZuoMoa",
  "key20": "4RtaskWYyfXEVgyGnV8ydwScnYDHhTFUB8RWSx5KpaW7CxvqBWdrUinqLx5WzQXEkvvG3QraAZFzaDzhi7E3XZW6",
  "key21": "2pTduAiQ75n4SULwcqB9htH1GDhY6VdYtdvoH6kCaC4F1QqxNDqfS8bx6EML5hWKKiWBDWkLS96AoNbVBXppLu2D",
  "key22": "532AZTdpqVe71nevC4aKcwY6y5r2QxRq15F7bRCjtYZhDg83zv3Lvq3arL6CTwShXp8FxW8JfmtUZd1dNucDHano",
  "key23": "2CN6PniA2Y1iBH6VUwT4dGkSSuEzx2F59CNMJcxiV71uY6i1rgtf8g3c8f3UoazFtwN6dVVfDoNNe5Lr7bconzwP",
  "key24": "4GxxwXwSc36KQeFkp4npftiSuHRHKWkb7ZxEdF4Qat6jVrLTqMZBetDz3oWvWudH5siKxj1Lg7Dgn2zXat32W2xY",
  "key25": "5noZbHUQgYSu1tinLhnrQsWpk5XQAEFLNroBQyP8xJ7DPPRU9shuFVYHUyGWyv8nXWmVqniutvZpcMsoqDEwyV1J",
  "key26": "2xdHcube2PS8hm1JQ95TQetPr67moxsoMcgX7YGw4veD4QYvga3gVYNCZ6zYguJLyQz2TKv5ut8ViQ1n4BfZgUxJ",
  "key27": "2VdtYNivYEyip9wsMTLicbqNnHFCjWgUrJpYuEPBFQVy7eZfPUgwxdiRTQh6zrQGppu8wcKqZonNZ8L36aBo3jZ2",
  "key28": "56MYX1Vf6BaPZ6QKj6ZBJws7b7aiBLAqaPZzHTKxKMUq1Nxq5rDcXymk7PMRaAsDjd2XdJ4DggdYFZcAZMLdkBoy",
  "key29": "3irni8W1w3eu9LtsnCiR1ERAZM3GaWPzD6yE57o4FUe83UVZx85Rzp1ov5Gex24uT2jdGv3CXGchUDcXvvtYedEU",
  "key30": "FnHeTsEpWLptxLSF3c8gm9RrhDG1zxq6vUPtkC9qo8N9Go48NyLkEkDoHRRhRm5aFQRQzcrCu2mw4H33ryXbM1W"
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
