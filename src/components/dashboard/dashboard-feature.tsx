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
    "F4NN7TwKc5ER8kQ6jfZkWDbVDir12HC45tqNEghiAcmVGSNzp79cE3BgWHppWhSRe2QPQat5px32UWVK6yudayj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUKeVQAdMLQni6Qkv1TBtwjPJ4HpjabvV8NNxDyU7qPg1LdFnvjxhoYEwWJ1WeRbDTsL7SgUtgvayL6fpoQFQNd",
  "key1": "4jgpPocKLNTnxCULA9EQQ3VTbbBPUX7ZQH7ryZ53Sp5SAhCWviLrhSoEdmgTEzB3Xkmk6m5DGGYnSd5u4J1ZLh1Q",
  "key2": "K1ZFn85RQMiRLrxoR82nFYkAXz9xGERDaZyAF1QCHjw1SgJxVmeKP7wqwgPRRuTXNNQXQHJBCYKJdwt5y8nnmoU",
  "key3": "pc8tCjgUyybs8BukXEhVsxSNMENsvq4KRRkVsKpohP3vsUQ7xMfJeBcuYPoTqgw5RLeH9ubcfUQ8yt5AorgZfcA",
  "key4": "2YGeHpYwFxuEBS8DB28qVZ6v4knKkSk5PKmUMj5L2MaZ9kM3HMVVZkFtBcTX4xiUkZnfyNFWk6n9VGm6bKHvc7fS",
  "key5": "4NMEAJP4A9dn1HYgy4zW25aG4sNvHbKJiuq69zLEJM4iLrnX343piWMDroZb25p1X9S5w48maCCCJBKhKxe1feQr",
  "key6": "2eFojVYwzC3bJFzYBoZQPeAg3Avh7g5oKC52aifWZvFL2P9JWnfjJ2r6NKpd4sz5U3iyjmhsCoTtDQhVMxxX6cW5",
  "key7": "41EDzMmckAHrjAZNKiqHqWQ89fkqmLT8FzmagWZHiUasYcYRTL64RhKK2eqwz2xsREH4kvAQPJzsBUWSyibJpKy8",
  "key8": "4GaVXNc2QdR5i97oT21YrMipMLTFX9FUDUBAANUgpQS6Dt6v1j73s6jSBcbQ4ffqcrnBLLH7YSCaswgbMmJeyiHb",
  "key9": "5GNjqfQE8gyuMTb7De4X1DHgR69t3Unxft4BAYKZ7SnwAZMKDTZwnQDTHHZjYk2rZxZ3dkD3YEoi25NkVaGbcWQN",
  "key10": "2PDRSoXv2nfdSEbArXPsz5aqcmz8PMA1vWyW7MajUW9WBDa3VVMRaxxvazwDnaMY1Bpie5K6twMAEqo3BvPvS8vg",
  "key11": "XAhh3EpFEGnduodsAep5XuksKzkBCbVz4228sN8fYNnXBUbGAZvR9svth37xRAkJxQ1SeudFH544wBcJtV29df7",
  "key12": "5uTcVPQwZjd8MDW53YvWSDssZS6wP14QfFDn8zaKdBqicb9qtM4zMzWPheaUFxNKTKjyJLVC1vXJVjpF5iWXC4fQ",
  "key13": "43cak5WPLVJLSJWGhhXfwDcKoFMTVaAVvGYQBjQg587r9cTbnC9FyjPbiri6TZgGqKX3NVQwydpH4MP821PDcYyS",
  "key14": "36hzRTZukYRBWH2VsWCnLmNjPHKKc6BLhAt6NL1MiEjDyLbGzDdoi4YromXcRmhhPd5AEiHEea9XWGrENQZcPZLG",
  "key15": "3mBHekK1gMrghAWofKh7PGYk8PFUvYbdkoihNSpkhUmJn6fqEYbN8xgyec9GPxQzGxecHbWG78aXd84o1RXmwDo9",
  "key16": "2fhDSJErPVeVbKcFTcVatDTBQD2yGnKBnh3VX8NeG5pCDx1dwBFBrp3MhVa2bBZPACt76gL9fgR6ZodPMAfSfruF",
  "key17": "5KNmpvvwGp4wSyqoH75mLT7QYWxs8YNF1dd2oZXp2M4PRBvGyveZdUrnxeuzZRb7oso4gSDfhvLQfCor9vkrAQCr",
  "key18": "XiBRRPGnzvJyE6vENJiwYQjY35GGQhoicUcAohqAPZUVZma7jbGnoBCGgDn3XfSHyFh9PWfEwxXxUdbiS7JV6Dx",
  "key19": "2jhfXVobxBQb3bmvp86cvCYLSnQLDKobxaRi3Sr1MqcSgBE4Ye8ACGBg8q5NQfvDf5Fr4iB31dH6nxNC8JSJA4GL",
  "key20": "3YMQ7p3qA3MAMrTxhUZawVyLcC387a4vPsG29W6UhqittT1B8Qf6SJzB7asYaxn7HxYJiQLuuVyJSifdiHP2k6ur",
  "key21": "2d2c3MrpdtuzyxTj3KTqnrbwgapZz9B45EDz2CDmYKTkxUFJo55iu7ocdUhmhhZZQtMBco2Mc3FF8gaXJQfiYN4a",
  "key22": "2dU1mCNJ2YXaQVcLAVaZZYFnijJz6RXyTLYFa8UjHcv5pEcLtgiDbFyXdpDkRmNTk71ARKps8iVMXbDvQqYU7Q7T",
  "key23": "2dyvGkE8P2KRAE297eB9tyABAeHfgxnXxa3a25g22sjvgGDyHTM6dXPJKCX9CN3yfKZLZhyZwqESHPrF27ygGx2U",
  "key24": "AC1vq6MsZH7vREqDq8Ao6mpbag6NW7PwpMc8y8J4pZpT9QRN1Uf8pTwSzN5dSCayadfNRPiYfZQpxzaT1qqSLix",
  "key25": "2Vu2bgGJs8VPz536EUDFRPMCPbvvFqYwH3hiHon4mKT5ivJxHBCs79WddZPcidKEV13HmbXp5XCXss26zPbLyqPh",
  "key26": "5rRUnGVqCvdxGxzaFfR8GzJpZzteQa16vRyTSfWUe44Z3a4cr7rF9e8kK8jTcnYfXDBWgk4BeUErF8LJE5p1zgvu"
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
