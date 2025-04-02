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
    "3bXdErwK31HayPW3wF4PVuMfbmUG25NBWwVRdyHjm4n4ZjDRbqiRgc83NeXfuGnLmiesiLmHtvNXPFvryAxoveSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qruQUJe3WDEvLXR3iNJmUexWHh59Q4Esr1g8rMvqfgAg8p4oJVrKCaSLPJHpsBwiBNGNXNSaMnfuXAfBuoReJrh",
  "key1": "412WcpEygfSs3872pu2HqGDKXL3tGTdFeuY6xq8WAnxwbUXpGB4daBegaKrQy9iRxp2Qf3fV4h17eiQD8WHaGTwB",
  "key2": "5xbXjwu1uVVhi1wRxCBefeRnqxmYCM9JEMDaMhS7EVhLX3FSq6VxCFrAYvqEXeFbv2K9aVaXMNw1cgJHY7iKkPzc",
  "key3": "57sRUio9qKaYYJo8R5yKUKhfP2JzhK5SvvQGWyWGEQ7E8S7Tb3EpXCLa82MWWvfQn2VRj2eV7GEjZe9KnjanJX4n",
  "key4": "67BiEjvW83tM8ffpjcLT1eKZ4GHhRV7cqYHXWcN66QttVqxs8S8LHwDjdva2fVcjdF9br1PLAYL6Z5vGNPobkgvg",
  "key5": "4dRXfM4Yot1Au1MHZ6qeRhe16afuHAHzDv9mq5Z5VPmTYCGzjY4E9KyUmPztoSPKcW6KoCQwPNcum6CXfdLbrc55",
  "key6": "4W5SE7Z65jQFAUupgYVHRLcBYHhxvTa4Dd6RsUzSmRVsuzWvz3azJ4APsoWDMd4tYLifTvi4nYq5zNBx9mrt2mgi",
  "key7": "4CFphm8YLfHgNsssadhoPxouA2W55rwJgfPaMVi6H9s6sJHWSL2SSJBnwFhLSYLVzAAkghHU7BkzmTFGApaKivzK",
  "key8": "3ZBcVecKKUQauPB2A9wnXNsAB9qG8G1HdMKXSQGyTX8RoUMKfo7iP26XbUJRCNfFqDfctmuXZubwhTbzs1YUCNqD",
  "key9": "2oDqUadisCU6LYUqYMFffX39vrmyr1eP1MC8vXHztR4kEmU6JBy36Yksi57gMkjDHcu5Lx5hi4oyLWmfYeJtSNfC",
  "key10": "LX2QbkVYCLHLfF1DenVMZ6fR7TFsV6A6KVAG5Ps9nhJKE3atTmSsUfT14iCGpzGyKhbd9s3rL5iaiA5hErbuNnT",
  "key11": "Kuq3BmrwwKNgjEUNZwVqE3vFEhkunMrbtr6Jjuiqrsv5T4TmtTZZv75tkm4C6wakwAQV6j5FRnjtpRfY8o7YomZ",
  "key12": "dCMGSH4hjDn9eZdPiWc8Xhj8uYhbXo3QayoUJ88wPfJLh6634YfrfeNuHM44sbBymNcL3AMJDbLXUWceZZksM3w",
  "key13": "4oDdoTSoSpgL6mi4MjnrEWk4kZftVYjPsHHYVnmhDvasCpmFCszxgrz8F6pMgAY85cM1evek2Y83V6NKFA2Wzy4J",
  "key14": "3yzRwB6xi1DJz8Qd7BaHyixo1vrK67sG3WUGVJKHmPMdcCTBdbSMPNJWM5kd4frb55yie5yAdAVd9W8wbxinGdUg",
  "key15": "5okVWQ1rMJSuxgJSkV3DjhLCBpcFZhqZGS8VZW4rwkKwhAKXEtAxEgvtYHyoVQkLp6Mtupmv6qENtK7TEmj7mbnM",
  "key16": "3JtkQDnJcUEexPXZuvdXvkyJfLuApDaYHT62hpkBYAXtR2xCRKjQSr2mgGMP2aPqJFXogWuWzrmUsuNc9hdLdRWV",
  "key17": "2JuM6si6Rm7Xzh1uxLepjXdL4NEJiM2FzBSAqBVsUfq2TDgpwcZwYGZQR12UGKUodxqhyg9LtKitt6PdtgNVK1QH",
  "key18": "4e7ipPxkkNfdLiwqJW4BwwYoXtey1BYsD3Le3qCok2JKAjB9eYNXiKZPRvsRCeb6YDcThZ9cMaKpHsFsL6C3zusu",
  "key19": "3YzwsPgEDh49U8UywrUrjgtqCufDGpP792s93Cng229VyShBVXcZdgokg1zoHKJmTssKFzXnUzzKr9nuhEccj1RH",
  "key20": "2HgEL8AruNpGYvm4ackJbhGCg33xAKYy8speR2ET9SXokGtvLDSJUF5MoN5HDmBfKWTzHTwDPjHDDuP3zWkwdGZF",
  "key21": "5XHkREXoeeu8hA5TBuntn13zBTUVaeUW12fsTJBy2NEZzPTHaNdjBQkmcnXdkRBs6BuwZMyV856UXygG13yARVF8",
  "key22": "5wbV5wNhQc8oJ99ZrKSbgJkFqCpwKqHYXas1oVqy9QU3QMTo4xNGVmyqjQh9mQGDeVg5DH8dTyctwoZhkuHpZYEx",
  "key23": "4WNxXSX7oC537wz7Ua8hewBNt6iUB3gvUH9c214aKcTSnaBr4WRjuHnBXsRUxDFfakGLvhyVVSDkT9RPuvafPTyc",
  "key24": "64CiYwKwNTYxsaUrJvWeSMTzQpjRgaS8ZjWmkLb584z36RWvENRkB2mym5kJnu48RjnGkKR7KXCJK9iHPb58TqdQ",
  "key25": "5gmRo4ZxFKdqoy2Y6WjNvNCYPy37sUA9U9TxfQDeVRQ8hPx5XjGQNC8JbNdJwwevScYDj7RabqeVSNfxfoj4R9Vr",
  "key26": "2soyoZMRkkCqpJaSjWz5V2z8F2BArZrpG1vyzWGfMKgi7QvyhD6u1YE2cJ9QXz1H4Cov6PEoXZ9ywhffmaV33gxX",
  "key27": "9mY2oQUnFWo1uXNm887VqYUvqKj2vjK2N3ZRcTET1pGD6aWgmQV2AYAypFPhpaARVv5vPiaFUYcaMfGzYPr9qzC",
  "key28": "5tUGFvFFt51ZfWn5JU2fUEDiQXFXoXvziJVkuUgPVnhjdJ8By1qcEmoEB6YjMS5y9kcCKzmXhSGmcAtmSLbBwfij",
  "key29": "7UCuBzYuFaKFCGPVNyzzXrjSWyASENHz14gpe4UwPwW2PjSmTPQyN95MFnnZqFAGiQcRMfZunfmA1VapWjCpMZm",
  "key30": "5H8Kp2d3HrxgDGujajtL7Yhh1xAcAKCDT2D1xEZnjDdYzcC8GX3Ujo2wWVZRqPeuNh7qdCerRVo47rB5fnDwB556",
  "key31": "Xd5YgKxQYvKixTf9psuRuE4wzpKgpkaauYzvhv3qxpFSD3R3ZYttnxSptkBBdyUJ2BcsojEq8Y2voFR64JMwxTM",
  "key32": "upjYzVm7eHM7RbSQvRcKGYzYm8NdA6VxGKbdbk6DuDBCpWm7jCDe2RdK88iMmY38x2iAuU3c6ZzGGghy6s7HJ2m",
  "key33": "GBbB2xsUEAeKW9aMnDdNksvB2LCcnK1Nd6KymzcPZq85CREqe2toAwx2XxW9j7poBuCDCKdmZz8AY1eapLL9WpY",
  "key34": "2LjPP8NxEaao6T1YhnHu1YAq72fPihfTgbGhkQL4D8A8tSwv5gg9vPXELuFP2LuBxjC3XAomYkBAWqSTzWX5KHCZ",
  "key35": "54ueygc6sqqRuwohv6Jy3HVAjcKBfC2Ym3CxjWJ7nXKAxrvCQGVt5i361swZnohN79Aj61pD5cwQNXLXRuGdntiK",
  "key36": "KUhV1fjhbJ5cVaQ2AreSiLKeQEskP1ZDfJ8y4kEamNemDKtjgLJ9sMmyzNs4xsri6m85rGA96xMj5WE8kQR3gDi"
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
