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
    "4ZiShvwiBikenU5i2RNL7gLrrhyTAwpquEdCHhf8jEEbtQtjLj4ixx43qjGndxSu2GJqt3dhke666riBkN6LT2hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLDrrQTZ5gPAZbWM5nCQjcfq5J4c4EBSAU1vJdhNjhBDuPn4qW8A1oVCrpdRbrpuxp6zqhWz3514KXq4Zc5p7Fx",
  "key1": "4vYVdaeHhWYQXgNXH1A1wFecqVmrhbhR8SBg7YFX9S6HYYysTMgSsAnUpcns2DDKXPh1aTRCyWtfsb5cgUwKExqa",
  "key2": "YqZADqM5ss2KRN9JgPs5i2CMf1WHfmtWdT6xQPfrEUrMZ64WEmXfKD7kxfgZwE2LnGXPEA91jxV436TPhW5r7zU",
  "key3": "2fiCkENp6cxRY2abx9ncYDVFbErxcRHCsWSSvEqzyF315mcF3Ss6s7cW7PvjL2WW4hTADDRWk4pyTFcAGAnfSVMB",
  "key4": "2zxCdvMGC9avsA159C7RR8X7rV1tJx1gmtq9boTkWEbbP3kjNGEmqjAAsn9ji1q5pX2FAUoKj2yzRwayKBEazPka",
  "key5": "3N6eCQc2YSVAxsDNxtsN3ftRdM6NzdbeqH6KewNHLMqULiAgb2Kpp9VmsWaPybPHnuFt3775TTaVam4LT23TG5pk",
  "key6": "ANAuo4t7WvB1YLpz1bC7cdVzYmbrycofiPvpMWjcT2SN1E4Dosa3e3sWJw8vQmFsYtuQPT58g6M9T74UypZKcHH",
  "key7": "4SKd7cXw5DBgXrpdccfNKXjCxSgaFLCpobgy2sJ8vERtkPvQyCPxyXGKxbeUVt2hcFfHPEXr4viqrkaPv7joHsR7",
  "key8": "3RFdqEs9eKXH2kw9eYrEXhwL4okGgYwpvvoYXiZsKrW7p7d4yFYPawUP9BzHcnxgfre3JjGgCeyrhAjfLBz6mSSD",
  "key9": "25nYyonkN12XHrButofC9r1PccGde4pjfZtp2rjVCKtUJ9UnVT4pX5MDCgaHyPeTPKyy4Cubu55ERudkr14K6Mux",
  "key10": "3ifcYTQM5NAKTa645eRoo9QLY8TTVbTCVYbZKiGhmGrgU39TC9oFZRwJEusNos1excJBnvRtJkDCQ3Bs8omu7V44",
  "key11": "5cMeCxSzs5Q4bc9gpgTSiMNkebs7B68RkKjF7qbhLscmHaXAQQDqPHDYFEGDUHz6RH56Gjntx6Myb2mR3hPWUBmV",
  "key12": "3iVS4FFhXqYXTAzwZpULnubjADLFND5UcqGu4wd2UkvUF6vkRVJqc5csabgiFPDuduDrwWVZhrVu6DqARpT4wb3D",
  "key13": "4j2u7K8q74YUgq7NU2AW1xy6K91dGe3S9SpLwaw5SKd1VPyCxMqAAZX4gM7uBHxNXi1TZHgDnVHRtZ6J6jiEKZ5b",
  "key14": "3KsycVtzGF4HNJPguqLkH47nw9RGQnzo9mJhpnmVpCydyKZ2ZsNhNFanuhS5QYjEMVmy59NhLqrYAg9Y5Rusx3kr",
  "key15": "2QLFaCfoRrGa7T5UJw9deqkbobXjDUPLS7AxS5VjJP1M1QhB16yB2kuiJ98A5MRb8xNwgw1krqpxJvqY73fsfbD3",
  "key16": "48n1nBsRxU5t6SPLb5gSCer2NTr9Hz1ksPMtkCenBXY2HCXx5zKbYQaTwwzqnoUD1v1RR2t6bV2ovwrTnvRs5NtX",
  "key17": "32ywh8aoLJWhpSQXsDncGdLPw4qA5khKcWeMLifwSeXLMrr7ekxzVwu8y2FcDVEra3uSnTX27hJ4HTZCJzKjrCm1",
  "key18": "37XwXGARg3iWc1ErEQofJEys2NKbuDtRU9ZYeeyMpu1eCpgz99nqYvxhsZyJPem5RZtF3zcRytXMoNYm6h26VuSw",
  "key19": "5zzoG2j9qdxnQBtiXSxZGGJyGqw3iWL91APmMJDXRmfYUrY4P4PRieBdMojhydhFGRg34BLnuySRo3dZGVLkxgPJ",
  "key20": "5aJvihefNe1jGwYp7UAaichJnZrdDNg57Z7gRF92rcC2XLgbzrxz4JSRh5QVxqS9BXmEphz51uRfmZmr92HB3ViG",
  "key21": "5VQPxd89CFydchnkfvXh7gefhjuxZpmZjk8QXcU5HahWMktZsMEt3Hmkbm7qGqBNSyN9TqxDnHPKGCgsXjvwH4xG",
  "key22": "65t8AU1qmVYrfYviZGw5jFX9MhvyjLTYHopt68Watfz9rNtApcAjZacFpifyutvaAuqhPRRwHuN71fAVAJcUFp3D",
  "key23": "2uXFEFLgiEsdjdqpc1VoqDepLXmw7Qe4emfh9499NP8LpZPu4XzkU9Ek6uqRjX9XbiUmjhyofQE19K2dh4ByMLwU",
  "key24": "3M752en2MQc7Xa7M5jFzZkdN3k472BUzxW7V3dvAnzWP1bS7VbX2ET8iDQybQNsuSCJzdpZrurrtNzQa4qgdeeES",
  "key25": "5L4TxJgVkD85YgJ2WKsc9P9j2Rs1jSWBhrEu9mv1hHhDM1sAh6VYaQtLZoszJemoXnKSqkrnDstfVLrenLi7yRM2",
  "key26": "56UbPMkafhQdrFnV2Zt16Um7Gy1EhdneqrkS8GuA8AAcQZdbqqDarn1MyLAEzo83GaskuEfcPQYi7yL1xG7X6ydm",
  "key27": "58CcgK7DFVKL1dHMsBao5qMz5NULP5HyZtYQXZATzoKC6XiusJNnrZFU1jHDHNca5b4y1UkgjENiquAHqAMqDXi3",
  "key28": "5UN3gASsUTYdzHazruxgSD54VGnm5b3sQWW2FBWSvNksskRJzKwTkisEJGTU1xziMMb7kLdNVf95vY1PLEr5Xnii",
  "key29": "3YCy64TVxkMHop7iirojddmEVM6bgrNzChbgtDKsJtCdCkq16zJLCXxnQNXi33rhVBsdeFqwSkY2xKzNTKeVCfg2",
  "key30": "5xhCn29QdheBfPjKVfA84aWMzUTX3rSqfWPXancEd2AH36owza7RHR3fnQLCNXLBcJgqiw3DEmy1HoMyAZ8tWXfm",
  "key31": "n3eYGv9iTCwY1cZGmYVRfeNBvXe9CKezMDdcd1CxyPPKNwsT37WG1CpVPNwQemJ8iRmhuoUn5xbpqWbyfd6Dot8",
  "key32": "3GNLwcix7oseAwik9rC44Lx7Mx1qgMnQo1LzTabMGrCV8qg97skz58FrvoMgtCNeqUrLkiEcBMRehE2yYu642pzk",
  "key33": "4skGX8Q8iCBAYygjAqdeEU5aTsHjZ6ffnDufEQW8si56BBj3kQYCBhPhCiXX5GL1v6go2VgLZfbG2TEJRh9gLZrA",
  "key34": "4m8bNVuThjryVxTZdCjdNRK7VpjZQT8ywUWNMzgpsPKe1nJJZ5nAg1WQFo8zWBGZkKWsZoqTJYKhzQv3gH6XwLGC",
  "key35": "7JuYStFhrMGojeTF9cMut1aYyp6VnjRoWm18ZFrARefAX4z7oPSQtVjFGhNUh7BUCxpFGCF55hFKXTDKNEnc5si",
  "key36": "3vrQVyWuB6XL5BwAuKAYThupocGbLojiWLjZNhTBkYrtc9akkkZ1wR5MBwnST7XSu7hWYwUsmvpcnhDEcyqukyjw",
  "key37": "617J87VJGeTGWKY3iHf9ueJugX5mbjoMLH3kSYPddyx9ccP3q4o8b1PQ933kBt9hBn6X47ozKMU58CVBXWsbS2aM",
  "key38": "Qc88dL9UKiT7vAkJsyXdu2tpXxfdJMw67UxW1wx7Ew6Ts3VrDC7jEonnZm7m9RPRVVRbRtQHjh1a2JnXaVFtZ2Q",
  "key39": "3LsnVx376WdAWX9fRjUcnZbDQrtDbvjENDusV7pStMLmubXw9NM1iY5qhUHm42rQPTxu5fDY9D2fmzippTR51kwv",
  "key40": "64fnq3PgVqBcBcVyJ14y9HfDDhwBBASBBzQcFfmgjUiwEEq8yJSP3jLjDaefM3KikodQKGSkx8NPhXZ2qifNwgoQ",
  "key41": "4juQgQcZx9nzrdHTDNxHkGZgGvwY3icowXapmCctEThaLGXCSnshxH7qoAkyzZ7UuBgtDas3kbV8bGUEGWwAYr15",
  "key42": "54eKuty6RzXDxjAcYx9zZg1odz99bdJwDgaon1rVX9awHyT19zduxN3HK8FtpriLjSDqDppf1S5hw1wpAwGJXUKX",
  "key43": "2i8xAUHHgQnxBs8BZC51sA2DeAQQfMMHEgwybZv4EThPqwNG3Wx66nEZHn3iTnoJBFmsRRN48kfpazYzRAtV8WkR"
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
