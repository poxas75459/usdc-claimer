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
    "2JYCai8aPnn4bGwGypeVNh34u567gaPtzPNdmSGq5FxT43RwXTurGqzi523Rw5sUNom33u9u9Pwc5PEdvoQTsAhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26UA8NMqAV3TuZj2bzYvYEntnMKRSFY2APWPQ7hkdRHcXy27rZao9qxgxfdyLk7XfyEaefUytasNShmNdiXr96bN",
  "key1": "2jhuTMK7pve9TGVuZM6uLvHPJgSoUnRciMVQ8EfYidZGRTSfezXc1TtzQmg19pMCvnYGkdKrDDd5u89qeJNvW5jC",
  "key2": "5Ce3waAz5XrpV4M2N456dRM29v6BKUuAdbWSr3Lm9JLEdM6emnzNMa34eF2ao89QxGAfzFpCpZgxr7g4f4eiHBua",
  "key3": "5urU5XnT947e5REqRJkEPdcWjH8A55JHjeNhgyVZRXgYUR9DimUErwvmhArdWFTgkoKLk4f3LAUh451zJHRoZ3Qj",
  "key4": "481yMhBPUDUVtB2KvswTTTorwrijM1HK1Yi3PgUG5KGpc9XCURLevtmwwLvhebRMR7STYRYQXVsS8Xie6838oeb9",
  "key5": "2PQ3s1Dr6hVtu252VhVzmk9i8RaLSw1KfqHfi8EHFESgxurY4xQSdR8XbNefFoPC8xnmqj4wGkpEPVyzyj95rgkK",
  "key6": "5pdSbbNp2Scg2PtQUUPPQYbDcdh1Uxvj6isGGHHiyx5WwadV1wJ62WMLMbHgTUqCjArrF6RWZ5ETeMdTzCdeAcUd",
  "key7": "4SgD9NGEDrLtVo6p37wU1VhXtbgKieMcnjzyoELrsXjH5it8mjVFsX9mG8i5M83y8ViUBgEqMcg3qhHfNkHFA5s1",
  "key8": "23cmr8pvbRQjMTQJKSRhE8SsNZCYJqPWxzbym6ryRUZykqZA4N8VbrS6f4QBB67TJtrbb94qcQa26hJCBicgPbok",
  "key9": "3tLCPdr5BmwsT9DyrSvAh2YhTiszvsoNWqo3cfXJ2fMxrTLoTdp8R8mN4fM9y9xaySNJLRj5Dww8nJgnATQv9BSn",
  "key10": "3VaThpzizxF9sTaZqeEj9ndWPhdvSod8h8XRPcnRU8S2F1PRXUvy2mmd3mMarEHvptHASvLTV7WL5cUYPNZsEKcV",
  "key11": "Xgd414AXCvhNWtDHDecmEm6CWazXymTyf2bg3tDtCHdBA7UdSgTdCYdsYUk4JQJ7NHG9wgHBi7RM4rjDHzxz39X",
  "key12": "4N1u4zy22aRCKX5PH5krAmwGGh8iG46KDeAFAJ7hURtsyBEnaaTqcoCfc1GFETHFrDRi3kGjz7xpcqwsiKghq644",
  "key13": "2DSJVF4bgh5gAcRjxTXbhqqU27iTwKac23bpKG3PnnbuqyxRDWoT6f4uKvMAw6nzZpYSZQjaS4JWNu7xEbHQMC4c",
  "key14": "3jFwDZq6ovGLACmkFamoXTZe7q8NLsoVcjpVFnhMxqAa7Nsd31FMerpZaWSYsVAVhcFCSCehzmx5WJY2UZee1b5D",
  "key15": "4WkSbHBLaty7eqYFDgh24KRc6zib8LoNPJ31Ss8v9pR7ZxjXtFhA1wG5FY65m4dGL9zDxG5p2xoMuVukw1u2mijq",
  "key16": "4v2ydVUfLiMhioQApUA5a6r7HXNkaq1YgKwCpwKmDeJp9r9KPEHHCtkEzoooUfsurQVmp2VqBf5QuTmR5MWW7Dv5",
  "key17": "2YJ7EUNbJDvdnowCzGCk1oomDs9mR15sbjmA165mFGeNpcGHbbGYXqdDW86MWZNivVUEygUkuk3CrGX4WEW9jwHR",
  "key18": "RC9PujEZNNK4bYE2KZ9x2UPqwSijMRiBkJE9fkt3SSresCq324MPcEZ9qi36BCJJ4JAGb9mG4XxMdmpuimHzDVw",
  "key19": "3osWcwdts2RcWc3JMxzCfM2v2WFog47LYBRF1JL7teo4MidZ81WemKbEsRG1P755E9q3Yt5MKn7miSKhs2qs93Cs",
  "key20": "38eX4woRKtWgeYPLrwMY5EBUhjNBwt7ntKVB21LWv63Rqh9ZDXVBvqXyPzk1UR5NvkMiEw5LtfDkTt5DufFoAmEd",
  "key21": "qBNDQ2HpNpNJPM4ifnNRCeWJKNo6vSUz7Vx3ZGGwyuQDCK6xXJnDx63qtNYA5FcLHttrWkCGcNXFSmBs13Ry7Ur",
  "key22": "2ENskt2rgapFB1LrMdSLvnm9B8uHGT5wt3nRWWWpCpWt1yqRZuiT8A3m6QcnAMQGvDeyNn1c8KTKwJ9uShUSWDVZ",
  "key23": "3nrWTdX687dGV39CGgBsD1ZfvQhAbTDyY3KEUf3dGdSywvPeAjvu8nJT1cUUqGfdhRDtCrLUn4FGhCpivTSu2Nkf",
  "key24": "44mtLbF2zvwLkts3zRxpwexpHbWScWtN7QwBVJnEVJKL68zH2ajbrozFvoLJbeEmDQRFqof4yJXx1DEqsgYwvA9p",
  "key25": "2UcohYbJEtnmpouGjAxpndTdh4S3qgz3pTbxvt1j4mU1bRY61x3HfbV26X2dmWqqhWGjUAkcfQjeTPrEhNhXLM1A",
  "key26": "4y4G4jjAsgue2AzvhgFr6yfWTXeq4RxCVU8utTkd38o5HqZ51k334ubFgQ2rCHnqTTSgkGJaQB5BEzfc3j7FoPuC",
  "key27": "3DxLfEKpuy3CqUNLftY4gTPVK8DsuDxL4tb4PbfXHfZTNhvVAtYApZxXK3n3t7fgVzGiENZkXhV1vRPqRANTM6YU",
  "key28": "4obxtcqFrmxPPLD3GYtp7GP4mhz7mfUhJvfYosL8WGMNELUR16o14gsQQ3uCAJg1c11jgbx1isCfCm5o2eahScwe",
  "key29": "2pBYqTWUn83qEVefZWiACwGQEuYqcniBtMPMwm5PuBMckcpDerEwFYWvqpu7qfYKz3g5E7zh7sehea7hKEqFukNp",
  "key30": "4xz4nmCFKSg7MvBhnoe4C7yGv2aGXWoLdwdXrzoche6h6XYKE6DLzdBrsvgb3g6o5V6EVLrz3SvUShpDMvitsbDC",
  "key31": "zgbR5JzNJFBDmRXwtSJdUjZVEGCPscyATNQEGuVRwPFq82E97SixY362GNG9LxqEUq9tbzjR7kWPzH7idjTkcNa",
  "key32": "5hv3uXyQ5mqzCgJ6AtUVYcZSPJcNQFyxn4SYWCzLVZm8ikQoLKyzBmybahRRusLqqpGPB1dx2FACj1knqV3pRy7p",
  "key33": "52ahZT5bZj8ChyjNTeZ2DbmrnwoFnXJYi9YKBUEwVu1EeLR9nznGkfen6jYdnNCDFqZSEvx2ajkUwWZXSfmuH9BT",
  "key34": "2vRwsqJnDkeP1Msy54KiXsBhYxg9JVDimv1Wnij3fSQ3HcrgZvN2CDdQZeXY7djAR8yTDtVdCVprozmqLSqZwtDs",
  "key35": "3ZJBNw6AFS3pgC4ewQhCXYUSb5iNWyXFtMiH475zPdCLcz67TaxdE9Nx3ruQvKGUMPkekJwjfhkPK9KsG9V5Af3P",
  "key36": "5a7CSCqSuuqYousb3w9DMri6Z8DdQDCF5P6ne3QTWM7mPDoCHRW6VGKJYgYXdZJVKMeRVbGz1z7kUWQ3E8bdqURE"
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
