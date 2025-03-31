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
    "q3ZZ2fhCNU1LgnCrYLK735P5LbznUqLf4G6Eaf7tzBpamXorv5SS3x23jiePC8PqeEvodNxTXk2PdHoPeGsuvWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GsNScK65PUjhvpm4X6BggnLgoj9vz6ddW9kYawrq3DceBGVHRGWFLCdnguhj6DwfPFLn188az3JhvhG7ji8STMQ",
  "key1": "4z2UUX9ANZ4MRfLNgto7aPgCvrhEuwuhNbYtYoScr9ff5i4fx72JKGC1GBGkgVQB7Jn5P8Y8gXYBqvYHGggYWQ6v",
  "key2": "35gLKjvpq8NnCZ7uSYS8BLncSLNNR5RUpDd7xoQd8vrVZyt6NyFdGazfsPk7sUunhUbTHEQzB7kfSvW2RLGwmxT8",
  "key3": "3qYZf15wy8rdEkWZuMDkPH3uad7Brm9JWQ7Ezps783wrdUouNXw8pwWrWQatGBPoABzXGfGUHnUxkaYuLJAmEqeM",
  "key4": "3Sut1fpq4H9RomBnyf8J9dwk9NGJs7yCKvgS9STdLEJ7XABSEnAQRp7mveo1McPGSc1jW3D4paHdK9xHYb96MFdm",
  "key5": "6BmMYJCqJLKoawz184zKH4B7NNGNvuCpE6ziQAETFCUcL7Cy23sb3VT2YKbijsozr7RBNs6kKvyL7jLY1tSdbZH",
  "key6": "2PBCHCXTBC7U2VQXUW81m2uXcWFMHRPnG6rsHKfX86rnMUhuqvMHVGdgwTD6pfSzKkq4MdLzJjk3bmTJDJ5QZ4Eu",
  "key7": "3fzkhNp257KoMrkePNV9hXtBkzm1fMMmNn8RNEhNWyvRWHmAqcUky6woJmaWzUPTZQFwShC6MscjiVYoRsM6wkXA",
  "key8": "3XxiSKoMNW4R4uo65X7nuzvQEGuRv2mhv22eCC7Q2Fo77RZGVPVFtKJU6nJyDVwnLSoKBheCQhsJZB3PwnMT41yK",
  "key9": "4rhmxUvTBR9Z5p1jYYwgGhkKMKXFDBaJeoLs7A5PDgBoDnTTyH2cyeAxn1CsUzpxd1FXEJsyYpLCyZzuGT8ALs4J",
  "key10": "LfJaxZZ31zoprg2sh56QW73TFjr6X1SzvU8z1KaMebnyTLYnQZHcjFc24HVqkrmcaZyzBHrE3iweQpUxiFUG2au",
  "key11": "2xJJz3CDouSEkREZ4qBpZfg2VoqE9ECteDVv1ZPzeAFAFtFhYoEc1M7unCVXuTCgUJxCfNtxBrhjML2SCcTvY5a",
  "key12": "3YTNG2i9LRrZzJQ1RvscD8PwacbTQZV9TmusnUm8DRGo6R5UX2WaqmJgrNppPwG5bJAzYEaMP3dHw9Ct7W6rCDJt",
  "key13": "PwUa28ZAaMXHfzZyu6WiuT5bifaQ5WQd5KK9ChgQY8CYNKA9h2gDc6K23PaZ7mioyydPPEEiaC1EriySQcu2Up1",
  "key14": "3gjWE4EQKfTSsTSsDYAVeZsovot9a27PHs8x5VBoVekc4BDgJ1aZk7MmNtTbH6oACb7Vt77TUEBTc9okVS67ADwD",
  "key15": "4fnqh6M98nFoHZXVY27B9h6ogSy1bThGHhwwqVFmuX67tonxVQNJWuH4WB7L28gdusxGiFAD782p7x2D6s8FLHDj",
  "key16": "2sE5G4t1pFdB4GkvK9q7ojpAZuTASQxRRqP2usTtWhXFNKa9RLYoNAUzcEjtgXoA8Jp8ESNFV7dZgtho7uqAhxkw",
  "key17": "29xQuFBQhopgzVQ63FM1kgRPHBmTM8YD2jhRMuU8md94JaLYLXfDoTFjKmyTYkEL16xphD6NxuQw5pjF64DYbJc6",
  "key18": "4zMkdMux6LWHLdpmKVezejzVpMzAq63gFEYSwMzdWsuq8TSKG51uHogK4PkvwyoWB412vvtB6fycij4m9hPcuqu6",
  "key19": "LWi3FzRUujRmvNF6r1dPbNSRut5yhaAExpJsqeShQWxj6qYqG8ZTbNX1i3F4GatEebfWoABnszivH5RGJz1Dr5c",
  "key20": "2j6wnQTyE4Md8w8L2bnHcim2ejvxYjVZKrLxGKMK4SAtzANnv4CNUXYxWEMmkJzzBpxxk58q3VBLTpBDJxACFQhW",
  "key21": "Kqw1FH49qKojNFa8SHdiDYCLXt5LnKMnn6XuD9DviJKdDf8qYqiofYxVeNP1qFVYYJi8MfYFQxfqaQvGwoEZ6vF",
  "key22": "2ufRM2YZ8Gtj9ses2NigZoiPC848C38CZdtryrSJQQFFjyEuM7gvDRC2PXVikc3TBz2bdMnwXJpnoYuSCdvY77be",
  "key23": "AAhAZmxdSF8dqCaUbFfWxh8jLXet7u75LtQvJQYxhFS3FgDomaBa1KzyxbBtqiVwYfbtrw4Y4R5KNRHG7fUyyrS",
  "key24": "3BWT7VebUnJ4tx3G4r1a6i568mGzW9C6yeD9NEhDK5GpxJqtoopdUdh5y9hfKySGvePJxGERbXTM2HkjzifLr78J",
  "key25": "51AL329nPhXV9DjZntmiCRc4zuMgjfoxUEt1mzaUyCFWJ2tFQjh8tcN6mri2zJ38ZYNBPB8wDcY4h1dXyczKFiCp",
  "key26": "2jvUsYgr7PMYms6uTXmZejm2vqjyJVNBBD6fTVYpbMMjLJPuZJQwhvWKK4BZyR9qLKY8aSes96eweJX7rEvYWd6e",
  "key27": "3UWzrhjkZp1wQVaoQyMPtm4K4HhHJGrzg7wiVoAjQzDt8RPdApFvrGSQjN4Zrd959nvY68ChVudG2gBfZjqEdikt",
  "key28": "joJqb67WyUitVwfqFhGJqNARrwTyTnZFpVwF9WYTjbhTrMSGSjfRv5waFNcxqKjRoTwGHzcdofNqcf74pcpUoqX",
  "key29": "Gwcf6ETGqwTivmteMGuGZrpDBE3sZwX6gkhmkyNxLpJopQ6PXUQNLh4jhhMWAD2ysrhBxWRLB3XmoHxKpYjrTLx",
  "key30": "3mSNZAAK4XHV6gjtZtNMojZZU5HB6Ub8ThVWY829SPPcSufJfCToMDWVcsdUwG3MeE92Q8GkbHCYFnqg5ZJWZ1tn",
  "key31": "2dViyDEXMkx8rCy3HLEVj9kuK83AmJChKWCkpzUzVntdoa3H8gEsScfoLzkgjowy3HqVgbbXzhaF6eypsALBWYHp",
  "key32": "3bLtjpmGFeknBkHHvc9ZZKwzVf2FHq9HN67ya15KUMF16StLh36xy6zbh5qbcrz5n1p4ERPwb62UUB7xRUT9ZazP",
  "key33": "TVVrk7YRZoFDccT3xD1CcoeZGjLNiZXaSeKF59GqRfMWuN1ZD32EJzp5f7Ur9DA3t5CxiTjPxkCJnRSncp43ZBc"
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
