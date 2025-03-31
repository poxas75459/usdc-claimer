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
    "3LwydXeKHZWJC5v2cbVcea61kBLXiyUCwbWpa1wVsf4FiqrVpLLZFiv4JRThgzH1nubr2YkDXpJGXfCgmqokbATe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w37fWZ7NvARRoHjkRpecRjSxVzh7xK5Kmy7RgN9fpnsr39z6KCVPCoPZMQRjCZBioNT3FqjHfbPVEzEVYascZiH",
  "key1": "5k4mGADmdQKMk8a6vXEvvRrnGLHDCkKjdMJaQ2DjuUv9qKztWUB46mHcg49PCwRvKWoLSwPkX1cp96snf6iky5N6",
  "key2": "24Yat5C7cruuvfWqLC956bHVBMv5uVLEu4suww4MBXCPFEGU2o95cZG9JTbMHquqmZcNkvMtejcAY73YBs8GKdNm",
  "key3": "4LZDauXEG5JxKS8JPTx5HTHPd2CFqEepWFVpPCVnvRLQyhAzosLPEXDH6qu2evDA1R9wxkLon5bDutwpBuPwjMJP",
  "key4": "2fnXkdKNeLvE8UPU87KSKAidyinAXT8uzUVC1uGRvwfv2qUx5stz1KQZCWN29Un79wv5Bphd7XxAXsquzsWFTJZa",
  "key5": "4prHEJwba7iEpNNiMtjKa4iKaPZ35vbSR51qKGgVKBe9zk5cQnf5Yakp7U2CNHNUceuM99Bj2q1yNJPtZmbTSwDt",
  "key6": "49JjiMqs9kWP3yhqBrhQJeQnzrg6tcsasMjgmtQWtF14Sphmz4CJeKVGy99cxuxV5yTyGhvErwjbvu7eRp1BJ5bf",
  "key7": "4aKtepLVRWkRq95GH6u72c6WmvBWWj6XBCfGHpRNCzGm2g7T8LuMzjUuT6zJLUc6zLezMDspb6dLbB1uYnvLandi",
  "key8": "5Ego7zdbYzoteBqQR5Xdi97DWeCAgBYN6vFxGaEfE1GynpdDrZU4eZvHgSQXQGPh5KQ7LHncQSucpsYk8TpvXw7a",
  "key9": "5gtKamGAqaPiap6v8P2KjQDSDcFuUNnVtoa1vhjDJuvVtYZprD9sSbFt27nYWJYYW3Ny1wuL4VG2pVK83R5fGVNo",
  "key10": "3DkarHAYBppF2DMjUHYTGm5UXBaAfCs9gexEyHepbQZG5MHo7KZC2Ft5vjAvMc6xjZuRHv7SimQuWrW76HDdmb9L",
  "key11": "2gfFrpaceVJxKBNxdwE67Jd8ugnC1X7RL7YyQyNEtpKDRhu1fRKiJHxur84aZW4JH7SKdEfRrmSxHjD6GCJojXSt",
  "key12": "4QFwULYeVCpSnAsrWGAAo8TQZfKDYDxjSiBwqfn1UVp6LtTmoETi3tHocTiBhj5j9F2iku3MswrPgkAYE376oCKL",
  "key13": "3t85GM3K9jQbsVAoLSZKWCRGZfbBQ2VvHQBUjgxafpoMQwukMzb5M8Wb4ucui5mwH3TtzJELcCnQn3ozTq68YYCz",
  "key14": "51iQHvR6ReZLVqMeLXMrjjFtQWfkvr1gjWRjFtf7q4rexNWyafv7aJXATnSLwAWswRABforpv1XSHoSz5v8q5Hey",
  "key15": "4x4gsZWntqN35qhFzdEpkmThjxm5PiaivcqA45sVWNL3wLqfd3fiRPmd7K9P76zrgoEs4V77nU5w4AczyT6VBUPv",
  "key16": "5Xhkd2hvyQUJFWYHtUNVsV7dmt3ZMGHehCfdphL2tHQDJ19dc7t4Z9dxFNvUDaV48jhLx8JURPHs4TznFKLgsrwH",
  "key17": "25X1JvHSdrUJofGDBGma93eMxZ5FNYEqjj4wUVSR73m6XT7CqYCeh36jsRfpMzqsgo8mW7H6FseoknTjEZWahX2r",
  "key18": "2aE3T3Qnekp6mW1XUqW83DLZD6osNWt6g88cVhdtsPbf4gZjpNXQ8qmaDoY5kEDotWaEn6FN2mfvmRGvNgNGNm2y",
  "key19": "5DhxxqMqaSGJn56UuBGYKqtpgUNcc6s5BGu4h7b498FiXuw72cTYoMsMmmy2WkrFP5vwBTiqgQ5VzFWQntMmDgp5",
  "key20": "41D1DH6xnSn3idjVL1CwogSPx8Yzhx5LenJG3Vcb7DVdSieXdQUp1WmXzLs7sXYaP3Nw4PQgWGGG3RF8soEfyrhc",
  "key21": "4ooJRdtktTo2fm16zVfTsyU3d6kjsJ9U4SPCegpEgCESr9txjcmagprCJNtrfnQR9yt9cQpEtMr8iUHs5oet8hmL",
  "key22": "2UKChKUKLAr2PYbHbbE4bdLuiyCWzgxBsq5B8G7T5ubK13D46eofyLaAF5os36qcNmAcD3mcfFykQx24hy884yNZ",
  "key23": "4oWUFqpWkXtWLyrwfPqkRsKy3RNSBxNTCDcoNHs1tkyQxh3b3kqNNk1jJnWG6niVw8EGcafYrAF65cMXbJcqdxze",
  "key24": "3pYohBq749o6dASYZPLiMXUQKL9vFALr2tPtHk21o7A8ufAvS2g6PdwECCdWSn44qmbh1FpSi75XEVGJu2NjX3xQ",
  "key25": "HyucUjiFuK2AddPRmM2maxhVbSDVm9NaJERpcxuwdGVTEJMMkEoWLFbnAv2ekdSzBAsMVikTGos788zucuuhXE4",
  "key26": "5XcJY6iYZWkqCD31T29bBeeaon8SDzp6TB5k95R67SfevA5BAqYpi9i2m4V1FsUZUF3kRLoMmq8fQkVjBE9MW4Ac",
  "key27": "jErxRPXEnEuVEMkyEJWD6dZQLjSLQ9PPq1Cg4eLgav9XX3tcrevKzZkQDFGTpvfWgRkpXpFPGFrDzj5X6bwkpHU",
  "key28": "232cjV2ykZ76V17U5LiGEE8cV4m3BAuzbNaqFg9cgeFWRmmmNEyraf232VdhBHvBRCASHiCf2ujHUuCf2ateDmc9",
  "key29": "4aQpvzTGwbRtXZDfL7SJ7ha3tLbNqnsSwqQoHrXjV57UJfX7GCpwvmUjss7kjiaqhxTwhB4Q5ktGzyAh5Pu17RPe"
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
