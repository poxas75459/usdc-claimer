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
    "eiuvGsft5gh6WnTt3pVSdcmKBRia1o2wzC1p7B2LfAStbVBJSW6NSrmPed4hGqcAoyTuic2rZvNuDvEJYeUBdHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoppaKTvrhPZNw2ErPuy1snQutgSJon3BwGAVaLn7byj1kqFXvC6Zhg4SMCykyqLpnxWHjE4juh3uDW81Ehjh4A",
  "key1": "23A6oRisAnbPuR85vnWMCvrSyWYXF9dTsZKvVH6wJ133br36yRAD1dmTkmi4rcMEeTrqfon9XMdnGfHtEyVUC1Cc",
  "key2": "67oZmwLNq2MwAYjQ6vWiQYKoU1iViaxUCy95TXNzCh98ciQMUG7g28v1v2s5zyYumc724qC4mo36EbXFqDtV8G3B",
  "key3": "2LQsV7PaqTnWHwFPMRv8iB7arzHqqGan1rMESSRC2pKncKithpgo9Vx8Zc1yxjZaio67wQiBwPjsKed3WFLksCDS",
  "key4": "2PpqwvKDPfQydmSVmS9vKNxDmdE9sNEBH8KJdVzXnbCYsRTRWjWYsoiWp42WbKCiuQ6hGzkjSgz7fSjaBRoCxGPr",
  "key5": "5WRp3bQTexMsi11761m5g7PaUxWbWohsEAWkP148gKCfDttDf8NGpKHapEuBDFzzoVHgqCrjS5WHtavi88fZc1HE",
  "key6": "41vaCPbTa42MmpfyGw5oFyv3y4ApsbEin2rAGWh2QJcxH3Kt8aCZFD9rq1Unf2aPvhnqFe2HEH4wJL5U3vYSGtVa",
  "key7": "2BNPzGbTCCCkhepkbRrZwpRt3LVnEnmd11cUbJJPezZFBsPR4RZzrpfz92u6ervVdKwj537TPmeurdg7KpSP29rV",
  "key8": "5bVzFEuY9XmX6S7M3FqRSXHYdrL78uTSB9q39GWmZmocCXhNJMnPeYphfJHsc1Zd2mt1qzkztwmsFeGUugDsQRuZ",
  "key9": "ZjUAgdpZ6eX1N8SGN14cLQPQ1wwCaam8y7eMZ6JLwxsJRXreV38FxsSUJo33aqWH6ZkrE8oQ9A3D5atnY7ayWhc",
  "key10": "ZGjfh2MqKQeBEzxFyG2iia1poATAG5qd6cVED6SgNwvC5jaGHxD36ExyWQDEhUz2JFZV8PZB7kUFDPBFzubEuzH",
  "key11": "4Q5fX4VfnkBZAJs9C96kQnJckG4ZocZMzpZKaiUY81RMxjsrKK8Dd1udm6yF5otGzSibA21nUDEZkD3gcpDu73SQ",
  "key12": "3VHC3oj9ktuypVZpM4wm2gRXispq2s2zndbEXUitqH1yfNmXDvTNkGX4SnGuV5DdU5imiyLqwrVGD5m1eBfKeNTG",
  "key13": "22uuUVnnBd7SeK1naPc4H8u7KcRso7FbY6s6NkKYBGm6GZSQW1HCyi8FewKdiK35N2UPu897yFFBcMrXWmdBTipG",
  "key14": "eyomLS9k17zGJcpurSErfqpNwZx6Cg1AXxnR1mbxLbbTwm5Yd6yQMRJEcz6nafkiUHdLkv46HFLykn21jA7RYty",
  "key15": "RE3fUJ7uEV2ZfubYktybfue2xsYtUz1PsQfu8e1YCW2d5QDuKvJjihsnJRyCYfrqgXTo1UCc9dtQPp4Age36RbC",
  "key16": "5AnBzWwtPEbiPr4HDHdXnrtVcw3KkQuJJbBmj7J36CZbcXRn6k3eVG5L1D5h1yfvD9fA3MNF1XpA8J3cwzVW1SgA",
  "key17": "4rToVnruB3N4AsvxuHf8GYu5S7cy5g2iKn3bFCrxdivV8Q4WTDXpWUgsnc8wv1fGqTAW9D6rH6Ju22f6pg6qnmgY",
  "key18": "acb31RM4qx3gBCinSQNnD1tfXEZ1Cj1QnoLA4BiXTGqxk4hHAa51gRtZBXzDrr1FsvMN6w6G8SCneqZbQ18V7Vn",
  "key19": "5S5diWWKwSBqpBvcfE243kxVG8bAaZn9BYaG45YeY3vfCxGfwqAfG6PJPhvX3ZdQzjGdSncAqJTD5re5ZLCh49Ud",
  "key20": "3EpANVRwjDjUzo7Cq9d1xUv6sii72YkHLVvXbPNkMX3g5AsTuGfAKSay6JvUieedUuaxjXtVUZyhoe7s722ohmya",
  "key21": "28LSmRy8pqTYVWa891uvUZAoH2SB66ohkTKJmi1PCuUoR82nAwha1VEhNN3hsazjAkwSpb6PaEXzwJN2mfB9RGoe",
  "key22": "5MKyibkGm8YU6BcrAJk1JXaMi5VSPdpJ9dsyi54nNneDj3XVug5TULViuPAQbXMuJHaR3rZYDPP4R85EY3WmQd7A",
  "key23": "44XpMjGZACHvmar6vMCoYaP9Kxhb7zNJ7cq9p6bAqE2jcBHB3adBuyZn8uQ1wRPuM1tKvmaSv6KEnFG8wrJH4DiZ",
  "key24": "5xZsrHa1TyEFa6rNqAdjND2uZKXf4ucVtAG1d6YPSnJNQtGhMDx6RQCG3ictJ3DyBarmCVmPR74YVt7SyM5f4iwP",
  "key25": "4Qm9fZva9Kz19Zor5Ho6TPJEWMPvECuuufmD1z73ekVh4FJkpkHSAzU9gTdjLhz5bJgKvkP2GtrKoykoncS3BzTh",
  "key26": "5iXpMGNPJQfsEJgKnuayAA3jqqL4tPBNW3gWJ8vW538qxt93C8hY7XLMkn2GxUjKd1JFVGtwjPEFA9gfLL1PZNjm",
  "key27": "21DQgvV8SKpxX77ehngGgqp2krGiScHngq4uUNhQ3xNmVT2xGwVJDphBLccksVBWcqo1M9zfpkT5qqgqXTPSx65c",
  "key28": "4DPsbHkVYXYtaRzH7jb651HyRCbrWG9tW3wiJBKpjZhFAgrz2WzEqm4MHev4H9ku2R3SMxWxZNL2BTkZ2SNjsxyS",
  "key29": "124LWaMyACBBNSL4iRZs3aNYLpwdEBnamTkKbmb13UArqQKgVpYwTrJGddMjvtq5kzK4JzrQSSihMZpRYL7fmc2e",
  "key30": "T5HvB4EqmWEsHbSJpWE6Kpm9XyUL7LiQC9S4VVGjZc9ug8nmapuUeaLkevQxba5yYpnvuvQAvEpDpuCHDrNmRyo"
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
