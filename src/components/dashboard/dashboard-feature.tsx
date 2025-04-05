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
    "2XxcU69yubEQrDQ4TQvhdFfERw9oHbGnD4uw4Ay8wo6reeu2pQkW1Ysyg11SwwoDLqMoKSBVZSxz2XSVeXkYeX1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sxXZ5GMgzxPYcSDxTpRjYuKiQ4V3Z2hh1HwHd6whHD29YtSk4hBHSdWed8dMBf54dJMcfTbkovUzrNkZHgcCVPx",
  "key1": "3uWSdfm2eNpPVdxbnwPWJdchNvoGUdgz6SAYWfE5KnGKXEFsGcVstkdrDrmtSfgFLsfZFLgnyR6uTLmFjrnKReBo",
  "key2": "5isxHATWicp91BtK1AN6oJ7mPmqPD7LrDgqgf2dwSpavTGJn4TWEbvv7eh9rVvvNWeAG559zugxBA6RrsHxCQ8wo",
  "key3": "3jHP4gPwyMoe4ZxSmrpa4amrofGb8dAVwDtQvffkgZBuJcCWnhujWACRTcopHSqtevxnZEPK8NUPKcLkEVkJ4o9M",
  "key4": "3ifzmJJioRUTPrm5E69ygLgHWAB8oo3jTTbF8Y76t7VRJbbviAcV3j25sx2nj1dagYZESwmCaox6oXCpPL95vNEo",
  "key5": "49Th3j4p2XEHwG8U91GvnV3p6TNDk8L9pVm4EFwCQLvGaJzLnvxWkVCofHAgB3eRr7Pe7vVWkuJ4QwmiaXhfNeL1",
  "key6": "4eEMjSBioSkEMTmX7TfRXmoXUJQpsCyXWKLzPTm2rSZeLFqzZhTonkNjTsVqBUSBt9bnowo7mDxwYoFEhpocHwYc",
  "key7": "3WnQbpCNUxSnFwPQDof3jSuvWrB19EK1s9Jst7hSATX6q1vey6VvdiD8tn3wZMnoBRkasYYd1UWNxSggeqQCgcq2",
  "key8": "PKdhaNTK9AChUWYUGYk3JrbMG9ihv4aPe5C8gBgFac8SZsTZAYrv6p5pdQ2y2L8LM3sZ1aLCEBPXrsDsyA1B23C",
  "key9": "4M5EQQRjJvofcwk15ndTX8FSJLw2zJ11YH5yBxUF7azd2CYnv29UexAYbjfsJT3cwz2hKW4JjWrGcpXrmy8su4LN",
  "key10": "2hU1ECArW8DXwZLooogU5RrqWaPWHTYe77UThEeSfLkVR8AiQKRnW7nPfr7kNf467xyM9yXYHe9sNkZ8BWzcc39M",
  "key11": "66bR1HEuDvts76RgR9JhxSmeFyxNusLFHgQZkx5vy1X5xdHmVDWewCSCijVzbAsHDHVRuo9UnsuUtRtreK2XAm3u",
  "key12": "2sBRyLMQp8mZ27NjzpPfA113tS3BNbdxJK8rLKEpvTeJgpVgQF5nn8H3R7AEr7LPfNBbYJbejpHzffU57fUreRMJ",
  "key13": "4ufmHKHp3pZciL7T8gK4tfb6BXucoCmu18HPEoFJxyFT1Fh11HMNx3bL79s2Yxy7HuHWTJ7a3aAu3ggMEJVE2hT7",
  "key14": "3bCtb5B8SMwajoPgGp3cUdzPrjwJ1WSaXpSaXdmhqteNv5FrtYC94m5C1AujPZKQD69jGPbKVQV363DBMRVRq3Ua",
  "key15": "29ngJLAYVbh2PWMH5iKPsNBTShcZ64J8YtN3vde8v3TfshdP34yeDwvbZg2zHaYbKPb319YQYAXKMSzjt9oe7Bmy",
  "key16": "5JYxqQPcoshkvAAud8KPPdtRAPZMSeikFDYmHbCebfdXQiShoNGDvTMDyCtKKe5fzWuFDf9fp926dhoy9PFEQpeo",
  "key17": "3UZL5QEpvyACmVmijYBnpkjtqbCQ6QBkFrPDMpZVJ17BkbP8JFiXgWsnC9iBus66iNkSi1chLxxxBLCmDdzMBbXU",
  "key18": "3gj4ezxTg9aAB3S4fnFjEEZ1GX61zWxTTwnUMf96QY5Ni2vSPSd7rYGQGmEF7pehSHfGdUA2dNghuoayvhSV3LiC",
  "key19": "5N6f4DM3ZhJp7MPizNCpjizvs5WHMTcGHD6NoKAJz5AZ8QFEpJoSVPJzgd6qLj1E7LjwrEDVRJPfucu1PyTBFwao",
  "key20": "44p2ExoQcfH8eUBN3xaBqfFpaTLVA3CSfLAvZ4hpQVsZe6kJ8LeHXd6m5ep7SWx2QLzhX49EWJhrx9tXjg7c6igC",
  "key21": "2YWeFnomJZo5aAFQP9qTceoD1W3jPnZnMLK3iwD1xdciiE4ynh3teHVCbCNFvMDtuNFi3JGQJVKWZDuHWFRKkAmA",
  "key22": "5L7iRDjryZK4kBi4jMW2rAyQve5yrf71FRh7U5Lwsf2gXtBz2KPkhFSkMkqmESaGJbmyJSgp6NaXNj4kMCUKqL9W",
  "key23": "3JmHDKWLnhTMvEjEmFnH9NNdhaEcqbqBBTzsAuQaGDU5g5HJKXP7yex9gJcUSRtFnfBEu7ztHhSY1cf4XGW1mU5Q",
  "key24": "5ThtjWrWB3H13RfY4XK6qja9mMxqZUuhgi782XPdVPyWZ9zPKiv2MpEa1fjdJeAPuacGL9tqeBzYN4mhAEh5Y49g",
  "key25": "5dRPENSumzz28BW1eKexoURKSX1okqfAJigXaWAjxvRLLKAEd9XWrajjgD2HvTdPt71t14b1Lz4UUGcbdgVuLnx7",
  "key26": "5KGjbRCJPDSpbMA7iviiwAq6hPk4VFECbX428dxox1fwfmfVjhCubBvwe3dniJUY7UXLKeR5e7oWC8ZTN8aYyxo",
  "key27": "5UxkGrp4Y4j2ohVEzsqRtLWZkvikJMcnbEFXkc5G7VxcuHBAcD9WmQNd7vKg2LHhAtooVsJMuJHEyzzyVog9JaDC",
  "key28": "aej8AW2eNnw9ZDN1KdZwbWbo7YkuYNUyuVYYKuckduCzNLBuXcniTHwF3zTpF6TfVKDB3q7Q6fkbAQNecEVKMRA",
  "key29": "Ujjtxb3mdPTejye9LUiU5xPyrGCY3Pm9kbk5PVts1AJE3HVVNZXntnYVvbDmmzXTwqns4k3AL6Gmc2eb8F81HSW",
  "key30": "9hVrDEk8PbdvpYocS84Kj7n9CwDowGyqYBbvFYWWmyURS9eKWQnEeyx4S9zdcV54zARp57NWKzdCaKQwaHhfF36",
  "key31": "2kYEMkiwmhEVQ4cPvdyZuRsy4NEc3aVayU1ByNcKXcZFAJqj2ayWJBX2cLKsA5gLgKvxKaCEtuNzHq3WH2Ck8de5",
  "key32": "he4bXSgw5LftxvaUbFtzhKKMveX1zJjhAmpCbdEPpmRrbjy9by74co6iorB6Z9fzbiGDnwucxU1YihBgE9qZUzS",
  "key33": "5TfFibX2E7ZVsxjc5ogTkbZENJiu62KqgMEyoKnjCKCqBNbGdqVjDH3jS79H9YTaBZQ3xbzw9rpNTq2iqqqrVguz",
  "key34": "2FHraGGPZ5KmZZMYsSvf3vYmrgF6scmUvJRHviMc3STT6AvSuSYhgUTrsMn84tx54779vheJ1XMrjYcF2bcSPnjd",
  "key35": "2Vn89zEJdmiwdTtTdfoEJJWVrHCicz3b6KPvjmgBbgrM8ieur151HBqh1LVfD1Z2DK6bJiR2Preo2Wi4NjmhGSAk",
  "key36": "3KwfQ1Bg3cLtZhFkf3qLt5xwqAt7xs49WJU5jgZgkpdE8J3GoXBzi9LNgeqr2ftAgv7wpQQ7ixofxhQRKpQuKCrG",
  "key37": "2ZnkfrwfjKfTZ1WXvioTZPpBdLJfM3aJy2vZ8FiujaMrKWP3BkWP5S2JMivfSKahNFnba5qaap1DyBwYnXW54iHq",
  "key38": "2PYFYhCEc2JwobjpJTqNfbTp7Ty69jo4ygc4Fzu5svHfGr5XBL96hDtUB64GkNa5EJNkMWcJnTPTH27XVnUtehoK",
  "key39": "4JgKwKG15S3KiegY4vyVkv7iRbUnDJdNqAidypT3vdLQWQhbK6vrvhKgAdeAF2uj5Gpn89nyy5hKCtsP83PsbZv4",
  "key40": "3oCtS3Hnq15fiW4JsyDSPfDFzsixqwQFNsfDHyKAoP1C8wJ1jpicMaG6gCBxwhSw9cDtimDyi3NRbZfG4oqX8vRL",
  "key41": "2AyaQkyhqkzx7j7riPaASasireorwiRoHs7bvibAnAx3frDHiKauBjEMmWcnonr6e2EG8xhrpaQxbMgEhfm8sE2v",
  "key42": "oLAbKN396uZN41N5V3ogmEYbM5MLmhmmLDn2jYxsFgcMX6NWFv5c64KaSQkCuAmPhMxqMDNZmjMW15e7brbXWTf",
  "key43": "3ZSmkNNXokhfHfbA38HfXzphhFNpegPxZj21e7LVb9o84qDTKs9ux9F1GJiQcGmqmPy5xUX63NbZyrSXgjxxFbYB",
  "key44": "2EPXNAnS7nh5zj4xcAXhfSwi9MxPq6ZQ1hL3meogGXwHng3MHSRK1LVTVwjJj1AswaUpKz4He1xVTFft1p3ZBbtA",
  "key45": "3DzniZkxdSBxcdtvitfJzthkM2RaL5CgQo22YaFg9EvZv1BLH85ifNhgEw95bMaBNPC7uSVZ8jKNKL55U9wq8FTq",
  "key46": "42jowiLfbZaGTQJmoBQQSGa7pbq1QKb3YmeJgSJkUkrogAmrYK1JhyjgLjzuAWyKDguHZY7AmCXAnULx8RiQr6WR",
  "key47": "2kNDPXqnYuS1QLLumNfDcybPtGuGspcfNuXVBBPue18YUFDagBMyhkgKQQdNddBAnN6gwky4xqvym9arxn23Qrfz"
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
