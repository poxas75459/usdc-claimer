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
    "3tC1yinvr3fP6gfyXfevQC9xJTwxx7UqzUxcE3ghcfr8WyyzXsMjcDqASeW6u3vdeP8y5GsyrHDRkA2ej49uP2df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvP7DtTM1d2rFcZy6P1AZXYfAuAhsSt2hPeoocfh6oMTP59kyQixZRzYzDw5zrQXzbpkAKjRTDhpMC6YvLjSyP9",
  "key1": "5N8zzCtE7uQE2gvZzfrgMqCCEddNy87EsyWKDJEN6jyRjswEaqHB28YThoWrdgwHBuUtM7eEHExQFASb7KXwDJkK",
  "key2": "53o55KLT8t5vCGcZyv7AKbE9tycMMTF5RNfMdRkyE9dpiLtw4FKSQt9pFkRQ8CozCrxw6PXTxWGxQUguLTmuzso3",
  "key3": "3CKtZ4SUchZFtKVuAPr3sD8rL7HRwhHx8QuTqzTVLL54TNSoQxLnRZ38ZDjPXBctELaTrFvMZSDPAT3s5JgARPpw",
  "key4": "2373wHxPk3fuD7oL2ntQowCsqXSmL61j1ooaAX3SFWcF3Tt1HkcyZtYrZXau62VnRFz5jo3wSbgME462MAYeFswn",
  "key5": "2EVULxuHsHRZFvjVJYrV7dYJwvp7vrD5GpUsDEpsHuu7bohNgcuxq2k8ZHcxnGtndCGjWTKG95j3vBSxRMD6jqdC",
  "key6": "275jDjxDBdQ7UJJSZubqtzUTiRAxKNAnjG3ZQTpgW2Xa6ezq2rvVmZTW9ScmwYkh4D4yaVeZT4FHvkyZ3HDQaTjn",
  "key7": "36Pd7WAEp4DeP3wkRuFcpUjG94BMEFHveN1ks5X3JoSMPSZSUjRbEpwSbe2svDufXXq8Uu5qHHVppneYu5QuMZPX",
  "key8": "4p6gZvpQbiEwzH7EkKx76NvqY5BZEfUKmrsubaKjtFY2fvnUDyXbj3Nn7rqwWZCJvDJcLvamczvKXbGeoUaRpaug",
  "key9": "3VEsLp6iP6dSHGS9yFqjCEKPvtg59sF5PNZWUy6ZNhK6bVnsRz8Gz6Gt4ivz6fVWgKFk9c4LciveyQ8yQX1LU3QT",
  "key10": "5zREgspdN8aLUZBwuBBTwd9TDrkiYGFbnrj8f5RnQBB1AGuqF343rmUH2RQ5ceUU9oyfEwBVqXgz5bZcXJXvqmjs",
  "key11": "5dvGjSfUB16Srj1ouKLbAwFFGsfKwoZPfBQFGSPeCF43PywxDjdbWXATftC47KJQKxV6gAbowkCfchUDQpw87iwS",
  "key12": "4sf9cfFYX8iU6TB7jhkf7Fg9h64bkbYowHigES5kz5XFmw1Ekn1fi57WnmzFE34kLFVqVK9Zs4w8AAEZAt13Lc9R",
  "key13": "jQoc7isPdxTMi9VHnmvveTKRFrrui14EuHc4DeQW6ZUyjpXBtSB3vk97FVfXWTnRebFqPz7aUMLXucG3Tm537AW",
  "key14": "q8ZD3iZ6BoUEUj7S8f9yGKnW9ucrS6fcUZ9172TtQNyj3evxZUCwu8WL5ZXzXv7u5bwY8JrmAZfiefZxK9cNVVV",
  "key15": "5BE5yBgwa6Yuchg2Bz73h6dc2US71oyUePyFrNwbF3A1Gkw1dQfm7AdAwtp3TcJXfprwtM8ZFUmPvrXTeNeDrn9L",
  "key16": "m3U1ybUKkv4iqX1dzyr6rpeSg3XGnGzye27KUhoXHM82a7KgtzzCNArxiPoatGix9CLY7tb1YFRFDpXKBtbv3RZ",
  "key17": "2JDFKyPEzzVjg3N2kagyAgnkSLtBRAbn35yx19vNtLNh27wdmQX5WqQTEqwxbpKnfkx8srkGncC3wB1o9QFthNae",
  "key18": "2AvFk6anQJF8gbufixTjFoVcK1E1hDHnnHahcLLYzT3nj79Ksx3Bs6bB3RbZUA9e5QKRohR6Z6rCGdnixTDc9kLE",
  "key19": "SQubGFYeGQv9FvX7xGgSG96BoLd17gQyGmn4DSgbaKGKt7aQT3Bnfd4oiSF8ZED1xPYx9byPuUEr94sESVe9GVD",
  "key20": "5JSrCYNoAoR1hGH54sxezCxPfm3XYatUFhQr9PVDBU62Sh793c3wowzoGf8cEFj598Lr499BDDJqcen8LtPWkzyD",
  "key21": "T2yQKBvckKEXHy91oZjsmnkCgFUyV5sFUTVvnwSezcdQB8Nf21Uuq3PTYGmfEK1Z25StdUtL2NR4kdAsoory791",
  "key22": "3e375oCfDw7vk3dmARsKLNRL3qaNfFoV82gmHZAefCkdn57H44ang1ADSPuACPU9Jw2heMKMHE5S9mEdKGpPH45S",
  "key23": "5ccoom2VS5eRBRtKisUknoY3LPoy9KcqRYjaGBzqHSMK2cvuEqDvwXuZZxGhdHmTqFDYMKRoRCUn7hURnaTgiKLy",
  "key24": "2RzWAFREchDh5tvXgYt9Xxv5cjsoqeDPZom5GVypD4QmPHSkeaxGGsFV6VHUsNkJJ5Q8XLcayJnCpX6U1cKVnWZp",
  "key25": "3TGgfuE9KGSP2bd5a6G6Jb7f8PKow5dLuQbGR2kZwgCVLHBQNR1seVk615z94kHonexcauMU3uTMAd78u4c29V2o",
  "key26": "2hztiJA2ZkCQqVuLaDqLSbMj2Jxcahe7NCJPGzGtapHnWSZVWfh5867XmdDgREsCdpa88MJpTpmRCce6hiHZ96ft",
  "key27": "3EbgdYe1YsncGCeLKWv4jQ332g8Wuw8GjdFsmCMZTmGScfmSwnwcS8vMdNWNsmkJ3kgvX8ifSKW2pe5SRk15aZd7",
  "key28": "5oSuiDpLbLHTEusY9uUX9bAoxVj8XPDbsyeUkHy3EwsxTCRLPNjUV3USqBUMtDmEc8AoQf3nqAbsTUYGy1t7Wft9"
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
