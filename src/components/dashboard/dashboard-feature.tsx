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
    "2JTFFAfntMx1xd9wdgA1SMs9LpTCm4ytHFWHT63qfPTx1YzatdzFwq4JvSGBCb1BxwWPT6FeyjX75NrEZBasp64z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459RUDa7jxAsUzHhjqPfwsBggFeucFFEvEfmHZpwNDDi88MXVZTUy5ehdsjYbZDNnQo2rh4SHBGXJDjPVjkSw4yQ",
  "key1": "5r33BGi78aXyeQ9T8NESpgHXjxm2eMqk5wiq8zDCohkhYEXGv9izYkLCx9dXxR5gEpaq4EyZCEsoMXagERGaA3tV",
  "key2": "2wE7irSdmbEh3LpvUhCGsdB7xUNXTDDAJKyx74AyqLaZ58XaYnNzKKzMQmBCxqbzKGonqTKJKapd7vrE8oTSh5ds",
  "key3": "64mpXAU3gBSiYqj77tuohJJGAy5nwxx5PCjiMK7if1EwavyZ24VdSuGLRfWYHQchFPEaJhBgK1vEsb9hGqQptsTP",
  "key4": "5b9ymRmX4hXnsWWsjo2LYFhYTvw9zz5NFs5KtYxFJtrVf7oEQuCFgXDQDwA63k2LM3UgZTjE3FJwMJgzZJD8DbsC",
  "key5": "2jX4WdYayEcCSqsxMWe9inYtHCL81aSnf1xXf4WXbRjDW8YGVk7bF2AoWumGx6dFx29a1vSNjhx8HcobLyGefHTJ",
  "key6": "44sEh5DbjP1XPqFKQEqA7Vy3UGTwLor5ZuNzvtRfNTUhuwQXaBDpi7No5jC6tX9VVBHVJMAHGKFwtieEDorWPEZC",
  "key7": "5vcWQ94mdAJMCf4qXXcgmP6K1CaW337GWDowApMyiFso9RNsmMMmfaqyWYAR2f5AsrqAkaaxpfa6kAvrjEP8BrDm",
  "key8": "4ms2oJAAJSEcSNZhD1Chcdfx88Lr8sEoA9V73KvGAATcJp67EzJZnvbjGMKAVMhZqiEuAR3yjFmWWkGfnoD2CBSC",
  "key9": "24T6DbLEzj8DhAM9n75QJ1zDkXCJQXcoBYdMTBqZTi9JzDUJBkZMAaod1nyL3EXUf26MowRF98VNkRZhsVegw49t",
  "key10": "5gnUriHoLoABjqcgMKvALJV28ksCioJ3bh4T3Zb8DaBDdAfX2qxAehX74dzjw3ovyLQ4ubkNbEC1SeJv2NPuShLP",
  "key11": "2qaNZxZeb4AzUu2CREoPLMUH4fG8nw8urc8rNa97HSYhQd1zgzCkkmnC1E7CzxMudrPUjPFKtvbTwyQs3MzC5LHA",
  "key12": "6Zqd2d5vMcv3tZsiKh8iXTVfiaZLHZEURVVvXo88qy4g2gcXGNVoccdf58tbM37cAKmskwim9QR7yvC1xNv7kWT",
  "key13": "62nSVShd7f1CRdGQnLM1kiYkiHVE2w7SyR5D6MfVRuvQCnvaJ5AQGRKiNq8aGLWQs336xvdh7Bts5S37Sk21tGjW",
  "key14": "4xHoHm38Xu7b4nT96LddPhmfPhpaZn6SGiSrsT8749feiNTKy2em7QBGftnUjCcpCRQfKoJpavChPS48aMu9gGdB",
  "key15": "WWhSWpZarZ6gBpQtZLwpmqofhiHXzqUaZVefMXLagsCyZ2iT7BoXkH1rwf2o2vnRR5woj8S1AGP626Aagkq796z",
  "key16": "78G61sMVQ2fH36McnTXmBumQBcntA5qVCVuDE6SPciC7P654FUdwCdNv5cAL8oR3nqAEh4x1GdtXCdU8ZCqm5B3",
  "key17": "3skqJiHNfPdwJbLUZLkk9CNa6AwfmGeomm61WxMh12zA9KhwZjL3u5DiCWfTRBQPSj1Y55opun5RL54Dvp9Gj8yv",
  "key18": "54DceCmhmtaPzQicrDpBp87rPgwQ3RcJSMVkbpEySH4wry2Astodk1GojrVia9GTVbzG2qjiE5GpiHZGSszvxyKR",
  "key19": "3ZgPmf1sfMQDD5oGmnz5Mh7bwEpD5iyaa8RZUuNqgtExBjRACMroyFF8f67nX5SvZDL71kHoAUzZQabtQJRghF8U",
  "key20": "2pB7QujYa4ggw15UMC81skzujKkY2WARPUmDUh6beRhLUbxCFXbDMTDuxq8rTxDG8qDVyLvg5uDhinuPsR6wwgCb",
  "key21": "5HPBnkr22VcZkUspazFb2Q9F9h9aL9yBRWANdJvBSyB2RJ76Q8bZ3r7XwSubTHR2iyaBSPKx2u5mEJn8mbCPcGJN",
  "key22": "P3X4VnWXpqRs12oCUi2ghDLf3jgtmY5NsvR3E9wRxDaj4HXihZqsmiaDbb32TUtmj7dZbL2mSyXGJznE5Ypuwi9",
  "key23": "32cfk7ZBL6Ydi16hMt4poPEr5FoMhgvs7cZ7yVUU5rcYAgK5EDCEE2QUim6DrR387AgDdQbfiKaRUH1UVdWwZg41",
  "key24": "2w59s4YhSL7kX6NcS5o6dtbTw5dyrGCKbtPhPm28HpWGW8LJhpijFP7EL78gE2jpvpuUC7eVUkKScEDVJp4xuPix",
  "key25": "353j6nGWZhFw4ChMwX9LgaTyDDbJq7Tv7yKiLnwHLmZ6wtGfegrVKyVTye3VpcvXMiZDGJchqHsB8jx7ZmdstE6f"
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
