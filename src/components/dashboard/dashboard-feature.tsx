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
    "5MqDFbE2zTzFCCB1duut41LRoD2z77vkykKAx29f8w8w1XEEKMjWpAytgbTUK4eJnoetUgcgHgBYBFSbgptTjYpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PLFWEFNYxBK755fKCn2EyYrJ3BqLk7wRnbwkGbhxEJNXQGVQee7GwXdHd41nX52Zhu3frnnmTMDge5QsBT7KfQG",
  "key1": "thkFZ52YFxyaESfeJcBTsVcxyteNTq5uyZ8pqtqKVu943WAMDWJ21VM4jyRnKDsdxHAzsUGsmwt5pxuHfoqKhZc",
  "key2": "4p8QexSMcedBBvaCaB8MD9N1jWseDtrYVwvy18gzNVkK9SoveU5KM3s5BL7EUBW2mJzg9uxGL4HcSamfEdzc42Yx",
  "key3": "5ssgBP4hCi4SgxqwQqEZwWigeuVYh5zy2CmmZbVDAkfc2Y9fP4skuFpoy7cggDD2z877zUU3MGTuYgXHJ39HcaK1",
  "key4": "2ZZvQo5vcjhzdnQKZLfM3dh1UZb2R1tLtMApCnwb2abyaNFTqyzZGxRgmkoMcTN64hnDCtZqcy9YJTuMvi5frZYF",
  "key5": "3uvw736Lih214AaEHoVeSFVtna5QvJfedwYuyp9y7xgUvvEEdes5aBCKbdU3ybEaCmuHyYvK1tVCcq3sLDCgoJeT",
  "key6": "4MgzJstHGvQSJSXx9B8kxqKVKkXqnWzQ2E9kwYSLcRxAXCzFpySXRrUVmCD29WZbVy3NaD3FXpRf1wKaeTio36kf",
  "key7": "4v3o2D233qccCmqmQ3pytRH6pH73yvKt1e7NFHgqaDz2F3S9oDaBHAV5TndDnra7ETi6rqgmLEguarG6h14H6SFU",
  "key8": "2nsTbFawjZp6WutpRVoQYTYR31yH3onR3CFxH7Js5JheD4JXrJLS2FeHScns3VRWHrZ6z4aARGhyBrbXzbr2Pj6Z",
  "key9": "SDHHcg7bhRenhqVpP7j3mDBU4TeF5GAd7nxU6devSWdSjPmEi4t6adWiN62ogCukT138vMDTeBz9ZiC5J7ZYcGP",
  "key10": "3s9EJ6yjA2wTyTykDVGKW3ceoHRv7UabBBz4xfjBmWzUXdp4wdzRFdDbERTgzdvZ5CBn42vTacqhWEhaxtLymbGW",
  "key11": "2HxhJCS819oPSZVUKcAr4hy4D57h7jkAaYta5kGFZeQc3jdKdQPFycpduseXhQS6zTw8Y5Dyja1XQkvzm8GMRSq9",
  "key12": "4qh9LYapec9qJevFrmwDiS7PBCEvk7bfCS4h4GqxeTCQrUxHhN1ZkNi8QxRdDsfV7zAh5b49uXzxAXftVooz73Xx",
  "key13": "4ZWM8WXz4DrACvZzphbWaTQxs6uHbizh4iPFo8gdi9PW7anPmY6MGuGuthKSh1Su3vrt1DBbKZLBQTduVGJEAU8Q",
  "key14": "sg44A2evJKJFT3EXnyF3L1e52zrJBGFjgAZMfhmPhHndh7kjb8iPj77FzyAsKmqsKUoGEgMrgQp7AShLAw846ox",
  "key15": "2GMRbBG9QT97tCXhdnZuU7a81oMJz9Sx2v6Y2H6A74ChdTCX8pF43y5ykqAt23ka9ozhs1K5j5dqa8SR2JCRMQyi",
  "key16": "3QjjFuFEnCmNMvEk1rthhtpjKcmth4JCoqWzzx1P4xS7uDoRAowDRxK8497sMaWSNngxzMosm5QzaeFGMRrw1Fiu",
  "key17": "3GhnxMr7fHQb95STJ7H3d6k6N96vvZx5BAzAZpCBLwernu46yE9LJKFd9gUMzK7QuJpHqcuR4QMdSu9F3eefgAzv",
  "key18": "4tteBpBjTTZwP7NG8PNiAvC3yKiJadigC4to4HcU2TBSpA77VH73XiyAH1EYKoBEvnLkdUtdtHDvfpKoJmxPX4wj",
  "key19": "3dNe32QhmoKT8TkSfH3mZGjnnY8RX9P2hJdWMqagBqdL8Ce9npaQ3mcoR6jP93Q3Y7hPYEWM7itMqFNoBG4Fb2yJ",
  "key20": "H3ZUtpVVVnp3iznyHZZdq2f4vgrqsW4jUxPFZ9RhX4MPq4XmXgnS4UUkQtQBToFBA3JVtD3Hm16sbyXy5yftVBh",
  "key21": "3Cf5mxciYyQQ6XJM2faCb7D8tYbdw9BYgHK1JuZCwHwz4kSZeY4jZzknuLqBqqaxTzrszvZMZz2PiPujHqNgeXrm",
  "key22": "2rpNZ3HAonMQz1GtYMuojyjFfc4V3m14YQ7FFjc6FK6imRtPwh7cq6MHboEP3GMcrgwXCDJRsFpQ4pYWH54eY5BF",
  "key23": "5LnPh2VZockbpUhXxMB5PfaujSSTrbVWyMhgpgyiuAjZNVPSuMotKWSFaJD9bQGxpB1y65mbXGq7LDGPvNiHgb92",
  "key24": "5kq7TNSNVVApg8qfZToasUMsVM45CVgtmL5SY3LqfjsjTa5XYRFMoFKxpQJ5gJpioqxhyhkUQVzJewNumYv9WEMr",
  "key25": "5g6dKnU88QCrjG1xkYsnTYGXNAA4wpQGP3XfaQPQcdCyr2rjBFWZ7RXtot5wAvfCZcukNyDaennwKzjo6PfDixSM",
  "key26": "47yBowsxVySSQFH3HzR6yhzTWSmw7N6pxih7xBk5YfxYJCey68NNADHMmBZTWyXYBWpMkmaYkLbnboBTDanXofwR",
  "key27": "2ESpW1saLLzJ5pJAqigByAvVfKc3R49AXMCGcD392pr9bruc1WufpuaW5cPpiGAhniKc9GMnSf4NZXf68b3u6JUt",
  "key28": "2vMLdgWBsDKqrJV4XnVf13VhjJtjhCNVLuDNekjaVwfDr2iHPnedX6pTMbNegeawqzq3UYP1LB9XUKopeNifEzKn",
  "key29": "33Jbc5iA9ZPKhp6DBHJmmrgNakMkVBEZoSbDhuGGsNKcSe3GhHTmSxvr4X4SiNZjPGLN65fsj7ortUjf7te6e3Qf",
  "key30": "54tjarrTbXXSuVmWQWkgZAWfhAao14HYrYvojEjDj31eUy878bBMx8nTJfYc2p1e66k8TQEsbRQ2TknyPtFX3ZtU",
  "key31": "46TKzPjpY2s2ENCGnD31j1DC1tNEDkY9aFHtL22qFrXvPMZAkw4urReNnV4WdnWCPLoNyLuNGfgSyozfkQBXcqMQ",
  "key32": "2WENq26FZ4JKbEExQ5sQHXMAcDK4smoKb15ZuJB3pVrSVgnmu4nLM9SmF9TQx6osMrifRCmzockuVKeRd7hQ3BEa",
  "key33": "5u8xbTrVfaoMuvGgLbruGReE6NiPbhdczXeBpNQpideQ1T824By3ZHJTGNH7ZumQ9T2nuQ9u7nnmknSWnkFjUnJM",
  "key34": "5CsgsrvBgGvpFRsoYecgcA2cmsQ8qfE6zxFWrGxrXG571xN8SexGdUWaq3jJ378fHXKsmfnHpfyygKgAx779uJos",
  "key35": "2RCBNZnA31r9NQfLGdiTAS5UijpjFzHxkJszCkpwe5Cw3XVg9BnzZyZfHfr6jQEHYk2wmdkbvtKF9poLTwUNhqih",
  "key36": "4oiCjemMuSH6XyWcBUjesaeiqhnwaJFYSnLU9Q1HoumTcZriebGTiKB9F5CPftoJada8qzcKuWqqWVyt3qdMGNEJ",
  "key37": "2T2y2eyCtn3zNkkAc7T2G6YruYLUcmmtsHHWvP3VpRjMTSdYh8njM8M111rBeTytJUT9ZbNhQeqaxgxMs4bZf2ro",
  "key38": "31JyEcJi45evAA7ZtztPhKUe2HM2j2f3kcghTo3Vxup5kQ7EQC4tVTmmpWPUSMWXxyNujryYXL2Rwj38i5yZkNFk",
  "key39": "5eFygQNoBPs3eWrP7mE2KgPXzfTrUpuFLELaFGZyT99SXjtUAvCoE2ns8yxmJRXcELVwzcikFpuF7FPEbybzqbrd",
  "key40": "4RhKwE5C1gUZFJdfVNF6AgP7QV8fJ3jV3vvJTnCuMbWh1RsJfqsZpj9K8JbWaEjkm1TCjZws3wKFsx2iPHHdxBJt",
  "key41": "2EhzC9BtLSCsVauFfUugrFDuxAbtqz7s5KEmGRMLNxWssZU1qkrpGfcmeFUou7Kdx8tr7toBhS7qAQ7Th72yu57N",
  "key42": "61fYEKmLmba6vTdYCJWtG29CMkBVnZtUV2qUnnmxpbwQ9rrzMnFYUBDCojXpw6eFafu1WDeCapZymBX3oFYHu4rm"
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
