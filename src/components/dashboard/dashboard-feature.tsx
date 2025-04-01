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
    "3MZXvD3DdZjv5Auuw1ZLCJAib9FU5p4q2tiS9qgn9XPSQ6HLCUiTNsEVfhFuxPEpE8KkT68kcDJJBnxpHKsrNyq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efyk77eFtZQY7Eg3EBVeZQdARVzVrvUhwzq2DBe5V9TVKT8KzCEY5AwGRHfb1skDsRDM3pTYXqXuqjdRH7MwaHw",
  "key1": "ZoNkY9stHZN6ncgDwdC6okuHhkoL1tcmR8XsRaxsMYjnmWWngyTcHbRSzmh9k3XW1CY5uCXYwPrkgqMNEMurs55",
  "key2": "3frhxYqNbxf14MHXx59PR4E7a9xvNaDfjRYzVpcqWAQhjMUKeiFTyNvEwqVjPNV6wMnht43xNqdj6dzQjSVMAszu",
  "key3": "3bYXHM4vuZksmbdYqfb59rwrhGeyq6AxqGNTVAzwwNKET2Pc4A2ugsB78baEgu4FtjhyfK5G8ZVK7HBgVRcCGQCM",
  "key4": "2aeXEm2BQwKjqhNUDhvCJj23tb9AunVTdVcb28hZt8yqLqras18VUH83eQ1oVUAu15FtzU6e1oHiVwdTtvRJtCph",
  "key5": "3QeyrXTzndmCgmf3zq4ocgiWgLnXF39QMmymtGWJBNEshJMv1ff7HwN19Nq27vW4M7GqLf45EvJtVy13sbKjWeTC",
  "key6": "2ToXnBdZ2nU1iBUhuLKNNSwQ64e6YYZgD78F3SWxGq9Gn76T1F36fTM5SscQodPA5yts4zgsfjPJYE5bhDqW4zWg",
  "key7": "3Y39AHd2W8E8UpXSyYrtx8e7LkpTTpeMZizRYvkvsnFYmkTa11zGyAN3raoiX5SYxtCHPshEsMmrJRZbbHbSga1x",
  "key8": "2VT4cVsZqDjXuaRUcUkmfDKweE5cq1o5MikNFQPn1roYMk4rCVxyXsmJxeEGAgEo5QDVuhLZzbRA1yjK5M741ag6",
  "key9": "941MH5d51V37jWw1Qsq5w1iEqxeQkNC3ag3frFQ2PRSeSGokjVjBAq6vbvsxj6ohdsom6MgLZpPcQSRTYQMgzZN",
  "key10": "3KyDXtrdErxLHmQAEjAXcUkpVeaCcNmDFssJDPYzi1xS3W6YzXcD9gXqSpRNJ7cE75bDSUxYyeSSRP4g2ZxhMiaT",
  "key11": "54oAxAAjW9CTtiUT6wJWJeakAWfsvy8BcujH13Gda42rSNKEKLug6Tq4U23cxyLHRM9m8kzv1YF7gokgF2C3VHLo",
  "key12": "3o1nyEcvFKycSL5kx4Wbz8Hp3wYreQuikNCCXEsfypBvaCYttR5YVW875L2F4LGmSwXvv2qFd6Lz6CheZjRA1EBT",
  "key13": "2AJqmLu5N8KHoEEdtxTm3t1hzm5uBMa7U2uAFoGDyxwn91T4zsmMTecYQFAtp2FqmY1KdXrvf4UAQnmY43sUxsUd",
  "key14": "4eKKFnjozJpvAMACoodVxFcUJwnSGpnfCgDQjcMKAEH8LospzQYzaVUsSLPbqp3DUqoit9sAFY3zqR7t546yzpo7",
  "key15": "4APtZnNDfS7QEMFUJLgGVyM3FuPewmVyPpbv2CQyHbQnZxqW3oShdRLcXHvvn8soN34F8GLUvdS57patKFEiWqGK",
  "key16": "5RSR8BWsTdbouAPNbciPjEMPhGtUbn4sSLiSdd2eAA8SvSRBwqS39SHEHfNGfLPT8eFZtLDPC1P5nuQxKVF6Leqb",
  "key17": "44sPgXEdtgMygNp7YCyWgqd6Wd8wiizLvVGbx1uTrXfwvt1393iwj4QmNyznX9sFGZKvbtZ8kyoQDY6EpBQWySJc",
  "key18": "33ti3dFcyQ8MFR4AGmz64h35yuPFJS29rufGQHpJJi9pdrVuaS967YxCcJc6yKHQX3pWaM7QZtnFMbcvJcBV94sx",
  "key19": "5bAMuGc1gJRkDZDAT5HnTTjyqv9CDmQBwN1ccFppKAcYPGak5zEYHsAcLC4i7qefBCcutL4cagNiGNWxUdZBp7Lt",
  "key20": "4ty3p6GTuDbbG3ZMMfMyukyC2LWpFW3hrWbQ1RYNqtEeQpyXyQojGFEquQHpPHhWi4xZBCipQCBHpiUQCFQSaLU7",
  "key21": "2L6CKCYgwzsMmpiyPZBBasx4YyBeNiQi9sW4nvjqf82hL2D8fsGuCCBbfnbzRnL339hj4SfnF4WUaxE1NoazyBxk",
  "key22": "27BNQJirNnDvmTAbNa4jpuuTA5mfw2BheK66PLksdkFximMcFaRy2C3HDRr2oeYNa8di2JDUvpZ8DyvP63YACQoG",
  "key23": "r25xbm4WFeB31HSUHkJGDba6eMihfjN7iBKgk4aLruLjEepj2bjEQgyiyVDBDnDhSQWHbKebc1rmyfmUHjeGZQd",
  "key24": "2XdYLCqnxRPfxnRuuZgXxE1MyyU6qZTFRg8gD4bLcYhwA9ydoK3adrnoTNxXpFGzN73e4N6vEsFSyToma6QWkLW7",
  "key25": "54t9jHvQppp2U6ESkHLUUXED5B6hp9fw89hVrNZReNPZCiYxYZrUSki3Msh1Q6PRcEG9jcHHEGstPfGrdhTBV64s",
  "key26": "TrJYHP9AUgJ29uQUVcgudvhYK1dfYVChWztG55awu2pMH9zfm9Y4Ja1LG2B9tfbfwA7WtkKeo2pNihrou6zV1jX",
  "key27": "5CStgRE44M3uaynrrrAwMX8EgXiQjadXmBseNuwXmAXriU4LmmjQrxx6hq9BQAackatehHM7bUSDGz42RUDkbMXd",
  "key28": "3PpPoDvsKVu4qmjYjUq4CYXjYbqamwTRGCfwKebQm6hGAY4Xct3XgmvdoH63DWomL7fvAKuNmWBiemUUQcrjKfv7",
  "key29": "2JxWERMZczZB7HtS25jimTy9YsJ9YqPeWw1EKbJyozbq3vSmeBqfUXCsq1uSugPpznni2ZYoojmjDGeDhmFkfZAd",
  "key30": "32Hce9KfvtuMoovWnrpAxH7fTMdNxjTnxQ4pniwH1YpWC6ZbryPLodcTk3VFnFTQgrRvRVA4Ar2iBVnWUyc2P23D",
  "key31": "6tfqvkhwaxHVuT8oE3EgRAjt5Sid9rEuGxWadN5TsoJZzwBxKdEg8jhGmba4gioD6PuoY9JavNNTrAa9t5xkQiM",
  "key32": "3FTsNFBsb2ANFvnGPsjBQ1eEf1PorFPEDEGPMNxZ6ZMzYXR7UKpiMHHoHLXCspdmvreva9XAn6m5f28C6upXjXN1",
  "key33": "rS5uch271xGn28NFMThg6RAWix1VRDXbUV1wkJPPK2G9GPwoJhuMAhavSrR87Mb78FjtsH4QZq6nqf1PZi1p2us",
  "key34": "4tArf7XMPudyX68EFmFSJrHVyNufLnkv25ihZqzCPDLikrfxrTNb2jo6Xe1uqQZhdPGXaWLGVNG3KjLWJhmDCSHK",
  "key35": "vxnhajBm29XWSxiD46DpL8ckTY4X97AcYNGh4DVB3SMoAF3NuSFYeiCpyvNPU9zo2ve3Ehyef4hdgmTyJUSwuRY",
  "key36": "3Xh18XC5SwmptNWqY5FLXuahn23WbMKFu9uSriByj8g8QmcitRZZgZKrvYRhbJp4gYUREWf7UUTmagMx2gnjeKeb",
  "key37": "ufzNz1qdWprSKFjrKX5A1o1KW54BxD9NgNg65WW3ko8JPGjkAjw6t2yDdHZtUrUFiD4hiZbdnezdk8stksAnmgA"
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
