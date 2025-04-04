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
    "5UfbvQWdyxd1rhvtE51jx4WXeqjPRVSBgdmJScjLqgoXyF17UZc41eYR3dkPuConBF3KJkR5BTC64t4XjBE9edeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXhcdpEM3mBviAgvSBH5KbkTgJkqznprZi4s83Afuw9efEf3Ri2yFbdBecpwDxNn4GfGqgGYSH6qZMS6XKFTmt9",
  "key1": "5wSfbtnr76PFKPYpia4vYk7oEv67DuUwAncimF5Gj4yo6ouEZPNjXvt6WCgDSADbwfPC6NC2zpq2QCb4KRRz9utd",
  "key2": "4J7RfJoNPWN6PDgXwU5zHPqD4KHWQ1n7YeD6ekze72rYkxBMRSNBGj3tS2iQNyApkxAKF7UW5g2E2Loi8quQ6Z5d",
  "key3": "3exB4qpR8bztRxr5URYf99uH7nrhRMSCSJ6SKZvh2DxQk7QuhTVJDbLx1NuV77kJKaQLwxcJBbULoWSC16jUhgtR",
  "key4": "59qFihz6EhGSvggQFeW2WhjHKdC9Hr1ULk95Uwr3GyGRG8Aq6Xns4b5GupWJZLDymL9cZJCwpWJE3eJh1rgyqADG",
  "key5": "7cx9R1e2j2DtccAi6omXTnxZ7sh9paqtiwyrTAJ4XQj68WShWbK4xTeuBsTiTzJxLENWEv1XwaDXxPqGcaUodut",
  "key6": "3yxu3XMgWyBtQBuYfcjFpUzJSZnwkZe4tLnnBRrHDnurNtDaGom4U43qnGjzf6bMN3Tk3DLnmo4NBai1ELz1XHX2",
  "key7": "46kKoHx2xc8zKVhmHUm2ggvKLr5i8SAknduSZDg5Z1v93gAyQTD4Tvg3RZ1gZbggRQfH2h7mRQjgiuRuLrQNVgLG",
  "key8": "4DGrowNPVHUSJcM83kmybAEX7sWwCPFpxA8hYpRiYxGXAYJNt7hTh69k1Bi3VmJgcvFeYifyBfFNczCgp2WCmgdx",
  "key9": "3fMpbWaU18DNuYpKBekA8A3p97edkndvrmaR1MH8qtjimDuUqMXaFhEtxvSgDVuQ25c5sRrd19RT4VqdY5M2t8fV",
  "key10": "2gWp7LHYVrV4U7vaY4u3Z3JXpLVNgUUfNJECV27bKPDGW1kBs7L1fcr3ZQzQ7wcwbYdwHCSUQcrkYAbs3ww3QKq5",
  "key11": "3BV44M4UPavSSWsN2V52XtEzRRSL8bhWwyMCMcc91N9wye6r8g41M6gkWyGubjndAmC5Yzevn61R2YcoTZ5gRtfT",
  "key12": "3BumTKYw4nuMDYm6yp474RbvmXRerdkwGLqkQ8GZdmYVQMw58kwwTZby2UWtbXJBtmqpCX7S67dAYtVQv8MEBJ7b",
  "key13": "3Qfwuaasw55yyMW26RhAN3QHPwYrfHpVSatWyW2bc3H6VkiSAnk528D6tVJPiGNYmxi3SPhi8dbxFpQ8c7BCZaE2",
  "key14": "2MCfJ9J9DkoexRTRVxTmbMCwDoeYaGSRqp36TVNEff1jo8SmGMHjKNTrvJddMzZZQPTTUxgoEodQqxxuQRRmWwJo",
  "key15": "4CRrwjTgo8hSjphNBDPufyASmWh534MtAGsxvh4N5bJ4TDxRhbqP22yvSDpXVVdU3ZyL5zxmoo8yMpfPT8uendfc",
  "key16": "YMdsV1tU2LCZV3VNvb6QQULkT3KCwmnFXcnPa2b9yFMiaYpadbWibMEFH9dt4PXfj1mSsRCNdPZhkWgBiYi3rTi",
  "key17": "37JSb6wqk9tcGAiwTwjQ44xTLNmR32W69kozPoyB9t48XWLudhUBV3wGDqEVc79Rzd5vwanUWRaBvLcL1tEybiec",
  "key18": "3Ck2cP6fFyxBKUWWFSpAehpsCUXjpTzpQB28NuorB6LL4uMMzmX7Tba34SbFwFCG4uf1MxfBRQbtXL8vVheBscBA",
  "key19": "3usyZHjnViJk2TSZBuafpuk7KBwz4yxQoi1yQNGThjp5kTX41TmFiguStKNjE5ef9CkUPgkfvC7VRSEEEewjC7Pa",
  "key20": "3EtzdXZQfAgata9xSJZgUF1A37jVfXhaQY8fA37RMGcWCBKA1hQhg1AxzK9VwZZHBE9m4XQpWrP4QfLeHpFAqq4H",
  "key21": "oJdNHE379k75Zb3rzV1UTFiFiBqF9gFaW1mteo1fZMHwhHr7yWqcWxKAsviPbJCP7je9XZpVSooHihTePFcJ981",
  "key22": "34rPqsjkxcszKCnUnMnp4V9eJCvegashEWLMb9HP6epTdyVtZteCsNrQrrbG4x96zStnXtacBDZdZSZxTvFF5Yp2",
  "key23": "5iNktBDWBv5RFXMGp1taskKe5NqbVb89hpvVz4HbgYpqBTkeuPoxPDfRTNWauxb87VP8SLTDmZfwEkbwrvtzezRH",
  "key24": "5aPmX2EXmH7wDUfeq9QtGp4ffsVXM3Te4ffo8pw7evexFpPJ2DEZaYNqnD8nNGVXiThxaKGyBE5vHjaz3X9Yi4UN",
  "key25": "WkcJAtX7muvFj9Mh6y6vyGa9Ch4ihcXcwQqXTgqirS1GhgRyXnnG8xiLPvDtGbbwVXF5hAseMQ3EnAtvFethvS1",
  "key26": "2Rf1d7WPKpnmcaBGxSnJsab6DaRWRC6nLXd9g98FTaEVmSTuHm8WP6DKeG59q1sAqXKH6v9mDPDjaM29nirq15kV",
  "key27": "58puQdFgyYejjSCUVx3W8Lk4U8uR8MA6shd9rgrQ779YP2y6uJ1BBgY9e1BaWuvNMhRywuJZe7LWLx4VPNNHWYeB",
  "key28": "4pxb55dtf2XWvbHWKZ7XHiWeHGBHLQvnknfruM7yzi1w2Ajey5Kgtf3BrfHcHwCwmUSN4N5Syn6ysXh36pC6641u",
  "key29": "4Tnx9CNCpubAHjaGSevF9ZPwCoVqr5BYETNG8Gkp4SSytXiC95G6a39SWWwqd8LHV4YNT35ag7Nrzb7h6bJE4rmd",
  "key30": "8pQTNvpJtXCSv4BnffwZgRoSaV5EEaR8WPzfESxsHimMVnQt5w55eBBsouUVFj35PpktnuCizCkUNyz38LDwu9L",
  "key31": "5iAbkcj9DAeWsytu71RWXpsWV4MDBw8ZTfRHcXh4xwgX9MvmR9QWRn5RbPbYjQa39UYcgGsGuuKdaGxW32ggZDcn",
  "key32": "NFpUarbPTEYL8Y4XCPAfjk8DZWBsTTCxrphBy4KKhWLMgngVf7cKhrahVXRHZzQWM8DCT8in6EhP3CQwC9MseEB",
  "key33": "k3iHE8xq9EXEgrujGxhB8J4Vc9xN5Sfzi2dGMhYDWAzGnxofEt8Utqzp1L3yoD6p22fC8fCabPoumggvxMorHFE",
  "key34": "3htutkMYMzEHskZUwJ5hQ2n4s5CFttGH1GgTicy34w1hNTZ7MrEyqePAQSURjeSpM9NSuhhmkc6wDvEixkLVa41q",
  "key35": "2qtc2hxMxo5Lj5gCR9E8KSwKTAthcio7CNmuDHRGuFNEtUcJAXNMPVL2P41NFNHAhAB8yE8wt9P2CjT6Vs5hLSGV"
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
