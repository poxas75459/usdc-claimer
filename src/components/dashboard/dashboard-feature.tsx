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
    "5q2ubyUTcPSQ5wMCXG2j8DmQSa5nCC3o3i2nMwphR5Pp75ceUQGATViPURTevKhzrwwUMuY1pWUeLWEhMFHRmQcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUvfGrKDJELEfJueY95bHCdVet2qXrB82jxHwN7NfvfP2b6X9nZX7GJXYfDnxHmpzStuwWKH7uNdZSNutSJNeQs",
  "key1": "MizPdVRi3fEezp4Cw3vzNFT5wjdYKEbyut8uC5utSfGDNJHf582jKZj96YDLpRqPz7jbcaBHooMn4nqBD7CZ42v",
  "key2": "44enhekcwNW6e8k9Ji25CjrjPcSFYAo4HobqFyMQPzG1m88Bzku91ieTrXScmNZphVeqb8UiE4Y1w432FKsPcX1S",
  "key3": "5BHfjZJ8BoGi3raFee9tRJLYvoUcuup15tWPaK8hiir9omMgWHUvYyUyxHZTyTM8uPBLYmbPcVD2LQD1P3J6SkL4",
  "key4": "55JCgR5KDMCPpxtQpVmQLyMn3w6RCBAveoQQJPyJCpJpckeybLVExBmvGzhWwssbvYZqpKpCaFyAYVWrLTrABn4x",
  "key5": "2He9JcmTHT8iPT7gxi2v33Th2JtKm7JUSoMjqYv4XCfRf4ahDY4B8aZB3jXXS2QdverW8V1Dpi1j4wYZ84HGKYUS",
  "key6": "2ZnjyA4XR1Pu1MDXDfAsTRZfDLtk2RGei7M699szscyRpStsBjCdpAWxcZ83ByegrUgDWDiEhpzfzDNXwjCEQhHq",
  "key7": "4MmE4DTsGgPYA3ot8t9QT3fFjtAfU6czVBgxbCMTZfrWzKzbvo6NZmEx77LZiFE8McrEkVJZrCQECZneiujuG49k",
  "key8": "4m6NoA8ajdz2gA9hb1YUmbhKZRcz4fd1f9owCiBGxvoLA8BFYmpJT8GDGqxz81fsD7cTthULaqJNfbNtPB7UFxvz",
  "key9": "3Ejmu5MAKT53XDF75dGHMhv9NfhWDJ2oja4QmQPe7K238Hcxkv8vxiHtDJem8rM7vbVDxyt69Nybab38s2Z9LP14",
  "key10": "5XUGxwXyuBA7LCdMExGaEwPt46CKkAGspcEKPZoxNdsGh2pLcqkLefdKubKX8vTcfuiPv17aMjYBUxZHiNLzts1L",
  "key11": "35Dk2quG5D2VP3EibhCXeChEqsu8G3Knr8xAfqAoPfV3zUsgZKQBJomyYcdcs5ifwqmx48zMfPXooPDoscKUEtPU",
  "key12": "jFGQ6zVSEFSSxH7zUJPV4kJgFcVzwaGgyG6zyTyLB8NZ3AcWVkauFLuhAeUqQ3f6aHiXnMR8w8XRGxfXfBZ6zTj",
  "key13": "cp7wCqXggMsRUM1wGzCVvNwcNaxgEBSJKLfY5Xky4k2TNTwcMPv9Wo2FKsjvYqS9d4qPHPoaBLwj6W8EqeFbAQL",
  "key14": "comkRnNi2kjex7LtMEHQrbv6h3kSnxhuTGbJnNy9YD8tTF4Ro7DqMv9TSXV2g7NixafSSWwfpYA7s4MBF1N2mYq",
  "key15": "4XedpVhEA5E5tiXkTSpu9FvqCpPJtYrzLmp41hNYZ5tJBG1YKhpZcU39ZawKcKaarg6r3BeRVM8HRvyte21rVgMW",
  "key16": "SeM6FDE16te2Bt3Kj72PEcwX9ebNrbSBDYpLrosnYiFVakhzNPWpNZyBJJATL8usSBCTk1VzacvPdcBSTevjdXj",
  "key17": "EcVy3wEeMvZn4qFxGVWqGa5TT8ZSogtSssk7MTPE9fQt4ui7Ts6Aezxs1Ys9dUHGUyunooB48wUfxKZgEZzhERa",
  "key18": "4fcRh5XGQcydZA3gDFvm89osejsa5TCsHN1uphzeSP2Fpm9oZQQpRkrF4CdiM4iv9V9XP27bYxrN8NvTKLx4Y3ZR",
  "key19": "9iVfsRFbsyvQtZwr58v1qzEJGtoTE7gqbgmfLBP5CE7q9wYu4YXQKuU6FHHokzdVgkFUiCQiamt7s5KEKSUKvRy",
  "key20": "24ugEDAJrADzFCBePW6TbGovYxa5NMgCgRs7zNWb1EGBSHecRTa7pDzGp26tZ399UeRVfSNmqUdd7Vt766MgnnPb",
  "key21": "5p8ZrpDb67zacKmnJjhiUbUeCvEzv4ko2gKt664PsD2RMgBFgxa3jtokok6qS4QmtZZMceSnaHpimBmXFErvQiwb",
  "key22": "3qL22ow4DbYZ2ujr17xGMYhSVF3Hiya5h7NdrPoNbEYNRoPbpkiQHSoqSbRzeZ7QY48TSd5KGCpVNuafTd1bBQLQ",
  "key23": "25GCf6CmPNboALkpyGeoNaCDQUnLmUYEJ2fPsza4RTR1N42feZfyyQM3L4StbzffJgn7og6e2GF5NuSsydEUxFT7",
  "key24": "3MGzt8d5VZjjavqzabfhmZG6bTXKANaR71GcYX9buZY1aTcUssjoe2paGK6mbaNrbsvPePKFsKis4wKNTWV6rLf4",
  "key25": "3AWv8kh2qSc4ptJt7SQLRegusAQzU55v25MZ2dPUm6Hud8d8gz31RgNznKKdjEouGVANdqYduNZ1Wk1iLJxLXFzM",
  "key26": "3pRAbpXUt83dpPb9d5ExCFr1VwzMkXtjguiv8RchMS9QipQkJXbX3Wty5RJRScuucdhBTaTKa2a61kHDZQYoqniY",
  "key27": "26d8zbJgs3r4BLZKft71kH5bxiNfE5gv6vjHBgmmgwHa3grbPbLohHPbEYQRcf9R6FHNB2xZKZuLiubQjfP1e4jH",
  "key28": "2Ri6LeqXZJzkLuvjrwhjJUvstEB6ZQkHbgMkjX5n9wyoxdc8WmhNV5sF8qfvmjtz2Fsr7hn8akCN4YRKnsvZpZhx",
  "key29": "2PnSg4ok6UGcQxSvaq23feZ4rsfGABoMVMUqXqVFRFiFLoWY5exdVF4JGxi32KAXKEURJZypo2AgAdgYoHBqVjs2",
  "key30": "2TwFnvRD5aZWepGz6QVvuxCN3NHiFPayrCFCnR48XVvbiupRERg7mRtquk1HAGiWhSRJ7BxN8Eg1rWi4wFj9ScPx",
  "key31": "4qCUGqpV8cPeg5qqAUKBPrF4MjbnoZTDz2Bx2x3kHVpLqJpPNzZ2LQm868J7ggU6Vkuq4PYh43DJn1Vtwj6WNxtQ",
  "key32": "2ZRyCk3SeK4pzFEZ1T7uWj5cGGasNDHahjgzcADBWTHsBdbJcVe5nHCBFN4eLk6xufGtAcrxsyxixGFYvkqpVHBt",
  "key33": "17PfbjyifqprJGsEhmNWAukKJMeCjfDbCxj2hVWzaDMcRwhFRcmrhcRLDFZ4uYpvxvXXWx5k5DbEpu5AjDCWVVy",
  "key34": "3LfibLH5AHyZxVkdZVivbaSmUF4hedA9c3GLmo2W2mbzKhqoHi568w3k5xLZmJz9MsZMRKwqqAZzVsK2fYDpfqm2",
  "key35": "2hDEJZkMcgWnEAeenkuPydbS1uBKNd88wk198U19NqpSZmbTsAQtoBhKL42kxp1J2Z37qn1ZD83DvTePHxavb5D6",
  "key36": "3TFdH88uyPE6tFJSCTjBWso21wKrycqcHME8f4LjAyzY1Uw4YdfdC3YAXMVDmoDpfKsxivM9Ys3MjAcu1UABRPDH",
  "key37": "57m3bTNjKFkQz5Edo9onYrpT3p7tB5njqXfXQXmDFUXoGPcFrsp6JZ5i2cwJMouXrRjcdj5zssFh1faXuLtW1ttA",
  "key38": "ewn5iygcphTkgVwasNc5Yymy7VhghQURDVYinD9UccYwThL9EJyCeU8jPqSxEhUwhsg5VFSDgqjT871ryykjZtc",
  "key39": "5BBy4Z5cDqH3AAnPFFAioeXzoYbaqXhAYDiXF9CPPeTNt5KwqGipBAHYtewiZdDQVz8MaHQ6FnXnqdUJ9weMFtJe",
  "key40": "3QDSA32pv3Y2DKjre1uMpi7DVGPqKRNLZRmNJNd2vpa5MKewrkbUpcsRrXRgheQTZ5EixtxBi9XEpERWgV1c7xPw",
  "key41": "4gmbKXWATQfVEQgmf5s5W1psmFKFPu1u57ADoL3hcKQx2uxGAKV2cajKXLjfyryKMUEc55tonpes7PBRXTUK5awv",
  "key42": "47kuEFzSBy5WhNwh3eYDoyQZ5S6STke7SGGEFqivvh86HA8MgzbcuMTAqe9vkskhUhWBLAeNb1XaJJD3ykUd9pDe",
  "key43": "5oWJ3rQSaz69z6uFe9u7evUiYzvC6S8PxYfQvpkJsAKoivLwsP4hbdPBAuUZ3Mp5q53udcUQgMFe7963f19iH98F",
  "key44": "2TEWXxMWQdHoh31bE1VAfJLuoj3FAnB1rE9Zne2Tzss81uGSRbEcB1HfnVtXwFdpsBPR5UMYTkZtH2KZu34TdGxA",
  "key45": "4dYpsPoU561w93Z3u1eszFdVRqWZYZfmpPc6EuG466gYB99PsNipUXo7iMKR7C6yLtePbLiFuc67mJQZDXqct5rA",
  "key46": "8pgxdGSUmKWQk8o5Pdq42PmkfPngsZfpt5DHWi4WkHsTQYuvmviCA68Y5ziCHBWQCciDFCkr63ozkCJDYeWkmgH",
  "key47": "4wVce8AH3ZjNNN4dGGAs3MrGfiSuYc3KkAyTTWNQW7NK6L5fErwizLieiVZo8iaR5ZLnwZQbP3C2bHP5SPqeSfFy",
  "key48": "53nq2mDhV2nEjKraT9j4xibdYvtFmQfiquCBBaXNU5ofS85aY6KBvCZW6tNtnwzBi5X4AjCd799Q7QyT8pzgnkKp"
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
