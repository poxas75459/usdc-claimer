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
    "3BAXBkogG8xVdCFuCMaP6JtRDX4rG1Vpk2kApPC7WQ4MaCidA92o2u2UXBZEqRVLDF8i8p9q3GBpCkBpNRM4vMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkhQQAKhjT4WdK6E21459Th5WiYPdKPcArbCweTDhRnskfue6izcTFPTNSpMbtaJw1mTF4RTVqPKc9GbKPCfL7V",
  "key1": "4F4eGt5o26zDypLB1RGhNQJzYrnL7H9ss4goeVf5t8cBG23FqWinxodr9LZrUyRFjBfHitHkLS5sveTmgrHpacZd",
  "key2": "RZiyLvdSFAH3o19C559nGSnbxEji2MyC2hzwRteQWq1fw9kkw2gVCsRpzDVc4o77ZVsm43bte457G5ivZcL8B9d",
  "key3": "2VQ9qZDdb3xSzjhnvD78934y1DyffrWDUMPhFYKdiXXd9eebrsyGj9bG7Cvb2P5UvaLVE6DensgdUmrtrq26utr8",
  "key4": "Cs7bvyu7haWX9TFTgzm6k8LcDztZgvrPPKv2h2Bb8oVXciup113iLDGsrCi4A19iHhSQAzuXJSbw7QXmiHZiCWQ",
  "key5": "4XnnriAFyyn5pEqeY9Vz5GkXhgv5htux2MEKawFyJRhXWB2wJgmF4yvJML2ET7eqy9NsjcqHjy5v2yfDh4efoUts",
  "key6": "2gvC8opaBTjxc7vMaoYmoHHHZNvka82dKnz3zKs7PGkGkY8DE39KYejP2fgMpZspX3MJE3TsekuNdpRHEY54krRc",
  "key7": "uGRkuEX7QuT1D217ijuCvMXu5ERGLywyXNoCXK1dgz2VyeXmfMRqdFGxx7shBTjjMPBzAHsafKMeqLbGVk2L2ic",
  "key8": "54sCApBDRQt3uLRoFAeko9GbFkaMwXm6Sgec8Z7GFYyUmv3qQo4HZFPjXzQHnxB4c5Vc5pEcShGA98twF7WnXhq2",
  "key9": "35UPU5qYCXvSLkqr1izzs8wuN3oaGmFueAgnoCGyjQM3viZE2u1e2SJb8H4TdC3WVnqxx1rkGy8scu48hkit1th6",
  "key10": "PXWUZKLkjmAJ2c3SKN8oq3uWtHQVZxDEeD2Vn1cVbBhiEG9LCzzu3HuCMiPkJ1P1k8SkvfVBwQ8fkQ69FBSEoSf",
  "key11": "5U1Aj9xfbuK9iQKtrboZdVvr38eTWMnke4eExLUH7uS1NapAfxBwbPL8XXbJSH9DhVMrJohSrC9vAFvQPnBNy2kW",
  "key12": "2fvBA1FYLfQLHSMiaSSRhy2honiA2E1qZboo4GqAS1gdN3Fm9uSBZVodb538oMzgs986477t4cmhVoqShFsEYWM3",
  "key13": "4yJQm78QQwrF9VK94wBo1D5nykGxEMHuM7iFYCwX1zpQtzCMXw7gp93y2FaYYk4boZKGz86qAAEjqNNWN82sAYkY",
  "key14": "FL9EYU39cdfm1jK86EydjfewMTEvMrc9bGMiBzQ8JnbxTFwAjb4kcAjF47UGe41uiTcVB5mABQxSHqkC9dvB4XW",
  "key15": "67bkA9xLHinVAwatcGpx1cB619Mgq2c1kEo3iyfkdkDWKyaQGk276RwGzFS6VHMjssX3Eo9CWxUHGMB2VWZhxUxp",
  "key16": "Nj5DHKoimMbAugAkuwfFmXidLcwKLEDuZgSJPwfMkd5pNFSHatV7whJVAK6BYq19P7KjAjdQZnamUWd6xXnoiuz",
  "key17": "3n3tiHEP8b3KgcRdkVgUj14zmWLWb9PiDwsa6JPPYjsC1PdkNEHvxD6B7sXyyPBffH5UKvJgTbXxcfy79hpXHUAy",
  "key18": "2cjyegtZ2vSPhvV8HAfxFesBCCt5TxMEnpWB25Q1qEAK9wQifbkZQTxXzC1B1wTNKSA5ysWeCuVv7abWK44cP2Gb",
  "key19": "3tmQByx27TNwpzrCZiGfVcBvScdbGhMpgFF7jar1YMcQJgSxgH6fXWUGJH8S8j4fLQumyuMKiGrhBqywqujStpbA",
  "key20": "5bS38HBMQHBB8jpzVqXsLecV1RhmTyG9QNqoMmM6UYx186BycA37WNrag92yLWgKqEoSHs1MJMSxtdsBsxtCXVB4",
  "key21": "4WcFmicNg5KLnQcTbf5YkyY9F4AuCkzacZEWePFs8wPbZJAT34xP7cjk2gKmu8d4Pyw8CoSScJhjxwzGcb31VZyG",
  "key22": "4iVn32Y3MxBC4pcAhx9Wh3K59nzWE7PtMUYN2o1TZff7N8EkfRUhA2AWGEhHGb5KtQqmRToqPsfDWNxxVD8Seu5m",
  "key23": "2Zavgyy37goRGYLZgNEFJABW1C6Bpv9zxUd5TmP2E9GDi2MtVed9T3kBZCBkqdh4Nfspg5FT8xtm2aTdeJjunT3c",
  "key24": "4WMRbJGVnxVv1d9ECVfBSWuTN4jyLJX9mvVFrHoA79NwkYC1vScCG5SzMRG3gQEhojseUF6zWCMFYEhaiEdGGNJn",
  "key25": "5cJuppNgms9H1tYCUCqPZwt5misZ2zKspr8zDZ7vxsDx17dFs7to3xSGKeH4JZKaXjsoU88VCmvNyjYeVMYC2U1M",
  "key26": "2ZU3ZtEZNpvhPv1rnM4dHNL67ew2ofbsBUMxts4oGLmjpwSC98npq1QdasiPR6WUZAeq7QXsZHNMPPYGida4rtac",
  "key27": "58hY9RvxZf2UUoU4nQBLv8VszKheKaobMPCTxBr3cGXtkCnSibSiBqCeYxbpchXTJrqs65kvQyvyLjsYDj114rd9",
  "key28": "2XeAgVFnkK9Y6DkRdikuenqm8QjWWSWZMAegqxc3prN37ewpNauuRj8nV8drgp6DPNHt15XxB8zk42GKDzT6vNWM",
  "key29": "Z8ZVTvC4aZyeTAEQmrsKtznRPZ3WBXn7tNHPfWWQXJwgybpPV3cetiMCA4kBHm4eeRLtP5zLZ4CFhr1nTofB7ji",
  "key30": "5vMYpiotYE4MBwTzsTWab81eQn9MpjcoTVJqLpYFrBoHFYAjtnCZr4EMgxF8jxzQxU1NcsJCqbL1si4hvku4CNPY",
  "key31": "5t3EQQ8hi1za9FBrbPooDp9DdbWmCT4fTGuFX9AC725QKW6cv5bmJvVEbvsofNn33QRuNNJYqrUS2apJGpSkVUji",
  "key32": "5SBymkodLnDzrKaqyY9b9YrXYPHT9e4ZEcjVqCuX6aEmNh4TZBLujAWjrBd13tKwCyxtS7Tfb6SNvQ3esEbLzWrh",
  "key33": "5eqTfa1rAGG4M4UGqjcsU37STxKYPbGN4TUYfkjQ6Sdm8L171fZqLVBjrye8UfXaMKgAbQppi8hGp4hNL9Fwiqfb",
  "key34": "3w1AAmjdxqasnfrKjzYUAg7XYdk6hBeKPkFVrQLjbtjE6ifgtYUX2XoGVpMpEbNph1Lw1yPkswbT7bjZNGA68f5v",
  "key35": "3TKVEBCcivsSs3tZ4Z4PSSyYQZLTbCRvYHi1Gf1CJY3hJpZmvtDPQ7PoV5ygkmyPYDfx6SyKSAnUaGN7FVJDGfsX",
  "key36": "3EMjTTGagznsmaynYwHDFJZav9JjzamRYtgSG2ptHuQNnCU573U43fP3M631VsAzkmsdFXqzLRqcAUtUnhdRXb1",
  "key37": "673NBRsGLtWd5n5R4e16ZKRBvzJLF5qcZz9UMtZnNEvdHZ8X22Y7XegQS23xTp6hprbuPjDSv2AyXTr4uXw6jzLG",
  "key38": "53ASyWSJuAcitoCPW4FjyRVxjiYHNAkUj3e87aknnMomRBonWvVCvGAHNSMQvjSkkzo4Ds3cb2YNmKBa275MJfoz",
  "key39": "Bbduu6ZAJu128wPMoAzpWmZd6TpR8WLdE9EFsd3UTrQ1duLJSMuYJTSdNBJMppuJdyxdFg7ad4C1Xbwzb2R2PwP",
  "key40": "2bxnZPLNYFoBvmTp3aE2dN1gRUwamfCQ4iQscNDfdRQvp2BGJxbPpBtPFDvL5j7n1c7KemNYdW8Y49yAZr5YKRZw",
  "key41": "5LrU8hmnq7rxBc3hXFhPoxuddQXYgLeono4iigaHfFDsg3ofZKVatgLWuGWgdYD7YBBa2ymdPjK7yvDx6pkBScvB",
  "key42": "4ptWhwjLGE2ZeC5H7pQ7tW9TNvo3Roz4QMaurC9NKtrN46uKVK2mNirL2XJ1Z3xz6Wc7Y63RVTVv4f2jMNXL6N8L",
  "key43": "4DHzdVQeA1MF1eBGjcmhnhGUYuq4gebz31he8yZvUSNYueKCR8XTMhPxvtXDySjEukSa15SvHwRrbmJSDcvPrkof"
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
