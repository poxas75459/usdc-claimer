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
    "2V7aw1zqKctmnWQPCwGu9DVaJfZeoi9RxQPsu1N8H4KijpWDMED7uv9LVkGc2aixCBTuVpF6CXvXJ53fipK24R2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBwPuT1LNAaxzGYUhrxRHFAC53eZEpPWanujavR2BPRG4g33MucX4UrFYCnBSzNxbQ7fKrVeuXoXCzPv7EoKrmj",
  "key1": "4vwqdFWH7Vfh6oh5qsAtWscRV8eFjZ1z2iD5PExVmWS6UZjkXFCwTU5DxL4KZegq6dtT5TkeLW96ptcPcNjWewQw",
  "key2": "32bbmK3phtLr1PrRAV5sSWo7pViuYFEtMT7vMxZgA3ZWSe4hRBZ6r8stWUYaW4fpvt87KuZjwa2VQVdNbAqLjNhM",
  "key3": "4FptN1tsvdmiXmzZb6Qt5yHJxktLJXsYJpkYLXkotTFf7c6Wi5eaBNtFHjnADEgkXz6j3ZY7TPq6zng8gh3V51GC",
  "key4": "64TRFqWemsoniUhqd2fuDbXb3UoxKSwk1FdBpJpKHdWbssPFe74VZtoLkWmNDrRew7wyyjZeAmRMAeC2bdEoCKZd",
  "key5": "2zLTDfMHL5hVHAGr3Rasv781Bd148WPFeNm4JSrjWDwXwh2w99PPwGPheiSm1gELchG3aQTamRkQ2FtCrJns5a6F",
  "key6": "3NeV56184QueyAFKTnV62SrX4gJkyG7Y6yTJNn34kPgMUmbjqYoYHNAAUMFSDFVDSz7xW3RGbxqptvUNbokcQkfx",
  "key7": "3LJFQeYQcPakcK5TpEf57iXsFpfwSWWhFRinQxX1qn5de3JfTFHzcajCpChxTzj1n7Nz9NveuYUYohPBVTKMwQbN",
  "key8": "HpWExbJuEMYxggkmd6Q5AKuAhveHwf2bmTq3moqAZ3V4f2mZCYqPuPydi1UXZ2o526xYKNpuRSHsznVvLh9gvdj",
  "key9": "4j8m7Luk1mTjcLq7yHLtxvqedFNfyJ2nJCAhDtVRTSGY2FhaEgCpDWT3dKLYnKsKvUNQa2wW7uTwAMDMka8a9YqZ",
  "key10": "2cBWpM3HizpeEmQkZeL6ZdzZCzKWJxdtWmqgsqwTK6wv43vxroZnh1HEtFpjQLqXF6gtQ27hkwQhGtYKMYHuEUgh",
  "key11": "3BEiDT7wXnmxPZ3vEjNbeRA9BwHGdnTTLbaxhakVCrqcDig3oprAExGcA4dMDn3w4PRDb7yRoVMgk6ETJ3BRA4LJ",
  "key12": "3NTEs8AyR3pLh5f5vrJqZyX3KXR86nYw7mruCGpKPBSPqweexT8wVCreykrwErXeg3bjmpZ6UUibaJNXVxk9gVzn",
  "key13": "3DzAfwtuiXtnJi1Ebs62iw1F3DBPqrZ3nXVZALzM3zCw9tfzVuiF53Roi6NCinDKva3TZDbdRTzv9pw11EVQwgP3",
  "key14": "5P6vmpPfiLjcFYEdzRH4LZM13iS9yHxgHarRnBohWdEMU6EN89xP3Ha9LX9Eitb9LAWyKE9Dxt51sKAxY6W1TkSA",
  "key15": "5pEJ2PxEPEp3WsasrT2xGuYWR65tjx2aZLxDjTJMHb7WVb7ov5PJiYpzH76zrMkxY1RrSgnBrigx5XrZjuwXFFAv",
  "key16": "2w3FMCHTNKNTXihEi3KQUidTsFZH6o2pqymfE51sbBm4sDHnN4nvHW4tMTzffNW78EoToHLHNzXRB43QtsZfPCvt",
  "key17": "5qhuCvVRyQZA2iQVcpgbxLuGUvdNoLABmsCgsJhDsyBgLSLxCBnspWuESxfxPFFGeQiNW3zzBpK4LLPmrY5x46eP",
  "key18": "4qBguN3qv9Rj7QaEzGk4eA1E5qPcM4AmmvH4HZrF2RAQNtWB98x4j6XjgMyNhrM1fUvAjQBvtj3SoiHLNunzTamk",
  "key19": "663g8quBwmbbGVBn8UdB3GFgqn6AszP4Q34eQMyiDhcHz5iSatL9oWrojvaGKxirmbRWKLSqts8Wrjy8H3ykbkTC",
  "key20": "4XYuMzXcuzzykUPmFSpTU3Z1P8ZQYTfX9g5BzdVUxXNeLMTQxQFqG4BnVv3R2Hew1EUiBm3THqzR6LWX6MsN7te6",
  "key21": "573aHgzaiBTn4WueH2BRbtTLwo2DaJZPSGW9kGZYiC4df6V36mh8xJrbPTBAJJicMSb72VLAaJP3CN96Hjgt3MEv",
  "key22": "67LAcQxJcpciG2NkZ8vEYW5SE4s7BSaXdWzfCkCV6dEcXjzbd482JBCZHG47gLn94tJGSP8DKtL3SJgJz97nvj7B",
  "key23": "63oUHngM2H8eSsoFYG6JAW1XsQYgWtPj8pMmfamvnhWh9AGdNGbTKFpzcCqLZdAEyc7oxgxopke5sBv2yL4D5cj1",
  "key24": "463mErDi5uV5fmjSAbejUKhub1DzkAsVGmHnFUXVavMz5diJuS8yq2aF393uwbSuCHMTqovfREDPWLeJpkTE1Hk5",
  "key25": "SCTLqzuoAVHgAocEjHy4oKJsgWTcZDA94F8jKAmrEyCNZiLs6cdnykUxiHLLqNVNBF6hjS8ZvBf7M5hwnm8EXcM",
  "key26": "3Agi4Ja7VHXdjLEu6v7yeqaPaMGPZWdz7rcxTj5hgeP8N1NssMDsCc3647tunZ4C2z1dk7RS3oXU5sUQuZHef8ym",
  "key27": "5myP8y3Gz9QC4kLmEQ7LRS9omffpqkcV53Hbgd3qgUtE6vQUsjitxrVh53hBBTegPEhxKVdcLJy4BFnTKseYJw5k",
  "key28": "4i5vzjYbty3x9nRL2gWNjuc9Fai89p4kqYtQ5CrBKMFNKAYhQYpNWwHH83g7Up8eZ75NBd2hJEzvK8GgbRE4LtHd",
  "key29": "3NPk2nJ7n6A6XkvEVkeF3ZhaiUj3tt8d6SgZUk5Rg2UGorkTWTyDaq5SSLJ9iyXYrSMcRCrELqK1f7eeE9jnebjr",
  "key30": "4TQpG1ZFMa3GjibcDPSeyccqjok4s5P4jWcvQkBahDVqKC479k2ZQMS9ReXomGR2d4naEVmX7ALZEwxm2hDcp3wz",
  "key31": "3nBm4RFenrBDPA2czEm8d2MtXix1CakEm2qHvv4PgSb8dxYo4fh7W912HZFF4ZfwBZFqngkFZyjM1aVTgDUfojQN",
  "key32": "5V1wZRy4tdZYhrSvSb5WqnfSmsxsTe2Hw1ZfjYNPLvzycCUp2p8xjdFq3h8csf8co9sbhrG1Z4K4W7jP5kBYwPEf",
  "key33": "2B1L8S5SgJyq4XxDnGqbfoa15ZWbsZmtjonQxt1n3Eu1arcKyKoYeWvjswdH6a8LDbDzMdciP5veeitsdaaxBs2r",
  "key34": "3FjG5ptsFypmVZzC4vuBZTYF2i2u7i1vA8SifYMysWywv1SqykBu7Pt5bdromBR6RVnKvnnoDLpQscQ4Y4DRE31a",
  "key35": "3NdXS5GPdPqUakgJNJdkm6arYmDGzaFVAWyFgUA23Zn611qptcimTUhVxkG7i1kNYyNeSxBuK4MQnPHVJ94QNxHD",
  "key36": "5sRKfairhd3dbLRaTXXxGuDNseztjmnuE7tHtfYsDwR9ecEs1bMhWT4dX8wcmdZAHpFqQT1Dr3mqUnuRauokqzb6",
  "key37": "5cZaJ4pPQX9EyMa16MEwfeT5yUPbzbNWqwPVptjPcfE9ibv7RYs6ehyc5rTYYoKxYJbsCj4hpeRYqLVZpdiW7odb",
  "key38": "37ExvqqrgEVzFXXhbb8snYNNTepKTpC51pY7hkQV2XAJVpk7KdSETe8NDP2hxqzoUqWksEwiTuXX1Nr8hhAgDom2",
  "key39": "qndt7kMDAvymuEDuQ5QgEZuk3zmkKurzLxGeyszcKDYmuaietugyxUmzCT1fQgzUtzbp5BazgXChp85jHXGt32c",
  "key40": "jgGtmhZbecToEeTfutWuQFSDmRk1J5MetjNYRHvMQkw8Wko2CYVUSGFCVfrJGVNddh7eDDRzT9Su9Zj7aEyGFJU",
  "key41": "2Ras8UK1gxhWEvCVRJKEScbfskup3VjxYhdm6UqwPxqXLqV7ZrjF5DcEoNtUcRbLTfB73VNwvE83cKeYtyHeuMZm",
  "key42": "zR4Lk4zv2pQRtiUBxnjVytAZXF1ZJYcs6hvseNFgrL8HnU1yN9EebKxbCshmxSYkoQP5d8XNbvBsNFaptDcZK1e",
  "key43": "42Uk4NMJQpBj3ji1pGz8QRFb72uFQippeRfurFqd3PPP9CDHAbdjBQsUz24LhzVGsKHBQ1VrkVwCfp3o1odijjDJ",
  "key44": "677vt3oCmNgbb1qhGm31wSSWAQKFfXx5A3Z1vpnBBM4WzZgRo8Zuh9f2QUfryHhKRsKnBQYtVuBYXVSdqncp1rKc",
  "key45": "4xPMyXsBfYjkPjjbQxeScpBbEU6XYyWxpFZErpkNVwXmsrYeyExbum5RsayRDUeEgJ6frz1dFbptiMLYw96GTut9",
  "key46": "XtjAAGfwy6vj9ECrzDu9Jij4R9hBNBiT3siyXU5tBF9B1W8i8jxhJ6RgFuTuioYQwqxZTe3RGKczwmFKV6zHkJM"
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
