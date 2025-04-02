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
    "4TA4Jugn365GaRgeSmoozaHAAopcqrFJ77TnLxFn8Lx5LJajka4hYFbQTz99H3SDsC9i2bRyVbTLXcSNPZtK1CDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MARDEAfJzgFHRriY6pSc9aF9WwbHMbGtx1zNTq5nWiYxpUFNpicFrEHLRvPY5as9X3si1EPgoXrD48xHDLC4CUX",
  "key1": "5ddG5PYGVPoS5bwr3szCixqcoabTy4j2QLqQHAu1LhVH695Kg2CXTcTaBZ1oz6HNAoQJtzj1fYi5WyNqRQMg6FBQ",
  "key2": "36GwMT8WmCW1pRM3FF8AcB6ScQTbzhhgEZBa2U1Z21XZbaWgMH7jP1aHWhNqxnn7soCTDZv6hRnMuXvLpc2UJ2Hs",
  "key3": "fBXpb8oTG1vMAxmqMVQWTc3rb6cPnfFKj5ajAHSe9pjMZXCvC3Dg96pxgRVLVZjRr37DXPQB4uTeXeswvBhAjNm",
  "key4": "4fqiavgk8s7tZXFRjkR6vfSbSfjeJEWwdJ7vxEthEKNpoijiFj3WwTZYjPCUbZEkYLvNwjeS1KDSut97GnCx8h18",
  "key5": "4SqDLqgZYQB7LsmngJgYK924ZKo5Tr9KeduTsZ3aMfR54xtiHEdUrtbknjozJU4NEit1PzZixh4N6JnUs5jTgws3",
  "key6": "wZ8yYjZA8ScANcsg9H6rPnG3szDq1YboNTTLCYe4XAWLgLsoe4RwdJEoxwc3XRVes6wx65YiMFdgaffSgxEYeDv",
  "key7": "5jp1KDYxEj5Tg5SmivS1SgdxCAhA4NFMdtSqPRPTSobXweSWPDx45nAx8tDXxhcA3VJMDBV6KM2ihUQ1gM2u2PUC",
  "key8": "65J5t5hFqDVc3PN5fefLsW2bGqotakRujhDfBRUMPoAcT4AqcezLJsDcPxWZiA1Nv6UC5R1Ric5KBe5433npbjss",
  "key9": "4yTs5egcHCmDkNqV4z1hE9ihUGJWzdU5ZoVj5qg371zkEXphvwGe6rca1RRFAvDk31y1ryDmUwpGLejsBgz7ybB",
  "key10": "76aE4dG1gkampr73pX9gdunnU8AgQf4XSZE5UNifSvFVLMdzZnkuKmtjZaZXcSz47c2HkMFiAWpjRVxEi7qNooe",
  "key11": "4zxMg6HMji3w6exihtYdQHtX2raz2rVrHtXAGRpNxjYwPnkLcYw8WhQPRW8u1G3H9TXSprgkbH9aX9BCbSaNei1k",
  "key12": "mdEkzCGE9GrMBhfZSpzx5c3xv2KSTN1RLQC3k6ZqdATETRYrjPgEUY8RqZ7A7QB6K9P7SEprAqeRio79ckyd8U6",
  "key13": "3tFqknXRj2upYAG9cBFtgggSQPSSTjUqsCTPevsaPQNfFbwvVcjBtFX93VJuG6BVMAXCrRYkSaBws4iwab98KTJs",
  "key14": "3yS5pCBatdFkLM5hCobN69TJBBEMSrnXLBxLUtWtViRutWHMK3BafgY7NswS1YtXQrmNJ9Nmsif5WP5yWhAXi1nH",
  "key15": "3Zka8B2zFpmjeedNEtFk47zDDA6wFhwSAwv3ffgqxBZ7nNhKPGrPFeR15bketXP7W2gdyaRD2v3F7BW5Jrne7ncp",
  "key16": "5Y5jSRA3pEzLef4ZphKpkDUGvWJYJofoyLDEo6DRNTgAVexQoUzYtVwrSYwyVf5quYSCZGXLr8qamPtC9Q2SLutZ",
  "key17": "2n3LasQz2H2FoVE28Ug8SskdXVc5ykSobALbrpyqGsnND4rt6A8xvB19HxnptTkfPR6csSrgnQBBpVtRLP89LwZs",
  "key18": "21QLoV5CThj1CN9LSxBm2v4JybrTuypEfLMPR7mzD9ZBX32cz5ac7KfwuuvsFhT3mCMF5gvmhkZRFmTdASxVCiok",
  "key19": "3eWmdsaxgZ2hgSXfnraQ1M5Bu3bGvpBQiKpdyLLuWaezCHmbhCsKphtzihyPFy7XRDXW1anMFzWu3tVT4kQH8s5b",
  "key20": "Sn2MUGw2VXzApGGNwoiMDMgEkJS7aKTnVkwWrw2RHBBpewnpffLVNRhfWRNt6kjH8j1MTu5kb9TSohcErr1Bpmm",
  "key21": "7ran2mL7UVWQRg9Q8zWyTPeMhyVeTgmsYsANk1joFG3RFuMgV77fos9fDvUU9ScEMyYYAVr91Wj6os1zi5r9NQW",
  "key22": "57u4QF3rHCpdEErfhCscSFpshS8RkGAmJNx3mAx2WJfsRtCrpkaNwUxZNvDx4SgPdvbuQbbNC7Nr6oVHjEu7XdVN",
  "key23": "4C8eEvbNNdJT3KcityRJuyX1z5JjVUT8TFcaB9Ssr4TvRT8Hj2Gpj741HCUbc7622eQdoHVMcRsRNKDVbPSgRjDx",
  "key24": "3XPpQPhG1x8o4pF4bXV4PV5Y6JYHqjhDdf5eU4WpGDUgVDSP3irL24HFPoY3qAWBRoqL9VNNuyRZNuKsPKSNtV2R",
  "key25": "yDmuzXpxykq42bkUosaHvbsyrGhC7B7eB6eEsG5CeePFBuSbJze1JMtkEzMAWEvSwv9DGz86mToLPNKr7Q6yVCs",
  "key26": "3Ria5fum8Z7ua3Vsk2onxo7ugFh9VThviwHLHLx1BfmHuJU9rZ3Zj9xUvnuuAhrYZjosUx3BqV6FnXpVy8C6zd2C",
  "key27": "6p7GfyaqyideY6g2xx7B72USMgPn7NnhhEcxg9QRj7LJ8afsJTGjwDxgN6BQBkbzP2AZuEz3WjR2YZnyM7gD4af",
  "key28": "2CXYe3iQnM4GuZunTr9GGg3u7pTCKfeWGjJSg9YE3ZUTN1AHeY4BvyWMQuHK3AoPZpuqoWACMBqELwRxRqbGL1RV",
  "key29": "4WsYdArJBxvxSjVGNWrtBdQCQ7xeBuKsKsTu8qaq1Qo9kdjqtxWn66aQf5XfZRmvPV46npgaEBc7SLHSRCAVfEUC",
  "key30": "5jnSzWGJMueyRYNAHTNfw5KNBd4xeof5ZwZwCWUthxcZF5qMsz7pAFPiBTMcfMxeQYTew4GCWQEPV8kDijzcLtu",
  "key31": "63UURLtMQmnMkVicEZRDTedWypNCpWj2TNjDYo5H4MgAgiagPvzhF8EvrgbJDJZv4o17Vjgue4D4xfozSLPYhTrs",
  "key32": "5kusea13Xvw5NeAQvLb2yMQj92raaH6kX3nyYhNyFBvNdjibwTgT6nTRqLMEynGnZmi17GxTpgDjBYsiz5D2gVxJ"
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
