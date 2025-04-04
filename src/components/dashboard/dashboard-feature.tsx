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
    "678en5uvKdfywgu4ukiq8Xu5iKKty7fokp4RobJ4tLwT7f56QfCS6gbntEWA1TyBTziEpistTrrxG5vaPfCpqnjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msQgwymLDjxnaBuus7dZDRiPykGCaBWyqW2GHioWbh6waiGcez5Q3yUvns2ALyoAgAt1sx4pVnbf5hJJjhb81HN",
  "key1": "2k7DHMTLs2DbpzvAiGUQcfP5hTjqZ8YnSr5C1TSxm8Fs24sPyXD1k6fHuBkFuAzUKaY92xyJmStaqYpPd2VBNsYe",
  "key2": "22i7qMQMpi2ujbm6mBh8u7hE7cNnVemVfCub9x2AK5XNxfAWxZzGWYgr4RQtCyTqxFQWL7gT8hQB9wB1ecKBsnT6",
  "key3": "2bymxcTGwjJR2eQqtN5jqL8M4x28aDTyb7aYkDWMtv7HLaMt9GMrNhJsPE65NqdMdFbgLypWTrDVmJ528XWms1Z5",
  "key4": "sDsewekUZhYVKjuBwxUSphm7HduohNwd6Cthf4nfjV4zgGNxuHaiS5RUMJ6iaqZY46xKW2DJ8pwdiVqtbF1xKka",
  "key5": "4budkMdQToTkc4Ngo1gBo87h8voypVfJtFmxV6rXaAoA2FiyhiUq1ZP4XKb4QosUeMkyme6DmD8zweo2QhWNBCNq",
  "key6": "4nrL5EU9PYkYKfS6NmL6yqFBfG7m2C2uu7X8XQcikUzYEUx99sYFi358aLB59CHMAYyoU73tpY3anvq91SneSF6q",
  "key7": "2KUar4Tuuc9FcGCMn4Mwm2rwQNrnaV1Ybp87FCg3RVtmG2NpmtJ6HcgDAp7D6AudrouK11TddcqQPsagXG4zeN1f",
  "key8": "34GVYNhKsMKbtpaetdqjVuHd8uvacfnrm8KsQpv3ALDcqfYxxLHncVS78W3mHVtHvJikjyqtiipNVZzVoUnym7zm",
  "key9": "5uc9ePMzfRPkbE8Hty3ukqXWnEJbT4RTujK8zznXt8erJGDmkFs34bJ5hzbG5sDsXqPmqf9jSAxkmXn5zpZLjCUi",
  "key10": "34MTAPr2t6vPvk6motsiWvvqvxS3uPGT8fKv8gTr34SzfE8hkS6nSGwNwVPciL2WGJN8bCtLedgAxyhWKP1w4oUS",
  "key11": "4ZejXa9Mirt6ar2y9Qv1wYYf9DdrynXmr6VoKT4AC9FWLpLftRWUXKa5W5Tu4RcMXpoomKZpzSkH7nyWkksRKekm",
  "key12": "64CgBpiRYisbNZYSZAPghL6sbZSuwr8z26Ak8WBnWw9Xeih5QAwp45dTKSPQPDwxQPSPo3AgoKrwsWCCXnhJP6b5",
  "key13": "4AgfY2wzTrGesSqm7Q5asFnMzhwiSRMH3nhJQozgejCrJoEUztDvJDxdF9ct5vPaw8q8TNfW1MUputrD8tWxXsdQ",
  "key14": "2TVebFFKiTFvqBYWG4yXW5GjxwH9oNkmRCiXiVk6kcj6EwkBAwzXYhmxD2paovQv3fWsuvY3oMkVuApMDXERSkXr",
  "key15": "2GA4b44qL9heftHFBR34bg5McuJ2mtqraGuc2WgT6uCq1HqjANwa1k9PKXWFU34diw6AQb4Lgy6ZVHjNQ2EcPG3U",
  "key16": "2LmxGqwodE4EamwKc4GnXQLQ4z9cwBR7imh3bcjDqcsUP279BL4ZWZhy7rFavM2GvySR64nC6vvz4LPgPw3aUpmK",
  "key17": "4NcgJYqLVDparcqK8ELJUsiuvn6cxm8faVjRG52istaMbwbG1iZsfFypwuPh6hWTTiqMP2YJ3qwmeknxGZtjr5f6",
  "key18": "2f7e65wMoFkEPHcADDEbSgMXKyk7TY74yi1XMyGEKjmWcmvKeJEsYxohNJqmLYDMQJq49KuAPU5jKUMB2uP8R43p",
  "key19": "2PyoqKygkshkt3HSb6MTBXxJzLz7xpePq4Bo9UaVoJsn2EthTVtraJKGApDs2mNda9WKgx6ebZKviWyJ95DEjAVX",
  "key20": "4hgYZZekgGLWN9iqCGhNKwFKm7q72wRZ3WX3kRmsXLgXf99cvDSGnDpGCadVwieserL28hVtCVZaFZ47g1D7uF2J",
  "key21": "51F9iZ7H1dC3juRyo8edsLtmdSxDe5nRijZJHn8fAFogifdpt8UNYn2L4hAnYU3p5hS7UTbY8TJBrTReRiaDexEr",
  "key22": "2UvTGMPEZRbcNdpu2vjtQxSVCTqbj4tWkB8o4jiZQ6wiHeAoA5j3SqNwhcqXxYQfNfTEGsgYgRpAr4CZKGUXrQdD",
  "key23": "BRQmMbQe836azmGLAHfrzivE4coyJkCj7UaXv1JXPmugB7LFoGkyy4GBHXrbkDNkvSw9HA4E6Hb9a4PzvYvAT1S",
  "key24": "4gnPhjn71gf1xMNvY3WH69v6XCxpBF1c3Z1pa9TbBwea1H3tvQrq9Hu5VHWew92HgWmgkMSc9MLhyKHU7CViim6R",
  "key25": "4rNXnENuDnLN4LLQfYbs7tZkMe13cySo1fKrP9pYpJdhkndfM4zCpAjrVG4rp4pQ16CBg7PoCN96N4mJ1RTnSGLn",
  "key26": "QC1dtajAW1yBHNE4syMTbeSdSARSmTeTLUDCa2j5g2PsxrGMt8mfmVTKUDwd212fMpuXxZaFzbAA2Jmxtdxedk1",
  "key27": "2qPX423zb6U7FSM7owEmhuLTK79WDdSLHNo6Q7wZt74dmDSqtPGJDrwsZsNR57BmVEb2ABz2uUNFi6fbC5o6SJtr",
  "key28": "5YX3dVSTk1mScThp5qketaeKGYJV5r733aKv2jC3mvPuPF8JG8PyZn2BQq2GDLVoYQyBtWBB55WbKoGx3yuZcNb",
  "key29": "5nb7ayMxQz7ce25e2g4MWYDQLoWojcGKKFaF2nesg2U911o8N4y3e3D9E9uRMS2EWbofUf3ZGcLdfZ7hSifQB85E",
  "key30": "PT428xPvY5gNf6Qi6kF5RK9YpY4A1x2H1UL1Bxs66yE4CTiNe4kfZkTDB7SuSVe6d9bkwPzU1gSNJXvR7DwDwtR",
  "key31": "5B4H7Vnb4fkq97MErEW4WZYduyNwoJxahJJasvZqkakEzvyyLAxorZLixGhxUaSkfbVBWM4yiuqsEyZc33SeJZmh",
  "key32": "pDYCPSpSbaJLYz5YRA5jrh9fr9kYt71UqKe4HrNaV8XgMHGVaRtBF8PDoFHQpqPYvLjh9ZehCsMjQ6i7Wqhc7dq",
  "key33": "3rzQN4c9udrxvq5T9ej6AUKfqpA2nXBehify1g8GjMhmKSpt8W9USPwSeKUcHv2RK3xyNucQFkH7qGe1D27pV54U",
  "key34": "4BwXnyiPBtGFaCLqmpZFYPSpeQKqohsWThsL216zAp88EN444d6YvQg5vk4EC6TWtohhhvPTUVSywfYq26UUvySm",
  "key35": "2aq1qJzW3wsrbYMiKbejEAizVduMroVntaVLMez3piZfiL2ZX4Qiex5SpS1v1EtiauwzU1r6broczTTJ7Lns6GzZ",
  "key36": "3jG2cX7yijGYpvVRdu3vGosMh6M9mpUeXEYpZ6YjDXHSDskMSj7EfwdNQsCZKiq3H5R9MvszhjHrEXTK2WsSUitp",
  "key37": "2J35XLbCtXxof2xk4zBxbNfi7BH8bJEgyk5qdCKv2JWpiRCbta9XveeuAXd4Eq6d7hr6ZYrk2vbahPziTArfqKp6",
  "key38": "2buZnJ9oRsFJfLtwtsMevUHJbcnofqSYdnZiyriYXriqmHmYeLcS7BWAHsBmjdxBUN573tcLQnHm4X8xGDhPCGju",
  "key39": "25u3PyZjTJtb6xooxc9HPGi1iijHCLkMCxMBXAvyeo7UUYr27iLnBWpGHFUp1yGtxwjx54d6gTgsExLkYLsxDUvn",
  "key40": "4N3gk6VkCvMP9iRzVMLE82PEqUpNiT8HmQxmb5YE9FXWMsLRvRjhndgFWoiym9cXd1sfHxM7sfZzdcGY4yyeaUXv",
  "key41": "3VRYU2GsFZi8j1Uk56g8X5Yz6yNNy7v2UvbbcTfGVQHUA9TouBSngEV3qRYsvMn1kyNbxE9X75yzSWfCv5fhqN2m",
  "key42": "2FCfCCXKu7jVdFhFDQmfmZQ5vpGhUefybHp6sxPsK2JAsKM8jVxn8pvf8xrD86JWZqGoLqe8FHNTZ8HrPJg87NDA",
  "key43": "2wG2AGFufVEdv8rTfSAEoD7DjcXtsrSiDqK1xgMyYWoPGTdhrUPRcaW36Zv7aiwUPq2Zw8nXbcsDF4J1DzSzZHYW",
  "key44": "41Z6vDpkCNAZxqSncTWjgLRn3csyRarTbwt1rHxJuDbZdNbZuYtHkxYwetGKWWGSTYS4dStEdPxHkFQdm4tL8Spe"
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
