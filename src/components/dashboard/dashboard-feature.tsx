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
    "29kWuQoUroajUW22zUqxQQ992jcJKh4iSFFY5ft4J4o8moNUVEpVhYefc7xQiEEZ2gw8SHdsZEMBe3C4uC7PHc4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wx6nbP5X6xew7qt4M1vyb8dgtFp76ZCDJvCHxU6of4QYJ85nB6aYx6HffLg3nvK2xjTG5WuouTSJrXX5KMsuWsP",
  "key1": "4wJuKC9y3Fgm9jmRijnJkfEia7UaQtNyQG5jashuhzCxMd259Ew2Wh6BWGVYA1fDopQE7yPXvXdqhAzudS97gCym",
  "key2": "P7ir415xNGfryqXjUXeF2U9dViotdrpuuMRinh1ZGsqAUz1Lmm8J1SPE6uZYsyu1ztsY7wBNCtQMDBM1W5ntHV5",
  "key3": "5iHiWfQCAr1DsWkKt9Sbd5DvDYbzfgToBaLpiHfJL765ffFpheYxQdeuAFkkEWunaoppuT7tfgCTmfpoPLvS6jbP",
  "key4": "3gDdANY8bEVeV7NdZFbP2QexxM9JN9Cp2Mj6QNp2mZ9Ha1ZYzeDusYV3QCTDWoT8y5vkKPgWgroPZxeY4hpj6Yz3",
  "key5": "4aB1Y9qcKXL463DsUZnAvxH135t4B6rhHDvM3R5i79z6obL5192NCYGhsvFvPsQFCKYqJ6rP3DTQrGyZMiHUfWfY",
  "key6": "55UanCxgkajW8zST2QC2oJRHEUvpUSUqg3iSG5vRaWdG6JLsGM7xAWi2bsHexxDpnJBohzZtgKfi9dTE6KDmUpjb",
  "key7": "5mdJFVSnmsVT6syeJpSAPcwpayRRuB8ftugyZjXJunvSqnvLLUMfd569q8qpeHLyJFYegszELiFdYFaV8uFd9ikc",
  "key8": "2v55qyBkBivKjaQvTaSQr3yh9Se49fpNyn7ryuQdTG6dcQhLRy1RZY9Hac9vSCj9KjWoK4WGCfUoWiKj6Ap5TerK",
  "key9": "2BGPh3GX2yP7e8Ph7vEkkuFxZ6jWeeZM7F2uo4dUVF3nLzs9QCjCB3eNvfhocn7h6okrFmg35zdcGC4J3QEhNXwj",
  "key10": "LYKwbHnMTqKU9ZiuFierniGGv22Muuss8MyvQvQT8UXPZXE4v5GjEhMxfKRCPVpiAfNPSuf9QNPoJA4CVSC9Nf5",
  "key11": "24G4qaGXpcZoQsXWTMscYwmmyofRnJY8J3Fj5zxowZXQ1raky3XSUjgxR87ASmhar4YQ9gCX9iKZcuoQkkoggGAd",
  "key12": "3SrQq5y82jdwntiBQA4E5NKqfh86pMLz5pVFT8Kc6kbzFugxi4BBMrwZ1fKG6uAvNpNpFEiwDtjaV2rHucdDFEMB",
  "key13": "2cAhJsDWvZXjQQJLXAvMNi1Gdi1YGdG9SRGkLA2oBrxdSgKP5h5ZGjwdUTNRkGFgVctjdRgajueTjoz6fnUFerf2",
  "key14": "5D4MvvLg3oysevqLQamtPPc35ENSxwEHjZSQeTxLraH1sgq5Ev6ijzPTvHShkFB4pERwK3htKcrK6a9m49ajgC2N",
  "key15": "4D5b89Jjnxnr7HYzMvmR1tV3TPBk9Rir2h3B2wzcAqifPTrWFvdz1ubHTfQ8odEpPqnmCR7xmmnpA4nP4sFfPwuj",
  "key16": "2LUxc2EsoEcWo15aDqKiQnt6NaKuT5SHsYXUvKASWgGiVouXGvpzP4KQGCWneixAYhbk7f1a5eomdCmZj8oPKcjZ",
  "key17": "3fbLgfnXsZFknRnkeQDKHmGLAtTVnBQE1XUnm6Ri9KgKwgdVM6BtwDxcBZAvo56R6KZd8JECF8Afu62c71m3V1Zn",
  "key18": "5Q9f4bZQfochNqTm1sDDwN9ttDRBNGJJGgvKnYnRtoUKgsfaVPBTyWRVnxayYMjLC5Ro2pUfKU9ormBM1r4kV6rB",
  "key19": "3xMmmSH5ACg5P4VmC1mpR3YiX3zBvuiv1kjrpHpHS1MsWsQCg2UELqAAJjL7Ra9JbSreFfdBDCMRL2JxdoqfQi8c",
  "key20": "4yaikxL57WCjnBa8gFdBprHmAxMhn4kysH4MJ63L68EbViUPEzPKBH5PFqJsc7N9imAaQSkewMLo8LSGiSF4GZEE",
  "key21": "mwTHT2EA5XLU9DEqrSD2oKKhGYkXHaQ8ucbQEYYU21QDpkywLXoaAVVBf5CCyTUYNjaRwLPRdL7ycQTphFMWahi",
  "key22": "3MFZrgc3GyroXNmx3xzutSxSC5AA71YbHzn77biVB48ydgG47yk6yrFCzGRdyXa5koS9bLyooYzjkuL72ipb4Lp6",
  "key23": "5YRxRmRfZWpW9AapbZFoKH3oMKZMBKndurDMcvvvifUc489qthfnQfeZiwh2ZRiWsZT3CCSzGZiAD4D3Y1nADEDF",
  "key24": "53cF2aJ55g4VHqNesV11JjNSxJGBwezyk7FYukJFpNPhGTeF2rzRQGPu2ovv9GjkyVEcoqUi7thhKxRyNMtQG8Qm",
  "key25": "5pPMMezGHgAfaBqLsmebSk1cKHtaZ11KrLnhTZxxpkWCTj43wssUxJBro3hUr25SLmtXdDwuvp8t7crZJoNUJNPh",
  "key26": "5SfWhtCcSB56hAih4X2f2i898TsjRRJVhf1k59Z6FrmqVMNoybcmCo6WMZmkxng39bC9BpQWBKfcg4SoC2Ew7zbE",
  "key27": "2XfCytkjPb7R6eXxThgCNsTY2RMfT6M8J2bsrQDj6pwwk2ZzyTHnyXMaZFcqKRKbhYdMR7qdSqFHTfTcDCq7F839",
  "key28": "3ofkfzWqcL31UwwvcPVJtBqpeZvUzMaXiMs3escTyv4khDW4ApAq6VzPxyuRYhB4srfJMeEffKgpUsZDXjB35EWZ",
  "key29": "5adt7kEncQEamuhifocAHApUHZiRZGDwsqgM4zsv9qdcKULPaFvUYEsAsMuZx9S2LcV7CkRHhinaEXitjmqAuis6",
  "key30": "4kYfLXXtW3wvzR2FKnv3h72Zkp1eh4Hj8KjMXgx852StN9qFRWRdVagSSp3XHFM3AAGw1CJViH13qbU762hcsqiN",
  "key31": "4p9Y3gbXC9ScXnBMsfoPS9GHZCu4MRJwMfNHL4vHgisXoFLbbE5Wa8Zq5CugdbiGab7oMvrmmmasUsvXFk7zoMgS",
  "key32": "nWUDwS4UcCGgA81bCpZBUVe569LoZzpNCiudVgNAmCe5SeXzKNMTSFfoHTSp7An8vdEZtuk7i6YCu2aPuwRfVgu",
  "key33": "uBHeZuiXqfcXBrYtUKaCm9GhCctJYvTS8oH6dYuJEeoomKk6b4KJ1kzCvSF5AMBUhdL64HXbdP6WdAH7NZWhQFq",
  "key34": "aer7iTtTPKn6KDZAWq9fVoPiD7RCUzufsVAUUDw29NhE1Wc3VUasgPyJ47fq2dj1FvJst1A2sLAtYfWWsQoruHM",
  "key35": "29Ho9R8ju9SgHL4WZ7NN6Vre5vZTSVhfi3U16143uGiG9cakC7hfBi8eFEtD2Zu1NuaTMscytYbtnsivs9G4ZyHE",
  "key36": "yh8u4iYYeJNCM8Kd6AfjfEjY7PJPVuNLwfS4eDpbNPYieFbwo7uTWVzsDiYcPFsbdnDR3JGaBegzc8p51akc7yj",
  "key37": "4AiMqBLvoqLmi6uHp77V9bAHt9aEuXNHjTRa2XHRDYNmUazVr9KFGkgZ7Bfsjs7qLKPpoQq6xrMah3XBKQDEm1bg",
  "key38": "2CawFUmzbA9adTiZugtwq1gMK5GJX2kf8yZAC3tVDFCo8sSFHkgCPuB2ahVWRSU6Fqqd48wABpz7R1s2Xkg79dyL",
  "key39": "AMpv3iXekUB1QYVu58ZCT4P7q7wLKszoyU3YmgMjFPX18LB6ZtZ3ScQ8e1rzPR5W7WR7k8HXC8M6fT6vY8d5ZXD"
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
