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
    "BacYsek6fvecCjRkhGg7tpWBES34Ch3sMpph5sewM8FyKTPV7bYsAbdodRqwe8Rm2YjHYdFMzrSVg29oQHT4PuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5zZxq1UbtQommvp471n2TT6Cfnf1TxG5HGHsuf32DxBiMtwATn9G1w5px7WfuWvRErdYdTTq7sRSPJAhbWgjCo",
  "key1": "5f5cH5KEW385Spd865UWzTKN8RLR5uz3Ug8zShpcbCgh4aM5nVwQ41vejR7gc3cEBSWZn4c1YgpJagtFVAPi7cZR",
  "key2": "F81fnxgjJh77XbMrVA84AV4SkuJLnZY2ZMgtrvncsge6kh7a3VkkQjkJ8u3vxwftX16hmJ9M3uhzt9Dsg16cA7Q",
  "key3": "4qa5bsPqGqfGcfXMBEichHKhw53ANfdJm8npMXTPXQFXrjHzpr9y9jtWa2rxk6SgTSg3cjreFDd3RxgDN4b62EK9",
  "key4": "YHF9vDFMeK4Ln9VrfeNwQZ3Hd4QCY7816QPK2fCH9VcHDLA6BGRx7Rxh3Jxv5EWgwLEpHAu6F6rtrBmkbp95cfX",
  "key5": "2U1ptgsZAxo7qKKYWpVo9AnbqUbwQJoqw4XtZpdf1ffNgHpkSaHSX6K82kVyWx6nxVMYcNNpxh3iuadzxm2CrTcy",
  "key6": "3RWTCNjPHrNmCFpYzBuGMDVHSqVvYQiMpj79fNHgo2qfdnro22A4CFLrYJAzxhgS9vaLd4ZSeMwYSugpyF1YQcpm",
  "key7": "3H8jyyeSu7vBPiRgq4DqFehHjmpX7YjUbsiqqBvhM3sGmTyi7YynU7m6Mx8r4vtkpfLmMA8zetfV5Tt8i5T3z689",
  "key8": "1hdLmyugnG2P836XZWUFJWhLk5PpSygYBUBQYfZ5BbBnDzZvWkG134pnWfFH3CvsEdo1kxa9iVnuqBTL4xdWEjU",
  "key9": "4Lse8LL36dRrH3LovpVEs7HQmNU64msXmZchFdYUqqgawWo1PSqjkpgvq6C1p7A1GuF1EQLLjxNS1MUoJURYvt7a",
  "key10": "STcdt3iBf7ukFQKd6LzPAFjWwuSQ8RJNH2ahVmQAvzhyvq2wFNS6GswZdKU67B4yJzzDcuTfpZ9WyjNy9nKjSUb",
  "key11": "dhMhBtUa8qmmCCxPwhY4d23LwjJbDhy17TXCfnLoqAN4UVMhmRUza2Gd3NBfz7Qpc99RgFeJEgn1W5cfZdK8cy3",
  "key12": "4uLWMkGuKwVPLrRXgP5WHkZ96DAEziLhXn3JHspNYW9dpjPdAeG4b44GVDyAV6WQZiLYMA3w4zFMSQX9J9rvKusR",
  "key13": "4KcEvzbBTDQu8MqEWUN7PkrrJe37GreKRhxXex3WyPSXooLgUkYjZN6PAB1Dy2VqJWW2aJeRwNorswuKWnQPGyeY",
  "key14": "15bGjYXtwLBeord3msFQ15i6TL3XLXXXXmcFvEWbZEvag8do1jo66Zvgemyfaq8J4jM7ApUQTwp5xSTaSDaTRjk",
  "key15": "3qwMb9ADaoMKbarWR1qHa7xzR9Ta7YCojf9f1rdxmr9N6K7oadP7aaESjYPNYRdrk6fi5C7zSCguuWX9bg9kfRzw",
  "key16": "32K6LUj7p7sQ1WpSK3b5HKp94b8J9BEqfiNQH4Pa34CFkxVvxtFptjWs63gFrVBdUn8kEaCnT6ykjK8whU3NbCnC",
  "key17": "e3Bz4K7h8AhsikCAhTsZK5JqEwgzQZhd3XgTqQBXh8ufnjEGfwoykdHodW3HEtBdMPn7c81T1agkVTGHnbX4AUW",
  "key18": "2mNkRMD27kgADgpdzeVKL5TEgR4Qrfg36UzuyKr8ougDCHzQvZsZ1oyBHy4BjKWokfzg5em9rwAhhABsy6k4KTzq",
  "key19": "3vj8Dxbm2EHMza6uomEX5x7TbnhuuDksFFSbAKTp3aPeepxooB3F82regiJb5292xeVpZy7tK9wY7rJHbvZeLiA1",
  "key20": "25sk4wzJaxpYpZmLb23D7qVzqqA4bHXcFaCRW8aXYNBzqR1ymrqPP7ykMepjLWJ5ss9wtA181YMnAfpeoamHAJxQ",
  "key21": "43SzWzpbVpU9DzAb32dF17BTrqhcHT9ncJJfXTfqBcdLPRJhrLzzDHQt7i1cJsCwiM2TQgoqrUCS6f2C1ssVMPKT",
  "key22": "47arMscUQiNH4UFivkRDDrbvt6vT5PsF6uwtXar9RqX4LuP2omZuBVxwjeLXLCSuHBTvfbyL6raUqwSUfrvEx9LX",
  "key23": "5BwKAtTxfNHWeVPdG9yadekGu2TA63d8EnWufCKnyiGXAJQnVcuowJhTXTuWav2mcw1eFBKGYucTUmkik2wPpnQb",
  "key24": "4gCoTguBZXGDsEgx63TGxERAUFSMnNe9xh96QpcWZND78GcbMxF3yxzk7VxfdcBBhmL9BQExXkiA83C2sqrZ7Uv8",
  "key25": "5CH7BvRK6MmUPQ6iXC2v53kQq4XpWo3oSn6Vp8of5nox48vsUcmH7BLPgM9Efn8ZtFvLe1ep6CwkFp8sWuGzeKkj",
  "key26": "2V2y2FxDvHdVLRgjVL76ar6q2dAXp18T4DbYnyNkDqY8A7uMkMofsEW9y8QQpcbf5Nokz1eeEyHR5tGF5ZYRJfF9",
  "key27": "2y6VfwdZukSVx6Rz8rbTw8pWwF8PGYhLQbeTXM9cGr8kpvrzqtDqCvaBC4vCUXjFQbGkguUefcBUrmd1SiAPseKq",
  "key28": "4eXrebQJWw7Cc39E2kbPycJjvky1vgEp5PH3cfFNFqkRMKSrS5mE9noKBxVvXhAV8PGN1WQfZKPDYcaSu9d2GnFd",
  "key29": "JXoSNNVtnGNFSWbajpHM1ttAhGCkPNVQwZB6V231jqoAPFLYMNvfWyJoEdCkW5KEis1vuZrfFSGNwKaki521Db3",
  "key30": "4msKVMLLndsCrVqWRcvkS9bFX3KSYdWn8gg78kK2b48baYDFskSsTdsQK8TarQFYfoykiJ8MaB4WzjYbXkTTRCth"
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
