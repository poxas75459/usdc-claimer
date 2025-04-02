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
    "24uLv9Dss6BRtbnKCBQj8fBt3nRZ2VDeX4QQX8AZsEbFqHjrzNB6R14J7Pz5uVQFMdyNx7hgT8rRyqQLojtDNGuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJAAYQ85eA68a5SfnHHRHsN1G7gEDx5akRefFKGLtPxjjtPuVHRmyT6Brdyg1AQueoB2Yo4RtofMQXsqzVXjx9i",
  "key1": "34KEUm77xMyUXWzUfq5BJiTLaSeKUVNUvbRCe7Vq2m76uu9w9NKDKtSNnGKbQ9ocH4EXyex1cM4pLFnUWvbbSg6P",
  "key2": "5Kk3EMLxq22igPDDsSkqaPDaCmWh52VSrS6PcBrhxKmEEpJzzA8DjYauxL1qSJmBucgb6fWobRNzQ2VgSGxuS8U8",
  "key3": "61C5kxmM9SnTGoRvUSnRTGEJMvnBM5LepfEhoW59PciScD9AQZoA8mUSSifi6xdSD6kybPBnRf4syJVrYzesah6i",
  "key4": "2Z8iH1QzTxbi493isdcd6Eg8u9536YWegVCd1bZvbHZ1NccJzQchqG7R1KHF58ungdtNhAXKaWoq5bzjUDH7gubS",
  "key5": "W1LXEzf87B7afD1eSjaXwsNccJRBVkdHJPqfhz4bGLKf1GohrhiNpuXmy6SBzb4Yob9tvKQVnQuHNHBqmdcPmte",
  "key6": "3THL5dWUuUp3XxtgXpvEhcnq3YKFj8txW48TMX8p4GcaUSVryGx8c14AgDBqRM8hWjANk8ihpnCzgffdaTymkNQR",
  "key7": "3JzggNeoxZJBVVhJowt9igkcUg8aP5fBSn2Yk5mSH89MJpa6PBxEJVZCKNeFGHRtGQxM12XB7JX4wQ48etjhdeQQ",
  "key8": "duehdmmupoNNB5u2R1y78vjjWzeChirXFJB1ffzfXgX9GCTNa1zkjggbTYS6ri3PiJPd37E1JxDFQsjWKmsPb5d",
  "key9": "45CqbB2pW9LGwvfNim1Phqmhn3wPDVBKFoxMiQpcuCPjSdxwR8UCvTpB6FSR8GxPsCzuKvnFWH9CBYqrtytF6KLF",
  "key10": "48bS8DV4bdyoGgNCZgxRyBGBYFJDEH7GHyvxArtRkTxzgyJfHmzaLo4R1F1Vz6fJjsSxGYSJby3oE8oc94mVAnfg",
  "key11": "4SU9yni3E65rN4EbBmckpb2ou88tQ7gQyhLCpakxaEftRkgS7QWNWZRz5vPVBJXuiZfuGztZ5KvY5LVpvU8iMkbM",
  "key12": "Y6BpRkCtUuG6L2DhF7Q4pJMyeuyGnHmJbKiaoiXpXpq8LEB6orxb96qwBsfxY5UyQfCgcMJhcL21WhNR4qcvj1u",
  "key13": "3Vt9rJzL4NydRADhdRTq1pCH7JXtaLNmYZkZ9BgCusRNQqsHRRb3sBR25SbKwa3AvimCfrbwRjPVhMNYXgBX9s7P",
  "key14": "4D8ZdfaKxw3Minh9xWSv9gS7JYLGHE9GJyUtn8w6HeYJsBp5BRwQU2tU7WFzGjqxhjdfqpzroWFZqNq47AshcoC6",
  "key15": "vtqoHZBas6jL53n181dpNyc2oFpRvp84xVytrWD6z7oKt34pjKoZYuPmS7gioUtjrHVcpj7q1RdCBF2JMFLQ5Jq",
  "key16": "47tpAQVE3Wqd2fcWHGSwcKneW2M7jiC8Ksr3rxowAWfJYDxVc6PwpV7N9GcFx41zmPXCDu8SyaiZvcrXfvL9ZRUz",
  "key17": "2Q69meZFphrFXs7BG7sh73FR71v91LkttMacWvvpQ3zWFhGmRjhz5Xcevoa2dHHjfxt1a5858mosWxJRdrho4D7U",
  "key18": "4KG9Yy3fh6Rq9aZNNGz1os7e1nXcXWont3qm6Zft9XywxNcxBoX2dzUJFjSE26d1Uc8Fp4nbj9uL7mn585iHY1Fj",
  "key19": "388upxMhyBT4GMJs4ToVBD4g9Z4tSJRSPn2csnQ4oGeVapHGb7MfZrJbq5yfU79F8nrDdHHpWAKxBTWbCeQ8CEco",
  "key20": "2FHPP2nFpYPH82re8p8d8nusKDFhMtYTvVE2AZXi7ccNqES3vaVLRxdeh8Tb4ULYs2UnpzRn45t1XVCQmMkrCn5j",
  "key21": "5thvryy9cnQs9x29z6sDLkcZmbdzxCEroA9LbonoJoX5AfkvMkCFYfSyxy15155VqRRM2xhuaw3bsuyZMUzKDVaD",
  "key22": "S7EWh3uSp1CJPW8kiVwaYqpceLzExTn7uMgxD3aT4x1v4hEDnguA22iWs9TneqdjiKawResKbpEW1KGRXumbnW4",
  "key23": "5AtWJqRdEajhQSLKCN1ecXE35m7DumSo1WkX9o9oQvnq5WVR2Ku1NW9mE7yEqGTCVPjXdzKjNAy5jnpMCb4V8d2W",
  "key24": "4EYWV581A4nZVKwVQonj9JUWuRiHDRoE1EEuWaxtgQn4ydp2344oqtUxq1Y3J42p378tkUpGHxBopKsQiZSvB72D",
  "key25": "5WQSEZekNct7HoND4abNeYwcSbi8373GyV9sZ6DxyzhUzKmajuPXHuPzFACM1DM3t3wPTetqVG8hEHbgrjnYvJ2c",
  "key26": "1gWMfbo5qKRJK86ubdc3yg4yjVTaSfUeFMgQZ85unU3ApoQiTZkSgfiB6KJhA8jvWSbAkYcydXDhqBBgV1fGBkb",
  "key27": "4EC7LMq8DrTFQCXpaw9yqu4msk4yaHsSn2J6hM6cXqMHTBZFSuwLHpnB6WXjDdxzYV8i2VArVw6aESHd4cyhpwQ7",
  "key28": "4RWgLZrz5b6kc3zPSgJ1YjmbDpXV2HHyDzFPGT77vUa7MNuusBfQJ8cRam3fmxvQThUvtfgUjEB4zAWTeKtPgVCc",
  "key29": "2ehDwEeTM76yG1azyBMu1PVATGWGiRvQ9gR6cyQi49D7veCWyfaoCMF2RakEhLMvBHULpJZVbbVByf7RMLUs4Hn9",
  "key30": "5Y859urE2sP5t6ALYHW8FRNwwJ7XVCp88PRkwnRF6TYC68Cei6tdgqG9vbAnyMe1dAYAqmnBo2ZgfoNUVtpPBfj8",
  "key31": "2KLFc8jKFa44MhDacZDYGMCvd3YsYkVJyxnd2DWGiXn92s9347dMp8QME29odbBZXPUGwwdqwWH5tXKDgoFPfXAS"
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
