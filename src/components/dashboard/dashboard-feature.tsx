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
    "CsXTpNxUcSfSB2Zfa6AvzDzqWg9EPtXWjUPQfrTmpg2wVR5X9yLM78PcrdSNqztu4HEMbjZzbhuMrhsTMNhnKzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBi9wpBXP17fzLt235nGMs9d3FwLMLAynXzMRWST2fbUjPmgqsRD7saEwEh7RwM92LJfCxGJNTXEdG6zubg9XXc",
  "key1": "4XnJWuLC1P13Tv99RfQ1B22vM7upJgos1uMSc2C6Zj1Tkg87oxvMZNrWfWABBZj6AwLawwZYfcYXdznCiQXULvks",
  "key2": "3J1pQ1LWYQnh7h1u2p92V6Ag6CEfNu14Axf3qmR6YCAPsYADsztxa1PvvBL8YC2NZtcgTJESMLR9Kpot2wzJXZYx",
  "key3": "5BAaL1jC841ehCygKQ5HsPP3fGxQVUebbh9BoCJNZ1EVkJfzYNjPpEVVePXFWycp389tVHWCDUB1upD9sDnmz8HR",
  "key4": "4afGW4YTU1v5RmxD9xcV2c6yf9GmZB2Vf9Q1LdLixqpJ7b3WQ5gNXS5ahNWEtPWshw9Z53pCWiGABvL8s3YE8vEQ",
  "key5": "4mcXueVGKGRmoeKQF4L3DU5TFfSdsnuQeS3szmayYtPTqrLh17P3t9uNZSBmrQN5W8fexk2s5VWdrjwnHPVXNKpm",
  "key6": "3NGpMafxyMhnTmhW99eqK4ruDe5HwCxfk5PibKCkBaAc6obrLSret7cZdJW7b4s2XNz3MiweZ9NXE7RtxgEArNK8",
  "key7": "28HPmYDZsoEEb418FbT2wu4n2vby76VWHzWC8KCLT3NQ9sWg3NieBp89NdjMSRLzyAkinMDQhJGsbTZXGy7uCdso",
  "key8": "2eSqck3rr2s1N9gPLhoMGkBTB1T6wc3n9unUngTKzV9dTEB1NEpXA2tAnxxN4eLDuPSMATUqGPLn3KteiTbpKfda",
  "key9": "563g6xVJZfT8MbcnQb7MbfouwEpERCj8ba1im3u6u9sLXLYjAhFTNJEjrwQrRvgHgJjptYu6vEFC8EtLHqbjgzct",
  "key10": "2iCT1CQeCGNywCPRuNYS94aigbHufF56fbCQmKQbcQt1VfwMmZabYCPWrt4fnMUex3zQtnc52WJbDiByyWrhByk7",
  "key11": "5L4QnksSvhr6LrR6VyUmWpzDSzuuhte99fSmKLyBw7iFtb37y5SuYs3EU9o8fNtPN7zCdcTpQeYvZ9QD9sXvJXsR",
  "key12": "65YipAP8PigfVzmfbJpsPvBX62Bon18cx5J5Pmo3JjLGAwenVR4PWjyQVZmPC3MEnLeZeYexuSaMX26EZX2sMftK",
  "key13": "56js9pcsh5gaj4Lbd8MWwJngRmgAJCHnbxG69LbAV27F1jWNFEWAXXjovkpyAgpYj5xzmWqkEJ9VJ7a261HeyHaV",
  "key14": "4kRA4yQ1HnX4PhdFanWBPssFHd2bzeZCqMuoiHAUWxbFNYjfb6Sy3gqVVgDp6ezLGGNPZ45KMjUtDRGtzJPeJyBp",
  "key15": "4TBaf1fKyo9DgQF3oci4NAFocJZ3jqw1mADsPPEunfU1V2zYXG9dokMGu2eq7A7ThSMPdsbUs6Xy1be3jTcdABcr",
  "key16": "3EkTiT1ZWFJPjZzMTHXc5ZN3UsQ5sXSqgKor9FFLERitS4MApRNBk9ywtamvqL3mG8Q18AWPKdbSHutBnKxuiUru",
  "key17": "3Kw1JJ1QN9o9fjqvC1PdqJeSFCSNY3E4A132JjThVXRTXjpHHktd2scULevrnyGY5DcB5oVJroMT8T2QgW5HkfZ1",
  "key18": "4hgBJEDNPuNAUv8JUo4aXwhYT3d5vNfi7SGHoXLSrFX1Z26gidMHvNgqSh52QhXWkvJNGYhoEpq9HYzUVHjyoCbu",
  "key19": "3J9bkQRhJvA9k3MDE7sC1yJTVqeyGNwhZ6U974jVYziQYwZJkMhzqafYXWmfvEd4XBuQVgNajw9ttPMAZEHeobwD",
  "key20": "4HTrZTmAagdrYfw8ui3D41MgDgqzEjAcjYAY8iH51PZWkoiARuWz7SDHpSpR1cii6sjDFjendqpq4JtwXdL7Esyj",
  "key21": "4acSKXgHtQjTgDBqaombW3qgavQk4VikUKHoCHyio498Ny9McBUxAeKj8RYb8QkTLUkBxwCE66VAPs8NfZgYYZRH",
  "key22": "5LeE8MM1iuuweuqA6BvdMYLEWNYheNn2ZogARjGfXaifyuMaHU9kuowjixdKeeQNCHvhMuVP8XCWgBb7MHKevYo4",
  "key23": "61sZRJe4XkASqF9wJhsNKj4ds1gGKqXg6oUm27p4eXf2yHpHGDErH91QJxxhrgiYd64cekU1o9qYYdC7EU7QazKw",
  "key24": "V87GFjAa9AxyHJjD3HunsNtCuHamdazaENbNCBdb4kd2SY9qncHdsq7GK5yH5PjqWjbVpocponaWWGrysXmPZye",
  "key25": "67LQzF1VUSFx1fcWSzsSMaAWjR2Jr3TqNatcUJbmhdtACyH9pBzLFrGY9PkaDxnnLF1cKFx3aa2N4oodfXuUjAsF",
  "key26": "5MCrRZbtNfKayG8tphgnCoB5J7dh586Bd2gbasfRWZJgCccAiHeDHpQUsNrZCFkszLFRXXFvibdQTgnyNXWKDtZE",
  "key27": "3FgpV5RhUz9dSSaWyQ3o8V4i5ZQNsiYkk6bCqH4k6EH5PxzLJfKMqK3YgVuXL2tm7j7dY1F9CYakppX4J1K7yBXy",
  "key28": "5uy1usrFpG2XGj5dh38bXHKwFxc9JAx5WWBXqR8aE58GV6qfPWo2yBAu4F9iJQsKtJtSa2DVV3DTnbBPczKqw83t",
  "key29": "52tbzcTCRriSeyNmo8q3cihLvzNcX8M7YQwbBRvt2os4HpwaAWmdL4pghNCk9ZTH8Mu1XoaFV6nCMW3X8Ma7jQ7x",
  "key30": "2XrqKqtf7Vae7tqoa3PfbEnBba7mew1q26SV8UQ32TvfuD8CkffsxC7NJ4sQzCvT4LS6WWfsqNfifjSzCwnvSxWA",
  "key31": "47hsahqFGfbpxcRG5KT6JtEf5Sj8CShEchUNnHvSdD9QxAVc5TxABnTez9Rtqj9wkimdrbX3FzzbjKKHC3JAbjzB",
  "key32": "5rVLQs5VKZqGXXjk8WYZdStWARjCMHx9pPcoiZ2B9wGARhD6bPhfVW34kcr5YxNPVywah2qTQBACLpTyQtmvqPwE",
  "key33": "4C649wf41Sib6eYZRhdjoQKGFhkG6E837ZbHoq6Ss1FKyDVgUjhXXTVV2VzakXs6ryBADr1qXvaEXk9BzYJNwJYo",
  "key34": "4ahEFj3kHUzCLHz96KG1kJgtNFL27mPEVZxteuvwXoBEYJCjhCeEbADxpb9EUkWoRvEAfjoFS5bsWn1BGygEhRvF",
  "key35": "5pyTAkHGFQRB6cxWH2ETBxkSb1axZ5zgX725CguJU7qegkhc2YU44wfxUNeEjWi6Gyr7PRfvUGYEmW7Q4vEBwxjR",
  "key36": "5ti2jC6aC4wz9hmNm95i9TRMV1ESgzhR8wS5TDaYVjx4EG5Y1nHNZxYVM7fSbh7teYfFPu2JB9Av2dx4qPphnbWy"
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
