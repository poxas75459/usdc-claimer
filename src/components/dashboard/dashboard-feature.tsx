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
    "2NFDe6h8VKsEPiu6fHhU6FcHXFXRazsNQFsfbegiA2YsLsx6sC2BjcqyfYd1q4dr7PbbkBGE1Dkj4YDXc3g8fdsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeTkwkqLyD2kbCt7dzhrUH9gBx3je6LoCyxi3gdYahk7ZskjJzhj1VUz6ULLdZQZdb7fgXfRXoizPPVsgyP84bZ",
  "key1": "3QMosyskqoWXmG2h8ABTaBGNnaSHgnkgasXemCG7xPfmjVzEB7e2FtPkcFdhsZu5TQE5exBssuyBnuN4meBcNWGT",
  "key2": "2bEUY55G3Xm561uTQJBinVA6ce9RVbuDv8Fa8aZ1Y6mmcyAYFf7QRUZxnX8MhYMdwNAaewsicZiWBK2fnhUmVY19",
  "key3": "5KonHvykm2VFiXenZFx7eGkVWzhMNnzLvsCzCFaSz5TZTrY8woSFd5wSFWJRA1kZdxmMUgjbF71Ren4QaoUxtNAo",
  "key4": "2PZpxKRkuaFYj8FizfqiXvLdpQJimXoeKr3fPu1RybRym8wbWqUAeB7MeN2YamCEZxgop1vwqo9Zeqb2ZerYxo9E",
  "key5": "rQFWCRcu6GHDRvXsZ8NsSQw5f9y9fSoaexuUaDBGMHdwGEEzk59KrxmxJtJsH3cvdQGmxyhhV9HDeW91uD8DZs1",
  "key6": "452x3ikQvXqfbhx92Hiic9meBQKweijJQ5rThQpeWrXbBx7NY3mviiBTu3ADyLLqtf1SKUpX8SoG5crzhEqpyLF",
  "key7": "CBjS1dPTTg9pDjGGeZYEULHumuA6uoQp2avoPqHLgTnCFDmkdcLVDyDRV5KNBrBS4G9N4LNEmNd6AkVe1yETQjJ",
  "key8": "3gp2UmoeaM7EsDCTFQSQvP37WmVEaWSFUcMMw9hV2LScMvGG2caBjsH4zLxD3s6k3LPBkCwksMPSdbrfh48wsnUc",
  "key9": "61nx8j96GcC5tpBQVuSnUMqXRMmbmSKWnZQ3DUaHkxj62npWnRdnpiH14pAqzFkqsH3ZDji2PuEAyh9kXUB1qH9H",
  "key10": "2R7J86cXqr34u1VVtYF4hkV1eUmDPryf5XADAtxcYpoeXEGj7cT58zt3p67Ed7EhpwUHEWVEYSayYh833wuct45Y",
  "key11": "HRFZFE6eiA7rcuGC9mWJi3PKDaePz3vxkzGkhzPrGjSe8apAaMwgafiUjP9TSWF5HAti1PLY5rpDfHzsZXHdZuy",
  "key12": "3r2JkrjUWSFjHUu5BBiT69MhtWe5pLXoatSDse3rRJrNoXyqBNicRZaoiqxbzdnjBjWCdkShetFS5J3jJCmpPniw",
  "key13": "5qawTh9UZa891AXtDNEAUbvibb9DCR3fFKSgu8EQbcB5BZxJGeo42VMyQRLq5d4YTZXLJPDBDFxmJhzadjM9Dz8t",
  "key14": "25XfdCHXPG9QYsdTA4j8mAfFe2nuTSYk3Y1Uqv57wEknxGspZVC6QcwU9RXu8wRzMJyW3fNmueBsBydmK1Zx9kvZ",
  "key15": "ckGSyGZrNhf6xX6za9W7miV8Sp92DKujTZBJbEhAfNw5ocbuP5rAMwfjQB22dVNvfSaLJeBnrvHD3BwUWRr5BYJ",
  "key16": "NGPqZ4fyWY2BAhjTGWn3sFmESeswV3fpsYTXXuSARVtyR6G1dYTAsSMhFg3o7zPqTVGoGzckEauKKBWygj76TjY",
  "key17": "9tnf9FbkEowJUKnXJLk7yZEMPVD2fgxCyAeLSN4CzvRjyaiycQCt2hSA2Q6PRV4gRVcEAe5KNHQDzuBU3S2UgAK",
  "key18": "58qxG7Yiv1ykqzaDVZHT9EVduJDw38BSF8Swt4d4gUrQEmofCE9L2qWZsTYPmXYFsRKpgEqSLbLBaCPE3rcBBmuD",
  "key19": "Yi1R4nwWPwwenWTsi11eKaMfbvLKvL67zhJUZb7NvyVBedpJqs3mn6PkHcr7GMRnY6AkBFth6rYmGFHrCYPTbVs",
  "key20": "3z4j4HPhW3GSMZGBzz6fA5CHT33TQbmCUtqr53pALCwiB5xVwXijQ1i7oYctqbFvGcxk9gXp1eZNJmgCGYLsVMao",
  "key21": "3aHrnNXoZyUYPbRrzHQyED8H6jXWJJfCh9NeYGguHf3ZZg3qpYjRd39c3M7ACi2v6mMN3FSRA6UtjgmbPYELU7e7",
  "key22": "4YzruztYnQiDw9t5WugMHFJKwLTqSt39C1DMYDRjhUvajRQ8MZqHH296HkYc3uZYg8ooSN1HJZ3TrQGaAnAZ6igq",
  "key23": "3Xkf5XBgVo7NLnzEYZCnz86He7SoTYn6vivr8HCPs53QPiGJ8iWsVhP9EGACSaX23sttBzYnjJRAHS1xwqZ1msKj",
  "key24": "5LMSr85CjKa4JLk7QCQuGDbhK7PaVDB8fGRPVNo7geScfXiPURpPwwhvzRnvSan72wQG7u2vRdyyfG34WcZ6CpD8",
  "key25": "N86ycLKBHVo3Wifzk6RFUFee94aaTwvLcPvUrt34EBRkHckbLcbYabSG5V8evcrMVmMSafiZmiW2EskQGYSfEmz",
  "key26": "27279QiZNPDoL1uzBUPJkzgjMkFCT1qnaRw5MYqD9B1SA34fHwi5WAWekEBgFL3NsYJqJzBoTK8Nk6ShtzmmgxuR",
  "key27": "47NXrgzpey4qmDWTL5LBCv3DLHkRkdjnR7h3cHaSc6pipbhV9tDL6kHgXLNrcSA8gLSXNEhWyUP81ozHsi4U4ePF"
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
