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
    "MEt8yLdogh5cnXtE8sgRxy7Lb1jWc9589B1VsUSSrgCDTKnfPmsfrgY3MSodLy4mJWgnJEvNjPv7GR1muG7ao1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLkNar2Qd28Bxw1JZaDrccbEh2G1QV1JC18u9GbELcf7ndCyFQsfyDkCAjpjXHS3eaGeA6B1xi6BtsZse6QZutv",
  "key1": "zxp6A6bAzeJLBYFY4rxj51h8xag4oc26NjWvC7qwHEDVNCmwqMQgdrHgbK2KQzktQEBHJ13QzZnFXWW17q77jRw",
  "key2": "471FQcBvpQpLLW4gzEhKwwZcYyEZztrgvzSbcrrZw6VEuHEb6wfZgaZiPK8zUNf6XMoPRxqyas4h547X5Hk4oehp",
  "key3": "2Wu74DfUxbhFnYFDT4RW7ANYCHsuTo7n6okYc99ZVMDk4MfB26C9JRF2dWuK4H9KvAaYTwNZbB1BGN8CqXhczWfx",
  "key4": "2nybHrqkq2rteBGCNxcCBaeu3C2rjHJjETxnvphdkaSnoSFDkt1sLP8RNGhLHYyXrsaJsVmWVMsyr9oS4JJe4vcD",
  "key5": "3MDuieierXZd5rhUVvd9JELVYnQ8cuwh6Q82fw6Wa8cMiR76xVhite8sHkpUJpohiHSgAjeCUj634oxDxSNSPgEx",
  "key6": "HpZxq7x8Mq9FB8EpxjdxPFczvsJs6PtrU6D5fMdxb24MVEpfvtipFknCVAUcX2zbzwZGwVT7TN162w2QdenyKMh",
  "key7": "3s8aa32jwuZLs45dwWuBCfnABRzAe12Q9rdw1AFo6fshr1vcsarU3tubGhERc2ozQB5c6qCYEqHt2gZv779AceHE",
  "key8": "fT6xyosSMzVLnbkgtxpTwgD7bnR3B8zWyCfdNzJPyDbDGWCkFiwFKMftPAuCDeADs524JiDUeAJns8y1gdjJKkA",
  "key9": "4us8VeqfZvXTBq4uDqCdRHYf3BgTtJgX3BEZh4kGeHZZPQSMcrU84ZdBtdUzxPBCGq3czjVFsMj9wagdg2kww1zv",
  "key10": "5MeRzSfrKjCiMUgyR6PLHVUxFBLuARwfHshGHAKwTAa9uUZKSg9BMyYv6U5ptAU1aJVAJo8qyiZcmmBNGURj2nZq",
  "key11": "54QEGPHeYgH9yovpfGq5ZiwxXpGw7sDD5mzAr2WsAyDQRw7SPvf9wjrA68VR8AhohqQf93aWwLEYqkrj76ucEvQF",
  "key12": "3TrZnYPDDHEuMLQozaN8DgQW9WXkGsLQsD3xoeNF5yjWeFtmMUZpj5PMQG4TpisiVVJSoronUtwJKGMgQqH7Vuq5",
  "key13": "sBQZZxK4XWfVVEBBLnGAuS452ov1Ma3CEYB3DPbJfvQFt9Tvbt2vXN2bdhF8n2ygi4uKWMjehbMVMCfHUqvxVgE",
  "key14": "5zBtSZH8LqjvVNdxoTTAvJfgAvFGU4DSk6yJ5PXsp3r9cQZqeMdAJNZCCz5LccfZRjw3sTGhwBqLWzgzVYodpVQB",
  "key15": "4reEJ7tLT9UAdHRaaigGDhFEjt93QUeUAfNjbRugbjT388TC4adUK3CesK464MRLT3JsbhMcrqZVFAqkAB1hfxrT",
  "key16": "3TW9aNP7QC2VGDL6phgrCRNoSAqeutBiH774c1xLiySKuvTkDgaiY3KXAgTDnVZWSrhdgjDcRyCzzRWeuufWtjKU",
  "key17": "5PZeXVrwFzyubjTXdM4c792m2by4jNqMgaWycNkTe13pWWc8cX822estD2Y3AFkSUaHEFSUCzLeBBG2JAYDhqSHK",
  "key18": "27hw5kFDqSkz3fLABEtLVPVWLFbwuwVL4SpMxBorhD56mE6z4hKCqaCwCvYHSiEQSenLJBUeWhP1LsvpUj5TCs7B",
  "key19": "4SUjE3tZHp5XL8oGZ8ho1dnD2ayGCok2VHhxENKEzhjgJHSNr3oepf4ahgPBr8v1RXLSKaMpdtg6DSjExTRVCmkC",
  "key20": "2rb32rNZJxdyWBDGMNSPFtR4fnAPuEhFQjT4x39aNEvCpzia4RgWwY539AHDwMQNFoDqLspdG5LsuD15Q5XBfX64",
  "key21": "4iDJQnpugcEkM2Z8qKTohZS1GkJy3siUEGVmRHB93cb5rzYCG1P2opyapSGx54rbQhQMJVXBG3hKmpAYefaV5YL",
  "key22": "5Xmv7BYqtV8zhLzTQsjFC6UeSHf1oK8pqC4N2gb2LA9FiTrWcBABxqTV6DHg82hTUd8kyqcx9wELuHQY5xVTykov",
  "key23": "4sQSQkhDptQUxrdmRs2BdVt3F3jfWcqAcpB6jgHzFaD8DhmGp9Cfbh171VhvjU6Dd8FRtUv5pVyTEZyU5EMB6zkn",
  "key24": "3HagsXGmF4BqggnkyPBoS4re5ex6KkKbLkyS5x6VkLFBSsbCdMCWbNbNtWNt89V1Zy9684fegDASdu3GCSN4ZrQS",
  "key25": "2vuRrvN6tgDQ7TeVf6umsChkoSbNe2ePinD5HzCnkwGfWoLVVr9KoDpEUA7wor7S1gMVNuYxMPSKUPikKdWtxo6b",
  "key26": "5rdrqL52VsGvpr7HBLiY8TRuLVuxbRh5rQvwNo1P3ynnVMezwetAmrhWWKdqZVx2XDhDePktG9m8bsyvDNse55mD",
  "key27": "2xcNBDkZX5WtaaGLTUbpshX1z3QD5XL5wqZm2PRWt47k3TnUgt7iND68w1sReZ3Hsty9eLGBMKKuvjkcbMyRfXwC",
  "key28": "rAS87oNH8ebbXzbAamU7J9b75rjrGXrQfv4FT9VyTBR2CWyaA6Sy1qBJkeqD7ZY2K2mqzoQcQeCUo6PPEqw8vPC",
  "key29": "2Hh6stcf57moVj5NxatXroKNWx3o8AGL2jbEKgpJyjGNNkg2ikjTxzc3HqMKUefR7MExQ2vvGe49kpus2RYydfDA",
  "key30": "4fP7WAw76SwPwqkAo6TxhJuy3YL9SYYJLAJTXDoq4eT8sdo4Tb3313BsV4VJe1whioPjB8GasS2hU1WNeqGe6HYs",
  "key31": "4i3ihqZoGoxWCQJoSXCtvfssALZpSxFEvXCX6yb3djTsvW4f5W14EEKUJZuBLZXXjNjajpMMgS6nEQBS3Q2R58au",
  "key32": "3oXUviZZQgeoGX5DWCr2jbbiNgseRf1EbCXt6f4jwxi8fBdbvcr9ivMbMMDK8Nmtvn8XtakZAuQAVuDBdcDeiZ1L",
  "key33": "4R6ay2uHEH93GtMhNWyR7EneNnNRe42ErhJhy4SsRYX45F2fEzoxAXT6pUH4bgTNtFHfzqFbbXvnh6HfhQngTXyM",
  "key34": "4owzFozawRCRspuxN1GzavoRAPVsuySNHcwMWeicBc9KzZcGmm35Vc7qxYu1HdVkXELcqpRwyYb7z18B1raLPRnF",
  "key35": "d74Yi9Cf77gcDg4drSjZ8pREoGAhPex7m35KM4YhtkYbKbryFg2HoGf4gh6y7by6Gb6a9wuxpRoXiNCsLLAPyj2",
  "key36": "h3JmgppHAk1YXAaSXWDqAzneFQCQUGAUypoZZ8wg3swNFNGKXCC7eeA7S48bQDsVZCxLMVU479xPPhWiTx83arL"
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
