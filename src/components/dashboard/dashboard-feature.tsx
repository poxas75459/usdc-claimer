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
    "4py74qPKHqP6M4MKdfBDozmzUP8JN3MWKsjLUg6adw6eabJpvNnibSYyxZUFdGD5fzEfyUxfYaSRdXbM5WSrf6VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tsgxsKR76do6fjaBKLbMiEpgZn3AUtNgWcqFdAuUpH8qLa53JkPrSHD99pba19BiJXhnAxgiF8RPVwwbejb191r",
  "key1": "5oBGcQLPSECq4jt8PjrZRE75KdYwXev9wrPsfFqvBM547TWszJqKDXp1X6MhK2A32vhUN1TYPuZNFb6JP7qaXfjJ",
  "key2": "54MywDMhQLurHtt5UJH5mpwRKPa4yz4jP9a7ALDd1L6gwXni2NGHcFhSAHwFbM259JZQHpJ8TrmsSxEhSM5CV7U",
  "key3": "2bWBXLE2umVsD6arkgqNXp6vi5UJcZ5j1oRvtqXnmEtyrEXg1TnkfSUmEcrVEVHKX2L82KyjXDdFpPZMfGuEnRM9",
  "key4": "5wbqLs8kA24JofnudUYhcFM9UxhpEjdYMoDKjE9U65ExTzJPy1GnS8kkM7DPKwc163dmBjPnnx9tUsh8BJ4df1K7",
  "key5": "42UrKeP3crvzBJjoPqHz2d2szkCxRJsnh8cS9LAbiM2aT6tsfmSZWDCcDMhhtsHsmt5pXfdkkzMMxTzi4qtMkTSz",
  "key6": "Qavr1Y8HsgcFcB6sNLDzSPYL7ZGMhQhk9eyxhbyewwYnjZatuDVjmzPmrjRtPPCxHNo9KzyvcBwvqaircfe7nJP",
  "key7": "TV6qzsToJ4aBrZCYqwLn6u8gimpm3hescUALoTh2aQQvUZ4zNCLrPU1hepyF6sEkgN4uM8FFLPjfWdhteau5DwD",
  "key8": "tw1zNKhm6znPrgdn4zVueQRNqdYK5E7w1sLhwG9DwsjDcyb2TiFG9sJejmScqfNkmzUd5P91nZtwLnaBUpwgkk9",
  "key9": "2uGNKS2sivyofaGSX4D1GniUF94Tj2jSB29ChCwthpTmgviS57WD6BUxG3zEAb6CY8rrhYk3wCcMfa9sUyxP5sEB",
  "key10": "5bJPz5iidSEXUjUdDj2FUJpC3sPSuTNBNovoKDYwwNnuJ1SDn55WYssDj6yUKoeg745eRUimoRxYDh3AvLHquD5h",
  "key11": "XUZgYQbUWaL33TuocBfcJWqN6uxDus642zjXTEwd2T3XyDHLSZ3bDT4dJf4o6a5WtLVEvU5Z71ZZ1GSXSRAbKuK",
  "key12": "2pfGwBWCuaswjZWh9uUCeZryetFbJEFpoRLAaU6ZEuJucjxQn6uZkThJ9cLiozu2kNBru4pRezCPEqGE8Nuyv4GW",
  "key13": "jqiuSR38iQPVz2d3v8dKe3EwnxX1mmk4kyKRud9WfCnQGhRjmRnpaKgNemAN1VU5Dr3Uab31jcpSRBEeyCweGub",
  "key14": "9SyaNa3GN7ejgs7zHMDJ2rHE396DeL9ZNP4PEtQ8bCULVMdYHBsFWFPLLVTyAfcDaqzzWmSKmjeo3zNxPjVeyLB",
  "key15": "3Nw2zTa78sHWHxZL95WtYgTGfCQETpPabnkhPb7sAvMmcNAKCP4AkDhNRXtDNx7potzwLZCeV2fF5RMSRVbx7Zmm",
  "key16": "5u8nu4J6ot1V8gMTFEj4mm54TJrAeQySJRgiuAJDmgyyFpT6bsQiVkf8TuYm53K939W82baC3CPxsVe6RgDSTLTY",
  "key17": "29ESD7uiKsvRMp7n8dgpn8AmPQwxm1hni9Pzc8Dct5botPBzr63QPjJhfQ2wJKWfrjw8MHNsCdyBYi4see1N1tz9",
  "key18": "3dXe1sa8x727Q5kNhytBg9smP9MwNSJ1mbsgS2N3DsgSdkywMbPMthZ1onfcNGGAgLxw59UiNcZtGbr47zpge741",
  "key19": "512m1LjDCApw3xQt6jYnTjNwn3CvQKp39gc185gmZ4EULHamRMkdUkeKXLnbibNKi4BtcwsazqsV3Z4NYrPfDr8b",
  "key20": "sr2V1XxmGhvKh4PqYAKEWFxGPJBfyzqURtqAngUocR9HQWeSLELqHA16betxfJtyJ5AhRoPnofwifJXPtto19Xa",
  "key21": "63FcBGb7KXrkisNJxYS4z5HqcPMaRBTM2JmwGZDfKEBgyyqYrnX2XbebvNBGe6RnRfbjN9iiaURmps1aS3mGUG5S",
  "key22": "2RX2UDz7nK33rzSzLNCD2nVehWRf951iaqCehp7JwTcedo2ZUwmwZACdtJQf9aw4ibg8qJAwG5PTzhkfd1ouKeM7",
  "key23": "4KEDMbK1BEQwjgTjnEr4jXAsu69qdzMiPNjJ6RwyVJjNMR2Grm6eqaiFcafhN8RdmDSQ2c3JbVR9BFWG96kEa9RA",
  "key24": "211biDyXr9PuQeHaVWa9eHFVsJuhTe4YLhvEeuG3knxKPwFu4CHkxDJ3tDRTGvZZgaVrtfYRETsbJVQPzUbaceWs",
  "key25": "3N3xERDnBftkdo9xQZu5VGdwHEihePT8GXeNgTQNKkYoAxqqEfcbmMucvz5jny3zamMUR5s855o5Vhp64S5hGLd3",
  "key26": "3MZLWJpRmbj5si81qxG2e5VAjGWf7WbWK6DvTKEScKxoSwyb8w7jhpC8dNE2nqdgykQGgt3HmgjW9QQrzAKay2bx",
  "key27": "5A4udzDzbMqHjkYtT1qbjcJHFbzq4YbJcLBbvNk6MMMvPLhyNSJDTo3GTF7KFVtcVUHdTgnGwZ8DFtqeE5NBf4N",
  "key28": "2KJsfnwYbVoL88MHotagCbZ9CL5QZzrASX2veK61SD64RGKjT7YCQbkix9xgi58jSSqVwb25Xf7KjYeWPpURDDGM",
  "key29": "4tdGtspbdTWCJw67RaqBy2jj2pRRdbBSrXNzronzf2oye87dzyaXzJ2jUbebmjNEFbauVM3p2ETpicS23qsM9edC",
  "key30": "2PHtNLuk5xtaBLFQMK7oPa4vokwgnU13tYFEkPqC3ppm772eD1Hreh56ojX9YevcFNQG26JdkeLQyza963LdPCmB",
  "key31": "34wDyoPtCAX9xGbnc11bWBVEaF2iM4gW2whmPP1Ytn6hMSGAiCvHfQ2m4igtT8SExUw8EJT8nZXqBrxDQdHuUAKx",
  "key32": "38hzNBxX6fVrYpyeY7fBqvj1BugFeqYuvFpCu51mJ5vxL4LXQfYERmr2uCwHNrppAzhTx4xnRUWaYjNrXear2mJG",
  "key33": "5F453g5vjdUNrAPkhy3hhsS8AoVcGqMAJTQezuWXzgdpWay1XGy98G3DxjRoYiga1Faq2zkVGjVip8dsmrN5r4JL",
  "key34": "TAD4Wry5kG5NwgNQupv9kcCXntFLyXJphQszW3s6aCuqt183hciBdzoTRvM4eeaxFbTftMS2cp6Pg5KbHXuzhFk"
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
