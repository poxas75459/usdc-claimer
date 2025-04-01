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
    "5vuTXrWYCFVBZBmsxqpUTJ69mfsZ7JLeWfbE4Uaejqjo3sqokBkXAZ1XkacvYtmcey77YMn5fzdNgmg6HoGcd7DU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HgQGKDwPjdhXhSc7Vouk9PoXdEqjKrbncUX4kqNP8WgTZbvS5PKGYcr6JpqEPQ6hjttEHZb3i88Y8sgiF3J41Gb",
  "key1": "46edGfnPQkyx91FK3hEJ8M5LSgeX6KhQ2ebykf4iSfkz6DfHTyscoPSkEnjdnDfh2cBqv95mJcJSyuAmK8vUnF8p",
  "key2": "2tdfZHKAfRrJHUr5Lw2iB4s7kiVx1AofA1arLiUxcpt6Q5Cp3ZD8ZmQiBZXzZK97THRmxNQ2ard4f8GVaKZvyqiN",
  "key3": "4a3dPL2KNTHyWy9E71yeGmigeueVrByH4mqsiUWxCDVC8KyjgWtS8PwqxV2ngE522WnYGn6LZU6MMmSovFV7eFrp",
  "key4": "5MJoxh2JHU493H4gogTFFEu6mxeWtueSFaWY4S5SKG3NjSmEyyKbrmAaz3n55LLN1cWAuB7U19jeFop83Tqxp6yx",
  "key5": "36fYLEqvqPXsWioq6neFyuyJDnt4VVbdsLhLrRCkWsLaepoCBBn7sxBMP4AWCcg9nmX38A5RQGqxEo1bhmTVSMEt",
  "key6": "67C66FVf21fWrjNbzJbMcDabXTpLQZJxArZwsd7J4Nhv98NM3CS6QsYvefZbTpCvW7Lg1reL9Acs4aJ6nVJs2Piv",
  "key7": "61oNVesG3hY61HMnsvWxc1nh17SFsMBjRtCgFe3qwopyCQ27fMpgxfacQ97k449GDdB4K1u5SJ6zee5vJAUvwvAr",
  "key8": "YmXDYigGeSWhJwpbTULx2EkghKSJ7v2ioDNT3bTCHnueky8U2pG5EJ7b7gXdeCu6S2PN7QeVPXDK29z2sEyvkvm",
  "key9": "61JgjbHUSVmCPoR4Zq81xNRTRW13BN7cuZWr2VRG2d8dqAzVhaq9ghpgx8SPwFdvw9Ux8BFRNK3XLsrb7wADWWHp",
  "key10": "44yHMirFBpQb1g1g1R4ZPC1XYaEkamHrVJm5pmUcovYiD6sDnm83M4sVZi8a2fFXLynuuiLEYyoFcLM9ME2u8E11",
  "key11": "5x6yHsrqPaVLqx7uXe9JaJDrsRooL8R7DEbBgy7sJUduv9jykpn8pLf9JvJcxyqBDHGyd9aGRS6R3z7EJhqvXhey",
  "key12": "2zr3iNBMsvjcDZVqNRfbjXKeZ9UY1SKuZ7Te83CobfmzEeUxboyXjhJSVCnSaxwKBbroXwUPBa3uW3G5gDjkSFcC",
  "key13": "5Bdx9aAPTH5xBHy2umay4PMRUJtgkxUZviwoksv5n7oaevxvY6AtKsLpLmP1F3tDAyfwdBGKShcDAFCoqGmW2PYr",
  "key14": "NqZPu59NhGRJbrSbvJVCdvJ8DWgrnzxJ7VgLtaJBPUUeSkXTaGMUUw7yqFVwqiRY6yPEtw32bRghfzhtkwBH3hn",
  "key15": "3b6tHdQdpQeG2wvLMNGhuUzuGUctkyLFXCkYXGLaaTmfhrKg3snZVVEamz8D5MfFcrGnRizSFKy7eZdjYYVJDDjH",
  "key16": "37gbfeAmzqTdi7MmvPYKwuiMqEX7pkJABnkDFyDQT9LYPMRqbVgwmkc2hExn1iyvt4tayBaDVSp2zGiCaxifsnRa",
  "key17": "2xrhHtM2vXRPxCiZTkhP7ZRDk5BwZgKJ9DPsgHkssAcS6RkxF1SnxUry8kq7ABrXvNDNR2cnqi4457grAxvBuCQH",
  "key18": "4icpaSZEmC3s5jGXzejJ11eW7XHD9B9Gxoj9zBJSt9rFJmwd2DgZKn7xf5ytBUF1sWmMthvMvQBHLwANFxMyywgp",
  "key19": "54nBtu7kD5JeT2S8a1HLSjCcQq2i7RHC5H86wdAYHegytb6rPxKC5Rx6NQzyjYJTsx7G3wUsg9ALavQbLwevjB1",
  "key20": "4yGuCz3Ck6VW6CD3sYLJxdCYTVf5rKYrAqHgMAMMTEsK75rDUPWZTuHdgC43uAGNwcEV3hVjoEd6mMF3EQUjRxGV",
  "key21": "3JCp44APoqJgKa1dXM4QtiLsUzWPqEGPyyRawKXgRRPKHF5hRLqUwgKaeWKiUrTH8CrgX64Mgrt2Tb93ii2Sa4at",
  "key22": "myVhBoiPZdPDvCDHgXfLJRHfE8kWSnQ1bwaRKiP8U15EqNxU2HA7YmDxgry3RVFV4cT6XzbpTBUPhmDK3ZHo3gN",
  "key23": "2SkzHSHZg1RhcdNQ8ZYTcXcRM2HhqnQFBaajPnzbUs818gpPG9nndpe1F4LAr9M3sfPEgqVK3YiRkkKMeudT132Y",
  "key24": "5KpxgL7vhGvx6P3NcYgPxnYNYDQ22eraZWJVXw9YdZLW1kwLC8iVjkLMrFE9zhStkLtKFRQLzZaa2jPH1Qhsa47q",
  "key25": "3etCDMbLTHiLqnph7dEAazLaFnMN6P9XfjtWRrFRZAnH3phvsFwU7Gtj8CpHdfT3rVGcDvp3SxrDsi9heFm5oR5X",
  "key26": "39XNqukLm6puBrxMsYtynhaZCA6ouKd4wnfM5tgHkLCU1nDgiyo2FGRpYKZV4YF7azgEYdnactVJNS8qPYZkXpaN",
  "key27": "4gGLj7FFzyV9ceXK81dpq6uEAt3UtHFpGtp1KPPTjA99VhWgKV6VC9NZz6Q2yhFXnkfxdj6XagzB6Kb6NvKzR3ay",
  "key28": "3Za6NoxppghREPyFAgDFFA2Cp4fYgjhSKPgGdCFkFYRrotFcxbkNP3RjeSHGUeaMU8BsL2SRh9sSYdeFq6uMpocY",
  "key29": "3FGcBwb83CebdXJNcjACqFtskNJYDCrjRLYqBcdgAWYuqpBCNg5TF1GQ5QyaW48BZsWaucsAQwtZYQXAsxceccs4",
  "key30": "4GWCqT7a4bwFEhAz4dSovQ4Jk5uAWUWiPgUk6pQyF7ppp4m65rQG26a1v7r5oTpdgEqZhDiaU4RET578q9BoxSuj",
  "key31": "4QUvLFUezQANE7S6C39z3fp78E9puN8DiKKtoDEWK5akTC4wcG3R7zmAkzFku1hiQ1XdZdpxbcEma13QemeuZRv1",
  "key32": "2Zc6EEbQF4W1tShnsvga98eAwnEyWwqJw6N1TzYfum5gFifUSd7Hr9mPD4BQ1ik8k8rqypUL2PAbFVDWWUYWYx4s",
  "key33": "5NJj8s6CkusCxmQKSLfrecJTTdikVpsDAqx4vzzCnAsBnUjJB7Uyaq7epYiYKFSjYRDSXLuLhvvv8XUbLRNEroVc",
  "key34": "yZRBbqsHLTSUTok8FQbgzSNfVk3mnxeB8zx1JMBtwSX3iMGAQGes9dgrdctGJ2k74s86JbJ3KU6x2of3ivnHURh",
  "key35": "3H7qZ9YvLpjb91pRo4MUQ3vFU8QgeuN1YNQpVUL2tTWVike4aEd9bBKjmPGb99HJEjKfgsXuB1Gvpnc1zjALn9Mi",
  "key36": "5YTBQai8SDYjHrg7493GGRWPvFLjHj7b2mD7xQkgBpL6zd9MUcDxzP1kFYxPyAN6UeFaA21xDE6cmCVCVPRT8H8f",
  "key37": "TMgH5FxVTmUEEWbLWAJghD1Bxcds4tTEF9SmNjQPSBUZ5xmkN1sSWVugxoxJbFWxk4yKiwbydZXDKUSEqgQ87SK",
  "key38": "3ds4vPPEHf1DzJmQy8fJL6w1g3UcXFPrvd971wdk6J8Yh3JaSRzeXGRZc3Ud9Q9QiQUWkxWRFAEMn4DWiggmP5xv",
  "key39": "51f27xH7QHVUPhUXmttAYo9r2E4z69jrZ1Hh2FPBUPjdC3NW453Pch5FsWprdutDZA6z4jSp1oj8kDVgdLqno6Ku",
  "key40": "5uARigy6yzM2oMhqZHhJNijuwumFRM4aZfUP3b3tbwq2fxMvX6ojEz2NbTGEv6fS9NNEmvo1fW815ghT5uBrEuea",
  "key41": "uQebJve23U9Mas2P1Ezso18kwsbfchTLYzrUTjk14eFt2wHvZP8RSBH83Fv52KKhvPoXMqgZEYpRr9XPUpMGa41",
  "key42": "5NYzoJR5WnGScjUqwKdnoYMCwfmpkHHyVdsu585bHLkqRyQyZ6yefTj1BXEchckcPsYQEK1yEEPQdRQCm8MG9yT4",
  "key43": "3rZu8oEPsTAc6ZVRU3MsKwu2iUVWJuCYbVvR6dRZgZr6Guwnb3R9NyphCXxVUy8tk4q3pMKkkt1AE7V9gFbCynjP",
  "key44": "3CCKiSPFacjqDt1DrBiSRA59L5Wrj7v1XrjJzxnUo4usa7kouwN7kfxJKw4bWmDjzxiwVCXssg9P13xjCc1Xkh9y",
  "key45": "LuiLhX8e8bkKsr9f3JEPmTnizkAGNp4JvxPMZnBVkgsqauVtfBodgeq9oAGw2BhQKp8UbqrdhSmuK6pxnHBUViz",
  "key46": "4o1RtqQ54uH1QukbUeAbiorZ2LFuiEbaZ7Z15PLuU7o3gS8FTb2CtE3JddBhY4h1DSjRHndDsE29R4M8sKooSsDH"
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
