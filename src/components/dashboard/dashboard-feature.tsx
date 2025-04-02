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
    "63F9K4gLJDyea1YgGzfj6MM6TnTxWWPxRNfhGwGq9Qd68iZD5dN271AARWL6Do7ysPyJp2cLre8tVJnCY2yCwitZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yAexr65fuQUgG7P8hrLNk5B415i1UBvoF816VMYk4q77h5Q5mQy5TSmNp3dJAJ3vYqUJpzqKXtTJcgmnQhDhSYc",
  "key1": "2qNHyv1zyfWtJPHsXxKKNdsqkgwW8mCu33xwsgbWzc4htvo8TZMBJuiBZhCn9rtn1xdTRx8rFjPbA2yGcp6Fh8AZ",
  "key2": "2yeBufqNKETyrbEkckoe4NPBuCZm9JvsnNZJRT55onpz9oMmwYorkJTRzXLWRsWYZtJ7r2Vft861CUR4Bosheimd",
  "key3": "3opYN5cYNzZCyTrTRR21w1Fhk3ojRQwMcA54nrH4edgYfG75DzmJSpbaVZub7756tVeVX9Hhkhk7Ymq2tFE4Y3bg",
  "key4": "2WVEMPTPuQSo7cp7RNVmKDdbhLUq4Cqx2Tt6HVemhGnwNZ3hGvzNNxdPEsw2qez7QPgCQZ2Ve1esgPHuhtMU7WfQ",
  "key5": "3qib4UqwWcwBVYgpUHGpERGh8JyawYzBmYXV3yijC562BPWsXQ7jp9SihvJPjnBfruusSpXVwKsHEb9WwHHPn1HK",
  "key6": "4GZLnUm4ADrCPySwDcmsj5PrVXdsMWJeBsKUbPckqJDRip4cut7RixXoFTpEiXivwwHGsm5JUu6w23Y8UzxhF57m",
  "key7": "4m4fkGrcmNGyjkpiqLBnPaH9dLhsE9zr7yg4QSyyXS3sJrGQksghraqGLF8X5E8ZTpRHN88JgA9DeysC6fNP4e2f",
  "key8": "2gBTGoMCYsMz527fHsFyLh2iWeDgnRoE3abqnwzPguuLNwRHrv1XuAx1s1fe3Lx37yjE41oxV7boeSb88LZhBJF4",
  "key9": "5DjyrVovodqqUTtEdZq4YDYL1oRz7HLZez4a34eJDWrLb1JZCCxNyMAnKzXsmvPNbdBP8tJ3LWQm9Xc5JgqkqsCk",
  "key10": "2PgMwadrzpfH1P1Q391UpG5imqq41hWkMBySzuPX9cJ6eHL8ke7wvxk3bYSmGKiHPnxdqYBh27DjLscTVSc3u3Hn",
  "key11": "2ytBLxrGemN85YS48Y3QU473nkKXSZR7DGj4ce4kQ44kxQiRShyVbGK4LfRCfMojsn49pahApRubGwTzvkJnV7Kr",
  "key12": "2CvfJs4p6ERmGAqd7XMjeXPBrHP5XgHftWQ4YzSavkjZxP8EdhwXS9K6x7uGLnsyDwFmJSeZCCyXgJbMmGRmwtT2",
  "key13": "4k3QjG5mZxpG6gXt1cykmwrkyrmL89M9twaJKffUrJNcki9QBRCZhAHPdDGjJ5Sn26ZNwePCfJ2WgCjJXXUC34nk",
  "key14": "598ULihoYZx7hDbWkaSuNxNL5hrz5FzXaPQAhmEUek6wnePeAbdXCAXN3uhqLQcmyLnG7jEU6em8nM4xyn6fzpU4",
  "key15": "4sjga9WdCxUX2YDXSUnyYA7ivtdtfNkSbhkJTh1pgg3okWQy2vk2vpy5frdmTZPZkdXNKsEFZZ239HT5jEiasyDm",
  "key16": "4oLUHW9naDC4KcuFFXsS8FQTbeYKComHZTm8y6aoehjC3LA85c6FW6r2ZXDgJd3AtRaWrvNiJ6EvoPCfar7E83SV",
  "key17": "YifHH16xTSWNbvBMK38cJqVMoy7GSXNeCPcNAmoGRphupJ766uAs52RGrzaVGFwtS85euzSJQJztoNXPnoR56CH",
  "key18": "2x1Wa16umZxnS8iyMmi8XmUpMDT9LyCvghfbsszCpatH8kweC9VcZRoC4NcrW2ifGdNd7W3Jn3szJxP61fRcTxoW",
  "key19": "49wKA97UrXJkPhqYL2LHP2MbKt9gDnbag5UD1FvSUsa8CE2sXNCXAJtLueuvEvjMin1ZaNdiLoxJHtntRAuZTpuX",
  "key20": "5dA4q5cH4anCcRK5N7h1bXNeUiR4ayoPt9g4vYQwMu54ncLFryw4jYKNgh5PV9jz4vjPgojqXQKFBEfV99CLBh6E",
  "key21": "31FMzeYHtLb1QhuGwt7cLc6WjfJbqNX8WNab7SrDGJqAcKceVUsR1UhT1ffTia5fSSjiV6Azr914rKoP4RkQhmsU",
  "key22": "5mFJDd22X3afujzLdGqyYbMsS8gpzowMqPjjykzgXCZ5HuhekcXPwwKFVZbeErkV1ayumXzg7FYKAyY5hW67T4K3",
  "key23": "2afajm3RN3VVtqd61J8izVRAj7CZFt8TP9Bpc2swoCCdzzV9U5DfUda58T6rqwtFXr5PF1uqbrFq3PSrFzV6K5E6",
  "key24": "ULC2EWHfse5QuE8e9QM8GHvJjSvRc5my21stmvY61v6AR1ADBrHEMaqhMC4nXFwpaUmhGctanmKfuQLqupCaGsL",
  "key25": "3ymJRssiLEDi8g4MoeVkZbf1u2fvvmJ6vZCABBPbWw7qB5F4USM3oicognxgdPbENXHWGYqq9aikvKjcPoaJwibf",
  "key26": "2aUmFDJNd2hYm918CYbDCpy7uAM4wp4NRSHwbnsiYrY5qF6aUJGntksjN2Bdd9VeyLmP5FWNiJQZKNeW4xUHMWU3",
  "key27": "aUgxGD2eyfw5gkoy73gZs3sjjwNQxQf1bYEb1rVtYzym8BoyKpD6SmcmRtsZRy9KZx3G3APsSh6M8WhkCRfvUd6",
  "key28": "2nfyqbTjfxfEoZuwsqRo3sSusXqngCDfsaLwDv2CGwAjbvGyLQKxzwiwxG5S4LsxgoVS5nTkTnAcqSfy5HTrrejU",
  "key29": "N2GuTFzxZBja5fXAHvhbaDpZ4yRbxWnayRFWZFjg2gpUQnm6jSHLUxRAnC57ZTpDL3eCzexHeZTvZuyfPKKum8v",
  "key30": "4HvNv2PA4DRgG2BDVxnCESC1Jp8fT7nD6YDmvhQZxMrvL7zf3Su6J4WUfBV4vjUrENSd9NTF2v2Ew7ac4e3BpYP7",
  "key31": "3LLJXHEPvRrKYFtwJtVPjEfar4r4bov1mfkYnE7NZZ9GLzmAVUzW1DjyeaUm9RcXGJ6dgEnD15hgCZi6x1ctunfv",
  "key32": "5xnfRpbSECPesQuZz34WWMs7VyNchKSus76HQSqmG925H8FcYqSW3mwTM7ZjvHqQjzT6TUCwpW8rLJgtTB7CYHFP",
  "key33": "2gVK4AkFyvKKmzJcYhVSx86bvCFBCAnpqHuygrMSSfdBXdP3dTMcEfSbJ9pNt5wExaRZgeXRMapR7Jh7iz35pZCw",
  "key34": "4jewfQF1p9sBFneJ1PhRSwu2h7GTodsVbFBg8JBxMZTQ13PwxtoFUyAvaSGuvPKs1ZXpCQ64cpRhn7FPkYp1C5AF",
  "key35": "3xjcMyckXqU6f2LCfNynGxbjhkiaXCA6Q3w3f8xvB9wFB6MuJr1HMtUD8DvMaoa5eHWobPjuPGKXBwhq3VJpTPdP",
  "key36": "F4xVThDHKjvNdS9LSqAcufUaaDWSGeqksJ4KDivbdhoPnno5zXrVa9xFsovG5KGrwaKudogFzbGrd5o5NdVfk8Q",
  "key37": "4cPum7Gd19Tf4Ak7sgPLLgLiKhuV8ckNb42YNXxsNFyFofoKCNYTDCd8or4zMrSf6U7ckY6NDBw8UNoLsBgd8om7",
  "key38": "ZwfLHAuJTSRpYLH2YGg1ywCNTkoDBMUnsShizaeqYcBn5BCbg8KREq7BLpZVryg9cxSCfmFKA6mSoEbmTdcVLRo",
  "key39": "2Ta5soPyNs1E78xokrTpUASxcwAaB93n9BaqJWSM7d3qCXQkDJVghXvRWtPZpAvGQmPGmb9Emmo2L2EQBTWF7Zcw",
  "key40": "iubq66MnioUktQ4nbrfFG21R4E5jwt9N1rSaCXffFBcbRfZo6AdWAUKEm6no6pxuBm6GByESwzSWAVRV2gNEjht",
  "key41": "5XKpXwSfYJxpucwzYhUGTsB3g5EgX92r25kG6aApqheHPyBZc5ywFQCpLyHvDDAaiHmsieETRFQQyfSTePWha2tf",
  "key42": "3VHhpmdHqfp3tc8RheBPo1De7xCDqHvza1vjXyX1bqZBKauetXCczud8STeqFPNU2JAPd1j7wisUXvxWBecW2HhC",
  "key43": "3UqBgiHWQCrbVV2uEHT8Nqaph4uxBXjC7sDhyauVwHPfqdtyeigu2tFnyUVQRaqkwzvoT5eKsUn2twcFzDdGoMeg",
  "key44": "3T8KKfoMWWx9G152WAY56oEysFGeHr6YtQFHQskzWkk3SRLQi1Yz5NuVcuJdWw8HvdA3UYYStFhGFgp2qABSMuGb",
  "key45": "26pUvpYnDL1hGuAAtqQkfQPM9NAUmuMeLvtGrDwUPbtViumHywsuYcdGh38yCrnHgveQvL9P74jCUxZTXUN58Ug9",
  "key46": "5T7Lo9n8JtCbfkicMfa5mm6kj2iPsNBGHNuJuBvkG4xdyRu3o2CAN8egQBe59ETjQKBQyTDC5HgojQx1Fi6TrUn2",
  "key47": "3G84RX3FvHJiMjmpvUZWBXof8JjMjamJBxUtC5AL43uPVgqrLdS2RbqAJwEGmtdRMbExfocngFy1EssY4vEFZhB5"
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
