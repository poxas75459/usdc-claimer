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
    "2fGdsfV3HfzFnmovhZdXm9tQPudeBM9vRpy3ZwyreHA4k9qM6HFzBtRpLNeF9estXwRNLGdYkUBwUDKA4Z1kc7Qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63bF4DZ9RnYXgBskyy6AtBw8gZYtkGpMqvqLjWunUdCGrgVFfvP2td95aNVepA6J2XspCJYjmzZ4rq89cLjC5Df6",
  "key1": "MxJFaAkvp5knhn7aJFm3H1fMC8XkpuwjRRWWN7bu4Y1Tf39JZx6r4ktjv2Kt9o8CRZPmmZGR19i8j6PxVrCks99",
  "key2": "3w9shnbiYfqQKrgsHVp9dqWHkvSPxFuyQmTLUhXK3RrXDDM6cjNKMc3csQEmAyrLMkVxLgaxNeT1daebcMzKYG7a",
  "key3": "3z2XFfBm6iaoo7F3zjDfzDexKjotdUnx7Ua2VFaNpFh4w5kWDv1GFecbox15dNyGZVFC9zfk3sU4rhWFvpgiru4q",
  "key4": "7M7ic5vT2stK5iFTjtaeZWBZSgvDNDJBDrCXCKkvSFpidzhDEAZRFsMHS2E7VWiEAhdhdZnAqN974CsStRthGzN",
  "key5": "2yaPhpuDqNGePKtSx8jnc6grMwWpYTdGPorn3n167rdEz1axZ12QnpZyVqRP6fksgMQS7F6VyMhSUCmbQEX4Wuiy",
  "key6": "5xPad19MDX86LEtaEoV8ht1aS9jRE8QqFsbkJ45Yaft4cyNSpYCeBtDWmQsZcp3FDK4esLg7TFcz81jrHDLUXbnY",
  "key7": "2uhwgUZFRhQh6Rg7GwN14FYdvXuJnpys5wRofNeudGnwJHWcBXYoQWDYQXJDRHfjKmnffudzMp7nG7pP4zYch3pr",
  "key8": "2pGp97XSU38kYB91AswTMLYuXKaTwdXfoTo5XNSRazpgQ9uuLEc2Lfe2xNQnriNmC32KcEWyRTcNrtbB3LZ2tJXj",
  "key9": "3snTx1VYHKmgRZGdV4Qh4KPg3EUBDaj7gBH93cWp3A3XMx1Fj5WDw42Jf33YdRGMCpnkCuSNHasikcX1VNu2RYFj",
  "key10": "334DAQSfwehatsZoqAxjVmKsGRcsv3gRbJP7aU1AjYWW7D317ZALSM7RQSVxiDQuduMwJX8Er65c1QpdUWijgipe",
  "key11": "26dYQcdXYdCVZmWuAHjxzs58zf3ApjTcvrZevcET4oRH9NpNb5kvqV8Sy61rB5gn8gxE7ribkdPH3fwEcrjoyUeL",
  "key12": "52Q3QaT8bTQyhrwjfs3t9ZNvDMfqtsd5r3TD4nqFU8JSTZsja6StrjAzKkDNu1PeNKtfxhQmhT1azcaS1ZuQ2pj8",
  "key13": "gd2nA5PDrgnxgb3dpSFFQS6BDcQQz5ynvRHGvqgcA9Wkw5vPvKYhd9yf2qR55drRaeujy7gswP7cH4qSRRep5Ni",
  "key14": "QzT6pXgjEETWdK1rYPaEHMHDLC8gnjCEMXUyci1cdWu6ueGtEGNEa4BLGd4KxWuyxjcMxgA5vquNbc5FxGuszoC",
  "key15": "2w8TZfGgrgU3o4N4LFQXuaPbEYg2Cikr1rtzE1URmX9TTXgJDsG6ZriQcSLCnStNLBj7R4xjLrW3MYezmpK1AwXU",
  "key16": "2EJMzz6PsQYSiXHrkUkkSpSUoVGg5C5owUhv2MgwHDPaY1H4VQEcJN55EYLcbkfh7aG5i2A9BmvqYEHcFwixCzaX",
  "key17": "4HtNUPkvYAnt4FtdimFJSRTDmVbAVgfb8rSmfEFJZMF4ogvWcMdYnY3DoRUjcQmPXPtPFxbPcRqoiBp59BbQBKK",
  "key18": "659Usu1KywPyFjJ5QJZKkFBL8G69ViESKUoxcSQP5K2481jLeRrgrn8mxkrN8D3KwWtCgB61aP1VsWmSWxNceYsi",
  "key19": "3LBibus3rnBeVvPN6PQydcfLun6QejmQ9R4zmGZZERMP4RsWeEJXcnzLKNVy5WvWFRRiWHJQdzmXFNF67kbfNgGm",
  "key20": "5gMVdVakp64RqmPNWzD7tV98UJMgV8juX5sVnMurrnp1EU5VVAPgb9ZfL8TBNQfPejABFhk9Z7WVeVtAsyqqbgW5",
  "key21": "2myVsrZ49mFfx1rvpv4Z2aExr4WZseRbzUzJw9rJzLdZfAiovqVbe8smhVbZNDjLSYjAezwf2gyReeVu1QrKqtsH",
  "key22": "2cr71DSfPbPVB6LVuypGu6aowXU9Lsrh2rSL8nLBp93difBC9PkP24WQRRG2vkU6oaEVQ2xTEA3oXW1EVmJk3bLW",
  "key23": "3FT1B1UtvuvFE44Dw35AsVBWCjPsqwXwACzHqdkD2N5ywWRerq555fkX1n5Txx21tfudWNbU3XbTZxeR13YKNpqn",
  "key24": "3ZCDfrhxeZBL2KrRfrMWoJai2UVh35xikhxWoCHBGYcNoPrKA7XBaSB9tP4MBR9geb7sQCpQm9ovJWXEcN9oyQxW",
  "key25": "24oz8kZawW41vy4abW1oX7nsYZrND7kM5qREB3vPAF8Czmdoukx8ZvJ3Qvjo2ft9ThinKQTnmjmohcEuQR8tACj4",
  "key26": "4wrYbJJuFQWtDQ8qxoJyx7s3FS2EMwdyGYczxUVRd4hLvm3zjgu5CUBrQndZDKEdnh91t6BoNUMhYx1ZVJSPvWpT",
  "key27": "duJXWmZkSHAoVU2M8gusMLasrFzqZiTnw1ijEcj9snAfhUXrRCvSkYPwk9CWGF1we6bmJ71vdTe6kN9qibbifgZ",
  "key28": "5QPW6FLqhPtV6nHCjmvCtBYBcg3KspVfRkW9d21eLcXx6xFoQNL8T81V7fk73hBRPD1KhsBbh3W5YcvmXZAw46n6",
  "key29": "2vueNPcWi5kdVtv8xUtGadd9NfC6xCE3h8u3YTDo4idnkTYYZ7RGRbHPhWQoFntVvS6yA9iXSo1iL3rpDPGrr41Z",
  "key30": "3Vf7dDzJXYmhTeAkdDKxuPxzY1CaZiXxJG1bN9Cz9mXkekC4PKhfwBy4oxo9p5ThHA59QyWUAyrPF7KpJpAgV5n4",
  "key31": "4w1vLvVj61cDtjLQcXLyjKz49hWTAnEoxUd88HN8mPnGdAjokRpUJYozabj4i7MZQ6fd22a3opFTxoNt4pLSPMHG",
  "key32": "3tuTB3PtNLFqXbunZ98PsKnaUKxr5Vhmyt73XN9PgJy6Soear7jMLku8BiRfdofwP12PN2cehxhHR2aws3eppQkM",
  "key33": "3bEn6a7iKxw5435FYnirwzTyUmuQ9yG96Rv5FXAH9zQ2towS68Wfbr58GWrS8xV8ugi3bQrvwktnv7g4DoFKU4RX",
  "key34": "4kVHCAs4FTjhArUwfWaGuvz7aQ6RMWH4sQDdSbvHtL3kNsVEchTg2Xw8YAzgbUaCzziecS9aAkVCybCgCsVZ4hds",
  "key35": "3chEmC2QS128Wca6WkuJKFHNVa1c2DaZa8EWTxLg1Nti6wg5CKkLdhnbDTtpfhTFy8eApLxVgLRkYaNpgmDhyia4",
  "key36": "2xGcWsHXtZKwhifctS3rZije9JrQtvPVUPd259FTjgaSvdTTgVfQFy4vAL2YRpMPsdpEDauqgZwpHR15BBbtaMRY",
  "key37": "TTZ13yXTpPBtKWxKFRAKUShTEfcxy75FB6W81ozUqt4YfPNegkxAw9zeqo6HYDFz7kQYQGHeoBUpTLKDgw6rB59",
  "key38": "4fd7dphUNSQSGL3bX5cp8YHfCsLeM8yZhdZ9b284BStrpNaPh8GmK7Tm6SSw5ytoyTAxEnT7PRaFXyUqpXncKPxn",
  "key39": "HuYzPuNecwQFTMAhipLDHaJVJHVxGrHQmekdP2EZxWp2atSFbJNz7eR1NyG9MdRMq9MhNj5L5YKukbrRstsBTXy",
  "key40": "5pCBpjHyK9pPRZDZNvNo6dHRCE712vsSdv3U2xzr8bcrjsMP1GY6wVHo6nfrrVZ9VRn22cHYTbaHyWgJeB1CNUCR",
  "key41": "4x8kbAchtGDrt4Q12u6SESu7yutTUAiPhWgQSwPGydqcL7UkogzQXp1jFTqjAy8ezca5KW4ivSuuK4vQi4ALgb84",
  "key42": "2cxGNtFEue2FjcD11VZQAXSWAmPLsSokPUKJYH82WknVcUuUN5tKQRvVaZi1MR2hbtMYscKH1WerKEKiYd3hwNrs",
  "key43": "4d45SJkwbHEW59ovFzimvHSNfAAELPWhmCjAvwmfZpsGCjUE8zW8bx6LQDxsd9EJa3H6p5GwLhFcPqCXdQFeJgf5",
  "key44": "5zvkScMi6P3UHBMhmBrXWBChHtXBMo6fVCkcbCJkq8wGzetsDeAU14jTHwBp4SVzVkV5yPW3dB5NehiyaDi1ab2a",
  "key45": "3zvUenF6zDJj7PEDHcyaH2oJyvKGWXmMsUyyDBnTie6U4S2ajx2Vyb3xf2TJTSM546TcnjTi1s2MgVMxKwoEbCc8",
  "key46": "2YB6RoNx27ozki4TAMryVcgKcqXN5mT7m9i54RAuxWnX7C3XzBPFdAdXAGVcpDfdMcuwcb32oRnHsvGmxvPMQ15W",
  "key47": "6fqz5UXWS2h8hpqMEKioWxZq7Qr9GXaBmfeAruQHcF1KMohB1LWozkadebNMqryGQS1Q5FKbJ9kyAEVSL9PAdhn"
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
