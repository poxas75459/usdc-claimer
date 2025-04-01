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
    "2MdEYdr42vV2m8iVJCJNhaEC4ixye6keaer7Q6PxZBaBp8LWsYcTAGexaBCmbgyphjXhjJSHQydG3PbSHjesPUYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obdiKVdQvNzseA2DhdqrQ3h5NeySa8igSfXybrYiHJgT24vKBbFF67fAtsiv7q76qrKCL3XH41UmCsJuJPRQ1FA",
  "key1": "HcrbmF3g99AdcjV1DdohqV31ehJNCD4XSVX5ms9P4xSkHVM5nmvabeqMsbbcYJ8CX1nL7t342mcnvXNNYexXNRs",
  "key2": "XZMYNnKuMCtF8FZVVbrhpawMD6wRqYbJ7KEjGiK8DZm2SZpK5a47tSqsyXVk3MBnVKn4UPpSGMKCpZ3zkruHJGy",
  "key3": "2s8fSLciQEuEobb7dSYGxgAtAifDkSrqtci3tT9rLBnWiNhR2TwJEvigxRuSQfEU2cpV7BecNWn317h5ArLrqCXK",
  "key4": "4K1oRVeZ2QtqkjoXLK11HeRpV7FxYPoJf2ubDCsPG53fYDtpgKPnfVNkKX9DMJnFwMSgNKdETe3UNSWsVD6VoadP",
  "key5": "2P5qtWvwsrJ4ALwGp35Fx6pNtV8SBNiyAgX3WUz6qSj9aLasUQPZHYRARZ7UwcAi15hB91QBnvW8ph4Nn6y3f7ND",
  "key6": "zGViXX1q52zmk9iUeHALqPwg1J57tPe52svkT5Vhim1aV5wSCHDfx7iYMb4zR7k2MVrdQSob6brnh5xFwVpNXE5",
  "key7": "4ibuMgkJq64bKC7qf9rGJ82uJvTMZWrLVS4bwQyCrBNsKq9gDwNftUw1j5yEmHmEoLw8vGWmtLnE6qAJkxs6ira",
  "key8": "5yVddVyuek4XfLzWQ3rh6bAx3GTYfGUbVhE8mm7EQjjG1SZsC9DPtypvrNT1LtcqNrJ8jEFbbKxPYVvmr7KAqrSt",
  "key9": "4ZXKXazD79Eva5EsvdF51KuVk4e6hqejXUsVT849mZxNsHPwqViLERmAiARBxobtF2ceHGZVagwZyoMKTEbeiCQF",
  "key10": "5UnymQcpQ9ARHfqGr5PSYzyVRw49ByKu3nAtjaadeJFyiXnKHhEAXd9L5feuj5pLNqbKEtjB1WnsoKisQRcpMURi",
  "key11": "3dAXC2JoLwPmop9avf9YicNqhb3qZgHJ1kogLXQmHfB7SKCvbPnVzjtAsPEJgXCRtQvMoTnWzd3iuy1aFMZedoLt",
  "key12": "2Qdup2VLuFfnm6KH3V4qrjEcrSSSuXQziKgZTpXcXuF6DDg63SeMDcMrzRL8eRRQUEN77maQZACjz6GLpQ2VxzSQ",
  "key13": "4TT9XDvcGZjYQ24ibDt9YomfNa2a8U7kVAY7b8Y5m9YSJeYZHaSY5VLgy9vZpjyBwkYwyvTm4XVyC5bHbaG4TXTg",
  "key14": "4TXNRNLUFCMqDk15crfjpipZ9842yoq8vyZ84MuybBd39JUNqZUwzSbqimpnRfKHAtYLVuigkwXhrR9rNcZXufwm",
  "key15": "4r3dj3DeLCVvXQZFyHK7tCMiBnMMXBC7x1DWtne8CFjp3U94GubGeBJwGAw1ogg84JAYzpA1KnBMQzPNDVPEawBE",
  "key16": "ZQJVG1Wj48PeZ6Um4KCDW9D3eQyNz517sTwxHMnhqHD1TEVcbmiiBkHm5Jru3uPou7E4EXNeSB6xWsiJGgZ6gXy",
  "key17": "3AQFHKnMHCXLBN2jWaHPvR9aoBG66Eqzohd2ZUX4N6Dt1tbWTwxwZ2d9WnErDTLSSyWNGpnZWHbgsrVshrfmjdNF",
  "key18": "3Yb9dat62E697UMJ6U9wdm7eVbvUBcsLuqGQrBYY6Zp2YKKPDtTLSrKL5B3xkxqTF81nxBwsbE1YwBaJJLQhRUMo",
  "key19": "GAiZDdGZyvGebbQKai62G7PMivdF7Zg4MY26gLMgV4HYNZpiRuwBJmxBSjpinddSDzSubTmNs1ZeDsHrnMmnMbb",
  "key20": "2PYDmfZ2USYMtRm2iVoExJcrxpWSh76EBDWbcCBnbqH8yp3YGzEWhAtWvGFmb1Wn4dsNXXuZFXDyV1S1mErJc9Sa",
  "key21": "3XKfipio8fBLi5XtywfdpddoF22YT3Y5CS4zDvz88QFceoSqWpeeCkGdVAEgqPAykyD4dkDyq29fMTc2GpfzsmWV",
  "key22": "2Cy7inCjCqgLvAFjEDh2iW8T2aA4bCnvNH2xQzrw2hLNuqgu5Wd9b8q9mHt2bj2byL9uMkSnAmg2QkWeztZsvqUv",
  "key23": "P5Qc25rtqDJHcZ6AbMUpmcF2BMNkgEnQxuCPv9SxbseKXLJR8qy3sDXzCezkCVrPmC9nKhqE4aPUxkRCDFkWD9h",
  "key24": "38ukfRC13VHQURt5WdHCsDEsKZtC8HjXEWbURT6yFsipYFujdUg6zZgtTGsf6gPrsnDiQLJWj1Xh8FJHMTorqaDw",
  "key25": "5ESq6c5zQ9cUHxconp6qwBzPhQZ7MqAHDJuLZZa3QLNqyUBD4RCBo1ECFvwya4ysPgY3TuepASvXPCiCzaC9CULG",
  "key26": "3u7PaR1fzSY1ZXayweXytpdKoDj5sDSaHkxWg2FzCZ9f17GNUxdpxyFszB5kaJbVMGY4VgQbqP379kXjFv1EuuWG",
  "key27": "26iEQE2GKM9Hgf7d1o7DhVqVYxgM3cKsSzGwyNEoTkKna5MLyHEbg7Dx6XCDpLAZirZB8aeoqQ3gsKfoPtCPeeNU",
  "key28": "ZsttDxU9Mg24MLwXFK9YiYwsp4hMYKQ5LcZKfmbxoYMCKQeEC8B53kaWpU8F9xsjDb1kkuquQuU8c9izFKKbzCy"
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
