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
    "67mU1PtSTAMrYSfnLGXgZF7Rk6BH7x8SRPX1NjLP1FJ2M2nFUrAWMDxDcr8GoDHu7ZpvoyfyPZxmPy69SS31TXkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oaKU6WhxK8iiZa2pDdDAwSH7M138ZkREDucZeAzCnBF8zPVzTqMjRxqSxZQfB9nm8MmvjsZrL7EJ6qjTLyfy4Hz",
  "key1": "Nysoxm5e1c8i4ZMiNJyXzmbwChL94GGpizcpg9RZBnn829RS8sF1VQ8gt1npFUR1dsTGt23dfx7q16jMm5nkqAq",
  "key2": "4McphnrS9bkqxkUhRRW2U4jX7A2a8PnDsjrNBAoCe7G7JVeViGELRRG1TrWXdMZdHwdDDTsn95mqjCEpY1itxmF3",
  "key3": "2YaWVRohmZ8wf6oK7R6Rp9jnnxsncKXzyii16jF2r3AHxj5cjbQhMPpYmEdHxh1URD5XnddMXGGkqHKDzdWph9q2",
  "key4": "mnSWUkhjPD98y1Zwt1AGBnkk5MX3fD8yLe8cx6yX1duDeXL2fnFwTP3QHxEWPw8pRJZitZ2TBH6p6b8jaF3n3ye",
  "key5": "5fm73de8ob3FBpf4HP9kaWcGST5PSCFXvrSFvYFkaFi9K3STbJKguiE7cX4wjZkd4QVCTWb91Lro87UtotUF6f5",
  "key6": "35JQexEnjdRC1azviURtc23MWaj6YDkTkXv4hGwd3avjGP9QN264T3gw6ReSv6FXCLTyAA4biXKH8gB75ZmAjtDA",
  "key7": "AawPqeiH38yTkarb4tpWuPSkpHkGV1bgUaTvr8WhJEsgcoZQpNZtvN45bfbFGaWLbT2zi4a9KoJRAq82PCG7Dx2",
  "key8": "LDAKbsw7aa5RTXZPqaKNLdcFqPtFLYmXiV4QLgSnv5N2p4QRX4ZfDzWZzSFi5zXvrKfkGq1wiYmLRuTg7a6pd3y",
  "key9": "52CGmY2Fzuw5nTzLiJ1mreZU3iyL6qX9rDVAi75bfA83463hQZUMtigmXsGT7vtCB6AoXy68bk9rT8d746XLZCDL",
  "key10": "3YW6v7aHk7GDN2ZAUboRkt1Zj1vvidk4dD7zGECsSep3Z8scBBgdYRKzagmUEwxi9pBJ3bYjtYgJeTyv7cHtpH7H",
  "key11": "2JBnE2jgLmjv2VMcnMt1CGaoj1LZTGeLK7c7ts79ugevxYPrjudLJ3NiowGpJeqFa5bvQkK3Z7LeecEombLj73Bq",
  "key12": "3kBSDVeJo7tFYQmVwfZTeEdHGtmamviKLkaam8pohi8qWFMoDeQPUNKNeuPNFHThdH7b9vMZ2szndomh2QhKUL7Q",
  "key13": "2UPcibAnXpDAGq78ctnVqx1fzYv3diTkdiJyFUPBPSitQYACbW16HHDeWdPe6z4E55HFffP4T8aJLB72vuDUbfvH",
  "key14": "4VnVzyf52bMktaY5BXAeAMToJaahNqrbtrNYUoCqP7JnseJSW7G2EfBu2BuiGdW662eiRmsBxkB49DoD3hT2sMko",
  "key15": "3cWMcjSxRXKPkNhXTDXRYT46f6pn8iQKab1Pd5UnLyK3oCKND666jDRPjM9Yah7C342YpRvyiMitNGEbvSVnVunC",
  "key16": "2wJhk57pZS8vDafuf6msRV1wM4LgzxgfCMnmoAssK7nXnGKwSpmJdt1iRb1TJf8g1ZT2EyazgiZRdfedyiwKHK95",
  "key17": "61swArLYvQLTXKzmSrSVSAkaDuQ8VALK6X5omXhwk3Vrm9VcWG8L3PemUwQCoMwdSrKm6eRp68DrCmCpc3i2gVVy",
  "key18": "27rKK3RM1PQMV9oeowYsVECvjrG5KiUNzqUgHEjEFSSQTAYh1T23DwZcceuchMjbNUvk7MezQp4AWhN5YCXMLm31",
  "key19": "j7qeKoLVMpBLWZtWSJCvunYMTre5bkthTGZ5eSFKh4ZGgL6qn81Fioud7HjXU91jXPt5JAQCUNPMZ564XVz946k",
  "key20": "58duNaRoBBzdZT8gedX9i8mL3RrcKfAZBtznDXxgdvgGPMmRJ4MF1ZNsfP62vrrFXovNnhYaqVQtutaj2safTwEL",
  "key21": "v6ZpLVCSwCXvP9MnBnvqruqS5sGfMYd5hCGCChMR6CYLLnTpeExxkbP4ZKS2jev26AdL1MmaCocbzEvqSnA5r22",
  "key22": "22VJRmKdoWtjEJDE9Lyq9VufFSRywYHkqyk6jaZSGSybNxxj5x7ziL8Kg88WFVBiCWwaMLYAsK1A6NgokgEMKHjy",
  "key23": "2b6ettf7uqpd7hbTkLsafgJo66SyGCtZ917ZNHdRGBFgie9TDMWS1kN3rLE2bhSG3WNrH93uDkqdb54prHbfcrbk",
  "key24": "5R3yG1tCPkSmQFCAS55JcVvSAj1B3NLmYA3DaQjnJrZ3KL7BZw6anix55KtyiZ3ZsV6jhA1wsy9E5xPugQhpx5KB",
  "key25": "32DcXgTzPMLDw4J4yFp5NAAydRTgNBFv7rdxBwMCTv9Lcu67Rpyz7eQz61j7axF1MrAun7KFpBr3gNVvsJdCd9q9",
  "key26": "4y864B4jCjRSF4FKWXCSZFkCLgXEBDki5PAuZXC53zcup6wkTdGfYTwcapD65XQDjPQvtpQUQUymjtmsdgpsWRdX",
  "key27": "5AtiVsBHKmGEAYGPYWn8873cMAkRzToUcqgLMaqzADGWcLxNrcZ5Ee2PteBiYbcrpjbqktiL8YYemH5xsfCtmSq",
  "key28": "5TcR9caR6gvvwTvpJPBTkNqGykRu7AgmrfvDWpETVifVnL9Qume7pX3qytzDD49iXMfoBNtmetuFM8UTnCDP6yaJ",
  "key29": "3RnqTu4EWr9ijDwHV5T1WXXEUvaGKmDCDrMTMc7G5K56RoDMKC6H74uZwKLCHJHKVX1FoWCuhtDbwAwUdfTsMAYg",
  "key30": "NQRQueqWWDrzBnD6orE5SWLwEmHUJ34v4YDyWebuQcvAwkGQCyMaoPAZPbBvCzF1X9nYSsmHccfiAE8EDkZLoAK",
  "key31": "5p2MoFsxp5DL1ayKA2p52o7XtLVsSuY5Vem6tG6DcNGhF4Eds5CN47pPsShUj4LxejPeb6VFvSG98WtY25oXaCn4",
  "key32": "5Y8Jx91q4PfAJznfxbiXLzNpWt6RAR7Fxfs8bg6LzNFHU4DceMwV5rRBpovk6kWGL13HBenSLGwVnS73CmhrhYjv",
  "key33": "2qPEqSWSKQvwi5UwjSH6wYugtFYCxM4Azyxa3GPaiKpvS59WPgW7oW31KTvqNxMZ7pAgVd9k7UfPUgLQgs5ugU1f",
  "key34": "3NkjExpKjNXJMeJAqbnmuDTfQzXAYDtKWG5tt6tHcezQJ5wKvjnY9ApT2YMEZxa9UjJYi1GyKZf2wwJFytSYTk9f",
  "key35": "rs8PXGYR2dMRTuysiHXVmQAbsbcjKgu6wsvoatLyCPoN4sL1kQFC4M6ri6NiRp1WThkaVxPSdxA4pCyjD3MSdV7",
  "key36": "AzUVs13agoDxg2ZFZ8qrMst3QAevZocWd1HkBGvvwkfbrwvmQH2gYVjtr3jbx8eUd7juYn5i8J7YzJGrausGcA7",
  "key37": "3aV2SmgJ1ymffwPwMM3N3K6PMjC6dQu6hcmYwj1D4WKKrjHMKAuKW6EJsFxKVDhXnYXNJAdGbuaYARjJ4gpZ9xtq"
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
