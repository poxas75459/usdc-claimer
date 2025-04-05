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
    "3hz1gCie5wTU6ckFhHewkzMwLgcbPMdmdc28AgUEUXKZpScwKDXn2yfNaH1RT3L9VK4WacXm23xSvpBqZ6W874wK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZYq5xi1uKSfXWqusKXRvbeGSaiKEPLwsQvcbQPdK8P9wkkNGSrT8oS4T6JjCSKWBfFyfDA5DkKpbufJZPWQeWJj",
  "key1": "mNadivt6VtNx7ZnMMcns3EWoBVmMLPtkfWFbdQv5ypMtofDvha3NvbhtGBXYY6TRLKpgQnTHHgapdx6zpLQicdr",
  "key2": "2jA3ywpNLSDswpowgkFEyupTttmkCXirDc159HmexjsZSUr4M5CxnxDXPt7oQiLBo9czwkkGJwUUdwKap8zoBNaM",
  "key3": "jzFygigS89RPFitonC9agaDH3pVtwBSJtdLYK6sosEVSnosbCxGRnuVqp6ZN1NZttLoLTNTpmchsmN2a6n6hgka",
  "key4": "2WLaPThE3NuHeNvkTE3iptq8kkr2uNBEzSF94MBriZHV1gmKQQuFdX8CH2hGGty4hcob6HLmgzardidDphy7vyF5",
  "key5": "3iLmhwYtfJdENfGi2zXdo3ZtuZVvUeFwBjJDBWr4yy2jz9UV2auTHCEMSxse2aM7fvt4P1qy9fKNi57a6vva6xrP",
  "key6": "5DGCDLCFawM9A4PiFGGjGWMqCNnL297aQyXun62spDN2U5gJnG6uKumFLafVHUq7xWRMohxpiitQm2ZBFy3629xC",
  "key7": "3MQt6zpEPhB9ixFWg6pKgFdZDzk7YBJ84MdtYp5w8yQM8yP73A6z7PiBp4YoVNE1iHDLw3kkEqE9RB41msdF4Xw3",
  "key8": "2jig2yLVKQT2FJQW7At2kqkCUP1bwec97ier2kwyKm3PhhYMEc85kJJ6DWxTK1FEETUv2ts3omn6EEjyoEJhh8im",
  "key9": "5tbCqK4Ai73JD49rYuntSmeFsj3D4iuMEVoVgePyfc13kpwM7RXPNY4wNkaJaFxCkYuqzoa1kwC9ahg1SADc5u68",
  "key10": "2sg6u3aB1ivpMtYJxxFKnJFiqW2nabcUtPFXSa4kRswKqZxqn9JttDSWPjFX4neAcu9tGVYF2exJfWMpsZnMkh74",
  "key11": "rxb8gV5V4um1534JL1oMAugs6B4FPsTCruNk6Z9QLFHnh6Uu4zktSj8SgVANVnWkqLxLm75Sapy59oFENESqFHr",
  "key12": "axySrFDgdtf9geygJYy7qVM54pzMh52UpTAJeuLPMuQhBR1y3XzZ9jbCw3pVtzNNDEvNEGhtmaFqtov7dbDNN5V",
  "key13": "3YG97uWdhMrtQ6cZqHwFNNJ1shjrsfG6Wj8SmFPQ8hfKyZvdLpQRvDEUqvjoPPddM5of6fRKTgkfT1eM4iNUUghK",
  "key14": "2FQ99aGDggX1vpUYcbcU8wMYGkjU71pdFqw5feEGhv22fCaw5iQ1iMpmSwrQ1FoMrP6w8cEz81MayXQPwHH449Ny",
  "key15": "SpWcrEzHkaAHtTMBmvB7vfQVXbv1TdAP2kGPX1DMgt1fHxz2cg6nDbQNfGc29cARj3a5cfeCpvZ4U2UYTvWJ2PB",
  "key16": "cvBh9fxBMpXnVQh7q7iD6XpYjxGLu1bsmkSwcHY1UxoFmG6Ria51Ln5sMWx7ErDirJ7VS85R5rZFyHrhhm8mdBH",
  "key17": "5bVG8dvmY6EdVe1dcXwyxG1rsCGyjPznXJ87W62ZWipZ7M7fdWxcw8SHUQ7P3jMTDuHwh5h2EEURKUjuPcpYGTvp",
  "key18": "3gDvsSPAAQWh5YUwaD356rJAgmWKWY22m2F1TxjVsQEbAu4gCz8JpWmf3M5NcxHgbaa6Rg51gK9gdUpRSeQT6d5i",
  "key19": "52kUa5DSK4KFUYF6d83uYXG5QhEdnev4Z99CAbupfyaaNWkwfN3tiZfciewCdLtTZ54NRocsxFXfR86ainPoL8D7",
  "key20": "3CwzobmXJrZJM3v9qjg4K8YRpttjzUB8jkN1PjjpuTfrpaRnNmHqBraYcsedEC3nDCeAmGqngXECsPTWxDqt8WkE",
  "key21": "DXhHugZUTTLGnKazSGi45Joh2EfHH64Lwb22WfeEsmWvwhmKgtBioA6oQPWqcq2f4snygxBUj84LLRVuy9Dkxcc",
  "key22": "4DaonTLsMUNMRNRnVU2DdZ5mJkygZMJbHVWyEkqQ1oZdtj3VLVNods7MV2mmz6Cewg4zaYk8YJjBPpoGmmWgWHxX",
  "key23": "iw2ZmmGvaGUWwWM5enLaHmvgHEVPQU4F6inDM4psiGCuzhnsJkWHJcPxnMTQCFDbaLA3fJXSn6Jf9fY7VJKbdV5",
  "key24": "4HPVB6rKkutEe4E4gPh87r3TEdYc54BDfpWwQUF6icpzcynqNWxh8cAS5z7C4ZYr3Ueu9rGtGeZiJxfDQ1jgxwkL",
  "key25": "3c3z8jRep4uhUChssYpf3mi4WLLGWvssUgCDmxowsVVdEciYFX69qhbWHP1P3JJUkaPqJxmozBHjZ1yPbyPryQpF",
  "key26": "4zuERyr1iDQtp21sZc2wL8p5aDDjGjFxxsxNPH7HGBTyM5rUCFTFERgRB98sttareDnCzhDvC3YsqiiYQ1FuAhp9",
  "key27": "37hqHG8ByDoiF1Zh58jcv5veRXAM6oVEQmzPV5AhvJy9tQx8fLMzdwCpQAhs3wppm3XNT9oJvy3nps3mR5aW485E",
  "key28": "4L7wtqk4PHUTA9RZn9gdCSVqbssv6gHYJifyKc7NaLcfwoSwqCSuidyV7WKMbwCtvEpbPPrF4jWkTVCGgap7TaZt",
  "key29": "62uKN75DMPkHaitddRnK7b2yur8oVri9pBXgFeDX1K7eobR8qTTpFS79VmES7Pik9prZKa76imRkHzaKiMTfLmES",
  "key30": "5XLoUpV6JmoEwmddGe6p2kkcZMQM4QvfXuFMjzW35x7bveverfPGfJdyBGD21yDSxfwBDWCvYmHwhyM3ArV1tB6v",
  "key31": "2pwU7bBcbnJzq5PoPCG1gTY1WoV9gB7SvTFST71ozgdAptMTAjpVV8SLDsZEEcWGnoWjKgLG1x9ewKFDdavUCnUm",
  "key32": "r3rhacxsbpjT6G9E8X1ujgVZSGDhP72o5CSrLdUV5cRFPAmcANRK61i8p58xCWfQsQqsTi81WiWhJNtYJdHB6QR",
  "key33": "3Wan8tnZ42smwDkf9ve18VaUYAEav6gqbbKS9HEyroBLpe9Uv7bVr4Vs7Cv5FhvYfSrH7fUEDA2kC5DpjDs3TC6s",
  "key34": "3xQFe1ekgUd1sfhZRYGztKm9ptGjfgXqgdXmTLoNUX4wcz5AnXUAV4Ph4ECbg8NUnCkNsb9w3dvtw8qGPRv81XdQ",
  "key35": "5trg5xTP5kkXg3FzvjZ5eNPNGsie1UucafAi8R6sNaUs5dr5QcNcRAeStE8rhjUw9KaHXHDTveM1GfikpQvknDWU",
  "key36": "W7KRTUYQu8RRH149R59YYFubKZ5uRDabtf6nFYToti8bBdUjNcH3ggfjvuYUuR2nQXby6ivsPnjm6Gj6grJxmaz",
  "key37": "UAxtm3i8wGYKh47Fs13qXCJwnG4M7L51MknR2w3KuaamuHpErUWZCqvs7iER7tCarNyPtin84Aw87mzTEQe3ecj",
  "key38": "397D4EfzrL9CfLiveSfLqQq48dqtSzKciVU9zuXrBnXW1xss9jj9NKgbFcGfsgtDUJ19N2xMAmGq5T14Fr8oysvB",
  "key39": "45hrKJusQGAfRDvoMTuAJJ3yVzt3L3sHHszvhyLGSuesNNMj9sZy2z5DKFb5LexYEGEhBYGDVxGF6wd8EbMBpJ4h",
  "key40": "34E7ag81oZszLcYDY3JQ1Q89vvV3ZB1nKGkVF6Sphxxk36gEpbdrZTHhqHyEdWc8oDrQM2hGxmWUkKnxxw63weUA",
  "key41": "q2sxjwfEFXpyUvazagZyspc4owUQxDSsT1SKPquKUgsZXWkZ9PGYhWywm67gdUW3D3TAwvd4hQidaQX3KScm2CK",
  "key42": "ieXa6QFfRd7wMa4xicrwjzWWnzNpPPCg5Qr8cAbEq3CjsikvA7sKDHRSd85mxcv6DpL8XrnB2f2shZmeoaFMMmM",
  "key43": "bDNAY8Y3zeEiJ38xo9qwTevgnXzhpfLLtMgUtgij8MdBSLa8MAgTZoqaALBZYq9Ka35UcFpVUvE9gwr7LtNj3TZ",
  "key44": "46qutzX2pKtdUvgycJmw8DswdsoQwYunXDWV2PmQbrgABS7abkGuvGwvZbw6ow5xsCCHPfNCn7t5gQG5t6HcANRM"
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
