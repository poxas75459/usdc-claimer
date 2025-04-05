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
    "4oTZvHieg2yeqy88nsjJHfUnW82c7pCQo2HtmJVW8NEVyrgbA8JWfCbqA2GbNrfCLA3FGYtdK6ykLjcLyZBcvysd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xwLEuULBRRse8RXNtuCkn8cihfBxHhDRvo8u31G3s6nQTPkM5gVYRGuHcdfDSTzMpiftQnzKVxWKEqLpmYPA1Hx",
  "key1": "3qFrfq8ekumY7gQWDEx1Sr6pU8wnACjvZ5FHyYTZLWtuuwFHkwoyhMCkkj1wkXpRK83gFN4KiDhxc6fxJ7KutJSD",
  "key2": "4nmzH3y2Nzm3BWt3DGApGrvC7do74Fb6s1Au1QwKbXvU8VDxdkDQTapKCQafoQ3bLPEKCZoK2DgfQ7RpurPo753P",
  "key3": "VWxfJutEUcbWDzbg3kgjx6cj6H3nkXPqAEEwzSRj9iy4kvB4BnexEGtdUa6JsFoQbGEEJgNgzkWq2iDEaAC7UhL",
  "key4": "oRo3smieM3gm8hSWZ4xtbH6xA1nAKAjAE8fetGkXNXC6PvA5Eb75jXzdTFKXHZASinuaaFjKaUFLZE4AZcf3zHq",
  "key5": "5JmFQu9kTVW9xbLaT43tKZuj5gGUQ85qFZY9RxcgVuKhioxq4XCEKS86JMtuVGKdhJaLtddCoVW6rEN8NHdWY3GR",
  "key6": "2P2D2ZNrV4N7DG6B2VpGx5vPHPXwT8YtpHrsTHWY2dN153jhfXABAhNFPGbBhYKpj6hWSqVBmA8CyRCFCw9qidJT",
  "key7": "3AGfmam3hs6JyVfkNdN5iQ4gEpYQHeddwAw6Ja16VK2JmgNBBoh4aQzR8WdWJpccefzBuPPBrvqHWu5cCnNcHYQN",
  "key8": "pc95qLoE98AMKYpnxD7zpbdTMoJUe2om6UmngEQBxkGD2hdTyz36UYfSHfkpADpZxEyXQDWC4VqMQGWn5Jhb4E9",
  "key9": "4WQ3XZyNXi2LrsmXNJ2eHU8L3koRBYFSHybMBn3Aaksa877NAaQZwXczQJEqojYKZd6NSKovWucRMY7hbW9ozyEu",
  "key10": "iwQdMUXTVSSgcsjuKrY2wmPQ37m7cMjodjCwZi2SeMavcWdxUQYBq3pDEAu1WiUZ1YN5TXnNEdC72JoQmmhXGgc",
  "key11": "4UKLpPsPW1b4oxbYGvfjkmu5VemMkpu4HV5t6JFBthvw63K5pm2JLybBZwKhNWkyJHhZkJaopMTu8wEKpiD7sFp7",
  "key12": "4E8tBbypdNg16HVxzcUYUnjeEznSkbX39YM4Uk3qtrJmRuqMtJWH5jpTFt37M5xdgrWwjTL1fbFPdjJtfmEd3EEz",
  "key13": "2zd4pdKqfDaJdp92MBdxZhFgRJJetJ7wyvvMGF4CX3RAseKb9JX2NrhLyamm2XW9Q5yqw2Wa1tTe9Uz24sR9DdUU",
  "key14": "4Hi18xcBbHXpmG34VAeFXEVpNqrvDZ6XXJWqJ6nm8q6AFJ34fYxzeA7PHSC1JyonyELcUmAaNZtcn1ACr4uG7nmE",
  "key15": "2skvusnSPPfrRoFyrLejbq8HKPM4kJnuvcjhNaJHae9o2M4fTVuAWfkMSNrJ77Y7QgCib1XxBJAM7qFx9LLHhF9a",
  "key16": "W7FjYZkkReMmqSDV6ypGgKq4M84cUnSNbNxZy1jhhsn7kRLTn3bVL3hF94NUSXJBRcy4maprYxPPMytBiQn8ZWe",
  "key17": "2CPX5hrBag6pV9uK1yswYfTLJUHVHNEGpyTDVwhZnNCpeLtaeWComBmTendE9qTqHK45V9sChQThAUrQ55HWkgKY",
  "key18": "VdnrQH6PV97t7H1N5B5MmjdNc4ziaXN3sc1591uHA7gifzYzFXgVBwepXHvBHfrZCGJZa8sDP7NK7w3UUTZwTLG",
  "key19": "SfTFeQjz4zGxXZ47PNgJnHj6VXsMxURq9HEr6354huwykhdM5JdCjT5PhxQc94qGSD5BT3p1jgzqkyXKgM8z7fv",
  "key20": "5ARqy5YSSuAZRPXxHbEBMoikUgmSNWkhhFoJWukY9VMRen1TpfGkvpUig6Gcndv3KwN1BVFhSxUXYWGcmg4Q6RtB",
  "key21": "RZ8EEY6eBUmCS9CoiNjVZUJ7m4p2HJgEknmPfjwwAszCJdup96vxmyUCapdZSM68eHZeMY2qJsifnVoeEnPKD3x",
  "key22": "hojrW3N1qdNiRLF5w6jkwSSJw8uKkE5yycnpUcN5zGmUoSi92JPtbS8J6yLHcsuWoocJeNBhT8fXnVqXQdVVffZ",
  "key23": "4gz8cJafip4kcnAHoCQS7gPFhpgZERcpS4rfDz1ms8pjRyVNL7PwuUUTxqE75GUVeoVwgTT1SYLmNgSV3UVZEcDN",
  "key24": "45pVguPThZcT8H6r7Jd39cQNkTrxyjwrjRzEHpZVnDz9PNPA4wz9Z7uQVSJhjLSvouudtRa6o8tVQ1QDCiHUdBF6",
  "key25": "Wc7TxcLMfthTqbTQLnWfnB7xTsQSErmLXwJ1JrwfM6HnKUfx77QJdhTVfdq1GN82B3noxnHKZhLr28qAKacxNih",
  "key26": "2h5ipM8EYkAmVrYZoeZFEJnTn1iLrbzfT9JJGWfAqVQGEM2jz94SFALGyFbhc2az3LtF7AdSBZcyR7jhQ7LCsuij",
  "key27": "qiHWzJ1QvJb2va6PpJP1SsMVC6UTwjHU5eYyJoMwCoUKrHn7s58VLUCPGesuCXVYExqkXzehZ64mG5jfL1FHhec",
  "key28": "3VqoZc1QECpBsYUJwd59V83Ae15GJHF56my8Tr6owTdWHduX9a7WpETqR88kU2dM99eUGFrzQuRfJgdG55tjG1NS",
  "key29": "5cMbzXugvp9Qqf87gXV5p8ZczyAzTMiCaCeAbMXutNfNiPJob4LWrH3BLjomr9pehEtdZnBSdEpv5GewfRv2Mu8r",
  "key30": "2bZ329Fb1hpX6pMHGdHLYrpCoySX5DLsyB7EJSGZfFb6Sf4LzwVAicRvkaqMR1CjusFo5DutuXqThWFYgATpgZn1",
  "key31": "5Df72dpf28mi2EkbTAZxTzV324YDkgdFGemcmA6nvXkJNp4FmKjbwBr9D4rU1w33s4E3WQxPqDjXDBpWULWqDwsY",
  "key32": "2pt7ng3bTjNSFbnqug7sRqL8C3JCuGhkPFGV9rxkMDpcGSM3myeNAnTmG6RRTjHMJ5ZPPZtwcaYhPjnicdyPn8LT",
  "key33": "mY7u9tt8pqTgFbjXQwvTjzvoqe2u7m3T5fgQgo6QUDPKt2QDeuuyj818CSz13oJf5jz3RokXvnQDR5iKtzzcRHs",
  "key34": "54SghHeQNHLixERTD9bgsaAeBy4J7JtYYMk8MHQqfMbcjEsJr8nXQEsKDHPTkUDQsTMgKGAk85SmYYpqCaiaFTBd",
  "key35": "55xcxCRho9K7kvJesohXxRiz6Dwf28oLtxVCpB8Cx8rz94JtJdRUnPjeNrwV14xiC4cNSB8qx1izZxcdS7gEBhxs",
  "key36": "5CoVXT9pcVW8WRPNg9otnuRGVQTyjs5HD1EF48W2M6hg4Z3AbDdu5Bz5XU3A57XPt9h14uESggFJhxBULYG2dXu5",
  "key37": "3ToL4FFJ6KezCFv26ZDdvfyoeEGkE32WKcD8dDDqsNuMd9bX965SCEKt9fiKeE4EdRLF7yM9g8ZMnZBgzAFRSLvi",
  "key38": "3ASrkUhxMG3c2RAWMKTqQ8osDG4dpCqKpoP7eMHQ4L8XfbEBpCAwB2XtumLFSdf1cQHGZqbENmmycAb1ELs7cz2z",
  "key39": "48iHna7jqfaLtXVDuJeVsK5G4vriquvZrM75d7rBZ3Arpujd9h85yYbs5HryDWJ4BoVoR6pcgVQbkmcgUuwuAVsv"
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
