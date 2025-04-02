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
    "67d1i4vki6tTBqUEYiSqBgJeipM1jLg92qAkBd2x1DMMwbfXL4PjzU97762yz1A9u69GfeAuV9YXf4F5DNDKXcRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKvT84ahCZyynettADqs4pkXJPrabhniYWAkX5HsxykV97VAtqadqcv61cEkYy9akG2RT2Exz9aAZEw1Rx3Ze36",
  "key1": "4QyM1wMdCfebAodPHhhwnEWop3pMyWCxZMfjDHmqqXAP41emFhKBNk36uKqi4mjz3zEekQzYq77aZLA4nwiBSVZ1",
  "key2": "TLsRHCM89gS8pBgvwXHKP2ujBETGgbqcRuJr71URQKLToRkFkWEKcFxHPWtEe3HU3m2SFzkETi9pw3exo5Mub6y",
  "key3": "3uKudzTPLgQcavc3RXMx3Vwuyiz7xcDQii1Cu4gr2rScFTqVxWqNV5qDbDqoUGctasdsypFNZTAMfvub2S5sStMv",
  "key4": "WHNuuKXwGPBEEQmNMB8qPoCu3V1d8emX2z1irnxkREX6gRm2aLdmB9obU2wpwmjYoQBuJyo4HdUEPvdhhWMMeWU",
  "key5": "zsiwGBYMn6oSVRLgbGDNzmHg2cQHfxinbr5zD8fQTn6NVVsAc9za3zrh6gDRAjMah8t4CHh7UGidkRbDxCiV6TJ",
  "key6": "3etvuPMaNssbK7SofejuoaiRYSnBqTgh3XKBawWvYq3tcvKE9rUoGp9NJ9XJ3jmh2zh9rcog5iiHBRUX4AbK2w87",
  "key7": "4EAYUeun1S91aAwcPwqsz8Kxh6veBRvyMC1tLgcoiEatUbqf5d2DJey4589oQDxMP11HbuKGkQAjswvmRhNnB4nk",
  "key8": "3QeukZQv7nosCdgYSBcEn6RKwYVGvvvJbiq1aQkJSLCZHrsLUBJ3H41Uj1E1vKoUc1cU1EZvXZcPAQDxUdfTRZ4f",
  "key9": "fsvPtuSs9n4QCWtTuzzLAfKmnKk9s56tCosYDo9xwCz8g8VWg2UMWYHZzyoPzptDMueJCVtPuWK7QFCs1mcRRbT",
  "key10": "3VGZGPp4Ht8aThU8KfksbNsP4VTUZvH8wQQrucizsGLHFdqdnC7kpsgyHixDeV1Rx1eN8f4SanqActBXuU3cc4kq",
  "key11": "4d7Ab464pKRAj3PrBJBDpr9EsHMPSxgha3R22Wf9TX2VjRAj1EENsd6eKe1pgUjnNEWPTArQ6PcQTCnySsXLUFNg",
  "key12": "59sQ7rRwLDWdmDqTS3cRt1kUg8TafXBt28wHeaVd8kvciia6yLhcn2R9RTV4ygyikxHcapKqGEygkfBk4K1LKjau",
  "key13": "4YefAAQD28LsYSEmR6htU1sRuSShY8NCJSFTDSJnV5ZNU4z3MkWV7aCfD7kdToYEbTZkrHQoLmEfaXhmU8iNBrRF",
  "key14": "5AG7wD7gHsHodJxPxrV5vDgS2C4puKCfopkHc9XcZBXqUs8D1KzR1E9ewQdexWGzP6FgzAch52NaRYC9pZc8Saw8",
  "key15": "4ATzaPbH2hLMgsTgmTABJ16Uv3SBTip4VTWiWJaKz3qgUNLhx9nj5i8zHcV2uTyLshHmhMYJD5zVFut4nTvzapox",
  "key16": "2pXXqo26e7JfsjUgQzv9LwryhSB5AFQmAbroLUTSabHN3bmjGM4ftL7rK5DYw6Gf2wMLajDZnCA1zSYeEXFaACNg",
  "key17": "4wMrXXCrPhUE9QS13N7aTdKufNwt1F9Dya2HL3Udfhw39uWczKAn7Gfj7eDuvNjD97CWniKUtSsE6S7nnLc2NYw8",
  "key18": "vw7zxh73wvdAbwt8rXSzTCWzazpkmc4bUGJjLPFyimSTPEcg3uzQ2NJqTD2mJxTrnvZEBBUPSf8k6pJ1H6UHDTe",
  "key19": "2en6hAPwXBXE7tGHts3TshpwiaTaAeVL3HCpa8usdsHwJWuXHegtaNfFR2kTzZoAd6QrXRLPby8yxmziCVMfeWDB",
  "key20": "opFWCPzFyx62mWhinbzSSaUKcui8dWQHhu8Ttmcu4aYf5aA6Wd97nsj66249AY8JLUZpxZMjRBco4Hkrz9aNFEu",
  "key21": "3YAFk7RTkabDCQhpvYZLtmmALRRbSnMtZBWSvfJZ73YS44bAyaXoxq3ULyjH6EeWvg9pg1ENx4dASbYkR5d71ADG",
  "key22": "4fKEGRxv9UYN4wB1ddFzkcHUyZUzjypb6RRnzT3H8jKdm8EWYXARd3JvEjNW4Q8zMvMbtYjRXKjqMYadtKi2HmjN",
  "key23": "655iFTHqyrvCkvam6Fb9jr9xLsmP4iYZDjqJxSv9dGVcuKZSGEspZUexmiqWnLtmpE1Cm3XBneSfML5CMY7eP4pe",
  "key24": "45LV1AgQSWUREh6sKU1Uc7MwKPpMofhk1TA7eohn7bVT3SkE8qjnaJtg8A79o3KdNi87Kp5Cw6wvsmxXoEuWC6TR",
  "key25": "3NBNCKGZMSmieenCCkTxLPqkNqHJjMvsT9UrTVXRn1Av2G1A3mN3FndgRhomA8UawgGwYBXnSMwsy3qoyCEcrNfX",
  "key26": "2XBARt8XWPAJkSuygYiZ5ExSSMEhbUDiNFvUy1hBuhFYXeAQxJZWMuairDvirwE7MwsZNm2oD5rWh8KaUUKJG3Ww",
  "key27": "iR6cm2ayw7Z995UgptDefpSDYQksTJehtbEB8mcgnKxD7zUnd4iotcPD72FvQ7xBHHoEhSASrFERZFTakHSVRZw",
  "key28": "3KxC5pFA11AdADwAsnaLCWSasMkNhQVrNUCMZ3p4tRWSezpBKAhkm3ZT6QhotWfsjB86qVXvcVqiHxbEsHJZgsMj",
  "key29": "S4aH312eLDneibx2eKWCtJtkuDfoa8AjaTeuFhdYqXRkMp4fjcmj9BVzRduF5MAihNtsEZ5dKJo3FZRnTA8jyRb",
  "key30": "2XU94gaNyd8G7MtaXSsbuPqM3pGTX629QTDxgXR9RAFdxwMw3UJ67RVPt9srFpfQiAbR4Kk5CTJwdTtiqkhgQe8K",
  "key31": "2Pgzyrs5xniRkXg1TyC9wqnSYa82KKhnJR81qWcYjUuQFFdpjx6AxxjCrWi3Ww5Nh8hvv59x7a9LK8ATcPh2Mj4g",
  "key32": "jo3vGUgjJ9soCE2eyybLbTPxhZRfvAcF46RWFudtLEmtkM8M16zKsNf9v4mDhPYcxJsEsoFTKav8uY3oa6qA5Kp",
  "key33": "25Vk954MDB7oUQ2Nd7YDczLHtQ3FePjLa8htBDoGzaFdVNAQpsp5T6aG868zu4186FUScWjKzh7rDwP8R3Q9tMhe",
  "key34": "35fVEjBn3KikrktUXviSMbDtjnF5viqLZGGYDLeVH1gYKH9s7RLXeaSJ1sPv2mJeqYhyLnk4ESsoQnXsqNLAco7p",
  "key35": "5ZPQ5AymrCr6wbLsa81yQeZuVx9BzkAaoXDNQHwvsNWDx2mgcwpQJaavVUybQmwbni1QpA3iyVRTwpBqi53M72Bt",
  "key36": "5hhM1kBUA9jdFLnQX5zWrkBKrKLKFX8nWW5xnMfMxN1UNfccF6Rbqo9ie92qpJjxAMo7N3mcuegY6Pw9JMLKWGDQ",
  "key37": "2bh4vuFWqeGnKKqiVsSnGUAAJ9Ns19LBmQtS8LEnDAcposivHpvgL8NC2EPPr4vj2pvSQnS2Ktr5LEZorF781PzK",
  "key38": "53E6RbphBiR8rHKAfRLEsxNyFcGH5WLGfRQFeDMCiu3xqe8PfWKSVxBbyCwVUBPTShNEBPWdHjQyATXkXPC8ghZU",
  "key39": "eP3FGJGwwJaj16CyfiP6fPXpPEP2odKEs5dx2xxtMXvRZbFXW4txAogSNeom8VNnfqEFDKN63CXtLvwNdNR9YHh",
  "key40": "3ZiVbNfdwPRZbpt4wfj8QPWtbtjQg5oRWzpnqx3kQkGTDvQNSo596Z5snMjJeaFU899EySHCUCZ4KkWT8jZ1qsqp",
  "key41": "2XYFepgNRVyQhj5gdinTJEi7ZtWSD8dFR2Ctax3v3yFKV2vjFgaUoouoYzWq8Zo2WtyUDtHFfoCmSqHtbhfBkMDs",
  "key42": "4J9eCAA1AGMzBAEBgfxDBFYaP6FMZ1weBTi7BNwEg1iPuwANq1G95U8DzBqzcjLeMYTGdcKCxcEvQGNQqbwStJos",
  "key43": "4d5TGD6n7MP247ioK8x2qKR7rijD4E9YvVHzmvMD2KiYHtGUUfnKPPJpTrNpmNo3HRMaGYkfb7EZLefC4PPR5CJD",
  "key44": "4AdfEMLeUi5i1atDLWww2CUf1wiQHHTMXVduPNDnHdPArnj3PxydRkc8JFuYq9RPtpPXTGALMA5FnRcifFA9f35m",
  "key45": "4yrSqFiLkYLi2ndwgtok13MD7ZiaPnN3nizi3vcbxadhPc2WN9tTn2DZvd6cKXknRU2wubTQu3nU598bzwT89Agb"
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
