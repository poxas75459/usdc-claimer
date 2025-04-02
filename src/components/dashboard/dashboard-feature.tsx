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
    "2xWeQFXWkCtGH2dwyuGQstrNBcVfSr6kn3GhiphEGF2693J9r6zmCJ8EWqMjm4dT8hdeiRwmkYVdjhjauDSpooAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33jnHFqViy5LR6nbDj62P8AmHWprPQcfa91uW61P1ZSg3gBLkHQ2P4LUdDLfgBn7ZoS9swnHGiQJFZ6aVf5igk4",
  "key1": "23jdR1vyGng2nosTH1K8txYsPPJYDuabs6fGwGFcfL1tZexE18PKyg9xKsV4bg6MfeUAikwybXzz5dAzJ4H8WbW4",
  "key2": "4B79QtUpwLep848tjE7Xigkvacnym3LcDznKuj2pRWXHMGJaELtY4VeZttr2jiTwm4AmcqFMh6A4ec4bsdAM75Ng",
  "key3": "4UTfsMfBiC2xetwMQiWKGVEbcnHuoM9FwcvzxQkQrZQupymRwHYWXNXN4QWoKQqTW2PhjM5QtUUwSejrEQg7pvjW",
  "key4": "5drAjkeWHgyds8ScB4EdFntdb9QQ9HjnFnKK1f4J7byEpwiYLkFRQSRBYuiqPvBDZo7UzWF4Eneps5qRvx4tMDH9",
  "key5": "quB5adJZiyaYqKkG3veyiygUAgpqA61k7XrAp8JiL4Yb8W7WmWbFPBaHSYUsExQTRe9MeNb89xBUZyLYPShEaKn",
  "key6": "259sQ6HFTq69ghevoXG3eD6T9Vaaba5qNsN7ytv8TfbDAbF5eLHSXKAoMJLAzWEopyMC7i9NNKgFuSu23vqxmZ2f",
  "key7": "2fKvsAa5VHxHfjjivdaXvbivYQ6biUpr5AwVi7MPC5hFHGy5CTf6EkVHShALQKXiM6zuFrF4LpL6eHyieDtmCWGB",
  "key8": "4qBQzQyKBAFvZLpsuPAgUwS9mP6iMC2PDpABicTZVsurk87kGWJLavpC7Xyek3Wenrs9ZQfovfVYPjfATvHsg1ZZ",
  "key9": "hV6xG9D8hZBKYDtpaR4PyvdfRqaxZ3Vsmz24AcpSob78DQyDHjS2ciLojVfaA26LoU2YhSHMuXZzQeyzieMKsoJ",
  "key10": "4HsumjCBnBXWKXCwKt3K6hq2UkpcM2Pbu72Z5X5SZzdezw5k1z2Lgm61Q4QRLhR7569pckN6JgSVW2uFzenBm86V",
  "key11": "4xLT1mbfaf3aLZJT1RHXqjbk1rpSDi8mkzS99RLPeejerfQAafkdW6kYvq36roFC6zNiFit1wBXfTMxw22zpFe9T",
  "key12": "5ANGWxHXZux3PjgNT8DmYDcr6SPEFMb9zDU3LE8bDTa9igFHReyRBhzKhL2PodZATe61NjykGe6r57WwuxrW1i3a",
  "key13": "2E9hFgmef8Y5QbcnnMCvVvAi3RoKur4WmBzrqpnb4vbTmvCfTvoraiatYSw5RezyBXJtcigHU2AhTan9fwB97pob",
  "key14": "4MowjixNPZsmT9BG7BJgGBdzeAse7aCzevj5ZK61U4sb2LYXknWuwVNY8Kkfqg2Bn611dNVyfGuwMB6xJiNQGPPR",
  "key15": "4yTG6eTR7zuXznZuvfyfgnCXxmsnzPNHWxs711Zv1BoUXZRuUUT78aGV1GeHVFe1kbKDgxTFFgW2aKRs2yDZHANT",
  "key16": "5qiWzV8fVAAmzxW3fFpQXKcwaF7jh28zXg4fwfYsnfyco72gDGK8rBAr4WY9V2RrTPB6GguUMxaZqFs1mFcPJMAs",
  "key17": "67TozMthbtViCPBFNrfev3L6NCV629a6Kh4oBFXKf7s7yiXB4ndpyxL6GHSxjbZfgPHQL1gs7cX7ub5rqhsUqxWW",
  "key18": "idNbmYoJ7d3bhso5foM2KR2HtTUVZT6j2Ctcqb5vCRCRLgsC69kjuqpXn1AMbxpkR8NL6f8oSdMc2HbsjXGvmhv",
  "key19": "3szoVYNNefbJtFULAQY9qm2XuQ6NG6tvjNsxpLJ3zSZLiKgDMT18EzqJumV5BXRT2nKscamJ69D9CAx4aGC1giW",
  "key20": "62h5a3gj1szpDnZHEvgKQTVhXRPZHwBNkyd752De5kEqppQC7MofnPGVbZuU4fgvtsmrD6ewPdadHG6rQkGBUtb7",
  "key21": "4uhpF6A9kiXMFifAZ9hVip31X8tvAUA2CQkKN5uj6yMcQPg5tW1GtsRN2y1LcJCxyRsAQsto7pVxMmc1LMVSXCsi",
  "key22": "2x9aHs5NwcP978qLnRtch7WeQXTrLPMxvReXh9BkjwRA3ivvCs5SMcExbWp3naYCAzQX2Zssqgd6kFqgSvYaCHBo",
  "key23": "4oGmydWZtW3pKobfETg9NNSQBiyEZTbLc1nCMPri4jSkFwYi7Cyc3ty8mEnG37irLNPkQ5Pdn7h62Yewoo7z4cCK",
  "key24": "2u3KTT6agYtyBQHaWD2N3Uu4mYHiyJq2zJD5BDZawgyy6maWua4693JjqVkeVqrvNiLEBsRFvBRF2dgbLNoTWjCz",
  "key25": "2Bs3nhaYPzCWeEbinZFHqEbQmcTqnksthviYwfGWWTn2pgNEDvRWu8mpEnCDdBgVxMMu7jDuCt9zzHTfG7UFbeq8",
  "key26": "315ivusjkwM48UsRQ42DYwbxG1pUddweTTYSG7YLb4UuW4uw5S5sikzHy4fgpLwZJ9n5dUJZsxNKQ6BcRLaS5sEn",
  "key27": "rZsXHxCgpRuz86La1ukAUioFwj89VyWrDDv6kkis5xHne9utxqmSnk9HHaEeJd1H3h8iLdJVMG3xexUsc8r5wWE",
  "key28": "23SvrbADiaCufqefjimBviStnv51TaYbQsEvmvJfbXkzyMimCfMCYJNrP8j2iM8Li8e8TTsM1uZxVxLrB8Fb3zF8",
  "key29": "v5gsqaSHVd3sLfbj88ANgCvC3NhBtDNUn1WtYgQ7YyqpsuCyg5aGZxuusRZR7XmHXe4nGHFirUzWF5BQQ5kiLTu",
  "key30": "5rLKkNHYfginPZVBHNaezDXDq5Mt5fcb25oAf74GsUNevbrrRmH3zWKQfABqa32Azx5kkqR32M63smDggTPcyC9e",
  "key31": "56vBeYzZMuTCJjTHH9U2iwoMFRSHuwQdWmBFZLvEcr6JeszBWScj7FcoRe43rLoTfsP8CR5THoDK4wuoqBLDuxyh",
  "key32": "5NfQQ8zWU1f5Km6dMFt4kfDcg1TFwMKBtiNMZUuLVVZ5i6CRreJD5yB8AxR5JFGKySNxS5AMEWaiXmcu8FxjVJhg",
  "key33": "4pH2inybFdr1bruzae3xHERWaAQ8fbnAMxHR2DCE2YaUNkY6wh4eZe7bHY9jpnaZfdjGgfw8yMYpwCYo5wKkuqkA",
  "key34": "izbQ5hfc4gqxx2AawRJp3qhSBSRs4kSrA5MZFaMoUeQ2ZAiMFaNibL1pXw5Q6sRCipQmZYjJGto15QEurWzn4vG",
  "key35": "3HnsaEGbryRa7qq9RwDn3gXZ9Hq1MFxsmCwzofpAbLPQcofWpQpFawSdg8Dx5fW4kkEfemnqrW8oqeL9Nnr5GChC",
  "key36": "3dktvZrWtGmGHuYJbkyiCqjLCfSTrX6uPQ5a5vqBysp6p4hsEoc4KjaEzPEb4AjN52ZohogfXyuwGVoGKr1MmQSh",
  "key37": "4cyR26QKUGWnG2pwnVJTM44jdAXY18Nc5PpU4VvmEJoCs7fZa5AuPVdzkkW2f2vnen4yB4nY3CneWvhKf8YmphQz",
  "key38": "2kj2AU1aksP6Pm1pY9gemuLCrPYEcYQBYU2ygsu6wKx2icSnYoqQ9c8m4oto9mgcyZPaprnVtaDJesXPyDh2GbR7",
  "key39": "496icSALREMLjoA6D1u9gBAEzQsWZXYRAsS78t98qrXmKXa718HopXxuyg3hPSQahhzkLeKwwaqDYLoXqEaohqbb",
  "key40": "65hfqieAAURdTDJMAf7sxnD7MPFenQD7hA2sBPQ3X5VTZbE6zFvSb2ztmenT1j9neZyHL1SuJaP4y8YPqCgLp31j",
  "key41": "2bkjL7qV3cTEvuBXeD9sKozf6Ru1znoUPDSa2nWhy1w8ApyAyd1ue8kVPYvg2C6cw9CPwYmSMfkc84xhsRJohBJp",
  "key42": "2JAjwLKHuv3kJDj3g7YMkXoFWY3Tk8fuBv3dGxn21wxqKtJT7kd1jg4tC8efPf84rP3dfpB8FwNzXkkKrVhveKWZ",
  "key43": "LnhxciurQe8QSxxcyUS8zTXAQuycBr1rmfGcfMeNySrQRA2WtXn5XgKoJjGE2fhvboQap3tTwiDQygjhDMke4u8",
  "key44": "4bB7NpTB2uK69JDapefRfDf2PaiKuLA92HRvEsqomzKcDXCgAsjwXHi2dVDEaNLbCa5LzwwoV67kP4uCZyh5hNze",
  "key45": "24ozV7s47jxxRbasWeikBJVXCd1KxDhzd93deyP1NBGey4D3vFoJ59cRh1wdL8rbboj3JXE7HAS7mBhuPy3u3rXb",
  "key46": "66VkUXHeoGuF7EBo2ijaPz3AK9hKsioYeVTJAb6VPNXkThPN9iQCTc4ozfESieETMZFQwvGjTNL6UyK17D2N1Dbv"
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
