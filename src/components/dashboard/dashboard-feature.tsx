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
    "3NJSvk7JrDWW6xUiNN1nvuK754UjaBK7KZvPMH8ZNYeDwjNzhs3RLjVxUdgjEDfDdTUTGR6g8GbJ5v5HssjhSHhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KJEjq6rvmFvscLnc1xdewy94u3WWbFe2CWQWs61CgfR6b2zzRGNReWaqnoXidmPt7Aw7Kpg67e5AZHtsiVSLEw",
  "key1": "2hdJcZmvw9YeZPsgRczYV3KUusJzBxyP3pDUmsVGH3RWoBGcDaZFHcedtcSzNLTbbFEbCDJZbTtXVyVt2w827LLW",
  "key2": "yh7e8gJZ9VJ1rugTnTKr6XYifuk4keHDYvxJFEuwP5S6hSSLdtR31dSHgxnxEM72foJKXUGDA4BqQ9p3QMut5oN",
  "key3": "2ARJJzQHALSYRzJcMQHzxLNobF8socNVRcEspwsosCp3m6BWCu58qbPtJ8chiz3xFMW4EQvi9EW6TsSRc8RXgTDY",
  "key4": "3rxYyNDZY53YXZbVyEJLdkTg1ao2zvp6gpPSRpff9caMDLf3SqBbJTj1GSCdfdaiasSCzrYBeB9fG4ZMCvgHdicU",
  "key5": "47Rhxa41T6a3kvdXF2GmAppsqCpRc7CoHXkAcnrNLyVbqgD2CJaTq9HF7ANPQoPg9nqq6ComfqQdEgvPWq2ZWLEK",
  "key6": "HXeKsDiEwRaWwDXusNXASUV3mxTFZgF1qa4hf6xdoVerJ4UZJKiU5X2AwDA3mL3P4Mw1tDf74fjeYv7TAHfwHDG",
  "key7": "kmswkfvJtSzLsRoBeEFymponLKgkKJgZ7AT973Jfg177Cpv7zPX1qxxDVw8a576jdEnnPWBGLoqCqS6Ze3pbDVQ",
  "key8": "2Lw8gkKHxJw5aqqqj1kNoDG2Zx6zpwH6WNPiJY95PmQZKfQfB8M4574Sv7iWMnjTVNZiz69gCVwXgTonQwmraQNA",
  "key9": "2jbSH353NNQZHXTrcQfESfdiug4XwjLW57ULx9rXr8HfxH7pkdHbTkYjQGcFtxmdsEJjitxVU1q49VzsuryYwsYR",
  "key10": "3NwLGMB5JP4vggCMy8yX277ooiQDai4Wan4GQeYufLn3ZNCQYKeiTPwzS2JPpqJ3GzeoWb6YDbdWLNpCVrihb1WL",
  "key11": "28pShkxhUVYhezEPLgYjXNJ37x2wnXE5Wmg5g5FvC6spkXqn53hZgXNdQPMYZetHTi2kcv3B3PsJssCxwuUQTwYr",
  "key12": "4wwMPxESDm5Uh5QvtGPxTU4uHiVEXasGcccWYxqKoApcCxByjVnYiZKrshpJxt3up2YjfAfecVfKaUn5Jx6Uh3wo",
  "key13": "422enuhdeHqJpMhCXq3EraHRPSZNZVqa28ZYnV7SDWztM5wGjyC5zNsgZm58fuYwc9H3nqxGcstHLfr8eBQMcJjN",
  "key14": "3Lo7EhNiYQAwwbiVsC5LjJArUdDcgYhe1iwGkhidvrNqX58JKvdtnkQqf7ehrun7vSPBqjrevcy96emX7KaXtoUL",
  "key15": "3tLTENh2K9SmhT1DoyFq5UKpvrrSQjAKh8wmVpFZQ2iTDyEeg2dDW84oDeuubjur7iS4cqvuvz3HfBqboBWLZbBQ",
  "key16": "huMW1skCZhu1FTfi2k6mPMdFrNddabyMndDDbZDQP7dd8WPm3vNdaw5tkPEfK5oayHwX3WTimCR6eonTUZpxoy3",
  "key17": "3dQLYuKuQDNcZhosRjnEBB9TV5JwTUoEvKV2K1tGNEhP1DadRjbVgy3We4cbEyBJfhWwpSx3VJED11k1sSpgN1iy",
  "key18": "5oMXvhEbTVgcivBTdBeBHjxxszBmPdx5vMC8pHDVDkjtCrn5b7uo2hD6s3rLicLsEXKbfzevjhC4zvdDMiWFJQkW",
  "key19": "A2KJqU5QjKznETFvKwTHH2hqcyQWCUMKTaq3JrksqcQVjmUAFV6JZu1At5QLCUDz9BYfbJobvhq1yYZrYEyiwYt",
  "key20": "4xvgDFcyFdPzxrAZ2w8Shtkn2Q8DZnx7pfjyq5DWgVvtuYn3qYjh1MVbTFNqEmUShG4m6epudiArLLkMsLYU9tyw",
  "key21": "57HdmL3uFeU8sZheJLTtwLPPaUuhRpFLfDabpgoJgiTog71FGS1zK4q7hwBrj9NZik4GokSyVJKdWreN7879KvFp",
  "key22": "3ri8sF8k5Qghi1VwQCA7663LfSXTsNpYZsoq8aHer5KYfcd4GL6Q9E1z6n5rZRPt6sm3VawJBNBnMGfyuxFRWQFm",
  "key23": "3VMU4115RcyHHtaA1ndmmSYBW5VK3mPAa2TenfX4rdFF6MeecdGTUG6MWwA5X1VaDN1oTSFDEXcqNshstsv5tuh2",
  "key24": "2HQsDeMNzauz2rceiZaBnWgGYJv47SkEMv4i5ThuE7TxpVqxMXYF29hg1kp9WD2yuPbsMR7GKHd9jhA26ExWvue",
  "key25": "q2x6c9FB4CUeaY6fcmy84Sd7SLeGcvaNiBTiVzfAoJZnqnnqHnFhfxCxuSWP2Fge4xcKjXP8KJYbvSZij3J2r3K",
  "key26": "3iTwK3FcyCSXknLq1Lo6EZAupwkWkbvvsTH1GANUhYhyzzZ8aenhpdudRe837SDrcRgon9AnztUEYeDn8yeHf343",
  "key27": "238957rYvjQFothjgTimTGWanPUojecucLcZDazPFZKA4cuMPCVr3Vu4fjpkrszd2kbAbZf1Gznf7rpHRxZBMzss",
  "key28": "5mWRPSUQPLWweV5Tgt55B6QmupC3WdAwPsTBM425vwtfafrSi8zLcQyGvcjxNHT9LHUpXFDiK3LPmjmgJCqLVVbh",
  "key29": "2N2sgTGyW9eJ3NGYgy4Qy6VkRnFZPnEJ6AuXRyLbuxGfXdAoZWanwVGzHrNaNLXdzQjFtmPVWtnanyXXssBGioY7",
  "key30": "4h2avwsbP3WGNE5A8pTkKtEJNSDVUjv9AgaUoZ4xcvHFE4UZartg6v8VxemPvcpVf5pFdEujHPsf7Emag6mDQ4NH",
  "key31": "2gAu3spDesyb4Pbo7Df3XCEdrvRmKJKufiBpukPbVupcUrUW1zu686ALE4MPXcmh43qQXBtty4KwW3uujeyfRNt2",
  "key32": "soPE3RKTbShw4bXDZRVY9WgmSwCw11ArErbEck5oQ8H4s5WxH5WMREfjpVFw8BdPotKg3fVWVSsVVEBFw45xkow",
  "key33": "2wgDYVbDaGqqdybYdgsfUj7zC6sZf7b9VBAkg95mhep5Xaxzn3E3H7dnDazYgwPpne6FrBwHrhMQqZdDGPUfXzAH",
  "key34": "2wMMZExkS3xZHG6BGxaAtTgeGW5SkEzUiVpUUJNskNpRr3f3osbceyfPJr7p9kcUJcRT2GqfmD9KRY8U3ttR7vWS",
  "key35": "mdi3QL5fvJDuYwCzZqUyW3ALxXWd7XPiWydCLsWtjSyEqjpCQ79Pom7sq5nPx6uSF2uTvtn4RJ2tziAKhP45x9g",
  "key36": "5czeGZK1QcRPA9eHG85r5HorVhC4762weiz1zieFgGgAMB9rVXfzJeJqjEpo7brkWGw2L5yuTxMvLUMPU5yP23oY",
  "key37": "4F16RorHEg5YFQKyhLfLmLkeBd4smscRWoWi1GxQguDyxtMeQf9QSA2PYseCnZ99tHWyYDo2s6rQ3aZgRYiEbD91",
  "key38": "5FcPUsJmegeX3EhZ1nyWxjaPH73WPtEcxbe9PVP94C7K86y9RUAAFKSToVu7Vc2Pngr1DFxeJimNfKtonfNQ9NJ",
  "key39": "4xRJLKHtPQaaNDrcSBHdWjwtDYprCnQgieWNdypBUoRZtbFf8UURwEBdpNmdebKa32Zv2RzVE5uws5jVYoL8xAFt",
  "key40": "3XNXmvMq3NGJvFg7tnt79EWoyGe4BK7XfUJj1unpRFebHP6AbJKD148EBGevqgfjcnR8TZqeiT3mbStVgccuQd2w",
  "key41": "85WRr3FsdrtWZQMhEWToyFyDfFfKWYVj8SX5zmpFyZwAxcoRL4EA2qqY8JR8UjioRtJNpot6FCFvqwoxPisFfR8",
  "key42": "3LTFbay2qspphcyebUw7G7g9mM4eWqszPYgdmm46x2t1XrMaYXDzzB26zEpDJXR7XrbSTTinuZisXyxUC1bFRkHg",
  "key43": "5wiAWfvfjMUsDqo8aSE8QV2DN1pd9ZgctUSss6VguG3tyCBQ1nRPGBRqia28xdxVxvGdp2R1jFYja6SvWhfUhVHD",
  "key44": "vtJcyopE3Tyv8WGnbZTbM6n5ZwALhtdSykiMSe11xsJd46w3y7xhgs9c9hTpXBoWsZoNjFAgQC9TNmdTdmRwk1Q",
  "key45": "4cF3HAfDzFYqpfVHLqx8htAGQcKaHLeArcSyT6KitGP7N3BN5iYkY9gbi7M34g9R516j1He8d2MW1r5WGgZeDn5u",
  "key46": "2hQLSw69LA4uEeXF6XKQ4Y9XzQ1nmMWtXEZaZMq5ZBBTtLgSxfsgZ8CYMCMbpTy29HBrv8a2qr55mfcEZaeAoKg7"
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
