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
    "5fnPfJE2Ds9tCEreVJ3GpFAyWoKab7mk5htHoCC432PBwdJQf5LBwgjE2vKyh9q4rZgH2gBAfZXbnxUyhxX6qhJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfJuLbbdp2B7aHXxJQ99qzninRbN3YBd7GX2EYJkbHZLgBh8Xz1AG3CR6UmBRjqjDhrsX96Ng1rmGgLxJVGB4Eu",
  "key1": "3tgt3NGG7ytB5w3JkN7GPbHjQH9J2mdfRpCeUT5LskjgSqqb4GUu2rrgkBRMiLnJDJrfe16wQpgFm36uMqKx4v2v",
  "key2": "3sDKU9XJGGM7m41m8P9NeS5EPvmEAPJvwn89HmHBkPxqqyCXbDYk2V5RkvJ32YDuNYbnZqEi1c4EipUCGqRC45R2",
  "key3": "5gvZKqu7Z1uh4fMbukm786WUHc1su5AyysbEJmEEnKMYCX6Kqvn9A8j3nyqT4jfcogRB1oFqMi6FxHCzZkrc5FLF",
  "key4": "DbmLUBrvYrV1giZPXVE4GZgejMk9xqG2aZmhA4dt6kERZ1Be97DT96g7GH4FR2MDqT1aFfskGSKaTsMiKEVid2F",
  "key5": "K75zG3r3GbHdJqsSUqsfbXsaivwMJyA36AfgsHtvAaAvad6FEA9hFbwYUzSyTa4eC9ANpWvv5f8eQs1eGgVmdbr",
  "key6": "4Ax8o1U8NvA6uSZ48ciURpb8Es2HgJxABuuNkUgAhTbhcikG5vMcxQNkPSa5VTYyHSUf959YEiU2xXXMm6GDs3w1",
  "key7": "3eEXawJQJbpAYwitqszxTWTTu4P4VtXo9bGcud2JPWb7hLdW7AfaQ62fBNVFX77D5SpxYpCG3ZQWcyRofmiNUaXS",
  "key8": "2x2VBxCbAoJ7XUrQcJKTyL5G5kxAjzmwSVCeYM8DVrvdHu4bhoqgXJmfKdJqnQDnCHYcnsFrXbqLFqLKwfG718hw",
  "key9": "FUt6mrdomGVUUK5qVDzNzxBVkg5QXDB8uHtFLwUY2sNJwzXrxGeUNc3XVQ2HvucDrm4mw3WafxcTZ2tnh66KT99",
  "key10": "4CjeY2huo31pwkkFM8zSDFftbkfxbVNGYu3QgNQS8KxNdAXHVdSCtSKWGKnJ3nMxsH2zhshQfBphWiTi7dY8uVmG",
  "key11": "2xLJwHNP4FL92NALFw7LDp5Mf85YFxTAAGj3xcKHDL4VLnbGmVfNGD3fr5uUzaWyKMVz9DL17MZvHBQSaC9u1tjf",
  "key12": "SRoSiL7nggetkMp5AceevLNLimgLhZZaH2aokRZbj9CpWNv3YUi4nE7aaFfAFF1UXzGxeCtHZmJboxU5CdeYRj3",
  "key13": "3k5rJNz2HSM9yjdKfnoUbCaQrsnndXWeG1PDiCCbZAAv3shsTBQQBAw7B2xQcqF5eojEWfozwuNssSuMjPPZAFFg",
  "key14": "2SQktm1b65zsAQVGV62hn4AHdMT9JJac5xMbhJUHKk87kpYZb2mYHVnzSJpbwQFDgkyc3n2WZ8TByE1iniK88F6V",
  "key15": "3Z62PdNUA3dKTsUFCnYy5is5z1ESjL44BWMmUQgaiZJRpnPriWTd1B2jpnmuGQpcV3KUac7vW9j3LmKNoN4YoceZ",
  "key16": "4FsyeLb3NyM1Ax1XL67XgfMtrkR5JJpHzeHyJsXmHejGZ5oLwdin2bk7ikfjTYpZ1MRVU4duGDxyqCpmgSqsHn4N",
  "key17": "4Rn5kMpdXVBKbpvcUjnChntcJet5CksvCa8z5yenCXseuVrCCYysiDxqDb7mSPWVLraLGafTMJxzD2qRYXwS6SX5",
  "key18": "4HAfm1tUPndCJxiLaydM81EgywaWJFgcVTyQPHWrXvcvAPe6BLih7RH1aoMgBiXGipUHBCqZCmbw5k7XAzrjSoad",
  "key19": "4vfinW4Fyjduqiba63z5ugiJhgkyhRANj8xBmtZaXKzxMDvoHne3bHadGsn4tWDfNXyJW9MUj5tXwtR34dT8FPwW",
  "key20": "xbixmvjphgiqoxBBE6Rdk266qz2Ft3eEKJ9dn3AH8KWmoTSD87iedVPKiaF1sbr9nVDDEcC7YB4gbFMrYRtGzWo",
  "key21": "5gTDcY5Ptzny2Zm86HPpmpqG8QvDHrRnp8aaNurET8QNp1784QEW7bvnz3up9mqySsuXRdb8PZ4N3dLV6iCk3tTD",
  "key22": "3wYwfsNebSJ7SdnLdYXE1H26tzCQt8p7hS1zrsHBb2yCwMeYhPSsPb28sGXQdJiTVi9rSj7auUYWQyATzGM5oVvx",
  "key23": "46um3vJFGkbyTrUsrsZmzPFvUC8qWvNcMzEwD8tuf8944bs5jjmnuCBmX8yTufCDPFPMCamhWW8zea6LrvrsmqaE",
  "key24": "4sx5R6EqMFBECtFrtFq4u828kpzw4UVMwAEDehpNd2LfQTRQHBCwA8Hpvegmip4wg7A6Aoyq7YAT1wjqj1AJPXz2",
  "key25": "3iMTf2Xx5B5H3r3G5sTFWvhwNSZpWETVASaWKE767jxEzMCq5KVNVAqVizJMpKm59CgHowjsWv6G422iJPzpYdDN",
  "key26": "24qmjdj6vdNeMAVjTDt7y7UZDyhsoio47PhycuWz4P7RHG2pLuBb69ZEwo1WPvawzuGmhb9WixxxQB5NTeEzg9S4",
  "key27": "2RnboyHsgh7HTiixbstvZ6UiMjSga3gJKTicjY4PnhFx27vakt3Q4UPmTNBiSmwoov8NxyC4BksvVpsSKJ1gdZZ5",
  "key28": "4ynaSC5W9oLBhKnswRpR9UnuTGbMuJak4Nzww2rkca6qpwSaTzdZ5AsqusYcWg4S1SvxbFYBSTDorF7rBu7qPU21",
  "key29": "5qzidGhNKCaTJNR3MirEA75VbGcftpirDW9jU1ftCASkFoMTMtWaf5g52ycY9YYvUCHpf3ntJLm8gX4ngQZFfNrs"
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
