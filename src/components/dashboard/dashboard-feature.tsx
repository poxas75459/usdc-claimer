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
    "2ezqacSyMh7YhjSCa6DbF2izjXCve3ytaL4jEAyWYz3ptR3BGTRwmjc1W4izp83qWzC7v2JFzhi2NF87EcHXBdLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZtD2BSgN6npjRNi2pZ73Jc9tF7S54Cir9PzFRgXpQfrBc6mtqVHdD1Ztgz6ufvPosrvXRjJRs1uKAow2ZFHQWo",
  "key1": "4tt1UbJFRmvocpc4FeoeJ86MFNf9ZuLFzAWfZzpShKCph44pTVvjrEJ7o1g9iRmHnp4d7GpSH7LxpiWhBWHeWVUC",
  "key2": "KKKdBg5VNXFg1u8a7ehF3sPsF4DL8UMLkqu5b6DZPVdJnNkykpdXjnjDZ1rjLy7JqmX1bXJuug2a9aUZSd9CjXX",
  "key3": "2GwZiJFYRSUYz2cf5VE5XfhdqTvCR2hEF4PfwRDQ4XYANM8ThqoikX6refoBpGatGEr78pQYwvgNkeV2VWzF5XuM",
  "key4": "3xKGvEdzfCPfq9AZ1vrwja7ze1hpE3CeQdbAdC7H1RCrmBDuoWmD6MwV1MNMLBvUH4fMqE3m8jgvWcTkYSn3347e",
  "key5": "49ZGs3PMX9z6r6fxQz1RkjJUtSiG4hzFxPVqNx77qFMKfNshBGyVXdPiMzPsW2GfMYffZXiNsuwFH7MQTP74vSZW",
  "key6": "hMuRpuXHr3veEsDawMyDUXaSdkLdimfe4QNufsSo7KT5M5qAs3r6c9CEVA84CxkUJxxa59TwuGAFqeZdvxTHJ6K",
  "key7": "5v3FTdfcd9sZ5VTCGeVXyU2VR3BbZXU47g7X9L2FSeYP2aQy3r3DtJv6XGDNrUF8d9wMzGzkexNxSNJBKegXE9Qs",
  "key8": "QRAAeVBDytJnCMg2u7bzGAcrUXMt2czzGaMqauACLG6oqH5Z482cmwG6NGbJYpd6aM6cutwVgks2vDkjsG2FiQu",
  "key9": "C4KG4EW47URN7Ks3pxELsFfGDc16gpCGqAf19tcH5B6cu2v4NbSNC9suuuTG1vD6JEdTojs1DvoSRTUxZBLWdVs",
  "key10": "4LKaqJ42m73WFVALFxLgRA2uQG8ZiN6sAJjKUTXDj2rPVhASa4ed3fjr4DuVPic4wLzTwyDGwaFnCXamPGHHSmuW",
  "key11": "3NU6DL56fe26YDsiu6Tew3WwcfR1x9zLwgEHPi87zFCFLAdyByRgYtUWJgy3M1KsUaCU2AniuiV6K7dstCzidVyo",
  "key12": "5P5zBELte2YA3nQnRsDz6i3hC95BXmv7iyuqCB4gKmu9pUDXu72swhBsxLTVcDsxNBES1eceaiVgGcQVgPkPGHW2",
  "key13": "36zxeSjY8BbCyKnRBmM18GaUxdiv9Hsq4Y9GtL8BUtSGSY7hEKgbt9fdqkggZMVg2QQ4T2a2su4332jQ9uSB6ETE",
  "key14": "2e15HeVBAiug2AimVHq11wrp7kUtXp6B4vt7oYQgUysm9QCcqQqpEYZ2aNDbDHacP1zye5vVsNY8jZgvaZuBCbK5",
  "key15": "67jf23zWYBPfkEcbcERBwLKdim2iKLmcVq1cE3Gi4rqF4aSkMNhQsgmtzxMwBYM2km3VK6qynjyJcjpkNpSUWpEE",
  "key16": "2jhGUcnkEKzZNaeTEXkkZmUqey8CsSMo1q5isNo4TxRzpiPNS9BdMCnkFjRP3zqfBN5V4B4D9U8pK49f5SzQhRTe",
  "key17": "4wBFH8m1iZFL6DbsT7GfggZuDiHnv4eszKwZugPgshiRy1jMVoYxFbUva4R9zFgML6ri6SzRe6e54Zuh33XR7JZm",
  "key18": "2WW1soP1Z1rrYsPHJavRFuL7uvvG8287TzXxxzHCfWHCgqmcFidxLHbXAV2JLgvEHLPtCA4bMWbCzsgYatEQGori",
  "key19": "4hPzWzfvtq2m6sxeA5LiurLVBLVi6FGnrfqCqGmEtpU5MH23ei63NH25Sk2e9tQQZKYyk3iRanx1SQK1cNt2SyFQ",
  "key20": "4EzLaTo65EufHpz3DH5GixweL7zuSSYXcfgVpDNu2EXUQ6hqLvkNn5eb52wqS8f5FgUbYCVty8qn6qW3fa5YUR26",
  "key21": "5YXi63t4jXgjprckgNfztaYtozoB9g9hPSGyd3EUHj87djTehqdkBP9SzP4DTfxNjppARNpNk2pQP3VWXZAH4FuU",
  "key22": "5TVpwvKGpaaX5BUEGEuyzyFo32PYbaybWYsdePP6gMwwjZFA6QRu1iordnCPPki6YNtAncXvcQnJF4Wnk5rtzmRv",
  "key23": "SfvJtxtQys4ZSpDeJnCPzfm85kuRzN2eJz3P7vXhNYgxf9zN94u2wmsMAwBKVbivpqyTHN78nPhu9Ais9ueUXKt",
  "key24": "3Mf8VPaJw3TjwjyHjJEVhXKaFDYvw3SMWna1QerRRLLBGTaZwidYVSLvwq3JDGULXfYUfXd66AxkdPHjKS3XNp6a",
  "key25": "3oEKDGJ6YyT6oixVGnF2wCBKCGZ8s5BBq6GBVHxL1csAkxcxiQtsx42kED7hMvDptsbQF8fJeNQjrZCdJw5DvhYK",
  "key26": "5Q4qbPSfjCT6kUHv6HvpzWn1uLkvvnJLs7TxWvMQAweYrG1zeGhw6beeKpX1g787squ9ba2745u17Hgw1o1SLgen",
  "key27": "5cg4F2cvcUqMs72z4XQThhJTjCgAg1DzH24f4QMFTSJr6GPNwgV9wgj75zsYfmfkPNkuCAhtg5WtK5gk9fFWsVGa",
  "key28": "5SmPta5GZPvdKedjBbbjuKw4BQ2ECZgArQpSo8BuDom8agbckTapqG7ndtKWwgCG4VaUqrf7egmmyF1RrC4LNybg",
  "key29": "so2kM54BqgNchwAtNb8gbfxHb6MBVQg4ZD3Pz66NuFZGiRmhaenZrYy11T8k1Cib5hVSFYexNn3cpETZqJkPJpE",
  "key30": "sfNa2cSgYafzLHX9tpc57X7gZ8KVDWpsWGxXRNgGAfwoGWkjhphZUXTrUfpFaSiXctLZv6kCH6RTQC9KJR1cKiV",
  "key31": "2LfhUVUZ7Un9H4DGC1EEvu4YLP1hcYjTjp8CrXGSosAwXKoePchf1Te8d7ibVt2XPH6vEwdyp15ERdGuzd3FD3ND",
  "key32": "2VTuwJ42bV2oD9h9cwu2n3XVnEUiM5k22R5fMvcwFsBeCBnyfX1FBpWYuwoKDX69XMaA5StQTU95mmWTCkiXWyp2",
  "key33": "5jXSCQ9Fz3ZkZYJnpzhGd7WiqM3VQ6QDbiHErASQdckAS3nxFYmv8DegvgnonQ8udphZEwg9LrREcMy2R5Nyxasz",
  "key34": "355TVwiZVzRbdkroT4RMG2Ms93msxfXvrHGu2iuf2VQFyW6SoVXZP8q6rVMHkuiixKhQ8BkHcucziS6USJ1FKWTU",
  "key35": "4crPkUNToX51g1NC4F3v5rqifhVtzCoCCXysrxsrJfX7vWHbHqPwYnpt9RbtYvuo7g8ic1TZWNYWA2uCJYCkmAbN",
  "key36": "4R16fcyKC1goKR9qSG62dQYK2awUFTpSWSNvdTTF26GzxFzWfAZiuFzjiK4M8V7XgczJkxnMBtku9CPAbczNgn6Q",
  "key37": "3XnDmPg4qMD828Ndm3GhkKdHMp5z5DHGuYaiNuS5J6hKNr3MGShVSfZRVAG4FA7ts8TVNE6o1wNRB8qXky3AqYjm",
  "key38": "nrhtMr6FS4ejM3mvxXdVrGXUpEccj1EmHumx2RQrW2VFyYSm6mSASKptRYsuyv7hDPWxSPxQG9j8xydwUQUw6gJ",
  "key39": "3KSbAAEZf9duCGMNH5aneT5X6EYiSPYaG6bfezRr94Njvzmy1ePjNvdicqtZCLxqsy3CavtgjT7XZC2538Pof4tK",
  "key40": "4WZAqtUMAa54LCQgRn7LNYnqt4z5USTV22abCBDjWxciGKigoyupqZXLv6Dj4jj7Vtw2ddrMyKp515iWSXLH7Ld2",
  "key41": "BCm3D8WyTzJV1x22GjeCWubF4h4vkZ2UbuB8TkcWjMAB2W29WAa1rCCRao5VYB6fL7yXkYTFi14kPoryneXxwwC",
  "key42": "3VYeeqeRtHJW3XnGarEVN8C82tP1FrTSNSF2D7mWAScWVmie4aWPdEU73YL994sq9U3eMrn7aZGJRwRHQ8Naouvt",
  "key43": "4gvLVwHvFHZxhk5vydfKQacbBaKwyPhdT8Xb9LHtfAM62Z96fwjhCNaSGmNBREZYUtajhW2NUvXjvfFRLSKJptJv",
  "key44": "4n1NVNUS6nQkMLjcYooWC56LuTdkBx6PwH9Pq2xEk84sTDaiDqxfMFY4BnRib9mR8kY97H2qtcpBxh2GegcjD2of"
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
