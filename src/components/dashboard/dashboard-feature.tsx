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
    "2XCgw4Lh8jYzZDhTX9tysktaTb1CJm66TKWWNyDcNSmdTR57arr7MTY6LDhsELMDtydUgosmTZAcfHLibV1HhUTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64caMXgiMP157XLmqTYgK9hhDyNAXU7zBcC4ZXsZbPA31gy9fqZQ2rnuSzDNZCSR7SWKyGEuSQJmL546as1r2AbS",
  "key1": "3stfZ6iScZDMfpW6Zej26HszruF59HETuSru62VuqxnPquAAjxHCSnZQXbLy4ez2gjsABeyqxUkretDbWJsXpCne",
  "key2": "5im2rvEdqm7hhLvjfaDizEcrTsh73AnGdTArvpRxZNngnFnDLAvggy4Ax9VKmnQGmLGLbpXcmgBTvQWBAMui23Yc",
  "key3": "4EKPaQukwA2oECp8yiGkcw8RkoLLNc5L6BD87S288UhT73vqS3F7xfLz5kXjEQq4KBNk1GDCHyeoqRka3Tq8gir3",
  "key4": "598Mgpubex16522W39ii7SbBMQyP7qqGrS3c8dNXTQ5fJm42Pn6a3MBv2wWVUBwQMXCTFjT93G716WwYv9L6W3e9",
  "key5": "4wRvuQGNPSYA9eD7EuihysbgweUtYUswotbWJpfDgjh28mSfcPXSQudqa4bdnR7WoqXEisdTXU4LjMCgR71Cre87",
  "key6": "5drik43GwH6VQ2f87ntNkfLT783HCw6i7QPvqP4gQDxmKLvM2DhiWjtceAxmHdMDf1YVftihVTszaoXZ7uDcoR4x",
  "key7": "4PzMkgJTT2BdpYQuxjJUptyGeG1MvLoFPNbSzHB4fzbzNL4hJ9CB214cuVWrauVXhmqCZcoYmeUeK4kh3PR7uzEW",
  "key8": "3tj2iCpjcHpGtg92KWt4LB73LKAzDJqTmKG97mXgRab2Le4NCMv9SCDE4amaVRVNwzfSwFyhCNEENnQapcQ9D8k6",
  "key9": "4RRiSTR4SQ2M7vjadxX1b1G6h5sQPctwbEG4YmQHQrvem6Z95j5uva2odE5MPrE8a1XDzX8eVpGLtpZhRJU6cjAZ",
  "key10": "4K8qhGEQqPPbA7iJonD6exCLnkky6YX5HFxkvsrCrMYKA3FQAumaEgvKSu2EX2T1E4gHhqrDfNhjacNJsM7FPXnv",
  "key11": "3bPJJ8qRambSLP2B7uk7QaY6ck4dyQAYAprd8HDgdT4G6K43diksHcTbQQjk1fvoAWRMkTeKurKm22m9rz4u2DT9",
  "key12": "2YMaRZ57aHs3uSfmPv7FqAHpmkrzs1yj6H5ZCS9UzdZCkQfPqpfxWSoCHv2VfCKrvznUf9QgTV8yVgXXWy3PZ1kZ",
  "key13": "5gwfXrB4zLENXuEqjHxjDGKYufnhveuXXxDnkgohoP6Nn7SGbzpPfs6Vxvw4BMPmWrSeW89V8AJhDgvi7aQ4QqY6",
  "key14": "3JrkFoHuZ5YBy63F3YLNe61Xpn1DsLCzcKDi3MLZPtJ9TYD1UqZuexHwH7ixVkJ2Q522Wjq4QYBTiZd3m2DHNpFw",
  "key15": "2HpEpiAasRJ7BeZP7SfqU43bCqkfN7VtajvsDFQJSKwBNnho5YgAANxbMT6a4LEG789vHDRJKotHJYS4Nm5feJbF",
  "key16": "5NUMp3GMqXwgf5M4HiUVdw41DAQFEF4HZ5ZBQdFhfEWj2dgxg4CzgptEkPN3ArWuV2m9Tt6bSVhYFUxtVu92s3K8",
  "key17": "5yuTRHP9arHPcUJ97ikdVKQQy88DdVGz8WkZCDnRkLepJwbtfkzft6j7g3Bo66WKHVtma1EQaXYpBTynKbxHvEPk",
  "key18": "2hW37bcZPe5nC6LBGU2LMzp4VTUisbhWQ3R1yJEB6CkWMM5SgWhUNo3EyKAtWY7DxSUbLEizafuVowXqFLHmxQi8",
  "key19": "5wqKYGaaUNFQ4Q9gvJ1xqyqoLF7uAHn2ouvSN7RwcD4b5Swd4zJRC6ZRXpHNMSWXqdG1kf3u9epGkdP2uZrmYFd",
  "key20": "37ioEBhrgf1YQ3wQ5HaQo3vM5mrPszDfer1KLhWaQgXWkmUC7439fBKbSTNVNQso82bTKFiLDBLKDHGX4Zcjkpha",
  "key21": "5RCjCnzaEYPrADgX981uzvToRdL4zyavadsno7miy2iFXk9fMrnBjEQ6PYTYv8SCZ26gA87zVdYjctLYUa7ZQZbv",
  "key22": "aGYr9dUTXWoZ8TQ35NLjTiM8aijR3cR7NiyWxD4hFtzbUn2VeT4hNCh9H7fZz495qMbLWVthsfSN2Ghh8XckJKR",
  "key23": "5YmNSx9GiYYFPTzEmxrvQLthzD3xSHo95wnnNYPRm7KuCTwVuWTiDzmEfRfA69xAv8DWdMzXDPBo4kXBQzYgULu5",
  "key24": "3eVexoV1r3kavj6YRZYimxmrrLtAZktaN4zfos2Gb4nbVMmLrtmKuDzNJW5rZsvxoYSJi34CRtBPdwf3iEmiDBBL",
  "key25": "36zdtjzpr9PNYwCy2gLPFD828bWuJvrYq35NKeB5wMcg19SAUBqL9JF83ynwKQAmXMcKxHjUGdPpDSm5gK5873yQ",
  "key26": "4jHyWM4NXKtQ4TT4tWTfBye8apaubH6SXiYDGZuBXuRDZMThxNdVUkqGgvwQ1yNfoxS7bj8CMkXYaPT7BuvK4A4Y",
  "key27": "5PFeLbHXq5YJv2MyYD7KzCVHnKjDMKTJUXghSn9CaGjQxgVmoML19J9D7RYfGnmQpDhTRL63EgGc5gKpv4LaPLEX",
  "key28": "3PyHk1TgvbYBcbZ3R5MiP9mQzn2tZ1kEctwCseS9kAL5DNzQeCjErAGWq9i33Db1eX7EjWp5vndkLH91VVvHGgtG",
  "key29": "4dEo11EC3g8TMK4RK7FPSSHHiLzLvhLZjWzV4efBdkn5dTe5i13fC2VejdjyiLjDE9CXKvDz6T1nuQJGL7Pq7CBj",
  "key30": "361pSBZiUuQFY7cDNDmRkngovPcCH2fK4mwdgfEE7MGwnzdF7SveXYNhQXi7XfxCA1ipq7CF7YzASagtXpuJh6pA",
  "key31": "5G3dn2DqWU6ZcNtz8xG4BuwdbV5Z3D5QBnUQx8g3rpBwZCzpHNJjjBCRebxebv4Ewx7JqsDDHJzNSUSNmScTSoX1",
  "key32": "v1x4X4hcWJwSd2YYRTaSyTUgUxhzTt9fWDEdVHUsaRxfVei5NGWTsMLsMaHoZkUaHaQzSat6CsTaH41ARH81G5u",
  "key33": "2nAtFq22vYjPcRtjfkat3ef9NFuV42o8yZutiwtNecxpv4ukeLy8ypZrNr4mVPe8bgEaC6mJyudabWaKrMWjpmtE",
  "key34": "4v3SYGw5gAiUxY7zqzryCyd4GJTpJ9AbXdhzpbMd8NKkp23RUDakabz3AZLSxGwcnuDRCGJZQCVtdA9md4wzUgXB",
  "key35": "2C6j9ZVZZgKr9BYb5xR45g6gMZ7Q1tbJ2NT3aYAkL2xiUP1spcbQWh8mgnnUw6ffDcFiJ4rS7GXzkNdHxxS4Cqaq",
  "key36": "3EgaiuXHjYAqFRY4K8gmZxrd9mUQLv7KeaUYLatLBg6yrfpbZLwVYGuBvRRSUh7mV6HsqEvUJp5PHMftvxEGqtYW",
  "key37": "2LwSucKSceb53PbyxTKv3zgsagUuzpfJrMZYEBgaKjcWYdBCFgyrMwHBAE1SvBJgT3hnCEed2RhZDSdFztiunyoE",
  "key38": "e8JsvmQh2Kcop2hwD9eZ2NQQ6L76xZG6p37929GLTX3PL8r5usNvAtYjZKLP7ssWAKJdodyayd8g7AfqJUQXW3z",
  "key39": "66NPkEaVRUL8oKg6Q3wcYVrp1jeQ478xdxZxpN599bu7whtxStfHXKYJ15vCchESZNpAF3fV1Jav9SHRH1EjFrTU",
  "key40": "2xTgphV9vF3FiNr1bUD94yVxaXek8mCTMztSym3ckiYaW3Z9xb1dwHTL3B2AFD4gd6opkmXRX7oFqedLSR8Zbn5Q",
  "key41": "5oMrTEsw6FkdeELwiDQW9h2hefugC8meUXAr3HBSPFq7wagjqonEoRy32mZtxF1swr9m5Bba4UAKsZUx5iX5Ltih",
  "key42": "3GSxRtSeT8R8G4EchdHUbSHoyyXKdvTgtNZ92eNLBFbEuJkycuC3EY7jRMxKCKnphHgUViYLgthqovMoHNaSjcjB",
  "key43": "ejVEyDp9hqUkH6sqQ4k3v9zZTT2owDDJQSNa8tffdn4JG2fwb9oxGGCqRgUEAG9jBhQLaSd19TrpiV9NefCUWAU",
  "key44": "6KNWV2hRdmwMyPzHuBDxRgf4xw6sKV5bRZURNukN2fUHRetW8Qw9VyNTtYfsXTXnaMpLEq4GY1PHKdoz4NGKqDd",
  "key45": "2sUskxsWALKJKzn7dDbjphQS3na15aNu3yLfXVD2njazuUhsJeYVVCVMRgQTzGnz8cHifPH9EwppyQV8K1FshwEj",
  "key46": "3Sd1mLMYNxQzoLywoTboBtW9pUucexcyJNsgkozAA9u5TprdxCHQu5S8UBEA387YLR1s5xbWwuLJe7jhvbGFMcF4"
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
