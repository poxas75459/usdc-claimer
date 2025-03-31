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
    "5DepXxe75jJG4ZQbjHJXztPggbFHVCyswiPm5WYk3M3bXm8tYjPnTG3rP59rWseVrz1Qf7SEf4sbXtyJXySZzm8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbWzSJze4KhFCd5Xkm5fg7RyNezc6R2PVHMZ2zWkmKHAgAApWLdk87hhmWDtpT5Wu7pxQQ5HdMgdvp9GRQFLTXf",
  "key1": "3Y8uNb7Xdqfb1sLuiioCu2kEsJpUCeiBvtJAbGnsayuDsSeucoFCrHdsyErA34UmW6PvTnf1wfBgh2TngbY2MuqP",
  "key2": "3TAsB3bBSbFbTvyLg3MxqY51NzuzLJpCK3QN7DiXC9CiSfRLAFuqge1XnsyihuzyN3ACxogmoq2RwnAE3u99ysUR",
  "key3": "5nPsotkkHJfxVT9rfiLjvRRZv5AjDEaMJ7fTDYtfjNKqmNGhgqu1rgVeUPwTasXtU56sMrCZwEiz68hns3p9C2xG",
  "key4": "1DrcDrutReVrpZJCoBK5C4cLeVVUp87sEPU7pZeoaLGmxbaZ42ajap9YQmvyju22pCrkknpJDHCseoXXCAkLXWY",
  "key5": "Tc9Qwh8rPbMDcK6DBuXGsDJAA9GCGSE6VsKS8q7X7uhVJfwhXygrMuaGh14pu648xdja9SPB1eKN62tnYoFmMKY",
  "key6": "3gK4vBZRimra5zK6Kq3ize3NKKGqez2HaBW2y4Ux43dxxiL9EbT7EvAcw1ndduH14ETxDBkToifhHwhqsQKybttC",
  "key7": "2F2eSVyWhytMZqbCqAfoYmmzNhqn1UHWp1v5oV9cXAUKTAmqMN9ScHGRMkTdi2PJd7GF35ehmRt7a1eGJFwyo72X",
  "key8": "65WTjA9sXhLUBnWrn39tVipL7DvxzkNpmHGBnEN8HSEKmm6hTmPwSve7toGkf9CRjBnQSPuufdACW2UGgUYvhq5u",
  "key9": "59Kaij5C1p1yWgbe7r5oV6EuB1X4QxjSnRUodborpb3AH2waydiLQqRydeYVih1EirdxmtpeN9BRbXqhMckNk248",
  "key10": "3Xw3X365T7jjU8aq4bVYBj4fYhNX7eKgHLVg6Nr1aYDjDKnTNVuTeYsVfnkXfzTbpakk9Rb8aoFomFrXrAovz2WX",
  "key11": "5tP8c9Rm89BMzjTcP858ZWmXpY9djF4NCxn9HmFnEPDYFyWJaqYom7kmbdmZnXrT7R3wPWmksNSiG4xtFL79kd67",
  "key12": "qnrh347Vy66zdbXsc2pWfeiyWJn9MzdiGETzGxHJMPg96dot9wpMuvpgcckLJBzca3KR9HfL6H8E4DV3HdvezUA",
  "key13": "3wdGvtHVGQpYZohVRacQZRij8efrUxXVQ1czkxg8bejT34EHLs541j7vf8oby1DD3AvX1AxG6fC6ydGALRousH68",
  "key14": "4fSnTXJKJaLterjaEDFA6TMRUTCFgtTu2qB1Ed7NSJ3yULhnKjhgswKhphduLsuPSNGkwgo9p2XKSTC29CxbiHeT",
  "key15": "5f61VxCK35zLQKBSsi2L9TyKPRyGbPb64k4kcDaQtPNnzVhVADGBt1TLcmKboFgwmHkNKX7iMN3o8P5Yvgu9B9xA",
  "key16": "2wxP21UHG6ZXZnXNf8aaNVHx4a6HYLr2YJerrT5ivcvssgiHmRTxAxhR5qE24vxba4taWiBvv79F7mPVS6Dfm1tc",
  "key17": "5KUeVcpyC6JMx5dnwvMrajpHy9gGv1GgWQccHLV53F5NRvgFNTdBR5mKZqPJhickYhFBvbKhoLqhXSVwjc5T7ERV",
  "key18": "5sfqCJSnNA3YWgxgYMtvTQcrbrwjxSkwpwPKaMnA2fH7JfsYjW5r6kWFruSy2HXLW4S6T8MbHbCHLut472F66TKR",
  "key19": "38d3uvu8hnAUWXsykXNshyZnu836fMECQDL1iSesruGVsxqsev48tUics6LxeiHGzR1pfZpo7gjyXmBwFbbsVf6m",
  "key20": "5KzjUvG1eGABRUtndfyr9GGSpkWyFcwUfj56YjLRqvxDXQFxZatagT2F5UHcLbF7LY76pvT5mdHvFYAXqEhpb2KL",
  "key21": "2LKznhxpCnphsrNirG35dbrhHKkaDF8rDjiUWkBCqCuyT4NA1nSM46AKriiDrD8vMKRvGoyZu4FtE1pkZbaxPwrs",
  "key22": "2jd9Uo8AazqYEJUdsFauA7hb8LZMq6h3bBxkPmAGerbuAf5fsdoPXTdh4XiF6hsugqdHARH8yHja7pqXVBx1yPR8",
  "key23": "4oB1iepJMshzPZfEBxqa3fqMmqYXCZyE6TEyQ9s1pZU5Kws2xYeXDTdysfepMaMkffkDrH1KcUPT1mkd3E3kQBtT",
  "key24": "z3NxvhhUveqwJCHWPSxAqw6AYF14ZPbUZwDAGz2uU9M7CRPmf7r9gkSGzYeaUhMcv3TJbTZETZtuHtTVQSHiz9x",
  "key25": "3CCVMH9kbE3MG2pry98ycwt2WZqcqAYiRcNABJicipqFNB2zD62RU5F2hkZUiVtmcU6shyK8gN9f4uaisFt8j1P1",
  "key26": "2smUeohTcruteFdVcBWJ3kvsLgJaVWUNM4XVch7zF2AaYuKkJcf1uCqkBHdw882zX8VHzN9AtS6Xarb99qAHgxjo",
  "key27": "4yWr1PgmeX7msrDgpMpWz9k57ikvfJhoDeX7oyZ8ZMBjMczN7t9jFkx3daEKwmbTANLs113ZNuGNRgL4Q4rXX1gr",
  "key28": "5S7FFw9cJ4wEnmQQKofrEquX3kEkZUp6UkbqM7BQg5qwSrRSNWwEC6s5WKvYk9Ak3c3smwDDwHCe1TJJwfoNsNZZ",
  "key29": "2RLLRMhUdpSK16E3HdmtmVupVKfShJUc9eXWforyqDSsAQUygiWo56wxz2ZYJBhdqNvqoVS4WCwRtDENZapnCeSV",
  "key30": "5NdW7sddngCu7gXv4RjNNJNRibA5zCyWLnMjPMvzcjDKDwXhEXA4ZXRDehZfFW62hSieXh9HR71wr7zoi4kXeLZh",
  "key31": "31omuBVvq7MnDHmFK7yMu2fB2iRot7PbL3G4kCmg75ag93MTxPWZFNtHsxynRYiXpCYvDdX3z3bP48EcvKX2xWvs",
  "key32": "5YCwV2msdUtYgpiHwBiMALwbmarNzqN9nfVCoGD9MGgT8wrdpMxVf9fPxZuV4NXEaPNF3cs2rh6cg1bS9A2JxXZS"
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
