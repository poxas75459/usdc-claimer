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
    "5DtFsyoFsTvn1buthdjfk3cv4imAtfiiQ2Z39pady15Lgk52jdpYMef5xTpRkdskvsNvkKXm1M3xb4D1gite662f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "atrADufz8CopoTZs3wVqGxrWPKbeY4MjCow3Kk2WC3659VD6AVCRJeKTLWE3zggXub3TVFvyfkn3r8WfkdjWKLS",
  "key1": "2HLYcvGGPFEJakVNycyBd7uV7VzqmveWSrJjuMyVfgUZfymSPWPzime2Q7TErRjPA8JMnL5v392g3ULhbLUtZRS3",
  "key2": "37askJUvFxiFodz2sLDLsrgjNmciKS5Loo6g5yqhTWb6fLBTNhoJMVp8BqYckr81RjAaHFn3BrcHV17zXRLZTE11",
  "key3": "c2CdHnLt5ZRq57wLpDHfCFe6iYqcbiDQiPgAH5jPTEjdJ8mkvEEN84nfFyCHV11kCFYnu1XbzwNFXXuQ3GbMbNf",
  "key4": "63zsRqZF9quPRVzagRskWCoRrw9NkzWZvGpCBaoWV1xZnqzuGTFKgnJ7APDmc73fcrGDkvVgWU87V7HYyGevnfcA",
  "key5": "2CJMyX41hbhpTH2GUQixpbMyoFqDhRsUARyGWQdqKuvSxmCS9idLh974Beb9qnzLK8KGvbeh6oiBSwtJFdi6iYWo",
  "key6": "Qc131it7tGSVNnqX4cWzKEYtq5zsXhuc3XUb1YhpKNeRHS6qeoLSTAeB4ZouFv9m5L42uJRC4iBDmMC34u6VkNc",
  "key7": "8VDmWRNAmSHuVBrAsNvsih7DLC8MzewA47A3n6SRmXjhQ9iNR7Ua6eUYd5czAh6o71suJu2YokjN5nsV1KbVefS",
  "key8": "3jxKbSDLtyfKZ4JJ7Wvsqps4xauYKmEAc5kvVAB4AxhCyUQDYgfPPXRWW95TGcJYbnXQLgjeQ5Ko4kHwUCZQaFzF",
  "key9": "5m99sz4fNdWCamUyjHTk5Nid3SQVwT786WWrDpbhKoEBgQgNAUyy3oFk7cfJyHFTCxuYCq8XKbkKhm1bEd7b44zt",
  "key10": "4oQN1bmFxvo3aqet8GC1TzXF44Tm5bZos3imRsGKCGzKUtZsev83DqBRJHj6Low9yzvhu4F6xsMbggPQ3otApKp",
  "key11": "4Pif23bJmCmPGQVoGAEKA8T8mkZwNyH2taMeYiiWB6wuWPXXwzsQe5pGjjRDFcYy6ifqNUdDGUnA3wdjJBwNESz",
  "key12": "5Kn9PqFWcDFBUZBmAQCH2entsxfuEr8oQaWmHibtmHFjJroWRq5V21ske74s2eR6RCwju61d2KqpPAWEsBEtn4Uu",
  "key13": "1fRmabdMiar4sTydQjeJdNRaPysZfkt3fKARNjxJci1rKsvRvVzWAnKmTpW79ANSNCJoeAiLnme44Cw7yc7Y6Tp",
  "key14": "23pHwBr6RVFSbEsbwZHt8vPWWgp5Xfmhcc9wTBgG39sgATAYrDByf9kXa5uxWqC7NA2rnZc4rqrq1ZafPY9CnjTn",
  "key15": "JGQVx232M87R4PGoYBYgtYJdUCsTmDJSgmFk6UtbyayetyHHxxzn9UMDjN5n5cTSrmJFHQnSMGqq3wdWSgavLxg",
  "key16": "2FWV2sjMutpUFNAet5RrDeZKna9UUCMt6EdtkLqSdVLQtmrECZUAzameTr1xdDDnpigGqusYSGjdCbXPKppYAB4z",
  "key17": "62Cb1yAb3jZ24WTqsMp5T6Ws4KGGsRCLjGXbd2bAoe4xUcBB7LDCAw5JTkz7dbMZfpSxQ53RAy6fuNQJHgvY9DgP",
  "key18": "gX5T394wKo3y9CbTSkAtdpB2PUqp5yXmDa9am7SEwZJaWFdWz5iaKdy3TottajHg1rLwzHU4KuDjzNdCPN55hCH",
  "key19": "3RWqvRVEZZGTxgZKrzVQZLjBk6GiaegD9952Qzz9MRPEyh9ikU3VftwqiN7ZsbWtosmji5yK1rtZNwHcVxkkmbJs",
  "key20": "47hKreViV6QWdtXbJ8SFPtizjwetWkrxDP2D7YnViv3mMpumeUQUUswXTrZTcLGs4RzTvYsV5HL2Ph5CsFSTo7cR",
  "key21": "4ak9nNoJbL6UQL7Nm76J3pAJLEfv8nSTtiWVvJb295xnih8z69nHhWxdspTq4NrFkFp7e479T5im8JNHJNFihx4N",
  "key22": "29APbNSjKBzZL3p6icFYstNDLDcU2Nd3ha9e1ZExRMkpYpjpBe13Amp7Pn4pzTsKvyUf7iU171nizpz9WmuqGou4",
  "key23": "fAvRCJjLV7N2mLLAEyyqcMwuMyatTFGoHyPn7Dx6c13PZ5Q9LxPbvC6X8J3pFnCqJvoHsgkJYvPmE17FrsJL3qe",
  "key24": "5qPWUkjgaGE9T4a4gZTDHEmSRmy3YaKFFNjB7gcjpY697rm8cV6fo9X9Mi7khJZp4hu6MNAAh7yYstVvtbPfx2kH",
  "key25": "2xvSWddvBShAPTAhB2NgSbF4YaqAEesd1N5CNkbUcDGr2eZzVwisbw4Z3rdEN7jE7AEbdmQd465A4egzwHreAMZg",
  "key26": "4yqgJHTQtwTLh2yRKNQeu7tPToZr7Wrd3ScHjfDN5TunU5otNjz34ARDX3RwHN38RNxAoxLweAQpAaavbrLtCUGH",
  "key27": "3E11XQHY755PwdvLMZBzQveZwfV6iC8jjPo8hyUf8NhccJHHTeagdvd5edBoAW9j7sqdbtEiC22icYtDirCgH3xg",
  "key28": "3Hhknffx6NpAcgHwYG2pz3bMczMT6dK2B3u6fL3nSmGuLLYZBT3mE2onzJ4ZtBSbnAXn5eFmoAfsMLczhwqDsmm7",
  "key29": "5PUw8w9uTerUG7vVN7PpYiBDCzLi7bFvc3trQcgZUy5G5p2Jm2AK756fo2jy7JPXmzCcfTS477ebNYwYeDMRWmyQ",
  "key30": "5SPZXXnxydXMQd4f4ggpvLc1jKtGTZuWnxatCoytHj2UEWyVWEz5HGEggcrD7LCRhuoz66aJJsRCdaxqKQbo5ARn",
  "key31": "2LF5z4DSGBRHSunk84kwxioYPvcE4RSGiBwbKkwmGMLn4H9SooAvPwVxYAspG3Yove42g6mVSKYFF5wPkGCwDrcM",
  "key32": "1q1xigs8ngit4kyDRAehrFL4o7P8opkoNVEvSUA83zJAauLkjKmAmsk3c2wLEzBA9WFhhnppdkyjigxWZsTq5qx",
  "key33": "2gokykB8NHS8qWJWmmEFAX4akhgpFnDCrvwGNcapkYJpgzQGYzAPrdC29SykTKDYj9oTTTsxGejTqyU1QVTNdt2B",
  "key34": "2UAyzQRNbxWp5fNEWqXPJPiW5MqcWpQq234Ex5twararGxoXEXmBpXJeahpsomwt2MTzYXiHoGToAb3MSWYi4ix9",
  "key35": "mzSWvyFXSniAFs8hWJWFfVx1jeREKu9iGqZxP6fg7YPD6PUo7Pfqz9VEeqqeNwAUMv9CNavLgHNAH6So4HrE5R7",
  "key36": "3wnf9W8TWqAnkNXytbbZCNPvb6ifWF4YWsw7PR5M8qZhVrCGQnRRXGPDMuCrdBPFtxoRAAU1xrNiJiJGWvuBo2df",
  "key37": "3Cjjzwd3UzmSAAvddc68nC6jKq8b1qXZChc9GKQhaDwAN8DK5s48EBwPWn1hYRCe8byAo2EXxv1pocaLwrksfG5f"
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
