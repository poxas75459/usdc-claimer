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
    "3YbSHwVp8jC8ax5Mn1K8F86cB6G5XDgTCZtpBCpgCk5KK7FwDnPb2Ff5k1g9cxWvAD8Rzdmw21duD9WqNDghf9xD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z4JjUJ9hkibCQtXv17Ay3puzP7dZw6tL7AvZgqAmSSxkzmcjvB7hKB8GwW5vKVB4Qag3BxmkQPkb31VoDyh9vPL",
  "key1": "5wj9m5MRQafLhdqQ55v14n3stSrn84hqrfzbN6o7gBmKCzqYxrWYGa4NjLCH6wvZwriuBCyLqVYZAFYXWR84hmYd",
  "key2": "4GPNbdNRbZ8UvBRnrXntnQAhBxYeQuyW9yf1EPLuhfqTkT9E7gLjyej1tLRS1ZVN4pnE6F1QWF5V1A9CyMPvXG8d",
  "key3": "3f4cwEaQKBVPgq69aoRfdfuFUnET4ycFFzvyPBBLKrhoaUvBCKpdhVBL8gYscU8FC2HEPBr8S1hf7Air69jc17nE",
  "key4": "2kJ47MXGAtTcrYNttTH2vpnuBj9NamzYzUHARQ8Ww92bXY8arL1i7t4V19ByuSNYXLDER2UpMfJbndKP8zrZoeMY",
  "key5": "kjMHDbAhSUzHVZpMLYByboCwqL7b3pQiAWiDRQi3acYAv6srFecedBa1RSMp6dHL1NwNfTnNFAYqPMu9wnjaJtD",
  "key6": "5ejg3EVZKwuSiRQmv5XGzKpnFx1WpZCUaxPU3o2CyVFnTsFoE1NTP5G79NWrxiiQcqk3YUG6rXXLzj1QEzUpEXTn",
  "key7": "2Vf3W5GViJA2SJo7VEsLy9GCxhjaYFBeyojsEcj3MhVZzNKU2F3dLpPdS9YvAFWzndWEyUNt9EkF3CTvZRda3x6t",
  "key8": "23cHrxXvvQLdyZ94DAV2R7sGCYqvgsTfpCrquioXkBiNiknTWPTQAxtnZPs5vhgRGTXGbQv2jWaT3evY2PAW7kEk",
  "key9": "5WLRFqi1m1bkjacSYdmw8kv2ZRwzn4bZHD3NtSaGS6S7Fia2zyBvk3YpFoSUNnpbQFXG3GjKfZcPGgZFn77HSqag",
  "key10": "2Hn9bkqe8sSwAsaE35nUbm6o9o3vhVGfAFVXXi5LUYBXSBDeYLEVr56T9KCje31TZQf9XTojgLoTcF7AHQLNi1qg",
  "key11": "3ynfuV5taSJ6espMVMgmEEprumDajqLUmsZLBVz9FkLq9Wso3MUajwkwrLucSeKNA9aFxeCpG85KccdrfqwDxqjJ",
  "key12": "4g1tS2sBga2zWmqyyFi2w5YsdY382FYTg4evsy5BDXCpmAttz2v3wcHv5NqRC2Mfq9iFKwD3fQaW2fhEH45SubZR",
  "key13": "1hD4JKS4SBNEzaxhCJFdN1WsHasWex2z4onwD3QQjZ6kTELDXrSo6nkF9KuvsCqgyTPfvWHE1bvy1iuJFVwUkR5",
  "key14": "5rcxpLEJX2XRpU411RdekxvpT7QKKY1jJpmCnkUAj1yqnWawEFx4h6rHUf9GNiiTpD9RhmvbGqPxLAZNdAQdbv84",
  "key15": "3CE9uARHeb3y63kepm2GNH9ARiUkSDPDU7cd4wbzHLbuKik64bBkgFJHVT6ZRyakL4d1LCqdN7UY1v3Bahxu1QMx",
  "key16": "3pjQLo9FGc98FGBa7N6Jrsvfj4c5qBfVfG6YMUwfB44L1eaLf3KA1GxfG8rmnaUWJSRhWLxBRtSXM9tX17FF41nL",
  "key17": "56Pbz9xVVaWE6Y9uCKKof78s2oceeBjCM1VEpKxRwKPJR5oRHTE6gcaDb8VQUc5kMdZSwZ5cHJhB5pQv8bnZXmwe",
  "key18": "5XVjhs4c79wFUtUY9hm9YgAUSeVm3NDPrgnea7wyam5Gzg5HnkEqaPyrEauiBuscJYbxYVv9BsNrPWeRsWPJc2o6",
  "key19": "3QhTv7kf9AtSimzQTpwFyWcHgoxdY82Zsk3Myt9mK6cfSKEqgAYgbEr4U8KAq3uuHCxFimWMgHHkpbrw1vQjWMPc",
  "key20": "5cvZEda4FE5Dr4P13KbgDEc9zT4sAYzRvyuVmj85dsojiS33zpapfuaS5KQfQwwaewdWg5QWL71WTdrPiFNqqTcV",
  "key21": "ZR2NZ4gxVNNtArtY87H882uUYPU65h1t7r6yvumPz2wSxrZweL2Py6jqUVD23WuWXoP8wDuKNtXKVEvyKbfN9FJ",
  "key22": "2ZwoqA4DeDGooQAaL9hoHF1DDhcGPXL9zqH7R88Eb1LkGchhTDQ9LbrgujnQQqMp8edrJMZukvJZavfEufxnyME7",
  "key23": "MMjnMLFAJgsyxAxpQyCcsKNy2ZnC5k26sRt72Lzk1XK5Ptn7uocP1bWjbLUVPrEwM8EhZhZLeMTMZJ4eetJqRbk",
  "key24": "8ZNm3utu3SKkpnfeEycwhTKXVhJ7RcKfFJD5UmGYS7TopVoh84EWLzhqspGMAH5qctbrJBaHBftkYoHsVgYpbYz",
  "key25": "5RYXiJGbmaJ61z4k4piNVHwUWdNWWNQRPhVujPhpGGF4mVputhLLgAXAZv1PUtgP1mQtnFopGyjEYeZyPRQ2xfh2",
  "key26": "26FyPHY4mNrmEgk9V1CTeWJt1HXdcTHUvKUSjoKh3UTuBfqqGQdJDof3dahxvuW1uFmQnK8qqWaXXp5kxozcGEik",
  "key27": "2aFN6ZebByPSjCEXA3XpsScaN4gDtBoNxeKFEgTmQVDg7RreahBA6QgLynPdotHwNKU3DqGEkMnBcWKqju348cee",
  "key28": "4X4t3uUiP6LbCWDpXtLPWhac6FRRdodBWNGDk4bziyYFChuNNzzJKoDvvberd7MGNyKPaCbBzGLLW9QcpgxJHKCn",
  "key29": "2pWgadVuQF3awS7sjG4fP6cc4tS1iGQrbcvrT6kYe3zCqb6KF6iGei2YmT9xuWdmEsGvhjbUN1Gc94zxNMLke4JE",
  "key30": "5A49zJwLjkscjXu6QfBuZ5DgBbgSG6GNHh7Lj158mpusSQUnQ4pF4MrTG7RNDeBqJZ3hD3jkfXC5NHjy25AmcnVk",
  "key31": "4ASsvYAMuEcCPAo4AR1BEZ5fEtNSercUnPvHocEZgVXdrb34LY59CjaKTMXq7EFkTiAsykMp5hNH7mo79CADGQq",
  "key32": "2NLHeHW2aNDYZKPuHuAUq7Wic1z2q5TRsiexFyT8epHw7NfXDcs4PhiZVyhXW5wWTk27SPgwRtrTUi7tpTZzsx1J",
  "key33": "3w1gmVT7bqcDsXsq76R3GyCeAzSqQbhgW3DEqBMB5nukLicrcimzPWDPbEy7kAa4Yi1RKMQnkdTkoNh5oZkAvVmA",
  "key34": "2uZXUXpGVoZhDxJoHMZGcojJxKSdwUZU7CRr5EKKrk49XbUd5dMe1WK4f6XLjBJ9GcQgGxCs78ZT5SDFAjDw5uBn",
  "key35": "xFALAHrJrnKyd7Dp2VQ9USY2AAXu4ostvtm4N46uYgmvbSSVRw1oYvhYVMXdfDWPQRDRXLiDNg29RJM53L8eRz4"
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
