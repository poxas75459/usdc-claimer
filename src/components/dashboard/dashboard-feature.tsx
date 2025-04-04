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
    "ownfFQ4nocQBvr6WLnnNyCTtjpvWbPExsMAuX28LiYGNyvhA73tt7JTbZysWhYYYFaLtecU1x8M6tM9bJcx9Kwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zr9AR6HjN6NaZcmBXCY2Z4p789DNd6W189WXAVPo2M9E9vQzPjiX6pCtg51mZ21ZCCprLzmxMYKcFvMA9CZf2u1",
  "key1": "LDPfAr94CSUs6fRfRK72YDuzRkgQQkqEweB1HEc9Px8vWkRqeRq5XwVprM84FdBoHQ23b5RkrPdN3sVumLCG21G",
  "key2": "3ZrovZAcxdmpGss8hZsr7wWQYHsKCLjDvznNhCjVKuELfdbJdLQZEVAua4nKrkjaH4HQjqeEdNm1cwTnQ3QbM5r3",
  "key3": "31UTb46cd8Uu5isrXxbagnZg4EgahRbnpJRxNxCfXt9kxpKTzFZTEN8bMGN2QsWL4JFtutrTNAJ9XVbcEoWJ5o7Q",
  "key4": "2jRAVbu4J68u6oeRzawwzbVB49DjMmwhrmAzXpNCpTr2Z1jgA4JWc5fx1e6oeZiRyAQAz5RxLbaxaoZ5qs6XyF5U",
  "key5": "2Gb2utbAt78ZZDod86Jic7TFoNXc9dPV6DSVwnQqXbmZwh9KBKomBGfPZSE9zZ9iQ7w3AcXeWMy3LeNnFtvsJqAu",
  "key6": "27VwQNrWLzNmhpwgMDPgdat8MVLYFyurYS9Aj8RqmKoxUAQ86o14HSi1U2J7PwDezURDStG8rmxwySieRaLqd4rb",
  "key7": "2mnZ4RDt33DRcS1CF8T7d1dd46vbJR7QrkxX95bpESiPQW4fSUNaNo9Xh7L41Jmwu5SPpZGbKCSkziwLKcHx7KaS",
  "key8": "yw7xkuKaRvErHA3gJgQ7c5yRKGdBMwCzhBW15SFbHLogNRXvMKc5JMNFsj3hRn57cySpRYsiTzgXkv9decZAu7a",
  "key9": "5ZAXfJ4jJBUjx7dfXJtTAYBCAoeti7DxLV8VsrWxbyrocDPWLhmUbixAUbVWHrtKfTLSceCceiHxQQ7ykjPmEvvy",
  "key10": "5gZamAJh1WLFADUpLZWz5fPxV3CyJ1dE5VCPMK6qnH8mXB78H4zahE9TkKwCEcDkYZ81qevHJbRBGoPt8PdHLxjT",
  "key11": "5JPhRJ3t1UGCftnU1aHgWj9H8x4SewFcZwpXVnvoX5mEc36SMvzPexAhH6csSwr4kkBFoGjNTQEDDBrYUgn3rUXY",
  "key12": "4btUFKkokgZYAXK9wrRkKrya7uvpPvZhLTXikjDgSaEqQE1Rr8Nx24J916BRaVSCXmjKjF1RTcPQ3NyTPHpPDWi9",
  "key13": "3bZGVGxRNd3zy17N1bUVKqvDHminvpXP6geFXjCGK5kzG2k7Jpg4wjMna9me2nm9d3yqe88FEW1vT7igX4V5FSs6",
  "key14": "5vfukeEMezNnpg5erWF7hce2tzbS3u8qqCU6WmtdBGriFw1ycoL7psigjH2EH8Bj8DfwWFgd97ogEQ1xMmgXeFvq",
  "key15": "5ZSFmWEyPUZ1kYZgEy1CMjjSBxMPd2AJEQ4mrzewiubBGWUp6CNJPu3r4fgp59kmBv1gcewZkE4bK9vPGPaM1un3",
  "key16": "57twGiY8BBRhEaYSzje1zyCrTYfwEdP6Mq1CvbxCzSGULaJupvPZ3gKFFppHr6crqpU5UXoSruxBRWDVU4buRXzy",
  "key17": "442GxuZzmbdoNrvxnSaAw4NF4XiiPyzuY7YERJwXQX1EptqQUwiNQyvM1uWFW7A6ktacV9koYiQsvmsspUDSudcW",
  "key18": "5oFrafKaoDHFvk3XENbisS4q9Dwj7s3omXTEUn9jaTvZaHU988p6tHgkDGxPKMtqUrSznfws5zMx2JGvm7Tz8KyP",
  "key19": "32w4WqL7JkzR3VBq2Yo3aWkk48zVRJ6h9c4VEiayPbGtydEipHSAWAhQei6G1nD5YfJnD4dBsZSaqdDrLN3oQxe4",
  "key20": "3vzJ4GTzqj74vRYVkVLK5YnWnauXwph9CUJgKuhebvZshv3rMRSHhTFhYVbqDeaeDHNkr3cx3162YcyxxpNgKYtk",
  "key21": "4r7tXTKrapgBVnJYf7txdeBR1dfXUj79F7XAQoTJwGBHk8sHLfjXxXeoZA8QKhgwFH4zycJXZ8T9hwPdnh1Tx3i8",
  "key22": "64UxXxG1SBG2ZYhmDqZUprLPWyp6euicqLkDuniDtVjDS5qQtMxP1HgMQQz9CWCaMEWhGkXSsdWt1dxk3nWUfvoa",
  "key23": "5UsUwxAJhvTCrFZTbDdcDjowkt6AwgHvezBqjq5MNd9x33ghZwAn2wjjBtQCDX47Rd2uwbMNHjwzj4dqJVU6UjFJ",
  "key24": "BomSEQdr9deLFeHeF7PT8EuYTNGusujxAmpBVLyo8u8oxoWF5kzVCJn4LTVmQLatcAawBhFV9aB98gpzxYi39am",
  "key25": "3kk3o3aYjYCf1jJWdWxC9pQFkDjRtSad6ZmBFQtbbYPo4r5M9fktx4yoXHeTnsQxBdukNWkSbJeocAUntjckvFxD",
  "key26": "4wRb4Cem5eaQuoiyBLhfUYWDWLXTNTZLZenS9T9NHYETCudLQfbk7cDQKy4vqK5utfdvsTJe7yWFQbEfvjRXRWo7",
  "key27": "2GX7LPqryVzVpAfK6kbFAYJDdTia9eYbaBb6sLnG9VWogUFNHWPjKpqNXzEqabKySnMb4xBM5NGtrjttz6SM2GwM",
  "key28": "4h1DY5hz6B1f6sR8QWgNJwrHjEXimjShEyeVKdPcaojMBgiMKeYqYRfX7RC2HHYFZxj7FrN2e6xTrcbxDtXHnrBT",
  "key29": "rYi4auLy1ji7ahAzuURAGRGiwSykDLLCUzq8CACgbKGytsXrxGEoJySJbmkgyiRys2eQRHLy2gC8uZRYUnsNvvP",
  "key30": "2u7tnjehyxdfC8cJaXJggEAHiwUkHbPFSKmPkagVotSd2HGbBf3mEZg79Vdk54eTtDHsb8Z2Eh2DEqmBkvFJySJm",
  "key31": "9zxfyWfeAy2E795A3xm2328NyhHPtqfqpSC28qKrT69BRRx5VpgWX5a7eWMFgV9q83p8yCbk8f6ggfhG9uMpzQd",
  "key32": "5hQJwmwH8Wy6WHM7WRan8jxDggGt7MN5gKJDmchKWohzXwVXF5HugP4hs1foNBZw4LgvgzaNheAe3u6h2boaxDAx",
  "key33": "5PNap3srUCzTCo8XLuaZop3M3F3vsXNee6GFb3mJ5bHGWzDkiSAtauuKVHsXWHtUGM284wx3dKpVWMD1o5vzLXvC",
  "key34": "4HeeEsAbXnEQy3vnU6wkNNSjfYmmMVJ2mcTQAWD1WAnavkaKUn4whuFVXbBLzJKUiZiSwCTFrwEFjSaro1xnrYAK",
  "key35": "1XsnbUe91AQqL3rWTjVvd5zqxjBiwx71kGWaMLCADceZ5A3LWyFUQPMymnLSdaoCSAHWNm4751uJKXJcBqRWeHM",
  "key36": "3efAHdqnm7Jd9VFoXGuKJTzY6YcHJdh32MatNcrrq7tazRx162rJ8NJafURtbaZu649nYp3b5WXAX5MEdNaBoi8q",
  "key37": "5hCqGyewJGEH5XReyUX6pS38FtSGhzMFWqVA2rwdrwgt9nfas3ZoHYqEdZNhhBgL1pn2En3CQQgdMqygav1bnrAM",
  "key38": "UuxGsT1zKpyLFrGRto5mtmE5RqXGKx85ABh8p9Fr822SuYZTH7yje4mQWoGozQtkeaKeT5CUrWj8tFtJgozQhEh",
  "key39": "4B3vYHNTb3LN6cBXRB6kkrfrtuCeHg2eTae1nScg6eeVXHDZRQHEKmUAGLp5FRBApn3ZikWojRGFQp1PPG9V27Jq",
  "key40": "2dX7PvWA7Nro5iK5oNZw2oJixY8nZoA9HGoGLodfFyppcqgH1KM4BtRapNuH461AEg2u7Zbqrye42ZkEc2xZN7uC",
  "key41": "32oK9TbGyycWrazvVpBGHhoKY68Dp9aEqAjjxUoX6bFkbGrxpceJyUvVCBNLEvNRnStFvKCH9vTAhczB1ZurEZQx",
  "key42": "5RrkH6e9cAZ8nQPGcuJyBRkWetcpQRYUBecvCuaneJHAF1fGJy1A7Q6caGZiqdRNNVT1saKKY9Q96dejmxep4h4p",
  "key43": "5vuwyv8tV6izWys7VAtwVAcpkNwsndp4nCaXjkucwRMgWkQfcM3LhijcGuXjFowrRMtsZMinPrnbN6mYtzDBNH4y",
  "key44": "RbkxReZ3fRsi7tDmgU8q6mTNtS5FQ6tzEKYFVMaXMXctoNbRLvrGQYsLQtBjX5sHTg8ZXULr7DyLusgqZRhTMM2",
  "key45": "4fdFhsvxq4gd7FHayoLMGYhHtcoGUnyECf3jQbemR7c7vTYuSVMKVfhQHVucT9NjvmiVimgEuNkvDjiQ81JxmNS8",
  "key46": "3UCxC7zinS4fDKa4pHAWwqjWHCHV52fTbAJvcmfx7HmQ1oSQL23goVeyFgs2yq1GJJLSepuwooGePUSiTZRwRaV1",
  "key47": "3u3nDgUqDKXPMxWAf12JDNCWkEwze4DFU5RhLBQYTLJN3DjTQs3L6ZXngrTcxs5QUTSPAXmZ26DBrEfTfAR6wkyT"
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
