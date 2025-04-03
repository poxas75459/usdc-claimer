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
    "5Mdh2MrLvFaJdkGiLDTEibeFENEJi3egeT8EEF5xomUTmKZigqMnyf5nLHPs4Teo7i871PkNvajRx9ucpxJhhYgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Evzh2R96BYyimS6v6SBsAJDMYRw8nK2JD9RopLNZLn5TpvgEcbDyiBKdrMuPYi7W9vDSPwsqAfAwMdYPDBA8Ur",
  "key1": "HfiKCeNoccGN5btq8oh93yTPfJzpmuabg4vVnWemwNLcxZSpwEomhArsqCDuuLkjeGmUGkf6H8PMQgZUBcphwMf",
  "key2": "4CDc7fi6zXXYfHHapia7x8haPaQeakeohZKRQjucLufFUYvEjhoSfWD4mf47MCvXjRrq78GnEiEpdCCBnd4ffcqq",
  "key3": "2vYCcgMTCe9eYUCdoyrqvKJu2W16ZdC4wrvgq9qwMpMSb3kuZWbpJzCqmy3bDCHVPhUGF8XUmBRCn3HzP94q1gPg",
  "key4": "4Tx82wG3uz1bD9Z4DbPh61S4yykD6SdVu5MvGQXo4VEFpXgc49G11dh8hN2tsemcZT45SGG4XMSUqdVrYGMDTVZi",
  "key5": "3Ypm4iT2UwSuyXfmZomWpYKxonjwrcvB19BP7uPatSjhfsu9B5NoEHczi1dP32cWzBjXPyVnRZ3CYC8LoMCe1LVs",
  "key6": "uWWikZcqusRUVF4EBHUEsFPx9AHMir79C1fm4jPU2EM6CFUCqYvLhCegqHmb29eyBb77CtBxBTeEg295oAPFv7B",
  "key7": "tBFTCaejdPNQHJ4j8v6GGg41fGd6QEPAsdEAsgkPFhaEH7jFwddMBVpBw2iivXNjqk6yuUBm3r5vBUYsBzJX5i2",
  "key8": "369goVt2VwZ4NK86awYvRdHu3Acx6H7mhzwQaaUxByyz2hLq8w2HnxH2dhKd3LZMjEuzJXHvZq61xV4ghXvbpgQz",
  "key9": "4tTXCF3yjkRwQt4rqcd57kSLSupvWg4azLAJNqHFqHrAzy9kf6SYHNVuTnL5kcwkC8ZvChL7aRNyt62SBsCPt51G",
  "key10": "2tfU7VESUePZdW4DbW2kqDgXr7rxUuAhsPp7MJDmLzW2SvQLFLgfiWQAoMQWfvqvPcgrdqEdfxbArjz2APbJGcvW",
  "key11": "4vBmVvhki4mMsM1USr3b11WhUz36NB7FnX4sqwWN9otb2uBMdQmdnpXVSMugp9DpcmgppmrJnmonUt1kncmbAEWV",
  "key12": "3KC8GPBZvqhTzUot8ACyXY6hPExFkzFjhF4LtZSev1x3D3Qp62uujQ4CXvA4P6fZB66924s62uKcTdVHXiAvCNsY",
  "key13": "2QfjiEPyj9GQehKEqhD6gu8MTcF35ckCvD5VDtf91bVVgVs5vbNSZDo6LwC8TMWvh7snpiUhJbyC8jPnWnWYHq6U",
  "key14": "4nyu54dZ3xM79cy8w93mq6aaGkGj5rtd5pY2UT9Ft25ig47nMXGKCtXZqDL7LcuTMVAcKg3ZKD1Qj3hZYH4hUY8g",
  "key15": "59r2TpmfFRpU2pbRZELCgnZ6EiQW7L2wiC1gbxo2n5brhDGxNStaTDddrTezuRNMP91AjPU1rynjL8tCqARwFZDj",
  "key16": "koeeHLfZCWmmpoerR1sP9DynSGskxxb8sFyod6KSAaNpG2jpCzLJg96Q4LoPHpx1RkvqJjYX7e6dXibhHMS3kAA",
  "key17": "2R4HJt8P2e19i7KCskDXbDJjCSbGsjtBQVa5GwziarL1csnFzE8ByXm33agAFgqspLH2eNDdpG38vPk4N8SpbNGg",
  "key18": "4TEYBmKL856ZnVWNJj1UUVA9vyVaKyo59HZX2q3DNvt6shekjSGNszuSLWJRLnRD27iUsEKuB6NpBGwDkCkkXSdH",
  "key19": "4YCDGnK7AyGwPPCdidjjvv3tW3n5yNWwvKdPcVeJYSaPHTXs5giUDtwjRnkvidDiak6LvSDNwAnJWSRoiHrR6fZH",
  "key20": "4Q9ZxfQghtTa3X1NFpecK9QH4F7yX1x1ewj1snF3QVWUfVNB6XCLiWfUjUL5KsKj5CKAArjwwfxZTd46aLgS5YVb",
  "key21": "2ouVZEnfuBL3K1qs9FWZySUttqjY4SejPfnJbpeSioWz6pBxdj4gmgXEaqaGBbKfq7LXsw3Pv9Nd7kkjDaECfwG2",
  "key22": "2ik9FHzuURnekYft68S257HPg7uwnqYPTGBnTFm7pALsZrC25rAhchU1uhKd5EgoRs8zkxSHVfpCoyn818nCqCub",
  "key23": "4hhmKLJseuCWLL5Xw4HfPDkKfEHZQ9fbkjXMJ2J1y9JxFWkucWo7YuZUu8Gzt8PKk53T6DuLbZQ1GY1Bhccqd6zD",
  "key24": "2Kfvyyhwv7e5GnCCfnBFjFbfJB2KGf96fgiXdZsvLMZBkjPWSa3QgMAxKZKpATcKwx8pZocKMYj7n8ifKED9mr4g",
  "key25": "4v2N5MnjHM3V3fxzrQU7JusUkxNeRXVSziq74aksMEfJZLUGtb9jn3Ff43VtS21FJE1m1yd2yjRWX1Ct6HPPHrwT",
  "key26": "34HBUBun52WcLtY8YkP7APV4ngeME43AuB2QLCHCvXbKTGfeEnw1TA7RejaCSReYX17TgwPqFB3XPqeA7cHL3gy8",
  "key27": "22umL9Xi8qGbCvNtCoJLUqrn2NBsBCH9hK7KSQw8d31Vw5qF2ixYqWrRPwiXgNGaNkwjMExU6T343vuxPgfYjqrV",
  "key28": "5sfSULURRQPJ7eBPfhu212NAW25WZ4pYmPgUT9QUq32TKNf9z18WgPYHR2Lysx5FRKniC5b2J9QiVmPFserfGuxJ",
  "key29": "3qJPEvkwLNz6BcAVuYXgsCuZvAfAXM6JeqjrXEzTPZ2zv8U3ycvd2RUjQYT3d3SdJzeEMKzmJ6fuBrYMWyRLpD6N",
  "key30": "37qkfETyyWUpCGiSDrZPo3GPTcdWem8DQGxK1EqHNCuD1yVvVHAwf8w7jHzY4tduWkcA3cGwfFcRi1ADeKPb7Wbq",
  "key31": "5yzmo5d9a8NiRRPLXVxAf1YGjDfUtEgNMMcwhgBzHb1fFwPcXYs5BCBdUSYsMGQHfxtY4oc6xu5VpundizLj9rEb",
  "key32": "4k94VfTjCNLPbbwLta4AqJwkwoj885VJnX4x833sWkwRM16Eqpm3mTCS8VCppNJXTw83GqAbyLe5918NSPFZdRDb",
  "key33": "3WMWLp2K7aZTWGQpLoQLRF66Tmm34rsrYvqgsxRcYhko6dHLLXoK8vbhCipzJfadbwrz7AFXH6EetCrotDZ6F45F",
  "key34": "4UP6UQMLjK3R35L3MNo2r8beJo7HeZ3DSBBVSRDVFVCs4WE77Jhufddo4D1qdMKdmUXh2CwSyuiPCzn5Jb8uF7Uc",
  "key35": "52E3VBPUrLiR8VcNcz4rXsn77CD53v6vmzPQ26fyCcQya5SBZPT8xsywBiHK3J82qUbCsP3VbskpkGxZHAbJT4Ms",
  "key36": "DWD3ohbMLv8Me1MP5kurMzPmLz9Lzkq2vneKz92zGaWat7GrZBRLcVVDpWjboTxxS4xZesVmPqXMHdZsbprhJPZ",
  "key37": "5obLENtWBsHvVwa7W9E1r9F7aB4VBnXNDLCGNgvFb1c3nQR2tszHxcx8X5CqogTmxUiUWDyiL3PRRK6tj57NHa7X",
  "key38": "5KPFNVPht5dvVqkUhVbMi2FSjbGUrj7x5yDBXWDMGScTTdbuV8YfxjKMj36kg95JBF5ooRD61TMxUn1Hj5DDEkbS",
  "key39": "s7axDT2RW4cwQNNUxGpFigDkjDhVGwNLEgfeuMUrXEHPwYdqJZvghaUuHjVeygpe8rNskHYp6jjmSDimkSWjfAQ",
  "key40": "WX84sNPJyYuhPrdJxizeSg5idPodAyCr5GXkTQHQCjnHn7LNFmnvsMvjDmB7qtpzy9MGeiEptCG5fU5xcn6syEB",
  "key41": "2P8EBzXBvDnEhLBNSfkKbWGWNpus8n92FSe8hcQNZ7ejUChGoPjFYsT1GpQdLr3L3hwon1xq2vFZumMpWChLeHwq",
  "key42": "jH1Gj51zeWcYLFWCyoMXgVwrBNjuTzbp6eW4mHSNgeSStgUudmuTUFgcjZ19zgLCZtSmgc3prMTmqcfpAbMcsiQ",
  "key43": "gGfzM7Fqk6qxH8E4eP88ueQF2fXGQDRKkkBkK4qyAuoh31d4TnqPqHHaMkDxggr8BfMuHahJtgS3ZS2m1jhagqj",
  "key44": "3jVx1nBGDTiRW7soHeBJepfnDPQYrvxc6VejqkctkeKrWQV4HifSqDv1epnqspraXSeunEWZjF5kHS2ePffTuM4D",
  "key45": "56dAiqPvkLbELf6sTiSCXmpQb4ci8Z4QCApE1dQcVF66BDBniN526oVzztrku6BKfFmn5u6DZPMnPGyWsoag1oB",
  "key46": "mw3YyE7mV6SWfrh6Bp4arApmyvLzXWYDEFkeazHJLkaphxT1ACTgVifzVegZKNpK2iwMFZbWJWTiGxTMLhDkfXQ",
  "key47": "3y9PBR3rBGg9xfUX9BdVS9jeYawApygYZ3YgzG4zUdLLnd1oTTBQizFMdA4KoSW1xTbMPwCx8SukK3dFD53hjNkt",
  "key48": "PEXmf6p1icEWf6bHa9t8q3dUKqyVtejysNS3QyfWuRdwULRAMrevrj1pXJHjcLD5CGuXQ6YuV9JrarXNMfWF5U3"
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
