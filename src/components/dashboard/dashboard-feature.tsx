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
    "42Vtg85iM9L2o6pRXgPy3hvCLkXg1k56EFR4deNyGZZkv7Yq8FfUH5aECMnsKSyif6VoNKWS5dbdYtfv52TFcbwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMqPtM63xsspNNdDHcU5VHCEozR5XVSGA8asWqrNYxjfv5vJQnjpZZmqSDFLfca2mm8Jsggie3o5LRbLTwXfmvu",
  "key1": "2UvZyH1GRo554Q1j4HqAr8dviKKUaCMeFLjW9cEiJiFmKni2KN3ykb4ruRvZcPXrfZV9csbm3JAXQypfwDgrWS9h",
  "key2": "3SZZanVCFbnNgnxS2FYz6fysiUEPzRUKFs7EA3Y3uk9uCyqaZs8FjWJkV1Er4JqHg5pvibDwJbsLHPpeAariBKWr",
  "key3": "44HvEPYQ2MeHwDrSYhnxm3gyKdwtjMKQknre43q491TDwmkQ2m7eY3Q9ZU11pwg25wKeJTEtCifVpyXpbV9zUotC",
  "key4": "628ReTniJDFrjRXZY2hEj9febGgR84DHpaC9iGAmEY52ZjtvpV4t4b7ZteHgR83erVRVpcBDsghPJ38CPjZoFtbn",
  "key5": "bMB6iHEBXaxWdXneWes5JWvixyeF4PsaCqGcWozCRxe8bPQ87RHqekEjfnbCTSTHjcWqa5JxQ9wkoMC1KU61rD1",
  "key6": "4aKJnTkzSZU7bgC3cDmEWYDMcxpvA3kx5ZeRjjmR3KhCtoPxSeq2CSRQUuxagHTKDUhFHJD28vV1mZx1efF2uDHb",
  "key7": "5dHArcPiamRAuL7rRcvqQeQkiYy3323EyN5p1h9Uy6pfKr7DsUPowBvenwHhEDzLW8epK8RNuAeJWvrk6jAXZeZX",
  "key8": "4QXe7HAdaNXgGKqg7epbDdEMByd4gCMR82RVVumwR2oPXUKaXdNcTn1wMww7ifkfeaS32Zo291ejhRDpbkcAX5AP",
  "key9": "2Rm8KcbDEgNhFLQDLaLNJuwV1wqx2VTkAvtwso2Gba9TVJqxujt3HbAsaecst5DZHHPru9FsKkxZJy6ZANWwMj1L",
  "key10": "4zEthQQ8iabFuiUasfsU5LzioG9aq2jbkA5U51KfsHny1nFTTmPdJaPyfDxxMHM6yXbLLp4FjRT7orEkayEio22m",
  "key11": "5o9PdLunkmVtWTP2c25T1hbzZHiJQj4JACUAvENA5bTH5YwP6sqNwHfhGqjkUdQiFYKqtoSzUHviM2mTd1pd3PfZ",
  "key12": "5pLj79CmN8gtB49fzfzR54CbqPXHFPHq2GLjJuWKxs5jmgFnBDaCmVeSN7st2GzrR7CSFecAFeXTED1VRKfRHCgx",
  "key13": "4zKX9J2iNp4cgtbXWNj2rLvUYd2FiNw1teV1sbBkZGBka6GJPvRbL16CC18WCtrkde8EFSJNfJ4Xm1D2ieqcicxt",
  "key14": "2CbWFDayfbxxnEuSwP4wQhjxKMYEf8J15fRrUhYis1VwAAXttkpjw2HZdfs7oY3n4tTkfjhGzhwQoWMHGsonSfee",
  "key15": "3XxHXmC2kV4KWFshaitpXGAYZdXWPGNR1pAeiaB3cekR9XPMnUMHF9GGrjcyZRPy1Fo6vqBPiyhFF6aNCvYpdAA8",
  "key16": "62prtRs322jQUCU6LZjmmE3kqomeHCz8rkfcYCmmztMoQZMef9r2xZ9w5bkH7pjW4g5aPRe2nDAqN2JAKyyV3L3c",
  "key17": "2jv9X5w8kALSKW4a5n2HkhYVpZqJmT8GBicYG1Yoh6Mea7RzBvncgKV2ePyMMohBTH6MbLoPwxWnfRuG6TvKLz32",
  "key18": "g6yvsgj5QvRZd6L8johoRdVi49tYrSPhRvVgR3mr5mF4W3RHbPhLHKxSfaSsF9E9zEdz75ruubGs6AivA16t4Tr",
  "key19": "4tN5KcxQRUedgbkP7fXPsrvorMn4HbEiQQ8f8T7DoHj6wMdp51C9yNjRRdf3C63pKEi6iHKBUkYguJiu5ruxUiqh",
  "key20": "59huVosTSJRnJ1NwTkkrgj7nYEusgcS6BAfbYsfCNF7djs7E4kVanCfP6JaSsqCpbKjEfHiPUWvcpHnDXj2aKPEa",
  "key21": "3LgEonLiAfjsPYq6h8GKN4bhzZz5g39Uw32DQcxCMRMgd4DgSsrQtRPaY2Ldg374xf8okfUbnSzUpRECz21pAkud",
  "key22": "9hrFRvV6TiQtGo9VowFcuqMnZJxEHVWZyNcYmUwwPA3E7PjNgXwRabaWiDGcyQohinZF75vuT7bJDyvT2QUTEFX",
  "key23": "2vvXLLXLpAoFtiTVqoDNNZhch7Gf9rQwnHHHNNG7eZcKkCUiRgpWRLnNPV2thGtePRG19H3QB49NDFboK27zFLBW",
  "key24": "4TqzjFovuvXPrHBJ5LnAnkuUCZX23ecan4QSJQt8mLSprBBchx22qJ9EFb8EG1MFj29ofXV5cABANktCafMXf7fm",
  "key25": "4SoYgshKoXWM4jij5EjZY6XDnnonJcH6N4y5i4KffLiiaMg3vgh6FCebPA4uct1Wx2F1rYyikudd1bS7jjk7s9Ln",
  "key26": "4wWYntDfZv5PjWuayvwPFFPbvqX1mmXncGwKHTBdHYNmoyvAjdvxcYLfrzuZePJ2zbYtFmYSvtnAkbZUEqA8SLgp",
  "key27": "42SfJ3PrtqKsrSCFdMMCiM3VWPtt7PrTLsf1peTMA89exBwGPdZwjKxyyfdw7F8h1rXbQn6ATJR26SvkdqBFDfhr",
  "key28": "62p3dm68zUhdxNMr4i1vjTcP1H9j5Ta9bs5GhNhmbpoJ8JhBy4XLrYHNDtv3Nvsi1epda7rF9z9WcJu8jfGc8k7i",
  "key29": "36btFJVJdEQdmhtYGjmuern3jhpiLSCWeLWETJVKyikPhZfErqRpmJewNSnZaqnFdMRwnzMmv52k3Tz8GSPS8MTs",
  "key30": "YEMMFpzt4LSu7aGWuC4CCdm9JtZ7kwo4vnYKQTnLeoozgG8LrA4jp2SinxLm2wNERPENzFtHFrJsugmWVtZc2f9",
  "key31": "2d8Y9jSZKfxAxxXvorYiUGxsywZ5B1yF9CGy7Ct8RWc8XBa4yjAE8jq7TanofdTwuZbnKJKmA6sH287R7qnc4FB6",
  "key32": "2RSC5gNmuHW15wvGqEA8crDNMFZ7Jad9DTKtWodJDUYvU1tzuaojzWEdYD5YRLn4x8Nu46PBcJAbcoN2fcpn2Rox",
  "key33": "4kxmzvutq7i9eyjAeZ2EJ5bpU88ALJnBCReZA7E86rePYbRXUHoHdpLXoeG86z5YXNkiBttswjFmcGnsKUxhmKyW",
  "key34": "Wcz2dJ4ygXuVHCqG3YUY7pNebHg3RgXTfDEv7zv1JDorqcmrViC4gw1ewFuJRLo2K3UgQw2XYzSutZxS2euCDct",
  "key35": "499xobLb6a4GwRjYoFVbKqq9hDCEGkuePXsY64xjiDwk3m72K7kyh5T2y6wA7Edjvpr6zYGRk6jcWez1VNehw1tL",
  "key36": "c8nXysNgNZ3cSRJnbjC19uWgnbY8PhcUodVam3RnePiVPckebgGwRLcH9aDdN8eqDNxVoSkoKCa8UnHGgdXaAXo",
  "key37": "ocXWwbGkveNHj3WS6xmeYuBDzypKgoTaCzzWUGi5x9cfayhxZ1SGokvqtRA8ZQfQbvFCQ12U3WzyJxSs7eGzi6i",
  "key38": "2s74SbHcwdFrgAApyBhWH9RQjE3p5XFediaHg54kzdjrJNGusH8gj1gvGXkgzQVGcBRD8sLvgdnb9MNXnwq5Bvne",
  "key39": "3MvAQKMknu2XdD3Zh79rQUET5euwzwgxC7nkfjVh4iGYPjZKtt8LkSnQLTiW1u1jdoWeRUUq66tuyJttVFJDTL9C",
  "key40": "pfLKumq6qC7SAY2KdHDcsLnyksWMj37taWbh8esm8i9kAVrbsQTNS9FY38J2TSMG9hHGLwd2SaT96SD3ohJgrnv",
  "key41": "5fQREpKkARTjeqCLi4HmxjSv8qxDcXjzsPYohKryZLyMLE4zvvpLbURHazET2iFzshikhoRwUnfCtZTTLhUA1DQK"
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
