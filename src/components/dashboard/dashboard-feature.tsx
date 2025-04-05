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
    "3VpfREnUnqoyovLt4iVAuynm9Xk3ZWBt4WwoJRF6f6gQekENWcnAEsNpGLkUYmkhXFAim2ErDbotTKTRacDQmcAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsbaumeu6rxqWLVFUjkDUUzEVbLGJSm2HTWRLJL2VwdUCLq9fGLeHPmzy5a98hzgoQmuzXrjNBgHnryxBhxigk7",
  "key1": "u1DDSo5mJ3HGwi2F2UeHpbTHciHSBsYSqR7UD6TujaJQj3FHwvsiH4JnRbWPF4Qs1MEkcQdVne7ZyDNwnXHX25k",
  "key2": "XTqC7ZK4LT6VhZoGtNAZstNqKikmu6tkqY7dQAmWCJCkkQvoZefTTkpyixaqJ374a5i8PjQNivy6xUoyN9astAu",
  "key3": "4hjWACY8YjrqixJ6TPGog9Xj9KsAUhXGHEaViJNphDj8rYNHkDGUrLgGwxjw4yA5CdNttC7S5KsUVgR56xEBktfC",
  "key4": "4VcmPwNyvThfFXKDVnoWEvjpANmWJwH5tprPr9udPHhGPqgtqgHWPNLx8mYQj6nAAZyLdZ3SQd7ouNNrFgn7YPQj",
  "key5": "45kW367ZaUYN55AQWonwULFXzmdK8NJZ5XXquXqGGgdnLm5JpcewyD8btZQZQNn7Q9pgFGAbX3KBaiEVQToFhx12",
  "key6": "2CMPfaQNHe34xTty8ishp9XGy9Ya3bAqaQfFNUc1w8vB3K1WUvD2fdb6P4u3YMcePHuLujAXodNjkGUxzBYnnQS6",
  "key7": "3fc4oeVRnY7kXjkPY1aEMjNsoYuCNVc2dAvttSaXc9DPUFvkdrKbLw39JuefQvpaZoxnNPe2PNFod6qxDsCHbT2X",
  "key8": "3jCqvdA7TCEDMJTBD8DLFkDSM8jLmCg3auRSUCe9wsC4Qk4kpUe9joF9sXCdQEmcTYHLPMCy5WKNVMUJEceRBayp",
  "key9": "3MAC3DuqTGXbjrS7p9TQvvXtdR6GwbaNhsPF3nHeym79M8b8ESMmKoESZtCPjnnid9PupVqpSpJgguquVh3zy1Jv",
  "key10": "4ooh5QBH9Hr4BGKfNZohqguqS16YpSh8nJ4mFex1QKZ8FnVSgiPzvxtGDSNvL8tqu6WZPGRvBZVcogX9omZVLpQ4",
  "key11": "3MHZSh5eJ4cqeNCKf69hNmZTEioUM3r2vJ91H89TUqN3gVg8cYQfooBJiFxcta24iXo9BKpwRow3PCTTUjBeKPY3",
  "key12": "5CKB7AcBb2MwD6HEbuG7wNPEPkAHNZevPBzy5KZRc8fKnQ6GXdMvsthXWmzft2fGKvWK4CctJKaYbZ1j3QRF5CmB",
  "key13": "3fQD9hi3T4dR4VrBpfrTxPXdKRhvtFbFBDqCnezd9tZsibyotxNoMMdCoFtVc3MQjVizCuF98ezNZs1iSCRLMyKd",
  "key14": "2cxDzob6q6VhvXyk16ef7sybQRVijUjz1abj37vksBcPY7r9P1xhAGQZfuWBf5h6ptudYU6YBdx1TTYft6hmecHN",
  "key15": "3qatSxjmDFBk1uL4o47TG3REdSDExwne6YFrS1ERHYX1wWyTzwxsRt2zDcQ2fvGegmf4ymYjQotTWyrGsjH3JeUY",
  "key16": "4EFhfWuf14b8ixMK63U1ju2JcibS64DGqgdrhJcex9vx9RTFt1AgEShwshay3TcKbbFuvrzmDRpeyCdAntjpFsDg",
  "key17": "3QgrdCtLSmjhydgB7a6hpkt6rK2pRJXw26tEjCZhHCgUB19s9yxWyogaYYXCq1ZRMT42BzJa1DQrBWhSUqKieqgm",
  "key18": "2eojZKMBnXMD7aURefAG4d1HBZ8HBnAqew3tSS9giDm1TGrV96eyKmZWnuVD57SpdJiDnprB4UTqqQGEFeLYVwXa",
  "key19": "hNdf18R5qNcuoj2WQiQPyt5AQRQrfJ31VhEgwLFSSbUjB3Uw8PujR3TK9hdxG7Wf7XKfHgScxpCJ3FTU2ohLQS5",
  "key20": "322maoBg6jJNdjgajvH8Ta1rxSCs934D9Amqqj6YmQpauCTexnvJjHENRuAgU28HbqY9P2edkxKQLKQgnMPDG8v1",
  "key21": "G38DUiNjWaHdeGwxFvWKUpQ1Sw9kefESBFRvp6FjBQtU6mdPinsMxmUiBSbr9QVQkdAB5C4WLCo6U51KaxCDfmF",
  "key22": "2ANJJeDmN18ggiZQoLW7qffjD8XCKvUpaA1S2cnoThCpAF4VASL2KFRRUcTgDzhSrWBHxNBgoiuy2BLCfCWBauh3",
  "key23": "4EjJ5XfNbskniuqvtsTsG5orP7hUZYwP5KuzfQNd8MsrjbkpC8UuEXvBqmfZPVtT7zDDW56j6WwKkyx4ByTqkcPb",
  "key24": "351mR9EPBGxv1Eiw9j2zWTkrB4SVGCbp9qFraCYnD1KBRm2abwVpBnqPxpDHnPxUACcMA7AH53uUGfESgVWhhPnj",
  "key25": "2Vrxntf8BQ77ChSZzSMdmk651cQHBnsqSDbo7kZuzNj4AoKq92MoX9SEP9x3M7811uWG6gbUpkpKkNA3TpA7DMLW",
  "key26": "21oofLBNDn6oerJXdgt8s7eQ2az9hoxWo8heenikjDXSCJmYACTMhVHDAHNZx7WkXDaHqtPoGox3XNG4HvqBmoe4",
  "key27": "3x3btk8CvL8BQzgG2jkqNqQoAN9VF4JiZEUBgJpSUivwNaNLgSw6gXRWec3dipjwDrezCxTD28VsG8Xu4uzjK6V5",
  "key28": "LUrxhRLdid4hw5z5Zy5Zr4evT5JXBynxbPdMrK6BeVrq1f6LYNq6WskM2wQpBbgdRckAJf5dwuCj6HvbF6LqenH",
  "key29": "g6YunqCkL6b7twKNgZSvgAqsoSENWixRJdtRW3g9yosCy4ZJnTArsVoYLP8to5pXrdepHYjiXc9b6PyeobZyEW5",
  "key30": "36juJBAWuouLUKERN5Ze4Z2sottqmTY1e5zsXTAzxe7i7Fy6bGC5LpYVgMgx1cAfqL96mwVuYjZjtNGJ63z45Qbq",
  "key31": "4NctHY5hXy4T7sJydjMdLgM6jfRKUoQagy6GcsmVyLVZwUHtaLwADisy2T61oAxzw18nsQUZZTAVxhAGD5AQ7kiE",
  "key32": "4yJj7R4KKFC8d2B87WT1kZVuK647awnt7jeMwGgYAUAd7RkZZFHHjpNvL5Xt9tM8Y1EJSAJaHF4k9n5vy9KAqC2P",
  "key33": "31AcdeL6WsA8QaoTZawzprj9cnMmwHqBJufGxQR9nwMPBGDSTjRze9WqQsgmUoQLZd5X5YdHeWK8UFJwQXVJHKRt",
  "key34": "3qv9okR6wiQj5PAmSeyHBCx5VVANTtoHU6AEhNqU5eSzyZCcQRyg55gE3MwWMmKSBSbXDTqqp2x8C3KDgDjLedKs",
  "key35": "5ahBXUyBTqkyTLxFXwUEtCBpi6X7PNVccbgiSWgeKf93x4ydMwxcAah7LwH4jiQkPLvBs8kaAuEDbEECFfjkZZpT",
  "key36": "57VkZFFxSx61qZJsPCDqFRHvNvxSvcTtot8pcN5a3ZmRySenthsBVQkFoFFSdSBer8Edp8cjFyJxdBHwZsMQDdmx",
  "key37": "21LKtpkoyBxepWtr797MecxsXy1HL4e46rwPt13AZEXgnyUgDrJnHMbsvqAGKggyQvzn5cB1ZsuoYaRonQd2PXq8",
  "key38": "YYpJepArQGJZGXHDgsMezfH9v27GD3uTyCWCdKdg1ueLRhPpveHCRXvMJBT7HXjUKV4ZVtF3GmVinZLZjaFkR8h",
  "key39": "5hV4JaJ369pfvpP2bd3bRT8jANeFHotVPvYLZafhhWGyWXAqhpbVxubRQkFTFt7CQsYbdkeDdEdaFXZmEhSF2hKL",
  "key40": "3Xx8WnZ5R3JNThe9Xhb1DEj6FndwaV6gsrGv8awvRCGHM8JK31ZGAKGa8mrd1JhQiUP37GDprC8BBJ7NFuu7Qjz3",
  "key41": "Gj7Mk2gWhDrkb5ahAhtpR6nbAaQ2guFR6oQw64jdcNtJsoMrfiVLfPP2nD6TD2WSmXqAMoiZn32jihb8sVLqQ2v",
  "key42": "VVSqLoYQZkj13ssebGsSvYWhVZtqMvfEy61UcU3t4yBocRfEFvstEHFUWULjASTCp1HyihG5L8ccET6Hg75M61W",
  "key43": "4UHcSLHxwno2NA6q3EB9hCRWTpP3z1wo4xCwqAj9E5sgZQrin3BduCpGnuYy44A2PbNn3zZGPqGB7GbH1mzzuJrv",
  "key44": "2AZTepraY7SvXdEUfNVRHRwwCACjVvCBFcvk4TWGA5k4ZKyaUrhkzx84ifWzADzgREsrTqbHjuTDDvt87n1QGhWa",
  "key45": "56QDoTYVJ67P1rSki44M6RWmW1K3mRuVz3oR1kRfYX84taHPS6VdCnLd8qMjWpz59C8pECAMFup54a2p6j2r87Ey",
  "key46": "4QpP4xUePi87K8UgpKqa6Sc2rZ2rgwGc5L3JKjnX6mMzDL2iMGJMJQRLJLZgtKG72i82CtWPDAjT9fiAitBomrxH",
  "key47": "3gnfKSschwj3sTE9KH5eHfLAngsPMVDuV9owW5Z6q1XsxWffyimQTQpUnbqucN1qJNVDFxS6ht5itSSaK5aaxDoV",
  "key48": "27rp4ekkBYUo6d8A8Yn8ibzZVUMjmF63NNZWsigevzxzbPnxXXofMerNqQwoB1YbdpBCZFvM2rNNm1Eo8jgYwbYf"
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
