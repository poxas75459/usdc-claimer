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
    "24oKLbAnr6HBBUJeYppnVsipg1hWgHcrL34CqJuVSgMhEfwLQ7CYFT7FPnEgdCTwzHe4S8msxWWUVgBmmk369Foa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBy1kVJgufKjw2Yu6wWz7Pm8bBH3Tun4J8codHrBKzkD2PdB3AaLQdy7sq6DyADVYoW3Gqj4PrKuE2Nerj7rAdT",
  "key1": "iocxjwhEZEbDxdWYpZGxUU4t3xL3V3EYZCCzd3AStzQxkeXRJaoj9Bqymwwooj4zxhfvqDy9PgRWhTvGiiG85XJ",
  "key2": "2RMJARF7q6w2cnqVuq57xqQvwWrpz9oSLywNJrneCDMTmQmPi8Ctep6bXW5QvL8M9iU5ta635DNX5xiEMeFYCYup",
  "key3": "4u8f4ESpWbq6DP4oTpQsEbfHzMZijKKCQ6hTUD4dvf4zMeMtu9ADyoE2Xrmi9pxbqPzt1RuwjtXeAsxnAmQqXXJF",
  "key4": "2NcF8z2mxP4ozusXm2873CLJavQeqT9vvoiaLcnAGyY59p8WP1v1kuvyZ4CyxZ2eZBZtyGwPLc36926zgSC1ptVp",
  "key5": "39Au4XQDgzcHeM4rp9q8yPRUbSa1fdZKz4QsqoiLdz3ivYhghk3vidWkgCwnhZgkjKPThUmdefVsPCGKnJ93pCLR",
  "key6": "5n4LqdRUChcMEypohypA7j65JSAwvfCKNAjGjgPGK6khHLfWnvgx8gKMPueeQ7cGuFTZZTiuwMZ7YCYKKSkKNiDt",
  "key7": "3eHDGTsTtNUjxmywohtMPdiuYXHDMfjhoqAHhsftRbdUprA13KKWxGyqwgoMycwtBLA9yEcEPxnpoZAC7VoutHsb",
  "key8": "2GVLbRK2uJ3VzSzADh585WNNFPq9Qpma2CDMooKg24ySYP6bQHazwHnreesXVJ9mM4hqPBUuy4qBttJSu2vRBHdH",
  "key9": "81dpuUqtMu64AezYdQXAs2bk4oiMycoegwaSZNEQiw61dSqzWb6hoam9JRn6wQUVamHQtX5XFSV8NBkz5UeChXM",
  "key10": "sDZFMyn1656NEKuWnu9zk9Je7QqPzUtWPofHWYvi5FxPMkWD1izBFhtGmod5dFG9MEJDjYhC4LCXViSeLaVKGN2",
  "key11": "5dQtw4wCYzEMQPXJD5uBtk3Uv37GcHU2G3rmgpcwkPgh2zsTKig3C3iHQVY2GMRPGu52RH3Lb4hRVbsMgNw5q7Qe",
  "key12": "2TFj1N8SHjmfffP76WNpCnFx77Au5gnB5KK8WTdoBPKCqyhZCpY2tFpA2jA43CXz6yKaxrE8ipFWS1MFLSWLmpnz",
  "key13": "28XWRPCA175TE5LyBMoyDYBbMVn1rRLNr8SyguYhdfDco7V7GaDVWVcxHXS8eCe8tvkG4ULifXoTrPiDkL5vAuqL",
  "key14": "3BchVdPjoLGKJeNt6YebFS6XALiS39oyCyLpsMwQdDrQdD4FyrSCWeyPD1Nwt268QJidApCJMPRBjmckjUof6oUD",
  "key15": "4aVJxn9jbXxVZDHAxViSUM5AYMUMQDtxE3yuco5HmfDzAN9w7A1hJ8ZUBAkosSBoMvwNi4efXhiomq94AAB1WLLS",
  "key16": "3g1jHgBxGoGsvx3usoGoC5RdWCAWuZQEcieRVgRZhsi4skUomgSkxJZWJxDxDKi45frXBQxdCLVqMami3MKiAy56",
  "key17": "3npfyVejik1fjh8dcVdn5DFRUL2ex1VVPPnk4TMT7Yoic3ARFLdySJZpkdpMULEKQbKwP7RsMyeBGWwuAg6HsWRo",
  "key18": "3AbjSUhmM5ZfuqkCTbUWbp2m14TMB6L1xALeiFdprdq6DZG7DKmuv3fR7rQ3X8zf1rbz281zuiLhE5ZGHjmU1PAL",
  "key19": "5xd1j7Tir8wbYNDVjeSJwumcfJsT2c9dtEXEWP4wiVMB3BSzkDCFMZfv4vWeHwU3Fc5Bomg119PPGTRPuPZEPmUZ",
  "key20": "2L3FLJ2y88h41U82KH3Tk6ZeasHPKMrfjGXBTubXPwdyxF7249pvqgJ34xqe2dRjRjNhcKYNFEu6ZN42UZgU9Wwu",
  "key21": "5RyqaHeEYobuBzdjufn8rm1fJEu32i1hgNiFvUzpXrXfupuzvVU8PS95s1zVuCQbXrzjPtC8SfPrCoppMYZaCuaE",
  "key22": "5KwyWUpSP5HKjCRsaa1BrpfJiHTPpAqJtYqCxN1StDPuiWDhuHJi45dPX1zqy15aUkXgPnzi1PrVxbfqpdbkYywd",
  "key23": "2xL4rwHy36a6JmTKqEqJtMfXBekxGHAQyAN3vTgMykhmTRC4arSpa7dGDsmnqMh7z41qetVgB714WSmvVtdo3wZD",
  "key24": "3D6LciYZy4Y7S2sFKEPQtw5FoeRjttg1H9b7TaFybWt2SyLuAm3G2t4UaqVtskHch82r8HGtCCSSa69mugPEpStt",
  "key25": "5cNcujk8vrmVwDus5NFtCKczaD9KGSW1i2TGB2ygwKP4XYMU3fSFkWGtueNJNtZLF8HxYf5LLHk8tkbhYwvCJeT4",
  "key26": "4hX8ASkgVa68rULxsNL9L6xWoBN34BXocXepcpcqp6StYZXX8ag7tvzZh4brxYK2dshJbRj8DuVQB1SR4T2q88vd",
  "key27": "iT53s8Gqo78NK8MHxaVr5rArZsnFEcDZKGUTmixNh5JM5tHLPXNe92fM4BByZ1NiReykGwfrFMp765PL4XevrF9",
  "key28": "49WhBB3H88nCqP3koUUmYWwEQriHksczhGqFGCTLB6EnnHnyJkTG2YKm8BX8nStA4t1jaNgQxqozJyKEDRoWQyX5",
  "key29": "BKzkcjsnTSSpDyBUxW3UfGJRWE6tQC1mPsEt3KnDYmNUJtrgh33hu6GX5SzyUqkH29h7ueyD9P59VmAE8LG1Kn6",
  "key30": "2im3TnXzFhXhquY3rXReFotzWTBZesqqUpxPP76DTFQz9abF8Q1wjMhuASHsvQbXMfewfzrnrpYgoo7DyhNmvp4T"
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
