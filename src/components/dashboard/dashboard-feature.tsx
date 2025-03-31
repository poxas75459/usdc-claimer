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
    "2d5JfXx2WoiTuAwLv9PLKpumiEYnnX4NqcCZV86hkgSqXDFsUjqy74zbxgrUVfNF7K8e7d6Ebm6F1iFVxJc6H37r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNK3juZdGcGczzAhzgje6h7jYBCSbka28qCZRpZACC7Mdp3Cm89WYtPJBJZoMJ1QpAabzquZhLTQcaZRZ6m1YgD",
  "key1": "5h2dgwAh7j3dVAe1GgacCd95yV1wGxdUMD9uS8YHgK9eY5Z1S5juC9Hsj7Ndxo7T2DUddvgL7UN5DazKeQrpZszT",
  "key2": "32QzDk3XyyfeBfRJjHVRwwdP3thPjAc9jqCJ6SNaN3dtSD3ey3RpQmwa1V1C92b4vVNF1vM9fofqjhWg4mzdcBZ1",
  "key3": "C9gTLd1QcSz4LfYw6ZWxVDUaS46smea26sb3rSTETQ5FPdmBNARBXhsSbcBE5htfgT9uxb16SXJQ7KQTLmu7hjC",
  "key4": "2SNGxbDgwx5n4SB45UbvFFew9r34YNYnrEn6Kb76WdXXcBu1G8L5HBsZVt1tqnhHr6ZbyQLUSFkNJ4jAjvN87mdV",
  "key5": "4qSe2BNSrWod8gC9TC4wd13u4ovjEkFtUtCaiLk126kaoQ2q7YGicqQ5qiQyrLyVDaumK4QLPDKtUd9qtDx1NeH9",
  "key6": "hx4JtVJZR9ZWPfa3HH9eAsLpWKkbeSZ3yCoJ6CGHQGq9RnRy3GtxYenMxsd9KzdHjqsY53Bnw2TEPd3tkY5UaVn",
  "key7": "5uSYwrWbNHqvK86uLw1mXuJJUNpha16StW6u9U6KKzj6j1cEEeqtFiVBxzTmboLhRqNDtYwNBarYp11zN96L3MPW",
  "key8": "4bRsRoYiyRUPzce1vfDca3FYgFebXwDw6PvXgVgdzcVgyo2DSVa6eMkmTxffEac5VPX64eCPfkKV3vABLZSvJmk8",
  "key9": "3P725XXpzgFqqBpBSYKxMqF2F8hzCfmLLQoGK6FAQnzc4U518H4RQdXQwtnYKw73keHhCi1qWTmq3DZib1EVXktL",
  "key10": "TDN1s6WYu76nhmSUk9qaiC2CPCqrJXjVXhE4iousuw8o2QpRpPQsvuuxizjGaCes1SrVWbBJepzrmWjLz3iDyWv",
  "key11": "ix747QLD92x7DzT3ojjanH5udB5SveBpmzyLHp33dMXj3ntJgMTGGKJai5ZCH3JSLaw2jtP2C8G98fAS3deN9Yk",
  "key12": "2z1Ujg8AyV3qoSQbyaSQ1645empQosrSmPPKiJzoTRuxQ5qAXfqDjU3MeNxQBR6mv4WvaAPgrwWqrKX3kHSqUArU",
  "key13": "3GT89JFL9Rcg3mhAL3Wyi9yBjuNWjetrKswQWCmkURFncDcgoTKDf6ynQyzswVdn7z1gzhVWDHYCMMeNQn1WAUeA",
  "key14": "3n5wqkPeFk2mQEUiydWJHy9AZxq2AX8zExTkkhEvmg8Bn31vNd837gWDSRM5SFp2XFZ9H5jv5rFupMkjcwMgBvmz",
  "key15": "5eJX341r6eh8MrW2r1dnPPfmAFxsPGj3RB3QkhSTHbWam93BcBx45RC1Lp5Vbimps3TTyspFBG4sst3QJc3NqZW8",
  "key16": "4uYcBZvEsJLhcM22Z6i9QkxsKMmNgbFjWePsc2Apgum2gPocxUu5auoxFtyP9EVaDTRWyW3F1J712UPA7fs5DM9x",
  "key17": "5QmWdfmzpuAPnHQK3aNqBUSRJkPHCerZAfv8YWFTKNJ2QB2bUz9PQaxkGWEgZt2sHC4Yea7vTY69vxJdzdwep4Lp",
  "key18": "34jzNJf1W2q3vkYyZEowQARKxZRrPjp4EPi2E5HLqgn2NdNaNgsqNrvtbtzspZbWQ5vK7Vfa7RBsRvUCQDpU6Yf2",
  "key19": "3pzKwexDYRu3Dc2jCRGjJTUp7HJpRUfs3cvKnqiReQWjoEfbxRPnxNBw5pPVykN6oxh97AfoyeQt4VuDYmspjQjj",
  "key20": "2CzPLY1HXmv9j4xKzH5y5Q36sWC7yGaqyvcAGzZJs5SyYM3efGaLMYuDXtVGX2DMbFsZQrV1fCYv8odU2qQXvZ52",
  "key21": "meZFzrciR2yWPG1dK7pDed7k6P2pnvdEY6n6iCt1gSpJu7J7pHzkRXNdFcGK3neFrEAUKCVrND46MV1kMVaoLTL",
  "key22": "2WNStuzB8kN6tAZ1KSPDBRvGJGs6ocmEvZaReeD7ydpuMTWjkinwZwfPZjhqaiRiAwHWVnpJ15Xt9EfNDft55wDd",
  "key23": "3mWZ3jzn7KHmYMDFznxhCWJW5MW26XeUACm3cuUX2MWSwGAaUXrStBPfHeTuFDymA2zxfKTrPdcwWnmKEqQQn8yZ",
  "key24": "5VeFPhJDmZDjJip85D6KhvEczEY64P3nfALAzzs5f2mWsn8oHbYB1uo2z2f2BzPpJeu9PHUgudGoPVUEVBur4LQr"
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
