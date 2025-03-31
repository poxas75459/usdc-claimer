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
    "35DuTjKGbSRXkgxJ2zfhj35mYBwKR2kd2NsF4rSt7Jyaoq1ZT7Kj5MVN2dwu6g7zLP3ov18YD2babEpTVwRQ6B6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EGnFWyU1wbsmjr3FBpWSNcZNcLgrzjfVpUeE5XNKsksMQAHFNLUc2B5KcqxXLeesmwW34KM1Z7ZwR8SUjcqe4xP",
  "key1": "EyG2ppabvqXXg7dxAwPGufJXwAYaYfDXoTVZSX11juzihRYuLgFoQ5fSWHExoQUzJnWZuiNmEeyTcorTSTDSDur",
  "key2": "5QqeP4P6mNe7buCqpbnWEzByfhnr3HQY8nfVX1B3oRg27FrYHBW56zjCTAcA9aEFsCqzRybtgm7vtUTAxRq3FfBt",
  "key3": "TPgWoibbExmNwuXGr8HoUxTNba26gg4cX2EtXiHahGCWDAsTteYUEqcjHMSMfZbVzyGHJxRVepmNumd8rUwbYDE",
  "key4": "5r54p4LyPUGLj8CUzPeQMaX2HaDUgs1s1ivzEGF3B2q4ag4jemnipTytwGkumQjfKCmFSpKstLMRNKmPdHH93Pr8",
  "key5": "58tYgvt2DchBt8WUsBiLYqbu82SK7UVTUPKo7ckg8kSsQRWuEgtf4BPR2228hM8ngqPjFiNy5oyrPegxpzhPPbHc",
  "key6": "4kSRBatDDSgSe8zW4vyUEHhdiQomfqg8u3VVEXcTfMQHwpKgQ8ppWKb36y31Uf3gvceuqmYvA2TJt83xcMV4xBCY",
  "key7": "2pNsymjvGQvEAnsmziRD5cE6AjLGesoEzPJ5bLA28jeJTojn1NuQcUuCkGp9cSrFFmQrTRP1d1EnoHCRSeCxiMEr",
  "key8": "5Boh4ViWHb2aTMACrFpD3Y5zkmREMET78Nusb63pj4JXhC2ZY3yGGkGybrz8KuoHkX3NpV8UeXBTzBdYKMf4gzC8",
  "key9": "3Q7mEA7cvJwiZcnoNVQKUVMvsy1J5vBZF7gWeigy2K5hNG1k3ZeYw9Q618GKr3w89HURH5Nd5P2RwDGPBVEnJxUa",
  "key10": "4XCvA98o9kZtzW8Ywd9G8xVPApkaRKbz39cY7W1yhySh4xkk8MKwA9rQjysixeUkNLu4oFVkNLPH6AmUqnJwXagD",
  "key11": "2vW9QzuB9SCqNDDRzZHAvGkimaGCDJqrmf7NyymAXRBR6nNKUZmo3uEPc5xDoi1qmPJG996wjugfAFbezxd14eUK",
  "key12": "4xsWiMKyBH6X8iFFsEHH2eByLHR7nb8EkguMxTFfS7wpKoxp5d1JEHSBtyv8pkbFB2xFtKSUC8xBJcA1othQk92n",
  "key13": "4P1S717MSZbyuZsrgZaE2hA2FQDnqQGFJTAQjesgGS86TUb4AXxxnV1LivSaGRJokzzLtfGqFGC8DKMsm7G4ewsf",
  "key14": "3roP3uF5tatqKj84W3yzUe8NppQgEPJFZxhRB57SGRheCcFw6EbaFweam2prMBcJHcdcGqk4heh5sHDPKD2a4Ptv",
  "key15": "5hn23zeeiYoHBeJ1kgyUK2SXi7ZkXeM71Eq29uhosYLgAdjQNLyVr3xzUR1JjJZ4iD3vMzyX95fVCwv3JbofAr1b",
  "key16": "5iZXK7bdja4AQJ2QrbNC1dVt8YggqXvyPB9R5hEF1pkxo4dpMpDAFPBxuELXtkSaMaZhcxyxj8yJDcniFWcrxQN2",
  "key17": "4euirY3F9mEAWNNGkehRNkSHu2gFhud7V9xd3BUgousK1i4a2xrbfGWohomKbkjbXxBN3Fvh5KQQdVzNdubcFbB2",
  "key18": "4eexiEXMMq3jvVRNnPuJbmR5tc23XatrPcfxSfhPkLA5pEF6WYjSn2k6h3vCWNd4TvTbu4SdDtuJyXLV1RFMy9rE",
  "key19": "4hD1MsmdBWa3jc8J1nBSh5vGoUxAY852Y9fxqTqrvjw9mgogVEGY3pc1KQ3FXC9DNpAFza2Gn2hu9Qyh58LTLQkF",
  "key20": "4iYYMznQCjrN4ZUwvik2oJVs9yUQ7QTaAVqaG4zK1aSyMgJUEejCMUNCagYoantuvbrvRoWw1BsyAcYpU8Ugsc9",
  "key21": "h5hLhSjfBjF6nVKFf2KFtYhToEyA9T7Xbyda95TWc6Gn5tsQyfCBixLc8dYsfM1Ykpt8axLiA1u6XLe9P6Uib4t",
  "key22": "4YeaqmVYgsRYRiuUMgRgL2rCEnwfmJYAnBPRyjWdkjmsVJo8qVkWcrrmx6JwWGDxZxwxR9E94TpMTiRWbJWaCz67",
  "key23": "3f13tq96BWoe4iqKFgnTTxLdJyEuyMuHHMTimNh4qJ5aUXEb13AWh23nDw4SLMGpvFXb8JxGp5wvoYbbr45eMpAC",
  "key24": "3qyTu1MPdN6frtPykvJeEHmkCWSybXFNC6Hkf1joSdETmSVcmVSKtVv7sUAmVCG28qcNB17p89x8VSWusZ9LuJhg",
  "key25": "5RgKgQDL2qMDStKG42eK1B3n24Yff8apPtTPi3Mr7z1DJ9ZSSYAFBwHfG1V1F453dphBEggBVZGjd78S2NP7xeWT",
  "key26": "m32MPUcLhy2vJAsR8fB26ZAe3rJsZRgZ7MQiRQqzytTGEKGTMM4TYkyvBy1PU8zxAkvKuuio5d3h5LYM7YtX1mS",
  "key27": "5PZ5v6TtfoUjQ42nTPVB1vR3KSfARdYfuFkBPtznwHoUokqWQ1vSMYJt7ri2zCb8oTBhspepYWDzFGerm99Zhz8t",
  "key28": "5MiiehCBedDzCc4iMEmduZNBra5eR3QFc3n8m2LKWeVWCQBwmEGqQhLfwfL2uRZKB3mqqwckvZnJ9v2sd2SZaU54",
  "key29": "4B3eFVJ8smNookCVr1Vg1zXgneJybTAejJuvugJB4GbDHiR5op7M49s3z2ussPV5BZox8c1PTqK2KyM1mnFC7qv4",
  "key30": "5ytEcrGVvV3p5W23DQeP677xg27mnduMVhRmtRe1zDgmwf66k6so3Y5vUvjHYpuD3mc7fGPim8V2ZFpntQ3QnsbF",
  "key31": "LTrtDFtBx6fBf6ZVhZFWh3LT1zZ3VYf8aD3MUGUrQX8vYZYjmXnTRikxSeaYDoJzdzyoW9pmTqTAoLPbVdg19b9",
  "key32": "3E1ytNtdRCg2DHL97etZP9cibPXv93Aj1Pq7oxhC6sFbGEDKkc12uH3EkSih8Tt7LRGBBFTaY3izZwLrkv8WvV81",
  "key33": "oXGeZg35VBZFFpJFnMAvTyC1B9bRurfHbcA3nagBtt7hzy7YYskAzzCWgv5FDBE3BAE11d24XzYwuBZKhKbyFBC",
  "key34": "5fn8TUX6RNKZWBqvHRn5ep472hhhFMpXfhumj91x835N1wNbSEPSvpWYRV5mf6VpP1y4kUrZy5sSbqk4pu6QpbiZ",
  "key35": "j94AijX6RwSK7F1VV4y9m7Ai9WkgeQYdvQFRYJzAKFeNPcutixXu4nMKdo8HVf7TntXDE2rboLw9KYJiasxtUrX",
  "key36": "3yh73WK5jmsRKAtkjC8QrhEmtKop2sRM1xf6HriiyDkot8nPrKDp1iWjSTHR5QasyPjiq1JN9SVSEAFwHnwn136T",
  "key37": "2hdPLdvo9Co5v2mxhjU9bNGBpAETWpuauygxcFai8NTQuK8nYQsjXkMhzV24A9dkBR8EPZV8nJtHKZc82PBWACaz",
  "key38": "365Ve74CVr9rRhpXGptwtquKC2NicUgARNAeCrEtr1FoDTgMC4Ud8gN99DUWqT9x23vzTzbkfVrzk923mWeLtoi",
  "key39": "3bbsj2SCPPqZTj543bxDoAfqtjQA9KWYJ4sj9AWeHRynsMP4cof58HDyaBraa8zna9EWSxR7jxZooAENNarYKPY1",
  "key40": "QNyKEHaF9XDKRozt4eEuzDQd86R49PXc51XMNtVXjHFy6VoA6bnbyn6fG3tAT6uy7jr6z5kdSP4fzHKhpSQuS3f",
  "key41": "4NmwyAGoA2rFTxp7egT7JN7gnc3Vop9abkDrkyjxRW6Qbd5Q2ZumSnwRnT426oX8vpXSofZYuP2acfFPM1EcZ7Yp",
  "key42": "2AMsXew5eeTUWjYWvDwMGBY6dMfiDQnDWR5Vmfe2xhnCtBhs5maSePeucnrxT3p7HkExb3VwE5vEFtjHLapTmNYv",
  "key43": "4b5isGn1YyfkS4jgkjX2rByv5jffWzaGE8Y6EHqpW6D6nSNCpFaqBFFvvjNEULmhRsJG9ZiUfft3nNFSvVM1y6Cs"
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
