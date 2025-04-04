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
    "66edRAMJJp7EqYva2XZNzxV9E2nZZ49LkCcRkgmHW3KvCnbqYaS5bfNRaUhtTZX891BqA4zdE8FU5yhDDW3UnLbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTq3GVAiegV7FzgG1Vc8TB2DaixcxR7kdDREhDdMyc7uF2Fhh2fYehh6CAyAgzbLRPC1fSBavZNE2jhuoghAykC",
  "key1": "2QWDgwHwaP6svjJ9YmXoUHAPRrmgeVW43XDyM7vmv1Er9oTuoeQ9nQjNHYetLqhS1fngq5tu8GUiMZz4LChh23uB",
  "key2": "4Bg5GvtJh618PqtK6K1NPWSBYcsqZzQRgA9dXGn9X4NZVN19RCDYb6rwriEDxjSdHf4nQTkKiLbAx5KoJNpLtoAs",
  "key3": "5ppU9ENCyfpD7Ko5bSimHRDx8oVUWD9hTbWEGmFZzzMaU35ZXHa9uQ1uQ3pRh8SJtow96BovdjjLF35ecrfLLvgY",
  "key4": "5bkWk3DuXuD314sTovbELXziXger6UtS2wUG16vDZrf9skt9FqWbcLoNtUxGCgMWXn9jUWuexYWF7BEoh4SPF8JW",
  "key5": "2actZkuF3UjZTwytx8mkA3GEWEeg7mzukzrL5d2kRLMedvJYKBKMssTQFW84Y9LMtxr35Pjw3rMb2G4xzEbLQoLp",
  "key6": "219aBWo72PnzAc3V2iHSnaNZEtBgVqy7Ke3wGfVHQcBGBVzkC3MG2vk9fqL6XLu7rApUuJryi5RzwMa4Yc9NJ6yi",
  "key7": "4J4STvPXK5i9d7NhmQTkEZs5eWiQMUEShvqvs8sArT9R6BZ38AgsEjWuS1mJPbyLNCSRJ9npZoW66gVFHBjpMx7x",
  "key8": "38dqv2fgxFNpPm3TcsB8hqugyoB6qE3RQUTnmibGjepKqmHVpsLSp6N7q3fnW9EkJNH2NzKWBDbxLr2SJWa7L29S",
  "key9": "5Dw4te21EDcdYRXLkQu7rxnz8pobVHedzx6BMuaHSvW3Cdvmiw3qpCMvpjWfYQRxzAXqxbHMawriBbVgjmkziLMV",
  "key10": "HY5HQuTS2ZG5YPqRrAoaPDxTFqEHVCKR2ug1L9vFWfU9BxqBR54LS4JB24X2pnheQL3ZdXBZFkiu55HKBxMss78",
  "key11": "XS5TXqKw2yRfbjZ1RGyufykKmAU4Wjhg4dqVFfmr3njJWtbx6jWnH7wD7s6WPXdchtoA31Gk24rRS18eVVHwYCD",
  "key12": "4Ng1NMQobSTGqTgCzJcRFgbqbKmwdqUGUTBXqKHUBqZQPfoC4xMqfCyYFcWxoLyoEeFBYXi5sKMF6HXKRgpSTHDJ",
  "key13": "2QDp8coUNtnDC79K2wdQaaWo9G9R1d43iLKQSqkqg1rXp5ho4MYc1mhePQu8cHzSriQzGC5xMqdD5yQWE9WDrnye",
  "key14": "3YxoF95mibq3SdBSstsygWyJpTKTCW5nVTZiKhZgDE1c2zpWmv8eHdp8fLypCiCB32sCc5WFmFRip4LFJqPf9URx",
  "key15": "2AKTHAJKqbDVL7iGjbNB6bANAkj6EDgmCaFrv4cF54Fwhb4V9Anm6nwWwYReewJAeRaLp8XFkavBsEKja6Z8jfwS",
  "key16": "4HpHBGVoVUjKHYLtqE9Yjiwz5i1LcFwBtJkBfjMZZ1d1jNYQLhDDoukWWG1fUKFAHj4gA3iciB8jEjk6DJYJ25pu",
  "key17": "V1Z6hvcH24XpU1UqkQPPVGtgoHf4CRAG7on9bGTmB6uH6hWuEn7r7vB6zGSe6z87UxA2AcrJEuyyVyuJoX3xfHN",
  "key18": "5kp23DL7bHovf9mHDGDxM4yCL8icQ8jcF2PCqk6QDX4a7w6BLQR8E3JcwRehwWc8d2uRAq1gRVYTVw6Jet2Ljxz7",
  "key19": "RxqNosGbKKqMihPfSTJYVmrR7PZggcc5Q1rvry9k7Sty1NE1ArcbTfcB2AEHvWzoeCDy7AHhoKULbTTHuFrMkZG",
  "key20": "5WKxDjFvcYWS3okTcDKtNvFiBCpvW1opnHHjiGsaZHX3wE2xdv6RZjaago9UQbAdL9HbLzc57Zo5MdsSfo7wvxyg",
  "key21": "etWuZCiwcNU978FixAV38xysPU8ZF3EcsVUT7wQuf16bdZwsWMhnvpKCzXfyoPpkDe9Eq5NVdVBUS5oBFTCeWJH",
  "key22": "5yoYVzMtLo67f3bNCbXT2JRPvbLrCrqVEKiN85s2fhZD2ysyGzp53xKd3uaXrn6Ts3p5kCSyTgXyRrgsgpo8F8Qa",
  "key23": "53QFq7mqSaTXw9KMi4jczmqhdSJe8d4xY3WwzBMbLry6FJyNu3PDixoBFJpp1VQS6DbHdmo8ozRfmMtCUY6JEhRr",
  "key24": "37ZJEPmdyXax14TmaQSJLTfJGyokZjFmDuLKXk2ihZGb8DiH7tEE5RJkDEvsakWkR8S4dHkhJpwAj4xBwcAQuucF",
  "key25": "3tKe5uCJPhEULkJ4e8hayuBeFRzLpUPgST6cu8Yfhx1Ft91whQdp3U38PrXZ78r3zUkt3pmu4wEWuLE2NDVzi3vn",
  "key26": "5wUNcReKYsWp4ib57grRhHyjb2EonnHXi9H6J2dLb2x4xrNMJCyadoByy8EMGVrc83Bi8JnZVTHPCPyM8xgizfYY",
  "key27": "7FeT52bwNhZY1psaG5BH6nHWJq7XJursGkYhDG58H4gNFGfQvE5yCsdzWpcZsqjM8oHfaty9f6DmJ5qdjJ6FKWD",
  "key28": "2AC8ntdTeRbzAowLpJvwfWD4YgGndycupgJ1Zu1XiNLcm4pKtTCqzVE4NmrvvUGufpwqN6kBwJqRTTK9uoHvJc4i",
  "key29": "5jqKCFSrVqrCniLXTzHCr2tKCSJ2zRkqNRbsQtgWmvKaf6huEn6tGymwiX7QwfBgmJWG54azMFkUa6ocJqLrTdpg",
  "key30": "3nPXg9fMHEukdye1326Gba4Qqm3G56ia2sLDEn67A8FoJsc6Ud3QVRN161szV7atkNMcedsjjYMef3HH433AUhN",
  "key31": "2eM3T7pSeQFqjov8xpUtuFC9xgeYrhRk5ApMQUrhgHYGmNQkfZhkPKn6dFUjrCguhupsmtdKL936K9eGLADJ8MPc",
  "key32": "2XxKHJNmNXgdwps1HrNCig7o8eV2j2k3KeStgMCoJJk1QgmYsnVtXkXPo5xU8PrNrsSo442u4MgBBmpotQaMiz2h",
  "key33": "4ujxG5ysKEFx3j3fjZhJk1KNBFzYBoeK7MxPu1rYuA7ds54RBr2RTHTFvsSsQFrJfgYR7Tb46DUfG6t5R7w2TB3",
  "key34": "4gymyKEtcJJ8rUjwuansKxp6GXV9DFH4bxtkJMiqBHEaMdW2R3aYdDiJ7FK6QGppdMS2qYtHPDqht8qMrVnPnfiP",
  "key35": "4UR3Yv6GwQC2b6r3bKPJeQ8qLFRZ8tT87YQDGBNoadZDeQfrfYNnkai6VT4KsoReCPkoqubzEJXNxNuMd38FKNHZ"
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
