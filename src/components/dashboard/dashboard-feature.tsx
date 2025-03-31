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
    "557YKCap5JgqutrYb5zEv4A787RKnD2i5ot4FMCdmbzfiYhfZE2nnxa55hK83FJnpZAV33mqzMtZcEraYLNraR92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jFYjD8e1nSyxaeBEo9dW2JkEAY7j8Dm7wX8CndYoPQ9UTqRZgFCzMAM6GwKDqWYfRLBs2FiThWcJath4xmyYziF",
  "key1": "5BeM4VcJJXVbeXN5UDgMjtnVcqRFAyzDeQ7EtDFYQyPXq1cWoz1bzhjXELKVhSfuLcxFMk4wQx6nBWX4dvbmEQLm",
  "key2": "5KTZQyzkbFkDz5d2xMUR4iaaDhB7sbTAVYTBbHG5k8s1Hmzd5YQFiUiK153F1RpWkGYkAceZyuP795QGAWaom7ZB",
  "key3": "49hKKeWv3tUxVSr9dEDCeMfEvoEpVxDwEkLYsfNtxZzcxoaZ81LbqXKnSMzXVUu5GCpzKPxsG42eNLbNQXLqKQ7E",
  "key4": "4o6kzjBAEUvP66jyJbs3KLcMhfv7nH2y3ZAhnbHdw3Y3Sd1aHsRtU3vzWCWvmB3pkdZ4epUJpRpXVS4WggzvaGp",
  "key5": "pHdxn12XsNc2iX2ojbooN5kREQRsjkpGvH3MowDzMV6LkAMYXrsqdP2ip8YEkLBR6KefbmNqS5ukeqJG8yKoG4L",
  "key6": "xjYBMZJZV3jhf94NoDu1yvoHidZQfQb1Ly3XAe4AHE59tjLQTtTes9Ut5f4qYzHRxvFaNkh9UBU23uGU2wMdg95",
  "key7": "zxeaTPXqqmBMxkSsZLrxfhemh3m6tEwEZLQpBh4ex1fhbGFh5detcdPsTcU8yPXVrNq1Z6umeMokXVGdaezsGcp",
  "key8": "53mziz29YxYR3HunwNfGrkXqEnnRqV36gKX4R7t4Lfpa9ohA1LvpcnuVM2JLR8UjgdSPcPgQgkPAextRUHosM5Gb",
  "key9": "4tVn2j2seVj6wtGJYTsh8MfYzHgAHx8MktYgKYKindnorGo6Mudy8Ejqk2aAjdDMQRsmb95eyHX95F1EKLbb82A1",
  "key10": "2CSxJ97BmPQmE97aXhcAfCLSBybzzEsZYNKaDk3VLaqnRmodVyyeR9zzu7LhH5uWY7dXKBhTE5PhYy62nBZenSKZ",
  "key11": "4XdhMyG9XFoEXKJ5k4JaNPAswHg81DKY6ytNuZNo5vkokR78T19UAUiQJ2HFLCfKeY3QW1mQphXhUfZcUdAj6PCy",
  "key12": "a2huqKrBQvCLrozMsCKv8YkaN2tye1QmkUFndprzMC4MeX3ZMwYJeCPLcVacDuUGH5FKxmKMVxVgVuu7DYGeGjx",
  "key13": "3XeTTat4D8rzV8YZRxGkzEGYk9uH1mm4786rFp91ofb6j5xZhguK3GmEVAvhJs4XVhYqvgJLpvrr3F55buNusdmh",
  "key14": "63poLKJa8TGSATndPQQkVB6jVEd17HZkvPu3yv1wyhxVtEBnj6pT3kPFXrpVCNfMnWxa78Gr5nbkW119LWmL6HD1",
  "key15": "4WwcLQL8sZER6YpV88Ejh69wUwD47eLYy2XsEww6r8uTkT4ZKkVTN5PDJ2yYxigLqTTvULQeEZuGFUjyc8XLC9i3",
  "key16": "4jXCxpWnHncCnJDcqdu3mv9T3wyPCuLmGWWUtiHT29sywmG6H7148W7GV8HsuTyiUGiC5m7CCTTqMHYCMRBntu1F",
  "key17": "5sKSnECUnRHYcFvC5xpJLYNDcBAEK68hGYyeRSgzBKAuj9hkHnuEmhnG1bgZ5CYUArVBFmnXtapjJn1ECrLwvcJS",
  "key18": "3h5TmAK8SaPzDu3feSffkWCQeAKsoyPFd5BT3zmdQDy3fYjwn8nKgjnwnRXZegBJhTB5Wx5eLFPC3t4ku3g6a5in",
  "key19": "51WM2XZePjsErasjEEHk3VGHPb4AWDxdGNrtit4DiMjuXfiJQ4GjrcJ6CYV3JUbMMdWHZLDhpWtNsDnUyUMy4uRC",
  "key20": "5ZUht78d5yf8eyg8j1qPcY6mm6bShFnQVoGyv25LJKqHhgHFNiqregSQTFGvmMYWkM8SBqBMpJq7PhQMzCi3kZhN",
  "key21": "4j2gotaGk2Y7KGHYueHRozQq7X9UrWvo7CNwV8oA8d3gAYMEkojxcMD7vk2UnT1bmud9h3vhioKt2v1M6UvpD1To",
  "key22": "2YPhxNS4kyin3kK3EtZAgxa1eD4W7BybohN4RGb5wg9c1nGQkpGJTCPhqoosWuxLtfPySYmrdo4VHXLjmLniqNe5",
  "key23": "3HbBNjXjE47RUT9R9e8zG3fmsN6X6pK5pxWXpAvhEdN59bbr17AoHbZ2H8yaQ7o8oTyFra5gdNjxcUeGdhqape6s",
  "key24": "5WgoGuAG7nuG5FBB82FZoRvCf7VeidAeAxyLLd7tVpnwiby1EwQW5BoQvccbMQ4QcF9DiT986g5GczjFv6M5uN6S",
  "key25": "5TjS5aRRW3uhfFHMwswQiPqoYdu3XZRfE3sMZ6cJoy76cqgUHMWZNQKE1tiLhRGT7EHC3eVhF3adk55C2Aq7JSLa",
  "key26": "4tRPyLQiPFYLZ5o7BH1wAnPRCYoV2w5ABAk35y5MpyGi5ACE29BjA9sQnpdTmyjqxcZDg9hCr9Bo3th6t6fKgzDX",
  "key27": "5357iHx62LgARo1VekeZdYxZiMPb1zaTYkEcTR7p7L6JBQeg1nVUoyeY1WUwQrZiX3Ns2X8cdUHBjq7cxNsjEP53",
  "key28": "5bmwsouSauQJE5RG8gF1RCxgRUupQnTpDmxB8MtQgyEu9DsSqdQqDKeiiBmE5SPNZhDZzMvLB2AHLegZwCrLJeGB",
  "key29": "5GB5xkkuRUAG5x42hqUzhmAVuY9dHb1cssJd7CEo3KxhhEddUaotRfxVLEQXYkaEKVbP7CsiUzoxvB36i3Vcqbqb",
  "key30": "2VfA1webBc71Pcn9LJurMoZAs2r4hKA4tXxDPETE627AJNwTvboghVURwVU37H98tktzjcsQLEG6aTxzoAhCryxD",
  "key31": "5dtyjYptWkeFQBh8VoVQWtKGL5r84oJdHtkmzgLTYCZCMnJr78TWnBFdEAtrNFpJMFUFNGp8AxHFVXZoAPCxyW6J",
  "key32": "2AFLEvsuirPXzG3K2d1gX2swVpdK6wybiC2uTvn34xEdPwnjPpUgKpavDS2gNT1B3UrQi1tk7H4TRaYxVBsNVu8j"
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
