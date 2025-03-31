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
    "3DS4eMQDesWwu2ZPLiEU7E3snbge5pyLtCv3fmL3SzCG8g8kChkbGuw479rWdp3NdHDxan4PBBFqpE4Pqd3hnUvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hivZNSEMG3zcjn5FCsyoT8U6ThSD9qu4zwkZRpy6UAiMbh3BRNTaYE2xsBBmBrehvZEMC65ePEvCkLxLAasArnp",
  "key1": "j7KxbhEUuvf9eMagDpFzLouC2Z1M1XFzL57FghnDZMDWj3fQcuHGrZfU2A4DuseGHn68Ev2BSziY4x3kah1jU7E",
  "key2": "3wWL75QJ5XVcpuk8DQd95fRA6ahRB9PgnyLvbsMfEJxHJv29fM8ZEVVErPdA6iDSRh7dUbjevg5q7VgGHzzFQ3BL",
  "key3": "MiogBDsXanBE2sXN1SKCKUELZJX4YCKuBTAZKtSN6YFnbbo9Xzkfe5gGWcPDXaoJ7HeJd2urY6ff2938omnTa4w",
  "key4": "5ta9UY5JjHmArpSeAXqgps9JkNFyhgJyeaoi9jXvicMqRdi9Hp7Q5ZUfn2Qv39AcwuZJhyWsTnLh8NshYQ8pQtYB",
  "key5": "2Tj4c568GtWvBB3ipfiMHda5h9UwSrSrGw9BhMTCuzDEjteWUQTXgrGRpj26tg9z9Jx6RtMn7kkWbedhdaDtQg7k",
  "key6": "2stfGBQkK1oAQaKKkdJykHrF1pjuYo1V4zJ9AhdnS4RvwNcPzbX3W5anQmAayvFrSqjx1CjwMcfkaE2tS38UrXBj",
  "key7": "2cfo8cXFaURLngkBePtRridJ6C7zAXwND2aXNVixosScF4ZgS2zA2rjpw1CdCrJxDAXgARYBWL7z1C3zxXdSixrB",
  "key8": "4fqHGXbFNc9QShdCqTr7T1QK8aMktwSucv4TLjoeusdX6kRVZYHPT4v65WnP1vG26cz7zHhWWkBZZ6zvP3j89Cyi",
  "key9": "65DtheVf363dGEB7u6tEhfZWZwfNsJFDGLdme4LsbQkJeiQsaEVP8FnyyzkWyioeN7iSHSPoKRWPq14vudRxbhy6",
  "key10": "3RafY6tQd8y7LX79JDK6DhJMAduwoYAdAZDkSsxJ41buFCvJf33MpDXZwBVp2zTDbqT3aohCaSxC65YEKhkCojws",
  "key11": "3XmdgBL3HneqDkAqSTTob7TxMufiHuSHgUBAT6rSZUFSwGNErtaMcaCka1nKVeN842X9dXYF5Ei12ammejTgxzEU",
  "key12": "HX2iQs1pLVGCTCEpeQfE4FHKvBjfXqQddWWAg7xUBRAWr1v7uKvj2Mkx5ef7qbYbnQsDmuzXhh988HuHaKi6iCQ",
  "key13": "UugwVwpJeZfbNfuEzcUs2vhUdB6hcSUAJATV62g4jCvBsJxpCTaxrnyDWJi1pNtVhjnGtTB8pbPqirKw4BstqUr",
  "key14": "3FA9AHmestkecqC45tGt5TchFg8qTHkJ4DY1hgxp3gD1VJJ8V3iosGmoGe6S1fAjzEZYDBj6vpenMB5HUBhsttYy",
  "key15": "4XqtiS46njTGCRpaWhpDJ6nGeb8E6TP89ctPwYnnktMr2Yfu2H7Tjr5BaayrGiHj4UExyHxA8jmiSZCWvNQwyn3R",
  "key16": "5gozuQ7omDAFeKRX24gkcrb7pHd1yzBj9xuihXsqP4Rh8gWUwXBknMfKCS927BE3wo46vc9ep9WAzy6aUsd7fZqo",
  "key17": "3FuDjmsTm5sasRjpXmZpoLShXNbE1tCgJM2YWFpfDzBfW18ZRBt7YiqWCNA86SN3enszCS71NT8963f9RPQAKjTT",
  "key18": "2N9RJ6JBbCXmW9mwCwZwU4obX8EobvvVBzXuS6kZJTaPdCrY6RWNMtSNAPBPgSEJSDjYeUAnXCdzCS1bA3AKFHXZ",
  "key19": "5zGMsbqasAqbMda1sJ1BuqewFj87qLvGLBSXw8BSE1c8Xq1iV7ERtj8hEoFo3zYvnVm5rs2JzEnbjDJ8YFhLRs24",
  "key20": "wkNt7NFNPqsLSTs4D9h6C6d8Aaww37WxGGobgU3QfNMkmck2ct86iWqQbTUZeAMnzkzYGj8wtF98WBRb8ME2VrA",
  "key21": "3ug63TbdVpKCTafFBWTiWS5QjNzkydDXYxCwc2Mc4ddc7MmHXyTLz7WAwizyqnbqA5C1KFPo8wRUoVP3uNNmU1co",
  "key22": "5XWnqNz8BZdEkZWRm9rz8pWVzASgNueKN1CttxQ8JXfp1uX79N5gzuwLeopx83weHpJkU8eYfWX7Cg7cH6tg7S1W",
  "key23": "4waG9HfZoGkn4DhJT8eGvwcxAqDL5x3chBfhkjQrhEyLcLojsNyfKi3ttDAaAncJ3aM5EBzRVf8xPWhztepGqHnt",
  "key24": "3tRFaLEmZcoF5kVvE15zRiTF7FtEYA6jLP8SYEVPDtpayAJcc4QuAfBJTABHvr4N2wmCyCAs22yoR4wLMLSui4Nd",
  "key25": "5qMfcXFycP3RgDRJjP532P2PJ4wRQcEpjDkXM8pbEzbp2sNsCg11zFTXmZc6ePhTZ7gtmCsLVdd3GgL238wqx84b",
  "key26": "5XKWQnansQWvhEuMQwphPGaHfLDUxAbYU25Jcde3x7z1Lxejx4qZvBqbVcVyFvG9uhbdU5VEwmpHftx36jnaKb3P",
  "key27": "4X57G9EAngoKsZuyGDJ2XyeAWm32reCUBQLH5VFprs28pgkYxAn7gYRwxYqkEt5rnT6DPxzhhMEuTbHFr153NPzb",
  "key28": "234EhDtSNAediwPG65hGswGLu16psj2XdSr87Z9EjYCXWfjLRyG3w74gV9MiUP4wNvjTk6jq5D6DxBeJui1MgvCW",
  "key29": "4haWzr9b6hYsDyaoJArKEXzAKLxi5hiq3tb6L8ot1Tjj6d6YuNjgtQqe1AVDjfV4ENKXM9oMRAW4xL3TPxEc5wQR"
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
