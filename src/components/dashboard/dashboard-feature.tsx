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
    "DgK7uNgnmpJGyJVuQkW5uGm1oLB6upj2GQGQnCtgLuqMSbbdCVKgZzVbG3FLk1wgSb8iWYL9cX9jYd9WxjJvHwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q6M8Sz7oknnaosvVL7qTfPAGRFGi74jzx8xACX44kFxV2ZDRcD2Td5rSj6GKKvoPpRafJRK2it4VqRmvDEeLx84",
  "key1": "3XgtGKA5cKZEPExYWBKR9iEdiNTbSw4B71eUyocNDzFPHqfAMP3hVJM1qERArvJnhUgxaBBgiC7uWoo3UYMtqciu",
  "key2": "3V2daRNDL5mgB9eJeGDjEFU4mJg6URHN7kN15ZfgQvFHAzHXnNA4K8KS7xXhKMkjp493nSNQCvAMBWjr15tVpL8H",
  "key3": "2ykExRqP3SLNtgvQxVo9U7QftWKE5i5TiRPDSf3geS8a9h2sVveERvvNvPvGqStkp21n9Qp7Fkaaaa6NaBs89aNu",
  "key4": "4r5kjRvWSatdVYyWSjSUWeSCqHKFZqrcLkWohoBvraJAL8cf7eiBWkTY7WPFXAx1PAq4JQAsvANou8sGxUfAoNtU",
  "key5": "5sXMbh29oR6fHCLkinmGQcB5oxqg66K2JHY3gDNGxJEUfg4qvhvewJu2jqFDHhaSqkB7iZet4BZfay1Gzk47cJqQ",
  "key6": "3559BTDYEQJZ7jYGeqh7zeqg5JNAt78VMgnhUJGQydNa8EfZneK7bxpcfjvTWR6udEdfYLShhRcbHETzrjKiDDQX",
  "key7": "3rif3hmyXjbxwgeCMPGi7H9pTLXT8ockNPpsD7pTk9aQA9pynm8QWGn3bwce42joZ35rKtBrRorr75wkiVch3LJL",
  "key8": "4LYwnH5RPCVehRuwuzoMfeRJ2ovLthbMTtpFL5J2CFvwcRgtaG9UYMUNmtYcWjz88zEbkWLkGRYxoA7maNeyNGUi",
  "key9": "MGiDickaTdFF95thmATWZ9pFqmJvToeuFVCPMdiap49hwppNQFTRJdobP4H7vGsEqvHfJS948iRuPzundomYAQW",
  "key10": "4jF4QP925tsKyYWs91PnEFxFWbUo4m1aBeYKJit8vQoVAkVQLPHTxjApsmRvMrmFexcqFeunY4UyFYNU5ZF3z4aN",
  "key11": "5uwW3zFpFFaQ99kMKZCXbZ3Yvy2E2EBLtNyvYjCcGZYVRmFPi1HUqQHSUm9VWVdTb7Vi6eosfThWJL8gUdBMP4fC",
  "key12": "2kzSaDj4N35fDvx5jKzfL8QMExiHKB73WvpDRUF2Kt4KTafxrwLa9ktArtyqvQooiYeRNSjuSL5kKX13WBdabtzz",
  "key13": "tF5QQJ8FTD4kqgndCUBVmM5ohqa7193WYS6RNEWL2ckafD9HKwMEUtk69a2bfPk6etKKc5TUzYgWJ9G1YPKwLou",
  "key14": "2NHEwUn3HfLxjxKnrPoQMAFGxFCVjCbnuYbtj6bXYGCMEZtnrKbu1UBi9WgWSUfWkkfEvGy73qscT8VXy6fEybrk",
  "key15": "5id7n7Zh42dLiohEE8ybm1xCHCfG15bRJw7zbCvBwRPfzUabpYY2Az98bJhzKNWnZ6XWRsnxdFHhaThbKF4agSNJ",
  "key16": "66zqkJXAqdUwpzP5g2KArtxyEJBnhUoMQgmagqG1zguoGT1jbPN8oTVFwsxs84EFaUJKXdW3C3W4H7u9tK4P5BCW",
  "key17": "AooAu8qsLA3f1qddpLMYd4iFshvYfAEJfazAm2qxeJdkqn2JLPR7tMDpXXyUJj4rurzm9TeBJabNzgpphGjMLkm",
  "key18": "52bSxm3QFZLADZ9DNWmiKcEMvnHJw19ayvW6xGY3gWWSebrcYuv1dbcqj12uCsenQCk4F4TTJCNdQEmheCYHMduD",
  "key19": "5JbP2TU2hNQP6QjiRcNA6qp1veRVxc18TRRmUgDswxADkeUqSC6YdiDQmbbvXnqq39ePCMddpPeQV5gyGDff9vAr",
  "key20": "4W4FvAaCU6cE6n1KdagtsYzVABRDCNha7TMJFyqWmtAGajjreXqKox5jYZMJhjCKbJUr7jhKYZBsLWmupuPFoLEP",
  "key21": "5cstzhVuQYUU8yFBTWqaPzQz3nUQyEKhP8m2GJ4Vnz7G6AXD8D4jNx4TKH57G4ACVo5tBbFfiJ7ac3k6WaowuHgq",
  "key22": "3xthBTkfYh82WYZgditedzaTxdmrbxqMhv9vTVJVQ7dree28FgzTMRPREjFgezwsN5bqVthsH68m16herRCFj8Kd",
  "key23": "5J4eLX5Uh3nen4qj1YzvA7jht54uUrYFow44QSKRJisuDabE6hS9wixiWot3hNix941Y1CaUjPbjEBRmuNYTi1Uo",
  "key24": "3odq2edHuyAbSiKhnRC4z9nx9Bzfs1Sf6b6yFW1vx3SBRzVPHQLMQEPZWPY3nGkL1BQzHZdabB97gNyY4B3RY8Y1",
  "key25": "5h7uXPxojCo9WqBb1ioqFbF2CZVEuN5X2BfADPnUvE4jtRR8EujKfv8tGwivYgLAoaCmGggCTiTkm259sDiwJdRt",
  "key26": "2YCaHh4uDLSh2AHa25ec1NxUTx4QEPpVSS3eKrrHqs8WJUU8m4UxzjLe1AzbXsx3qQYiveue6o6w37Svud5qQaqU",
  "key27": "2mxjejqVuCqkDfh8WnZ5BoCnBVh9HWncPZvNBWbufCLRRsDxU5Ppw6soQtWZ85vVS5FLmLmxUNtfaBpyRVXtxdJZ",
  "key28": "4eEK9pmYhRcdhQkNpj3Ua4ean1BH4EC8HJUQgeZ86NmfDnXSy5zvmgXuHBtQ5ZMsXYTUPDmTJBSHjpQXxLCVNWsH",
  "key29": "2ATkqpqDrvFB3ptop7pnrKFggS8E8fohiCia4WbmPzmv69owqz7ZMm4MLH9hHLaPuuLU3KvQJGkzsehLZMVEMeju",
  "key30": "5LqfE2M5VLz458tDgzm1dwxxaijE7v8FaNbPxtJfrzrycaL2cKmPLJv9t4o5iqKMsH2Rzg64GeXhLhJUyipBanbq",
  "key31": "45cwFLJndRU7bmNHT5MGyCCFZpPCG1DxtLrhphNbcExhWq9Acx7w2BwR6KeARzigzwfYDfaQ7Av8rcEJvVFe6hWj",
  "key32": "fWYtDJfxxCthMmThYswopQwoxxutK997hwQzrugY25k1wFvaDBvH9Ggu7znKzz789q1YESZKaSJyvNoeCbM15uQ",
  "key33": "vS9eqdeoSRxX8ABGb48xgXP8RdqHwW7oG9dA1u75SZShZ5M3DhHiKinVNBei972kKutsF6L9a2Bdf5a8y9u7tR5",
  "key34": "63JaVxfjP5ohTSNAAATvdnbe7UarSuYhAiHdiGR6bDKwb7SCfgCC6RNfzrJyubzZDRpHimB5n66gpjovscFkUMDC",
  "key35": "4PtRYrjw2QR1Uzm2GmLJj9Wz3QVSn9zJHHwsWwvwGdVTkYfpK8kiZn2UpYnksdjpRwS7GUPTgAF1EnwMAGWJy2s7",
  "key36": "nhPkNvZgYvDzQpWsXUpCZnGDDqzdo3DvPZ1twZxhhauK9ufdrekowAxayBYaAJEjgnVNStHMCh8pXrmjY8B25oo",
  "key37": "3Ti3xBEDXBaWqQAt7CpwSexZEE19BWdh8ULJLzfi2MFj24rCTdEBmFfnFXJJ2DP56akh2hw3zK3ca9pjDyeRBBMK",
  "key38": "3k3gW6kvJ1N3S5mQGCLTEhKa33o1uNbWaJrTsZHp6comrAdN7dm5R1gERN4B9ZRsfj5gVrmBw4c4KeA3Qb8RrMD2",
  "key39": "4qVhFhLKo12A1XusQDiq1b3f8MFjH9Svt8a1nzEynR7vpZwBFxNBsGepte4fG5RGJdxT78coET3bGLHdz9pbE81a",
  "key40": "37wpncKH6NtrHZfyJJqyYP8a3kt5psD3EQyB1anDRz226WrtksP72jWmaAjvAYiGJ1EJpyx3Eu1SomYWKASBe2E9",
  "key41": "45Skw6tRb68xvdGMo8L8zEcmxx9ASEsTphTtL5G1s3Ww6iPy87fsKZVBfXkxYVN4PeDhp1EzQBAJXinkkY5Kjk3J",
  "key42": "eD5DNGs4oPeEk5ghbqyBkJfGatNjkCJYJRBDVJKjSbP9KSmiQEmgod2BHim6orPCxUbDx7a8z5rfEX373rQaptS",
  "key43": "4ckMtBEsuKaSy57RBTCd7tziGthQPKSnVXm4yXjQ7omL4GxVUweP8co4kh2X59ePJKjYRLB8ZUuinUBcoCJxQwVd",
  "key44": "3SxHyAxxMg4Skv6cQQsN4ciTFAPt2GJJUXVaQM8rdve4AWFnDALLJtCiqoXXGSMt7HLGEUupa9KPgigR3MehYvdt",
  "key45": "2RexbfexDW5mhSVgSwGi24ojo2wCQMbJ14D7G1tSxqrFEYKvzjVqQ6s4TU2PumrTTcZK426Hn6WzqLRNM1otZ1Zq",
  "key46": "2XcPdLzL6knezEqH16X31tmsDVEApcntqJ9tZ3atGs3nezW79ugykvYKhuucRUGMomvNNcbjFZLhM8se9tL4ErpJ",
  "key47": "3dXZmvfqcrGJHgms1MpX5qntFXXkDo1HeRVMZsJpSQ4ncouALP2TkpiD3TKM9KbzxZHtKfbsfoLPyroyJcEhCb8J"
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
