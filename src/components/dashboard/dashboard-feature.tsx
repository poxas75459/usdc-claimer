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
    "5Gy9JmCYjGvNk5o22tTD2njB2XZmXG4wunB4gKiUZgeviwURZsLtQwXCyjUhQUaNe156CzBu9iueaiiThP4sL2Sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KkMTRXGb53ov3jckWDAf5SqegXZhM2LsyAiWJFFqxcRGo3n1nQJ3hVac8YNozLeWK9x79v3yHwKy1yq6CQvAv5",
  "key1": "5D9tc8MgxCyv5iqTTycVdsHv35NZg3vCJmrjyERvqEaUTavPyJAXqjwNyAdzypyr1FGrigYv6pQNgB8UmJE3yNge",
  "key2": "VteTnvgYNAHVN5p48yVVgNCJgkZ9LPdtCL5qHT8eY811WnmaeSLrf6wwdS5hnLWEUrLxbd8DKinABe2vVs3chny",
  "key3": "hz1waudNTtnKHAtWwBMbmsXLgvqJd81JAKNik1TqBeX6LRHUwvJ3CP6v5npEw9RT4Sq2ik3fR4t39Bjka6BH8Hc",
  "key4": "4uLVUJyx1ZTWUuXrmk75Ktp1WKNorw6g1D7khFJ6JtRBrf1P3FBxu3stbwXo21W6LryVQGAc52F5D3P27fJcZDTs",
  "key5": "3NR9qX1ukX9NLf9TbMzR9icT3NEFJMHWwBPYGv15H6P3dG9KVaoViEeoY4FdWKDedU65b3DpyuuPh7pQPyMk3sRg",
  "key6": "TeW3ypUFARgLHQhCApmUi99iNMLnJSDs2gGf1RDewWMw7rLEkbdfLpyevnzR56HXpE3Zn6UpeRAeJwkzhbfDC7j",
  "key7": "2z6CFvqm4yhVFgyGNvHnk4aBjugSLf9bPBmrG3PoZLDkgd2aNd7aTxx4MjJ8L5ULArBJu21VCju1qXd7JySg6MoD",
  "key8": "4FJApA7dDa77vaLzdskTrJKcL8iDvLCgxpUP8Rh8vHAuADxNGKpA79xrNHS2vtwmpsMgbpVHSDCr41QmQrDkVQDB",
  "key9": "46CSfKnHUxhVgZq7ShSy6s9vXBrFgk2g5zdPGgG2TRnexXs9f9R7JGiHWK6vyei9gKfcpgpPhUKTtJfXh6YJdCyp",
  "key10": "617cPQZYVPRpponMy6imosu7cfXjstbPkRD8oH2ey9cQYcsfzC8mAA6M1QvightpW1wQuqc5yd6vFuzrV9MnkvZz",
  "key11": "4VjpMUrS7T9MyUz64YdTkeJLidPYKdspq2Y5wV3zhJFqMiPbXyVaTVtGgwtCfS896UEjmAgfkQ8CjbrsyfkTpYft",
  "key12": "4j1dBddoL4whS77ijUqYZo3a3DFqWMMVWouUzF13isi7wwQ5XVwSq1PaowixB4LsnFd54GrHhPRUUQYzimH6qbyb",
  "key13": "5dnNGGdVQBsYwp5pWJZG4q94mBEAgX7TkWst4UY7tqwS3wHPAuv7npjCqLYV6os3YMf8madQ5zkWC8ZVZfrVJgBS",
  "key14": "127HWxKUA6Zn4TMwjVyjuLQjLfYXDzaJkZBSSBRXizXdxb2vPs8hwGSN2PMMGiWBP6ZhVDdkqhE3jCbxaPQe3USA",
  "key15": "RtyeJEBmdb2ku2vrX1Zwv7K3WgpiRwUy4z1qthqgd2NFeWYMCXW7f1BMgSoHUWXPzt31NgC9W4pB52HRrNCXdqr",
  "key16": "b3RCuc75wWzo8Zjc4VTWp923ikQecaFoUaCgaFkao7AVC7hTxGwHDN8EwhFqUAatXqyrvAAHKj22JwbjhwmVaWr",
  "key17": "3qDB68Hx4FiFY27Lk7C9vV4jw8BZaosmE4tFLNaPUTSYHKpB1giCS3QNvQHXkyujCnrStvjvihRkhSqwmJRsosvZ",
  "key18": "2BKdahSPQJ9NVkRPQPTUMptPGUvd158RgUX1VmB1RyHC4mcZVhGhd9FuKCMnq9pNnY7UuJSweh2v5RsAZcqxaife",
  "key19": "XzgKjdFdLpeyDUKPX6DHYYu4S7YwvRzYriuaz7EjvipAkRbjHYvEatUS78xbg3LPHe4ovwraJx1hpuueBbntXc5",
  "key20": "4CYcyjnhKUyi6mEdiUuy8KZpTArGfQVLh38XBFUiCntYpMFDJaS5AYr6feraUcq4viD1ktwtFXo1ZmofuYHTiaoy",
  "key21": "5twvVQhVN3JVgd2UgBmwiCr1qyG7XTQf3vqbYGuX9MJrXfoxmAW9yVgVmzMpRRfFrq5Wqw6iHJzxoVUzHCbWF8xb",
  "key22": "DXKhaSeRG4FuwaoD1n1LCn6rGLhgf92dfocF9mQ4KV7sfbxc5wKUYgtChDSaicFSGYqzGNYXKQCvAAisgGhF632",
  "key23": "HFVvsdoVvwfJzsqzz6n5R84vfwEJ9y3PJtC1r7xq9mctg4R2B24362sNBmGRVK5g6e95fKFdL6B5w5FdTnG5pCa",
  "key24": "2UdsE2DjFJwG2S2zFKAQM11Cfud629ohMD8uawioJerQ5URK1zL4iGjy1GdN9fWECsPDaSuVhx4ZTi7FdMQeBXQW",
  "key25": "67MDaD21DpGVYq8d4ePH3zQgDaXgWQWX49XiqQJAJ9DhpM2dxmLaoEJTRsdb98F4Fz1UM77kSVjhURRLE6wrnRY5",
  "key26": "ngyvpzBXr7Xu49LuWZnvzZcy3PbMfNp7DMAzMAsNGvB11FGBRXuuMFh475Gtji1KP6T4TSGTEZ1NGac1YzVzA7V",
  "key27": "Ldf1rth6LGH1Se8JQaBi69erVTiLdq1UR5Kou1iqmeThPbPboqwCr3j7N33VbMtPniVQwuehAQvcPo3AGATU7LD",
  "key28": "5w9CAJMe7ysRLQobuDBRaXx2aneMRKH86BpPpC1ibQjomQD1WXMmmeNCK1fN12jwpnMdHYEfXUbcZfjket5Ea1hy",
  "key29": "4gKbhF5ibF7VkEyBxRgxa2ymbEuE1Ec8a8upyahVTYYBxJ7qK9JhNrQZS26KCLwW3siYg49eYUSQeRgGZq7aZbfG",
  "key30": "413z9zMcx8gVeQbtSZVqxyW5RAGLka75p4srmMcyDs1emdREGQ6Y67kk6UR38oeeREJKkwoctXQUVqrWuAN5GRtH",
  "key31": "5gL6nDAukbXR7K6PKicoYECMvn6MHLK93DspAJe1My1GBdzLGXHYfoiXSCMPC5ykjeJaNVJz4YHoqnKPdjepvXF5",
  "key32": "2vVDfU1yjUzXyzB9ENC9wbkoeQet5MKxdYKKfaBbYqMS7WFu2fiLd6oxhbob6dVuFCA4n9CfMUZuZY6wZTkVL67g",
  "key33": "4pdcsghA4N866FgiZVUicAV4QfnGyVwJjfZoQzhgvw7MrxordtEFqUYoVF49qzasjUJb8VtWU2uuALwrxm41kyRK",
  "key34": "vHmmnF3EHWeFvRd2waFfRc8t4cUgsp6j86k94toMfdE4hyBJSmiSoTtTnUPzXpRUxExFkiAGn74DVfo6AyxyC7i",
  "key35": "2CBkwCJ9CAQ8k4CppyaZfhth19HQsVnovgMtXHuxiBKdFfbtkCD4KwzXeMwjHPAdRqPD1onKu6pTbKyKUuDDYozJ",
  "key36": "2bChRXDSvtJQ32zf9fohSHjNDs6zHXgMCJgmg57JwjwmxeFgxnyQBRQbDdnW78oFtSMbRUAbQUaopKVcJ3qPhAFa",
  "key37": "4xx3YrZzCbqzJcJL7DvKbKoCVMV8vfjsg4tZMtisAKYvWVfQo5LsifLHoSZVwvgTGJGZJqv9wji6DDHHq4cokXe9",
  "key38": "3ep2jpwQdyDHm2tYYoWsHzCHmofiauJwvzHS5mSNMgnS6YKJzrzoKWbFGLJRaAecqWwu7QqCQFQ7dpDyBnasAyAJ",
  "key39": "ezU7EDLJRtkT5Y72VJ2Y1RWJszo9fWc8yQssQQuaXQK1zaq32riVzPi1K2QhiaQm4Av1CAsYesSZdjdpA88EY59",
  "key40": "2ud5QofWASaQ5FobgxDG5XHvS5rQqMbrtxxqjjsYDfj8QyhHuAd1Jx6e4Km21kvV1dfvMbsCFaCqgc5X4NRtbB4a",
  "key41": "rJBtADGMja45L9a4FqsjcBvRRHmgn2r1LDLUeSwucLJ8gmAqe8xdpBNG4HUVfTXF572GB1LTu1DbdrUoHSgX1mx",
  "key42": "4RamRLdoNVqADY5Z76bkk1odUmLUn8RZZquz9w2fRF5AHBUB88kFPew9jZ2qRXq8Lo6tBkY9sFKbvq2TKEmLPYtj",
  "key43": "Kq9wXjCsGeFWwtbSzbL6m7KwPCvzz4f2xpsnK9oRfkErYJVQZhs8fv8Kz5vzVv3kW2akVww2i4MfBE5x3YGySoq",
  "key44": "hvNV2frDUwKccYtHNjHyCgJC5aG7Lm6ZwMZjEASWLMYAkxa1saaBy76zWT7xcZpxCUDBDLKK8xxNASpnb6ed1PL",
  "key45": "5dHRhuLDS8L1TdTCdb3rLB3pkEjMidED4XnpZ2mpp1ny8zEQcS3yJ5hMXZXLrTGN7hhRjWthbP6niGizkxp2ub8Y",
  "key46": "66wkc1piabn928m1anqExGzecp1pMe9sfQkjU7s5QqgnXFUvxP6jt1cmstvfAaJdT1KA1GpVE5RBX6ZqFujQ8GY",
  "key47": "53MhnpZeMw8i2w17aKwSDJpqQGQd319NqGDVUE2ZyP35QGSdzgWZTWsJXpfKT2NRLZaCciHDCbCA9aZqDMhJYLiE",
  "key48": "5wQcHY3aLjBe82TimKb2wBHa9ThW17hmW6T9jQjidnGoouq4NfRXoeLzciQ7PwnJP4W1XzhRmtmhtN9rfpA5hQGm",
  "key49": "3U9rhHiiBP381nVMMM6LifCZ3Q8B32TjXQiK6JuRmea8Ywx1y55Bn5rSAhD42hPdG43KxyxQRwBdz6esm444HwbZ"
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
