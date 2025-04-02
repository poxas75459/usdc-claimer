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
    "5DmDk28p3LL74zbGDW2ozxKKYSurHjEVizEBf16uCD4bxztYnYosu6NzkcyN3srVMMTGideQeinpuZJo6qZqrM3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d7XQXWKSqnWJbAP6qWXcsu4jV8Q6edH5kqMzE87tVxKrbs2SNPQrnvhTC7rBMtsPoNqi6s4bGWzdxtwzezsRL8k",
  "key1": "4o4VKPoyjQzSN3CgD5PvRgr7c6RP8vPwQSMrRXp58bTs8FECasypDwZCwQpx3UMNHFYd7WQ3aEmZGRQEhhPhiqUx",
  "key2": "4YZo4tyoBBaSQvAJ48ve1Bg66fMwCRNQLmuDNCUZppQxTwEFkCAqWJFzW8byZUvoB12tMoutHEM7zjfLhB5sD23u",
  "key3": "3ZxiPRJd48KW2DKRwpxg9wEBCR2gbu62ZmETRN9rEmm5aW2a4WGKASKhwnZhJPjpLkcDQiCyCQTHFDagp7PXYsi5",
  "key4": "2Jr99SxDBwVG8UPa8Dh8v1zkaP7cXALgAucS187iKP64MUJQVAmK7cF4XTauGNVLPusC3ggHtS4tq9C1wmK6fftD",
  "key5": "cnCoREAXFk4y9f2iMXEiHkqm7FBmVBj4t3dZiwFZeYWWu6YffaAVMBy5KST64xN9bPsHZPqejcVB4wBuUS5YW2h",
  "key6": "kRsaUnQucQCYGQYA5J7xQ9V7yK2eAenfk9hpvLsmo6Q8meSRDAM7yFengshMJsLCRjsBGDYt6CX784HLfxk9NLz",
  "key7": "3D4ogtfR3BWZDkp3GWMD8TurqevL9nCCR4GYMkoeMh38Q6UFhFzaPKXbjkGKXtXQqsocTa9MHEMinYEJVPt5yHbg",
  "key8": "5P22Zf7A9qxr8hRfFX6dvGhwBLg2VnFKos4rR8B9Z9SJqZeUZUUvgVb5jnxQwLQ4i5ZJf7VV9ppPSZQpay2aMrTW",
  "key9": "47ALHB7zWPzKgJNC84wCV5eJtkwvJAz7tC7sQspkyge7LfCeZPxDjGCvPqUcUECDFfDfWLhjXfTPtUEzmcApHPFY",
  "key10": "5CxsCNAp61Rgi4PvmKXBQZTCX9R3fKCxqLUnknSVhA6S4Ma2C7QvwYNJUCtz5regAX1HPJgui1VktHuK2DN5s2jF",
  "key11": "3uJZ4aSWdg8UPiJKLZMc2TzUDStWVgzyQ5WqhpwHhqhJtnfdPVD1UGnDnQDkpHVEkLwrcogN3jYPE38PVA2JJyCn",
  "key12": "44BWX5quFvLmE7RqDYC3heaBoyY84kTwgaxAyg72N4eHHiLDFoRePDPxonprYvtgv8GAW3MpX3cgbYeehcJEgb7o",
  "key13": "4WJUF69WCzeUmYZohWkNoZew5ZshCgWg8xQq9VmCRyvQWjFfNwJF759kiyfJy3hkLnSK3Er8mf2kJFm783He1kVd",
  "key14": "5niu5uHMBHtvkjTNAm3UncewJNjr6VvMtp4jG4PxdrJUaL6tvE9dUHA7pAi1P9wcZfDMVPhGAxzDFkSLLGoTseCY",
  "key15": "3uzeJtQ1ZEMNiVgNkyfxEat3VLyryZ2T1pGAjvuVqmVdhvYdAhc2SZZshrnQSStsSjXa2Mn2LT8CfCn4NtExvRk7",
  "key16": "5XtiREr52UmnT4KbMWgmmJn6bZosHUJWzNHG5UwTGynYkRD3AsC1pBqSLdBwRyGoxuGREmP15iA4KhpyyC3zTQHT",
  "key17": "4WYrdtJHxSTFq9DVSLaA38svSRLuuryvDsdDhiPrPfiV4h4PxDk2LSwaZ6zso7JkPd5WQFsShLraSFAetPiQaz1Q",
  "key18": "5fXdWcYnt2FEMtvZqevYesxk4vuxf6fj2fcKUbyvYi3qcvWx8FZ6vaHZDVYyzgzq9nDZiyLXcZax5k2L1KWJrkA2",
  "key19": "3yVzgaAz2Mi9iFGC9bNreQNb7Km6mAUU6hexceuxs55Pfk11tdotsuMAwvMxopgfQPCXuLKTx5Cqps528Aq7Uais",
  "key20": "2hq2z4do7RkhoKSinzaqqmyQiScQYQGzCLns3mMsnyHdscdxwiKo1oevYaR6LPdKEiFmhpTUAiGBCoHvjj23VTdy",
  "key21": "NL4jeh2FYT2Zn3PBvWisPzu5jvhxrkqkGNGoAKzsLbo6x6i7hDS9AEKLz3XibVxguaroecbjhyEx1oTVJ3piFoW",
  "key22": "2cpFgzW9evVbm3C8hdLc3VzV5EqteXQGhag5bjLb2abpzEVvhcvn3TfNtoSB52qtnCfdqAgXu3yDCs1o6DRE6s5s",
  "key23": "2KWNXNapHmQQC634c8AoadozfaE9vpcq6KRLiR1xEbNsivqu92Az8eHXpnZp9eqte3ew7YwbCTN3kL2anxriAkrX",
  "key24": "3eQ9LzhCc7zwZtHwTUmQiD18ryPecGch92kBUW9WxMoLSZHHQnBhgWTp6VFUrgWsKFJgMrBAxkVpSYPxCwpoptPx",
  "key25": "3Aweqa9CMhL5mkPLMkRGJY7gG1ehiy6CoWAi7Djv2CY4iAsgcT3ZYYrN1bvouQ4vFkZDRB5hxzqKMZ3JejYeKVLS",
  "key26": "s7xRpB6NCnZVdHrJuUQ5B7w3UkgmrT7jFDTHNMGSCyemjUJhNfqERxVFqTXgZjCAb5yqHqJndaZBYZv4mg5o4w4",
  "key27": "3mcRLahJMhYY2MB3wiBowc9e71m2yFDDTCXt81auXCavQupE5nKmuqAUAf3tjgC4kP4YAvuGeNDugkoQ8r1Wg6R7",
  "key28": "j24myzmKKG5vj3UETJurjNx4L8S253asuGfL4XrX2gb4bV5pyJodycWXs8CM6v9gUFuzWgaePEdrqP73WQULKWa",
  "key29": "5cd9ENhGCF3Uv9jaWofbiBL5Jcmw7Y9r4fqZdU4KYxPtAWxvE4d6mWFmLAigttXG3nDQxS7QGLDNdSZbDgsube3Z",
  "key30": "45QQL3RSuPBCcbtW6M2EHimFtoweqVMYUgqzPua32YiTAdTJu1GJTNsGokq5WdhBYBa8iAmBdasuR7AwcrzmKJ6U",
  "key31": "3t42cueUhBxDGE7xdcs9S7meayMTSsy7xzUmBKhwL6JRabXhcejvwgUpAvGZ29ziLjrtwaDJ5kYtZLLKC5JutrTL",
  "key32": "vRaT5iQNnjqn29zU6P2tvAngRu6Ts5vqKPyeSrVtPpTE7KL82n595YnnGbTrhcJgzrYZbhGYwFaEadU41SGyALz",
  "key33": "5REQZ5msCpZbpeymzPVn3efrV4QFNaT2PYX6qE8A4DP4Xar1JM4PQtkpAavmdeLUyVgvFk8rE7ZZLHAjCAEVsJUt",
  "key34": "5KAs5N5waVq4FqBUeEUEHnaTG2XGmg3VwJ9S6XHGXxp3gUQXF9XXqqUeWBW9SGWknPTmWjSdRQDrU1aAPLnSZYnE",
  "key35": "4hqrzf5s9r7C2ybde5QkqREJ726BBXX9HesBAfavKyts87DFCfw2LhYaYps6Ly6ajZS3HobcvQfGW8BeVAiPVNtN"
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
