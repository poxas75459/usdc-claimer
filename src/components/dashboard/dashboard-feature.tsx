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
    "3n3HV2PP27V9nE81GcALzchUrEiRsoNsua7jdpoenwoAaskDuxmWKebGjyu4job4w2QVkVx42b9fQbYrtTmhjCfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XBF2KkpatMf3tu13GpchTyxHKaGdrsbdyNV4vo3JNLVyt6LqFSCmVuqaCTuxS4gRoQxqM7oCudvQnTXuQske9E1",
  "key1": "2EhNn1shdjB6fKEMKTDoZV5MKr42L556P7AsPWdC2Xzs131P917QaUZsw6pHTfBBzL75VZTV6noxez167p19Lwa2",
  "key2": "43V6iEmroeWWCyqhu9KsYVJDuYKDoHfVVveRahmA8EBSu13KMRTsu9bGKAq4za2Vj9kw6CyQheuRqSBRVWTFSTwg",
  "key3": "Wv6FFHjFjJ11zbz8athu4nyTJqu5MYMgUDdmtYDXVkHfDp5TjdMcEHHinpHyPeGQPMmvBo9zmoUJrmwP7XwBGfL",
  "key4": "25g7rWKrbn1ktfy9wf9vVDrtPEvDvtYEZpxeain8za7qMLkPF4rvwLDPfx98KKwkB6eEtYjZqyUR7F8f7bewPY4x",
  "key5": "2GfgoaM52q3KrmpWT3bmJ5XqjebgxEzhW8gDdEVQDHc2mbRLnbbKP6jdTK3uTdSbWeJx3cQReNSc49iKNtvmKs8r",
  "key6": "4HejrtZveLRmkQCACoW8RJnwz8cRV1KJN8rhoeYmAwyVPzbJk5U78acs427uYSRApmcPvumEc8Lkhi5QckjWsVeG",
  "key7": "4wxazThawYELHR7boxBWjmLTNpmCrPeM2PDXE7UdTA7K2X9fJBJF5Wp6GPBWH3bAaAeKpxZx8DCgASkos8hrdKwH",
  "key8": "2b8tqNb8wD59jZApA5n3skn2w42QH43fdscSbi2YjRhAe5Tf4NxDXqL9dneuZMswxKVvZF6aDjz3Hiii1SmbZa1F",
  "key9": "3seNNHDE5MEpqbYVAn7XabMyLnu3yTiUiVas3hjXX6PSrshw6P9KLaGLERoz34yofCErQbk7E3hya29rsEqPsRiC",
  "key10": "25T4MqigkF1stLxsJwEVsPLeGncWShvkkAW7XDavYLbfEdFhDjowUnUP8kSvKXjpxAkkbqR2pBzBvfQDoHuKJsTB",
  "key11": "5kAr5CAbf2pYvmN13E3h8ovzudccaWAaY7kCWgVQqEg1ABbSkd2eotWvGUhp8oxCammpJwf2UFQuHrRGG8oN4Zdx",
  "key12": "4KJSk1EUUt82orcMDJK5iRJTKdgPmLAK95rdyHxkXuUnUAiL2srbbG45NhNkWEEqGuhi6NH3L2TGyvSRicRNn9Rt",
  "key13": "46eWtFrWFaqFoA6a8mT2ULHTTpcYCXkfq1ozy6zxVghiZ4HHpiBND9qHGpUrquUmporVVhD9MJcxUELZ1n4ADn2Q",
  "key14": "4g2Vh2xAdnYUrFDoFVuZpb98x6mMw2CVZH3C1gNvtwrnPsmMHHCuWX8Qb5qF8NDaShgLfUsqarJvxmGYUUpft5Wf",
  "key15": "5gPpUbsibUS6mqzWGchnQtUPVygbKPjEEPCLqdqD2RBGdoa8FUAx4mjipBxern4iLWEibrKrVdAs7Mx1mxs8wqUK",
  "key16": "Zc8idwPoiKSMruL1cHbQm63eJYxhAdGaXi6nBeQFG4aCjGbeMdWPvgG4mzjctPSzsqZHd9PeCH7DywgTSTeJ5rQ",
  "key17": "3hnL6YrhRApmm2p3uJnLN47bjEqRjSsLmk7xFZv4sUdPQear132oXuaZYB9tQUCWVM3seBMPr6eGd7cu1LmxpSJw",
  "key18": "59fuhuAztMcacSr9nCmvsJtV54DYuXiUNSaEjsqjGYooxipwtWqngW7LBqrxy2rFA8ANPeACoprVbe4XCwCujkbj",
  "key19": "3ARiE2PX3v4XkFpUu4oQMJDGsbjkDR5chzKVXnQjsQ35cibnFN6msqiQkibr9idzCQu4wfdZ1tLBKLsVXTC6kbyz",
  "key20": "63mv4L75bSwjMvJ4L9phEisG6bDMbndN7mwqMk3tasMFmcZVQ849zWu2wAwPXWqH8v3qfX6JtpijR9XkLdAgBW2D",
  "key21": "4eiL6e4771iK7vtspQTzNRkddVFdmaoJ2euV2ZUWf4HRR5ALTVgzVBvUo9X7BcipJ7231Bbpu1NhK9HMztXnBe7P",
  "key22": "54fURKrPgHiVr6vjd2cKxP6bXKUW8DPDL18nJR4t2Eq8yKimj52Qj32d24wpYy7JVxH5dEAhEmszGj8iEbHQz377",
  "key23": "47Atbg7yKYs5r5aG22EWWay8ACiG8y1kZ2BaPn79b86P4nteJiCSCgpkmXYUwCGLZJs2ho2DaXFYBgKthwtBydLN",
  "key24": "3zXSuZEzbj1WYsPekUbUUcxy8aURcQR6cvfYmtnPz1sYDutg4634V3qiyCfkATjriSskdEsqV6UbFGmXLwV8fCTB",
  "key25": "35VMzXy42XJKBYvX9ri97wcMPAMVytC2u5YiTthK2Zwog6GgnjmUZRV5994MDmugTAV1PWv1Pm3jm394D2mdh5pH",
  "key26": "3bG1nAc4hhWgDMjaeaKAoWXKpTvEj4k9SD2qMd1PNd7M4EVGxLy6dyptZnZbxt8sUmBtEDNHmBtAy62bnrh9Y7wJ",
  "key27": "MmtypUyVd5i2WGUEmmrhoqYCtzMDb3Wn5mM7U9REF97ZX1vvdtf98v6QbNMzN9pbHQ4p35fiDJbUJKVKoWDLRYK"
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
