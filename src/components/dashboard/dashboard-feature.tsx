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
    "5bVSbWhvuptLzjzJz6hMn4MDx8eyLmMr6KpGNhPNrBUoYn3vNmiHtqkQ2zRX9wiuGxjtqNP7eJt5nfS9z5nkaBWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tTLanDLpeUV2yrFjzKmiopJaTTH5FvLFJ83jHqp1paqSMCn4dRFJbQJzqFRioKPmeHR4VXstpMvQtgJ6vWt17Ea",
  "key1": "3CkdjRb1gMcdZwCf6gtXJEyJzea6PXRaxPMMx6QXbNrcWdC3bEcnyHTC156deSsnanDx9vzCJkcVa3UU8XFVCdvB",
  "key2": "4hgw6QPdH7ad2XgLCxvRv52yTKyVmHUxbMVgjtHS5QqwghiURz4CSnCpkJr83rLUvUNw5wZuHwfq3HZ5783zxzJU",
  "key3": "5n4BQUf99A4z2L7ExVXzjzmZ7jz3MasSu1ZjXUPuVKpqTRv5XookWMWL167WTEQfpGERkvTbyHEXydqSrHW1DQe6",
  "key4": "5kjffMh6o8WAXcHithdXhzdkEknWeeGk2MJzVeiQKEyvUu3E3pUWvJrGEyZLFGKGW4yVrRTBdVKEkeTEst3AurtE",
  "key5": "2a46RmhzX8uAfzmG2kt2QZyxgjrWBoeBszbPJ1dLw6sNd7xu3oagXHEfugZAxdADSBLDrCkSC9bP5B8JcWwayY7J",
  "key6": "35EcpRtGvtkY2sA6kTenjU4eDQp6HcuLqCPerYkAAFC9ebHJWsYm8qA1aG9EwmtnXduR1FRX6HiSPMdVSBpFFerV",
  "key7": "y5VZWkEbuL7vaJd9b7jf9hkPHvPToHxoA9qfAdhnbyHZbiDsN7vCG6Af1WRTwArKA4DbQv6NUE53uJoikGPbhaJ",
  "key8": "4ReBx6rVxZrreD3522W5VveVXX9hyiewn3ugF43uMbAgVHGj1SvJ3q2E4LW8f1H277rame4Bqgd7UkFikPDEnQBr",
  "key9": "2uAjXcrwq1qd6Zt5Zwyx2EipywmW9F9anXWGi1PSDVChrtGuovVZ9rnR63o8Bgg3Sw8zXZKFV959nmyQvD5iV2y4",
  "key10": "4zk5HEbMrNXG3y7qzUTZ14rTFtFLQGBjNVaQB1wvFojeYVdSePEVweS9J8beRahRi3Q1wAVayxL6bkcYSFxS3nSb",
  "key11": "3qAMGBecLGuZNQZJ7LJR3KXdoW42JVy3DX52fAhzEbVPhJoMmgoXKSnJHHEFAcQboWzajvXoXNHK1Hgro1XsGVps",
  "key12": "5rbdYGLA3WhXLJywYBvvohZZ1QR56Dpwv4GeQbVuf1yrVLXd8b5oLapaDK1iQNyQvzQxEC8y1wgTQXxqY4kZuEFJ",
  "key13": "wFe29zKSct3EuMFa83UMSJjKGXECwfgP23dBpCUci4FBLqeWNwah48QV45Siwe95PW6J933PvD9AvTQ3bFCC6p5",
  "key14": "5rDAz7NapT9WSyHRTYMoiFMW5su9SSGzbEdCbJ75BWDjXD9Fu5WDXa45KDxQttmvA5dC98ZWhiFy3EJ2YNnb28sQ",
  "key15": "2C23BrnzhaoqhjA4qKMwMNbMeDxZsW5tVg3GHu89SBdSKJkApMCwupAsu4DJFbVKoxecL2EaxSEobV9w9sJWDMEt",
  "key16": "2LyiemF4HWPymm3knscfaztmardZ8KPsjrdpECnARNhwJ2ofjN5dHm4PCGhBSfgEo4KX9n664PwTTj3VFDtgumWa",
  "key17": "2UcmJDbsopZusCtjni3tKNigCy4fjUUskWaUNHVjGujRv8PPKQjXLc9kpvJG4brGgRakbbQ8ujKSjJppNb6sodJV",
  "key18": "5JNS37DTfhwmJDLpVFiwZNiUpd72d3TSbrqLTLMFQcEmSFQY7Rn9B1s4PSesSaW8rNz1QCdAQr9FYJKwyX7pW7fi",
  "key19": "5PomvfaMed2hK9gTVVeNRwmMeAD1rvcyFASVN8VVfKBrmN2yWrR2x8Ynn7GqZth9NppKk23FJ4kqLk4vGSmAy3jW",
  "key20": "iU4yqUsqPyPcK5ifjAwQjLwcEJ2cfRDAW6b41KsYJxkD3CKsr3ZN253erUKjaPHfudQwo4jocXb5EXdVFnniqom",
  "key21": "2PXpnMT63inKeqS31eoaNez1Bd1TdANM6dLmMrQZR4Wfjz1Z2F32DmdqdGmHNRLjxYiNjc59jpYQDZ4X8Ckhm5GN",
  "key22": "peAsWWgmZu1ioPbXQ4ZoVYc2tnBPgiEmvPpipNRmbg4sFHzC4sztPd9CmCkCZXWgudyMo6RG3jCcdaJpnvxECox",
  "key23": "3ftQFk5VwRhmw4FioansbB6HeJWUwjznzD7EDe7PWcQCHidYyW9mhKGsn6aAvBX6MUvaa4mY26KqJnoMpFiUgpRg",
  "key24": "4UCwzYD4ywTib6e8G3FYHkxHGCnQDZ5Fq2K5yUfx1ZvxvyKhf9oSJPvejc2ztoPijrfPFHMgh7tjznG3tfdsbjq2",
  "key25": "sZqVAhBwpyMeKFwJ48BmDZoUwkxzqNGzQRd8ZLAc6uUJg6n2TTSXbDmMZM5ZH1cbbhoPQuYR4q4kQGazs7gVE57",
  "key26": "eUCTiGCnuuNkhLVGutb8ChAxx2cWdLCQwrMJcUMd4KhGXQvARXrbCYbqhSe9PFptowTpRX55RZFJH2BkbXEbhHd",
  "key27": "uoW74o3ZeZg4sjPf6zHDgWjKwqSae7diR8X66mp66qUBpJtJSvGE6PKUk6kYXX24ffUp5a8oajBsztbqyrdafSX",
  "key28": "5nevugW6QYsCCLrmfekJzM51MdhZhXwMDu2BzGYgqBFuAPwfQziDcYivDp6HJfyot5BC4ajdG4qFt8QFWZVh4bXf",
  "key29": "58o4am3kkUEzGNfQcssRtB67JuymjRR6NySgtWT5CyJAePtoGb63FiKDWXmzVHx1QW3gCt5XvBfTWZB6k7MkreM",
  "key30": "61GZfzt2VvTWZv4i4DQWEcuDDD3WrYbxdcMwFWNyPPyBFRAnckKj9TfmXXLzuRFwt5kd44NtK3QXqWcRH8oBCxfj",
  "key31": "4kXn84GuJYh5G9g1C84oZ1AM8ZNn2VgBhMhAPSg1Z76UuoQYCeAg68iRnVN69tgftM4rvWo2DFN9LHhhGHKFfmw7",
  "key32": "3Z6QWqbrZDZcxjHQkfod6V6DsuZWFrWvNQYrs47DfQjQzEtB5GdFcZ1gUw4CS1Nvfc4a4v7FcK9x1rrgjeA358em",
  "key33": "5mbZVwLPkEfaPQEveaptiFLuTEeU3V8vqJdQU8mqHiu2rGaKLVv5NnN2MHCPAVN3rv5g9zqZcYKM8QoJ72iSC7Tv",
  "key34": "4h2YGdR8HafLXW89EPa4Kh84h2xGeTwsxpcBsywYzSh1Q8BFmjW4QYyiGZjCFeejnV8okSTW43jV1HWScG5jZJKc",
  "key35": "3SZzSXH5w6Ypm4BQrJ7pRm4nbpG8FCj5YLhWJ9UWRedNkt5dytti3rr7hCayhPAHGEDsetsafToPEwmWSYB8i5Tm",
  "key36": "3AuQUfVchHdbiALYNoU9GmwNRsY9pr7CFLu5i5zyutqoMzdz4An3mycschc2j1AmU4RSQahZUBZGoHngKRwEpHfH",
  "key37": "33638wLFhnpPmKmS9EN93Mp9fvQMFdduGxaQsJTqokjer8fiomBmm5UHqF2fbRUDYYCXkXEyU6Hk21Z3zDdhPLk4"
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
