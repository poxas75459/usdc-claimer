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
    "4mEroiejy6QiyzoiNBuY2QXburkJnms8TjTCP5cUBwFpwnpkBWi4XNma27WUsE7i8SXsHtWVpHzrSxBAFqCNAsBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kNvE9Qfnu6UxwzjsXkRkqYjaihHaHFgnM9yYuv4FNW7E7jrB9DB7sc2zLYnc7EFYKET9AHV263YMr2emZs7QMQy",
  "key1": "ViEFaHCwBsVnp5mN4T53c2FeSkhi9aJ1B979BJiqz682MX5zseLXtfta873uyG9B4MoczYaG4ZqiF63uU6C9Skz",
  "key2": "4qSckRzQ4hnYygjQwpZEQDdvBeRciMwnSY2eGx6z39uVV4i1qj991hSmsNsM2n5jXwRFM7vKf6kyvUq6WoxbaCD4",
  "key3": "5fJiEDuSytRhAUtbxbQGQT7gUBic5HhpvAXKy3Fr7s2NDqh6t8mqT4wpcz7nqYSMHMMJWP79r1uD69yXyYo8kHa6",
  "key4": "3JqTrzbX5Bjmxdm3fEaUoKHTegz3GnehoCG55S36Ls3a2A6jYF5mF9vnbWvHMPXaeU7pgkNzUAeaoovPggRQ532U",
  "key5": "53kftFxSYEFhHFkstiNF1kM1oBw5JjnnphtBc6gMGJypN5hhitcGmwXhaP2fLwMKSiVzicLhsHJZxBbsQbhHgbHJ",
  "key6": "5HfMKVh4D73f5E3GXCbVfsoxUos6z3jaB3ab8ja9gX39XU9XhwGgbweqCwGtywfTtYPzrynpmnUKoqf1WFYqBskz",
  "key7": "5F9ntHEoTdKz1ncD8pUFUcXHWvhqTCpkWS7zPRD1x2fRZjmHrKVT4ptWzkyG4372EaQrXZdauiZJynmoSngeAn4y",
  "key8": "455HBW61xEThJcfuTnaT8t5CLGmC5yRZN3XpESB53dASUJw1sKhCHNLN5aJiDRTrPoTGYSb1BaiWFNxARRSYYXWE",
  "key9": "4Bud91msFrS1bLzPb7GoTHdQjKK9Au6nMFMbKBAXhmf4DrWb2KC86FF1DKxnDtFrX1z9kfBRgWd9TQDVS4fTzeYK",
  "key10": "4PYqMGiP5XzmAjJivv4sfkGp9ix6ZJnutLYJY219eMpU3gcFkysrvLVjWUaFuCkNzgvH3esNYuqnUvFkYbgNs8ZN",
  "key11": "3PWg5RVbQ83zfis1BNw1GMF5ppL9utW3hoJafZXK84MFv6PyKNSm6c4E38TYTcPREkf9gUbtE837vXxmrB6uC185",
  "key12": "64vxkmb4kurJPmRo5NpJX5LEAAHk99CaWh8JhtH9PXpnwCYvBHeWoWvQN1zzn1Fzj54QVvAEdA6oSAdKo6xfACVJ",
  "key13": "TH9H1XNYq19fDM9WLVbmeZkjRanM8yyRhWpNRrzsRNLHk7WR2sw5FRDbe6Vf7Dr7sJp8PcAafpMB2YzdSvk21hz",
  "key14": "2tFEWfyNxuDMbkySjaEocWvmcaetQQMGEQCXVUa3BCEiySgG2o8V5biotEUtjdGDh5C5LPFomwRxpyLg8HRdaBV2",
  "key15": "3Ffa6LGi36xk9FdcQ5SM1VKUV1aZt5z8iPvAZxCkyQ1uYn6xGj9rUY9jYiq5q9qVZjyuszzLfPjxvzTrsAUsXPq2",
  "key16": "fuPWkmiaZK6hoqUrGF8jFa1PjK6gCCHHED3GMgp5yNoWNQS8H2xZFxZtCbCvnrAWrUjNXo6WdDB5m4ReMSY4NVB",
  "key17": "4qfyEiQCKdNh4aoeeBM7YRFztCAeak6wkCUMLHqAp6WmM5WqzSDTNCqtXfBgNsNkpWWgNw8E259o6cy8UYQJ1Uer",
  "key18": "AV1wLRtY5dZcwjfjioFA3sFEre6Mg661dWBvzxkxuvf4MnLAajfUFEyNeim6TkZPehKMHix8jyVMsRum8qxXFqj",
  "key19": "4gtfcUnxwG7ZRw1MmZ5oRjoqwA7xFUkJodJABsYsaQ7mJbDz4GjiYDR4npXpiQb4BFVPBpbNqkZySXKRxH8TYP1H",
  "key20": "ZcANfQQd1f3EUBmmGx1qwvhuLc41g6MMFxpC3zbLD7GHpJEFFcM1tnAQpSwCbRkDGZniRsMhAPPmBP3tzV52Ht7",
  "key21": "3pvx6ekUogY29684Tmkn6uzS7E4KDxTe7cgEgDj95gJBEihHaKGKkzTcDQNWcUrXtoZAM9KCf54jB95dLbRmgrvJ",
  "key22": "2YCTAPKvpKBXCahmvJH2JS6phbboMLozyWPtcFpSh8BBF3hu9swvFhwS6a3vNB4WZQQDpfS6FQXzVSVkueizRAXC",
  "key23": "yfvq9eWLYzS84zxEphM3FrmMVNcAHPBqMMGXMPCNkxcwdj2nuNWu1ZfahU46W8oYiQFX5Tz7fuNSPiu7sEbS951",
  "key24": "3LbRnPs2QfkjpkNVxwb89qJKy3ognKji8n7LHUQja4wmfdtbn1sZsBiyhP2rnZP4tzfaYHXQnhmeZmCFieFdUSTS",
  "key25": "4TWtQCnQkLX7WcMAbaRtShgcxssuUnjNhgUE4wD4D9YRzNAwgFkyVj8kN7GgZKFtuzFwRmuFgSJue9Efj8wNU8oX",
  "key26": "59J4o8VZjKAMzhegKBcSMKvGBVrguuqbXbXCYLuqFzhD63NSpL5moAgHKhyuCfbWLa4Jiu6n7M8rPButQUDuA8xL",
  "key27": "5uHryB6zUh8kx25ZXhpDMxTG313w5eJV6XDndSMi6Ts7KqTy9sS1Mw3KPNiFibPatf6M1TrMCaPBgoKLfFzf9Y4d",
  "key28": "3gVNzba6aiY5mAprkNdhwoVGrM8Lh8qagpvXMky2n76kLmSRvoZoJv6UUuPNpYyPQMM31yvE8e8qkfHXSnQDQNXQ",
  "key29": "2smRJK1SyDPbhzcqCG1s55CBuDYEgLRsC1TPXfvejYPNxpNiC4tk9DX1ZHoVMVc7tZKz1Yjgubiky3fV3t2sNPp6",
  "key30": "32MAZkG3dpNZ6qrz7fQLm8287Pgiy64A6PXYf7TkWvLBKnAowpJKfo2FArC4peeMrdwMSohmqFEKmZg1QSvrkux8",
  "key31": "oPQWSKZ3cghmY5rdUudccYRgpAbqShL2PkjrbYEXgQEdAgcbrWHc3JrKrYm6gycMYr2vRvdJQEGaybrM8H1yFjH",
  "key32": "5HrGFUgEaXt8R1HGE7v653w5wZWZFanGemC7G9Wdhnhbjboh5UmDxUEXJXc2xLqsNb61CnmdAk5SmNbsZfZmVXjh",
  "key33": "45roMjicVL4RbuHgqNG1KgLfDgT1RbvqJeX79evWn9GqWHoEx1HPDdnoSh7SWTfPyC2B8hHJYRsEGFDvxUZP7XmA",
  "key34": "38KAVhvadTJQ3dvE9GyujXoH2hECRGvcgajK6tonFxZ1vrEeQXyvzVyhnKHt2AwHWQMe3egzSoDL7PjL68gtEVLk",
  "key35": "2pVzcqNL2WonmBNpqzbqfKqWGikuAZm6oJGt2ETbVuSgcR7e4CGxvSiJu4Wp2JfEBxoXd8pfDqV6PugUeYw5frES",
  "key36": "4JW5fBvvfLbS74nKRrwPVyM67BwbaK1ZcpjjhfPts3JXofVcetv9HRC3L7Htt6PZSfztq5U7SksZyGn1WEndideZ",
  "key37": "S6Tq6YBmZoiTwU2V2NaZpHF6jizEUqfiZGKcUNGtewa7XdzxjDNqq6pFkkbAyRCh2ZVrfvhX2YEm3oKGBb3S69W",
  "key38": "4nQVqzD8twrRydPjZXsmNoi1EB9daLZSW7gnZ3RXGgWQ9cM1cxidxoPqugjXHjPVV4y2U3wCsVqLsULEHPaiibEc",
  "key39": "5hhZNcndZRPaZn8uAzG9YTTQMKX93iB8aUHBFfMmHKYbHzDArj1RiEo6abFdbfLp61BkzfUUrcyMgL4By7nf1aBa",
  "key40": "3rHKMvXeyREXNcZqFbHFwnGGAhooe2QsyA7ahS1rDVXQgYCPz1sARP4txhNM1sh5U9bRwQ5mZGfk3nHFrPp8PfPt",
  "key41": "3FDUis3xWsLyVWXQWQ9cHrMaK735NrFDyyHTni4gku2E5qiMdQM87wAjovDePLce1akq4Lm7rkAX8nUFh5Ao1WWp",
  "key42": "EBNEURx9kA9YMwnsFkPEBXb5UaaQqeahdskBrWyMBJau3aNKhAJJgennGBBv48UUkvCD5uRAHC1fLxSNBicEyXf",
  "key43": "5NixEH7HVMo3vgfQipEB52hcAPCy1EfN76jDKUWwmQEGsHXicVd9hMbed71MeZSNkLMYEBrsopmtFU3xwW1aRTzo",
  "key44": "5YNvHHvbpxDs9n8iHt4CYfHYYskocoWCqkoA654utzBHMXuKjtm21V2VU5t1T4vYps6fS58bBF9Lhq1mCLJv44bZ",
  "key45": "3rj5u6z2PZ4v1vCVMa8n4NjURUAvhi4XYGSnASsP6k2LyzjtC6S57TMHpksx568qgem5JrErtWK3d5nq5pCt5LyK",
  "key46": "4xK2tx8vYvPMoTbbbKX3L6aCXrsV29fCAjeDpnVp1m7PN1EigkASqwTw81TVRRydxKBbQUfELC7SH2hx2uXFjGPq",
  "key47": "3o7ADrLsyPKchWiyWcXxaMFyJ8DGnCU5jdURtsiEnKQ1sEXsJ7AYhuH3zuftbm1XgPRrXzrxV2VRwwBXVUQQtaM1",
  "key48": "4ZbVaSEBENDbGqZRiz2DEgh7rTqvfNttBQeG7SYcSj5RsG3GsvUJgWymPkrr7R3LsNygtiu8LfS2sazCTjwdEopL",
  "key49": "48N8aawYUQu7cdMLGEPtRb15yrkD8LHvKuE93sQc8bs9NLeGP8nVHvoDpURZdmZfAMHZn8UxXXzAsYW5BMdKNPr2"
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
