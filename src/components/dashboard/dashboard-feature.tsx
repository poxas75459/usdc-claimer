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
    "56YkTT1PQ2YweTXBpAPhB99PCzHh1E32yVV53Z7BxDksetBqUHGRD4HqWh1Pqb5VCdvKXZ9EYMSvFR1Zvtxp4ua2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TsastnvWKmp7mRWAqwJm24zXxN285qxLqE3txkqsjPAWr8fpxg5LnvN3Bd8WCneuXRVVk4LkqJvVMTsZnskaim7",
  "key1": "66wF9BJvFmrmcb53rZZojuEM9FEVD4mvT4HFVKAWt1ry1WSzB5MhKjQvcECKg8ZVhvSUTY6yY9qU48hNULhQycjw",
  "key2": "2dRE1VpZ9vPwCtAXoZxQvsw5JjWjDAXoj4hzR1g6MuoJgkZ8SJufgTJfobHdD3aDgW6GxufsiAURUQZxJYAztKcU",
  "key3": "c6HEvWFCU6kzP7mU59dG2MW8dnHym1oy75KUUf8m71b8cqoKieLCDoBb6i9Zh9qr1zVgn1R6mfhs5csA8PVEoZS",
  "key4": "61T86s11hqDjKJjGzwUnrvwbLGBQxS9gwwe9aGnQQ9LSLM2wwkyYzmvtZBg9hGCNw32rMMn7gHSbxT81zEqbw91G",
  "key5": "63vBBPwVD3GTjszkirWXBQwF2FYhpFPJmVUcUrXxB7WPBP2b9V1J1GxpASCfL7a6hJHUuNPvrPZKEt71f8h1NFhQ",
  "key6": "E2VxBnQY2x3HKhwz87gTExkRaxkL9ptuqG6DkrHQjapA12vdnBKLWYbbXx5ZRnqiXYHR41UKBCUiwvW26CxGRwe",
  "key7": "3iK2Fb1wdyiDRhzd6Zvr3nyn3mwdwFEJWZVR6tfUKu6bRX1jRDAgP7zdhM7TbJDhVtAV9yTRUNV1droZngS24dvv",
  "key8": "2ZHM7NjGE45Lq9SJ7hpaiGJzcxPzshXSvtS64Se9Tzh1wtSRCrNUHoHXZH3QJbLVNU9y8PejmwjG4tAQqwxhwpy5",
  "key9": "4cPrtYMvexSFTcrikYiazWHknkVj19tijSyPKthFagKxQHbhzF7hJAk1R7V3nwSbuXmLzFyrG2J3VmDNiKnsm8wd",
  "key10": "5xN7SjD1qtJhEBxW1cKguastt8jvSyxTaXQzfdXeZxovdqZ71gwg6RCYPWV7ew3ovPEAPJz4GXpnRFmNVsfuhRWr",
  "key11": "3VRQM9mfP9hS3gyb4jMzHJC3NBQCqtnDi1AAR7njQrJTi45HPNGkQaPTYfJHkWrJGQzXgjTDPU4uLqFpTpZXvsez",
  "key12": "WkwV1QMZjJMLCRzEX4onFEkkBPcCYSLRHinGKa2JbMq1FZSkEDgSy9S1FehPCEH3BrGnkFFC2BMyTnNBnRCJdJG",
  "key13": "4ztnHMozCKt2xwfX2q9rpEaqb8ZfN79qyzAc5hJwhQhvmscdiYYQTRNA4uVtyVuADketMipqmbzwmzsDPxmYnUHN",
  "key14": "32hRvvYN5N4UuxsABMVdnbKhx6xcpXoXCtpbRsZmkR7SXHh2SvkHh7gcEtqWmR9sj895Ygk5riyyTwTjSdRJRQkg",
  "key15": "HG6QV5757Z8FLPXgpSoyNdM3eQtoayunkqqJYim1hJuXWvCfbJR7HgqaePa3dXHiAcjAdSeysdCUsLrtg2VDPpv",
  "key16": "2x4yuHfbo8fmLzQHPqzQWpnE4W8iZsyBWm7phd1JA1TA7TuvnfHfDmXz4BxjMHUjtEkAUHjUir25QUvtFA49VCDV",
  "key17": "4gTziAUkWBZ8RRx5wmrM35dfMeAWZUusJTzaqC9JbEXX7zKPq4RWFpjUmegAT5VpXenSumYMvZjrWqfSAUhMp2Hw",
  "key18": "3YBc3QiQCfz8xb5JKDNJ4c7B7CyGs1r8uorbJHNE4X8jxBcAecJR7Dmg5tQajMM95LCpuzNGtgqTvASEtipG3RHP",
  "key19": "4BukJx3hRzXfbX74dTfcqoyv95TLm6CWsKfbhCA8iJtzfAyVCPGEC9jX5WtM8PsB8a6sD7uRegMmvfuqc1adAMVR",
  "key20": "38Fs1V5mcahs1BdhTavEqBLx5zHk7JjEazmi6dqp5jmtmCwFLiKkwADUxtKTirQSXjXgFVGVcSHtFrQCTJD3HaD9",
  "key21": "5MgHZZBRmcmGwGoeJDfDVBvRwSu8UpbR8NbhjPECFj1TSfzRVqvr4485aQG4jE2Hv86haKAStWtJML9EpVAZgen7",
  "key22": "3YTWTWsY7od9qMMbfdDvRVDbnAuq3vVPH2r4FDF7XUJ3cH3SuHrpkK9VaSRW94GyLtZnmyY5jBCxkTRrnpwa2C78",
  "key23": "RTjDkiNcquGgvMFTDtWTz6YUcwnqSqQcRBuN4gmxTFa5P4LUY2HrR297THxCa5JeA7Z61j1sfGqrdpyTmbespnB",
  "key24": "4gXyaaLZWg2NAsrC7TCXeG8mN6p68P4N55UtPGzTDk8G99bMtCAUMoLZTLSeoWV339MCcsbLRNTuxqiz53TSiQND",
  "key25": "2bES4hNehDHRHxJzzYr2J2hTysQAnjf4yDMa62Bg5eTWK3naG1DMNRpHazth1SR4fmsNh4eRs45BT35F1TrCSa2f",
  "key26": "3ed6v2PW67bnD3KBhMXdPHwPdvVdU9b5guC3pcA7BeN5yt3UZSQNdEAr2UjEsvGKBdDPb7Mk92iH8VmX2uHw8dzK",
  "key27": "4YMNC2BZzVgCgUh36yswNf89xzKqn69FabWGF27eFsgaqxNT8nxUD3qTZNphWp4KYFy3UicQeQmYHjgevLttmKWh",
  "key28": "5LGhjA3ZqEodBLw1eg8bspzFjtK7U7oxkM5dL35B6hxvvUvNwQXP4fEZc6M7F1SbWyQ4E1ytwLGzHFdveG8tHXQq",
  "key29": "22QfFrYmZbBi5pPkP7b3qs2SEwWmYUuWgH4WzoMZtBHJyVMDo4ZMkTrkH7KxPAJ76yRJ9oLvY4TsXvRniDcCfXUc",
  "key30": "3XCxtbDvoVEcYsPnmzcNECu6hFSQGyhCQ2jRAt8k3jzCPVqs4ouVaupb6HWFdE2iKDCHgrnhUEqu1NfvphvSicyK",
  "key31": "DSDBGQcZXYGQZRKUy7QSwqvUtEPvEVQXMTrK3TxggHDbpoVakQ73MD2kPgMzBo2yXJ73M1wquY38jhPHeJKF76Z",
  "key32": "2rWr94rtpLc9Zygq6SvzFoyoagzzvSymgEww1J4WBy1nTBGBHjPAEySo93kbsbJdE5RenjRHQg9nBpBJDxw31TB7",
  "key33": "2UftxST21bm6etzQzW78ktAB6fRft8LBQC95uY8SiwSsGNPR4wWresvad2Ew19bBWtZswcXjfCtPkpjm3PaazSPR",
  "key34": "4GXWqQm5hLW1zMVsCvzJqCckvJXut6tjH7625sMhCu9rkGAtEynJbhWZrHuuXiPNtgx4Aybgv6RNHz9Ydqkjkh3J",
  "key35": "29WJLBzsJzPLDaVKDuSXiSDTc8fDENmoL1uTgT6wxURX7PWrPgQoohnvWKwyjqdu75RQpeNqnChJV8V2Xh5eBXut",
  "key36": "R1DrrwPgD7uC2C7iheK3wA5dfqrUbBJUuwULx7Vbe62fQSDYhTZ9PWLahVjyipDS2STceNdcee67WqzvZX9GPjT",
  "key37": "5Fn9pVPxP5rYZ42awvCurXNgi91SZtiMzwnkJNAhnfuPRRNAmZDoukACfot4zxkCUYVUJNARnjwbr5Y1aTC5re4v",
  "key38": "2k7KAZq8Y7YsQQRM7BpNVUGJnATf53LXD9kfjsteLKq4B2jMLVK8RzzH2v6dhMKuEKKWYpv4AzTGo7gUVAaCtQCd",
  "key39": "3hd9v2nqkLEgc1RW5bArEAqxUYRNf2k9tJdxysJJxD19pFmk9hwsU7BDg2h7TrReWnqQwyUwLoJwadqzDS9ssxeB",
  "key40": "5yFC6TBnELXoaapcfBDKNTvjq8r85w9REZtfmQbbmFsAECxiUTQFJCUN2iqM2Zwf9WSRLCLPoeiK4iChFDfKshFf",
  "key41": "3BvYZ63vXTrzQTEsNF4RCRdXsHAux33M24ALGbbdE6gjG7rrRbiJyNELRhVjM4ADKWnpDgj6myk6Ew1Pv8wPbZxc",
  "key42": "5cvkFqkHsaKj7PTzkbx8fAeEG4QSLgx18wMnUs4nYL7eiddRXcCfghmSq9Ap8rVv683KaQsx1Z3zY1wMzk24nYE9",
  "key43": "5ydTVN5H6B2Vn5tJ9VGS6mUTLukk1sQynjqdwR8nxo9bKxpViPUJQ9xrC4hjLpPa4SdTk4Y75BeREj84rmaBBRqq"
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
