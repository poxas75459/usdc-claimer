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
    "562SSn2zbevyfzw2Ns2pyQdqNEwvF1BTePpSQ62uYjQWZzqnG4T8HY15WHwPGb1UVfgdMoTnjB3yWfh6tWjLk8AX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tYRBJ3odEN4mSBF71BTqLs51pR6qKqn5qo1NFyzT1xAmhPdpHLJui8rTv1usKsrgVVPvRThFYcAtUvsz4B2kYhw",
  "key1": "Wtx296edNMcCjxbtNBk7iiqRCAMKtXmDgJ4rb7xV56WoT7zFH1zdaUP6giU31aWU3GiGVnm3zKbf8tQdCmbsUxh",
  "key2": "hdpG5qJ8VeNKzUiZyMFk5VqrHYTX5icx7CjAkAuVoqiiMeX2wa4QJz7B87FmoYC7ToyCAoDt8yT7u2a1Z5y1bBG",
  "key3": "2cJSQSHpCf3wixJRJib8EkRoAXvMARzxHQR4eSbj8LxSE4dCqxKVThATArh1JLwXr6Q7jntGQFDY1Yi7w4NHZ6cM",
  "key4": "2tSds9coKAdVExQCGna7Hp2sazu9om8TpCEXqrNjXeXtTVWtN5ovCXCKMNVcbnb1MgeEibKFSyTS7CQ4fJ8JPagW",
  "key5": "3KyoA4VeBAMQh4bmsp8SHpLbcYPTr8HnXx31nEBwmvxDa55CmxpENBvAdUvg8nReFyoqWaU7m1SwJY3mPd7ivYPn",
  "key6": "5LsZysY6h7T1ATXgCWU8NMEwRKXQDRsffA9XHvBweFtUBxymkCo3ULV3TwBbYAqiUkp1AZG8DDJsnS7BzgAjaRWf",
  "key7": "4ZztTnyMPPGaiM34Gb38Hz1tvfamtPudSjo67XnsRuq5ZTkCsXJQHw5jHgHBCNZjcELLZPdkEBVA45W9TugjEtzM",
  "key8": "4noQe3V16P6DuAL8UZL2yvAMoB1zevS8DuGdNhGPpX6m381KMuLocxUq2XyAXfWLMVWGMPFd5tHtbJpYJ8DFdpNd",
  "key9": "4Xt8Tpx16UUxrNzfsnySnxaNjToDEBe18DKN7ojwsnCpAfH9hSvCWvQQeauKNTTtzEfrZsQetHfv2BJkGrny4XPk",
  "key10": "3rZVxaZG7cotyJzSeqh2Uj52VXcKJisbPwin5Ao2KJsgQJmjwdVaaNha8qRXNFCEt12aaNafSE9r2rC6i9w3hJaa",
  "key11": "nVZSUYefP2CRhF2cnacuPA2BDvjMaS1kZsnGVkawQaYt47YhtRzAPV8DN9mJX5SV1qPmXoNXUPUkLBL5pqFonoE",
  "key12": "5yM9AcLbhgydFztqBvfHuLnkg8cTtpEV71mT4XVbbUjMXuT1w89Hn6BYHjXsJouKFhiMdFyPaVBbGQRczq7kRkKM",
  "key13": "2DULc9VAfw6cQrBggdiNjBkQencN5uuQze5JQQAx1nLKbgSoWYqhohKkRLDCebQ9ZmGkGcgBT1gs1unW29v2T4a8",
  "key14": "2QzaiThs9fiLc5ibyWV81Hx3NPAH8muB7V8JWMkqtYUC9C9ExGMJceJi5LFzcQexztByPWN6vcS7Yn9RzeF6omSB",
  "key15": "2zRPzTEKDkBbzjUAQqZf9JoPVkimzF9tx8d9monBiouspyAvVivZD6ndCTJGj4bf2YKa741ah2mshJbjniFJL1V2",
  "key16": "5KwMLwoDy8P57n49H1oAkXoCx3ijWqey6MJ6dtBpdZFbzogQ3KVs3ePNBo6rBrWxQK8tZf5fBSTipZdoV13ozdUV",
  "key17": "2HYxG9oyv9dn8kDWXFC7CT7dMuSFJXN5ienNtmtCban6kuWdt1tU391AmiasurM2Z98xjzevoH5uWgd3Rhm5GD6u",
  "key18": "4e9FcTdbgoeNvky3PFaT2R2zxWsZVMkoLKUqCyx6VK77HbenzdgFB1V9ku2hEQYct5yEVbjcBA8w6YZZ2Ff37oPc",
  "key19": "58zZzQiozE94rzfJDJABvjd6Vu8EujEnsZiwSrJF1MeK4H2Z6181N8YHGdoD5v8RbdAxmDF7cLKLAcNEmypwFRX3",
  "key20": "5qVL77a6Eg7eDMVpXAyPQj7FwiUtNsBo9KidushsvN94BEdNLp1t21xRW2KR69asZ2soRLugzgw3nbU361nWvXgv",
  "key21": "53byhdudwFzvERXeRjRrCjv1zMHVFtDmjTeyagKU9pYS33ZrbuSR5VWZHCSiAP1iGmXUALpuifNPHm63DXP2F89j",
  "key22": "3Ngsv4sxwgvtzYAsguHgjAXoQ8LzkJwW23qESeEM92ihgCt1SmhvqirNejfHpUSU8fqYsNQz1UYSZX7TZZdF7xNm",
  "key23": "24sHT6qRVUywBBBz6pGjTEBsLSFNc11PNhA9tZ3mwZcqFQ5XF1HDhSSyU36GnrxTV5YjadZ984VGTJrHStgao6fN",
  "key24": "237FREtDPTt4eP3kHie67bM3R8sBMLW6mtvohnPiAvKd8veH6fUQ21P6UeCwpiXZSxHM4StwjyhWaAQ6aAynVNH2",
  "key25": "51aFhxE39N5eqnY24otgRkmBpDfybMnm5cpojfmanWFaXTydVbWzihJUTQBL7j3wY4urQSPkcES4fYKU59GX4v2W",
  "key26": "4cBKaqsQWBVW2xmbLoGM8UzijhqwyzQE4oLizdhf52J5EUbsYuWunqP7S5Xjq8uKgyE8YRx9Rzpk812X51rJv73F",
  "key27": "5JyzYk62Bwa2ZYheZicKnUPjCC5BT5roauuX57cit2pBhLeqZJVPkS3fNmuaMKez5hFvt733AA8J9MNFU8Mzsvg1",
  "key28": "4MPLBBiaHT99U1HTcn6rbkBEDdr3FfZsH6JQhLLoKwLy7PUnYwxC3xX1CVhmKxoSaFJEKwLHbv2cgNuGmFtdcqa",
  "key29": "39BTiJr8EP6214ipkfp1TQrp2FbpfPhzGQBpQgnkT3KRi5cWUZdwv3q527qDfyk8SZ29sUMTprRBnbEmNw9FPbRU",
  "key30": "3dmySjj6E6Rw1UcrPXYZKQMh2G3SVPLfZunngfnbmNdNoRmMG4QFyhXdnokVraJKMkQggKmqwJpX68pa7J2P1c5t",
  "key31": "4wi259B3qGtUw5iAaEa3jenrSG5iZhyYvGkG6ZjRmm88BygCrgnCwdiH65w5WFEjkj1b9c8snn9kEvCrmZsmux9b",
  "key32": "3Fv2W4VzUxXnUVpSGvQwvZj4jjJqFsseFGwTrppoJRGFzRLfP7j7zMrT9cJVSmaTW2mwfUqDneSsJaw3LTyKNbrF",
  "key33": "4iKqMDDWtzPSddSV1VpzSbdX6GkQTZpTQcigZG2HQHzcvjeNrvwkYvpPdnTEwP5CoRDtJrCy9DWPS8qyGk1upKkQ",
  "key34": "K3D6FVCQKT6f5BzvrATAD194XF4NBu1tWaU3fTbE1DXn5aqAZ578RWymAeL4DDdMtXBeST1CLe2QWmDAfq6gtjN",
  "key35": "4juL5d8QEMAdNtp7CwjSgbgsuL6tSNPm9oxxYozCKKwoEXHuEUpWBG8yjLaVoZ7ugHeRt8iERXjAFeUEJKHKLpWe",
  "key36": "2gf7Xz9opHptmVUuT9vB8p5A7ey62L5ZvzWc94wZrTCzUYMKPtqe2f88eMKWTWgZXrWVgSCTWxddk4B3MDvPVFz2",
  "key37": "RCLXgy8mSL8QumR2Pkf4ybjdyaGvDECZvf2hMmciHQaUP8ZTpjGUSN2rGdB4Aqjfpm2e5eD4JDLfUE7HvKQN623"
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
