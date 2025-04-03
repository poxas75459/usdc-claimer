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
    "5g9ZDbcjJxmt4Jot87hvUAkDYXEQWpXF3XEifpyuSDkx74u3pkmJ9vkCcCqJ1rpEckjdeJB9oLFQKkwF6xn6Kxx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijpgrQp675pWZPznNfNeUbA7AnYHTMAeA3RfEe5R7KHajtcZ8N1e3zM52VyG1gwEqBQCYMBan47Myua3wkjHQ2e",
  "key1": "3me3UUmEa7UgSatjaMREUtfoeVv9Myb7M454sL8fh9Na6uGwz3f8TUCVJLw1sqzv7Sbt78c2dCpKF9vqebdzcEDn",
  "key2": "oci1FSZAsgiPhk2LzyDkmAJw1mH53ZPuqfDBW17EvqSxsw9htJSqafFTDhfb54ZsmFMVBWQ68E4VNNka9BQBGKw",
  "key3": "45ER7ush1LMCipcEo8iorbiwztb5erfsrcLoWCNcJifyskoC9owVRrXNPSktwDKetTs2PYKGf7Gt5BVHTpRYgPZi",
  "key4": "3HZsSBDDCmLjm1FP3Wiz3M12fqpqUbj6TaJPVhSomdBi9sBJnC31dRKzCH5aR31NW7kES2WLmcFymfpmCftco672",
  "key5": "f4gC1PDqfZ2mgsdjC3cSQXAGEnbtr1g9mBMdiMS6zxwJuFoZk5TbuC3JEd1ZgfnB3k8MSgNEm1RHnXeyaBMVsyj",
  "key6": "54eSj66zLxD1H7XVCwceT34JHXq5wkZoVKqqZj633Ugs8ARxmrWdKdRF2MhFYF6baE5uWrGH4utNiuCoojRbyDzy",
  "key7": "ZoMnQtdtcKy4ubf5X4JN61GqJrjmSSS7B2qYJzkrW7ddKes8Aw5fBrznAAHnRSMbWFprZDbrYeuM6LUhefZR3jX",
  "key8": "JH1yTP7xRLtNMwcdjkRMU3WYSyd4zAbBoZFsn82UAvhGYt285egXodkjvij1RFAMR6CurxRzCN3mjex3gau5W93",
  "key9": "5sBm4fT65wb2h86dCcLxdssgimy4WsshXFymE8AotHq1oJZk8DEacjrPK4JASjcb1mYfnAExwvToe3YhhcGGHCv4",
  "key10": "4HBuGicUtDvhaB5qGGEMd7KMJZtQHWkkhREQr1A6zawA9CTf9uruzefwR6FSL4Bxn5e7CsezbFpJwF3v1ixSNT1J",
  "key11": "5FqSiqEp6fBh4AxGXzfZC1SdF8fK191kFckSbKwZnbdWdVuFbksyG7SextDSWfn8QLiP5SaQcJEbgHvpPLq5zP3a",
  "key12": "9PpNQky29DvMt4Rtb4zoQfSS9sTvXBZ7KqN5FCB9QpXCRwUmm8QWqaMxeS9JgBvsBvn8RJxWeu1wwzFuXmPprB2",
  "key13": "58xdxiLvYrBF4AsdyuCjvhuwcDBqxXbUXBHgenN3tS7q34Yoy3ts8XRvV62tk1xMNe1qCfNkZNEcsdBx4LVtf7rK",
  "key14": "62HEfHpJQrFPXhD3gCsBcrUNcXNr4DL5ME5VEYzCmqwC2dRPA6bPT8EMkCnZ5BUB4qEUcKj44ZyxrXtxJwPrcR94",
  "key15": "65K1NGtUD9iqo5dqv9783AiZ2bXx2e4BJmNG8ZJ1PAGnWZqytvTF4HM1SFwrpTupDh9VxkYKc9UYhZXfcJnZqUUu",
  "key16": "3mXjhXdkjfK9B6HF2Lku2tCwk4RXKzaBRTWJLvqFnVLa1vxo5zqkwG8zHLgXGSVzZrKATuLFD5WccJN8T9ug4joc",
  "key17": "3dyEFpZJfwqcDimGydyc3cd8gCEdcvVK4dedhZAyJy9mBKy7gSvWCubMsTuJPwr8fz7g1oer9UA6rC9SAmpYe69S",
  "key18": "R7k1U6YRxhAW2exwhm4zQBv7VUtmb83CozeaV36uedNdzYwk6xHHtofmiyVqMHqXcjWjTvi9YuiawFCMnwKUbVy",
  "key19": "2HVUdbvuceWGgnxJSfURxuayWeVAaReYNoK9oQh1Aciow4ud1Eh9pEKJ66AdVouD6Avg3Eows1y2DEQKEyKpYsn",
  "key20": "5S8LuTSbDBTefH7ZsiUoFzDiLyyvHDetGa4FMxskgduSgsSLWyNUL4uNBpV8QPNTNrcHdHGi2Wm3vXpgkT7KCVeF",
  "key21": "4iswbEauNn4bSNVAPVVzGwvxnwjncSGPZwE58QFDexp1DBW3QPRwwgrcpu16jrv91LKHc1ei28FHmce8nC2eejgq",
  "key22": "N7MsD9TRDKax5FTGZzW8ysQBLZzSAis2dzpfXxWgr1J1w7wWsKbvDcMuhdn1izHQLQ8qBDN1hVUP5Qc9ivsnQU6",
  "key23": "5VxYp7jKfpZJsJwBFrGJD19BorgBi6e8vk6zNJBCQn1CV3yeTdQo1iHyXeMuFYqb7u6wDPqypz1THYCc8uu4x6Gc",
  "key24": "5MdcC5nCdib3oXk8S4DKisAphmhwJ3PxSLuffVaVhJ5rcAexRoeCzL8rUfVZb47t8iW25t7oLNhPaGJ3PcmAT794",
  "key25": "2JXEYZY8Ke1y9GFWt1f4m4uUVqcGfRq4qzKyHpkuexwsXHyP2RugKMYf3zvMHspam8LuXCdot2R3UL3WXMdBUu9U",
  "key26": "4aAeK4YSuSmkaQyM5F2vDcy498qV43tqJaCBTxLgq3iuc9FDkUoHTwznu1eotgz2WA6jiu6HZUcPzH2uT5kqcgnD",
  "key27": "5MbGMZUDjnU8UhvDQrdVr6WzKuSHLwmZ34U6Y7P5LAbpDExHseWFavYsuQy5ZMRz87LgdWGGj12Ed1yUyHx8gUzX",
  "key28": "yqX3qUq6xvCbQGG2ZTsZs1Lg5xnjEgax1xPsAmRqy2F7ZoFPQTxjocLPWwLLqhktohARgaKLSUETkSEkeiQJbPp",
  "key29": "q3FaffT8gprnQF4qnujTZ2spBXwU9nWrNg5DQSV6Pi63YMgLqhvwRwXHJdAvNz6DnR4iJK9dV83zCgXq2KJkmrt",
  "key30": "5US4zrvYQCNrxx797MaiMP9TeLVa9aHjeS5TgXGhFEcYNmGFyNn4BHmZQdCN1gnNHRTdCAKcdjUCpK4Z6GUV8AhQ",
  "key31": "3btzJY9vnHCLg8dPdGUqYtway7CrcsYNGqkZVoBTbQh2AN3TyKeA1CUKJJBkDnQp1K7JEFCkuT4r3wHosvDHuryq",
  "key32": "Dtarq5FbWaos7pwaBVrhcvJgXvi81NF9ScoSYosm6yWk91qvftokdW33uA9MiBjutV6upt1U1Pyn59D5jUruAsB",
  "key33": "5Nf6tz3ME7ixBqVMrP6pxkDBvSePUKWgcC7Gy7YzNhsp5CPecGkspoQ5gkLW2hwmvF9vmrSAQkQrPEAM9LY36JZ8",
  "key34": "3QHBh8kw1hNmTVC7stnEZF1M4n8fR3yLFbPJhZWzheH8HoyiPMDzHegQaPZQ2Ywg35Z3gBi3e85n9foHUHtReGBT",
  "key35": "5DtpTAeLiwSjwpGYxCyrmp8Q9sVehfYTCio6t7KadaWM8xqzCX7me1oVj5qna9F5434hjxc6MNj5BHAe4jLDhoCT",
  "key36": "LUxPNBYNezG6nB5azLSHcvQggo8SPt2Vw93cuEaJbWa9AGPyjjsHfeUBtNaMjq4GCtS9LxwoMpfu9Dr6uBdMg7v",
  "key37": "vW4fKF8DhCEZAgvaR8Mwh6UHAr8JfQB9EmUN6z7R1HGnMRmLcxXYJp5UmV2QJcT7fYyVhdCPfwqvRazr71G8esE",
  "key38": "eHVw837oNjvHECgW42dUnCp9xrE5iK6gbDKn3fL1ntgryfYBymMeLGX8hiriJZXN1aQ7zEQXfrgZrughjNuSHj3",
  "key39": "LzBR97AvzHLPP9BFzNR35azb7Khcr541QwZto5jnugDRpvwAKiXL31cfwM9ErCrUYqGMTwgMs6oFqtmuqGg6fi8",
  "key40": "XH1g9H8AFk915vBGQQzkm67WS2YE3Rh1oPjezdoGkrx1menGPLXZKNHVNVtsXo4nzDoeBpXdgLLKfaDd3QFzcZ2",
  "key41": "5S4nHQYcmiLLBhm2zsmUwk138UG4d9jA5aSES9ErqkMnBv8cxxgkAdtwQjP83JwEGgVPd9QRfMCAUWS7r3dKFZuP",
  "key42": "2YdLNKzuKwZDm6WsVHCVZHQ9dp6iKQnhx2SsYptQD9tHTQze3Sva5kzeTFeD7crcGBbVinuu4mqi9nqagvKKEz3x",
  "key43": "3STyKYPR9Y4BaMVoi3GKBrppgPfpJd5mE7JEpJJWSiTv5PSFnANMYt35SpZkJDWhFSGAwo6A326vBjXsHL81NVV6",
  "key44": "5jn1aA5gW8hGS76zn4YtExUDQmrsu47KrpMtY6GrTmAA1wnYGWL6MUY19prTHJ9Sf64QZwsiUxToixcKAsSKzE28",
  "key45": "5gUF9ZTKZoBqb2BhNpkqRahBPX1xSAPXHQWPztMg6Lhj7y7mLwjaotyaWTrMiD3jkc2mitmDdtHRjuuZ1ZuL2FQY"
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
