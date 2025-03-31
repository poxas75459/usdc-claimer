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
    "3kG1KE2AB1zyxMkc2UKKt4rgs55frQ97gjnEAwNYRTCZFEqZ79ifbiLtbzYRkWhYY9hAH2v67GV5wKe1BqbzWRxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6ZEBYi8MWhDXp6ng3UNRZp6NEx3NdnYzMfU2jfiwbXHyP2v6pRqnbikitVdNYLkSjXb4RfPY6Wk6L73Bi3y1yY",
  "key1": "hJ7Q1xoMJnguiTrPnkdKCPaVzWMwDtzvEYfuDDWqVd49bX1xHwYjwfwfQwbVrjU3st7dcCJ7asMy8kkjxFajKYM",
  "key2": "3KaKK5c1psEQxUCsZpBD9eMVg93Nro4vjBR5EKgYdhTCM6WQJxLHkNx2F1axWfSPtdM1ndAd8VCeduzwCRNwfdpN",
  "key3": "495HRGa7JEBaeDKKsMaBmtbwvKY6KovqmC8KGxqRpZKsVEC94CC4gLav8D7K9hoP3WveF5JdtFV6LTLi1ciVRRqu",
  "key4": "5TR26Bg8a9qydifefCxhMvm4GvQTfRtfCXtMXszNMg56MhxykQZ9uCbgWwGRGYxgLgLNv7jeNYyUBda5fWc6KysT",
  "key5": "3NjTfj9gJ6fNhyBdu4pSok7DpG6T8bH1Fh5jmCvFJ1k3DUbhgWb77GtnuH9wEEx8NzBcAFExjfE5wy3CeiMfeDKw",
  "key6": "2bs6eissrJAz3KoSDZQbtrEokqJPSK1oDPUNZgiMGfCbCH1CUhrhsW1tugtwLNDSVfGsnTfAdr6URRBanywXgnmq",
  "key7": "2vTgV3NAvjgNWVVYL4fzaNzJD8bcjtWArW3TFcWXUJPxHW3iFhkQPL8ggW7z6Wze4sK5XtafqqiAQoVnfH7txoAe",
  "key8": "4PuFJS3yyfmHennBVQGRgePY7moidhyeQr9hjeVcX9TTEabjrJdYrekerU6iyzqtVQFNiJFz3J4hqMpRFf599fPs",
  "key9": "56jSTfQN1e5gxBXWN7XMKAVdNbiBSvEuNone1PSTzASJYBFRHCnQqVQDtbWBcgpYnhqwJveVM2T2boWogcVQMXyn",
  "key10": "ZZEsHrim44GGtY2bGR3GuSWjfeejMEVDWCEMgTBbDzwFcBRpNUWHvnpdBfxjjMiVDkSmhLLbdxLUnV9FrJHT7mD",
  "key11": "PrVzAAN9u8k98wmQxoQJqozYP5HwzvZvWBkgHh9M2zUYVZtzam17AUZHr3Vr8kNrvqcXBDyoMGxoNbByoFwwG7K",
  "key12": "XhrJkhhZz6oZJbxMhZ6XcditmVbHAD6yPdd8fi3kvfye3bYBeghgBJcTeJdQ2AHECwU26mNVRuLix1WyDztKRgr",
  "key13": "tCXEmYPCTpejuhkYMZG8tFsxFTHWZpPMavc4G3tua2X52TbQJRpDjJHa1PgT3VGAPKB2Dvs5C9JaojsZpqrZF5F",
  "key14": "2X8Rnr9azy8aASyKiBpgy9BZzqx5VEw1rfFk9EcckD1dG3CLbxiowaHKY8bAw23SQY74VkQBdfDjAdjJUEFXqgRn",
  "key15": "3LRKKXPcvLMjCHTfTSCTdkzPJquRvZJoLJwsSsLvg5jTHQBKHP8QoLFZjLtE64QMmxwgxc3B3p8SoSMccMk2oxro",
  "key16": "3d5QzRo5z85cCoEVrivgct9vbnqdAd2phWBfLYHx5V7vaVdfypxS1dAPkei9bdc9ajf82SzWBiYNMHUcu9SxiasD",
  "key17": "2BTwVB78SzXqegMpKAGnWqJQbt3xXbb6zdxcf76MuWbK72BJE5uvE1Tfs9xBaVpQvQvMHxtkkCNi1K6kvPCoB1Xv",
  "key18": "2Pn7jNcp9CN3xNeLNSyEops6yfUwJapJxupdqipkwuygd2TdJWxYns7bHdFUdcbx6MQQw6nYPEJJFVrK5MNB1Jrh",
  "key19": "4ChkReM5P9oBnLHiRo1eKzHsSXWQTqqFGYQwVvUfVZMbni7wzr66a7Q8K8iVBqXmLuz7a82mijdmncKJSoUyBVuD",
  "key20": "5N5UcTmXHr43eKZJAJjeP5hjkDzKEbR6eKG3dpp46fPQTwhDBFhFKWwk2v3omCe2p3Qf3NCqHUfacSb4WehBFTXh",
  "key21": "33RnhLsiDYdEL4BAKS2PWJoYSPRwZ2FaabY4QF89jzDhrfKq7E3y8FcS7YzfGcGQ99CScquSK5VfkGrtzWJmshWw",
  "key22": "4NwGhHsqjvYn9UAQT9gxWKg5ypSJPQn3NVNyWSV9Wop8k6jd7mszH6SjH3trf75XPx724ocDgw6PoeRqCcawKDD1",
  "key23": "2zXpgBAmJjoiNTNMf98VibDe78oS7ymGUZzLgx6knAot79DYZQtb4ZnGeZ8x1zBEcT4sJMWH1bbQnc11XShLci2N",
  "key24": "4kE28VLK6GwEPbtj12KfF5qrnNSVspmW75m61DHqCwKihVJyYYKWC6voRxozz55aLR1PCZs6CQVnpBu2i2A4Uoh9",
  "key25": "2oj4xyuZHS1ZW5irQKakq2jkSTKKo7RLYv8u7pdpWNFMuijd6LMwbtYv1rs4LH8AhQnGY4UCM5jy9BMFcMUiP93z",
  "key26": "4MMBRgWDMN169wx3se8kNrmA9y5zLQS99nqWfYnzAn3oEyFWKtYrftMjLBzKiV9rnHgQyUFhoidGfVa62cRX6qtB",
  "key27": "2dGK6NZoNHQ5a9io2t94kWwBJmsr5XXnSYSqoxVNJY6PL1ZRwEepCFNU1xLD16forn4SCryWYFp4pMt32MpSZGLL",
  "key28": "2JBBPGY7YeeLVtncQR4P8a8EwpFSjXjGrovwQM3UdKJxKgKLbVd23BR1c7Thay7mvwFcWjxLQYTkQyeE7NBfm1B8",
  "key29": "kKfqJ9qQ2dF89TBBicAQGDPdQLnez2zb4Tf1G2WXdAphAdAYv8B8VSX2PM7pLupsousWA1LvM8e2HQt8ryfUt8b",
  "key30": "JrGH2ozJ8vVuGE4LyYb1LzvGDW1uCKJjRB29Kt9QPKezboFh1dUGcRfMNgH73vBg4e1wd9PeSGfLXDepgVQXnsr",
  "key31": "hTqvCTB2eBYvURrovgvqnBSbSzVN3ziudFao7kFujR1tEi4NSLCnsfefeKYmkAcKmpTteTUdXmjkdv9VKTzoVQC",
  "key32": "5xiabRZ3PF86VrL6uxRPdMoGBgzweHd5VNLGQ1GcqLp91nctcsCw18zhubVmRr5zCyGgBJdM5qVQj9ySJ1kVPeYv",
  "key33": "5yMq9s2eFYs9tKSGiHGmnDG5Z1u7Fri24QnkhL8B7M6wXHczz7P3qPkMATztTBV1J11R6PmtH6Dc7HFLpM9FngW8",
  "key34": "5zUwfzyov2H6h9oPSd3X3BHbGYFdVrPk64PTcpKJqd8Vix9Ur5VjLADgmGubgPazeHHyGQxRv3gS41UKDeY6t7sB",
  "key35": "Lv2vqAEUkt7BY6XmADNdhqdnrohcoQKwtgJEHvuBvrHe1WAgjrv8VAqwLQU3FWdY84LEP78XQynpYT2Aznw1BPR",
  "key36": "5pmbg5V7yF8hJfQACDUaijuCxUcM3xa6xd63QLvfxUHuXPMFDPQTAWT5py8BnaCxCpZxPrqB9BRhsmqhBB2x6uca",
  "key37": "DKdnqn8g8XfRqiRjzDbhzQJkErJvXXJVEG6iF1fkzrFcFUkCiiXfBehtAgid9UyEuwtt11VD1nFPcKK2oUfh3zG",
  "key38": "2q9av98Zw4ENy7czQ2QJKhXKTsiCc9eY79xoLeqyRGwppJVSHckNakV1v8HJuRDTDGMg5fMNxckpronTchvfHH9u",
  "key39": "54Bp6rTcbSahcrgtimrunspXLLcRqzEGZeimBjaegSM3UavykujA1Vkn6YBoFJRvDHPdvBny7EUm5d8cxPVyP8aj",
  "key40": "52V7BqwbKFrbt5Akbv115dn2aKshh285pc5WptqfN1HCSVAWVwvdpZ8MJ1YhkYNxYUAMhuoD6UBMYMprHDh1bnS7",
  "key41": "yuEJvAVJXpzUy54ivCyw494iHfyXjpUbPi5RNEfs5TfjzFzCcXwe2sm3hvmSMtSdYQKDKwrD6ouSf9gmtHSzie1"
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
