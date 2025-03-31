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
    "N4NTj97TCTZfsWZppTra8m5nMiaz4LH1BLVGdzMX4QT5moWkFj8J9xkNCAb7gWxvZVmMH9FWFRZL3jw6t8YUJTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZ2ybgzvTR3HLQL6ot6TcjEmkw55urmNYgJMd6hT9VhpGS9mSQyRc8p3wUwzZ84f6eTwHQFBWij3qdGKHs18GJ4",
  "key1": "2uTkN7D1y7GuyAgFVvVHjyVFiBaeifTTp3CqHbLtuXDrwwyijx6kCrN4QoirxeVNvD1kZnKSRnAeCFLUAQG3Py8J",
  "key2": "34c6NrfyZxxgBwrKeSdHvxi8yYMtcqn47NgVbYCRHpvBzMoTSifbYBCU2MpASRzy5M29QSsapykbtEEmk1wbtYfW",
  "key3": "5VKTGmhu5ztQTadvC92bMXcqHgtBMJP3M9EMSP7DmTosPXRfwNMZJ8rzTnE5Fhuz11Toy8cyfsz4X6oXhabyVzen",
  "key4": "2SqjvCkXt6d5DRiwKjQFTuQ1DPSS8HevzkmUamudNptPFUpt2ESv13ZSExyNMDRAVDXMCde2x2YNb1w57iAra6aH",
  "key5": "4nLNrW8HqkumNgyWbsYG2Cb9fb3k3hFTDtxiSTn9yiqYCtaVH8FuUpoxgWz8iQUfEX4NY7uu9CcUVgKumANTdNCe",
  "key6": "4eV6p3MxPArEBbtSoTkUgi796durfEXYyyF1bLLmTfHpsiJGGQkNkoqZLYoCWQ7fDHSeuSkfP5bNs1AzZy8NPJBV",
  "key7": "5JMjEAZHTyT86exNjNUT4UUnr3QJgCHV5spwaCnxN6ibUsig9hXX7Cm23aWvzGtDxSwEpY6PsXrm15eNheEKoAsX",
  "key8": "3uXRNCEob71AJ1T9Xjxs7yN9UeMLnWfD2LiDzP79DpNcWoqGvfsgKYCtoxP63ZbJHaEPLyBwm6TKJLx3s1zyjWXA",
  "key9": "5xs6hvxDMbAyD6uwvpusMrtEQxcKWRqKoBHdwBqfcNZugHS17sXb5CTwbXTNxEZPpCdmrGPPqMeHcC4TZbXbgLC1",
  "key10": "4pJunEMCag7mJSMeoaYA1MPZxJmXGW8wJZho1k2PV1j9unFm5TfqpizHcmakKopd7NG6XgXwL3fhKcM4mUKZh2Mh",
  "key11": "3574zPFsnPyoxc6eXCw4tREL4sHDqPtFCCKPvaWeNpDvsH3BExS35qDdBMErDDJuTEyKJGNqsBrV1NdvMYdfuQ2o",
  "key12": "4q8bPJ5beD9Tv3EVzyvr6WYMK7446HQFiUewBx5jK4XzmpmRcBgY8Y2QVC4FNc5vrH5qX6E9pokKztGMuqvrxd2h",
  "key13": "5SiivqnB8JnRRSNnuT3Hw5jmG5rRG8Zop5vYCDR83kzFVT98ryPcLAD2cJLRwtSRDVZPXqK4kTvfwgbwtaq2ASL9",
  "key14": "2vcFV9ZPADyW3syix3eBQNQ5innRnxSGvRsQ8NiVRAKQNeGjXjvf26CBDTYSk7UnheCFhDB3fFLUW2uBwF6kBSCT",
  "key15": "nci99fE6cSa19ax48KpKuaDbERaQm5XDwuTzvES2nh3uk6tciM4ENFfYK6tN5HHChx4mDuPE5sA67nYGAdPTStU",
  "key16": "3WFT5Ym3QWaC7HyFPgQLDyzZQBiry8fUBbADTof6Tg8Wb55oPqALLcMtUYUekiPiSRwhefinXJFy2jzJaY7g5EMM",
  "key17": "4i9V8pFto3DkLX1qkpSXvziAuCrTzZZpFsLGJYfP2cyWciigVWX1ekZ329xyDE2AY9zHVsrwDzuyeTXobQ5FYwrA",
  "key18": "3JWXaHjoP5dWdypjxbtrG8EthHtkYFMXosXRQZGtu7WmuuZj6DeDV6EsTxtXpHrckB4xz7QWc8ToMfTbbwXd6jC1",
  "key19": "548Yud71p3RekFg8ud18gyuwuduRRZGPb97xbgJYCnhwKzDD8CQjBH2iSm6PLzDMA2Y1xbQvfKa7AwWojpp6ewm1",
  "key20": "NyT7fEwVd3Vp6C4xQxYok9DRNSbpU3ArNF6gzviZg23c19Pn2s8f2F5bQtfwspxjHW5bM1A14fnNasmRLS2LadP",
  "key21": "5YhAPEekTosXSPEL7VUuaK5Em4EJqxxcZcjrY2r2uRWSJfideueZ3DLafTkxWn8wqywFv3V7JjNmsT1ybT71AsJC",
  "key22": "4oSCYZb7f1FsPDAz19VRnzFLHf1NQXQDdEAdBt6daysL3RL7rWukhDs8Aj1s7rLETQSzKTCsoRddEqgDTVJfk28w",
  "key23": "4FJXxtHoLGrrpZC4DpoDphXUKiE8WccyvTik7At9hRRvy9onVy2uaZvjfyqiM6A2GM9MTK36jPDtuaZw498Wk9Qd",
  "key24": "65DvBvawSoZNpsDMaakuA6oUthv9BQeN9dX9dGQHHFhnQr2NeM8KTPuGxFng8z72WskVh5R5D4gJTeKxPxQSZWqH",
  "key25": "3chESHVVZh4T2DSzjfDWnD6mnFxfDEKaDUWtzxAh5JKAucSdvR5vYuKUynjz81m3c7PJUnzH4DGtgdHg8mvwtGJT",
  "key26": "5pRgCYWMEsbUMr9nhNPDez9PmdRjcW3QXANF9k7u8J1Q6tzAAA3W2vsTx1hmaemMWVf5xSFKwGLHtKTudnsYBLCm",
  "key27": "ukkUw2AQkiRqyB9BLTAiTB27dnDjUuHBcCxipM3ZygVvhZS62VDvyR1XTMVm9fzEYAcr4rLb1k8UanL8uaxKwCo",
  "key28": "2cDr88KWZMss2g1tssYrEPUWVWYwe9CmkqozLXEf17uni4TZX1B6yaXfiqzssPXaMBzMztze5aJwSGvmpt5pJnBv",
  "key29": "4rkFWuuD92sUmn6tKvBnrGfx24zZqfuBZZZtXpb9LPysifVgcrbBakzbQi55yd4JbS35uJcconCyV7VJwSU1Y6vU",
  "key30": "4XrCN4hJKLkEGdhR15vNhT7aZXEj8bwMBqFJdtWfiBhdAJcCDoeXe2dCxQWxgvJ7eKEK4ktcDs9XNRCrTfiHvNuQ",
  "key31": "4MdUtYWMJWUzR2kAMCixr4mbS7d7S6AWCmyCK1jLjuNqrV3whcjs6BFMo4eGgvXm5GycEVZNLEP7BsUQ97KLB5GR",
  "key32": "VLGv8kADZHEtgKVWS3oCv4KTpGxec57JJG8tsv9EyQWJ5Hc7sCMhL594JxowCKy9nKj63bvR1qxncGkGTHRV2NV",
  "key33": "3XrvyabcJXEsjM8MqWa5JZWGA44PJherqgGskaEG8AMXw61XVsZSQ3ZjghiqQqZ4paxcaMu9qEk42p62nrtuafGv",
  "key34": "bbLDL13k6TFwsiP5HemNaP1sPK2zi7bBDqnpBbCTR8H8hZs6BmJU2fUYnkPmhQNeaF65kT5p8gCQspfEAedQo4E",
  "key35": "3paz8HgSVqPdFiETH2zqBbo99u6fu2b5k9rp8ZpuPpvmLuYgQnfBscSLVd6VxCvDMuVXh9Z9R8CJjJauVeYHiR7j",
  "key36": "5UeRuQ6opkFybsteotYPk1aanHEnxabAMVVzBmomcbXRsWJmKnwdAthncUsv2LaRFXWofmm19GC5KLeAYoA86Ros",
  "key37": "4zBqojv8kSgSFRg3Qj7csNRAwdPJyyhNs42vbrVH8hkfKPQKdTsyutLUah9D1qHQXb5jfbnCpUtfrye19PPmudHc",
  "key38": "5i2doLCoSGg1sbBoR7fqE5QSUZHgnWhKtDmeQoWgb2GM278PjFDc3WkkW975Fa42PqLTQ4Hipdpwx8uzTaRqqcWA",
  "key39": "45r3L6EE2Ra5CpF52j8EcyNKWauqgAowxkR7CVRVVxq9H2nmC9KfacDjv2XGZeQyXMcKvkbMWSCENSoury9urcTj",
  "key40": "3aviKV1iUhJbAJVCXTMAfKEwXNSjiKsESmPb672aVf7fVYiPaa34n9wyBmiUgmfQ4JLHdMafyXyLF1qxf717Yic",
  "key41": "35LgXyfQ9woAq6iUDwzBf18oDZyJPx6SvLB6noKuPJvsbvVrh1r1PhSHhgD5Jx69W1KE3rxB1gsKSfbrwuCn4Ah2",
  "key42": "5Rjr7GYdgEGS6t21YD6tT3KJiTodcniArJw7DcoWaFhYw78c4DTC3ctNZGcDhC4s87nJ4HtMFKKj8VpVcdUaZS4D",
  "key43": "4zDUgkBoShK8wM5VC1mobJYwriXV6Ms1CtJWXQWhUenECoV3zU8Z6jwvcDmRsQweArz99UAG23k1sjZoKDSzyL3v",
  "key44": "2sQ2bBebWhGpnuMmLWZqiPp6z2SwxynqkHM2o3YKVApDZ4DQgUCgGQjW9R4g1RXqknrBFhbePCs97GrZK7mrSuFV"
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
