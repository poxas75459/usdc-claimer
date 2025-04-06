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
    "Pu72LKs15JJ2r1iB7t3jpESCjLAZ7drorESPV6ybbGHnd15AYA5p8pEHMKrNz2F6jcWF75HVQqpUwJr8dKVxqS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XE5ZrQ1i6gkAMFHh7aJjhdTGJzWnLNbocLmcJNGUzduweNinv1ixLRQF4afe7mFXP7pEoSVeuUkAmvswMjsxT6",
  "key1": "F54mvmask9CvqHDzGfthLEk22jtVpVxXabRwVjHjNbkLhS2k3pScRDpFufQUgGWVjSoDrHeBeifmr8ydmUc696f",
  "key2": "4wgLMxMBtkednaNcuNFAHamGS3dyYEqJ3ADcjbCaEeSDhBaeXA9Lh7zzjXSp1bQ5Yxzeb6h71fEs4S86dpjM9GUf",
  "key3": "UJdpQggiNNoheqa17Wy44n7PB4sSrw8ijyVuJfyFqVCJHpr13cdTdu1WhkkXSQSYKhd2oWr4gWxLMDLvMdquToc",
  "key4": "3TmogubM2gpKu9YPuEBFgWzsEVKJwAMKed7fmZau6WNgvYWMVHebmpqvEQ5ozxHJFwFm3UzmLaBoSePsVibgUoKj",
  "key5": "Y5QHYiBMHgMrqHMK1DAJUufy5Di2ojAXRkQAjWGKCgvUwpfHmyx79fBdjg4FsJ6Yo5FiS41CB428wQig6ZD2VbW",
  "key6": "5mfx86KX5yudkV2LxwmhKc8qGJzUM6MRUjM4X17AzRnFYGYrTmemghtpNcnEzVWR7s1TLSzv1w7CWbuJ53nq9JmW",
  "key7": "2cdLGRgp7pjhLmSyY6RSs9eUaV4cip6kZA1jgpkHLMTWnGbRbE1EYMoA3dbwDMZu8pcntZ2PEy1LYH3cn9HwUfxX",
  "key8": "5mYpkEYzBXXvz2yfZMMKT1Rx1m7DkjCHfjN48vc2XXzkNxFuC8nZqiHmhE5pXeeAbXn629bFdVjiHgHsz9Eo45GN",
  "key9": "3p1hEAseRP8jcLsBi1EcHvTDdjmoxz96B5qgSo9dd61gu1yWqrsQhEEEKFCLnmZbMYYaa1KCZPu6tYdBWCk27JqS",
  "key10": "3jiUSMfsRqJgd29QbsBiR1fe7yAVktCfjhuXcjT52o6MGYriaQWftKgqmAz4ACnsz3JLtfmrfaprpnqH9sVKdddY",
  "key11": "4v8K692GSFYBrLhmUHYy12wEBggYotHrr61sByw2rAj4j9e4SfjHTu6a2KQT4wnqDWToi6PWmvhY1Jj3L2ZBkKye",
  "key12": "7HWesNS1t9Gz2AfL6CKhBBoNeyFHcKWvHpcQUT7GST6cLVbdLmWKet2r8AzbyEemrLxY9dS5v8ACZspqwvYiAuA",
  "key13": "2Effpb4wjSudnGqhfjsC415DxAjhEH3sXPjwBnmGZdpF5S9Hinocjy8b49JZAvzDD1gLQXRK1JECHnh4y5HMrzMD",
  "key14": "42d6aAhBX166SfK2m71ffBgWixBJcCjsPS7kwk7f9AuHmnt3q3zpMchfv79RRerLXe6vB64RJHDyoFu57dSxmENa",
  "key15": "4TR3FtKvzFBuajLCu7XRNR9PZg1Tw8j5AiNYgZaxbVpmN1jWteCGWcCFKaNECh4xLHdE5ABV2s6Eb2ftubA8TknE",
  "key16": "T7gZGtdhquokskVkXPVcwDqH5Y8uwCPbv5HAPqYgkNzT8vV8ha4G4pREq1cKNUYMx8sAaaMJoszetb79TWswhmY",
  "key17": "4oyj6ZpPxb5aCeLYosrjzNnKnuuaxSTkyN1R69fUPsnndbXjqGyZRaSdrQVvr8zh6qt9y67m83jngebnFbnmpTRj",
  "key18": "43B6sCRjrHEvGVoMMQ5xbbu9ULevCLjJCwKR2msraZ2GiixUHsnHchxjKAywPLseN5UEbT9cM5CJvHYnTa2yHFSL",
  "key19": "4ichp7PVeftD2Xcg1GzA5Qje6JMaetGY9s4F5UaceHDi1DAayhRKzaKJHeuUeWwFfrtKQZogzQnx2RMip9q4zQmq",
  "key20": "5u8UbaaUxGc2hwuFSBKVNsMddAZ8JTGuNef3GaigAQj4ZdrvoASVuQpJHFDgBdrPeHHW3AbJdHKTebM4s6HbC8Yo",
  "key21": "YAziv3k6F2i3cTDRMPNJwyU7KVYVw7SNGdQJgHWFa4w1WaC7ZC2a7wyKmGtHB1QDQX416nJiV23VPXJCroS5UEF",
  "key22": "67q8eZXe1yEumhtyX45PtAx9cmTkbdoh4R1vm1Sa1Zcjdtv6GdMX3PhvnddG6fgJQyzZGzfe5EbzEnT8SjtKQfgb",
  "key23": "QvWMjDFHoAYkgFTFsr9YsmRXhtFLCsFspXeE8eervL2E42SNjseJXnLTHpGn3nzTTLyRitnQZnfVRk3Yt8r4GPd",
  "key24": "7oSMVHjm2LbtUykRB38qHFs4QfRsK877SAShsTZ1RPJcn8CDsRHHooH2SF6ckyPgZH2Lb7CF7dyPoak3Vng8fU9",
  "key25": "e9EkMrseqYpQL4N9vDWJSwjwf61G3y8Drf2thRdnTpH5vy7XgmfhgxwuEnKpC6aG8geLm6Jkpx3HUMYjnoTXTac",
  "key26": "4Ywk85hCDCcgbQiEsovkzbQCiWzwQJhb7VkPLVMdDF56fKK1XQftdyLUYVjQ4g4b8dHo7Z4BrhwnxsidK3B93aSB",
  "key27": "31TYm497jDzsPBxutTXeZR6CimLr5aJbM9pvFbS1XHjG2v3ezRSgfBfssxjtxjGVwXNiPufvacxHdkU6HnvAHPUG",
  "key28": "2iFqtryveJ85RRDkDLw4CjxGkgg8DVoMWkexjmt3mUdtUdkJ2o7X9x7Ko8F9hxZJkz9NU5hkCsQau2YQ4HxxbgYj"
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
