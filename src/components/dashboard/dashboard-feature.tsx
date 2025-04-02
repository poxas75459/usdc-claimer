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
    "4dSwFUwzH65um1aczpoJEYAydsTmmkBk4y1X77MeC47CVoUmtk3cCALVFphuUCb5aTi9pWcD9d9siuraKxegUC1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABLNQdeEnVMmJxFKYUT5BNkkYXcRmRchxco7uTmrC4pLmoR5DT9BfYwygWnXQKkN7xHzWV2dvKo8QAk77bAJcuG",
  "key1": "UgUMVZPb6qq7mz5aHCv1Cmi2rmkWCm3Fnb6bXYGEwwuaAg9ZP1Z89S4fQhwhhiqQ9wmfKLuQhqKqHG5uVniidSm",
  "key2": "4KeA9azcjVqdzqXUPzPL4dmyeDCxtSFpX37apkKWEHygbM7Q2Vxm2oSt5bEwg58T4e8F33nk6Q5WkT3UDLWoTSvU",
  "key3": "Tp7B1L3oyKuFA9Sf2TfDby4jbo7Wn7VBRKhrnrC4VWZXnZKkVKEMcHdJQFtsrfrQBxQvYEKnbFyXMyNtdW5uTT9",
  "key4": "nhDECndpT5pLnNP8DgXbM25pVwXdGnNsZW96BQQw5CEorySwmMHPjLq5FhFuWRsf78wFVmfJ8VsHcn735inpyMc",
  "key5": "4LeHF9qAWmnfX9vUPh41ZPVdLM2huuho6Kb767CRsCtcdX4bGkAx3z3TXpt5N8vfLWBsRN1sY99zTU9B4tEEmrpJ",
  "key6": "2dhpEvTdeJqwZALRs9jz3idBiE5QUZY3k5TSnSvmEPY8vxLBwB2WSPigmyixvw3mCJVeRsiD3BL7QRcv1tCcBKy5",
  "key7": "3m9bqbF5F3upHRvkVhVCcWR4f6yrKW3YoTXGdjCgKmYdmuMEcQc4BUJj7pE4C5EAqUHpLvVnQEzTbFPVLa4nYhdh",
  "key8": "3nikdpS2oA2UpyFwVYrHnWLGDpKF5DYwzHvr1b3tGG9Pe6QMA4DiKCVadmtwv2MiZTaSePih2qPXm8WVGzwwGbs6",
  "key9": "5BzhrC8Y1kmtXknA2w5a4E4UQ5KVGFSQFo4hBQ4N7Dr932ZMYNYqWaCX23BYVMKSWTuWUprRv37vcHHsPdeVmsPb",
  "key10": "4mr5JhtJgoNxbuh5ST2TvBnjHGcqzgWn93WD8kuVKFghpZC5YiBVuHmCHJNDhXE7F7XRnGCZip2ze6RWfrJHZRkj",
  "key11": "4PA6GxkHKxkp2pX8fJff26AGGnVEgSYgrVcahzBbgZ1u1zruPMhm2ftzeRHskXJ5j7shZN2sqJyL4UENiWN8HrXG",
  "key12": "km8TA1QKGmanGdryCXDeLwh4id9YVMC1cVLkouG8iNDAekY86Z4SsN2ftkW6MWN8oRxYNLXKwPoBELjkbAtrZ7q",
  "key13": "2ibRE3wEoYeMxLjwZC1ng9nKNFA3riPxizVr4mvApL8npUMF73gnoanJGekDnGc71yNDBbrREmGQW1sKCdjdntqm",
  "key14": "gzpzWWY7ev4gdYz4rdrnGaeTychkMtqGPuTg6vnunKQ4H56AX6QQG8VyBKvVqCHezFyckbSsF2eSFkd5keFxUvE",
  "key15": "2e8JoX52NMwyN4TK9VYNceqC465yewQzM2FHFMUgwhZqASZzLWzuGCzQZNryw4kze9rMThDEuJox7sfwRJSPybZH",
  "key16": "mGBGPKRpGFaW7a9iG8pmGodHjr1D52m8m1S4KaFZVdVRbsyniDQ6U7gh4RMBkTdGaafVmvboL7g6UnSsMtrP7YN",
  "key17": "4KJqnyVi4FBYdpvaDrj13MU2frR2K1QBgvUFP2mDCpxHDRGvXmM8VJT1KpyqA9SJ64j9Ae3py3NGayKJMJBUvcru",
  "key18": "4Q1fhPEK1SznL2e8TgiHTVHH5pf7VpjhPBswVdzGYzS727GqEb8NDdh2h5E79eSNd35gg5HtF6QTLc53mmKLr2PW",
  "key19": "3iiYX9A2gy3CguwVck8ztnjFcj5sGE4xZ3Q7c8V3ZDLGDb5BS2UUZkQG432mDCNapoHXuSymaVNByJCWSkdGmWXJ",
  "key20": "A2vQyNKuSd8NPGhrge14NNHsF5RFfFbvh3rdpyJBPFcaZC94CuuPQYDEP7sTy1gth8kSF7iCY7zukfwN4UMpmGm",
  "key21": "46YuvDaUDpMARPAoRwjsnPWhFsuZ3gqCDhWR6xeD7PGNwgLJkPZPtQ6RgQYgQrxteBQNvek9WzSaKgAyEVBoSyPu",
  "key22": "rdRmoHtQLFFPKRaSYnQKgK6u3rVMp6JBtgkvEUUuSvVWkLTp3SEKaryXo6DNmPYGJ8S7jKCAiEe4cfwmkAf8D8a",
  "key23": "5tm1sbTLigvMPWuCC6s24XemGX2yCME5z53v6Uekfo8Zr61w25TiNFmA8WxJCuqh4viS5K3DBYKWuHpPrZXNRyAU",
  "key24": "3cX2W7GdSXNe3B9Cf7pXDyn2VmEmyw6bnQn26hDQ6KEqx4C7GAVEKuBVrfJ4kchoqLbkpoRpwboQssyips6sHBFE",
  "key25": "4JretYX3jbzZXYAm7BxrLJa3BKwWqFdKvj1utaTWmzeZy311rmV4i72zw4tG8MAzXVZd6Q4PJteX4xVBZ74om7Tk",
  "key26": "5YQebErsdM6ia1gb3LNdLQfz7ZDYUH8AdJJX7YTcnK9HRxFNs2cKUhnN3wMgBCY4ciz6Lyhs2eNaEZqew63pz1M5",
  "key27": "4TppyGew27SKg69WbYodFP2PsgXyLAXpTnkkA7iv4EZBgFd683FR3kZiD1skSWAhDwztQYJH9uwZ3SW6ga7zMgGQ",
  "key28": "52HCJUkyGh3dsYuc6Kd5i7NnoaKcgzGzzG6krKoRCKsVzGxptzHha4QBvZvqM6PdgddfUNSVAHGp8Gwv45YZ6v7W",
  "key29": "3TM3g8uMwLV4feZwcZJmYD3FEvqZXgoH1jg53mAJYwPcy66TiRU5tiGc2VUgzMfSspfQhT4pZnaRCXb9SLth5jrh",
  "key30": "5zhbfciX5s69MzAkbEM25jSgoeGj3WXSX5uB9chbXRVipCktWay88ZWiATYxbaca7HjmPj7wneee9oBWwTYj8B11",
  "key31": "5DGHiG7uopq9bLTAdVFDeB92N2aZFeM2fZhwvptk5Jpy5zbioHshU94DpjePv6c7beEBuRh7z3XR3fdU7Cx7QUe5"
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
