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
    "43b2wWzfh2y4T4vsLvVoJKBjt32owkqygHdkQz6aq58EDrzTaxkqczKzqgP25B69itu4MqkGjki3n4hiMatStVQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7TxfiR9DCot2LTp8AWdLACCZ2W8PXYuzLvbFdqWjUeUSfSJNMgTPsj4ifyvmKmGjQoCYx2QdwV5TKyfyvWWaRQ",
  "key1": "3vYiEE3ou1woVTEszEmgxt8uCVPFfW6TwDPEhpnWa1gnDTBqgAp5pvbB1jjcxwm9UunJupNAqbNBfM3RuWQxcLUw",
  "key2": "5u2W2gfc9CfBiEcujHamNgutiqTizubXXcV6AdxMRdBd1Rm6R4mhsDJgkcam3hALYfmqPMN2E5b13znqxc2CBjMu",
  "key3": "4mpSJDTiKofZMjPzYussLeSBH2cAqk1us78dNCuk7irfS39ns3Yfvp2JBo31Gk5FtydcwG9YrdbhDdhf8s9LdzcX",
  "key4": "3yB2Te8VXKZn3AtaKxcqbEy2jRxr2i4cQnWLaUoSPxbBava76As4iCqkiiDGzdtUB6aSpGTbCBmv9YZ7T7VYW5ME",
  "key5": "2fZAfHKfJnoZGuFUxzL93C3M86c2vCPm8DGPHW1y5tE2p8j4qFpT65Ra6qGFwbs33dMfFTQj5d54qwk5SnRBngAM",
  "key6": "53bYag8PWphWxT6qM8Fc7u8A2AtjEVR1p6xLNXqCBZgtVaBMfFEDMzxuCGfDC4a6A3bheGBnJdxyZuyUXzjEk3Bd",
  "key7": "2a2uKZYFyyZ5Tt6X5ekqE55op6hx7nUsh5wK1g9mMznr5z7KzSVrMvFtqLro8hW1vPcE2Vwn6uXxt8GxRPRYf3LW",
  "key8": "21CXwiqMfZEEBRrBDaYtDQVPtQQbfCXFfYLn92PbzDAiCiGxCSRN9pmDovDmSoSDu9hahra2jWEwAWnKfxLnP7Yu",
  "key9": "31yeAZTpvB2PkRJzZBmojVJQZNvFpCPNrSA3GKHyeBW3ZMctSDVTcrzoSt45H776qnh4XmRXTqSPLHcGQVSy4omn",
  "key10": "479CmES4XdJDt8T28ccspVsjXLRx9eBo7APxp51e47rvN3NWsXXYZ8xtUW7m28NggfRnktqQpyc8sGUWQdVXPFhu",
  "key11": "LwuqWtmqnEy3JL5gm6u5GBWM1BytyP16jBWhGyXbNrabS8r4Qmzc4ryH4JqVkXiqwor6oNoVsCZ7DvUznnuPySi",
  "key12": "5i56BoqHbdke9Xmup5cjvHuDqfR7r9vHwS3T8DLek9butaVVZCd4VrUt92GcJQiVrGV4SkcyMWVUGkQugPJ9SnN7",
  "key13": "3t8kjhQ7mNH7pebiAStCss3Qzy1eN7KZ1KScCRdiJgPCHUs3PXoeiFtdseVHrtaf9yoANcJtW8vTX2QJjqDQMnhB",
  "key14": "4RsAkKpNeRkd93aQEW8neMR7qagbh2thdUDmS2Q9Rhgg3hXCaV6pQ3CPPqTvh6az7kaRUdtnXKEU3kbMLzq7FHj7",
  "key15": "4ThEi12pvQWoobBq4sHAmL7SdY425QtRzZud5gJJJcjtYyo4rL4aYPjm93Md5Wto3xhBP18Tf34AcoWTiXSS6dp",
  "key16": "5ytNuMrPPntFH4Wpa2qLZw874ZGBgHFVh7f4o1YA4mv2HTmcs1GgFPbHPMp8tHR4tjpDxj5KuziK4aP2xnxXgCLP",
  "key17": "5HYKtVbkDMRJ459wUnd4bCkna73BTBrtTGcUEt58vMm8GopRZEXUSLJ1xLRqUvqShpz7PYhuLZ9SSoikQLAVJQaq",
  "key18": "4DFVvB1UKpFVDmRsQgVSAKau6P6unxXQ2ir845XwFiZa3PXWGmwLQqB5tPdvqfdxDZGZHqagMmhNDViy1CFcCE5A",
  "key19": "2N59KEoTrTedTMjMtCbj7opf1QSi28Gcdwg5hr651BEkJNYqK4P91rmDCpMTU1MdD4imps5ZZpaHXy2hks4owjr6",
  "key20": "2sr3px2hvnbSgepBeb8F4MVu2SxCh9BiH2tjPbuAzYjprL9B46vD5fP5Leh4CxpgZmhKJENAwUbdDfxCETFeT9sP",
  "key21": "45jVt6vPK9CU3Rf38fzkxQE1CCDmgc6bauRRk3cyNyuizFpTZr53fvKJx6jNgE1TRFVh9m4Jx18BkkM6mecobyVA",
  "key22": "4RLhsuyBJ8WJ82DM3PY8wwP9JPhrXV3iFLvjqXFXRxNYriZFAm36tofEjXeGGvNBi5obvi6fXdZeGnn6td1xgCB7",
  "key23": "24RPStfU5hrHzhv8mPaqJSbkML2HArPtYYHfQET8tCb7hKmiZiKTbXZbLsWB2VYVe4nP7RcTdeTzL22QbxqGWpti",
  "key24": "oiWvuJisaQNb47nSmMg4cov1FxfdWYuZiDNB7ShSPY5ve9uQr6bmf28TH7DQF1h28v9gM1aL95EtSKVkrp1e24Z",
  "key25": "5FEobzxCu85AuaHqGn8Z64zJR96w5MvzXvFZ3y9he7vUiGcxhmysCnor3PXWgrjuoGKSBpwzLsHU6e4gvHrWQA1k",
  "key26": "EzU7dtxN2L9BDGbgy2LMdYgPC7K2yW1ENN2ASTJwwALG9ibmTgVR7wxToDDYMJpi16bk8TZp2pUcXq4QyJfK3Ej",
  "key27": "5ypQNJX6tjrUNw4FrMee413zhMZ58cVvhkrwMDDMr62b7FzmTWEhner61Wr4R3St6TzfGX5NESVREUUJ4RaYwYyo",
  "key28": "4F5HzJNotbkGKnSKDX91UMfyLpUAMC6FWSeEoybUAUdYhmu69Q1ffgPDKbkkLQgheoYWhJBLxQdd7HM4UWdYiBaM",
  "key29": "YNC9w4zmuPA5EYmoh7EAptf1ScogSmqcGt12DMJ9YmZTpNfRtv52FzwhehHEybKP4kTpSkWP1TXs8bU3rhhkR5q",
  "key30": "3ex83d95oAzCMeSMPbWE8My9bd9e5HvukbGXUJdaov1WXukjWF4rP2BXUF8XDr7ete3JiDkvdNGLfjZ3FMunfxAZ",
  "key31": "4dEvUGug7NKpvNruH7oci1vf7fk8AmdBjfsodi3goUTCmZX3VL5v24bFGzjXQ2viAfc27fdenTgKPnP1RMy5KSF4",
  "key32": "246J6pAsDtt8PSPiPzRfaWkDT6GB5XK96fAuae23pYYEVYTsdSfNipBpwJihZYxtMyMY5TbMD1Xcqf5kX94XGuQc",
  "key33": "5hTo7vS7MaLUZ4JiGXApHaexcaVeneajBDZggtbi34Pf3yUZFuHXiuL7MmGdTePiXhzmTueVc4NFVTkPtkKCMW1k",
  "key34": "KzQdEtQoKV1LCFdm78a8fMdj2LAtkgB2JgMf9bdo13eNVJb9xpC4C6rFC1kKHxhDrpt47zN6HSJkLxA4Jn9RXJM",
  "key35": "4gqUCToTguabsG72ev3a5muhgFBxfJE1pfQMtkpQrYcjkx3yNaGRASgePiRb7Vg6NMzx7PuxHNpc6ymPqpHVB8k",
  "key36": "4EaKpkgpSiMaH5DSa1szCWBDhPF2DB1rAYWXWJcf9TYMYQvYLjNuFiAAJFS9wTA56pAfb25HExLWt8vnFs9PEJgx",
  "key37": "55MV3wLqT24RWn2VSBq6815D2HSh5EUjYdj8zmWRJGNmfgJGLM2TTGnghVNWs9mX7qPgy7jqCHU2sHR9K6EmZwTJ",
  "key38": "5NBu1SxeA53ViUtksb73sAH7o2uCtZhdcxpqe82Abnc3gKXd7B8uGvsN8fk8ZKQYWQuFjCwWN5CF9fiXZ5xXzkDe",
  "key39": "3e1XrBTC9TiDaqV8unsv3wy15ij8wLyDgZToMceSJAmUAzD6cn315KhLq3jPDjA11yNGAHud4WUkyN3nv4PAEC9k",
  "key40": "4JeL3PvnNeRwdsJKYP5LzfY4HQa77Qjk5kFtaDvmmhKMsvC82xR9kdm9yQ3wQoUNLxh1j87bu1A7Xg1A4KPwyBN1"
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
