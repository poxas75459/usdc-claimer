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
    "E1NvVuTMHCoimKQ9xvVSVJFaVeVWabznUawqx68YJShBv94FRLSHGATbdj3TCD35BmoY9XHFB1qgCCBiGwbuQwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eRgmRprxR8xJYP18BbkN4P8ZLa2Gu362ZYqgypv1iELX7QdYu2XV5uUWkKfVEVAGPqD4mDcVSDUasCCy7KC6qp7",
  "key1": "2bSGkBbaj6KSXRzFAouZf3Pz9k5ErRLJg2XhKwYuL122dw8ua6fPnvbx763Sh9QTRP5DwbtgRZo5QS6XWQEkGDgk",
  "key2": "5vtgnUZYrE7Tzwcb3V6Rt39V3R6X5odRDorKEEhxtfEJrvXeTzMCLkUcFEsxyqxmNZAqyu3u6jga8P8qMUJWV125",
  "key3": "4KtV79nySXEUype8atYAKdvDQxjKeR4TG9R3ud76Kc8WCXXCNvaK8z2pNegrXzJLrE8zeBgdYcR92zrrsBZnfY5g",
  "key4": "4BwESgcqwsJe3JpbNYxcCACYwRP6VS1DYHCaEDMwkuiekh3teV8YihAZUnm87f6USumW8R9izghebVLrZM6inggw",
  "key5": "LqYj3CJCXbWPwePSkGGM41zRpHm89V3Yk3y7AAJcST2jYy2LGRmHtCJPwS1eiUoprAEWhhwVrweMpYRieWkFKsa",
  "key6": "3cCHTz4Hmit8byyqUdFWX9zGsWQWDquxjF2ddfeYy9RY8CWQGQoCRaFbCzK1s7smN8oTv8KSKQ4fiBT1wuwTPQpq",
  "key7": "2Pczo7zFVEBN1M3Q6YR4avXfToFwx8fVNWMQmK6jMp6U4LZH93kqi2JnaDv2mCR26qUYPTHwtBQPUUyDnmvKX4X",
  "key8": "5zrVA5zc31CvmUwmH1xxoPLghaFYZwiWu5kQGDmUH2bF82cWSkGCeS9K1mN8JtAtY4aBkt3xPypKvML12uWst7sZ",
  "key9": "4PBGWSqSE1K9xqJ6tjT2AuZYMQVe2nDzY3rDWjpgNzjGCcUz3UXTYz1m3F4e1MNiqxKpx5iDqfC7pevc2N4ipVGV",
  "key10": "4hUJYp2dbHCBKykQEWiASznMwFjkmzUTg9YnRfUEJng8kjq851nD3QTZmGpGWZwP8HYWzJyPFHXVozboWgAVTqdK",
  "key11": "5HxeGCAtH1KBwbeKHoWrjgS2273beVjvDH22cujFWocw626eqjGoCxVyn9WQeVmLGhv7s71z6zMSDPdqz322BDAL",
  "key12": "4jnWvTAYKETXd4uJ2jf5DAgi3K2JxNksudyPGHLxXNEA2nQaUcqu1AxLKehWcCYR4gRYo5sHJeXheGdwh36sPtVT",
  "key13": "3xRrnSqi8Wn2kQuB7NhFzJ3KTbXceEZch5Vv6BtjF8rzUxJxp3a2szqEvyKkL1zZPfmksQweABRkuQFL4N4VqMdE",
  "key14": "pR5wCBvE22W7RcTVGWQ76acBFWKvU3FCkdmq9wBCnZtH7JZA82cPamy768BRmWjSkipRDfTc7TN5RHEE6aGrjEj",
  "key15": "4icGK17CBTXYEhsd4oYdcW6puQTmzCa34WGrrWmae2FtqZPZqk4rQdR6tYFoU2UrcnSmvCwra3nvf4udRx2nqXi5",
  "key16": "3bbijFZYHvBo2fmpkdTvRY9aHYJJUeiE815C4bHV4kqxczBC6HLehcsqnAjWax7RkabpwyBCydcJYc92tDsEqUn2",
  "key17": "4HG8xgbAktcxyoURs96hFeaSJZJxxbNTw1as4dZ8TuwqdeWq695rXJNXDgSYFu37gnnK4kcwK2t1m2DnGDkwnz3G",
  "key18": "63gVTaDdPnz1BKuXPe9PVxuz5SaxcEZr9mhAiZnzqwPU3hmSkT4yQFhvqLARwcVVGjYZM6SF6LjVLDiCBVqsGAHY",
  "key19": "2s51aoK6yet9UmV1UoXQ4r6gjfPUmX5s58uqh9dzN2HTWfHEx1TNEZDoFr7vFttqgpk58Lg5gjGfvYuLiNVZKSva",
  "key20": "dgsQvrr38w76oGbABBMigjuXWoR248QQNUF9N2NCaRZfsn1uqbUPNjvbbm5FnH6riP4u89x8nSa91q785oNpQms",
  "key21": "4iEr4S6YtMMRWDA7L22Gv8PGDya9pLoR83qyNqszv2YStgY9hTP5TrGJpu7cJxE44SocVvDa9iorgRXYr8f1Kth8",
  "key22": "56hHTzkVzdDSekf9LjjqYfgxsGA88A9DssnHU8iixkfDXXVJAfJUB61iTAFp73UGpLwtfQLyw2uy8ZHm7V1EM3cp",
  "key23": "B2joWkdtcnVraKebzGijP7FcvsaykDMJkBUp7wwoDUfsE458L2srgbVXFnGiAjGZgJ5FWCaosdRNiLQPMd2HfNC",
  "key24": "SDxoxufVkptN52bAekzUm84w2nfZvFPQGN4SsihyEp4HjGutaoCcGTM1cMmRrDRXeAUSSFZFRXR3RBhNS5HL5PL",
  "key25": "4BT2E5kXTUpa3Wd3PbytpsBCdkHHVAzTPqjKoS1miFjTGjab32ZgHLcjEp47vKxweqFg1KXstH6Rviak3y1jZ5mB",
  "key26": "4tLCWTr3irHa5vd6DaXoe5u6L82QyC3FonVQKfHpeC2VeFB5AmUgL2WTav6Mg6njZ3nrJ1pFsu5oAWrcKXX1EhQ6",
  "key27": "3jsNAqBG9iSTYMzDGfNqBYeSobCApK5bXhB3b9meDwrU6aHDDSz1oameDzHZEMXiCy5Nxc8WpBFPehcBECWwYy3e",
  "key28": "5KgiAAbZCvBHEaSCsN1Xk9DRMNrMJvRmdkEfNqQjbZtMhz41WsPP2rm8aNYSFyaEdR8cu6tPgHF7VbxUgC2nvFnL",
  "key29": "3jaFCz2nEUsXTcQBX3EZktMhuG4b8cSJWF8qt2hNVAMZfx2VFFaFMzhcVkDRSLx8qVS4NoAF1SH8mnjrLxVK763g",
  "key30": "665bTcTz92iwXEEfePZJzzGDeT2NBUmttP5zrvtG8b3rv7yARSwdJeEp6VbmQ3GGZ9efAUbAsFi3THL7NxFvE3j8"
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
