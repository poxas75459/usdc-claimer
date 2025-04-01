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
    "5LxmcRu2AEQDHNuSMuNGSv9tMCspT9J11uS3N5LuASmbZDLVsJDw8rEYMRUkmye58gcN7WqXo54rCqVVLt4VM3dH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eozBTdJvuU5qBA1RyiR3dLykyYcd14f7Ay8sqdv5AJZJduEp6rZmyPYzHW4M3zUnNAoPEMzHLeTupCp8wvTwQoU",
  "key1": "2bkX9QXKKadrfTtFHpKnVGsryZWNh7ypnwqh2QYpkeyrweCybZDPtA4vw1zxmTC5eL85vh38pgLHU8CXcLDfXAL",
  "key2": "5u3tvpst4sBPAf5TrcPZPm17D86ERMd2doJiXVBT4TVGbBg5hGybvK6MBH9SVwGuNFfg9F3b4aQAmPDouoBo6Bcw",
  "key3": "9BuzXvH7NT57jBdFc2wKRe11M9RxGT6gyQd3iq5nQ4mR2X2qRDtxYGBTMcBgZm3UvTZ8K9DBFRwkSxxLdXGyWm6",
  "key4": "5qnw5HyWz6Drz4ih4MiKjFaKgpBAFHoGXh14vWUkNLh1y8Khb3AWbZDRKk3d6R2aAEmtbYfY87SAiCZ59E26FT8z",
  "key5": "32WK7RNCos2avFNnfMfgKtRX5SLy72zzNXGewLe1YbBE7RQmm3Y8FdXo7LLopMfMzapVTyfovLu9wAKidBSm5cLL",
  "key6": "Z9nC5LYLrDfgjcNcKKaCDk1eSDkKQBVCGXHSaakqLa1e4aSeghvTNxD6d3m7vWecupGKxwBpG3zBEjUtrhLDfgs",
  "key7": "51si2yH7hQ4CFrEJvfx56pAsSL2ophHGq2GWA2wxZmdaugSgcZdPfCQq7dhZrLCH7uaKQjTXD8Toewe3vHXyHAAF",
  "key8": "5kw3WWjy3XvTTgCzS93tv5qsMpTebpCS8BtRsQzh7QxUvUQ2qGCFq6QCEDGdQrLrXTQkeJDrer5UzExcoUY9TbTq",
  "key9": "2YZZPQ7i5YAvQkD34YjvWu3PeYsQ1MeWownqGWCDc89cqf4rPWSyMTqvdj5HtoPg4Fx8otPGAQodBA9zBgNtXT1z",
  "key10": "5RdwCMqxR672SeRmrxzrGvZDZGFWfn3h3UWSpkfgW69Msrd4KCWSyvAcP9SuZbnRHzRRRgCARP2zvfGjg6TLV7YF",
  "key11": "28WudqWW42cYmCrLoFpvx9p7KMMm3yF817EDg6sFynR3xXsJibDfK6W99wSX6v6Wtqdkm8jankPXz9aY5PFG3vfH",
  "key12": "4urQagQU25ZoXNNxCUXGva3L15atYGGjVoejSHshRr6gtGgy7ogd3x19ZtAq6Vph5UZFzgi6B3PEemYqL6ygNMBJ",
  "key13": "2vRK35LJ57KW7NqxXFLUrM7PmhBsp1ewgcNhWEuhayQV4L44s2D9CgadaXxTTYV4VZSue3qSZWTRfR5w3H9yhcYu",
  "key14": "4WKnDAq5gq2XemhSqB8nH2gwS96vTLxCLQfo9bQhUBeifUXbwWcnetXtiribor19vb48HckWYa3yERRBUBotv6Q2",
  "key15": "35cZSH91ooqCqG8ryKUx9mRS2dcri9GW86eGKN5F12mS7bF7tkH5hwGxYd42hLMZXpk2na7i1ap5ki5iwnJNm2Df",
  "key16": "4XazNrxL3HE2samB8Aw3sY2U1qTtFCwNKJh5Nix7m4Prqh8LqEDjKe4WEBWeCDvzfJydwUXjbRjUapAzkfMUJuKd",
  "key17": "3EceN28eGN3ut9wcvaAVXnZQwFzFUHPf28zJAV32gGMi4TxasxLE98PnajPBB1xSJnJFRRYHEvwiD9ACLxcBDSWz",
  "key18": "HpjVDPBsTP2CZB3qpQ9RPffAZ2qRUBUz5PU2JdCBgNHequMvLWkSNX1ZFQcviD5PbTTUR64aqkhiDZuZs9e8SDD",
  "key19": "3KH943usipL6nU8gdbQxNPfGQbYsYY3UrcubPCRBj6U4kuyViDUjz77VA7RgEKUnDAmDgNAW87Tix8YLnzxiVXA3",
  "key20": "rsDWMAUBifQxG94D2pf2QaDppYsKw5R4s1m5d4M12Z9zATBJULtne9mWxbhfdN6MzfvBL3TQnfMZxYheXk6JZ2i",
  "key21": "52i4G3tLtGRUR3CmCX8guHwY5CndHoPj9B4vcgeB99vFNLtp64Zofp3ficWucYGHta6T3rg16ymZiKtcW8eXT8jG",
  "key22": "2oTbKREnJ6Nehg7qtNqSmxVye2bzc2gie6zsMnx944ABLcyRakQS55n8yFK4beaimF5bUKFNZRo1wF5dnJs2vinG",
  "key23": "4joErYtXesZYw3GSsHaScEASAvSAPynB8ZEKPYSLHywa9j1ZAriYNkFAnAw3C4KELNhRQemPLNLEvWKY8P65mU5p",
  "key24": "5gaFjufYQzgd4qPKEqobyAXcMERvjrpL67eZuzCVEfQz4ad4nZQP5uEwLPSJ5ufmzoREHSQCqnF2Pox1EhnYRkpJ",
  "key25": "3Df9q1dkKxYQzCaFQv1RwBL1yStYFtVF7t54PFuwKPoyWC2cvUnC2hdRmRALzNCbLUCsd73zYaTTdUL4ixddDh4c",
  "key26": "4CM2SaWegYGg95wsLbLaY8xrC6CbG6B9vfkjMSYJKAL3NR4hHkYy34XLeEM8sU7mvY43DiPE7tHyGJaUrQ3rjiUm",
  "key27": "2koVbhhdJpL3GzMGs2inmiLjrF4s9Kebt6A5hNEZ672hTmEF8Crxfj5ysi7XYAV9HwTucvR6RhQAgW7RxvvwNcif",
  "key28": "LnP2LLAdRjWcgEmPYMyt6gqeqg5zRzDXYFBm9bWNuzVwLtEbfF3JU97tcEEUr8bZkJjhA3yWumXbbiWMtBBsvzH",
  "key29": "Yyy3EGKvSYa99wdrma1miQomQesfqZqDLj7C4hdgpQCgcZqM9gWXuoFb8Wroyuqn25S1ysFCB11wynSpnZUAD4B",
  "key30": "2ZBWWVzAVDBjB2TKdmH3tfM8MWaavehaJ3YfAUMWQJCtkCW8bNtKC4tkZxDFYNfCb8uKvK1pAHeEZ3yBqhymuG3Q",
  "key31": "2dXFiJDyWqLLzi21V8RhvfYhvKQRVLNN9AMDKTWBNs9oCwMCAGhAoU4vw1jkwCoTh2qzbitAGQ9AFhY3gbXLk1hb",
  "key32": "5LYHRmA6y1Dpv8hPEpMoU7GLVfKE3xtvLGbWm35z161R3wdNyhhRjSwaVsNGZ2c5rXd6Jm4VcrmWTXcvCApVeGnA",
  "key33": "FQTWV24P6pNAgUy3mdmwTQkjGMn7sSv7zgWJgsHiaZhmtcJMrZH323xCQQJwdhnceECzpqTtohR3owoMzGt9LV1",
  "key34": "3TgvtiHjRuTHkjNLzEBo6ooXZy3fAGkmLb9nGWR77tM4uGGbD1XftMfXvvZMtLqCN5zBeL6btJQFXGzaDzjmfDqz",
  "key35": "36DmknTcsNE4iBdkWmPmqfpeL4v2r4Bz2npjmyRJy31nmn2ZcBDqqR4XPrCkUPbxTjJi9YkHMf91cdd5gsAXd96X",
  "key36": "2v6EPamuuk9A8xauD9rgst8gvXmcP588CZKT7Lp5EeoP2c2hR9aTuqkURqBRAMUiiuQhGuMWPuiZ4XduSsjNWXqr",
  "key37": "4rucngnYWaXUW1cE2nmW3JuHyUCyCcxGMDb3n1M5K2KmswH7EWdpbgtio2R5cdRe1VxuFar7xseCfKYycihEsfdk",
  "key38": "t8KJCzNduj1cA3DTa42HFzoUQJonS2n9nkZp6Y22cLcRPLRSzbXiDguLE5t4AX6VB43DLFmLsXQtCH54YLrNQGB",
  "key39": "3czodKqMkTu2CTCgjQLSxAmFQyT1HPVMhbmJ7wA9bRQcViH11ft7hrsC3oJ2JFJN9ebxQg4ApXFTJVzNevP2kCAv",
  "key40": "2xardoeSNfqtnR6ePCyRf76UWPez9GHVYzujF9q5N6yb3KJBfCqVoJpDtH13Cy62xCizAHbpDpbseMJ4ZrDXLiBV",
  "key41": "PT3hDahsB1EFzhg7jzFyGaMnK3H6pKBJ8NqcVfc1itLVdW7q2Hz35VhhiUsnPk1oPfzJFGSvAgbscWqg6mdfZP5",
  "key42": "ZaUSuDasvcRos6FiWe3iVraTxn2TiyuSXwJ8AawAFaYgcGqFgbUqvSVNFk2HpPsh9FpnLh9A5B344h1rxUxZNGQ",
  "key43": "3Ev6mjY3QHB8NSMtvYKbubihKXthUx3mjuTGTuqKtkAUqWRJ9kkgwEgq5XG3E1Bc1eCbTGBW7LWj5k1rAf4qg4Gp",
  "key44": "5A4gmyxXRBvsE6heqyKWVZ1GkzCwyLeaMsrA3oPfN1Gi8tewCF6Z4uuki7hNcWdAeD33hTLwAJSsV2CTq9RrrLCG"
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
