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
    "guc8wyLrhVwgAfYSphZqF4uZ59xxLHGguK2BDBfNzL3X4bz33UXyikEhjjcfiT5mJ8jnGdDqRnbkJzPGoSDmmYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42eo4KNKut3Zjmdr9hTT3a1upNkuW5kVWonYZyzJrETcxti93gSJhW3poQp9ACJUtBFhw7kVzU4mBqJVR5PwhfKU",
  "key1": "2WbmD3xumrCBGFimNTCwpwWZtFvZegkRzJ4szuWd9Bz4uxEaedAMrLwB8UeyTcQzZHsMpz4j1MHuafVqY1SL2r6m",
  "key2": "2C7a6Gpojn8Y2NdnNmYMnCvVM3G4pVDwVS7dy4H14xDZLnH4ygo4g72jsybqAMVzMAeWocJ6EvMbhFYbJmdvNK3N",
  "key3": "5VBoXKz3TRZN64ZBLqQkEBt2zHmKnqYTsLD8Q6dbDr4cnGGWmA1vKL3dCYSg23je1y5QtxLvVuT7smrpmmwDWQ6e",
  "key4": "vK5exrjhxM9sXc3WM4Y6kAuSDa5uF9rCDkdtZivdKaHSLqQnkh4MhqrgnDQ4oLjF6VCH5RsvLuz1f9Co1bX9m33",
  "key5": "61KAXfBwY8ZsRFLkGoS5kVJqv6dyiUeLzpN32pA5LBAULjTqXmS2s1jKEeJB8sPXgrmwmUZej8WgnjGsUHfw6zeE",
  "key6": "3CAbiembuJroE2iHmrYrcxBQjGdVqM48xkKwZoiGveQmkdmx1Eua8wNFD9G2kHYS6hvC9pph3AdbvdJHJrPpJZwq",
  "key7": "4vBh1ajeB7zH5HK6icDj3SdTU4pqP297pdsmcJ1BTsxNZThVjWQydh8gKJ9ZBQhXYYZxv1iHA2rPNxH5jnwvNEQb",
  "key8": "LMRCLBuN4ihxmZZaEiwCurx9o7xGtmXkYUKWw6tZJ1RM2YwpWkwNMAYqmV2DjUsLRNz9Bdw6g5Qz6ipW8qkSmBx",
  "key9": "5KBiLStz3RNT6w6hdXWYrV6aUsbbTHX9emDgjqK1WPqaKaGpEsiQ9cHHDGidg9dUg8b2KPyrPeSVfDVr8t5sFLwX",
  "key10": "7uBXWoAaPQSNumQzJg6UC7GeWPXRFhVqpjKuj34WSZDxbquK9BnwtuRD2jZ17AXzYgSbMbtFvMWiDCcFrekZN25",
  "key11": "3R9Pb4VqiFHXiuXJLoEabJu9wVgkQQZViG7fEYFd5zX3EGYCixAiTiqydihDHfNhau2zm6nksHVHNBVWLrDbqgRm",
  "key12": "4jdsTJFMDJqWr2Aix6QzwDtwbKFe9HK7c4UmNCN8gVQC2i8Wsj9cYe9K54YhH7ct2ejtYr9GuSBveZmCA7qRhozQ",
  "key13": "5qxBa3kTN4KWJdqWrnKSwyvTpVPU78LBzPtoWsaVJB64gEyJpWwnF7gPJohmo2NpGTHuzdWGL4FDF2XnXrmPRguP",
  "key14": "5GuMWAe1bqdpDCS28kou8VMjdxLVXYKaaxCz4qK1FiUryoYtYtUfGFbBSHtC4P28sfy41AenSKFayUU2tfftgpxG",
  "key15": "3PJmigFgwDcZXmDzio5qAZEFJBCnbKRBpycdwja6DvWeHBfKGMnAFz8os34eKgWVHcGukZCi9HNSPvVa7X157RL1",
  "key16": "2wsjYqKePQ6Yf4xPckuSfhqu1Zw714qhfbAhJPuEvMmpQskEbpS53Q4XmAt3Mk9rvJ3MX1kRmXU1MWnqGWHv76ax",
  "key17": "5UAiugR6dpg3CxRxFdCZRe5wwxsfmTr7uaruKrwFrRnb7713RJjRzXbci2dZ2Nyfhj1rb1bjAyTfi1CXHdyPmfsx",
  "key18": "4p5WKJ4w7YdfxDLrb3PFpSB28yh27hBb5uKNb6y2vGPq261om4873PhQ2k4CVqgqsKQeLjF9VUr21qK7q8KjC9Kw",
  "key19": "3pWyUwCudfrakAYVVVj37E4UCZyj1Nxfgg7JBeQGfhKQqyY2KRmubwqgK9ymYrz5ERPm6ffqeBtpE4sQrKw9SUim",
  "key20": "2s5B7zoaWJp4TGeV4bxzFt4Zjy7qinst8ZtriszFdr3vpN4s1dkSrFDPewa6jgCuq3AEQap4CXVRDgV1nvxyDBeK",
  "key21": "3vccrSZ9GJUVKftsnSWDkbAWv4E5jAoF3CPQwodWY5rmdbMyr7Qf4QQ4Pqp6D9PWWSSDgRRhLJeyAff1vH5uZKDK",
  "key22": "5q9gRD6hsjrKaThoELnJvySDJwoWmTQWSbWZ12xthjYXApS62pm8FJvYujk8J7aYdn3ThSWnvTHHd5nrrSZd15iD",
  "key23": "67PHCX6RdPSZvuDaFRZ8s7GQ36fnScqmn1mr4CfZWkNaUtrkjHFJM31K7wbQzEfAjacTpRRvrQD7UKAbp5dNkc6V",
  "key24": "5iJHPh7ehjfE6MuPzzYkQXe6F9SVuzKgsUEALhqJpGM1Xt8ysUkKcEYxDNtv7MbSUpk5dvTxWrnEaWWTAR958AqJ",
  "key25": "3wWx2YvdqBVAUiQwoPmJAfkSen6y9QMpGADr28zvVh24jszxLdA6gGoqoXmqBWkTGYMQzB7jtwo4wdo6nGfrjZSc",
  "key26": "8WDmXqGTUhAkS1Xw8x2UymTDQEbv8H5wV9sWXZZMECqA3oUS9MTFcNcAC48r8dPuLUgxdazEQ5mvKD2DyNvfg1u",
  "key27": "2wxnwdyJ9ZB3gQ2CkVsTX2WS6vpDX5rphSNPeSXcfqLwnmgFHeusAPiozEMVXEo3anqXzWmiH5fJNvqec5Yzih4e",
  "key28": "4PWQ4itBnzcD8fPpQ1JqWDsmrtmC8yY4BcvkotwN8Yf1TFuiZZxfAoQQ39pK425dBzxp61go96SHAucYo5ySVayr",
  "key29": "PsiNjktmz8fsDVMMEx85EJFR1ft9btSXLQa9LdmnuCAWhqNwtL3JEViqHQapNkBGYhJ5GS3rUppC79HSZWoH1hc",
  "key30": "4DR22A3Q2BK6LkUjHwkVK9jLZ3vK5uEwyuUJVHW5Tt2rM56jsLnyJ2EmzQGoLgCJHpbScbZQmMaqnsUQZS4rVNUp",
  "key31": "3v8QSHqG6Z3Aca3om2359NtkbpZnP4N3R5BbNqvZDjjBhdxpnff4zkMvqwdGjk7vVZTKPDhRAMoy7urBismVCWSH",
  "key32": "5pvLy52uKrCRkrJPAM1fNSnEVHPvgJkYhpVMiHoKPDYi4sJ4abarBUHwBcrutXFCTJT7W77PdvXbRDJAxHVgKFeo",
  "key33": "3QKx2mZSQFxqHUhXEWcXbRP6yb5RRCa9gdDk5kapbB8S9UjQB95DRXLKBMrWzHEQhiU9s4s4P4ag1dFxbaEmvcCC",
  "key34": "5eAz3jFT3b9nbqWWNpPky5XFNKfJfgkJ63uam4pd5sHipUrGoaVFTuWKwyN3wEqce8Q7JsMBFheRjv4okUejhsRo",
  "key35": "3SRfUd6kz6m4vDpmytzdqHVejp4yWgJyotzfsJ2xdQZkUcw2Lv3X3yuMTTRgpAWcWXAqDSq81F9ApsoQLaVjC9b6",
  "key36": "3i2dGUaa2LtJuLNcy24ALLpyoi2DKgdsvkGhZPT9hg58NhewGBUiQJJsBYvhfqrwbHpN1fdVQavLo34LL9yWEJVi",
  "key37": "4Bo3AypwqD5zU6ALCXDiweecdeXqQcCYbgiFHKgmZkaatKCyM1WS67fMJvxubpDbC4DiL3tZfSSrzC33AVv5SigX",
  "key38": "4K3ap6mT36BGHCFMF4zBc1gtDgG49dvXFGQs1W8iJmgqjE8cKBpAUNr9xEYjnyGFynr9NG95V6Sr4MtSNwgDH9RN",
  "key39": "2K3MBK2oUGE7pazpzF41oPe5wNRvTNqbi4maVidhRsrL1mVXFE2dtVHZMmpbrGcsXad268xMNy8AkPmgojYTPEgy",
  "key40": "G9LExMCYEb4RCp5ZVFrfzEkCJwFkFRLezEsrgjZTMeaB1jRmhzYJfaiLobZkrLk8u7VkFbKeBCaYeQEY8WNSBkD",
  "key41": "2vrUCMEeokhdjjVCYCosevvSphmgwiWVasvo4rhuzGphysr1DjCi3VmuoQvaAyoUU6PZiuRjE7pn2bJwRAqj8K4B",
  "key42": "2y8E7XseYRTHtS3ZzdpNpSGj4asaqJLYYMddPpefSjt5axsrWSZKjGuvjhZkjpAv1ZD5yysGUkE2L4kgySCqDt5D",
  "key43": "4mje4nTx7UdSbKyDz2wMHneHXWLNsXEtDCkE9YPAJ1wFX3WkS8etmnBTiMu3wMuno6M6rgdJ1Xr6nDD5iyLkga5R",
  "key44": "dkciXvVrhSssKfhzuohohEy7C5FAGyn28XM3cXC9z12kNfaxjf2bASKNaUSBPFpiEf5Cr2RVnrDHNmXwWMDjz5d",
  "key45": "M9x4ZLpryyzdAKKN8a2AttkgNa7LjjcGStN1tERAhrer6fWkRKynhTku3rLYySnRP2tmQQpX9kjpSfEDQazYAxf",
  "key46": "5ZcevkgZzSPUtR9JYvwYwuxE1GWNdXxJ1f5b6s7bxPg6fsBQsGkAnYFfdpmeVchzDnVCRDuHS8dycSA2eW3TgqGB",
  "key47": "H2gnVo5fcyZTLgrz5NRvQ9BV3cL5ednoANADfPCojPu5tN4csARExzWYWvaWYJ3h6stYSXG11fzPzzhbQXmXzoo",
  "key48": "5ybn444VFFvDhV3EaeoENiicaeJBYLZiKGbnnaYRgXyidouQrkUFfR81i4BLhNCS9b9Ey1ggP4GwyvNZSNyEFmXG"
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
