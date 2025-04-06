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
    "4qcXDq3ytzD1NQS31WfvtdrqhPDiL6eYXUSwFxD3Yc2Z5w4mXaDYqD2y1F7H9WFVxtr5JCX4DNkzPdvtQ2aJ9ACT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HY3W2YtPGFVQahpPYziJZg4tzGJbdUB8bgwhg6nUZxaT8sumnqL554GHqvZ5xz95W7EVYUGxcgL9Pkdv2F5RLxh",
  "key1": "3vPANd6peB5dGL64ceX5GsC63e1xJ4XrXxXSUK37pXgZYbNu2NHcZfZXqELMbcBKKkwPGWQ91btUitpWkZRRneuB",
  "key2": "WW6pR1iDWKVQR5LDHCSFwUZQB4DdXWnqbFDmJfFuDcuxfqpjw2q2288ibWZJpcYAeLihZTwu1c2wZLr1W7KVZHy",
  "key3": "55BGv3bM2tkdFwywVFaZwHjHrACaAkmwDRxKJkXFY6HsMWC4WtQGK4W2mpgqfsCYsZi1CgXJnCWBoPff3JRKPPQT",
  "key4": "uLv5KWqoNEJ9hEmMpEXvJcpsx7E9wipws4LypCqGHas6oGpJWqNnJk4W4WKPUKHAmKpAMeHezvWNwUq7KQsmTNc",
  "key5": "4S7389Nd9SQMPs5Z628u5gC8BHJakvGQaooVbWE29GmupUBBkoDcy13gStAjhU6zHSYTYhn2pdnbcjJNHGDw2dG9",
  "key6": "5GRVGT2HQsopS4AF8wUwZm7sxvJtWLg6gogJmP9vJ6AaMj7atVQf8RJngtNMigTvsJ2rQZ3yUTP98665aKVC3D9h",
  "key7": "eUHVXYXNUHPw71fHTqAgwsG8Drgmaf5huaSWrF934DoZyahQ1LsN8smfrhpRQCkckY8tdGoHsYbx4THtDAjqk7B",
  "key8": "2wzocFjcC9KAdtM6svJJ5VaQNepupHWyEmbrhpVbcvYG8KpcdqhBtATZuFxtxpRfmUEcZMVCUENQYVjV6iYoRYqJ",
  "key9": "63MZLKmnN18Ud9oA7VgUPsYsqHwxx6vjApnVZyJoBxsLssdsJZAum3MAoauBQt9jy3G2AvisLfuuwfFgE5ysTcfS",
  "key10": "51yjBFE5ivtcir1FBif9pivLjCbWCZoxN9N2SDxvsQMB2X3FetX4YgQ7Loq6u3Br6ERBQPPvVzXnCEjta85q47QQ",
  "key11": "2mCXSFzayqg7G5F8WmeJbFSdnBoJhVqVz8mcovBpBCE3SqcmN4veQANCHQAKFrxM7WotV51wJ6GX6UgY8nE59jbe",
  "key12": "2eo5mnwmSKXeiX7eCQSDnyf8WGfS1uB7BqRftFvhVYGzfWQbjuGdeJHDe1ygTyXC65q6eMKq4ApKZ4zwUeUMYBHa",
  "key13": "2mqxEGoKZyWFVz4rkxqcLngjHiPmsbH7qdhYDs8TGwscbpHg3drz4SbQ4ePn7xHAeDYmVPGTXdjGnMeJuBxpDyxa",
  "key14": "XpKL87v8DfL8XtrJ8vmnLLAZtpzvuwmxA6FRSWij9YukYWhrZxxAHZMbPgpaFMEfaGiJbRimCFAvnUWjJVsRNMn",
  "key15": "2wS86G88Z8S24hWz7MdxUeTchNqySYHQQNcLc4hbJ8TtBvJ7X54tv94mYs8DbYDUjZVhojgMGE1HMT5kuEg5mDw5",
  "key16": "mxMsoRCwyXHPheE2Tv5qQsJeNo2Nehfhfgyggri4q7ArgYYQokAkrComPNeQ9jxQSgQueBZJqobe6jSUjB8tGXs",
  "key17": "4SAbjgiSXjyqX3opsRtF5wHiWCXqHLUjSLgC6avufKFQkrgagUSRC5in36Tr5MbtsQ3XPe6sErWsrBpgKgSjHyoa",
  "key18": "37ZcseHJuqFrGyFR9vjktseyzxM7MU7ugParBPnghGt3CMgQ6yNRw3M59Ew2VkpQ5HnEeyRGaRSmcKZfsUwwGmYy",
  "key19": "m5PCnhABXGBZV7ZDFjPVHhkpJEstmPpvpY1jp7Qjn9Dx3NUHiC5UEFG53REeszNG1BbwbYkwTJSVyAbQt1pNTGJ",
  "key20": "1jU4WSVrKVCzBtCY3hrEBwg9zebrhiS7UMmsEoTqFRGJpiNzTKvaPVw68ri4DRLr9HHu5y4AF215AZKU6T35fEh",
  "key21": "UbDMrLiBRLWHu8VappJjngLZf4Q1DkZGvtBL1VVPoyPViUJXkktDXRprc9rLBBdYEBve8tq5FN4PNLG7ghKQkqi",
  "key22": "2jQoi3VSfdpe1yFxdp9TsJEHsmZ1nBGqDHijMKeskei2CbvguGn9SReezcXiRoQuhu54VrWijfHP5Qd72CPSNA5M",
  "key23": "3SduLJVMTX4xoaLaGcNU5PbUP6bEYwaVmbWtq98Zm4ahkoLbQjDFycXMsFQ4bYSDNobHxaLaKuSNqZ9dRWejBkoU",
  "key24": "3kbwVC21W1v4gpkNPZ3fbwvqLdQigYRCd6CZCFmp14tMHnjwgC8nxtW4UR8MxBveYiFMxWwQQBRDGZ2d7YzsRZHu",
  "key25": "2D6Vx2g2bXhJAQzQ8DvZgPkUGUwb9PcNZnor3HUVuCZssPwjtX5LhSLY2Sqig6Xt2xGuALfXy6LjLoYk7zMNWkbC",
  "key26": "5RJFQAo9crquXVhU4eMnMsjHGXUmyg1mR5MFbb1XRbZkTcKuxzKDUoPJomEzogvoLmnAZi27pA9vJcTNbJjLSDA",
  "key27": "2umkTaa4ucNcw7gJ9KRSWL3VpRsbBnpKVDWgZAYqx8DcX8zyj16LaaWvXVXEqA1DBDnPMpHXm1FK5syFEtgCyXUF",
  "key28": "2wAsPVraTr3d6s35BxG75at6kNdmsqQH7p1k4ho5efKekvMfx9Z6TFUAgsRvjD8tqC6oL3zbv1ac5ZRqYbSoT7fq",
  "key29": "4BAz32tCcBePdnBJE6LtZvf7NY5nG5iRssPNCWFkq73EegfcKybmc6Vu2jBH9sfyxM1MqqjxFhx96APoNeAgZkvc",
  "key30": "3LeCsu8myQZTJgXu8JRW6snGRbqQsjHJrDvxf3sG5faikS5b5bfjuoVfjXW81ZUbobAnPca2xh5uR1R1FTSpaLGU",
  "key31": "TFr3gX3FwfreR1j69i13nx4am4GGnhNSNeC2aLMB57ZBUmLcv6g8Daios8hDS1mNbuTLhJcpewNHtk7qeECNhdB",
  "key32": "5ps5b1mRC8Nqostvc4U7A6s4oTmdaToBrsp298f6QPHvmA5375wWgHfoSTGyYyeaYKjVdyWGn9m3csCYZ95nwqpy",
  "key33": "seGe8oSMi8f2a5bQ6NYZvEPEAHdzoAKyXn1BT2FNBVLSK1ipR16FTeycXYsKtVNDHcDfDoGCaqn42uYkcVQweQS",
  "key34": "SYCz34mYL6ybrAhfawTshtfsrwtngi1YGuaavmjp3ub99m9AtggoMEgH2YAJfy5NNEPq6wMNYuGfncn2xD9zkLs"
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
