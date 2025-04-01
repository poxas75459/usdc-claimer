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
    "4wbWaY2Nm8qR4ow88V1PC5FW2AiwMBLs4MmE4aC7eVz91j4M68rC1hJfseaBD4VUVRGwShyAXk9ezs6LE7HrgWu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27c6GjFKEknQcF6CFnQHXXoboVoQEUntNWnVsvbY69w1oSNdGpirHKrq5ccuNCwEa4imS88cYW4FD82tomF5hLvB",
  "key1": "46GAVw1Bkj5U6V7DEZ1X1YxGnvCWro78S7WfZ3bLYCKqjb6N65efF8Mdnyg63kCtrHhj4nJtCMh2NMLdwF26yMmA",
  "key2": "2QWD7eGcJYgm5cUB3QjQGzZh9UZ56qRBrBTgno4T1V6s4tEsXfG1BPREw7ZFNTkUF5ocXjSRCiZYPgQbyvpifeWW",
  "key3": "2NhF9SD82nYt14LSZ8LG2dCKywaMyr33fCnvorkAwsEgXUjLg66n14B6S1TbWSfyB3pX1Qxy7VmZWNe6nH18jfQp",
  "key4": "5wJXVL6DH9H1xPmTVanBGgCFN5hoCCv7wjVbZK11CWrkr3WQ7PkMHNLQKYPiaxWQHVCJmYvuikk36b5bTroqeC6T",
  "key5": "4AduZeVGHogoNy3V6JeQLYiGLUcbhTWb7TPMnfzXM7SRpFVZyydNcug9NGQ9WMUC33HJjUJCQm1V2naj1vB7Nh2E",
  "key6": "3pTMB9tBAJmN9gg8SouPvidWm4CtekAXjB25hqNgJAVSaPLCE84epa8oDjgyMGbu3fBoHs7JyDkHYeCNeS7bGD3i",
  "key7": "yZG43hwGjpxDw1kgjoHMra4y2AkaBaBnoRZv6wY1ZARehgKML381AvJuo4pMZ3u9hnXCTLg5qWvdHYEztk5FRpd",
  "key8": "XZX9zAocj7HZtJRMNzHwcBNS5Fa3o7dM8rHrRCx8frVGKmxK2MRKWV4yN9YoSvZkzz17ssYo2gQD2Whb4dSV2Gv",
  "key9": "2u4bbNQv4e2b5RLAEEwYJLA7QQuFPLwpBbp2TQrQBPgWez8JSWsz3nixNgRnKXwr3ELhdcK1AEYv3ELwQ12b5at6",
  "key10": "23S4KLdYMNGCny5rwRQn4GAdFDKU53nLf3ejRQjDyi5fFxuP2JT59W53nJXCwmox9KzVGFaZBRVYaHV4WUNQFbU5",
  "key11": "2hBMUR3BCFa1w57WuDgXUKPY4YbFX4UUYM8CSifnU3ocuPBqij77hMNAEi4fNbikCUzuVbfhe1aVeFnATWHPjZbR",
  "key12": "4YFFcMDfTJ43x2jVu2kVBgJYaNnujUdC3TCQo5FecH94ntrMbQZP2YZMLrBgeVFaCCJZePq8XHNJ8FUX9CNXqdye",
  "key13": "2xDhFFYXkGT4VB51GaX2zBWJnQFgVf5T17vJFvdgAiquvBw4wCqhENmQLpH9JtU3p2gtZsiFdRL3XynheiaATdrr",
  "key14": "2Z74C3bPx3DiTzgfVyHqLAvCAM834QLdizCpKwQtgBpbXNg2QZiG1sP7zGUR1J7n8DwxD5wXbQrT4v1jYP8fB5mj",
  "key15": "jm99qoGUGRMZPmakoyj3vhKJck4wTrMsQ6vPqeA71cSg5DbTWoNZoiGt9wuGLCujfcGaXiVv3mfmNjQ3bN88a7U",
  "key16": "4t1Xw4jjieHhkPjqD9cgE8uDZpcLZyzqnFsqXLvhHf4eJKUw2Qqvbyb8Mvki7u4hidb4wyAkEcwmjKx3ohxj5Trr",
  "key17": "4r49GRgtS4bdotKMd6fN55ym2Qz4dWr13m3s89m8288bhvt7qVqXU95HmbomJiExWBZfEnNj2kMKWpZKynWDbddj",
  "key18": "4eWW3PHKPPUcHhVp7VEaUyr8fVm6HfG2LCw7toBUFjvZfHnpYP8JhjBk9Hzm3NzarenVkqSe3Ehf57r2jTy8ExM3",
  "key19": "4uSEhBdoGqbUCNKP8gEEzK3MAkLcfndhPz5R93Mpe27bvoYnKzwdSMuKgnjyWMCXLCskTg4MMm1f13obMNpNt8Bq",
  "key20": "2wmNBSejVYuUAqmS8wG5qmJa4GA7fyHCaYniqX3ohNMVkmyaCVE9QTJ1cn7CXK8XqVvDnRoQFAcPUqLSqjKYGaUA",
  "key21": "5vxmidBL2tiNQJ3n7FKcQPydo41a21Maa2kQZ7YsEWYJPPrWY78TKj4NuHwZ8UCLjVjUp52zMLK8pQYUgg2w1SeQ",
  "key22": "4zr3K8jvTz3UV3jvWxnfngLFeGW45piBtFrjtazu7VTy9u8Rr7LwtmXMYZ8XLSC5yw8LeNePMPCRpPV4FWFZEwLk",
  "key23": "3LUFKSxV7wehmCJjdZLcZkx1XtfoN2fnnJbJ2u1YEFj9xibbrsYm5h8C2YLKwnoRsyffPUHV2odWugLVeLy5vH3J",
  "key24": "3wCRKfMcNWJHtQCyU9FL8Xw3wKC6tLfoezf19nCKVDiZLo5BskuSWiReYiNkFm77pbbs3i6qxd8XQXZdXGdyRYHv",
  "key25": "5Wbr7EVfg2c5NHZuytteuMrf6nZ1mChrfnQWJrLecYYkaiMakEMPYBFrUjgxeL9BgevS6sJZpw3QvimnBr1GrEqX",
  "key26": "3jhuPVHhyJ7Vawq8g7zt6UeSRL8JpZgUCMv5xu624qCZwcFFykyKnmtJuzFziKRQGgUrN9vAMNPx6uA4ym9jgG92",
  "key27": "4zXU7yu3Lf18MZHygAWt5nVSNz8FjBJRJ5ibjeZyfBTc7Ci9ztUVwra77yR6zDxUWDDr3voW2aDwJitVCrWZiCK",
  "key28": "49onRYL3VcPyBAhPBYMZhoW45GKy2gtUi4MM7mzk49JuDr1bUFd1Tef1HNp7UZitqKgCCJugHztUvZ6PN5hUDhh2",
  "key29": "TxmFVijX7qrQEEV7JtGoQtWkob6avV1jaDKgGgQYU6LxSv8AyBWdQtsRPbuZWGfJNiwd7bJAUPjCQ93QSVyAegX",
  "key30": "5sSd34eTbhVoeq61BWjJGRyWExwdg3uJYJGS2FeSQHE7fub1oBfGfFXaELtbwwshrGTnbfGkw7qpTz919thFx739",
  "key31": "5rhmcEvae5jLYCroSZsnKnRkveCJ7549w1MEczyUf7aG7g98rULhSYeMGQdXgGFR79YTf4ndSf7daCapUrtHuge8",
  "key32": "4P4xTEqPqmGVPjyLeBaecqCEZCe8gyZPBANMvuQeUa9FzeH5frRd3kJZJY7Z9M6zTjeiGwnojF7V2sq5Nsr7ogSq"
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
