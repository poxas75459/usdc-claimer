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
    "5suV2B6fTqXZvBRKNz9W3qLDMc7evcZzzhoZZFyrgncygznCmKdHsh6py4oXf4xHf8GBHDGwv4amvmYHjc5Hpvdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T57VEVAScDiYWGdNhp2z147yYZfh4hazyFAmdqsManVQ2Af3cHSvqDppvXLypHGWqeu55EsLzy5SosgLHqXtQNj",
  "key1": "59Mm8KJVLfwm1qoDwCfGmuZoPNLpK7hmKA4mSax8YMpWquEHwZfn9V9njTvkwboGGGKCK9T3phz3jBAbZJJvHPx5",
  "key2": "58MmJeoBpBp3mgp8gxfzC254HA94b4TTrpsLoR7wDUL1xrtPPB5Xq3VQTvcMLUunTC7GmvCyhiqA2w9hLEQQCmpF",
  "key3": "4iN3kHkJMYL1vnCLzXPW5sbQJcZ7pqDSQhv2tH32Abc88E1LV1TpJuwiJTL9CSU5suRJq7YnRvbv337C4mttVWqw",
  "key4": "2vnZEWiKstZN28wQcFBHSTVjhEQ2oCPmXESwLnokZHTijRLhCX19SnKopffarqeCYhZNvR5nxM8c1i3pZz1EGBxr",
  "key5": "5nXm8CB9F9gQYBwsWe9p6Lv6HNvEiNCcfsicanPdSiyKmHutRgH2e6ssoP7vZrBbc7D3peLhBDTannw7zAVqgCdw",
  "key6": "LUAp7dxn7Wk1Vap1zU8RJc184P3RhrLYELRKkvp9gRPqKBZWL8UWC1KpgupUtYdiAsUpMvR8kTVSn7qmfytrYnJ",
  "key7": "5cptHhcZAKrZi1nfHKhRXbVM3uVQk6eKrLQsMd8NZQMYNafHZPB9aCuBbSwL98NUYRkfbH3MRmHcCAh9ZBABsSWg",
  "key8": "2oBGqwSVF95jtfiSYnzYJVhofUQBiGLeGadwop4i4f2dCX7oeStWxbdczGrEHkhnVpJzUJHPPjjz3z7drQ1DBoSZ",
  "key9": "56FrLfZyYcyN7MixZaWvmUzegdctkecLVaCjKHN2z1DJQu8xRUVfDgTSnKUE72r6PHQrmTDZyNseedyiaBP75pMb",
  "key10": "3EesRyWSRyvbTCc2s6bxzm7rwK5S34mYXGpq91wsMvVP5bWM7Joxt8kacd6mtDvkLygLRPoopKQjMtHr5u9GeMph",
  "key11": "3ViEV84TF93Ti4XP5xuKgEUKyMD7dfyayAfSXG6WEjUoWsgEpKeu2vEwjud87b3CVb36J4ziRQwQeo4vMzf4CEuo",
  "key12": "36f7pLwhCA7YXp8WP2cq77vv5CEuVaz4YbsqbVVtKED96CEAho3PaJaRvJPLaPoTkyfJBGt8Po5XnFFy1bpixaRd",
  "key13": "4ksXQqxfnoj2V7YhR2ZaM3Bopi5vMP8jpD4bTWDYs22UETUtiq5dx1PwBx9B4CDAsP65buENk5RMDV8quG7UM1yF",
  "key14": "33gokWT2WqjHGVyFfK8C81dTu53nPxk65aAJaS8HW6ALhVS4ZnowdkeUg1eMCgNiMQD4GGbcKbdXGi8jHP7myVKt",
  "key15": "5JHzfih5Xgkjs7WosJoQ5SiAFjdgN58pkJMjzQTcgXh8RVWsrPbrHwNxiTLDux829GaR2gnp4iR74cq6aPywkQy9",
  "key16": "67kLsPnYdsptDdLfQ1wE6YdnLPpxH4sFhq2VtEcsbSqqTGHqt3dPGADHnqJc7jwrgbkQUJ4QH4Wsq1gt281AWVmH",
  "key17": "2agSE7ZE2ouTZ2vw7EqWocebJcV3of9hWsLmnsY3aFTK7FFQk2CTJwfCX8FbP9AJBUW5vGuS7T3izZn2vbcnAyuQ",
  "key18": "5YG3Gp8nEeJvgRgjstg4MnYyhQzUUK61WW4eAZxb7te8EpRuciwqEUxeFRiZdquXn8z1GxvAmEZ3dfbjzFZN9Yuo",
  "key19": "45RTVEmgBBo9vFBZFXEdguoZj27Vin16a3grjEjQ1pmZXVDg1ZCcdHGN4uepzdRvN733PbhxAXdiyj4bUBRuXGZV",
  "key20": "5jS8WU6Gs42PD875Bp2VVnriu4M8c3w5SaYrFxSvbmcbH2M9dD2nyWJaa5QcrHPUNiSi9pSEpGXuJRpjWoTGrNfs",
  "key21": "2uuqsYXu2G2iqtVyGojR6DesdjpRVer3Fgw2sXuezL2nrgs7DrJM17NkF4HRZ1jH58Gqjm3oPgzDuGw8effRkr6a",
  "key22": "4j7ouUbXyJjHNdC8mvbVBpJWZtoRCWqbAyzetNk9Y9267WfAWHHxJ6z2wjst4zkFoCA4ArETSd6YZf3Td4tJqoBT",
  "key23": "2F4yunh17wvzXHR6Zhf7617sF2opGzVtk7YuzKFedk34HG6VoNK3c9p78ZetjJvywk2MqkNQKhv2bDxpSUdecLK8",
  "key24": "tUUDnm9AbD9d8c9EKc5SBt4s6UUGk6vomuZGkJbB1jfCJwvtawZ2DkNy6cSJUTQqkWGFNHryi47iEyK2VjaCqSX",
  "key25": "3F9GXHwJT2fFoGdu4R78urNFQPhvRgWSsEDkfLE4MANLxgFS8n5hha113YEbbDcVrUjEa9mXJfFVRVkDn9xCqzPt",
  "key26": "57hKbgc13njPYg4aJ9TTEsk7hkMnjyRudQREPWsvsrgeZZnhhnpFhaQgDwqfRaXiyeaEkiVNKd8TRmyKnXa2o2UX",
  "key27": "4mdGamhQcjSuxf9FnqLqBfRWbK9nJZVD5DXrGUGcUUjteyBrWEcqCvrHLpPUSZihNGo1o7nZa5EEyJEVS864KQYB",
  "key28": "2SuZs4aMF7gBoQjwMagb2To8AdtVSUta2p2CompgNRG7aw5x4FcuPvqUDF1Ytp6KafG4UYdCC6aK6EDaoH1QPJen",
  "key29": "TSW7NwLweRzTZ2aU7gBwsjPtq5wRNUTvV8Ak2aVAcBDzjvdGuGurNRiKPFpzmb8wb78ytfFYYbLo1PsLjSYLPz2",
  "key30": "3wfEKGfuHEQGrvnCEBVXmMT5wthoaTfjfPhP54Qwr4asrmQQKie2BSUz4u4kWWoMH6Roh9K2C7FLicwVHLH2YM7X",
  "key31": "3k4jL1mjHd6fFJNz6ZCX8hdeqvgPUkxypYgCShXrQETp8ZRT4DnJ2RpJDUSdMRaVN9sWYGp5jUevESVore3GVQ6s"
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
