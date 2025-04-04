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
    "34CdnEYXxyJJUdkTKEvENK4mq7knG6i983zerS3XvBYHWTqvLiHwuYafS8GhTuqoZ1ksZndQs9bVrin7SXDkP6Yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "361aPpHVPLBqq1eZtxrbBb8G5gAgvzMUi1xXneNzEyUZuuRfqrBgjeHvpuZjngSoAy8ho1Bm4cWw33P73GeqB2uk",
  "key1": "3JT2E3Uiqnhgewz8k7HhYs4fjuTiDbULH9a7JicQULp35Qw41N1hRei2JbearzYg2B2xCwvMSVkMuXRKFqERvYK5",
  "key2": "2j3a1Y6zq9VCyQ6jWYZVczc1Q9KBFqLh2QGCmn5Bm6wC5svfSV7SwmreBtzzpu2w59MtXC7nwAFgArmZPVup85Uh",
  "key3": "211toozvUxExMUh9ZgcyezJWp8bv9tkr9gEEKZB2NGd9yR7WKuF4ge1LpkjhfJswMQqDwKkXSd5wzHbzbcu9ykMZ",
  "key4": "2ZQdXGEb9MJrZJJTQ1kvtQYYm4y98mnoxnfrfCJzMzQxPD7qaDBFfLFCTgNdnANd5Rkg3d3hNJWXVqZUxK78RUyK",
  "key5": "2KWBChZE6iXipfemEu484JSDMMh4GjQkzRLKTpCjxvzbSPT4JSzX2SdffNRd6UXRuX12JXSvWihm4MbFcML42xPF",
  "key6": "5KqRNXujziVYvoXXAfWDbeRA3pcHvKSCfFu3CzbxMLLCkkVcfuC6Mt4hnNwuW2BGXTMQ8FTkbeb78zuCqVvUJ23x",
  "key7": "4Dand2YqnZnoQhmN5u6Hf6xkE8f2M62YcUV22wUntw7EiSrRXHexexQVPbkf3dJEFXQzhA39kyGLxqe8GFYbUsCb",
  "key8": "3AkY4Fyw9mEE7uy23tK1oKHKEf4bMAMvpaBv1XmwNKod2fwKYSktQrwM74nfTxVwVnVrCAM47fuuxzQpbpkKKL7t",
  "key9": "4qoms83CbqETQgmxAd6C1EVRkRpRKvuUiM4GN8PShVeyN7dkvfqEjvsVqwLq1vqZCv12zwdudX9X4FqSAMLTKQqP",
  "key10": "5oj8hf85Mgp1fikkoi5cSaKvG78JzDhEu9UW9sCDx7urM6DgYgxu5phM4pWg3L1DXxKa6RB8Z87jyVgkMdcW8a9A",
  "key11": "4iCzJhHGhnMBJBbqUf6xqFi1ThJCtH2kNT9M6Af85ijuT5YXognG7f2eCSE5VPTzY35Sw7FoptHj4rRwadBSY8Rf",
  "key12": "c1ssdoRDtLV39WsvGgpobMh2PA1KoK7Tx2xMnh1wcaEhkkX1UQwo6PsBsq2YPhBG1JNGYcL86DS1hdLrpbzf4Vq",
  "key13": "2T1LiV2KSMiyroGMJkuhVaQt9WbVLo3QhAG5Xc3asqQGDqPSgcKTM5643U6sxaGJvJdMgphjDbPwYmPUgJ61AW1x",
  "key14": "5huHcAtfhvMShWXhSJd9JyZEUxuyYReCRTtRG6HwhP83uC9gAzGZozE3byNRyYPVzEPWquKsa8WWyHkadt3DiLci",
  "key15": "62jRg2ReDJBPZy6RfRJwHjn9nWPtYRbh3fs1vmmBigtvtcXfKD5wM78mc8LcDXXDvXpgRCaTyWBRLgpw31XCURY7",
  "key16": "4ZefwjpGqAse8Dgk9ewEan2EKreNaMfYdLwkpqom7jbXa4DfxRqibQw22AmJvXAijsuZTdvjVe8UXm9HeNoDnTzo",
  "key17": "3hwN4LpUNFyrDPundzYt5f8um3g2n3hzK2D9LT9GW22b1RDjpoRsksFM46okHFrAoACYR9ucikx4mEoGH3MZKGcy",
  "key18": "yM6ivvcsbYf3M7KSwTgnEEMP73nCogtDmkgFAUAEMqRC1aeoxd8VrAeYVnsxkz9cJmrmejnckvA56Gm56yYt7oV",
  "key19": "5YUYDDsALX4jWESrMnKrLi9tUF7mR1bbHig4S73upuPcEoue918PWzU1tGZ7fQUHs45niZb8GsueZdabxbcdvACG",
  "key20": "3k9qySMivdLnL9EYBfXSc5yemicR6PAAWRaG9SQCLUGdZrMQDTKKbKHBbiGPmi8wjVxmDMC3CC4TD9q45ntqAjWz",
  "key21": "59mXSD5NEosjmfcFdSGVsGkWFBNiXc4hZd5Wbs15MvVG3dhVsBauJDWgEA66V45h1CeKXSakZSGte6u2zMKaRPNT",
  "key22": "3MEEJ3S8gjz9B2HxRv6TEV6JdXFSazaFKH7PbVmmgVLGDjSDwFUuECe9EU5BtRHDi5H4ASV3osR32yyMrgr6qEXK",
  "key23": "4Cuj8xGLt9krTBBSzXiB2Q2DBNN1BHjXVbEeTjDRufW1oS6EQnsAHxWr9ezuTcS1pNs7phHyshxrzTYYtJ5bhGNf",
  "key24": "25PhyhjSKfe4yJRvPw6c6ekyZrra3YUAnkYaSCvxNEZDKQUtoYY9iKNfZBDtKP7dvbnEBGFH773AvzV9QEUJBNbV",
  "key25": "RCJaiiQf2iPgyb2mBbkE9kQu7Y7Eqzbrm66VWAny4DXufEboWdxubegGYtUQivgkWmJJW9x2dTJ9ZHHZSRhGghi"
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
