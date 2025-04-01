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
    "3nWtr1phnY5QF1UM32VRzPyPZKbFfuhmYBdB54WVW4vHchFHYZATDQqmE2b3yKPYdP4yiHTGCqBvrUB29oFJDMEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XQisVTffibGpWoGSMxkFdBq7vUXRqTmzgJktAFbkrzqE44y4JRwkEJUVQUFU656suamez6DK3q31y1cq8vqcBoz",
  "key1": "4DyvLB1vhL4zBqojrA6bzUk65f9NYPFUYx6u9t7nDkKH4sgKSbqDptQqkWvhsnUT1tcGMP2s8CVpatbgKgHzxwVx",
  "key2": "Z4mV3nZ8ugCcZzzvyYAoD4w2EjLE5JxRoGNs2bkST3u9fugywzNpP4oBLa9YgJzevdYwqbU1dcJhgJw9YRpknyz",
  "key3": "3DEags83ELvuCqG5vK98eQhs5sSVBCo3rwy7LkbDAhvTSqLEjKcHR7y2Fwf3GvnaGio7WY882uPknj9JmNYYKwoP",
  "key4": "2PcUHnJSALxrDCDXA9LXEeK1XYaAuSqkKDHSAzsdXcYXm8dJKW2L7oBvqK1PAFotNuVYPsqia43kGpmGswVRiRNW",
  "key5": "2Ezp7wbKbq1vMLpvGvmHXn8fHHo1XEXuCoGun2vBfFqrFxRBJ8gew9LbD82b2mhJWYPH4kULbgdRzcCgKPCzYuDe",
  "key6": "5U6X7Ty14hY9YJZbPSgMSdjn8PmzfFHYo3Jq6mSR1RKHc5FTCRzSJJTKgRtJevSe2UX1AtdrgM5xbaEjP3Fcg2w3",
  "key7": "VpFK1VAKuiMiSBQcpyiCFYC3KXL6R46Npgv4J9UafB67xgmpypbJ2mMW7yA5d8gV6WTTNM9gWeupj8Jxy9xcBSL",
  "key8": "3cVnXUXTekcQpY6scxdAnnHFnWuMMfH3HesMW5rUFczE37oN4NQug7wM9uXXg68FrpsvDDSWBndeAbjSBVib24r",
  "key9": "2fKbyBd1DodUFhZyfWvm5s7N5MYJtQoJeD9aFKp9wtz9BF6fj9MiZYuundd3nAd5zJt8j9pDwFsBME9Dy6V46Jqp",
  "key10": "5qezp7be5fLW89K8aPBEqarZDzhsS2bGfsh467AUfgdNEoqQvkHGxPs3tA83Yd3MMARpbwtawr4m7MWKWRTL8YgW",
  "key11": "3pKJrGDKhXNMWdF1HNKCLcgZEy4Nf9p6PMe4kRTYp31mzfdMXAWVNT5DQj7xF39UzrTmXX7MftxWnnp55RdkqmYh",
  "key12": "67bxzfySYTZNAPUCvBa33aWWPsykPYaTDcELdsrVgMPjsgy4sAi3w7xK2mHLnnaTdyqQH9FQZ6xDJ9dQV8dZT2B7",
  "key13": "4REN2SJAK496TB8h66XjA2ibwN1cVAoKAkSGFLDfDUyizfBYEkzVtpMXJwCgKds5C7q1nQgmpFSAnGMhequZ6ptZ",
  "key14": "5fQuDaLVeHCBWtKA3xfDSPzwSu3pAWY7xfj9UUt9qXZBD94pBWShxDaWi62AsNujFzgoAPcc6GMhHRatjSf7FNoP",
  "key15": "4rajwH9t55HHBTnvoF3o4QrxvJ93VweNSW5nynR1Kx1PjqqvDaE1KBCiSczH83nBza3CHBkmJRGK7KnxAiaRYbd1",
  "key16": "3MrEHdgwGo5eyR4KQuuTFC33V5y3hcSfpKwJjnnvadNKDHpMqSgjctAcMg64Y9zfcqmuQxmReu6CLgSQEtKx23V8",
  "key17": "HUKNozgLvtt7rV98uN7MyA7Ub3ZNeUu8whMyy8FatAjd3HnmRCgvxpiSdEKRGoVFXNgu1ngZZ9mzJJeizw3UmJg",
  "key18": "3UBPaQkfax8W6FeFjYvSP6Xa2vZPE4d48thMdQaKCsoazVLeLopXkuJCqDSqFep4xzMSmkgSNEpWbuQZQgRZw87j",
  "key19": "4Ej4HXZfcY4rchvv9QYvvQ76p1PQJsxKFhfeLmXbQNeqBRNVFmGozqxAVbRRa2rZYb7hVBaQgsYDrTHYAFXng9DP",
  "key20": "3jimdASXEHQD46QhThLNRKfdNDfU9uydn4gDWWNH3btBH5tqJWuG3pL9BmRLGrzAxkuX1BLXJ8bYnueyjKVGtZyj",
  "key21": "5nsbMJtbW7GkCc5kAz5ufutwtED4utajstzLSz4Q3JQjsx74wbWrBUEFDuCk4p5WjieQwgm3e94GHPBfeN3GpajP",
  "key22": "4zjRyk61aKGDC3ESNBMfSmSv8TPFB4GtDJBSwSm1p6mjDq28DSMDLdqF7wfyCGyFExg8USNRUFotFJapu3d2UBq6",
  "key23": "5zhhLScczKwhi8Y4d7YtaaVyH5o1reJZLDif32u7ZMX3pQ44jqhuRDUnRQPuzqvfnqw1EFpak5JRe3Wnb7dyDv3",
  "key24": "5WFZnje5ZmcPxSrU8pJdZZCKUW2XRdNfHtmsub2GQT4gK7GJfbcS6MJqYFdfGFjP9j3wEo25CEmdMJb4jbPPg6AH",
  "key25": "5qcheHxEZhkh4KNkbY4PtdCLbBNnwXkupemUAa5reHMYbJHSVM8nrctajRyz7bMt5r8fwqWHtCNhcihrtkrTanug",
  "key26": "uFqfo7TBGssTimVRYpCPqpJAp613HBchZqYNgc6fBwZXfvd7x6xqu7QKse6iQRH1hbi1mEAZJqY8yJiwtCp6pjS",
  "key27": "644s5beBAZfh4ehMZST2ghfSep98rrn82SYxAFkwaUVyHTzzBN78mjKbAcSFgrk3kZRZCspLLtnGs5qC7goUv2Ma",
  "key28": "5FrMLDB2Hqy6mTVvMb3DEkUCeecws6w7qZmeAQ3523HQnFGSEs1yULuMEjc8KMqV7WUHqBWUacdBR1FWQq1b5riA"
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
