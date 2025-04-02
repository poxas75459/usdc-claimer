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
    "5k426epE8tTqCbpzLVu8n6Aq3JfnAnnwsz95BG9Jvo9rFwiSoMvL3rg7c3xBvpLK6UXNdWUzmshg528i5ucJ3wh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215BWMWhQMENiYmG3CjD9fmqoX2Yigtx3kfENLnUdtWyL8NCY2jMJ4QuCsaqFk1CF7oKhgWVXwSrQBTuQzZjXpmL",
  "key1": "qD4WkKFo7isqQr3jgNNgvhU9XrbHpPFqWRu44FKKXhWwUBriYQHttMTPtGon845G13opkX2gJpqtWAwgVKn8KMt",
  "key2": "2LYsgoTWwLSgPsB1hunk1Lzpr5sVdd1uADpLjvnCeEgyR6vHG2aeALcWKAoQj8vcMLNSigf3cpVyk5MMMiPbQBPb",
  "key3": "5ZYxawtWzuWfACPJcDy5b8YoBviWFopgYT5G2UgpKJ5NdWMXXfqk39LVhbrwhZtZmEz1z6dfYWRySVSHeZP6sz9d",
  "key4": "5MUGxbFefXbjXatAZqYKw7L8pasCD98VNEN9AqqpJjFiuckzYGeUUVysbLw9iRdHgnSc1NNXhxC1CXiV6XzbvXFe",
  "key5": "AZCfJY44w8zRCHVXx2fk8a16HmCTpY5R8hEJEfRpfDguJtvb9jD2N8iJfC21ujFRZAyxVyEoyrt33r1EUBexctg",
  "key6": "wT2d4e8RXvPX7h1crpmAeKWnrLEDoJAvbyX5ij6wrdUvwxN3zX7SAdZMt7xgCtqA2GhGzppMDbc3znopdQv23rw",
  "key7": "5j6x2TVzpfCtLezXcg7f5rSCHAKHL9NSPRoUdRftNj9R7CZStNQYzuksKbFDy8gJ4M3iyupsnGhtdaGm1S3j7RyD",
  "key8": "dmvp7rCkvf1o1KNWpkmQANvMbJMJaiktxv4ceBafpdajGrzJntDeKxcDvW58sSzAkJj3vXhRTRafsXMryw9j57C",
  "key9": "38WBMTrtW1ZxP6AThjqQCCydhTjeHdL7GXwzAnEApspyS4prTPb98M9gxNVndMpKRgaMNsV9NkK3pVzwpqh3h4V4",
  "key10": "2F7iDG1hJ9o7eSFc8e9HJmbbo43vruTRfLW7RrqrWwtex1X3EvJyo3j7B1rD7t2Q8Zxqssheam4cohurXJRoJoTS",
  "key11": "4LPJbe1WyA9QZxyoJ4Q1XVZFNapSP5uqH6GT2Hs3ExA3Jk8y7sqBg8j12jRnrU9Z6GcErJJgv6RwbfgK7gphFw1Z",
  "key12": "jAM5aoWzwZJ1rPMJyUUJP3Jyq3uP6MDn8EFWnBKr4ZZu9bYqzLKP1hpofDhALwB4ngNhyUmUtujnQigj6zLXjzF",
  "key13": "4NWaMkoyx2whi4MrhyuKydqCtzrGUf6kMu6i1EGPpvjQppvfd7C4S2exb6XD2NQVCRZo69XEWmWzC79NrWRDojoT",
  "key14": "5PCUs96c4mXGYKmoesiBdh6TUp3eJ2SZdWCiGgBvbbYFj5KzVr76R4PTQakaZ25dpBBzz9oUrxyxJyUbL9BfhaM6",
  "key15": "61NAhCrnRwunjpEwc7dKnNV4xUb9ETLyhuF3NZvqFxg9W5EfGBvVctqVWRxi3CRFNDrZjzDfLaMTXFzPmTiBUfbz",
  "key16": "3G4gVP1uoqGJ4XpMeegqaP6UkdpGXs1N7GTqnkPbYqWB4bt2bfu1Rw9gj8moNyED55pDerscp3KmUN5F6GK6GNbW",
  "key17": "2wrknXPX8zbgoe2H3Me4XZ5AxYMGRPe6KPoF5G2ryYauY1gVpTFj88mXA7MaDnA7F4xXPuLXA8ppHHQxg9DVkSaF",
  "key18": "47KNqeA5L2cNMRNqpW2CftbMnQYCAsbxQ5g5SVfbvG4PaBvUPjEkKoosASZRE3n3oMnhe6KpDcyPMB2VXvS35NnF",
  "key19": "27LnYGv1gksa8Sp65D7TrXGM4DQyAm15J9rA9sH7KQCHeNBV4Zp9WtGdmheMA47BbU5jpF43nYx1F9TeaYqA6zZ9",
  "key20": "31DgeQihTjBH4MrJTX1jX5xb94EkUsaiRaCMM3nnXPUw4hfeJwAyVSvxMaUB4ByYVfTt1Fi6CrPSUPXAmQhgHmJi",
  "key21": "1DEXP7cdmnF5DEkMmQVpP6fWJRGQh3HzdrMKHSZJEktkq4bpUzoRw87Cu2k1US8PS1r31QzhfHNT6gYNUiyXXrh",
  "key22": "5vmNywxRxPV59ZK5GS6oZdEXtsKuHtW19TRXG6JRuUQBjtzBjH4GDmo4W1Q1d445v13P6bXikDXkLVJVmFgUXUWi",
  "key23": "3MaMyygZ7JJiktCbgJqx3CV1kHXzmbraAPNeRT1gzH5mQQFYB1uyWauNdZxsvKRb2ygqGJz2GZ4M8eagpD7v7uWx",
  "key24": "3koyR4eTg7nURkeY5pL3g3qJNi2QMmf4CMhf4NRLEC531jYvfFgXDELkaFQEFiL4PR4UWD2jw5vEgNZ2PqESrKrM",
  "key25": "4LbALM3kuUvpAQr19mgsVoYgtZtNTJCAxyEno1EK6mCUfKEbaMx8QJXWQzimEi5ydFMhkcS3jQVYtkDuoyK1uV1F",
  "key26": "4LEKNWYTqsEFVBQAbd7K1a58mRJJGWFKECHrfPHCzcwhBwmHwjd5p9nHHXJY3DfBsReccRHAq5tFY34m4ghkx8dt",
  "key27": "2G5WYJK7kV5cWvn3dQjYLVdkbdp6ehyAX9d4GbYQypAabPMM6Vp6dak9CDShRB4m6DEADCjFrDPJygGKdPaxDTGz",
  "key28": "3z3Q2vYpbZCq74GLEXN6P7sCFd2fuptGcQ9xyoLjt5YEr48UNbrANNN5ycMJypDXtNpYtVLsHCzepi9yk6gMNkrq",
  "key29": "2HijDSd6EJGiEFcacS3sRLExRsSN8XoaDSdpp5x37Tkeo2fLdq1GjJebmmMdoTAMcKFBx2YVedXWjTv1q1jHSjkv",
  "key30": "5pM5SzaopSwskNDGRsUezdVKXr3Unvw8i26sHse4s1vNP5m9ZEVBjFouUfYFtKi3BmG49gQAqsffCknnob9VFG7H"
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
