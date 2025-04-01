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
    "4Gpx5TkvwYktELPna4ogVq5fAbpbkD3Y7STvuozkeqrFq4CFsxRAdSLw5h8ex38zNBGLrjT6MZR1oC4JhXgLhGPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C1wJkivTaHwQEfAWnQwDYkKdgiHLnA9zW5C1msnzh8CTSkQGijcseZfBc8UnCKpikkbrNMJUvxsFvdsmdzgXZ2e",
  "key1": "4de3t1G5qSgMMF3oMepwK5TATE2CUPRMMhCKnRoBSc7fnvbc1FobXxuGdvuLQ2RscpdWBTtAHdzP4Gnw5zfbDe9U",
  "key2": "2vAEBJQTaT2mumE4xvumgaVV5cSoLbQyLWMpN3qvUkHYB7mBxyyts72yYVJkUkRq468QKPRZjng6cA3vJkBnVPNu",
  "key3": "5372toAgkFUyL8y4m43hLdUNonny5HEGLqbiaP9TdLi6gsbDRR8YWS8gzWrkWYVSYJqBVEyvJZf9wkh2JLg3wwro",
  "key4": "5o7ScfeA6uvpo7oNKXd4KvrxSVgCnFmmnppP6f1MuEkzWfY9ivwmUASJYARVTV6aZCLrwKNcZYWiPWw3tfwTk4Eo",
  "key5": "3YofirCkgps442dyXVscXHGMkDxut8rceppyCFwWi9fnZ241N28j9XT66jP7FVeiYPiR8oAzeLhnQz7cNa8tagBs",
  "key6": "26stVca3TMQm22YmgCkf62KUUGGQtUd1YC3oPsVYGKFrq2AbbCmo6H8RkF5jGTyCiAv2ei5wbN5FuDoxba9srz4r",
  "key7": "3gje5r1tdiRpQKGC7SoYpQYpUXRUcAuACVBwMt8WkhdWAK37oVdXukgTdn1wtJTRa659hFGSgp5xzosEkmNbTDtq",
  "key8": "5gHzCRnrF8qAXS3nRNY2XwcVofPSKsGnfnS4zKqz6NoDTcHRmRQ39Gx23c1GpkXqaJo8jgA3x7x1AKyEZYwJBjWB",
  "key9": "3jkizkJKzyExnWx6ApeY7F13KZrgm6KMSRKnUPpdFMny1FhjeA3ce9kjqxpixvYLcZk6QMUQe5GTa5tv2wZbodJD",
  "key10": "ND4x7FT3yUDXTrVQfeU7AjLU9HcpWnjyiFvfdk2iPMuZt4pJYScpZwFPEbnnM5bEErudit7rcqzyZjfbEAJY9GF",
  "key11": "2RKqbWMKXojnepcw6hiaWg81WXzKmDw3m3dPzt13MwfPZhv86ner5x3jHvytfXZ5k1EuNvz3LqtN2NHNK6na5XfF",
  "key12": "5qVNh614cjnYAdUuEizYqteMyBiaFdNHBR4QaUuzM4Wuoip35B8mUCNYVMniTkUqXpUy4x3YRdQvXoJ16E1WJPGL",
  "key13": "36CzofXLAqLTDAWsSh8Qb19XHu53jEaukHJDGE7WZTFq9AnTMSgYneWF88HmL5yoH47RPy1hwAW32KCnkNy5NiAK",
  "key14": "4hMmm4iXi7kDhb2N6bzarbq3caGaeFGqE7xp9ynw6RmQWLTXVjApyJDvUxKH1PWp9XxmKCtrY1m4ArZxz18YQhLN",
  "key15": "2cQf5yDVfaEDiZF1KA1KECGujsvGnbYuiMS8ZjjBR3ktgrwNhiLqfAogSz3curNURCSQ7eWfN6uBqgQeCZEofT7w",
  "key16": "2n7EX8g6GEQiHowMfnZEXujE3DkGqFp6HkoucCi9AfAogjfuBdHDFGTAUttGa47LiATaEzwJoM3Zuhv3TJHKx2cY",
  "key17": "3W1Yi4czyb8YRdynHKF8R7xBpT198gEiy5u7pgfJ496KjsqYrj9Q4L5FkTCC1DBRDPsuaBENBQSykXYHkq9pcLQx",
  "key18": "5HJpje8qMzvsD2iEz3826SEg7qVfe9G69yDBJRtcG1XPGVYd6wEQFPogScw5YqrH9Eok1vMQhnW6FeJuZw4gRwxb",
  "key19": "2UXMUTBoDSnbjFxZDoHCtY5vQvZdKGYiRs73LP8Kns3XY5B4udpbpExMXyiomfgHwqvBabVNGB6VyrvaGKXr4b2b",
  "key20": "5nVtQ1t7M2MSdvLP7XJbG2xYF4rn2rMrh8fLqpuD4wgajqBBPpgSJvws26K2ncjUps12z6iRxXr9mUHwnDpNe2YM",
  "key21": "fgb4A6DkVDAX1G4aB2yL1Znteoadjqy5Ps7Hb6TTqgJS6TrcXEBaXPnryWxT1PV7RqXiGZSETmi5kj93ZSQLdHB",
  "key22": "fM1yMHP181hXmW7PW2QJMkNUyAp1PjCDcL8aV1Fy4LV7FhKGUsJjaWB8HGutBwwPmATvtKQB93SkCvgErqhA9Qw",
  "key23": "3itP5Mwgx4UM9LeZw8HRNpoixxXBtXtJ3LD3xxCzXmXAphbVyvuVBgpeeXDQ7SiUji1qboGDbVBQf9QjHLp2Dna9",
  "key24": "4mGH6TGi9UwjYtKVAU2bENaXSPVEPVojzYnTmej4nge7fqUdGHsjuWby3x8vAHtKLq5ruXx3zjLofk8PtN5WXd9r",
  "key25": "4jteoHwZxaoXP7KCStE3U9sovgZKmoSD7cx5qEY1QVzVxxvGNGbHUKtuvobZsDYhogxJmKdYbjivzMYcCmLwk2oY",
  "key26": "599Up8vxSNPi8J8FSK17dZ29zrQo9Lp7NAxwtTYL55ppAo3bSNVvY37onk1Ni8nWP5Kndp18qwwAeHd3qkN61a6p",
  "key27": "4okFXnxUTLDGhv187crqvwyshC5kNy4CCjf1AtkFYE3QXrrZXVH5omDheu59JDBwtGRSp1bossmGUpdAgCXTGXKP",
  "key28": "4ZvYt6r8F1uTeE17G7V2Vx48pUUxLGtB57AzaPJpZhRkMx4YhEb9CgBGpGiqdjNHexKXTkhPTEatALYk25u89g7H",
  "key29": "37KTm5tEeQ6e4NspDi2i7DepZA6HLqpxUSeJtcdShZa6KixypWVt21dd1UffrbVJkT7Y25BaeTtW2hoRJdxDqSg6",
  "key30": "2gXkxYhJfJARDnTKwPwXrGdJJA8wc7Ry5sHvG7xL4MCNtZCvpoHTonmGQK2jmWDk84aKwHrX3jZABgeWR12UqV7V",
  "key31": "2fuvpuHHo7ktKHgg6AGNPRmG9avLDb8fvN98MpCx4bHqUcaaymLYg1mxtvK1GbCNfEdLKcMN7ZugYHn3GwrseD6t",
  "key32": "MYSR9AGu63nuMjppGkX4FAspZLdnRXmxDtc7RNi4zicscchQtDso7xVP42pqjyYzoE4AtVr9pCfQ5W91xdmjTKe",
  "key33": "tZCKg7Hgi8nmaJm7U1W9kJfxkDeTLMkpuVYpT5E5CiTeKPkbnuJe2yAYRtGbwz4kJRqW3ZAU42bBuFVCJLJWxyL",
  "key34": "51J2B13pN2ETHEANwXvbMF9vPd5mNK2fQqMVmHmFxTMHP4hwhU125oR8RFKDgHJCugMjifvf8664ABe9mYw8NkSL",
  "key35": "52knKq6xviHnEAYS7UDLeF64FEekzw2Fjw2kXEFrB1ThwhUZLEk99M7awewDTzhDrLZEeg5vUYH4yyCQCqeWyhXM",
  "key36": "4yjGV33q15WGv4hSokwqGxB4t1iNJWVAwcDCSpLwzbXUHwCgVDefvd4HNFiRKngHPoP5W2fxSLBvXz42L95yGAJ1",
  "key37": "cyEcYk2Kr5CSqxZrRgC8yJ45XXms7PH9aTFNFAoTbt6rtFrEh4dMZgMbn1ySw7Mvkp47MivfkxvL2F8V4vfsbmd",
  "key38": "4dEtnyZxPaiqNjrMcsGYbdkcfVv64ijDMvnkuD6yAbybuamKuWQMptYXKdTn6k3yQyrteB56rCSYScWY4SxsMtt4",
  "key39": "3qkYPceEKvKmAdeofSAUqWcmZ5ee8i6yEyHiFoBDifsho32LPwaAG5PtyQtQjEzTRr6FCthpDeH3hxJxEUHzv35X",
  "key40": "56iMP4RdeubBYZL9QTUu7SdSMuUVVyhxEpN1u2GA8AXntJjY95KcMHNYy6zWAN7z5pkJ81vYnsAj1kYJXCAmwZB5",
  "key41": "5hLCCfXbmEwfMTRgVd7Ubu1QMT8TADskB4akCbTjnRXu11f1yJQH5eETxzQJTjDsUUWmyPjTivNsGoPWc3LSgWJ",
  "key42": "SSfuLZtRju7BK7UGd7ohDSmrTa5kXZSNwyrUiU5rg9WoammonvmjDnSV5miTQgDadgm3pcKVDahpxjGhEmuM8rn",
  "key43": "XAoyiuBDER9omqd6BHaMaZ3ZVJcJv2ftfcL2ii3fww8jm29y842kkq9jAcxECKGwsfjSGD34G1fkcLguXSFHVW1",
  "key44": "24b5AXjD2RwhoLEYt9wgvNEzREH5dgSWqAUVPoSNo2S2nm47B9J76AfzEzqsaMx3kaFChd3Zr4CpxyP8vPgKYDnR",
  "key45": "3SRMzCn21JiWvbTpx3peYzi84fK33ia5zvNLV8ayRRnQJLSx4Ergz2rxxsQT3528MLW1VsVP7qpwK79hxrPWCH9J",
  "key46": "4wXfoa8rTRFvYe3vjKvSzJgQRpdrATznsXkViZtvsS7fTmLQyEhS8FaczTi6ZsgjbwWMYtbk8TF7GkxkNBvDqi8e",
  "key47": "3MRHCByfZ9U7mGBVGRE57LtezdLZMpeVodiGG9J2xj6DRjgc8kf24cBjpxawgU994cVazpcUySXwy14XnT5PH1Ee",
  "key48": "5pK5JSGaoxL4EYq9M4o3tjnfm8BqZzqs2x3PG6DaKqpZiXBBx7XYVrsZyUg5wJN7Ki9tWC7wBkrJ6BmkKLaWtBXQ",
  "key49": "31DgQxCiuR8U94eYTkNcA3ghqNVQ8WfN8kKr8Maea5VA1RmtJF7irqjB8uvBbrvdXQA6VhoXwnarFEhbk3jjDri"
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
