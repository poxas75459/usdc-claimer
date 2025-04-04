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
    "2bZFC1KDqQabUsd6VXGTLav4ZFiz6EH4w1Ha7UsPvStYqhKEUBDgvgE1qZtZUGDpLKonoDDo1J3qdN1RyJFCDbvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PNYk7JyxxwLNserL1A3YB67SWD74DKLEb9QKyj6Zu76S1J3BATab8T111MKJo7b9Gt7HFq7WDyhwxFB3LSP3Xd4",
  "key1": "aj2ciL2sAigUverVNwRjhUo8B2HkWF4D1P9sx6mY45b6LJQrE392FcEZv8Hu6xN92TR8GH7TEtDq1DNqG4oXtSi",
  "key2": "4seVJrgGcG5MoFsrXeRWNnJ96hk65dVovf4geRxWxH6P6dai53KGRSsYQjg396LZyPjBtQaZ7r8FW2oCAnjUtfSH",
  "key3": "MYAi8g1qieREz6uWf2bB5w3Hxo9drmTTSkd6cg5FrBKiXuwTD9suamBJ7wYkd2fBMBVdSjFoaj84tSBuobD7hrw",
  "key4": "3VYESTPwGvzw3UU3TGV6SP1moACoVLcJ6Su32mxkhMcVcb8PxKr8goN6akCrN6DQT3t4BCKGaERJPrdS1RQparJa",
  "key5": "5vuZnrFzbfMnf8AnAcBScp4JP2txjof9kzYezPpJ8wf9rYPb4JcV3RKcTPBeaEHMqfmubnEw41w5de9bcjXCehsj",
  "key6": "4emSB5ver8kfhLZbKZRBkVfnUGkuEKwrim1vhCfJkyCCo2CX4eZwCPUqTMwiHkicLX34GH7wYmgBLvagVhBBcPZk",
  "key7": "2z3PNiHVQJMgPDo7ZaaCnaP2kmKh3GnqzKniAmEgWcRFdRv5qLuEY6ATgSh33ykaRQSYXD7YBSDHs9rtqVVL3CcW",
  "key8": "2Wi8LpYhf1g7YRCkx687UDptqrYn6hxZPGjt2wUneFw9jFhowkTtTFB8eXKpNrowZBk8pfdhv6NJivUQvoyvwfRL",
  "key9": "3krHNrqd8gnHHk2MDEBkXDC6ire5bJ2Tda8KFKcangNaSrWEpi3vuBGTU8odweaift6omJSJWXKf4AU8JSGqqeQ7",
  "key10": "37jonVfrp2BHq1xyg9JriuRkq9LQUwYhLL6wWj9JWw3Zp9Q8B6gsxi5kfR3iuhx6gYiEJj3HpvS7h3jRahW47Cf",
  "key11": "bb3NoYCpS43QpFSpTxBM6Fc13X35CAmAvhmubBYHywU4jN6BGfV1s9JetCL4R4ZNh6WetdENuWuz8nb8Jo7NzCF",
  "key12": "3V8fRC7xUycTtu75Cb98gbU3HtakiwSvZZB6xUpKeRFAhPZYhjpXV1N7tQ6g7Dp9N1vks8igdKJBEELa6YX4KnSs",
  "key13": "vCpV3L29Y3kh9qzweb4uzh1XGGdnwXzrCQCDAkgHxSXHS2ZoadPMSxHfSnj1ndmCrjDUL8RWoNmwbdwYmUVhepv",
  "key14": "e3EUYYqVZs3zVMFdVm6wKxrxbP1GdxoTHWRYQKomxKKCPUi6A2DpjcRFFhY4KDMQ5uHPCAEgDG3jeS5YEqaoqd4",
  "key15": "2rAqgogRShVRUeDh2ZMHjdp3Go1zgHHHPiqL8XgMFJ6QUWQUzunpz8pVZxMEaLmCcGQ3e5eTvf3WhjPC5be66Qok",
  "key16": "4grtoZYVm29b3pmisF61jXAkZYHHkbi95Fhggr1RVraN7sbAvw8G3o7Gt7GURN58g849BNX3iDiphHCA9c3x524D",
  "key17": "3GxicRpjETiMRsjiWiK9u4NZ5yPhEg9LVYMN6JehxH5FWKD3SHqD2AejfxWrFywzVx4zpwCj3U45cANDz71rbNN9",
  "key18": "5ZE1jJNE7E75861UeVdGyQEQevREgQVwfKsQtgVDjEtjJEe9untJbRFkxiUkcoP7acQmeAU6qvWj3nSLkHPAJoZJ",
  "key19": "3vEPmWBZCDYuXE1FEdVo1gFzVasWsrVaoHqGSHwZjnj3sHhfYdCJmT444S2gZ8oBMo6n2AHi2K9oNDhMbhkiJdVp",
  "key20": "2HiBnhf4aAwxCWgLQsU3wX3D4Fzqy6kXypBY9XcXHByksCjAahjDX22H1HpqTMKs86DJvUeRjx1MNZEsi7geAieb",
  "key21": "c6Qff7oMgXaPaKcqqz245SfnUiJFfN7RfSYApuGioYNNygS3bexz6Rof5mir2Jt3RB9n3mg65Q2ZPVBuwJiUXNz",
  "key22": "4yQqu2nfAXfxp6UZ9tLdtKKveQNaD9ANgDA6dfbgGN4DhTYt5KMz62Nc1Zk4fePcBkmw2MkuF5eGQQoGrR2Q5XTk",
  "key23": "5Bd27MZr8YSbSxN5bHQPtZb1jgr1xQocvxy3mZXvW5CCqEudV52uTCyaYGz8sGgnFWqiFLtKMwNkzwzRePRGTSbZ",
  "key24": "5eKeDrShw5vBhFNz69Aw3ykam4341HDxPwdT6tbVNrvV12okCZ6iW8BCfb4fMiMK3tBSpbugpyN8pPt7dMWEE9Yn",
  "key25": "2Hk9qrwPrygdarCqNEiKwV69g3spbS9wMWwUfrfWTokqmZZRK7ZLhGtfk2BPduFXB8k9s1qJSHPFEYgwuNL3z6yN",
  "key26": "oJqraPhLaQ4JbjpLVMAWWbPsKd2EqAeKG11swG2B7WmG8zmcy3S7amnx8DzupHw99c8o1mnJ5TebZiNrYZQr8aM",
  "key27": "2SHJLbg5Fo84aj7pdHVRGbSkME8cH9vL5UUjEYMcRNZPEUbA8DXfHciFLD1ybSpgQus3JRLBt4mb7y4wGk3BCv5r",
  "key28": "5GKqwXvcSggjDVrX9WaTpaNucvd6Gat8AG6gRAbLK4RpZBZV1oNUwkG2PqVeiyBFpWoDE2h3H9JyJ2QshLyVw2fy",
  "key29": "4V79wtj6r7ywoc5DrkTZTPJzq5w77fywt15obu1xDuf28MKC8zoUXcocUonyawGojN1nUU6Qi1KcXq3hnpbKTLGV",
  "key30": "4DgCNNz5dxG1vV7dYxeoQGyQmFU6vjG88RW4mdNJpNwFLjpFseX7mEL3jFcX65VPPdELQRiUH9oS6C9M1FntyNNv",
  "key31": "fuvnscEnvAkQgeUc6WduUn6JRShknxPSCgcmYJx9LedQjJvQq5GKKY5hcjCGFFgMg2mACPciV9VskzD7mYbmj4P",
  "key32": "3Qw11zoafNTKBczDdn267jQhYnNABX6aqu8MDtPnkAJbmX3ywEsyPuizT6zNGUkrxDcmS8RErXome1YTqoNPwAEC",
  "key33": "gcHUSj4W1gaF58QW7kN9paQbmXvrcSSdRngds3Yw83CrfCHym8Gs5JP2zXcJqxLjYE4vfRXCsHqkSX49VAeyVmy",
  "key34": "8w6NzTZzv9AUATjwz6xVTUx8r2u2ajXA6dZogUESAhfrxY7YFbieU4vHLyyqwMryj7D2peMPaWi52MwTsf3DWzR",
  "key35": "uDG7PVjhoJzpsH5pP9bq2QZi2V5EJq1iNqBCvKQwZ8ZgF4K4mTAtx9ReWxkzCvppRPtvNZura51PYyPA25NvQHc",
  "key36": "xRVF776vHahKHrDiKDP6dE3sn4QQa6jcHAHKtRiQsomKKyFbg2HAqVyNoEyouUEo8uJzNLYgbPYAuEx7sDS662z",
  "key37": "2kU6UvVqA98ZaDYCj5VgoRN87jJLz9XXhwdhWSntmc3Dr8X1LGSm1uPBVXuATPeKKyg48q31HxazFtx625wYrVZA",
  "key38": "5HWyRRidi7VKroJPfrR7gDBNX6xK1WoBgraXGoBY67CrBbnR9L6d2dgpBTri8cHACHad3AExobP2aQSdNL4juDcd",
  "key39": "42TCyYXumaQRMDu3khXJaZq7kka7ew25swmLhkehwVXbyEiCmScpCCNGpMmTFryDSrQ6TWyyp5Su9Y9eWWE9AZX5",
  "key40": "2jXeqi821FZ2p3gs4P6cPYYNrgTx4ovTCPkBcWGDK1JxSoKiBg7buGmiYQMTf84jMZXRFRmZ5QaxSvXWyThQWjzo",
  "key41": "3zdubhYyNr1ysksHb9TQGXmx13pe2KKtqkjktnZGqoESDxbLyazWyWWxqjtPUihN2RwwaHFUG11Ns3hp5e7TVDqG",
  "key42": "528yUyYsyTXKnN9vGG5JkbBPShf5AiocTcbaVYYEaUAnoMNmbHY3ij4aC412QgjLopuBb5E57TTewJkfsZVw7P65",
  "key43": "4U8GXDU3ZixsCihNX1QdDGcNr4pUeMqjLqdZCmTs9ceUibMAjCqJ3hv2vuDEixM2J72nHSf3UoRdm5wwMCE6TNFh",
  "key44": "3bahUgTeNpPvhbgqRfUGjVQoF4B1REoumnet39jQQd2J7MZze6iNMdmxMpWLrkP8EWXjegfH8SzL55pNcXhDwrQ2",
  "key45": "2eRBJChG8CNn9YZVeL3X1mhF1MTYR47dVVNCc81HrkYsgMNQTyQzoTsymwRtTMeBzuqVT1udyWnjMU8FMkqSCFT",
  "key46": "5bvcREbHTuwVdAnPM34pejnvLEXXNt6FeqqqXFKWgFcpCH8h2iMJGvgmxbkAPB5uNMbQkJEiVLyJ2crpiLwvhKyS",
  "key47": "3BPTSYZ2b41Bd32ReihQMqVSqMG79ypWyoMjMXCwAHEetHK5PX8dbUtBrH2BcHh3bVnTAF35Q7buGH8QZkm7bhMr"
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
