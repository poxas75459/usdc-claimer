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
    "493yvmi7TywGC5GAtKYg89L6a7s9hiyQe4ASMR7vyhezNtM12EtTsuDhU5fHQYraXyK5WG1yM5HoX3xwEHNH2JyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21yWDGTotAMLaLpMsLftAiiiPF96T12QQ7sVTjZrxXzZbntKQSZYk83KeHwMgJ84cNirv3DtKjf3nZZTeFBQNoP5",
  "key1": "5pPdfqsqDJ8dDrFwx82g7vL9fvBnPFYdhAJ8hgxqNujFLAbSKFHbG4EX4cSAaS6rBHKL2JifR2kdnBQS5rM7B8AK",
  "key2": "mqPQEsVdjdJs4RpZUU2QDChTQZDWpfvNSN9ctr7XdoZZcy86gudp9kx3NkFx8b1EXiuHNLD3NTvBs4vRL8L1BoT",
  "key3": "59r2jh1PwmcsEofEyHukhGNFRoWNYqZzr2ddCu11TeAjhE8Ykgg2gY4QAhXETfmrMoTQwcB84CYVV2fVxitodfdN",
  "key4": "5yc6NAaAQGaP47whvdkH9wU77soqgjdse8UjMdtwqjtradserKLfbsfeKeauVa1LsTSJ4G2ZKS9XjM45i8QRXb1a",
  "key5": "4ux9c96gs36zjLvstoKzfdoFnQeTVtbCkVKSUigeRNZyYZc8Pr82TiSe1LSpUwgmdgDYGsFa34SBrkasnc9c2yAi",
  "key6": "2n7tSFtVksisKwJYddE3nkJ3SGa7CgxX9woaPziZUQ4vuJ8aLaH5m4g56a9o76ZGAyT7aUzsLK4afG9HjztmjUeg",
  "key7": "5pQ1RJW7vJj6wNYUY5ntsRiGTNwxLvYz5PrRWKvFYUZv4BHu9yRnNrkq1xFtEkqd3fJapRfU8rUMCwXrMVcWNQUP",
  "key8": "3qnc5MGA9gnQdG1rKieGuLQGdqcreRmgLJ4B7EnvRzprpdZyfZw6axkSwog38fmAvpXFdGBFk28bi8n3Jv149sK3",
  "key9": "2ipsWVFP6Ap9oLFAosUbrpbd4gUsU2SVAbCBz9izXqFyNp1DztSG92H9BZMLoNKEUZBwCwnMyUm4tTnkgW8V67x1",
  "key10": "5ifhtbgQHkhea7GLmfr1M8Ngv338aiBXjemSy7YNrdX61NZPJCdpnrMDoNeFaL6hYpwtdQymzNozBmTugSrZFe5L",
  "key11": "56yFZwCGUDfB7Ek1KM2bQTeioRsLUt1cN4yNityqr286YtT2yccQzMg6PeEEyFNcYpA3aKjGPRC9RK3fu75AnmLH",
  "key12": "28UY3oxmyuKP29HX2WRVKHJcfBEroNWKpXp8zhdnh5w7nnsWrubqaiGHPgVpjJUY7iyggkPc41gcKNV212JmraRY",
  "key13": "3zvwpdi3RHqcv1btnYW3pg5mbkrPgmDbiueFD4zqdQAWkjUjEpcuP7S4AYSva5Vw5wSosn2KJ3xuqFxyqAtFDGTf",
  "key14": "2HjYLSGuviTnuXEXFnyWd7sM4gwQZ3qkH62ihzeNKRghqwXGGqA4HPwAZweZuoZMn4zruXrFyQSa88Lqqxam5jko",
  "key15": "WhhnsrkTuvDxtsh5azH8apBivWsRpDbuYBvQkdKzJw5cui2SEr1rrDeDLRmVXiffSiV72N5t9V1X8QkQhsiqb83",
  "key16": "3UyaSXhn7ydhwXiWQGDSmwqc94iE8wrKXwfFxU178BChxHbQVqsE3MyxfYiVBjtxZHuXt8jscSQdUKYGQn6tC7DJ",
  "key17": "63q1oaAU4MdYbojEV2SMxjFp6A9UsMq5qSSbD7Mn42Px88FfKFtiLetqH2P7EoVP9M9nntBAdvvk427sNzx54C6f",
  "key18": "2qFEAoruKdtqRMCPKv9HXsv3R4QcZhbMZJbsKCzK9oBowiCcVPHQHnzFoyEv5649qadoAghJ93eoH74TCzrjCYST",
  "key19": "33qp51V9grFpnLPuZcRCLLgjXRaktQYMuBptxoUPEWdPzEARRmExMJ88Xf1gt5tS1uTXdooEpQH3VP3tWsPmNcVy",
  "key20": "EmGgjL3cczxdjKriXXr7wywEtsmYuBRAo9tEJBi3Xt5TYJd29L5jJUHGT365upy6unt4y9Ux1KGsbQkWsZREHCq",
  "key21": "2PtnZpuJYN2E6TqTw6U1oZX3fS9Dg7YM52xWWCpVmyMtZ8ZpWDPighbEFWfh4uAg2pFWEYYRSJrQTBKMcdEpmgTm",
  "key22": "3K3bztZKyNZgFoL5hdYZRTP26ERDEKznnEgFfqYCcAvz7x94oESvPMmLH4wmwHQGKJvBZh1EJ2RPtiTPY72JMNce",
  "key23": "46RFviC4DsuaSjoSRubkWhXiz2FVo74z6Tfyb1fpD8SEMqXgGiTJ6JU2dLvcY5h9uLou78ij6UJLnMVUb25yVxxb",
  "key24": "VpGwdVZUcQ7rSVXPmun3N3LehKdASor4euh329fpYcZefw7UpDfAdrFMx8Foa5PoCR9uo6UfJUycutbU2mEgRHH",
  "key25": "4KfzVnztPD8hvz4H9cEdGQXccyybWa8jyzdLFeNdLrZzuFa1AXi8yseReHQoZFjjZsJjVemaMwn1r4NDHYgSMFTx",
  "key26": "2UPbKDDtfsX9v2oiDRgEiHpEfTHyZozhzSSjfuoyFHpboXTf7sGdQR3aKsXEEowT9cT4z8Cj2mS6TEibYHMENWxf",
  "key27": "kMWptf6cKvbe5TgkA692vRcEm2NybZhydKhLhWKTQxFE9jNStmKwm86WnsnM6Y4qKGzgVkdWJ75kGUyoYVA3aRJ",
  "key28": "2D9fmSXTuQf9CG1Tm3ujHMLtHrBaCELKcSHVNWZvEpepJweVTxSpfcCqsXxJVHTfWfcVD3sxF3gWBYwvBCMDLvag",
  "key29": "2JCTC2zTZojaYgwKuaSmkerhzhowaVBfQ2qNZ26ct5S3N1agWNvMSvCaaDYdcx2eQVfQXjANZyN9DJP5Qp1wxoWK",
  "key30": "HSqyUpXFhDM4tymXpPUTfTL6NgPCQtcj2PiLVpyHToDspA9uk68sZAZ8HVHNQELLorugvf5Tn9yPp8uANTFN2WG",
  "key31": "37SecLN19ENFHHKnybKnTSGJvcS6bi9tTw7hCVd62R7vMjFT3QQJ3QBpf2NuqrFcZi1BxQMBAo2WwMXYwjSurcun",
  "key32": "3qcCyBNiyJREhsifofdUJxNwgMatFmduJFyBACaZEZbDtQrdQCF71nTAENgMvjdFwhrAunnAYkG9Jn4d6KniU2cN",
  "key33": "3YaJquT4euupRNQkxLUkpzEUGyZHiw4LaABEXuN5snmDL8e855jwK25d8AhaJhgpMCevg192wj4ug6omV91Rqqbg",
  "key34": "2ZHCVNPxivBNLDfoN8rL1gktRyBS2vfsRLN1PkrH6yBekfezWPyfxFMiN8PrhuBdfW4oTdwShSUoStg68dSh2Cx2",
  "key35": "39K24CXv64ddHYomHmBC6NWaEAi75PWRHqp476cfUQLhyh6QMVGzj6g7rTBXAsWWB5p2rKRCLZ9vA2pzvFFhB866",
  "key36": "5BA8RvkBasGAyyTY5ojq3K9AcwMt7chZq6DfNVMRc6jiUGWAn6t9oBoxeZzfixAiM1AT2kmmDoBb73LjpYTvst6M",
  "key37": "6zrsYDzne8jCfFVomzJ6a1p3a5ZzWB4uuMXLy1WwkbUNmpjiehK3JG65XQEeuWFHrmarUb8wUQVDyGA351PQLQf",
  "key38": "5wGwbp3np9pGjZ4M2rop6G5Di6wpTsfiiKsRTtKMaW1N2udjyGoEFrDMnrf34H7Swf1Mf67aetkK7GRMJBS96tNR",
  "key39": "21svU5tSsSKufPmT6fni25HwRYYZrxDJ1tZHGUe9DmbRPXpc9XDTKuH2Upu7P6hM7DF1gkoB2YrrqfJm33CWN5s3",
  "key40": "24VK6CawQ8i8rSPG58zoSg4kqjavHKv3VY4FXhg8FxffxH2PAPpPUzjvB9EFxbSDcx224nWL1ocK7n6ADdTsUJH2",
  "key41": "VJGuU9xidCoEfNKFJWeTzgtGxMNyRRiHr5vsY2Q8HMQnrFeyaTUGFpkrpafomz6BnTnQ93SjGU4h7doV8dqBdz6",
  "key42": "5f98ZsdiCqGZ6JH9XZHWTocxGcV33mzz8JbvBGkG6KYMMHpVA4DAwHb2JK9ME3P6kZA5Q5zM2LkZhsAZbBynkzPx",
  "key43": "2ynBddq7b3vMZk278Lk6kTXZi5ACpeWg9SxzeKHFzwGiCnvAcUmG2aUbssjDhpcbBnS7CABBs59dH6zKkmzPzhjc",
  "key44": "5WP9Tzky8A2hbfW1h2bu2r9KXBHWCXJccmCEtJznDPEMmYNujRmzghzTffmoVNoFTq6zcXZEYuWBCKWzLDvLSLcD",
  "key45": "5zT9N37LQPE1doqVT8QMFZkqc2dwT5gP2SaVCr9LVRMGu2tBG32tL6n4mSveRdd1sCiD1h1k7MEceiJE34syCnw2",
  "key46": "27ZM8XHbuHQDsi79SX2XgSKo3wuJMnU3fFwXH8QGUtCWCeDiXywX8wZyMzmzepog5iQjn4jqmNpmw6uzZ3ELLhkk",
  "key47": "2uSrbARmGF7JbhNpggX1FP1Wn2EY5r26sELkyF25rMkHhXwJXZnscXbpjV9hjbDcDC4XnMbDu5rYxHSYAFsSqjK1"
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
