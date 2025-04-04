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
    "5v2db3hTuqVygaWntY9Evnw4FvGfVmzFi4cvE3ipb2taz9VWAmxXnJqPT4DHo9udeA7RyQeYbCJzsPPCnfZswvcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMLy5izrYhpuuiPWodpnPZ6iAWsbncPJTBNZcXNbphJg3vqzziMVnxjRdbZnEvJp9sJ6ZczAU1iNyThSv6tmbah",
  "key1": "4q1LVNhdKjeSBooJna7hVrQnUFwmkMHxkXsRrmX5RprGZhqjgXKj5Xr2E1zScWtJLvhfAvgc54crXMYcdNVoZZ4t",
  "key2": "3WYH4WaD1tdmaoNjNAUpS6gU2jJvsNSz896VksBsJVjrFrCwUCjsrns8jJ1iThTfynxeAtXMEFKLGu9z2rj2dnun",
  "key3": "aiua4ZWiViDjELsqwDDY5hkzdmJmL3n6KFyCxYqPefAy9H5woupXFYDcQMTVqC3Rq4MuJZ1ywY4LnaPhmin5Bw9",
  "key4": "fQ4bK5Bww9CzTmgxRN1KhN9zAW8HuCo5qCenvKdFKimx9UPdbYrpfY2XV1d3Zg2ShRKiiHFy112yd5SWApCjvQx",
  "key5": "rkegsfP9bjpW42HigouRrSjqSuoLpathNnF86vBGfUbkcHFtMaGeC8pQJjmKFo2dTtvSkUddMnFeHFANBEE3XrB",
  "key6": "4Kg5NiXAT2YvEEX3SYMzpk7B17i5tt527oEz2dbSzC94KRSbtAtM9eEF3XD99Uz2gFwdRdnWUhZerAKBQZwfmTVZ",
  "key7": "5zfk8kQMhZWXQES8zZrKNKnYPpbPhz4GbLWa684hSdvBSBnPaovrJTZ5xjjFB5Hb2sNqUzF5jd1f84KaFzwSpTvF",
  "key8": "rWE3LEWRiBTX8mBmGSF1E7AbLhp6e79PFeReki8Yh8ZdQMx25W7mdesxXyeyWkgdK9SfByp2pGvAoX5uXVym9Ry",
  "key9": "3C3mXbutm4EkTxDrtAiu8GAe5BHMQ8cqkCpK62g62TWtkhZwz2VbV3NZM8P7giYXgiEtF9iN93rDLH7Cwc2QEXmK",
  "key10": "2BzKVGAGQrsvasYHzdx5zr3JW4WpiLNdG2LMMcfRAKRYUZGYoXn8C2H8gAsfnkbgNQnjdghHDJDtHpHNLRqq4JMH",
  "key11": "275RBz1RatdbcXEbR8enhhnHt3nQYkmTHUm2PzNynFLuy2FtrhZDdnnf18NvL512DDPVokZsifHWX3wLrCuC44GF",
  "key12": "8DAgVkEzT8uHX1xkPzBneQimrBojhYUssbSi7QFcKZAGg92KrGMNGmYzNoWMVQ3AyChwiJeQb31s36HWTApQjdE",
  "key13": "3XJYodZeFDwe95kFygCNF152ch5GTx2BpYENNypzte6TsFxqege1J95EXyTw4LS7ryZyJBuRwfC7AkJx2fRmT7Wb",
  "key14": "5bv3tBUa4Nkfc6UXKCjPRyqasMjZvavysFPE11MwEwei3gmHSW6QHk3nd2Gz3HUNnZa1x4TaGFakU9eA8zgj2AtJ",
  "key15": "3VQ8Cvqc2pVguBidaa69N1htpef64MSKnvYxsLct38Frpkh18c1MSwp5yaPCZTX8NfuJozz32BdsCdNBtzKoTnf9",
  "key16": "5JQuvCoZ5XFHpinDHaDMxvjUuGUWT5FXBVNuEhD7rr8Lf3Mq29eRfRM1bHnbvWpAdGSyMw7wym3BS59oAPV273dF",
  "key17": "5LqjSQdqKzQmBtnS9xM35qkwQsiG63MmUGWEDWxe98dYwVWd1oQtBeP8hhBY5XBNiBX5vgp6X1UUsak3o7a2xN7j",
  "key18": "65VVFhuzFT6BzKMHMvkPdBC4iXPdUtMsnHtuhTMftqKdcFNcP9JiYcQzygvATQr4z6ywntaQ2q1VYy24kA8Da4bD",
  "key19": "71faxYZZVMJqgVsv1CBsSEe16sKK7oamBmkvsVf6o54qEx8A47NJpxdhJZJFombfwy7FG2azxXLzDZc2Mg9N9Qt",
  "key20": "2KZ9SMYeaRTPevaJ5DTpYDBjfT1z1FjiECKAq14BWwCXhmR9o21Xy7Z1EdoSCiQbYm3zXt4EQ9TP1DrU6HUNpVSC",
  "key21": "61XiHA16S2DhkaeDgwDotJgPrCPDU7r1KNdeVVL2MWRbxuFfhbqeWfsKgPYGdDqJYBrc8A1hyCoWqcybKzQ2LEY4",
  "key22": "4Bozn9vxUwZWpQoAnQGoriXW6g6AEiq4yPmrZzyVZa19tjbDpj1nDMrisc3286KK5MkY97kcxVvFoye1EqujeAnm",
  "key23": "3eYpxemVk6ap1sENgsouz4SjwjRaaErUtuaYVkAkJjAXyhRENrXgUJjsa1YNGaWMLG5xUuUVP8mPYqs788tGgidj",
  "key24": "4LU51rvDXcd4t3G3RPPnk7wMH24GkRSV46iNdkozvNDePVEBp15rRT3RniVfqSxevRX86MpZ5Qp3yBdQjZNHzsKH",
  "key25": "Lnij8Hbrxw9hSgePFGFVhraYzgeYYKDqo6kWvyKaUmTdBXqJuRq6CyzaZPDkptLC7eQKke3puwysew8dr7BiC95",
  "key26": "55GPp8FLxeK6Y1t3K4939e141JCktHtVXAmWxjpSiC4d4WDqskPXi7hXpZpkyjgsw9HyW2iXjJ2J4tqJeqDRprCE",
  "key27": "3S8aFnPskPwLeg9kqgMTZKEgrK3GXMNutrNAirrvPi6QmmMiXcFcYiazK8kEYzEzyeivQrjhMjSxBWLgimY7Dotr",
  "key28": "4sUD3buji67iPm8FPBhT5p8otEPJnN3qRcDuiZEGWeRPy377GF7NTcmABEnwv4v9KK7L1iJnfJ6YksMNbZzxJKP9",
  "key29": "i9fdm8gjx9ox54MTL2WyUEuge239Lu3YVfUgPecqzMbjJ1xUcsojaBCt3VtG2uHN6UoUciwXW2JetwNcKFPcNTE",
  "key30": "FJ35cMwfKrpSK6pQPpwZxS4dqQLj5QzT7MwJozHpGTVyh5ppfaZAm4vruXiZw6k4YoeuvHNfbv6UiNtyivuWohb",
  "key31": "5CzgtPTkC5D8PD6pispbs8NMv4WoqnEn5aE3dWBsSeBcGR2oWfjFTJAmVSr428H8c357D1KhFEEqBS8jLjK2vfdz",
  "key32": "g7VqoPVs4Vn1QdHh5GSmFeQ4sMhArGaFqXk3rNbaVho1ahuZtEVSL8qJxRv7VRWGMGVGBXSbS8XPougdXBB8J5A",
  "key33": "5tY3aXbyC4wrjWuweg2cxKiua9LzNtPq5iphjRCwmcbatB8EdhShU5LQYRsBz4M7oX2LssZQdScBRvXF6bBLWsug",
  "key34": "5mtxWiAK7Vpzx48Zt8MEkYjsWnqnenfqZ8C86JocET53mZAYrtJL9eQhu4dM16tPLF7dBSTPzsfWDiW3bFpfqbJD",
  "key35": "2rVE8tSs7iSo8WtizfgKf21VpCy21TQXUEhVFePZgbNUeFD3HoWvrHubS3Xxw3T6jpnZVnQJT4ftwo9WjAo7aEQM",
  "key36": "3QZd5NNVZppTSCGwxtto18v8uVL6inddfHWMZGWB9BXQf8YfTAmEQ41N6nLyFhYrYpx68tDUT92nriscYZtnDLae",
  "key37": "3rLmdav8DKYiFMv5aTLRPc1QqkcT4vVrxeFPf9iVZbSn4vYtfAz3pXjvoBm5xUqJtNnAjMXFdKwiJMBiAg63PpVm",
  "key38": "5gD56V5ZXMCxcqicNjE1kzLLbsJjZ9LZZZd1NhE7HsN5TyjWmd1aCGtwBNduCziANB6SMXtzw8Don5usKsrBpHW7",
  "key39": "2wCs5Pmoh4a93iaxrAMMHuVuk6kBA27UnE8QqXbbGJwWFZRuwyszvGJqd48aJqoPWRPdzYHEv6PebxNbMGWy3csF",
  "key40": "fNCWZXHs47FsogGWjuAtEp1E4YKZ5wsezHCNX9NtpbJ6BxXHemUYsM1fdx7EicEgr3XFK5V3xrkJn16GjYLKXq6",
  "key41": "338FDrhVLjVgF4ZQ83aSGWztBXoNwtdP8BKkoXiiUFYMGKFRpu4vKKHXRUmN1kvP5qr3Gg7TaQocvA87BF44ddUW",
  "key42": "4iJp4QAyrviBdE5dFcXtgH3yRB7pCwSdtazUwWEq144SSMjeCk1c9PymhMup1rwGac4xsGj1Rfk1PQcKtFqR26EW",
  "key43": "5fGQNhcgJPTKrHNdA4Z4FMTTpuwLJTx1h9k9mFUTBaYAcWLe1qNYDYtL1VFdw7UGPTpidcUWyBqwUEem12xcE8v3",
  "key44": "DCvMPvXvKXzVp6kf8meFaxGu9vHocF5uTghM1FjKvSxr7aPvFwojVD7KPhTZz3DsccFyE3z7g3qFdshUHPpwW7N",
  "key45": "3ZqyPx8vy4PjBtuyxW1bS7zn9Mb23oHwnoXcjAMEP1LPpDoJA392Te7bdv8THgwenotsVopSvggEgMYyYQj6uW4k",
  "key46": "4FXKf1tw32ya4tmN9JdCWE1iz54rJ4gDBHYkRbV3xEhHimkpwXZZiMrEriFBh8iiNpaiV42xUhZbBeLyxjbYQdV9",
  "key47": "Y8ccuGdfNQS65zjoYgVJkU3hGM9mCQhPnCyBobGeid8hUokcmXZjq8Y9CC8zEzPejUMQmxutSSR67XvZGpVJcnx",
  "key48": "2vGAHkjJQEbSSEhTCZ27mrS51ApiGyyeU6Fe5BgoKq45kKKbArhZ4dXgNpqSSVYyKeHbvaoFgLyUFGN2GL2FBWRK"
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
