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
    "3ZcJyEFLQzxFM9KtkyCjhxcAFQMjh8rNea9AxmEg5vgDqr6FDrFCBo56nhb66MnwLTgxy8Es3STjW8CGqgK9LUEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45T7DWVSsW3ig6AktubnHWxqEbfNH5LNd5PyuBwofhikE2rSWnqChTWoYg6h32cFYtDqYsHvJxTx6tBXRwq7QVuT",
  "key1": "DwFxLKCfdAFVviHBcUSxAsB6UJkggRS3fdXRa9GAZeRBZNiiJcSBzeeKZbShpxyzwoRLLksTTCQc3526E81cxR1",
  "key2": "56JT1L11knWoduZuhYrXpk7pfv5MKzNJfXJf6DmVGVemYVHDfvxFMzPCAMyVdvdVjqAWuRpGTJPf8sPG6ZJhbtke",
  "key3": "D2W7Y7VKGFhnCr48ENNm26hBTqHy7VCqsqoRh533YoRh3cYJaYmdo5UBawLBAVTQTztek7akzGdY2wv8fgHoBJo",
  "key4": "svx2vzwBwUs87ySVGZ9t9g6WQMAGGiVyLpgGWZyUPLjMwcMzRE15VcPRUPquDBtbRCLzLv84ZY114Wb1Gq7Hy3P",
  "key5": "296wE7yg2oSGnZY3nt5QzbwTkVk3wi1oBT8nSZudyqd1Bicb4ftdG1FGr5QeTQZ1zXYQ2Ft2RRwkZPAzGcwjD27z",
  "key6": "3Ek2H4CBBb4WbaF58PZ7RrtxALNPQrSLPkXHNvQmZc4ecKfy5U7VCHXvCMVThxXXPWqFkMd7B5FMnrEdeUaTDZ3c",
  "key7": "4RxjvJuV6csQqSj5DtSNJuQePVzEiT5vq8LUhGZYoYTSbuHp1fS1WDbwNeZRLQfFopMYFPwLs8LPSWajFBoWrFa9",
  "key8": "3irBR8VPHvANB4wDJCBhPQ6FgTAwXMhs5pfcZGJLXgKa3GzmjZ94YqDZX2FjpAW8ncsf5w3HBXvZJPEjRbW6jUk",
  "key9": "4B3UrVj3c8hz1C7Y36k6C1SKHVTgLvsvHUy5e9QfDnAN7CEJivpmNZ4m82DtWZQiecEFMaBcZRhyERfxa8j9FRfx",
  "key10": "5oQJXpp97PudCoGPTYYDqrdo8c3haAyQbnPgL7NwxELAojpnyorkLGAmJSGofgAWButodrHtr8oLwFk4d9Ny4jqc",
  "key11": "2ZZZkaxYTmAhLaJ1ZywhEiDRxQyB96kENQgg9gNMx6UAd5uSjLERpubD7LxnQUCsEhmFZor7PCHMdFftC8Z5isdT",
  "key12": "5dCEjBXHSxrhkRp6tNnxWD9MdpMkigYT5Snx95ncGcUeVtmAxafJf4zvo1wNWjV95HQL6ymepw7JPC3wTaEQpthJ",
  "key13": "3FB8ieaWNaho1ecsxSN3Ln9AJEHMUX1gDK6tavZLcSZqxuYerAur8tPJcjptCnAgnF3ohr9ysA5MmKc3G7nCM3aN",
  "key14": "xu5ytweaJDSZr7U7V4Hee7UbUxDgemJ8PssxJvs6Di5TDVo1Z4L26kwCt6seS2HjGM4Ves88q1MLM1UhQHUKfGp",
  "key15": "3FWyogJgLEPF8xFy5JbpK8zGcYUfnTh6tpcgabsnvXmbLGhCKigWR42Rev9Xr5WQD6n34P1Ti4785YNiWedKFnpX",
  "key16": "4jKUNoX9KbBzp3v23YFZpKzcT6Krq32FgGyzfiyhncEH6F8zGJ88UiMii5fnMbsYY94PqBWMaCSCCRe3z8FpRe5U",
  "key17": "3gxDiYMwJ4g3ZM4QS3gSowGK5P79NSxuiHPyfjGQzVP8epvei1iN6efpZ3romGht24KmvX68nBULvDpo2aJ4u1ed",
  "key18": "5b47XVdKtf53cVJbkVBuQPWA4qNofEXCheoTiTUKjTjEfwHh4JGTaMK6ayy82wB2TZZPskLkaJ632BFFxEqpvFtv",
  "key19": "5fDrpP9LmncYK8Kp4bK3ut86gjSSCN7qXAQZMENqNYmtwhJn83piA6CEz5GcPWqP4ZwMFirUAKZkyte8auhgmWgC",
  "key20": "2ZTSiNM8kAFbfXbFZb1eNCdfqaoNgsuc17zheswpt1CRCKn7auaqM5CA374JgmRwGar9Zjs3pdDjJEh1fmVo4zgS",
  "key21": "4h6YdoT1hjAEXw11CwKSxoudS834wgp6koRhKi8owgDpLxL8uhAEE64graqvVwUCvLt3QsbWtDbwpeBmExcR5a6e",
  "key22": "61K728No2ZbVZXAfJ9waXhdFdUvBWUdrxAq4HHgvh8QEb8sVNZQ9CDpp3gviWUef4Y4WRb8jYu5yBh7QGaF9RC7p",
  "key23": "4aCfNW6sDZhxJv8bvz9vvLvZLZF89FZn274ar3aHhzng4A9iQ4ciexJKChbbFQAP6aYLXVK5PmZd6WcAwhBqctvZ",
  "key24": "4dofgS8CxPcZNxFV3rddq93esF5N2d5HS85cZowvQbRAxhm6YiLgGtBzyYWXKnvoTnubsqRsMMVMQU1FhUt6aQ3L",
  "key25": "3f8xG7BCa3pbo9afQUHtM11WN6YkRPGnS9y8QUgc8CoxCk1G5pKFdGz8LanHporZ5REEpqnzedUtf2oXUXT2r84o",
  "key26": "4TuV2o3qfk5TQ4Fu2dYd3v1FTMSYRAN128JdrGBxKDewXAyf6vKNQ8Gcsa4zkuoAQ18BRQS6ZoctsNLKAVo4WFUG",
  "key27": "3EDvArGFwmDHvoLGpcNJejqugmfTzD9MJswLfyKNH6etu9eU1PtNjNcegdDGWN1cZ9JpMQV7AYc2ZrzbQpLMrZDa",
  "key28": "5oCzNJcPzCaRmETVC1uLJeH233Mvmtf6zkW8H3wgjCAykaz5c1EyjD7owcennTDduq3ctqeV2PLBxsMVGEJ7sLXE",
  "key29": "5hjWcc27JKda9aUy6c94netrsarEHXLeHctiSCwG6bGxn3e9RZmXJcn4P9f8xZoU5AK3jXArMzm67v41hv9oTp18",
  "key30": "2X2eph7D3jwJaew7YVWDuba6SZWvfY4UQnvQyrEffLCqDHvQEvtaYmQazSuJdKjvxtPv3RS8fT5WsQrBKmiPQJbT",
  "key31": "1FpuJUfiFojKFuBNRLuYnGxGDvQaKdk89inz1j8mN4GR2Bp68d939RThZeUYfcfAwsoAW8kWWdoQHvrpJKmWZQo",
  "key32": "s3duqDvbiUhrJicsb7Mn3tHjJ2mhSWLg5Ta4DdyzrrtJUtWrJubauCrC9VMsA7sWWvfoPeVqHzsR2ur9uoFtu4f",
  "key33": "52mw6aRUeg3bH7wns549BXAFLFA7oRvQfBtL9sSZUa4MpaQPiTi3RPy82y5CoynxxbTwF3BiHyWeJc45PRtLofQx",
  "key34": "2ST7kAgtjFokhXe21PF5qLQJvEi3ERhW9Km8Qzf2wXbjFidrQcZqeiHHZjLemyaDLYdDCRBF5AWwUgc3ECxd2f2Y",
  "key35": "PZNLsZ48AoymgCrQsCEUQsMtaJzijRvqfopytfEfKEFo1B7MeQb4ZSaH2VonhydpDN86gbfpfRDLY6JUhFQzc4C",
  "key36": "5qi7MbWXQj3NBj4n9CLJNkejHuXXjcHgsdFkH4LtFrACQ1vU4qiHTeHWP4uZnYtcpxzgt6LvEGm8sfYB8fETnhnv",
  "key37": "4XL1SXpCMmG3fWQ3CR1DT5AgFiqJwbKSEkdUfGCrJorsavZubbWw1xFS6y9G2rCpGieL97PV2dkcm6du1jgcnXBQ",
  "key38": "22njdQTwwVxJHgLCbhWDHAJwttzUJPfRqrw3Ub5GNN3C8KNNN78nEZWytmdvjSJJzW3HjNBKYwqMTsj96nWTxKrK",
  "key39": "3M768ybuxs7RHengLFn1SUJxwCyXkgVfy58JD6Xtb7rjt7oibxLUwuJhvbV7uBescNg9hnPswUrj3qT58xFoDkLY",
  "key40": "29otaNrc6uQDBdL551MYv4YVhVP8Nb8YW9yDvFmo5xgJ139vALAwpzrwdVzLakLkuYkiwKfwPJAVL1m9TnDVaX8u",
  "key41": "5rJANCxZdUiimRBWPQKMVrdkd8nUewyv7hsRaAG7dzLJaXWseYwmLA1yaoidLRJJyVeRS4CC1KtD1tMDyMA7Yrk9",
  "key42": "4hT974YhD5Lj49Nfdvw2NqKr5SSjSR4eXWZbWd5WHtPAGQ3RR99xjVQ2EzFsPZFgyQqus9KQKw85nwERCSD8rREA",
  "key43": "5vNsJrhY4TRbFZZ1dGQ8AX2mdVLtTQTRbgEAjvpvLQj3VUBdQy73NhgbXaRBwhZpVH17EB1QEERptXRphzyztQP9",
  "key44": "5tte9CAWvzSoJXxRGszNZFU1Njza6zAvSqvdCBwQH4uaYzjrryYgUpimvsnL4YA4PKtYohYeFJEsjMWSHYW75dxt",
  "key45": "5bujeautSUiQp6F1j3oaT1HgqWdYg9RsutkPr6nSrT2f7F3RPyJXrZ74CsauL4YPhjQSc8HFcCo3wBk7Bo42q6Wg",
  "key46": "NqXmmypcAQe9T58X3AM9P5fsw5jffdx2QBiSnaMFrYn6hfRffCYyPPsNR95Cd3GH6CXww3r2M2aPXUM2oYnzwai",
  "key47": "3tZ2bmhVtxv9RPttutM4kXsaTGT1YesQPHvJPvHjZbW3Jmqe1x3mELR9KQYhonHAvAu1SaLkPNLfbo7LmJth2onM",
  "key48": "4pz1Ntw6VNswqbz3DVVabwVmkr9HA7v8FDvrqRB4xfDMuDhLsWnxsNnnku1rHzB1hxATt4zo62sxV8spxbZLSfMa"
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
