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
    "49vjJh6NTXc3suiLp9uHQkMF2rZJdGLKsXvp96SCB5SxkiUVwGdjqvS6jXSTNFyDkakPkdKBehe46F7G59gLZs7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bt5nYY1JqGWeLPCKJPWQcT4ZyDN59wVv7tx57rQTmQKou8BdnV7CJFcaebCMFmHNbX22a3aKvJKBNs2eyG4DVxp",
  "key1": "4uDwBdpLE4CFtXUQ4XMWw2sH87LKM5DP7vGZj7NnwPJkYZwc6HwLj6Pn9BkQHioLzqLK4e3KZWMULqtS9P5UVZNN",
  "key2": "46q4sFHdHo3khZEs5EJARWPH8JGQZc5DveJpKrYuNUSHJk7aA6QkciYfPzo9xWfmq5LogWa8A74HSoCw7bbe5ahj",
  "key3": "r5CeawQjSSffxxXCVRoKjtiwA546ZhFzAKdM45jdAs2RosV2RekmWJHi3qEne7BhrXxiRTGnzn6PxtYftPXgkz3",
  "key4": "RS4Xc1L8yQWSoTcjMAQzXiab4kcmXXoPfyQi4wyCzciAzGA2ag9u6E1fDpmwuphVdDAYy8Ut3bYHEg89j3vVKtb",
  "key5": "J9qeZHZKFzsjD9jGbFAbfCPi2Rsgn3a4JhVS5HEBg623rvZu9X7qvD6fmizhztsteYvLVRKu9JUfKW6vVNusUgf",
  "key6": "3wP7nSZXYjrrUP1otJe68TTvNXdgTcKLcZiWuGFtJvwSfqUkCKnZEbHHjn3K8FSzwdrKgFfMSVWXdqqd6oPdxTHh",
  "key7": "qj5FqjwN7nfbnDHnSq4KC8eBSSzoRbT6UM9qq3YQ7wGfgS712qTt4EpcwFz6k4XVxxPzZLe2g6W3pgJqC9G6Leb",
  "key8": "45aenVbzBZKBkTLYJHAjTRs2rFuLzG8uqaVWe3yDhai1Rzcqw2kPNo43qTBAANFQhmYp7oc14SQMgMq4Vp9AMShX",
  "key9": "4hEbpHCmuiGJwJUTaVHUAceMpaEChQsXCrFfdgBynXS9rDLEiJ1mq33eSpnQZkyPnGE8Da7LN9x6EkUz9SKRwbiQ",
  "key10": "4m5KbNShJTtYECLH7XznrkpjKzWszC2h5z6y5i1MbFuS73kMKtSMWQe9dnREQRQqsaqgag6Bmvg4PVLiETNjAtwm",
  "key11": "3nNcrq9yuyQ6p3Uz2kfuFQfGGTSdQXAKVaXZr27rfLTPffd27LfheRtnHwLaNwv6TG8pJfkpgyZ6Pwzk66C41QGW",
  "key12": "2mSSH21sUgNRjXHA3DZeecMDyd6ZC54UnJ2Hqa94R9PMkKPA8XhfjFitpX3tuQz9Fj459PvLSnXJkru5bo7Ydu7q",
  "key13": "5WPncQsWkc8E1111G7Ty63ujhhjfeLdYNaZiLccYB4BQre9poDuYsyrpy5F8zcQSqXmAZ744YDSCoTYSJP7REsZT",
  "key14": "2ucAiUsBeVE7d5ddHdzUsYq8s8RfhvT36EUiWscTiTJi1UZgvX7qJ2YzefkRELqdHCNGiU7BVBsqCgGDEUYqdDai",
  "key15": "TzpZPQHrzuUFhmv25Np8ncHPRSvCb7mnj8ektWFgt48S89x3JHYnQgihimD9d66dmTHCv6Eb8u2PwE4Fe3A3QRa",
  "key16": "4H2if7fobu6dxHCPFLtGMyzdaH6JyADZq4rFfbQ3zYbis1HoSKzD7bGo3N25secp5Wrwo9Tm3bMtLDMztj3xYwLR",
  "key17": "64SrjxqXSwMLE4W9sE5GREQ4R9GWWfJsmUqVxwBfnfNHiDWcZtqa1MaoyTii1AhyF79aUyCztwKXYyV7eSw2mEEt",
  "key18": "2yYFdUvtv9fZCSAv8oripcvr1S4KcwRWgUhgCYL1T1yQbNiD8JbBXNWa2KzVaUnJtVtbyNGoNy5sfWxjx5zsuWSh",
  "key19": "2HFpSyD66icCE5qGw9Y17dkg3knoL5Ekp5rHU3ggr5fHvidGWJeZN9cX1EenwKuiaqP5yxEaJUCB68iijaaZpNRY",
  "key20": "2CbYeQTAhdRvrnbYnQBDuULD66XQEgf2LfZkvpEmWVGVrcDt3hWxrzL76hpzhq5soDAMYT8rvzDcvHbNMAohwoca",
  "key21": "5GwQnobY1Tk5N1T9hexhqMBB7Y7b69vC5eiJKvLPF2N6FcLHrVYvnTUuW8VvbTZ3kE4BjH2G6jiG23byqdRiGDNJ",
  "key22": "4gCEEd4bGaEazLbteyCvPdETvNgdcwn5JDY5YyYEc3TtXX4MYr8eP6YgGPx1kaTZk7t2SNekmgRsNLqrsoxPhBaV",
  "key23": "51M22cGLn1tFVz6fwh1mh7JU1MS3aZG9pDZXSSA6HGrVxUXheBaGRcjMY4U3ANzfDEqCj1E6M4ggiD2Bskxmv6fv",
  "key24": "3oDcj7zRdeXWZjHeMugFsxXEwUmyBkNznQvsuqPYS696RBo1KS8zjMvV1SwwU77apF2uSgtPhr5Vc5sxNaQress8",
  "key25": "3KETQ2QGoC8eFhu57PwC5LRuxvq7KdFr93rimtKFZytnbobkfiZVc23vSusdvDZ1A9q873hHDswRzpLMtdCAuJyY"
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
