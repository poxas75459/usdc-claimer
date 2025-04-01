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
    "4PeCrgZrgQE3RAVt2n6zVZ3xMrt7MJxhMuG8W6FuJzMLJ7mYM9y3Fnt8Bi459ayeawYjkiHAHJwQ3WzK4SsXmur3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPyrsE4YfMYvYPhhCA9CrEdsWmnngC39f9sKjVWXpZ1qdZ8nMH8K9GHj8nANU1fQ6WD2Bn9HKWSxDGcSTvnsSp3",
  "key1": "37A2sP66XTGdMEzxANDYKysq8eATGXca82L4LTERyVRvq3v3asjidTwdb3FV3GtttMYTLSMXxgGB5cgZjTeEDajB",
  "key2": "4MSxy9rAd1K8oc2hSKXcM1tqW2u6bfS6MuKHqFY1UjqtoASJD85b3BWT4iiqSRnuX4jP95uhhhPQzYJt7WpmXHLM",
  "key3": "38vmotUCAz1q9YKs971Jkv29KMLM7eRLrsjXsLMTrKzPgw2rHJgF4YbiZXsWoXmdv89KpnuZrcm1Z2vp4oxB7YL1",
  "key4": "3EhfHiSS9Yh35mpz7Nrhcx1pdKJdBxkgHDT3rF95hJi9VoWwbDdTiW2sgx9BBRychJrgRbjM7n1GZf3Qj2SRoKwG",
  "key5": "hFabLLffK71pKpL35GbkJoTk2KxgG24JJnyFC515dpimbsVi9i7WEXyyyaxHhEzbjCTdxEcDfXY46Eb2H5QoLsb",
  "key6": "4UchmhFdFzpEUvNeFLPr48z6KWA5waebQZbCXAvW59yGmkiMJr1nkDZFzNnhDtfJU12HvQyogXo1vDAXxA5P1rTE",
  "key7": "5jAEpVc536DcvxAz7bV63Ey9oQ87b6KHQYQAsnUr8PpxtW9eRiPF7T6YoFrpwLiSgXU3hCzBZrbuzXnHTte3YtCT",
  "key8": "s5SzwdH5rXkceu7zcAjycRiduiL2J6ycbkYDgEJ9vKNuxjz9CXATTLHjgM4HTXqcePZYQUfrHcziwHaHVQY6iWx",
  "key9": "V6NR3FUiFQScTWyiZzUA25wxEmKmJfPFznfYusQ2A3Zp6CZ5zTS1kUUBQfMtgWKSbXzh3vZEGzGg6AF6ZqADKcd",
  "key10": "28ciN3PLdJBZiWPmR8Wz3DG7sbxbHMVEVAcTxTDuhWgUhoDChuCeKHdxB3wuLo4ttoZXcdy1eZkVEuqGi28v9tw7",
  "key11": "3Q1BHTJHVKFfbCWPNJjHxeeF4YgwAEHutuKzDULTmYaS3Nu2FiEaHdMsRMdf9Wcgi4u8MhysMBP76dk36pn2ebMV",
  "key12": "578upCZS3FERQfLFcf3fhvqRNXLrJXreaZSNA9Gb6baEg9AicRE11NcAFGqcLHomBAVqogp2z9ejhKBhatTQWr4y",
  "key13": "5EX7xtYdwwqgfBwrXaUfafjahAoKDHVQBZaKhyLcj2EabKmpH2pEDzkLAJPZvaVN37KFZr42npdMRYipQKXP2wTh",
  "key14": "4mhBPowH5g1dxvreLgfpgV5RuGhDRvReb4SfB8bWx4nQSSBq82Qpogcq7ujsnB9zG2PH5np1TQ32iVMhZxqjqXSq",
  "key15": "5gNjmYhArXayeQ1eo9tCXgLMHt6xyZYx2CzS7eQcvidS66q6a2GGedqdZEbtJNyWpe2euFfsjGGaWyfWFj8RjD5c",
  "key16": "2BjjSXfLEMJKnCiJZvrz3L6Yiu8bnJWVnSKohdVDDqdSaoeZW329Pnsn1yNssvuyjquyyngaDfZCN2grDfJEggVP",
  "key17": "5BDedps5r4Q4ATvm3YV8L4hbrpLk29HAdkVz2szviqk1Jadxg5x5WgSyRQxoYnvscVg4pinrGbRaMdUHCsqWHrS1",
  "key18": "3VeheqtopMBQmsgsZG4B6dodBXJ3ZumqcYCMsg99awShBkSvv8wTNQPn6UDL458qLg2bVaw8Xi1SXEygY9fNSeo2",
  "key19": "2qndytBKkz5gNopjpTdjVpzgJWGT7PkMJLNf5aS2UdVvkjSQn5Np7fqKCMAJUe3yehavMYr3vdbeG9WKHv8SCg35",
  "key20": "CkbMT5YL5Nm3uBWEZ1Re6jABhieyAS6bEpjBjFqY4CS5fTJADZxmThXCsGMTMR6pdw4DS6sZ6UPqzE677i1CnBF",
  "key21": "4wtYi8u6nPhrZdTwAVB2Mq5Qvpp597VzQVDe5WsSuLg7gJw12gh3KC4i2ySdLtJaX5mK7kcKGfTxtPLCkCG1YvmC",
  "key22": "5tExH2SPUtpwxJKpQK1HBEVCHh2LMt2VvRjD3nXrhk3eK3A8i8FwSB2iWpSzxH7g44uZ8aMZEZNttHHna4MwEzAi",
  "key23": "4hE6AvLZUT6vSFab2YU3NY5fcSYHu9FGrKhqNZXM7PyC8gj8r5qXEHK7ZaXEvNnKM8ehNv26V2CSzhGdgR4QEaFF",
  "key24": "43JHB6eCWSRmGrXKHnX1feNeFmvEfkEaa8yVboYQcdrb7gM4gRFqsbPB6NdPnNokNb7ALXvknv2c1ArxVv3hc9Fh",
  "key25": "43fPMUYJLKGvatuQTKTyK1qdY3tzHFoBBuri3Pot6DxbnkqCJgZftA7r7gAyTezvQ3wjKA2vu6DxTSb9WLhSLSAh",
  "key26": "3kSbXCVTvD51Ke7Po3M5RKJKGSAARPzVSLbY28PFFByCeBewJfN862HLnGbUVHsXCkgkvsKs9QkH82oTCNezwyoC",
  "key27": "2kAMdYxogg5SFFREMxqitJe99gtj4F2K3gekosLn9GMqF9R8KQr8QWJvwcSKaC6ycpk9aYW6A25pPKkSkjXrTtCT",
  "key28": "4HNFBRNXSg3F6X5YEoy5b5rf9yJ1dTH9VhepccXG6VFrNpEnxakQiLkLu4CrBGnh5LRqDnJyJfBnFTYd1Z4CfvP8",
  "key29": "4UR6QbDWbxdgWCvqzyJzNo2pJXHnS5ckhsVac6PvmRGRvfvSN2zcerojzR8riFCrEzvcXXQWJcnQfhRsY8Qidhfo",
  "key30": "398PSnfw1m1bStE6qTGEq6unU5UXFVkLiPRaWq3VwuteFVNX8xb2mLnU8tu7UYxKu3ybmYDcQWwQE3bruGLRUk32",
  "key31": "3E19dX6EXct1sFB3h1TiRevZzrcPSkFxTn3EnTGUoYzAcbb9q4arGfEwe4WBo612PYrfg9MyztUK7uRZ1xuiAwk",
  "key32": "32od2cTYSry9q5vTNePWKM5r5yvMZh1bP3ioPU8H2ZbrS2mD7tuScGdyNoBJwdMxnmtznmQrQzDXoHhRRpfyeCj2",
  "key33": "3ZbQc377cY7rMcGDoHQanZnv7tXBnYZ8GWGvjtzgMAsKDQH6qRX5RwC3Nyfg6p2mxPQ8oWdf66Xdqd7nTU9z2dWk",
  "key34": "3FZkR4YCTkdgrTie14rZPFBUPZwz5nTPNxwxBKCuop45x4c5EEFF7zGM3BXY4yXCayonzbJvDVqiGtUBbadUhjb2",
  "key35": "32S7j4LrmRUYyDsePzgPKcB2UBUfKi1p87K6dfiSyqcqZuWdfToQckUhEo8fGE7ue1cgQMXxYBDSmeDbJg5i6UY8",
  "key36": "2D7Q4GgJv4AGkQQtxhaWBfyAtn45zEyzz2eB7vX326E1r5fNyJFdci6yfkCMMnEE3x3WPrUp1cuxiMEtXhgw9cQp",
  "key37": "4UdBetY568JSPZ8QDKNbnS6R151ZokP3BK2APKafJk4yCrT67xC1SiERiVzV1u3heCcDEsAiBrTFf5eGhVf8iTrX",
  "key38": "qnq9h28fNxsuy3VBb3UtmzdiyvCdsyT1tjSWjTcNB5yQ9FtY9mSA5hCTYPzh41kCfZcNj2dCw3KjFUyicspz15k",
  "key39": "5PPTbeyCLxEkdY31ppAykGGyDDiuJGq7ZBtpkGugYEr8WJ1v6mysDRbsiShU9TJSVg7VVaBoxFQHxj4VSVYHbTLJ",
  "key40": "dk8fcse6VfCdu57WUZForkFiifNQ7HEAe58QyKySbs2vh43r3LHuBchQ9KhSNsM5gJL9Ltnk8iGJxeA2CMeDunV",
  "key41": "2aVMfbzkHuwGstB9PhApSYEXsKaYqKFserBDoKfYfjYrvCCaXksoRcpBVwZipurufgSFsYipTMGYWQj4FJsykv8e",
  "key42": "3jJNvwZJTRBuMCehPthLSiTDvDtrhcwamj3QJNCkXhHQxGQZb5h41sNLAdm2Wv7ytESrH9EVKBHzioTC4sPtFL7i",
  "key43": "SuegTpZSH17LeNkFTugKX1yv7pyZfjey9ta42mCzj1LwYSHAQ1ZF9ySBGMbj3KV2eV9bLRKbkWU9wdr7EzrxjdQ",
  "key44": "27Foc5cGK1mwxqBnkorLkEMQoqpZ5jkLLzcvXFF7soSyu6nCyixbgNhQGKpk3eaojMymhdHhg3L94wAmw4cGsscK"
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
