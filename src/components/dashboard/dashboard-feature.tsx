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
    "JRrqfzvFd6JXri1bLAjoTVZZZr718rEFsfBWEzc6myGhtRDniP59txgnVBFpXbQNq6mvjEL9mtsBm9h2Z6P7cDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rsHCvfc33c4V7TZ6A2VzJndYEwQVZ1T1bCA37nAT9rBfqHqBAd36FYpCP4xkGL2eeY531zoswUw7jpTqMTnccij",
  "key1": "3WQeh5RH2fWMGsdxH8DRnH8nGwMhfYBJXRAxriEvnV6csuppZVdoJ6Gh72nNobfKcZckei8qJ9wnMyPhGwi9gcN9",
  "key2": "2mVxY5PXdCg1nsEfPqtYfPc1iS2iP6pK1z5E1Y9VjXXxgC34FGywqVct5mGbduTDHGkSE9nnPrv9D8jGEHWELrnv",
  "key3": "5ZaLmkfoEZuLzsW6CoGsxaZ84mnBpXimbRV15uDErgsVcYcU6KcTxDN9P86FDYowrLJYjKGHLXtuX3gQUhb195pe",
  "key4": "4meAq4MFsTKbdk2f6CayKDLuZYffB1KDb3piQw9uHEReCF1KZ3LTSfDTWehtAPZ97TogurVkTw91b6Wuip5Yz9uV",
  "key5": "3dDj7sDdJsZV9pMtwfgW8yFWoGCfEhiUKKxvU7W9CY8tnBYrdfHgLLyXW7zNKs2a2JygJfAZjFwXP7PhqLm4Q4gv",
  "key6": "2uZif1fRCxWbgCc5j9PxikCMGQSrRELNa3KBQ9pqBw4Z6crxezstf4YsX4mPMnkjBF7tV8WZE43STGHsPFDveibm",
  "key7": "3MzVH7SJuKPsUYd9PKJoegsemhMCJx8bRE4MiW3sXRMa9DEK3uebgsD1TF3ggaQ6wmhs5VAkDRrerQKAywy6Gr4T",
  "key8": "45RAa9V1GzFwi3AkueayUR6jCXDUMBovycoU8CPmukVW3HrXemnetjP6iM6WRB2ULmvk2JdRG7gLJYpxkEZP449N",
  "key9": "42A72gWJTEHNbHiAqX3FTS8CKGp8EpponoA7JbswagJhL98n3dQiN7sYu7MvQQWLCjwwKK3UtxTMA7uhkYXPq7Lf",
  "key10": "2ARcemi3ArHi8buciTVXfvCveSU1HA2BDDWRmDoWxXDcNEtdzjipchcaGZXk7EkCAkxNi8z11kdcA7rL4qJLv6ES",
  "key11": "5yp3MzgUgaNWbzcbNKy1tdv12RhCQF5w6yxNLiUaWAs7cwH6Rk5CKX8wApjDLfazC5FGYisXsnqRzoyTGPurKhxf",
  "key12": "YagLtnebcQbGwM9BdwCv6L44qGzAdFLXwUW214Vubtg1xFFbepB1ibRm6WioNXWAu1kr9R6wqrQZo8HEzkLBo1v",
  "key13": "4HGQBFTALN5S5ktrr5fba26hGVYJSjhGmCHpiV3EFSgTFoEvZaPqJdEZgaQ7YFDRc7GAYhVsAMivmWfbgZtZY2Ka",
  "key14": "49XRmYC1wVXGWWCsjPKehFxKwyTB9rgv8VuMVJsAakooSzg9csk2C4h2VqfGhkUHjnRr95L1pyZyfARqzu2mfCir",
  "key15": "2Cu154yjDBrvJ9w8HBJDwhiAAiuwohzUS78dYxvo4ZoweDMg7oQNaQUbSpxzFACz2vm7bd9Jn4PrpvAtaqDNNMJq",
  "key16": "4wa4TGyaPrgsbpgfKQjxxGJEM96nHu1z3vDpU5fa9qLqyaU7mpQiFrTYVhrvb31Y66HawpHUkgSvisbGvYRkBiv9",
  "key17": "3N5DGHVdf6cowHnfNKP2cvH6hFEbx8e12B4SZ2YbCEa41f9q4pQZcbqYfHfbTRM2S9ksqH1VcUkhvRFXQEP73L2T",
  "key18": "3uJVqYRXzDQ7pb7wwWJxZtEzjSbHNnSjkGo5w9oSFtH8PCyxDJHiZawdq7ZXhgvjW55T9bY5KXnDuqUMmqKB99fZ",
  "key19": "4DXfgA5kGKUxnWGA2ZJoJdujc3Vd3ntPfDDZ1pU6MRLCDKwq1f58ufTSguGAz2k66mgDetPLcsQQ1TAiHswqxTk3",
  "key20": "2pLLhc3hqGeKN9n9VPaFWCuR7SYYpSXro8cmfyf836UwZzQQn3Ed2DwE2UDGjQ1hGyyEFeR53Vb1LKFShuW9Hrnh",
  "key21": "5YnGCYWxmGxT1nspeW1a9aaSjdMWqigsKhhu9ZXs81ZTo5nLK66AVpqA2VmMJPaqCmU2dCdK5XWn8KiEUMyshq7e",
  "key22": "4UhhtHBQXs2n6CHc9ddpznEWwXR6VhU5unsUE5cmqsoCS56NLcHUXgfcRWQGCk8HNnbnmcRTpriRMTFK35NcrtUz",
  "key23": "57GVPGgoVtZ9JsL5Ykw7S9f2xnQcMQAfC3aPudpvn5jJeqqSCFWtdw9gwZmnYzLQyx9oihsnatuHGUoTxWuHyw1q",
  "key24": "2dHsxFdH3EVXYCqrnaWDqroNx5eWPA3RyqmpSXHXiNSNpbuzdCpRiJisPBh6LYuNQFYqgWRwiYz8PrZ5Vejbu7Uf",
  "key25": "46n6XZgt6AvWxGVVV5KMUHbmNDR95AKCH4aMWRXfk5z6mwgiKNfdar7R5KscwiJSpRsA7fJPXkvLqumkyjjhT1j3",
  "key26": "5VfDzLi4kapczR3j2L7WTYeCSqb7Ny2tf5j2SHw8Z9Epnsg3pzQvnFhXYaR6FJ3XWSr3cCA5LyrC2x1H26JF2tZw",
  "key27": "5G6xzqbhKYJt32a974Vvca99p8SeDhoxB2yybQAJZ4W7B5x1QwJYBPzj8bwqdzwuACq4vg4FFFANxaTvuA1SJhB2",
  "key28": "2NzsQ7mNxoLrDqedwyvfocMGAB9WhjCrFAK25huNB41zRqAHr5W39BqMwVsLdpzbxaAuFAK3NE52bq2xtAPt1yRZ",
  "key29": "2ygV4tAuUKctQCBbsXcRY22SCnGSqktC4VenJiCwty4ksc7enHsSYfHvrn5iq9yYfYeGMeveqBdjAe4C6s4UASC4"
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
