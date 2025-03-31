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
    "4CoCqQGM9ZXD68UAgWwHe3LzwUkoHPzqXvJW41QBWQSj59MbY9Sa6Pbpaxq9E4ZaYuF2uscjDXysw1K17wmsbNPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwdFBYUgRwZjjDL5aNsQ5ms3E3JngMdZdCSj9ded3vDAQHxYBtfU74bgpoNgKDKfuVnJoANVDvFWHMoMKXAZ7W6",
  "key1": "LZQQoN7aW2GrjSvHDrsBmjXHYSV9KjBquYS4ScXsBjewmLEtDXDNMe4zsGuXQdCAMSXka3wnTtQLuJBHMGHWtpy",
  "key2": "57sZPDmU3XVFktoE66RuzmKmFAfGLErP9WB4b3Paq9mZFefEUSsHZtxwwPhZV7wGrign21VWoqwZkmXKNWYEStEg",
  "key3": "5otQmHFiCnCN5SJVBeAVFXj5V9Sxf8ci2ieY4PVo25iGNYSM2vrYhLRstpYgPC7MQRox1Ae6EHwj6sQoeznSMTfh",
  "key4": "ZXXjKzuWVnYBrbq2LGDptU3xutRv2bFALVEUEWnqAqZDuFo3uMQMUPyYdRajiNPdN2vvLAhPvoyq5x3x4sSAqy1",
  "key5": "5Z3CqsrUgJb4VKV7ZKfPmeJmFarj4XkJ6KT5RHqnWEtUXW7hsZ42H7wyJ4de9ZgE8dNCqWESWWcWvotGZs7XoUu9",
  "key6": "4SiNucfcAA3gjhA1MAZRyp7gYvaAyD5PSmpkyv95L4GK3PDc6dX1ihBtNg4PT8bKHiAYRoTDXFTrX3Qbj81qwBAF",
  "key7": "3rZ1Std3EuZ97T2x8yCkc92ZGCUEHiQWVPsn2sGmyxNvRRtvaj3UF2vucJTuNYk9qopfkH6iC5dy4pbGzrHNUDnX",
  "key8": "4wasW9yD9RtfCS7xwYavfq6JL8D7qUhumgvqHu1XqXsiEKLq6MfZBZPqVukj4nWcT8YUzTukbEbyD3W6gwnoLyS2",
  "key9": "4aoGjwe1qHCaHf2J5ywdVS1U6Qo98XbwF5x3oJqzNmn3D4sJJmncpUcqgBcCbcxVhusqhhTWZ8P8cWEwvkMZiz9h",
  "key10": "5uJTnhrNWHJGhxJMLxTaoKzpC5L5TtYrJXDE2hVMDjFUTAyqZCn482j4MwJReB9tXWTGdfXcjsW5NWry7wTx5QRQ",
  "key11": "eu3i3pH9iYbD8X8a4QwNES6KqCzmb3xS3Y6DQrwkobxGgkpbaUgj8hmyTRnYFugLXpsUru6wXRFG9ohMhAoxbxm",
  "key12": "w8nwwV9oVgpLYMGgL9jpvAmqVudVP3JE9qrwoupCD9SGRx7tBVDAmpAip1gbaqTJBoKdSV6SRWdHPyN77cRPQrB",
  "key13": "3onhCCjGH6F7AKt5tkWnde2EaasbVowd69j5LDqcpAkriUeKhXnm3UpaEJZaSSrtjWCmLS1Q931pMKjZXPV47GqW",
  "key14": "5LSVnVoVijtS2XMW24oJvH2nPbh3fLRmvehEw5tqqEicJKYS1t3m7g5RseVThjPW6Y8b8VL3p5GTjPYNPBsoaao5",
  "key15": "2guWCPdN6TBpERCSQjQUNh7FgWJ2qcksU3reGjp83wS643Nwr2C1MmcEkKJsFEZq4BEVkfE7UG7zNuCqCiANLREp",
  "key16": "3mv16h8bkdDSxYQUf8n3YCkqrfFQuLj5qAyke5kFTEmrXdjf6AhKL6jSViTzNxkFd69fbM1ZD5VykUmVkwanWK75",
  "key17": "4qKskXVGJgyS4oJHhTfULa6qFzH1fGDxtEptj2rvURYw8VLTkhC5iyQ8Tbjj1ufiJMg481o38jPqd185AcF5fBAU",
  "key18": "3YqTNy7fxBn6889hD4kZWm85otbGVn7Un6pvUi5qdNAq5cUCL7bePeyFMEmBfoQbRmH5X29iNkaX2kDHpBPrz27s",
  "key19": "bp8vEc9mYqQGV7TNDYyc8gdrSBrZay7XQnkmWEu18CmsCFvj3UQMQG7UC3WJeZbwJZQRudMPYXG3nNjzBUuFaSB",
  "key20": "4B4GmzLA3C3JdeAmG1UEeH4CsdKF79VcQDFwzLwitYKz2TrQyy2gMtVprop8qoZM3jToAgjk7Sbz1K7eJYihCMFU",
  "key21": "4wNauyzqW6aRdUGbFL9ffAm7sH4vvFUcQAiU75aoyQjBQitbqeKmiCQqn7yqWEKPTQjuma5rK7b7kLj6T4LYz9CS",
  "key22": "5jXQK3sFcRq21coLj69VGAKJAQTe4b4NsTAGchsgV3Vxunzyvom4MK9FhAgAGxApMtQ8SsaMiLspKc3PShdfHshG",
  "key23": "5tSeLfBpWxGXYs5p5LyaiuVFcqgigNb2dsPWVZKRM3zLXEfW1wnRhvTPw3XH6eqV6w9iQsBeCDSBpmjmnZfQNGNX",
  "key24": "5AvtRoWQNXSPLEneiLJBMorV21LVjWfyrt2fsVdWLDCNGFJ4Q78xvKEhRciQ5n7YaK4aWwQ9hnjnWQ2msDXRm9F5",
  "key25": "DAfRhLEB6fVXNBD6TTtVfPDYykjDBXuCS9SajPihhE1Yp8xi4xcVzUru28jGgMtLPs45khLLLTi26zaqkZeqYHm",
  "key26": "5dfufbqR1FtcLPXPhHdgUemThJyvLkTiGKxm7RYi7NaoVSa9bfJvg1J9GZBH8XHHoc416c4DQrHgnAuTjn6jkHmk",
  "key27": "2HBwH3KEppr1Jnp39VtbjwKiCkjZNzVWCHUA2BcrenQzZmizSU85iND7AQiHJk96P4cZRs6pY4qWVEYRLoFzXN2H",
  "key28": "2neGCS3EVxgv2cj5NoBcJaMV7nXNFQi1rhpLAiHCyiJ45S5Ho5CQeQuMZWeo5fpSkHDLeeXxfyzYqAgPJSG8XmG9",
  "key29": "b3Fc17et3TD6muFbEFX1C5RdYvKvaJoMeQAkvJb2Pp8A2rxWWuGaaEr6RQ8FEMq26ZsL87qWaRKxFjDLkdamupd",
  "key30": "2m4wE7G5ASCsFM5cuapB4y9vq7i5fVamDnQZA9djx1qQTNQsQMRDh46iupsgxSUrKeSWLuvuiP9Deq2QQxbYf4Mk",
  "key31": "54KMzNjoQvcyjcjKzksA9FotobZ3ZH47K46aQXrXk1nbiNW3LcD4BWfb6zhKHjY6z5mzc8AaJULLyT3vnbACrKkZ",
  "key32": "27fycmuU3fEcsTHGgz1pRQ5eqTaFbrXDconyP78AFwCHmBNkcea8LaPdZfvFocnyxLfJk6sMVUbeLTmXNtPNLKUU",
  "key33": "WyFZKNARa6TynRLgXL1q72LhnRYEowNg4Au3NQZnRT8NifMt2dD3DJf4ibK3EzUmZ4Vo4jo2UPXs5CGKUh74JBP",
  "key34": "uTofC8HVpUTxveYEKtPiem3XKmvvxnaqnn8RqgmSGKuGUiC7m2tBiaBsh5ewWTF6DeYWeiQK7ZgQc4bQdzS9oBt",
  "key35": "4xi2WZdGZvAp6z5fj3LbcU4gBE1opYXdB6DqSwkgLucSXjzomQ5bD3jXLA7ivUHrWfvYFZoKtANyZUou5cr3YZv8",
  "key36": "THicT8dnKegHdQpvpw67TMm5CUxVGD2xUzTzCF8UZywPWfsNCwjeej775drjw5xqCUoJBu28uYatcoECSUuHYHK",
  "key37": "3gCkTvrzPt3qiRHnJYFn15bQPoDa374HQKsTJAD6S2LQyoDAFJgA15Ns9noRwEgrtPHLhAPj72rEq1Qa6oi65bF2",
  "key38": "45gVUsNcbKoUhDXhxEfZUkPWaKTWsNGzHtQC3aRUyGeJkCprmbcgbY6h3cuCynP7PiGRdaW8M8EcYaHvcpJV6xyH",
  "key39": "3dkkj6j91PEaxhxbt4pNsYeLU5KxGq28XaUZdStESDCEs3conUVsdzTrteEBjnPcFgdhZP83oLS81qNb9cSLYFs5",
  "key40": "25M4Dpq5cvMtSGvUWP76xht8nMqSXFyXeAUZ5Qim4h1wSpDHAo6EZJc5bVC4dUHDsDrghRiBEsne53oWThYS6aZF",
  "key41": "55DXP3ASz7bLKg6qUUhJDn81GeZMF37fXM8KJyxXvYzQvCMNRxQXGqmq422MZh2SUvQndxp58GmvMkeswUVerrzA",
  "key42": "39EywJQ85quwE1wymeH83YKYFKfsDP2QkZc6HLdn4hE3MTTrdfp75sPrsv4FwXwFPneEaa8h8SJkpPk6YDhrJQrb",
  "key43": "5Utmqw6VD8p6r8pVp8QFfoi15e3MUnkuy2KpB18p7qgp3zJyd3ECVxZ6Bw9RRhE2E52eUoonM3m8zN3ieLe5iawU",
  "key44": "4uTAWWC1D7twKNbgtCKAK2aFGktopRL6LWu2T5SZdhTdXDNdUMeKh9T1AH8un54K6KX3j1FFshYMB1fsqaNk5cZ6",
  "key45": "3Dva3TB6WBUZYynoT6NZZm45XZta46fR2fcgQT1yx6mnVRzoPLvJnVtwX5GYciQ3RRCvUV1zkHG36Gdc78JYRgBx",
  "key46": "4zqsTLSrUqgr5qiQjEJ1A5omqAdiQkVPNeoU89u343D5jS7RXKG3a8V8X85qFb2uZczUT1z1pbSYHZhUw5MqyojL",
  "key47": "3B2TkiJqcrf4MdU3JMEFXaV1TF99WGM98Ncd4GrU9mpZUGP6w8XSScjMzHk9eWMR8Qyb249zGMhHgWAFh5JuF3rL",
  "key48": "5k3zFJW8xBmfhh614EctSSmQRP9yakDpwkRGFVCoVL4NvB2tZSrMtWf7chs9FEo6ZsVXkvDrS6UqdG49mPxdmnFK",
  "key49": "5XMAP54HFeBou1GXMRzx2DMiDpoWSdbDDZUDsPRmnuSA3HwYTSgaqNDMNwiH552Ue7PWWUcNWmqLL1mqfUWAxcrq"
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
