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
    "4BoHbCEKUPtfWTCF3JvyLN9MQtLeJpksfRsJqm8RhGbvTiVznqoAukRzndv8n8zT2N7K8GGyAmewSZAZECYYNhaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWZcGaMU19VA8kpRTceaChkXS1X61qDcw1aJuZCqgfpfdsmKKkxjyXkwiqWcxVeN4KzcQw5pjckgPGEyn7Hphdz",
  "key1": "5XT8CGJo9noLSxpMdgsUwoHFtLVADE9iAsbkCWFdbaHenGQQcu333TXD6qFdzANAnsLmvPpPEZv4g1QQjjawwgjf",
  "key2": "56GcGFFR2xkd9Uab4xRLz7fD88UzPD4rPUK6knJg2evJoim7t4se1bMXdCeNohtcFfwXzkkocJQyc2q65iD6Zw2z",
  "key3": "2QaxE7tiBDFV9XuDmkqErU941mcnvJ3Ws7ZYDXKkK9eepQabSag8Qh6p9MaPW6S3XeVbqQAfaJBE9L6CAvdk3SwW",
  "key4": "2TSbGKHNQ55P5XeRfwFnf3p9tjykznBMA1zYdJY9nZ26m8StPaMYBpHUR8z75YDDoRqbSRzQeozhVhgWMCwua55L",
  "key5": "3Adi1zRAD1gNgGXq5mhmJJByhNVsR9KHj3scyTwJee6Jt4xEmMnRd74CDngc3iZdqBgeqCDz3NUkvwccGH38xdQF",
  "key6": "3Yj7eNpDJF1sA6P4cRFdTGzNSujzhytMZqyuTDWFSmfg7GGBW2eKNRmr2LLyZSwDTRGPNCN68KB1eHTphZgcmYkf",
  "key7": "3FB937RDF1ighcRfX64s9Ewr7iiAcB3UTQmFsN9An5nCpAaZE9VRupHNmv5eRwogqnHBjgsrPLd2YGJrhMJWXdFB",
  "key8": "5iNkbvZkm1BRa5Y4QMAK2NNr9pqPwZ29cy64xrsShAHT3CUPDwW5YTBGj6e6ZX56ZPiUBvjRpofr22J5SmoiBMtb",
  "key9": "26TNoky3x3ASjEQR6JSid4Pd9odHHEsqJaXHrRRtzPg81QxsQgijYNZ6sfNi5gVcpKCs3vnLyN8i218pofkPDaoF",
  "key10": "5jSvDwWzzt3oVCaeupkhvwaibhQgtMSAjyQVQtC8YcvhTgLWhgzT2XoTBBPiHL1pnkgouLcj54RfTUDtpDV9iP73",
  "key11": "53qXCcZifS9LvgHp7BDUo6J3NgoyjM6pyx4WF52quWrEoqujczrcMxnuoTyM6KtFVCTtrtQpsK6u8rYSGSvDyn6y",
  "key12": "4WXgRqTKmgwRjNkLtziaGkrTVMfTYUXavWie7aYJiuvYhYMfGPSy6imwhsaQsSRmsizEPg7ypAp7PxYdtpSna8z2",
  "key13": "67jAudbjDABoD3LeWzPjEQT9SZoQ3wA3ARSBn2uWtdX8gupEJxmQ2d2TBDvA9TPHAp7BcH6gmZLvBx6KixtoypV",
  "key14": "2nSZN4kwiWABcP8LkNsvG71nmb3VqbTpLHN4K2mizJr5FgKLugodpqokbndwn1m1JNCiiUs3oNbTDQsfUkAtT9yG",
  "key15": "3hVRtD8W259RXxGqoZszzYVYJRKhSmz8y3qhAZL5X7YWsv63d7NzdQ177Sap5yfbG6ETar7D4SKvExEx6m1Pz1sa",
  "key16": "92mBQdgN6Xh2RU8Nbp3DSmtHj6tvxZjRkSSQH3TjQR7hQWDxyY8Jm4wAMznN2VDo7Bp7RSuKe1GZ33NdBNofV22",
  "key17": "2uXsZ5pL42si6Ts4NbNH5i9AfqcG3kxwbhJoui9fGBAWdqnEeZnfmEdd41Yck76CAcG9yeD6JDr7s2jBocyBzhJZ",
  "key18": "EuBgs2Cb9npsvicA6fwmNLP1R7ZKvrZsDKutFXHv1xAEgB8mc3apEhf9eFpg1dPUbS6L896Leaz4erWY5ehsJLq",
  "key19": "5GuYHM192GSG8jpN1dkcHCsNw2T99gfAyQzS6YJz7EZ3swmoy1PrMsuSLfPcr22m79WxwEY2nVLKvcrMRtrWTHbX",
  "key20": "5anpRYBGQrqxraa4v1M4RscTQhdR5sthRwxUmEwfSVLSBYVTnAb5W82p81sWNMkNuLzhJXMrRVLCMsgsWJSubQfc",
  "key21": "2GWGESjz8joF35Rr8iprhE5iA5qzkJjwACZUJYgrQdwjkXjAVesQZsPQgz2P117TAJ8gw31GnGbVv3stMWGazn53",
  "key22": "2czwrpRvLcFDixSD54hVYEPdCH2cXxkDG5GZQQa636qLD4DnnUkVPN1kvdH52YsSJC4XRPtXCjG6vj6C3fMuDB8i",
  "key23": "2MMiJL7EbUmw83wqxgRmTxutWTbofxrgCa9CMrWzL87NEChbr9pSC25bhQwRDg7AobywfTUUfVGCjVb8qsiVK4Pg",
  "key24": "2Pc4m9MPAFzKehPjtLqjdjr82Lbf5Gt7xS873gRSeDg3ZN83WnKxUZrviTNeErGiSSLu72sS2q8MMNB78jCTLarb",
  "key25": "5RP6V2DaVcz9jvLYSxCbAKiK4g2dNiaPaq3dYnKb3NM8imEmvECpzQe8M2djVYXu86ZiVo7Gcg9uqz7HiQVty9JG",
  "key26": "5BBoerXbbnnmFPNnzyuaku8W1gcx9AjinTLZeissTdsRffcWwxZWXeFEPLdhT6yHXh4ik3SPRN61dMGgMPYJC567",
  "key27": "5eGLoV4vtHK8tpQDxD8qWcHE8zETy9hB764eocPpgLhLaMcPuqTgP3QbtahuEwx8AXxx1KDWPWYrqMwbDu4WBPX5",
  "key28": "c3RvhPqA6k5BGRQvKc6X72kpwDMpiCUhtbD1yu9eFiGJdG5e8K5D1TCi4tnCF7UeEnLqcgHqzGKzxaP7H6efGP6",
  "key29": "2wsBBpqxAdUVNdv4wNyXgdRF86R4U7mFy6QM6ggeApf6sEFFD2xW4UWZP1paFrJQegAFdHWSYSrTmbN3XzTWSuNT",
  "key30": "5HTEhM617jLCiwpTpWFxBLjY8XhjKGUCt2XYghtqvLQ44b1spZmcDkV9FkLBZoFkMApuL8msJvJ8KmgQwfsDvUoy",
  "key31": "622HDUrJyeg3Ynu9iW9yWDb31cgaTV7zZjPRPJdY21rWsCiCc5wBjgujckzs1Xs42mgNV1rqtKU4era9ztDJ193q",
  "key32": "3YVrHpFdpNcnNS7PiWqdz47r1znF1ok6FwCZW9QuZCi7GVkL9Amfk2Qswgj23sk8mUjJb8Kf6caUHyCEFsSTrgKt"
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
