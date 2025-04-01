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
    "2FZTwwP4cjSzYVWv4swdxgWdNGDv4TnhdpnnwqwqbCQ23H35YmeCuiGXeq1oQf4W1FpCeJQwTHq7bVv12iCcLLBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41snkPVEVTMojpMtFm4PrqGKeoBZARRTukeqoSLA9v5Y1qj2jpFwPv6EAE6CSZiHBvuo81r9MPPYYCwLT3qJAnWj",
  "key1": "5YgshjN4SMA2tLyJRr8kU9z3yWDV2rBJ2YT5TRC4LWngrC9SgnJU4i4qPUXXeAi8MczRKEqTN1Bsya6xneb583da",
  "key2": "4FMFom3ci23ayXxCbBpY8o3rBTKWaraMbguftRaTdRaZwSePnkQBjHn6Hbt2qLNX9m9mSnn6YEwcaJy7fJnBMipJ",
  "key3": "5e8uHBRPuGDurdkpABnyQAXzhYotmTioZmdzyPoz9Z6bCWP9kF7hqFgX1zwZbpY8yM557uu453sD4WoCX8akSgs8",
  "key4": "49jGSfWRjRBLWzbqN8UqN8q74UFPwpBfb8CE4xxuQnKWaubaApZtFGfaJrA1pjjiQUV7XzL9RSSKMCe1L2VyPT7s",
  "key5": "5Yy7t2HSBPhWNpg4w4vjnAPNpSZG8SQWNbJyjTmMyazEGEdZ3NsbYymCJpmMcpFPaBpA7SvVpE6w7P4iQpsEfXZM",
  "key6": "4v3MPw8LmJH4EMSvm1SPYXqRzBgvqDoNPsTVUi3CmP75j9T2EZLn9R3W391Sr8haNeL9xpT8vSEHnJRfJtiCxf39",
  "key7": "4Bzu4Lq6SwjdiDLGb4P8WXdfjmGcF3RBacqGHhgBxdC5Zq4hLvoAvvZRaNJ9WzfwaY8q3quqRUmoSB3cXQvs8wVe",
  "key8": "3G81HzZrJb59PatXr72XQ4rFiaL8bk8D6z3Ve86rBxRqWUfz3pepEeVjpWLUCrTqGxHBX8hLsQKFJs5natPwmWW6",
  "key9": "23XbLWS1Y9EJSievhszYJKWcb2eTXxSX5GUVpDAirjQz67T5KJrvwZh2YLvU6Yz1RnVJQBiHqiCos8E7dtgqZm2i",
  "key10": "2XwHdgXPYsWsEyH9JnmbgpbFpM7ojhEcZM84FfZxf8MbsbTWvFnxTYoQFJb3auuRhcw9W9CVpNFAoWMmUTj7Mwz2",
  "key11": "4RmAZnTSPUgPu1f4keoPiHbyWPcJpfWQZeWtPA4pjQvR3jb1cbxoBk2oCs8xMjtPakSd6ZDBybdRaHj4gpZxj6Ez",
  "key12": "53BtJHvza6UegxaP82DJ66EVfcgYkNXm36FLsD52c8pz3pzNeeq8NgNPN8ZFpbpa3qvzEwo5C4kkp6JPLPDv3qdi",
  "key13": "wWd3X9DBh2PQZ2NHytcgW5pppDnpeEQBkBPSAuCKwN5hQHmdisPrVRnkEyiuGM7pvBLikz56SPcks4dhbQ3cc8D",
  "key14": "3f5WZ6K3m3ZovPFpeGpvkUN2VPJkHoMBgyg7XpfvnZX72CtmmSgt7jGdnftBfQmiuEJ9nyvvxrXJ69G4Fb1oLSX3",
  "key15": "4Qo1m1X5MXGwVnsGZFTioKYpNmhDmWMQz4nuLAyWxPfaUqdrgPyPGBxjcjLZQHuiPvA8hbzDhUiiP746ieqKi46h",
  "key16": "5KDPais1z4JyWTQ9ZgFhMFUGD6SnPMEgCZbXfuZHCANCXT4jdJidsQ91aWax2pDansAYongohAPoiaJTxy7WaXB3",
  "key17": "4WFXZZ1gWdytozLGxFy4uELJddN1UvkWNYVTxuC4RLeihdu6cvPETarjrYheZWymsWsPviyEZPL2gM1iWtUdZxj4",
  "key18": "wqQhHF5ALTQym5H36yeUTGoDFDfxAUbzSnEMGVsfJuEywxyfu3yVGHXH2LdWzgfqgUu75cqm8pG5sjjnJjTDpxK",
  "key19": "2e5B7kKZeArY3AuU2eh3uZJzB3vgMhTfyMDUT9sMSesXc3c8w12kA6eKSXMNb5ULqpHC2icQ7EGhhdrbyyVU2SQp",
  "key20": "54uDks66xzDCjHnoeS9v86FdzXXZAqHkSUCJpcWM55TrJkhzMh9EQ71G66QCazTtiC7ebnRRmuSuegin1QqKyznv",
  "key21": "4Q4YU2e7Q9oiL4pBSAsitsfiaJ1Rnw4LosuJDPuGdgvr4pNCG7gq6QBRGnLJqa4UuKtuZXwWuLohSaSjww2ehgcR",
  "key22": "6rBXaSAe8XMdkPyQq1cJPsrmt7oswyY1HGbw2996Ez15LLRX846HjVm8W3JRMG6D6mM6kzXCZRu8DL46Bu1ycgg",
  "key23": "49iPRY5myVSTqpgLQsDNST23rYt7Rr7722QiqvJWZt6DQi46kVgd7KrX2ivetyTWSFjHZW3HMCkbswuhhw7auX8V",
  "key24": "2DeKQxtZvpUQFrYDPcNPSkwm7gxpvvckkY6Y1p7ciUfeAziw5bGtuenXdYuL6RbX5TLRcGcwR8CchnyqUgG6dscZ",
  "key25": "2DpYnREqYCktErkZ38rcmZmaSxewZFpcot3LRD3qBGvqZzYpp1RkgnZ1LukEzoYa1Ri4hiQ3uBKtG51TrmaNuBQw",
  "key26": "xqqgpwhVf7R1VWJKxH5DZVgEEX7sU9rDYJnsnCpQXnkrm2HaNEzJuKJphe1EyefK5ueEaWUoaLpozdQhm5ZdRe9",
  "key27": "4iSpeYt6L2GELAAPaUmF8qfDQXxdAi6tucXp8Xm6rtg2cMgQMMe2pb7Xdi6ETQJ3DBRcbofUBC3GWPZdApNsu2iV",
  "key28": "4BcpX84FRHXbF7wpM2bYadhgDMfKQnhPSdDNQfhM4qnAypvyqzTaKaKdgTvkiVHvw3Zp8eY5b5gwqgW5znGJRsXK",
  "key29": "5Exa4bXQ6HkjRWJX6Ab3JfusiNc74tn4EdPKVTYVHiJdPPsSp5azPvo1m82xQcfKwcCEyK3HqfUckk89KyhDxEnu",
  "key30": "4qx6EFzG4g8P7Qa5W2AsUDXeyx4Dz7uTBZASuZzGLDMZqrNfsYRW9z4CY2dwnFxq3DMghfF7LA8ufyEwN1BJVkpp",
  "key31": "37DJJfdsEFwuwhyFXdvcBdJDvmxG2HVReDNerk8EfpRbZ4DtUa1XmpZvzBkspDkCqpZWQhiAQVGho2Ds6BPhz2wp",
  "key32": "nPFerXRZNWKP5FLfFBF35mjSB8zE2vw9JDh4f1fX3iaV5xrt3ja7ZoECXkUtPozYuSspxQHssC3fxFH4rjtLBHi",
  "key33": "5aM4WsQowDLrMAV7W1yrCkMdZLWgP72aY46LB2JW4KN6kk35y2yoYweXkaRVnWj2TC4RdutxJVe3zjgj62csFPjf",
  "key34": "5MFErGrixF6RktdYYqhwQcjJqvDXj8cJLB2piBn2NbabS7y8gsQmwg7SUcowLHt938aj525P5WJdtSAzHYkbkfCt",
  "key35": "5phS7MuMi43bkhD17bVjtL52oYy8njvpyRbp5AD5p7LKBTi6NjhAGtL44oJLKGqiPa7juGrice1HL2bqoarKrCGf",
  "key36": "5fkm4mwdkavWrEhUTvUemmurnSDkLsMLrYBvj5eNuA6hQkBDW59gqyTPa5WFETJySeJTDeJ5P3iN2yUHpu3TEoZZ"
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
