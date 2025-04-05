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
    "4gEMWDFGUh3upLqi1E5pTK6md3zrQM3xrxPKVVUufg8oFmE8zufxBxjw9GASYxShUycmKvhp1PGLMmbJCfkiAnai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yafQXTYMXoBcc5MSRNFpVJkSmBZcoN11wLMURWE7kPNzWqYyvGdWi7VNVqwVV9F4eiNazNJiV3Yx9StcAD1H1Aw",
  "key1": "5sqgaVJQLC8dGKBKrm4MZWByDd6Fn3kB3C2onMpcHMBuARBR8NbYqcBrapZo6TeDNxWHPy8SKX1kzHfZGyJggiJo",
  "key2": "3N1h8sX7s5g9Sj71opfjMXT8TKeh2JcozuAHm2u8i9buNRLH35bB2XLUxph4qthcbWxtdPPj8i5Zz4n2EJCG7jKM",
  "key3": "5eTckJbEvtihstKdg3ySrvm7f4RXhEHhfoEwwqtoZw2ddCk3bgjnVmXqc2vjw4v79BY3ihMsqDYQMJq5LQvj1fC",
  "key4": "5D72KLD5rbyK3wj99KyrcjR7j8yqh2aaqxPKSmv7kigxDFPFicwqoJMVixs8ZrEjgSVjP1yeZorfAAbFE1R5JfJt",
  "key5": "bgLdBYo4sisk1uyARhgnrCX5aemF1GEo2v3Yx73mHDq8ehjKbmCRLyYJUFAs5GeaKBevsre6YDb6mnqhyCNW9im",
  "key6": "3cgK9bzkNpXgsoqZAgwCAuBmhF7d1PCguEvwm7GN7zfpGGsA1kPD99CKofsMsg8Nx6psg5AtJ6vdXdMLCX9pfryN",
  "key7": "5oUCXG4oDun3YjjY63AK9EYC4tTT5yMEBrTYyNLH5UxwT1yMScmTpdgMP4bASUv2UHzVQgQKRS1FFZ22Npb7Q8ML",
  "key8": "5Ga1BZbRqo811ipjkQ4BE5GPvC2i2DYKwpsJWBWPpqRchChmwkiBihMCFzN7SUAHMtzvfLkdwwnYEEAg3nas4T1Y",
  "key9": "4oZFR9nPLGy5qQ8wognk9VE8AHMYVFP1QUJP99ojB7JUfEUgGHfjbh5ff5TZAC2PLDwtFw1SzgmYcLqKtE7CJ2o",
  "key10": "62CFk7RBrcNFpjSgPxikzRGZiiv6qisFVCnBKsM1GoKHw2DTLJxEEM3fotgKjwzehqMJWwVrD4PvUEYqEWTaJZcz",
  "key11": "4LXrhvWMqtBCG7WF3xgvTzgf9XHnu3LBj33JmS9jo7VVNXxodHFpW1XiQUP4Yr9h8e2Cd7WAykyuRUpffKJRbPmA",
  "key12": "5zaRCntKwd5xtpuajqDKL7ArLyX9FeBQ5ge2nAcBHhK4Ykj3y9fZw9atY9GQQtjebeCYnoBXedTsnckJayWmsDnQ",
  "key13": "4qTvGwCJ7xMRLPHiZgG2xPxuHCte1XZgkePkaKHxR9LGLJVrj2ekMfUVh4B4VmqThH4dMjNeket14xDw7FE3jzcW",
  "key14": "5ppqc1UckvNmBpnuj4npJgDsEgsJhqJqipqF4KJTLDL5CtdJ4RAnFbjnXhNnLMc4RyZQvuPxmRDbumJzuEUqykhQ",
  "key15": "2KupFbFBXtf2AztPKXnYDDsnMpMfQhFkjQzdQ5WCBtPEAgS75mXSKjVzZzh8V1AxMND99hTPQK4UDa8SojUJNo8N",
  "key16": "3jpDgnVxpjJv6X8JuCUF7ib3fVLrVtkgds9awxHB9BNYtWccYxaa82CGZinGkkcjm7ebxZMjUQLx8q8Vq7rpRcrQ",
  "key17": "4qP6kDTzE1Z6bqx5vZYpDGLzSy3E26yESro7imwYCYkETu3wMc7m7xszSUp5Edt7zuL14w6CvKM2zKuyJpfvYjc8",
  "key18": "5Fkaka9FkUcSDsMchUSAkGZdL3wmJd6Xt2amJsauiC4bfAyPwVpcn8Zrudc4YQDMY4pmbHvxCu4uPSyHQcsgZut9",
  "key19": "NoPfQKXQosKX2Ny7z3WDY5QqxeGLF3Sgn5Tb225nAKtN92VEy6rQ7ETbVrpbitYC5FVvdRe3f5P7qgTFprJt1Ny",
  "key20": "3nEXFrecCBvLiqhv4BqekE9WrSuoUnZdMC1rVX4K4tStkadMsfE5rNPn69ScsMqEdCN44E2eRoQhHrMAQddQibEa",
  "key21": "41YeD2BtW3kmCex81GfviA2hvCX3mYAMevunAFScrXNT2W2NuCHREwswz3WfWNbdkZCmHPSLHrz5iGvNdGh8fLsZ",
  "key22": "4KHA8CgSDYR63yvQN9EQrNCqhSL2QVCBdEuEn2mxGYV1PVyJHRrjD41Z4deToFZb4CyoznnEMiiDPGQtgTZ3hFTe",
  "key23": "4abxhn4LvZ8DzcDkiaEofnXPLzyUFsPRryTSNFkmVF54fWpfTBMwmtuiDv9QsMWCD5cVdd2ZotVzJZS3Y6BEp8XH",
  "key24": "2EhWMhh4cTTiqPQMsLTinqqBcdojTkKHj9mm4kkJhWYudj8LkxwXT2Ky1Hkz4wbsArA4Rvpt8bjTq5fY1qJeHdxi",
  "key25": "2GroZqVU9FQUdp4BYN57jGpq9DA9GuqR1Ek5yAeeYRxNey3SrTPmVjkpcyqwKb4U83vHUby94pkbcJTbEhsuhRwy",
  "key26": "3Ms6offsmZYjH6DtDfqtHQSzNBSSVKonFk63zbU7ZTQZHAFZFS4xVDYhmMFN9YPMbHN1K5cqRrLwi3iyfbGUyMoA",
  "key27": "2LoYFVazLS6RDtCwNgExBBV8dEF1nmkn3aNnUCGYrRdL4j7NGvU7MvD4PvdAgVUD48oNVwxp63h9kaH5sWeMAjaw",
  "key28": "4NnDSnUgnoDnX3f6kbQ2276h6vWkYFC31wtidKY6TwRj3YddN1wAiJ96otSXsgq77R5wGj9touH74D4Ax7dXyaNz",
  "key29": "61HGaa9eahJCizJuESuWDmJ3N1T3iURSW94NZ6xmk5NUEyD1n2HUQCD2c1g4MiUpsP2is8S5n1mzCszWcpbxYraR",
  "key30": "cmFt4Pv6sjBn6eRfChwKibhcVux7thugrDrpK62iQVcV6m5TyeDEQCSJYc1w6fssLneG8mM1ykwckPodLT9Dh2m",
  "key31": "5jozJTDEVdAypkCZ8usy4JpUNsKnNQvsFx1P8zCymuWytCYVYp9B4pNXWw5GuWumZcYfvNUhBzxiTD2QWzWJ9mGD",
  "key32": "g9i2GGASvMEEFrrYaN4mTBjqCydDj9yNk5CQz8bk2HufqUaZSp3gRccihTyRXs7ZuF4Y4eLbKJembifhSy4cLJP",
  "key33": "3ubCuwjqyvrVHSJy2A1Bc9WDujgptBJzQLurws1SCiUqwGRRJ4s3KrZTkLbhJLtPeSiZXSFEzWtZA4Y7ttFztEVA"
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
