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
    "5ZSXbosyGpbax2aqCX8GJxEwL5Qpj4MdMHeQv3jchMucJ8MsPkky4x9hqBKD4YxfuVBjC3YNnP2EsFs1JzECqViZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57EndXxTiT6FZKsYKnKW7MdgtpsNgaFDVeeS5qvzgoZbBdcQi3jx57KQnvN6FwvTbR4g5EUrcqqxbe1TDx3gdp3Z",
  "key1": "3XgLWnALm816Ff19Nz2KMmTRhcQJRuWCSEg8UYo6kH3EoSbsmP6osm794zNW6NqDYtTspfXLXqAGaChnffLfgGhS",
  "key2": "QrvvrpAfbnjaQJbAVkXQabGxi91w9YU2mFu1LrL5WfeuR7fksZgd9LyaGPVRw4pJdjzrXL75CzTqMkTVAv8AbXT",
  "key3": "xTzvwkMf6hc4gQ4VZAKuSqZNAZ6VLguCP33udnutbGjgeDEY22pJq4artokoP5mNB1GQGhpfsxJvnn3RAxXJZpd",
  "key4": "45hpeCc1CGoLuWCdtnxmcnPhYjHF3yeuuYpWdaDCUmyaS2VYpK8qxAyqPKmC975RzRN35nhsDnHCnzA66y3uoBSn",
  "key5": "Xp1aCyr4Tt6EiMgynJppYbPqLeyKNvXwpMMBmtz2fsZdxNCoDqk4xroqxBxspGL7LSrD6AwUa4TLLHXeeW7QgLL",
  "key6": "CLY5E31TFUyYoGajL2NScuFrhFA6dofGndRcsHytvpFbCTuLUB8KbmcQ5quYFaaYJtzXmvP79K4773kg156ZA5h",
  "key7": "4DMsxkdZ6mNwyHA8HRF3xs4kf2hWFo6R5QxhQTrptWjcyk835VnzN93rKagcAGsTqrHiXFHsFVV9SDPSsGpmeFR7",
  "key8": "5fBwroAK3P2supAtxFk9523ibJhxBC86FndmWamiFajQdvDagBtnp9Yd2VM17sRfuvshf7YBRR6xvMzeEaxMG3yG",
  "key9": "3rsVSvDxWCE6Smg7RSDBchwJP684a3nCeCCeT89bvjiHMqJ2kBK92Y4uVEgripMszJtuyVFZyRg6AVa6yLmToA1X",
  "key10": "55nmGWPGdrLsJJ6f8YmJCcno5DkHsz16vCvi3SiHrCMqA8GKauKEpAEAFJBxRq6g5wcmie12eKUMc93u9xJMNGrV",
  "key11": "5Ufx2pzknsHfHNcL34C5wsUWxkthLBxdSq1AjGPLVEEnHHsy6BeZpZSfc1HtutXkCFdEwsimRDQRsNDoqGZEi2es",
  "key12": "5YFkpmbBSL8USdjjuNAsshr48ZkRihJgiXKTrzaEtFuQWjdWiX8tb6gw4mn6ETV1FDmNeMvtgQf7ngv57fHMTNQY",
  "key13": "4xsbsUyjAcCFvYmLrgW92aKLdwRb2aGtsfaXMhYKxpSFuVeRGo4rm2QAjiWSU9p1QHn1QGLxByTcvdDdXNrRcMey",
  "key14": "2UyePm6qE1sSx7HvR7Vxmk8enhXy5gjmyYdmnD4ZE35xL1XT8Ncttmzcoze3VoBbWy2xWL5NNcLqYdP8HH2RBvTJ",
  "key15": "4CXPsYjDXYwGDgvG2Nh4PysiqGcwY8xPeSyYWVmGMuC4jbER1Gq3q8HrFm9h3EHkhRubPDK95ZL5qZBdg7YvyDxx",
  "key16": "2dWvdzyYrAyuzRQaqRMpBUM8SZPHBqSefotZf6yg7sTQFyijczi3pBpYjXEqKzd6LG9Vydk8Qe6FuWQN1djKLRwu",
  "key17": "3sFnihpdJuu6tnA5DTQSLf6rvdo7j2uJbnfVsZnizyt5hC4pyQtPf6vRnt6Fe1LVd35NVEfu51Y48FsPnA4BRohV",
  "key18": "62L6Y7q8PqCLu17Nd76dKtB1MkaDFoyv4wGpKMWVQ6Sa8BQcB54JKtB3Rn4BckVJ7M733yyQYBq5ksagS7MHD5XC",
  "key19": "5jA4SMZswgrstQkJtAbzHPUCXEjgfY5jiG5RaVcnajEdKDNF49bNxXKbeQFJDxSzJrQg64taJUHQEeMCgz2Q4Hqa",
  "key20": "5g5LpbQu1obVDkknKVKmssD5EEEU9H7e4gQnN1ta754HdSdB1PgWKPeU3iL5cMWvN75FYo38U6Dkgqcj4ia67bVQ",
  "key21": "2gU41AVKmCndwMhc5uwnRYW1h4pvhLRxZ7djjSKRdHNrmAbEiixKoEaeundWu71MUSnW5FuG97R4MxcYmVPBZrwZ",
  "key22": "NCjBqFH7EHwobgLrvrjohfUKv2ym1tL7SwCNqJxmqwMcEgqzdviYhGSqquWQoZPtQkaBjxAQR3UbN6gDqduGGv9",
  "key23": "5DajyNHLqKD9juao9K82H5AY5nKeBNx7W3BsFPxfQEK4woykGFvVL2uVbA7Vyk6TS7AdJxBoADzSKqorzciYmtgM",
  "key24": "54zU3iCsGjtZ2iV1XLL5T3Kx7kysVjHS5M1A9ciKREAoZeSfX4UoHG9m2dzH1eAcZ8wrY5djiy6fvE5RVt27nybM"
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
