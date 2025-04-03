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
    "5NiLXeHk5K9jm81AvDmaRgbGcJKfxeGCCRzB2sFPazBhu478Ddtc2ke48ZqtNUf3aEqNCZ79okFqKsvSHDmaDLtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvhrGJeLzMFmJCNfPQZChpHPrKcGvdbbnyNBJAuyrN7QtHckbztBW3k9st4z2FnuT3v9iEgtbCZJ16SuHLAY2Dy",
  "key1": "3ozNH5jPZUBjKb4oRUxVemug1QbMBmYWTqTniGBZUb6bhHdbz1iw6DEWRPUvuss4G2pwBXYNLaqt82WFvXaKSCEA",
  "key2": "3gRX9fnjDvS2NKrx3SRTrJb3yDYWeCgDdEvjbxCRD8tLbT3B24jDjFhhZ33Cvue4wEgU8rLZQHtrvKbMWZKmxcYM",
  "key3": "mfWsw6vxM26GgDVYCTrPwPvGYPov9HULro8hEuGG1YtJ1LpHwuvA4Wa3StP7PrDj9yWLQs7jc71cXYFFBYrwMEX",
  "key4": "4UHePpAZ3N9GAJAh832UqgKegsW8YJGd4WqtMvoBrq5oXC8KWoij6uRT24EYyzzteZK2QukDJWPVhRcCothpdjnS",
  "key5": "2rMb13i2FRD6X3TZJgZYuofY9JqbjjVGmZciiAevLeW4tiJJoxjGSVfkStzwPwunAJCbpPZDgrBXDdKQQ5t2ma3Y",
  "key6": "b1XCAehb8hirFj1An7mnBDy7YvvAX6r9mJ65vcR6gHjoHqBE9XyHBqjpx7GerKmwFcY7vYr9ZjweL2SasyVvXnn",
  "key7": "3nSWgmnveHfkowjByEs8PWyPcuJUQFpK3VVjTBoQofmmzh4fg1sYLikEaNBG5vW74FUA6MWfSKG63ej7pTZi9ct5",
  "key8": "63MWT5Lgb1FUDDJBuySmxcPsdpXBk2h1ypMBj311yueDmoUa3wCDZRVABTSXzaW6Ytkfe2CPWy6xd36jbXzZati",
  "key9": "2EHB9PwdbXDFXC1hqWXNDdJ843GPZdEMN9jDmkXcuyPXcysQ2CEki3e9LvZnJCCDLti27QQL9S5tPNRjovymhMKc",
  "key10": "5WMRmYSVPE7QrzT9cNYMP139uzuC11sVg3K8tzXAXNRZ9McoQQkMckmpqiZyzcJqKZ7iJNvJoPZ1DiRMJkYcR4XS",
  "key11": "2UTSibonJWYzYi1ubhHjWZJaoCooSmVpYxWa3ThkCxEfmGsmwNJUN22GwhPrvuWvqseKKopkRq1Nn8zfszsU4VYJ",
  "key12": "228Pm7PwrokgPPtdVEg1CQDYMMTQVG9Mn7GuEfbxwX1i7ZZ9dmsH1xkXws96b38TKRTXwJVbMZp7j33YosTUt62c",
  "key13": "5zsfauM4qKqDeowBHtb9xW6fSGQWYaq6dqGxNsUqrhMpwk7NooaCmkjmvdkfgbVgy5t8yy8j5GTxfzmCoxdTDKQU",
  "key14": "3YKpkwB7kr5MsK8co7veTUPZTq2WD917FXY9Hc6v2RtDhWuHwmgA9x7o51YChAMyiiiWqrHQcztUs3bStMiMereG",
  "key15": "4Dh3cRoVVsCnCYY3ZBcSu98JeAXrerS9b6HbGwWtNYPAPdVQstu5dLt8z16HkJS2pU7hCSeUYfpeziArMN4QDz6N",
  "key16": "31jQgPKzMbXpi5CQjw2D3ViUMeszSNb3UgRpdWpQN9pkehHqezocAAzctgRs9tcsEvD6VNKbgKeXxCHZQZVx93kA",
  "key17": "4y542UymVjvFZ1xxsj2JWNgDFbRq58gcqkqqqiPEUxEiqnk6tJqaZCRFX8QQpsUN5URCW9vi8hxkt6L1W5DTD9B",
  "key18": "3Vjpps89Zb4g2m4hs4F4wa6nMMWZSBA9Das3vYNruoGQxpZUHG8uyzdHJKSGwv7hvb6ukTwrG6dUh8bCXeeDF8kH",
  "key19": "3HSUNSEwdyZnhb2DrDN4NVFTsHTsgA7rCusUKhq7umpWn1RrDzfD3qsEtBNSE8amhaz9ijBpn9MacWgyTqdBnpta",
  "key20": "3cbgWtBmu5d39MqkPLusBVeAUVpGhUWmgVYM2fzRU1j3V8gY4jm8vjgyybErqofM54bdoKpVSZnBnnxPqSFV4x6M",
  "key21": "2W7XQTEMiQN9CmAg5rssy5XJbS2GbN14XF8o357qC9KYyG23hxKQNFR7WweDes83x4nNcTxZt49fGgHhVNrkb1zz",
  "key22": "2X5uqmdyYseVB3ZKA49NgSwTVLSXsG9E9hY5Bj7aYNfjvvby8N8ULEz3ZX6hutKNziW88RmKDmHSuB87YxCj4wiH",
  "key23": "3D1hvyHBDAiQxtV6S4i68kUaSb4uy3ipZxHyfMJEBhXX3d4KQChRrqDeupCziBRYcYiggd411xVvyrf62spQ7Pkt",
  "key24": "38y7zMKcvvYnk6DZXt1qGUeANALQMY3yojGsSfCjMtx3sKtGDMuRNyZaXRNpzFFo7Kj4gnjfMvKLFcbZeLUjeCTZ",
  "key25": "VCpAKt9FpWjS1oU7ZgjFHkqueK2y5YLfxUdBVmAZUpCackkvBnnKQsnc8VoEaEBm1f5v1SRuz5XgMVpQ6JTLTRq",
  "key26": "5V8SBVgpfxeSe3MoQNKASMhmZuwP981bKokNgYuhEMYdMeRwRgWEVSXCXB2QJB33RqQksx12HNFCc3zSEHhx3Lzq"
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
