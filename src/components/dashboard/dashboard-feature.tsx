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
    "2bN2jjvFuocjxVUe83pM32z6699ri25RnReKezFNPKVjNQMBNB8a5tYU3RGQWu9DMQ3VjnhdEy6o93z4or2MARH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gaoFXxBPQhx73km5VQw3x1SSgVNjvqViM8Do2EmEJkBNhj6GAt2P9R6kaWmQiLu1a23fLknoiqF9fyKf3WVbD2c",
  "key1": "4xGREZMZPUGYzskX6qRhmx4sZ9oC699AjGAaVrVTyDyWSDkB28Y587tbVMDJeyFLoHSQGzd1x5SQvMSmrVepJjqK",
  "key2": "31eMcxMMBtHhCnZSyC7bJnrQ3upxUxbgJNU3oq2TRLJ1ty3UntSShpRMHSFQz8upQzpXNvKDwmsiYDvTu6Te69Zr",
  "key3": "3zYSrFgTCDLycdoKv7exPevmKLg2pks4osx7xJTK1drikEyQoLBD7fVCseYKRmahGsDfEd5EtVrAToXWtEn8ckvL",
  "key4": "5pSU9FwU5Pd4KYXN6tcHSf9jLTSofUmSkkwT7CnQMfqVP7MkFpKSRX6txxb6btpj5xdwdTxLh68MrQn5DoSjNkST",
  "key5": "4sFrgaFqj1z3yFgBNdtaU3NhPuw861MkbRR1jht9KwvSs3R2qbPCmqQUKtoJVVZJh9x6Kp8kSaaTf7xwimHFnr9e",
  "key6": "5wSUkk67GUi9otRCkUTXztVgm3hiJY9h1GCZf8ifotfs6iidviV5yCn8B7DJx2t1CH6hmmYRLfKadZgzzfA957zV",
  "key7": "35RcjQSNcvSppqtXgTfrMj6rMMvnRrysNBfmLUEomkzKGmgQggtXtz1SoEnQd65J9o9LZ9t4dZLiy7UrPvXjwzVU",
  "key8": "3Rs83v9XEbo4a3APfFi9fXdECsRB3xfaZC73QjAMgKbvpmwxvDdcDyrHVX9bFwEyTnax72u8hJJMhhbKExJEbpHN",
  "key9": "4d1Tw71q9XuUSCxrJEVT3NVhLer1ppLXcU5y4LmFu6HrjF5QdUgEyoSy8c7zihku8SWkwTa4GyM85itwqjUCUFzx",
  "key10": "8KAMxUB6pfZ7JLxa6BNzTMeshG6sESswtHJURk1RH4F4UprpHzSgonDyPhDdBtzY9nMrap7HaAmYYLfUYFuRWQn",
  "key11": "5WH34vjHLghLVX93nXyVzSK3d3G8jEeQQEbMRnyy2gFP1W3QkmjEUbuSPXeCyHL3U43wKFZAVAXdfvtYqCRZ7oyU",
  "key12": "MmAK9Ys9xpLEBjqTD7T3ZpVxdXabzPa2fQ2f4wkdWdbd1pbZ7NtyCxyGpqphpHgU9YNswcNdMjH6AR8n97u3EZb",
  "key13": "62BthEhuRTEdJwC7w2bGygHdg3SzTDDwNtycPgEsKYSwaSM2SjnShiCErJqPToDyc8jac8Ro8hSppBD1U9eqxNtR",
  "key14": "2ZRt9kmGfYZjxUdtiHPXw3zAUoCyq6VofrL7AgFr9KBJ1GBfbteirFx74WB54N9EZhUrjU4vjVfveCvZaXpBjDSm",
  "key15": "PiZ97CoyVGAe9BygdgFUWXJKidPKhPuttX9bCxqMid5pMRUv4aDRFCHNro3Qdi1z1z8P6ELrmFocw5GAnNyJ78B",
  "key16": "5xKqKMR9sJbuSormhLqmfDGCkPg7osafMm3iP7XnVChaieYvUTer7aehDdMChJbFmzGZTo759Vx4CxHmxZLo73zq",
  "key17": "3saE3fN63YF4izSdGMzBzU8ABoEQKapf9TBhJipo7tWheffbj3cTCwnFKjcbHxU46vkpTCW2xw4PLdTHtftyqn9q",
  "key18": "3sj82otRnVhu2LBXXuZhKh3kL1VMAMYEpGq1K7QRi7yVgNYZ1sVG8BXj1BUwoqaedLwygT6BwnNhZZ28GmtqVqqc",
  "key19": "aq6NfzKHFtbfEtr3fdWvSciuFWCPk53ELEogRoqsi5FaRvWs162dTZ7GPacLtxJFZfa58m2BD56C2qxjRces2GZ",
  "key20": "5tScbLb29F73WfnfWViVt8fxHw7SyqAvsjR25ZVZ298YVXRZPzKPTgSZdVnNfh2QYyFBD5shQWmaozxkdCQe6ieh",
  "key21": "5nnx2uyXweJi9jqJbsvh2qCRJZCTH7NgJrcKtrCoZZgSja4dHbHwoK9wcpXv7moA1GSwmvmKM268EfobpbdfxzNa",
  "key22": "mevbVLTmYhqYmzSZAip1yjHmQyyrM4qvJn9Je9YSPjN8LCMBsZqSzC1QuQhKj62ByhoLuQHxc2mtfAgteaZKkRG",
  "key23": "5aEgn1VDgeQexQmxvgivt8A3ZsHG1MvD3nNLJLuRmMVfCtK2XTS7CsWCd8DovH2qg6qN2jBttaNUe5eyEqxnswv5",
  "key24": "4DGfmbJFaPnU6TS61EvEsHqWiTDzd7uijFbvanAatzjHDS4PT6meaxuun8LZTC9VG1ERdqfQkRRiqWzUob3rTcpy",
  "key25": "hHVA1dAjkK7VVcM6eocoTN2GZAi3V6MM8cRnSEhp2cLwmXHmsyczQcPv8TSieAb5BNrhVUjCwEn6DQw4JKtw6ZZ",
  "key26": "4yyxS51Ri91u3GUzERGVgMT8KbHRgwafi1sZ85rzxivugnP1pTHiydCEcfTP5bPbWUeVRh7GLKWD28iFZMdDbGWr",
  "key27": "3i3usa822kutK5GJ3Z4QZrCMKLdfLQ1L7ANa68PsQcriyFT4qcACGe1iJ2xM5DU8ddPVBdyBmApctbQeCU7QRYa2",
  "key28": "5kjMS2Qr4iKT5mhfejYnkTKKFDq4htZUwejLHpdsbNW1pyRawNbvcuAYv1hZDWEgttnNhckEmSJjuL8npHoseWas",
  "key29": "5fXPDEyzLv3vuBr7J8AczJG6w71ye9zF2n92Y7V5D4C6S5MGRPvny3XGFcBKfKkhBTsTdc24nNST8dMQnp24DZmQ",
  "key30": "3zGda4bBQ9768z93ZqmMdRD4kuXy6iuiRbL5GcvBEUudQj74YJtzSMviUyUTPEmkTsSbj6mFrvstCTY9cocRu6yg",
  "key31": "QGA5SpyWFomSeAg2kT7KPRXLHUSRAYc8K6xVcNPeo45YzAikGkDrVZcW7wwFwZKTTzXdDhfx7pfJcGaPSs7mhSX",
  "key32": "5cLFuPbkrBhsgeaukbBRqN5bvHVeEmy9NUBQfcJpgmmDbF76bZkbSF2PiwEnhdms5jAK8X36k6koanhFeuarWqFx",
  "key33": "5kCyzaoRgL24NkwprxhtLevccN7j4WCdXrzsUdVJqCK88nJunzUFGPHD95GSKJWC97tg1fjL9F4qzKrWPLXrwPam",
  "key34": "4KVGocHQHJ51K3UCV45fnwoCXm2y9Gac4V1sQwe891gk3TfhQmoWLF1f9wwJXXJ68vPYfrgJg9cGcj7iModD8zvz",
  "key35": "3ZHtAp3X9aREp4DLuUhfyhjGhoTrkNGPMrtQGfKvNfSuTu7GPMKLL5ZqZJJsmUEUk4aHr3C3Bf63dn8YreKeuyQW",
  "key36": "5gGTFU9i7UDZcEWncZUm5i4Sy8ryCCV9tcEkuz6haGYkVmsDxAKkDbbC3gxcWMu7tf1iUsZHeRVYauy6i8KQhw1a",
  "key37": "3vbinXt9tEgHMEfAAve8PnzbB3jwJUy5tFvTN7z3yT5qw7jCwohCWzhrrbHsEntdeUmvFEV8gmiLqbenLkkbQLki",
  "key38": "3JpaDjNjah6nKRiHEV3fs94m9N9EPGCmNHHXhzQsAkU2oAPtmBgNvxeBXCzyXq2zZqzLnBMNSh9Pij4ZjESE39rL",
  "key39": "H1mgDjUiwuvFRWupfnB4YeR8qy1hmeCeGB9QhYqab9E7WcEPvF5UqxasJYBESpFujLc2XkLFcJPM9mYP98THJZ4"
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
