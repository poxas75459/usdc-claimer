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
    "4vNtrPNv8CoNu3gkycVnd34b1Fg8jxkyDGd2a2BV5icVsumsgK2Xos44CCh7Q2bGdMwfSG9uTKnmusefnz918foy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMTQUE54or1aKJwXwinSYHeadgsgeGjezxc6HRewsnbMpt9bwAhYtYPBvmgzx3Y8EgYNxnZpJWuXv1CTnwkxAKu",
  "key1": "2dcjnBtPCTMXSz8pLJE98LKuZfj9iZ6BrTRDshBXZNUEjrQjVfR3xp5LMKyTgYtjTDrArKJaqTKtJaFwB7KmVnks",
  "key2": "53gpVSbdyCrYEwpoKJip5cBgLz8ALETURgYhCFscTVvKBUHePYMutTytYMZhnNZDjVhiGGPqdXwumdtnte3DCdra",
  "key3": "3bw853vE4E8b3cQRuoR2S9j4bRsym7RxQExJuopHNZTxMgUePdVJ4ShhcpzUyRrhj8vi2UANDQBAEXHK5gEa9qVy",
  "key4": "57VbJTXV2senhJsPwShyvsh8w3kTjoqX7dkUEoVx97eyfrYNAfUh8CEYGqLowHt86g9cyzvAjWmoPrgnmNHu9A1V",
  "key5": "qgoeikK5KT1L2ghxJtA4m23SaGNXY6NZh5iGHrBFv9QCJAKCyZ4iebnfD5Y4vKeAVy63zRs3xvm4TxjHUzt2iiH",
  "key6": "nA3oPax1UmB4GQTbMAsFPhxMrtiJVGsD7FpdSKrXG4WpFJxbFb3i9FKdhqsmXMCzXBov3uhvqzXHXxaeEBrwgBi",
  "key7": "27epsZnZjomT7up2s4EoeH4NExNHxaL3woWE9K3HiBTnnhUw9eQH3v38iJ32QW1xwfbgJi4aag2SaMtGgzzh6K6b",
  "key8": "4BCNa2n2ogitxhqqZsZ7YYhjTP6deDJ3QcXkSVo28QNfNvMPERsC7Z3w9DfnSPYJAYNa3o7bRCRXckqVApNPGrME",
  "key9": "5EuKa9zvpmibTYNXJv6LoSaL3fAAcpL39Pght8ERqRYK8C2mcUyJTBC9HbWcxHrjmZhsACsN8BZH17SMazKWmdYM",
  "key10": "227LjnPZSeGaZMPF3G8oybiahoyj8CTZeqyD3GuWGezfjLa16BHGPkYgZVFQfGMwEgCVXQAAce7opxKxzwo49o3c",
  "key11": "43tK4trDPDC6ScPoD5pGQ7gGYMn5PfVbqFJxsfN26utk98Q9rrCexuPMUuTh2id53UgvDx5QABhsZqa3ptYNGt5i",
  "key12": "46is5j51UpshhkHerGQmd3JR7AcojwqLXuhhMjCjL74u52VdiESAGAsZaQKQ96VSo91A3xb9L4x2bASdMPkE6Cpm",
  "key13": "37PK5migQ4J31B5trBYXWRh15TPZAURs1D68cgfMhTsXDpWG6cS4iXAa669QyQuayCMMdJomNjsQt6zamvsrvUx9",
  "key14": "qu9CnvUHSFjubC4MFb3LvUTvbUrZZHtYPeKESb22XkVdmEJt2qRL7oWeUtcE7EqFsQN88DRYeXUTa2fjaZMU9WJ",
  "key15": "KqSr4LTqqHqf28Lax1JFqhczw2w2eEKpjeHgvDjZDXGtZDJ3S2J5ESLtmhycRMAy75zVqy63aJNvQVW5rmWkvia",
  "key16": "2TsWoZf1cQpXS5G4dLvjDbrYpE6XTewrxGGKa8Z9ryCsXSzR6qPpXTtVvTf4H3jeypT3BbCoDcBQoR8n1j7cBn8q",
  "key17": "41PXtw1gFaZun7fnyHb5id7j9fiLR3Dxwv2tSb4bGiXmGKdkiF1WaS1fpsE3hfVJPz4mxxjaNCnP5Br7iDkxX1gt",
  "key18": "CQ3av3tvHFLP6es3vEtpM3qbhtZdWCTa7ukeo3wQ6esfqQVzuJmU58xNFTtfm43JhTsMgsHeVmyu1M9eWWJqEmy",
  "key19": "XYVBffsUJUqL5c2KUGxXVkLFWeghG2XbNCyB2nGwB4auo6JJeYmhuVc7gfC8tdDqFD3vQHFHDV5bCKSjjZpPhQy",
  "key20": "5QqNuRQJ5Hy1ug5XsmZveyofxARTDUFxr8eCyZVJ4jYsvWB3G2PTf9t74eBF7QYpWbHtszurEy7zJdz3DfsHS5HF",
  "key21": "53QGuAjQywEpZzpghsTsG6akaRgBjLvQXc7tJDBXcaEKofeo7nqqApfosGphqwXo8CFQN2xdq5ofoLPFy5knTkK2",
  "key22": "2CsdHyYm3DZTygfSZcZvtWK3DYTHZF81RxX9mwECwWLJdxB1TZ14SxuDjRbEn8SrHSKHxxAAC3fLnZYtiYcyTXLc",
  "key23": "4MAGLDH9Ww4uKbfnDunUsMde4oQ7nmFbFu8iuPt4RjcDLa2z8tC8DeHMsRoyQR9ACHMxyjjbaR8fzBVwv996wajJ",
  "key24": "K2fTxXLgwWULniWNyYqaDRyHSGiUpQTnXeKw451QkUM4iwXB8uWBfkbXi25dJvRBkRKZ6q9La6fBgEj7yyQvE7w",
  "key25": "3m7s8CdQvSjnAePpvjyEUyi9SKxhiQqUHgKWqTTbXRPAJgBnTomqFSv2X1xiNgshsY2ak3cogF45tqX4cnZYAeJ8",
  "key26": "5kvq9gpYqZb9ppuWo1wdgCJCsQcfHABA3fCrQQPGKrTVgoCEYCWY5FXMJBaTKWZRA9A9jTRiVjMYpCypC1MwFWHu",
  "key27": "4pzejM3ptck7kj9LqCGDtJTbUgsMBAmWqsimMtJjFbdCvg8DsSAYf7KCNF5TH3Rsx18LZZjeZLXAe5k3DA3RgDJN",
  "key28": "2AYaFbYrbSXKxXGexJgpTFkamKEty7TqTmzcAcD7MkDSpFcdSvebDrxurqzR7jRLJ6eGdgd1X3HLpZqWzFHhwUQU"
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
