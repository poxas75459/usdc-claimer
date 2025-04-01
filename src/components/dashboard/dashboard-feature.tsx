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
    "dTsjjWr2wD8cUtF6CfbyHyUGge9scVDAEH4VngFL9xQvGmscyryhLy6DgdydmYC4rJWJzU76XvbvkU9Kroaigmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z56qXevsNKpbLhUEgWNieE3HLBSzYX7QwTgq6amSt9Eg9Yvq87xJyfTr25vS4vgKxFHr5E5XernyaYZDiQiBCp6",
  "key1": "xmjGF2XwNYTazLJwcX8hNDgJpnyexr2YHqj7DARtt49fVfyp9bbFQpMFYYw8oddHKrNx9mLJqzFKfHiHyLgQSVS",
  "key2": "5KBbqH9bnc42r6TRx1TT8KFX7AFGzoTBZDqWr8hQi17uBtLR9oTw22Vg3eJf7aowxJ3Bot4V9Gks73P5yPj2pGns",
  "key3": "5yPME2ndoSVjqwkbFxBjQLazME2WZe3BFwaSwudKEJDJHhnWvDM2N4FiaKdhgrwPNAGdAusA9smrdYF6hsnEdrCH",
  "key4": "25yJPMXEnHr5rMpUN5PtZGtMhUgtkX5ee4HduvkZnijrF8YXKrAMiTq4UniUT37kWq6HPxvkzyXDCeXY8eDSBzJz",
  "key5": "wRrYwCL4nm3MdWjPjNwAMVVWLZaBqR3tRBPuFi75BGLYz9Jvb5kVJ147takjNAQKZiFde5GJ8y4bNo5SHFASENF",
  "key6": "NQRpPwvayX45JZNnxKRQWjePs7ZUvkXgzX2DsnnVwDYUUpwo9EHeREDBysTEX74gWc3UXEj4wqrV9rsCXF7G6EH",
  "key7": "iSYUzUtAFcS5oMNGuDeRgMxLmmtWmBPsmA55eRfJo7wj4MNMs7ptHS3H75hEyXLzQ1sqbryNhyCPhYo5oiNRJsP",
  "key8": "2Gsfxu9CJXVZg5aW9qkw9T657STgHswTuYLf29i83KbWB9AXsJ3MLdGJQA83SYZdeeLCP2qW5cTsX5HbibFckqzd",
  "key9": "3FS6qWfk3Avdr3aQzQs3oMWauGgA6pzR1AJAzjXwvEEdtjU2htKutbzwuPuWoDRxEqG7R5JrEG4HLn7iJGzZ64nK",
  "key10": "2o8QGFyLHq53PirBsXcX5e9UeBeS2ZSv1Z8ZvcxTEL2M7M4dq644TU8MxozJuf8mRiVWxNLDdi3kBCxBagUxviSH",
  "key11": "3Tpd9uqN4tfsodF4wA5DYy7UkmUaKSZAWf6Unmg4nBq7Sbhc19KWXpunfHsyP6bvqmNa81tL6QSaDVxrjstq1H3W",
  "key12": "39UcM4yN4yW4c54yKihH3QJgdLufCHvP9TBCNVci3xyif3VNsBHpFKAKrhifH2HKwFg8KspWz8n6xMyefcSgQY9q",
  "key13": "2gsMqxJaGAayaVuuFavnahYamat6uECcrNAPEFSCDUokesPFkVM9Yis3mPD3myGgyCp76kJa2XpB8Dzzu8n8GQy1",
  "key14": "5oPCW3SJMHXAsvkEQZMvx5stJM6w2PE9GJPjY9D9A84rtk1h7L5Bx1i8ZrNudyVsD1R9bJNijNZ3y4iZtPoGbSN3",
  "key15": "5pTSqA1rSXgmgNEEFyk54DLSTxibSh5qo7PLAiWXDXvG9Wwt27wWN84DoSMaXA34oaLAkfaiRowL2QdXxbYhBqEC",
  "key16": "38Q7UXZVt4EhQUmmG12UCGwcRjec6GkFjLxSd5Lvkp2ryehpWCL48SY8eynviH2oVLpnRWok1UvjUPbWrkTu1UiP",
  "key17": "5kbJZLhUrCmiPqdrVqcSB2aDWpF8xt78T3UQnG8hR1k4DUerMWCq8jBjKiokFbszCFzdssYNom1LXmH6X5pp29ad",
  "key18": "33XDtkspEyxjptKg5LUmjoaxgL1j3VuoV8nKLsVXg44sC89Du7ZeqkjLWZU32Z1mCtfMzVd1KtXJT6WSbMLXVMD2",
  "key19": "3owCQ5pMaLQpAhtWynP4seC46oFa9ogELMTVCfZtVAm3LBSauJVywErgTUoSCmKdCs9Zex1HQqe6RnUCfurgVJCH",
  "key20": "64kfxtBwyV9S32QJfkr5e3eJR7Cpd6gm6SFSuPNyWmwRS874PBYKzz4Mvv3Yq19kssiqzbZrGA6NuXJKjHHiLkaC",
  "key21": "25QGYesSmJxDrTz4YAK4RHeKSCJ3fpAxL3dngMBT6PRNUYdf44AByWswHmS9ctWFEzHbcNKAygbgxn1MrrgjghNR",
  "key22": "33NTUAQVnvAzHrbim1t4ugqibDNx6LgA4CJowqE6GEUAZzKYr9kEQ4ceS46vPuJ99afYdAESEwRKeL24ejEM551p",
  "key23": "2rbu31t2EYfzRwEMmF3YcjC8am1Dw2EzJJc3Pe7wmdDmH1ZsDNBMgFUXKjEiYhD1KZVE2jtfpxXbWNCf42JPG7p4",
  "key24": "4Uuh4RXcPTCEViqDK2fG4EtKd3TjE2EmFAwNcxsTbKfnUsdVAGEYynE2m4CUGdDsdzqWLNxggeuaPaJnbr3AKfE8",
  "key25": "3Ts3LjaQCYa3Yw8wDdhMrd9t5FGi4TDaWgvDmUfkDBEMA6EzRPaXTqRC5VjATrYHs8agL6fm8JfamShoYTgQyAdJ",
  "key26": "4ZWiFRPJW7kvHsZ4k9mPeBEzpie8xRDSi2EGecQkSXoxxUC6UFD2FZ9i92b7JnVvSC9KYCnLCDUEzi3azc5smHaP",
  "key27": "4PQn9izAiDkm6HBYuEgXYHrWo2NDMGZuYs1j5RPyCs6NYWm57VyyPAiJtZVpvH83eXTPmFnuMiAyWomTFu9jRBnV",
  "key28": "4TzcqNe6pyiMbsRgzx73YfoenZDdmuzWs28g3zAx1xtD7wZYUrDU7UjXownkWcCgJjfZCggRvXDaipGdQerBK37x",
  "key29": "wkzmJgZniKm4qLGdk5DhcfPxdE5V126rGmyDrhWX7JNU87k2WVthPbYxq4re59q1mYzLNcSH6yiBp5vrFdx4gr9",
  "key30": "27czhmYRLUUtDbJxc1jkaE7xxtgfCFNdfFxerDofkjgXe4biXwWg2c1iwYymbouWQYQiS9q1gJxFofzQpuPWTVax",
  "key31": "2MV9WsHWaoYkw22hFNssEymdaXGphDts667eac8UutpKN34o1sbErziPSxkVwNphXUq4nyKacuWmsxtyTkaqzxs2",
  "key32": "2pv9vUkmwtaJB4HeTi8ViCrcaoTtT5qBEt4B1K2HnV2niCcqVMM7hb4DwZrA42WXA3khomM2XwybrsEuMPnbKM2",
  "key33": "31H27xLjdKhz1eSRr6RBvod45YMkJF41bk5dGneP3ZgxQ2k4hN4vguUu8bQVD5fwm59FtWi1XV6hhYyeFCaNii5b",
  "key34": "5NyH7wxKbfY9P31UZ7jGNRAPqeA5ZV8eMD92rtC3sgdEKaz9GN6WXgdebtgo1Uo3JmKkMX5dSvbJqL7pF5oREoLp",
  "key35": "2vVbhComxSXiAv1PuiWenwLHdEyu9WmsUNfuHGoCB99JgkoF12tdaZoM6LjEho3Tzo3vn8uXmnnRstKC9K1Ea5CK",
  "key36": "5u8v8MDdoxF6Gbx3JYethvL47b1Z75i66gZcFeVSR3Qc3QG9Ezcd5cTKmZ4LdywznBCtDPb6B564SrYUBj1Ty6kH",
  "key37": "QXhQRUN7gKw4q7vwUWHsFCF4ygrA9kJp8vUVmMbrRHqWvrjDowZsjUpukxzBDCuGX8eSyciq3Pfy4XautQwL2Tx",
  "key38": "3WpuUzESptzspatN9VbLkqW6L6rqz6ZEnQsKcjWuBvBWCHpx9PtJhZWNzZ6ZAt34h1eAwpCcxAqUZ97z3NULZBjc",
  "key39": "2f9AfaHENEtunQpTHAaPX86NnnKx87HguHXwXfdrK7jtGBbKgucA6jiYAGj42yiSyQ35XCHfG2yK2SeSpwwEan34",
  "key40": "4u2PKbKVhmmxZrdarNjSZiMtCP2incmsHssEwhvD9F4L3QBGs3zCCrGqNmwZFkV1a8JrXW7MgJ9yZoLZqLgwosSX",
  "key41": "Vhe3Z6FkfbN6grugNSh46b9h35ZinpGcjgB9yTL1zrfqxJ15kU46ew7aS4L3yMX3aHLDKVyD5VecMPgfRnMztbG",
  "key42": "4CUbNiMX4rjXQFcE9ZWNLks44iZqBgkRY6Vd8Wixk6UXJq3V9GT5fCVKmREJjBmj1mKi9bZ1kLQicKjP7onbwyQZ",
  "key43": "49xdzwt2n4e3mLX5BXEKcaMNxwhm6jjxeDkbmo9YdSoK7RV5YR1ybLDomkv2tBVhY3NNXqQvbboQEPvgZQhZp1A4",
  "key44": "2uMwE9hvatcEqEakmStQtZUkPuxU3XM4ZGX7us2gxQV6GEpW2Rog74wsdDszEP5KLJKbGPeXkHDWxUbhCdSA2yBj",
  "key45": "aorHewYktbJDX3YfAsXjPEuNtdPXAQ2cD515VNnjPANpsnwRwFn7WUY32aW9H7szms9T2EWTTtWxuGZv2kau3xN",
  "key46": "55NLtfV5QKwT4ovXBc8MiqwyAkPSyGqMBvyodVA76wegsSYjCnnbbUb1K94kEHK2bmqxaPxqkM2ud2nmb5fmJqJp"
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
