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
    "2F9X9umgMFhP7VFAXpm59YpATsbMYCWbqV3UFsNLUAAsLCkqNeqPQsrT38cm8xBWpbVswCwvMzZszfF7DtK5S1bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUFFwchnVDGQchT17oDotyuRaN3coPQaHMTERirRABhNGAAnTZ4hBax1SxkXsTthDmJdQ5pSZ8qjs6iz9EFiw3v",
  "key1": "5TsaX6QUifHDcGgfy8ArS7SWLQ9E5mSUStsj974DRQU3YBFtXMa6Nxqbzx31G4cNZEyKTLzB5SCYJPPH1DueLJAn",
  "key2": "iniDRsFKeV2Yfzz2K98vH586FAW7hJhjBKtLPuEgAJsYX34GLXPucB5LNPwGF2JvkCb3SeQ32d6Ewkv1wBUzQAH",
  "key3": "2HbXbiZZ4YiA65cvXhZ7HhvH6T2ikMM933A4rJxAZVEV21E5erVQfp7MFCGaEdHy2f5NcZhJndvmBey3apXiCfn",
  "key4": "2TLBAC9fFXTbBSt7cUsF1CBAW4akAcakGd3uiL9z9xMFT5wmeFXUBd5bVLVRrF6YtSLmvQnoiGtMsFUdqfZmDqfB",
  "key5": "525pQk5MTiee8aJucU6G35eBaoXMU6gXM7Qeq9gW7vGwC6mnY6rapJnLxngzhRws4Mh9H2YGry82wX3XgdMfFSu9",
  "key6": "3i7GqTeBn7qSWKEbZwo8vR9s6qKzCaPQhUJsJTVX75fLkfNkC5PQ8k7pmWhGSAWRFMjFnt2R7z8gtEQPxAVoFDBu",
  "key7": "4WGcPqnknHvxUXXkRCj4jTrmJgpzUJ4mND69aVBEqRrbVdJXxCjqSTc8oJ8aRuYmEiGDgystivq3YYhfMxKGFpEQ",
  "key8": "2m6SKdXKuWQP97HKGVqkbS35YQYfPGo9rvuhuWzUec8MiZBW7qKprkSrWxbUPHqfWnNkmixdaKCg8qHgTaeHjexq",
  "key9": "5EF6dWTKEwUNjAAxsE8avboEikStJERJ7A2xvB4egYLAHUP9M5W6nRvpCiV27FFkeF9LWmTL8nCYr4fcmY1G8ez1",
  "key10": "5npxHXQM43WXGqCu8L8dMCY8JsNAVd8mrozaTdP2wRZTCieo4uGREBRGggZLvXH4A6bZYa7SzdzWSAaLbxLWSVRq",
  "key11": "2PkkFGFLPGEtQrWF6Uhro1Q6Wi4WAN1iwvCH3LerrxcBW7xepADMva9fRY7pWGmsw7WyRBy5ME61HE8tqJhPZn7C",
  "key12": "2Ytt2NvRoBpG2KhHWA15KZWqNSnvGpQuND8X31oBXqHTX3Jk3UWTNeqrthe5ZnMNsx9D5fg9ACq8f2iXuSKzRg7R",
  "key13": "2pcCFQqLRqQFdugcQNfQV3se5eDCRFKNesCD5BE76nGX1dJ3ticiq5dZucuNHczHz2Gij3uajjWrKH8rskG1N1dA",
  "key14": "3kRPc9muBfXy8txr9bM1JMkAADepx9KXX4jbeNGdCYUS2uLXUN81oEaZ5yGeRgKV5BjxzwtkUfSGxJdDhZaN3Aek",
  "key15": "3uJT55XaZFiAb4uPuhuMypsW5nsz5mL2SJN1yj7jR5oEA1AdHEEEBSANB7fCQwL21MrFqFoXxTwEHik5wkGssdfs",
  "key16": "4p9DHD9yLWgPueiVgvEXwXKfeqGYsXKAH3BUsgcBqNTWMcKWY5XvsVnFyQ1Hkj7JZqzoFPRMWdWFxDWBsoDQ9Hxn",
  "key17": "4W2kXwc1hN1u619EUA6GhTQnodbcPhJzr4Fk38VDaePqhtQXQsYca6VCDo16QypM7Y8cpXfW5y3Vj8DoH7Zw9uCK",
  "key18": "5ghh7dPzUxD7SaCfd2EhAcLtqXfDeLZCyFRMcGGL8LhUES6RaVHYrMV8qRRAgthiJpKLhuTBXaMqRXSHfKCUrkjX",
  "key19": "363tV2QNwjXPL7uq6xQ6tVUi2CiUhhiNrgNuPL5rZdcPzPkqv8aqMJFsrHMxHP4w1rtJTfF1W9isq9Xztra3aa1H",
  "key20": "4Z4J7uMRGHNgp7X3DtnkTM21vwdFXocXQyxxYxAoSStEFt2nD7TzGbHXpUL6ZucV3Mj44LkKUyBJGMX53EsdCHrg",
  "key21": "3xgX8TAbncuPSnEeFkvfL1RcZXYt4LkPv3aFbkXairfxk2TWbB7GtjMViy4LCad3HvSF9LvLCLc7CZkqwTkHKt6i",
  "key22": "2H7Jao7yAiV8JTLymcvgX18Y3LJ6YXqbBeGy3wMPuE3RBxrFtwZjLjiCbqffvqVxLiHqmXvmSC4J1cVknyVqbecW",
  "key23": "3SYZn3nSf9Hi3VrUbRvqQrWjsLmTyBv5ZYoLdzThnDNTrHMBSkB8qzNAx61gaRQRSrJFsXRvFRNKdpRXw8NWpaF",
  "key24": "2Z61kgZYD7bu4hs9gecBD4fWCsEULURyPobTRSYHnwG2ocdaKkzfPnV4AysafXBhgiXLfESmZtQvhuHFVrRrctFC",
  "key25": "3r9Jn5akUrk1huRrfDQrsnEjEShDKnTPvMis1TbXiZxi4J6pHcwkfkKtB2ezFUmz7KLWE4VEv7n69Yku9U2WmBHM",
  "key26": "57kRMF4GtbsBQmiM7a9cdMz5TqgDWCF3mUkwNDNSdfAcZ9hEQG4BE13tiF7dK5nwPoVuBcffDq4Kfrx3egyf5nfN",
  "key27": "2zNS8ZaJe4FpPPbQTQU9VC19byYTP3vfKi4b35VmJA5HCC8FDaLy2p3T6MRDWaD4yrdNgj4JTMwNG1raEpFfimKM",
  "key28": "4m699LxgnPvXrHDRREXhTXjEoSQakFhKvHFA4cDBWtQDVA5cPwmeYhFoTbt3BcppiMkGaU3Nq8ES4LFTbGhemcHU",
  "key29": "4ouvg1HZVbXhD2e89XtvtomiCYujPaoWLoBq6FiN9DZd5MMvUyap3UXkrNuuYuqnM3HyQKjyGLS9MS8ecrNmMtGc",
  "key30": "khkMZcieRShQ59yHce4MoD9SPcTYC6RqG7Jmqa5s9G7TwSKWB1q6frTEAB3MXkdtmNTGuY4CqzegqGPsJPrp6TA",
  "key31": "91162vokVrgSCor2VGmxNmibsn84nqojpmR2UAhEJHmpnuuMTxf2NJK3qHxXL9FRa67R7JjYemxiXnaDDnPrn6V",
  "key32": "6AS9YMDNuQQrufp3AodgAC1GWDxzM6tammHZZb2gkSn5adaodkx36Ctj79RuGJwYaZ56wegBNDoaERLgKWqxNZC",
  "key33": "2Pjy5N38MwsNSoiAENgddh3wUAAW8jBPzkCzJXB96KxA9rCDVeeqNm6bCHen6D14EHhRgpNyomMQCYnDb92iJHbW",
  "key34": "26pWYtmvqcQUXYfRvPV2ktdrMx7fpQGmLaTtAGY58yX1L11XMeTtXHQXmYrYcXH4fBfe3CqvyfVTG6eWuemotuuU",
  "key35": "4FtQEtHrJMHDmpvtCWGBvF9KYePaMVzHr3GNVHFE8J95Srr2HumeZDQysfiTRxMwEpRrZESrRNqHk62FBR6dDotD",
  "key36": "5RMe2sPbx9jAGQ9xmWEyRoEQQbfdT88BGvJ8whncUGWD7yfEPMCJBp8771u8Frbj5wamNvAsMjnrKVLnb8Gde3zJ",
  "key37": "no8Y9xzmDZjxYCDttjB4RM8s3Ts8zDfcsEMV4YbnRkMboEpy5kudDTihbW8tDFw7LW8ZjzKzVYTcZPHLhwtUPg5",
  "key38": "5oxpewzRNr35bCYCcnfo37uKry1bEyGcBhUrHt9syju3KKUAQfcMZMTavucg8UKBneVZijkz3KGSoea7C7kz2eDD",
  "key39": "4Tw9GZu2pYkeLqVnR9gnkMbMf9QDqUXW9CRr9EvmWMd1exe544VEnw77PZZb83HJ9iEQXDdgK1DQr6738T4mrFLe"
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
