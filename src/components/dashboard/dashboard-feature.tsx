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
    "51xTadSPaTY77oUfQhZLRfpxCvMqr3uuz4UXijPTkj8M8pppkMZVMB5FQZH11LgYAVDv56eBjSPbWwkTm5B7Neo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnKqK6W7Q24jtF8nXGLVMyDeQ5dyUcvyuB5BBPH2PH8VWTDoLoL8L81f2vtoJSRvzDsaeH2pvzUGrhNmKsPqcGT",
  "key1": "gVA7Jh5peC2QffUdN5xeiu811S4iUXjSRra4cN3B7T6MrvSn8xJwYLTdbqpXAfV5omuqvyhMzYpR7sgk6VJupbP",
  "key2": "5ybnjXebNmxZNKyZpyf1PzQtqtH7Ga8hhN2gvecUrh6s8xs8XYdWyJt7brvXXBaNzdMrYL6fhedjm3VzHdEywzxD",
  "key3": "4PQ6yUEtJUh3XveT8sKGR3ywXkWPAkp8Aj3hc1VYU3qYcDNfAREHYvWyrpoenzweYob5soY42J7bsh3XYFBQ1H9J",
  "key4": "59Gy3DjKLATiUYDQzQMBLWTvpmim1Tr7eBRVJnXPRvHNgKy4xxSeoBUhRCnhaVioBHQqvJt4GeBXxLTfjUZdg4pH",
  "key5": "3v9AExovXVk8XYP4r7LNFxeDrdkCDyEcxVyPYRwDSsPSPrEbBdFD19Vg9uuaK87BvU69U6B5xHGZCW7TnZCNgnvm",
  "key6": "aTKzhQMQVauC9n7qqvoxym8svs75mMzdkQa6gjKUD5gQCLuR3jmrnWfWypywCZRKW4xCmSRPgdPhVi7WMe1cCCt",
  "key7": "2Dn4vz6JycUSxSsX5yhMKJRdnYZccbXwJ9H97sYvJh294Sedz6B3RUgy29NXC7Mmcw9RPDWfxiX3QxdZKHe635Hq",
  "key8": "5F8cbwYHE3ZPt7tXCpcbJDhpLjs3YXAnm95UgNV2Tu1BMZxQsMFQmMeqRQys4w71qr5rXyddeE6pdtwDNv1C5v6C",
  "key9": "3nTMDdocsxcqYEt83HS851b58X95VP9wEFQftbZqUyHxcKaVhf4RfFLsvH6egyeB4fvC7RAbQ83tTKuLr3BJojXk",
  "key10": "2xzVGa949JtyFcUZAKvkq8FTPx7rwGm62C3mePyTtTrGmjcbyCg21fWf79Nys7mT3G92x3CQ9v6fiFHWDMxSz4Nd",
  "key11": "2WttBKeEjg6QQbmxktQWgeSPU6xKYtWmVcrYpWQ8cWt781kQN5nS6g6Y7QKtv7CqajreQ7h2BzYotHiMRwB6gbEU",
  "key12": "4mdqaEvaWNeNStf6DZ32HzG6GFxaFCfPCNhwuWYyxQZfocAygotThJix7gDqDp1wqyTBeNQSsn79ginrKGNphgiK",
  "key13": "ALfnDD4uMwizqWiGKKgcNzYywzPhjp6p88HRaNQNE9gkcxCcCmbEoSPCawiEeQLwWNi1gFPJXXxDhbrKY2DnybA",
  "key14": "293WAbEaPYn5dVfvawzYhNLuLf39KJ4BFDk4d5mSPbvX3PUPxhV4DMQjLQS6FZVmA2QS86961k19BHXQQPNmJK7N",
  "key15": "CT7QvLBGXxTQs8Pr6XGfhwV27Qi6xMuhRBYcisbstVfQ35dX7ZTvPf5EqoK4cn4nX6Z8tcF3B3547N3taVq7yzL",
  "key16": "3jNZb75Ys9zLPxazfeLhvvVXyLkJPqABQs9dFmiaUzwm6us9cfLcaFhET8L37QWfee9St2GDndghMfkHF6m5ZJbq",
  "key17": "5XiDVVcy3gZ585Fxa2NCc7HWtaMB81YDGFsP34JFvSsHRpYfNa1UkB1McEDyLfqv43sJzVPjyzrHYeoFFUvyuEL1",
  "key18": "62xwwKywnWJbAsBGoAv7JpStW8C7ArtRZWmuZo78JLZsm7cUKskGRWXPEnJHVpCL5K7Zt73dmh4y2gjZdpNeQ6dm",
  "key19": "4FcigFP5RuYU9UKAJDM69TCw53F4zFEdKvBeeFYYJueCkNzheoF49qzG8wmWUbycxTBB939p98DoRG1Ph7UaToXt",
  "key20": "5GgYpm5fR1WRzjoxC5APgqcmanzxjVn8b4pUxxwL9frNg5PxXGdEGSB85pdJXbExNX8vKmoRFz7FksSLEc1MhRo3",
  "key21": "4GKCQsSLYqzzfHUh5uGm3Yu1piJb5oF598G1mXRj4cAEWNRnfM6a266Hu1fGrWg542F7itt5dAFxKS7KFJ5TLB5L",
  "key22": "2AWa4SjMJU1ZCCSmgUojJrU3Gb2fRH92vgykp5pjSAZVtQEi2XpeFXVuWE1kB6ZkbMQmUZcqGdc7uf1DYPEegAvb",
  "key23": "4RzAC9YLnvKfVDyZFkzExEDWpcXGHFDzBy4KsMzTeqMrYXoV2HTZeE4BNb3sgsnJkAdUbE43VebMFbw54SfQwse2",
  "key24": "3hgU1XTfYQHMReJoiXo6tUfFPM3DaRaTL869axyp4ZZKNgfcdEEzpTQfkrFoJRdU7LN5eE7L1qBVTzmZLGLPFcPc",
  "key25": "rf5bkTpG8y5PKtzEcf6hTWq8m5AnmrQJMGxjUr9BPkerLDi2SiLsW2fQDm9bEy8vzPQ917DWBAiS4q97H3vCGXF",
  "key26": "5YYkjbJk9ryh2UhZ2DMVSPQ1WwcyitYES6Y5mKmy8CMsHSZxtVfAksjUNgwyrSyBVnU3doewbaePMpqGLefbh3ka",
  "key27": "43amGTTsPE2b6wztJ8NzTcubDxVxVRMjcTirr9BeURtGbe9fWh9LBhwQMQx1vfKdaHzyBcuFMdXExYqTqSJ8QhEc",
  "key28": "3GLSkZQ3HuVgva5RXcdLMkXg4pdYxekxeKpZCaXy9xDimQXZurwvNtXtQrwLjX3ZnQ5cbnjuHT4oeV3f4Y1R4hQu"
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
