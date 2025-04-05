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
    "42NoF8qBqucNjVzTGWp7iUy3hR2iaTzvnD2N1CR2e1u82aJRERdPk1UZn3JdvYFNyk9JNFEAtc2vWLRg57bbfaQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23beNbNJvcHLQqH9eoBe3rRyGDcgaEwkvMVDscyAvdkhNMDCnB7ATCeoh327wtEJLESXZMr7fkjQSigoSYkAC9WX",
  "key1": "2FN6c4ruPMSVwdYSQKQ6k6PJiT8yCpzFNhgA9A9RxqDV4scDJzLRVh6EtgyBUbEzxgwizkX3vxHTuw8jx2CxR4kU",
  "key2": "3vGMYTMqA2ig7YumGCvcHGP3vSiVWKoQGUAs5EFaKsGC7pazkdfdUkvJdkqxmE8f2SMcrpzj1DCMLSar8mMtbKcQ",
  "key3": "62WGmnJXe3gt8tBmmmsiYPHi6FTovYtwNXUBbn8S5yMuwxtyqAncztQsuGzkZytSZ1tAmHEwTMJvmMLahM8GzHUs",
  "key4": "56c3uxbxQ1MAoUxRoUrhCwKfBh3Cp3MkgE3LmKBYxc2NsAvSjGArS415s97N25iwQ35NDC4MTzAZKoAtPgeoafyP",
  "key5": "2NRfpTi9oZzhYJKAGLCPt6usFXvXxPkPtAUpXSa3nGCL8Z7iryHkhYy5owKp1nKwHDgk4d2ishfxxQfH4ARmX8tS",
  "key6": "5KEL5tatTK6oxg6aynBh7PtaFpcPu7fk8yCbzMKqLhw8nWFHSpamVWY4WhdY1gkichmcxi89mHHCe8HieGjVwUR3",
  "key7": "QtRKP9p2M12dPcixKHtmAbVzuDJfUBhZ48QtB5f1Sx52AdSbesMGWjsEHgkEUh3mPKGUdba1XFfKbjE4Ud4N8Cv",
  "key8": "39JrWVgSS3H62Ah9pAdJ2rSm3WLZwEbjX3ZAbaJ2jqJTeVe9k1F5va5qGCDdsFrKN58mrFzRrMTxA1nqR63pMN2Y",
  "key9": "2VPUfcgyySFQC8jLoLdmS1v5FzEDKQGjb7ykQxKv5LXhaCWU1UoJ6h7DqbEGiHTQxzDR2yjEGwxWvXJKtFh3dNF5",
  "key10": "42cvUpjg7b9Q71mAxP7z6kSvuiaLcQ9jV898gcG1CKeYZ7TuEmNJUsaBkGaNes1KVeSXKDG9s7XPHCw9rAMogU6G",
  "key11": "38pPve35of9pjNMqMZrLBscetNVoABvdEZVGBSz1BFX8eseysmCPv5dT4UnKzwYHcEDHZGG6SDMjf7YQkW2sncVM",
  "key12": "4Y8Zk7G2TnoUu5bq51fZ3pgLp6LAN7i2aw4m2kjns72ogNJPeajWoXTHe41a63Z3PXw5XLgCSiKLX1bHS39nnHo9",
  "key13": "3HBC7Ctw6Juw52zkCbac7mvtPWgpsBoBaks8Mob1eaunKR141Tv9WJrQ2Bayt8xNUNHY6F7p8nz5uwDK2nPkFg3d",
  "key14": "x4k3rjqRxP6A55MDfeVsL22FUBRZWAQTaJ5omGsQyQuLj55fiNfsbBH9cKsR91rgqoXm1w6vnU25EDwZN5NjMia",
  "key15": "4Gy93k5bVUzzXTQL5jmJDoLDpwYYRmpinmKGQCv43jaxA2zKFR1ec645jzVnbpMShZhiCcRiFfDZ9oi3hwvqjKkX",
  "key16": "2wafe6izAmoatBD53Nh2BSJ2ZHxHcSoGKoLo3p4VrpxsZy4G3sxx1NPzXAZppJ2RiCcCmhJNtRdkho95UCYozMC",
  "key17": "5sG48CCE1efofq2kLgzursQHDF28NSD7vSQCXVcKWb36rgpYUr3WrKYz9htJkzcUYd6frwEXnQLTGjzML6f55eqU",
  "key18": "5UhwraSewA3G2sd8otgAKVNLPHw2jyDiLeUKP7utn5uEVXVfHTuBDNuYCaGwJyqpBAT7V3xDnLtGrbth8SPixqoa",
  "key19": "n55m49Q61JD2KrzJUGHXH6N5nzJfZVbVMptq1mMiqn3EtGTpy1QfWeP2mTH3id5bgsTFuCm94XnZv3pq3bSGukp",
  "key20": "5gAHtS92mgQ9QRWJExf6g8CiZYXexnZnum32joa63u53rvz4QrWFoN8Rp6JyF39QtzAM4zLDsNigVYM4X1rHFEvc",
  "key21": "5xgjGPKC8nnAik4PxBPbZruqczJRua3Cigeb1q4xN51qfFEdUSMgcbuQcYnJp2CcvSgdKLQ22NFVtS59ro22SmPs",
  "key22": "3QHAgoFA49zWhTX5mtytk2nXSFyRYWe5tnSDn6JLwqXtUxtH99HpjwnWhQHeQa5FpG2kdMMoy6ZmLGi5v2VMcT24",
  "key23": "f1yeYe5iyYTg6TUQii6hcS14gDETajYYsw21sDN8gDRLynY2YE7j1FLGgR1fBrmpNzPsELoaCb6zYXdtFTuFtPu",
  "key24": "4FAjBjr3tEmL22vP48aBdFZKUG28spWxtU5d95A1D4taFUV9vnaijjNTN5wWsUS3XReRiFsMZehvFjrbbZWbWvtt",
  "key25": "5LH6uUi7BKfa4PP9LGanHv8gdBSnyzNpjNat6BaLjHMwPiTttr9VaAmn7RHJut9iFqHvUiAyP3P1qVGYfSqHmQTv",
  "key26": "6zzozUjYpavUp8faJNtpx1K1uJFqb77kTqQkQNyn8e6niomLC2vGwyRKv2pMnbvaxMQq7ErJyLJRDmV83NoKeoj",
  "key27": "RgtZkj3EQzw5hLxjBmASmaNPdfwCTw2PtxvUKK2nBmEd9Pb6UPaCuGwxjfHi6rhGWqWD8VzoQw1iBn1bnoXd793",
  "key28": "5zNw25zxgxj98VConG1g55e8DcmE986ktb2qDQzoy16vsXXhvdRT853t6QAMRxsWyxm5j39qJHU6f7h3D2AGwFi4",
  "key29": "5j3s5zYuCpcKKS1JADcSARbobPySxKUt1XPHyFPTotr5M1X6CWwr9MuCXwDQgjoGCgDTC29tUWCytnDwrt4yNSYK",
  "key30": "4peRt3v3e6F4RmN6guSfWTR8Fhh75Akngv5BtwGEevgRUaQQuorBXRdbWjEsfSYRSNY9jRUwpJqNdjh3WHJUXPVw",
  "key31": "4JPoaXBeNTJqN8X94iP4QoSmMahZGti6LTb6CxK79AxmUcPeqkNf1APwm948nAFgheJfRSQKYWMsdeTtx4i682rP",
  "key32": "3o8NvZ3uamA5zqLvw1xbSR2zE1aZpsJBzbXkbARJp6jb3MevUopfAtCQUYgtPo7n84L45DybvHszqFyMUNYaNJGp",
  "key33": "5P1WFM1btQURV3eyEq1e7AwTa2jDnHeDDAwZQFRxULWwu4Sgr1oTe9rAhsq5iuPeeLe8eBWC9r68cGSTCUhTcXo",
  "key34": "2EtjwAK8awudt2nBfxPYFxCrR7Togo7dGrTgXamr3wr1AujsrwfjxXxJyE8tQ1RhBeXHnFbEnnXM6oLWJwXyY2tE",
  "key35": "4YXYie7YABUjoFWfEpVDo828HDsPPyEXaTFfEUadQ9gDp3pbmnrjjyeLTmtfHyvcdJACcBfiYT3ueKDFjtW1hegx",
  "key36": "3ndrYDeaQyPrz98uhv9M5zmiFUpoEhjam8MrYqVQmtidUuKzSRLVxiUWQmrV54jbF8yezCuKNcVzcWqwqxrgJv8a",
  "key37": "5N3e8c62tmtAJkDhHiXZ49LHY5urHGrkVco98cgHosMSVLaq84exGrQ2zexRXo1iqbroAo9RUjUchVaxdcfsx1R6",
  "key38": "5976gxGExQYJpR61aYAXc2wuvMP6dTi6zgJNabWmUx5cjvczDGGMsPVb7WeMjYLtyMcQoMjTCc241djTWPj17MFy",
  "key39": "4Na4bhfaXXnTf5UThWP5hBWCr7y6VFPpMYNixwhfFkfw2yQKZG2rExHJF6PnMnR7QwSbKXpK1NchqN9HGmQH94dx",
  "key40": "5Gd2bnJnTqva9BH3MLdBQvktzWFTxxNJzsnRpCqtgeHDtq7X2C7jr4Gxi9jGhDeXJp8VFhirZ8yFtYhYEEB6jmn9",
  "key41": "3ZoUnyGH46yWHmP6sPmMhg5LFvvVSfD9hjwU2NFY9JujW9YqMnys2ABA2CViq42u4Ho5S2JRfjc1qoyxuaXkz9E",
  "key42": "4QXCacejM9K95JaZtdY8XeZvhXp8mJjQ3VpgSXT6GzAZ2zAccDDEg5TQEyDQvBUt1f4BgBQK1C7JLj1WhA3fPaCj",
  "key43": "DeyJqJ4Y4yfYxyXtoVtAdBPXS9jhunUAif1v8C3fRbJuqEqKdsD21rHxLTC8HiYtsPGQor46Jm3pJxmM7hbCzCH",
  "key44": "4W5V2hjQHBpX7wd6FJuv9p8fWfXiD1nowPnACefFpg3dV9sdExBv62mnvPND8LD9k9d3s6dFmxg6qrsevj9zSeRA"
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
