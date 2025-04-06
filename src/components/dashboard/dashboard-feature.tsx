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
    "2vHUx6MFAMHkHu6F7gbo7szp5K4qTuy6Mx1zN6K4WVcmwkTpssZ4JjzAbrLSTL8L9sDyW4FkHCRyQdQXGTgZ9XZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ufYWLKiAWcpHQsi7mdsQYSEwwpZEtGNwjNJbMt5uj2iekWpNAzV44zVai74MZAfiq6MTLg7tuoh2sj6DMuUjpV",
  "key1": "REES5CCQAjTMf7uGt8sAF8kDFmeocnfdcLawEXU2nAHt6NJFaJTrYqoxr3y4XV3MPbpptA6chEsqM7Y5TqRVG7A",
  "key2": "5KYxRncWge5e8Z7tBquK5qUZDDj41V85BhLDvCPDf9G7U1F5ckSQ4V6rpjKf7MvNZjiXEnXgXZAcFtzdwMRVw5Je",
  "key3": "3DP2o2f81zdFzP6ouFsw38Rz2tGj4mxGiiFvx9XAEsvQvFLBZo8kJLGR6Q9oQr3R4uX8tWkXHRREea4MRuCrFh8A",
  "key4": "45bwmVqPeTk6B1pkPjDUBwvduByQgxhWh1nTgpcYV9oyzrtkvQ6B7cx9rebCBEvEomcY3Tce6bUfYTKfpnExFL49",
  "key5": "5o84EZSrzk4ZNTgpDJirf75m1G3AFcnZbH8LVLpa3MhVWHPCny4AF8E6y9ZJQGkPQSoViBDZXdV68mEPyGewgNRu",
  "key6": "G2kRH1Qcd1tZDMjq3t63YjkycmctVAdtym1ih3Lnqbe1ePZrUHjYJxVCrmV9vg2TT3EScsp9CVQhUQGxvFLseBw",
  "key7": "3Jz9CUBKr8KMzDsw73kq9Y1SwedRBA9RnNXGKJJxeSMJQzSgGNK9QXafmkUWKFT4UedSWXBawugs4Aot8AUto448",
  "key8": "624BDCFyU2QYPavLGKcsZe31u5RcMqtU2CkUyjZ8u2Kn3oV41ZXvD93Af9Z5dkH9xMeQsxrnzCMAMqp3toPGryka",
  "key9": "4iF5fgdgHBtY4gFz2RppPy3btLwu2uP7ayhSo7Xpcy12xHJqZLBXgtkNj3EacWXDce7ABonYrMA1LN2e9RsicGLU",
  "key10": "2E9MKxfyQumwXsaGuprfwzUKwbMbCVK2P1aCG8MGniH2LspAu1tvPfmXzBbxZXwSshZvh93isZrQybyAkUnwwyKS",
  "key11": "51hJ4gow8kKkuLJRoc72yBv3ToLdhuZzxLhVCSVuBM4Ekvr7knQ4dFuRuVLvqDJ6U296yDZzqoGAhChLFUEct9x2",
  "key12": "5x8z5SaG6te6K9WAXxEPVdDMMUY3YUeTLVUDES2LaztjgAWyeTGhUp3vAPz4hijY2C43ApfUDc4FMghtw5vxT1hx",
  "key13": "5oDFPs9GaoMUePY5qFEYogbw4PV2T5tDbVkfxSvdZpAD6yVb6bfutAzvWdWf1K3tCXEkS71CKxduREPX2Jke9Jdc",
  "key14": "2kZ7WPWqjFna1iWsQpNkarKcyRWJgjYC5xD84219zTtTJQ78kPcSkzfkWKHNpcrVzVWCeU95B81eSYF837g42EbL",
  "key15": "Qg8SXEA3TuU9u4RCvWZomtxsKjzcPtLjLL3ADMaEJyij5pMu5hT3MDAuYmYi54rEwJ9T9ETM4cVHuXRaRQZSLKc",
  "key16": "VGmFeuvfs4CrBFFhAD7AjaYZm1PC645miW6HNHGfoGLHcRYP7vrKBGKtor6j9S2CDhSAHRfvxa356cDg6oBkNfz",
  "key17": "4K5mAECNJ2D6G2JJk9ArPENFzrEzrbzd8Rbeys8fAAE4HG3iz8cBoAAbvvbt6iWFEeKauD3h7pPNobNU5EybqibD",
  "key18": "sPJUmaTiDuYin3SmhEkVVcqQHBWbKsAWyqfxbVsfs5rKsELUn6uUupBpDvq6ueGiPrCNUPEezfLykLV12wkHa8o",
  "key19": "5CoSAaXFZec1e4Lv7Mofzb7uiKd2bcsDVik6iF48ewNuizRFxMsSnGQEkQXxSXut7rGZCS76iUkgXKg9PQwLwQrZ",
  "key20": "2KJ3odaJzATrKckX62zH2HS3iDP6zyk3N4NpzX4Zde5NChd7A7K8Np7fW2JnFaXT5uX1uBe3fUA6dJBCUZN1CQVg",
  "key21": "5m2YdaHzqd9DnaNT672162q1vYQtj2AxNPvTw81PRULrEEd6tng7dMDufk2FC1BfuCS8zZ9ZqD4HMFf2ME3GbYNj",
  "key22": "4NcvB1fK3WfBpndFwSWEwReUQNRzJiFhEMQXHeMzPeKEmdDPz5PEJ96YUkgWJNpuvyfZrFxYBHd9Bxxbbgq4GoiS",
  "key23": "seJbULktTwMWDwwjjad9WHefKwAHEksjnPA4nP4JUsL3ySZ9huoA5LXkdzhdB7pL5vG4fPmrnFPrxkiYNfy1Ap5",
  "key24": "5kQNpm9Uo59tbUtHbNkQ2U3FKEz7GKB1nd4TdZZjswvpHhGgDjwoCVzWHtpPy5wYffxL4ghaSaKFqeFU8gABMLj6",
  "key25": "jPCQGfsetAtvsoQTnCTuWbZM5nj61GVSoBeVCv1eXJMDMk5r4Lehzd6PZrv8vPHC59RakF29BkdqMp1YZ3h451q",
  "key26": "3ZBFd3sZbveQxvhLsXW4iYysjqhbvovjPkXnFD7frMwnj1RJUUCSAh9xWBeRbNH5sm28LmCjXSPf8TmUZS64vt2z"
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
