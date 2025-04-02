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
    "s4yLPD9K8QzS2uAr9jqsVXZbHnJmqqWkEMCzoW5vxhMwxiTVLn9nZrifwSjM4x57RDmwcCzTaXfRUVAekSzhpcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mxhJm5P8PHwVLCGvMWw1MvvQMY9qanKGztbDytPSbQta3tf6dMo8JEoa6B7KhTeGUNwffopbS9YVwgknXhTHMp",
  "key1": "34mm4a6hdoLKSsgMWMeJAX5pCnfGvn3BEmiSg6TGfNExzJfSruesBELVg24RCTUU6EQqDpFDFu7iwp9a2JcqBrP2",
  "key2": "5ycbK1YN7g3h9dWKvYyQ1ACRPcPjdKS5iGC1UmuJTKBbkh9cbZu9NTFHXFzfBNByWTdPULtQruaXrLwdyfU7CPgZ",
  "key3": "4n8oS4iSNir6zDWXwa52hMAEasNnSNKZVTeoNRwA14Kpt6QuzjCm98WnPv1ws2gbFcHciXjTPozMbYkje6p45u1R",
  "key4": "Brafcib8g2LJycUZ7nDxRtfcA43JBSCTb7GPTPhSKRx3DtzCAn5GxDPWhdMza56hMtGabMQYMnCJmysaP7RAtPo",
  "key5": "4GtMrU2ASSAjwr86WVHm4Mb1KzcZzQDwgr41PbeVwNRaakHWoxTyrYEa5nxPJnLfh2izQyozhyW7JfYs352owRtV",
  "key6": "dwmeKU3hxWfS9PdzxmtD9PTTLmgimbXYnKFxJuFL9gzUp3L6KAErwnmrmReRGTyzRBMd7RA4M2y6ioaev5Zwy9G",
  "key7": "59NvM2G9knkt4uqkSKqXUVc85CKCxVpUztTfjACGFrMKQqqnSDYbcFUumWWCm9M35BfsDHcRwqb6ms1zFei7bGdA",
  "key8": "5vkT2CdbjQzBPQVUuHdBB3py8XNxBcFaaq9PcsF8CjfeEda9gHMAYk1UjASaafEi8RvfPkeU9JQy3DSuzNB26Ji2",
  "key9": "5H5AiLAKajc93iw4TdyEgk2s8ho1uWsgcoLHpjVYPkg92aGhurozsqRXTDStDFeaWRPjPiKGFHxS1CLsh6NqK728",
  "key10": "4zAEbsbL76x2ij72gqLTtytSFUknhTRrGJbZ4airY98Rhc9TLESUcKZMK9v4cbDnwErTLjiNbc8xUyyFfrm5RJdN",
  "key11": "5YAs8XmpWQQ53WBfuMchG13oTARtEnJHAMXL4SpRsKGHQ1negKSkGagTp3wDSbP6hG4UU6ANebJ69VMUnrKYdknB",
  "key12": "jJu9wisPHYC4TpKE9R5iTjGKfWXbZorJhsxudTnjKTiLQPmbgXmZSrssFnHXW9Lg8rbRY9S8Lj3h3Q892r1DDFd",
  "key13": "41DTCstV7BVGpJAFw3Tf8Q5URquiokGKitoCbU8bToR5WgtG6FoEPVSBFxouGB16AJ8ernGbRsewwSQdLFwckHa9",
  "key14": "7eXx5z4fsDYRUHpLtAtcCH1zWS4oovrTjTy4vgUAQZRT8dg8g5jAoidSPwzyv1xiatxF2sx5EkUxTu2yp2TbcFA",
  "key15": "iujFXfQnCUxLkmnQv3aJGpFrY7PcdEN23r5ie8nrwB7fZGkT8ZFgV3pd3eVVaDfQjGR6Jiv6timWY8gdLok23zR",
  "key16": "46rdrmDtPpRdxGYCuWAViR3aiNtpfFv7gyYoYFHPoGMnDDmkrjnmLYmR6jeV73yFi4egEqHrvnHDgyeyJUjwuLNq",
  "key17": "vb4gDPUHcenwLocWPwxSWy9aD42Rq7ak569Q4cnBoXToZW77aaA98Dzic5FHFjRVHWEoS6GnzBiWTg29omtq6ud",
  "key18": "3pALziMk5HFssZZoQrXeLsJV5cW97wCxaVmMmdC28rLpPKWkD6LZYPcrWGTDjaXHuD6FsoJoxNLUvxM5U4JgYwqX",
  "key19": "4QHhTyY7bpiJLAifgvchCgsgGbBQddsP6MPjVpHfpSHrAoZhuacuEGtBm7AshUNL3XYv32LQsF8VqKavTHt398CL",
  "key20": "5mnqiVFjpMaoyTBJeUvzayLpHZSoHDUp7xb13LD5N6FprtdCG1hShpVCdVjvHqH8BA4K42b9fM6nhDKe3BUhRGqs",
  "key21": "2CChXjxMnh58mQqthPmUHyfD3tQRnbhnwaDzeQJmj3YuouxpM76qFSbntwbGXwvVvHJUbarj8UENuUowhJ48GtJf",
  "key22": "27FGU4torxqPRa4SzDztHro8S5wthqkSZ88vknLeemGBD5tRk1MHn16gCfnFVMrKj8PoJptvXJLUdr3hWJKQfiSm",
  "key23": "4XeDF6z3zUX68qQghNRUFJzeobqJEj4YhfTzwxr7nL9RBZ3osHpVCZ5Lo3vp2tQKi9tKoNbHiFqzs68NbHJSH6ie",
  "key24": "fLHkNze6ZcSdyNxF1HQmmHgAG9kcLUenDC9EesSGo2r5rcUQhWY6xQDw7AGsgPdzBNB9hSLFXeK1GiZsYn25rGu",
  "key25": "3d66yL9qVFXDWRA398Ev4vhCi2ZCm6pK3fNqaSX6LR7KjjDG9nzRCFjUKPgCvv8Z3jid3TacnFbJVNnZLFNDL2oT",
  "key26": "TT9gmQRW7fP8byiWKj1iVGzTuwR4iWhwWMAPNnjgVwMebX1Xk4rUqPd7nxSwL3RpjwxgxDt5GxcrZDvaCW3V5io",
  "key27": "59i4suJRT8EXxs6zg8jEYyD9hSMXFTaNEUyXaxgieERAXsjmBRkesJ9RcCa3KgXd8vY3cfLJ5vdyMkZFpPoVtALg",
  "key28": "3MA22H2a6mtzUjmCsGYJ6XRXRevURGtRcVXSjQ4eSrK427LG81TWEuqbTNJao3yUpy1ux8yg99xRtwjxUqcvnKoK",
  "key29": "2L6GS8SfRm3n4nXn7J1wiFkaU8rjXvJ2vh3UAYvvKywcngU7jX4RsDbqV4R8ghQVBJFVgivxULatgY7ti3EM1xKc",
  "key30": "5cPQV61Bb4n3nqgmcGHiCTV22cLUbpyB5AEs9XJTQByKDqRJZf9qZtY7MWKjEpNMYCLHfpfjUP26s6tY7wdEx6TB",
  "key31": "5tLiJJ5xJnPgBFCiei78uKy5FdrzetmTGPsH2iNYqKEBkHPp6UjQnx3xsVShXUpAA5ooRcwKnvGj6HMUCZuaNBjx",
  "key32": "5KeiYeShuqFvEbxaqojyTnJLYjHE1GwKXVtQLsrgRtf8TJWipHTNJrK35D81dt8teeZexCjnxhjLS6DzEM4g2z1d",
  "key33": "4zoZNVk9vL8ytArwg1P6ZEdoDNg3HzEkWrbHUDRnxZb3nzmZ3uK8GpjQwDg3frRQvdczy6W6xtrxW2iPrE4R4zqX",
  "key34": "39ohWHXC7GHBw2emcJqLNdpocT1txmXW1LuCGmpSdXZttQ9NXUsPLJwAjuUWePN8iFNjAWQR1Eta3qgvdQC7d6qp",
  "key35": "3gKqcUSeZnVwNsQCghuhXLPTEFXVUrRS3zmwFHP1gL8Ke5TiRoWF22xQkxSoxqwrydLmjHnVpY3mUs2yRQdwerZz",
  "key36": "66Gaa9YG2wcM4qVVziM1MdghcUAf4iCoEEKB9uT1fcKnvFEb4MhoxRyDM3txC9TsqF1PL6YMC7cRgfd1sq5RrfiD",
  "key37": "2mJ8xP4L4RWULYDb7Kn7nrxMX2zcsKT5kxmrhQbw6pLMxAZLTyUwPEJpQrUUYLodwNxHEKveAsncsyoKj2ixXEZm",
  "key38": "2MaEoAzTGwz1YYFngUZUCzfKvEXFsD2mAbYfbSNCcupKSaWiBsp29yDmFJwkgjHXo15mFGXSuiGCcp7fA64sJ88T"
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
