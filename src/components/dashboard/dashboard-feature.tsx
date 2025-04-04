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
    "3JEThkLMmkjubb96YMHb4mDaE435zvk3XvqTQ9Z3Wyihc51SfQXQuwNbS1Bqw9HSykzendNBKe4HxCQCyDaynohi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zcr8eRQxLuHfFs3ePkJ8eDRGaCPiiVbWr7xzg2C1T6AaaesrRjgkiteTyQ5Q2BpzEMhgjd814YrfVKD6KtMbNW7",
  "key1": "3CSqnN8XSU3vfN9xzrEdNQkVm8v5fRgXqS3thUREUb589UWTuiwRwNBuvBVP9NdBQ4D8fxVUdeUt2caCpwWLXjKs",
  "key2": "3RQvz1wKa3SqNtLPCJy7h2ac6uwfbPy1enFvKaQLy8tbEytjB7KYwJ3DVTGA1cp1i5KrAr8umDugZt6F3Qx1eUmv",
  "key3": "35Gp9tNnMPtfLk7BeCsNSgLczhDXcf9XbopcJHbDsuUrdgGbqbp8YqbjwZU5KAXaLDr5ituLki6VWsJx2JbE35k2",
  "key4": "61UgoaWEZ7GKUdvP5EDRwjk6Rz3QUQgPwKbCnxLTP8SawuofgYkqNjUeuULBZK7VAUPLAN43mnQ2otZnMeXBnMNc",
  "key5": "3f4aoHdG9QAg2EshgqXetExpNpHdjoEo8kgsm9AxjqbpyHH1axS5q9cBrsPAAwQ3dKENMp5ar71nuCrRZ3FYuKyV",
  "key6": "2kQokGWbzWiAcaw8FunSgDaaSVUQF8S26WNp74K3PVDmqxzvgnu6jaLUNY9aeYw4u6kXs9CfQwE1P21nWQdbyUvA",
  "key7": "2Bkmn8Gq7727cDx2wQcWKnmt3s7B1WrLvyxbQNWtjwjbLWFKb4qTRZq9zewBDotdyjpo7MXtDKieyMKMoMVv5anf",
  "key8": "uUfXvG9CmbUoNWbC3mjwdo1GE8tUfF2tCA8Gvxjvf8fan38N8oTqLmymkXZNFLnTQrj3u5Tmb4qvaWLdFbeAj3u",
  "key9": "5C22UYAmJYenEm3deDoPqQdLDpYPmJQ4Pg2zNfGWgcEYWxMELNk74ZyyVTe7fXrnnRLnqtKeW9PUybMvmR5J274f",
  "key10": "2pL553WTbcyADE6DRDrTSR8kvu5pid588AzvpNHXTbSGnsbw9xN8fnUVvWPtGjeH96pN8Pm85bD16ETbyLeEpkWv",
  "key11": "5F3T4Cb5ofhWJhjQpRLGLHnNGKoXGYxj5aW5pfUJ4wxfMuetMEiUudN7feS14fGjSSFuCuaBGTX5NUpprwgWfZii",
  "key12": "4jab1GnDjKivjVU8HFxr2xzKrS9ftB4c37mSckq73AdKuMTsBzKj3ETQx1WZBhByU5S7PrWaAM9GkEcpjQHuQsSt",
  "key13": "39ykMUftLxBwsB3fvkGBjKSTraaty3aGb65U3AR4rYHHCGqCLnRxnrHkW3fRxgBzsnSAmWut8VXEyWZwarb2s53g",
  "key14": "oJJyBfCsKbZtqBkgH6XxNaTzUMQZj24ifq8pMNAuoQ3aNQdSVKMasJnJpSju7RMsDSR3kw3rZHSz31JmxyqodiJ",
  "key15": "21DCDEwQ8NxsNeWmj8Z5WNwC2ZdsH6Zi1nuNbLDaTk6osuGBRqUFpMhBxFRfPCx49dvpe9Un8JktgEogBXQccX26",
  "key16": "3Z4JpwuS32NF41ZFUt65iCBxrUPzs6qWdi4oqhj8sbYAi3H3pc4akoJL2CHBaoAgUpdc6DhA3xDm7aqWgMik8Eeq",
  "key17": "4igrZiP58xwwps6goY4FCEDgpx5kQHpqDbsmiCXKtK2Z8LYxKCTHo9duRVimf4ELZaVtYQ8aqNgkXyLK5WbUfvwa",
  "key18": "62vQgNybwx8HsCqRGdL22QA2b9S49UYxHeodzdA5joigHEyVWb4jXrwEMCYV51f58bKsVm1sBgZSKBK6e6DdG5oQ",
  "key19": "2rwwzdxFSCyEGsy9ZPV5GNTDpiGb32dQ2nppPyoRdAn38862z2aqviJn5JWLPrKKoU32zJVSPTPLjD1B92VDAu4E",
  "key20": "sipFkr7UbTCZr3ahPpRpEFam7yXjBPBdtuHj5Lg7xuhZihqvEzSbDV2U5D8e9Vi2qr826fcxGv9EEB4SzhD95Np",
  "key21": "4A9yDJLHSRWRbwHRKhAipkTbHDhk7L7a4uJ8LMWbbmvBAzLyCw1hnPSowt2cXvX8gt4S2jLV4caaunhmj2QTRycn",
  "key22": "5mU4ReR3xbSZMgYFUSPEx862TfuQDkrqeZBG1UjzfiAJjXttNExh1eh3VFh87w7NKWxTNDCEyin639eJryNkquQ2",
  "key23": "1i2M2AdTf1X8SVQVww2u5GCvFEm99p14rLDdiUSmjYuwU978rbhLvEVPRteYmUKxgV8U3jmi5VDBftyUnantWXm",
  "key24": "2xBxZV4E9TxHvD2ha7UYZtDDRRLyayLWSNetURa2u6fjDsUyhHdAgBQEpfCkARPxMp78Rn6ha75h9jYSY6KCwukK",
  "key25": "LkdhH6r6PyoyuWbmgR3AAHfJb2Dekev4Kr6mz8gHckECBQ2qAZomAwMCMsUJEB9txsG1aJyQ8P8MdTULkzzrogG",
  "key26": "5qmdepXPFXpnKkmdcHhs1atdQZnh8SVUwHkwJmA1yy1TRZ2wX4NCmpJxuG9GWa7AVNziJYTKT3gKJpKG6C78nMeJ",
  "key27": "52CkgkoeXyVkd1oC5eHYFKknqV2383GLJJDfP48tB1Ez4U7PsKWMqH1gZezPZnggByFAAAYQQAvgTvfX9NzGvF1y",
  "key28": "9NCGdFNDe3hSTQKWAfY818aJt6f3PCz8SZK7JATA4nWyKZyVFwzZrhWmDojHwsPhz5X3pQqeyg9NWiBUed7uTAC",
  "key29": "57fG89Zo5kyHHxPWHK1rcjvYRvdmJyG8Bjdw7LyPGNheoaTt1SCLUzeyvrxJ7JPqBSXjcmWDHfeTq7y9YW1EqVGm",
  "key30": "4mTaQXgiBoWfu3LaRGuqQ8jS5AEumeMjoHSTgeQ3CBf3Cb7uM5a2mF8dYYKCxK2d2bHtoF7JkpQ5nvJrUJRre5V9",
  "key31": "3qCP3EJ8fg8mtUBAE7va4GexYnNuaWSJxs9nVpFhK2JijcyPBB3mg3Q9DtkKnyJ6iteMPKNBvMWvKQrSnfi3jfT3",
  "key32": "5grs8Rkwb1pk1fh8phigeXrZR5QehZxCaFaMpHjhZ3TeSQnKmWuEtzV9G9ytpzUNsGKfMUqUMEcopf5DRAekCwHC",
  "key33": "4F71fa58Br89jYnKxxhCUwmtXM69yUStufn1RELWRg6CLS1vXBM1cwQibszwt1j4AxRxoZRoSK6uecY1ZQksohAh",
  "key34": "2hTwuxS3ToMVwBifEghqVaAjzjyhmic9AfqV51Q9CzRAtDNK5whVSRttUyMa54H43gyNvN913coDPpjUPpWRvafR",
  "key35": "NvuvttVZwLQZcqbfFCnEjbyerj6jYYEAHeaV1hNfwC9yXvDCPg8EjMdkgG2rK4ydqSzwDeuWxx8G4pvXKetgXZm",
  "key36": "2sTLYzcF2zTcABPHU7zeu8UXx8pj5FgWPoKFMWSe9YB33feLhQA5gqTjQMqtSot1fhotMiRscj3fJYixcF79m9pc",
  "key37": "3ufatxdGo17FZALRRX6cccBzgk1YboZPo4jwRamkj5uWZjWrY2Drbe135mGW6V7U7MWe9DVMJQG9YXxuhyvdjUUR",
  "key38": "4m3rUJ1xyfbHXeZxwF4FRbLY8UVBDXdVJEP8iLi4bk4Z3e6YJ9MYcMWw4psKYtjz3P6GJ3FSQ5MaBaauPR176nJT",
  "key39": "9iEEZBgzFdoy7R8yWo9jjq1AAngbrTE5bnD17P9jgjp4zqVbi1cSxW6G1D2sTpL2BU4k2qTBXpowCVUr86eknSM",
  "key40": "5fcXzXDwKi94ahmHpoPevJhhdD4b6dcjsj9difV4TC7u4m6TKvBNE2udq45rEFkuJGz5WoswTssGKGcyEvHrGQRv",
  "key41": "2ZtLKERqN9yb1aGCgfTR2g1Wg3SDawFWE55kB8n6W2Qw4K5iLmzgeY5wfpSjRHhPoRfgm2mqiT2HceZRGaPpZNFk",
  "key42": "3JD6GdD2gCopMSas7hSva8LBPam14inqr6MBbzeETfEaB6ZqNUUWw9hskNGkJdLqcUKJdPguLfKcuEMG3BxXrQtj",
  "key43": "2f9Y4pKnKkGnmt66XRg7jLEMjWA5ru1yWhJ7Xeo4UZ1obdmEU9Kiv6wMpcjJ95N3XQfXqupCiP8ciFdckVDxaxJh"
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
