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
    "3utXscGtHL19TFNZCVM3RUzGKMmb8XmSRRkBVRQczBGMHaGPwYiT2bhAnj3PjWvCGu6fKvGTxCZWEzt3FB7CwdQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kDb6pzX31Z4YeBawSdmFitKbiZ7afGSCn1X3XVdfESLx9V7JipJLY6qC7qQCwqBBpddTgcsGN6c8Ef3brkgPqRs",
  "key1": "3PVryXQ5XoHMXxisczzKzbcqyxMi7Mu2uQcYbxxU2ewQauqwD5f9zpjSBsJd5aurNCLrYxTaJP1Fa8ykMr3HBv8G",
  "key2": "4HY6n2HkdTJe5cqNr4pPFKwHKGeGMnKnKDuZbpUb4MP4x5n8D9GDHZxr8NspnVrnTU8z8SuZNnuTSchmx54sXe5f",
  "key3": "58jLLbgjfeQqTHxjWusXY7WxVXpAN42h9VLbQAKhMTC1paaNe6F7cYnZFqBJN8eGdqKWDScxzsnpTbX51r8nC4kn",
  "key4": "3CThpwmKXqkN3bVV8oVr1U5QbBYLRY7XVSFheXiXuesPKmmybJHAu2NkN7hPByH9WT2ye12ijZFtChhXtudSPFWz",
  "key5": "2EVPhXdFRNaHFichwp6ey8LNqBLeBPB5gamawGWao43xwh6ETGd1CQh5ZQFqoeN453wPtvxDZ1JZiRE1BSJwfoFM",
  "key6": "5WHbe5d6S9GG86iLcY8rmDkifMvp1w3AMpQvY7kxD6zGgWNz6ViVCX6z6NNbArE3BskwhJvv3WPdk8us3oaxe2Sd",
  "key7": "cNfpBWbrTJwMRug9iigZsKx5FX6He5VemETHczKcNCJWnHDWcXVdg7SAg8SQXT7HqhpdYGbVs6MLCqs84Kk6Xf2",
  "key8": "2yLvo9dAboGhqTiBkFaazdk7XftzsLhehokoTgzBWuU7w3Rnr1zv9TTCKQNG5DTqpKgwN3QENY4BVy24AbQpiCcN",
  "key9": "28C9VGw2qGdnBCoUmuuYgEJgnTDLuR22Z9vwcQY5GzpG8HZmZxecUS772JEMSRqerMV8RFvp35zSG6USrS6HF7ea",
  "key10": "4VteXC2nReoWZ1JrFepTxTbVaX1tdYqbnHNRDZunrCSXhCwvFUhMeoARXMrR34Pf6K8Xt83BN6yfbnBWEieykWVC",
  "key11": "5VxXwdh48qSpKYZELEG3CSCZSmErmYtCM65fAX4kaJCDBAozUmSCvfZGVtubrPRcUoZU4LWPorJWYzmXwLwuZGds",
  "key12": "3ifhazRDjiSUsCt7rGGgzFRYzhYiXm2gWdR1FUzcLQXUEGVY88pkbLKBLTr5yE1Z2czo8wQkYcSLDdYFhT7NdpKt",
  "key13": "3W3dKRUQqPdecJUdyUJW7sBKJRc8XYv6XVJsL2h2Vx8DoK7zSP8eghoPySdYyKsPU8DedsGSaoUhsze83aQj4pNp",
  "key14": "3rSVwsLD3XetvNGG6Akc74T11MmphRswdGB9Qk1Dn6E1zM65nBXASXqMBW2ZXLHx4zfyQNjYLzopGTibaVxA8Pgx",
  "key15": "25iEywtwGvf2DyY5DSrGdc5z1vQsFXEstsaqZE2mhmwXeicbw1dwg2GaG3wt4iDUhjRfSDUmcTVYHQ85XvcpsrYy",
  "key16": "2TRg7drjAW18bQTSMbiaRLfjk1is9dhJTfs8ghmBDBC5j8spBBDMGwsbQu8Si7PYn89qbuwiBTdnaEjfK6fUJtBS",
  "key17": "42PfE4yxFPpabKruttpKjbShKGeJ5zYAuo6TvLpMWg5zLEsWvBJ7paMhPVHNDg6U7KPXPxeFEd8jZZ7XhdrSsXGw",
  "key18": "5fTpBo6m9t4yc4wfeEtCYb3ThTk8qZoS9Y8GiokR1MVXzxoFeDG9x6Z6yVDY3EDxFroKKnYW2DoJJBBuhyr4tE21",
  "key19": "2ZyhudbuMPwdW1RDbQk2XHdVBC7uKd9Htzg4pyyQ877U7w2UtmqmEdZkaZ3taivmoz25NbGaNqUodp5TGAe3wgNX",
  "key20": "fxUzquSJw4UyQsYmeeVM73Ar5XQFskGdQh4F3KcmdsLetsECazu4DZMsLMiroiKR1P6hcdFhGcgFeRubJhdmcmz",
  "key21": "2EiWTPG9rUeJe3aMz2rZXiaiJm7nwZwKEFrLoYpdVzPZudMR4SuayoUx5YYBAhXMmJ9XmNumXbNF77QoyXZfEK1D",
  "key22": "fR24Pz5i5jpShMHKv36QEUqeZc1Qd8xvxo1sCAHBQLrynf7pewFwNMvVhU8BEFEyd9XUx8JAaKM2qNsYfMU41Py",
  "key23": "38YKGSQdncgrVT7RZVLku5gb74R9gWnmnY7ZXWP5y7nHpeRLtavNDo5mpMsAKpSkH89XsB1T1wo5MZ5kPmvfkaSm",
  "key24": "2C68PKpYL2beiBiVCpwKmKxMsXGxLg36Rc9An9DZguwXfDe66JvmVN2HazmvP1v3h7KSWdLSrmkCC4bwCKXW81hS",
  "key25": "4kGcd8JVH1T7PPNk37q6Xsx8u4hE11kgHXANBBRoaGkVWLZTVfYtgMEgukYU4nHW7U6ds7ZHfHbMbXrQg8KpnAyx",
  "key26": "5k9kqYzBkfv98L89Kw2ZiJq6XmcTdEBFsbozHQFxpEwARtJd9RBsYs3pg52eDgSrxpc8yqjCnqTs6FBZoThbtXZ3",
  "key27": "4XMsQTHwHKoTSDEVxbMkYrQUSL935HDrK3ouUPZcAx6seYYgBgotkQ9anWbFhDRNA9NGc6KyYtCjYfrud5JsYEeu",
  "key28": "3579jwbEkBXgHPst4gCCKdF3NMBJghMakY5rGsvJK74sQ2PG8xEYu2p5c5EEcfV2aKv7K5fgYZ2zFcNwE6RUp7xP",
  "key29": "5th535wpYm8nhxcSaYZQRiRHjbDXUcVwdaevjfkHhaTR1jVgFnjx6PyLYvjoUAEtnpQ78LJtjuMcioSJFEJiYvGs",
  "key30": "31E7vQMa2tsoMp2CEg4vNmmNUQpZp1s9TB1x8qgJzKt7zFHYHfWC24rESfxEEE2qxhc7RSG7NcFgcz4CNbrWuHz4",
  "key31": "SyuHmNf7kgdh7rFUmsyGBXy3FvRpJ1RHjpe7NiV8bWgpzUtDof6ijUy5YXtwddY2Ds74VkcmpcQDQR5wy9QxYPG"
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
