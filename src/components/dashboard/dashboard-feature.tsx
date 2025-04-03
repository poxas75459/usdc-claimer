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
    "5iajrfo4prX4f2EKkRM5zVHs4yMjSJiq5UGn8amHsYFTi9UvXHp5djrFqS25QyGRZrBNSsMWDAXpVY61TguftJVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1mTZeJKQFR9TscXkbQBWFHTCgdyyz2rT3bZzZHffZs9y9csu5i6EEB3B4YB11o3pNzL46C4RxEsJ3ytoKmcJbX",
  "key1": "2apvNmxVaZCubeX6MGB3SE2xopf5NcQN44UJuxiPWn7ULa4Mby2gh6YBF5FRGaQqQnyY2pqwYwEGiwLr1rZX4PAd",
  "key2": "3Met93xrgsEKZYhBV3GkZQSJAC9JbCr3oQpcKzDRLGPuFVDngBk2irtSXCktYqK3AdDuoWPDamyF7cApzUabsicW",
  "key3": "2JaGMnfSua2C3NqguQ4sg5tg9z6xXmYjLWwzZJc3JHtjJb2pgnM5C5gFHMCLDc6MpGEZhR2Hs5nrF3MaztgXKKy",
  "key4": "3bAi26yBhfvjJcVWYNVzV7k6vD2YbZoZEfTijQgYcZqgkcoHp6HKFXXMLjjHToo4ZWUp3DyZnLRUggMNGbxkAFyc",
  "key5": "3BU1dDi292Arfp6Euj86kej995qFRYkBKoW1WZEM9KMquUsNPNX7iTWfzAkenDrfXn821W48nF27Tr1Nqx8hwAR1",
  "key6": "4UuK1ZEGjq54p17L3xTfU2fWrigdMQXiQgzrJ9NKvXyHvcco3tXyAxKeZkRRaNB1dCTwzZwA9Qm14v2dWGbka6tV",
  "key7": "4ogwoRJ7h5BsSsZGWHY317R2xhZW7ZZCF93o8mVXGPtBMvDBY9Y2q7EJM2wwooraSV4d1UpftXdkCdxbWNdAmfuS",
  "key8": "5XFCmYoNP4Fza2ZWFjqrqMCJmgUP9iY22eU7vGDFSQes5nJz71P7gQXgWveCG4JEC2u5Udzk3mLZwaRbp7PFvm7v",
  "key9": "4CVXe7V6ixrXk6zKidrcN9LrWwXiRikzbXf2SCVaicz3thuA7qLb6JsYgFVFWsVqGdpjTiQR64X6J3gveXSZo2ui",
  "key10": "3iebz8i9uxEttaNeo7SxnDzfrotyF2vCTt8m8MqAL1Tm5J93N117Kbabxiw6mSf4W5oKHDSydpKZwpbY7MTfhpBE",
  "key11": "4ptPkNuGMtG3eYKudnvffTSiJpzFAupVtxNGJq6gdooQzGAXj9J8sDgAkbC5416Wvwa6AiC1Tdieu5SN7n2KbAf3",
  "key12": "ryT4yC9iayDtuCKLZ4mwoNkoZQeodsdGyGfaLoddW2h88AsCvaJoBmFRcFzEpjDrZcce7WopYB75kEw2MTpTqkq",
  "key13": "4qvv7pEXSB1Ut11TXY9Mh4TNZnn7uaJ7KbMB1DLbTez1Rq6m4rdjBekU92yHRRYUAzAie5qnK6Abr7tMVJB1Qpwf",
  "key14": "sBahhA895C67P4aESP2AAVRf5SHMMvuPYWy6iVAY6e7BfiF4p79Ru6mh48XEsmd5Kr4hu2cyFKLMyqbsYVkQ4Jx",
  "key15": "3L3U6bNg3N1gSFoCpssoEMtpi6QnnQncvoxMZnrJC5XUFmkCKoEcxHoHY5EY7BLhJqThDT54v6Pc4a6WHec5vcZN",
  "key16": "2nVBSqSQsd51xYro8pcQX7KgfVbnwbv3T3349hyDKhFDw434eYUk6yqKzD3BWAhtUAh88F445YnGBLvjjoUUR86c",
  "key17": "3rjN7V3DQwDn12SwsYmt3yYA4QezJj47VvrYGgEe2A1PSMfdrTxYS9SzuaQGVbjLfeCQZYvU5rardUsvFt2TnGDa",
  "key18": "4nCLDRX6NoSXEinYVrZtdMJtCMu3WcZKjP8AttsXk5dQy1UxRrZZreZ8nXUWRVLrRbjjTU9znSLdqiZyoPdUgrs5",
  "key19": "3zo48cMDsMzRACtyNSPaidgipm8Dy7s4NHoffBthrihRPmySQT7sASdMSsogJvUZoT8Y47gkA1JHEpEm8WWZgy1h",
  "key20": "61UQqm9G9cM2rxBeCGbZePZiZiQyzg8LkrRuYr5ETnLAh5DabNKyBpCe4qWLfwMjZWXrNYe1qRNXqj9JFPAxPT5w",
  "key21": "2mLUDwKv5rt89RwKpX5r3K8LVHjtspKhV2VKU8Awdb3BCwEVH8j6Znkm1CKT5T5NJY9WsAHiUksnJTHXtbVoZc7a",
  "key22": "3vHVacyx22MX6hH1JwrZYYzhGR4fvwL1ViWAPmDgpKL3wAgSn17bzCtwekTRTrYv9ThTapxQ2TCXeVdM1GWrcLP8",
  "key23": "5oiWU3d1uG4YgSCHsx8S63B9a2zr8D98nKBzjfHR3f8Lu5SKNL5rMyZDUFPdox9sispu68qKguqJ6FwPMFDRXkd2",
  "key24": "2zccMXyrC71JwMwceP9ZavfEpyeJbACqrbhzmdpa5q9ikuZq2rJow7SDLt8gjVj2BXaYCuMhsLtTitvyGi4ivNZG",
  "key25": "21MfjRjafEoe3UsCWCRsfsA8gQFpsme5DQ9qtaFKGZdNPFT4Ajxwd2CjfeUp61ezHKK6gorUnxPoE6xz2fpZcFEn",
  "key26": "suJ7AQEnMsXCUoaT5Py31VbKY5qNqBtKX1F4ec6zKGUCCPd7VzGd91gh5bzRCcSaiA6J3jejYFiPfLFMLDsF1BL",
  "key27": "TEXpHsXPziQnGHRFahpvAjEtsSU62SHicPq1DJJXCmdVef8KUcSS6LVfHrgHDMKCvhFBHH6ScN3jRa5JihJHd1Y",
  "key28": "3uTCq8z1Ch8kyGbtQb7yimervdwFwc85XvTMyX1p3Xj4U7bLbFq3Zvw2Hoe9Kox3MVNAWAVeWkPLYYX9WVXwHaqe",
  "key29": "4JpGp9SeZAuF1C8sVLN3EZX4v4Wuyb4bz9bYKoZLTDm2cQovTRqoZu5rc3FWRHxsQL2Y7tNsdB2uP83bWQDv3z5Z",
  "key30": "HU44nrrRtRdg29KdzYfgtapZKkh7iwpuPiADK4hgYv7fQp8YZf34wxve1kbTyTzmXhfQvcMToTtTPCgaDyCdKRF",
  "key31": "5k4sL9vi71FwoY8uwE4fnHWPPy3VkybcfEzfvN92UvhSWzga9sDxwbxZeqMjJBt9TcEU9TJZFfJXHe6rTRMamXEr",
  "key32": "2yo3pytW46uu6one2KmbKAdR8PDK7z47pyUEuNGtAZrUrD9Eany3b7RouJtFibuELHWB4V9wK2nfBkceGkJRUJZQ",
  "key33": "2Hti5PPbuicKfDrPpkikLCk7w3p5ARi8sc2bULkxRWHzabvQYAGH3JpfdM874LQBgbNNoULAdYpJDbqydMr877VF",
  "key34": "41rQVzy9H6yFdxb7LQPKWuw8QJxFZF5iJiV7zVsJy8ugwbWybFiW62BjpmimCDcM4ZTy3jwVqJKod3BYY1MCUaUt",
  "key35": "2pHoPES6FH9QnfnudPTSTThPn5czNaDMQ3KFE5eXp3CUV68yff9VV5xDMyWMdBvG9BBfvQYKFGNq1tfNxbik4Wyd",
  "key36": "4FGcrjqDj21nPiPDPmPwfdv5afnV6zKX3e6tbTHJ7f6A5s22iYvpfzPBY3dgPMtU66ZbwzkTitMA6epDZfoeRJRC"
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
