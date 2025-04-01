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
    "2WyBmbLXuDozLqVCDcbpFvcgCnW3W8ne81Pgvamr3A8VhYYhegVoYZ64Uoc51CmGUzFKHNiMh2SXHJ955F8JL7Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctPHwfx6cjjn2PXRXbgEqXGu793YqJHqrsmNFJiwt5NAhiVkfLnN82U7RPikpXXPvEhM6HAB4Tx3rWiNKW44MCx",
  "key1": "5Y2JTe3TbpeBtxavdgiWVCDnE2vQqgskiBaSWn72ssw8tP4RAfAfEtv91SQ9BG9xhVZ6r32W4iDVbC8XR1sgEvnB",
  "key2": "2UqvtiQxrEtEr1Gm7TSBEdienbhVZQjcBA6jkzn6TstMFnmakCSMDZaphB3vzAoqtwrivkGVLYXNxc1EEL3E9aj8",
  "key3": "3Wp2HdvW5EzEN9W8Cez2Fyr9KQR2V6EhcDGLf3frCHcdaK2tjW5XP1sCZqem2D9rBovSK89gaJHV7JQCknr586Cz",
  "key4": "2mJLogvdga8fAuqXWwbsrwtdRM6ifTes9vGHnzD51gAmtDMBY2fLWrLNuC3ExXM9fZocnhmfSr48qeV1VoTggnY2",
  "key5": "3qEjAMeg3Yu5cetpeKtv1VdJKXxP3UhGTXQi3yPHvYGQMNeJ1g8XWsP8vohUo7FhoXCjafzfptoz9yxR1K1zWTrc",
  "key6": "5rGK4cUBqEZbLbd6sXST4Bx6PnqkHzdT7w95wpHd6RFKHuenFwZm8ijBSgUGC2XVM3cijKxjCiLfqESC2U1kTNnk",
  "key7": "u2E3SHwVRgoShZZgUggxRi2bTKUQ8BycsYy2RGbj2EQed88eEDUV1CggfXoXdWPx7VoDuDhSsQbdmcTxpq44aoU",
  "key8": "3ZAyhzHpFJLQyZG1R1v2Z5kr5mrANGK47oskWBG5UmBqihxoPxKGEUFYjcstW3JdQkjrQ8GQStH666ZSg52Xm5m4",
  "key9": "54t7o8Ug9FX5Z117dTtCvRADshEgwhfi8ypSNqpiKqZoJD72HnvPQLHdeGXGrdYFPP4uxfBz1yu8Kjig8U6LXxMm",
  "key10": "4mNPkgAAip68HrsKmwncmdRxBmthYUhFFJnu6TwpGWqAU26s5Y5pVezGuP2mmGbUDc3dbQqbat7MoQyHacMsham1",
  "key11": "4PZaKT2QWBygSqi3RiwmzVzw5QXA4Ytm9mB6mQck1scBvL81rjPiCqmynk77EvYrXYRNpSgFreQB2JCbbtdADn4w",
  "key12": "2rZnzre9kYQG6M3XSUT1Fz9eCh8Tipq3dH68h8767Afr4pUKG8PAi2vsAiodvmqgBYeeesJuh4ybF2e4G4JxUvMD",
  "key13": "4fds78DoyKAyrUGKGBRwP95qP3rfsHcdxJ4Lxur1wihAekEqgWCrXg7mRU2xMEbCcLMkHKWRW7u5hrhvtfvu9uTt",
  "key14": "2wnxfaWsJMSGAgNy4jQ5M4Z48cVZSiNSJCQK1zwrwUcSk83GFcb6FTREqzWFYxJJL5WazzVA4Zx89iiUCmuH26rY",
  "key15": "4Q5ndb8k4MKuf8ynwQ57z6McpSDuPQqyeMBHqEebg2JXXmoG2oyBhf6n4B4RYbDArfc3Fw3zD9N3tuVNQgGyX3rR",
  "key16": "5jWQMoUGPkqZE54ph61ZEUzaTmhiVScYgQebTQ2apzcpxBDq9SxmUffC6WGfBgCTEZbG2U2saSfDocgHxSWESaJg",
  "key17": "32YiCoiiRubcyS766eMaZdcXVLTUS8PQQPM6DHSZWGsmtrZt1CYWZJejuhSjzZaoRkxKNvJK2KcFe3NQyr1rn42y",
  "key18": "4bV5iaMLCb9UcHH7wYKJGB2NfC6JU9qAt2BeXGWPKvTS44dnGXoLQiiirGUJGSVXvqJFXJMLrCJe9NZMPH4MBoNA",
  "key19": "5cKdpWRXXkPnvQ82w9hRdZoyt1aWYEEnjn2gGvkfGHPjU3w4ixB2NTiHwoPov2bTR5QATxrjLbuxdPuRHQYt13ts",
  "key20": "4W2qwsqyTF3jEiJLXN3PQDERJHVhmB5URQGx1oyMFxYgPBGALvFzWdtLtSyviBjnqcMMUMqiqadn9syQHf3pAdcp",
  "key21": "5b4HvSLTLxZ1QgEUnybSbwctWFKeLYzSLyWGEvvew3Jk8LF7yxNC3bLtQs2HnjpJWkRnFbytEXwqJpquhB3bsJJo",
  "key22": "F9HmnTmeoYZPR2dRZBgsD5DkVakFHJmRgkhiT5hpqb8FmLEFVkQFNBBgpNdSAobm5f4WRH8j8ipChGby2hAfsRS",
  "key23": "2Wkh1FkQGB1mbYfGyonvgBS4epDJcauC8kDT5AHwa8GSh43ch9qHnsbdeHHDHa1xmcuxckW3WhhDZCM8ohP42c1g",
  "key24": "4UVdvtse8BXJVHBDpbJpXLFqDiKS6p7MBAMLuV61MMoZs5aazPg2X1fjk2eUP3Ueiia6MmUsRj9NF8mvFg3oPSL7",
  "key25": "wKdxJG9ddB3iFS3LzJ6C2UpzwJ9dawkFN1USaAN4LL7kxHM1YGtSS4ncvg2VyjReYD5tRhPCoTo1qJGiXi5bgWC",
  "key26": "4J4KknQjQov6wJ3izXnfQTgBCsPzDFQfUsBhUnQGZLCcWP56H455oLYV7ydEMc36NppN1VEeEng4tqqvgRquw9oK",
  "key27": "5176peVd19Eua5D2z1HYfcmC3UrMopn5YkLPYJvKyVTt3WXncPoTA9UhEeB58kH8WkMz6EawhBopMhkMqrWsLaiW",
  "key28": "5gyMvgUiQha2iYtCTwr3DAhHQpqdU6Dm5RVbYhKAPuDjC5GymqbNottwXXoHnKmdtvhsfnXRBHMBo8f1MRh77KHk",
  "key29": "4C3eJWKtY3DiDzUUUFCyaiWwm162GXJJdmVA2seW3tuwJ16r8hwjA2RktB6dHzk53KSAiy3c3XhshpqaeYRqSr8f",
  "key30": "4y7QsYQCr4KkkxwYLxofYA1AS7EtJNQ7Drhh3zRLMKjVjy95jkBnvuWcF4YHDrA1vphziM91XKLS9nhCppmEhkFY",
  "key31": "4MjkRriuK85WCS6Ns3H87AA736G21Wh9RLA9kxhjjEcD6wP8Xyz8ViiwmaGP3LUdLqR2CYV3MtMjQ7kArFTKM9mD",
  "key32": "BmLNMvTy87e2H9cnPLSWG6nnZ9h48VPgJYqdiaKfA3wJojWtUF1EKKFrcXDcA2Tq2iH4KJjJv1bqzQsMnNoAxFb",
  "key33": "3mK1Uq84Z2ysrnUxvLmFnbyrugAufem7TAvWZhY59Xb3cbc9qiViBFTaBgBs7K8aNnnf8fYE693mo4SPBXfVhWuJ",
  "key34": "2SHFR5JRFrzdsV15vZuzNWQ2Awiyo2s8GpuiPWj3bbYfwbZk4BG1mX29LNvCabckv9K2dVPEjPQiWhgNA1ix2y2L",
  "key35": "5hgcFcrFhXd5TGwiWpa1K3ave3r2nXnYECmyKYKwFuANEq3kK72uPs6MSerntzuoBtoyQecEPtY7bKcjvPvXoBNH",
  "key36": "51ceMDekgqwc64SdAPoiBbPFLGZcgWRx1vmPpA3hgcuH7qMkVNjzRWj1Y6zeKQu9nhv7TmewGith8eA8ssbbAVxF",
  "key37": "4jpbarQrx7deZ6iifruzstiuwTPDMXQUbAn6LoRe55nYwDFAr8VmJraj2d9bqWzMeYuAq9zENfwfyeF5piHtBj68",
  "key38": "5imXHqJgZSszi9pUM9mXYq2rVvDJERQvvhxaiTjkD33s1sK4zmEnVoezEA4USowdbTB8z3cUrt5DCXDmxBsW1iBF",
  "key39": "syUM66HGAQnXpgJgpeDc7qiTd3fVSZNeAiBsqsiR97MH2nodq2PjAnUt6Tk3KP1CJrFdzLbs1XJ64z4PdR8iNC6",
  "key40": "4gKWfydN1CX6wyJsD8CkQFJTjcrhFrM3YeFyEEggEnoNiCrMUJAfUcgT5xvSJikh7wbiAx5jwueUUsk6thuHzSA",
  "key41": "5WvsqgeG15FhiK5YmuLwiDQg5kPQK2PYs9fqnNimjWPM8wGPuJD6FhcbUPfWJXg9ru9mDyCkiaCuit2m23oLVUvz",
  "key42": "4WgvjiiiFGAu1E4UTvn5zThxsL3LPe6AJh9BQnXNyaGb5vd2gUomUTQWdc3cjF6ZHHE6aWmkP9GkE9ds6Vw7Rvyp",
  "key43": "67pQ5uByr9LXeLCPa7kedZrPkPnHu7Lk4gWe14XiVhdz8nEwYeHsLTXbiH2XHyunMhwWerQXhQ8ffKMgzyPrwkx3",
  "key44": "7To17Z5acUw1gwk1Fqu7T9ne4idjwWA4yoegrXaZ2tUq55FrZwkfU6T3E3EYQJ3LdgRLufqaqKrpqMzTYHFgGcg",
  "key45": "AY8MAzv3XpA2hN9ZkYGwQFnt8iWg63cv1D4QvEjCKm5yyorgrzWrNtV7fvbEvPtHkrbjzzyJ1XY4SUQQbMCyPNz",
  "key46": "2cqoD23aU5o7Wf4WmPdN5PHyRfAKdCbL3Qcr44maBzA4e8zQ8xvPa5CpCpu7tZzWpoMgwJmscnbQeLbtZxuCzVh4"
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
