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
    "Y7FsHDf9iRpuSUxQwrjWsW43v29JUMG18LXF9SUQvcyqYsMExMLthSbuJy9Ky5idRasEUngtbyBnVsA6UH2hrep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmN63uFa2GciMua5jGnpvVD5uV4rxPinvgdMnu4Wa5fHMmKq9GPZJqKddQyzjiwkaByiPf4Nxg4KcQ46aneE156",
  "key1": "5UVRQci7h2ZoEHzAHzfhJd3EpCDLgqZNoZKtgEpNu7AjFP1L1tT9pLGcbFDN3C9dYZ51E5J1zRSkYGusMUKYfFmk",
  "key2": "4EZhe4mhyyRS8Z6DHNGsbzZYEj3hyiUz2JxBjQoq45rKgZrApsmKjjjHKg8Bm6Z57Em44JX4UbaVHFgZ4knEUNXp",
  "key3": "388qZoo5KebJ3cDkptCDcPNMkMnFHN35qz2UsRz3mTvpG2JWRg12bfXbHdyXMR7BbJ4ULzbFH8qC66ttp1psCchL",
  "key4": "4feGCFhCDVe4uN4xGDGp9kLU6i7NGs2cTiC4qTa6XwAempYgwspjTM6B6cAEzTSdM39cXN9zFUDVmTvX2QPkSDZ1",
  "key5": "2QSusKtvoAghZQFhAUCKHMTwF11cJfb5qfj5rdQMnDBpv2YpjHJTXXpLsiuN7qJ8LxXZPGKi4jYFujsvQBxqYAH4",
  "key6": "4R4yc8jPGYJfT6NbRLQV1jxSqtQemhuVeWuJ72dk3NJbjKShvbvmLL9nbqQPBzSwwwUT6F6x4uccPzoNeYGggPdx",
  "key7": "4rK2kZkpNYKCvULGyGXV85mSipefWuTGojw9E1KSYGX35NKZG8Xqzi59obR4HEovnPRrNoNP3t2hkikVoBGFxSWM",
  "key8": "43g5c5hAuLNVVyuq1RCJJgVpdGbU8LfnvYHBWcGvidpmJUF6GjFgUapVrNBCrBtsSJPPdNTpEbk5b81hoZ7zDPJX",
  "key9": "4VXuwFeeTPksenJGbyG5oji9h37ze9C3BZy9Aid6EJMknYHmi11R4bAbzGaEVvKL3nBD3vuqQHFaMoYQSjqt75rz",
  "key10": "55DtcnuzbVTAtkMUzVyvvFR2XH8tMB3faurkJUdNXU4rT4qNEr8NSMiviS5Vhu2jyWMQvPT6qDmo334iVSqXR7AA",
  "key11": "VLTVyvpZxk3uU3ccEGhYYTKbCCp1J8ZNzJPY7C3f1aYog7N5XhJHekMCDJjAeiYHgZgvE1C8xKh1wbDBtc9VLmC",
  "key12": "621K8u8aUehf8kohbCBYYkCmuZXy7r9bfi5ARKuMdZMQLVU6oTSBHvnzauGgVXe1uv3FncTi9sBgrbw6zBAhgJVc",
  "key13": "43jFfDAyunFXQkKCCJSCXaoZt3Hb2PuXyr9rRou5FXbhQaQ1Eaq95nkE7BQUcaj7QXpq9E3mCSBTGFqj9Fac2LQf",
  "key14": "2onQBZa2QB9hKeCMbbzsYUEhKCB6MmoWjmW88UiZDwBuoqAFaXZUXHV988vgjRUERXx4WbjAKYz7shVQHjWPYyKP",
  "key15": "235s12FzPMDMX55mJWuB5inmfXsvoWWWkDbseexcUELj7HQ3Pebx55q95ADnh4hjsaXjUuJqb4vgXyUShXv7RyrA",
  "key16": "3fg1FFipUnL7mefexxsUKYp5MQ7cabJme1J2byZdj1fmuAAnk93a7pbaqJPFR87ZTsUMKeTrRtLDiNYpxfaCPchy",
  "key17": "XBJtQ9vxTP2KdtuwrtdjZgyWNK5Epf8Lh3s7arsQivuz21cX9kXMXnbWrME3kNDriiK8evVw13wqnoV4ZXTbiSF",
  "key18": "5UJvTe9kLayfzb5WHnytEsHJojQBK4KuUoxC64joaerRmp9n6fWtnvu2WoKDCymQvmFVGbbv9MEyvk5GTYpYCQtM",
  "key19": "4Fi4kzmrzEoyTYxn4cBiCfUo2h9GDzjJdtnqEKDCs4tqG4RUv491keKnkHrTRhopiGSi17NVqag6KHZKaRgDgKjA",
  "key20": "5c6Ar7PaWGew2BLickEj6rUfhG3kBxkTBAL7pWwquz8twdeZXPKBHWLZ8TCHnp6B38X7TWGtCj9ry9wuiejpx3xE",
  "key21": "46qK5zQX2Maa5aRWDX91SoWzTMLTzvDx92C9i3GXhhs3kFS9wn5W1AykP4bPQmVEYW131fgfRoVcjVK7qgnyxqFx",
  "key22": "2eYHkxgoMnovNGRg3KZcGEnZbtSeMht7zTigDimAXrf2c728UPUD8rRxE14adAvDcEK5DrJ4XZjZh1kwLfgp3mfF",
  "key23": "3KkeToq428gXCUF6y1tK9i81d35R2gJ679APgt1GYfwGdQvVSjASQoLVkY9XFeSFduTsit7B2jW3pDRdRzEBgLcP",
  "key24": "Y3HGL5CKsXMPKeqjrMWLkxr8AgtqspRmTQZpeyoBVKdgCdGH7BWdDiSErM1S8iZZHr3aKPsURuz2jj7X2MPnHFU",
  "key25": "KkPtoHVkD9AjgdjVxsuXoapf74HEqymSAd9gbioKTKNQ2CbTsrSWSeJPG8CQv1YbMqd6PhR9Ckig76QdAekkKkS",
  "key26": "4oi5qzafiYGL5gvjY9H41eg7ca3uBgtC6F1JQaXQkh5cde5EC74zYp6F6gUvJpaRJc2s2Rb6NDE6hW8oWnUU56Gj",
  "key27": "2CqoqqZQjzSh264waX6kGPW1tVHLCJTxYyqcrpgkwqGdHA7AzKB5rLVpEVaVyJ1sHryNhsBHudqSUUZ1DMVVcZd3",
  "key28": "48AvQZep8NsoBk6MMcJF2QWcndZCf89ZXTMYYqwPyyrJ6RVoN74vFSYmdBgvBMnLpXqhXyar4tLdyCdZNzKcaDKL",
  "key29": "ViFe4yam9P7RCfwZnZXQwiVXJgbU8vBya3TdG6HVJN6apbMyzazhij8jVdtPrwMH1xTPaBNU5tSo9xfvygH13UK",
  "key30": "5AE32TiS9BCrRcsJuhNJ62bpLrczm8Vgd88Pit3jmmVp6igMUxmPvawHV6UUqK9H7rhHm1QzTcBq8gk8p5y4BBTF",
  "key31": "2X9XQQLYy7oYKx3GfzQ2objxNYhrtWwkUQe7Fdk8gERbAv3qiDDZ9xVWh3u42oogwFMTV9q51pRTLadVmMdKF1TH",
  "key32": "3Vn2zC7DsvgZbsH7YpR49SMRqFwVRQdqdzN5hwodaoH5wa1TDZNeqMXyG6ndzFpmjePqSSEVeJHYSBiPbAKPsWHe",
  "key33": "5HEkiB27HjQLVTrbSRZUusbU3W9JAYZT6cr5cztLam2erwGYLg6hhTSSmgNdYW87brYFqkhqg78DgoTcCxmmTHx8",
  "key34": "2NqE2WqM7hndsraMWzpmNt6PQzi9Vz9zpoNDKbHAgjFeNJenVKUrchvKhC2aWReKPFftyjvGR5rDwVvbjhwcJgpy",
  "key35": "419cmWzaNPYVMFxE4cz3QBm4yXhmLZk4EeX834BvmQGQMFRBZyvCQXhFMuKgu7iEB5QBR3W85bxBVqmURpiwcM3N",
  "key36": "3Pbh9jL5LX7cDoLNV2VcJ1BQwKDPgbf6bMBx8ZHyyyfjJUBpEjsyfYoysREDAAA8HHbrubkwXPiPuQYYff3ttRJY",
  "key37": "2TQvq3Z8bdvJofJ3k5f5KKbNHSrwLfmkqnhmJCZK2mNii5PbR8rjHKWwgd5vDF2ytKrP6ia6b9bZqeKtbx21EVHR",
  "key38": "24PRnEmnqeijUt3cy6xKdvR2ezUFzn7MPNuhWtw2gKjwNKo6NEVhSaQHmQLDA1iFiSDVhGPcYY6qbqWJAa8kKGfh",
  "key39": "2XJpcFBpGQiY5ZFPDddg4r8YFQSBZkHYdP49B6XXFkQyATguVm4EtGCtUtwg7fTGxCtMenbXJsb745FB1DpW9yye",
  "key40": "5ZzvijFtwzaZZ8wTQvC3V9qAJToRqVL7UeJhRGBF57bGHS8JgtmeWMFfymdbbq7646vLnrEmDTjtjCXpAjYPfVYY",
  "key41": "5mhwdRDauKpLXqeYWsdwD5c7CpQfePhkE54B3nhYAjehQ3y3t3RTQjdu2Rp5WHG4iyuNjgQNSyGnwq1LjCcrGc5v"
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
