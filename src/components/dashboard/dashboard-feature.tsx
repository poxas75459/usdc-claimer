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
    "5jZh2cU9zKCKAohw11vrBKFDb4RtNQQkdn7BwQN4gGyLyaMySRRsb1K5D3qFVknkocerrNrVYz3mCCaGoELFWvmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dk4GxxczK1UxZTgUcwuD8UAseoiBUVJ6EPSJcD1RfrKv4yS1NRy6Gt9k8M6MUNqSkoY5zRW4NBX3sJmoreJRi8g",
  "key1": "36fBF1xAZcRTqDYV4kL2LM5va6cnjZkRbioMogf5XMuzDewnMPa4TfYdaKM293GEen2HLsSxHNfVLXKwG4i2bYnF",
  "key2": "4aKTXv9YpjguQFn7Vh3v1mnfS4BbCbMPdzEQMU9DdEQpgpQcK2ngFs6RpzZkdTmUtVLSvHfabviDHRCHi6pFE9oG",
  "key3": "2FPQ4W5heonyyP36uUevg86gLiUd1wcteKL9zKtsKXoVUSmcy6MqyZPVk1ndZXB8hVWngDkPUaD7KB2A67g2a1qM",
  "key4": "5F1K29EU4kw6bupPPNk8qWQ6fWxXZNhbFtMEQLXLoLkzWdBQYyYV63Wgkb1RpQuq2pTnBGuDDu1GYSkousPL2Wgb",
  "key5": "2LAvHAkuPZNcQciqctKw6YrECvHDUzf5VETy6PgpUW74YJqT37ygN87vFt1dquJU7kMweSRv219jGLyNRhdc9bsh",
  "key6": "5GDCbdusMU9Qa65NrsS86MQy2nVAuzY9CkZB4UwJrKxzuWxZDSNWHuxUWXtqjHcSEU6BJwycBGhsE4mgg5bzyr6y",
  "key7": "5Aewa7nNdot3dTx66ujS932fqzGvLpe4FuHFmiZvSSUp5UbUS6oW1ePFfFyeeBpzC83mubY572nrGL4rMMMozgcc",
  "key8": "4wSnfMkqasXDrXieRMBTpULbMnaJBjV5HMAL3vuxNRFA4A9fKJq6psvmovHwd8YC24g7nBQ3xxzt4YWZgQSXKj1J",
  "key9": "5DCPyn96D1mYKaTopXia1sk6MgvRiaGmznYZGjuYqg97Div3X1tWc7dShZmUHyiJbHfmQtJ4yBLYQWzf2cdooqa2",
  "key10": "2UFq8ojSUcs4inCVKYSt66b1X2GwvZCgN2VEitqf5WP3CBrAxBoHGJj4epEZXRd4ktn6U9QvKiMEwCrVwDHwX9hH",
  "key11": "2L8uyR2TdABi4i3tBxMxgyh3stjej7kzB3g2RARZ7RDNsCLghuqU6yPkMmT1TupxYdNyVVmKEyvnnAZHAMb8Rvkw",
  "key12": "3ZNG6LvozyUQ4FSjjVKaUpGpcdipHa45eBii8CLVDAeCggjKg8H4ajr7a2EqLZuFfdV2DPsdN9Wkd1CgSMbf3RS8",
  "key13": "4XJSCJB7q78JFexmEd1gQPgcux3iYCQuj59bScdhWG3QJB5jC3TGpVSdE4xipCC2CYGJZEtqpgAXTcGQt3HoVmQ3",
  "key14": "3Yo1iPjTEV2TxG7ZnjdPd2gkGupBpefiRo8poZw436yrmgzQTvymHynhe7W5otDwaZ1qAHGGyXBfpRnBEPqkfdL5",
  "key15": "36DF4GFV2AGkkKQNa2MMsY2xdXzg8aNXX33NreBTkdaM5S1SKpoUKYNY793KZyKUPeTEaCLZVAorGY3tQQCPAR5G",
  "key16": "bxFYYBZpeVs7wJcfR3roC9ahABgy8dk9rgoDNmcFBLhhmtDK6BPR2VuZ4dHA4g3dTKXoeqZL8V9FojupiJa7dgY",
  "key17": "5v1kQZcESL8GnvvBpY8CkgKAdcSihtTVonapTCkd9vauidFnPu8uS2bijeXynWD2GmWQj7SfFXDjB1PJghTtu8eB",
  "key18": "4D9YhvKHaFju67ftxVvyAUaUTwS6XELzadwCF36XAcNhn6Mhfh2ZHjDuVp8QZ9Z54sG2bSNk7kPUKUEJEusJyWMu",
  "key19": "5vuRW1GYAgfkvGiKP7Jc3WwEMdEhEAYuCNhdMic58CAuSckgMZDDrzMozhZRJk6EP4BHeNUJJHkSohvWcn6AfWc2",
  "key20": "393g25RcvUFdpY3b5u2B8VgqhDC7jFW2dXHuEBDmJQkpAxNiBYFABWgqeDNBhxbdJ1WPuYXDX9HuFEshrxtjuCAT",
  "key21": "2EeEuUTpVhrf6YYNMAr8dsvwnSufyqxqffEZSyzJWVBB1wohQZA5b6G8yoRuWipBJ2gcbrvugaccHKJCsBscaFJi",
  "key22": "2ixoxYGCtqZrtgKxK6bpwvUD9cnMe5muS9f78F6GHbD9GBN5fkLXytHpsbVxbchehigTz4EcL3WeQ6EPDtwwCZc",
  "key23": "5zUbA1vQMjipSAiybzqvCYW58fZqQ6gBhgpD5VbbN9Me8vQzaBSkWAtYqRLbDH5mg6MxVHL8FheG8k2YJaX6J4Pf",
  "key24": "3Pgcyhs4qHKP7XVBr9Z1yvvYTswHjyd7aypSYikzjfaZ5YTy537zCzjmUAN999sQs4PALgZuXfmp17wwyiwwnZQg",
  "key25": "RjvjPzer8dkrNowAn7GUdWNeoxB7EL9CQyFYmUUyfDTaHCVDfBSZQLtSDkKYobF5SgWhWsSVExNMzqhXbMnJXDX",
  "key26": "59u9tatphr4NKPhMQEcu3zQMHCV8q2eLi9YttEmh8gQgQoN5m65Hvvei6cB18gMinWZhqPZmNXuzS12e4DeA18b5",
  "key27": "41LUkS1nWrqH1e5XvLu6WCLRsDMpeBaQHuUBS4VwdJBnFrmxkR4NHDecA2Nz93SZGLg1fNLcM5CeWKgnTQL8EQVE",
  "key28": "3hs4cXs5jnCw3cYHaeLcDT61kveMkjCh3RYhDYQrLBrZp6VNKJcY2ntFPaYwLhKTEDN6yqjMtxHfJY4LvgX2VLq7",
  "key29": "5vM5qEUWbcW9hDnSSmAqcFsuuAXuotJun5QVbvpNaEUervGPom2ZcALv6ffTzRHU4UM6XNqpi3aq5i4G32sB11rM",
  "key30": "5pkPUc9sZg8c5Tukrx4gwXsf2ftVBxEHaroHRuV3nHyFxVvaT9SWv4euwhptRnvcg3PvjLDHCdV9L1qqzR7Vdn51",
  "key31": "3wsJpXeEQs7398RvDj1fWANQc9mcogwmHinyD2A6kZt5xJVxy1xea4QB5EMAt9omWwfFnZifprF3r54kdTtHhfSB",
  "key32": "wu2dzCpBjxMymaL4uRiEtqqzHXm2LT6VntxQJ9tfoBG5P6hn35L6ZKrMH7zoi6w4vCyJkhtH73RNXEPh6iNtQd2",
  "key33": "iA8Y5EtFUaEq5ePGcKtAnJcqkVb25XcQ9gxXQJTqpB2R7JoVejcAY3SVYd1SsktMw7nFwCyikHaf8eGetCtzqif",
  "key34": "4xX3EaEVzLQJ3siV9wS4RNt4hLZcTHXmhjnqPthM7NPT3bdr7NzFErF8FCi6wDWUQ23tg19MLzmHHk2SyFARWcgE",
  "key35": "QFH3qzdY5JAhNVoMK2gTtLMzrBJwTssJ6tMzfjvgcnGAJe1DPiuvGqkXXico1F86KvEdoMrfThZBhMvDMgRwReb",
  "key36": "3mskUJfs4qcXFXQPhv9sUbUbZrsLfYGrXhgE9WRdEeagrfqSYKTPCpBBvFUsM6U43cKWtb6TJSFeLAsjfaFdSTQN",
  "key37": "5eBqAUMGAZmV9pz6Vd6PKq7V5Xzdh9JPnepz82ks9Zm1VpY3XQZfrjAU1yumVc4T6iZchLAeGHWYVpHE89gMeFz9",
  "key38": "4RgyJjhoEFvnUKbq6hB3uVzEpy5CYbJgWK1waz9oTEFsCHuaZPWT6oo8Wtk8fFjT8EvsY4Mn1Tw8HAbifjzX5X8r",
  "key39": "5bgtmVzfhwaQ5w9uwGW4yaXqazQfXBezWi9HRnwfGNaC9UHjB8UF46ykaJKxBDvZf4xbZ3RQSMDnkDmaYjwTt4aG",
  "key40": "4fSNkXLFEWEgXPU7Jja85gz3strfyozRP212SxVwDQoECmtPqtwPrVQb673jWG6xyc3BtFfnziWdkqV2Ck1X6xry",
  "key41": "3yMaUZeEfna4oMWtTZegQsWdH9EE9TBxNP4q74WvYm1dLM5BBvoafLTwpzxxeYwQ5mMuYK1KyFbaJbZcVkhp1Puz",
  "key42": "wCtLmAsKmmPY9f66R3ecv3JzsyKnP4nYVLUNnbMC9Yv1DgWJz28xRsZrjWMzTAqPmCS49wZoCPQ8m3JP282H3Ro",
  "key43": "3F9vtssDn6CV65e4JWPtzuoznWhqTdUyydDMLKVHpjKLrt5wsCWSvW6VWW65SNWRpPbMwfmwciPEuccdZTSQkEtX",
  "key44": "5qZURav79KL9TQpfS1H7xDSpe8YRZLJ4kogbtXd4VdTs4KR7XB5ooEX5a9awkoNEDVbBG6Y18d7raQQvfqREbPM",
  "key45": "5f5y73C87xhj7i7hhLGNenWeT1ZgwDxhpsSZUKhKLsL74rQDnopsZk9tTHQTiTWehGbtX1s5tUdAKu69Lsb51Y5q",
  "key46": "2XArBhPmTZHJUfHzbnej6NyXcApzu71yKynwkU47e7fGb8g9cdY2qP3jpxW3BekC1ScgZPan6VLSgamsxnbMdxtT"
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
