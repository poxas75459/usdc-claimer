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
    "2AdpuA4kPJRSKowqWfQfdtCQKno4mHksSM66fwJKviCHSnA2GjT1YHfRUXdV1kFGjaYZAz4wcRmZCpw5DkVhPUqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7Ak55KsyNRqKHVpQqhAAYhxy4eMHEFxyrEQ41egDK31pCbGdtLdsbAPbaGCzwrenHKPfDyyUfcYZ5MnHmU5QfD",
  "key1": "tPLuFtqSHzuynYJN3hNvNBhNnyjko27ZD5BkgmkhZuw6ds4qHQ3G2fchqKzRJEoYiLVvCaKzQQdGWLzyGc3tJNA",
  "key2": "GLPxBAC2ngkCYnQ1SgKreMCkGmdvqwXf4iQWW1uRHEELQga6nBVd8nvf1FXsRDzXgGRkyBLo8HDUab4t8Tu9mkd",
  "key3": "4Mv6ey4x4R8w338f3iEwubcwSEJ7eYDAx3sxs1hwz6zXGjCNF62255LELHz4sw4wuVwvM5etka85SaBn8CYMAfQi",
  "key4": "4wF2JZ6WVVZdULfPcXGcsWtW8quYzckqgzgMdPr5wDLhKou1fq6DY8yeZH7xoz8UwKKorg9mXg75Ndn1Hz3YF4wy",
  "key5": "4Rcbcb6Py63jC5sjwpuTNZLT28rYNSzGGxsa6iHTJLjoSiZxXgESA2UBRozAxKCp1CtSQaBSFC2EcXvgYbMJG1Vr",
  "key6": "5WrEixPXqt6xJfcgsakVKCKpsBJSYauvrgUkmVePEWaLJye88YHKVzGzL2uHc1mLqse4WCXvqbLTAo1eANRdAPPg",
  "key7": "5MngdfhVqnmiNLRV2dpiwpgE9mqzXpK9RJYFPUrYwELMXrWBn2iQU6YgPVgg6W1s5ewRTgBCXM6YY4nH6J5U6e74",
  "key8": "bEzyEmTVBCLwoZLFu7KGnZ7r3eh6NQ5xoj71psfUNyQzyZSfeNcnwdcfz9JQKFtuPBZUdoawLHs6fZm6Mf6vd9y",
  "key9": "4VxtaKro5dVJzePpmqQzWmf39QapcV9rEPZnmB5gMjQCYB4VsVSacA1SauMx7KTvTbDHMhDgRPvJ11g6K1QxKiXC",
  "key10": "5gkEonuQRb6HBYJwKWhbbsVsUh8kCJzw81PRLtRpC4BYERkkr3aDe75XyTSWMFp2uezB4LBbjoC8cKoixgBPrLci",
  "key11": "5n3voUGtkXTuff9Wy8Lia3FkAukJHdiouEqZsimXbPHEo3ZbqvNGhYm14wh28UK1Y5vVhyWo4WeVPNyMpTx6dHje",
  "key12": "Fv1J1s3YcG4wJN66J1Zy8Y9ePqXcoi1xtorQ2HVPTX5SpDhJsC6eNiLsEinhFxvAH4e1sa6JDv688DixEsn6efT",
  "key13": "58iRmqZ6R76gAVHqJUGqgS4EmsE4Z8U7JYUVqvWY3EFTCx16o7AjXcwLUSDZ3udp2i3dCTPq6v1THQcyVpiTU6Y7",
  "key14": "2CT8ffhkL7Qb2ZNkiVDxYEBfrtLntSSZqGvkzjwhBzzudXAHLpd9XEFrweqdYKS78zvaSeRumSQYfs2M3YKvzSDX",
  "key15": "3q9Wk6s83pjwp4gBqWNDvcAeMhj3yeCEgN79egXbsrNfjcRSFo1mYkECENt3GT8cEvz4j7QbNcTNuLH9aC2VfPf4",
  "key16": "312rf7nZgpC4T1aFqbrpxJZjnGdSn6Si8M71ZZQJKW4ECN2zXRhENDFCeLxX6nEAC83qUjq6bw7HQnSvyNWqrE46",
  "key17": "4qd2uhmBvA79pKDCeHHzBz83SK37nWKWoqN4ivtpJGJvaLLNnkTLEYEJNTh4J6qrqcpcn2PnXpp5KK78RWSbkQ5h",
  "key18": "2E5FcrAuvWwuYMjxh3faXnZ67cV8JhirSUCd25vrn57Ava5dp3vvCc3rG4d17aqzVtqTZosCT22LzzafxpQQeVZL",
  "key19": "5g81kSkyThFdbd43p9kB1gr3Jshqos4fcKfCetVFp5Lvqn63ZqCTdqbsGUk7Sc85PkFwXhE5UNGMB36BuXeNPSdd",
  "key20": "VKain3GMHbDNa7AQAM9xC8JrU7tPTu5B8qktSkkFkMKXNef1PMYLsLeAhTVMQdH7G9BDhyvRYS4gq3RhbHgmfNc",
  "key21": "46QN5BfiMMEk3e46R68SrJtBi6XWwDUYJRGJP7MtgHj4GBdax3XYm3TXktWqyrMPRcMEg5jnkMxtRMn2KZKQiM7h",
  "key22": "5u5T24u1nhzvvYZiZfV1WBzt8uqmdgKQLyQSWYqN4dMYo2XwvPrnMgcDKcQspCjHvaF9kePVGHgDoQ3VPb6MxcjK",
  "key23": "4u5MDiMQGf9kRb3zxCyP6MJDCLLF1kBaefryVxHgFcT7JsXqzZ3ELtcvY2Vgmw2Ne7RpryguFcHPzFQ5fgaM6mic",
  "key24": "2BkLwjxcPBiPGJajMHnw7WgAocAsBfiqw5H5UWD3S3Tgddk9bsQd11HormRLsKHXUj9jDTsw4SjksebHcE6iqcqN",
  "key25": "4q3y9hxZ6C24DC9Bdi1s4tLdm5PZfa22Byz9heX8MuAmKeF7RmAciH97bvG4YBz23DPV1Kkj8JTNr9aRfxZBAhz5",
  "key26": "47g1QktG27nZuLfmxH5Bki7fMrEXcoa6o842PMWhAW7PdaaJoobkjFVhatYmNTbJeuZLj5AtgXhdmDWbxaJKvb8i",
  "key27": "TAvZ1iqLih72UchKgXz78WeLYKur59PimQz83MuP4JX4CA4pLEytM8X6mkt6GdQRqpuPk9uPSwvCA3rVbfGJVf4",
  "key28": "xW6NyqNa9PKMVZyM48RxdaPAsQNiAmD9YHvsL751TMyEzb1nGJcp4jGNMvMBD8YSEVEDCeyMWNXAPNvhehUuJyE",
  "key29": "4B2uvYHRsKzvfeFAenpNFfZQ2AWwSYHJ2KKJ737CzpHEwoAp3QVfWFgmWoEDJcdAibygyMNxAJHiLhVQfLKwxzSf",
  "key30": "5f5xmaAQSh7AuT8GdV3xCpn55DzH6wTzcNLiFp2uc9XJVQ4F4NSemthGTR9yjiJ2MmDnkqGBpLC7YCZBPASAfW8a",
  "key31": "2GN8rJQbRNLzJU9bnwE9PnJzyEEm2Uox2dBfhw3sjiQEUg1ddpCNnpixmBLjwbfdmBJoTU14Q5FkbekgW3YjyhPY",
  "key32": "eK3nCsrv55dfcfporek9oyJnKeKK2QSEQffQGd5TZ4JwZkU66rWZdYsssZR8nR4EEEM2FC6Sap8pqwKUmBXhCFe",
  "key33": "28sthjXS62vB4SsNGU3nmhmLhUUPPPKdN3dUkzYgVta99zVtSukdPKfN8J7KesEnF21o48SH52EwkuRFwLfHHguK",
  "key34": "cbaE6NsNU52nArskt5eAEeANGYjA4VSrn8v3UosR1esWfsReH8TPmqqUKSMCXaCe5uVijvXYuPsnWZdft5MVbrB",
  "key35": "42RYZnoBdTezdmmWpw959Xpi4tJ2kFVofQpxRDwRWkpmrynptdvMDdwk8TgaYMQrjGmCn1FPhqLbCKSNdrp2r6Yr",
  "key36": "5fWpjB3LjRizBwzg9NdGVp3AKCMJKBDXE8zPxs3jBaCKH6FmKCsYe4zXSqFioPghHbJUieNrCTY4oYjpEfqr88uH",
  "key37": "5DJ1Bg4F1n1PGKuWAtz4TYwZoCt4Vmr5q1uJAmnLVTRu3YdmcdKaTGcvS1YZoSbaswhFqZ39tmtPgKRTi2THjYi1"
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
