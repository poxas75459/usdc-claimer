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
    "L7vKUBaPwP8apivNvMpfaLMVfqCEJo5PxeNvVGELs4wBHCPtyaDsU1cpMNwNroCzv4m8AS5EDHTN8rUdjwQ39qZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ACWegneb9KZ8ri4qwXBMDhyTJTAMxagh7gM5ftwhW9KNk2qBztxC5aCFz38izeynzQMPvodY1mc9rvf9Fzvgvk",
  "key1": "5U867cuaduipg5wzkWwGrbTnGwWLSGEPSXenHRnRzgKy6NKPnq9sFcVTZ1QdTdGmawGdc55tEBVaf2Pc3HLdXp4B",
  "key2": "43DhBPASvsF4DdPDSebkCSEzjyNGmgsK8sqWN2rnZP8tBt8H5V7sHNrqZCJ7u3uTfTzASP3Hx4NBsYgMXYbvYaAz",
  "key3": "2U7Lh19EgSz919yDJwMZApS2FaxKzY9kK6j5MfcrrsdQ9LQDFxgLSsT6USr4eHkQXwoW9pcdtxUVKdEQydSoPXmP",
  "key4": "2ge25d9xYkWXBMkHyjmLgTtbYJKr214DhcZwR7XWCZDrAYMbAUeNwTLiw2dEdT1Jt5K4nsaipomWrEHCNHyY8Vv3",
  "key5": "5oWjaz2YjgmSXX5BnxKrPZtSMtdYoZeGSCDUeAW5h75UQe4EozgUSkDx9MMMT1PU9Byzy43XUqLw3P9w73Y7zyNU",
  "key6": "8LioyMxTQpGJsWLs9YtAWUDTH1Bqx3gizDY6wrbc3FbASZWxu3dS2YxtQ6maHHe682pUegsHFNsgZPCaZDAHUir",
  "key7": "4eFWKPJ1W3MFyJWwHGgebjR3wZAyxHYSBAqKiPbEruaT2DkcCTrTqyoKB4wJ2NtGN6J88vkxMwuUF4WtdsMKET3m",
  "key8": "3TPPbKW5DZ2kKhNjw2iF2AGgYFM81xar9MbzyJ1eB6RjET59G8HqytBGGAB6XcghpUL2561DqXe1ghzVDwgFpYT8",
  "key9": "QPgPHSkmTcxkqWxBg2LihkPCREhcbGFDgyYFjkRZXBVUoRMr9nCxUbRg3HbvxMQsKrkc9mURi6yv9EUeQk8Y3ZR",
  "key10": "2pcc5bEbW7zGNYMZD97LMdLrVDdcsSUJfC1NGee7MeWAMFKRn49fvCSt7Gv8CqF2MHdyPaReGD53TxbJ7Sx1fUcR",
  "key11": "5NcTLnav9cEEZqoyAMUYU9Ku4FE7MgQv9TGhrhAVASXYa1bgDFfAnbsWF2Ss6B2edUGEyyDhRrzxJyeHuBoEj8Db",
  "key12": "2z4oxW1vKaqAba88KztbjtRTcy9UGwAAT3E7urvG6PLj9T47VuBGbBt6KdiqSPFkThoKZvHwgVtVxLEZTZpHweH7",
  "key13": "5BUwwrmC1A88djyMyFAA2s1yDGXvJNv67KauwHeTbMtzg7mnoWoXQND1zewnxKMLHMhbJqcfoYG1PEPTAnDBodmA",
  "key14": "2kjdbuKQHwHasUVweVTvQGqmYpmCDziAXukPhhha9NP8QHFMGQvT4JWTQCtxvn5Nw6CyFfEwVXzu8q4w37FEBemZ",
  "key15": "4cpcfBxbwXuQNwV7hbWQSy8bSvMFaBQijwoPzzqjaBy2P3vVRgf63w5hP4Ys1oLPAMBH2DCDZ6K9Zq76KzZkoYpw",
  "key16": "4pLrhDZwpemjpMrMvKHKvQwgoLGeri3atwyKFB54UTtSWE1NUp2ydTkTypJmUPzKtUCgNU9SDNiHx3ZvUUqqqFMp",
  "key17": "5jMwr7CiwEaQe5haU3FJ9SvYb8WetNjQCsD4E1rcxgYTeqfjv6HmnHoTRV7d3GR3VoxTL8A6Ji36L1wxRyHaKHqE",
  "key18": "5x4szYgEXP5TvwM6keeGs1ZgpSiCRUTzynvAi5dV2BX8CvMRV2sJX2xaaqALKpKmPGoA2aJFu93gPpma63Dtvoxv",
  "key19": "iC9FxQVmeptKdnBATXQj5WU76ZUDUqE3RFpuaD3Ap5c4KmfQgqhpC76ikb3qBfy1hCA76NW2mtxKxV5Syo7Kvbn",
  "key20": "4NVoNRJRE5wxMLLBv8PCFz2vqf8sGPxCiJjc11cbeMXCo1E1QLKUE65s7zgCkTcWJfFkJbVS6MWyFm1q24p2Xk9h",
  "key21": "2sihsfM8BUqZVCNCeKRtWsXaLGG3bduYBw8zwwLK8ipLYjAtwEnECNyeThwujtFwjqptCP97HKXkP2XdAjvqjU3i",
  "key22": "4tg77Umg9UVENL9JLp3Z7HRQPEBjdDZ7ocfhV18KapPH7y62bfJPcRyomyDErz6xQ9z4Q2E3bDCMAwi63hY5u5Kz",
  "key23": "gpuzyedmpzxpZniYafUR6xapmnsNsABprpWUC6VNRkswDWRXhHEU9hqMf21RR2WprjN92ortRg8zFXQ2CxwScxV",
  "key24": "DYZUW97aCHuFazbdRy9m4WySvWHsmKorXEwBUypGmjeVp8sbUaEFRzdC68fsnTZDR6uHL5rwQAQMBKC9wE73Q1F",
  "key25": "4XN5XGpXUJC3D2RSsC3gDdxTsL2mcAqJbhfYzEFith6NGkW41Ldk4UbJAKWdb22tJ7XLsiquRBCZeiPUeG8zkVaT",
  "key26": "2HHQAnRgwGDtgmkuXQy2A49TGobAPfGs2SGEqM9wh9WU28RD9mnvNTwVKjAt6V9jrY2JypEnb41A7VSV5MjJhgkC",
  "key27": "67mm7vMsBqKeppjiZxAGfmsELFyAYgksDj3hTPWghALszvsajHPopCSRCPVmzhtt28Vjcd5tkPWKpa5SXHdNENd9",
  "key28": "4rLRS5ECQjkYLktcubGbF44Y37hV6RuEjEpAX4Fk54yGgH8Wa5mui3ZWrUhvfhJThiMCrSkL6xRM37Rpgr6Ai1wm",
  "key29": "5KMchvUHyNJ9X66N9oWJPSEp8tL3NbTi3XaJwqq3bqtjKysnKfma63MnqMmr78wBe6wHHp8gWuTknyGkYHfGW1b1",
  "key30": "5pQ36KBbdQMRibjHYC9EWzBzPUpriwBqbaRpW5LsoXmaLZpKNyEkQNNmYSmopvQXJTBsdmkvGaV23LCM1dKSWVE8",
  "key31": "4fRyNhVnEuo41xp8z74mC7wNpgfdGrAvJhkvCY7iZ7wkVA7RNeMbudVXXMga81CZ1U9QsJEFinDo4TY2DkY3ZUmd",
  "key32": "63w4HW9jcTVfs9zsWPfeZFokB6utxfP38CZDZHVjiRjQSpW33JLTTfGKFwf2kSgZj91beJkdi362iT7JH5dHSyuw",
  "key33": "Dn5G561zQT2AKx9mtRk14mGewnnwHzC8QH5odQzjF1YksSrYTzN8XXW4yUaY1zszzbQoZvSpXPxUnZCdY9xra4v",
  "key34": "hnxsyATf3ZQAQCmaFiUZUWeV8F7Z9F8hdYELnwVHR4VsLyaJqF3pwXQhwgQd7LJX9w6fz2gHCN16UkpvKc7SquW",
  "key35": "5PBCLDrh7cPMbisCGLz1NEyd65QXFQVNahSk1DYFPz6HbjeufVi6z2X6hXUvPv5e4x9oEDTpzzcLZ4Bfe8VgQ2j9",
  "key36": "5ZFcUeTY1WHoikBVuSb7YU1xdCepfoNyB1MaA1LFqi6phn12aGP4rb475cKef6ggKkatQ4oMeCwwkfhDEEmQYiEX",
  "key37": "2NZcngJkUnscNCdexM82FtVAFY95UKJqsSmaCJmiYQJKxVsYW8A9ZauWnxPc3kofy2oPawjTxz9FXH51FuJKG32E",
  "key38": "264M38TtweVHGDiYY6EvMJWmvgdKy9XGrDTBm4pMm5yVb2dkF5q6LFafzGHw8wH4aKVV5Zem9EMZoEz8qSwSj4Vs",
  "key39": "37e59je4wwbJcgbedFFcVWQyQZyPWjHWMicvPsD6eNmGBV53vJL1iiwgs96NWGsAorGWhkLX9ea3zJZ9AeZ2pFoh",
  "key40": "3KFUYhkG1hUL97Q9FANhuzkKPWVKiE44VAFcRao6ZEaCspPKYjoqsQ7NyCcdEVQvaHWBAfa7bnGKmdJZLR7qcCUz",
  "key41": "2q6vjQ3xhDzt474mBAfpUtsqWWf71wJcFuEJsETiXXtibSVjvYvhVqn7ayGKNC2tBXVwXY4LfnJTJccoLDHsssbo",
  "key42": "4eA1bdRxfVuYCpYXqZfauZs1Pcr38HaEcB6tfdRPTTNbCeTADSxoBHYxnEaLUv5NU1DtDtx14NYrHmig8NLoDN8z",
  "key43": "3jpAaaVudGtXiFkkCzFY7nSK1pbgZfVULC2qTrDigtJq3RtZhkTPAD1DATrcuS8irEK635ahidcZ8zXK11QEDWNT",
  "key44": "283zAjJkiBb78HDysu6bAd8Mt4MWUYTak3BgYwL2R381k7h4wX26bNjqb78GVMW3QgUhmWqitpGWPgodBMRMe43J",
  "key45": "2wXz4xH3adX2befqpirgzdjUNP9L89NpuPFsUEiPouHVDrrnYm1XsWvr3uft529GmPVCSZ9DQg1PF98pHxZ91tCW",
  "key46": "5hzXThj8wegpuJPqg4GwSJyPiwYmhZWh6DTimk16nCYJT2VPjPgnAgWfLszKqxcGUoQkJk8mijoacJ9LxxfHx3za"
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
