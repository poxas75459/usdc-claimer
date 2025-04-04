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
    "3wzaBt5Upn78qR3xxqzFCYJzexFLyrktwRLDrUsEfkMSsN6E7DPgKqJMx9Veqotg2H3Wuu3E5viFTqa7nBT7a1c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kBMo7vJgMm3eVXMfmfYnn1MCX1dNpHSD2GjLwAuFgz5tviKhXDxS39F9qe7PsiqJW6sgmAmVLu8F49AwHjb6uA",
  "key1": "WmRDqtJhxf6Ybdwf3ezsL5LUggApzHhcnwSC9XSvBqi4vVHn25dsCNcAJWiTvF8SvUz1dRwX7XY5q5PxFfkdVMX",
  "key2": "3ykZbZAMUG1SriQ9FkyuQRUyaifmNck3y4JfoF7qtnFbSTCQ82GF43Xq56NV4iPV3JmLLpBmBiuNA1itvPEV2pFc",
  "key3": "4Tsf63SuyYbGRjQUPFtk6Kza7ZwTpbprz8CHWZAEw6XfaEaMjdTQEraB4tJRaWtDz8mH9RUmwbxKoiLd4EKGbf22",
  "key4": "5oMbhLxxhrB6cE8mwHTjdThDhGaFNJdCHk7Mdj6D9cVD1UX2BzqqGdU5s5RsAY9Xp1TwHUtd54Q9kuEurrMi9nCH",
  "key5": "4MNk2r1SkMyFjPhRoK1tZzJRiuSuqsBwC5zK8ssZRUq7PtGQm4fgDPf7Si4kxixS9CUZxt4MrCb2eFkRxAdy8EdD",
  "key6": "4jLixnXG4EEnQLGvNMNnCp16WgHbF2KHQRTv8NEJvfPVEGKDWRUjennr3zSDcWgaDrd6uHo4A4ftQo1EjPHN9rRa",
  "key7": "2x4CiX6peyNRXjFHp3RfP3RUVPwpcnkGqZrP5PrifnW6JzXxQo9mMurYhkey2mhPFz8ikRkFAxcLKT8cBFLgqjSb",
  "key8": "2gi4kiA2rzi1ikoKT1ms5XXa8Kd3uWEYPeLmS5CNfNsWPGTTu1N44YVxveQrkjz3avWHhZR2jwB7NT7kHS35L7Rn",
  "key9": "fDTj5N7fahF8wJ3Q2w79wckyRj9d1RtJP3359pxbt6ChHFgeRnMmoZBT1Yt41CBa1pxVJiAhn5Mk1ABwNQwFCwi",
  "key10": "ubtyDsJrEDWv4dYSdD2wS1ELMiWAmdAXMTiBUMNR8Xbfq3PUBh8oG7dA29QnbXfHfq2yhZ6PGcNwAoYtpbXpM1X",
  "key11": "4WyZC58QnBhU7rCpP8GzFPmZQDxBTRDmKvD76VWUcGe1zkpfWMMzNrUFRoVjucdTzE3guoZPF54KQEScVrgfuHk8",
  "key12": "4fP1WfiXBSSE99dPVwGgA4CJEtNw8gP8VUZY2DEaTbhZqnzwg89gj5cJuBNocY9imnmBNMXt29rfi7SSSkcGyrko",
  "key13": "ZrbjsTLpXF9FGMJcK1twjkyBRTUya3avAv5n3kefVE91UERaNbGpSgJxa5K5bcHZwHKBthtydUuxQre1aF6E2rA",
  "key14": "4J2mLJTwyNxsyszy6gccHYUa9E6toYS49FZhCjAXQgwMUSqnSCFxFfQrN4qMD6LncVAh6xBPTbMBMMHSpwANeNmq",
  "key15": "WEFTX73RgUJoL93cwgBtoVCUZEH9Yiuci7ZWJTJBKFHJynbSN2kuc3zQqdPPpQy8UKtFizwSPpnVV97aDSooSrp",
  "key16": "5uQGbfCw3zh8fvT8ByiGKZw6FzzHEnwX5JZw91zzVftPXeUdCVS4VciP6gzMDZngbubwKghFB6xSVwnmNLJh1V83",
  "key17": "5XJHwt7jWdSHGsX21zZjqnYC72xGCp5aqbY14aJ4LuXXpxbNhyTsuQHDCeH5BXNDr15u4QB4awRsnnC9gApAa4Ua",
  "key18": "3gRu1ZA638wkbq2ngVJmsfzfGPB98fggb7ik9VARnzobkmNkAok7CyVtBPi4DhzQGqrFmMYGjLz1pZaKEjT29ogH",
  "key19": "32vaHSJhuhsvwXKwrCcZ1j3RsYQFMgwmMd7frU4S7jZ8cPZj2zY4hQnz6UZXtAPQa9sSs8F5Fe6wFSuDJTq1as4x",
  "key20": "7WvjJHVm3BCPhGizjj2g1tDgneLyjdjojjDmBKaxmkHXHNQHqNe9Ju5Vg8cvpmuTo3MJxw5mdj6VijTEG9hArvj",
  "key21": "3eVfHgdTRtYjLNMVorc5BfBYzoj1KQMY12Lg6vPU4Cj8scBePuhYzjvbDyQMfq1CykboKnb5fuPFwn1dWkFmMbVp",
  "key22": "MEmqcDJtHr1VDiGDgg3ds684KVn7jC8EdZUQCJdStiagFjvPALNTVJRLAshfyFEVbeoCnJGK7PEWAurHZjsjp7a",
  "key23": "5yivmMVNWgZ2G9nrq6qF5stsUf6zsi3eM67hS9KvVEmEDP9StuLYgSHvyr32j2cYM5NUAvTSzEe7rb4FP4Ga6rzk",
  "key24": "4mzrVvXf1URC5BFZ2U8fJEm8xGCXuvCNM899eYPSsQBwx5sZ1SPAFSs6KXYmjoSDZrZXYVAZapb1iCqxpfVJWbbb",
  "key25": "4jzech8UZqnM3SeRHQSyDEHpTvSEErReSXNDGeDAKM3hyFXEGt2JTi9ip2ZUogU1XCgNozrTkiPZfjE7YGox64XV",
  "key26": "25FmEUz43XpMoneL1VF8JT59Rr6Gah9gfdH7CBugxTMA667WptmPeeTigsc7sxTMpKwTTD25xaHYZyygfBsTAc2G",
  "key27": "4RMENkFypnEFh4vZDLLu81Zbbg9NhciutNpBfF41prfP9Sj6hrfyKHsdNpLw56H6XNF29HeFvjQGqPyCx5t2wWWE",
  "key28": "4hLLk3QvF4aG9BNXoCDZxmRA4JBKjBoYaqWXomuyuAgkUNydz7kv3G6Q39uAxcEaWw6hQHanCxE4NmGJ99DoMPwH",
  "key29": "4PbtEbiVC5Mkkog4KnCzEJHLqqZnqVjNp5myQ2JMgQjuLsaFMUWaSQke5CpsptUQ5P5bVmdmbdyU7VKahuTaq4XM",
  "key30": "57w4LpvgLUzM8W48Ka336HLH7dRtUPk9pNp1LQFbA9bAkLdKbSoQeyrLCxvqbuM7rrtbymnA6fihW3S6mMueLQ6D",
  "key31": "5QM65SRx1CKmuymFpAgGLNjCwdoU8jddvneodMeXEo4tY2sZ1tYSgn2fUwAo33Wtn5p5j8e4Xm4Ejv7C2wGYt76T",
  "key32": "28WUkhgVBGu6mGY1u4dfvP5MZNH6iFGw8bw2eUquu85yyPHCyUoyohy1ZTj8cw7vesXTDBDaqDra1mS1bHhWJmkg",
  "key33": "3rCPAeznYBLKkmNSRaLaiqVH9zZ6nkgp7JnWmeq7TUfgEbtF1KXvBXYZpx4qo1wzujEfm33ntKvLYCgiVPwxqXRT",
  "key34": "3LFPornm1KeTGXKkfpZJer9m1AM7edAUdWgV6XeukFRaUn6YjipZg4LDhViuop1JZ5a8R7dsE1N7unJ2eVSqhfpD",
  "key35": "4EE62sr7zmbwzzgJQpaeLKrTiDdZfEV79o3QpXktiNw1AsqTSsniZTUU6HoM7oYwKnyxRhXF6AeQPTjkhu2fVhAb",
  "key36": "63tFbYGeL1gPNtKyrNFtNo6QzShKkqjwZvNxJ3ZCgf7uesNWb4EgNPZPcWi9v7eR1izomRtzVbAhuwqLDGfRgNgD",
  "key37": "2gC1KwHexFhpKeuebrNCabCrVwYBSjuh1tT3qndWobCfvr91p3ehVKUyMrUR1ipPabhgSaJwkzyMrESHWKd194p3",
  "key38": "51oMDJ37HNbNJ294uW9ogfN4URTWHL57rRW4n1VXa1qsFU22xdf5XRnBtutD6ycQCXpmkC1PoDnivwa5egtXeq1M",
  "key39": "4aixBJ26S62oSgPUx412YFUDmEnT4Cnb7JuFsyRcXabLiRRUBEXP4DHQfByWZGfX8bkBtHHjidg7tac41CXm2GQQ",
  "key40": "gtsqaToaaMCC4zD4Ak6mumZEFH8FdknB88huoCWzfo8P9TrFvis5QGv7kagPtW9w69K5t8RmFjj7xMzD6XZdmPJ",
  "key41": "4tx3tMhQov5LBvQveyeTVQU3ZqULKUwx5gQCZ2NEyPMJMHRb1XhkFTYkUDEBeWt2KzvbNVSPmxdNmaa6yRV9sYxo",
  "key42": "QPobJqCFQ1QyNf429Mgur9jtZhURMYkPoMDwzXohNweM5VA5VsjTzE6MtKjBz6b59LPJgN22G1iu2SY1iMP2Ni2",
  "key43": "5cdMUQeiGwn8nBb92b1p16UGKLrBCbf8sWuau2L4VN2x7mEgkYhXmpaWtVBRVh3fVmhT3aNy8LtDMrbCCsDVQotm"
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
