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
    "4ZCxa8diwS7R9Lgwxm6JRmrHZHf1nQxmBSv9aS6BHrKtxEKgz9b6MSP4PyHoBBKnG96DYmHTCLwduBaCDu7PMxPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E8q2F4sY2Czdyv1i7hXh32ZGJZZiPSr63De8ptnJWtriovPPi8j5r8TAXwZhxKb2XzdTgwsF2reYz5Q4amViHX8",
  "key1": "5ZnoJhzZoFRVEtfMcyEVSEbrw2cfNbk16uLyf35472XAdJCe2xzDBozDHPKAboJC5TZ1WtdbwKXirNvxZXCdSwyp",
  "key2": "ZJpStzaxfQULfHrw1hfSr5iamiRERkkyQHas7UmjdPfojVz9WFqNQmXauZqfvvUbgEsRWcvFmUvhy8MNMS4Y3zL",
  "key3": "4HxdW5R7bn7RMFtZDcjkSNMEsmh18hgApGck5YaiZz7peudi7KmYqjQhPGU5pJw1FzBgP1CEeP8pAzc9Re4sHebK",
  "key4": "3ZELBtTF241KfdDN1eQKpvG792oMVPWC6aoacCCcq63rtX6v3aATDw5oxSnAWUwGNxzZErNBWb8PLCH3Gg1kmq6a",
  "key5": "4PXmLwJvbQUCZWP2MDWBXy1f9ArgNXnHWwbguHFgQGV5VsRS29rcMfia1cohdsiSHPNvcAxeJNFf6DcnfNk5Jv61",
  "key6": "2eCdwpnni2CJGcpmoQoGhg84z7MLWx72qAVWk95HCFUL6y6SRcpm8Gj2LZ5AVmFXaihGHpBLVWV4MWjEfFAEB9Vk",
  "key7": "4BV96PWtnev3SPLQ2yKeY8nNfWy6cMTDfGdSU5ZDz4Fn8nZNsSgqnPDeNuASycfk6BMJfQQL85LhC86ezk4M9m62",
  "key8": "3J7hCfuZfR6UJtcqVwsKJyTaW9x8AB6H1R631NM69yEP5DjUJHFueKeZF8Gomhzb4J3KF7rjK4VxxPpooy8edftC",
  "key9": "22D9ANooanvwHMBD84o513rRpt4p8GEfFXZwpL3h2KjyK93bVxbg8s9UtJonZ7z9P9h7SEi9zxCwbix2eCCu5nPM",
  "key10": "2tF7JUnUNFDPQUFsYok35fZvBpDaoKQLCZFou3istkyHvXaBDvdsfrabbAY8BTZRf81Jvj1KzkdsNGG2wakBwaY4",
  "key11": "4CNCN4S7A6nbZHjA7m9scqopXq7hfudWZsoaa9Y9ove8N9qKzS1TpMK9fMNojDrSnqV95D4Z9DDJ4rmCbQiXJh7W",
  "key12": "45ZzmSK1bZ6EAGGibggSGT34AXeczd8ZtcjTQSCbbPjf5xKteXeLUZpyAPitg7aTEyhXFN55XFsz8cyXNdgvGoU",
  "key13": "nCt7e8L4Dvmdcz29n6Qc2UTAwXwPyvEJUseQt8JXVbuJgsK6pZgtU3wc21iSw5qbTnKhSt31zKYR4QhuRBFcKeW",
  "key14": "2Ns6rHdCsHxeqn2rjNGxTojfJZVxDzRLXhxc812wqi8xi34EL5koWQfDby8xvVWLWboBUEvC7ENFVoLAbwsHnKwM",
  "key15": "7bXviitnvmpLvuV3ELwsmptVQ559kepzBrW7LUdxxDndeqH2twfGHSiFFLUxiG2TgNnYQgp53BovrfhW4trqWYQ",
  "key16": "pJUVy5zDg3gBtDbJzNSm1cbzbS7JuxR7q1wrrvwzG18JGJ8GPZUDneWfKdUMgckbBp8urqPEpzdE3iqQWQKTpX5",
  "key17": "3wzR5J1LRncYyEUQPXwMSQ31BSnon6qBk9MvzpnuQejDXQ7tkd3vYDGVZdvyzF1kfDxeqM1VhEZbU2jPwqSYNBcJ",
  "key18": "2xYZMZzRnevHZPnBt55JGu5BEkkFCC79pnjZvgrJf4CNtDWAdNGEkwP1zVbBFoHzjRDPRHiAaNLEkxaed6afNBRE",
  "key19": "gmpPfRMafBHM3corCLUJwFrusjUuGXbHbQMNDW1Fr5sJh6Y5qQQjAL6JQXqLe5e6cgqrugtgkNxr6AcRf6hpTet",
  "key20": "JtzaTd3iD1PDQUg6rSGqWTQHHCW68AHXMNRVpmJCFhJ3ReXfwmKGJqJnPU1JWBBsLKa7YM1BAhxpwX22nRR2hkd",
  "key21": "2M5TacHwcJbZBejzFihXwAgABDcA9EKBpECX67Zk7QdeH3S5FhhNeZazVX4kc1ww3RHS7CVjpNbmikg3CPhLAwUC",
  "key22": "4LmK3NyrsVc3sJMhQYZiaqZBvzSwhj3J8Ns5gGKTJajhUYRHpN5YCSoMwj8iuPSo7yYjfgWeeRiDf1FJWDuiwis6",
  "key23": "3vmWqHzutKTsNvFTP7xxiHmvQGHZXb4kBdCD4sRxveC8GnVmiDC289KVmv7uCJ8NpDfuRYkfeky29gnoXgJGSnZf",
  "key24": "3hYKDs76E9cmkdTDR3mgC35HLocvZT1F7bsBSDBVaMUWWxTHTFBbSJnwqpXb4SxXowxEK35q2m4HpJJkm3XGp9RP",
  "key25": "ib2vq7h1fu1HGF8ZvzDERrW78bKqN3HyN5gybXXTMALqrMZCg641uhpoS3aqthgVWGjde9onmGArL4wgq6nZmuG",
  "key26": "3UdRWdT3ZXi3fem8sDbE3JSaCWiSAGSPScg9LJyUw7xKznCnzd6zhts3UPTE54gVKFY3ULxPVgz1HmEfxWmWngPj",
  "key27": "2Jmpim2Fh4BT1rwnHJoauKwvoP2Z1vHefQ62AUiSBKgvubpXDFignwTjWvaeH1hbX1VTrXweWbfdvBZVFq1vujdG",
  "key28": "JG8rNa3vbeqzw9Pnxig3gsMoyrGnMFzLWKNLzhKk8b6Ct77Q1CzGxJMSm9vujvG7Un3XBoymJ9cw8GDMatPYjzb",
  "key29": "3MywkrUvbCxCjeUCeWFfycmkfoZyByUehJU2cj3y9ffYz8X4bLA5VUsHDoiG55tuqUT33FeGzuU6y7TLWxijPmgq",
  "key30": "59MzFonSDLGKxDXYTD3PUVGWvhCTNsJ4TXSpL1ZQBnXpw8gReB2qqvoAf1ToczdjqVHa7VpfR7eTMEGcyP1Kc4Wk",
  "key31": "2yk3Ed3KMxLGRWXPqyagwRQH2oHBsbSG2vaz9sCEqPtsJ6Y9wFw2MAKHdwKRwMXg2tTwpLt3h69cCLZh5Lqg4meb",
  "key32": "5oSGmzQQLM2V6tHP2bCk9oepxGeRhXCESiaZZ4w2tA1HvGcs8Lbp2Acp1meepQMGekLuyzeAAwniybJzCpxraoWz",
  "key33": "4AZRYHNrPFQFp7UJhJ4SAzrLuQvyo9pmXeTfK4BE3YyLg4Lj4cwcPRm7AanYzQVsjx9xMP8zs9aK8XufMEMXuFmy",
  "key34": "41Tyj8JYkjxXDKSGe9qdpK9rN2LW2WWNYuLbH1d4YcNEjvzUBvR8RCkAdBbBMMsvYy5svTJNawxqmgaB7yLCDM6M",
  "key35": "376uvFGskC3KHEewXsKjToFGdm6Khat5EaZAKSgYCsFzfuUNnp4Y1UAuzF1mZy5e1tAXTMwis1jNqxLPrJmyEEmS",
  "key36": "5xyNvA1fchfZsVjYZo6edG3VaAb2nAufytGvYqjwjnBvpXmA8J2sfHm9ziMeRStz8NnbB94tMPPR2tNaZz9tDnMC",
  "key37": "4yM1zR1WxYEFbkNahdBGhiAB7m2U5koGiKkHn2JNLHbTybW6M2ra7q989AqUyDLK7SceddAzom5CzYH2o1BgPSSL",
  "key38": "3toudpEJJqWWdariBuxzE6nHZpYd9bAnPs5wL2pee6W4Ma4WvmBysYVkWsevdyrhXj7Gq2wsvnKaFeBMeQN5sZYw",
  "key39": "3kNU96V39HgojECHe8bsCUUwNaDBcGrH4xDpyjBKmq9hRuzxnfPGruRSPmNLNnsY5TRvqrSWaj2VbdNwMBwLFJkG",
  "key40": "2sjeQRusizKhnnznx3jPYEwFahJ1mdHpnXEVWiBfqTvzLKXpE4eSJTM7VvSksMi1cZivWuYqsu82w5VuRx9vrHKa",
  "key41": "2rYFVJMsyVvKLa6z8pqS3XUagvsufPEjRrU1yUkQ7uUcVijYp2KPHmFuZKRzvatfPLpMDaVqkAbe9pb2NZ4pB7YX",
  "key42": "3osnD9YrhXL9A4GriGybsvR1G6fh9vVX7guq2bNBTMqFYTeAcEi3TBaFYEYpnfUf1SFDpxNt61kRM7Jt1swmQHHP",
  "key43": "5JRkZLQ7Xc1yTe5GTSHo275k8n3BkbQwDuqVYKwUSYWjFShNv3Jin1KJpCtof5mSz846r3AGrp2jz88QUpwdEjuc",
  "key44": "45g4wmKj8XM9QpKqcKRryigwajbmHYf6FhfQs9obUX5AHPi2pmj97vsTk9ZaqXUrPDeNSJsiwwEH77dg98P46yV9",
  "key45": "5D3JxpV1abnhVwDsv66qEvdtJSxxsvGNNashXFwY8PrvzHpLpGrxMRocjkRaH4jbssAyuEkouuTdbMnvgPoKsHez"
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
