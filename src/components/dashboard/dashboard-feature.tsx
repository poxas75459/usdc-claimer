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
    "2K1j6RoumXzJ69Y2FJahMbSuJ9k2Hmv6aJ4D3X8m3bcX2hhcW9YLhSxJ2pbJvxoPijpinwnZySU8nfg3M7RZ1sA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZnQGsygg28NuEqrJ9WFJLuCMxLGNNdCcrZod6qju4nyghZL8NPLYRgjnqtYNu7znQkSp27FoY1Qeu3WKBe3r7tu",
  "key1": "3EJQUDU22yVKMvSqgiu1MUv9AcVsdA83LjskUgsbd5wU4wedsQk8aLNw5Jw3zMrwytJ5yRdPicbEr1k7eEuVx3WE",
  "key2": "4oUgBhatT3689PTcQk7W848VmjCmpJxrr9dnbJFRkstXm8FCCky4YAdgH2NWzT2hRr5kSBAkUc93CkeA7yC9uYps",
  "key3": "25B3wSJxrEEArtVaFdnkL1T6DpVKhnmV5AuxeLC6bKYo8uQcjTMkhzo4oTgGnj2PMmi8sac535i661Gj4X4REZhe",
  "key4": "4PoYgZMkdraWzSA1HUBR9iBVwN4XkeLMyL22W1z8Az8DVa4EWMHpf2sSbHhGibCLbsJVbv4ee6b6mpGWwoESYpVj",
  "key5": "5WzdbX443CG7B57YEDnG7T29gB4EwhUXae9yU7aVRLkfPmc2YWXYhiVffi3bFbgEfPvte6epet7geNQURzmCuJDf",
  "key6": "2YzpSTUjtqQ5NuzPp2xDqBnQx1gWqNoVcbuVwG8PxLgMSnUQd2hiAjrgo1BpmoMrTtQrGJEJdfrUMpDspj9eVxZK",
  "key7": "3F9SYZ56dFBioJo8aAFjuZwESyUq2A7etbp3CiGBuSkWMgd1wTqhLXBiV8d28dExawEfeqBVrBDtr39tSX564T7L",
  "key8": "5gR2Wg5zbX37VC9cZatCPaUL1BVq6ZsHwa2eAHGAxRjFbYcmtbrxfMdBhFeEJkbBmsd8QevfYcPfSyHLbkd8BiXu",
  "key9": "5rCHX4f4jzcCbFiNjjYSzGeXm3Pw223GQZ3zFJ7pzag9hJau4Q2tCDHHNu9cVHad4D4T1LyAoKQWUHpXz6tQcW8G",
  "key10": "4nptBip8VWt7vQqp9YKZ5ZGAWtmujgsKbQT3s7jXVDWVKHVEh2Fu9LjnDfFrWsKskV5bSPTreaLuH9pzj8UTMBUk",
  "key11": "4CLDGvjq5FHT2FJsfwLFhtV5Nx7EYY7F1EYubwDX47K8JCyLxUqNHB9Dsbqehjunm3oMVudBZi6BwYmBjtMN4m4W",
  "key12": "55v72tF6uowwBk1Ud9K7vfqt4o8MtiuAUmcYBp1uSEG5Xbma72LXf77ogQgSbNd55hvP4qvGQoKiHgGruyAWuYn1",
  "key13": "3Hoxs7aQUnmiQun6BmtZaB73Y4Jfsv3BKYUHNSMXC2EezpBa2AkpDBULjyegMh3ZWhbxzH93UTcfkKetzRExpmUf",
  "key14": "2L43AragZze4bS3sC2R8kGaXiVyJzsGtbJgr7v1nXyMcEDKYFvDtF11rKwcYRqb448AstNmkXBXBZesALbcaWLkC",
  "key15": "66GYT8FJXmCavaA4LnZrb7eQkbVyi6dfs89k3AbLFnupvnBF5sP74EyxtRq7JA7G6PkuZbKXQfphvao9XfwaanCD",
  "key16": "3g9ueNc4BgkPqhNrQfU8Y842N64716Hj2BgvxMf92mXzeTW3WDE3APABJ6vTosQQNRDepyhnTdsqCwetiEboMxZT",
  "key17": "3FN7ER2o7vxTsuQJQiLZZvydTeoSY6q3YqWBPq2prRguevjLj6Qa2SCEr1q5HC1TAEbw58WGUCRNEVX8bJNc52TC",
  "key18": "4pJ5g3kbnM3M5QrCsbMTbCJT88szPhzkvks5x98vSUuenPjqHwc25YQn9yB6va4nJL7Wq8JFCthN8VfkZahSG9pN",
  "key19": "4tB35LYQN379ZGMDLKRe18LZ3847HpmXZsnEwfq6VT22f9EdfQu6tokUXvebHb9FFYaWBrHutnM3mp2p1eDqwgjy",
  "key20": "2qWZfaEx7sikz4v3eU477ZMkUAsTZhJ1sFH1oCvfiF7q6edwBJPJtdFqDdE2ecn1XiCNV97q7vAdfuxavVuKvAe3",
  "key21": "3oSAn2m2HAbBcEmEoRSzZH9vyLfMGCvtp1morEewDzJDRLg5hGLTprfR2PCVzyhdj3dDE8eZRoTvf5c21t7smHey",
  "key22": "XnrJvZ561EQC2AKcAa24w3idWcEurYWyGHRbroEB1pAH8DqFgaujccwe8eAYU9tLTkHpARirHnJ5URVbEev7sbm",
  "key23": "5Kvg38XRRsorq5icNYBaSMVQ8HegAro8gBDYEzxjMWiqMJkFqcwpbmSMLsp9PcsfaeucJhHASf5knuDJPY4cSRdT",
  "key24": "2EDCgS7FthoA91ftfRYhMdae9muSoeVM529q4niN3ZoXQ5Sr7DhvTDcY8y64To17juiSUjgM31fqyABACkeN9Vo7",
  "key25": "42PtNmRHNZVV4dxW8Sot9yoFKKmeJfJovtkdpfYYaxQQ4DrRZ3Z2YHxofyHTYmfMjHNy1n3aLQtGZkr3HYXtnzNe",
  "key26": "5LpEiW422AyLtsVdkxzpkbXY8gV7he5XfqZ6hHcC9Q49tkrcnGfJT2PoPbSDiqiYq32rX6Yy3Fq5PL7uMECry8RL",
  "key27": "3VnvzLcME9Tvett1bs15yNP9GvzUuEYfe6FbzTmSkxi9ZWfZjBmwBfbHSfdWqBJBefvFEHAN5m5A2SnuscoZ5vr5",
  "key28": "dhgGiwri56byPPyN4TeVesx6htUDewoNJkwN315hTf5hixJjjqfWRo8zkwDui3QCsUiqoGFSSpR1ZNYhiojLSUT",
  "key29": "3vXznxVyVfu5s8Bd4fseSRd6Ds9jHDfbjdCDBx98i7YyjDZLC9t19F1HrfpMyAHJqjVgHhZb6HyWgZNxb21gYAdk",
  "key30": "2UemuDTQ4or9Lmr6iHERgPv1zYoVriPr7JeDXif2E4G1AjirEphisEaFCUMY3qfK1KWm6Gs2nSWo2TPp3Y9g5zKi",
  "key31": "23sfPkqmUDArv149aS91ua6kvhRfsMpPXVf2cx8D9JMVPkHE5JSVJDpnVf2uBUMVw32VmQjkyCbLi5Qa5WQxXoUE",
  "key32": "4LhFFtvRrBCEKeLDHAejARR6vRYEDBW46eo8pHLAwfWuCSBwuxW4RATsxHaVigdTddYtjtMS9AE5ij6W1W43xMmA",
  "key33": "4fxgtx2fhLrZEHgkKkpzkdtLABwKyDzVa1WAs8aodEUQZqByneJyhucc5BYDHFt1sy9FQBpaXaGYZn1SHYXB3chs",
  "key34": "4q7rafiePbgvjiAzJFuF6z5VaThy5xdoCkB5T6AgFBVb46yT1hCxwovCC7CZqXzYuga5d4PG3Zcv67QBS1SaKFwT",
  "key35": "5AxqEvfSgve2BsFEhitmj2ezKd6PNuFjmNSc8NWGtoSEZWNFavS32gjhmG5RHr1FBcaJbHDiidqGW5Mmet3pinSR",
  "key36": "3fJ9tQYaY4TZ4UsC9Tgsy1wePfxZLi4CPxxfMCDWqveCRAPSFzwLPwrtispNPKUerWD1HuaiiScE7zZtQk3Ux3ay",
  "key37": "5K97nqdXuHDe6tXsGTzUdKRKgitJ5LQHSk6hnrya8EWew3z44C3x6LmRVaxVbtopamNEfqxm2qG9kxTbgC4Beotb",
  "key38": "49cu7Jef9WgoMcXDNKbAqKFBqFH8XLNTnEBwp9zqn1nsn7w1BwW3VH6vfZpaNCvieXbRBuHhMmraJqPmqAiyGK3N",
  "key39": "SEv6bVCofq4HKQX7jYzQsNsFHZ5NRSceHwC2v3JhbLENXow4avXEg26XShNChGcVrhk4pAsuByYJ78jRX5r4t2D",
  "key40": "4XGrSipu13GjhvcWyT9FpDAVngQbZTRwSPqbqWrMnuiP8gTmtaULFpYdJCZNeR3bh9uTNvEGEvkVNSdZLr4gtCKw",
  "key41": "LLmgWRcGZPLyz1kQ8ZeiCbaf1pchSBhMgYyMEXaS7w8nEqFazgr3kRJPAEr5igLpjAq1msn98yYYYMNsoxw7nWa",
  "key42": "2jysoDmXwtFjXhbCqUCNUFUaYFbUqUvCa1b44pkct884RgYLqUhzB8Q3oB1SoUpj3UWouS5vFcWSR7GN1rKofiyp",
  "key43": "27W8V4Gw4oyVd7huxpJuCwmdMDoX337XGUAKLZs6tKUm6N2KcWjPWBnmj8cN98eJjMQkuvaq5SsstNx59fo7ED9b",
  "key44": "7o1jepjRr8ze2nUwrzPShcJu6pNzuuEB1ctm14Cqb7Tz1CHtckKBCDpQrocZocFWudM5j7ftQx3Jp9fbHhuCp55",
  "key45": "34qvwLaACoqydUrazd94SN1jYZCW3hXGZt1cCfmuWMgwSDXf9Q8Tojw9HHP56c9fdS6QwRzUYRNzyGBetpjbZuMu",
  "key46": "FWyHTZarb6KaasTLUSjJM2u7MdMnGLxhV2FC6QjoVzeoqogRGR5DNSKagG4CKCTTaxCwsjcyThYD2tNFrror7Q1",
  "key47": "46rLfC2bwW1Q2osyHkzTDcTVLz94J1EEurfGrpsrrW89B6Eiw7Q7LAVPVV9Apz6KJPt6aYp47btHRvZJutJUPzvv",
  "key48": "3oH4wXjc1xBSoAYMv2nWXTRBhYKpfgaP985LFneoVHWTEjG8CBRVK7C5XTVofKtvv8Shj5b4t1stS1Xz8XR7eoU7",
  "key49": "66YFqUv2f3micNY15XmW28bjxmkwKpDG9uHVQxQUB8Zrhyb9HLLYV7p6vmFfHCrq2eipTDPE6XUWhpC6t83JsS1L"
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
