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
    "41dk4ZuhFHKCaEB1PQb2wcxjL5tNBbWpoDJ8vzP4G2iN1UajqtCJ3oNgYszyGgfJRVc2Uo9HUgobvWJHZtBFkXPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eu8MzSWVRiPjfdjhULtmnox3tyQTvTBHH2gJQjNmf9986JJgR4KR46J8hP57Nmtftskt25LWMHYcgVCpQpRwZCV",
  "key1": "3NE2ZB8dX9RRZXXUq9qfLvcWumDBgjzGeSpBC69Y9G6XpHREfP4t7XNkq64KdCW4uCXzs2xtb7z8QBJy5KgNZVzc",
  "key2": "AcT73X4V6SWNbmAdFnLKJGR4QyVMZVXEbPfpRAubnWK7AVnmL5DnQ3aPe9kazmLAiCXbnD3xMtyTFzy4Ug11njQ",
  "key3": "2qwfF25XM6Ns1HUiYrEhMyQbkCbqm3MevHLJnzf9tp4GrXR8Zwc1KiqDFkcUcVTwPG8BL9mdL6xA4nuacZgn7vW4",
  "key4": "VffGAmYJsxcRfKAmf47FmET4YqaGACU4oqwHLDj1jzfKFaP1G8nZVLfPAi7KSE2VP6zG1bvsdXj6oCh8Fu6vkzF",
  "key5": "5wQrmVSoczyaS11gcZPHurvCZSCB14MCdhnqeFWxbjB1QVwmejiZkiDJ3z7e5c8MfMsfoahWnd77poRd5tdKi5Cm",
  "key6": "5vqsXW28q9byU7X6t2SejvPC4s7f8PR9Wki58tCuJ9KeWNFiBPZaVonDmWF6jc1vhP4ZxLxeGF345bRFfiKzkjmT",
  "key7": "47i7XpbmZfTD88qGXAjrRX2uPeChhdACiDqVFhUvzbd1Nqz9TnBHaPUPAFLfa2Voi8Zx1hBZHFdhmyE7fDY3RcXA",
  "key8": "xrNNRnW9qEL4kDDeQ7xmUxN9xBWo28PJM5ZDt8w12Uhk5Nt7QHzYgs1bCUX398RsZGXZU81ZNd8v8MkKEpsqNak",
  "key9": "Q279BsKEcUK7e48kGX2D7Y3jDRNo6iToErjoLXG1rAZRF2KGUPphFWQW9QPSSLdKs12qgsUptqqnFY2jPAd7qkR",
  "key10": "5ULsh1WfQaHSMGRBM5djoaN6jQfwDxWnxKa45yuC91iEQWWUxU5d3i21pCRgX5hxCcWTZhMPJhu86m5GQKLj4ymu",
  "key11": "61z5ziGhmKNX3FARLWV3MnF9C14fiMcrjsearG8kMHgkpwsMiH9DxCwWUYEMfdTuBH9SqdTjnjLgCz3d6PtgMNUw",
  "key12": "4TXZuC86UN49rbnJJZAixU9Q5m8gqrqcZse6oeEQtZ9Hi4RvSHY3gCpo5tEZUQbTG8jarhKEtQe3Hkb6wK2AiPhs",
  "key13": "5o7FJCtTbaDfz14fimTdrAQyJw9SMK7KnmwEfJoMCzjjnK7Px8hSrVpAcTJ1mfGXngNNoFQRXRGzGyu5u8pmqmqM",
  "key14": "5i2oP3E8tWRMZjchpfpnq9HY6p6uP5e6MyXWDUXZnPVvARbG1jFSdodWQUxdY97LS1kTqFE7SLUPyhEv2cdMoiXy",
  "key15": "nGrnN7mvbWxGiQgmJQxDKUF3z3kGsMhvNDYQ6ancJCRsbqy6qEm5WUL4Z5MWBs5aLEMMV9XprxzkzoqFYe7jz3J",
  "key16": "5KzVCy9QRVSqEpoiPsNvChAyzX6DYEUfgvxrCnbt5vs9jtwjXVjmFETdKMxhsSLyYEwmbLtN1ycAxXNiVa5SDFuE",
  "key17": "5eWJUATrSQPiMrCGdWCgvEnqqibkZwKf79Q1SurwVAGbAPsWmaP54bWwnUH6bR3WuGzuV9kuNDB1V1j2MQkpsyv2",
  "key18": "4aSiD5s35SJPppuaxyPUyWPYRLgVt4WuzjkHsGD4tcydTJAyU4CVjfSzXybP6J2tNW3UQiwhqQgNREHtEPzUJX3p",
  "key19": "5ZHiSP5CTJASDfi3bHNx8XaKpAMHeqvFYyif2ouPF6NEVuKgtp8QBG1pzo2xFUbqTYASFDhuothEfyErseXPXb5J",
  "key20": "2NLKgd5aESYajFFpUxdWPn4ruZtGbeJmMcKew3vaPTF2FPun3ebNbPfshZZugBY8MyAY1gBBnzcjsNEQwooBnHsQ",
  "key21": "36fsgyz2givnDAqVEj4JMxorcxuXuzbKgCecEvBSm18L9ir9VetEEiCLrTAHjobaciziYrN3frvykK15HYnfmpXq",
  "key22": "2x78C8gxcaVRfGKVhFbPQoCELa4TY8o36GNdiqaVS3efXsYB2e3TSkzxGhNTPBGfivE9S2Fbx9fgR1Drv6CcFeev",
  "key23": "5YzLM6PjRzX3dMCdhfEABFswBGwo1FCXHJf8U7x4vYW4jjom8oXF6YBnSmp9TcndcmX6qAhvSNq2wtzzfprA4F3h",
  "key24": "LRiWnLRCiCfiZ3Xnw3M4m9mkT751d74hNjA2K4fDPA4GPNAYCXQLhyd5njoxGros35AEohvF9T4cLSWhxkMYeVr",
  "key25": "55SbJBFCNt3iTdMN1pBSyftT9ttG5tgHgTYU8E6n8fjqK33vK8MscuTKTLgreFBjMSX4irTXP2PZhJi2k6yZAD4c",
  "key26": "2sVsvZuGiwsWYYEkaLXUzgTJbpPowhuA2FVyfJANMvCAMhKWVsBQxEz8bgnaAiiLmvfGVjTNb8r3Y5s2JTG2ENrY",
  "key27": "3dpFhE5YVfotDsBtYSrjX8qYZyrnfs5X7kVRyjjHajgqzBdgqpwUVYSzpBNSSVh1g2ZfMvuh32G5PY3wA43SkXKM",
  "key28": "3Xvs1FW2iJLMTvrk3ZJMehGnp6dF5kjC1DzxbXQma9PQiPReXyTC8gSU8zXJTTWqe8fHbpwwxAnJ7HQGNzTz1yHq",
  "key29": "3phHSx9kaKjXGTaTY3V1RPDwgJQKgYZxE7TCyDfQZhBgp3zrjbNhzK7ktiPAhQVHWPUXGg3o7DYwioWEzWgUJg8k"
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
