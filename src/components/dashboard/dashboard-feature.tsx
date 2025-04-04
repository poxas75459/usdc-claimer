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
    "deaYqkCtxWPSNv6Muk4231cMAepMryYAk4B8wAq7xiaeMB26XP2KSx3NhMXQzSLKVjQQ5kbEZMYwMHtnzifW7pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kDX4fcfME2Mbu4rZWQozq2zvwPpXGV5LwEoT9ATax8ndT3NHXDwuNwH3aDBYZB9G47CcTWknjVL1fPre7TiiqG",
  "key1": "49uLYHCRZ5fFPYexN5Hn9TRXSt27nVkZxbJKn5tBVA9bmmoorUQmjRCNkpz1BVnVQ343nAEQuRDH8yMinTP4njVe",
  "key2": "4VkUVfPE3hHha6oem7i5nzUtQJr2ufXHTPqf9cuMrKLwVwtpThAxqiWUwzkTug29aSAw5f7NUGLXZ4fBtc2n3VZE",
  "key3": "5hgLwXEZ8nEK1YX8GpoR18jDGyu2pfgfMAsZ6snNDR3Km94eayj5C1jUDac9KW2VRGqktXuhe4tmHrZnGYKUdnP8",
  "key4": "21NpFyAhbfMzDFiqwKPbnZqTtdo2HYhznVkC9uz7ob5EASohESmVQ3PgEVwV3RvoRR4Dyf46mEPWz569f8SULdVv",
  "key5": "2SRWnbPV72buqCHj3VatwzsmxXaUWh2mzfthi6L6v4qkMezbKvswFPKVqiVFdaRhQwDBWt7siRydbuuVS1XgRR6P",
  "key6": "2w6xNFkUCoKCZ27Mn2xRzYzfuBEVuH6RUFA7nQndCRmWuRgLHAmzaZSKzcw9wX8bVe9U3JWm5EihUpNLDkXwxD1F",
  "key7": "23CvBPCrVo6NTSSBUWkGDGu9Ce3TJ1xY6BonyFapvh3L3RCSj6eizQePZrgGCU8ucuxhBLscW6vUk5hoPVuXUY6v",
  "key8": "2PDgpBESBUJ9xLnY9FG5nM2S3LtGvV5gAea9YX7Du2XVNp9tqVkDHHtpeuYmro9cEm6oNgkFkuUinWTfttiFxCgS",
  "key9": "53PsmxeRkW55Wfe5A9FyUrfxmzoFxuSxgwLKAdCT7VMx6jDsZuBJYY9GjYt9jDxwcLWjXB6vonATr2nqA82D4jvQ",
  "key10": "49yaBcXPv48FJ7sg4CYUWGzNwDAanvct3RpxpGpPiYfsM4TMNLj6KyQNLUyWB3K74SNyurP6QcZQPsqADMNLDxr3",
  "key11": "p921eFDT2CUbZtY5qW3MsSYGGWrwhR1gmiXy1Fzjkxed8DkM6N8UuNZ1vf8KpURRfjeuEp6T8TrcdaNcPHKoqyY",
  "key12": "2mYT2RXsNwW9MxGCX9DSP3g9enujJRWYnCEA6SQdSwJtJ3JfETVAdcMXz2KL4CR1tQcHCTrXbAB2G81L4NQErcMq",
  "key13": "4rzVcXEim1bszJN8PNCnH9DBFNZChAKXmE8FrESSe5FGrHf7K9hW9kMqhmGueEDSNpZZtjvzYrF3QvqSpQZEhuH6",
  "key14": "4ugWSgSv7MuYnmyEUUsKgK7ZVztyP2xkMjmicwQQ5nSqqAVWsZSszSz3dULyxUfmRtQdw4WS7AkAXp5k7kYesxFF",
  "key15": "62V1dSuoBYtAhewswhjR4xBtrtmmNWnYPVtc6s5Z2FywHK5MS1sYtfLwjKntGHWLjKPP3N2QE2kh773CDTRFq1Yo",
  "key16": "5qxVpr7MCtG6gYx5xhRuB9xJmiVMQ8HyPDu3uEpMYyGhhK6A8aDk6bmHicSmY5wa5XBS1dkbsdHP7jMFvjgiw9YG",
  "key17": "2v5ZB9L1XmhYvDnHg79phTBBiyXZWpEHQj2i9oGrLfKUuLKwLk4kw3ymiAYDXmjJTHchWEWywwJvrrN8XFaFS3Xm",
  "key18": "YtHQAdZrhyEqHG5vQyxemQtAsQcxLs6iFKeCswnQJ91CfF94kfKKNTcACi6wRHSc8BB5PGcKddJrXHUvqSmP39U",
  "key19": "3G6toiJw48FFgaDUQNrfdEjX41BAwMYSsmpQyveMAgvvNmWA7pE6dj8wwzM5Srnc5g7rBoicn8WCj74GX1Ufw1R2",
  "key20": "2DFFp4gEgTFFxNBzLe5MFNMUcfEr6BdETdCq2G5E7uqePJUFKBGHBzLM5xb2GhS5mVmYs3EjNpVT3VELbPUCC46E",
  "key21": "29bueQCHXuJbaJuiZxusB19rJjRazsKTxdJuFXk51LMg8Yz2hcP3iuavF6MqucwGMCAUkkBxd6XrhdDo4b7FU7J2",
  "key22": "4fEPvowaj81NwiC25gDq4hs4BKZRc5VBL2UG3MyLLJgLKJQxSmqJE4K3a9DroUYt8Tq7gbC8xbbS5iYdMovTTHLk",
  "key23": "5rubccVF7uUoL6noAJbN9byJMuapL2UrKPkiwxmS32BXBRBS6GcvwVrQjzY8EnH7AGqspZfzPaYTQU8CgwXbo1pj",
  "key24": "2x9m4rVP9PDwpWuNNEXTZpB3pgc5Th32rKh5cZFNag1YxzVapMzNu4oAVjahcxCrz6kAdd39Ax6g8eP1KMc5KuY8",
  "key25": "3mLUXZrrEFZ3eHpbCE35nagdMo3qvXBGUSpiKwRdg73rMoX8nnkZinTvLyBSCPHQjT4Mo7Uq4WFk6E9mw3eWUxco",
  "key26": "24MbrM6pincd54PDKiLtzGpfWMZEWkrjRRTBNxWkQY9b6CgX3VkW26ikbfHLZ8KJx4gmNC7H2rsENS2UeLFvH7g7",
  "key27": "iL84aeuQozFYCTyPVbJFLvEkv31Q24UZmDRJUT9TEVBpPgcT9urossXEpn5AzTMtJXQEPcjrgRmEDZnn8JcAN8S",
  "key28": "3g4mAFdnhVN2AVVZrcf1UvuTvrBh65EX912hzA4ytSiLhVtfHk8nxuWVQft6TkoELQqLFA4DXHxv9ym47qrmwiti",
  "key29": "39QYUkfuLz8W8SUwbwAWTq5RNk6pRJtSQjPBBzX3SdXoE7PzatGPtCUrE5JTyTum15EXbgRxLqpd2hk2utuFsexU",
  "key30": "4opBRKi223bR4xFb1W2DsgaSGCAPi7gSP8Jiimy6RDeY42bMYJqGfM1bZJvnjZBxtVkW1N4BaEjnYHMBdGJGBLtg",
  "key31": "4oztjqbi9NrQRKwPVNSiYbDy9BZ9T1fUKKE5E7CHAo2sTrN63o7TgKv2XXcQRTt4g7ESZjzX2RxNkS6bTypGyuaq",
  "key32": "53mDCLfCkbE3abEcFRCgLpbizcPPz1kZFbSvJGg2qN6anPLYQevEyouH8gWwwkCidv2NQH7EJNaw16Gwe22fkD6Z",
  "key33": "1BYGm7psg1JZsmhdzYAZg4XTvEzAsp2k8jvKxSJBpAJEhqNKn65W958xDdQf2pUvFZ1B48cPFkDDdYkNmhRfm2o",
  "key34": "UMsnV6quowYFnWNPX6nhHWpB3TTU2vFtKsW7dU5UMm95JrbmnRr5jUBW3gCFch1aAC9zieNPJMChsG48DHspz2c",
  "key35": "oNG5NsNcN4cyctk4GRDFafLeywztmoS1ndabiebaaKVEbJN4tVuQGQZfR99t2zPhh7GA4C6To5FjXGm6TizHp52",
  "key36": "2WcKGz98goVrzWrtDj2DWdacBWwiN8pESoq58AK8m8WxuGVtCwS8xM2c6npch3Pe2vPHCXGSPivSovYMGBGp3Yux",
  "key37": "25k4iBBjcjYAtm9B8EK9An9Er4x7WbNncrxyofiXCVMKqFHcy1gfvqt2xiyYGoZH9SankAsuzq92nb96MDH8RUen",
  "key38": "khjwEsA7337mumEZF46pZPMRcrtSuGcNySHkzZGFu4hJqFmpbJavmWtNHRpDVR24FMQrLXni3BhytKEUN6uTfZL",
  "key39": "2g7yyVwusUa113xWt9WTjFfLFnU1ZKi53SYQVMNfaUqMhPdgJCsv4CHxmhefTh81ZtjahcADraV7UgrreRPdpsCf",
  "key40": "5dgnZ7dZyXXzWjpCj6RTqSP4JyYc3R8LqHWobyTQbV1x634sV98ZYZoVg1mVh1d4scZXoDVfDv148xiVPbTb8Ut4"
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
