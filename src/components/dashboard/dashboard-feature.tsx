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
    "65jbseaGHhE5H5sUre81S8w8jzLH3nJQgj65ePyLbsy9yUWW9jM8u7c9DZs9dLYwYngVaMW1N4cKAaDhqsbmows9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FrhDapBkgmxgkCeYnJXL2Q9oCKbC6KSJnrzFPtt33PqTXfasDKZcfMcXtnrKRaQ6TtsUQWv3NQsipySk2zfhtnh",
  "key1": "2HN5SchqgMJdxqDTtoeHdnaVsJP2idZgeHmcprqjF87DUmRxq3Y78XRKqWj7Z78oonE9HndiRHT88ZLdGSKWhLwX",
  "key2": "2WkHd9x1zTNmvD83rudeW5cP76FDHL1wubikgzNtPgGgjnTopfyxLLdBGzRXZFpC5D5fkWdkovajkt1GaWqTDcts",
  "key3": "27ks5u16MA9GzEsokTnvsjb5iqHAsxsTRHFEa4QtRkMUz14grML8kcrLUv6vtmXcDNSgUuCXnpCyXchTi9WKgqQg",
  "key4": "5794nPNmEuCEyLLSMmah8rYoqvL8tKUqxxosC4HW3QR2WzV6roJvi4C2GoCwrNWLt5gd8fHXYJsy8XM6yP48xZwH",
  "key5": "5erAjbfySt5YqrqvcXuDiUiYUirr8cM49Xr8kYUpkTDsPgr3iGL2rgj9WPkq4tRmrTVKgwv5FT42xcctgeA9SFtW",
  "key6": "xfqEBe88bNmnkmnkKsjjkhDfR8tqPBhhsYK93iF1JnMJsBvN26LmHBZ9BXaRmgECaHkFkbt2xfMdn4U8fyd1h7Z",
  "key7": "2zFRNukuGgdu5K65BUtETMq5W6eEQbKLspCCHDByiHp3wdnEZZ6b6xFBcANnXExFaXPWRjAHhbxFFmGctsBrdCWJ",
  "key8": "3tscFtKH9thM2x8U7oT8qhbeiLTjtijLi4jcTbhYuBLKgdNdoynLgFMjqEDPvBa2DPuVDNopGmdwzHcnazThu8B3",
  "key9": "25WhcYmwnbZErK7kwqmufrGVnvNoEja8L7CaCeQe7SMQUV7a9WmAwFoMrfVDpJNqcTrRWYT3uR89gy8YofHbXXFf",
  "key10": "4vrdWy6hite2YFUUYedjivQXWE3eT5yQZoVhCLcqhhHKjuijpdPTK96qS5NXi2ScvoXgCArXBK9qoGW3zQirs5jY",
  "key11": "3T1L4Dx1bkT31skDCVGmgvqv9g4CVQ9ZgYBUPcxoh1fMkenvFD3NQeQvWpeas2epV2xvjtsotG5H2U2yiDsXoJhA",
  "key12": "4j54eTJK2tVVMsewDdkJC5WRkZ6oiPaVPP6hgix9RDZuN6Sk7WRbypo8yMEWFArMCvXswuVsTwXXYxMreQmHDYzH",
  "key13": "45k9TTSyU8UbbY6jp6HcBLr59jxAGdQRA1NnurPWC78b59rfr1KxP37Vuf7h5LbRJT6tn5xGsjrv6uUgDoA8sbrK",
  "key14": "4HxEjB8BFCiKJxfo1iDm6fq3yAH3kbXVgZoYoG4HJ4EEbPFgKrYt4FeGXqp7UeoEdVKsr7kuEkS4o6qxe85gwAKG",
  "key15": "527CbvB71bd637h3ByvFQgqe7RVbUfbv3QLrkqoM6qGkcdzxzeC1BnE51BkX87uvrgBRvMKZTJZBijuzP95dzdTK",
  "key16": "49D4h5r7LYLwPmw3hhHu3REicvUfL7aoyAL1qZSn53tYqGGVc9dWqA7u3GmGkXXvrh9hs6fotcbaEXnyVy91M2BA",
  "key17": "RMB6A9Z6xDT9t19KEbtJMsRNiLwZWjjbeXm7tpBqExPALmrUr3gbBLBY4XLxvEfDDWia9wAa37ZW1YWBd2mBoTn",
  "key18": "3cwXsqn2KoqwG3AqKRHcNiSCUAJoDdUwbdaciXw9BGkFXy3Uagtze8P54XZSyGseLJvu5FpnRNiszF8BHDC7MHVS",
  "key19": "3FFzK4fr2FqTVCTHfjXMWKqdSqoN6qzMS9VRGSVD1dFqLnVn8tsAn9Z4eUVkjnWWAndY8Lzf5ZpdgaArVA9tTPQY",
  "key20": "58EaS5z7uD1KKvKFiJULQ6uVi32mn2rHbVpH1cphQ14uB8WiXq7ETXhuAWqhmJeTZ2stD1tNtQuez6h9dFKTDfjP",
  "key21": "4H7owzxN3o55phBJ4bvQ18WxexTUmTS7Z3ii4yLV38EJPPSbCdVAdkr8Zn8cgkNofcsVDZ5t9DZqimR2QCVTXXMY",
  "key22": "5MyDGY8mS2nmUcsGY7yakw59pyJKwmWKS1b7MnUqGhMrsgR5NseNx1jJn7tessXiy4cJ9ZH2LPjmUGXNYZJKjThz",
  "key23": "LCTcttoJZwiZVEXxA9RTRtra9HpQS6mwKhMHGF7veMgZ7GHQJzsx3bHYdHDhpE9RFw885i2XdyqAz6XiDd8XGPD",
  "key24": "2wF9cXGhRn5qRgM9ew28W5GFvYSR3PTnivx9Cbo35JiPLLGbw6GHRut5Yg9xSvNxNf4oeYc7Gjy1PT9rkeGyVqbR",
  "key25": "3zGA7qs7y7gPAfsTUhf19yybF1PNCAYAbSjAQofbb11LQq7fJTjqNvrreKDPCjMgm1tDdAAmy6w1ibNjZ9M9rYas",
  "key26": "3KrMgvVzq55Gw7ebeTXdipe85TrNds1yM1KVYchtiHUay2bnCKpYdJ4fxxQQHLt2YvQzZo2hGRFjb8rMPVZtkbm1",
  "key27": "XMmwtjt5Tzao9tKu4X15xjLqLYD1JyJXN27cCQxtYjCfCLNnALCbpMrjd7EgKBq6DqkXcJjkj22tpgP6oo5ufaG",
  "key28": "3PxsoH4WyrGp8uC6SgvDPmE7HTjLUcyFZUxPV4pjKepMXbfATTHcG5ZXshCGVDw5tTTerA1GnZYpVRuhLL7mTm2K",
  "key29": "3ja7NfzvKyFTRETGGvcYyVTKTwcJBkp83ATEG1Kv75BdHaGLyu4vsAzKL1AnRTYob38bLM6VdowVjHEBrPFALkw5",
  "key30": "gsV9TkSaZTb1wZRLDQThkxsNYFX2ujpjrhZt7sptovDVy1MTmcJBdxEbbYKHwiXCGMvKJzHcCEipzLr4zUrAAsn",
  "key31": "38qRyXgBzwVMfc7k9HDikEYh1a9feYRBntKE6eDRmGijxSLgmeNj9YTuS99Q1wjihN1YGFSXcBqNruGZkPGMRcVA",
  "key32": "5PG9tZ3kkv24undzwKKc4PJjnXamiwFbzW2zFq1gSASshiwPvK3xHKdHr2pTexQrp2ykfVjPAQRCcEvAXWtFLVAC",
  "key33": "5skKYHUYEP96tTqgS1d6csvoGAXRWKLAMRtzXVGxqHyNSd7r2vKuoYnWFx5q4SPxU86h7hDQHcUtJTSmRiCKnSvb",
  "key34": "3ohckK5MGigvpz8gfu37VnUR953nsn5EnqGmoktguZwQE5ALZRhnVdMYT3dSSVKrEc5ZTF52u7hKQUNNf1VjDbnY",
  "key35": "oHAkVgjyJMhzXirmtjmacmQ8xAhhzdJ6MrYWPUSSk5Ais2rwr2gg2jZe9GNNm9He4sCdBXiyxMGm1F98ws82XHZ",
  "key36": "4wr5eKksPui1TiTP1vFindWJBCd2epF88m2bHWj17TiZZd313fuGK5KJgL8RkwBcPeSWH3fizdzTmyg5cqMbdGy7"
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
