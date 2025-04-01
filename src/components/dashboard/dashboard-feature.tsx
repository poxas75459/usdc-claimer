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
    "ztG5sWCHaJctqsmeoK6RyKkLDFBK7j4oP5Ag1arGsbidCum1MefU7cf1cUFFHo33h5WFRPwLTpXH9kCzJixCDbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HKYbrjMUVUFwYyTk88PGxNbgSpMqPrBHDqQf4hYwtM25aWpscigfNde2Y6MCfUz7Tvc7B7AFtCUp86eKwRuaacE",
  "key1": "5FDawJLs1Zqimmcfg5yP16w8NhXk9VQ75FbBvcpQYSX93t8A6NkzYQGedYPb7nctcxWVxGuA4QrdyU4hXGzA7Ltx",
  "key2": "4JriucMKJiEyPqzaGB7qKCqzTWPAfivGTdxciCGGVhyef9nM7rA3v7rXdqfeMXEnPKpvDrKDQNjWZ2vy8HXpxBf6",
  "key3": "659qr7RNUHbGoo9zxkMdWr1ikFX1Ba2Goav1MNKktSJmMCGZYW8HhKLEvmT4PocC9qZbH4Mt7bXNy8C8Goy7r7As",
  "key4": "42D6TUtgD3Wav3synCZBTbqhbWiTVxY6REuE29HXxc8Yz3ejjYvMT9nVKdrdX1SY1EZdteTXDJ5LHSN6k9oLXXfR",
  "key5": "56Mi87Am25zDHkpPnsbuX25PvE5YJKoAJFR3XauadsKMPKVQBH3fm2rSD43E3FDMjvaDpGwm8R2Dg58rCVnDVSww",
  "key6": "5W2wrB7ajfPNXZbgAoNCsYXp26CooXaVSCdgMQZzpu2WMYhUcPy8ZXEcja6eUGSh9j7znzSyNfqDWitNeHjM4VCx",
  "key7": "4gqJq1VR2c8bKbrTAfGJ37QiGCVFdfgMoMTXZMwBWpu7WdsaWxWVDahYar54nijk7Ra28qte4GwVzEng7Dct14SG",
  "key8": "4FhCesuVjtfDyNZAJRdvgAjUsTL7fBrt2Q9D6rU4oJf1jn2denCNATjDkEErj4bt5hFszk49Z4pCVGnxWj553DfV",
  "key9": "3V9NyHssZjVqiJTmL5g35LMHvSLZN2pFESRLKsjNcEojsLbBBYaf7SXnoAwZXZoHqMSuGnB5msVA7XjYm9WarW9J",
  "key10": "2CFS816DXzyCMt3oLvb5hZSXNGDPZEm2Q7EQYsH9ebSgdEF32RkSPSwpRpRquMtuBDm27GVV87bVhjYLHRcX6Fmv",
  "key11": "4iEQystJwwBi8QE5wFmW4usP1SPjdq8MwtCYcVoEmVHkUMoKHtTnaRMtgLjH8mDLP3TnWQXF4yQULFm1wwojpcqQ",
  "key12": "2zi2onNBLXFehH1QxffWkjhANeTHukwXvQ5jvMpKw7BCM85T6zqFt1WbXLh2StkWWWtrttgA7Z6Bviyq4KJ2acrH",
  "key13": "2byYD9itwXPprHB1Lz7DPXfZVkiyegkfQCDGFBUU8DmtxgQp4kAmy5gDY1w9Bee4iyNU2oacLoXY91qpHU6wBDum",
  "key14": "Sa6kv7uf6ebzzhDd1YXPYCfEGzQ8QG1jwngaiWnDv2V5uEBq4okbF3tfhxTCLANqAnehSxx5P7XnH3kJWvVCf18",
  "key15": "2kacRZ6Whf65Am7TrftVx78dyMFHMy9WYZbQPHdmGCideTazDYayDG1LGUs4dscZqa9K8roFyeDPuYtdjLw2vjw2",
  "key16": "2kQzm97nLB6YTGJqJeEe2dxq42dZTBbbeqPsLceuw7bu4SoN3ir9ivwSeuQqKVLCTxbWBFGr4mZT457FvUTgKBLZ",
  "key17": "n3iDsRy8wGvQfe5dBdoBZhBohd3q8qWsrtbujnqnKx1QCP94uVumVJLpqFQBkaiGRL4xFNV8BLhiHsHXEDaKrWc",
  "key18": "3CLgPFAAcF8KUKbGzHCfkQd8HD2KAeHhkWX9aRgKzx8HARBJ9ztg7TkpAveiWLGPzwmLLTVw5om4RTHJAtjvzEvm",
  "key19": "WJxVnusSQK4BWC99mvGMrEW945RkGUjsr8fTTPw6w6bFFJ2QzqVMpiBjcZv9Masw1pnfXtnU5xSi1NBGeccpBtH",
  "key20": "3MHDmuqWWaZaL7m4rcBa7ZNCxnPdmWeXyUxFbTqPtTZbeNYCXC9mczn3ssC6Ck8PN9f8K9iyqTmz79cqVuQ3zxWe",
  "key21": "2tDeB1MdM84NHWwQmipfeC7MbhivVEBBQ62ST3TyPdryupadPXJvbHfye47GEar4X1Q4ut9YFovfewrT1WBLCQSy",
  "key22": "67RXJj39GMwW62fLgNmtYmEXUuooHArq3GuBHX5NnhZFq9SwJk2TzDCo9Y9ZnHh17grMbKtpoMkfucAWKPoRxLRK",
  "key23": "5s3zSvqERAKPjWs1GqmbsnBLBBReWMwydJicZcQAAxXugVUGvMX1Rb4g4ifzBvAWcDG2FfXeRbQyugq6fo69qfEE",
  "key24": "4iDcJtHKVxFsp5UmxKEwqPET1BhfyePNBvVV9bKamAa4URghPEy5BDiVmR7qqzknUajoskcqsbZv9TvZPRr5KoNp",
  "key25": "4h4k46djCP3FAX11hPzGumsFkBxbja9tKv91gii7vQo5SCuKPZH3EANEqk57qdfc1netMy3qmbYaWLsABE63K6sp",
  "key26": "5VfhQjdcn1ZYq6B1uUwceRdPEy5Jb92wngzENNBdHnGgwYBnELcArkZepQCKoYN9GPw2QrbGB3szCx22dyXtnXWQ",
  "key27": "YmbM2y54a718edFW1hKQo5m9rneiDRdLc4rLZuGgaTahG2TmF5JgPLk8EDE4wioSoGzCYdRfH3oirr6qZNFADCF",
  "key28": "5w1CBte9FZdUsXE6KbKnhGAr6uDAQ5V3uG2xPzWbvux6eTrTCEM37aCJJv9K8M7sD1PRLrPgWnELvBDCUQs5XVpP",
  "key29": "4kVeMs3tkzyqsN2BsqGHSWEQWmkFxuGQd5KEJJ9Zy5bBRHkUHFeesQhA5cW3ZzRwED6qfXw4unxBeVaGoobmm8SR",
  "key30": "39unCYjqjt6pD7oKnyqrqMbqx73dBSdF834mVDUqXwV2TLy4nZEf53tER6Vz4ojVecEuzxdxBcmLvTCCuxuGvyE",
  "key31": "4fULjyZLEdfuBsHCKSHXZvZ1Zn2WPTDBh46Wmc2wAs2D3mHGkChhYjuwNvyqWjBm9oJ5Q6vQqVGWjfJ9HvNdSfeJ",
  "key32": "5CGYGfGpq2e1AA4tWEd3qZmMgT4XuejWfEZgxrwyVtVbrhmqVvpqpjf2RFfeEQYZP5ZjV9V1d5pwcfkCiF6pPSrn",
  "key33": "2FoRGFPFwZzqbX3JCzmQiuzbRa5FkaQ9CcHQdxmaRoG4FFSPRkjYRfFoaUEL1BgPctfrTjz7tMYDAmtSNBUgbLkE",
  "key34": "4APe7oiBU39KZ2sJwKbgXyzJFDUuzYKQzqna1XVKaHAubqQ3orNYAk5BR4RD2ZnUy88kJmLtM3aLKR5SFy81YtDv",
  "key35": "8HqgBTnSRXZ6P3GHeStsq7ZJYYRouTWJbHyswggf1tkCEde2DivhxMwpFUZbePpHW2CrknWgBrUDracx3Tv6wT9",
  "key36": "5tcjgYbmGyvxW99o11ofeDgaJt1EnbD7mwszQ13HpYi5AQ3gHQAPzC6xRojP9xTmY8XUBAAjRYQYaW7RCQt7Z3FR",
  "key37": "4frVM5BrGDxCu9EsBk9C1SsQcA8X5wvpD62GEvt78UCfxfhoRunitkzhwDvuwD3anq8HKqc7nmWudY9q7V5tvaPh",
  "key38": "4HJNMU6WnJV9Q7RDhtRsod8ifuV5RjwZ1gkhCMmiGrLpkfP11Q3FxfYbuFKQoBqJQGeVePMm2bbCGgGmhuj46Pxq"
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
