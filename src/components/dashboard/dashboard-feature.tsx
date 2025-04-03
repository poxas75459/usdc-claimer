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
    "5rye2PQaqwQWitF2hEDuPvga4GWMRgNNYS3a4JbdQwJDR4dL5qnHmf43GwffTkMaXBYAuJ7Dp3EgWopgaWpxTciN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Etx2dzZEQDtP8Ue6Qe2fCYtcVeh5gZkM5yavbMMfwub4vF6QNFuDnr1qAdiYZUPksAWhRfUAV3JL7TJ7CUPmCaU",
  "key1": "z2zH9JJusVLvEEGCXxRV6CVs8ZQJNrvj88yK4t1pqT1bnhNbBwZNPtenQadViv4X3cVzyynJYStDTju4WoRmYev",
  "key2": "2MKUvv2MULBsrGP5AGPx9BKv61r9dLkQdF8jV7W3YNEzveVa2CoZ9262vnNxRHhpKdjB6T8sHbxS2UjnQVS54vQN",
  "key3": "2wzZrz5kJPqq2kcuq55FjxHx1xhKVqpmZoawzaJPgMzw6zr8qqFHyGx26KcU9KCNdYPYgrdSdXgDguBJPRVuTJmY",
  "key4": "3C22a5PTRccdRZ4FcEm12KQN8iGhhZJNHa32JTyedUUcLLhUGNj413SavuzVVTmTckLTjmS2puD7LFuwrwnwAHQP",
  "key5": "4eLWaCAmuc6FkWnPQZnrq1rYAK3Z6QSuzL8V3yBwn1h4Neprp72nM3uZ8MCSRYgMMsPub5ZYsZc9VW4SPVoRSxvc",
  "key6": "3rX7VLjM1ZALZpxriT9gSXBZpcF1nisCyGa1YygSw9grLZ66kRNDcb9VwFbaVcfCZ53HcchMan3RADdFpmTYQWFP",
  "key7": "5J7bW8totpdkcARQKu8M12W4tKBGsuBBUVT8kwksLJQCBhLafeenjnVd2SM5cBz1VMs1pwdJmb7YnDyitx5rkwsz",
  "key8": "5uP8HU3S5EXCfh62QRpgpnp6HLBZUQJeEjWwySVVXvPmN3jCjEAqCYbSj1xCn1dJSqLWtbybMQoUi7Na7HUoUkCW",
  "key9": "2kNHxhzWqviG1347WAEbbr7ShrPR4KKcbRCaiCHNjQgQo6GSzKEyGdW1kx73AJ8c5WxTc8LivCjW9Na89iGiC464",
  "key10": "3y6pGg79FQW3wMzpW4Uw1wjGSFfC7q7ZUbQKaKR4aBFcGgo6nJ6kkubgG1Wdv48wS3ngDpFrbfnxfvdHYcnUgXAd",
  "key11": "4CHAEW2mRiURCxtY9Gq8KQzf6hfDMuzvWvNrq6aE4e8o74A2fJYhP65VpaghBMj9Wvo8UgMpmucU7ALK9i1zfTeE",
  "key12": "2c1ghpZm1GrJybT8SU2JWLjGro3REdooYdvFm9wHDPqNsakZ9jSj2EsQDwpXubkQVR8MjZBRTDawcnQvMGDt5onL",
  "key13": "2txxd4YAVKwrsPU4AboG15NVuNTNhyf1Ho2i4LJffgdJgPze22UB47rTnYgNXSSqDM4P4vC8enX6zKeg3c3QUWNh",
  "key14": "2sb9gkg5nqSttjrLpAfGGiihU4J1BV9Cq2fwPpNCU91MxmH31FAATcGoi5iAUKQGCpg29GiHDZs13Du5616qE4cT",
  "key15": "2oPyYHacEX3w98zzjBToXCyBFZ1YCd8FHqpceuAXDHuGDCiBtGiET37yUAJXdtx2wsQ7u2zd46tnAv2i6tkNs32X",
  "key16": "5h78cPKquYfNd42YnchE4SBY2yxDbdDHqYU9iJfv3yyWepNbjb8i2NRDjbmgNHkEfzC7Z1TQrK1cXKWqMimW2p44",
  "key17": "3F2mQXpz5wi93sQnEXLTztmwBrQZKAdPY6EG6PAeMWboZyD79ivX78etpaFnjdvGye55vzMYKTpGBmMYWrqWoRzq",
  "key18": "5FykabBt5HVHTrwcp4VZ7LTtBKnLRyFWWXWNt2ygxvMXXvnPAfDVP8y1VBZdHSZjicGzYqFUU7rjBzJRU7ieUkbo",
  "key19": "2fNrqxt98YhWMSiEe1zxLukQe4sSxh2qAb2ATsDcTVzbUr1GRRNdN1H5hUqZJkpNtXtjoeDqeLyn337rTTdh7DyE",
  "key20": "5vjkFkkHH9MZ7uFgfCo37SoMw4dr7xvBNgKG83gDsyvdCFA9VY2HRQyJGaSVXSBMRiqY9D99osJWYX4C2uNkSJaJ",
  "key21": "3RZbvARu1b4XN7BpdPve9am9vxZMNS9WPqvkr7ixLjZoWNjtUevBaJxHKTBHpK4KC6RntUj5328YMGYuvTSZk7sE",
  "key22": "3gxa564GWCN52Zt9jZCFNNgyALaf2XT4A8BSFk16eFtjxxbxMowo9gcUnNREhTcJkcFdFgA6gAhoaLSh12EZae45",
  "key23": "5sBmrweTjE6bNyrG3mNqj6eUqEvKHhsD6hbDqRa2YmrBSH3cvC9jg2PBc4DRfr6nBSzSYKKDGc1k3gQs5fqrGm4t",
  "key24": "2xZ54rdz9tpRAzWM7w9iaExtd1Eb32EzkGQ2Cm2koXF2h3zMixLDWpt43Mct8iKkY8oojvggeFSB2o4sFmKA18Af",
  "key25": "2jyRLiDKWq1BKVpLX2KABxRqAZqkpqhKUteK2UGE1VE6bttrtwRwcRnSEVQAZHZqM2qtNnovDKYCP7DTzgv1BAqD",
  "key26": "ZYAUQzQciC5GkakyMKBgqtGxTBq3CagPDdFSTpEKSDf74FVJXEwMc7wSzC6XCXrsapjbUEJJDq1mxdYEkPWyvHf",
  "key27": "Uxvvu28BfDUF72FQAAHWGcFGxCeVmvhGvwUTQJK5pF3491SjmrZkr8jiyD24mrC9guBdAvwVMrVXf4crSoSQoJo",
  "key28": "4dNn8BQHKPqZzc1e3mVjLCZC6DZgnMQwCM6P1DkyTHk2ndSKbgTL1N2a6YkgGxLvFWgeZoxizQccxcsim2Xjqagk",
  "key29": "b7DRUPjZ5oibmBPSL36CEVCWSCGt82HvVyVhM3ypWR7q4wwEySGALTs1QpbPuQiBV6iqghjeCsWqwkK53YJ8DAE",
  "key30": "3Yi2KYkmdFooV4JNUTd9Xx2Bdh993Nt4HhJaVaXve5vVJbEtFWfcGwafc21fi1Ez8BDrQQgrAhBMcuKPG5K4Wk6T",
  "key31": "3iatF8984icJnKaxgKzcmMWYm7hHGFdwvuGHKrZGqbtXtcEQ96HknJYzwVfTX42F7QhaXcinSkk5dFtDPrPRT1LB",
  "key32": "21gDsE5AmcUUAwxMw4JEHa26hh9Mv63kv3RuXhCPjTjKfLYeMCgVv3hrshnaKdyLMbJvszqAqpMQgEQrKvedFHB1",
  "key33": "3A26nR59jCViP2r1TK4Ug2vKDNKJD3pHmiXJ5SkB6y2MfNauLicrLHZ3tqRUMjVccTAo7JBnb5b3yTxmpUaUxnBw",
  "key34": "5fQYTSLRFnuRbaSXdr6ksu87carMycJTEXJbfknRq1UrrSjKAxB2DfBc7gQ7QaE8BPZmhyDtB1eaCDnpQFCvg5th",
  "key35": "GRQMTRx77GvWoja6bjwV9R24zguHAtuUG9ryFNjGkLwPE3d9kG5GvwWZDUxtekic1VvaGCJrkepTLSKWJ3UDJtJ"
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
