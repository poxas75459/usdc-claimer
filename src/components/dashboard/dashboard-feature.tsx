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
    "2XRpmXUyUDEWg65Y7bVFnq2Vo5KgDfwVFXUJ2zk7H2WwJxuVM89AkBxR1QbR34moYf8AwLXKTbJP5pNHXRLmYQhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSFap6h7KfmhedbhezWy21ymD1vHC9j7iGhmKn13fqtwq3cJNoKJcUCnzC9neW6fmopgHzTjidiDWB5fK85ioNE",
  "key1": "2kv5XnXMdGkEX6SUWDxVrxHEExk149n5eTyHVG8Zo6K55nQMnrps9HTd6fSi3M7EiagHDkqwhdFC2fxz2mkF1Wfm",
  "key2": "3EsSSbrLYet8Vvyej3WtgQHJ8TcL35ZfjXm9yRFJ1FcLFxdB3xgXiErsuJxbzCbUev1WmhnQLgT3e9eo5cbS8B2B",
  "key3": "4xuXxeUReaXUr6pyco7Cjb5Ggx62VLxtJcNscG7VyY9poGG3dRoePUBooD2UAY8hTCZrx6mqGbyZEe2Jn8rMzGBZ",
  "key4": "r5XTUingEgMXUKYmm9rmBRodZQDZyYoAw66ezcjvXkWoe7KEs1fSDLcK6sFJpgaTj5a3yqKeMzcgktukjCYwgpB",
  "key5": "38EUXCSsFa2DejqCrbPFHMgYzRQvAtjjz836CWnPZg3f46dxLKfERuWbMzFu73FAR6xaomTVwQYuhho2esGezG53",
  "key6": "9XyToRTzyBrUyAHcQGvmV1YthnP5RN2PyS6SFS8ExMRnsethDZ4C9HUiffvTXa75z1XmumeJctYGM5isEri6NkC",
  "key7": "5G2bAHZvhcixkoZpnA9C1kTeY1ziA9JTezCC7ai8gTFswMG5F11T7qg5Fx1Vg7HsZZk5DnFKguEcx44bGNfsdHNq",
  "key8": "4By6fToXZiycJDzsTAiaGuAygppzCHnzKpFF9HLk2K1kZ8yk7CPfxhBB2npZNFwnfM97cyyNHpAaYgaDjg53JyaY",
  "key9": "3hDma85qWCWPjn1oKHoJqWHgzox8icpuoVe5zceFwPXv9qoknS4z4Kc6JBzJPHjXz4Pq5NEkrUGciY45PoeZA2NA",
  "key10": "UNL4qYGBPgiFHhyUmF4NJEPSnbAqTBgpS7qsbZpsjBiwjL6q77djyjb734pZg8bDGBBPssTgXmG6EB8dTrarGMY",
  "key11": "2yUgq2fV7qk9omEWLtUjDVNhC5G8ykqkRCe9qe9wQKzdxj9L4ddaUqze22wcuTzTsM2csVCB496rUFiPMLoixcG",
  "key12": "5B3PVjrKJVUyGFKs2DqvdKW89wsBcU4dWWAGfiSnEHhX6zb8JFzyvBAeE646JcvAhDeGag6XVxU4XJvJ9RaZXdJY",
  "key13": "37jungbgeU4a3oPnrcfue27MqHWJzerkEPEgsFBkjRv4YjtTgUeUkHRyHLwqhyPEVPDY2ZRveVCi5MmaubwSRpgP",
  "key14": "3aQxue1cjr5x4TkojrWnGxp9aKcZwbU8X5u2CSmWKB8TpLAK6ur5JSU3Trw4gZoykjYPFuwJAaMEf9TkAv7UsZ9U",
  "key15": "3u91SV65G3cZnGgPZKrGA53AbxPzuudGVxtLp5zJuYES6CsCgntcXWLBduwnakQENZ6JvmoYNPHoA5C7NTSwVbyn",
  "key16": "GX22gdyaeRrC1nt3G5SgXUHGjMgvUDgCN9g7SWcpDvpiUDGL4cRSRF7ZGUc86UBAnovHvn899yYaYhyC1wDhELb",
  "key17": "67YY1co1PDu225RAQuVZvqqBwZrvmUDG5Y1rcLf2MyfKf2NLTvjmzASry9tgLCWrYL4oBsjqPsksXTbkDgmdP3NJ",
  "key18": "2p7vGxdbW1EyQpdkpxraEar3mrF8dQcFjEEbLFPwRusFJRck7CwZdYyYv4ny9YVyUSrxADdYVYie33KHGXccZASr",
  "key19": "4eVxAmfzGgifM37QFqKViFLW5zwKhpFZ7qoPCJBSc5xpSj4Sg27Eye7twGh97ivyD8MGFcD6er7BqdmFxane2GWU",
  "key20": "3XCgiF2tvnzt4HvLAHD7usuZWySadFibcfZ2o8gkteghCdrhAuQj7jTCr3BL7FxmX6Vm8MDKGHMrX1x86inmDu8g",
  "key21": "3HgjVCp7aRsJiSnEwfbStPXe6nCNtkdXppkSwHxewbu5i5fgwywaKXGC6NdY73oTqFMg4VXXPHbSc6XMReFpiR59",
  "key22": "2zL6x8bmsNbG8H4kYtJWxSk7yDU4aF8aAegNF6fAaASUMAZQVbNf9Gy5ZsXqWsipi5aQpqQkFb92jBrQHFPNqfdp",
  "key23": "4koWpSt3uqUiQTYKWQhavriDcomEzFyj47B2kahxDE3XXjXKE2dSsw5tQsxrWJD7CxgJXvy5qJFKEwwVmAkiVed2",
  "key24": "AGuYAQCzEoaWGA1YGviWgSJJ2ATMaozuKWwmbxYgR4rhq9cymHAMiGEhBLcR1padi6xd2MwAMYRLHWSWxn6VoFB",
  "key25": "2sdr7zxh4VzvZfDzUfati7GNL9AESqXAj2aRtuBdR7ubUDctHeFN3LEDZdMWjiPGoZyfQEzGyoGkKppTYYWFZmpY",
  "key26": "4aJEKoKN8ciDhiVxiTeArLgToREQtpmYZG6tkoYcuVUizyLnPthXsWBLcHBHhYV2VxpsfkQBLDVCDz1qU6bjQ3dj",
  "key27": "2wib11cznGgk1AoQofSRLfSpMFLyVLjyN7uPtfNfJsrFpR1FaoktfME9qXdSLs4DzxiDwTP5uXmF9rFjNkVzZzpN",
  "key28": "3krMHiYkfiQJQ28JZ78XDwZes8sxBiSppUP9z7ewG68E4G5kYBVGqr1jBEQCDGKVpZkhKinaJA5sb3bEZU8aruEW",
  "key29": "3L5HErKcE3oY51S7FKfLBQpVkyFoTvVacfp1UD3NwgF4NwYmhLKVz1Z9iYUhMiqxpoymqFDMpqvbXeAiKCcS6t4G",
  "key30": "3bPXxJXh9RanvBmMhkTKqRLHkNbrG6afEYhpTXDQFEyceL1HZVxiUZNDNdqxQfCztJYSuFp59z76oHrHzB1WmgZa",
  "key31": "4dgKEmZdVS7panshLXfmZRG7DFbGUWhHFqNJoE92P9rJNdrUR4mCnVdndwit9pRHWeRMsXxacFwTyDgLbWztN9AH",
  "key32": "4uaXSRiwysbErn4zdwkLSQ9X3FR4S1SUfJpHR8BcYjxbnVyYurm8m5PttNcV3T5rj4dy1ZmZ231kQxbF4WnNCxFr",
  "key33": "4qBsdhLT6yNciWTpQDCUGFiSVJvMHTRdFuS265wgrejwUqnVHp39cNQSygAcXe33mizdj3AjcmnP33sL2TBEPW7d",
  "key34": "5LBboESMC22YkLPiopz9zFrgotuPZ16ps9aPkr6pSosao22EpEVqyCARSV2rnWrewzkb2xxL4F4xfi6x32VBVHkk",
  "key35": "5zH8zY2LkpPSzbckqaY6q2mukkSS1eeEoDdW2xbxiRDucYLrQXd5tmuP75ribHS3u8yUMhv4HoaU5urBWzvNLwmE",
  "key36": "H9ij6naVotSAU8e242QLrVS5rRXZWuPz3zBUkWB7747BssXuVHUk7g4ZiBfyGTgvwojHmrtiQZWuR7rw3irz5Ce",
  "key37": "3gnPL3z3gAuCuGYVViJcb8MovQMcP9sU8aAEjRwq48Jxhhm1XZaFKuhgw1fTGz2LEnwybjdgQX6zCXeDDKZpNHE7",
  "key38": "3peS5yiVX7rZH97jZ7Q8z8Ym7PN84HCkn5itLk4orvtfHXr8kqH9pMGdckkUsUjPM4sFmphWMrEEni2CEQi56hwJ",
  "key39": "Xm8VULAxtDdhjcWXC7b48gQHFmoHh13y2Mo7AS1KcrBKponeq2Z7geZYFYwKBYwhiJQijR1qFWtpDtDS4DTCcZK",
  "key40": "3Ey9p2imqwdKSfbHov7HmCe3ztp5ZbqirDoGrHoWTZeMF2CrziiMDyop2ghzrpsUgtdmaJoUKBp2cuTdRgVjQ3id",
  "key41": "61zJ2KCmZE7nhPJUEHFaHS9Pv4U8STL87HdvzgDkZoBqH8cwL4DLVzWdXVCK3iFRM8c8hBGcZrc1Mv8oKujXXDvR",
  "key42": "5aWMcAEvWweMbADn4oYcynotumEWqj5Ud6HndnLsS13UUxVMk2L1DJ4g7wq6Bn77Swnrne4vFyugAqGgiuAC3uRY",
  "key43": "38XYbHtmrXedNx2MEy11x1J8EeUXeUkk1C89ZyDxP39cA3pwEc736Ex7TjFHrAZqEBVkB18BwtzjvLsbN1yBDpyf",
  "key44": "4KVKVMYybVNAvcBgi5G4gU1nGKRsTySh49qaoytE5WULwysLrxK1Zv5DAdXzHBisi3jPkWNzL3fTeKg7QmTEekd7",
  "key45": "A9YmJaDFKYTGMix6GatUNaeULrJ9Lh8AqcY9onzMK37vCDmW5jXXs9ExDdhcCL8gfFEuVaQd8oiNfU1UMgX2FBR",
  "key46": "GX74Na6QieDnwpHDcVcQAbJsieAUjLYP1tHyAEMQYCuYd7h29Bd7UdYAHgspDV2tbw2wKjLW8tAiyy3kHd4KvGd",
  "key47": "NwnfPq64EXCiJYC6Jhk8vxXuK32JTDdCrnqGBymXs6AaDnREYWFZgkmm9oKdyGKBujMM17yiSzukPVEz3fRH3Aa",
  "key48": "4p8LSDf4oRYaWRyFeLbg9DVEnac1AQywKSpaamgNiYtdLJSFh9DJhBtZcT6pAtUQPdruksNJNyd22iY7QRG2ytzd",
  "key49": "3DHN1vK7UA6MnmDXQGyz6Z4iwEE3LrgELfNv8Mk97kiEzLQLh7CLsFh73BK7xtWzyqv5LsCqBfgDgdn2tjDDZrTx"
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
