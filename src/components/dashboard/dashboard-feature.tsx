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
    "4XvkhAxpNMf5S5keJj8WgGdEnokWKdTTNtyRxYEVM3hfGLYZ1wnC7aiAV9wzF1wJCwvfgkuB2Tn177yCpdPFCEpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFzg3WLAGgRiK1NV6yQBFtspvS3NoUekEtCNH5c7yNmnYauMWrWHaFk6DDHBiMvsao4uvN8avL59dXm1nfEifEP",
  "key1": "2o5N5CYLWsyC8a5CKsSmDhomQpB5rupHF61WCkKZt2QdRJBfVorMpy23Qf2pLcRspqrXty4stUzydzeARBNfvj7W",
  "key2": "UExhCDQETxikzBHeVfhY1LLYPZQKGWjFgSaN5TyGvG7NNBHdj2ccaD4YLifTB873gC9sRnGEwXHpCSXp3arbBr7",
  "key3": "2CY4RLuZdz2EX6yHsdsPtJ3P9TD21vesYQJJUetEmTQG1WtnRTEzQ9xT4wUZVoUSXczzvm6VdieJRz1PvumxwUW8",
  "key4": "5vTndBatMMkMCjszAo2wDX6yQMLjwRGYE54XWuxbBLY3k7CsuuMe4KWrepARPvrXq7JQ66UCXjXEXV86MtRZMPAU",
  "key5": "5RseLUSrnZeps5ctZYgfJ4gfE4aKVW3rFc9hP2Mz3wtAUsBixJfjqWGk2P1c8s8Zg8ButxW7wch9QC5YSCxbWiP1",
  "key6": "2N2LHfKakYfK9maZxNhfBbtg2SG1Bd3yD3g6xVLzVf1VtjMmmhfbcuw2N1pALL5twQZ1Z68hksQZRKQ9T64siNDy",
  "key7": "3VytNxckYHn35VWgEbQF7nDQ6HyVMPZPaTE9NbEMguWBiHZfUi5uB66FxSmn1MbiKJPHoKFTMY1WRWB9MSPvPzgv",
  "key8": "2qirT5u5cBEFgYFVAYmNW3VqiNJQNqDYG1WrjpbezbHzAqGKVnJSu7h995yr45sGhhjVQ3MVYo7XgdzggqMnAWBG",
  "key9": "5PE6d2spP3GzDG9KNiFFhhuhDJsuRpWY1P6TjXyQ4PhHRPsoNbSkM8UB3DgdiZkowooDczvAhnsgWiQ2WJ92MLRc",
  "key10": "4XGarRhyosXwbMsmAdLjPwBBWgeRjNuNrfcWYJrugWVCYGAG5WLWkLs1aebTPY8viRtPURoTTNpS9tosFTA7no26",
  "key11": "4Fm5MQU1RafPY3wdS5uJDANUgNAxVZMBf3cBvRCoSeiLXkFp7eFsxEmz1GJR1JtPmgef781vbeY6QaEz5LqQNet1",
  "key12": "PMDfTHcymNGbTwocTnLJ4Ni9rm32RcuLFMojCiy1AWvSqZ1RuK3XR8oF2mT6EBFsv9fjbZrTsHfEgEf9gyFbhxJ",
  "key13": "vLnbHubD8gYHthmMPMdduJX8Pg7EoaFswxPNSqAEF6Dkez8ymy7HGZTAKZjjeVCmLc3c5MoDxppfvov91Q7xrwM",
  "key14": "3Je38eN34gtdU8jGbT9GYjYZJofe5XURFY1iUm3nKLhYeiQRdg9WYjDgb4cN3ZK3mbR7TuwgnBUsmBKE6p8k3UVh",
  "key15": "5LbHaXb2KihrbFpDJBUvNG5isZTKhWZjhGKL7Af2zBkDDZSdHqNFspExbBa2dWwRtdVm3rbaSe5NAs1qsJEVKxEc",
  "key16": "3jMYJhnbiTcMMa3kG9reEnZ6ouYnf1PeQAsL2YFZzwHmMsVR5EgKc9HeHn2RcQNsRkVfCiCgQ52dEhBMN4jZrwev",
  "key17": "4foDcahHCRjKJLvkVpRkY3ZqBHbScRcixvyfRc1Um2jEoqAbeehoyVsUk3ECmLAQR899NTYTFhweWVQiZgRX8kvp",
  "key18": "5CGss9zJHCcTA9jy4BAbJVzqcsRvrrjReP3VPUtt7CGJSkiisniXS84itW4pJCf5riKdp8i5Kx765s11mnVkcom2",
  "key19": "UZRYRGTSeek3UZpv9pR8zhz1sPnseJpw3NH1aXAffwSjGnwH2d7Quj6AbGRk45M55724JgtCKJQawZTpYx45TEh",
  "key20": "5y5246Kp6Rm5CcyEeJfDRHDjig9fqsdLf6y9A2Le6W6KQfuNynooPpzaqcEBRzvxcxxhKEJMABqCo7kaVaXSq96U",
  "key21": "DnutquNou3L72UNqtMrMhJwEzG8TJxKbzAbbRCZSwi3eBoHLxJBi17bk2PzgBXZMBVDeYQxB2kUZUqu1ZrzBX5m",
  "key22": "2ysVs4cFPsfTPKuz7CrWVobEfAURauuhmRFJD3ByJdrnpdVNV3aEginP6YGsH1bDjM76BB1GcDEfn2egcusiRGyf",
  "key23": "5ynrY4woQdZZ4TRV3KnmCWkfhDMtuFiRyvVRFZ7RGwExVs2qDbCGw7yHNgEL1Nv1zRMQJ5MwQZWB9a2Tz9WUpkR2",
  "key24": "29aXhoPfENNdBbTCLEPrtq5b9STPQJ1xq2QTFtmboZxXem7HpVYs8nXHoxkvCNp9FV9S9J5nfMWawXDJsyvQbJzU",
  "key25": "YURa5oPYAQW3rnYCqn11Hq9PQWdPxXwW2Xcw1Nk6YEfpKsKGFW18dF1ioUGRa3eW65zUeCRt6BRENnP3U6DZtRy",
  "key26": "5sek4fN9D4amjJCUSnxG94Vi3s3FzNrNbf5BNZQbviMGN9VKTDD6mnFTZVSQXaptsR2gA8Zj5j2UWd2J9vWzLUkE",
  "key27": "4LE7tz48XSQrqeMZbA76rcenzf6P8bNRndqpRMdaFZC2TG5vaoWMRMqsqaEo4nAoUSdtKtjrdekFK2jUxDWhryUY",
  "key28": "2nsJiZbvrA9y4Zpb9JueGDG9AhMmyBrhmwabqBnx4amxdD7venQPzA5tJ4AGUon3nvLamdwuQx3KSXQo2DtGNgF3",
  "key29": "4eY6MEwDmVyr6eAX9exzHzaugn6S2Xiq4VeFPZYJdxFgnJTSaVLLoimoXg2Zh5jKqgMPTMBmHiPV8MBuyGorkVaV",
  "key30": "4V9kB9oHyCzVpa9ggd4n5JfHGkRNL6EJRr7Lsj5SwD2qf3Np3G4zf46hgDdzUVZBuRLuu5Dbw5zq134yQ21kuRJf",
  "key31": "59ocHnMrWmh4FFDNGtnjrSg7rk5vZW3obroACD6mwxtszU1R9VHYbdhzYpX54ejJVmiYKo8CM34LL8JtLgpicgHD",
  "key32": "BGbi2rXnDyzuKHPWA5iucM8sR3iQx5eA9fdePhZQ15So5htGEatdMuTvZRkuJSoZBcw4mdwkkmCifzteTVx5Ztk",
  "key33": "5sYzrkheVgpPxQ3at9m94Nxe7brBZAgguHjBN8i73V7QZ4HrGv2AvUMe5JzBeBExd3jW6eJx9ceKSbCJYuG9rYHj",
  "key34": "3x5Mc7GMeN9zGTNcBKnFmpywVPiDBQLzQ7HqFMqxMLKVZY7qPLS6uxeD7Hu3y7GRv7n65jEKY2E6SzkjTeNY76hv",
  "key35": "32Ha6rtneU6ZjUWKGwFYj74HaTd576m2RuJaZ3syr8pUvUoqBPgkCAZnsYvTojMj9q5a2QpRE4DyiMfSoz3PLV5s",
  "key36": "4EyvdV3kkoHgAoKzitpZShWw4iYP1HJraEkAZZJoHNyhSvxdifqXnK4KBs25ysdyadT1NpXRu59eXG74KfBoyFsi",
  "key37": "3yY1Pu6z66QWZoGUZnAG9DK6BkGwWRMpttv3sSd64QygkZrXZEwBVkUHEuVcVQoe7V47CyzbHAMLuefs4hxDBjCB",
  "key38": "2yJqYBNHE51CYGLcvAKTVGCaSB34CwCNdCWzbatLujN4Mpihij1DbJAeVJqv3eJkkWK3e1gMFTNoKvrAQgitCeoL",
  "key39": "2zLcYWZNfrkTsvvi8Uxe8K9mQJaTroeh6Jdht59FWSYH6ZBoZaCiaCZKiBkpmoZoCTLvdeDdxfUUARBnFL8vnLKH",
  "key40": "yeEpUUj2eVfBiLTjfqzNFZTwjHsJn4QyMBLEqNoRAZBu2jkgUfrsauYYWAKGXwNdk39eg4Mcb9kJxceyeqt7MsV",
  "key41": "4EJ6UReuRBTVXGhXB4LQg2ffxMzaSZhkbqeR7xR3womMVEyZdo989sEgkjjf5XqnpgU88okAfh7QTvcG1K6ioBbN",
  "key42": "5D8WSUp9iwc9bivb4DZ1gH46mayJsigRxV3qybJ8T5VYHbbb98ZjQTw64rMukQJaBPopfui3CFdpSNhigvQSwapD",
  "key43": "2gY2dXdAQZy8UhvEQE2aMwXRVGSRLwfWpYRL7uDDWHJPQUH3qRCJfw5Crgv7wSxi4QWyWvQMq2tqLjTZmQiSDhr1",
  "key44": "3aoJ5i21iQPHKMtsnEAdWNB53XnTbsJuqQUVCK7Y4JDoJo68MAGdVT5FqyyphazNpVPt9vthboyPNysgiqNhg16F",
  "key45": "9QRRgmXiVUL5T6337UhAVzbLWnuTfqGYkwZ9JC6UfZEgLVs6nwamN1F6Nf6aSQPE1g5gmy7XaWP9KZtoJFWULDX"
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
