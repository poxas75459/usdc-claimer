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
    "31x4dv9GEvFdEEeR8cvvZgNVGrwGHDbDro18fUd9eQUR7v26eyHHPadB1J1YqobJwqMKfs7oKETv6zpA4DhPYknm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBkeuXTGJermS9ihuAyXvRvtp54L3isn3vGSE9JwXZuaS39wwWLRzJiFvGQfaSC8MySj3aoeJeRwdCDf61Tsm5m",
  "key1": "3u5p4SwEx1Qkh5LXTbXv9y9vcBA79Re8tcrE8RC7VKpt3soE1qJkb1XuWPgY1WhmZHUAb5SW1nBxoaJ4x3A3SkPw",
  "key2": "U8HRBCJizk5YtDrDkWH9qC7oiNxXzk9wEbTRww5jWvmnNYhLcQfxgac1EPveoVwuKayK7BHyYPUie45CMiPZHV7",
  "key3": "3pCgKDTEuGPfbeTVjTXawDmLBCjzhgU3D8LKmHjYWKKoNZFT5ATzKBobhQcEgCRrfGn8XSAJMgzLY28gQ1wyKUnp",
  "key4": "2vBwXHvaCYvDJZAWpR3mRima4SxrxWeea8nSBeV8PsHozL6t6DmdyFqeE5kHTxyQ8Xj9wxbAdZD9V1NfgZTf5q2Z",
  "key5": "4saSgs7kjZFQmLgz3qUpAGxrPECu76iVxAjSjd7nf4i7auV4jEdXYNWMaxGqheY1iKyC51T48bKu1Fvpoy51gGrK",
  "key6": "2xi7wei7iR54ZryeCcFFRWLpwKS3doPDNcvigaeXd9Hd81vJpKJwZg9RbNKVNGVnQ3xyTgZdroPcLxUXuZg12kU4",
  "key7": "3MSfe4LXJotCwHLZnSrcZ3fx81QmuYxnE7EL8uBJSv1nyP9Ej2NXyavRvpBtCLyJfqhjgLdnUd4a27puTwGss8zs",
  "key8": "2wAx7XvTxowo7kVBK2AEMc3ccxYWV9zxGDZKrx1qUGoEMCun2NxG8UwVD3Higivn3RHjzzqVuoAy1DSVuUWRJqsp",
  "key9": "5Urg622hi1XS5zH2PZHeufNcSjr3jygQAvYDBQyYvwpbLnmfwHyHuJ4jqrJbx5Y2peEU2kFmTF8SMLbx4KLfqCit",
  "key10": "3saWNkC3qL3trfURiF3NEphng81wzZZMvVWqKh2UZzKpBZfpSp8q5j1S4L5qmsteVmYk48xQQhEY7xKpZakm35Rr",
  "key11": "4mo4yKvrAFbXC2VDDv6FXKNWDdwSBAMMYiGE5NAs22YzU9kn3rmBTGEZKG2jEtHUvxsE9RuTyU3Zp8YGoT1hB7f3",
  "key12": "5J4qyTdVv2WFJsHcX1VHXWaTB9ScKm82LV9ZXXjkfZVG2bRQyHr2GEWJkUgi5WiSAzLrNsZ5nJqUkCQivwv2nBfq",
  "key13": "3BfPiYcwjq2tfyqRaitz3QNkVXrg4G9maMrgj4daLukLbqTbwLhkYKWxu2r6n56nib5HzMH5DMqJVP7Gen3UX1Go",
  "key14": "3zXsGcJYHxw5kt2TmZpEvkKVRsQUr3RGwpaaJhkR6ciPjbPApLz6mQ1HD2MzShywvpKsopASaB4wdoTGDoXeTcJh",
  "key15": "4kJQFULvGGu32YgyQ9gWrwrh4Xm2FG36M69qLhkNyCZCXounke2JRKYDm3EzkewF2ymrdMkAGQLNR4hnr6cx4s8Q",
  "key16": "Hnkg9mGahvgG4R2q81sTFkriUpxZKj7Gv4NUAxewdarpAeVqouLgsJDwMmhUZ5bhA6WNSihvqZUVFLdEJJjPeNK",
  "key17": "e8EycCRuYpCfBG3uJQ3w8xEUVg8FqJ2bgnbzhgsAKs1n4caVfEpPgYw5LbhW3nnuvptR3bRn9eWNnHYD2aY2jFS",
  "key18": "2FUZkgbFNa4EZ2AkSecB9LbQofy8uGg3DFofmZCobQpA4u9EHDXHxee6vJTcB6sgpftbmDDkwhBkLjEc6bapwFk2",
  "key19": "57mdAzsciNiC7SLJBHCYhjRFhsigTTBMpAj3gt4rQ64ZxE58xjGobSw7nURmv2sPTnZRWZquMv8aWjyw6ZtAngAe",
  "key20": "3ywFgk8S3MJXgfaQozbAWKbEu6p6VqzCKb1dR21Ff1g5JU3DJq8q8pAY3DeLidaSyf9PJ6kR8L28VhYatiNThqDG",
  "key21": "5hKMW2MTVc4Jic9E1JGvdLiH7gXqiCxMgrMqGX6JH15bpkZwziSETXASrox2zdfhQHkmeKj9ptpYe3vdMwpxMChZ",
  "key22": "2kCWhBSpn6wz7g928oNnoM918TYNs2ER8X1poo33HT9KJemcSubPnezYEmrSinHdTXYhw2Xnq2nzvum4QUkRBnQw",
  "key23": "2pPh4EHUv2YZLSo5PgUfjLVwfXMRecuYKY31jbXehhnXPMaMgHbMU4cR7UiUCuFDxoLxdw9QozjgD9TskrXsiWcN",
  "key24": "rLcGprByGNJD45Ej2x5SFs8aGLMMBUaRSEWNy2NxWZoejycLi5LoZj5LcnD13siSKnfrpN5wUGz92n5M4GX8kMK",
  "key25": "5DsCiS9L4SRHXHuYSL4PePPeo3ZfzvUtz8HQSxFXQzcWFMWewqSnekEmHsWkLpyvadFK9GFnG8WYfEeCNNQwmkYg",
  "key26": "zKXQ5ditkXTdahGQvXLU9kNAcVG2QYqGYvavfyZmg9Zfx5DNSsgM9wAM5z2i3M7V2cWZP9mZ9jwrMGh8yL9qYXB"
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
