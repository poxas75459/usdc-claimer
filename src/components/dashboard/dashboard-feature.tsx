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
    "52Uz4mcCEn7MtFSwXFLfDBuMqzjtmVAVLz1GYaVY71hCs4mt1oEwkjPNk7NRt5VVNp1RXqLVWmjrQSUnjPSdGfVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22E5zdZbL4Y3hKRMrCEVRLppswkit2kSvwoJB4EBWWc79J78WJe5Kd6z25oqGed48PYPJhZEJFkpFsFGYoPQa8up",
  "key1": "3KRj8hkaYHVBytCYBFsv4fHwE8SAjrJ2LDTuwBun3TTcvHhKMUYMZDfyU8SMQnWibsDeu9ioNK5niQn5Www9znxj",
  "key2": "3u3b9xj33oUcaj2BFtJ58Ym4VGhcDxmRZQUjzzBgaTo8u4FiGbTYiQw4BuJV7Kjo9UPc35RqcxTSczqqLQ77ppTi",
  "key3": "3b9DetRGeDcgjGq95uT63vNzybdmUYqr8niGMEijS3CbvLFb8kTFFaLbxUwbwPs6hrTbVqprr2zDPzziA9HvctHs",
  "key4": "4ZE7W2CJYozw4j4EJNeETpALNuvX5gjXNnQjMPt7EhdVqFzN6SKJ4GkZ5PXJFvLMXkFCyhekxkQizvPzXMWkiPmy",
  "key5": "4evu9iHM57N9H8HPD4e9pDtkPhcsuj6fxtnBdZRo79YLBqXCgzo1mUXGLXk1bDHAHKjKTpEFSfHkmUh2DPn3wcMm",
  "key6": "5s9cf9rHHBNvRqDFDznNizg8BStp49ZeHuZDTMdHhdmgeEB5DffSD6BX1ZQazSdiTyFCQsG5x8p7kXgjRY1dgSDY",
  "key7": "4prXxswdEoEEyj5kC4J5S1iEC9Em6AcreM3ohwqm57v4uwLHLA9qaBuHSHtK9EXEwbS3th7GGgJTpJ7XixW6myc",
  "key8": "2pCeN4Ge5eGDdDAPxCduZzViD8RNVhUgJatqWMcNb1AZDV5D4rSba6Z9CwV3CBjwhpK3CRpgpjvjT1RwS3Dpqcmh",
  "key9": "5DSxbGp6qdraYCkQjPoajT589HNsdb2p55TcmaQmYhinnjdfZJ4rBBoR9B7nqkynbnhpg76ox9sCrPS6TvxJid9m",
  "key10": "5iVufBXM7CghLztTRrTQUHxXVExfqaB2DeVBP9uReEUm2cPusQrsYh6fZVCn93a27uEYF9YWjERB836qGYyB6f4u",
  "key11": "5ho1DD2Rz6ZKTLUWdi4Dskg7LZasbTVEP5KMRhN4dXMHUniZkhQ1uRjvVYQwZjNzhcyivAFqfTcvtzeZLWQvi66n",
  "key12": "bTHCLjKcgzTPPPubN9kT5MvBj96TuvXaWRs9hgGJgnCSTuiCHZqDot3G8ji3GgPrrWvS9e7irpR2otuiqPm4ysL",
  "key13": "3KnLaL2iki4G2cfG6ECAFYG2FoTbBtCzjcMzieadZCGmi2PjV2UW7MEdXRqYhDrXFWeBXZXi3eMWevQ61kSGDGmg",
  "key14": "2vnQLmbmnZwL22EVZhbVDNGGEwXbQxdZzboRtCfScY1x8qpums3kqA8aCb3XCcgF2RRNzwiRRXaCNbGDaMJVbHXR",
  "key15": "4tCwNhdZmwSEMGcywpe8WX8SG45DCt11dTYk8k2TTpJmgwZsK8coieB7o7BVydZ2uoTgr7G7jodNbBdxGpyESX7D",
  "key16": "33GsxFb2raZHPkyBBrHGu5yTkx4TZpSVHNd1SVHi2SHF9fs89J8FgqU2iKNbNKHTUyiQtyCZi24cs3uXQMgjSrNy",
  "key17": "3tVeEB6eWNuG28nfBb8Dyvkw3DUY85kTf2KYbECeCSxBpAe8AWw3YkDBbiq5ct8V6qnMRWByJroEDWJ8p9B2R5Hz",
  "key18": "MTrxN6Y4SRy1H1ARbYS5UMXmPVEyptq2vkQhfAtiUYrTnTNDu7dxnyaPSq8LkpomeXvrbY3wUgBBHs6tYhmtnsC",
  "key19": "3Ge7mK9Cgjym9YuCUhYECoK4q34XDgRaF6fsNupvdRGTTdo5jZMMDzdDgNQK4HmcRKAcRpd3dHUap1pD7Xvthshu",
  "key20": "2xWpFAcZ5RBpCCPGochnpH18zNmpptHQBfP3h3gvmkyF6XU3iH7GjSSj5bUmwSKhpcFWPKF6zutHpbeNRZSyjcf8",
  "key21": "4bBC7BBzKa17z6t2STWJ5s5yb71ZPFM57po8VwNNJQNtd69MVYeLLvRahRTSesnQCcTYBRiHkq7LyyBb4kAaxkZq",
  "key22": "4ChuDrJtEgYL74FEQg4JAS7mFuKoDgTcChh5iNjwyvid4XvmjvZimFXvyQcPWd8ke8CWApLdvYHYe6jjkLVJzzzd",
  "key23": "2MxSaYg2j7EevDkE2QRVCd6MuSffnd9NxuFzW8Ayt1TmSjyGGhqZvccb6X1iU8XU32CnwH1i3WuxktMPWGCjEdGs",
  "key24": "3ByTp8XmaeH1wLjQL2u5xGLbPWNAdm2YT3ecCspPNizpFLfmkkyvAo1NYYySXDSNqeCz66veatb66bNSiMGydtR5",
  "key25": "5FS4v7akfu7pQWzbsVLxtf7EjFTmems2Ys8nR8gpbd7zSEnybnUSaRTYkEC7uxGUSdG1ZuiKyAG8QzWqGnMCgNw6",
  "key26": "54K2bTKAEQjrbJPvoVWbWBjZ7ySTHNwPbJLo2qtyNZ7hNhvXs5oxSMxuCnQih1e3qhS5zkC6XrpS86wLWECQPZFp",
  "key27": "2C6qjZA218cUk7MgBSjqkZsF8P6ECE1ekwrReiMmVvvCLMpk4oDqao8PdUpHV18chhKgHu4ECheEtpS61iDwQf5s",
  "key28": "4PHRtuYYJReTgYd8cmm1RJeqZCLA1gWnSoCb4RMFmifm6jRaZMmkCL1Dr71u99kQmMFWBUEhdT17VXhJ6zJBunxT",
  "key29": "3N1vgx8gpdpJc2kDSrDAM74RhwEyfrYKWMZWRr5RREUQxzuG8EKr1yETbrbzzXYhcbu4DRwqJLgmvSygfyaqYEqH",
  "key30": "3iV2gbDiE6YpJ5tB2v1JtJNci6K8awHymfFcEwA558xMkRNhJaV6ojZVN5Eu6Ymyepu7mDHJPr4WaugMo1i3JCmd",
  "key31": "4R4vKzGgbmMiPvCe1TSf1ERMBFnnpSeLCgo1VQoUPqoxwCPoa1RuCTitZ6NGtWRqo5WQtqEKbyqMNhFBR4zpGFEY"
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
