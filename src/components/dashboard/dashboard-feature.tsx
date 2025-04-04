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
    "2VER5wG6eiwrr4gdKUFGxViUFY3CtWa66N9pYr2yFWtrBDjxNujFvEq5fuoivxLgsexZZYr6AqMr4KPoMLW4FGFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mqzJYTumGJDVtx3uBXjvThrpw7N4ZXmwSmXhxJfZgbFuaW4HBN3qCuUngdhoniWV7utCqqotugE4qQcaJapZnk",
  "key1": "4MXcGYXfvrgc92pGjCqjS8ywkNQ5u4N3yRHe3JWxYB2dXf2v6tSBsr478Ldpe3BGusiMz6mZep7qYYyycnQR6JZJ",
  "key2": "4PCM9wfruypVSdoY7EfvcpH9oVkBZPgfPVMhAFaR539pEkBKBj48chi4kRMU5RPpaeyPGgbvADjkTwCS1S4VQCFm",
  "key3": "4tboiAT7dpDpgEVGaAS7T4oYQ8YkXDJW4gcM4rrAsAH7VrKE4g4FuptWwocxgBchUrYiVsd6MKahrxGFAWzAx3Tg",
  "key4": "4cjBUZ9anorEuic3umE77owajYjPPMboQAezuta8vqYwTAHhMF7KTSah4uxKpkEq4KW1E1p4XsJNHJ9yr8Q422Np",
  "key5": "3BJ78FY31QojJcCUFECyXE8mycUh3btAqho7zQoV4YuK8E5SZDsgpzufsjavuD3wVzbJffYKWSgw3j575J1Sidjo",
  "key6": "4qR5KGnj2efFy2yHyZmX3jgenMJRdYLEFTFSPgj4bnDm7pt36C5NMfpuPDui1HWxKiGzQMS3yoaGxAaSh8kqLfyx",
  "key7": "46Pzu1SN1kJmby29rxwBAFr87PEZCSRnMqTPNBtEcKLhkt6WwBE8QcKReee199XuLR98Ucddt7ZxRfpfXg1kCab8",
  "key8": "1VPMimU2nDUmZiQJZYWRvF9KH3RgXeggsjgGh27nF4Cjdz6VWnFH3yTkzxiwJxWmmTRdubYCvqQcFNTUYSR3Mur",
  "key9": "5ASdoFZMAaaPnTQWAgojbDSRVhswgHBa9arEimU7toBXpPqD4UT8CEdfDo6ZLSd5XAsCJKrJvtGzriUBBbiYsJ3F",
  "key10": "5q5Hqwjs9B5ciS1S6JecM8anA4w2vkowoZy4TuPEnxezpWcpyZpuET9J1XqyBMF7TN93o4T2R33KxdpSN7YikyNa",
  "key11": "uyaECjgjYyftTK5LMYjtDF4YPB5iFvEkq3PM6QH6F6bor1AAb7XHQvocoaQA3QwLgXRUkZC8aqiitNWmstD3TDU",
  "key12": "5zcZrPief8RX5c4tLDDnmwpShq5EFUNkwf6xKzW1ZU7g4B4XxA7fBLyjNACLyHiMUNJvZnJwuD1qsV39T71Do8eh",
  "key13": "2ce1N8ABvaqPXVE5vYecMcoiqCk7hJSVK4j64TEMzZuKQkHco5LtQD8zATUrkfi92VNZGY7wcekBVqkwbQJ664dd",
  "key14": "2ASc9NWqjpfiDBphmbLDrTbdczRxYnJQtVoCeoRKPy48B1gW8MXFfTZ5pjSdQbYy6fXGDaEiWFSBvzTJFLti9qhF",
  "key15": "38w7R6eD4oxR3nxxxZRCLL5iJgsC7Sy4N5uLrcLD91kU9viGQ5wApUY7VHdS6EyBcsEetkFP68RbEoKqUtQ9H4Ei",
  "key16": "4kcu4NQkFpzUizgRmia7MXVsH7notRX8pFRVPevQkxABg7pjVTQRNXXZteb9YpbeMrC2fpzE8Zh1ze2NC7DgNYpY",
  "key17": "53Yvny8Hj6M2g8N97jo5uMM246qjC1do2myJMciQNxRU7DE999TofS9HgrFPvMDgkqCuSieDAxJ7ufv9jMJ5uhwa",
  "key18": "4TM26NZVMPZdSnbMrMqNaiZHu8dChR9QurxKNuLrzaNviyWpyM3JKsHPjUpZ6n7En8mWYEiKETCvCWP482JDMK3N",
  "key19": "2j5Rd6EwXAKX9KdxHsH7LDKDhuNqGYEJ5sTr3o5JETktSNm52BwfjUiB8GgWTodfKF2A7sp3jEs1QWkNay8AwaTx",
  "key20": "3j3DFqC36fLKpuLUg2jDMooGijFsqeDCN6wsYge7HQuGPoCM44fEwEkhRqxzQUceHwbJp7jhx1u5zCJZMSQVh4oB",
  "key21": "3LNWvZ3LeMeH69G7fyVXzHBe5MtU6w38yEKvU17D5PsVWNWz8EQWoF9yrsDQFWeiRoDAQhi4VgZEQiiZJ54TsFHL",
  "key22": "RJWhz1jnkAQDmrfZTtDNByZTex11L4maHNZLRW1MiBAaopE95q7Rrxv1BgUYbXJrrc2VGzpxMb4KJjWZY5c8hcU",
  "key23": "63rc9qmsYTNGXJSZN4B9BsdbYvCfpEWYBZqfkoRJ1rYDm1L9SJNyAndyuZ3vfSFJ2CJj4WXPdB2HekYcYyA1E2P6",
  "key24": "23T2BFRqm1Xzs8qpQ2y4Qw75f3dKtgnCVVPmRpB13TERDQpZH7kXwZss5LSVNaPqSweiJFCL4gquBEJL6VP3pUtb",
  "key25": "3dGCWChBbSMubUY6JvfBs7zySCJCFrSarcK33SKBYAtBSud9kdnyMSFmaVLhM3o4TyCVTmGKe6gAoptoSYmNsz2C",
  "key26": "5epPh7pWdBMQkscKth8ypaSEn9FybjcyBqcn5ZkT7eThFmy9srGQXGqAAnbppPBcoQAYZfpsRAUSAZYuUV6N6sFu",
  "key27": "2GEsc8NfPGisJLZgGDP2uU5JM7MeePU9zATh1HKNHHgnmR1MwR6F9UQcJ7D7MCMwuxCFAwbUby3PngWFM1WayP9c",
  "key28": "JRPRHuHfEureCXyofvLz1Q4i4xPfdYpp8e3RneaQWjED2BLDtHuke36qjkdJA8WH2R84aKucHw1GtaJV8Z1zPo6",
  "key29": "4LHNndnK3qJ6BpiXMUk4HDFF4eA1zGQFW66Smj7pHq3wAcppKkN7HhmLKXsuXjxbjoPsxtK3qJiCFUezcKEc9Ee3",
  "key30": "2qAkSy3yRnydE86Jp1bDjCiE895eS93iKbeVpXEPamjFYE7v9Vpxgh8u56cVMKfekdNrwLXGETSL4b39cs4LdK2e",
  "key31": "3TdSEKPKZiJaTvCULSnxs2GnoxbCTJJcCS26mZxWqSyLyaMj7iqme4oa7kR92MXy8i7engViSG8YYFuNQNRE8wFM"
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
