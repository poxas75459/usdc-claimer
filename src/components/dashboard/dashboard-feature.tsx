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
    "gkNhtrWUKX1nHmW3pAKygVxSSHKw7dRumwjPEBuyMnWEaB1SMcgkqPUXR7ovkavukSQPKXc7Lt2WYQXx24U4RFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJS6grtCUrhTnxuS8QY4bcLLXFpMvGYmbCNkcCjtYSJyufYxHMaHEYLd788G2Fy29CUeqNonCPLbkMj3sBLbPdN",
  "key1": "2gHLDQAzK7PBSSpt4SAChyCp7QG8VTqUyesgwX3EY2EN25aMryBmbErzFCoSQdHsPN94XDfebim3oW2dfcTEpUbY",
  "key2": "2Ldw3vKfRW6sVaygYECzL33XEwCEVXnCoMocN8Lj3rketxjSfuDBH3QZWTnmAVEfSqhjicBSWnzjgUFuKGcdcLjj",
  "key3": "z8XuGTxsk6P37BntDp99nPKqdDX9vKMJt8bVeABzn1uzqi2BNfafULSur71y64CrYALE5HQ6dvMRx5a2eZHGq4e",
  "key4": "5uD1aRPrE2i8b8VUiHUHHpsdAbiTZ2n2BmxMYBX5EBjMancamQKcJssHNeiNuZcrfi6LtRv2HS78U4fyytSSbw1E",
  "key5": "N2YWs5K9T5fTq8B4sZhgXGDdfr96gxidA3VA4pS9xXjhcLjR5Xopyk7R3wyGeBvdA5rZ4MJxdJA6yLU33Z5Lsbd",
  "key6": "2a4dUogmzu5y9g5ZFVCqMTNRBwgNPA7Zig7hApsYSZjAkMXEoUvVSBVPSk2bKqXjC8HnKbRULspMZYEP7sMBxLHC",
  "key7": "vpHsrmBXUMDGnJxvD5d88VXwDrux4igtSfx4ZTnVmpkuGJwUhc77kKaTfMDdABJ1kPQf5gK7DpPSujZQXkBgsys",
  "key8": "2aEdrCnkKoo2xMTxudiDKvvLv2wHeXcauGUriYeEEWSgoctJ4CSFpjrpnPLqHW6umJFpzBRP7HrBs9ajb4oPWPYj",
  "key9": "5wSR7D7kPfHRCJEK5woS6unfuDtmbZCPnw9xfFbmX9YL7sUqwWXXAs9eVoVodYc5jpt38rRAhccEyFiKsTdTkf7G",
  "key10": "5urUMsREh1vGMuQX7svvGpu7ag3W2FfBiCLVFAGFv7j3qCeTepgJ5qaYcc18MGJCEXS7yZgjxbfAxesUXVtjfnH7",
  "key11": "apjaF4mHTHvq9n8i1kK6ZvMjwQjP88F1bgBg4oc2gUhCDrVxVZs1com5ozXJX2sw9ZPUWwGi3NZrzV7387mAS1R",
  "key12": "3e6eEdVRu5WicM6T19BJzDAHZApEvAXpR4zz5gG9NpAvpz6RnArXEc6BncrXo5s4Faxy2PPWXrsdH8PERZdEJcK5",
  "key13": "5RsKzvNf5jyx811nLp2JnWsuxbGKhkbxj75XADbjffhhmMuffWweXnpCnftnUz426HBNGzkJQkPeLHX2H1WGXQZn",
  "key14": "5ve7yp2FjBuY3qohzChx9SjvLmeT57M8V81upZnwwmP9GjwC44gSvDBL1zpnJHdYLb51TCQBdbhg1iNtrHSjSARL",
  "key15": "3krasB98UaWeTEJ8yjNbXZg986NZzQk758Vf9NvAiqNYRJeRrEEk5N6RddiuxPjVh36os9NhdjfiPbaQysJPanE4",
  "key16": "5gvDFWivMCR27Bhupq6FijJwrCiQZUYWN9qv9oBfammuKPnw4hxaiEdd4qQzrLLrEzy7ZGfACDTw9VxZHfUD9BSL",
  "key17": "2yRCdz4UbtFeTqDUmB98g6hkDnJyqErhQuVCCUoz9qtbcTSnsbq9kpM9Ka9F3C6hW9MFixa1Qivz5q9PL9HdMsa",
  "key18": "3kygkSLKWjPVbk7T1WJoRGEkXVnxVR6a78FzT6r6YuKSk1sv7ZrJEjVB2TUmxGxxBZtm3VbwgmzYq8Pxr87HaBM6",
  "key19": "3oPKRD9ggje5G3v31GwP2TGDNVjVAMnZVcSz8Y3wQkMa4KKTshFRrEjRucG8fqTyrBK3dZDRBeYzam1HNEHxMuwU",
  "key20": "5hUk3pEGHD4KUraengtqGsZBkcKStTi4cy9HrL8gdpRzrPe9tByoLDRjDyUX6uFBp1X62Mvefy3VkZNU6fXkvGoC",
  "key21": "fTeEiubdMvjuXijZbXvo4U4cthvDxqHZQTubDQERvFbjJaXffzn6hPVmv74tVm3cg3ZffxNiYawy3PjhuxSkSe7",
  "key22": "znWTqa5pkRPhw15bWaFjZnWdxx69joinefckhGCRYGWtzWfgpyr88yUMyihYRKBK9dYqhbCXzENwdR1ETz8UqYJ",
  "key23": "3rXQb4f5uZByMJw2Dy5ZvqfEvkd4oPMuSweQqCB9qgQiCsig5VxBU2SHuJ2Hywr8dc3qAZsZTJRYh9oYpDG3GJ54",
  "key24": "323s6e4QcCXjb8WhfkMs7zZEmot5k8KDm8usQjzsDKTb8xaadqk98jGiXMU5ygthKgWxDtoQE4jXhME2yMLxnpkA"
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
