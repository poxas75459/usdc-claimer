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
    "2FiysvYecueQBvDL78vHiZA67s9Jd9hZAmfM7pedjDZTFUFERuWK7zS3E6PofJq4ANw79mcpgXfwMCaFAuBTR8BZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9A3Mj9eitjTfu9C6qCyGj4vAoSBATQcm1CokV3xWTp4szDqNnjFdPxnFzk19esQDkTyqDFsuG3c6HE7ygWGcyez",
  "key1": "7svhfySHtR5vQY927dtyq59MCadtgjAFGzVmQjjBWzkqY38VSkwsW4QXdMoN3QB8e4VPMTrov9uVNAm4FQqUJ5v",
  "key2": "5X279chiX82MLFXKPmsNrPG2ao5NuewuAZif2M9MJPVtNUucyuREZc8V3t26wrpPaNwAFiUExrJxavGTNrnWiisf",
  "key3": "23gaU7p78vfugzBu6DuoJZ8SbGsya6sVYYVvsQAfoRKbCGUZgqaigR5DwoS6hg8JK5fat8rz4ZvLrhdCE8oSPjfq",
  "key4": "288ciuA8GergwYTQ38DAeD1RzJ2Zg34M5nJYFw324iJXrFeoaLUwkA3usTis8HbGEtg3L5xy9TM471DcpWQcA52u",
  "key5": "2twdfVZkqgT7TLRuuSVLSuA4SheaCdssy5Q61BQ9NpBJPPvvwJFVibX242Zn9wRaeGUJczWAwnnTmbpA4wY4RkzZ",
  "key6": "4qMSUPBMszvQbzpSqFy44nzBm182oxrc8yZgoTSUBT1hapbA97DeT5B1PBUKvqE2tSze5tXLqDgmXNU1oMmSAJnC",
  "key7": "FFNy6Ck162ssS4WGYBojUStD3Gr6HYWZ75WYv3gtSg9jQ5yX99m2U198K7rTrVYobYxR4PoayQiu3Hc43e2ro8M",
  "key8": "2yY1Eg131UEgxaXpx7rM1AGNnLRDpvVJnD3pEpRKzSnCCPiQZyQqaaDjrtsUtaVJVjLdSVHWmALQ7mxTqNenqctY",
  "key9": "3t5geeW2oDfiQoG9xP8fuDGDxjp4SsMgtio1hPyQu4hLxit9y3kQi8f8W8PiyktV62HuHoCor72hYsZF6Jookdp3",
  "key10": "mcT6yejd9vAvkaJPRUKjPed2yr9hrBgD6ZXpSp5TUP2iCKEVCotWxHJNUxeijbJYwzodkWXjDEJDWQVJGc9mrV1",
  "key11": "4itWmiHffr3AnQXyLWWMyARu3mFuaXtfUQadGLCwEo2BBDcDihinPmUBzL6Cw3EV74qkbzUpArPkmgFVTdcUz7TG",
  "key12": "3rEZgdhdghdja5DSzmiFYgDBcrTM2ysnBZtGbu5BvdSLvZuR6zb4jEpPAERfq9pHTyAtv1h68o6xwh76AiuqQsJg",
  "key13": "mBgreFAwsPEiF89ueJ9sPew6XCMBSmTMLs1DXPxDhNzaTEXsXLZBYQuFdbFTQabxynBKVoASoSeD6uHpJwaExMm",
  "key14": "4xDhFQQ5vQEZpoQALWtQ8VELFevzhgeveR4M7aBpt7dDBeyTqwDVvQEB7GCrNCfehuVRonaViUDUCpKmLVKHM5ov",
  "key15": "65mUgzwjc9fXehGGnnACT5bJL3J1jK5XZPzcY3pGKsF93PjnA6MupJfTMWtPcTQyYaPATDBQCQcqzsyi34vXfmGM",
  "key16": "2FAfjs2efEQ4ErbGJYGk8Q39PHkjFoH9Mgmg8jtEcUHZtB7nkB3w3RLJ4EmBA9SwR9JjqrbGuB5e9JBTsnYQUPQZ",
  "key17": "52wBjvVv4sevESSvxq2jvcBPgKvfWzV4KHrt5TxmJ2RCTBDSVmzD9qQmfmGPpGiodgvXKzgp2yGv4K8NSR9nCFbA",
  "key18": "44yFZV3y3Fw2rgLd65tnZ3spvGSwQFENe7bMcHWMbgTkN8Hz9Fkv1nAssZbmMpZxNMJF6R41mEBJ6bjAFCKHSCbu",
  "key19": "3XzhKgcPtSuLUJHFWD3eh4nNC3mL3sLAf3VYdCikZPFtGmYzgLLCGTvmi74XkqfPeuuaSq27ujGuzVTCMdmKRgPQ",
  "key20": "2T6RzDUBwnev8prcWGaBiXeJ62s5QPPUMh4vWWQTiVE7y4xYLpRurMu8ynWiVDXvogm9dPw77qHHN9m4ajtSGss6",
  "key21": "V2UXn47LjrHqxdYNFLY231nbw26428MVYuggd7HZNttptGTuXkQ2haoc6Qxnm3HcdVgG5hswsn8brb2cHv5KmjV",
  "key22": "3bf9vFR8aGAdzPJspVum9c4g2kNNunujHghqhNmXCVgLxpcmLYeruw7ZjXPouZUkCwwSHe14N1hsFpjJggCiuoCt",
  "key23": "5iQzsNLTzNrqQsA6R59ULvhRY84kQesUXvhBvth7PDJF9MQyhP1XBDhYK1ZVtGoYiAPyXUdnGXBiQcTky3MSBc4P",
  "key24": "eybo7YUoq7sK2CigugFs8pU3GT8GdmdhCrtSDKnycCPwygchvLct1jqUWF9ZBgPgDB5MHSbBwBswRTbmaj6Y8Vs",
  "key25": "3nc8f3LPBWhC22QgHqu9zasDK7XgUu5DECyRUmh7DxGW34rty4gTPv5tPe4viN11nitJ1PNpzRbd5ubkqvQK79nB",
  "key26": "3DBEnB19TcSiEDr33UJNimnT3RX9vcj5p8FnHmkKKLCK9E6y9PEVVatt8yr1mDjNzoY5jRy9sw3QonHTG1xRVzxE",
  "key27": "7GLVa9fdTpakhPLfcBF4SpeWXhMnNEbEoonaowMrNS5AvqvgJRMnqJENTFjHnt3zNd5TSxk2HSP2te2yxPof85E"
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
