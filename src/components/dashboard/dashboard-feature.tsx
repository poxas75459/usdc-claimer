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
    "2ZpTRV2wY92gCKQNmhcbVdoa1JE683VmLCTqEYzS11UuTXAk9aY29vuvMgqWvhEsYW2e1AyzZpTVMoTyr3gcaAxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mirpziRbe49tBmn9CgCfSsCeZkg4NgjijLyrL24a2rfHVTo1P1ihC1R43GEhsFSwokfmwydHRfBbARddipwpgBK",
  "key1": "3m9FuB1y2iYuRuf78Ke7SfxyA2Qn6PUhAYbZLLfnSKr78AJy296Bp4rmD9Z4cZFpU7DpuB7dPBPSQXLc5arGa7Hf",
  "key2": "4nn94tcDbsD66tvPDsoh2ga1Vv9HrvMtf8rWjL3pqApFeL9jLohDLJWk3FeqSFPztU7ERZXT8MLLCwjLhpQwh2U",
  "key3": "5ft4c3M8hgejrZPyaen4way8GKnyZFWD9STQR4bj9AE9bGT7xm6Wawx8ij3bHb9ZDcDNxBUncdzZButNnwxXaaQ9",
  "key4": "2kkNmMkRFk5Qh6CmaoDAkSNbvyT9VkRz3z2dYUtrF1jSs9ZDfFPkdVbvjLYmjRkefYhrPFBa5dgP7Qom49mAGLTu",
  "key5": "4BiC1ScG2Mxa8gBHbWSAP99QTHW9ZsvdZvPcbFos9zHxdToZ4XdYdDKiEASc8pjxRb5xFtv4zbkTHuc8GpkUYNgj",
  "key6": "5SqqXhKp1PtUGxWVLkppEKAWV3n2eFb1tGy9kSezHzz7MUYbqNVjXaR9JuQkR2UkaL1Zw2eGjuRd3PzzBfQZdBVf",
  "key7": "65dXt1uqhAn5kmoHrwGaAJDR9PTQjGRQzUPmFdY9PwP48FSjv78LejRB68ANuHrSGd7WHhwEmSMLwwVyHULSfVub",
  "key8": "2fTEGpkqR7MGZNL4ZDyhumBmAVd3k6AA8SrZK3AbeZWjKMvD6n3Cdn6SWXSZCaxDER5ewpJ7Pb7pNEAoz2GmLaQ3",
  "key9": "3jmYGqc3DcqPBhwKYPg3pWFV8GfmM3efkjZY4bAWSPTn7jeMQKkE2Gjy1drNEAm5qLdngRvhvS2EY65vwXbBKj3F",
  "key10": "41jUXLuNrGXduL2D64P9FoQXRJ1xkoSt49HXQbicptDaWVKnRtaTUyz8snaHPF1ThEG1N8KcqyYwTFZ6arKF5HfK",
  "key11": "3Mvb9TeQc5Pj5UPg8wSnhEKBeJCPxYjJ98TNCuNTnkPtkt2eTKobXDFg8yjSmSJTakfRk1CXxtgwcQf5DhRQ3CxQ",
  "key12": "3ZdzeC7W1ghJwwrQ7P6McrSnT9eRvepERiCk82rYKWMVtSLkHFQ3AFfcnyFQzjp8JHoeN2gath6BZx27Hn2A716L",
  "key13": "4u3hSc83kzWQgBVU91Z4haMTaRJoCfeibZNmhCxiWoUzF4RaN4XArVdzZoBvmyEASNiBPQhwXkeCJisYZotWpGaF",
  "key14": "5HXDQgFKKprCAR8eRKSecSRpxh35Aw4ua7afniB1jamiBr7x749ykwiJgJmaux98t6zMSy7TJApF38pLqoZbxmNF",
  "key15": "2S5U1HdnrpSPLk6FHUzMmxCiDYW3DM6Ry91AT3wmepa8gJ9vTANwPLkJjvA2nWygqHjVD5qLNLNrvNxHuC9iMBJ",
  "key16": "4t8t6CPmKJL4GseYFzzkiZBhp3kLDWSQNTV2R1KiF7etM56NpW975zBoqHWLesSgdweVP6qxceBHRKgKWrqYz2Bc",
  "key17": "4mGoxVLNswbdCgBcoCUvq4VnpUszsamKS8LSg4KocF8V8NKE3821NPyyrytznAZi2Dyo3YpDPsGx3XvGZysEK4Kc",
  "key18": "4W3PoVwruPJPB9hR69putnoFpvX4dSpyXZyXh81yMbpRM6KiYdRyvF7My22jxEh1rRFPftvETbDjDFxWKLRfdpvQ",
  "key19": "3emX1f3BsBV351z5fa2KZn2RciMGTe6K6wLqTPWD5MsA9DPbdeRhizg8NAbjkmCWrj8iXVGBrAaqLGsthUWxrXqC",
  "key20": "5T2VUHrZBRmuFyNj5CDow4XiiBH5kF4VGkNPvKNEiAwT5uqnGUYdxNiiMpo5oKeqroRtoCQqaCR3veuwQepwE9Mc",
  "key21": "qLt5wzyRCgQcT8qumSxBD2aFMCXNRpoj2iyjoDhmsHUGwWUQHNfrJVipUCx5ijbPN4TeWzW2YNR6iwS2FuuDxLW",
  "key22": "5tbZ1sUVUS6oSKygKLVnRPjfrTDyUPhnZuS8QgaHAgn77vVNisNyjf1Yxivmh8QVrZQko35AcTaFysLNebdMmtz5",
  "key23": "5vRrsfU7itLZmyVewx8izRP71WxaZzDoYngHemQvLjYo7r8yLbuzvHRLFhyoUcG1VBpuXJL44wXLJj9N8Pqr9eR3",
  "key24": "Q4DmCAW5HYYGmyhVQJuW9jC9LBBH4RZDLJXZxq63PH2a1SuuGcYA6QZpqutLo9FZTCS1DyPGrww4zrDwb51k9Bs",
  "key25": "2QfpGSCxtxsQCxvt42PnVadMxBm7biTxgiKPJVBPyTJ2S2nBo2z42S71sgUFHEypRbWyrA8NwzAnrZPLnwsAMntx",
  "key26": "4tfrtBDjEXiU4dHH49tqZYSnrxvTqwPWYSfBuMcZwmsrRvUUMWx8KpYPhWhv94ZgdwPhXR96e2kMumEA1R6JDMDx",
  "key27": "5hNYvtiY9VTGspYHRuqbFkoxANGqbTKZJHFiZbfjB8g4Xr7Dgb5ZGvnFXWsfrwp9Nc1uytNZxi6RSYEtrF6D4Lr1",
  "key28": "4ZbsYaEJbZCsiVgDrpCpQ7NeneV4T2c9Wj4zrJxtiPmu7Zw9ZY428VAZeBqnGNL44SeesffEJaMPhsiAvUAQEEGh",
  "key29": "59jtsssqwQz1ER5XRhfiT5bseSChGAyDJmiE1jG6NFfEJNwTxbUuevzdvuw74VuyycDPWGD3ma1XZYGDfk2TBjGv",
  "key30": "5efJqSKA8XSV2TBt56Q1yu3BBrX7CSyZch1A26hfZj7ghzKbfgk91611dCfMVsHG5pMRQPBvpjLCRpQxi6oUE8Qz",
  "key31": "2PuLFRDmhLirGAMmR2yD24MnjZ955THnN1v6iy93apiC2m3Z4D6f1Rz27kkC5sgbrUqMRCGfu7qw9USMXB62PurH",
  "key32": "5XonhY59mfm71XZVwoSpToCDF3iPMwNydS3BViQwzHSvNTwGGmAQUHH56nsFejfMS3wB6Zwoo1hPGwNZk7f1kx1h",
  "key33": "3S9Zh63oGckiVvw4myGVAXrfyh4R9NBkW1z22v2BraEHMKJNdyn4FfYXTmuxbqjUnMH97rxCmMKV8H46CzLzhjn9",
  "key34": "5tHcSMByiPDwKubxmH5fxrVeptxj2REFTm7ZMbK2zuBiqd3To7viPiXRayh3HX9kJH8AWfRsx7JrL5UwNcnr8PQh",
  "key35": "VTm2stskbqAWMbg96Y2KYshnLDVg1RCbScGVVgmgS53j9qdnamFcrDDoCuXvRZ9tWq5CmED8QAwzu1zaeshk9bX",
  "key36": "565SkZAftnDuPCXWPBoGtTWPU7p5KFcMqGMiqtQKXkktiNTsnEdW2oS2hs23U6uLvWiqmBF5wXzSBJwFBUit3g6K",
  "key37": "4hsx1GGVJDLSkKXoTqSNSKsFngKZfCzrPvaxz5pMX6RY3iWpyqoCW6vj89GnrsYkHzeQV83U3YNEvFAWWo3vcCoQ",
  "key38": "4vpTt61CecrbkRj8yM7oWVZozSthctihQxc8T1f5u9FTUzStmaJnonHGas9QMwXkuum4urnGZgZe8NDhG97nUz4e",
  "key39": "5jsegtJxNekKfGP8TJa5Z1pLyArdjPB8eQDpb4rFFtkQ2C9NkmaTCFFoEowpYegLZ3Kh3vTeprirMR5QoQyvusds"
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
