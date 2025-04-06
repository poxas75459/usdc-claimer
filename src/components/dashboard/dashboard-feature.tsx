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
    "4vAKjG8Uu5HwZSgDHyNMqxTGBBP6RZ8mWBLAXDkYV3MUTYdK6z9YtCTMxqM7wcMr12hX1qTM27P1Y8AT9ppvCF1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFNjaVfcp2qCXefaKUfmtWM3RBjQMWbTaPCYLZntHgLLDPMxF86hawPSWDvLMUH4HABxvLru61EQnN2WZ7BDT7k",
  "key1": "2va1XWHE1HjySbK851JmbFWmZKEcg7fafXR437oRbHieFbfShPU8SmMs4ruZaxmjTn9tZwim9pcQjdsonJ1CLJd4",
  "key2": "4oYNNjVUL6NrsZsoyPKZV37MyaiG7aQG3GZ8CWtJ6mT3ytNqZb4HoReBZ6eKDPAxo9qyyuPCVMhhKYbdXKWbtzbN",
  "key3": "4mqxFtzwoDvvF315aXCyz3of61WMnNkWhvefEqA5fWmBjQupM9qJduiCoUPc2CbXXZvhdFC4uWYvmRvF56DnwHsR",
  "key4": "37dVA5evANHUQmshGTGf2dALD4mLVfRbsWiEjAS2eivdEWFwC7Q62eVJoU2bYGpURFKPVGbqYbP4csaBnXJXguxo",
  "key5": "2yZ9pkoEP9BGXg8NriqJ9nY8tLJhMUAkkn3ovqDxGizhmKxzQokNHpeNWJhD9x1KCANjPw7k7LbJZUZNotE9CiR7",
  "key6": "38eFdGhALpaqPi5pE1tExfUrZ327LhcLSKUsjraz2n9NhhrwsuxRPsNuxeyALAFwWVZAxHDU7Tmz89zej7GPyDN2",
  "key7": "3fnLfHaiaSwGnKDVKuRULnjz81XUBeURDk8aiEzt4geWiEntUWgbeopbm1pHTSKV6DdEQBzf7rFRput3FqjH4roc",
  "key8": "2fBkUS488f2V2fbxiEbGDV5cAVXXanXXg8fd4qZ5QLDQjH8H6dSsyxEgb6UFbHYgQDE5hG9pBP1YSgKr8A7iaVMi",
  "key9": "MsL8yuyuuwMyx5vGGzvEeWtChHkLwQj4jjWsRFzwZGWyRnjWZiqESS9oJDW9btdfwAyzAFMGpNNSxUP21GgtSaE",
  "key10": "CqXaF2MafXTV8PbnqEMHu2bVuN2JAt3aEVTgesXmNLsds8mnLA4RMArf3aeaXQJidTDKckXtthyToR9SZKhkDpu",
  "key11": "2R8PbbhJHYAVBdwB8ZJTjRRXuJqoeYCTN615trq3cP7p7CYyptXDuh2yUgacxuJrTpBKtAKBTBJDdud5pryxqqgN",
  "key12": "6GG8HNjDGUp7dfXXK9H8GMKFELeJzyTer8cGfed6rKnHTDhSodhuFvQKoumtchiQ5rxCHqNKfCDUx2Q3W1PbMHx",
  "key13": "3ZYYAer3he7W8sndzS63FEJ4jmjKkKtCg8qTjFbm9ugoocj1pt9uqSaFVJowmKTkA1hj1qzbbkBQeNUqc4NDQKba",
  "key14": "2cKSUREWrnKoSgaRdxXaeYiZoZAY5WadNaMfYAcUx3GrhaFzgpxTE915CyMYKbuMKNNFuwfteSnExgVPDo7n8izR",
  "key15": "eDoFQXGdyDv79k1VDE2fcbmdvyBh1QUy2Kv1hFKNKPGXhivrWzLXeYiVdujvJcN5TvM4Fgehq45qcSUeNJDt6Hd",
  "key16": "4W76K5cvgpuk7YNYHqf8PDmGxQzZrTRtbtPT8BNKm6sxcPpS1UdGAnCkBecEs3PpJ3LgZiTVaXmhUHALNWHjdmCS",
  "key17": "3ZuEmk9f9zNiNkJDT4aHkskAEpP6U35ppkyCHHBNveu4q6Fu2Ze2MtdyucFjrXLz8qTUiiPSvKWyobCjLNxuBduT",
  "key18": "2RX2pZbMee9JDnVmUJvRpMRCvRMPFjRF76gCA7SM7ciF1TEyXHSg3rKpPauwtfKgNiApt1FutV2Qoj3E8Yfm7HgF",
  "key19": "AKDhHLHggyAxqLB5JFdWbh6Unw1oZJ69SyN92aU3Ug4bmcwmyWN9dBcpgaFwrpWhLjk6jFuaiZSrCwy9RCUSvNp",
  "key20": "61gFLDrDGcPsBHg9NyrhZLkPML45acJJ6SMGpPZXqH9GNJxprG9vbCGmKMkxUnTPNcveEnrbhepM86wPPLEPHZq2",
  "key21": "2Ky3Hez2q9TwmjtD5ZcuE6bYUYK2NkWAMDoa4aH9CktKfjd8FykcMVBdkjmfrZ7PJaQU1XEw8kKMZFGk1jtiyfKL",
  "key22": "4hynDM4Cr9yeBC5QbxyfkREET6ZVYwp3o39iq1UsjHxL7cWUiLYrXeR4jzZbW7LF8UNWHq6xjwwjwTa91Fiwccjc",
  "key23": "4NsSEbDQduFWH33pYSJm6hkMKXTTCZ1EsWNZESgh6zc5ne6dAPDJ5e2DrKeF6FMzHYfFncAgV8Y7VMsw1wjcF9S3",
  "key24": "3rve4B3W7f5B2tgojdg36cqQPsb8dyL57D2m4mgg8jcQYqLG7K9Li8XdZDLHxug76iHeGDh6vpMZgS6no5Z8K8Za",
  "key25": "evxUGtaWQ4raQ5CRkNeq2nxYakrdQkzvB74VZANpTdLjjCcHKvTKAGcNYwT5gkyx5dQvFTRNDpXU6po5VmBQZ2h",
  "key26": "5ikvNW6Evd8LuFtEMnscpAkh84BYuBhRPWnmu2KLJEk8Cavm7JT9QPzYSPZs8uAmRSvL5HSqLeRXcDPc1Gimmdxb",
  "key27": "eLt9wTh6dHPbffPKwvRy2VueLisqvHpT812AAAgKqnRFHAccnCthg2g6EzsSYSx9AfHLQiYo4JYeqQb4n77tfKx"
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
