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
    "22kRCiQtGReP5eaHKK47YkRcAS34TsExuanyx6hFHryQcEpYBS9ZELrAwYZjztmK9wtAW7xUocQ968pbTTbMXz88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvxvLqB7szdFcnEUJHQo71vaMiXv76qav3bnTDAGvrM3HsEfYepwiGrVj7sjdtegkCGdGLFXEzDBrHZKhZmAm7c",
  "key1": "5kjcMa2uBKLfRjKhVxkvTCSBHssXhSP96XJtgtp4yysw11rXn3oe53axziQHqN3bQMetetCQVhaq1qj6boMNt9pz",
  "key2": "3Jpx6FHuw7kyr6n6ymbbXx5HbWhJotytu4nzoDMsZ5hq6X2A833SSMXgPBhiU3AYvPqBmtUAev4ugc6D4hVeu9ez",
  "key3": "2CoKRMFC568jZpot2n4X1Q4XNVG8gpRVDGZqk6EqXuPYM9szRgry38wkfeTgGVBJaoNwAvUQo3x6zLGs43LHoCBm",
  "key4": "2Y2q2fMrRWYgNDiTzBmjGvLZRch2t2dKWhuLaq7gQjQnHa9FG1DFqwzn2sjopCmvw1kNyri6esM4q5zrBXzJXLbL",
  "key5": "3PDTpERdigQbmGpvJ8RkEvQj6rJ6hUXMLuzrxXWwugq6EyfETeB37s4rYNrTEpHgnNY4eBhjsbqq7Nh3rQCZusQz",
  "key6": "5fa4yVoRXErmDzM5ZUcYVhnuzGVCupp2xGKZoFX6qf4zQRyfcf6TiT5hzoL1vzyrMrULf139DYDZqMJtkZPiyJDP",
  "key7": "5RBjAz14jDfobbTJCJyQPDvGmw3CKNbzio9QCXGujRUaxCcAKNC8Wbxao6bk3g6S6MDjwGsDPC6EvN4wS1JNCzaE",
  "key8": "4SfgVnspkudHVV85mn9gdJ4UqZ8ruJHX1HhCSMBD9awZHyNJvN9WMc3TJLHADL4EwbApJ2LQkQZNXK143YB35n8m",
  "key9": "2XRj5HKQSVP9fMj6dsoWrqZoKrD97HUBQXvyZzWFyysSGkxzMZiEyYa4xGuxguVSkvcEJQosmYQEE9LWyuHSykwf",
  "key10": "gCmCXCWHhtGFcTnaK54bURHZCgAGCSXfB9sLbCRGtK5okAcGV1746FrokPmu5g2ef8MWJ3WUVy6rVWQHCmfDzJg",
  "key11": "3ZwEKsYCPUgdUQuQzZL3vKujQMr77YUxYh9fHupbn4Js4kGSvdjP8j2juhdLp3tm74TporakCJoGQNQZHSFvJsBB",
  "key12": "37DakHamBdRvgDmDnGULJE41ptz1GgCErjbSCkGeYwynqrEtHXf6K7vwceCSrjzMSE2J9wa4svJA8BSoMPdeQtom",
  "key13": "3hWTrKGFSJiq48UjMKzNRKeFJd7G1e4fMXGhvm6JSzUopeVHG62qoft6V7WvhjFfrhYCe1Fh7Cx8PusymiGQtJyT",
  "key14": "4LaunE3ycFdoXQUeyaXEwQoPR7WFRZoFd46HFtsCF5iPQnfKUAcWBCj5uY6PZyCamYLLZSUeriMWY5cVjxHqDZwo",
  "key15": "3QVgiwEduvmV1tfYKiqUSq4obGPA3UzaDckEsDSfe1RLWtZj2h3vmmRLsPR2wM5G2YMHf3aVvti4oBh3iXMaq1hb",
  "key16": "1qjoNsASjm7JqHBkbMeyUkqRxk5oht5T9a81ca446dMEbCMxGTMXTe4qQPURUJ3MdZ6TAvo1iWWpvCDmUY1Gyqq",
  "key17": "4MAFTibcTmX4UFc5zoxLeZ3Tdd2B8BpbXFTXcbBedQ1GEywxAmbodHivVkX5yxziJSwGtUasSA7dxkPcNbUWJXv6",
  "key18": "3ZLfzeuNZfanbwhCt3uZW9wrqNaXAK1ayasRfsCv9choTWmNSiQbDLLtgQ2er1vPgKpCZsdo1pZs5WtmmS5FBLAQ",
  "key19": "4op8Crj3PDMRXGGUyB6yrZFrrFZ22bEsTqymDQ38CqitkUex8u3p1qcQPivbF4ZjThmcpKrsGQW55EGAvmFvVRpU",
  "key20": "2XGYvQ5scQpZXj1tMnAfgfX6ZJqBxVw6UTYQ6F4nUiWtoP3NJQ54q9tVzZ7jWgVPDKK4tcRQ3Z6Akj5WKEZCAyZ8",
  "key21": "2mnhGKPLHeKvzgZrEWdS8bxpFE598Sqzbct89HwMEzKkTZbMa5KDHx4RWKGAkZ4GPin342MdafWq9D8huKzidt92",
  "key22": "uTPrVSwda91d6T2GEGuxuj4PHsYhJtxkyWugGvaF9L5ZPkE81a43YWCsPsqbese8W1k9WPiZMX8zzVQiHnyrSJ7",
  "key23": "n3euys1zxRrGSzdTcWJ5p8sfXXHV3ghpEgDYtVwqkm5jVQm4KmDjocHTeW5zhgDbLKmEDb1q9x2bvrgD1roYNH6",
  "key24": "1r1LUE3eUfnL91G8BnhgFczSbQCVVknADwW49HawquSgwAaVGbQ6zXGNzXc9UEr8Aa9B4oBKpXrkMP2iLmPHX7C",
  "key25": "5YmjFtTLTPANEkNUSHpcYqou5iPM7nYMJbt6mdYo7u3daTLqw22uGvE5wycjXFNA11XkNSoo5hyKrZZWmh8bafN",
  "key26": "4BDfn7jAGfRNUmgdc9xUMBMNPzGFRhcVo35EEzDVGeN2dt9n67ShU56Qng66Hv5QXZu5fmRU2JVSS673EWcMmKc",
  "key27": "2rDdnEmTrxHih4kFFTPpQotPF6xDb7hxW5GWFUykkpd2BgVtGMspx9XqbYDnrfyQLW5ZWQEwzT1KqgbfJMHC27ve",
  "key28": "3NiiDDLajhbD6derNL3bdaobEkRLdSiemyRxjzAR5QHcMyrZt88Qy79sYY1KsWRFfgScVW4FB1K3rpcwRLfYt3fU",
  "key29": "oUhm7r5rd2VG8jXioh8miB7zK8bmaYRTUsJaRoCbzv9Vm4a64zDHxv2UBNVoNEPGYFUueTYAfhwbstXexLm1KH5",
  "key30": "Knr5PWKgfDbGCJCESVtWjciixaVsTxwwqckZiyurkVAhsbgrCXTDLRFwks6uaE4fmLxYrya3C3ZGUHeoDsM4LwE",
  "key31": "2Lxb6HfL64WxnreZogiK6HVuySL9gNLTadJGrnQfsFVfxrWmTT2kdYeZZ1KjCKVYxKTQujbFe51ZLUcGbA9XEaJC",
  "key32": "2a5RwJBGf9QjGNGPdUN75UfMsfPLt4ngC9iqw7V26a86cT7XLQHGW31ftgRrSdK64pjpD2aQhEemff8wTT9kVC83",
  "key33": "3QPU7wx79kQj3sC3YSEriwJrT4gcC23hFtwiWzAWpEqtWbkKmzpmTVh5uGEsGYE9dzCoS2aAj18e5b3E3pXgNSx9",
  "key34": "3Aw68amiiTyEG23nr577KZiHpkGDBL1KYjmugKqRCsNnUgvyNgBGtV5t6o7b5Sg6JvBfR9oK2TikGUPtLgMqyCNH",
  "key35": "cHByqZ2EAp8GTx3A24xteLvzKLeAzNpQbTiKP4orHZu6D4nPi15DpXLjpWBbTZRXsVGiEkNbFpYfujU4UPx6L3F",
  "key36": "4wh8tCoAttmwW7qCESKkR51iKij4FJqs7YG54XPHp7UM9Hu1j83uTKaoLkCq24omXxMK1wcCwRFJy87xux1NWA8G",
  "key37": "nJCBRBUp9CmfjMzSc3hj5EPVvMQzgUm5GKAtxJFRw7dBtw9QwJuKJoBGr4psHyXUFHL5HKq8zjbWsf2JJ4vqHgR",
  "key38": "4a9mrZ7q8apyR8CVmcEgRYXB51mW5yKYJaH4o16QV8RQgpK6LwSnticfai5WQERCBjyXTVksrUo5btn4jkpNFjhg",
  "key39": "4Y5bVmoPbEwd8XfFxyoFozi8NqMqtMTX3SuhYNFAQLKh19SnQ7MHiEQE6Fkdm3GCFJAq8Cfi7NuvnsnhP1GwnLg4",
  "key40": "2iA8snVB1USG8rreQFqnCiagNtVztAZ4Vwm1Td3SWZp2WZ7SfX7vH3cgrU76dAUtgLZ9RFVDZ4ehGLFhfMoWyu8r",
  "key41": "33JkUoAVcpy4RBqkGvnnrPWXHvxZjWZJpRjMQRMNm3HTL3YEDcp2nxLd88biJWjdW6qCEDbHbF7YpidLsoMKrynG",
  "key42": "4FaRxzMr8WgmPx9x6qjw7NYqLPbk6kjvEToKf1kf8R5RxRS7XzcwReHeLRFkcLL9x6uZTmNoApPZvxPTDqko9tnq",
  "key43": "3uDGz6W8SnqdY85JAK9diWFWfHFGfaux4Y7QixHvDEPiQnpUo6Sobybt1LYBc2mAnoBqe1qC6pkQfNymFLfqZLfR"
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
