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
    "5M4z9AWZLCsRHMvTmo2L9DYYouxnKY2wZhfDvvdtaw16ae2LnFaBFXgQ39Xowtt1gko8NwkaGvKpVR5DPAJZ8KGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bE8WGUGGYwpPnnoNPr28bwNHeXpibwsYDb99f5WadNnyooEXg68zeHNscoRxzgWTbU2JRgCku4kWpMjWmt1DH1z",
  "key1": "48riUovqLuaxT19MX5koWNpwNbsuxEuBQTJry957wT7BSrPd8TdfCW7ukSFUcCz8hd5TBzBXXaTJEVGu8U7nBWY1",
  "key2": "25Zx4AZR7BLg3Q5FWJaP5qRSuaaj2UL9WMcMGn8YNoCjGwxfJDUVwwogiQ7cq7i1gTmBZXQRgGh3gSqGWMNoSazL",
  "key3": "59468zHBg3HXDwx3gnEMjTVwJVMidJCyz1NxPKFKGvs6rU1jqVTiC2gw41zZvuzCNAJM63pX6odViGZEETFpNH3d",
  "key4": "4vgiTiJs2H9MuVxv913z7PcfgBGH9S4XjzKvzuUbUva2gKNPh6k6fJhpZj6KRmpdSifhPwKEtVU1TP6bcEsZRjGi",
  "key5": "31bD7Tvg8o8MtB4vsnZNbnFtKEgywfZTBtC82M4Cux66vjTdFXjHo3dRC9VuHzJunGWBBwgs6h5RrZLTqiXQ4wZ5",
  "key6": "4npUmgQg9tqaeqSJXufiXibcCZvGtvKrs1MZZoeFynLEbkwo1bHAiHriZeGgytvf7nHPZSe63N6xSWUYtTpV2FNE",
  "key7": "5nWuh6A1wD1JxHw4HP4HfLE6UQpgwkcA9XMTZbdzQ3jNK3Zky9rzBEJ4tJRiWC4UnRKS5F5UM23XieVqyDEmD5Td",
  "key8": "37Mxn7BR8wwppWdVWLDGwygV9P6GAGBzkB9oyj4wZ5qeyNdwBW1fTKhB8tEkQNxafTjwhadwSH6Dx8BVrChAjmaY",
  "key9": "wi7rfht4s2LE4cPoxMFCjVYGrfnsuoS6yZLe2Qqd4vG8HbdhCZZoaYWfE1CVS93GCn2Mzoq3UZongtTEq4JaZNy",
  "key10": "ALA9wNFoNQJrqxPnsP9s4hJRGLbVBmkDzmSkL5z4Sm7GRDuMRHBQPyurv8271db7ubGuQNNdnDk5cyq2hcyFiW8",
  "key11": "32ZFMorFPnKyoEFATwyfsvwpcgi3VGgZ3RtDdAvpbLbDRWmjB5Wy83rdrpsq8xTdCLCZTT1A4ET4nJm4oQk8T13c",
  "key12": "4fqZY9dT92Rc1GumgtjmCfCds718NJjgJHQqMjXyVtchE1AHhCEQGQcFotmb9euARMCqjmMg1JiCM6FGEcyyXtWD",
  "key13": "VENRVHixEf71aEwG3zHvQB1VNXdxMvioPd9dCeCi9yiE7ikxperFQktiQBATgSpkFpjCLAzxNhZRs74bjvopVjV",
  "key14": "4qNHwEjMuoSEwicBboF7NrasLX5cc47iDuwQHAVTmzmprJMfBQ9V8HNbcWzTzsxYUmFjB1WrgxEmKXWmkGKg9iJa",
  "key15": "KWtBWEowkYv6sscFuEpH5DJGsTKiGqNPz1H8Dn3XM2NZXJTTzwxpPpvV6Dth11Dx1zNncQFWeKqiXBrASafuRS9",
  "key16": "2FyKqH4BQVaRZCzSmwS1SBK3os8w1UtYdPTUMi23a4jtJ98RGwMFpL3wRbGh24FqbTSntDVh2kkkRqweXyC9agx8",
  "key17": "44vTnDnHsjMZbnavzm4KFActxH5jbphXzEm9eKgosMnX5KvprLaEVFxJkfjdFD6LeKeMdgHXQs8WPW2r4gLzzwTQ",
  "key18": "r7DJk7mnwgK9ctPNy8XmF2zx6ddwyae6pk1mgEMvu4v4enG36dMmmSY2NE5CrqYgFFDBd2dNoNKrHq7qGB4oSHW",
  "key19": "hH46GeVHgmoCsj5AQ889KcXhkXDiSKat1dqyJvGvU7rq7jQLZWkNBz8MuAn3cNCg6YQ4GZiYMhQkyQS9eFKszPK",
  "key20": "5FWwGpdKWxBFQHWBF9hqr1HP2MKCoVUKXiRqt8ysYpVhdrd3BnyA4Fz4UFUQJbtmVod5dKPHryK7RRdxHWxrA4Yq",
  "key21": "34ohA6JZm46Wag8cyPLJqobPph7qc1rfY4mpgrsm2qXHa9CdjwMknyckuVU5NoxMmZ4H16dPoS2QNY7NzCcVABDE",
  "key22": "3Cqzq9M8R5Am1igLqD3KrKB5B5mBmaJsx33wuZWyvAJHjE6Ky979dDC4WKkxHDK68J9G1pRccDqbrmU3eg3N1hRz",
  "key23": "Wt99g2EgQDj9RMWgGKebEK5Wo6cr269Note7zZGtgtDWiQsFdHPy9Tk7vMZ6Gc6JoPsztmmRKqRHJKQ54Jw9p7b",
  "key24": "2x34Q3GAbGRF81NZzF6NGFhtDQMZNV7cFgRaakoGndhmhJrGrCR82jUxeCRm78jBV54BrgSqdhUXHynoQuT5VVWD"
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
