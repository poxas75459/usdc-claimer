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
    "wacuqB7rzmKpLzeADFwTLR9yCv2RnARaX28pQd7CJeNP1h9pFVQj36UFkcyWgk75bBosKCLf1yRCg7PGii5qE3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327xJDHAV8pntKNQTGi41pQHgx1QDt7wGHd23zyjZ6roBbeeyG8Pw2w66XZCDNudRWamLg81ZQqtqm847PSuHttX",
  "key1": "3xVsa47dqrfG1bptyHsXoc9sKhyLbeQdTX93PQdTEbt4E6KPE8c9VkjMfxC3JPdYieFtd3WFCBDtxfqh2xqaxdoW",
  "key2": "5Zz1DCFH7K2yyNmZoNjSz5gbgcNWmX7N7Krmd6mezJAhQeApxkJNVYsVLPDa3g2CGj3QmzQFL6EFsghfYUD5UmWR",
  "key3": "5tyngUkYjUnKFYfRQaPa4Eet2dvf7YbVJREDJbxnRHNst3spNJYnUbdvj5pKufqWEkvU17rpk56ANPYb4JBx2Nzk",
  "key4": "4KYFzqrWmcEMisW5jo3wCxBhJ2Grix7UMrs3WJV3fHoAdyNuJMZM8R9y6GiqmioWLCCgkwG8ir98DjTqTYGcH4eA",
  "key5": "23Lk5pT6TuccQRGWE4HhwHwR54m1y9SFmVcsNpWYACNvs7TtWEJpVEhnQXafCZaNHxMjSskLjAH9LCxi2qcMkgoN",
  "key6": "4rW4HKqi5Aq4dyNBDsBWVLRRepWa3P5pR1u2HmfbZzgnJiPhBm5uT1g8ZM5MXga7575atsErNmu5vxXJcshNsJmS",
  "key7": "2CjXjcYJbC1iHXXnkmmTU3RUjYNNLVb5FvT4SCSVN7gcx6cWSCsBfDiHVEsKcn8zMQ9Nmz1Jy1mruw8gPXMCqhyT",
  "key8": "2CL39Wjwpi5M4Yd4oQnEbdV1mVjuA7CaorW27ELy5BbxdSD6m269B5JzeyAAaZLAYYG9eUFbH8h28rUKntx9m9iK",
  "key9": "7uknNH3hik8wmXJ7YJsx4ErMtk6Vad2xuoxzwrTSu3CTWaBRZZuHPSrB4LE71FiFxDNE4FUEGDQgjSHVyW4s7fU",
  "key10": "31PzBp9GoPW6YtAykcZfr76P3EHeNdohs3rWodCTqMQ8FEx369MtLV6bsuS5PPaZm4htPpihu2W7qsjfqXVc7amQ",
  "key11": "2kSYyZwGZ3DPt47hJh8D1zN4mrHwkZguk7A5HdZnDXpN4STarP9AfQNM4T5wWk4fk9VReKhh7mLZ1rH9qCDbnDDm",
  "key12": "83fwm3YXG1rbgJSh4QGuA3kk2XjweBT62iYTVvApxPZ4rPds5DFjToYmucaAo4GCwqsFNKdrWAo5ogmE5MuU4Rs",
  "key13": "4mYT2Ep8nx5pGHANPQv7oBrzSv8G9hPb17R1SFmuyeBZBoPUcRqtCeVK58wtBVnAiku66wkcBtqQ7YKpZs94Xqrj",
  "key14": "5Gr3uURQKxcV5hRduubjQvjbtExAvJZTYHWMQz8Pn6yvov5Hcfoq8aFJSqina65SKn5A1bhiXp86SjeUYT4s8mTu",
  "key15": "ZP5PtMZuiEn9bgTB6rq56nGC24mzdQf2BbcB4aTHCbApL6DLAAKLFei1MnyCMscNukbKzdQ5AY2eAPN6GJZCE3J",
  "key16": "3yQQrGsj7pRZkjFkkTqrrsv8GhZTHVsx34R6S4QVk9a6VqS8JaZx7oiFrWAaEGuqGs8vjtfpGic3GhVhLbtveVsc",
  "key17": "5z8EyLAnq8QZAxa98h4yJRvja8axsS3dn7HvqJtSx4uxw7FRoEPmZg64a7v9KrPanU2D6nHQD3WtsH4fr4YwHvpX",
  "key18": "5uqqBNFYApUr19vCteFQHBBa8UWMSea4hsrMHhU7pCzGgHs1xXYfKaBjy9eqtbG4LvEkymQsaNgq5eBau9jB9p8d",
  "key19": "HGij6HD9LyNi7vHU4UP1NcrGJfnpJze5TvmiVPQgXexKtuQC1XZNRURFz45comwnsRKwj6GZcQBK8W2KRjoenS5",
  "key20": "5RNW6zaT2Tn7W1Uh34sk96oc5wuiLdjrGVD5YAzLsWukHiEoHAb1SjzCjRLfpQXTWpp3qXhWFqAaXehJajwMbJNR",
  "key21": "LMJjcpmGvVuCu1FMAyky9GmkfMsYJNqei1QZtFLVxqPUtCmq1uDhMwQf7tFt5G2swngoM3zeu5QRNiJyyqFG7T2",
  "key22": "Jg1fBH3tiqzqiLxcc3EJa4TSDvekSHjYF86qsV8aGqHBcxFGvyKiEQM2SkMimaBvpH2mHuwKQGc1c2ZtJGecxfi",
  "key23": "5YT3kn16bxvGRSQgJxCMpKjGbfNix8qQPPuXfSj7LEwe6125zCf7GdRDAXzjZSCmxy5PbeQgFzLEx9ce4fzb3QWs",
  "key24": "4ViczQsFCabn5ME76hM1vB85GJcUvDWk2zPq7FcGz8pTjuvUUcfF3rg94PQNX9tWH6r9ed2RwD5ReWr5iuGFvec6",
  "key25": "5XZXBmwA3VgPWeYbLAvtPRZjdHokU5MYVTxr1C8BebHpfwx3uRtLp3ZY2ots8jiT2DGrRb3JtZjnE8BRZj8ymRv6",
  "key26": "2CpcuFokrBYALYbsKbML54PwoAe8CfxQ8hZVBsH7Q44NwGJHwiaVY9tvN9T3L5ykmvts6seYwBCnXxxC79NqL81g",
  "key27": "4MMxfnDJpc4A7YgWGEsf2gyb6o42FEUPNF1vJXsZpB12jvPgh3mD6mcz5bxTdJPGV3Ensarx6UXnoAwEM1M9boA6",
  "key28": "3q8qdmEjXwBfNf6eYnr1fZFSF8Tb79TCocxTP3DpWiCHzinokRd87XKrDzd8GHfEqSpQVoEpLUNg6zdNA5HxpZPv",
  "key29": "4EUPpYLhH4n5Mbbg34fXVdPYX1FqHCv8N5imYc8BUrgZqRYDLVcSuEiwuBUT1dPvyf3FUWAMBpCXq3RPQzrtjLCh",
  "key30": "5k93ojcPyte4Fe1oKZ7yRSjY6RRes8ZrtwZQDdqRvtjz8zyz6R1SZ7bvanmYYaBkpiqn1AdeZebZZsedKCYqaRmA",
  "key31": "opNXQauZUFTAuu1EYkBM9fTbASZiCxz8yh1dGzjuZEwUmszaNSdgp2fPCJpgQSZ23CZJkL2ZfiKS8nP2EXvGLZe",
  "key32": "2DDay6VMqbCiHdtB4v4TKbwMfTQQg5mH3n9XYHxLaWat41BwZFeywJ9JZQM3a89v3zGoymWAS2pUjyDEqKnhF4U9",
  "key33": "4HPyQ9vZmmtoUBg1UkjcnrbjXZj17rxQxxUFSbqpoZDtqBNPXm2bxK7hR19BBTZt5rGVCZRRacBf9HYWYxJip59g",
  "key34": "3oSJ3XhQmKfpqDMSDbZnHGVyBUP23K1j1HxWaowxzPTHhu9hXNnAn4DB46WcqMn3gw7fT5wKTdgKRooqayR22Qm",
  "key35": "3p2m7kshRmKGiHGevvkXuDvmCBJDYuUWK3VN99DVeRyYi7fYydxF5Wm6bGj7S4ycNgFyiLpCbipZqMs5vdYDMvPu",
  "key36": "2nY1gVruyEzWG19H83aqh4jdC3oULcsdmPA6Fozrye929ZNWuaF7KwwCebUKnfeetXD72JDhbFscCjxGVgkTdWsC",
  "key37": "NtXodWpEKHgjFSCNSeEMN8vt5w95ch19brJLayPtbnu9aLNJhwsZksZ8oHHXWVpiuYQf3btoyZ5YU7KSW1BjSDa",
  "key38": "4AsZR9r6sKNFHH3Tft2ar95M4N1MHTbZSMHrh5E66QysowYgLKMzpxe72d4MLkGew6GdQHLVqzo7cgyrPNQUdt1n",
  "key39": "5FksQK4y51gqHnNXbQo9xmGhzpTMCNrqhPyGu3XFEvTy7MfA3FwGJfbpchQ69a6bGHWbFHFgGxUJKRxJuwBvCt4R",
  "key40": "5hQAw3rkY68f8iEBKTp3wnuCxf4rjteqbVcdm3znpQ7HrquX4vrzKJpmBFWnPwAUzttXupBMBvVb6ZeoJn8zMnX1"
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
