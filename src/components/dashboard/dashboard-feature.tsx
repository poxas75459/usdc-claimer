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
    "55isACjvKinGpfaQTRyzqRqyoVJL83KVNGqf99MWmTgTN8oFPCSzFhteAaoTp3S9atewZuBxb4DHCuNJ3Huzzw7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tX2oU7PXFisSmAoH4jkLLMj85WbtzH3GGJh8MPmmorQUsMCtgiH4oCABXPJWM8pa36GiFFCmgC3jzxMN4CFRiBF",
  "key1": "fPFDUjhEPmAEmhmZCf74HEuW66Exb3PeGc4zsYXmwSLod4msGMjnEjKLuuvWvCszo5XobGPtpMsKeYr8NxNNUgu",
  "key2": "5pLVxHySRo8GzdceeXy3mTCzuMXAqXewFu5EnrcP3dbXpPx8RE6SYb8aSUnipYfSKPdpoj4beFaJMxcD8mkDPCp6",
  "key3": "288tfekqFARf8svzSq2EhZGWBJYPscrmyNpmr3LYAt5sGmCiUjZ6Aep3w6pVa1RmrixgkEL9oLK14vV384fAKg3b",
  "key4": "63xV7KELaYavktmbRg6shXkMZaBzpvv4YBqxmoh9jEXeoGyZFQviadWWcxq76QW9Jybm5Y4MdVCbEpHnw47usVM",
  "key5": "4UTvtiJjZLUvQWqNsJkxGgERsveMovMurxqUSb2jSFDE3vFVhjHdzTUnk6YSK8PwYxmrJ7Ei9e8DDJJAzvgHNEm6",
  "key6": "39synK4Ass4Btspb9CWeYUGChvjziYKxugQAdsZJspvZ4eV6TNnBrFsWzrP79Mxh43L73eG3UieEwAvR3pUVprRR",
  "key7": "31MHbCapNs7wHmZ3ceojdaM72tcapwJ17nBpMh96Gb2f3mzoUSay3ioUFMa7twZwaXhD8FT8ZbWgWw5gHHChLHaT",
  "key8": "3jz3KLsMobKgBiqfR4c6asZFgVBfmmrmHHoKq49rHTfhW793JSrpzjkJGa9KrHh5GmAYLhkDkmnUbvHF92nvdMaq",
  "key9": "5iiwasbkXmBYvJy85GhHN64xiwrgya9Goy18xg4pjP12DybajmkrLGbYzjWojfjU28ajUZHSRFNh2CpdR5HpKL5y",
  "key10": "BnccWCMfNYrGifCHgAP54FjKMHU6LrgMeCvmzHEgeVzLFjWMDq8uRUqYYwe7efEKRd66re5XwoD6sMxRbUSmCRb",
  "key11": "qy7C3tu8TzrAPGQ1KN88FHqfg7ap9TKu2L6YE1fYfYNHD5h5LLcsDCY2rjSYzBVfVDwNRuXWV6XghwFEKkfiUV1",
  "key12": "5zfYJADAbRGMpc9xqrApad4RHDUrjYqRra4ChTwKwXfSEuwKwC5w6Em6daxBuzibrDhLsw1WagdZ1LfuFw8y6bQQ",
  "key13": "Dv1voLW6bcEfZ7Qg5gaJ4Dcr5ZQSpjSeEDMZ5jRpQu3y8cJPDncqEWxP5FductXTFmvAdwwajLULLSm3z49u8eN",
  "key14": "2FmJUFpNXd9R4t753f7QNgkbeSA1Ss54LAgr8qpkFYNhDGJpdESkrATueVuk4aGcADrK6FabLwTGPRRKUvpqo9Ha",
  "key15": "4ao8jz1cyMUeQGt8SHeWZxkLFtM3YdaZVpS2VUDuLwDyiVvwxeqmnN2xzE7mbddbn6JG2exmcZq7FMx7SCNhqfPL",
  "key16": "3NUTyVTrKobpNLWBj7UgNyjhwLUfS4i28iR7ULmyjCKtJy3bFLi2rXDHQZou4kK41DpsaoKfPzn2n4HyQBrERwek",
  "key17": "4tWBRRSeesXu7QRjEJKJB8KFMGYAoJHmf17cDisRrd1Qt35Nmj8r1YnKRBqfgPerK3C8JRQEWhVutFRarhvif8d3",
  "key18": "4dy73kSyi3K9veS1SrR791ruYirN3kHm5SL85sTapE9ywwtvx4yRTkDVqdHsjerJag26SkqPgBP2iAVVNGnHRRB8",
  "key19": "CPpGKMrcuCpNvQwCydseVPgyQms1E82kUcLuxoDPfn7T1YEEYuLqLGxea4SnK5jB99ghAnrvYhQ9EMqeSxh12gr",
  "key20": "AjJPCcPWjA8BLsVhQsoMx3MoeaRRutf5zWgH7tXJb6u4YW5pWS7s9TU4gLicRkMfEUXJ5FB6GbgvZ23ZeRxCiob",
  "key21": "3FMv57jD8nE4aEkFcnNJ4ysxxFDvCB8zfuf5LhhNzZWfbXYJemvu5GzraGZn8UohzZrpapNXidn5WDmxAPGAVMuT",
  "key22": "3hbAxiS9VbVvwfUGn7o2fbUBuNrw3egUJjLkeJgbtnNtxGpq1UKGDsJCj5BCPsJsCc1HRoTeoNoLPgaoSGLn5PWB",
  "key23": "4C6uQoH5owXUpiwDoJ4UXmsdPGPdwihVfDGXa3HxHWAjFGeDGKh6LFVkDKempPSxdobxrTP5j3heYArffworJCSN",
  "key24": "3dyFQmUrasL23X4gucuB8VM4pJSSv8d5jWjv2qXLdxrtV4AXYBYTWWbTzRwrn3KJRKwDDXBm3UQ6mBcq81MqHBMD",
  "key25": "36NBVEekj41uBgaKBWjsZvWFABUn2CTQ1DrQU75Lyy3PeU3Cfgh2xMAXsoKqs4uoFGMHpbsuf5uoQuY9bNx44YyC",
  "key26": "r2DoTKrodYiNjrQj2Y6EMTTQujZZDSYaTnRE4ZyU5tPrTPF7f3k8x6fxUBNmDn3gCjGZrawBy1Ze4hfJAqbdTSj",
  "key27": "3hqDtdvP4exzs3fPYQbwJh3vE4xE3g2kcuBLaiR2Cq7gAFUNRvTSVBynZDubxPWVjbsKfnDpreY2xZnpgw6ePVSo",
  "key28": "2gRK8Cfz77TBra3U7M9Ao2Hurxf4PQmXEmUMundUcj5x8amQnpbe8gYx3pDRkBg5xsmgLG74DraEXeov6oMDPntK",
  "key29": "64YrEzrbtJj7dnn8aRDqm4ZYpXiJgbrQB2FfoEQMHTnQiweqoQxq4RV96EimK5Ku8npqcdHQ5VEf7HTTi4YurHVP",
  "key30": "3Ygt9PKuQYXr8NTiAqpzsPaWMR53U6TP13dZfE6UMNAyDho8fME8XHt4j9xoFGdrmosr2eyh7Mdt7pTcQNVLNAKA",
  "key31": "29ZigJknbCsxNjhu3BPsekvDVhBZ8WPC3AhdobhHiQwnTEqDYkRgoPwEK2DRg94J5UsNGh6oPhkVNxPomPYH1Jr7",
  "key32": "2H9EzH5LSf1Y1j39rUKTo443PGfr7HGgpW8qSg3SjfFij7wzyFT2EnH1DCntdDMg9o6w5UGrktgRWTLGBKzKKokY"
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
