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
    "3LnaBphrPDDX1MqbSiuqZqE2FRbfWacaZGUSpmZvb2X3cBTU3SvYZu71L2wp9PwqS3esNW5958MqTy6yRFDaiPxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vJxaPMTjUSRLGgq3hjbDP2hoXGUNKbXuNH6cYboRcU4XqQrwxt8Gq4GW1y3jww3mJp5DNDBFqYanM8uZLtEiRv",
  "key1": "2pXr6o24U9tjZoW1G9y14jGwUe5zxB869J7zyNTQ53bi7uxoGRNY71c2wyUf1DENj8FTBQBdw5vbEgfVYa5qT6Rc",
  "key2": "5hX4oFBNJWiuYrstH9CwT94oz3ovMAm7LeC2v7vci5ui67ZGCJhcqDNM93pDuovisHXMzLw8NcNvKtZxTmBWA9YT",
  "key3": "61FBkHwXWXRXFsvRGfnfp65fq9Az8GxxxjkQtzXiLtkuMRLdiNfqNk8KaLHLBeraHo6kzq1NwDJwfc4hg3UjkfTA",
  "key4": "5c2FXJ4ZhLydcWrfqA37w421hm1FXsW1k3hiwdtg4bo7SSf1w6JmBr5csKNSVu5FAX2eCu8tTmHQBABfySVbFz3r",
  "key5": "2N1RcN1QTNiAKGn6zDkDk7aHtPB9LqQVpEqNtQcTbcDACJgveS8QgNnyzWLUytKrxsxSwF7ritYTY8dgaC1qctxZ",
  "key6": "4hvm1xeKLKYKY2JD6ZoDCRYgS3zSg9rJH4sH1b3vBvYAJVjSMyde8KWR3hMN44u5zLJM9kD166NrSkxRLJmFLNsP",
  "key7": "5tE4Tkbd6WiZUrBCSaSt243BQAnn8Q3Bvm4eg1Roc3HptjSryh8kiLJJznwDkYztYZfmu5QJe3RSh4ukAjyoW2Pi",
  "key8": "3m34Z3rqjioTgYV9dMBD2GXswqSRk6tFZVTjWj84wf9GzoLz8Hqgxt3ic5L1NYY9RsKVjUCGj45TaK6MM5LKM6jG",
  "key9": "48CZbDfe2NmG8LfSrGZCgKXEmdXYAsUCfqsY38sPUEQph2eh3dWkWGHui2M7CN9c8sK6qim1ixsrNyDi1SH6WMa4",
  "key10": "5qDx4Ex8s7tRRQoytZzwE7U4zSDzssP4aG4G84fpD1VbRAKdBFRrFLW5DSvRDLp89uiWc4TtuCTU57fW2Q5vSM5h",
  "key11": "5xjrihbkkAhrZnX19gYB8KKohNYWhJsasBNUgNyPci6gyLnzm5joEYXMSzZFqVhsgE72UteXM6fxyqfofZmtkjU5",
  "key12": "35dpxeW1bf3Hc8v5UKfXiGaAHg2Jpae4Yx6ySMtL1CHtqR8pZM8wxMBSpFkJ1wXVumktnKdWS4hZDTQQMea1yvv9",
  "key13": "meUEzV1kAMw8VCf8CvLvFw9WrHX31N18nVHZ1GbHMK9K4NTnhENYiMYAHVpdTGa4iiysCZCyXxjiUExH3PhtTib",
  "key14": "4gpQe4qWm4JBDGmvVmwr33FYn63u2yScQGtzRzdkywpe2Sswox55n5Adt8VxnBkAwmBHQqCsdJ8S5ZqYxu1BNTAQ",
  "key15": "5i1RbL9SdWZjjbN4pQSLnzdM5EQptEY9nUM1WfNb3Wtjzzdu7n2SucArnHmim4f4PBJd2fs7K1aUtWKis4MjrKLt",
  "key16": "63XD9Z2BhjX1k625XRujLBiDNGwB5bc3zWMiLyTLKoR8bsJmnX66M33xehWuNK1E8TwLSHJfasNSDeRJRnbCMbEM",
  "key17": "375HyDBpQFtFfSaPQLDoMxWDcF1dverbFVGofvXsEZBtobZXN8DbVrnG3DDG59DAZZ9KYN6BbstxVSzDDdCWZmBs",
  "key18": "4SPzgcheFgWGUpWFjjxBZZf8EhBrTY8tteqHHMqR521Dxscz8Er52RY8RcGqdiWtoddRdKvF55DS159Hd8pxYxC2",
  "key19": "5NN4h6kcr1WNhz5oYSz2qNwNuDoMYxCXzD7D6uiiJVF1cLGkxYPnJpYnWTU1DWSjcUWy7afUF8FEbVQH7Ly7YEs3",
  "key20": "LUiib5NPVxwkBXAWEKVMT1cbBLYdt86y34qeFzjp4ZEUGxHzzqca5w4Gv4v8DVseTaFR5dfSfM5EgMcDnU4BHsB",
  "key21": "5BSHyBBrzffcmR5bHxNejMJPSbdnXxpr5WtC8P85QRiexJzP3B46c43CBci5VqmfERm6vAGdQ24naZQDZiTpQgd6",
  "key22": "5Buvq2QzWYKHcKSe9A6DyVnDwcuWQdzy4Ny2M1Nu3kKNzSt5YU4Je3YsuQw1zLd9SsXrc62NB3RhT785AwMsp2Ar",
  "key23": "5tnTtdyZrr3QR48LSEEAU8uQJcYi7sFD2Arp5RRKHSRHAFB6XA43yT2KaTJjTxHY3iom9efndahZJo3RCtyLCwbn",
  "key24": "26DGPxMankTVQMj6WPTbK3xYMbixFfYNbuVG2sM71fv5JonKhd9gX4wqrXmi7howGCDomegRjtpGR3oeywBFyf85",
  "key25": "2WSuA5j2H6eMQAYYPVLNPRa96sRPrTD7aXayZ2wNDwgvdyJEg9f5Ns8S9aL54FvJgTr34YgqM1DgMpVVUWktQkN9",
  "key26": "4CzjZ8meuVhsUD9NyZLZWeuRrCwc7EiFhqXbZtcvpYNvSdeZR84RwszA6eAYnVH5ppLG5tcH4dN25cjE9tsn1nDb",
  "key27": "4b8cnwtgRRojzzvh8kBHgbsCngza7YHDUzDgPAFr8q7LCfBGhcJgKNkr6YNecZCb2xRJZ4ziYtMHq3VgvAJt8r75",
  "key28": "jEns4KYewzgjVEntMp9TwiGm2dzZZkTXhHNYcW2cLDuphQkX4e3nyGVBgjVNtECZSPAn72FZidrmBkbFcNHmfuc",
  "key29": "ooFqRFixMyruxF9HQQfnrtAFWisaPe9xrvNf5cDGGk5XHV8HmKWiQ3Cj8RNYc54AHKHGdCLHNXsx3nxkQgaBwBK",
  "key30": "2eGa9yG2odMGitw3FuWDy8S9WKEw1kP2vnZSYCjZAP4CKjDVQ2qiKebTjEnKYrhtsNiGssjdNF7VxpbWVM6Uaz5H",
  "key31": "4njiJvzNp7s3zKFD2bBiDZh1PmwaeyGqL3zkdVERTSXsh9vVMvq3vg7t3xwVSxMna6kpQy4w2k4t3YQdzoq395Ab",
  "key32": "PmMW4m9eRXwRX6gzpmtmiEFstCzVcLqHGtjBgyB7eJrKGFWXFsynr59ZkBWVm8NqDYN2FbP83wutGraJWCNfK4f",
  "key33": "4io6dvzgTZ6nBub8jya7BySykj2NUstD3owBJB9d18CHZjgJAtdr7xrgHzoEfMnhnLtKXuKpHV2zxzvaBhsdgU7V",
  "key34": "4yKTqvcbQfnzxxR32BA3UWXbtT3U8skLRNaDNP2p2AZZtd3dRCNm4RdbPi2nzsB6JSiXS95kJXB6QxmgCjWv9PSa",
  "key35": "4c9b4EQJXBdbQxE6xdQjQ7hxi9bWk5RhugxhKD8fJSSGhnH4qh3jhFk5oBcakqj8AiAyXLL6SbNPUGqTLaeBY8fU",
  "key36": "2zadB5mva9eRm21737kTNDXrSeR9RUjxhmCvyZLdGNya24vg92tgQrfy9nuEusitDirgaaK4npkGeNyVrh7BPVUQ",
  "key37": "3zezxCNVicHHtiFvf6jyR7bX2bdS26ksgftxKN3CjXJYuYkSbDfhCoPEAQJZindTsGp6G9DFiVfv3TBkPZjmiqh6",
  "key38": "4sykLXjmjfwvFPV5V7cVBBMtXTvcsaH6eMmLVqBVu3wXUC6a4JtjFXtVTytsSS4NYbRjfL9sr76aY1wm8qzTvnn5",
  "key39": "xo2Ltu4giYr2LjWs4NbQD2CasCNponG7T2Jwd8aUqQrKD5MW1ssH53WAeyargS1b4KcJ6gaycj24i8CAJAb6PVK",
  "key40": "4dcbtR7jHkvG1KphkJ8rU7qB1suV2Tj5KYZwa9PuDmcAYCHtM5rZbG4bHteEiTAshy5kycqvKAfbYQszqbu76pEh",
  "key41": "2Ffn4SH6wMogHwGmkHgkegquxxzuRUo5cYxDsPaBestDmvcZPGJWPoR4emB4q8kb9kghJTFqfWocWHG8u35UjWjs",
  "key42": "YJYNvMJZPKYNudatGJjt25y49mWcduRAzm9tKu9JRH5ZdbmMqiQXCSHUXy7ryPtGMqwuEueLBxGHuED4n44ooUA"
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
