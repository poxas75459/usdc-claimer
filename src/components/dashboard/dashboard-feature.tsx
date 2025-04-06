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
    "2Jf7xA3EufwHFomZpJk4NzX92FPHeN24wwEg1w4c7ineyP6Lakh9haUK33DL16wAmNpq5dod4YwpvaTiz6x5D5Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkNP6kUnb8JUEEDDBNNp2MEsw2R1NsRRYLHa89vmiDTbgWa65fdxwJi2rjCEFqXCAdmYc5kVEDbCQZvvtVwXhRP",
  "key1": "4einCMPkc5GveNQiYamPK7QRrwkCGPpC1LcZvCij2qD3myYJokv5DUsZP7CEQnJEhmLLrmowJHHMZuZ1VVvFVa22",
  "key2": "P6KXV7muEYZurhXyptMuW5nanCBjRxaMvpBsvabT8nZrVS1XNMusYSEXrSYcjHQXKk9zEQGiwT6QQ7zQ5ky2Dcd",
  "key3": "3u7hgAMCUykPCdHM8XhW1nYPbX1oS9vKZUKqjUx7YYRctQFJcw7i3zDC3LRUHiEN5Zq1uGH7uikdSCvJh1FCQeTw",
  "key4": "3iv9sAgqRaF7DKQF24r32hwpBN8rR1gvPit15HcZpfpstSp23wrKTM7LAeC6ZFWYccC4ggwunsvPKhPxnusdcGTt",
  "key5": "5BBoZGttbb9SWWtXQnRH17jvhYkJBNkuCsKKLfJeEtUfVydMGhtSsz9oVyMnMQvbmFj4pVswGNT7EyJrkLRq84nG",
  "key6": "3SAfxhfBorsMJrnFKa5iGtTPzPbaxYUMNQXpU3yshWetw4Ww2GuD5Gq1csXMqdvGrWM4jNxNjsAAo8znFjS4DGxF",
  "key7": "3TwNjSDrEJggiuYDUuLJ9AEEtFsS6Zuo13rcBYpy1sQs7DnpGaJY91hgteuKtkQ6uDP8pwKvbgQg4fwE69VrZnTM",
  "key8": "2XTXADTVrVJk5YcV5ustga8cfWFNogd3ni6ePTnZhzxo8xPh2MsNKkcTZ5QyKKEMS9WofKWAz3Ro5Pg1qZBDb9tt",
  "key9": "41KYLMkXBAHxy9tL9rN6zY4wTEgR6dUh13ZNtcHEhkAn69ffg5p4QRjs1p3geTt3LexrMiuxjW9Nfeu5mNLvrodr",
  "key10": "4mE1uekZyqCg78iEPEddKBmFtvjaDXjq1LHreX9bqbbZ2E8xGDRMSjFdzoqBHup2vzquuSZEYBMWYMViWhoFpKce",
  "key11": "4MeghomfT7ZJ5GLYVLisyT5R8kq2z9R9rxQU4NGnXqkKseu9e8ZSRjCDnwnVW5aUnnKFbaWXoeRrfV57hji2JBNX",
  "key12": "2M2mPcMcCfDFdiuUo9EY513JCi73Az6hT4ZdQp8WPhYML6fWXLSGhUkXNvmbDrF8EEabT59GXWqTMoSZmCq7fZUj",
  "key13": "weY6FA2URZkpMme3s3v791pKwqHhCMi8rUNALNJ8eBfGfzUKQmEMGKZRGgwHi5UaDCJ8tPWCRcjWvpvBiU6Fq9Y",
  "key14": "HJwxR1DJWZgHZRRyJidQvXoH6hiDM4sHUE59LxjzAnFoMLLDx6gUooUvp4CRPfPbWW8HLBkirBE29GKvZ7wWMQM",
  "key15": "33MZLXMvTzmUmJUbWcN3oTkxtPXx2DWNNSRiax6uWmDKwXQFq8CHZkhWdTcURBMQckwVAgNsS3BJCKdivMgeqN4R",
  "key16": "4HnKHdHCNTw3FzTkpCZuEJvLp1V1o3GHWHyPf3K9Tu1KK4DeRHmk6ihcB6y5keQ1jBadxKTDfU6DfVqhaLPogXXP",
  "key17": "34hfvvkghnbR8sXGteGE7PjS5ZmcQryZ3MT9y6DVgVJm91F3kxAMKW95Lw6dR1VqepSvgVs691MLqT5hft64YR6w",
  "key18": "2FqoWiExaRpVki3u9yZzygNHuE8YyNJNYjgXmcbjvMcsH9caWtC3TzgeSTAEBhysejJFC82fs4G195cHeFrugu6E",
  "key19": "U6X24YKcA6hvxWjKYq1gaNmgezuM6Ryo8pXmpFeZ8N9CKn1BUswm4KgY23gwRXoSWqgaQx1WG2cSfnAcprSjCpU",
  "key20": "bEu22FYMxaAeEY34rmgP2Cx5nu5DJcpGXgcL5cCsBmJmr4omSDUWu3aDeTtcL193kSdY9dH4bkPoT2sxEpUHZTk",
  "key21": "2d9PJZB316huCZwcMpjb2qRWm3VRpMc4aLHGzHFM9jyEYyoLjMH85qNP1fh5qRADcf33N2RY9R1jmHjqN9z8k6KB",
  "key22": "2rm67PkrjgS5i1HwRzkxZjf3kLFrrHN4SRBioiVEcGT5nPvLjNXMwwsxBJbtciYnAWdX2NiMUMHEp3wiqrhqeZGc",
  "key23": "5oNTWuSEzSyuHHQZy8EZ8P71p2o73euTSXMzBC1mxtgNnAVtW8qwNciyuawYb5wJEjsdHcrQh7T4x9BdSQoWAP56",
  "key24": "4NEMyDKy32azgm73v96EnLkutWyRx3HvzKZSKtg8sTxCpE8UWW8ksBfuxxKUqeZPsAks8sFYPq3WkkXKqCsx3QkA",
  "key25": "52GQnrhSfbHPNdo4sSRNGMNu9gMGxeHNgCEcBSW9ZYEjacpe3ZiZY9Bv1voDaJKLuUBVwydaLbMdgvrHeQTGTvn8",
  "key26": "2h6kvQTsX2pYD6co3kneoT4XFoZPEjRmBcJ76qZrz2FVZFqnGBTTibckbSDtKU7gR4BjA3wF1Tr3FFb8XnV6Yz5y",
  "key27": "4bqo6s1o3BVEsEYx1aJDQxJHYzRphE9xaLxfJLDAgQEeiX3JpXJ6r1q5A1exNanvZbmpne6B2Kr5P9Ahw5gV1V9J",
  "key28": "2rY6b7NqQk7xDccRQNsJcA8qgeAufKcB6FYa8eZE6Y9JHfzMZfAhp2zPuxWcfhDRU3kAxkK7mQTCeSUQ249kQXPc",
  "key29": "2273UJKXbKn9SoqZVrV8xdUGygHceeYzTQY9yneS9KGXYHXGhemVrKXY9zzDSoDKSw8XPkLA3md4AbJwfkq8oyy6",
  "key30": "3JzUfSwMKASbQhrDXpRT8j3Hh9LwrmM8ycqVVtwBjBKyXHnoa9FTXuYkBMBBtsP5kjzgPSzoyZ4KykkV8tRCAQDQ",
  "key31": "48HcsZAnYyyhiViSwfZ9n47reoihNJhdBJBzYBxqGtMePFTPGJSkYBbQmvSUYcouoWiGzcDBottQg8pr14o9tpgm",
  "key32": "MaoUf2JfU2ZV8CEZCkUgMLpghwk1pAmnVd6uMKk7bNJ7s8TLcQRTzKGdj1mKgwmSPiKBXd5ijgvHct6xst2KDmw",
  "key33": "5ahaMZKTUqALN9PjYygRH9YF4Jh4s62daGuD4fsbHrYaW3sFgCLjWGhtAKpAzPX2jsFoyxSgFzEpRHYk1HEkQ9WR",
  "key34": "486vmrcGxTRaZGGLJvzjbNtpuJd4M6KpfRk1pwjd4iVP8ghYAywbEwGC1HKo3Qdk4g1NbBGf8erVP68i2KVdJCtR",
  "key35": "rBSM3yJpS49fr135hXLTcCF3aN3p3CAj9Yh59SzKL26ocKMFSF64USmv8PFMmx8RMw9c5R9aBjJdd2ZApbgZVhG",
  "key36": "3gg4ATCyFqMiHCbN3jLL9wxoKLYmTrL6dHRnC5pTw5DqH1Vk1QLtLuuusZCCiceT3UBapW3mvA6nxb57kz9EVEBh",
  "key37": "5VvBBv6XU9rVcr2t51t73xQZ8Tct3WUg235TQ4fx2fgQEuQg13fML9WzSTN52nbCDUWup2RCmeNVWCTFFnm7okQm",
  "key38": "673zJzSKSqMk6W8cebSQU7knmmBW7KZGkoYNB3zac6rH92DwkDyTRW7cXa9esrHachLayZzYivbnJFjKYqSf1Gmc",
  "key39": "4WbLYSnae2nKa7v1wL4rKcYix3FwXHvLUJefd1fAMrEwYGrkW87NFESTvR99yJoCddupgGRLEnrRGFDSW9ja2YPP",
  "key40": "5FL4LDkQoRCHrpjpvMjQC3e2Qi2sHmJn9taeEo52Uwu6GCscUfAPX2v8hEH5w4eN42H5zTuRjKJJ6gVvsSL5PqCP",
  "key41": "4ejSJzxyA6odkcxDjPFZkrYdFuvcS5phCRmtsqyGyYRNEJQNsXegZ5gZTZFGfwzm66Hd6fR9ntiwr4cikyWDNyNZ",
  "key42": "4fy1EtN6QF8toeXpcLmcEVraDqZoFEHqagYidc4kozqmy43UHptY7HhBXeH2UVTwvLLAcaBW2P4Vtk8fT6a1hdbC",
  "key43": "31xMwLkUHbFdjGEF6yZt63Yk3KBFzvZfoEP6jNvEy2kwbRY4oziFpGSz6c12Pvqi9y2EV642JwaYHuYHANwZV81P",
  "key44": "5nDyr4nhxBkqxufWF4xQXShwagzFEK7B6Uo2bJuZAv5cw6djzxhXtijTNN3Cxg5Dve5sF26pNYW71aSNqPFj4Gx8",
  "key45": "5UT7wrAevJgy9EirgaAfAvhBiWi9skHZHj6tC9gMt32WYRDWPWSKR1G3FZP9aEySHCYpk4CeCQZXAYAQSMFhnaZi",
  "key46": "7vGEMivgvVyHMutHFzsfj3JuUoaLrz4ESAteyxc7Tx8TEmBLbyNkx2dG9emwf3LeTjbkJRoY7t9YoRAQwv1JVtN",
  "key47": "WJH7RU9s9FQYW2UcicA1LZvSEMpWJeVohuSSiEGK6PnRi4MXpZLqiAeMiMAPY9Q85JvUwsogzjXszcpGhN5294d",
  "key48": "3m3qQRnn65jkLbJa7Bm3FpLeBpNLXBAtgFovfhcGUJnhZnQm2rGzRgg4pJRQ9mvn8aZSqMgajRKiL6hydc5c8DDD"
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
