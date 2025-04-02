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
    "4SA21bKdoyqGmoQFtX4CM9JdhKFJPYb6785EurVA9h8Qniy4Gz2k8TvXGwLsEJoifb2wJukhVBNi9vR6MpVq1tzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFHx1NEGz3R5YXqNg9krffqwcm8tkR5VFUTbubbjq229BnPD2LMMP3ogXTXdXpNCuDifyafo2W3wWgBv2vNqfNp",
  "key1": "ZU9HZdfEuTtQqLmm98Xku3z58VbYM2huzSvXLCBJeZcDhWf8rEq3DpkFeSym8BCRukVWN5FoNrSbz7KhfY2vrVd",
  "key2": "5e65KEyWcV9KayAFQHYJiHjBL43KzqzTeQiiT8UVNuzwKuqLzdKSj2vxFXqfJ8Tw73SsdCLeWUTo1DVboqTCKAY6",
  "key3": "xiWCRJPdV4FGuo8GdFCnP4neNrZBaxZrGn57DZ2J791GqGnNYw2Z6R8dykfEkG4t7qGFwqGX93Mxw9KaABQetD1",
  "key4": "2cbP6yCnKBxLW1DRHsMvAoJ8nopYF6VcudTnSefwZwirXk2qcJGNudLaWFVmqbLhnLBmMLxrSoKwFxtC9Ehph5NB",
  "key5": "5kJJaaxyCcMrvYTZ94sRGHbFQhcj6GV7Z4oyVP8HpymsQsVRfFyZCqgGu3Vyq4CW8zYBdm1arZVLs8TpD2dH8e9z",
  "key6": "28xrsNmy7Lcb9krCFEP5edbbfceRNWfV91Hzk169EJRjrRHaeReNzR8UpdSKXR5f3qcpRLED26c67AeYgkMWcvon",
  "key7": "27U3YjxqScCijqqY6aGZngHvyC3m99Fkm1kN4nFFtFUecY5919HYvApATdZoTXJhRqissbnCgWVdNWUYo53nK6F3",
  "key8": "66CV9gWfD649WY9WUEP1YC3E2453wnLcEkkmmec9LUoNiEqffq81y9sFBoEX7HcTSXjcTinLBSTbNmq2671vd8tY",
  "key9": "3oEf6oFznRGRMJQhGZP4ZwhFxHT19wHz2aTyzxvaNspJ97we8yJJPNJHgvXwkbNyxUMFHh2CYHRG1ViDnZzA2Mrx",
  "key10": "3JVozBcYcjHsyNAuwzkeBsvf9nruyEkitz7J5J6hWBRMiko81RMobZqRDqQEFXcJLC6wb3nSGwR2qevYMENdK5ic",
  "key11": "46xW286sE4JVGFncujCArvquzNf34eny8nod8vYopfTHfjcSJZJJcbccaNSEXiGsLdK2c5ddJ7JiL7bBrwp2jfRj",
  "key12": "3XCcxgFvpjoYdKAjpiVDoNXz2oFbdv5GBDd5r57brgZJMfJfaKw1WC55LmzoxcqbrLsZ6HsW35BfjzLQqMJQSuJE",
  "key13": "5vcjt5deCZRWxFstxv3fk7DDPgo57Vkpaub85PrtCCNzYa7Z6C3xiG3wfmfN867NBC7rrdLgn5Bg3MvaFsSPGE2q",
  "key14": "5Eg8sAbB5SsoYUc5ViHfBwMdkzt6v2y1mXCRVL66Ey63th9vU77dBk3X1wp3tmWqhg8be6zVggZBdvDsGWbHYLYP",
  "key15": "4qWRMt9BZ95MvnShWJUV8ezR6h3MkDTbcgya8GADzrhJQCvgi7vShYqEUkAmRJ6zxbPENeTz1hFuZ1ywcuTB1kzC",
  "key16": "5mqfzThFrBnxqMwRBycanXaHdei6oA7QYvndXfCjBreexRwc85g2YqDWqHq6ES2JgEc4SbeAqrb7txx1rfkyTNDS",
  "key17": "4D3Q6KW8CtjTs57x1C3NYLotHgD15j31dpnE9TcLgYSKhnJQ6k6mPPBPtzXwZPHUGGWqW6SPAZUUBAYvQSzRLK9P",
  "key18": "3ZMcSW4KUAutnaLmfn6RPo27UEgSAo6sYoWCPpTdQ8X2TE5kTrJB7phrRizxuKttJfUPpSMy1w1tiJR1zbuYR7zq",
  "key19": "BaMGZBx8jVNZA8RLC4RZsYpdrbq57hvDsZzPAuobKXiJsGhzW8Hj36gi5Sce2PHpzzYesEkgdUZC5HvsuLYHQbz",
  "key20": "4nVNiYQrq7pf3qyxaWpdMjBcGAve4YkMkyAnMC9QmmuGdZX1aopMi8grYJ9aa2rnMFY2xrg856F6yviU8FZ51EAU",
  "key21": "4r7CDRAS6CsPL5ySzmHh7zKbpLxy3DJYZHN27TViWqQtxtdyn5KdJnCZ1vkRH9cdThvwPv5PrZp4StpqeSg7nYkE",
  "key22": "2c3f3FS5qMb1cieDkQ8Fiks2TpTPUhfxPxNNfdB9YBKwc25cEvPs2BXYwKbRQd6SxpNh5WTnk6qLkevY283VW799",
  "key23": "55De7xZRADqfwYf321r2gRBcdJuP9ZGaaHXYPuWwyGehuNDCWWp5dykzbSXPD8RoPTykrqBoTwYBeRFxgHxpbL8k",
  "key24": "4N6WHNL93nB1tX4SFxHxqC7hynJdfkwpjwn8f5uLaE5w7JQ4vA7CDpeFdZ7ykXx7H49PqMDf7eKFeuiuYDLEkkEF",
  "key25": "BW55bGQVXWmcpzCNJycgNiG8BD9iQsY8Xd4LLVpNqfcsYL7f9LQf34VQ68PwZbjXGC11LVXbSok3LRVpzEC9uqn",
  "key26": "5HpLif6z9i5M9Y3tsjorh4TCJmivYbbjAmCgWLVZqf5veUFNNtmYZ7PUb4SsRBaE8hJmMQtPVYUjo3b52rjRWw2M",
  "key27": "2NSkHLoFYnRjCig82QSExhjs8TwPPnhHinwoqz7HtbwKRNo9sAHhEZozg9mJ5tDVFst6A3ptLS6j92oAkMbp9ttJ",
  "key28": "5BjCsnvBTmMzCAS9oUDm23PfDd15zGrPh6RJzXGpkeTbcS3hjPDC4ttLKubABXjUnEXB82GKT8gB7PKSF4J379Pu",
  "key29": "61rFSaxrVJTNx9Z4u5V2eTjy95j2YGzZahcU4AXUNzWrsgpSj38F4RhZh4SMw9yCsPjYNBomugFDn8tenm3o2F73",
  "key30": "HVC2jowDytFzeWfCucv2N96RvvCxKVVKADGiDhdu7mYhdKZrFpUC6RZ5h3yDDUR9fYkBUVJ24oZX8Mew81bdyDB",
  "key31": "49FrjCEprGDX3Yp529cSHP9LBTaLw6ha4L8WtY9miA5P356sfn2T2ekQVP3BHyyaMBHkB3FJ9obB8cHV8vVqG6w2",
  "key32": "GpNbVCdSyks6DMTH9YnyiLzZ6TfxxfTkQtCvF5vAAqPhyffNPd2xh5zvCaeGv9PPJRqWAb8C6uESy3yKKhxfMN3",
  "key33": "2uRQ6gepFkDLNwEx5wni4rfSPZnD5KCtbW4Rt6K8xQ5ckbRRrTSMC46PJDQdSCvvaiKYptuQXLzZ15e7bfR89dB5"
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
