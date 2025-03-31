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
    "3R1xxowEXnuTbfjwyR77RCw3Ft8nkvJQCgXva8xYq3cT6g8MhmXg3UXi6DycLuEhCPzFY3xNQD396xEd9u4Tmfge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCiqmded8y3NPya8c9Qvc4BpkL8qdFD8wu87oZNnbSf9PqW5TaBWrHrLPZ3oa8NYfBKMao7ffo3q9cbGFLWXfMk",
  "key1": "4ZSAsoBj8tp96U5Zcuvup7v6sYo3Rfg6LGqEjceNpEh8nfe5jBQxwRKxxEJeq9nzV8T4qgw3A7DGGJCkPRZ8atwN",
  "key2": "5P7fVH25pfpGUBYyMYKSqnnZ6yf7kWg5yri3UhfxgRRAoiCdENnNgwKLWdYRuz1Cx2kgf5TbEBeHZ2Uba1CYWvZe",
  "key3": "56QcARWuejkoLV6FpcHDarNfWqN1puubUqksDhn4pmFVY4KAjm8utgjiWCfdhwj9oPvN2KDmKveYehqF9W2p25mP",
  "key4": "4k62dacMG42MuXRqdgFK3AHYWRMymxjYJU4W25gNSKBZNZGkcX61GfAJgMohf1SkYXw3WeQd2M3XvaeR8taqcNR5",
  "key5": "659XNQJoRWUURX7944aXjg1FcUj2XELzS6Uz3KjPn1t259ttQa9jipycnaY3yEZSB2wpuR6np239yps3gS9Mi9b",
  "key6": "4EGjmZgob4Ef2QZHRpPyUBU4fdnQHwcT7cwt5yyViWHcoaKTFn5ymsiHR9mxdjeZmESXzcDjzvGxdCpwcFVqoNZT",
  "key7": "5xcHXW8ckJaK7mLX2UNbH6pwKHN8V1KeQCHYmva24Y7hCdLUHNeK5QECYvRnf6GHGPzCkemoKmBJnRLkeSiwisfB",
  "key8": "2VvBd6n9eJPynFJ6bSJ6sPA3tBwbYZ4faCbHDDXNEEbT128aQ83AgV9S1zrMzMJ3m5XpcpciHWtVuBtgcrGY7wET",
  "key9": "3TmxS6Q8btm3nHn5FhBt2P5kRSdd6bEmwiNttfcRCb2HqFUCBZyJCZbR2wW7HKotofSPusKey3s1eMad8qyxdTsq",
  "key10": "37reMwBnge9H3okrUZZvuxLgyse5p4rW1vzb54GX2WBG9JF9nVk4gW4DdJkyuXBgcE7ZR4kFGY6zpzjij96PkMwd",
  "key11": "59cjjY32qoYueehgmjX11qjeLQZoB3H3PX2N7hRLTaZMc1nFo7NSngRHFLqEcgg2w8A7kKfckRrrGuKM6oUPni6R",
  "key12": "4Em8E6zyeMCDCPu68tGdrpztbiYPWMczJ65vkdBPqBFStSTki9EXSB1QTSwSFUKoctCJjYuUpxiaxk1YJbMc3Dq8",
  "key13": "55xmyKCBjoPJjMAXo9vomexro7DaUrZZPWLMXiym2q7RXiotkLNkULFhNjDY3o5tVp9n2bLd1Q5UZm5feVWC2suL",
  "key14": "2vukhGjFfykoxtqYCjPuMQQQgX2bZQypSYHFyFsRo8ZgEAbbpQYTxGETdNdQ8K6nFzMHEcNKuFQN51e6iZn4CG7B",
  "key15": "2pcHkAVSmf2RZftd7SnHbTKSXWKiCrKaC2eZrNi6hE5wUtsK9d1neUEvA2r3SSVx88xAsfPHWcE8fMWYc17TV84y",
  "key16": "3WzNv4NEhU6VYonhvwDPoLQsD8S8mec1GACcvXUuBvycbSE5N5xYPifzXa42cfophqVXKnDxSzDJsF8ye26GCKVU",
  "key17": "2u7yhWjjoc5J3AjGmuzdaHwLYWpQ1576GAPtNsyJNpicrvR7NJDyHrufBsTUixdmVMHGNaM5haQ95R59xfvhfVVM",
  "key18": "3FY71tFnS8wgmGnK3hwaroE6BE1HiKAzDedHwAbEB7rjFgd7u4nYnsV68gCyNPJAUuZ7dta4TQWttY2pizkF8UJD",
  "key19": "CrnGrrXySGegGss23LxsYaHXn4DsrX5Rih4rZgn1g95kfJLAzwCnmGJGCKAgo1Mr9qq1UL4DS2boUtQT88EPZjc",
  "key20": "4oXp91VuFufvPcXXFNiJ41tvxFWegnpyA7t9NDxFpaMTbyGXgQb2TghmMyQrreTFMF3YAe88XT36rTcMTkLcs5vA",
  "key21": "LYPdgTL8eY7tVsimRQZtDa2k2T2wBJyQuxUrLM9q3UUmzh68cXnwuFaFCuyHjpf8HtjAyGU1v9RjXdW3yhXwv2k",
  "key22": "3z2bEK5YScVgRpX7Atr4WHdsBKNBnc9BbHZQ3xeYnYe3ACpspU8dhqSDR7TASuZRADibcJJsTYBxiLdJW1eVHvLb",
  "key23": "2nrpBSMfQB5wVVq1sJ7yvH2JiHQHNA4g4ybqjP3LrLrmkKhUPNBWymBg2TRS4Sm7pw47N4T988qQsc1oKyNErkYm",
  "key24": "2EcAPnTdrRSoZBPvJGFLDwc71DnYSBmp7KfEeXULGte6u1kbu96x8sg6gPbxfejY3kPMrSi38bNw1AExBwXn9sCa",
  "key25": "5eMqrRVHxRrDFzdYJoWd9Yququf8TrUXH8bD6RThsW1VJXFuMYWZwK8S48J7ixQwRLrFhUw395TZ5w2MRsCNFLC1",
  "key26": "55cfjjZ5cVLM72TiSgT3SVw36B298MD7BpdjGUZchMHm5fBCmmn853Une1oXhDCqybhJsithFa2VVzXs14Am6tkD",
  "key27": "4Unue1Wof5MBRtSXHhMDrbjtspK2Kt7DNCwW1tsjXkphhbR1JUewz5hnCnRxXJnxWmgSKU8NSBSTw82ZApFxt2nk",
  "key28": "566KQj8uiE6eLhDQd7h3ULwdQf3nX7LtYp7Km5zgdwecHuovB8pCUVp4kiurj9nmipGS7J6npmnDYhH2MsWVouB2",
  "key29": "qukNLGjW6TAtv2TW2vsXP1XFHNaDTZ7brMuek61GpGTnVWP8p5f7btVpa98uccEpbS9y1SZicvBuc6v3Qq19sTa",
  "key30": "33wdLALtuUnpMKaNgFUeiGq6j62r73WvWKCjCVqCCsZsShwPSPzF5eoJVqBV9Dp5GTcMVpBjKyDue97xJmFsPA4T",
  "key31": "wYU4Rz1zhe2g1LKrxWMomHqS7Xe8NeX3kuWFg48JUdbPDDKNJpjo7YrNtg2V8QqP7v8VxXebeh6Pu6GKNb9j7UY",
  "key32": "3VwgMVcY8KruUAYxyzyCjo1ynGkh4Rh4f37E56sBBbTsLs6auj88AEgwccTQmZnPFXV3STiU5NiHM1nMecam3uTQ",
  "key33": "511LYH6x56iJsHw6xwXThSBpFLJrP4KBbFvKCciKrptdbqsgL7cnv83RrG2TUDcBWiz1pbxbr1ZVhYh1QaGfpnok",
  "key34": "2G1onXgTRj4KmQLuk8yALjiJwztyuaoCb8VcVKzstGWCzCp5bpDeKtGapRh7LwTLJMmappZjUrs2ZyrYo5y5zr5Y",
  "key35": "2FGoipRyk1Uj9sw4Sw4zwRKDW6UjC4e41b9ia1a246xek9R1RAm26gDEZiLHWuU3SWbDJeq5aHsjh8eSrAZwnNEE",
  "key36": "hjKm32221vgfaSr61vP4dtmHCMH5CAu95EFKG2UVUr3rjsuLGHQEFycdcGWpxU382YfdwgDBYvt9Q8CFUQiPiz5",
  "key37": "47BMyYxofNfUZHvqvYFUdDjZGBUgwUoYr6fBQ5dbBPj8VmBMxgQDMddFVsfMimbJ3Dk8qZ2wyMXbBzLuJDTe4VpU",
  "key38": "4VxCmyyzyLtQZEFohnHTW5Sh11YiestBjNWMJfnajDfyRAowQYo4Ro5eWujxDbS8gaFu9nSyGFKPQpSHvyU5ppeM"
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
