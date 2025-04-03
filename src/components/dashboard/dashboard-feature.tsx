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
    "5Jv3QGHSGoFzjyasehNZ2FCzyQJJPEZ3bNsWF6bN29cZkwfeEu6KpGft2oxnJmragJKq9xQfgX3T9Q2tM2uWT3xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wypU9Q6McC72NvydUnD4cv3uVmRY1y5AodAeqbECRd4LGneyjnU3CWPDkf4LLS784Uj52pLgtx1KCiid7UoiWti",
  "key1": "jxjhzQ5iBWZ8kLH7oUWz3BLiDq9dehGmLHpBbt1Zuc2Tb4dbCttojre4DVmugpoaw1GoGJBmrSKeQU1P4rP5z8o",
  "key2": "3vP3dutMjo1paZUSGPNvtBmX7aCuFSJBn8eFSnaEVMvSTLBMb5itZwVqPF4wXHq7JUCYgdhmqRes5cP1FuTCvxzZ",
  "key3": "4M14tUcgaRVu6sAgBgbF5SN7j2z46CXPYGoWhDN9QNTChv2Hw6RosmJBe3AFQZw3zv5vk8ataSYXNGrH5adviT8i",
  "key4": "5ZdL61yooxMs98csYZuPUQbJ1rhr7sGnzYLdrTNnsbGYegiMYUbnFkfWQoGxw1pkUsKYbUBqdjNxWGQgAz5nSJVK",
  "key5": "4UwL5SeuP3qMW6UeKEMJEuM9nyZsxNkz4mRge2HgQp2JFUZWXPYUKFNZkkSipA2DDXE6T4ocEta8JYToPRJotfP8",
  "key6": "57DyVQq2FBRNSD2fFBEaBTjnAXTvaiKHxM2zv8SRBLZi7PXC4tdG1Hrb1UyVjiiBU7onGZkB4Fy75HH767K5jBSj",
  "key7": "5Scg2smEGKAhvKw1zSxfRQ3PFWFiJuc9BVLEnvbc7iURigG4jewkdVrKBqaiCtgZzeBxZLUFz3shBhzohdizWN5D",
  "key8": "5d6Shxkn2mLxd2Uyfssh8Rfn4cEWAkGt6MarHk5V359y86J1Jchwv6pn8dH6uqbP7WwxQH6Jfc6jdnuhExhxKNRm",
  "key9": "3pF9ajgehwf8UTw3iNkDfzMMAW9tKnoGwSrwrTCDmXXTjpZp8dDbDKAvnVxk3kYwN5Q3a8MDjBXuFeX7F3LVrWt5",
  "key10": "4SbbMs6E1tnRzaPypDWv2sqmpzxhSwMaoQ5h71qFCXA9g584NU4ijBsHmzWAGAL5D6v28uy8iQAfDAYekFhq7noN",
  "key11": "4NAjadoujQV2tXTjWsj3nTqJNssZSCRa2YbdW2n54fG7ADr7mNxfbmc5Jh8mtAt5Z4gSkbnjX9kFEyTmJcZXArt5",
  "key12": "57jBzPBfDYZKYBctQHRT3JhZvwstk6mwSEk4xd5V2dCgYPbVf4AtEq9uAMnNcV7xecqyYkHDukwsWXNxR3YjN2KR",
  "key13": "52zxSD8JzaVQbDZ7UnBmqESeHsxLMcTF6C9M8g5MsYvyUPWyXoSQR5LBaiyqDJowFFd24jPaebkiSK1AoBvRxPXk",
  "key14": "JPNsTci5BxryfR8GWWb4wPXE7pX2af6zKUk2Nbh7B8vpLP6XnNPd1o6tdrkfCxd5h61uHKKH2D4Szhn4fCLThxq",
  "key15": "65NFkHdVajVPG4jmSYbkkTF17X2RK7zU3xyZEEhJhNaVfP7smfgtufqqeeUCj7FbPfW2CmgWxyLjfN42f6Yp2eyX",
  "key16": "U9yc4eEd1BN7HKmvsPr2SHTYjhVJFuKfsFbio1tCvFEG6EURMfnLCESA4yM6HhMYrXishZEiEkpeBcfgbyawmn7",
  "key17": "5EYEx5dZnTSjoDW7AHtxdfQQrCMJ2aK82wmvNL3eyaa7i3T9k82cj3BbFqhjjhujcf32ng3dNCFRKS2BUYyCoXaY",
  "key18": "3EAYRuphDA9Y7P7XttHtqT969vmo5CeU9ZGzwgTYFLrzTsjdTsA2Ean89jzY5usch6kpVjoyVRyXDzn9f9FWfLC7",
  "key19": "29VhDVu6PnsebcuG4v2Mw7yM8rQmPsJHQMPvJyssoVTE4dRWgRTRCNv8sCmZizFRDjsCYxTWz6HDWRAsL2iiNKmc",
  "key20": "5RcYof1YrM59nkkGXnEXnREVgfXa8bNz9M8VDBuT2q4J5xxyKSx6Gr6iXuQDFZUPUovCb4DKiW61tBMs1RV6pYGF",
  "key21": "3D3ZbGnfKC3V23vBCYUZ5kuZkp9HoNni82vMmmGMKz9XhTdXJi93YrcNa6919V5o9Ziu2YqvuFgm2yveaYKP5ZN6",
  "key22": "3dHqYYmrxeC6jK2v3KxXAZZUczZ82H8C9m5f7jYHTPQKYKBF9ihfAVhNkbRGACjgFLTo7VrSbd3auTDmyo1ja54t",
  "key23": "BAfsQ3DiaSoWzRLGAgAnedDpSkZ5kT34wNAR7KxNEBKF9Yxsb7t4jfahxnm4cHRmGoZt9VZA3ZvahQecFZVdvrR",
  "key24": "3tirMNG3Z6uQNguPfMJFbKQfRFmj3rzJkyi8RC7nwnVJ2KBh1UEvGxxn1So3o3WregThpxnPjKgtXJePoEdAxiso",
  "key25": "3oi9mn5MfXkYZ3vZYmMisPwQmpGsKWTGx2tCaazE8yfq8y1DNxzR3oGF2zAiC9FkeUU8eC7swhrpQwsGZQbcZMyr",
  "key26": "WPPWDNJRxc9ABp4JSkEdzStASDJ9oo8CVP3WA2x7embv4scjwcygFFDjg6RRjRXqDSKzmgkb8fnopg1ABFeowae",
  "key27": "5aaAQPqrGbjPZpdBZPiKo3RPfGRnq9pDEPWnZqZLiTXg85f86nobBRXFrijC88X3MVVDETMmHuSmt2fsjFnDVEZq",
  "key28": "5Q6oaJUqyexUfhcysRTnVYSbUY9qWU5HqrZRe5AeEwisoBorGMYWZh7WhxE9kdbgnYPkNLA3WcxtRurtCkgAtrvJ",
  "key29": "3exRVvBsrQRsYTZ6e83bY1YBkbWsZ32ebhudTfivsemLeVDxebQgo7RLRt97JYuSd2z1wVigsJ86k1aFEux8gUo3",
  "key30": "4KvQf7qH8tPV4TAGT4xLn9MYqZAH6FPZ8Py6hszMoHBBsspckAdte8bhGvQ9pkEoUyUX97yAY2XvmmMi4T8PjD5",
  "key31": "3dcdmW1XbGgDGwbsWeJdEvZFF9UzbKo6RB3JfNRuuu9y6JzAws1QtknwmUK5pyCu1adHZRmgY6Dd5PfBkkJWeBPp",
  "key32": "5EN3LUR79rEgAYwDrkqAdcpFd6gWQJp4S4Pohjkvc3y1TyAFF3mJEu8oJisJFGq5Kmh8hp6sqeGANHSqXjNpqbXh",
  "key33": "5EZpwQk3Vb6tT35rxJo5pMrEtuCYL4XKEY7VPf2ngojUWbNxFfz8uoRFePK1urYk6BMihJ3hzcpAxjpNbuC136pm",
  "key34": "3DJuauFfzknniahvhWKmkTM9i1gna834SFcbvLaF3SrWkw3M9Thh83TXThv99JCzQYzV76sCPPCyUhDs8K3t2eSq",
  "key35": "57o4AhtrrjwfmrKhUm7CcW65MR3eHFiDbf4MZA3xEj7kVuk8sePpyTLwYRJDybuLLKdBmVGjDbMithPvmSW53RoF",
  "key36": "4CAqBPUk2GXEFWFERi1KUVhn1wXf7FKuX53Xu4FC1oRFRedf4SYCY51LUogWNcyjATRcV7o2vwtiu6befZ6AiCoc",
  "key37": "4xMynB93LJawidT994HvSCnYYwkRE4vSuiRNUmdRcvQEr2Psp5wcCQxCSx9j6oF6fqQGz4qjKCzzBtpb5EtH3Usw",
  "key38": "5NwViCf8kmTWog6SMYHjVQ6qVaYBVHWtUPwetWpAKCQe6VJBT5RzWQnydEAt42dFV3GriEhM4qPHkS2aRZJJg1uG",
  "key39": "3xA1kSBDy3E1pnjx2CyhjtrZnUdtu1zk5twmqTCjxHDyoZ4PXQkM61BsLJnKBWXi7bC6MzkjBFhqHcrwwRBnJu7w",
  "key40": "5eZsbdbZZWSmf2y9A9jPmdsaYYxosGAQKXceD4nAiKShKZN4fNVSrHFVT4pkuy7KRxU8gWKt8NvcAWebP8s52sDv",
  "key41": "2ip13Z86JpzNgS78LCUwKnXvd7SY8YmzVP2k2zRwoAmJuanfz2ifGatQpTCdNAPKQBueZbBjr3N6LyvQNuziv8X5",
  "key42": "rZUFzwXz9Mo3RJwv8TwbGggaAhVnxtteBcj9BZpjs7poyQD2qaRnwZCs9koUYVgEQRdLSDwSXWQwDmBtARS6f9t",
  "key43": "4m4RukbKChEwVaSHNn1WYJw3hWduwndzVS4argCvdUmxUGEWfQdkHZ1uhzWMmo3yczLVtn24KvMj4oHQ3EUwuvYE"
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
