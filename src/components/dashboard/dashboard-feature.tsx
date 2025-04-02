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
    "2wjLzUJpTxEZ9gk72hS8MV1YgCRpAoV22trUJArRgkkKKwN8wi5u8eCnbjazNWprTghn48VyNnxNLFbLHfJLMWPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Zuq8TRMXcV8sHqirvwPxWQmyq11xb4Ag2uajekWPowKFW7xyM3wEeZHqwQ1ADaL3m2pELqGK2ZpLqhiNExseEW",
  "key1": "SnmNK3rDXuwMsBK4ZEH1jMg9jwKUor8HmZeiBCLFfPWCLXSrSm1ASZsk6brpzCpf5nbzFiqXDYeNhfdVedruT2q",
  "key2": "5q7JQDP2B85S4c3it2XRzHpG3b568g8eq8Pkzg2CSUY85Qq8NhpKHGTYn5KVfXCHZQh9qPKZxsmijYS9eSBgCGoe",
  "key3": "5dXqcB2CWsCWuXTE37FyMBMerDY5CxSCSbaoypiwp81tMD5EQniioETxLfn2ZyqtTqLhxeXPNs9HQThMyGBAcyoQ",
  "key4": "2zQxT5PXjetja3t1kzGgibPFnmKEawfNuJUjEP65tZPNaAuNEpk3PgY5pQVjYdJH5mxnohkH1wAEDYwnA8b2A2Qk",
  "key5": "4UvauT7Jpo6ZrgpPSqKkQXVsZHQ4u6KEmppaNFrVWTQGnkokpcpktLCfTT3DqKoei8qozNYTVtMmJ8DbMz68J86r",
  "key6": "5noUnSeyFk6sYedW6xFQST1yoJnGSNd9rV3Z35Met1FUtFgesT3mU2kV7t9cTf4ffr7ZKViLsnWyUFVEURVZHxPM",
  "key7": "2ZJ8BgCjiU52PamjquyFRBXABY5t5ubpXkR9aJBuTVytAFDGkWbq5sTA7WAjNuV9nBMoBxvMJmAR1VEPBe6mYxxp",
  "key8": "4svsRNxBUyYpBtdzhAsxxCuDwCBRRWJ7Gz2kYeQ8DeVWkwcAEKQexHjZHEvpHXfFEVBG67gvvBsjn3jFQnzgZpGm",
  "key9": "25oy31NnMQd9UA4Kpou2p27jFKwRgtJYnfkD5kudBF9wvJywVbCSBJ33eKdgBP5YPDQCxhPKoviFrTuyAo8srZxk",
  "key10": "2pZrAjHw1DnwBpYW7gc2kgyx6X1GoS9KD5Lh94hjmKd1QbEdF3h7Vab9iSue6TSg1KLypYrJVeEghMSNkFcNEhAj",
  "key11": "u3yRKpMDAGCWWpA3SRqctLHNzYuKh6eRZgxpANcSzHkD1cRUvnyz522Vsp6AGFAcFzMLiJZcdNZPgHxpWmBRczL",
  "key12": "4WnLF8rWx4HyhfSWRYRgChQDEpUHAFLvF4yGYx2pLweNyVvtkR71uNeqA1TeCbzid5ZVfTx4PA17PNKZJkZahkuE",
  "key13": "4kcSpHB8uQbyh7Kowu4TeWimVapjLfy9qw4SU9RxpLT6ftj3SzFWGUKyWV6zLwVaWAyXSBVMSZ7gMDjj8NYfPkb",
  "key14": "VePxqSMnDLoAWvxnF5Ft9XUJTshdWB6Jkk4LJjo2RrS8rZ3ynadsfnCF8ePt92i9E941vWrKnFKpoTmK1SWBcHf",
  "key15": "4dxYQMB7pMQgfsrPAzM9Xg7gxCRprYEJygaHAzRpzE4NXpbCRpubigQMEuNst8y1Akjr4rcd3rpawo7caLmxTkm",
  "key16": "5p5Vob98FaHacW4CKxPU8qQvQoJUVhHJGAbvdrnV9cvDpGqXdRsUtWuPvHRm24AsxFvQGx3eHRNmUe3WX4Twf5RH",
  "key17": "3TCbUsRKRu9RQKmvLyHjtj9X3DYQzo38Ww6nzL6F6uto26a7HDhj58XEsHapxDwBFLcdZVFK56w4s3N94UFE82Qo",
  "key18": "23Qm2qcnunax2Gyu9GZfXHJEnawnSqCFTojxvtzYNc3hpndc6HXRTeRdDaGTcBUB5aTVQUNzVDFdVFacaJyC38cG",
  "key19": "4CAPBjwexs4aAC7kMz397PXJn4gjgxikQM7pMypEWnVKG1vnBgprGAtA8pLnbmQvf7So2gcNii1wqo5aaSTX7yLz",
  "key20": "44gJot9dqkedBjBdx1qTozxy1FzB3miCPmjCuPFTeXdTVhpndbQYaQ1JyUewtGwXjK4WNcppQhLTaLoeTJiGFeVQ",
  "key21": "31VjNvJqNt2fTkS5r5AogvasGiR9K13APU8jdGwm779AvQK8DjmsdU97MUzPMWcYc9ffRPcpCGchJsV7ANCNYz6W",
  "key22": "WRhLSEX5mfNQrz8eExNk4ZCkJnzwiNncZJUGXRjCmd6ZsngZ5r67X6XhSnWtYfYdL9avjUmRB9XrSyJcCBw7zH4",
  "key23": "53TFvTuQqGUCGKRvTzWkLmxSuELmVFeUkeL9RxcdfNi41W5qZXNCh44MBTbzt4Zz6mSvgB8GWoZSTeMqbQXDPbGp",
  "key24": "32uqHvFy6vFMEPhpwNaNoAoj9qX9bSAFjH3vE6r9E1toxktq3SeARgHSwr4Evy5ki5i98ogV8H37MQpY3eFpB31N",
  "key25": "2ZJKf2aoaj9Bk558fcAdB3Jv7Th3Shox9u9Zz3QSK6ksDVVGANJasA2NXbtPyUiiLk4nGT7GueB8KaARVvdTqnPx",
  "key26": "4skbinwaqtLV2tPQxaR8KTUBpwfVEwDXRFPsBmgeySxhCH8UoZMPnFhYMj5T9yUEYdhi4LB4xqGCBMiSVLEx2qLJ",
  "key27": "3fW7AtD6hhKMjw7NMCfSpcsiCEyPNq2nv9hY4xZM9h9dfnYeskqKiXRWcqxrP2RjgZvqikU3METpxnGokPUotsUD",
  "key28": "5BPMjTW9Eiex7YZjgmVDGau2SZHhQ7eDgPtseuUf5v7MijxuerWsuK55Ltr8yzHx5rZcE8BbRRYKfoJLpGDaE2vh",
  "key29": "m9M44vj7PpCmKq4kGWKQGC4LYt2asczTn1BHbtXrHi1u1wgBMHFsck8cfvpquZ1iee4sBji3GyNy3WSA6v8SxYQ",
  "key30": "2vngXmeAwcDv6kLp6nHdsMiVne1q9EJwskQtkCyycm1pcQYbYEYvJbqapEXPhPjdU8kxpyXjy591XMhhNVtYW8Vj",
  "key31": "4dWFXaur3btYqhSBc6NrSSaP4oEVwBsdv2m8i44eZK27TpF16vyboYdSkpiChm4ZH1oG6wRYfikkwP1bdezCDzDx",
  "key32": "228ZpMheoqt3WBCYpnMNT7TET6VvoT2URAMjBdHXm3gh9rtGmjeu1zajdcTBT4XBK9B1GK62j58CNcWTPtHazwNf",
  "key33": "3dne78fzMCr8KfFLGdHa5Zo4gD7ZBHtKqWaU2uH9a58FmoUvhvnmzj5kUD6LgM8t4wZ8Rz1L4J7EmqV3h1YgwiLU",
  "key34": "HLPPg2ai1tNQo1h4nJzA3rgkg4UNe56avfva2cJCR8JXawmq636h9dz13saSvdUc8L2KWxgNiLseyAoVgzsCYAV",
  "key35": "3C1qBk7DH5Xfc7Y1cqyDgcAYPVZdsgngLDLbZ915YkHcPti7YzUaFnpPDLioD2RnKEXTsMzACUK2oicaHPqqpu83",
  "key36": "HgNpcLgsFHCjFV7c9hZRS1T6yU1Gg2pb1DmdTVPvLwyPqBvNtMVsHQKUGBEtGZwhDVsTi5MatcNGXswH4cpdKxs",
  "key37": "5tEcSecF9deSVHXK7DiFXJivyNnAep18ZZ8DfJ91T4BDvW1XZbd12HA9iUXciLxMQdqo1cWBZhpivy64zf9TYLq3",
  "key38": "4sRv3LSU3h9VmpmvquVGrRdLMgCNEZiD1pyWWfzc5Km1qPmvp63LfkSUxQyn5Hjk2inDLtqzPC4x8nJLGiGTA7Ut",
  "key39": "3tuwjPYr1JpKYaoDDs1kNKRnGrDzHhdctKeRtJaVVR754USRhBF6i7PqvQ6hd1FPoX155kzr43S7gSCUvNVbyhqN",
  "key40": "2jAr3KuQjFzH7qwGKF1bbYJ71EvcVCEREE9Zo7ZcH9NipmbCt75SqcRMzBwznbY5o2HmVPUCJEXPdWioHymxnMWJ"
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
